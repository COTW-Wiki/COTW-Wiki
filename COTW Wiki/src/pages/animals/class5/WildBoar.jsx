import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import DrinkingZoneIcon from '../../../assets/DrinkingZoneIcon.webp';
import class5Icon from '../../../assets/Class5Icon.webp'; 
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import WildBoarMain from '../../../assets/WildBoar.webp';
import ShotSchemeImg from '../../../assets/Wild_boar_shot_scheme.webp';

// Fur Variant Images
// Note: Wild Boar variants generally apply to both sexes in game, mapped accordingly.
import WildBoar_Albino from '../../../assets/WildBoar_Albino.webp';
import WildBoar_Blackgold from '../../../assets/WildBoar_Blackgold.webp';
import WildBoar_BrownVar1 from '../../../assets/WildBoar_BrownVariation1.webp';
import WildBoar_BrownVar2 from '../../../assets/WildBoar_BrownVariation2.webp';
import WildBoar_DarkBrown from '../../../assets/WildBoar_DarkBrown.webp';
import WildBoar_LightBrown from '../../../assets/WildBoar_LightBrown.webp';
import WildBoar_Melanistic from '../../../assets/WildBoar_Melanistic.webp';
import WildBoar_Purplegrey from '../../../assets/WildBoar_Purplegrey.webp';

// Great One (Fabled) Images — Left/Right variants
import WildBoar_FabledAshLeft from '../../../assets/WildBoar_FabledAshLeftSide.webp';
import WildBoar_FabledBrindleLeft from '../../../assets/WildBoar_FabledBrindleLeftSide.webp';;
import WildBoar_FabledButterscotchLeft from '../../../assets/WildBoar_FabledButterscotchLeftSide.webp';
import WildBoar_FabledChalkLeft from '../../../assets/WildBoar_FabledChalkLeftSide.webp';
import WildBoar_FabledCinderLeft from '../../../assets/WildBoar_FabledCinderLeftSide.webp';
import WildBoar_FabledScorchLeft from '../../../assets/WildBoar_FabledScorchLeftSide.webp';
import WildBoar_FabledScorchRight from '../../../assets/WildBoar_FabledScorchRightSide.webp';
import WildBoar_FabledSmolderLeft from '../../../assets/WildBoar_FabledSmolderLeftSide.webp';
import WildBoar_FabledStitchLeft from '../../../assets/WildBoar_FabledStitchLeftSide.webp';
import WildBoar_FabledStitchRight from '../../../assets/WildBoar_FabledStitchRightSide.webp';
import WildBoar_FabledStrippleLeft from '../../../assets/WildBoar_FabledStrippleLeftSide.webp';
import WildBoar_FabledStrippleRight from '../../../assets/WildBoar_FabledStrippleRightSide.webp';


const WildBoar = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  const needZonesData = [
    {
      name: "Hirschfelden Hunting Reserve",
      schedule: [
        { time: "00:00 - 03:00", type: "Drinking", icon: DrinkingZoneIcon },
        { time: "03:00 - 06:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "06:00 - 10:00", type: "Resting", icon: RestingZoneIcon },
        { time: "10:00 - 14:00", type: "Resting", icon: RestingZoneIcon },
        { time: "14:00 - 17:00", type: "Resting", icon: RestingZoneIcon },
        { time: "17:00 - 21:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "21:00 - 00:00", type: "Feeding", icon: FeedingZoneIcon },
      ]
    },
    // Note: Other reserves (Medved, Cuatro, Te Awaroa) not shown in screenshots, 
    // omitting to stick to strictly provided data.
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Easily agitated and aggressive" },
    { label: "Habitat", value: "Deciduous forests and open fields" },
    { label: "Senses", value: "Excellent hearing and sense of smell" },
    { label: "Social", value: "Highly social and vocal animals. Lives in medium-sized groups" },
    { label: "Active", value: "During night" },
    { label: "Recommended Equipment", value: "Class 5 Ammo, Wild Boar Caller, Wild Boar Scent" },
    { label: "Species", value: "Sus scrofa", italic: true, isLink: true },
    { label: "Difficulty", value: "Average" },
  ];

  // Fur Gallery Data
  const galleryItems = [
    { name: "Albino", src: WildBoar_Albino },
    { name: "Blackgold", src: WildBoar_Blackgold },
    { name: "Brown Variation 1", src: WildBoar_BrownVar1 },
    { name: "Brown Variation 2", src: WildBoar_BrownVar2 },
    { name: "Dark Brown", src: WildBoar_DarkBrown },
    { name: "Light Brown", src: WildBoar_LightBrown },
    { name: "Melanistic", src: WildBoar_Melanistic },
    { name: "Purplegrey", src: WildBoar_Purplegrey },
  ];

  // Great One Gallery Data
  const greatOneGallery = [
      { name: "Fabled Ash (Left)", src: WildBoar_FabledAshLeft },
      { name: "Fabled Brindle (Left)", src: WildBoar_FabledBrindleLeft },
      { name: "Fabled Butterscotch (Left)", src: WildBoar_FabledButterscotchLeft },
      { name: "Fabled Chalk (Left)", src: WildBoar_FabledChalkLeft },
      { name: "Fabled Cinder (Left)", src: WildBoar_FabledCinderLeft },
      { name: "Fabled Scorch (Left)", src: WildBoar_FabledScorchLeft },
      { name: "Fabled Scorch (Right)", src: WildBoar_FabledScorchRight },
      { name: "Fabled Smolder (Left)", src: WildBoar_FabledSmolderLeft },
      { name: "Fabled Stitch (Left)", src: WildBoar_FabledStitchLeft },
      { name: "Fabled Stitch (Right)", src: WildBoar_FabledStitchRight },
      { name: "Fabled Stripple (Left)", src: WildBoar_FabledStrippleLeft },
      { name: "Fabled Stripple (Right)", src: WildBoar_FabledStrippleRight },
    ];

  // Trivia Data
  const triviaData = [
    "The Wild Boar is one of the original animals that were present ingame at launch.",
    "Wild Boar are the most widespread swine in the world. It exists on every continent except Antarctica.",
    "All domestic pig breeds descend from the Wild Boar.",
    "In French, it is called \"sanglier.\"",
    "It became the 11th Great One and got a remodel on Tuesday 9th December 2025",
    "Domesticated pigs can devolve back into Wild Boar and become Feral in mere Months, growing thicker hair and tusks"
  ];

  // References Data (Placeholder - Not provided in screenshots)
  const referencesData = [
    "Wild Boar Need Zones, Hirschfelden",
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
          <span>Wild Boar</span>
        </div>

        <div style={styles.layout}>
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside style={styles.sidebarColumn}>
            <div style={styles.sidebarHeader}>Wild Boar</div>
            <div style={styles.sidebarImage}>
              <img src={WildBoarMain} alt="Wild Boar" style={{width:'100%', height: '100%', objectFit: 'cover'}} />
            </div>
            
            <div style={styles.sidebarHeader}>General Information</div>
            
            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Class</span>
              {/* */}
              <span><img src={class5Icon} alt="Class 5" style={{width:'24px', height:'24px', verticalAlign: 'middle', marginRight: '6px'}}/>5</span>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Difficulty</span>
              {/* */}
              <span>1: Trivial — 5: Medium</span><br/>
              <span>10: Fabled</span>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Trophy Type</span>
              <span>Tusks</span>
              <div style={styles.trophyGrid}>
                {/* */}
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.silver}}>◆ Silver</span>
                  <span>37.50</span>
                </div>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.gold}}>☗ Gold</span>
                  <span>98.50</span>
                </div>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.diamond}}>☗ Diamond</span>
                  <span>144.25</span>
                </div>
              </div>
            </div>

            <div style={styles.sidebarSection}>
               <span style={{...styles.sidebarLabel, color: '#2ecc71'}}>Great One</span>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Weight</span>
              {/* */}
              25kg — 240kg<br/>
              <span style={{color: '#88a0b8', fontSize: '0.85rem'}}>55lbs — 529lbs</span>
            </div>

            <div style={styles.sidebarSection}>
               <span style={styles.sidebarLabel}>Fur</span>
               {/* */}
               <span style={{fontSize:'0.85rem'}}>
                 Albino, Blackgold, Brown, Dark Brown, Light Brown, Melanistic, Purplegrey<br/><br/>
                 <strong>Fabled Exclusive:</strong><br/>
                 Ash, Brindle, Butterscotch, Chalk, Cinder, Scorch, Smolder, Stitch, Stripple
               </span>
            </div>

            <div style={styles.sidebarHeader}>Locations</div>
            <div style={styles.sidebarSection}>
               {/* */}
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Hirschfelden Hunting Reserve</span></div>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Medved-Taiga National Park</span></div>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Cuatro Colinas Game Reserve</span></div>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Tòrr nan Sithean</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main style={styles.mainColumn}>

            {/* Quote Block */}
            <div style={styles.quoteBox}>
              "Also known as the wild swine or the Eurasian wild pig, the wild boar is native to most parts of Europe and Asia. It is also one of the most spread and adaptable mammals in the world, characterized by their bulky bodies, coarse fur, and prominent shoulder hump. Their head is shaped and used as a veritable plow, allowing them to upturn considerable amounts of soil and rocks weighing 40 - 50 kg (88 - 110 lb). A wild boar can run up to 40 km (25 mi) per hour and jump obstacles above 1.50 m (59 inches). Boars are highly social animals and tend to live in groups. Hunters should take considerable care as boars are very tough and will not hesitate to defend themselves if threatened."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p style={{marginBottom:'20px'}}>
              The <strong>Wild Boar</strong> is a medium-sized kind of swine (<span style={styles.link}>class 5</span>). It can be hunted in four areas, <span style={styles.link}>Hirschfelden Hunting Reserve</span>, <span style={styles.link}>Medved-Taiga National Park</span>, <span style={styles.link}>Cuatro Colinas Game Reserve</span> and <span style={styles.link}>Tòrr nan Sithean</span>. It is one of three huntable animals in the game of the species of <em>Sus scrofa</em> (Boar), the other ones being the <span style={styles.link}>Feral Pig</span> and the <span style={styles.link}>Wild Hog</span>.
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
                <li><a href="#fur-great-ones" onClick={(e)=>scrollToId(e,'fur-great-ones')} style={styles.link}>Fur Variants | Great Ones</a></li>
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
                        <tr><th colSpan="2" style={{...styles.th, textAlign: 'center'}}>Hirschfelden</th></tr>
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
            <div style={styles.galleryGrid}>
              {galleryItems.map((item, i) => (
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
                                Brown Variation 1 (39.74%)<br/>
                                Brown Variation 2 (19.87%)<br/>
                                Dark Brown (19.87%)<br/>
                                Light Brown (19.87%)
                            </td>
                            <td style={styles.td}>
                                X
                            </td>
                            <td style={styles.td}>
                                Blackgold (0.24%)<br/>
                                Purplegrey (0.24%)
                            </td>
                            <td style={styles.td}>
                                Albino (0.08%)<br/>
                                Melanistic (0.08%)
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

export default WildBoar;