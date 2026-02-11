import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import DrinkingZoneIcon from '../../../assets/DrinkingZoneIcon.webp';
import class6Icon from '../../../assets/Class6Icon.webp'; 
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import RedDeerMain from '../../../assets/RedDeer.webp';
import ShotSchemeImg from '../../../assets/Red_deer_shot_scheme.webp';

// Fur Variant Images
// Male
import RedDeer_AlbinoMaleRightSide from '../../../assets/RedDeer_AlbinoMaleRightSide.webp';
import RedDeer_BrownMaleRightSide from '../../../assets/RedDeer_BrownMaleRightSide.webp';
import RedDeer_DarkBrownMaleRightSide from '../../../assets/RedDeer_DarkBrownMaleRightSide.webp';
import RedDeer_ErythristicMaleRightSide from '../../../assets/RedDeer_ErythristicMaleRightSide.webp';
import RedDeer_LeucisticMaleRightSide from '../../../assets/RedDeer_LeucisticMaleRightSide.webp';
import RedDeer_LightBrownMaleRightSide from '../../../assets/RedDeer_LightBrownMaleRightSide.webp';
import RedDeer_MelanisticMaleRightSide from '../../../assets/RedDeer_MelanisticMaleRightSide.webp';
import RedDeer_PiebaldVariation1MaleRightSide from '../../../assets/RedDeer_PiebaldVariation1MaleRightSide.webp';
import RedDeer_PiebaldVariation1MaleLeftSide from '../../../assets/RedDeer_PiebaldVariation1MaleLeftSide.webp';
import RedDeer_PiebaldVariation2MaleRightSide from '../../../assets/RedDeer_PiebaldVariation2MaleRightSide.webp';
import RedDeer_PiebaldVariation2MaleLeftSide from '../../../assets/RedDeer_PiebaldVariation2MaleLeftSide.webp';

// Female
import RedDeer_AlbinoFemaleRightSide from '../../../assets/RedDeer_AlbinoFemaleRightSide.webp';
import RedDeer_BrownFemaleRightSide from '../../../assets/RedDeer_BrownFemaleRightSide.webp';
import RedDeer_DarkBrownFemaleRightSide from '../../../assets/RedDeer_DarkBrownFemaleRightSide.webp';
import RedDeer_ErythristicFemaleRightSide from '../../../assets/RedDeer_ErythristicFemaleRightSide.webp';
import RedDeer_LeucisticFemaleRightSide from '../../../assets/RedDeer_LeucisticFemaleRightSide.webp';
import RedDeer_LightBrownFemaleRightSide from '../../../assets/RedDeer_LightBrownFemaleRightSide.webp';
import RedDeer_MelanisticFemaleRightSide from '../../../assets/RedDeer_MelanisticFemaleRightSide.webp';
import RedDeer_PiebaldVariation1FemaleRightSide from '../../../assets/RedDeer_PiebaldVariation1FemaleRightSide.webp';
import RedDeer_PiebaldVariation1FemaleLeftSide from '../../../assets/RedDeer_PiebaldVariation1FemaleLeftSide.webp';
import RedDeer_PiebaldVariation2FemaleRightSide from '../../../assets/RedDeer_PiebaldVariation2FemaleRightSide.webp';
import RedDeer_PiebaldVariation2FemaleLeftSide from '../../../assets/RedDeer_PiebaldVariation2FemaleLeftSide.webp';

// Great One
import RedDeer_FabledSpotted from '../../../assets/RedDeer_FabledSpotted.webp';


const RedDeer = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  const needZonesData = [
    {
      name: "Hirschfelden and Emerald Coast",
      schedule: [
        { time: "00:00 - 03:00", type: "Resting", icon: RestingZoneIcon },
        { time: "03:00 - 06:00", type: "Resting", icon: RestingZoneIcon },
        { time: "06:00 - 10:00", type: "Drinking", icon: DrinkingZoneIcon },
        { time: "10:00 - 13:00", type: "Resting", icon: RestingZoneIcon },
        { time: "13:00 - 17:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "17:00 - 21:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "21:00 - 00:00", type: "Resting", icon: RestingZoneIcon },
      ]
    }
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Docile and not aggressive" },
    { label: "Habitat", value: "Prefer forests and mountainous terrain" },
    { label: "Senses", value: "Very good sense of smell" },
    { label: "Social", value: "Sometimes solitary, otherwise they live in larger groups" },
    { label: "Active", value: "During dawn and dusk" },
    { label: "Recommended Equipment", value: "Class 6 Ammo, Red Deer Caller, Red Deer Scent" },
    { label: "Species", value: "Cervus elaphus", italic: true, isLink: true },
    { label: "Difficulty", value: "Average" },
  ];

  // Fur Gallery Data
  const maleGallery = [
    { name: "Albino", src: RedDeer_AlbinoMaleRightSide },
    { name: "Brown", src: RedDeer_BrownMaleRightSide },
    { name: "Dark Brown", src: RedDeer_DarkBrownMaleRightSide },
    { name: "Erythristic", src: RedDeer_ErythristicMaleRightSide },
    { name: "Leucistic", src: RedDeer_LeucisticMaleRightSide },
    { name: "Light Brown", src: RedDeer_LightBrownMaleRightSide },
    { name: "Melanistic", src: RedDeer_MelanisticMaleRightSide },
    { name: "Piebald Variation 1 (Right)", src: RedDeer_PiebaldVariation1MaleRightSide },
    { name: "Piebald Variation 1 (Left)", src: RedDeer_PiebaldVariation1MaleLeftSide },
    { name: "Piebald Variation 2 (Right)", src: RedDeer_PiebaldVariation2MaleRightSide },
    { name: "Piebald Variation 2 (Left)", src: RedDeer_PiebaldVariation2MaleLeftSide },
  ];

  const femaleGallery = [
    { name: "Albino", src: RedDeer_AlbinoFemaleRightSide },
    { name: "Brown", src: RedDeer_BrownFemaleRightSide },
    { name: "Dark Brown", src: RedDeer_DarkBrownFemaleRightSide },
    { name: "Erythristic", src: RedDeer_ErythristicFemaleRightSide },
    { name: "Leucistic", src: RedDeer_LeucisticFemaleRightSide },
    { name: "Light Brown", src: RedDeer_LightBrownFemaleRightSide },
    { name: "Melanistic", src: RedDeer_MelanisticFemaleRightSide },
    { name: "Piebald Variation 1 (Right)", src: RedDeer_PiebaldVariation1FemaleRightSide },
    { name: "Piebald Variation 1 (Left)", src: RedDeer_PiebaldVariation1FemaleLeftSide },
    { name: "Piebald Variation 2 (Right)", src: RedDeer_PiebaldVariation2FemaleRightSide },
    { name: "Piebald Variation 2 (Left)", src: RedDeer_PiebaldVariation2FemaleLeftSide },
  ];

  // Great One Gallery Data
  const greatOneGallery = [
    { name: "Fabled Spotted", src: RedDeer_FabledSpotted },
  ];

  // Trivia Data
  const triviaData = [
    "The Red Deer (Cervus Elaphus) is part of the original list of animals huntable at launch (December 2016).",
    "The Great One was introduced in November 2021.",
    "\"Red Deer\" is the equivalent of \"Rothirsch\" in German.",
    <span>They are the 4th largest deer species in the world, and the 5th largest in game. They are surpassed only by the <span style={{color: '#6fb2e6', cursor:'pointer'}}>Sambar</span>, the <span style={{color: '#6fb2e6', cursor:'pointer'}}>Rocky Mountain Elk</span>, the <span style={{color: '#6fb2e6', cursor:'pointer'}}>Roosevelt Elk</span>, and the <span style={{color: '#6fb2e6', cursor:'pointer'}}>Moose</span>.</span>,
    <span>Red Deer are easily recognizable by their distinctive \"roar\" or \"bellow\" which, next to its cousin (<span style={{color: '#6fb2e6', cursor:'pointer'}}>Roosevelt Elk</span>), is considered one of the most iconic calls among deer.</span>,
    "They are very social animals and are known for living in herds.",
    "In the wild, they can live up to 20 years, but on average tend to live up to 15.",
    "The fur of red deer goes hollow during winter, which traps a layer of insulating air close to their body, keeping them warm.",
    "In earlier Versions, the female red deer was available in the color light brown, this was later changed to grey.",
    "Red deer got a second remodel in the 8.4 patch and update, December 9 2025."
  ];

  // References Data
  const referencesData = [
    "Red Deer Need Zones, Hirschfelden",
    "Red Deer Need Zones, Emerald Coast"
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
          <span>Red Deer</span>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Red Deer</div>
            <div className="wiki-sidebar-image">
              <img src={RedDeerMain} alt="Red Deer" className="max-w-full max-h-[190px] object-contain" />
            </div>
            
            <div className="wiki-sidebar-header">General Information</div>
            
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Class</span>
              {/* */}
              <span><img src={class6Icon} alt="Class 6" className="inline-block wiki-class-icon-sm align-middle mr-1.5"/>6</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Difficulty</span>
              {/* */}
              <span>1: Trivial — 9: Legendary</span><br/>
              <span>10: Fabled</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Trophy Type</span>
              <span>Antlers</span>
              <div className="wiki-trophy-grid">
                {/* */}
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-silver">◆ Silver</span>
                  <span>90.50</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-gold">☗ Gold</span>
                  <span>182.25</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-diamond">☗ Diamond</span>
                  <span>251.07</span>
                </div>
              </div>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label wiki-great-one" style={{color: '#2ecc71'}}>Great One</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Weight</span>
              {/* */}
              120kg — 240kg<br/>
              <span className="wiki-sidebar-muted">265lbs — 529lbs</span>
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Fur</span>
               {/* */}
               <span className="wiki-fs-sm">
                 Albino, Brown, Dark Brown, Erythristic, Leucistic, Light Brown, Melanistic, Piebald<br/><br/>
                 <strong>Fabled Exclusive:</strong><br/>
                 Spotted
               </span>
            </div>

            <div className="wiki-sidebar-header">Locations</div>
            <div className="wiki-sidebar-section">
               {/* */}
               <div className="wiki-mb-4"><span className="wiki-link">Hirschfelden Hunting Reserve</span></div>
               <div className="wiki-mb-4"><span className="wiki-link">Parque Fernando</span></div>
               <div className="wiki-mb-4"><span className="wiki-link">Cuatro Colinas Game Reserve</span></div>
               <div className="wiki-mb-4"><span className="wiki-link">Te Awaroa National Park</span></div>
               <div className="wiki-mb-4"><span className="wiki-link">Emerald Coast</span></div>
               <div className="wiki-mb-4"><span className="wiki-link">Tòrr nan Sithean</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main className="wiki-main">

            {/* Quote Block */}
            <div className="wiki-quote">
              "Red deer are among the largest species of deer in Europe, Western Asia, and Northern Africa. The species has also been introduced to other parts of the world. Closely related to the American elk, red deer are characterized by their reddish-brown fur. A typical buck also called a stag, may weigh in between 160.00 - 240.00 kg (350 - 530 lb) and develop large antlers over its lifetime. Stags are easily distinguished from their female counterparts, hinds, by their thicker necks. Red deer live in larger groups and tend to inhabit broadleaf deciduous forests with flat terrains and open meadows. However they can be found in steeper areas and higher altitudes as well. They are herbivores and pose little threat to humans unless startled at close range."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-p-mb">
              The <strong>Red Deer</strong> is one of the largest deer species (<span className="wiki-link">class 6</span>). It can be hunted in <span className="wiki-link">Hirschfelden</span>, <span className="wiki-link">Parque Fernando</span>, <span className="wiki-link">Cuatro Colinas</span>, <span className="wiki-link">Te Awaroa</span>, <span className="wiki-link">Emerald Coast</span> and <span className="wiki-link">Tòrr nan Sithean</span>.
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
                <li><a href="#fur-great-ones" onClick={(e)=>scrollToId(e,'fur-great-ones')} className="wiki-link">Fur Variants | Great Ones</a></li>
                <li><a href="#variant-rarity" onClick={(e)=>scrollToId(e,'variant-rarity')} className="wiki-link">Fur Variant Rarity</a></li>
                <li><a href="#trivia" onClick={(e)=>scrollToId(e,'trivia')} className="wiki-link">Trivia</a></li>
                <li><a href="#references" onClick={(e)=>scrollToId(e,'references')} className="wiki-link">References</a></li>
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
                        <tr><th colSpan="2" className="wiki-th wiki-th-center">Hirschfelden, Emerald Coast</th></tr>
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
                 <img src={ShotSchemeImg} alt="Shot Scheme" className="wiki-shot-scheme-img-sm" />
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

            {/* GREAT ONES */}
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
            <div className="wiki-overflow-auto wiki-mb-20">
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
                                Brown (33.13%)<br/>
                                Dark Brown (33.13%)<br/>
                                Light Brown (33.13%)
                            </td>
                            <td className="wiki-td">
                                X
                            </td>
                            <td className="wiki-td">
                                Piebald Variation 1 (0.20%)<br/>
                                Piebald Variation 2 (0.20%)
                            </td>
                            <td className="wiki-td">
                                Albino (0.05%)<br/>
                                Erythristic (0.05%)<br/>
                                Leucistic (0.05%)<br/>
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

            {/* YouTube teaser */}
            <div style={{marginTop: '20px', display: 'flex', justifyContent: 'center'}}>
              <div style={{position: 'relative', width: '100%', maxWidth: '800px', paddingBottom: '56.25%'}}>
                <iframe
                  src="https://www.youtube.com/embed/YgN2HpGsFmE"
                  title="Red Deer Teaser"
                  style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* REFERENCES */}
            <h2 id="references" className="wiki-h2">References</h2>
            <ol className="wiki-ol-ref">
                {referencesData.map((ref, idx) => (
                     <li key={idx} className="wiki-mb-5">
                        <span className="wiki-text-divider">↑</span> <span className="wiki-link">{ref}</span>
                     </li>
                ))}
            </ol>

            <div className="wiki-mt-40">
                <AnimalsTableMini />
            </div>
            
          </main>
        </div>
      </div>
    </div>
  );
};

export default RedDeer;