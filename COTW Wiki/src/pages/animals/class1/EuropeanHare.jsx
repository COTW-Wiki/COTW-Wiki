import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import class1Icon from '../../../assets/Class1Icon.webp';
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import EuropeanHareMain from '../../../assets/EuropeanHare.webp';

// Shot Scheme
import EuropeanHareShot from '../../../assets/Scrub_hare_shot_scheme.webp';

// Fur Variant Images
import EuropeanHare_Albino from '../../../assets/EuropeanHare_Albino.webp';
import EuropeanHare_Brown from '../../../assets/EuropeanHare_Brown.webp';
import EuropeanHare_DarkBrown from '../../../assets/EuropeanHare_DarkBrown.webp';
import EuropeanHare_Grey from '../../../assets/EuropeanHare_Grey.webp';
import EuropeanHare_LightBrown from '../../../assets/EuropeanHare_LightBrown.webp';
import EuropeanHare_Melanistic from '../../../assets/EuropeanHare_Melanistic.webp';


const EuropeanHare = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  // Source: Екранна снимка 2026-01-16 155649.png

  // Smooth-scroll helper for TOC links
  const scrollToId = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (window && history && history.replaceState) history.replaceState(null, '', `#${id}`);
  };
  const needZonesData = [
    {
      name: "Cuatro Colinas Game Reserve",
      schedule: [
        { time: "00:00 - 03:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "03:00 - 06:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "06:00 - 09:30", type: "Resting", icon: RestingZoneIcon },
        { time: "09:00 - 12:30", type: "Resting", icon: RestingZoneIcon },
        { time: "12:00 - 15:30", type: "Resting", icon: RestingZoneIcon },
        { time: "15:00 - 18:30", type: "Resting", icon: RestingZoneIcon },
        { time: "18:00 - 21:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "21:00 - 00:30", type: "Feeding", icon: FeedingZoneIcon },
      ]
    }
  ];

  // Features Table
  // Source: Екранна снимка 2026-01-16 155643.png
  const features = [
    { label: "Behavior", value: "Social, easily frightened" },
    { label: "Habitat", value: "Farmland, grassland, woodland" },
    { label: "Senses", value: "Very good senses of sight and hearing, decent sense of smell" },
    { label: "Social", value: "Prefers solitude but feeds in herds for protection" },
    { label: "Active", value: "Night and dusk" },
    { label: "Recommended Equipment", value: "Class 1 Ammo" },
    { label: "Species", value: "Lepus europaeus", italic: true, isLink: true },
    { label: "Difficulty", value: "Easy" },
  ];

  // Fur Gallery Data
  // Source: Екранна снимка 2026-01-16 155703.jpg
  const furGallery = [
    { name: "Albino", src: EuropeanHare_Albino },
    { name: "Brown", src: EuropeanHare_Brown },
    { name: "Dark Brown", src: EuropeanHare_DarkBrown },
    { name: "Grey", src: EuropeanHare_Grey },
    { name: "Light Brown", src: EuropeanHare_LightBrown },
    { name: "Melanistic", src: EuropeanHare_Melanistic },
  ];

  // References List
  // Source: Екранна снимка 2026-01-16 155710.jpg
  const references = [
    "https://www.visitingvienna.com/sights/museums/durer-hare/"
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
    editActions: {
      fontSize: '0.9rem',
      color: '#6fb2e6',
      display: 'flex',
      gap: '15px',
      fontWeight: 'bold',
      cursor: 'pointer',
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
    },
    shotContainer: {
      display: 'flex',
      backgroundColor: '#112233',
      marginTop: '10px',
      border: '1px solid #1f405a',
    },
    shotImage: {
      width: '500px',
      backgroundColor: '#000',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#555',
      flexShrink: 0,
    },
    shotInfo: {
      padding: '20px',
      flex: 1,
      color: '#fff',
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
    },
    rarityCommon: { color: '#2ecc71', fontWeight: 'bold' },
    rarityUncommon: { color: '#3498db', fontWeight: 'bold' },
    rarityRare: { color: '#9b59b6', fontWeight: 'bold' },
    rarityVeryRare: { color: '#e74c3c', fontWeight: 'bold' },
  };

  return (
    <div style={styles.container}>
      <div style={styles.innerWrapper}>
        
        {/* PAGE HEADER */}
        <div style={styles.mainHeader}>
          <span>European Hare</span>
          <div style={styles.editActions}>
          </div>
        </div>

        <div style={styles.layout}>
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside style={styles.sidebarColumn}>
            <div style={styles.sidebarHeader}>European Hare</div>
            <div style={styles.sidebarImage}>
              <img src={EuropeanHareMain} alt="European Hare" style={{width:'268px', height: '134px', objectFit: 'cover'}} />
            </div>
            
            <div style={styles.sidebarHeader}>General Information</div>
            
            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Class</span>
              <span><img src={class1Icon} alt="Class 1" style={{width:'20px', height:'20px', verticalAlign: 'middle', marginRight: '6px'}}/>1</span>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Difficulty</span>
              <span>1: Trivial — 3: Very Easy</span>
            </div>

            {/* Trophy Type */}
            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Trophy Type</span>
              <span>Weight</span>
              <div style={styles.trophyGrid}>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.silver}}>◆ Silver</span>
                  <span>3</span>
                </div>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.gold}}>☗ Gold</span>
                  <span>5</span>
                </div>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.diamond}}>☗ Diamond</span>
                  <span>6.5</span>
                </div>
              </div>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Weight</span>
              2kg — 7kg<br/>
              4lbs — 15lbs
            </div>

            <div style={styles.sidebarSection}>
               <span style={styles.sidebarLabel}>Fur</span>
               <span style={{fontSize:'0.85rem'}}>
                  Albino, Brown, Dark-Brown, Light Brown, Grey, Melanistic
               </span>
            </div>

            <div style={styles.sidebarHeader}>Locations</div>
            <div style={styles.sidebarSection}>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Cuatro Colinas Game Reserve</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main style={styles.mainColumn}>

            {/* Quote Block */}
            <div style={styles.quoteBox}>
              "European hares, also known as the brown hare are a game animal that has been successfully introduced all over the world. Hares prefer their solitude but tend to feed in large groups to help protect themselves against predators. These creatures can weigh between 2.00 kg - 4.00 kg and have a length that can reach between 0.40 m - 0.70 m. Females tend to be bigger than males with weights that can reach 7.00 kg. They are a polygamous species that is capable of breeding year-round if living within the right climates. They can reach puberty within 4-6 months. Females like to create shallow depressions in the ground which they use as a place of rest until their young are born."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p style={{marginBottom:'20px'}}>
              The <strong>European Hare</strong> is a <span style={styles.link}>class 1</span> animal. It can be hunted in the <span style={styles.link}>Cuatro Colinas Game Reserve</span>. It is the 3rd lagomorph (hares and rabbits) to be featured in the game and one of 7 huntable in the game. The others are: <span style={styles.link}>White-tailed Jackrabbit</span>, <span style={styles.link}>Scrub Hare</span>, <span style={styles.link}>European Rabbit</span>, <span style={styles.link}>Antelope Jackrabbit</span>, <span style={styles.link}>Eastern Cottontail Rabbit</span> and <span style={styles.link}>Mountain Hare</span>.
            </p>

            {/* Table of Contents Placeholder */}
            <div style={{
                border: '1px solid #3a5a75',
                backgroundColor: '#0f2e48',
                display: 'inline-block',
                padding: '10px 20px',
                borderRadius: '4px',
                minWidth: '200px'
            }}>
              <div style={{fontWeight:'bold', borderBottom: '1px solid #3a5a75', marginBottom: '5px'}}>
                🔢 Contents <span style={{float:'right', color: '#6fb2e6', fontSize:'0.8rem'}}>[hide]</span>
              </div>
              <ol style={{margin:'0', paddingLeft: '20px', color: '#6fb2e6'}}>
                <li><a href="#features" onClick={scrollToId('features')} style={styles.link}>Features</a></li>
                <li><a href="#need-zone-times" onClick={scrollToId('need-zone-times')} style={styles.link}>Need Zone Times</a></li>
                <li><a href="#shot-scheme" onClick={scrollToId('shot-scheme')} style={styles.link}>Shot scheme</a></li>
                <li><a href="#tips" onClick={scrollToId('tips')} style={styles.link}>Tips</a></li>
                <li><a href="#fur-variants" onClick={scrollToId('fur-variants')} style={styles.link}>Fur Variants</a></li>
                <li><a href="#fur-variant-rarity" onClick={scrollToId('fur-variant-rarity')} style={styles.link}>Fur Variant Rarity</a></li>
                <li><a href="#trivia" onClick={scrollToId('trivia')} style={styles.link}>Trivia</a></li>
                <li><a href="#references" onClick={scrollToId('references')} style={styles.link}>References</a></li>
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
            <h2 id="need-zone-times" style={styles.h2}>Need Zone Times</h2>
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
                            <td style={styles.td}><img src={zone.icon} alt={zone.type} style={{width:'20px', height: '20px', verticalAlign: 'middle', marginRight: '6px'}}/> {zone.type}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* SHOT SCHEME */}
            <h2 id="shot-scheme" style={styles.h2}>Shot scheme</h2>
            <div style={styles.shotContainer}>
              <div style={styles.shotImage}>
                <img src={EuropeanHareShot} alt="European Hare shot scheme" style={{maxWidth: '100%', maxHeight: '100%'}} />
              </div>
              <div style={styles.shotInfo}>
                <p style={{marginTop: 0, marginBottom: 8}}>No Color - Every hit will kill the animal</p>
              </div>
            </div>

            {/* TIPS */}
            <h2 id="tips" style={styles.h2}>Tips</h2>
            <p style={{marginBottom: '20px'}}>
               The easiest way to hunt these bunnies is to hunt them during their rest time, 6:00 - 18:30. Their rest zones are unusually open since you can find many in tree orchards.
            </p>

            {/* FUR VARIANTS (Gallery) */}
            <h2 id="fur-variants" style={styles.h2}>Fur Variants</h2>
            <div style={styles.galleryGrid}>
              {furGallery.map((item, i) => (
                <div key={i} style={styles.galleryItem}>
                    <div style={styles.galleryImgPlaceholder}>
                    <img src={item.src} alt={item.name} style={{maxWidth: '100%', maxHeight: '180px', objectFit: 'contain'}} />
                  </div>
                  <span style={styles.galleryLabel}>{item.name}</span>
                </div>
              ))}
            </div>

            {/* FUR VARIANT RARITY TABLE */}
            <h2 id="fur-variant-rarity" style={styles.h2}>Fur Variant Rarity</h2>
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
                    <tr>
                        <td style={{...styles.td, color: '#3498db', fontStyle: 'italic', fontWeight: 'bold'}}>
                            Male/<span style={{color: '#d63384'}}>Female</span>
                        </td>
                        <td style={styles.td}>
                            Brown (24.97%)<br/>
                            Dark Brown (24.97%)<br/>
                            Grey (24.97%)<br/>
                            Light Brown (24.97%)
                        </td>
                        <td style={styles.td}>X</td>
                        <td style={styles.td}>X</td>
                        <td style={styles.td}>
                            Albino (0.05%)<br/>
                            Melanistic (0.05%)
                        </td>
                    </tr>
                </tbody>
            </table>

            {/* TRIVIA */}
            <h2 id="trivia" style={styles.h2}>Trivia</h2>
            <ul style={{paddingLeft:'20px', marginBottom: '30px'}}>
              <li style={{marginBottom:'8px'}}>The European Hare is currently the largest lagomorph species in game.</li>
              <li style={{marginBottom:'8px'}}>Only the females can make diamond, as with all hare species.</li>
              <li style={{marginBottom:'8px'}}>It is the subject of a famous watercolor painting by artist Albrecht Dürer called "Young Hare".<sup>[1]</sup></li>
            </ul>

            {/* REFERENCES */}
            <h2 id="references" style={styles.h2}>References</h2>
            <ol style={{fontSize: '0.9rem', paddingLeft: '20px'}}>
               {references.map((ref, idx) => (
                  <li key={idx} style={{marginBottom: '4px'}}>
                     <span style={styles.link}>↑ {ref}</span>
                  </li>
               ))}
            </ol>

            <AnimalsTableMini />
          </main>
        </div>
      </div>
    </div>
  );
};

export default EuropeanHare;