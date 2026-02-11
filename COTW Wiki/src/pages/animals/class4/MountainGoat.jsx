import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import DrinkingZoneIcon from '../../../assets/DrinkingZoneIcon.webp';
import class4Icon from '../../../assets/Class4Icon.webp'; // Class 4 for Mountain Goat
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import MountainGoatMain from '../../../assets/MountainGoat.webp';
import ShotSchemeImg from '../../../assets/Mountain_Goat_shot_scheme.webp';

// Fur Variant Images (Placeholders)
// Note: Since Mountain Goats are monomorphic (males and females look very similar), 
// and the screenshot shows a single gallery, we will use these for the display.
import MountainGoat_Albino from '../../../assets/MountainGoat_Albino.webp';
import MountainGoat_Beige from '../../../assets/MountainGoat_Beige.webp';
import MountainGoat_LightBrown from '../../../assets/MountainGoat_LightBrown.webp';
import MountainGoat_LightGrey from '../../../assets/MountainGoat_LightGrey.webp';
import MountainGoat_Melanistic from '../../../assets/MountainGoat_Melanistic.webp';
import MountainGoat_White from '../../../assets/MountainGoat_White.webp';


const MountainGoat = () => {

  // Smooth-scroll helper for TOC links (prevents ReferenceError when called)
  function scrollToId(e, id) {
    if (e && e.preventDefault) e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  // --- DATA SOURCES ---

  // Need Zone Times
  const needZonesData = [
    {
      name: "Askiy Ridge Hunting Preserve",
      schedule: [
        { time: "00:00 - 04:00", type: "Resting", icon: RestingZoneIcon },
        { time: "04:00 - 07:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "07:00 - 10:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "10:00 - 13:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "13:00 - 17:00", type: "Resting", icon: RestingZoneIcon },
        { time: "17:00 - 20:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "20:00 - 00:00", type: "Resting", icon: RestingZoneIcon },
      ]
    }
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Cautious and curious" },
    { label: "Habitat", value: "Mountain faces, alpine forests and basins" },
    { label: "Senses", value: "Excellent senses of vision and hearing, decent sense of smell" },
    { label: "Social", value: "Males live solitary or in small groups, females live in medium to large-sized groups tending their young" },
    { label: "Active", value: "Morning and evening" },
    { label: "Recommended Equipment", value: "Class 4 Ammo" },
    { label: "Species", value: "Oreamnos americanus", italic: true, isLink: true },
    { label: "Difficulty", value: "Average" },
  ];

  // Fur Gallery Data 
  // The screenshot shows one unified list of variants.
  const furGallery = [
    { name: "Albino", src: MountainGoat_Albino },
    { name: "Beige", src: MountainGoat_Beige },
    { name: "Light Brown", src: MountainGoat_LightBrown },
    { name: "Light Grey", src: MountainGoat_LightGrey },
    { name: "Melanistic", src: MountainGoat_Melanistic },
    { name: "White", src: MountainGoat_White },
  ];

  // Trivia Data
  const triviaData = [
    "The Mountain Goat was reintroduced to the Colorado Rockies in 1947, as previously it went extinct in the area.",
    "You can tell a Mountain Goat's age by the rings on its horns, not unlike a tree.",
    "There is an indie folk rock band called \"The Mountain Goats\".",
    "Despite their name, Mountain Goats are not true goats. They belong to the antelope family.",
    "Mountain goats are nimble and can jump nearly 12 feet in a single bound."
  ];

  // References Data
  const referencesData = [
    "Mountain Goat Need Zones, Askiy Ridge",
    "https://www.youtube.com/watch?v=hdY7aDVYAJs"
  ];

  return (
    <div className="wiki-page">
      <div className="wiki-inner">
        
        {/* PAGE HEADER */}
        <div className="wiki-header">
          <span>Mountain Goat</span>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Mountain Goat</div>
            <div className="wiki-sidebar-image">
              <img src={MountainGoatMain} alt="Mountain Goat" />
            </div>
            
            <div className="wiki-sidebar-header">General Information</div>
            
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Class</span>
              {/* Cited from screenshot 1 */}
              <span><img src={class4Icon} alt="Class 4" className="inline-block wiki-class-icon-sm align-middle mr-1.5" />4</span>
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
                  <span>52.72</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-gold">☗ Gold</span>
                  <span>84.12</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-diamond">☗ Diamond</span>
                  <span>107.67</span>
                </div>
              </div>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Weight</span>
              {/* Cited from screenshot 1 */}
              45kg — 145kg<br/>
              <span className="wiki-sidebar-muted">99lbs — 320lbs</span>
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Fur</span>
               {/* Cited from screenshot 1 */}
               <span className="wiki-fs-sm">
                 Albino, Beige, Light Brown, Light Grey, Melanistic, White
               </span>
            </div>

            <div className="wiki-sidebar-header">Locations</div>
            <div className="wiki-sidebar-section">
               {/* Cited from screenshot 1 */}
               <div className="wiki-mb-4"><span className="wiki-link">Silver Ridge Peaks</span></div>
               <div className="wiki-mb-4"><span className="wiki-link">Askiy Ridge Hunting Preserve</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main className="wiki-main">

            {/* Quote Block */}
            <div className="wiki-quote">
              "The mountain goat, also known as the Rocky Mountain goat, is the largest mammal found in sub-alpine to alpine altitudes of the Rocky Mountains. Despite its name, it does not belong to the Capra genus that includes all other goats, but is the only living species of the Oreamnos genus. They are informally referred to as goat-antelopes. Both males and female mountain goats have beards and long black horns that can grow up to 0.28 min length. Contrary to most other animals, the female mountain goat is very competitive and protective of their food source. It is not uncommon for conflicts to include all nannies of the herd. The male "billy" goat weighs around 125.00 kg, while the female "nanny" goat weighs 80.00 kg"
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-p-mb">
              The <strong>Mountain Goat</strong> is a species in the <span className="wiki-link">Silver Ridge Peaks reserve</span> located in the rocky mountains of Colorado. It is a <span className="wiki-link">class 4</span> animal. Both females and males have horns.
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
                <li><a href="#fur-rarity" onClick={(e)=>scrollToId(e,'fur-rarity')} className="wiki-link">Fur Variant Rarity</a></li>
                <li><a href="#trivia" onClick={(e)=>scrollToId(e,'trivia')} className="wiki-link">Trivia</a></li>
                <li><a href="#references" onClick={(e)=>scrollToId(e,'references')} className="wiki-link">References</a></li>
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
                        <tr><th colSpan="2" className="wiki-th wiki-th-center">Askiy Ridge</th></tr>
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
            <h2 id="fur-rarity" className="wiki-h2">Fur Variant Rarity</h2>
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
                        {/* Combined Male/Female Row as per screenshot */}
                        <tr>
                            <td className="wiki-td wiki-td-muted">
                                Male<span className="wiki-text-divider">/</span><span className="wiki-text-female">Female</span>
                            </td>
                            <td className="wiki-td">
                                Beige (24.97%)<br/>
                                Light Brown (24.97%)<br/>
                                Light Grey (24.97%)<br/>
                                White (24.97%)
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

            {/* REFERENCES */}
            <h2 id="references" className="wiki-h2">References</h2>
            <ol className="wiki-ol-ref">
              {referencesData.map((ref, idx) => (
                 <li key={idx} className="wiki-mb-5">
                  <span className="wiki-text-divider">↑</span> <span className="wiki-link">{ref}</span>
                 </li>
              ))}
            </ol>

            <div className="wiki-mt-40">
                <AnimalsTableMini />
            </div>
            
          </main>
        </div>
      </div>
    </div>
  );
};

export default MountainGoat;