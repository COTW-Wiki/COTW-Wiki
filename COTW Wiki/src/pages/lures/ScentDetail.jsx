import { useParams, Link } from 'react-router-dom';
import { scents } from '../../data/scents';

function slug(name) {
  return encodeURIComponent(name.replace(/\s+/g, '_'));
}

export default function ScentDetail() {
  const { scentId } = useParams();

  const scent = scents.find((s) => s.id === scentId || slug(s.name) === scentId || encodeURIComponent(s.name.replace(/\s+/g, '_')) === scentId);

  if (!scent) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold text-red-700">Scent not found</h1>
        <p className="mt-4">No scent matches the id: <code>{scentId}</code></p>
        <Link to="/lures/scents/names" className="text-green-800 hover:underline mt-4 block">Back to Scents</Link>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-3xl font-bold text-green-800">{scent.name}</h1>
        <Link to="/lures/scents/names" className="text-sm text-green-700 hover:underline">Back to Scents</Link>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        {scent.description && (
          <p className="text-gray-700 mb-4">
            {scent.name === 'Scent Eliminator Spray' ? (
              // Replace the word "animals" with a Link to the animals page for this scent only
              scent.description.split('animals').map((part, idx, arr) => (
                <span key={idx}>
                  {part}
                  {idx < arr.length - 1 && (
                    <Link to="/animals" className="text-green-800 hover:underline">animals</Link>
                  )}
                </span>
              ))
            ) : (
              scent.description
            )}
          </p>
        )}

        <ul className="list-disc list-inside text-gray-700">
          {scent.type && <li><strong>Type:</strong> {scent.type}</li>}
          {scent.suitableFor && <li><strong>Suitable for:</strong> {scent.suitableFor.join(', ')}</li>}
          {scent.price != null && <li><strong>Price:</strong> {scent.price}</li>}
          {scent.uses != null && <li><strong>Uses:</strong> {scent.uses}</li>}
          {scent.weight != null && <li><strong>Weight:</strong> {scent.weight} kg</li>}
          {scent.range && <li><strong>Range:</strong> {scent.range}</li>}
          {scent.duration && <li><strong>Duration:</strong> {scent.duration}</li>}
          {scent.dlc && <li><strong>DLC:</strong> {scent.dlc}</li>}
        </ul>
      </div>
    </div>
  );
}
