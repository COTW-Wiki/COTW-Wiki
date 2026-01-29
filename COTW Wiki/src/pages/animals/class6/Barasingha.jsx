import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import DrinkingZoneIcon from '../../../assets/DrinkingZoneIcon.webp';
import class6Icon from '../../../assets/Class6Icon.webp'; // Class 6 for Barasingha
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import BarasinghaMain from '../../../assets/Barasingha.webp';
import ShotSchemeImg from '../../../assets/Barasingha_shot_scheme.webp';

// Fur Variant Images - Male
import Barasingha_AlbinoMaleRightSide from '../../../assets/Barasingha_AlbinoMaleRightSide.webp';
import Barasingha_BrownMaleRightSide from '../../../assets/Barasingha_BrownMaleRightSide.webp';
import Barasingha_DarkBrownMaleRightSide from '../../../assets/Barasingha_DarkBrownMaleRightSide.webp';
import Barasingha_DarkRedMaleRightSide from '../../../assets/Barasingha_DarkRedMaleRightSide.webp';
import Barasingha_LightBrownMaleRightSide from '../../../assets/Barasingha_LightBrownMaleRightSide.webp';
import Barasingha_LeucisticMaleRightSide from '../../../assets/Barasingha_LeucisticMaleRightSide.webp';
import Barasingha_MelanisticMaleRightSide from '../../../assets/Barasingha_MelanisticMaleRightSide.webp';
import Barasingha_PiebaldMaleRightSide from '../../../assets/Barasingha_PiebaldMaleRightSide.webp';
import Barasingha_PiebaldMaleLeftSide from '../../../assets/Barasingha_PiebaldMaleLeftSide.webp';
import Barasingha_RedMaleRightSide from '../../../assets/Barasingha_RedMaleRightSide.webp';

// Fur Variant Images - Female
import Barasingha_AlbinoFemaleRightSide from '../../../assets/Barasingha_AlbinoFemaleRightSide.webp';
import Barasingha_BrownFemaleRightSide from '../../../assets/Barasingha_BrownFemaleRightSide.webp';
import Barasingha_DarkBrownFemaleRightSide from '../../../assets/Barasingha_DarkBrownFemaleRightSide.webp';
import Barasingha_DarkRedFemaleRightSide from '../../../assets/Barasingha_DarkRedFemaleRightSide.webp';
import Barasingha_LightBrownFemaleRightSide from '../../../assets/Barasingha_LightBrownFemaleRightSide.webp';
import Barasingha_LeucisticFemaleRightSide from '../../../assets/Barasingha_LeucisticFemaleRightSide.webp';
import Barasingha_MelanisticFemaleRightSide from '../../../assets/Barasingha_MelanisticFemaleRightSide.webp';
import Barasingha_PiebaldFemaleRightSide from '../../../assets/Barasingha_PiebaldFemaleRightSide.webp';
import Barasingha_PiebaldFemaleLeftSide from '../../../assets/Barasingha_PiebaldFemaleLeftSide.webp';
import Barasingha_RedFemaleRightSide from '../../../assets/Barasingha_RedFemaleRightSide.webp';


const Barasingha = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  const needZonesData = [
    {
      name: "Sundarpatan",
      schedule: [
        { time: "00:00 - 03:00", type: "Resting", icon: RestingZoneIcon },
        { time: "03:00 - 06:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "06:00 - 09:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "09:00 - 12:00", type: "Resting", icon: RestingZoneIcon },
        { time: "12:00 - 15:00", type: "Drinking", icon: DrinkingZoneIcon },
        { time: "15:00 - 18:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "18:00 - 21:00", type: "Resting", icon: RestingZoneIcon },
        { time: "21:00 - 00:00", type: "Resting", icon: RestingZoneIcon },
      ]
    }
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Social, relaxed, water-loving grazers" },
    { label: "Habitat", value: "Wetland & tall-grassed areas close to rivers in the Terai lowlands" },
    { label: "Senses", value: "Acute sense of smell, decent hearing and sight" },
    { label: "Social", value: "Forms herds of similar age and gender. Mixed herds can also occur, usually led by a female. Males are likely to roam between herds" },
    { label: "Active", value: "Daytime" },
    { label: "Recommended Equipment", value: "Class 6 Ammo, Antler Rattler" },
    { label: "Species", value: "Rucervus duvaucelii duvaucelii", italic: true, isLink: true },
    { label: "Difficulty", value: "Average" },
  ];

  // Fur Gallery Data - Male
  const maleFurGallery = [
    { name: "Albino", src: Barasingha_AlbinoMaleRightSide },
    { name: "Brown", src: Barasingha_BrownMaleRightSide },
    { name: "Dark Brown", src: Barasingha_DarkBrownMaleRightSide },
    { name: "Dark Red", src: Barasingha_DarkRedMaleRightSide },
    { name: "Light Brown", src: Barasingha_LightBrownMaleRightSide },
    { name: "Leucistic", src: Barasingha_LeucisticMaleRightSide },
    { name: "Melanistic", src: Barasingha_MelanisticMaleRightSide },
    { name: "Piebald (Right)", src: Barasingha_PiebaldMaleRightSide },
    { name: "Piebald (Left)", src: Barasingha_PiebaldMaleLeftSide },
    { name: "Red", src: Barasingha_RedMaleRightSide },
  ];

  // Fur Gallery Data - Female
  const femaleFurGallery = [
    { name: "Albino", src: Barasingha_AlbinoFemaleRightSide },
    { name: "Brown", src: Barasingha_BrownFemaleRightSide },
    { name: "Dark Brown", src: Barasingha_DarkBrownFemaleRightSide },
    { name: "Dark Red", src: Barasingha_DarkRedFemaleRightSide },
    { name: "Leucistic", src: Barasingha_LeucisticFemaleRightSide },
    { name: "Light Brown", src: Barasingha_LightBrownFemaleRightSide },
    { name: "Melanistic", src: Barasingha_MelanisticFemaleRightSide },
    { name: "Piebald (Right)", src: Barasingha_PiebaldFemaleRightSide },
    { name: "Piebald (Left)", src: Barasingha_PiebaldFemaleLeftSide },
    { name: "Red", src: Barasingha_RedFemaleRightSide },
  ];

  // Trivia Data
  const triviaData = [
    "The Barasingha, also called Swamp Deer, is most commonly found around wetlands and rivers, eating one of its main food sources, wetland plants.",
    "At one point, the Barasingha was considered Critically Endangered. And while decades of conservation efforts have stabilized the population, the IUCN (International Union for Conservation of Nature) still lists this species as vulnerable. It's once wide spread population is now only represented by a few isolated populations, and certain populations in places like Pakistan and Bangladesh have gone extinct."
  ];

  // References Data
  const referencesData = [
    "Barasingha Need Zones, Sundarpatan",
    "worlddeer.org",
    "mixlab.com",
    "earthsendangered.com",
    "iucnredlist.org"
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
    h3: {
        color: '#dbe4eb',
        fontSize: '1.2rem',
        marginTop: '25px',
        marginBottom: '10px',
        fontWeight: 'bold'
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
          <span>Barasingha</span>
        </div>

        <div style={styles.layout}>
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside style={styles.sidebarColumn}>
            <div style={styles.sidebarHeader}>Barasingha</div>
            <div style={styles.sidebarImage}>
              <img src={BarasinghaMain} alt="Barasingha" style={{width:'100%', height: '100%', objectFit: 'cover'}} />
            </div>
            
            <div style={styles.sidebarHeader}>General Information</div>
            
            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Class</span>
              <span><img src={class6Icon} alt="Class 6" style={{width:'24px', height:'24px', verticalAlign: 'middle', marginRight: '6px'}}/>6</span>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Difficulty</span>
              <span>1: Trivial — 5: Medium</span>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Trophy Type</span>
              <span>Antlers</span>
              <div style={styles.trophyGrid}>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.silver}}>◆ Silver</span>
                  <span>95.88</span>
                </div>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.gold}}>☗ Gold</span>
                  <span>170.26</span>
                </div>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.diamond}}>☗ Diamond</span>
                  <span>226.05</span>
                </div>
              </div>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Weight</span>
              0kg — 280kg<br/>
              <span style={{color: '#88a0b8', fontSize: '0.85rem'}}>0lbs — 617lbs</span>
            </div>

            <div style={styles.sidebarSection}>
               <span style={styles.sidebarLabel}>Fur</span>
               <span style={{fontSize:'0.85rem'}}>
                 Albino, Brown, Dark Brown, Dark Red, Leucistic, Light Brown, Melanistic, Piebald, Red
               </span>
            </div>

            <div style={styles.sidebarHeader}>Locations</div>
            <div style={styles.sidebarSection}>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Sundarpatan</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main style={styles.mainColumn}>

            {/* Quote Block */}
            <div style={styles.quoteBox}>
              "The Barasingha, also known as the Swamp Deer, is a deer native to the Indian subcontinent. It gets its name from its impressive antlers. Bārah-singgā means 'twelve-horned' in Hindi. Mature males normally have around 10 - 14 tines, with reports of up to 20. Apart from their antlers, the Barasingha is one of the largest deer species in the region, with a shoulder height of about 110 cm and stags weighing in at 200 - 280 kg. While they can be found in wooded or drier areas, feeding on various types of grasses, their main habitat, as their western name suggests, is damp and marshy wetlands, where they feed on aquatic plants in the water."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p style={{marginBottom:'20px'}}>
              The <strong>Barasingha</strong> is a <span style={styles.link}>class 6</span> deer species that can be hunted on <span style={styles.link}>Sundarpatan</span>.
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
                <ol style={{listStyleType: 'none', marginLeft: '-20px'}}>
                     <li><a href="#fur-male" onClick={(e)=>scrollToId(e,'fur-male')} style={{...styles.link, marginLeft:'20px'}}>4.1. Male</a></li>
                     <li><a href="#fur-female" onClick={(e)=>scrollToId(e,'fur-female')} style={{...styles.link, marginLeft:'20px'}}>4.2. Female</a></li>
                </ol>
                <li><a href="#variant-rarity" onClick={(e)=>scrollToId(e,'variant-rarity')} style={styles.link}>Fur Variant Rarity</a></li>
                <li><a href="#trivia" onClick={(e)=>scrollToId(e,'trivia')} style={styles.link}>Trivia</a></li>
                <li><a href="#references" onClick={(e)=>scrollToId(e,'references')} style={styles.link}>References</a></li>
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
                <table style={{...styles.table, width: '300px'}}>
                    <thead>
                        <tr><th colSpan="2" style={{...styles.th, textAlign: 'center'}}>Sundarpatan</th></tr>
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
            <h2 style={styles.h2} id="shot-scheme">Shot scheme</h2>
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

            <h3 id="fur-male" style={{marginTop:'10px', marginBottom:'8px', color: '#6fb2e6'}}>Male</h3>
            <div style={styles.galleryGrid}>
              {maleFurGallery.map((item, i) => (
                <div key={i} style={styles.galleryItem}>
                  <div style={styles.galleryImgPlaceholder}>
                    <img src={item.src} alt={item.name} style={{width:'100%', height: '100%', objectFit: 'contain'}} />
                  </div>
                  <span style={styles.galleryLabel}>{item.name}</span>
                </div>
              ))}
            </div>

            <h3 id="fur-female" style={{marginTop:'10px', marginBottom:'8px', color: '#6fb2e6'}}>Female</h3>
            <div style={styles.galleryGrid}>
              {femaleFurGallery.map((item, i) => (
                <div key={i} style={styles.galleryItem}>
                  <div style={styles.galleryImgPlaceholder}>
                    <img src={item.src} alt={item.name} style={{width:'100%', height: '100%', objectFit: 'contain', }} />
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
                                Brown (24.90%)<br/>
                                Light Brown (24.90%)<br/>
                                Red (24.90%)<br/>
                                Dark Brown (12.50%)<br/>
                                Dark Red (12.50%)
                            </td>
                            <td style={styles.td}>
                                X
                            </td>
                            <td style={styles.td}>
                                Leucistic (0.10%)<br/>
                                Piebald (0.10%)
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

export default Barasingha;