import { useState } from 'react';
import { callers } from '../../data/callers';

export default function CallersPage() {
  const [search, setSearch] = useState('');

  const filteredCallers = callers.filter((caller) =>
    caller.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-green-800">Animal Callers</h1>

      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search caller..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 w-full sm:w-1/2 focus:ring-2 focus:ring-green-600 outline-none"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded-lg">
          <thead className="bg-green-100">
            <tr>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Suitable For</th>
              <th className="px-4 py-2 text-left">Range</th>
              <th className="px-4 py-2 text-left">Effectiveness</th>
              <th className="px-4 py-2 text-left">Sound Type</th>
              <th className="px-4 py-2 text-left">DLC</th>
            </tr>
          </thead>
          <tbody>
            {filteredCallers.map((caller, idx) => (
              <tr
                key={idx}
                className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
              >
                <td className="px-4 py-2 font-medium">{caller.name}</td>
                <td className="px-4 py-2">{caller.suitableFor.join(', ')}</td>
                <td className="px-4 py-2">{caller.range}</td>
                <td className="px-4 py-2">{caller.effectiveness}</td>
                <td className="px-4 py-2">{caller.soundType}</td>
                <td className="px-4 py-2">
                  {caller.dlc ? (
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

        {filteredCallers.length === 0 && (
          <p className="text-gray-500 mt-4">No callers found.</p>
        )}
      </div>
    </div>
  );
}