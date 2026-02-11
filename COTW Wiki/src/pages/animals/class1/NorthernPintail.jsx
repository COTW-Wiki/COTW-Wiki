import React from 'react';

// --- IMPORTS ---
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import class1Icon from '../../../assets/Class1Icon.webp';
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';
import NorthernPintailMain from '../../../assets/Northern_Pintail.webp';
import NorthernPintail_shot_scheme from '../../../assets/Northern_Pintail_shot_scheme.webp';

// Male Variants
import NorthernPintail_AlbinoMaleBack from '../../../assets/NorthernPintail_AlbinoMaleBack.webp';
import NorthernPintail_AlbinoMaleFront from '../../../assets/NorthernPintail_AlbinoMaleFront.webp';
import NorthernPintail_EclipseMaleBack from '../../../assets/NorthernPintail_EclipseMaleBack.webp';
import NorthernPintail_EclipseMaleFront from '../../../assets/NorthernPintail_EclipseMaleFront.webp';
import NorthernPintail_ErythristicMaleBack from '../../../assets/NorthernPintail_ErythristicMaleBack.webp';
import NorthernPintail_ErythristicMaleFront from '../../../assets/NorthernPintail_ErythristicMaleFront.webp';
import NorthernPintail_GreyMaleBack from '../../../assets/NorthernPintail_GreyMaleBack.webp';
import NorthernPintail_GreyMaleFront from '../../../assets/NorthernPintail_GreyMaleFront.webp';
import NorthernPintail_LeucisticMaleBack from '../../../assets/NorthernPintail_LeucisticMaleBack.webp';
import NorthernPintail_LeucisticMaleFront from '../../../assets/NorthernPintail_LeucisticMaleFront.webp';
import NorthernPintail_MelanisticMaleBack from '../../../assets/NorthernPintail_MelanisticMaleBack.webp';
import NorthernPintail_MelanisticMaleFront from '../../../assets/NorthernPintail_MelanisticMaleFront.webp';
import NorthernPintail_PiebaldMaleBack from '../../../assets/NorthernPintail_PiebaldMaleBack.webp';
import NorthernPintail_PiebaldMaleFront from '../../../assets/NorthernPintail_PiebaldMaleFront.webp';

// Female Variants
import NorthernPintail_AlbinoFemaleBack from '../../../assets/NorthernPintail_AlbinoFemaleBack.webp';
import NorthernPintail_AlbinoFemaleFront from '../../../assets/NorthernPintail_AlbinoFemaleFront.webp';
import NorthernPintail_BrightFemaleBack from '../../../assets/NorthernPintail_BrightFemaleBack.webp';
import NorthernPintail_BrightFemaleFront from '../../../assets/NorthernPintail_BrightFemaleFront.webp';
import NorthernPintail_BrownFemaleBack from '../../../assets/NorthernPintail_BrownFemaleBack.webp';
import NorthernPintail_BrownFemaleFront from '../../../assets/NorthernPintail_BrownFemaleFront.webp';
import NorthernPintail_ErythristicFemaleBack from '../../../assets/NorthernPintail_ErythristicFemaleBack.webp';
import NorthernPintail_ErythristicFemaleFront from '../../../assets/NorthernPintail_ErythristicFemaleFront.webp';
import NorthernPintail_LeucisticFemaleBack from '../../../assets/NorthernPintail_LeucisticFemaleBack.webp';
import NorthernPintail_LeucisticFemaleFront from '../../../assets/NorthernPintail_LeucisticFemaleFront.webp';
import NorthernPintail_MelanisticFemaleBack from '../../../assets/NorthernPintail_MelanisticFemaleBack.webp';
import NorthernPintail_MelanisticFemaleFront from '../../../assets/NorthernPintail_MelanisticFemaleFront.webp';
import NorthernPintail_PiebaldFemaleBack from '../../../assets/NorthernPintail_PiebaldFemaleBack.webp';
import NorthernPintail_PiebaldFemaleFront from '../../../assets/NorthernPintail_PiebaldFemaleFront.webp';

const NorthernPintail = () => {
  // --- DATA SOURCES ---

  // Need Zone Times
  const needZones = [
    { time: "00:00 - 05:00", type: "Resting", icon: RestingZoneIcon },
    { time: "05:00 - 07:00", type: "Feeding", icon: FeedingZoneIcon },
    { time: "07:00 - 09:00", type: "Resting", icon: RestingZoneIcon },
    { time: "09:00 - 11:00", type: "Feeding", icon: FeedingZoneIcon },
    { time: "11:00 - 13:00", type: "Resting", icon: RestingZoneIcon },
    { time: "13:00 - 15:00", type: "Feeding", icon: FeedingZoneIcon },
    { time: "15:00 - 17:00", type: "Resting", icon: RestingZoneIcon },
    { time: "17:00 - 19:00", type: "Feeding", icon: FeedingZoneIcon },
    { time: "19:00 - 00:00", type: "Resting", icon: RestingZoneIcon },
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Generally calm, graceful, and alert" },
    { label: "Habitat", value: "Prefer wetlands, including shallow ponds, marshes, and lakes, often with tall grasses or reeds" },
    { label: "Senses", value: "Keen vision, highly sensitive hearing and limited sense of smell" },
    { label: "Social", value: "Generally social, tend to be less aggressive than other species, coexisting peacefully with other waterfowl" },
    { label: "Active", value: "Early morning and late afternoon" },
    { label: "Recommended Equipment", value: "Class 1 Ammo, Northern Pintail caller & decoys" },
    { label: "Species", value: "Anas acuta", italic: true },
    { label: "Difficulty", value: "Easy" },
  ];

  // Split male / female plumage variants and images
  const maleVariants = [
    'Albino Male - Front',
    'Albino Male - Back',
    'Eclipse Male - Front',
    'Eclipse Male - Back',
    'Erythristic Male - Front',
    'Erythristic Male - Back',
    'Grey Male - Front',
    'Grey Male - Back',
    'Leucistic Male - Front',
    'Leucistic Male - Back',
    'Melanistic Male - Front',
    'Melanistic Male - Back',
    'Piebald Male - Front',
    'Piebald Male - Back',
  ];

  const femaleVariants = [
    'Albino Female - Front',
    'Albino Female - Back',
    'Bright Female - Front',
    'Bright Female - Back',
    'Brown Female - Front',
    'Brown Female - Back',
    'Erythristic Female - Front',
    'Erythristic Female - Back',
    'Leucistic Female - Front',
    'Leucistic Female - Back',
    'Melanistic Female - Front',
    'Melanistic Female - Back',
    'Piebald Female - Front',
    'Piebald Female - Back',
  ];

  const maleImages = [
    NorthernPintail_AlbinoMaleFront,
    NorthernPintail_AlbinoMaleBack,
    NorthernPintail_EclipseMaleFront,
    NorthernPintail_EclipseMaleBack,
    NorthernPintail_ErythristicMaleFront,
    NorthernPintail_ErythristicMaleBack,
    NorthernPintail_GreyMaleFront,
    NorthernPintail_GreyMaleBack,
    NorthernPintail_LeucisticMaleFront,
    NorthernPintail_LeucisticMaleBack,
    NorthernPintail_MelanisticMaleFront,
    NorthernPintail_MelanisticMaleBack,
    NorthernPintail_PiebaldMaleFront,
    NorthernPintail_PiebaldMaleBack,
  ];

  const femaleImages = [
    NorthernPintail_AlbinoFemaleFront,
    NorthernPintail_AlbinoFemaleBack,
    NorthernPintail_BrightFemaleFront,
    NorthernPintail_BrightFemaleBack,
    NorthernPintail_BrownFemaleFront,
    NorthernPintail_BrownFemaleBack,
    NorthernPintail_ErythristicFemaleFront,
    NorthernPintail_ErythristicFemaleBack,
    NorthernPintail_LeucisticFemaleFront,
    NorthernPintail_LeucisticFemaleBack,
    NorthernPintail_MelanisticFemaleFront,
    NorthernPintail_MelanisticFemaleBack,
    NorthernPintail_PiebaldFemaleFront,
    NorthernPintail_PiebaldFemaleBack,
  ];

  return (
    <div className="wiki-page">
      <div className="wiki-inner">
        
        {/* PAGE HEADER */}
        <div className="wiki-header">
          <span>Northern Pintail</span>
          <div className="wiki-edit-actions">
          </div>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Northern Pintail</div>
            <div className="h-[180px] bg-[#2a4b63] flex items-center justify-center p-2.5">
              <img src={NorthernPintailMain} alt="Northern Pintail" className="max-w-full max-h-full object-contain rounded-sm" />
            </div>
            
            <div className="wiki-sidebar-header">General Information</div>
            
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Class</span>
              <span><img src={class1Icon} alt="Class 1" className="inline-block wiki-class-icon-sm align-middle mr-1.5"/>1</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Difficulty</span>
              <span>1: Trivial — 3: Very Easy</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Trophy Type</span>
              <span>Weight</span>
              <div className="wiki-trophy-grid">
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-silver">◆ Silver</span>
                  <span>620</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-gold">☗ Gold</span>
                  <span>860</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-diamond">☗ Diamond</span>
                  <span>1040</span>
                </div>
              </div>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Weight</span>
              3.2kg — 9.2kg<br/>
              7lbs — 20lbs
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Plumage</span>
               <span className="wiki-fs-sm">
                  Albino, Brown, Bright, Eclipse, Erythristic, Grey, Leucistic, Melanistic, Piebald
               </span>
            </div>

            <div className="wiki-sidebar-header">Locations</div>
            <div className="wiki-sidebar-section">
               <div className="wiki-mb-4"><span className="wiki-link">Askiy Ridge Hunting Preserve</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main className="wiki-main">

            {/* Quote Block */}
            <div className="wiki-quote">
              "Elegant Northern Pintails swim through wetlands and lakes with their slender necks and long, pointed tails held high. Intricately patterned and pale-faced females join males fashioned with a signature white stripe down their chocolate-colored necks. These eager breeders head to the prairie pothole region of the Great Plains, as well as Canada, and Alaska to nest as soon as the ice breaks up.

              Large groups congregate in wetlands, lakes, bays, and even waddle through agricultural fields eating grains during the winter. Though still common, their populations are declining."
              <br/><br/>
              ― In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-p-mb">
              The <strong>Northern Pintail</strong> is a <span className="wiki-link">class 1</span> animal that can be hunted on <span className="wiki-link">Askiy Ridge Hunting Preserve</span>.
            </p>

            {/* Table of Contents Placeholder */}
            <div className="wiki-toc">
              <div className="wiki-toc-title">
                🔢 Contents <span className="wiki-toc-toggle">[hide]</span>
              </div>
              <ol className="wiki-toc">
                <li>
                  <a href="#features" style={{color:'#6fb2e6', textDecoration:'none'}} onClick={(e)=>{e.preventDefault(); const el=document.getElementById('features'); if(el){el.scrollIntoView({behavior:'smooth', block:'start'}); window.history.replaceState(null,'', '#features');}}}>Features</a>
                </li>
                <li>
                  <a href="#need-zone-times" style={{color:'#6fb2e6', textDecoration:'none'}} onClick={(e)=>{e.preventDefault(); const el=document.getElementById('need-zone-times'); if(el){el.scrollIntoView({behavior:'smooth', block:'start'}); window.history.replaceState(null,'', '#need-zone-times');}}}>Need Zone Times</a>
                </li>
                <li>
                  <a href="#shot-scheme" style={{color:'#6fb2e6', textDecoration:'none'}} onClick={(e)=>{e.preventDefault(); const el=document.getElementById('shot-scheme'); if(el){el.scrollIntoView({behavior:'smooth', block:'start'}); window.history.replaceState(null,'', '#shot-scheme');}}}>Shot scheme</a>
                </li>
                <li>
                  <a href="#plumage-variants" style={{color:'#6fb2e6', textDecoration:'none'}} onClick={(e)=>{e.preventDefault(); const el=document.getElementById('plumage-variants'); if(el){el.scrollIntoView({behavior:'smooth', block:'start'}); window.history.replaceState(null,'', '#plumage-variants');}}}>Plumage Variants</a>
                  <ul style={{listStyleType: 'none', paddingLeft: '16px', marginTop: '6px', marginBottom: '6px', color: '#6fb2e6'}}>
                    <li className="wiki-mb-4">
                      <a href="#plumage-male" style={{color:'#6fb2e6', textDecoration:'none'}} onClick={(e)=>{e.preventDefault(); const el=document.getElementById('plumage-male'); if(el){el.scrollIntoView({behavior:'smooth', block:'start'}); window.history.replaceState(null,'', '#plumage-male');}}}>4.1. Male</a>
                    </li>
                    <li className="wiki-mb-4">
                      <a href="#plumage-female" style={{color:'#6fb2e6', textDecoration:'none'}} onClick={(e)=>{e.preventDefault(); const el=document.getElementById('plumage-female'); if(el){el.scrollIntoView({behavior:'smooth', block:'start'}); window.history.replaceState(null,'', '#plumage-female');}}}>4.2. Female</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#plumage-variant-rarity" style={{color:'#6fb2e6', textDecoration:'none'}} onClick={(e)=>{e.preventDefault(); const el=document.getElementById('plumage-variant-rarity'); if(el){el.scrollIntoView({behavior:'smooth', block:'start'}); window.history.replaceState(null,'', '#plumage-variant-rarity');}}}>Plumage Variant Rarity</a>
                </li>
              </ol>
            </div>

            {/* FEATURES */}
            <h2 id="features" className="wiki-h2">Features</h2>
            <table className="wiki-table">
              <tbody>
                <tr>
                    <th className="wiki-th wiki-th-w25"></th>
                    <th className="wiki-th">Description</th>
                </tr>
                {features.map((item, index) => (
                  <tr key={index}>
                    <td className="wiki-td wiki-td-bold">{item.label}</td>
                    <td className={`wiki-td ${item.italic ? 'wiki-td-italic' : ''}`}>
                        <span dangerouslySetInnerHTML={{ __html: item.value }} />
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
                        {needZones.map((zone, i) => (
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
            <div className="wiki-shot-wrap">
                <div className="wiki-shot-title">Color code</div>
                  <div className="wiki-shot-container">
                    <div className="wiki-shot-image">
                      <img src={NorthernPintail_shot_scheme} alt="Northern Pintail X-ray shot scheme" className="w-[500px] h-[444px] object-contain" />
                    </div>
                    <div className="wiki-shot-info">
                      No Color - Every hit will kill the animal
                    </div>
                  </div>
            </div>

            {/* PLUMAGE VARIANTS (Gallery) */}
            <h2 id="plumage-variants" className="wiki-h2">Plumage Variants</h2>
            <div>
              <div id="plumage-male" style={{marginBottom:'10px', fontWeight: '600', color: '#dbe4eb'}}>Male</div>
              <div className="wiki-gallery-grid">
                {maleVariants.map((name, i) => (
                  <div key={`m-${i}`} className="wiki-gallery-item">
                    <div className="wiki-gallery-placeholder">
                      {maleImages[i] && <img src={maleImages[i]} alt={name} />}
                    </div>
                    <span className="wiki-gallery-label">{name}</span>
                  </div>
                ))}
              </div>

              <div id="plumage-female" style={{marginTop:'20px', marginBottom:'10px', fontWeight: '600', color: '#dbe4eb'}}>Female</div>
              <div className="wiki-gallery-grid">
                {femaleVariants.map((name, i) => (
                  <div key={`f-${i}`} className="wiki-gallery-item">
                    <div className="wiki-gallery-placeholder">
                      {femaleImages[i] && <img src={femaleImages[i]} alt={name} />}
                    </div>
                    <span className="wiki-gallery-label">{name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* PLUMAGE RARITY TABLE */}
            <h2 id="plumage-variant-rarity" className="wiki-h2">Plumage Variant Rarity</h2>
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
                        <td className="wiki-td wiki-td-muted">Male</td>
                        <td className="wiki-td">
                            Grey (74.48%),<br/>
                            Eclipse (24.93%)
                        </td>
                        <td className="wiki-td">X</td>
                        <td className="wiki-td">Piebald (0.40%)</td>
                        <td className="wiki-td">
                            Albino (0.05%),<br/>
                            Erythristic (0.05%),<br/>
                            Leucistic (0.05%),<br/>
                            Melanistic (0.05%)
                        </td>
                    </tr>
                     <tr>
                        <td className="wiki-td wiki-td-female">Female</td>
                        <td className="wiki-td">
                            Brown (74.48%),<br/>
                            Bright (24.93%)
                        </td>
                        <td className="wiki-td">X</td>
                        <td className="wiki-td">Piebald (0.40%)</td>
                        <td className="wiki-td">
                            Albino (0.05%),<br/>
                            Erythristic (0.05%),<br/>
                            Leucistic (0.05%),<br/>
                            Melanistic (0.05%)
                        </td>
                    </tr>
                </tbody>
            </table>

            {/* TRIVIA (removed) */}

            <AnimalsTableMini />
          </main>
        </div>
      </div>
    </div>
  );
};

export default NorthernPintail;