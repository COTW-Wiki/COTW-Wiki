import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Don't show breadcrumbs on the home page
  if (location.pathname === '/') return null;

  return (
    <nav className="flex text-sm mt-2">
      <ol className="list-none p-0 inline-flex items-center">
        <li className="flex items-center">
          <Link to="/" className="text-[#6fb2e6] hover:underline">Home</Link>
          <span className="mx-2 text-slate-500">{'>'}</span>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          const name = value.charAt(0).toUpperCase() + value.slice(1).replace(/-/g, ' ');

          return (
            <li key={to} className="flex items-center">
              {isLast ? (
                <span className="text-slate-400">{name}</span>
              ) : (
                <>
                  <Link to={to} className="text-[#6fb2e6] hover:underline">{name}</Link>
                  <span className="mx-2 text-slate-500">{'>'}</span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;