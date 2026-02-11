import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import DrinkingZoneIcon from '../../../assets/DrinkingZoneIcon.webp';
import class2Icon from '../../../assets/Class2Icon.webp'; // Class 2 for Bobcat
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import MexicanBobcatMain from '../../../assets/Bobcat.webp';
import ShotSchemeImage from '../../../assets/Bobcat_shot_scheme.webp';

// Fur Variant Images (Placeholders)
import Bobcat_Albino from '../../../assets/MexicanBobcat_Albino.webp';
import Bobcat_Blue from '../../../assets/MexicanBobcat_Blue.webp';
import Bobcat_Brown from '../../../assets/MexicanBobcat_Brown.webp';
import Bobcat_Grey from '../../../assets/MexicanBobcat_Grey.webp';
import Bobcat_Melanistic from '../../../assets/MexicanBobcat_Melanistic.webp';
import Bobcat_Red from '../../../assets/MexicanBobcat_Red.webp';
import Bobcat_Tan from '../../../assets/MexicanBobcat_Tan.webp';


const MexicanBobcat = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  const needZonesData = [
    {
      name: "Rancho del Arroyo", // Inferred from location context
      schedule: [
        { time: "00:00 - 03:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "03:00 - 06:30", type: "Drinking", icon: DrinkingZoneIcon },
        { time: "06:00 - 11:30", type: "Resting", icon: RestingZoneIcon },
        { time: "11:00 - 14:30", type: "Resting", icon: RestingZoneIcon },
        { time: "14:00 - 17:30", type: "Resting", icon: RestingZoneIcon },
        { time: "17:00 - 20:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "20:00 - 00:30", type: "Feeding", icon: FeedingZoneIcon },
      ]
    }
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Nocturnal carnivorous predator" },
    { label: "Habitat", value: "Forests, deserts, scrublands and coastal swamps" },
    { label: "Senses", value: "Sharp hearing and vision, good sense of smell" },
    { label: "Social", value: "Solitary" },
    { label: "Active", value: "At night" },
    { label: "Recommended Equipment", value: "Class 2 Ammo, Predator \"Jackrabbit\" Caller" },
    { label: "Species", value: "Lynx rufus escuinapae", italic: true, isLink: true },
    { label: "Difficulty", value: "Hard" },
  ];

  // Fur Gallery Data
  const furGallery = [
    { name: "Albino", src: Bobcat_Albino },
    { name: "Blue", src: Bobcat_Blue },
    { name: "Brown", src: Bobcat_Brown },
    { name: "Grey", src: Bobcat_Grey },
    { name: "Melanistic", src: Bobcat_Melanistic },
    { name: "Red", src: Bobcat_Red },
    { name: "Tan", src: Bobcat_Tan },
  ];

  // Trivia Data
  const triviaData = [
    "While bobcats are often called \"Lynx\", there is actually a distinction between the two. Generally, Bobcats are smaller and do not have that black tuft on their ear tips. They also have a distinctive \"bob\" tail.",
    "It is the second member of the cat family to be on the logo of a reserve, after the puma in Parque Fernando. Other animals on logos includes the Red Deer (Hirschfelden), Gray Wolf (Yukon Valley), Sika Deer (Te Awaroa), Brown Bear (Medved), and the American Alligator (Mississippi)."
  ];

  // Smooth scroll helper for TOC links
  const scrollToId = (id) => (e) => {
    if (e && e.preventDefault) e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    try { window.history.replaceState(null, '', `#${id}`); } catch (err) {}
  };

  return (
    <div className="wiki-page">
      <div className="wiki-inner">
        
        {/* PAGE HEADER */}
        <div className="wiki-header">
          <span>Mexican Bobcat</span>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Mexican Bobcat</div>
            <div className="wiki-sidebar-image">
              <img src={MexicanBobcatMain} alt="Mexican Bobcat" />
            </div>
            
            <div className="wiki-sidebar-header">General Information</div>
            
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Class</span>
              <span><img src={class2Icon} alt="Class 2" className="inline-block wiki-class-icon-sm align-middle mr-1.5" />2</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Difficulty</span>
              <span>1: Trivial — 9: Legendary</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Trophy Type</span>
              <span>Skull</span>
              <div className="wiki-trophy-grid">
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-silver">◆ Silver</span>
                  <span>18.58</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-gold">☗ Gold</span>
                  <span>23.78</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-diamond">☗ Diamond</span>
                  <span>27.68</span>
                </div>
              </div>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Weight</span>
              3kg — 18kg<br/>
              <span className="wiki-sidebar-muted">7lbs — 40lbs</span>
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Fur</span>
               <span className="wiki-fs-sm">
                  Albino, Blue, Brown, Grey, Melanistic, Tan, Red
               </span>
            </div>

            <div className="wiki-sidebar-header">Locations</div>
            <div className="wiki-sidebar-section">
               <div className="wiki-mb-4"><span className="wiki-link">Rancho del Arroyo</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main className="wiki-main">

            {/* Quote Block */}
            <div className="wiki-quote">
              "The Mexican bobcat is the smallest of the bobcat subspecies, growing to about twice the size of a house cat. It is distinguished from the lynx by its darker tail. Its coat color varies from light gray to a ruddy brown, with more spots than the northern subspecies and shorter, denser hair. The bobcat is found throughout Mexico in a variety of biomes, but its solitary, nocturnal nature means it is rarely encountered by humans. A patient, adaptable predator, it primarily feeds on rabbits and hares, but has been known to take down much larger prey, including adult deer."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-p-mb">
              The <strong>Mexican Bobcat</strong> is a huntable animal in the reserve <span className="wiki-link">Rancho del Arroyo</span>, located in Mexico. It is the second lynx species to be featured in the game, after the <span className="wiki-link">Eurasian Lynx</span>. In-game, the Mexican Bobcat is identical on all aspects to the <span className="wiki-link">Bobcat</span> in the <span className="wiki-link">New England Mountains</span>.
            </p>

            {/* Table of Contents */}
            <div className="wiki-toc">
              <div className="wiki-toc-title">
                🔢 Contents <span className="wiki-toc-toggle">[hide]</span>
              </div>
              <ol className="wiki-toc">
                <li><a href="#features" className="wiki-link" onClick={scrollToId('features')}>Features</a></li>
                <li><a href="#need-zones" className="wiki-link" onClick={scrollToId('need-zones')}>Need Zones Times</a></li>
                <li><a href="#shot-scheme" className="wiki-link" onClick={scrollToId('shot-scheme')}>Shot scheme</a></li>
                <li><a href="#fur-variants" className="wiki-link" onClick={scrollToId('fur-variants')}>Fur Variants</a></li>
                <li><a href="#fur-variant-rarity" className="wiki-link" onClick={scrollToId('fur-variant-rarity')}>Fur Variant Rarity</a></li>
                <li><a href="#trivia" className="wiki-link" onClick={scrollToId('trivia')}>Trivia</a></li>
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
            <h2 id="need-zones" className="wiki-h2">Need Zones Times</h2>
            <div className="wiki-inline-block">
                <table className="wiki-table wiki-table-fixed">
                    <thead>
                        <tr><th colSpan="2" className="wiki-th wiki-th-center">New England Mountains</th></tr>
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

             {/* SHOT SCHEME (Using Bobcat as placeholder as per Intro Text) */}
             <h2 id="shot-scheme" className="wiki-h2">Shot scheme</h2>
            <div className="wiki-shot-container">
                <div className="wiki-shot-container">
                   <img src={ShotSchemeImage} alt="Shot Scheme" className="wiki-shot-scheme-img-sm" />
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
            <h2 id="fur-variant-rarity" className="wiki-h2">Fur Variant Rarity</h2>
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
                                Grey (37.35%)<br/>
                                Tan (37.35%)<br/>
                                Brown (12.50%)<br/>
                                Red (12.50%)
                            </td>
                            <td className="wiki-td">X</td>
                            <td className="wiki-td">
                                Blue (0.20%)
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

            <div className="wiki-mt-40">
                <AnimalsTableMini />
            </div>
            
          </main>
        </div>
      </div>
    </div>
  );
};

export default MexicanBobcat;