import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import DrinkingZoneIcon from '../../../assets/DrinkingZoneIcon.webp';
import class3Icon from '../../../assets/Class3Icon.webp'; // Class 3 for Pronghorn
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import PronghornMain from '../../../assets/Pronghorn.webp';
import ShotSchemeImage from '../../../assets/Pronghorn_shot_scheme.webp';

// Fur Variant Images (Placeholders)
import Pronghorn_AlbinoMaleRightSide from '../../../assets/Pronghorn_AlbinoMaleRightSide.webp';
import Pronghorn_BrownMaleRightSide from '../../../assets/Pronghorn_BrownMaleRightSide.webp';
import Pronghorn_DarkMaleRightSide from '../../../assets/Pronghorn_DarkMaleRightSide.webp';
import Pronghorn_LeucisticMaleRightSide from '../../../assets/Pronghorn_LeucisticMaleRightSide.webp';
import Pronghorn_MelanisticMaleRightSide from '../../../assets/Pronghorn_MelanisticMaleRightSide.webp';
import Pronghorn_PiebaldVariation1MaleRightSide from '../../../assets/Pronghorn_PiebaldVariation1MaleRightSide.webp';
import Pronghorn_PiebaldVariation2MaleRightSide from '../../../assets/Pronghorn_PiebaldVariation2MaleRightSide.webp';
import Pronghorn_PiebaldVariation2MaleLeftSide from '../../../assets/Pronghorn_PiebaldVariation2MaleLeftSide.webp';
import Pronghorn_TanMaleRightSide from '../../../assets/Pronghorn_TanMaleRightSide.webp';

import Pronghorn_AlbinoFemaleRightSide from '../../../assets/Pronghorn_AlbinoFemaleRightSide.webp';
import Pronghorn_BrownFemaleRightSide from '../../../assets/Pronghorn_BrownFemaleRightSide.webp';
import Pronghorn_DarkFemaleRightSide from '../../../assets/Pronghorn_DarkFemaleRightSide.webp';
import Pronghorn_LeucisticFemaleRightSide from '../../../assets/Pronghorn_LeucisticFemaleRightSide.webp';
import Pronghorn_MelanisticFemaleRightSide from '../../../assets/Pronghorn_MelanisticFemaleRightSide.webp';
import Pronghorn_PiebaldVariation1FemaleRightSide from '../../../assets/Pronghorn_PiebaldVariation1FemaleRightSide.webp';
import Pronghorn_PiebaldVariation1FemaleLeftSide from '../../../assets/Pronghorn_PiebaldVariation1FemaleLeftSide.webp';
import Pronghorn_TanFemaleRightSide from '../../../assets/Pronghorn_TanFemaleRightSide.webp';


const Pronghorn = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  const needZonesData = [
    {
      name: "Askiy Ridge",
      schedule: [
        { time: "00:00 - 03:00", type: "Resting", icon: RestingZoneIcon },
        { time: "03:00 - 06:00", type: "Resting", icon: RestingZoneIcon },
        { time: "06:00 - 09:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "09:00 - 12:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "12:00 - 15:00", type: "Resting", icon: RestingZoneIcon },
        { time: "15:00 - 18:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "18:00 - 21:00", type: "Drinking", icon: DrinkingZoneIcon },
        { time: "21:00 - 00:00", type: "Feeding", icon: FeedingZoneIcon },
      ]
    }
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Curious, alert and agile" },
    { label: "Habitat", value: "Dry plains" },
    { label: "Senses", value: "Good vision and average smell and hearing" },
    { label: "Social", value: "Mixed herds in winter, same-sex groups during mating season" },
    { label: "Active", value: "Sporadic activity throughout day and night" },
    { label: "Recommended Equipment", value: "Class 3 Ammo" },
    { label: "Species", value: "Antilocapra americana", italic: true, isLink: true },
    { label: "Difficulty", value: "Average" },
  ];

  // Fur Gallery Data - split male / female
  const maleGallery = [
    { name: "Albino", src: Pronghorn_AlbinoMaleRightSide },
    { name: "Brown", src: Pronghorn_BrownMaleRightSide },
    { name: "Dark", src: Pronghorn_DarkMaleRightSide },
    { name: "Leucistic", src: Pronghorn_LeucisticMaleRightSide },
    { name: "Melanistic", src: Pronghorn_MelanisticMaleRightSide },
    { name: "Piebald Variation 1 (Right)", src: Pronghorn_PiebaldVariation1MaleRightSide },
    { name: "Piebald Variation 2 (Right)", src: Pronghorn_PiebaldVariation2MaleRightSide },
    { name: "Piebald Variation 2 (Left)", src: Pronghorn_PiebaldVariation2MaleLeftSide },
    { name: "Tan", src: Pronghorn_TanMaleRightSide },
  ];

  const femaleGallery = [
    { name: "Albino", src: Pronghorn_AlbinoFemaleRightSide },
    { name: "Brown", src: Pronghorn_BrownFemaleRightSide },
    { name: "Dark", src: Pronghorn_DarkFemaleRightSide },
    { name: "Leucistic", src: Pronghorn_LeucisticFemaleRightSide },
    { name: "Melanistic", src: Pronghorn_MelanisticFemaleRightSide },
    { name: "Piebald Variation 1 (Right)", src: Pronghorn_PiebaldVariation1FemaleRightSide },
    { name: "Piebald Variation 1 (Left)", src: Pronghorn_PiebaldVariation1FemaleLeftSide },
    { name: "Tan", src: Pronghorn_TanFemaleRightSide },
  ];

  // Trivia Data
  const triviaData = [
    "The Pronghorn's blazing speed is an example of an evolutionary anachronism; a phenomenon where animals keep useful traits despite not needing them anymore. It is believed that Pronghorns developed this trait to run away from now extinct predators such as the American Cheetah (Miracinonyx)."
  ];

  // Smooth scroll helper for TOC links
  const scrollToId = (id) => (e) => {
    if (e && e.preventDefault) e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    try { window.history.replaceState(null, '', `#${id}`); } catch (err) {}
  };

  return (
    <div className="wiki-page">
      <div className="wiki-inner">
        
        {/* PAGE HEADER */}
        <div className="wiki-header">
          <span>Pronghorn</span>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Pronghorn</div>
            <div className="wiki-sidebar-image wiki-sidebar-image--contain">
              <img src={PronghornMain} alt="Pronghorn" className="wiki-img-contain" />
            </div>
            
            <div className="wiki-sidebar-header">General Information</div>
            
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Class</span>
              <span><img src={class3Icon} alt="Class 3" className="inline-block wiki-class-icon-sm align-middle mr-1.5" />3</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Difficulty</span>
              <span>1: Trivial — 5: Medium</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Trophy Type</span>
              <span>Horns</span>
              <div className="wiki-trophy-grid">
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-silver">◆ Silver</span>
                  <span>36.65</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-gold">☗ Gold</span>
                  <span>77.42</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-diamond">☗ Diamond</span>
                  <span>108</span>
                </div>
              </div>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Weight</span>
              35kg — 65kg<br/>
              <span className="wiki-sidebar-muted">77lbs — 143lbs</span>
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Fur</span>
               <span className="wiki-fs-sm">
                 Albino, Brown, Dark, Leucistic, Melanistic, Piebald, Tan
               </span>
            </div>

            <div className="wiki-sidebar-header">Locations</div>
            <div className="wiki-sidebar-section">
               <div className="wiki-mb-4"><span className="wiki-link">Silver Ridge Peaks</span></div>
               <div className="wiki-mb-4"><span className="wiki-link">Rancho del Arroyo</span></div>
               <div className="wiki-mb-4"><span className="wiki-link">Askiy Ridge Hunting Preserve</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main className="wiki-main">

            {/* Quote Block */}
            <div className="wiki-quote">
              "The pronghorn is a species endemic to the Western plains of North America. Often colloquially referred to as "American antelope, they are not closely related to the true antelopes inhabiting Africa. Pronghorns are well-adapted to the open plains, they inhabit. They rely on their strong senses and great speed to spot and escape threats. Adult pronghorns can sprint as fast as 90 km/h (55 mph), making it the second fastest land animal after the African cheetah. Another particularity of the pronghorn is that they are the only animal to shed the keratin sheath of their horns and regrow it every year. Adults can measure up to 1.00 m tall at the shoulder. Males weigh up to 65.00 kg, while females reach 50.00 kg."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-p-mb">
              The <strong>Pronghorn</strong> is a <span className="wiki-link">class 3</span> animal that can be found on <span className="wiki-link">Silver Ridge Peaks</span>. It was retroactively added to <span className="wiki-link">Rancho del Arroyo</span> with the release of the Granite Update in December 2022. It is currently the fastest land animal in game.
            </p>

            {/* Table of Contents */}
            <div className="wiki-toc">
              <div className="wiki-toc-title">
                🔢 Contents <span className="wiki-toc-toggle">[hide]</span>
              </div>
              <ol className="wiki-toc">
                <li><a href="#features" className="wiki-link" onClick={scrollToId('features')}>Features</a></li>
                <li><a href="#need-zone-times" className="wiki-link" onClick={scrollToId('need-zone-times')}>Need Zone Times</a></li>
                <li><a href="#shot-scheme" className="wiki-link" onClick={scrollToId('shot-scheme')}>Shot scheme</a></li>
                <li><a href="#tips" className="wiki-link" onClick={scrollToId('tips')}>Tips</a></li>
                <li>
                  <a href="#fur-variants" className="wiki-link" onClick={scrollToId('fur-variants')}>Fur Variants</a>
                  <ol style={{marginTop:'6px', marginLeft: '14px', paddingLeft: '6px', listStyle: 'none'}}>
                    <li><a href="#male-variants" className="wiki-link" onClick={scrollToId('male-variants')}>5.1 Male</a></li>
                    <li><a href="#female-variants" className="wiki-link" onClick={scrollToId('female-variants')}>5.2 Female</a></li>
                  </ol>
                </li>
                <li><a href="#fur-variant-rarity" className="wiki-link" onClick={scrollToId('fur-variant-rarity')}>Fur Variant Rarity</a></li>
                <li><a href="#trivia" className="wiki-link" onClick={scrollToId('trivia')}>Trivia</a></li>
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
            <h2 id="need-zone-times" className="wiki-h2">Need Zone Times</h2>
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

            {/* TIPS */}
            <h2 id="tips" className="wiki-h2">Tips</h2>
            <p className="wiki-mb-20">
                Found in the lower areas of the reserve, these stunning animals are sure to provide some great hunting opportunities!
            </p>

            {/* FUR VARIANTS (Gallery) */}
            <h2 id="fur-variants" className="wiki-h2">Fur Variants</h2>
            <h3 id="male-variants" className="wiki-h3 text-[1.1rem] mt-2 border-b-0">Male</h3>
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

            <h3 id="female-variants" className="wiki-h3 text-[1.1rem] mt-2 border-b-0">Female</h3>
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
                                Male
                            </td>
                            <td className="wiki-td">
                                Tan (37.30%)<br/>
                                Brown (37.30%)<br/>
                                Dark (25.00%)
                            </td>
                            <td className="wiki-td">X</td>
                            <td className="wiki-td">
                                Piebald Variation 1 (0.20%)<br/>
                                Piebald Variation 2 (0.10%)
                            </td>
                            <td className="wiki-td">
                                Albino (0.03%)<br/>
                                Leucistic (0.03%)<br/>
                                Melanistic (0.03%)
                            </td>
                        </tr>
                        <tr>
                            <td className="wiki-td wiki-td-female">
                                Female
                            </td>
                            <td className="wiki-td">
                                Tan (37.34%)<br/>
                                Brown (37.34%)<br/>
                                Dark (25.03%)
                            </td>
                            <td className="wiki-td">X</td>
                            <td className="wiki-td">
                                Piebald (0.10%)
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

export default Pronghorn;