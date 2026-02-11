import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import DrinkingZoneIcon from '../../../assets/DrinkingZoneIcon.webp';
import class3Icon from '../../../assets/Class3Icon.webp'; // Class 3 for Blackbuck
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import BlackbuckMain from '../../../assets/Blackbuck.webp';
import ShotSchemeImage from '../../../assets/Blackbuck_shot_scheme.webp';

// Fur Variant Images (Placeholders)
import Blackbuck_AlbinoMaleRightSide from '../../../assets/Blackbuck_AlbinoMaleRightSide.webp';
import Blackbuck_BeigeMaleRightSide from '../../../assets/Blackbuck_BeigeMaleRightSide.webp';
import Blackbuck_BrownMaleRightSide from '../../../assets/Blackbuck_BrownMaleRightSide.webp';
import Blackbuck_DarkBrownMaleRightSide from '../../../assets/Blackbuck_DarkBrownMaleRightSide.webp';
import Blackbuck_LeucisticMaleRightSide from '../../../assets/Blackbuck_LeucisticMaleRightSide.webp';
import Blackbuck_MelanisticMaleRightSide from '../../../assets/Blackbuck_MelanisticMaleRightSide.webp';
import Blackbuck_PiebaldMaleRightSide from '../../../assets/Blackbuck_PiebaldMaleRightSide.webp';
import Blackbuck_PiebaldMaleLeftSide from '../../../assets/Blackbuck_PiebaldMaleLeftSide.webp';

import Blackbuck_AlbinoFemaleRightSide from '../../../assets/Blackbuck_AlbinoFemaleRightSide.webp';
import Blackbuck_BeigeFemaleRightSide from '../../../assets/Blackbuck_BeigeFemaleRightSide.webp';
import Blackbuck_BrownFemaleRightSide from '../../../assets/Blackbuck_BrownFemaleRightSide.webp';
import Blackbuck_LeucisticFemaleRightSide from '../../../assets/Blackbuck_LeucisticFemaleRightSide.webp';
import Blackbuck_MelanisticFemaleRightSide from '../../../assets/Blackbuck_MelanisticFemaleRightSide.webp';
import Blackbuck_PiebaldFemaleRightSide from '../../../assets/Blackbuck_PiebaldFemaleRightSide.webp';
import Blackbuck_PiebaldFemaleLeftSide from '../../../assets/Blackbuck_PiebaldFemaleLeftSide.webp';

const Blackbuck = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  const needZonesData = [
    {
      name: "Parque Fernando",
      schedule: [
        { time: "00:00 - 03:30", type: "Resting", icon: RestingZoneIcon },
        { time: "03:00 - 06:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "06:00 - 09:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "09:00 - 12:30", type: "Resting", icon: RestingZoneIcon },
        { time: "12:00 - 15:30", type: "Resting", icon: RestingZoneIcon },
        { time: "15:00 - 18:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "18:00 - 21:30", type: "Drinking", icon: DrinkingZoneIcon },
        { time: "21:00 - 00:30", type: "Resting", icon: RestingZoneIcon },
      ]
    },
    {
      name: "Sundarpatan",
      schedule: [
        { time: "00:00 - 03:00", type: "Resting", icon: RestingZoneIcon },
        { time: "03:00 - 06:00", type: "Resting", icon: RestingZoneIcon },
        { time: "06:00 - 09:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "09:00 - 12:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "12:00 - 15:00", type: "Resting", icon: RestingZoneIcon },
        { time: "15:00 - 18:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "18:00 - 21:00", type: "Drinking", icon: DrinkingZoneIcon },
        { time: "21:00 - 00:00", type: "Resting", icon: RestingZoneIcon },
      ]
    }
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Mainly sedentary, but may move longer distances in search of water and forage; extremely fast" },
    { label: "Habitat", value: "Prefer forests and grasslands where water is perennially available" },
    { label: "Senses", value: "Excellent vision, good sense of smell, but otherwise poor hearing" },
    { label: "Social", value: "Mixed herds and bachelor herds, group size fluctuate based on the availability of food" },
    { label: "Active", value: "Active throughout the day, typically take long breaks during the hottest hours of the day" },
    { label: "Recommended Equipment", value: "Class 3 Ammo, Antler Rattler" },
    { label: "Species", value: "Antilope cervicapra", italic: true, isLink: true },
    { label: "Difficulty", value: "Average" },
  ];

  // Fur Gallery Data (separate male / female)
  const maleGallery = [
    { name: "Albino (Male)", src: Blackbuck_AlbinoMaleRightSide },
    { name: "Beige (Male)", src: Blackbuck_BeigeMaleRightSide },
    { name: "Brown (Male)", src: Blackbuck_BrownMaleRightSide },
    { name: "Dark Brown (Male)", src: Blackbuck_DarkBrownMaleRightSide },
    { name: "Leucistic (Male)", src: Blackbuck_LeucisticMaleRightSide },
    { name: "Melanistic (Male)", src: Blackbuck_MelanisticMaleRightSide },
    { name: "Piebald (Male) Right Side", src: Blackbuck_PiebaldMaleRightSide },
    { name: "Piebald (Male) Left Side", src: Blackbuck_PiebaldMaleLeftSide },
  ];

  const femaleGallery = [
    { name: "Albino (Female)", src: Blackbuck_AlbinoFemaleRightSide },
    { name: "Beige (Female)", src: Blackbuck_BeigeFemaleRightSide },
    { name: "Brown (Female)", src: Blackbuck_BrownFemaleRightSide },
    { name: "Leucistic (Female)", src: Blackbuck_LeucisticFemaleRightSide },
    { name: "Melanistic (Female)", src: Blackbuck_MelanisticFemaleRightSide },
    { name: "Piebald (Female) Right Side", src: Blackbuck_PiebaldFemaleRightSide },
    { name: "Piebald (Female) Left Side", src: Blackbuck_PiebaldFemaleLeftSide },
  ];

  // Trivia Data
  const triviaData = [
    "Blackbucks are considered sacred in some cultures, such as Hinduism, and are protected by law in India.",
    "In the 20th century the Blackbuck was hunted to near extinction in some areas of India. Since then, lots of conservation efforts were made and the population is recovering."
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
          <span>Blackbuck</span>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Blackbuck</div>
            <div className="wiki-sidebar-image wiki-sidebar-image--contain">
              <img src={BlackbuckMain} alt="Blackbuck" className="wiki-img-contain" />
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
                  <span>71.8</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-gold">☗ Gold</span>
                  <span>106.3</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-diamond">☗ Diamond</span>
                  <span>132.2</span>
                </div>
              </div>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Weight</span>
              ? — 51kg<br/>
              <span className="wiki-sidebar-muted">? — 112lbs</span>
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Fur</span>
               <span className="wiki-fs-sm">
                 Albino, Beige, Brown, Dark Brown, Leucistic, Melanistic, Piebald
               </span>
            </div>

            <div className="wiki-sidebar-header">Locations</div>
            <div className="wiki-sidebar-section">
               <div className="wiki-mb-4"><span className="wiki-link">Parque Fernando</span>, <span className="wiki-link">Sundarpatan</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main className="wiki-main">

            {/* Quote Block */}
            <div className="wiki-quote">
              "The blackbuck is an antelope native to and found mainly in India, but which in recent years has enjoyed great success throughout the United States and Argentina. Their long, spiraling horns, white-ringed eyes, and stout physique make them easily recognizable and a popular symbol of Indian culture. The blackbuck is active mainly during the day but will take regularly take extended breaks in the hottest hours of the day. Due to their regular need of water, blackbucks are fairly sedentary and prefer to stay in areas where water is found year round, but during drought and dry seasons, blackbucks may expand their home range in search of water and forage. The size of blackbuck herds varies throughout the year and is directly tied to the availability of food."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-p-mb">
              The <strong>Blackbuck</strong> is a <span className="wiki-link">class 3</span> antelope. It can be hunted in <span className="wiki-link">Parque Fernando</span> and <span className="wiki-link">Sundarpatan</span>.
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
                <li>
                  <a href="#fur-variants" className="wiki-link" onClick={scrollToId('fur-variants')}>Fur Variants</a>
                  <ol style={{margin:'6px 0 0 0', paddingLeft: '0', color: '#6fb2e6', listStyleType: 'none'}}>
                    <li><a href="#male-variants" className="wiki-link" onClick={scrollToId('male-variants')}>4.1 Male</a></li>
                    <li><a href="#female-variants" className="wiki-link" onClick={scrollToId('female-variants')}>4.2 Female</a></li>
                  </ol>
                </li>
                <li><a href="#fur-variant-rarity" className="wiki-link" onClick={scrollToId('fur-variant-rarity')}>Fur Variant Rarity</a></li>
                <li><a href="#trivia" className="wiki-link" onClick={scrollToId('trivia')}>Trivia</a></li>
                <li><a href="#references" className="wiki-link" onClick={scrollToId('references')}>References</a></li>
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

            {/* FUR VARIANTS (Gallery) */}
            <h2 id="fur-variants" className="wiki-h2">Fur Variants</h2>

            <h3 id="male-variants" className="wiki-h3 text-[1.1rem] mt-2 border-b-0">Male</h3>
            <div className="wiki-gallery-grid">
              {maleGallery.map((item, i) => (
                <div key={"m-"+i} className="wiki-gallery-item">
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
                <div key={"f-"+i} className="wiki-gallery-item">
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
                                Dark Brown (53.76%)<br/>
                                Brown (35.84%)
                            </td>
                            <td className="wiki-td">
                                Beige (9.96%)
                            </td>
                            <td className="wiki-td">
                                Piebald (0.30%)
                            </td>
                            <td className="wiki-td">
                                Albino (0.05%)<br/>
                                Leucistic (0.05%)<br/>
                                Melanistic (0.05%)
                            </td>
                        </tr>
                        <tr>
                            <td className="wiki-td wiki-td-female">
                                Female
                            </td>
                            <td className="wiki-td">
                                Beige (57.84%)<br/>
                                Brown (41.64%)
                            </td>
                            <td className="wiki-td">X</td>
                            <td className="wiki-td">
                                Piebald (0.35%)
                            </td>
                            <td className="wiki-td">
                                Albino (0.06%)<br/>
                                Leucistic (0.06%)<br/>
                                Melanistic (0.06%)
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
              <li style={{marginBottom: '8px'}}>Blackbuck Need Zones, Sundarpatan</li>
              <li style={{marginBottom: '8px'}}><a href="https://terrapampalodge.com" className="wiki-link" target="_blank" rel="noopener noreferrer">terrapampalodge.com</a></li>
              <li style={{marginBottom: '8px'}}><a href="https://nationalzoo.com" className="wiki-link" target="_blank" rel="noopener noreferrer">nationalzoo.com</a></li>
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

export default Blackbuck;