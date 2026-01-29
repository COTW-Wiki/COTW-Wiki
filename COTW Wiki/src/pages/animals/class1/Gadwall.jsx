import React from 'react';

// Asset imports
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import class1Icon from '../../../assets/Class1Icon.webp';
import GadwallMain from '../../../assets/Gadwall.webp';
import Gadwall_shot_scheme from '../../../assets/Gadwall_shot_scheme.webp';

import Gadwall_AlbinoMaleFront from '../../../assets/Gadwall_AlbinoMaleFront.webp';
import Gadwall_AlbinoMaleBack from '../../../assets/Gadwall_AlbinoMaleBack.webp';
import Gadwall_EclipseMaleFront from '../../../assets/Gadwall_EclipseMaleFront.webp';
import Gadwall_EclipseMaleBack from '../../../assets/Gadwall_EclipseMaleBack.webp';
import Gadwall_GreyMaleFront from '../../../assets/Gadwall_GreyMaleFront.webp';
import Gadwall_GreyMaleBack from '../../../assets/Gadwall_GreyMaleBack.webp';
import Gadwall_LeucisticMaleFront from '../../../assets/Gadwall_LeucisticMaleFront.webp';
import Gadwall_LeucisticMaleBack from '../../../assets/Gadwall_LeucisticMaleBack.webp';
import Gadwall_MelanisticMaleFront from '../../../assets/Gadwall_MelanisticMaleFront.webp';
import Gadwall_MelanisticMaleBack from '../../../assets/Gadwall_MelanisticMaleBack.webp';

import Gadwall_AlbinoFemaleFront from '../../../assets/Gadwall_AlbinoFemaleFront.webp';
import Gadwall_AlbinoFemaleBack from '../../../assets/Gadwall_AlbinoFemaleBack.webp';
import Gadwall_BrownFemaleFront from '../../../assets/Gadwall_BrownFemaleFront.webp';
import Gadwall_BrownFemaleBack from '../../../assets/Gadwall_BrownFemaleBack.webp';
import Gadwall_LeucisticFemaleFront from '../../../assets/Gadwall_LeucisticFemaleFront.webp';
import Gadwall_LeucisticFemaleBack from '../../../assets/Gadwall_LeucisticFemaleBack.webp';
import Gadwall_MelanisticFemaleFront from '../../../assets/Gadwall_MelanisticFemaleFront.webp';
import Gadwall_MelanisticFemaleBack from '../../../assets/Gadwall_MelanisticFemaleBack.webp';

import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

const Gadwall = () => {
  // --- DATA SOURCES ---

  // Need Zone Times (Standard Duck Schedule used as placeholder)
  const needZones = [
    { time: "00:00 - 05:00", type: "Resting", icon: RestingZoneIcon },
    { time: "05:00 - 07:00", type: "Feeding", icon: FeedingZoneIcon },
    { time: "07:00 - 09:00", type: "Resting", icon: RestingZoneIcon },
    { time: "09:00 - 11:00", type: "Feeding", icon: FeedingZoneIcon },
    { time: "11:00 - 13:00", type: "Resting", icon: RestingZoneIcon },
    { time: "13:00 - 15:00", type: "Feeding", icon: FeedingZoneIcon },
    { time: "15:00 - 17:00", type: "Resting", icon: RestingZoneIcon },
    { time: "17:00 - 19:00", type: "Feeding", icon: FeedingZoneIcon },
    { time: "19:00 - 00:00", type: "Resting", icon: RestingZoneIcon },
  ];

  // Features Table (Data from Screenshots)
  const features = [
    { label: "Behavior", value: "Calm, shy" },
    { label: "Habitat", value: "Swamps, ponds, lakes, rivers" },
    { label: "Senses", value: "Keen eyesight, acute sense of hearing, poor sense of smell" },
    { label: "Social", value: "Small mixed groups, but can also be found alone or in mated pairs" },
    { label: "Active", value: "Early morning and late afternoon" },
    { label: "Recommended Equipment", value: "Class 1 Ammo, Gadwall Caller, Gadwall Decoys" },
    { label: "Species", value: "Mareca strepera", italic: true },
    { label: "Difficulty", value: "Easy" },
  ];

  // Plumage Variants (Male)
  const plumageMale = [
    { name: "Albino - Front", color: "#eeeeee" },
    { name: "Albino - Back", color: "#bdbdbd" },
    { name: "Eclipse - Front", color: "#8d6e63" },
    { name: "Eclipse - Back", color: "#6d4c41" },
    { name: "Grey - Front", color: "#9e9e9e" },
    { name: "Grey - Back", color: "#757575" },
    { name: "Leucistic - Front", color: "#f5f5f5" },
    { name: "Leucistic - Back", color: "#e0e0e0" },
    { name: "Melanistic - Front", color: "#212121" },
    { name: "Melanistic - Back", color: "#000000" },
  ];

  // Plumage Variants (Female)
  const plumageFemale = [
    { name: "Albino - Front", color: "#eeeeee" },
    { name: "Albino - Back", color: "#bdbdbd" },
    { name: "Brown - Front", color: "#5d4037" },
    { name: "Brown - Back", color: "#3e2723" },
    { name: "Leucistic - Front", color: "#f5f5f5" },
    { name: "Leucistic - Back", color: "#e0e0e0" },
    { name: "Melanistic - Front", color: "#212121" },
    { name: "Melanistic - Back", color: "#000000" },
  ];

  // Actual gallery image arrays
  const maleImages = [
    Gadwall_AlbinoMaleFront,
    Gadwall_AlbinoMaleBack,
    Gadwall_EclipseMaleFront,
    Gadwall_EclipseMaleBack,
    Gadwall_GreyMaleFront,
    Gadwall_GreyMaleBack,
    Gadwall_LeucisticMaleFront,
    Gadwall_LeucisticMaleBack,
    Gadwall_MelanisticMaleFront,
    Gadwall_MelanisticMaleBack,
  ];

  const femaleImages = [
    Gadwall_AlbinoFemaleFront,
    Gadwall_AlbinoFemaleBack,
    Gadwall_BrownFemaleFront,
    Gadwall_BrownFemaleBack,
    Gadwall_LeucisticFemaleFront,
    Gadwall_LeucisticFemaleBack,
    Gadwall_MelanisticFemaleFront,
    Gadwall_MelanisticFemaleBack,
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
    // Shot Scheme
    shotContainer: {
      display: 'block',
      width: '500px',
      height: '444px',
      position: 'relative',
      backgroundColor: '#112233',
      marginTop: '10px',
      border: '1px solid #1f405a',
      overflow: 'hidden',
    },
    shotImage: {
      width: '100%',
      height: '100%',
      backgroundColor: '#000',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#555',
      flexShrink: 0,
    },
    shotInfo: {
      position: 'absolute',
      bottom: '0',
      left: '0',
      width: '100%',
      padding: '10px',
      background: 'rgba(0,0,0,0.5)',
      color: '#fff',
      boxSizing: 'border-box',
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
  
  // Table of contents data and smooth scroll handler
  const toc = [
    { id: 'features', title: 'Features' },
    { id: 'need-zone-times', title: 'Need Zone Times' },
    { id: 'shot-scheme', title: 'Shot scheme' },
    { id: 'tips', title: 'Tips' },
    { id: 'plumage-variants', title: 'Plumage Variants', sub: [
      { id: 'plumage-male', title: 'Male' },
      { id: 'plumage-female', title: 'Female' },
    ] },
    { id: 'plumage-rarity', title: 'Plumage Variant Rarity' },
    { id: 'trivia', title: 'Trivia' },
    { id: 'references', title: 'References' },
  ];

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      try { history.replaceState(null, '', `#${id}`); } catch (e) {}
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.innerWrapper}>
        
        {/* PAGE HEADER */}
          <div style={styles.mainHeader}>
          <span>Gadwall</span>
          <div style={styles.editActions}>
          </div>
        </div>

        <div style={styles.layout}>
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside style={styles.sidebarColumn}>
            <div style={styles.sidebarHeader}>Gadwall</div>
            <div style={styles.sidebarImage}>
              <img src={GadwallMain} alt="Gadwall" style={{width:'268.4px', height: '134.2px', objectFit: 'cover'}} />
            </div>
            
            <div style={styles.sidebarHeader}>General Information</div>
            
            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Class</span>
              <span><img src={class1Icon} alt="Class 1" style={{width:'20px', height: '20px', verticalAlign: 'middle', marginRight: '6px'}}/>1</span>
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
                  Albino, Brown, Eclipse, Grey, Leucistic, Melanistic
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
              "Gadwall Ducks are versatile waterfowl, found in a wide range of wetland habitats. They are particularly fond of shallow, freshwater habitats with abundant emergent vegetation for feeding and cover.
              Both male and female Gadwalls exhibit a muted yet distinctive color palette. Males feature a handsome pattern of intricate gray, brown and black markings on their bodies, with a striking black rear end and subtle iridescent sheen on their wings. Females, while less boldly patterned, display a warm mottled brown plumage, providing effective camouflage in their marshy habitats.
              Gadwalls are known for their cautious nature and keen awareness of their surroundings, making them a challenging quarry for waterfowl hunters."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p style={{marginBottom:'20px'}}>
              The <strong>Gadwall</strong> is a small <span style={styles.link}>class 1</span> species of duck, that can be hunted on <span style={styles.link}>Salzwiesen Park</span>.
            </p>

            {/* Table of Contents */}
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
                  <li key={item.id} style={{marginBottom: '6px'}}>
                    <a
                      href={`#${item.id}`}
                      onClick={(e)=>{e.preventDefault(); handleScroll(item.id);}}
                      style={styles.link}
                    >
                      {item.title}
                    </a>

                    {item.sub && item.sub.length > 0 && (
                      <ol style={{marginTop:'6px', paddingLeft: '18px', color: '#6fb2e6', listStyleType: 'none'}}>
                        {item.sub.map((sub, j) => (
                          <li key={sub.id}>
                            <a
                              href={`#${sub.id}`}
                              onClick={(e)=>{e.preventDefault(); handleScroll(sub.id);}}
                              style={styles.link}
                            >
                              {`${i+1}.${j+1} ${sub.title}`}
                            </a>
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

            {/* SHOT SCHEME */}
            <h2 id="shot-scheme" style={styles.h2}>Shot scheme</h2>
            <div style={{backgroundColor:'#0f2e48', padding: '10px'}}>
                <div style={{fontWeight:'bold', color: '#fff', paddingBottom: '5px', borderBottom: '1px solid #3a5a75'}}>Color code</div>
                  <div style={styles.shotContainer}>
                    <div style={styles.shotImage}>
                      <img src={Gadwall_shot_scheme} alt="Gadwall X-ray shot scheme" style={{width:'100%', height: '100%', objectFit: 'contain'}} />
                    </div>
                    <div style={styles.shotInfo}>
                      No Color - Every hit will kill the animal
                    </div>
                  </div>
            </div>

            {/* TIPS */}
            <h2 id="tips" style={styles.h2}>Tips</h2>
            <p>
              Ducks will fly against the wind when making a landing, so be mindful of the wind direction. If you are going to use blinds and decoys, place your decoys approximately 50ms (54yds) away from your blind so the <strong>Gadwall</strong> won't fly on top of you and spook.
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
                            Grey (59.87%),<br/>
                            Eclipse (39.97%)
                        </td>
                        <td style={styles.td}>X</td>
                        <td style={styles.td}>X</td>
                        <td style={styles.td}>
                            Albino (0.05%),<br/>
                            Leucistic (0.05%),<br/>
                            Melanistic (0.05%)
                        </td>
                    </tr>
                    <tr>
                        <td style={{...styles.td, color: '#9b59b6', fontStyle: 'italic'}}>Female</td>
                        <td style={styles.td}>
                            Brown (99.85%)
                        </td>
                        <td style={styles.td}>X</td>
                        <td style={styles.td}>X</td>
                        <td style={styles.td}>
                            Albino (0.05%),<br/>
                            Leucistic (0.05%),<br/>
                            Melanistic (0.05%)
                        </td>
                    </tr>
                </tbody>
            </table>

            {/* TRIVIA */}
            <h2 id="trivia" style={styles.h2}>Trivia</h2>
            <ul style={{paddingLeft:'20px', marginBottom: '30px'}}>
                <li style={{marginBottom:'8px'}}>Its scientific name consists of the words <i>Marreco</i> which is Portugese for small duck and <i>strepera</i> which is latin for <i>noisy</i>.</li>
                <li style={{marginBottom:'8px'}}>Gadwalls are known to frequently steal food from other ducks.</li>
            </ul>

            {/* REFERENCES */}
            <h2 id="references" style={styles.h2}>References</h2>
            <ol style={{paddingLeft:'25px', color: '#6fb2e6'}}>
                <li><span style={styles.link}>wikipedia.org</span></li>
                <li><span style={styles.link}>allaboutbirds.org</span></li>
            </ol>

            <AnimalsTableMini />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Gadwall;