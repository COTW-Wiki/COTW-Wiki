import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import DrinkingZoneIcon from '../../../assets/DrinkingZoneIcon.webp';
import class4Icon from '../../../assets/Class4Icon.webp'; // Class 4 for Ronda Ibex
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import RondaIbexMain from '../../../assets/RondaIbex.webp';
import ShotSchemeImg from '../../../assets/Ronda_Ibex_shot_sceme.webp';

// Fur Variant Images (Placeholders based on screenshots)
// Note: Screenshots primarily showed Male variants in the gallery view.
import RondaIbex_Albino from '../../../assets/RondaIbex_Albino.webp';
import RondaIbex_BrownHybrid from '../../../assets/RondaIbex_BrownHybrid.webp';
import RondaIbex_Brown from '../../../assets/RondaIbex_Brown.webp';
import RondaIbex_Buff from '../../../assets/RondaIbex_Buff.webp';
import RondaIbex_GreyBrown from '../../../assets/RondaIbex_GreyBrown.webp';
import RondaIbex_Grey from '../../../assets/RondaIbex_Grey.webp';
import RondaIbex_LightBrown from '../../../assets/RondaIbex_LightBrown.webp';
import RondaIbex_Melanistic from '../../../assets/RondaIbex_Melanistic.webp';

const RondaIbex = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  const needZonesData = [
    {
      name: "Cuatro Colinas Game Reserve",
      schedule: [
        { time: "00:00 - 04:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "04:00 - 07:30", type: "Resting", icon: RestingZoneIcon },
        { time: "07:00 - 10:30", type: "Resting", icon: RestingZoneIcon },
        { time: "10:00 - 14:30", type: "Drinking", icon: DrinkingZoneIcon },
        { time: "14:00 - 17:30", type: "Resting", icon: RestingZoneIcon },
        { time: "17:00 - 21:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "21:00 - 00:30", type: "Resting", icon: RestingZoneIcon },
      ]
    }
  ];
  // --- STYLES OBJECT ---
  // Features Table
  const features = [
    { label: "Behavior", value: "Wary, shy" },
    { label: "Habitat", value: "Rocky terrain, forests, shrublands" },
    { label: "Senses", value: "Excellent sense of vision and hearing, decent sense of smell" },
    { label: "Social", value: "Common herds during rutting season, same-sex groups during the rest of the year" },
    { label: "Active", value: "Dawn to dusk" },
    { label: "Recommended Equipment", value: "Class 4 Ammo" },
    { label: "Species", value: "Capra pyrenaica hispanica", italic: true, isLink: true },
    { label: "Difficulty", value: "Average" },
  ];

  // Fur Gallery Data
  // Based on the specific gallery screenshots provided which show male models for these variants.
  const maleGallery = [
    { name: "Albino", src: RondaIbex_Albino },
    { name: "Brown Hybrid", src: RondaIbex_BrownHybrid },
    { name: "Brown", src: RondaIbex_Brown },
    { name: "Buff", src: RondaIbex_Buff },
    { name: "Grey Brown", src: RondaIbex_GreyBrown },
    { name: "Grey", src: RondaIbex_Grey },
    { name: "Light Brown", src: RondaIbex_LightBrown },
    { name: "Melanistic", src: RondaIbex_Melanistic },
  ];

  // No specific female gallery screenshot was provided in this batch, 
  // so we will display the Male gallery which covers the variants shown.
  
  // Trivia Data
  // Note: The trivia text visible in the screenshot actually referred to Beceite Ibex ("The Beceite Ibex is named after..."), 
  // which appears to be a wiki error in the source image. It has been omitted here for accuracy.
  const triviaData = [];

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
      borderBottom: '2px solid #cfaa3e',
    },
    sidebarImage: {
      height: '180px',
      backgroundColor: '#1f3a52',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#6fb2e6',
      fontStyle: 'italic',
      borderBottom: '1px solid #1f405a',
      position: 'relative',
    },
    sidebarSection: {
      padding: '10px 15px',
      borderBottom: '1px solid #2a4b63',
      fontSize: '0.95rem',
    },
    sidebarLabel: {
      fontWeight: 'bold',
      display: 'block',
      marginBottom: '5px',
      color: '#fff',
    },
    trophyGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '5px',
      marginTop: '5px',
      textAlign: 'center',
    },
    trophyItem: {
      backgroundColor: '#16334a',
      padding: '6px 2px',
      borderRadius: '4px',
    },
    trophyLabel: {
      fontSize: '0.75rem',
      display: 'block',
      fontWeight: 'bold',
      marginBottom: '2px',
    },
    silver: { color: '#bdc3c7' },
    gold: { color: '#f1c40f' },
    diamond: { color: '#3498db' },
    
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
    shotContainer: {
      display: 'flex',
      backgroundColor: '#112233',
      marginTop: '10px',
      border: '1px solid #1f405a',
      flexDirection: 'row',
      alignItems: 'stretch',
    },
    shotImageWrapper: {
      flex: 1,
      borderRight: '1px solid #1f405a',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#000',
    },
    shotLegend: {
      width: '240px',
      flexShrink: 0,
      display: 'flex',
      flexDirection: 'column',
    },
    legendHeader: {
      backgroundColor: '#162c46',
      padding: '10px',
      fontWeight: 'bold',
      borderBottom: '1px solid #1f405a',
      color: '#fff',
      fontSize: '0.95rem',
    },
    legendItem: {
      padding: '15px',
      borderBottom: '1px solid #1f405a',
      fontSize: '0.9rem',
      color: '#dbe4eb',
    },
    galleryGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
      gap: '15px',
    },
    galleryItem: {
      backgroundColor: 'transparent',
    },
    galleryImgPlaceholder: {
      height: '180px',
      backgroundColor: '#2a4b63',
      border: '4px solid #1f3a52', 
      marginBottom: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
    },
    galleryLabel: {
      fontSize: '0.9rem',
      display: 'block',
      lineHeight: '1.2',
      textAlign: 'center'
    },
    rarityCommon: { color: '#2ecc71', fontWeight: 'bold' },
    rarityUncommon: { color: '#3498db', fontWeight: 'bold' },
    rarityRare: { color: '#9b59b6', fontWeight: 'bold' },
    rarityVeryRare: { color: '#e74c3c', fontWeight: 'bold' },
  };

  // Smooth-scroll helper for TOC links
  function scrollToId(e, id) {
    if (e && e.preventDefault) e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      try { history.replaceState(null, '', `#${id}`); } catch (err) {}
    }
  }

  return (
    <div style={styles.container}>
      <div style={styles.innerWrapper}>
        
        {/* PAGE HEADER */}
        <div style={styles.mainHeader}>
          <span>Ronda Ibex</span>
        </div>

        <div style={styles.layout}>
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside style={styles.sidebarColumn}>
            <div style={styles.sidebarHeader}>Ronda Ibex</div>
            <div style={styles.sidebarImage}>
              <img src={RondaIbexMain} alt="Ronda Ibex" style={{width:'100%', height: '100%', objectFit: 'cover'}} />
            </div>
            
            <div style={styles.sidebarHeader}>General Information</div>
            
            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Class</span>
              {/* Cited from screenshot 105543 */}
              <span><img src={class4Icon} alt="Class 4" style={{width:'24px', height:'24px', verticalAlign: 'middle', marginRight: '6px'}}/>4</span>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Difficulty</span>
              {/* Cited from screenshot 105543 */}
              <span>1: Trivial — 5: Medium</span>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Trophy Type</span>
              <span>Horns</span>
              <div style={styles.trophyGrid}>
                {/* Cited from screenshot 105543 */}
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.silver}}>◆ Silver</span>
                  <span>69.2</span>
                </div>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.gold}}>☗ Gold</span>
                  <span>91.4</span>
                </div>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.diamond}}>☗ Diamond</span>
                  <span>107.9</span>
                </div>
              </div>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Weight</span>
              {/* Cited from screenshot 105543 */}
              35kg — 70kg<br/>
              <span style={{color: '#88a0b8', fontSize: '0.85rem'}}>77lbs — 154lbs</span>
            </div>

            <div style={styles.sidebarSection}>
               <span style={styles.sidebarLabel}>Fur</span>
               {/* Cited from screenshot 105543 */}
               <span style={{fontSize:'0.85rem'}}>
                 Albino, Brown, Brown Hybrid, Buff, Grey, Grey-Brown, Melanistic
               </span>
            </div>

            <div style={styles.sidebarHeader}>Locations</div>
            <div style={styles.sidebarSection}>
               {/* Cited from screenshot 105543 */}
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Cuatro Colinas Game Reserve</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main style={styles.mainColumn}>

            {/* Quote Block */}
            <div style={styles.quoteBox}>
              "Iberian ibex, also known as the Spanish wild goat or Iberian wild goat, is a specific type of wild goat native to the mountain ranges of Iberia. The Iberian ibex is a stocky, mountainous animal, known for its agility and climbing prowess. They use this ability to escape predators, making them an especially challenging quarry. The smallest of the Iberian ibex, the Ronda has horns that grow to about 0.58 m and a maximum weight of just 70.00 kg. They have the brightest fur among the Iberian Ibex and are often the trickiest species to hunt, given their small size and ability to flee rapidly uphill, hidden by rocky outcrops."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p style={{marginBottom:'20px'}}>
              The <strong>Ronda Ibex</strong> is a <span style={styles.link}>class 4</span> goat. It can be hunted in the <span style={styles.link}>Cuatro Colinas Game Reserve</span>. The Ronda Ibex is one of four types of ibex found in the Cuatro Colinas Game Reserve along the <span style={styles.link}>Beceite Ibex</span>, the <span style={styles.link}>Southeastern Spanish Ibex</span> and the <span style={styles.link}>Gredos Ibex</span>. It is found in the north eastern quadrant of the reserve.
            </p>

            {/* Table of Contents */}
            <div style={{
                border: '1px solid #3a5a75',
                backgroundColor: '#0f2e48',
                display: 'inline-block',
                padding: '10px 20px',
                borderRadius: '4px',
                minWidth: '200px',
                marginBottom: '30px'
            }}>
              <div style={{fontWeight:'bold', borderBottom: '1px solid #3a5a75', marginBottom: '5px'}}>
                🔢 Contents <span style={{float:'right', color: '#6fb2e6', fontSize: '0.8rem', cursor: 'pointer'}}>[hide]</span>
              </div>
              <ol style={{margin:'0', paddingLeft: '20px', color: '#6fb2e6'}}>
                <li><a href="#features" onClick={(e)=>scrollToId(e,'features')} style={styles.link}>Features</a></li>
                <li><a href="#need-zones" onClick={(e)=>scrollToId(e,'need-zones')} style={styles.link}>Need Zone Times</a></li>
                <li><a href="#shot-scheme" onClick={(e)=>scrollToId(e,'shot-scheme')} style={styles.link}>Shot scheme</a></li>
                <li><a href="#fur-variants" onClick={(e)=>scrollToId(e,'fur-variants')} style={styles.link}>Fur Variants</a></li>
                <li><a href="#variant-rarity" onClick={(e)=>scrollToId(e,'variant-rarity')} style={styles.link}>Fur Variant Rarity</a></li>
              </ol>
            </div>

            {/* FEATURES */}
            <h2 id="features" style={styles.h2}>Features</h2>
            <table style={styles.table}>
              <thead>
                <tr>
                    <th style={{...styles.th, width: '25%'}}></th>
                    <th style={styles.th}>Description</th>
                </tr>
              </thead>
              <tbody>
                {features.map((item, index) => (
                  <tr key={index}>
                    <td style={{...styles.td, fontWeight: 'bold'}}>{item.label}</td>
                    <td style={{...styles.td, fontStyle: item.italic ? 'italic' : 'normal'}}>
                        {item.isLink ? <span style={styles.link}>{item.value}</span> : item.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            {/* NEED ZONE TIMES */}
            <h2 id="need-zones" style={styles.h2}>Need Zone Times</h2>
            <div style={{display:'inline-block'}}>
                <table style={{...styles.table, width: '300px'}}>
                    <thead>
                        <tr><th colSpan="2" style={{...styles.th, textAlign: 'center'}}>Cuatro Colinas Game Reserve</th></tr>
                        <tr>
                            <th style={{...styles.th, backgroundColor: '#0f2e48'}}>Times</th>
                            <th style={{...styles.th, backgroundColor: '#0f2e48'}}>Activity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {needZonesData[0].schedule.map((zone, i) => (
                        <tr key={i}>
                            <td style={styles.td}>{zone.time}</td>
                            <td style={styles.td}>
                                <div style={{display:'flex', alignItems:'center'}}>
                                    <img src={zone.icon} alt={zone.type} style={{width:'20px', height: '20px', verticalAlign: 'middle', marginRight: '6px'}}/> 
                                    {zone.type}
                                </div>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* SHOT SCHEME */}
             <h2 id="shot-scheme" style={styles.h2}>Shot scheme</h2>
                        <div style={styles.shotContainer}>
                           <div style={styles.shotImageWrapper}>
                             <img src={ShotSchemeImg} alt="Shot Scheme" style={{width: '100%', height: 'auto', maxHeight:'350px', objectFit: 'contain'}} />
                           </div>
                           <div style={styles.shotLegend}>
                             <div style={styles.legendHeader}>Color code</div>
                             <div style={styles.legendItem}>Red - Kills immediately</div>
                             <div style={styles.legendItem}>Blue - Kills very quick</div>
                             <div style={styles.legendItem}>Orange - Kills slowly</div>
                             <div style={{...styles.legendItem, borderBottom: 'none'}}>No Color - Unlikely to kill</div>
                           </div>
                        </div>

            {/* FUR VARIANTS (Gallery) */}
            <h2 id="fur-variants" style={styles.h2}>Fur Variants</h2>

            <div style={styles.galleryGrid}>
              {maleGallery.map((item, i) => (
                <div key={i} style={styles.galleryItem}>
                  <div style={styles.galleryImgPlaceholder}>
                    <img src={item.src} alt={item.name} style={{width:'100%', height: '100%', objectFit: 'contain'}} />
                  </div>
                  <span style={styles.galleryLabel}>{item.name}</span>
                </div>
              ))}
            </div>

            {/* FUR VARIANT RARITY TABLE */}
            <h2 id="variant-rarity" style={styles.h2}>Fur Variant Rarity</h2>
            <div style={{overflowX: 'auto'}}>
                <table style={styles.table}>
                    <thead>
                        <tr>
                            <th style={styles.th}>Sex</th>
                            <th style={{...styles.th, ...styles.rarityCommon}}>Common</th>
                            <th style={{...styles.th, ...styles.rarityUncommon}}>Uncommon</th>
                            <th style={{...styles.th, ...styles.rarityRare}}>Rare</th>
                            <th style={{...styles.th, ...styles.rarityVeryRare}}>Very Rare</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Male Row */}
                        <tr>
                            <td style={{...styles.td, color: '#3498db', fontStyle: 'italic', fontWeight: 'bold'}}>
                                Male
                            </td>
                            <td style={styles.td}>
                                Brown (24.97%)<br/>
                                Brown Hybrid (24.97%)<br/>
                                Grey (24.97%)<br/>
                                Grey Brown (24.97%)
                            </td>
                            <td style={styles.td}>
                                X
                            </td>
                            <td style={styles.td}>
                                X
                            </td>
                            <td style={styles.td}>
                                Albino (0.05%)<br/>
                                Melanistic (0.05%)
                            </td>
                        </tr>
                        {/* Female Row */}
                        <tr>
                            <td style={{...styles.td, color: '#d63384', fontStyle: 'italic', fontWeight: 'bold'}}>
                                Female
                            </td>
                            <td style={styles.td}>
                                Brown (33.29%)<br/>
                                Buff (33.29%)<br/>
                                Light Brown (33.29%)
                            </td>
                            <td style={styles.td}>
                                X
                            </td>
                            <td style={styles.td}>
                                X
                            </td>
                            <td style={styles.td}>
                                Albino (0.07%)<br/>
                                Melanistic (0.07%)
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div style={{marginTop: '40px'}}>
                <AnimalsTableMini />
            </div>
            
          </main>
        </div>
      </div>
    </div>
  );
};

export default RondaIbex;