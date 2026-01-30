import React from 'react';
import { Link } from 'react-router-dom';
import HirschfeldenHuntableAnimalsTable from '../../../components/HirschfeldenHuntableAnimalsTable'; // Adjust path
import HirschfeldenMapImage from '../../../assets/Hirschfelden_logo-background.webp'; // Replace with actual map image import
import worldMapImage from '../../../assets/world-map-vector-removebg-preview.png';
import hirschLogo from '../../../assets/Hirschfelden_reserve_logo-removebg-preview.png';
import '../Reserves.css';
import GallerySlideshow from '../../../components/GallerySlideshow';
import g1 from '../../../assets/ThomasMalton.webp';
import g2 from '../../../assets/518790_screenshots_20190729205950_1.webp';
import g3 from '../../../assets/518790_screenshots_20191108205935_1.webp';
import g4 from '../../../assets/518790_screenshots_20190630180956_1.webp';
import g5 from '../../../assets/Unknown_29.webp';
import g6 from '../../../assets/20200522205105_1.webp';
import g7 from '../../../assets/20200621065908_1.webp';
import g8 from '../../../assets/20200512161002_1.webp';
import g9 from '../../../assets/20200512214753_1.webp';
import g10 from '../../../assets/20190421005218_1.webp';
import g11 from '../../../assets/20190708031656_1.webp';
import g12 from '../../../assets/Group_of_Fallow_Does.webp';
import g13 from '../../../assets/20200130132903_1.webp';
import g14 from '../../../assets/20200130140237_1.webp';
import g15 from '../../../assets/0FAB834BB96F7D0723281B7A35E1F8C3FA9BCCF8.webp';
import g16 from '../../../assets/Tichenau_29_29.webp';
import g17 from '../../../assets/Ikotz_Bridge_29.webp';
import g18 from '../../../assets/ThomasMalton2.webp';
import g19 from '../../../assets/Nagel.webp';
import g20 from '../../../assets/Barn.webp';

const Hirschfelden = () => {

  // --- DATA SOURCES ---

  // Regions Data
  const regionsData = [
    { region: "Hirschdorf", subregions: ["Schonfeldt", "Rathenfeldt"] },
    { region: "Königsberg", subregions: ["Spreeberg", "Petershain"] },
    { region: "Hirschfelden", subregions: ["Ritterstein", "Müllerwald"] },
    { region: "Rotwald", subregions: ["Jonsdorf", "Bohndorf"] },
    { region: "Rinderland", subregions: ["Tichenau", "Ernsdorf"] },
  ];

  // Trivia Data
  const triviaData = [
    'Hirschfelden means "deer-field" in German.',
    'It is the only map featured in theHunter: Call of the Wild that was also featured in theHunter: Classic.'
  ];

  // Smooth-scroll helper for TOC links
  function scrollToId(e, id) {
    if (e && e.preventDefault) e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Optional: update URL hash without jump
      try { window.history.replaceState(null, '', `#${id}`); } catch (err) {}
    }
  }

  return (
    <div className="wiki-page">
      <div className="wiki-inner">
        
        {/* PAGE HEADER */}
        <div className="wiki-header">
          <span>Hirschfelden Hunting Reserve</span>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (Map Image) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Hirschfelden Hunting Reserve</div>
            <div className="wiki-sidebar-image">
                {/* Replace src with your actual map image import */}
                <img src={HirschfeldenMapImage} alt="Hirschfelden Map" />
            </div>

          </aside>

          {/* --- MAIN CONTENT --- */}
          <main className="wiki-main">

            {/* Intro Quote */}
            <div className="wiki-quote">
              Located in the heart of Europe, Hirschfelden is a large hunting reserve with a predominant mix of deciduous beech and aspen forests surrounding rolling hills and farmlands. The western parts of the reserve contain more challenging hunting grounds along mountain slopes and deep spruce forests. Hirschfelden Hunting Reserve is home to the fallow deer, the wild boar, the roe deer, the European bison, the red deer, the red fox.
              <br/><br/>
              —In-game Description
            </div>

            {/* Intro Paragraph */}
            <p className="wiki-p-mb">
              The Hirschfelden Hunting Reserve is located in central Europe. The warden of the <span className="wiki-link">Reserve</span> is <span className="wiki-link">Cornelia "Conni" Holzer</span>. The reserve contains a <span className="wiki-link">shooting range</span> in the <span className="wiki-link">Rathenfeldt</span> region.
            </p>

            {/* Table of Contents */}
            <div className="wiki-toc">
              <div className="wiki-toc-title">
                🔢 Contents <span className="wiki-toc-toggle">[hide]</span>
              </div>
              <ol className="wiki-toc">
                <li><a href="#location" onClick={(e)=>scrollToId(e,'location')} className="wiki-link">Location</a></li>
                <li><a href="#regions" onClick={(e)=>scrollToId(e,'regions')} className="wiki-link">Regions</a></li>
                <li><a href="#huntable-animals" onClick={(e)=>scrollToId(e,'huntable-animals')} className="wiki-link">Huntable Animals</a></li>
                <li><a href="#missions" onClick={(e)=>scrollToId(e,'missions')} className="wiki-link">Missions</a></li>
                <li><a href="#description" onClick={(e)=>scrollToId(e,'description')} className="wiki-link">Description (Trailer)</a></li>
                <li><a href="#trivia" onClick={(e)=>scrollToId(e,'trivia')} className="wiki-link">Trivia</a></li>
                <li><a href="#gallery" onClick={(e)=>scrollToId(e,'gallery')} className="wiki-link">Gallery</a></li>
              </ol>
            </div>

            {/* LOCATION (World map preview with highlighted logo) */}
            <h2 className="wiki-h2" id="location">Location</h2>
            <div className="map-container">
              <img className="map-image" src={worldMapImage} alt="World map" />
              <Link to="/maps/hirschfelden" className="logo-hirsch" data-tooltip="Hirschfelden Hunting Reserve">
                <img src={hirschLogo} alt="Hirschfelden Logo" />
              </Link>
            </div>

            {/* REGIONS */}
            <h2 className="wiki-h2" id="regions">Regions</h2>
            <table className="wiki-table">
                <thead>
                    <tr>
                        <th className="wiki-th">Region</th>
                        <th className="wiki-th">Subregions</th>
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
            <div className="mb-30">
                {/* Embedding the specific table component for Hirschfelden */}
                <HirschfeldenHuntableAnimalsTable />
            </div>
            <div className="muted-note">
              <p className="no-margin">There are 3 "boss animals" on this map: A gold red deer, a gold European bison, and a wild boar named Wurst (diamond).</p>
              <p className="mt-8">This map contains 5 'great ones': fallow deer, red deer, ring-necked pheasant, red fox, wild boar.</p>
            </div>

            {/* MISSIONS */}
            <h2 className="wiki-h2" id="missions">Missions</h2>
            <div className="missions-note">
                Main article: <span className="wiki-link">Hirschfelden Hunting Reserve Missions</span>
            </div>
            <p>
                The Hirschfelden Hunting Reserve has 98 total missions: 28 main missions and 70 side missions. Unlike most other reserve storylines (which usually revolve around the reserve warden's family, crimes committed on the reserve, conservation efforts, etc.), the Hirschfelden Hunting Reserve's main storyline lacks any overarching plot and is instead a set of unrelated tasks involving bagging certain game in certain ways and taking photos of places and animals. It shares this in common with the <span className="wiki-link">Layton Lake District</span>.
            </p>

            {/* DESCRIPTION (TRAILER) */}
            <h2 className="wiki-h2" id="description">Description (Trailer)</h2>
            <div className="trailer-note">
                "Coming out here, struck by the silence... but then, if you stand there for a minute, you realize it isn't silent at all.
                <br/><br/>
                Lots of people feel like they are visiting, but when you are hunting, you are not just visiting - you are part of it.
                <br/><br/>
                And the wild draws you in... you step on a twig, you stand with the wind, everything you do leaves a mark. Then, when you do see it... that moment... line up the shot, take a deep breath and...
                <br/><br/>
                That feeling... you just have to experience it for yourself."
            </div>

            {/* TRIVIA */}
            <h2 className="wiki-h2" id="trivia">Trivia</h2>
            <ul className="wiki-ul wiki-ul-disc">
                {triviaData.map((point, idx) => (
                    <li key={idx} className="wiki-mb-10">
                        {/* Basic parsing to detect links in trivia text */}
                        {point.includes("theHunter: Classic") ? (
                            <span>
                                It is the only map featured in theHunter: Call of the Wild that was also featured in <span className="wiki-link">theHunter: Classic</span>.
                            </span>
                        ) : (
                            point
                        )}
                    </li>
                ))}
            </ul>

            {/* GALLERY */}
            <h2 className="wiki-h2" id="gallery">Gallery</h2>
            <div className="mb-24">
              <GallerySlideshow images={[
                { src: g1, alt: 'Hirschfelden 1' },
                { src: g2, alt: 'Hirschfelden 2' },
                { src: g3, alt: 'Hirschfelden 3' },
                { src: g4, alt: 'Hirschfelden 4' },
                { src: g5, alt: 'Hirschfelden 5' },
                { src: g6, alt: 'Hirschfelden 6' },
                { src: g7, alt: 'Hirschfelden 7' },
                { src: g8, alt: 'Hirschfelden 8' },
                { src: g9, alt: 'Hirschfelden 9' },
                { src: g10, alt: 'Hirschfelden 10' },
                { src: g11, alt: 'Hirschfelden 11' },
                { src: g12, alt: 'Hirschfelden 12' },
                { src: g13, alt: 'Hirschfelden 13' },
                { src: g14, alt: 'Hirschfelden 14' },
                { src: g15, alt: 'Hirschfelden 15' },
                { src: g16, alt: 'Hirschfelden 16' },
                { src: g17, alt: 'Hirschfelden 17' },
                { src: g18, alt: 'Hirschfelden 18' },
                { src: g19, alt: 'Hirschfelden 19' },
                { src: g20, alt: 'Hirschfelden 20' }
              ]} />
            </div>

            
          </main>
        </div>
      </div>
    </div>
  );
};

export default Hirschfelden;