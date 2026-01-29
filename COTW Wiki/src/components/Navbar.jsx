import { Link } from 'react-router-dom';
import Breadcrumbs from './Breadcrumbs';

export default function Navbar() {
  return (
    <nav className="wiki-nav">
      <div className="wiki-inner">
        {/* TOP ROW: Title and Buttons */}
        <div className="flex justify-between items-center w-full">
          {/* Brand / Logo Area */}
          <Link to="/" className="wiki-nav-brand">Hunter Wiki</Link>
          
          {/* Navigation Buttons Area */}
          <div className="wiki-nav-links">
            <Link to="/maps" className="wiki-nav-btn">Reserves</Link> 
            <Link to="/about" className="wiki-nav-btn">About</Link>
          </div>
        </div>

        {/* BOTTOM ROW: Breadcrumbs */}
        <div className="flex justify-start w-full">
          <Breadcrumbs />
        </div>
      </div>
    </nav>
  );
}