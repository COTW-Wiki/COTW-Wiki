import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import class1Icon from '../../../assets/Class1Icon.webp';
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import EurasianPineMartenMain from '../../../assets/EurasianPineMarten.webp';

// Fur Variant Images (Placeholders based on Wiki data)
import EurasianPineMarten_AlbinoLeft from '../../../assets/EurasianPineMarten_AlbinoLeftSide.webp';
import EurasianPineMarten_BlackLeft from '../../../assets/EurasianPineMarten_BlackLeftSide.webp';
import EurasianPineMarten_BrownLeft from '../../../assets/EurasianPineMarten_BrownLeftSide.webp';
import EurasianPineMarten_LightBrownLeft from '../../../assets/EurasianPineMarten_LightBrownLeftSide.webp';
import EurasianPineMarten_LeucisticLeft from '../../../assets/EurasianPineMarten_LeucisticLeftSide.webp';
import EurasianPineMarten_MelanisticLeft from '../../../assets/EurasianPineMarten_MelanisticLeftSide.webp';
import EurasianPineMarten_Piebald1Left from '../../../assets/EurasianPineMarten_PiebaldVariation1LeftSide.webp';
import EurasianPineMarten_Piebald2Left from '../../../assets/EurasianPineMarten_PiebaldVariation2LeftSide.webp';
import EurasianPineMarten_Piebald1Right from '../../../assets/EurasianPineMarten_PiebaldVariation1RightSide.webp';
import EurasianPineMarten_Piebald2Right from '../../../assets/EurasianPineMarten_PiebaldVariation2RightSide.webp';
import EurasianPineMarten_TawnyLeft from '../../../assets/EurasianPineMarten_TawnyLeftSide.webp';


const EurasianPineMarten = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  // UPDATED: Matches Screenshot 3 "Need Zone Times"
  const needZonesData = [
    {
      name: "Tòrr nan Sithean",
      schedule: [
        { time: "03:00 - 06:00", type: "Resting", icon: RestingZoneIcon },
        { time: "06:00 - 10:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "14:00 - 18:00", type: "Resting", icon: RestingZoneIcon },
      ]
    }
  ];

  // Features Table
  // UPDATED: Matches Screenshot 2 "Features"
  const features = [
    { label: "Behavior", value: "Curious, agile, elusive" },
    { label: "Habitat", value: "Dense, mature woodlands with plenty of cover" },
    { label: "Senses", value: "Poor eyesight, acute sense of hearing and exceptional sense of smell" },
    { label: "Social", value: "Territorial, solitary" },
    { label: "Active", value: "Primarily nocturnal and crepuscular" },
    { label: "Recommended Equipment", value: "Class 1 Ammo" },
    { label: "Species", value: "Martes martes", italic: true, isLink: true },
    { label: "Difficulty", value: "Easy" },
  ];

  // Fur Gallery Data
  // Matches Screenshot 1 "Fur variants"
  const furGallery = [
    { name: "Albino - Left Side", src: EurasianPineMarten_AlbinoLeft },
    { name: "Black - Left Side", src: EurasianPineMarten_BlackLeft },
    { name: "Brown - Left Side", src: EurasianPineMarten_BrownLeft },
    { name: "Leucistic - Left Side", src: EurasianPineMarten_LeucisticLeft },
    { name: "Light Brown - Left Side", src: EurasianPineMarten_LightBrownLeft },
    { name: "Melanistic - Left Side", src: EurasianPineMarten_MelanisticLeft },
    // Note: Reusing Left image for Right side placeholders as per available imports
    { name: "Piebald Variation 1 - Right Side", src: EurasianPineMarten_Piebald1Right }, 
    { name: "Piebald Variation 1 - Left Side", src: EurasianPineMarten_Piebald1Left },
    { name: "Piebald Variation 2 - Right Side", src: EurasianPineMarten_Piebald2Right },
    { name: "Piebald Variation 2 - Left Side", src: EurasianPineMarten_Piebald2Left },
    { name: "Tawny - Left Side", src: EurasianPineMarten_TawnyLeft },
  ];

  // Smooth scroll helper for in-page TOC links
  const scrollToId = (id) => (e) => {
    if (e && e.preventDefault) e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (typeof window !== 'undefined' && window.history && window.history.replaceState) {
      window.history.replaceState(null, '', `#${id}`);
    }
  };

  // References List
  const references = [
    "https://animaldiversity.org/accounts/Martes_martes/",
    "https://www.nature.scot/plants-animals-and-fungi/mammals/land-mammals/pine-marten"
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
      textAlign: 'center'
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
          <span>Eurasian Pine Marten</span>
          <div style={styles.editActions}>
          </div>
        </div>

        <div style={styles.layout}>
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside style={styles.sidebarColumn}>
            <div style={styles.sidebarHeader}>Eurasian Pine Marten</div>
            <div style={styles.sidebarImage}>
              <img src={EurasianPineMartenMain} alt="Eurasian Pine Marten" style={{width:'268px', height: '134px', objectFit: 'cover'}} />
            </div>
            
            <div style={styles.sidebarHeader}>General Information</div>
            
            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Class</span>
              <span><img src={class1Icon} alt="Class 1" style={{width:'20px', height:'20px', verticalAlign: 'middle', marginRight: '6px'}}/>1</span>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Difficulty</span>
              <span>1: Trivial — 5: Medium</span>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Trophy Type</span>
              <span>Weight</span>
              <div style={styles.trophyGrid}>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.silver}}>◆ Silver</span>
                  <span>124</span>
                </div>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.gold}}>☗ Gold</span>
                  <span>172</span>
                </div>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.diamond}}>☗ Diamond</span>
                  <span>208</span>
                </div>
              </div>
            </div>

            <div style={styles.sidebarSection}>
              {/* UPDATED: Matches Screenshot 4 "Weight" */}
              <span style={styles.sidebarLabel}>Weight</span>
              1 — 2.20kg<br/>
              0lbs — 5lbs
            </div>

            <div style={styles.sidebarSection}>
               <span style={styles.sidebarLabel}>Fur</span>
               <span style={{fontSize:'0.85rem'}}>
                  Albino, Black, Brown, Leucistic, Light Brown, Melanistic, Piebald, Tawny
               </span>
            </div>

            <div style={styles.sidebarHeader}>Locations</div>
            <div style={styles.sidebarSection}>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Tòrr nan Sithean</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main style={styles.mainColumn}>

            {/* Quote Block */}
            {/* UPDATED: Matches Screenshot 4 Intro Text */}
            <div style={styles.quoteBox}>
              "The Eurasian Pine Marten (Martes martes) is a medium-sized omnivore from the Mustelidae family, known for its sleek, rich brown fur and distinctive yellowish throat patch. Weighing between 1 and 2.2kg, these agile animals are skilled climbers, spending much of their time in trees. Native to the forests of northern and central Europe, they thrive in old-growth woodlands and at higher altitudes, where they find ample cover and prey. Pine martens hunt small mammals, birds, and insects, while also foraging for fruits and berries. Primarily nocturnal and solitary, they are territorial and use scent marking to establish their range, demonstrating remarkable adaptibility to both the forest floor and the tree canopy."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p style={{marginBottom:'20px'}}>
              The <strong>Eurasian Pine Marten</strong> is a species introduced in the <span style={styles.link}>Tòrr nan Sithean</span> reserve located in Scotland.
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
                <li><a href="#features" style={styles.link} onClick={scrollToId('features')}>Features</a></li>
                <li><a href="#need-zones" style={styles.link} onClick={scrollToId('need-zones')}>Need Zone Times</a></li>
                <li><a href="#fur-variants" style={styles.link} onClick={scrollToId('fur-variants')}>Fur variants</a></li>
                <li><a href="#variant-rarity" style={styles.link} onClick={scrollToId('variant-rarity')}>Fur Variant Rarity</a></li>
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
                        <tr><th colSpan="2" style={{...styles.th, textAlign: 'center'}}>Tòrr nan Sithean</th></tr>
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
            <h2 id="fur-variants" style={styles.h2}>Fur variants</h2>
            <div style={styles.galleryGrid}>
              {furGallery.map((item, i) => (
                <div key={i} style={styles.galleryItem}>
                  <div style={styles.galleryImgPlaceholder}>
                    <img src={item.src} alt={item.name} style={{maxWidth: '100%', maxHeight: '100%', objectFit: 'contain'}} />
                  </div>
                  <span style={styles.galleryLabel}>{item.name}</span>
                </div>
              ))}
            </div>

            {/* FUR VARIANT RARITY TABLE */}
            {/* UPDATED: Matches Screenshot 5 "Fur Variant Rarity" */}
            <h2 id="variant-rarity" style={styles.h2}>Fur Variant Rarity</h2>
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
                            Brown (74.70%)<br/>
                            Black (12.50%)<br/>
                            Light Brown (12.50%)
                        </td>
                        <td style={styles.td}>X</td>
                        <td style={styles.td}>
                            Melanistic (0.10%)<br/>
                            Tawny (0.10%)
                        </td>
                        <td style={styles.td}>
                            Albino (0.03%)<br/>
                            Leucistic (0.03%)<br/>
                            Piebald Variation 1 (0.03%)<br/>
                            Piebald Variation 2 (0.03%)
                        </td>
                    </tr>
                </tbody>
            </table>

            {/* References removed per request */}

            <AnimalsTableMini />
          </main>
        </div>
      </div>
    </div>
  );
};

export default EurasianPineMarten;