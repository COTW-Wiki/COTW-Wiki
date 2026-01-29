import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import DrinkingZoneIcon from '../../../assets/DrinkingZoneIcon.webp';
import class3Icon from '../../../assets/Class3Icon.webp'; // Class 3 for Springbok
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import SpringbokMain from '../../../assets/Springbok.webp';
import ShotSchemeImage from '../../../assets/Springbok_shot_scheme.webp';

// Fur Variant Images (Placeholders)
import Springbok_Albino from '../../../assets/Springbok_Albino.webp';
import Springbok_BlackBrownVariation1 from '../../../assets/Springbok_BlackBrownVariation1.webp';
import Springbok_BlackBrownVariation2 from '../../../assets/Springbok_BlackBrownVariation2.webp';
import Springbok_Orange from '../../../assets/Springbok_Orange.webp';
import Springbok_Tan from '../../../assets/Springbok_Tan.webp';


const Springbok = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  const needZonesData = [
    {
      name: "Vurhonga Savanna",
      schedule: [
        { time: "00:00 - 04:30", type: "Resting", icon: RestingZoneIcon },
        { time: "04:00 - 08:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "08:00 - 11:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "11:00 - 14:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "14:00 - 18:30", type: "Resting", icon: RestingZoneIcon },
        { time: "18:00 - 21:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "21:00 - 00:30", type: "Feeding", icon: FeedingZoneIcon },
      ]
    }
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Skittish, but distrait when in large groups" },
    { label: "Habitat", value: "Treeless savannah, edges of dry lake beds" },
    { label: "Senses", value: "Excellent hearing and sense of smell but poor vision" },
    { label: "Social", value: "Adult males are solitary or form bachelor groups, females live in herds" },
    { label: "Active", value: "Dawn, morning, dusk and evening" },
    { label: "Recommended Equipment", value: "Class 3 Ammo, Buck \"Snort Wheeze\" Caller" },
    { label: "Species", value: "Antidorcas marsupialis", italic: true, isLink: true },
    { label: "Difficulty", value: "Average" },
  ];

  // Fur Gallery Data
  const furGallery = [
    { name: "Albino", src: Springbok_Albino },
    { name: "Black Brown Variation 1", src: Springbok_BlackBrownVariation1 },
    { name: "Black Brown Variation 2", src: Springbok_BlackBrownVariation2 },
    { name: "Orange", src: Springbok_Orange },
    { name: "Tan", src: Springbok_Tan },
  ];

  // Trivia Data
  const triviaData = [
    "The Springbok does not need to drink, because it gets most of its water from the plants it eats.",
    "South Africa's National Rugby Team is nicknamed \"The Springboks\".",
    "It currently holds the Guinness Book World Record for 'Largest Herd of Mammals'."
  ];

  return (
    <div className="wiki-page">
      <div className="wiki-inner">
        
        {/* PAGE HEADER */}
        <div className="wiki-header">
          <span>Springbok</span>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Springbok</div>
            <div className="wiki-sidebar-image">
              <img src={SpringbokMain} alt="Springbok" />
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
              <span>Horns</span>
              <div className="wiki-trophy-grid">
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-silver">◆ Silver</span>
                  <span>36.46</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-gold">☗ Gold</span>
                  <span>60.51</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-diamond">☗ Diamond</span>
                  <span>78.55</span>
                </div>
              </div>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Weight</span>
              27kg — 42kg<br/>
              <span className="wiki-sidebar-muted">60lbs — 93lbs</span>
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Fur</span>
               <span className="wiki-fs-sm">
                 'Albino, Black Brown, Orange, Tan
               </span>
            </div>

            <div className="wiki-sidebar-header">Locations</div>
            <div className="wiki-sidebar-section">
               <div className="wiki-mb-4"><span className="wiki-link">Vurhonga Savanna</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main className="wiki-main">

            {/* Quote Block */}
            <div className="wiki-quote">
              "The springbok is a slender, medium-sized antelope with stethoscope-shaped horns, native to the open, treeless plains of southern Africa. The springbok is named after its unique jumping behavior, also known as pronking, where it leaps up to 2.00 m high with an arched back. The springbok weighs between 27.00 kg and 42.00 kg, and stands up to 0.86 m tall at the shoulder, with female springbok generally being the smaller of the two genders. Despite similarities, the springbok is not a true gazelle, clear in its scientific name, antidorcas, meaning not-a-gazelle. It has great speed on land, but can be outrun by the cheetah in short sprints and by wild dogs over a longer distance."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-p-mb">
              The <strong>Springbok</strong> is a <span className="wiki-link">class 3</span> animal. It can be hunted in the <span className="wiki-link">Vurhonga Savanna Reserve</span>. It is one of 6 antelope species besides the <span className="wiki-link">Nilgai</span>, <span className="wiki-link">Blackbuck</span>, <span className="wiki-link">Gemsbok</span>, <span className="wiki-link">Blue Wildebeest</span>, and <span className="wiki-link">Lesser Kudu</span>.
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
                <li><a href="#fur-variants" onClick={scrollToId('fur-variants')} className="wiki-link">Fur variants</a></li>
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
                        <tr><th colSpan="2" className="wiki-th wiki-th-center">Vurhonga Savanna</th></tr>
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
            <h2 id="fur-variants" className="wiki-h2">Fur variants</h2>
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
                                Orange (49.95%)<br/>
                                Tan (49.95%)
                            </td>
                            <td className="wiki-td">X</td>
                            <td className="wiki-td">
                                Albino (0.10%)
                            </td>
                            <td className="wiki-td">X</td>
                        </tr>
                        <tr>
                            <td className="wiki-td wiki-td-female">
                                Female
                            </td>
                            <td className="wiki-td">
                                Orange (29.96%)<br/>
                                Tan (29.96%)<br/>
                                Black Brown Variation 1 (20.05%)<br/>
                                Black Brown Variation 2 (19.97%)
                            </td>
                            <td className="wiki-td">X</td>
                            <td className="wiki-td">X</td>
                            <td className="wiki-td">
                                Albino (0.06%)
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
            <div className="wiki-mb-20">
              <ul style={{paddingLeft: '20px'}}>
                <li>
                  <a href="https://www.guinnessworldrecords.com/world-records/largest-herd-of-mammals" target="_blank" rel="noopener noreferrer" className="wiki-link">
                    https://www.guinnessworldrecords.com/world-records/largest-herd-of-mammals
                  </a>
                </li>
              </ul>
            </div>

            <div className="wiki-mt-40">
                <AnimalsTableMini />
            </div>
            
          </main>
        </div>
      </div>
    </div>
  );
};

export default Springbok;