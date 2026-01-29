import { useState } from 'react';
import { placeables } from '../../data/placeables';

export default function PlaceablesPage() {
  const [search, setSearch] = useState('');

  const filteredPlaceables = placeables.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-green-800">Placeables</h1>

      {/* Search */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search placeable..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 w-full sm:w-1/2 focus:ring-2 focus:ring-green-600 outline-none"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded-lg">
          <thead className="bg-green-100">
            <tr>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Type</th>
              <th className="px-4 py-2 text-left">Weight</th>
              <th className="px-4 py-2 text-left">Deploy Limit</th>
              <th className="px-4 py-2 text-left">Description</th>
              <th className="px-4 py-2 text-left">DLC</th>
            </tr>
          </thead>
          <tbody>
            {filteredPlaceables.map((item, idx) => (
              <tr
                key={idx}
                className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
              >
                <td className="px-4 py-2 font-medium">{item.name}</td>
                <td className="px-4 py-2">{item.type}</td>
                <td className="px-4 py-2">{item.weight}</td>
                <td className="px-4 py-2">{item.deployLimit}</td>
                <td className="px-4 py-2">{item.description}</td>
                <td className="px-4 py-2">
                  {item.dlc ? (
                    <span className="bg-green-800 text-white px-2 py-1 rounded text-sm">
                      DLC
                    </span>
                  ) : (
                    '—'
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredPlaceables.length === 0 && (
          <p className="text-gray-500 mt-4">No placeables found.</p>
        )}
      </div>
    </div>
  );
}