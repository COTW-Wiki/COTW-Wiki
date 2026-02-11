import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import DrinkingZoneIcon from '../../../assets/DrinkingZoneIcon.webp';
import class4Icon from '../../../assets/Class4Icon.webp'; // Class 4 for Southeastern Spanish Ibex
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import SoutheasternSpanishIbexMain from '../../../assets/SoutheasternSpanishIbex.webp';
import ShotSchemeImg from '../../../assets/Southeastern_Spanish_Ibex_shot_sceme.webp';

// Fur Variant Images (Placeholders based on screenshots)
// Note: The screenshots show a unified gallery for this species rather than split by sex like some others,
// but the rarity table lists distinct rarity percentages for Male/Female.
// I will list the variants shown in the gallery screenshot.
import SoutheasternSpanishIbex_Albino from '../../../assets/SoutheasternSpanishIbex_Albino.webp';
import SoutheasternSpanishIbex_BrownHybrid from '../../../assets/SoutheasternSpanishIbex_BrownHybrid.webp';
import SoutheasternSpanishIbex_Buff from '../../../assets/SoutheasternSpanishIbex_Buff.webp';
import SoutheasternSpanishIbex_GreyBrown from '../../../assets/SoutheasternSpanishIbex_GreyBrown.webp';
import SoutheasternSpanishIbex_LightBrown from '../../../assets/SoutheasternSpanishIbex_LightBrown.webp';
import SoutheasternSpanishIbex_LightGrey from '../../../assets/SoutheasternSpanishIbex_LightGrey.webp';
import SoutheasternSpanishIbex_Melanistic from '../../../assets/SoutheasternSpanishIbex_Melanistic.webp';
import SoutheasternSpanishIbex_Orange from '../../../assets/SoutheasternSpanishIbex_Orange.webp';


const SoutheasternSpanishIbex = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  const needZonesData = [
    {
      name: "Cuatro Colinas Game Reserve",
      schedule: [
        { time: "00:00 - 04:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "04:00 - 07:30", type: "Resting", icon: RestingZoneIcon },
        { time: "07:00 - 10:30", type: "Resting", icon: RestingZoneIcon },
        { time: "10:00 - 14:30", type: "Drinking", icon: DrinkingZoneIcon },
        { time: "14:00 - 17:30", type: "Resting", icon: RestingZoneIcon },
        { time: "17:00 - 21:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "21:00 - 00:30", type: "Resting", icon: RestingZoneIcon },
      ]
    }
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Wary, shy" },
    { label: "Habitat", value: "Rocky terrain, forests, shrublands" },
    { label: "Senses", value: "Excellent sense of vision and hearing, decent sense of smell" },
    { label: "Social", value: "Common herds during rutting season, same-sex groups during the rest of the year" },
    { label: "Active", value: "Dawn to dusk" },
    { label: "Recommended Equipment", value: "Class 4 Ammo" },
    { label: "Species", value: "Caprac pyrenaica hispanica", italic: true, isLink: true },
    { label: "Difficulty", value: "Average" },
  ];

  // Fur Gallery Data
  // Based on the single gallery screenshot provided for this animal.
  const furGallery = [
    { name: "Albino", src: SoutheasternSpanishIbex_Albino },
    { name: "Brown Hybrid", src: SoutheasternSpanishIbex_BrownHybrid },
    { name: "Buff", src: SoutheasternSpanishIbex_Buff },
    { name: "Grey Brown", src: SoutheasternSpanishIbex_GreyBrown },
    { name: "Light Brown", src: SoutheasternSpanishIbex_LightBrown },
    { name: "Light Grey", src: SoutheasternSpanishIbex_LightGrey },
    { name: "Melanistic", src: SoutheasternSpanishIbex_Melanistic },
    { name: "Orange", src: SoutheasternSpanishIbex_Orange },
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
          <span>Southeastern Spanish Ibex</span>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Southeastern Spanish Ibex</div>
            <div className="wiki-sidebar-image">
              <img src={SoutheasternSpanishIbexMain} alt="Southeastern Spanish Ibex" />
            </div>
            
            <div className="wiki-sidebar-header">General Information</div>
            
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Class</span>
              {/* Cited from screenshot 130528 */}
              <span><img src={class4Icon} alt="Class 4" className="inline-block wiki-class-icon-sm align-middle mr-1.5" />4</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Difficulty</span>
              {/* Cited from screenshot 130528 */}
              <span>1: Trivial — 5: Medium</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Trophy Type</span>
              <span>Horns</span>
              <div className="wiki-trophy-grid">
                {/* Cited from screenshot 130528 */}
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-silver">◆ Silver</span>
                  <span>49.7</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-gold">☗ Gold</span>
                  <span>72.5</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-diamond">☗ Diamond</span>
                  <span>89.6</span>
                </div>
              </div>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Weight</span>
              {/* Cited from screenshot 130528 */}
              35kg — 90kg<br/>
              <span className="wiki-sidebar-muted">77lbs — 198lbs</span>
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Fur</span>
               {/* Cited from screenshot 130528 */}
               <span className="wiki-fs-sm">
                 Albino, Brown Hybrid, Buff, Grey-Brown, Light Brown, Light Grey, Melanistic, Orange
               </span>
            </div>

            <div className="wiki-sidebar-header">Locations</div>
            <div className="wiki-sidebar-section">
               {/* Cited from screenshot 130528 */}
               <div className="wiki-mb-4"><span className="wiki-link">Cuatro Colinas Game Reserve</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main className="wiki-main">

            {/* Quote Block */}
            <div className="wiki-quote">
              "Iberian ibex, also known as the Spanish wild goat or Iberian wild goat, is a specific type of wild goat native to the mountain ranges of Iberia. The Iberian ibex is a stocky, mountainous animal, known for its agility and climbing prowess. They use this ability to escape predators, making them an especially challenging quarry. One of the smaller varieties of Iberian ibex, the Southeastern Spanish ibex is less physically daunting than its larger cousins, but that lack of mass makes it an agile, tricky target in its home range. The Southeastern grows to be nearly 90.00 kg, and is identified by its inward-curling horns that resemble a sheep's. Their fur coloration is brighter than most other Iberian ibex."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-p-mb">
              The <strong>Southeastern Spanish Ibex</strong> is a <span className="wiki-link">class 4</span> goat. It can be hunted in the <span className="wiki-link">Cuatro Colinas Game Reserve</span>. The Southeastern Spanish Ibex is one of four types of ibex found in the Cuatro Colinas Game Reserve along the <span className="wiki-link">Ronda Ibex</span>, the <span className="wiki-link">Beceite Ibex</span> and the <span className="wiki-link">Gredos Ibex</span>. It is found in the south eastern quadrant of the reserve.
            </p>

            {/* Table of Contents */}
            <div className="wiki-toc">
              <div className="wiki-toc-title">
                🔢 Contents <span className="wiki-toc-toggle">[hide]</span>
              </div>
              <ol className="wiki-toc">
                <li><a href="#features" onClick={(e)=>scrollToId(e,'features')} className="wiki-link">Features</a></li>
                <li><a href="#need-zones" onClick={(e)=>scrollToId(e,'need-zones')} className="wiki-link">Need Zone Times</a></li>
                <li><a href="#shot-scheme" onClick={(e)=>scrollToId(e,'shot-scheme')} className="wiki-link">Shot scheme</a></li>
                <li><a href="#fur-variants" onClick={(e)=>scrollToId(e,'fur-variants')} className="wiki-link">Fur Variants</a></li>
                <li><a href="#variant-rarity" onClick={(e)=>scrollToId(e,'variant-rarity')} className="wiki-link">Fur Variant Rarity</a></li>
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
                        <tr><th colSpan="2" className="wiki-th wiki-th-center">Cuatro Colinas Game Reserve</th></tr>
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
                 <img src={ShotSchemeImg} alt="Shot Scheme" className="wiki-shot-scheme-img-sm" />
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
            <h2 className="wiki-h2" id="fur-variants">Fur Variants</h2>

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
            <h2 className="wiki-h2" id="variant-rarity">Fur Variant Rarity</h2>
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
                        {/* Male Row */}
                        <tr>
                            <td className="wiki-td wiki-td-muted">
                                Male
                            </td>
                            <td className="wiki-td">
                                Brown Hybrid (24.97%)<br/>
                                Grey Brown (24.97%)<br/>
                                Light Grey (24.97%)<br/>
                                Orange (24.97%)
                            </td>
                            <td className="wiki-td">
                                X
                            </td>
                            <td className="wiki-td">
                                X
                            </td>
                            <td className="wiki-td">
                                Albino (0.05%)<br/>
                                Melanistic (0.05%)
                            </td>
                        </tr>
                        {/* Female Row */}
                        <tr>
                            <td className="wiki-td wiki-td-female">
                                Female
                            </td>
                            <td className="wiki-td">
                                Buff (33.29%)<br/>
                                Light Brown (33.29%)<br/>
                                Light Grey (33.29%)
                            </td>
                            <td className="wiki-td">
                                X
                            </td>
                            <td className="wiki-td">
                                X
                            </td>
                            <td className="wiki-td">
                                Albino (0.07%)<br/>
                                Melanistic (0.07%)
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="wiki-mt-40">
                <AnimalsTableMini />
            </div>
            
          </main>
        </div>
      </div>
    </div>
  );
};

export default SoutheasternSpanishIbex;