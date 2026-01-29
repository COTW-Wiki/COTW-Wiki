import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import DrinkingZoneIcon from '../../../assets/DrinkingZoneIcon.webp';
import class4Icon from '../../../assets/Class4Icon.webp'; // Class 4 for Beceite Ibex
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import BeceiteIbexMain from '../../../assets/BeceiteIbex.webp';
import ShotSchemeImg from '../../../assets/Beceite_Ibex_shot_sceme.webp';   

// Fur Variant Images (Placeholders based on screenshots)
// Male
import BeceiteIbex_AlbinoMale from '../../../assets/BeceiteIbex_AlbinoMale.webp';
import BeceiteIbex_BrownHybridMale from '../../../assets/BeceiteIbex_BrownHybridMale.webp';
import BeceiteIbex_GreyBrownMale from '../../../assets/BeceiteIbex_GreyBrownMale.webp';
import BeceiteIbex_GreyMale from '../../../assets/BeceiteIbex_GreyMale.webp';
import BeceiteIbex_MelanisticMale from '../../../assets/BeceiteIbex_MelanisticMale.webp';
import BeceiteIbex_OrangeMale from '../../../assets/BeceiteIbex_OrangeMale.webp';

// Female
import BeceiteIbex_AlbinoFemale from '../../../assets/BeceiteIbex_AlbinoFemale.webp';
import BeceiteIbex_BuffFemale from '../../../assets/BeceiteIbex_BuffFemale.webp';
import BeceiteIbex_GreyBrownFemale from '../../../assets/BeceiteIbex_GreyBrownFemale.webp';
import BeceiteIbex_LightBrownFemale from '../../../assets/BeceiteIbex_LightBrownFemale.webp';
import BeceiteIbex_MelanisticFemale from '../../../assets/BeceiteIbex_MelanisticFemale.webp';


const BeceiteIbex = () => {

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

  // Fur Gallery Data (split by sex)
  const maleGallery = [
    { name: "Albino", src: BeceiteIbex_AlbinoMale },
    { name: "Brown Hybrid", src: BeceiteIbex_BrownHybridMale },
    { name: "Grey Brown", src: BeceiteIbex_GreyBrownMale },
    { name: "Grey", src: BeceiteIbex_GreyMale },
    { name: "Melanistic", src: BeceiteIbex_MelanisticMale },
    { name: "Orange", src: BeceiteIbex_OrangeMale },
  ];

  const femaleGallery = [
    { name: "Albino", src: BeceiteIbex_AlbinoFemale },
    { name: "Buff", src: BeceiteIbex_BuffFemale },
    { name: "Grey Brown", src: BeceiteIbex_GreyBrownFemale },
    { name: "Light Brown", src: BeceiteIbex_LightBrownFemale },
    { name: "Melanistic", src: BeceiteIbex_MelanisticFemale },
  ];

  // Trivia Data
  const triviaData = [
    "The Beceite Ibex is named after the \"Beceite Mountains\" which it is native to.",
    "It is also called Southeastern Iberian ibex, Southeastern Spanish ibex or just Spanish ibex."
  ];
  
  // Tips Data
  const tipsData = [
    "If you are first spawning into Cuatro Colinas, you can find them living on and around the first mountain east of your position.",
    "Because Ibex don't have any callers or scents, hunting them requires either a lot of stalking, or hunting their need zones.",
    "Also use their agility against them. It is possible to force them up the sheer cliff next to Torre De Doña Emilia lookout point. If you can force them up the cliff you can potentially kill entire herds."
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
          <span>Beceite Ibex</span>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Beceite Ibex</div>
            <div className="wiki-sidebar-image">
              <img src={BeceiteIbexMain} alt="Beceite Ibex" />
            </div>
            
            <div className="wiki-sidebar-header">General Information</div>
            
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Class</span>
              {/* Cited from screenshot 1 */}
              <span><img src={class4Icon} alt="Class 4" className="wiki-class-icon-lg"/>4</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Difficulty</span>
              {/* Cited from screenshot 1 */}
              <span>1: Trivial — 5: Medium</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Trophy Type</span>
              <span>Horns</span>
              <div className="wiki-trophy-grid">
                {/* Cited from screenshot 1 */}
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-silver">◆ Silver</span>
                  <span>78.00</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-gold">☗ Gold</span>
                  <span>142.90</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-diamond">☗ Diamond</span>
                  <span>191.60</span>
                </div>
              </div>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Weight</span>
              {/* Cited from screenshot 1 */}
              35kg — 110kg<br/>
              <span className="wiki-sidebar-muted">77lbs — 243lbs</span>
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Fur</span>
               {/* Cited from screenshot 1 */}
               <span className="wiki-fs-sm">
                 Albino, Brown Hybrid, Buff, Grey, Grey-Brown, Light Brown, Melanistic, Orange
               </span>
            </div>

            <div className="wiki-sidebar-header">Locations</div>
            <div className="wiki-sidebar-section">
               {/* Cited from screenshot 1 */}
               <div className="wiki-mb-4"><span className="wiki-link">Cuatro Colinas Game Reserve</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main className="wiki-main">

            {/* Quote Block */}
            <div className="wiki-quote">
              "Iberian ibex, also known as the Spanish wild goat or Iberian wild goat, is a specific type of wild goat native to the mountain ranges of Iberia. The Iberian ibex is a stocky, mountainous animal, known for its agility and climbing prowess. They use this ability to escape predators, making them an especially challenging quarry. The largest huntable variety of Iberian ibex, the Beceite, has the second largest horns of the four, which can grow over 0.75 m in length. They weigh the most of the Iberian ibex subspecies, with males approaching up to 110.00 kg. The Beceite can be easily identified by their size and the curvature of their horns, which leans towards an outward configuration, making crescent shapes."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-p-mb">
              The <strong>Beceite Ibex</strong> is a <span className="wiki-link">class 4</span> goat. It can be hunted in the <span className="wiki-link">Cuatro Colinas Game Reserve</span>. It is found in the north western quadrant of the reserve.
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
                <li><a href="#tips" onClick={(e)=>scrollToId(e,'tips')} className="wiki-link">Tips</a></li>
                <li><a href="#fur-variants" onClick={(e)=>scrollToId(e,'fur-variants')} className="wiki-link">Fur Variants</a></li>
                    <ol style={{marginTop:'6px', marginLeft:'-30px', listStyleType: 'none'}}>
                    <li><a href="#fur-male" onClick={(e)=>scrollToId(e,'fur-male')} className="wiki-link">5.1 Male</a></li>
                    <li><a href="#fur-female" onClick={(e)=>scrollToId(e,'fur-female')} className="wiki-link">5.2 Female</a></li>
                  </ol>
                <li><a href="#variant-rarity" onClick={(e)=>scrollToId(e,'variant-rarity')} className="wiki-link">Fur Variant Rarity</a></li>
                <li><a href="#trivia" onClick={(e)=>scrollToId(e,'trivia')} className="wiki-link">Trivia</a></li>
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

            {/* TIPS */}
            <h2 id="tips" className="wiki-h2">Tips</h2>
             <ul className="wiki-ul wiki-ul-disc">
                {tipsData.map((tip, idx) => (
                    <li key={idx} className="wiki-mb-10">{tip}</li>
                ))}
            </ul>

            {/* FUR VARIANTS (Gallery) */}
            <h2 className="wiki-h2">Fur Variants</h2>

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
            <h2 className="wiki-h2">Fur Variant Rarity</h2>
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
                                Grey (24.97%)<br/>
                                Grey Brown (24.97%)<br/>
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
                                Buff (36.32%)<br/>
                                Light Brown (36.32%)<br/>
                                Grey Brown (27.24%)
                            </td>
                            <td className="wiki-td">
                                X
                            </td>
                            <td className="wiki-td">
                                X
                            </td>
                            <td className="wiki-td">
                                Albino (0.06%)<br/>
                                Melanistic (0.06%)
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* TRIVIA */}
            <h2 className="wiki-h2">Trivia</h2>
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

export default BeceiteIbex;