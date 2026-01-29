import { mapZones } from '../data/mapZones';
import { useState } from 'react';

export default function InteractiveMap({ regionId, subregionId }) {
  const map = mapZones.find(
    (m) => m.regionId === regionId && (!subregionId || m.subregionId === subregionId)
  );

  const [selectedZone, setSelectedZone] = useState(null);

  if (!map) return <p>No map data available for this region.</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-green-800">Map Zones</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {map.zones.map((zone) => (
          <div
            key={zone.id}
            className={`border p-4 rounded cursor-pointer hover:bg-green-100 ${
              selectedZone === zone.id ? 'bg-green-200' : ''
            }`}
            onClick={() => setSelectedZone(zone.id)}
          >
            <h3 className="font-bold">{zone.name}</h3>
            {selectedZone === zone.id && (
              <ul className="mt-2 list-disc list-inside text-gray-700">
                {zone.animals.map((animal, idx) => (
                  <li key={idx}>{animal}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
