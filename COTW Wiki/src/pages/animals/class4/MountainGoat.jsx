import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import DrinkingZoneIcon from '../../../assets/DrinkingZoneIcon.webp';
import class4Icon from '../../../assets/Class4Icon.webp'; // Class 4 for Mountain Goat
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import MountainGoatMain from '../../../assets/MountainGoat.webp';
import ShotSchemeImg from '../../../assets/Mountain_Goat_shot_scheme.webp';

// Fur Variant Images (Placeholders)
// Note: Since Mountain Goats are monomorphic (males and females look very similar), 
// and the screenshot shows a single gallery, we will use these for the display.
import MountainGoat_Albino from '../../../assets/MountainGoat_Albino.webp';
import MountainGoat_Beige from '../../../assets/MountainGoat_Beige.webp';
import MountainGoat_LightBrown from '../../../assets/MountainGoat_LightBrown.webp';
import MountainGoat_LightGrey from '../../../assets/MountainGoat_LightGrey.webp';
import MountainGoat_Melanistic from '../../../assets/MountainGoat_Melanistic.webp';
import MountainGoat_White from '../../../assets/MountainGoat_White.webp';


const MountainGoat = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  const needZonesData = [
    {
      name: "Askiy Ridge Hunting Preserve",
      schedule: [
        { time: "00:00 - 04:00", type: "Resting", icon: RestingZoneIcon },
        { time: "04:00 - 07:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "07:00 - 10:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "10:00 - 13:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "13:00 - 17:00", type: "Resting", icon: RestingZoneIcon },
        { time: "17:00 - 20:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "20:00 - 00:00", type: "Resting", icon: RestingZoneIcon },
      ]
    }
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Cautious and curious" },
    { label: "Habitat", value: "Mountain faces, alpine forests and basins" },
    { label: "Senses", value: "Excellent senses of vision and hearing, decent sense of smell" },
    { label: "Social", value: "Males live solitary or in small groups, females live in medium to large-sized groups tending their young" },
    { label: "Active", value: "Morning and evening" },
    { label: "Recommended Equipment", value: "Class 4 Ammo" },
    { label: "Species", value: "Oreamnos americanus", italic: true, isLink: true },
    { label: "Difficulty", value: "Average" },
  ];

  // Fur Gallery Data 
  // The screenshot shows one unified list of variants.
  const furGallery = [
    { name: "Albino", src: MountainGoat_Albino },
    { name: "Beige", src: MountainGoat_Beige },
    { name: "Light Brown", src: MountainGoat_LightBrown },
    { name: "Light Grey", src: MountainGoat_LightGrey },
    { name: "Melanistic", src: MountainGoat_Melanistic },
    { name: "White", src: MountainGoat_White },
  ];

  // Trivia Data
  const triviaData = [
    "The Mountain Goat was reintroduced to the Colorado Rockies in 1947, as previously it went extinct in the area.",
    "You can tell a Mountain Goat's age by the rings on its horns, not unlike a tree.",
    "There is an indie folk rock band called \"The Mountain Goats\".",
    "Despite their name, Mountain Goats are not true goats. They belong to the antelope family.",
    "Mountain goats are nimble and can jump nearly 12 feet in a single bound."
  ];

  // References Data
  const referencesData = [
    "Mountain Goat Need Zones, Askiy Ridge",
    "https://www.youtube.com/watch?v=hdY7aDVYAJs"
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

  // Smooth scroll helper for TOC links
  const scrollToId = (e, id) => {
    if (e && e.preventDefault) e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      try { window.history.replaceState(null, '', `#${id}`); } catch (err) { /* ignore */ }
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.innerWrapper}>
        
        {/* PAGE HEADER */}
        <div style={styles.mainHeader}>
          <span>Mountain Goat</span>
        </div>

        <div style={styles.layout}>
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside style={styles.sidebarColumn}>
            <div style={styles.sidebarHeader}>Mountain Goat</div>
            <div style={styles.sidebarImage}>
              <img src={MountainGoatMain} alt="Mountain Goat" style={{width:'100%', height: '100%', objectFit: 'cover'}} />
            </div>
            
            <div style={styles.sidebarHeader}>General Information</div>
            
            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Class</span>
              {/* Cited from screenshot 1 */}
              <span><img src={class4Icon} alt="Class 4" style={{width:'24px', height:'24px', verticalAlign: 'middle', marginRight: '6px'}}/>4</span>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Difficulty</span>
              {/* Cited from screenshot 1 */}
              <span>1: Trivial — 5: Medium</span>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Trophy Type</span>
              <span>Horns</span>
              <div style={styles.trophyGrid}>
                {/* Cited from screenshot 1 */}
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.silver}}>◆ Silver</span>
                  <span>52.72</span>
                </div>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.gold}}>☗ Gold</span>
                  <span>84.12</span>
                </div>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.diamond}}>☗ Diamond</span>
                  <span>107.67</span>
                </div>
              </div>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Weight</span>
              {/* Cited from screenshot 1 */}
              45kg — 145kg<br/>
              <span style={{color: '#88a0b8', fontSize: '0.85rem'}}>99lbs — 320lbs</span>
            </div>

            <div style={styles.sidebarSection}>
               <span style={styles.sidebarLabel}>Fur</span>
               {/* Cited from screenshot 1 */}
               <span style={{fontSize:'0.85rem'}}>
                 Albino, Beige, Light Brown, Light Grey, Melanistic, White
               </span>
            </div>

            <div style={styles.sidebarHeader}>Locations</div>
            <div style={styles.sidebarSection}>
               {/* Cited from screenshot 1 */}
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Silver Ridge Peaks</span></div>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Askiy Ridge Hunting Preserve</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main style={styles.mainColumn}>

            {/* Quote Block */}
            <div style={styles.quoteBox}>
              "The mountain goat, also known as the Rocky Mountain goat, is the largest mammal found in sub-alpine to alpine altitudes of the Rocky Mountains. Despite its name, it does not belong to the Capra genus that includes all other goats, but is the only living species of the Oreamnos genus. They are informally referred to as goat-antelopes. Both males and female mountain goats have beards and long black horns that can grow up to 0.28 min length. Contrary to most other animals, the female mountain goat is very competitive and protective of their food source. It is not uncommon for conflicts to include all nannies of the herd. The male "billy" goat weighs around 125.00 kg, while the female "nanny" goat weighs 80.00 kg"
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p style={{marginBottom:'20px'}}>
              The <strong>Mountain Goat</strong> is a species in the <span style={styles.link}>Silver Ridge Peaks reserve</span> located in the rocky mountains of Colorado. It is a <span style={styles.link}>class 4</span> animal. Both females and males have horns.
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
                <li><a href="#shot-scheme" onClick={(e)=>scrollToId(e,'shot-scheme')} style={styles.link}>Shot scheme</a></li>
                <li><a href="#fur-variants" onClick={(e)=>scrollToId(e,'fur-variants')} style={styles.link}>Fur Variants</a></li>
                <li><a href="#fur-rarity" onClick={(e)=>scrollToId(e,'fur-rarity')} style={styles.link}>Fur Variant Rarity</a></li>
                <li><a href="#trivia" onClick={(e)=>scrollToId(e,'trivia')} style={styles.link}>Trivia</a></li>
                <li><a href="#references" onClick={(e)=>scrollToId(e,'references')} style={styles.link}>References</a></li>
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
                        <tr><th colSpan="2" style={{...styles.th, textAlign: 'center'}}>Askiy Ridge</th></tr>
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
            <h2 id="fur-rarity" style={styles.h2}>Fur Variant Rarity</h2>
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
                        {/* Combined Male/Female Row as per screenshot */}
                        <tr>
                            <td style={{...styles.td, color: '#3498db', fontStyle: 'italic', fontWeight: 'bold'}}>
                                Male<span style={{color: '#dbe4eb'}}>/</span><span style={{color: '#d63384'}}>Female</span>
                            </td>
                            <td style={styles.td}>
                                Beige (24.97%)<br/>
                                Light Brown (24.97%)<br/>
                                Light Grey (24.97%)<br/>
                                White (24.97%)
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

            {/* REFERENCES */}
            <h2 id="references" style={styles.h2}>References</h2>
            <ol style={{fontSize: '0.95rem', paddingLeft: '20px', color: '#6fb2e6'}}>
              {referencesData.map((ref, idx) => (
                 <li key={idx} style={{marginBottom: '5px'}}>
                  <span style={{color: '#dbe4eb'}}>↑</span> <span style={styles.link}>{ref}</span>
                 </li>
              ))}
            </ol>

            <div style={{marginTop: '40px'}}>
                <AnimalsTableMini />
            </div>
            
          </main>
        </div>
      </div>
    </div>
  );
};

export default MountainGoat;