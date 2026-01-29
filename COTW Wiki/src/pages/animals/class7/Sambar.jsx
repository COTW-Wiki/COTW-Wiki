import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import DrinkingZoneIcon from '../../../assets/DrinkingZoneIcon.webp';
import class7Icon from '../../../assets/Class7Icon.webp'; // Class 7 for Sambar
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import SambarMain from '../../../assets/SambarDeer.webp';
import ShotSchemeImg from '../../../assets/Sambar_shot_scheme.webp';

// Fur Variant Images - Male
import Sambar_AlbinoMaleRightSide from '../../../assets/Sambar_AlbinoMaleRightSide.webp';
import Sambar_BrownMaleRightSide from '../../../assets/Sambar_BrownMaleRightSide.webp';
import Sambar_DarkBrownMaleRightSide from '../../../assets/Sambar_DarkBrownMaleRightSide.webp';
import Sambar_DuskyGradientMaleRightSide from '../../../assets/Sambar_DuskyGradientMaleRightSide.webp';
import Sambar_LeucisticVariation1MaleRightSide from '../../../assets/Sambar_LeucisticVariation1MaleRightSide.webp';
import Sambar_LeucisticVariation2MaleRightSide from '../../../assets/Sambar_LeucisticVariation2MaleRightSide.webp';
import Sambar_LightBrownMaleRightSide from '../../../assets/Sambar_LightBrownMaleRightSide.webp';
import Sambar_PiebaldVariation1MaleRightSide from '../../../assets/Sambar_PiebaldVariation1MaleRightSide.webp';
import Sambar_PiebaldVariation1MaleLeftSide from '../../../assets/Sambar_PiebaldVariation1MaleLeftSide.webp';
import Sambar_PiebaldVariation2MaleRightSide from '../../../assets/Sambar_PiebaldVariation2MaleRightSide.webp';
import Sambar_PiebaldVariation2MaleLeftSide from '../../../assets/Sambar_PiebaldVariation2MaleLeftSide.webp';

// Fur Variant Images - Female
import Sambar_AlbinoFemaleRightSide from '../../../assets/Sambar_AlbinoFemaleRightSide.webp';
import Sambar_BrownFemaleRightSide from '../../../assets/Sambar_BrownFemaleRightSide.webp';
import Sambar_DarkBrownFemaleRightSide from '../../../assets/Sambar_DarkBrownFemaleRightSide.webp';
import Sambar_DuskyGradientFemaleRightSide from '../../../assets/Sambar_DuskyGradientFemaleRightSide.webp';
import Sambar_LeucisticFemaleRightSide from '../../../assets/Sambar_LeucisticFemaleRightSide.webp';
import Sambar_LightBrownFemaleRightSide from '../../../assets/Sambar_LightBrownFemaleRightSide.webp';
import Sambar_PiebaldFemaleRightSide from '../../../assets/Sambar_PiebaldFemaleRightSide.webp';
import Sambar_PiebaldFemaleLeftSide from '../../../assets/Sambar_PiebaldFemaleLeftSide.webp';


const Sambar = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  const needZonesData = [
    {
      name: "Emerald Coast",
      schedule: [
        { time: "00:00 - 03:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "03:00 - 06:00", type: "Resting", icon: RestingZoneIcon },
        { time: "06:00 - 09:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "09:00 - 13:00", type: "Resting", icon: RestingZoneIcon },
        { time: "13:00 - 17:00", type: "Resting", icon: RestingZoneIcon },
        { time: "17:00 - 20:00", type: "Drinking", icon: DrinkingZoneIcon },
        { time: "20:00 - 00:00", type: "Feeding", icon: FeedingZoneIcon },
      ]
    }
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Feral grazing social herbivore" },
    { label: "Habitat", value: "Grassy areas near woodlands, forest, farmland" },
    { label: "Senses", value: "Excellent smell, good hearing, decent sight" },
    { label: "Social", value: "Found in small groups or pairs. Males are often seen alone" },
    { label: "Active", value: "Nocturnal, grazing during the day" },
    { label: "Recommended Equipment", value: "Class 7 ammo, Sambar Caller" },
    { label: "Species", value: "Rusa Unicolor", italic: true, isLink: true },
    { label: "Difficulty", value: "Easy" },
  ];

  // Fur Gallery Data - Male
  const maleFurGallery = [
    { name: "Albino", src: Sambar_AlbinoMaleRightSide },
    { name: "Brown", src: Sambar_BrownMaleRightSide },
    { name: "Dark Brown", src: Sambar_DarkBrownMaleRightSide },
    { name: "Dusky Gradient", src: Sambar_DuskyGradientMaleRightSide },
    { name: "Leucistic Variation 1", src: Sambar_LeucisticVariation1MaleRightSide },
    { name: "Leucistic Variation 2", src: Sambar_LeucisticVariation2MaleRightSide },
    { name: "Light Brown", src: Sambar_LightBrownMaleRightSide },
    { name: "Piebald Variation 1 (Right)", src: Sambar_PiebaldVariation1MaleRightSide },
    { name: "Piebald Variation 1 (Left)", src: Sambar_PiebaldVariation1MaleLeftSide },
    { name: "Piebald Variation 2 (Right)", src: Sambar_PiebaldVariation2MaleRightSide },
    { name: "Piebald Variation 2 (Left)", src: Sambar_PiebaldVariation2MaleLeftSide },
  ];

  // Fur Gallery Data - Female
  const femaleFurGallery = [
    { name: "Albino", src: Sambar_AlbinoFemaleRightSide },
    { name: "Brown", src: Sambar_BrownFemaleRightSide },
    { name: "Dark Brown", src: Sambar_DarkBrownFemaleRightSide },
    { name: "Dusky Gradient", src: Sambar_DuskyGradientFemaleRightSide },
    { name: "Leucistic", src: Sambar_LeucisticFemaleRightSide },
    { name: "Light Brown", src: Sambar_LightBrownFemaleRightSide },
    { name: "Piebald (Right)", src: Sambar_PiebaldFemaleRightSide },
    { name: "Piebald (Left)", src: Sambar_PiebaldFemaleLeftSide },
  ];

  // Trivia Data
  const triviaData = [
    "The word 'SAMBAR' is a reference to a famous Indian stew which, legend has it, was created by Indian Prince 'Sambhaji' (शंभर). How this connected to the name of the Sambar Deer is a mystery.",
    "During the rut, Male Sambar Deer (as well as pregnant/ lactating female Sambar Deer) will produce a bald red spot on their throats that oozes a strange liquid. Why this happens scientist don't quite know.",
    "When threatened, Sambar Deer will make a strange and unique \"honking\" sound that can only be described as a mix between a goose and a chihuahua.",
    "The Sambar Deer is the largest deer species native to India and Southeast Asia. It is also the 3rd largest deer species in the world. This subsequently makes it the 4th largest deer species in game. Only the Rocky Mountain Elk, it's subspecies the Roosevelt Elk, and the Moose are larger."
  ];

  // References Data
  const referencesData = [
    "Sambar Need Zones, Emerald Coast",
    "https://en.wikipedia.org/wiki/Sambar_(dish)",
    "https://a-z-animals.com/animals/sambar/",
    "https://a-z-animals.com/animals/deer/deer-facts/the-largest-deer-in-the-world/"
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
          <span>Sambar</span>
        </div>

        <div style={styles.layout}>
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside style={styles.sidebarColumn}>
            <div style={styles.sidebarHeader}>Sambar</div>
            <div style={styles.sidebarImage}>
              <img src={SambarMain} alt="Sambar" style={{width:'100%', height: '100%', objectFit: 'cover'}} />
            </div>
            
            <div style={styles.sidebarHeader}>General Information</div>
            
            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Class</span>
              <span><img src={class7Icon} alt="Class 7" style={{width:'24px', height:'24px', verticalAlign: 'middle', marginRight: '6px'}}/>7</span>
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
                  <span>67.92</span>
                </div>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.gold}}>☗ Gold</span>
                  <span>124.21</span>
                </div>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.diamond}}>☗ Diamond</span>
                  <span>166.24</span>
                </div>
              </div>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Weight</span>
              180kg — 300kg<br/>
              <span style={{color: '#88a0b8', fontSize: '0.85rem'}}>397lbs — 661lbs</span>
            </div>

            <div style={styles.sidebarSection}>
               <span style={styles.sidebarLabel}>Fur</span>
               <span style={{fontSize:'0.85rem'}}>
                 Albino, Brown, Dark Brown, Dusky Gradient, Leucistic, Light Brown, Piebald
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
              "The largest of the feral species of deer in Australia, originating from India and south-east Asia, they were introduced in the 19th century. They have established a population in Southern Australia. Seeing them in herds is rare, but they are considered to be solitary animals.
              <br/><br/>
              The coat of the Sambar deer is coarse with a color the goes from dark grey to reddish brown. Also, they have a lighter underside and a dark tail. Unlike the females of the species, the males grow a mane on the throat in a darker color. There is also a significant size difference between males and females, growing to 1.6 m and 1.15 m shoulder height and weighing up to 300.00 kg and 230.00 kg respectively."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p style={{marginBottom:'20px'}}>
              The <strong>Sambar Deer</strong> is a (<span style={styles.link}>Class 7</span>) deer species that can be hunted on <span style={styles.link}>Emerald Coast</span>. It is one of two species under the genus "Rusa" in game. The other is the <span style={styles.link}>Javan Rusa</span>.
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
                        <tr><th colSpan="2" style={{...styles.th, textAlign: 'center'}}>Emerald Coast</th></tr>
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
            
            <h3 id="fur-male" style={{marginTop:'10px', marginBottom:'8px', color: '#6fb2e6'}}>Male</h3>
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

            <h3 id="fur-female" style={{marginTop:'20px', marginBottom:'8px', color: '#6fb2e6'}}>Female</h3>
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
                                Dusky Gradient (25.01%)<br/>
                                Brown (24.91%)<br/>
                                Dark Brown (24.91%)<br/>
                                Light Brown (24.91%)
                            </td>
                            <td style={styles.td}>
                                X
                            </td>
                            <td style={styles.td}>
                                X
                            </td>
                            <td style={styles.td}>
                                Albino (0.05%)<br/>
                                Leucistic Variation 1 (0.05%)<br/>
                                Leucistic Variation 2 (0.05%)<br/>
                                Piebald Variation 1 (0.05%)<br/>
                                Piebald Variation 2 (0.05%)
                            </td>
                        </tr>
                        {/* Female Row */}
                        <tr>
                            <td style={{...styles.td, color: '#d63384', fontStyle: 'italic', fontWeight: 'bold'}}>
                                Female
                            </td>
                            <td style={styles.td}>
                                Dusky Gradient (25.04%)<br/>
                                Brown (24.94%)<br/>
                                Dark Brown (24.94%)<br/>
                                Light Brown (24.94%)
                            </td>
                            <td style={styles.td}>
                                X
                            </td>
                            <td style={styles.td}>
                                X
                            </td>
                            <td style={styles.td}>
                                Albino (0.05%)<br/>
                                Leucistic (0.05%)<br/>
                                Piebald (0.05%)
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

export default Sambar;