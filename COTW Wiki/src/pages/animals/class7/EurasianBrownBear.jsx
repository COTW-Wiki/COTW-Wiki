import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import DrinkingZoneIcon from '../../../assets/DrinkingZoneIcon.webp';
import class7Icon from '../../../assets/Class7Icon.webp'; // Class 7 for Eurasian Brown Bear
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import EurasianBrownBearMain from '../../../assets/Bear.webp';
import ShotSchemeImg from '../../../assets/Brown_bear_shot_scheme.webp';

// Fur Variant Images
import EurasianBrownBear_Albino from '../../../assets/EurasianBrownBear_Albino.webp';
import EurasianBrownBear_Blonde from '../../../assets/EurasianBrownBear_Blonde.webp';
import EurasianBrownBear_Cinnamon from '../../../assets/EurasianBrownBear_Cinnamon.webp';
import EurasianBrownBear_DarkBrown from '../../../assets/EurasianBrownBear_DarkBrown.webp';
import EurasianBrownBear_Gold from '../../../assets/EurasianBrownBear_Gold.webp';
import EurasianBrownBear_Grey from '../../../assets/EurasianBrownBear_Grey.webp';
import EurasianBrownBear_LightBrown from '../../../assets/EurasianBrownBear_LightBrown.webp';
import EurasianBrownBear_Melanistic from '../../../assets/EurasianBrownBear_Melanistic.webp';
import EurasianBrownBear_RedBrown from '../../../assets/EurasianBrownBear_RedBrown.webp';
import EurasianBrownBear_Spirit from '../../../assets/EurasianBrownBear_Spirit.webp';


const EurasianBrownBear = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  const needZonesData = [
    {
      name: "Medved-Taiga & Revontuli Coast",
      schedule: [
        { time: "00:00 - 04:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "04:00 - 08:30", type: "Drinking", icon: DrinkingZoneIcon },
        { time: "08:00 - 12:30", type: "Resting", icon: RestingZoneIcon },
        { time: "12:00 - 16:30", type: "Resting", icon: RestingZoneIcon },
        { time: "16:00 - 20:30", type: "Resting", icon: RestingZoneIcon },
        { time: "20:00 - 00:30", type: "Feeding", icon: FeedingZoneIcon },
      ]
    }
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Skittish and ocassionally aggressive." },
    { label: "Habitat", value: "Prefer forests and mountainous terrain" },
    { label: "Senses", value: "Very good sense of smell" },
    { label: "Social", value: "Mostly Solitary" },
    { label: "Active", value: "During night" },
    { label: "Recommended Equipment", value: "Class 7 Ammo, Predator \"Distressed Fawn\" Caller" },
    { label: "Species", value: "Ursus arctos", italic: true, isLink: true },
    { label: "Difficulty", value: "Hard" },
  ];

  // Fur Gallery Data
  const furGallery = [
    { name: "Albino", src: EurasianBrownBear_Albino },
    { name: "Blonde", src: EurasianBrownBear_Blonde },
    { name: "Cinnamon", src: EurasianBrownBear_Cinnamon },
    { name: "Dark Brown", src: EurasianBrownBear_DarkBrown },
    { name: "Gold", src: EurasianBrownBear_Gold },
    { name: "Grey", src: EurasianBrownBear_Grey },
    { name: "Light Brown", src: EurasianBrownBear_LightBrown },
    { name: "Melanistic", src: EurasianBrownBear_Melanistic },
    { name: "Red Brown", src: EurasianBrownBear_RedBrown },
    { name: "Spirit", src: EurasianBrownBear_Spirit },
  ];

  // Trivia Data
  const triviaData = [
    "The Eurasian Brown Bear gets its scientific name from the Latin word for bear Ursus and the Greek word for bear ἄρκτος-arktos",
    "Medved (медведь) is \"Bear\" in Russian.",
    "It was the second bear species to be added to the game after the Black Bear.",
    "The Eurasian Brown Bear is the official animal of Finland, and it is an animal with great importance to Finnish tradition and folklore. Some parts of Ancient Finland even worshiped Bears as deities.",
    "The Eurasian Brown Bear models and fur textures changed after the Revontuli Coast Update (see above gallery for context)"
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
          <span>Eurasian Brown Bear</span>
        </div>

        <div style={styles.layout}>
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside style={styles.sidebarColumn}>
            <div style={styles.sidebarHeader}>Eurasian Brown Bear</div>
            <div style={styles.sidebarImage}>
              <img src={EurasianBrownBearMain} alt="Eurasian Brown Bear" style={{width:'100%', height: '100%', objectFit: 'cover'}} />
            </div>
            
            <div style={styles.sidebarHeader}>General Information</div>
            
            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Class</span>
              <span><img src={class7Icon} alt="Class 7" style={{width:'24px', height:'24px', verticalAlign: 'middle', marginRight: '6px'}}/>7</span>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Difficulty</span>
              <span>1: Trivial — 9: Legendary</span>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Trophy Type</span>
              <span>Skull</span>
              <div style={styles.trophyGrid}>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.silver}}>◆ Silver</span>
                  <span>18.6</span>
                </div>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.gold}}>☗ Gold</span>
                  <span>23.8</span>
                </div>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.diamond}}>☗ Diamond</span>
                  <span>27.7</span>
                </div>
              </div>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Weight</span>
              110kg — 482kg<br/>
              <span style={{color: '#88a0b8', fontSize: '0.85rem'}}>243lbs — 1063lbs</span>
            </div>

            <div style={styles.sidebarSection}>
               <span style={styles.sidebarLabel}>Fur</span>
               <span style={{fontSize:'0.85rem'}}>
                 Albino, Blond, Cinnamon, Dark Brown, Gold, Grey, Light Brown, Melanistic, Red-Brown, Spirit
               </span>
            </div>

            <div style={styles.sidebarHeader}>Locations</div>
            <div style={styles.sidebarSection}>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Medved-Taiga National Park</span></div>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Revontuli Coast</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main style={styles.mainColumn}>

            {/* Quote Block */}
            <div style={styles.quoteBox}>
              "The brown bear is a large bear that can be found across much of northern Eurasia and North America. It is one of the two largest carnivorans alive today, rivaled in body size only by its close cousin, the polar bear. Brown bears have long, thick fur, that comes in many color variations. A typical male weighs between 195.00 kg to 482.00 kg, while the females are smaller and range, between 110.00 kg to 340.00 kg. Hunting brown bears requires patience, stealth, and a high degree of marksmanship. Brown bears have great physical strength, a keen sense of smell and are likely to attack a hunter when cornered. Brown bears are omnivores and can be found in most areas, although they prefer mountainous terrain."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p style={{marginBottom:'20px'}}>
              The <strong>Eurasian Brown Bear</strong> is a large predator (<span style={styles.link}>class 7</span>). It can be hunted at <span style={styles.link}>Medved-Taiga National Park</span> and <span style={styles.link}>Revontuli Coast</span>. It is one of two Brown Bear species in the game. The other is the <span style={styles.link}>Grizzly Bear</span>.
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
                🔢 Contents <span style={{float:'right', color: '#6fb2e6', fontSize:'0.8rem', cursor: 'pointer'}}>[hide]</span>
              </div>
              <ol style={{margin:'0', paddingLeft: '20px', color: '#6fb2e6'}}>
                <li><a href="#features" onClick={(e)=>scrollToId(e,'features')} style={styles.link}>Features</a></li>
                <li><a href="#need-zones" onClick={(e)=>scrollToId(e,'need-zones')} style={styles.link}>Need Zone Times</a></li>
                <li><a href="#shot-scheme" onClick={(e)=>scrollToId(e,'shot-scheme')} style={styles.link}>Shot Scheme</a></li>
                <li><a href="#fur-variants" onClick={(e)=>scrollToId(e,'fur-variants')} style={styles.link}>Fur Variants</a></li>
                <li><a href="#variant-rarity" onClick={(e)=>scrollToId(e,'variant-rarity')} style={styles.link}>Fur Variant Rarity</a></li>
                <li><a href="#trivia" onClick={(e)=>scrollToId(e,'trivia')} style={styles.link}>Trivia</a></li>
              </ol>
            </div>

            {/* FEATURES */}
            <h2 style={styles.h2} id="features">Features</h2>
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
            <h2 style={styles.h2} id="need-zones">Need Zone Times</h2>
            <div style={{display:'inline-block'}}>
                <div style={{marginBottom:'10px', fontStyle:'italic', color:'#88a0b8'}}>Need zone times are identical on both Medved Taiga National Park and Revontuli Coast.</div>
                <table style={{...styles.table, width: '300px'}}>
                    <thead>
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
            <h2 style={styles.h2} id="shot-scheme">Shot Scheme</h2>
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
            <h2 style={styles.h2} id="fur-variants">Fur Variants</h2>
            <div style={styles.galleryGrid}>
              {furGallery.map((item, i) => (
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
            <div style={{overflowX: 'auto', marginBottom: '20px'}}>
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
                        {/* Male/Female Combined Row */}
                        <tr>
                            <td style={styles.td}>
                                <span style={{color: '#3498db', fontStyle: 'italic', fontWeight: 'bold'}}>Male</span>
                                <span style={{color: '#dbe4eb'}}>/</span>
                                <span style={{color: '#d63384', fontStyle: 'italic', fontWeight: 'bold'}}>Female</span>
                            </td>
                            <td style={styles.td}>
                                Cinnamon (24.90%)<br/>
                                Light Brown (24.90%)<br/>
                                Red Brown (24.90%)
                            </td>
                            <td style={styles.td}>
                                Blonde (5.00%)<br/>
                                Dark Brown (5.00%)<br/>
                                Gold (5.00%)<br/>
                                Grey (5.00%)<br/>
                                Spirit (5.00%)
                            </td>
                            <td style={styles.td}>
                                Melanistic (0.20%)<br/>
                                Albino (0.10%)
                            </td>
                            <td style={styles.td}>
                                X
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* TRIVIA */}
            <h2 id="trivia" style={styles.h2}>Trivia</h2>
            <ul style={{fontSize: '0.95rem', paddingLeft: '20px', listStyleType: 'disc', color: '#dbe4eb'}}>
                {triviaData.map((point, idx) => (
                    <li key={idx} style={{marginBottom: '10px'}}>{point}</li>
                ))}
            </ul>

            <div style={{marginTop: '40px'}}>
                <AnimalsTableMini />
            </div>
            
          </main>
        </div>
      </div>
    </div>
  );
};

export default EurasianBrownBear;