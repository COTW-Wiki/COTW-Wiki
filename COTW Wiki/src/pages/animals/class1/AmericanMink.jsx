import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import class1Icon from '../../../assets/Class1Icon.webp';
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import AmericanMinkMain from '../../../assets/AmericanMink.webp';


// Fur Variant Images
import AmericanMink_AlbinoLeft from '../../../assets/AmericanMink_AlbinoLeftSide.webp';
import AmericanMink_BlackLeft from '../../../assets/AmericanMink_BlackLeftSide.webp';
import AmericanMink_ChestnutLeft from '../../../assets/AmericanMink_ChestnutLeftSide.webp';
import AmericanMink_DarkBrownLeft from '../../../assets/AmericanMink_DarkBrownLeftSide.webp';
import AmericanMink_LeucisticLeft from '../../../assets/AmericanMink_LeucisticLeftSide.webp';
import AmericanMink_MelanisticLeft from '../../../assets/AmericanMink_MelanisticLeftSide.webp';
import AmericanMink_Piebald1Left from '../../../assets/AmericanMink_PiebaldVariation1LeftSide.webp';
import AmericanMink_Piebald1Right from '../../../assets/AmericanMink_PiebaldVariation1RightSide.webp';
import AmericanMink_Piebald2Left from '../../../assets/AmericanMink_PiebaldVariation2LeftSide.webp';
import AmericanMink_SilverLeft from '../../../assets/AmericanMink_SilverLeftSide.webp';


const AmericanMink = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  // Source: Екранна снимка 2026-01-16 191655.png
  const needZonesData = [
    {
      name: "Tòrr nan Sithean",
      schedule: [
        { time: "03:00 - 06:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "08:00 - 10:00", type: "Resting", icon: RestingZoneIcon },
        { time: "10:00 - 14:00", type: "Resting", icon: RestingZoneIcon },
        // Screenshot cuts off here, listing only what is visible
      ]
    }
  ];

  // Features Table
  // Source: Екранна снимка 2026-01-16 191647.png
  const features = [
    { label: "Behavior", value: "Bold, curious, agile" },
    { label: "Habitat", value: "Bodies of water such as rivers, lakes, streams, marshes, and coastal areas" },
    { label: "Senses", value: "Good vision, excellent hearing and exceptional sense of smell" },
    { label: "Social", value: "Territorial, solitary" },
    { label: "Active", value: "Nocturnal" },
    { label: "Recommended Equipment", value: "Class 1 Ammo" },
    { label: "Species", value: "Neogale vison", italic: true, isLink: true },
    { label: "Difficulty", value: "Easy" },
  ];

  // Fur Gallery Data
  // Source: Екранна снимка 2026-01-16 191708.jpg
  const furGallery = [
    { name: "Albino - Left Side", src: AmericanMink_AlbinoLeft },
    { name: "Black - Left Side", src: AmericanMink_BlackLeft },
    { name: "Chestnut - Left Side", src: AmericanMink_ChestnutLeft },
    { name: "Dark Brown - Left Side", src: AmericanMink_DarkBrownLeft },
    { name: "Leucistic - Left Side", src: AmericanMink_LeucisticLeft },
    { name: "Melanistic - Left Side", src: AmericanMink_MelanisticLeft },
    { name: "Piebald Variation 1 - Left Side", src: AmericanMink_Piebald1Left },
    { name: "Piebald Variation 1 - Right Side", src: AmericanMink_Piebald1Right },
    { name: "Piebald Variation 2 - Left Side", src: AmericanMink_Piebald2Left },
    { name: "Silver - Left Side", src: AmericanMink_SilverLeft },
  ];

  // Smooth scroll helper for in-page TOC links
  const scrollToId = (id) => (e) => {
    if (e && e.preventDefault) e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (typeof window !== 'undefined' && window.history && window.history.replaceState) {
      window.history.replaceState(null, '', `#${id}`);
    }
  };

  return (
    <div className="wiki-page">
      <div className="wiki-inner">
        
        {/* PAGE HEADER */}
        <div className="wiki-header">
          <span>American Mink</span>
          <div className="wiki-edit-actions">
          </div>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">American Mink</div>
            <div className="wiki-sidebar-image flex items-center justify-center">
              <img src={AmericanMinkMain} alt="American Mink" className="max-w-full max-h-[180px] object-contain" />
            </div>
            
            <div className="wiki-sidebar-header">General Information</div>
            
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Class</span>
              <span><img src={class1Icon} alt="Class 1" className="wiki-class-icon"/>1</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Difficulty</span>
              <span>1: Trivial — 5: Medium</span>
            </div>

            {/* Trophy Type */}
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Trophy Type</span>
              <span>Weight</span>
              <div className="wiki-trophy-grid">
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-silver">◆ Silver</span>
                  <span>88</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-gold">☗ Gold</span>
                  <span>124</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-diamond">☗ Diamond</span>
                  <span>151</span>
                </div>
              </div>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Weight</span>
              0.7 — 1.60kg<br/>
              0lbs — 4lbs
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Fur</span>
               <span className="wiki-fs-sm">
                  Albino, Black, Chestnut, Dark Brown, Leucistic, Melanistic, Piebald, Silver
               </span>
            </div>

            <div className="wiki-sidebar-header">Locations</div>
            <div className="wiki-sidebar-section">
               <div className="wiki-mb-4"><span className="wiki-link">Tòrr nan Sithean</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main className="wiki-main">

            {/* Quote Block */}
            <div className="wiki-quote">
              "The American mink (Neovison[sic] vison) is a small, semi-aquatic mammal with a sleek, elongated body measuring 46 to 71cm (18 to 28 inches) in lenght. Its dense fur is typically dark brown to black, with lighter underparts. Minks weight between 0.7 and 1.6kg (1.5 to 3.5 pounds) and have webbed feet, making them strong swimmers. Native to North America, minks are found near rivers, lakes, and marshes. They are solitary and nocturnal, with a diet consisting of small mammals, birds, and fish. Minks are territorial and use dens in hollow trees or burrows to rest and raise their young. Known for their agility and opportunistic feeding habits, they are efficient predators."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-p-mb">
              The <strong>American Mink</strong> is a species introduced in the <span className="wiki-link">Tòrr nan Sithean</span> reserve located in Scotland.
            </p>

            {/* Table of Contents (smooth-scroll links) */}
            <div className="wiki-toc">
              <div className="wiki-toc-title">
                🔢 Contents <span className="wiki-toc-toggle">[hide]</span>
              </div>
              <ol className="wiki-toc">
                <li><a href="#features" className="wiki-link" onClick={scrollToId('features')}>Features</a></li>
                <li><a href="#need-zones" className="wiki-link" onClick={scrollToId('need-zones')}>Need Zone Times</a></li>
                <li><a href="#fur-variants" className="wiki-link" onClick={scrollToId('fur-variants')}>Fur variants</a></li>
                <li><a href="#variant-rarity" className="wiki-link" onClick={scrollToId('variant-rarity')}>Fur Variant Rarity</a></li>
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
                        <tr><th colSpan="2" className="wiki-th wiki-th-center">Tòrr nan Sithean</th></tr>
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

            {/* Shot scheme removed per request */}

            {/* FUR VARIANTS (Gallery) */}
            <h2 id="fur-variants" className="wiki-h2">Fur variants</h2>
            <div className="wiki-gallery-grid">
              {furGallery.map((item, i) => (
                <div key={i} className="wiki-gallery-item">
                  <div className="wiki-gallery-placeholder w-[146px] h-[165px] flex items-center justify-center">
                    <img src={item.src} alt={item.name} className="max-w-full max-h-full object-contain rounded-sm" />
                  </div>
                  <span className="wiki-gallery-label">{item.name}</span>
                </div>
              ))}
            </div>

            {/* FUR VARIANT RARITY TABLE */}
            <h2 id="variant-rarity" className="wiki-h2">Fur Variant Rarity</h2>
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
                            Dark Brown (74.65%)<br/>
                            Chestnut (25.00%)
                        </td>
                        <td className="wiki-td">X</td>
                        <td className="wiki-td">
                            Black (0.20%)
                        </td>
                        <td className="wiki-td">
                            Albino (0.03%)<br/>
                            Leucistic (0.03%)<br/>
                            Melanistic (0.03%)<br/>
                            Piebald Variation 1 (0.03%)<br/>
                            Piebald Variation 2 (0.03%)<br/>
                            Silver (0.03%)
                        </td>
                    </tr>
                </tbody>
            </table>

            <AnimalsTableMini />
          </main>
        </div>
      </div>
    </div>
  );
};

export default AmericanMink;