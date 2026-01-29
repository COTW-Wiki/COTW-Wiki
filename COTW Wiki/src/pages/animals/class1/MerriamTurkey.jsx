import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import class1Icon from '../../../assets/Class1Icon.webp';
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import MerriamTurkeyMain from '../../../assets/MerriamsTurkey.webp';


// Male Plumage Images
import MerriamTurkey_AlbinoMale from '../../../assets/MerriamsTurkey_AlbinoMale.webp';
import MerriamTurkey_BrownMale from '../../../assets/MerriamsTurkey_BrownMale.webp';
import MerriamTurkey_LeucisticMale from '../../../assets/MerriamsTurkey_LeucisticMale.webp';
import MerriamTurkey_LightBrownMale from '../../../assets/MerriamsTurkey_LightBrownMale.webp';
import MerriamTurkey_MelanisticMale from '../../../assets/MerriamsTurkey_MelanisticMale.webp';

// Female Plumage Images
import MerriamTurkey_AlbinoFemale from '../../../assets/MerriamsTurkey_AlbinoFemale.webp';
import MerriamTurkey_BrownFemale from '../../../assets/MerriamsTurkey_BrownFemale.webp';
import MerriamTurkey_LeucisticFemale from '../../../assets/MerriamsTurkey_LeucisticFemale.webp';
import MerriamTurkey_LightBrownFemale from '../../../assets/MerriamsTurkey_LightBrownFemale.webp';
import MerriamTurkey_MelanisticFemale from '../../../assets/MerriamsTurkey_MelanisticFemale.webp';


const MerriamTurkey = () => {

  // --- DATA SOURCES ---

  // Need Zone Times (Updated to match screenshot with 3 locations)
  const needZonesData = [
    {
      name: "Silver Ridge Peaks",
      schedule: [
        { time: "00:00 - 04:00", type: "Resting", icon: RestingZoneIcon },
        { time: "04:00 - 11:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "11:00 - 14:00", type: "Resting", icon: RestingZoneIcon },
        { time: "14:00 - 20:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "20:00 - 00:00", type: "Resting", icon: RestingZoneIcon },
      ]
    },
    {
      name: "Te Awaroa National Park",
      schedule: [
        { time: "00:00 - 04:30", type: "Resting", icon: RestingZoneIcon },
        { time: "04:00 - 08:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "08:00 - 11:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "11:00 - 14:30", type: "Resting", icon: RestingZoneIcon },
        { time: "14:00 - 17:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "17:00 - 20:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "20:00 - 00:00", type: "Resting", icon: RestingZoneIcon },
      ]
    },
    {
      name: "Layton Lake District",
      schedule: [
        { time: "00:00-04:00", type: "Resting", icon: RestingZoneIcon },
        { time: "04:00-08:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "08:00-11:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "11:00-14:00", type: "Resting", icon: RestingZoneIcon },
        { time: "14:00-17:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "17:00-20:00", type: "Feeding", icon: FeedingZoneIcon },
      ]
    }
  ];

  // Features Table (Updated text from screenshot)
  const features = [
    { label: "Behavior", value: "Wary, shy" },
    { label: "Habitat", value: "Forests and grasslands" },
    { label: "Senses", value: "Strong movement vision; weak sense of smell" },
    { label: "Social", value: "Highly social and tend to gather near each other" },
    { label: "Active", value: "Daytime" },
    { label: "Recommended Equipment", value: "Class 1 Ammo, Turkey Decoys, Turkey Caller" },
    { label: "Species", value: "Meleagris gallopavo", italic: true, isLink: true },
    { label: "Difficulty", value: "Easy" },
  ];

  // Plumage Gallery Data (Added Dark Brown placeholder to match list)
  const plumageGallery = {
    male: [
      { name: "Albino", src: MerriamTurkey_AlbinoMale },
      { name: "Brown", src: MerriamTurkey_BrownMale },
      { name: "Dark Brown", src: MerriamTurkey_BrownMale }, // Reusing Brown image as placeholder
      { name: "Leucistic", src: MerriamTurkey_LeucisticMale },
      { name: "Light Brown", src: MerriamTurkey_LightBrownMale },
      { name: "Melanistic", src: MerriamTurkey_MelanisticMale },
    ],
    female: [
      { name: "Albino", src: MerriamTurkey_AlbinoFemale },
      { name: "Brown", src: MerriamTurkey_BrownFemale },
      { name: "Dark Brown", src: MerriamTurkey_BrownFemale }, // Reusing Brown image as placeholder
      { name: "Leucistic", src: MerriamTurkey_LeucisticFemale },
      { name: "Light Brown", src: MerriamTurkey_LightBrownFemale },
      { name: "Melanistic", src: MerriamTurkey_MelanisticFemale },
    ]
  };

  // Smooth-scroll helper for TOC links
  const scrollToId = (id) => (e) => {
    if (e && e.preventDefault) e.preventDefault();
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
          <span>Merriam Turkey</span>
          <div style={styles.editActions}>
          </div>
        </div>

        <div style={styles.layout}>
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside style={styles.sidebarColumn}>
            <div style={styles.sidebarHeader}>Merriam Turkey</div>
            <div style={styles.sidebarImage}>
              <img src={MerriamTurkeyMain} alt="Merriam Turkey" style={{width:'268px', height: '134px', objectFit: 'cover'}} />
            </div>
            
            <div style={styles.sidebarHeader}>General Information</div>
            
            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Class</span>
              <span><img src={class1Icon} alt="Class 1" style={{width:'20px', height:'20px', verticalAlign: 'middle', marginRight: '6px'}}/>1</span>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Difficulty</span>
              <span>1: Trivial — 3: Very Easy</span>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Trophy Type</span>
              <span>Combined</span>
              <div style={styles.trophyGrid}>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.silver}}>◆ Silver</span>
                  <span>3.36</span>
                </div>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.gold}}>☗ Gold</span>
                  <span>4.08</span>
                </div>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.diamond}}>☗ Diamond</span>
                  <span>4.62</span>
                </div>
              </div>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Weight</span>
              3.6kg — 11kg<br/>
              8lbs — 24lbs
            </div>

            <div style={styles.sidebarSection}>
               <span style={styles.sidebarLabel}>Plumage</span>
               <span style={{fontSize:'0.85rem'}}>
                  Albino, Brown, Dark-Brown, Leucistic, Light Brown, Melanistic
               </span>
            </div>

            <div style={styles.sidebarHeader}>Locations</div>
            <div style={styles.sidebarSection}>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Silver Ridge Peaks</span></div>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Te Awaroa National Park</span></div>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Layton Lake District</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main style={styles.mainColumn}>

            {/* Quote Block */}
            <div style={styles.quoteBox}>
              "Turkeys are native to North America, and turkey hunting is big all across the continent. It's so popular that hunters are warned not to stalk them in case they might be heading towards another hunter's ambush. Turkeys are land roaming animals but are known to be able to fly around 400.00 m in a single go. They can easily climb trees and enjoy using them as hiding areas from ground predators while they roost. They're known to be very unpredictable and extremely easy to spook. As part of the Galliformes bird order, they are closely related to other game birds such as pheasants, partridge, and quail. Males are called jakes, gobblers or toms, with a female is called a jenny."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p style={{marginBottom:'20px'}}>
              The <strong>Merriam Turkey</strong> is a <span style={styles.link}>class 1</span> species of Turkey introduced with the release of <span style={styles.link}>Silver Ridge Peaks</span>. It also dwells in <span style={styles.link}>Te Awaroa National Park</span> and was retroactively added to <span style={styles.link}>Layton Lake District</span>. It is the first of 3 turkey species in game. The other turkey species include the <span style={styles.link}>Rio Grande Turkey</span> and the <span style={styles.link}>Eastern Wild Turkey</span>.
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
                <li><a href="#features" style={styles.link} onClick={scrollToId('features')}>Features</a></li>
                <li><a href="#need-zone-times" style={styles.link} onClick={scrollToId('need-zone-times')}>Need Zone Times</a></li>
                <li>
                  <a href="#plumage-variants" style={styles.link} onClick={scrollToId('plumage-variants')}>Plumage variants</a>
                  <ul style={{listStyleType:'none', paddingLeft:'10px', margin:'5px 0'}}>
                    <li><a href="#plumage-male" style={styles.link} onClick={scrollToId('plumage-male')}>3.1. Male</a></li>
                    <li><a href="#plumage-female" style={styles.link} onClick={scrollToId('plumage-female')}>3.2. Female</a></li>
                  </ul>
                </li>
                <li><a href="#plumage-rarity" style={styles.link} onClick={scrollToId('plumage-rarity')}>Plumage Variant Rarity</a></li>
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
                        {item.isLink ? <span style={styles.link}>{item.value}</span> : <span dangerouslySetInnerHTML={{ __html: item.value }} />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            {/* NEED ZONE TIMES */}
            <h2 id="need-zone-times" style={styles.h2}>Need Zone Times</h2>
            <div style={{display:'flex', gap:'5px', flexWrap: 'wrap'}}>
                {needZonesData.map((zoneData, idx) => (
                  <div key={idx} style={{flex: '1 1 200px'}}>
                    <table style={{...styles.table, marginBottom: 0}}>
                        <thead>
                            <tr><th colSpan="2" style={{...styles.th, textAlign: 'center'}}>{zoneData.name}</th></tr>
                            <tr>
                                <th style={{...styles.th, backgroundColor: '#0f2e48'}}>Times</th>
                                <th style={{...styles.th, backgroundColor: '#0f2e48'}}>Activity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {zoneData.schedule.map((zone, i) => (
                            <tr key={i}>
                                <td style={styles.td}>{zone.time}</td>
                                <td style={styles.td}><img src={zone.icon} alt={zone.type} style={{width:'20px', height: '20px', verticalAlign: 'middle', marginRight: '6px'}}/> {zone.type}</td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                  </div>
                ))}
            </div>

            {/* PLUMAGE VARIANTS (Gallery) */}
            <h2 id="plumage-variants" style={styles.h2}>Plumage variants</h2>
            
            {/* Male Section */}
            <h3 id="plumage-male" style={{...styles.h2, fontSize:'1.2rem', borderBottom:'none', marginTop:'10px'}}>Male</h3>
            <div style={styles.galleryGrid}>
              {plumageGallery.male.map((item, i) => (
                <div key={i} style={styles.galleryItem}>
                  <div style={styles.galleryImgPlaceholder}>
                    <img src={item.src} alt={item.name} style={{width:'146px', height: '165px', objectFit: 'cover'}} />
                  </div>
                  <span style={styles.galleryLabel}>{item.name}</span>
                </div>
              ))}
            </div>

            {/* Female Section */}
            <h3 id="plumage-female" style={{...styles.h2, fontSize:'1.2rem', borderBottom:'none', marginTop:'10px'}}>Female</h3>
            <div style={styles.galleryGrid}>
              {plumageGallery.female.map((item, i) => (
                <div key={i} style={styles.galleryItem}>
                  <div style={styles.galleryImgPlaceholder}>
                    <img src={item.src} alt={item.name} style={{width:'146px', height: '165px', objectFit: 'cover'}} />
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
                        <td style={{...styles.td, color: '#3498db', fontStyle: 'italic', fontWeight: 'bold'}}>
                            Male/<span style={{color: '#d63384'}}>Female</span>
                        </td>
                        <td style={styles.td}>
                            Brown (59.76%),<br/>
                            Light Brown (20.00%),<br/>
                            Dark Brown (20.00%)
                        </td>
                        <td style={styles.td}>X</td>
                        <td style={styles.td}>
                            Leucistic (0.16%)
                        </td>
                        <td style={styles.td}>
                            Albino (0.04%),<br/>
                            Melanistic (0.04%)
                        </td>
                    </tr>
                </tbody>
            </table>

            {/* TRIVIA */}
            <h2 id="trivia" style={styles.h2}>Trivia</h2>
            <ul style={{paddingLeft:'20px', marginBottom: '30px'}}>
              <li style={{marginBottom:'8px'}}>The Merriam Turkey is named after Clinton Hart Merriam, the first chief of The United States Fish and Wildlife Service.</li>
              <li style={{marginBottom:'8px'}}>In French, it is called "dinde" or "dindon sauvage."</li>
              <li style={{marginBottom:'8px'}}>Prior to the release of <span style={styles.link}>Rancho del Arroyo</span>, the <strong>Merriam Turkey</strong> was simply just referred to as "Turkey" in-game.</li>
              <li style={{marginBottom:'8px'}}>It is said that Founding Father Benjamin Franklin wanted the United States to adopt the Turkey as the country's national bird over the Bald Eagle. This is a myth. However Benjamin Franklin did write, "[The] Bald Eagle... is a Bird of bad moral Character. He does not get his Living honestly... [he] is too lazy to fish for himself... [The Turkey is] a much more respectable Bird, and withal a true original Native of America... He is besides, though a little vain & silly, a Bird of Courage."<sup>[1]</sup></li>
            </ul>
            
            {/* REFERENCES */}
            <h2 id="references" style={styles.h2}>References</h2>
            <div style={{fontSize: '0.9rem'}}>
               1. ↑ <span style={styles.link}>https://www.fi.edu/benjamin-franklin/franklin-national-bird</span>
            </div>

            <AnimalsTableMini />
          </main>
        </div>
      </div>
    </div>
  );
};

export default MerriamTurkey;