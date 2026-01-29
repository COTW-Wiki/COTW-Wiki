import { Link } from 'react-router-dom';

export default function LuresPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-green-800">Lures</h1>

      <div className="mt-4 space-y-2">
        <Link to="/lures/decoys/names" className="text-green-800 hover:underline block">Decoys</Link>
        <Link to="/lures/scents/names" className="text-green-800 hover:underline block">Scents</Link>
        <Link to="/lures/callers/names" className="text-green-800 hover:underline block">Callers</Link>
      </div>
    </div>
  );
}
