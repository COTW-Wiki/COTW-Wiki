import React from 'react';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import class1Icon from '../../../assets/Class1Icon.webp';
// page-local TOC will be rendered below
import AnimalsTableMini from '../../../components/AnimalsTableMini';

// Goldeneye image assets
import GoldeneyeImg from '../../../assets/Goldeneye.webp';
import Goldeneye_BlackMaleFront from '../../../assets/Goldeneye_BlackMaleFront.webp';
import Goldeneye_BlackMaleBack from '../../../assets/Goldeneye_BlackMaleBack.webp';
import Goldeneye_EclipseMaleFront from '../../../assets/Goldeneye_EclipseMaleFront.webp';
import Goldeneye_EclipseMaleBack from '../../../assets/Goldeneye_EclipseMaleBack.webp';
import Goldeneye_HybridVariation1MaleFront from '../../../assets/Goldeneye_HybridVariation1MaleFront.webp';
import Goldeneye_HybridVariation1MaleBack from '../../../assets/Goldeneye_HybridVariation1MaleBack.webp';
import Goldeneye_HybridVariation2MaleFront from '../../../assets/Goldeneye_HybridVariation2MaleFront.webp';
import Goldeneye_HybridVariation2MaleBack from '../../../assets/Goldeneye_HybridVariation2MaleBack.webp';
import Goldeneye_LeucisticVariation1MaleFront from '../../../assets/Goldeneye_LeucisticVariation1MaleFront.webp';
import Goldeneye_LeucisticVariation1MaleBack from '../../../assets/Goldeneye_LeucisticVariation1MaleBack.webp';
import Goldeneye_LeucisticVariation1FemaleFront from '../../../assets/Goldeneye_LeucisticVariation1FemaleFront.webp';
import Goldeneye_LeucisticVariation1FemaleBack from '../../../assets/Goldeneye_LeucisticVariation1FemaleBack.webp';
import Goldeneye_LeucisticVariation2MaleFront from '../../../assets/Goldeneye_LeucisticVariation2MaleFront.webp';
import Goldeneye_LeucisticVariation2MaleBack from '../../../assets/Goldeneye_LeucisticVariation2MaleBack.webp';
import Goldeneye_LeucisticVariation2FemaleFront from '../../../assets/Goldeneye_LeucisticVariation2FemaleFront.webp';
import Goldeneye_LeucisticVariation2FemaleBack from '../../../assets/Goldeneye_LeucisticVariation2FemaleBack.webp';
import Goldeneye_GreyFemaleFront from '../../../assets/Goldeneye_GreyFemaleFront.webp';
import Goldeneye_GreyFemaleBack from '../../../assets/Goldeneye_GreyFemaleBack.webp';
import Goldeneye_DarkFemaleFront from '../../../assets/Goldeneye_DarkFemaleFront.webp';
import Goldeneye_DarkFemaleBack from '../../../assets/Goldeneye_DarkFemaleBack.webp';
import Goldeneye_shot_scheme from '../../../assets/Goldeneye_shot_scheme.webp';

const Goldeneye = () => {
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
    { label: "Behavior", value: "Vocal and gregarious" },
    { label: "Habitat", value: "Protected coastlines and estuaries" },
    { label: "Senses", value: "Excellent vision" },
    { label: "Social", value: "Mixed groups and mated pairs" },
    { label: "Active", value: "Intermittently throughout day and night" },
    { label: "Recommended Equipment", value: "Class 1 Ammo, Goldeneye Decoys" },
    { label: "Species", value: "Bucephala clangula", italic: true },
    { label: "Difficulty", value: "Easy" },
  ];

  // Plumage Variants (Male)
  const plumageMale = [
    { name: "Black - Front", color: "#212121" },
    { name: "Black - Back", color: "#000000" },
    { name: "Eclipse - Front", color: "#616161" },
    { name: "Eclipse - Back", color: "#424242" },
    { name: "Hybrid Variation 1 - Front", color: "#455a64" },
    { name: "Hybrid Variation 1 - Back", color: "#37474f" },
    { name: "Hybrid Variation 2 - Front", color: "#546e7a" },
    { name: "Hybrid Variation 2 - Back", color: "#455a64" },
    { name: "Leucistic Variation 1 - Front", color: "#cfd8dc" },
    { name: "Leucistic Variation 1 - Back", color: "#b0bec5" },
    { name: "Leucistic Variation 2 - Front", color: "#cfd8dc" },
    { name: "Leucistic Variation 2 - Back", color: "#b0bec5" },
  ];

  // Plumage Variants (Female)
  const plumageFemale = [
    { name: "Dark - Front", color: "#3e2723" },
    { name: "Dark - Back", color: "#212121" },
    { name: "Grey - Front", color: "#78909c" },
    { name: "Grey - Back", color: "#546e7a" },
    { name: "Leucistic Variation 1 - Front", color: "#cfd8dc" },
    { name: "Leucistic Variation 1 - Back", color: "#b0bec5" },
    { name: "Leucistic Variation 2 - Front", color: "#cfd8dc" },
    { name: "Leucistic Variation 2 - Back", color: "#b0bec5" },
  ];

  // Actual image sets for gallery (front/back)
  const malePlumageImages = [
    { name: 'Black - Front', src: Goldeneye_BlackMaleFront },
    { name: 'Black - Back', src: Goldeneye_BlackMaleBack },
    { name: 'Eclipse - Front', src: Goldeneye_EclipseMaleFront },
    { name: 'Eclipse - Back', src: Goldeneye_EclipseMaleBack },
    { name: 'Hybrid Variation 1 - Front', src: Goldeneye_HybridVariation1MaleFront },
    { name: 'Hybrid Variation 1 - Back', src: Goldeneye_HybridVariation1MaleBack },
    { name: 'Hybrid Variation 2 - Front', src: Goldeneye_HybridVariation2MaleFront },
    { name: 'Hybrid Variation 2 - Back', src: Goldeneye_HybridVariation2MaleBack },
    { name: 'Leucistic Variation 1 - Front', src: Goldeneye_LeucisticVariation1MaleFront },
    { name: 'Leucistic Variation 1 - Back', src: Goldeneye_LeucisticVariation1MaleBack },
    { name: 'Leucistic Variation 2 - Front', src: Goldeneye_LeucisticVariation2MaleFront },
    { name: 'Leucistic Variation 2 - Back', src: Goldeneye_LeucisticVariation2MaleBack },
  ];

  const femalePlumageImages = [
    { name: 'Dark - Front', src: Goldeneye_DarkFemaleFront },
    { name: 'Dark - Back', src: Goldeneye_DarkFemaleBack },
    { name: 'Grey - Front', src: Goldeneye_GreyFemaleFront },
    { name: 'Grey - Back', src: Goldeneye_GreyFemaleBack },
    { name: 'Leucistic Variation 1 - Front', src: Goldeneye_LeucisticVariation1FemaleFront },
    { name: 'Leucistic Variation 1 - Back', src: Goldeneye_LeucisticVariation1FemaleBack },
    { name: 'Leucistic Variation 2 - Front', src: Goldeneye_LeucisticVariation2FemaleFront },
    { name: 'Leucistic Variation 2 - Back', src: Goldeneye_LeucisticVariation2FemaleBack },
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
    h3: {
      color: '#dbe4eb',
      fontSize: '1.2rem',
      marginTop: '20px',
      marginBottom: '10px',
      fontWeight: 'bold'
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
      gap: '20px',
      alignItems: 'center',
      padding: '12px',
    },
    shotImage: {
      width: '500px',
      height: '234px',
      backgroundColor: '#000',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#555',
      flexShrink: 0,
      overflow: 'hidden',
      border: '2px solid #1f3a52',
      borderRadius: '4px',
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
          <span>Goldeneye</span>
          <div style={styles.editActions}>
          </div>
        </div>

        <div style={styles.layout}>
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside style={styles.sidebarColumn}>
            <div style={styles.sidebarHeader}>Goldeneye</div>
            <div style={styles.sidebarImage}>
              <img src={GoldeneyeImg} alt="Goldeneye flying" style={{width: '268.4px', height: '134.2px', objectFit: 'cover'}} />
              <span style={{position:'absolute', bottom:'5px', right:'5px', fontSize:'0.8rem'}}>📷</span>
            </div>
            
            <div style={styles.sidebarHeader}>General Information</div>
            
            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Class</span>
              <span><img src={class1Icon} alt="Class 1" style={{width: '12px', height: '12px', verticalAlign: 'middle', marginRight: '6px'}} />1</span>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Difficulty</span>
              <span>1: Trivial — 3: Very Easy</span>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Trophy Type</span>
              <span>Weight</span>
              <div style={styles.trophyGrid}>
                <div style={styles.trophyItem}>
                   <span style={{...styles.trophyLabel, ...styles.silver}}>◆ Silver</span>
                   <span>740</span>
                </div>
                <div style={styles.trophyItem}>
                   <span style={{...styles.trophyLabel, ...styles.gold}}>☗ Gold</span>
                   <span>1020</span>
                </div>
                <div style={styles.trophyItem}>
                   <span style={{...styles.trophyLabel, ...styles.diamond}}>☗ Diamond</span>
                   <span>1230</span>
                </div>
              </div>
            </div>

            <div style={styles.sidebarSection}>
               <span style={styles.sidebarLabel}>Weight</span>
               600g — 1300g<br/>
               1.3lbs — 2.9lbs
            </div>

            <div style={styles.sidebarSection}>
               <span style={styles.sidebarLabel}>Plumage</span>
               <span style={{fontSize: '0.85rem'}}>
                 Black, Grey, Dark, Eclipse, Hybrid, Leucistic
               </span>
            </div>

            <div style={styles.sidebarHeader}>Locations</div>
            <div style={styles.sidebarSection}>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Revontuli Coast</span></div>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>New England Mountains</span></div>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Salzwiesen Park</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main style={styles.mainColumn}>

            {/* Quote Block */}
            <div style={styles.quoteBox}>
              "The Common Goldeneye is a species of sea duck that can be found throughout the northern regions of Eurasia and North America. They feed by diving underwater, searching for crustaceans, insects and mollusks. The striking color of their eyes, for which they are named, their round heads and their distinctive plumage make the Goldeneye an easy duck to recognize and a popular game bird."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p style={{marginBottom: '20px'}}>
              The <strong>Goldeneye</strong> is a species of <span style={styles.link}>class 1</span> duck that can be hunted on <span style={styles.link}>Revontuli Coast</span>, <span style={styles.link}>New England Mountains</span>, and <span style={styles.link}>Salzwiesen Park</span>.
            </p>

            {/* Table of Contents (page-specific) */}
            {(() => {
              const tocItems = [
                { id: 'features', label: 'Features' },
                { id: 'need-zones', label: 'Need Zone Times' },
                { id: 'shot-scheme', label: 'Shot scheme' },
                { id: 'tips', label: 'Tips' },
                { id: 'plumage-variants', label: 'Plumage Variants', children: [
                  { id: 'plumage-male', label: 'Male' },
                  { id: 'plumage-female', label: 'Female' }
                ] },
                { id: 'plumage-rarity', label: 'Plumage Variant Rarity' },
                { id: 'trivia', label: 'Trivia' },
                { id: 'references', label: 'References' },
              ];

              const LocalTOC = ({ items }) => {
                const stylesTOC = {
                  container: { backgroundColor: '#0b1e3b', border: '1px solid #3a5a75', borderRadius: '4px', color: '#fff', width: '250px', fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif', fontSize: '14px', marginTop: '20px', boxShadow: '0 4px 6px rgba(0,0,0,0.3)' },
                  header: { padding: '8px 12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #3a5a75' },
                  title: { fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px' },
                  list: { margin: 0, padding: '10px 15px 10px 35px', listStyleType: 'none' },
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
                      {items.map((it, i) => (
                        <li key={it.id} style={stylesTOC.listItem} onClick={() => scrollTo(it.id)}>
                          <span style={{color: '#fff', fontWeight: '700', marginRight: '8px'}}>{i + 1}.</span>
                          <span style={stylesTOC.linkText}>{it.label}</span>
                          {it.children && (
                            <ol style={{ listStyleType: 'none', marginTop: '6px', marginLeft: '16px', paddingLeft: '6px' }}>
                              {it.children.map((c, j) => (
                                <li key={c.id} style={stylesTOC.listItem} onClick={() => scrollTo(c.id)}>
                                  <span style={{color: '#fff', fontWeight: '700', marginRight: '8px'}}>{i + 1}.{j + 1}</span>
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
            <h2 id="features" style={styles.h2}>Features</h2>
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
                            <td style={styles.td}>
                              <img src={zone.icon} alt={zone.type} style={{width: '30px', height: '30px', verticalAlign: 'middle', marginRight: '8px'}} />
                              {zone.type}
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* SHOT SCHEME */}
            <h2 id="shot-scheme" style={styles.h2}>Shot scheme</h2>
            <div style={{backgroundColor: '#0f2e48', padding: '10px'}}>
              <div style={{fontWeight:'bold', color: '#fff', paddingBottom: '5px', borderBottom: '1px solid #3a5a75'}}>Color code</div>
              <div style={styles.shotContainer}>
                <div style={styles.shotImage}>
                  <img src={Goldeneye_shot_scheme} alt="Goldeneye shot scheme" style={{width: '500px', height: '444px', objectFit: 'contain'}} />
                </div>
                <div style={styles.shotInfo}>
                  No Color - Every hit will kill the animal
                </div>
              </div>
            </div>

            {/* TIPS */}
            <h2 id="tips" style={styles.h2}>Tips</h2>
            <p>
              Ducks will fly against the wind when making a landing, so be mindful of the wind direction. If you are going to use blinds and decoys, place your decoys approximately 50ms (54yds) away from your blind so the <strong>Goldeneye</strong> won't fly on top of you and spook.
            </p>

            {/* PLUMAGE VARIANTS (Gallery) */}
            <h2 id="plumage-variants" style={styles.h2}>Plumage Variants</h2>

            <h3 id="plumage-male" style={styles.h3}>Male</h3>
            <div style={styles.galleryGrid}>
              {malePlumageImages.map((img, i) => (
                <div key={i} style={styles.galleryItem}>
                  <img src={img.src} alt={img.name} style={{width: '146px', height: '165px', objectFit: 'cover', border: '4px solid #1f3a52', marginBottom: '8px'}} />
                  <span style={styles.galleryLabel}>{img.name}</span>
                </div>
              ))}
            </div>

            <h3 id="plumage-female" style={styles.h3}>Female</h3>
            <div style={styles.galleryGrid}>
              {femalePlumageImages.map((img, i) => (
                <div key={i} style={styles.galleryItem}>
                  <img src={img.src} alt={img.name} style={{width: '146px', height: '165px', objectFit: 'cover', border: '4px solid #1f3a52', marginBottom: '8px'}} />
                  <span style={styles.galleryLabel}>{img.name}</span>
                </div>
              ))}
            </div>

            {/* PLUMAGE RARITY TABLE */}
            <h2 id="plumage-rarity" style={styles.h2}>Plumage Variant Rarity</h2>
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
                    {/* Male Row */}
                    <tr>
                        <td style={{...styles.td, color: '#9b59b6', fontStyle: 'italic'}}>Male</td>
                        <td style={styles.td}>
                            Black (99.53%)
                        </td>
                        <td style={styles.td}>X</td>
                        <td style={styles.td}>Eclipse (0.27%)</td>
                        <td style={styles.td}>
                            Leucistic Variation 1 (0.07%)<br/>
                            Leucistic Variation 2 (0.07%)<br/>
                            Hybrid Variation 1 (0.03%)<br/>
                            Hybrid Variation 2 (0.03%)
                        </td>
                    </tr>
                    {/* Female Row */}
                    <tr>
                        <td style={{...styles.td, color: '#e91e63', fontStyle: 'italic'}}>Female</td>
                        <td style={styles.td}>
                            Grey (99.60%)
                        </td>
                        <td style={styles.td}>X</td>
                        <td style={styles.td}>Dark (0.27%)</td>
                        <td style={styles.td}>
                            Leucistic Variation 1 (0.07%)<br/>
                            Leucistic Variation 2 (0.07%)
                        </td>
                    </tr>
                </tbody>
            </table>

            {/* TRIVIA */}
            <h2 id="trivia" style={styles.h2}>Trivia</h2>
            <ul style={{paddingLeft: '20px', marginBottom: '30px'}}>
                <li style={{marginBottom:'8px'}}>In Finnish, the Goldeneye is called <em>Telkkä</em>.</li>
                <li style={{marginBottom:'8px'}}>The Goldeneye beats its wings at such a high rate, 9 wingbeats per second, that they make a "whistling" sound when in flight. This has earned it the nickname, <em>the whistler</em>. As Earnest Hemingway put it, "..<em>their wings sibilant, make the sound of ripping silk</em>."[1][2]</li>
                <li style={{marginBottom:'8px'}}>These ducks are very agile; only needing about 3 to 6 feet of runway to take off from the water.</li>
                <li style={{marginBottom:'8px'}}>The Goldeneye is a very territorial and aggressive bird. Both males and females fight over food, breeding, and even brooding rights. Even hatchlings have to deal with their parents' territorial nature. It is not uncommon for hatchlings to get separated from their mother in the middle of a territorial dispute, only to join another female's brood called a 'Creche'. It is not uncommon for a mother Goldeneye to abandon their brood entirely.[3][4]</li>
                <li>The Genus name for this bird <em>Bucephala</em>, loosely translates to <em>bullheaded</em> in Greek.[5]</li>
            </ul>

            {/* REFERENCES */}
            <h2 id="references" style={styles.h2}>References</h2>
            <ol style={{paddingLeft: '25px', color: '#6fb2e6'}}>
                <li><span style={styles.link}>https://www.rosamondgiffordzoo.org/experience/animals/birds/american-common-goldeneye/</span></li>
                <li><span style={styles.link}>https://www.birdnote.org/podcasts/birdnote-daily/goldeneyes-and-whistling-wings</span></li>
                <li><span style={styles.link}>https://www.allaboutbirds.org/guide/Common_Goldeneye/overview</span></li>
                <li><span style={styles.link}>https://www.allaboutbirds.org/guide/Common_Goldeneye/lifehistory</span></li>
                <li><span style={styles.link}>https://www.merriam-webster.com/dictionary/Bucephala</span></li>
            </ol>

            <AnimalsTableMini />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Goldeneye;