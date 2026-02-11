import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import class1Icon from '../../../assets/Class1Icon.webp';
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import EuropeanHareMain from '../../../assets/EuropeanHare.webp';

// Shot Scheme
import EuropeanHareShot from '../../../assets/Scrub_hare_shot_scheme.webp';

// Fur Variant Images
import EuropeanHare_Albino from '../../../assets/EuropeanHare_Albino.webp';
import EuropeanHare_Brown from '../../../assets/EuropeanHare_Brown.webp';
import EuropeanHare_DarkBrown from '../../../assets/EuropeanHare_DarkBrown.webp';
import EuropeanHare_Grey from '../../../assets/EuropeanHare_Grey.webp';
import EuropeanHare_LightBrown from '../../../assets/EuropeanHare_LightBrown.webp';
import EuropeanHare_Melanistic from '../../../assets/EuropeanHare_Melanistic.webp';


const EuropeanHare = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  // Source: Екранна снимка 2026-01-16 155649.png

  // Smooth-scroll helper for TOC links
  const scrollToId = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (window && history && history.replaceState) history.replaceState(null, '', `#${id}`);
  };
  const needZonesData = [
    {
      name: "Cuatro Colinas Game Reserve",
      schedule: [
        { time: "00:00 - 03:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "03:00 - 06:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "06:00 - 09:30", type: "Resting", icon: RestingZoneIcon },
        { time: "09:00 - 12:30", type: "Resting", icon: RestingZoneIcon },
        { time: "12:00 - 15:30", type: "Resting", icon: RestingZoneIcon },
        { time: "15:00 - 18:30", type: "Resting", icon: RestingZoneIcon },
        { time: "18:00 - 21:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "21:00 - 00:30", type: "Feeding", icon: FeedingZoneIcon },
      ]
    }
  ];

  // Features Table
  // Source: Екранна снимка 2026-01-16 155643.png
  const features = [
    { label: "Behavior", value: "Social, easily frightened" },
    { label: "Habitat", value: "Farmland, grassland, woodland" },
    { label: "Senses", value: "Very good senses of sight and hearing, decent sense of smell" },
    { label: "Social", value: "Prefers solitude but feeds in herds for protection" },
    { label: "Active", value: "Night and dusk" },
    { label: "Recommended Equipment", value: "Class 1 Ammo" },
    { label: "Species", value: "Lepus europaeus", italic: true, isLink: true },
    { label: "Difficulty", value: "Easy" },
  ];

  // Fur Gallery Data
  // Source: Екранна снимка 2026-01-16 155703.jpg
  const furGallery = [
    { name: "Albino", src: EuropeanHare_Albino },
    { name: "Brown", src: EuropeanHare_Brown },
    { name: "Dark Brown", src: EuropeanHare_DarkBrown },
    { name: "Grey", src: EuropeanHare_Grey },
    { name: "Light Brown", src: EuropeanHare_LightBrown },
    { name: "Melanistic", src: EuropeanHare_Melanistic },
  ];

  // References List
  // Source: Екранна снимка 2026-01-16 155710.jpg
  const references = [
    "https://www.visitingvienna.com/sights/museums/durer-hare/"
  ];

  return (
    <div className="wiki-page">
      <div className="wiki-inner">
        
        {/* PAGE HEADER */}
        <div className="wiki-header">
          <span>European Hare</span>
          <div className="wiki-edit-actions">
          </div>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">European Hare</div>
            <div className="wiki-sidebar-image">
              <img src={EuropeanHareMain} alt="European Hare" />
            </div>
            
            <div className="wiki-sidebar-header">General Information</div>
            
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Class</span>
              <span><img src={class1Icon} alt="Class 1" className="inline-block wiki-class-icon-sm align-middle mr-1.5"/>1</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Difficulty</span>
              <span>1: Trivial — 3: Very Easy</span>
            </div>

            {/* Trophy Type */}
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Trophy Type</span>
              <span>Weight</span>
              <div className="wiki-trophy-grid">
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-silver">◆ Silver</span>
                  <span>3</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-gold">☗ Gold</span>
                  <span>5</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-diamond">☗ Diamond</span>
                  <span>6.5</span>
                </div>
              </div>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Weight</span>
              2kg — 7kg<br/>
              4lbs — 15lbs
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Fur</span>
               <span className="wiki-fs-sm">
                  Albino, Brown, Dark-Brown, Light Brown, Grey, Melanistic
               </span>
            </div>

            <div className="wiki-sidebar-header">Locations</div>
            <div className="wiki-sidebar-section">
               <div className="wiki-mb-4"><span className="wiki-link">Cuatro Colinas Game Reserve</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main className="wiki-main">

            {/* Quote Block */}
            <div className="wiki-quote">
              "European hares, also known as the brown hare are a game animal that has been successfully introduced all over the world. Hares prefer their solitude but tend to feed in large groups to help protect themselves against predators. These creatures can weigh between 2.00 kg - 4.00 kg and have a length that can reach between 0.40 m - 0.70 m. Females tend to be bigger than males with weights that can reach 7.00 kg. They are a polygamous species that is capable of breeding year-round if living within the right climates. They can reach puberty within 4-6 months. Females like to create shallow depressions in the ground which they use as a place of rest until their young are born."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-p-mb">
              The <strong>European Hare</strong> is a <span className="wiki-link">class 1</span> animal. It can be hunted in the <span className="wiki-link">Cuatro Colinas Game Reserve</span>. It is the 3rd lagomorph (hares and rabbits) to be featured in the game and one of 7 huntable in the game. The others are: <span className="wiki-link">White-tailed Jackrabbit</span>, <span className="wiki-link">Scrub Hare</span>, <span className="wiki-link">European Rabbit</span>, <span className="wiki-link">Antelope Jackrabbit</span>, <span className="wiki-link">Eastern Cottontail Rabbit</span> and <span className="wiki-link">Mountain Hare</span>.
            </p>

            {/* Table of Contents Placeholder */}
            <div className="wiki-toc">
              <div className="wiki-toc-title">
                🔢 Contents <span className="wiki-toc-toggle">[hide]</span>
              </div>
              <ol className="wiki-toc">
                <li><a href="#features" onClick={scrollToId('features')} className="wiki-link">Features</a></li>
                <li><a href="#need-zone-times" onClick={scrollToId('need-zone-times')} className="wiki-link">Need Zone Times</a></li>
                <li><a href="#shot-scheme" onClick={scrollToId('shot-scheme')} className="wiki-link">Shot scheme</a></li>
                <li><a href="#tips" onClick={scrollToId('tips')} className="wiki-link">Tips</a></li>
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
            
            {/* NEED ZONE TIMES */}
            <h2 id="need-zone-times" className="wiki-h2">Need Zone Times</h2>
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
                            <td className="wiki-td"><img src={zone.icon} alt={zone.type} className="wiki-class-icon"/> {zone.type}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* SHOT SCHEME */}
            <h2 id="shot-scheme" className="wiki-h2">Shot scheme</h2>
            <div className="wiki-shot-container">
              <div className="wiki-shot-image">
                <img src={EuropeanHareShot} alt="European Hare shot scheme" />
              </div>
              <div className="wiki-shot-info">
                <p style={{marginTop: 0, marginBottom: 8}}>No Color - Every hit will kill the animal</p>
              </div>
            </div>

            {/* TIPS */}
            <h2 id="tips" className="wiki-h2">Tips</h2>
            <p className="wiki-mb-20">
               The easiest way to hunt these bunnies is to hunt them during their rest time, 6:00 - 18:30. Their rest zones are unusually open since you can find many in tree orchards.
            </p>

            {/* FUR VARIANTS (Gallery) */}
            <h2 id="fur-variants" className="wiki-h2">Fur Variants</h2>
            <div className="wiki-gallery-grid">
              {furGallery.map((item, i) => (
                <div key={i} className="wiki-gallery-item">
                    <div className="wiki-gallery-placeholder">
                    <img src={item.src} alt={item.name} />
                  </div>
                  <span className="wiki-gallery-label">{item.name}</span>
                </div>
              ))}
            </div>

            {/* FUR VARIANT RARITY TABLE */}
            <h2 id="fur-variant-rarity" className="wiki-h2">Fur Variant Rarity</h2>
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
                            Brown (24.97%)<br/>
                            Dark Brown (24.97%)<br/>
                            Grey (24.97%)<br/>
                            Light Brown (24.97%)
                        </td>
                        <td className="wiki-td">X</td>
                        <td className="wiki-td">X</td>
                        <td className="wiki-td">
                            Albino (0.05%)<br/>
                            Melanistic (0.05%)
                        </td>
                    </tr>
                </tbody>
            </table>

            {/* TRIVIA */}
            <h2 id="trivia" className="wiki-h2">Trivia</h2>
            <ul className="wiki-ul">
              <li className="wiki-li">The European Hare is currently the largest lagomorph species in game.</li>
              <li className="wiki-li">Only the females can make diamond, as with all hare species.</li>
              <li className="wiki-li">It is the subject of a famous watercolor painting by artist Albrecht Dürer called "Young Hare".<sup>[1]</sup></li>
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

            <AnimalsTableMini />
          </main>
        </div>
      </div>
    </div>
  );
};

export default EuropeanHare;