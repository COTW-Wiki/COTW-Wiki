import { Link } from 'react-router-dom';
import React from 'react';
import WorldMap from '../../components/WorldMap'; // Using your provided component
import homePageImage from '../../assets/Home_Page_Image.png';
import EquipmentTable from '../../components/EquipmentTable';
import SearchBar from '../../components/SearchBar';
import ConceptTable from '../../components/ConceptTable';
import AnimalsTable from '../../components/AnimalsTable';
import Quests from '../../components/Quests';

export default function Home() {
  return (
    <div className="wiki-page">
      <div className="wiki-inner">
        
        {/* 1. WELCOME SECTION - NOW AT THE TOP */}
        <section className="text-left mb-10 pt-4">
          <h1 className="home-welcome-title">Welcome to Hunter Wiki</h1>
          <p className="home-welcome-text">
            Explore all the hunting <Link to="/maps" className="wiki-link">reserves</Link>, maps, subregions, and recommended loadouts.
          </p>

          <SearchBar />

          {/* Horizontal row of grey buttons */}
          <div className="home-quick-links">
            <Link to="/maps" className="wiki-btn-grey">Explore Reserves</Link>
            <Link to="/weapons" className="wiki-btn-grey">Weapons</Link>
            <Link to="/animals" className="wiki-btn-grey">Animals</Link>
            <Link to="/weapons/sights" className="wiki-btn-grey">Sights & Optics</Link>
            <Link to="/lures" className="wiki-btn-grey">Lures</Link>
            <Link to="/weapons/ammo" className="wiki-btn-grey">Ammunition</Link>
          </div>
        </section>

        {/* 2. MAIN IMAGE */}
        <div className="w-full mb-12">
          <img src={homePageImage} alt="Hunter Call of the Wild" className="home-main-image" />
        </div>

        {/* 3. CONTENT DESCRIPTION SECTION */}
        <section className="wiki-main mb-10">
          <h2 className="wiki-h2">Welcome to TheHunter: Call of the Wild Wiki</h2>
          <p className="wiki-p-mb">Welcome to TheHunter: Call of the Wild Wiki, a comprehensive database dedicated to the hunting simulation video game, TheHunter: Call of the Wild.</p>

          <h3 className="wiki-h3">What is TheHunter: Call of the Wild?</h3>
          <p className="wiki-p-mb">TheHunter: Call of the Wild is a video game available on both PC and consoles, designed to offer players a realistic hunting experience...</p>

          <p className="wiki-sidebar-label">These Reserves include:</p>
          <ul className="wiki-ul">
            <li><Link to="/maps/hirschfelden" className="wiki-link">Hirschfelden Hunting Reserve</Link></li>
            <li><Link to="/maps/layton-lake" className="wiki-link">Layton Lake District</Link></li>
            {/* ... other list items ... */}
          </ul>
        </section>

        {/* 4. WORLD MAP - MOVED HERE (ABOVE ANIMALS, BELOW WELCOME) */}
        <section className="w-full mb-12">
          <h2 className="wiki-h2">Reserves Map</h2>
          <p className="wiki-p-mb">Click on a reserve icon to view its details:</p>
          <WorldMap />
        </section>

        {/* 5. DATA TABLES */}
        <AnimalsTable />
        
        <div className="mt-12">
            <EquipmentTable />
            <ConceptTable />
            <Quests />
        </div>
      </div>
    </div>
  );
}