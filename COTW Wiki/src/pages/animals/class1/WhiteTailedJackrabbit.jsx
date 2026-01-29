import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import class1Icon from '../../../assets/Class1Icon.webp';
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import WhiteTailedJackrabbitMain from '../../../assets/WhiteTailedJackrabbit.webp';

// Organs and Bones Image (Replaces Shot Scheme for this animal)
import WhiteTailedJackrabbitOrgans from '../../../assets/Jackrabbit_organs.webp';

// Fur Variant Images
import WhiteTailedJackrabbit_Albino from '../../../assets/WhiteTailedJackrabbit_Albino.webp';
import WhiteTailedJackrabbit_Beige from '../../../assets/WhiteTailedJackrabbit_Beige.webp';
import WhiteTailedJackrabbit_Brown from '../../../assets/WhiteTailedJackrabbit_Brown.webp';
import WhiteTailedJackrabbit_Grey from '../../../assets/WhiteTailedJackrabbit_Grey.webp';
import WhiteTailedJackrabbit_LightBrown from '../../../assets/WhiteTailedJackrabbit_LightBrown.webp';


const WhiteTailedJackrabbit = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  // Source: Екранна снимка 2026-01-16 184328.png
  const needZonesData = [
    {
      name: "Layton Lake District", // Inferred from Locations list
      schedule: [
        { time: "00:00 - 03:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "03:00 - 06:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "06:00 - 10:30", type: "Resting", icon: RestingZoneIcon },
        { time: "10:00 - 14:30", type: "Resting", icon: RestingZoneIcon },
        { time: "14:00 - 18:30", type: "Resting", icon: RestingZoneIcon },
        { time: "18:00 - 21:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "21:00 - 00:30", type: "Feeding", icon: FeedingZoneIcon },
      ]
    }
  ];

  // Features Table
  // Source: Екранна снимка 2026-01-16 184321.png
  const features = [
    { label: "Behavior", value: "Docile and somewhat skittish" },
    { label: "Habitat", value: "Deciduous forests and open fields" },
    { label: "Senses", value: "Very good hearing and vision" },
    { label: "Social", value: "Typically solitary. During mating season, groups of males can be found with females in medium-sized groups." },
    { label: "Active", value: "During dawn, late afternoon and dusk" },
    { label: "Recommended Equipment", value: "Class 1 Ammo" },
    { label: "Species", value: "Lepus townsendii", italic: true, isLink: true },
    { label: "Difficulty", value: "Easy" },
  ];

  // Fur Gallery Data
  // Source: Екранна снимка 2026-01-16 184343.jpg
  const furGallery = [
    { name: "Albino", src: WhiteTailedJackrabbit_Albino },
    { name: "Beige", src: WhiteTailedJackrabbit_Beige },
    { name: "Brown", src: WhiteTailedJackrabbit_Brown },
    { name: "Grey", src: WhiteTailedJackrabbit_Grey },
    { name: "Light Brown", src: WhiteTailedJackrabbit_LightBrown },
  ];

  // Smooth scroll helper for in-page TOC links
  const scrollToId = (id) => (e) => {
    if (e && e.preventDefault) e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (typeof window !== 'undefined' && window.history && window.history.replaceState) {
      window.history.replaceState(null, '', `#${id}`);
    }
  };

  // References List
  // Source: Екранна снимка 2026-01-16 184405.jpg
  const references = [
    "https://www.nationalgeographic.com/animals/mammals/facts/black-tailed-jackrabbit",
    "https://www.nationalgeographic.com/animals/mammals/facts/black-tailed-jackrabbit"
  ];

  return (
    <div className="wiki-page">
      <div className="wiki-inner">
        
        {/* PAGE HEADER */}
        <div className="wiki-header">
          <span>White-tailed Jackrabbit</span>
          <div className="wiki-edit-actions">
          </div>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">White-tailed Jackrabbit</div>
            <div className="wiki-sidebar-image">
              <img src={WhiteTailedJackrabbitMain} alt="White-tailed Jackrabbit" />
            </div>
            
            <div className="wiki-sidebar-header">General Information</div>
            
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Class</span>
              <span><img src={class1Icon} alt="Class 1" className="wiki-class-icon"/>1</span>
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
                  <span>2.8</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-gold">☗ Gold</span>
                  <span>4.8</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-diamond">☗ Diamond</span>
                  <span>6.3</span>
                </div>
              </div>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Weight</span>
              ? — 6.8kg<br/>
              ? — 15lbs
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Fur</span>
               <span className="wiki-fs-sm">
                  Albino, Beige, Brown, Grey, Light Brown
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
              "The white-tailed jackrabbit is the largest species called "jackrabbit" and is common throughout North America. Though they prefer open grasslands and fields, white-tailed jackrabbits are also found in alpine climate and forested areas. Jackrabbits are typically solitary, but during mating season, groups of males compete for the attention of a female. Due to the stresses of these courting competitions, adult males generally weigh less than females during mating season. They can sprint up to speeds of 55 km (34 miles) per hour when spooked and leap up to 5 m (16 ft)."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-p-mb">
              The <strong>White-tailed Jackrabbit</strong> is a small <span className="wiki-link">class 1</span> animal. It can be hunted in the <span className="wiki-link">Layton Lake District</span>. It was the first lagomorph to be introduced to the game.
            </p>
            <p className="wiki-p-mb">
              The Jackrabbit was released as a free <span className="wiki-link">DLC</span>.
            </p>

            {/* Table of Contents (smooth-scroll links) */}
            <div className="wiki-toc">
              <div className="wiki-toc-title">
                🔢 Contents <span className="wiki-toc-toggle">[hide]</span>
              </div>
              <ol className="wiki-toc">
                <li><a href="#features" className="wiki-link" onClick={scrollToId('features')}>Feature</a></li>
                <li><a href="#need-zones" className="wiki-link" onClick={scrollToId('need-zones')}>Need Zone Times</a></li>
                <li><a href="#organs" className="wiki-link" onClick={scrollToId('organs')}>Organs and bones</a></li>
                <li><a href="#fur-variants" className="wiki-link" onClick={scrollToId('fur-variants')}>Fur Variants</a></li>
                <li><a href="#variant-rarity" className="wiki-link" onClick={scrollToId('variant-rarity')}>Fur Variant Rarity</a></li>
                <li><a href="#trivia" className="wiki-link" onClick={scrollToId('trivia')}>Trivia</a></li>
                <li><a href="#references" className="wiki-link" onClick={scrollToId('references')}>References</a></li>
              </ol>
            </div>

            {/* FEATURES */}
            <h2 id="features" className="wiki-h2">Feature</h2>
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
                            <td className="wiki-td"><img src={zone.icon} alt={zone.type} className="wiki-class-icon"/> {zone.type}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* ORGANS AND BONES */}
            <h2 id="organs" className="wiki-h2">Organs and bones</h2>
            <div className="wiki-shot-container">
               <div className="wiki-shot-image">
                  <img src={WhiteTailedJackrabbitOrgans} alt="Organs Diagram" style={{width: '100%'}} />
               </div>
               <div className="wiki-shot-info">
                  <div>1. Head</div>
                  <div>2. Neck</div>
                  <div>3. Body</div>
                  <div>4. Ears</div>
                  <div>5. Foreleg</div>
                  <div>6. Hind leg</div>
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
            <h2 id="variant-rarity" className="wiki-h2">Fur Variant Rarity</h2>
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
                            Light Brown (24.97%)<br/>
                            Grey (24.97%)<br/>
                            Beige (24.97%)<br/>
                            Brown (24.97%)
                        </td>
                        <td className="wiki-td">X</td>
                        <td className="wiki-td">
                            Albino (0.10%)
                        </td>
                        <td className="wiki-td">X</td>
                    </tr>
                </tbody>
            </table>

            {/* TRIVIA */}
            <h2 id="trivia" className="wiki-h2">Trivia</h2>
            <ul className="wiki-ul">
              <li className="wiki-li">In French, it is called "Lièvre de Townsend" after the one who described the species.</li>
              <li className="wiki-li">The term 'Jackrabbit' is a conjugation of "Jackass Rabbit" named so after their long donkey-like ears - <sup>[1]</sup></li>
              <li className="wiki-li">Despite its name, Jackrabbits are actually hares not rabbits. Hares are distinguished from rabbits by their large size and long ears.<sup>[2]</sup></li>
              <li className="wiki-li">The <strong>White-tailed Jackrabbit</strong> is one of 7 huntable lagomorphs in game. The others include the <span className="wiki-link">European Rabbit</span>, the <span className="wiki-link">Scrub Hare</span>, the <span className="wiki-link">European Hare</span>, the <span className="wiki-link">Antelope Jackrabbit</span>, the <span className="wiki-link">Eastern Cottontail Rabbit</span>, and the <span className="wiki-link">Mountain Hare</span>.</li>
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
            <p style={{fontSize: '0.8rem', fontStyle: 'italic', marginTop:'10px', color: '#888'}}>
               The references are of the "Black Tail Jackrabbit" but still apply to this lagomorph
            </p>

            <AnimalsTableMini />
          </main>
        </div>
      </div>
    </div>
  );
};

export default WhiteTailedJackrabbit;