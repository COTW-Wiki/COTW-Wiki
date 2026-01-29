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
      borderBottom: '2px solid #3a5a75', // Changed to match blue theme generally, or keep gold if preferred
      color: '#fff'
    },
    sidebarImage: {
      height: '300px', // Adjusted for map image
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
      // Optional: update URL hash without jump
      try { window.history.replaceState(null, '', `#${id}`); } catch (err) {}
    }
  }

  return (
    <div style={styles.container}>
      <div style={styles.innerWrapper}>
        
        {/* PAGE HEADER */}
        <div style={styles.mainHeader}>
          <span>Hirschfelden Hunting Reserve</span>
        </div>

        <div style={styles.layout}>
          
          {/* --- RIGHT SIDEBAR (Map Image) --- */}
          <aside style={styles.sidebarColumn}>
            <div style={styles.sidebarHeader}>Hirschfelden Hunting Reserve</div>
            <div style={styles.sidebarImage}>
                {/* Replace src with your actual map image import */}
                <img src={HirschfeldenMapImage} alt="Hirschfelden Map" style={{width:'100%', height:'100%', objectFit: 'cover'}} />
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main style={styles.mainColumn}>

            {/* Intro Quote */}
            <div style={styles.quoteBox}>
              Located in the heart of Europe, Hirschfelden is a large hunting reserve with a predominant mix of deciduous beech and aspen forests surrounding rolling hills and farmlands. The western parts of the reserve contain more challenging hunting grounds along mountain slopes and deep spruce forests. Hirschfelden Hunting Reserve is home to the fallow deer, the wild boar, the roe deer, the European bison, the red deer, the red fox.
              <br/><br/>
              —In-game Description
            </div>

            {/* Intro Paragraph */}
            <p style={{marginBottom:'20px'}}>
              The Hirschfelden Hunting Reserve is located in central Europe. The warden of the <span style={styles.link}>Reserve</span> is <span style={styles.link}>Cornelia "Conni" Holzer</span>. The reserve contains a <span style={styles.link}>shooting range</span> in the <span style={styles.link}>Rathenfeldt</span> region.
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
                <li><a href="#description" onClick={(e)=>scrollToId(e,'description')} style={styles.link}>Description (Trailer)</a></li>
                <li><a href="#trivia" onClick={(e)=>scrollToId(e,'trivia')} style={styles.link}>Trivia</a></li>
                <li><a href="#gallery" onClick={(e)=>scrollToId(e,'gallery')} style={styles.link}>Gallery</a></li>
              </ol>
            </div>

            {/* LOCATION (World map preview with highlighted logo) */}
            <h2 style={styles.h2} id="location">Location</h2>
            <div className="map-container" style={{padding: '1rem 0', width: '1200px', maxWidth: '800px', margin: '0 auto'}}>
              <img className="map-image" src={worldMapImage} alt="World map" style={{width: '100%', height: 'auto'}} />
              <Link to="/maps/hirschfelden" className="logo-hirsch" style={{ '--mask': `url("${hirschLogo}")`, marginLeft:'-390px', marginTop:'-20px', width: '70px', height: '70px'}} data-tooltip="Hirschfelden Hunting Reserve">
                <img src={hirschLogo} alt="Hirschfelden Logo" />
              </Link>
            </div>

            {/* REGIONS */}
            <h2 style={styles.h2} id="regions">Regions</h2>
            <table style={styles.table}>
                <thead>
                    <tr>
                        <th style={styles.th}>Region</th>
                        <th style={styles.th}>Subregions</th>
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
                {/* Embedding the specific table component for Hirschfelden */}
                <HirschfeldenHuntableAnimalsTable />
            </div>
            <div style={{fontSize: '0.95rem', color: '#dbe4eb', marginBottom: '20px'}}>
              <p style={{margin: 0}}>There are 3 "boss animals" on this map: A gold red deer, a gold European bison, and a wild boar named Wurst (diamond).</p>
              <p style={{margin: '8px 0 0 0'}}>This map contains 5 'great ones': fallow deer, red deer, ring-necked pheasant, red fox, wild boar.</p>
            </div>

            {/* MISSIONS */}
            <h2 style={styles.h2} id="missions">Missions</h2>
            <div style={{marginBottom: '15px', fontStyle: 'italic'}}>
                Main article: <span style={styles.link}>Hirschfelden Hunting Reserve Missions</span>
            </div>
            <p>
                The Hirschfelden Hunting Reserve has 98 total missions: 28 main missions and 70 side missions. Unlike most other reserve storylines (which usually revolve around the reserve warden's family, crimes committed on the reserve, conservation efforts, etc.), the Hirschfelden Hunting Reserve's main storyline lacks any overarching plot and is instead a set of unrelated tasks involving bagging certain game in certain ways and taking photos of places and animals. It shares this in common with the <span style={styles.link}>Layton Lake District</span>.
            </p>

            {/* DESCRIPTION (TRAILER) */}
            <h2 style={styles.h2} id="description">Description (Trailer)</h2>
            <div style={{fontStyle: 'italic', color: '#dbe4eb', marginBottom: '15px'}}>
                "Coming out here, struck by the silence... but then, if you stand there for a minute, you realize it isn't silent at all.
                <br/><br/>
                Lots of people feel like they are visiting, but when you are hunting, you are not just visiting - you are part of it.
                <br/><br/>
                And the wild draws you in... you step on a twig, you stand with the wind, everything you do leaves a mark. Then, when you do see it... that moment... line up the shot, take a deep breath and...
                <br/><br/>
                That feeling... you just have to experience it for yourself."
            </div>

            {/* TRIVIA */}
            <h2 style={styles.h2} id="trivia">Trivia</h2>
            <ul style={{fontSize: '0.95rem', paddingLeft: '20px', listStyleType: 'disc', color: '#dbe4eb'}}>
                {triviaData.map((point, idx) => (
                    <li key={idx} style={{marginBottom: '10px'}}>
                        {/* Basic parsing to detect links in trivia text */}
                        {point.includes("theHunter: Classic") ? (
                            <span>
                                It is the only map featured in theHunter: Call of the Wild that was also featured in <span style={styles.link}>theHunter: Classic</span>.
                            </span>
                        ) : (
                            point
                        )}
                    </li>
                ))}
            </ul>

            {/* GALLERY */}
            <h2 style={styles.h2} id="gallery">Gallery</h2>
            <div style={{marginBottom: '24px'}}>
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