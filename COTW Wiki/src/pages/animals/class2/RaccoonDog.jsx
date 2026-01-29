import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import DrinkingZoneIcon from '../../../assets/DrinkingZoneIcon.webp';
import class2Icon from '../../../assets/Class2Icon.webp'; // Class 2 for Raccoon Dog
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import RaccoonDogMain from '../../../assets/RaccoonDog.webp';

// Fur Variant Images (Placeholders)
import RaccoonDog_Albino from '../../../assets/RaccoonDog_Albino.webp';
import RaccoonDog_BlackWhite from '../../../assets/RaccoonDog_BlackWhite.webp';
import RaccoonDog_DarkBrown from '../../../assets/RaccoonDog_DarkBrown.webp';
import RaccoonDog_Grey from '../../../assets/RaccoonDog_Grey.webp';
import RaccoonDog_LightBrown from '../../../assets/RaccoonDog_LightBrown.webp';
import RaccoonDog_Orange from '../../../assets/RaccoonDog_Orange.webp';
import RaccoonDog_Piebald1 from '../../../assets/RaccoonDog_PiebaldVariation1.webp';
import RaccoonDog_Piebald2 from '../../../assets/RaccoonDog_PiebaldVariation2.webp';


const RaccoonDog = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  const needZonesData = [
    {
      name: "Revontuli Coast / Salzwiesen Park",
      schedule: [
        { time: "00:00 - 03:30", type: "Drinking", icon: DrinkingZoneIcon },
        { time: "03:00 - 06:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "06:00 - 10:30", type: "Resting", icon: RestingZoneIcon },
        { time: "10:00 - 13:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "13:00 - 16:30", type: "Resting", icon: RestingZoneIcon },
        { time: "16:00 - 20:30", type: "Resting", icon: RestingZoneIcon },
        { time: "20:00 - 00:30", type: "Feeding", icon: FeedingZoneIcon },
      ]
    }
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Social & skittish" },
    { label: "Habitat", value: "Forests & wetlands" },
    { label: "Senses", value: "Excellent smell & good hearing, poor vision" },
    { label: "Social", value: "Mated pairs or small groups with strong bonds" },
    { label: "Active", value: "Predominantly nocturnal" },
    { label: "Recommended Equipment", value: "Class 2 Ammo" },
    { label: "Species", value: "Nyctereutes grypus", italic: true, isLink: true },
    { label: "Difficulty", value: "Average" },
  ];

  // Fur Gallery Data
  const furGallery = [
    { name: "Albino", src: RaccoonDog_Albino },
    { name: "Black White", src: RaccoonDog_BlackWhite },
    { name: "Dark Brown", src: RaccoonDog_DarkBrown },
    { name: "Grey", src: RaccoonDog_Grey },
    { name: "Light Brown", src: RaccoonDog_LightBrown },
    { name: "Orange", src: RaccoonDog_Orange },
    { name: "Piebald Variation 1", src: RaccoonDog_Piebald1 },
    { name: "Piebald Variation 2", src: RaccoonDog_Piebald2 },
  ];

  // Trivia Data
  const triviaData = [
    "Raccoon dogs are named after the Common Raccoon due to their obvious similarities, but raccoon dogs are more closely related to true foxes like the Red Fox.",
    "Raccoon dogs are commonly depicted in Japanese pop culture, where they are called 'tanuki.' For example, in the 1988 Nintendo game Super Mario Bros. 3, Mario can collect a power-up that gives him a 'Tanooki Suit'."
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

  return (
    <div style={styles.container}>
      <div style={styles.innerWrapper}>
        
        {/* PAGE HEADER */}
        <div style={styles.mainHeader}>
          <span>Raccoon Dog</span>
        </div>

        <div style={styles.layout}>
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside style={styles.sidebarColumn}>
            <div style={styles.sidebarHeader}>Raccoon Dog</div>
            <div style={styles.sidebarImage}>
              <img src={RaccoonDogMain} alt="Raccoon Dog" style={{width:'100%', height: '100%', objectFit: 'cover'}} />
            </div>
            
            <div style={styles.sidebarHeader}>General Information</div>
            
            {/* */}
            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Class</span>
              <span><img src={class2Icon} alt="Class 2" style={{width:'24px', height:'24px', verticalAlign: 'middle', marginRight: '6px'}}/>2</span>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Difficulty</span>
              <span>1: Trivial — 9: Legendary</span>
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
                  <span>7.20</span>
                </div>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.diamond}}>☗ Diamond</span>
                  <span>9.29</span>
                </div>
              </div>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Weight</span>
              ? — 10kg<br/>
              <span style={{color: '#88a0b8', fontSize: '0.85rem'}}>? — 22lbs</span>
            </div>

            <div style={styles.sidebarSection}>
               <span style={styles.sidebarLabel}>Fur</span>
               <span style={{fontSize:'0.85rem'}}>
                  Albino, Black White, Dark Brown, Light Brown, Grey, Orange, Piebald
               </span>
            </div>

            <div style={styles.sidebarHeader}>Locations</div>
            <div style={styles.sidebarSection}>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Revontuli Coast</span></div>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Salzwiesen Park</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main style={styles.mainColumn}>

            {/* Quote Block */}
            <div style={styles.quoteBox}>
              "The Raccoon Dog, also known as 'Tanuki' in Japan, is a small canid native to Asia. It was introduced in the USSR for its fur, but is now rapidly spreading westward across Europe as an invasive species. Omnivorous, they feed on a wide variety of small prey, and fruits, disrupting local ecosystems. Raccoon dogs live in mated pairs or small familial groups with strong bonds. They hunt primarily at night, relying on their excellent sense of smell to find food. This nocturnal lifestyle, small size and skittish nature makes them hard to track down and hunt. Raccoon Dogs are named for their superficial resemblance to raccoons, but the 2 species are not closely related."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p style={{marginBottom:'20px'}}>
              The <strong>Raccoon Dog</strong> is a <span style={styles.link}>class 2</span> species present in <span style={styles.link}>Revontuli Coast</span> and <span style={styles.link}>Salzwiesen Park</span>.
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
                <li><a href="#features" style={styles.link} onClick={scrollToId('features')}>Features</a></li>
                <li><a href="#need-zones" style={styles.link} onClick={scrollToId('need-zones')}>Need Zone Times</a></li>
                <li><a href="#fur-variants" style={styles.link} onClick={scrollToId('fur-variants')}>Fur variants</a></li>
                <li><a href="#variant-rarity" style={styles.link} onClick={scrollToId('variant-rarity')}>Fur Variant Rarity</a></li>
                <li><a href="#trivia" style={styles.link} onClick={scrollToId('trivia')}>Trivia</a></li>
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
            <div style={{display:'inline-block'}}>
                <table style={{...styles.table, width: '300px'}}>
                    <thead>
                        {/* Note: Screenshot 3 does not list a specific map in the header, so using general/common maps for Need Zones */}
                        <tr><th colSpan="2" style={{...styles.th, textAlign: 'center'}}>Revontuli Coast / Salzwiesen Park</th></tr>
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

            {/* FUR VARIANTS (Gallery) */}
            <h2 id="fur-variants" style={styles.h2}>Fur variants</h2>
            <div style={styles.galleryGrid}>
              {furGallery.map((item, i) => (
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
                                Male/<span style={{color: '#d63384'}}>Female</span>
                            </td>
                            <td style={styles.td}>
                                Grey (42.60%)<br/>
                                Light Brown (42.60%)<br/>
                                Black-White (14.26%)
                            </td>
                            <td style={styles.td}>X</td>
                            <td style={styles.td}>
                                Dark Brown (0.23%)<br/>
                                Orange (0.23%)
                            </td>
                            <td style={styles.td}>
                                Albino (0.03%)<br/>
                                Piebald Variation 1 (0.03%)<br/>
                                Piebald Variation 2 (0.03%)
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

            <div style={{marginTop: '40px'}}>
                <AnimalsTableMini />
            </div>
            
          </main>
        </div>
      </div>
    </div>
  );
};

export default RaccoonDog;