import { useState } from 'react';
import { scents } from '../../data/scents';

export default function ScentsPage() {
  const [search, setSearch] = useState('');

  const filteredScents = scents.filter((scent) =>
    scent.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-green-800">Scents & Lures</h1>

      <div className="mb-4 text-gray-700 bg-gray-50 p-4 rounded">
        <p>
          Scents are a type of lure that uses the olfactory senses of the animals for attraction. Usually, most
          scents contain urine of the respective animal which functions as a natural attractant. The effective range
          of a scent depends on wind conditions. High wind speeds give a longer but narrower effective cone, while a
          low wind speed will give a shorter but wider cone. All scents cost 1500 for 10 uses, and they all weight 0.5.
        </p>
      </div>

      {/* Search */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search scent..."
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
              <th className="px-4 py-2 text-left">Suitable For</th>
              <th className="px-4 py-2 text-left">Duration</th>
              <th className="px-4 py-2 text-left">Range</th>
              <th className="px-4 py-2 text-left">DLC</th>
            </tr>
          </thead>
          <tbody>
            {filteredScents.map((scent, idx) => (
              <tr
                key={idx}
                className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
              >
                <td className="px-4 py-2 font-medium">{scent.name}</td>
                <td className="px-4 py-2">{scent.type}</td>
                <td className="px-4 py-2">{scent.suitableFor.join(', ')}</td>
                <td className="px-4 py-2">{scent.duration}</td>
                <td className="px-4 py-2">{scent.range}</td>
                <td className="px-4 py-2">
                  {scent.dlc ? (
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

        {filteredScents.length === 0 && (
          <p className="text-gray-500 mt-4">No scents found.</p>
        )}
      </div>
    </div>
  );
}