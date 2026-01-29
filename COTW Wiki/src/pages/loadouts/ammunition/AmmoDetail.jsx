import React from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import ammunition from '../../../data/ammunition';
import { weapons } from '../../../data/weapons';

export default function AmmoDetail() {
  const { ammoId } = useParams();
  const decodedId = decodeURIComponent(ammoId || '');
  const location = useLocation();
  const backTo = (location && location.state && location.state.from) ? location.state.from : '/weapons/ammo';
  let backLabel = 'Back to ammunition';
  if (backTo.startsWith('/cash')) backLabel = '← Back to Cash';
  const ammo = Array.isArray(ammunition) ? ammunition.find(a => a.id === decodedId || a.name === decodedId) : null;

  if (!ammo) {
    return (
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-green-800">Ammunition not found</h2>
        <p className="mt-4">No ammo with id <code>{decodedId}</code> was found.</p>
        <Link to={backTo} className="mt-4 inline-block text-green-700">{backLabel}</Link>
      </div>
    );
  }

  function deriveCaliber(a) {
    if (!a) return '—';
    if (a.caliber) return a.caliber;
    const n = (a.name || '').trim();
    if (!n) return '—';
    return n.split(/\s+/)[0];
  }

  // Find compatible weapons: either declared on weapons.compatibleAmmo or via ammo.relatedIds
  const relatedIds = Array.isArray(ammo.relatedIds) ? ammo.relatedIds : [];

  const compatible = weapons.filter(w => {
    // check weapon.compatibleAmmo entries
    if (Array.isArray(w.compatibleAmmo) && w.compatibleAmmo.length > 0) {
      for (const item of w.compatibleAmmo) {
        const id = typeof item === 'string' ? item : (item && item.id) ? item.id : item?.name;
        if (!id) continue;
        if (id === ammo.id || id === ammo.name) return true;
      }
    }

    // check ammunition.relatedIds
    if (relatedIds.includes(w.id)) return true;

    return false;
  });

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-green-800 mb-4">{ammo.name}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded shadow">
          {ammo.images && ammo.images[0] ? (
            <div className="mb-3">
              <img src={ammo.images[0]} alt={ammo.name} className="w-40 h-auto rounded" />
            </div>
          ) : null}
          <h3 className="font-semibold">Stats</h3>
          <table className="mt-2 text-sm w-full">
            <tbody>
              <tr><td className="pr-2 font-medium">Caliber</td><td>{deriveCaliber(ammo)}</td></tr>
              <tr><td className="pr-2 font-medium">Type</td><td>{ammo.type || ammo.category || '—'}</td></tr>
              <tr><td className="pr-2 font-medium">Class</td><td>{ammo.stats?.class ?? '—'}</td></tr>
              <tr><td className="pr-2 font-medium">Range</td><td>{ammo.stats?.range ?? '—'}</td></tr>
              <tr><td className="pr-2 font-medium">Penetration</td><td>{ammo.stats?.penetration ?? '—'}</td></tr>
              <tr><td className="pr-2 font-medium">Expansion</td><td>{ammo.stats?.expansion ?? '—'}</td></tr>
              <tr><td className="pr-2 font-medium">Weight</td><td>{ammo.weight ?? '—'}</td></tr>
              <tr><td className="pr-2 font-medium">Price</td><td>{ammo.value ?? '—'}</td></tr>
            </tbody>
          </table>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold">Description</h3>
          <p className="mt-2 text-sm text-gray-700">{ammo.description || '—'}</p>
        </div>
      </div>

      <div className="mt-6 bg-white p-4 rounded shadow">
        <h3 className="font-semibold">Compatible Weapons</h3>
        {compatible.length === 0 ? (
          <p className="mt-2 text-sm">No compatible weapons listed.</p>
        ) : (
          <table className="mt-2 w-full text-sm">
            <thead className="bg-green-100">
              <tr>
                <th className="px-3 py-1 text-left">Weapon</th>
                <th className="px-3 py-1 text-left">Type</th>
                <th className="px-3 py-1 text-left">DLC</th>
              </tr>
            </thead>
            <tbody>
              {compatible.map(w => (
                <tr key={w.id} className="odd:bg-gray-50">
                  <td className="px-3 py-1">
                    <Link to={`/weapons/${encodeURIComponent(w.id)}`} className="text-green-800 hover:underline">{w.name}</Link>
                  </td>
                  <td className="px-3 py-1">{w.type}</td>
                  <td className="px-3 py-1">{w.dlc ? <span className="text-xs bg-green-800 text-white px-2 py-0.5 rounded">DLC</span> : '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <div className="mt-4">
        <Link to={backTo} className="text-green-700 hover:underline">{backLabel}</Link>
      </div>
    </div>
  );
}
