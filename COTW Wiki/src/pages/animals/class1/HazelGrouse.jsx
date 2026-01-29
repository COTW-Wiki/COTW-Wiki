import React from 'react';

// --- IMPORTS ---
// Standard Icons
import class1Icon from '../../../assets/Class1Icon.webp';
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';

// Main Image
import HazelGrouseMain from '../../../assets/HazelGrouse.webp';

// Male Plumage Images
import HazelGrouse_BrownMaleFront from '../../../assets/HazelGrouse_BrownMaleFront.webp';
import HazelGrouse_BrownMaleBack from '../../../assets/HazelGrouse_BrownMaleBack.webp';
import HazelGrouse_DarkMaleFront from '../../../assets/HazelGrouse_DarkMaleFront.webp';
import HazelGrouse_DarkMaleBack from '../../../assets/HazelGrouse_DarkMaleBack.webp';
import HazelGrouse_GreyMaleFront from '../../../assets/HazelGrouse_GreyMaleFront.webp';
import HazelGrouse_GreyMaleBack from '../../../assets/HazelGrouse_GreyMaleBack.webp';
import HazelGrouse_HybridMaleFront from '../../../assets/HazelGrouse_HybridMaleFront.webp';
import HazelGrouse_HybridMaleBack from '../../../assets/HazelGrouse_HybridMaleBack.webp';
import HazelGrouse_PaleMaleFront from '../../../assets/HazelGrouse_PaleMaleFront.webp';
import HazelGrouse_PaleMaleBack from '../../../assets/HazelGrouse_PaleMaleBack.webp';

// Female Plumage Images
import HazelGrouse_BrownFemaleFront from '../../../assets/HazelGrouse_BrownFemaleFront.webp';
import HazelGrouse_BrownFemaleBack from '../../../assets/HazelGrouse_BrownFemaleBack.webp';
import HazelGrouse_DarkFemaleFront from '../../../assets/HazelGrouse_DarkFemaleFront.webp';
import HazelGrouse_DarkFemaleBack from '../../../assets/HazelGrouse_DarkFemaleBack.webp';
import HazelGrouse_LightBrownFemaleFront from '../../../assets/HazelGrouse_LightBrownFemaleFront.webp';
import HazelGrouse_LightBrownFemaleBack from '../../../assets/HazelGrouse_LightBrownFemaleBack.webp';
import HazelGrouse_OchreFemaleFront from '../../../assets/HazelGrouse_OchreFemaleFront.webp';
import HazelGrouse_OchreFemaleBack from '../../../assets/HazelGrouse_OchreFemaleBack.webp';
import HazelGrouse_PaleFemaleFront from '../../../assets/HazelGrouse_PaleFemaleFront.webp';
import HazelGrouse_PaleFemaleBack from '../../../assets/HazelGrouse_PaleFemaleBack.webp';

const HazelGrouse = () => {

  // --- DATA SOURCES ---

  // Features Table
  const features = [
    { label: "Behavior", value: "Territorial, secretive" },
    { label: "Habitat", value: "Mixed woodlands" },
    { label: "Senses", value: "Good eyesight, average smell and hearing" },
    { label: "Social", value: "Solitary individuals and mated pairs" },
    { label: "Active", value: "Forages throughout the day" },
    { label: "Recommended Equipment", value: "Class 1 Ammo, Hazel Grouse Caller" },
    { label: "Species", value: "Tetrastes bonasia", italic: true, isLink: true },
    { label: "Difficulty", value: "Easy" },
  ];

  // Plumage Gallery Data
  const plumageGallery = {
    male: [
      { name: "Brown - Front", src: HazelGrouse_BrownMaleFront },
      { name: "Brown - Back", src: HazelGrouse_BrownMaleBack },
      { name: "Dark - Front", src: HazelGrouse_DarkMaleFront },
      { name: "Dark - Back", src: HazelGrouse_DarkMaleBack },
      { name: "Grey - Front", src: HazelGrouse_GreyMaleFront },
      { name: "Grey - Back", src: HazelGrouse_GreyMaleBack },
      { name: "Hybrid - Front", src: HazelGrouse_HybridMaleFront },
      { name: "Hybrid - Back", src: HazelGrouse_HybridMaleBack },
      { name: "Pale - Front", src: HazelGrouse_PaleMaleFront },
      { name: "Pale - Back", src: HazelGrouse_PaleMaleBack },
    ],
    female: [
      { name: "Brown - Front", src: HazelGrouse_BrownFemaleFront },
      { name: "Brown - Back", src: HazelGrouse_BrownFemaleBack },
      { name: "Dark - Front", src: HazelGrouse_DarkFemaleFront },
      { name: "Dark - Back", src: HazelGrouse_DarkFemaleBack },
      { name: "Light Brown - Front", src: HazelGrouse_LightBrownFemaleFront },
      { name: "Light Brown - Back", src: HazelGrouse_LightBrownFemaleBack },
      { name: "Ochre - Front", src: HazelGrouse_OchreFemaleFront },
      { name: "Ochre - Back", src: HazelGrouse_OchreFemaleBack },
      { name: "Pale - Front", src: HazelGrouse_PaleFemaleFront },
      { name: "Pale - Back", src: HazelGrouse_PaleFemaleBack },
    ]
  };

  // Table of contents data and smooth scroll handler
  const toc = [
    { id: 'features', title: 'Features' },
    {
      id: 'plumage-variants',
      title: 'Plumage variants',
      children: [
        { id: 'plumage-male', title: 'Male' },
        { id: 'plumage-female', title: 'Female' },
      ],
    },
    { id: 'plumage-variant-rarity', title: 'Plumage Variant Rarity' },
    
  ];

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
          <span>Hazel Grouse</span>
          <div style={styles.editActions}>  
          </div>
        </div>

        <div style={styles.layout}>
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside style={styles.sidebarColumn}>
            <div style={styles.sidebarHeader}>Hazel Grouse</div>
            <div style={styles.sidebarImage}>
              <img src={HazelGrouseMain} alt="Hazel Grouse" style={{width:'268px', height: '134px', objectFit: 'cover'}} />
            </div>
            
            <div style={styles.sidebarHeader}>General Information</div>
            
            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Class</span>
              <span><img src={class1Icon} alt="Class 1" style={{width:'20px', height:'20px', verticalAlign: 'middle', marginRight: '6px'}}/>1</span>
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
                  <span>330</span>
                </div>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.gold}}>☗ Gold</span>
                  <span>390</span>
                </div>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.diamond}}>☗ Diamond</span>
                  <span>435</span>
                </div>
              </div>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Weight</span>
              300g — 450g<br/>
              0.7lbs — 1lbs
            </div>

            <div style={styles.sidebarSection}>
               <span style={styles.sidebarLabel}>Plumage</span>
               <span style={{fontSize:'0.85rem'}}>
                  Brown, Dark, Grey, Hybrid, Light Brown, Ochre, Pale
               </span>
            </div>

            <div style={styles.sidebarHeader}>Locations</div>
            <div style={styles.sidebarSection}>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Revontuli Coast</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main style={styles.mainColumn}>

            {/* Quote Block */}
            <div style={styles.quoteBox}>
              "The Hazel Grouse is a very small grouse that can be found in mixed coniferous and deciduous forests across Northern Eurasia. Although it occurs in a very large geographic range, it has very specific habitat preferences that make individual populations vulnerable to changes in their local environment. Males are territorial and defend their territory year round. In spring they compete to attract females and breed. Females nest on the ground and raise their young alone."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p style={{marginBottom:'20px'}}>
              The <strong>Hazel Grouse</strong> is a (<span style={styles.link}>class 1</span>) quail species that can be hunted on <span style={styles.link}>Revontuli Coast</span>.
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
           
            {/* Note: "Need Zone Times" section is NOT present in the provided screenshots for Hazel Grouse, so it is omitted here to remain accurate to the source. */}

            {/* PLUMAGE VARIANTS (Gallery) */}
            <h2 id="plumage-variants" style={styles.h2}>Plumage variants</h2>
            
            {/* Male Section */}
            <h3 id="plumage-male" style={{...styles.h2, fontSize:'1.2rem', borderBottom:'none', marginTop:'10px'}}>Male</h3>
            <div style={styles.galleryGrid}>
              {plumageGallery.male.map((item, i) => (
                <div key={i} style={styles.galleryItem}>
                  <div style={styles.galleryImgPlaceholder}>
                    <img src={item.src} alt={item.name} style={{width:'146px', height: '165px', objectFit: 'cover'}} />
                  </div>
                  <span style={styles.galleryLabel}>{item.name}</span>
                </div>
              ))}
            </div>

            {/* Female Section */}
            <h3 id="plumage-female" style={{...styles.h2, fontSize:'1.2rem', borderBottom:'none', marginTop:'10px'}}>Female</h3>
            <div style={styles.galleryGrid}>
              {plumageGallery.female.map((item, i) => (
                <div key={i} style={styles.galleryItem}>
                  <div style={styles.galleryImgPlaceholder}>
                    <img src={item.src} alt={item.name} style={{width:'146px', height: '165px', objectFit: 'cover'}} />
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
                        <td style={{...styles.td, color: '#3498db', fontStyle: 'italic', fontWeight: 'bold'}}>Male</td>
                        <td style={styles.td}>
                            Brown (54.45%)<br/>
                            Grey (27.22%)<br/>
                            Dark (18.22%)
                        </td>
                        <td style={styles.td}>X</td>
                        <td style={styles.td}>X</td>
                        <td style={styles.td}>
                            Pale (0.07%)<br/>
                            Hybrid (0.04%)
                        </td>
                    </tr>
                     <tr>
                        <td style={{...styles.td, color: '#ff69b4', fontStyle: 'italic', fontWeight: 'bold'}}>Female</td>
                        <td style={styles.td}>
                            Brown (74.70%)<br/>
                            Light Brown (12.50%)<br/>
                            Ochre (12.50%)
                        </td>
                        <td style={styles.td}>X</td>
                        <td style={styles.td}>
                            Dark (0.20%)<br/>
                            Pale (0.10%)
                        </td>
                        <td style={styles.td}>X</td>
                    </tr>
                </tbody>
            </table>

            {/* Trivia removed per request */}
            <AnimalsTableMini />
          </main>
        </div>
      </div>
    </div>
  );
};

export default HazelGrouse;