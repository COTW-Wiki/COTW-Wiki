import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import DrinkingZoneIcon from '../../../assets/DrinkingZoneIcon.webp';
import class4Icon from '../../../assets/Class4Icon.webp'; // Class 4 for Gredos Ibex
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import GredosIbexMain from '../../../assets/GredosIbex.webp';
import ShotSchemeImg from '../../../assets/Gredos_Ibex_shot_sceme.webp';

// Fur Variant Images (Placeholders based on screenshots)
// Male
import GredosIbex_AlbinoMale from '../../../assets/GredosIbex_AlbinoMale.webp';
import GredosIbex_BrownHybridMale from '../../../assets/GredosIbex_BrownHybridMale.webp';
import GredosIbex_GreyBrownMale from '../../../assets/GredosIbex_GreyBrownMale.webp';
import GredosIbex_GreyMale from '../../../assets/GredosIbex_GreyMale.webp';
import GredosIbex_LightGreyMale from '../../../assets/GredosIbex_LightGreyMale.webp';
import GredosIbex_MelanisticMale from '../../../assets/GredosIbex_MelanisticMale.webp';

// Female
import GredosIbex_AlbinoFemale from '../../../assets/GredosIbex_AlbinoFemale.webp';
import GredosIbex_BuffFemale from '../../../assets/GredosIbex_BuffFemale.webp';
import GredosIbex_LightBrownFemale from '../../../assets/GredosIbex_LightBrownFemale.webp';
import GredosIbex_LightGreyFemale from '../../../assets/GredosIbex_LightGreyFemale.webp';
import GredosIbex_MelanisticFemale from '../../../assets/GredosIbex_MelanisticFemale.webp';


const GredosIbex = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  const needZonesData = [
    {
      name: "Cuatro Colinas Game Reserve",
      schedule: [
        { time: "00:00 - 04:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "04:00 - 07:00", type: "Resting", icon: RestingZoneIcon },
        { time: "07:00 - 10:00", type: "Resting", icon: RestingZoneIcon },
        { time: "10:00 - 14:00", type: "Drinking", icon: DrinkingZoneIcon },
        { time: "14:00 - 17:00", type: "Resting", icon: RestingZoneIcon },
        { time: "17:00 - 21:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "21:00 - 00:00", type: "Resting", icon: RestingZoneIcon },
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
    { label: "Species", value: "Caprac pyrenaica victoriae", italic: true, isLink: true },
    { label: "Difficulty", value: "Average" },
  ];

  // Fur Gallery Data (split by sex)
  const maleGallery = [
    { name: "Albino", src: GredosIbex_AlbinoMale },
    { name: "Brown Hybrid", src: GredosIbex_BrownHybridMale },
    { name: "Grey Brown", src: GredosIbex_GreyBrownMale },
    { name: "Grey", src: GredosIbex_GreyMale },
    { name: "Light Grey", src: GredosIbex_LightGreyMale },
    { name: "Melanistic", src: GredosIbex_MelanisticMale },
  ];

  const femaleGallery = [
    { name: "Albino", src: GredosIbex_AlbinoFemale },
    { name: "Buff", src: GredosIbex_BuffFemale },
    { name: "Light Brown", src: GredosIbex_LightBrownFemale },
    { name: "Light Grey", src: GredosIbex_LightGreyFemale },
    { name: "Melanistic", src: GredosIbex_MelanisticFemale },
  ];

  // Trivia Data (None visible in Gredos specific screenshots, omitting for accuracy)
  const triviaData = [];

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
          <span>Gredos Ibex</span>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Gredos Ibex</div>
            <div className="wiki-sidebar-image">
              <img src={GredosIbexMain} alt="Gredos Ibex" />
            </div>
            
            <div className="wiki-sidebar-header">General Information</div>
            
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Class</span>
              {/* Cited from screenshot 121134/121143 */}
              <span><img src={class4Icon} alt="Class 4" className="wiki-class-icon-lg"/>4</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Difficulty</span>
              {/* Cited from screenshot 121134/121143 */}
              <span>1: Trivial — 5: Medium</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Trophy Type</span>
              <span>Horns</span>
              <div className="wiki-trophy-grid">
                {/* Cited from screenshot 121134/121143 */}
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-silver">◆ Silver</span>
                  <span>54.3</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-gold">☗ Gold</span>
                  <span>80.5</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-diamond">☗ Diamond</span>
                  <span>100.1</span>
                </div>
              </div>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Weight</span>
              {/* Cited from screenshot 121134/121143 */}
              35kg — 102kg<br/>
              <span className="wiki-sidebar-muted">77lbs — 225lbs</span>
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Fur</span>
               {/* Cited from screenshot 121134/121143 */}
               <span className="wiki-fs-sm">
                 Albino, Brown Hybrid, Buff, Gray Brown, Grey, Light Brown, Light Grey, Melanistic
               </span>
            </div>

            <div className="wiki-sidebar-header">Locations</div>
            <div className="wiki-sidebar-section">
               {/* Cited from screenshot 121134/121143 */}
               <div className="wiki-mb-4"><span className="wiki-link">Cuatro Colinas Game Reserve</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main className="wiki-main">

            {/* Quote Block */}
            <div className="wiki-quote">
              "Iberian ibex, also known as the Spanish wild goat or Iberian wild goat, is a specific type of wild goat native to the mountain ranges of Iberia. The Iberian ibex is a stocky, mountainous animal, known for its agility and climbing prowess. They use this ability to escape predators, making them an especially challenging quarry. The second largest of the Iberian ibex, with the largest horns of the four. The Gredos ibex can grow to a significant size, nearing their larger cousin, the Beceite. Gredos males can weigh, just over 102.00 kg at their heaviest, but their true identifying features are their massive lyre-shaped horns, which curve backwards."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-p-mb">
              The <strong>Gredos Ibex</strong> is a <span className="wiki-link">class 4</span> goat. It can be hunted in the <span className="wiki-link">Cuatro Colinas Game Reserve</span>. The Gredos Ibex is one of four types of ibex found in the Cuatro Colinas Game Reserve along the <span className="wiki-link">Ronda Ibex</span>, the <span className="wiki-link">Southeastern Spanish Ibex</span> and the <span className="wiki-link">Beceite Ibex</span>. It is found in the south western quadrant of the reserve.
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
                    <ol style={{marginTop:'6px', marginLeft:'-30px', listStyleType: 'none'}}>
                    <li><a href="#fur-male" onClick={(e)=>scrollToId(e,'fur-male')} className="wiki-link">4.1 Male</a></li>
                    <li><a href="#fur-female" onClick={(e)=>scrollToId(e,'fur-female')} className="wiki-link">4.2 Female</a></li>
                  </ol>
                <li><a href="#variant-rarity" onClick={(e)=>scrollToId(e,'variant-rarity')} className="wiki-link">Fur Variant Rarity</a></li>
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
            <h2 id="need-zones" className="wiki-h2">Need Zone Times</h2>
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
            <h2 id="shot-scheme" className="wiki-h2">Shot scheme</h2>
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

            {/* FUR VARIANTS (Gallery) */}
            <h2 id="fur-variants" className="wiki-h2">Fur Variants</h2>

            <h3 id="fur-male" style={{marginTop:'10px', marginBottom:'8px', color: '#6fb2e6'}}>Male</h3>
            <div className="wiki-gallery-grid">
              {maleGallery.map((item, i) => (
                <div key={i} className="wiki-gallery-item">
                  <div className="wiki-gallery-placeholder">
                    <img src={item.src} alt={item.name} className="wiki-img-contain" />
                  </div>
                  <span className="wiki-gallery-label">{item.name}</span>
                </div>
              ))}
            </div>

            <h3 id="fur-female" className="wiki-h3">Female</h3>
            <div className="wiki-gallery-grid">
              {femaleGallery.map((item, i) => (
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
                                Grey (24.97%)<br/>
                                Light Grey (24.97%)
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

export default GredosIbex;