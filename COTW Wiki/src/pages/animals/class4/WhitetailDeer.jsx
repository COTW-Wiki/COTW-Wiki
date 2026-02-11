import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import DrinkingZoneIcon from '../../../assets/DrinkingZoneIcon.webp';
import class4Icon from '../../../assets/Class4Icon.webp'; // Class 4 for Whitetail Deer
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import WhitetailDeerMain from '../../../assets/WhitetailDeer.webp';
import ShotSchemeImage from '../../../assets/Whitetail_deer_shot_scheme.webp';

// Fur Variant Images (Placeholders)
import WhitetailDeer_AlbinoMaleRightSide from '../../../assets/WhitetailDeer_AlbinoMaleRightSide.webp';
import WhitetailDeer_BrownMaleRightSide from '../../../assets/WhitetailDeer_BrownMaleRightSide.webp';
import WhitetailDeer_DarkBrownMaleRightSide from '../../../assets/WhitetailDeer_DarkBrownMaleRightSide.webp';
import WhitetailDeer_MelanisticMaleRightSide from '../../../assets/WhitetailDeer_MelanisticMaleRightSide.webp';
import WhitetailDeer_PiebaldMaleRightSide from '../../../assets/WhitetailDeer_PiebaldMaleRightSide.webp';
import WhitetailDeer_PiebaldMaleLeftSide from '../../../assets/WhitetailDeer_PiebaldMaleLeftSide.webp';
import WhitetailDeer_TanMaleRightSide from '../../../assets/WhitetailDeer_TanMaleRightSide.webp';

import WhitetailDeer_AlbinoFemaleRightSide from '../../../assets/WhitetailDeer_AlbinoFemaleRightSide.webp';
import WhitetailDeer_BrownFemaleRightSide from '../../../assets/WhitetailDeer_BrownFemaleRightSide.webp';
import WhitetailDeer_DarkBrownFemaleRightSide from '../../../assets/WhitetailDeer_DarkBrownFemaleRightSide.webp';
import WhitetailDeer_MelanisticFemaleRightSide from '../../../assets/WhitetailDeer_MelanisticFemaleRightSide.webp';
import WhitetailDeer_PiebaldFemaleRightSide from '../../../assets/WhitetailDeer_PiebaldFemaleRightSide.webp';
import WhitetailDeer_PiebaldFemaleLeftSide from '../../../assets/WhitetailDeer_PiebaldFemaleLeftSide.webp';
import WhitetailDeer_RedBrownFemaleRightSide from '../../../assets/WhitetailDeer_RedBrownFemaleRightSide.webp';

// Great One Fur Variants (Placeholders)
import WhitetailDeer_FabledBrownRightSide from '../../../assets/WhitetailDeer_FabledBrownRightSide.webp';
import WhitetailDeer_FabledDarkBrownRightSide from '../../../assets/WhitetailDeer_FabledDarkBrownRightSide.webp';
import WhitetailDeer_FabledPiebaldRightSide from '../../../assets/WhitetailDeer_FabledPiebaldRightSide.webp';
import WhitetailDeer_FabledPiebaldLeftSide from '../../../assets/WhitetailDeer_FabledPiebaldLeftSide.webp';
import WhitetailDeer_FabledTanRightSide from '../../../assets/WhitetailDeer_FabledTanRightSide.webp';


const WhitetailDeer = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  const needZonesData = [
    {
      name: "Layton Lake, New England & Revontuli",
      schedule: [
        { time: "00:00 - 04:00", type: "Resting", icon: RestingZoneIcon },
        { time: "04:00 - 08:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "08:00 - 12:00", type: "Drinking", icon: DrinkingZoneIcon },
        { time: "12:00 - 16:00", type: "Resting", icon: RestingZoneIcon },
        { time: "16:00 - 20:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "20:00 - 24:00", type: "Resting", icon: RestingZoneIcon },
      ]
    },
    {
      name: "Rancho del Arroyo & Mississippi",
      schedule: [
        { time: "00:00 - 04:00", type: "Resting", icon: RestingZoneIcon },
        { time: "04:00 - 08:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "08:00 - 11:00", type: "Drinking", icon: DrinkingZoneIcon },
        { time: "11:00 - 14:00", type: "Resting", icon: RestingZoneIcon },
        { time: "14:00 - 21:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "21:00 - 24:00", type: "Resting", icon: RestingZoneIcon },
      ]
    },
    {
      name: "Askiy Ridge",
      schedule: [
        { time: "00:00 - 04:00", type: "Resting", icon: RestingZoneIcon },
        { time: "04:00 - 08:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "08:00 - 12:00", type: "Drinking", icon: DrinkingZoneIcon },
        { time: "12:00 - 16:00", type: "Resting", icon: RestingZoneIcon },
        { time: "16:00 - 20:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "16:00 - 00:00", type: "Feeding", icon: FeedingZoneIcon }, 
      ]
    }
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Docile and somewhat skittish" },
    { label: "Habitat", value: "Prefer to live in forests" },
    { label: "Senses", value: "Excellent sense of smell" },
    { label: "Social", value: "Are mostly solitary, but can be found in small and medium-sized groups" },
    { label: "Active", value: "During dawn, late afternoon and dusk" },
    { label: "Recommended Equipment", value: "Class 4 Ammo, Deer \"Bleat\" Caller, Deer \"Grunt\" Caller, Whitetail Deer Scent" },
    { label: "Species", value: "Odocoileus virginianus", italic: true, isLink: true },
    { label: "Difficulty", value: "Average" },
  ];

  // Fur Gallery Data — separate male and female galleries using imported images
  const maleGallery = [
    { name: "Albino", src: WhitetailDeer_AlbinoMaleRightSide },
    { name: "Brown", src: WhitetailDeer_BrownMaleRightSide },
    { name: "Dark Brown", src: WhitetailDeer_DarkBrownMaleRightSide },
    { name: "Melanistic", src: WhitetailDeer_MelanisticMaleRightSide },
    { name: "Piebald (Right)", src: WhitetailDeer_PiebaldMaleRightSide },
    { name: "Piebald (Left)", src: WhitetailDeer_PiebaldMaleLeftSide },
    { name: "Tan", src: WhitetailDeer_TanMaleRightSide },
  ];

  const femaleGallery = [
    { name: "Albino", src: WhitetailDeer_AlbinoFemaleRightSide },
    { name: "Brown", src: WhitetailDeer_BrownFemaleRightSide },
    { name: "Dark Brown", src: WhitetailDeer_DarkBrownFemaleRightSide },
    { name: "Melanistic", src: WhitetailDeer_MelanisticFemaleRightSide },
    { name: "Piebald (Right)", src: WhitetailDeer_PiebaldFemaleRightSide },
    { name: "Piebald (Left)", src: WhitetailDeer_PiebaldFemaleLeftSide },
    { name: "Red Brown", src: WhitetailDeer_RedBrownFemaleRightSide },
  ];

  // Great One Fur Gallery Data — use imported fabled variants
  const greatOneGallery = [
    { name: "Fabled Brown", src: WhitetailDeer_FabledBrownRightSide },
    { name: "Fabled Dark Brown", src: WhitetailDeer_FabledDarkBrownRightSide },
    { name: "Fabled Piebald (Right)", src: WhitetailDeer_FabledPiebaldRightSide },
    { name: "Fabled Piebald (Left)", src: WhitetailDeer_FabledPiebaldLeftSide },
    { name: "Fabled Tan", src: WhitetailDeer_FabledTanRightSide },
  ];

  // Trivia Data
  const triviaData = [
    "The Whitetail Deer is (together with the Blacktail Deer) the first animal species to be updated with TruRACS, and the first to become a Great One.",
    "The word \"Deer\" is of Old English origin, and was used to describe any four legged animal.",
    "The Whitetail Deer is the most popular 'State Animal' in America, with AR (Arkansas), IL (Illinois), MS (Mississippi), NE (Nebraska), NH (New Hampshire), OH (Ohio), PA (Pennsylvania), and SC (South Carolina) all designating the Deer as their Official State Animal.",
    "Despite its species name (virginianus), the state of Virginia does not recognize the Whitetail as a state symbol.",
    "It is quite possibly, the most popular game animal in North America. An estimated $15.7 Billion is spent annually on Whitetail Hunting in the United States ALONE!",
    "In early March 2021, the Great One whitetail deer was bugged where it would show up as a level 4 or 5."
  ];

  // Smooth-scroll helper for TOC links
  function scrollToId(e, id) {
    if (e && e.preventDefault) e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      try { history.replaceState(null, '', `#${id}`); } catch (err) {}
    }
  }

  return (
    <div className="wiki-page">
      <div className="wiki-inner">
        
        {/* PAGE HEADER */}
        <div className="wiki-header">
          <span>Whitetail Deer</span>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Whitetail Deer</div>
            <div className="wiki-sidebar-image wiki-sidebar-image--contain">
              <img src={WhitetailDeerMain} alt="Whitetail Deer" className="wiki-img-contain" />
            </div>
            
            <div className="wiki-sidebar-header">General Information</div>
            
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Class</span>
              <span><img src={class4Icon} alt="Class 4" className="inline-block wiki-class-icon-sm align-middle mr-1.5" />4</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Difficulty</span>
              <span>1: Trivial — 3: Very Easy</span><br/>
              <span>10: Fabled</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Trophy Type</span>
              <span>Antlers</span>
              <div className="wiki-trophy-grid">
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-silver">◆ Silver</span>
                  <span>112.05</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-gold">☗ Gold</span>
                  <span>193.79</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-diamond">☗ Diamond</span>
                  <span>255.09</span>
                </div>
              </div>
              <div style={{textAlign: 'center', marginTop: '10px'}}>
                 <span className="wiki-trophy-label wiki-great-one">✤ Great One</span>
              </div>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Weight</span>
              40kg — 100kg<br/>
              <span className="wiki-sidebar-muted">88lbs — 220lbs</span>
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Fur</span>
               <span className="wiki-fs-sm">
                 Albino, Brown, Dark-Brown, Melanistic, Piebald, Red-Brown, Tan
               </span>
            </div>

            <div className="wiki-sidebar-header">Locations</div>
            <div className="wiki-sidebar-section">
               <div className="wiki-mb-4"><span className="wiki-link">Layton Lake District</span></div>
               <div className="wiki-mb-4"><span className="wiki-link">Rancho del Arroyo</span></div>
               <div className="wiki-mb-4"><span className="wiki-link">Mississippi Acres Preserve</span></div>
               <div className="wiki-mb-4"><span className="wiki-link">Revontuli Coast</span></div>
               <div className="wiki-mb-4"><span className="wiki-link">New England Mountains</span></div>
               <div className="wiki-mb-4"><span className="wiki-link">Askiy Ridge Hunting Preserve</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main className="wiki-main">

            {/* Quote Block */}
            <div className="wiki-quote">
              "The whitetail deer is one of the most common native deer species in North America with a population numbering in the millions. It is a medium-sized deer, characterized by the white underside of its tail that can easily be seen when the deer is alarmed. Its fur color ranges from red-brown to grey-brown. Whitetail deer vary quite a lot in size. Bucks weigh in from 45 - 100 kg (100 - 275 lb) and also develop medium-sized antlers that can branch into several points along one main beam. Whitetails are highly adaptive herbivores. They thrive in mixed and deciduous woodlands, forested wetlands and woods bordering farmlands. Here they feed on a variety of plant species ranging from grasses and leaves to various crops and wildflowers. They do not pose a threat to humans and can run up to speeds of 75 km (47 mi) per hour when scared. They can also leap over obstacles as high as 2.70 m (8.9 ft)."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-p-mb">
              The <strong>Whitetail Deer</strong> is a medium sized deer (<span className="wiki-link">class 4</span>), that can be hunted on <span className="wiki-link">Layton Lake District</span>, <span className="wiki-link">Rancho del Arroyo</span>, <span className="wiki-link">Mississippi Acres Preserve</span>, <span className="wiki-link">Revontuli Coast</span>, <span className="wiki-link">New England Mountains</span> and <span className="wiki-link">Askiy Ridge Hunting Preserve</span>. It is also one of the first 'original' animals huntable in game, as it launched with <em>theHunter: Call of the Wild</em> in 2016.
            </p>

            {/* Table of Contents */}
            <div className="wiki-toc">
              <div className="wiki-toc-title">
                🔢 Contents <span className="wiki-toc-toggle">[hide]</span>
              </div>
              <ol className="wiki-toc">
                <li><a href="#features" className="wiki-link" onClick={(e) => scrollToId(e, 'features')}>Features</a></li>
                <li><a href="#need-zones" className="wiki-link" onClick={(e) => scrollToId(e, 'need-zones')}>Need Zone Times</a></li>
                <li><a href="#shot-scheme" className="wiki-link" onClick={(e) => scrollToId(e, 'shot-scheme')}>Shot scheme</a></li>
                <li>
                  <a href="#fur-variants" className="wiki-link" onClick={(e) => scrollToId(e, 'fur-variants')}>Fur Variants</a>
                  <ol style={{margin:'6px 0 0 14px', padding:'0', color:'#9ed3f5', listStyle: 'none'}}>
                    <li><a href="#fur-male" className="wiki-link" onClick={(e) => scrollToId(e, 'fur-male')}>4.1 Male</a></li>
                    <li><a href="#fur-female" className="wiki-link" onClick={(e) => scrollToId(e, 'fur-female')}>4.2 Female</a></li>
                  </ol>
                </li>
                <li><a href="#fur-great-ones" className="wiki-link" onClick={(e) => scrollToId(e, 'fur-great-ones')}>Fur Variants | Great Ones</a></li>
                <li><a href="#variant-rarity" className="wiki-link" onClick={(e) => scrollToId(e, 'variant-rarity')}>Fur Variant Rarity</a></li>
                <li><a href="#trivia" className="wiki-link" onClick={(e) => scrollToId(e, 'trivia')}>Trivia</a></li>
                <li><a href="#references" className="wiki-link" onClick={(e) => scrollToId(e, 'references')}>References</a></li>
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
            <div style={{display:'flex', gap: '20px', flexWrap: 'wrap'}}>
                {needZonesData.map((mapData, index) => (
                    <div key={index} style={{flex: '1 1 300px'}}>
                        <table className="wiki-table">
                            <thead>
                                <tr><th colSpan="2" className="wiki-th wiki-th-center">{mapData.name}</th></tr>
                                <tr>
                                    <th className="wiki-th wiki-th-alt">Times</th>
                                    <th className="wiki-th wiki-th-alt">Activity</th>
                                </tr>
                            </thead>
                            <tbody>
                                {mapData.schedule.map((zone, i) => (
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
                ))}
            </div>

             {/* SHOT SCHEME */}
             <h2 id="shot-scheme" className="wiki-h2">Shot scheme</h2>
            <div className="wiki-shot-container">
                <div className="wiki-shot-container">
                   <img src={ShotSchemeImage} alt="Shot Scheme" className="wiki-shot-scheme-img-sm" />
                </div>
                <div className="wiki-shot-wrap">
                   <div className="wiki-shot-title">Color code</div>
                   <div className="wiki-shot-info">Red - Kills immediately</div>
                   <div className="wiki-shot-info">Blue - Kills very quick</div>
                   <div className="wiki-shot-info">Orange - Kills slowly</div>
                   <div className="wiki-legend-item wiki-legend-item-last">No Color - Unlikely to kill</div>
                </div>
            </div>

            {/* FUR VARIANTS */}
            <h2 id="fur-variants" className="wiki-h2">Fur Variants</h2>

            <h3 id="fur-male" style={{color: '#6fb2e6', marginTop: '12px'}}>Male</h3>
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

            <h3 id="fur-female" style={{color: '#6fb2e6', marginTop: '18px'}}>Female</h3>
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
            <h2 id="fur-great-ones" className="wiki-h2">Fur Variants | Great Ones</h2>
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
                                Brown (33.23%)<br/>
                                Dark Brown (33.23%)<br/>
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
                        <tr>
                            <td className="wiki-td wiki-td-female">
                                Female
                            </td>
                            <td className="wiki-td">
                                Brown (33.23%)<br/>
                                Dark Brown (33.23%)<br/>
                                Red Brown (33.23%)
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

            {/* REFERENCES */}
            <h2 id="references" className="wiki-h2">References</h2>
            <ul className="wiki-ul wiki-ul-disc">
              <li style={{marginBottom: '8px'}}>Whitetail Deer Need Zones, Askiy Ridge</li>
              <li style={{marginBottom: '6px'}}><a href="https://www.merriam-webster.com/dictionary/deer" target="_blank" rel="noopener noreferrer" className="wiki-link">https://www.merriam-webster.com/dictionary/deer</a></li>
              <li style={{marginBottom: '6px'}}><a href="https://www.etymonline.com/word/deer" target="_blank" rel="noopener noreferrer" className="wiki-link">https://www.etymonline.com/word/deer</a></li>
              <li style={{marginBottom: '6px'}}><a href="https://tpwd.texas.gov/huntwild/wild/game_management/deer/" target="_blank" rel="noopener noreferrer" className="wiki-link">https://tpwd.texas.gov/huntwild/wild/game_management/deer/</a></li>
              <li style={{marginBottom: '6px'}}><a href="https://www.ckwri.tamuk.edu/news-events/hunters-and-conservation-and-management-white-tailed-deer" target="_blank" rel="noopener noreferrer" className="wiki-link">https://www.ckwri.tamuk.edu/news-events/hunters-and-conservation-and-management-white-tailed-deer</a></li>
              <li style={{marginTop: '8px'}}>WE FOUND THE GREAT ONE And It Was A Bugged Level 5...</li>
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

export default WhitetailDeer;