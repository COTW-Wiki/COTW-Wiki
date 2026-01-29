import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import class1Icon from '../../../assets/Class1Icon.webp';
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import EurasianWoodcockMain from '../../../assets/EurasianWoodcock.webp';

// Shot scheme (removed)

// Plumage Images (Single set, no male/female distinction in screenshots for gallery, just "Plumage variants")
import EurasianWoodcock_AlbinoFront from '../../../assets/EurasianWoodcock_AlbinoFront.webp';
import EurasianWoodcock_AlbinoBack from '../../../assets/EurasianWoodcock_AlbinoBack.webp';
import EurasianWoodcock_BrownFront from '../../../assets/EurasianWoodcock_BrownFront.webp';
import EurasianWoodcock_BrownBack from '../../../assets/EurasianWoodcock_BrownBack.webp';
import EurasianWoodcock_DarkBrownFront from '../../../assets/EurasianWoodcock_DarkBrownFront.webp';
import EurasianWoodcock_DarkBrownBack from '../../../assets/EurasianWoodcock_DarkBrownBack.webp';
import EurasianWoodcock_GreyFront from '../../../assets/EurasianWoodcock_GreyFront.webp';
import EurasianWoodcock_GreyBack from '../../../assets/EurasianWoodcock_GreyBack.webp';
import EurasianWoodcock_LeucisticFront from '../../../assets/EurasianWoodcock_LeucisticFront.webp';
import EurasianWoodcock_LeucisticBack from '../../../assets/EurasianWoodcock_LeucisticBack.webp';
import EurasianWoodcock_MelanisticFront from '../../../assets/EurasianWoodcock_MelanisticFront.webp';
import EurasianWoodcock_MelanisticBack from '../../../assets/EurasianWoodcock_MelanisticBack.webp';


const EurasianWoodcock = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  // Source: Екранна снимка 2026-01-16 135852.png
  const needZonesData = [
    {
      name: "Tòrr nan Sithean",
      schedule: [
        { time: "00:00 - 03:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "03:00 - 06:00", type: "Resting", icon: RestingZoneIcon },
        { time: "06:00 - 10:00", type: "Feeding", icon: FeedingZoneIcon },
      ]
    }
  ];

  // Features Table
  // Source: Екранна снимка 2026-01-16 135815.png
  const features = [
    { label: "Behavior", value: "Elusive and cautious" },
    { label: "Habitat", value: "Moist, dense woodlands, often with nearby open pastures or clearings" },
    { label: "Senses", value: "Exceptional vision with wide panoramic eyesight, sharp and sensitive hearing and modest sense of smell" },
    { label: "Social", value: "Solitary" },
    { label: "Active", value: "Nocturnal and crepuscular" },
    { label: "Recommended Equipment", value: "Class 1 Ammo" },
    { label: "Species", value: "Scolopax rusticola", italic: true, isLink: true },
    { label: "Difficulty", value: "Easy" },
  ];

  // Plumage Gallery Data
  // Source: Екранна снимка 2026-01-16 135957.jpg, 140026.jpg
  // Note: Screenshots show "Plumage variants" without Male/Female headers, implies no sexual dimorphism in plumage or just one set shown.
  const plumageGallery = [
    { name: "Albino - Front", src: EurasianWoodcock_AlbinoFront },
    { name: "Albino - Back", src: EurasianWoodcock_AlbinoBack },
    { name: "Brown - Front", src: EurasianWoodcock_BrownFront },
    { name: "Brown - Back", src: EurasianWoodcock_BrownBack },
    { name: "Dark Brown - Front", src: EurasianWoodcock_DarkBrownFront },
    { name: "Dark Brown - Back", src: EurasianWoodcock_DarkBrownBack },
    { name: "Grey - Front", src: EurasianWoodcock_GreyFront },
    { name: "Grey - Back", src: EurasianWoodcock_GreyBack },
    { name: "Leucistic - Front", src: EurasianWoodcock_LeucisticFront },
    { name: "Leucistic - Back", src: EurasianWoodcock_LeucisticBack },
    { name: "Melanistic - Front", src: EurasianWoodcock_MelanisticFront },
    { name: "Melanistic - Back", src: EurasianWoodcock_MelanisticBack },
  ];

  // Smooth-scroll helper for TOC links
  const scrollToId = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // update hash without jumping
    if (window && history && history.replaceState) history.replaceState(null, '', `#${id}`);
  };

  return (
    <div className="wiki-page">
      <div className="wiki-inner">
        
        {/* PAGE HEADER */}
        <div className="wiki-header">
          <span>Eurasian Woodcock</span>
          <div className="wiki-edit-actions">
          </div>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Eurasian Woodcock</div>
            <div className="wiki-sidebar-image">
              <img src={EurasianWoodcockMain} alt="Eurasian Woodcock" />
            </div>
            
            <div className="wiki-sidebar-header">General Information</div>
            
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Class</span>
              <span><img src={class1Icon} alt="Class 1" className="wiki-class-icon"/>1</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Difficulty</span>
              <span>1: Trivial — 3: Very Easy</span>
            </div>

            {/* Trophy Type */}
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Trophy Type</span>
              <span>weight</span>
              <div className="wiki-trophy-grid">
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-silver">◆ Silver</span>
                  <span>25.84</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-gold">☗ Gold</span>
                  <span>34.52</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-diamond">☗ Diamond</span>
                  <span>41.03</span>
                </div>
              </div>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Weight</span>
              ? — 0.25kg<br/>
              ? — 1lbs
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Plumage</span>
               <span className="wiki-fs-sm">
                  Albino, Brown, Dark Brown, Grey, Leucistic, Melanistic
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
              "The Eurasian Woodcock is a shy, well-camouflaged wading bird native to woodlands across Europe and parts of Asia. It has a sticky body, mottled brown plumage, and a long, straight bill adapted for probing soil. Mainly crepuscular and nocturnal, it forages for earthworms and insects in moist ground during twilight or at night. Its eyes are set far back on its head, granting nearly 360-degree vision to detect predators. Uniquely, its brain is rotated nearls 180 degrees, positioning the visual processing centers at the back-an adaption that enhances its extraordinary field of vision. The woodcock prefers quiet, damp forests with rich undergrowth, where it nests on the ground an remains hidden by its camouflage."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-p-mb">
              The <strong>Eurasian Woodcock</strong> is a species introduced in the <span className="wiki-link">Tòrr nan Sithean</span> reserve located in Scotland.
            </p>

            {/* Table of Contents Placeholder */}
            <div className="wiki-toc">
              <div className="wiki-toc-title">
                🔢 Contents <span className="wiki-toc-toggle">[hide]</span>
              </div>
              <ol className="wiki-toc">
                <li><a href="#features" onClick={scrollToId('features')} className="wiki-link">Features</a></li>
                <li><a href="#need-zone-times" onClick={scrollToId('need-zone-times')} className="wiki-link">Need Zone Times</a></li>
                <li><a href="#plumage-variants" onClick={scrollToId('plumage-variants')} className="wiki-link">Plumage variants</a></li>
                <li><a href="#plumage-variant-rarity" onClick={scrollToId('plumage-variant-rarity')} className="wiki-link">Plumage Variant Rarity</a></li>
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

            {/* Shot scheme section removed */}

            {/* PLUMAGE VARIANTS (Gallery) */}
            <h2 id="plumage-variants" className="wiki-h2">Plumage variants</h2>
            
            <div className="wiki-gallery-grid">
              {plumageGallery.map((item, i) => (
                <div key={i} className="wiki-gallery-item">
                  <div className="wiki-gallery-placeholder">
                    <img src={item.src} alt={item.name} />
                  </div>
                  <span className="wiki-gallery-label">{item.name}</span>
                </div>
              ))}
            </div>

            {/* PLUMAGE RARITY TABLE */}
            <h2 id="plumage-variant-rarity" className="wiki-h2">Plumage Variant Rarity</h2>
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
                            Brown (49.80%)<br/>
                            Grey (49.80%)
                        </td>
                        <td className="wiki-td">X</td>
                        <td className="wiki-td">
                            Dark Brown (0.20%)<br/>
                            Leucistic (0.10%)
                        </td>
                        <td className="wiki-td">
                            Albino (0.05%)<br/>
                            Melanistic (0.05%)
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

export default EurasianWoodcock;