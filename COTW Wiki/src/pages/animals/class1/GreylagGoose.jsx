import React from 'react';
import AnimalsTableMini from '../../../components/AnimalsTableMini';
import GreylagGooseXRay from '../../../assets/Greylag_Goose_shot_scheme.webp';
import GreylagGooseImg from '../../../assets/GreylagGoose.webp';
import GreylagGooseIcon from '../../../assets/GreylagGooseIcon.webp';
import GreylagGoose_BrownFront from '../../../assets/GreylagGoose_BrownFront.webp';
import GreylagGoose_BrownBack from '../../../assets/GreylagGoose_BrownBack.webp';
import GreylagGoose_GreyFront from '../../../assets/GreylagGoose_GreyFront.webp';
import GreylagGoose_GreyBack from '../../../assets/GreylagGoose_GreyBack.webp';
import GreylagGoose_HybridFront from '../../../assets/GreylagGoose_HybridFront.webp';
import GreylagGoose_HybridBack from '../../../assets/GreylagGoose_HybridBack.webp';
import GreylagGoose_LeucisticVariation1Front from '../../../assets/GreylagGoose_LeucisticVariation1Front.webp';
import GreylagGoose_LeucisticVariation1Back from '../../../assets/GreylagGoose_LeucisticVariation1Back.webp';
import GreylagGoose_LeucisticVariation2Front from '../../../assets/GreylagGoose_LeucisticVariation2Front.webp';
import GreylagGoose_LeucisticVariation2Back from '../../../assets/GreylagGoose_LeucisticVariation2Back.webp';
import GreylagGoose_LeucisticVariation3Front from '../../../assets/GreylagGoose_LeucisticVariation3Front.webp';
import GreylagGoose_LeucisticVariation3Back from '../../../assets/GreylagGoose_LeucisticVariation3Back.webp';
import GreylagGoose_LeucisticVariation4Front from '../../../assets/GreylagGoose_LeucisticVariation4Front.webp';
import GreylagGoose_LeucisticVariation4Back from '../../../assets/GreylagGoose_LeucisticVariation4Back.webp';
import GreylagGoose_LeucisticVariation5Front from '../../../assets/GreylagGoose_LeucisticVariation5Front.webp';
import GreylagGoose_LeucisticVariation5Back from '../../../assets/GreylagGoose_LeucisticVariation5Back.webp';
import GreylagGooseDecoySentry from '../../../assets/GreylagGooseDecoySentry.webp';
import GreylagGooseDecoyFeeding from '../../../assets/GreylagGooseDecoyFeeding.webp';
import GreylagGooseDecoySearching from '../../../assets/GreylagGooseDecoySearching.webp';
import BeaconDeluxeGreylagGooseCaller from '../../../assets/BeaconDeluxeGreylagGooseCaller.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import class1Icon from '../../../assets/Class1Icon.webp';

const GreylagGoose = () => {
  // --- DATA SOURCES ---
  
  // Need Zones for two maps as seen in the screenshot
  const needZones = {
    revontuli: [
      { time: "00:00 - 05:30", type: "Resting", icon: "💤" },
      { time: "05:00 - 07:30", type: "Feeding", icon: "🍃" },
      { time: "07:00 - 09:30", type: "Resting", icon: "💤" },
      { time: "09:00 - 11:30", type: "Feeding", icon: "🍃" },
      { time: "11:00 - 13:30", type: "Resting", icon: "💤" },
      { time: "13:00 - 15:30", type: "Feeding", icon: "🍃" },
      { time: "15:00 - 17:30", type: "Resting", icon: "💤" },
      { time: "17:00 - 19:30", type: "Feeding", icon: "🍃" },
      { time: "19:00 - 00:30", type: "Resting", icon: "💤" },
    ],
    sundarpatan: [
      { time: "00:00 - 05:00", type: "Resting", icon: "💤" },
      { time: "05:00 - 07:00", type: "Feeding", icon: "🍃" },
      { time: "07:00 - 09:00", type: "Resting", icon: "💤" },
      { time: "09:00 - 11:00", type: "Feeding", icon: "🍃" },
      { time: "11:00 - 13:00", type: "Resting", icon: "💤" },
      { time: "13:00 - 15:00", type: "Feeding", icon: "🍃" },
      { time: "15:00 - 17:00", type: "Resting", icon: "💤" },
      { time: "17:00 - 19:00", type: "Feeding", icon: "🍃" },
      { time: "19:00 - 00:00", type: "Resting", icon: "💤" },
    ]
  };

  const features = [
    { label: "Behavior", value: "Gregarious, eats a lot to prepare migration" },
    { label: "Habitat", value: "Fields, open grasslands, freshwater bodies" },
    { label: "Senses", value: "Excellent vision, good hearing and smell" },
    { label: "Social", value: "Aggregate in large flocks before migration" },
    { label: "Active", value: "Feeds throughout the day, with intermittent rest" },
    { label: "Recommended Equipment", value: "Class 1 Ammo, Greylag Goose Decoys and Caller" },
    { label: "Species", value: "Anser anser", italic: true },
    { label: "Difficulty", value: "Easy" },
  ];

  const plumageImages = [
    { name: "Brown - Front", color: "#4e342e" },
    { name: "Brown - Back", color: "#3e2723" },
    { name: "Grey - Front", color: "#757575" },
    { name: "Grey - Back", color: "#616161" },
    { name: "Hybrid - Front", color: "#5d4037" },
    { name: "Hybrid - Back", color: "#4e342e" },
    { name: "Leucistic Variation 1 - Front", color: "#bdbdbd" },
    { name: "Leucistic Variation 1 - Back", color: "#9e9e9e" },
    { name: "Leucistic Variation 2 - Front", color: "#bdbdbd" },
    { name: "Leucistic Variation 2 - Back", color: "#9e9e9e" },
    { name: "Leucistic Variation 3 - Front", color: "#bdbdbd" },
    { name: "Leucistic Variation 3 - Back", color: "#9e9e9e" },
    { name: "Leucistic Variation 4 - Front", color: "#bdbdbd" },
    { name: "Leucistic Variation 4 - Back", color: "#9e9e9e" },
    { name: "Leucistic Variation 5 - Front", color: "#bdbdbd" },
    { name: "Leucistic Variation 5 - Back", color: "#9e9e9e" },
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
    
    // Zone Flex Container
    zoneContainer: {
        display: 'flex',
        gap: '20px',
        flexWrap: 'wrap'
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
          <span>Greylag Goose</span>
          <div style={styles.editActions}>

          </div>
        </div>

        <div style={styles.layout}>
          
          {/* --- RIGHT SIDEBAR --- */}
          <aside style={styles.sidebarColumn}>
            <div style={styles.sidebarHeader}>Greylag Goose</div>
            <div style={styles.sidebarImage}>
              <img src={GreylagGooseImg} alt="Greylag Goose" style={{width: '268.4px', height: '134.2px', objectFit: 'cover', borderRadius: '4px'}} />
              <span style={{position:'absolute', bottom:'5px', right:'5px', fontSize:'0.8rem'}}>📷</span>
            </div>
            
            <div style={styles.sidebarHeader}>General Information</div>
            
            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Class</span>
              <div style={{display: 'flex', alignItems: 'center', gap: '6px'}}>
                <img src={class1Icon} alt="Class 1" style={{width: '15px', height: '15px'}} />
                <span>1</span>
              </div>
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
                   <span>2.80</span>
                </div>
                <div style={styles.trophyItem}>
                   <span style={{...styles.trophyLabel, ...styles.gold}}>☗ Gold</span>
                   <span>3.40</span>
                </div>
                <div style={styles.trophyItem}>
                   <span style={{...styles.trophyLabel, ...styles.diamond}}>☗ Diamond</span>
                   <span>3.85</span>
                </div>
              </div>
            </div>

            <div style={styles.sidebarSection}>
               <span style={styles.sidebarLabel}>Weight</span>
               2.5kg — 4kg<br/>
               6lbs — 9lbs
            </div>

            <div style={styles.sidebarSection}>
               <span style={styles.sidebarLabel}>Plumage</span>
               <span style={{fontSize: '0.85rem'}}>
                 Brown, Grey, Hybrid, Leucistic
               </span>
            </div>

            <div style={styles.sidebarHeader}>Locations</div>
            <div style={styles.sidebarSection}>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Revontuli Coast</span></div>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Sundarpatan</span></div>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Salzwiesen Park</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main style={styles.mainColumn}>

            {/* Quote Block */}
            <div style={styles.quoteBox}>
              "The Greylag Goose is a large Eurasian goose species. It is very common throughout its natural range, and is the ancestor of most domesticated breeds as a result. Greylag Geese live in mated pairs and familial groups during the breeding season, but in the autumn they gather in large flocks to prepare for their yearly migration. These large flocks spend the best part of the day feeding in preparation for the long flight ahead."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p style={{marginBottom: '20px'}}>
              The <strong>Greylag Goose</strong> is a <span style={styles.link}>class 1</span> goose that can be hunted on <span style={styles.link}>Revontuli Coast</span>, <span style={styles.link}>Sundarpatan</span> and <span style={styles.link}>Salzwiesen Park</span>.
            </p>

            {/* Table of Contents (page-specific) */}
            {(() => {
              const tocItems = [
                { id: 'features', label: 'Features' },
                { id: 'tips', label: 'Tips' },
                { id: 'need-zones', label: 'Need Zone Times' },
                { id: 'shot-scheme', label: 'Shot scheme' },
                { id: 'plumage-variants', label: 'Plumage Variants' },
                { id: 'plumage-rarity', label: 'Plumage Variant Rarity' },
                { id: 'trivia', label: 'Trivia' },
                { id: 'references', label: 'References' },
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

            {/* TIPS */}
            <h2 id="tips" style={styles.h2}>Tips</h2>
            <p style={{marginBottom: '10px'}}>
              Hunting Geese is similar to hunting other waterfowl. The added benefit being, you can hunt Geese in open fields. Fields give players the freedom to place decoys as far away from a blind as possible, as compared to water which has limits on how far away from shore you can place decoys.
            </p>
            <p>
              Find an open area to place decoys and try and place the decoys approximately 50m (54yds) away from your blind. Be mindful that geese will fly into the wind when they land.
            </p>

            {/* NEED ZONES */}
            <h2 id="need-zones" style={styles.h2}>Need Zone Times</h2>
            <div style={styles.zoneContainer}>
                
                {/* Revontuli Coast Table */}
                <table style={{...styles.table, width: '300px'}}>
                    <thead>
                        <tr><th colSpan="2" style={{...styles.th, textAlign: 'center'}}>Revontuli Coast</th></tr>
                        <tr>
                            <th style={{...styles.th, backgroundColor: '#0f2e48'}}>Time</th>
                            <th style={{...styles.th, backgroundColor: '#0f2e48'}}>Activity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {needZones.revontuli.map((zone, i) => (
                        <tr key={i}>
                            <td style={styles.td}>{zone.time}</td>
                            <td style={styles.td}>
                              <img src={zone.type === 'Resting' ? RestingZoneIcon : FeedingZoneIcon} alt={zone.type} style={{width: '30px', height: '30px', verticalAlign: 'middle', marginRight: '8px'}} />
                              {zone.type}
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>

                {/* Sundarpatan Table */}
                <table style={{...styles.table, width: '300px'}}>
                    <thead>
                        <tr><th colSpan="2" style={{...styles.th, textAlign: 'center'}}>Sundarpatan<sup>[1]</sup></th></tr>
                        <tr>
                            <th style={{...styles.th, backgroundColor: '#0f2e48'}}>Time</th>
                            <th style={{...styles.th, backgroundColor: '#0f2e48'}}>Activity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {needZones.sundarpatan.map((zone, i) => (
                        <tr key={i}>
                            <td style={styles.td}>{zone.time}</td>
                            <td style={styles.td}>
                              <img src={zone.type === 'Resting' ? RestingZoneIcon : FeedingZoneIcon} alt={zone.type} style={{width: '30px', height: '30px', verticalAlign: 'middle', marginRight: '8px'}} />
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
                    <div style={{...styles.shotImage, width: '500px', height: '444px', minWidth: '500px', minHeight: '444px', maxWidth: '500px', maxHeight: '444px', padding: 0, backgroundColor: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                      <img src={GreylagGooseXRay} alt="Greylag Goose X-Ray" style={{width: '500px', height: '444px', objectFit: 'cover', borderRadius: '4px'}} />
                    </div>
                    <div style={styles.shotInfo}>
                      No Color - Every hit will kill the animal
                    </div>
                  </div>
            </div>

            {/* PLUMAGE VARIANTS (Gallery) */}
            <h2 id="plumage-variants" style={styles.h2}>Plumage Variants</h2>
            <div style={{display:'flex', flexWrap:'wrap', gap:'10px'}}>
              {/* Front-view images (146x165) */}
              <div style={{width:'146px', textAlign:'center'}}>
                <img src={GreylagGoose_BrownFront} alt="Brown - Front" style={{width:'146px', height:'165px', objectFit:'cover', borderRadius:'4px', marginBottom:'5px'}} />
                <span style={styles.galleryLabel}>Brown - Front</span>
              </div>
              <div style={{width:'146px', textAlign:'center'}}>
                <img src={GreylagGoose_GreyFront} alt="Grey - Front" style={{width:'146px', height:'165px', objectFit:'cover', borderRadius:'4px', marginBottom:'5px'}} />
                <span style={styles.galleryLabel}>Grey - Front</span>
              </div>
              <div style={{width:'146px', textAlign:'center'}}>
                <img src={GreylagGoose_HybridFront} alt="Hybrid - Front" style={{width:'146px', height:'165px', objectFit:'cover', borderRadius:'4px', marginBottom:'5px'}} />
                <span style={styles.galleryLabel}>Hybrid - Front</span>
              </div>
              <div style={{width:'146px', textAlign:'center'}}>
                <img src={GreylagGoose_LeucisticVariation1Front} alt="Leucistic 1 - Front" style={{width:'146px', height:'165px', objectFit:'cover', borderRadius:'4px', marginBottom:'5px'}} />
                <span style={styles.galleryLabel}>Leucistic 1 - Front</span>
              </div>
              <div style={{width:'146px', textAlign:'center'}}>
                <img src={GreylagGoose_LeucisticVariation2Front} alt="Leucistic 2 - Front" style={{width:'146px', height:'165px', objectFit:'cover', borderRadius:'4px', marginBottom:'5px'}} />
                <span style={styles.galleryLabel}>Leucistic 2 - Front</span>
              </div>
              <div style={{width:'146px', textAlign:'center'}}>
                <img src={GreylagGoose_LeucisticVariation3Front} alt="Leucistic 3 - Front" style={{width:'146px', height:'165px', objectFit:'cover', borderRadius:'4px', marginBottom:'5px'}} />
                <span style={styles.galleryLabel}>Leucistic 3 - Front</span>
              </div>
              <div style={{width:'146px', textAlign:'center'}}>
                <img src={GreylagGoose_LeucisticVariation4Front} alt="Leucistic 4 - Front" style={{width:'146px', height:'165px', objectFit:'cover', borderRadius:'4px', marginBottom:'5px'}} />
                <span style={styles.galleryLabel}>Leucistic 4 - Front</span>
              </div>
              <div style={{width:'146px', textAlign:'center'}}>
                <img src={GreylagGoose_LeucisticVariation5Front} alt="Leucistic 5 - Front" style={{width:'146px', height:'165px', objectFit:'cover', borderRadius:'4px', marginBottom:'5px'}} />
                <span style={styles.galleryLabel}>Leucistic 5 - Front</span>
              </div>
            </div>

            <div style={{display:'flex', flexWrap:'wrap', gap:'10px', marginTop:'8px'}}>
              {/* Back-view images (146x165) */}
              <div style={{width:'146px', textAlign:'center'}}>
                <img src={GreylagGoose_BrownBack} alt="Brown - Back" style={{width:'146px', height:'165px', objectFit:'cover', borderRadius:'4px', marginBottom:'5px'}} />
                <span style={styles.galleryLabel}>Brown - Back</span>
              </div>
              <div style={{width:'146px', textAlign:'center'}}>
                <img src={GreylagGoose_GreyBack} alt="Grey - Back" style={{width:'146px', height:'165px', objectFit:'cover', borderRadius:'4px', marginBottom:'5px'}} />
                <span style={styles.galleryLabel}>Grey - Back</span>
              </div>
              <div style={{width:'146px', textAlign:'center'}}>
                <img src={GreylagGoose_HybridBack} alt="Hybrid - Back" style={{width:'146px', height:'165px', objectFit:'cover', borderRadius:'4px', marginBottom:'5px'}} />
                <span style={styles.galleryLabel}>Hybrid - Back</span>
              </div>
              <div style={{width:'146px', textAlign:'center'}}>
                <img src={GreylagGoose_LeucisticVariation1Back} alt="Leucistic 1 - Back" style={{width:'146px', height:'165px', objectFit:'cover', borderRadius:'4px', marginBottom:'5px'}} />
                <span style={styles.galleryLabel}>Leucistic 1 - Back</span>
              </div>
              <div style={{width:'146px', textAlign:'center'}}>
                <img src={GreylagGoose_LeucisticVariation2Back} alt="Leucistic 2 - Back" style={{width:'146px', height:'165px', objectFit:'cover', borderRadius:'4px', marginBottom:'5px'}} />
                <span style={styles.galleryLabel}>Leucistic 2 - Back</span>
              </div>
              <div style={{width:'146px', textAlign:'center'}}>
                <img src={GreylagGoose_LeucisticVariation3Back} alt="Leucistic 3 - Back" style={{width:'146px', height:'165px', objectFit:'cover', borderRadius:'4px', marginBottom:'5px'}} />
                <span style={styles.galleryLabel}>Leucistic 3 - Back</span>
              </div>
              <div style={{width:'146px', textAlign:'center'}}>
                <img src={GreylagGoose_LeucisticVariation4Back} alt="Leucistic 4 - Back" style={{width:'146px', height:'165px', objectFit:'cover', borderRadius:'4px', marginBottom:'5px'}} />
                <span style={styles.galleryLabel}>Leucistic 4 - Back</span>
              </div>
              <div style={{width:'146px', textAlign:'center'}}>
                <img src={GreylagGoose_LeucisticVariation5Back} alt="Leucistic 5 - Back" style={{width:'146px', height:'165px', objectFit:'cover', borderRadius:'4px', marginBottom:'5px'}} />
                <span style={styles.galleryLabel}>Leucistic 5 - Back</span>
              </div>
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
                    <tr>
                        <td style={{...styles.td, color: '#9b59b6', fontStyle: 'italic'}}>Male/Female</td>
                        <td style={styles.td}>
                            Brown (74.94%)<br/>
                            Grey (24.98%)
                        </td>
                        <td style={styles.td}>X</td>
                        <td style={styles.td}>X</td>
                        <td style={styles.td}>
                            Hybrid (0.01%)<br/>
                            Leucistic Variation 1 (0.01%)<br/>
                            Leucistic Variation 2 (0.01%)<br/>
                            Leucistic Variation 3 (0.01%)<br/>
                            Leucistic Variation 4 (0.01%)<br/>
                            Leucistic Variation 5 (0.01%)
                        </td>
                    </tr>
                </tbody>
            </table>

            {/* TRIVIA */}
            <h2 id="trivia" style={styles.h2}>Trivia</h2>
            <ul style={{paddingLeft: '20px', marginBottom: '30px'}}>
                <li style={{marginBottom:'8px'}}>The origins of the name <em>Greylag</em> is mysterious. Most people believe that the <em>lag</em> part in <em>Greylag</em> comes simply from the fact that Greylag Goose "lag" behind other goose species when it comes to starting their migration.[2]</li>
                <li style={{marginBottom:'8px'}}>The Greylag goose is the largest member of the genus <em>Anser</em>, making it the largest native goose species in Europe. It is only surpassed by the recently introduced <span style={styles.link}>Canada Goose</span>.[3]</li>
                <li>Geese were often associated with fertility and "good times". Not only were they associated with many fertility goddesses, but even their fat was considered a strong aphrodisiac in ancient times.[4][5]</li>
            </ul>

            {/* REFERENCES */}
            <h2 id="references" style={styles.h2}>References</h2>
            <ol style={{paddingLeft: '25px', color: '#6fb2e6'}}>
                <li><span style={styles.link}>Greylag Goose Need Zones, Sundarpatan</span></li>
                <li><span style={styles.link}>https://www.dictionary.com/browse/greylag</span></li>
                <li><span style={styles.link}>https://en.wikipedia.org/wiki/Greylag_goose</span></li>
                <li><span style={styles.link}>http://galsonestate.pbworks.com/w/page/5401103/Greylag%20Goose</span></li>
                <li><span style={styles.link}>https://amateurnithologist.blogspot.com/2015/11/domestic-greylag-goose.html</span></li>
            </ol>

            <AnimalsTableMini />
          </main>
        </div>
      </div>
    </div>
  );
};

export default GreylagGoose;