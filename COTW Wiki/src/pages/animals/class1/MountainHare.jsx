import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import class1Icon from '../../../assets/Class1Icon.webp';
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import MountainHareMain from '../../../assets/MountainHare.webp';

// Fur Variant Images
import MountainHare_Albino from '../../../assets/MountainHare_AlbinoRightSide.webp';
import MountainHare_DarkBrown from '../../../assets/MountainHare_DarkBrownRightSide.webp';
import MountainHare_DarkGrey from '../../../assets/MountainHare_DarkGreyRightSide.webp';
import MountainHare_LightBrown from '../../../assets/MountainHare_LightBrownRightSide.webp';
import MountainHare_LightGrey from '../../../assets/MountainHare_LightGreyRightSide.webp';
import MountainHare_Molting1Left from '../../../assets/MountainHare_MoltingVariation1LeftSide.webp';
import MountainHare_Molting1Right from '../../../assets/MountainHare_MoltingVariation1RightSide.webp';
import MountainHare_Molting2Left from '../../../assets/MountainHare_MoltingVariation2LeftSide.webp';
import MountainHare_Molting2Right from '../../../assets/MountainHare_MoltingVariation2RightSide.webp';
import MountainHare_White from '../../../assets/MountainHare_WhiteRightSide.webp';


const MountainHare = () => {

  // --- DATA SOURCES ---

  // Smooth-scroll helper for TOC links
  const scrollToId = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (window && history && history.replaceState) history.replaceState(null, '', `#${id}`);
  };

  // Need Zone Times
  // Source: Екранна снимка 2026-01-16 165219.png
  const needZonesData = [
    {
      name: "Revontuli Coast & Tòrr nan Sithean", // Applied to both reserves
      schedule: [
        { time: "00:00 - 04:30", type: "Resting", icon: RestingZoneIcon },
        { time: "04:00 - 07:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "07:00 - 10:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "10:00 - 13:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "13:00 - 17:30", type: "Resting", icon: RestingZoneIcon },
        { time: "17:00 - 21:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "21:00 - 00:30", type: "Resting", icon: RestingZoneIcon },
      ]
    }
  ];

  // Features Table
  // Source: Екранна снимка 2026-01-16 165212.png
  const features = [
    { label: "Behavior", value: "Very skittish" },
    { label: "Habitat", value: "Tundra" },
    { label: "Senses", value: "Excellent hearing and smell" },
    { label: "Social", value: "Mostly solitary, may forage in groups for safety" },
    { label: "Active", value: "Dawn, dusk and night" },
    { label: "Recommended Equipment", value: "Class 1 Ammo" },
    { label: "Species", value: "Lepus timidus", italic: true, isLink: true },
    { label: "Difficulty", value: "Easy" },
  ];

  // Fur Gallery Data
  // Source: Екранна снимка 2026-01-16 165231.jpg, 165238.png
  const furGallery = [
    { name: "Albino - Right Side", src: MountainHare_Albino },
    { name: "Dark Brown - Right Side", src: MountainHare_DarkBrown },
    { name: "Dark Grey - Right Side", src: MountainHare_DarkGrey },
    { name: "Light Brown - Right Side", src: MountainHare_LightBrown },
    { name: "Light Grey - Right Side", src: MountainHare_LightGrey },
    { name: "Molting Variation 1 - Right Side", src: MountainHare_Molting1Right },
    { name: "Molting Variation 1 - Left Side", src: MountainHare_Molting1Left },
    { name: "Molting Variation 2 - Right Side", src: MountainHare_Molting2Right },
    { name: "Molting Variation 2 - Left Side", src: MountainHare_Molting2Left },
    { name: "White - Right Side", src: MountainHare_White },
  ];

  return (
    <div className="wiki-page">
      <div className="wiki-inner">
        
        {/* PAGE HEADER */}
        <div className="wiki-header">
          <span>Mountain Hare</span>
          <div className="wiki-edit-actions">
          </div>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Mountain Hare</div>
            <div className="wiki-sidebar-image">
              <img src={MountainHareMain} alt="Mountain Hare" />
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
                  <span>2.80</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-gold">☗ Gold</span>
                  <span>4.40</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-diamond">☗ Diamond</span>
                  <span>5.60</span>
                </div>
              </div>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Weight</span>
              ? — 6kg<br/>
              ? — 13lbs
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Fur</span>
               <span className="wiki-fs-sm">
                  Albino, Dark Brown, Dark Grey, Grey, Light Brown, Molting, White
               </span>
            </div>

            <div className="wiki-sidebar-header">Locations</div>
            <div className="wiki-sidebar-section">
               <div className="wiki-mb-4"><span className="wiki-link">Revontuli Coast</span></div>
               <div className="wiki-mb-4"><span className="wiki-link">Tòrr nan Sithean</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main className="wiki-main">

            {/* Quote Block */}
            <div className="wiki-quote">
              "The Mountain Hare is a large species of hare native to the Northern regions of Eurasia. Fifteen subspecies are recognized throughout its extensive natural range. It often coexists and competes with other hare species, such as the European Hare and the Arctic Hare. The Mountain Hare coat is mostly grey with a white underside in summer, but molts into a completely white coat in the winter, for better camouflage in the snowy regions it inhabits."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-p-mb">
              The <strong>Mountain Hare</strong> is a species introduced in the <span className="wiki-link">Revontuli Coast</span> reserve located in Finland. Also dwells in <span className="wiki-link">Tòrr nan Sithean</span>.
            </p>

            {/* Table of Contents Placeholder */}
            <div className="wiki-toc">
              <div className="wiki-toc-title">
                🔢 Contents <span className="wiki-toc-toggle">[hide]</span>
              </div>
              <ol className="wiki-toc">
                <li><a href="#features" onClick={scrollToId('features')} className="wiki-link">Features</a></li>
                <li><a href="#need-zone-times" onClick={scrollToId('need-zone-times')} className="wiki-link">Need Zone Times</a></li>
                <li><a href="#fur-variants" onClick={scrollToId('fur-variants')} className="wiki-link">Fur Variants</a></li>
                <li><a href="#fur-variant-rarity" onClick={scrollToId('fur-variant-rarity')} className="wiki-link">Fur Variant Rarity</a></li>
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
                        <tr><th colSpan="2" className="wiki-th wiki-th-center">Revontuli Coast & Tòrr nan Sithean</th></tr>
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
                            Light Brown (25.00%)<br/>
                            Dark Brown (24.90%)<br/>
                            Dark Grey (24.90%)<br/>
                            Light Grey (24.90%)
                        </td>
                        <td className="wiki-td">X</td>
                        <td className="wiki-td">
                            Albino (0.10%)
                        </td>
                        <td className="wiki-td">
                            Molting Variation 1 (0.07%)<br/>
                            Molting Variation 2 (0.07%)<br/>
                            White (0.07%)
                        </td>
                    </tr>
                </tbody>
            </table>

            <AnimalsTableMini />
          </main>
        </div>
      </div>
    </div>
  );
};

export default MountainHare;