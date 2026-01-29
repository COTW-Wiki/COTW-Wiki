import { useParams, Link } from 'react-router-dom';
import { callers } from '../../data/callers';

function slug(name) {
  return encodeURIComponent(name.replace(/\s+/g, '_'));
}

export default function CallerDetail() {
  const { callerId } = useParams();

  const caller = callers.find((c) => c.id === callerId || slug(c.name) === callerId || encodeURIComponent(c.name.replace(/\s+/g, '_')) === callerId);

  if (!caller) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold text-red-700">Caller not found</h1>
        <p className="mt-4">No caller matches the id: <code>{callerId}</code></p>
        <Link to="/lures/callers/names" className="text-green-800 hover:underline mt-4 block">Back to Callers</Link>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-3xl font-bold text-green-800">{caller.name}</h1>
        <Link to="/lures/callers/names" className="text-sm text-green-700 hover:underline">Back to Callers</Link>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        {caller.description && <p className="text-gray-700 mb-4">{caller.description}</p>}

        <ul className="list-disc list-inside text-gray-700">
          {caller.suitableFor && <li><strong>Suitable for:</strong> {caller.suitableFor.join(', ')}</li>}
          {caller.durationSeconds != null && <li><strong>Duration:</strong> {caller.durationSeconds === 0 ? 'Continuous' : `${caller.durationSeconds} seconds`}</li>}
          {caller.rangeMeters != null && <li><strong>Range:</strong> {caller.rangeMeters} meters</li>}
          {caller.price != null && <li><strong>Price:</strong> {caller.price === 0 ? 'Free' : `${caller.price}`}</li>}
          {caller.dlc != null && <li><strong>DLC:</strong> {caller.dlc ? 'Requires DLC' : 'Base game'}</li>}
          {caller.notes && <li><strong>Notes:</strong> {caller.notes}</li>}
        </ul>
      </div>
    </div>
  );
}
