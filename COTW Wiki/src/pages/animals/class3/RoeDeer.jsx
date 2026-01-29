import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import DrinkingZoneIcon from '../../../assets/DrinkingZoneIcon.webp';
import class3Icon from '../../../assets/Class3Icon.webp'; // Class 3 for Roe Deer
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import RoeDeerMain from '../../../assets/RoeDeer.webp';
import ShotSchemeImage from '../../../assets/Roe_deer_shot_scheme.webp';

// Fur Variant Images (Placeholders)
import RoeDeer_AlbinoMaleRightSide from '../../../assets/RoeDeer_AlbinoMaleRightSide.webp';
import RoeDeer_BrownMaleRightSide from '../../../assets/RoeDeer_BrownMaleRightSide.webp';
import RoeDeer_DarkBrownMaleRightSide from '../../../assets/RoeDeer_DarkBrownMaleRightSide.webp';
import RoeDeer_DarkGreyMaleRightSide from '../../../assets/RoeDeer_DarkGreyMaleRightSide.webp';
import RoeDeer_LeucisticMaleRightSide from '../../../assets/RoeDeer_LeucisticMaleRightSide.webp';
import RoeDeer_MelanisticMaleRightSide from '../../../assets/RoeDeer_MelanisticMaleRightSide.webp';
import RoeDeer_PiebaldVariation2MaleLeftSide from '../../../assets/RoeDeer_PiebaldVariation2MaleLeftSide.webp';
import RoeDeer_PiebaldVariation2MaleRightSide from '../../../assets/RoeDeer_PiebaldVariation2MaleRightSide.webp';
import RoeDeer_PiebaldVariation1MaleLeftSide from '../../../assets/RoeDeer_PiebaldVariation1MaleLeftSide.webp';
import RoeDeer_PiebaldVariation1MaleRightSide from '../../../assets/RoeDeer_PiebaldVariation1MaleRightSide.webp';

import RoeDeer_TanFemaleRightSide from '../../../assets/RoeDeer_TanFemaleRightSide.webp';
import RoeDeer_OrangeFemaleRightSide from '../../../assets/RoeDeer_OrangeFemaleRightSide.webp';
import RoeDeer_AlbinoFemaleRightSide from '../../../assets/RoeDeer_AlbinoFemaleRightSide.webp';
import RoeDeer_BrownFemaleRightSide from '../../../assets/RoeDeer_BrownFemaleRightSide.webp';
import RoeDeer_LeucisticFemaleRightSide from '../../../assets/RoeDeer_LeucisticFemaleRightSide.webp';
import RoeDeer_MelanisticFemaleRightSide from '../../../assets/RoeDeer_MelanisticFemaleRightSide.webp';
import RoeDeer_PiebaldFemaleLeftSide from '../../../assets/RoeDeer_PiebaldFemaleLeftSide.webp';
import RoeDeer_PiebaldFemaleRightSide from '../../../assets/RoeDeer_PiebaldFemaleRightSide.webp';


const RoeDeer = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  const needZonesData = [
    {
      name: "Hirschfelden",
      schedule: [
        { time: "00:00 - 04:00", type: "Resting", icon: RestingZoneIcon },
        { time: "04:00 - 07:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "07:00 - 10:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "10:00 - 14:00", type: "Resting", icon: RestingZoneIcon },
        { time: "14:00 - 17:00", type: "Drinking", icon: DrinkingZoneIcon },
        { time: "17:00 - 20:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "20:00 - 00:00", type: "Resting", icon: RestingZoneIcon },
      ]
    }
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Skittish and vocal when alarmed" },
    { label: "Habitat", value: "Prefer a mix of forests and open fields" },
    { label: "Senses", value: "Very good hearing and sense of smell" },
    { label: "Social", value: "Typically stay in smaller groups" },
    { label: "Active", value: "During dawn and dusk" },
    { label: "Recommended Equipment", value: "Class 3 Ammo, Roe Deer Caller, Roe Deer Scent" },
    { label: "Species", value: "Capreolus capreolus", italic: true, isLink: true },
    { label: "Difficulty", value: "Easy" },
  ];

  // Fur Gallery Data split by sex
  const maleGallery = [
    { name: "Albino", src: RoeDeer_AlbinoMaleRightSide },
    { name: "Brown", src: RoeDeer_BrownMaleRightSide },
    { name: "Dark Brown", src: RoeDeer_DarkBrownMaleRightSide },
    { name: "Dark Grey", src: RoeDeer_DarkGreyMaleRightSide },
    { name: "Leucistic", src: RoeDeer_LeucisticMaleRightSide },
    { name: "Melanistic", src: RoeDeer_MelanisticMaleRightSide },
    { name: "Piebald Variation 1", src: RoeDeer_PiebaldVariation1MaleRightSide },
    { name: "Piebald Variation 1 ( Left )", src: RoeDeer_PiebaldVariation1MaleLeftSide },
    { name: "Piebald Variation 2", src: RoeDeer_PiebaldVariation2MaleRightSide },
    { name: "Piebald Variation 2 ( Left )", src: RoeDeer_PiebaldVariation2MaleLeftSide },
    
    
  ];

  const femaleGallery = [
    { name: "Tan", src: RoeDeer_TanFemaleRightSide },
    { name: "Orange", src: RoeDeer_OrangeFemaleRightSide },
    { name: "Albino", src: RoeDeer_AlbinoFemaleRightSide },
    { name: "Brown", src: RoeDeer_BrownFemaleRightSide },
    { name: "Leucistic", src: RoeDeer_LeucisticFemaleRightSide },
    { name: "Melanistic", src: RoeDeer_MelanisticFemaleRightSide },
    { name: "Piebald (Left)", src: RoeDeer_PiebaldFemaleLeftSide },
    { name: "Piebald (Right)", src: RoeDeer_PiebaldFemaleRightSide },
  ];

  // Trivia Data
  const triviaData = [
    "Part of the original cast of animals huntable at launch",
    "In French, they are known as \"Chevreuil\".",
    "Bambi was originally a Roe Deer. But Disney changed him to a Whitetail Deer because that species was more recognizable to Americans. The author Felix Salten was a hunter by the way.",
    "The scientific name for the Roe Deer (Capreolus capreolus) is together with the Red Fox (Vulpes vulpes), Fallow Deer (Dama dama), Harlequin Duck (Histrionicus histrionicus), American Buffalo (Bison bison bison), Axis Deer (Axis axis), Moose (Acles acles), Greylag Goose (Anser anser), Willow Ptarmigan (Lagolpus lagopus) and the Eurasian Lynx (Lynx lynx) a tautonym: a scientific name in which both parts of the name have the same spelling.",
    "Roe deer got a visual update on December 9, 2025 with the 8.4 patch and update. This is the first remodel of the animal and greatly improved it's appearance."
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

  return (
    <div style={styles.container}>
      <div style={styles.innerWrapper}>
        
        {/* PAGE HEADER */}
        <div style={styles.mainHeader}>
          <span>Roe Deer</span>
        </div>

        <div style={styles.layout}>
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside style={styles.sidebarColumn}>
            <div style={styles.sidebarHeader}>Roe Deer</div>
            <div style={styles.sidebarImage}>
              <img src={RoeDeerMain} alt="Roe Deer" style={{width:'100%', height: '100%', objectFit: 'cover'}} />
            </div>
            
            <div style={styles.sidebarHeader}>General Information</div>
            
            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Class</span>
              <span><img src={class3Icon} alt="Class 3" style={{width:'24px', height:'24px', verticalAlign: 'middle', marginRight: '6px'}}/>3</span>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Difficulty</span>
              <span>1: Trivial — 3: Very Easy</span>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Trophy Type</span>
              <span>Antlers</span>
              <div style={styles.trophyGrid}>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.silver}}>◆ Silver</span>
                  <span>41</span>
                </div>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.gold}}>☗ Gold</span>
                  <span>64.3</span>
                </div>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.diamond}}>☗ Diamond</span>
                  <span>81.8</span>
                </div>
              </div>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Weight</span>
              ? — 35kg<br/>
              <span style={{color: '#88a0b8', fontSize: '0.85rem'}}>? — 77lbs</span>
            </div>

            <div style={styles.sidebarSection}>
               <span style={styles.sidebarLabel}>Fur</span>
               <span style={{fontSize:'0.85rem'}}>
                 Albino, Brown, Dark Brown, Dark Grey, Leucistic, Melanistic, Orange, Piebald, Tan
               </span>
            </div>

            <div style={styles.sidebarHeader}>Locations</div>
            <div style={styles.sidebarSection}>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Hirschfelden Hunting Reserve</span></div>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Cuatro Colinas Game Reserve</span></div>
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Tòrr nan Sithean</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main style={styles.mainColumn}>

            {/* Quote Block */}
            <div style={styles.quoteBox}>
              "The roe deer, also called western or European roe deer, is a very common native inhabitant of the European continent. They can be found all over the area, except in the northernmost parts of Scandinavia. Roe deer are a smaller species of deer characterized by their reddish and grey-brown fur. They also make a distinct barking sound when alarmed. Bucks develop antlers up to 0.20 m to 0.30 m (7 - 12 in) in length that typically branch into two, three, or even four points. Roe deer are herbivores, and like to feed on grass and cultivated soil. While primarily a forest animal, they often wander out into fields and areas with more sparse vegetation."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p style={{marginBottom:'20px'}}>
              The <strong>Roe Deer</strong> is a <span style={styles.link}>class 3</span> deer which can be hunted in the <span style={styles.link}>Hirschfelden Hunting Reserve</span>, <span style={styles.link}>Cuatro Colinas Game Reserve</span> and <span style={styles.link}>Tòrr nan Sithean</span>.
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
                <li>Features</li>
                <li>Need Zone Times</li>
                <li>Shot scheme</li>
                <li>Fur Variants</li>
                <li>Fur Variant Rarity</li>
                <li>Trivia</li>
              </ol>
            </div>

            {/* FEATURES */}
            <h2 style={styles.h2}>Features</h2>
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
            <h2 style={styles.h2}>Need Zone Times</h2>
            <div style={{display:'inline-block'}}>
                <table style={{...styles.table, width: '300px'}}>
                    <thead>
                        <tr><th colSpan="2" style={{...styles.th, textAlign: 'center'}}>Hirschfelden</th></tr>
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
             <h2 style={styles.h2}>Shot scheme</h2>
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
            <h2 style={styles.h2}>Fur Variants</h2>

            <div style={{marginBottom: '10px', marginTop: '6px', color: '#6fb2e6', fontWeight: '600'}}>Male</div>
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

            <div style={{marginBottom: '10px', marginTop: '18px', color: '#6fb2e6', fontWeight: '600'}}>Female</div>
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
            <h2 style={styles.h2}>Fur Variant Rarity</h2>
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
                                Male
                            </td>
                            <td style={styles.td}>
                                Dark Grey (33.15%)<br/>
                                Dark Brown (33.15%)<br/>
                                Brown (33.15%)
                            </td>
                            <td style={styles.td}>X</td>
                            <td style={styles.td}>
                                Piebald Variation 1 (0.20%)<br/>
                                Piebald Variation 2 (0.20%)
                            </td>
                            <td style={styles.td}>
                                Albino (0.05%)<br/>
                                Leucistic (0.05%)<br/>
                                Melanistic (0.05%)
                            </td>
                        </tr>
                        <tr>
                            <td style={{...styles.td, color: '#d63384', fontStyle: 'italic', fontWeight: 'bold'}}>
                                Female
                            </td>
                            <td style={styles.td}>
                                Tan (33.20%)<br/>
                                Orange (33.20%)<br/>
                                Brown (33.20%)
                            </td>
                            <td style={styles.td}>X</td>
                            <td style={styles.td}>
                                Piebald (0.20%)
                            </td>
                            <td style={styles.td}>
                                Albino (0.05%)<br/>
                                Leucistic (0.05%)<br/>
                                Melanistic (0.05%)
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* TRIVIA */}
            <h2 style={styles.h2}>Trivia</h2>
            <ul style={{fontSize: '0.95rem', paddingLeft: '20px', listStyleType: 'disc', color: '#dbe4eb'}}>
                {triviaData.map((point, idx) => (
                    <li key={idx} style={{marginBottom: '10px'}}>{point}</li>
                ))}
            </ul>

            <div style={{marginTop: '40px'}}>
                <AnimalsTableMini />
            </div>
            
          </main>
        </div>
      </div>
    </div>
  );
};

export default RoeDeer;