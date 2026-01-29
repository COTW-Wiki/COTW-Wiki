import React from 'react'; 


// --- IMPORTS --- // 
// Standard Icons //
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp'; 
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp'; 
import DrinkingZoneIcon from '../../../assets/DrinkingZoneIcon.webp'; 
// Added Drinking Icon //

import class2Icon from '../../../assets/Class2Icon.webp';
 // Updated to Class 2 
 
 import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

  // Main Image 
  import NorthernRedMuntjacMain from '../../../assets/Northern_Red_Muntjac.webp'; 
  import ShotSchemeImage from '../../../assets/Northern_Red_Muntjac_shot_scheme.webp'; 

  // Fur Variant Images (Placeholders)

    // Male 
    import Muntjac_Male_Albino from '../../../assets/NorthernRedMuntjac_AlbinoMale.webp'; 
    import Muntjac_Male_Leucistic1 from '../../../assets/NorthernRedMuntjac_LeucisticVariation1Male.webp'; 
    import Muntjac_Male_Leucistic2 from '../../../assets/NorthernRedMuntjac_LeucisticVariation2Male.webp'; 
    import Muntjac_Male_Melanistic from '../../../assets/NorthernRedMuntjac_MelanisticMale.webp'; 
    import Muntjac_Male_Red1 from '../../../assets/NorthernRedMuntjac_RedVariation1Male.webp'; 
    import Muntjac_Male_Red2 from '../../../assets/NorthernRedMuntjac_RedVariation2Male.webp'; 

    // Female 
    import Muntjac_Female_Albino from '../../../assets/NorthernRedMuntjac_AlbinoFemale.webp'; 
    import Muntjac_Female_Leucistic1 from '../../../assets/NorthernRedMuntjac_LeucisticVariation1Female.webp'; 
    import Muntjac_Female_Leucistic2 from '../../../assets/NorthernRedMuntjac_LeucisticVariation2Female.webp'; 
    import Muntjac_Female_Melanistic from '../../../assets/NorthernRedMuntjac_MelanisticFemale.webp'; 
    import Muntjac_Female_Red1 from '../../../assets/NorthernRedMuntjac_RedVariation1Female.webp'; 
    import Muntjac_Female_Red2 from '../../../assets/NorthernRedMuntjac_RedVariation2Female.webp';


const NorthernRedMuntjac = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  const needZonesData = [
    {
      name: "Sundarpatan",
      schedule: [
        { time: "00:00 - 03:00", type: "Resting", icon: RestingZoneIcon },
        { time: "03:00 - 06:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "06:00 - 09:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "09:00 - 12:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "12:00 - 15:00", type: "Resting", icon: RestingZoneIcon },
        { time: "15:00 - 18:00", type: "Drinking", icon: DrinkingZoneIcon },
        { time: "18:00 - 21:00", type: "Resting", icon: RestingZoneIcon },
        { time: "21:00 - 00:00", type: "Resting", icon: RestingZoneIcon },
      ]
    }
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Elusive and robust" },
    { label: "Habitat", value: "Dense forests" },
    { label: "Senses", value: "Excellent eyesight and sense of hearing" },
    { label: "Social", value: "Primarily solitary, can be found in family groups" },
    { label: "Active", value: "Dawn and dusk" },
    { label: "Recommended Equipment", value: "Class 2 Ammo, Roe Deer Caller" },
    { label: "Species", value: "Muntiacus vaginalis", italic: true, isLink: true },
    { label: "Difficulty", value: "Easy" },
  ];

  // Fur Gallery Data
  const furGallery = [
    { name: "Albino - Male", src: Muntjac_Male_Albino },
    { name: "Leucistic Variation 1 - Male", src: Muntjac_Male_Leucistic1 },
    { name: "Leucistic Variation 2 - Male", src: Muntjac_Male_Leucistic2 },
    { name: "Melanistic - Male", src: Muntjac_Male_Melanistic },
    { name: "Red Variation 1 - Male", src: Muntjac_Male_Red1 },
    { name: "Red Variation 2 - Male", src: Muntjac_Male_Red2 },
    { name: "Albino - Female", src: Muntjac_Female_Albino },
    { name: "Leucistic Variation 1 - Female", src: Muntjac_Female_Leucistic1 },
    { name: "Leucistic Variation 2 - Female", src: Muntjac_Female_Leucistic2 },
    { name: "Melanistic - Female", src: Muntjac_Female_Melanistic },
    { name: "Red Variation 1 - Female", src: Muntjac_Female_Red1 },
    { name: "Red Variation 2 - Female", src: Muntjac_Female_Red2 },
  ];

  // Split galleries by sex for sub-topics
  const maleGallery = furGallery.filter(item => /Male/i.test(item.name));
  const femaleGallery = furGallery.filter(item => /Female/i.test(item.name));

  // Smooth scroll helper for in-page TOC links
  const scrollToId = (id) => (e) => {
    if (e && e.preventDefault) e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (typeof window !== 'undefined' && window.history && window.history.replaceState) {
      window.history.replaceState(null, '', `#${id}`);
    }
  };

  // Trivia Data
  const triviaData = [
    `The Muntjac Deer gets it's name 'MUNTJAC' from the Dutch, which borrowed the word from the Sundanese word for a "small deer"; specifically the "Chevrotain" or "Mouse Deer". The reason for why the Muntjac got associated with this animal is uncertain. Maybe traders, of the Dutch East India company, just thought it was a generic term for ALL small deer. Ironically, the Mouse Deer isn't even a real deer.[2]`,
    `There are currently 12 known species of Muntjac Deer alive today. One of these species include the smallest Deer species in the world, the "Chinese Muntjac"; a deer species so small, it's standing height would be dwarfed by Shaquille O'Neal's shoe size, and it's average weight wouldn't be any heavier than a 2 year old Toddler.[3][4][5][6][7]`,
    `The Muntjac Deer has many distinct physical traits; one of these being its "fangs". It uses these as display structures, as weapons for intraspecific combat, and their fangs also have the convenient ability to HINGE AT THE JAW LIKE A SNAKE! THAT'S RIGHT! THEY CAN FOLD AWAY THEIR FANGS LIKE SOME KIND OF SWISS ARMY KNIF!!!... Anyway they also have extremely pronounced scent glands on their foreheads and at the corners of their eyes. In fact, their top scent glands can inflate, making them the only deer species with inflatable structures on their body. Despite them being called "Barking Deer" these deer are relatively quiet, and overly rely on scent as their primary form of communication. [8][9][10]`,
    `Yet another bizarre fact about this animal is the fact that it does not have a defined rutting season. They mate year round unlike most other deer. The females are also extremely fertile, being able to conceive again just days after giving birth.[11]`
  ];

  // References List
  const references = [
    "Northern Red Muntjac Need Zones, Sundarpatan",
    "https://www.dictionary.com/browse/muntjac",
    "https://news.mongabay.com/2020/08/the-large-antlered-muntjac-southeast-asias-mystery-deer-commentary/",
    "https://www.rosamondgiffordzoo.org/experience/animals/mammals/chinese-muntjac/",
    "https://seaworld.org/animals/facts/mammals/reeves-muntjac/",
    "https://footwearnews.com/shoes/outdoor-footwear/shaq-shoe-size-1202540386/",
    "https://www.whattoexpect.com/toddler/24-month-old.aspx",
    "https://www.discoverwildlife.com/animal-facts/mammals/muntjac-deer",
    "https://www.iflscience.com/muntjac-deer-have-bizarre-flaring-scent-glands-on-their-face-67030",
    "https://www.sciencefocus.com/nature/muntjac-deer",
    "https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/animals/mammals/muntjac-deer/"
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
    // Updated Shot Scheme Layout Styles
    shotContainer: {
      display: 'flex',
      backgroundColor: '#112233',
      marginTop: '10px',
      border: '1px solid #1f405a',
      flexDirection: 'row', // Horizontal layout
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

  return (
    <div style={styles.container}>
      <div style={styles.innerWrapper}>
        
        {/* PAGE HEADER */}
        <div style={styles.mainHeader}>
          <span>Northern Red Muntjac</span>
        </div>

        <div style={styles.layout}>
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside style={styles.sidebarColumn}>
            <div style={styles.sidebarHeader}>Northern Red Muntjac</div>
            <div style={styles.sidebarImage}>
              <img src={NorthernRedMuntjacMain} alt="Northern Red Muntjac" style={{width:'100%', height: '100%', objectFit: 'cover'}} />
            </div>
            
            <div style={styles.sidebarHeader}>General Information</div>
            
            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Class</span>
              <span><img src={class2Icon} alt="Class 2" style={{width:'24px', height:'24px', verticalAlign: 'middle', marginRight: '6px'}}/>2</span>
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
                  <span>25.25</span>
                </div>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.gold}}>☗ Gold</span>
                  <span>30.96</span>
                </div>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.diamond}}>☗ Diamond</span>
                  <span>35.24</span>
                </div>
              </div>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Weight</span>
              12kg — 28kg<br/>
              <span style={{color: '#88a0b8', fontSize: '0.85rem'}}>26lbs — 62lbs</span>
            </div>

            <div style={styles.sidebarSection}>
               <span style={styles.sidebarLabel}>Fur</span>
               <span style={{fontSize:'0.85rem'}}>
                  Albino, Leucistic, Melanistic, Red
               </span>
            </div>

            <div style={styles.sidebarHeader}>Locations</div>
            <div style={styles.sidebarSection}>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Sundarpatan</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main style={styles.mainColumn}>

            {/* Quote Block */}
            <div style={styles.quoteBox}>
              "The Northern Red Muntjac is a distinct and stealthy deer species primarily found in the dense forests of Southern Asia. Despite its small size, this elusive creature is sturdy, measuring approcimately 50-65 cm at the shoulder and weighing between 12-28kg. Its reddish-brown fur and cream-colored underparts provide natural camouflage in the undergrowth.

              <br/><br/>

              The male is easily recognizable by its elongated upper canines and short antlers. They are solitary or pair-oriented and are most active during dusk and dawn. Their unique bark-like call is a clear sign of their presence. Renowned for their agility and quickness, they require patience to outsmart. The true value of hunting them lies in the pursuit itself."
              <br/><br/>
              ― In-Game Description
            </div>

            {/* Intro Text */}
            <p style={{marginBottom:'20px'}}>
              The <strong>Northern Red Muntjac</strong> is a (<span style={styles.link}>class 2</span>) deer species that can be hunted on <span style={styles.link}>Sundarpatan</span>.
            </p>

            {/* Table of Contents (smooth-scroll links) */}
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
                <li><a href="#features" style={styles.link} onClick={scrollToId('features')}>Features</a></li>
                <li><a href="#need-zones" style={styles.link} onClick={scrollToId('need-zones')}>Need Zone Times</a></li>
                <li><a href="#shot-scheme" style={styles.link} onClick={scrollToId('shot-scheme')}>Shot scheme</a></li>
                <li>
                  <a href="#fur-variants" style={styles.link} onClick={scrollToId('fur-variants')}>Fur variants</a>
                  <ol style={{margin:'6px 0 0 14px', paddingLeft: '0', color: '#6fb2e6', listStyleType: 'none'}}>
                    <li><a href="#fur-male" style={styles.link} onClick={scrollToId('fur-male')}>4.1 Male</a></li>
                    <li><a href="#fur-female" style={styles.link} onClick={scrollToId('fur-female')}>4.2 Female</a></li>
                  </ol>
                </li>
                <li><a href="#variant-rarity" style={styles.link} onClick={scrollToId('variant-rarity')}>Fur Variant Rarity</a></li>
                <li><a href="#trivia" style={styles.link} onClick={scrollToId('trivia')}>Trivia</a></li>
                <li><a href="#references" style={styles.link} onClick={scrollToId('references')}>References</a></li>
              </ol>
            </div>

            {/* FEATURES */}
            <h2 id="features" style={styles.h2}>Features</h2>
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
            <h2 id="need-zones" style={styles.h2}>Need Zone Times</h2>
            <div style={{display:'inline-block'}}>
                <table style={{...styles.table, width: '300px'}}>
                    <thead>
                        <tr><th colSpan="2" style={{...styles.th, textAlign: 'center'}}>Sundarpatan</th></tr>
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

             {/* SHOT SCHEME - Updated Layout with Legend */}
             <h2 id="shot-scheme" style={styles.h2}>Shot scheme</h2>
            <div style={styles.shotContainer}>
                <div style={styles.shotImageWrapper}>
                   <img src={ShotSchemeImage} alt="Shot Scheme" style={{width: '100%', height: 'auto', maxHeight:'350px', objectFit: 'contain'}} />
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
            <h2 id="fur-variants" style={styles.h2}>Fur variants</h2>

            <h3 id="fur-male" style={{...styles.h2, fontSize: '1.15rem', marginTop: '10px'}}>Male</h3>
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

            <h3 id="fur-female" style={{...styles.h2, fontSize: '1.15rem', marginTop: '18px'}}>Female</h3>
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
                        <tr>
                            <td style={{...styles.td, color: '#3498db', fontStyle: 'italic', fontWeight: 'bold'}}>
                                Male/<span style={{color: '#d63384'}}>Female</span>
                            </td>
                            <td style={styles.td}>
                                Red Variation 1 (49.87%)<br/>
                                Red Variation 2 (49.87%)
                            </td>
                            <td style={styles.td}>X</td>
                            <td style={styles.td}>X</td>
                            <td style={styles.td}>
                                Leucistic Variation 1 (0.07%)<br/>
                                Leucistic Variation 2 (0.07%)<br/>
                                Melanistic (0.07%)<br/>
                                Albino (0.05%)
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
            <ol style={{fontSize: '0.9rem', paddingLeft: '20px'}}>
               {references.map((ref, idx) => (
                  <li key={idx} style={{marginBottom: '4px'}}>
                     <span style={styles.link}>↑ {ref}</span>
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

export default NorthernRedMuntjac;