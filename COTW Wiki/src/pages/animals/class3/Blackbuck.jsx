import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import DrinkingZoneIcon from '../../../assets/DrinkingZoneIcon.webp';
import class3Icon from '../../../assets/Class3Icon.webp'; // Class 3 for Blackbuck
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import BlackbuckMain from '../../../assets/Blackbuck.webp';
import ShotSchemeImage from '../../../assets/Blackbuck_shot_scheme.webp';

// Fur Variant Images (Placeholders)
import Blackbuck_AlbinoMaleRightSide from '../../../assets/Blackbuck_AlbinoMaleRightSide.webp';
import Blackbuck_BeigeMaleRightSide from '../../../assets/Blackbuck_BeigeMaleRightSide.webp';
import Blackbuck_BrownMaleRightSide from '../../../assets/Blackbuck_BrownMaleRightSide.webp';
import Blackbuck_DarkBrownMaleRightSide from '../../../assets/Blackbuck_DarkBrownMaleRightSide.webp';
import Blackbuck_LeucisticMaleRightSide from '../../../assets/Blackbuck_LeucisticMaleRightSide.webp';
import Blackbuck_MelanisticMaleRightSide from '../../../assets/Blackbuck_MelanisticMaleRightSide.webp';
import Blackbuck_PiebaldMaleRightSide from '../../../assets/Blackbuck_PiebaldMaleRightSide.webp';
import Blackbuck_PiebaldMaleLeftSide from '../../../assets/Blackbuck_PiebaldMaleLeftSide.webp';

import Blackbuck_AlbinoFemaleRightSide from '../../../assets/Blackbuck_AlbinoFemaleRightSide.webp';
import Blackbuck_BeigeFemaleRightSide from '../../../assets/Blackbuck_BeigeFemaleRightSide.webp';
import Blackbuck_BrownFemaleRightSide from '../../../assets/Blackbuck_BrownFemaleRightSide.webp';
import Blackbuck_LeucisticFemaleRightSide from '../../../assets/Blackbuck_LeucisticFemaleRightSide.webp';
import Blackbuck_MelanisticFemaleRightSide from '../../../assets/Blackbuck_MelanisticFemaleRightSide.webp';
import Blackbuck_PiebaldFemaleRightSide from '../../../assets/Blackbuck_PiebaldFemaleRightSide.webp';
import Blackbuck_PiebaldFemaleLeftSide from '../../../assets/Blackbuck_PiebaldFemaleLeftSide.webp';

const Blackbuck = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  const needZonesData = [
    {
      name: "Parque Fernando",
      schedule: [
        { time: "00:00 - 03:30", type: "Resting", icon: RestingZoneIcon },
        { time: "03:00 - 06:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "06:00 - 09:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "09:00 - 12:30", type: "Resting", icon: RestingZoneIcon },
        { time: "12:00 - 15:30", type: "Resting", icon: RestingZoneIcon },
        { time: "15:00 - 18:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "18:00 - 21:30", type: "Drinking", icon: DrinkingZoneIcon },
        { time: "21:00 - 00:30", type: "Resting", icon: RestingZoneIcon },
      ]
    },
    {
      name: "Sundarpatan",
      schedule: [
        { time: "00:00 - 03:00", type: "Resting", icon: RestingZoneIcon },
        { time: "03:00 - 06:00", type: "Resting", icon: RestingZoneIcon },
        { time: "06:00 - 09:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "09:00 - 12:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "12:00 - 15:00", type: "Resting", icon: RestingZoneIcon },
        { time: "15:00 - 18:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "18:00 - 21:00", type: "Drinking", icon: DrinkingZoneIcon },
        { time: "21:00 - 00:00", type: "Resting", icon: RestingZoneIcon },
      ]
    }
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Mainly sedentary, but may move longer distances in search of water and forage; extremely fast" },
    { label: "Habitat", value: "Prefer forests and grasslands where water is perennially available" },
    { label: "Senses", value: "Excellent vision, good sense of smell, but otherwise poor hearing" },
    { label: "Social", value: "Mixed herds and bachelor herds, group size fluctuate based on the availability of food" },
    { label: "Active", value: "Active throughout the day, typically take long breaks during the hottest hours of the day" },
    { label: "Recommended Equipment", value: "Class 3 Ammo, Antler Rattler" },
    { label: "Species", value: "Antilope cervicapra", italic: true, isLink: true },
    { label: "Difficulty", value: "Average" },
  ];

  // Fur Gallery Data (separate male / female)
  const maleGallery = [
    { name: "Albino (Male)", src: Blackbuck_AlbinoMaleRightSide },
    { name: "Beige (Male)", src: Blackbuck_BeigeMaleRightSide },
    { name: "Brown (Male)", src: Blackbuck_BrownMaleRightSide },
    { name: "Dark Brown (Male)", src: Blackbuck_DarkBrownMaleRightSide },
    { name: "Leucistic (Male)", src: Blackbuck_LeucisticMaleRightSide },
    { name: "Melanistic (Male)", src: Blackbuck_MelanisticMaleRightSide },
    { name: "Piebald (Male) Right Side", src: Blackbuck_PiebaldMaleRightSide },
    { name: "Piebald (Male) Left Side", src: Blackbuck_PiebaldMaleLeftSide },
  ];

  const femaleGallery = [
    { name: "Albino (Female)", src: Blackbuck_AlbinoFemaleRightSide },
    { name: "Beige (Female)", src: Blackbuck_BeigeFemaleRightSide },
    { name: "Brown (Female)", src: Blackbuck_BrownFemaleRightSide },
    { name: "Leucistic (Female)", src: Blackbuck_LeucisticFemaleRightSide },
    { name: "Melanistic (Female)", src: Blackbuck_MelanisticFemaleRightSide },
    { name: "Piebald (Female) Right Side", src: Blackbuck_PiebaldFemaleRightSide },
    { name: "Piebald (Female) Left Side", src: Blackbuck_PiebaldFemaleLeftSide },
  ];

  // Trivia Data
  const triviaData = [
    "Blackbucks are considered sacred in some cultures, such as Hinduism, and are protected by law in India.",
    "In the 20th century the Blackbuck was hunted to near extinction in some areas of India. Since then, lots of conservation efforts were made and the population is recovering."
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
  const scrollToId = (id) => (e) => {
    if (e && e.preventDefault) e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      try { window.history.replaceState(null, '', `#${id}`); } catch (err) { /* noop */ }
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.innerWrapper}>
        
        {/* PAGE HEADER */}
        <div style={styles.mainHeader}>
          <span>Blackbuck</span>
        </div>

        <div style={styles.layout}>
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside style={styles.sidebarColumn}>
            <div style={styles.sidebarHeader}>Blackbuck</div>
            <div style={styles.sidebarImage}>
              <img src={BlackbuckMain} alt="Blackbuck" style={{width:'100%', height: '100%', objectFit: 'cover'}} />
            </div>
            
            <div style={styles.sidebarHeader}>General Information</div>
            
            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Class</span>
              <span><img src={class3Icon} alt="Class 3" style={{width:'24px', height:'24px', verticalAlign: 'middle', marginRight: '6px'}}/>3</span>
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
                  <span>71.8</span>
                </div>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.gold}}>☗ Gold</span>
                  <span>106.3</span>
                </div>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.diamond}}>☗ Diamond</span>
                  <span>132.2</span>
                </div>
              </div>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Weight</span>
              ? — 51kg<br/>
              <span style={{color: '#88a0b8', fontSize: '0.85rem'}}>? — 112lbs</span>
            </div>

            <div style={styles.sidebarSection}>
               <span style={styles.sidebarLabel}>Fur</span>
               <span style={{fontSize:'0.85rem'}}>
                 Albino, Beige, Brown, Dark Brown, Leucistic, Melanistic, Piebald
               </span>
            </div>

            <div style={styles.sidebarHeader}>Locations</div>
            <div style={styles.sidebarSection}>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Parque Fernando</span>, <span style={styles.link}>Sundarpatan</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main style={styles.mainColumn}>

            {/* Quote Block */}
            <div style={styles.quoteBox}>
              "The blackbuck is an antelope native to and found mainly in India, but which in recent years has enjoyed great success throughout the United States and Argentina. Their long, spiraling horns, white-ringed eyes, and stout physique make them easily recognizable and a popular symbol of Indian culture. The blackbuck is active mainly during the day but will take regularly take extended breaks in the hottest hours of the day. Due to their regular need of water, blackbucks are fairly sedentary and prefer to stay in areas where water is found year round, but during drought and dry seasons, blackbucks may expand their home range in search of water and forage. The size of blackbuck herds varies throughout the year and is directly tied to the availability of food."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p style={{marginBottom:'20px'}}>
              The <strong>Blackbuck</strong> is a <span style={styles.link}>class 3</span> antelope. It can be hunted in <span style={styles.link}>Parque Fernando</span> and <span style={styles.link}>Sundarpatan</span>.
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
                <li><a href="#need-zone-times" style={styles.link} onClick={scrollToId('need-zone-times')}>Need Zone Times</a></li>
                <li><a href="#shot-scheme" style={styles.link} onClick={scrollToId('shot-scheme')}>Shot scheme</a></li>
                <li>
                  <a href="#fur-variants" style={styles.link} onClick={scrollToId('fur-variants')}>Fur Variants</a>
                  <ol style={{margin:'6px 0 0 0', paddingLeft: '0', color: '#6fb2e6', listStyleType: 'none'}}>
                    <li><a href="#male-variants" style={styles.link} onClick={scrollToId('male-variants')}>4.1 Male</a></li>
                    <li><a href="#female-variants" style={styles.link} onClick={scrollToId('female-variants')}>4.2 Female</a></li>
                  </ol>
                </li>
                <li><a href="#fur-variant-rarity" style={styles.link} onClick={scrollToId('fur-variant-rarity')}>Fur Variant Rarity</a></li>
                <li><a href="#trivia" style={styles.link} onClick={scrollToId('trivia')}>Trivia</a></li>
                <li><a href="#references" style={styles.link} onClick={scrollToId('references')}>References</a></li>
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
            <h2 id="need-zone-times" style={styles.h2}>Need Zone Times</h2>
            <div style={{display:'flex', gap: '20px', flexWrap: 'wrap'}}>
                {needZonesData.map((mapData, index) => (
                    <div key={index} style={{flex: '1 1 300px'}}>
                        <table style={styles.table}>
                            <thead>
                                <tr><th colSpan="2" style={{...styles.th, textAlign: 'center'}}>{mapData.name}</th></tr>
                                <tr>
                                    <th style={{...styles.th, backgroundColor: '#0f2e48'}}>Times</th>
                                    <th style={{...styles.th, backgroundColor: '#0f2e48'}}>Activity</th>
                                </tr>
                            </thead>
                            <tbody>
                                {mapData.schedule.map((zone, i) => (
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
                ))}
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

            {/* FUR VARIANTS (Gallery) */}
            <h2 id="fur-variants" style={styles.h2}>Fur Variants</h2>

            <h3 id="male-variants" style={{...styles.h2, fontSize: '1.1rem'}}>Male</h3>
            <div style={styles.galleryGrid}>
              {maleGallery.map((item, i) => (
                <div key={"m-"+i} style={styles.galleryItem}>
                  <div style={styles.galleryImgPlaceholder}>
                    <img src={item.src} alt={item.name} style={{width:'100%', height: '100%', objectFit: 'contain'}} />
                  </div>
                  <span style={styles.galleryLabel}>{item.name}</span>
                </div>
              ))}
            </div>

            <h3 id="female-variants" style={{...styles.h2, fontSize: '1.1rem'}}>Female</h3>
            <div style={styles.galleryGrid}>
              {femaleGallery.map((item, i) => (
                <div key={"f-"+i} style={styles.galleryItem}>
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
                                Male
                            </td>
                            <td style={styles.td}>
                                Dark Brown (53.76%)<br/>
                                Brown (35.84%)
                            </td>
                            <td style={styles.td}>
                                Beige (9.96%)
                            </td>
                            <td style={styles.td}>
                                Piebald (0.30%)
                            </td>
                            <td style={styles.td}>
                                Albino (0.05%)<br/>
                                Leucistic (0.05%)<br/>
                                Melanistic (0.05%)
                            </td>
                        </tr>
                        <tr>
                            <td style={{...styles.td, color: '#d63384', fontStyle: 'italic', fontWeight: 'bold'}}>
                                Female
                            </td>
                            <td style={styles.td}>
                                Beige (57.84%)<br/>
                                Brown (41.64%)
                            </td>
                            <td style={styles.td}>X</td>
                            <td style={styles.td}>
                                Piebald (0.35%)
                            </td>
                            <td style={styles.td}>
                                Albino (0.06%)<br/>
                                Leucistic (0.06%)<br/>
                                Melanistic (0.06%)
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
            <ul style={{fontSize: '0.95rem', paddingLeft: '20px', listStyleType: 'disc', color: '#dbe4eb'}}>
              <li style={{marginBottom: '8px'}}>Blackbuck Need Zones, Sundarpatan</li>
              <li style={{marginBottom: '8px'}}><a href="https://terrapampalodge.com" style={styles.link} target="_blank" rel="noopener noreferrer">terrapampalodge.com</a></li>
              <li style={{marginBottom: '8px'}}><a href="https://nationalzoo.com" style={styles.link} target="_blank" rel="noopener noreferrer">nationalzoo.com</a></li>
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

export default Blackbuck;