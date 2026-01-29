import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import DrinkingZoneIcon from '../../../assets/DrinkingZoneIcon.webp';
import class3Icon from '../../../assets/Class3Icon.webp'; // Class 3 for Axis Deer
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import AxisDeerMain from '../../../assets/AxisDeer.webp';
import ShotSchemeImage from '../../../assets/Axis_Deer_shot_scheme.webp';

// Fur Variant Images (Placeholders)
import AxisDeer_AlbinoMale from '../../../assets/AxisDeer_AlbinoMale.webp';
import AxisDeer_DarkMale from '../../../assets/AxisDeer_DarkMale.webp';
import AxisDeer_MelanisticMale from '../../../assets/AxisDeer_MelanisticMale.webp';
import AxisDeer_PiebaldMale from '../../../assets/AxisDeer_PiebaldMale.webp';
import AxisDeer_SpottedMale from '../../../assets/AxisDeer_SpottedMale.webp';

import AxisDeer_OrangeFemale from '../../../assets/AxisDeer_OrangeFemale.webp';
import AxisDeer_AlbinoFemale from '../../../assets/AxisDeer_AlbinoFemale.webp';
import AxisDeer_MelanisticFemale from '../../../assets/AxisDeer_MelanisticFemale.webp';
import AxisDeer_PiebaldFemale from '../../../assets/AxisDeer_PiebaldFemale.webp';
import AxisDeer_SpottedFemale from '../../../assets/AxisDeer_SpottedFemale.webp';


const AxisDeer = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  const needZonesData = [
    {
      name: "Emerald Coast",
      schedule: [
        { time: "00:00 - 03:00", type: "Resting", icon: RestingZoneIcon },
        { time: "03:00 - 06:00", type: "Drinking", icon: DrinkingZoneIcon },
        { time: "06:00 - 09:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "09:00 - 12:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "12:00 - 15:00", type: "Resting", icon: RestingZoneIcon },
        { time: "15:00 - 18:00", type: "Resting", icon: RestingZoneIcon },
        { time: "18:00 - 21:00", type: "Resting", icon: RestingZoneIcon },
        { time: "21:00 - 00:00", type: "Feeding", icon: FeedingZoneIcon },
      ]
    }
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Large groups are sedentary in warmer seasons, but otherwise skittish and alert" },
    { label: "Habitat", value: "Dense forest, thicketed grasslands" },
    { label: "Senses", value: "Strong sense of smell and hearing, good eyesight" },
    { label: "Social", value: "Group size is highly dependent on seasons and availability of forage, large groups primarily consist of females" },
    { label: "Active", value: "Mornings, dusk until evening" },
    { label: "Recommended Equipment", value: "Class 3 Ammo, Chital Screamer" },
    { label: "Species", value: "Axis axis", italic: true, isLink: true },
    { label: "Difficulty", value: "Average" },
  ];

  // Fur Gallery Data (separate male / female galleries)
  const maleGallery = [
    { name: "Albino", src: AxisDeer_AlbinoMale },
    { name: "Dark", src: AxisDeer_DarkMale },
    { name: "Melanistic", src: AxisDeer_MelanisticMale },
    { name: "Piebald", src: AxisDeer_PiebaldMale },
    { name: "Spotted", src: AxisDeer_SpottedMale },
  ];

  const femaleGallery = [
    { name: "Albino", src: AxisDeer_AlbinoFemale },
    { name: "Melanistic", src: AxisDeer_MelanisticFemale },
    { name: "Orange", src: AxisDeer_OrangeFemale },
    { name: "Piebald", src: AxisDeer_PiebaldFemale },
    { name: "Spotted", src: AxisDeer_SpottedFemale },
  ];

  // Trivia Data
  const triviaData = [
    "The word Chital, which is another name for the Axis Deer, arises from the Sanskrit word citrala meaning Spotted.",
    "Apparently among hunters, Axis Deer meat is considered the most delicious among deer.",
    "Axis deer often graze near trees, because the langurs can warn them of approaching predators due to their high position."
  ];

  return (
    <div className="wiki-page">
      <div className="wiki-inner">
        
        {/* PAGE HEADER */}
        <div className="wiki-header">
          <span>Axis Deer</span>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Axis Deer</div>
            <div className="wiki-sidebar-image">
              <img src={AxisDeerMain} alt="Axis Deer" />
            </div>
            
            <div className="wiki-sidebar-header">General Information</div>
            
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Class</span>
              <span><img src={class3Icon} alt="Class 3" className="wiki-class-icon-lg"/>3</span>
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
                  <span>72.8</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-gold">☗ Gold</span>
                  <span>155.3</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-diamond">☗ Diamond</span>
                  <span>217.2</span>
                </div>
              </div>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Weight</span>
              ? — 75kg<br/>
              <span className="wiki-sidebar-muted">? — 165lbs</span>
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Fur</span>
               <span className="wiki-fs-sm">
                 Albino, Dark, Melanistic, Orange, Piebald, Spotted
               </span>
            </div>

            <div className="wiki-sidebar-header">Locations</div>
            <div className="wiki-sidebar-section">
               <div className="wiki-mb-4"><span className="wiki-link">Parque Fernando</span>, <span className="wiki-link">Emerald Coast</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main className="wiki-main">

            {/* Quote Block */}
            <div className="wiki-quote">
              "Axis deer, also known as the chital, is a deer species native to South Asia. Throughout the 19th and 20th centuries, axis deer were introduced throughout Europe, Australia, and the Americas as game animals. The axis deer are known for their rusty-red coats with permanent white spots, the stags' three tined antlers, and their loud "screaming" vocalizations. Axis deer are adaptable feeders and can generally be found in woodlands, forests, and clearings near waterways. Their group sizes are highly dependent on the seasons as well as the availability of leafy forage and a permanent source of water (axis deer drink everyday). They are most active at dawn and dusk and rest under the shade of trees during the day."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-p-mb">
              The <strong>Axis Deer</strong> is a <span className="wiki-link">class 3</span> deer. It can be hunted on <span className="wiki-link">Parque Fernando</span> and <span className="wiki-link">Emerald Coast</span>.
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
                  <ol style={{margin: '6px 0 0 0', paddingLeft: '0', color: '#6fb2e6', listStyleType: 'none'}}>
                    <li><a href="#male-variants" onClick={scrollToId('male-variants')} className="wiki-link">4.1 Male</a></li>
                    <li><a href="#female-variants" onClick={scrollToId('female-variants')} className="wiki-link">4.2 Female</a></li>
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

            {/* FUR VARIANTS (Gallery) */}
            <h2 id="fur-variants" className="wiki-h2">Fur Variants</h2>

            <h3 id="male-variants" style={{...styles.h2, fontSize: '1.2rem'}}>Male</h3>
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

            <h3 id="female-variants" style={{...styles.h2, fontSize: '1.2rem'}}>Female</h3>
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
                                Spotted (85.37%)<br/>
                                Dark (14.29%)
                            </td>
                            <td className="wiki-td">X</td>
                            <td className="wiki-td">
                                Piebald (0.23%)
                            </td>
                            <td className="wiki-td">
                                Albino (0.06%)<br/>
                                Melanistic (0.06%)
                            </td>
                        </tr>
                        <tr>
                            <td className="wiki-td wiki-td-female">
                                Female
                            </td>
                            <td className="wiki-td">
                                Spotted (85.37%)<br/>
                                Orange (14.29%)
                            </td>
                            <td className="wiki-td">X</td>
                            <td className="wiki-td">
                                Piebald (0.23%)
                            </td>
                            <td className="wiki-td">
                                Albino (0.06%)<br/>
                                Melanistic (0.06%)
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
            <ul className="wiki-ul wiki-ul-disc">
              <li style={{marginBottom: '8px'}}>Axis Deer Need Zones, Emerald Coast</li>
              <li style={{marginBottom: '8px'}}><a href="https://encyclopedia.pub" className="wiki-link" target="_blank" rel="noopener noreferrer">encyclopedia.pub</a></li>
              <li style={{marginBottom: '8px'}}><a href="https://brokenarrowranch.com" className="wiki-link" target="_blank" rel="noopener noreferrer">brokenarrowranch.com</a></li>
              <li style={{marginBottom: '8px'}}><a href="https://animalia.bio" className="wiki-link" target="_blank" rel="noopener noreferrer">animalia.bio</a> (See attachments)</li>
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

export default AxisDeer;