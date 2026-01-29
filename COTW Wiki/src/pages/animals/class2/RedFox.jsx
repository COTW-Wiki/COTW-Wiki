import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import DrinkingZoneIcon from '../../../assets/DrinkingZoneIcon.webp';
import class2Icon from '../../../assets/Class2Icon.webp'; // Class 2 for Red Fox
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import RedFoxMain from '../../../assets/RedFox.webp';
import ShotSchemeImage from '../../../assets/Red_fox_shot_scheme.webp';

// Fur Variant Images (Placeholders)
// Standard
import RedFox_AlbinoMale from '../../../assets/RedFox_AlbinoMaleLeftSide.webp';
import RedFox_DarkRedMale from '../../../assets/RedFox_DarkRedMaleLeftSide.webp';
import RedFox_MelanisticMale from '../../../assets/RedFox_MelanisticMaleLeftSide.webp';
import RedFox_OrangeMale from '../../../assets/RedFox_OrangeMaleLeftSide.webp';
import RedFox_PiebaldMaleLeftSide from '../../../assets/RedFox_PiebaldMaleLeftSide.webp';
import RedFox_PiebaldMaleRightSide from '../../../assets/RedFox_PiebaldMaleRightSide.webp';
import RedFox_RedMale from '../../../assets/RedFox_RedMaleLeftSide.webp';

import RedFox_AlbinoFemale from '../../../assets/RedFox_AlbinoFemaleLeftSide.webp';
import RedFox_DarkRedFemale from '../../../assets/RedFox_DarkRedFemaleLeftSide.webp';
import RedFox_MelanisticFemale from '../../../assets/RedFox_MelanisticFemaleLeftSide.webp';
import RedFox_OrangeFemale from '../../../assets/RedFox_OrangeFemaleLeftSide.webp';
import RedFox_PiebaldFemaleLeftSide from '../../../assets/RedFox_PiebaldFemaleLeftSide.webp';
import RedFox_PiebaldFemaleRightSide from '../../../assets/RedFox_PiebaldFemaleRightSide.webp';
import RedFox_RedFemale from '../../../assets/RedFox_RedFemaleLeftSide.webp';

// Great One (Fabled)
import RedFox_Fabled_BloodMoon from '../../../assets/RedFox_FabledBloodMoon.webp';
import RedFox_Fabled_Candycane from '../../../assets/RedFox_FabledCandycane.webp';
import RedFox_Fabled_CherryBlossom from '../../../assets/RedFox_FabledCherryBlossom.webp';
import RedFox_Fabled_Licorice from '../../../assets/RedFox_FabledLicorice.webp';
import RedFox_Fabled_MidnightPoppy from '../../../assets/RedFox_FabledMidnightPoppy.webp';
import RedFox_Fabled_MysticSnowdrop from '../../../assets/RedFox_FabledMysticSnowdrop.webp';
import RedFox_Fabled_Peppermint from '../../../assets/RedFox_FabledPeppermint.webp';
import RedFox_Fabled_RosebudFrost from '../../../assets/RedFox_FabledRosebudFrost.webp';
import RedFox_Fabled_ScarletNightshade from '../../../assets/RedFox_FabledScarletNightshade.webp';


const RedFox = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  const needZonesData = [
    {
      name: "Hirschfelden / Emerald Coast",
      schedule: [
        { time: "00:00 - 04:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "04:00 - 07:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "07:00 - 10:00", type: "Resting", icon: RestingZoneIcon },
        { time: "10:00 - 13:00", type: "Resting", icon: RestingZoneIcon },
        { time: "13:00 - 17:00", type: "Resting", icon: RestingZoneIcon },
        { time: "17:00 - 20:00", type: "Drinking", icon: DrinkingZoneIcon },
        { time: "20:00 - 00:00", type: "Feeding", icon: FeedingZoneIcon },
      ]
    }
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Docile and skittish" },
    { label: "Habitat", value: "A mix of forests, open fields, and mountainous terrain" },
    { label: "Senses", value: "Excellent vision and very good hearing" },
    { label: "Social", value: "Typically solitary" },
    { label: "Active", value: "During dawn and dusk" },
    { label: "Recommended Equipment", value: "Class 2 Ammo, Predator \"Jackrabbit\" Caller" },
    { label: "Species", value: "Vulpes vulpes", italic: true, isLink: true },
    { label: "Difficulty", value: "Average" },
  ];

  // Fur Gallery Data (Standard) — separate male and female galleries
  const furGalleryMale = [
    { name: "Albino", src: RedFox_AlbinoMale },
    { name: "Dark Red", src: RedFox_DarkRedMale },
    { name: "Melanistic", src: RedFox_MelanisticMale },
    { name: "Orange", src: RedFox_OrangeMale },
    { name: "Piebald", src: RedFox_PiebaldMaleLeftSide },
    { name: "Red", src: RedFox_RedMale },
  ];

  const furGalleryFemale = [
    { name: "Albino", src: RedFox_AlbinoFemale },
    { name: "Dark Red", src: RedFox_DarkRedFemale },
    { name: "Melanistic", src: RedFox_MelanisticFemale },
    { name: "Orange", src: RedFox_OrangeFemale },
    { name: "Piebald", src: RedFox_PiebaldFemaleLeftSide },
    { name: "Red", src: RedFox_RedFemale },
  ];

  // Fur Gallery Data (Great One) — use imported Fabled asset names
  const furGalleryGO = [
    { name: "Fabled Blood Moon", src: RedFox_Fabled_BloodMoon },
    { name: "Fabled Candycane", src: RedFox_Fabled_Candycane },
    { name: "Fabled Cherry Blossom", src: RedFox_Fabled_CherryBlossom },
    { name: "Fabled Licorice", src: RedFox_Fabled_Licorice },
    { name: "Fabled Midnight Poppy", src: RedFox_Fabled_MidnightPoppy },
    { name: "Fabled Mystic Snowdrop", src: RedFox_Fabled_MysticSnowdrop },
    { name: "Fabled Peppermint", src: RedFox_Fabled_Peppermint },
    { name: "Fabled Rosebud Frost", src: RedFox_Fabled_RosebudFrost },
    { name: "Fabled Scarlet Nightshade", src: RedFox_Fabled_ScarletNightshade },
  ];

  // Hunting Tips Data
  const huntingTips = [
    "To get 100% Integrity bonus, the fox should be only hunted using either .223 ammo, .22h ammo or 300gr Arrows (see Integrity). Because of the difficulties of proper bow hunt (precision over distances, proper aiming etc.), it is recommended to use the .223 ammo because of its superior precision over distances.",
    "Regarding its small size and good senses, a red fox can give a hunter a hard time. It can smell and hear a careless hunter from far away and will immediately run away if alarmed and is also nearly impossible to shoot in the woods So the best strategy is to sneak up on them as near as possible and shoot on sight. Here the superior precision of the .223 is useful to hit the fox properly."
  ];

  // Trivia Data
  const triviaData = [
    "The Red Fox is one of the first canids, along with the Coyote, to appear in game. It is also part of the original cast of huntable animals at launch.",
    "The word Fox is thought to descent from the Proto-Germanic word \"Fuhsaz\", for \"Tail\".",
    "It also is called \"Renard Roux\" in French. The \"Renard\" word is Germanic in origin. It means \"Wily\", a synonym for 'Sly'.",
    "It's the most wide spread Fox, Canid, and member of the Carnivora order in the world as it can be found on every continent except Antarctica.",
    "In December 6, 2022 large update Red Fox got a refined appearance.",
    "In December 3, 2024 the Red Fox got a visual update again."
  ];

  // References List
  const references = [
    "Red Fox Need Zones, Hirschfelden",
    "Red Fox Need Zones, Emerald Coast",
    "https://www.etymonline.com/word/fox",
    "https://steamdb.info/patchnotes/9946142/",
  ];

  // Smooth scroll helper for TOC links
  const scrollToId = (id) => (e) => {
    if (e && e.preventDefault) e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    try { window.history.replaceState(null, '', `#${id}`); } catch (err) {}
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
    h3: {
      color: '#9fd3f0',
      marginTop: '18px',
      marginBottom: '10px',
      fontSize: '1.15rem',
      fontWeight: '500',
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
          <span>Red Fox</span>
        </div>

        <div style={styles.layout}>
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside style={styles.sidebarColumn}>
            <div style={styles.sidebarHeader}>Red Fox</div>
            <div style={styles.sidebarImage}>
              <img src={RedFoxMain} alt="Red Fox" style={{width:'100%', height: '100%', objectFit: 'cover'}} />
            </div>
            
            <div style={styles.sidebarHeader}>General Information</div>
            
            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Class</span>
              <span><img src={class2Icon} alt="Class 2" style={{width:'24px', height:'24px', verticalAlign: 'middle', marginRight: '6px'}}/>2</span>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Difficulty</span>
              <span>1: Trivial — 9: Legendary</span><br/>
              <span>10: Fabled</span>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Trophy Type</span>
              <span>Weight</span>
              <div style={styles.trophyGrid}>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.silver}}>◆ Silver</span>
                  <span>4.66</span>
                </div>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.gold}}>☗ Gold</span>
                  <span>10.03</span>
                </div>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.diamond}}>☗ Diamond</span>
                  <span>14.05</span>
                </div>
              </div>
              <div style={{marginTop: '10px', textAlign: 'center', backgroundColor: '#112233', padding: '5px', borderRadius: '4px'}}>
                  <span style={{display: 'block', fontSize: '0.75rem', fontWeight: 'bold'}}>💠 Great One</span>
              </div>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Weight</span>
              1kg — 15.4kg<br/>
              <span style={{color: '#88a0b8', fontSize: '0.85rem'}}>2lbs — 34lbs</span>
            </div>

            <div style={styles.sidebarSection}>
               <span style={styles.sidebarLabel}>Fur</span>
               <span style={{fontSize:'0.85rem'}}>
                  Albino, Dark Red, Melanistic, Orange, Piebald, Red<br/>
                  <strong>Fabled Exclusive:</strong> Blood Moon, Candycane, Cherry Blossom, Licorice, Midnight Poppy, Mystic Snowdrop, Peppermint, Rosebud Frost, Scarlet Nightshade
               </span>
            </div>

            <div style={styles.sidebarHeader}>Locations</div>
            <div style={styles.sidebarSection}>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Hirschfelden Hunting Reserve</span></div>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Yukon Valley Nature Reserve</span></div>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>New England Mountains</span></div>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Emerald Coast</span></div>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Salzwiesen Park</span></div>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Tòrr nan Sìthean</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main style={styles.mainColumn}>

            {/* Quote Block */}
            <div style={styles.quoteBox}>
              "Native to the entire Northern Hemisphere, the red fox is one of the larger species of fox and is characterized by their most typical orange-red fur and large fluffy tail. Red foxes are territorial omnivores but generally feed on smaller game such as squirrels, mice, and rabbits. They can breed fiercely, and are considered an invasive species in various parts of the world. Males and females often look quite the same, but vixens often weigh less. Males weigh around 10.00 kg (22 lb). The red fox's smaller size makes it a challenge to hunt at the time, as it is hard to spot them."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p style={{marginBottom:'20px'}}>
              The <strong>Red fox</strong> is a small animal of the <span style={styles.link}>class 2</span>. It can be hunted in <span style={styles.link}>Hirschfelden Hunting Reserve</span>, <span style={styles.link}>Yukon Valley</span>, <span style={styles.link}>New England Mountains</span>, <span style={styles.link}>Emerald Coast</span>, <span style={styles.link}>Salzwiesen Park</span> and <span style={styles.link}>Tòrr nan Sìthean</span>.
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
                <li><a href="#features" onClick={scrollToId('features')} style={styles.link}>Features</a></li>
                <li><a href="#need-zones" onClick={scrollToId('need-zones')} style={styles.link}>Need Zone Times</a></li>
                <li><a href="#shot-scheme" onClick={scrollToId('shot-scheme')} style={styles.link}>Shot scheme</a></li>
                <li><a href="#hunting-tips" onClick={scrollToId('hunting-tips')} style={styles.link}>Hunting Tips</a></li>
                <li>
                  <a href="#fur-variants" onClick={scrollToId('fur-variants')} style={styles.link}>Fur variants</a>
                  <ol style={{margin:'6px 0 0 12px', paddingLeft: '0', listStyleType: 'none', color: '#6fb2e6'}}>
                    <li style={{marginBottom: '4px'}}><a href="#fur-male" onClick={scrollToId('fur-male')} style={styles.link}>5.1 Male</a></li>
                    <li><a href="#fur-female" onClick={scrollToId('fur-female')} style={styles.link}>5.2 Female</a></li>
                  </ol>
                </li>
                <li><a href="#fur-variants-go" onClick={scrollToId('fur-variants-go')} style={styles.link}>Fur Variants | Great One</a></li>
                <li><a href="#fur-variant-rarity" onClick={scrollToId('fur-variant-rarity')} style={styles.link}>Fur Variant Rarity</a></li>
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
                        <tr><th colSpan="2" style={{...styles.th, textAlign: 'center'}}>Hirschfelden / Emerald Coast</th></tr>
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

            {/* HUNTING TIPS */}
            <h2 id="hunting-tips" style={styles.h2}>Hunting Tips</h2>
            {huntingTips.map((tip, idx) => (
                <p key={idx} style={{marginBottom: '15px'}}>{tip}</p>
            ))}

            {/* FUR VARIANTS (Standard Gallery) */}
            <h2 id="fur-variants" style={styles.h2}>Fur variants</h2>
            <h3 id="fur-male" style={styles.h3}>Male</h3>
            <div style={styles.galleryGrid}>
              {furGalleryMale.map((item, i) => (
                <div key={i} style={styles.galleryItem}>
                  <div style={styles.galleryImgPlaceholder}>
                    <img src={item.src} alt={item.name} style={{width:'100%', height: '100%', objectFit: 'contain'}} />
                  </div>
                  <span style={styles.galleryLabel}>{item.name}</span>
                </div>
              ))}
            </div>

            <h3 id="fur-female" style={styles.h3}>Female</h3>
            <div style={styles.galleryGrid}>
              {furGalleryFemale.map((item, i) => (
                <div key={i} style={styles.galleryItem}>
                  <div style={styles.galleryImgPlaceholder}>
                    <img src={item.src} alt={item.name} style={{width:'100%', height: '100%', objectFit: 'contain'}} />
                  </div>
                  <span style={styles.galleryLabel}>{item.name}</span>
                </div>
              ))}
            </div>

            {/* FUR VARIANTS (Great One Gallery) */}
            <h2 id="fur-variants-go" style={styles.h2}>Fur Variants | Great One</h2>
            <div style={styles.galleryGrid}>
              {furGalleryGO.map((item, i) => (
                <div key={i} style={styles.galleryItem}>
                  <div style={styles.galleryImgPlaceholder}>
                    <img src={item.src} alt={item.name} style={{width:'100%', height: '100%', objectFit: 'contain'}} />
                  </div>
                  <span style={styles.galleryLabel}>{item.name}</span>
                </div>
              ))}
            </div>

            {/* FUR VARIANT RARITY TABLE */}
            <h2 id="fur-variant-rarity" style={styles.h2}>Fur Variant Rarity</h2>
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
                                Dark Red (33.23%)<br/>
                                Orange (33.23%)<br/>
                                Red (33.23%)
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
            <ol style={{fontSize: '0.9rem', paddingLeft: '20px'}}>
               {references.map((ref, idx) => (
                  <li key={idx} style={{marginBottom: '4px'}}>
                     <span style={styles.link}>↑ {ref}</span>
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

export default RedFox;