import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import DrinkingZoneIcon from '../../../assets/DrinkingZoneIcon.webp';
import class6Icon from '../../../assets/Class6Icon.webp'; // Class 6 for Nilgai
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import NilgaiMain from '../../../assets/Nilgai.webp';
import ShotSchemeImg from '../../../assets/Nilgai_shot_scheme.webp';

// Fur Variant Images - Male
// (Assumed file names based on variants shown)
import Nilgai_BlueMaleRightSide from '../../../assets/Nilgai_BlueMaleRightSide.webp';
import Nilgai_DarkBrownMaleRightSide from '../../../assets/Nilgai_DarkBrownMaleRightSide.webp';
import Nilgai_PiebaldVariation1MaleRightSide from '../../../assets/Nilgai_PiebaldVariation1MaleRightSide.webp';
import Nilgai_PiebaldVariation1MaleLeftSide from '../../../assets/Nilgai_PiebaldVariation1MaleLeftSide.webp';
import Nilgai_PiebaldVariation2MaleRightSide from '../../../assets/Nilgai_PiebaldVariation2MaleRightSide.webp';
import Nilgai_PiebaldVariation2MaleLeftSide from '../../../assets/Nilgai_PiebaldVariation2MaleLeftSide.webp';

// Fur Variant Images - Female
import Nilgai_BrownFemaleRightSide from '../../../assets/Nilgai_BrownFemaleRightSide.webp';
import Nilgai_LightBrownFemaleRightSide from '../../../assets/Nilgai_LightBrownFemaleRightSide.webp';
import Nilgai_PiebaldVariation1FemaleRightSide from '../../../assets/Nilgai_PiebaldVariation1FemaleRightSide.webp';
import Nilgai_PiebaldVariation1FemaleLeftSide from '../../../assets/Nilgai_PiebaldVariation1FemaleLeftSide.webp';
import Nilgai_PiebaldVariation2FemaleRightSide from '../../../assets/Nilgai_PiebaldVariation2FemaleRightSide.webp';
import Nilgai_PiebaldVariation2FemaleLeftSide from '../../../assets/Nilgai_PiebaldVariation2FemaleLeftSide.webp';


const Nilgai = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  const needZonesData = [
    {
      name: "Sundarpatan",
      schedule: [
        { time: "00:00 - 04:00", type: "Resting", icon: RestingZoneIcon },
        { time: "04:00 - 08:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "08:00 - 12:00", type: "Drinking", icon: DrinkingZoneIcon },
        { time: "12:00 - 16:00", type: "Resting", icon: RestingZoneIcon },
        { time: "16:00 - 20:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "20:00 - 00:00", type: "Resting", icon: RestingZoneIcon },
      ]
    }
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Found in groups of 4-8 mainly consisting of either males or females" },
    { label: "Habitat", value: "Low bush, farmland and grasslands" },
    { label: "Senses", value: "Decent sight and hearing, not as acute sense of smell" },
    { label: "Social", value: "Social herd animal" },
    { label: "Active", value: "Active during daytime" },
    { label: "Recommended Equipment", value: "Class 6 Ammo, Buck \"Snort Wheeze\" Caller" },
    { label: "Species", value: "Boselaphus tragocamelus", italic: true, isLink: true },
    { label: "Difficulty", value: "Average" },
  ];

  // Fur Gallery Data - Male
  const maleFurGallery = [
    { name: "Blue", src: Nilgai_BlueMaleRightSide },
    { name: "Dark Brown", src: Nilgai_DarkBrownMaleRightSide },
    { name: "Piebald Variation 1 (Right)", src: Nilgai_PiebaldVariation1MaleRightSide },
    { name: "Piebald Variation 1 (Left)", src: Nilgai_PiebaldVariation1MaleLeftSide },
    { name: "Piebald Variation 2 (Right)", src: Nilgai_PiebaldVariation2MaleRightSide },
    { name: "Piebald Variation 2 (Left)", src: Nilgai_PiebaldVariation2MaleLeftSide },
  ];

  // Fur Gallery Data - Female
  const femaleFurGallery = [
    { name: "Brown", src: Nilgai_BrownFemaleRightSide },
    { name: "Light Brown", src: Nilgai_LightBrownFemaleRightSide },
    { name: "Piebald Variation 1 (Right)", src: Nilgai_PiebaldVariation1FemaleRightSide },
    { name: "Piebald Variation 1 (Left)", src: Nilgai_PiebaldVariation1FemaleLeftSide },
    { name: "Piebald Variation 2 (Right)", src: Nilgai_PiebaldVariation2FemaleRightSide },
    { name: "Piebald Variation 2 (Left)", src: Nilgai_PiebaldVariation2FemaleLeftSide },
  ];

  // Trivia Data
  const triviaData = [
    "The Nilgai's genus name Boselaphus means Cow-Deer in it's respective Latin and Greek. It's species name tragocamelus means Billy Goat-Camel. The Nilgai is the sole surviving member of the Genus Boselaphus.",
    "The name Nilgai means blue cow. However it is unclear why the Hindu have called it a cow. Regardless, it's this Holy Status (cows are considered sacred in Hinduism) that is credited with it's abundance in the Indian subcontinent. For example, in the Indian state of Gujarat, where they are protected, there are an estimated 250,000 individuals living in that region alone. There is even a small feral population of about 15,000 individuals roaming the wilderness of Texas.",
    "Apperently, the Nilgai are prone to having twins. An estimated 50% to 80% of all births result in twins."
  ];

  // References Data
  const referencesData = [
    "Nilgai Need Zones, Sundarpatan",
    "https://a-z-animals.com/animals/nilgai/",
    "https://a-z-animals.com/animals/nilgai/", // Duplicate in screenshot, kept for accuracy
    "https://www.britannica.com/animal/nilgai",
    "https://myewa.org/three-things-didnt-know-nilgai/",
    "https://www.knowsleysafariexperience.co.uk/our-safari/animals/nilgai"
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
        marginTop: '25px',
        marginBottom: '10px',
        fontWeight: 'bold'
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

  // Smooth-scroll helper for TOC links
  function scrollToId(e, id) {
    if (e && e.preventDefault) e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      try { history.replaceState(null, '', `#${id}`); } catch (err) {}
    }
  }

  return (
    <div style={styles.container}>
      <div style={styles.innerWrapper}>
        
        {/* PAGE HEADER */}
        <div style={styles.mainHeader}>
          <span>Nilgai</span>
        </div>

        <div style={styles.layout}>
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside style={styles.sidebarColumn}>
            <div style={styles.sidebarHeader}>Nilgai</div>
            <div style={styles.sidebarImage}>
              <img src={NilgaiMain} alt="Nilgai" style={{width:'100%', height: '100%', objectFit: 'cover'}} />
            </div>
            
            <div style={styles.sidebarHeader}>General Information</div>
            
            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Class</span>
              <span><img src={class6Icon} alt="Class 6" style={{width:'24px', height:'24px', verticalAlign: 'middle', marginRight: '6px'}}/>6</span>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Difficulty</span>
              <span>1: Trivial — 5: Medium</span>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Trophy Type</span>
              <span>Horns</span>
              <div style={styles.trophyGrid}>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.silver}}>◆ Silver</span>
                  <span>69.17</span>
                </div>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.gold}}>☗ Gold</span>
                  <span>83.87</span>
                </div>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.diamond}}>☗ Diamond</span>
                  <span>94.89</span>
                </div>
              </div>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Weight</span>
              0kg — 308kg<br/>
              <span style={{color: '#88a0b8', fontSize: '0.85rem'}}>0lbs — 679lbs</span>
            </div>

            <div style={styles.sidebarSection}>
               <span style={styles.sidebarLabel}>Fur</span>
               <span style={{fontSize:'0.85rem'}}>
                 Blue, Brown, Dark Brown, Light Brown, Piebald
               </span>
            </div>

            <div style={styles.sidebarHeader}>Locations</div>
            <div style={styles.sidebarSection}>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Sundarpatan</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main style={styles.mainColumn}>

            {/* Quote Block */}
            <div style={styles.quoteBox}>
              "The Nilgai (literally meaning "blue cow" in Nepali) has slim legs, a sloped back and is adorned with a mane. It stands as the largest antelope in Asia. Bulls can stretch between 1 and 1.5 meters tall at the shoulder, bearing a weight range of 109 to 308 kg. On the other hand, cows, though similar in height, typically weigh less, ranging between 100 and 213 kg. Manifesting significant sexual dimorphism, their fur coloration differs significantly. The bulls have a blue-tinged fur, while the cows have a lighter, brownish coat. In spite of this disparity, all Nilgai possess a white neck patch, a white rump, and white inner hind legs, coupled with distinctive black-and-white "socks"."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p style={{marginBottom:'20px'}}>
              The <strong>Nilgai</strong> is a <span style={styles.link}>(class 6)</span> antelope species and can be hunted on <span style={styles.link}>Sundarpatan</span>.
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
                <li><a href="#features" onClick={(e)=>scrollToId(e,'features')} style={styles.link}>Features</a></li>
                <li><a href="#need-zones" onClick={(e)=>scrollToId(e,'need-zones')} style={styles.link}>Need Zone Times</a></li>
                <li><a href="#shot-scheme" onClick={(e)=>scrollToId(e,'shot-scheme')} style={styles.link}>Shot scheme</a></li>
                <li><a href="#fur-variants" onClick={(e)=>scrollToId(e,'fur-variants')} style={styles.link}>Fur Variants</a></li>
                <ol style={{listStyleType: 'none', marginLeft: '-20px'}}>
                     <li><a href="#fur-male" onClick={(e)=>scrollToId(e,'fur-male')} style={{...styles.link, marginLeft:'20px'}}>4.1. Male</a></li>
                     <li><a href="#fur-female" onClick={(e)=>scrollToId(e,'fur-female')} style={{...styles.link, marginLeft:'20px'}}>4.2. Female</a></li>
                </ol>
                <li><a href="#variant-rarity" onClick={(e)=>scrollToId(e,'variant-rarity')} style={styles.link}>Fur Variant Rarity</a></li>
                <li><a href="#trivia" onClick={(e)=>scrollToId(e,'trivia')} style={styles.link}>Trivia</a></li>
                <li><a href="#references" onClick={(e)=>scrollToId(e,'references')} style={styles.link}>References</a></li>
              </ol>
            </div>

            {/* FEATURES */}
            <h2 style={styles.h2} id="features">Features</h2>
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
            <h2 style={styles.h2} id="need-zones">Need Zone Times</h2>
            <div style={{display:'inline-block'}}>
                <table style={{...styles.table, width: '300px'}}>
                    <thead>
                        <tr><th colSpan="2" style={{...styles.th, textAlign: 'center'}}>Sundarpatan</th></tr>
                        <tr>
                            <th style={{...styles.th, backgroundColor: '#0f2e48'}}>Times</th>
                            <th style={{...styles.th, backgroundColor: '#0f2e48'}}>Activity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {needZonesData[0].schedule.map((zone, i) => (
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

            {/* SHOT SCHEME */}
            <h2 style={styles.h2} id="shot-scheme">Shot scheme</h2>
            <div style={styles.shotContainer}>
               <div style={styles.shotImageWrapper}>
                 <img src={ShotSchemeImg} alt="Shot Scheme" style={{width: '100%', height: 'auto', maxHeight:'350px', objectFit: 'contain'}} />
               </div>
               <div style={styles.shotLegend}>
                 <div style={styles.legendHeader}>Color code</div>
                 <div style={styles.legendItem}>Red - Kills immediately</div>
                 <div style={styles.legendItem}>Blue - Kills very quick</div>
                 <div style={styles.legendItem}>Orange - Kills slowly</div>
                 <div style={{...styles.legendItem, borderBottom: 'none'}}>No Color - Unlikely to kill</div>
               </div>
            </div>

            {/* FUR VARIANTS (Gallery) */}
            <h2 style={styles.h2} id="fur-variants">Fur Variants</h2>
            
            <h3 style={styles.h3} id="fur-male">4.1. Male</h3>
            <div style={styles.galleryGrid}>
              {maleFurGallery.map((item, i) => (
                <div key={i} style={styles.galleryItem}>
                  <div style={styles.galleryImgPlaceholder}>
                    <img src={item.src} alt={item.name} style={{width:'100%', height: '100%', objectFit: 'contain'}} />
                  </div>
                  <span style={styles.galleryLabel}>{item.name}</span>
                </div>
              ))}
            </div>

            <h3 style={styles.h3} id="fur-female">4.2. Female</h3>
            <div style={styles.galleryGrid}>
              {femaleFurGallery.map((item, i) => (
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
            <div style={{overflowX: 'auto', marginBottom: '20px'}}>
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
                        {/* Male Row */}
                        <tr>
                            <td style={{...styles.td, color: '#3498db', fontStyle: 'italic', fontWeight: 'bold'}}>
                                Male
                            </td>
                            <td style={styles.td}>
                                Blue (74.80%)<br/>
                            </td>
                            <td style={styles.td}>
                                Dark Brown (25.00%)
                            </td>
                            <td style={styles.td}>
                                Piebald Variation 1 (0.10%)<br/>
                                Piebald Variation 2 (0.10%)
                            </td>
                            <td style={styles.td}>
                                X
                            </td>
                        </tr>
                        {/* Female Row */}
                        <tr>
                            <td style={{...styles.td, color: '#d63384', fontStyle: 'italic', fontWeight: 'bold'}}>
                                Female
                            </td>
                            <td style={styles.td}>
                                Brown (74.80%)
                            </td>
                            <td style={styles.td}>
                                Light Brown (25.00%)
                            </td>
                            <td style={styles.td}>
                                Piebald Variation 1 (0.10%)<br/>
                                Piebald Variation 2 (0.10%)
                            </td>
                            <td style={styles.td}>
                                X
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
            <ol style={{fontSize: '0.95rem', paddingLeft: '20px', color: '#6fb2e6'}}>
                {referencesData.map((ref, idx) => (
                     <li key={idx} style={{marginBottom: '5px'}}>
                        <span style={{color: '#dbe4eb'}}>↑</span> <span style={styles.link}>{ref}</span>
                     </li>
                ))}
            </ol>

            <div style={{marginTop: '40px'}}>
                <AnimalsTableMini />
            </div>
            
          </main>
        </div>
      </div>
    </div>
  );
};

export default Nilgai;