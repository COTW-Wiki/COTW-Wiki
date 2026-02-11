import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import DrinkingZoneIcon from '../../../assets/DrinkingZoneIcon.webp';
import class4Icon from '../../../assets/Class4Icon.webp'; // Class 4 for Lesser Kudu
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import LesserKuduMain from '../../../assets/The_Hunter_Cot_W_F_2018-08-21_18-43-48-02.webp';
import ShotSchemeImg from '../../../assets/Lesser_kudu_shot_scheme.webp';

// Fur Variant Images (Placeholders based on screenshots)
// Male
import LesserKudu_AlbinoMale from '../../../assets/LesserKudu_AlbinoMale.webp';
import LesserKudu_GreyMale from '../../../assets/LesserKudu_GreyMale.webp';
import LesserKudu_MelanisticMale from '../../../assets/LesserKudu_MelanisticMale.webp';

// Female
import LesserKudu_AlbinoFemale from '../../../assets/LesserKudu_AlbinoFemale.webp';
import LesserKudu_DarkBrownFemale from '../../../assets/LesserKudu_DarkBrownFemale.webp';
import LesserKudu_DuskyFemale from '../../../assets/LesserKudu_DuskyFemale.webp';
import LesserKudu_GreyFemale from '../../../assets/LesserKudu_GreyFemale.webp';
import LesserKudu_RedBrownFemale from '../../../assets/LesserKudu_RedBrownFemale.webp';

const LesserKudu = () => {

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
      name: "Vurhonga Savanna",
      schedule: [
        { time: "00:00 - 03:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "03:00 - 07:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "07:00 - 10:30", type: "Resting", icon: RestingZoneIcon },
        { time: "10:00 - 14:30", type: "Resting", icon: RestingZoneIcon },
        { time: "14:00 - 18:30", type: "Resting", icon: RestingZoneIcon },
        { time: "18:00 - 21:30", type: "Drinking", icon: DrinkingZoneIcon },
        { time: "21:00 - 00:30", type: "Feeding", icon: FeedingZoneIcon },
      ]
    }
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Skittish and shy" },
    { label: "Habitat", value: "Dry, thorn bush and heavily forested regions" },
    { label: "Senses", value: "Excellent hearing and very good vision and sense of smell" },
    { label: "Social", value: "Adult males are solitary, females and families live in small groups" },
    { label: "Active", value: "Early evening to morning" },
    { label: "Recommended Equipment", value: "Class 4 Ammo, Antler Rattler, Buck \"Snort Wheeze\" Caller" },
    { label: "Species", value: "Tragelaphus imberbis", italic: true, isLink: true },
    { label: "Difficulty", value: "Average" },
  ];

  // Fur Gallery Data (split by sex)
  const maleGallery = [
    { name: "Albino", src: LesserKudu_AlbinoMale },
    { name: "Grey", src: LesserKudu_GreyMale },
    { name: "Melanistic", src: LesserKudu_MelanisticMale },
  ];

  const femaleGallery = [
    { name: "Albino", src: LesserKudu_AlbinoFemale },
    { name: "Dark Brown", src: LesserKudu_DarkBrownFemale },
    { name: "Dusky", src: LesserKudu_DuskyFemale },
    { name: "Grey", src: LesserKudu_GreyFemale },
    { name: "Red Brown", src: LesserKudu_RedBrownFemale },
  ];

  // Trivia Data (No specific Trivia screenshot provided, keeping empty or generic placeholder if needed, 
  // but since none was provided in the source images, I will omit the list items to avoid fabrication).
  const triviaData = [];

  return (
    <div className="wiki-page">
      <div className="wiki-inner">
        
        {/* PAGE HEADER */}
        <div className="wiki-header">
          <span>Lesser Kudu</span>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Lesser Kudu</div>
            <div className="wiki-sidebar-image">
              <img src={LesserKuduMain} alt="Lesser Kudu" />
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
                  <span>107.8</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-gold">☗ Gold</span>
                  <span>132.8</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-diamond">☗ Diamond</span>
                  <span>151.6</span>
                </div>
              </div>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Weight</span>
              {/* Cited from screenshot 1 */}
              50kg — 105kg<br/>
              <span className="wiki-sidebar-muted">110lbs — 231lbs</span>
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Fur</span>
               {/* Cited from screenshot 1 */}
               <span className="wiki-fs-sm">
                 Albino, Grey, Dark Brown, Dusky, Melanistic, Red Brown
               </span>
            </div>

            <div className="wiki-sidebar-header">Locations</div>
            <div className="wiki-sidebar-section">
               {/* Cited from screenshot 1 */}
               <div className="wiki-mb-4"><span className="wiki-link">Vurhonga Savanna</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main className="wiki-main">

            {/* Quote Block */}
            <div className="wiki-quote">
              "The Lesser Kudu is one of the most sought after targets for trophy hunters. Immediately identifiable due to its long spiral horns, the kudu is a browser, found across the eastern reaches of Africa. The smaller of the two kudus found in Africa, the lesser kudu weighs around 100.00 kg and can be more than 1.00 m tall at the shoulder. Female kudu is smaller than bulls, move around in small herds and have set home ranges, whereas males move around a great deal singly or in small bachelor herds at around two years of age. Kudu bulls also fight over females at a mating time and the fights have been known to be fatal, often when the horns of the two individuals interlock and they die of starvation."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-p-mb">
              The <strong>Lesser Kudu</strong> is a <span className="wiki-link">class 4</span> antelope. It can be hunted in the <span className="wiki-link">Vurhonga Savanna Reserve</span>. It is one of 6 antelope species besides the <span className="wiki-link">Nilgai</span>, <span className="wiki-link">Blackbuck</span>, <span className="wiki-link">Gemsbok</span>, <span className="wiki-link">Blue Wildebeest</span> and <span className="wiki-link">Springbok</span>.
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
                <li><a href="#fur-variants" onClick={(e)=>scrollToId(e,'fur-variants')} className="wiki-link">Fur Variants</a>
                  <ol style={{marginTop:'6px', marginLeft:'-30px', listStyleType: 'none'}}>
                    <li><a href="#fur-male" onClick={(e)=>scrollToId(e,'fur-male')} className="wiki-link">4.1 Male</a></li>
                    <li><a href="#fur-female" onClick={(e)=>scrollToId(e,'fur-female')} className="wiki-link">4.2 Female</a></li>
                  </ol>
                </li>
                <li><a href="#fur-rarity" onClick={(e)=>scrollToId(e,'fur-rarity')} className="wiki-link">Fur Variant Rarity</a></li>
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
                        {/* Male Row */}
                        <tr>
                            <td className="wiki-td wiki-td-muted">
                                Male
                            </td>
                            <td className="wiki-td">
                                Grey (99.88%)
                            </td>
                            <td className="wiki-td">
                                X
                            </td>
                            <td className="wiki-td">
                                X
                            </td>
                            <td className="wiki-td">
                                Albino (0.07%)<br/>
                                Melanistic (0.05%)
                            </td>
                        </tr>
                        {/* Female Row */}
                        <tr>
                            <td className="wiki-td wiki-td-female">
                                Female
                            </td>
                            <td className="wiki-td">
                                Grey (49.86%)<br/>
                                Dark Brown (49.86%)
                            </td>
                            <td className="wiki-td">
                                X
                            </td>
                            <td className="wiki-td">
                                Dusky (0.10%)<br/>
                                Red Brown (0.10%)
                            </td>
                            <td className="wiki-td">
                                Albino (0.07%)
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* TRIVIA */}
            {/* No trivia data provided in source images */}
            {triviaData.length > 0 && (
              <>
                <h2 id="trivia" className="wiki-h2">Trivia</h2>
                <ul className="wiki-ul wiki-ul-disc">
                    {triviaData.map((point, idx) => (
                        <li key={idx} className="wiki-mb-10">{point}</li>
                    ))}
                </ul>
              </>
            )}

            <div className="wiki-mt-40">
                <AnimalsTableMini />
            </div>
            
          </main>
        </div>
      </div>
    </div>
  );
};

export default LesserKudu;