import React from 'react';
import { Link } from 'react-router-dom';
// --- IMPORTS ---
// Component placeholders (Adjust paths as necessary)
import ParqueFernandoHuntableAnimalsTable from '../../../components/ParqueFernandoHuntableAnimalsTable'; 
import GallerySlideshow from '../../../components/GallerySlideshow';

// Image Assets (Placeholders based on your project structure)
import ParqueFernandoMapImage from '../../../assets/ParqueFernando_logo-background.webp'; // The puma logo from Screenshot 1
import worldMapImage from '../../../assets/world-map-vector-removebg-preview.png';
import parqueLogo from '../../../assets/ParqueFernando_reserve_logo-removebg-preview.png';
import '../Reserves.css';

// Gallery placeholders
import pf1 from '../../../assets/ParqueFernando_Gallery_1.webp';
import pf2 from '../../../assets/ParqueFernando_Gallery_2.webp';
import pf3 from '../../../assets/ParqueFernando_Gallery_3.webp';

const ParqueFernando = () => {

  // --- DATA SOURCES ---

  // Regions Data (From Screenshot 2)
  const regionsData = [
    { region: "Regne Del Stags", subregions: ["Tierra Altas", "Bosque Muerto"] },
    { region: "Lago Gallegos", subregions: ["Junto al Lago", "Lago Bebe"] },
    { region: "Tierra Vargas", subregions: ["Prados De Lupinos", "Estepa Dorada"] },
    { region: "Tierres Silvestres", subregions: ["Selva Puma", "Bosque de Eva"] },
  ];

  // --- STYLES OBJECT (Standardized) ---
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
          <span>Parque Fernando</span>
        </div>

        <div style={styles.layout}>
          
          {/* --- RIGHT SIDEBAR (Logo/Map Image) --- */}
          <aside style={styles.sidebarColumn}>
            <div style={styles.sidebarHeader}>Parque Fernando</div>
            <div style={styles.sidebarImage}>
                {/* Logo from Screenshot 1 */}
                <img src={ParqueFernandoMapImage} alt="Parque Fernando Logo" style={{width:'100%', height:'100%', objectFit: 'cover'}} />
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main style={styles.mainColumn}>

            {/* Intro Quote */}
            <div style={styles.quoteBox}>
              At the end of the world, where the barren Patagonian Steppe meets the balmy southern beech forests, lies Parque Fernando. Game imported from every continent thrive in this land of plenty. In the wetlands, cinnamon teal flock to the lakes, while water buffalo gather at the swamps. The grasslands and forests teem with blackbucks and a variety of deer: spotted axis deer, hearty mule deer and magnificent red deer. Hunting them all from the highlands to the low is Parque Fernando's apex predator, the puma.
              <br/><br/>
              —In-game Description
            </div>

            {/* Intro Paragraph */}
            <p style={{marginBottom:'20px'}}>
              The Parque Fernando is located in <span style={styles.link}>Argentina, South America</span>. The warden of the <span style={styles.link}>reserve</span> is <span style={styles.link}>Carolina Vargas</span>. It is also home to an <span style={styles.link}>archery range</span> located at the Prados De Lupinos subregion of Tierra Vargas.
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
                <li><a href="#flora" onClick={(e)=>scrollToId(e,'flora')} style={styles.link}>Flora</a></li>
                <li><a href="#missions" onClick={(e)=>scrollToId(e,'missions')} style={styles.link}>Missions</a></li>
                <li><a href="#trailer" onClick={(e)=>scrollToId(e,'trailer')} style={styles.link}>Trailer</a></li>
                <li><a href="#gallery" onClick={(e)=>scrollToId(e,'gallery')} style={styles.link}>Gallery</a></li>
              </ol>
            </div>

            {/* LOCATION (World map) */}
            <h2 style={styles.h2} id="location">Location</h2>
            <div className="map-container" style={{padding: '1rem 0', width: '1200px', maxWidth: '800px', margin: '0 auto'}}>
              <img className="map-image" src={worldMapImage} alt="World map" style={{width: '100%', height: 'auto'}} />
              {/* Adjusted margins to position pin roughly over Argentina/South America */}
              <Link to="/maps/parque-fernando" className="logo-parque" style={{ '--mask': `url("${parqueLogo}")`, marginLeft:'-120px', marginTop:'150px', width: '70px', height: '70px'}} data-tooltip="Parque Fernando">
                <img src={parqueLogo} alt="Parque Fernando Logo" />
              </Link>
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
                {/* Embedding the specific table component for Parque Fernando */}
                <ParqueFernandoHuntableAnimalsTable />
            </div>

            {/* FLORA */}
            <h2 style={styles.h2} id="flora">Flora</h2>
            <p>
              Framed by hills, Parque Fernando houses a variety of environments to explore. Stroll through the snags of the dead forest, wander the steppes and lupine meadows in search of game, or make your way to the tranquil lakes that pepper the park.
            </p>

            {/* MISSIONS */}
            <h2 style={styles.h2} id="missions">Missions</h2>
            <div style={{marginBottom: '15px', fontStyle: 'italic'}}>
                Main article: <span style={styles.link}>Parque Fernando Missions</span>
            </div>
            <p>
              Like all previously released reserves, Parque Fernando stretches over a massive 25 square miles (64 square kilometers). It’s up to you if you want to explore off the beaten path and discover the secrets of the reserve, or if you decide to take on the captivating new story, with 16 new narrative missions, and 39 side missions.
            </p>
            <p>
              Through the years, <span style={styles.link}>Carolina</span> met the demands of leading her family and her real estate business, but at a price. While she never had enough time to tend to the unfinished reserve, she was always determined to one day finish what she and Fernando started. That day has now come, and she has called for your aid, hoping to turn her slice of wild Patagonia into a world class hunting reserve.
            </p>
            <p>
              Assist Carolina in building the new <span style={styles.link}>lodge</span> for Parque Fernando, and decorate it with your collection of diamond trophies, one from each species of the reserve. Or visit the state-of-the-art archery/shooting range, where you can put your aiming skills to the test. Make sure to keep an eye out for the reserves challenge targets, which are scattered across the grounds.
            </p>

            {/* TRAILER */}
            <h2 style={styles.h2} id="trailer">Trailer</h2>
            <div style={{fontStyle: 'italic', color: '#dbe4eb', marginBottom: '15px'}}>
                Transcript: "There are hunters and then ... there are elite hunters. The elite never settled for gold when there is the glimpse of a diamond, they climbed the highest mountains, patiently searching for the right moment to break the silence with a perfect shot. At Parque Fernando, every hunter patience is rewarded with the hunt of a lifetime. Lines of Axis Deer roams the Steppes, our lupine meadows teams with majestic spiraled horns Blackbuck, our grass feeds the largest Mule Deer's in the America's, and ours lakes are the most tranquil places, where you come find flocks of red and blue Cinnamon Teals... and for the most elite hunters, Parque Fernando comes to record-setting Red Deers, the finest you will find on Earth. Just remember, you are not the Apex Predator here... That job belongs to the Pumas and they don't like to share. So what kind of hunter are you ? Find out... In Wild Patagonia!"
            </div>

            {/* GALLERY */}
            <h2 style={styles.h2} id="gallery">Gallery</h2>
            <div style={{marginBottom: '24px'}}>
              <GallerySlideshow images={[
                { src: pf1, alt: 'Parque Fernando Landscape 1' },
                { src: pf2, alt: 'Parque Fernando Landscape 2' },
                { src: pf3, alt: 'Parque Fernando Landscape 3' }
              ]} />
            </div>

          </main>
        </div>
      </div>
    </div>
  );
};

export default ParqueFernando;