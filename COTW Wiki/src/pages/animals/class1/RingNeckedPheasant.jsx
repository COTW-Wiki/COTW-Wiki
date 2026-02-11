import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import class1Icon from '../../../assets/Class1Icon.webp';
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import RingNeckedPheasantMain from '../../../assets/RingNeckedPheasant.webp';

// Shot Scheme
import RingNeckedPheasantShotScheme from '../../../assets/Ring-Necked_Pheasant_shot_scheme.webp';

// Male Plumage Images
import RingNeckedPheasant_AlbinoFront from '../../../assets/RingNeckedPheasant_AlbinoMaleFront.webp';
import RingNeckedPheasant_AlbinoBack from '../../../assets/RingNeckedPheasant_AlbinoMaleBack.webp';
import RingNeckedPheasant_BrownFront from '../../../assets/RingNeckedPheasant_BrownMaleFront.webp';
import RingNeckedPheasant_BrownBack from '../../../assets/RingNeckedPheasant_BrownMaleBack.webp';
import RingNeckedPheasant_GreyFront from '../../../assets/RingNeckedPheasant_GreyMaleFront.webp';
import RingNeckedPheasant_GreyBack from '../../../assets/RingNeckedPheasant_GreyMaleBack.webp';
import RingNeckedPheasant_LeucisticFront from '../../../assets/RingNeckedPheasant_LeucisticMaleFront.webp';
import RingNeckedPheasant_LeucisticBack from '../../../assets/RingNeckedPheasant_LeucisticMaleBack.webp';
import RingNeckedPheasant_MelanisticFront from '../../../assets/RingNeckedPheasant_MelanisticMaleFront.webp';
import RingNeckedPheasant_MelanisticBack from '../../../assets/RingNeckedPheasant_MelanisticMaleBack.webp';
import RingNeckedPheasant_MoltingFront from '../../../assets/RingNeckedPheasant_MoltingMaleFront.webp';
import RingNeckedPheasant_MoltingBack from '../../../assets/RingNeckedPheasant_MoltingMaleBack.webp';
import RingNeckedPheasant_WhiteBrownFront from '../../../assets/RingNeckedPheasant_WhiteBrownMaleFront.webp';
import RingNeckedPheasant_WhiteBrownBack from '../../../assets/RingNeckedPheasant_WhiteBrownMaleBack.webp';

// Female Plumage Images
import RingNeckedPheasant_AlbinoFemaleFront from '../../../assets/RingNeckedPheasant_AlbinoFemaleFront.webp';
import RingNeckedPheasant_AlbinoFemaleBack from '../../../assets/RingNeckedPheasant_AlbinoFemaleBack.webp';
import RingNeckedPheasant_BrownFemaleFront from '../../../assets/RingNeckedPheasant_BrownFemaleFront.webp';
import RingNeckedPheasant_BrownFemaleBack from '../../../assets/RingNeckedPheasant_BrownFemaleBack.webp';
import RingNeckedPheasant_GreyFemaleFront from '../../../assets/RingNeckedPheasant_GreyFemaleFront.webp';
import RingNeckedPheasant_GreyFemaleBack from '../../../assets/RingNeckedPheasant_GreyFemaleBack.webp';
import RingNeckedPheasant_LeucisticFemaleFront from '../../../assets/RingNeckedPheasant_LeucisticFemaleFront.webp';
import RingNeckedPheasant_LeucisticFemaleBack from '../../../assets/RingNeckedPheasant_LeucisticFemaleBack.webp';
import RingNeckedPheasant_MelanisticFemaleFront from '../../../assets/RingNeckedPheasant_MelanisticFemaleFront.webp';
import RingNeckedPheasant_MelanisticFemaleBack from '../../../assets/RingNeckedPheasant_MelanisticFemaleBack.webp';

// Great One (Fabled) Plumage Images
import RingNeckedPheasant_FabledCitrineFront from '../../../assets/RingNeckedPheasant_FabledCitrineFront.webp';
import RingNeckedPheasant_FabledCitrineBack from '../../../assets/RingNeckedPheasant_FabledCitrineBack.webp';
import RingNeckedPheasant_FabledEmeraldFront from '../../../assets/RingNeckedPheasant_FabledEmeraldFront.webp';
import RingNeckedPheasant_FabledEmeraldBack from '../../../assets/RingNeckedPheasant_FabledEmeraldBack.webp';
import RingNeckedPheasant_FabledGarnetFront from '../../../assets/RingNeckedPheasant_FabledGarnetFront.webp';
import RingNeckedPheasant_FabledGarnetBack from '../../../assets/RingNeckedPheasant_FabledGarnetBack.webp';
import RingNeckedPheasant_FabledMorganiteFront from '../../../assets/RingNeckedPheasant_FabledMorganiteFront.webp';
import RingNeckedPheasant_FabledMorganiteBack from '../../../assets/RingNeckedPheasant_FabledMorganiteBack.webp';
import RingNeckedPheasant_FabledObsidianFront from '../../../assets/RingNeckedPheasant_FabledObsidianFront.webp';
import RingNeckedPheasant_FabledObsidianBack from '../../../assets/RingNeckedPheasant_FabledObsidianBack.webp';
import RingNeckedPheasant_FabledPearlFront from '../../../assets/RingNeckedPheasant_FabledPearlFront.webp';
import RingNeckedPheasant_FabledPearlBack from '../../../assets/RingNeckedPheasant_FabledPearlBack.webp';
import RingNeckedPheasant_FabledRubyFront from '../../../assets/RingNeckedPheasant_FabledRubyFront.webp';
import RingNeckedPheasant_FabledRubyBack from '../../../assets/RingNeckedPheasant_FabledRubyBack.webp';
import RingNeckedPheasant_FabledSapphireFront from '../../../assets/RingNeckedPheasant_FabledSapphireFront.webp';
import RingNeckedPheasant_FabledSapphireBack from '../../../assets/RingNeckedPheasant_FabledSapphireBack.webp';


const RingNeckedPheasant = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  const needZonesData = [
    {
      name: "Hirschfelden & Askiy Ridge",
      schedule: [
        { time: "00:00-04:00", type: "Resting", icon: RestingZoneIcon },
        { time: "04:00-08:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "08:00-11:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "11:00-14:00", type: "Resting", icon: RestingZoneIcon },
        { time: "14:00-18:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "18:00-21:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "21:00-00:00", type: "Resting", icon: RestingZoneIcon },
      ]
    }
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Skittish and alert" },
    { label: "Habitat", value: "Open prairies and farmlands; hides in bushes or tall grass when threatened" },
    { label: "Senses", value: "Good eyesight and hearing, weak smell" },
    { label: "Social", value: "Live in loose flocks, can be encountered alone or in small groups" },
    { label: "Active", value: "Most active in the morning and evening. Hides during the day and rests at night" },
    { label: "Recommended Equipment", value: "Class 1 Ammo" },
    { label: "Species", value: "Phasianus colchicus", italic: true, isLink: true },
    { label: "Difficulty", value: "Easy" },
  ];

  // Plumage Gallery Data
  const plumageGallery = {
    male: [
      { name: "Albino - Front", src: RingNeckedPheasant_AlbinoFront },
      { name: "Albino - Back", src: RingNeckedPheasant_AlbinoBack },
      { name: "Brown - Front", src: RingNeckedPheasant_BrownFront },
      { name: "Brown - Back", src: RingNeckedPheasant_BrownBack },
      { name: "Grey - Front", src: RingNeckedPheasant_GreyFront },
      { name: "Grey - Back", src: RingNeckedPheasant_GreyBack },
      { name: "Leucistic - Front", src: RingNeckedPheasant_LeucisticFront },
      { name: "Leucistic - Back", src: RingNeckedPheasant_LeucisticBack },
      { name: "Melanistic - Front", src: RingNeckedPheasant_MelanisticFront },
      { name: "Melanistic - Back", src: RingNeckedPheasant_MelanisticBack },
      { name: "Molting - Front", src: RingNeckedPheasant_MoltingFront },
      { name: "Molting - Back", src: RingNeckedPheasant_MoltingBack },
      { name: "White Brown - Front", src: RingNeckedPheasant_WhiteBrownFront },
      { name: "White Brown - Back", src: RingNeckedPheasant_WhiteBrownBack },
    ],
    female: [
      { name: "Albino - Front", src: RingNeckedPheasant_AlbinoFemaleFront },
      { name: "Albino - Back", src: RingNeckedPheasant_AlbinoFemaleBack },
      { name: "Brown - Front", src: RingNeckedPheasant_BrownFemaleFront },
      { name: "Brown - Back", src: RingNeckedPheasant_BrownFemaleBack },
      { name: "Grey - Front", src: RingNeckedPheasant_GreyFemaleFront },
      { name: "Grey - Back", src: RingNeckedPheasant_GreyFemaleBack },
      { name: "Leucistic - Front", src: RingNeckedPheasant_LeucisticFemaleFront },
      { name: "Leucistic - Back", src: RingNeckedPheasant_LeucisticFemaleBack },
      { name: "Melanistic - Front", src: RingNeckedPheasant_MelanisticFemaleFront },
      { name: "Melanistic - Back", src: RingNeckedPheasant_MelanisticFemaleBack },
    ],
    // Great One Data
    greatOne: [
      { name: "Fabled Citrine - Front", src: RingNeckedPheasant_FabledCitrineFront },
      { name: "Fabled Citrine - Back", src: RingNeckedPheasant_FabledCitrineBack },
      { name: "Fabled Emerald - Front", src: RingNeckedPheasant_FabledEmeraldFront },
      { name: "Fabled Emerald - Back", src: RingNeckedPheasant_FabledEmeraldBack },
      { name: "Fabled Garnet - Front", src: RingNeckedPheasant_FabledGarnetFront },
      { name: "Fabled Garnet - Back", src: RingNeckedPheasant_FabledGarnetBack },
      { name: "Fabled Morganite - Front", src: RingNeckedPheasant_FabledMorganiteFront },
      { name: "Fabled Morganite - Back", src: RingNeckedPheasant_FabledMorganiteBack },
      { name: "Fabled Obsidian - Front", src: RingNeckedPheasant_FabledObsidianFront },
      { name: "Fabled Obsidian - Back", src: RingNeckedPheasant_FabledObsidianBack },
      { name: "Fabled Pearl - Front", src: RingNeckedPheasant_FabledPearlFront },
      { name: "Fabled Pearl - Back", src: RingNeckedPheasant_FabledPearlBack },
      { name: "Fabled Ruby - Front", src: RingNeckedPheasant_FabledRubyFront },
      { name: "Fabled Ruby - Back", src: RingNeckedPheasant_FabledRubyBack },
      { name: "Fabled Sapphire - Front", src: RingNeckedPheasant_FabledSapphireFront },
      { name: "Fabled Sapphire - Back", src: RingNeckedPheasant_FabledSapphireBack },
    ]
  };

  // References List
  const references = [
    "Ring-Necked Pheasant Need Zones, Hirschfelden",
    "Ring-Necked Pheasant Need Zones, Askiy Ridge",
    "https://www.etymonline.com/word/pheasant",
    "https://www.pheasant.com/facts",
    "https://en.wikipedia.org/wiki/Chinese_pheasant",
    "https://statesymbolsusa.org/states/united-states/south-dakota"
  ];

  return (
    <div className="wiki-page">
      <div className="wiki-inner">
        
        {/* PAGE HEADER */}
        <div className="wiki-header">
          <span>Ring-Necked Pheasant</span>
          <div className="wiki-edit-actions">
          </div>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Ring-Necked Pheasant</div>
            <div className="wiki-sidebar-image">
              <img src={RingNeckedPheasantMain} alt="Ring-Necked Pheasant" />
            </div>
            
            <div className="wiki-sidebar-header">General Information</div>
            
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Class</span>
              <span><img src={class1Icon} alt="Class 1" className="wiki-class-icon"/>1</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Difficulty</span>
              <span>1: Trivial — 3: Very Easy<br/>10: Fabled</span>
            </div>

            {/* Trophy Type */}
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Trophy Type</span>
              <span>Combined</span>
              <div className="wiki-trophy-grid">
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-silver">◆ Silver</span>
                  <span>9.10</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-gold">☗ Gold</span>
                  <span>15.50</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-diamond">☗ Diamond</span>
                  <span>20.30</span>
                </div>
              </div>
              <div className="wiki-great-one-badge">
                 ❖ Great One
              </div>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Weight</span>
              500g — 3kg<br/>
              1.1lbs — 7lbs
            </div>

            {/* Plumage */}
            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Plumage</span>
               <span className="wiki-fs-sm">
                  Albino, Brown, Grey, Leucistic, Melanistic, Molting, White Brown<br/>
                  <strong>Fabled Exclusive:</strong> Citrine, Emerald, Garnet, Morganite, Obsidian, Pearl, Ruby, Sapphire
               </span>
            </div>

            <div className="wiki-sidebar-header">Locations</div>
            <div className="wiki-sidebar-section">
               <div className="wiki-mb-4"><span className="wiki-link">Rancho del Arroyo</span></div>
               <div className="wiki-mb-4"><span className="wiki-link">Hirschfelden Hunting Reserve</span></div>
               <div className="wiki-mb-4"><span className="wiki-link">Cuatro Colinas Game Reserve</span></div>
               <div className="wiki-mb-4"><span className="wiki-link">New England Mountains</span></div>
               <div className="wiki-mb-4"><span className="wiki-link">Salzwiesen Park</span></div>
               <div className="wiki-mb-4"><span className="wiki-link">Askiy Ridge Hunting Preserve</span></div>
               <div className="wiki-mb-4"><span className="wiki-link">Tòrr nan Sithean</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main className="wiki-main">

            {/* Quote Block */}
            <div className="wiki-quote">
              "Ring-necked pheasants are a subspecies of the common pheasant, named after the ring of white feathers at the base of their neck. The common pheasant is an extremely popular game bird all over the world. Originating in Asia, the species has been introduced in many countries for the purpose of hunting. Pheasants live in loose flocks that break up into mated pairs come the breeding season. They exhibit strong sexual dimorphism. Males have a vibrant plumage with a distinctive blue-green head and red wattles on their face. Females have a duller light-brown plumage with black spots. Pheasants live on the ground in open prairies and farmlands, where they feed on seeds and insects. They are not adept flyers and only take to the air as a last ditch effort to escape immediate danger."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-p-mb">
              The <strong>Ring-Necked Pheasant</strong> is a <span className="wiki-link">class 1</span> pheasant species that can be hunted on <span className="wiki-link">Rancho del Arroyo</span>, <span className="wiki-link">Hirschfelden Hunting Reserve</span>, <span className="wiki-link">Cuatro Colinas Game Reserve</span>, <span className="wiki-link">New England Mountains</span>, <span className="wiki-link">Salzwiesen Park</span>, and <span className="wiki-link">Tòrr nan Sithean</span>.
            </p>
            <p className="wiki-p-mb">
              With the release of Salzwiesen Park, the Ring-Necked Pheasant received a <span className="wiki-link">Great One</span> variant. It is currently the only bird species in game with this distinction.
            </p>

            {/* Table of Contents Placeholder */}
            <div className="wiki-toc">
              <div className="wiki-toc-title">
                🔢 Contents <span className="wiki-toc-toggle">[hide]</span>
              </div>
              <ol className="wiki-toc">
                <li><a href="#features" onClick={(e)=>{e.preventDefault(); const el=document.getElementById('features'); if(el) el.scrollIntoView({behavior:'smooth', block:'start'});}} className="wiki-link">Features</a></li>
                <li><a href="#need-zones" onClick={(e)=>{e.preventDefault(); const el=document.getElementById('need-zones'); if(el) el.scrollIntoView({behavior:'smooth', block:'start'});}} className="wiki-link">Need Zone Times</a></li>
                <li><a href="#shot-scheme" onClick={(e)=>{e.preventDefault(); const el=document.getElementById('shot-scheme'); if(el) el.scrollIntoView({behavior:'smooth', block:'start'});}} className="wiki-link">Shot scheme</a></li>
                <li>
                  <a href="#plumage-variants" onClick={(e)=>{e.preventDefault(); const el=document.getElementById('plumage-variants'); if(el) el.scrollIntoView({behavior:'smooth', block:'start'});}} className="wiki-link">Plumage Variants</a>
                  <ul >
                      <li className="text-[#6fb2e6]"><a href="#plumage-male" onClick={(e)=>{e.preventDefault(); const el=document.getElementById('plumage-male'); if(el) el.scrollIntoView({behavior:'smooth', block:'start'});}} className="wiki-link">4.1. Male</a></li>
                      <li className="text-[#6fb2e6]"><a href="#plumage-female" onClick={(e)=>{e.preventDefault(); const el=document.getElementById('plumage-female'); if(el) el.scrollIntoView({behavior:'smooth', block:'start'});}} className="wiki-link">4.2. Female</a></li>
                  </ul>
                </li>
                <li><a href="#plumage-greatone" onClick={(e)=>{e.preventDefault(); const el=document.getElementById('plumage-greatone'); if(el) el.scrollIntoView({behavior:'smooth', block:'start'});}} className="wiki-link">Plumage Variants | Great One</a></li>
                <li><a href="#plumage-rarity" onClick={(e)=>{e.preventDefault(); const el=document.getElementById('plumage-rarity'); if(el) el.scrollIntoView({behavior:'smooth', block:'start'});}} className="wiki-link">Plumage Variant Rarity</a></li>
                <li><a href="#tips" onClick={(e)=>{e.preventDefault(); const el=document.getElementById('tips'); if(el) el.scrollIntoView({behavior:'smooth', block:'start'});}} className="wiki-link">Tips</a></li>
                <li><a href="#trivia" onClick={(e)=>{e.preventDefault(); const el=document.getElementById('trivia'); if(el) el.scrollIntoView({behavior:'smooth', block:'start'});}} className="wiki-link">Trivia</a></li>
                <li><a href="#references" onClick={(e)=>{e.preventDefault(); const el=document.getElementById('references'); if(el) el.scrollIntoView({behavior:'smooth', block:'start'});}} className="wiki-link">References</a></li>
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
                        <tr><th colSpan="2" className="wiki-th wiki-th-center">Hirschfelden & Askiy Ridge</th></tr>
                        <tr>
                            <th className="wiki-th wiki-th-alt">Times</th>
                            <th className="wiki-th wiki-th-alt">Activity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {needZonesData[0].schedule.map((zone, i) => (
                        <tr key={i}>
                            <td className="wiki-td">{zone.time}</td>
                            <td className="wiki-td"><img src={zone.icon} alt={zone.type} className="wiki-class-icon"/> {zone.type}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* SHOT SCHEME */}
            <h2 id="shot-scheme" className="wiki-h2">Shot scheme</h2>
            <div className="wiki-shot-container">
              <div className="wiki-shot-image">
                <img src={RingNeckedPheasantShotScheme} alt="Shot Scheme" />
              </div>
               <div className="wiki-shot-info">
                  <strong>Color code</strong>
                  <div className="mt-5">
                     No Color - Every hit will kill the animal
                  </div>
               </div>
            </div>

            {/* PLUMAGE VARIANTS (Gallery) */}
            <h2 id="plumage-variants" className="wiki-h2">Plumage Variants</h2>
            
            {/* Male Section */}
            <h3 id="plumage-male" className="wiki-h3 mt-2.5 text-[1.2rem] border-b-0">Male</h3>
            <div className="wiki-gallery-grid">
              {plumageGallery.male.map((item, i) => (
                <div key={i} className="wiki-gallery-item">
                  <div className="wiki-gallery-placeholder">
                    <img src={item.src} alt={item.name} />
                  </div>
                  <span className="wiki-gallery-label">{item.name}</span>
                </div>
              ))}
            </div>

            {/* Female Section */}
            <h3 id="plumage-female" className="wiki-h3 mt-2.5 text-[1.2rem] border-b-0">Female</h3>
            <div className="wiki-gallery-grid">
              {plumageGallery.female.map((item, i) => (
                <div key={i} className="wiki-gallery-item">
                  <div className="wiki-gallery-placeholder">
                    <img src={item.src} alt={item.name} />
                  </div>
                  <span className="wiki-gallery-label">{item.name}</span>
                </div>
              ))}
            </div>

            {/* PLUMAGE VARIANTS | GREAT ONE (Added section) */}
            <h2 id="plumage-greatone" className="wiki-h2">Plumage Variants | Great One</h2>
            <div className="wiki-gallery-grid">
              {plumageGallery.greatOne.map((item, i) => (
                <div key={i} className="wiki-gallery-item">
                  <div className="wiki-gallery-placeholder">
                    <img src={item.src} alt={item.name} />
                  </div>
                  <span className="wiki-gallery-label">{item.name}</span>
                </div>
              ))}
            </div>

            {/* PLUMAGE RARITY TABLE */}
            <h2 id="plumage-rarity" className="wiki-h2">Plumage Variant Rarity</h2>
            <table className="wiki-table">
                <thead>
                    <tr>
                        <th className="wiki-th">Sex</th>
                        <th className="wiki-th"><span className="wiki-common">Common</span></th>
                        <th className="wiki-th"><span className="wiki-uncommon">Uncommon</span></th>
                        <th className="wiki-th"><span className="wiki-rare">Rare</span></th>
                        <th className="wiki-th"><span className="wiki-very-rare">Very Rare</span></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="wiki-td wiki-td-muted">
                            Male
                        </td>
                        <td className="wiki-td">
                            White Brown (37.45%)<br/>
                            Brown (37.45%)<br/>
                            Molting (12.50%)<br/>
                            Grey (12.50%)
                        </td>
                        <td className="wiki-td">X</td>
                        <td className="wiki-td">X</td>
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
                            Brown (87.98%)<br/>
                            Grey (11.78%)
                        </td>
                        <td className="wiki-td">X</td>
                        <td className="wiki-td">X</td>
                        <td className="wiki-td">
                            Albino (0.08%)<br/>
                            Leucistic (0.08%)<br/>
                            Melanistic (0.08%)
                        </td>
                    </tr>
                </tbody>
            </table>

            {/* TIPS (Added section) */}
            <h2 id="tips" className="wiki-h2">Tips</h2>
            <p className="wiki-mb-20">
               Must be shot in the air. Shooting pheasants on the ground or in the process of landing gives no integrity points and shows "grounded". The ethical way to kill them as mentioned by TreeKiwi (one of the developers) is to run toward them and <span className="wiki-link">whistle</span>. This will make them airborne/make them fly.
            </p>

            {/* TRIVIA */}
            <h2 id="trivia" className="wiki-h2">Trivia</h2>
            <ul className="wiki-ul">
              <li className="wiki-li">The Ring-Necked Pheasant was the first upland bird species added to game, and came with a distinct <i>grounded</i> mechanic. This mechanic punishes players for shooting the bird on the ground, resulting in a score of 0 every time. To prevent this, players must allow the Pheasant to fly into the air order to get full score.</li>
              <li className="wiki-li">The word <i>Pheasant</i> comes from the Greek word <i>phasianos</i> meaning <i>Phasian Bird</i>. The Phasis river at one point was thought to have once been full of Pheasants, and possibly would have been where Europeans first encountered the bird.</li>
              <li className="wiki-li">While the Ring-Necked Pheasant is a widespread game bird, it is thought to have originated from East Asia and spread westward over time. This is why a common name for the Ring-Necked Pheasant is the <i>Chinese Pheasant</i>.</li>
              <li className="wiki-li">It is the Official State Bird of South Dakota.</li>
              <li className="wiki-li">The Ring-Necked Pheasant is one of many species retroactively added to certain maps with the "Granite Update". Other species in this list include, the <span className="wiki-link">Canada Goose</span>, <span className="wiki-link">Merriam Turkey</span>, <span className="wiki-link">Gray Wolf</span>, <span className="wiki-link">Western Capercaillie</span>, <span className="wiki-link">Eurasian Wigeon</span>, <span className="wiki-link">Collared Peccary</span>, <span className="wiki-link">Mallard</span>, <span className="wiki-link">Pronghorn</span>, and the <span className="wiki-link">Green Winged Teal</span>. The Ring-Necked Pheasant was added to <span className="wiki-link">Hirschfelden</span> specifically.</li>
              <li className="wiki-li">With the release of <span className="wiki-link">Salzwiesen Park</span>, 8 <span className="wiki-link">Great One</span> variations were added.</li>
            </ul>

            {/* REFERENCES (Added section) */}
            <h2 id="references" className="wiki-h2">References</h2>
            <ol className="wiki-ol-ref">
               {references.map((ref, idx) => (
                  <li key={idx} className="wiki-mb-4">
                     <span className="wiki-link">{ref}</span>
                  </li>
               ))}
            </ol>

            <AnimalsTableMini />
          </main>
        </div>
      </div>
    </div>
  );
};

export default RingNeckedPheasant;