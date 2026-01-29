import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import class1Icon from '../../../assets/Class1Icon.webp';
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import DuskyGrouseMain from '../../../assets/Dusky_Grouse.webp';

// Shot Scheme (Reuse placeholder or specific if you have one, reusing northern pintail logic or generic xray)
import DuskyGrouse_ShotScheme from '../../../assets/Dusky_Grouse_shot_scheme.webp'; // Placeholder name based on pattern

// Male Plumage Images
import DuskyGrouse_AlbinoMaleFront from '../../../assets/DuskyGrouse_AlbinoMaleFront.webp';
import DuskyGrouse_AlbinoMaleBack from '../../../assets/DuskyGrouse_AlbinoMaleBack.webp';
import DuskyGrouse_BrownMaleFront from '../../../assets/DuskyGrouse_BrownMaleFront.webp';
import DuskyGrouse_BrownMaleBack from '../../../assets/DuskyGrouse_BrownMaleBack.webp';
import DuskyGrouse_LeucisticMaleFront from '../../../assets/DuskyGrouse_LeuicisticMaleFront.webp';
import DuskyGrouse_LeucisticMaleBack from '../../../assets/DuskyGrouse_LeuicisticMaleBack.webp';
import DuskyGrouse_MelanisticMaleFront from '../../../assets/DuskyGrouse_MelanisticMaleFront.webp';
import DuskyGrouse_MelanisticMaleBack from '../../../assets/DuskyGrouse_MelanisticMaleBack.webp';
import DuskyGrouse_MoltingMaleFront from '../../../assets/DuskyGrouse_MoltingMaleFront.webp';
import DuskyGrouse_MoltingMaleBack from '../../../assets/DuskyGrouse_MoltingMaleBack.webp';
import DuskyGrouse_SlateGrayMaleFront from '../../../assets/DuskyGrouse_SlateGrayMaleFront.webp';
import DuskyGrouse_SlateGrayMaleBack from '../../../assets/DuskyGrouse_SlateGrayMaleBack.webp';

// Female Plumage Images
import DuskyGrouse_AlbinoFemaleFront from '../../../assets/DuskyGrouse_AlbinoFemaleFront.webp';
import DuskyGrouse_AlbinoFemaleBack from '../../../assets/DuskyGrouse_AlbinoFemaleBack.webp';
import DuskyGrouse_GreyBrownFemaleFront from '../../../assets/DuskyGrouse_GreyBrownFemaleFront.webp';
import DuskyGrouse_GreyBrownFemaleBack from '../../../assets/DuskyGrouse_GreyBrownFemaleBack.webp';
import DuskyGrouse_LeucisticFemaleFront from '../../../assets/DuskyGrouse_LeuicisticFemaleFront.webp';
import DuskyGrouse_LeucisticFemaleBack from '../../../assets/DuskyGrouse_LeuicisticFemaleBack.webp';
import DuskyGrouse_MelanisticFemaleFront from '../../../assets/DuskyGrouse_MelanisticFemaleFront.webp';
import DuskyGrouse_MelanisticFemaleBack from '../../../assets/DuskyGrouse_MelanisticFemaleBack.webp';


const DuskyGrouse = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  const needZones = [
    { time: "00:00 - 04:00", type: "Resting", icon: RestingZoneIcon },
    { time: "04:00 - 08:00", type: "Feeding", icon: FeedingZoneIcon },
    { time: "08:00 - 11:00", type: "Feeding", icon: FeedingZoneIcon },
    { time: "11:00 - 14:00", type: "Resting", icon: RestingZoneIcon },
    { time: "14:00 - 18:00", type: "Feeding", icon: FeedingZoneIcon },
    { time: "18:00 - 21:00", type: "Feeding", icon: FeedingZoneIcon },
    { time: "21:00 - 00:00", type: "Resting", icon: RestingZoneIcon },
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Solitary, elusive" },
    { label: "Habitat", value: "Mountainous forests, preferring areas with a mix of conifers, aspens, and dense unterbush" },
    { label: "Senses", value: "Sharp eyesight, strong sense of hearing, good sense of smell" },
    { label: "Social", value: "Solitary outside breeding season, males becoming more territorial during courtship" },
    { label: "Active", value: "Early morning and late afternoon" },
    { label: "Recommended Equipment", value: "Class 1 Ammo" },
    { label: "Species", value: "Dendragapus obscurus", italic: true, isLink: true },
    { label: "Difficulty", value: "Easy" },
  ];

  // Plumage Gallery Data
  const plumageGallery = {
    male: [
      { name: "Albino - Front", src: DuskyGrouse_AlbinoMaleFront },
      { name: "Albino - Back", src: DuskyGrouse_AlbinoMaleBack },
      { name: "Brown - Front", src: DuskyGrouse_BrownMaleFront },
      { name: "Brown - Back", src: DuskyGrouse_BrownMaleBack },
      { name: "Leucistic - Front", src: DuskyGrouse_LeucisticMaleFront },
      { name: "Leucistic - Back", src: DuskyGrouse_LeucisticMaleBack },
      { name: "Melanistic - Front", src: DuskyGrouse_MelanisticMaleFront },
      { name: "Melanistic - Back", src: DuskyGrouse_MelanisticMaleBack },
      { name: "Molting - Front", src: DuskyGrouse_MoltingMaleFront },
      { name: "Molting - Back", src: DuskyGrouse_MoltingMaleBack },
      { name: "Slate Gray - Front", src: DuskyGrouse_SlateGrayMaleFront },
      { name: "Slate Gray - Back", src: DuskyGrouse_SlateGrayMaleBack },
    ],
    female: [
      { name: "Albino - Front", src: DuskyGrouse_AlbinoFemaleFront },
      { name: "Albino - Back", src: DuskyGrouse_AlbinoFemaleBack },
      { name: "Grey Brown - Front", src: DuskyGrouse_GreyBrownFemaleFront },
      { name: "Grey Brown - Back", src: DuskyGrouse_GreyBrownFemaleBack },
      { name: "Leucistic - Front", src: DuskyGrouse_LeucisticFemaleFront },
      { name: "Leucistic - Back", src: DuskyGrouse_LeucisticFemaleBack },
      { name: "Melanistic - Front", src: DuskyGrouse_MelanisticFemaleFront },
      { name: "Melanistic - Back", src: DuskyGrouse_MelanisticFemaleBack },
    ]
  };

  return (
    <div className="wiki-page">
      <div className="wiki-inner">
        
        {/* PAGE HEADER */}
        <div className="wiki-header">
          <span>Dusky Grouse</span>
          <div className="wiki-edit-actions">
          </div>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Dusky Grouse</div>
            <div className="wiki-sidebar-image">
              <img src={DuskyGrouseMain} alt="Dusky Grouse" />
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
              <span>Weight</span>
              <div className="wiki-trophy-grid">
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-silver">◆ Silver</span>
                  <span>88</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-gold">☗ Gold</span>⁐
                  <span>124</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-diamond">☗ Diamond</span>
                  <span>151</span>
                </div>
              </div>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Weight</span>
              700g — 1250g<br/>
              1.5lbs — 2.8lbs
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Plumage</span>
               <span className="wiki-fs-sm">
                  Albino, Brown, Grey Brown, Leucistic, Melanistic, Molting, Slate Gray
               </span>
            </div>

            <div className="wiki-sidebar-header">Locations</div>
            <div className="wiki-sidebar-section">
               <div className="wiki-mb-4"><span className="wiki-link">Askiy Ridge Hunting Preserve</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main className="wiki-main">

            {/* Quote Block */}
            <div className="wiki-quote">
              "The Dusky Grouse is a medium to large-sized game bird, renowned for its striking appearance and alusive nature. Adult males feathre a dark, dusky blue-gray plumage across their bodies, with mottled black and white markings on their underside. Dirung the breeding season, males develop vibrant red or yellow air sacs on their necks.

              <br/><br/>
              Dusky Grouses are primarily found in montane and subalpine forestsm preferring habitats with ample coniferous cover and dense undergrowth.

              <br/><br/>
              They have stout legs and feet adapted for life on the forest floor. Their feet are equipped with sharp, curved claws, ideal for scratching and digging in the forest litter in search of food."
              <br/><br/>
              ― In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-p-mb">
              The <strong>Dusky Grouse</strong> is a <span className="wiki-link">class 1</span> quail species that can be hunted on <span className="wiki-link">Askiy Ridge Hunting Preserve</span>.
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
                  <a href="#shot-scheme" className="wiki-link" onClick={(e)=>{e.preventDefault(); document.getElementById('shot-scheme')?.scrollIntoView({behavior:'smooth', block:'start'});}}>Shot scheme</a>
                </li>
                <li>
                  <a href="#plumage-variants" className="wiki-link" onClick={(e)=>{e.preventDefault(); document.getElementById('plumage-variants')?.scrollIntoView({behavior:'smooth', block:'start'});}}>Plumage Variants</a>
                  <ul >
                      <li style={{color:'#6fb2e6'}}><a href="#plumage-male" className="wiki-link" onClick={(e)=>{e.preventDefault(); document.getElementById('plumage-male')?.scrollIntoView({behavior:'smooth', block:'start'});}}>5.1. Male</a></li>
                      <li style={{color:'#6fb2e6'}}><a href="#plumage-female" className="wiki-link" onClick={(e)=>{e.preventDefault(); document.getElementById('plumage-female')?.scrollIntoView({behavior:'smooth', block:'start'});}}>5.2. Female</a></li>
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
                        <tr><th colSpan="2" className="wiki-th wiki-th-center">Askiy Ridge<sup style={{fontSize:'0.7rem', fontWeight:'normal'}}>[1]</sup></th></tr>
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

            {/* SHOT SCHEME */}
            <h2 id="shot-scheme" className="wiki-h2">Shot scheme</h2>
            <div className="wiki-shot-wrap">
                <div className="wiki-shot-title">Color code</div>
                  <div className="wiki-shot-container">
                    <div className="wiki-shot-image">
                      <img src={DuskyGrouse_ShotScheme} alt="Dusky Grouse X-ray shot scheme" />
                    </div>
                    <div className="wiki-shot-info">
                      No Color - Every hit will kill the animal
                    </div>
                  </div>
            </div>

            {/* TIPS (removed) */}

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
                            Slate Gray (59.87%)<br/>
                            Brown (19.98%)<br/>
                            Molting (19.98%)
                        </td>
                        <td className="wiki-td">X</td>
                        <td className="wiki-td">X</td>
                        <td className="wiki-td">
                            Albino (0.05%)<br/>
                            Leucistic (0.05%)<br/>
                            Melanistic (0.05%)
                        </td>
                    </tr>
                     <tr>
                        <td className="wiki-td wiki-td-female">Female</td>
                        <td className="wiki-td">
                            Grey Brown (99.74%)
                        </td>
                        <td className="wiki-td">X</td>
                        <td className="wiki-td">X</td>
                        <td className="wiki-td">
                            Albino (0.09%)<br/>
                            Leucistic (0.09%)<br/>
                            Melanistic (0.09%)
                        </td>
                    </tr>
                </tbody>
            </table>

            {/* TRIVIA (removed) */}
            
            <AnimalsTableMini />
          </main>
        </div>
      </div>
    </div>
  );
};

export default DuskyGrouse;