import React from 'react';
import { Link } from 'react-router-dom';
// --- IMPORTS ---
// Component placeholders (Adjust paths as necessary)
import ParqueFernandoHuntableAnimalsTable from '../../../components/ParqueFernandoHuntableAnimalsTable'; 
import GallerySlideshow from '../../../components/GallerySlideshow';

// Image Assets (Placeholders based on your project structure)
import ParqueFernandoMapImage from '../../../assets/ParqueFernando_logo-background.webp'; // The puma logo from Screenshot 1
import worldMapImage from '../../../assets/world-map-vector-removebg-preview.png';
import parqueLogo from '../../../assets/Parque_Fernando-removebg-preview.png';
import '../Reserves.css';

// Gallery placeholders
import pf1 from '../../../assets/FGernando-_smalFlora.webp';
import pf2 from '../../../assets/FGernando-_smalMissions.webp';
import pf3 from '../../../assets/FGernando-_smalHUntingskills-lodge.webp';
import pf4 from '../../../assets/Parque_Puma_21.webp';
import pf5 from '../../../assets/Parque_Puma_2.webp';
import pf6 from '../../../assets/Albino_Red_Deer_29.webp';
import pf7 from '../../../assets/JT_1.webp';
import pf8 from '../../../assets/SgtPaul1.webp';
import pf9 from '../../../assets/Wendylator1.webp';
import pf10 from '../../../assets/WendyLator2.webp';
import pf11 from '../../../assets/WendyLator3.webp';

const ParqueFernando = () => {

  // --- DATA SOURCES ---

  // Regions Data (From Screenshot 2)
  const regionsData = [
    { region: "Regne Del Stags", subregions: ["Tierra Altas", "Bosque Muerto"] },
    { region: "Lago Gallegos", subregions: ["Junto al Lago", "Lago Bebe"] },
    { region: "Tierra Vargas", subregions: ["Prados De Lupinos", "Estepa Dorada"] },
    { region: "Tierres Silvestres", subregions: ["Selva Puma", "Bosque de Eva"] },
  ];

  // Converted to Tailwind-like classes; per-file `styles` removed.

  // Smooth-scroll helper for TOC links
  function scrollToId(e, id) {
    if (e && e.preventDefault) e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      try { window.history.replaceState(null, '', `#${id}`); } catch (err) {}
    }
  }

  const markerBase = {
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    transition: 'all 0.2s ease-in-out',
    zIndex: 10,
  };

  // styles moved to Reserves.css (.reserve-toc, .reserve-link, .reserve-h2)

  const mapStyles = {
    container: {
      position: 'relative',
      width: '100%',
      maxWidth: '1200px',
      margin: '0 auto',
      backgroundColor: '#05121c',
      borderRadius: '12px',
      overflow: 'hidden',
      border: '1px solid #1f405a',
      padding: 0
    },
    mapImage: {
      width: '100%',
      height: 'auto',
      display: 'block',
      opacity: '0.6',
    },
    parque: { ...markerBase, top: '85%', left: '31%', width: '17%', display: 'inline-block' },
  };

  return (
    <div className="wiki-page">
      <div className="wiki-inner">

        {/* PAGE HEADER */}
        <div className="wiki-header">
          <span>Parque Fernando</span>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (Logo/Map Image) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Parque Fernando</div>
            <div className="reserve-sidebar-image">
                <img src={ParqueFernandoMapImage} alt="Parque Fernando Logo" />
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main className="wiki-main">

            {/* Intro Quote */}
            <div className="wiki-quote">
              At the end of the world, where the barren Patagonian Steppe meets the balmy southern beech forests, lies Parque Fernando. Game imported from every continent thrive in this land of plenty. In the wetlands, cinnamon teal flock to the lakes, while water buffalo gather at the swamps. The grasslands and forests teem with blackbucks and a variety of deer: spotted axis deer, hearty mule deer and magnificent red deer. Hunting them all from the highlands to the low is Parque Fernando's apex predator, the puma.
              <br/><br/>
              —In-game Description
            </div>

            {/* Intro Paragraph */}
            <p className="wiki-p-mb">
              The Parque Fernando is located in <span className="wiki-link">Argentina, South America</span>. The warden of the <span className="wiki-link">reserve</span> is <span className="wiki-link">Carolina Vargas</span>. It is also home to an <span className="wiki-link">archery range</span> located at the Prados De Lupinos subregion of Tierra Vargas.
            </p>

            {/* Table of Contents */}
            <div className="reserve-toc">
              <div style={{fontWeight:'bold', borderBottom: '1px solid #3a5a75', marginBottom: '5px'}}>
                🔢 Contents <span style={{float:'right', color: '#6fb2e6', fontSize: '0.8rem', cursor: 'pointer'}}>[hide]</span>
              </div>
              <ol style={{margin:'0', paddingLeft: '20px', color: '#6fb2e6'}}>
                <li><a href="#location" onClick={(e)=>scrollToId(e,'location')} className="reserve-link">Location</a></li>
                <li><a href="#regions" onClick={(e)=>scrollToId(e,'regions')} className="reserve-link">Regions</a></li>
                <li><a href="#huntable-animals" onClick={(e)=>scrollToId(e,'huntable-animals')} className="reserve-link">Huntable Animals</a></li>
                <li><a href="#flora" onClick={(e)=>scrollToId(e,'flora')} className="reserve-link">Flora</a></li>
                <li><a href="#missions" onClick={(e)=>scrollToId(e,'missions')} className="reserve-link">Missions</a></li>
                <li><a href="#trailer" onClick={(e)=>scrollToId(e,'trailer')} className="reserve-link">Trailer</a></li>
                <li><a href="#gallery" onClick={(e)=>scrollToId(e,'gallery')} className="reserve-link">Gallery</a></li>
              </ol>
            </div>

            {/* LOCATION (World map) */}
            <h2 className="wiki-h2" id="location">Location</h2>
            <div style={mapStyles.container}>
              <style>{` 
                .map-inline a:hover { transform: translate(-50%, -50%) scale(1.3) !important; z-index: 100 !important; }
                .map-inline img { max-width: 100%; height: auto; pointer-events: none; }
              `}</style>
              <img src={worldMapImage} alt="World map" style={mapStyles.mapImage} />

              <Link to="/maps/parque-fernando" style={mapStyles.parque} data-tooltip="Parque Fernando">
                <img src={parqueLogo} alt="Parque Fernando Logo" style={{width: '100%', height: 'auto', display: 'block'}}/>
              </Link>
            </div>

            {/* REGIONS */}
            <h2 className="wiki-h2" id="regions">Regions</h2>
            <table className="wiki-table">
                <thead>
                    <tr>
                        <th className="wiki-th">Region</th>
                        <th className="wiki-th">Subregion</th>
                    </tr>
                </thead>
                <tbody>
                    {regionsData.map((row, idx) => (
                      <tr key={idx}>
                        <td className="wiki-td wiki-td-highlight">{row.region}</td>
                        <td className="wiki-td">
                          {row.subregions.map((sub, sIdx) => (
                            <div key={sIdx} className="subregion-item">{sub}</div>
                          ))}
                        </td>
                      </tr>
                    ))}
                </tbody>
            </table>

            {/* HUNTABLE ANIMALS */}
            <h2 className="wiki-h2" id="huntable-animals">Huntable Animals</h2>
            <div style={{marginBottom: '30px'}}>
              {/* Embedding the specific table component for Parque Fernando */}
              <ParqueFernandoHuntableAnimalsTable />
            </div>

            {/* FLORA */}
            <h2 className="text-[#6fb2e6] border-b border-[#3a5a75] pb-1 mt-8 mb-4 text-xl flex items-center font-medium" id="flora">Flora</h2>
            <p>
              Framed by hills, Parque Fernando houses a variety of environments to explore. Stroll through the snags of the dead forest, wander the steppes and lupine meadows in search of game, or make your way to the tranquil lakes that pepper the park.
            </p>

            {/* MISSIONS */}
            <h2 className="text-[#6fb2e6] border-b border-[#3a5a75] pb-1 mt-8 mb-4 text-xl flex items-center font-medium" id="missions">Missions</h2>
            <div style={{marginBottom: '15px', fontStyle: 'italic'}}>
              Main article: <span className="text-[#6fb2e6] no-underline cursor-pointer">Parque Fernando Missions</span>
            </div>
            <p>
              Like all previously released reserves, Parque Fernando stretches over a massive 25 square miles (64 square kilometers). It’s up to you if you want to explore off the beaten path and discover the secrets of the reserve, or if you decide to take on the captivating new story, with 16 new narrative missions, and 39 side missions.
            </p>
            <p>
              Through the years, <span className="text-[#6fb2e6] no-underline cursor-pointer">Carolina</span> met the demands of leading her family and her real estate business, but at a price. While she never had enough time to tend to the unfinished reserve, she was always determined to one day finish what she and Fernando started. That day has now come, and she has called for your aid, hoping to turn her slice of wild Patagonia into a world class hunting reserve.
            </p>
            <p>
              Assist Carolina in building the new <span className="text-[#6fb2e6] no-underline cursor-pointer">lodge</span> for Parque Fernando, and decorate it with your collection of diamond trophies, one from each species of the reserve. Or visit the state-of-the-art archery/shooting range, where you can put your aiming skills to the test. Make sure to keep an eye out for the reserves challenge targets, which are scattered across the grounds.
            </p>

            {/* TRAILER */}
            <h2 className="text-[#6fb2e6] border-b border-[#3a5a75] pb-1 mt-8 mb-4 text-xl flex items-center font-medium" id="trailer">Trailer</h2>
            <div style={{fontStyle: 'italic', color: '#dbe4eb', marginBottom: '15px'}}>
                Transcript: "There are hunters and then ... there are elite hunters. The elite never settled for gold when there is the glimpse of a diamond, they climbed the highest mountains, patiently searching for the right moment to break the silence with a perfect shot. At Parque Fernando, every hunter patience is rewarded with the hunt of a lifetime. Lines of Axis Deer roams the Steppes, our lupine meadows teams with majestic spiraled horns Blackbuck, our grass feeds the largest Mule Deer's in the America's, and ours lakes are the most tranquil places, where you come find flocks of red and blue Cinnamon Teals... and for the most elite hunters, Parque Fernando comes to record-setting Red Deers, the finest you will find on Earth. Just remember, you are not the Apex Predator here... That job belongs to the Pumas and they don't like to share. So what kind of hunter are you ? Find out... In Wild Patagonia!"
            </div>

            {/* GALLERY */}
            <h2 className="text-[#6fb2e6] border-b border-[#3a5a75] pb-1 mt-8 mb-4 text-xl flex items-center font-medium" id="gallery">Gallery</h2>
            <div style={{marginBottom: '24px'}}>
              <GallerySlideshow images={[
                { src: pf1, alt: 'Parque Fernando Landscape 1' },
                { src: pf2, alt: 'Parque Fernando Landscape 2' },
                { src: pf3, alt: 'Parque Fernando Landscape 3' },
                { src: pf4, alt: 'Parque Fernando Landscape 4' },
                { src: pf5, alt: 'Parque Fernando Landscape 5' },
                { src: pf6, alt: 'Parque Fernando Landscape 6' },
                { src: pf7, alt: 'Parque Fernando Landscape 7' },
                { src: pf8, alt: 'Parque Fernando Landscape 8' },
                { src: pf9, alt: 'Parque Fernando Landscape 9' },
                { src: pf10, alt: 'Parque Fernando Landscape 10' },
                { src: pf11, alt: 'Parque Fernando Landscape 11' },
              ]} />
            </div>

            </main>
        </div>
      </div>
    </div>
  );
};

export default ParqueFernando;