import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import class1Icon from '../../../assets/Class1Icon.webp';
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import WillowPtarmiganMain from '../../../assets/WillowPtarmigan.webp';

// Male Plumage Images
import WillowPtarmigan_BicolorMaleFront from '../../../assets/WillowPtarmigan_BicolorMaleFront.webp';
import WillowPtarmigan_BicolorMaleBack from '../../../assets/WillowPtarmigan_BicolorMaleBack.webp';
import WillowPtarmigan_MoltingMaleFront from '../../../assets/WillowPtarmigan_MoltingMaleFront.webp';
import WillowPtarmigan_MoltingMaleBack from '../../../assets/WillowPtarmigan_MoltingMaleBack.webp';
import WillowPtarmigan_RedMaleFront from '../../../assets/WillowPtarmigan_RedMaleFront.webp';
import WillowPtarmigan_RedMaleBack from '../../../assets/WillowPtarmigan_RedMaleBack.webp';
import WillowPtarmigan_WhiteMaleFront from '../../../assets/WillowPtarmigan_WhiteMaleFront.webp';
import WillowPtarmigan_WhiteMaleBack from '../../../assets/WillowPtarmigan_WhiteMaleBack.webp';

// Female Plumage Images
import WillowPtarmigan_BicolorFemaleFront from '../../../assets/WillowPtarmigan_BicolorFemaleFront.webp';
import WillowPtarmigan_BicolorFemaleBack from '../../../assets/WillowPtarmigan_BicolorFemaleBack.webp';
import WillowPtarmigan_BrownFemaleFront from '../../../assets/WillowPtarmigan_BrownFemaleFront.webp';
import WillowPtarmigan_BrownFemaleBack from '../../../assets/WillowPtarmigan_BrownFemaleBack.webp';
import WillowPtarmigan_MoltingVariation1FemaleFront from '../../../assets/WillowPtarmigan_MoltingVariation1FemaleFront.webp';
import WillowPtarmigan_MoltingVariation1FemaleBack from '../../../assets/WillowPtarmigan_MoltingVariation1FemaleBack.webp';
import WillowPtarmigan_MoltingVariation2FemaleFront from '../../../assets/WillowPtarmigan_MoltingVariation2FemaleFront.webp';
import WillowPtarmigan_MoltingVariation2FemaleBack from '../../../assets/WillowPtarmigan_MoltingVariation2FemaleBack.webp';
import WillowPtarmigan_WhiteFemaleFront from '../../../assets/WillowPtarmigan_WhiteFemaleFront.webp';
import WillowPtarmigan_WhiteFemaleBack from '../../../assets/WillowPtarmigan_WhiteFemaleBack.webp';


const WillowPtarmigan = () => {

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
    { label: "Habitat", value: "Tundra" },
    { label: "Senses", value: "Excellent vision" },
    { label: "Social", value: "Territorial while breeding, flocks before migration" },
    { label: "Active", value: "Diurnal" },
    { label: "Recommended Equipment", value: "Class 1 Ammo" },
    { label: "Species", value: "Lagopus lagopus", italic: true, isLink: true },
    { label: "Difficulty", value: "Easy" },
  ];

  // Plumage Gallery Data
  const plumageGallery = {
    male: [
      { name: "Bicolor - Front", src: WillowPtarmigan_BicolorMaleFront },
      { name: "Bicolor - Back", src: WillowPtarmigan_BicolorMaleBack },
      { name: "Molting - Front", src: WillowPtarmigan_MoltingMaleFront },
      { name: "Molting - Back", src: WillowPtarmigan_MoltingMaleBack },
      { name: "Red - Front", src: WillowPtarmigan_RedMaleFront },
      { name: "Red - Back", src: WillowPtarmigan_RedMaleBack },
      { name: "White - Front", src: WillowPtarmigan_WhiteMaleFront },
      { name: "White - Back", src: WillowPtarmigan_WhiteMaleBack },
    ],
    female: [
      { name: "Bicolor - Front", src: WillowPtarmigan_BicolorFemaleFront },
      { name: "Bicolor - Back", src: WillowPtarmigan_BicolorFemaleBack },
      { name: "Brown - Front", src: WillowPtarmigan_BrownFemaleFront },
      { name: "Brown - Back", src: WillowPtarmigan_BrownFemaleBack },
      { name: "Molting Variation 1 - Front", src: WillowPtarmigan_MoltingVariation1FemaleFront },
      { name: "Molting Variation 1 - Back", src: WillowPtarmigan_MoltingVariation1FemaleBack },
      { name: "Molting Variation 2 - Front", src: WillowPtarmigan_MoltingVariation2FemaleFront },
      { name: "Molting Variation 2 - Back", src: WillowPtarmigan_MoltingVariation2FemaleBack },
      { name: "White - Front", src: WillowPtarmigan_WhiteFemaleFront },
      { name: "White - Back", src: WillowPtarmigan_WhiteFemaleBack },
    ]
  };

  return (
    <div className="wiki-page">
      <div className="wiki-inner">
        
        {/* PAGE HEADER */}
        <div className="wiki-header">
          <span>Willow Ptarmigan</span>
          <div className="wiki-edit-actions">
          </div>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Willow Ptarmigan</div>
            <div className="wiki-sidebar-image">
              <img src={WillowPtarmiganMain} alt="Willow Ptarmigan" />
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
                  <span>506</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-gold">☗ Gold</span>
                  <span>658</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-diamond">☗ Diamond</span>
                  <span>772</span>
                </div>
              </div>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Weight</span>
              430g — 800g<br/>
              0.9lbs — 1.8lbs
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Plumage</span>
               <span className="wiki-fs-sm">
                  Bicolor, Brown, Molting, Red, White
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
              "The Willow Ptarmigan is a species of game bird that is closely related to grouse, living in the Arctic and subarctic regions of Northern Eurasia and North America. It is the largest living species of ptarmigan. Willow Ptarmigans are territorial birds. Males defend their territory fiercely during breeding season, in an attempt to attract females. In the fall, they become more gregarious and form large flock prior to their winter migration."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-p-mb">
              The <strong>Willow Ptarmigan</strong> is a <span className="wiki-link">class 1</span> bird species huntable in the <span className="wiki-link">Revontuli Coast</span> reserve located in Finland. It is one of 5 grouse currently huntable in game. The other Grouse include the <span className="wiki-link">Rock Ptarmigan</span>, <span className="wiki-link">Hazel Grouse</span>, <span className="wiki-link">Black Grouse</span>, and the <span className="wiki-link">Western Capercaillie</span>.
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
                <li>
                  <a href="#references" className="wiki-link" onClick={(e)=>{e.preventDefault(); document.getElementById('references')?.scrollIntoView({behavior:'smooth', block:'start'});}}>References</a>
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
                        {/* Note: Screenshot has empty location header row or generic name, using typical format */}
                        <tr><th colSpan="2" className="wiki-th wiki-th-center">Revontuli Coast</th></tr>
                        <tr>
                            <th className="wiki-th wiki-th-alt">Times</th>
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
                            Molting (66.14%)<br/>
                            Bicolor (33.07%)
                        </td>
                        <td className="wiki-td">X</td>
                        <td className="wiki-td">
                            White (0.53%)<br/>
                            Red (0.27%)
                        </td>
                        <td className="wiki-td">X</td>
                    </tr>
                     <tr>
                        <td className="wiki-td wiki-td-female">Female</td>
                        <td className="wiki-td">
                            Molting Variation 1 (39.87%)<br/>
                            Molting Variation 2 (19.94%)<br/>
                            Bicolor (19.94%)<br/>
                            Brown (19.94%)
                        </td>
                        <td className="wiki-td">X</td>
                        <td className="wiki-td">
                            White (0.32%)
                        </td>
                        <td className="wiki-td">X</td>
                    </tr>
                </tbody>
            </table>

            {/* TRIVIA */}
            <h2 id="trivia" className="wiki-h2">Trivia</h2>
            <ul className="wiki-ul">
              <li className="wiki-li">The word 'Ptarmigan' comes from the Scottish Gaelic word "tàrmachan" (<i>word meaning unknown</i>). However a 'P' was added because early ornithologists mistook the word as being of Greek origin.</li>
              <li className="wiki-li">The scientific name for the <strong>Willow Ptarmigan</strong> (<i>lagopus</i>) comes from the Latin word for "hare-footed" in reference to the bird's feathered toes.<sup>[1]</sup></li>
              <li className="wiki-li">It is the most wide spread, and numerous, Ptarmigan in the world, spanning Ireland, thru Alaska, and as far east as Quebec.</li>
              <li className="wiki-li"><strong>Willow Ptarmigan</strong> are known as "Willow Grouse" in the British Isles.</li>
              <li className="wiki-li">It molts seasonally to camouflage with its surroundings. It's brown during the summer and then turns white in the winter.</li>
              <li className="wiki-li">A sub-species of the Willow, the Red Grouse (<i>scotica</i>), is famous for keeping its reddish brown plumage year round.</li>
              <li className="wiki-li">The <strong>Willow Ptarmigan</strong> is the official state bird of Alaska.</li>
              <li className="wiki-li">The scientific name of the <strong>Willow Ptarmigan</strong>, (<i>Lagopus lagopus</i>), is together with the name of the <span className="wiki-link">Red Fox</span> (<i>Vulpes vulpes</i>), <span className="wiki-link">Fallow Deer</span> (<i>Dama dama</i>), <span className="wiki-link">Roe Deer</span> (<i>Capreolus capreolus</i>), <span className="wiki-link">American Buffalo</span> (<i>Bison bison bison</i>), <span className="wiki-link">Axis Deer</span> (<i>Axis axis</i>) <span className="wiki-link">Moose</span> (<i>Alces acles</i>), <span className="wiki-link">Greylag Goose</span> (<i>Anser anser</i>), <span className="wiki-link">Eurasian Lynx</span> (<i>Lynx lynx</i>), and the <span className="wiki-link">Harlequin Duck</span> (<i>Histrionicus histrionicus</i>) a tautonym, that means a scientific name in which both parts of the name have the same spelling.</li>
            </ul>

            {/* REFERENCES */}
            <h2 id="references" className="wiki-h2">References</h2>
            <ol className="pl-5 mb-8 text-[#6fb2e6]">
                <li className="wiki-mb-4"><span className="wiki-link">https://www.allaboutbirds.org/guide/Willow_Ptarmigan/</span></li>
            </ol>

            <AnimalsTableMini />
          </main>
        </div>
      </div>
    </div>
  );
};

export default WillowPtarmigan;