import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import DrinkingZoneIcon from '../../../assets/DrinkingZoneIcon.webp';
import class5Icon from '../../../assets/Class5Icon.webp'; 
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import WildBoarMain from '../../../assets/WildBoar.webp';
import ShotSchemeImg from '../../../assets/Wild_boar_shot_scheme.webp';

// Fur Variant Images
// Note: Wild Boar variants generally apply to both sexes in game, mapped accordingly.
import WildBoar_Albino from '../../../assets/WildBoar_Albino.webp';
import WildBoar_Blackgold from '../../../assets/WildBoar_Blackgold.webp';
import WildBoar_BrownVar1 from '../../../assets/WildBoar_BrownVariation1.webp';
import WildBoar_BrownVar2 from '../../../assets/WildBoar_BrownVariation2.webp';
import WildBoar_DarkBrown from '../../../assets/WildBoar_DarkBrown.webp';
import WildBoar_LightBrown from '../../../assets/WildBoar_LightBrown.webp';
import WildBoar_Melanistic from '../../../assets/WildBoar_Melanistic.webp';
import WildBoar_Purplegrey from '../../../assets/WildBoar_Purplegrey.webp';

// Great One (Fabled) Images — Left/Right variants
import WildBoar_FabledAshLeft from '../../../assets/WildBoar_FabledAshLeftSide.webp';
import WildBoar_FabledBrindleLeft from '../../../assets/WildBoar_FabledBrindleLeftSide.webp';;
import WildBoar_FabledButterscotchLeft from '../../../assets/WildBoar_FabledButterscotchLeftSide.webp';
import WildBoar_FabledChalkLeft from '../../../assets/WildBoar_FabledChalkLeftSide.webp';
import WildBoar_FabledCinderLeft from '../../../assets/WildBoar_FabledCinderLeftSide.webp';
import WildBoar_FabledScorchLeft from '../../../assets/WildBoar_FabledScorchLeftSide.webp';
import WildBoar_FabledScorchRight from '../../../assets/WildBoar_FabledScorchRightSide.webp';
import WildBoar_FabledSmolderLeft from '../../../assets/WildBoar_FabledSmolderLeftSide.webp';
import WildBoar_FabledStitchLeft from '../../../assets/WildBoar_FabledStitchLeftSide.webp';
import WildBoar_FabledStitchRight from '../../../assets/WildBoar_FabledStitchRightSide.webp';
import WildBoar_FabledStrippleLeft from '../../../assets/WildBoar_FabledStrippleLeftSide.webp';
import WildBoar_FabledStrippleRight from '../../../assets/WildBoar_FabledStrippleRightSide.webp';


const WildBoar = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  const needZonesData = [
    {
      name: "Hirschfelden Hunting Reserve",
      schedule: [
        { time: "00:00 - 03:00", type: "Drinking", icon: DrinkingZoneIcon },
        { time: "03:00 - 06:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "06:00 - 10:00", type: "Resting", icon: RestingZoneIcon },
        { time: "10:00 - 14:00", type: "Resting", icon: RestingZoneIcon },
        { time: "14:00 - 17:00", type: "Resting", icon: RestingZoneIcon },
        { time: "17:00 - 21:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "21:00 - 00:00", type: "Feeding", icon: FeedingZoneIcon },
      ]
    },
    // Note: Other reserves (Medved, Cuatro, Te Awaroa) not shown in screenshots, 
    // omitting to stick to strictly provided data.
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Easily agitated and aggressive" },
    { label: "Habitat", value: "Deciduous forests and open fields" },
    { label: "Senses", value: "Excellent hearing and sense of smell" },
    { label: "Social", value: "Highly social and vocal animals. Lives in medium-sized groups" },
    { label: "Active", value: "During night" },
    { label: "Recommended Equipment", value: "Class 5 Ammo, Wild Boar Caller, Wild Boar Scent" },
    { label: "Species", value: "Sus scrofa", italic: true, isLink: true },
    { label: "Difficulty", value: "Average" },
  ];

  // Fur Gallery Data
  const galleryItems = [
    { name: "Albino", src: WildBoar_Albino },
    { name: "Blackgold", src: WildBoar_Blackgold },
    { name: "Brown Variation 1", src: WildBoar_BrownVar1 },
    { name: "Brown Variation 2", src: WildBoar_BrownVar2 },
    { name: "Dark Brown", src: WildBoar_DarkBrown },
    { name: "Light Brown", src: WildBoar_LightBrown },
    { name: "Melanistic", src: WildBoar_Melanistic },
    { name: "Purplegrey", src: WildBoar_Purplegrey },
  ];

  // Great One Gallery Data
  const greatOneGallery = [
      { name: "Fabled Ash (Left)", src: WildBoar_FabledAshLeft },
      { name: "Fabled Brindle (Left)", src: WildBoar_FabledBrindleLeft },
      { name: "Fabled Butterscotch (Left)", src: WildBoar_FabledButterscotchLeft },
      { name: "Fabled Chalk (Left)", src: WildBoar_FabledChalkLeft },
      { name: "Fabled Cinder (Left)", src: WildBoar_FabledCinderLeft },
      { name: "Fabled Scorch (Left)", src: WildBoar_FabledScorchLeft },
      { name: "Fabled Scorch (Right)", src: WildBoar_FabledScorchRight },
      { name: "Fabled Smolder (Left)", src: WildBoar_FabledSmolderLeft },
      { name: "Fabled Stitch (Left)", src: WildBoar_FabledStitchLeft },
      { name: "Fabled Stitch (Right)", src: WildBoar_FabledStitchRight },
      { name: "Fabled Stripple (Left)", src: WildBoar_FabledStrippleLeft },
      { name: "Fabled Stripple (Right)", src: WildBoar_FabledStrippleRight },
    ];

  // Trivia Data
  const triviaData = [
    "The Wild Boar is one of the original animals that were present ingame at launch.",
    "Wild Boar are the most widespread swine in the world. It exists on every continent except Antarctica.",
    "All domestic pig breeds descend from the Wild Boar.",
    "In French, it is called \"sanglier.\"",
    "It became the 11th Great One and got a remodel on Tuesday 9th December 2025",
    "Domesticated pigs can devolve back into Wild Boar and become Feral in mere Months, growing thicker hair and tusks"
  ];

  // References Data (Placeholder - Not provided in screenshots)
  const referencesData = [
    "Wild Boar Need Zones, Hirschfelden",
    "thehuntercotw.fandom.com"
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
          <span>Wild Boar</span>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Wild Boar</div>
            <div className="wiki-sidebar-image">
              <img src={WildBoarMain} alt="Wild Boar" />
            </div>
            
            <div className="wiki-sidebar-header">General Information</div>
            
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Class</span>
              {/* */}
              <span><img src={class5Icon} alt="Class 5" className="inline-block wiki-class-icon-sm align-middle mr-1.5"/>5</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Difficulty</span>
              {/* */}
              <span>1: Trivial — 5: Medium</span><br/>
              <span>10: Fabled</span>
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
              <span className="wiki-sidebar-label wiki-great-one" style={{color: '#2ecc71'}}>Great One</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Weight</span>
              {/* */}
              25kg — 240kg<br/>
              <span className="wiki-sidebar-muted">55lbs — 529lbs</span>
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Fur</span>
               {/* */}
               <span className="wiki-fs-sm">
                 Albino, Blackgold, Brown, Dark Brown, Light Brown, Melanistic, Purplegrey<br/><br/>
                 <strong>Fabled Exclusive:</strong><br/>
                 Ash, Brindle, Butterscotch, Chalk, Cinder, Scorch, Smolder, Stitch, Stripple
               </span>
            </div>

            <div className="wiki-sidebar-header">Locations</div>
            <div className="wiki-sidebar-section">
               {/* */}
               <div className="wiki-mb-4"><span className="wiki-link">Hirschfelden Hunting Reserve</span></div>
               <div className="wiki-mb-4"><span className="wiki-link">Medved-Taiga National Park</span></div>
               <div className="wiki-mb-4"><span className="wiki-link">Cuatro Colinas Game Reserve</span></div>
               <div className="wiki-mb-4"><span className="wiki-link">Tòrr nan Sithean</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main className="wiki-main">

            {/* Quote Block */}
            <div className="wiki-quote">
              "Also known as the wild swine or the Eurasian wild pig, the wild boar is native to most parts of Europe and Asia. It is also one of the most spread and adaptable mammals in the world, characterized by their bulky bodies, coarse fur, and prominent shoulder hump. Their head is shaped and used as a veritable plow, allowing them to upturn considerable amounts of soil and rocks weighing 40 - 50 kg (88 - 110 lb). A wild boar can run up to 40 km (25 mi) per hour and jump obstacles above 1.50 m (59 inches). Boars are highly social animals and tend to live in groups. Hunters should take considerable care as boars are very tough and will not hesitate to defend themselves if threatened."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-p-mb">
              The <strong>Wild Boar</strong> is a medium-sized kind of swine (<span className="wiki-link">class 5</span>). It can be hunted in four areas, <span className="wiki-link">Hirschfelden Hunting Reserve</span>, <span className="wiki-link">Medved-Taiga National Park</span>, <span className="wiki-link">Cuatro Colinas Game Reserve</span> and <span className="wiki-link">Tòrr nan Sithean</span>. It is one of three huntable animals in the game of the species of <em>Sus scrofa</em> (Boar), the other ones being the <span className="wiki-link">Feral Pig</span> and the <span className="wiki-link">Wild Hog</span>.
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
                <li><a href="#fur-great-ones" onClick={(e)=>scrollToId(e,'fur-great-ones')} className="wiki-link">Fur Variants | Great Ones</a></li>
                <li><a href="#variant-rarity" onClick={(e)=>scrollToId(e,'variant-rarity')} className="wiki-link">Fur Variant Rarity</a></li>
                <li><a href="#trivia" onClick={(e)=>scrollToId(e,'trivia')} className="wiki-link">Trivia</a></li>
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
                        <tr><th colSpan="2" className="wiki-th wiki-th-center">Hirschfelden</th></tr>
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

            {/* GREAT ONES GALLERY */}
            <h2 id="fur-great-ones" className="wiki-h2">Fur Variants | Great Ones</h2>
            <div className="wiki-gallery-grid">
              {greatOneGallery.map((item, i) => (
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
                                Brown Variation 1 (39.74%)<br/>
                                Brown Variation 2 (19.87%)<br/>
                                Dark Brown (19.87%)<br/>
                                Light Brown (19.87%)
                            </td>
                            <td className="wiki-td">
                                X
                            </td>
                            <td className="wiki-td">
                                Blackgold (0.24%)<br/>
                                Purplegrey (0.24%)
                            </td>
                            <td className="wiki-td">
                                Albino (0.08%)<br/>
                                Melanistic (0.08%)
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

export default WildBoar;