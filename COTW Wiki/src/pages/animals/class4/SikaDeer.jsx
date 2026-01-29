import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import DrinkingZoneIcon from '../../../assets/DrinkingZoneIcon.webp';
import class4Icon from '../../../assets/Class4Icon.webp'; // Class 4 for Sika Deer
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import SikaDeerMain from '../../../assets/SikaDeer.webp';

// Fur Variant Images (Placeholders)
import SikaDeer_AlbinoMale from '../../../assets/SikaDeer_AlbinoMale.webp';
import SikaDeer_BlackMale from '../../../assets/SikaDeer_BlackMale.webp';
import SikaDeer_BrownMale from '../../../assets/SikaDeer_BrownMale.webp';
import SikaDeer_DarkSpottedMale from '../../../assets/SikaDeer_DarkSpottedMale.webp';
import SikaDeer_RedSpottedMale from '../../../assets/SikaDeer_RedSpottedMale.webp';
import SikaDeer_SpottedMale from '../../../assets/SikaDeer_SpottedMale.webp';

import SikaDeer_AlbinoFemale from '../../../assets/SikaDeer_AlbinoFemale.webp';
import SikaDeer_BlackFemale from '../../../assets/SikaDeer_BlackFemale.webp';
import SikaDeer_BrownFemale from '../../../assets/SikaDeer_BrownFemale.webp';
import SikaDeer_DarkSpottedFemale from '../../../assets/SikaDeer_DarkSpottedFemale.webp';
import SikaDeer_RedSpottedFemale from '../../../assets/SikaDeer_RedSpottedFemale.webp';
import SikaDeer_SpottedFemale from '../../../assets/SikaDeer_SpottedFemale.webp';


// --- ASSET ALIASES ---
// Map generic gallery identifiers to the actual imported male/female assets
const SikaDeer_Albino = SikaDeer_AlbinoMale;
const SikaDeer_Black = SikaDeer_BlackMale;
const SikaDeer_Brown = SikaDeer_BrownMale;
const SikaDeer_DarkSpotted = SikaDeer_DarkSpottedMale;
const SikaDeer_RedSpotted = SikaDeer_RedSpottedMale;
const SikaDeer_Spotted = SikaDeer_SpottedMale;

const SikaDeer = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  const needZonesData = [
    {
      name: "Te Awaroa National Park",
      schedule: [
        { time: "00:00 - 05:30", type: "Resting", icon: RestingZoneIcon },
        { time: "05:00 - 09:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "10:00 - 13:00", type: "Drinking", icon: DrinkingZoneIcon },
        { time: "11:30 - 14:30", type: "Resting", icon: RestingZoneIcon },
        { time: "14:00 - 18:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "17:30 - 21:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "21:00 - 00:00", type: "Resting", icon: RestingZoneIcon },
      ]
    }
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Elusive and cunning, highly vocal" },
    { label: "Habitat", value: "Subtropical forests with dense understory" },
    { label: "Senses", value: "Excellent hearing and smell, average vision" },
    { label: "Social", value: "Single sex groups, small groups of Hinds with Yearling females and fawns" },
    { label: "Active", value: "Dawn and Dusk" },
    { label: "Recommended Equipment", value: "Class 4 Ammo, Deer \"Bleat\" Caller, Deer \"Grunt\" Caller, Buck \"Snort Wheeze\" Caller, Red Deer Caller, Red Deer Scent Lure" },
    { label: "Species", value: "Cervus nippon", italic: true, isLink: true },
    { label: "Difficulty", value: "Easy" },
  ];

  // Fur Gallery Data (split by sex)
  const maleGallery = [
    { name: "Albino", src: SikaDeer_AlbinoMale },
    { name: "Black", src: SikaDeer_BlackMale },
    { name: "Brown", src: SikaDeer_BrownMale },
    { name: "Dark Spotted", src: SikaDeer_DarkSpottedMale },
    { name: "Red Spotted", src: SikaDeer_RedSpottedMale },
    { name: "Spotted", src: SikaDeer_SpottedMale },
  ];

  const femaleGallery = [
    { name: "Albino", src: SikaDeer_AlbinoFemale },
    { name: "Black", src: SikaDeer_BlackFemale },
    { name: "Brown", src: SikaDeer_BrownFemale },
    { name: "Dark Spotted", src: SikaDeer_DarkSpottedFemale },
    { name: "Red Spotted", src: SikaDeer_RedSpottedFemale },
    { name: "Spotted", src: SikaDeer_SpottedFemale },
  ];

  // Trivia Data
  const triviaData = [
    "The Sika Deer gets its name from the Japanese word for deer/shika (鹿)",
    "The scientific name for the Sika Deer (Cervus nippon) can literally be translated as \"Deer Japan\", or \"Japanese Deer\". Although it is believed that the original meaning of the word 'Cervus' was \"Horned\".",
    "Famous samurai 'Honda Tadakatsu' wore a black helmet adorned with replica Sika Deer antlers."
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

  // Smooth scroll helper for TOC links
  const scrollToId = (e, id) => {
    if (e && e.preventDefault) e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      try { window.history.replaceState(null, '', `#${id}`); } catch (err) { /* ignore */ }
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.innerWrapper}>
        
        {/* PAGE HEADER */}
        <div style={styles.mainHeader}>
          <span>Sika Deer</span>
        </div>

        <div style={styles.layout}>
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside style={styles.sidebarColumn}>
            <div style={styles.sidebarHeader}>Sika Deer</div>
            <div style={styles.sidebarImage}>
              <img src={SikaDeerMain} alt="Sika Deer" style={{width:'100%', height: '100%', objectFit: 'cover'}} />
            </div>
            
            <div style={styles.sidebarHeader}>General Information</div>
            
            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Class</span>
              <span><img src={class4Icon} alt="Class 4" style={{width:'24px', height:'24px', verticalAlign: 'middle', marginRight: '6px'}}/>4</span>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Difficulty</span>
              <span>1: Trivial — 5: Medium</span>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Trophy Type</span>
              <span>Antlers</span>
              <div style={styles.trophyGrid}>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.silver}}>◆ Silver</span>
                  <span>53.29</span>
                </div>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.gold}}>☗ Gold</span>
                  <span>136.40</span>
                </div>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.diamond}}>☗ Diamond</span>
                  <span>198.74</span>
                </div>
              </div>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Weight</span>
              25kg — 75kg<br/>
              <span style={{color: '#88a0b8', fontSize: '0.85rem'}}>55lbs — 165lbs</span>
            </div>

            <div style={styles.sidebarSection}>
               <span style={styles.sidebarLabel}>Fur</span>
               <span style={{fontSize:'0.85rem'}}>
                 Albino, Black, Brown, Dark Spotted, Red Spotted, Spotted
               </span>
            </div>

            <div style={styles.sidebarHeader}>Locations</div>
            <div style={styles.sidebarSection}>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Te Awaroa National Park</span></div>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Tòrr nan Sithean</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main style={styles.mainColumn}>

            {/* Quote Block */}
            <div style={styles.quoteBox}>
              "The sika deer (Cervus nippon) also known as the spotted deer or the Japanese deer, is a species of deer native to much of East Asia, and introduced to various other parts of the world. Previously found from northern Vietnam in the south to the Russian Far East in the north, it is now uncommon in these areas, excluding Japan, where the species is overabundant. A cunning, deer similar to that of a whitetail they inhabit native manuka and timber for most of the day venturing out in the evenings to late morning."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p style={{marginBottom:'20px'}}>
              The <strong>Sika Deer</strong> is a class 4 deer. It can be hunted in <span style={styles.link}>Te Awaroa National Park</span> and <span style={styles.link}>Tòrr nan Sithean</span>.
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
                <li><a href="#tips" onClick={(e)=>scrollToId(e,'tips')} style={styles.link}>Tips</a></li>
                <li><a href="#fur-variants" onClick={(e)=>scrollToId(e,'fur-variants')} style={styles.link}>Fur Variants</a>
                  <ol style={{marginTop:'6px', marginLeft:'-28px', listStyleType: 'none', color: '#9fd3ff'}}>
                    <li><a href="#fur-male" onClick={(e)=>scrollToId(e,'fur-male')} style={styles.link}>4.1 Male</a></li>
                    <li><a href="#fur-female" onClick={(e)=>scrollToId(e,'fur-female')} style={styles.link}>4.2 Female</a></li>
                  </ol>
                </li>
                <li><a href="#fur-rarity" onClick={(e)=>scrollToId(e,'fur-rarity')} style={styles.link}>Fur Variant Rarity</a></li>
                <li><a href="#trivia" onClick={(e)=>scrollToId(e,'trivia')} style={styles.link}>Trivia</a></li>
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
                        <tr><th colSpan="2" style={{...styles.th, textAlign: 'center'}}>Te Awaroa National Park</th></tr>
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

            {/* Shot scheme removed per request */}

            {/* TIPS */}
            <h2 id="tips" style={styles.h2}>Tips</h2>
            <div style={{fontSize:'0.95rem', marginBottom:'18px', color: '#dbe4eb'}}>
              <p>
                Among many other locations, the Sika Deer can be found at the Te Tai Pounamu, in the Invercraig Regions, at The Bay Of Rest and in the Waikerera River Region.
              </p>
            </div>

            {/* FUR VARIANTS (Gallery) */}
            <h2 id="fur-variants" style={styles.h2}>Fur Variants</h2>

            <h3 id="fur-male" style={{marginTop:'10px', marginBottom:'8px', color: '#6fb2e6'}}>Male</h3>
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

            <h3 id="fur-female" style={{marginTop:'20px', marginBottom:'8px', color: '#6fb2e6'}}>Female</h3>
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

            {/* FUR VARIANT RARITY TABLE */}
            <h2 id="fur-rarity" style={styles.h2}>Fur Variant Rarity</h2>
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
                                Male<span style={{color: '#dbe4eb'}}>/</span><span style={{color: '#d63384'}}>Female</span>
                            </td>
                            <td style={styles.td}>
                                Black (37.35%)<br/>
                                Brown (37.35%)<br/>
                                Dark Spotted (12.50%)<br/>
                                Spotted (12.50%)
                            </td>
                            <td style={styles.td}>
                                X
                            </td>
                            <td style={styles.td}>
                                Red Spotted (0.20%)<br/>
                                Albino (0.10%)
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

            <div style={{marginTop: '40px'}}>
                <AnimalsTableMini />
            </div>
            
          </main>
        </div>
      </div>
    </div>
  );
};

export default SikaDeer;