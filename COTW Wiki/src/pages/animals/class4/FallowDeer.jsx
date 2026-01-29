import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import DrinkingZoneIcon from '../../../assets/DrinkingZoneIcon.webp';
import class4Icon from '../../../assets/Class4Icon.webp'; // Class 4 for Fallow Deer
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import FallowDeerMain from '../../../assets/FallowDeer.webp';
import ShotSchemeImage from '../../../assets/Fallow_deer_shot_scheme.webp';

// Fur Variant Images (Placeholders)
import FallowDeer_AlbinoMaleRightSide from '../../../assets/FallowDeer_AlbinoMaleRightSide.webp';
import FallowDeer_ChocolateMaleRightSide from '../../../assets/FallowDeer_ChocolateMaleRightSide.webp';
import FallowDeer_DarkMaleRightSide from '../../../assets/FallowDeer_DarkMaleRightSide.webp';
import FallowDeer_DarkSpottedMaleRightSide from '../../../assets/FallowDeer_DarkSpottedMaleRightSide.webp';
import FallowDeer_MelanisticMaleRightSide from '../../../assets/FallowDeer_MelanisticMaleRightSide.webp';
import FallowDeer_PiebaldVariation1MaleRightSide from '../../../assets/FallowDeer_PiebaldVariation1MaleRightSide.webp';
import FallowDeer_PiebaldVariation1MaleLeftSide from '../../../assets/FallowDeer_PiebaldVariation1MaleLeftSide.webp';
import FallowDeer_PiebaldVariation2MaleRightSide from '../../../assets/FallowDeer_PiebaldVariation2MaleRightSide.webp';
import FallowDeer_PiebaldVariation2MaleLeftSide from '../../../assets/FallowDeer_PiebaldVariation2MaleLeftSide.webp';
import FallowDeer_SpottedMaleRightSide from '../../../assets/FallowDeer_SpottedMaleRightSide.webp';
import FallowDeer_WhiteMaleRightSide from '../../../assets/FallowDeer_WhiteMaleRightSide.webp';

import FallowDeer_AlbinoFemaleRightSide from '../../../assets/FallowDeer_AlbinoFemaleRightSide.webp';
import FallowDeer_DarkSpottedFemaleRightSide from '../../../assets/FallowDeer_DarkSpottedFemaleRightSide.webp';
import FallowDeer_MelanisticFemaleRightSide from '../../../assets/FallowDeer_MelanisticFemaleRightSide.webp';
import FallowDeer_RedSpottedFemaleRightSide from '../../../assets/FallowDeer_RedSpottedFemaleRightSide.webp';
import FallowDeer_SpottedFemaleRightSide from '../../../assets/FallowDeer_SpottedFemaleRightSide.webp';
import FallowDeer_PiebaldFemaleRightSide from '../../../assets/FallowDeer_PiebaldFemaleRightSide.webp';
import FallowDeer_PiebaldFemaleLeftSide from '../../../assets/FallowDeer_PiebaldFemaleLeftSide.webp';

// Great One Fur Variants (Placeholders)
import FallowDeer_FabledGoldenRightSide from '../../../assets/FallowDeer_FabledGoldenRightSide.webp';
import FallowDeer_FabledHoodedRightSide from '../../../assets/FallowDeer_FabledHoodedRightSide.webp';
import FallowDeer_FabledMochaRightSide from '../../../assets/FallowDeer_FabledMochaRightSide.webp';
import FallowDeer_FabledPaintedRightSide from '../../../assets/FallowDeer_FabledPaintedRightSide.webp';
import FallowDeer_FabledPaintedLeftSide from '../../../assets/FallowDeer_FabledPaintedLeftSide.webp';
import FallowDeer_FabledSilverRightSide from '../../../assets/FallowDeer_FabledSilverRightSide.webp';


// --- ASSET ALIASES ---
// The gallery expects generic names like `FallowDeer_Albino` etc.
// Map those generic identifiers to the actual imported asset variables.
const FallowDeer_Albino = FallowDeer_AlbinoMaleRightSide;
const FallowDeer_Chocolate = FallowDeer_ChocolateMaleRightSide;
const FallowDeer_Dark = FallowDeer_DarkMaleRightSide;
const FallowDeer_DarkSpotted = FallowDeer_DarkSpottedMaleRightSide;
const FallowDeer_Melanistic = FallowDeer_MelanisticMaleRightSide;
const FallowDeer_Piebald = FallowDeer_PiebaldVariation1MaleRightSide;
const FallowDeer_RedSpotted = FallowDeer_RedSpottedFemaleRightSide;
const FallowDeer_Spotted = FallowDeer_SpottedMaleRightSide;
const FallowDeer_White = FallowDeer_WhiteMaleRightSide;

const FallowDeer_FabledGolden = FallowDeer_FabledGoldenRightSide;
const FallowDeer_FabledHooded = FallowDeer_FabledHoodedRightSide;
const FallowDeer_FabledMocha = FallowDeer_FabledMochaRightSide;
const FallowDeer_FabledPainted = FallowDeer_FabledPaintedRightSide;
const FallowDeer_FabledSilver = FallowDeer_FabledSilverRightSide;

const FallowDeer = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  const needZonesData = [
    {
      name: "Hirschfelden & Emerald Coast",
      schedule: [
        { time: "00:00 - 03:00", type: "Resting", icon: RestingZoneIcon },
        { time: "03:00 - 06:00", type: "Resting", icon: RestingZoneIcon },
        { time: "06:00 - 10:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "10:00 - 13:00", type: "Drinking", icon: DrinkingZoneIcon },
        { time: "13:00 - 17:00", type: "Resting", icon: RestingZoneIcon },
        { time: "17:00 - 21:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "21:00 - 00:00", type: "Resting", icon: RestingZoneIcon },
      ]
    }
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Docile and generally vocal" },
    { label: "Habitat", value: "Prefer a mix of deciduous forests and open areas" },
    { label: "Senses", value: "Good senses overall, particularly excellent vision" },
    { label: "Social", value: "Prefer to stay in medium to large groups" },
    { label: "Active", value: "During dusk and dawn" },
    { label: "Recommended Equipment", value: "Class 4 Ammo, Antler Rattler" },
    { label: "Species", value: "Dama dama", italic: true, isLink: true },
    { label: "Difficulty", value: "Average" },
  ];

  // Fur Gallery Data (split by sex)
  const maleGallery = [
    { name: "Albino", src: FallowDeer_AlbinoMaleRightSide },
    { name: "Chocolate", src: FallowDeer_ChocolateMaleRightSide },
    { name: "Dark", src: FallowDeer_DarkMaleRightSide },
    { name: "Dark Spotted", src: FallowDeer_DarkSpottedMaleRightSide },
    { name: "Melanistic", src: FallowDeer_MelanisticMaleRightSide },
    { name: "Piebald Variation 1 (Right)", src: FallowDeer_PiebaldVariation1MaleRightSide },
    { name: "Piebald Variation 1 (Left)", src: FallowDeer_PiebaldVariation1MaleLeftSide },
    { name: "Piebald Variation 2 (Right)", src: FallowDeer_PiebaldVariation2MaleRightSide },
    { name: "Piebald Variation 2 (Left)", src: FallowDeer_PiebaldVariation2MaleLeftSide },
    { name: "Spotted", src: FallowDeer_SpottedMaleRightSide },
    { name: "White", src: FallowDeer_WhiteMaleRightSide },
  ];

  const femaleGallery = [
    { name: "Albino", src: FallowDeer_AlbinoFemaleRightSide },
    { name: "Dark Spotted", src: FallowDeer_DarkSpottedFemaleRightSide },
    { name: "Melanistic", src: FallowDeer_MelanisticFemaleRightSide },
    { name: "Red Spotted", src: FallowDeer_RedSpottedFemaleRightSide },
    { name: "Spotted", src: FallowDeer_SpottedFemaleRightSide },
    { name: "Piebald (Right)", src: FallowDeer_PiebaldFemaleRightSide },
    { name: "Piebald (Left)", src: FallowDeer_PiebaldFemaleLeftSide },
  ];

  // Great One Fur Gallery Data
  const greatOneGallery = [
    { name: "Fabled Golden", src: FallowDeer_FabledGolden },
    { name: "Fabled Hooded", src: FallowDeer_FabledHooded },
    { name: "Fabled Mocha", src: FallowDeer_FabledMocha },
    { name: "Fabled Painted (Right)", src: FallowDeer_FabledPaintedRightSide },
    { name: "Fabled Painted (Left)", src: FallowDeer_FabledPaintedLeftSide },
    { name: "Fabled Silver", src: FallowDeer_FabledSilver },
  ];

  // Trivia Data
  const triviaData = [
    "Fallow Deer can be found on every continent except Antarctica.",
    "Believed to originate from South West Asia, the Fallow Deer is considered a naturalized species of Europe. A naturalized species is a species of organism that, despite not originating from a region, becomes effectively \"native\". It is believed the Fallow Deer was introduced to the Mediterranean in the Neolithic Era (10,000 BC - 2,200 BC), and the Normans introduced them to the British Isles around the 12th century AD.",
    "Fallow Deer can be found as Great Ones with the release of Emerald Coast on 20. June 2023."
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
          <span>Fallow Deer</span>
        </div>

        <div style={styles.layout}>
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside style={styles.sidebarColumn}>
            <div style={styles.sidebarHeader}>Fallow Deer</div>
            <div style={styles.sidebarImage}>
              <img src={FallowDeerMain} alt="Fallow Deer" style={{width:'100%', height: '100%', objectFit: 'cover'}} />
            </div>
            
            <div style={styles.sidebarHeader}>General Information</div>
            
            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Class</span>
              <span><img src={class4Icon} alt="Class 4" style={{width:'24px', height:'24px', verticalAlign: 'middle', marginRight: '6px'}}/>4</span>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Difficulty</span>
              <span>1: Trivial — 5: Medium</span><br/>
              <span>10: Fabled</span>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Trophy Type</span>
              <span>Antlers</span>
              <div style={styles.trophyGrid}>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.silver}}>◆ Silver</span>
                  <span>104.89</span>
                </div>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.gold}}>☗ Gold</span>
                  <span>187.81</span>
                </div>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.diamond}}>☗ Diamond</span>
                  <span>249.99</span>
                </div>
              </div>
              <div style={{textAlign: 'center', marginTop: '10px'}}>
                 <span style={{...styles.trophyLabel, ...styles.greatOne}}>✤ Great One</span>
              </div>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Weight</span>
              30kg — 100kg<br/>
              <span style={{color: '#88a0b8', fontSize: '0.85rem'}}>66lbs — 220lbs</span>
            </div>

            <div style={styles.sidebarSection}>
               <span style={styles.sidebarLabel}>Fur</span>
               <span style={{fontSize:'0.85rem'}}>
                 Albino, Chocolate, Dark, Dark Spotted, Melanistic, Piebald, Red Spotted, Spotted, White
               </span>
               <br/>
               <span style={{fontWeight:'bold', display:'block', marginTop:'5px'}}>Fabled Exclusive:</span>
               <span style={{fontSize:'0.85rem'}}>Painted, Golden, Mocha, Hooded, Silver</span>
            </div>

            <div style={styles.sidebarHeader}>Locations</div>
            <div style={styles.sidebarSection}>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Hirschfelden Hunting Reserve</span></div>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Te Awaroa National Park</span></div>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Emerald Coast</span></div>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Tòrr nan Sithean</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main style={styles.mainColumn}>

            {/* Quote Block */}
            <div style={styles.quoteBox}>
              "The fallow deer is a native species of Western Europe but has also been introduced to many other parts of the world by humans. Its name is derived from the deer's typical pale brown color. The bucks develop antlers that start out as single spikes and then often grow into broad and shovel-shaped (palmated) antlers which are lined by multiple smaller points. Bucks typically weigh in the range of 60 - 100 kg (130 - 220 lb). Does have no antlers and often weigh in between 30 - 50 kg (60 - 110 lb). The fallow deer is an herbivore preferring a mix of woodlands and open fields for grazing."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p style={{marginBottom:'20px'}}>
              The <strong>Fallow Deer</strong> is a medium-sized <span style={styles.link}>class 4</span> deer, that can be hunted on <span style={styles.link}>Hirschfelden Hunting Reserve</span>, <span style={styles.link}>Te Awaroa National Park</span>, <span style={styles.link}>Emerald Coast</span> and <span style={styles.link}>Tòrr nan Sithean</span>. It is also one of the first animals huntable in game, as it shipped with the game all the way back in 2016.
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
                  <li><a href="#tips" onClick={(e)=>scrollToId(e,'tips')} style={styles.link}>Tips</a></li>
                  <li><a href="#need-zones" onClick={(e)=>scrollToId(e,'need-zones')} style={styles.link}>Need Zone Times</a></li>
                  <li><a href="#shot-scheme" onClick={(e)=>scrollToId(e,'shot-scheme')} style={styles.link}>Shot scheme</a></li>
                    <li>
                    <a href="#fur-variants" onClick={(e)=>scrollToId(e,'fur-variants')} style={styles.link}>Fur Variants</a>
                    <ol style={{margin:'6px 0 0 12px', paddingLeft: '12px', color: '#9fd3ff', listStyleType: 'none'}}>
                      <li><a href="#fur-male" onClick={(e)=>scrollToId(e,'fur-male')} style={styles.link}>5.1 Male</a></li>
                      <li><a href="#fur-female" onClick={(e)=>scrollToId(e,'fur-female')} style={styles.link}>5.2 Female</a></li>
                    </ol>
                  </li>
                  <li><a href="#fur-great-ones" onClick={(e)=>scrollToId(e,'fur-great-ones')} style={styles.link}>Fur Variants | Great One</a></li>
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

            {/* TIPS */}
            <h2 style={styles.h2} id="tips">Tips</h2>
            <p style={{marginBottom: '20px'}}>
                Te Awaroa is without a doubt the easiest map to grind because it has fewer drink zones for the fallow deer. On top of that, they only roam the South-Eastern part of the map.
            </p>
            
            {/* NEED ZONE TIMES */}
            <h2 style={styles.h2} id="need-zones">Need Zone Times</h2>
            <div style={{display:'inline-block'}}>
                <table style={{...styles.table, width: '300px'}}>
                    <thead>
                        <tr><th colSpan="2" style={{...styles.th, textAlign: 'center'}}>Hirschfelden & Emerald Coast</th></tr>
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

            {/* FUR VARIANTS (Gallery) */}
            <h2 style={styles.h2} id="fur-variants">Fur Variants</h2>

            <h3 id="fur-male" style={{marginTop: '10px', color: '#a8d0e6'}}>Male</h3>
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

            <h3 id="fur-female" style={{marginTop: '20px', color: '#a8d0e6'}}>Female</h3>
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
            <h2 style={styles.h2} id="fur-great-ones">Fur Variants | Great One</h2>
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
            <h2 style={styles.h2} id="variant-rarity">Fur Variant Rarity</h2>
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
                                Dark Spotted (14.93%)<br/>
                                Spotted (29.86%)<br/>
                                Dark (29.86%)<br/>
                                Chocolate (12.49%)<br/>
                                White (12.49%)
                            </td>
                            <td style={styles.td}>X</td>
                            <td style={styles.td}>
                                Piebald Variation 1 (0.15%)<br/>
                                Piebald Variation 2 (0.15%)
                            </td>
                            <td style={styles.td}>
                                Albino (0.04%)<br/>
                                Melanistic (0.04%)
                            </td>
                        </tr>
                        <tr>
                            <td style={{...styles.td, color: '#d63384', fontStyle: 'italic', fontWeight: 'bold'}}>
                                Female
                            </td>
                            <td style={styles.td}>
                                Red Spotted (38.33%)<br/>
                                Spotted (38.33%)<br/>
                                Dark Spotted (23.00%)
                            </td>
                            <td style={styles.td}>X</td>
                            <td style={styles.td}>
                                Piebald (0.23%)
                            </td>
                            <td style={styles.td}>
                                Albino (0.06%)<br/>
                                Melanistic (0.06%)
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* TRIVIA */}
            <h2 style={styles.h2} id="trivia">Trivia</h2>
            <ul style={{fontSize: '0.95rem', paddingLeft: '20px', listStyleType: 'disc', color: '#dbe4eb'}}>
                {triviaData.map((point, idx) => (
                    <li key={idx} style={{marginBottom: '10px'}}>{point}</li>
                ))}
            </ul>

            {/* REFERENCES */}
            <h2 style={styles.h2} id="references">References</h2>
            <ul style={{fontSize: '0.95rem', paddingLeft: '20px', listStyleType: 'disc', color: '#dbe4eb'}}>
              <li style={{marginBottom: '8px'}}>Fallow Deer Need Zones, Hirschfelden</li>
              <li style={{marginBottom: '8px'}}>Fallow Deer Need Zones, Emerald Coast</li>
              <li style={{marginBottom: '8px'}}><a href="https://www.nps.gov/pore/learn/nature/nonnativespecies_deer.htm" target="_blank" rel="noopener noreferrer" style={styles.link}>https://www.nps.gov/pore/learn/nature/nonnativespecies_deer.htm</a></li>
              <li style={{marginBottom: '8px'}}><a href="https://www.mammal.org.uk/species-hub/full-species-hub/discover-mammals/species-fallow-deer/" target="_blank" rel="noopener noreferrer" style={styles.link}>https://www.mammal.org.uk/species-hub/full-species-hub/discover-mammals/species-fallow-deer/</a></li>
              <li style={{marginBottom: '8px'}}><a href="https://www.wildlifetrusts.org/wildlife-explorer/mammals/fallow-deer" target="_blank" rel="noopener noreferrer" style={styles.link}>https://www.wildlifetrusts.org/wildlife-explorer/mammals/fallow-deer</a></li>
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

export default FallowDeer;