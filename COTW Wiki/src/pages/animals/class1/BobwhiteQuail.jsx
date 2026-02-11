import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import class1Icon from '../../../assets/Class1Icon.webp';
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import BobwhiteQuailMain from '../../../assets/BobwhiteQuail.webp';

// Shot Scheme
import BobwhiteQuail_ShotScheme from '../../../assets/Bobwhite_Quail_shot_scheme.webp';

// Male Plumage Images
import BobwhiteQuail_AlbinoMaleFront from '../../../assets/BobwhiteQuail_AlbinoMaleFront.webp';
import BobwhiteQuail_AlbinoMaleBack from '../../../assets/BobwhiteQuail_AlbinoMaleBack.webp';
import BobwhiteQuail_BrownMaleFront from '../../../assets/BobwhiteQuail_BrownMaleFront.webp';
import BobwhiteQuail_BrownMaleBack from '../../../assets/BobwhiteQuail_BrownMaleBack.webp';
import BobwhiteQuail_RedbrownMaleFront from '../../../assets/BobwhiteQuail_RedbrownMaleFront.webp';
import BobwhiteQuail_RedbrownMaleBack from '../../../assets/BobwhiteQuail_RedbrownMaleBack.webp';
import BobwhiteQuail_GreyMaleFront from '../../../assets/BobwhiteQuail_GreyMaleFront.webp';
import BobwhiteQuail_GreyMaleBack from '../../../assets/BobwhiteQuail_GreyMaleBack.webp';

// Female Plumage Images
import BobwhiteQuail_AlbinoFemaleFront from '../../../assets/BobwhiteQuail_AlbinoFemaleFront.webp';
import BobwhiteQuail_AlbinoFemaleBack from '../../../assets/BobwhiteQuail_AlbinoFemaleBack.webp';
import BobwhiteQuail_BrownFemaleFront from '../../../assets/BobwhiteQuail_BrownFemaleFront.webp';
import BobwhiteQuail_BrownFemaleBack from '../../../assets/BobwhiteQuail_BrownFemaleBack.webp';


const BobwhiteQuail = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  const needZones = [
    { time: "00:00 - 04:30", type: "Resting", icon: RestingZoneIcon },
    { time: "04:00 - 07:30", type: "Feeding", icon: FeedingZoneIcon },
    { time: "07:00 - 10:30", type: "Feeding", icon: FeedingZoneIcon },
    { time: "10:00 - 13:30", type: "Resting", icon: RestingZoneIcon },
    { time: "13:00 - 16:30", type: "Feeding", icon: FeedingZoneIcon },
    { time: "16:00 - 20:30", type: "Feeding", icon: FeedingZoneIcon },
    { time: "20:00 - 00:30", type: "Resting", icon: RestingZoneIcon },
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Gregarious and Skittish" },
    { label: "Habitat", value: "Grasslands, fields and sparse woodlands" },
    { label: "Senses", value: "Good vision and hearing, weak smell" },
    { label: "Social", value: "Lives in small groups to Large Groups (3-20)" },
    { label: "Active", value: "Early Morning and late Afternoon" },
    { label: "Recommended Equipment", value: "Class 1 ammo" },
    { label: "Species", value: "Colinus virginianus", italic: true, isLink: true },
    { label: "Difficulty", value: "Easy" },
  ];

  // Plumage Gallery Data
  const plumageGallery = {
    male: [
      { name: "Albino - Front", src: BobwhiteQuail_AlbinoMaleFront },
      { name: "Albino - Back", src: BobwhiteQuail_AlbinoMaleBack },
      { name: "Brown - Front", src: BobwhiteQuail_BrownMaleFront },
      { name: "Brown - Back", src: BobwhiteQuail_BrownMaleBack },
      { name: "Redbrown - Front", src: BobwhiteQuail_RedbrownMaleFront },
      { name: "Redbrown - Back", src: BobwhiteQuail_RedbrownMaleBack },
      { name: "Grey - Front", src: BobwhiteQuail_GreyMaleFront },
      { name: "Grey - Back", src: BobwhiteQuail_GreyMaleBack },
    ],
    female: [
      { name: "Albino - Front", src: BobwhiteQuail_AlbinoFemaleFront },
      { name: "Albino - Back", src: BobwhiteQuail_AlbinoFemaleBack },
      { name: "Brown - Front", src: BobwhiteQuail_BrownFemaleFront },
      { name: "Brown - Back", src: BobwhiteQuail_BrownFemaleBack },
    ]
  };

  return (
    <div className="wiki-page">
      <div className="wiki-inner">
        
        {/* PAGE HEADER */}
        <div className="wiki-header">
          <span>Bobwhite Quail</span>
          <div className="wiki-edit-actions">
          </div>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Bobwhite Quail</div>
            <div className="wiki-sidebar-image">
              <img src={BobwhiteQuailMain} alt="Bobwhite Quail" />
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
              <span>Combined</span>
              <div className="wiki-trophy-grid">
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-silver">◆ Silver</span>
                  <span>154</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-gold">☗ Gold</span>
                  <span>202</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-diamond">☗ Diamond</span>
                  <span>238</span>
                </div>
              </div>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Weight</span>
              130g — 250g<br/>
              0.3lbs — 0.6lbs
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Plumage</span>
               <span className="wiki-fs-sm">
                  Albino, Brown, Grey, Red Brown
               </span>
            </div>

            <div className="wiki-sidebar-header">Locations</div>
            <div className="wiki-sidebar-section">
               <div className="wiki-mb-4"><span className="wiki-link">Mississippi Acres Preserve</span></div>
               <div className="wiki-mb-4"><span className="wiki-link">New England Mountains</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main className="wiki-main">

            {/* Quote Block */}
            <div className="wiki-quote">
              "The Northern bobwhite quail, so-named after its distinctive calls, is a staple game bird widespread across parts of Mexico and most of the Eastern USA. Although still numerous, their wild population is declining quickly due to habitat degradation. Bobwhite quails are gregarious and live in groups called coveys most of the year. During the mating season, starting in spring, males fight to form breeding pairs with females. Both males and females can mate with several partner and raise up to 2 or 3 broods in a single season. Like other species of quails, bobwhite quails hide in thick vegetation when they feel threatened and need to be flushed out by hunters. Their mottled plumage is well adapted for this strategy and makes them hard to spot in the brush."
              <br/><br/>
              ― In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-p-mb">
              The <strong>Bobwhite Quail</strong> is a <span className="wiki-link">class 1</span> quail species that can be hunted on <span className="wiki-link">Mississippi Acres Preserve</span> and <span className="wiki-link">New England Mountains</span>.
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
                  <a href="#tips" className="wiki-link" onClick={(e)=>{e.preventDefault(); document.getElementById('tips')?.scrollIntoView({behavior:'smooth', block:'start'});}}>Tips</a>
                </li>
                <li>
                  <a href="#plumage-variants" className="wiki-link" onClick={(e)=>{e.preventDefault(); document.getElementById('plumage-variants')?.scrollIntoView({behavior:'smooth', block:'start'});}}>Plumage variants</a>
                    <ul>
                      <li className="text-[#6fb2e6]"><a href="#plumage-male" className="wiki-link" onClick={(e)=>{e.preventDefault(); document.getElementById('plumage-male')?.scrollIntoView({behavior:'smooth', block:'start'});}}>5.1. Male</a></li>
                      <li className="text-[#6fb2e6]"><a href="#plumage-female" className="wiki-link" onClick={(e)=>{e.preventDefault(); document.getElementById('plumage-female')?.scrollIntoView({behavior:'smooth', block:'start'});}}>5.2. Female</a></li>
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
                        {/* Note: Screenshot does not specify map name for need zones, leaving blank header or generic */}
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
                      <img src={BobwhiteQuail_ShotScheme} alt="Bobwhite Quail X-ray shot scheme" />
                    </div>
                    <div className="wiki-shot-info">
                      No Color - Every hit will kill the animal
                    </div>
                  </div>
            </div>

            {/* TIPS */}
            <h2 id="tips" className="wiki-h2">Tips</h2>
            <div className="wiki-mb-20">
                The "Grounded" Concept of the <span className="wiki-link">Ring-Necked Pheasant</span> applies to the Bobwhite Quail. Shooting it on the ground results in a score of 0.
            </div>

            {/* PLUMAGE VARIANTS (Gallery) */}
            <h2 id="plumage-variants" className="wiki-h2">Plumage variants</h2>
            
            {/* Male Section */}
            <h3 id="plumage-male" className="wiki-h3 text-[1.2rem] mt-2 border-b-0">Male</h3>
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
            <h3 id="plumage-female" className="wiki-h3 text-[1.2rem] mt-2 border-b-0">Female</h3>
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
                            Red Brown (33.33%),<br/>
                            Grey (33.33%),<br/>
                            Brown (33.33%)
                        </td>
                        <td className="wiki-td">X</td>
                        <td className="wiki-td">X</td>
                        <td className="wiki-td">
                            Albino (0.003%)
                        </td>
                    </tr>
                     <tr>
                        <td className="wiki-td wiki-td-female">Female</td>
                        <td className="wiki-td">
                            Brown (99.99%)
                        </td>
                        <td className="wiki-td">X</td>
                        <td className="wiki-td">X</td>
                        <td className="wiki-td">
                            Albino (0.008%)
                        </td>
                    </tr>
                </tbody>
            </table>

            {/* TRIVIA */}
            <h2 id="trivia" className="wiki-h2">Trivia</h2>
            <ul className="wiki-ul">
              <li className="wiki-li">There are 22 subspecies of Bobwhite Quail.<sup>[1]</sup></li>
              <li className="wiki-li">It is also called <i>Virginia Quail</i> and <i>Northern Bobwhite</i>.<sup>[2]</sup></li>
              <li className="wiki-li">The name <i>bobwhite</i> comes from their whistling calls that make the sound <i>bob-white</i> and <i>bob-bob-white</i>.<sup>[3]</sup></li>
            </ul>

            {/* REFERENCES */}
            <h2 id="references" className="wiki-h2">References</h2>
            <ol className="pl-5 mb-8 text-[#6fb2e6]">
                <li className="wiki-mb-4"><span className="wiki-link">allaboutbirds.org</span></li>
                <li className="wiki-mb-4"><span className="wiki-link">animalia.bio</span></li>
                <li className="wiki-mb-4"><span className="wiki-link">animalia.bio</span></li>
            </ol>

            <AnimalsTableMini />
          </main>
        </div>
      </div>
    </div>
  );
};

export default BobwhiteQuail;