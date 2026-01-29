import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import DrinkingZoneIcon from '../../../assets/DrinkingZoneIcon.webp';
import class2Icon from '../../../assets/Class2Icon.webp'; // Class 2 for Gray Fox
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import GrayFoxMain from '../../../assets/GrayFox.webp';
import ShotSchemeImage from '../../../assets/Gray_Fox_shot_scheme.webp';

// Fur Variant Images (Placeholders)
import GrayFox_Albino from '../../../assets/GrayFox_AlbinoLeftSide.webp';
import GrayFox_Grey from '../../../assets/GrayFox_GreyLeftSide.webp';
import GrayFox_Leucistic from '../../../assets/GrayFox_LeucisticLeftSide.webp';
import GrayFox_Melanistic from '../../../assets/GrayFox_MelanisticLeftSide.webp';
import GrayFox_Piebald1 from '../../../assets/GrayFox_PiebaldVariation1LeftSide.webp';
import GrayFox_Piebald2 from '../../../assets/GrayFox_PiebaldVariation2RightSide.webp';
import GrayFox_Red from '../../../assets/GrayFox_RedLeftSide.webp';
import GrayFox_TwoTones from '../../../assets/GrayFox_TwoTonesLeftSide.webp';


const GrayFox = () => {

  // Smooth-scroll helper for the Table of Contents
  const scrollToId = (id) => {
    try {
      const el = document.getElementById(id);
      if (!el) return;
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.replaceState(null, '', `#${id}`);
    } catch (e) {
      // ignore in non-DOM environments
    }
  };

  // --- DATA SOURCES ---

  // Need Zone Times
  const needZonesData = [
    {
      name: "Mississippi Acres / New England Mountains", // Inferred from locations
      schedule: [
        { time: "00:00 - 04:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "04:00 - 07:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "07:00 - 10:30", type: "Resting", icon: RestingZoneIcon },
        { time: "10:00 - 13:30", type: "Resting", icon: RestingZoneIcon },
        { time: "13:00 - 17:30", type: "Resting", icon: RestingZoneIcon },
        { time: "17:00 - 20:30", type: "Drinking", icon: DrinkingZoneIcon },
        { time: "20:00 - 00:30", type: "Feeding", icon: FeedingZoneIcon },
      ]
    }
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Curious, Cautious, Patient" },
    { label: "Habitat", value: "Forest and Brushland" },
    { label: "Senses", value: "Excellent senses of sight and smell, good hearing" },
    { label: "Social", value: "Typically solitary" },
    { label: "Active", value: "Dusk and Dawn" },
    { label: "Recommended Equipment", value: "Class 2 ammo, Predator \"Jackrabbit\" Caller" },
    { label: "Species", value: "Urocyon cinereoargenteus", italic: true, isLink: true },
    { label: "Difficulty", value: "Average" },
  ];

  // Fur Gallery Data
  const furGallery = [
    { name: "Albino - Left Side", src: GrayFox_Albino },
    { name: "Grey - Left Side", src: GrayFox_Grey },
    { name: "Leucistic - Left Side", src: GrayFox_Leucistic },
    { name: "Melanistic - Left Side", src: GrayFox_Melanistic },
    { name: "Piebald Variation 1 - Left Side", src: GrayFox_Piebald1 },
    { name: "Piebald Variation 2 - Left Side", src: GrayFox_Piebald2 },
    { name: "Piebald Variation 2 - Right Side", src: GrayFox_Piebald2 }, // Using same placeholder for right side if specific right img not available
    { name: "Red - Left Side", src: GrayFox_Red },
    { name: "Two Tones - Left Side", src: GrayFox_TwoTones },
  ];

  // Trivia Data
  const triviaData = [
    "The Gray Fox is sometimes called the Tree Fox because of its unique ability to climb trees."
  ];

  // (References removed per request)

  return (
    <div className="wiki-page">
      <div className="wiki-inner">
        
        {/* PAGE HEADER */}
        <div className="wiki-header">
          <span>Gray Fox</span>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Gray Fox</div>
            <div className="wiki-sidebar-image">
              <img src={GrayFoxMain} alt="Gray Fox" />
            </div>
            
            <div className="wiki-sidebar-header">General Information</div>
            
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Class</span>
              <span><img src={class2Icon} alt="Class 2" className="wiki-class-icon-lg"/>2</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Difficulty</span>
              <span>1: Trivial — 9: Legendary</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Trophy Type</span>
              <span>Weight</span>
              <div className="wiki-trophy-grid">
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-silver">◆ Silver</span>
                  <span>3.84</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-gold">☗ Gold</span>
                  <span>5.32</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-diamond">☗ Diamond</span>
                  <span>6.43</span>
                </div>
              </div>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Weight</span>
              3.1kg — 6.8kg<br/>
              <span className="wiki-sidebar-muted">7lbs — 15lbs</span>
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Fur</span>
               <span className="wiki-fs-sm">
                  Albino, Grey, Leucistic, Melanistic, Piebald, Red, Two Tones
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
              "The Gray Fox is found in forests, brushlands, and swamp areas of North and Central America. They grow to between 0.72 m to 1.12 m from nose to tail, and weigh between 3.50 kg to 6.80 kg. Often mistaken for Red Foxes due to the red fur around the head, neck, and belly. They can be easily distinguished by their peppered grey coats and a tail that bears a black stripe and tip. Gray Foxes are crepuscular omnivores, feeding on rabbits, rodents, small birds, and fruit. They are typically solitary animals, but will mate for several months of the year until their kits are old, enough to fend for themselves."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-p-mb">
              The <strong>Gray Fox</strong> is a small canid in <span className="wiki-link">Mississippi Acres Preserve</span> and <span className="wiki-link">New England Mountains</span>.
            </p>

            {/* Table of Contents */}
            <div className="wiki-toc">
              <div className="wiki-toc-title">
                🔢 Contents <span className="wiki-toc-toggle">[hide]</span>
              </div>
              <ol className="wiki-toc">
                <li><a className="wiki-link" onClick={() => scrollToId('features')}>Features</a></li>
                <li><a className="wiki-link" onClick={() => scrollToId('need-zones')}>Need Zone Times</a></li>
                <li><a className="wiki-link" onClick={() => scrollToId('shot-scheme')}>Shot scheme</a></li>
                <li><a className="wiki-link" onClick={() => scrollToId('fur-variants')}>Fur variants</a></li>
                <li><a className="wiki-link" onClick={() => scrollToId('fur-rarity')}>Fur Variant Rarity</a></li>
                <li><a className="wiki-link" onClick={() => scrollToId('trivia')}>Trivia</a></li>
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
                        <tr><th colSpan="2" className="wiki-th wiki-th-center">Mississippi Acres / New England Mountains</th></tr>
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
                   <img src={ShotSchemeImage} alt="Shot Scheme" className="wiki-shot-scheme-img" />
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
            <h2 className="wiki-h2" id="fur-variants">Fur variants</h2>
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
            <h2 className="wiki-h2" id="fur-rarity">Fur Variant Rarity</h2>
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
                                Grey (74.70%)<br/>
                                Two Tones (12.50%)<br/>
                                Red (12.50%)
                            </td>
                            <td className="wiki-td">X</td>
                            <td className="wiki-td">X</td>
                            <td className="wiki-td">
                                Piebald Variation 1 (0.07%)<br/>
                                Piebald Variation 2 (0.07%)<br/>
                                Leucistic (0.07%)<br/>
                                Albino (0.05%)<br/>
                                Melanistic (0.05%)
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* TRIVIA */}
            <h2 className="wiki-h2" id="trivia">Trivia</h2>
            <ul className="wiki-ul wiki-ul-disc">
                {triviaData.map((point, idx) => (
                    <li key={idx} className="wiki-mb-10">{point}</li>
                ))}
            </ul>

            {/* REFERENCES */}
            {/* References section removed */}

            <div className="wiki-mt-40">
                <AnimalsTableMini />
            </div>
            
          </main>
        </div>
      </div>
    </div>
  );
};

export default GrayFox;