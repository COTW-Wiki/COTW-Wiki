import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import DrinkingZoneIcon from '../../../assets/DrinkingZoneIcon.webp';
import class3Icon from '../../../assets/Class3Icon.webp'; // Class 3 for Pronghorn
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import PronghornMain from '../../../assets/Pronghorn.webp';
import ShotSchemeImage from '../../../assets/Pronghorn_shot_scheme.webp';

// Fur Variant Images (Placeholders)
import Pronghorn_AlbinoMaleRightSide from '../../../assets/Pronghorn_AlbinoMaleRightSide.webp';
import Pronghorn_BrownMaleRightSide from '../../../assets/Pronghorn_BrownMaleRightSide.webp';
import Pronghorn_DarkMaleRightSide from '../../../assets/Pronghorn_DarkMaleRightSide.webp';
import Pronghorn_LeucisticMaleRightSide from '../../../assets/Pronghorn_LeucisticMaleRightSide.webp';
import Pronghorn_MelanisticMaleRightSide from '../../../assets/Pronghorn_MelanisticMaleRightSide.webp';
import Pronghorn_PiebaldVariation1MaleRightSide from '../../../assets/Pronghorn_PiebaldVariation1MaleRightSide.webp';
import Pronghorn_PiebaldVariation2MaleRightSide from '../../../assets/Pronghorn_PiebaldVariation2MaleRightSide.webp';
import Pronghorn_PiebaldVariation2MaleLeftSide from '../../../assets/Pronghorn_PiebaldVariation2MaleLeftSide.webp';
import Pronghorn_TanMaleRightSide from '../../../assets/Pronghorn_TanMaleRightSide.webp';

import Pronghorn_AlbinoFemaleRightSide from '../../../assets/Pronghorn_AlbinoFemaleRightSide.webp';
import Pronghorn_BrownFemaleRightSide from '../../../assets/Pronghorn_BrownFemaleRightSide.webp';
import Pronghorn_DarkFemaleRightSide from '../../../assets/Pronghorn_DarkFemaleRightSide.webp';
import Pronghorn_LeucisticFemaleRightSide from '../../../assets/Pronghorn_LeucisticFemaleRightSide.webp';
import Pronghorn_MelanisticFemaleRightSide from '../../../assets/Pronghorn_MelanisticFemaleRightSide.webp';
import Pronghorn_PiebaldVariation1FemaleRightSide from '../../../assets/Pronghorn_PiebaldVariation1FemaleRightSide.webp';
import Pronghorn_PiebaldVariation1FemaleLeftSide from '../../../assets/Pronghorn_PiebaldVariation1FemaleLeftSide.webp';
import Pronghorn_TanFemaleRightSide from '../../../assets/Pronghorn_TanFemaleRightSide.webp';


const Pronghorn = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  const needZonesData = [
    {
      name: "Askiy Ridge",
      schedule: [
        { time: "00:00 - 03:00", type: "Resting", icon: RestingZoneIcon },
        { time: "03:00 - 06:00", type: "Resting", icon: RestingZoneIcon },
        { time: "06:00 - 09:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "09:00 - 12:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "12:00 - 15:00", type: "Resting", icon: RestingZoneIcon },
        { time: "15:00 - 18:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "18:00 - 21:00", type: "Drinking", icon: DrinkingZoneIcon },
        { time: "21:00 - 00:00", type: "Feeding", icon: FeedingZoneIcon },
      ]
    }
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Curious, alert and agile" },
    { label: "Habitat", value: "Dry plains" },
    { label: "Senses", value: "Good vision and average smell and hearing" },
    { label: "Social", value: "Mixed herds in winter, same-sex groups during mating season" },
    { label: "Active", value: "Sporadic activity throughout day and night" },
    { label: "Recommended Equipment", value: "Class 3 Ammo" },
    { label: "Species", value: "Antilocapra americana", italic: true, isLink: true },
    { label: "Difficulty", value: "Average" },
  ];

  // Fur Gallery Data - split male / female
  const maleGallery = [
    { name: "Albino", src: Pronghorn_AlbinoMaleRightSide },
    { name: "Brown", src: Pronghorn_BrownMaleRightSide },
    { name: "Dark", src: Pronghorn_DarkMaleRightSide },
    { name: "Leucistic", src: Pronghorn_LeucisticMaleRightSide },
    { name: "Melanistic", src: Pronghorn_MelanisticMaleRightSide },
    { name: "Piebald Variation 1 (Right)", src: Pronghorn_PiebaldVariation1MaleRightSide },
    { name: "Piebald Variation 2 (Right)", src: Pronghorn_PiebaldVariation2MaleRightSide },
    { name: "Piebald Variation 2 (Left)", src: Pronghorn_PiebaldVariation2MaleLeftSide },
    { name: "Tan", src: Pronghorn_TanMaleRightSide },
  ];

  const femaleGallery = [
    { name: "Albino", src: Pronghorn_AlbinoFemaleRightSide },
    { name: "Brown", src: Pronghorn_BrownFemaleRightSide },
    { name: "Dark", src: Pronghorn_DarkFemaleRightSide },
    { name: "Leucistic", src: Pronghorn_LeucisticFemaleRightSide },
    { name: "Melanistic", src: Pronghorn_MelanisticFemaleRightSide },
    { name: "Piebald Variation 1 (Right)", src: Pronghorn_PiebaldVariation1FemaleRightSide },
    { name: "Piebald Variation 1 (Left)", src: Pronghorn_PiebaldVariation1FemaleLeftSide },
    { name: "Tan", src: Pronghorn_TanFemaleRightSide },
  ];

  // Trivia Data
  const triviaData = [
    "The Pronghorn's blazing speed is an example of an evolutionary anachronism; a phenomenon where animals keep useful traits despite not needing them anymore. It is believed that Pronghorns developed this trait to run away from now extinct predators such as the American Cheetah (Miracinonyx)."
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

  // Smooth scroll helper for TOC links
  const scrollToId = (id) => (e) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    window.history.replaceState(null, '', `#${id}`);
  };

  return (
    <div style={styles.container}>
      <div style={styles.innerWrapper}>
        
        {/* PAGE HEADER */}
        <div style={styles.mainHeader}>
          <span>Pronghorn</span>
        </div>

        <div style={styles.layout}>
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside style={styles.sidebarColumn}>
            <div style={styles.sidebarHeader}>Pronghorn</div>
            <div style={styles.sidebarImage}>
              <img src={PronghornMain} alt="Pronghorn" style={{width:'100%', height: '100%', objectFit: 'cover'}} />
            </div>
            
            <div style={styles.sidebarHeader}>General Information</div>
            
            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Class</span>
              <span><img src={class3Icon} alt="Class 3" style={{width:'24px', height:'24px', verticalAlign: 'middle', marginRight: '6px'}}/>3</span>
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
                  <span>36.65</span>
                </div>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.gold}}>☗ Gold</span>
                  <span>77.42</span>
                </div>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.diamond}}>☗ Diamond</span>
                  <span>108</span>
                </div>
              </div>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Weight</span>
              35kg — 65kg<br/>
              <span style={{color: '#88a0b8', fontSize: '0.85rem'}}>77lbs — 143lbs</span>
            </div>

            <div style={styles.sidebarSection}>
               <span style={styles.sidebarLabel}>Fur</span>
               <span style={{fontSize:'0.85rem'}}>
                 Albino, Brown, Dark, Leucistic, Melanistic, Piebald, Tan
               </span>
            </div>

            <div style={styles.sidebarHeader}>Locations</div>
            <div style={styles.sidebarSection}>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Silver Ridge Peaks</span></div>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Rancho del Arroyo</span></div>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Askiy Ridge Hunting Preserve</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main style={styles.mainColumn}>

            {/* Quote Block */}
            <div style={styles.quoteBox}>
              "The pronghorn is a species endemic to the Western plains of North America. Often colloquially referred to as "American antelope, they are not closely related to the true antelopes inhabiting Africa. Pronghorns are well-adapted to the open plains, they inhabit. They rely on their strong senses and great speed to spot and escape threats. Adult pronghorns can sprint as fast as 90 km/h (55 mph), making it the second fastest land animal after the African cheetah. Another particularity of the pronghorn is that they are the only animal to shed the keratin sheath of their horns and regrow it every year. Adults can measure up to 1.00 m tall at the shoulder. Males weigh up to 65.00 kg, while females reach 50.00 kg."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p style={{marginBottom:'20px'}}>
              The <strong>Pronghorn</strong> is a <span style={styles.link}>class 3</span> animal that can be found on <span style={styles.link}>Silver Ridge Peaks</span>. It was retroactively added to <span style={styles.link}>Rancho del Arroyo</span> with the release of the Granite Update in December 2022. It is currently the fastest land animal in game.
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
                <li><a href="#features" style={styles.link} onClick={scrollToId('features')}>Features</a></li>
                <li><a href="#need-zone-times" style={styles.link} onClick={scrollToId('need-zone-times')}>Need Zone Times</a></li>
                <li><a href="#shot-scheme" style={styles.link} onClick={scrollToId('shot-scheme')}>Shot scheme</a></li>
                <li><a href="#tips" style={styles.link} onClick={scrollToId('tips')}>Tips</a></li>
                <li>
                  <a href="#fur-variants" style={styles.link} onClick={scrollToId('fur-variants')}>Fur Variants</a>
                  <ol style={{marginTop:'6px', marginLeft: '14px', paddingLeft: '6px', listStyle: 'none'}}>
                    <li><a href="#male-variants" style={styles.link} onClick={scrollToId('male-variants')}>5.1 Male</a></li>
                    <li><a href="#female-variants" style={styles.link} onClick={scrollToId('female-variants')}>5.2 Female</a></li>
                  </ol>
                </li>
                <li><a href="#fur-variant-rarity" style={styles.link} onClick={scrollToId('fur-variant-rarity')}>Fur Variant Rarity</a></li>
                <li><a href="#trivia" style={styles.link} onClick={scrollToId('trivia')}>Trivia</a></li>
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
            <h2 id="need-zone-times" style={styles.h2}>Need Zone Times</h2>
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

            {/* TIPS */}
            <h2 id="tips" style={styles.h2}>Tips</h2>
            <p style={{marginBottom: '20px'}}>
                Found in the lower areas of the reserve, these stunning animals are sure to provide some great hunting opportunities!
            </p>

            {/* FUR VARIANTS (Gallery) */}
            <h2 id="fur-variants" style={styles.h2}>Fur Variants</h2>
            <h3 id="male-variants" style={{color: '#9fd3ff', marginTop: '10px'}}>Male</h3>
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

            <h3 id="female-variants" style={{color: '#9fd3ff', marginTop: '14px'}}>Female</h3>
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
            <h2 id="fur-variant-rarity" style={styles.h2}>Fur Variant Rarity</h2>
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
                                Tan (37.30%)<br/>
                                Brown (37.30%)<br/>
                                Dark (25.00%)
                            </td>
                            <td style={styles.td}>X</td>
                            <td style={styles.td}>
                                Piebald Variation 1 (0.20%)<br/>
                                Piebald Variation 2 (0.10%)
                            </td>
                            <td style={styles.td}>
                                Albino (0.03%)<br/>
                                Leucistic (0.03%)<br/>
                                Melanistic (0.03%)
                            </td>
                        </tr>
                        <tr>
                            <td style={{...styles.td, color: '#d63384', fontStyle: 'italic', fontWeight: 'bold'}}>
                                Female
                            </td>
                            <td style={styles.td}>
                                Tan (37.34%)<br/>
                                Brown (37.34%)<br/>
                                Dark (25.03%)
                            </td>
                            <td style={styles.td}>X</td>
                            <td style={styles.td}>
                                Piebald (0.10%)
                            </td>
                            <td style={styles.td}>
                                Albino (0.03%)<br/>
                                Leucistic (0.03%)<br/>
                                Melanistic (0.03%)
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

export default Pronghorn;