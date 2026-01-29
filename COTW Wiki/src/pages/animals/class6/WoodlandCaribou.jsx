import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import DrinkingZoneIcon from '../../../assets/DrinkingZoneIcon.webp';
import class6Icon from '../../../assets/Class6Icon.webp'; 
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import WoodlandCaribouMain from '../../../assets/Woodland_Caribou.webp';
import ShotSchemeImg from '../../../assets/Woodland_Caribou_shot_scheme.webp';

// Fur Variant Images
// Male
import WoodlandCaribou_AlbinoMaleRight from '../../../assets/WoodlandCaribou_AlbinoMaleRightSide.webp';
import WoodlandCaribou_DarkBrownMaleRight from '../../../assets/WoodlandCaribou_DarkBrownMaleRightSide.webp';
import WoodlandCaribou_LeucisticMaleRight from '../../../assets/WoodlandCaribou_LeucisticMaleRightSide.webp';
import WoodlandCaribou_LightBrownMaleRight from '../../../assets/WoodlandCaribou_LightBrownMaleRightSide.webp';
import WoodlandCaribou_MelanisticMaleRight from '../../../assets/WoodlandCaribou_MelanisticMaleRightSide.webp';
import WoodlandCaribou_PiebaldVar1MaleRight from '../../../assets/WoodlandCaribou_PiebaldVariation1MaleRightSide.webp';
import WoodlandCaribou_PiebaldVar1MaleLeft from '../../../assets/WoodlandCaribou_PiebaldVariation1MaleLeftSide.webp';
import WoodlandCaribou_PiebaldVar2MaleRight from '../../../assets/WoodlandCaribou_PiebaldVariation2MaleRightSide.webp';
import WoodlandCaribou_PiebaldVar2MaleLeft from '../../../assets/WoodlandCaribou_PiebaldVariation2MaleLeftSide.webp';

// Female
import WoodlandCaribou_AlbinoFemaleRight from '../../../assets/WoodlandCaribou_AlbinoFemaleRightSide.webp';
import WoodlandCaribou_DarkBrownFemaleRight from '../../../assets/WoodlandCaribou_DarkBrownFemaleRightSide.webp';
import WoodlandCaribou_LeucisticFemaleRight from '../../../assets/WoodlandCaribou_LeucisticFemaleRightSide.webp';
import WoodlandCaribou_LightBrownFemaleRight from '../../../assets/WoodlandCaribou_LightBrownFemaleRightSide.webp';
import WoodlandCaribou_MelanisticFemaleRight from '../../../assets/WoodlandCaribou_MelanisticFemaleRightSide.webp';
import WoodlandCaribou_PiebaldVar1FemaleRight from '../../../assets/WoodlandCaribou_PiebaldVariation1FemaleRightSide.webp';
import WoodlandCaribou_PiebaldVar1FemaleLeft from '../../../assets/WoodlandCaribou_PiebaldVariation1FemaleLeftSide.webp';
import WoodlandCaribou_PiebaldVar2FemaleRight from '../../../assets/WoodlandCaribou_PiebaldVariation2FemaleRightSide.webp';
import WoodlandCaribou_PiebaldVar2FemaleLeft from '../../../assets/WoodlandCaribou_PiebaldVariation2FemaleLeftSide.webp';


const WoodlandCaribou = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  const needZonesData = [
    {
      name: "Askiy Ridge Hunting Preserve",
      schedule: [
        { time: "00:00 - 04:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "04:00 - 08:00", type: "Resting", icon: RestingZoneIcon },
        { time: "08:00 - 12:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "12:00 - 16:00", type: "Resting", icon: RestingZoneIcon },
        { time: "16:00 - 20:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "20:00 - 00:00", type: "Drinking", icon: DrinkingZoneIcon },
      ]
    }
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Elusive, cautious, non-migratory" },
    { label: "Habitat", value: "Boreal forests" },
    { label: "Senses", value: "Good vision, exceptionally keen sense of smell, excellent hearing" },
    { label: "Social", value: "Solitary or found in small groups" },
    { label: "Active", value: "Generally crepuscular and nocturnal" },
    { label: "Recommended Equipment", value: "Class 6 Ammo, Antler Rattler" },
    { label: "Species", value: "Rangifer tarandus caribou", italic: true, isLink: true },
    { label: "Difficulty", value: "Average" },
  ];

  // Fur Gallery Data (split by sex)
  const maleGallery = [
    { name: "Albino", src: WoodlandCaribou_AlbinoMaleRight },
    { name: "Dark Brown", src: WoodlandCaribou_DarkBrownMaleRight },
    { name: "Leucistic", src: WoodlandCaribou_LeucisticMaleRight },
    { name: "Light Brown", src: WoodlandCaribou_LightBrownMaleRight },
    { name: "Melanistic", src: WoodlandCaribou_MelanisticMaleRight },
    { name: "Piebald Variation 1 (Right)", src: WoodlandCaribou_PiebaldVar1MaleRight },
    { name: "Piebald Variation 1 (Left)", src: WoodlandCaribou_PiebaldVar1MaleLeft },
    { name: "Piebald Variation 2 (Right)", src: WoodlandCaribou_PiebaldVar2MaleRight },
    { name: "Piebald Variation 2 (Left)", src: WoodlandCaribou_PiebaldVar2MaleLeft },
  ];

  const femaleGallery = [
    { name: "Albino", src: WoodlandCaribou_AlbinoFemaleRight },
    { name: "Dark Brown", src: WoodlandCaribou_DarkBrownFemaleRight },
    { name: "Leucistic", src: WoodlandCaribou_LeucisticFemaleRight },
    { name: "Light Brown", src: WoodlandCaribou_LightBrownFemaleRight },
    { name: "Melanistic", src: WoodlandCaribou_MelanisticFemaleRight },
    { name: "Piebald Variation 1 (Right)", src: WoodlandCaribou_PiebaldVar1FemaleRight },
    { name: "Piebald Variation 1 (Left)", src: WoodlandCaribou_PiebaldVar1FemaleLeft },
    { name: "Piebald Variation 2 (Right)", src: WoodlandCaribou_PiebaldVar2FemaleRight },
    { name: "Piebald Variation 2 (Left)", src: WoodlandCaribou_PiebaldVar2FemaleLeft },
  ];

  // Trivia Data
  const triviaData = [
    "The Woodland Caribou is a class 6 deer huntable on Askiy Ridge Hunting Preserve.",
    "While similar in many ways to the Grant Caribou of Yukon Valley, it is slightly different in appearance.",
    "Unlike the barren-ground caribou (Grant's), boreal woodland caribou are primarily sedentary and do not migrate vast distances.",
    "Both male and female caribou grow antlers, although females may sometimes lack them or have significantly smaller racks."
  ];

  // References Data
  const referencesData = [
    "Woodland Caribou Need Zones, Askiy Ridge",
    "thehuntercotw.fandom.com/wiki/Woodland_Caribou"
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
          <span>Woodland Caribou</span>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Woodland Caribou</div>
            <div className="wiki-sidebar-image">
              <img src={WoodlandCaribouMain} alt="Woodland Caribou" />
            </div>
            
            <div className="wiki-sidebar-header">General Information</div>
            
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Class</span>
              <span><img src={class6Icon} alt="Class 6" className="wiki-class-icon-lg"/>6</span>
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
                  <span>152.53</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-gold">☗ Gold</span>
                  <span>311.21</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-diamond">☗ Diamond</span>
                  <span>430.23</span>
                </div>
              </div>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Weight</span>
              200kg — 419kg<br/>
              <span className="wiki-sidebar-muted">441lbs — 924lbs</span>
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Fur</span>
               <span className="wiki-fs-sm">
                 Albino, Dark Brown, Leucistic, Light Brown, Melanistic, Piebald
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
              "The woodland caribou is a smaller subspecies, living in dense boreal forests of Canada. They have a streamlined body and smaller, less branched antlers compared to other caribou. Woodland caribou are non-migratory, remaining in their forest habitats year-round and feeding primarily on lichens. Typically solitary or in small groups, they are known for their elusive nature and presence for remote, undisturbed areas. They are vulnerable to habitat fragmentation from logging and increased predation. As a result, they are considered a species at risk in many regions, with conversation efforts focused on protecting their critical habitat."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-p-mb">
              The Woodland Caribou is a class 6 deer. It can be hunted on Askiy Ridge Hunting Preserve. While similar in many ways to the Grant Caribou of Yukon Valley Nature Reserve, it is slightly different in appearance.
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
                    <ol style={{marginTop:'6px', marginLeft:'-30px', listStyleType: 'none'}}>
                    <li><a href="#fur-male" onClick={(e)=>scrollToId(e,'fur-male')} className="wiki-link">4.1 Male</a></li>
                    <li><a href="#fur-female" onClick={(e)=>scrollToId(e,'fur-female')} className="wiki-link">4.2 Female</a></li>
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
                        <tr>
                            <td className="wiki-td wiki-td-muted">
                                Male<span className="wiki-text-divider">/</span><span className="wiki-text-female">Female</span>
                            </td>
                            <td className="wiki-td">
                                Light Brown (49.85%)<br/>
                                Dark Brown (49.85%)
                            </td>
                            <td className="wiki-td">
                                X
                            </td>
                            <td className="wiki-td">
                                Piebald Variation 1 (0.10%)<br/>
                                Piebald Variation 2 (0.10%)
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

export default WoodlandCaribou;