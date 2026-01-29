import React from 'react';
// removed shot-scheme image import (was used only for shot scheme)
import TundraBeanGoose_BrownFront from '../../../assets/TundraBeanGoose_BrownFront.webp';
import TundraBeanGoose_BrownBack from '../../../assets/TundraBeanGoose_BrownBack.webp';
import TundraBeanGoose_DarkGreyFront from '../../../assets/TundraBeanGoose_DarkGreyFront.webp';
import TundraBeanGoose_DarkGreyBack from '../../../assets/TundraBeanGoose_DarkGreyBack.webp';
import TundraBeanGoose_LeucisticVariation1Front from '../../../assets/TundraBeanGoose_LeucisticVariation1Front.webp';
import TundraBeanGoose_LeucisticVariation1Back from '../../../assets/TundraBeanGoose_LeucisticVariation1Back.webp';
import TundraBeanGoose_LeucisticVariation2Front from '../../../assets/TundraBeanGoose_LeucisticVariation2Front.webp';
import TundraBeanGoose_LeucisticVariation2Back from '../../../assets/TundraBeanGoose_LeucisticVariation2Back.webp';
import TundraBeanGoose_LeucisticVariation3Front from '../../../assets/TundraBeanGoose_LeucisticVariation3Front.webp';
import TundraBeanGoose_LeucisticVariation3Back from '../../../assets/TundraBeanGoose_LeucisticVariation3Back.webp';
import TundraBeanGoose_LightGreyFront from '../../../assets/TundraBeanGoose_LightGreyFront.webp';
import TundraBeanGoose_LightGreyBack from '../../../assets/TundraBeanGoose_LightGreyBack.webp';
import TundraBeanGooseImg from '../../../assets/TundraBeanGoose.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import class1Icon from '../../../assets/Class1Icon.webp';
import AnimalsTableMini from '../../../components/AnimalsTableMini';

const TundraBeanGoose = () => {
  // --- DATA SOURCES ---

  // Need Zone Times
  const needZones = [
    { time: "00:00 - 05:30", type: "Resting", icon: RestingZoneIcon },
    { time: "05:00 - 07:30", type: "Feeding", icon: FeedingZoneIcon },
    { time: "07:00 - 09:30", type: "Resting", icon: RestingZoneIcon },
    { time: "09:00 - 11:30", type: "Feeding", icon: FeedingZoneIcon },
    { time: "11:00 - 13:30", type: "Resting", icon: RestingZoneIcon },
    { time: "13:00 - 15:30", type: "Feeding", icon: FeedingZoneIcon },
    { time: "15:00 - 17:30", type: "Resting", icon: RestingZoneIcon },
    { time: "17:00 - 19:30", type: "Feeding", icon: FeedingZoneIcon },
    { time: "19:00 - 00:30", type: "Resting", icon: RestingZoneIcon },
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Gregarious" },
    { label: "Habitat", value: "Wetlands and mires" },
    { label: "Senses", value: "Excellent vision, good hearing and smell" },
    { label: "Social", value: "Highly gregarious, often mixes with other goose species" },
    { label: "Active", value: "Feeds throughout the day, with intermittent rest" },
    { label: "Recommended Equipment", value: "Class 1 Ammo, Tundra Bean Goose Decoys and Caller" },
    { label: "Species", value: "Anser serrirostris", italic: true },
    { label: "Difficulty", value: "Easy" },
  ];

  // Plumage Variants - actual image assets (front/back)
  const plumageImages = [
    { name: "Brown - Front", src: TundraBeanGoose_BrownFront },
    { name: "Brown - Back", src: TundraBeanGoose_BrownBack },
    { name: "Dark Grey - Front", src: TundraBeanGoose_DarkGreyFront },
    { name: "Dark Grey - Back", src: TundraBeanGoose_DarkGreyBack },
    { name: "Leucistic Variation 1 - Front", src: TundraBeanGoose_LeucisticVariation1Front },
    { name: "Leucistic Variation 1 - Back", src: TundraBeanGoose_LeucisticVariation1Back },
    { name: "Leucistic Variation 2 - Front", src: TundraBeanGoose_LeucisticVariation2Front },
    { name: "Leucistic Variation 2 - Back", src: TundraBeanGoose_LeucisticVariation2Back },
    { name: "Leucistic Variation 3 - Front", src: TundraBeanGoose_LeucisticVariation3Front },
    { name: "Leucistic Variation 3 - Back", src: TundraBeanGoose_LeucisticVariation3Back },
    { name: "Light Grey - Front", src: TundraBeanGoose_LightGreyFront },
    { name: "Light Grey - Back", src: TundraBeanGoose_LightGreyBack },
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
    // Main Header
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
    editActions: {
      fontSize: '0.9rem',
      color: '#6fb2e6',
      display: 'flex',
      gap: '15px',
      fontWeight: 'bold',
      cursor: 'pointer',
    },
    // Layout Columns
    layout: {
      display: 'flex',
      gap: '30px',
      alignItems: 'flex-start',
      flexDirection: 'row-reverse', // Sidebar on the right
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
    // Sidebar Specifics
    sidebarHeader: {
      backgroundColor: '#05121c',
      padding: '12px',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: '1.1rem',
      borderBottom: '2px solid #cfaa3e', // Gold accent
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
    
    // Content Components
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
    h2Icon: {
      fontSize: '0.8rem',
      marginLeft: '10px',
      opacity: 0.7,
      cursor: 'pointer',
    },
    
    // Tables
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
    },
    
    // Shot Scheme
    shotContainer: {
      display: 'flex',
      backgroundColor: '#112233',
      marginTop: '10px',
      border: '1px solid #1f405a',
    },
    shotImage: {
      width: '300px',
      height: '220px',
      backgroundColor: '#000',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#555',
      flexShrink: 0,
    },
    shotInfo: {
      padding: '20px',
      display: 'flex',
      alignItems: 'center',
      color: '#fff',
    },

    // Gallery
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
    },

    // Rarity Colors
    common: { color: '#2ecc71', fontWeight: 'bold' },
    rare: { color: '#9b59b6', fontWeight: 'bold' },
    veryRare: { color: '#e74c3c', fontWeight: 'bold' },
    uncommon: { color: '#3498db', fontWeight: 'bold' },
  };

  return (
    <div style={styles.container}>
      <div style={styles.innerWrapper}>
        
        {/* PAGE HEADER */}
        <div style={styles.mainHeader}>
          <span>Tundra Bean Goose</span>
          <div style={styles.editActions}>
          </div>
        </div>

        <div style={styles.layout}>
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside style={styles.sidebarColumn}>
            <div style={styles.sidebarHeader}>Tundra Bean Goose</div>
            <div style={styles.sidebarImage}>
              <img src={TundraBeanGooseImg} alt="Tundra Bean Goose" style={{width: '268.4px', height: '134.2px', objectFit: 'cover'}} />
              <span style={{position:'absolute', bottom:'5px', right:'5px', fontSize:'0.8rem'}}>📷</span>
            </div>
            
            <div style={styles.sidebarHeader}>General Information</div>
            
            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Class</span>
              <span><img src={class1Icon} alt="Class 1" style={{width:'12px', height:'12px', verticalAlign:'middle', marginRight:'6px'}}/>1</span>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Difficulty</span>
              <span>1: Trivial — 5: Medium</span>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Trophy Type</span>
              <span>Weight</span>
              <div style={styles.trophyGrid}>
                <div style={styles.trophyItem}>
                   <span style={{...styles.trophyLabel, ...styles.silver}}>◆ Silver</span>
                   <span>2.18</span>
                </div>
                <div style={styles.trophyItem}>
                   <span style={{...styles.trophyLabel, ...styles.gold}}>☗ Gold</span>
                   <span>2.74</span>
                </div>
                <div style={styles.trophyItem}>
                   <span style={{...styles.trophyLabel, ...styles.diamond}}>☗ Diamond</span>
                   <span>3.16</span>
                </div>
              </div>
            </div>

            <div style={styles.sidebarSection}>
               <span style={styles.sidebarLabel}>Weight</span>
               1.9kg — 3.5kg<br/>
               4lbs — 8lbs
            </div>

            <div style={styles.sidebarSection}>
               <span style={styles.sidebarLabel}>Plumage</span>
               <span style={{fontSize: '0.85rem'}}>
                 Brown, Dark Grey, Leucistic, Light Grey
               </span>
            </div>

            <div style={styles.sidebarHeader}>Locations</div>
            <div style={styles.sidebarSection}>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Revontuli Coast</span></div>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Salzwiesen Park</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main style={styles.mainColumn}>

            {/* Quote Block */}
            <div style={styles.quoteBox}>
              "The Tundra Bean Goose is a species native to the Nordic European countries and Siberia. It is very closely related to the Taiga Bean Goose, and some specialists consider them separate species while others do not. Both also often coexist with the more widespread Greylag Goose, sometimes forming mixed flocks. Like other grey goose species, Tundra Bean Geese gather in large flocks in preparation for their winter migration. These large groups can be seen feeding in grassy wetlands for most of the day in preparation for their journey south."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p style={{marginBottom: '20px'}}>
              The <strong>Tundra Bean Goose</strong> is a <span style={styles.link}>class 1</span> goose species that can be hunted on <span style={styles.link}>Revontuli Coast</span>, and <span style={styles.link}>Salzwiesen Park</span>.
            </p>

            {/* Table of Contents (page-specific) */}
            {(() => {
              const tocItems = [
                { id: 'features', label: 'Features' },
                { id: 'tips', label: 'Tips' },
                { id: 'need-zones', label: 'Need Zone Times' },
                { id: 'plumage-variants', label: 'Plumage Variants'},
                { id: 'plumage-rarity', label: 'Plumage Variant Rarity' },
              ];

              const LocalTOC = ({ items }) => {
                const stylesTOC = {
                  container: { backgroundColor: '#0b1e3b', border: '1px solid #3a5a75', borderRadius: '4px', color: '#fff', width: '250px', fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif', fontSize: '14px', marginTop: '20px', boxShadow: '0 4px 6px rgba(0,0,0,0.3)' },
                  header: { padding: '8px 12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #3a5a75' },
                  title: { fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px' },
                  list: { margin: 0, padding: '10px 15px 10px 35px', listStyleType: 'decimal' },
                  listItem: { marginBottom: '6px', color: '#fff', cursor: 'pointer' },
                  linkText: { color: '#6fb2e6' }
                };

                const scrollTo = (id) => {
                  const el = document.getElementById(id);
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                };

                return (
                  <div style={stylesTOC.container}>
                    <div style={stylesTOC.header}><div style={stylesTOC.title}>Contents</div></div>
                    <ol style={stylesTOC.list}>
                      {items.map((it) => (
                        <li key={it.id} style={stylesTOC.listItem} onClick={() => scrollTo(it.id)}>
                          <span style={stylesTOC.linkText}>{it.label}</span>
                          {it.children && (
                            <ol style={{ listStyleType: 'decimal', marginTop: '6px', marginLeft: '16px', paddingLeft: '6px' }}>
                              {it.children.map((c) => (
                                <li key={c.id} style={stylesTOC.listItem} onClick={() => scrollTo(c.id)}>
                                  <span style={stylesTOC.linkText}>{c.label}</span>
                                </li>
                              ))}
                            </ol>
                          )}
                        </li>
                      ))}
                    </ol>
                  </div>
                );
              };

              return <LocalTOC items={tocItems} />;
            })()}

            {/* FEATURES */}
            <h2 id="features" style={styles.h2}>Features <span style={styles.h2Icon}>✎</span></h2>
            <table style={styles.table}>
              <tbody>
                <tr>
                    <th style={{...styles.th, width: '25%'}}></th>
                    <th style={styles.th}>Description</th>
                </tr>
                {features.map((item, index) => (
                  <tr key={index}>
                    <td style={{...styles.td, fontWeight: 'bold'}}>{item.label}</td>
                    <td style={{...styles.td, fontStyle: item.italic ? 'italic' : 'normal'}}>
                        {item.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* TIPS */}
            <h2 id="tips" style={styles.h2}>Tips <span style={styles.h2Icon}>✎</span></h2>
            <p style={{marginBottom: '10px'}}>
              Hunting Geese is similar to hunting other waterfowl. The added benefit being, you can hunt Geese in open fields. Fields give players the freedom to place decoys as far away from a blind as possible, as compared to water which has limits on how far away from shore you can place decoys.
            </p>
            <p>
              Find an open area to place decoys and try and place the decoys approximately 50m (54yds) away from your blind. Be mindful that geese will fly into the wind when they land.
            </p>

            {/* NEED ZONE TIMES */}
            <h2 id="need-zones" style={styles.h2}>Need Zone Times</h2>
            <div style={{display: 'inline-block'}}>
              <table style={{...styles.table, width: '300px'}}>
                <thead>
                  <tr><th colSpan="2" style={{...styles.th, textAlign: 'center'}}>Revontuli Coast</th></tr>
                  <tr>
                    <th style={{...styles.th, backgroundColor: '#0f2e48'}}>Time</th>
                    <th style={{...styles.th, backgroundColor: '#0f2e48'}}>Activity</th>
                  </tr>
                </thead>
                <tbody>
                  {needZones.map((zone, i) => (
                  <tr key={i}>
                    <td style={styles.td}>{zone.time}</td>
                    <td style={styles.td}><img src={zone.icon} alt={zone.type} style={{width: '30px', height: '30px', verticalAlign: 'middle', marginRight: '8px'}} />{zone.type}</td>
                  </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* SHOT SCHEME removed for this page */}

            {/* PLUMAGE VARIANTS (Gallery) */}
            <h2 id="plumage-variants" style={styles.h2}>Plumage Variants</h2>
            <div style={styles.galleryGrid}>
              {plumageImages.map((img, i) => (
                <div key={i} style={styles.galleryItem}>
                  <img src={img.src} alt={img.name} style={{width: '146px', height: '165px', objectFit: 'cover', border: '4px solid #1f3a52', marginBottom: '8px'}} />
                  <span style={styles.galleryLabel}>{img.name}</span>
                </div>
              ))}
            </div>

            {/* PLUMAGE RARITY TABLE */}
            <h2 id="plumage-rarity" style={styles.h2}>Plumage Variant Rarity <span style={styles.h2Icon}>✎</span></h2>
            <table style={styles.table}>
                <thead>
                    <tr>
                        <th style={styles.th}>Sex</th>
                        <th style={styles.th}><span style={styles.common}>Common</span></th>
                        <th style={styles.th}><span style={styles.uncommon}>Uncommon</span></th>
                        <th style={styles.th}><span style={styles.rare}>Rare</span></th>
                        <th style={styles.th}><span style={styles.veryRare}>Very Rare</span></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{...styles.td, color: '#9b59b6', fontStyle: 'italic'}}>Male/Female</td>
                        <td style={styles.td}>
                            Brown (74.78%)<br/>
                            Dark Grey (12.51%)<br/>
                            Light Grey (12.51%)
                        </td>
                        <td style={styles.td}>X</td>
                        <td style={styles.td}>X</td>
                        <td style={styles.td}>
                            Leucistic Variation 1 (0.07%)<br/>
                            Leucistic Variation 2 (0.07%)<br/>
                            Leucistic Variation 3 (0.07%)
                        </td>
                    </tr>
                </tbody>
            </table>

            {/* TRIVIA removed for this page */}

            <AnimalsTableMini />
          </main>
        </div>
      </div>
    </div>
  );
};

export default TundraBeanGoose;