import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from './Breadcrumbs';

export default function Navbar() {
  return (
    <nav className="wiki-nav">
      <div className="wiki-inner">
        {/* ROW 1: Title and All Main Buttons */}
        <div className="nav-top-row">
          <Link to="/" className="wiki-nav-brand">Hunter Wiki</Link>
          
          <div className="wiki-nav-links">
            <Link to="/maps" className="wiki-btn-grey">Explore Reserves</Link>
            <Link to="/weapons" className="wiki-btn-grey">Weapons</Link>
            <Link to="/animals" className="wiki-btn-grey">Animals</Link>
            <Link to="/weapons/sights" className="wiki-btn-grey">Sights & Optics</Link>
            <Link to="/lures" className="wiki-btn-grey">Lures</Link>
            <Link to="/weapons/ammo" className="wiki-btn-grey">Ammunition</Link>
            <Link to="/about" className="wiki-btn-grey">About</Link>
          </div>
        </div>

        {/* ROW 2: Breadcrumbs aligned to bottom left */}
        <div className="nav-bottom-row">
          <Breadcrumbs />
        </div>
      </div>
    </nav>
  );
}