import { useParams, Link, useLocation } from 'react-router-dom';
import { weapons } from '../../../data/weapons';
import ammunition, { ammo as ammoMeta } from '../../../data/ammunition';
import weaponAmmoMap from '../../../data/weaponAmmoMap';
import { sights } from '../../../data/sights';

function slug(name) {
  return encodeURIComponent(name.replace(/\s+/g, '_'));
}

export default function WeaponDetail() {
  const { weaponId } = useParams();
  const weapon = weapons.find((w) => w.id === weaponId);
  const location = useLocation();
  const backTo = (location && location.state && location.state.from) ? location.state.from : '/weapons/list';
  let backLabel = '← Back to Weapons List';
  if (backTo.startsWith('/cash')) backLabel = '← Back to Cash';

  if (!weapon) {
    return (
      <div className="max-w-3xl mx-auto p-6 mt-8">
        <Link to="/weapons/list" className="text-sm text-green-700 hover:underline">Back to list</Link>
        <h2 className="text-2xl font-semibold mt-4">Weapon not found</h2>
        <p className="text-gray-600 mt-2">No weapon with id "{weaponId}" exists in the data.</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6 mt-8">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-3xl font-bold text-green-800">{weapon.name}</h1>
        <Link to={backTo} className="text-sm text-green-700 hover:underline">{backLabel}</Link>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        {weapon.description && <p className="text-gray-700 mb-4">{weapon.description}</p>}

        {/* Divider & heading: visually separate description and ammo */}
        <div className="mt-4">
          <hr className="border-t border-gray-200 mb-3" />
          <div className="text-xs uppercase text-gray-500 tracking-wide mb-2">Compatible Ammunition</div>
        </div>
        <div className="mb-6">
          {(() => {
            const compatibleMap = new Map();

            const addCompatible = (id, payload) => {
              if (!id) return;
              if (compatibleMap.has(id)) return;
              compatibleMap.set(id, { id, ...payload });
            };

            // If explicit compatibleAmmo provided on weapon, prefer those (but still allow de-duplication)
            if (Array.isArray(weapon.compatibleAmmo) && weapon.compatibleAmmo.length > 0) {
              for (const item of weapon.compatibleAmmo) {
                if (!item) continue;

                if (typeof item === 'string') {
                  const id = item;
                  const ammoObj = ammunition.find((a) => a.id === id || a.name === id) || ammoMeta.find((a) => a.id === id || a.name === id) || null;
                  addCompatible(id, { name: ammoObj?.name || id, description: ammoObj?.description || null, images: ammoObj?.images || [] });
                } else if (typeof item === 'object') {
                  const id = item.id || item.name;
                  const ammoObj = ammunition.find((a) => a.id === id || a.name === id) || ammoMeta.find((a) => a.id === id || a.name === id) || null;
                  addCompatible(id, { name: item.name || ammoObj?.name || id, description: ammoObj?.description || null, images: ammoObj?.images || [] });
                }
              }
            }

            // Also scan ammunition lists for relatedIds — this may add items already present, addCompatible will dedupe
            for (const a of ammunition) {
              if (Array.isArray(a.relatedIds) && a.relatedIds.includes(weapon.id)) {
                addCompatible(a.id, { name: a.name, description: a.description, images: a.images || [] });
              }
            }

            for (const a of ammoMeta) {
              const id = a.id || a.name;
              if (Array.isArray(a.relatedIds) && a.relatedIds.includes(weapon.id)) {
                addCompatible(id, { name: a.name || id, description: a.description || null, images: a.images || [] });
              }
            }

            // Fallback: include ammo listed in the wiki-derived weaponAmmoMap
            try {
              const wikiList = weaponAmmoMap && weaponAmmoMap[weapon.id];
              if (Array.isArray(wikiList)) {
                for (const slug of wikiList) {
                  if (!slug) continue;
                  // prefer matching ammunition object by id, then by name
                  const ammoObj = ammunition.find(a => a.id === slug || a.name === slug) || ammoMeta.find(a => a.id === slug || a.name === slug) || null;
                  addCompatible(slug, { name: ammoObj?.name || slug, description: ammoObj?.description || null, images: ammoObj?.images || [] });
                }
              }
            } catch {
              // ignore — weaponAmmoMap may not exist in some contexts
            }

            const compatible = Array.from(compatibleMap.values());

            if (compatible.length === 0) {
              return <div className="text-gray-600">No compatible ammunition listed.</div>;
            }

            return (
              <ul className="space-y-3">
                {compatible.map((c) => (
                  <li key={c.id || c.name} className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center overflow-hidden">
                      {c.images && c.images[0] ? (
                        <img src={c.images[0]} alt={c.name || c.id} className="w-full h-full object-contain" />
                      ) : (
                        <span className="text-sm text-gray-400">no image</span>
                      )}
                    </div>
                    <div>
                      <div className="font-medium">
                        <Link to={`/weapons/ammo/${encodeURIComponent(c.id || c.name)}`} className="text-green-800 hover:underline">{c.name || c.id}</Link>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            );
          })()}
        </div>

        <div className="mb-6">
          <hr className="border-t border-gray-200 mb-3" />
          <div className="text-xs uppercase text-gray-500 tracking-wide mb-2">Compatible Sights</div>

          {(() => {
            const list = (sights || []).filter((s) => {
              const arr = s.compatibleWith || [];
              return arr.some((item) => {
                if (!item) return false;
                if (typeof item === 'string') return item === weapon.id || item === weapon.name;
                if (typeof item === 'object') return (item.id === weapon.id || item.id === weapon.name || item.name === weapon.id || item.name === weapon.name);
                return false;
              });
            });

            if (!list || list.length === 0) {
              return <div className="text-gray-600">No compatible sights listed.</div>;
            }

            return (
              <ul className="space-y-3">
                {list.map((s) => (
                  <li key={s.name} className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center overflow-hidden">
                      {s.images && s.images[0] ? (
                        <img src={s.images[0]} alt={s.name} className="w-full h-full object-contain" />
                      ) : (
                        <span className="text-sm text-gray-400">no image</span>
                      )}
                    </div>
                    <div>
                      <div className="font-medium">
                        <Link to={`/weapons/sights/${slug(s.name)}`} className="text-green-800 hover:underline">{s.name}</Link>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            );
          })()}
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <div className="text-sm text-gray-500">Type</div>
            <div className="text-lg">{weapon.type}</div>
          </div>

          <div>
            <div className="text-sm text-gray-500">Magazine</div>
            <div className="text-lg">{weapon.magazine ?? '—'}</div>
          </div>

          <div>
            <div className="text-sm text-gray-500">Accuracy</div>
            <div className="text-lg">{weapon.accuracy ?? '—'}</div>
          </div>

          <div>
            <div className="text-sm text-gray-500">Recoil</div>
            <div className="text-lg">{weapon.recoil ?? '—'}</div>
          </div>

          <div>
            <div className="text-sm text-gray-500">Reload</div>
            <div className="text-lg">{weapon.reload ?? '—'}</div>
          </div>

          <div>
            <div className="text-sm text-gray-500">Hipshot</div>
            <div className="text-lg">{weapon.hipshot ?? '—'}</div>
          </div>
        </div>

        {weapon.notes && (
          <div className="mb-4">
            <div className="text-sm text-gray-500">Notes</div>
            <div className="text-gray-800">{weapon.notes}</div>
          </div>
        )}
        {weapon.references && weapon.references.length > 0 && (
          <div>
            <div className="text-sm text-gray-500">References</div>
            <ul className="list-disc list-inside text-blue-600">
              {weapon.references.map((r) => (
                <li key={r}>
                  <span className="hover:underline">{r}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        
      </div>
    </div>
  );
}
