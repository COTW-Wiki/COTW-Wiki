import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import DrinkingZoneIcon from '../../../assets/DrinkingZoneIcon.webp'; // Kept for consistency, though unused in schedule
import class8Icon from '../../../assets/Class8Icon.webp'; // Class 8 for Saltwater Crocodile
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import CrocMain from '../../../assets/Crocodile.webp';
import ShotSchemeImg from '../../../assets/Saltwater_Crocodile_shot_scheme.webp';

// Scute Variant Images
import SaltwaterCrocodile_Albino from '../../../assets/SaltwaterCrocodile_Albino.webp';
import SaltwaterCrocodile_DarkBrown from '../../../assets/SaltwaterCrocodile_DarkBrown.webp';
import SaltwaterCrocodile_Grey from '../../../assets/SaltwaterCrocodile_Grey.webp';
import SaltwaterCrocodile_Leucistic from '../../../assets/SaltwaterCrocodile_Leucistic.webp';
import SaltwaterCrocodile_LightBrown from '../../../assets/SaltwaterCrocodile_LightBrown.webp';
import SaltwaterCrocodile_Melanistic from '../../../assets/SaltwaterCrocodile_Melanistic.webp';
import SaltwaterCrocodile_Olive from '../../../assets/SaltwaterCrocodile_Olive.webp';
import SaltwaterCrocodile_PiebaldVariation1 from '../../../assets/SaltwaterCrocodile_PiebaldVariation1.webp';
import SaltwaterCrocodile_PiebaldVariation2 from '../../../assets/SaltwaterCrocodile_PiebaldVariation2.webp';


const SaltwaterCrocodile = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  const needZonesData = [
    {
      name: "Emerald Coast",
      schedule: [
        { time: "00:00 - 04:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "04:00 - 08:00", type: "Resting", icon: RestingZoneIcon },
        { time: "08:00 - 12:00", type: "Resting", icon: RestingZoneIcon },
        { time: "12:00 - 16:00", type: "Resting", icon: RestingZoneIcon },
        { time: "16:00 - 20:00", type: "Resting", icon: RestingZoneIcon },
        { time: "20:00 - 00:00", type: "Feeding", icon: FeedingZoneIcon },
      ]
    }
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "One of the most aggressive species in the world, very dangerous" },
    { label: "Habitat", value: "Coastal brackish mangrove swamps and river deltas" },
    { label: "Senses", value: "Excellent sense of smell, hearing and vibration" },
    { label: "Social", value: "Solitary, territorial and extremely aggressive" },
    { label: "Active", value: "Night, dusk and dawn" },
    { label: "Recommended Equipment", value: "Class 8 ammo" },
    { label: "Species", value: "Crocodylus porosus", italic: true, isLink: true },
    { label: "Difficulty", value: "Very Hard" },
  ];

  // Scute Variants Gallery Data
  const scuteGallery = [
    { name: "Albino", src: SaltwaterCrocodile_Albino },
    { name: "Dark Brown", src: SaltwaterCrocodile_DarkBrown },
    { name: "Grey", src: SaltwaterCrocodile_Grey },
    { name: "Leucistic", src: SaltwaterCrocodile_Leucistic },
    { name: "Light Brown", src: SaltwaterCrocodile_LightBrown },
    { name: "Melanistic", src: SaltwaterCrocodile_Melanistic },
    { name: "Olive", src: SaltwaterCrocodile_Olive },
    { name: "Piebald Variation 1", src: SaltwaterCrocodile_PiebaldVariation1 },
    { name: "Piebald Variation 2", src: SaltwaterCrocodile_PiebaldVariation2 },
  ];

  // Tips Data
  const tipsData = [
    "Crocodiles can be found commonly in the mangrove marshes to the east of Tamba Coast and northeast of Saltfinger Shore. Running through the marshes is a great tactic as crocodiles will usually hiss a warning if they detect a player, giving up the croc's position, and allowing the player to quickly shoot the crocodile before it can run into deeper water and despawn or charge. Try running but once you hear the hiss, begin walking as to not spook the crocodile.",
    "If a crocodile has been spooked but hasn't gone into the water, it will make quick, short hisses until killed or returning to the water, this can alert a player that the croc is still up for bags.",
    "Like the alligator, not all crocodiles will attack but they do attack a bit more frequently than their American cousins.",
    "This could be a bug or not but there are times where the crocodile will become confused and begin running back and forth, stopping and repeating until interrupted in which it will make a break for the nearest water source. Line up a shot during this \"confusion period\".",
    "When the crocodiles are spooked/aggressive and run into the water they tend to loop an aggressive Snarling sound effect that sounds more like a Dog or wolf than a crocodile, using that sound cue you can cheese the Kill by looking underwater to see the crocodile, then shooting them. however this only works in a very specific set of conditions"
  ];

  // Trivia Data
  const triviaData = [
    "The word 'Crocodile' comes from the Greek word for the animal 'krokodilos'. If broken down further, the name could literally be translated as \"Pebble Worm\".",
    "The Saltwater Crocodile is the largest extant species of reptile in the world. The largest crocodile ever recorded was a specimen by the name of 'Lolong', who measured in at 1,075Kg (2,370Lbs) and 6.17m (20ft 3in) from snout to tail."
  ];

  // References Data
  const referencesData = [
    "Saltwater Crocodile Need Zones, Emerald Coast",
    "https://www.merriam-webster.com/dictionary/crocodile",
    "https://www.sciencetimes.com/articles/36213/20220220/remembering-lolong-largest-saltwater-crocodile-captivity-who-died-two-years.htm"
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
          <span>Saltwater Crocodile</span>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Saltwater Crocodile</div>
            <div className="wiki-sidebar-image">
              <img src={CrocMain} alt="Saltwater Crocodile" />
            </div>
            
            <div className="wiki-sidebar-header">General Information</div>
            
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Class</span>
              <span><img src={class8Icon} alt="Class 8" className="wiki-class-icon-lg"/>8</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Difficulty</span>
              <span>1: Trivial — 9: Legendary</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Trophy Type</span>
              <span>Length</span>
              <div className="wiki-trophy-grid">
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-silver">◆ Silver</span>
                  <span>420</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-gold">☗ Gold</span>
                  <span>760</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-diamond">☗ Diamond</span>
                  <span>1015</span>
                </div>
              </div>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Weight</span>
              368 kg — 1100 kg<br/>
              <span className="wiki-sidebar-muted">811lbs — 2425lbs</span>
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Skin</span>
               <span className="wiki-fs-sm">
                 Albino, Grey, Dark Brown, Leucistic, Light Brown, Melanistic, Olive, Piebald
               </span>
            </div>

            <div className="wiki-sidebar-header">Locations</div>
            <div className="wiki-sidebar-section">
               <div className="wiki-mb-4"><span className="wiki-link">Emerald Coast</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main className="wiki-main">

            {/* Quote Block */}
            <div className="wiki-quote">
              "Reaching lengths of more than 6.50 m and weights over 1,000.00 kg, the saltwater crocodile is the largest reptile on the planet and a formidable predator that can display surprising agility and speed when necessary. These huge animals are capable of eating just about anything and are particularly adept at drowning their preys. Named for its ability to survive in full salinity saltwater, they typically live in brackish (low salinity) water near the coast. Saltwater crocodiles have 66 teeth on average and the greatest bite pressure of any animal in the world. Saltwater crocodiles are aggressive and deadly giants - Do. Not. Get. Close. To. Them."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-p-mb">
              The <strong>Saltwater Crocodile</strong> is the largest reptile and crocodilian in game, coming in at a <span className="wiki-link">Class 8</span>. It can be hunted on the <span className="wiki-link">Emerald Coast</span>. It is the second crocodilian/reptile to be introduced to the game, the first being the <span className="wiki-link">American Alligator</span>.
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
                <li><a href="#scute-variants" onClick={(e)=>scrollToId(e,'scute-variants')} className="wiki-link">Scute Variants</a></li>
                <li><a href="#scute-rarity" onClick={(e)=>scrollToId(e,'scute-rarity')} className="wiki-link">Scute Variant Rarity</a></li>
                <li><a href="#tips" onClick={(e)=>scrollToId(e,'tips')} className="wiki-link">Tips</a></li>
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
                        <tr><th colSpan="2" className="wiki-th wiki-th-center">Emerald Coast[1]</th></tr>
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
            <h2 className="wiki-h2" id="shot-scheme">Shot Scheme</h2>
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

            {/* SCUTE VARIANTS (Gallery) */}
            <h2 className="wiki-h2" id="scute-variants">Scute Variants</h2>
            <div className="wiki-gallery-grid">
              {scuteGallery.map((item, i) => (
                <div key={i} className="wiki-gallery-item">
                  <div className="wiki-gallery-placeholder">
                    <img src={item.src} alt={item.name} className="wiki-img-contain" />
                  </div>
                  <span className="wiki-gallery-label">{item.name}</span>
                </div>
              ))}
            </div>

            {/* SCUTE VARIANT RARITY TABLE */}
            <h2 id="scute-rarity" className="wiki-h2">Scute Variant Rarity</h2>
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
                                Olive (37.35%)<br/>
                                Grey (37.35%)<br/>
                                Dark Brown (25.00%)
                            </td>
                            <td className="wiki-td">
                                X
                            </td>
                            <td className="wiki-td">
                                X
                            </td>
                            <td className="wiki-td">
                                Albino (0.05%)<br/>
                                Leucistic (0.05%)<br/>
                                Light Brown (0.05%)<br/>
                                Melanistic (0.05%)<br/>
                                Piebald Variation 1 (0.05%)<br/>
                                Piebald Variation 2 (0.05%)
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* TIPS */}
            <h2 id="tips" className="wiki-h2">Tips</h2>
            {tipsData.map((tip, idx) => (
                <p key={idx} className="wiki-mb-15">{tip}</p>
            ))}

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

export default SaltwaterCrocodile;