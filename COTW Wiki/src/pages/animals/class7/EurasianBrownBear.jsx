import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import DrinkingZoneIcon from '../../../assets/DrinkingZoneIcon.webp';
import class7Icon from '../../../assets/Class7Icon.webp'; // Class 7 for Eurasian Brown Bear
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import EurasianBrownBearMain from '../../../assets/Bear.webp';
import ShotSchemeImg from '../../../assets/Brown_bear_shot_scheme.webp';

// Fur Variant Images
import EurasianBrownBear_Albino from '../../../assets/EurasianBrownBear_Albino.webp';
import EurasianBrownBear_Blonde from '../../../assets/EurasianBrownBear_Blonde.webp';
import EurasianBrownBear_Cinnamon from '../../../assets/EurasianBrownBear_Cinnamon.webp';
import EurasianBrownBear_DarkBrown from '../../../assets/EurasianBrownBear_DarkBrown.webp';
import EurasianBrownBear_Gold from '../../../assets/EurasianBrownBear_Gold.webp';
import EurasianBrownBear_Grey from '../../../assets/EurasianBrownBear_Grey.webp';
import EurasianBrownBear_LightBrown from '../../../assets/EurasianBrownBear_LightBrown.webp';
import EurasianBrownBear_Melanistic from '../../../assets/EurasianBrownBear_Melanistic.webp';
import EurasianBrownBear_RedBrown from '../../../assets/EurasianBrownBear_RedBrown.webp';
import EurasianBrownBear_Spirit from '../../../assets/EurasianBrownBear_Spirit.webp';


const EurasianBrownBear = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  const needZonesData = [
    {
      name: "Medved-Taiga & Revontuli Coast",
      schedule: [
        { time: "00:00 - 04:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "04:00 - 08:30", type: "Drinking", icon: DrinkingZoneIcon },
        { time: "08:00 - 12:30", type: "Resting", icon: RestingZoneIcon },
        { time: "12:00 - 16:30", type: "Resting", icon: RestingZoneIcon },
        { time: "16:00 - 20:30", type: "Resting", icon: RestingZoneIcon },
        { time: "20:00 - 00:30", type: "Feeding", icon: FeedingZoneIcon },
      ]
    }
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Skittish and ocassionally aggressive." },
    { label: "Habitat", value: "Prefer forests and mountainous terrain" },
    { label: "Senses", value: "Very good sense of smell" },
    { label: "Social", value: "Mostly Solitary" },
    { label: "Active", value: "During night" },
    { label: "Recommended Equipment", value: "Class 7 Ammo, Predator \"Distressed Fawn\" Caller" },
    { label: "Species", value: "Ursus arctos", italic: true, isLink: true },
    { label: "Difficulty", value: "Hard" },
  ];

  // Fur Gallery Data
  const furGallery = [
    { name: "Albino", src: EurasianBrownBear_Albino },
    { name: "Blonde", src: EurasianBrownBear_Blonde },
    { name: "Cinnamon", src: EurasianBrownBear_Cinnamon },
    { name: "Dark Brown", src: EurasianBrownBear_DarkBrown },
    { name: "Gold", src: EurasianBrownBear_Gold },
    { name: "Grey", src: EurasianBrownBear_Grey },
    { name: "Light Brown", src: EurasianBrownBear_LightBrown },
    { name: "Melanistic", src: EurasianBrownBear_Melanistic },
    { name: "Red Brown", src: EurasianBrownBear_RedBrown },
    { name: "Spirit", src: EurasianBrownBear_Spirit },
  ];

  // Trivia Data
  const triviaData = [
    "The Eurasian Brown Bear gets its scientific name from the Latin word for bear Ursus and the Greek word for bear ἄρκτος-arktos",
    "Medved (медведь) is \"Bear\" in Russian.",
    "It was the second bear species to be added to the game after the Black Bear.",
    "The Eurasian Brown Bear is the official animal of Finland, and it is an animal with great importance to Finnish tradition and folklore. Some parts of Ancient Finland even worshiped Bears as deities.",
    "The Eurasian Brown Bear models and fur textures changed after the Revontuli Coast Update (see above gallery for context)"
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
          <span>Eurasian Brown Bear</span>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Eurasian Brown Bear</div>
            <div className="wiki-sidebar-image">
              <img src={EurasianBrownBearMain} alt="Eurasian Brown Bear" />
            </div>
            
            <div className="wiki-sidebar-header">General Information</div>
            
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Class</span>
              <span><img src={class7Icon} alt="Class 7" className="wiki-class-icon-lg"/>7</span>
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
                  <span>18.6</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-gold">☗ Gold</span>
                  <span>23.8</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-diamond">☗ Diamond</span>
                  <span>27.7</span>
                </div>
              </div>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Weight</span>
              110kg — 482kg<br/>
              <span className="wiki-sidebar-muted">243lbs — 1063lbs</span>
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Fur</span>
               <span className="wiki-fs-sm">
                 Albino, Blond, Cinnamon, Dark Brown, Gold, Grey, Light Brown, Melanistic, Red-Brown, Spirit
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
              "The brown bear is a large bear that can be found across much of northern Eurasia and North America. It is one of the two largest carnivorans alive today, rivaled in body size only by its close cousin, the polar bear. Brown bears have long, thick fur, that comes in many color variations. A typical male weighs between 195.00 kg to 482.00 kg, while the females are smaller and range, between 110.00 kg to 340.00 kg. Hunting brown bears requires patience, stealth, and a high degree of marksmanship. Brown bears have great physical strength, a keen sense of smell and are likely to attack a hunter when cornered. Brown bears are omnivores and can be found in most areas, although they prefer mountainous terrain."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-p-mb">
              The <strong>Eurasian Brown Bear</strong> is a large predator (<span className="wiki-link">class 7</span>). It can be hunted at <span className="wiki-link">Medved-Taiga National Park</span> and <span className="wiki-link">Revontuli Coast</span>. It is one of two Brown Bear species in the game. The other is the <span className="wiki-link">Grizzly Bear</span>.
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
                <li><a href="#fur-variants" onClick={(e)=>scrollToId(e,'fur-variants')} className="wiki-link">Fur Variants</a></li>
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
                <div style={{marginBottom:'10px', fontStyle:'italic', color:'#88a0b8'}}>Need zone times are identical on both Medved Taiga National Park and Revontuli Coast.</div>
                <table className="wiki-table wiki-table-fixed">
                    <thead>
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
                                Cinnamon (24.90%)<br/>
                                Light Brown (24.90%)<br/>
                                Red Brown (24.90%)
                            </td>
                            <td className="wiki-td">
                                Blonde (5.00%)<br/>
                                Dark Brown (5.00%)<br/>
                                Gold (5.00%)<br/>
                                Grey (5.00%)<br/>
                                Spirit (5.00%)
                            </td>
                            <td className="wiki-td">
                                Melanistic (0.20%)<br/>
                                Albino (0.10%)
                            </td>
                            <td className="wiki-td">
                                X
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

export default EurasianBrownBear;