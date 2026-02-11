import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import class1Icon from '../../../assets/Class1Icon.webp';
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import EasternCottontailRabbitMain from '../../../assets/EasternCottontailRabbit.webp';

// Fur Variant Images
// Assuming naming convention based on screenshots showing Left/Right sides for some
import EasternCottontailRabbit_AlbinoRight from '../../../assets/EasternCottontailRabbit_AlbinoRightSide.webp';
import EasternCottontailRabbit_BrownRight from '../../../assets/EasternCottontailRabbit_BrownRightSide.webp';
import EasternCottontailRabbit_GreyRight from '../../../assets/EasternCottontailRabbit_GreyRightSide.webp';
import EasternCottontailRabbit_LightBrownRight from '../../../assets/EasternCottontailRabbit_LightBrownRightSide.webp';
import EasternCottontailRabbit_LightGreyRight from '../../../assets/EasternCottontailRabbit_LightGreyRightSide.webp';
import EasternCottontailRabbit_Leucistic1Right from '../../../assets/EasternCottontailRabbit_LeucisticVariation1RightSide.webp';
import EasternCottontailRabbit_Leucistic1Left from '../../../assets/EasternCottontailRabbit_LeucisticVariation1LeftSide.webp';
import EasternCottontailRabbit_Leucistic2Right from '../../../assets/EasternCottontailRabbit_LeucisticVariation2RightSide.webp';
import EasternCottontailRabbit_Leucistic2Left from '../../../assets/EasternCottontailRabbit_LeucisticVariation2LeftSide.webp';
import EasternCottontailRabbit_MelanisticRight from '../../../assets/EasternCottontailRabbit_MelanisticRightSide.webp';


const EasternCottontailRabbit = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  // Source: Екранна снимка 2026-01-16 153426.png
  const needZonesData = [
    {
      name: "Mississippi Acres & New England", // Inferred from Locations list
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
  // Source: Екранна снимка 2026-01-16 153417.jpg
  const features = [
    { label: "Behavior", value: "Always on the lookout for danger" },
    { label: "Habitat", value: "Meadows, farmlands and forest clearings" },
    { label: "Senses", value: "Very good movement vision and hearing, exceptional sense of smell" },
    { label: "Social", value: "Solitary and very territorial" },
    { label: "Active", value: "Crepuscular, active at dawn and dusk" },
    { label: "Recommended Equipment", value: "Class 1 ammo" },
    { label: "Species", value: "Sylvilagus floridanus", italic: true, isLink: true },
    { label: "Difficulty", value: "Easy" },
  ];

  // Fur Gallery Data
  // Source: Екранна снимка 2026-01-16 153450.jpg, 153457.png
  const furGallery = [
    { name: "Albino - Right Side", src: EasternCottontailRabbit_AlbinoRight },
    { name: "Brown - Right Side", src: EasternCottontailRabbit_BrownRight },
    { name: "Grey - Right Side", src: EasternCottontailRabbit_GreyRight },
    { name: "Light Brown - Right Side", src: EasternCottontailRabbit_LightBrownRight },
    { name: "Light Grey - Right Side", src: EasternCottontailRabbit_LightGreyRight },
    { name: "Leucistic Variation 1 - Right Side", src: EasternCottontailRabbit_Leucistic1Right },
    { name: "Leucistic Variation 1 - Left Side", src: EasternCottontailRabbit_Leucistic1Left },
    { name: "Leucistic Variation 2 - Right Side", src: EasternCottontailRabbit_Leucistic2Right },
    { name: "Leucistic Variation 2 - Left Side", src: EasternCottontailRabbit_Leucistic2Left },
    { name: "Melanistic - Right Side", src: EasternCottontailRabbit_MelanisticRight },
  ];

  // --- SCROLL HELPER ---
  const scrollToId = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="wiki-page">
      <div className="wiki-inner">
        
        {/* PAGE HEADER */}
        <div className="wiki-header">
          <span>Eastern Cottontail Rabbit</span>
          <div className="wiki-edit-actions">
          </div>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Eastern Cottontail Rabbit</div>
            <div className="wiki-sidebar-image">
              <img src={EasternCottontailRabbitMain} alt="Eastern Cottontail Rabbit" />
            </div>
            
            <div className="wiki-sidebar-header">General Information</div>
            
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Class</span>
              <span><img src={class1Icon} alt="Class 1" className="inline-block wiki-class-icon-sm align-middle mr-1.5"/>1</span>
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
                  <span>1.05</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-gold">☗ Gold</span>
                  <span>1.58</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-diamond">☗ Diamond</span>
                  <span>1.97</span>
                </div>
              </div>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Weight</span>
              800g — 2.1kg<br/>
              1.8lbs — 5lbs
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Fur</span>
               <span className="wiki-fs-sm">
                  Albino, Brown, Grey, Leucistic, Light Grey, Melanistic
               </span>
            </div>

            <div className="wiki-sidebar-header">Locations</div>
            <div className="wiki-sidebar-section">
               <div className="wiki-mb-4"><span className="wiki-link">Mississippi Acres Preserve</span></div>
               <div className="wiki-mb-4"><span className="wiki-link">New England Mountains</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main className="wiki-main">

            {/* Quote Block */}
            <div className="wiki-quote">
              "Eastern cottontail rabbits are birthing machines and the most widespread rabbit in the United States. Males may be sexually mature at only one month of age and females within their first year. Prey for just about anything. They're lucky if they live for two or three years, even though their lifespan is eight to 10 years. Named for its white, cottony-looking tail, the Eastern Cottontail is 15-19 inches long (38-48 cm) and weighs 2-4 pounds (0.8-1.8 kg). Cottontails are built for speed, jumping, and agility. They have powerful legs and large back feet, which enables them to run at up to 18 miles per hour (29 kmh) for up to half a mile (0.8 km)."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-p-mb">
              The <strong>Eastern Cottontail Rabbit</strong> is a member of the lagomorpha family, it can be found on <span className="wiki-link">Mississippi Acres Preserve</span> and <span className="wiki-link">New England Mountains</span>. It is the sixth species of lagomorph introduced to the game after the <span className="wiki-link">Antelope Jackrabbit</span>.
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
                <li><a href="#trivia" onClick={scrollToId('trivia')} className="wiki-link">Trivia</a></li>
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
                        <tr><th colSpan="2" className="wiki-th wiki-th-center">Mississippi Acres & New England</th></tr>
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
            <h2 id="fur-variants" className="wiki-h2">Fur Variants</h2>
            <div className="wiki-gallery-grid">
              {furGallery.map((item, i) => (
                <div key={i} className="wiki-gallery-item">
                  <div className="wiki-gallery-placeholder w-[146px] h-[165px] bg-[#2a4b63] flex items-center justify-center p-2.5">
                    <img src={item.src} alt={item.name} className="max-w-full max-h-full object-contain rounded-sm" />
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
                            Grey (37.35%)<br/>
                            Brown (37.35%)<br/>
                            Light Grey (12.50%)<br/>
                            Light Brown (12.50%)
                        </td>
                        <td className="wiki-td">X</td>
                        <td className="wiki-td">
                            Leucistic Variation 1 (0.10%)<br/>
                            Leucistic Variation 2 (0.10%)
                        </td>
                        <td className="wiki-td">
                            Albino (0.05%)<br/>
                            Melanistic (0.05%)
                        </td>
                    </tr>
                </tbody>
            </table>

            {/* TRIVIA */}
            <h2 id="trivia" className="wiki-h2">Trivia</h2>
            <ul className="wiki-ul">
              <li className="wiki-li">The Eastern Cottontail Rabbit is one of 7 lagomorph (hares and rabbits) in the game. The others are the <span className="wiki-link">White-tailed Jackrabbit</span>, the <span className="wiki-link">Scrub Hare</span>, the <span className="wiki-link">European Rabbit</span>, the <span className="wiki-link">European Hare</span>, the <span className="wiki-link">Antelope Jackrabbit</span>, and the <span className="wiki-link">Mountain Hare</span>.</li>
            </ul>

            <AnimalsTableMini />
          </main>
        </div>
      </div>
    </div>
  );
};

export default EasternCottontailRabbit;