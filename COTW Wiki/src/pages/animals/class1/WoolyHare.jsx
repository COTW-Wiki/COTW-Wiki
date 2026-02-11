import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import class1Icon from '../../../assets/Class1Icon.webp';
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import WoollyHareMain from '../../../assets/Woolly_Hare.webp';

// Shot Scheme (Reusing generic hare/rabbit shot scheme or specific if available)
import WoollyHareShot from '../../../assets/Woolly_Hare_shot_scheme.webp';

// Fur Variant Images
import WoollyHare_Albino from '../../../assets/WoollyHare_Albino.webp';
import WoollyHare_DarkBrown from '../../../assets/WoollyHare_DarkBrown.webp';
import WoollyHare_LightBrown from '../../../assets/WoollyHare_LightBrown.webp';
import WoollyHare_LightGrey from '../../../assets/WoollyHare_LightGrey.webp';
import WoollyHare_Molting from '../../../assets/WoollyHare_Molting.webp';
import WoollyHare_White from '../../../assets/WoollyHare_White.webp';


const WoollyHare = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  // Source: Екранна снимка 2026-01-16 190325.png
  const needZonesData = [
    {
      name: "Sundarpatan",
      schedule: [
        { time: "00:00 - 04:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "04:00 - 07:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "07:00 - 11:00", type: "Resting", icon: RestingZoneIcon },
        { time: "11:00 - 14:00", type: "Resting", icon: RestingZoneIcon },
        { time: "14:00 - 17:00", type: "Resting", icon: RestingZoneIcon },
        { time: "17:00 - 20:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "20:00 - 00:00", type: "Feeding", icon: FeedingZoneIcon },
      ]
    }
  ];

  // Features Table
  // Source: Екранна снимка 2026-01-16 190317.png
  const features = [
    { label: "Behavior", value: "Shy, timid" },
    { label: "Habitat", value: "Alpine Tundra" },
    { label: "Senses", value: "Acute smell and hearing, decent sight" },
    { label: "Social", value: "Solitary" },
    { label: "Active", value: "Mostly nocturnal, can be active during day" },
    { label: "Recommended Equipment", value: "Class 1 Ammo" },
    { label: "Species", value: "Lepus oiostolus", italic: true, isLink: true },
    { label: "Difficulty", value: "Easy" },
  ];

  // Fur Gallery Data
  // Source: Екранна снимка 2026-01-16 190341.jpg
  const furGallery = [
    { name: "Albino", src: WoollyHare_Albino },
    { name: "Dark Brown", src: WoollyHare_DarkBrown },
    { name: "Light Brown", src: WoollyHare_LightBrown },
    { name: "Light Grey", src: WoollyHare_LightGrey },
    { name: "Molting", src: WoollyHare_Molting },
    { name: "White", src: WoollyHare_White },
  ];

  // Smooth scroll helper for in-page TOC links
  const scrollToId = (id) => (e) => {
    if (e && e.preventDefault) e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (typeof window !== 'undefined' && window.history && window.history.replaceState) {
      window.history.replaceState(null, '', `#${id}`);
    }
  };

  // References List
  // Source: Екранна снимка 2026-01-16 190349.png
  const references = [
    "Woolly Hare Need Zones, Sundarpatan"
  ];

  return (
    <div className="wiki-page">
      <div className="wiki-inner">
        
        {/* PAGE HEADER */}
        <div className="wiki-header">
          <span>Woolly Hare</span>
          <div className="wiki-edit-actions">
          </div>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Woolly Hare</div>
            <div className="wiki-sidebar-image">
              <img src={WoollyHareMain} alt="Woolly Hare" />
            </div>
            
            <div className="wiki-sidebar-header">General Information</div>
            
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Class</span>
              <span><img src={class1Icon} alt="Class 1" className="wiki-class-icon"/>1</span>
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
                  <span>1.74</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-gold">☗ Gold</span>
                  <span>2.62</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-diamond">☗ Diamond</span>
                  <span>3.28</span>
                </div>
              </div>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Weight</span>
              0kg — 3kg<br/>
              0lbs — 7lbs
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Fur</span>
               <span className="wiki-fs-sm">
                  Albino, Dark Brown, Light Brown, Light Grey, Molting, White
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
              "The Woolly Hare is a high-altitude hare species nativ to Central Asia, the Tibetan Plateau, western China, and the northern mountainous areas of Nepal. It has adapted to the high altitudes of the region and lives in the range of 2500 to over 5000 meters above sea level, making it the species with the widest altitude range of any leporids. It is a relatively large hare with a thick and wavy pelage to shelter it from the harsh climate of the alpine region it inhabits. The woolly hare is a shy and typically solitary creature, and despite occasional daytime activity, it primarily operates at night, foraging for grasses and herbs."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-p-mb">
              The <strong>Woolly Hare</strong> is a <span className="wiki-link">class 1</span> hare that was introduced with <span className="wiki-link">Sundarpatan</span> reserve.
            </p>

            {/* Table of Contents (smooth-scroll links) */}
            <div className="wiki-toc">
              <div className="wiki-toc-title">
                🔢 Contents <span className="wiki-toc-toggle">[hide]</span>
              </div>
              <ol className="wiki-toc">
                <li><a href="#features" className="wiki-link" onClick={scrollToId('features')}>Features</a></li>
                <li><a href="#need-zones" className="wiki-link" onClick={scrollToId('need-zones')}>Need Zone Times</a></li>
                <li><a href="#shot-scheme" className="wiki-link" onClick={scrollToId('shot-scheme')}>Shot scheme</a></li>
                <li><a href="#fur-variants" className="wiki-link" onClick={scrollToId('fur-variants')}>Fur Variants</a></li>
                <li><a href="#variant-rarity" className="wiki-link" onClick={scrollToId('variant-rarity')}>Fur Variant Rarity</a></li>
                <li><a href="#trivia" className="wiki-link" onClick={scrollToId('trivia')}>Trivia</a></li>
                <li><a href="#references" className="wiki-link" onClick={scrollToId('references')}>References</a></li>
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
                  <img src={WoollyHareShot} alt="Shot Scheme" />
               </div>
               <div className="wiki-shot-info">
                  <strong>Color code</strong>
                  <div className="mt-5">
                     No Color - Every hit will kill the animal
                  </div>
               </div>
            </div>

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
            <h2 id="variant-rarity" className="wiki-h2">Fur Variant Rarity</h2>
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
                            Dark Brown (27.90%)<br/>
                            Light Brown (27.90%)<br/>
                            Light Grey (27.90%)<br/>
                            Molting (16.00%)
                        </td>
                        <td className="wiki-td">X</td>
                        <td className="wiki-td">
                            White (0.20%)
                        </td>
                        <td className="wiki-td">
                            Albino (0.10%)
                        </td>
                    </tr>
                </tbody>
            </table>

            {/* TRIVIA */}
            <h2 id="trivia" className="wiki-h2">Trivia</h2>
            <p className="wiki-mb-20">
               Coming Soon...
            </p>

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

export default WoollyHare;