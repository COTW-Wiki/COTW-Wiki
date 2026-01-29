import React from 'react';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import class1Icon from '../../../assets/Class1Icon.webp';
import AnimalsTableMini from '../../../components/AnimalsTableMini';

// Eurasian Wigeon assets (front/back variants)
import EurasianWigeon_BrownMaleFront from '../../../assets/EurasianWigeon_BrownMaleFront.webp';
import EurasianWigeon_BrownMaleBack from '../../../assets/EurasianWigeon_BrownMaleBack.webp';
import EurasianWigeon_BrownFemaleFront from '../../../assets/EurasianWigeon_BrownFemaleFront.webp';
import EurasianWigeon_BrownFemaleBack from '../../../assets/EurasianWigeon_BrownFemaleBack.webp';
import EurasianWigeon_EclipseMaleFront from '../../../assets/EurasianWigeon_EclipseMaleFront.webp';
import EurasianWigeon_EclipseMaleBack from '../../../assets/EurasianWigeon_EclipseMaleBack.webp';
import EurasianWigeon_GreyMaleFront from '../../../assets/EurasianWigeon_GreyMaleFront.webp';
import EurasianWigeon_GreyMaleBack from '../../../assets/EurasianWigeon_GreyMaleBack.webp';
import EurasianWigeon_GreyFemaleFront from '../../../assets/EurasianWigeon_GreyFemaleFront.webp';
import EurasianWigeon_GreyFemaleBack from '../../../assets/EurasianWigeon_GreyFemaleBack.webp';
import EurasianWigeon_HybridMaleFront from '../../../assets/EurasianWigeon_HybridMaleFront.webp';
import EurasianWigeon_HybridMaleBack from '../../../assets/EurasianWigeon_HybridMaleBack.webp';
import EurasianWigeon_LeucisticVariation1MaleFront from '../../../assets/EurasianWigeon_LeucisticVariation1MaleFront.webp';
import EurasianWigeon_LeucisticVariation1MaleBack from '../../../assets/EurasianWigeon_LeucisticVariation1MaleBack.webp';
import EurasianWigeon_LeucisticVariation1FemaleFront from '../../../assets/EurasianWigeon_LeucisticVariation1FemaleFront.webp';
import EurasianWigeon_LeucisticVariation1FemaleBack from '../../../assets/EurasianWigeon_LeucisticVariation1FemaleBack.webp';
import EurasianWigeonImg from '../../../assets/EurasianWigeon.webp';


const EurasianWigeon = () => {
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
    { label: "Behavior", value: "Gregarious, skittish" },
    { label: "Habitat", value: "Freshwater ponds and lakes" },
    { label: "Senses", value: "Excellent vision" },
    { label: "Social", value: "Mixed groups most of the year, mated pairs during breeding season" },
    { label: "Active", value: "Intermittently throughout day and night" },
    { label: "Recommended Equipment", value: "Class 1 Ammo, Eurasian Wigeon Decoys and Caller" },
    { label: "Species", value: "Mareca penelope", italic: true },
    { label: "Difficulty", value: "Easy" },
  ];

  // Plumage Variants (Male)
  const plumageMale = [
    { name: "Brown - Front", color: "#5d4037" },
    { name: "Brown - Back", color: "#4e342e" },
    { name: "Eclipse - Front", color: "#8d6e63" },
    { name: "Eclipse - Back", color: "#6d4c41" },
    { name: "Grey - Front", color: "#78909c" },
    { name: "Grey - Back", color: "#546e7a" },
    { name: "Hybrid - Front", color: "#455a64" },
    { name: "Hybrid - Back", color: "#37474f" },
    { name: "Leucistic Variation 1 - Front", color: "#cfd8dc" },
    { name: "Leucistic Variation 1 - Back", color: "#b0bec5" },
    { name: "Leucistic Variation 2 - Front", color: "#cfd8dc" },
    { name: "Leucistic Variation 2 - Back", color: "#b0bec5" },
  ];

  // Plumage Variants (Female)
  const plumageFemale = [
    { name: "Brown - Front", color: "#5d4037" },
    { name: "Brown - Back", color: "#4e342e" },
    { name: "Grey - Front", color: "#78909c" },
    { name: "Grey - Back", color: "#546e7a" },
    { name: "Leucistic Variation 1 - Front", color: "#cfd8dc" },
    { name: "Leucistic Variation 1 - Back", color: "#b0bec5" },
    { name: "Leucistic Variation 2 - Front", color: "#cfd8dc" },
    { name: "Leucistic Variation 2 - Back", color: "#b0bec5" },
  ];

  // Actual image sets for gallery (front/back)
  const malePlumageImages = [
    { name: 'Brown - Front', src: EurasianWigeon_BrownMaleFront },
    { name: 'Brown - Back', src: EurasianWigeon_BrownMaleBack },
    { name: 'Eclipse - Front', src: EurasianWigeon_EclipseMaleFront },
    { name: 'Eclipse - Back', src: EurasianWigeon_EclipseMaleBack },
    { name: 'Grey - Front', src: EurasianWigeon_GreyMaleFront },
    { name: 'Grey - Back', src: EurasianWigeon_GreyMaleBack },
    { name: 'Hybrid - Front', src: EurasianWigeon_HybridMaleFront },
    { name: 'Hybrid - Back', src: EurasianWigeon_HybridMaleBack },
    { name: 'Leucistic Variation 1 - Front', src: EurasianWigeon_LeucisticVariation1MaleFront },
    { name: 'Leucistic Variation 1 - Back', src: EurasianWigeon_LeucisticVariation1MaleBack },
  ];

  const femalePlumageImages = [
    { name: 'Brown - Front', src: EurasianWigeon_BrownFemaleFront },
    { name: 'Brown - Back', src: EurasianWigeon_BrownFemaleBack },
    { name: 'Grey - Front', src: EurasianWigeon_GreyFemaleFront },
    { name: 'Grey - Back', src: EurasianWigeon_GreyFemaleBack },
    { name: 'Leucistic Variation 1 - Front', src: EurasianWigeon_LeucisticVariation1FemaleFront },
    { name: 'Leucistic Variation 1 - Back', src: EurasianWigeon_LeucisticVariation1FemaleBack },
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
          <span>Eurasian Wigeon</span>
          <div style={styles.editActions}>

          </div>
        </div>

        <div style={styles.layout}>
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside style={styles.sidebarColumn}>
            <div style={styles.sidebarHeader}>Eurasian Wigeon</div>
            <div style={styles.sidebarImage}>
              <img src={EurasianWigeonImg} alt="Eurasian Wigeon" style={{width: '268.4px', height: '134.2px', objectFit: 'cover'}} />
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
                   <span>590</span>
                </div>
                <div style={styles.trophyItem}>
                   <span style={{...styles.trophyLabel, ...styles.gold}}>☗ Gold</span>
                   <span>770</span>
                </div>
                <div style={styles.trophyItem}>
                   <span style={{...styles.trophyLabel, ...styles.diamond}}>☗ Diamond</span>
                   <span>905</span>
                </div>
              </div>
            </div>

            <div style={styles.sidebarSection}>
               <span style={styles.sidebarLabel}>Weight</span>
               500g — 920g<br/>
               1.1lbs — 2lbs
            </div>

            <div style={styles.sidebarSection}>
               <span style={styles.sidebarLabel}>Plumage</span>
               <span style={{fontSize: '0.85rem'}}>
                 Brown, Dark, Eclipse, Grey, Hybrid, Leucistic
               </span>
            </div>

            <div style={styles.sidebarHeader}>Locations</div>
            <div style={styles.sidebarSection}>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Vurhonga Savanna</span></div>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Revontuli Coast</span></div>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Salzwiesen Park</span></div>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Tòrr nan Sithean</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main style={styles.mainColumn}>

            {/* Quote Block */}
            <div style={styles.quoteBox}>
              "The Eurasian wigeon is a medium-sized dabbling duck commonly found across northern Eurasia. It is closely related to the American wigeon and the two species can sometimes interbreed when two populations come into contact with one another. The Eurasian wigeon is found mainly in Nordic countries and Russia during the breeding season, but in warmer areas in Europe, Asia, Africa and North America during winter. This duck is easily recognizable based on the rounded shape of its head and a large white patch on the wings of the males, that remains present even in their eclipse plumage."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p style={{marginBottom: '20px'}}>
              The <strong>Eurasian Wigeon</strong> is a <span style={styles.link}>class 1</span> duck that can be hunted on <span style={styles.link}>Revontuli Coast</span>, <span style={styles.link}>Vurhonga Savanna</span>, <span style={styles.link}>Salzwiesen Park</span>, and <span style={styles.link}>Tòrr nan Sithean</span>.
            </p>

            {/* Table of Contents (page-specific) */}
            {(() => {
              const tocItems = [
                { id: 'features', label: 'Features' },
                { id: 'need-zones', label: 'Need Zone Times' },
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
                  toggleBtn: { color: '#6fb2e6', fontSize: '0.85em' },
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
                    <div style={stylesTOC.header}>
                      <div style={stylesTOC.title}>Contents</div>
                    </div>
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
                    <td style={styles.td}><img src={zone.icon} alt={zone.type} style={{width: '30px', height: '30px', verticalAlign: 'middle', marginRight: '8px'}}/>{zone.type}</td>
                  </tr>
                  ))}
                    </tbody>
                </table>
            </div>

            {/* TIPS */}
            <h2 id="tips" style={styles.h2}>Tips</h2>
            <p>
              Ducks will fly against the wind when making a landing, so be mindful of the wind direction. If you are going to use blinds and decoys, place your decoys approximately 50ms (54yds) away from your blind so the <strong>Eurasian Widgeon</strong> won't fly on top of you and spook.
            </p>

            {/* Shot scheme removed per request */}

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
                            Brown (49.80%)<br/>
                            Grey (49.80%)
                        </td>
                        <td style={styles.td}>X</td>
                        <td style={styles.td}>Eclipse (0.27%)</td>
                        <td style={styles.td}>
                            Leucistic Variation 1 (0.04%)<br/>
                            Leucistic Variation 2 (0.04%)<br/>
                            Hybrid (0.04%)
                        </td>
                    </tr>
                    {/* Female Row */}
                    <tr>
                        <td style={{...styles.td, color: '#e91e63', fontStyle: 'italic'}}>Female</td>
                        <td style={styles.td}>
                            Brown (49.82%)<br/>
                            Grey (49.82%)
                        </td>
                        <td style={styles.td}>X</td>
                        <td style={styles.td}>Dark (0.27%)</td>
                        <td style={styles.td}>
                            Leucistic Variation 1 (0.04%)<br/>
                            Leucistic Variation 2 (0.04%)
                        </td>
                    </tr>
                </tbody>
            </table>

            {/* TRIVIA */}
            <h2 id="trivia" style={styles.h2}>Trivia</h2>
            <ul style={{paddingLeft: '20px', marginBottom: '30px'}}>
                <li style={{marginBottom:'8px'}}>The word <em>wigeon</em>, like most words in etymology, is of unknown origin. However, it may come from a French word 'vigeon' meaning <em>small crane</em>.[1]</li>
                <li style={{marginBottom:'8px'}}>The Eurasian Widgeon's scientific name <em>penelope</em> is a reference to a Greek Myth in which the Ithacan Queen Penelope was saved by a duck.[2]</li>
                <li>The Eurasian Widgeon is one of many species retroactively added to certain maps with the "Granite Update". Other species in this list include, the <span style={styles.link}>Ring-Necked Pheasant</span>, <span style={styles.link}>Merriam Turkey</span>, <span style={styles.link}>Gray Wolf</span>, <span style={styles.link}>Western Capercaillie</span>, <span style={styles.link}>Canada Goose</span>, <span style={styles.link}>Collared Peccary</span>, <span style={styles.link}>Mallard</span>, <span style={styles.link}>Pronghorn</span>, and the <span style={styles.link}>Green Winged Teal</span>. The Eurasian Widgeon was added to <span style={styles.link}>Vurhonga Savanna</span> specifically.</li>
            </ul>

            {/* REFERENCES */}
            <h2 id="references" style={styles.h2}>References</h2>
            <ol style={{paddingLeft: '25px', color: '#6fb2e6'}}>
                <li><span style={styles.link}>https://www.etymonline.com/word/widgeon</span></li>
                <li><span style={styles.link}>https://www.allaboutbirds.org/guide/Eurasian_Wigeon/overview</span></li>
            </ol>

            <AnimalsTableMini />
          </main>
        </div>
      </div>
    </div>
  );
};

export default EurasianWigeon;