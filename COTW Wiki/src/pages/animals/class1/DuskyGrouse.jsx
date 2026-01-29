import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import class1Icon from '../../../assets/Class1Icon.webp';
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import DuskyGrouseMain from '../../../assets/Dusky_Grouse.webp';

// Shot Scheme (Reuse placeholder or specific if you have one, reusing northern pintail logic or generic xray)
import DuskyGrouse_ShotScheme from '../../../assets/Dusky_Grouse_shot_scheme.webp'; // Placeholder name based on pattern

// Male Plumage Images
import DuskyGrouse_AlbinoMaleFront from '../../../assets/DuskyGrouse_AlbinoMaleFront.webp';
import DuskyGrouse_AlbinoMaleBack from '../../../assets/DuskyGrouse_AlbinoMaleBack.webp';
import DuskyGrouse_BrownMaleFront from '../../../assets/DuskyGrouse_BrownMaleFront.webp';
import DuskyGrouse_BrownMaleBack from '../../../assets/DuskyGrouse_BrownMaleBack.webp';
import DuskyGrouse_LeucisticMaleFront from '../../../assets/DuskyGrouse_LeuicisticMaleFront.webp';
import DuskyGrouse_LeucisticMaleBack from '../../../assets/DuskyGrouse_LeuicisticMaleBack.webp';
import DuskyGrouse_MelanisticMaleFront from '../../../assets/DuskyGrouse_MelanisticMaleFront.webp';
import DuskyGrouse_MelanisticMaleBack from '../../../assets/DuskyGrouse_MelanisticMaleBack.webp';
import DuskyGrouse_MoltingMaleFront from '../../../assets/DuskyGrouse_MoltingMaleFront.webp';
import DuskyGrouse_MoltingMaleBack from '../../../assets/DuskyGrouse_MoltingMaleBack.webp';
import DuskyGrouse_SlateGrayMaleFront from '../../../assets/DuskyGrouse_SlateGrayMaleFront.webp';
import DuskyGrouse_SlateGrayMaleBack from '../../../assets/DuskyGrouse_SlateGrayMaleBack.webp';

// Female Plumage Images
import DuskyGrouse_AlbinoFemaleFront from '../../../assets/DuskyGrouse_AlbinoFemaleFront.webp';
import DuskyGrouse_AlbinoFemaleBack from '../../../assets/DuskyGrouse_AlbinoFemaleBack.webp';
import DuskyGrouse_GreyBrownFemaleFront from '../../../assets/DuskyGrouse_GreyBrownFemaleFront.webp';
import DuskyGrouse_GreyBrownFemaleBack from '../../../assets/DuskyGrouse_GreyBrownFemaleBack.webp';
import DuskyGrouse_LeucisticFemaleFront from '../../../assets/DuskyGrouse_LeuicisticFemaleFront.webp';
import DuskyGrouse_LeucisticFemaleBack from '../../../assets/DuskyGrouse_LeuicisticFemaleBack.webp';
import DuskyGrouse_MelanisticFemaleFront from '../../../assets/DuskyGrouse_MelanisticFemaleFront.webp';
import DuskyGrouse_MelanisticFemaleBack from '../../../assets/DuskyGrouse_MelanisticFemaleBack.webp';


const DuskyGrouse = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  const needZones = [
    { time: "00:00 - 04:00", type: "Resting", icon: RestingZoneIcon },
    { time: "04:00 - 08:00", type: "Feeding", icon: FeedingZoneIcon },
    { time: "08:00 - 11:00", type: "Feeding", icon: FeedingZoneIcon },
    { time: "11:00 - 14:00", type: "Resting", icon: RestingZoneIcon },
    { time: "14:00 - 18:00", type: "Feeding", icon: FeedingZoneIcon },
    { time: "18:00 - 21:00", type: "Feeding", icon: FeedingZoneIcon },
    { time: "21:00 - 00:00", type: "Resting", icon: RestingZoneIcon },
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Solitary, elusive" },
    { label: "Habitat", value: "Mountainous forests, preferring areas with a mix of conifers, aspens, and dense unterbush" },
    { label: "Senses", value: "Sharp eyesight, strong sense of hearing, good sense of smell" },
    { label: "Social", value: "Solitary outside breeding season, males becoming more territorial during courtship" },
    { label: "Active", value: "Early morning and late afternoon" },
    { label: "Recommended Equipment", value: "Class 1 Ammo" },
    { label: "Species", value: "Dendragapus obscurus", italic: true, isLink: true },
    { label: "Difficulty", value: "Easy" },
  ];

  // Plumage Gallery Data
  const plumageGallery = {
    male: [
      { name: "Albino - Front", src: DuskyGrouse_AlbinoMaleFront },
      { name: "Albino - Back", src: DuskyGrouse_AlbinoMaleBack },
      { name: "Brown - Front", src: DuskyGrouse_BrownMaleFront },
      { name: "Brown - Back", src: DuskyGrouse_BrownMaleBack },
      { name: "Leucistic - Front", src: DuskyGrouse_LeucisticMaleFront },
      { name: "Leucistic - Back", src: DuskyGrouse_LeucisticMaleBack },
      { name: "Melanistic - Front", src: DuskyGrouse_MelanisticMaleFront },
      { name: "Melanistic - Back", src: DuskyGrouse_MelanisticMaleBack },
      { name: "Molting - Front", src: DuskyGrouse_MoltingMaleFront },
      { name: "Molting - Back", src: DuskyGrouse_MoltingMaleBack },
      { name: "Slate Gray - Front", src: DuskyGrouse_SlateGrayMaleFront },
      { name: "Slate Gray - Back", src: DuskyGrouse_SlateGrayMaleBack },
    ],
    female: [
      { name: "Albino - Front", src: DuskyGrouse_AlbinoFemaleFront },
      { name: "Albino - Back", src: DuskyGrouse_AlbinoFemaleBack },
      { name: "Grey Brown - Front", src: DuskyGrouse_GreyBrownFemaleFront },
      { name: "Grey Brown - Back", src: DuskyGrouse_GreyBrownFemaleBack },
      { name: "Leucistic - Front", src: DuskyGrouse_LeucisticFemaleFront },
      { name: "Leucistic - Back", src: DuskyGrouse_LeucisticFemaleBack },
      { name: "Melanistic - Front", src: DuskyGrouse_MelanisticFemaleFront },
      { name: "Melanistic - Back", src: DuskyGrouse_MelanisticFemaleBack },
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
          <span>Dusky Grouse</span>
          <div style={styles.editActions}>
          </div>
        </div>

        <div style={styles.layout}>
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside style={styles.sidebarColumn}>
            <div style={styles.sidebarHeader}>Dusky Grouse</div>
            <div style={styles.sidebarImage}>
              <img src={DuskyGrouseMain} alt="Dusky Grouse" style={{width:'268px', height: '134px', objectFit: 'cover'}} />
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
                  <span>88</span>
                </div>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.gold}}>☗ Gold</span>⁐
                  <span>124</span>
                </div>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.diamond}}>☗ Diamond</span>
                  <span>151</span>
                </div>
              </div>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Weight</span>
              700g — 1250g<br/>
              1.5lbs — 2.8lbs
            </div>

            <div style={styles.sidebarSection}>
               <span style={styles.sidebarLabel}>Plumage</span>
               <span style={{fontSize:'0.85rem'}}>
                  Albino, Brown, Grey Brown, Leucistic, Melanistic, Molting, Slate Gray
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
              "The Dusky Grouse is a medium to large-sized game bird, renowned for its striking appearance and alusive nature. Adult males feathre a dark, dusky blue-gray plumage across their bodies, with mottled black and white markings on their underside. Dirung the breeding season, males develop vibrant red or yellow air sacs on their necks.

              <br/><br/>
              Dusky Grouses are primarily found in montane and subalpine forestsm preferring habitats with ample coniferous cover and dense undergrowth.

              <br/><br/>
              They have stout legs and feet adapted for life on the forest floor. Their feet are equipped with sharp, curved claws, ideal for scratching and digging in the forest litter in search of food."
              <br/><br/>
              ― In-Game Description
            </div>

            {/* Intro Text */}
            <p style={{marginBottom:'20px'}}>
              The <strong>Dusky Grouse</strong> is a <span style={styles.link}>class 1</span> quail species that can be hunted on <span style={styles.link}>Askiy Ridge Hunting Preserve</span>.
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
                  <a href="#shot-scheme" style={styles.link} onClick={(e)=>{e.preventDefault(); document.getElementById('shot-scheme')?.scrollIntoView({behavior:'smooth', block:'start'});}}>Shot scheme</a>
                </li>
                <li>
                  <a href="#plumage-variants" style={styles.link} onClick={(e)=>{e.preventDefault(); document.getElementById('plumage-variants')?.scrollIntoView({behavior:'smooth', block:'start'});}}>Plumage Variants</a>
                  <ul style={{listStyleType:'none', paddingLeft:'10px', margin:'5px 0'}}>
                      <li style={{color:'#6fb2e6'}}><a href="#plumage-male" style={styles.link} onClick={(e)=>{e.preventDefault(); document.getElementById('plumage-male')?.scrollIntoView({behavior:'smooth', block:'start'});}}>5.1. Male</a></li>
                      <li style={{color:'#6fb2e6'}}><a href="#plumage-female" style={styles.link} onClick={(e)=>{e.preventDefault(); document.getElementById('plumage-female')?.scrollIntoView({behavior:'smooth', block:'start'});}}>5.2. Female</a></li>
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
                        <tr><th colSpan="2" style={{...styles.th, textAlign: 'center'}}>Askiy Ridge<sup style={{fontSize:'0.7rem', fontWeight:'normal'}}>[1]</sup></th></tr>
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

            {/* SHOT SCHEME */}
            <h2 id="shot-scheme" style={styles.h2}>Shot scheme</h2>
            <div style={{backgroundColor:'#0f2e48', padding: '10px'}}>
                <div style={{fontWeight:'bold', color: '#fff', paddingBottom: '5px', borderBottom: '1px solid #3a5a75'}}>Color code</div>
                  <div style={styles.shotContainer}>
                    <div style={styles.shotImage}>
                      <img src={DuskyGrouse_ShotScheme} alt="Dusky Grouse X-ray shot scheme" style={{maxWidth:'100%', maxHeight:'100%', objectFit: 'contain'}} />
                    </div>
                    <div style={styles.shotInfo}>
                      No Color - Every hit will kill the animal
                    </div>
                  </div>
            </div>

            {/* TIPS (removed) */}

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
                            Slate Gray (59.87%)<br/>
                            Brown (19.98%)<br/>
                            Molting (19.98%)
                        </td>
                        <td style={styles.td}>X</td>
                        <td style={styles.td}>X</td>
                        <td style={styles.td}>
                            Albino (0.05%)<br/>
                            Leucistic (0.05%)<br/>
                            Melanistic (0.05%)
                        </td>
                    </tr>
                     <tr>
                        <td style={{...styles.td, color: '#ff69b4', fontStyle: 'italic', fontWeight: 'bold'}}>Female</td>
                        <td style={styles.td}>
                            Grey Brown (99.74%)
                        </td>
                        <td style={styles.td}>X</td>
                        <td style={styles.td}>X</td>
                        <td style={styles.td}>
                            Albino (0.09%)<br/>
                            Leucistic (0.09%)<br/>
                            Melanistic (0.09%)
                        </td>
                    </tr>
                </tbody>
            </table>

            {/* TRIVIA (removed) */}
            
            <AnimalsTableMini />
          </main>
        </div>
      </div>
    </div>
  );
};

export default DuskyGrouse;