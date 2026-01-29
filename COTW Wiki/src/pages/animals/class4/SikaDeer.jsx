import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import DrinkingZoneIcon from '../../../assets/DrinkingZoneIcon.webp';
import class4Icon from '../../../assets/Class4Icon.webp'; // Class 4 for Sika Deer
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import SikaDeerMain from '../../../assets/SikaDeer.webp';

// Fur Variant Images (Placeholders)
import SikaDeer_AlbinoMale from '../../../assets/SikaDeer_AlbinoMale.webp';
import SikaDeer_BlackMale from '../../../assets/SikaDeer_BlackMale.webp';
import SikaDeer_BrownMale from '../../../assets/SikaDeer_BrownMale.webp';
import SikaDeer_DarkSpottedMale from '../../../assets/SikaDeer_DarkSpottedMale.webp';
import SikaDeer_RedSpottedMale from '../../../assets/SikaDeer_RedSpottedMale.webp';
import SikaDeer_SpottedMale from '../../../assets/SikaDeer_SpottedMale.webp';

import SikaDeer_AlbinoFemale from '../../../assets/SikaDeer_AlbinoFemale.webp';
import SikaDeer_BlackFemale from '../../../assets/SikaDeer_BlackFemale.webp';
import SikaDeer_BrownFemale from '../../../assets/SikaDeer_BrownFemale.webp';
import SikaDeer_DarkSpottedFemale from '../../../assets/SikaDeer_DarkSpottedFemale.webp';
import SikaDeer_RedSpottedFemale from '../../../assets/SikaDeer_RedSpottedFemale.webp';
import SikaDeer_SpottedFemale from '../../../assets/SikaDeer_SpottedFemale.webp';


// --- ASSET ALIASES ---
// Map generic gallery identifiers to the actual imported male/female assets
const SikaDeer_Albino = SikaDeer_AlbinoMale;
const SikaDeer_Black = SikaDeer_BlackMale;
const SikaDeer_Brown = SikaDeer_BrownMale;
const SikaDeer_DarkSpotted = SikaDeer_DarkSpottedMale;
const SikaDeer_RedSpotted = SikaDeer_RedSpottedMale;
const SikaDeer_Spotted = SikaDeer_SpottedMale;

const SikaDeer = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  const needZonesData = [
    {
      name: "Te Awaroa National Park",
      schedule: [
        { time: "00:00 - 05:30", type: "Resting", icon: RestingZoneIcon },
        { time: "05:00 - 09:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "10:00 - 13:00", type: "Drinking", icon: DrinkingZoneIcon },
        { time: "11:30 - 14:30", type: "Resting", icon: RestingZoneIcon },
        { time: "14:00 - 18:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "17:30 - 21:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "21:00 - 00:00", type: "Resting", icon: RestingZoneIcon },
      ]
    }
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Elusive and cunning, highly vocal" },
    { label: "Habitat", value: "Subtropical forests with dense understory" },
    { label: "Senses", value: "Excellent hearing and smell, average vision" },
    { label: "Social", value: "Single sex groups, small groups of Hinds with Yearling females and fawns" },
    { label: "Active", value: "Dawn and Dusk" },
    { label: "Recommended Equipment", value: "Class 4 Ammo, Deer \"Bleat\" Caller, Deer \"Grunt\" Caller, Buck \"Snort Wheeze\" Caller, Red Deer Caller, Red Deer Scent Lure" },
    { label: "Species", value: "Cervus nippon", italic: true, isLink: true },
    { label: "Difficulty", value: "Easy" },
  ];

  // Fur Gallery Data (split by sex)
  const maleGallery = [
    { name: "Albino", src: SikaDeer_AlbinoMale },
    { name: "Black", src: SikaDeer_BlackMale },
    { name: "Brown", src: SikaDeer_BrownMale },
    { name: "Dark Spotted", src: SikaDeer_DarkSpottedMale },
    { name: "Red Spotted", src: SikaDeer_RedSpottedMale },
    { name: "Spotted", src: SikaDeer_SpottedMale },
  ];

  const femaleGallery = [
    { name: "Albino", src: SikaDeer_AlbinoFemale },
    { name: "Black", src: SikaDeer_BlackFemale },
    { name: "Brown", src: SikaDeer_BrownFemale },
    { name: "Dark Spotted", src: SikaDeer_DarkSpottedFemale },
    { name: "Red Spotted", src: SikaDeer_RedSpottedFemale },
    { name: "Spotted", src: SikaDeer_SpottedFemale },
  ];

  // Trivia Data
  const triviaData = [
    "The Sika Deer gets its name from the Japanese word for deer/shika (鹿)",
    "The scientific name for the Sika Deer (Cervus nippon) can literally be translated as \"Deer Japan\", or \"Japanese Deer\". Although it is believed that the original meaning of the word 'Cervus' was \"Horned\".",
    "Famous samurai 'Honda Tadakatsu' wore a black helmet adorned with replica Sika Deer antlers."
  ];

  return (
    <div className="wiki-page">
      <div className="wiki-inner">
        
        {/* PAGE HEADER */}
        <div className="wiki-header">
          <span>Sika Deer</span>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Sika Deer</div>
            <div className="wiki-sidebar-image">
              <img src={SikaDeerMain} alt="Sika Deer" />
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
                  <span>53.29</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-gold">☗ Gold</span>
                  <span>136.40</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-diamond">☗ Diamond</span>
                  <span>198.74</span>
                </div>
              </div>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Weight</span>
              25kg — 75kg<br/>
              <span className="wiki-sidebar-muted">55lbs — 165lbs</span>
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Fur</span>
               <span className="wiki-fs-sm">
                 Albino, Black, Brown, Dark Spotted, Red Spotted, Spotted
               </span>
            </div>

            <div className="wiki-sidebar-header">Locations</div>
            <div className="wiki-sidebar-section">
               <div className="wiki-mb-4"><span className="wiki-link">Te Awaroa National Park</span></div>
               <div className="wiki-mb-4"><span className="wiki-link">Tòrr nan Sithean</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main className="wiki-main">

            {/* Quote Block */}
            <div className="wiki-quote">
              "The sika deer (Cervus nippon) also known as the spotted deer or the Japanese deer, is a species of deer native to much of East Asia, and introduced to various other parts of the world. Previously found from northern Vietnam in the south to the Russian Far East in the north, it is now uncommon in these areas, excluding Japan, where the species is overabundant. A cunning, deer similar to that of a whitetail they inhabit native manuka and timber for most of the day venturing out in the evenings to late morning."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-p-mb">
              The <strong>Sika Deer</strong> is a class 4 deer. It can be hunted in <span className="wiki-link">Te Awaroa National Park</span> and <span className="wiki-link">Tòrr nan Sithean</span>.
            </p>

            {/* Table of Contents */}
            <div className="wiki-toc">
              <div className="wiki-toc-title">
                🔢 Contents <span className="wiki-toc-toggle">[hide]</span>
              </div>
              <ol className="wiki-toc">
                <li><a href="#features" onClick={(e)=>scrollToId(e,'features')} className="wiki-link">Features</a></li>
                <li><a href="#need-zones" onClick={(e)=>scrollToId(e,'need-zones')} className="wiki-link">Need Zone Times</a></li>
                <li><a href="#tips" onClick={(e)=>scrollToId(e,'tips')} className="wiki-link">Tips</a></li>
                <li><a href="#fur-variants" onClick={(e)=>scrollToId(e,'fur-variants')} className="wiki-link">Fur Variants</a>
                  <ol style={{marginTop:'6px', marginLeft:'-28px', listStyleType: 'none', color: '#9fd3ff'}}>
                    <li><a href="#fur-male" onClick={(e)=>scrollToId(e,'fur-male')} className="wiki-link">4.1 Male</a></li>
                    <li><a href="#fur-female" onClick={(e)=>scrollToId(e,'fur-female')} className="wiki-link">4.2 Female</a></li>
                  </ol>
                </li>
                <li><a href="#fur-rarity" onClick={(e)=>scrollToId(e,'fur-rarity')} className="wiki-link">Fur Variant Rarity</a></li>
                <li><a href="#trivia" onClick={(e)=>scrollToId(e,'trivia')} className="wiki-link">Trivia</a></li>
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
                        <tr><th colSpan="2" className="wiki-th wiki-th-center">Te Awaroa National Park</th></tr>
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

            {/* Shot scheme removed per request */}

            {/* TIPS */}
            <h2 id="tips" className="wiki-h2">Tips</h2>
            <div style={{fontSize:'0.95rem', marginBottom:'18px', color: '#dbe4eb'}}>
              <p>
                Among many other locations, the Sika Deer can be found at the Te Tai Pounamu, in the Invercraig Regions, at The Bay Of Rest and in the Waikerera River Region.
              </p>
            </div>

            {/* FUR VARIANTS (Gallery) */}
            <h2 id="fur-variants" className="wiki-h2">Fur Variants</h2>

            <h3 id="fur-male" style={{marginTop:'10px', marginBottom:'8px', color: '#6fb2e6'}}>Male</h3>
            <div className="wiki-gallery-grid">
              {maleGallery.map((item, i) => (
                <div key={i} className="wiki-gallery-item">
                  <div className="wiki-gallery-placeholder">
                    <img src={item.src} alt={item.name} className="wiki-img-contain" />
                  </div>
                  <span className="wiki-gallery-label">{item.name}</span>
                </div>
              ))}
            </div>

            <h3 id="fur-female" className="wiki-h3">Female</h3>
            <div className="wiki-gallery-grid">
              {femaleGallery.map((item, i) => (
                <div key={i} className="wiki-gallery-item">
                  <div className="wiki-gallery-placeholder">
                    <img src={item.src} alt={item.name} className="wiki-img-contain" />
                  </div>
                  <span className="wiki-gallery-label">{item.name}</span>
                </div>
              ))}
            </div>

            {/* FUR VARIANT RARITY TABLE */}
            <h2 id="fur-rarity" className="wiki-h2">Fur Variant Rarity</h2>
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
                                Male<span className="wiki-text-divider">/</span><span className="wiki-text-female">Female</span>
                            </td>
                            <td className="wiki-td">
                                Black (37.35%)<br/>
                                Brown (37.35%)<br/>
                                Dark Spotted (12.50%)<br/>
                                Spotted (12.50%)
                            </td>
                            <td className="wiki-td">
                                X
                            </td>
                            <td className="wiki-td">
                                Red Spotted (0.20%)<br/>
                                Albino (0.10%)
                            </td>
                            <td className="wiki-td">
                                X
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

export default SikaDeer;