import { useState } from 'react';
import { weapons } from '../../../data/weapons';
import { Link } from 'react-router-dom';

export default function WeaponsComparison() {
  const [filterDLC, setFilterDLC] = useState('all'); // all / yes / no
  const [filterType, setFilterType] = useState('all'); // all / Rifle / Bow / etc.

  const filteredWeapons = weapons.filter((w) => {
    if (filterDLC !== 'all' && (filterDLC === 'yes') !== w.dlc) return false;
    if (filterType !== 'all' && w.type !== filterType) return false;
    return true;
  });

  const weaponTypes = [...new Set(weapons.map((w) => w.type))]; // unique types

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-green-800">Weapons Comparison</h1>

      <Link
        to="/weapons/ammo"
        className="inline-block bg-green-800 text-white px-4 py-2 rounded hover:bg-green-700 transition mb-4"
      >
        View Ammunition Comparison
      </Link>

      <Link
        to="/weapons/sights"
        className="inline-block bg-green-800 text-white px-4 py-2 rounded hover:bg-green-700 transition"
      >
        View Sights & Optics
      </Link>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-4">
        <div>
          <label className="mr-2 font-medium">DLC:</label>
          <select
            className="border px-2 py-1 rounded"
            value={filterDLC}
            onChange={(e) => setFilterDLC(e.target.value)}
          >
            <option value="all">All</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        <div>
          <label className="mr-2 font-medium">Type:</label>
          <select
            className="border px-2 py-1 rounded"
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option value="all">All</option>
            {weaponTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Weapons Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Type</th>
              <th className="px-4 py-2 border">Damage</th>
              <th className="px-4 py-2 border">Range (m)</th>
              <th className="px-4 py-2 border">Caliber</th>
              <th className="px-4 py-2 border">Recoil</th>
              <th className="px-4 py-2 border">DLC</th>
            </tr>
          </thead>
          <tbody>
            {filteredWeapons.map((w) => (
              <tr key={w.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border">{w.name}</td>
                <td className="px-4 py-2 border">{w.type}</td>
                <td className="px-4 py-2 border">{w.damage}</td>
                <td className="px-4 py-2 border">{w.range}</td>
                <td className="px-4 py-2 border">{w.caliber}</td>
                <td className="px-4 py-2 border">{w.recoil}</td>
                <td className="px-4 py-2 border">{w.dlc ? 'Yes' : 'No'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
