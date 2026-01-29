import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import DrinkingZoneIcon from '../../../assets/DrinkingZoneIcon.webp';
import class4Icon from '../../../assets/Class4Icon.webp'; // Class 4 for Tahr
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import TahrMain from '../../../assets/Himalayan_Tahr.webp';
import ShotSchemeImg from '../../../assets/Himalayan_Tahr_shot_scheme.webp';

// Fur Variant Images (Placeholders based on screenshots)
// Male
import Tahr_AlbinoMale from '../../../assets/Tahr_AlbinoMale.webp';
import Tahr_BlackMale from '../../../assets/Tahr_BlackMale.webp';
import Tahr_DarkBrownMale from '../../../assets/Tahr_DarkBrownMale.webp';
import Tahr_DarkRedMale from '../../../assets/Tahr_DarkRedMale.webp';
import Tahr_LightBrownMale from '../../../assets/Tahr_LightBrownMale.webp';
import Tahr_RedMale from '../../../assets/Tahr_RedMale.webp';
import Tahr_RedBrownMale from '../../../assets/Tahr_RedBrownMale.webp';
import Tahr_StrawMale from '../../../assets/Tahr_StrawMale.webp';
import Tahr_WhiteMale from '../../../assets/Tahr_WhiteMale.webp';

// Female
import Tahr_AlbinoFemale from '../../../assets/Tahr_AlbinoFemale.webp';
import Tahr_LightBrownFemale from '../../../assets/Tahr_LightBrownFemale.webp';
import Tahr_RedFemale from '../../../assets/Tahr_RedFemale.webp';
import Tahr_RedBrownFemale from '../../../assets/Tahr_RedBrownFemale.webp';
import Tahr_StrawFemale from '../../../assets/Tahr_StrawFemale.webp';
import Tahr_WhiteFemale from '../../../assets/Tahr_WhiteFemale.webp';

// Great One (Fabled)
import Tahr_FabledGoldLeftSide from '../../../assets/Tahr_FabledGoldLeftSide.webp';
import Tahr_FabledGrayLeftSide from '../../../assets/Tahr_FabledGrayLeftSide.webp';
import Tahr_FabledHalfLeftSide from '../../../assets/Tahr_FabledHalfLeftSide.webp';
import Tahr_FabledLatteLeftSide from '../../../assets/Tahr_FabledLatteLeftSide.webp';
import Tahr_FabledScarsLeftSide from '../../../assets/Tahr_FabledScarsLeftSide.webp';
import Tahr_FabledScarsRightSide from '../../../assets/Tahr_FabledScarsRightSide.webp';
import Tahr_FabledSkullLeftSide from '../../../assets/Tahr_FabledSkullLeftSide.webp';
import Tahr_FabledSnowLeftSide from '../../../assets/Tahr_FabledSnowLeftSide.webp';


const Tahr = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  const needZonesData = [
    {
      name: "Sundarpatan",
      schedule: [
        { time: "00:00 - 04:00", type: "Resting", icon: RestingZoneIcon },
        { time: "04:00 - 07:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "07:00 - 11:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "11:00 - 14:00", type: "Resting", icon: RestingZoneIcon },
        { time: "14:00 - 17:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "17:00 - 20:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "20:00 - 00:00", type: "Resting", icon: RestingZoneIcon },
      ]
    }
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Inquisitive but easily unnerved" },
    { label: "Habitat", value: "Alpine terrain, meadows, scrub forests" },
    { label: "Senses", value: "Excellent vision, very good hearing and smell" },
    { label: "Social", value: "Lives in large groups, males tend to be solitary or form bachelor groups" },
    { label: "Active", value: "Morning and late afternoon" },
    { label: "Recommended Equipment", value: "Class 4 Ammo" },
    { label: "Species", value: "Hemitragus jemlahicus", italic: true, isLink: true },
    { label: "Difficulty", value: "Average" },
  ];

  // Fur Gallery Data
  const maleGallery = [
    { name: "Albino", src: Tahr_AlbinoMale },
    { name: "Black", src: Tahr_BlackMale },
    { name: "Dark Brown", src: Tahr_DarkBrownMale },
    { name: "Dark Red", src: Tahr_DarkRedMale },
    { name: "Light Brown", src: Tahr_LightBrownMale },
    { name: "Red", src: Tahr_RedMale },
    { name: "Red Brown", src: Tahr_RedBrownMale },
    { name: "Straw", src: Tahr_StrawMale },
    { name: "White", src: Tahr_WhiteMale },
  ];

  const femaleGallery = [
    { name: "Albino", src: Tahr_AlbinoFemale },
    { name: "Light Brown", src: Tahr_LightBrownFemale },
    { name: "Red", src: Tahr_RedFemale },
    { name: "Red Brown", src: Tahr_RedBrownFemale },
    { name: "Straw", src: Tahr_StrawFemale },
    { name: "White", src: Tahr_WhiteFemale },
  ];

  const greatOneGallery = [
    { name: "Fabled Gold", src: Tahr_FabledGoldLeftSide },
    { name: "Fabled Gray", src: Tahr_FabledGrayLeftSide },
    { name: "Fabled Half", src: Tahr_FabledHalfLeftSide },
    { name: "Fabled Latte", src: Tahr_FabledLatteLeftSide },
    { name: "Fabled Scars (Left)", src: Tahr_FabledScarsLeftSide },
    { name: "Fabled Scars (Right)", src: Tahr_FabledScarsRightSide },
    { name: "Fabled Skull", src: Tahr_FabledSkullLeftSide },
    { name: "Fabled Snow", src: Tahr_FabledSnowLeftSide },
  ];

  // Trivia Data
  const triviaData = [];

  return (
    <div className="wiki-page">
      <div className="wiki-inner">
        
        {/* PAGE HEADER */}
        <div className="wiki-header">
          <span>Tahr</span>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Tahr</div>
            <div className="wiki-sidebar-image">
              <img src={TahrMain} alt="Tahr" />
            </div>
            
            <div className="wiki-sidebar-header">General Information</div>
            
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Class</span>
              {/* Cited from screenshot 200701 */}
              <span><img src={class4Icon} alt="Class 4" className="wiki-class-icon-lg"/>4</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Difficulty</span>
              {/* Cited from screenshot 200701 */}
              <span>1: Trivial — 5: Medium</span><br/>
              <span>10: Fabled</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Trophy Type</span>
              <span>Horns</span>
              <div className="wiki-trophy-grid">
                {/* Cited from screenshot 200701 */}
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-silver">◆ Silver</span>
                  <span>61.23</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-gold">☗ Gold</span>
                  <span>84.46</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-diamond">☗ Diamond</span>
                  <span>101.87</span>
                </div>
              </div>
              <div className="wiki-great-one-badge">
                 <span>❂ Great One</span>
              </div>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Weight</span>
              {/* Cited from screenshot 200701 */}
              0kg — 140kg<br/>
              <span className="wiki-sidebar-muted">0lbs — 309lbs</span><br/>
              <span style={{fontWeight:'bold'}}>180kg (Great One)</span><br/>
              <span className="wiki-sidebar-muted">397lbs (Great One)</span>
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Fur</span>
               {/* Cited from screenshot 200713 */}
               <span className="wiki-fs-sm">
                 Albino, Black, Dark Brown, Dark Red, Light Brown, Red, Red Brown, Straw, White
               </span>
               <span style={{display:'block', marginTop: '5px', fontWeight: 'bold', fontSize: '0.85rem'}}>Fabled Exclusive:</span>
               <span style={{fontSize: '0.85rem'}}>
                 Gold, Gray, Half, Latte, Scars, Skull, Snow
               </span>
            </div>

            <div className="wiki-sidebar-header">Locations</div>
            <div className="wiki-sidebar-section">
               {/* Cited from screenshot 200713 */}
               <div className="wiki-mb-4"><span className="wiki-link">Sundarpatan</span></div>
               <div className="wiki-mb-4"><span className="wiki-link">Te Awaroa National Park</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main className="wiki-main">

            {/* Quote Block */}
            <div className="wiki-quote">
              "The majestic Himalayan tahr is a type of wild goat that belongs to the bovid family. This animal has successfully adapted to thrive in a chilly climate and rocky landscapes. It can be spotted on vegetated mountainsides at elevations ranging from 2,500 to 5,000 meters in regions such as Tibet, India, Nepal, and New Zealand (where it was introduced for sport in 1904). Tahrs are excellent climbers; their hooves are well-adapted for their mountain habitat. They move uphill early in the morning to find food on the alpine pastures where they eat the entire day, except for a short break during midday when they rest among rocks and vegetation."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-p-mb">
              The <strong>Tahr</strong> is a <span className="wiki-link">class 4</span> Goat that was introduced with <span className="wiki-link">Sundarpatan</span> reserve and later added to <span className="wiki-link">Te Awaroa National Park</span>.
            </p>

            {/* Table of Contents */}
            <div className="wiki-toc">
              <div className="wiki-toc-title">
                🔢 Contents <span className="wiki-toc-toggle">[hide]</span>
              </div>
              <ol className="wiki-toc">
                <li><a href="#features" onClick={(e)=>scrollToId(e,'features')} className="wiki-link">Features</a></li>
                <li><a href="#need-zones" onClick={(e)=>scrollToId(e,'need-zones')} className="wiki-link">Need Zone Times</a></li>
                <li><a href="#shot-scheme" onClick={(e)=>scrollToId(e,'shot-scheme')} className="wiki-link">Shot scheme</a></li>
                <li><a href="#fur-variants" onClick={(e)=>scrollToId(e,'fur-variants')} className="wiki-link">Fur Variants</a></li>
                    <ol style={{marginTop:'6px', marginLeft:'-30px', listStyleType: 'none'}}>
                    <li><a href="#fur-male" onClick={(e)=>scrollToId(e,'fur-male')} className="wiki-link">4.1 Male</a></li>
                    <li><a href="#fur-female" onClick={(e)=>scrollToId(e,'fur-female')} className="wiki-link">4.2 Female</a></li>
                  </ol>
                 <li><a href="#fur-great-ones" onClick={(e)=>scrollToId(e,'fur-great-ones')} className="wiki-link">Fur Variants | Great One</a></li>
                <li><a href="#variant-rarity" onClick={(e)=>scrollToId(e,'variant-rarity')} className="wiki-link">Fur Variant Rarity</a></li>
              </ol>
            </div>

            {/* FEATURES */}
            <h2 className="wiki-h2" id="features">Features</h2>
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
            <h2 className="wiki-h2" id="need-zones">Need Zone Times</h2>
            <div className="wiki-inline-block">
                <table className="wiki-table wiki-table-fixed">
                    <thead>
                        <tr><th colSpan="2" className="wiki-th wiki-th-center">Sundarpatan</th></tr>
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
            <h2 className="wiki-h2" id="shot-scheme">Shot scheme</h2>
            <div className="wiki-shot-container">
               <div className="wiki-shot-container">
                 <img src={ShotSchemeImg} alt="Shot Scheme" className="wiki-shot-scheme-img" />
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
            <h2 className="wiki-h2" id="fur-variants">Fur Variants</h2>

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

            {/* GREAT ONE FUR VARIANTS */}
            <h2 className="wiki-h2" id="fur-great-ones">Fur Variants | Great One</h2>
            <div className="wiki-gallery-grid">
              {greatOneGallery.map((item, i) => (
                <div key={i} className="wiki-gallery-item">
                  <div className="wiki-gallery-placeholder">
                    <img src={item.src} alt={item.name} className="wiki-img-contain" />
                  </div>
                  <span className="wiki-gallery-label">{item.name}</span>
                </div>
              ))}
            </div>

            {/* FUR VARIANT RARITY TABLE */}
            <h2 className="wiki-h2" id="variant-rarity">Fur Variant Rarity</h2>
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
                        {/* Male Row */}
                        <tr>
                            <td className="wiki-td wiki-td-muted">
                                Male
                            </td>
                            <td className="wiki-td">
                                Red Brown (74.45%)
                            </td>
                            <td className="wiki-td">
                                Light Brown (12.50%)<br/>
                                Straw (12.50%)
                            </td>
                            <td className="wiki-td">
                                Black (0.10%)<br/>
                                Dark Brown (0.10%)<br/>
                                Dark Red (0.10%)<br/>
                                Red (0.10%)<br/>
                                White (0.10%)
                            </td>
                            <td className="wiki-td">
                                Albino (0.05%)
                            </td>
                        </tr>
                        {/* Female Row */}
                        <tr>
                            <td className="wiki-td wiki-td-female">
                                Female
                            </td>
                            <td className="wiki-td">
                                Red Brown (74.67%)
                            </td>
                            <td className="wiki-td">
                                Light Brown (12.54%)<br/>
                                Straw (12.54%)
                            </td>
                            <td className="wiki-td">
                                Red (0.10%)<br/>
                                White (0.10%)
                            </td>
                            <td className="wiki-td">
                                Albino (0.05%)
                            </td>
                        </tr>
                    </tbody>
                </table>
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

export default Tahr;