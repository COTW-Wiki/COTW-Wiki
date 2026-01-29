import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import DrinkingZoneIcon from '../../../assets/DrinkingZoneIcon.webp';
import class6Icon from '../../../assets/Class6Icon.webp'; // Class 6 for Iberian Wolf
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import IberianWolfMain from '../../../assets/IberianWolf.webp';
import ShotSchemeImg from '../../../assets/Iberian_Wolf_shot_sceme.webp';

// Fur Variant Images
// (Assumed file names based on variants shown in screenshots)
import IberianWolf_Albino from '../../../assets/IberianWolf_Albino.webp';
import IberianWolf_Fantasma from '../../../assets/IberianWolf_Fantasma29.webp';
import IberianWolf_GreyBrown from '../../../assets/IberianWolf_GreyBrown.webp';
import IberianWolf_Grey from '../../../assets/IberianWolf_Grey.webp';
import IberianWolf_Melanistic from '../../../assets/IberianWolf_Melanistic.webp';
import IberianWolf_Ogro from '../../../assets/IberianWolf_Ogro29.webp';
import IberianWolf_Olive from '../../../assets/IberianWolf_Olive.webp';
import IberianWolf_Pristine from '../../../assets/IberianWolf_Pristine.webp';
import IberianWolf_Sombra from '../../../assets/IberianWolf_Sombra29.webp';
import IberianWolf_Winter from '../../../assets/IberianWolf_Winter.webp';


const IberianWolf = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  const needZonesData = [
    {
      name: "Cuatro Colinas",
      schedule: [
        { time: "00:00 - 03:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "03:00 - 06:30", type: "Drinking", icon: DrinkingZoneIcon },
        { time: "06:00 - 09:30", type: "Resting", icon: RestingZoneIcon },
        { time: "09:00 - 12:30", type: "Resting", icon: RestingZoneIcon },
        { time: "12:00 - 15:30", type: "Resting", icon: RestingZoneIcon },
        { time: "15:00 - 18:30", type: "Resting", icon: RestingZoneIcon },
        { time: "18:00 - 21:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "21:00 - 00:30", type: "Feeding", icon: FeedingZoneIcon },
      ]
    }
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Social, territorial, defensive" },
    { label: "Habitat", value: "Forested areas, away from human activity" },
    { label: "Senses", value: "Legendary sense of hearing and smell, excellent vision" },
    { label: "Social", value: "Organized and gregarious, live in coordinated packs with internal social structures" },
    { label: "Active", value: "Mainly dawn and dusk, and intermittent throughout the day" },
    { label: "Recommended Equipment", value: "Class 6 Ammo, Distressed Callers" },
    { label: "Species", value: "Canis lupus signatus", italic: true, isLink: true },
    { label: "Difficulty", value: "Hard" },
  ];

  // Fur Gallery Data
  const furGallery = [
    { name: "Albino", src: IberianWolf_Albino },
    { name: "Fantasma (Quest Exclusive)", src: IberianWolf_Fantasma },
    { name: "Grey Brown", src: IberianWolf_GreyBrown },
    { name: "Grey", src: IberianWolf_Grey },
    { name: "Melanistic", src: IberianWolf_Melanistic },
    { name: "Ogro (Quest Exclusive)", src: IberianWolf_Ogro },
    { name: "Olive", src: IberianWolf_Olive },
    { name: "Pristine", src: IberianWolf_Pristine },
    { name: "Sombra (Quest Exclusive)", src: IberianWolf_Sombra },
    { name: "Winter", src: IberianWolf_Winter },
  ];

  // Trivia Data
  const triviaData = [
    "The best place to hunt Iberian wolf is in the north-east corner of the map, behind the lake.",
    "In real life, wolf howls can be heard up to 6 miles (Nearly 10 km) in forests and 10 miles in a open habitat (plains, tundra, etc)",
    "In the game, the wolf howls that can frequently be heard, can be considered 'ambient sounds' and do not mean there are wolves nearby.",
    "Wolves in the game growl before they attack you. These growls aren't a trackable sound (they aren't a \"warning\" or \"mating\" call)",
    "The following is not confirmed, but in the game, if you kill the 'alpha wolf' of a pack while being attacked, the other pack members will flee. [Rumors]",
    "Melanistic wolves are more common in real life amongst north American wolves than European wolves."
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
          <span>Iberian Wolf</span>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Iberian Wolf</div>
            <div className="wiki-sidebar-image">
              <img src={IberianWolfMain} alt="Iberian Wolf" style={{width:'100%', height: '100%', objectFit: 'cover'}} />
            </div>
            
            <div className="wiki-sidebar-header">General Information</div>
            
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Class</span>
              <span><img src={class6Icon} alt="Class 6" style={{width:'24px', height:'24px', verticalAlign: 'middle', marginRight: '6px'}}/>6</span>
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
                  <span>32</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-gold">☗ Gold</span>
                  <span>36</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-diamond">☗ Diamond</span>
                  <span>39</span>
                </div>
              </div>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Weight</span>
              30kg — 50kg<br/>
              <span className="wiki-sidebar-muted">66lbs — 110lbs</span>
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Fur</span>
               <span className="wiki-fs-sm">
                 Albino, Grey, Grey-Brown, Melanistic, Olive, Pristine, Winter
               </span>
               <br/>
               <span className="wiki-block-label">Mission Exclusive:</span>
               <span className="wiki-fs-sm">
                 Ogro, Sombra, Fantasma
               </span>
            </div>

            <div className="wiki-sidebar-header">Locations</div>
            <div className="wiki-sidebar-section">
               <div className="wiki-mb-4"><span className="wiki-link">Cuatro Colinas Game Reserve</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main className="wiki-main">

            {/* Quote Block */}
            <div className="wiki-quote">
              "The Iberian wolf is a subspecies of the gray wolf, endemic to the Iberian peninsula. Compared to the common Eurasian wolf, it is smaller and more lightly built. Adults measure up to 0.70 m tall at the shoulders and 1.30 m from head to tail. Mature males weigh up to 55.00 kg while females tend to weigh between 30.00 kg and 40.00 kg. It is a keystone species of the regions it inhabits, acting as a regulating force on the population of its prey. In the event of a confrontation with wolves, the best course of action is to appear as intimidating as possible. Walk backwards and avoid making yourself look small. The key to survival is standing your ground and not giving the wolves the opportunity to take you down."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-p-mb">
              The <strong>Iberian Wolf</strong> is a <span className="wiki-link">class 6</span> predator. It can be hunted in the <span className="wiki-link">Cuatro Colinas Game Reserve</span>. It is the second gray wolf subspecies in the game. It is smaller than the <span className="wiki-link">Gray Wolf</span> in Yukon Valley.
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
                        <tr><th colSpan="2" className="wiki-th wiki-th-center">Cuatro Colinas</th></tr>
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
                            <th className="wiki-th">Quest</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Male/Female Combined Row */}
                        <tr>
                            <td className="wiki-td">
                                <span className="wiki-text-male">Male</span>
                                <span style={{color: '#dbe4eb'}}>/</span>
                                <span className="wiki-text-female">Female</span>
                            </td>
                            <td className="wiki-td">
                                Grey Brown (74.70%)<br/>
                                Grey (25.00%)
                            </td>
                            <td className="wiki-td">
                                X
                            </td>
                            <td className="wiki-td">
                                Olive (0.07%)<br/>
                                Pristine (0.07%)<br/>
                                Winter (0.07%)
                            </td>
                            <td className="wiki-td">
                                Albino (0.05%)<br/>
                                Melanistic (0.05%)
                            </td>
                            <td className="wiki-td">
                                Fantasma<br/>
                                Ogro<br/>
                                Sombra
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

export default IberianWolf;