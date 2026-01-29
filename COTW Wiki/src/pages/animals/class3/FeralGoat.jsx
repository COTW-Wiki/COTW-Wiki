import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import DrinkingZoneIcon from '../../../assets/DrinkingZoneIcon.webp';
import class3Icon from '../../../assets/Class3Icon.webp'; // Class 3 for Feral Goat
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import FeralGoatMain from '../../../assets/FeralGoat.webp';
import ShotSchemeImage from '../../../assets/Feral_Goat_shot_scheme.webp';

// Fur Variant Images (Placeholders)
import FeralGoat_AlbinoMaleRightSide from '../../../assets/FeralGoat_AlbinoMaleRightSide.webp';
import FeralGoat_BlackMaleRightSide from '../../../assets/FeralGoat_BlackMaleRightSide.webp';
import FeralGoat_BlackBrownMaleRightSide from '../../../assets/FeralGoat_BlackBrownMaleRightSide.webp';
import FeralGoat_BlackWhiteMaleRightSide from '../../../assets/FeralGoat_BlackWhiteMaleRightSide.webp';
import FeralGoat_BlondeMaleRightSide from '../../../assets/FeralGoat_BlondeMaleRightSide.webp';
import FeralGoat_BrownMaleRightSide from '../../../assets/FeralGoat_BrownMaleRightSide.webp';
import FeralGoat_DarkBrownMaleRightSide from '../../../assets/FeralGoat_DarkBrownMaleRightSide.webp';
import FeralGoat_MixedVariation1MaleRightSide from '../../../assets/FeralGoat_MixedVariation1MaleRightSide.webp';
import FeralGoat_MixedVariation1MaleLeftSide from '../../../assets/FeralGoat_MixedVariation1MaleLeftSide.webp';
import FeralGoat_MixedVariation2MaleRightSide from '../../../assets/FeralGoat_MixedVariation2MaleRightSide.webp';
import FeralGoat_WhiteMaleRightSide from '../../../assets/FeralGoat_WhiteMaleRightSide.webp';
import FeralGoat_WhiteBrownMaleRightSide from '../../../assets/FeralGoat_WhiteBrownMaleRightSide.webp';

import FeralGoat_AlbinoFemale from '../../../assets/FeralGoat_AlbinoFemale.webp';
import FeralGoat_BlackWhiteFemale from '../../../assets/FeralGoat_BlackWhiteFemale.webp';
import FeralGoat_BlackFemale from '../../../assets/FeralGoat_BlackFemale.webp';
import FeralGoat_WhiteFemale from '../../../assets/FeralGoat_WhiteFemale.webp';
import FeralGoat_BrownFemale from '../../../assets/FeralGoat_BrownFemale.webp';


const FeralGoat = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  const needZonesData = [
    {
      name: "Emerald Coast",
      schedule: [
        { time: "00:00 - 03:00", type: "Resting", icon: RestingZoneIcon },
        { time: "03:00 - 06:00", type: "Resting", icon: RestingZoneIcon },
        { time: "06:00 - 09:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "09:00 - 12:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "12:00 - 15:00", type: "Drinking", icon: DrinkingZoneIcon },
        { time: "15:00 - 18:00", type: "Resting", icon: RestingZoneIcon },
        { time: "18:00 - 21:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "21:00 - 00:00", type: "Resting", icon: RestingZoneIcon },
      ]
    }
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Inquisitive, usually quite vocal" },
    { label: "Habitat", value: "Native grasslands, scrub and forest" },
    { label: "Senses", value: "Average hearing, good vision, excellent smell" },
    { label: "Social", value: "Mixed groups of males and females" },
    { label: "Active", value: "Daytime" },
    { label: "Recommended Equipment", value: "Class 3 Ammo" },
    { label: "Species", value: "Capra aegagrus hircus", italic: true, isLink: true },
    { label: "Difficulty", value: "Hard" },
  ];

  // Fur Gallery Data: split by sex
  const maleGallery = [
    { name: "Albino", src: FeralGoat_AlbinoMaleRightSide },
    { name: "Black", src: FeralGoat_BlackMaleRightSide },
    { name: "Black Brown", src: FeralGoat_BlackBrownMaleRightSide },
    { name: "Black White", src: FeralGoat_BlackWhiteMaleRightSide },
    { name: "Blonde", src: FeralGoat_BlondeMaleRightSide },
    { name: "Brown", src: FeralGoat_BrownMaleRightSide },
    { name: "Dark Brown", src: FeralGoat_DarkBrownMaleRightSide },
    { name: "Mixed Variation 1 (Right)", src: FeralGoat_MixedVariation1MaleRightSide },
    { name: "Mixed Variation 1 (Left)", src: FeralGoat_MixedVariation1MaleLeftSide },
    { name: "Mixed Variation 2", src: FeralGoat_MixedVariation2MaleRightSide },
    { name: "White", src: FeralGoat_WhiteMaleRightSide },
    { name: "White Brown", src: FeralGoat_WhiteBrownMaleRightSide },
  ];

  const femaleGallery = [
    { name: "Albino", src: FeralGoat_AlbinoFemale },
    { name: "Black White", src: FeralGoat_BlackWhiteFemale },
    { name: "Black", src: FeralGoat_BlackFemale },
    { name: "White", src: FeralGoat_WhiteFemale },
    { name: "Brown", src: FeralGoat_BrownFemale },
  ];

  // Smooth scroll helper for TOC links
  const scrollToId = (id) => (e) => {
    if (e && e.preventDefault) e.preventDefault();
    const el = document.getElementById(id);
    if (el && el.scrollIntoView) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      try { history.replaceState(null, '', `#${id}`); } catch (err) { /* ignore */ }
    }
  };

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
          <span>Feral Goat</span>
        </div>

        <div style={styles.layout}>
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside style={styles.sidebarColumn}>
            <div style={styles.sidebarHeader}>Feral Goat</div>
            <div style={styles.sidebarImage}>
              <img src={FeralGoatMain} alt="Feral Goat" style={{width:'100%', height: '100%', objectFit: 'cover'}} />
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
                  <span>89.44</span>
                </div>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.gold}}>☗ Gold</span>
                  <span>157.60</span>
                </div>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.diamond}}>☗ Diamond</span>
                  <span>208.71</span>
                </div>
              </div>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Weight</span>
              25kg — 50kg<br/>
              <span style={{color: '#88a0b8', fontSize: '0.85rem'}}>55lbs — 110lbs</span>
            </div>

            <div style={styles.sidebarSection}>
               <span style={styles.sidebarLabel}>Fur</span>
               <span style={{fontSize:'0.85rem'}}>
                 Albino, Black, Black Brown, Back White, Blonde, Brown, Dark Brown, Mixed, White, White Brown
               </span>
            </div>

            <div style={styles.sidebarHeader}>Locations</div>
            <div style={styles.sidebarSection}>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Te Awaroa National Park</span></div>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Emerald Coast</span></div>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Tòrr nan Sithean</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main style={styles.mainColumn}>

            {/* Quote Block */}
            <div style={styles.quoteBox}>
              "The New Zealand feral goats (Capra hircus), were brought onto the island in 1773 by early explorers, whalers, sealers and settlers who brought goats with them for food and bartering. Over time, more goats were brought in for a variety of purposes, from livestock to the handling of other invasive plant species. This problem culminated in 14% of New Zealand now being populated by feral goats, all of which have begun to destroy the natural plant life of the island. Currently, hunting and Judas goats are the primary means of handling the threat but this has not done much to stop the goats and they still remain a threat."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p style={{marginBottom:'20px'}}>
              The <strong>Feral Goat</strong> is huntable animal species in the <span style={styles.link}>Te Awaroa National Park</span> Reserve located in New Zealand, <span style={styles.link}>Emerald Coast</span> and <span style={styles.link}>Tòrr nan Sithean</span>. It is a <span style={styles.link}>Class 3</span> Animal. Females in-games, as in real-life, have udders. Feral Goats exist in a large variety of fur colors.
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
                <li><a href="#features" onClick={scrollToId('features')} style={styles.link}>Features</a></li>
                <li><a href="#need-zone-times" onClick={scrollToId('need-zone-times')} style={styles.link}>Need Zone Times</a></li>
                <li><a href="#shot-scheme" onClick={scrollToId('shot-scheme')} style={styles.link}>Shot scheme</a></li>
                <li>
                  <a href="#fur-variants" onClick={scrollToId('fur-variants')} style={styles.link}>Fur variants</a>
                  <ol style={{margin: '4px 0 0 18px', paddingLeft: 0, listStyleType: 'none'}}>
                    <li><a href="#fur-variants-male" onClick={scrollToId('fur-variants-male')} style={styles.link}>4.1 Male</a></li>
                    <li><a href="#fur-variants-female" onClick={scrollToId('fur-variants-female')} style={styles.link}>4.2 Female</a></li>
                  </ol>
                </li>
                <li><a href="#fur-variant-rarity" onClick={scrollToId('fur-variant-rarity')} style={styles.link}>Fur Variant Rarity</a></li>
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

            {/* FUR VARIANTS (Gallery) - Male */}
            <h2 id="fur-variants" style={styles.h2}>Fur variants</h2>
            <h2 id="fur-variants-male" style={styles.h2}>Male</h2>
            <div style={styles.galleryGrid}>
              {maleGallery.map((item, i) => (
                <div key={`male-${i}`} style={styles.galleryItem}>
                  <div style={styles.galleryImgPlaceholder}>
                    <img src={item.src} alt={item.name} style={{width:'100%', height: '100%', objectFit: 'contain'}} />
                  </div>
                  <span style={styles.galleryLabel}>{item.name}</span>
                </div>
              ))}
            </div>

            {femaleGallery && femaleGallery.length > 0 && (
              <>
                <h2 id="fur-variants-female" style={styles.h2}>Female</h2>
                <div style={styles.galleryGrid}>
                  {femaleGallery.map((item, i) => (
                    <div key={`female-${i}`} style={styles.galleryItem}>
                      <div style={styles.galleryImgPlaceholder}>
                        <img src={item.src} alt={item.name} style={{width:'100%', height: '100%', objectFit: 'contain'}} />
                      </div>
                      <span style={styles.galleryLabel}>{item.name}</span>
                    </div>
                  ))}
                </div>
              </>
            )}

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
                                Blonde (18.68%)<br/>
                                Brown (18.68%)<br/>
                                Dark Brown (18.68%)<br/>
                                White (18.68%)
                            </td>
                            <td style={styles.td}>
                                Black Brown (8.33%)<br/>
                                Black White (8.33%)<br/>
                                White Brown (8.33%)
                            </td>
                            <td style={styles.td}>
                                Mixed Variation 1 (0.10%)<br/>
                                Mixed Variation 2 (0.10%)
                            </td>
                            <td style={styles.td}>
                                Albino (0.05%)<br/>
                                Black (0.05%)
                            </td>
                        </tr>
                        <tr>
                            <td style={{...styles.td, color: '#d63384', fontStyle: 'italic', fontWeight: 'bold'}}>
                                Female
                            </td>
                            <td style={styles.td}>
                                Brown (40.79%)<br/>
                                White (40.79%)<br/>
                                Black White (18.20%)
                            </td>
                            <td style={styles.td}>X</td>
                            <td style={styles.td}>
                                Albino (0.11%)<br/>
                                Black (0.11%)
                            </td>
                            <td style={styles.td}>X</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Trivia section removed per request */}

            <div style={{marginTop: '40px'}}>
                <AnimalsTableMini />
            </div>
            
          </main>
        </div>
      </div>
    </div>
  );
};

export default FeralGoat;