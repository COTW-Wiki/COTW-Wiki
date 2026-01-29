import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import class1Icon from '../../../assets/Class1Icon.webp';
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import EuropeanRabbitMain from '../../../assets/EuropeanRabbit.webp';

// Shot Scheme
import EuropeanRabbitShot from '../../../assets/European_Rabbit_shot_scheme.webp';

// Fur Variant Images
import EuropeanRabbit_Albino from '../../../assets/EuropeanRabbit_Albino.webp';
import EuropeanRabbit_Brown from '../../../assets/EuropeanRabbit_Brown.webp';
import EuropeanRabbit_DarkBrown from '../../../assets/EuropeanRabbit_DarkBrown.webp';
import EuropeanRabbit_Leucistic from '../../../assets/EuropeanRabbit_Leucistic.webp';
import EuropeanRabbit_LightBrown from '../../../assets/EuropeanRabbit_LightBrown.webp';
import EuropeanRabbit_LightGrey from '../../../assets/EuropeanRabbit_LightGrey.webp';
import EuropeanRabbit_Melanistic from '../../../assets/EuropeanRabbit_Melanistic.webp';
import EuropeanRabbit_Tan from '../../../assets/EuropeanRabbit_Tan.webp';


const EuropeanRabbit = () => {

  // --- DATA SOURCES ---

  // Smooth-scroll helper for TOC links
  const scrollToId = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (window && history && history.replaceState) history.replaceState(null, '', `#${id}`);
  };

  // Need Zone Times
  // Source: Екранна снимка 2026-01-16 163803.jpg
  // Note: The source explicitly states they have no traditional need zones, but provides a schedule.
  const needZonesData = [
    {
      name: "Hirschfelden",
      schedule: [
        { time: "00:00 - 05:00", type: "Resting", icon: RestingZoneIcon },
        { time: "05:00 - 09:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "09:00 - 12:00", type: "Resting", icon: RestingZoneIcon },
        { time: "12:00 - 16:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "16:00 - 18:00", type: "Resting", icon: RestingZoneIcon },
        { time: "18:00 - 22:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "22:00 - 00:00", type: "Resting", icon: RestingZoneIcon },
      ]
    }
  ];

  // Features Table
  // Source: Екранна снимка 2026-01-16 163739.png
  const features = [
    { label: "Behavior", value: "Docile, constantly on the lookout for predators" },
    { label: "Habitat", value: "Short grassland" },
    { label: "Senses", value: "Good hearing and vision, excellent sense of smell" },
    { label: "Social", value: "Gregarious, lives in small groups" },
    { label: "Active", value: "During dawn, afternoon, and dusk" },
    { label: "Recommended Equipment", value: "Class 1 Ammo" },
    { label: "Species", value: "Oryctolagus cuniculus", italic: true, isLink: true },
    { label: "Difficulty", value: "Easy" },
  ];

  // Fur Gallery Data
  // Source: Екранна снимка 2026-01-16 163816.jpg
  const furGallery = [
    { name: "Albino", src: EuropeanRabbit_Albino },
    { name: "Brown", src: EuropeanRabbit_Brown },
    { name: "Dark Brown", src: EuropeanRabbit_DarkBrown },
    { name: "Leucistic", src: EuropeanRabbit_Leucistic },
    { name: "Light Brown", src: EuropeanRabbit_LightBrown },
    { name: "Light Grey", src: EuropeanRabbit_LightGrey },
    { name: "Melanistic", src: EuropeanRabbit_Melanistic },
    { name: "Tan", src: EuropeanRabbit_Tan },
  ];

  // References List
  // Source: Екранна снимка 2026-01-16 163829.jpg
  const references = [
    "https://animalia.bio/european-rabbit",
    "https://www.britannica.com/animal/Old-World-rabbit",
    "https://www.iucnredlist.org/species/41291/170619657"
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
          <span>European Rabbit</span>
          <div style={styles.editActions}>
          </div>
        </div>

        <div style={styles.layout}>
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside style={styles.sidebarColumn}>
            <div style={styles.sidebarHeader}>European Rabbit</div>
            <div style={styles.sidebarImage}>
              <img src={EuropeanRabbitMain} alt="European Rabbit" style={{width:'268px', height: '134px', objectFit: 'cover'}} />
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
                  <span>1.24</span>
                </div>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.gold}}>☗ Gold</span>
                  <span>1.92</span>
                </div>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.diamond}}>☗ Diamond</span>
                  <span>2.42</span>
                </div>
              </div>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Weight</span>
              900g — 2.6kg<br/>
              2lbs — 6lbs
            </div>

            <div style={styles.sidebarSection}>
               <span style={styles.sidebarLabel}>Fur</span>
               <span style={{fontSize:'0.85rem'}}>
                  Albino, Brown, Dark-Brown, Leucistic, Light Brown, Light Grey, Melanistic, Tan
               </span>
            </div>

            <div style={styles.sidebarHeader}>Locations</div>
            <div style={styles.sidebarSection}>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Hirschfelden Hunting Reserve</span></div>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Te Awaroa National Park</span></div>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Salzwiesen Park</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main style={styles.mainColumn}>

            {/* Quote Block */}
            <div style={styles.quoteBox}>
              "The European rabbit is native to southwestern Europe and to northwest Africa. Known as an invasive species, it has been introduced to countries on almost all continents, often with devastating effects on local biodiversity. European rabbits are social and territorial animals, who prefer to live in large and complex burrow systems (warrens). A typical colony consists of 10 to 15 adults. Its ideal habitat consists of short grasslands with secure refuge near feeding areas. Well-known for their reproductive capacity, they are capable of reproducing year-round. Gestation is about 30 days, and the average litter contains 5 young. Females may have several litters per year."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p style={{marginBottom:'20px'}}>
              The <strong>European Rabbit</strong> is a <span style={styles.link}>class 1</span> rabbit species that can be hunted on <span style={styles.link}>Hirschfelden Hunting Reserve</span>, <span style={styles.link}>Te Awaroa National Park</span>, and <span style={styles.link}>Salzwiesen Park</span>. It was initially released on Hirschfelden Hunting Reserve as free DLC, and is currently the only animal in game that uses burrows and no need zones.
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
                <li><a href="#tips" onClick={scrollToId('tips')} style={styles.link}>Tips</a></li>
                <li><a href="#need-zone-times" onClick={scrollToId('need-zone-times')} style={styles.link}>Need Zone Times</a></li>
                <li><a href="#shot-scheme" onClick={scrollToId('shot-scheme')} style={styles.link}>Shot scheme</a></li>
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

            {/* TIPS */}
            <h2 id="tips" style={styles.h2}>Tips</h2>
            <p style={{marginBottom: '10px'}}>
               European Rabbits are the only animal in game that lack need zones; so you have to find their burrows if you want to hunt them. Even when you find a burrow, these burrows won't be marked on your map. You either have to commit these locations to memory, or make a physical map with their locations marked.
            </p>
            <p style={{marginBottom: '10px'}}>
               An easier way to find them, especially on multiplayer, is to use a <span style={styles.link}>German Shorthaired Pointer</span> to point them out. But if you don't have the DLC, run around open fields during their active periods until you hear a warning "Thump"; their burrows will be located close to open fields.
            </p>
            <p style={{marginBottom: '10px'}}>
               They have a very small spook radius; so don't worry about scaring them, of course still be cautious when you approach. <span style={styles.link}>Te Awaroa National Park</span> will be the most open map for hunting these animals. But if you're hunting on <span style={styles.link}>Hirschfelden Hunting Reserve</span>, you can find ALL European Rabbits on the RIGHT SIDE of the map, and none on the left side.
            </p>
            
            {/* NEED ZONE TIMES */}
            <h2 id="need-zone-times" style={styles.h2}>Need Zone Times</h2>
            <p style={{marginBottom: '15px'}}>
               Currently, the European Rabbit has no Need Zones. Only its burrows can be found on the map. At resting time, it is hidden inside the burrow and not reachable while it will roam around it's burrow on feeding time.
            </p>
            <div style={{display:'inline-block'}}>
                <table style={{...styles.table, width: '300px'}}>
                    <thead>
                        <tr><th colSpan="2" style={{...styles.th, textAlign: 'center'}}>Hirschfelden</th></tr>
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
                  <img src={EuropeanRabbitShot} alt="Shot Scheme" style={{maxWidth: '100%', maxHeight: '400px'}} />
               </div>
               <div style={styles.shotInfo}>
                  <strong>Color code</strong>
                  <div style={{marginTop: '20px'}}>
                     No Color - Every hit will kill the animal
                  </div>
               </div>
            </div>

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
                            Tan (37.35%)<br/>
                            Dark Brown (37.35%)<br/>
                            Light Brown (12.50%)<br/>
                            Brown (12.50%)
                        </td>
                        <td style={styles.td}>X</td>
                        <td style={styles.td}>
                            Melanistic (0.10%)<br/>
                            Light Grey (0.10%)
                        </td>
                        <td style={styles.td}>
                            Leucistic (0.05%)<br/>
                            Albino (0.05%)
                        </td>
                    </tr>
                </tbody>
            </table>

            {/* TRIVIA */}
            <h2 id="trivia" style={styles.h2}>Trivia</h2>
            <ul style={{paddingLeft:'20px', marginBottom: '30px'}}>
              <li style={{marginBottom:'8px'}}>European Rabbits breeding culture is weirdly hierarchical. The older, stronger, Bucks are typically polygamous, while weaker males are almost exclusively Monogamous. When a Doe gives birth, their offspring are called Kittens.<sup>[1]</sup></li>
              <li style={{marginBottom:'8px'}}>The European Rabbit is the direct ancestor of all domestic bunny breeds.<sup>[2]</sup></li>
              <li style={{marginBottom:'8px'}}>Despite their propensity to have children, and their universal status as an invasive species, they are considered endangered in their native range.<sup>[3]</sup></li>
              <li style={{marginBottom:'8px'}}>It was remodeled with the Update on December 03 2024.</li>
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

export default EuropeanRabbit;