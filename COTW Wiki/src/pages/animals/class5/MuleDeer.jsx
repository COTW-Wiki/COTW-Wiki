import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import DrinkingZoneIcon from '../../../assets/DrinkingZoneIcon.webp';
import class5Icon from '../../../assets/Class5Icon.webp'; 
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import MuleDeerMain from '../../../assets/MuleDeer.webp';
import ShotSchemeImg from '../../../assets/Mule_Deer_shot_scheme.webp';

// Fur Variant Images
// Male
import MuleDeer_AlbinoMaleRightSide from '../../../assets/MuleDeer_AlbinoMaleRightSide.webp';
import MuleDeer_BrownMaleRightSide from '../../../assets/MuleDeer_BrownMaleRightSide.webp';
import MuleDeer_DiluteMaleRightSide from '../../../assets/MuleDeer_DiluteMaleRightSide.webp';
import MuleDeer_GreyMaleRightSide from '../../../assets/MuleDeer_GreyMaleRightSide.webp';
import MuleDeer_LeucisticMaleRightSide from '../../../assets/MuleDeer_LeucisticMaleRightSide.webp';
import MuleDeer_MelanisticMaleRightSide from '../../../assets/MuleDeer_MelanisticMaleRightSide.webp';
import MuleDeer_PiebaldVar1MaleRightSide from '../../../assets/MuleDeer_PiebaldVariation1MaleRightSide.webp';
import MuleDeer_PiebaldVar1MaleLeftSide from '../../../assets/MuleDeer_PiebaldVariation1MaleLeftSide.webp';
import MuleDeer_PiebaldVar2MaleRightSide from '../../../assets/MuleDeer_PiebaldVariation2MaleRightSide.webp';
import MuleDeer_PiebaldVar2MaleLeftSide from '../../../assets/MuleDeer_PiebaldVariation1MaleLeftSide.webp';

// Female
import MuleDeer_AlbinoFemaleRightSide from '../../../assets/MuleDeer_AlbinoFemaleRightSide.webp';
import MuleDeer_BlondeFemaleRightSide from '../../../assets/MuleDeer_BlondeFemaleRightSide.webp';
import MuleDeer_BrownFemaleRightSide from '../../../assets/MuleDeer_BrownFemaleRightSide.webp';
import MuleDeer_DiluteFemaleRightSide from '../../../assets/MuleDeer_DiluteFemaleRightSide.webp';
import MuleDeer_GreyFemaleRightSide from '../../../assets/MuleDeer_GreyFemaleRightSide.webp';
import MuleDeer_LeucisticFemaleRightSide from '../../../assets/MuleDeer_LeucisticFemaleRightSide.webp';
import MuleDeer_MelanisticFemaleRightSide from '../../../assets/MuleDeer_MelanisticFemaleRightSide.webp';
import MuleDeer_PiebaldVar1FemaleRightSide from '../../../assets/MuleDeer_PiebaldVariation1FemaleRightSide.webp';
import MuleDeer_PiebaldVar1FemaleLeftSide from '../../../assets/MuleDeer_PiebaldVariation1FemaleLeftSide.webp';
import MuleDeer_PiebaldVar2FemaleRightSide from '../../../assets/MuleDeer_PiebaldVariation2FemaleRightSide.webp';
import MuleDeer_PiebaldVar2FemaleLeftSide from '../../../assets/MuleDeer_PiebaldVariation2FemaleLeftSide.webp';

// Great One (Fabled)
import MuleDeer_FabledCinnamonStripesRightSide from '../../../assets/MuleDeer_FabledCinnamonStripesRightSide.webp';
import MuleDeer_FabledCobwebEnigmaRightSide from '../../../assets/MuleDeer_FabledCobwebEnigmaRightSide.webp';
import MuleDeer_FabledDrippleDrizzleRightSide from '../../../assets/MuleDeer_FabledDrippleDrizzleRightSide.webp';
import MuleDeer_FabledDuskyDriftRightSide from '../../../assets/MuleDeer_FabledDuskyDriftRightSide.webp';
import MuleDeer_FabledDuskyDriftLeftSide from '../../../assets/MuleDeer_FabledDuskyDriftLeftSide.webp';
import MuleDeer_FabledMilkyWayRightSide from '../../../assets/MuleDeer_FabledMilkyWayRightSide.webp';
import MuleDeer_FabledPetalPuffRightSide from '../../../assets/MuleDeer_FabledPetalPuffRightSide.webp';
import MuleDeer_FabledPetalPuffLeftSide from '../../../assets/MuleDeer_FabledPetalPuffLeftSide.webp';


const MuleDeer = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  const needZonesData = [
    {
      name: "Parque Fernando and Silver Ridge Peaks",
      schedule: [
        { time: "00:00 - 03:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "03:00 - 06:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "06:00 - 09:30", type: "Resting", icon: RestingZoneIcon },
        { time: "09:00 - 12:30", type: "Resting", icon: RestingZoneIcon },
        { time: "12:00 - 15:30", type: "Resting", icon: RestingZoneIcon },
        { time: "15:00 - 18:30", type: "Drinking", icon: DrinkingZoneIcon },
        { time: "18:00 - 21:30", type: "Resting", icon: RestingZoneIcon },
        { time: "21:00 - 00:30", type: "Feeding", icon: FeedingZoneIcon },
      ]
    },
    {
      name: "Askiy Ridge",
      schedule: [
        { time: "00:00 - 03:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "03:00 - 06:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "06:00 - 09:00", type: "Resting", icon: RestingZoneIcon },
        { time: "09:00 - 12:00", type: "Resting", icon: RestingZoneIcon },
        { time: "12:00 - 15:00", type: "Resting", icon: RestingZoneIcon },
        { time: "15:00 - 18:00", type: "Drinking", icon: DrinkingZoneIcon },
        { time: "18:00 - 21:00", type: "Resting", icon: RestingZoneIcon },
        { time: "21:00 - 00:00", type: "Feeding", icon: FeedingZoneIcon },
      ]
    }
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Calm" },
    { label: "Habitat", value: "Plains, forests, and grasslands" },
    { label: "Senses", value: "Excellent sense of hearing and smell, overall decent visual sense" },
    { label: "Social", value: "Common herds in winter, but segregated male and female populations in spring" },
    { label: "Active", value: "Dawn to dusk" },
    { label: "Recommended Equipment", value: "Class 5 Ammo, Mule Deer Scent, Deer \"Bleat\" Caller" },
    { label: "Species", value: "Odocoileus hemionus", italic: true, isLink: true },
    { label: "Difficulty", value: "Average" },
  ];

  // Fur Gallery Data (split by sex)
  const maleGallery = [
    { name: "Albino", src: MuleDeer_AlbinoMaleRightSide },
    { name: "Brown", src: MuleDeer_BrownMaleRightSide },
    { name: "Dilute", src: MuleDeer_DiluteMaleRightSide },
    { name: "Grey", src: MuleDeer_GreyMaleRightSide },
    { name: "Leucistic", src: MuleDeer_LeucisticMaleRightSide },
    { name: "Melanistic", src: MuleDeer_MelanisticMaleRightSide },
    { name: "Piebald Variation 1 (Right)", src: MuleDeer_PiebaldVar1MaleRightSide },
    { name: "Piebald Variation 1 (Left)", src: MuleDeer_PiebaldVar1MaleLeftSide },
    { name: "Piebald Variation 2 (Right)", src: MuleDeer_PiebaldVar2MaleRightSide },
    { name: "Piebald Variation 2 (Left)", src: MuleDeer_PiebaldVar2MaleLeftSide },
  ];

  const femaleGallery = [
    { name: "Albino", src: MuleDeer_AlbinoFemaleRightSide },
    { name: "Blonde", src: MuleDeer_BlondeFemaleRightSide },
    { name: "Brown", src: MuleDeer_BrownFemaleRightSide },
    { name: "Dilute", src: MuleDeer_DiluteFemaleRightSide },
    { name: "Grey", src: MuleDeer_GreyFemaleRightSide },
    { name: "Leucistic", src: MuleDeer_LeucisticFemaleRightSide },
    { name: "Melanistic", src: MuleDeer_MelanisticFemaleRightSide },
    { name: "Piebald Variation 1 (Right)", src: MuleDeer_PiebaldVar1FemaleRightSide },
    { name: "Piebald Variation 1 (Left)", src: MuleDeer_PiebaldVar1FemaleLeftSide },
    { name: "Piebald Variation 2 (Right)", src: MuleDeer_PiebaldVar2FemaleRightSide },
    { name: "Piebald Variation 2 (Left)", src: MuleDeer_PiebaldVar2FemaleLeftSide },
  ];

  const greatOneGallery = [
    { name: "Fabled Cinnamon Stripes", src: MuleDeer_FabledCinnamonStripesRightSide },
    { name: "Fabled Cobweb Enigma", src: MuleDeer_FabledCobwebEnigmaRightSide },
    { name: "Fabled Dripple Drizzle", src: MuleDeer_FabledDrippleDrizzleRightSide },
    { name: "Fabled Dusky Drift (Right)", src: MuleDeer_FabledDuskyDriftRightSide },
    { name: "Fabled Dusky Drift (Left)", src: MuleDeer_FabledDuskyDriftLeftSide },
    { name: "Fabled Milky Way", src: MuleDeer_FabledMilkyWayRightSide },
    { name: "Fabled Petal Puff (Right)", src: MuleDeer_FabledPetalPuffRightSide },
    { name: "Fabled Petal Puff (Left)", src: MuleDeer_FabledPetalPuffLeftSide },
  ];

  // Trivia Data
  const triviaData = [
    <span>Mule Deer are considered one of the newest deer species to evolve in North America. It's estimated to have evolved only 10,000 years ago from ancient <span style={{color: '#6fb2e6', cursor:'pointer'}}>Whitetail Deer</span> and <span style={{color: '#6fb2e6', cursor:'pointer'}}>Blacktail Deer</span> hybrids. <sup>[2]</sup></span>
  ];

  // References Data
  const referencesData = [
    "Mule Deer Need Zones, Askiy Ridge",
    "https://lewis-clark.org/sciences/mammals/deer/mule-deer/"
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
          <span>Mule Deer</span>
        </div>

        <div style={styles.layout}>
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside style={styles.sidebarColumn}>
            <div style={styles.sidebarHeader}>Mule Deer</div>
            <div style={styles.sidebarImage}>
              <img src={MuleDeerMain} alt="Mule Deer" style={{width:'100%', height: '100%', objectFit: 'cover'}} />
            </div>
            
            <div style={styles.sidebarHeader}>General Information</div>
            
            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Class</span>
              <span><img src={class5Icon} alt="Class 5" style={{width:'24px', height:'24px', verticalAlign: 'middle', marginRight: '6px'}}/>5</span>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Difficulty</span>
              <span>1: Trivial — 5: Medium</span>
              <br/>
              <span>10: Fabled</span>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Trophy Type</span>
              <span>Antlers</span>
              <div style={styles.trophyGrid}>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.silver}}>◆ Silver</span>
                  <span>98.36</span>
                </div>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.gold}}>☗ Gold</span>
                  <span>220.54</span>
                </div>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.diamond}}>☗ Diamond</span>
                  <span>312.17</span>
                </div>
              </div>
            </div>

             <div style={styles.sidebarSection}>
               <span style={{...styles.sidebarLabel, color: '#2ecc71'}}>Great One</span>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Weight</span>
              70kg — 210kg<br/>
              <span style={{color: '#88a0b8', fontSize: '0.85rem'}}>154lbs — 463lbs</span>
            </div>

            <div style={styles.sidebarSection}>
               <span style={styles.sidebarLabel}>Fur</span>
               <span style={{fontSize:'0.85rem'}}>
                 Albino, Blonde, Brown, Dilute, Grey, Leucistic, Melanistic, Piebald<br/><br/>
                 <strong>Fabled Exclusive:</strong><br/>
                 Cinnamon Stripes, Cobweb Enigma, Dripple Drizzle, Dusky Drift, Milky Way, Petal Puff
               </span>
            </div>

            <div style={styles.sidebarHeader}>Locations</div>
            <div style={styles.sidebarSection}>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Parque Fernando</span></div>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Silver Ridge Peaks</span></div>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Rancho del Arroyo</span></div>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Askiy Ridge Hunting Preserve</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main style={styles.mainColumn}>

            {/* Quote Block */}
            <div style={styles.quoteBox}>
              "The mule deer is a species of deer named for its ears, which bear a resemblance to the large ears of a mule. While native to North America, the mule deer has been introduced to other parts of the world like Argentina and Hawaii for hunting purposes. The mule deer is related to the whitetail and blacktail deer, but has evolved to be better than both at navigating its rugged home terrain. It stands larger than the whitetail deer, often reaching over 1.00 m at the shoulder and having a nose-to-tail length of 1.20 m to 2.10 m, additionally having significantly less variation across ranges. A highly sought after trophy animal and frequently hunted where found, the mule deer can present an incredible trophy"
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p style={{marginBottom:'20px'}}>
              The <strong>Mule Deer</strong> is a <span style={styles.link}>class 5</span> deer. It can be hunted in the <span style={styles.link}>Parque Fernando</span>, <span style={styles.link}>Silver Ridge Peaks</span>, <span style={styles.link}>Rancho del Arroyo</span>, and <span style={styles.link}>Askiy Ridge</span> reserves.
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
            <div style={{display:'flex', gap:'20px', flexWrap:'wrap'}}>
                {needZonesData.map((reserve, idx) => (
                    <div key={idx} style={{flex: 1, minWidth: '300px'}}>
                        <table style={styles.table}>
                            <thead>
                                <tr><th colSpan="2" style={{...styles.th, textAlign: 'center'}}>{reserve.name}</th></tr>
                                <tr>
                                    <th style={{...styles.th, backgroundColor: '#0f2e48'}}>Times</th>
                                    <th style={{...styles.th, backgroundColor: '#0f2e48'}}>Activity</th>
                                </tr>
                            </thead>
                            <tbody>
                                {reserve.schedule.map((zone, i) => (
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

            {/* GREAT ONES GALLERY */}
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
                                Blonde (37.32%)<br/>
                                Brown (37.32%)<br/>
                                Grey (24.98%)
                            </td>
                            <td style={styles.td}>
                                X
                            </td>
                            <td style={styles.td}>
                                Dilute (0.20%)
                            </td>
                            <td style={styles.td}>
                                Albino (0.02%)<br/>
                                Leucistic (0.02%)<br/>
                                Melanistic (0.02%)<br/>
                                Piebald Variation 1 (0.05%)<br/>
                                Piebald Variation 2 (0.05%)
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 style={{color: '#6fb2e6', fontSize: '1.1rem', marginBottom: '10px', textDecoration: 'underline'}}>Mule Deer Great One Tips:</h3>
            <p style={{marginBottom: '20px'}}>
                The Mule Deer Great One can be found on any mule deer maps (<span style={styles.link}>Parque Fernando</span>, <span style={styles.link}>Silver Ridge Peaks</span>, <span style={styles.link}>Rancho del Arroyo</span>, and <span style={styles.link}>Askiy Ridge</span> reserves.) However the best map by far is Askiy Ridge. Askiy Ridge has smaller population sizes and only the left side of the map can spawn mule deer. Mule deer only spawn on approximately 23 lakes on askiy ridge rather than the whole map which makes setting up much easier as you have more tent coverage. Not only this but the mule deer zones themselves are easier to find due to their smaller number of possible locations. Due to all the factors above when considering this grind it is worth purchasing the Askiy Ridge map or setting up on it rather than the other mule deer maps such as Silver Ridge Peaks.
            </p>

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

export default MuleDeer;