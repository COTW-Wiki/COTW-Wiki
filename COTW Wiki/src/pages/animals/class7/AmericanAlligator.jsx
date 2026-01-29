import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import DrinkingZoneIcon from '../../../assets/DrinkingZoneIcon.webp';
import class7Icon from '../../../assets/Class7Icon.webp'; // Class 7 for American Alligator
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import AmericanAlligatorMain from '../../../assets/AmericanAlligator.webp';
//import ShotSchemeImg from '../../../assets/AmericanAlligator_shot_scheme.webp';

// Scute Variant Images - Male & Female (Based on "Scute Variants" screenshot)
// Assuming separate images based on the grid provided in the screenshot
import AmericanAlligator_AlbinoLeftSide from '../../../assets/AmericanAlligator_AlbinoLeftSide.webp';
import AmericanAlligator_DarkBrownLeftSide from '../../../assets/AmericanAlligator_DarkBrownLeftSide.webp';
import AmericanAlligator_MelanisticLeftSide from '../../../assets/AmericanAlligator_MelanisticLeftSide.webp';
import AmericanAlligator_OliveLeftSide from '../../../assets/AmericanAlligator_OliveLeftSide.webp';
import AmericanAlligator_PiebaldVariation1LeftSide from '../../../assets/AmericanAlligator_PiebaldVariation1LeftSide.webp';
import AmericanAlligator_PiebaldVariation1RightSide from '../../../assets/AmericanAlligator_PiebaldVariation1RightSide.webp';
import AmericanAlligator_PiebaldVariation2LeftSide from '../../../assets/AmericanAlligator_PiebaldVariation2LeftSide.webp';
import AmericanAlligator_PiebaldVariation2RightSide from '../../../assets/AmericanAlligator_PiebaldVariation2RightSide.webp';
import AmericanAlligator_PiebaldVariation3LeftSide from '../../../assets/AmericanAlligator_PiebaldVariation3LeftSide.webp';
import AmericanAlligator_PiebaldVariation3RightSide from '../../../assets/AmericanAlligator_PiebaldVariation3RightSide.webp';
import AmericanAlligator_PiebaldVariation4LeftSide from '../../../assets/AmericanAlligator_PiebaldVariation4LeftSide.webp';
import AmericanAlligator_PiebaldVariation4RightSide from '../../../assets/AmericanAlligator_PiebaldVariation4RightSide.webp';
import AmericanAlligator_PiebaldVariation5LeftSide from '../../../assets/AmericanAlligator_PiebaldVariation5LeftSide.webp';
import AmericanAlligator_PiebaldVariation5RightSide from '../../../assets/AmericanAlligator_PiebaldVariation5RightSide.webp';


const AmericanAlligator = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  const needZonesData = [
    {
      name: "Mississippi Acres Preserve",
      schedule: [
        { time: "00:00 - 03:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "03:00 - 06:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "06:00 - 09:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "09:00 - 12:30", type: "Resting", icon: RestingZoneIcon },
        { time: "12:00 - 16:30", type: "Resting", icon: RestingZoneIcon },
        { time: "16:00 - 20:30", type: "Resting", icon: RestingZoneIcon },
        { time: "20:00 - 00:30", type: "Feeding", icon: FeedingZoneIcon },
      ]
    }
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Skittish and dangerous" },
    { label: "Habitat", value: "Swamps, ponds, lakes, rivers" },
    { label: "Senses", value: "Excellent sense of smell and vibration" },
    { label: "Social", value: "Large specimen are solitary, while smaller ones can coexist" },
    { label: "Active", value: "Mostly active between dusk and dawn" },
    { label: "Recommended Equipment", value: "Class 7 Ammo, Quist Red Pro Electronic Caller" },
    { label: "Species", value: "Alligator mississippiensis", italic: true, isLink: true },
    { label: "Difficulty", value: "Hard" },
  ];

  // Scute Gallery Data
  // Note: The screenshot labels these as "Scute Variants"
  const scuteGallery = [
    { name: "Albino", src: AmericanAlligator_AlbinoLeftSide },
    { name: "Dark Brown", src: AmericanAlligator_DarkBrownLeftSide },
    { name: "Melanistic", src: AmericanAlligator_MelanisticLeftSide },
    { name: "Olive", src: AmericanAlligator_OliveLeftSide },
    { name: "Piebald Variation 1 (Left)", src: AmericanAlligator_PiebaldVariation1LeftSide },
    { name: "Piebald Variation 1 (Right)", src: AmericanAlligator_PiebaldVariation1RightSide },
    { name: "Piebald Variation 2 (Left)", src: AmericanAlligator_PiebaldVariation2LeftSide },
    { name: "Piebald Variation 2 (Right)", src: AmericanAlligator_PiebaldVariation2RightSide },
    { name: "Piebald Variation 3 (Left)", src: AmericanAlligator_PiebaldVariation3LeftSide },
    { name: "Piebald Variation 3 (Right)", src: AmericanAlligator_PiebaldVariation3RightSide },
    { name: "Piebald Variation 4 (Left)", src: AmericanAlligator_PiebaldVariation4LeftSide },
    { name: "Piebald Variation 4 (Right)", src: AmericanAlligator_PiebaldVariation4RightSide },
    { name: "Piebald Variation 5 (Left)", src: AmericanAlligator_PiebaldVariation5LeftSide },
    { name: "Piebald Variation 5 (Right)", src: AmericanAlligator_PiebaldVariation5RightSide },
  ];

  // Tips Data
  const tipsData = [
    "Shooting in the tail would not be advised. The tail is long, provides no vital organs to hit, and it is unlikely any gun can penetrate all the way through the tail to the liver/lungs.",
    "8-10 Alligators will run away, but if you're close enough they have the advantage of being undetectable while submerged in water (may attack on land also) they may attack. A issue with hunting these reptiles is that once they are spooked, they will quickly run into the lake/river/pond (Depending where you're hunting) and submerge itself. Here is how to shoot one and put down: If it is facing you or is in a position you could go for the head, a brain/skull shot will put it down quickly or it will run and die later. If it is not facing you, instead going left or right, go for the chest.",
    "The American Alligator is one of the few animals that should be killed by a brain shot, due to the fact, that heart shots are almost impossible to land. The final score will not be negatively affected by said brain shots. It is the toughest animal to get a vital organ, and as such, it is not advised to use soft point bullets, use instead something that can penetrate the scales. It is one of the only animals in the game where hitting the liver is technically speaking a vital organ, but will not bring down the animal at all."
  ];

  // Trivia Data
  const triviaData = [
    "The word Alligator is derived from the Spanish word el lagarto which means the lizard. Apparently in the 1930s, Alligators refered to people who were lovers of swing music.",
    "The American Alligator is one of only two extant species in the genus Alligator. The other is the smaller Chinese Alligator.",
    "America, and specifically South Florida, is the only place in the world where both Alligators and Crocodiles live together.",
    "Despite the American Alligator deriving its scientific name form the state of Mississippi, said state boasts one of the smallest populations in the country. Only about 32,000 Alligators live in Mississippi."
  ];

  // References Data
  const referencesData = [
    "vocabulary.com",
    "britannica.com",
    "usgs.gov",
    "worldpopulationreview.com"
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
    sidebarHeader: {
      backgroundColor: '#05121c',
      padding: '12px',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: '1.1rem',
      borderBottom: '2px solid #cfaa3e',
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
      verticalAlign: 'top',
    },
    shotContainer: {
      display: 'flex',
      backgroundColor: '#112233',
      marginTop: '10px',
      border: '1px solid #1f405a',
      flexDirection: 'row',
      alignItems: 'stretch',
    },
    shotImageWrapper: {
      flex: 1,
      borderRight: '1px solid #1f405a',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#000',
    },
    shotLegend: {
      width: '240px',
      flexShrink: 0,
      display: 'flex',
      flexDirection: 'column',
    },
    legendHeader: {
      backgroundColor: '#162c46',
      padding: '10px',
      fontWeight: 'bold',
      borderBottom: '1px solid #1f405a',
      color: '#fff',
      fontSize: '0.95rem',
    },
    legendItem: {
      padding: '15px',
      borderBottom: '1px solid #1f405a',
      fontSize: '0.9rem',
      color: '#dbe4eb',
    },
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
      textAlign: 'center'
    },
    rarityCommon: { color: '#2ecc71', fontWeight: 'bold' },
    rarityUncommon: { color: '#3498db', fontWeight: 'bold' },
    rarityRare: { color: '#9b59b6', fontWeight: 'bold' },
    rarityVeryRare: { color: '#e74c3c', fontWeight: 'bold' },
  };

  // Smooth-scroll helper for TOC links
  function scrollToId(e, id) {
    if (e && e.preventDefault) e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      try { history.replaceState(null, '', `#${id}`); } catch (err) {}
    }
  }

  return (
    <div style={styles.container}>
      <div style={styles.innerWrapper}>
        
        {/* PAGE HEADER */}
        <div style={styles.mainHeader}>
          <span>American Alligator</span>
        </div>

        <div style={styles.layout}>
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside style={styles.sidebarColumn}>
            <div style={styles.sidebarHeader}>American Alligator</div>
            <div style={styles.sidebarImage}>
              <img src={AmericanAlligatorMain} alt="American Alligator" style={{width:'100%', height: '100%', objectFit: 'cover'}} />
            </div>
            
            <div style={styles.sidebarHeader}>General Information</div>
            
            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Class</span>
              <span><img src={class7Icon} alt="Class 7" style={{width:'24px', height:'24px', verticalAlign: 'middle', marginRight: '6px'}}/>7</span>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Difficulty</span>
              <span>2: Minor — 9: Legendary</span>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Trophy Type</span>
              <span>Length</span>
              <div style={styles.trophyGrid}>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.silver}}>◆ Silver</span>
                  <span>226</span>
                </div>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.gold}}>☗ Gold</span>
                  <span>378</span>
                </div>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.diamond}}>☗ Diamond</span>
                  <span>492</span>
                </div>
              </div>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Weight</span>
              75kg — 530kg<br/>
              <span style={{color: '#88a0b8', fontSize: '0.85rem'}}>165lbs — 1168lbs</span>
            </div>

            <div style={styles.sidebarSection}>
               <span style={styles.sidebarLabel}>Skin</span>
               <span style={{fontSize:'0.85rem'}}>
                 Albino, Dark-Brown, Melanistic, Olive, Piebald
               </span>
            </div>

            <div style={styles.sidebarHeader}>Locations</div>
            <div style={styles.sidebarSection}>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Mississippi Acres Preserve</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main style={styles.mainColumn}>

            {/* Quote Block */}
            <div style={styles.quoteBox}>
              "The American Alligator is the apex predator of its range across southeastern United States where it can be found in rivers, lakes, freshwater swamps and marshes. Informally called "Gator" they consume fish, birds and mammals but at their peak size they consider any animal near their habitat a potential target. Both alligators and crocodiles perform a "death roll" where they rotate their body to rip of pieces of flesh from their prey. Alligator sex is determined by the temperature at which they develop during incubation. Alligators are difficult to kill and they will retreat to deep water if wounded. The best way of dispatching a gator is via brain shot, or by shooting at the first or second vertebrae at the base of the head."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p style={{marginBottom:'20px'}}>
              The <strong>American Alligator</strong> is a <span style={styles.link}>Class 7</span> reptile in the order Crocodylia. It is the first huntable reptile and the first crocodilian to be introduced to the game, predating the <span style={styles.link}>Saltwater Crocodile</span>. They can be hunted on <span style={styles.link}>Mississippi Acres Preserve</span>.
            </p>

            {/* Table of Contents */}
            <div style={{
                border: '1px solid #3a5a75',
                backgroundColor: '#0f2e48',
                display: 'inline-block',
                padding: '10px 20px',
                borderRadius: '4px',
                minWidth: '200px',
                marginBottom: '30px'
            }}>
              <div style={{fontWeight:'bold', borderBottom: '1px solid #3a5a75', marginBottom: '5px'}}>
                🔢 Contents <span style={{float:'right', color: '#6fb2e6', fontSize:'0.8rem', cursor: 'pointer'}}>[hide]</span>
              </div>
              <ol style={{margin:'0', paddingLeft: '20px', color: '#6fb2e6'}}>
                <li><a href="#features" onClick={(e)=>scrollToId(e,'features')} style={styles.link}>Features</a></li>
                <li><a href="#need-zones" onClick={(e)=>scrollToId(e,'need-zones')} style={styles.link}>Need Zone Times</a></li>
                <li><a href="#scute-variants" onClick={(e)=>scrollToId(e,'scute-variants')} style={styles.link}>Scute Variants</a></li>
                <li><a href="#scute-rarity" onClick={(e)=>scrollToId(e,'scute-rarity')} style={styles.link}>Scute Variant Rarity</a></li>
                <li><a href="#tips" onClick={(e)=>scrollToId(e,'tips')} style={styles.link}>Tips</a></li>
                <li><a href="#trivia" onClick={(e)=>scrollToId(e,'trivia')} style={styles.link}>Trivia</a></li>
                <li><a href="#references" onClick={(e)=>scrollToId(e,'references')} style={styles.link}>References</a></li>
              </ol>
            </div>

            {/* FEATURES */}
            <h2 style={styles.h2} id="features">Features</h2>
            <table style={styles.table}>
              <thead>
                <tr>
                    <th style={{...styles.th, width: '25%'}}></th>
                    <th style={styles.th}>Description</th>
                </tr>
              </thead>
              <tbody>
                {features.map((item, index) => (
                  <tr key={index}>
                    <td style={{...styles.td, fontWeight: 'bold'}}>{item.label}</td>
                    <td style={{...styles.td, fontStyle: item.italic ? 'italic' : 'normal'}}>
                        {item.isLink ? <span style={styles.link}>{item.value}</span> : item.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            {/* NEED ZONE TIMES */}
            <h2 style={styles.h2} id="need-zones">Need Zone Times</h2>
            <div style={{display:'inline-block'}}>
                <table style={{...styles.table, width: '300px'}}>
                    <thead>
                        <tr><th colSpan="2" style={{...styles.th, textAlign: 'center'}}>Mississippi Acres Preserve</th></tr>
                        <tr>
                            <th style={{...styles.th, backgroundColor: '#0f2e48'}}>Time</th>
                            <th style={{...styles.th, backgroundColor: '#0f2e48'}}>Activity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {needZonesData[0].schedule.map((zone, i) => (
                        <tr key={i}>
                            <td style={styles.td}>{zone.time}</td>
                            <td style={styles.td}>
                                <div style={{display:'flex', alignItems:'center'}}>
                                    <img src={zone.icon} alt={zone.type} style={{width:'20px', height: '20px', verticalAlign: 'middle', marginRight: '6px'}}/> 
                                    {zone.type}
                                </div>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* SCUTE VARIANTS (Gallery) */}
            <h2 style={styles.h2} id="scute-variants">Scute Variants</h2>
            <div style={styles.galleryGrid}>
              {scuteGallery.map((item, i) => (
                <div key={i} style={styles.galleryItem}>
                  <div style={styles.galleryImgPlaceholder}>
                    <img src={item.src} alt={item.name} style={{width:'100%', height: '100%', objectFit: 'contain'}} />
                  </div>
                  <span style={styles.galleryLabel}>{item.name}</span>
                </div>
              ))}
            </div>

            {/* SCUTE VARIANT RARITY TABLE */}
            <h2 id="scute-rarity" style={styles.h2}>Scute Variant Rarity</h2>
            <div style={{overflowX: 'auto', marginBottom: '20px'}}>
                <table style={styles.table}>
                    <thead>
                        <tr>
                            <th style={styles.th}>Sex</th>
                            <th style={{...styles.th, ...styles.rarityCommon}}>Common</th>
                            <th style={{...styles.th, ...styles.rarityUncommon}}>Uncommon</th>
                            <th style={{...styles.th, ...styles.rarityRare}}>Rare</th>
                            <th style={{...styles.th, ...styles.rarityVeryRare}}>Very Rare</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Male/Female Combined Row */}
                        <tr>
                            <td style={styles.td}>
                                <span style={{color: '#3498db', fontStyle: 'italic', fontWeight: 'bold'}}>Male</span>
                                <span style={{color: '#dbe4eb'}}>/</span>
                                <span style={{color: '#d63384', fontStyle: 'italic', fontWeight: 'bold'}}>Female</span>
                            </td>
                            <td style={styles.td}>
                                Olive (74.03%)<br/>
                                Dark Brown (24.78%)
                            </td>
                            <td style={styles.td}>
                                X
                            </td>
                            <td style={styles.td}>
                                Piebald Variation 1 (0.20%)<br/>
                                Piebald Variation 2 (0.20%)<br/>
                                Piebald Variation 3 (0.20%)<br/>
                                Piebald Variation 4 (0.20%)<br/>
                                Piebald Variation 5 (0.20%)<br/>
                                Albino (0.10%)<br/>
                                Melanistic (0.10%)
                            </td>
                            <td style={styles.td}>
                                X
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* TIPS */}
            <h2 id="tips" style={styles.h2}>Tips</h2>
            {tipsData.map((tip, i) => (
                <p key={i} style={{marginBottom: '15px'}}>{tip}</p>
            ))}

            {/* TRIVIA */}
            <h2 id="trivia" style={styles.h2}>Trivia</h2>
            <ul style={{fontSize: '0.95rem', paddingLeft: '20px', listStyleType: 'disc', color: '#dbe4eb'}}>
                {triviaData.map((point, idx) => (
                    <li key={idx} style={{marginBottom: '10px'}}>{point}</li>
                ))}
            </ul>

            {/* REFERENCES */}
            <h2 id="references" style={styles.h2}>References</h2>
            <ol style={{fontSize: '0.95rem', paddingLeft: '20px', color: '#6fb2e6'}}>
                {referencesData.map((ref, idx) => (
                     <li key={idx} style={{marginBottom: '5px'}}>
                        <span style={{color: '#dbe4eb'}}>↑</span> <span style={styles.link}>{ref}</span>
                     </li>
                ))}
            </ol>

            <div style={{marginTop: '40px'}}>
                <AnimalsTableMini />
            </div>
            
          </main>
        </div>
      </div>
    </div>
  );
};

export default AmericanAlligator;