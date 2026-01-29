import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import DrinkingZoneIcon from '../../../assets/DrinkingZoneIcon.webp';
import class5Icon from '../../../assets/Class5Icon.webp'; 
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import FeralPigMain from '../../../assets/FeralPig.webp';
import ShotSchemeImg from '../../../assets/Feral_Pig_shot_scheme.webp';

// Fur Variant Images
// Note: Based on screenshots, these apply generally, though rarity differs by sex.
import WildHog_AlbinoLeftSide from '../../../assets/WildHog_AlbinoLeftSide.webp';
import WildHog_BlackLeftSide from '../../../assets/WildHog_BlackLeftSide.webp';
import WildHog_BlackgoldLeftSide from '../../../assets/WildHog_BlackgoldLeftSide.webp';
import WildHog_BlackgoldRightSide from '../../../assets/WildHog_BlackgoldRightSide.webp';
import WildHog_BlackSpotsVariation1LeftSide from '../../../assets/WildHog_BlackSpotsVariation1LeftSide.webp';
import WildHog_BlackSpotsVariation1RightSide from '../../../assets/WildHog_BlackSpotsVariation1RightSide.webp';
import WildHog_BlackSpotsVariation2LeftSide from '../../../assets/WildHog_BlackSpotsVariation2LeftSide.webp';
import WildHog_BlackSpotsVariation2RightSide from '../../../assets/WildHog_BlackSpotsVariation2RightSide.webp';
import WildHog_BrownHybridVariation1LeftSide from '../../../assets/WildHog_BrownHybridVariation1LeftSide.webp';
import WildHog_BrownHybridVariation1RightSide from '../../../assets/WildHog_BrownHybridVariation1RightSide.webp';
import WildHog_BrownHybridVariation2LeftSide from '../../../assets/WildHog_BrownHybridVariation2LeftSide.webp';
import WildHog_BrownHybridVariation2RightSide from '../../../assets/WildHog_BrownHybridVariation2RightSide.webp';
import WildHog_DarkBrownVariation1LeftSide from '../../../assets/WildHog_DarkBrownVariation1LeftSide.webp';
import WildHog_DarkBrownVariation2LeftSide from '../../../assets/WildHog_DarkBrownVariation2LeftSide.webp';
import WildHog_PinkLeftSide from '../../../assets/WildHog_PinkLeftSide.webp';


const FeralPig = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  const needZonesData = [
    {
      name: "Emerald Coast",
      schedule: [
        { time: "00:00 - 03:00", type: "Drinking", icon: DrinkingZoneIcon },
        { time: "03:00 - 06:00", type: "Resting", icon: RestingZoneIcon },
        { time: "06:00 - 10:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "10:00 - 14:00", type: "Resting", icon: RestingZoneIcon },
        { time: "14:00 - 17:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "17:00 - 20:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "20:00 - 00:00", type: "Resting", icon: RestingZoneIcon },
      ]
    }
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Easily agitated and aggressive" },
    { label: "Habitat", value: "Areas where they can find adequate cover" },
    { label: "Senses", value: "Excellent hearing and smell but poor vision" },
    { label: "Social", value: "Lives in medium-sized groups" },
    { label: "Active", value: "During late evening and early morning" },
    { label: "Recommended Equipment", value: "Class 5 Ammo, Wild Boar Caller" },
    { label: "Species", value: "Sus scrofa", italic: true, isLink: true },
    { label: "Difficulty", value: "Average" },
  ];

  // Fur Gallery Data
  const galleryItems = [
    { name: "Albino", src: WildHog_AlbinoLeftSide },
    { name: "Black", src: WildHog_BlackLeftSide },
    { name: "Blackgold (Left)", src: WildHog_BlackgoldLeftSide },
    { name: "Blackgold (Right)", src: WildHog_BlackgoldRightSide },
    { name: "Black Spots Variation 1 (Left)", src: WildHog_BlackSpotsVariation1LeftSide },
    { name: "Black Spots Variation 1 (Right)", src: WildHog_BlackSpotsVariation1RightSide },
    { name: "Black Spots Variation 2 (Left)", src: WildHog_BlackSpotsVariation2LeftSide },
    { name: "Black Spots Variation 2 (Right)", src: WildHog_BlackSpotsVariation2RightSide },
    { name: "Brown Hybrid Variation 1 (Left)", src: WildHog_BrownHybridVariation1LeftSide },
    { name: "Brown Hybrid Variation 1 (Right)", src: WildHog_BrownHybridVariation1RightSide },
    { name: "Brown Hybrid Variation 2 (Left)", src: WildHog_BrownHybridVariation2LeftSide },
    { name: "Brown Hybrid Variation 2 (Right)", src: WildHog_BrownHybridVariation2RightSide },
    { name: "Dark Brown Variation 1", src: WildHog_DarkBrownVariation1LeftSide },
    { name: "Dark Brown Variation 2", src: WildHog_DarkBrownVariation2LeftSide },
    { name: "Pink", src: WildHog_PinkLeftSide },
  ];

  // Trivia Data (Placeholder - Screenshot not provided)
  const triviaData = [
    "Pending screenshot verification...",
  ];

  // References Data (Placeholder - Screenshot not provided)
  const referencesData = [
    "Pending screenshot verification..."
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
          <span>Feral Pig</span>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Feral Pig</div>
            <div className="wiki-sidebar-image">
              <img src={FeralPigMain} alt="Feral Pig" />
            </div>
            
            <div className="wiki-sidebar-header">General Information</div>
            
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Class</span>
              {/* */}
              <span><img src={class5Icon} alt="Class 5" className="wiki-class-icon-lg"/>5</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Difficulty</span>
              {/* */}
              <span>1: Trivial — 5: Medium</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Trophy Type</span>
              <span>Tusks</span>
              <div className="wiki-trophy-grid">
                {/* */}
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-silver">◆ Silver</span>
                  <span>37.50</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-gold">☗ Gold</span>
                  <span>98.50</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-diamond">☗ Diamond</span>
                  <span>144.25</span>
                </div>
              </div>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Weight</span>
              {/* */}
              32kg — 205kg<br/>
              <span className="wiki-sidebar-muted">71lbs — 452lbs</span>
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Fur</span>
               {/* */}
               <span className="wiki-fs-sm">
                 Albino, Blackgold, Black Spots, Black, Brown Hybrid, Dark Brown, Pink
               </span>
            </div>

            <div className="wiki-sidebar-header">Locations</div>
            <div className="wiki-sidebar-section">
               {/* */}
               <div className="wiki-mb-4"><span className="wiki-link">Te Awaroa National Park</span></div>
               <div className="wiki-mb-4"><span className="wiki-link">Emerald Coast</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main className="wiki-main">

            {/* Quote Block */}
            <div className="wiki-quote">
              "Both feral and domestic pigs can trace their ancestry back to the wild boar and although feral pigs look similar to their domestic kin there are a few differences. They are smaller, have a more muscular frame, a longer and flatter snout and their forequarters are larger than their hindquarters. Interestingly, their tail is straight with a bushy tip, unlike the curly tail of a domestic pig. Their stronger frame and muscular neck helps them forage for food. Feral pigs and wild hogs also have a patch of hair running along their backs. Pigs are very quick to take on the physical characteristics of wild boars. After a few generations of being in the wild it is very hard to distinguish them from their wild boar ancestors."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-p-mb">
              The <strong>Feral Pig</strong> is a huntable animal in the <span className="wiki-link">Te Awaroa National Park</span> and the <span className="wiki-link">Emerald Coast</span> It is a <span className="wiki-link">class 5</span> animal.
              <br/><br/>
              The Feral Pig is identical in all aspects to the <span className="wiki-link">Wild Hog</span> in the <span className="wiki-link">Mississippi Acres Preserve</span>. It is one of three huntable animals in the game of the species of <em>Sus scrofa</em> (Boar), the other ones being the <span className="wiki-link">Wild Boar</span> and the <span className="wiki-link">Wild Hog</span>.
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
                        <tr><th colSpan="2" className="wiki-th wiki-th-center">Emerald Coast</th></tr>
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
            <div className="wiki-gallery-grid">
              {galleryItems.map((item, i) => (
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
                                Black Spots Variation 1 (12.50%)<br/>
                                Black Spots Variation 2 (12.50%)<br/>
                                Black (12.45%)<br/>
                                Blackgold (12.45%)<br/>
                                Brown Hybrid Variation 1 (12.45%)<br/>
                                Brown Hybrid Variation 2 (12.45%)<br/>
                                Dark Brown Variation 1 (12.45%)<br/>
                                Dark Brown Variation 2 (12.45%)
                            </td>
                            <td className="wiki-td">
                                X
                            </td>
                            <td className="wiki-td">
                                Pink (0.20%)<br/>
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
                                Black Spots Variation 1 (49.60%)<br/>
                                Black Spots Variation 2 (49.60%)
                            </td>
                            <td className="wiki-td">
                                X
                            </td>
                            <td className="wiki-td">
                                Pink (0.79%)
                            </td>
                            <td className="wiki-td">
                                X
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

export default FeralPig;