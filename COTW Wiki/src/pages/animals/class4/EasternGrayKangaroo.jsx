import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import DrinkingZoneIcon from '../../../assets/DrinkingZoneIcon.webp';
import class4Icon from '../../../assets/Class4Icon.webp'; // Class 4 for Eastern Gray Kangaroo
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import EasternGrayKangarooMain from '../../../assets/EasternGrayKangaroo.webp';
import ShotSchemeImg from '../../../assets/Eastern_Gray_Kangaroo_shot_scheme.webp';

// Fur Variant Images (Placeholders based on screenshots)
import EasternGrayKangaroo_Albino from '../../../assets/EasternGrayKangaroo_Albino.webp';
import EasternGrayKangaroo_Brown1 from '../../../assets/EasternGrayKangaroo_BrownVariation1.webp';
import EasternGrayKangaroo_Brown2 from '../../../assets/EasternGrayKangaroo_BrownVariation2.webp';
import EasternGrayKangaroo_Grey1 from '../../../assets/EasternGrayKangaroo_GreyVariation1.webp';
import EasternGrayKangaroo_Grey2 from '../../../assets/EasternGrayKangaroo_GreyVariation2.webp';
import EasternGrayKangaroo_GreyBrown from '../../../assets/EasternGrayKangaroo_GreyBrown.webp';
import EasternGrayKangaroo_Leucistic1 from '../../../assets/EasternGrayKangaroo_LeucisticVariation1.webp';
import EasternGrayKangaroo_Leucistic2 from '../../../assets/EasternGrayKangaroo_LeucisticVariation2.webp';
import EasternGrayKangaroo_Leucistic3 from '../../../assets/EasternGrayKangaroo_LeucisticVariation3.webp';
import EasternGrayKangaroo_Melanistic from '../../../assets/EasternGrayKangaroo_Melanistic.webp';


const EasternGrayKangaroo = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  const needZonesData = [
    {
      name: "Emerald Coast",
      schedule: [
        { time: "00:00 - 03:00", type: "Drinking", icon: DrinkingZoneIcon },
        { time: "00:30 - 06:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "06:00 - 09:00", type: "Resting", icon: RestingZoneIcon },
        { time: "09:00 - 12:00", type: "Resting", icon: RestingZoneIcon },
        { time: "12:00 - 15:00", type: "Resting", icon: RestingZoneIcon },
        { time: "15:00 - 18:00", type: "Resting", icon: RestingZoneIcon },
        { time: "18:00 - 21:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "21:00 - 00:00", type: "Feeding", icon: FeedingZoneIcon },
      ]
    }
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Grazing, resting, and traveling, Very curious and sometimes aggressive" },
    { label: "Habitat", value: "Grasslands, Woodlands, and edges of Jungle" },
    { label: "Senses", value: "Decent hearing and vision" },
    { label: "Social", value: "In mobs of 10 or less; highly social" },
    { label: "Active", value: "Most active during Dusk and Dawn" },
    { label: "Recommended Equipment", value: "Class 4 Ammo" },
    { label: "Species", value: "Macropus giganteus", italic: true, isLink: true },
    { label: "Difficulty", value: "Hard" },
  ];

  // Fur Gallery Data
  const furGallery = [
    { name: "Albino", src: EasternGrayKangaroo_Albino },
    { name: "Brown Variation 1", src: EasternGrayKangaroo_Brown1 },
    { name: "Brown Variation 2", src: EasternGrayKangaroo_Brown2 },
    { name: "Grey Variation 1", src: EasternGrayKangaroo_Grey1 },
    { name: "Grey Variation 2", src: EasternGrayKangaroo_Grey2 },
    { name: "Grey Brown", src: EasternGrayKangaroo_GreyBrown },
    { name: "Leucistic Variation 1", src: EasternGrayKangaroo_Leucistic1 },
    { name: "Leucistic Variation 2", src: EasternGrayKangaroo_Leucistic2 },
    { name: "Leucistic Variation 3", src: EasternGrayKangaroo_Leucistic3 },
    { name: "Melanistic", src: EasternGrayKangaroo_Melanistic },
  ];

  // Trivia Data
  const triviaData = [
    "According to legend, the word Kangaroo comes from Captain Cook's first expedition to Australia. Apparently, when he first encountered Kangaroos and asked the Aboriginal People what they were called, the confused locals simply replied, \"I Don't Know/ I don't understand\", or \"Kangaroo\". This story is probably apocryphal however. What ISN'T a myth though is that the word probably is derived from the local aboriginal word for the animal, \"Ganguruu\". Also the Eastern Gray Kangaroo would have probably been the species Captain Cook first saw when he landed on the continent.",
    "Female Kangaroos are often called \"Does\", \"Fliers\", or \"Jills\"; and Male Kangaroos are often called \"Bucks\", \"Boomers\", or \"Adam Garcias/ Jacks\".",
    "The Eastern Gray Kangaroo is the first Kangaroo, and also, the first marsupial species to be added to the game. But it isn't the first of it's kind to be added to an EXPANSIVE WORLDS game. That title goes to the largest Kangaroo species; the legendary Red Kangaroo (which can be hunted on theHunter: Classic)",
    "When male Kangaroos fight, they will often grab and jab at each other with their front limbs. This is probably how the Boxing Kangaroo trope was created in pop culture. The first recorded instance of a \"Boxing Kangaroo\" was some time around 1891 when a man, known only as Professor Lindermann, created a traveling act where he would fight a boxing glove clad Kangaroo named Jack."
  ];

  // References Data
  const referencesData = [
    "Eastern Gray Kangaroo Need Zones, Emerald Coast",
    "https://www.bushheritage.org.au/species/kangaroos",
    "https://www.woot.com/blog/post/the-debunker-where-does-the-word-kangaroo-come-from",
    "https://www.etymonline.com/word/kangaroo",
    "https://www.pbs.org/wnet/nature/kangaroo-mob-kangaroo-fact-sheet/7444/",
    "https://allthatsinteresting.com/kangaroo-boxing"
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
          <span>Eastern Gray Kangaroo</span>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Eastern Gray Kangaroo</div>
            <div className="wiki-sidebar-image">
              <img src={EasternGrayKangarooMain} alt="Eastern Gray Kangaroo" />
            </div>
            
            <div className="wiki-sidebar-header">General Information</div>
            
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Class</span>
              {/* Cited from screenshot 215742 */}
              <span><img src={class4Icon} alt="Class 4" className="wiki-class-icon-lg"/>4</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Difficulty</span>
              {/* Cited from screenshot 215742 */}
              <span>1: Trivial — 9: Legendary</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Trophy Type</span>
              <span>Length</span>
              <div className="wiki-trophy-grid">
                {/* Cited from screenshot 215742 */}
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-silver">◆ Silver</span>
                  <span>226</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-gold">☗ Gold</span>
                  <span>378</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-diamond">☗ Diamond</span>
                  <span>492</span>
                </div>
              </div>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Weight</span>
              {/* Cited from screenshot 215742 */}
              29.25kg — 66.00kg<br/>
              <span className="wiki-sidebar-muted">64lbs — 146lbs</span>
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Fur</span>
               {/* Cited from screenshot 215742 */}
               <span className="wiki-fs-sm">
                 Albino, Grey Brown, Grey, Leucistic, Melanistic, Brown
               </span>
            </div>

            <div className="wiki-sidebar-header">Locations</div>
            <div className="wiki-sidebar-section">
               {/* Cited from screenshot 215742 */}
               <div className="wiki-mb-4"><span className="wiki-link">Emerald Coast</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main className="wiki-main">

            {/* Quote Block */}
            <div className="wiki-quote">
              "Macropus Giganteus or the Eastern Grey Kangaroo is the heaviest and second-largest marsupial endemic to Eastern Australia. Residing in the eastern parts of Australia, it can often be found resting in cover near woodlands.
              <br/><br/>
              Being a social animal, a kangaroo will rarely be found alone. Most commonly active as the sun rises or just as it sets. This is when they can be found grazing or socializing. Being able to travel at speeds up to 65 km/h and having the longest jump of all terrestrial animals, 13.50 m, this makes them one of the fastest animals in Australia. They can sustain such speeds thanks to their extremely agile tail, which they use for balance while running - or as a third leg when walking."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-p-mb">
              The <strong>Eastern Gray Kangaroo</strong> is a (<span className="wiki-link">Class 4</span>) macropod that can be hunted on <span className="wiki-link">Emerald Coast</span>. It is currently the only huntable marsupial in game.
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
            <h2 className="wiki-h2" id="fur-variants">Fur Variants</h2>
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
            <h2 className="wiki-h2" id="variant-rarity">Fur Variant Rarity</h2>
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
                        {/* Combined Male/Female Row */}
                        <tr>
                            <td className="wiki-td wiki-td-muted">
                                Male<span className="wiki-text-divider">/</span><span className="wiki-text-female">Female</span>
                            </td>
                            <td className="wiki-td">
                                Grey Variation 1 (24.90%)<br/>
                                Gray Variation 2 (24.90%)<br/>
                                Gray Brown (24.90%)<br/>
                                Brown Variation 1 (12.50%)<br/>
                                Brown Variation 2 (12.50%)
                            </td>
                            <td className="wiki-td">
                                X
                            </td>
                            <td className="wiki-td">
                                X
                            </td>
                            <td className="wiki-td">
                                Leucistic Variation 1 (0.07%)<br/>
                                Leucistic Variation 2 (0.07%)<br/>
                                Leucistic Variation 3 (0.07%)<br/>
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
            <h2 className="wiki-h2" id="references">References</h2>
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

export default EasternGrayKangaroo;