import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import class1Icon from '../../../assets/Class1Icon.webp';
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import WhiteTailedJackrabbitMain from '../../../assets/WhiteTailedJackrabbit.webp';

// Organs and Bones Image (Replaces Shot Scheme for this animal)
import WhiteTailedJackrabbitOrgans from '../../../assets/Jackrabbit_organs.webp';

// Fur Variant Images
import WhiteTailedJackrabbit_Albino from '../../../assets/WhiteTailedJackrabbit_Albino.webp';
import WhiteTailedJackrabbit_Beige from '../../../assets/WhiteTailedJackrabbit_Beige.webp';
import WhiteTailedJackrabbit_Brown from '../../../assets/WhiteTailedJackrabbit_Brown.webp';
import WhiteTailedJackrabbit_Grey from '../../../assets/WhiteTailedJackrabbit_Grey.webp';
import WhiteTailedJackrabbit_LightBrown from '../../../assets/WhiteTailedJackrabbit_LightBrown.webp';


const WhiteTailedJackrabbit = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  // Source: Екранна снимка 2026-01-16 184328.png
  const needZonesData = [
    {
      name: "Layton Lake District", // Inferred from Locations list
      schedule: [
        { time: "00:00 - 03:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "03:00 - 06:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "06:00 - 10:30", type: "Resting", icon: RestingZoneIcon },
        { time: "10:00 - 14:30", type: "Resting", icon: RestingZoneIcon },
        { time: "14:00 - 18:30", type: "Resting", icon: RestingZoneIcon },
        { time: "18:00 - 21:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "21:00 - 00:30", type: "Feeding", icon: FeedingZoneIcon },
      ]
    }
  ];

  // Features Table
  // Source: Екранна снимка 2026-01-16 184321.png
  const features = [
    { label: "Behavior", value: "Docile and somewhat skittish" },
    { label: "Habitat", value: "Deciduous forests and open fields" },
    { label: "Senses", value: "Very good hearing and vision" },
    { label: "Social", value: "Typically solitary. During mating season, groups of males can be found with females in medium-sized groups." },
    { label: "Active", value: "During dawn, late afternoon and dusk" },
    { label: "Recommended Equipment", value: "Class 1 Ammo" },
    { label: "Species", value: "Lepus townsendii", italic: true, isLink: true },
    { label: "Difficulty", value: "Easy" },
  ];

  // Fur Gallery Data
  // Source: Екранна снимка 2026-01-16 184343.jpg
  const furGallery = [
    { name: "Albino", src: WhiteTailedJackrabbit_Albino },
    { name: "Beige", src: WhiteTailedJackrabbit_Beige },
    { name: "Brown", src: WhiteTailedJackrabbit_Brown },
    { name: "Grey", src: WhiteTailedJackrabbit_Grey },
    { name: "Light Brown", src: WhiteTailedJackrabbit_LightBrown },
  ];

  // Smooth scroll helper for in-page TOC links
  const scrollToId = (id) => (e) => {
    if (e && e.preventDefault) e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (typeof window !== 'undefined' && window.history && window.history.replaceState) {
      window.history.replaceState(null, '', `#${id}`);
    }
  };

  // References List
  // Source: Екранна снимка 2026-01-16 184405.jpg
  const references = [
    "https://www.nationalgeographic.com/animals/mammals/facts/black-tailed-jackrabbit",
    "https://www.nationalgeographic.com/animals/mammals/facts/black-tailed-jackrabbit"
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
    editActions: {
      fontSize: '0.9rem',
      color: '#6fb2e6',
      display: 'flex',
      gap: '15px',
      fontWeight: 'bold',
      cursor: 'pointer',
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
    },
    organContainer: {
      display: 'flex',
      backgroundColor: '#112233',
      marginTop: '10px',
      border: '1px solid #1f405a',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    organImage: {
      width: '400px',
      backgroundColor: 'transparent',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '10px',
    },
    organInfo: {
      padding: '20px',
      width: '200px',
      color: '#fff',
      fontSize: '0.9rem',
      fontWeight: 'bold',
      lineHeight: '1.8',
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
    },
    rarityCommon: { color: '#2ecc71', fontWeight: 'bold' },
    rarityUncommon: { color: '#3498db', fontWeight: 'bold' },
    rarityRare: { color: '#9b59b6', fontWeight: 'bold' },
    rarityVeryRare: { color: '#e74c3c', fontWeight: 'bold' },
  };

  return (
    <div style={styles.container}>
      <div style={styles.innerWrapper}>
        
        {/* PAGE HEADER */}
        <div style={styles.mainHeader}>
          <span>White-tailed Jackrabbit</span>
          <div style={styles.editActions}>
          </div>
        </div>

        <div style={styles.layout}>
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside style={styles.sidebarColumn}>
            <div style={styles.sidebarHeader}>White-tailed Jackrabbit</div>
            <div style={styles.sidebarImage}>
              <img src={WhiteTailedJackrabbitMain} alt="White-tailed Jackrabbit" style={{width:'268px', height: '134px', objectFit: 'cover'}} />
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

            {/* Trophy Type */}
            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Trophy Type</span>
              <span>Weight</span>
              <div style={styles.trophyGrid}>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.silver}}>◆ Silver</span>
                  <span>2.8</span>
                </div>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.gold}}>☗ Gold</span>
                  <span>4.8</span>
                </div>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.diamond}}>☗ Diamond</span>
                  <span>6.3</span>
                </div>
              </div>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Weight</span>
              ? — 6.8kg<br/>
              ? — 15lbs
            </div>

            <div style={styles.sidebarSection}>
               <span style={styles.sidebarLabel}>Fur</span>
               <span style={{fontSize:'0.85rem'}}>
                  Albino, Beige, Brown, Grey, Light Brown
               </span>
            </div>

            <div style={styles.sidebarHeader}>Locations</div>
            <div style={styles.sidebarSection}>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Layton Lake District</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main style={styles.mainColumn}>

            {/* Quote Block */}
            <div style={styles.quoteBox}>
              "The white-tailed jackrabbit is the largest species called "jackrabbit" and is common throughout North America. Though they prefer open grasslands and fields, white-tailed jackrabbits are also found in alpine climate and forested areas. Jackrabbits are typically solitary, but during mating season, groups of males compete for the attention of a female. Due to the stresses of these courting competitions, adult males generally weigh less than females during mating season. They can sprint up to speeds of 55 km (34 miles) per hour when spooked and leap up to 5 m (16 ft)."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p style={{marginBottom:'20px'}}>
              The <strong>White-tailed Jackrabbit</strong> is a small <span style={styles.link}>class 1</span> animal. It can be hunted in the <span style={styles.link}>Layton Lake District</span>. It was the first lagomorph to be introduced to the game.
            </p>
            <p style={{marginBottom:'20px'}}>
              The Jackrabbit was released as a free <span style={styles.link}>DLC</span>.
            </p>

            {/* Table of Contents (smooth-scroll links) */}
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
                <li><a href="#features" style={styles.link} onClick={scrollToId('features')}>Feature</a></li>
                <li><a href="#need-zones" style={styles.link} onClick={scrollToId('need-zones')}>Need Zone Times</a></li>
                <li><a href="#organs" style={styles.link} onClick={scrollToId('organs')}>Organs and bones</a></li>
                <li><a href="#fur-variants" style={styles.link} onClick={scrollToId('fur-variants')}>Fur Variants</a></li>
                <li><a href="#variant-rarity" style={styles.link} onClick={scrollToId('variant-rarity')}>Fur Variant Rarity</a></li>
                <li><a href="#trivia" style={styles.link} onClick={scrollToId('trivia')}>Trivia</a></li>
                <li><a href="#references" style={styles.link} onClick={scrollToId('references')}>References</a></li>
              </ol>
            </div>

            {/* FEATURES */}
            <h2 id="features" style={styles.h2}>Feature</h2>
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
            <div style={{display:'inline-block'}}>
                <table style={{...styles.table, width: '300px'}}>
                    <thead>
                        <tr><th colSpan="2" style={{...styles.th, textAlign: 'center'}}>Layton Lake District</th></tr>
                        <tr>
                            <th style={{...styles.th, backgroundColor: '#0f2e48'}}>Times</th>
                            <th style={{...styles.th, backgroundColor: '#0f2e48'}}>Activity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {needZonesData[0].schedule.map((zone, i) => (
                        <tr key={i}>
                            <td style={styles.td}>{zone.time}</td>
                            <td style={styles.td}><img src={zone.icon} alt={zone.type} style={{width:'20px', height: '20px', verticalAlign: 'middle', marginRight: '6px'}}/> {zone.type}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* ORGANS AND BONES */}
            <h2 id="organs" style={styles.h2}>Organs and bones</h2>
            <div style={styles.organContainer}>
               <div style={styles.organImage}>
                  <img src={WhiteTailedJackrabbitOrgans} alt="Organs Diagram" style={{width: '100%'}} />
               </div>
               <div style={styles.organInfo}>
                  <div>1. Head</div>
                  <div>2. Neck</div>
                  <div>3. Body</div>
                  <div>4. Ears</div>
                  <div>5. Foreleg</div>
                  <div>6. Hind leg</div>
               </div>
            </div>

            {/* FUR VARIANTS (Gallery) */}
            <h2 id="fur-variants" style={styles.h2}>Fur Variants</h2>
            <div style={styles.galleryGrid}>
              {furGallery.map((item, i) => (
                <div key={i} style={styles.galleryItem}>
                  <div style={styles.galleryImgPlaceholder}>
                    <img src={item.src} alt={item.name} style={{maxWidth: '100%', maxHeight: '100%', objectFit: 'contain'}} />
                  </div>
                  <span style={styles.galleryLabel}>{item.name}</span>
                </div>
              ))}
            </div>

            {/* FUR VARIANT RARITY TABLE */}
            <h2 id="variant-rarity" style={styles.h2}>Fur Variant Rarity</h2>
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
                            Male/<span style={{color: '#d63384'}}>Female</span>
                        </td>
                        <td style={styles.td}>
                            Light Brown (24.97%)<br/>
                            Grey (24.97%)<br/>
                            Beige (24.97%)<br/>
                            Brown (24.97%)
                        </td>
                        <td style={styles.td}>X</td>
                        <td style={styles.td}>
                            Albino (0.10%)
                        </td>
                        <td style={styles.td}>X</td>
                    </tr>
                </tbody>
            </table>

            {/* TRIVIA */}
            <h2 id="trivia" style={styles.h2}>Trivia</h2>
            <ul style={{paddingLeft:'20px', marginBottom: '30px'}}>
              <li style={{marginBottom:'8px'}}>In French, it is called "Lièvre de Townsend" after the one who described the species.</li>
              <li style={{marginBottom:'8px'}}>The term 'Jackrabbit' is a conjugation of "Jackass Rabbit" named so after their long donkey-like ears - <sup>[1]</sup></li>
              <li style={{marginBottom:'8px'}}>Despite its name, Jackrabbits are actually hares not rabbits. Hares are distinguished from rabbits by their large size and long ears.<sup>[2]</sup></li>
              <li style={{marginBottom:'8px'}}>The <strong>White-tailed Jackrabbit</strong> is one of 7 huntable lagomorphs in game. The others include the <span style={styles.link}>European Rabbit</span>, the <span style={styles.link}>Scrub Hare</span>, the <span style={styles.link}>European Hare</span>, the <span style={styles.link}>Antelope Jackrabbit</span>, the <span style={styles.link}>Eastern Cottontail Rabbit</span>, and the <span style={styles.link}>Mountain Hare</span>.</li>
            </ul>

            {/* REFERENCES */}
            <h2 id="references" style={styles.h2}>References</h2>
            <ol style={{fontSize: '0.9rem', paddingLeft: '20px'}}>
               {references.map((ref, idx) => (
                  <li key={idx} style={{marginBottom: '4px'}}>
                     <span style={styles.link}>↑ {ref}</span>
                  </li>
               ))}
            </ol>
            <p style={{fontSize: '0.8rem', fontStyle: 'italic', marginTop:'10px', color: '#888'}}>
               The references are of the "Black Tail Jackrabbit" but still apply to this lagomorph
            </p>

            <AnimalsTableMini />
          </main>
        </div>
      </div>
    </div>
  );
};

export default WhiteTailedJackrabbit;