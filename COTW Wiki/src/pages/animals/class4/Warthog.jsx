import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import DrinkingZoneIcon from '../../../assets/DrinkingZoneIcon.webp';
import class4Icon from '../../../assets/Class4Icon.webp'; // Class 4 for Warthog
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import WarthogMain from '../../../assets/Warthog.webp';
import ShotSchemeImg from '../../../assets/Warthog_shot_scheme.webp';

// Fur Variant Images (Placeholders based on screenshots)
// Male
import Warthog_AlbinoMale from '../../../assets/Warthog_AlbinoMale.webp';
import Warthog_DarkMale from '../../../assets/Warthog_DarkMale.webp';
import Warthog_GreyMale from '../../../assets/Warthog_GreyMale.webp';
import Warthog_RedBrownMale from '../../../assets/Warthog_RedBrownMale.webp';

// Female
import Warthog_AlbinoFemale from '../../../assets/Warthog_AlbinoFemale.webp';
import Warthog_DarkFemale from '../../../assets/Warthog_DarkFemale.webp';
import Warthog_GreyFemale from '../../../assets/Warthog_GreyFemale.webp';
import Warthog_RedBrownFemale from '../../../assets/Warthog_RedBrownFemale.webp';
import Warthog_RedFemale from '../../../assets/Warthog_RedFemale.webp';


const Warthog = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  const needZonesData = [
    {
      name: "Vurhonga Savanna",
      schedule: [
        { time: "00:00 - 03:30", type: "Resting", icon: RestingZoneIcon },
        { time: "03:00 - 06:30", type: "Resting", icon: RestingZoneIcon },
        { time: "06:00 - 09:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "09:00 - 12:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "12:00 - 15:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "15:00 - 18:30", type: "Drinking", icon: DrinkingZoneIcon },
        { time: "18:00 - 21:30", type: "Resting", icon: RestingZoneIcon },
        { time: "21:00 - 00:30", type: "Resting", icon: RestingZoneIcon },
      ]
    }
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Skittish and occasionally defensive" },
    { label: "Habitat", value: "Grasslands, Savannah, Woodlands" },
    { label: "Senses", value: "Poor eyesight, excellent smell, and hearing" },
    { label: "Social", value: "Males prefer solitude, while females prefer larger groups (Males do integrate during mating season)" },
    { label: "Active", value: "Exclusively daylight hours" },
    { label: "Recommended Equipment", value: "Class 4 Ammo, Wild Boar Caller" },
    { label: "Species", value: "Phacochoerus africanus", italic: true, isLink: true },
    { label: "Difficulty", value: "Average" },
  ];

  // Fur Gallery Data (split by sex)
  const maleGallery = [
    { name: "Albino", src: Warthog_AlbinoMale },
    { name: "Dark", src: Warthog_DarkMale },
    { name: "Grey", src: Warthog_GreyMale },
    { name: "Red Brown", src: Warthog_RedBrownMale },
  ];

  const femaleGallery = [
    { name: "Albino", src: Warthog_AlbinoFemale },
    { name: "Dark", src: Warthog_DarkFemale },
    { name: "Grey", src: Warthog_GreyFemale },
    { name: "Red Brown", src: Warthog_RedBrownFemale },
    { name: "Red", src: Warthog_RedFemale },
  ];

  // Trivia Data
  const triviaData = [
    "In French, this animal is called \"Phacochère\""
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
          <span>Warthog</span>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Warthog</div>
            <div className="wiki-sidebar-image">
              <img src={WarthogMain} alt="Warthog" />
            </div>
            
            <div className="wiki-sidebar-header">General Information</div>
            
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Class</span>
              {/* Cited from screenshot 212924 */}
              <span><img src={class4Icon} alt="Class 4" className="inline-block wiki-class-icon-sm align-middle mr-1.5" />4</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Difficulty</span>
              {/* Cited from screenshot 212924 */}
              <span>1: Trivial — 5: Medium</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Trophy Type</span>
              <span>Tusks</span>
              <div className="wiki-trophy-grid">
                {/* Cited from screenshot 212924 */}
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-silver">◆ Silver</span>
                  <span>24.6</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-gold">☗ Gold</span>
                  <span>49.8</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-diamond">☗ Diamond</span>
                  <span>58.2</span>
                </div>
              </div>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Weight</span>
              {/* Cited from screenshot 212924 */}
              45kg — 150kg<br/>
              <span className="wiki-sidebar-muted">99lbs — 331lbs</span>
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Fur</span>
               {/* Cited from screenshot 212924 */}
               <span className="wiki-fs-sm">
                 Albino, Dark, Grey, Red Brown, Red
               </span>
            </div>

            <div className="wiki-sidebar-header">Locations</div>
            <div className="wiki-sidebar-section">
               {/* Cited from screenshot 212924 */}
               <div className="wiki-mb-4"><span className="wiki-link">Vurhonga Savanna</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main className="wiki-main">

            {/* Quote Block */}
            <div className="wiki-quote">
              "The warthog is a member of the swine family, and is related to pigs, boars and hogs. Ironically, the thick growths of skin on the warthog's face aren't warts at all, but patches that act as padding for when males battle each other for a mate. The female warthog, called a sow, is a social animal and lives in groups called sounders, with up to 40 members. Males on the other hand are often solitary and territorial. Warthogs stand up to 0.85 m tall and can be nearly 1.50 m cm in length. They have large upper tusks that can extend to 0.63 m at their largest. Being one of the most heavily preyed upon animals in Africa, they keep these tusks in constant use, fighting for survival, as well as the right to mate."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-p-mb">
              The <strong>Warthog</strong> is a class 4 animal. It can be hunted in the <span className="wiki-link">Vurhonga Savanna Reserve</span>.
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
                                Grey (37.46%)<br/>
                                Dark (37.46%)<br/>
                                Red Brown (25.00%)
                            </td>
                            <td className="wiki-td">
                                X
                            </td>
                            <td className="wiki-td">
                                X
                            </td>
                            <td className="wiki-td">
                                Albino (0.08%)
                            </td>
                        </tr>
                        {/* Female Row */}
                        <tr>
                            <td className="wiki-td wiki-td-female">
                                Female
                            </td>
                            <td className="wiki-td">
                                Grey (37.44%)<br/>
                                Dark (37.44%)<br/>
                                Red Brown (24.99%)
                            </td>
                            <td className="wiki-td">
                                X
                            </td>
                            <td className="wiki-td">
                                X
                            </td>
                            <td className="wiki-td">
                                Albino (0.08%)<br/>
                                Red (0.05%)
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

            <div className="wiki-mt-40">
                <AnimalsTableMini />
            </div>
            
          </main>
        </div>
      </div>
    </div>
  );
};

export default Warthog;