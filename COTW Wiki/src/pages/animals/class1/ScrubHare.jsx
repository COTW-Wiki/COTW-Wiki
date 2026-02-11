import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import class1Icon from '../../../assets/Class1Icon.webp';
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import ScrubHareMain from '../../../assets/ScrubHare.webp';

// Shot Scheme
import ScrubHareShot from '../../../assets/Scrub_hare_shot_scheme.webp';

// Fur Variant Images
import ScrubHare_Brown from '../../../assets/ScrubHare_Brown.webp';
import ScrubHare_Chestnut from '../../../assets/ScrubHare_Chestnut.webp';
import ScrubHare_Grey from '../../../assets/ScrubHare_Grey.webp';
import ScrubHare_LightGrey from '../../../assets/ScrubHare_LightGrey.webp';


const ScrubHare = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  // Source: Екранна снимка 2026-01-16 171720.png
  const needZonesData = [
    {
      name: "Vurhonga Savanna", // Inferred from Locations list
      schedule: [
        { time: "00:00 - 03:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "03:00 - 06:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "06:00 - 10:30", type: "Resting", icon: RestingZoneIcon },
        { time: "10:00 - 14:30", type: "Resting", icon: RestingZoneIcon },
        { time: "14:00 - 18:30", type: "Resting", icon: RestingZoneIcon },
        { time: "18:00 - 21:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "21:00 - 00:30", type: "Feeding", icon: FeedingZoneIcon },
      ]
    }
  ];

  // Features Table
  // Source: Екранна снимка 2026-01-16 171714.png
  const features = [
    { label: "Behavior", value: "Jumpy when threatened but otherwise docile" },
    { label: "Habitat", value: "Scrub, tall grasslands and savanna woodlands" },
    { label: "Senses", value: "Very good hearing and vision" },
    { label: "Social", value: "Typically solitary. During mating season, groups of males can be found with females in medium-sized groups." },
    { label: "Active", value: "During dusk, dawn and night" },
    { label: "Recommended Equipment", value: "Class 1 Ammo" },
    { label: "Species", value: "Lepus saxatilis", italic: true, isLink: true },
    { label: "Difficulty", value: "Easy" },
  ];

  // Fur Gallery Data
  // Source: Екранна снимка 2026-01-16 171740.jpg
  const furGallery = [
    { name: "Brown", src: ScrubHare_Brown },
    { name: "Chestnut", src: ScrubHare_Chestnut },
    { name: "Grey", src: ScrubHare_Grey },
    { name: "Light Grey", src: ScrubHare_LightGrey },
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

  return (
    <div className="wiki-page">
      <div className="wiki-inner">
        
        {/* PAGE HEADER */}
        <div className="wiki-header">
          <span>Scrub Hare</span>
          <div className="wiki-edit-actions">
          </div>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Scrub Hare</div>
            <div className="wiki-sidebar-image">
              <img src={ScrubHareMain} alt="Scrub Hare" />
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
                  <span>2.4</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-gold">☗ Gold</span>
                  <span>4.1</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-diamond">☗ Diamond</span>
                  <span>5.3</span>
                </div>
              </div>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Weight</span>
              ? — 5.8kg<br/>
              ? — 13lbs
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Fur</span>
               <span className="wiki-fs-sm">
                  Brown, Chestnut, Grey, Light Gray
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
              "The scrub hare is primarily found throughout Southern Africa and prefer savanna woodlands and scrub areas. Scrub hares are nocturnal but are often found grazing and foraging in the early morning and around dusk. And while scrub hares are typically solitary, groups of males can sometimes be found actively, competing for the attention of a single female. Due to the stresses of these courting competitions, adult males generally weigh less than females. Like other hare species, the scrub hare relies on its coloration to escape detection and its speed to escape predators in active pursuit."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-p-mb">
              The <strong>Scrub Hare</strong> is a <span className="wiki-link">class 1</span> animal. It can be hunted in the <span className="wiki-link">Vurhonga Savanna Reserve</span>. It is the 1st "Hare" species to be added to the game by name, and the 2nd lagomorph to be added as well, behind the <span className="wiki-link">White-tailed Jackrabbit</span>.
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
                <li><a href="#fur-variants" className="wiki-link" onClick={scrollToId('fur-variants')}>Fur variants</a></li>
                <li><a href="#variant-rarity" className="wiki-link" onClick={scrollToId('variant-rarity')}>Fur Variant Rarity</a></li>
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
            <h2 id="need-zones" className="wiki-h2">Need Zone Times</h2>
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
                  <img src={ScrubHareShot} alt="Shot Scheme" />
                </div>
               <div className="wiki-shot-info">
                  <strong>Color code</strong>
                  <div className="mt-5">
                     No Color - Every hit will kill the animal
                  </div>
               </div>
            </div>

            {/* FUR VARIANTS (Gallery) */}
            <h2 id="fur-variants" className="wiki-h2">Fur variants</h2>
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
                            Brown (48.26%)<br/>
                            Chestnut (48.26%)
                        </td>
                        <td className="wiki-td">
                            Grey (3.23%)
                        </td>
                        <td className="wiki-td">
                            Light Grey (0.26%)
                        </td>
                        <td className="wiki-td">X</td>
                    </tr>
                </tbody>
            </table>

            {/* TRIVIA */}
            <h2 id="trivia" className="wiki-h2">Trivia</h2>
            <ul className="wiki-ul">
              <li className="wiki-li">It is called "Lièvre des buissons" in french.</li>
              <li className="wiki-li">Only the females can make diamond, as with all hare species</li>
              <li className="wiki-li">The <strong>Scrub Hare</strong> is one of 7 huntable lagomorph in game. The others are the <span className="wiki-link">White-tailed Jackrabbit</span>, the <span className="wiki-link">European Hare</span>, the <span className="wiki-link">European Rabbit</span>, the <span className="wiki-link">Antelope Jackrabbit</span>, the <span className="wiki-link">Eastern Cottontail Rabbit</span>, and the <span className="wiki-link">Mountain Hare</span>.</li>
            </ul>

            <AnimalsTableMini />
          </main>
        </div>
      </div>
    </div>
  );
};

export default ScrubHare;