import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import class1Icon from '../../../assets/Class1Icon.webp';
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import RockPtarmiganMain from '../../../assets/RockPtarmigan.webp';

// Male Plumage Images
import RockPtarmigan_BicolorMaleFront from '../../../assets/RockPtarmigan_BicolorMaleFront.webp';
import RockPtarmigan_BicolorMaleBack from '../../../assets/RockPtarmigan_BicolorMaleBack.webp';
import RockPtarmigan_MoltingVariation1MaleFront from '../../../assets/RockPtarmigan_MoltingVariation1MaleFront.webp';
import RockPtarmigan_MoltingVariation1MaleBack from '../../../assets/RockPtarmigan_MoltingVariation1MaleBack.webp';
import RockPtarmigan_MoltingVariation2MaleFront from '../../../assets/RockPtarmigan_MoltingVariation2MaleFront.webp';
import RockPtarmigan_MoltingVariation2MaleBack from '../../../assets/RockPtarmigan_MoltingVariation2MaleBack.webp';
import RockPtarmigan_WhiteMaleFront from '../../../assets/RockPtarmigan_WhiteMaleFront.webp';
import RockPtarmigan_WhiteMaleBack from '../../../assets/RockPtarmigan_WhiteMaleBack.webp';

// Female Plumage Images
import RockPtarmigan_MoltingVariation1FemaleFront from '../../../assets/RockPtarmigan_MoltingVariation1FemaleFront.webp';
import RockPtarmigan_MoltingVariation1FemaleBack from '../../../assets/RockPtarmigan_MoltingVariation1FemaleBack.webp';
import RockPtarmigan_MoltingVariation2FemaleFront from '../../../assets/RockPtarmigan_MoltingVariation2FemaleFront.webp';
import RockPtarmigan_MoltingVariation2FemaleBack from '../../../assets/RockPtarmigan_MoltingVariation2FemaleBack.webp';
import RockPtarmigan_MottledVariation1FemaleFront from '../../../assets/RockPtarmigan_MottledVariation1FemaleFront.webp';
import RockPtarmigan_MottledVariation1FemaleBack from '../../../assets/RockPtarmigan_MottledVariation1FemaleBack.webp';
import RockPtarmigan_MottledVariation2FemaleFront from '../../../assets/RockPtarmigan_MottledVariation2FemaleFront.webp';
import RockPtarmigan_MottledVariation2FemaleBack from '../../../assets/RockPtarmigan_MottledVariation2FemaleBack.webp';
import RockPtarmigan_WhiteFemaleFront from '../../../assets/RockPtarmigan_WhiteFemaleFront.webp';
import RockPtarmigan_WhiteFemaleBack from '../../../assets/RockPtarmigan_WhiteFemaleBack.webp';


const RockPtarmigan = () => {

  // --- DATA SOURCES ---

  // Need Zone Times (Revontuli Coast)
  const needZones = [
    { time: "00:00 - 04:30", type: "Resting", icon: RestingZoneIcon },
    { time: "04:00 - 08:30", type: "Feeding", icon: FeedingZoneIcon },
    { time: "08:00 - 11:30", type: "Feeding", icon: FeedingZoneIcon },
    { time: "11:00 - 14:30", type: "Resting", icon: RestingZoneIcon },
    { time: "14:00 - 18:30", type: "Feeding", icon: FeedingZoneIcon },
    { time: "18:00 - 21:30", type: "Feeding", icon: FeedingZoneIcon },
    { time: "21:00 - 00:30", type: "Resting", icon: RestingZoneIcon },
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Territorial" },
    { label: "Habitat", value: "Rocky tundra" },
    { label: "Senses", value: "Excellent vision" },
    { label: "Social", value: "Territorial while breeding, flocks before migration" },
    { label: "Active", value: "Diurnal" },
    { label: "Recommended Equipment", value: "Class 1 Ammo" },
    { label: "Species", value: "Lagopus muta", italic: true, isLink: true },
    { label: "Difficulty", value: "Easy" },
  ];

  // Plumage Gallery Data
  const plumageGallery = {
    male: [
      { name: "Bicolor - Front", src: RockPtarmigan_BicolorMaleFront },
      { name: "Bicolor - Back", src: RockPtarmigan_BicolorMaleBack },
      { name: "Molting Variation 1 - Front", src: RockPtarmigan_MoltingVariation1MaleFront },
      { name: "Molting Variation 1 - Back", src: RockPtarmigan_MoltingVariation1MaleBack },
      { name: "Molting Variation 2 - Front", src: RockPtarmigan_MoltingVariation2MaleFront },
      { name: "Molting Variation 2 - Back", src: RockPtarmigan_MoltingVariation2MaleBack },
      { name: "White - Front", src: RockPtarmigan_WhiteMaleFront },
      { name: "White - Back", src: RockPtarmigan_WhiteMaleBack },
    ],
    female: [
      { name: "Molting Variation 1 - Front", src: RockPtarmigan_MoltingVariation1FemaleFront },
      { name: "Molting Variation 1 - Back", src: RockPtarmigan_MoltingVariation1FemaleBack },
      { name: "Molting Variation 2 - Front", src: RockPtarmigan_MoltingVariation2FemaleFront },
      { name: "Molting Variation 2 - Back", src: RockPtarmigan_MoltingVariation2FemaleBack },
      { name: "Mottled Variation 1 - Front", src: RockPtarmigan_MottledVariation1FemaleFront },
      { name: "Mottled Variation 1 - Back", src: RockPtarmigan_MottledVariation1FemaleBack },
      { name: "Mottled Variation 2 - Front", src: RockPtarmigan_MottledVariation2FemaleFront },
      { name: "Mottled Variation 2 - Back", src: RockPtarmigan_MottledVariation2FemaleBack },
      { name: "White - Front", src: RockPtarmigan_WhiteFemaleFront },
      { name: "White - Back", src: RockPtarmigan_WhiteFemaleBack },
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
          <span>Rock Ptarmigan</span>
          <div style={styles.editActions}>
          </div>
        </div>

        <div style={styles.layout}>
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside style={styles.sidebarColumn}>
            <div style={styles.sidebarHeader}>Rock Ptarmigan</div>
            <div style={styles.sidebarImage}>
              <img src={RockPtarmiganMain} alt="Rock Ptarmigan" style={{width:'268px', height: '134px', objectFit: 'cover'}} />
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
              <span>Weight</span>
              <div style={styles.trophyGrid}>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.silver}}>◆ Silver</span>
                  <span>492</span>
                </div>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.gold}}>☗ Gold</span>
                  <span>616</span>
                </div>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.diamond}}>☗ Diamond</span>
                  <span>709</span>
                </div>
              </div>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Weight</span>
              730g — 750g<br/>
              1.6lbs — 1.7lbs
            </div>

            <div style={styles.sidebarSection}>
               <span style={styles.sidebarLabel}>Plumage</span>
               <span style={{fontSize:'0.85rem'}}>
                  Bicolor, Molting, Mottled, White
               </span>
            </div>

            <div style={styles.sidebarHeader}>Locations</div>
            <div style={styles.sidebarSection}>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Revontuli Coast</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main style={styles.mainColumn}>

            {/* Quote Block */}
            <div style={styles.quoteBox}>
              "The Rock Ptarmigan is closely related to the slightly larger Willow Ptarmigan, and occupies the same natural range in the Arctic and subarctic regions of Eurasia and North America. However the two species occupy different habitats, the Rock Ptarmigan prefers more rocky and barren environments at higher elevation. As other species of ptarmigans, the Rock Ptarmigan changes throughout the year in a multi-step molting process. Males gradually change between a white winter plumage, a conspicuous breeding plumage and a cryptic plumage in a continuous cycle."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p style={{marginBottom:'20px'}}>
              The <strong>Rock Ptarmigan</strong> is a species introduced in the <span style={styles.link}>Revontuli Coast</span> reserve located in Finland. It is one of 6 huntable Grouse species in game. The other Grouse include the <span style={styles.link}>Willow Ptarmigan</span>, <span style={styles.link}>Hazel Grouse</span>, <span style={styles.link}>Black Grouse</span>, <span style={styles.link}>Red Grouse</span> and the <span style={styles.link}>Western Capercaillie</span>.
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
                <li>
                  <a href="#trivia" style={styles.link} onClick={(e)=>{e.preventDefault(); document.getElementById('trivia')?.scrollIntoView({behavior:'smooth', block:'start'});}}>Trivia</a>
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
                        <tr><th colSpan="2" style={{...styles.th, textAlign: 'center'}}>Revontuli Coast</th></tr>
                        <tr>
                            <th style={{...styles.th, backgroundColor: '#0f2e48'}}>Time</th>
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
                            Molting Variation 1 (39.85%)<br/>
                            Molting Variation 2 (39.85%)<br/>
                            Bicolor (19.93%)
                        </td>
                        <td style={styles.td}>X</td>
                        <td style={styles.td}>
                            White (0.37%)
                        </td>
                        <td style={styles.td}>X</td>
                    </tr>
                     <tr>
                        <td style={{...styles.td, color: '#ff69b4', fontStyle: 'italic', fontWeight: 'bold'}}>Female</td>
                        <td style={styles.td}>
                            Molting Variation 1 (33.23%)<br/>
                            Molting Variation 2 (33.23%)<br/>
                            Mottled Variation 1 (16.61%)<br/>
                            Mottled Variation 2 (16.61%)
                        </td>
                        <td style={styles.td}>X</td>
                        <td style={styles.td}>
                            White (0.31%)
                        </td>
                        <td style={styles.td}>X</td>
                    </tr>
                </tbody>
            </table>

            {/* TRIVIA */}
            <h2 id="trivia" style={styles.h2}>Trivia</h2>
            <ul style={{paddingLeft:'20px', marginBottom: '30px'}}>
              <li style={{marginBottom:'8px'}}>The <strong>Rock Ptarmigan</strong> is called "Kiiruna" in Finnish.</li>
            </ul>

            <AnimalsTableMini />
          </main>
        </div>
      </div>
    </div>
  );
};

export default RockPtarmigan;