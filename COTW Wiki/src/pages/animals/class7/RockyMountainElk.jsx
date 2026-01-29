import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import DrinkingZoneIcon from '../../../assets/DrinkingZoneIcon.webp';
import class7Icon from '../../../assets/Class7Icon.webp'; // Class 7 for Rocky Mountain Elk
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import RockyMountainElkMain from '../../../assets/RockyMountainElk.webp';
import ShotSchemeImg from '../../../assets/Roosevelt_elk_shot_scheme.webp';

// Fur Variant Images - Male
import RockyMountainElk_AlbinoMaleLeftSide from '../../../assets/RockyMountainElk_AlbinoMaleLeftSide.webp';
import RockyMountainElk_BrownMaleLeftSide from '../../../assets/RockyMountainElk_BrownMaleLeftSide.webp';
import RockyMountainElk_LightBrownMaleLeftSide from '../../../assets/RockyMountainElk_LightBrownMaleLeftSide.webp';
import RockyMountainElk_LightGreyMaleLeftSide from '../../../assets/RockyMountainElk_LightGreyMaleLeftSide.webp';
import RockyMountainElk_PiebaldVariation1MaleRightSide from '../../../assets/RockyMountainElk_PiebaldVariation1MaleRightSide.webp';
import RockyMountainElk_PiebaldVariation1MaleLeftSide from '../../../assets/RockyMountainElk_PiebaldVariation1MaleLeftSide.webp';
import RockyMountainElk_PiebaldVariation2MaleRightSide from '../../../assets/RockyMountainElk_PiebaldVariation2MaleRightSide.webp';
import RockyMountainElk_PiebaldVariation2MaleLeftSide from '../../../assets/RockyMountainElk_PiebaldVariation2MaleLeftSide.webp';

// Fur Variant Images - Female
import RockyMountainElk_AlbinoFemaleLeftSide from '../../../assets/RockyMountainElk_AlbinoFemaleLeftSide.webp';
import RockyMountainElk_BrownFemaleLeftSide from '../../../assets/RockyMountainElk_BrownFemaleLeftSide.webp';
import RockyMountainElk_LightBrownFemaleLeftSide from '../../../assets/RockyMountainElk_LightBrownFemaleLeftSide.webp';
import RockyMountainElk_LightGreyFemaleLeftSide from '../../../assets/RockyMountainElk_LightGreyFemaleLeftSide.webp';
import RockyMountainElk_PiebaldVariation1FemaleRightSide from '../../../assets/RockyMountainElk_PiebaldVariation1FemaleRightSide.webp';
import RockyMountainElk_PiebaldVariation1FemaleLeftSide from '../../../assets/RockyMountainElk_PiebaldVariation1FemaleLeftSide.webp';
import RockyMountainElk_PiebaldVariation2FemaleRightSide from '../../../assets/RockyMountainElk_PiebaldVariation2FemaleRightSide.webp';
import RockyMountainElk_PiebaldVariation2FemaleLeftSide from '../../../assets/RockyMountainElk_PiebaldVariation2FemaleLeftSide.webp';


const RockyMountainElk = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  const needZonesData = [
    {
      name: "Silver Ridge Peaks",
      schedule: [
        { time: "00:00 - 04:00", type: "Resting", icon: RestingZoneIcon },
        { time: "04:00 - 05:00", type: "Drinking", icon: DrinkingZoneIcon },
        { time: "05:00 - 17:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "17:00 - 18:00", type: "Drinking", icon: DrinkingZoneIcon },
        { time: "18:00 - 23:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "23:00 - 00:00", type: "Resting", icon: RestingZoneIcon },
      ]
    }
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Calm tempered and likes to roam" },
    { label: "Habitat", value: "Forest, forest edge and meadows" },
    { label: "Senses", value: "Highly tuned senses in general, particularly excellent hearing and smell" },
    { label: "Social", value: "Males are solitary, females live in medium to large-sized groups" },
    { label: "Active", value: "During day and dusk" },
    { label: "Recommended Equipment", value: "Class 7 Ammo, Elk Caller, Elk Scent" },
    { label: "Species", value: "Cervus canadensis nelsoni", italic: true, isLink: true },
    { label: "Difficulty", value: "Hard" },
  ];

  // Fur Gallery Data - Male
  const maleFurGallery = [
    { name: "Albino", src: RockyMountainElk_AlbinoMaleLeftSide },
    { name: "Brown", src: RockyMountainElk_BrownMaleLeftSide },
    { name: "Light Brown", src: RockyMountainElk_LightBrownMaleLeftSide },
    { name: "Light Grey", src: RockyMountainElk_LightGreyMaleLeftSide },
    { name: "Piebald Variation 1 (Right)", src: RockyMountainElk_PiebaldVariation1MaleRightSide },
    { name: "Piebald Variation 1 (Left)", src: RockyMountainElk_PiebaldVariation1MaleLeftSide }, // Assuming visual match to gallery structure
    { name: "Piebald Variation 2 (Right)", src: RockyMountainElk_PiebaldVariation2MaleRightSide }, // Adjusted for variety based on typical file naming
    { name: "Piebald Variation 2 (Left)", src: RockyMountainElk_PiebaldVariation2MaleLeftSide },
  ];

  // Fur Gallery Data - Female
  const femaleFurGallery = [
    { name: "Albino", src: RockyMountainElk_AlbinoFemaleLeftSide },
    { name: "Brown", src: RockyMountainElk_BrownFemaleLeftSide },
    { name: "Light Brown", src: RockyMountainElk_LightBrownFemaleLeftSide },
    { name: "Light Grey", src: RockyMountainElk_LightGreyFemaleLeftSide },
    { name: "Piebald Variation 1 (Right)", src: RockyMountainElk_PiebaldVariation1FemaleRightSide },
    { name: "Piebald Variation 1 (Left)", src: RockyMountainElk_PiebaldVariation1FemaleLeftSide },
    { name: "Piebald Variation 2 (Right)", src: RockyMountainElk_PiebaldVariation2FemaleRightSide },
    { name: "Piebald Variation 2 (Left)", src: RockyMountainElk_PiebaldVariation2FemaleLeftSide },
  ];

  // Trivia Data
  const triviaData = [
    "The Rocky Mountain Elk (Cervus Canadensis) is the official State Animal of Utah and one of the largest deer species on the planet.",
    "Their life span averages around 10-13 years, and they can weigh up to 500kg (1100lbs).",
    "Bulls will form antlers which may reach 1.2m (4 feet) above their head. They grow and shed a new set of antlers every single year, and during this growing season their new set of antlers will be covered in a furry coat called velvet. This coat is full of blood vessels, which bring all the necessary minerals to the antlers in order to grow them fast - up to an inch a day. The bigger their antlers are, the better luck with the ladies!",
    "At wintertime, bulls and cows grow dark manes around their neck as part of their winter coats.",
    "In real life, elk roam a variety of different habitats. This includes prairies, forested areas, sagebrush flats, deciduous forests, swampy valleys and mountain meadows.",
    "Rocky Mountain Elk are herbivores and feed on a wide variety of plants, including grasses, shrubs, trees and flowers. They are ruminants and have a four-chambered stomach in order to properly digest their diet.",
    "The iconic elk bugle (a bull's mating call) gave way to the term \"rut\" for the elk breeding season. \"Rut\" comes from the Latin word meaning \"roar\"."
  ];

  // References Data (Implicit from context)
  const referencesData = [
    "Rocky Mountain Elk Need Zones, Silver Ridge Peaks",
    "thehuntercotw.fandom.com"
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
          <span>Rocky Mountain Elk</span>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Rocky Mountain Elk</div>
            <div className="wiki-sidebar-image">
              <img src={RockyMountainElkMain} alt="Rocky Mountain Elk" />
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
                  <span>177.86</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-gold">☗ Gold</span>
                  <span>351.32</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-diamond">☗ Diamond</span>
                  <span>481.41</span>
                </div>
              </div>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Weight</span>
              200kg — 480kg<br/>
              <span className="wiki-sidebar-muted">441lbs — 1058lbs</span>
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Fur</span>
               <span className="wiki-fs-sm">
                 Albino, Brown, Common, Light Grey, Piebald
               </span>
            </div>

            <div className="wiki-sidebar-header">Locations</div>
            <div className="wiki-sidebar-section">
               <div className="wiki-mb-4"><span className="wiki-link">Silver Ridge Peaks</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main className="wiki-main">

            {/* Quote Block */}
            <div className="wiki-quote">
              "The Rocky Mountain elk is a subspecies of elk and a close relative of the Roosevelt Elk. They can be found primarily in the Rocky Mountains and northwestern America. Even though they are similar in habit to the Roosevelt Elk the nature of their habitat presents new challenges during the hunt. The Rocky Mountain elk has a diverse range of habitat. Although it is mostly found in forest and forest edge near mountainous regions, it feeds in meadows and open country before moving back to the shelter of the forest. Even though the are not the largest animal in the elk family they do boast the largest antlers, which can weigh up to 18.00 kg. The bull weighs about 315.00 kg, while the smaller cow averages about 225.00 kg."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-p-mb">
              The <strong>Rocky Mountain Elk</strong> is located in the <span className="wiki-link">Silver Ridge Peaks</span> reserve in the Rocky Mountains. It is a <span className="wiki-link">class 7</span> animal. It has a lighter color and a broader neck and shoulders than the <span className="wiki-link">Roosevelt Elk</span> and can grow larger antlers, which is also reflected in the much higher trophy rating requirements.
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
                        <tr><th colSpan="2" className="wiki-th wiki-th-center">Silver Ridge Peaks</th></tr>
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
                        {/* Male/Female Combined Row */}
                        <tr>
                            <td className="wiki-td">
                                <span className="wiki-text-male">Male</span>
                                <span className="wiki-text-divider">/</span>
                                <span className="wiki-text-female">Female</span>
                            </td>
                            <td className="wiki-td">
                                Brown (37.35%)<br/>
                                Light Brown (37.35%)<br/>
                                Light Grey (25.00%)
                            </td>
                            <td className="wiki-td">
                                X
                            </td>
                            <td className="wiki-td">
                                Albino (0.10%)<br/>
                                Piebald Variation 1 (0.10%)<br/>
                                Piebald Variation 2 (0.10%)
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

export default RockyMountainElk;