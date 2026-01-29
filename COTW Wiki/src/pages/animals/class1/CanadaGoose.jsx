import React from 'react';
import AnimalsTableMini from '../../../components/AnimalsTableMini';
import CanadaGooseXRay from '../../../assets/Canada_Goose_shot_scheme.webp';
import CanadaGoose from '../../../assets/CanadaGoose.webp';
import CanadaGooseIcon from '../../../assets/CanadaGooseIcon.webp';
import CanadaGooseAlbinoBack from '../../../assets/CanadaGoose_AlbinoBack.webp';
import CanadaGooseAlbinoFront from '../../../assets/CanadaGoose_AlbinoFront.webp';
import CanadaGooseBrownHybridBack from '../../../assets/CanadaGoose_BrownHybridBack.webp';
import CanadaGooseBrownHybridFront from '../../../assets/CanadaGoose_BrownHybridFront.webp';
import CanadaGooseGreyBack from '../../../assets/CanadaGoose_GreyBack.webp';
import CanadaGooseGreyBrownBack from '../../../assets/CanadaGoose_GreyBrownBack.webp';
import CanadaGooseGreyBrownFront from '../../../assets/CanadaGoose_GreyBrownFront.webp';
import CanadaGooseGreyFront from '../../../assets/CanadaGoose_GreyFront.webp';
import CanadaGooseLightGreyLeucisticBack from '../../../assets/CanadaGoose_LightGreyLeucisticBack.webp';
import CanadaGooseLightGreyLeucisticFront from '../../../assets/CanadaGoose_LightGreyLeucisticFront.webp';
import CanadaGooseMelanisticBack from '../../../assets/CanadaGoose_MelanisticBack.webp';
import CanadaGooseMelanisticFront from '../../../assets/CanadaGoose_MelanisticFront.webp';
import CanadaGooseWhiteHybridBack from '../../../assets/CanadaGoose_WhiteHybridBack.webp';
import CanadaGooseWhiteHybridFront from '../../../assets/CanadaGoose_WhiteHybridFront.webp';
import CanadaGooseNeedZoneHirschfelden from '../../../assets/Canada_Goose_Need_Zone_Hirschfelden.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp'; 
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import class1Icon from '../../../assets/Class1Icon.webp';

const CanadaGoosePage = () => {

  // --- DATA ---
  
  const needZones = [
    { time: "00:00 - 05:00", type: "Resting", icon: <img src={RestingZoneIcon} alt="Resting" style={{width: '30px', height: '30px', verticalAlign: 'middle', marginRight: '8px'}} /> },
    { time: "05:00 - 07:00", type: "Feeding", icon: <img src={FeedingZoneIcon} alt="Feeding" style={{width: '30px', height: '30px', verticalAlign: 'middle', marginRight: '8px'}} /> },
    { time: "07:00 - 09:00", type: "Resting", icon: <img src={RestingZoneIcon} alt="Resting" style={{width: '30px', height: '30px', verticalAlign: 'middle', marginRight: '8px'}} /> },
    { time: "09:00 - 11:00", type: "Feeding", icon: <img src={FeedingZoneIcon} alt="Feeding" style={{width: '30px', height: '30px', verticalAlign: 'middle', marginRight: '8px'}} /> },
    { time: "11:00 - 13:00", type: "Resting", icon: <img src={RestingZoneIcon} alt="Resting" style={{width: '30px', height: '30px', verticalAlign: 'middle', marginRight: '8px'}} /> },
    { time: "13:00 - 15:00", type: "Feeding", icon: <img src={FeedingZoneIcon} alt="Feeding" style={{width: '30px', height: '30px', verticalAlign: 'middle', marginRight: '8px'}} /> },
    { time: "15:00 - 17:00", type: "Resting", icon: <img src={RestingZoneIcon} alt="Resting" style={{width: '30px', height: '30px', verticalAlign: 'middle', marginRight: '8px'}} /> },
    { time: "17:00 - 19:00", type: "Feeding", icon: <img src={FeedingZoneIcon} alt="Feeding" style={{width: '30px', height: '30px', verticalAlign: 'middle', marginRight: '8px'}} /> },
    { time: "19:00 - 00:00", type: "Resting", icon: <img src={RestingZoneIcon} alt="Resting" style={{width: '30px', height: '30px', verticalAlign: 'middle', marginRight: '8px'}} /> },
  ];

  const features = [
    { label: "Behavior", value: "Easily agitated and generally vocal" },
    { label: "Habitat", value: "Grassy fields, pastures and agricultural fields" },
    { label: "Senses", value: "Very good hearing and vision, poor sense of smell" },
    { label: "Social", value: "Highly social throughout the year. During nesting season they form monogamous lifelong pairings" },
    { label: "Active", value: "From dawn to early evening" },
    { label: "Recommended Equipment", value: "Class 1 Ammo, Short Reed Canada Goose Caller, Canada Goose Decoys" },
    { label: "Species", value: "Branta canadensis", italic: true },
    { label: "Difficulty", value: "Easy" },
  ];

  const rarities = {
    common: ["Grey Brown (74.90%)", "Grey (25.00%)"],
    veryRare: [
      "Albino (0.02%)", 
      "Brown Hybrid (0.02%)", 
      "Light Grey Leucistic (0.02%)", 
      "Melanistic (0.02%)", 
      "White Hybrid (0.02%)"
    ]
  };

  // --- STYLES ---
  const styles = {
    page: {
      backgroundColor: '#0b1a26',
      color: '#dbe4eb',
      fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      padding: '20px',
      lineHeight: '1.6',
      maxWidth: '100%',
      margin: '0 auto',
    },
    // Layout Grid for InfoBox vs Main Content
    layout: {
      display: 'flex',
      flexDirection: 'row-reverse', // Put sidebar on right
      gap: '30px',
      alignItems: 'flex-start',
    },
    mainContent: {
      flex: 1,
    },
    // Sidebar / Infobox Styles
    infobox: {
      width: '300px',
      backgroundColor: '#0f2e48',
      border: '1px solid #1f405a',
      borderRadius: '4px',
      overflow: 'hidden',
      flexShrink: 0,
    },
    infoboxHeader: {
      backgroundColor: '#05121c',
      padding: '10px',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: '1.2em',
      borderBottom: '2px solid #cfaa3e', // Gold line
    },
    infoboxImagePlaceholder: {
      width: '100%',
      height: '180px',
      backgroundColor: '#2a4b63',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#8bbce3',
      fontStyle: 'italic',
    },
    infoboxSection: {
      padding: '5px 10px',
      borderBottom: '1px solid #1f405a',
      fontSize: '0.9em',
    },
    infoboxLabel: {
      fontWeight: 'bold',
      display: 'block',
      color: '#a4cce8',
      marginBottom: '4px',
    },
    trophyGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: '5px',
      textAlign: 'center',
      marginTop: '5px',
    },
    trophyBox: {
      backgroundColor: '#16334a',
      padding: '5px',
      borderRadius: '3px',
    },
    trophyLabel: {
      fontSize: '0.8em',
      display: 'block',
      fontWeight: 'bold',
    },
    trophyVal: {
      fontSize: '1em',
    },
    
    // Main Content Styles
    h1: {
      fontSize: '2.5em',
      borderBottom: '1px solid #3a5a75',
      paddingBottom: '10px',
      marginBottom: '20px',
      fontWeight: 'normal',
    },
    h2: {
      color: '#6fb2e6',
      borderBottom: '1px solid #3a5a75',
      paddingBottom: '5px',
      marginTop: '30px',
      display: 'flex',
      alignItems: 'center',
    },
    quote: {
      fontStyle: 'italic',
      borderLeft: '4px solid #3a5a75',
      paddingLeft: '15px',
      margin: '20px 0',
      color: '#a4cce8',
    },
    link: {
      color: '#6fb2e6',
      textDecoration: 'none',
    },
    
    // Tables
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      marginTop: '10px',
      backgroundColor: '#0f2e48',
      fontSize: '0.95em',
    },
    th: {
      backgroundColor: '#164060',
      padding: '10px',
      textAlign: 'left',
      borderBottom: '2px solid #3a5a75',
      color: '#fff',
    },
    td: {
      padding: '10px',
      borderBottom: '1px solid #2a4b63',
    },
    
    // Rarity Colors
    textCommon: { color: '#2ecc71', fontWeight: 'bold' },
    textRare: { color: '#9b59b6', fontWeight: 'bold' },
    textVeryRare: { color: '#e74c3c', fontWeight: 'bold' },
    textUncommon: { color: '#3498db', fontWeight: 'bold' },

    // Shot Scheme
    shotContainer: {
        display: 'flex',
        backgroundColor: '#112233',
        marginTop: '10px'
    },
    shotImage: {
        flex: 2,
        height: '200px',
        backgroundColor: '#000', // X-ray background
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        color: '#555'
    },
    shotInfo: {
        flex: 1,
        padding: '20px',
        display: 'flex',
        alignItems: 'center',
    }
  };

  return (
    <div style={styles.page}>
      
      {/* Title */}
      <h1 style={styles.h1}>Canada Goose</h1>

      <div style={styles.layout}>
        
        {/* --- RIGHT SIDEBAR (INFOBOX) --- */}
        <div style={styles.infobox}>
          <div style={styles.infoboxHeader}>Canada Goose</div>
          <div style={styles.infoboxImagePlaceholder}>
            <img src={CanadaGoose} alt="Canada Goose" style={{width: '268.4px', height: '134.2px', objectFit: 'cover', borderRadius: '4px'}} />
          </div>
          
          <div style={styles.infoboxHeader}>General Information</div>
          
          <div style={styles.infoboxSection}>
            <span style={styles.infoboxLabel}>Class</span>
            <span><img src={class1Icon} alt="Class 1" style={{width: '15px', height: '15px', verticalAlign: 'middle', marginRight: '6px'}} />1</span>
          </div>

          <div style={styles.infoboxSection}>
            <span style={styles.infoboxLabel}>Difficulty</span>
            <span>1: Trivial — 5: Medium</span>
          </div>

          <div style={styles.infoboxSection}>
            <span style={styles.infoboxLabel}>Trophy Type</span>
            <span>Weight</span>
            <div style={styles.trophyGrid}>
              <div style={styles.trophyBox}>
                 <span style={{...styles.trophyLabel, color: '#bdc3c7'}}>◆ Silver</span>
                 <span style={styles.trophyVal}>4.40</span>
              </div>
              <div style={styles.trophyBox}>
                 <span style={{...styles.trophyLabel, color: '#f1c40f'}}>☗ Gold</span>
                 <span style={styles.trophyVal}>6.80</span>
              </div>
              <div style={styles.trophyBox}>
                 <span style={{...styles.trophyLabel, color: '#3498db'}}>☗ Diamond</span>
                 <span style={styles.trophyVal}>8.59</span>
              </div>
            </div>
          </div>

          <div style={styles.infoboxSection}>
             <span style={styles.infoboxLabel}>Weight</span>
             3.2kg — 9.2kg<br/>
             7lbs — 20lbs
          </div>

          <div style={styles.infoboxSection}>
             <span style={styles.infoboxLabel}>Plumage</span>
             <small>Albino, Brown Hybrid, Grey, Grey Brown, Light Grey Leucistic, Melanistic, White Hybrid</small>
          </div>

          <div style={styles.infoboxHeader}>Locations</div>
          <div style={styles.infoboxSection}>
             <div style={{marginBottom:'4px'}}><a href="#" style={styles.link}>Hirschfelden Hunting Reserve</a></div>
             <div style={{marginBottom:'4px'}}><a href="#" style={styles.link}>Revontuli Coast</a></div>
             <div style={{marginBottom:'4px'}}><a href="#" style={styles.link}>Yukon Valley</a></div>
             <div style={{marginBottom:'4px'}}><a href="#" style={styles.link}>Askiy Ridge Hunting Preserve</a></div>
          </div>

        </div>


        {/* --- MAIN CONTENT LEFT --- */}
        <div style={styles.mainContent}>

          {/* Description Quote */}
          <blockquote style={styles.quote}>
            "The Canada goose is a large goose species and is one of the most popular geese to hunt in Europe. Their distinct white "chinstrap" helps distinguish the Canada goose from other geese. Adaptable and widespread, they occupy an extensive range of habitats including tundra, prairie lands, and mountainous fields. Canada geese are monogamous with lifelong pairs formed early in their lives. For many regions, loud calls from migrating Canada geese flying in V-shaped formation signal the change into spring and autumn."
            <br/><br/>
            — In-Game Description
          </blockquote>

          <p>
            The <b>Canada Goose</b> is a <a href="#" style={styles.link}>class 1</a> animal that can be hunted on <a href="#" style={styles.link}>Hirschfelden Hunting Reserve</a>, <a href="#" style={styles.link}>Revontuli Coast</a>, <a href="#" style={styles.link}>Yukon Valley</a>, and <a href="#" style={styles.link}>Askiy Ridge Hunting Reserve</a>. It was released as free <a href="#" style={styles.link}>DLC</a>, and was the first bird species to become huntable in game.
          </p>

            {/* Table of Contents (page-specific) */}
            {(() => {
              const tocItems = [
                { id: 'features', label: 'Features' },
                { id: 'tips', label: 'Tips' },
                { id: 'need-zones', label: 'Need Zone Times' },
                { id: 'shot-scheme', label: 'Shot scheme' },
                { id: 'plumage-rarity', label: 'Plumage Variant Rarity' },
                { id: 'plumage-variants', label: 'Plumage Variants'},
                { id: 'trivia', label: 'Trivia' },
                { id: 'references', label: 'References' },
              ];

              const LocalTOC = ({ items }) => {
                const stylesTOC = {
                  container: { backgroundColor: '#0b1e3b', border: '1px solid #3a5a75', borderRadius: '4px', color: '#fff', width: '280px', fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif', fontSize: '14px', marginTop: '20px', boxShadow: '0 4px 6px rgba(0,0,0,0.3)' },
                  header: { padding: '8px 12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #3a5a75' },
                  title: { fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px', color: '#fff' },
                  list: { margin: 0, padding: '10px 15px 10px 20px', listStyleType: 'none' },
                  listItem: { marginBottom: '6px', cursor: 'pointer', display: 'block' },
                  number: { color: '#fff', marginRight: '8px', fontWeight: '700' },
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
                      {items.map((it, idx) => (
                        <li key={it.id} style={stylesTOC.listItem}>
                          <div onClick={() => scrollTo(it.id)} style={{display: 'flex', alignItems: 'center'}}>
                            <span style={stylesTOC.number}>{`${idx + 1}.`}</span>
                            <span style={stylesTOC.linkText}>{it.label}</span>
                          </div>

                          {it.children && (
                            <ol style={{ listStyleType: 'none', marginTop: '6px', marginLeft: '22px', paddingLeft: 0 }}>
                              {it.children.map((c, cidx) => (
                                <li key={c.id} style={{marginBottom: '4px'}}>
                                  <div onClick={() => scrollTo(c.id)} style={{display: 'flex', alignItems: 'center'}}>
                                    <span style={stylesTOC.number}>{`${idx + 1}.${cidx + 1}`}</span>
                                    <span style={stylesTOC.linkText}>{c.label}</span>
                                  </div>
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

          {/* Features Table */}
          <h2 id="features" style={styles.h2}>Features</h2>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={{...styles.th, width: '30%'}}></th>
                <th style={styles.th}>Description</th>
              </tr>
            </thead>
            <tbody>
              {features.map((item, index) => (
                <tr key={index}>
                  <td style={{...styles.td, fontWeight: 'bold'}}>{item.label}</td>
                  <td style={{...styles.td, fontStyle: item.italic ? 'italic' : 'normal'}}>{item.value}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Tips Section */}
          <h2 id="tips" style={styles.h2}>Tips</h2>
          <p>
            In TheHunter: Call of The Wild, hunting <b>Canada Goose</b> is similar to hunting other waterfowl; the added benefit being that one can hunt them in open fields. Both <a href="#" style={styles.link}>Hirschfelden</a> and <a href="#" style={styles.link}>Revontuli Coast</a> are ideal maps for hunting these birds. The <a href="#" style={styles.link}>Hirschfelden</a> reserve is by far the best map to hunt them on because of its large open fields in which most of their need zones appear.
          </p>

          {/* Need Zones Table */}
          <h2 id="need-zones" style={styles.h2}>Need Zone Times</h2>
          <table style={{...styles.table, width: '400px'}}>
             <thead>
               <tr><th colSpan="2" style={{...styles.th, textAlign: 'center'}}>Hirschfelden [1]</th></tr>
               <tr>
                 <th style={{...styles.th, backgroundColor: '#0f2e48'}}>Times</th>
                 <th style={{...styles.th, backgroundColor: '#0f2e48'}}>Activity</th>
               </tr>
             </thead>
             <tbody>
               {needZones.map((zone, i) => (
                 <tr key={i}>
                   <td style={styles.td}>{zone.time}</td>
                   <td style={styles.td}>
                      {zone.icon} {zone.type}
                   </td>
                 </tr>
               ))}
             </tbody>
          </table>
          <p style={{fontSize:'0.8em', marginTop:'5px'}}>* Times are subject to change based on need zone discoveries.</p>

          {/* Shot Scheme */}
          <h2 id="shot-scheme" style={styles.h2}>Shot scheme</h2>
            <div style={styles.table}>
            <div style={styles.th}>Color code</div>
            <div style={styles.shotContainer}>
              <div style={{...styles.shotImage, width: '500px', height: '444px', minWidth: '500px', minHeight: '444px', maxWidth: '500px', maxHeight: '444px', padding: 0, backgroundColor: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <img src={CanadaGooseXRay} alt="Canada Goose X-Ray" style={{width: '500px', height: '444px', objectFit: 'cover', borderRadius: '4px'}} />
              </div>
              <div style={styles.shotInfo}>
                No Color - Every hit will kill the animal
              </div>
            </div>
            </div>

          {/* Plumage Variant Rarity */}
          <h2 id="plumage-rarity" style={styles.h2}>Plumage Variant Rarity</h2>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Sex</th>
                <th style={styles.th}><span style={styles.textCommon}>Common</span></th>
                <th style={styles.th}><span style={styles.textUncommon}>Uncommon</span></th>
                <th style={styles.th}><span style={styles.textRare}>Rare</span></th>
                <th style={styles.th}><span style={styles.textVeryRare}>Very Rare</span></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{...styles.td, color: '#9b59b6', fontStyle: 'italic'}}>Male/Female</td>
                <td style={styles.td}>
                  {rarities.common.map(r => <div key={r}>{r}</div>)}
                </td>
                <td style={styles.td}>X</td>
                <td style={styles.td}>X</td>
                <td style={styles.td}>
                  {rarities.veryRare.map(r => <div key={r}>{r}</div>)}
                </td>
              </tr>
            </tbody>
          </table>

          {/* Plumage Gallery Placeholders */}
           <h2 id="plumage-variants" style={styles.h2}>Plumage Variants</h2>
           <div style={{display:'flex', flexWrap:'wrap', gap:'10px'}}>
              <div style={{width:'146px', textAlign:'center'}}>
                <img src={CanadaGooseGreyBrownFront} alt="Grey Brown" style={{width:'146px', height:'165px', objectFit:'cover', borderRadius:'4px', marginBottom:'5px'}} />
                <span style={{fontSize:'0.9em'}}>Grey Brown</span>
              </div>
              <div style={{width:'146px', textAlign:'center'}}>
                <img src={CanadaGooseLightGreyLeucisticFront} alt="Light Grey Leucistic" style={{width:'146px', height:'165px', objectFit:'cover', borderRadius:'4px', marginBottom:'5px'}} />
                <span style={{fontSize:'0.9em'}}>Light Grey Leucistic</span>
              </div>
              <div style={{width:'146px', textAlign:'center'}}>
                <img src={CanadaGooseMelanisticFront} alt="Melanistic" style={{width:'146px', height:'165px', objectFit:'cover', borderRadius:'4px', marginBottom:'5px'}} />
                <span style={{fontSize:'0.9em'}}>Melanistic</span>
              </div>
              <div style={{width:'146px', textAlign:'center'}}>
                <img src={CanadaGooseAlbinoFront} alt="Albino" style={{width:'146px', height:'165px', objectFit:'cover', borderRadius:'4px', marginBottom:'5px'}} />
                <span style={{fontSize:'0.9em'}}>Albino</span>
              </div>
              <div style={{width:'146px', textAlign:'center'}}>
                <img src={CanadaGooseBrownHybridFront} alt="Brown Hybrid" style={{width:'146px', height:'165px', objectFit:'cover', borderRadius:'4px', marginBottom:'5px'}} />
                <span style={{fontSize:'0.9em'}}>Brown Hybrid</span>
              </div>
              <div style={{width:'146px', textAlign:'center'}}>
                <img src={CanadaGooseGreyFront} alt="Grey" style={{width:'146px', height:'165px', objectFit:'cover', borderRadius:'4px', marginBottom:'5px'}} />
                <span style={{fontSize:'0.9em'}}>Grey</span>
              </div>
              <div style={{width:'146px', textAlign:'center'}}>
                <img src={CanadaGooseWhiteHybridFront} alt="White Hybrid" style={{width:'146px', height:'165px', objectFit:'cover', borderRadius:'4px', marginBottom:'5px'}} />
                <span style={{fontSize:'0.9em'}}>White Hybrid</span>
              </div>
           </div>

           {/* Back-view variants row */}
           <div style={{display:'flex', flexWrap:'wrap', gap:'10px', marginTop: '8px'}}>
              <div style={{width:'146px', textAlign:'center'}}>
                <img src={CanadaGooseGreyBrownBack} alt="Grey Brown (Back)" style={{width:'146px', height:'165px', objectFit:'cover', borderRadius:'4px', marginBottom:'5px'}} />
                <span style={{fontSize:'0.9em'}}>Grey Brown (Back)</span>
              </div>
              <div style={{width:'146px', textAlign:'center'}}>
                <img src={CanadaGooseLightGreyLeucisticBack} alt="Light Grey Leucistic (Back)" style={{width:'146px', height:'165px', objectFit:'cover', borderRadius:'4px', marginBottom:'5px'}} />
                <span style={{fontSize:'0.9em'}}>Light Grey Leucistic (Back)</span>
              </div>
              <div style={{width:'146px', textAlign:'center'}}>
                <img src={CanadaGooseMelanisticBack} alt="Melanistic (Back)" style={{width:'146px', height:'165px', objectFit:'cover', borderRadius:'4px', marginBottom:'5px'}} />
                <span style={{fontSize:'0.9em'}}>Melanistic (Back)</span>
              </div>
              <div style={{width:'146px', textAlign:'center'}}>
                <img src={CanadaGooseAlbinoBack} alt="Albino (Back)" style={{width:'146px', height:'165px', objectFit:'cover', borderRadius:'4px', marginBottom:'5px'}} />
                <span style={{fontSize:'0.9em'}}>Albino (Back)</span>
              </div>
              <div style={{width:'146px', textAlign:'center'}}>
                <img src={CanadaGooseBrownHybridBack} alt="Brown Hybrid (Back)" style={{width:'146px', height:'165px', objectFit:'cover', borderRadius:'4px', marginBottom:'5px'}} />
                <span style={{fontSize:'0.9em'}}>Brown Hybrid (Back)</span>
              </div>
              <div style={{width:'146px', textAlign:'center'}}>
                <img src={CanadaGooseGreyBack} alt="Grey (Back)" style={{width:'146px', height:'165px', objectFit:'cover', borderRadius:'4px', marginBottom:'5px'}} />
                <span style={{fontSize:'0.9em'}}>Grey (Back)</span>
              </div>
              <div style={{width:'146px', textAlign:'center'}}>
                <img src={CanadaGooseWhiteHybridBack} alt="White Hybrid (Back)" style={{width:'146px', height:'165px', objectFit:'cover', borderRadius:'4px', marginBottom:'5px'}} />
                <span style={{fontSize:'0.9em'}}>White Hybrid (Back)</span>
              </div>
           </div>

           {/* Trivia */}
           <h2 id="trivia" style={styles.h2}>Trivia</h2>
           <ul>
             <li>The Canada Goose was the first bird species added to the game.</li>
             <li>It was released as a free DLC for all players.</li>
             <li>In the early 1900s, the Canada Goose nearly went extinct due to hunting. Today, the population recovered to more than 5 million individuals.[2]</li>
           </ul>

           {/* References */}
           <h2 id="references" style={styles.h2}>References</h2>
           <ol style={{paddingLeft:'20px', color:'#6fb2e6'}}>
               <li><a href="#" style={styles.link}>Canada Goose Need Zones, Hirschfelden</a></li>
               <li><a href="#" style={styles.link}>audubon.org</a></li>
           </ol>

        </div>
      </div>
      <AnimalsTableMini />
    </div>
  );
};

export default CanadaGoosePage;