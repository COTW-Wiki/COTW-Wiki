import { Link } from 'react-router-dom';
import React from 'react';
import WorldMap from '../../components/WorldMap'; 
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
        
        {/* 1. RESERVES IMAGE - NOW AT THE VERY TOP */}
        <div className="w-full pt-4 mb-8">
          <img 
            src={homePageImage} 
            alt="Hunter Call of the Wild Reserves" 
            className="home-main-image" 
          />
        </div>

        {/* 2. WELCOME SECTION */}
        <section className="text-left mb-10">
          <h1 className="home-welcome-title">Welcome to The Hunter Wiki
            <p className="home-welcome-Mecho" >(Mecho and Svatba edition)</p>
          </h1>
          
          {/* Linked words, removed "maps" */}
          <p className="home-welcome-text">
            Explore all the hunting <Link to="/maps" className="wiki-link">reserves</Link>, <Link to="/subregions" className="wiki-link">subregions</Link>, and recommended <Link to="/loadouts" className="wiki-link">loadouts</Link>.
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

        {/* 3. CONTENT DESCRIPTION SECTION */}
        <section className="wiki-main mb-12">
          <h2 className="wiki-h2">Welcome to TheHunter: Call of the Wild Wiki</h2>
          <p className="wiki-p-mb">Welcome to TheHunter: Call of the Wild Wiki, a comprehensive database dedicated to the hunting simulation video game, TheHunter: Call of the Wild.</p>

          <h3 className="wiki-h3">What is TheHunter: Call of the Wild?</h3>
          <p className="wiki-p-mb">TheHunter: Call of the Wild is a video game available on both PC and consoles, designed to offer players a realistic hunting experience...</p>
        </section>

        {/* 4. WORLD MAP (Directly above Animals) */}
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