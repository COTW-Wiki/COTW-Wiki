import React from 'react';
import HarlequinDuckMain from '../../../assets/HarlequinDuck.webp';
import HarlequinDuck_AlbinoMaleFront from '../../../assets/HarlequinDuck_AlbinoMaleFront.webp';
import HarlequinDuck_AlbinoFemaleFront from '../../../assets/HarlequinDuck_AlbinoFemaleFront.webp';
import HarlequinDuck_DarkGreyMaleFront from '../../../assets/HarlequinDuck_DarkGreyMaleFront.webp';
import HarlequinDuck_DarkGreyFemaleFront from '../../../assets/HarlequinDuck_DarkGreyFemaleFront.webp';
import HarlequinDuck_GreyFemaleFront from '../../../assets/HarlequinDuck_GreyFemaleFront.webp';
import HarlequinDuck_MelanisticMaleFront from '../../../assets/HarlequinDuck_MelanisticMaleFront.webp';
import HarlequinDuck_PiebaldMaleFront from '../../../assets/HarlequinDuck_PiebaldMaleFront.webp';
import HarlequinDuck_AlbinoFemaleBack from '../../../assets/HarlequinDuck_AlbinoFemaleBack.webp';
import HarlequinDuck_AlbinoMaleBack from '../../../assets/HarlequinDuck_AlbinoMaleBack.webp';
import HarlequinDuck_DarkBrownFemaleBack from '../../../assets/HarlequinDuck_DarkBrownFemaleBack.webp';
import HarlequinDuck_DarkBrownFemaleFront from '../../../assets/HarlequinDuck_DarkBrownFemaleFront.webp';
import HarlequinDuck_DarkFemaleBack from '../../../assets/HarlequinDuck_DarkFemaleBack.webp';
import HarlequinDuck_DarkFemaleFront from '../../../assets/HarlequinDuck_DarkFemaleFront.webp';
import HarlequinDuck_DarkGreyFemaleBack from '../../../assets/HarlequinDuck_DarkGreyFemaleBack.webp';
import HarlequinDuck_DarkGreyMaleBack from '../../../assets/HarlequinDuck_DarkGreyMaleBack.webp';
import HarlequinDuck_GreyFemaleBack from '../../../assets/HarlequinDuck_GreyFemaleBack.webp';
import HarlequinDuck_MelanisticMaleBack from '../../../assets/HarlequinDuck_MelanisticMaleBack.webp';
import HarlequinDuck_PiebaldMaleBack from '../../../assets/HarlequinDuck_PiebaldMaleBack.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import class1Icon from '../../../assets/Class1Icon.webp';
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

const HarlequinDuck = () => {
  // --- DATA SOURCES ---

  // Need Zone Times
  const needZones = [
    { time: "05:00 - 07:00", type: "Feeding", icon: FeedingZoneIcon },
    { time: "09:00 - 11:00", type: "Feeding", icon: FeedingZoneIcon },
    { time: "13:00 - 15:00", type: "Feeding", icon: FeedingZoneIcon },
    { time: "17:00 - 19:00", type: "Feeding", icon: FeedingZoneIcon },
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Active, Social" },
    { label: "Habitat", value: "Rocky coastlines and fast, cold water streams" },
    { label: "Senses", value: "Poor sense of smell and hearing, good eyesight" },
    { label: "Social", value: "Small mixed groups, but can also be found alone or in mated pairs" },
    { label: "Active", value: "Feeds all day long with occasional periods of rest" },
    { label: "Recommended Equipment", value: "Class 1 Ammo, Birdshot shotgun ammo, Harlequin Duck Decoys" },
    { label: "Species", value: "Histrionicus histrionicus", italic: true },
    { label: "Difficulty", value: "Easy" },
  ];

  // Plumage Variants (Male) — image-backed
  const plumageMale = [
    { name: "Albino - Front", src: HarlequinDuck_AlbinoMaleFront },
    { name: "Albino - Back", src: HarlequinDuck_AlbinoMaleBack },
    { name: "Dark Grey - Front", src: HarlequinDuck_DarkGreyMaleFront },
    { name: "Dark Grey - Back", src: HarlequinDuck_DarkGreyMaleBack },
    { name: "Melanistic - Front", src: HarlequinDuck_MelanisticMaleFront },
    { name: "Melanistic - Back", src: HarlequinDuck_MelanisticMaleBack },
    { name: "Piebald - Front", src: HarlequinDuck_PiebaldMaleFront },
    { name: "Piebald - Back", src: HarlequinDuck_PiebaldMaleBack },
  ];

  // Plumage Variants (Female) — image-backed
  const plumageFemale = [
    { name: "Albino - Front", src: HarlequinDuck_AlbinoFemaleFront },
    { name: "Albino - Back", src: HarlequinDuck_AlbinoFemaleBack },
    { name: "Dark - Front", src: HarlequinDuck_DarkFemaleFront },
    { name: "Dark - Back", src: HarlequinDuck_DarkFemaleBack },
    { name: "Dark Brown - Front", src: HarlequinDuck_DarkBrownFemaleFront },
    { name: "Dark Brown - Back", src: HarlequinDuck_DarkBrownFemaleBack },
    { name: "Dark Grey - Front", src: HarlequinDuck_DarkGreyFemaleFront },
    { name: "Dark Grey - Back", src: HarlequinDuck_DarkGreyFemaleBack },
    { name: "Grey - Front", src: HarlequinDuck_GreyFemaleFront },
    { name: "Grey - Back", src: HarlequinDuck_GreyFemaleBack },
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

  // Table of Contents data and smooth scroll handler
  const toc = [
    { id: 'features', label: 'Features' },
    { id: 'need-zones', label: 'Need Zone Times' },
    { id: 'tips', label: 'Tips' },
    { id: 'plumage', label: 'Plumage Variants', children: [
      { id: 'plumage-male', label: 'Male' },
      { id: 'plumage-female', label: 'Female' },
    ]},
    { id: 'rarity', label: 'Plumage Variant Rarity' },
    { id: 'trivia', label: 'Trivia' },
    { id: 'references', label: 'References' },
  ];

  const handleTOCClick = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div style={styles.container}>
      <div style={styles.innerWrapper}>
        
        {/* PAGE HEADER */}
        <div style={styles.mainHeader}>
          <span>Harlequin Duck</span>
          <div style={styles.editActions}>
          </div>
        </div>

        <div style={styles.layout}>
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside style={styles.sidebarColumn}>
            <div style={styles.sidebarHeader}>Harlequin Duck</div>
            <div style={styles.sidebarImage}>
              <img src={HarlequinDuckMain} alt="Harlequin Duck" style={{width: '268.4px', height: '134.2px', objectFit: 'cover', display: 'block'}} />
            </div>
            
            <div style={styles.sidebarHeader}>General Information</div>
            
            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Class</span>
              <span><img src={class1Icon} alt="Class 1" style={{width: '18px', height: '18px', verticalAlign: 'middle', marginRight: '6px'}}/>1</span>
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
                   <span>5.34</span>
                </div>
                <div style={styles.trophyItem}>
                   <span style={{...styles.trophyLabel, ...styles.gold}}>☗ Gold</span>
                   <span>6.42</span>
                </div>
                <div style={styles.trophyItem}>
                   <span style={{...styles.trophyLabel, ...styles.diamond}}>☗ Diamond</span>
                   <span>7.23</span>
                </div>
              </div>
            </div>

            <div style={styles.sidebarSection}>
               <span style={styles.sidebarLabel}>Weight</span>
               500g — 750g<br/>
               1.1lbs — 1.7lbs
            </div>

            <div style={styles.sidebarSection}>
               <span style={styles.sidebarLabel}>Plumage</span>
               <span style={{fontSize: '0.85rem'}}>
                 Albino, Dark, Dark Brown, Dark Grey, Grey, Melanistic, Piebald
               </span>
            </div>

            <div style={styles.sidebarHeader}>Locations</div>
            <div style={styles.sidebarSection}>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Yukon Valley Nature Reserve</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main style={styles.mainColumn}>

            {/* Quote Block */}
            <div style={styles.quoteBox}>
              "The harlequin duck is a sea duck that lives primarily in the cold waters of the North Atlantic and Pacific Ocean. Its name comes from the colorful and elaborate plumage of the breeding males and is a reference to the eponymous character from the Italian Commedia dell'arte. They are sometimes nicknamed "sea mice" due to their characteristic squeaks. The harlequin duck is relatively small. Adults can measure up to 0.5 m in length, 0.70 m in wingspan and tip the scale at roughly 0.70 kg."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p style={{marginBottom: '20px'}}>
              The <strong>Harlequin Duck</strong> is a (<span style={styles.link}>class 1</span>) that can be hunted on <span style={styles.link}>Yukon Valley</span>. The Harlequin Duck is the first of 3 in game "Sea Ducks" huntable in game. The other two are the <span style={styles.link}>Goldeneye</span> and the <span style={styles.link}>Tufted Duck</span>. [A sea duck is type of duck that primarily dives for its food instead of "dabbing" on the surface in case you were wondering]
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
                🔢 Contents <span style={{float:'right', color: '#6fb2e6', fontSize:'0.8rem'}}>[hide]</span>
              </div>
              <ol style={{margin: '0', paddingLeft: '20px', color: '#6fb2e6', listStyleType: 'none'}}>
                {toc.map((item, idx) => (
                  <li key={item.id} style={{marginBottom: '6px', cursor: 'pointer'}} onClick={() => handleTOCClick(item.id)}>
                    <strong style={{marginRight: '6px'}}>{idx + 1}.</strong> {item.label}
                    {item.children && (
                      <ol style={{marginTop: '6px', marginLeft: '12px', listStyleType: 'none'}}>
                        {item.children.map((child, cidx) => (
                          <li key={child.id} style={{cursor: 'pointer'}} onClick={(e) => { e.stopPropagation(); handleTOCClick(child.id); }}>{`${idx + 1}.${cidx + 1} ${child.label}`}</li>
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
                        <tr>
                            <th style={{...styles.th, backgroundColor: '#0f2e48'}}>Times</th>
                            <th style={{...styles.th, backgroundColor: '#0f2e48'}}>Activity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {needZones.map((zone, i) => (
                        <tr key={i}>
                          <td style={styles.td}>{zone.time}</td>
                          <td style={styles.td}><img src={zone.icon} alt={zone.type} style={{width: '18px', height: '18px', verticalAlign: 'middle', marginRight: '6px'}}/>{zone.type}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Shot Scheme removed per request */}

            {/* TIPS */}
            <h2 id="tips" style={styles.h2}>Tips</h2>
            <p>
              Ducks will fly against the wind when making a landing, so be mindful of the wind direction. If you are going to use blinds and decoys, place your decoys approximately 50ms (54yds) away from your blind so the <strong>Harlequin Ducks</strong> won't fly on top of you and spook.
            </p>

            {/* PLUMAGE VARIANTS (Gallery) */}
            <h2 id="plumage" style={styles.h2}>Plumage Variants</h2>
            
            <h3 id="plumage-male" style={styles.h3}>Male</h3>
            <div style={styles.galleryGrid}>
              {plumageMale.map((img, i) => (
                  <div key={i} style={styles.galleryItem}>
                      <div style={styles.galleryImgPlaceholder}>
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
                      <div style={styles.galleryImgPlaceholder}>
                        <img src={img.src} alt={img.name} style={{width: '146px', height: '165px', objectFit: 'cover', display: 'block'}} />
                      </div>
                      <span style={styles.galleryLabel}>{img.name}</span>
                  </div>
              ))}
            </div>

            {/* PLUMAGE RARITY TABLE */}
            <h2 id="rarity" style={styles.h2}>Plumage Variant Rarity</h2>
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
                            Dark Grey (74.85%)<br/>
                            Piebald (25.05%)
                        </td>
                        <td style={styles.td}>X</td>
                        <td style={styles.td}>X</td>
                        <td style={styles.td}>
                            Albino (0.05%)<br/>
                            Melanistic (0.05%)
                        </td>
                    </tr>
                    {/* Female Row */}
                    <tr>
                        <td style={{...styles.td, color: '#e91e63', fontStyle: 'italic'}}>Female</td>
                        <td style={styles.td}>
                            Dark Grey (66.53%)<br/>
                            Dark Brown (33.26%)
                        </td>
                        <td style={styles.td}>X</td>
                        <td style={styles.td}>Dark (0.13%)</td>
                        <td style={styles.td}>
                            Albino (0.04%)<br/>
                            Grey (0.03%)
                        </td>
                    </tr>
                </tbody>
            </table>

            {/* TRIVIA */}
            <h2 id="trivia" style={styles.h2}>Trivia</h2>
            <ul style={{paddingLeft: '20px', marginBottom: '30px'}}>
                <li style={{marginBottom:'8px'}}>The Harlequin Duck gets it's name from it's distinct plumage pattern, reminiscent of the type of pattern that would have been worn by a the 16th century Italian comic relief character called a <em>Harlequin</em>. However, the origins of the word, <em>Harlequin</em>, maybe even older. And could even trace it's origins to an Old French character from the 11th Century called: <em>Herlequin</em>. <em>Herlequin</em> was a masked club wielding giant who led a pose of demons during the Germanic wild hunt.[1][2]</li>
                <li style={{marginBottom:'8px'}}>Its scientific name <em>Histrionicus Histrionicus</em> is derived from the Latin word <em>Histrio</em> meaning <em>Actor</em>. [3]</li>
                <li style={{marginBottom:'8px'}}>Other names for the Harlequin Duck include the <em>Sea Mouse</em>, in reference to their high pitched squeaks, <em>Rock Duck</em>, and their different genders may be distinguished with the moniker of either <em>Lord</em> or <em>Lady</em>.[4]</li>
                <li style={{marginBottom:'8px'}}>Harlequin Ducks are considered a uniquely fragile duck species. It is believed that Harlequin Ducks suffer from more broken bones than any other duck species.[5]</li>
                <li>They are a protected species in Eastern Canada, and hunting them is completely banned in that region of the country. The Committee on the Status of Endangered Wildlife in Canada, (COSEWIC), lists them as endangered.[6]</li>
            </ul>

            {/* REFERENCES */}
            <h2 id="references" style={styles.h2}>References</h2>
            <ol style={{paddingLeft: '25px', color: '#6fb2e6'}}>
                <li><span style={styles.link}>https://www.etymonline.com/word/harlequin</span></li>
                <li><span style={styles.link}>https://en.wikipedia.org/wiki/Harlequin</span></li>
                <li><span style={styles.link}>https://www.merriam-webster.com/dictionary/histrio</span></li>
                <li><span style={styles.link}>https://en.wikipedia.org/wiki/Harlequin_duck</span></li>
                <li><span style={styles.link}>https://www.allaboutbirds.org/guide/Harlequin_Duck/overview</span></li>
                <li><span style={styles.link}>https://www.hww.ca/en/wildlife/birds/harlequin-duck.html</span></li>
            </ol>

            <AnimalsTableMini />
          </main>
        </div>
      </div>
    </div>
  );
};

export default HarlequinDuck;