import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import DrinkingZoneIcon from '../../../assets/DrinkingZoneIcon.webp';
import class9Icon from '../../../assets/Class9Icon.webp'; // Class 9 for Water Buffalo
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import WaterBuffaloMain from '../../../assets/WaterBuffalo.webp';
import ShotSchemeImg from '../../../assets/Water_Buffalo_shot_scheme.webp';

// Fur Variant Images - Male
import WaterBuffalo_AlbinoMale from '../../../assets/WaterBuffalo_AlbinoMale.webp';
import WaterBuffalo_BlackMale from '../../../assets/WaterBuffalo_BlackMale.webp';
import WaterBuffalo_GreyMale from '../../../assets/WaterBuffalo_GreyMale.webp';
import WaterBuffalo_OrangeMale from '../../../assets/WaterBuffalo_OrangeMale.webp';

// Fur Variant Images - Female
import WaterBuffalo_AlbinoFemale from '../../../assets/WaterBuffalo_AlbinoFemale.webp';
import WaterBuffalo_BlackFemale from '../../../assets/WaterBuffalo_BlackFemale.webp';
import WaterBuffalo_BrownFemale from '../../../assets/WaterBuffalo_BrownFemale.webp';
import WaterBuffalo_GreyFemale from '../../../assets/WaterBuffalo_GreyFemale.webp';
import WaterBuffalo_OrangeFemale from '../../../assets/WaterBuffalo_OrangeFemale.webp';


const WaterBuffalo = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  // Note: Two reserves listed in screenshot
  const needZonesData = [
    {
      name: "Parque Fernando",
      schedule: [
        { time: "00:00 - 03:30", type: "Resting", icon: RestingZoneIcon },
        { time: "03:00 - 06:30", type: "Resting", icon: RestingZoneIcon },
        { time: "06:00 - 09:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "09:00 - 12:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "12:00 - 15:30", type: "Drinking", icon: DrinkingZoneIcon },
        { time: "15:00 - 18:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "18:00 - 21:30", type: "Resting", icon: RestingZoneIcon },
        { time: "21:00 - 00:30", type: "Resting", icon: RestingZoneIcon },
      ]
    },
    {
      name: "Sundarpatan",
      schedule: [
        { time: "00:00 - 03:00", type: "Resting", icon: RestingZoneIcon },
        { time: "03:00 - 06:00", type: "Resting", icon: RestingZoneIcon },
        { time: "06:00 - 09:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "09:00 - 12:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "12:00 - 15:00", type: "Drinking", icon: DrinkingZoneIcon },
        { time: "15:00 - 18:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "18:00 - 21:00", type: "Resting", icon: RestingZoneIcon },
        { time: "21:00 - 00:00", type: "Resting", icon: RestingZoneIcon },
      ]
    }
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Aggressive and territorial" },
    { label: "Habitat", value: "Swamps, floodplains, marshes" },
    { label: "Senses", value: "Excellent sense of smell, great sense of hearing and movement, but still is quite bad" },
    { label: "Social", value: "Mixed groups with a higher population of females, some small bachelor groups" },
    { label: "Active", value: "Morning and evening" },
    { label: "Recommended Equipment", value: "Class 9 Ammo" },
    { label: "Species", value: "Bubalus bubalis", italic: true, isLink: true },
    { label: "Difficulty", value: "Very Hard" },
  ];

  // Fur Gallery Data - Male
  const maleFurGallery = [
    { name: "Albino", src: WaterBuffalo_AlbinoMale },
    { name: "Black", src: WaterBuffalo_BlackMale },
    { name: "Grey", src: WaterBuffalo_GreyMale },
    { name: "Orange", src: WaterBuffalo_OrangeMale },
  ];

    // Fur Gallery Data - Female
    const femaleFurGallery = [
      { name: "Albino", src: WaterBuffalo_AlbinoFemale },
      { name: "Black", src: WaterBuffalo_BlackFemale },
      { name: "Brown", src: WaterBuffalo_BrownFemale },
      { name: "Grey", src: WaterBuffalo_GreyFemale },
      { name: "Orange", src: WaterBuffalo_OrangeFemale },
    ];

  // Trivia Data
  const triviaData = [
    "This Species has Truhorns",
    "It was the second buffalo species to be featured in the game after the Cape Buffalo",
    "It is known as \"Buffle d'eau\" in french."
  ];

  // References Data - inferred structure
  const referencesData = [
    "Water Buffalo Need Zones"
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
          <span>Water Buffalo</span>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Water Buffalo</div>
            <div className="wiki-sidebar-image">
              <img src={WaterBuffaloMain} alt="Water Buffalo" />
            </div>
            
            <div className="wiki-sidebar-header">General Information</div>
            
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Class</span>
              <span><img src={class9Icon} alt="Class 9" className="inline-block wiki-class-icon-sm align-middle mr-1.5"/>9</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Difficulty</span>
              <span>1: Trivial — 9: Legendary</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Trophy Type</span>
              <span>Horns</span>
              <div className="wiki-trophy-grid">
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-silver">◆ Silver</span>
                  <span>84.27</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-gold">☗ Gold</span>
                  <span>138.15</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-diamond">☗ Diamond</span>
                  <span>167.54</span>
                </div>
              </div>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Weight</span>
              ? — 1250kg<br/>
              <span className="wiki-sidebar-muted">? — 2756lbs</span>
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Fur</span>
               <span className="wiki-fs-sm">
                 Albino, Black, Brown, Grey, Orange
               </span>
            </div>

            <div className="wiki-sidebar-header">Locations</div>
            <div className="wiki-sidebar-section">
               <div className="wiki-mb-4"><span className="wiki-link">Parque Fernando</span></div>
               <div className="wiki-mb-4"><span className="wiki-link">Sundarpatan</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main className="wiki-main">

            {/* Quote Block */}
            <div className="wiki-quote">
              "The water buffalo is the largest member of the bovini tribe, making it a truly massive and intimidating animal. Feral herds of the water buffalo are present in many parts of the world, most notably in Australia, New Guinea, Argentina and Tunisia, after they were initially brought there for domestic purposes. Water buffalo can grow to be nearly 2.00 m at the shoulder and frequently weigh over a tonne, making them visibly larger than the African Cape Buffalo. They use their massive horns to defend their herd, fight for dominance, or spar with other herd-mates. Feral herds pose problems to local communities because of overgrazing and territorialism and are difficult to fight off due to their imposing stature."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-p-mb">
              The <strong>Water Buffalo</strong> is a <span className="wiki-link">class 9</span> bovine. It can be hunted in <span className="wiki-link">Parque Fernando</span> and <span className="wiki-link">Sundarpatan</span>. Was remodeled in June 2024 and now has a more detailed look. Water Buffalo is one of two species of buffalo in the game, the other one being the <span className="wiki-link">Cape Buffalo</span>.
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
                    <ol style={{listStyleType: 'none', marginLeft: '-20px'}}>
                      <li><a href="#fur-male" onClick={(e)=>scrollToId(e,'fur-male')} className="wiki-link" style={{marginLeft:'20px'}}>4.1. Male</a></li>
                      <li><a href="#fur-female" onClick={(e)=>scrollToId(e,'fur-female')} className="wiki-link" style={{marginLeft:'20px'}}>4.2. Female</a></li>
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
            <div style={{display:'flex', gap: '20px', flexWrap: 'wrap'}}>
                {needZonesData.map((reserve, index) => (
              <div key={index} style={{flex: '1 1 300px', marginBottom: '20px'}}>
                <table className="wiki-table wiki-table-fixed">
                            <thead>
                                <tr><th colSpan="2" className="wiki-th wiki-th-center">{reserve.name}{reserve.name === "Sundarpatan" ? "[1]" : ""}</th></tr>
                                <tr>
                                    <th className="wiki-th wiki-th-alt">Times</th>
                                    <th className="wiki-th wiki-th-alt">Activity</th>
                                </tr>
                            </thead>
                            <tbody>
                                {reserve.schedule.map((zone, i) => (
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
                ))}
            </div>

            {/* SHOT SCHEME */}
            <h2 className="wiki-h2" id="shot-scheme">Shot Scheme</h2>
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
            <h2 className="wiki-h2" id="fur-variants">Fur Variants</h2>
            
            <h3 id="fur-male" style={{marginTop:'10px', marginBottom:'8px', color: '#6fb2e6'}}>Male</h3>
            <div className="wiki-gallery-grid">
              {maleFurGallery.map((item, i) => (
                <div key={i} className="wiki-gallery-item">
                  <div className="wiki-gallery-placeholder">
                    <img src={item.src} alt={item.name} className="wiki-img-contain" />
                  </div>
                  <span className="wiki-gallery-label">{item.name}</span>
                </div>
              ))}
            </div>

            <h3 id="fur-female" style={{marginTop:'10px', marginBottom:'8px', color: '#6fb2e6'}}>Female</h3>
            <div className="wiki-gallery-grid">
              {femaleFurGallery.map((item, i) => (
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
                        {/* Male Row */}
                        <tr>
                            <td className="wiki-td">
                                <span className="wiki-text-male">Male</span>
                            </td>
                            <td className="wiki-td">
                                Grey (96.39%)
                            </td>
                            <td className="wiki-td">
                                Black (3.23%)
                            </td>
                            <td className="wiki-td">
                                Orange (0.26%)<br/>
                                Albino (0.13%)
                            </td>
                            <td className="wiki-td">
                                X
                            </td>
                        </tr>
                        {/* Female Row */}
                        <tr>
                            <td className="wiki-td">
                                <span className="wiki-text-female">Female</span>
                            </td>
                            <td className="wiki-td">
                                Grey (96.39%)<br/>
                                Brown (32.52%)
                            </td>
                            <td className="wiki-td">
                                Black (2.18%)
                            </td>
                            <td className="wiki-td">
                                Orange (0.17%)
                            </td>
                            <td className="wiki-td">
                                Albino (0.09%)
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

export default WaterBuffalo;