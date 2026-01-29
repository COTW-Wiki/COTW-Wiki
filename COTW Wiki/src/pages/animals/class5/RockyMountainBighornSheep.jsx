import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import DrinkingZoneIcon from '../../../assets/DrinkingZoneIcon.webp';
import class5Icon from '../../../assets/Class5Icon.webp'; 
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import RockyMountainBighornMain from '../../../assets/Rocky_Mountain_Bighorn_Sheep.webp';
import ShotSchemeImg from '../../../assets/Rocky_Mountain_Bighorn_Sheep_shot_scheme.webp';

// Fur Variant Images
// Male
import RockyMountainBighornSheep_AlbinoMaleRightSide from '../../../assets/RockyMountainBighornSheep_AlbinoMaleRightSide.webp';
import RockyMountainBighornSheep_BlackMaleRightSide from '../../../assets/RockyMountainBighornSheep_BlackMaleRightSide.webp';
import RockyMountainBighornSheep_BronzeMaleRightSide from '../../../assets/RockyMountainBighornSheep_BronzeMaleRightSide.webp';
import RockyMountainBighornSheep_BrownMaleRightSide from '../../../assets/RockyMountainBighornSheep_BrownMaleRightSide.webp';
import RockyMountainBighornSheep_GreyMaleRightSide from '../../../assets/RockyMountainBighornSheep_GreyMaleRightSide.webp';
import RockyMountainBighornSheep_LeucisticMaleRightSide from '../../../assets/RockyMountainBighornSheep_LeucisticMaleRightSide.webp';
import RockyMountainBighornSheep_MelanisticMaleRightSide from '../../../assets/RockyMountainBighornSheep_MelanisticMaleRightSide.webp';
import RockyMountainBighornSheep_PiebaldVariation1MaleRightSide from '../../../assets/RockyMountainBighornSheep_PiebaldVariation1MaleRightSide.webp';
import RockyMountainBighornSheep_PiebaldVariation1MaleLeftSide from '../../../assets/RockyMountainBighornSheep_PiebaldVariation1MaleLeftSide.webp';
import RockyMountainBighornSheep_PiebaldVariation2MaleRightSide from '../../../assets/RockyMountainBighornSheep_PiebaldVariation2MaleRightSide.webp';
import RockyMountainBighornSheep_PiebaldVariation2MaleLeftSide from '../../../assets/RockyMountainBighornSheep_PiebaldVariation2MaleLeftSide.webp';

// Female
import RockyMountainBighornSheep_AlbinoFemaleRightSide from '../../../assets/RockyMountainBighornSheep_AlbinoFemaleRightSide.webp';
import RockyMountainBighornSheep_BlackFemaleRightSide from '../../../assets/RockyMountainBighornSheep_BlackFemaleRightSide.webp';
import RockyMountainBighornSheep_BronzeFemaleRightSide from '../../../assets/RockyMountainBighornSheep_BronzeFemaleRightSide.webp';
import RockyMountainBighornSheep_BrownFemaleRightSide from '../../../assets/RockyMountainBighornSheep_BrownFemaleRightSide.webp';
import RockyMountainBighornSheep_GreyFemaleRightSide from '../../../assets/RockyMountainBighornSheep_GreyFemaleRightSide.webp';
import RockyMountainBighornSheep_LeucisticFemaleRightSide from '../../../assets/RockyMountainBighornSheep_LeucisticFemaleRightSide.webp';
import RockyMountainBighornSheep_MelanisticFemaleRightSide from '../../../assets/RockyMountainBighornSheep_MelanisticFemaleRightSide.webp';
import RockyMountainBighornSheep_PiebaldVariation1FemaleRightSide from '../../../assets/RockyMountainBighornSheep_PiebaldVariation1FemaleRightSide.webp';
import RockyMountainBighornSheep_PiebaldVariation1FemaleLeftSide from '../../../assets/RockyMountainBighornSheep_PiebaldVariation1FemaleLeftSide.webp';
import RockyMountainBighornSheep_PiebaldVariation2FemaleRightSide from '../../../assets/RockyMountainBighornSheep_PiebaldVariation2FemaleRightSide.webp';
import RockyMountainBighornSheep_PiebaldVariation2FemaleLeftSide from '../../../assets/RockyMountainBighornSheep_PiebaldVariation2FemaleLeftSide.webp';


const RockyMountainBighornSheep = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  const needZonesData = [
    {
      name: "Askiy Ridge",
      schedule: [
        { time: "00:00 - 03:00", type: "Resting", icon: RestingZoneIcon },
        { time: "03:00 - 06:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "06:00 - 09:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "09:00 - 12:00", type: "Resting", icon: RestingZoneIcon },
        { time: "12:00 - 16:00", type: "Drinking", icon: DrinkingZoneIcon },
        { time: "16:00 - 20:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "20:00 - 00:00", type: "Resting", icon: RestingZoneIcon },
      ]
    }
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Alert and aware" },
    { label: "Habitat", value: "Alpine meadows, grassy mountain slopes, and foothill country, near rocky cliffs" },
    { label: "Senses", value: "Excellent senses of vision and hearing, decent sense of smell" },
    { label: "Social", value: "Rams live solitary or in small groups, ewes live in medium to large-sized groups" },
    { label: "Active", value: "Morning to evening" },
    { label: "Recommended Equipment", value: "Class 5 Ammo" },
    { label: "Species", value: "Ovis canadensis cabadebsus", italic: true, isLink: true },
    { label: "Difficulty", value: "Average" },
  ];

  // Fur Gallery Data (split by sex)
  const maleGallery = [
    { name: "Albino", src: RockyMountainBighornSheep_AlbinoMaleRightSide },
    { name: "Black", src: RockyMountainBighornSheep_BlackMaleRightSide },
    { name: "Bronze", src: RockyMountainBighornSheep_BronzeMaleRightSide },
    { name: "Brown", src: RockyMountainBighornSheep_BrownMaleRightSide },
    { name: "Grey", src: RockyMountainBighornSheep_GreyMaleRightSide },
    { name: "Leucistic", src: RockyMountainBighornSheep_LeucisticMaleRightSide },
    { name: "Melanistic", src: RockyMountainBighornSheep_MelanisticMaleRightSide },
    { name: "Piebald Variation 1 (Right)", src: RockyMountainBighornSheep_PiebaldVariation1MaleRightSide },
    { name: "Piebald Variation 1 (Left)", src: RockyMountainBighornSheep_PiebaldVariation1MaleLeftSide },
    { name: "Piebald Variation 2 (Right)", src: RockyMountainBighornSheep_PiebaldVariation2MaleRightSide },
    { name: "Piebald Variation 2 (Left)", src: RockyMountainBighornSheep_PiebaldVariation2MaleLeftSide },
  ];

  const femaleGallery = [
    { name: "Albino", src: RockyMountainBighornSheep_AlbinoFemaleRightSide },
    { name: "Black", src: RockyMountainBighornSheep_BlackFemaleRightSide },
    { name: "Bronze", src: RockyMountainBighornSheep_BronzeFemaleRightSide },
    { name: "Brown", src: RockyMountainBighornSheep_BrownFemaleRightSide },
    { name: "Grey", src: RockyMountainBighornSheep_GreyFemaleRightSide },
    { name: "Leucistic", src: RockyMountainBighornSheep_LeucisticFemaleRightSide },
    { name: "Melanistic", src: RockyMountainBighornSheep_MelanisticFemaleRightSide },
    { name: "Piebald Variation 1 (Right)", src: RockyMountainBighornSheep_PiebaldVariation1FemaleRightSide },
    { name: "Piebald Variation 1 (Left)", src: RockyMountainBighornSheep_PiebaldVariation1FemaleLeftSide },
    { name: "Piebald Variation 2 (Right)", src: RockyMountainBighornSheep_PiebaldVariation2FemaleRightSide },
    { name: "Piebald Variation 2 (Left)", src: RockyMountainBighornSheep_PiebaldVariation2FemaleLeftSide },
  ];

  // Trivia Data
  const triviaData = [
    <span>There are three subspecies of Bighorn Sheep: the Rocky Mountain bighorn sheep (Ovis canadensis canadensis), the Sierra Nevada bighorn sheep (Ovis canadensis sierrae), and the desert bighorn sheep (Ovis canadensis nelsoni). <sup>[2]</sup></span>,
    <span>In the 19th century, the species was hunted to near extinction. Today, the population has recovered to approximately 80000 in the wild. <sup>[3]</sup></span>
  ];

  // References Data
  const referencesData = [
    "Pending screenshot verification..."
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
          <span>Rocky Mountain Bighorn Sheep</span>
        </div>

        <div style={styles.layout}>
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside style={styles.sidebarColumn}>
            <div style={styles.sidebarHeader}>Rocky Mountain Bighorn Sheep</div>
            <div style={styles.sidebarImage}>
              <img src={RockyMountainBighornMain} alt="Rocky Mountain Bighorn Sheep" style={{width:'100%', height: '100%', objectFit: 'cover'}} />
            </div>
            
            <div style={styles.sidebarHeader}>General Information</div>
            
            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Class</span>
              <span><img src={class5Icon} alt="Class 5" style={{width:'24px', height:'24px', verticalAlign: 'middle', marginRight: '6px'}}/>5</span>
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
                  <span>84.10</span>
                </div>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.gold}}>☗ Gold</span>
                  <span>148.57</span>
                </div>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.diamond}}>☗ Diamond</span>
                  <span>196.93</span>
                </div>
              </div>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Weight</span>
              0kg — 0kg<br/>
              <span style={{color: '#88a0b8', fontSize: '0.85rem'}}>0lbs — 0lbs</span>
            </div>

            <div style={styles.sidebarSection}>
               <span style={styles.sidebarLabel}>Fur</span>
               <span style={{fontSize:'0.85rem'}}>
                 Albino, Black, Bronze, Brown, Grey, Leucistic, Melanistic, Piebald
               </span>
            </div>

            <div style={styles.sidebarHeader}>Locations</div>
            <div style={styles.sidebarSection}>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Silver Ridge Peaks</span></div>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Askiy Ridge Hunting Preserve</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main style={styles.mainColumn}>

            {/* Quote Block */}
            <div style={styles.quoteBox}>
              "Rocky Mountain bighorn sheep are known for their large, curved horns. They live in mountainous areas from the Canadian Rockies down to the southwestern U.S. They prefer grassy slopes and alpine meadows near rocky cliffs, which provide quick escape routes from predators. Their sharp eyesight and hearing help them stay alert in these open, rugged environments. Male rams use their heavy horns to battle rivals for dominance and breeding opportunities. The thunderous impact of their clashes can be heard echoing across the mountains valleys, signaling the fierce competition of mating season."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p style={{marginBottom:'20px'}}>
              The <strong>Rocky Mountain Bighorn Sheep</strong> is a <span style={styles.link}>class 5</span> sheep introduced with the <span style={styles.link}>Silver Ridge Peaks</span> reserve located in the rocky mountains of Colorado. Both females and males have horns.
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
                        <tr><th colSpan="2" style={{...styles.th, textAlign: 'center'}}>Askiy Ridge</th></tr>
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
                                Brown (37.30%)<br/>
                                Grey (37.30%)<br/>
                                Bronze (12.50%)<br/>
                                Black (12.50%)
                            </td>
                            <td style={styles.td}>
                                X
                            </td>
                            <td style={styles.td}>
                                Leucistic (0.10%)<br/>
                                Piebald Variation 1 (0.10%)<br/>
                                Piebald Variation 2 (0.10%)
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

            <div style={{marginTop: '40px'}}>
                <AnimalsTableMini />
            </div>
            
          </main>
        </div>
      </div>
    </div>
  );
};

export default RockyMountainBighornSheep;