import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import class1Icon from '../../../assets/Class1Icon.webp';
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import RingNeckedPheasantMain from '../../../assets/RingNeckedPheasant.webp';

// Shot Scheme
import RingNeckedPheasantShotScheme from '../../../assets/Ring-Necked_Pheasant_shot_scheme.webp';

// Male Plumage Images
import RingNeckedPheasant_AlbinoFront from '../../../assets/RingNeckedPheasant_AlbinoMaleFront.webp';
import RingNeckedPheasant_AlbinoBack from '../../../assets/RingNeckedPheasant_AlbinoMaleBack.webp';
import RingNeckedPheasant_BrownFront from '../../../assets/RingNeckedPheasant_BrownMaleFront.webp';
import RingNeckedPheasant_BrownBack from '../../../assets/RingNeckedPheasant_BrownMaleBack.webp';
import RingNeckedPheasant_GreyFront from '../../../assets/RingNeckedPheasant_GreyMaleFront.webp';
import RingNeckedPheasant_GreyBack from '../../../assets/RingNeckedPheasant_GreyMaleBack.webp';
import RingNeckedPheasant_LeucisticFront from '../../../assets/RingNeckedPheasant_LeucisticMaleFront.webp';
import RingNeckedPheasant_LeucisticBack from '../../../assets/RingNeckedPheasant_LeucisticMaleBack.webp';
import RingNeckedPheasant_MelanisticFront from '../../../assets/RingNeckedPheasant_MelanisticMaleFront.webp';
import RingNeckedPheasant_MelanisticBack from '../../../assets/RingNeckedPheasant_MelanisticMaleBack.webp';
import RingNeckedPheasant_MoltingFront from '../../../assets/RingNeckedPheasant_MoltingMaleFront.webp';
import RingNeckedPheasant_MoltingBack from '../../../assets/RingNeckedPheasant_MoltingMaleBack.webp';
import RingNeckedPheasant_WhiteBrownFront from '../../../assets/RingNeckedPheasant_WhiteBrownMaleFront.webp';
import RingNeckedPheasant_WhiteBrownBack from '../../../assets/RingNeckedPheasant_WhiteBrownMaleBack.webp';

// Female Plumage Images
import RingNeckedPheasant_AlbinoFemaleFront from '../../../assets/RingNeckedPheasant_AlbinoFemaleFront.webp';
import RingNeckedPheasant_AlbinoFemaleBack from '../../../assets/RingNeckedPheasant_AlbinoFemaleBack.webp';
import RingNeckedPheasant_BrownFemaleFront from '../../../assets/RingNeckedPheasant_BrownFemaleFront.webp';
import RingNeckedPheasant_BrownFemaleBack from '../../../assets/RingNeckedPheasant_BrownFemaleBack.webp';
import RingNeckedPheasant_GreyFemaleFront from '../../../assets/RingNeckedPheasant_GreyFemaleFront.webp';
import RingNeckedPheasant_GreyFemaleBack from '../../../assets/RingNeckedPheasant_GreyFemaleBack.webp';
import RingNeckedPheasant_LeucisticFemaleFront from '../../../assets/RingNeckedPheasant_LeucisticFemaleFront.webp';
import RingNeckedPheasant_LeucisticFemaleBack from '../../../assets/RingNeckedPheasant_LeucisticFemaleBack.webp';
import RingNeckedPheasant_MelanisticFemaleFront from '../../../assets/RingNeckedPheasant_MelanisticFemaleFront.webp';
import RingNeckedPheasant_MelanisticFemaleBack from '../../../assets/RingNeckedPheasant_MelanisticFemaleBack.webp';

// Great One (Fabled) Plumage Images
import RingNeckedPheasant_FabledCitrineFront from '../../../assets/RingNeckedPheasant_FabledCitrineFront.webp';
import RingNeckedPheasant_FabledCitrineBack from '../../../assets/RingNeckedPheasant_FabledCitrineBack.webp';
import RingNeckedPheasant_FabledEmeraldFront from '../../../assets/RingNeckedPheasant_FabledEmeraldFront.webp';
import RingNeckedPheasant_FabledEmeraldBack from '../../../assets/RingNeckedPheasant_FabledEmeraldBack.webp';
import RingNeckedPheasant_FabledGarnetFront from '../../../assets/RingNeckedPheasant_FabledGarnetFront.webp';
import RingNeckedPheasant_FabledGarnetBack from '../../../assets/RingNeckedPheasant_FabledGarnetBack.webp';
import RingNeckedPheasant_FabledMorganiteFront from '../../../assets/RingNeckedPheasant_FabledMorganiteFront.webp';
import RingNeckedPheasant_FabledMorganiteBack from '../../../assets/RingNeckedPheasant_FabledMorganiteBack.webp';
import RingNeckedPheasant_FabledObsidianFront from '../../../assets/RingNeckedPheasant_FabledObsidianFront.webp';
import RingNeckedPheasant_FabledObsidianBack from '../../../assets/RingNeckedPheasant_FabledObsidianBack.webp';
import RingNeckedPheasant_FabledPearlFront from '../../../assets/RingNeckedPheasant_FabledPearlFront.webp';
import RingNeckedPheasant_FabledPearlBack from '../../../assets/RingNeckedPheasant_FabledPearlBack.webp';
import RingNeckedPheasant_FabledRubyFront from '../../../assets/RingNeckedPheasant_FabledRubyFront.webp';
import RingNeckedPheasant_FabledRubyBack from '../../../assets/RingNeckedPheasant_FabledRubyBack.webp';
import RingNeckedPheasant_FabledSapphireFront from '../../../assets/RingNeckedPheasant_FabledSapphireFront.webp';
import RingNeckedPheasant_FabledSapphireBack from '../../../assets/RingNeckedPheasant_FabledSapphireBack.webp';


const RingNeckedPheasant = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  const needZonesData = [
    {
      name: "Hirschfelden & Askiy Ridge",
      schedule: [
        { time: "00:00-04:00", type: "Resting", icon: RestingZoneIcon },
        { time: "04:00-08:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "08:00-11:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "11:00-14:00", type: "Resting", icon: RestingZoneIcon },
        { time: "14:00-18:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "18:00-21:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "21:00-00:00", type: "Resting", icon: RestingZoneIcon },
      ]
    }
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Skittish and alert" },
    { label: "Habitat", value: "Open prairies and farmlands; hides in bushes or tall grass when threatened" },
    { label: "Senses", value: "Good eyesight and hearing, weak smell" },
    { label: "Social", value: "Live in loose flocks, can be encountered alone or in small groups" },
    { label: "Active", value: "Most active in the morning and evening. Hides during the day and rests at night" },
    { label: "Recommended Equipment", value: "Class 1 Ammo" },
    { label: "Species", value: "Phasianus colchicus", italic: true, isLink: true },
    { label: "Difficulty", value: "Easy" },
  ];

  // Plumage Gallery Data
  const plumageGallery = {
    male: [
      { name: "Albino - Front", src: RingNeckedPheasant_AlbinoFront },
      { name: "Albino - Back", src: RingNeckedPheasant_AlbinoBack },
      { name: "Brown - Front", src: RingNeckedPheasant_BrownFront },
      { name: "Brown - Back", src: RingNeckedPheasant_BrownBack },
      { name: "Grey - Front", src: RingNeckedPheasant_GreyFront },
      { name: "Grey - Back", src: RingNeckedPheasant_GreyBack },
      { name: "Leucistic - Front", src: RingNeckedPheasant_LeucisticFront },
      { name: "Leucistic - Back", src: RingNeckedPheasant_LeucisticBack },
      { name: "Melanistic - Front", src: RingNeckedPheasant_MelanisticFront },
      { name: "Melanistic - Back", src: RingNeckedPheasant_MelanisticBack },
      { name: "Molting - Front", src: RingNeckedPheasant_MoltingFront },
      { name: "Molting - Back", src: RingNeckedPheasant_MoltingBack },
      { name: "White Brown - Front", src: RingNeckedPheasant_WhiteBrownFront },
      { name: "White Brown - Back", src: RingNeckedPheasant_WhiteBrownBack },
    ],
    female: [
      { name: "Albino - Front", src: RingNeckedPheasant_AlbinoFemaleFront },
      { name: "Albino - Back", src: RingNeckedPheasant_AlbinoFemaleBack },
      { name: "Brown - Front", src: RingNeckedPheasant_BrownFemaleFront },
      { name: "Brown - Back", src: RingNeckedPheasant_BrownFemaleBack },
      { name: "Grey - Front", src: RingNeckedPheasant_GreyFemaleFront },
      { name: "Grey - Back", src: RingNeckedPheasant_GreyFemaleBack },
      { name: "Leucistic - Front", src: RingNeckedPheasant_LeucisticFemaleFront },
      { name: "Leucistic - Back", src: RingNeckedPheasant_LeucisticFemaleBack },
      { name: "Melanistic - Front", src: RingNeckedPheasant_MelanisticFemaleFront },
      { name: "Melanistic - Back", src: RingNeckedPheasant_MelanisticFemaleBack },
    ],
    // Great One Data
    greatOne: [
      { name: "Fabled Citrine - Front", src: RingNeckedPheasant_FabledCitrineFront },
      { name: "Fabled Citrine - Back", src: RingNeckedPheasant_FabledCitrineBack },
      { name: "Fabled Emerald - Front", src: RingNeckedPheasant_FabledEmeraldFront },
      { name: "Fabled Emerald - Back", src: RingNeckedPheasant_FabledEmeraldBack },
      { name: "Fabled Garnet - Front", src: RingNeckedPheasant_FabledGarnetFront },
      { name: "Fabled Garnet - Back", src: RingNeckedPheasant_FabledGarnetBack },
      { name: "Fabled Morganite - Front", src: RingNeckedPheasant_FabledMorganiteFront },
      { name: "Fabled Morganite - Back", src: RingNeckedPheasant_FabledMorganiteBack },
      { name: "Fabled Obsidian - Front", src: RingNeckedPheasant_FabledObsidianFront },
      { name: "Fabled Obsidian - Back", src: RingNeckedPheasant_FabledObsidianBack },
      { name: "Fabled Pearl - Front", src: RingNeckedPheasant_FabledPearlFront },
      { name: "Fabled Pearl - Back", src: RingNeckedPheasant_FabledPearlBack },
      { name: "Fabled Ruby - Front", src: RingNeckedPheasant_FabledRubyFront },
      { name: "Fabled Ruby - Back", src: RingNeckedPheasant_FabledRubyBack },
      { name: "Fabled Sapphire - Front", src: RingNeckedPheasant_FabledSapphireFront },
      { name: "Fabled Sapphire - Back", src: RingNeckedPheasant_FabledSapphireBack },
    ]
  };

  // References List
  const references = [
    "Ring-Necked Pheasant Need Zones, Hirschfelden",
    "Ring-Necked Pheasant Need Zones, Askiy Ridge",
    "https://www.etymonline.com/word/pheasant",
    "https://www.pheasant.com/facts",
    "https://en.wikipedia.org/wiki/Chinese_pheasant",
    "https://statesymbolsusa.org/states/united-states/south-dakota"
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
    editActions: {
      fontSize: '0.9rem',
      color: '#6fb2e6',
      display: 'flex',
      gap: '15px',
      fontWeight: 'bold',
      cursor: 'pointer',
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
    greatOne: { color: '#a0e0c0', fontWeight: 'bold', display: 'block', marginTop: '10px', textAlign: 'center', fontSize: '0.9rem' },
    
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
    },
    shotContainer: {
      display: 'flex',
      backgroundColor: '#112233',
      marginTop: '10px',
      border: '1px solid #1f405a',
    },
    shotImage: {
      width: '500px',
      backgroundColor: '#000',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#555',
      flexShrink: 0,
    },
    shotInfo: {
      padding: '20px',
      flex: 1,
      color: '#fff',
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
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.innerWrapper}>
        
        {/* PAGE HEADER */}
        <div style={styles.mainHeader}>
          <span>Ring-Necked Pheasant</span>
          <div style={styles.editActions}>
          </div>
        </div>

        <div style={styles.layout}>
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside style={styles.sidebarColumn}>
            <div style={styles.sidebarHeader}>Ring-Necked Pheasant</div>
            <div style={styles.sidebarImage}>
              <img src={RingNeckedPheasantMain} alt="Ring-Necked Pheasant" style={{width:'268px', height: '134px', objectFit: 'cover'}} />
            </div>
            
            <div style={styles.sidebarHeader}>General Information</div>
            
            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Class</span>
              <span><img src={class1Icon} alt="Class 1" style={{width:'20px', height:'20px', verticalAlign: 'middle', marginRight: '6px'}}/>1</span>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Difficulty</span>
              <span>1: Trivial — 3: Very Easy<br/>10: Fabled</span>
            </div>

            {/* Trophy Type */}
            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Trophy Type</span>
              <span>Combined</span>
              <div style={styles.trophyGrid}>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.silver}}>◆ Silver</span>
                  <span>9.10</span>
                </div>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.gold}}>☗ Gold</span>
                  <span>15.50</span>
                </div>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.diamond}}>☗ Diamond</span>
                  <span>20.30</span>
                </div>
              </div>
              <div style={styles.greatOne}>
                 ❖ Great One
              </div>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Weight</span>
              500g — 3kg<br/>
              1.1lbs — 7lbs
            </div>

            {/* Plumage */}
            <div style={styles.sidebarSection}>
               <span style={styles.sidebarLabel}>Plumage</span>
               <span style={{fontSize:'0.85rem'}}>
                  Albino, Brown, Grey, Leucistic, Melanistic, Molting, White Brown<br/>
                  <strong>Fabled Exclusive:</strong> Citrine, Emerald, Garnet, Morganite, Obsidian, Pearl, Ruby, Sapphire
               </span>
            </div>

            <div style={styles.sidebarHeader}>Locations</div>
            <div style={styles.sidebarSection}>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Rancho del Arroyo</span></div>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Hirschfelden Hunting Reserve</span></div>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Cuatro Colinas Game Reserve</span></div>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>New England Mountains</span></div>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Salzwiesen Park</span></div>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Askiy Ridge Hunting Preserve</span></div>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Tòrr nan Sithean</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main style={styles.mainColumn}>

            {/* Quote Block */}
            <div style={styles.quoteBox}>
              "Ring-necked pheasants are a subspecies of the common pheasant, named after the ring of white feathers at the base of their neck. The common pheasant is an extremely popular game bird all over the world. Originating in Asia, the species has been introduced in many countries for the purpose of hunting. Pheasants live in loose flocks that break up into mated pairs come the breeding season. They exhibit strong sexual dimorphism. Males have a vibrant plumage with a distinctive blue-green head and red wattles on their face. Females have a duller light-brown plumage with black spots. Pheasants live on the ground in open prairies and farmlands, where they feed on seeds and insects. They are not adept flyers and only take to the air as a last ditch effort to escape immediate danger."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p style={{marginBottom:'20px'}}>
              The <strong>Ring-Necked Pheasant</strong> is a <span style={styles.link}>class 1</span> pheasant species that can be hunted on <span style={styles.link}>Rancho del Arroyo</span>, <span style={styles.link}>Hirschfelden Hunting Reserve</span>, <span style={styles.link}>Cuatro Colinas Game Reserve</span>, <span style={styles.link}>New England Mountains</span>, <span style={styles.link}>Salzwiesen Park</span>, and <span style={styles.link}>Tòrr nan Sithean</span>.
            </p>
            <p style={{marginBottom:'20px'}}>
              With the release of Salzwiesen Park, the Ring-Necked Pheasant received a <span style={styles.link}>Great One</span> variant. It is currently the only bird species in game with this distinction.
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
                <li><a href="#features" onClick={(e)=>{e.preventDefault(); const el=document.getElementById('features'); if(el) el.scrollIntoView({behavior:'smooth', block:'start'});}} style={styles.link}>Features</a></li>
                <li><a href="#need-zones" onClick={(e)=>{e.preventDefault(); const el=document.getElementById('need-zones'); if(el) el.scrollIntoView({behavior:'smooth', block:'start'});}} style={styles.link}>Need Zone Times</a></li>
                <li><a href="#shot-scheme" onClick={(e)=>{e.preventDefault(); const el=document.getElementById('shot-scheme'); if(el) el.scrollIntoView({behavior:'smooth', block:'start'});}} style={styles.link}>Shot scheme</a></li>
                <li>
                  <a href="#plumage-variants" onClick={(e)=>{e.preventDefault(); const el=document.getElementById('plumage-variants'); if(el) el.scrollIntoView({behavior:'smooth', block:'start'});}} style={styles.link}>Plumage Variants</a>
                  <ul style={{listStyleType:'none', paddingLeft:'10px', margin:'5px 0'}}>
                      <li style={{color:'#6fb2e6'}}><a href="#plumage-male" onClick={(e)=>{e.preventDefault(); const el=document.getElementById('plumage-male'); if(el) el.scrollIntoView({behavior:'smooth', block:'start'});}} style={styles.link}>4.1. Male</a></li>
                      <li style={{color:'#6fb2e6'}}><a href="#plumage-female" onClick={(e)=>{e.preventDefault(); const el=document.getElementById('plumage-female'); if(el) el.scrollIntoView({behavior:'smooth', block:'start'});}} style={styles.link}>4.2. Female</a></li>
                  </ul>
                </li>
                <li><a href="#plumage-greatone" onClick={(e)=>{e.preventDefault(); const el=document.getElementById('plumage-greatone'); if(el) el.scrollIntoView({behavior:'smooth', block:'start'});}} style={styles.link}>Plumage Variants | Great One</a></li>
                <li><a href="#plumage-rarity" onClick={(e)=>{e.preventDefault(); const el=document.getElementById('plumage-rarity'); if(el) el.scrollIntoView({behavior:'smooth', block:'start'});}} style={styles.link}>Plumage Variant Rarity</a></li>
                <li><a href="#tips" onClick={(e)=>{e.preventDefault(); const el=document.getElementById('tips'); if(el) el.scrollIntoView({behavior:'smooth', block:'start'});}} style={styles.link}>Tips</a></li>
                <li><a href="#trivia" onClick={(e)=>{e.preventDefault(); const el=document.getElementById('trivia'); if(el) el.scrollIntoView({behavior:'smooth', block:'start'});}} style={styles.link}>Trivia</a></li>
                <li><a href="#references" onClick={(e)=>{e.preventDefault(); const el=document.getElementById('references'); if(el) el.scrollIntoView({behavior:'smooth', block:'start'});}} style={styles.link}>References</a></li>
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
                        <tr><th colSpan="2" style={{...styles.th, textAlign: 'center'}}>Hirschfelden & Askiy Ridge</th></tr>
                        <tr>
                            <th style={{...styles.th, backgroundColor: '#0f2e48'}}>Times</th>
                            <th style={{...styles.th, backgroundColor: '#0f2e48'}}>Activity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {needZonesData[0].schedule.map((zone, i) => (
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
            <div style={styles.shotContainer}>
              <div style={styles.shotImage}>
                <img src={RingNeckedPheasantShotScheme} alt="Shot Scheme" style={{maxWidth: '100%', maxHeight: '400px'}} />
              </div>
               <div style={styles.shotInfo}>
                  <strong>Color code</strong>
                  <div style={{marginTop: '20px'}}>
                     No Color - Every hit will kill the animal
                  </div>
               </div>
            </div>

            {/* PLUMAGE VARIANTS (Gallery) */}
            <h2 id="plumage-variants" style={styles.h2}>Plumage Variants</h2>
            
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

            {/* PLUMAGE VARIANTS | GREAT ONE (Added section) */}
            <h2 id="plumage-greatone" style={styles.h2}>Plumage Variants | Great One</h2>
            <div style={styles.galleryGrid}>
              {plumageGallery.greatOne.map((item, i) => (
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
                            Male
                        </td>
                        <td style={styles.td}>
                            White Brown (37.45%)<br/>
                            Brown (37.45%)<br/>
                            Molting (12.50%)<br/>
                            Grey (12.50%)
                        </td>
                        <td style={styles.td}>X</td>
                        <td style={styles.td}>X</td>
                        <td style={styles.td}>
                            Albino (0.03%)<br/>
                            Leucistic (0.03%)<br/>
                            Melanistic (0.03%)
                        </td>
                    </tr>
                    <tr>
                        <td style={{...styles.td, color: '#d63384', fontStyle: 'italic', fontWeight: 'bold'}}>
                            Female
                        </td>
                        <td style={styles.td}>
                            Brown (87.98%)<br/>
                            Grey (11.78%)
                        </td>
                        <td style={styles.td}>X</td>
                        <td style={styles.td}>X</td>
                        <td style={styles.td}>
                            Albino (0.08%)<br/>
                            Leucistic (0.08%)<br/>
                            Melanistic (0.08%)
                        </td>
                    </tr>
                </tbody>
            </table>

            {/* TIPS (Added section) */}
            <h2 id="tips" style={styles.h2}>Tips</h2>
            <p style={{marginBottom: '20px'}}>
               Must be shot in the air. Shooting pheasants on the ground or in the process of landing gives no integrity points and shows "grounded". The ethical way to kill them as mentioned by TreeKiwi (one of the developers) is to run toward them and <span style={styles.link}>whistle</span>. This will make them airborne/make them fly.
            </p>

            {/* TRIVIA */}
            <h2 id="trivia" style={styles.h2}>Trivia</h2>
            <ul style={{paddingLeft:'20px', marginBottom: '30px'}}>
              <li style={{marginBottom:'8px'}}>The Ring-Necked Pheasant was the first upland bird species added to game, and came with a distinct <i>grounded</i> mechanic. This mechanic punishes players for shooting the bird on the ground, resulting in a score of 0 every time. To prevent this, players must allow the Pheasant to fly into the air order to get full score.</li>
              <li style={{marginBottom:'8px'}}>The word <i>Pheasant</i> comes from the Greek word <i>phasianos</i> meaning <i>Phasian Bird</i>. The Phasis river at one point was thought to have once been full of Pheasants, and possibly would have been where Europeans first encountered the bird.</li>
              <li style={{marginBottom:'8px'}}>While the Ring-Necked Pheasant is a widespread game bird, it is thought to have originated from East Asia and spread westward over time. This is why a common name for the Ring-Necked Pheasant is the <i>Chinese Pheasant</i>.</li>
              <li style={{marginBottom:'8px'}}>It is the Official State Bird of South Dakota.</li>
              <li style={{marginBottom:'8px'}}>The Ring-Necked Pheasant is one of many species retroactively added to certain maps with the "Granite Update". Other species in this list include, the <span style={styles.link}>Canada Goose</span>, <span style={styles.link}>Merriam Turkey</span>, <span style={styles.link}>Gray Wolf</span>, <span style={styles.link}>Western Capercaillie</span>, <span style={styles.link}>Eurasian Wigeon</span>, <span style={styles.link}>Collared Peccary</span>, <span style={styles.link}>Mallard</span>, <span style={styles.link}>Pronghorn</span>, and the <span style={styles.link}>Green Winged Teal</span>. The Ring-Necked Pheasant was added to <span style={styles.link}>Hirschfelden</span> specifically.</li>
              <li style={{marginBottom:'8px'}}>With the release of <span style={styles.link}>Salzwiesen Park</span>, 8 <span style={styles.link}>Great One</span> variations were added.</li>
            </ul>

            {/* REFERENCES (Added section) */}
            <h2 id="references" style={styles.h2}>References</h2>
            <ol style={{fontSize: '0.9rem', paddingLeft: '20px'}}>
               {references.map((ref, idx) => (
                  <li key={idx} style={{marginBottom: '4px'}}>
                     <span style={styles.link}>{ref}</span>
                  </li>
               ))}
            </ol>

            <AnimalsTableMini />
          </main>
        </div>
      </div>
    </div>
  );
};

export default RingNeckedPheasant;