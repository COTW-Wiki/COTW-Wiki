import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import DrinkingZoneIcon from '../../../assets/DrinkingZoneIcon.webp';
import class4Icon from '../../../assets/Class4Icon.webp'; // Class 4 for Fallow Deer
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import FallowDeerMain from '../../../assets/FallowDeer.webp';
import ShotSchemeImage from '../../../assets/Fallow_deer_shot_scheme.webp';

// Fur Variant Images (Placeholders)
import FallowDeer_AlbinoMaleRightSide from '../../../assets/FallowDeer_AlbinoMaleRightSide.webp';
import FallowDeer_ChocolateMaleRightSide from '../../../assets/FallowDeer_ChocolateMaleRightSide.webp';
import FallowDeer_DarkMaleRightSide from '../../../assets/FallowDeer_DarkMaleRightSide.webp';
import FallowDeer_DarkSpottedMaleRightSide from '../../../assets/FallowDeer_DarkSpottedMaleRightSide.webp';
import FallowDeer_MelanisticMaleRightSide from '../../../assets/FallowDeer_MelanisticMaleRightSide.webp';
import FallowDeer_PiebaldVariation1MaleRightSide from '../../../assets/FallowDeer_PiebaldVariation1MaleRightSide.webp';
import FallowDeer_PiebaldVariation1MaleLeftSide from '../../../assets/FallowDeer_PiebaldVariation1MaleLeftSide.webp';
import FallowDeer_PiebaldVariation2MaleRightSide from '../../../assets/FallowDeer_PiebaldVariation2MaleRightSide.webp';
import FallowDeer_PiebaldVariation2MaleLeftSide from '../../../assets/FallowDeer_PiebaldVariation2MaleLeftSide.webp';
import FallowDeer_SpottedMaleRightSide from '../../../assets/FallowDeer_SpottedMaleRightSide.webp';
import FallowDeer_WhiteMaleRightSide from '../../../assets/FallowDeer_WhiteMaleRightSide.webp';

import FallowDeer_AlbinoFemaleRightSide from '../../../assets/FallowDeer_AlbinoFemaleRightSide.webp';
import FallowDeer_DarkSpottedFemaleRightSide from '../../../assets/FallowDeer_DarkSpottedFemaleRightSide.webp';
import FallowDeer_MelanisticFemaleRightSide from '../../../assets/FallowDeer_MelanisticFemaleRightSide.webp';
import FallowDeer_RedSpottedFemaleRightSide from '../../../assets/FallowDeer_RedSpottedFemaleRightSide.webp';
import FallowDeer_SpottedFemaleRightSide from '../../../assets/FallowDeer_SpottedFemaleRightSide.webp';
import FallowDeer_PiebaldFemaleRightSide from '../../../assets/FallowDeer_PiebaldFemaleRightSide.webp';
import FallowDeer_PiebaldFemaleLeftSide from '../../../assets/FallowDeer_PiebaldFemaleLeftSide.webp';

// Great One Fur Variants (Placeholders)
import FallowDeer_FabledGoldenRightSide from '../../../assets/FallowDeer_FabledGoldenRightSide.webp';
import FallowDeer_FabledHoodedRightSide from '../../../assets/FallowDeer_FabledHoodedRightSide.webp';
import FallowDeer_FabledMochaRightSide from '../../../assets/FallowDeer_FabledMochaRightSide.webp';
import FallowDeer_FabledPaintedRightSide from '../../../assets/FallowDeer_FabledPaintedRightSide.webp';
import FallowDeer_FabledPaintedLeftSide from '../../../assets/FallowDeer_FabledPaintedLeftSide.webp';
import FallowDeer_FabledSilverRightSide from '../../../assets/FallowDeer_FabledSilverRightSide.webp';


// --- ASSET ALIASES ---
// The gallery expects generic names like `FallowDeer_Albino` etc.
// Map those generic identifiers to the actual imported asset variables.
const FallowDeer_Albino = FallowDeer_AlbinoMaleRightSide;
const FallowDeer_Chocolate = FallowDeer_ChocolateMaleRightSide;
const FallowDeer_Dark = FallowDeer_DarkMaleRightSide;
const FallowDeer_DarkSpotted = FallowDeer_DarkSpottedMaleRightSide;
const FallowDeer_Melanistic = FallowDeer_MelanisticMaleRightSide;
const FallowDeer_Piebald = FallowDeer_PiebaldVariation1MaleRightSide;
const FallowDeer_RedSpotted = FallowDeer_RedSpottedFemaleRightSide;
const FallowDeer_Spotted = FallowDeer_SpottedMaleRightSide;
const FallowDeer_White = FallowDeer_WhiteMaleRightSide;

const FallowDeer_FabledGolden = FallowDeer_FabledGoldenRightSide;
const FallowDeer_FabledHooded = FallowDeer_FabledHoodedRightSide;
const FallowDeer_FabledMocha = FallowDeer_FabledMochaRightSide;
const FallowDeer_FabledPainted = FallowDeer_FabledPaintedRightSide;
const FallowDeer_FabledSilver = FallowDeer_FabledSilverRightSide;

const FallowDeer = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  const needZonesData = [
    {
      name: "Hirschfelden & Emerald Coast",
      schedule: [
        { time: "00:00 - 03:00", type: "Resting", icon: RestingZoneIcon },
        { time: "03:00 - 06:00", type: "Resting", icon: RestingZoneIcon },
        { time: "06:00 - 10:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "10:00 - 13:00", type: "Drinking", icon: DrinkingZoneIcon },
        { time: "13:00 - 17:00", type: "Resting", icon: RestingZoneIcon },
        { time: "17:00 - 21:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "21:00 - 00:00", type: "Resting", icon: RestingZoneIcon },
      ]
    }
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Docile and generally vocal" },
    { label: "Habitat", value: "Prefer a mix of deciduous forests and open areas" },
    { label: "Senses", value: "Good senses overall, particularly excellent vision" },
    { label: "Social", value: "Prefer to stay in medium to large groups" },
    { label: "Active", value: "During dusk and dawn" },
    { label: "Recommended Equipment", value: "Class 4 Ammo, Antler Rattler" },
    { label: "Species", value: "Dama dama", italic: true, isLink: true },
    { label: "Difficulty", value: "Average" },
  ];

  // Fur Gallery Data (split by sex)
  const maleGallery = [
    { name: "Albino", src: FallowDeer_AlbinoMaleRightSide },
    { name: "Chocolate", src: FallowDeer_ChocolateMaleRightSide },
    { name: "Dark", src: FallowDeer_DarkMaleRightSide },
    { name: "Dark Spotted", src: FallowDeer_DarkSpottedMaleRightSide },
    { name: "Melanistic", src: FallowDeer_MelanisticMaleRightSide },
    { name: "Piebald Variation 1 (Right)", src: FallowDeer_PiebaldVariation1MaleRightSide },
    { name: "Piebald Variation 1 (Left)", src: FallowDeer_PiebaldVariation1MaleLeftSide },
    { name: "Piebald Variation 2 (Right)", src: FallowDeer_PiebaldVariation2MaleRightSide },
    { name: "Piebald Variation 2 (Left)", src: FallowDeer_PiebaldVariation2MaleLeftSide },
    { name: "Spotted", src: FallowDeer_SpottedMaleRightSide },
    { name: "White", src: FallowDeer_WhiteMaleRightSide },
  ];

  const femaleGallery = [
    { name: "Albino", src: FallowDeer_AlbinoFemaleRightSide },
    { name: "Dark Spotted", src: FallowDeer_DarkSpottedFemaleRightSide },
    { name: "Melanistic", src: FallowDeer_MelanisticFemaleRightSide },
    { name: "Red Spotted", src: FallowDeer_RedSpottedFemaleRightSide },
    { name: "Spotted", src: FallowDeer_SpottedFemaleRightSide },
    { name: "Piebald (Right)", src: FallowDeer_PiebaldFemaleRightSide },
    { name: "Piebald (Left)", src: FallowDeer_PiebaldFemaleLeftSide },
  ];

  // Great One Fur Gallery Data
  const greatOneGallery = [
    { name: "Fabled Golden", src: FallowDeer_FabledGolden },
    { name: "Fabled Hooded", src: FallowDeer_FabledHooded },
    { name: "Fabled Mocha", src: FallowDeer_FabledMocha },
    { name: "Fabled Painted (Right)", src: FallowDeer_FabledPaintedRightSide },
    { name: "Fabled Painted (Left)", src: FallowDeer_FabledPaintedLeftSide },
    { name: "Fabled Silver", src: FallowDeer_FabledSilver },
  ];

  // Trivia Data
  const triviaData = [
    "Fallow Deer can be found on every continent except Antarctica.",
    "Believed to originate from South West Asia, the Fallow Deer is considered a naturalized species of Europe. A naturalized species is a species of organism that, despite not originating from a region, becomes effectively \"native\". It is believed the Fallow Deer was introduced to the Mediterranean in the Neolithic Era (10,000 BC - 2,200 BC), and the Normans introduced them to the British Isles around the 12th century AD.",
    "Fallow Deer can be found as Great Ones with the release of Emerald Coast on 20. June 2023."
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
          <span>Fallow Deer</span>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Fallow Deer</div>
            <div className="wiki-sidebar-image">
              <img src={FallowDeerMain} alt="Fallow Deer" />
            </div>
            
            <div className="wiki-sidebar-header">General Information</div>
            
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Class</span>
              <span><img src={class4Icon} alt="Class 4" className="inline-block wiki-class-icon-sm align-middle mr-1.5" />4</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Difficulty</span>
              <span>1: Trivial — 5: Medium</span><br/>
              <span>10: Fabled</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Trophy Type</span>
              <span>Antlers</span>
              <div className="wiki-trophy-grid">
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-silver">◆ Silver</span>
                  <span>104.89</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-gold">☗ Gold</span>
                  <span>187.81</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-diamond">☗ Diamond</span>
                  <span>249.99</span>
                </div>
              </div>
              <div style={{textAlign: 'center', marginTop: '10px'}}>
                 <span className="wiki-trophy-label wiki-great-one">✤ Great One</span>
              </div>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Weight</span>
              30kg — 100kg<br/>
              <span className="wiki-sidebar-muted">66lbs — 220lbs</span>
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Fur</span>
               <span className="wiki-fs-sm">
                 Albino, Chocolate, Dark, Dark Spotted, Melanistic, Piebald, Red Spotted, Spotted, White
               </span>
               <br/>
               <span style={{fontWeight:'bold', display:'block', marginTop:'5px'}}>Fabled Exclusive:</span>
               <span className="wiki-fs-sm">Painted, Golden, Mocha, Hooded, Silver</span>
            </div>

            <div className="wiki-sidebar-header">Locations</div>
            <div className="wiki-sidebar-section">
               <div className="wiki-mb-4"><span className="wiki-link">Hirschfelden Hunting Reserve</span></div>
               <div className="wiki-mb-4"><span className="wiki-link">Te Awaroa National Park</span></div>
               <div className="wiki-mb-4"><span className="wiki-link">Emerald Coast</span></div>
               <div className="wiki-mb-4"><span className="wiki-link">Tòrr nan Sithean</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main className="wiki-main">

            {/* Quote Block */}
            <div className="wiki-quote">
              "The fallow deer is a native species of Western Europe but has also been introduced to many other parts of the world by humans. Its name is derived from the deer's typical pale brown color. The bucks develop antlers that start out as single spikes and then often grow into broad and shovel-shaped (palmated) antlers which are lined by multiple smaller points. Bucks typically weigh in the range of 60 - 100 kg (130 - 220 lb). Does have no antlers and often weigh in between 30 - 50 kg (60 - 110 lb). The fallow deer is an herbivore preferring a mix of woodlands and open fields for grazing."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-p-mb">
              The <strong>Fallow Deer</strong> is a medium-sized <span className="wiki-link">class 4</span> deer, that can be hunted on <span className="wiki-link">Hirschfelden Hunting Reserve</span>, <span className="wiki-link">Te Awaroa National Park</span>, <span className="wiki-link">Emerald Coast</span> and <span className="wiki-link">Tòrr nan Sithean</span>. It is also one of the first animals huntable in game, as it shipped with the game all the way back in 2016.
            </p>

            {/* Table of Contents */}
            <div className="wiki-toc">
              <div className="wiki-toc-title">
                🔢 Contents <span className="wiki-toc-toggle">[hide]</span>
              </div>
                <ol className="wiki-toc">
                  <li><a href="#features" onClick={(e)=>scrollToId(e,'features')} className="wiki-link">Features</a></li>
                  <li><a href="#tips" onClick={(e)=>scrollToId(e,'tips')} className="wiki-link">Tips</a></li>
                  <li><a href="#need-zones" onClick={(e)=>scrollToId(e,'need-zones')} className="wiki-link">Need Zone Times</a></li>
                  <li><a href="#shot-scheme" onClick={(e)=>scrollToId(e,'shot-scheme')} className="wiki-link">Shot scheme</a></li>
                    <li>
                    <a href="#fur-variants" onClick={(e)=>scrollToId(e,'fur-variants')} className="wiki-link">Fur Variants</a>
                    <ol style={{margin:'6px 0 0 12px', paddingLeft: '12px', color: '#9fd3ff', listStyleType: 'none'}}>
                      <li><a href="#fur-male" onClick={(e)=>scrollToId(e,'fur-male')} className="wiki-link">5.1 Male</a></li>
                      <li><a href="#fur-female" onClick={(e)=>scrollToId(e,'fur-female')} className="wiki-link">5.2 Female</a></li>
                    </ol>
                  </li>
                  <li><a href="#fur-great-ones" onClick={(e)=>scrollToId(e,'fur-great-ones')} className="wiki-link">Fur Variants | Great One</a></li>
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

            {/* TIPS */}
            <h2 className="wiki-h2" id="tips">Tips</h2>
            <p className="wiki-mb-20">
                Te Awaroa is without a doubt the easiest map to grind because it has fewer drink zones for the fallow deer. On top of that, they only roam the South-Eastern part of the map.
            </p>
            
            {/* NEED ZONE TIMES */}
            <h2 className="wiki-h2" id="need-zones">Need Zone Times</h2>
            <div className="wiki-inline-block">
                <table className="wiki-table wiki-table-fixed">
                    <thead>
                        <tr><th colSpan="2" className="wiki-th wiki-th-center">Hirschfelden & Emerald Coast</th></tr>
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

            {/* FUR VARIANTS (Gallery) */}
            <h2 className="wiki-h2" id="fur-variants">Fur Variants</h2>

            <h3 id="fur-male" style={{marginTop: '10px', color: '#a8d0e6'}}>Male</h3>
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

            <h3 id="fur-female" style={{marginTop: '20px', color: '#a8d0e6'}}>Female</h3>
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
                        <tr>
                            <td className="wiki-td wiki-td-muted">
                                Male
                            </td>
                            <td className="wiki-td">
                                Dark Spotted (14.93%)<br/>
                                Spotted (29.86%)<br/>
                                Dark (29.86%)<br/>
                                Chocolate (12.49%)<br/>
                                White (12.49%)
                            </td>
                            <td className="wiki-td">X</td>
                            <td className="wiki-td">
                                Piebald Variation 1 (0.15%)<br/>
                                Piebald Variation 2 (0.15%)
                            </td>
                            <td className="wiki-td">
                                Albino (0.04%)<br/>
                                Melanistic (0.04%)
                            </td>
                        </tr>
                        <tr>
                            <td className="wiki-td wiki-td-female">
                                Female
                            </td>
                            <td className="wiki-td">
                                Red Spotted (38.33%)<br/>
                                Spotted (38.33%)<br/>
                                Dark Spotted (23.00%)
                            </td>
                            <td className="wiki-td">X</td>
                            <td className="wiki-td">
                                Piebald (0.23%)
                            </td>
                            <td className="wiki-td">
                                Albino (0.06%)<br/>
                                Melanistic (0.06%)
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* TRIVIA */}
            <h2 className="wiki-h2" id="trivia">Trivia</h2>
            <ul className="wiki-ul wiki-ul-disc">
                {triviaData.map((point, idx) => (
                    <li key={idx} className="wiki-mb-10">{point}</li>
                ))}
            </ul>

            {/* REFERENCES */}
            <h2 className="wiki-h2" id="references">References</h2>
            <ul className="wiki-ul wiki-ul-disc">
              <li style={{marginBottom: '8px'}}>Fallow Deer Need Zones, Hirschfelden</li>
              <li style={{marginBottom: '8px'}}>Fallow Deer Need Zones, Emerald Coast</li>
              <li style={{marginBottom: '8px'}}><a href="https://www.nps.gov/pore/learn/nature/nonnativespecies_deer.htm" target="_blank" rel="noopener noreferrer" className="wiki-link">https://www.nps.gov/pore/learn/nature/nonnativespecies_deer.htm</a></li>
              <li style={{marginBottom: '8px'}}><a href="https://www.mammal.org.uk/species-hub/full-species-hub/discover-mammals/species-fallow-deer/" target="_blank" rel="noopener noreferrer" className="wiki-link">https://www.mammal.org.uk/species-hub/full-species-hub/discover-mammals/species-fallow-deer/</a></li>
              <li style={{marginBottom: '8px'}}><a href="https://www.wildlifetrusts.org/wildlife-explorer/mammals/fallow-deer" target="_blank" rel="noopener noreferrer" className="wiki-link">https://www.wildlifetrusts.org/wildlife-explorer/mammals/fallow-deer</a></li>
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

export default FallowDeer;