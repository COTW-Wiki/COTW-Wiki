import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import DrinkingZoneIcon from '../../../assets/DrinkingZoneIcon.webp';
import class5Icon from '../../../assets/Class5Icon.webp'; 
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import DesertBighornMain from '../../../assets/Desert_Bighorn_Sheep.webp';
// Placeholder for Shot Scheme (Screenshot not provided in this batch)
//import ShotSchemeImg from '../../../assets/ShotScheme_Placeholder.webp';

// Fur Variant Images
// Male
import DesertBighornSheep_AlbinoMaleRightSide from '../../../assets/DesertBighornSheep_AlbinoMaleRightSide.webp';
import DesertBighornSheep_BrownMaleRightSide from '../../../assets/DesertBighornSheep_BrownMaleRightSide.webp';
import DesertBighornSheep_ErythristicMaleRightSide from '../../../assets/DesertBighornSheep_ErythristicMaleRightSide.webp';
import DesertBighornSheep_GreyMaleRightSide from '../../../assets/DesertBighornSheep_GreyMaleRightSide.webp';
import DesertBighornSheep_LeucisticMaleRightSide from '../../../assets/DesertBighornSheep_LeucisticMaleRightSide.webp';
import DesertBighornSheep_LightBrownMaleRightSide from '../../../assets/DesertBighornSheep_LightBrownMaleRightSide.webp';
import DesertBighornSheep_LightGreyMaleRightSide from '../../../assets/DesertBighornSheep_LightGreyMaleRightSide.webp';
import DesertBighornSheep_MelanisticMaleRightSide from '../../../assets/DesertBighornSheep_MelanisticMaleRightSide.webp';
import DesertBighornSheep_PiebaldVariation1MaleRightSide from '../../../assets/DesertBighornSheep_PiebaldVariation1MaleRightSide.webp';
import DesertBighornSheep_PiebaldVariation1MaleLeftSide from '../../../assets/DesertBighornSheep_PiebaldVariation1MaleLeftSide.webp';
import DesertBighornSheep_PiebaldVariation2MaleRightSide from '../../../assets/DesertBighornSheep_PiebaldVariation2MaleRightSide.webp';
import DesertBighornSheep_PiebaldVariation2MaleLeftSide from '../../../assets/DesertBighornSheep_PiebaldVariation2MaleLeftSide.webp';

// Female
import DesertBighornSheep_AlbinoFemaleRightSide from '../../../assets/DesertBighornSheep_AlbinoFemaleRightSide.webp';
import DesertBighornSheep_BrownFemaleRightSide from '../../../assets/DesertBighornSheep_BrownFemaleRightSide.webp';
import DesertBighornSheep_GreyFemaleRightSide from '../../../assets/DesertBighornSheep_GreyFemaleRightSide.webp';
import DesertBighornSheep_LeucisticFemaleRightSide from '../../../assets/DesertBighornSheep_LeucisticFemaleRightSide.webp';
import DesertBighornSheep_LightBrownFemaleRightSide from '../../../assets/DesertBighornSheep_LightBrownFemaleRightSide.webp';
import DesertBighornSheep_MelanisticFemaleRightSide from '../../../assets/DesertBighornSheep_MelanisticFemaleRightSide.webp';
import DesertBighornSheep_MosaicFemaleRightSide from '../../../assets/DesertBighornSheep_MosaicFemaleRightSide.webp';
import DesertBighornSheep_MosaicFemaleLeftSide from '../../../assets/DesertBighornSheep_MosaicFemaleLeftSide.webp';
import DesertBighornSheep_PiebaldFemaleRightSide from '../../../assets/DesertBighornSheep_PiebaldFemaleRightSide.webp';
import DesertBighornSheep_PiebaldFemaleLeftSide from '../../../assets/DesertBighornSheep_PiebaldFemaleLeftSide.webp';


const DesertBighornSheep = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  // NOTE: Screenshot for Need Zones was not provided in this batch. 
  // Placeholder structure retained.
  const needZonesData = [
    {
      name: "Rancho del Arroyo",
      schedule: [
        { time: "Pending Data", type: "Pending", icon: FeedingZoneIcon },
      ]
    }
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Cautious and elusive" },
    { label: "Habitat", value: "Arid desert mountains, steep rocky slipes, canyons, and rugged escarpments" },
    { label: "Senses", value: "Exceptional vision, keen hearing, and a less developed sense of smell" },
    { label: "Social", value: "Rams live solitary or in small groups, ewes live in medium to large-sized groups" },
    { label: "Active", value: "Morning to evening" },
    { label: "Recommended Equipment", value: "Class 5 Ammo" },
    { label: "Species", value: "Ovis canadensis nelsoni", italic: true, isLink: true },
    { label: "Difficulty", value: "Average" },
  ];

  // Fur Gallery Data (split by sex)
  const maleGallery = [
    { name: "Albino", src: DesertBighornSheep_AlbinoMaleRightSide },
    { name: "Brown", src: DesertBighornSheep_BrownMaleRightSide },
    { name: "Erythristic", src: DesertBighornSheep_ErythristicMaleRightSide },
    { name: "Grey", src: DesertBighornSheep_GreyMaleRightSide },
    { name: "Leucistic", src: DesertBighornSheep_LeucisticMaleRightSide },
    { name: "Light Brown", src: DesertBighornSheep_LightBrownMaleRightSide },
    { name: "Light Grey", src: DesertBighornSheep_LightGreyMaleRightSide },
    { name: "Melanistic", src: DesertBighornSheep_MelanisticMaleRightSide },
    { name: "Piebald Variation 1 (Right)", src: DesertBighornSheep_PiebaldVariation1MaleRightSide },
    { name: "Piebald Variation 1 (Left)", src: DesertBighornSheep_PiebaldVariation1MaleLeftSide },
    { name: "Piebald Variation 2 (Right)", src: DesertBighornSheep_PiebaldVariation2MaleRightSide },
    { name: "Piebald Variation 2 (Left)", src: DesertBighornSheep_PiebaldVariation2MaleLeftSide },
  ];

  const femaleGallery = [
    { name: "Albino", src: DesertBighornSheep_AlbinoFemaleRightSide },
    { name: "Brown", src: DesertBighornSheep_BrownFemaleRightSide },
    { name: "Grey", src: DesertBighornSheep_GreyFemaleRightSide },
    { name: "Leucistic", src: DesertBighornSheep_LeucisticFemaleRightSide },
    { name: "Light Brown", src: DesertBighornSheep_LightBrownFemaleRightSide },
    { name: "Melanistic", src: DesertBighornSheep_MelanisticFemaleRightSide },
    { name: "Mosaic (Right)", src: DesertBighornSheep_MosaicFemaleRightSide },
    { name: "Mosaic (Left)", src: DesertBighornSheep_MosaicFemaleLeftSide },
    { name: "Piebald (Right)", src: DesertBighornSheep_PiebaldFemaleRightSide },
    { name: "Piebald (Left)", src: DesertBighornSheep_PiebaldFemaleLeftSide },
  ];

  // Trivia Data
  const triviaData = [
    <span>There are three subspecies of Bighorn Sheep: the Rocky Mountain bighorn sheep (Ovis canadensis canadensis), the Sierra Nevada bighorn sheep (Ovis canadensis sierrae), and the desert bighorn sheep (Ovis canadensis nelsoni). <sup>[1]</sup></span>,
    <span>In the 19th century, the species was hunted to near extinction. Today, the population has recovered to approximately 80000 in the wild. <sup>[2]</sup></span>,
    "The bighorn sheep was replaced with the desert bighorn sheep in the 8.3 patch update on rancho del arroyo. The bighorn sheep got remodeled and was renamed to desert bighorn sheep on rancho del arrroyo."
  ];

  // References Data (Placeholder - Screenshot not provided)
  const referencesData = [
    "Pending screenshot verification..."
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
          <span>Desert Bighorn Sheep</span>
        </div>

        <div style={styles.layout}>
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside style={styles.sidebarColumn}>
            <div style={styles.sidebarHeader}>Desert Bighorn Sheep</div>
            <div style={styles.sidebarImage}>
              <img src={DesertBighornMain} alt="Desert Bighorn Sheep" style={{width:'100%', height: '100%', objectFit: 'cover'}} />
            </div>
            
            <div style={styles.sidebarHeader}>General Information</div>
            
            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Class</span>
              <span><img src={class5Icon} alt="Class 5" style={{width:'24px', height:'24px', verticalAlign: 'middle', marginRight: '6px'}}/>5</span>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Difficulty</span>
              <span>1: Trivial — 5: Medium</span>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Trophy Type</span>
              <span>Horns</span>
              <div style={styles.trophyGrid}>
                {/* */}
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.silver}}>◆ Silver</span>
                  <span>84.10</span>
                </div>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.gold}}>☗ Gold</span>
                  <span>148.57</span>
                </div>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.diamond}}>☗ Diamond</span>
                  <span>196.93</span>
                </div>
              </div>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Weight</span>
              {/* - Transcribed exactly as shown in screenshot */}
              0kg — 0kg<br/>
              <span style={{color: '#88a0b8', fontSize: '0.85rem'}}>0lbs — 0lbs</span>
            </div>

            <div style={styles.sidebarSection}>
               <span style={styles.sidebarLabel}>Fur</span>
               {/* */}
               <span style={{fontSize:'0.85rem'}}>
                 Albino, Brown, Erythristic, Grey, Leucistic, Light Brown, Light Grey, Piebald, Melanistic, Mosaic
               </span>
            </div>

            <div style={styles.sidebarHeader}>Locations</div>
            <div style={styles.sidebarSection}>
               {/* */}
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Rancho del Arroyo</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main style={styles.mainColumn}>

            {/* Quote Block */}
            <div style={styles.quoteBox}>
              "Desert bighorn sheep inhabit arid mountain ranges and rocky canyons in the southwest U.S. and northern Mexico. They survive in areas with limited water and sparse vegetation, relying on steep terrain for protection. Their good vision and hearing are essential for detecting predators in this harsh environment. Males wield their large horns in intense fights to establish social rank and secure mates. The booming collisions resonate through the desert canyons, a powerful reminder of their struggle to survive in a tough environment."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p style={{marginBottom:'20px'}}>
              The <strong>Desert Bighorn Sheep</strong> is a <span style={styles.link}>class 5</span> sheep introduced with the <span style={styles.link}>Rancho del Arroyo</span> reserve located in Mexico. Both females and males have horns.
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
            <p style={{fontStyle:'italic', color:'#88a0b8'}}>Data pending screenshot verification.</p>

            {/* SHOT SCHEME */}
            <h2 style={styles.h2} id="shot-scheme">Shot scheme</h2>
            <p style={{fontStyle:'italic', color:'#88a0b8'}}>Data pending screenshot verification.</p>

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
                                Brown (29.01%)<br/>
                                Grey (29.01%)<br/>
                                Light Grey (29.01%)
                            </td>
                            <td style={styles.td}>
                                Light Brown (12.51%)
                            </td>
                            <td style={styles.td}>
                                X
                            </td>
                            <td style={styles.td}>
                                Leucistic (0.10%)<br/>
                                Piebald Variation 1 (0.10%)<br/>
                                Piebald Variation 2 (0.10%)<br/>
                                Albino (0.05%)<br/>
                                Erythristic (0.05%)<br/>
                                Melanistic (0.05%)
                            </td>
                        </tr>
                        {/* Female Row */}
                        <tr>
                            <td style={{...styles.td, color: '#d63384', fontStyle: 'italic', fontWeight: 'bold'}}>
                                Female
                            </td>
                            <td style={styles.td}>
                                Brown (40.93%)<br/>
                                Grey (40.93%)
                            </td>
                            <td style={styles.td}>
                                Light Brown (17.64%)
                            </td>
                            <td style={styles.td}>
                                Leucistic (0.14%)<br/>
                                Piebald (0.14%)
                            </td>
                            <td style={styles.td}>
                                Albino (0.07%)<br/>
                                Melanistic (0.07%)<br/>
                                Mosaic (0.07%)
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

            {/* REFERENCES */}
            <h2 id="references" style={styles.h2}>References</h2>
            <p style={{fontStyle:'italic', color:'#88a0b8'}}>Pending screenshot verification.</p>

            <div style={{marginTop: '40px'}}>
                <AnimalsTableMini />
            </div>
            
          </main>
        </div>
      </div>
    </div>
  );
};

export default DesertBighornSheep;