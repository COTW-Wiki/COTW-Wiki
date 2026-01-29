import { useParams, Link } from 'react-router-dom';
import { decoys } from '../../data/decoys';

function slug(name) {
  return encodeURIComponent(name.replace(/\s+/g, '_'));
}

export default function DecoyDetail() {
  const { decoyId } = useParams();

  const decoy = decoys.find((d) => d.id === decoyId || slug(d.name) === decoyId || encodeURIComponent(d.name.replace(/\s+/g, '_')) === decoyId);

  if (!decoy) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold text-red-700">Decoy not found</h1>
        <p className="mt-4">No decoy matches the id: <code>{decoyId}</code></p>
        <Link to="/lures/decoys" className="text-green-800 hover:underline mt-4 block">Back to Decoys</Link>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-3xl font-bold text-green-800">{decoy.name}</h1>
        <Link to="/lures/decoys" className="text-sm text-green-700 hover:underline">Back to Decoys</Link>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        {decoy.description && <p className="text-gray-700 mb-4">{decoy.description}</p>}

        <ul className="list-disc list-inside text-gray-700">
          {decoy.target && <li><strong>Target:</strong> {decoy.target.join(', ')}</li>}
          {decoy.groupSize != null && <li><strong>Group size:</strong> {decoy.groupSize}</li>}
          {decoy.attractionStrength != null && <li><strong>Attraction strength:</strong> {decoy.attractionStrength}</li>}
          {decoy.range && <li><strong>Range:</strong> {decoy.range}</li>}
          {decoy.weight && <li><strong>Weight:</strong> {decoy.weight}</li>}
          {decoy.notes && <li><strong>Notes:</strong> {decoy.notes}</li>}
        </ul>
      </div>
    </div>
  );
}
