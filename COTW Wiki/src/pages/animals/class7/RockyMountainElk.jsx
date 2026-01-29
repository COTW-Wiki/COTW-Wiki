import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import DrinkingZoneIcon from '../../../assets/DrinkingZoneIcon.webp';
import class7Icon from '../../../assets/Class7Icon.webp'; // Class 7 for Rocky Mountain Elk
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import RockyMountainElkMain from '../../../assets/RockyMountainElk.webp';
import ShotSchemeImg from '../../../assets/Roosevelt_elk_shot_scheme.webp';

// Fur Variant Images - Male
import RockyMountainElk_AlbinoMaleLeftSide from '../../../assets/RockyMountainElk_AlbinoMaleLeftSide.webp';
import RockyMountainElk_BrownMaleLeftSide from '../../../assets/RockyMountainElk_BrownMaleLeftSide.webp';
import RockyMountainElk_LightBrownMaleLeftSide from '../../../assets/RockyMountainElk_LightBrownMaleLeftSide.webp';
import RockyMountainElk_LightGreyMaleLeftSide from '../../../assets/RockyMountainElk_LightGreyMaleLeftSide.webp';
import RockyMountainElk_PiebaldVariation1MaleRightSide from '../../../assets/RockyMountainElk_PiebaldVariation1MaleRightSide.webp';
import RockyMountainElk_PiebaldVariation1MaleLeftSide from '../../../assets/RockyMountainElk_PiebaldVariation1MaleLeftSide.webp';
import RockyMountainElk_PiebaldVariation2MaleRightSide from '../../../assets/RockyMountainElk_PiebaldVariation2MaleRightSide.webp';
import RockyMountainElk_PiebaldVariation2MaleLeftSide from '../../../assets/RockyMountainElk_PiebaldVariation2MaleLeftSide.webp';

// Fur Variant Images - Female
import RockyMountainElk_AlbinoFemaleLeftSide from '../../../assets/RockyMountainElk_AlbinoFemaleLeftSide.webp';
import RockyMountainElk_BrownFemaleLeftSide from '../../../assets/RockyMountainElk_BrownFemaleLeftSide.webp';
import RockyMountainElk_LightBrownFemaleLeftSide from '../../../assets/RockyMountainElk_LightBrownFemaleLeftSide.webp';
import RockyMountainElk_LightGreyFemaleLeftSide from '../../../assets/RockyMountainElk_LightGreyFemaleLeftSide.webp';
import RockyMountainElk_PiebaldVariation1FemaleRightSide from '../../../assets/RockyMountainElk_PiebaldVariation1FemaleRightSide.webp';
import RockyMountainElk_PiebaldVariation1FemaleLeftSide from '../../../assets/RockyMountainElk_PiebaldVariation1FemaleLeftSide.webp';
import RockyMountainElk_PiebaldVariation2FemaleRightSide from '../../../assets/RockyMountainElk_PiebaldVariation2FemaleRightSide.webp';
import RockyMountainElk_PiebaldVariation2FemaleLeftSide from '../../../assets/RockyMountainElk_PiebaldVariation2FemaleLeftSide.webp';


const RockyMountainElk = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  const needZonesData = [
    {
      name: "Silver Ridge Peaks",
      schedule: [
        { time: "00:00 - 04:00", type: "Resting", icon: RestingZoneIcon },
        { time: "04:00 - 05:00", type: "Drinking", icon: DrinkingZoneIcon },
        { time: "05:00 - 17:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "17:00 - 18:00", type: "Drinking", icon: DrinkingZoneIcon },
        { time: "18:00 - 23:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "23:00 - 00:00", type: "Resting", icon: RestingZoneIcon },
      ]
    }
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Calm tempered and likes to roam" },
    { label: "Habitat", value: "Forest, forest edge and meadows" },
    { label: "Senses", value: "Highly tuned senses in general, particularly excellent hearing and smell" },
    { label: "Social", value: "Males are solitary, females live in medium to large-sized groups" },
    { label: "Active", value: "During day and dusk" },
    { label: "Recommended Equipment", value: "Class 7 Ammo, Elk Caller, Elk Scent" },
    { label: "Species", value: "Cervus canadensis nelsoni", italic: true, isLink: true },
    { label: "Difficulty", value: "Hard" },
  ];

  // Fur Gallery Data - Male
  const maleFurGallery = [
    { name: "Albino", src: RockyMountainElk_AlbinoMaleLeftSide },
    { name: "Brown", src: RockyMountainElk_BrownMaleLeftSide },
    { name: "Light Brown", src: RockyMountainElk_LightBrownMaleLeftSide },
    { name: "Light Grey", src: RockyMountainElk_LightGreyMaleLeftSide },
    { name: "Piebald Variation 1 (Right)", src: RockyMountainElk_PiebaldVariation1MaleRightSide },
    { name: "Piebald Variation 1 (Left)", src: RockyMountainElk_PiebaldVariation1MaleLeftSide }, // Assuming visual match to gallery structure
    { name: "Piebald Variation 2 (Right)", src: RockyMountainElk_PiebaldVariation2MaleRightSide }, // Adjusted for variety based on typical file naming
    { name: "Piebald Variation 2 (Left)", src: RockyMountainElk_PiebaldVariation2MaleLeftSide },
  ];

  // Fur Gallery Data - Female
  const femaleFurGallery = [
    { name: "Albino", src: RockyMountainElk_AlbinoFemaleLeftSide },
    { name: "Brown", src: RockyMountainElk_BrownFemaleLeftSide },
    { name: "Light Brown", src: RockyMountainElk_LightBrownFemaleLeftSide },
    { name: "Light Grey", src: RockyMountainElk_LightGreyFemaleLeftSide },
    { name: "Piebald Variation 1 (Right)", src: RockyMountainElk_PiebaldVariation1FemaleRightSide },
    { name: "Piebald Variation 1 (Left)", src: RockyMountainElk_PiebaldVariation1FemaleLeftSide },
    { name: "Piebald Variation 2 (Right)", src: RockyMountainElk_PiebaldVariation2FemaleRightSide },
    { name: "Piebald Variation 2 (Left)", src: RockyMountainElk_PiebaldVariation2FemaleLeftSide },
  ];

  // Trivia Data
  const triviaData = [
    "The Rocky Mountain Elk (Cervus Canadensis) is the official State Animal of Utah and one of the largest deer species on the planet.",
    "Their life span averages around 10-13 years, and they can weigh up to 500kg (1100lbs).",
    "Bulls will form antlers which may reach 1.2m (4 feet) above their head. They grow and shed a new set of antlers every single year, and during this growing season their new set of antlers will be covered in a furry coat called velvet. This coat is full of blood vessels, which bring all the necessary minerals to the antlers in order to grow them fast - up to an inch a day. The bigger their antlers are, the better luck with the ladies!",
    "At wintertime, bulls and cows grow dark manes around their neck as part of their winter coats.",
    "In real life, elk roam a variety of different habitats. This includes prairies, forested areas, sagebrush flats, deciduous forests, swampy valleys and mountain meadows.",
    "Rocky Mountain Elk are herbivores and feed on a wide variety of plants, including grasses, shrubs, trees and flowers. They are ruminants and have a four-chambered stomach in order to properly digest their diet.",
    "The iconic elk bugle (a bull's mating call) gave way to the term \"rut\" for the elk breeding season. \"Rut\" comes from the Latin word meaning \"roar\"."
  ];

  // References Data (Implicit from context)
  const referencesData = [
    "Rocky Mountain Elk Need Zones, Silver Ridge Peaks",
    "thehuntercotw.fandom.com"
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
          <span>Rocky Mountain Elk</span>
        </div>

        <div style={styles.layout}>
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside style={styles.sidebarColumn}>
            <div style={styles.sidebarHeader}>Rocky Mountain Elk</div>
            <div style={styles.sidebarImage}>
              <img src={RockyMountainElkMain} alt="Rocky Mountain Elk" style={{width:'100%', height: '100%', objectFit: 'cover'}} />
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
                  <span>177.86</span>
                </div>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.gold}}>☗ Gold</span>
                  <span>351.32</span>
                </div>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.diamond}}>☗ Diamond</span>
                  <span>481.41</span>
                </div>
              </div>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Weight</span>
              200kg — 480kg<br/>
              <span style={{color: '#88a0b8', fontSize: '0.85rem'}}>441lbs — 1058lbs</span>
            </div>

            <div style={styles.sidebarSection}>
               <span style={styles.sidebarLabel}>Fur</span>
               <span style={{fontSize:'0.85rem'}}>
                 Albino, Brown, Common, Light Grey, Piebald
               </span>
            </div>

            <div style={styles.sidebarHeader}>Locations</div>
            <div style={styles.sidebarSection}>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Silver Ridge Peaks</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main style={styles.mainColumn}>

            {/* Quote Block */}
            <div style={styles.quoteBox}>
              "The Rocky Mountain elk is a subspecies of elk and a close relative of the Roosevelt Elk. They can be found primarily in the Rocky Mountains and northwestern America. Even though they are similar in habit to the Roosevelt Elk the nature of their habitat presents new challenges during the hunt. The Rocky Mountain elk has a diverse range of habitat. Although it is mostly found in forest and forest edge near mountainous regions, it feeds in meadows and open country before moving back to the shelter of the forest. Even though the are not the largest animal in the elk family they do boast the largest antlers, which can weigh up to 18.00 kg. The bull weighs about 315.00 kg, while the smaller cow averages about 225.00 kg."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p style={{marginBottom:'20px'}}>
              The <strong>Rocky Mountain Elk</strong> is located in the <span style={styles.link}>Silver Ridge Peaks</span> reserve in the Rocky Mountains. It is a <span style={styles.link}>class 7</span> animal. It has a lighter color and a broader neck and shoulders than the <span style={styles.link}>Roosevelt Elk</span> and can grow larger antlers, which is also reflected in the much higher trophy rating requirements.
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
                        <tr><th colSpan="2" style={{...styles.th, textAlign: 'center'}}>Silver Ridge Peaks</th></tr>
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
                        {/* Male/Female Combined Row */}
                        <tr>
                            <td style={styles.td}>
                                <span style={{color: '#3498db', fontStyle: 'italic', fontWeight: 'bold'}}>Male</span>
                                <span style={{color: '#dbe4eb'}}>/</span>
                                <span style={{color: '#d63384', fontStyle: 'italic', fontWeight: 'bold'}}>Female</span>
                            </td>
                            <td style={styles.td}>
                                Brown (37.35%)<br/>
                                Light Brown (37.35%)<br/>
                                Light Grey (25.00%)
                            </td>
                            <td style={styles.td}>
                                X
                            </td>
                            <td style={styles.td}>
                                Albino (0.10%)<br/>
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


            <div style={{marginTop: '40px'}}>
                <AnimalsTableMini />
            </div>
            
          </main>
        </div>
      </div>
    </div>
  );
};

export default RockyMountainElk;