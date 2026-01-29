import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import DrinkingZoneIcon from '../../../assets/DrinkingZoneIcon.webp';
import class6Icon from '../../../assets/Class6Icon.webp'; 
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import RedDeerMain from '../../../assets/RedDeer.webp';
import ShotSchemeImg from '../../../assets/Red_deer_shot_scheme.webp';

// Fur Variant Images
// Male
import RedDeer_AlbinoMaleRightSide from '../../../assets/RedDeer_AlbinoMaleRightSide.webp';
import RedDeer_BrownMaleRightSide from '../../../assets/RedDeer_BrownMaleRightSide.webp';
import RedDeer_DarkBrownMaleRightSide from '../../../assets/RedDeer_DarkBrownMaleRightSide.webp';
import RedDeer_ErythristicMaleRightSide from '../../../assets/RedDeer_ErythristicMaleRightSide.webp';
import RedDeer_LeucisticMaleRightSide from '../../../assets/RedDeer_LeucisticMaleRightSide.webp';
import RedDeer_LightBrownMaleRightSide from '../../../assets/RedDeer_LightBrownMaleRightSide.webp';
import RedDeer_MelanisticMaleRightSide from '../../../assets/RedDeer_MelanisticMaleRightSide.webp';
import RedDeer_PiebaldVariation1MaleRightSide from '../../../assets/RedDeer_PiebaldVariation1MaleRightSide.webp';
import RedDeer_PiebaldVariation1MaleLeftSide from '../../../assets/RedDeer_PiebaldVariation1MaleLeftSide.webp';
import RedDeer_PiebaldVariation2MaleRightSide from '../../../assets/RedDeer_PiebaldVariation2MaleRightSide.webp';
import RedDeer_PiebaldVariation2MaleLeftSide from '../../../assets/RedDeer_PiebaldVariation2MaleLeftSide.webp';

// Female
import RedDeer_AlbinoFemaleRightSide from '../../../assets/RedDeer_AlbinoFemaleRightSide.webp';
import RedDeer_BrownFemaleRightSide from '../../../assets/RedDeer_BrownFemaleRightSide.webp';
import RedDeer_DarkBrownFemaleRightSide from '../../../assets/RedDeer_DarkBrownFemaleRightSide.webp';
import RedDeer_ErythristicFemaleRightSide from '../../../assets/RedDeer_ErythristicFemaleRightSide.webp';
import RedDeer_LeucisticFemaleRightSide from '../../../assets/RedDeer_LeucisticFemaleRightSide.webp';
import RedDeer_LightBrownFemaleRightSide from '../../../assets/RedDeer_LightBrownFemaleRightSide.webp';
import RedDeer_MelanisticFemaleRightSide from '../../../assets/RedDeer_MelanisticFemaleRightSide.webp';
import RedDeer_PiebaldVariation1FemaleRightSide from '../../../assets/RedDeer_PiebaldVariation1FemaleRightSide.webp';
import RedDeer_PiebaldVariation1FemaleLeftSide from '../../../assets/RedDeer_PiebaldVariation1FemaleLeftSide.webp';
import RedDeer_PiebaldVariation2FemaleRightSide from '../../../assets/RedDeer_PiebaldVariation2FemaleRightSide.webp';
import RedDeer_PiebaldVariation2FemaleLeftSide from '../../../assets/RedDeer_PiebaldVariation2FemaleLeftSide.webp';

// Great One
import RedDeer_FabledSpotted from '../../../assets/RedDeer_FabledSpotted.webp';


const RedDeer = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  const needZonesData = [
    {
      name: "Hirschfelden and Emerald Coast",
      schedule: [
        { time: "00:00 - 03:00", type: "Resting", icon: RestingZoneIcon },
        { time: "03:00 - 06:00", type: "Resting", icon: RestingZoneIcon },
        { time: "06:00 - 10:00", type: "Drinking", icon: DrinkingZoneIcon },
        { time: "10:00 - 13:00", type: "Resting", icon: RestingZoneIcon },
        { time: "13:00 - 17:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "17:00 - 21:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "21:00 - 00:00", type: "Resting", icon: RestingZoneIcon },
      ]
    }
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Docile and not aggressive" },
    { label: "Habitat", value: "Prefer forests and mountainous terrain" },
    { label: "Senses", value: "Very good sense of smell" },
    { label: "Social", value: "Sometimes solitary, otherwise they live in larger groups" },
    { label: "Active", value: "During dawn and dusk" },
    { label: "Recommended Equipment", value: "Class 6 Ammo, Red Deer Caller, Red Deer Scent" },
    { label: "Species", value: "Cervus elaphus", italic: true, isLink: true },
    { label: "Difficulty", value: "Average" },
  ];

  // Fur Gallery Data
  const maleGallery = [
    { name: "Albino", src: RedDeer_AlbinoMaleRightSide },
    { name: "Brown", src: RedDeer_BrownMaleRightSide },
    { name: "Dark Brown", src: RedDeer_DarkBrownMaleRightSide },
    { name: "Erythristic", src: RedDeer_ErythristicMaleRightSide },
    { name: "Leucistic", src: RedDeer_LeucisticMaleRightSide },
    { name: "Light Brown", src: RedDeer_LightBrownMaleRightSide },
    { name: "Melanistic", src: RedDeer_MelanisticMaleRightSide },
    { name: "Piebald Variation 1 (Right)", src: RedDeer_PiebaldVariation1MaleRightSide },
    { name: "Piebald Variation 1 (Left)", src: RedDeer_PiebaldVariation1MaleLeftSide },
    { name: "Piebald Variation 2 (Right)", src: RedDeer_PiebaldVariation2MaleRightSide },
    { name: "Piebald Variation 2 (Left)", src: RedDeer_PiebaldVariation2MaleLeftSide },
  ];

  const femaleGallery = [
    { name: "Albino", src: RedDeer_AlbinoFemaleRightSide },
    { name: "Brown", src: RedDeer_BrownFemaleRightSide },
    { name: "Dark Brown", src: RedDeer_DarkBrownFemaleRightSide },
    { name: "Erythristic", src: RedDeer_ErythristicFemaleRightSide },
    { name: "Leucistic", src: RedDeer_LeucisticFemaleRightSide },
    { name: "Light Brown", src: RedDeer_LightBrownFemaleRightSide },
    { name: "Melanistic", src: RedDeer_MelanisticFemaleRightSide },
    { name: "Piebald Variation 1 (Right)", src: RedDeer_PiebaldVariation1FemaleRightSide },
    { name: "Piebald Variation 1 (Left)", src: RedDeer_PiebaldVariation1FemaleLeftSide },
    { name: "Piebald Variation 2 (Right)", src: RedDeer_PiebaldVariation2FemaleRightSide },
    { name: "Piebald Variation 2 (Left)", src: RedDeer_PiebaldVariation2FemaleLeftSide },
  ];

  // Great One Gallery Data
  const greatOneGallery = [
    { name: "Fabled Spotted", src: RedDeer_FabledSpotted },
  ];

  // Trivia Data
  const triviaData = [
    "The Red Deer (Cervus Elaphus) is part of the original list of animals huntable at launch (December 2016).",
    "The Great One was introduced in November 2021.",
    "\"Red Deer\" is the equivalent of \"Rothirsch\" in German.",
    <span>They are the 4th largest deer species in the world, and the 5th largest in game. They are surpassed only by the <span style={{color: '#6fb2e6', cursor:'pointer'}}>Sambar</span>, the <span style={{color: '#6fb2e6', cursor:'pointer'}}>Rocky Mountain Elk</span>, the <span style={{color: '#6fb2e6', cursor:'pointer'}}>Roosevelt Elk</span>, and the <span style={{color: '#6fb2e6', cursor:'pointer'}}>Moose</span>.</span>,
    <span>Red Deer are easily recognizable by their distinctive \"roar\" or \"bellow\" which, next to its cousin (<span style={{color: '#6fb2e6', cursor:'pointer'}}>Roosevelt Elk</span>), is considered one of the most iconic calls among deer.</span>,
    "They are very social animals and are known for living in herds.",
    "In the wild, they can live up to 20 years, but on average tend to live up to 15.",
    "The fur of red deer goes hollow during winter, which traps a layer of insulating air close to their body, keeping them warm.",
    "In earlier Versions, the female red deer was available in the color light brown, this was later changed to grey.",
    "Red deer got a second remodel in the 8.4 patch and update, December 9 2025."
  ];

  // References Data
  const referencesData = [
    "Red Deer Need Zones, Hirschfelden",
    "Red Deer Need Zones, Emerald Coast"
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
          <span>Red Deer</span>
        </div>

        <div style={styles.layout}>
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside style={styles.sidebarColumn}>
            <div style={styles.sidebarHeader}>Red Deer</div>
            <div style={styles.sidebarImage}>
              <img src={RedDeerMain} alt="Red Deer" style={{width:'100%', height: '100%', objectFit: 'cover'}} />
            </div>
            
            <div style={styles.sidebarHeader}>General Information</div>
            
            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Class</span>
              {/* */}
              <span><img src={class6Icon} alt="Class 6" style={{width:'24px', height:'24px', verticalAlign: 'middle', marginRight: '6px'}}/>6</span>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Difficulty</span>
              {/* */}
              <span>1: Trivial — 9: Legendary</span><br/>
              <span>10: Fabled</span>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Trophy Type</span>
              <span>Antlers</span>
              <div style={styles.trophyGrid}>
                {/* */}
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.silver}}>◆ Silver</span>
                  <span>90.50</span>
                </div>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.gold}}>☗ Gold</span>
                  <span>182.25</span>
                </div>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.diamond}}>☗ Diamond</span>
                  <span>251.07</span>
                </div>
              </div>
            </div>

            <div style={styles.sidebarSection}>
               <span style={{...styles.sidebarLabel, color: '#2ecc71'}}>Great One</span>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Weight</span>
              {/* */}
              120kg — 240kg<br/>
              <span style={{color: '#88a0b8', fontSize: '0.85rem'}}>265lbs — 529lbs</span>
            </div>

            <div style={styles.sidebarSection}>
               <span style={styles.sidebarLabel}>Fur</span>
               {/* */}
               <span style={{fontSize:'0.85rem'}}>
                 Albino, Brown, Dark Brown, Erythristic, Leucistic, Light Brown, Melanistic, Piebald<br/><br/>
                 <strong>Fabled Exclusive:</strong><br/>
                 Spotted
               </span>
            </div>

            <div style={styles.sidebarHeader}>Locations</div>
            <div style={styles.sidebarSection}>
               {/* */}
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Hirschfelden Hunting Reserve</span></div>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Parque Fernando</span></div>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Cuatro Colinas Game Reserve</span></div>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Te Awaroa National Park</span></div>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Emerald Coast</span></div>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Tòrr nan Sithean</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main style={styles.mainColumn}>

            {/* Quote Block */}
            <div style={styles.quoteBox}>
              "Red deer are among the largest species of deer in Europe, Western Asia, and Northern Africa. The species has also been introduced to other parts of the world. Closely related to the American elk, red deer are characterized by their reddish-brown fur. A typical buck also called a stag, may weigh in between 160.00 - 240.00 kg (350 - 530 lb) and develop large antlers over its lifetime. Stags are easily distinguished from their female counterparts, hinds, by their thicker necks. Red deer live in larger groups and tend to inhabit broadleaf deciduous forests with flat terrains and open meadows. However they can be found in steeper areas and higher altitudes as well. They are herbivores and pose little threat to humans unless startled at close range."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p style={{marginBottom:'20px'}}>
              The <strong>Red Deer</strong> is one of the largest deer species (<span style={styles.link}>class 6</span>). It can be hunted in <span style={styles.link}>Hirschfelden</span>, <span style={styles.link}>Parque Fernando</span>, <span style={styles.link}>Cuatro Colinas</span>, <span style={styles.link}>Te Awaroa</span>, <span style={styles.link}>Emerald Coast</span> and <span style={styles.link}>Tòrr nan Sithean</span>.
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
                    <ol style={{marginTop:'6px', marginLeft:'-30px', listStyleType: 'none'}}>
                    <li><a href="#fur-male" onClick={(e)=>scrollToId(e,'fur-male')} style={styles.link}>4.1 Male</a></li>
                    <li><a href="#fur-female" onClick={(e)=>scrollToId(e,'fur-female')} style={styles.link}>4.2 Female</a></li>
                  </ol>
                <li><a href="#fur-great-ones" onClick={(e)=>scrollToId(e,'fur-great-ones')} style={styles.link}>Fur Variants | Great Ones</a></li>
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
                        <tr><th colSpan="2" style={{...styles.th, textAlign: 'center'}}>Hirschfelden, Emerald Coast</th></tr>
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

            {/* GREAT ONES */}
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
                        <tr>
                            <td style={{...styles.td, color: '#3498db', fontStyle: 'italic', fontWeight: 'bold'}}>
                                Male<span style={{color: '#dbe4eb'}}>/</span><span style={{color: '#d63384'}}>Female</span>
                            </td>
                            <td style={styles.td}>
                                Brown (33.13%)<br/>
                                Dark Brown (33.13%)<br/>
                                Light Brown (33.13%)
                            </td>
                            <td style={styles.td}>
                                X
                            </td>
                            <td style={styles.td}>
                                Piebald Variation 1 (0.20%)<br/>
                                Piebald Variation 2 (0.20%)
                            </td>
                            <td style={styles.td}>
                                Albino (0.05%)<br/>
                                Erythristic (0.05%)<br/>
                                Leucistic (0.05%)<br/>
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

            {/* YouTube teaser */}
            <div style={{marginTop: '20px', display: 'flex', justifyContent: 'center'}}>
              <div style={{position: 'relative', width: '100%', maxWidth: '800px', paddingBottom: '56.25%'}}>
                <iframe
                  src="https://www.youtube.com/embed/YgN2HpGsFmE"
                  title="Red Deer Teaser"
                  style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

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

export default RedDeer;