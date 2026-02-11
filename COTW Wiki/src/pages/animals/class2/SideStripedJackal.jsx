import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import DrinkingZoneIcon from '../../../assets/DrinkingZoneIcon.webp';
import class2Icon from '../../../assets/Class2Icon.webp'; // Class 2 for Side-Striped Jackal
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import SideStripedJackalMain from '../../../assets/SideStripedJackal.webp';
import ShotSchemeImage from '../../../assets/Side_striped_jackal_shot_scheme.webp';

// Fur Variant Images (Placeholders)
import Jackal_Albino from '../../../assets/SideStripedJackal_Albino.webp';
import Jackal_Grey from '../../../assets/SideStripedJackal_Grey.webp';
import Jackal_GreyBrown from '../../../assets/SideStripedJackal_GreyBrown.webp';
import Jackal_LightBrown from '../../../assets/SideStripedJackal_LightBrown.webp';
import Jackal_Melanistic from '../../../assets/SideStripedJackal_Melanistic.webp';
import Jackal_Unnamed from '../../../assets/SideStripedJackal_Unnamed.webp';


const SideStripedJackal = () => {

  // Smooth-scroll helper for the Table of Contents
  const scrollToId = (id) => {
    try {
      const el = document.getElementById(id);
      if (!el) return;
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.replaceState(null, '', `#${id}`);
    } catch (e) {
      // ignore in non-DOM environments
    }
  };

  // --- DATA SOURCES ---

  // Need Zone Times
  const needZonesData = [
    {
      name: "Vurhonga Savanna", // Inferred from locations
      schedule: [
        { time: "00:00 - 03:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "03:00 - 06:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "06:30 - 10:30", type: "Resting", icon: RestingZoneIcon },
        { time: "10:00 - 14:30", type: "Resting", icon: RestingZoneIcon },
        { time: "14:00 - 18:30", type: "Resting", icon: RestingZoneIcon },
        { time: "18:00 - 21:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "21:00 - 00:30", type: "Feeding", icon: FeedingZoneIcon },
      ]
    }
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Skittish and occasional defensive" },
    { label: "Habitat", value: "Woodlands, Bush, Grassland, Marshes (Any area with good cover)" },
    { label: "Senses", value: "Excellent smell, good hearing, excellent vision" },
    { label: "Social", value: "Mixed familial groups up to 12, or solitary males and females" },
    { label: "Active", value: "Mainly nocturnal, sometimes daytime-active (All times of day/night)" },
    { label: "Recommended Equipment", value: "Class 2 Ammo, Predator \"Jackrabbit\" Caller" },
    { label: "Species", value: "Canis adustus", italic: true, isLink: true },
    { label: "Difficulty", value: "Easy" },
  ];

  // Fur Gallery Data
  const furGallery = [
    { name: "Albino", src: Jackal_Albino },
    { name: "Grey", src: Jackal_Grey },
    { name: "Grey Brown", src: Jackal_GreyBrown },
    { name: "Light Brown", src: Jackal_LightBrown },
    { name: "Melanistic", src: Jackal_Melanistic },
    { name: "Unnamed", src: Jackal_Unnamed },
  ];

  // Trivia Data
  const triviaData = [
    "The Side-striped Jackal was the third of seven canids to be featured in the game. The others include the Red Fox, the Coyote, the Gray Wolf, the Iberian Wolf, the Gray Fox, and the Raccoon Dog.",
    "In French, it is called the \"chacal à flancs rayés.\"",
    "The word \"jackal\" is derived from the French word \"chacal,\" which in turn is derived from the Sanskrit word \"शृगाल,\" meaning \"the howler.\""
  ];

  // References List
  const references = [
    "https://www.etymonline.com/word/jackal"
  ];

  return (
    <div className="wiki-page">
      <div className="wiki-inner">
        
        {/* PAGE HEADER */}
        <div className="wiki-header">
          <span>Side-Striped Jackal</span>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Side-Striped Jackal</div>
            <div className="wiki-sidebar-image">
              <img src={SideStripedJackalMain} alt="Side-Striped Jackal" />
            </div>
            
            <div className="wiki-sidebar-header">General Information</div>
            
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Class</span>
              <span><img src={class2Icon} alt="Class 2" className="inline-block wiki-class-icon-sm align-middle mr-1.5" />2</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Difficulty</span>
              <span>1: Trivial — 9: Legendary</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Trophy Type</span>
              <span>Weight</span>
              <div className="wiki-trophy-grid">
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-silver">◆ Silver</span>
                  <span>16.8</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-gold">☗ Gold</span>
                  <span>23.8</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-diamond">☗ Diamond</span>
                  <span>29.1</span>
                </div>
              </div>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Weight</span>
              ? — 14kg<br/>
              <span className="wiki-sidebar-muted">? — 31lbs</span>
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Fur</span>
               <span className="wiki-fs-sm">
                  Albino, Light Brown, Grey, Grey Brown, Melanistic
               </span>
            </div>

            <div className="wiki-sidebar-header">Locations</div>
            <div className="wiki-sidebar-section">
               <div className="wiki-mb-4"><span className="wiki-link">Vurhonga Savanna</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main className="wiki-main">

            {/* Quote Block */}
            <div className="wiki-quote">
              "The Side-Striped Jackal (Canis Adustus) is a mostly nocturnal, opportunistic omnivore found predominantly in Tropical Africa. It prefers the moist, wooded areas of east, west and central Africa and stays away from the rainforests of the same regions. Easily distinguishable from its other Jackal relatives, the Side-Striped Jackal wears its eponymous stripe from elbow to hip, has shorter legs and shorter ears. Males and females are indistinguishable from a distance, except the fact that males are generally larger. The Side-Striped Jackal mates for life and mated pairs are aggressively territorial. They rarely go over 12.00 kg in weight or 0.50 m in shoulder height."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-p-mb">
              The <strong>Side-Striped Jackal</strong> is a <span className="wiki-link">class 2</span> omnivore. It can be hunted in the <span className="wiki-link">Vurhonga Savanna Reserve</span>.
            </p>

            {/* Table of Contents */}
            <div className="wiki-toc">
              <div className="wiki-toc-title">
                🔢 Contents <span className="wiki-toc-toggle">[hide]</span>
              </div>
              <ol className="wiki-toc">
                <li><a className="wiki-link" onClick={() => scrollToId('features')}>Features</a></li>
                <li><a className="wiki-link" onClick={() => scrollToId('need-zones')}>Need Zone Times</a></li>
                <li><a className="wiki-link" onClick={() => scrollToId('shot-scheme')}>Shot scheme</a></li>
                <li><a className="wiki-link" onClick={() => scrollToId('fur-variants')}>Fur variants</a></li>
                <li><a className="wiki-link" onClick={() => scrollToId('fur-rarity')}>Fur Variant Rarity</a></li>
                <li><a className="wiki-link" onClick={() => scrollToId('trivia')}>Trivia</a></li>
                <li><a className="wiki-link" onClick={() => scrollToId('references')}>References</a></li>
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
                        {/* Header with map name inferred from location context if specific header isn't in screenshot, but generally consistent with style */}
                        <tr><th colSpan="2" className="wiki-th wiki-th-center">Vurhonga Savanna</th></tr>
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
             <h2 className="wiki-h2" id="shot-scheme">Shot scheme</h2>
            <div className="wiki-shot-container">
                <div className="wiki-shot-container">
                   <img src={ShotSchemeImage} alt="Shot Scheme" className="wiki-shot-scheme-img-sm" />
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
            <h2 className="wiki-h2" id="fur-variants">Fur variants</h2>
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
            <h2 className="wiki-h2" id="fur-rarity">Fur Variant Rarity</h2>
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
                                Male/<span className="wiki-text-female">Female</span>
                            </td>
                            <td className="wiki-td">
                                Grey Brown (37.46%)<br/>
                                Light Brown (37.46%)<br/>
                                Grey (25.01%)
                            </td>
                            <td className="wiki-td">X</td>
                            <td className="wiki-td">X</td>
                            <td className="wiki-td">
                                Albino (0.03%)<br/>
                                Melanistic (0.03%)
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* TRIVIA */}
            <h2 className="wiki-h2" id="trivia">Trivia</h2>
            <ul className="wiki-ul wiki-ul-disc">
                {triviaData.map((point, idx) => (
                    <li key={idx} className="wiki-mb-10">{point}</li>
                ))}
            </ul>

            {/* REFERENCES */}
            <h2 className="wiki-h2" id="references">References</h2>
            <ol className="wiki-ol-ref">
               {references.map((ref, idx) => (
                  <li key={idx} className="wiki-mb-4">
                     <span className="wiki-link">↑ {ref}</span>
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

export default SideStripedJackal;