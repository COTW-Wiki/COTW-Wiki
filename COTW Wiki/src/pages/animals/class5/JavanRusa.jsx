import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import DrinkingZoneIcon from '../../../assets/DrinkingZoneIcon.webp';
import class5Icon from '../../../assets/Class5Icon.webp'; 
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import JavanRusaMain from '../../../assets/JavanRusa.webp';
import ShotSchemeImg from '../../../assets/Javan_Rusa_shot_scheme.webp';

// Fur Variant Images
// Male
import JavanRusa_AlbinoMale from '../../../assets/JavanRusa_AlbinoMaleRightSide.webp';
import JavanRusa_BrownMale from '../../../assets/JavanRusa_BrownMaleRightSide.webp';
import JavanRusa_LeucisticMale from '../../../assets/JavanRusa_LeucisticMaleRightSide.webp';
import JavanRusa_LightBrownMale from '../../../assets/JavanRusa_LightBrownMaleRightSide.webp';
import JavanRusa_PiebaldVar1MaleRight from '../../../assets/JavanRusa_PiebaldVariation1MaleRightSide.webp';
import JavanRusa_PiebaldVar1MaleLeft from '../../../assets/JavanRusa_PiebaldVariation1MaleLeftSide.webp';
import JavanRusa_PiebaldVar2MaleRight from '../../../assets/JavanRusa_PiebaldVariation2MaleRightSide.webp';
import JavanRusa_PiebaldVar2MaleLeft from '../../../assets/JavanRusa_PiebaldVariation2MaleLeftSide.webp';
import JavanRusa_TwoTonesMale from '../../../assets/JavanRusa_TwoTonesMaleRightSide.webp';
import JavanRusa_WhiteBrownMale from '../../../assets/JavanRusa_WhiteBrownMaleRightSide.webp';

// Female
import JavanRusa_BrownFemale from '../../../assets/JavanRusa_BrownFemaleRightSide.webp';
import JavanRusa_LeucisticFemale from '../../../assets/JavanRusa_LeucisticFemaleRightSide.webp';
import JavanRusa_LightBrownFemale from '../../../assets/JavanRusa_LightBrownFemaleRightSide.webp';
import JavanRusa_PiebaldFemaleRight from '../../../assets/JavanRusa_PiebaldFemaleRightSide.webp';
import JavanRusa_PiebaldFemaleLeft from '../../../assets/JavanRusa_PiebaldFemaleLeftSide.webp';
import JavanRusa_TwoTonesFemale from '../../../assets/JavanRusa_TwoTonesFemaleRightSide.webp';
import JavanRusa_WhiteBrownFemale from '../../../assets/JavanRusa_WhiteBrownFemaleRightSide.webp';


const JavanRusa = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  const needZonesData = [
    {
      name: "Emerald Coast",
      schedule: [
        { time: "00:00 - 03:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "03:00 - 06:00", type: "Resting", icon: RestingZoneIcon },
        { time: "06:00 - 09:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "09:00 - 13:00", type: "Resting", icon: RestingZoneIcon },
        { time: "13:00 - 17:00", type: "Resting", icon: RestingZoneIcon },
        { time: "17:00 - 20:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "20:00 - 00:00", type: "Drinking", icon: DrinkingZoneIcon },
      ]
    }
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Feral, grazing, social herbivore" },
    { label: "Habitat", value: "Grassy areas near woodlands, forest, farmland" },
    { label: "Senses", value: "Excellent sense of smell, good sense of hearing, decent eyesight" },
    { label: "Social", value: "Found in small groups or pairs. Male are often seen alone" },
    { label: "Active", value: "Nocturnal, grazing during the day" },
    { label: "Recommended Equipment", value: "Class 5 ammo, Sambar Caller" },
    { label: "Species", value: "Cervus Timorensis", italic: true, isLink: true },
    { label: "Difficulty", value: "Easy" },
  ];

  // Fur Gallery Data (split by sex)
  const maleGallery = [
    { name: "Albino", src: JavanRusa_AlbinoMale },
    { name: "Brown", src: JavanRusa_BrownMale },
    { name: "Leucistic", src: JavanRusa_LeucisticMale },
    { name: "Light Brown", src: JavanRusa_LightBrownMale },
    { name: "Piebald Variation 1 (Right)", src: JavanRusa_PiebaldVar1MaleRight },
    { name: "Piebald Variation 1 (Left)", src: JavanRusa_PiebaldVar1MaleLeft },
    { name: "Piebald Variation 2 (Right)", src: JavanRusa_PiebaldVar2MaleRight },
    { name: "Piebald Variation 2 (Left)", src: JavanRusa_PiebaldVar2MaleLeft },
    { name: "Two Tones", src: JavanRusa_TwoTonesMale },
    { name: "White Brown", src: JavanRusa_WhiteBrownMale },
  ];

  const femaleGallery = [
    { name: "Brown", src: JavanRusa_BrownFemale },
    { name: "Leucistic", src: JavanRusa_LeucisticFemale },
    { name: "Light Brown", src: JavanRusa_LightBrownFemale },
    { name: "Piebald (Right)", src: JavanRusa_PiebaldFemaleRight },
    { name: "Piebald (Left)", src: JavanRusa_PiebaldFemaleLeft },
    { name: "Two Tones", src: JavanRusa_TwoTonesFemale },
    { name: "White Brown", src: JavanRusa_WhiteBrownFemale },
  ];

  // Trivia Data (Updated with latest screenshot data)
  const triviaData = [
    <span>The <strong>Javan Rusa</strong> (<em>Rusa timorensis</em>), also know as the 'Sunda Sambar', is native to the islands of Indonesia, including Java, the Sunda Islands, and the country of East Timor.As such, its many monikers bear the names of its native homelands.</span>,
    <span>Despite what the in game wiki will tell you, the <strong>Javan Rusa</strong> is no longer classified under the "Cervus" genus.</span>,
    "The word 'Rusa' is thought to have come from the Malay word for 'Deer'",
    <span>In real life, the <strong>Javan Rusa</strong> does not drink standing water as it gets most of its water from the plants it eats.However this has yet to be implemented in game. <sup>[2]</sup></span>,
    <span>According to <em>animaldiversity.org</em> Quote: "In Queensland, Australia, 50% of the deer farmed are Javan rusa." <sup>[3]</sup></span>
  ];

  // References Data (Updated with latest screenshot data)
  const referencesData = [
    "Javan Rusa Need Zones, Emerald Coast",
    "https://critter.science/the-javan-rusa/",
    "https://animaldiversity.org/accounts/Rusa_timorensis/"
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
          <span>Javan Rusa</span>
        </div>

        <div style={styles.layout}>
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside style={styles.sidebarColumn}>
            <div style={styles.sidebarHeader}>Javan Rusa</div>
            <div style={styles.sidebarImage}>
              <img src={JavanRusaMain} alt="Javan Rusa" style={{width:'100%', height: '100%', objectFit: 'cover'}} />
            </div>
            
            <div style={styles.sidebarHeader}>General Information</div>
            
            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Class</span>
              <span><img src={class5Icon} alt="Class 5" style={{width:'24px', height:'24px', verticalAlign: 'middle', marginRight: '6px'}}/>5</span>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Difficulty</span>
              <span>1: Trivial — 5: Medium</span>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Trophy Type</span>
              <span>Antlers</span>
              <div style={styles.trophyGrid}>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.silver}}>◆ Silver</span>
                  <span>64.62</span>
                </div>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.gold}}>☗ Gold</span>
                  <span>112.71</span>
                </div>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.diamond}}>☗ Diamond</span>
                  <span>148.78</span>
                </div>
              </div>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Weight</span>
              ? — 172kg<br/>
              <span style={{color: '#88a0b8', fontSize: '0.85rem'}}>? — 379lbs</span>
            </div>

            <div style={styles.sidebarSection}>
               <span style={styles.sidebarLabel}>Fur</span>
               <span style={{fontSize:'0.85rem'}}>
                 Albino, Brown, Leucistic, Light Brown, Piebald, Two Tones, White Brown
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
              "Often found near the grassy fields by woodlands, the Javan Rusa or Cervus Timorensis sports a brown coat with a reddish hue to it during the summer half-year, and a grey-brown coat during the winter half-year. Like many other species of Rusa, the Javan Rusa has signs of sexual dysmorphism. Males grow and mane, in a darker color and rougher in appearance. As male calves mature they develop antlers. The antlers will develop into a three-tined formation that can grow to around 0.96 m as they age. Males can reach a height of 1.10 m and weigh up to 135.00 kg. While females will grow to an approximate height of 0.95 m while weighing up to 90.00 kg."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p style={{marginBottom:'20px'}}>
              The <strong>Javan Rusa</strong> is a <span style={styles.link}>class 5</span> deer that can be hunted on <span style={styles.link}>Emerald Coast</span>. Also called 'Timor Deer', it is one of two deer species under the genus "Rusa" in game. The other is the Sambar.
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
                <li><a href="#shot-scheme" onClick={(e)=>scrollToId(e,'shot-scheme')} style={styles.link}>Shot scheme</a></li>
                <li><a href="#fur-variants" onClick={(e)=>scrollToId(e,'fur-variants')} style={styles.link}>Fur Variants</a></li>
                    <ol style={{marginTop:'6px', marginLeft:'-30px', listStyleType: 'none'}}>
                    <li><a href="#fur-male" onClick={(e)=>scrollToId(e,'fur-male')} style={styles.link}>4.1 Male</a></li>
                    <li><a href="#fur-female" onClick={(e)=>scrollToId(e,'fur-female')} style={styles.link}>4.2 Female</a></li>
                  </ol>
                <li><a href="#variant-rarity" onClick={(e)=>scrollToId(e,'variant-rarity')} style={styles.link}>Fur Variant Rarity</a></li>
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
                        <tr><th colSpan="2" style={{...styles.th, textAlign: 'center'}}>Emerald Coast</th></tr>
                        <tr>
                            <th style={{...styles.th, backgroundColor: '#0f2e48'}}>Times</th>
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

            {/* SHOT SCHEME */}
            <h2 style={styles.h2} id="shot-scheme">Shot scheme</h2>
            <div style={styles.shotContainer}>
               <div style={styles.shotImageWrapper}>
                 <img src={ShotSchemeImg} alt="Shot Scheme" style={{width: '100%', height: 'auto', maxHeight:'350px', objectFit: 'contain'}} />
               </div>
               <div style={styles.shotLegend}>
                 <div style={styles.legendHeader}>Color code</div>
                 <div style={styles.legendItem}>Red - Kills immediately</div>
                 <div style={styles.legendItem}>Blue - Kills very quick</div>
                 <div style={styles.legendItem}>Orange - Kills slowly</div>
                 <div style={{...styles.legendItem, borderBottom: 'none'}}>No Color - Unlikely to kill</div>
               </div>
            </div>

            {/* FUR VARIANTS (Gallery) */}
            <h2 id="fur-variants" style={styles.h2}>Fur Variants</h2>

            <h3 id="fur-male" style={{marginTop:'10px', marginBottom:'8px', color: '#6fb2e6'}}>Male</h3>
            <div style={styles.galleryGrid}>
              {maleGallery.map((item, i) => (
                <div key={i} style={styles.galleryItem}>
                  <div style={styles.galleryImgPlaceholder}>
                    <img src={item.src} alt={item.name} style={{width:'100%', height: '100%', objectFit: 'contain'}} />
                  </div>
                  <span style={styles.galleryLabel}>{item.name}</span>
                </div>
              ))}
            </div>

            <h3 id="fur-female" style={{marginTop:'20px', marginBottom:'8px', color: '#6fb2e6'}}>Female</h3>
            <div style={styles.galleryGrid}>
              {femaleGallery.map((item, i) => (
                <div key={i} style={styles.galleryItem}>
                  <div style={styles.galleryImgPlaceholder}>
                    <img src={item.src} alt={item.name} style={{width:'100%', height: '100%', objectFit: 'contain'}} />
                  </div>
                  <span style={styles.galleryLabel}>{item.name}</span>
                </div>
              ))}
            </div>

            {/* FUR VARIANT RARITY TABLE */}
            <h2 id="variant-rarity" style={styles.h2}>Fur Variant Rarity</h2>
            <div style={{overflowX: 'auto'}}>
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
                        {/* Male Row */}
                        <tr>
                            <td style={{...styles.td, color: '#3498db', fontStyle: 'italic', fontWeight: 'bold'}}>
                                Male
                            </td>
                            <td style={styles.td}>
                                White Brown (24.98%)<br/>
                                Brown (24.88%)<br/>
                                Light Brown (24.88%)<br/>
                                Two Tones (24.88%)
                            </td>
                            <td style={styles.td}>
                                X
                            </td>
                            <td style={styles.td}>
                                Albino (0.10%)<br/>
                                Leucistic (0.10%)<br/>
                                Piebald Variation 1 (0.10%)<br/>
                                Piebald Variation 2 (0.10%)
                            </td>
                            <td style={styles.td}>
                                X
                            </td>
                        </tr>
                        {/* Female Row */}
                        <tr>
                            <td style={{...styles.td, color: '#d63384', fontStyle: 'italic', fontWeight: 'bold'}}>
                                Female
                            </td>
                            <td style={styles.td}>
                                White Brown (25.03%)<br/>
                                Brown (24.92%)<br/>
                                Light Brown (24.92%)<br/>
                                Two Tones (24.92%)
                            </td>
                            <td style={styles.td}>
                                X
                            </td>
                            <td style={styles.td}>
                                Leucistic (0.10%)<br/>
                                Piebald (0.10%)
                            </td>
                            <td style={styles.td}>
                                X
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

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

export default JavanRusa;