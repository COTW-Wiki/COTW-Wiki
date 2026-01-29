import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import class1Icon from '../../../assets/Class1Icon.webp';
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import EasternWildTurkeyMain from '../../../assets/EasternWildTurkey.webp';

// Shot Scheme
import EasternWildTurkey_ShotScheme from '../../../assets/Eastern_Wild_Turkey_shot_scheme.webp';

// Male Plumage Images
import EasternWildTurkey_AlbinoMale from '../../../assets/EasternWildTurkey_AlbinoMale.webp';
import EasternWildTurkey_BronzeMale from '../../../assets/EasternWildTurkey_BronzeMale.webp';
import EasternWildTurkey_BrownMale from '../../../assets/EasternWildTurkey_BrownMale.webp';
import EasternWildTurkey_LeucisticMale from '../../../assets/EasternWildTurkey_LeucisticMale.webp';
import EasternWildTurkey_LightBronzeMale from '../../../assets/EasternWildTurkey_LightBronzeMale.webp';
import EasternWildTurkey_LightBrownMale from '../../../assets/EasternWildTurkey_LightBrownMale.webp';
import EasternWildTurkey_MelanisticMale from '../../../assets/EasternWildTurkey_MelanisticMale.webp';

// Female Plumage Images
import EasternWildTurkey_AlbinoFemale from '../../../assets/EasternWildTurkey_AlbinoFemale.webp';
import EasternWildTurkey_BronzeFemale from '../../../assets/EasternWildTurkey_BronzeFemale.webp';
import EasternWildTurkey_BrownFemale from '../../../assets/EasternWildTurkey_BrownFemale.webp';
import EasternWildTurkey_LeucisticFemale from '../../../assets/EasternWildTurkey_LeucisticFemale.webp';
import EasternWildTurkey_LightBronzeFemale from '../../../assets/EasternWildTurkey_LightBronzeFemale.webp';
import EasternWildTurkey_LightBrownFemale from '../../../assets/EasternWildTurkey_LightBrownFemale.webp';
import EasternWildTurkey_MelanisticFemale from '../../../assets/EasternWildTurkey_MelanisticFemale.webp';


const EasternWildTurkey = () => {

  // --- DATA SOURCES ---

  // Need Zone Times (New England Mountains)
  const needZones = [
    { time: "00:00 - 04:00", type: "Resting", icon: RestingZoneIcon },
    { time: "04:00 - 08:00", type: "Feeding", icon: FeedingZoneIcon },
    { time: "08:00 - 11:00", type: "Feeding", icon: FeedingZoneIcon },
    { time: "11:00 - 14:00", type: "Resting", icon: RestingZoneIcon },
    { time: "14:00 - 17:00", type: "Feeding", icon: FeedingZoneIcon },
    { time: "17:00 - 20:00", type: "Feeding", icon: FeedingZoneIcon },
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Wary, shy" },
    { label: "Habitat", value: "Brushy areas near streams and rivers, forests" },
    { label: "Senses", value: "Strong movement vision and hearing, weak sense of smell" },
    { label: "Social", value: "Highly social and tend to gather near each other" },
    { label: "Active", value: "Daytime" },
    { label: "Recommended Equipment", value: "Class 1 Ammo, Turkey Decoys, Turkey Caller" },
    { label: "Species", value: "Meleagris gallopavo", italic: true, isLink: true },
    { label: "Difficulty", value: "Easy" },
  ];

  // Plumage Gallery Data
  // Note: Screenshots for Turkeys display single tiles per variant name rather than Front/Back pairs.
  const plumageGallery = {
    male: [
      { name: "Albino", src: EasternWildTurkey_AlbinoMale },
      { name: "Bronze", src: EasternWildTurkey_BronzeMale },
      { name: "Brown", src: EasternWildTurkey_BrownMale },
      { name: "Leucistic", src: EasternWildTurkey_LeucisticMale },
      { name: "Light Bronze", src: EasternWildTurkey_LightBronzeMale },
      { name: "Light Brown", src: EasternWildTurkey_LightBrownMale },
      { name: "Melanistic", src: EasternWildTurkey_MelanisticMale },
    ],
    female: [
      { name: "Albino", src: EasternWildTurkey_AlbinoFemale },
      { name: "Bronze", src: EasternWildTurkey_BronzeFemale },
      { name: "Brown", src: EasternWildTurkey_BrownFemale },
      { name: "Leucistic", src: EasternWildTurkey_LeucisticFemale },
      { name: "Light Bronze", src: EasternWildTurkey_LightBronzeFemale },
      { name: "Light Brown", src: EasternWildTurkey_LightBrownFemale },
      { name: "Melanistic", src: EasternWildTurkey_MelanisticFemale },
    ]
  };

  // Smooth-scroll helper for TOC links
  const scrollToId = (id) => (e) => {
    if (e && e.preventDefault) e.preventDefault();
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
          <span>Eastern Wild Turkey</span>
          <div style={styles.editActions}>
          </div>
        </div>

        <div style={styles.layout}>
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside style={styles.sidebarColumn}>
            <div style={styles.sidebarHeader}>Eastern Wild Turkey</div>
            <div style={styles.sidebarImage}>
              <img src={EasternWildTurkeyMain} alt="Eastern Wild Turkey" style={{width:'268px', height: '134px', objectFit: 'cover'}} />
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
              <span>Combined</span>
              <div style={styles.trophyGrid}>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.silver}}>◆ Silver</span>
                  <span>2.5</span>
                </div>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.gold}}>☗ Gold</span>
                  <span>3.7</span>
                </div>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.diamond}}>☗ Diamond</span>
                  <span>4.6</span>
                </div>
              </div>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Weight</span>
              3.6kg — 11kg<br/>
              8lbs — 24lbs
            </div>

            <div style={styles.sidebarSection}>
               <span style={styles.sidebarLabel}>Plumage</span>
               <span style={{fontSize:'0.85rem'}}>
                  Albino, Bronze, Brown, Leucistic, Light Bronze, Light Brown, Melanistic
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
              "The Eastern Wild Turkey was the first subspecies of turkey the Europeans encountered in the wild. It has a vast range, covering the entire eastern half of the United States from Maine to Florida and reaching Minnesota, Illinois, and into Missouri in the west. While there are different theories, one theory is that the turkey got its name from birds being imported to Britain from regions around Turkey. The eastern wild turkey is heavily hunted in the Eastern USA and is the most hunted wild turkey subspecies."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p style={{marginBottom:'20px'}}>
              The <strong>Eastern Wild Turkey</strong> is a species introduced in the <span style={styles.link}>Mississippi Acres Preserve</span> and also dwells on <span style={styles.link}>New England Mountains</span>. It is the third subspecies of Wild Turkey released in-game. The others being the <span style={styles.link}>Merriam Turkey</span>, and the <span style={styles.link}>Rio Grande Turkey</span>.
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
                <li><a href="#need-zone-times" style={styles.link} onClick={scrollToId('need-zone-times')}>Need Zone Times</a></li>
                <li><a href="#shot-scheme" style={styles.link} onClick={scrollToId('shot-scheme')}>Shot scheme</a></li>
                <li>Plumage Variants
                    <ul style={{listStyleType:'none', paddingLeft:'10px', margin:'5px 0'}}>
                        <li><a href="#plumage-male" style={styles.link} onClick={scrollToId('plumage-male')}>4.1 Male</a></li>
                        <li><a href="#plumage-female" style={styles.link} onClick={scrollToId('plumage-female')}>4.2 Female</a></li>
                    </ul>
                </li>
                <li><a href="#plumage-rarity" style={styles.link} onClick={scrollToId('plumage-rarity')}>Plumage Variant Rarity</a></li>
                <li><a href="#trivia" style={styles.link} onClick={scrollToId('trivia')}>Trivia</a></li>
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
                        <tr><th colSpan="2" style={{...styles.th, textAlign: 'center'}}>New England Mountains</th></tr>
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
                      <img src={EasternWildTurkey_ShotScheme} alt="Eastern Wild Turkey X-ray shot scheme" style={{maxWidth:'100%', maxHeight:'100%', objectFit: 'contain'}} />
                    </div>
                    <div style={styles.shotInfo}>
                      No Color - Every hit will kill the animal
                    </div>
                  </div>
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
                        <td style={{...styles.td, color: '#3498db', fontStyle: 'italic', fontWeight: 'bold'}}>Male / Female</td>
                        <td style={styles.td}>
                            Brown (37.35%)<br/>
                            Bronze (37.35%)<br/>
                            Light Brown (12.50%)<br/>
                            Light Bronze (12.50%)
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
            <h2 id="trivia" style={styles.h2}>Trivia</h2>
            <ul style={{paddingLeft:'20px', marginBottom: '30px'}}>
              <li style={{marginBottom:'8px'}}>The Turkey is the official State 'Game' Bird of 4 US States, making it the most popular state game bird. Specifically the states of Alabama, Massachusetts, Oklahoma, and South Carolina have officially recognized this bird as a state symbol.</li>
            </ul>

            <AnimalsTableMini />
          </main>
        </div>
      </div>
    </div>
  );
};

export default EasternWildTurkey;