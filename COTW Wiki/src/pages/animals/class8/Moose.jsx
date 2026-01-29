import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import DrinkingZoneIcon from '../../../assets/DrinkingZoneIcon.webp';
import class8Icon from '../../../assets/Class8Icon.webp'; // Class 8 for Moose
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import MooseMain from '../../../assets/Moose.webp';
import ShotSchemeImg from '../../../assets/Moose_shot_scheme.webp';

// Fur Variant Images - Male
import Moose_AcromelanisticMaleRightSide from '../../../assets/Moose_AcromelanisticMaleRightSide.webp';
import Moose_BrownMaleRightSide from '../../../assets/Moose_BrownMaleRightSide.webp';
import Moose_MosaicMaleRightSide from '../../../assets/Moose_MosaicMaleRightSide.webp';
import Moose_MosaicMaleLeftSide from '../../../assets/Moose_MosaicMaleLeftSide.webp';
import Moose_LightBrownMaleRightSide from '../../../assets/Moose_LightBrownMaleRightSide.webp';
import Moose_MelanisticMaleRightSide from '../../../assets/Moose_MelanisticMaleRightSide.webp';
import Moose_AlbinoMaleRightSide from '../../../assets/Moose_AlbinoMaleRightSide.webp';
import Moose_MochaMaleRightSide from '../../../assets/Moose_Mocha29MaleRightSide.webp';
import Moose_PiebaldMaleRightSide from '../../../assets/Moose_PiebaldMaleRightSide.webp';
import Moose_TanMaleRightSide from '../../../assets/Moose_TanMaleRightSide.webp';

// Fur Variant Images - Female
import Moose_AcromelanisticFemale from '../../../assets/Moose_AcromelanisticFemale.webp';
import Moose_BrownFemale from '../../../assets/Moose_BrownFemale.webp';
import Moose_DarkBrownFemale from '../../../assets/Moose_DarkBrownFemale.webp';
import Moose_MelanisticFemale from '../../../assets/Moose_MelanisticFemale.webp';
import Moose_AlbinoFemale from '../../../assets/Moose_AlbinoFemale.webp';
import Moose_PiebaldFemale from '../../../assets/Moose_PiebaldFemale.webp';
import Moose_TanFemale from '../../../assets/Moose_TanFemale.webp';

// Fur Variant Images - Great Ones (Fabled)
import Moose_GO_Ashen from '../../../assets/Moose_FabledAshen.webp';
import Moose_GO_Birch from '../../../assets/Moose_FabledBirch.webp';
import Moose_GO_Oak from '../../../assets/Moose_FabledOak.webp';
import Moose_GO_Speckled from '../../../assets/Moose_FabledSpeckled.webp';
import Moose_GO_Spruce from '../../../assets/Moose_FabledSpruce.webp';
import Moose_GO_TwoTones from '../../../assets/Moose_FabledTwoTones.webp';


const Moose = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  const needZonesData = [
    {
      name: "Askiy Ridge",
      schedule: [
        { time: "00:00 - 04:00", type: "Resting", icon: RestingZoneIcon },
        { time: "04:00 - 08:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "08:00 - 12:00", type: "Resting", icon: RestingZoneIcon },
        { time: "12:00 - 16:00", type: "Drinking", icon: DrinkingZoneIcon },
        { time: "16:00 - 20:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "20:00 - 00:00", type: "Feeding", icon: FeedingZoneIcon },
      ]
    }
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Docile, but easily defensive" },
    { label: "Habitat", value: "Prefer coniferous forests and wetlands" },
    { label: "Senses", value: "Great sense of smell and good hearing" },
    { label: "Social", value: "Typically solitary" },
    { label: "Active", value: "During dusk and dawn" },
    { label: "Recommended Equipment", value: "Class 8 Ammo, Moose Caller, Moose Scent" },
    { label: "Species", value: "Alces alces", italic: true, isLink: true },
    { label: "Difficulty", value: "Hard" },
  ];

  // Fur Gallery Data - Male
  const maleFurGallery = [
    { name: "Acromelanistic", src: Moose_AcromelanisticMaleRightSide },
    { name: "Albino", src: Moose_AlbinoMaleRightSide },
    { name: "Brown", src: Moose_BrownMaleRightSide },
    { name: "Light Brown", src: Moose_LightBrownMaleRightSide },
    { name: "Melanistic", src: Moose_MelanisticMaleRightSide },
    { name: "Mosaic (Left)", src: Moose_MosaicMaleLeftSide },
    { name: "Mosaic (Right)", src: Moose_MosaicMaleRightSide },
    { name: "Mocha (Quest Exclusive)", src: Moose_MochaMaleRightSide },
    { name: "Piebald", src: Moose_PiebaldMaleRightSide },
    { name: "Tan", src: Moose_TanMaleRightSide },
  ];

    // Fur Gallery Data - Female
    const femaleFurGallery = [
      { name: "Acromelanistic", src: Moose_AcromelanisticFemale },
      { name: "Albino", src: Moose_AlbinoFemale },
      { name: "Brown", src: Moose_BrownFemale },
      { name: "Dark Brown", src: Moose_DarkBrownFemale },
      { name: "Melanistic", src: Moose_MelanisticFemale },
      { name: "Piebald", src: Moose_PiebaldFemale },
      { name: "Tan", src: Moose_TanFemale },
    ];

  // Great Ones Gallery
  const greatOnesGallery = [
    { name: "Fabled Ashen", src: Moose_GO_Ashen },
    { name: "Fabled Birch", src: Moose_GO_Birch },
    { name: "Fabled Oak", src: Moose_GO_Oak },
    { name: "Fabled Speckled", src: Moose_GO_Speckled },
    { name: "Fabled Spruce", src: Moose_GO_Spruce },
    { name: "Fabled Two Tones", src: Moose_GO_TwoTones },
  ];

  // Trivia Data
  const triviaData = [
    "The word 'Moose' comes from the Algonquin word Moosh meaning \"Eater of Bark\".",
    "It is the State Animal of both Alaska and Maine.",
    "Even though many moose can be found in Colorado, they are absent from Silver Ridge Peaks.",
    "Despite having a long history with the people and landscape of North America, the Moose actually evolved in Eurasia and migrated over during the ice age. The only Native North American \"Moose\" species is the now extinct Elk-Moose (Cervalces scotti).",
    "In Europe they are know as Eurasian Elk.",
    "Including the mission: Last of Its Kind, the Moose is currently on 7 maps, the most among all huntable animal species.",
    "The scientific name of the Moose, (Alces alces), is together with the name of the Red Fox (Vulpes vulpes), Harlequin Duck (Histrionicus histrionicus), Roe Deer (Capreolus capreolus), American Buffalo (Bison bison bison), Axis Deer (Axis axis), Fallow Deer (Dama dama), Greylag Goose (Anser anser), Willow Ptarmigan (Lagopus lagopus) and the Eurasian Lynx (Lynx lynx) a tautonym, that means a scientific name in which both parts of the name have the same spelling.",
    "In the patch released on 27.09.2022, a new model with improved fur and textures was released, making the moose look more realistic.",
    "In 06.12.2022 patch moose got its own Great Ones individuals. They can be rarely found on any map where moose dwells."
  ];

  // References Data
  const referencesData = [
    "Moose Need Zones, Askiy Ridge",
    "https://www.britannica.com/animal/moose-mammal",
    "https://www.britannica.com/animal/moose-mammal"
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
    greatOne: { color: '#2ecc71', display: 'block', textAlign: 'center', marginTop: '8px', fontWeight: 'bold' },
    
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
          <span>Moose</span>
        </div>

        <div style={styles.layout}>
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside style={styles.sidebarColumn}>
            <div style={styles.sidebarHeader}>Moose</div>
            <div style={styles.sidebarImage}>
              <img src={MooseMain} alt="Moose" style={{width:'100%', height: '100%', objectFit: 'cover'}} />
            </div>
            
            <div style={styles.sidebarHeader}>General Information</div>
            
            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Class</span>
              <span><img src={class8Icon} alt="Class 8" style={{width:'24px', height:'24px', verticalAlign: 'middle', marginRight: '6px'}}/>8</span>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Difficulty</span>
              <span>1: Trivial — 5: Medium</span><br/>
              <span>10: Fabled</span>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Trophy Type</span>
              <span>Antlers</span>
              <div style={styles.trophyGrid}>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.silver}}>◆ Silver</span>
                  <span>86.22</span>
                </div>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.gold}}>☗ Gold</span>
                  <span>194.09</span>
                </div>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.diamond}}>☗ Diamond</span>
                  <span>274.99</span>
                </div>
              </div>
              <div style={styles.greatOne}>💎 Great One</div>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Weight</span>
              320kg — 620kg<br/>
              700kg (Great One)<br/>
              <span style={{color: '#88a0b8', fontSize: '0.85rem'}}>705lbs — 1367lbs</span><br/>
              <span style={{color: '#88a0b8', fontSize: '0.85rem'}}>1543lbs (Great One)</span>
            </div>

            <div style={styles.sidebarSection}>
               <span style={styles.sidebarLabel}>Fur</span>
               <span style={{fontSize:'0.85rem'}}>
                 Acromelanistic, Albino, Brown, Dark-Brown, Light Brown, Melanistic, Mosaic, Piebald, Tan
               </span>
               <br/>
               <span style={{fontWeight:'bold', display:'block', marginTop: '6px', fontSize:'0.85rem'}}>Mission Exclusive:</span>
               <span style={{fontSize:'0.85rem'}}>Mocha</span>
               <br/>
               <span style={{fontWeight:'bold', display:'block', marginTop: '6px', fontSize:'0.85rem'}}>Fabled Exclusive:</span>
               <span style={{fontSize:'0.85rem'}}>
                 Spruce, Two Tone, Ashen, Birch, Oak, Speckled
               </span>
            </div>

            <div style={styles.sidebarHeader}>Locations</div>
            <div style={styles.sidebarSection}>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Layton Lake District</span></div>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Medved-Taiga National Park</span></div>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Yukon Valley Nature Reserve</span></div>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Te Awaroa National Park (Mission Only)</span></div>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Revontuli Coast</span></div>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>New England Mountains</span></div>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Askiy Ridge Hunting Preserve</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main style={styles.mainColumn}>

            {/* Quote Block */}
            <div style={styles.quoteBox}>
              "Moose are the largest species in the deer family and are easily distinguished by their long legs, head, and snout, as well as their large shovel-like (palmated) antlers. Males feature a dewlap, which is a fatty piece of skin under the chin. Moose are commonly found in most of the Northern Hemisphere, and thrive in temperate and subarctic climates. They often reach a height of 2.00 m and weigh between 200.00 kg to 500.00 kg. Moose are herbivores and solitary animals that are rarely found in groups or herds. Although they are often slow-moving and calm animals, they can easily become aggressive if startled or threatened. When hunting moose, shot placement is essential as they are very tough and surprisingly nimble."
               <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p style={{marginBottom:'20px'}}>
              The <strong>Moose</strong> is the largest species of deer in game <span style={styles.link}>(class 8)</span>, and it can be hunted on <span style={styles.link}>Layton Lake District</span>, <span style={styles.link}>Medved-Taiga</span>, <span style={styles.link}>Yukon Valley</span>, <span style={styles.link}>Revontuli Coast</span>, and <span style={styles.link}>New England Mountains</span>. It is also one of the first 'original' animals huntable in game, as it launched with the game all the way back in 2016.
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
                <li><a href="#shot-scheme" onClick={(e)=>scrollToId(e,'shot-scheme')} style={styles.link}>Shot Scheme</a></li>
                <li><a href="#fur-variants" onClick={(e)=>scrollToId(e,'fur-variants')} style={styles.link}>Fur Variants</a></li>
                <ol style={{listStyleType: 'none', marginLeft: '-20px'}}>
                     <li><a href="#fur-male" onClick={(e)=>scrollToId(e,'fur-male')} style={{...styles.link, marginLeft:'20px'}}>4.1. Male</a></li>
                     <li><a href="#fur-female" onClick={(e)=>scrollToId(e,'fur-female')} style={{...styles.link, marginLeft:'20px'}}>4.2. Female</a></li>
                </ol>
                <li><a href="#great-ones" onClick={(e)=>scrollToId(e,'great-ones')} style={styles.link}>Great Ones</a></li>
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
                        <tr><th colSpan="2" style={{...styles.th, textAlign: 'center'}}>All Reserves</th></tr>
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
            <h2 style={styles.h2} id="shot-scheme">Shot Scheme</h2>
            <div style={styles.shotContainer}>
               <div style={styles.shotImageWrapper}>
                 <img src={ShotSchemeImg} alt="Shot Scheme" style={{width: '100%', height: 'auto', maxHeight:'350px', objectFit: 'contain'}} />
               </div>
               <div style={styles.shotLegend}>
                 <div style={styles.legendHeader}>Color code</div>
                 <div style={styles.legendItem}>Red - Kills immediately</div>
                 <div style={styles.legendItem}>Blue - Kills very quickly</div>
                 <div style={styles.legendItem}>Orange - Kills slowly</div>
                 <div style={{...styles.legendItem, borderBottom: 'none'}}>No Color - Unlikely to kill</div>
               </div>
            </div>

            {/* FUR VARIANTS (Gallery) */}
            <h2 style={styles.h2} id="fur-variants">Fur Variants</h2>
            
            <h3 id="fur-male" style={{marginTop:'10px', marginBottom:'8px', color: '#6fb2e6'}}>Male</h3>
            <div style={styles.galleryGrid}>
              {maleFurGallery.map((item, i) => (
                <div key={i} style={styles.galleryItem}>
                  <div style={styles.galleryImgPlaceholder}>
                    <img src={item.src} alt={item.name} style={{width:'100%', height: '100%', objectFit: 'contain'}} />
                  </div>
                  <span style={styles.galleryLabel}>{item.name}</span>
                </div>
              ))}
            </div>

            <h3 id="fur-female" style={{marginTop:'10px', marginBottom:'8px', color: '#6fb2e6'}}>Female</h3>
            <div style={styles.galleryGrid}>
              {femaleFurGallery.map((item, i) => (
                <div key={i} style={styles.galleryItem}>
                  <div style={styles.galleryImgPlaceholder}>
                    <img src={item.src} alt={item.name} style={{width:'100%', height: '100%', objectFit: 'contain'}} />
                  </div>
                  <span style={styles.galleryLabel}>{item.name}</span>
                </div>
              ))}
            </div>

            {/* GREAT ONES (Gallery) */}
            <h2 style={styles.h2} id="great-ones">Great Ones</h2>
            <div style={styles.galleryGrid}>
              {greatOnesGallery.map((item, i) => (
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
                        {/* Male Row */}
                        <tr>
                            <td style={{...styles.td, color: '#3498db', fontStyle: 'italic', fontWeight: 'bold'}}>
                                Male
                            </td>
                            <td style={styles.td}>
                                Tan (33.13%)<br/>
                                Light Brown (33.13%)<br/>
                                Brown (33.13%)
                            </td>
                            <td style={styles.td}>
                                X
                            </td>
                            <td style={styles.td}>
                                Piebald (0.20%)<br/>
                                Mosaic (0.20%)
                            </td>
                            <td style={styles.td}>
                                Acromelanistic (0.07%)<br/>
                                Albino (0.07%)<br/>
                                Melanistic (0.07%)
                            </td>
                        </tr>
                        {/* Female Row */}
                        <tr>
                            <td style={{...styles.td, color: '#d63384', fontStyle: 'italic', fontWeight: 'bold'}}>
                                Female
                            </td>
                            <td style={styles.td}>
                                Tan (33.20%)<br/>
                                Light Brown (33.20%)<br/>
                                Brown (33.20%)
                            </td>
                            <td style={styles.td}>
                                X
                            </td>
                            <td style={styles.td}>
                                Piebald (0.20%)<br/>
                            </td>
                            <td style={styles.td}>
                                Acromelanistic (0.07%)<br/>
                                Albino (0.07%)<br/>
                                Melanistic (0.07%)
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

export default Moose;