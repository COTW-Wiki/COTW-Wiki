import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from './Breadcrumbs';

export default function Navbar() {
  return (
    <nav className="wiki-nav">
      <div className="wiki-inner">
        {/* ROW 1: Title on Left, Buttons on Right */}
        <div className="flex justify-between items-center w-full">
          <Link to="/" className="wiki-nav-brand">Hunter Wiki</Link>
          
          <div className="wiki-nav-links">
            <Link to="/maps" className="wiki-btn-grey">Reserves</Link>
            <Link to="/about" className="wiki-btn-grey">About</Link>
          </div>
        </div>

        {/* ROW 2: Breadcrumbs on the bottom left */}
        <div className="flex justify-start w-full mt-2">
          <Breadcrumbs />
        </div>
      </div>
    </nav>
  );
}