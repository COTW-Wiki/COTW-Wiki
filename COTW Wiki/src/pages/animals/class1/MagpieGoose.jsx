import React from 'react';
import MagpieGooseXRay from '../../../assets/Magpie_Goose_shot_scheme.webp';
import MagpieGooseImg from '../../../assets/Magpie_Goose_first_look.webp';
import MagpieGooseIcon from '../../../assets/MagpieGoose_frame.webp';
import MagpieGoose_LeucisticVariation1Front from '../../../assets/MagpieGoose_LeucisticVariation1Front.webp';
import MagpieGoose_LeucisticVariation1Back from '../../../assets/MagpieGoose_LeucisticVariation1Back.webp';
import MagpieGoose_LeucisticVariation2Front from '../../../assets/MagpieGoose_LeucisticVariation2Front.webp';
import MagpieGoose_LeucisticVariation2Back from '../../../assets/MagpieGoose_LeucisticVariation2Back.webp';
import MagpieGoose_MaroonFront from '../../../assets/MagpieGoose_MaroonFront.webp';
import MagpieGoose_MaroonBack from '../../../assets/MagpieGoose_MaroonBack.webp';
import MagpieGoose_MelanisticFront from '../../../assets/MagpieGoose_MelanisticFront.webp';
import MagpieGoose_MelanisticBack from '../../../assets/MagpieGoose_MelanisticBack.webp';
import MagpieGoose_OrangeFront from '../../../assets/MagpieGoose_OrangeFront.webp';
import MagpieGoose_OrangeBack from '../../../assets/MagpieGoose_OrangeBack.webp';
import MagpieGoose_PiebaldVariation1Front from '../../../assets/MagpieGoose_PiebaldVariation1Front.webp';
import MagpieGoose_PiebaldVariation1Back from '../../../assets/MagpieGoose_PiebaldVariation1Back.webp';
import MagpieGoose_PiebaldVariation2Front from '../../../assets/MagpieGoose_PiebaldVariation2Front.webp';
import MagpieGoose_PiebaldVariation2Back from '../../../assets/MagpieGoose_PiebaldVariation2Back.webp';
import MagpieGoose_YellowFront from '../../../assets/MagpieGoose_YellowFront.webp';
import MagpieGoose_YellowBack from '../../../assets/MagpieGoose_YellowBack.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import class1Icon from '../../../assets/Class1Icon.webp';
import AnimalsTableMini from '../../../components/AnimalsTableMini';

const MagpieGoose = () => {
  // --- DATA SOURCES ---

  // Need Zone Times
  const needZones = [
    { time: "13:00 - 15:00", type: "Eating" } // Based on the visible table in screenshot
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Gregarious, vocal" },
    { label: "Habitat", value: "Shallow Wetlands (mires/coastal/rivers)" },
    { label: "Senses", value: "Excellent vision, good hearing and smell" },
    { label: "Social", value: "Forms medium to very large flocks. Strong lifelong breeding groups bonds between a dominant male along with up to three females" },
    { label: "Active", value: "Early morning to late afternoon" },
    { label: "Recommended Equipment", value: "Magpie Goose Caller, Magpie Goose Decoys, and Class 1 Ammo" },
    { label: "Species", value: "Anseranas semipalmata", italic: true },
    { label: "Difficulty", value: "Easy" },
  ];

  // Plumage Variants - actual image assets (front/back)
  const plumageImages = [
    { name: "Leucistic Variation 1 - Front", src: MagpieGoose_LeucisticVariation1Front },
    { name: "Leucistic Variation 1 - Back", src: MagpieGoose_LeucisticVariation1Back },
    { name: "Leucistic Variation 2 - Front", src: MagpieGoose_LeucisticVariation2Front },
    { name: "Leucistic Variation 2 - Back", src: MagpieGoose_LeucisticVariation2Back },
    { name: "Maroon - Front", src: MagpieGoose_MaroonFront },
    { name: "Maroon - Back", src: MagpieGoose_MaroonBack },
    { name: "Melanistic - Front", src: MagpieGoose_MelanisticFront },
    { name: "Melanistic - Back", src: MagpieGoose_MelanisticBack },
    { name: "Orange - Front", src: MagpieGoose_OrangeFront },
    { name: "Orange - Back", src: MagpieGoose_OrangeBack },
    { name: "Piebald Variation 1 - Front", src: MagpieGoose_PiebaldVariation1Front },
    { name: "Piebald Variation 1 - Back", src: MagpieGoose_PiebaldVariation1Back },
    { name: "Piebald Variation 2 - Front", src: MagpieGoose_PiebaldVariation2Front },
    { name: "Piebald Variation 2 - Back", src: MagpieGoose_PiebaldVariation2Back },
    { name: "Yellow - Front", src: MagpieGoose_YellowFront },
    { name: "Yellow - Back", src: MagpieGoose_YellowBack },
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
          <span>Magpie Goose</span>
          <div style={styles.editActions}>
          </div>
        </div>

        <div style={styles.layout}>
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside style={styles.sidebarColumn}>
            <div style={styles.sidebarHeader}>Magpie Goose</div>
            <div style={styles.sidebarImage}>
              <img src={MagpieGooseImg} alt="Magpie Goose" style={{width: '268.4px', height: '134.2px', objectFit: 'cover'}} />
              <span style={{position:'absolute', bottom:'5px', right:'5px', fontSize:'0.8rem'}}>📷</span>
            </div>
            
            <div style={styles.sidebarHeader}>General Information</div>
            
            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Class</span>
              <span><img src={class1Icon} alt="Class 1" style={{width:'12px', height:'12px', verticalAlign:'middle', marginRight:'6px'}}/>1</span>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Difficulty</span>
              <span>1: Trivial — 5: Medium</span>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Trophy Type</span>
              <span>Combined</span>
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
               1kg — 3kg<br/>
               0lbs — 7lbs
            </div>

            <div style={styles.sidebarSection}>
               <span style={styles.sidebarLabel}>Plumage</span>
               <span style={{fontSize: '0.85rem'}}>
                 Orange, Yellow, Maroon, Piebald, Leucistic, Melanistic
               </span>
            </div>

            <div style={styles.sidebarHeader}>Locations</div>
            <div style={styles.sidebarSection}>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Emerald Coast</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main style={styles.mainColumn}>

            {/* Quote Block */}
            <div style={styles.quoteBox}>
              "The magpie goose is the last known species of the Anseranatidae family. Rarely wandering inland, magpie geese are found in open wetland areas such as floodplains and swamps where they feed in large, noisy flocks.<br/><br/>
              Magpie geese are large birds with unwebbed long toes and unusual long legs that extend beyond the tail in flight. They have black heads, necks, tails, and wings. The head is topped with a knob that increases with age, and the face is covered with naked, red skin. The beak is small and slightly hooked. The rest of the body is white, with orange feet and legs. Unlike most waterfowl, these birds molt their flight feathers gradually, and are always able to fly as a result."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p style={{marginBottom: '20px'}}>
              The <strong>Magpie Goose</strong> is a (<span style={styles.link}>Class 1</span>) goose species that can be hunted on <span style={styles.link}>Emerald Coast</span>.
            </p>

            {/* Table of Contents (page-specific) */}
            {(() => {
              const tocItems = [
                { id: 'features', label: 'Features' },
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

            {/* Anchor for Tips (TOC includes Tips) */}
            <div id="tips" />

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
                        <tr>
                            <th style={{...styles.th, backgroundColor: '#0f2e48'}}>Times</th>
                            <th style={{...styles.th, backgroundColor: '#0f2e48'}}>Activity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {needZones.map((zone, i) => (
                        <tr key={i}>
                            <td style={styles.td}>{zone.time}</td>
                            <td style={styles.td}>{zone.type}</td>
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
                    <div style={{...styles.shotImage, width: '500px', height: '444px'}}>
                      <img src={MagpieGooseXRay} alt="Magpie Goose shot scheme" style={{width: '100%', height: '100%', objectFit: 'contain'}} />
                    </div>
                    <div style={styles.shotInfo}>
                        No Color - Every hit will kill the animal
                    </div>
                </div>
            </div>

            {/* PLUMAGE VARIANTS (Gallery) */}
            <h2 id="plumage-variants" style={styles.h2}>Plumage Variants</h2>
            <div style={styles.galleryGrid}>
              {plumageImages.map((img, i) => (
                <div key={i} style={styles.galleryItem}>
                  <img src={img.src} alt={img.name} style={{width: '146px', height: '165px', objectFit: 'cover', border: '4px solid #1f3a52', marginBottom: '8px'}} />
                  <span style={styles.galleryLabel}>{img.name}</span>
                </div>
              ))}
            </div>

            {/* PLUMAGE VARIANT RARITY TABLE */}
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
                            Yellow (33.20%)<br/>
                            Orange (33.20%)<br/>
                            Maroon (33.20%)
                        </td>
                        <td style={styles.td}>X</td>
                        <td style={styles.td}>
                            Piebald Variation 1 (0.13%)<br/>
                            Piebald Variation 2 (0.13%)
                        </td>
                        <td style={styles.td}>
                            Leucistic Variation 1 (0.04%)<br/>
                            Leucistic Variation 2 (0.04%)<br/>
                            Melanistic (0.04%)
                        </td>
                    </tr>
                </tbody>
            </table>

            {/* TRIVIA */}
            <h2 id="trivia" style={styles.h2}>Trivia</h2>
            <ul style={{paddingLeft: '20px', marginBottom: '30px'}}>
                <li style={{marginBottom:'8px'}}>The word <em>Magpie</em> comes from two words. The first part '<em>Mag</em>, an appreciation for <em>Margaret</em>, is used to describe someone or something who is chatty. The second part <em>Pie</em>, is also an old word used to describe Chattering.[1]</li>
                <li style={{marginBottom:'8px'}}>The Magpie Goose is the sole member of the <em>Anseranatidae</em> family. As such it is not considered a <em>True Goose</em>, as all <em>True Geese</em> are classified under the <em>Anatidae</em> family.</li>
                <li style={{marginBottom:'8px'}}>This extremely weird bird has many unique traits that distinguish it from other waterfowl. It has the longest legs proportional to its body of any waterfowl. The Magpie Gooses toes are also only partially webbed, instead of being fully webbed; which, along with it's strong back toe, allows it to be the only goose species that can perch and sleep on trees. This is why its scientific name is <em>semipalmeta</em>.[2][3][4]</li>
                <li style={{marginBottom:'8px'}}>The Magpie Goose is soo integral to the cultural lifestyle of the Aboriginal People of Australia, that efforts in conserving Aboriginal Culture has indirectly resulted in Magpie Goose conservation efforts.</li>
                <li>The <span style={styles.link}>Magpie Goose Caller</span> hides an Easter Egg. This caller specifically uses the old audio files for the Magpie Goose in <span style={styles.link}>theHunter: Classic</span> instead of using the ones for CALL OF THE WILD.</li>
            </ul>

            {/* REFERENCES */}
            <h2 id="references" style={styles.h2}>References</h2>
            <ol style={{paddingLeft: '25px', color: '#6fb2e6'}}>
                <li><span style={styles.link}>https://www.etymonline.com/word/magpie</span></li>
                <li><span style={styles.link}>https://www.britannica.com/animal/magpie-goose</span></li>
                <li><span style={styles.link}>https://seaworld.org/animals/facts/birds/magpie-goose/</span></li>
                <li><span style={styles.link}>https://animals.sandiegozoo.org/animals/magpie-goose</span></li>
            </ol>

            <AnimalsTableMini />
          </main>
        </div>
      </div>
    </div>
  );
};

export default MagpieGoose;