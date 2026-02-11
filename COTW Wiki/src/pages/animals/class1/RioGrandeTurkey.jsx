import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import class1Icon from '../../../assets/Class1Icon.webp';
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import RioGrandeTurkeyMain from '../../../assets/RioGrandeTurkey.webp';

// Male Plumage Images
import RioGrandeTurkey_AlbinoMale from '../../../assets/RioGrandeTurkey_AlbinoMale.webp';
import RioGrandeTurkey_BrownMale from '../../../assets/RioGrandeTurkey_BrownMale.webp';
import RioGrandeTurkey_BuffMale from '../../../assets/RioGrandeTurkey_BuffMale.webp';
import RioGrandeTurkey_LeucisticMale from '../../../assets/RioGrandeTurkey_LeucisticMale.webp';
import RioGrandeTurkey_LightBrownMale from '../../../assets/RioGrandeTurkey_LightBrownMale.webp';
import RioGrandeTurkey_LightBuffMale from '../../../assets/RioGrandeTurkey_LightBuffMale.webp';
import RioGrandeTurkey_MelanisticMale from '../../../assets/RioGrandeTurkey_MelanisticMale.webp';

// Female Plumage Images
import RioGrandeTurkey_AlbinoFemale from '../../../assets/RioGrandeTurkey_AlbinoFemale.webp';
import RioGrandeTurkey_BrownFemale from '../../../assets/RioGrandeTurkey_BrownFemale.webp';
import RioGrandeTurkey_BuffFemale from '../../../assets/RioGrandeTurkey_BuffFemale.webp';
import RioGrandeTurkey_LeucisticFemale from '../../../assets/RioGrandeTurkey_LeucisticFemale.webp';
import RioGrandeTurkey_LightBrownFemale from '../../../assets/RioGrandeTurkey_LightBrownFemale.webp';
import RioGrandeTurkey_LightBuffFemale from '../../../assets/RioGrandeTurkey_LightBuffFemale.webp';
import RioGrandeTurkey_MelanisticFemale from '../../../assets/RioGrandeTurkey_MelanisticFemale.webp';


const RioGrandeTurkey = () => {

  // --- DATA SOURCES ---

  // Need Zone Times (Rancho del Arroyo)
  // Data source: Екранна снимка 2026-01-16 121137.png
  const needZonesData = [
    {
      name: "Rancho del Arroyo", // Inferred context
      schedule: [
        { time: "00:00-04:30", type: "Resting", icon: RestingZoneIcon },
        { time: "04:00-07:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "07:00-11:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "11:00-14:00", type: "Resting", icon: RestingZoneIcon },
        { time: "14:00-17:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "17:00-21:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "21:00-00:30", type: "Resting", icon: RestingZoneIcon },
      ]
    }
  ];

  // Features Table
  // Data source: Екранна снимка 2026-01-16 121129.png
  const features = [
    { label: "Behavior", value: "Wary, shy" },
    { label: "Habitat", value: "Brushy areas near streams and rivers, forests" },
    { label: "Senses", value: "Strong movement, vision, and hearing; weak sense of smell" },
    { label: "Social", value: "Highly social and tend to gather near each other" },
    { label: "Active", value: "Daytime" },
    { label: "Recommended Equipment", value: "Class 1 Ammo, Turkey Decoys, Turkey Caller" },
    { label: "Species", value: "Meleagris gallopavo", italic: true, isLink: true },
    { label: "Difficulty", value: "Easy" },
  ];

  // Plumage Gallery Data
  // Data source: Екранна снимка 2026-01-16 121153.jpg, 121205.jpg, 121223.jpg, 121231.jpg
  const plumageGallery = {
    male: [
      { name: "Albino", src: RioGrandeTurkey_AlbinoMale },
      { name: "Brown", src: RioGrandeTurkey_BrownMale },
      { name: "Buff", src: RioGrandeTurkey_BuffMale },
      { name: "Leucistic", src: RioGrandeTurkey_LeucisticMale },
      { name: "Light Brown", src: RioGrandeTurkey_LightBrownMale },
      { name: "Light Buff", src: RioGrandeTurkey_LightBuffMale },
      { name: "Melanistic", src: RioGrandeTurkey_MelanisticMale },
    ],
    female: [
      { name: "Albino", src: RioGrandeTurkey_AlbinoFemale },
      { name: "Brown", src: RioGrandeTurkey_BrownFemale },
      { name: "Buff", src: RioGrandeTurkey_BuffFemale },
      { name: "Leucistic", src: RioGrandeTurkey_LeucisticFemale },
      { name: "Light Brown", src: RioGrandeTurkey_LightBrownFemale },
      { name: "Light Buff", src: RioGrandeTurkey_LightBuffFemale },
      { name: "Melanistic", src: RioGrandeTurkey_MelanisticFemale },
    ]
  };

  // --- SCROLL HELPER ---
  const scrollToId = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="wiki-page">
      <div className="wiki-inner">
        
        {/* PAGE HEADER */}
        <div className="wiki-header">
          <span>Rio Grande Turkey</span>
          <div className="wiki-edit-actions">
          </div>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Rio Grande Turkey</div>
            <div className="wiki-sidebar-image">
              <img src={RioGrandeTurkeyMain} alt="Rio Grande Turkey" />
            </div>
            
            <div className="wiki-sidebar-header">General Information</div>
            
            {/* Class */}
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Class</span>
              <span><img src={class1Icon} alt="Class 1" className="wiki-class-icon"/>1</span>
            </div>

            {/* Difficulty */}
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Difficulty</span>
              <span>1: Trivial — 3: Very Easy</span>
            </div>

            {/* Trophy Type (Updated scores for Rio Grande) */}
            {/* Source: Екранна снимка 2026-01-16 121047.jpg */}
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Trophy Type</span>
              <span>Combined</span>
              <div className="wiki-trophy-grid">
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-silver">◆ Silver</span>
                  <span>3.3</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-gold">☗ Gold</span>
                  <span>4.0</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-diamond">☗ Diamond</span>
                  <span>4.6</span>
                </div>
              </div>
            </div>

            {/* Weight */}
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Weight</span>
              3.6kg — 11kg<br/>
              8lbs — 24lbs
            </div>

            {/* Plumage List */}
            {/* Source: Екранна снимка 2026-01-16 121047.jpg */}
            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Plumage</span>
               <span className="wiki-fs-sm">
                  Albino, Buff, Brown, Leucistic, Light Brown, Light Buff, Light Copper, Melanistic
               </span>
            </div>

            {/* Locations */}
            <div className="wiki-sidebar-header">Locations</div>
            <div className="wiki-sidebar-section">
               <div className="wiki-mb-4"><span className="wiki-link">Rancho del Arroyo</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main className="wiki-main">

            {/* Quote Block */}
            {/* Source: Екранна снимка 2026-01-16 121047.jpg */}
            <div className="wiki-quote">
              "Named after the famous Rio Grande River , this wild turkey subspecies is not as dark as its Merriam cousin and has longer legs. Its overall color is coppery hue with yellowish-tan tail tips, lighter than the Eastern and Osceola Subspecies but darker than the Merriam. The Rio Grande is largely found in the south-central United States and northern Mexico. Nomadic, it has been observed that this opportunistic feeder can travel more than 16.00 km from one feeding ground to another. Highly adaptable, it thrives in various climates and habitats. While these birds may be found at an elevation of up to 1.809 km, they tend to stick around brush areas near streams and rivers."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            {/* Source: Екранна снимка 2026-01-16 121047.jpg */}
            <p className="wiki-p-mb">
              The <strong>Rio Grande Turkey</strong> is the second of three Turkey sub-species huntable in game; the others are the <span className="wiki-link">Merriam Turkey</span> and the <span className="wiki-link">Eastern Wild Turkey</span>. It can be found on <span className="wiki-link">Rancho Del Arroyo</span> and it has a slightly more blue head and a plumage type called buff.
            </p>

            {/* Table of Contents Placeholder */}
            {/* Source: Екранна снимка 2026-01-16 121047.jpg */}
            <div className="wiki-toc">
              <div className="wiki-toc-title">
                🔢 Contents <span className="wiki-toc-toggle">[hide]</span>
              </div>
              <ol className="wiki-toc">
                <li><a href="#features" onClick={scrollToId('features')} className="wiki-link">Features</a></li>
                <li><a href="#need-zones" onClick={scrollToId('need-zones')} className="wiki-link">Need Zones (Times)</a></li>
                <li>
                  <a href="#plumage-variants" onClick={scrollToId('plumage-variants')} className="wiki-link">Plumage Variants</a>
                  <ul >
                      <li className="text-[#6fb2e6]"><a href="#plumage-male" onClick={scrollToId('plumage-male')} className="wiki-link">3.1. Male</a></li>
                      <li className="text-[#6fb2e6]"><a href="#plumage-female" onClick={scrollToId('plumage-female')} className="wiki-link">3.2. Female</a></li>
                  </ul>
                </li>
                <li><a href="#plumage-rarity" onClick={scrollToId('plumage-rarity')} className="wiki-link">Plumage Variant Rarity</a></li>
                <li><a href="#trivia" onClick={scrollToId('trivia')} className="wiki-link">Trivia</a></li>
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
                        {item.isLink ? <span className="wiki-link">{item.value}</span> : <span dangerouslySetInnerHTML={{ __html: item.value }} />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            {/* NEED ZONE TIMES */}
            {/* Source: Екранна снимка 2026-01-16 121137.png */}
            <h2 id="need-zones" className="wiki-h2">Need Zones (Times)</h2>
            <div className="flex gap-1.5 flex-wrap">
              {needZonesData.map((zoneData, idx) => (
                <div key={idx} className="flex-none w-[300px]">
                <table className="wiki-table mb-0">
                  <thead>
                    <tr>
                      <th className="wiki-th wiki-th-alt wiki-th-center">Times</th>
                      <th className="wiki-th wiki-th-alt wiki-th-center">Activity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {zoneData.schedule.map((zone, i) => (
                    <tr key={i}>
                      <td className="wiki-td text-center">{zone.time}</td>
                      <td className="wiki-td flex items-center justify-center">
                        <img src={zone.icon} alt={zone.type} className="wiki-class-icon"/> {zone.type}
                      </td>
                    </tr>
                    ))}
                  </tbody>
                </table>
                </div>
              ))}
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

            {/* PLUMAGE RARITY TABLE */}
            {/* Source: Екранна снимка 2026-01-16 121243.jpg */}
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
                            Male/<span className="wiki-text-female">Female</span>
                        </td>
                        <td className="wiki-td">
                            Brown (37.35%)<br/>
                            Buff (37.35%)<br/>
                            Light Brown (12.50%)<br/>
                            Light Buff (12.50%)
                        </td>
                        <td className="wiki-td">X</td>
                        <td className="wiki-td">
                            Leucistic (0.20%)
                        </td>
                        <td className="wiki-td">
                            Albino (0.05%)<br/>
                            Melanistic (0.05%)
                        </td>
                    </tr>
                </tbody>
            </table>

            {/* TRIVIA */}
            {/* Source: Екранна снимка 2026-01-16 121243.jpg */}
            <h2 id="trivia" className="wiki-h2">Trivia</h2>
            <ul className="wiki-ul">
              <li className="wiki-li">"Pavo" is Spanish for Turkey.</li>
              <li className="wiki-li">The <strong>Rio Grande Turkey</strong> is the second Turkey sub-species to be introduced to the game, causing the "Merriam Turkey"s" name change.</li>
              <li className="wiki-li">It is one of 3 huntable turkey species in the game. The others are the <span className="wiki-link">Merriam Turkey</span>, and the <span className="wiki-link">Eastern Wild Turkey</span>.</li>
              <li className="wiki-li">The <strong>Rio Grande Turkey</strong> can be distinguished from the Merriam Turkey by the color of its feather tips. Generally, <strong>Rio Grande Turkey</strong> have tanner "Buff" tips compared to the Merriam snow-white tips.</li>
            </ul>

            <AnimalsTableMini />
          </main>
        </div>
      </div>
    </div>
  );
};

export default RioGrandeTurkey;