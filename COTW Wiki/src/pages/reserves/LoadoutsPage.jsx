import { loadouts } from '../../data/loadouts';

export default function LoadoutsPage({ regionId, subregionId }) {
  const regionLoadouts = loadouts.filter(
    (l) => l.regionId === regionId && (!subregionId || l.subregionId === subregionId)
  );

  if (regionLoadouts.length === 0) return <p>No loadouts available for this area.</p>;

  return (
    <div className="space-y-6">
      {regionLoadouts.map((l, idx) => (
        <div key={idx} className="border p-4 rounded-lg bg-gray-50">
          <h3 className="text-xl font-bold mb-2">
            {l.name} {l.dlc && <span className="text-sm bg-green-800 text-white px-2 py-1 rounded ml-2">DLC</span>} 
            {l.funny && <span className="text-sm bg-yellow-400 text-black px-2 py-1 rounded ml-2">Funny</span>}
          </h3>
          <p className="mb-2"><strong>Placement:</strong> {l.placement}</p>
          <ul className="list-disc list-inside">
            {l.weapons.map((w, i) => (
              <li key={i}>
                {w.name} {w.caliber ? `(${w.caliber})` : ''} - {w.type}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
