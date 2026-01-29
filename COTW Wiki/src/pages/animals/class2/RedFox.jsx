import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import DrinkingZoneIcon from '../../../assets/DrinkingZoneIcon.webp';
import class2Icon from '../../../assets/Class2Icon.webp'; // Class 2 for Red Fox
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import RedFoxMain from '../../../assets/RedFox.webp';
import ShotSchemeImage from '../../../assets/Red_fox_shot_scheme.webp';

// Fur Variant Images (Placeholders)
// Standard
import RedFox_AlbinoMale from '../../../assets/RedFox_AlbinoMaleLeftSide.webp';
import RedFox_DarkRedMale from '../../../assets/RedFox_DarkRedMaleLeftSide.webp';
import RedFox_MelanisticMale from '../../../assets/RedFox_MelanisticMaleLeftSide.webp';
import RedFox_OrangeMale from '../../../assets/RedFox_OrangeMaleLeftSide.webp';
import RedFox_PiebaldMaleLeftSide from '../../../assets/RedFox_PiebaldMaleLeftSide.webp';
import RedFox_PiebaldMaleRightSide from '../../../assets/RedFox_PiebaldMaleRightSide.webp';
import RedFox_RedMale from '../../../assets/RedFox_RedMaleLeftSide.webp';

import RedFox_AlbinoFemale from '../../../assets/RedFox_AlbinoFemaleLeftSide.webp';
import RedFox_DarkRedFemale from '../../../assets/RedFox_DarkRedFemaleLeftSide.webp';
import RedFox_MelanisticFemale from '../../../assets/RedFox_MelanisticFemaleLeftSide.webp';
import RedFox_OrangeFemale from '../../../assets/RedFox_OrangeFemaleLeftSide.webp';
import RedFox_PiebaldFemaleLeftSide from '../../../assets/RedFox_PiebaldFemaleLeftSide.webp';
import RedFox_PiebaldFemaleRightSide from '../../../assets/RedFox_PiebaldFemaleRightSide.webp';
import RedFox_RedFemale from '../../../assets/RedFox_RedFemaleLeftSide.webp';

// Great One (Fabled)
import RedFox_Fabled_BloodMoon from '../../../assets/RedFox_FabledBloodMoon.webp';
import RedFox_Fabled_Candycane from '../../../assets/RedFox_FabledCandycane.webp';
import RedFox_Fabled_CherryBlossom from '../../../assets/RedFox_FabledCherryBlossom.webp';
import RedFox_Fabled_Licorice from '../../../assets/RedFox_FabledLicorice.webp';
import RedFox_Fabled_MidnightPoppy from '../../../assets/RedFox_FabledMidnightPoppy.webp';
import RedFox_Fabled_MysticSnowdrop from '../../../assets/RedFox_FabledMysticSnowdrop.webp';
import RedFox_Fabled_Peppermint from '../../../assets/RedFox_FabledPeppermint.webp';
import RedFox_Fabled_RosebudFrost from '../../../assets/RedFox_FabledRosebudFrost.webp';
import RedFox_Fabled_ScarletNightshade from '../../../assets/RedFox_FabledScarletNightshade.webp';


const RedFox = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  const needZonesData = [
    {
      name: "Hirschfelden / Emerald Coast",
      schedule: [
        { time: "00:00 - 04:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "04:00 - 07:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "07:00 - 10:00", type: "Resting", icon: RestingZoneIcon },
        { time: "10:00 - 13:00", type: "Resting", icon: RestingZoneIcon },
        { time: "13:00 - 17:00", type: "Resting", icon: RestingZoneIcon },
        { time: "17:00 - 20:00", type: "Drinking", icon: DrinkingZoneIcon },
        { time: "20:00 - 00:00", type: "Feeding", icon: FeedingZoneIcon },
      ]
    }
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Docile and skittish" },
    { label: "Habitat", value: "A mix of forests, open fields, and mountainous terrain" },
    { label: "Senses", value: "Excellent vision and very good hearing" },
    { label: "Social", value: "Typically solitary" },
    { label: "Active", value: "During dawn and dusk" },
    { label: "Recommended Equipment", value: "Class 2 Ammo, Predator \"Jackrabbit\" Caller" },
    { label: "Species", value: "Vulpes vulpes", italic: true, isLink: true },
    { label: "Difficulty", value: "Average" },
  ];

  // Fur Gallery Data (Standard) — separate male and female galleries
  const furGalleryMale = [
    { name: "Albino", src: RedFox_AlbinoMale },
    { name: "Dark Red", src: RedFox_DarkRedMale },
    { name: "Melanistic", src: RedFox_MelanisticMale },
    { name: "Orange", src: RedFox_OrangeMale },
    { name: "Piebald", src: RedFox_PiebaldMaleLeftSide },
    { name: "Red", src: RedFox_RedMale },
  ];

  const furGalleryFemale = [
    { name: "Albino", src: RedFox_AlbinoFemale },
    { name: "Dark Red", src: RedFox_DarkRedFemale },
    { name: "Melanistic", src: RedFox_MelanisticFemale },
    { name: "Orange", src: RedFox_OrangeFemale },
    { name: "Piebald", src: RedFox_PiebaldFemaleLeftSide },
    { name: "Red", src: RedFox_RedFemale },
  ];

  // Fur Gallery Data (Great One) — use imported Fabled asset names
  const furGalleryGO = [
    { name: "Fabled Blood Moon", src: RedFox_Fabled_BloodMoon },
    { name: "Fabled Candycane", src: RedFox_Fabled_Candycane },
    { name: "Fabled Cherry Blossom", src: RedFox_Fabled_CherryBlossom },
    { name: "Fabled Licorice", src: RedFox_Fabled_Licorice },
    { name: "Fabled Midnight Poppy", src: RedFox_Fabled_MidnightPoppy },
    { name: "Fabled Mystic Snowdrop", src: RedFox_Fabled_MysticSnowdrop },
    { name: "Fabled Peppermint", src: RedFox_Fabled_Peppermint },
    { name: "Fabled Rosebud Frost", src: RedFox_Fabled_RosebudFrost },
    { name: "Fabled Scarlet Nightshade", src: RedFox_Fabled_ScarletNightshade },
  ];

  // Hunting Tips Data
  const huntingTips = [
    "To get 100% Integrity bonus, the fox should be only hunted using either .223 ammo, .22h ammo or 300gr Arrows (see Integrity). Because of the difficulties of proper bow hunt (precision over distances, proper aiming etc.), it is recommended to use the .223 ammo because of its superior precision over distances.",
    "Regarding its small size and good senses, a red fox can give a hunter a hard time. It can smell and hear a careless hunter from far away and will immediately run away if alarmed and is also nearly impossible to shoot in the woods So the best strategy is to sneak up on them as near as possible and shoot on sight. Here the superior precision of the .223 is useful to hit the fox properly."
  ];

  // Trivia Data
  const triviaData = [
    "The Red Fox is one of the first canids, along with the Coyote, to appear in game. It is also part of the original cast of huntable animals at launch.",
    "The word Fox is thought to descent from the Proto-Germanic word \"Fuhsaz\", for \"Tail\".",
    "It also is called \"Renard Roux\" in French. The \"Renard\" word is Germanic in origin. It means \"Wily\", a synonym for 'Sly'.",
    "It's the most wide spread Fox, Canid, and member of the Carnivora order in the world as it can be found on every continent except Antarctica.",
    "In December 6, 2022 large update Red Fox got a refined appearance.",
    "In December 3, 2024 the Red Fox got a visual update again."
  ];

  // References List
  const references = [
    "Red Fox Need Zones, Hirschfelden",
    "Red Fox Need Zones, Emerald Coast",
    "https://www.etymonline.com/word/fox",
    "https://steamdb.info/patchnotes/9946142/",
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
          <span>Red Fox</span>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Red Fox</div>
            <div className="wiki-sidebar-image">
              <img src={RedFoxMain} alt="Red Fox" />
            </div>
            
            <div className="wiki-sidebar-header">General Information</div>
            
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Class</span>
              <span><img src={class2Icon} alt="Class 2" className="wiki-class-icon-lg"/>2</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Difficulty</span>
              <span>1: Trivial — 9: Legendary</span><br/>
              <span>10: Fabled</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Trophy Type</span>
              <span>Weight</span>
              <div className="wiki-trophy-grid">
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-silver">◆ Silver</span>
                  <span>4.66</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-gold">☗ Gold</span>
                  <span>10.03</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-diamond">☗ Diamond</span>
                  <span>14.05</span>
                </div>
              </div>
              <div style={{marginTop: '10px', textAlign: 'center', backgroundColor: '#112233', padding: '5px', borderRadius: '4px'}}>
                  <span style={{display: 'block', fontSize: '0.75rem', fontWeight: 'bold'}}>💠 Great One</span>
              </div>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Weight</span>
              1kg — 15.4kg<br/>
              <span className="wiki-sidebar-muted">2lbs — 34lbs</span>
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Fur</span>
               <span className="wiki-fs-sm">
                  Albino, Dark Red, Melanistic, Orange, Piebald, Red<br/>
                  <strong>Fabled Exclusive:</strong> Blood Moon, Candycane, Cherry Blossom, Licorice, Midnight Poppy, Mystic Snowdrop, Peppermint, Rosebud Frost, Scarlet Nightshade
               </span>
            </div>

            <div className="wiki-sidebar-header">Locations</div>
            <div className="wiki-sidebar-section">
               <div className="wiki-mb-4"><span className="wiki-link">Hirschfelden Hunting Reserve</span></div>
               <div className="wiki-mb-4"><span className="wiki-link">Yukon Valley Nature Reserve</span></div>
               <div className="wiki-mb-4"><span className="wiki-link">New England Mountains</span></div>
               <div className="wiki-mb-4"><span className="wiki-link">Emerald Coast</span></div>
               <div className="wiki-mb-4"><span className="wiki-link">Salzwiesen Park</span></div>
               <div className="wiki-mb-4"><span className="wiki-link">Tòrr nan Sìthean</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main className="wiki-main">

            {/* Quote Block */}
            <div className="wiki-quote">
              "Native to the entire Northern Hemisphere, the red fox is one of the larger species of fox and is characterized by their most typical orange-red fur and large fluffy tail. Red foxes are territorial omnivores but generally feed on smaller game such as squirrels, mice, and rabbits. They can breed fiercely, and are considered an invasive species in various parts of the world. Males and females often look quite the same, but vixens often weigh less. Males weigh around 10.00 kg (22 lb). The red fox's smaller size makes it a challenge to hunt at the time, as it is hard to spot them."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-p-mb">
              The <strong>Red fox</strong> is a small animal of the <span className="wiki-link">class 2</span>. It can be hunted in <span className="wiki-link">Hirschfelden Hunting Reserve</span>, <span className="wiki-link">Yukon Valley</span>, <span className="wiki-link">New England Mountains</span>, <span className="wiki-link">Emerald Coast</span>, <span className="wiki-link">Salzwiesen Park</span> and <span className="wiki-link">Tòrr nan Sìthean</span>.
            </p>

            {/* Table of Contents */}
            <div className="wiki-toc">
              <div className="wiki-toc-title">
                🔢 Contents <span className="wiki-toc-toggle">[hide]</span>
              </div>
              <ol className="wiki-toc">
                <li><a href="#features" onClick={scrollToId('features')} className="wiki-link">Features</a></li>
                <li><a href="#need-zones" onClick={scrollToId('need-zones')} className="wiki-link">Need Zone Times</a></li>
                <li><a href="#shot-scheme" onClick={scrollToId('shot-scheme')} className="wiki-link">Shot scheme</a></li>
                <li><a href="#hunting-tips" onClick={scrollToId('hunting-tips')} className="wiki-link">Hunting Tips</a></li>
                <li>
                  <a href="#fur-variants" onClick={scrollToId('fur-variants')} className="wiki-link">Fur variants</a>
                  <ol style={{margin:'6px 0 0 12px', paddingLeft: '0', listStyleType: 'none', color: '#6fb2e6'}}>
                    <li className="wiki-mb-4"><a href="#fur-male" onClick={scrollToId('fur-male')} className="wiki-link">5.1 Male</a></li>
                    <li><a href="#fur-female" onClick={scrollToId('fur-female')} className="wiki-link">5.2 Female</a></li>
                  </ol>
                </li>
                <li><a href="#fur-variants-go" onClick={scrollToId('fur-variants-go')} className="wiki-link">Fur Variants | Great One</a></li>
                <li><a href="#fur-variant-rarity" onClick={scrollToId('fur-variant-rarity')} className="wiki-link">Fur Variant Rarity</a></li>
                <li><a href="#trivia" onClick={scrollToId('trivia')} className="wiki-link">Trivia</a></li>
                <li><a href="#references" onClick={scrollToId('references')} className="wiki-link">References</a></li>
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
            <h2 id="need-zones" className="wiki-h2">Need Zone Times</h2>
            <div className="wiki-inline-block">
                <table className="wiki-table wiki-table-fixed">
                    <thead>
                        <tr><th colSpan="2" className="wiki-th wiki-th-center">Hirschfelden / Emerald Coast</th></tr>
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
             <h2 id="shot-scheme" className="wiki-h2">Shot scheme</h2>
            <div className="wiki-shot-container">
                <div className="wiki-shot-container">
                   <img src={ShotSchemeImage} alt="Shot Scheme" className="wiki-shot-scheme-img" />
                </div>
                <div className="wiki-shot-wrap">
                   <div className="wiki-shot-title">Color code</div>
                   <div className="wiki-shot-info">Red - Kills immediately</div>
                   <div className="wiki-shot-info">Blue - Kills very quick</div>
                   <div className="wiki-shot-info">Orange - Kills slowly</div>
                   <div className="wiki-legend-item wiki-legend-item-last">No Color - Unlikely to kill</div>
                </div>
            </div>

            {/* HUNTING TIPS */}
            <h2 id="hunting-tips" className="wiki-h2">Hunting Tips</h2>
            {huntingTips.map((tip, idx) => (
                <p key={idx} className="wiki-mb-15">{tip}</p>
            ))}

            {/* FUR VARIANTS (Standard Gallery) */}
            <h2 id="fur-variants" className="wiki-h2">Fur variants</h2>
            <h3 id="fur-male" className="wiki-h3">Male</h3>
            <div className="wiki-gallery-grid">
              {furGalleryMale.map((item, i) => (
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
              {furGalleryFemale.map((item, i) => (
                <div key={i} className="wiki-gallery-item">
                  <div className="wiki-gallery-placeholder">
                    <img src={item.src} alt={item.name} className="wiki-img-contain" />
                  </div>
                  <span className="wiki-gallery-label">{item.name}</span>
                </div>
              ))}
            </div>

            {/* FUR VARIANTS (Great One Gallery) */}
            <h2 id="fur-variants-go" className="wiki-h2">Fur Variants | Great One</h2>
            <div className="wiki-gallery-grid">
              {furGalleryGO.map((item, i) => (
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
                                Dark Red (33.23%)<br/>
                                Orange (33.23%)<br/>
                                Red (33.23%)
                            </td>
                            <td className="wiki-td">X</td>
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
               {references.map((ref, idx) => (
                  <li key={idx} className="wiki-mb-4">
                     <span className="wiki-link">↑ {ref}</span>
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

export default RedFox;