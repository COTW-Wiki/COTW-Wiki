import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import class1Icon from '../../../assets/Class1Icon.webp';
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import EuropeanRabbitMain from '../../../assets/EuropeanRabbit.webp';

// Shot Scheme
import EuropeanRabbitShot from '../../../assets/European_Rabbit_shot_scheme.webp';

// Fur Variant Images
import EuropeanRabbit_Albino from '../../../assets/EuropeanRabbit_Albino.webp';
import EuropeanRabbit_Brown from '../../../assets/EuropeanRabbit_Brown.webp';
import EuropeanRabbit_DarkBrown from '../../../assets/EuropeanRabbit_DarkBrown.webp';
import EuropeanRabbit_Leucistic from '../../../assets/EuropeanRabbit_Leucistic.webp';
import EuropeanRabbit_LightBrown from '../../../assets/EuropeanRabbit_LightBrown.webp';
import EuropeanRabbit_LightGrey from '../../../assets/EuropeanRabbit_LightGrey.webp';
import EuropeanRabbit_Melanistic from '../../../assets/EuropeanRabbit_Melanistic.webp';
import EuropeanRabbit_Tan from '../../../assets/EuropeanRabbit_Tan.webp';


const EuropeanRabbit = () => {

  // --- DATA SOURCES ---

  // Smooth-scroll helper for TOC links
  const scrollToId = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (window && history && history.replaceState) history.replaceState(null, '', `#${id}`);
  };

  // Need Zone Times
  // Source: Екранна снимка 2026-01-16 163803.jpg
  // Note: The source explicitly states they have no traditional need zones, but provides a schedule.
  const needZonesData = [
    {
      name: "Hirschfelden",
      schedule: [
        { time: "00:00 - 05:00", type: "Resting", icon: RestingZoneIcon },
        { time: "05:00 - 09:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "09:00 - 12:00", type: "Resting", icon: RestingZoneIcon },
        { time: "12:00 - 16:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "16:00 - 18:00", type: "Resting", icon: RestingZoneIcon },
        { time: "18:00 - 22:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "22:00 - 00:00", type: "Resting", icon: RestingZoneIcon },
      ]
    }
  ];

  // Features Table
  // Source: Екранна снимка 2026-01-16 163739.png
  const features = [
    { label: "Behavior", value: "Docile, constantly on the lookout for predators" },
    { label: "Habitat", value: "Short grassland" },
    { label: "Senses", value: "Good hearing and vision, excellent sense of smell" },
    { label: "Social", value: "Gregarious, lives in small groups" },
    { label: "Active", value: "During dawn, afternoon, and dusk" },
    { label: "Recommended Equipment", value: "Class 1 Ammo" },
    { label: "Species", value: "Oryctolagus cuniculus", italic: true, isLink: true },
    { label: "Difficulty", value: "Easy" },
  ];

  // Fur Gallery Data
  // Source: Екранна снимка 2026-01-16 163816.jpg
  const furGallery = [
    { name: "Albino", src: EuropeanRabbit_Albino },
    { name: "Brown", src: EuropeanRabbit_Brown },
    { name: "Dark Brown", src: EuropeanRabbit_DarkBrown },
    { name: "Leucistic", src: EuropeanRabbit_Leucistic },
    { name: "Light Brown", src: EuropeanRabbit_LightBrown },
    { name: "Light Grey", src: EuropeanRabbit_LightGrey },
    { name: "Melanistic", src: EuropeanRabbit_Melanistic },
    { name: "Tan", src: EuropeanRabbit_Tan },
  ];

  // References List
  // Source: Екранна снимка 2026-01-16 163829.jpg
  const references = [
    "https://animalia.bio/european-rabbit",
    "https://www.britannica.com/animal/Old-World-rabbit",
    "https://www.iucnredlist.org/species/41291/170619657"
  ];

  return (
    <div className="wiki-page">
      <div className="wiki-inner">
        
        {/* PAGE HEADER */}
        <div className="wiki-header">
          <span>European Rabbit</span>
          <div className="wiki-edit-actions">
          </div>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">European Rabbit</div>
            <div className="wiki-sidebar-image">
              <img src={EuropeanRabbitMain} alt="European Rabbit" />
            </div>
            
            <div className="wiki-sidebar-header">General Information</div>
            
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Class</span>
              <span><img src={class1Icon} alt="Class 1" className="inline-block wiki-class-icon-sm align-middle mr-1.5"/>1</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Difficulty</span>
              <span>1: Trivial — 3: Very Easy</span>
            </div>

            {/* Trophy Type */}
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Trophy Type</span>
              <span>Weight</span>
              <div className="wiki-trophy-grid">
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-silver">◆ Silver</span>
                  <span>1.24</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-gold">☗ Gold</span>
                  <span>1.92</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-diamond">☗ Diamond</span>
                  <span>2.42</span>
                </div>
              </div>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Weight</span>
              900g — 2.6kg<br/>
              2lbs — 6lbs
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Fur</span>
               <span className="wiki-fs-sm">
                  Albino, Brown, Dark-Brown, Leucistic, Light Brown, Light Grey, Melanistic, Tan
               </span>
            </div>

            <div className="wiki-sidebar-header">Locations</div>
            <div className="wiki-sidebar-section">
               <div className="wiki-mb-4"><span className="wiki-link">Hirschfelden Hunting Reserve</span></div>
               <div className="wiki-mb-4"><span className="wiki-link">Te Awaroa National Park</span></div>
               <div className="wiki-mb-4"><span className="wiki-link">Salzwiesen Park</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main className="wiki-main">

            {/* Quote Block */}
            <div className="wiki-quote">
              "The European rabbit is native to southwestern Europe and to northwest Africa. Known as an invasive species, it has been introduced to countries on almost all continents, often with devastating effects on local biodiversity. European rabbits are social and territorial animals, who prefer to live in large and complex burrow systems (warrens). A typical colony consists of 10 to 15 adults. Its ideal habitat consists of short grasslands with secure refuge near feeding areas. Well-known for their reproductive capacity, they are capable of reproducing year-round. Gestation is about 30 days, and the average litter contains 5 young. Females may have several litters per year."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-p-mb">
              The <strong>European Rabbit</strong> is a <span className="wiki-link">class 1</span> rabbit species that can be hunted on <span className="wiki-link">Hirschfelden Hunting Reserve</span>, <span className="wiki-link">Te Awaroa National Park</span>, and <span className="wiki-link">Salzwiesen Park</span>. It was initially released on Hirschfelden Hunting Reserve as free DLC, and is currently the only animal in game that uses burrows and no need zones.
            </p>

            {/* Table of Contents Placeholder */}
            <div className="wiki-toc">
              <div className="wiki-toc-title">
                🔢 Contents <span className="wiki-toc-toggle">[hide]</span>
              </div>
              <ol className="wiki-toc">
                <li><a href="#features" onClick={scrollToId('features')} className="wiki-link">Features</a></li>
                <li><a href="#tips" onClick={scrollToId('tips')} className="wiki-link">Tips</a></li>
                <li><a href="#need-zone-times" onClick={scrollToId('need-zone-times')} className="wiki-link">Need Zone Times</a></li>
                <li><a href="#shot-scheme" onClick={scrollToId('shot-scheme')} className="wiki-link">Shot scheme</a></li>
                <li><a href="#fur-variants" onClick={scrollToId('fur-variants')} className="wiki-link">Fur Variants</a></li>
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

            {/* TIPS */}
            <h2 id="tips" className="wiki-h2">Tips</h2>
            <p className="wiki-mb-10">
               European Rabbits are the only animal in game that lack need zones; so you have to find their burrows if you want to hunt them. Even when you find a burrow, these burrows won't be marked on your map. You either have to commit these locations to memory, or make a physical map with their locations marked.
            </p>
            <p className="wiki-mb-10">
               An easier way to find them, especially on multiplayer, is to use a <span className="wiki-link">German Shorthaired Pointer</span> to point them out. But if you don't have the DLC, run around open fields during their active periods until you hear a warning "Thump"; their burrows will be located close to open fields.
            </p>
            <p className="wiki-mb-10">
               They have a very small spook radius; so don't worry about scaring them, of course still be cautious when you approach. <span className="wiki-link">Te Awaroa National Park</span> will be the most open map for hunting these animals. But if you're hunting on <span className="wiki-link">Hirschfelden Hunting Reserve</span>, you can find ALL European Rabbits on the RIGHT SIDE of the map, and none on the left side.
            </p>
            
            {/* NEED ZONE TIMES */}
            <h2 id="need-zone-times" className="wiki-h2">Need Zone Times</h2>
            <p className="wiki-mb-15">
               Currently, the European Rabbit has no Need Zones. Only its burrows can be found on the map. At resting time, it is hidden inside the burrow and not reachable while it will roam around it's burrow on feeding time.
            </p>
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
                            <td className="wiki-td"><img src={zone.icon} alt={zone.type} className="wiki-class-icon"/> {zone.type}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* SHOT SCHEME */}
            <h2 id="shot-scheme" className="wiki-h2">Shot scheme</h2>
            <div className="wiki-shot-container">
               <div className="wiki-shot-image">
                  <img src={EuropeanRabbitShot} alt="Shot Scheme" />
               </div>
               <div className="wiki-shot-info">
                  <strong>Color code</strong>
                  <div className="mt-5">
                     No Color - Every hit will kill the animal
                  </div>
               </div>
            </div>

            {/* FUR VARIANTS (Gallery) */}
            <h2 id="fur-variants" className="wiki-h2">Fur Variants</h2>
            <div className="wiki-gallery-grid">
              {furGallery.map((item, i) => (
                <div key={i} className="wiki-gallery-item">
                  <div className="wiki-gallery-placeholder">
                    <img src={item.src} alt={item.name} />
                  </div>
                  <span className="wiki-gallery-label">{item.name}</span>
                </div>
              ))}
            </div>

            {/* FUR VARIANT RARITY TABLE */}
            <h2 id="fur-variant-rarity" className="wiki-h2">Fur Variant Rarity</h2>
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
                            Tan (37.35%)<br/>
                            Dark Brown (37.35%)<br/>
                            Light Brown (12.50%)<br/>
                            Brown (12.50%)
                        </td>
                        <td className="wiki-td">X</td>
                        <td className="wiki-td">
                            Melanistic (0.10%)<br/>
                            Light Grey (0.10%)
                        </td>
                        <td className="wiki-td">
                            Leucistic (0.05%)<br/>
                            Albino (0.05%)
                        </td>
                    </tr>
                </tbody>
            </table>

            {/* TRIVIA */}
            <h2 id="trivia" className="wiki-h2">Trivia</h2>
            <ul className="wiki-ul">
              <li className="wiki-li">European Rabbits breeding culture is weirdly hierarchical. The older, stronger, Bucks are typically polygamous, while weaker males are almost exclusively Monogamous. When a Doe gives birth, their offspring are called Kittens.<sup>[1]</sup></li>
              <li className="wiki-li">The European Rabbit is the direct ancestor of all domestic bunny breeds.<sup>[2]</sup></li>
              <li className="wiki-li">Despite their propensity to have children, and their universal status as an invasive species, they are considered endangered in their native range.<sup>[3]</sup></li>
              <li className="wiki-li">It was remodeled with the Update on December 03 2024.</li>
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

            <AnimalsTableMini />
          </main>
        </div>
      </div>
    </div>
  );
};

export default EuropeanRabbit;