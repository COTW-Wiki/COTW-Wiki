import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import DrinkingZoneIcon from '../../../assets/DrinkingZoneIcon.webp';
import class7Icon from '../../../assets/Class7Icon.webp'; // Class 7 for Roosevelt Elk
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import RooseveltElkMain from '../../../assets/RooseveltElk.webp';
import ShotSchemeImg from '../../../assets/Roosevelt_elk_shot_scheme.webp';

// Fur Variant Images - Male
import RooseveltElk_AlbinoMale from '../../../assets/RooseveltElk_AlbinoMale.webp';
import RooseveltElk_BrownMale from '../../../assets/RooseveltElk_BrownMale.webp';
import RooseveltElk_MelanisticMale from '../../../assets/RooseveltElk_MelanisticMale.webp';
import RooseveltElk_OrangeMale from '../../../assets/RooseveltElk_OrangeMale.webp';
import RooseveltElk_PiebaldMale from '../../../assets/RooseveltElk_PiebaldMale.webp';
import RooseveltElk_TanMale from '../../../assets/RooseveltElk_TanMale.webp';

// Fur Variant Images - Female
import RooseveltElk_AlbinoFemale from '../../../assets/RooseveltElk_AlbinoFemale.webp';
import RooseveltElk_BrownFemale from '../../../assets/RooseveltElk_BrownFemale.webp';
import RooseveltElk_MelanisticFemale from '../../../assets/RooseveltElk_MelanisticFemale.webp';
import RooseveltElk_OrangeFemale from '../../../assets/RooseveltElk_OrangeFemale.webp';
import RooseveltElk_PiebaldFemale from '../../../assets/RooseveltElk_PiebaldFemale.webp';
import RooseveltElk_TanFemale from '../../../assets/RooseveltElk_TanFemale.webp';


const RooseveltElk = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  const needZonesData = [
    {
      name: "Layton Lake District",
      schedule: [
        { time: "00:00 - 04:30", type: "Resting", icon: RestingZoneIcon },
        { time: "04:00 - 08:30", type: "Drinking", icon: DrinkingZoneIcon },
        { time: "08:00 - 12:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "12:00 - 16:30", type: "Resting", icon: RestingZoneIcon },
        { time: "16:00 - 20:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "20:00 - 00:30", type: "Resting", icon: RestingZoneIcon },
      ]
    }
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Docile and vocal" },
    { label: "Habitat", value: "Forests and mountainous terrain" },
    { label: "Senses", value: "Highly tuned senses in general, particularly excellent hearing and smell" },
    { label: "Social", value: "Males travel alone or in pairs/trios, females live in medium to large-sized groups" },
    { label: "Active", value: "During dawn and dusk" },
    { label: "Recommended Equipment", value: "Class 7 Ammo, Elk Caller, Elk Scent" },
    { label: "Species", value: "Cervus canadensis roosevelti", italic: true, isLink: true },
    { label: "Difficulty", value: "Hard" },
  ];

  // Fur Gallery Data - Male
  const maleFurGallery = [
    { name: "Albino", src: RooseveltElk_AlbinoMale },
    { name: "Brown", src: RooseveltElk_BrownMale },
    { name: "Melanistic", src: RooseveltElk_MelanisticMale },
    { name: "Orange", src: RooseveltElk_OrangeMale },
    { name: "Piebald", src: RooseveltElk_PiebaldMale },
    { name: "Tan", src: RooseveltElk_TanMale },
  ];

  // Fur Gallery Data - Female
  const femaleFurGallery = [
    { name: "Albino", src: RooseveltElk_AlbinoFemale },
    { name: "Brown", src: RooseveltElk_BrownFemale },
    { name: "Melanistic", src: RooseveltElk_MelanisticFemale },
    { name: "Orange", src: RooseveltElk_OrangeFemale },
    { name: "Piebald", src: RooseveltElk_PiebaldFemale },
    { name: "Tan", src: RooseveltElk_TanFemale },
  ];

  // Trivia Data
  const triviaData = [
    "The Roosevelt elk was one of the animals featured in the game at launch.",
    "The Roosevelt elk was named after famed outdoorsman Theodore Roosevelt, who served as the 26th president of the United States of America between 1901 and 1909.",
    "Before the arrival of European settlers to the Americas, the word \"elk\" referred only to Alces alces, which is known in North America as the moose. Conversely, in Europe, Cervus canadensis are typically referred to as moose.",
    "In the United States, elk are also called wapiti, which means \"white rump\" in saawanwaatoweewe and Cree.",
    "The Roosevelt elk was the third animal to receive TruRACS compatibility.",
    "Elk possess tusk-like teeth called ivories. These teeth are vestigial and no longer serve a purpose, but may have aided the elk's prehistoric ancestors in courtship much like the tusks of the extant Siberian musk deer."
  ];

  // References Data
  const referencesData = [
    "https://www.rmef.org/elk-network/elk-wapiti-whats-name/",
    "https://www.wideopenspaces.com/elk-ivories-what-they-are-how-to-extract-them-and-why-you-should-keep-them/"
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
          <span>Roosevelt Elk</span>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Roosevelt Elk</div>
            <div className="wiki-sidebar-image">
              <img src={RooseveltElkMain} alt="Roosevelt Elk" />
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
                  <span>128.7</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-gold">☗ Gold</span>
                  <span>272.8</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-diamond">☗ Diamond</span>
                  <span>380.8</span>
                </div>
              </div>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Weight</span>
              260kg — 500kg<br/>
              <span className="wiki-sidebar-muted">573lbs — 1102lbs</span>
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Fur</span>
               <span className="wiki-fs-sm">
                 Albino, Brown, Melanistic, Orange, Piebald, Tan
               </span>
            </div>

            <div className="wiki-sidebar-header">Locations</div>
            <div className="wiki-sidebar-section">
               <div className="wiki-mb-4"><span className="wiki-link">Layton Lake District</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main className="wiki-main">

            {/* Quote Block */}
            <div className="wiki-quote">
              "Also known as the Olympic elk, the Roosevelt elk is one of the largest deer species in North America and the largest subspecies of American Elk. They are characterized by their dark and bulky necks and the bulls often have large, branching antlers. Roosevelt elk live inside forests on flat and steep terrain, but often venture out along the edges of the water where they feed on grass and woody plants. They are commonly found in large herds. Male elk often make loud and highly distinct sounds, known as bugling, that can be heard over very long distances. Adult males are typically 40% larger than their female counterparts and weigh on average 320.00 - 331.00 kg (705 - 730 lb)."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-p-mb">
              The <strong>Roosevelt Elk</strong> is a large deer. It can be hunted on <span className="wiki-link">Layton Lake District</span>. It is one of 3 elk subspecies featured in the game, with the other's being the <span className="wiki-link">Rocky Mountain Elk</span> and <span className="wiki-link">Manitoban Elk</span>
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
                        <tr><th colSpan="2" className="wiki-th wiki-th-center">Layton Lake District</th></tr>
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
                                Brown (33.23%)<br/>
                                Orange (33.23%)<br/>
                                Tan (33.23%)
                            </td>
                            <td className="wiki-td">
                                X
                            </td>
                            <td className="wiki-td">
                                Piebald (0.20%)
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

export default RooseveltElk;