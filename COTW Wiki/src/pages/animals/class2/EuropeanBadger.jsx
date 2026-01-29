import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import DrinkingZoneIcon from '../../../assets/DrinkingZoneIcon.webp';
import class2Icon from '../../../assets/Class2Icon.webp'; // Class 2 for European Badger
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import EuropeanBadgerMain from '../../../assets/EuropeanBadger.webp';

// Fur Variant Images (Placeholders)
import Badger_Albino from '../../../assets/EuropeanBadger_AlbinoLeftSide.webp';
import Badger_Brown from '../../../assets/EuropeanBadger_BrownLeftSide.webp';
import Badger_DarkGrey from '../../../assets/EuropeanBadger_DarkGreyLeftSide.webp';
import Badger_Dilute from '../../../assets/EuropeanBadger_DiluteLeftSide.webp';
import Badger_ErythristicRed from '../../../assets/EuropeanBadger_ErythristicRedLeftSide.webp';
import Badger_Grey from '../../../assets/EuropeanBadger_GreyLeftSide.webp';
import Badger_Leucistic from '../../../assets/EuropeanBadger_LeucisticLeftSide.webp';
import Badger_Melanistic from '../../../assets/EuropeanBadger_MelanisticLeftSide.webp';
import Badger_PiebaldMaleLeftSide from '../../../assets/EuropeanBadger_PiebaldMaleLeftSide.webp';
import Badger_PiebaldFemaleLeftSide from '../../../assets/EuropeanBadger_PiebaldFemaleLeftSide.webp';
import Badger_PiebaldMaleRightSide from '../../../assets/EuropeanBadger_PiebaldMaleRightSide.webp';
import Badger_PiebaldFemaleRightSide from '../../../assets/EuropeanBadger_PiebaldFemaleRightSide.webp';


const EuropeanBadger = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  const needZonesData = [
    {
      name: "Tòrr nan Sithean",
      schedule: [
        { time: "00:00 - 03:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "03:00 - 06:00", type: "Resting", icon: RestingZoneIcon },
        { time: "06:00 - 10:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "10:00 - 14:00", type: "Resting", icon: RestingZoneIcon },
        { time: "14:00 - 18:00", type: "Resting", icon: RestingZoneIcon },
        { time: "18:00 - 21:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "20:00 - 00:00", type: "Feeding", icon: FeedingZoneIcon },
      ]
    }
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Shy, resourceful, and determined, but can become fierce and aggressive when defending themselves, their young, or their territory" },
    { label: "Habitat", value: "Woodlands, grasslands, and farmland with loose soil, dense cover, and abundant food source" },
    { label: "Senses", value: "Poor eyesight, good hearing and excellent sense of smell" },
    { label: "Social", value: "Live in groups, maintain complex sett systems, and use scent marking to communicate and defend their territories" },
    { label: "Active", value: "Nocturnal and crepuscular" },
    { label: "Recommended Equipment", value: "Class 2 Ammo" },
    { label: "Species", value: "Meles meles", italic: true, isLink: true },
    { label: "Difficulty", value: "Average" },
  ];

  // Fur Gallery Data
  const furGallery = [
    { name: "Albino - Left Side", src: Badger_Albino },
    { name: "Brown - Left Side", src: Badger_Brown },
    { name: "Dark Grey - Left Side", src: Badger_DarkGrey },
    { name: "Dilute - Left Side", src: Badger_Dilute },
    { name: "Erythristic Red - Left Side", src: Badger_ErythristicRed },
    { name: "Grey - Left Side", src: Badger_Grey },
    { name: "Leucistic - Left Side", src: Badger_Leucistic },
    { name: "Melanistic - Left Side", src: Badger_Melanistic },
    { name: "Piebald Male - Left Side", src: Badger_PiebaldMaleLeftSide },
    { name: "Piebald Male - Right Side", src: Badger_PiebaldMaleRightSide },
    { name: "Piebald Female - Left Side", src: Badger_PiebaldFemaleLeftSide },
    { name: "Piebald Female - Right Side", src: Badger_PiebaldFemaleRightSide },
  ];

  return (
    <div className="wiki-page">
      <div className="wiki-inner">
        
        {/* PAGE HEADER */}
        <div className="wiki-header">
          <span>European Badger</span>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">European Badger</div>
            <div className="wiki-sidebar-image">
              <img src={EuropeanBadgerMain} alt="European Badger" />
            </div>
            
            <div className="wiki-sidebar-header">General Information</div>
            
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Class</span>
              <span><img src={class2Icon} alt="Class 2" className="wiki-class-icon-lg"/>2</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Difficulty</span>
              <span>1: Trivial — 5: Medium</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Trophy Type</span>
              <span>Weight</span>
              <div className="wiki-trophy-grid">
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-silver">◆ Silver</span>
                  <span>9</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-gold">☗ Gold</span>
                  <span>13</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-diamond">☗ Diamond</span>
                  <span>16</span>
                </div>
              </div>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Weight</span>
              ? — 12.83kg<br/>
              <span className="wiki-sidebar-muted">? — 28lbs</span>
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Fur</span>
               <span className="wiki-fs-sm">
                  Albino, Brown, Dark Grey, Dilute, Erythristic Red, Grey, Leucistic, Melanistic, Piebald
               </span>
            </div>

            <div className="wiki-sidebar-header">Locations</div>
            <div className="wiki-sidebar-section">
               <div className="wiki-mb-4"><span className="wiki-link">Tòrr nan Sithean</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main className="wiki-main">

            {/* Quote Block */}
            <div className="wiki-quote">
              "The European badger (Meles meles) is a heavily built mammal native to much of Europe and parts of western Asia. It favors environments like forests, meadows, and rural farmland, where it can excavate elaboreta underground homes called setts. Broad and low to the ground, badgers are easily recognized by their striking black-and-white facial stripes and coarse, grayish fur. Mostly active at night, the badger spends its waking hours searching for worms, insects, fruits, and small prey, relying on an exceptional sense of smell and acute hearing to navigate its surroundings. Although generally quiet and cautious, bagers can defend themselves with surprising force when threatened."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-p-mb">
              The <strong>European Badger</strong> is a species introduced in the <span className="wiki-link">Tòrr nan Sithean</span> reserve located in Scotland.
            </p>

            {/* Table of Contents */}
            <div className="wiki-toc">
              <div className="wiki-toc-title">
                🔢 Contents <span className="wiki-toc-toggle">[hide]</span>
              </div>
              <ol className="wiki-toc">
                <li><a href="#features" className="wiki-link" onClick={scrollToId('features')}>Features</a></li>
                <li><a href="#need-zones" className="wiki-link" onClick={scrollToId('need-zones')}>Need Zone Times</a></li>
                <li><a href="#fur-variants" className="wiki-link" onClick={scrollToId('fur-variants')}>Fur variants</a></li>
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
            <h2 id="need-zones" className="wiki-h2">Need Zone Times</h2>
            <div className="wiki-inline-block">
                <table className="wiki-table wiki-table-fixed">
                    <thead>
                        <tr><th colSpan="2" className="wiki-th wiki-th-center">Tòrr nan Sithean</th></tr>
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

            {/* FUR VARIANTS (Gallery) */}
            <h2 id="fur-variants" className="wiki-h2">Fur variants</h2>
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
                                Male/<span className="wiki-text-female">Female</span>
                            </td>
                            <td className="wiki-td">
                                Dark Grey (37.35%)<br/>
                                Grey (37.35%)<br/>
                                Brown (25.00%)
                            </td>
                            <td className="wiki-td">X</td>
                            <td className="wiki-td">
                                Dilute (0.10%)<br/>
                                Erythristic Red (0.10%)
                            </td>
                            <td className="wiki-td">
                                Albino (0.03%)<br/>
                                Leucistic (0.03%)<br/>
                                Melanistic (0.03%)<br/>
                                Piebald (0.03%)
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

export default EuropeanBadger;