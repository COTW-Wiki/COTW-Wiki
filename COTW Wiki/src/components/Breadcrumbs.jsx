import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <nav className="bg-gray-100 w-full py-2 px-4 border-b border-gray-200">
      <ol className="list-none p-0 inline-flex text-sm text-gray-600">
        <li className="flex items-center">
          <Link to="/" className="text-green-700 hover:underline">Home</Link>
          <span className="mx-2">{'>'}</span>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          // Capitalize and replace hyphens
          const name = value.charAt(0).toUpperCase() + value.slice(1).replace(/-/g, ' ');

          return (
            <li key={to} className="flex items-center">
              <Link to={to} className="text-green-700 hover:underline">{name}</Link>
              <span className="mx-2">{'>'}</span>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
