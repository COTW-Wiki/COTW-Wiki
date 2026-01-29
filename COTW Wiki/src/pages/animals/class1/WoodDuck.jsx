import React from 'react';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import class1Icon from '../../../assets/Class1Icon.webp';
import WoodDuckImg from '../../../assets/WoodDuck.webp';
import WoodDuckAlbinoFemaleBack from '../../../assets/WoodDuck_AlbinoFemaleBack.webp';
import WoodDuckAlbinoFemaleFront from '../../../assets/WoodDuck_AlbinoFemaleFront.webp';
import WoodDuckAlbinoMaleBack from '../../../assets/WoodDuck_AlbinoMaleBack.webp';
import WoodDuckAlbinoMaleFront from '../../../assets/WoodDuck_AlbinoMaleFront.webp';
import WoodDuckDarkFemaleBack from '../../../assets/WoodDuck_DarkFemaleBack.webp';
import WoodDuckDarkFemaleFront from '../../../assets/WoodDuck_DarkFemaleFront.webp';
import WoodDuckDarkMaleBack from '../../../assets/WoodDuck_DarkMaleBack.webp';
import WoodDuckDarkMaleFront from '../../../assets/WoodDuck_DarkMaleFront.webp';
import WoodDuckDiluteSilverFemaleBack from '../../../assets/WoodDuck_DiluteSilverFemaleBack.webp';
import WoodDuckDiluteSilverFemaleFront from '../../../assets/WoodDuck_DiluteSilverFemaleFront.webp';
import WoodDuckDiluteSilverMaleBack from '../../../assets/WoodDuck_DiluteSilverMaleBack.webp';
import WoodDuckDiluteSilverMaleFront from '../../../assets/WoodDuck_DiluteSilverMaleFront.webp';
import WoodDuckErythristicGoldenFemaleBack from '../../../assets/WoodDuck_ErythristicGoldenFemaleBack.webp';
import WoodDuckErythristicGoldenFemaleFront from '../../../assets/WoodDuck_ErythristicGoldenFemaleFront.webp';
import WoodDuckErythristicGoldenMaleBack from '../../../assets/WoodDuck_ErythristicGoldenMaleBack.webp';
import WoodDuckErythristicGoldenMaleFront from '../../../assets/WoodDuck_ErythristicGoldenMaleFront.webp';
import WoodDuckLeucisticFemaleBack from '../../../assets/WoodDuck_LeucisticFemaleBack.webp';
import WoodDuckLeucisticFemaleFront from '../../../assets/WoodDuck_LeucisticFemaleFront.webp';
import WoodDuckLeucisticMaleBack from '../../../assets/WoodDuck_LeucisticMaleBack.webp';
import WoodDuckLeucisticMaleFront from '../../../assets/WoodDuck_LeucisticMaleFront.webp';
import WoodDuckMelanisticFemaleBack from '../../../assets/WoodDuck_MelanisticFemaleBack.webp';
import WoodDuckMelanisticFemaleFront from '../../../assets/WoodDuck_MelanisticFemaleFront.webp';
import WoodDuckMelanisticMaleBack from '../../../assets/WoodDuck_MelanisticMaleBack.webp';
import WoodDuckMelanisticMaleFront from '../../../assets/WoodDuck_MelanisticMaleFront.webp';
import WoodDuckPiebaldFemaleBack from '../../../assets/WoodDuck_PiebaldFemaleBack.webp';
import WoodDuckPiebaldFemaleFront from '../../../assets/WoodDuck_PiebaldFemaleFront.webp';
import WoodDuckPiebaldMaleBack from '../../../assets/WoodDuck_PiebaldMaleBack.webp';
import WoodDuckPiebaldMaleFront from '../../../assets/WoodDuck_PiebaldMaleFront.webp';
import WoodDuckStandardFemaleBack from '../../../assets/WoodDuck_StandardFemaleBack.webp';
import WoodDuckStandardFemaleFront from '../../../assets/WoodDuck_StandardFemaleFront.webp';
import WoodDuckStandardMaleBack from '../../../assets/WoodDuck_StandardMaleBack.webp';
import WoodDuckStandardMaleFront from '../../../assets/WoodDuck_StandardMaleFront.webp';
import WoodDuckShotScheme from '../../../assets/Wood_Duck_shot_scheme.webp';
// page-local TOC will be rendered below
import AnimalsTableMini from '../../../components/AnimalsTableMini';

const WoodDuck = () => {
  // --- DATA SOURCES ---

  // Need Zone Times
  const needZones = [
    { time: "00:00 - 05:00", type: "Resting", icon: RestingZoneIcon },
    { time: "05:00 - 07:00", type: "Feeding", icon: FeedingZoneIcon },
    { time: "07:00 - 09:00", type: "Resting", icon: RestingZoneIcon },
    { time: "09:00 - 11:00", type: "Feeding", icon: FeedingZoneIcon },
    { time: "11:00 - 13:00", type: "Resting", icon: RestingZoneIcon },
    { time: "13:00 - 15:00", type: "Feeding", icon: FeedingZoneIcon },
    { time: "15:00 - 17:00", type: "Resting", icon: RestingZoneIcon },
    { time: "17:00 - 19:00", type: "Feeding", icon: FeedingZoneIcon },
    { time: "19:00 - 00:00", type: "Resting", icon: RestingZoneIcon },
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Curious, agile, elusive" },
    { label: "Habitat", value: "Wooded wetlands, riverbanks, lakes, and marshes" },
    { label: "Senses", value: "Sharp eyesight, strong sense of hearing, and good sense of smell" },
    { label: "Social", value: "Social outside of breeding season, typically seen in small groups near water" },
    { label: "Active", value: "Daytime" },
    { label: "Recommended Equipment", value: "Class 1 Ammo, Wood Duck caller & decoys" },
    { label: "Species", value: "Aix sponsa", italic: true },
    { label: "Difficulty", value: "Easy" },
  ];

  // Plumage Variants (Male)
  const plumageMale = [
    { name: "Albino - Front", color: "#f5f5f5" },
    { name: "Albino - Back", color: "#e0e0e0" },
    { name: "Dark - Front", color: "#4e342e" },
    { name: "Dark - Back", color: "#3e2723" },
    { name: "Dilute Silver - Front", color: "#cfd8dc" },
    { name: "Dilute Silver - Back", color: "#b0bec5" },
    { name: "Erythristic Golden - Front", color: "#ffcc80" },
    { name: "Erythristic Golden - Back", color: "#ffb74d" },
    { name: "Leucistic - Front", color: "#eeeeee" },
    { name: "Leucistic - Back", color: "#bdbdbd" },
    { name: "Melanistic - Front", color: "#212121" },
    { name: "Melanistic - Back", color: "#000000" },
    { name: "Piebald - Front", color: "#90a4ae" },
    { name: "Piebald - Back", color: "#78909c" },
    { name: "Standard - Front", color: "#795548" },
    { name: "Standard - Back", color: "#5d4037" },
  ];

  // Plumage Variants (Female)
  const plumageFemale = [
    { name: "Albino - Front", color: "#f5f5f5" },
    { name: "Albino - Back", color: "#e0e0e0" },
    { name: "Dark - Front", color: "#5d4037" },
    { name: "Dark - Back", color: "#3e2723" },
    { name: "Dilute Silver - Front", color: "#b0bec5" },
    { name: "Dilute Silver - Back", color: "#90a4ae" },
    { name: "Erythristic Golden - Front", color: "#ffe0b2" },
    { name: "Erythristic Golden - Back", color: "#ffcc80" },
    { name: "Leucistic - Front", color: "#eeeeee" },
    { name: "Leucistic - Back", color: "#bdbdbd" },
    { name: "Melanistic - Front", color: "#212121" },
    { name: "Melanistic - Back", color: "#000000" },
    { name: "Piebald - Front", color: "#cfd8dc" },
    { name: "Piebald - Back", color: "#b0bec5" },
    { name: "Standard - Front", color: "#8d6e63" },
    { name: "Standard - Back", color: "#6d4c41" },
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
    // Main Header
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
    // Layout Columns
    layout: {
      display: 'flex',
      gap: '30px',
      alignItems: 'flex-start',
      flexDirection: 'row-reverse', // Sidebar on the right
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
    // Sidebar Specifics
    sidebarHeader: {
      backgroundColor: '#05121c',
      padding: '12px',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: '1.1rem',
      borderBottom: '2px solid #cfaa3e', // Gold accent
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
    
    // Content Components
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
      marginTop: '20px',
      marginBottom: '10px',
      fontWeight: 'bold'
    },
    h2Icon: {
      fontSize: '0.8rem',
      marginLeft: '10px',
      opacity: 0.7,
      cursor: 'pointer',
    },
    
    // Tables
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
    
    // Shot Scheme
    shotContainer: {
      display: 'flex',
      backgroundColor: '#112233',
      marginTop: '10px',
      border: '1px solid #1f405a',
    },
    shotImage: {
      width: '500px',
      height: '394px',
      backgroundColor: '#000',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#555',
      flexShrink: 0,
    },
    shotInfo: {
      padding: '20px',
      display: 'flex',
      alignItems: 'center',
      color: '#fff',
    },

    // Gallery
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

    // Rarity Colors
    common: { color: '#2ecc71', fontWeight: 'bold' },
    rare: { color: '#9b59b6', fontWeight: 'bold' },
    veryRare: { color: '#e74c3c', fontWeight: 'bold' },
    uncommon: { color: '#3498db', fontWeight: 'bold' },
  };

  const toc = [
    { id: 'features', label: 'Features' },
    { id: 'need-zone-times', label: 'Need Zone Times' },
    { id: 'shot-scheme', label: 'Shot scheme' },
    { id: 'plumage-variants', label: 'Plumage Variants', children: [
      { id: 'plumage-male', label: 'Male' },
      { id: 'plumage-female', label: 'Female' },
    ] },
    { id: 'plumage-variant-rarity', label: 'Plumage Variant Rarity' },
  ];

  function handleTocClick(targetId) {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      try { history.replaceState(null, '', `#${targetId}`); } catch (e) {}
    }
  }

  return (
    <div style={styles.container}>
      <div style={styles.innerWrapper}>
        
        {/* PAGE HEADER */}
        <div style={styles.mainHeader}>
          <span>Wood Duck</span>
          <div style={styles.editActions}>
          </div>
        </div>

        <div style={styles.layout}>
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside style={styles.sidebarColumn}>
            <div style={styles.sidebarHeader}>Wood Duck</div>
            <div style={{...styles.sidebarImage, padding:'10px'}}>
              <img src={WoodDuckImg} alt="Wood Duck" style={{width: '268.4px', height: '134.2px', objectFit: 'cover', borderRadius: '2px'}} />
            </div>
            
            <div style={styles.sidebarHeader}>General Information</div>
            
            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Class</span>
              <span><img src={class1Icon} alt="Class 1" style={{width: '18px', height: '18px', verticalAlign: 'middle', marginRight: '6px'}}/>1</span>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Difficulty</span>
              <span>1: Trivial — 3: Very Easy</span>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Trophy Type</span>
              <span>Weight</span>
              <div style={styles.trophyGrid}>
                <div style={styles.trophyItem}>
                   <span style={{...styles.trophyLabel, ...styles.silver}}>◆ Silver</span>
                   <span>460</span>
                </div>
                <div style={styles.trophyItem}>
                   <span style={{...styles.trophyLabel, ...styles.gold}}>☗ Gold</span>
                   <span>580</span>
                </div>
                <div style={styles.trophyItem}>
                   <span style={{...styles.trophyLabel, ...styles.diamond}}>☗ Diamond</span>
                   <span>670</span>
                </div>
              </div>
            </div>

            <div style={styles.sidebarSection}>
               <span style={styles.sidebarLabel}>Weight</span>
               ? — ?
            </div>

            <div style={styles.sidebarSection}>
               <span style={styles.sidebarLabel}>Plumage</span>
               <span style={{fontSize: '0.85rem'}}>
                 Albino, Dark, Dilute Silver, Erythristic Golden, Leucistic, Melanistic, Piebald, Standard
               </span>
            </div>

            <div style={styles.sidebarHeader}>Locations</div>
            <div style={styles.sidebarSection}>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Askiy Ridge Hunting Preserve</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main style={styles.mainColumn}>

            {/* Quote Block */}
            <div style={styles.quoteBox}>
              "The wood duck is a colorful waterfowl native to North America, often found in wooded wetlands, rivers, and lakes. These ducks are medium-sized, with males featuring vibrant plumage or iridescent green, purple, and white, while females have more muted brown feathers with a distinctive white eye ring. Wood ducks are excellent fliers and perching birds, often seen resting in tree branches near water. They primarily feed on seeds, acorns, and small invertebrates. Known for their unique nesting habits, they often use tree cavities or man-made nest boxes. Wood ducks are one of the few duck species that can perch on trees."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p style={{marginBottom: '20px'}}>
              The <strong>Wood Duck</strong> is a <span style={styles.link}>class 1</span> duck species that will be introduced with <span style={styles.link}>Askiy Ridge Hunting Preserve</span>.
            </p>

            {/* Table of Contents Placeholder */}
            <div style={{
              border: '1px solid #3a5a75',
              backgroundColor: '#0f2e48',
              display: 'inline-block',
              padding: '10px 20px',
              borderRadius: '4px',
              minWidth: '220px'
            }}>
              <div style={{fontWeight: 'bold', borderBottom: '1px solid #3a5a75', marginBottom: '8px'}}>
                🔢 Contents <span style={{float:'right', color: '#6fb2e6', fontSize:'0.8rem'}}>[hide]</span>
              </div>
              <div style={{paddingTop: '6px', color: '#6fb2e6'}}>
                {toc.map((item, i) => (
                  <div key={item.id} style={{marginBottom: '6px'}}>
                    <a onClick={() => handleTocClick(item.id)} style={styles.link} role="button">
                      <strong style={{marginRight: '8px'}}>{i + 1}.</strong>{item.label}
                    </a>
                    {item.children && (
                      <div style={{paddingLeft: '16px', marginTop: '6px'}}>
                        {item.children.map((c, j) => (
                          <div key={c.id} style={{marginBottom: '4px'}}>
                            <a onClick={() => handleTocClick(c.id)} style={styles.link} role="button">{`${i + 1}.${j + 1} ${c.label}`}</a>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* FEATURES */}
            <h2 id="features" style={styles.h2}>Features</h2>
            <table style={styles.table}>
              <tbody>
                <tr>
                    <th style={{...styles.th, width: '25%'}}></th>
                    <th style={styles.th}>Description</th>
                </tr>
                {features.map((item, index) => (
                  <tr key={index}>
                    <td style={{...styles.td, fontWeight: 'bold'}}>{item.label}</td>
                    <td style={{...styles.td, fontStyle: item.italic ? 'italic' : 'normal'}}>
                        {item.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* NEED ZONE TIMES */}
            <h2 id="need-zone-times" style={styles.h2}>Need Zone Times</h2>
            <div style={{display: 'inline-block'}}>
                <table style={{...styles.table, width: '300px'}}>
                    <thead>
                        <tr><th colSpan="2" style={{...styles.th, textAlign: 'center'}}>Askiy Ridge<sup>[1]</sup></th></tr>
                        <tr>
                            <th style={{...styles.th, backgroundColor: '#0f2e48'}}>Times</th>
                            <th style={{...styles.th, backgroundColor: '#0f2e48'}}>Activity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {needZones.map((zone, i) => (
                        <tr key={i}>
                            <td style={styles.td}>{zone.time}</td>
                    <td style={styles.td}>
                      <img src={zone.icon} alt={zone.type} style={{width: '18px', height: '18px', verticalAlign: 'middle', marginRight: '8px'}} />
                      {zone.type}
                    </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* SHOT SCHEME */}
            <h2 id="shot-scheme" style={styles.h2}>Shot scheme</h2>
            <div style={{backgroundColor: '#0f2e48', padding: '10px'}}>
                <div style={{fontWeight:'bold', color: '#fff', paddingBottom: '5px', borderBottom: '1px solid #3a5a75'}}>Color code</div>
              <div style={styles.shotContainer}>
                <div style={styles.shotImage}>
                  <img src={WoodDuckShotScheme} alt="Wood Duck shot scheme" style={{width: '500px', height: '444px', objectFit: 'contain'}} />
                </div>
                <div style={styles.shotInfo}>
                  No Color - Every hit will kill the animal
                </div>
              </div>
            </div>

            {/* PLUMAGE VARIANTS (Gallery) */}
            <h2 id="plumage-variants" style={styles.h2}>Plumage Variants</h2>
            
            <h3 id="plumage-male" style={styles.h3}>Male</h3>
                <div style={styles.galleryGrid}>
                      {[
                      { src: WoodDuckAlbinoMaleFront, label: 'Albino - Front' },
                      { src: WoodDuckAlbinoMaleBack, label: 'Albino - Back' },
                      { src: WoodDuckDarkMaleFront, label: 'Dark - Front' },
                      { src: WoodDuckDarkMaleBack, label: 'Dark - Back' },
                      { src: WoodDuckDiluteSilverMaleFront, label: 'Dilute Silver - Front' },
                      { src: WoodDuckDiluteSilverMaleBack, label: 'Dilute Silver - Back' },
                      { src: WoodDuckErythristicGoldenMaleFront, label: 'Erythristic Golden - Front' },
                      { src: WoodDuckErythristicGoldenMaleBack, label: 'Erythristic Golden - Back' },
                      { src: WoodDuckLeucisticMaleFront, label: 'Leucistic - Front' },
                      { src: WoodDuckLeucisticMaleBack, label: 'Leucistic - Back' },
                      { src: WoodDuckMelanisticMaleFront, label: 'Melanistic - Front' },
                      { src: WoodDuckMelanisticMaleBack, label: 'Melanistic - Back' },
                      { src: WoodDuckPiebaldMaleFront, label: 'Piebald - Front' },
                      { src: WoodDuckPiebaldMaleBack, label: 'Piebald - Back' },
                      { src: WoodDuckStandardMaleFront, label: 'Standard - Front' },
                      { src: WoodDuckStandardMaleBack, label: 'Standard - Back' },
                      ].map((img, i) => (
                        <div key={i} style={styles.galleryItem}>
                          <div style={styles.galleryImgPlaceholder}>
                            <img src={img.src} alt={img.label} style={{width: '146px', height: '165px', objectFit: 'cover', borderRadius: '2px'}} />
                          </div>
                          <span style={styles.galleryLabel}>{img.label}</span>
                        </div>
                      ))}
                    </div>

            <h3 id="plumage-female" style={styles.h3}>Female</h3>
            <div style={styles.galleryGrid}>
              {[
              { src: WoodDuckAlbinoFemaleFront, label: 'Albino - Front' },
              { src: WoodDuckAlbinoFemaleBack, label: 'Albino - Back' },
              { src: WoodDuckDarkFemaleFront, label: 'Dark - Front' },
              { src: WoodDuckDarkFemaleBack, label: 'Dark - Back' },
              { src: WoodDuckDiluteSilverFemaleFront, label: 'Dilute Silver - Front' },
              { src: WoodDuckDiluteSilverFemaleBack, label: 'Dilute Silver - Back' },
              { src: WoodDuckErythristicGoldenFemaleFront, label: 'Erythristic Golden - Front' },
              { src: WoodDuckErythristicGoldenFemaleBack, label: 'Erythristic Golden - Back' },
              { src: WoodDuckLeucisticFemaleFront, label: 'Leucistic - Front' },
              { src: WoodDuckLeucisticFemaleBack, label: 'Leucistic - Back' },
              { src: WoodDuckMelanisticFemaleFront, label: 'Melanistic - Front' },
              { src: WoodDuckMelanisticFemaleBack, label: 'Melanistic - Back' },
              { src: WoodDuckPiebaldFemaleFront, label: 'Piebald - Front' },
              { src: WoodDuckPiebaldFemaleBack, label: 'Piebald - Back' },
              { src: WoodDuckStandardFemaleFront, label: 'Standard - Front' },
              { src: WoodDuckStandardFemaleBack, label: 'Standard - Back' },
              ].map((img, i) => (
                <div key={i} style={styles.galleryItem}>
                  <div style={styles.galleryImgPlaceholder}>
                    <img src={img.src} alt={img.label} style={{width: '146px', height: '165px', objectFit: 'cover', borderRadius: '2px'}} />
                  </div>
                  <span style={styles.galleryLabel}>{img.label}</span>
                </div>
              ))}
            </div>

            {/* PLUMAGE RARITY TABLE */}
            <h2 id="plumage-variant-rarity" style={styles.h2}>Plumage Variant Rarity</h2>
            <table style={styles.table}>
                <thead>
                    <tr>
                        <th style={styles.th}>Sex</th>
                        <th style={styles.th}><span style={styles.common}>Common</span></th>
                        <th style={styles.th}><span style={styles.uncommon}>Uncommon</span></th>
                        <th style={styles.th}><span style={styles.rare}>Rare</span></th>
                        <th style={styles.th}><span style={styles.veryRare}>Very Rare</span></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{...styles.td, color: '#9b59b6', fontStyle: 'italic'}}>Male/Female</td>
                        <td style={styles.td}>
                            Standard (74.74%)<br/>
                            Dark (24.96%)
                        </td>
                        <td style={styles.td}>X</td>
                        <td style={styles.td}>X</td>
                        <td style={styles.td}>
                            Albino (0.05%)<br/>
                            Dilute Silver (0.05%)<br/>
                            Erythristic Golden (0.05%)<br/>
                            Leucistic (0.05%)<br/>
                            Melanistic (0.05%)<br/>
                            Piebald (0.05%)
                        </td>
                    </tr>
                </tbody>
            </table>

            <AnimalsTableMini />
          </main>
        </div>
      </div>
    </div>
  );
};

export default WoodDuck;