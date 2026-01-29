import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import class1Icon from '../../../assets/Class1Icon.webp';
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import RedGrouseMain from '../../../assets/RedGrouse.webp';

// Shot Scheme (Using placeholder based on previous patterns or generic if not provided, assuming generic bird X-ray)

// Male Plumage Images
import RedGrouse_AlbinoMaleFront from '../../../assets/RedGrouse_AlbinoMaleFront.webp';
import RedGrouse_AlbinoMaleBack from '../../../assets/RedGrouse_AlbinoMaleBack.webp';
import RedGrouse_DarkRedMaleFront from '../../../assets/RedGrouse_DarkRedMaleFront.webp';
import RedGrouse_DarkRedMaleBack from '../../../assets/RedGrouse_DarkRedMaleBack.webp';
import RedGrouse_RedMaleFront from '../../../assets/RedGrouse_RedMaleFront.webp';
import RedGrouse_RedMaleBack from '../../../assets/RedGrouse_RedMaleBack.webp';
import RedGrouse_MelanisticMaleFront from '../../../assets/RedGrouse_MelanisticMaleFront.webp';
import RedGrouse_MelanisticMaleBack from '../../../assets/RedGrouse_MelanisticMaleBack.webp';

// Female Plumage Images
import RedGrouse_BrownFemaleFront from '../../../assets/RedGrouse_BrownFemaleFront.webp';
import RedGrouse_BrownFemaleBack from '../../../assets/RedGrouse_BrownFemaleBack.webp';
import RedGrouse_LeucisticFemaleFront from '../../../assets/RedGrouse_LeucisticFemaleFront.webp';
import RedGrouse_LeucisticFemaleBack from '../../../assets/RedGrouse_LeucisticFemaleBack.webp';
import RedGrouse_LightBrownFemaleFront from '../../../assets/RedGrouse_LightBrownFemaleFront.webp';
import RedGrouse_LightBrownFemaleBack from '../../../assets/RedGrouse_LightBrownFemaleBack.webp';
import RedGrouse_PiebaldFemaleFront from '../../../assets/RedGrouse_PiebaldFemaleFront.webp';
import RedGrouse_PiebaldFemaleBack from '../../../assets/RedGrouse_PiebaldFemaleBack.webp';


const RedGrouse = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  const needZones = [
    { time: "04:00 - 08:00", type: "Feeding", icon: FeedingZoneIcon },
    { time: "08:00 - 11:00", type: "Feeding", icon: FeedingZoneIcon },
    { time: "11:00 - 14:00", type: "Resting", icon: RestingZoneIcon },
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Generally wary and secretive, relying on camouflage and stillness to avoid predators" },
    { label: "Habitat", value: "Thrives in heather moorland, upland terrain, and open, expansive land, where it finds both food and cover in the dense vegetation" },
    { label: "Senses", value: "Excellent vision, acute sense of hearing and poor sense of smell" },
    { label: "Social", value: "Typically solitary and found in small family groups" },
    { label: "Active", value: "Active during the day, particularly in the early morning and late evening hours" },
    { label: "Recommended Equipment", value: "Class 1 Ammo" },
    { label: "Species", value: "Lagopus scotica", italic: true, isLink: true },
    { label: "Difficulty", value: "Easy" },
  ];

  // Plumage Gallery Data
  const plumageGallery = {
    male: [
      { name: "Albino - Front", src: RedGrouse_AlbinoMaleFront },
      { name: "Albino - Back", src: RedGrouse_AlbinoMaleBack },
      { name: "Dark Red - Front", src: RedGrouse_DarkRedMaleFront },
      { name: "Dark Red - Back", src: RedGrouse_DarkRedMaleBack },
      { name: "Red - Front", src: RedGrouse_RedMaleFront },
      { name: "Red - Back", src: RedGrouse_RedMaleBack },
      { name: "Melanistic - Front", src: RedGrouse_MelanisticMaleFront },
      { name: "Melanistic - Back", src: RedGrouse_MelanisticMaleBack },
    ],
    female: [
      { name: "Brown - Front", src: RedGrouse_BrownFemaleFront },
      { name: "Brown - Back", src: RedGrouse_BrownFemaleBack },
      { name: "Leucistic - Front", src: RedGrouse_LeucisticFemaleFront },
      { name: "Leucistic - Back", src: RedGrouse_LeucisticFemaleBack },
      { name: "Light Brown - Front", src: RedGrouse_LightBrownFemaleFront },
      { name: "Light Brown - Back", src: RedGrouse_LightBrownFemaleBack },
      { name: "Piebald - Front", src: RedGrouse_PiebaldFemaleFront },
      { name: "Piebald - Back", src: RedGrouse_PiebaldFemaleBack },
    ]
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
      height: '444px',
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
          <span>Red Grouse</span>
          <div style={styles.editActions}>
          </div>
        </div>

        <div style={styles.layout}>
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside style={styles.sidebarColumn}>
            <div style={styles.sidebarHeader}>Red Grouse</div>
            <div style={styles.sidebarImage}>
              <img src={RedGrouseMain} alt="Red Grouse" style={{width:'268px', height: '134px', objectFit: 'cover'}} />
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

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Trophy Type</span>
              <span>weight</span>
              <div style={styles.trophyGrid}>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.silver}}>◆ Silver</span>
                  <span>57</span>
                </div>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.gold}}>☗ Gold</span>
                  <span>66</span>
                </div>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.diamond}}>☗ Diamond</span>
                  <span>72.75</span>
                </div>
              </div>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Weight</span>
              ? — 0.64kg<br/>
              ? — 1lbs
            </div>

            <div style={styles.sidebarSection}>
               <span style={styles.sidebarLabel}>Plumage</span>
               <span style={{fontSize:'0.85rem'}}>
                  Albino, Brown, Dark Red, Leucistic, Light Brown, Melanistic, Piebald, Red
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
            <div style={styles.quoteBox}>
              "The Red Grouse (Lagopus scotica) is a ground-dwelling bord native to the heather moorlands of the British Isles. It is reddish-brown year-round. Males are slightly brighter in color and have distinctive red eyebow-like wattles, called eye combs, which become more prominent during the breeding season. Females are more mottled and duller in tone, providing better camouflage while nesting. This bird is territorial, especially during breeding season, and typically stays within a small area. It feeds mainly on heather and relies on moorland habitats for food, nesting, and cover. The Red Grouse is often found on moorlands that are managed to suppoort its population, especially for traditional shooting practices."
              <br/><br/>
              ― In-Game Description
            </div>

            {/* Intro Text */}
            <p style={{marginBottom:'20px'}}>
              The <strong>Red Grouse</strong> is a species introduced in the <span style={styles.link}>Tòrr nan Sithean</span> reserve located in Scotland.
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
                <li>
                  <a href="#features" style={styles.link} onClick={(e)=>{e.preventDefault(); document.getElementById('features')?.scrollIntoView({behavior:'smooth', block:'start'});}}>Features</a>
                </li>
                <li>
                  <a href="#need-zone-times" style={styles.link} onClick={(e)=>{e.preventDefault(); document.getElementById('need-zone-times')?.scrollIntoView({behavior:'smooth', block:'start'});}}>Need Zone Times</a>
                </li>
                <li>
                  <a href="#plumage-variants" style={styles.link} onClick={(e)=>{e.preventDefault(); document.getElementById('plumage-variants')?.scrollIntoView({behavior:'smooth', block:'start'});}}>Plumage Variants</a>
                  <ul style={{listStyleType:'none', paddingLeft:'10px', margin:'5px 0'}}>
                      <li style={{color:'#6fb2e6'}}><a href="#plumage-male" style={styles.link} onClick={(e)=>{e.preventDefault(); document.getElementById('plumage-male')?.scrollIntoView({behavior:'smooth', block:'start'});}}>3.1. Male</a></li>
                      <li style={{color:'#6fb2e6'}}><a href="#plumage-female" style={styles.link} onClick={(e)=>{e.preventDefault(); document.getElementById('plumage-female')?.scrollIntoView({behavior:'smooth', block:'start'});}}>3.2. Female</a></li>
                  </ul>
                </li>
                <li>
                  <a href="#plumage-rarity" style={styles.link} onClick={(e)=>{e.preventDefault(); document.getElementById('plumage-rarity')?.scrollIntoView({behavior:'smooth', block:'start'});}}>Plumage Variant Rarity</a>
                </li>
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
                        <span dangerouslySetInnerHTML={{ __html: item.value }} />
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
                        <tr><th colSpan="2" style={{...styles.th, textAlign: 'center'}}>Tòrr nan Sithean</th></tr>
                        <tr>
                            <th style={{...styles.th, backgroundColor: '#0f2e48'}}>Times</th>
                            <th style={{...styles.th, backgroundColor: '#0f2e48'}}>Activity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {needZones.map((zone, i) => (
                        <tr key={i}>
                            <td style={styles.td}>{zone.time}</td>
                            <td style={styles.td}><img src={zone.icon} alt={zone.type} style={{width:'20px', height: '20px', verticalAlign: 'middle', marginRight: '6px'}}/> {zone.type}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* SHOT SCHEME (removed) */}

            {/* PLUMAGE VARIANTS (Gallery) */}
            <h2 id="plumage-variants" style={styles.h2}>Plumage Variants</h2>
            
            {/* Male Section */}
            <h3 id="plumage-male" style={{...styles.h2, fontSize:'1.2rem', borderBottom:'none', marginTop:'10px'}}>Male</h3>
            <div style={styles.galleryGrid}>
              {plumageGallery.male.map((item, i) => (
                <div key={i} style={styles.galleryItem}>
                  <div style={styles.galleryImgPlaceholder}>
                    <img src={item.src} alt={item.name} style={{width:'146px', height: '165px', objectFit: 'cover'}} />
                  </div>
                  <span style={styles.galleryLabel}>{item.name}</span>
                </div>
              ))}
            </div>

            {/* Female Section */}
            <h3 id="plumage-female" style={{...styles.h2, fontSize:'1.2rem', borderBottom:'none', marginTop:'10px'}}>Female</h3>
            <div style={styles.galleryGrid}>
              {plumageGallery.female.map((item, i) => (
                <div key={i} style={styles.galleryItem}>
                  <div style={styles.galleryImgPlaceholder}>
                    <img src={item.src} alt={item.name} style={{width:'146px', height: '165px', objectFit: 'cover'}} />
                  </div>
                  <span style={styles.galleryLabel}>{item.name}</span>
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
                    <tr>
                        <td style={{...styles.td, color: '#3498db', fontStyle: 'italic', fontWeight: 'bold'}}>Male</td>
                        <td style={styles.td}>
                            Dark Red (49.90%)<br/>
                            Red (49.90%)
                        </td>
                        <td style={styles.td}>X</td>
                        <td style={styles.td}>
                            Albino (0.10%)<br/>
                            Melanistic (0.10%)
                        </td>
                        <td style={styles.td}>X</td>
                    </tr>
                     <tr>
                        <td style={{...styles.td, color: '#ff69b4', fontStyle: 'italic', fontWeight: 'bold'}}>Female</td>
                        <td style={styles.td}>
                            Brown (49.80%)<br/>
                            Light Brown (49.80%)
                        </td>
                        <td style={styles.td}>X</td>
                        <td style={styles.td}>
                            Leucistic (0.20%)<br/>
                            Piebald (0.20%)
                        </td>
                        <td style={styles.td}>X</td>
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

export default RedGrouse;