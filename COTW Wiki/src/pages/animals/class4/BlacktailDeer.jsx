import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import DrinkingZoneIcon from '../../../assets/DrinkingZoneIcon.webp';
import class4Icon from '../../../assets/Class4Icon.webp'; // Class 4 for Blacktail Deer
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import BlacktailDeerMain from '../../../assets/BlacktailDeer.webp';
import ShotSchemeImage from '../../../assets/Blacktail_deer_shot_scheme.webp';

// Fur Variant Images (Placeholders)
import BlacktailDeer_AlbinoMale from '../../../assets/BlacktailDeer_AlbinoMale.webp';
import BlacktailDeer_DarkGreyMale from '../../../assets/BlacktailDeer_DarkGreyMale.webp';
import BlacktailDeer_GreyMale from '../../../assets/BlacktailDeer_GreyMale.webp';
import BlacktailDeer_GreyBrownMale from '../../../assets/BlacktailDeer_GreyBrownMale.webp';
import BlacktailDeer_MelanisticMale from '../../../assets/BlacktailDeer_MelanisticMale.webp';
import BlacktailDeer_PiebaldMale from '../../../assets/BlacktailDeer_PiebaldMale.webp';

import BlacktailDeer_TanFemale from '../../../assets/BlacktailDeer_TanFemale.webp';
import BlacktailDeer_AlbinoFemale from '../../../assets/BlacktailDeer_AlbinoFemale.webp';
import BlacktailDeer_GreyFemale from '../../../assets/BlacktailDeer_GreyFemale.webp';
import BlacktailDeer_GreyBrownFemale from '../../../assets/BlacktailDeer_GreyBrownFemale.webp';
import BlacktailDeer_MelanisticFemale from '../../../assets/BlacktailDeer_MelanisticFemale.webp';
import BlacktailDeer_PiebaldFemale from '../../../assets/BlacktailDeer_PiebaldFemale.webp';



const BlacktailDeer = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  const needZonesData = [
    {
      name: "Layton Lake District",
      schedule: [
        { time: "00:00 - 04:30", type: "Resting", icon: RestingZoneIcon },
        { time: "04:00 - 08:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "08:00 - 12:30", type: "Resting", icon: RestingZoneIcon },
        { time: "12:00 - 16:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "16:00 - 20:30", type: "Drinking", icon: DrinkingZoneIcon },
        { time: "20:00 - 00:30", type: "Resting", icon: RestingZoneIcon },
      ]
    }
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Docile and somewhat skittish" },
    { label: "Habitat", value: "Forests with a lot of underbrush" },
    { label: "Senses", value: "Excellent sense of smell and hearing" },
    { label: "Social", value: "Usually solitary, can also be found in small groups" },
    { label: "Active", value: "During dawn, dusk and night" },
    { label: "Recommended Equipment", value: "class 4 Ammo, Deer \"Bleat\" Caller, Deer \"Grunt\" Caller, Blacktail Deer Scent" },
    { label: "Species", value: "Odocoileus hemionus", italic: true, isLink: true },
    { label: "Difficulty", value: "Average" },
  ];

  // Fur Gallery Data (separated by sex)
  const maleGallery = [
    { name: "Albino", src: BlacktailDeer_AlbinoMale },
    { name: "Dark Grey", src: BlacktailDeer_DarkGreyMale },
    { name: "Grey", src: BlacktailDeer_GreyMale },
    { name: "Grey Brown", src: BlacktailDeer_GreyBrownMale },
    { name: "Melanistic", src: BlacktailDeer_MelanisticMale },
    { name: "Piebald", src: BlacktailDeer_PiebaldMale },
  ];

  const femaleGallery = [
    { name: "Tan", src: BlacktailDeer_TanFemale },
    { name: "Albino", src: BlacktailDeer_AlbinoFemale },
    { name: "Grey", src: BlacktailDeer_GreyFemale },
    { name: "Grey Brown", src: BlacktailDeer_GreyBrownFemale },
    { name: "Melanistic", src: BlacktailDeer_MelanisticFemale },
    { name: "Piebald", src: BlacktailDeer_PiebaldFemale },
  ];

  // Trivia Data
  const triviaData = [
    "It was part of the original cast of animals huntable at launch.",
    "The Blacktail Deer was one of the first animals, along with the Whitetail Deer, to get TruRACS.",
    "Because of their rarity, and overall elusiveness, the Blacktail Deer is known by many hunters as the Ghost of The Pacific."
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

  return (
    <div style={styles.container}>
      <div style={styles.innerWrapper}>
        
        {/* PAGE HEADER */}
        <div style={styles.mainHeader}>
          <span>Blacktail Deer</span>
        </div>

        <div style={styles.layout}>
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside style={styles.sidebarColumn}>
            <div style={styles.sidebarHeader}>Blacktail Deer</div>
            <div style={styles.sidebarImage}>
              <img src={BlacktailDeerMain} alt="Blacktail Deer" style={{width:'100%', height: '100%', objectFit: 'cover'}} />
            </div>
            
            <div style={styles.sidebarHeader}>General Information</div>
            
            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Class</span>
              <span><img src={class4Icon} alt="Class 4" style={{width:'24px', height:'24px', verticalAlign: 'middle', marginRight: '6px'}}/>4</span>
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
                  <span>76.90</span>
                </div>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.gold}}>☗ Gold</span>
                  <span>134.40</span>
                </div>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.diamond}}>☗ Diamond</span>
                  <span>177.50</span>
                </div>
              </div>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Weight</span>
              40kg — 95kg<br/>
              <span style={{color: '#88a0b8', fontSize: '0.85rem'}}>88lbs — 209lbs</span>
            </div>

            <div style={styles.sidebarSection}>
               <span style={styles.sidebarLabel}>Fur</span>
               <span style={{fontSize:'0.85rem'}}>
                 Albino, Dark Grey, Grey, Grey-Brown, Melanistic, Piebald, Tan
               </span>
            </div>

            <div style={styles.sidebarHeader}>Locations</div>
            <div style={styles.sidebarSection}>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Layton Lake District</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main style={styles.mainColumn}>

            {/* Quote Block */}
            <div style={styles.quoteBox}>
              "The blacktail deer is generally considered a subspecies of the mule deer and native to the western part of North American continent although new science suggests it could be its own species and not a subspecies. The blacktail thrives around the edges of forests that are typically rich with foliage and grass which they feed on. They tend to avoid open areas that lack hiding spots, especially during harsh weather. The blacktail is a medium-sized deer, comparable to the whitetail deer, but blacktail bucks' antlers take different patterns that are more similar to the mule deer's. The blacktail's antlers grow from a spike into a distinctive double-fork shape."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p style={{marginBottom:'20px'}}>
              The <strong>Blacktail Deer</strong> is a medium-sized deer species. It can be hunted in the <span style={styles.link}>Layton Lake District</span>.
            </p>

            {/* Table of Contents (numbered; Fur Variants has sub-topics) */}
            <div style={{
                border: '1px solid #3a5a75',
                backgroundColor: '#0f2e48',
                display: 'inline-block',
                padding: '10px 20px',
                borderRadius: '4px',
                minWidth: '260px',
                marginBottom: '30px'
            }}>
              <div style={{fontWeight:'bold', borderBottom: '1px solid #3a5a75', marginBottom: '5px'}}>
                🔢 Contents <span style={{float:'right', color: '#6fb2e6', fontSize: '0.8rem', cursor: 'pointer'}}>[hide]</span>
              </div>
              <ol style={{margin:'0', paddingLeft: '20px', color: '#6fb2e6'}}>
                <li><a href="#features" style={styles.link}>Features</a></li>
                <li><a href="#need-zones" style={styles.link}>Need Zone Times</a></li>
                <li><a href="#shot-scheme" style={styles.link}>Shot scheme</a></li>
                <li>
                  <a href="#fur-variants" style={styles.link}>Fur Variants</a>
                  <ol style={{margin:'6px 0 0 14px', padding:'0', color:'#9ed3f5', listStyle: 'none'}}>
                    <li><a href="#fur-male" style={styles.link}>4.1 Male</a></li>
                    <li><a href="#fur-female" style={styles.link}>4.2 Female</a></li>
                  </ol>
                </li>
                <li><a href="#variant-rarity" style={styles.link}>Fur Variant Rarity</a></li>
                <li><a href="#trivia" style={styles.link}>Trivia</a></li>
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
            <div style={{display:'inline-block'}}>
                <table style={{...styles.table, width: '300px'}}>
                    <thead>
                        <tr><th colSpan="2" style={{...styles.th, textAlign: 'center'}}>Layton Lake District</th></tr>
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
            <h2 id="fur-variants" style={styles.h2}>Fur Variants</h2>

            <h3 id="fur-male" style={{color: '#6fb2e6', marginTop: '12px'}}>Male</h3>
            <div style={styles.galleryGrid}>
              {maleGallery.map((item, i) => (
                <div key={`m-${i}`} style={styles.galleryItem}>
                  <div style={styles.galleryImgPlaceholder}>
                    <img src={item.src} alt={item.name} style={{maxWidth: '100%', maxHeight: '100%', objectFit: 'contain'}} />
                  </div>
                  <span style={styles.galleryLabel}>{item.name}</span>
                </div>
              ))}
            </div>

            <h3 id="fur-female" style={{color: '#6fb2e6', marginTop: '18px'}}>Female</h3>
            <div style={styles.galleryGrid}>
              {femaleGallery.map((item, i) => (
                <div key={`f-${i}`} style={styles.galleryItem}>
                  <div style={styles.galleryImgPlaceholder}>
                    <img src={item.src} alt={item.name} style={{maxWidth: '100%', maxHeight: '100%', objectFit: 'contain'}} />
                  </div>
                  <span style={styles.galleryLabel}>{item.name}</span>
                </div>
              ))}
            </div>

            {/* FUR VARIANT RARITY TABLE */}
            <h2 id="variant-rarity" style={styles.h2}>Fur Variant Rarity</h2>
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
                        <tr>
                            <td style={{...styles.td, color: '#3498db', fontStyle: 'italic', fontWeight: 'bold'}}>
                                Male
                            </td>
                            <td style={styles.td}>
                                Grey (33.23%)<br/>
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
                        <tr>
                            <td style={{...styles.td, color: '#d63384', fontStyle: 'italic', fontWeight: 'bold'}}>
                                Female
                            </td>
                            <td style={styles.td}>
                                Grey (33.23%)<br/>
                                Grey Brown (33.23%)<br/>
                                Tan (33.23%)
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
            
          </main>
        </div>
      </div>
    </div>
  );
};

export default BlacktailDeer;