import React from 'react';

// --- IMPORTS ---
// Standard Icons (reuse existing paths)
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import class1Icon from '../../../assets/Class1Icon.webp';
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import BlackGrouseMain from '../../../assets/BlackGrouse.webp';

// Male Plumage Images
import BlackGrouse_DarkMaleFront from '../../../assets/BlackGrouse_DarkMaleFront.webp';
import BlackGrouse_DarkMaleBack from '../../../assets/BlackGrouse_DarkMaleBack.webp';
import BlackGrouse_LeucisticVariation1MaleFront from '../../../assets/BlackGrouse_LeucisticVariation1MaleFront.webp';
import BlackGrouse_LeucisticVariation1MaleBack from '../../../assets/BlackGrouse_LeucisticVariation1MaleBack.webp';
import BlackGrouse_LeucisticVariaton2MaleFront from '../../../assets/BlackGrouse_LeucisticVariation2MaleFront.webp';
import BlackGrouse_LeucisticVariation2MaleBack from '../../../assets/BlackGrouse_LeucisticVariation2MaleBack.webp';
import BlackGrouse_LeucisticVariation3MaleFront from '../../../assets/BlackGrouse_LeucisticVariation3MaleFront.webp';
import BlackGrouse_LeucisticVariation3MaleBack from '../../../assets/BlackGrouse_LeucisticVariation3MaleBack.webp';
import BlackGrouse_MelanisticVariation1MaleFront from '../../../assets/BlackGrouse_MelanisticVariation1MaleFront.webp';
import BlackGrouse_MelanisticVariation1MaleBack from '../../../assets/BlackGrouse_MelanisticVariation1MaleBack.webp';
import BlackGrouse_MelanisticVariation2MaleFront from '../../../assets/BlackGrouse_MelanisticVariation2MaleFront.webp';
import BlackGrouse_MelanisticVariation2MaleBack from '../../../assets/BlackGrouse_MelanisticVariation2MaleBack.webp';

// Female Plumage Images
import BlackGrouse_BrownFemaleFront from '../../../assets/BlackGrouse_BrownFemaleFront.webp';
import BlackGrouse_BrownFemaleBack from '../../../assets/BlackGrouse_BrownFemaleBack.webp';
import BlackGrouse_DarkFemaleFront from '../../../assets/BlackGrouse_DarkFemaleFront.webp';
import BlackGrouse_DarkFemaleBack from '../../../assets/BlackGrouse_DarkFemaleBack.webp';
import BlackGrouse_GoldFemaleFront from '../../../assets/BlackGrouse_GoldFemaleFront.webp';
import BlackGrouse_GoldFemaleBack from '../../../assets/BlackGrouse_GoldFemaleBack.webp';
import BlackGrouse_OrangeFemaleFront from '../../../assets/BlackGrouse_OrangeFemaleFront.webp';
import BlackGrouse_OrangeFemaleBack from '../../../assets/BlackGrouse_OrangeFemaleBack.webp';


const BlackGrouse = () => {

  // --- DATA SOURCES ---

  // Need Zone Times (Revontuli Coast)
  const needZones = [
    { time: "00:00 - 04:30", type: "Resting", icon: RestingZoneIcon },
    { time: "04:00 - 08:30", type: "Feeding", icon: FeedingZoneIcon },
    { time: "08:00 - 11:30", type: "Feeding", icon: FeedingZoneIcon },
    { time: "11:00 - 14:30", type: "Resting", icon: RestingZoneIcon },
    { time: "14:00 - 18:30", type: "Feeding", icon: FeedingZoneIcon },
    { time: "18:00 - 21:30", type: "Feeding", icon: FeedingZoneIcon },
    { time: "21:00 - 00:30", type: "Resting", icon: RestingZoneIcon },
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Territorial, engages in elaborate courtship displays" },
    { label: "Habitat", value: "Transitional zones between forest and clearings" },
    { label: "Senses", value: "Great hearing and eyesight, poor sense of smell" },
    { label: "Social", value: "Flocks in single-sex groups and mixed groups" },
    { label: "Active", value: "During the day" },
    { label: "Recommended Equipment", value: "Class 1 Ammo" },
    { label: "Species", value: "Lyrurus tetrix", italic: true, isLink: true },
    { label: "Difficulty", value: "Easy" },
  ];

  // Plumage Gallery Data
  const plumageGallery = {
    male: [
      { name: "Dark - Front", src: BlackGrouse_DarkMaleFront },
      { name: "Dark - Back", src: BlackGrouse_DarkMaleBack },
      { name: "Leucistic Variation 1 - Front", src: BlackGrouse_LeucisticVariation1MaleFront },
      { name: "Leucistic Variation 1 - Back", src: BlackGrouse_LeucisticVariation1MaleBack },
      { name: "Leucistic Variation 2 - Front", src: BlackGrouse_LeucisticVariaton2MaleFront },
      { name: "Leucistic Variation 2 - Back", src: BlackGrouse_LeucisticVariation2MaleBack },
      { name: "Leucistic Variation 3 - Front", src: BlackGrouse_LeucisticVariation3MaleFront },
      { name: "Leucistic Variation 3 - Back", src: BlackGrouse_LeucisticVariation3MaleBack },
      { name: "Melanistic Variation 1 - Front", src: BlackGrouse_MelanisticVariation1MaleFront },
      { name: "Melanistic Variation 1 - Back", src: BlackGrouse_MelanisticVariation1MaleBack },
      { name: "Melanistic Variation 2 - Front", src: BlackGrouse_MelanisticVariation2MaleFront },
      { name: "Melanistic Variation 2 - Back", src: BlackGrouse_MelanisticVariation2MaleBack },
    ],
    female: [
      { name: "Brown - Front", src: BlackGrouse_BrownFemaleFront },
      { name: "Brown - Back", src: BlackGrouse_BrownFemaleBack },
      { name: "Dark - Front", src: BlackGrouse_DarkFemaleFront },
      { name: "Dark - Back", src: BlackGrouse_DarkFemaleBack },
      { name: "Gold - Front", src: BlackGrouse_GoldFemaleFront },
      { name: "Gold - Back", src: BlackGrouse_GoldFemaleBack },
      { name: "Orange - Front", src: BlackGrouse_OrangeFemaleFront },
      { name: "Orange - Back", src: BlackGrouse_OrangeFemaleBack },
    ]
  };

  // Table of contents data and smooth scroll handler
  const toc = [
    { id: 'features', title: 'Features' },
    { id: 'need-zone-times', title: 'Need Zone Times' },
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
          <span>Black Grouse</span>
          <div style={styles.editActions}>
          </div>
        </div>

        <div style={styles.layout}>
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside style={styles.sidebarColumn}>
            <div style={styles.sidebarHeader}>Black Grouse</div>
            <div style={styles.sidebarImage}>
              <img src={BlackGrouseMain} alt="Black Grouse" style={{width:'268px', height: '134px', objectFit: 'cover'}} />
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
              <span>Combined</span>
              <div style={styles.trophyGrid}>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.silver}}>◆ Silver</span>
                  <span>85</span>
                </div>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.gold}}>☗ Gold</span>
                  <span>105</span>
                </div>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.diamond}}>☗ Diamond</span>
                  <span>120</span>
                </div>
              </div>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Weight</span>
              700g — 1250g<br/>
              1.5lbs — 2.8lbs
            </div>

            <div style={styles.sidebarSection}>
               <span style={styles.sidebarLabel}>Plumage</span>
               <span style={{fontSize:'0.85rem'}}>
                  Brown, Dark, Gold, Leucistic, Melanistic, Orange
               </span>
            </div>

            <div style={styles.sidebarHeader}>Locations</div>
            <div style={styles.sidebarSection}>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Revontuli Coast</span></div>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Salzwiesen Park</span></div>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Tòrr nan Sithean</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main style={styles.mainColumn}>

            {/* Quote Block */}
            <div style={styles.quoteBox}>
              "The Black Grouse has distinct red bare skin over its eyes that plumps up during the courting ritual known as "lek". During the lek, males, and at times up to hundreds of males, collect in "lekking" grounds every dawn to display their strength and plumage to increase their chances of mating with a hen. The Black Grouse is a sedentary bird, which means it does not migrate. The Black Grouse has a large range across most of northern Europe and Russia. They are capable of hybridization with other species such as Ringneck Pheasant, Western Capercaillie and Willow Ptarmigan."
              <br/><br/>
              ― In-Game Description
            </div>

            {/* Intro Text */}
            <p style={{marginBottom:'20px'}}>
              The <strong>Black Grouse</strong> is a <span style={styles.link}>class 1</span> grouse species that can be hunted on <span style={styles.link}>Revontuli Coast</span>, <span style={styles.link}>Salzwiesen Park</span> and <span style={styles.link}>Tòrr nan Sithean</span>.
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
           
            {/* NEED ZONE TIMES */}
            <h2 id="need-zone-times" style={styles.h2}>Need Zone Times</h2>
            <div style={{display:'inline-block'}}>
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
                            <td style={styles.td}><img src={zone.icon} alt={zone.type} style={{width:'20px', height: '20px', verticalAlign: 'middle', marginRight: '6px'}}/> {zone.type}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* PLUMAGE VARIANTS (Gallery) */}
            <h2 id="plumage-variants" style={styles.h2}>Plumage Variants</h2>
            
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
                            Dark (99.87%)
                        </td>
                        <td style={styles.td}>X</td>
                        <td style={styles.td}>X</td>
                        <td style={styles.td}>
                            Leucistic Variation 1 (0.03%),<br/>
                            Leucistic Variation 2 (0.03%),<br/>
                            Leucistic Variation 3 (0.03%),<br/>
                            Melanistic Variation 1 (0.03%),<br/>
                            Melanistic Variation 2 (0.03%)
                        </td>
                    </tr>
                     <tr>
                        <td style={{...styles.td, color: '#ff69b4', fontStyle: 'italic', fontWeight: 'bold'}}>Female</td>
                        <td style={styles.td}>
                            Brown (74.77%),<br/>
                            Dark (25.03%)
                        </td>
                        <td style={styles.td}>X</td>
                        <td style={styles.td}>
                            Gold (0.10%),<br/>
                            Orange (0.10%)
                        </td>
                        <td style={styles.td}>X</td>
                    </tr>
                </tbody>
            </table>

            {/* TRIVIA */}
            <h2 id="trivia" style={styles.h2}>Trivia</h2>
            <ul style={{paddingLeft:'20px', marginBottom: '30px'}}>
              <li style={{marginBottom:'8px'}}>The scientific name of the Black Grouse is derived of two parts: <i>lyra</i> (lyre) + <i>orus</i> (Tail). It's distinctive lyre shaped tail gives it it's name.</li>
              <li style={{marginBottom:'8px'}}>The males hold large spring gatherings called <i>leks</i> where they compete for females.</li>
            </ul>

            {/* REFERENCES */}
            <h2 id="references" style={styles.h2}>References</h2>
            <ol style={{paddingLeft:'20px', marginBottom: '30px', color: '#6fb2e6'}}>
                <li style={{marginBottom:'4px'}}><span style={styles.link}>etymonline.com</span></li>
                <li style={{marginBottom:'4px'}}><span style={styles.link}>merriam-webster.com</span></li>
                <li style={{marginBottom:'4px'}}><span style={styles.link}>bro.org</span></li>
            </ol>

            <AnimalsTableMini />
          </main>
        </div>
      </div>
    </div>
  );
};

export default BlackGrouse;