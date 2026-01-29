import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import DrinkingZoneIcon from '../../../assets/DrinkingZoneIcon.webp';
import class9Icon from '../../../assets/Class9Icon.webp'; // Class 9 for European Bison
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import EuroBisonMain from '../../../assets/EuropeanBison.webp';
import ShotSchemeImg from '../../../assets/Bison_shot_scheme.webp';

// Fur Variant Images - Male (using same set for female as images look identical in structure, but separate arrays for gallery logic if needed)
import EuropeanBison_AlbinoMale from '../../../assets/EuropeanBison_AlbinoMale.webp';
// import EuropeanBison_BlackMale from '../../../assets/EuroBison_Black.webp'; // Note: Screenshots label this as "Black" in one view but "Melanistic" in gallery. I will use the names shown in gallery.
import EuropeanBison_BrownMale from '../../../assets/EuropeanBison_BrownMale.webp';
import EuropeanBison_DarkBrownMale from '../../../assets/EuropeanBison_DarkBrownMale.webp';
import EuropeanBison_LightBrownMale from '../../../assets/EuropeanBison_LightBrownMale.webp';
import EuropeanBison_MelanisticMale from '../../../assets/EuropeanBison_MelanisticMale.webp';
import EuropeanBison_PiebaldMale from '../../../assets/EuropeanBison_PiebaldMale.webp';


const EuropeanBison = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  const needZonesData = [
    {
      name: "Hirschfelden",
      schedule: [
        { time: "00:00 - 04:00", type: "Resting", icon: RestingZoneIcon },
        { time: "04:00 - 07:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "07:00 - 10:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "10:00 - 14:00", type: "Drinking", icon: DrinkingZoneIcon },
        { time: "14:00 - 17:00", type: "Resting", icon: RestingZoneIcon },
        { time: "17:00 - 20:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "20:00 - 00:00", type: "Resting", icon: RestingZoneIcon },
      ]
    }
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Aggressive at close range" },
    { label: "Habitat", value: "Prefer to live in forests with a lot of undergrowth" },
    { label: "Senses", value: "Very good sense of smell" },
    { label: "Social", value: "Males are typically solitary. Females live in medium-sized groups." },
    { label: "Active", value: "During Dusk and Night" },
    { label: "Recommended Equipment", value: "Class 9 Ammo" },
    { label: "Species", value: "Bison bonasus", italic: true, isLink: true },
    { label: "Difficulty", value: "Very Hard" },
  ];

  // Fur Gallery Data - Male
  const maleFurGallery = [
    { name: "Albino", src: EuropeanBison_AlbinoMale },
    { name: "Brown", src: EuropeanBison_BrownMale },
    { name: "Dark Brown", src: EuropeanBison_DarkBrownMale },
    { name: "Light Brown", src: EuropeanBison_LightBrownMale },
    { name: "Melanistic", src: EuropeanBison_MelanisticMale },
    { name: "Piebald", src: EuropeanBison_PiebaldMale },
  ];

    // Fur Gallery Data - Female
    const femaleFurGallery = [
      { name: "Albino", src: EuropeanBison_AlbinoMale },
      { name: "Brown", src: EuropeanBison_BrownMale },
      { name: "Dark Brown", src: EuropeanBison_DarkBrownMale },
      { name: "Light Brown", src: EuropeanBison_LightBrownMale },
      { name: "Melanistic", src: EuropeanBison_MelanisticMale },
      { name: "Piebald", src: EuropeanBison_PiebaldMale },
    ];

  // Tips Data
  const tipsData = [
    "Bison are notoriously slow in game and therefore are relatively easy to hunt. If you have the resources, unlock the Endurance skill, and then chase herds of Bison until you have a clear shot, picking them off one by one. Chasing them has an added benefit of preventing hunting pressure, since the Bison will run away from the last place you shot."
  ];

  // Trivia Data
  const triviaData = [
    "The name Bison is Latin in origin and means, \"Wild Ox\"."
  ];

  // References Data - inferred from typical wiki structure, though specific reference links not fully shown in screenshots beyond header
  const referencesData = [
    "European Bison Need Zones, Hirschfelden Hunting Reserve"
  ];

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
    <div className="wiki-page">
      <div className="wiki-inner">
        
        {/* PAGE HEADER */}
        <div className="wiki-header">
          <span>European Bison</span>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">European Bison</div>
            <div className="wiki-sidebar-image">
              <img src={EuroBisonMain} alt="European Bison" />
            </div>
            
            <div className="wiki-sidebar-header">General Information</div>
            
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Class</span>
              <span><img src={class9Icon} alt="Class 9" className="wiki-class-icon-lg"/>9</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Difficulty</span>
              <span>1: Trivial — 5: Medium</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Trophy Type</span>
              <span>Horns</span>
              <div className="wiki-trophy-grid">
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-silver">◆ Silver</span>
                  <span>86.53</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-gold">☗ Gold</span>
                  <span>110.01</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-diamond">☗ Diamond</span>
                  <span>127.62</span>
                </div>
              </div>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Weight</span>
              300kg — 920kg<br/>
              <span className="wiki-sidebar-muted">661lbs — 2028lbs</span>
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Fur</span>
               <span className="wiki-fs-sm">
                 Albino, Brown, Dark-Brown, Light Brown, Melanistic, Piebald
               </span>
            </div>

            <div className="wiki-sidebar-header">Locations</div>
            <div className="wiki-sidebar-section">
               <div className="wiki-mb-4"><span className="wiki-link">Hirschfelden Hunting Reserve</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main className="wiki-main">

            {/* Quote Block */}
            <div className="wiki-quote">
              "Also known as the European wood bison. Native to the European mainland, the bison was nearly hunted to extinction in the early 20th century. It was preserved by conservation efforts and reintroduced to their natural habitat. They are now once again a viable part of the central European fauna. Being one of the heaviest terrestrial animals in Europe, these beasts may weigh in as high as 1,000.00 kg or more. They require utmost care when approached by hunters, as a bison will defend itself fiercely if provoked. Shot placement is key when hunting bison, as they rival the moose in pure toughness. Bison are herbivores that live inside deciduous and coniferous forests, and have no natural predators apart from humans."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-p-mb">
              The <strong>European Bison</strong> also called Wisent, is a <span className="wiki-link">class 9</span> animal. It can be hunted in the <span className="wiki-link">Hirschfelden Hunting Reserve</span>. The European Bison is one of three species of bison in the game, the other ones being the <span className="wiki-link">Plains Bison</span> and <span className="wiki-link">Wood Bison</span>.
            </p>

            {/* Table of Contents */}
            <div className="wiki-toc">
              <div className="wiki-toc-title">
                🔢 Contents <span className="wiki-toc-toggle">[hide]</span>
              </div>
              <ol className="wiki-toc">
                <li><a href="#features" onClick={(e)=>scrollToId(e,'features')} className="wiki-link">Features</a></li>
                <li><a href="#need-zones" onClick={(e)=>scrollToId(e,'need-zones')} className="wiki-link">Need Zone Times</a></li>
                <li><a href="#shot-scheme" onClick={(e)=>scrollToId(e,'shot-scheme')} className="wiki-link">Shot Scheme</a></li>
                <li><a href="#tips" onClick={(e)=>scrollToId(e,'tips')} className="wiki-link">Tips</a></li>
                <li><a href="#fur-variants" onClick={(e)=>scrollToId(e,'fur-variants')} className="wiki-link">Fur Variants</a></li>
                <ol style={{listStyleType: 'none', marginLeft: '-20px'}}>
                      <li><a href="#fur-male" onClick={(e)=>scrollToId(e,'fur-male')} style={{...styles.link, marginLeft:'20px'}}>5.1. Male</a></li>
                      <li><a href="#fur-female" onClick={(e)=>scrollToId(e,'fur-female')} style={{...styles.link, marginLeft:'20px'}}>5.2. Female</a></li>
                </ol>
                <li><a href="#variant-rarity" onClick={(e)=>scrollToId(e,'variant-rarity')} className="wiki-link">Fur Variant Rarity</a></li>
                <li><a href="#trivia" onClick={(e)=>scrollToId(e,'trivia')} className="wiki-link">Trivia</a></li>
              </ol>
            </div>

            {/* FEATURES */}
            <h2 className="wiki-h2" id="features">Features</h2>
            <table className="wiki-table">
              <thead>
                <tr>
                    <th className="wiki-th wiki-th-w25"></th>
                    <th className="wiki-th">Description</th>
                </tr>
              </thead>
              <tbody>
                {features.map((item, index) => (
                  <tr key={index}>
                    <td className="wiki-td wiki-td-bold">{item.label}</td>
                    <td className={`wiki-td ${item.italic ? 'wiki-td-italic' : ''}`}>
                        {item.isLink ? <span className="wiki-link">{item.value}</span> : item.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            {/* NEED ZONE TIMES */}
            <h2 className="wiki-h2" id="need-zones">Need Zone Times</h2>
            <div className="wiki-inline-block">
                <table className="wiki-table wiki-table-fixed">
                    <thead>
                        <tr><th colSpan="2" className="wiki-th wiki-th-center">Hirschfelden[1]</th></tr>
                        <tr>
                            <th className="wiki-th wiki-th-alt">Times</th>
                            <th className="wiki-th wiki-th-alt">Activity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {needZonesData[0].schedule.map((zone, i) => (
                        <tr key={i}>
                            <td className="wiki-td">{zone.time}</td>
                            <td className="wiki-td">
                                <div className="wiki-flex-center">
                                    <img src={zone.icon} alt={zone.type} className="wiki-class-icon"/> 
                                    {zone.type}
                                </div>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* SHOT SCHEME */}
            <h2 className="wiki-h2" id="shot-scheme">Shot Scheme</h2>
            <div className="wiki-shot-container">
               <div className="wiki-shot-container">
                 <img src={ShotSchemeImg} alt="Shot Scheme" className="wiki-shot-scheme-img" />
               </div>
               <div className="wiki-shot-wrap">
                 <div className="wiki-shot-title">Color code</div>
                 <div className="wiki-shot-info">Red - Kills immediately</div>
                 <div className="wiki-shot-info">Blue - Kills very quick</div>
                 <div className="wiki-shot-info">Orange - Kills slowly</div>
                 <div className="wiki-legend-item wiki-legend-item-last">No Color - Unlikely to kill</div>
               </div>
            </div>

            {/* TIPS */}
            <h2 id="tips" className="wiki-h2">Tips</h2>
            {tipsData.map((tip, idx) => (
                <p key={idx} className="wiki-mb-15">{tip}</p>
            ))}

            {/* FUR VARIANTS (Gallery) */}
            <h2 className="wiki-h2" id="fur-variants">Fur Variants</h2>
            
            <h3 id="fur-male" style={{marginTop:'10px', marginBottom:'8px', color: '#6fb2e6'}}>Male</h3>
            <div className="wiki-gallery-grid">
              {maleFurGallery.map((item, i) => (
                <div key={i} className="wiki-gallery-item">
                  <div className="wiki-gallery-placeholder">
                    <img src={item.src} alt={item.name} className="wiki-img-contain" />
                  </div>
                  <span className="wiki-gallery-label">{item.name}</span>
                </div>
              ))}
            </div>

            <h3 id="fur-female" style={{marginTop:'10px', marginBottom:'8px', color: '#6fb2e6'}}>Female</h3>
            <div className="wiki-gallery-grid">
              {femaleFurGallery.map((item, i) => (
                <div key={i} className="wiki-gallery-item">
                  <div className="wiki-gallery-placeholder">
                    <img src={item.src} alt={item.name} className="wiki-img-contain" />
                  </div>
                  <span className="wiki-gallery-label">{item.name}</span>
                </div>
              ))}
            </div>

            {/* FUR VARIANT RARITY TABLE */}
            <h2 id="variant-rarity" className="wiki-h2">Fur Variant Rarity</h2>
            <div className="wiki-overflow-auto wiki-mb-20">
                <table className="wiki-table">
                    <thead>
                        <tr>
                            <th className="wiki-th">Sex</th>
                            <th className="wiki-th wiki-common">Common</th>
                            <th className="wiki-th wiki-uncommon">Uncommon</th>
                            <th className="wiki-th wiki-rare">Rare</th>
                            <th className="wiki-th wiki-very-rare">Very Rare</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Male/Female Combined Row */}
                        <tr>
                            <td className="wiki-td">
                                <span className="wiki-text-male">Male</span>
                                <span className="wiki-text-divider">/</span>
                                <span className="wiki-text-female">Female</span>
                            </td>
                            <td className="wiki-td">
                                Light Brown (33.23%)<br/>
                                Dark Brown (33.23%)<br/>
                                Brown (33.23%)
                            </td>
                            <td className="wiki-td">
                                X
                            </td>
                            <td className="wiki-td">
                                Piebald (0.20%)
                            </td>
                            <td className="wiki-td">
                                Albino (0.05%)<br/>
                                Melanistic (0.05%)
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* TRIVIA */}
            <h2 id="trivia" className="wiki-h2">Trivia</h2>
            <ul className="wiki-ul wiki-ul-disc">
                {triviaData.map((point, idx) => (
                    <li key={idx} className="wiki-mb-10">{point}</li>
                ))}
            </ul>

            {/* REFERENCES */}
            {referencesData.length > 0 && (
                <>
                <h2 id="references" className="wiki-h2">References</h2>
                <ol className="wiki-ol-ref">
                    {referencesData.map((ref, idx) => (
                        <li key={idx} className="wiki-mb-5">
                            <span className="wiki-text-divider">↑</span> <span className="wiki-link">{ref}</span>
                        </li>
                    ))}
                </ol>
                </>
            )}

            <div className="wiki-mt-40">
                <AnimalsTableMini />
            </div>
            
          </main>
        </div>
      </div>
    </div>
  );
};

export default EuropeanBison;