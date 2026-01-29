import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import DrinkingZoneIcon from '../../../assets/DrinkingZoneIcon.webp';
import class9Icon from '../../../assets/Class9Icon.webp'; // Class 9 for Plains Bison
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import PlainsBisonMain from '../../../assets/PlainsBison.webp';
import ShotSchemeImg from '../../../assets/Bison_shot_scheme.webp';

// Fur Variant Images - Male
import PlainsBison_AlbinoMale from '../../../assets/PlainsBison_AlbinoMale.webp';
import PlainsBison_BrownMale from '../../../assets/PlainsBison_BrownMale.webp';
import PlainsBison_DarkMale from '../../../assets/PlainsBison_DarkMale.webp';
import PlainsBison_LeucisticMale from '../../../assets/PlainsBison_LeucisticMale.webp';
import PlainsBison_LightBrownMale from '../../../assets/PlainsBison_LightBrownMale.webp';
import PlainsBison_LightGreyMale from '../../../assets/PlainsBison_LightGreyMale.webp';
import PlainsBison_MelanisticMale from '../../../assets/PlainsBison_MelanisticMale.webp';

// Fur Variant Images - Female
import PlainsBison_AlbinoFemale from '../../../assets/PlainsBison_AlbinoFemale.webp';
import PlainsBison_BrownFemale from '../../../assets/PlainsBison_BrownFemale.webp';
import PlainsBison_DarkFemale from '../../../assets/PlainsBison_DarkFemale.webp';
import PlainsBison_LeucisticFemale from '../../../assets/PlainsBison_LeucisticFemale.webp';
import PlainsBison_LightBrownFemale from '../../../assets/PlainsBison_LightBrownFemale.webp';
import PlainsBison_LightGreyFemale from '../../../assets/PlainsBison_LightGreyFemale.webp';
import PlainsBison_MelanisticFemale from '../../../assets/PlainsBison_MelanisticFemale.webp';


const PlainsBison = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  const needZonesData = [
    {
      name: "Silver Ridge Peaks",
      schedule: [
        { time: "00:00 - 04:00", type: "Resting", icon: RestingZoneIcon },
        { time: "04:00 - 08:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "08:00 - 12:00", type: "Drinking", icon: DrinkingZoneIcon },
        { time: "12:00 - 16:00", type: "Resting", icon: RestingZoneIcon },
        { time: "16:00 - 20:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "20:00 - 00:00", type: "Resting", icon: RestingZoneIcon },
      ]
    }
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Calm, confident, but aggressive when threatened" },
    { label: "Habitat", value: "Grassland, wetland, shrubland, sparse woods" },
    { label: "Senses", value: "Poor eyesight but excellent sense of smell" },
    { label: "Social", value: "Cows and young live in large herds, mature bulls live on their own or in small bachelor herds" },
    { label: "Active", value: "Morning and evening" },
    { label: "Recommended Equipment", value: "Class 9 Ammo" },
    { label: "Species", value: "Bison bison bison", italic: true, isLink: true },
    { label: "Difficulty", value: "Very Hard" },
  ];

  // Fur Gallery Data - Male
  const maleFurGallery = [
    { name: "Albino", src: PlainsBison_AlbinoMale },
    { name: "Brown", src: PlainsBison_BrownMale },
    { name: "Dark", src: PlainsBison_DarkMale },
    { name: "Leucistic", src: PlainsBison_LeucisticMale },
    { name: "Light Brown", src: PlainsBison_LightBrownMale },
    { name: "Light Grey", src: PlainsBison_LightGreyMale },
    { name: "Melanistic", src: PlainsBison_MelanisticMale },
  ];

    // Fur Gallery Data - Female
    const femaleFurGallery = [
      { name: "Albino", src: PlainsBison_AlbinoFemale },
      { name: "Brown", src: PlainsBison_BrownFemale },
      { name: "Dark", src: PlainsBison_DarkFemale },
      { name: "Leucistic", src: PlainsBison_LeucisticFemale },
      { name: "Light Brown", src: PlainsBison_LightBrownFemale },
      { name: "Light Grey", src: PlainsBison_LightGreyFemale },
      { name: "Melanistic", src: PlainsBison_MelanisticFemale },
    ];

  // Tips Data
  const tipsData = [
    "Bison are notoriously slow in game and therefore are relatively easy to hunt. If you have the resources, unlock the Endurance skill, and then chase herds of Bison until you have a clear shot, picking them off one by one. Chasing them has an added benefit of preventing hunting pressure, since the Bison will run away from the last place you shot."
  ];

  // Trivia Data
  const triviaData = [
    "'Buffalo' get their name from the French fur trappers of America who called them \"boeuf\" meaning beef.",
    "The Lakota People share a unique relationship with the Plains Bison. So much so, that they are sometimes called \"pte oyate\" or 'Buffalo Nation'.",
    "The American Buffalo has become one of the many Icons of the country, being integrated into the culture of the US. An example of this is The University of Colorado's \"Ralphie\"; a live Bison Mascot who rushes into Folsom Field at the beginning of every Football Game.",
    "The Plains Bison is also the official State Animal of Kansas, Oklahoma, and Wyoming.",
    "A \"red dog\" refers to a baby Plains Bison.",
    "The scientific name of the Plains Bison (Bison bison bison) along with the Harlequin Duck (Histrionicus histrionicus), Fallow Deer (Dama dama), Roe Deer (Capreolus capreolus), Red Fox (Vulpes vulpes), Axis Deer (Axis axis), Moose (Acles acles), Greylag Goose (Anser anser), Willow Ptarmigan (Lagopus lagopus), and the Eurasian Lynx (Lynx lynx) is a tautonym: a scientific name in which both parts of the name have the same spelling."
  ];

  // References Data
  const referencesData = [
    "https://www.nps.gov/articles/bison_badl.htm"
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
          <span>Plains Bison</span>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Plains Bison</div>
            <div className="wiki-sidebar-image">
              <img src={PlainsBisonMain} alt="Plains Bison" />
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
                  <span>117.73</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-gold">☗ Gold</span>
                  <span>155.31</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-diamond">☗ Diamond</span>
                  <span>183.5</span>
                </div>
              </div>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Weight</span>
              350kg — 1200kg<br/>
              <span className="wiki-sidebar-muted">772lbs — 2646lbs</span>
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Fur</span>
               <span className="wiki-fs-sm">
                 Albino, Brown, Dark, Light Brown, Light Grey, Leucistic, Melanistic
               </span>
            </div>

            <div className="wiki-sidebar-header">Locations</div>
            <div className="wiki-sidebar-section">
               <div className="wiki-mb-4"><span className="wiki-link">Yukon Valley Nature Reserve</span></div>
               <div className="wiki-mb-4"><span className="wiki-link">Silver Ridge Peaks</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main className="wiki-main">

            {/* Quote Block */}
            <div className="wiki-quote">
              "The plains bison, sometimes called "buffalo", is one of the two subspecies of the American bison, the biggest land mammal of North America. Compared to their forest-dwelling European cousins, plains bison are heavier, stronger, and more territorial. Plains bison are massive animals with mature adults measuring up to 185.00 m at the shoulder and weighing on average between 400.00 kg and 1000.00 kg. Their massive size, strength, and gregarious lifestyle protects mature bison from most predators, but wolves and bears sometimes hunt young, isolated or weakened individuals. It is not uncommon to see a bison stand its ground against predators. As such, hunters should be especially cautious when hunting one."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-p-mb">
              The <strong>Plains Bison</strong> is a <span className="wiki-link">class 9</span> bovine. It can be hunted in <span className="wiki-link">Yukon Valley</span> and in the <span className="wiki-link">Silver Ridge Peaks Reserve</span>. The Plains Bison is one of three species of bison in the game, the other ones being the <span className="wiki-link">European Bison</span> and the <span className="wiki-link">Wood Bison</span>.
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
                <li><a href="#references" onClick={(e)=>scrollToId(e,'references')} className="wiki-link">References</a></li>
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
                        <tr><th colSpan="2" className="wiki-th wiki-th-center">Silver Ridge Peaks</th></tr>
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
                 <div className="wiki-shot-info">Red - Kills almost immediately</div>
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
                                Light Brown (28.55%)<br/>
                                Light Grey (28.55%)<br/>
                                Brown (21.41%)<br/>
                                Dark (21.41%)
                            </td>
                            <td className="wiki-td">
                                X
                            </td>
                            <td className="wiki-td">
                                X
                            </td>
                            <td className="wiki-td">
                                Albino (0.03%)<br/>
                                Leucistic (0.03%)<br/>
                                Melanistic (0.03%)
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
            <h2 id="references" className="wiki-h2">References</h2>
            <ol className="wiki-ol-ref">
                {referencesData.map((ref, idx) => (
                     <li key={idx} className="wiki-mb-5">
                        <span className="wiki-text-divider">↑</span> <span className="wiki-link">{ref}</span>
                     </li>
                ))}
            </ol>

            <div className="wiki-mt-40">
                <AnimalsTableMini />
            </div>
            
          </main>
        </div>
      </div>
    </div>
  );
};

export default PlainsBison;