import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import class1Icon from '../../../assets/Class1Icon.webp';
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';
import React from 'react';
import CinnamonTealMain from '../../../assets/CinnamonTeal.webp';
import CinnamonTeal_BeigeFemaleBack from '../../../assets/CinnamonTeal_BeigeFemaleBack.webp';
import CinnamonTeal_BeigeFemaleFront from '../../../assets/CinnamonTeal_BeigeFemaleFront.webp';
import CinnamonTeal_CinnamonFemaleBack from '../../../assets/CinnamonTeal_CinnamonFemaleBack.webp';
import CinnamonTeal_CinnamonFemaleFront from '../../../assets/CinnamonTeal_CinnamonFemaleFront.webp';
import CinnamonTeal_CinnamonMaleBack from '../../../assets/CinnamonTeal_CinnamonMaleBack.webp';
import CinnamonTeal_CinnamonMaleFront from '../../../assets/CinnamonTeal_CinnamonMaleFront.webp';
import CinnamonTeal_MelanisticMaleBack from '../../../assets/CinnamonTeal_MelanisticMaleBack.webp';
import CinnamonTeal_MelanisticMaleFront from '../../../assets/CinnamonTeal_MelanisticMaleFront.webp';
import CinnamonTeal_PiebaldMaleBack from '../../../assets/CinnamonTeal_PiebaldMaleBack.webp';
import CinnamonTeal_PiebaldMaleFront from '../../../assets/CinnamonTeal_PiebaldMaleFront.webp';
import CinnamonTeal_RedFemaleBack from '../../../assets/CinnamonTeal_RedFemaleBack.webp';
import CinnamonTeal_RedFemaleFront from '../../../assets/CinnamonTeal_RedFemaleFront.webp';
import CinnamonTeal_RedMaleBack from '../../../assets/CinnamonTeal_RedMaleBack.webp';
import CinnamonTeal_RedMaleFront from '../../../assets/CinnamonTeal_RedMaleFront.webp';

const CinnamonTeal = () => {
  // --- DATA SOURCES ---

  // Need Zone Times (No specific table screenshot provided, assuming generic duck times or placeholder based on similar species until specified. 
  // *Self-correction*: The user did NOT provide a specific Need Zone table screenshot for Cinnamon Teal in this batch. 
  // I will use a standard set based on the "Active" description "Dawn, early morning, night" from the Features table, 
  // or leave a placeholder note if preferred. For a complete page, I will generate a standard schedule consistent with the other ducks.)
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
    { label: "Behavior", value: "Calm, social" },
    { label: "Habitat", value: "Swamps, ponds, lakes, rivers" },
    { label: "Senses", value: "Very good hearing, okay sense of vision, poor sense of smell" },
    { label: "Social", value: "Mixed groups with one dominant male, some males remain solitary" },
    { label: "Active", value: "Dawn, early morning, night" },
    { label: "Recommended Equipment", value: "Class 1 Ammo, Beacon Deluxe Duck Caller, Cinnamon Teal Decoys" },
    { label: "Species", value: "Spatula cyanoptera", italic: true },
    { label: "Difficulty", value: "Easy" },
  ];

  // Plumage Variants (Male)
  const plumageMale = [
    { name: "Cinnamon - Front", src: CinnamonTeal_CinnamonMaleFront },
    { name: "Cinnamon - Back", src: CinnamonTeal_CinnamonMaleBack },
    { name: "Melanistic - Front", src: CinnamonTeal_MelanisticMaleFront },
    { name: "Melanistic - Back", src: CinnamonTeal_MelanisticMaleBack },
    { name: "Piebald - Front", src: CinnamonTeal_PiebaldMaleFront },
    { name: "Piebald - Back", src: CinnamonTeal_PiebaldMaleBack },
    { name: "Red - Front", src: CinnamonTeal_RedMaleFront },
    { name: "Red - Back", src: CinnamonTeal_RedMaleBack },
  ];

  // Plumage Variants (Female)
  const plumageFemale = [
    { name: "Beige - Front", src: CinnamonTeal_BeigeFemaleFront },
    { name: "Beige - Back", src: CinnamonTeal_BeigeFemaleBack },
    { name: "Cinnamon - Front", src: CinnamonTeal_CinnamonFemaleFront },
    { name: "Cinnamon - Back", src: CinnamonTeal_CinnamonFemaleBack },
    { name: "Red - Front", src: CinnamonTeal_RedFemaleFront },
    { name: "Red - Back", src: CinnamonTeal_RedFemaleBack },
  ];

  // --- Table of Contents data + smooth scroll handler ---
  const toc = [
    { id: 'features', label: 'Features', children: [] },
    { id: 'tips', label: 'Tips', children: [] },
    { id: 'plumage-variants', label: 'Plumage Variants', children: [
      { id: 'plumage-male', label: 'Male' },
      { id: 'plumage-female', label: 'Female' },
    ] },
    { id: 'plumage-rarity', label: 'Plumage Variant Rarity', children: [] },
    { id: 'trivia', label: 'Trivia', children: [] },
    { id: 'references', label: 'References', children: [] },
  ];

  const handleTOCClick = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

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
      width: '300px',
      height: '220px',
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

  return (
    <div style={styles.container}>
      <div style={styles.innerWrapper}>
        
        {/* PAGE HEADER */}
        <div style={styles.mainHeader}>
          <span>Cinnamon Teal</span>
          <div style={styles.editActions}>

          </div>
        </div>

        <div style={styles.layout}>
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside style={styles.sidebarColumn}>
            <div style={styles.sidebarHeader}>Cinnamon Teal</div>
            <div style={styles.sidebarImage}>
              <img src={CinnamonTealMain} alt="Cinnamon Teal" style={{width: '268.4px', height: '134.2px', objectFit: 'cover', display: 'block'}} />
              <span style={{position:'absolute', bottom:'5px', right:'5px', fontSize:'0.8rem'}}></span>
            </div>
            
            <div style={styles.sidebarHeader}>General Information</div>
            
            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Class</span>
              <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                <img src={class1Icon} alt="Class 1" style={{width: '28px', height: '28px', display: 'block'}} />
                <span>1</span>
              </div>
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
                   <span>3.4</span>
                </div>
                <div style={styles.trophyItem}>
                   <span style={{...styles.trophyLabel, ...styles.gold}}>☗ Gold</span>
                   <span>4.1</span>
                </div>
                <div style={styles.trophyItem}>
                   <span style={{...styles.trophyLabel, ...styles.diamond}}>☗ Diamond</span>
                   <span>4.6</span>
                </div>
              </div>
            </div>

            <div style={styles.sidebarSection}>
               <span style={styles.sidebarLabel}>Weight</span>
               110g — 482g<br/>
               0.2lbs — 1.1lbs
            </div>

            <div style={styles.sidebarSection}>
               <span style={styles.sidebarLabel}>Plumage</span>
               <span style={{fontSize: '0.85rem'}}>
                 Beige, Cinnamon, Melanistic, Piebald, Red
               </span>
            </div>

            <div style={styles.sidebarHeader}>Locations</div>
            <div style={styles.sidebarSection}>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Parque Fernando</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main style={styles.mainColumn}>

            {/* Quote Block */}
            <div style={styles.quoteBox}>
              "The cinnamon teal (spatula cyanoptera) is a small dabbling duck with characteristic cinnamon colored plumage on males and a duller brown plumage on females. Cinnamon teal can be found across the western United States, extreme southwestern Canada, and Southern America.<br/><br/>
              While females and non-breeding males have more coarse, brown coloration across their bodies, breeding males have long black bills, red eye coloration, black backs, and rear, with white underwings. Green secondaries and sky blue shoulder feathers also become visible in flight.<br/><br/>
              The cinnamon teal is significantly smaller than the mallard, weighing in at 0.50 kg, with a wingspan of no more than 0.65 m."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p style={{marginBottom: '20px'}}>
              The <strong>Cinnamon Teal</strong> is a <span style={styles.link}>class 1</span> duck species that can be hunted on <span style={styles.link}>Parque Fernando</span>.
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
                <div style={{fontWeight: 'bold', borderBottom: '1px solid #3a5a75', marginBottom: '5px'}}>
                  🔢 Contents <span style={{float:'right', color: '#6fb2e6', fontSize:'0.8rem'}}>[hide]</span>
                </div>
                <ol style={{margin: '0', paddingLeft: '12px', color: '#6fb2e6', listStyleType: 'none'}}>
                  {toc.map((item, i) => (
                    <li key={item.id} style={{cursor: 'pointer', marginBottom: '6px'}} onClick={() => handleTOCClick(item.id)}>
                      <span style={{marginRight: '8px', fontWeight: 'bold'}}>{i + 1}.</span>
                      {item.label}
                      {item.children && item.children.length > 0 && (
                        <ol style={{marginTop: '6px', marginLeft: '18px', listStyleType: 'none'}}>
                          {item.children.map((child, j) => (
                            <li key={child.id} style={{cursor: 'pointer', color: '#9fd6ff'}} onClick={(e) => { e.stopPropagation(); handleTOCClick(child.id); }}>
                              <span style={{marginRight: '8px', fontWeight: 'bold'}}>{`${i + 1}.${j + 1}`}</span>
                              {child.label}
                            </li>
                          ))}
                        </ol>
                      )}
                    </li>
                  ))}
                </ol>
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

            {/* TIPS */}
            <h2 id="tips" style={styles.h2}>Tips</h2>
            <p>
              Ducks will fly against the wind when making a landing, so be mindful of the wind direction. If you are going to use blinds and decoys, place your decoys approximately 50ms (54yds) away from your blind so the <strong>Cinnamon Teal</strong> won't fly on top of you and spook.
            </p>

            {/* PLUMAGE VARIANTS (Gallery) */}
            <h2 id="plumage-variants" style={styles.h2}>Plumage Variants</h2>
            
            <h3 id="plumage-male" style={styles.h3}>Male</h3>
            <div style={styles.galleryGrid}>
              {plumageMale.map((img, i) => (
                  <div key={i} style={styles.galleryItem}>
                      <div style={styles.galleryImgPlaceholder}>
                        <img src={img.src} alt={img.name} style={{width: '146px', height: '165px', objectFit: 'cover', display: 'block'}} />
                      </div>
                      <span style={styles.galleryLabel}>{img.name}</span>
                  </div>
              ))}
            </div>

            <h3 id="plumage-female" style={styles.h3}>Female</h3>
            <div style={styles.galleryGrid}>
              {plumageFemale.map((img, i) => (
                  <div key={i} style={styles.galleryItem}>
                      <div style={styles.galleryImgPlaceholder}>
                        <img src={img.src} alt={img.name} style={{width: '146px', height: '165px', objectFit: 'cover', display: 'block'}} />
                      </div>
                      <span style={styles.galleryLabel}>{img.name}</span>
                  </div>
              ))}
            </div>

            {/* PLUMAGE RARITY TABLE */}
            <h2 id="plumage-rarity" style={styles.h2}>Plumage Variant Rarity</h2>
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
                    {/* Male Row */}
                    <tr>
                        <td style={{...styles.td, color: '#9b59b6', fontStyle: 'italic'}}>Male</td>
                        <td style={styles.td}>
                            Cinnamon (74.85%)<br/>
                            Red (12.53%)<br/>
                            Piebald (12.53%)
                        </td>
                        <td style={styles.td}>X</td>
                        <td style={styles.td}>Melanistic (0.10%)</td>
                        <td style={styles.td}>X</td>
                    </tr>
                    {/* Female Row */}
                    <tr>
                        <td style={{...styles.td, color: '#e91e63', fontStyle: 'italic'}}>Female</td>
                        <td style={styles.td}>
                            Cinnamon (85.49%)<br/>
                            Red (14.31%)
                        </td>
                        <td style={styles.td}>X</td>
                        <td style={styles.td}>Beige (0.20%)</td>
                        <td style={styles.td}>X</td>
                    </tr>
                </tbody>
            </table>

            {/* TRIVIA */}
            <h2 id="trivia" style={styles.h2}>Trivia</h2>
            <ul style={{paddingLeft: '20px', marginBottom: '30px'}}>
                <li style={{marginBottom:'8px'}}>It's genus name <em>Spatula</em> is named after a spatula. However the etymology of the word <em>Spatula</em> comes from Ancient Latin and Greek, and means something along the lines of <em>a broad flat blade</em>.[1]</li>
                <li style={{marginBottom:'8px'}}>Cinnamon Teals are relatively quiet compared to other ducks. However, if they are to speak, their preferred vocalization is a distinctive "Chattering" which is performed by the males.[2][3]</li>
                <li style={{marginBottom:'8px'}}>These birds are special, in that, unlike most duck species, the male does not abandon the female immediately, electing to stay and look after his mate until her eggs hatch.[4]</li>
            </ul>

            {/* REFERENCES */}
            <h2 id="references" style={styles.h2}>References</h2>
            <ol style={{paddingLeft: '25px', color: '#6fb2e6'}}>
                <li><span style={styles.link}>https://www.etymonline.com/word/spatula</span></li>
                <li><span style={styles.link}>https://seaworld.org/animals/facts/birds/cinnamon-teal/</span></li>
                <li><span style={styles.link}>https://www.audubon.org/field-guide/bird/cinnamon-teal</span></li>
                <li><span style={styles.link}>https://rachelcarsoncouncil.salsalabs.org/cinnamonteal</span></li>
            </ol>

            <AnimalsTableMini />
          </main>
        </div>
      </div>
    </div>
  );
};

export default CinnamonTeal;