import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import DrinkingZoneIcon from '../../../assets/DrinkingZoneIcon.webp';
import class2Icon from '../../../assets/Class2Icon.webp'; // Class 2 for Coyote
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import CoyoteMain from '../../../assets/Coyote.webp';
import ShotSchemeImage from '../../../assets/Coyote_shot_scheme.webp';

// Fur Variant Images (Placeholders)
import Coyote_AlbinoMale from '../../../assets/Coyote_AlbinoMale.webp';
import Coyote_DarkGreyMale from '../../../assets/Coyote_DarkGreyMale.webp';
import Coyote_GreyBrownMale from '../../../assets/Coyote_GreyBrownMale.webp';
import Coyote_MelanisticMale from '../../../assets/Coyote_MelanisticMale.webp';
import Coyote_OrangeMale from '../../../assets/Coyote_OrangeMale.webp';
import Coyote_PiebaldMale from '../../../assets/Coyote_PiebaldMale.webp';
import Coyote_AlbinoFemale from '../../../assets/Coyote_AlbinoFemale.webp';
import Coyote_GreyBrownFemale from '../../../assets/Coyote_GreyBrownFemale.webp';
import Coyote_LightGreyFemale from '../../../assets/Coyote_LightGreyFemale.webp';
import Coyote_MelanisticFemale from '../../../assets/Coyote_MelanisticFemale.webp';
import Coyote_OrangeFemale from '../../../assets/Coyote_OrangeFemale.webp';
import Coyote_PiebaldFemale from '../../../assets/Coyote_PiebaldFemale.webp';


const Coyote = () => {

  // Smooth scroll helper for in-page TOC navigation
  const scrollToId = (e, id) => {
    if (e && e.preventDefault) e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      try { history.replaceState(null, '', `#${id}`); } catch (err) { /* ignore */ }
    }
  };

  // Lightbox / modal state for fur variants
  const [selectedVariant, setSelectedVariant] = React.useState(null);

  const openVariant = (item) => setSelectedVariant(item);
  const closeVariant = () => setSelectedVariant(null);

  React.useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') closeVariant(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  // --- DATA SOURCES ---

  // Need Zone Times
  const needZonesData = [
    {
      name: "Layton Lake District",
      schedule: [
        { time: "00:00 - 04:30", type: "Drinking", icon: DrinkingZoneIcon },
        { time: "04:00 - 07:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "07:00 - 10:30", type: "Resting", icon: RestingZoneIcon },
        { time: "10:00 - 14:30", type: "Resting", icon: RestingZoneIcon },
        { time: "14:00 - 17:30", type: "Resting", icon: RestingZoneIcon },
        { time: "17:00 - 20:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "20:00 - 00:30", type: "Feeding", icon: FeedingZoneIcon },
      ]
    },
    {
      name: "Rancho del Arroyo",
      schedule: [
        { time: "00:00 - 04:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "04:00 - 07:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "07:00 - 10:30", type: "Resting", icon: RestingZoneIcon },
        { time: "10:00 - 14:30", type: "Resting", icon: RestingZoneIcon },
        { time: "14:00 - 17:30", type: "Resting", icon: RestingZoneIcon },
        { time: "17:00 - 20:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "20:00 - 00:30", type: "Drinking", icon: DrinkingZoneIcon },
      ]
    }
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Skittish" },
    { label: "Habitat", value: "Typically live inside forests" },
    { label: "Senses", value: "Excellent vision and a very good sense of smell" },
    { label: "Social", value: "Mostly solitary animals. Sometimes found in smaller groups." },
    { label: "Active", value: "During night" },
    { label: "Recommended Equipment", value: "Class 2 Ammo, Predator \"Jackrabbit\" Caller" },
    { label: "Species", value: "Canis latrans", italic: true, isLink: true },
    { label: "Difficulty", value: "Easy" },
  ];

  // Fur Gallery Data
  const maleGallery = [
    { name: "Albino", src: Coyote_AlbinoMale },
    { name: "Dark Grey", src: Coyote_DarkGreyMale },
    { name: "Grey Brown", src: Coyote_GreyBrownMale },
    { name: "Melanistic", src: Coyote_MelanisticMale },
    { name: "Orange", src: Coyote_OrangeMale },
    { name: "Piebald", src: Coyote_PiebaldMale },
  ];

  const femaleGallery = [
    { name: "Albino", src: Coyote_AlbinoFemale },
    { name: "Grey Brown", src: Coyote_GreyBrownFemale },
    { name: "Light Grey", src: Coyote_LightGreyFemale },
    { name: "Melanistic", src: Coyote_MelanisticFemale },
    { name: "Orange", src: Coyote_OrangeFemale },
    { name: "Piebald", src: Coyote_PiebaldFemale },
  ];

  // Trivia Data
  const triviaData = [
    "The Coyote gets its name from the Aztec word for the beast Coyotl.",
    "Despite its designation as a class 2 animal, real life coyotes are large enough to take down a fully grown deer."
  ];

  return (
    <div className="wiki-page">
      <div className="wiki-inner">
        
        {/* PAGE HEADER */}
        <div className="wiki-header">
          <span>Coyote</span>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Coyote</div>
            <div className="wiki-sidebar-image">
              <img src={CoyoteMain} alt="Coyote" />
            </div>
            
            <div className="wiki-sidebar-header">General Information</div>
            
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Class</span>
              <span><img src={class2Icon} alt="Class 2" className="inline-block wiki-class-icon-sm align-middle mr-1.5" />2</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Difficulty</span>
              <span>1: Trivial — 9: Legendary</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Trophy Type</span>
              <span>Weight</span>
              <div className="wiki-trophy-grid">
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-silver">◆ Silver</span>
                  <span>38.4</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-gold">☗ Gold</span>
                  <span>48.9</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-diamond">☗ Diamond</span>
                  <span>56.8</span>
                </div>
              </div>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Weight</span>
              ? — 27kg<br/>
              <span className="wiki-sidebar-muted">? — 60lbs</span>
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Fur</span>
               <span className="wiki-fs-sm">
                  Albino, Dark-Grey, Grey-Brown, Light Grey, Melanistic, Orange, Piebald
               </span>
            </div>

            <div className="wiki-sidebar-header">Locations</div>
            <div className="wiki-sidebar-section">
               <div className="wiki-mb-4"><span className="wiki-link">Layton Lake District</span></div>
               <div className="wiki-mb-4"><span className="wiki-link">Rancho del Arroyo</span></div>
               <div className="wiki-mb-4"><span className="wiki-link">New England Mountains</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main className="wiki-main">

            {/* Quote Block */}
            <div className="wiki-quote">
              "The coyote is native to Central and North America. It is somewhat smaller than its closest relative, the grey wolf, but is still highly versatile predator that can easily adapt to environments shaped by humans. Coyotes are characterized by their predominantly light brown or grey fur and somewhat fluffy tails. Males weigh on average 8 to 21 kg (18 to 44lb), while females average 7 to 18 kg (15 to 40 lb). Coyotes have few natural predators besides humans, larger wolves, and cougars. They are generally solitary animals, but can also live in small packs. Their distinctive call is a howling sound."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-p-mb">
              The <strong>Coyote</strong> is a small sized <span className="wiki-link">class 2</span> canid that can be hunted on <span className="wiki-link">Layton Lake District</span>, <span className="wiki-link">Rancho del Arroyo</span> and <span className="wiki-link">New England Mountains</span>. It is also one of the first huntable animals in game, as it shipped with the game all the way back in 2016.
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
                <li>
                  <a href="#fur-variants" onClick={(e)=>scrollToId(e,'fur-variants')} className="wiki-link">Fur variants</a>
                  <ol className="mt-1 ml-3 pl-0 list-none text-[#9fd3ff]">
                    <li><a href="#fur-male" onClick={(e)=>scrollToId(e,'fur-male')} className="text-[#9fd3ff] no-underline">4.1 Male</a></li>
                    <li><a href="#fur-female" onClick={(e)=>scrollToId(e,'fur-female')} className="text-[#9fd3ff] no-underline">4.2 Female</a></li>
                  </ol>
                </li>
                <li><a href="#fur-rarity" onClick={(e)=>scrollToId(e,'fur-rarity')} className="wiki-link">Fur Variant Rarity</a></li>
                <li><a href="#trivia" onClick={(e)=>scrollToId(e,'trivia')} className="wiki-link">Trivia</a></li>
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
            <div className="flex gap-5 flex-wrap">
                {/* Layton Lake District */}
                <div className="flex-1 min-w-[300px]">
                  <table className="wiki-table">
                        <thead>
                            <tr><th colSpan="2" className="wiki-th wiki-th-center">Layton Lake District</th></tr>
                            <tr>
                                <th className="wiki-th wiki-th-alt">Activity</th>
                                <th className="wiki-th wiki-th-alt">Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {needZonesData[0].schedule.map((zone, i) => (
                            <tr key={i}>
                                <td className="wiki-td">
                                    <div className="wiki-flex-center">
                                        <img src={zone.icon} alt={zone.type} className="wiki-class-icon"/> 
                                        {zone.type}
                                    </div>
                                </td>
                                <td className="wiki-td">{zone.time}</td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                 {/* Rancho del Arroyo */}
                  <div className="flex-1 min-w-[300px]">
                    <table className="wiki-table">
                        <thead>
                            <tr><th colSpan="2" className="wiki-th wiki-th-center">Rancho del Arroyo</th></tr>
                            <tr>
                                <th className="wiki-th wiki-th-alt">Activity</th>
                                <th className="wiki-th wiki-th-alt">Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {needZonesData[1].schedule.map((zone, i) => (
                            <tr key={i}>
                                <td className="wiki-td">
                                    <div className="wiki-flex-center">
                                        <img src={zone.icon} alt={zone.type} className="wiki-class-icon"/> 
                                        {zone.type}
                                    </div>
                                </td>
                                <td className="wiki-td">{zone.time}</td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* SHOT SCHEME */}
            <h2 id="shot-scheme" className="wiki-h2">Shot scheme</h2>
            <div className="wiki-shot-container">
                <div className="wiki-shot-container">
                   <img src={ShotSchemeImage} alt="Shot Scheme" className="wiki-shot-scheme-img-sm" />
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
            <h2 id="fur-variants" className="wiki-h2">Fur variants</h2>

            <div className="mb-4">
              <h3 id="fur-male" className="wiki-h2 text-[1.15rem] mt-2">Male</h3>
              <div className="wiki-gallery-grid">
                {maleGallery.map((item, i) => (
                  <div key={`m-${i}`} className="flex flex-col items-center cursor-pointer" onClick={() => openVariant(item)}>
                    <div className="wiki-gallery-placeholder">
                      <img src={item.src} alt={item.name} className="wiki-img-contain" />
                    </div>
                    <span className="wiki-gallery-label">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 id="fur-female" className="wiki-h2 text-[1.15rem] mt-3">Female</h3>
              <div className="wiki-gallery-grid">
                {femaleGallery.map((item, i) => (
                  <div key={`f-${i}`} className="flex flex-col items-center cursor-pointer" onClick={() => openVariant(item)}>
                    <div className="wiki-gallery-placeholder">
                      <img src={item.src} alt={item.name} className="wiki-img-contain" />
                    </div>
                    <span className="wiki-gallery-label">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* FUR VARIANT RARITY TABLE */}
            <h2 id="fur-rarity" className="wiki-h2">Fur Variant Rarity</h2>
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
                         {/* Male Row */}
                         <tr>
                            <td className="wiki-td wiki-td-muted">
                                Male
                            </td>
                            <td className="wiki-td">
                                Orange (33.23%)<br/>
                                Grey Brown (33.23%)<br/>
                                Dark Grey (33.23%)
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
                        {/* Female Row */}
                        <tr>
                            <td className="wiki-td wiki-td-female">
                                Female
                            </td>
                            <td className="wiki-td">
                                Orange (33.23%)<br/>
                                Grey Brown (33.23%)<br/>
                                Light Grey (33.23%)
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

            <div className="wiki-mt-40">
                <AnimalsTableMini />
            </div>
            {selectedVariant && (
              <div className="wiki-modal-overlay" onClick={closeVariant}>
                <div className="wiki-modal-content" onClick={(e)=>e.stopPropagation()}>
                  <button aria-label="Close" onClick={closeVariant} className="wiki-modal-close">×</button>
                  <img src={selectedVariant.src} alt={selectedVariant.name} className="wiki-modal-img" />
                  <div className="text-center mt-2 text-[#dbe4eb]">{selectedVariant.name}</div>
                </div>
              </div>
            )}
            
          </main>
        </div>
      </div>
    </div>
  );
};

export default Coyote;