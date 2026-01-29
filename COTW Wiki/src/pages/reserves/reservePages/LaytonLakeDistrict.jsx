import React from 'react';
import { Link } from 'react-router-dom';
import LaytonLakeHuntableAnimalsTable from '../../../components/LaytonLakeHuntableAnimalsTable'; // Adjust path
import laytonLakeMapImg from '../../../assets/Layton_lake_district.webp'; // You'll need this map image
import worldMapImage from '../../../assets/world-map-vector-removebg-preview.png';
import reserveLogo from '../../../assets/Layton_Lake-removebg-preview.png';
import GallerySlideshow from '../../../components/GallerySlideshow';
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

  // --- STYLES OBJECT ---
  const styles = {
    container: {
      backgroundColor: '#0b1a26',
      color: '#dbe4eb',
      fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      padding: '40px',
      minHeight: '100vh',
      lineHeight: '1.6',
    },
    innerWrapper: {
      maxWidth: '1200px',
      margin: '0 auto',
    },
    mainHeader: {
      fontSize: '2.5rem',
      fontWeight: '400',
      borderBottom: '1px solid #3a5a75',
      paddingBottom: '15px',
      marginBottom: '20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    layout: {
      display: 'flex',
      gap: '30px',
      alignItems: 'flex-start',
      flexDirection: 'row-reverse',
    },
    mainColumn: {
      flex: 1,
    },
    sidebarColumn: {
      width: '320px',
      flexShrink: 0,
      backgroundColor: '#0f2e48',
      border: '1px solid #1f405a',
      borderRadius: '4px',
    },
    sidebarHeader: {
      backgroundColor: '#05121c',
      padding: '12px',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: '1.1rem',
      borderBottom: '2px solid #3a5a75',
      color: '#fff'
    },
    sidebarImage: {
      height: '300px',
      backgroundColor: '#1f3a52',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#6fb2e6',
      fontStyle: 'italic',
      borderBottom: '1px solid #1f405a',
      position: 'relative',
      overflow: 'hidden'
    },
    quoteBox: {
      fontStyle: 'italic',
      backgroundColor: '#0f2e48',
      borderLeft: '4px solid #3a5a75',
      padding: '15px 20px',
      margin: '0 0 20px 0',
      color: '#a4cce8',
    },
    link: {
      color: '#6fb2e6',
      textDecoration: 'none',
      cursor: 'pointer',
    },
    h2: {
      color: '#6fb2e6',
      borderBottom: '1px solid #3a5a75',
      paddingBottom: '5px',
      marginTop: '30px',
      marginBottom: '15px',
      fontSize: '1.5rem',
      display: 'flex',
      alignItems: 'center',
      fontWeight: '500',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      backgroundColor: '#0f2e48',
      fontSize: '0.95rem',
      marginBottom: '20px',
      border: '1px solid #1f405a'
    },
    th: {
      backgroundColor: '#164060',
      padding: '10px 15px',
      textAlign: 'left',
      color: '#fff',
      borderBottom: '2px solid #3a5a75',
      fontWeight: 'bold',
    },
    td: {
      padding: '10px 15px',
      borderBottom: '1px solid #2a4b63',
      color: '#dbe4eb',
      verticalAlign: 'top',
    },
    tocBox: {
        border: '1px solid #3a5a75',
        backgroundColor: '#0f2e48',
        display: 'inline-block',
        padding: '10px 20px',
        borderRadius: '4px',
        minWidth: '200px',
        marginBottom: '30px'
    }
  };

  // Smooth-scroll helper for TOC links
  function scrollToId(e, id) {
    if (e && e.preventDefault) e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      try { window.history.replaceState(null, '', `#${id}`); } catch (err) {}
    }
  }

  return (
    <div style={styles.container}>
      <div style={styles.innerWrapper}>
        
        {/* PAGE HEADER */}
        <div style={styles.mainHeader}>
          <span>Layton Lake District</span>
        </div>

        <div style={styles.layout}>
          
          {/* --- RIGHT SIDEBAR (Map Image) --- */}
          <aside style={styles.sidebarColumn}>
            <div style={styles.sidebarHeader}>Layton Lake District</div>
            <div style={styles.sidebarImage}>
                {/* Replace src with your actual map image import */}
                <img src={laytonLakeMapImg} alt="Layton Lake Map" style={{width:'100%', height:'100%', objectFit: 'cover'}} />
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main style={styles.mainColumn}>

            {/* Intro Quote */}
            <div style={styles.quoteBox}>
              Layton Lake District provides hunters from all over the world with a taste of the untamed wild, with few traces of civilization. Located in the Pacific Northwest, the area is predominantly covered by spruce, larch, and aspen forests, rocky mountain slopes, and marshlands in between. Plan your hunting trip carefully before taking on some of the most sought-after game like the moose, the black bear, the Roosevelt elk, the whitetail deer, the coyote, and the blacktail deer.
              <br/><br/>
              —In-game Description
            </div>

            {/* Intro Paragraph */}
            <p style={{marginBottom:'20px'}}>
              The Layton Lake District is located at the Pacific Northwest of North America. The warden of the <span style={styles.link}>Reserve</span> is <span style={styles.link}>Colton "Doc" Locke</span>.
            </p>

            {/* Table of Contents */}
            <div style={styles.tocBox}>
              <div style={{fontWeight:'bold', borderBottom: '1px solid #3a5a75', marginBottom: '5px'}}>
                🔢 Contents <span style={{float:'right', color: '#6fb2e6', fontSize:'0.8rem', cursor: 'pointer'}}>[hide]</span>
              </div>
              <ol style={{margin:'0', paddingLeft: '20px', color: '#6fb2e6'}}>
                <li><a href="#location" onClick={(e)=>scrollToId(e,'location')} style={styles.link}>Location</a></li>
                <li><a href="#regions" onClick={(e)=>scrollToId(e,'regions')} style={styles.link}>Regions</a></li>
                <li><a href="#huntable-animals" onClick={(e)=>scrollToId(e,'huntable-animals')} style={styles.link}>Huntable Animals</a></li>
                <li><a href="#missions" onClick={(e)=>scrollToId(e,'missions')} style={styles.link}>Missions</a></li>
                <li><a href="#trailer" onClick={(e)=>scrollToId(e,'trailer')} style={styles.link}>Trailer</a></li>
                <li><a href="#trivia" onClick={(e)=>scrollToId(e,'trivia')} style={styles.link}>Trivia</a></li>
                <li><a href="#gallery" onClick={(e)=>scrollToId(e,'gallery')} style={styles.link}>Gallery</a></li>
              </ol>
            </div>

            {/* LOCATION (World map with Layton logo) */}
            <h2 style={styles.h2} id="location">Location</h2>
            <div className="map-container" style={{marginBottom: '18px'}}>
              <style>{` 
                .map-container img[class*="logo-"]{ 
                  transition: transform 180ms ease, filter 180ms ease, box-shadow 180ms ease; 
                  transform-origin: center center; 
                  cursor: pointer; 
                  border: none; 
                  outline: none; 
                }
                .map-container a:focus, .map-container a:focus img{ outline: none; }
                .map-container img[class*="logo-"]:hover{ 
                  transform: scale(1.25); 
                  filter: sepia(1) saturate(10000%) hue-rotate(10deg) brightness(1);
                  z-index: 999; 
                  box-shadow: none; 
                  border: none;
                  outline: none;
                }
              `}</style>
              <img className="map-image" src={worldMapImage} alt="World map" style={{width: '100%', height: 'auto'}} />
              <a href="/maps/layton-lake" className="logo" style={{ '--mask': `url("${reserveLogo}")`, marginLeft: '-340px', width: '60px', height: 'auto' }} data-tooltip="Layton Lake District">
                <img src={reserveLogo} alt="Layton Lake Logo" />
              </a>
            </div>

            {/* REGIONS */}
            <h2 style={styles.h2} id="regions">Regions</h2>
            <table style={styles.table}>
                <thead>
                    <tr>
                        <th style={styles.th}>Region</th>
                        <th style={styles.th}>Subregion</th>
                    </tr>
                </thead>
                <tbody>
                    {regionsData.map((row, idx) => (
                        <tr key={idx}>
                            <td style={{...styles.td, color: '#6fb2e6'}}>{row.region}</td>
                            <td style={styles.td}>
                                {row.subregions.map((sub, sIdx) => (
                                    <div key={sIdx} style={{marginBottom:'2px', color: '#6fb2e6'}}>{sub}</div>
                                ))}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* HUNTABLE ANIMALS */}
            <h2 style={styles.h2} id="huntable-animals">Huntable Animals</h2>
            <div style={{marginBottom: '30px'}}>
                {/* Embedding the specific table component for Layton Lake */}
                <LaytonLakeHuntableAnimalsTable />
            </div>
            <p>There are 3 "boss animals" on this map: a black bear named Mr. Black (diamond), a coyote named Super Coyote (diamond), and a diamond Roosevelt Elk.</p>

            <p>This map contains 3 'great ones: whitetail deer, black bear and moose.</p>

            {/* MISSIONS */}
            <h2 style={styles.h2} id="missions">Missions</h2>
            <div style={{marginBottom: '15px', fontStyle: 'italic'}}>
                Main article: <span style={styles.link}>Layton Lake District Missions</span>
            </div>
            <p>
                The Layton Lake District has 98 total missions: 28 main missions and 70 side missions. Unlike most other reserve storylines (which usually revolve around the reserve warden's family, crimes committed on the reserve, conservation efforts, etc.), the Layton Lake District's main storyline lacks any overarching plot and is instead a set of unrelated tasks involving bagging certain game in certain ways and taking photos of places and animals.
            </p>

            {/* TRAILER */}
            <h2 style={styles.h2} id="trailer">Trailer</h2>
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
            <h2 style={styles.h2} id="trivia">Trivia</h2>
            <ul style={{fontSize: '0.95rem', paddingLeft: '20px', listStyleType: 'disc', color: '#dbe4eb'}}>
                {triviaData.map((point, idx) => (
                    <li key={idx} style={{marginBottom: '10px'}}>
                        {point.includes("Hirschfelden Hunting Reserve") ? (
                            // Basic link parsing
                            point.split(/(Hirschfelden Hunting Reserve|Medved-Taiga National Park)/g).map((part, i) => 
                                (part === "Hirschfelden Hunting Reserve" || part === "Medved-Taiga National Park") ? 
                                <span key={i} style={styles.link}>{part}</span> : part
                            )
                        ) : (
                            point
                        )}
                    </li>
                ))}
            </ul>

            {/* GALLERY */}
            <h2 style={styles.h2} id="gallery">Gallery</h2>
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