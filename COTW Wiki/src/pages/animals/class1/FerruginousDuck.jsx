import React from 'react';
// Assuming this component exists based on your structure
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Asset Imports (Placeholder paths based on your structure)
import FerruginousDuckMain from '../../../assets/FerruginousDuck.webp';
import class1Icon from '../../../assets/Class1Icon.webp'; // Assuming class 1 icon exists

// Male Variants
import FerruginousDuck_AlbinoMaleFront from '../../../assets/FerruginousDuck_AlbinoMaleFront.webp';
import FerruginousDuck_AlbinoMaleBack from '../../../assets/FerruginousDuck_AlbinoMaleBack.webp';
import FerruginousDuck_DarkBrownMaleFront from '../../../assets/FerruginousDuck_DarkBrownMaleFront.webp';
import FerruginousDuck_DarkBrownMaleBack from '../../../assets/FerruginousDuck_DarkBrownMaleBack.webp';
import FerruginousDuck_LeucisticMaleFront from '../../../assets/FerruginousDuck_LeucisticMaleFront.webp';
import FerruginousDuck_LeucisticMaleBack from '../../../assets/FerruginousDuck_LeucisticMaleBack.webp';
import FerruginousDuck_MelanisticMaleFront from '../../../assets/FerruginousDuck_MelanisticMaleFront.webp';
import FerruginousDuck_MelanisticMaleBack from '../../../assets/FerruginousDuck_MelanisticMaleBack.webp';
import FerruginousDuck_RedBrownMaleFront from '../../../assets/FerruginousDuck_RedBrownMaleFront.webp';
import FerruginousDuck_RedBrownMaleBack from '../../../assets/FerruginousDuck_RedBrownMaleBack.webp';

// Female Variants
import FerruginousDuck_AlbinoFemaleFront from '../../../assets/FerruginousDuck_AlbinoFemaleFront.webp';
import FerruginousDuck_AlbinoFemaleBack from '../../../assets/FerruginousDuck_AlbinoFemaleBack.webp';
import FerruginousDuck_DarkBrownFemaleFront from '../../../assets/FerruginousDuck_DarkBrownFemaleFront.webp';
import FerruginousDuck_DarkBrownFemaleBack from '../../../assets/FerruginousDuck_DarkBrownFemaleBack.webp';
import FerruginousDuck_LeucisticFemaleFront from '../../../assets/FerruginousDuck_LeucisticFemaleFront.webp';
import FerruginousDuck_LeucisticFemaleBack from '../../../assets/FerruginousDuck_LeucisticFemaleBack.webp';
import FerruginousDuck_MelanisticFemaleFront from '../../../assets/FerruginousDuck_MelanisticFemaleFront.webp';
import FerruginousDuck_MelanisticFemaleBack from '../../../assets/FerruginousDuck_MelanisticFemaleBack.webp';
import FerruginousDuck_RedBrownFemaleFront from '../../../assets/FerruginousDuck_RedBrownFemaleFront.webp';
import FerruginousDuck_RedBrownFemaleBack from '../../../assets/FerruginousDuck_RedBrownFemaleBack.webp';
// Note: Red Brown and Melanistic Female images were not explicitly in the screenshots, 
// but keeping imports if files exist, otherwise they can be removed.

import Ferruginous_Duck_shot_scheme from '../../../assets/Ferruginous_Duck_shot_scheme.webp';

const FerruginousDuck = () => {
  // --- DATA SOURCES ---

  

  // Features Table (Data from Screenshots)
  const features = [
    { label: "Behavior", value: "Shy, secretive" },
    { label: "Habitat", value: "Swamps, ponds, lakes, rivers" },
    { label: "Senses", value: "Keen eyesight, acute sense of hearing, poor sense of smell" },
    { label: "Social", value: "Small mixed groups, but can also be found alone or in mated pairs" },
    { label: "Active", value: "Early morning and late afternoon" },
    { label: "Recommended Equipment", value: "Class 1 Ammo, Beacon Deluxe Duck Caller, Ferriginous duck Decoys" },
    { label: "Species", value: "Aythya nyroca", italic: true },
    { label: "Difficulty", value: "Easy" },
  ];

  // Plumage Variants (Male)
  const plumageMale = [
    { name: "Albino - Front", color: "#eeeeee" },
    { name: "Albino - Back", color: "#bdbdbd" },
    { name: "Dark Brown - Front", color: "#5d4037" },
    { name: "Dark Brown - Back", color: "#3e2723" },
    { name: "Leucistic - Front", color: "#f5f5f5" },
    { name: "Leucistic - Back", color: "#e0e0e0" },
    { name: "Melanistic - Front", color: "#212121" },
    { name: "Melanistic - Back", color: "#000000" },
    { name: "Red Brown - Front", color: "#8d6e63" },
    { name: "Red Brown - Back", color: "#6d4c41" },
  ];

  // Plumage Variants (Female)
  const plumageFemale = [
    { name: "Albino - Front", color: "#eeeeee" },
    { name: "Albino - Back", color: "#bdbdbd" },
    { name: "Dark Brown - Front", color: "#5d4037" },
    { name: "Dark Brown - Back", color: "#3e2723" },
    { name: "Leucistic - Front", color: "#f5f5f5" },
    { name: "Leucistic - Back", color: "#e0e0e0" },
    { name: "Red Brown - Front", color: "#8d6e63" },
    { name: "Red Brown - Back", color: "#6d4c41" },
    { name: "Melanistic - Front", color: "#212121" },
    { name: "Melanistic - Back", color: "#000000" },
  ];

  // Table of contents data and smooth scroll handler
  const toc = [
    { id: 'features', title: 'Features' },
    
    { id: 'shot-scheme', title: 'Shot scheme' },
    { id: 'tips', title: 'Tips' },
    {
      id: 'plumage-variants',
      title: 'Plumage Variants',
      children: [
        { id: 'plumage-male', title: 'Male' },
        { id: 'plumage-female', title: 'Female' },
      ],
    },
    { id: 'plumage-variant-rarity', title: 'Plumage Variant Rarity' },
    { id: 'trivia', title: 'Trivia' },
    { id: 'references', title: 'References' },
  ];

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Actual gallery image arrays
  const maleImages = [
    FerruginousDuck_AlbinoMaleFront,
    FerruginousDuck_AlbinoMaleBack,
    FerruginousDuck_DarkBrownMaleFront,
    FerruginousDuck_DarkBrownMaleBack,
    FerruginousDuck_LeucisticMaleFront,
    FerruginousDuck_LeucisticMaleBack,
    FerruginousDuck_MelanisticMaleFront,
    FerruginousDuck_MelanisticMaleBack,
    FerruginousDuck_RedBrownMaleFront,
    FerruginousDuck_RedBrownMaleBack,
  ];

  const femaleImages = [
    FerruginousDuck_AlbinoFemaleFront,
    FerruginousDuck_AlbinoFemaleBack,
    FerruginousDuck_DarkBrownFemaleFront,
    FerruginousDuck_DarkBrownFemaleBack,
    FerruginousDuck_LeucisticFemaleFront,
    FerruginousDuck_LeucisticFemaleBack,
    FerruginousDuck_RedBrownFemaleFront,
    FerruginousDuck_RedBrownFemaleBack,
    FerruginousDuck_MelanisticFemaleFront,
    FerruginousDuck_MelanisticFemaleBack,
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
          <span>Ferruginous Duck</span>
          <div style={styles.editActions}>
          </div>
        </div>

        <div style={styles.layout}>
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside style={styles.sidebarColumn}>
            <div style={styles.sidebarHeader}>Ferruginous Duck</div>
            <div style={styles.sidebarImage}>
              <img src={FerruginousDuckMain} alt="Ferruginous Duck" style={{width:'268.4px', height: '134.2px', objectFit: 'cover'}} />
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
                  <span>700</span>
                </div>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.gold}}>☗ Gold</span>
                  <span>900</span>
                </div>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.diamond}}>☗ Diamond</span>
                  <span>1050</span>
                </div>
              </div>
            </div>

            <div style={styles.sidebarSection}>
               <span style={styles.sidebarLabel}>Plumage</span>
               <span style={{fontSize:'0.85rem'}}>
                  Albino, Dark Brown, Leucistic, Melanistic, Red Brown
               </span>
            </div>

            <div style={styles.sidebarHeader}>Locations</div>
            <div style={styles.sidebarSection}>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Salzwiesen Park</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main style={styles.mainColumn}>

            {/* Quote Block */}
            <div style={styles.quoteBox}>
              "The Ferruginous Duck (Aythya nyroca) is a medium-sized diving duck renowned for its rich chestnut plumage and distinctive white eye during the breeding season. Ferruginous Ducks inhabit a variety of freshwater wetland habitats, including marshes, lakes, ponds, and slow-moving rivers, particularly those with abundant submerged vegetation for nesting and foraging."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p style={{marginBottom:'20px'}}>
              The <strong>Ferruginous Duck</strong> is a small <span style={styles.link}>class 1</span> species of duck, that can be hunted on <span style={styles.link}>Salzwiesen Park</span>.
            </p>

            {/* Table of Contents (interactive) */}
            <div style={{
                border: '1px solid #3a5a75',
                backgroundColor: '#0f2e48',
                display: 'inline-block',
                padding: '10px 20px',
                borderRadius: '4px',
                minWidth: '200px'
            }}>
              <div style={{fontWeight:'bold', borderBottom: '1px solid #3a5a75', marginBottom: '5px'}}>
                🔢 Contents <span style={{float:'right', color: '#6fb2e6', fontSize:'0.8rem'}}>[hide]</span>
              </div>
              <ol style={{margin:'0', paddingLeft: '20px', color: '#6fb2e6'}}>
                {toc.map((item, i) => (
                  <li key={item.id} style={{marginBottom: item.children ? '6px' : '3px'}}>
                    <a href={`#${item.id}`} onClick={(e)=>{e.preventDefault(); handleScroll(item.id);}} style={{color:'#6fb2e6', textDecoration: 'none'}}>{item.title}</a>
                    {item.children && (
                      <ol style={{marginTop: '6px', marginLeft: '12px', listStyle: 'none', padding: 0}}>
                        {item.children.map((c, j) => (
                          <li key={c.id} style={{marginBottom: '4px'}}>
                            <a href={`#${c.id}`} onClick={(e)=>{e.preventDefault(); handleScroll(c.id);}} style={{color:'#6fb2e6', textDecoration: 'none'}}>{`${i+1}.${j+1} ${c.title}`}</a>
                          </li>
                        ))}
                      </ol>
                    )}
                  </li>
                ))}
              </ol>
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
                        <span dangerouslySetInnerHTML={{ __html: item.value }} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            

            {/* SHOT SCHEME */}
            <h2 id="shot-scheme" style={styles.h2}>Shot scheme</h2>
            <div style={{backgroundColor:'#0f2e48', padding: '10px'}}>
                <div style={{fontWeight:'bold', color: '#fff', paddingBottom: '5px', borderBottom: '1px solid #3a5a75'}}>Color code</div>
                  <div style={styles.shotContainer}>
                    <div style={{...styles.shotImage, width: '500px', height: '444px'}}>
                      <img src={Ferruginous_Duck_shot_scheme} alt="Ferruginous Duck X-ray shot scheme" style={{width:'500px', height: '444px', objectFit: 'contain'}} />
                    </div>
                    <div style={styles.shotInfo}>
                      No Color - Every hit will kill the animal
                    </div>
                  </div>
            </div>

            {/* TIPS */}
            <h2 id="tips" style={styles.h2}>Tips</h2>
            <p>
              Ducks will fly against the wind when making a landing, so be mindful of the wind direction. If you are going to use blinds and decoys, place your decoys approximately 50ms (54yds) away from your blind so the <strong>Ferruginous Duck</strong> won't fly on top of you and spook.
            </p>

            {/* PLUMAGE VARIANTS (Gallery) */}
            <h2 id="plumage-variants" style={styles.h2}>Plumage Variants</h2>
            
            <h3 id="plumage-male" style={styles.h3}>Male</h3>
            <div style={styles.galleryGrid}>
              {plumageMale.map((item, i) => (
                <div key={i} style={styles.galleryItem}>
                  <div style={styles.galleryImgPlaceholder}>
                    <img src={maleImages[i]} alt={item.name} style={{width:'146px', height: '165px', objectFit: 'cover'}} />
                  </div>
                  <span style={styles.galleryLabel}>{item.name}</span>
                </div>
              ))}
            </div>

            <h3 id="plumage-female" style={styles.h3}>Female</h3>
            <div style={styles.galleryGrid}>
              {plumageFemale.map((item, i) => (
                <div key={i} style={styles.galleryItem}>
                  <div style={styles.galleryImgPlaceholder}>
                    <img src={femaleImages[i]} alt={item.name} style={{width:'146px', height: '165px', objectFit: 'cover'}} />
                  </div>
                  <span style={styles.galleryLabel}>{item.name}</span>
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
                    <tr>
                        <td style={{...styles.td, color: '#9b59b6', fontStyle: 'italic'}}>Male / Female</td>
                        <td style={styles.td}>
                            Dark Brown (49.95%),<br/>
                            Red Brown (49.95%)
                        </td>
                        <td style={styles.td}>X</td>
                        <td style={styles.td}>X</td>
                        <td style={styles.td}>
                            Albino (0.03%),<br/>
                            Leucistic (0.03%),<br/>
                            Melanistic (0.03%)
                        </td>
                    </tr>
                </tbody>
            </table>

            {/* TRIVIA */}
            <h2 id="trivia" style={styles.h2}>Trivia</h2>
            <ul style={{paddingLeft:'20px', marginBottom: '30px'}}>
                <li style={{marginBottom:'8px'}}>Its scientific name consists of the ancient Greek word <i>aithuia</i> which stands for an unnamed seabird mentioned by multiple authors and the Russian word <i>nyrok</i> which means pochard / diver.</li>
                <li style={{marginBottom:'8px'}}>The Ferruginous Duck can dive up to 60 seconds when foraging for food.</li>
                <li style={{marginBottom:'8px'}}>They are threatened by Grass Carp, which are illegally released into their territories and eat their food.</li>
            </ul>

            {/* REFERENCES */}
            <h2 id="references" style={styles.h2}>References</h2>
            <ol style={{paddingLeft:'25px', color: '#6fb2e6'}}>
                <li><span style={styles.link}>Wikipedia.org</span></li>
                <li><span style={styles.link}>Hellabrunn.de</span></li>
                <li><span style={styles.link}>Waterfowl.org</span></li>
            </ol>

            <AnimalsTableMini />
          </main>
        </div>
      </div>
    </div>
  );
};

export default FerruginousDuck;