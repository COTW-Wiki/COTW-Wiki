import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import DrinkingZoneIcon from '../../../assets/DrinkingZoneIcon.webp';
import class6Icon from '../../../assets/Class6Icon.webp'; // Class 6 for Nilgai
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import NilgaiMain from '../../../assets/Nilgai.webp';
import ShotSchemeImg from '../../../assets/Nilgai_shot_scheme.webp';

// Fur Variant Images - Male
// (Assumed file names based on variants shown)
import Nilgai_BlueMaleRightSide from '../../../assets/Nilgai_BlueMaleRightSide.webp';
import Nilgai_DarkBrownMaleRightSide from '../../../assets/Nilgai_DarkBrownMaleRightSide.webp';
import Nilgai_PiebaldVariation1MaleRightSide from '../../../assets/Nilgai_PiebaldVariation1MaleRightSide.webp';
import Nilgai_PiebaldVariation1MaleLeftSide from '../../../assets/Nilgai_PiebaldVariation1MaleLeftSide.webp';
import Nilgai_PiebaldVariation2MaleRightSide from '../../../assets/Nilgai_PiebaldVariation2MaleRightSide.webp';
import Nilgai_PiebaldVariation2MaleLeftSide from '../../../assets/Nilgai_PiebaldVariation2MaleLeftSide.webp';

// Fur Variant Images - Female
import Nilgai_BrownFemaleRightSide from '../../../assets/Nilgai_BrownFemaleRightSide.webp';
import Nilgai_LightBrownFemaleRightSide from '../../../assets/Nilgai_LightBrownFemaleRightSide.webp';
import Nilgai_PiebaldVariation1FemaleRightSide from '../../../assets/Nilgai_PiebaldVariation1FemaleRightSide.webp';
import Nilgai_PiebaldVariation1FemaleLeftSide from '../../../assets/Nilgai_PiebaldVariation1FemaleLeftSide.webp';
import Nilgai_PiebaldVariation2FemaleRightSide from '../../../assets/Nilgai_PiebaldVariation2FemaleRightSide.webp';
import Nilgai_PiebaldVariation2FemaleLeftSide from '../../../assets/Nilgai_PiebaldVariation2FemaleLeftSide.webp';


const Nilgai = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  const needZonesData = [
    {
      name: "Sundarpatan",
      schedule: [
        { time: "00:00 - 04:00", type: "Resting", icon: RestingZoneIcon },
        { time: "04:00 - 08:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "08:00 - 12:00", type: "Drinking", icon: DrinkingZoneIcon },
        { time: "12:00 - 16:00", type: "Resting", icon: RestingZoneIcon },
        { time: "16:00 - 20:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "20:00 - 00:00", type: "Resting", icon: RestingZoneIcon },
      ]
    }
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Found in groups of 4-8 mainly consisting of either males or females" },
    { label: "Habitat", value: "Low bush, farmland and grasslands" },
    { label: "Senses", value: "Decent sight and hearing, not as acute sense of smell" },
    { label: "Social", value: "Social herd animal" },
    { label: "Active", value: "Active during daytime" },
    { label: "Recommended Equipment", value: "Class 6 Ammo, Buck \"Snort Wheeze\" Caller" },
    { label: "Species", value: "Boselaphus tragocamelus", italic: true, isLink: true },
    { label: "Difficulty", value: "Average" },
  ];

  // Fur Gallery Data - Male
  const maleFurGallery = [
    { name: "Blue", src: Nilgai_BlueMaleRightSide },
    { name: "Dark Brown", src: Nilgai_DarkBrownMaleRightSide },
    { name: "Piebald Variation 1 (Right)", src: Nilgai_PiebaldVariation1MaleRightSide },
    { name: "Piebald Variation 1 (Left)", src: Nilgai_PiebaldVariation1MaleLeftSide },
    { name: "Piebald Variation 2 (Right)", src: Nilgai_PiebaldVariation2MaleRightSide },
    { name: "Piebald Variation 2 (Left)", src: Nilgai_PiebaldVariation2MaleLeftSide },
  ];

  // Fur Gallery Data - Female
  const femaleFurGallery = [
    { name: "Brown", src: Nilgai_BrownFemaleRightSide },
    { name: "Light Brown", src: Nilgai_LightBrownFemaleRightSide },
    { name: "Piebald Variation 1 (Right)", src: Nilgai_PiebaldVariation1FemaleRightSide },
    { name: "Piebald Variation 1 (Left)", src: Nilgai_PiebaldVariation1FemaleLeftSide },
    { name: "Piebald Variation 2 (Right)", src: Nilgai_PiebaldVariation2FemaleRightSide },
    { name: "Piebald Variation 2 (Left)", src: Nilgai_PiebaldVariation2FemaleLeftSide },
  ];

  // Trivia Data
  const triviaData = [
    "The Nilgai's genus name Boselaphus means Cow-Deer in it's respective Latin and Greek. It's species name tragocamelus means Billy Goat-Camel. The Nilgai is the sole surviving member of the Genus Boselaphus.",
    "The name Nilgai means blue cow. However it is unclear why the Hindu have called it a cow. Regardless, it's this Holy Status (cows are considered sacred in Hinduism) that is credited with it's abundance in the Indian subcontinent. For example, in the Indian state of Gujarat, where they are protected, there are an estimated 250,000 individuals living in that region alone. There is even a small feral population of about 15,000 individuals roaming the wilderness of Texas.",
    "Apperently, the Nilgai are prone to having twins. An estimated 50% to 80% of all births result in twins."
  ];

  // References Data
  const referencesData = [
    "Nilgai Need Zones, Sundarpatan",
    "https://a-z-animals.com/animals/nilgai/",
    "https://a-z-animals.com/animals/nilgai/", // Duplicate in screenshot, kept for accuracy
    "https://www.britannica.com/animal/nilgai",
    "https://myewa.org/three-things-didnt-know-nilgai/",
    "https://www.knowsleysafariexperience.co.uk/our-safari/animals/nilgai"
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
          <span>Nilgai</span>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Nilgai</div>
            <div className="wiki-sidebar-image">
              <img src={NilgaiMain} alt="Nilgai" />
            </div>
            
            <div className="wiki-sidebar-header">General Information</div>
            
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Class</span>
              <span><img src={class6Icon} alt="Class 6" className="inline-block wiki-class-icon-sm align-middle mr-1.5"/>6</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Difficulty</span>
              <span>1: Trivial — 5: Medium</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Trophy Type</span>
              <span>Horns</span>
              <div className="wiki-trophy-grid">
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-silver">◆ Silver</span>
                  <span>69.17</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-gold">☗ Gold</span>
                  <span>83.87</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-diamond">☗ Diamond</span>
                  <span>94.89</span>
                </div>
              </div>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Weight</span>
              0kg — 308kg<br/>
              <span className="wiki-sidebar-muted">0lbs — 679lbs</span>
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Fur</span>
               <span className="wiki-fs-sm">
                 Blue, Brown, Dark Brown, Light Brown, Piebald
               </span>
            </div>

            <div className="wiki-sidebar-header">Locations</div>
            <div className="wiki-sidebar-section">
               <div className="wiki-mb-4"><span className="wiki-link">Sundarpatan</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main className="wiki-main">

            {/* Quote Block */}
            <div className="wiki-quote">
              "The Nilgai (literally meaning "blue cow" in Nepali) has slim legs, a sloped back and is adorned with a mane. It stands as the largest antelope in Asia. Bulls can stretch between 1 and 1.5 meters tall at the shoulder, bearing a weight range of 109 to 308 kg. On the other hand, cows, though similar in height, typically weigh less, ranging between 100 and 213 kg. Manifesting significant sexual dimorphism, their fur coloration differs significantly. The bulls have a blue-tinged fur, while the cows have a lighter, brownish coat. In spite of this disparity, all Nilgai possess a white neck patch, a white rump, and white inner hind legs, coupled with distinctive black-and-white "socks"."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-p-mb">
              The <strong>Nilgai</strong> is a <span className="wiki-link">(class 6)</span> antelope species and can be hunted on <span className="wiki-link">Sundarpatan</span>.
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
                        <tr><th colSpan="2" className="wiki-th wiki-th-center">Sundarpatan</th></tr>
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
            
            <h3 className="wiki-h3" id="fur-male">4.1. Male</h3>
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

            <h3 className="wiki-h3" id="fur-female">4.2. Female</h3>
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
                        {/* Male Row */}
                        <tr>
                            <td className="wiki-td wiki-td-muted">
                                Male
                            </td>
                            <td className="wiki-td">
                                Blue (74.80%)<br/>
                            </td>
                            <td className="wiki-td">
                                Dark Brown (25.00%)
                            </td>
                            <td className="wiki-td">
                                Piebald Variation 1 (0.10%)<br/>
                                Piebald Variation 2 (0.10%)
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
                                Brown (74.80%)
                            </td>
                            <td className="wiki-td">
                                Light Brown (25.00%)
                            </td>
                            <td className="wiki-td">
                                Piebald Variation 1 (0.10%)<br/>
                                Piebald Variation 2 (0.10%)
                            </td>
                            <td className="wiki-td">
                                X
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

export default Nilgai;