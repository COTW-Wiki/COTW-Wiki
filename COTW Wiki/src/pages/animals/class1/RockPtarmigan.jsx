import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import class1Icon from '../../../assets/Class1Icon.webp';
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import RockPtarmiganMain from '../../../assets/RockPtarmigan.webp';

// Male Plumage Images
import RockPtarmigan_BicolorMaleFront from '../../../assets/RockPtarmigan_BicolorMaleFront.webp';
import RockPtarmigan_BicolorMaleBack from '../../../assets/RockPtarmigan_BicolorMaleBack.webp';
import RockPtarmigan_MoltingVariation1MaleFront from '../../../assets/RockPtarmigan_MoltingVariation1MaleFront.webp';
import RockPtarmigan_MoltingVariation1MaleBack from '../../../assets/RockPtarmigan_MoltingVariation1MaleBack.webp';
import RockPtarmigan_MoltingVariation2MaleFront from '../../../assets/RockPtarmigan_MoltingVariation2MaleFront.webp';
import RockPtarmigan_MoltingVariation2MaleBack from '../../../assets/RockPtarmigan_MoltingVariation2MaleBack.webp';
import RockPtarmigan_WhiteMaleFront from '../../../assets/RockPtarmigan_WhiteMaleFront.webp';
import RockPtarmigan_WhiteMaleBack from '../../../assets/RockPtarmigan_WhiteMaleBack.webp';

// Female Plumage Images
import RockPtarmigan_MoltingVariation1FemaleFront from '../../../assets/RockPtarmigan_MoltingVariation1FemaleFront.webp';
import RockPtarmigan_MoltingVariation1FemaleBack from '../../../assets/RockPtarmigan_MoltingVariation1FemaleBack.webp';
import RockPtarmigan_MoltingVariation2FemaleFront from '../../../assets/RockPtarmigan_MoltingVariation2FemaleFront.webp';
import RockPtarmigan_MoltingVariation2FemaleBack from '../../../assets/RockPtarmigan_MoltingVariation2FemaleBack.webp';
import RockPtarmigan_MottledVariation1FemaleFront from '../../../assets/RockPtarmigan_MottledVariation1FemaleFront.webp';
import RockPtarmigan_MottledVariation1FemaleBack from '../../../assets/RockPtarmigan_MottledVariation1FemaleBack.webp';
import RockPtarmigan_MottledVariation2FemaleFront from '../../../assets/RockPtarmigan_MottledVariation2FemaleFront.webp';
import RockPtarmigan_MottledVariation2FemaleBack from '../../../assets/RockPtarmigan_MottledVariation2FemaleBack.webp';
import RockPtarmigan_WhiteFemaleFront from '../../../assets/RockPtarmigan_WhiteFemaleFront.webp';
import RockPtarmigan_WhiteFemaleBack from '../../../assets/RockPtarmigan_WhiteFemaleBack.webp';


const RockPtarmigan = () => {

  // --- DATA SOURCES ---

  // Need Zone Times (Revontuli Coast)
  const needZones = [
    { time: "00:00 - 04:30", type: "Resting", icon: RestingZoneIcon },
    { time: "04:00 - 08:30", type: "Feeding", icon: FeedingZoneIcon },
    { time: "08:00 - 11:30", type: "Feeding", icon: FeedingZoneIcon },
    { time: "11:00 - 14:30", type: "Resting", icon: RestingZoneIcon },
    { time: "14:00 - 18:30", type: "Feeding", icon: FeedingZoneIcon },
    { time: "18:00 - 21:30", type: "Feeding", icon: FeedingZoneIcon },
    { time: "21:00 - 00:30", type: "Resting", icon: RestingZoneIcon },
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Territorial" },
    { label: "Habitat", value: "Rocky tundra" },
    { label: "Senses", value: "Excellent vision" },
    { label: "Social", value: "Territorial while breeding, flocks before migration" },
    { label: "Active", value: "Diurnal" },
    { label: "Recommended Equipment", value: "Class 1 Ammo" },
    { label: "Species", value: "Lagopus muta", italic: true, isLink: true },
    { label: "Difficulty", value: "Easy" },
  ];

  // Plumage Gallery Data
  const plumageGallery = {
    male: [
      { name: "Bicolor - Front", src: RockPtarmigan_BicolorMaleFront },
      { name: "Bicolor - Back", src: RockPtarmigan_BicolorMaleBack },
      { name: "Molting Variation 1 - Front", src: RockPtarmigan_MoltingVariation1MaleFront },
      { name: "Molting Variation 1 - Back", src: RockPtarmigan_MoltingVariation1MaleBack },
      { name: "Molting Variation 2 - Front", src: RockPtarmigan_MoltingVariation2MaleFront },
      { name: "Molting Variation 2 - Back", src: RockPtarmigan_MoltingVariation2MaleBack },
      { name: "White - Front", src: RockPtarmigan_WhiteMaleFront },
      { name: "White - Back", src: RockPtarmigan_WhiteMaleBack },
    ],
    female: [
      { name: "Molting Variation 1 - Front", src: RockPtarmigan_MoltingVariation1FemaleFront },
      { name: "Molting Variation 1 - Back", src: RockPtarmigan_MoltingVariation1FemaleBack },
      { name: "Molting Variation 2 - Front", src: RockPtarmigan_MoltingVariation2FemaleFront },
      { name: "Molting Variation 2 - Back", src: RockPtarmigan_MoltingVariation2FemaleBack },
      { name: "Mottled Variation 1 - Front", src: RockPtarmigan_MottledVariation1FemaleFront },
      { name: "Mottled Variation 1 - Back", src: RockPtarmigan_MottledVariation1FemaleBack },
      { name: "Mottled Variation 2 - Front", src: RockPtarmigan_MottledVariation2FemaleFront },
      { name: "Mottled Variation 2 - Back", src: RockPtarmigan_MottledVariation2FemaleBack },
      { name: "White - Front", src: RockPtarmigan_WhiteFemaleFront },
      { name: "White - Back", src: RockPtarmigan_WhiteFemaleBack },
    ]
  };

  return (
    <div className="wiki-page">
      <div className="wiki-inner">
        
        {/* PAGE HEADER */}
        <div className="wiki-header">
          <span>Rock Ptarmigan</span>
          <div className="wiki-edit-actions">
          </div>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Rock Ptarmigan</div>
            <div className="wiki-sidebar-image">
              <img src={RockPtarmiganMain} alt="Rock Ptarmigan" />
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

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Trophy Type</span>
              <span>Weight</span>
              <div className="wiki-trophy-grid">
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-silver">◆ Silver</span>
                  <span>492</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-gold">☗ Gold</span>
                  <span>616</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-diamond">☗ Diamond</span>
                  <span>709</span>
                </div>
              </div>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Weight</span>
              730g — 750g<br/>
              1.6lbs — 1.7lbs
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Plumage</span>
               <span className="wiki-fs-sm">
                  Bicolor, Molting, Mottled, White
               </span>
            </div>

            <div className="wiki-sidebar-header">Locations</div>
            <div className="wiki-sidebar-section">
               <div className="wiki-mb-4"><span className="wiki-link">Revontuli Coast</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main className="wiki-main">

            {/* Quote Block */}
            <div className="wiki-quote">
              "The Rock Ptarmigan is closely related to the slightly larger Willow Ptarmigan, and occupies the same natural range in the Arctic and subarctic regions of Eurasia and North America. However the two species occupy different habitats, the Rock Ptarmigan prefers more rocky and barren environments at higher elevation. As other species of ptarmigans, the Rock Ptarmigan changes throughout the year in a multi-step molting process. Males gradually change between a white winter plumage, a conspicuous breeding plumage and a cryptic plumage in a continuous cycle."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-p-mb">
              The <strong>Rock Ptarmigan</strong> is a species introduced in the <span className="wiki-link">Revontuli Coast</span> reserve located in Finland. It is one of 6 huntable Grouse species in game. The other Grouse include the <span className="wiki-link">Willow Ptarmigan</span>, <span className="wiki-link">Hazel Grouse</span>, <span className="wiki-link">Black Grouse</span>, <span className="wiki-link">Red Grouse</span> and the <span className="wiki-link">Western Capercaillie</span>.
            </p>

            {/* Table of Contents Placeholder */}
            <div className="wiki-toc">
              <div className="wiki-toc-title">
                🔢 Contents <span className="wiki-toc-toggle">[hide]</span>
              </div>
              <ol className="wiki-toc">
                <li>
                  <a href="#features" className="wiki-link" onClick={(e)=>{e.preventDefault(); document.getElementById('features')?.scrollIntoView({behavior:'smooth', block:'start'});}}>Features</a>
                </li>
                <li>
                  <a href="#need-zone-times" className="wiki-link" onClick={(e)=>{e.preventDefault(); document.getElementById('need-zone-times')?.scrollIntoView({behavior:'smooth', block:'start'});}}>Need Zone Times</a>
                </li>
                <li>
                  <a href="#plumage-variants" className="wiki-link" onClick={(e)=>{e.preventDefault(); document.getElementById('plumage-variants')?.scrollIntoView({behavior:'smooth', block:'start'});}}>Plumage Variants</a>
                    <ul >
                        <li className="text-[#6fb2e6]"><a href="#plumage-male" className="wiki-link" onClick={(e)=>{e.preventDefault(); document.getElementById('plumage-male')?.scrollIntoView({behavior:'smooth', block:'start'});}}>3.1. Male</a></li>
                        <li className="text-[#6fb2e6]"><a href="#plumage-female" className="wiki-link" onClick={(e)=>{e.preventDefault(); document.getElementById('plumage-female')?.scrollIntoView({behavior:'smooth', block:'start'});}}>3.2. Female</a></li>
                    </ul>
                </li>
                <li>
                  <a href="#plumage-rarity" className="wiki-link" onClick={(e)=>{e.preventDefault(); document.getElementById('plumage-rarity')?.scrollIntoView({behavior:'smooth', block:'start'});}}>Plumage Variant Rarity</a>
                </li>
                <li>
                  <a href="#trivia" className="wiki-link" onClick={(e)=>{e.preventDefault(); document.getElementById('trivia')?.scrollIntoView({behavior:'smooth', block:'start'});}}>Trivia</a>
                </li>
              </ol>
            </div>

            {/* FEATURES */}
            <h2 id="features" className="wiki-h2">Features</h2>
            <table className="wiki-table">
              <tbody>
                <tr>
                    <th className="wiki-th wiki-th-w25"></th>
                    <th className="wiki-th">Description</th>
                </tr>
                {features.map((item, index) => (
                  <tr key={index}>
                    <td className="wiki-td wiki-td-bold">{item.label}</td>
                    <td className={`wiki-td ${item.italic ? 'wiki-td-italic' : ''}`}>
                        <span dangerouslySetInnerHTML={{ __html: item.value }} />
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
                        <tr><th colSpan="2" className="wiki-th wiki-th-center">Revontuli Coast</th></tr>
                        <tr>
                            <th className="wiki-th wiki-th-alt">Time</th>
                            <th className="wiki-th wiki-th-alt">Activity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {needZones.map((zone, i) => (
                        <tr key={i}>
                            <td className="wiki-td">{zone.time}</td>
                            <td className="wiki-td"><img src={zone.icon} alt={zone.type} className="wiki-class-icon"/> {zone.type}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* PLUMAGE VARIANTS (Gallery) */}
            <h2 id="plumage-variants" className="wiki-h2">Plumage Variants</h2>
            
            {/* Male Section */}
            <h3 id="plumage-male" className="wiki-h3 mt-2.5 text-[1.2rem] border-b-0">Male</h3>
            <div className="wiki-gallery-grid">
              {plumageGallery.male.map((item, i) => (
                <div key={i} className="wiki-gallery-item">
                  <div className="wiki-gallery-placeholder">
                    <img src={item.src} alt={item.name} />
                  </div>
                  <span className="wiki-gallery-label">{item.name}</span>
                </div>
              ))}
            </div>

            {/* Female Section */}
            <h3 id="plumage-female" className="wiki-h3 mt-2.5 text-[1.2rem] border-b-0">Female</h3>
            <div className="wiki-gallery-grid">
              {plumageGallery.female.map((item, i) => (
                <div key={i} className="wiki-gallery-item">
                  <div className="wiki-gallery-placeholder">
                    <img src={item.src} alt={item.name} />
                  </div>
                  <span className="wiki-gallery-label">{item.name}</span>
                </div>
              ))}
            </div>

            {/* PLUMAGE RARITY TABLE */}
            <h2 id="plumage-rarity" className="wiki-h2">Plumage Variant Rarity</h2>
            <table className="wiki-table">
                <thead>
                    <tr>
                        <th className="wiki-th">Sex</th>
                        <th className="wiki-th"><span className="wiki-common">Common</span></th>
                        <th className="wiki-th"><span className="wiki-uncommon">Uncommon</span></th>
                        <th className="wiki-th"><span className="wiki-rare">Rare</span></th>
                        <th className="wiki-th"><span className="wiki-very-rare">Very Rare</span></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="wiki-td wiki-td-muted">Male</td>
                        <td className="wiki-td">
                            Molting Variation 1 (39.85%)<br/>
                            Molting Variation 2 (39.85%)<br/>
                            Bicolor (19.93%)
                        </td>
                        <td className="wiki-td">X</td>
                        <td className="wiki-td">
                            White (0.37%)
                        </td>
                        <td className="wiki-td">X</td>
                    </tr>
                     <tr>
                        <td className="wiki-td wiki-td-female">Female</td>
                        <td className="wiki-td">
                            Molting Variation 1 (33.23%)<br/>
                            Molting Variation 2 (33.23%)<br/>
                            Mottled Variation 1 (16.61%)<br/>
                            Mottled Variation 2 (16.61%)
                        </td>
                        <td className="wiki-td">X</td>
                        <td className="wiki-td">
                            White (0.31%)
                        </td>
                        <td className="wiki-td">X</td>
                    </tr>
                </tbody>
            </table>

            {/* TRIVIA */}
            <h2 id="trivia" className="wiki-h2">Trivia</h2>
            <ul className="wiki-ul">
              <li className="wiki-li">The <strong>Rock Ptarmigan</strong> is called "Kiiruna" in Finnish.</li>
            </ul>

            <AnimalsTableMini />
          </main>
        </div>
      </div>
    </div>
  );
};

export default RockPtarmigan;