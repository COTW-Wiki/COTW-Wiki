import { hotzones } from '../../data/hotzones';
import { useState } from 'react';

export default function HotzonesPage({ regionId, subregionId }) {
  const regionHotzones = hotzones.filter(
    (h) => h.regionId === regionId && (!subregionId || h.subregionId === subregionId)
  );

  const [selectedAnimal, setSelectedAnimal] = useState(
    regionHotzones.length > 0 ? regionHotzones[0].animal : ''
  );

  if (regionHotzones.length === 0) return <p>No hotzones data available for this area.</p>;

  const animalZones = regionHotzones.find((h) => h.animal === selectedAnimal)?.zones || [];

  const animals = [...new Set(regionHotzones.map((h) => h.animal))];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4 text-green-800">Hotzones</h1>

      {/* Animal selector */}
      <div className="mb-4">
        <label className="mr-2 font-medium">Select Animal:</label>
        <select
          className="border px-2 py-1 rounded"
          value={selectedAnimal}
          onChange={(e) => setSelectedAnimal(e.target.value)}
        >
          {animals.map((animal) => (
            <option key={animal} value={animal}>{animal}</option>
          ))}
        </select>
      </div>

      {/* Zones list */}
      <ul className="list-disc list-inside">
        {animalZones.map((zone, idx) => (
          <li key={idx}>{zone}</li>
        ))}
      </ul>
    </div>
  );
}
