import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import DrinkingZoneIcon from '../../../assets/DrinkingZoneIcon.webp';
import class7Icon from '../../../assets/Class7Icon.webp'; // Class 7 for Manitoban Elk
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import ManitobanElkMain from '../../../assets/ManitobanElk.webp';
import ShotSchemeImg from '../../../assets/Manitoban_Elk_shot_scheme.webp';

// Fur Variant Images - Male
import ManitobanElk_AlbinoMaleRightSide from '../../../assets/ManitobanElk_AlbinoMaleRightSide.webp';
import ManitobanElk_BrownManedMaleRightSide from '../../../assets/ManitobanElk_BrownManedMaleRightSide.webp';
import ManitobanElk_DarkMaleRightSide from '../../../assets/ManitobanElk_DarkMaleRightSide.webp';
import ManitobanElk_LeucisticMaleRightSide from '../../../assets/ManitobanElk_LeucisticMaleRightSide.webp';
import ManitobanElk_MelanisticMaleRightSide from '../../../assets/ManitobanElk_MelanisticMaleRightSide.webp';
import ManitobanElk_PiebaldMaleLeftSide from '../../../assets/ManitobanElk_PiebaldMaleLeftSide.webp';
import ManitobanElk_PiebaldMaleRightSide from '../../../assets/ManitobanElk_PiebaldMaleRightSide.webp';

// Fur Variant Images - Female
import ManitobanElk_AlbinoFemaleRightSide from '../../../assets/ManitobanElk_AlbinoFemaleRightSide.webp';
import ManitobanElk_BrownManedFemaleRightSide from '../../../assets/ManitobanElk_BrownManedFemaleRightSide.webp';
import ManitobanElk_DarkFemaleRightSide from '../../../assets/ManitobanElk_DarkFemaleRightSide.webp';
import ManitobanElk_LeucisticFemaleRightSide from '../../../assets/ManitobanElk_LeucisticFemaleRightSide.webp';
import ManitobanElk_MelanisticFemaleRightSide from '../../../assets/ManitobanElk_MelanisticFemaleRightSide.webp';
import ManitobanElk_PiebaldFemaleLeftSide from '../../../assets/ManitobanElk_PiebaldFemaleLeftSide.webp';
import ManitobanElk_PiebaldFemaleRightSide from '../../../assets/ManitobanElk_PiebaldFemaleRightSide.webp';


const ManitobanElk = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  const needZonesData = [
    {
      name: "Askiy Ridge",
      schedule: [
        { time: "00:00 - 04:00", type: "Resting", icon: RestingZoneIcon },
        { time: "04:00 - 08:00", type: "Drinking", icon: DrinkingZoneIcon },
        { time: "08:00 - 12:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "12:00 - 16:00", type: "Resting", icon: RestingZoneIcon },
        { time: "16:00 - 20:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "20:00 - 00:00", type: "Resting", icon: RestingZoneIcon },
      ]
    }
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Alert, social, territorial during rut" },
    { label: "Habitat", value: "Forests, grasslands, wetlands, and riparian areas" },
    { label: "Senses", value: "Excellent eyesight, acute hearing, and strong sense of smell" },
    { label: "Social", value: "Social, living in herds for protection, with males and females often in separate groups outside the breeding season" },
    { label: "Active", value: "Morning and evening" },
    { label: "Recommended Equipment", value: "Class 7 Ammo, Elk Caller, Elk Scent" },
    { label: "Species", value: "Cervus canadensis manitobensis", italic: true, isLink: true },
    { label: "Difficulty", value: "Average" },
  ];

  // Fur Gallery Data - Male
  const maleFurGallery = [
    { name: "Albino", src: ManitobanElk_AlbinoMaleRightSide },
    { name: "Brown Maned", src: ManitobanElk_BrownManedMaleRightSide },
    { name: "Dark", src: ManitobanElk_DarkMaleRightSide },
    { name: "Leucistic", src: ManitobanElk_LeucisticMaleRightSide },
    { name: "Melanistic", src: ManitobanElk_MelanisticMaleRightSide },
    { name: "Piebald (Left)", src: ManitobanElk_PiebaldMaleLeftSide },
    { name: "Piebald (Right)", src: ManitobanElk_PiebaldMaleRightSide },
  ];

  // Fur Gallery Data - Female
  const femaleFurGallery = [
    { name: "Albino", src: ManitobanElk_AlbinoFemaleRightSide },
    { name: "Brown Maned", src: ManitobanElk_BrownManedFemaleRightSide },
    { name: "Dark", src: ManitobanElk_DarkFemaleRightSide },
    { name: "Leucistic", src: ManitobanElk_LeucisticFemaleRightSide },
    { name: "Melanistic", src: ManitobanElk_MelanisticFemaleRightSide },
    { name: "Piebald (Left)", src: ManitobanElk_PiebaldFemaleLeftSide },
    { name: "Piebald (Right)", src: ManitobanElk_PiebaldFemaleRightSide },
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
          <span>Manitoban Elk</span>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Manitoban Elk</div>
            <div className="wiki-sidebar-image wiki-sidebar-image--contain">
              <img src={ManitobanElkMain} alt="Manitoban Elk" className="wiki-img-contain" />
            </div>
            
            <div className="wiki-sidebar-header">General Information</div>
            
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Class</span>
              <span><img src={class7Icon} alt="Class 7" className="inline-block wiki-class-icon-sm align-middle mr-1.5"/>7</span>
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
                  <span>149.13</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-gold">☗ Gold</span>
                  <span>325.38</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-diamond">☗ Diamond</span>
                  <span>457.56</span>
                </div>
              </div>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Weight</span>
              230kg — 450kg<br/>
              <span className="wiki-sidebar-muted">507lbs — 992lbs</span>
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Fur</span>
               <span className="wiki-fs-sm">
                 Albino, Brown Maned, Dark, Leucistic, Melanistic, Piebald
               </span>
            </div>

            <div className="wiki-sidebar-header">Locations</div>
            <div className="wiki-sidebar-section">
               <div className="wiki-mb-4"><span className="wiki-link">Askiy Ridge Hunting Preserve</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main className="wiki-main">

            {/* Quote Block */}
            <div className="wiki-quote">
              "The Manitoban elk, a subspecies of the North American elk, is found primarily in Manitoba's forests, grasslands, and wetlands. These large herbivores typically weigh between 500 and 700 pounds, with males (bulls) reaching up to 1,000 pounds. They sport impressive antlers, which they shed annually. Elk are known for their strong herd instincts, living in groups to protect each other from predators like wolves and bears. They feed on grasses, shrubs, and trees. Known for their distinctive bugling calls during mating season, they have a strong connection to their natural environment. Elk are excellent swimmers and can cross rivers with ease."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-p-mb">
              The <strong>Manitoban Elk</strong> is a <span className="wiki-link">class 7</span> deer that can only be hunted on <span className="wiki-link">Askiy Ridge Hunting Preserve</span>.
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
                   <li><a href="#fur-male" onClick={(e)=>scrollToId(e,'fur-male')} className="wiki-link" style={{marginLeft:'20px'}}>4.1. Male</a></li>
                   <li><a href="#fur-female" onClick={(e)=>scrollToId(e,'fur-female')} className="wiki-link" style={{marginLeft:'20px'}}>4.2. Female</a></li>
                 </ol>
                <li><a href="#variant-rarity" onClick={(e)=>scrollToId(e,'variant-rarity')} className="wiki-link">Fur Variant Rarity</a></li>
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
                        <tr><th colSpan="2" className="wiki-th wiki-th-center">Askiy Ridge</th></tr>
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
                        {/* Male/Female Combined Row */}
                        <tr>
                            <td className="wiki-td">
                                <span className="wiki-text-male">Male</span>
                                <span className="wiki-text-divider">/</span>
                                <span className="wiki-text-female">Female</span>
                            </td>
                            <td className="wiki-td">
                                Brown Maned (74.78%)<br/>
                                Dark (25.03%)
                            </td>
                            <td className="wiki-td">
                                X
                            </td>
                            <td className="wiki-td">
                                Piebald (0.10%)
                            </td>
                            <td className="wiki-td">
                                Albino (0.03%)<br/>
                                Leucistic (0.03%)<br/>
                                Melanistic (0.03%)
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>


            <div className="wiki-mt-40">
                <AnimalsTableMini />
            </div>
            
          </main>
        </div>
      </div>
    </div>
  );
};

export default ManitobanElk;