import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import class1Icon from '../../../assets/Class1Icon.webp';
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import StubbleQuailMain from '../../../assets/StubbleQuail.webp';

// Shot Scheme
import StubbleQuail_ShotScheme from '../../../assets/Stubble_Quail_shot_scheme.webp';

// Male Plumage Images
import StubbleQuail_AlbinoMaleFront from '../../../assets/StubbleQuail_AlbinoMaleFront.webp';
import StubbleQuail_AlbinoMaleBack from '../../../assets/StubbleQuail_AlbinoMaleBack.webp';
import StubbleQuail_BrownMaleFront from '../../../assets/StubbleQuail_BrownMaleFront.webp';
import StubbleQuail_BrownMaleBack from '../../../assets/StubbleQuail_BrownMaleBack.webp';
import StubbleQuail_DarkBrownMaleFront from '../../../assets/StubbleQuail_DarkBrownMaleFront.webp';
import StubbleQuail_DarkBrownMaleBack from '../../../assets/StubbleQuail_DarkBrownMaleBack.webp';
import StubbleQuail_GreyBrownMaleFront from '../../../assets/StubbleQuail_GreyBrownMaleFront.webp';
import StubbleQuail_GreyBrownMaleBack from '../../../assets/StubbleQuail_GreyBrownMaleBack.webp';

// Female Plumage Images
import StubbleQuail_AlbinoFemaleFront from '../../../assets/StubbleQuail_AlbinoFemaleFront.webp';
import StubbleQuail_AlbinoFemaleBack from '../../../assets/StubbleQuail_AlbinoFemaleBack.webp';
import StubbleQuail_GreyFemaleFront from '../../../assets/StubbleQuail_GreyFemaleFront.webp';
import StubbleQuail_GreyFemaleBack from '../../../assets/StubbleQuail_GreyFemaleBack.webp';
import StubbleQuail_GreyBrownFemaleFront from '../../../assets/StubbleQuail_GreyBrownFemaleFront.webp';
import StubbleQuail_GreyBrownFemaleBack from '../../../assets/StubbleQuail_GreyBrownFemaleBack.webp';


const StubbleQuail = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  const needZones = [
    { time: "00:00 - 04:00", type: "Resting", icon: RestingZoneIcon },
    { time: "04:00 - 07:00", type: "Feeding", icon: FeedingZoneIcon },
    { time: "07:00 - 10:00", type: "Feeding", icon: FeedingZoneIcon },
    { time: "10:00 - 13:00", type: "Resting", icon: RestingZoneIcon },
    { time: "13:00 - 16:00", type: "Feeding", icon: FeedingZoneIcon },
    { time: "16:00 - 20:00", type: "Feeding", icon: FeedingZoneIcon },
    { time: "20:00 - 00:00", type: "Resting", icon: RestingZoneIcon },
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Gregarious and skittish" },
    { label: "Habitat", value: "Open grassland with dense vegetation" },
    { label: "Senses", value: "Good vision and hearing, weak smell" },
    { label: "Social", value: "Lives in large groups" },
    { label: "Active", value: "Early morning and late afternoon" },
    { label: "Recommended Equipment", value: "Class 1 Ammo" },
    { label: "Species", value: "Coturnix pectoralis", italic: true, isLink: true },
    { label: "Difficulty", value: "Easy" },
  ];

  // Plumage Gallery Data
  const plumageGallery = {
    male: [
      { name: "Albino - Front", src: StubbleQuail_AlbinoMaleFront },
      { name: "Albino - Back", src: StubbleQuail_AlbinoMaleBack },
      { name: "Brown - Front", src: StubbleQuail_BrownMaleFront },
      { name: "Brown - Back", src: StubbleQuail_BrownMaleBack },
      { name: "Dark Brown - Front", src: StubbleQuail_DarkBrownMaleFront },
      { name: "Dark Brown - Back", src: StubbleQuail_DarkBrownMaleBack },
      { name: "Grey Brown - Front", src: StubbleQuail_GreyBrownMaleFront },
      { name: "Grey Brown - Back", src: StubbleQuail_GreyBrownMaleBack },
    ],
    female: [
      { name: "Albino - Front", src: StubbleQuail_AlbinoFemaleFront },
      { name: "Albino - Back", src: StubbleQuail_AlbinoFemaleBack },
      { name: "Grey - Front", src: StubbleQuail_GreyFemaleFront },
      { name: "Grey - Back", src: StubbleQuail_GreyFemaleBack },
      { name: "Grey Brown - Front", src: StubbleQuail_GreyBrownFemaleFront },
      { name: "Grey Brown - Back", src: StubbleQuail_GreyBrownFemaleBack },
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
          <span>Stubble Quail</span>
          <div style={styles.editActions}>
          </div>
        </div>

        <div style={styles.layout}>
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside style={styles.sidebarColumn}>
            <div style={styles.sidebarHeader}>Stubble Quail</div>
            <div style={styles.sidebarImage}>
              <img src={StubbleQuailMain} alt="Stubble Quail" style={{width:'268px', height: '134px', objectFit: 'cover'}} />
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
                  <span>98</span>
                </div>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.gold}}>☗ Gold</span>
                  <span>114</span>
                </div>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.diamond}}>☗ Diamond</span>
                  <span>126</span>
                </div>
              </div>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Weight</span>
              0.10kg — 0.13kg<br/>
              0lbs — 0lbs
            </div>

            <div style={styles.sidebarSection}>
               <span style={styles.sidebarLabel}>Plumage</span>
               <span style={{fontSize:'0.85rem'}}>
                  Albino, Brown, Dark Brown, Grey Brown
               </span>
            </div>

            <div style={styles.sidebarHeader}>Locations</div>
            <div style={styles.sidebarSection}>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Emerald Coast</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main style={styles.mainColumn}>

            {/* Quote Block */}
            <div style={styles.quoteBox}>
              "The stubble quail is a native Australian species, characterized by its dark brown feathers with a cream-colored strip down the center of each feather. The stubble quail is a plump species, larger than other native quails. Male birds will mature at about 0.18 m - 0.19 m long and females are slightly larger. Adult males weigh around 0.10 kg and the females around 0.11 kg with both sexes having a wingspan of between 0.25 m -0.33 m.
              Stubble quail are adaptive birds found in a diverse range of habitats.
              They prefer dense vegetation where the scratch around on the ground for seeds, grasses, and foliage.
              Usually found in well-watered areas, they can also prosper in very arid areas."
              <br/><br/>
              ― In-Game Description
            </div>

            {/* Intro Text */}
            <p style={{marginBottom:'20px'}}>
              The <strong>Stubble Quail</strong> is a (<span style={styles.link}>class 1</span>) quail species that can be hunted on <span style={styles.link}>Emerald Coast</span>.
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
                        <li style={{color:'#6fb2e6'}}><a href="#plumage-male" style={styles.link} onClick={(e)=>{e.preventDefault(); document.getElementById('plumage-male')?.scrollIntoView({behavior:'smooth', block:'start'});}}>4.1. Male</a></li>
                        <li style={{color:'#6fb2e6'}}><a href="#plumage-female" style={styles.link} onClick={(e)=>{e.preventDefault(); document.getElementById('plumage-female')?.scrollIntoView({behavior:'smooth', block:'start'});}}>4.2. Female</a></li>
                    </ul>
                </li>
                <li>
                  <a href="#plumage-rarity" style={styles.link} onClick={(e)=>{e.preventDefault(); document.getElementById('plumage-rarity')?.scrollIntoView({behavior:'smooth', block:'start'});}}>Plumage Variant Rarity</a>
                </li>
                <li>
                  <a href="#trivia" style={styles.link} onClick={(e)=>{e.preventDefault(); document.getElementById('trivia')?.scrollIntoView({behavior:'smooth', block:'start'});}}>Trivia</a>
                </li>
                <li>
                  <a href="#references" style={styles.link} onClick={(e)=>{e.preventDefault(); document.getElementById('references')?.scrollIntoView({behavior:'smooth', block:'start'});}}>References</a>
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
                        <tr><th colSpan="2" style={{...styles.th, textAlign: 'center'}}>Emerald Coast<sup style={{fontSize:'0.7rem', fontWeight:'normal'}}>[1]</sup></th></tr>
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
                      <img src={StubbleQuail_ShotScheme} alt="Stubble Quail X-ray shot scheme" style={{maxWidth:'100%', maxHeight:'100%', objectFit: 'contain'}} />
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
                        <td style={{...styles.td, color: '#3498db', fontStyle: 'italic', fontWeight: 'bold'}}>Male</td>
                        <td style={styles.td}>
                            Grey Brown (49.60%),<br/>
                            Brown (49.60%)
                        </td>
                        <td style={styles.td}>X</td>
                        <td style={styles.td}>
                            Dark Brown (0.53%),<br/>
                            Albino (0.27%)
                        </td>
                        <td style={styles.td}>X</td>
                    </tr>
                     <tr>
                        <td style={{...styles.td, color: '#ff69b4', fontStyle: 'italic', fontWeight: 'bold'}}>Female</td>
                        <td style={styles.td}>
                            Grey (49.87%),<br/>
                            Grey Brown (49.87%)
                        </td>
                        <td style={styles.td}>X</td>
                        <td style={styles.td}>
                            Albino (0.37%)
                        </td>
                        <td style={styles.td}>X</td>
                    </tr>
                </tbody>
            </table>

            {/* TRIVIA */}
            <h2 id="trivia" style={styles.h2}>Trivia</h2>
            <ul style={{paddingLeft:'20px', marginBottom: '30px'}}>
              <li style={{marginBottom:'8px'}}>The <strong>Stubble Quail</strong> is the smallest animal huntable in game, with a top end weight estimate of only 130 grams. By comparison the next smallest animal, the <span style={styles.link}>Bobwhite Quail</span>, is almost TWICE as big, with a top end estimate of 250 grams.</li>
              <li style={{marginBottom:'8px'}}>Despite it being called a Quail, the term 'QUAIL' actually has little relevance to the relation of animals. In fact, the <strong>Stubble Quail</strong> is more closely related to the North American <span style={styles.link}>Turkey</span>, than it is to the <strong>Bobwhite Quail</strong>. This is because both the <strong>Stubble Quail</strong> and the <strong>Turkey</strong> belong to the same family <i>Phasianidae</i>. While the Bobwhite Quail belongs to a different family <i>Odontophoridae</i>.<sup>[2][3]</sup></li>
              <li style={{marginBottom:'8px'}}>It is the most common quail species in Australia.<sup>[4]</sup></li>
            </ul>

            {/* REFERENCES */}
            <h2 id="references" style={styles.h2}>References</h2>
            <ol style={{paddingLeft:'20px', marginBottom: '30px', color: '#6fb2e6'}}>
                <li style={{marginBottom:'4px'}}>Stubble Quail Need Zones, Emerald Coast</li>
                <li style={{marginBottom:'4px'}}><span style={styles.link}>https://en.wikipedia.org/wiki/Phasianidae</span></li>
                <li style={{marginBottom:'4px'}}><span style={styles.link}>https://en.wikipedia.org/wiki/New_World_quail</span></li>
                <li style={{marginBottom:'4px'}}><span style={styles.link}>https://avibase.bsc-eoc.org/species.jsp?avibaseid=98984CAD4C432E69</span></li>
            </ol>

            <AnimalsTableMini />
          </main>
        </div>
      </div>
    </div>
  );
};

export default StubbleQuail;