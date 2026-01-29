import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import DrinkingZoneIcon from '../../../assets/DrinkingZoneIcon.webp';
import class3Icon from '../../../assets/Class3Icon.webp'; // Class 3 for Eurasian Lynx
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import EurasianLynxMain from '../../../assets/EurasianLynx.webp';
import ShotSchemeImage from '../../../assets/Lynx_shot_scheme.webp';

// Fur Variant Images (Placeholders)
import EurasianLynx_Albino from '../../../assets/EurasianLynx_Albino.webp';
import EurasianLynx_Grey from '../../../assets/EurasianLynx_Grey.webp';
import EurasianLynx_LightBrown from '../../../assets/EurasianLynx_LightBrown.webp';
import EurasianLynx_Melanistic from '../../../assets/EurasianLynx_Melanistic.webp';
import EurasianLynx_Piebald from '../../../assets/EurasianLynx_Piebald.webp';


const EurasianLynx = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  const needZonesData = [
    {
      name: "Medved-Taiga National Park",
      schedule: [
        { time: "00:00 - 04:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "03:00 - 06:00", type: "Drinking", icon: DrinkingZoneIcon },
        { time: "04:00 - 08:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "08:00 - 12:30", type: "Resting", icon: RestingZoneIcon },
        { time: "12:00 - 16:30", type: "Resting", icon: RestingZoneIcon },
        { time: "16:00 - 20:30", type: "Resting", icon: RestingZoneIcon },
        { time: "20:00 - 00:30", type: "Feeding", icon: FeedingZoneIcon },
      ]
    },
    {
      name: "Revontuli Coast",
      schedule: [
        { time: "00:00 - 03:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "03:00 - 06:30", type: "Drinking", icon: DrinkingZoneIcon },
        { time: "06:00 - 09:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "09:00 - 12:30", type: "Resting", icon: RestingZoneIcon },
        { time: "12:00 - 16:30", type: "Resting", icon: RestingZoneIcon },
        { time: "16:00 - 20:30", type: "Resting", icon: RestingZoneIcon },
        { time: "20:00 - 00:30", type: "Feeding", icon: FeedingZoneIcon },
      ]
    }
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Skittish" },
    { label: "Habitat", value: "Prefer forests" },
    { label: "Senses", value: "Good hearing and excellent vision" },
    { label: "Social", value: "Solitary" },
    { label: "Active", value: "During night" },
    { label: "Recommended Equipment", value: "Class 3 Ammo, Predator \"Jackrabbit\" Caller" },
    { label: "Species", value: "Lynx lynx", italic: true, isLink: true },
    { label: "Difficulty", value: "Hard" },
  ];

  // Fur Gallery Data
  const furGallery = [
    { name: "Albino", src: EurasianLynx_Albino },
    { name: "Grey", src: EurasianLynx_Grey },
    { name: "Light Brown", src: EurasianLynx_LightBrown },
    { name: "Melanistic", src: EurasianLynx_Melanistic },
    { name: "Piebald", src: EurasianLynx_Piebald },
  ];

  // Trivia Data
  const triviaData = [
    "The Lynx name possibly derives from the Greek word for bright leukos. This could be a reference to how \"bright\" their eyes shine when light hits them.",
    "It is one of several animals in game to have their drink times removed after the release of Revontuli Coast (Medved Only). The reasoning for the Lynx losing its drink zone is unclear. However, it's possibly based off the fact that felines in harsh climates (deserts, frozen tundra, ext.) do not need to drink; they get most of their water from the meat they eat."
  ];

  return (
    <div className="wiki-page">
      <div className="wiki-inner">
        
        {/* PAGE HEADER */}
        <div className="wiki-header">
          <span>Eurasian Lynx</span>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Eurasian Lynx</div>
            <div className="wiki-sidebar-image">
              <img src={EurasianLynxMain} alt="Eurasian Lynx" />
            </div>
            
            <div className="wiki-sidebar-header">General Information</div>
            
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Class</span>
              <span><img src={class3Icon} alt="Class 3" className="wiki-class-icon-lg"/>3</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Difficulty</span>
              <span>1: Trivial — 9: Legendary</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Trophy Type</span>
              <span>Skull</span>
              <div className="wiki-trophy-grid">
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-silver">◆ Silver</span>
                  <span>18.58</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-gold">☗ Gold</span>
                  <span>23.78</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-diamond">☗ Diamond</span>
                  <span>27.68</span>
                </div>
              </div>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Weight</span>
              8kg — 45kg<br/>
              <span className="wiki-sidebar-muted">18lbs — 99lbs</span>
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Fur</span>
               <span className="wiki-fs-sm">
                 Albino, Grey, Light Brown, Melanistic, Piebald
               </span>
            </div>

            <div className="wiki-sidebar-header">Locations</div>
            <div className="wiki-sidebar-section">
               <div className="wiki-mb-4"><span className="wiki-link">Medved-Taiga National Park</span></div>
               <div className="wiki-mb-4"><span className="wiki-link">Revontuli Coast</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main className="wiki-main">

            {/* Quote Block */}
            <div className="wiki-quote">
              "The Eurasian lynx is a medium-sized cat native to northern and central Asia and northern and eastern Europe. It's the largest species of lynx with males weighing in between 18 - 45 kg (40 - 99 lb) and females between 8 - 21 kg (18 - 46 lb). During summer, the Eurasian lynx has a relatively short, reddish or brown coat. In winter this is replaced by a much thicker coat of silky fur that varies from silver-grey to greyish brown. The fur is almost always marked with black spots. Lynxes are very powerful ambush predators and have been known to take prey many times their size, including adult reindeer weighing to at least 150 kg (330 lb) although hares are the mainstay. In some parts of their distribution roe deer may become the main prey species for this cat species. Lynxes are solitary throughout most of the year, are typically active during the night and keep to mountain or coniferous forest areas where there is plenty of cover available. They have great eyesight and excellent hearing and avoid humans whenever possible which makes them challenging to hunt."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-p-mb">
              The <strong>Eurasian Lynx</strong> is a small <span className="wiki-link">class 3</span> animal. It can be hunted in <span className="wiki-link">Medved-Taiga National Park</span> and <span className="wiki-link">Revontuli Coast</span>. It was the first species of lynx to be featured in the game. The <span className="wiki-link">Bobcat</span> is the second.
            </p>

            {/* Table of Contents */}
            <div className="wiki-toc">
              <div className="wiki-toc-title">
                🔢 Contents <span className="wiki-toc-toggle">[hide]</span>
              </div>
              <ol className="wiki-toc">
                <li><a href="#features" className="wiki-link" onClick={scrollToId('features')}>Features</a></li>
                <li><a href="#need-zone-times" className="wiki-link" onClick={scrollToId('need-zone-times')}>Need Zone Times</a></li>
                <li><a href="#shot-scheme" className="wiki-link" onClick={scrollToId('shot-scheme')}>Shot scheme</a></li>
                <li><a href="#fur-variants" className="wiki-link" onClick={scrollToId('fur-variants')}>Fur Variants</a></li>
                <li><a href="#fur-variant-rarity" className="wiki-link" onClick={scrollToId('fur-variant-rarity')}>Fur Variant Rarity</a></li>
                <li><a href="#trivia" className="wiki-link" onClick={scrollToId('trivia')}>Trivia</a></li>
              </ol>
            </div>

            {/* FEATURES */}
            <h2 id="features" className="wiki-h2">Features</h2>
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
            <h2 id="need-zone-times" className="wiki-h2">Need Zone Times</h2>
            <div style={{display:'flex', gap: '20px', flexWrap: 'wrap'}}>
                {needZonesData.map((mapData, index) => (
                    <div key={index} style={{flex: '1 1 300px'}}>
                        <table className="wiki-table">
                            <thead>
                                <tr><th colSpan="2" className="wiki-th wiki-th-center">{mapData.name}</th></tr>
                                <tr>
                                    <th className="wiki-th wiki-th-alt">Times</th>
                                    <th className="wiki-th wiki-th-alt">Activity</th>
                                </tr>
                            </thead>
                            <tbody>
                                {mapData.schedule.map((zone, i) => (
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
                ))}
            </div>

             {/* SHOT SCHEME */}
             <h2 id="shot-scheme" className="wiki-h2">Shot scheme</h2>
            <div className="wiki-shot-container">
                <div className="wiki-shot-container">
                   <img src={ShotSchemeImage} alt="Shot Scheme" className="wiki-shot-scheme-img" />
                </div>
                <div className="wiki-shot-wrap">
                   <div className="wiki-shot-title">Color code</div>
                   <div className="wiki-shot-info">Red - Kills immediately</div>
                   <div className="wiki-shot-info">Blue - Kills very quick</div>
                   <div className="wiki-shot-info">Orange - Kills slowly</div>
                   <div className="wiki-legend-item wiki-legend-item-last">No Color - Unlikely to kill</div>
                </div>
            </div>

            {/* FUR VARIANTS (Gallery) */}
            <h2 id="fur-variants" className="wiki-h2">Fur Variants</h2>
            <div className="wiki-gallery-grid">
              {furGallery.map((item, i) => (
                <div key={i} className="wiki-gallery-item">
                  <div className="wiki-gallery-placeholder">
                    <img src={item.src} alt={item.name} className="wiki-img-contain" />
                  </div>
                  <span className="wiki-gallery-label">{item.name}</span>
                </div>
              ))}
            </div>

            {/* FUR VARIANT RARITY TABLE */}
            <h2 id="fur-variant-rarity" className="wiki-h2">Fur Variant Rarity</h2>
            <div className="wiki-overflow-auto">
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
                        <tr>
                            <td className="wiki-td wiki-td-muted">
                                Male<span className="wiki-text-divider">/</span><span className="wiki-text-female">Female</span>
                            </td>
                            <td className="wiki-td">
                                Grey (49.85%)<br/>
                                Light Brown (49.85%)
                            </td>
                            <td className="wiki-td">X</td>
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

            <div className="wiki-mt-40">
                <AnimalsTableMini />
            </div>
            
          </main>
        </div>
      </div>
    </div>
  );
};

export default EurasianLynx;