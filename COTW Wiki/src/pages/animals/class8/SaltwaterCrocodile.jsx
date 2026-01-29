import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import DrinkingZoneIcon from '../../../assets/DrinkingZoneIcon.webp'; // Kept for consistency, though unused in schedule
import class8Icon from '../../../assets/Class8Icon.webp'; // Class 8 for Saltwater Crocodile
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import CrocMain from '../../../assets/Crocodile.webp';
import ShotSchemeImg from '../../../assets/Saltwater_Crocodile_shot_scheme.webp';

// Scute Variant Images
import SaltwaterCrocodile_Albino from '../../../assets/SaltwaterCrocodile_Albino.webp';
import SaltwaterCrocodile_DarkBrown from '../../../assets/SaltwaterCrocodile_DarkBrown.webp';
import SaltwaterCrocodile_Grey from '../../../assets/SaltwaterCrocodile_Grey.webp';
import SaltwaterCrocodile_Leucistic from '../../../assets/SaltwaterCrocodile_Leucistic.webp';
import SaltwaterCrocodile_LightBrown from '../../../assets/SaltwaterCrocodile_LightBrown.webp';
import SaltwaterCrocodile_Melanistic from '../../../assets/SaltwaterCrocodile_Melanistic.webp';
import SaltwaterCrocodile_Olive from '../../../assets/SaltwaterCrocodile_Olive.webp';
import SaltwaterCrocodile_PiebaldVariation1 from '../../../assets/SaltwaterCrocodile_PiebaldVariation1.webp';
import SaltwaterCrocodile_PiebaldVariation2 from '../../../assets/SaltwaterCrocodile_PiebaldVariation2.webp';


const SaltwaterCrocodile = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  const needZonesData = [
    {
      name: "Emerald Coast",
      schedule: [
        { time: "00:00 - 04:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "04:00 - 08:00", type: "Resting", icon: RestingZoneIcon },
        { time: "08:00 - 12:00", type: "Resting", icon: RestingZoneIcon },
        { time: "12:00 - 16:00", type: "Resting", icon: RestingZoneIcon },
        { time: "16:00 - 20:00", type: "Resting", icon: RestingZoneIcon },
        { time: "20:00 - 00:00", type: "Feeding", icon: FeedingZoneIcon },
      ]
    }
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "One of the most aggressive species in the world, very dangerous" },
    { label: "Habitat", value: "Coastal brackish mangrove swamps and river deltas" },
    { label: "Senses", value: "Excellent sense of smell, hearing and vibration" },
    { label: "Social", value: "Solitary, territorial and extremely aggressive" },
    { label: "Active", value: "Night, dusk and dawn" },
    { label: "Recommended Equipment", value: "Class 8 ammo" },
    { label: "Species", value: "Crocodylus porosus", italic: true, isLink: true },
    { label: "Difficulty", value: "Very Hard" },
  ];

  // Scute Variants Gallery Data
  const scuteGallery = [
    { name: "Albino", src: SaltwaterCrocodile_Albino },
    { name: "Dark Brown", src: SaltwaterCrocodile_DarkBrown },
    { name: "Grey", src: SaltwaterCrocodile_Grey },
    { name: "Leucistic", src: SaltwaterCrocodile_Leucistic },
    { name: "Light Brown", src: SaltwaterCrocodile_LightBrown },
    { name: "Melanistic", src: SaltwaterCrocodile_Melanistic },
    { name: "Olive", src: SaltwaterCrocodile_Olive },
    { name: "Piebald Variation 1", src: SaltwaterCrocodile_PiebaldVariation1 },
    { name: "Piebald Variation 2", src: SaltwaterCrocodile_PiebaldVariation2 },
  ];

  // Tips Data
  const tipsData = [
    "Crocodiles can be found commonly in the mangrove marshes to the east of Tamba Coast and northeast of Saltfinger Shore. Running through the marshes is a great tactic as crocodiles will usually hiss a warning if they detect a player, giving up the croc's position, and allowing the player to quickly shoot the crocodile before it can run into deeper water and despawn or charge. Try running but once you hear the hiss, begin walking as to not spook the crocodile.",
    "If a crocodile has been spooked but hasn't gone into the water, it will make quick, short hisses until killed or returning to the water, this can alert a player that the croc is still up for bags.",
    "Like the alligator, not all crocodiles will attack but they do attack a bit more frequently than their American cousins.",
    "This could be a bug or not but there are times where the crocodile will become confused and begin running back and forth, stopping and repeating until interrupted in which it will make a break for the nearest water source. Line up a shot during this \"confusion period\".",
    "When the crocodiles are spooked/aggressive and run into the water they tend to loop an aggressive Snarling sound effect that sounds more like a Dog or wolf than a crocodile, using that sound cue you can cheese the Kill by looking underwater to see the crocodile, then shooting them. however this only works in a very specific set of conditions"
  ];

  // Trivia Data
  const triviaData = [
    "The word 'Crocodile' comes from the Greek word for the animal 'krokodilos'. If broken down further, the name could literally be translated as \"Pebble Worm\".",
    "The Saltwater Crocodile is the largest extant species of reptile in the world. The largest crocodile ever recorded was a specimen by the name of 'Lolong', who measured in at 1,075Kg (2,370Lbs) and 6.17m (20ft 3in) from snout to tail."
  ];

  // References Data
  const referencesData = [
    "Saltwater Crocodile Need Zones, Emerald Coast",
    "https://www.merriam-webster.com/dictionary/crocodile",
    "https://www.sciencetimes.com/articles/36213/20220220/remembering-lolong-largest-saltwater-crocodile-captivity-who-died-two-years.htm"
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
          <span>Saltwater Crocodile</span>
        </div>

        <div style={styles.layout}>
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside style={styles.sidebarColumn}>
            <div style={styles.sidebarHeader}>Saltwater Crocodile</div>
            <div style={styles.sidebarImage}>
              <img src={CrocMain} alt="Saltwater Crocodile" style={{width:'100%', height: '100%', objectFit: 'cover'}} />
            </div>
            
            <div style={styles.sidebarHeader}>General Information</div>
            
            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Class</span>
              <span><img src={class8Icon} alt="Class 8" style={{width:'24px', height:'24px', verticalAlign: 'middle', marginRight: '6px'}}/>8</span>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Difficulty</span>
              <span>1: Trivial — 9: Legendary</span>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Trophy Type</span>
              <span>Length</span>
              <div style={styles.trophyGrid}>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.silver}}>◆ Silver</span>
                  <span>420</span>
                </div>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.gold}}>☗ Gold</span>
                  <span>760</span>
                </div>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.diamond}}>☗ Diamond</span>
                  <span>1015</span>
                </div>
              </div>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Weight</span>
              368 kg — 1100 kg<br/>
              <span style={{color: '#88a0b8', fontSize: '0.85rem'}}>811lbs — 2425lbs</span>
            </div>

            <div style={styles.sidebarSection}>
               <span style={styles.sidebarLabel}>Skin</span>
               <span style={{fontSize:'0.85rem'}}>
                 Albino, Grey, Dark Brown, Leucistic, Light Brown, Melanistic, Olive, Piebald
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
              "Reaching lengths of more than 6.50 m and weights over 1,000.00 kg, the saltwater crocodile is the largest reptile on the planet and a formidable predator that can display surprising agility and speed when necessary. These huge animals are capable of eating just about anything and are particularly adept at drowning their preys. Named for its ability to survive in full salinity saltwater, they typically live in brackish (low salinity) water near the coast. Saltwater crocodiles have 66 teeth on average and the greatest bite pressure of any animal in the world. Saltwater crocodiles are aggressive and deadly giants - Do. Not. Get. Close. To. Them."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p style={{marginBottom:'20px'}}>
              The <strong>Saltwater Crocodile</strong> is the largest reptile and crocodilian in game, coming in at a <span style={styles.link}>Class 8</span>. It can be hunted on the <span style={styles.link}>Emerald Coast</span>. It is the second crocodilian/reptile to be introduced to the game, the first being the <span style={styles.link}>American Alligator</span>.
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
                <li><a href="#shot-scheme" onClick={(e)=>scrollToId(e,'shot-scheme')} style={styles.link}>Shot Scheme</a></li>
                <li><a href="#scute-variants" onClick={(e)=>scrollToId(e,'scute-variants')} style={styles.link}>Scute Variants</a></li>
                <li><a href="#scute-rarity" onClick={(e)=>scrollToId(e,'scute-rarity')} style={styles.link}>Scute Variant Rarity</a></li>
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
                        <tr><th colSpan="2" style={{...styles.th, textAlign: 'center'}}>Emerald Coast[1]</th></tr>
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
            <h2 style={styles.h2} id="shot-scheme">Shot Scheme</h2>
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

            {/* SCUTE VARIANTS (Gallery) */}
            <h2 style={styles.h2} id="scute-variants">Scute Variants</h2>
            <div style={styles.galleryGrid}>
              {scuteGallery.map((item, i) => (
                <div key={i} style={styles.galleryItem}>
                  <div style={styles.galleryImgPlaceholder}>
                    <img src={item.src} alt={item.name} style={{width:'100%', height: '100%', objectFit: 'contain'}} />
                  </div>
                  <span style={styles.galleryLabel}>{item.name}</span>
                </div>
              ))}
            </div>

            {/* SCUTE VARIANT RARITY TABLE */}
            <h2 id="scute-rarity" style={styles.h2}>Scute Variant Rarity</h2>
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
                                Olive (37.35%)<br/>
                                Grey (37.35%)<br/>
                                Dark Brown (25.00%)
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
                                Light Brown (0.05%)<br/>
                                Melanistic (0.05%)<br/>
                                Piebald Variation 1 (0.05%)<br/>
                                Piebald Variation 2 (0.05%)
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* TIPS */}
            <h2 id="tips" style={styles.h2}>Tips</h2>
            {tipsData.map((tip, idx) => (
                <p key={idx} style={{marginBottom: '15px'}}>{tip}</p>
            ))}

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

export default SaltwaterCrocodile;