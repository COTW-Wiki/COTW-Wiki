import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import DrinkingZoneIcon from '../../../assets/DrinkingZoneIcon.webp';
import class4Icon from '../../../assets/Class4Icon.webp'; // Class 4 for Tahr
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import TahrMain from '../../../assets/Himalayan_Tahr.webp';
import ShotSchemeImg from '../../../assets/Himalayan_Tahr_shot_scheme.webp';

// Fur Variant Images (Placeholders based on screenshots)
// Male
import Tahr_AlbinoMale from '../../../assets/Tahr_AlbinoMale.webp';
import Tahr_BlackMale from '../../../assets/Tahr_BlackMale.webp';
import Tahr_DarkBrownMale from '../../../assets/Tahr_DarkBrownMale.webp';
import Tahr_DarkRedMale from '../../../assets/Tahr_DarkRedMale.webp';
import Tahr_LightBrownMale from '../../../assets/Tahr_LightBrownMale.webp';
import Tahr_RedMale from '../../../assets/Tahr_RedMale.webp';
import Tahr_RedBrownMale from '../../../assets/Tahr_RedBrownMale.webp';
import Tahr_StrawMale from '../../../assets/Tahr_StrawMale.webp';
import Tahr_WhiteMale from '../../../assets/Tahr_WhiteMale.webp';

// Female
import Tahr_AlbinoFemale from '../../../assets/Tahr_AlbinoFemale.webp';
import Tahr_LightBrownFemale from '../../../assets/Tahr_LightBrownFemale.webp';
import Tahr_RedFemale from '../../../assets/Tahr_RedFemale.webp';
import Tahr_RedBrownFemale from '../../../assets/Tahr_RedBrownFemale.webp';
import Tahr_StrawFemale from '../../../assets/Tahr_StrawFemale.webp';
import Tahr_WhiteFemale from '../../../assets/Tahr_WhiteFemale.webp';

// Great One (Fabled)
import Tahr_FabledGoldLeftSide from '../../../assets/Tahr_FabledGoldLeftSide.webp';
import Tahr_FabledGrayLeftSide from '../../../assets/Tahr_FabledGrayLeftSide.webp';
import Tahr_FabledHalfLeftSide from '../../../assets/Tahr_FabledHalfLeftSide.webp';
import Tahr_FabledLatteLeftSide from '../../../assets/Tahr_FabledLatteLeftSide.webp';
import Tahr_FabledScarsLeftSide from '../../../assets/Tahr_FabledScarsLeftSide.webp';
import Tahr_FabledScarsRightSide from '../../../assets/Tahr_FabledScarsRightSide.webp';
import Tahr_FabledSkullLeftSide from '../../../assets/Tahr_FabledSkullLeftSide.webp';
import Tahr_FabledSnowLeftSide from '../../../assets/Tahr_FabledSnowLeftSide.webp';


const Tahr = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  const needZonesData = [
    {
      name: "Sundarpatan",
      schedule: [
        { time: "00:00 - 04:00", type: "Resting", icon: RestingZoneIcon },
        { time: "04:00 - 07:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "07:00 - 11:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "11:00 - 14:00", type: "Resting", icon: RestingZoneIcon },
        { time: "14:00 - 17:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "17:00 - 20:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "20:00 - 00:00", type: "Resting", icon: RestingZoneIcon },
      ]
    }
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Inquisitive but easily unnerved" },
    { label: "Habitat", value: "Alpine terrain, meadows, scrub forests" },
    { label: "Senses", value: "Excellent vision, very good hearing and smell" },
    { label: "Social", value: "Lives in large groups, males tend to be solitary or form bachelor groups" },
    { label: "Active", value: "Morning and late afternoon" },
    { label: "Recommended Equipment", value: "Class 4 Ammo" },
    { label: "Species", value: "Hemitragus jemlahicus", italic: true, isLink: true },
    { label: "Difficulty", value: "Average" },
  ];

  // Fur Gallery Data
  const maleGallery = [
    { name: "Albino", src: Tahr_AlbinoMale },
    { name: "Black", src: Tahr_BlackMale },
    { name: "Dark Brown", src: Tahr_DarkBrownMale },
    { name: "Dark Red", src: Tahr_DarkRedMale },
    { name: "Light Brown", src: Tahr_LightBrownMale },
    { name: "Red", src: Tahr_RedMale },
    { name: "Red Brown", src: Tahr_RedBrownMale },
    { name: "Straw", src: Tahr_StrawMale },
    { name: "White", src: Tahr_WhiteMale },
  ];

  const femaleGallery = [
    { name: "Albino", src: Tahr_AlbinoFemale },
    { name: "Light Brown", src: Tahr_LightBrownFemale },
    { name: "Red", src: Tahr_RedFemale },
    { name: "Red Brown", src: Tahr_RedBrownFemale },
    { name: "Straw", src: Tahr_StrawFemale },
    { name: "White", src: Tahr_WhiteFemale },
  ];

  const greatOneGallery = [
    { name: "Fabled Gold", src: Tahr_FabledGoldLeftSide },
    { name: "Fabled Gray", src: Tahr_FabledGrayLeftSide },
    { name: "Fabled Half", src: Tahr_FabledHalfLeftSide },
    { name: "Fabled Latte", src: Tahr_FabledLatteLeftSide },
    { name: "Fabled Scars (Left)", src: Tahr_FabledScarsLeftSide },
    { name: "Fabled Scars (Right)", src: Tahr_FabledScarsRightSide },
    { name: "Fabled Skull", src: Tahr_FabledSkullLeftSide },
    { name: "Fabled Snow", src: Tahr_FabledSnowLeftSide },
  ];

  // Trivia Data
  const triviaData = [];

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
    greatOne: { color: '#2ecc71', fontWeight: 'bold', display: 'block', marginTop: '5px', textAlign: 'center', fontSize: '0.9rem' },
    
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
  const scrollToId = (e, id) => {
    if (e && e.preventDefault) e.preventDefault();
    try {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        if (window && window.history && window.history.replaceState) {
          window.history.replaceState(null, '', `#${id}`);
        }
      }
    } catch (err) {
      // ignore
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.innerWrapper}>
        
        {/* PAGE HEADER */}
        <div style={styles.mainHeader}>
          <span>Tahr</span>
        </div>

        <div style={styles.layout}>
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside style={styles.sidebarColumn}>
            <div style={styles.sidebarHeader}>Tahr</div>
            <div style={styles.sidebarImage}>
              <img src={TahrMain} alt="Tahr" style={{width:'100%', height: '100%', objectFit: 'cover'}} />
            </div>
            
            <div style={styles.sidebarHeader}>General Information</div>
            
            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Class</span>
              {/* Cited from screenshot 200701 */}
              <span><img src={class4Icon} alt="Class 4" style={{width:'24px', height:'24px', verticalAlign: 'middle', marginRight: '6px'}}/>4</span>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Difficulty</span>
              {/* Cited from screenshot 200701 */}
              <span>1: Trivial — 5: Medium</span><br/>
              <span>10: Fabled</span>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Trophy Type</span>
              <span>Horns</span>
              <div style={styles.trophyGrid}>
                {/* Cited from screenshot 200701 */}
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.silver}}>◆ Silver</span>
                  <span>61.23</span>
                </div>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.gold}}>☗ Gold</span>
                  <span>84.46</span>
                </div>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.diamond}}>☗ Diamond</span>
                  <span>101.87</span>
                </div>
              </div>
              <div style={styles.greatOne}>
                 <span>❂ Great One</span>
              </div>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Weight</span>
              {/* Cited from screenshot 200701 */}
              0kg — 140kg<br/>
              <span style={{color: '#88a0b8', fontSize: '0.85rem'}}>0lbs — 309lbs</span><br/>
              <span style={{fontWeight:'bold'}}>180kg (Great One)</span><br/>
              <span style={{color: '#88a0b8', fontSize: '0.85rem'}}>397lbs (Great One)</span>
            </div>

            <div style={styles.sidebarSection}>
               <span style={styles.sidebarLabel}>Fur</span>
               {/* Cited from screenshot 200713 */}
               <span style={{fontSize:'0.85rem'}}>
                 Albino, Black, Dark Brown, Dark Red, Light Brown, Red, Red Brown, Straw, White
               </span>
               <span style={{display:'block', marginTop: '5px', fontWeight: 'bold', fontSize: '0.85rem'}}>Fabled Exclusive:</span>
               <span style={{fontSize: '0.85rem'}}>
                 Gold, Gray, Half, Latte, Scars, Skull, Snow
               </span>
            </div>

            <div style={styles.sidebarHeader}>Locations</div>
            <div style={styles.sidebarSection}>
               {/* Cited from screenshot 200713 */}
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Sundarpatan</span></div>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Te Awaroa National Park</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main style={styles.mainColumn}>

            {/* Quote Block */}
            <div style={styles.quoteBox}>
              "The majestic Himalayan tahr is a type of wild goat that belongs to the bovid family. This animal has successfully adapted to thrive in a chilly climate and rocky landscapes. It can be spotted on vegetated mountainsides at elevations ranging from 2,500 to 5,000 meters in regions such as Tibet, India, Nepal, and New Zealand (where it was introduced for sport in 1904). Tahrs are excellent climbers; their hooves are well-adapted for their mountain habitat. They move uphill early in the morning to find food on the alpine pastures where they eat the entire day, except for a short break during midday when they rest among rocks and vegetation."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p style={{marginBottom:'20px'}}>
              The <strong>Tahr</strong> is a <span style={styles.link}>class 4</span> Goat that was introduced with <span style={styles.link}>Sundarpatan</span> reserve and later added to <span style={styles.link}>Te Awaroa National Park</span>.
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
                 <li><a href="#fur-great-ones" onClick={(e)=>scrollToId(e,'fur-great-ones')} style={styles.link}>Fur Variants | Great One</a></li>
                <li><a href="#variant-rarity" onClick={(e)=>scrollToId(e,'variant-rarity')} style={styles.link}>Fur Variant Rarity</a></li>
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
                        <tr><th colSpan="2" style={{...styles.th, textAlign: 'center'}}>Sundarpatan</th></tr>
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

            {/* GREAT ONE FUR VARIANTS */}
            <h2 style={styles.h2} id="fur-great-ones">Fur Variants | Great One</h2>
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
                        {/* Male Row */}
                        <tr>
                            <td style={{...styles.td, color: '#3498db', fontStyle: 'italic', fontWeight: 'bold'}}>
                                Male
                            </td>
                            <td style={styles.td}>
                                Red Brown (74.45%)
                            </td>
                            <td style={styles.td}>
                                Light Brown (12.50%)<br/>
                                Straw (12.50%)
                            </td>
                            <td style={styles.td}>
                                Black (0.10%)<br/>
                                Dark Brown (0.10%)<br/>
                                Dark Red (0.10%)<br/>
                                Red (0.10%)<br/>
                                White (0.10%)
                            </td>
                            <td style={styles.td}>
                                Albino (0.05%)
                            </td>
                        </tr>
                        {/* Female Row */}
                        <tr>
                            <td style={{...styles.td, color: '#d63384', fontStyle: 'italic', fontWeight: 'bold'}}>
                                Female
                            </td>
                            <td style={styles.td}>
                                Red Brown (74.67%)
                            </td>
                            <td style={styles.td}>
                                Light Brown (12.54%)<br/>
                                Straw (12.54%)
                            </td>
                            <td style={styles.td}>
                                Red (0.10%)<br/>
                                White (0.10%)
                            </td>
                            <td style={styles.td}>
                                Albino (0.05%)
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div style={{marginTop: '40px'}}>
                <AnimalsTableMini />
            </div>
            
          </main>
        </div>
      </div>
    </div>
  );
};

export default Tahr;