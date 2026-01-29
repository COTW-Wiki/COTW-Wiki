import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import DrinkingZoneIcon from '../../../assets/DrinkingZoneIcon.webp';
import class6Icon from '../../../assets/Class6Icon.webp'; // Class 6 for Gray Wolf
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import GrayWolfMain from '../../../assets/GrayWolf.webp';
import ShotSchemeImg from '../../../assets/Gray_Wolf_shot_scheme.webp';

// Fur Variant Images - Standard
import GrayWolf_Acromelanistic from '../../../assets/GrayWolf_Acromelanistic.webp';
import GrayWolf_Albino from '../../../assets/GrayWolf_Albino.webp';
import GrayWolf_Brown from '../../../assets/GrayWolf_Brown.webp';
import GrayWolf_DarkGrey from '../../../assets/GrayWolf_DarkGrey.webp';
import GrayWolf_EggWhite from '../../../assets/GrayWolf_EggWhite.webp';
import GrayWolf_Grey from '../../../assets/GrayWolf_Grey.webp';
import GrayWolf_Melanistic from '../../../assets/GrayWolf_Melanistic.webp';
import GrayWolf_MelanisticCharcoal from '../../../assets/GrayWolf_MelanisticCharcoal.webp';
import GrayWolf_RedBrown from '../../../assets/GrayWolf_RedBrown.webp';

// Fur Variant Images - Great Ones (Fabled)
import GrayWolf_FabledBattlethorneLeftSide from '../../../assets/GrayWolf_FabledBattlethorneLeftSide.webp';
import GrayWolf_FabledBattlethorneRightSide from '../../../assets/GrayWolf_FabledBattlethorneRightSide.webp';
import GrayWolf_FabledDawnbreakRightSide from '../../../assets/GrayWolf_FabledDawnbreakRightSide.webp';
import GrayWolf_FabledFrostbiteRightSide from '../../../assets/GrayWolf_FabledFrostbiteRightSide.webp';
import GrayWolf_FabledGravehideRightSide from '../../../assets/GrayWolf_FabledGravehideRightSide.webp';
import GrayWolf_FabledHollowRightSide from '../../../assets/GrayWolf_FabledHollowRightSide.webp';
import GrayWolf_FabledRazorwindRightSide from '../../../assets/GrayWolf_FabledRazorwindRightSide.webp';
import GrayWolf_FabledScarborneLeftSide from '../../../assets/GrayWolf_FabledScarborneLeftSide.webp';
import GrayWolf_FabledScarborneRightSide from '../../../assets/GrayWolf_FabledScarborneRightSide.webp';
import GrayWolf_FabledTwinsoulLeftSide from '../../../assets/GrayWolf_FabledTwinsoulLeftSide.webp';
import GrayWolf_FabledTwinsoulRightSide from '../../../assets/GrayWolf_FabledTwinsoulRightSide.webp';
import GrayWolf_FabledVanguardRightSide from '../../../assets/GrayWolf_FabledVanguardRightSide.webp';


const GrayWolf = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  const needZonesData = [
    {
      name: "Askiiy Ridge",
      schedule: [
        { time: "00:00 - 03:00", type: "Drinking", icon: DrinkingZoneIcon },
        { time: "03:00 - 06:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "06:00 - 10:00", type: "Resting", icon: RestingZoneIcon },
        { time: "10:00 - 14:00", type: "Resting", icon: RestingZoneIcon },
        { time: "14:00 - 18:00", type: "Resting", icon: RestingZoneIcon },
        { time: "18:00 - 21:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "21:00 - 00:00", type: "Feeding", icon: FeedingZoneIcon },
      ]
    }
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Social, territorial, defensive" },
    { label: "Habitat", value: "Forested areas" },
    { label: "Senses", value: "Legendary sense of hearing and smell, excellent vision" },
    { label: "Social", value: "Organized and gregarious, live in coordinated packs with internal social structures" },
    { label: "Active", value: "Dawn, Dusk and intermittently throughout the day" },
    { label: "Recommended Equipment", value: "Class 6 Ammo, Distressed Callers" },
    { label: "Species", value: "Canis lupus", italic: true, isLink: true },
    { label: "Difficulty", value: "Hard" },
  ];

  // Fur Gallery Data - Standard
  const furGallery = [
    { name: "Acromelanistic", src: GrayWolf_Acromelanistic },
    { name: "Albino", src: GrayWolf_Albino },
    { name: "Brown", src: GrayWolf_Brown },
    { name: "Dark Grey", src: GrayWolf_DarkGrey },
    { name: "Egg White", src: GrayWolf_EggWhite },
    { name: "Grey", src: GrayWolf_Grey },
    { name: "Melanistic", src: GrayWolf_Melanistic },
    { name: "Melanistic Charcoal", src: GrayWolf_MelanisticCharcoal },
    { name: "Red Brown", src: GrayWolf_RedBrown },
  ];

  // Great Ones Gallery
  const greatOnesGallery = [
    { name: "Fabled Battlethorne (Left)", src: GrayWolf_FabledBattlethorneLeftSide },
    { name: "Fabled Battlethorne (Right)", src: GrayWolf_FabledBattlethorneRightSide },
    { name: "Fabled Dawnbreak", src: GrayWolf_FabledDawnbreakRightSide },
    { name: "Fabled Frostbite", src: GrayWolf_FabledFrostbiteRightSide },
    { name: "Fabled Gravehide", src: GrayWolf_FabledGravehideRightSide },
    { name: "Fabled Hollow", src: GrayWolf_FabledHollowRightSide },
    { name: "Fabled Razorwind", src: GrayWolf_FabledRazorwindRightSide },
    { name: "Fabled Scarborne (Left)", src: GrayWolf_FabledScarborneLeftSide },
    { name: "Fabled Scarborne (Right)", src: GrayWolf_FabledScarborneRightSide },
    { name: "Fabled Twinsoul (Left)", src: GrayWolf_FabledTwinsoulLeftSide }, 
    { name: "Fabled Twinsoul (Right)", src: GrayWolf_FabledTwinsoulRightSide },
    { name: "Fabled Vanguard", src: GrayWolf_FabledVanguardRightSide },
  ];

  // Tips Data
  const tipsData = [
    "The Gray Wolf is one of a handful of species in game that can go aggressive. But unlike the Bison, hunting aggressive wolves is logistically more challenging. You can prepare for an attack if you hear a un-trackable persistent growling.",
    "Once aggressive the Gray Wolf pack will try and surround you, sometimes even running in circles around you.",
    "Players have found that by killing the \"Alpha\" (highest level wolf) it seems the rest of the pack will run away. However, this is unconfirmed by the devs, and could just be a coincidence.",
    "Make sure to bring a powerful sidearm and some First Aid Kits. I recommend using the Rhino 454."
  ];

  // Trivia Data
  const triviaData = [
    "The Gray Wolf's scientific name Canis Lupus literally means \"Dog Wolf\"",
    "It is one of 3 animals in game that use the American spelling of \"Gray\" rather than the English \"Grey\". The other is the Gray Fox and Eastern Gray Kangaroo",
    "Wolf howls can be heard up to 6 miles (Nearly 10km) in forests and 10 miles (16km) in a open habitat like plains, tundra, etc.",
    "Despite its prominence and significance in Native American culture, and American Culture more broadly, the Gray Wolf evolved in Eurasia before migrating over to North America. In fact, the only Native Wolf species to North America is the now extinct Dire Wolf ('Aenocyon dirus who, based off recent findings, isn't actually a wolf.",
    "Melanistic wolves are significantly more common in North American than in Europe. This is because of interbreeding that happened thousands of years ago between wild wolves and domesticated dogs."
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
    greatOne: { color: '#2ecc71', display: 'block', textAlign: 'center', marginTop: '8px', fontWeight: 'bold' },
    
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
          <span>Gray Wolf</span>
        </div>

        <div style={styles.layout}>
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside style={styles.sidebarColumn}>
            <div style={styles.sidebarHeader}>Gray Wolf</div>
            <div style={styles.sidebarImage}>
              <img src={GrayWolfMain} alt="Gray Wolf" style={{width:'100%', height: '100%', objectFit: 'cover'}} />
            </div>
            
            <div style={styles.sidebarHeader}>General Information</div>
            
            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Class</span>
              <span><img src={class6Icon} alt="Class 6" style={{width:'24px', height:'24px', verticalAlign: 'middle', marginRight: '6px'}}/>6</span>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Difficulty</span>
              <span>1: Trivial — 9: Legendary</span><br/>
              <span>10: Fabled</span>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Trophy Type</span>
              <span>Skull</span>
              <div style={styles.trophyGrid}>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.silver}}>◆ Silver</span>
                  <span>32</span>
                </div>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.gold}}>☗ Gold</span>
                  <span>36</span>
                </div>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.diamond}}>☗ Diamond</span>
                  <span>39</span>
                </div>
              </div>
              <div style={styles.greatOne}>💎 Great One</div>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Weight</span>
              30kg — 80kg<br/>
              <span style={{color: '#88a0b8', fontSize: '0.85rem'}}>66lbs — 176lbs</span>
            </div>

            <div style={styles.sidebarSection}>
               <span style={styles.sidebarLabel}>Fur</span>
               <span style={{fontSize:'0.85rem'}}>
                 Acromelanistic, Albino, Brown, Egg White, Dark Grey, Grey, Melanistic, Melanistic Charcoal, Red Brown
               </span>
               <br/>
               <span style={{fontWeight:'bold', display:'block', marginTop: '6px', fontSize:'0.85rem'}}>Fabled Exclusive:</span>
               <span style={{fontSize:'0.85rem'}}>
                 Battlethorne, Dawnbreak, Frostbite, Gravehide, Hollow, Razorwind, Scarborne, Twinsoul, Vanguard
               </span>
            </div>

            <div style={styles.sidebarHeader}>Locations</div>
            <div style={styles.sidebarSection}>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Yukon Valley Nature Reserve</span></div>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Medved-Taiga National Park</span></div>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Askiiy Ridge Hunting Preserve</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main style={styles.mainColumn}>

            {/* Quote Block */}
            <div style={styles.quoteBox}>
              "One of the most widely researched species in the world, and simultaneously one of the most popular motifs in folklore and culture, the gray wolf is a staple of humanity's interactions with nature. The largest specimen of all wild canids, the Alaskan gray wolf can grow to 75.00 kg, but specimens this large are rare. Male gray wolves stand at nearly 1.00 m in height and over 1.50 im in length. Their social capabilities make them vicious and effective hunters, especially in larger packs and when led by an effective alpha pair, who eat first, lead the pack when traveling, and initiate the pack howl, known as a rally. In the event of a confrontation walk backwards and avoid making yourself look small."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p style={{marginBottom:'20px'}}>
              The <strong>Gray Wolf</strong> is a <span style={styles.link}>class 6</span> predator. It can be hunted in <span style={styles.link}>Yukon Valley</span>, <span style={styles.link}>Askiiy Ridge</span>, and it was backfilled to <span style={styles.link}>Medved Taiga</span> with the Granite Update in December 2022. It was the first wolf species to be featured in the game. It is also featured as a Great One as of 2025.
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
                <li><a href="#fur-variants" onClick={(e)=>scrollToId(e,'fur-variants')} style={styles.link}>Fur variants</a></li>
                <li><a href="#great-ones" onClick={(e)=>scrollToId(e,'great-ones')} style={styles.link}>Great Ones</a></li>
                <li><a href="#variant-rarity" onClick={(e)=>scrollToId(e,'variant-rarity')} style={styles.link}>Fur Variant Rarity</a></li>
                <li><a href="#tips" onClick={(e)=>scrollToId(e,'tips')} style={styles.link}>Tips</a></li>
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
                        <tr><th colSpan="2" style={{...styles.th, textAlign: 'center'}}>Askiiy Ridge</th></tr>
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
            <h2 style={styles.h2} id="fur-variants">Fur variants</h2>
            <div style={styles.galleryGrid}>
              {furGallery.map((item, i) => (
                <div key={i} style={styles.galleryItem}>
                  <div style={styles.galleryImgPlaceholder}>
                    <img src={item.src} alt={item.name} style={{width:'100%', height: '100%', objectFit: 'contain'}} />
                  </div>
                  <span style={styles.galleryLabel}>{item.name}</span>
                </div>
              ))}
            </div>

             {/* GREAT ONES */}
             <h2 style={styles.h2} id="great-ones">Great Ones</h2>
            <div style={styles.galleryGrid}>
              {greatOnesGallery.map((item, i) => (
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
                                Brown (49.85%)<br/>
                                Grey (49.85%)
                            </td>
                            <td style={styles.td}>
                                X
                            </td>
                            <td style={styles.td}>
                                X
                            </td>
                            <td style={styles.td}>
                                Dark Gray (0.07%)<br/>
                                Eggwhite (0.07%)<br/>
                                Red Brown (0.07%)<br/>
                                Acromelanistic (0.03%)<br/>
                                Albino (0.03%)<br/>
                                Melanistic (0.03%)<br/>
                                Melanistic Charcoal (0.03%)
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* TIPS */}
            <h2 id="tips" style={styles.h2}>Tips</h2>
            <p style={{marginBottom: '15px'}}>
               {tipsData[0]}
            </p>
            <p style={{marginBottom: '15px'}}>
               {tipsData[1]}
            </p>
             <p style={{marginBottom: '15px'}}>
               {tipsData[2]}
            </p>
             <p style={{marginBottom: '15px'}}>
               {tipsData[3]}
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
            <ol style={{fontSize: '0.95rem', paddingLeft: '20px', marginBottom: '20px'}}>
              <li style={{marginBottom: '6px'}}>Gray Wolf Need Zones, Askiy Ridge</li>
              <li style={{marginBottom: '6px'}}><a href="https://www.scientificamerican.com/article/dire-wolves-were-not-really-wolves-new-genetic-clues-reveal/" style={styles.link} target="_blank" rel="noopener noreferrer">Dire wolves were not really wolves — Scientific American</a></li>
              <li style={{marginBottom: '6px'}}><a href="https://www.thoughtco.com/mystery-of-north-americas-black-wolves-129716" style={styles.link} target="_blank" rel="noopener noreferrer">Mystery of North America's Black Wolves — ThoughtCo</a></li>
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

export default GrayWolf;