import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import DrinkingZoneIcon from '../../../assets/DrinkingZoneIcon.webp';
import class6Icon from '../../../assets/Class6Icon.webp'; // Class 6 for Blue Wildebeest
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import BlueWildebeestMain from '../../../assets/BlueWildebeest.webp';
import ShotSchemeImg from '../../../assets/Blue_wildebeest_shot_scheme.webp';

// Fur Variant Images
import BlueWildebeest_Gold from '../../../assets/BlueWildebeest_Gold.webp';
import BlueWildebeest_Albino from '../../../assets/BlueWildebeest_Albino.webp';
import BlueWildebeest_Crowned from '../../../assets/BlueWildebeest_Crowned.webp';
import BlueWildebeest_DarkGrey from '../../../assets/BlueWildebeest_DarkGrey.webp';
import BlueWildebeest_Grey from '../../../assets/BlueWildebeest_Grey.webp';


const BlueWildebeest = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  const needZonesData = [
    {
      name: "Vurhonga Savanna",
      schedule: [
        { time: "00:00 - 03:30", type: "Resting", icon: RestingZoneIcon },
        { time: "03:00 - 06:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "06:00 - 09:30", type: "Drinking", icon: DrinkingZoneIcon },
        { time: "09:00 - 12:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "12:00 - 15:30", type: "Resting", icon: RestingZoneIcon },
        { time: "15:00 - 18:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "18:00 - 21:30", type: "Resting", icon: RestingZoneIcon },
        { time: "21:00 - 00:30", type: "Resting", icon: RestingZoneIcon },
      ]
    }
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Gregarious and wary" },
    { label: "Habitat", value: "Short grass plains, dense bush" },
    { label: "Senses", value: "Excellent sense of smell, good hearing and poor vision" },
    { label: "Social", value: "Sedentary herds of 6–10 females and their calves, Males form bachelor groups. Several herds will aggregate when resting and grazing." },
    { label: "Active", value: "Early morning, late afternoon" },
    { label: "Recommended Equipment", value: "Class 6 Ammo, Buck \"Snort Wheeze\" Caller" },
    { label: "Species", value: "Connochaetes taurinus", italic: true, isLink: true },
    { label: "Difficulty", value: "Hard" },
  ];

  // Fur Gallery Data (split by sex)
  const furGallery = [
    { name: "Albino", src: BlueWildebeest_Albino },
    { name: "Crowned", src: BlueWildebeest_Crowned },
    { name: "Dark Grey", src: BlueWildebeest_DarkGrey },
    { name: "Gold", src: BlueWildebeest_Gold },
    { name: "Grey", src: BlueWildebeest_Grey },
  ];

  // Trivia Data
  const triviaData = [
    "Wildebeest is an Afrikaans word meaning \"Wild Beast\".",
    "Up to 1.5 million wildebeests migrate through Africa in May and June to find greener pastures.",
    "They have been known to hybridise with Black Wildebeests."
  ];

  // References Data
  const referencesData = [
    "Blue Wildebeest Need Zones, Vurhonga Savanna",
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
          <span>Blue Wildebeest</span>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Blue Wildebeest</div>
            <div className="wiki-sidebar-image wiki-sidebar-image--contain">
              <img src={BlueWildebeestMain} alt="Blue Wildebeest" className="wiki-img-contain" />
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
                  <span>21.6</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-gold">☗ Gold</span>
                  <span>30.8</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-diamond">☗ Diamond</span>
                  <span>37.6</span>
                </div>
              </div>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Weight</span>
              190kg — 290kg<br/>
              <span className="wiki-sidebar-muted">419lbs — 639lbs</span>
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Fur</span>
               <span className="wiki-fs-sm">
                 Albino, Crowned, Dark Grey, Gold, Grey
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
              "The Blue Wildebeest, also known as the Gnu, is an African bovid with broad shoulders, cow-like horns, and a broad muzzle. A keystone species in plains and acacia savanna ecosystems, the wildebeest is, in fact, an antelope, despite its various bovine characteristics. The smaller of the two wildebeest species, the Blue Wildebeest is a grazer superbly adapted for a migratory existence. They range in mass from 118.00 kg to 270.00 kg and stand 1.15 m - 1.45 m tall. Male wildebeest are generally larger than females, while females are lighter in color. Blue Wildebeest herds can number in the fifties, all the way to the thousands, and their chaotic, raucous stampedes are truly iconic."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-p-mb">
              Also known as Gnu, this animal is classified as a <span className="wiki-link">class 6</span> bovid. It can be hunted in the <span className="wiki-link">Vurhonga Savanna Reserve</span>.
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
            <h2 className="wiki-h2" id="fur-variants">Fur Variants</h2>
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
                            <td className="wiki-td wiki-td-muted">
                                Male
                            </td>
                            <td className="wiki-td">
                                Grey (37.42%)<br/>
                                Dark Grey (37.42%)<br/>
                                Gold (25.05%)
                            </td>
                            <td className="wiki-td">
                                X
                            </td>
                            <td className="wiki-td">
                                Albino (0.10%)
                            </td>
                            <td className="wiki-td">
                                X
                            </td>
                        </tr>
                        {/* Female Row */}
                        <tr>
                            <td className="wiki-td wiki-td-female">
                                Female
                            </td>
                            <td className="wiki-td">
                                Grey (49.8%)<br/>
                                Dark Grey (49.8%)
                            </td>
                            <td className="wiki-td">
                                X
                            </td>
                            <td className="wiki-td">
                                Crowned (0.27%)<br/>
                                Albino (0.13%)
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

export default BlueWildebeest;