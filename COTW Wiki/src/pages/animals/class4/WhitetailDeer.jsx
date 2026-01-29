import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import DrinkingZoneIcon from '../../../assets/DrinkingZoneIcon.webp';
import class4Icon from '../../../assets/Class4Icon.webp'; // Class 4 for Whitetail Deer
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import WhitetailDeerMain from '../../../assets/WhitetailDeer.webp';
import ShotSchemeImage from '../../../assets/Whitetail_deer_shot_scheme.webp';

// Fur Variant Images (Placeholders)
import WhitetailDeer_AlbinoMaleRightSide from '../../../assets/WhitetailDeer_AlbinoMaleRightSide.webp';
import WhitetailDeer_BrownMaleRightSide from '../../../assets/WhitetailDeer_BrownMaleRightSide.webp';
import WhitetailDeer_DarkBrownMaleRightSide from '../../../assets/WhitetailDeer_DarkBrownMaleRightSide.webp';
import WhitetailDeer_MelanisticMaleRightSide from '../../../assets/WhitetailDeer_MelanisticMaleRightSide.webp';
import WhitetailDeer_PiebaldMaleRightSide from '../../../assets/WhitetailDeer_PiebaldMaleRightSide.webp';
import WhitetailDeer_PiebaldMaleLeftSide from '../../../assets/WhitetailDeer_PiebaldMaleLeftSide.webp';
import WhitetailDeer_TanMaleRightSide from '../../../assets/WhitetailDeer_TanMaleRightSide.webp';

import WhitetailDeer_AlbinoFemaleRightSide from '../../../assets/WhitetailDeer_AlbinoFemaleRightSide.webp';
import WhitetailDeer_BrownFemaleRightSide from '../../../assets/WhitetailDeer_BrownFemaleRightSide.webp';
import WhitetailDeer_DarkBrownFemaleRightSide from '../../../assets/WhitetailDeer_DarkBrownFemaleRightSide.webp';
import WhitetailDeer_MelanisticFemaleRightSide from '../../../assets/WhitetailDeer_MelanisticFemaleRightSide.webp';
import WhitetailDeer_PiebaldFemaleRightSide from '../../../assets/WhitetailDeer_PiebaldFemaleRightSide.webp';
import WhitetailDeer_PiebaldFemaleLeftSide from '../../../assets/WhitetailDeer_PiebaldFemaleLeftSide.webp';
import WhitetailDeer_RedBrownFemaleRightSide from '../../../assets/WhitetailDeer_RedBrownFemaleRightSide.webp';

// Great One Fur Variants (Placeholders)
import WhitetailDeer_FabledBrownRightSide from '../../../assets/WhitetailDeer_FabledBrownRightSide.webp';
import WhitetailDeer_FabledDarkBrownRightSide from '../../../assets/WhitetailDeer_FabledDarkBrownRightSide.webp';
import WhitetailDeer_FabledPiebaldRightSide from '../../../assets/WhitetailDeer_FabledPiebaldRightSide.webp';
import WhitetailDeer_FabledPiebaldLeftSide from '../../../assets/WhitetailDeer_FabledPiebaldLeftSide.webp';
import WhitetailDeer_FabledTanRightSide from '../../../assets/WhitetailDeer_FabledTanRightSide.webp';


const WhitetailDeer = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  const needZonesData = [
    {
      name: "Layton Lake, New England & Revontuli",
      schedule: [
        { time: "00:00 - 04:00", type: "Resting", icon: RestingZoneIcon },
        { time: "04:00 - 08:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "08:00 - 12:00", type: "Drinking", icon: DrinkingZoneIcon },
        { time: "12:00 - 16:00", type: "Resting", icon: RestingZoneIcon },
        { time: "16:00 - 20:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "20:00 - 24:00", type: "Resting", icon: RestingZoneIcon },
      ]
    },
    {
      name: "Rancho del Arroyo & Mississippi",
      schedule: [
        { time: "00:00 - 04:00", type: "Resting", icon: RestingZoneIcon },
        { time: "04:00 - 08:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "08:00 - 11:00", type: "Drinking", icon: DrinkingZoneIcon },
        { time: "11:00 - 14:00", type: "Resting", icon: RestingZoneIcon },
        { time: "14:00 - 21:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "21:00 - 24:00", type: "Resting", icon: RestingZoneIcon },
      ]
    },
    {
      name: "Askiy Ridge",
      schedule: [
        { time: "00:00 - 04:00", type: "Resting", icon: RestingZoneIcon },
        { time: "04:00 - 08:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "08:00 - 12:00", type: "Drinking", icon: DrinkingZoneIcon },
        { time: "12:00 - 16:00", type: "Resting", icon: RestingZoneIcon },
        { time: "16:00 - 20:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "16:00 - 00:00", type: "Feeding", icon: FeedingZoneIcon }, 
      ]
    }
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Docile and somewhat skittish" },
    { label: "Habitat", value: "Prefer to live in forests" },
    { label: "Senses", value: "Excellent sense of smell" },
    { label: "Social", value: "Are mostly solitary, but can be found in small and medium-sized groups" },
    { label: "Active", value: "During dawn, late afternoon and dusk" },
    { label: "Recommended Equipment", value: "Class 4 Ammo, Deer \"Bleat\" Caller, Deer \"Grunt\" Caller, Whitetail Deer Scent" },
    { label: "Species", value: "Odocoileus virginianus", italic: true, isLink: true },
    { label: "Difficulty", value: "Average" },
  ];

  // Fur Gallery Data — separate male and female galleries using imported images
  const maleGallery = [
    { name: "Albino", src: WhitetailDeer_AlbinoMaleRightSide },
    { name: "Brown", src: WhitetailDeer_BrownMaleRightSide },
    { name: "Dark Brown", src: WhitetailDeer_DarkBrownMaleRightSide },
    { name: "Melanistic", src: WhitetailDeer_MelanisticMaleRightSide },
    { name: "Piebald (Right)", src: WhitetailDeer_PiebaldMaleRightSide },
    { name: "Piebald (Left)", src: WhitetailDeer_PiebaldMaleLeftSide },
    { name: "Tan", src: WhitetailDeer_TanMaleRightSide },
  ];

  const femaleGallery = [
    { name: "Albino", src: WhitetailDeer_AlbinoFemaleRightSide },
    { name: "Brown", src: WhitetailDeer_BrownFemaleRightSide },
    { name: "Dark Brown", src: WhitetailDeer_DarkBrownFemaleRightSide },
    { name: "Melanistic", src: WhitetailDeer_MelanisticFemaleRightSide },
    { name: "Piebald (Right)", src: WhitetailDeer_PiebaldFemaleRightSide },
    { name: "Piebald (Left)", src: WhitetailDeer_PiebaldFemaleLeftSide },
    { name: "Red Brown", src: WhitetailDeer_RedBrownFemaleRightSide },
  ];

  // Great One Fur Gallery Data — use imported fabled variants
  const greatOneGallery = [
    { name: "Fabled Brown", src: WhitetailDeer_FabledBrownRightSide },
    { name: "Fabled Dark Brown", src: WhitetailDeer_FabledDarkBrownRightSide },
    { name: "Fabled Piebald (Right)", src: WhitetailDeer_FabledPiebaldRightSide },
    { name: "Fabled Piebald (Left)", src: WhitetailDeer_FabledPiebaldLeftSide },
    { name: "Fabled Tan", src: WhitetailDeer_FabledTanRightSide },
  ];

  // Trivia Data
  const triviaData = [
    "The Whitetail Deer is (together with the Blacktail Deer) the first animal species to be updated with TruRACS, and the first to become a Great One.",
    "The word \"Deer\" is of Old English origin, and was used to describe any four legged animal.",
    "The Whitetail Deer is the most popular 'State Animal' in America, with AR (Arkansas), IL (Illinois), MS (Mississippi), NE (Nebraska), NH (New Hampshire), OH (Ohio), PA (Pennsylvania), and SC (South Carolina) all designating the Deer as their Official State Animal.",
    "Despite its species name (virginianus), the state of Virginia does not recognize the Whitetail as a state symbol.",
    "It is quite possibly, the most popular game animal in North America. An estimated $15.7 Billion is spent annually on Whitetail Hunting in the United States ALONE!",
    "In early March 2021, the Great One whitetail deer was bugged where it would show up as a level 4 or 5."
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
    greatOne: { color: '#2ecc71', fontWeight: 'bold' },
    
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

  // Smooth-scrolling helper for TOC links
  const scrollToId = (e, id) => {
    if (e && e.preventDefault) e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      try {
        window.history.replaceState(null, '', `#${id}`);
      } catch (err) {
        // ignore
      }
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.innerWrapper}>
        
        {/* PAGE HEADER */}
        <div style={styles.mainHeader}>
          <span>Whitetail Deer</span>
        </div>

        <div style={styles.layout}>
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside style={styles.sidebarColumn}>
            <div style={styles.sidebarHeader}>Whitetail Deer</div>
            <div style={styles.sidebarImage}>
              <img src={WhitetailDeerMain} alt="Whitetail Deer" style={{width:'100%', height: '100%', objectFit: 'cover'}} />
            </div>
            
            <div style={styles.sidebarHeader}>General Information</div>
            
            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Class</span>
              <span><img src={class4Icon} alt="Class 4" style={{width:'24px', height:'24px', verticalAlign: 'middle', marginRight: '6px'}}/>4</span>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Difficulty</span>
              <span>1: Trivial — 3: Very Easy</span><br/>
              <span>10: Fabled</span>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Trophy Type</span>
              <span>Antlers</span>
              <div style={styles.trophyGrid}>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.silver}}>◆ Silver</span>
                  <span>112.05</span>
                </div>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.gold}}>☗ Gold</span>
                  <span>193.79</span>
                </div>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.diamond}}>☗ Diamond</span>
                  <span>255.09</span>
                </div>
              </div>
              <div style={{textAlign: 'center', marginTop: '10px'}}>
                 <span style={{...styles.trophyLabel, ...styles.greatOne}}>✤ Great One</span>
              </div>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Weight</span>
              40kg — 100kg<br/>
              <span style={{color: '#88a0b8', fontSize: '0.85rem'}}>88lbs — 220lbs</span>
            </div>

            <div style={styles.sidebarSection}>
               <span style={styles.sidebarLabel}>Fur</span>
               <span style={{fontSize:'0.85rem'}}>
                 Albino, Brown, Dark-Brown, Melanistic, Piebald, Red-Brown, Tan
               </span>
            </div>

            <div style={styles.sidebarHeader}>Locations</div>
            <div style={styles.sidebarSection}>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Layton Lake District</span></div>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Rancho del Arroyo</span></div>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Mississippi Acres Preserve</span></div>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Revontuli Coast</span></div>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>New England Mountains</span></div>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Askiy Ridge Hunting Preserve</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main style={styles.mainColumn}>

            {/* Quote Block */}
            <div style={styles.quoteBox}>
              "The whitetail deer is one of the most common native deer species in North America with a population numbering in the millions. It is a medium-sized deer, characterized by the white underside of its tail that can easily be seen when the deer is alarmed. Its fur color ranges from red-brown to grey-brown. Whitetail deer vary quite a lot in size. Bucks weigh in from 45 - 100 kg (100 - 275 lb) and also develop medium-sized antlers that can branch into several points along one main beam. Whitetails are highly adaptive herbivores. They thrive in mixed and deciduous woodlands, forested wetlands and woods bordering farmlands. Here they feed on a variety of plant species ranging from grasses and leaves to various crops and wildflowers. They do not pose a threat to humans and can run up to speeds of 75 km (47 mi) per hour when scared. They can also leap over obstacles as high as 2.70 m (8.9 ft)."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p style={{marginBottom:'20px'}}>
              The <strong>Whitetail Deer</strong> is a medium sized deer (<span style={styles.link}>class 4</span>), that can be hunted on <span style={styles.link}>Layton Lake District</span>, <span style={styles.link}>Rancho del Arroyo</span>, <span style={styles.link}>Mississippi Acres Preserve</span>, <span style={styles.link}>Revontuli Coast</span>, <span style={styles.link}>New England Mountains</span> and <span style={styles.link}>Askiy Ridge Hunting Preserve</span>. It is also one of the first 'original' animals huntable in game, as it launched with <em>theHunter: Call of the Wild</em> in 2016.
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
                <li><a href="#features" style={styles.link} onClick={(e) => scrollToId(e, 'features')}>Features</a></li>
                <li><a href="#need-zones" style={styles.link} onClick={(e) => scrollToId(e, 'need-zones')}>Need Zone Times</a></li>
                <li><a href="#shot-scheme" style={styles.link} onClick={(e) => scrollToId(e, 'shot-scheme')}>Shot scheme</a></li>
                <li>
                  <a href="#fur-variants" style={styles.link} onClick={(e) => scrollToId(e, 'fur-variants')}>Fur Variants</a>
                  <ol style={{margin:'6px 0 0 14px', padding:'0', color:'#9ed3f5', listStyle: 'none'}}>
                    <li><a href="#fur-male" style={styles.link} onClick={(e) => scrollToId(e, 'fur-male')}>4.1 Male</a></li>
                    <li><a href="#fur-female" style={styles.link} onClick={(e) => scrollToId(e, 'fur-female')}>4.2 Female</a></li>
                  </ol>
                </li>
                <li><a href="#fur-great-ones" style={styles.link} onClick={(e) => scrollToId(e, 'fur-great-ones')}>Fur Variants | Great Ones</a></li>
                <li><a href="#variant-rarity" style={styles.link} onClick={(e) => scrollToId(e, 'variant-rarity')}>Fur Variant Rarity</a></li>
                <li><a href="#trivia" style={styles.link} onClick={(e) => scrollToId(e, 'trivia')}>Trivia</a></li>
                <li><a href="#references" style={styles.link} onClick={(e) => scrollToId(e, 'references')}>References</a></li>
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
            <div style={{display:'flex', gap: '20px', flexWrap: 'wrap'}}>
                {needZonesData.map((mapData, index) => (
                    <div key={index} style={{flex: '1 1 300px'}}>
                        <table style={styles.table}>
                            <thead>
                                <tr><th colSpan="2" style={{...styles.th, textAlign: 'center'}}>{mapData.name}</th></tr>
                                <tr>
                                    <th style={{...styles.th, backgroundColor: '#0f2e48'}}>Times</th>
                                    <th style={{...styles.th, backgroundColor: '#0f2e48'}}>Activity</th>
                                </tr>
                            </thead>
                            <tbody>
                                {mapData.schedule.map((zone, i) => (
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
                ))}
            </div>

             {/* SHOT SCHEME */}
             <h2 id="shot-scheme" style={styles.h2}>Shot scheme</h2>
            <div style={styles.shotContainer}>
                <div style={styles.shotImageWrapper}>
                   <img src={ShotSchemeImage} alt="Shot Scheme" style={{width: '100%', height: 'auto', maxHeight:'350px', objectFit: 'contain'}} />
                </div>
                <div style={styles.shotLegend}>
                   <div style={styles.legendHeader}>Color code</div>
                   <div style={styles.legendItem}>Red - Kills immediately</div>
                   <div style={styles.legendItem}>Blue - Kills very quick</div>
                   <div style={styles.legendItem}>Orange - Kills slowly</div>
                   <div style={{...styles.legendItem, borderBottom: 'none'}}>No Color - Unlikely to kill</div>
                </div>
            </div>

            {/* FUR VARIANTS */}
            <h2 id="fur-variants" style={styles.h2}>Fur Variants</h2>

            <h3 id="fur-male" style={{color: '#6fb2e6', marginTop: '12px'}}>Male</h3>
            <div style={styles.galleryGrid}>
              {maleGallery.map((item, i) => (
                <div key={i} style={styles.galleryItem}>
                  <div style={styles.galleryImgPlaceholder}>
                    <img src={item.src} alt={item.name} style={{width:'100%', height: '100%', objectFit: 'contain'}} />
                  </div>
                  <span style={styles.galleryLabel}>{item.name}</span>
                </div>
              ))}
            </div>

            <h3 id="fur-female" style={{color: '#6fb2e6', marginTop: '18px'}}>Female</h3>
            <div style={styles.galleryGrid}>
              {femaleGallery.map((item, i) => (
                <div key={i} style={styles.galleryItem}>
                  <div style={styles.galleryImgPlaceholder}>
                    <img src={item.src} alt={item.name} style={{width:'100%', height: '100%', objectFit: 'contain'}} />
                  </div>
                  <span style={styles.galleryLabel}>{item.name}</span>
                </div>
              ))}
            </div>

            {/* GREAT ONE FUR VARIANTS */}
            <h2 id="fur-great-ones" style={styles.h2}>Fur Variants | Great Ones</h2>
            <div style={styles.galleryGrid}>
              {greatOneGallery.map((item, i) => (
                <div key={i} style={styles.galleryItem}>
                  <div style={styles.galleryImgPlaceholder}>
                    <img src={item.src} alt={item.name} style={{width:'100%', height: '100%', objectFit: 'contain'}} />
                  </div>
                  <span style={styles.galleryLabel}>{item.name}</span>
                </div>
              ))}
            </div>

            {/* FUR VARIANT RARITY TABLE */}
            <h2 id="variant-rarity" style={styles.h2}>Fur Variant Rarity</h2>
            <div style={{overflowX: 'auto'}}>
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
                                Male
                            </td>
                            <td style={styles.td}>
                                Brown (33.23%)<br/>
                                Dark Brown (33.23%)<br/>
                                Tan (33.23%)
                            </td>
                            <td style={styles.td}>X</td>
                            <td style={styles.td}>
                                Piebald (0.20%)
                            </td>
                            <td style={styles.td}>
                                Albino (0.05%)<br/>
                                Melanistic (0.05%)
                            </td>
                        </tr>
                        <tr>
                            <td style={{...styles.td, color: '#d63384', fontStyle: 'italic', fontWeight: 'bold'}}>
                                Female
                            </td>
                            <td style={styles.td}>
                                Brown (33.23%)<br/>
                                Dark Brown (33.23%)<br/>
                                Red Brown (33.23%)
                            </td>
                            <td style={styles.td}>X</td>
                            <td style={styles.td}>
                                Piebald (0.20%)
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
            <ul style={{fontSize: '0.95rem', paddingLeft: '20px', listStyleType: 'disc', color: '#dbe4eb'}}>
              <li style={{marginBottom: '8px'}}>Whitetail Deer Need Zones, Askiy Ridge</li>
              <li style={{marginBottom: '6px'}}><a href="https://www.merriam-webster.com/dictionary/deer" target="_blank" rel="noopener noreferrer" style={styles.link}>https://www.merriam-webster.com/dictionary/deer</a></li>
              <li style={{marginBottom: '6px'}}><a href="https://www.etymonline.com/word/deer" target="_blank" rel="noopener noreferrer" style={styles.link}>https://www.etymonline.com/word/deer</a></li>
              <li style={{marginBottom: '6px'}}><a href="https://tpwd.texas.gov/huntwild/wild/game_management/deer/" target="_blank" rel="noopener noreferrer" style={styles.link}>https://tpwd.texas.gov/huntwild/wild/game_management/deer/</a></li>
              <li style={{marginBottom: '6px'}}><a href="https://www.ckwri.tamuk.edu/news-events/hunters-and-conservation-and-management-white-tailed-deer" target="_blank" rel="noopener noreferrer" style={styles.link}>https://www.ckwri.tamuk.edu/news-events/hunters-and-conservation-and-management-white-tailed-deer</a></li>
              <li style={{marginTop: '8px'}}>WE FOUND THE GREAT ONE And It Was A Bugged Level 5...</li>
            </ul>

            <div style={{marginTop: '40px'}}>
                <AnimalsTableMini />
            </div>
            
          </main>
        </div>
      </div>
    </div>
  );
};

export default WhitetailDeer;