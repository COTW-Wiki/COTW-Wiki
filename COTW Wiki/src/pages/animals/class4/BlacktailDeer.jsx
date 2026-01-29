import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import DrinkingZoneIcon from '../../../assets/DrinkingZoneIcon.webp';
import class4Icon from '../../../assets/Class4Icon.webp'; // Class 4 for Blacktail Deer
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import BlacktailDeerMain from '../../../assets/BlacktailDeer.webp';
import ShotSchemeImage from '../../../assets/Blacktail_deer_shot_scheme.webp';

// Fur Variant Images (Placeholders)
import BlacktailDeer_AlbinoMale from '../../../assets/BlacktailDeer_AlbinoMale.webp';
import BlacktailDeer_DarkGreyMale from '../../../assets/BlacktailDeer_DarkGreyMale.webp';
import BlacktailDeer_GreyMale from '../../../assets/BlacktailDeer_GreyMale.webp';
import BlacktailDeer_GreyBrownMale from '../../../assets/BlacktailDeer_GreyBrownMale.webp';
import BlacktailDeer_MelanisticMale from '../../../assets/BlacktailDeer_MelanisticMale.webp';
import BlacktailDeer_PiebaldMale from '../../../assets/BlacktailDeer_PiebaldMale.webp';

import BlacktailDeer_TanFemale from '../../../assets/BlacktailDeer_TanFemale.webp';
import BlacktailDeer_AlbinoFemale from '../../../assets/BlacktailDeer_AlbinoFemale.webp';
import BlacktailDeer_GreyFemale from '../../../assets/BlacktailDeer_GreyFemale.webp';
import BlacktailDeer_GreyBrownFemale from '../../../assets/BlacktailDeer_GreyBrownFemale.webp';
import BlacktailDeer_MelanisticFemale from '../../../assets/BlacktailDeer_MelanisticFemale.webp';
import BlacktailDeer_PiebaldFemale from '../../../assets/BlacktailDeer_PiebaldFemale.webp';



const BlacktailDeer = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  const needZonesData = [
    {
      name: "Layton Lake District",
      schedule: [
        { time: "00:00 - 04:30", type: "Resting", icon: RestingZoneIcon },
        { time: "04:00 - 08:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "08:00 - 12:30", type: "Resting", icon: RestingZoneIcon },
        { time: "12:00 - 16:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "16:00 - 20:30", type: "Drinking", icon: DrinkingZoneIcon },
        { time: "20:00 - 00:30", type: "Resting", icon: RestingZoneIcon },
      ]
    }
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Docile and somewhat skittish" },
    { label: "Habitat", value: "Forests with a lot of underbrush" },
    { label: "Senses", value: "Excellent sense of smell and hearing" },
    { label: "Social", value: "Usually solitary, can also be found in small groups" },
    { label: "Active", value: "During dawn, dusk and night" },
    { label: "Recommended Equipment", value: "class 4 Ammo, Deer \"Bleat\" Caller, Deer \"Grunt\" Caller, Blacktail Deer Scent" },
    { label: "Species", value: "Odocoileus hemionus", italic: true, isLink: true },
    { label: "Difficulty", value: "Average" },
  ];

  // Fur Gallery Data (separated by sex)
  const maleGallery = [
    { name: "Albino", src: BlacktailDeer_AlbinoMale },
    { name: "Dark Grey", src: BlacktailDeer_DarkGreyMale },
    { name: "Grey", src: BlacktailDeer_GreyMale },
    { name: "Grey Brown", src: BlacktailDeer_GreyBrownMale },
    { name: "Melanistic", src: BlacktailDeer_MelanisticMale },
    { name: "Piebald", src: BlacktailDeer_PiebaldMale },
  ];

  const femaleGallery = [
    { name: "Tan", src: BlacktailDeer_TanFemale },
    { name: "Albino", src: BlacktailDeer_AlbinoFemale },
    { name: "Grey", src: BlacktailDeer_GreyFemale },
    { name: "Grey Brown", src: BlacktailDeer_GreyBrownFemale },
    { name: "Melanistic", src: BlacktailDeer_MelanisticFemale },
    { name: "Piebald", src: BlacktailDeer_PiebaldFemale },
  ];

  // Trivia Data
  const triviaData = [
    "It was part of the original cast of animals huntable at launch.",
    "The Blacktail Deer was one of the first animals, along with the Whitetail Deer, to get TruRACS.",
    "Because of their rarity, and overall elusiveness, the Blacktail Deer is known by many hunters as the Ghost of The Pacific."
  ];

  return (
    <div className="wiki-page">
      <div className="wiki-inner">
        
        {/* PAGE HEADER */}
        <div className="wiki-header">
          <span>Blacktail Deer</span>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Blacktail Deer</div>
            <div className="wiki-sidebar-image">
              <img src={BlacktailDeerMain} alt="Blacktail Deer" />
            </div>
            
            <div className="wiki-sidebar-header">General Information</div>
            
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Class</span>
              <span><img src={class4Icon} alt="Class 4" className="wiki-class-icon-lg"/>4</span>
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
                  <span>76.90</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-gold">☗ Gold</span>
                  <span>134.40</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-diamond">☗ Diamond</span>
                  <span>177.50</span>
                </div>
              </div>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Weight</span>
              40kg — 95kg<br/>
              <span className="wiki-sidebar-muted">88lbs — 209lbs</span>
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Fur</span>
               <span className="wiki-fs-sm">
                 Albino, Dark Grey, Grey, Grey-Brown, Melanistic, Piebald, Tan
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
              "The blacktail deer is generally considered a subspecies of the mule deer and native to the western part of North American continent although new science suggests it could be its own species and not a subspecies. The blacktail thrives around the edges of forests that are typically rich with foliage and grass which they feed on. They tend to avoid open areas that lack hiding spots, especially during harsh weather. The blacktail is a medium-sized deer, comparable to the whitetail deer, but blacktail bucks' antlers take different patterns that are more similar to the mule deer's. The blacktail's antlers grow from a spike into a distinctive double-fork shape."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-p-mb">
              The <strong>Blacktail Deer</strong> is a medium-sized deer species. It can be hunted in the <span className="wiki-link">Layton Lake District</span>.
            </p>

            {/* Table of Contents (numbered; Fur Variants has sub-topics) */}
            <div style={{
                border: '1px solid #3a5a75',
                backgroundColor: '#0f2e48',
                display: 'inline-block',
                padding: '10px 20px',
                borderRadius: '4px',
                minWidth: '260px',
                marginBottom: '30px'
            }}>
              <div className="wiki-toc-title">
                🔢 Contents <span className="wiki-toc-toggle">[hide]</span>
              </div>
              <ol className="wiki-toc">
                <li><a href="#features" className="wiki-link">Features</a></li>
                <li><a href="#need-zones" className="wiki-link">Need Zone Times</a></li>
                <li><a href="#shot-scheme" className="wiki-link">Shot scheme</a></li>
                <li>
                  <a href="#fur-variants" className="wiki-link">Fur Variants</a>
                  <ol style={{margin:'6px 0 0 14px', padding:'0', color:'#9ed3f5', listStyle: 'none'}}>
                    <li><a href="#fur-male" className="wiki-link">4.1 Male</a></li>
                    <li><a href="#fur-female" className="wiki-link">4.2 Female</a></li>
                  </ol>
                </li>
                <li><a href="#variant-rarity" className="wiki-link">Fur Variant Rarity</a></li>
                <li><a href="#trivia" className="wiki-link">Trivia</a></li>
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

            <h3 id="fur-male" style={{color: '#6fb2e6', marginTop: '12px'}}>Male</h3>
            <div className="wiki-gallery-grid">
              {maleGallery.map((item, i) => (
                <div key={`m-${i}`} className="wiki-gallery-item">
                  <div className="wiki-gallery-placeholder">
                    <img src={item.src} alt={item.name} />
                  </div>
                  <span className="wiki-gallery-label">{item.name}</span>
                </div>
              ))}
            </div>

            <h3 id="fur-female" style={{color: '#6fb2e6', marginTop: '18px'}}>Female</h3>
            <div className="wiki-gallery-grid">
              {femaleGallery.map((item, i) => (
                <div key={`f-${i}`} className="wiki-gallery-item">
                  <div className="wiki-gallery-placeholder">
                    <img src={item.src} alt={item.name} />
                  </div>
                  <span className="wiki-gallery-label">{item.name}</span>
                </div>
              ))}
            </div>

            {/* FUR VARIANT RARITY TABLE */}
            <h2 id="variant-rarity" className="wiki-h2">Fur Variant Rarity</h2>
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
                                Grey (33.23%)<br/>
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
                        <tr>
                            <td className="wiki-td wiki-td-female">
                                Female
                            </td>
                            <td className="wiki-td">
                                Grey (33.23%)<br/>
                                Grey Brown (33.23%)<br/>
                                Tan (33.23%)
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
            
          </main>
        </div>
      </div>
    </div>
  );
};

export default BlacktailDeer;