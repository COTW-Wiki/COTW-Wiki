import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import DrinkingZoneIcon from '../../../assets/DrinkingZoneIcon.webp';
import class3Icon from '../../../assets/Class3Icon.webp'; // Class 3 for Hog Deer
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import HogDeerMain from '../../../assets/HogDeer.webp';
import ShotSchemeImage from '../../../assets/Hog_Deer_shot_scheme.webp';

// Fur Variant Images (Placeholders - based on screenshots)
import HogDeer_BrownMale from '../../../assets/HogDeer_BrownMale.webp';
import HogDeer_DarkBrownMale from '../../../assets/HogDeer_DarkBrownMale.webp';
import HogDeer_DarkSpottedMale from '../../../assets/HogDeer_DarkSpottedMale.webp';
import HogDeer_LeucisticMale from '../../../assets/HogDeer_LeucisticMale.webp';
import HogDeer_PiebaldMale from '../../../assets/HogDeer_PiebaldMale.webp';
import HogDeer_SpottedMale from '../../../assets/HogDeer_SpottedMale.webp';

import HogDeer_BrownFemale from '../../../assets/HogDeer_BrownFemale.webp';
import HogDeer_DarkSpottedFemale from '../../../assets/HogDeer_DarkSpottedFemale.webp';
import HogDeer_LeucisticFemale from '../../../assets/HogDeer_LeucisticFemale.webp';
import HogDeer_PiebaldFemale from '../../../assets/HogDeer_PiebaldFemale.webp';
import HogDeer_SpottedFemale from '../../../assets/HogDeer_SpottedFemale.webp';


const HogDeer = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  const needZonesData = [
    {
      name: "Emerald Coast",
      schedule: [
        { time: "00:00 - 04:00", type: "Resting", icon: RestingZoneIcon },
        { time: "04:00 - 07:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "07:00 - 10:00", type: "Resting", icon: RestingZoneIcon },
        { time: "10:00 - 13:00", type: "Resting", icon: RestingZoneIcon },
        { time: "13:00 - 17:00", type: "Drinking", icon: DrinkingZoneIcon },
        { time: "17:00 - 21:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "21:00 - 00:00", type: "Resting", icon: RestingZoneIcon },
      ]
    }
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Elusive and cautious." },
    { label: "Habitat", value: "Next to woodlands, near coastal heaths." },
    { label: "Senses", value: "Excellent smell, good hearing, decent vision." },
    { label: "Social", value: "Solitary or in pairs. Can be found in groups when feeding." },
    { label: "Active", value: "During dusk and dawn" },
    { label: "Recommended Equipment", value: "Class 3 Ammo, Sambar Caller" },
    { label: "Species", value: "Axis Porcinus", italic: true, isLink: true },
    { label: "Difficulty", value: "Average" },
  ];

  // Fur Gallery Data
  const maleGallery = [
    { name: "Brown", src: HogDeer_BrownMale },
    { name: "Dark Brown", src: HogDeer_DarkBrownMale },
    { name: "Dark Spotted", src: HogDeer_DarkSpottedMale },
    { name: "Leucistic", src: HogDeer_LeucisticMale },
    { name: "Piebald", src: HogDeer_PiebaldMale },
    { name: "Spotted", src: HogDeer_SpottedMale },
  ];

  const femaleGallery = [
    { name: "Brown", src: HogDeer_BrownFemale },
    { name: "Dark Spotted", src: HogDeer_DarkSpottedFemale },
    { name: "Leucistic", src: HogDeer_LeucisticFemale },
    { name: "Piebald", src: HogDeer_PiebaldFemale },
    { name: "Spotted", src: HogDeer_SpottedFemale },
  ];

  // Trivia Data
  const triviaData = [
    "The Hog Deer gets its name because of how similar it is to Hogs. For example when startled, the Hog Deer flees by hanging its head low and barreling through vegetation, instead of doing the more \"Deer-like\" behavior of keeping the head high and jumping over vegetation. Other distinct fleeing behavior includes their propensity to \"Scatter\" in different directions instead of fleeing in a herd in one direction, again like a Hog.",
    "Even it's body plan is very \"Hog-like\". Their hind quarters are longer than their front quarters, raising their butts into the air and giving them a \"hunched\" look. This type of hunched-back is only shared by a handful of other deer species, like the Northern Red Muntjac for example."
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
          <span>Hog Deer</span>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Hog Deer</div>
            <div className="wiki-sidebar-image">
              <img src={HogDeerMain} alt="Hog Deer" />
            </div>
            
            <div className="wiki-sidebar-header">General Information</div>
            
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Class</span>
              <span><img src={class3Icon} alt="Class 3" className="inline-block wiki-class-icon-sm align-middle mr-1.5" />3</span>
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
                  <span>49.45</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-gold">☗ Gold</span>
                  <span>83.30</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-diamond">☗ Diamond</span>
                  <span>108.68</span>
                </div>
              </div>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Weight</span>
              25kg — 50kg<br/>
              <span className="wiki-sidebar-muted">55lbs — 110lbs</span>
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Fur</span>
               <span className="wiki-fs-sm">
                 Spotted, Dark Spotted, Dark Brown, Piebald, Leucistic, Brown
               </span>
            </div>

            <div className="wiki-sidebar-header">Locations</div>
            <div className="wiki-sidebar-section">
               <div className="wiki-mb-4"><span className="wiki-link">Emerald Coast</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main className="wiki-main">

            {/* Quote Block */}
            <div className="wiki-quote">
              "Axis porcinus, also commonly known as Hog Deer, originates from Southeast Asia. They are one of the smallest deer species, which means that males grow to a size of 0.70 m at the shoulders and reach a weight of around 50.00 kg. Hog deer trophies can reach a length of 0.41 m and a hunter can expect and average trophy of 0.23 m - 0.31 m in length. Being smaller in stature than most other deer could make the Hog Deer harder to spot in nature. Often found in smaller groups of two to ten, they can be seen grazing near calmer woodland areas, and near coastal heaths, with them being most active during the early and late hours of the day."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-p-mb">
              The <strong>Hog Deer</strong> (<em>Axis porcinus</em>) is a <span className="wiki-link">class 3</span> deer species that can be hunted on <span className="wiki-link">Emerald Coast</span>. It is one of TWO deer species under the genus "Axis" in game. The other is the <span className="wiki-link">Axis Deer</span>.
            </p>

            {/* Table of Contents */}
            <div className="wiki-toc">
              <div className="wiki-toc-title">
                🔢 Contents <span className="wiki-toc-toggle">[hide]</span>
              </div>
              <ol className="wiki-toc">
                <li><a href="#features" onClick={scrollToId('features')} className="wiki-link">Features</a></li>
                <li><a href="#need-zone-times" onClick={scrollToId('need-zone-times')} className="wiki-link">Need Zone Times</a></li>
                <li><a href="#shot-scheme" onClick={scrollToId('shot-scheme')} className="wiki-link">Shot scheme</a></li>
                <li>
                  <a href="#fur-variants" onClick={scrollToId('fur-variants')} className="wiki-link">Fur Variants</a>
                  <ol style={{margin:'6px 0 0 0', paddingLeft: '0', color: '#6fb2e6', listStyleType: 'none'}}>
                    <li><a href="#male-variants" onClick={scrollToId('male-variants')} className="wiki-link">4. 1 Male</a></li>
                    <li><a href="#female-variants" onClick={scrollToId('female-variants')} className="wiki-link">4. 2 Female</a></li>
                  </ol>
                </li>
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
            <h2 id="need-zone-times" className="wiki-h2">Need Zone Times</h2>
            <div className="wiki-inline-block">
                <table className="wiki-table wiki-table-fixed">
                    <thead>
                        <tr><th colSpan="2" className="wiki-th wiki-th-center">Emerald Coast</th></tr>
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
            <h2 id="fur-variants" className="wiki-h2">Fur Variants</h2>

            <h3 id="male-variants" className="wiki-h3 text-[1.2rem] mt-2 border-b-0">Male</h3>
            <div className="wiki-gallery-grid">
              {maleGallery.map((item, i) => (
                <div key={"m-"+i} className="wiki-gallery-item">
                  <div className="wiki-gallery-placeholder">
                    <img src={item.src} alt={item.name} className="wiki-img-contain" />
                  </div>
                  <span className="wiki-gallery-label">{item.name}</span>
                </div>
              ))}
            </div>

            <h3 id="female-variants" className="wiki-h3 text-[1.2rem] mt-2 border-b-0">Female</h3>
            <div className="wiki-gallery-grid">
              {femaleGallery.map((item, i) => (
                <div key={"f-"+i} className="wiki-gallery-item">
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
                                Male
                            </td>
                            <td className="wiki-td">
                                Brown (79.68%)
                            </td>
                            <td className="wiki-td">
                                Dark Brown (6.67%)<br/>
                                Dark Spotted (6.67%)<br/>
                                Spotted (6.67%)
                            </td>
                            <td className="wiki-td">
                                Piebald (0.21%)<br/>
                                Leucistic (0.11%)
                            </td>
                            <td className="wiki-td">X</td>
                        </tr>
                        <tr>
                            <td className="wiki-td wiki-td-female">
                                Female
                            </td>
                            <td className="wiki-td">
                                Brown (85.37%)
                            </td>
                            <td className="wiki-td">
                                Dark Spotted (7.14%)<br/>
                                Spotted (7.14%)
                            </td>
                            <td className="wiki-td">
                                Piebald (0.23%)<br/>
                                Leucistic (0.11%)
                            </td>
                            <td className="wiki-td">X</td>
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
            <ul className="wiki-ul wiki-ul-disc">
              <li style={{marginBottom: '8px'}}>Hog Deer Need Zones, Emerald Coast</li>
              <li style={{marginBottom: '8px'}}><a href="https://www.feralscan.org.au/deerscan/pagecontent.aspx?page=deer_hogdeer" className="wiki-link" target="_blank" rel="noopener noreferrer">feralscan.org.au — Hog Deer</a></li>
              <li style={{marginBottom: '8px'}}><a href="https://www.thainationalparks.com/species/indian-hog-deer" className="wiki-link" target="_blank" rel="noopener noreferrer">thainationalparks.com — Indian Hog Deer</a></li>
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

export default HogDeer;