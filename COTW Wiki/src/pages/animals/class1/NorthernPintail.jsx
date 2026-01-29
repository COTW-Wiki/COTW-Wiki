import React from 'react';

// --- IMPORTS ---
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import class1Icon from '../../../assets/Class1Icon.webp';
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';
import NorthernPintailMain from '../../../assets/Northern_Pintail.webp';
import NorthernPintail_shot_scheme from '../../../assets/Northern_Pintail_shot_scheme.webp';

// Male Variants
import NorthernPintail_AlbinoMaleBack from '../../../assets/NorthernPintail_AlbinoMaleBack.webp';
import NorthernPintail_AlbinoMaleFront from '../../../assets/NorthernPintail_AlbinoMaleFront.webp';
import NorthernPintail_EclipseMaleBack from '../../../assets/NorthernPintail_EclipseMaleBack.webp';
import NorthernPintail_EclipseMaleFront from '../../../assets/NorthernPintail_EclipseMaleFront.webp';
import NorthernPintail_ErythristicMaleBack from '../../../assets/NorthernPintail_ErythristicMaleBack.webp';
import NorthernPintail_ErythristicMaleFront from '../../../assets/NorthernPintail_ErythristicMaleFront.webp';
import NorthernPintail_GreyMaleBack from '../../../assets/NorthernPintail_GreyMaleBack.webp';
import NorthernPintail_GreyMaleFront from '../../../assets/NorthernPintail_GreyMaleFront.webp';
import NorthernPintail_LeucisticMaleBack from '../../../assets/NorthernPintail_LeucisticMaleBack.webp';
import NorthernPintail_LeucisticMaleFront from '../../../assets/NorthernPintail_LeucisticMaleFront.webp';
import NorthernPintail_MelanisticMaleBack from '../../../assets/NorthernPintail_MelanisticMaleBack.webp';
import NorthernPintail_MelanisticMaleFront from '../../../assets/NorthernPintail_MelanisticMaleFront.webp';
import NorthernPintail_PiebaldMaleBack from '../../../assets/NorthernPintail_PiebaldMaleBack.webp';
import NorthernPintail_PiebaldMaleFront from '../../../assets/NorthernPintail_PiebaldMaleFront.webp';

// Female Variants
import NorthernPintail_AlbinoFemaleBack from '../../../assets/NorthernPintail_AlbinoFemaleBack.webp';
import NorthernPintail_AlbinoFemaleFront from '../../../assets/NorthernPintail_AlbinoFemaleFront.webp';
import NorthernPintail_BrightFemaleBack from '../../../assets/NorthernPintail_BrightFemaleBack.webp';
import NorthernPintail_BrightFemaleFront from '../../../assets/NorthernPintail_BrightFemaleFront.webp';
import NorthernPintail_BrownFemaleBack from '../../../assets/NorthernPintail_BrownFemaleBack.webp';
import NorthernPintail_BrownFemaleFront from '../../../assets/NorthernPintail_BrownFemaleFront.webp';
import NorthernPintail_ErythristicFemaleBack from '../../../assets/NorthernPintail_ErythristicFemaleBack.webp';
import NorthernPintail_ErythristicFemaleFront from '../../../assets/NorthernPintail_ErythristicFemaleFront.webp';
import NorthernPintail_LeucisticFemaleBack from '../../../assets/NorthernPintail_LeucisticFemaleBack.webp';
import NorthernPintail_LeucisticFemaleFront from '../../../assets/NorthernPintail_LeucisticFemaleFront.webp';
import NorthernPintail_MelanisticFemaleBack from '../../../assets/NorthernPintail_MelanisticFemaleBack.webp';
import NorthernPintail_MelanisticFemaleFront from '../../../assets/NorthernPintail_MelanisticFemaleFront.webp';
import NorthernPintail_PiebaldFemaleBack from '../../../assets/NorthernPintail_PiebaldFemaleBack.webp';
import NorthernPintail_PiebaldFemaleFront from '../../../assets/NorthernPintail_PiebaldFemaleFront.webp';

const NorthernPintail = () => {
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
    { label: "Behavior", value: "Generally calm, graceful, and alert" },
    { label: "Habitat", value: "Prefer wetlands, including shallow ponds, marshes, and lakes, often with tall grasses or reeds" },
    { label: "Senses", value: "Keen vision, highly sensitive hearing and limited sense of smell" },
    { label: "Social", value: "Generally social, tend to be less aggressive than other species, coexisting peacefully with other waterfowl" },
    { label: "Active", value: "Early morning and late afternoon" },
    { label: "Recommended Equipment", value: "Class 1 Ammo, Northern Pintail caller & decoys" },
    { label: "Species", value: "Anas acuta", italic: true },
    { label: "Difficulty", value: "Easy" },
  ];

  // Split male / female plumage variants and images
  const maleVariants = [
    'Albino Male - Front',
    'Albino Male - Back',
    'Eclipse Male - Front',
    'Eclipse Male - Back',
    'Erythristic Male - Front',
    'Erythristic Male - Back',
    'Grey Male - Front',
    'Grey Male - Back',
    'Leucistic Male - Front',
    'Leucistic Male - Back',
    'Melanistic Male - Front',
    'Melanistic Male - Back',
    'Piebald Male - Front',
    'Piebald Male - Back',
  ];

  const femaleVariants = [
    'Albino Female - Front',
    'Albino Female - Back',
    'Bright Female - Front',
    'Bright Female - Back',
    'Brown Female - Front',
    'Brown Female - Back',
    'Erythristic Female - Front',
    'Erythristic Female - Back',
    'Leucistic Female - Front',
    'Leucistic Female - Back',
    'Melanistic Female - Front',
    'Melanistic Female - Back',
    'Piebald Female - Front',
    'Piebald Female - Back',
  ];

  const maleImages = [
    NorthernPintail_AlbinoMaleFront,
    NorthernPintail_AlbinoMaleBack,
    NorthernPintail_EclipseMaleFront,
    NorthernPintail_EclipseMaleBack,
    NorthernPintail_ErythristicMaleFront,
    NorthernPintail_ErythristicMaleBack,
    NorthernPintail_GreyMaleFront,
    NorthernPintail_GreyMaleBack,
    NorthernPintail_LeucisticMaleFront,
    NorthernPintail_LeucisticMaleBack,
    NorthernPintail_MelanisticMaleFront,
    NorthernPintail_MelanisticMaleBack,
    NorthernPintail_PiebaldMaleFront,
    NorthernPintail_PiebaldMaleBack,
  ];

  const femaleImages = [
    NorthernPintail_AlbinoFemaleFront,
    NorthernPintail_AlbinoFemaleBack,
    NorthernPintail_BrightFemaleFront,
    NorthernPintail_BrightFemaleBack,
    NorthernPintail_BrownFemaleFront,
    NorthernPintail_BrownFemaleBack,
    NorthernPintail_ErythristicFemaleFront,
    NorthernPintail_ErythristicFemaleBack,
    NorthernPintail_LeucisticFemaleFront,
    NorthernPintail_LeucisticFemaleBack,
    NorthernPintail_MelanisticFemaleFront,
    NorthernPintail_MelanisticFemaleBack,
    NorthernPintail_PiebaldFemaleFront,
    NorthernPintail_PiebaldFemaleBack,
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
          <span>Northern Pintail</span>
          <div style={styles.editActions}>
          </div>
        </div>

        <div style={styles.layout}>
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside style={styles.sidebarColumn}>
            <div style={styles.sidebarHeader}>Northern Pintail</div>
            <div style={styles.sidebarImage}>
              <img src={NorthernPintailMain} alt="Northern Pintail" style={{width:'268px', height: '134px', objectFit: 'cover'}} />
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
                  <span>4.40</span>
                </div>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.gold}}>☗ Gold</span>
                  <span>6.80</span>
                </div>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.diamond}}>☗ Diamond</span>
                  <span>8.59</span>
                </div>
              </div>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Weight</span>
              3.2kg — 9.2kg<br/>
              7lbs — 20lbs
            </div>

            <div style={styles.sidebarSection}>
               <span style={styles.sidebarLabel}>Plumage</span>
               <span style={{fontSize:'0.85rem'}}>
                  Albino, Brown, Bright, Eclipse, Erythristic, Grey, Leucistic, Melanistic, Piebald
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
              "Elegant Northern Pintails swim through wetlands and lakes with their slender necks and long, pointed tails held high. Intricately patterned and pale-faced females join males fashioned with a signature white stripe down their chocolate-colored necks. These eager breeders head to the prairie pothole region of the Great Plains, as well as Canada, and Alaska to nest as soon as the ice breaks up.

              Large groups congregate in wetlands, lakes, bays, and even waddle through agricultural fields eating grains during the winter. Though still common, their populations are declining."
              <br/><br/>
              ― In-Game Description
            </div>

            {/* Intro Text */}
            <p style={{marginBottom:'20px'}}>
              The <strong>Northern Pintail</strong> is a <span style={styles.link}>class 1</span> animal that can be hunted on <span style={styles.link}>Askiy Ridge Hunting Preserve</span>.
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
                  <a href="#features" style={{color:'#6fb2e6', textDecoration:'none'}} onClick={(e)=>{e.preventDefault(); const el=document.getElementById('features'); if(el){el.scrollIntoView({behavior:'smooth', block:'start'}); window.history.replaceState(null,'', '#features');}}}>Features</a>
                </li>
                <li>
                  <a href="#need-zone-times" style={{color:'#6fb2e6', textDecoration:'none'}} onClick={(e)=>{e.preventDefault(); const el=document.getElementById('need-zone-times'); if(el){el.scrollIntoView({behavior:'smooth', block:'start'}); window.history.replaceState(null,'', '#need-zone-times');}}}>Need Zone Times</a>
                </li>
                <li>
                  <a href="#shot-scheme" style={{color:'#6fb2e6', textDecoration:'none'}} onClick={(e)=>{e.preventDefault(); const el=document.getElementById('shot-scheme'); if(el){el.scrollIntoView({behavior:'smooth', block:'start'}); window.history.replaceState(null,'', '#shot-scheme');}}}>Shot scheme</a>
                </li>
                <li>
                  <a href="#plumage-variants" style={{color:'#6fb2e6', textDecoration:'none'}} onClick={(e)=>{e.preventDefault(); const el=document.getElementById('plumage-variants'); if(el){el.scrollIntoView({behavior:'smooth', block:'start'}); window.history.replaceState(null,'', '#plumage-variants');}}}>Plumage Variants</a>
                  <ul style={{listStyleType: 'none', paddingLeft: '16px', marginTop: '6px', marginBottom: '6px', color: '#6fb2e6'}}>
                    <li style={{marginBottom: '4px'}}>
                      <a href="#plumage-male" style={{color:'#6fb2e6', textDecoration:'none'}} onClick={(e)=>{e.preventDefault(); const el=document.getElementById('plumage-male'); if(el){el.scrollIntoView({behavior:'smooth', block:'start'}); window.history.replaceState(null,'', '#plumage-male');}}}>4.1. Male</a>
                    </li>
                    <li style={{marginBottom: '4px'}}>
                      <a href="#plumage-female" style={{color:'#6fb2e6', textDecoration:'none'}} onClick={(e)=>{e.preventDefault(); const el=document.getElementById('plumage-female'); if(el){el.scrollIntoView({behavior:'smooth', block:'start'}); window.history.replaceState(null,'', '#plumage-female');}}}>4.2. Female</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#plumage-variant-rarity" style={{color:'#6fb2e6', textDecoration:'none'}} onClick={(e)=>{e.preventDefault(); const el=document.getElementById('plumage-variant-rarity'); if(el){el.scrollIntoView({behavior:'smooth', block:'start'}); window.history.replaceState(null,'', '#plumage-variant-rarity');}}}>Plumage Variant Rarity</a>
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
                        <tr><th colSpan="2" style={{...styles.th, textAlign: 'center'}}>Askiy Ridge</th></tr>
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
                    <div style={{...styles.shotImage, width: '500px', height: '444px'}}>
                      <img src={NorthernPintail_shot_scheme} alt="Northern Pintail X-ray shot scheme" style={{width:'500px', height: '444px', objectFit: 'contain'}} />
                    </div>
                    <div style={styles.shotInfo}>
                      No Color - Every hit will kill the animal
                    </div>
                  </div>
            </div>

            {/* PLUMAGE VARIANTS (Gallery) */}
            <h2 id="plumage-variants" style={styles.h2}>Plumage Variants</h2>
            <div>
              <div id="plumage-male" style={{marginBottom:'10px', fontWeight: '600', color: '#dbe4eb'}}>Male</div>
              <div style={styles.galleryGrid}>
                {maleVariants.map((name, i) => (
                  <div key={`m-${i}`} style={styles.galleryItem}>
                    <div style={styles.galleryImgPlaceholder}>
                      {maleImages[i] && <img src={maleImages[i]} alt={name} style={{width:'146px', height: '165px', objectFit: 'cover'}} />}
                    </div>
                    <span style={styles.galleryLabel}>{name}</span>
                  </div>
                ))}
              </div>

              <div id="plumage-female" style={{marginTop:'20px', marginBottom:'10px', fontWeight: '600', color: '#dbe4eb'}}>Female</div>
              <div style={styles.galleryGrid}>
                {femaleVariants.map((name, i) => (
                  <div key={`f-${i}`} style={styles.galleryItem}>
                    <div style={styles.galleryImgPlaceholder}>
                      {femaleImages[i] && <img src={femaleImages[i]} alt={name} style={{width:'146px', height: '165px', objectFit: 'cover'}} />}
                    </div>
                    <span style={styles.galleryLabel}>{name}</span>
                  </div>
                ))}
              </div>
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
                        <td style={{...styles.td, color: '#3498db', fontStyle: 'italic', fontWeight: 'bold'}}>Male</td>
                        <td style={styles.td}>
                            Grey (74.48%),<br/>
                            Eclipse (24.93%)
                        </td>
                        <td style={styles.td}>X</td>
                        <td style={styles.td}>Piebald (0.40%)</td>
                        <td style={styles.td}>
                            Albino (0.05%),<br/>
                            Erythristic (0.05%),<br/>
                            Leucistic (0.05%),<br/>
                            Melanistic (0.05%)
                        </td>
                    </tr>
                     <tr>
                        <td style={{...styles.td, color: '#ff69b4', fontStyle: 'italic', fontWeight: 'bold'}}>Female</td>
                        <td style={styles.td}>
                            Brown (74.48%),<br/>
                            Bright (24.93%)
                        </td>
                        <td style={styles.td}>X</td>
                        <td style={styles.td}>Piebald (0.40%)</td>
                        <td style={styles.td}>
                            Albino (0.05%),<br/>
                            Erythristic (0.05%),<br/>
                            Leucistic (0.05%),<br/>
                            Melanistic (0.05%)
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

export default NorthernPintail;