import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import DrinkingZoneIcon from '../../../assets/DrinkingZoneIcon.webp';
import class3Icon from '../../../assets/Class3Icon.webp'; // Class 3 for Collared Peccary
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import CollaredPeccaryMain from '../../../assets/CollaredPeccary.webp';

// Fur Variant Images (Placeholders)
import CollaredPeccary_Albino from '../../../assets/CollaredPeccary_Albino.webp';
import CollaredPeccary_Brown from '../../../assets/CollaredPeccary_Brown.webp';
import CollaredPeccary_DarkBrown from '../../../assets/CollaredPeccary_DarkBrown.webp';
import CollaredPeccary_DarkGrey from '../../../assets/CollaredPeccary_DarkGrey.webp';
import CollaredPeccary_Grey from '../../../assets/CollaredPeccary_Grey.webp';
import CollaredPeccary_Leucistic from '../../../assets/CollaredPeccary_Leucistic.webp';
import CollaredPeccary_Melanistic from '../../../assets/CollaredPeccary_Melanistic.webp';
import CollaredPeccary_Ochre from '../../../assets/CollaredPeccary_Ochre.webp';


const CollaredPeccary = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  const needZonesData = [
    {
      name: "Rancho del Arroyo",
      schedule: [
        { time: "00:00 - 03:30", type: "Drinking", icon: DrinkingZoneIcon },
        { time: "03:00 - 07:30", type: "Resting", icon: RestingZoneIcon },
        { time: "07:00 - 11:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "11:00 - 14:30", type: "Resting", icon: RestingZoneIcon },
        { time: "14:00 - 17:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "17:00 - 20:30", type: "Resting", icon: RestingZoneIcon },
        { time: "20:00 - 00:30", type: "Feeding", icon: FeedingZoneIcon },
      ]
    }
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Curious and sometimes aggressive if threatened" },
    { label: "Habitat", value: "Dry thorn forest, xeric shrublands, deserts" },
    { label: "Senses", value: "Amazing sense of smell, good hearing, very poor eyesight" },
    { label: "Social", value: "Tactile and gregarious, they rub, groom, scratch each other, and lay close together when resting" },
    { label: "Active", value: "Active during morning, evening and night, they rest around dusk, dawn and midday" },
    { label: "Recommended Equipment", value: "Class 3 Ammo, Predator \"Jackrabbit\" Caller, Wild Boar Caller" },
    { label: "Species", value: "Dicotyles tajacu", italic: true, isLink: true },
    { label: "Difficulty", value: "Average" },
  ];

  // Fur Gallery Data
  const furGallery = [
    { name: "Albino", src: CollaredPeccary_Albino },
    { name: "Brown", src: CollaredPeccary_Brown },
    { name: "Dark Brown", src: CollaredPeccary_DarkBrown },
    { name: "Dark Grey", src: CollaredPeccary_DarkGrey },
    { name: "Grey", src: CollaredPeccary_Grey },
    { name: "Leucistic", src: CollaredPeccary_Leucistic },
    { name: "Melanistic", src: CollaredPeccary_Melanistic },
    { name: "Ochre", src: CollaredPeccary_Ochre },
  ];

  // Trivia Data
  // No trivia screenshot provided in the batch, leaving empty to avoid incorrect data.
  const triviaData = [
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
          <span>Collared Peccary</span>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Collared Peccary</div>
            <div className="wiki-sidebar-image">
              <img src={CollaredPeccaryMain} alt="Collared Peccary" className="wiki-img-contain" />
            </div>
            
            <div className="wiki-sidebar-header">General Information</div>
            
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Class</span>
              <span><img src={class3Icon} alt="Class 3" className="inline-block wiki-class-icon-sm align-middle mr-1.5" />3</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Difficulty</span>
              <span>1: Trivial — 5: Medium</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Trophy Type</span>
              <span>Tusks</span>
              <div className="wiki-trophy-grid">
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-silver">◆ Silver</span>
                  <span>37.50</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-gold">☗ Gold</span>
                  <span>98.50</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-diamond">☗ Diamond</span>
                  <span>144.20</span>
                </div>
              </div>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Weight</span>
              14kg — 31kg<br/>
              <span className="wiki-sidebar-muted">31lbs — 68lbs</span>
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Fur</span>
               <span className="wiki-fs-sm">
                 Albino, Brown, Dark-Brown, Dark-Grey, Grey, Leucistic, Melanistic, Ochre
               </span>
            </div>

            <div className="wiki-sidebar-header">Locations</div>
            <div className="wiki-sidebar-section">
               <div className="wiki-mb-4"><span className="wiki-link">Rancho del Arroyo</span></div>
               <div className="wiki-mb-4"><span className="wiki-link">Parque Fernando</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main className="wiki-main">

            {/* Quote Block */}
            <div className="wiki-quote">
              "Collared peccaries or "javelinas" are small, bulky, short-legged mammals in the Tayassuidae family, which includes animals such as pigs, boars and hogs. They are primarily herbivores, feeding on fruits, roots, cactus and other green vegetation, but will opportunistically eat insects, lizards, rodents and larger dead animals. They live in tightly-knitted mixed herds averaging 12 individuals. Very pungent, javelinas use a musk gland above their tails to mark their territory and members, rubbing on rocks, trees and each other. Not completely diurnal in the summer, they often, rest in the shadows during the day to cool off and are active, throughout the night, taking advantage of the lower temperature."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-p-mb">
              The <strong>Collared Peccary</strong> is a huntable <span className="wiki-link">class 3</span> animal in the <span className="wiki-link">Rancho del Arroyo</span>, also it was backfilled in <span className="wiki-link">Parque Fernando</span> with the Granite Update in December 2022.
            </p>

            {/* Table of Contents */}
            <div className="wiki-toc">
              <div className="wiki-toc-title">
                🔢 Contents <span className="wiki-toc-toggle">[hide]</span>
              </div>
              <ol className="wiki-toc">
                <li><a href="#features" className="wiki-link" onClick={scrollToId('features')}>Features</a></li>
                <li><a href="#need-zone-times" className="wiki-link" onClick={scrollToId('need-zone-times')}>Need Zone Times</a></li>
                <li><a href="#fur-variants" className="wiki-link" onClick={scrollToId('fur-variants')}>Fur Variants</a></li>
                <li><a href="#fur-variant-rarity" className="wiki-link" onClick={scrollToId('fur-variant-rarity')}>Fur Variant Rarity</a></li>
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
                        <tr><th colSpan="2" className="wiki-th wiki-th-center">Rancho del Arroyo</th></tr>
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

            {/* Shot scheme removed per request */}

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
                                Male<span className="wiki-text-divider">/</span><span className="wiki-text-female">Female</span>
                            </td>
                            <td className="wiki-td">
                                Brown (37.35%)<br/>
                                Grey (37.35%)<br/>
                                Dark Brown (12.50%)<br/>
                                Dark Gray (12.50%)
                            </td>
                            <td className="wiki-td">X</td>
                            <td className="wiki-td">
                                Leucistic (0.10%)<br/>
                                Ochre (0.10%)
                            </td>
                            <td className="wiki-td">
                                Albino (0.05%)<br/>
                                Melanistic (0.05%)
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Trivia removed per request */}

            <div className="wiki-mt-40">
                <AnimalsTableMini />
            </div>
            
          </main>
        </div>
      </div>
    </div>
  );
};

export default CollaredPeccary;