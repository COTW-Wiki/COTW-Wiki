import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import DrinkingZoneIcon from '../../../assets/DrinkingZoneIcon.webp';
import class6Icon from '../../../assets/Class6Icon.webp'; // Class 6 for Barasingha
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import BarasinghaMain from '../../../assets/Barasingha.webp';
import ShotSchemeImg from '../../../assets/Barasingha_shot_scheme.webp';

// Fur Variant Images - Male
import Barasingha_AlbinoMaleRightSide from '../../../assets/Barasingha_AlbinoMaleRightSide.webp';
import Barasingha_BrownMaleRightSide from '../../../assets/Barasingha_BrownMaleRightSide.webp';
import Barasingha_DarkBrownMaleRightSide from '../../../assets/Barasingha_DarkBrownMaleRightSide.webp';
import Barasingha_DarkRedMaleRightSide from '../../../assets/Barasingha_DarkRedMaleRightSide.webp';
import Barasingha_LightBrownMaleRightSide from '../../../assets/Barasingha_LightBrownMaleRightSide.webp';
import Barasingha_LeucisticMaleRightSide from '../../../assets/Barasingha_LeucisticMaleRightSide.webp';
import Barasingha_MelanisticMaleRightSide from '../../../assets/Barasingha_MelanisticMaleRightSide.webp';
import Barasingha_PiebaldMaleRightSide from '../../../assets/Barasingha_PiebaldMaleRightSide.webp';
import Barasingha_PiebaldMaleLeftSide from '../../../assets/Barasingha_PiebaldMaleLeftSide.webp';
import Barasingha_RedMaleRightSide from '../../../assets/Barasingha_RedMaleRightSide.webp';

// Fur Variant Images - Female
import Barasingha_AlbinoFemaleRightSide from '../../../assets/Barasingha_AlbinoFemaleRightSide.webp';
import Barasingha_BrownFemaleRightSide from '../../../assets/Barasingha_BrownFemaleRightSide.webp';
import Barasingha_DarkBrownFemaleRightSide from '../../../assets/Barasingha_DarkBrownFemaleRightSide.webp';
import Barasingha_DarkRedFemaleRightSide from '../../../assets/Barasingha_DarkRedFemaleRightSide.webp';
import Barasingha_LightBrownFemaleRightSide from '../../../assets/Barasingha_LightBrownFemaleRightSide.webp';
import Barasingha_LeucisticFemaleRightSide from '../../../assets/Barasingha_LeucisticFemaleRightSide.webp';
import Barasingha_MelanisticFemaleRightSide from '../../../assets/Barasingha_MelanisticFemaleRightSide.webp';
import Barasingha_PiebaldFemaleRightSide from '../../../assets/Barasingha_PiebaldFemaleRightSide.webp';
import Barasingha_PiebaldFemaleLeftSide from '../../../assets/Barasingha_PiebaldFemaleLeftSide.webp';
import Barasingha_RedFemaleRightSide from '../../../assets/Barasingha_RedFemaleRightSide.webp';


const Barasingha = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  const needZonesData = [
    {
      name: "Sundarpatan",
      schedule: [
        { time: "00:00 - 03:00", type: "Resting", icon: RestingZoneIcon },
        { time: "03:00 - 06:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "06:00 - 09:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "09:00 - 12:00", type: "Resting", icon: RestingZoneIcon },
        { time: "12:00 - 15:00", type: "Drinking", icon: DrinkingZoneIcon },
        { time: "15:00 - 18:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "18:00 - 21:00", type: "Resting", icon: RestingZoneIcon },
        { time: "21:00 - 00:00", type: "Resting", icon: RestingZoneIcon },
      ]
    }
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Social, relaxed, water-loving grazers" },
    { label: "Habitat", value: "Wetland & tall-grassed areas close to rivers in the Terai lowlands" },
    { label: "Senses", value: "Acute sense of smell, decent hearing and sight" },
    { label: "Social", value: "Forms herds of similar age and gender. Mixed herds can also occur, usually led by a female. Males are likely to roam between herds" },
    { label: "Active", value: "Daytime" },
    { label: "Recommended Equipment", value: "Class 6 Ammo, Antler Rattler" },
    { label: "Species", value: "Rucervus duvaucelii duvaucelii", italic: true, isLink: true },
    { label: "Difficulty", value: "Average" },
  ];

  // Fur Gallery Data - Male
  const maleFurGallery = [
    { name: "Albino", src: Barasingha_AlbinoMaleRightSide },
    { name: "Brown", src: Barasingha_BrownMaleRightSide },
    { name: "Dark Brown", src: Barasingha_DarkBrownMaleRightSide },
    { name: "Dark Red", src: Barasingha_DarkRedMaleRightSide },
    { name: "Light Brown", src: Barasingha_LightBrownMaleRightSide },
    { name: "Leucistic", src: Barasingha_LeucisticMaleRightSide },
    { name: "Melanistic", src: Barasingha_MelanisticMaleRightSide },
    { name: "Piebald (Right)", src: Barasingha_PiebaldMaleRightSide },
    { name: "Piebald (Left)", src: Barasingha_PiebaldMaleLeftSide },
    { name: "Red", src: Barasingha_RedMaleRightSide },
  ];

  // Fur Gallery Data - Female
  const femaleFurGallery = [
    { name: "Albino", src: Barasingha_AlbinoFemaleRightSide },
    { name: "Brown", src: Barasingha_BrownFemaleRightSide },
    { name: "Dark Brown", src: Barasingha_DarkBrownFemaleRightSide },
    { name: "Dark Red", src: Barasingha_DarkRedFemaleRightSide },
    { name: "Leucistic", src: Barasingha_LeucisticFemaleRightSide },
    { name: "Light Brown", src: Barasingha_LightBrownFemaleRightSide },
    { name: "Melanistic", src: Barasingha_MelanisticFemaleRightSide },
    { name: "Piebald (Right)", src: Barasingha_PiebaldFemaleRightSide },
    { name: "Piebald (Left)", src: Barasingha_PiebaldFemaleLeftSide },
    { name: "Red", src: Barasingha_RedFemaleRightSide },
  ];

  // Trivia Data
  const triviaData = [
    "The Barasingha, also called Swamp Deer, is most commonly found around wetlands and rivers, eating one of its main food sources, wetland plants.",
    "At one point, the Barasingha was considered Critically Endangered. And while decades of conservation efforts have stabilized the population, the IUCN (International Union for Conservation of Nature) still lists this species as vulnerable. It's once wide spread population is now only represented by a few isolated populations, and certain populations in places like Pakistan and Bangladesh have gone extinct."
  ];

  // References Data
  const referencesData = [
    "Barasingha Need Zones, Sundarpatan",
    "worlddeer.org",
    "mixlab.com",
    "earthsendangered.com",
    "iucnredlist.org"
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
          <span>Barasingha</span>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Barasingha</div>
            <div className="wiki-sidebar-image">
              <img src={BarasinghaMain} alt="Barasingha" />
            </div>
            
            <div className="wiki-sidebar-header">General Information</div>
            
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Class</span>
              <span><img src={class6Icon} alt="Class 6" className="wiki-class-icon-lg"/>6</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Difficulty</span>
              <span>1: Trivial — 5: Medium</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Trophy Type</span>
              <span>Antlers</span>
              <div className="wiki-trophy-grid">
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-silver">◆ Silver</span>
                  <span>95.88</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-gold">☗ Gold</span>
                  <span>170.26</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-diamond">☗ Diamond</span>
                  <span>226.05</span>
                </div>
              </div>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Weight</span>
              0kg — 280kg<br/>
              <span className="wiki-sidebar-muted">0lbs — 617lbs</span>
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Fur</span>
               <span className="wiki-fs-sm">
                 Albino, Brown, Dark Brown, Dark Red, Leucistic, Light Brown, Melanistic, Piebald, Red
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
              "The Barasingha, also known as the Swamp Deer, is a deer native to the Indian subcontinent. It gets its name from its impressive antlers. Bārah-singgā means 'twelve-horned' in Hindi. Mature males normally have around 10 - 14 tines, with reports of up to 20. Apart from their antlers, the Barasingha is one of the largest deer species in the region, with a shoulder height of about 110 cm and stags weighing in at 200 - 280 kg. While they can be found in wooded or drier areas, feeding on various types of grasses, their main habitat, as their western name suggests, is damp and marshy wetlands, where they feed on aquatic plants in the water."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-p-mb">
              The <strong>Barasingha</strong> is a <span className="wiki-link">class 6</span> deer species that can be hunted on <span className="wiki-link">Sundarpatan</span>.
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
                <ol style={{listStyleType: 'none', marginLeft: '-20px'}}>
                     <li><a href="#fur-male" onClick={(e)=>scrollToId(e,'fur-male')} style={{...styles.link, marginLeft:'20px'}}>4.1. Male</a></li>
                     <li><a href="#fur-female" onClick={(e)=>scrollToId(e,'fur-female')} style={{...styles.link, marginLeft:'20px'}}>4.2. Female</a></li>
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
                    <img src={item.src} alt={item.name} style={{width:'100%', height: '100%', objectFit: 'contain', }} />
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
                                Brown (24.90%)<br/>
                                Light Brown (24.90%)<br/>
                                Red (24.90%)<br/>
                                Dark Brown (12.50%)<br/>
                                Dark Red (12.50%)
                            </td>
                            <td className="wiki-td">
                                X
                            </td>
                            <td className="wiki-td">
                                Leucistic (0.10%)<br/>
                                Piebald (0.10%)
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

export default Barasingha;