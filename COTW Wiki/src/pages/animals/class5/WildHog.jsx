import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import DrinkingZoneIcon from '../../../assets/DrinkingZoneIcon.webp';
import class5Icon from '../../../assets/Class5Icon.webp'; 
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import WildHogMain from '../../../assets/FeralPig.webp';
import ShotSchemeImg from '../../../assets/Feral_Pig_shot_scheme.webp';

// Fur Variant Images
// Note: Wild Hog shares identical fur variants with Feral Pig in game.
import WildHog_AlbinoLeftSide from '../../../assets/WildHog_AlbinoLeftSide.webp';
import WildHog_BlackLeftSide from '../../../assets/WildHog_BlackLeftSide.webp';
import WildHog_BlackgoldLeftSide from '../../../assets/WildHog_BlackgoldLeftSide.webp';
import WildHog_BlackgoldRightSide from '../../../assets/WildHog_BlackgoldRightSide.webp';
import WildHog_BlackSpotsVariation1LeftSide from '../../../assets/WildHog_BlackSpotsVariation1LeftSide.webp';
import WildHog_BlackSpotsVariation1RightSide from '../../../assets/WildHog_BlackSpotsVariation1RightSide.webp';
import WildHog_BlackSpotsVariation2LeftSide from '../../../assets/WildHog_BlackSpotsVariation2LeftSide.webp';
import WildHog_BlackSpotsVariation2RightSide from '../../../assets/WildHog_BlackSpotsVariation2RightSide.webp';
import WildHog_BrownHybridVariation1LeftSide from '../../../assets/WildHog_BrownHybridVariation1LeftSide.webp';
import WildHog_BrownHybridVariation1RightSide from '../../../assets/WildHog_BrownHybridVariation1RightSide.webp';
import WildHog_BrownHybridVariation2LeftSide from '../../../assets/WildHog_BrownHybridVariation2LeftSide.webp';
import WildHog_BrownHybridVariation2RightSide from '../../../assets/WildHog_BrownHybridVariation2RightSide.webp';
import WildHog_DarkBrownVariation1LeftSide from '../../../assets/WildHog_DarkBrownVariation1LeftSide.webp';
import WildHog_DarkBrownVariation2LeftSide from '../../../assets/WildHog_DarkBrownVariation2LeftSide.webp';
import WildHog_PinkLeftSide from '../../../assets/WildHog_PinkLeftSide.webp';


const WildHog = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  const needZonesData = [
    {
      name: "Mississippi Acres Preserve",
      schedule: [
        { time: "00:00 - 03:30", type: "Resting", icon: RestingZoneIcon },
        { time: "03:00 - 06:30", type: "Drinking", icon: DrinkingZoneIcon },
        { time: "06:00 - 10:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "10:00 - 14:30", type: "Resting", icon: RestingZoneIcon },
        { time: "14:00 - 17:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "17:00 - 20:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "20:00 - 00:30", type: "Resting", icon: RestingZoneIcon },
      ]
    }
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Easily agitated and aggressive if spooked up close or cornered." },
    { label: "Habitat", value: "Shrubby forests and generally near crop fields" },
    { label: "Senses", value: "Excellent hearing and smell but poor vision" },
    { label: "Social", value: "Lives in medium-sized groups consisting of mostly females and 1 to 3 males." },
    { label: "Active", value: "During late evening and early morning" },
    { label: "Recommended Equipment", value: "Class 5 Ammo, Wild Boar Caller" },
    { label: "Species", value: "Sus scrofa", italic: true, isLink: true },
    { label: "Difficulty", value: "Very Hard" },
  ];

  // Fur Gallery Data
  const galleryItems = [
    { name: "Albino", src: WildHog_AlbinoLeftSide },
    { name: "Black", src: WildHog_BlackLeftSide },
    { name: "Blackgold (Left)", src: WildHog_BlackgoldLeftSide },
    { name: "Blackgold (Right)", src: WildHog_BlackgoldRightSide },
    { name: "Black Spots Variation 1 (Left)", src: WildHog_BlackSpotsVariation1LeftSide },
    { name: "Black Spots Variation 1 (Right)", src: WildHog_BlackSpotsVariation1RightSide },
    { name: "Black Spots Variation 2 (Left)", src: WildHog_BlackSpotsVariation2LeftSide },
    { name: "Black Spots Variation 2 (Right)", src: WildHog_BlackSpotsVariation2RightSide },
    { name: "Brown Hybrid Variation 1 (Left)", src: WildHog_BrownHybridVariation1LeftSide },
    { name: "Brown Hybrid Variation 1 (Right)", src: WildHog_BrownHybridVariation1RightSide },
    { name: "Brown Hybrid Variation 2 (Left)", src: WildHog_BrownHybridVariation2LeftSide },
    { name: "Brown Hybrid Variation 2 (Right)", src: WildHog_BrownHybridVariation2RightSide },
    { name: "Dark Brown Variation 1", src: WildHog_DarkBrownVariation1LeftSide },
    { name: "Dark Brown Variation 2", src: WildHog_DarkBrownVariation2LeftSide },
    { name: "Pink", src: WildHog_PinkLeftSide },
  ];

  // Trivia Data
  const triviaData = [
    <span>The Wild Hog is the third variant of a single species (<em>Sus scrofa</em>) featured in-game with different models. The others are the <span style={{color: '#6fb2e6', cursor:'pointer'}}>Wild Boar</span> and the <span style={{color: '#6fb2e6', cursor:'pointer'}}>Feral Pig</span>.</span>,
    "Formerly the fur variation brown was available, it was later changed to black."
  ];

  // References Data (Placeholder - Not visible in provided screenshots)
  const referencesData = [
    "Wild Hog Need Zones, Mississippi Acres Preserve"
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
          <span>Wild Hog</span>
        </div>

        <div style={styles.layout}>
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside style={styles.sidebarColumn}>
            <div style={styles.sidebarHeader}>Wild Hog</div>
            <div style={styles.sidebarImage}>
              <img src={WildHogMain} alt="Wild Hog" style={{width:'100%', height: '100%', objectFit: 'cover'}} />
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
              <span>1: Trivial — 5: Medium</span>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Trophy Type</span>
              <span>Tusks</span>
              <div style={styles.trophyGrid}>
                {/* */}
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.silver}}>◆ Silver</span>
                  <span>37.5</span>
                </div>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.gold}}>☗ Gold</span>
                  <span>98.5</span>
                </div>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.diamond}}>☗ Diamond</span>
                  <span>144.2</span>
                </div>
              </div>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Weight</span>
              {/* */}
              32kg — 205kg<br/>
              <span style={{color: '#88a0b8', fontSize: '0.85rem'}}>71lbs — 452lbs</span>
            </div>

            <div style={styles.sidebarSection}>
               <span style={styles.sidebarLabel}>Fur</span>
               {/* */}
               <span style={{fontSize:'0.85rem'}}>
                 Albino, Black, Black Spots, Blackgold, Brown Hybrid, Dark Brown, Pink
               </span>
            </div>

            <div style={styles.sidebarHeader}>Locations</div>
            <div style={styles.sidebarSection}>
               {/* */}
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Mississippi Acres Preserve</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main style={styles.mainColumn}>

            {/* Quote Block */}
            <div style={styles.quoteBox}>
              "Both feral and domestic pigs can trace their ancestry back to the wild boar and although feral pigs look similar to their domestic kin there are a few differences. They are smaller, have a more muscular frame, a longer and flatter snout and their forequarters are larger than their hindquarters. Interestingly, their tail is straight with a bushy tip, unlike the curly tail of a domestic pig. Their stronger frame and muscular neck helps them forage for food. Feral pigs and wild hogs also have a patch of hair running along their backs. Pigs are very quick to take on the physical characteristics of wild boars. After a few generations of being in the wild it is very hard to distinguish them from their wild boar ancestors."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p style={{marginBottom:'20px'}}>
              The <strong>Wild Hog</strong> is a suid in the <span style={styles.link}>Mississippi Acres Preserve</span> map. The Wild Hog is identical in all aspects to the <span style={styles.link}>Feral Pig</span> in the <span style={styles.link}>Te Awaroa National Park</span>. It is the third animal in the game of the species of <em>Sus scrofa</em> (Boar), the other ones being the <span style={styles.link}>Wild Boar</span> and the <span style={styles.link}>Feral Pig</span>. In-game the Wild Hog is identical in every aspect to <span style={styles.link}>Feral Pig</span> in <span style={styles.link}>Te Awaroa National Park</span>.
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
                        <tr><th colSpan="2" style={{...styles.th, textAlign: 'center'}}>Mississippi Acres Preserve</th></tr>
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
                                Black Spots Variation 1 (12.50%)<br/>
                                Black Spots Variation 2 (12.50%)<br/>
                                Black (12.45%)<br/>
                                Blackgold (12.45%)<br/>
                                Brown Hybrid Variation 1 (12.45%)<br/>
                                Brown Hybrid Variation 2 (12.45%)<br/>
                                Dark Brown Variation 1 (12.45%)<br/>
                                Dark Brown Variation 2 (12.45%)
                            </td>
                            <td style={styles.td}>
                                X
                            </td>
                            <td style={styles.td}>
                                Pink (0.20%)<br/>
                                Albino (0.10%)
                            </td>
                            <td style={styles.td}>
                                X
                            </td>
                        </tr>
                        {/* Female Row */}
                        <tr>
                            <td style={{...styles.td, color: '#d63384', fontStyle: 'italic', fontWeight: 'bold'}}>
                                Female
                            </td>
                            <td style={styles.td}>
                                Black Spots Variation 1 (49.60%)<br/>
                                Black Spots Variation 2 (49.60%)
                            </td>
                            <td style={styles.td}>
                                X
                            </td>
                            <td style={styles.td}>
                                Pink (0.79%)
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

export default WildHog;