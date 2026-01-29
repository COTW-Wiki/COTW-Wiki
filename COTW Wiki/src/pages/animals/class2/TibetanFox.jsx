import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import DrinkingZoneIcon from '../../../assets/DrinkingZoneIcon.webp';
import class2Icon from '../../../assets/Class2Icon.webp'; // Class 2 for Tibetan Fox
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import TibetanFoxMain from '../../../assets/Tibetan_Fox.webp';
import ShotSchemeImage from '../../../assets/Tibetan_Fox_shot_scheme.webp';

// Fur Variant Images (Placeholders)
import TibetanFox_Albino from '../../../assets/TibetanFox_Albino.webp';
import TibetanFox_Grey from '../../../assets/TibetanFox_Grey.webp';
import TibetanFox_Leucistic from '../../../assets/TibetanFox_Leucistic.webp';
import TibetanFox_Melanistic from '../../../assets/TibetanFox_Melanistic.webp';
import TibetanFox_Orange from '../../../assets/TibetanFox_Orange.webp';
import TibetanFox_Red from '../../../assets/TibetanFox_Red.webp';
import TibetanFox_Sand from '../../../assets/TibetanFox_Sand.webp';
import TibetanFox_Smoke from '../../../assets/TibetanFox_Smoke.webp';
import TibetanFox_Tawny from '../../../assets/TibetanFox_Tawny.webp';


const TibetanFox = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  const needZonesData = [
    {
      name: "Sundarpatan",
      schedule: [
        { time: "00:00 - 03:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "03:00 - 06:00", type: "Resting", icon: RestingZoneIcon },
        { time: "06:00 - 09:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "09:00 - 13:00", type: "Resting", icon: RestingZoneIcon },
        { time: "13:00 - 17:00", type: "Resting", icon: RestingZoneIcon },
        { time: "17:00 - 20:00", type: "Drinking", icon: DrinkingZoneIcon },
        { time: "20:00 - 00:00", type: "Feeding", icon: FeedingZoneIcon },
      ]
    }
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Not territorial. Often, several pairs will share hunting grounds" },
    { label: "Habitat", value: "High altitude grassland plains and treeless slopes" },
    { label: "Senses", value: "Very keen sense of hearing, vision and smell" },
    { label: "Social", value: "Monogamous, usually live and hunt in mated pairs. Sometimes solitary" },
    { label: "Active", value: "Both nocturnal and daytime hunters" },
    { label: "Recommended Equipment", value: "Class 2 Ammo, Predator \"Jackrabbit\" Caller" },
    { label: "Species", value: "Vulpes ferrilata", italic: true, isLink: true },
    { label: "Difficulty", value: "Average" },
  ];

  // Fur Gallery Data
  const furGallery = [
    { name: "Albino", src: TibetanFox_Albino },
    { name: "Grey", src: TibetanFox_Grey },
    { name: "Leucistic", src: TibetanFox_Leucistic },
    { name: "Melanistic", src: TibetanFox_Melanistic },
    { name: "Orange", src: TibetanFox_Orange },
    { name: "Red", src: TibetanFox_Red },
    { name: "Sand", src: TibetanFox_Sand },
    { name: "Smoke", src: TibetanFox_Smoke },
    { name: "Tawny", src: TibetanFox_Tawny },
  ];

  // Tips Data
  const tipsData = [
    "Tibetan Foxes live in monogamous pairs, and mate for life. In a gameplay context, that means that if you kill a single fox in a pair, that one fox wont respawn unless you kill both of them. So whenever you are grinding for foxes, try to always kill the male and female in a pair, even if you are just grinding for the males or just the females."
  ];

  // Trivia Data
  const triviaData = [
    "Sir David Attenborough once said, \"[the Tibetan Fox is] the most wonderful looking fox\". That would be an understatement. But it's face isn't just a birth defect. This fox lives in extreme altitudes of up to 5km (3ish miles) above sea level. [..possibly making them the only canid in the world living at such altitudes] And the Tibetan Fox's unique face is specifically evolved for surviving in such harsh environments. Its \"large cheeks\" are just extra dense fur insulating its face. Its small eyes and nose are designed to be as small as possible in order to mitigate heat loss. And the same can be said for its relatively small ears, which also help with heat loss.",
    "The Tibetan Fox is also called the \"Sand Fox\""
  ];

  // References List
  const references = [
    "Tibetan Fox Need Zones, Sundarpatan",
    "https://www.canids.org/species/view/PREKMF443401",
    "https://www.youtube.com/watch?v=MF4dIqbcoQ0",
    "https://www.youtube.com/watch?v=Ere2Sv0HMcA"
  ];

  // Smooth scroll helper for TOC links
  const scrollToId = (id) => (e) => {
    if (e && e.preventDefault) e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    try { window.history.replaceState(null, '', `#${id}`); } catch (err) {}
  };

  return (
    <div className="wiki-page">
      <div className="wiki-inner">
        
        {/* PAGE HEADER */}
        <div className="wiki-header">
          <span>Tibetan Fox</span>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Tibetan Fox</div>
            <div className="wiki-sidebar-image">
              <img src={TibetanFoxMain} alt="Tibetan Fox" />
            </div>
            
            <div className="wiki-sidebar-header">General Information</div>
            
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Class</span>
              <span><img src={class2Icon} alt="Class 2" className="wiki-class-icon-lg"/>2</span>
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
                  <span>3.36</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-gold">☗ Gold</span>
                  <span>5.08</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-diamond">☗ Diamond</span>
                  <span>6.37</span>
                </div>
              </div>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Weight</span>
              0kg — 6kg<br/>
              <span className="wiki-sidebar-muted">0lbs — 13lbs</span>
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Fur</span>
               <span className="wiki-fs-sm">
                  Albino, Grey, Leucistic, Melanistic, Orange, Red, Sand, Smoke, Tawny
               </span>
            </div>

            <div className="wiki-sidebar-header">Locations</div>
            <div className="wiki-sidebar-section">
               <div className="wiki-mb-4"><span className="wiki-link">Sundarpatan</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main className="wiki-main">

            {/* Quote Block */}
            <div className="wiki-quote">
              "The Tibetan Fox is a smaller breed of fox that lives in the high-altitude grassland plains of the Tibetan Plateau. It is best known for its uniquely square-shaped face and small triangular ears, which are believed to help it navigate through strong winds and locate danger. The combination of the yellowish and gray color of their coat helps them camouflage easily in the vegetation of their arid, rocky, and semi-desert environment. During the first mating season after their birth, these foxes will pair up into monogamous units. Then, the fox couples will wander the plateau for the rest of their lives."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-p-mb">
              The <strong>Tibetan Fox</strong> is a (<span className="wiki-link">class 2</span>) fox species that can be hunted on <span className="wiki-link">Sundarpatan</span>.
            </p>

            {/* Table of Contents */}
            <div className="wiki-toc">
              <div className="wiki-toc-title">
                🔢 Contents <span className="wiki-toc-toggle">[hide]</span>
              </div>
              <ol className="wiki-toc">
                <li><a href="#features" onClick={scrollToId('features')} className="wiki-link">Features</a></li>
                <li><a href="#tips" onClick={scrollToId('tips')} className="wiki-link">Tips</a></li>
                <li><a href="#need-zones" onClick={scrollToId('need-zones')} className="wiki-link">Need Zone Times</a></li>
                <li><a href="#shot-scheme" onClick={scrollToId('shot-scheme')} className="wiki-link">Shot scheme</a></li>
                <li><a href="#fur-variants" onClick={scrollToId('fur-variants')} className="wiki-link">Fur Variants</a></li>
                <li><a href="#fur-variant-rarity" onClick={scrollToId('fur-variant-rarity')} className="wiki-link">Fur Variant Rarity</a></li>
                <li><a href="#trivia" onClick={scrollToId('trivia')} className="wiki-link">Trivia</a></li>
                <li><a href="#references" onClick={scrollToId('references')} className="wiki-link">References</a></li>
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

            {/* TIPS */}
            <h2 id="tips" className="wiki-h2">Tips</h2>
            {tipsData.map((tip, idx) => (
                <p key={idx} className="wiki-mb-15"><span style={{fontWeight: 'bold'}}>Tibetan Foxes</span> {tip.substring(13)}</p>
            ))}
            
            {/* NEED ZONE TIMES */}
            <h2 id="need-zones" className="wiki-h2">Need Zone Times</h2>
            <div className="wiki-inline-block">
                <table className="wiki-table wiki-table-fixed">
                    <thead>
                        <tr><th colSpan="2" className="wiki-th wiki-th-center">Sundarpatan</th></tr>
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
                                Male/<span className="wiki-text-female">Female</span>
                            </td>
                            <td className="wiki-td">
                                Orange (37.35%)<br/>
                                Red (37.35%)<br/>
                                Grey (12.50%)<br/>
                                Tawny (12.50%)
                            </td>
                            <td className="wiki-td">X</td>
                            <td className="wiki-td">
                                Sand (0.10%)<br/>
                                Smoke (0.10%)
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

export default TibetanFox;