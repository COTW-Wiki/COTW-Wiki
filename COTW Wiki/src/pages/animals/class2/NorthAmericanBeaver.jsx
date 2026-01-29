import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import DrinkingZoneIcon from '../../../assets/DrinkingZoneIcon.webp';
import GatheringZoneIcon from '../../../assets/GatheringZoneIcon.webp';
import class2Icon from '../../../assets/Class2Icon.webp'; // Class 2 for Beaver
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import BeaverMain from '../../../assets/North_American_Beaver.webp';
import ShotSchemeImage from '../../../assets/North_American_Beaver_shot_scheme.webp';

// Fur Variant Images (Placeholders)
import Beaver_Albino from '../../../assets/NorthAmericanBeaver_Albino.webp';
import Beaver_DarkBrown from '../../../assets/NorthAmericanBeaver_DarkBrown.webp';
import Beaver_Leucistic from '../../../assets/NorthAmericanBeaver_Leucistic.webp';
import Beaver_LightBrown from '../../../assets/NorthAmericanBeaver_LightBrown.webp';
import Beaver_Melanistic from '../../../assets/NorthAmericanBeaver_Melanistic.webp';
import Beaver_Piebald from '../../../assets/NorthAmericanBeaver_Piebald.webp';
import Beaver_ReddishBrown from '../../../assets/NorthAmericanBeaver_ReddishBrown.webp';


const NorthAmericanBeaver = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  const needZonesData = [
    {
      name: "Askiy Ridge",
      schedule: [
        { time: "00:00 - 04:00", type: "Resting", icon: RestingZoneIcon },
        { time: "04:00 - 08:00", type: "Gathering", icon: GatheringZoneIcon }, // Using Feeding icon as placeholder for Gathering
        { time: "08:00 - 12:00", type: "Gathering", icon: GatheringZoneIcon },
        { time: "12:00 - 16:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "16:00 - 20:00", type: "Gathering", icon: GatheringZoneIcon },
        { time: "20:00 - 00:00", type: "Resting", icon: RestingZoneIcon },
      ]
    }
  ];

  // Need Zone Intro Text
  const needZoneIntro = "When resting, the beavers are under water near their lodge and nearly invisible. Resting and feeding zones leave no traces in the environment and can only be registered by spotting the beavers with binoculars. At the moment, the traces for gathering and droppings look identical so it can take some time to find a gathering zone. It is easiest to hunt beavers in their feeding zones as they are slightly in the water or on land during their gathering times.";

  // Features Table
  const features = [
    { label: "Behavior", value: "Cooperative, renowned for their dam-building skills" },
    { label: "Habitat", value: "Freshwater environments, such as rivers, streams, ponds, and lakes" },
    { label: "Senses", value: "Good vision, acute hearing and strong sense of smell" },
    { label: "Social", value: "Lives in family groups called colonies" },
    { label: "Active", value: "Mostly crepuscular, can be active during the day and night" },
    { label: "Recommended Equipment", value: "Class 2 Ammo" },
    { label: "Species", value: "Castor canadensis", italic: true, isLink: true },
    { label: "Difficulty", value: "Average" },
  ];

  // Fur Gallery Data
  const furGallery = [
    { name: "Albino", src: Beaver_Albino },
    { name: "Dark Brown", src: Beaver_DarkBrown },
    { name: "Leucistic", src: Beaver_Leucistic },
    { name: "Light Brown", src: Beaver_LightBrown },
    { name: "Melanistic", src: Beaver_Melanistic },
    { name: "Piebald", src: Beaver_Piebald },
    { name: "Reddish Brown", src: Beaver_ReddishBrown },
  ];

  // Weapons to use
  const weaponsToUseText = [
    "Any weapon with class two ammunition will give integrity for the north american beavers however the Vasquez Cyclone .45 is efficient for taking out multiple beavers within a need zone due to the quiet qualities of the gun.",
    "Other good weapons of choice include the Quist Reaper 7.62x39, the Laperriere Outrider .30-30 and the Ranger .243. (The use of hunting blinds is also highly recommended)."
  ];

  return (
    <div className="wiki-page">
      <div className="wiki-inner">
        
        {/* PAGE HEADER */}
        <div className="wiki-header">
          <span>North American Beaver</span>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">North American Beaver</div>
            <div className="wiki-sidebar-image">
              <img src={BeaverMain} alt="North American Beaver" />
            </div>
            
            <div className="wiki-sidebar-header">General Information</div>
            
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Class</span>
              <span><img src={class2Icon} alt="Class 2" className="wiki-class-icon-lg"/>2</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Difficulty</span>
              <span>1: Trivial — 5: Medium</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Trophy Type</span>
              <span>Weight</span>
              <div className="wiki-trophy-grid">
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-silver">◆ Silver</span>
                  <span>19.20</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-gold">☗ Gold</span>
                  <span>25.60</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-diamond">☗ Diamond</span>
                  <span>30.40</span>
                </div>
              </div>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Weight</span>
              16kg — 32kg<br/>
              <span className="wiki-sidebar-muted">35lbs — 71lbs</span>
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Fur</span>
               <span className="wiki-fs-sm">
                  Albino, Dark Brown, Leucistic, Light Brown, Melanistic, Piebald, Reddish Brown
               </span>
            </div>

            <div className="wiki-sidebar-header">Locations</div>
            <div className="wiki-sidebar-section">
               <div className="wiki-mb-4"><span className="wiki-link">Askiy Ridge Hunting Preserve</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main className="wiki-main">

            {/* Quote Block */}
            <div className="wiki-quote">
              "North American beavers have stocky bodies with a yellow-brown to almost black coat and a broad, flat, scaly tail. They have webbed rear feet and digitated front paws. Beavers regularly move between aquatic and terrestrial environments. Their small, dexterous front feet are well adapted to working on land. They walk on five digits, grasp sticks with their front paws and have well-developed digging claws.
              <br/><br/>
              A beaver's long, dark-orange, visible incisors grow continuously throughout its life and are worn down through daily use. These teeth are self-sharpening and can cleave a willow the size of a person's finger in a single bite."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-p-mb">
              The <strong>North American Beaver</strong> is a small <span className="wiki-link">class 2</span> rodent that can be hunted on <span className="wiki-link">Askiy Ridge Hunting Preserve</span>.
            </p>

            {/* Table of Contents */}
            <div className="wiki-toc">
              <div className="wiki-toc-title">
                🔢 Contents <span className="wiki-toc-toggle">[hide]</span>
              </div>
              <ol className="wiki-toc">
                <li><a href="#features" className="wiki-link" onClick={scrollToId('features')}>Features</a></li>
                <li><a href="#need-zones" className="wiki-link" onClick={scrollToId('need-zones')}>Need Zone Times</a></li>
                <li><a href="#shot-scheme" className="wiki-link" onClick={scrollToId('shot-scheme')}>Shot scheme</a></li>
                <li><a href="#fur-variants" className="wiki-link" onClick={scrollToId('fur-variants')}>Fur variants</a></li>
                <li><a href="#fur-variant-rarity" className="wiki-link" onClick={scrollToId('fur-variant-rarity')}>Fur Variant Rarity</a></li>
                <li><a href="#weapons-to-use" className="wiki-link" onClick={scrollToId('weapons-to-use')}>Weapons to use</a></li>
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
            <p style={{marginBottom: '15px', fontSize: '0.9rem'}}>{needZoneIntro}</p>
            <div className="wiki-inline-block">
                <table className="wiki-table wiki-table-fixed">
                    <thead>
                        <tr><th colSpan="2" className="wiki-th wiki-th-center">Askiy Ridge</th></tr>
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
             <h2 id="shot-scheme" className="wiki-h2">Shot Scheme</h2>
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
                                Male/<span className="wiki-text-female">Female</span>
                            </td>
                            <td className="wiki-td">
                                Light Brown (74.70%)<br/>
                                Dark Brown (12.50%)<br/>
                                Reddish Brown (12.50%)
                            </td>
                            <td className="wiki-td">X</td>
                            <td className="wiki-td">
                                Piebald (0.20%)
                            </td>
                            <td className="wiki-td">
                                Albino (0.03%)<br/>
                                Leucistic (0.03%)<br/>
                                Melanistic (0.03%)
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* WEAPONS TO USE */}
            <h2 id="weapons-to-use" className="wiki-h2">Weapons to use</h2>
            {weaponsToUseText.map((paragraph, idx) => (
                <p key={idx} className="wiki-mb-15" dangerouslySetInnerHTML={{__html: paragraph.replace(/Vasquez Cyclone .45|Quist Reaper 7.62x39|Laperriere Outrider .30-30|Ranger .243/g, (match) => `<span style="color: #6fb2e6; cursor: pointer;">${match}</span>`)}} />
            ))}

            {/* TRIVIA (Placeholder as no content provided in screenshot) */}

            <div className="wiki-mt-40">
                <AnimalsTableMini />
            </div>
            
          </main>
        </div>
      </div>
    </div>
  );
};

export default NorthAmericanBeaver;