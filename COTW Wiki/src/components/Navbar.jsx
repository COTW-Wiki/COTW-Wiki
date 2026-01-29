import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-green-800 text-white p-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold">Hunter Wiki</Link>
      <div className="space-x-4">
        <Link to="/maps" className="hover:text-green-300 transition">Maps</Link>
        <a href="#" className="hover:text-green-300 transition">About</a>
      </div>
    </nav>
  );
}