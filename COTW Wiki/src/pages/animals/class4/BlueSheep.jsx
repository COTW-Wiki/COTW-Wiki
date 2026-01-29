import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import DrinkingZoneIcon from '../../../assets/DrinkingZoneIcon.webp';
import class4Icon from '../../../assets/Class4Icon.webp'; // Class 4 for Blue Sheep
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import BlueSheepMain from '../../../assets/Blue_Sheep.webp';
import ShotSchemeImg from '../../../assets/Blue_Sheep_shot_scheme.webp';

// Fur Variant Images (Placeholders based on screenshots)
// Male
import BlueSheep_AlbinoMale from '../../../assets/BlueSheep_AlbinoMale.webp';
import BlueSheep_BlueGrayMale from '../../../assets/BlueSheep_BlueGrayMale.webp';
import BlueSheep_BrownMale from '../../../assets/BlueSheep_BrownMale.webp';
import BlueSheep_LeucisticMale from '../../../assets/BlueSheep_LeucisticMale.webp';
import BlueSheep_MelanisticMale from '../../../assets/BlueSheep_MelanisticMale.webp';
import BlueSheep_SlateGrayMale from '../../../assets/BlueSheep_SlateGrayMale.webp';
import BlueSheep_YellowMale from '../../../assets/BlueSheep_YellowMale.webp';

// Female
import BlueSheep_AlbinoFemale from '../../../assets/BlueSheep_AlbinoFemale.webp';
import BlueSheep_BlueGrayFemale from '../../../assets/BlueSheep_BlueGrayFemale.webp';
import BlueSheep_BrownFemale from '../../../assets/BlueSheep_BrownFemale.webp';
import BlueSheep_LeucisticFemale from '../../../assets/BlueSheep_LeucisticFemale.webp';
import BlueSheep_MelanisticFemale from '../../../assets/BlueSheep_MelanisticFemale.webp';
import BlueSheep_SlateGrayFemale from '../../../assets/BlueSheep_SlateGrayFemale.webp';
import BlueSheep_YellowFemale from '../../../assets/BlueSheep_YellowFemale.webp';


const BlueSheep = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  const needZonesData = [
    {
      name: "Sundarpatan",
      schedule: [
        { time: "00:00 - 04:00", type: "Resting", icon: RestingZoneIcon },
        { time: "04:00 - 07:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "07:00 - 11:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "11:00 - 14:00", type: "Resting", icon: RestingZoneIcon },
        { time: "14:00 - 17:00", type: "Drinking", icon: DrinkingZoneIcon },
        { time: "17:00 - 20:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "20:00 - 00:00", type: "Resting", icon: RestingZoneIcon },
      ]
    }
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Alert and wary" },
    { label: "Habitat", value: "Mountain slopes and cliffs" },
    { label: "Senses", value: "Good vision, hearing and smell" },
    { label: "Social", value: "Mixed groups and solo animals of both sexes" },
    { label: "Active", value: "Dawn to dusk" },
    { label: "Recommended Equipment", value: "Class 4 Ammo" },
    { label: "Species", value: "Pseudois nayaur", italic: true, isLink: true },
    { label: "Difficulty", value: "Average" },
  ];

  // Fur Gallery Data (split by sex)
  const maleGallery = [
    { name: "Albino", src: BlueSheep_AlbinoMale },
    { name: "Blue Gray", src: BlueSheep_BlueGrayMale },
    { name: "Brown", src: BlueSheep_BrownMale },
    { name: "Leucistic", src: BlueSheep_LeucisticMale },
    { name: "Melanistic", src: BlueSheep_MelanisticMale },
    { name: "Slate Gray", src: BlueSheep_SlateGrayMale },
    { name: "Yellow", src: BlueSheep_YellowMale },
  ];

  const femaleGallery = [
    { name: "Albino", src: BlueSheep_AlbinoFemale },
    { name: "Blue Gray", src: BlueSheep_BlueGrayFemale },
    { name: "Brown", src: BlueSheep_BrownFemale },
    { name: "Leucistic", src: BlueSheep_LeucisticFemale },
    { name: "Melanistic", src: BlueSheep_MelanisticFemale },
    { name: "Slate Gray", src: BlueSheep_SlateGrayFemale },
    { name: "Yellow", src: BlueSheep_YellowFemale },
  ];

  // Trivia Data
  const triviaData = [
    "The Blue Sheep is commonly called the Bharal, an Urdu word that means wild sheep",
    "Despite its name, the Blue Sheep is actually more closely related to Goats than Sheep. In fact, it is believed that their genus Pseudois evolved before the split between the \"True Goats\" (Genus: Capra) and the \"True Sheep\" (Genus: Ovis). Because of this they share traits from both Sheep AND Goats. Naturalist George Schaller said it best, \"[Blue Sheep are] goats with sheeplike traits. They lack beards and calluses on the knees, they have no strong body odor and the females have small, almost nonfunctional horns, all characters typical of sheep. [However] they resemble goats in their flat broad tail with a bare ventral surface, the conspicuous markings on the forelegs, and the large dew claws,\""
  ];

  // References Data
  const referencesData = [
    "Blue Sheep Need Zones, Sundarpatan",
    "factanimal.com",
    "animaldiversity.org",
    "britannica.com"
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
          <span>Blue Sheep</span>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Blue Sheep</div>
            <div className="wiki-sidebar-image">
              <img src={BlueSheepMain} alt="Blue Sheep" />
            </div>
            
            <div className="wiki-sidebar-header">General Information</div>
            
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Class</span>
              {/* Cited from screenshot 135710/135717 */}
              <span><img src={class4Icon} alt="Class 4" className="wiki-class-icon-lg"/>4</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Difficulty</span>
              {/* Cited from screenshot 135710/135717 */}
              <span>1: Trivial — 5: Medium</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Trophy Type</span>
              <span>Horns</span>
              <div className="wiki-trophy-grid">
                {/* Cited from screenshot 135710/135717 */}
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-silver">◆ Silver</span>
                  <span>67.37</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-gold">☗ Gold</span>
                  <span>116.92</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-diamond">☗ Diamond</span>
                  <span>154.08</span>
                </div>
              </div>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Weight</span>
              {/* Cited from screenshot 135710/135717 - transcribed exactly as shown */}
              0kg — 75kg<br/>
              <span className="wiki-sidebar-muted">0lbs — 165lbs</span>
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Fur</span>
               {/* Cited from screenshot 135710/135717 */}
               <span className="wiki-fs-sm">
                 Albino, Blue Gray, Brown, Leucistic, Melanistic, Slate Gray, Yellow
               </span>
            </div>

            <div className="wiki-sidebar-header">Locations</div>
            <div className="wiki-sidebar-section">
               {/* Cited from screenshot 135710/135717 */}
               <div className="wiki-mb-4"><span className="wiki-link">Sundarpatan</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main className="wiki-main">

            {/* Quote Block */}
            <div className="wiki-quote">
              "The Blue Sheep, named for its bluish-gray fur, possesses remarkable camouflage that allows it to blend seamlessly with the rocks and cliffs in its natural habitat. When faced with danger, this species remains still, making it even harder to detect. If noticed, it swiftly leaps towards steep cliffs and once again assumes a motionless stance. The Blue Sheep inhabits the mid-Himalayas, specifically elevations ranging from 2500 to 6000 meters. In this high-altitude environment, it faces predation primarily from Snow Leopards. Both males and females of this species possess horns, up to 80 cm in length for males, and a maximum length of 20 cm for the females."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-p-mb">
              The <strong>Blue Sheep</strong> is a <span className="wiki-link">class 4</span> sheep species that can be hunted on <span className="wiki-link">Sundarpatan</span>.
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
                <li><a href="#references" onClick={(e)=>scrollToId(e,'references')} className="wiki-link">References</a></li>
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
                        {/* Combined Male/Female Row pattern used in source, split here for clarity if percentages same */}
                        <tr>
                            <td className="wiki-td wiki-td-muted">
                                Male<span className="wiki-text-divider">/</span><span className="wiki-text-female">Female</span>
                            </td>
                            <td className="wiki-td">
                                Brown (37.38%)<br/>
                                Slate Grey (37.38%)
                            </td>
                            <td className="wiki-td">
                                Blue Grey (12.50%)<br/>
                                Yellow (12.50%)
                            </td>
                            <td className="wiki-td">
                                Leucistic (0.10%)<br/>
                                Melanistic (0.10%)
                            </td>
                            <td className="wiki-td">
                                Albino (0.05%)
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

export default BlueSheep;