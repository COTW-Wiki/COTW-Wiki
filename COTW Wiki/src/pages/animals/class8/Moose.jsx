import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import DrinkingZoneIcon from '../../../assets/DrinkingZoneIcon.webp';
import class8Icon from '../../../assets/Class8Icon.webp'; // Class 8 for Moose
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import MooseMain from '../../../assets/Moose.webp';
import ShotSchemeImg from '../../../assets/Moose_shot_scheme.webp';

// Fur Variant Images - Male
import Moose_AcromelanisticMaleRightSide from '../../../assets/Moose_AcromelanisticMaleRightSide.webp';
import Moose_BrownMaleRightSide from '../../../assets/Moose_BrownMaleRightSide.webp';
import Moose_MosaicMaleRightSide from '../../../assets/Moose_MosaicMaleRightSide.webp';
import Moose_MosaicMaleLeftSide from '../../../assets/Moose_MosaicMaleLeftSide.webp';
import Moose_LightBrownMaleRightSide from '../../../assets/Moose_LightBrownMaleRightSide.webp';
import Moose_MelanisticMaleRightSide from '../../../assets/Moose_MelanisticMaleRightSide.webp';
import Moose_AlbinoMaleRightSide from '../../../assets/Moose_AlbinoMaleRightSide.webp';
import Moose_MochaMaleRightSide from '../../../assets/Moose_Mocha29MaleRightSide.webp';
import Moose_PiebaldMaleRightSide from '../../../assets/Moose_PiebaldMaleRightSide.webp';
import Moose_TanMaleRightSide from '../../../assets/Moose_TanMaleRightSide.webp';

// Fur Variant Images - Female
import Moose_AcromelanisticFemale from '../../../assets/Moose_AcromelanisticFemale.webp';
import Moose_BrownFemale from '../../../assets/Moose_BrownFemale.webp';
import Moose_DarkBrownFemale from '../../../assets/Moose_DarkBrownFemale.webp';
import Moose_MelanisticFemale from '../../../assets/Moose_MelanisticFemale.webp';
import Moose_AlbinoFemale from '../../../assets/Moose_AlbinoFemale.webp';
import Moose_PiebaldFemale from '../../../assets/Moose_PiebaldFemale.webp';
import Moose_TanFemale from '../../../assets/Moose_TanFemale.webp';

// Fur Variant Images - Great Ones (Fabled)
import Moose_GO_Ashen from '../../../assets/Moose_FabledAshen.webp';
import Moose_GO_Birch from '../../../assets/Moose_FabledBirch.webp';
import Moose_GO_Oak from '../../../assets/Moose_FabledOak.webp';
import Moose_GO_Speckled from '../../../assets/Moose_FabledSpeckled.webp';
import Moose_GO_Spruce from '../../../assets/Moose_FabledSpruce.webp';
import Moose_GO_TwoTones from '../../../assets/Moose_FabledTwoTones.webp';


const Moose = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  const needZonesData = [
    {
      name: "Askiy Ridge",
      schedule: [
        { time: "00:00 - 04:00", type: "Resting", icon: RestingZoneIcon },
        { time: "04:00 - 08:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "08:00 - 12:00", type: "Resting", icon: RestingZoneIcon },
        { time: "12:00 - 16:00", type: "Drinking", icon: DrinkingZoneIcon },
        { time: "16:00 - 20:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "20:00 - 00:00", type: "Feeding", icon: FeedingZoneIcon },
      ]
    }
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Docile, but easily defensive" },
    { label: "Habitat", value: "Prefer coniferous forests and wetlands" },
    { label: "Senses", value: "Great sense of smell and good hearing" },
    { label: "Social", value: "Typically solitary" },
    { label: "Active", value: "During dusk and dawn" },
    { label: "Recommended Equipment", value: "Class 8 Ammo, Moose Caller, Moose Scent" },
    { label: "Species", value: "Alces alces", italic: true, isLink: true },
    { label: "Difficulty", value: "Hard" },
  ];

  // Fur Gallery Data - Male
  const maleFurGallery = [
    { name: "Acromelanistic", src: Moose_AcromelanisticMaleRightSide },
    { name: "Albino", src: Moose_AlbinoMaleRightSide },
    { name: "Brown", src: Moose_BrownMaleRightSide },
    { name: "Light Brown", src: Moose_LightBrownMaleRightSide },
    { name: "Melanistic", src: Moose_MelanisticMaleRightSide },
    { name: "Mosaic (Left)", src: Moose_MosaicMaleLeftSide },
    { name: "Mosaic (Right)", src: Moose_MosaicMaleRightSide },
    { name: "Mocha (Quest Exclusive)", src: Moose_MochaMaleRightSide },
    { name: "Piebald", src: Moose_PiebaldMaleRightSide },
    { name: "Tan", src: Moose_TanMaleRightSide },
  ];

    // Fur Gallery Data - Female
    const femaleFurGallery = [
      { name: "Acromelanistic", src: Moose_AcromelanisticFemale },
      { name: "Albino", src: Moose_AlbinoFemale },
      { name: "Brown", src: Moose_BrownFemale },
      { name: "Dark Brown", src: Moose_DarkBrownFemale },
      { name: "Melanistic", src: Moose_MelanisticFemale },
      { name: "Piebald", src: Moose_PiebaldFemale },
      { name: "Tan", src: Moose_TanFemale },
    ];

  // Great Ones Gallery
  const greatOnesGallery = [
    { name: "Fabled Ashen", src: Moose_GO_Ashen },
    { name: "Fabled Birch", src: Moose_GO_Birch },
    { name: "Fabled Oak", src: Moose_GO_Oak },
    { name: "Fabled Speckled", src: Moose_GO_Speckled },
    { name: "Fabled Spruce", src: Moose_GO_Spruce },
    { name: "Fabled Two Tones", src: Moose_GO_TwoTones },
  ];

  // Trivia Data
  const triviaData = [
    "The word 'Moose' comes from the Algonquin word Moosh meaning \"Eater of Bark\".",
    "It is the State Animal of both Alaska and Maine.",
    "Even though many moose can be found in Colorado, they are absent from Silver Ridge Peaks.",
    "Despite having a long history with the people and landscape of North America, the Moose actually evolved in Eurasia and migrated over during the ice age. The only Native North American \"Moose\" species is the now extinct Elk-Moose (Cervalces scotti).",
    "In Europe they are know as Eurasian Elk.",
    "Including the mission: Last of Its Kind, the Moose is currently on 7 maps, the most among all huntable animal species.",
    "The scientific name of the Moose, (Alces alces), is together with the name of the Red Fox (Vulpes vulpes), Harlequin Duck (Histrionicus histrionicus), Roe Deer (Capreolus capreolus), American Buffalo (Bison bison bison), Axis Deer (Axis axis), Fallow Deer (Dama dama), Greylag Goose (Anser anser), Willow Ptarmigan (Lagopus lagopus) and the Eurasian Lynx (Lynx lynx) a tautonym, that means a scientific name in which both parts of the name have the same spelling.",
    "In the patch released on 27.09.2022, a new model with improved fur and textures was released, making the moose look more realistic.",
    "In 06.12.2022 patch moose got its own Great Ones individuals. They can be rarely found on any map where moose dwells."
  ];

  // References Data
  const referencesData = [
    "Moose Need Zones, Askiy Ridge",
    "https://www.britannica.com/animal/moose-mammal",
    "https://www.britannica.com/animal/moose-mammal"
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
          <span>Moose</span>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Moose</div>
            <div className="wiki-sidebar-image">
              <img src={MooseMain} alt="Moose" />
            </div>
            
            <div className="wiki-sidebar-header">General Information</div>
            
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Class</span>
              <span><img src={class8Icon} alt="Class 8" className="wiki-class-icon-lg"/>8</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Difficulty</span>
              <span>1: Trivial — 5: Medium</span><br/>
              <span>10: Fabled</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Trophy Type</span>
              <span>Antlers</span>
              <div className="wiki-trophy-grid">
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-silver">◆ Silver</span>
                  <span>86.22</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-gold">☗ Gold</span>
                  <span>194.09</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-diamond">☗ Diamond</span>
                  <span>274.99</span>
                </div>
              </div>
              <div className="wiki-great-one-badge">💎 Great One</div>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Weight</span>
              320kg — 620kg<br/>
              700kg (Great One)<br/>
              <span className="wiki-sidebar-muted">705lbs — 1367lbs</span><br/>
              <span className="wiki-sidebar-muted">1543lbs (Great One)</span>
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Fur</span>
               <span className="wiki-fs-sm">
                 Acromelanistic, Albino, Brown, Dark-Brown, Light Brown, Melanistic, Mosaic, Piebald, Tan
               </span>
               <br/>
               <span className="wiki-block-label">Mission Exclusive:</span>
               <span className="wiki-fs-sm">Mocha</span>
               <br/>
               <span className="wiki-block-label">Fabled Exclusive:</span>
               <span className="wiki-fs-sm">
                 Spruce, Two Tone, Ashen, Birch, Oak, Speckled
               </span>
            </div>

            <div className="wiki-sidebar-header">Locations</div>
            <div className="wiki-sidebar-section">
               <div className="wiki-mb-4"><span className="wiki-link">Layton Lake District</span></div>
               <div className="wiki-mb-4"><span className="wiki-link">Medved-Taiga National Park</span></div>
               <div className="wiki-mb-4"><span className="wiki-link">Yukon Valley Nature Reserve</span></div>
               <div className="wiki-mb-4"><span className="wiki-link">Te Awaroa National Park (Mission Only)</span></div>
               <div className="wiki-mb-4"><span className="wiki-link">Revontuli Coast</span></div>
               <div className="wiki-mb-4"><span className="wiki-link">New England Mountains</span></div>
               <div className="wiki-mb-4"><span className="wiki-link">Askiy Ridge Hunting Preserve</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main className="wiki-main">

            {/* Quote Block */}
            <div className="wiki-quote">
              "Moose are the largest species in the deer family and are easily distinguished by their long legs, head, and snout, as well as their large shovel-like (palmated) antlers. Males feature a dewlap, which is a fatty piece of skin under the chin. Moose are commonly found in most of the Northern Hemisphere, and thrive in temperate and subarctic climates. They often reach a height of 2.00 m and weigh between 200.00 kg to 500.00 kg. Moose are herbivores and solitary animals that are rarely found in groups or herds. Although they are often slow-moving and calm animals, they can easily become aggressive if startled or threatened. When hunting moose, shot placement is essential as they are very tough and surprisingly nimble."
               <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-p-mb">
              The <strong>Moose</strong> is the largest species of deer in game <span className="wiki-link">(class 8)</span>, and it can be hunted on <span className="wiki-link">Layton Lake District</span>, <span className="wiki-link">Medved-Taiga</span>, <span className="wiki-link">Yukon Valley</span>, <span className="wiki-link">Revontuli Coast</span>, and <span className="wiki-link">New England Mountains</span>. It is also one of the first 'original' animals huntable in game, as it launched with the game all the way back in 2016.
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
                     <li><a href="#fur-male" onClick={(e)=>scrollToId(e,'fur-male')} style={{...styles.link, marginLeft:'20px'}}>4.1. Male</a></li>
                     <li><a href="#fur-female" onClick={(e)=>scrollToId(e,'fur-female')} style={{...styles.link, marginLeft:'20px'}}>4.2. Female</a></li>
                </ol>
                <li><a href="#great-ones" onClick={(e)=>scrollToId(e,'great-ones')} className="wiki-link">Great Ones</a></li>
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
                 <img src={ShotSchemeImg} alt="Shot Scheme" className="wiki-shot-scheme-img" />
               </div>
               <div className="wiki-shot-wrap">
                 <div className="wiki-shot-title">Color code</div>
                 <div className="wiki-shot-info">Red - Kills immediately</div>
                 <div className="wiki-shot-info">Blue - Kills very quickly</div>
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

            {/* GREAT ONES (Gallery) */}
            <h2 className="wiki-h2" id="great-ones">Great Ones</h2>
            <div className="wiki-gallery-grid">
              {greatOnesGallery.map((item, i) => (
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
                                Tan (33.13%)<br/>
                                Light Brown (33.13%)<br/>
                                Brown (33.13%)
                            </td>
                            <td className="wiki-td">
                                X
                            </td>
                            <td className="wiki-td">
                                Piebald (0.20%)<br/>
                                Mosaic (0.20%)
                            </td>
                            <td className="wiki-td">
                                Acromelanistic (0.07%)<br/>
                                Albino (0.07%)<br/>
                                Melanistic (0.07%)
                            </td>
                        </tr>
                        {/* Female Row */}
                        <tr>
                            <td className="wiki-td wiki-td-female">
                                Female
                            </td>
                            <td className="wiki-td">
                                Tan (33.20%)<br/>
                                Light Brown (33.20%)<br/>
                                Brown (33.20%)
                            </td>
                            <td className="wiki-td">
                                X
                            </td>
                            <td className="wiki-td">
                                Piebald (0.20%)<br/>
                            </td>
                            <td className="wiki-td">
                                Acromelanistic (0.07%)<br/>
                                Albino (0.07%)<br/>
                                Melanistic (0.07%)
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

export default Moose;