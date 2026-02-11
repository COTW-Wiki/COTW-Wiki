import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import DrinkingZoneIcon from '../../../assets/DrinkingZoneIcon.webp';
import class6Icon from '../../../assets/Class6Icon.webp'; // Class 6 for Gemsbok
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import GemsbokMain from '../../../assets/Gemsbok.webp';
import ShotSchemeImg from '../../../assets/GemsbokShotScheme.webp';

// Fur Variant Images
// (Assumed file names based on the variants shown)
import Gemsbok_BeigeMale from '../../../assets/Gemsbok_BeigeMale.webp';
import Gemsbok_DarkMale from '../../../assets/Gemsbok_DarkMale.webp';
import Gemsbok_GoldMale from '../../../assets/Gemsbok_GoldMale.webp';
import Gemsbok_GreyMale from '../../../assets/Gemsbok_GreyMale.webp';
import Gemsbok_LightGreyMale from '../../../assets/Gemsbok_LightGreyMale.webp';

import Gemsbok_BeigeFemale from '../../../assets/Gemsbok_BeigeFemale.webp';
import Gemsbok_DarkFemale from '../../../assets/Gemsbok_DarkFemale.webp';
import Gemsbok_GoldFemale from '../../../assets/Gemsbok_GoldFemale.webp';
import Gemsbok_GreyFemale from '../../../assets/Gemsbok_GreyFemale.webp';
import Gemsbok_LightGreyFemale from '../../../assets/Gemsbok_LightGreyFemale.webp';

const Gemsbok = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  const needZonesData = [
    {
      name: "Vurhonga Savanna",
      schedule: [
        { time: "00:00 - 03:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "03:00 - 06:30", type: "Drinking", icon: DrinkingZoneIcon },
        { time: "06:00 - 10:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "10:00 - 13:30", type: "Resting", icon: RestingZoneIcon },
        { time: "13:00 - 16:30", type: "Resting", icon: RestingZoneIcon },
        { time: "16:00 - 20:30", type: "Resting", icon: RestingZoneIcon },
        { time: "20:00 - 00:30", type: "Feeding", icon: FeedingZoneIcon },
      ]
    }
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Skittish, but distrait when in large groups" },
    { label: "Habitat", value: "Dry land, Arid regions" },
    { label: "Senses", value: "Excellent sense of vision, good hearing and sense of smell" },
    { label: "Social", value: "Mixed groups with one dominant male, some males remain solitary" },
    { label: "Active", value: "Dawn, early morning, night" },
    { label: "Recommended Equipment", value: "Class 6 Ammo, Antler Rattler" },
    { label: "Species", value: "Oryx gazella", italic: true, isLink: true },
    { label: "Difficulty", value: "Average" },
  ];

   // Fur Gallery Data (split by sex)
   const maleGallery = [
     { name: "Beige", src: Gemsbok_BeigeMale },
     { name: "Dark", src: Gemsbok_DarkMale },
     { name: "Gold", src: Gemsbok_GoldMale },
     { name: "Grey", src: Gemsbok_GreyMale },
     { name: "Light Grey", src: Gemsbok_LightGreyMale },
   ];
 
   const femaleGallery = [
     { name: "Beige", src: Gemsbok_BeigeFemale },
     { name: "Dark", src: Gemsbok_DarkFemale },
     { name: "Gold", src: Gemsbok_GoldFemale },
     { name: "Grey", src: Gemsbok_GreyFemale },
     { name: "Light Grey", src: Gemsbok_LightGreyFemale },
   ];

  // Trivia Data
  const triviaData = [
    "Gemsbok get their name from the Dutch term for male Chamois. Although they have no relation.",
    "Their horns are notoriously sharp. So much so that they are referred to as \"Sabre Antelope\"."
  ];

  // References Data
  const referencesData = [
    "Gemsbok Need Zones, Vurhonga Savanna",
    "thehuntercotw.fandom.com"
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
          <span>Gemsbok</span>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Gemsbok</div>
            <div className="wiki-sidebar-image wiki-sidebar-image--contain">
              <img src={GemsbokMain} alt="Gemsbok" className="wiki-img-contain" />
            </div>
            
            <div className="wiki-sidebar-header">General Information</div>
            
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Class</span>
              <span><img src={class6Icon} alt="Class 6" className="inline-block wiki-class-icon-sm align-middle mr-1.5"/>6</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Difficulty</span>
              <span>1: Trivial — 5: Medium</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Trophy Type</span>
              <span>Horns</span>
              <div className="wiki-trophy-grid">
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-silver">◆ Silver</span>
                  <span>194.8</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-gold">☗ Gold</span>
                  <span>276.3</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-diamond">☗ Diamond</span>
                  <span>337.5</span>
                </div>
              </div>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Weight</span>
              100kg — 240kg<br/>
              <span className="wiki-sidebar-muted">220lbs — 529lbs</span>
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Fur</span>
               <span className="wiki-fs-sm">
                 Beige, Dark, Grey, Light Grey, Gold
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
              "The gemsbok is the largest of the three members of the Oryx genus. Native to the dry plains, deserts and arid regions of southern Africa, the gemsbok lives in large mixed herds and follows a nomadic lifestyle, rarely staying in a territory long enough to overgraze it. Gemsbok often stands 1.00 m in shoulder height an can weigh between 230.00 kg and 250.00 kg, with females being only slightly smaller than the males of the species. To complement its dominating size and stature, the gemsbok has thick skin to protect its neck from both predators and rivals. Their hide is used by local tribes to craft shields, along with their horns, which are used in making spears. Both male and female gemsbok have long, sharp, pointed horns which can extend up to 1.60 m in length, which they use frequently to battle for dominance or fight off predators."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-p-mb">
              The <strong>Gemsbok</strong> is a <span className="wiki-link">class 6</span> antelope. It can be hunted in the <span className="wiki-link">Vurhonga Savanna Reserve</span>.
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
                                Grey (49.85%)<br/>
                                Light Grey (49.85%)
                            </td>
                            <td className="wiki-td">
                                X
                            </td>
                            <td className="wiki-td">
                                Gold (0.10%)<br/>
                                Dark (0.10%)<br/>
                                Beige (0.10%)
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

export default Gemsbok;