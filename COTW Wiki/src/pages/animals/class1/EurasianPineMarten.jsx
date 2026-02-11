import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import class1Icon from '../../../assets/Class1Icon.webp';
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import EurasianPineMartenMain from '../../../assets/EurasianPineMarten.webp';

// Fur Variant Images (Placeholders based on Wiki data)
import EurasianPineMarten_AlbinoLeft from '../../../assets/EurasianPineMarten_AlbinoLeftSide.webp';
import EurasianPineMarten_BlackLeft from '../../../assets/EurasianPineMarten_BlackLeftSide.webp';
import EurasianPineMarten_BrownLeft from '../../../assets/EurasianPineMarten_BrownLeftSide.webp';
import EurasianPineMarten_LightBrownLeft from '../../../assets/EurasianPineMarten_LightBrownLeftSide.webp';
import EurasianPineMarten_LeucisticLeft from '../../../assets/EurasianPineMarten_LeucisticLeftSide.webp';
import EurasianPineMarten_MelanisticLeft from '../../../assets/EurasianPineMarten_MelanisticLeftSide.webp';
import EurasianPineMarten_Piebald1Left from '../../../assets/EurasianPineMarten_PiebaldVariation1LeftSide.webp';
import EurasianPineMarten_Piebald2Left from '../../../assets/EurasianPineMarten_PiebaldVariation2LeftSide.webp';
import EurasianPineMarten_Piebald1Right from '../../../assets/EurasianPineMarten_PiebaldVariation1RightSide.webp';
import EurasianPineMarten_Piebald2Right from '../../../assets/EurasianPineMarten_PiebaldVariation2RightSide.webp';
import EurasianPineMarten_TawnyLeft from '../../../assets/EurasianPineMarten_TawnyLeftSide.webp';


const EurasianPineMarten = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  // UPDATED: Matches Screenshot 3 "Need Zone Times"
  const needZonesData = [
    {
      name: "Tòrr nan Sithean",
      schedule: [
        { time: "03:00 - 06:00", type: "Resting", icon: RestingZoneIcon },
        { time: "06:00 - 10:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "14:00 - 18:00", type: "Resting", icon: RestingZoneIcon },
      ]
    }
  ];

  // Features Table
  // UPDATED: Matches Screenshot 2 "Features"
  const features = [
    { label: "Behavior", value: "Curious, agile, elusive" },
    { label: "Habitat", value: "Dense, mature woodlands with plenty of cover" },
    { label: "Senses", value: "Poor eyesight, acute sense of hearing and exceptional sense of smell" },
    { label: "Social", value: "Territorial, solitary" },
    { label: "Active", value: "Primarily nocturnal and crepuscular" },
    { label: "Recommended Equipment", value: "Class 1 Ammo" },
    { label: "Species", value: "Martes martes", italic: true, isLink: true },
    { label: "Difficulty", value: "Easy" },
  ];

  // Fur Gallery Data
  // Matches Screenshot 1 "Fur variants"
  const furGallery = [
    { name: "Albino - Left Side", src: EurasianPineMarten_AlbinoLeft },
    { name: "Black - Left Side", src: EurasianPineMarten_BlackLeft },
    { name: "Brown - Left Side", src: EurasianPineMarten_BrownLeft },
    { name: "Leucistic - Left Side", src: EurasianPineMarten_LeucisticLeft },
    { name: "Light Brown - Left Side", src: EurasianPineMarten_LightBrownLeft },
    { name: "Melanistic - Left Side", src: EurasianPineMarten_MelanisticLeft },
    // Note: Reusing Left image for Right side placeholders as per available imports
    { name: "Piebald Variation 1 - Right Side", src: EurasianPineMarten_Piebald1Right }, 
    { name: "Piebald Variation 1 - Left Side", src: EurasianPineMarten_Piebald1Left },
    { name: "Piebald Variation 2 - Right Side", src: EurasianPineMarten_Piebald2Right },
    { name: "Piebald Variation 2 - Left Side", src: EurasianPineMarten_Piebald2Left },
    { name: "Tawny - Left Side", src: EurasianPineMarten_TawnyLeft },
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

  // References List
  const references = [
    "https://animaldiversity.org/accounts/Martes_martes/",
    "https://www.nature.scot/plants-animals-and-fungi/mammals/land-mammals/pine-marten"
  ];

  return (
    <div className="wiki-page">
      <div className="wiki-inner">
        
        {/* PAGE HEADER */}
        <div className="wiki-header">
          <span>Eurasian Pine Marten</span>
          <div className="wiki-edit-actions">
          </div>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Eurasian Pine Marten</div>
            <div className="wiki-sidebar-image flex items-center justify-center">
              <img src={EurasianPineMartenMain} alt="Eurasian Pine Marten" className="max-w-full max-h-[200px] object-contain" />
            </div>
            
            <div className="wiki-sidebar-header">General Information</div>
            
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Class</span>
              <span><img src={class1Icon} alt="Class 1" className="inline-block wiki-class-icon-sm align-middle mr-1.5"/>1</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Difficulty</span>
              <span>1: Trivial — 5: Medium</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Trophy Type</span>
              <span>Weight</span>
              <div className="wiki-trophy-grid">
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-silver">◆ Silver</span>
                  <span>124</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-gold">☗ Gold</span>
                  <span>172</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-diamond">☗ Diamond</span>
                  <span>208</span>
                </div>
              </div>
            </div>

            <div className="wiki-sidebar-section">
              {/* UPDATED: Matches Screenshot 4 "Weight" */}
              <span className="wiki-sidebar-label">Weight</span>
              1 — 2.20kg<br/>
              0lbs — 5lbs
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Fur</span>
               <span className="wiki-fs-sm">
                  Albino, Black, Brown, Leucistic, Light Brown, Melanistic, Piebald, Tawny
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
            {/* UPDATED: Matches Screenshot 4 Intro Text */}
            <div className="wiki-quote">
              "The Eurasian Pine Marten (Martes martes) is a medium-sized omnivore from the Mustelidae family, known for its sleek, rich brown fur and distinctive yellowish throat patch. Weighing between 1 and 2.2kg, these agile animals are skilled climbers, spending much of their time in trees. Native to the forests of northern and central Europe, they thrive in old-growth woodlands and at higher altitudes, where they find ample cover and prey. Pine martens hunt small mammals, birds, and insects, while also foraging for fruits and berries. Primarily nocturnal and solitary, they are territorial and use scent marking to establish their range, demonstrating remarkable adaptibility to both the forest floor and the tree canopy."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-p-mb">
              The <strong>Eurasian Pine Marten</strong> is a species introduced in the <span className="wiki-link">Tòrr nan Sithean</span> reserve located in Scotland.
            </p>

            {/* Table of Contents Placeholder */}
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

            {/* FUR VARIANTS (Gallery) */}
            <h2 id="fur-variants" className="wiki-h2">Fur variants</h2>
            <div className="wiki-gallery-grid">
              {furGallery.map((item, i) => (
                <div key={i} className="wiki-gallery-item">
                  <div className="wiki-gallery-placeholder">
                    <img src={item.src} alt={item.name} />
                  </div>
                  <span className="wiki-gallery-label">{item.name}</span>
                </div>
              ))}
            </div>

            {/* FUR VARIANT RARITY TABLE */}
            {/* UPDATED: Matches Screenshot 5 "Fur Variant Rarity" */}
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
                            Brown (74.70%)<br/>
                            Black (12.50%)<br/>
                            Light Brown (12.50%)
                        </td>
                        <td className="wiki-td">X</td>
                        <td className="wiki-td">
                            Melanistic (0.10%)<br/>
                            Tawny (0.10%)
                        </td>
                        <td className="wiki-td">
                            Albino (0.03%)<br/>
                            Leucistic (0.03%)<br/>
                            Piebald Variation 1 (0.03%)<br/>
                            Piebald Variation 2 (0.03%)
                        </td>
                    </tr>
                </tbody>
            </table>

            {/* References removed per request */}

            <AnimalsTableMini />
          </main>
        </div>
      </div>
    </div>
  );
};

export default EurasianPineMarten;