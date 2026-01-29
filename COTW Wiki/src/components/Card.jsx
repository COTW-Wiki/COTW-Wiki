import { Link } from 'react-router-dom';

export default function Card({ title, image, badge, link }) {
  return (
    <Link to={link} className="block bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        {badge && (
          <span className="text-sm bg-green-800 text-white px-2 py-1 rounded">
            {badge}
          </span>
        )}
      </div>
    </Link>
  );
}
