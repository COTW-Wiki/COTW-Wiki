import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import class1Icon from '../../../assets/Class1Icon.webp';
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import StubbleQuailMain from '../../../assets/StubbleQuail.webp';

// Shot Scheme
import StubbleQuail_ShotScheme from '../../../assets/Stubble_Quail_shot_scheme.webp';

// Male Plumage Images
import StubbleQuail_AlbinoMaleFront from '../../../assets/StubbleQuail_AlbinoMaleFront.webp';
import StubbleQuail_AlbinoMaleBack from '../../../assets/StubbleQuail_AlbinoMaleBack.webp';
import StubbleQuail_BrownMaleFront from '../../../assets/StubbleQuail_BrownMaleFront.webp';
import StubbleQuail_BrownMaleBack from '../../../assets/StubbleQuail_BrownMaleBack.webp';
import StubbleQuail_DarkBrownMaleFront from '../../../assets/StubbleQuail_DarkBrownMaleFront.webp';
import StubbleQuail_DarkBrownMaleBack from '../../../assets/StubbleQuail_DarkBrownMaleBack.webp';
import StubbleQuail_GreyBrownMaleFront from '../../../assets/StubbleQuail_GreyBrownMaleFront.webp';
import StubbleQuail_GreyBrownMaleBack from '../../../assets/StubbleQuail_GreyBrownMaleBack.webp';

// Female Plumage Images
import StubbleQuail_AlbinoFemaleFront from '../../../assets/StubbleQuail_AlbinoFemaleFront.webp';
import StubbleQuail_AlbinoFemaleBack from '../../../assets/StubbleQuail_AlbinoFemaleBack.webp';
import StubbleQuail_GreyFemaleFront from '../../../assets/StubbleQuail_GreyFemaleFront.webp';
import StubbleQuail_GreyFemaleBack from '../../../assets/StubbleQuail_GreyFemaleBack.webp';
import StubbleQuail_GreyBrownFemaleFront from '../../../assets/StubbleQuail_GreyBrownFemaleFront.webp';
import StubbleQuail_GreyBrownFemaleBack from '../../../assets/StubbleQuail_GreyBrownFemaleBack.webp';


const StubbleQuail = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  const needZones = [
    { time: "00:00 - 04:00", type: "Resting", icon: RestingZoneIcon },
    { time: "04:00 - 07:00", type: "Feeding", icon: FeedingZoneIcon },
    { time: "07:00 - 10:00", type: "Feeding", icon: FeedingZoneIcon },
    { time: "10:00 - 13:00", type: "Resting", icon: RestingZoneIcon },
    { time: "13:00 - 16:00", type: "Feeding", icon: FeedingZoneIcon },
    { time: "16:00 - 20:00", type: "Feeding", icon: FeedingZoneIcon },
    { time: "20:00 - 00:00", type: "Resting", icon: RestingZoneIcon },
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Gregarious and skittish" },
    { label: "Habitat", value: "Open grassland with dense vegetation" },
    { label: "Senses", value: "Good vision and hearing, weak smell" },
    { label: "Social", value: "Lives in large groups" },
    { label: "Active", value: "Early morning and late afternoon" },
    { label: "Recommended Equipment", value: "Class 1 Ammo" },
    { label: "Species", value: "Coturnix pectoralis", italic: true, isLink: true },
    { label: "Difficulty", value: "Easy" },
  ];

  // Plumage Gallery Data
  const plumageGallery = {
    male: [
      { name: "Albino - Front", src: StubbleQuail_AlbinoMaleFront },
      { name: "Albino - Back", src: StubbleQuail_AlbinoMaleBack },
      { name: "Brown - Front", src: StubbleQuail_BrownMaleFront },
      { name: "Brown - Back", src: StubbleQuail_BrownMaleBack },
      { name: "Dark Brown - Front", src: StubbleQuail_DarkBrownMaleFront },
      { name: "Dark Brown - Back", src: StubbleQuail_DarkBrownMaleBack },
      { name: "Grey Brown - Front", src: StubbleQuail_GreyBrownMaleFront },
      { name: "Grey Brown - Back", src: StubbleQuail_GreyBrownMaleBack },
    ],
    female: [
      { name: "Albino - Front", src: StubbleQuail_AlbinoFemaleFront },
      { name: "Albino - Back", src: StubbleQuail_AlbinoFemaleBack },
      { name: "Grey - Front", src: StubbleQuail_GreyFemaleFront },
      { name: "Grey - Back", src: StubbleQuail_GreyFemaleBack },
      { name: "Grey Brown - Front", src: StubbleQuail_GreyBrownFemaleFront },
      { name: "Grey Brown - Back", src: StubbleQuail_GreyBrownFemaleBack },
    ]
  };

  return (
    <div className="wiki-page">
      <div className="wiki-inner">
        
        {/* PAGE HEADER */}
        <div className="wiki-header">
          <span>Stubble Quail</span>
          <div className="wiki-edit-actions">
          </div>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Stubble Quail</div>
            <div className="wiki-sidebar-image">
              <img src={StubbleQuailMain} alt="Stubble Quail" />
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
                  <span>98</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-gold">☗ Gold</span>
                  <span>114</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-diamond">☗ Diamond</span>
                  <span>126</span>
                </div>
              </div>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Weight</span>
              0.10kg — 0.13kg<br/>
              0lbs — 0lbs
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Plumage</span>
               <span className="wiki-fs-sm">
                  Albino, Brown, Dark Brown, Grey Brown
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
              "The stubble quail is a native Australian species, characterized by its dark brown feathers with a cream-colored strip down the center of each feather. The stubble quail is a plump species, larger than other native quails. Male birds will mature at about 0.18 m - 0.19 m long and females are slightly larger. Adult males weigh around 0.10 kg and the females around 0.11 kg with both sexes having a wingspan of between 0.25 m -0.33 m.
              Stubble quail are adaptive birds found in a diverse range of habitats.
              They prefer dense vegetation where the scratch around on the ground for seeds, grasses, and foliage.
              Usually found in well-watered areas, they can also prosper in very arid areas."
              <br/><br/>
              ― In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-p-mb">
              The <strong>Stubble Quail</strong> is a (<span className="wiki-link">class 1</span>) quail species that can be hunted on <span className="wiki-link">Emerald Coast</span>.
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
                  <a href="#shot-scheme" className="wiki-link" onClick={(e)=>{e.preventDefault(); document.getElementById('shot-scheme')?.scrollIntoView({behavior:'smooth', block:'start'});}}>Shot scheme</a>
                </li>
                <li>
                  <a href="#plumage-variants" className="wiki-link" onClick={(e)=>{e.preventDefault(); document.getElementById('plumage-variants')?.scrollIntoView({behavior:'smooth', block:'start'});}}>Plumage Variants</a>
                    <ul >
                        <li className="text-[#6fb2e6]"><a href="#plumage-male" className="wiki-link" onClick={(e)=>{e.preventDefault(); document.getElementById('plumage-male')?.scrollIntoView({behavior:'smooth', block:'start'});}}>4.1. Male</a></li>
                        <li className="text-[#6fb2e6]"><a href="#plumage-female" className="wiki-link" onClick={(e)=>{e.preventDefault(); document.getElementById('plumage-female')?.scrollIntoView({behavior:'smooth', block:'start'});}}>4.2. Female</a></li>
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
                        <tr><th colSpan="2" className="wiki-th wiki-th-center">Emerald Coast<sup style={{fontSize:'0.7rem', fontWeight:'normal'}}>[1]</sup></th></tr>
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

            {/* SHOT SCHEME */}
            <h2 id="shot-scheme" className="wiki-h2">Shot scheme</h2>
            <div className="wiki-shot-wrap">
                <div className="wiki-shot-title">Color code</div>
                  <div className="wiki-shot-container">
                    <div className="wiki-shot-image">
                      <img src={StubbleQuail_ShotScheme} alt="Stubble Quail X-ray shot scheme" />
                    </div>
                    <div className="wiki-shot-info">
                      No Color - Every hit will kill the animal
                    </div>
                  </div>
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
                            Grey Brown (49.60%),<br/>
                            Brown (49.60%)
                        </td>
                        <td className="wiki-td">X</td>
                        <td className="wiki-td">
                            Dark Brown (0.53%),<br/>
                            Albino (0.27%)
                        </td>
                        <td className="wiki-td">X</td>
                    </tr>
                     <tr>
                        <td className="wiki-td wiki-td-female">Female</td>
                        <td className="wiki-td">
                            Grey (49.87%),<br/>
                            Grey Brown (49.87%)
                        </td>
                        <td className="wiki-td">X</td>
                        <td className="wiki-td">
                            Albino (0.37%)
                        </td>
                        <td className="wiki-td">X</td>
                    </tr>
                </tbody>
            </table>

            {/* TRIVIA */}
            <h2 id="trivia" className="wiki-h2">Trivia</h2>
            <ul className="wiki-ul">
              <li className="wiki-li">The <strong>Stubble Quail</strong> is the smallest animal huntable in game, with a top end weight estimate of only 130 grams. By comparison the next smallest animal, the <span className="wiki-link">Bobwhite Quail</span>, is almost TWICE as big, with a top end estimate of 250 grams.</li>
              <li className="wiki-li">Despite it being called a Quail, the term 'QUAIL' actually has little relevance to the relation of animals. In fact, the <strong>Stubble Quail</strong> is more closely related to the North American <span className="wiki-link">Turkey</span>, than it is to the <strong>Bobwhite Quail</strong>. This is because both the <strong>Stubble Quail</strong> and the <strong>Turkey</strong> belong to the same family <i>Phasianidae</i>. While the Bobwhite Quail belongs to a different family <i>Odontophoridae</i>.<sup>[2][3]</sup></li>
              <li className="wiki-li">It is the most common quail species in Australia.<sup>[4]</sup></li>
            </ul>

            {/* REFERENCES */}
            <h2 id="references" className="wiki-h2">References</h2>
            <ol className="pl-5 mb-8 text-[#6fb2e6]">
                <li className="wiki-mb-4">Stubble Quail Need Zones, Emerald Coast</li>
                <li className="wiki-mb-4"><span className="wiki-link">https://en.wikipedia.org/wiki/Phasianidae</span></li>
                <li className="wiki-mb-4"><span className="wiki-link">https://en.wikipedia.org/wiki/New_World_quail</span></li>
                <li className="wiki-mb-4"><span className="wiki-link">https://avibase.bsc-eoc.org/species.jsp?avibaseid=98984CAD4C432E69</span></li>
            </ol>

            <AnimalsTableMini />
          </main>
        </div>
      </div>
    </div>
  );
};

export default StubbleQuail;