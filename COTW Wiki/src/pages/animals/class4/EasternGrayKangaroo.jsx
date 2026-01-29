import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import DrinkingZoneIcon from '../../../assets/DrinkingZoneIcon.webp';
import class4Icon from '../../../assets/Class4Icon.webp'; // Class 4 for Eastern Gray Kangaroo
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import EasternGrayKangarooMain from '../../../assets/EasternGrayKangaroo.webp';
import ShotSchemeImg from '../../../assets/Eastern_Gray_Kangaroo_shot_scheme.webp';

// Fur Variant Images (Placeholders based on screenshots)
import EasternGrayKangaroo_Albino from '../../../assets/EasternGrayKangaroo_Albino.webp';
import EasternGrayKangaroo_Brown1 from '../../../assets/EasternGrayKangaroo_BrownVariation1.webp';
import EasternGrayKangaroo_Brown2 from '../../../assets/EasternGrayKangaroo_BrownVariation2.webp';
import EasternGrayKangaroo_Grey1 from '../../../assets/EasternGrayKangaroo_GreyVariation1.webp';
import EasternGrayKangaroo_Grey2 from '../../../assets/EasternGrayKangaroo_GreyVariation2.webp';
import EasternGrayKangaroo_GreyBrown from '../../../assets/EasternGrayKangaroo_GreyBrown.webp';
import EasternGrayKangaroo_Leucistic1 from '../../../assets/EasternGrayKangaroo_LeucisticVariation1.webp';
import EasternGrayKangaroo_Leucistic2 from '../../../assets/EasternGrayKangaroo_LeucisticVariation2.webp';
import EasternGrayKangaroo_Leucistic3 from '../../../assets/EasternGrayKangaroo_LeucisticVariation3.webp';
import EasternGrayKangaroo_Melanistic from '../../../assets/EasternGrayKangaroo_Melanistic.webp';


const EasternGrayKangaroo = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  const needZonesData = [
    {
      name: "Emerald Coast",
      schedule: [
        { time: "00:00 - 03:00", type: "Drinking", icon: DrinkingZoneIcon },
        { time: "00:30 - 06:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "06:00 - 09:00", type: "Resting", icon: RestingZoneIcon },
        { time: "09:00 - 12:00", type: "Resting", icon: RestingZoneIcon },
        { time: "12:00 - 15:00", type: "Resting", icon: RestingZoneIcon },
        { time: "15:00 - 18:00", type: "Resting", icon: RestingZoneIcon },
        { time: "18:00 - 21:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "21:00 - 00:00", type: "Feeding", icon: FeedingZoneIcon },
      ]
    }
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Grazing, resting, and traveling, Very curious and sometimes aggressive" },
    { label: "Habitat", value: "Grasslands, Woodlands, and edges of Jungle" },
    { label: "Senses", value: "Decent hearing and vision" },
    { label: "Social", value: "In mobs of 10 or less; highly social" },
    { label: "Active", value: "Most active during Dusk and Dawn" },
    { label: "Recommended Equipment", value: "Class 4 Ammo" },
    { label: "Species", value: "Macropus giganteus", italic: true, isLink: true },
    { label: "Difficulty", value: "Hard" },
  ];

  // Fur Gallery Data
  const furGallery = [
    { name: "Albino", src: EasternGrayKangaroo_Albino },
    { name: "Brown Variation 1", src: EasternGrayKangaroo_Brown1 },
    { name: "Brown Variation 2", src: EasternGrayKangaroo_Brown2 },
    { name: "Grey Variation 1", src: EasternGrayKangaroo_Grey1 },
    { name: "Grey Variation 2", src: EasternGrayKangaroo_Grey2 },
    { name: "Grey Brown", src: EasternGrayKangaroo_GreyBrown },
    { name: "Leucistic Variation 1", src: EasternGrayKangaroo_Leucistic1 },
    { name: "Leucistic Variation 2", src: EasternGrayKangaroo_Leucistic2 },
    { name: "Leucistic Variation 3", src: EasternGrayKangaroo_Leucistic3 },
    { name: "Melanistic", src: EasternGrayKangaroo_Melanistic },
  ];

  // Trivia Data
  const triviaData = [
    "According to legend, the word Kangaroo comes from Captain Cook's first expedition to Australia. Apparently, when he first encountered Kangaroos and asked the Aboriginal People what they were called, the confused locals simply replied, \"I Don't Know/ I don't understand\", or \"Kangaroo\". This story is probably apocryphal however. What ISN'T a myth though is that the word probably is derived from the local aboriginal word for the animal, \"Ganguruu\". Also the Eastern Gray Kangaroo would have probably been the species Captain Cook first saw when he landed on the continent.",
    "Female Kangaroos are often called \"Does\", \"Fliers\", or \"Jills\"; and Male Kangaroos are often called \"Bucks\", \"Boomers\", or \"Adam Garcias/ Jacks\".",
    "The Eastern Gray Kangaroo is the first Kangaroo, and also, the first marsupial species to be added to the game. But it isn't the first of it's kind to be added to an EXPANSIVE WORLDS game. That title goes to the largest Kangaroo species; the legendary Red Kangaroo (which can be hunted on theHunter: Classic)",
    "When male Kangaroos fight, they will often grab and jab at each other with their front limbs. This is probably how the Boxing Kangaroo trope was created in pop culture. The first recorded instance of a \"Boxing Kangaroo\" was some time around 1891 when a man, known only as Professor Lindermann, created a traveling act where he would fight a boxing glove clad Kangaroo named Jack."
  ];

  // References Data
  const referencesData = [
    "Eastern Gray Kangaroo Need Zones, Emerald Coast",
    "https://www.bushheritage.org.au/species/kangaroos",
    "https://www.woot.com/blog/post/the-debunker-where-does-the-word-kangaroo-come-from",
    "https://www.etymonline.com/word/kangaroo",
    "https://www.pbs.org/wnet/nature/kangaroo-mob-kangaroo-fact-sheet/7444/",
    "https://allthatsinteresting.com/kangaroo-boxing"
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
          <span>Eastern Gray Kangaroo</span>
        </div>

        <div style={styles.layout}>
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside style={styles.sidebarColumn}>
            <div style={styles.sidebarHeader}>Eastern Gray Kangaroo</div>
            <div style={styles.sidebarImage}>
              <img src={EasternGrayKangarooMain} alt="Eastern Gray Kangaroo" style={{width:'100%', height: '100%', objectFit: 'cover'}} />
            </div>
            
            <div style={styles.sidebarHeader}>General Information</div>
            
            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Class</span>
              {/* Cited from screenshot 215742 */}
              <span><img src={class4Icon} alt="Class 4" style={{width:'24px', height:'24px', verticalAlign: 'middle', marginRight: '6px'}}/>4</span>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Difficulty</span>
              {/* Cited from screenshot 215742 */}
              <span>1: Trivial — 9: Legendary</span>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Trophy Type</span>
              <span>Length</span>
              <div style={styles.trophyGrid}>
                {/* Cited from screenshot 215742 */}
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.silver}}>◆ Silver</span>
                  <span>226</span>
                </div>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.gold}}>☗ Gold</span>
                  <span>378</span>
                </div>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.diamond}}>☗ Diamond</span>
                  <span>492</span>
                </div>
              </div>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Weight</span>
              {/* Cited from screenshot 215742 */}
              29.25kg — 66.00kg<br/>
              <span style={{color: '#88a0b8', fontSize: '0.85rem'}}>64lbs — 146lbs</span>
            </div>

            <div style={styles.sidebarSection}>
               <span style={styles.sidebarLabel}>Fur</span>
               {/* Cited from screenshot 215742 */}
               <span style={{fontSize:'0.85rem'}}>
                 Albino, Grey Brown, Grey, Leucistic, Melanistic, Brown
               </span>
            </div>

            <div style={styles.sidebarHeader}>Locations</div>
            <div style={styles.sidebarSection}>
               {/* Cited from screenshot 215742 */}
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Emerald Coast</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main style={styles.mainColumn}>

            {/* Quote Block */}
            <div style={styles.quoteBox}>
              "Macropus Giganteus or the Eastern Grey Kangaroo is the heaviest and second-largest marsupial endemic to Eastern Australia. Residing in the eastern parts of Australia, it can often be found resting in cover near woodlands.
              <br/><br/>
              Being a social animal, a kangaroo will rarely be found alone. Most commonly active as the sun rises or just as it sets. This is when they can be found grazing or socializing. Being able to travel at speeds up to 65 km/h and having the longest jump of all terrestrial animals, 13.50 m, this makes them one of the fastest animals in Australia. They can sustain such speeds thanks to their extremely agile tail, which they use for balance while running - or as a third leg when walking."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p style={{marginBottom:'20px'}}>
              The <strong>Eastern Gray Kangaroo</strong> is a (<span style={styles.link}>Class 4</span>) macropod that can be hunted on <span style={styles.link}>Emerald Coast</span>. It is currently the only huntable marsupial in game.
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
                        {/* Combined Male/Female Row */}
                        <tr>
                            <td style={{...styles.td, color: '#3498db', fontStyle: 'italic', fontWeight: 'bold'}}>
                                Male<span style={{color: '#dbe4eb'}}>/</span><span style={{color: '#d63384'}}>Female</span>
                            </td>
                            <td style={styles.td}>
                                Grey Variation 1 (24.90%)<br/>
                                Gray Variation 2 (24.90%)<br/>
                                Gray Brown (24.90%)<br/>
                                Brown Variation 1 (12.50%)<br/>
                                Brown Variation 2 (12.50%)
                            </td>
                            <td style={styles.td}>
                                X
                            </td>
                            <td style={styles.td}>
                                X
                            </td>
                            <td style={styles.td}>
                                Leucistic Variation 1 (0.07%)<br/>
                                Leucistic Variation 2 (0.07%)<br/>
                                Leucistic Variation 3 (0.07%)<br/>
                                Albino (0.05%)<br/>
                                Melanistic (0.05%)
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

export default EasternGrayKangaroo;