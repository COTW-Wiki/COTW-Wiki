import React from 'react';
import { Link } from 'react-router-dom';
import LaytonLakeHuntableAnimalsTable from '../../../components/LaytonLakeHuntableAnimalsTable'; // Adjust path
import laytonLakeMapImg from '../../../assets/Layton_lake_district.webp'; // You'll need this map image
import worldMapImage from '../../../assets/world-map-vector-removebg-preview.png';
import reserveLogo from '../../../assets/Layton_Lake-removebg-preview.png';
import GallerySlideshow from '../../../components/GallerySlideshow';
import '../Reserves.css';
import layton1 from '../../../assets/20200107182710_1.webp';
import layton2 from '../../../assets/Unknown_29_2.webp';
import layton3 from '../../../assets/Image0.webp';
import layton4 from '../../../assets/Layton_Lake.webp';
import layton5 from '../../../assets/20191214171425_1.webp';
import layton6 from '../../../assets/22_by_NateX.webp';

const LaytonLake = () => {

  // --- DATA SOURCES ---

  // Regions Data
  const regionsData = [
    { region: "Layton Lows", subregions: ["Roonachee", "Mount Kraken"] },
    { region: "Highton Peaks", subregions: ["Willipeg", "Chopeeka"] },
    { region: "Southern Ridge", subregions: ["Cheelah", "Mount Leviathan"] },
    { region: "Northern Ridge", subregions: ["Norden", "Calburn"] },
    { region: "Lake District", subregions: ["Balmont", "High Lake"] },
  ];

  // Trivia Data
  const triviaData = [
    'Layton Lake District was called "the most played reserve" of 2021.',
    'Small, unhuntable birds can be found all over Layton Lake District, making it one of two maps (the other being Hirschfelden Hunting Reserve) to have a strictly ambient animal. Prior to the removal of weasels from the game, Medved-Taiga National Park also featured an ambient animal.'
  ];

  // styles moved to Reserves.css (.reserve-toc, .reserve-link, .reserve-h2)

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
    layton: { ...markerBase, top: '48%', left: '15.5%', width: '7%', display: 'inline-block' },
  };

  return (
    <div className="wiki-page">
      <div className="wiki-inner">

        {/* PAGE HEADER */}
        <div className="wiki-header">
          <span>Layton Lake District</span>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (Map Image) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Layton Lake District</div>
            <div className="reserve-sidebar-image">
                <img src={laytonLakeMapImg} alt="Layton Lake Map" />
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main className="wiki-main">

            {/* Intro Quote */}
            <div className="wiki-quote">
              Layton Lake District provides hunters from all over the world with a taste of the untamed wild, with few traces of civilization. Located in the Pacific Northwest, the area is predominantly covered by spruce, larch, and aspen forests, rocky mountain slopes, and marshlands in between. Plan your hunting trip carefully before taking on some of the most sought-after game like the moose, the black bear, the Roosevelt elk, the whitetail deer, the coyote, and the blacktail deer.
              <br/><br/>
              —In-game Description
            </div>

            {/* Intro Paragraph */}
            <p className="wiki-p-mb">
              The Layton Lake District is located at the Pacific Northwest of North America. The warden of the <span className="wiki-link">Reserve</span> is <span className="wiki-link">Colton "Doc" Locke</span>.
            </p>

            {/* Table of Contents */}
            <div className="reserve-toc">
              <div style={{fontWeight:'bold', borderBottom: '1px solid #3a5a75', marginBottom: '5px'}}>
                🔢 Contents <span style={{float:'right', color: '#6fb2e6', fontSize:'0.8rem', cursor: 'pointer'}}>[hide]</span>
              </div>
              <ol style={{margin:'0', paddingLeft: '20px', color: '#6fb2e6'}}>
                <li><a href="#location" onClick={(e)=>scrollToId(e,'location')} className="reserve-link">Location</a></li>
                <li><a href="#regions" onClick={(e)=>scrollToId(e,'regions')} className="reserve-link">Regions</a></li>
                <li><a href="#huntable-animals" onClick={(e)=>scrollToId(e,'huntable-animals')} className="reserve-link">Huntable Animals</a></li>
                <li><a href="#missions" onClick={(e)=>scrollToId(e,'missions')} className="reserve-link">Missions</a></li>
                <li><a href="#trailer" onClick={(e)=>scrollToId(e,'trailer')} className="reserve-link">Trailer</a></li>
                <li><a href="#trivia" onClick={(e)=>scrollToId(e,'trivia')} className="reserve-link">Trivia</a></li>
                <li><a href="#gallery" onClick={(e)=>scrollToId(e,'gallery')} className="reserve-link">Gallery</a></li>
              </ol>
            </div>

            {/* LOCATION (World map with Layton logo) */}
            <h2 className="wiki-h2" id="location">Location</h2>
            <div style={mapStyles.container}>
              <style>{` 
                .map-inline a:hover { transform: translate(-50%, -50%) scale(1.3) !important; z-index: 100 !important; }
                .map-inline img { max-width: 100%; height: auto; pointer-events: none; }
              `}</style>
              <img src={worldMapImage} alt="World map" style={mapStyles.mapImage} />

              <Link to="/maps/layton-lake" style={mapStyles.layton} data-tooltip="Layton Lake District">
                <img src={reserveLogo} alt="Layton Lake Logo" style={{width: '100%', height: 'auto', display: 'block'}}/>
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
                {/* Embedding the specific table component for Layton Lake */}
                <LaytonLakeHuntableAnimalsTable />
            </div>
            <p>There are 3 "boss animals" on this map: a black bear named Mr. Black (diamond), a coyote named Super Coyote (diamond), and a diamond Roosevelt Elk.</p>

            <p>This map contains 3 'great ones: whitetail deer, black bear and moose.</p>

            {/* MISSIONS */}
            <h2 className="wiki-h2" id="missions">Missions</h2>
            <div style={{marginBottom: '15px', fontStyle: 'italic'}}>
              Main article: <span className="wiki-link">Layton Lake District Missions</span>
            </div>
            <p>
                The Layton Lake District has 98 total missions: 28 main missions and 70 side missions. Unlike most other reserve storylines (which usually revolve around the reserve warden's family, crimes committed on the reserve, conservation efforts, etc.), the Layton Lake District's main storyline lacks any overarching plot and is instead a set of unrelated tasks involving bagging certain game in certain ways and taking photos of places and animals.
            </p>

            {/* TRAILER */}
            <h2 className="wiki-h2" id="trailer">Trailer</h2>
            <div style={{marginBottom: '15px', overflow: 'auto'}}>
              <div style={{float: 'right', width: '360px', marginLeft: '20px', maxWidth: '100%'}}>
                <iframe
                  width="360"
                  height="202"
                  src="https://www.youtube.com/embed/Fit-YafCu98"
                  title="theHunter: Call of the Wild  |  Layton Lake District Trailer"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  style={{display: 'block', width: '100%', height: '202px', border: 'none'}}
                ></iframe>
              </div>
              <div style={{fontStyle: 'italic', color: '#dbe4eb'}}>
                Transcript: "The perfect hunting experience... Well, there's just about as many opinions on that as there are hunters. Some love the beech forests and farmlands of a place like Hirschfelden, but me, I prefer a different kind of wild - where snow covered peaks surround valleys several miles wide.
                <br/><br/>
                That is Layton Lake District, the best hunting reserve you'll find in a hundred miles. Whether doing tasks for the locals or just hunting to your heart's content, you're free to explore this Pacific Northwest reserve however you want. You may find your favorite hunting spot along a large valley lake or deep inside a dense spruce forest.
                <br/><br/>
                Layton Lake District is home to some of the most majestic animals in the wild like the Moose, the Black Bear and the mighty Roosevelt Elk. Bagging one of these will require a combination of the right equipment, skillful tracking, and stalking so you can get close enough for a clean shot. Few things beat hunting together with a group of friends though. Everyone can bring their own skills and hunting equipment and play a part in finding and downing that big one. In the end, how, what, and where you wanna hunt is all up to you, and a truly immersive next generation hunting experience awaits!"
              </div>
            </div>

            {/* TRIVIA */}
            <h2 className="wiki-h2" id="trivia">Trivia</h2>
            <ul className="wiki-ul wiki-ul-disc">
                {triviaData.map((point, idx) => (
                    <li key={idx} style={{marginBottom: '10px'}}>
                        {point.includes("Hirschfelden Hunting Reserve") ? (
                            // Basic link parsing
                            point.split(/(Hirschfelden Hunting Reserve|Medved-Taiga National Park)/g).map((part, i) => 
                                  (part === "Hirschfelden Hunting Reserve" || part === "Medved-Taiga National Park") ? 
                                  <span key={i} className="reserve-link">{part}</span> : part
                            )
                        ) : (
                            point
                        )}
                    </li>
                ))}
            </ul>

            {/* GALLERY */}
            <h2 className="wiki-h2" id="gallery">Gallery</h2>
            <div>
               <GallerySlideshow images={[
                 { src: layton1, alt: 'Layton Lake 1' },
                 { src: layton2, alt: 'Layton Lake 2' },
                 { src: layton3, alt: 'Layton Lake 3' },
                 { src: layton4, alt: 'Layton Lake 4' },
                 { src: layton5, alt: 'Layton Lake 5' },
                 { src: layton6, alt: 'Layton Lake 6' },
               ]} />
            </div>
            
            </main>
        </div>
      </div>
    </div>
  );
};

export default LaytonLake;