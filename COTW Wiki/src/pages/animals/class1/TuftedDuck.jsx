import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import class1Icon from '../../../assets/Class1Icon.webp';
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';
import React from 'react';
import TuftedDuckMain from '../../../assets/TuftedDuck.webp';
import TuftedDuck_AlbinoMaleFront from '../../../assets/TuftedDuck_AlbinoMaleFront.webp';
import TuftedDuck_AlbinoMaleBack from '../../../assets/TuftedDuck_AlbinoMaleBack.webp';
import TuftedDuck_BlackMaleFront from '../../../assets/TuftedDuck_BlackMaleFront.webp';
import TuftedDuck_BlackMaleBack from '../../../assets/TuftedDuck_BlackMaleBack.webp';
import TuftedDuck_EclipseMaleFront from '../../../assets/TuftedDuck_EclipseMaleFront.webp';
import TuftedDuck_EclipseMaleBack from '../../../assets/TuftedDuck_EclipseMaleBack.webp';
import TuftedDuck_BrownFemaleFront from '../../../assets/TuftedDuck_BrownFemaleFront.webp';
import TuftedDuck_BrownFemaleBack from '../../../assets/TuftedDuck_BrownFemaleBack.webp';
import TuftedDuck_CreamFemaleFront from '../../../assets/TuftedDuck_CreamFemaleFront.webp';
import TuftedDuck_CreamFemaleBack from '../../../assets/TuftedDuck_CreamFemaleBack.webp';
import TuftedDuck_LeucisticVariation1MaleFront from '../../../assets/TuftedDuck_LeucisticVariation1MaleFront.webp';
import TuftedDuck_LeucisticVariation1MaleBack from '../../../assets/TuftedDuck_LeucisticVariation1MaleBack.webp';
import TuftedDuck_LeucisticVariation1FemaleFront from '../../../assets/TuftedDuck_LeucisticVariation1FemaleFront.webp';
import TuftedDuck_LeucisticVariation1FemaleBack from '../../../assets/TuftedDuck_LeucisticVariation1FemaleBack.webp';
import TuftedDuck_LeucisticVariation2MaleFront from '../../../assets/TuftedDuck_LeucisticVariation2MaleFront.webp';
import TuftedDuck_LeucisticVariation2MaleBack from '../../../assets/TuftedDuck_LeucisticVariation2MaleBack.webp';
import TuftedDuck_LeucisticVariation2FemaleFront from '../../../assets/TuftedDuck_LeucisticVariation2FemaleFront.webp';
import TuftedDuck_LeucisticVariation2FemaleBack from '../../../assets/TuftedDuck_LeucisticVariation2FemaleBack.webp';

const TuftedDuck = () => {
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
    { time: "17:00 - 19:00", type: "Feeding", icon: FeedingZoneIcon },
    { time: "19:00 - 00:00", type: "Resting", icon: RestingZoneIcon },
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Gregarious, skittish" },
    { label: "Habitat", value: "Ponds, lakes, wetlands and sheltered coastal areas" },
    { label: "Senses", value: "Excellent vision" },
    { label: "Social", value: "Mixed groups most of the year, mated pairs during breeding season" },
    { label: "Active", value: "Most active at night" },
    { label: "Recommended Equipment", value: "Class 1 Ammo, Tufted Duck Decoys" },
    { label: "Species", value: "Aythya fuligula", italic: true },
    { label: "Difficulty", value: "Easy" },
  ];

  // Plumage Variants (Male)
  const plumageMale = [
    { name: "Albino - Front", src: TuftedDuck_AlbinoMaleFront },
    { name: "Albino - Back", src: TuftedDuck_AlbinoMaleBack },
    { name: "Black - Front", src: TuftedDuck_BlackMaleFront },
    { name: "Black - Back", src: TuftedDuck_BlackMaleBack },
    { name: "Eclipse - Front", src: TuftedDuck_EclipseMaleFront },
    { name: "Eclipse - Back", src: TuftedDuck_EclipseMaleBack },
    { name: "Leucistic Variation 1 - Front", src: TuftedDuck_LeucisticVariation1MaleFront },
    { name: "Leucistic Variation 1 - Back", src: TuftedDuck_LeucisticVariation1MaleBack },
    { name: "Leucistic Variation 2 - Front", src: TuftedDuck_LeucisticVariation2MaleFront },
    { name: "Leucistic Variation 2 - Back", src: TuftedDuck_LeucisticVariation2MaleBack },
  ];

  // Plumage Variants (Female)
  const plumageFemale = [
    { name: "Brown - Front", src: TuftedDuck_BrownFemaleFront },
    { name: "Brown - Back", src: TuftedDuck_BrownFemaleBack },
    { name: "Cream - Front", src: TuftedDuck_CreamFemaleFront },
    { name: "Cream - Back", src: TuftedDuck_CreamFemaleBack },
    { name: "Leucistic Variation 1 - Front", src: TuftedDuck_LeucisticVariation1FemaleFront },
    { name: "Leucistic Variation 1 - Back", src: TuftedDuck_LeucisticVariation1FemaleBack },
    { name: "Leucistic Variation 2 - Front", src: TuftedDuck_LeucisticVariation2FemaleFront },
    { name: "Leucistic Variation 2 - Back", src: TuftedDuck_LeucisticVariation2FemaleBack },
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
      width: '268.4px',
      height: '134.2px',
      backgroundColor: '#1f3a52',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#6fb2e6',
      fontStyle: 'italic',
      borderBottom: '1px solid #1f405a',
      position: 'relative',
      overflow: 'hidden',
      borderRadius: '6px',
      padding: '0',
      margin: '12px auto',
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

  // Programmatic Table of Contents
  const toc = [
    { id: 'features', title: 'Features' },
    { id: 'need-zones', title: 'Need Zone Times' },
    { id: 'tips', title: 'Tips' },
    { id: 'plumage-variants', title: 'Plumage Variants', children: [
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

  return (
    <div style={styles.container}>
      <div style={styles.innerWrapper}>
        
        {/* PAGE HEADER */}
        <div style={styles.mainHeader}>
          <span>Tufted Duck</span>
          <div style={styles.editActions}>
          </div>
        </div>

        <div style={styles.layout}>
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside style={styles.sidebarColumn}>
            <div style={styles.sidebarHeader}>Tufted Duck</div>
            <div style={styles.sidebarImage}>
              <img src={TuftedDuckMain} alt="Tufted Duck" style={{width: '100%', height: '100%', objectFit: 'cover', display: 'block', margin: 0}} />
            </div>
            
            <div style={styles.sidebarHeader}>General Information</div>
            
            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Class</span>
              <span style={{display: 'inline-flex', alignItems: 'center', gap: '8px'}}><img src={class1Icon} alt="Class 1" style={{width: '20px', height: '20px'}} />1</span>
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
                   <span>TBA</span>
                </div>
                <div style={styles.trophyItem}>
                   <span style={{...styles.trophyLabel, ...styles.gold}}>☗ Gold</span>
                   <span>TBA</span>
                </div>
                <div style={styles.trophyItem}>
                   <span style={{...styles.trophyLabel, ...styles.diamond}}>☗ Diamond</span>
                   <span>TBA</span>
                </div>
              </div>
            </div>

            <div style={styles.sidebarSection}>
               <span style={styles.sidebarLabel}>Weight</span>
               630g — 1000g<br/>
               1.4lbs — 2.2lbs
            </div>

            <div style={styles.sidebarSection}>
               <span style={styles.sidebarLabel}>Plumage</span>
               <span style={{fontSize: '0.85rem'}}>
                 Albino, Black, Brown, Cream, Eclipse, Leucistic
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
              "The Tufted Duck is a common species of diving duck found mostly in Western, Central and Northern Europe. It lives in marshes, wetlands and sheltered coastal areas where it feeds on molluscs, insects, crustaceans, roots and seeds. Males have a peculiar tuft of feathers on the back of their heads, giving the species its name. Their black and white plumage is also very distinctive, making them easy to recognize among other ducks."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p style={{marginBottom: '20px'}}>
              The <strong>Tufted Duck</strong> is a <span style={styles.link}>class 1</span> duck species that can be hunted on <span style={styles.link}>Revontuli Coast</span> and <span style={styles.link}>Salzwiesen Park</span>. It is one of 3 sea duck or diving duck species currently huntable in game. The others are the <span style={styles.link}>Harlequin Duck</span> and the <span style={styles.link}>Goldeneye</span>.
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
                <div style={{fontWeight: 'bold', borderBottom: '1px solid #3a5a75', marginBottom: '5px'}}>
                  🔢 Contents <span style={{float:'right', color: '#6fb2e6', fontSize: '0.8rem'}}>[hide]</span>
                </div>
                <ol style={{margin: '0', paddingLeft: '20px', color: '#6fb2e6', listStyleType: 'none'}}>
                  {toc.map((item, i) => (
                    <li key={item.id} style={{marginBottom: item.children ? '6px' : '4px'}}>
                      <a onClick={() => handleTOCClick(item.id)} style={{...styles.link, cursor: 'pointer'}}>{`${i+1}. ${item.title}`}</a>
                      {item.children && (
                        <ol style={{marginTop: '6px', paddingLeft: '18px', listStyleType: 'none'}}>
                          {item.children.map((child, j) => (
                            <li key={child.id}>
                              <a onClick={() => handleTOCClick(child.id)} style={{...styles.link, cursor: 'pointer'}}>{`${i+1}.${j+1} ${child.title}`}</a>
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
                          <td style={styles.td}><img src={zone.icon} alt={zone.type} style={{width: '20px', height: '20px', verticalAlign: 'middle', marginRight: '8px'}} />{zone.type}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Shot scheme removed per request */}

            {/* TIPS */}
            <h2 id="tips" style={styles.h2}>Tips</h2>
            <p>
              Ducks will fly against the wind when making a landing, so be mindful of the wind direction. If you are going to use blinds and decoys, place your decoys approximately 50ms (54yds) away from your blind so the <strong>Tufted Duck</strong> won't fly on top of you and spook.
            </p>

            {/* PLUMAGE VARIANTS (Gallery) */}
            <h2 id="plumage-variants" style={styles.h2}>Plumage Variants</h2>
            
            <h3 id="plumage-male" style={styles.h3}>Male</h3>
            <div style={styles.galleryGrid}>
              {plumageMale.map((img, i) => (
                <div key={i} style={styles.galleryItem}>
                  <div style={{...styles.galleryImgPlaceholder, height: '165px', width: '146px', padding: 0}}>
                    <img src={img.src} alt={img.name} style={{width: '146px', height: '165px', objectFit: 'cover', display: 'block'}} />
                  </div>
                  <span style={styles.galleryLabel}>{img.name}</span>
                </div>
              ))}
            </div>

            <h3 id="plumage-female" style={styles.h3}>Female</h3>
            <div style={styles.galleryGrid}>
              {plumageFemale.map((img, i) => (
                <div key={i} style={styles.galleryItem}>
                  <div style={{...styles.galleryImgPlaceholder, height: '165px', width: '146px', padding: 0}}>
                    <img src={img.src} alt={img.name} style={{width: '146px', height: '165px', objectFit: 'cover', display: 'block'}} />
                  </div>
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
                            Black (99.73%)
                        </td>
                        <td style={styles.td}>X</td>
                        <td style={styles.td}>
                            Eclipse (0.13%)
                        </td>
                        <td style={styles.td}>
                            Albino (0.04%)<br/>
                            Leucistic Variation 1 (0.04%)<br/>
                            Leucistic Variation 2 (0.04%)
                        </td>
                    </tr>
                    {/* Female Row */}
                    <tr>
                        <td style={{...styles.td, color: '#e91e63', fontStyle: 'italic'}}>Female</td>
                        <td style={styles.td}>
                            Brown (99.78%)
                        </td>
                        <td style={styles.td}>X</td>
                        <td style={styles.td}>
                            Cream (0.13%)
                        </td>
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
                <li style={{marginBottom:'8px'}}>The Tufted Duck is called <em>Tukkasotka</em> in Finnish.</li>
                <li style={{marginBottom:'8px'}}>The Genus name for this bird <em>Aythya</em> is derived from the Greek word "aithuia". That word is either referencing a specific "unidentified seabird" in Ancient Greek myth, or just a generic "unidentified seabird".</li>
                <li style={{marginBottom:'8px'}}>One more thing about the word "aithuia": in Ancient Greek Tradition, it was common for people to assign Surnames to Gods as to recognize their many accomplishments. One of these surnames for the goddess Athena was "aithuia". If translated loosely, it would mean something like "of the Diver-bird".</li>
                <li style={{marginBottom:'8px'}}>The scientific name for the Tufted Duck <em>fuligula</em> means "Soot Throat" in Latin.</li>
            </ul>

            {/* REFERENCES */}
            <h2 id="references" style={styles.h2}>References</h2>
            <ol style={{paddingLeft: '25px', color: '#6fb2e6'}}>
                <li><span style={styles.link}>Tufted Duck Need Zones, Revontuli Coast</span></li>
                <li><span style={styles.link}>theHunter: Call of the Wild Wiki</span></li>
            </ol>

            <AnimalsTableMini />
          </main>
        </div>
      </div>
    </div>
  );
};

export default TuftedDuck;