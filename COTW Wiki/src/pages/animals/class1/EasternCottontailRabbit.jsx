import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import class1Icon from '../../../assets/Class1Icon.webp';
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import EasternCottontailRabbitMain from '../../../assets/EasternCottontailRabbit.webp';

// Fur Variant Images
// Assuming naming convention based on screenshots showing Left/Right sides for some
import EasternCottontailRabbit_AlbinoRight from '../../../assets/EasternCottontailRabbit_AlbinoRightSide.webp';
import EasternCottontailRabbit_BrownRight from '../../../assets/EasternCottontailRabbit_BrownRightSide.webp';
import EasternCottontailRabbit_GreyRight from '../../../assets/EasternCottontailRabbit_GreyRightSide.webp';
import EasternCottontailRabbit_LightBrownRight from '../../../assets/EasternCottontailRabbit_LightBrownRightSide.webp';
import EasternCottontailRabbit_LightGreyRight from '../../../assets/EasternCottontailRabbit_LightGreyRightSide.webp';
import EasternCottontailRabbit_Leucistic1Right from '../../../assets/EasternCottontailRabbit_LeucisticVariation1RightSide.webp';
import EasternCottontailRabbit_Leucistic1Left from '../../../assets/EasternCottontailRabbit_LeucisticVariation1LeftSide.webp';
import EasternCottontailRabbit_Leucistic2Right from '../../../assets/EasternCottontailRabbit_LeucisticVariation2RightSide.webp';
import EasternCottontailRabbit_Leucistic2Left from '../../../assets/EasternCottontailRabbit_LeucisticVariation2LeftSide.webp';
import EasternCottontailRabbit_MelanisticRight from '../../../assets/EasternCottontailRabbit_MelanisticRightSide.webp';


const EasternCottontailRabbit = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  // Source: Екранна снимка 2026-01-16 153426.png
  const needZonesData = [
    {
      name: "Mississippi Acres & New England", // Inferred from Locations list
      schedule: [
        { time: "00:00 - 04:30", type: "Resting", icon: RestingZoneIcon },
        { time: "04:00 - 07:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "07:00 - 10:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "10:00 - 13:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "13:00 - 17:30", type: "Resting", icon: RestingZoneIcon },
        { time: "17:00 - 21:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "21:00 - 00:30", type: "Resting", icon: RestingZoneIcon },
      ]
    }
  ];

  // Features Table
  // Source: Екранна снимка 2026-01-16 153417.jpg
  const features = [
    { label: "Behavior", value: "Always on the lookout for danger" },
    { label: "Habitat", value: "Meadows, farmlands and forest clearings" },
    { label: "Senses", value: "Very good movement vision and hearing, exceptional sense of smell" },
    { label: "Social", value: "Solitary and very territorial" },
    { label: "Active", value: "Crepuscular, active at dawn and dusk" },
    { label: "Recommended Equipment", value: "Class 1 ammo" },
    { label: "Species", value: "Sylvilagus floridanus", italic: true, isLink: true },
    { label: "Difficulty", value: "Easy" },
  ];

  // Fur Gallery Data
  // Source: Екранна снимка 2026-01-16 153450.jpg, 153457.png
  const furGallery = [
    { name: "Albino - Right Side", src: EasternCottontailRabbit_AlbinoRight },
    { name: "Brown - Right Side", src: EasternCottontailRabbit_BrownRight },
    { name: "Grey - Right Side", src: EasternCottontailRabbit_GreyRight },
    { name: "Light Brown - Right Side", src: EasternCottontailRabbit_LightBrownRight },
    { name: "Light Grey - Right Side", src: EasternCottontailRabbit_LightGreyRight },
    { name: "Leucistic Variation 1 - Right Side", src: EasternCottontailRabbit_Leucistic1Right },
    { name: "Leucistic Variation 1 - Left Side", src: EasternCottontailRabbit_Leucistic1Left },
    { name: "Leucistic Variation 2 - Right Side", src: EasternCottontailRabbit_Leucistic2Right },
    { name: "Leucistic Variation 2 - Left Side", src: EasternCottontailRabbit_Leucistic2Left },
    { name: "Melanistic - Right Side", src: EasternCottontailRabbit_MelanisticRight },
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

  // Smooth-scroll helper for TOC links
  const scrollToId = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (window && history && history.replaceState) history.replaceState(null, '', `#${id}`);
  };

  return (
    <div style={styles.container}>
      <div style={styles.innerWrapper}>
        
        {/* PAGE HEADER */}
        <div style={styles.mainHeader}>
          <span>Eastern Cottontail Rabbit</span>
          <div style={styles.editActions}>
          </div>
        </div>

        <div style={styles.layout}>
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside style={styles.sidebarColumn}>
            <div style={styles.sidebarHeader}>Eastern Cottontail Rabbit</div>
            <div style={styles.sidebarImage}>
              <img src={EasternCottontailRabbitMain} alt="Eastern Cottontail Rabbit" style={{width:'268px', height: '134px', objectFit: 'cover'}} />
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
                  <span>1.05</span>
                </div>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.gold}}>☗ Gold</span>
                  <span>1.58</span>
                </div>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.diamond}}>☗ Diamond</span>
                  <span>1.97</span>
                </div>
              </div>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Weight</span>
              800g — 2.1kg<br/>
              1.8lbs — 5lbs
            </div>

            <div style={styles.sidebarSection}>
               <span style={styles.sidebarLabel}>Fur</span>
               <span style={{fontSize:'0.85rem'}}>
                  Albino, Brown, Grey, Leucistic, Light Grey, Melanistic
               </span>
            </div>

            <div style={styles.sidebarHeader}>Locations</div>
            <div style={styles.sidebarSection}>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Mississippi Acres Preserve</span></div>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>New England Mountains</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main style={styles.mainColumn}>

            {/* Quote Block */}
            <div style={styles.quoteBox}>
              "Eastern cottontail rabbits are birthing machines and the most widespread rabbit in the United States. Males may be sexually mature at only one month of age and females within their first year. Prey for just about anything. They're lucky if they live for two or three years, even though their lifespan is eight to 10 years. Named for its white, cottony-looking tail, the Eastern Cottontail is 15-19 inches long (38-48 cm) and weighs 2-4 pounds (0.8-1.8 kg). Cottontails are built for speed, jumping, and agility. They have powerful legs and large back feet, which enables them to run at up to 18 miles per hour (29 kmh) for up to half a mile (0.8 km)."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p style={{marginBottom:'20px'}}>
              The <strong>Eastern Cottontail Rabbit</strong> is a member of the lagomorpha family, it can be found on <span style={styles.link}>Mississippi Acres Preserve</span> and <span style={styles.link}>New England Mountains</span>. It is the sixth species of lagomorph introduced to the game after the <span style={styles.link}>Antelope Jackrabbit</span>.
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
                <li><a href="#fur-variants" onClick={scrollToId('fur-variants')} style={styles.link}>Fur Variants</a></li>
                <li><a href="#fur-variant-rarity" onClick={scrollToId('fur-variant-rarity')} style={styles.link}>Fur Variant Rarity</a></li>
                <li><a href="#trivia" onClick={scrollToId('trivia')} style={styles.link}>Trivia</a></li>
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
                        <tr><th colSpan="2" style={{...styles.th, textAlign: 'center'}}>Mississippi Acres & New England</th></tr>
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
                            Grey (37.35%)<br/>
                            Brown (37.35%)<br/>
                            Light Grey (12.50%)<br/>
                            Light Brown (12.50%)
                        </td>
                        <td style={styles.td}>X</td>
                        <td style={styles.td}>
                            Leucistic Variation 1 (0.10%)<br/>
                            Leucistic Variation 2 (0.10%)
                        </td>
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
              <li style={{marginBottom:'8px'}}>The Eastern Cottontail Rabbit is one of 7 lagomorph (hares and rabbits) in the game. The others are the <span style={styles.link}>White-tailed Jackrabbit</span>, the <span style={styles.link}>Scrub Hare</span>, the <span style={styles.link}>European Rabbit</span>, the <span style={styles.link}>European Hare</span>, the <span style={styles.link}>Antelope Jackrabbit</span>, and the <span style={styles.link}>Mountain Hare</span>.</li>
            </ul>

            <AnimalsTableMini />
          </main>
        </div>
      </div>
    </div>
  );
};

export default EasternCottontailRabbit;