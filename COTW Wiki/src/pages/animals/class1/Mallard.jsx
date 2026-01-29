import React from 'react';
import MallardMain from '../../../assets/Mallard.webp';
import Mallard_BlackBrownMaleFront from '../../../assets/Mallard_BlackBrownMaleFront.webp';
import Mallard_BlackBrownMaleBack from '../../../assets/Mallard_BlackBrownMaleBack.webp';
import Mallard_BlackBrownFemaleFront from '../../../assets/Mallard_BlackBrownFemaleFront.webp';
import Mallard_BlackBrownFemaleBack from '../../../assets/Mallard_BlackBrownFemaleBack.webp';
import Mallard_BlondeFemaleFront from '../../../assets/Mallard_BlondeFemaleFront.webp';
import Mallard_BlondeFemaleBack from '../../../assets/Mallard_BlondeFemaleBack.webp';
import Mallard_BrownHybridMaleFront from '../../../assets/Mallard_BrownHybridMaleFront.webp';
import Mallard_BrownHybridMaleBack from '../../../assets/Mallard_BrownHybridMaleBack.webp';
import Mallard_LeucisticMaleFront from '../../../assets/Mallard_LeucisticMaleFront.webp';
import Mallard_LeucisticMaleBack from '../../../assets/Mallard_LeucisticMaleBack.webp';
import Mallard_MelanisticMaleFront from '../../../assets/Mallard_MelanisticMaleFront.webp';
import Mallard_MelanisticFemaleFront from '../../../assets/Mallard_MelanisticFemaleFront.webp';
import Mallard_MelanisticMaleBack from '../../../assets/Mallard_MelanisticMaleBack.webp';
import Mallard_MelanisticFemaleBack from '../../../assets/Mallard_MelanisticFemaleBack.webp';
import Mallard_BrownHybridFemaleFront from '../../../assets/Mallard_BrownHybridFemaleFront.webp';
import Mallard_BrownHybridFemaleBack from '../../../assets/Mallard_BrownHybridFemaleBack.webp';
import Mallard_PiebaldMaleFront from '../../../assets/Mallard_PiebaldMaleFront.webp';
import Mallard_PiebaldMaleBack from '../../../assets/Mallard_PiebaldMaleBack.webp';
import Mallard_PiebaldFemaleFront from '../../../assets/Mallard_PiebaldFemaleFront.webp';
import Mallard_PiebaldFemaleBack from '../../../assets/Mallard_PiebaldFemaleBack.webp';
import Mallard_shot_scheme from '../../../assets/Mallard_shot_scheme.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import class1Icon from '../../../assets/Class1Icon.webp';
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

const Mallard = () => {
  // --- DATA SOURCES ---

  // Need Zone Times
  const needZones = [
    { time: "00:00 - 05:00", type: "Resting", icon: RestingZoneIcon },
    { time: "05:00 - 07:00", type: "Feeding", icon: FeedingZoneIcon },
    { time: "07:00 - 09:00", type: "Resting", icon: RestingZoneIcon },
    { time: "09:00 - 11:00", type: "Feeding", icon: FeedingZoneIcon },
    { time: "11:00 - 13:00", type: "Resting", icon: RestingZoneIcon },
    { time: "13:00 - 15:00", type: "Feeding", icon: FeedingZoneIcon },
    { time: "15:00 - 17:00", type: "Resting", icon: RestingZoneIcon },
    { time: "17:00 - 29:00", type: "Feeding", icon: FeedingZoneIcon }, // Note: In-game UI typo says 29:00, likely means 19:00
    { time: "19:00 - 00:00", type: "Resting", icon: RestingZoneIcon },
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Vocal and social" },
    { label: "Habitat", value: "Swamps, ponds, lakes, rivers" },
    { label: "Senses", value: "Great hearing, decent vision, poor sense of smell" },
    { label: "Social", value: "Mixed groups with one dominant male. Some males remain solitary" },
    { label: "Active", value: "Night, dawn and early morning" },
    { label: "Recommended Equipment", value: "Class 1 Ammo, Beacon Deluxe Duck Caller, Mallard Decoys" },
    { label: "Species", value: "Anas platyrhynchos", italic: true },
    { label: "Difficulty", value: "Easy" },
  ];

  // Plumage Variants (Male)
  const plumageMale = [
    { name: "Black Brown - Front", src: Mallard_BlackBrownMaleFront },
    { name: "Black Brown - Back", src: Mallard_BlackBrownMaleBack },
    { name: "Brown Hybrid - Front", src: Mallard_BrownHybridMaleFront },
    { name: "Brown Hybrid - Back", src: Mallard_BrownHybridMaleBack },
    { name: "Leucistic - Front", src: Mallard_LeucisticMaleFront },
    { name: "Leucistic - Back", src: Mallard_LeucisticMaleBack },
    { name: "Melanistic - Front", src: Mallard_MelanisticMaleFront },
    { name: "Melanistic - Back", src: Mallard_MelanisticMaleBack },
    { name: "Piebald - Front", src: Mallard_PiebaldMaleFront },
    { name: "Piebald - Back", src: Mallard_PiebaldMaleBack },
  ];

  // Plumage Variants (Female)
  const plumageFemale = [
    { name: "Black Brown - Front", src: Mallard_BlackBrownFemaleFront },
    { name: "Black Brown - Back", src: Mallard_BlackBrownFemaleBack },
    { name: "Blonde - Front", src: Mallard_BlondeFemaleFront },
    { name: "Blonde - Back", src: Mallard_BlondeFemaleBack },
    { name: "Brown Hybrid - Front", src: Mallard_BrownHybridFemaleFront },
    { name: "Brown Hybrid - Back", src: Mallard_BrownHybridFemaleBack },
    { name: "Melanistic - Front", src: Mallard_MelanisticFemaleFront },
    { name: "Melanistic - Back", src: Mallard_MelanisticFemaleBack },
    { name: "Piebald - Front", src: Mallard_PiebaldFemaleFront },
    { name: "Piebald - Back", src: Mallard_PiebaldFemaleBack },
  ];

  // Table of contents data
  const toc = [
    { id: 'features', title: 'Features' },
    { id: 'need-zones', title: 'Need Zone Times' },
    { id: 'shot-scheme', title: 'Shot scheme' },
    { id: 'tips', title: 'Tips' },
    { id: 'plumage-variants', title: 'Plumage Variants', subs: [
      { id: 'plumage-male', title: 'Male' },
      { id: 'plumage-female', title: 'Female' },
    ] },
    { id: 'plumage-rarity', title: 'Plumage Variant Rarity' },
    { id: 'trivia', title: 'Trivia' },
    { id: 'references', title: 'References' },
  ];

  const handleTOCClick = (id) => {
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
          <span>Mallard</span>
          <div style={styles.editActions}>
          </div>
        </div>

        <div style={styles.layout}>
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside style={styles.sidebarColumn}>
            <div style={styles.sidebarHeader}>Mallard</div>
            <div style={styles.sidebarImage}>
              <img src={MallardMain} alt="Mallard flying" style={{width: '268.4px', height: '134.2px', objectFit: 'cover'}} />
            </div>
            
            <div style={styles.sidebarHeader}>General Information</div>
            
            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Class</span>
              <span><img src={class1Icon} alt="Class 1" style={{width:'20px', height:'20px', verticalAlign:'middle', marginRight:'6px'}}/>1</span>
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
                   <span>9.96</span>
                </div>
                <div style={styles.trophyItem}>
                   <span style={{...styles.trophyLabel, ...styles.gold}}>☗ Gold</span>
                   <span>15.48</span>
                </div>
                <div style={styles.trophyItem}>
                   <span style={{...styles.trophyLabel, ...styles.diamond}}>☗ Diamond</span>
                   <span>19.61</span>
                </div>
              </div>
            </div>

            <div style={styles.sidebarSection}>
               <span style={styles.sidebarLabel}>Weight</span>
               0.72kg — 2.1kg<br/>
               2lbs — 5lbs
            </div>

            <div style={styles.sidebarSection}>
               <span style={styles.sidebarLabel}>Plumage</span>
               <span style={{fontSize: '0.85rem'}}>
                 Black-Brown, Blonde, Brown Hybrid, Leucistic, Melanistic, Piebald
               </span>
            </div>

            <div style={styles.sidebarHeader}>Locations</div>
            <div style={styles.sidebarSection}>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Layton Lake District</span></div>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Revontuli Coast</span></div>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>New England Mountains</span></div>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Te Awaroa National Park</span></div>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Salzwiesen Park</span></div>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Askiy Ridge Hunting Preserve</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main style={styles.mainColumn}>

            {/* Quote Block */}
            <div style={styles.quoteBox}>
              "The mallard is a medium to large sized dabbling duck with a hefty body, rounded head, and wide flat bill. Males have a dark, iridescent-green head and bright yellow bill while females are mottled brown and possess orange-brown bills. As to dabbling ducks, mallards feed in the water by tipping forward and grazing on a highly diverse diet of underwater prey and plants. They are notoriously widespread and can be found on lakes, ponds, marshes, rivers and coastal habitats. Hunting mallards revolve around planning, patience and a little bit of luck. They will usually spend their days between two bodies of water, one that they use for resting, preening and socialization and the other they use as their feeding ground."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p style={{marginBottom: '20px'}}>
              The <strong>Mallard</strong> is a small <span style={styles.link}>class 1</span> animal that can be hunted on the <span style={styles.link}>Layton Lake District</span>, <span style={styles.link}>Revontuli Coast</span>, <span style={styles.link}>New England Mountains</span> and <span style={styles.link}>Salzwiesen Park</span>. It was retroactively added to <span style={styles.link}>Te Awaroa National Park</span> after the release of New England. Also, it is the first of 8 species of duck to be introduced to the game. This was followed by the <span style={styles.link}>Cinnamon Teal</span> and then the <span style={styles.link}>Harlequin Duck</span>.
            </p>
            <p style={{marginBottom: '20px'}}>
              The mallard was released as a free <span style={styles.link}>DLC</span>.
            </p>

            {/* Programmatic Table of Contents */}
            <div style={{
              border: '1px solid #3a5a75',
              backgroundColor: '#0f2e48',
              display: 'inline-block',
              padding: '10px 20px',
              borderRadius: '4px',
              minWidth: '200px'
            }}>
              <div style={{fontWeight: 'bold', borderBottom: '1px solid #3a5a75', marginBottom: '5px'}}>
                🔢 Contents <span style={{float:'right', color: '#6fb2e6', fontSize:'0.8rem'}}>[hide]</span>
              </div>
              <ol style={{margin: 0, paddingLeft: 0, listStyleType: 'none', color: '#6fb2e6'}}>
                {toc.map((item, i) => (
                  <li key={item.id} style={{marginBottom: '6px'}}>
                    <button onClick={() => handleTOCClick(item.id)} style={{background: 'none', border: 'none', color: '#6fb2e6', cursor: 'pointer', fontWeight: 'bold'}}>
                      <span style={{marginRight: '8px'}}>{i + 1}.</span>{item.title}
                    </button>
                    {item.subs && (
                      <ol style={{margin: '6px 0 0 18px', padding: 0, listStyleType: 'none'}}>
                        {item.subs.map((s, j) => (
                          <li key={s.id} style={{marginBottom: '4px'}}>
                            <button onClick={() => handleTOCClick(s.id)} style={{background: 'none', border: 'none', color: '#6fb2e6', cursor: 'pointer'}}>
                              <span style={{marginRight: '8px'}}>{i + 1}.{j + 1}</span>{s.title}
                            </button>
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
                        <tr><th colSpan="2" style={{...styles.th, textAlign: 'center'}}>Askiy Ridge<sup>[1]</sup></th></tr>
                        <tr>
                            <th style={{...styles.th, backgroundColor: '#0f2e48'}}>Times</th>
                            <th style={{...styles.th, backgroundColor: '#0f2e48'}}>Activity</th>
                        </tr>
                    </thead>
                    <tbody>
                      {needZones.map((zone, i) => (
                      <tr key={i}>
                        <td style={styles.td}>{zone.time}</td>
                        <td style={styles.td}><img src={zone.icon} alt="" style={{width:'18px', height:'18px', verticalAlign:'middle', marginRight:'6px'}}/>{zone.type}</td>
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
                    <img src={Mallard_shot_scheme} alt="Mallard shot scheme" style={{width: '500px', height: '444px', objectFit: 'contain'}} />
                  </div>
                  <div style={styles.shotInfo}>
                    No Color - Every hit will kill the animal
                  </div>
                </div>
            </div>

            {/* TIPS */}
            <h2 id="tips" style={styles.h2}>Tips</h2>
            <p>
              Ducks will fly against the wind when making a landing, so be mindful of the wind direction. <span style={styles.link}>Revontuli Coast</span> is currently the best map to hunt <strong>Mallards</strong>, since there is less cover for the ducks to hide behind. If you can only hunt on <span style={styles.link}>Layton Lake District</span>, look for spots with few to no reeds and little brush on the shorelines. If you are going to use blinds and decoys, place your decoys approximately 50ms (54yds) away from your blind so the <strong>mallards</strong> won't fly on top of you and spook.
            </p>

            {/* PLUMAGE VARIANTS (Gallery) */}
            <h2 id="plumage-variants" style={styles.h2}>Plumage Variants</h2>
            
            <h3 id="plumage-male" style={styles.h3}>Male</h3>
            <div style={styles.galleryGrid}>
              {plumageMale.map((img, i) => (
                  <div key={i} style={styles.galleryItem}>
                            <img src={img.src} alt={img.name} style={{width: '146px', height: '165px', objectFit: 'cover', border: '4px solid #1f3a52', marginBottom: '8px', display: 'block'}} />
                            <span style={styles.galleryLabel}>{img.name}</span>
                  </div>
              ))}
            </div>

            <h3 id="plumage-female" style={styles.h3}>Female</h3>
            <div style={styles.galleryGrid}>
              {plumageFemale.map((img, i) => (
                  <div key={i} style={styles.galleryItem}>
                        <img src={img.src} alt={img.name} style={{width: '146px', height: '165px', objectFit: 'cover', border: '4px solid #1f3a52', marginBottom: '8px', display: 'block'}} />
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
                            Black Brown (74.77%)<br/>
                            Piebald (12.51%)<br/>
                            Brown Hybrid (12.51%)
                        </td>
                        <td style={styles.td}>X</td>
                        <td style={styles.td}>
                            Leucistic (0.10%)<br/>
                            Melanistic (0.10%)
                        </td>
                        <td style={styles.td}>X</td>
                    </tr>
                    {/* Female Row */}
                    <tr>
                        <td style={{...styles.td, color: '#e91e63', fontStyle: 'italic'}}>Female</td>
                        <td style={styles.td}>
                            Black Brown (74.77%)<br/>
                            Piebald (12.51%)<br/>
                            Brown Hybrid (12.51%)
                        </td>
                        <td style={styles.td}>X</td>
                        <td style={styles.td}>
                            Blonde (0.10%)<br/>
                            Melanistic (0.10%)
                        </td>
                        <td style={styles.td}>X</td>
                    </tr>
                </tbody>
            </table>

            {/* TRIVIA */}
            <h2 id="trivia" style={styles.h2}>Trivia</h2>
            <ul style={{paddingLeft: '20px', marginBottom: '30px'}}>
                <li style={{marginBottom:'8px'}}>According to Earnest Alfred Choate, the <em>a-r-d</em> in Mallard refers to <em>drunkards</em> describing how aggressive male Mallards get when mating.[2]</li>
                <li style={{marginBottom:'8px'}}>In real life, there are three common calls that are done with a Mallard Hen call: Quack, Hail, and Feeding Chuckle. In game, only the quack and hail can be made with the duck call.</li>
                <li style={{marginBottom:'8px'}}>The males distinctive color pattern isn't year round. It develops during mating season to attract females.</li>
                <li style={{marginBottom:'8px'}}>The Mallard is believed to be the ancestor of most domestic duck species; it is also one of only two domesticated duck species. The other is the Muscovy Duck.[3]</li>
                <li>It is one of 8 species of duck huntable in game. The others include the <span style={styles.link}>Cinnamon Teal</span>, the <span style={styles.link}>Harlequin Duck</span>, the <span style={styles.link}>Eurasian Teal</span>, the <span style={styles.link}>Eurasian Wigeon</span>, the <span style={styles.link}>Goldeneye</span>, the <span style={styles.link}>Tufted Duck</span>, and the <span style={styles.link}>Green Winged Teal</span>.</li>
            </ul>

            {/* REFERENCES */}
            <h2 id="references" style={styles.h2}>References</h2>
            <ol style={{paddingLeft: '25px', color: '#6fb2e6'}}>
                <li><span style={styles.link}>Mallard Need Zones, Askiy Ridge</span></li>
                <li><span style={styles.link}>"The Dictionary of American Bird Names" by Earnest Alfred Choate</span></li>
                <li><span style={styles.link}>https://www.birds.cornell.edu/crows/domducks.htm</span></li>
            </ol>

            <AnimalsTableMini />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Mallard;