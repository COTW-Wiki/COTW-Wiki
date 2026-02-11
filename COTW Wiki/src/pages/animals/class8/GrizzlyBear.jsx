import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import DrinkingZoneIcon from '../../../assets/DrinkingZoneIcon.webp';
import class8Icon from '../../../assets/Class8Icon.webp'; // Class 8 for Grizzly
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import GrizzlyMain from '../../../assets/GrizzlyBear.webp';
import ShotSchemeImg from '../../../assets/Brown_bear_shot_scheme.webp';

// Fur Variant Images - Male
import GrizzlyBear_AlbinoMale from '../../../assets/GrizzlyBear_AlbinoMale.webp';
import GrizzlyBear_BrownMale from '../../../assets/GrizzlyBear_BrownMale.webp';
import GrizzlyBear_GreyBrownMale from '../../../assets/GrizzlyBear_GreyBrownMale.webp';
import GrizzlyBear_MelanisticMale from '../../../assets/GrizzlyBear_MelanisticMale.webp';

// Fur Variant Images - Female
import GrizzlyBear_AlbinoFemale from '../../../assets/GrizzlyBear_AlbinoFemale.webp';
import GrizzlyBear_BrownFemale from '../../../assets/GrizzlyBear_BrownFemale.webp';
import GrizzlyBear_GreyBrownFemale from '../../../assets/GrizzlyBear_GreyBrownFemale.webp';
import GrizzlyBear_MelanisticFemale from '../../../assets/GrizzlyBear_MelanisticFemale.webp';

const GrizzlyBear = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  const needZonesData = [
    {
      name: "Yukon Valley",
      schedule: [
        { time: "00:00 - 04:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "04:00 - 08:00", type: "Drinking", icon: DrinkingZoneIcon },
        { time: "08:00 - 12:00", type: "Resting", icon: RestingZoneIcon },
        { time: "12:00 - 16:00", type: "Resting", icon: RestingZoneIcon },
        { time: "16:00 - 20:00", type: "Resting", icon: RestingZoneIcon },
        { time: "20:00 - 00:00", type: "Feeding", icon: FeedingZoneIcon },
      ]
    }
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Solitary, defensive, curious" },
    { label: "Habitat", value: "Meadows, coastlines, forested areas" },
    { label: "Senses", value: "Excellent sense of smell, keen senses overall" },
    { label: "Social", value: "Typically isolated from each other" },
    { label: "Active", value: "Active day and night, but rest during midday" },
    { label: "Recommended Equipment", value: "Class 8 Ammo, Predator \"Distressed Fawn\" Caller, Quist Red Pro Electronic Caller" },
    { label: "Species", value: "Ursus arctos horribilis", italic: true, isLink: true },
    { label: "Difficulty", value: "Very Hard" },
  ];

  // Fur Gallery Data - Male
  const maleFurGallery = [
    { name: "Albino", src: GrizzlyBear_AlbinoMale },
    { name: "Brown", src: GrizzlyBear_BrownMale },
    { name: "Grey Brown", src: GrizzlyBear_GreyBrownMale },
    { name: "Melanistic", src: GrizzlyBear_MelanisticMale },
  ];

    // Fur Gallery Data - Female
    const femaleFurGallery = [
      { name: "Albino", src: GrizzlyBear_AlbinoFemale },
      { name: "Brown", src: GrizzlyBear_BrownFemale },
      { name: "Grey Brown", src: GrizzlyBear_GreyBrownFemale },
      { name: "Melanistic", src: GrizzlyBear_MelanisticFemale },
    ];

  // Trivia Data
  const triviaData = [
    "While the Old English word \"Grislic\" (meaning \"to fear\") seems a tempting choice for the Grizzly Bear's namesake, their name actually descends from the Anglo-French word \"Gris\" meaning \"gray\". (Cut the bear some slack. It's already called \"horribilis\")",
    "They are the official state mammal of Montana and the official state animal of California.",
    "In Alaska, there is a specific distinction between \"Grizzlies\" and \"Brown Bears\", which refers to the same species in this context. Bears that live on the coast are called \"Brown Bears\" and bears that live inland are called Grizzly Bears.",
    "It is one of 3 species of Bear huntable in game. The others are the Black Bear, and the Eurasian Brown Bear."
  ];

  // References Data
  const referencesData = [
    "https://www.merriam-webster.com/dictionary/grizzly"
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
          <span>Grizzly Bear</span>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Grizzly Bear</div>
            <div className="wiki-sidebar-image">
              <img src={GrizzlyMain} alt="Grizzly Bear" className="max-w-full max-h-[200px] object-contain" />
            </div>
            
            <div className="wiki-sidebar-header">General Information</div>
            
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Class</span>
              <span><img src={class8Icon} alt="Class 8" className="inline-block wiki-class-icon-sm align-middle mr-1.5"/>8</span>
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
                  <span>52.60</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-gold">☗ Gold</span>
                  <span>60.80</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-diamond">☗ Diamond</span>
                  <span>66.94</span>
                </div>
              </div>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Weight</span>
              165kg — 680kg<br/>
              <span className="wiki-sidebar-muted">364lbs — 1499lbs</span>
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Fur</span>
               <span className="wiki-fs-sm">
                 Albino, Brown, Grey Brown, Melanistic
               </span>
            </div>

            <div className="wiki-sidebar-header">Locations</div>
            <div className="wiki-sidebar-section">
               <div className="wiki-mb-4"><span className="wiki-link">Yukon Valley Nature Reserve</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main className="wiki-main">

            {/* Quote Block */}
            <div className="wiki-quote">
              "The North American Brown Bear, most commonly known as the Grizzly Bear, is a massive brown bear that can be found in mainland regions in the northern reaches of America and Canada. The Alaskan grizzly bear is the largest of its type, weighing up to 680.00 kg thanks to a rich diet and plentiful hunting and feeding opportunities. They have keen senses overall and are curious animals, always on the lookout for their next meal, which they can hunt, kill and steal on their own. Grizzlies can be found near bodies of flowing water, where they find their most abundant food sources. Hunting a grizzly is the challenge of a lifetime, and without the right equipment, skill and patience, might even be your last."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-p-mb">
              The <strong>Grizzly Bear</strong> is a <span className="wiki-link">class 8</span> predator. It can be hunted in <span className="wiki-link">Yukon Valley</span>. It is the 2nd subspecies of Ursus arctos in the game. The 1st is the <span className="wiki-link">Eurasian Brown Bear</span>.
            </p>

            {/* Table of Contents */}
            <div className="wiki-toc">
              <div className="wiki-toc-title">
                🔢 Contents <span className="wiki-toc-toggle">[hide]</span>
              </div>
              <ol className="wiki-toc">
                <li><a href="#features" onClick={(e)=>scrollToId(e,'features')} className="wiki-link">Features</a></li>
                <li><a href="#need-zones" onClick={(e)=>scrollToId(e,'need-zones')} className="wiki-link">Need Zone Times</a></li>
                <li><a href="#shot-scheme" onClick={(e)=>scrollToId(e,'shot-scheme')} className="wiki-link">Shot Scheme</a></li>
                <li><a href="#fur-variants" onClick={(e)=>scrollToId(e,'fur-variants')} className="wiki-link">Fur Variants</a></li>
                    <ol style={{listStyleType: 'none', marginLeft: '-20px'}}>
                      <li><a href="#fur-male" onClick={(e)=>scrollToId(e,'fur-male')} className="wiki-link" style={{marginLeft:'20px'}}>4.1. Male</a></li>
                      <li><a href="#fur-female" onClick={(e)=>scrollToId(e,'fur-female')} className="wiki-link" style={{marginLeft:'20px'}}>4.2. Female</a></li>
                    </ol>
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
                        <tr><th colSpan="2" className="wiki-th wiki-th-center">All Reserves</th></tr>
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
            <h2 className="wiki-h2" id="shot-scheme">Shot Scheme</h2>
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
                                Gray Brown (99.70%)
                            </td>
                            <td className="wiki-td">
                                X
                            </td>
                            <td className="wiki-td">
                                Brown (0.20%)
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

            {/* REFERENCES */}
            <h2 id="references" className="wiki-h2">References</h2>
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

export default GrizzlyBear;