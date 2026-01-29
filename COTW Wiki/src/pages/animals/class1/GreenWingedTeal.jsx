import React from 'react';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import class1Icon from '../../../assets/Class1Icon.webp';
import GreenWingedTealImg from '../../../assets/GreenWingedTeal.webp';
import GreenWingedTealAlbinoMaleBack from '../../../assets/GreenWingedTeal_AlbinoMaleBack.webp';
import GreenWingedTealAlbinoMaleFront from '../../../assets/GreenWingedTeal_AlbinoMaleFront.webp';
import GreenWingedTealLightGreenFemaleBack from '../../../assets/GreenWingedTeal_LightGreenFemaleBack.webp';
import GreenWingedTealLightGreenFemaleFront from '../../../assets/GreenWingedTeal_LightGreenFemaleFront.webp';
import GreenWingedTealLightGreenMaleBack from '../../../assets/GreenWingedTeal_LightGreenMaleBack.webp';
import GreenWingedTealLightGreenMaleFront from '../../../assets/GreenWingedTeal_LightGreenMaleFront.webp';
import GreenWingedTealPiebald1FemaleBack from '../../../assets/GreenWingedTeal_PiebaldVariation1FemaleBack.webp';
import GreenWingedTealPiebald1FemaleFront from '../../../assets/GreenWingedTeal_PiebaldVariation1FemaleFront.webp';
import GreenWingedTealPiebald1MaleBack from '../../../assets/GreenWingedTeal_PiebaldVariation1MaleBack.webp';
import GreenWingedTealPiebald1MaleFront from '../../../assets/GreenWingedTeal_PiebaldVariation1MaleFront.webp';
import GreenWingedTealPiebald2FemaleBack from '../../../assets/GreenWingedTeal_PiebaldVariation2FemaleBack.webp';
import GreenWingedTealPiebald2FemaleFront from '../../../assets/GreenWingedTeal_PiebaldVariation2FemaleFront.webp';
import GreenWingedTealPiebald2MaleBack from '../../../assets/GreenWingedTeal_PiebaldVariation2MaleBack.webp';
import GreenWingedTealPiebald2MaleFront from '../../../assets/GreenWingedTeal_PiebaldVariation2MaleFront.webp';
import GreenWingedTealPiebald3MaleBack from '../../../assets/GreenWingedTeal_PiebaldVariation3MaleBack.webp';
import GreenWingedTealPiebald3MaleFront from '../../../assets/GreenWingedTeal_PiebaldVariation3MaleFront.webp';
import Green_Winged_Teal_shot_scheme from '../../../assets/Green_Winged_Teal_shot_scheme.webp';
// page-local TOC will be rendered below
import AnimalsTableMini from '../../../components/AnimalsTableMini';


const GreenWingedTeal = () => {
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
    { label: "Behavior", value: "Active, gregarious and vocal" },
    { label: "Habitat", value: "Ponds, lakes, bogs, and estuaries" },
    { label: "Senses", value: "Excellent vision" },
    { label: "Social", value: "Highly gregarious, flocks migrate south in winter" },
    { label: "Active", value: "Feeds intermittently, mostly at night" },
    { label: "Recommended Equipment", value: "Class 1 Ammo, Green-winged Teal Decoys, Eurasian Teal Caller" },
    { label: "Species", value: "Anas carolinensis", italic: true },
    { label: "Difficulty", value: "Easy" },
  ];

  // Plumage Variants (Male)
  const plumageMale = [
    { name: "Albino - Front", color: "#f5f5f5" },
    { name: "Albino - Back", color: "#e0e0e0" },
    { name: "Light Green - Front", color: "#81c784" },
    { name: "Light Green - Back", color: "#66bb6a" },
    { name: "Piebald Variation 1 - Front", color: "#cfd8dc" },
    { name: "Piebald Variation 1 - Back", color: "#b0bec5" },
    { name: "Piebald Variation 2 - Front", color: "#cfd8dc" },
    { name: "Piebald Variation 2 - Back", color: "#b0bec5" },
    { name: "Piebald Variation 3 - Front", color: "#cfd8dc" },
    { name: "Piebald Variation 3 - Back", color: "#b0bec5" },
  ];

  // Plumage Variants (Female)
  const plumageFemale = [
    { name: "Light Green - Front", color: "#8d6e63" }, // Female appears brown/patterned in image despite name
    { name: "Light Green - Back", color: "#6d4c41" },
    { name: "Piebald Variation 1 - Front", color: "#d7ccc8" },
    { name: "Piebald Variation 1 - Back", color: "#bcaaa4" },
    { name: "Piebald Variation 2 - Front", color: "#d7ccc8" },
    { name: "Piebald Variation 2 - Back", color: "#bcaaa4" },
  ];

  // Mapped image sources for gallery (male / female)
  const maleImages = [
    { src: GreenWingedTealAlbinoMaleFront, label: 'Albino - Front' },
    { src: GreenWingedTealAlbinoMaleBack, label: 'Albino - Back' },
    { src: GreenWingedTealLightGreenMaleFront, label: 'Light Green - Front' },
    { src: GreenWingedTealLightGreenMaleBack, label: 'Light Green - Back' },
    { src: GreenWingedTealPiebald1MaleFront, label: 'Piebald Variation 1 - Front' },
    { src: GreenWingedTealPiebald1MaleBack, label: 'Piebald Variation 1 - Back' },
    { src: GreenWingedTealPiebald2MaleFront, label: 'Piebald Variation 2 - Front' },
    { src: GreenWingedTealPiebald2MaleBack, label: 'Piebald Variation 2 - Back' },
    { src: GreenWingedTealPiebald3MaleFront, label: 'Piebald Variation 3 - Front' },
    { src: GreenWingedTealPiebald3MaleBack, label: 'Piebald Variation 3 - Back' },
  ];

  const femaleImages = [
    { src: GreenWingedTealLightGreenFemaleFront, label: 'Light Green - Front' },
    { src: GreenWingedTealLightGreenFemaleBack, label: 'Light Green - Back' },
    { src: GreenWingedTealPiebald1FemaleFront, label: 'Piebald Variation 1 - Front' },
    { src: GreenWingedTealPiebald1FemaleBack, label: 'Piebald Variation 1 - Back' },
    { src: GreenWingedTealPiebald2FemaleFront, label: 'Piebald Variation 2 - Front' },
    { src: GreenWingedTealPiebald2FemaleBack, label: 'Piebald Variation 2 - Back' },
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
    },
    shotImage: {
      width: '500px',
      height: '444px',
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
          <span>Green Winged Teal</span>
          <div style={styles.editActions}>
          </div>
        </div>

        <div style={styles.layout}>
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside style={styles.sidebarColumn}>
            <div style={styles.sidebarHeader}>Green Winged Teal</div>
            <div style={{...styles.sidebarImage, padding:'10px'}}>
              <img src={GreenWingedTealImg} alt="Green Winged Teal" style={{width: '268.4px', height: '134.2px', objectFit: 'cover', borderRadius: '2px'}} />
              <span style={{position:'absolute', bottom:'5px', right:'5px', fontSize:'0.8rem'}}>📷</span>
            </div>
            
            <div style={styles.sidebarHeader}>General Information</div>
            
            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Class</span>
              <span><img src={class1Icon} alt="Class 1" style={{width: '18px', height: '18px', verticalAlign: 'middle', marginRight: '6px'}}/>1</span>
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
                   <span>340</span>
                </div>
                <div style={styles.trophyItem}>
                   <span style={{...styles.trophyLabel, ...styles.gold}}>☗ Gold</span>
                   <span>420</span>
                </div>
                <div style={styles.trophyItem}>
                   <span style={{...styles.trophyLabel, ...styles.diamond}}>☗ Diamond</span>
                   <span>480</span>
                </div>
              </div>
            </div>

            <div style={styles.sidebarSection}>
               <span style={styles.sidebarLabel}>Weight</span>
               ? — ?<br/>
               <span style={{fontSize: '0.85em', fontStyle:'italic'}}>(Text mentions ~260g)</span>
            </div>

            <div style={styles.sidebarSection}>
               <span style={styles.sidebarLabel}>Plumage</span>
               <span style={{fontSize: '0.85rem'}}>
                 Albino, Light Green, Piebald
               </span>
            </div>

            <div style={styles.sidebarHeader}>Locations</div>
            <div style={styles.sidebarSection}>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>New England Mountains</span></div>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Mississippi Acres Preserve</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main style={styles.mainColumn}>

            {/* Quote Block */}
            <div style={styles.quoteBox}>
              "The Green-winged Teal is the smallest dabbling duck residing in Canada and the northern states of America. Spotting the three distinctive features is essential to identifying male. A green eyestripe, bright green speculum on both wings, and lastly, a vertical white shoulder stripe. Female teals sport a light brown color with plumage much like the female mallard. Like the males, the females also exhibit the iconic green speculum.<br/><br/>
              Being a small dabbling duck, they only grow to be 31-39 cm, weighing 260 g and have a wingspan of 52-59 cm. Due to their small stature, they often stick to calmer waters such as inland lakes, marshes, ponds, pools, and shallow streams."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p style={{marginBottom: '20px'}}>
              The <strong>Green-winged Teal</strong> is a <span style={styles.link}>class 1</span> duck species that can be hunted on <span style={styles.link}>New England Mountains</span> and <span style={styles.link}>Mississippi Acres Preserve</span>.
            </p>

            {/* Table of Contents (click to smooth-scroll) */}
            <div style={{
              border: '1px solid #3a5a75', 
              backgroundColor: '#0f2e48', 
              display: 'inline-block', 
              padding: '10px 20px', 
              borderRadius: '4px',
              minWidth: '200px'
            }}>
              <div style={{fontWeight: 'bold', borderBottom: '1px solid #3a5a75', marginBottom: '5px'}}>
                🔢 Contents <span style={{float:'right', color: '#6fb2e6', fontSize: '0.8rem'}}>[hide]</span>
              </div>
              {/** TOC data and handler */}
              {(() => {
                const toc = [
                  { id: 'features', label: 'Features', subs: [] },
                  { id: 'need-zone-times', label: 'Need Zone Times', subs: [] },
                  { id: 'shot-scheme', label: 'Shot scheme', subs: [] },
                  { id: 'tips', label: 'Tips', subs: [] },
                  { id: 'plumage-variants', label: 'Plumage Variants', subs: [ { id: 'plumage-male', label: 'Male' }, { id: 'plumage-female', label: 'Female' } ] },
                  { id: 'plumage-variant-rarity', label: 'Plumage Variant Rarity', subs: [] },
                  { id: 'trivia', label: 'Trivia', subs: [] },
                ];

                const handleTOCClick = (e, id) => {
                  e.preventDefault();
                  const el = document.getElementById(id);
                  if (el && el.scrollIntoView) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    try { window.history.replaceState(null, '', `#${id}`); } catch (err) {}
                  }
                };

                return (
                  <ol style={{margin: '0', paddingLeft: '20px', color: '#6fb2e6', listStyleType: 'none'}}>
                    {toc.map((t, i) => (
                      <li key={t.id} style={{marginBottom: '6px'}}>
                        <a href={`#${t.id}`} onClick={(e) => handleTOCClick(e, t.id)} style={{color: '#6fb2e6', textDecoration: 'none'}}>{`${i+1}. ${t.label}`}</a>
                        {t.subs && t.subs.length > 0 && (
                          <ol style={{listStyleType: 'none', marginTop: '6px', paddingLeft: '12px'}}>
                            {t.subs.map((s, j) => (
                              <li key={s.id}>
                                <a href={`#${s.id}`} onClick={(e) => handleTOCClick(e, s.id)} style={{color: '#6fb2e6', textDecoration: 'none'}}>{`${i+1}.${j+1} ${s.label}`}</a>
                              </li>
                            ))}
                          </ol>
                        )}
                      </li>
                    ))}
                  </ol>
                );
              })()}
            </div>

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
            <h2 id="need-zone-times" style={styles.h2}>Need Zone Times</h2>
            <div style={{display: 'inline-block'}}>
                <table style={{...styles.table, width: '300px'}}>
                    <thead>
                        <tr>
                            <th style={{...styles.th, backgroundColor: '#0f2e48'}}>Times</th>
                            <th style={{...styles.th, backgroundColor: '#0f2e48'}}>Activity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {needZones.map((zone, i) => (
                        <tr key={i}>
                          <td style={styles.td}>{zone.time}</td>
                          <td style={styles.td}><img src={zone.icon} alt={zone.type} style={{width: '18px', height: '18px', verticalAlign: 'middle', marginRight: '8px'}}/>{zone.type}</td>
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
                      <img src={Green_Winged_Teal_shot_scheme} alt="Green Winged Teal shot scheme" style={{width: '500px', height: '444px', objectFit: 'contain'}} />
                    </div>
                    <div style={styles.shotInfo}>
                        No Color - Every hit will kill the animal
                    </div>
                </div>
            </div>

            {/* TIPS */}
            <h2 id="tips" style={styles.h2}>Tips</h2>
            <p>
              Ducks will fly against the wind when making a landing, so be mindful of the wind direction. If you are going to use blinds and decoys, place your green-winged teal decoys approximately 50ms (55yds) away from your blind so the <strong>Green-Winged Teal</strong> won't fly on top of you and spook.
            </p>

            {/* PLUMAGE VARIANTS (Gallery) */}
            <h2 id="plumage-variants" style={styles.h2}>Plumage Variants</h2>
            
            <h3 id="plumage-male" style={styles.h3}>Male</h3>
            <div style={styles.galleryGrid}>
              {maleImages.map((item, i) => (
                <div key={i} style={styles.galleryItem}>
                  <div style={styles.galleryImgPlaceholder}>
                    <img src={item.src} alt={item.label} style={{width: '146px', height: '165px', objectFit: 'cover', border: '4px solid #1f3a52'}} />
                    <span style={{position:'absolute', bottom:'5px', right:'5px'}}>📷</span>
                  </div>
                  <span style={styles.galleryLabel}>{item.label}</span>
                </div>
              ))}
            </div>

            <h3 id="plumage-female" style={styles.h3}>Female</h3>
            <div style={styles.galleryGrid}>
              {femaleImages.map((item, i) => (
                <div key={i} style={styles.galleryItem}>
                  <div style={styles.galleryImgPlaceholder}>
                    <img src={item.src} alt={item.label} style={{width: '146px', height: '165px', objectFit: 'cover', border: '4px solid #1f3a52'}} />
                    <span style={{position:'absolute', bottom:'5px', right:'5px'}}>📷</span>
                  </div>
                  <span style={styles.galleryLabel}>{item.label}</span>
                </div>
              ))}
            </div>

            {/* PLUMAGE RARITY TABLE */}
            <h2 id="plumage-variant-rarity" style={styles.h2}>Plumage Variant Rarity</h2>
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
                            Light Green (99.12%)
                        </td>
                        <td style={styles.td}>X</td>
                        <td style={styles.td}>
                            Piebald Variation 1 (0.27%)<br/>
                            Piebald Variation 2 (0.27%)<br/>
                            Piebald Variation 3 (0.27%)
                        </td>
                        <td style={styles.td}>
                            Albino (0.09%)
                        </td>
                    </tr>
                    {/* Female Row */}
                    <tr>
                        <td style={{...styles.td, color: '#e91e63', fontStyle: 'italic'}}>Female</td>
                        <td style={styles.td}>
                            Light Green (99.73%)
                        </td>
                        <td style={styles.td}>X</td>
                        <td style={styles.td}>
                            Piebald Variation 1 (0.13%)<br/>
                            Piebald Variation 2 (0.13%)
                        </td>
                        <td style={styles.td}>X</td>
                    </tr>
                </tbody>
            </table>

            {/* TRIVIA */}
            <h2 id="trivia" style={styles.h2}>Trivia</h2>
            <ul style={{paddingLeft: '20px', marginBottom: '30px'}}>
                <li style={{marginBottom:'8px'}}>It's scientific name is <em>anas carolinensis</em>, which translates to "Carolina Duck".</li>
                <li style={{marginBottom:'8px'}}>A subspecies of the Green Winged Teal, native to the Aleutian Islands of Alaska, are special in that they do not migrate like most other waterfowl.[1]</li>
                <li style={{marginBottom:'8px'}}>The Green Winged Teal is the smallest dabbling duck in North America, with a wingspan of less than 2 feet on average.[2]</li>
                <li style={{marginBottom:'8px'}}>It's speed is debatable, being clocked in at a record 60 mph (96 km/h). However it's cruising speed is relatively slow, at around only 30 mph (48 km/h). For comparison, the fastest Duck Species in the world, the Red Breasted Merganser, has been clocked in at around 100 mph (160 km/h) and maintains a constant speed of about 72 mph (115 km/h).[3]</li>
            </ul>

            <AnimalsTableMini />
          </main>
        </div>
      </div>
    </div>
  );
};

export default GreenWingedTeal;