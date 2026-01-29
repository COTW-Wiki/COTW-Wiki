import { useParams, Link } from 'react-router-dom';
import { sights } from '../../../data/sights';
import { weapons } from '../../../data/weapons';

function slug(name) {
  return encodeURIComponent(name.replace(/\s+/g, '_'));
}

export default function SightDetail() {
  const { sightId } = useParams();

  const sight = sights.find((s) => slug(s.name) === sightId);

  if (!sight) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold text-red-700">Sight not found</h1>
        <p className="mt-4">No sight matches the id: <code>{sightId}</code></p>
        <Link to="/weapons/sights" className="text-green-800 hover:underline mt-4 block">Back to Sights</Link>
      </div>
    );
  }
  const description = sight.description || sight.notes || `${sight.type} • ${sight.zoomRange} • ${sight.weight}`;

  const resolvedWeapons = (sight.compatibleWith || []).map((id) => {
    const w = weapons.find((x) => x.id === id);
    return w || { id, name: id };
  });

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-2 text-green-800">{sight.name}</h1>

      <div className="mb-6 text-sm text-gray-700">{description}</div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="p-4 bg-white shadow rounded">
          <h2 className="font-semibold text-lg mb-2">General Information</h2>
          <ul className="text-sm text-gray-700 space-y-1">
            <li><strong>Type:</strong> {(sight.type === 'Reflex') ? 'Sight' : (sight.type || '—')}</li>
            <li><strong>Weight:</strong> {sight.weight || '—'}</li>
            <li><strong>DLC:</strong> {sight.dlc ? 'Yes' : 'No'}</li>
            {sight.notes ? <li><strong>Notes:</strong> {sight.notes}</li> : null}
          </ul>
        </div>

        <div className="p-4 bg-white shadow rounded">
          <h2 className="font-semibold text-lg mb-2">Statistics</h2>
          <ul className="text-sm text-gray-700 space-y-1">
            <li><strong>Magnification:</strong> {sight.zoomRange || '—'}</li>
          </ul>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="font-semibold text-lg mb-2">Compatible Weapons</h2>
        {resolvedWeapons.length === 0 ? (
          <div className="text-sm text-gray-600">No compatible weapons listed.</div>
        ) : (
          <ul className="list-disc list-inside text-sm text-gray-800">
            {resolvedWeapons.map((w) => (
              <li key={w.id}>
                <Link to={`/weapons/${encodeURIComponent(w.id)}`} className="text-green-800 hover:underline">{w.name}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>

      <Link to="/weapons/sights" className="text-green-800 hover:underline">Back to Sights</Link>
    </div>
  );
}
