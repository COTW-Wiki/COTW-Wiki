import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import DrinkingZoneIcon from '../../../assets/DrinkingZoneIcon.webp';
import class7Icon from '../../../assets/Class7Icon.webp'; // Class 7 for Sambar
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import SambarMain from '../../../assets/SambarDeer.webp';
import ShotSchemeImg from '../../../assets/Sambar_shot_scheme.webp';

// Fur Variant Images - Male
import Sambar_AlbinoMaleRightSide from '../../../assets/Sambar_AlbinoMaleRightSide.webp';
import Sambar_BrownMaleRightSide from '../../../assets/Sambar_BrownMaleRightSide.webp';
import Sambar_DarkBrownMaleRightSide from '../../../assets/Sambar_DarkBrownMaleRightSide.webp';
import Sambar_DuskyGradientMaleRightSide from '../../../assets/Sambar_DuskyGradientMaleRightSide.webp';
import Sambar_LeucisticVariation1MaleRightSide from '../../../assets/Sambar_LeucisticVariation1MaleRightSide.webp';
import Sambar_LeucisticVariation2MaleRightSide from '../../../assets/Sambar_LeucisticVariation2MaleRightSide.webp';
import Sambar_LightBrownMaleRightSide from '../../../assets/Sambar_LightBrownMaleRightSide.webp';
import Sambar_PiebaldVariation1MaleRightSide from '../../../assets/Sambar_PiebaldVariation1MaleRightSide.webp';
import Sambar_PiebaldVariation1MaleLeftSide from '../../../assets/Sambar_PiebaldVariation1MaleLeftSide.webp';
import Sambar_PiebaldVariation2MaleRightSide from '../../../assets/Sambar_PiebaldVariation2MaleRightSide.webp';
import Sambar_PiebaldVariation2MaleLeftSide from '../../../assets/Sambar_PiebaldVariation2MaleLeftSide.webp';

// Fur Variant Images - Female
import Sambar_AlbinoFemaleRightSide from '../../../assets/Sambar_AlbinoFemaleRightSide.webp';
import Sambar_BrownFemaleRightSide from '../../../assets/Sambar_BrownFemaleRightSide.webp';
import Sambar_DarkBrownFemaleRightSide from '../../../assets/Sambar_DarkBrownFemaleRightSide.webp';
import Sambar_DuskyGradientFemaleRightSide from '../../../assets/Sambar_DuskyGradientFemaleRightSide.webp';
import Sambar_LeucisticFemaleRightSide from '../../../assets/Sambar_LeucisticFemaleRightSide.webp';
import Sambar_LightBrownFemaleRightSide from '../../../assets/Sambar_LightBrownFemaleRightSide.webp';
import Sambar_PiebaldFemaleRightSide from '../../../assets/Sambar_PiebaldFemaleRightSide.webp';
import Sambar_PiebaldFemaleLeftSide from '../../../assets/Sambar_PiebaldFemaleLeftSide.webp';


const Sambar = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  const needZonesData = [
    {
      name: "Emerald Coast",
      schedule: [
        { time: "00:00 - 03:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "03:00 - 06:00", type: "Resting", icon: RestingZoneIcon },
        { time: "06:00 - 09:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "09:00 - 13:00", type: "Resting", icon: RestingZoneIcon },
        { time: "13:00 - 17:00", type: "Resting", icon: RestingZoneIcon },
        { time: "17:00 - 20:00", type: "Drinking", icon: DrinkingZoneIcon },
        { time: "20:00 - 00:00", type: "Feeding", icon: FeedingZoneIcon },
      ]
    }
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Feral grazing social herbivore" },
    { label: "Habitat", value: "Grassy areas near woodlands, forest, farmland" },
    { label: "Senses", value: "Excellent smell, good hearing, decent sight" },
    { label: "Social", value: "Found in small groups or pairs. Males are often seen alone" },
    { label: "Active", value: "Nocturnal, grazing during the day" },
    { label: "Recommended Equipment", value: "Class 7 ammo, Sambar Caller" },
    { label: "Species", value: "Rusa Unicolor", italic: true, isLink: true },
    { label: "Difficulty", value: "Easy" },
  ];

  // Fur Gallery Data - Male
  const maleFurGallery = [
    { name: "Albino", src: Sambar_AlbinoMaleRightSide },
    { name: "Brown", src: Sambar_BrownMaleRightSide },
    { name: "Dark Brown", src: Sambar_DarkBrownMaleRightSide },
    { name: "Dusky Gradient", src: Sambar_DuskyGradientMaleRightSide },
    { name: "Leucistic Variation 1", src: Sambar_LeucisticVariation1MaleRightSide },
    { name: "Leucistic Variation 2", src: Sambar_LeucisticVariation2MaleRightSide },
    { name: "Light Brown", src: Sambar_LightBrownMaleRightSide },
    { name: "Piebald Variation 1 (Right)", src: Sambar_PiebaldVariation1MaleRightSide },
    { name: "Piebald Variation 1 (Left)", src: Sambar_PiebaldVariation1MaleLeftSide },
    { name: "Piebald Variation 2 (Right)", src: Sambar_PiebaldVariation2MaleRightSide },
    { name: "Piebald Variation 2 (Left)", src: Sambar_PiebaldVariation2MaleLeftSide },
  ];

  // Fur Gallery Data - Female
  const femaleFurGallery = [
    { name: "Albino", src: Sambar_AlbinoFemaleRightSide },
    { name: "Brown", src: Sambar_BrownFemaleRightSide },
    { name: "Dark Brown", src: Sambar_DarkBrownFemaleRightSide },
    { name: "Dusky Gradient", src: Sambar_DuskyGradientFemaleRightSide },
    { name: "Leucistic", src: Sambar_LeucisticFemaleRightSide },
    { name: "Light Brown", src: Sambar_LightBrownFemaleRightSide },
    { name: "Piebald (Right)", src: Sambar_PiebaldFemaleRightSide },
    { name: "Piebald (Left)", src: Sambar_PiebaldFemaleLeftSide },
  ];

  // Trivia Data
  const triviaData = [
    "The word 'SAMBAR' is a reference to a famous Indian stew which, legend has it, was created by Indian Prince 'Sambhaji' (शंभर). How this connected to the name of the Sambar Deer is a mystery.",
    "During the rut, Male Sambar Deer (as well as pregnant/ lactating female Sambar Deer) will produce a bald red spot on their throats that oozes a strange liquid. Why this happens scientist don't quite know.",
    "When threatened, Sambar Deer will make a strange and unique \"honking\" sound that can only be described as a mix between a goose and a chihuahua.",
    "The Sambar Deer is the largest deer species native to India and Southeast Asia. It is also the 3rd largest deer species in the world. This subsequently makes it the 4th largest deer species in game. Only the Rocky Mountain Elk, it's subspecies the Roosevelt Elk, and the Moose are larger."
  ];

  // References Data
  const referencesData = [
    "Sambar Need Zones, Emerald Coast",
    "https://en.wikipedia.org/wiki/Sambar_(dish)",
    "https://a-z-animals.com/animals/sambar/",
    "https://a-z-animals.com/animals/deer/deer-facts/the-largest-deer-in-the-world/"
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
          <span>Sambar</span>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Sambar</div>
            <div className="wiki-sidebar-image">
              <img src={SambarMain} alt="Sambar" />
            </div>
            
            <div className="wiki-sidebar-header">General Information</div>
            
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Class</span>
              <span><img src={class7Icon} alt="Class 7" className="wiki-class-icon-lg"/>7</span>
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
                  <span>67.92</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-gold">☗ Gold</span>
                  <span>124.21</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-diamond">☗ Diamond</span>
                  <span>166.24</span>
                </div>
              </div>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Weight</span>
              180kg — 300kg<br/>
              <span className="wiki-sidebar-muted">397lbs — 661lbs</span>
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Fur</span>
               <span className="wiki-fs-sm">
                 Albino, Brown, Dark Brown, Dusky Gradient, Leucistic, Light Brown, Piebald
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
              "The largest of the feral species of deer in Australia, originating from India and south-east Asia, they were introduced in the 19th century. They have established a population in Southern Australia. Seeing them in herds is rare, but they are considered to be solitary animals.
              <br/><br/>
              The coat of the Sambar deer is coarse with a color the goes from dark grey to reddish brown. Also, they have a lighter underside and a dark tail. Unlike the females of the species, the males grow a mane on the throat in a darker color. There is also a significant size difference between males and females, growing to 1.6 m and 1.15 m shoulder height and weighing up to 300.00 kg and 230.00 kg respectively."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-p-mb">
              The <strong>Sambar Deer</strong> is a (<span className="wiki-link">Class 7</span>) deer species that can be hunted on <span className="wiki-link">Emerald Coast</span>. It is one of two species under the genus "Rusa" in game. The other is the <span className="wiki-link">Javan Rusa</span>.
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
                <ol style={{listStyleType: 'none', marginLeft: '-20px'}}>
                     <li><a href="#fur-male" onClick={(e)=>scrollToId(e,'fur-male')} style={{...styles.link, marginLeft:'20px'}}>4.1. Male</a></li>
                     <li><a href="#fur-female" onClick={(e)=>scrollToId(e,'fur-female')} style={{...styles.link, marginLeft:'20px'}}>4.2. Female</a></li>
                </ol>
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
                        <tr><th colSpan="2" className="wiki-th wiki-th-center">Emerald Coast</th></tr>
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
              {maleFurGallery.map((item, i) => (
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
              {femaleFurGallery.map((item, i) => (
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
                        {/* Male Row */}
                        <tr>
                            <td className="wiki-td wiki-td-muted">
                                Male
                            </td>
                            <td className="wiki-td">
                                Dusky Gradient (25.01%)<br/>
                                Brown (24.91%)<br/>
                                Dark Brown (24.91%)<br/>
                                Light Brown (24.91%)
                            </td>
                            <td className="wiki-td">
                                X
                            </td>
                            <td className="wiki-td">
                                X
                            </td>
                            <td className="wiki-td">
                                Albino (0.05%)<br/>
                                Leucistic Variation 1 (0.05%)<br/>
                                Leucistic Variation 2 (0.05%)<br/>
                                Piebald Variation 1 (0.05%)<br/>
                                Piebald Variation 2 (0.05%)
                            </td>
                        </tr>
                        {/* Female Row */}
                        <tr>
                            <td className="wiki-td wiki-td-female">
                                Female
                            </td>
                            <td className="wiki-td">
                                Dusky Gradient (25.04%)<br/>
                                Brown (24.94%)<br/>
                                Dark Brown (24.94%)<br/>
                                Light Brown (24.94%)
                            </td>
                            <td className="wiki-td">
                                X
                            </td>
                            <td className="wiki-td">
                                X
                            </td>
                            <td className="wiki-td">
                                Albino (0.05%)<br/>
                                Leucistic (0.05%)<br/>
                                Piebald (0.05%)
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

export default Sambar;