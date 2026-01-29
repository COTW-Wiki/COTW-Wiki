import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import class1Icon from '../../../assets/Class1Icon.webp';
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import RioGrandeTurkeyMain from '../../../assets/RioGrandeTurkey.webp';

// Male Plumage Images
import RioGrandeTurkey_AlbinoMale from '../../../assets/RioGrandeTurkey_AlbinoMale.webp';
import RioGrandeTurkey_BrownMale from '../../../assets/RioGrandeTurkey_BrownMale.webp';
import RioGrandeTurkey_BuffMale from '../../../assets/RioGrandeTurkey_BuffMale.webp';
import RioGrandeTurkey_LeucisticMale from '../../../assets/RioGrandeTurkey_LeucisticMale.webp';
import RioGrandeTurkey_LightBrownMale from '../../../assets/RioGrandeTurkey_LightBrownMale.webp';
import RioGrandeTurkey_LightBuffMale from '../../../assets/RioGrandeTurkey_LightBuffMale.webp';
import RioGrandeTurkey_MelanisticMale from '../../../assets/RioGrandeTurkey_MelanisticMale.webp';

// Female Plumage Images
import RioGrandeTurkey_AlbinoFemale from '../../../assets/RioGrandeTurkey_AlbinoFemale.webp';
import RioGrandeTurkey_BrownFemale from '../../../assets/RioGrandeTurkey_BrownFemale.webp';
import RioGrandeTurkey_BuffFemale from '../../../assets/RioGrandeTurkey_BuffFemale.webp';
import RioGrandeTurkey_LeucisticFemale from '../../../assets/RioGrandeTurkey_LeucisticFemale.webp';
import RioGrandeTurkey_LightBrownFemale from '../../../assets/RioGrandeTurkey_LightBrownFemale.webp';
import RioGrandeTurkey_LightBuffFemale from '../../../assets/RioGrandeTurkey_LightBuffFemale.webp';
import RioGrandeTurkey_MelanisticFemale from '../../../assets/RioGrandeTurkey_MelanisticFemale.webp';


const RioGrandeTurkey = () => {

  // --- DATA SOURCES ---

  // Need Zone Times (Rancho del Arroyo)
  // Data source: Екранна снимка 2026-01-16 121137.png
  const needZonesData = [
    {
      name: "Rancho del Arroyo", // Inferred context
      schedule: [
        { time: "00:00-04:30", type: "Resting", icon: RestingZoneIcon },
        { time: "04:00-07:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "07:00-11:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "11:00-14:00", type: "Resting", icon: RestingZoneIcon },
        { time: "14:00-17:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "17:00-21:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "21:00-00:30", type: "Resting", icon: RestingZoneIcon },
      ]
    }
  ];

  // Features Table
  // Data source: Екранна снимка 2026-01-16 121129.png
  const features = [
    { label: "Behavior", value: "Wary, shy" },
    { label: "Habitat", value: "Brushy areas near streams and rivers, forests" },
    { label: "Senses", value: "Strong movement, vision, and hearing; weak sense of smell" },
    { label: "Social", value: "Highly social and tend to gather near each other" },
    { label: "Active", value: "Daytime" },
    { label: "Recommended Equipment", value: "Class 1 Ammo, Turkey Decoys, Turkey Caller" },
    { label: "Species", value: "Meleagris gallopavo", italic: true, isLink: true },
    { label: "Difficulty", value: "Easy" },
  ];

  // Plumage Gallery Data
  // Data source: Екранна снимка 2026-01-16 121153.jpg, 121205.jpg, 121223.jpg, 121231.jpg
  const plumageGallery = {
    male: [
      { name: "Albino", src: RioGrandeTurkey_AlbinoMale },
      { name: "Brown", src: RioGrandeTurkey_BrownMale },
      { name: "Buff", src: RioGrandeTurkey_BuffMale },
      { name: "Leucistic", src: RioGrandeTurkey_LeucisticMale },
      { name: "Light Brown", src: RioGrandeTurkey_LightBrownMale },
      { name: "Light Buff", src: RioGrandeTurkey_LightBuffMale },
      { name: "Melanistic", src: RioGrandeTurkey_MelanisticMale },
    ],
    female: [
      { name: "Albino", src: RioGrandeTurkey_AlbinoFemale },
      { name: "Brown", src: RioGrandeTurkey_BrownFemale },
      { name: "Buff", src: RioGrandeTurkey_BuffFemale },
      { name: "Leucistic", src: RioGrandeTurkey_LeucisticFemale },
      { name: "Light Brown", src: RioGrandeTurkey_LightBrownFemale },
      { name: "Light Buff", src: RioGrandeTurkey_LightBuffFemale },
      { name: "Melanistic", src: RioGrandeTurkey_MelanisticFemale },
    ]
  };

  // --- SCROLL HELPER ---
  const scrollToId = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // --- STYLES OBJECT (Identical to MerriamTurkey) ---
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
          <span>Rio Grande Turkey</span>
          <div style={styles.editActions}>
          </div>
        </div>

        <div style={styles.layout}>
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside style={styles.sidebarColumn}>
            <div style={styles.sidebarHeader}>Rio Grande Turkey</div>
            <div style={styles.sidebarImage}>
              <img src={RioGrandeTurkeyMain} alt="Rio Grande Turkey" style={{width:'268px', height: '134px', objectFit: 'cover'}} />
            </div>
            
            <div style={styles.sidebarHeader}>General Information</div>
            
            {/* Class */}
            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Class</span>
              <span><img src={class1Icon} alt="Class 1" style={{width:'20px', height:'20px', verticalAlign: 'middle', marginRight: '6px'}}/>1</span>
            </div>

            {/* Difficulty */}
            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Difficulty</span>
              <span>1: Trivial — 3: Very Easy</span>
            </div>

            {/* Trophy Type (Updated scores for Rio Grande) */}
            {/* Source: Екранна снимка 2026-01-16 121047.jpg */}
            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Trophy Type</span>
              <span>Combined</span>
              <div style={styles.trophyGrid}>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.silver}}>◆ Silver</span>
                  <span>3.3</span>
                </div>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.gold}}>☗ Gold</span>
                  <span>4.0</span>
                </div>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.diamond}}>☗ Diamond</span>
                  <span>4.6</span>
                </div>
              </div>
            </div>

            {/* Weight */}
            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Weight</span>
              3.6kg — 11kg<br/>
              8lbs — 24lbs
            </div>

            {/* Plumage List */}
            {/* Source: Екранна снимка 2026-01-16 121047.jpg */}
            <div style={styles.sidebarSection}>
               <span style={styles.sidebarLabel}>Plumage</span>
               <span style={{fontSize:'0.85rem'}}>
                  Albino, Buff, Brown, Leucistic, Light Brown, Light Buff, Light Copper, Melanistic
               </span>
            </div>

            {/* Locations */}
            <div style={styles.sidebarHeader}>Locations</div>
            <div style={styles.sidebarSection}>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Rancho del Arroyo</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main style={styles.mainColumn}>

            {/* Quote Block */}
            {/* Source: Екранна снимка 2026-01-16 121047.jpg */}
            <div style={styles.quoteBox}>
              "Named after the famous Rio Grande River , this wild turkey subspecies is not as dark as its Merriam cousin and has longer legs. Its overall color is coppery hue with yellowish-tan tail tips, lighter than the Eastern and Osceola Subspecies but darker than the Merriam. The Rio Grande is largely found in the south-central United States and northern Mexico. Nomadic, it has been observed that this opportunistic feeder can travel more than 16.00 km from one feeding ground to another. Highly adaptable, it thrives in various climates and habitats. While these birds may be found at an elevation of up to 1.809 km, they tend to stick around brush areas near streams and rivers."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            {/* Source: Екранна снимка 2026-01-16 121047.jpg */}
            <p style={{marginBottom:'20px'}}>
              The <strong>Rio Grande Turkey</strong> is the second of three Turkey sub-species huntable in game; the others are the <span style={styles.link}>Merriam Turkey</span> and the <span style={styles.link}>Eastern Wild Turkey</span>. It can be found on <span style={styles.link}>Rancho Del Arroyo</span> and it has a slightly more blue head and a plumage type called buff.
            </p>

            {/* Table of Contents Placeholder */}
            {/* Source: Екранна снимка 2026-01-16 121047.jpg */}
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
                <li><a href="#need-zones" onClick={scrollToId('need-zones')} style={styles.link}>Need Zones (Times)</a></li>
                <li>
                  <a href="#plumage-variants" onClick={scrollToId('plumage-variants')} style={styles.link}>Plumage Variants</a>
                  <ul style={{listStyleType:'none', paddingLeft:'10px', margin:'5px 0'}}>
                      <li style={{color:'#6fb2e6'}}><a href="#plumage-male" onClick={scrollToId('plumage-male')} style={styles.link}>3.1. Male</a></li>
                      <li style={{color:'#6fb2e6'}}><a href="#plumage-female" onClick={scrollToId('plumage-female')} style={styles.link}>3.2. Female</a></li>
                  </ul>
                </li>
                <li><a href="#plumage-rarity" onClick={scrollToId('plumage-rarity')} style={styles.link}>Plumage Variant Rarity</a></li>
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
                        {item.isLink ? <span style={styles.link}>{item.value}</span> : <span dangerouslySetInnerHTML={{ __html: item.value }} />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            {/* NEED ZONE TIMES */}
            {/* Source: Екранна снимка 2026-01-16 121137.png */}
            <h2 id="need-zones" style={styles.h2}>Need Zones (Times)</h2>
            <div style={{display:'flex', gap:'5px', flexWrap: 'wrap'}}>
                {needZonesData.map((zoneData, idx) => (
                  <div key={idx} style={{flex: '0 1 300px'}}>
                    <table style={{...styles.table, marginBottom: 0}}>
                        <thead>
                            <tr>
                                <th style={{...styles.th, backgroundColor: '#0f2e48', textAlign: 'center'}}>Times</th>
                                <th style={{...styles.th, backgroundColor: '#0f2e48', textAlign: 'center'}}>Activity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {zoneData.schedule.map((zone, i) => (
                            <tr key={i}>
                                <td style={{...styles.td, textAlign: 'center'}}>{zone.time}</td>
                                <td style={{...styles.td, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                    <img src={zone.icon} alt={zone.type} style={{width:'20px', height: '20px', verticalAlign: 'middle', marginRight: '6px'}}/> {zone.type}
                                </td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                  </div>
                ))}
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
            {/* Source: Екранна снимка 2026-01-16 121243.jpg */}
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
                        <td style={{...styles.td, color: '#3498db', fontStyle: 'italic', fontWeight: 'bold'}}>
                            Male/<span style={{color: '#d63384'}}>Female</span>
                        </td>
                        <td style={styles.td}>
                            Brown (37.35%)<br/>
                            Buff (37.35%)<br/>
                            Light Brown (12.50%)<br/>
                            Light Buff (12.50%)
                        </td>
                        <td style={styles.td}>X</td>
                        <td style={styles.td}>
                            Leucistic (0.20%)
                        </td>
                        <td style={styles.td}>
                            Albino (0.05%)<br/>
                            Melanistic (0.05%)
                        </td>
                    </tr>
                </tbody>
            </table>

            {/* TRIVIA */}
            {/* Source: Екранна снимка 2026-01-16 121243.jpg */}
            <h2 id="trivia" style={styles.h2}>Trivia</h2>
            <ul style={{paddingLeft:'20px', marginBottom: '30px'}}>
              <li style={{marginBottom:'8px'}}>"Pavo" is Spanish for Turkey.</li>
              <li style={{marginBottom:'8px'}}>The <strong>Rio Grande Turkey</strong> is the second Turkey sub-species to be introduced to the game, causing the "Merriam Turkey"s" name change.</li>
              <li style={{marginBottom:'8px'}}>It is one of 3 huntable turkey species in the game. The others are the <span style={styles.link}>Merriam Turkey</span>, and the <span style={styles.link}>Eastern Wild Turkey</span>.</li>
              <li style={{marginBottom:'8px'}}>The <strong>Rio Grande Turkey</strong> can be distinguished from the Merriam Turkey by the color of its feather tips. Generally, <strong>Rio Grande Turkey</strong> have tanner "Buff" tips compared to the Merriam snow-white tips.</li>
            </ul>

            <AnimalsTableMini />
          </main>
        </div>
      </div>
    </div>
  );
};

export default RioGrandeTurkey;