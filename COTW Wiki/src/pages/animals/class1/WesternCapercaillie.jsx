import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import class1Icon from '../../../assets/Class1Icon.webp';
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import WesternCapercaillieMain from '../../../assets/WesternCapercaillie.webp';

// Male Plumage Images
import WesternCapercaillie_DarkMaleFront from '../../../assets/WesternCapercaillie_DarkMaleFront.webp';
import WesternCapercaillie_DarkMaleBack from '../../../assets/WesternCapercaillie_DarkMaleBack.webp';
import WesternCapercaillie_LeucisticVariation1MaleFront from '../../../assets/WesternCapercaillie_LeucisticVariation1MaleFront.webp';
import WesternCapercaillie_LeucisticVariation1MaleBack from '../../../assets/WesternCapercaillie_LeucisticVariation1MaleBack.webp';
import WesternCapercaillie_LeucisticVariation2MaleFront from '../../../assets/WesternCapercaillie_LeucisticVariation2MaleFront.webp';
import WesternCapercaillie_LeucisticVariation2MaleBack from '../../../assets/WesternCapercaillie_LeucisticVariation2MaleBack.webp';
import WesternCapercaillie_PaleMaleFront from '../../../assets/WesternCapercaillie_PaleMaleFront.webp';
import WesternCapercaillie_PaleMaleBack from '../../../assets/WesternCapercaillie_PaleMaleBack.webp';

// Female Plumage Images
import WesternCapercaillie_BrightFemaleFront from '../../../assets/WesternCapercaillie_BrightFemaleFront.webp';
import WesternCapercaillie_BrightFemaleBack from '../../../assets/WesternCapercaillie_BrightFemaleBack.webp';
import WesternCapercaillie_BrownFemaleFront from '../../../assets/WesternCapercaillie_BrownFemaleFront.webp';
import WesternCapercaillie_BrownFemaleBack from '../../../assets/WesternCapercaillie_BrownFemaleBack.webp';
import WesternCapercaillie_Leucistic1FemaleFront from '../../../assets/WesternCapercaillie_LeucisticVariation1FemaleFront.webp';
import WesternCapercaillie_Leucistic1FemaleBack from '../../../assets/WesternCapercaillie_LeucisticVariation1FemaleBack.webp';
import WesternCapercaillie_OchreFemaleFront from '../../../assets/WesternCapercaillie_OchreFemaleFront.webp';
import WesternCapercaillie_OchreFemaleBack from '../../../assets/WesternCapercaillie_OchreFemaleBack.webp';


const WesternCapercaillie = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  // Source: Екранна снимка 2026-01-16 132620.png
  const needZonesData = [
    {
      name: "Revontuli Coast",
      schedule: [
        { time: "00:00 - 04:00", type: "Resting", icon: RestingZoneIcon },
        { time: "04:00 - 11:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "11:00 - 14:00", type: "Resting", icon: RestingZoneIcon },
        { time: "14:00 - 21:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "21:00 - 24:00", type: "Resting", icon: RestingZoneIcon },
      ]
    }
  ];

  // Features Table
  // Source: Екранна снимка 2026-01-16 132612.png
  const features = [
    { label: "Behavior", value: "Wary, but aggressive during mating season" },
    { label: "Habitat", value: "Old conifer forest" },
    { label: "Senses", value: "Great hearing and sight, poor sense of smell" },
    { label: "Social", value: "Males are solitary while hens group in small flocks" },
    { label: "Active", value: "Diurnal" },
    { label: "Recommended Equipment", value: "Class 1 Ammo" },
    { label: "Species", value: "Tetrao urogallus", italic: true, isLink: true },
    { label: "Difficulty", value: "Easy" },
  ];

  // Plumage Gallery Data
  // Source: 132628.jpg, 132635.jpg, 132642.jpg, 132648.jpg
  const plumageGallery = {
    male: [
      { name: "Dark - Front", src: WesternCapercaillie_DarkMaleFront },
      { name: "Dark - Back", src: WesternCapercaillie_DarkMaleBack },
      { name: "Leucistic Variation 1 - Front", src: WesternCapercaillie_LeucisticVariation1MaleFront },
      { name: "Leucistic Variation 1 - Back", src: WesternCapercaillie_LeucisticVariation1MaleBack },
      { name: "Leucistic Variation 2 - Front", src: WesternCapercaillie_LeucisticVariation2MaleFront },
      { name: "Leucistic Variation 2 - Back", src: WesternCapercaillie_LeucisticVariation2MaleBack },
      { name: "Pale - Front", src: WesternCapercaillie_PaleMaleFront },
      { name: "Pale - Back", src: WesternCapercaillie_PaleMaleBack },
    ],
    female: [
      { name: "Bright - Front", src: WesternCapercaillie_BrightFemaleFront },
      { name: "Bright - Back", src: WesternCapercaillie_BrightFemaleBack },
      { name: "Brown - Front", src: WesternCapercaillie_BrownFemaleFront },
      { name: "Brown - Back", src: WesternCapercaillie_BrownFemaleBack },
      { name: "Leucistic Variation 1 - Front", src: WesternCapercaillie_Leucistic1FemaleFront },
      { name: "Leucistic Variation 1 - Back", src: WesternCapercaillie_Leucistic1FemaleBack },
      { name: "Ochre - Front", src: WesternCapercaillie_OchreFemaleFront },
      { name: "Ochre - Back", src: WesternCapercaillie_OchreFemaleBack },
    ]
  };

  // --- SCROLL HELPER ---
  const scrollToId = (id) => (e) => {
    e.preventDefault();
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
          <span>Western Capercaillie</span>
          <div style={styles.editActions}>
          </div>
        </div>

        <div style={styles.layout}>
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside style={styles.sidebarColumn}>
            <div style={styles.sidebarHeader}>Western Capercaillie</div>
            <div style={styles.sidebarImage}>
              <img src={WesternCapercaillieMain} alt="Western Capercaillie" style={{width:'268px', height: '134px', objectFit: 'cover'}} />
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
              <span>Combined</span>
              <div style={styles.trophyGrid}>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.silver}}>◆ Silver</span>
                  <span>2.20</span>
                </div>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.gold}}>☗ Gold</span>
                  <span>3.60</span>
                </div>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.diamond}}>☗ Diamond</span>
                  <span>4.64</span>
                </div>
              </div>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Weight</span>
              1.5kg — 5kg<br/>
              3lbs — 11lbs
            </div>

            <div style={styles.sidebarSection}>
               <span style={styles.sidebarLabel}>Plumage</span>
               <span style={{fontSize:'0.85rem'}}>
                  Bright, Brown, Dark, Leucistic, Ochre, Pale
               </span>
            </div>

            <div style={styles.sidebarHeader}>Locations</div>
            <div style={styles.sidebarSection}>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Medved-Taiga National Park</span></div>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Revontuli Coast</span></div>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Tòrr nan Sithean</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main style={styles.mainColumn}>

            {/* Quote Block */}
            <div style={styles.quoteBox}>
              "The Western Capercaillie is the largest of all grouse species. Similar to the Black Grouse it's known for the mating ritual. Males perform for females with with puffed out feathers, strutting and very distinct calls. During mating season the ritual can get very aggressive and males can end up killing each other. Female and male capercaillie are easily distinguishable by their size and colouration. The male is much bigger than the female and their plumages are distinctly different. The female capercaillie live in flocks with their yearling chicks while the adult male are almost always solitary. The name Capercaillie comes from Gaelic 'capul coille' which translates into 'horse of the woods'."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p style={{marginBottom:'20px'}}>
              The <strong>Western Capercaillie</strong> is a species of "upland" bird that was introduced with <span style={styles.link}>Revontuli Coast</span>. Also dwells on <span style={styles.link}>Medved-Taiga National Park</span> and <span style={styles.link}>Tòrr nan Sithean</span>.
            </p>
            <p style={{marginBottom:'20px'}}>
              It is one of 5 grouse currently huntable in game. The other Grouse include <span style={styles.link}>Rock Ptarmigan</span>, <span style={styles.link}>Willow Ptarmigan</span>, <span style={styles.link}>Black Grouse</span>, and <span style={styles.link}>Hazel Grouse</span>.
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
                <li><a href="#features" onClick={scrollToId('features')} style={styles.link}>Features</a></li>
                <li><a href="#need-zones" onClick={scrollToId('need-zones')} style={styles.link}>Need Zone Times</a></li>
                <li>
                  <a href="#plumage-variants" onClick={scrollToId('plumage-variants')} style={styles.link}>Plumage variants</a>
                  <ul style={{listStyleType:'none', paddingLeft:'10px', margin:'5px 0'}}>
                      <li style={{color:'#6fb2e6'}}><a href="#plumage-male" onClick={scrollToId('plumage-male')} style={styles.link}>3.1. Male</a></li>
                      <li style={{color:'#6fb2e6'}}><a href="#plumage-female" onClick={scrollToId('plumage-female')} style={styles.link}>3.2. Female</a></li>
                  </ul>
                </li>
                <li><a href="#plumage-rarity" onClick={scrollToId('plumage-rarity')} style={styles.link}>Plumage Variant Rarity</a></li>
                <li><a href="#trivia" onClick={scrollToId('trivia')} style={styles.link}>Trivia</a></li>
                <li><a href="#references" onClick={scrollToId('references')} style={styles.link}>References</a></li>
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
                        <tr><th colSpan="2" style={{...styles.th, textAlign: 'center'}}>Revontuli Coast</th></tr>
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

            {/* PLUMAGE VARIANTS (Gallery) */}
            <h2 id="plumage-variants" style={styles.h2}>Plumage variants</h2>
            
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
                            Dark (99.82%)
                        </td>
                        <td style={styles.td}>X</td>
                        <td style={styles.td}>X</td>
                        <td style={styles.td}>
                            Leucistic Variation 1 (0.09%)<br/>
                            Leucistic Variation 2 (0.04%)<br/>
                            Pale (0.04%)
                        </td>
                    </tr>
                    <tr>
                        <td style={{...styles.td, color: '#d63384', fontStyle: 'italic', fontWeight: 'bold'}}>
                            Female
                        </td>
                        <td style={styles.td}>
                            Brown (74.88%)<br/>
                            Bright (12.53%)<br/>
                            Ochra (12.53%)
                        </td>
                        <td style={styles.td}>X</td>
                        <td style={styles.td}>X</td>
                        <td style={styles.td}>
                            Leucistic (0.07%)
                        </td>
                    </tr>
                </tbody>
            </table>

            {/* TRIVIA */}
            <h2 id="trivia" style={styles.h2}>Trivia</h2>
            <ul style={{paddingLeft:'20px', marginBottom: '30px'}}>
              <li style={{marginBottom:'8px'}}>The <strong>Western Capercaillie</strong> is well adapted for cold climates. Not only do <strong>Capercaillie</strong> have feathers covering their legs, but they also have rowed 'Horns' on their toes which helps distribute weight when walking on snow.<sup>[1]</sup> <i>"Yes, it literally has snow shoes, lol"</i></li>
              <li style={{marginBottom:'8px'}}>The <strong>Capercaillie</strong> is one of few animals in game that can go aggressive and is currently the only bird to do so. This is a reflection of how notoriously aggressive the <strong>Capercaillie</strong> is in real life.</li>
            </ul>

            {/* REFERENCES */}
            <h2 id="references" style={styles.h2}>References</h2>
            <div style={{fontSize: '0.9rem'}}>
               1. ↑ <span style={styles.link}>https://www.mindenpictures.com/stock-photo-capercaillie-tetrao-urogallus-close-up-of-foot-kuusamo-finland-march-naturephotography-image90716578.html</span>
            </div>

            <AnimalsTableMini />
          </main>
        </div>
      </div>
    </div>
  );
};

export default WesternCapercaillie;