import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import class1Icon from '../../../assets/Class1Icon.webp';
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import RedGrouseMain from '../../../assets/RedGrouse.webp';

// Shot Scheme (Using placeholder based on previous patterns or generic if not provided, assuming generic bird X-ray)

// Male Plumage Images
import RedGrouse_AlbinoMaleFront from '../../../assets/RedGrouse_AlbinoMaleFront.webp';
import RedGrouse_AlbinoMaleBack from '../../../assets/RedGrouse_AlbinoMaleBack.webp';
import RedGrouse_DarkRedMaleFront from '../../../assets/RedGrouse_DarkRedMaleFront.webp';
import RedGrouse_DarkRedMaleBack from '../../../assets/RedGrouse_DarkRedMaleBack.webp';
import RedGrouse_RedMaleFront from '../../../assets/RedGrouse_RedMaleFront.webp';
import RedGrouse_RedMaleBack from '../../../assets/RedGrouse_RedMaleBack.webp';
import RedGrouse_MelanisticMaleFront from '../../../assets/RedGrouse_MelanisticMaleFront.webp';
import RedGrouse_MelanisticMaleBack from '../../../assets/RedGrouse_MelanisticMaleBack.webp';

// Female Plumage Images
import RedGrouse_BrownFemaleFront from '../../../assets/RedGrouse_BrownFemaleFront.webp';
import RedGrouse_BrownFemaleBack from '../../../assets/RedGrouse_BrownFemaleBack.webp';
import RedGrouse_LeucisticFemaleFront from '../../../assets/RedGrouse_LeucisticFemaleFront.webp';
import RedGrouse_LeucisticFemaleBack from '../../../assets/RedGrouse_LeucisticFemaleBack.webp';
import RedGrouse_LightBrownFemaleFront from '../../../assets/RedGrouse_LightBrownFemaleFront.webp';
import RedGrouse_LightBrownFemaleBack from '../../../assets/RedGrouse_LightBrownFemaleBack.webp';
import RedGrouse_PiebaldFemaleFront from '../../../assets/RedGrouse_PiebaldFemaleFront.webp';
import RedGrouse_PiebaldFemaleBack from '../../../assets/RedGrouse_PiebaldFemaleBack.webp';


const RedGrouse = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  const needZones = [
    { time: "04:00 - 08:00", type: "Feeding", icon: FeedingZoneIcon },
    { time: "08:00 - 11:00", type: "Feeding", icon: FeedingZoneIcon },
    { time: "11:00 - 14:00", type: "Resting", icon: RestingZoneIcon },
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Generally wary and secretive, relying on camouflage and stillness to avoid predators" },
    { label: "Habitat", value: "Thrives in heather moorland, upland terrain, and open, expansive land, where it finds both food and cover in the dense vegetation" },
    { label: "Senses", value: "Excellent vision, acute sense of hearing and poor sense of smell" },
    { label: "Social", value: "Typically solitary and found in small family groups" },
    { label: "Active", value: "Active during the day, particularly in the early morning and late evening hours" },
    { label: "Recommended Equipment", value: "Class 1 Ammo" },
    { label: "Species", value: "Lagopus scotica", italic: true, isLink: true },
    { label: "Difficulty", value: "Easy" },
  ];

  // Plumage Gallery Data
  const plumageGallery = {
    male: [
      { name: "Albino - Front", src: RedGrouse_AlbinoMaleFront },
      { name: "Albino - Back", src: RedGrouse_AlbinoMaleBack },
      { name: "Dark Red - Front", src: RedGrouse_DarkRedMaleFront },
      { name: "Dark Red - Back", src: RedGrouse_DarkRedMaleBack },
      { name: "Red - Front", src: RedGrouse_RedMaleFront },
      { name: "Red - Back", src: RedGrouse_RedMaleBack },
      { name: "Melanistic - Front", src: RedGrouse_MelanisticMaleFront },
      { name: "Melanistic - Back", src: RedGrouse_MelanisticMaleBack },
    ],
    female: [
      { name: "Brown - Front", src: RedGrouse_BrownFemaleFront },
      { name: "Brown - Back", src: RedGrouse_BrownFemaleBack },
      { name: "Leucistic - Front", src: RedGrouse_LeucisticFemaleFront },
      { name: "Leucistic - Back", src: RedGrouse_LeucisticFemaleBack },
      { name: "Light Brown - Front", src: RedGrouse_LightBrownFemaleFront },
      { name: "Light Brown - Back", src: RedGrouse_LightBrownFemaleBack },
      { name: "Piebald - Front", src: RedGrouse_PiebaldFemaleFront },
      { name: "Piebald - Back", src: RedGrouse_PiebaldFemaleBack },
    ]
  };

  return (
    <div className="wiki-page">
      <div className="wiki-inner">
        
        {/* PAGE HEADER */}
        <div className="wiki-header">
          <span>Red Grouse</span>
          <div className="wiki-edit-actions">
          </div>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Red Grouse</div>
            <div className="wiki-sidebar-image">
              <img src={RedGrouseMain} alt="Red Grouse" />
            </div>
            
            <div className="wiki-sidebar-header">General Information</div>
            
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Class</span>
              <span><img src={class1Icon} alt="Class 1" className="wiki-class-icon"/>1</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Difficulty</span>
              <span>1: Trivial — 3: Very Easy</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Trophy Type</span>
              <span>weight</span>
              <div className="wiki-trophy-grid">
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-silver">◆ Silver</span>
                  <span>57</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-gold">☗ Gold</span>
                  <span>66</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-diamond">☗ Diamond</span>
                  <span>72.75</span>
                </div>
              </div>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Weight</span>
              ? — 0.64kg<br/>
              ? — 1lbs
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Plumage</span>
               <span className="wiki-fs-sm">
                  Albino, Brown, Dark Red, Leucistic, Light Brown, Melanistic, Piebald, Red
               </span>
            </div>

            <div className="wiki-sidebar-header">Locations</div>
            <div className="wiki-sidebar-section">
               <div className="wiki-mb-4"><span className="wiki-link">Tòrr nan Sithean</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main className="wiki-main">

            {/* Quote Block */}
            <div className="wiki-quote">
              "The Red Grouse (Lagopus scotica) is a ground-dwelling bord native to the heather moorlands of the British Isles. It is reddish-brown year-round. Males are slightly brighter in color and have distinctive red eyebow-like wattles, called eye combs, which become more prominent during the breeding season. Females are more mottled and duller in tone, providing better camouflage while nesting. This bird is territorial, especially during breeding season, and typically stays within a small area. It feeds mainly on heather and relies on moorland habitats for food, nesting, and cover. The Red Grouse is often found on moorlands that are managed to suppoort its population, especially for traditional shooting practices."
              <br/><br/>
              ― In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-p-mb">
              The <strong>Red Grouse</strong> is a species introduced in the <span className="wiki-link">Tòrr nan Sithean</span> reserve located in Scotland.
            </p>

            {/* Table of Contents Placeholder */}
            <div className="wiki-toc">
              <div className="wiki-toc-title">
                🔢 Contents <span className="wiki-toc-toggle">[hide]</span>
              </div>
              <ol className="wiki-toc">
                <li>
                  <a href="#features" className="wiki-link" onClick={(e)=>{e.preventDefault(); document.getElementById('features')?.scrollIntoView({behavior:'smooth', block:'start'});}}>Features</a>
                </li>
                <li>
                  <a href="#need-zone-times" className="wiki-link" onClick={(e)=>{e.preventDefault(); document.getElementById('need-zone-times')?.scrollIntoView({behavior:'smooth', block:'start'});}}>Need Zone Times</a>
                </li>
                <li>
                  <a href="#plumage-variants" className="wiki-link" onClick={(e)=>{e.preventDefault(); document.getElementById('plumage-variants')?.scrollIntoView({behavior:'smooth', block:'start'});}}>Plumage Variants</a>
                  <ul >
                      <li style={{color:'#6fb2e6'}}><a href="#plumage-male" className="wiki-link" onClick={(e)=>{e.preventDefault(); document.getElementById('plumage-male')?.scrollIntoView({behavior:'smooth', block:'start'});}}>3.1. Male</a></li>
                      <li style={{color:'#6fb2e6'}}><a href="#plumage-female" className="wiki-link" onClick={(e)=>{e.preventDefault(); document.getElementById('plumage-female')?.scrollIntoView({behavior:'smooth', block:'start'});}}>3.2. Female</a></li>
                  </ul>
                </li>
                <li>
                  <a href="#plumage-rarity" className="wiki-link" onClick={(e)=>{e.preventDefault(); document.getElementById('plumage-rarity')?.scrollIntoView({behavior:'smooth', block:'start'});}}>Plumage Variant Rarity</a>
                </li>
              </ol>
            </div>

            {/* FEATURES */}
            <h2 id="features" className="wiki-h2">Features</h2>
            <table className="wiki-table">
              <tbody>
                <tr>
                    <th className="wiki-th wiki-th-w25"></th>
                    <th className="wiki-th">Description</th>
                </tr>
                {features.map((item, index) => (
                  <tr key={index}>
                    <td className="wiki-td wiki-td-bold">{item.label}</td>
                    <td className={`wiki-td ${item.italic ? 'wiki-td-italic' : ''}`}>
                        <span dangerouslySetInnerHTML={{ __html: item.value }} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
           
            {/* NEED ZONE TIMES */}
            <h2 id="need-zone-times" className="wiki-h2">Need Zone Times</h2>
            <div className="wiki-inline-block">
                <table className="wiki-table wiki-table-fixed">
                    <thead>
                        <tr><th colSpan="2" className="wiki-th wiki-th-center">Tòrr nan Sithean</th></tr>
                        <tr>
                            <th className="wiki-th wiki-th-alt">Times</th>
                            <th className="wiki-th wiki-th-alt">Activity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {needZones.map((zone, i) => (
                        <tr key={i}>
                            <td className="wiki-td">{zone.time}</td>
                            <td className="wiki-td"><img src={zone.icon} alt={zone.type} className="wiki-class-icon"/> {zone.type}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* SHOT SCHEME (removed) */}

            {/* PLUMAGE VARIANTS (Gallery) */}
            <h2 id="plumage-variants" className="wiki-h2">Plumage Variants</h2>
            
            {/* Male Section */}
            <h3 id="plumage-male" style={{...styles.h2, fontSize:'1.2rem', borderBottom:'none', marginTop:'10px'}}>Male</h3>
            <div className="wiki-gallery-grid">
              {plumageGallery.male.map((item, i) => (
                <div key={i} className="wiki-gallery-item">
                  <div className="wiki-gallery-placeholder">
                    <img src={item.src} alt={item.name} />
                  </div>
                  <span className="wiki-gallery-label">{item.name}</span>
                </div>
              ))}
            </div>

            {/* Female Section */}
            <h3 id="plumage-female" style={{...styles.h2, fontSize:'1.2rem', borderBottom:'none', marginTop:'10px'}}>Female</h3>
            <div className="wiki-gallery-grid">
              {plumageGallery.female.map((item, i) => (
                <div key={i} className="wiki-gallery-item">
                  <div className="wiki-gallery-placeholder">
                    <img src={item.src} alt={item.name} />
                  </div>
                  <span className="wiki-gallery-label">{item.name}</span>
                </div>
              ))}
            </div>

            {/* PLUMAGE RARITY TABLE */}
            <h2 id="plumage-rarity" className="wiki-h2">Plumage Variant Rarity</h2>
            <table className="wiki-table">
                <thead>
                    <tr>
                        <th className="wiki-th">Sex</th>
                        <th className="wiki-th"><span className="wiki-common">Common</span></th>
                        <th className="wiki-th"><span className="wiki-uncommon">Uncommon</span></th>
                        <th className="wiki-th"><span className="wiki-rare">Rare</span></th>
                        <th className="wiki-th"><span className="wiki-very-rare">Very Rare</span></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="wiki-td wiki-td-muted">Male</td>
                        <td className="wiki-td">
                            Dark Red (49.90%)<br/>
                            Red (49.90%)
                        </td>
                        <td className="wiki-td">X</td>
                        <td className="wiki-td">
                            Albino (0.10%)<br/>
                            Melanistic (0.10%)
                        </td>
                        <td className="wiki-td">X</td>
                    </tr>
                     <tr>
                        <td className="wiki-td wiki-td-female">Female</td>
                        <td className="wiki-td">
                            Brown (49.80%)<br/>
                            Light Brown (49.80%)
                        </td>
                        <td className="wiki-td">X</td>
                        <td className="wiki-td">
                            Leucistic (0.20%)<br/>
                            Piebald (0.20%)
                        </td>
                        <td className="wiki-td">X</td>
                    </tr>
                </tbody>
            </table>
            
            <AnimalsTableMini />
          </main>
        </div>
      </div>
    </div>
  );
};

export default RedGrouse;