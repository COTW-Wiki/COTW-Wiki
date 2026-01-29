import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import DrinkingZoneIcon from '../../../assets/DrinkingZoneIcon.webp';
import class2Icon from '../../../assets/Class2Icon.webp'; // Class 2 for Coyote
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import CoyoteMain from '../../../assets/Coyote.webp';
import ShotSchemeImage from '../../../assets/Coyote_shot_scheme.webp';

// Fur Variant Images (Placeholders)
import Coyote_AlbinoMale from '../../../assets/Coyote_AlbinoMale.webp';
import Coyote_DarkGreyMale from '../../../assets/Coyote_DarkGreyMale.webp';
import Coyote_GreyBrownMale from '../../../assets/Coyote_GreyBrownMale.webp';
import Coyote_MelanisticMale from '../../../assets/Coyote_MelanisticMale.webp';
import Coyote_OrangeMale from '../../../assets/Coyote_OrangeMale.webp';
import Coyote_PiebaldMale from '../../../assets/Coyote_PiebaldMale.webp';
import Coyote_AlbinoFemale from '../../../assets/Coyote_AlbinoFemale.webp';
import Coyote_GreyBrownFemale from '../../../assets/Coyote_GreyBrownFemale.webp';
import Coyote_LightGreyFemale from '../../../assets/Coyote_LightGreyFemale.webp';
import Coyote_MelanisticFemale from '../../../assets/Coyote_MelanisticFemale.webp';
import Coyote_OrangeFemale from '../../../assets/Coyote_OrangeFemale.webp';
import Coyote_PiebaldFemale from '../../../assets/Coyote_PiebaldFemale.webp';


const Coyote = () => {

  // Smooth scroll helper for in-page TOC navigation
  const scrollToId = (e, id) => {
    if (e && e.preventDefault) e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      try { history.replaceState(null, '', `#${id}`); } catch (err) { /* ignore */ }
    }
  };

  // Lightbox / modal state for fur variants
  const [selectedVariant, setSelectedVariant] = React.useState(null);

  const openVariant = (item) => setSelectedVariant(item);
  const closeVariant = () => setSelectedVariant(null);

  React.useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') closeVariant(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  // --- DATA SOURCES ---

  // Need Zone Times
  const needZonesData = [
    {
      name: "Layton Lake District",
      schedule: [
        { time: "00:00 - 04:30", type: "Drinking", icon: DrinkingZoneIcon },
        { time: "04:00 - 07:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "07:00 - 10:30", type: "Resting", icon: RestingZoneIcon },
        { time: "10:00 - 14:30", type: "Resting", icon: RestingZoneIcon },
        { time: "14:00 - 17:30", type: "Resting", icon: RestingZoneIcon },
        { time: "17:00 - 20:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "20:00 - 00:30", type: "Feeding", icon: FeedingZoneIcon },
      ]
    },
    {
      name: "Rancho del Arroyo",
      schedule: [
        { time: "00:00 - 04:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "04:00 - 07:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "07:00 - 10:30", type: "Resting", icon: RestingZoneIcon },
        { time: "10:00 - 14:30", type: "Resting", icon: RestingZoneIcon },
        { time: "14:00 - 17:30", type: "Resting", icon: RestingZoneIcon },
        { time: "17:00 - 20:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "20:00 - 00:30", type: "Drinking", icon: DrinkingZoneIcon },
      ]
    }
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Skittish" },
    { label: "Habitat", value: "Typically live inside forests" },
    { label: "Senses", value: "Excellent vision and a very good sense of smell" },
    { label: "Social", value: "Mostly solitary animals. Sometimes found in smaller groups." },
    { label: "Active", value: "During night" },
    { label: "Recommended Equipment", value: "Class 2 Ammo, Predator \"Jackrabbit\" Caller" },
    { label: "Species", value: "Canis latrans", italic: true, isLink: true },
    { label: "Difficulty", value: "Easy" },
  ];

  // Fur Gallery Data
  const maleGallery = [
    { name: "Albino", src: Coyote_AlbinoMale },
    { name: "Dark Grey", src: Coyote_DarkGreyMale },
    { name: "Grey Brown", src: Coyote_GreyBrownMale },
    { name: "Melanistic", src: Coyote_MelanisticMale },
    { name: "Orange", src: Coyote_OrangeMale },
    { name: "Piebald", src: Coyote_PiebaldMale },
  ];

  const femaleGallery = [
    { name: "Albino", src: Coyote_AlbinoFemale },
    { name: "Grey Brown", src: Coyote_GreyBrownFemale },
    { name: "Light Grey", src: Coyote_LightGreyFemale },
    { name: "Melanistic", src: Coyote_MelanisticFemale },
    { name: "Orange", src: Coyote_OrangeFemale },
    { name: "Piebald", src: Coyote_PiebaldFemale },
  ];

  // Trivia Data
  const triviaData = [
    "The Coyote gets its name from the Aztec word for the beast Coyotl.",
    "Despite its designation as a class 2 animal, real life coyotes are large enough to take down a fully grown deer."
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
    modalOverlay: {
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(3,10,18,0.75)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999
    },
    modalContent: {
      maxWidth: '90%', maxHeight: '90%', padding: '12px', background: '#071426', borderRadius: '6px', border: '1px solid #23435b'
    },
    modalImg: { width: '100%', height: 'auto', maxHeight: '80vh', objectFit: 'contain', display: 'block' },
    modalClose: { position: 'absolute', right: '18px', top: '12px', background: 'transparent', border: 'none', color: '#fff', fontSize: '28px', cursor: 'pointer' },
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

  return (
    <div style={styles.container}>
      <div style={styles.innerWrapper}>
        
        {/* PAGE HEADER */}
        <div style={styles.mainHeader}>
          <span>Coyote</span>
        </div>

        <div style={styles.layout}>
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside style={styles.sidebarColumn}>
            <div style={styles.sidebarHeader}>Coyote</div>
            <div style={styles.sidebarImage}>
              <img src={CoyoteMain} alt="Coyote" style={{width:'100%', height: '100%', objectFit: 'cover'}} />
            </div>
            
            <div style={styles.sidebarHeader}>General Information</div>
            
            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Class</span>
              <span><img src={class2Icon} alt="Class 2" style={{width:'24px', height:'24px', verticalAlign: 'middle', marginRight: '6px'}}/>2</span>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Difficulty</span>
              <span>1: Trivial — 9: Legendary</span>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Trophy Type</span>
              <span>Weight</span>
              <div style={styles.trophyGrid}>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.silver}}>◆ Silver</span>
                  <span>38.4</span>
                </div>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.gold}}>☗ Gold</span>
                  <span>48.9</span>
                </div>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.diamond}}>☗ Diamond</span>
                  <span>56.8</span>
                </div>
              </div>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Weight</span>
              ? — 27kg<br/>
              <span style={{color: '#88a0b8', fontSize: '0.85rem'}}>? — 60lbs</span>
            </div>

            <div style={styles.sidebarSection}>
               <span style={styles.sidebarLabel}>Fur</span>
               <span style={{fontSize:'0.85rem'}}>
                  Albino, Dark-Grey, Grey-Brown, Light Grey, Melanistic, Orange, Piebald
               </span>
            </div>

            <div style={styles.sidebarHeader}>Locations</div>
            <div style={styles.sidebarSection}>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Layton Lake District</span></div>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Rancho del Arroyo</span></div>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>New England Mountains</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main style={styles.mainColumn}>

            {/* Quote Block */}
            <div style={styles.quoteBox}>
              "The coyote is native to Central and North America. It is somewhat smaller than its closest relative, the grey wolf, but is still highly versatile predator that can easily adapt to environments shaped by humans. Coyotes are characterized by their predominantly light brown or grey fur and somewhat fluffy tails. Males weigh on average 8 to 21 kg (18 to 44lb), while females average 7 to 18 kg (15 to 40 lb). Coyotes have few natural predators besides humans, larger wolves, and cougars. They are generally solitary animals, but can also live in small packs. Their distinctive call is a howling sound."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p style={{marginBottom:'20px'}}>
              The <strong>Coyote</strong> is a small sized <span style={styles.link}>class 2</span> canid that can be hunted on <span style={styles.link}>Layton Lake District</span>, <span style={styles.link}>Rancho del Arroyo</span> and <span style={styles.link}>New England Mountains</span>. It is also one of the first huntable animals in game, as it shipped with the game all the way back in 2016.
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
                <li>
                  <a href="#fur-variants" onClick={(e)=>scrollToId(e,'fur-variants')} style={styles.link}>Fur variants</a>
                  <ol style={{margin:'6px 0 0 12px', paddingLeft: '0', listStyleType: 'none', color: '#9fd3ff'}}>
                    <li><a href="#fur-male" onClick={(e)=>scrollToId(e,'fur-male')} style={{color: '#9fd3ff', textDecoration: 'none'}}>4.1 Male</a></li>
                    <li><a href="#fur-female" onClick={(e)=>scrollToId(e,'fur-female')} style={{color: '#9fd3ff', textDecoration: 'none'}}>4.2 Female</a></li>
                  </ol>
                </li>
                <li><a href="#fur-rarity" onClick={(e)=>scrollToId(e,'fur-rarity')} style={styles.link}>Fur Variant Rarity</a></li>
                <li><a href="#trivia" onClick={(e)=>scrollToId(e,'trivia')} style={styles.link}>Trivia</a></li>
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
            <h2 id="need-zones" style={styles.h2}>Need Zone Times</h2>
            <div style={{display:'flex', gap:'20px', flexWrap:'wrap'}}>
                {/* Layton Lake District */}
                <div style={{flex: '1', minWidth: '300px'}}>
                    <table style={{...styles.table}}>
                        <thead>
                            <tr><th colSpan="2" style={{...styles.th, textAlign: 'center'}}>Layton Lake District</th></tr>
                            <tr>
                                <th style={{...styles.th, backgroundColor: '#0f2e48'}}>Activity</th>
                                <th style={{...styles.th, backgroundColor: '#0f2e48'}}>Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {needZonesData[0].schedule.map((zone, i) => (
                            <tr key={i}>
                                <td style={styles.td}>
                                    <div style={{display:'flex', alignItems:'center'}}>
                                        <img src={zone.icon} alt={zone.type} style={{width:'20px', height: '20px', verticalAlign: 'middle', marginRight: '6px'}}/> 
                                        {zone.type}
                                    </div>
                                </td>
                                <td style={styles.td}>{zone.time}</td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                 {/* Rancho del Arroyo */}
                 <div style={{flex: '1', minWidth: '300px'}}>
                    <table style={{...styles.table}}>
                        <thead>
                            <tr><th colSpan="2" style={{...styles.th, textAlign: 'center'}}>Rancho del Arroyo</th></tr>
                            <tr>
                                <th style={{...styles.th, backgroundColor: '#0f2e48'}}>Activity</th>
                                <th style={{...styles.th, backgroundColor: '#0f2e48'}}>Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {needZonesData[1].schedule.map((zone, i) => (
                            <tr key={i}>
                                <td style={styles.td}>
                                    <div style={{display:'flex', alignItems:'center'}}>
                                        <img src={zone.icon} alt={zone.type} style={{width:'20px', height: '20px', verticalAlign: 'middle', marginRight: '6px'}}/> 
                                        {zone.type}
                                    </div>
                                </td>
                                <td style={styles.td}>{zone.time}</td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
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
            <h2 id="fur-variants" style={styles.h2}>Fur variants</h2>

            <div style={{marginBottom: '16px'}}>
              <h3 id="fur-male" style={{...styles.h2, fontSize: '1.15rem', marginTop: '8px'}}>Male</h3>
              <div style={styles.galleryGrid}>
                {maleGallery.map((item, i) => (
                  <div key={`m-${i}`} style={{...styles.galleryItem, cursor: 'pointer'}} onClick={() => openVariant(item)}>
                    <div style={styles.galleryImgPlaceholder}>
                      <img src={item.src} alt={item.name} style={{width:'100%', height: '100%', objectFit: 'contain'}} />
                    </div>
                    <span style={styles.galleryLabel}>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 id="fur-female" style={{...styles.h2, fontSize: '1.15rem', marginTop: '12px'}}>Female</h3>
              <div style={styles.galleryGrid}>
                {femaleGallery.map((item, i) => (
                  <div key={`f-${i}`} style={{...styles.galleryItem, cursor: 'pointer'}} onClick={() => openVariant(item)}>
                    <div style={styles.galleryImgPlaceholder}>
                      <img src={item.src} alt={item.name} style={{width:'100%', height: '100%', objectFit: 'contain'}} />
                    </div>
                    <span style={styles.galleryLabel}>{item.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* FUR VARIANT RARITY TABLE */}
            <h2 id="fur-rarity" style={styles.h2}>Fur Variant Rarity</h2>
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
                         {/* Male Row */}
                         <tr>
                            <td style={{...styles.td, color: '#3498db', fontStyle: 'italic', fontWeight: 'bold'}}>
                                Male
                            </td>
                            <td style={styles.td}>
                                Orange (33.23%)<br/>
                                Grey Brown (33.23%)<br/>
                                Dark Grey (33.23%)
                            </td>
                            <td style={styles.td}>X</td>
                            <td style={styles.td}>
                                Piebald (0.20%)
                            </td>
                            <td style={styles.td}>
                                Albino (0.05%)<br/>
                                Melanistic (0.05%)
                            </td>
                        </tr>
                        {/* Female Row */}
                        <tr>
                            <td style={{...styles.td, color: '#d63384', fontStyle: 'italic', fontWeight: 'bold'}}>
                                Female
                            </td>
                            <td style={styles.td}>
                                Orange (33.23%)<br/>
                                Grey Brown (33.23%)<br/>
                                Light Grey (33.23%)
                            </td>
                            <td style={styles.td}>X</td>
                            <td style={styles.td}>
                                Piebald (0.20%)
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

            <div style={{marginTop: '40px'}}>
                <AnimalsTableMini />
            </div>
            {selectedVariant && (
              <div style={styles.modalOverlay} onClick={closeVariant}>
                <div style={styles.modalContent} onClick={(e)=>e.stopPropagation()}>
                  <button aria-label="Close" onClick={closeVariant} style={styles.modalClose}>×</button>
                  <img src={selectedVariant.src} alt={selectedVariant.name} style={styles.modalImg} />
                  <div style={{textAlign: 'center', marginTop: '8px', color: '#dbe4eb'}}>{selectedVariant.name}</div>
                </div>
              </div>
            )}
            
          </main>
        </div>
      </div>
    </div>
  );
};

export default Coyote;