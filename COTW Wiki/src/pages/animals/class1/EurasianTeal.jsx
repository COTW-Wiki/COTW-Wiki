import React from 'react';
import AnimalsTableMini from '../../../components/AnimalsTableMini';



import EurasianTealMain from '../../../assets/EurasianTeal.webp';
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import class1Icon from '../../../assets/Class1Icon.webp';
import EurasianTeal_DarkGreenMaleFront from '../../../assets/EurasianTeal_DarkGreenMaleFront.webp';
import EurasianTeal_DarkGreenMaleBack from '../../../assets/EurasianTeal_DarkGreenMaleBack.webp';
import EurasianTeal_HybridBlueMaleFront from '../../../assets/EurasianTeal_HybridBlueMaleFront.webp';
import EurasianTeal_HybridBlueMaleBack from '../../../assets/EurasianTeal_HybridBlueMaleBack.webp';
import EurasianTeal_HybridGreenMaleFront from '../../../assets/EurasianTeal_HybridGreenMaleFront.webp';
import EurasianTeal_HybridGreenMaleBack from '../../../assets/EurasianTeal_HybridGreenMaleBack.webp';
import EurasianTeal_LeucisticVariation1MaleFront from '../../../assets/EurasianTeal_LeucisticVariation1MaleFront.webp';
import EurasianTeal_LeucisticVariation1MaleBack from '../../../assets/EurasianTeal_LeucisticVariation1MaleBack.webp';
import EurasianTeal_LeucisticVariation2MaleFront from '../../../assets/EurasianTeal_LeucisticVariation2MaleFront.webp';
import EurasianTeal_LeucisticVariation2MaleBack from '../../../assets/EurasianTeal_LeucisticVariation2MaleBack.webp';
import EurasianTeal_LightGreenMaleFront from '../../../assets/EurasianTeal_LightGreenMaleFront.webp';
import EurasianTeal_LightGreenMaleBack from '../../../assets/EurasianTeal_LightGreenMaleBack.webp';
import EurasianTeal_BrownFemaleFront from '../../../assets/EurasianTeal_BrownFemaleFront.webp';
import EurasianTeal_BrownFemaleBack from '../../../assets/EurasianTeal_BrownFemaleBack.webp';
import EurasianTeal_LeucisticFemaleFront from '../../../assets/EurasianTeal_LeucisticFemaleFront.webp';
import EurasianTeal_LeucisticFemaleBack from '../../../assets/EurasianTeal_LeucisticFemaleBack.webp';

const EurasianTeal = () => {

  // --- DATA SOURCES ---

  // Need Zone Times (Specific to Eurasian Teal based on screenshot)
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

  // Features Table (Data from Screenshots)
  const features = [
    { label: "Behavior", value: "Active, gregarious and vocal" },
    { label: "Habitat", value: "Ponds, lakes, bogs and estuaries" },
    { label: "Senses", value: "Excellent vision" },
    { label: "Social", value: "Highly gregarious, flocks migrate South in winter" },
    { label: "Active", value: "Feeds intermittently, mostly at night" },
    { label: "Recommended Equipment", value: "Class 1 Ammo, Eurasian Teal Decoys and Caller" },
    { label: "Species", value: "Anas crecca", italic: true },
    { label: "Difficulty", value: "Easy" },
  ];

  // Plumage Variants (Male)
  const plumageMale = [
    { name: "Dark Green - Front", color: "#2e7d32" },
    { name: "Dark Green - Back", color: "#1b5e20" },
    { name: "Hybrid Blue - Front", color: "#1565c0" },
    { name: "Hybrid Blue - Back", color: "#0d47a1" },
    { name: "Hybrid Green - Front", color: "#4caf50" },
    { name: "Hybrid Green - Back", color: "#388e3c" },
    { name: "Leucistic Variation 1 - Front", color: "#f5f5f5" },
    { name: "Leucistic Variation 1 - Back", color: "#e0e0e0" },
    { name: "Leucistic Variation 2 - Front", color: "#eeeeee" },
    { name: "Leucistic Variation 2 - Back", color: "#bdbdbd" },
    { name: "Light Green - Front", color: "#81c784" },
    { name: "Light Green - Back", color: "#66bb6a" },
  ];

  // Plumage Variants (Female)
  const plumageFemale = [
    { name: "Brown - Front", color: "#5d4037" },
    { name: "Brown - Back", color: "#3e2723" },
    { name: "Leucistic - Front", color: "#f5f5f5" },
    { name: "Leucistic - Back", color: "#e0e0e0" },
  ];

  // Actual gallery image arrays
  const maleImages = [
    EurasianTeal_DarkGreenMaleFront,
    EurasianTeal_DarkGreenMaleBack,
    EurasianTeal_HybridBlueMaleFront,
    EurasianTeal_HybridBlueMaleBack,
    EurasianTeal_HybridGreenMaleFront,
    EurasianTeal_HybridGreenMaleBack,
    EurasianTeal_LeucisticVariation1MaleFront,
    EurasianTeal_LeucisticVariation1MaleBack,
    EurasianTeal_LeucisticVariation2MaleFront,
    EurasianTeal_LeucisticVariation2MaleBack,
    EurasianTeal_LightGreenMaleFront,
    EurasianTeal_LightGreenMaleBack,
  ];

  const femaleImages = [
    EurasianTeal_BrownFemaleFront,
    EurasianTeal_BrownFemaleBack,
    EurasianTeal_LeucisticFemaleFront,
    EurasianTeal_LeucisticFemaleBack,
  ];

  // Smooth scroll helper for TOC
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      try { history.replaceState(null, '', `#${id}`); } catch(e) { /* noop */ }
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
      width: '146px',
      height: '165px',
      backgroundColor: '#2a4b63',
      border: '4px solid #1f3a52',
      marginBottom: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
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
          <span>Eurasian Teal</span>
          <div style={styles.editActions}>
          </div>
        </div>

        <div style={styles.layout}>
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside style={styles.sidebarColumn}>
            <div style={styles.sidebarHeader}>Eurasian Teal</div>
            <div style={styles.sidebarImage}>
              <img src={EurasianTealMain} alt="Eurasian Teal" style={{width:'268.4px', height: '134.2px', objectFit: 'cover'}} />
            </div>
            
            <div style={styles.sidebarHeader}>General Information</div>
            
            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Class</span>
              <span><img src={class1Icon} alt="Class 1" style={{width:'20px', height:'20px', verticalAlign:'middle', marginRight:'6px'}}/> 1</span>
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
                  <span>312</span>
                </div>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.gold}}>☗ Gold</span>
                  <span>336</span>
                </div>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.diamond}}>☗ Diamond</span>
                  <span>354</span>
                </div>
              </div>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Weight</span>
              300g — 400g<br/>
              0.7lbs — 0.9lbs
            </div>

            <div style={styles.sidebarSection}>
               <span style={styles.sidebarLabel}>Plumage</span>
               <span style={{fontSize:'0.85rem'}}>
                  Dark Green, Light Green, Hybrid Green, Hybrid Blue, Leucistic
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
              "The Eurasian Teal is a small dabbling duck commonly found in Northern Eurasia, closely related to the ubiquitous Mallard and the very similar American Green-Winged Teal. It is one of the smallest dabbling ducks in the world, and is recognizable by the prominent patches of teal-colored feathers on the head and wing of the males.
              Eurasian Teals are a very social species and can be commonly found in large flocks outside of the breeding season. They also readily mix with other species of ducks, leading to semi-frequent interbreeding with closely related species."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p style={{marginBottom:'20px'}}>
              The <strong>Eurasian Teal</strong> is a small species of <span style={styles.link}>class 1</span> duck, that can be hunted on <span style={styles.link}>Revontuli Coast</span> and <span style={styles.link}>Salzwiesen Park</span>.
            </p>

            {/* Table of Contents Placeholder */}
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
                <li><a style={styles.link} onClick={() => handleScroll('features')}>Features</a></li>
                <li><a style={styles.link} onClick={() => handleScroll('need-zones')}>Need Zone Times</a></li>
                <li><a style={styles.link} onClick={() => handleScroll('tips')}>Tips</a></li>
                <li>
                  <a style={styles.link} onClick={() => handleScroll('plumage-variants')}>Plumage Variants</a>
                  <ol style={{listStyleType: 'none', paddingLeft: '14px', marginTop: '6px'}}>
                    <li><a style={styles.link} onClick={() => handleScroll('plumage-male')}>4.1 Male</a></li>
                    <li><a style={styles.link} onClick={() => handleScroll('plumage-female')}>4.2 Female</a></li>
                  </ol>
                </li>
                <li><a style={styles.link} onClick={() => handleScroll('plumage-rarity')}>Plumage Variant Rarity</a></li>
                <li><a style={styles.link} onClick={() => handleScroll('trivia')}>Trivia</a></li>
                <li><a style={styles.link} onClick={() => handleScroll('references')}>References</a></li>
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
            <h2 id="need-zones" style={styles.h2}>Need Zone Times</h2>
            <div style={{display:'inline-block'}}>
                <table style={{...styles.table, width: '300px'}}>
                    <thead>
                        <tr><th colSpan="2" style={{...styles.th, textAlign: 'center'}}>Revontuli Coast</th></tr>
                        <tr>
                            <th style={{...styles.th, backgroundColor: '#0f2e48'}}>Times</th>
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
           

            {/* Shot scheme removed */}
           

            {/* TIPS */}
            <h2 id="tips" style={styles.h2}>Tips</h2>
            <p>
              Ducks will fly against the wind when making a landing, so be mindful of the wind direction. If you are going to use blinds and decoys, place your decoys approximately 50ms (54yds) away from your blind so the <strong>Eurasian Teal</strong> won't fly on top of you and spook.
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
                        <td style={{...styles.td, color: '#9b59b6', fontStyle: 'italic'}}>Male</td>
                        <td style={styles.td}>
                            Light Green (49.93%),<br/>
                            Dark Green (49.93%)
                        </td>
                        <td style={styles.td}>X</td>
                        <td style={styles.td}>X</td>
                        <td style={styles.td}>
                            Hybrid Blue (0.03%),<br/>
                            Hybrid Green (0.03%),<br/>
                            Leucistic Variation 1 (0.03%),<br/>
                            Leucistic Variation 2 (0.03%)
                        </td>
                    </tr>
                    <tr>
                        <td style={{...styles.td, color: '#9b59b6', fontStyle: 'italic'}}>Female</td>
                        <td style={styles.td}>
                            Brown (99.87%)
                        </td>
                        <td style={styles.td}>X</td>
                        <td style={styles.td}>
                            Leucistic (0.13%)
                        </td>
                        <td style={styles.td}>X</td>
                    </tr>
                </tbody>
            </table>
           

            {/* TRIVIA */}
            <h2 id="trivia" style={styles.h2}>Trivia</h2>
            <ul style={{paddingLeft:'20px', marginBottom: '30px'}}>
                <li style={{marginBottom:'8px'}}>The Eurasian Teal is often called the <i>Common Teal</i> or <i>Teal Duck</i> for how common and widespread the bird is.</li>
                <li style={{marginBottom:'8px'}}>While it may look identical to its American cousin, the <span style={styles.link}>Green Winged Teal</span>, the Eurasian Teal is distinct in that it lacks the white shoulder stipe on the front of its wings.</li>
                <li style={{marginBottom:'8px'}}>The color <i>teal</i> is named after the duck itself.</li>
            </ul>

            {/* REFERENCES */}
            <h2 id="references" style={styles.h2}>References</h2>
            <ol style={{paddingLeft:'25px', color: '#6fb2e6'}}>
                <li><span style={styles.link}>https://www.adobe.com/express/colors/teal</span></li>
            </ol>

            <AnimalsTableMini />
          </main>
        </div>
      </div>
    </div>
  );
};

export default EurasianTeal;