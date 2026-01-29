import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import DrinkingZoneIcon from '../../../assets/DrinkingZoneIcon.webp';
import class3Icon from '../../../assets/Class3Icon.webp'; // Class 3 for Roe Deer
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import RoeDeerMain from '../../../assets/RoeDeer.webp';
import ShotSchemeImage from '../../../assets/Roe_deer_shot_scheme.webp';

// Fur Variant Images (Placeholders)
import RoeDeer_AlbinoMaleRightSide from '../../../assets/RoeDeer_AlbinoMaleRightSide.webp';
import RoeDeer_BrownMaleRightSide from '../../../assets/RoeDeer_BrownMaleRightSide.webp';
import RoeDeer_DarkBrownMaleRightSide from '../../../assets/RoeDeer_DarkBrownMaleRightSide.webp';
import RoeDeer_DarkGreyMaleRightSide from '../../../assets/RoeDeer_DarkGreyMaleRightSide.webp';
import RoeDeer_LeucisticMaleRightSide from '../../../assets/RoeDeer_LeucisticMaleRightSide.webp';
import RoeDeer_MelanisticMaleRightSide from '../../../assets/RoeDeer_MelanisticMaleRightSide.webp';
import RoeDeer_PiebaldVariation2MaleLeftSide from '../../../assets/RoeDeer_PiebaldVariation2MaleLeftSide.webp';
import RoeDeer_PiebaldVariation2MaleRightSide from '../../../assets/RoeDeer_PiebaldVariation2MaleRightSide.webp';
import RoeDeer_PiebaldVariation1MaleLeftSide from '../../../assets/RoeDeer_PiebaldVariation1MaleLeftSide.webp';
import RoeDeer_PiebaldVariation1MaleRightSide from '../../../assets/RoeDeer_PiebaldVariation1MaleRightSide.webp';

import RoeDeer_TanFemaleRightSide from '../../../assets/RoeDeer_TanFemaleRightSide.webp';
import RoeDeer_OrangeFemaleRightSide from '../../../assets/RoeDeer_OrangeFemaleRightSide.webp';
import RoeDeer_AlbinoFemaleRightSide from '../../../assets/RoeDeer_AlbinoFemaleRightSide.webp';
import RoeDeer_BrownFemaleRightSide from '../../../assets/RoeDeer_BrownFemaleRightSide.webp';
import RoeDeer_LeucisticFemaleRightSide from '../../../assets/RoeDeer_LeucisticFemaleRightSide.webp';
import RoeDeer_MelanisticFemaleRightSide from '../../../assets/RoeDeer_MelanisticFemaleRightSide.webp';
import RoeDeer_PiebaldFemaleLeftSide from '../../../assets/RoeDeer_PiebaldFemaleLeftSide.webp';
import RoeDeer_PiebaldFemaleRightSide from '../../../assets/RoeDeer_PiebaldFemaleRightSide.webp';


const RoeDeer = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  const needZonesData = [
    {
      name: "Hirschfelden",
      schedule: [
        { time: "00:00 - 04:00", type: "Resting", icon: RestingZoneIcon },
        { time: "04:00 - 07:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "07:00 - 10:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "10:00 - 14:00", type: "Resting", icon: RestingZoneIcon },
        { time: "14:00 - 17:00", type: "Drinking", icon: DrinkingZoneIcon },
        { time: "17:00 - 20:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "20:00 - 00:00", type: "Resting", icon: RestingZoneIcon },
      ]
    }
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Skittish and vocal when alarmed" },
    { label: "Habitat", value: "Prefer a mix of forests and open fields" },
    { label: "Senses", value: "Very good hearing and sense of smell" },
    { label: "Social", value: "Typically stay in smaller groups" },
    { label: "Active", value: "During dawn and dusk" },
    { label: "Recommended Equipment", value: "Class 3 Ammo, Roe Deer Caller, Roe Deer Scent" },
    { label: "Species", value: "Capreolus capreolus", italic: true, isLink: true },
    { label: "Difficulty", value: "Easy" },
  ];

  // Fur Gallery Data split by sex
  const maleGallery = [
    { name: "Albino", src: RoeDeer_AlbinoMaleRightSide },
    { name: "Brown", src: RoeDeer_BrownMaleRightSide },
    { name: "Dark Brown", src: RoeDeer_DarkBrownMaleRightSide },
    { name: "Dark Grey", src: RoeDeer_DarkGreyMaleRightSide },
    { name: "Leucistic", src: RoeDeer_LeucisticMaleRightSide },
    { name: "Melanistic", src: RoeDeer_MelanisticMaleRightSide },
    { name: "Piebald Variation 1", src: RoeDeer_PiebaldVariation1MaleRightSide },
    { name: "Piebald Variation 1 ( Left )", src: RoeDeer_PiebaldVariation1MaleLeftSide },
    { name: "Piebald Variation 2", src: RoeDeer_PiebaldVariation2MaleRightSide },
    { name: "Piebald Variation 2 ( Left )", src: RoeDeer_PiebaldVariation2MaleLeftSide },
    
    
  ];

  const femaleGallery = [
    { name: "Tan", src: RoeDeer_TanFemaleRightSide },
    { name: "Orange", src: RoeDeer_OrangeFemaleRightSide },
    { name: "Albino", src: RoeDeer_AlbinoFemaleRightSide },
    { name: "Brown", src: RoeDeer_BrownFemaleRightSide },
    { name: "Leucistic", src: RoeDeer_LeucisticFemaleRightSide },
    { name: "Melanistic", src: RoeDeer_MelanisticFemaleRightSide },
    { name: "Piebald (Left)", src: RoeDeer_PiebaldFemaleLeftSide },
    { name: "Piebald (Right)", src: RoeDeer_PiebaldFemaleRightSide },
  ];

  // Trivia Data
  const triviaData = [
    "Part of the original cast of animals huntable at launch",
    "In French, they are known as \"Chevreuil\".",
    "Bambi was originally a Roe Deer. But Disney changed him to a Whitetail Deer because that species was more recognizable to Americans. The author Felix Salten was a hunter by the way.",
    "The scientific name for the Roe Deer (Capreolus capreolus) is together with the Red Fox (Vulpes vulpes), Fallow Deer (Dama dama), Harlequin Duck (Histrionicus histrionicus), American Buffalo (Bison bison bison), Axis Deer (Axis axis), Moose (Acles acles), Greylag Goose (Anser anser), Willow Ptarmigan (Lagolpus lagopus) and the Eurasian Lynx (Lynx lynx) a tautonym: a scientific name in which both parts of the name have the same spelling.",
    "Roe deer got a visual update on December 9, 2025 with the 8.4 patch and update. This is the first remodel of the animal and greatly improved it's appearance."
  ];

  return (
    <div className="wiki-page">
      <div className="wiki-inner">
        
        {/* PAGE HEADER */}
        <div className="wiki-header">
          <span>Roe Deer</span>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Roe Deer</div>
            <div className="wiki-sidebar-image">
              <img src={RoeDeerMain} alt="Roe Deer" />
            </div>
            
            <div className="wiki-sidebar-header">General Information</div>
            
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Class</span>
              <span><img src={class3Icon} alt="Class 3" className="wiki-class-icon-lg"/>3</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Difficulty</span>
              <span>1: Trivial — 3: Very Easy</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Trophy Type</span>
              <span>Antlers</span>
              <div className="wiki-trophy-grid">
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-silver">◆ Silver</span>
                  <span>41</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-gold">☗ Gold</span>
                  <span>64.3</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-diamond">☗ Diamond</span>
                  <span>81.8</span>
                </div>
              </div>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Weight</span>
              ? — 35kg<br/>
              <span className="wiki-sidebar-muted">? — 77lbs</span>
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Fur</span>
               <span className="wiki-fs-sm">
                 Albino, Brown, Dark Brown, Dark Grey, Leucistic, Melanistic, Orange, Piebald, Tan
               </span>
            </div>

            <div className="wiki-sidebar-header">Locations</div>
            <div className="wiki-sidebar-section">
               <div className="wiki-mb-4"><span className="wiki-link">Hirschfelden Hunting Reserve</span></div>
               <div className="wiki-mb-4"><span className="wiki-link">Cuatro Colinas Game Reserve</span></div>
               <div className="wiki-mb-4"><span className="wiki-link">Tòrr nan Sithean</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main className="wiki-main">

            {/* Quote Block */}
            <div className="wiki-quote">
              "The roe deer, also called western or European roe deer, is a very common native inhabitant of the European continent. They can be found all over the area, except in the northernmost parts of Scandinavia. Roe deer are a smaller species of deer characterized by their reddish and grey-brown fur. They also make a distinct barking sound when alarmed. Bucks develop antlers up to 0.20 m to 0.30 m (7 - 12 in) in length that typically branch into two, three, or even four points. Roe deer are herbivores, and like to feed on grass and cultivated soil. While primarily a forest animal, they often wander out into fields and areas with more sparse vegetation."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-p-mb">
              The <strong>Roe Deer</strong> is a <span className="wiki-link">class 3</span> deer which can be hunted in the <span className="wiki-link">Hirschfelden Hunting Reserve</span>, <span className="wiki-link">Cuatro Colinas Game Reserve</span> and <span className="wiki-link">Tòrr nan Sithean</span>.
            </p>

            {/* Table of Contents */}
            <div className="wiki-toc">
              <div className="wiki-toc-title">
                🔢 Contents <span className="wiki-toc-toggle">[hide]</span>
              </div>
              <ol className="wiki-toc">
                <li>Features</li>
                <li>Need Zone Times</li>
                <li>Shot scheme</li>
                <li>Fur Variants</li>
                <li>Fur Variant Rarity</li>
                <li>Trivia</li>
              </ol>
            </div>

            {/* FEATURES */}
            <h2 className="wiki-h2">Features</h2>
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
            <h2 className="wiki-h2">Need Zone Times</h2>
            <div className="wiki-inline-block">
                <table className="wiki-table wiki-table-fixed">
                    <thead>
                        <tr><th colSpan="2" className="wiki-th wiki-th-center">Hirschfelden</th></tr>
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
             <h2 className="wiki-h2">Shot scheme</h2>
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
            <h2 className="wiki-h2">Fur Variants</h2>

            <div style={{marginBottom: '10px', marginTop: '6px', color: '#6fb2e6', fontWeight: '600'}}>Male</div>
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

            <div style={{marginBottom: '10px', marginTop: '18px', color: '#6fb2e6', fontWeight: '600'}}>Female</div>
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
            <h2 className="wiki-h2">Fur Variant Rarity</h2>
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
                                Dark Grey (33.15%)<br/>
                                Dark Brown (33.15%)<br/>
                                Brown (33.15%)
                            </td>
                            <td className="wiki-td">X</td>
                            <td className="wiki-td">
                                Piebald Variation 1 (0.20%)<br/>
                                Piebald Variation 2 (0.20%)
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
                                Tan (33.20%)<br/>
                                Orange (33.20%)<br/>
                                Brown (33.20%)
                            </td>
                            <td className="wiki-td">X</td>
                            <td className="wiki-td">
                                Piebald (0.20%)
                            </td>
                            <td className="wiki-td">
                                Albino (0.05%)<br/>
                                Leucistic (0.05%)<br/>
                                Melanistic (0.05%)
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* TRIVIA */}
            <h2 className="wiki-h2">Trivia</h2>
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

export default RoeDeer;