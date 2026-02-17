import { useParams, Link, useLocation } from 'react-router-dom';
import { weapons } from '../../../data/weapons';
import ammunition, { ammo as ammoMeta } from '../../../data/ammunition';
import weaponAmmoMap from '../../../data/weaponAmmoMap';
import { sights } from '../../../data/sights';
import '../../../styles/wiki.css';

function slug(name) {
  return encodeURIComponent(name.replace(/\s+/g, '_'));
}

export default function WeaponDetail() {
  const { weaponId } = useParams();
  const weapon = weapons.find((w) => w.id === weaponId);
  const location = useLocation();
  const backTo = (location && location.state && location.state.from) ? location.state.from : '/weapons';
  let backLabel = '← Back to Weapons List';
  if (backTo.startsWith('/cash')) backLabel = '← Back to Cash';

  if (!weapon) {
    return (
      <div className="wiki-page">
        <div className="wiki-inner">
          <Link to="/weapons" className="wiki-link">Back to list</Link>
          <h2 className="wiki-h2">Weapon not found</h2>
          <p className="wiki-p-mb">No weapon with id "{weaponId}" exists in the data.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="wiki-page">
      <div className="wiki-inner">
        <div className="wiki-header">
          <span>{weapon.name}</span>
          <Link to={backTo} className="wiki-btn-grey" style={{ fontSize: '0.8rem' }}>{backLabel}</Link>
        </div>

        <div className="wiki-layout">
          {/* SIDEBAR */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">{weapon.name}</div>
            <div className="wiki-sidebar-image wiki-sidebar-image--contain" style={{ backgroundColor: 'var(--wiki-bg-sidebar)' }}>
              {weapon.images && weapon.images[0] && <img src={weapon.images[0]} alt={weapon.name} />}
            </div>

            <div className="wiki-sidebar-header" style={{ fontSize: '0.9rem' }}>Statistics</div>
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Type</span>
              {weapon.type || '—'}
            </div>
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Magazine</span>
              {weapon.magazine ?? '—'}
            </div>
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Accuracy</span>
              {weapon.accuracy ?? '—'}
            </div>
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Recoil</span>
              {weapon.recoil ?? '—'}
            </div>
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Reload</span>
              {weapon.reload ?? '—'}
            </div>
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Hipshot</span>
              {weapon.hipshot ?? '—'}
            </div>
          </aside>

          {/* MAIN CONTENT */}
          <main className="wiki-main">
            {weapon.description && (
              <div className="wiki-quote">
                <p>{weapon.description}</p>
              </div>
            )}

            <h2 className="wiki-h2">Compatible Ammunition</h2>
            <div className="wiki-table-container wiki-p-mb">
              <table className="wiki-table">
                <thead>
                  <tr className="bg-[var(--wiki-bg-sidebar-header)]">
                    <th className="wiki-th">Ammo Type</th>
                  </tr>
                </thead>
                <tbody>
                  {(() => {
                    const compatibleMap = new Map();
                    const addCompatible = (id, payload) => {
                      if (!id || compatibleMap.has(id)) return;
                      compatibleMap.set(id, { id, ...payload });
                    };

                    // Data processing logic kept exactly as original
                    if (Array.isArray(weapon.compatibleAmmo)) {
                      weapon.compatibleAmmo.forEach(item => {
                        const id = typeof item === 'string' ? item : item.id;
                        const ammoObj = ammunition.find(a => a.id === id) || ammoMeta.find(a => a.id === id);
                        addCompatible(id, { name: ammoObj?.name || id });
                      });
                    }
                    
                    const compatible = Array.from(compatibleMap.values());
                    return compatible.map((c) => (
                      <tr key={c.id}>
                        <td className="wiki-td">
                          <Link to={`/weapons/ammo/${encodeURIComponent(c.id)}`} className="wiki-link">
                            {c.name}
                          </Link>
                        </td>
                      </tr>
                    ));
                  })()}
                </tbody>
              </table>
            </div>

            <h2 className="wiki-h2">Compatible Sights</h2>
            <ul className="wiki-ul">
              {(sights || []).filter(s => s.compatibleWith?.some(item => (typeof item === 'string' ? item === weapon.id : item.id === weapon.id))).map(sight => (
                <li key={sight.name} className="wiki-li">
                  <Link to={`/weapons/sights/${slug(sight.name)}`} className="wiki-link">{sight.name}</Link>
                </li>
              ))}
            </ul>

            {weapon.notes && (
              <>
                <h2 className="wiki-h2">Notes</h2>
                <div className="wiki-p-mb">{weapon.notes}</div>
              </>
            )}

            {weapon.references && weapon.references.length > 0 && (
              <>
                <h2 className="wiki-h2">References</h2>
                <ul className="wiki-ul">
                  {weapon.references.map((r, idx) => (
                    <li key={idx} className="wiki-li" style={{ color: 'var(--wiki-link)' }}>{r}</li>
                  ))}
                </ul>
              </>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}