import React from 'react';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import class1Icon from '../../../assets/Class1Icon.webp';
import WoodDuckImg from '../../../assets/WoodDuck.webp';
import WoodDuckAlbinoFemaleBack from '../../../assets/WoodDuck_AlbinoFemaleBack.webp';
import WoodDuckAlbinoFemaleFront from '../../../assets/WoodDuck_AlbinoFemaleFront.webp';
import WoodDuckAlbinoMaleBack from '../../../assets/WoodDuck_AlbinoMaleBack.webp';
import WoodDuckAlbinoMaleFront from '../../../assets/WoodDuck_AlbinoMaleFront.webp';
import WoodDuckDarkFemaleBack from '../../../assets/WoodDuck_DarkFemaleBack.webp';
import WoodDuckDarkFemaleFront from '../../../assets/WoodDuck_DarkFemaleFront.webp';
import WoodDuckDarkMaleBack from '../../../assets/WoodDuck_DarkMaleBack.webp';
import WoodDuckDarkMaleFront from '../../../assets/WoodDuck_DarkMaleFront.webp';
import WoodDuckDiluteSilverFemaleBack from '../../../assets/WoodDuck_DiluteSilverFemaleBack.webp';
import WoodDuckDiluteSilverFemaleFront from '../../../assets/WoodDuck_DiluteSilverFemaleFront.webp';
import WoodDuckDiluteSilverMaleBack from '../../../assets/WoodDuck_DiluteSilverMaleBack.webp';
import WoodDuckDiluteSilverMaleFront from '../../../assets/WoodDuck_DiluteSilverMaleFront.webp';
import WoodDuckErythristicGoldenFemaleBack from '../../../assets/WoodDuck_ErythristicGoldenFemaleBack.webp';
import WoodDuckErythristicGoldenFemaleFront from '../../../assets/WoodDuck_ErythristicGoldenFemaleFront.webp';
import WoodDuckErythristicGoldenMaleBack from '../../../assets/WoodDuck_ErythristicGoldenMaleBack.webp';
import WoodDuckErythristicGoldenMaleFront from '../../../assets/WoodDuck_ErythristicGoldenMaleFront.webp';
import WoodDuckLeucisticFemaleBack from '../../../assets/WoodDuck_LeucisticFemaleBack.webp';
import WoodDuckLeucisticFemaleFront from '../../../assets/WoodDuck_LeucisticFemaleFront.webp';
import WoodDuckLeucisticMaleBack from '../../../assets/WoodDuck_LeucisticMaleBack.webp';
import WoodDuckLeucisticMaleFront from '../../../assets/WoodDuck_LeucisticMaleFront.webp';
import WoodDuckMelanisticFemaleBack from '../../../assets/WoodDuck_MelanisticFemaleBack.webp';
import WoodDuckMelanisticFemaleFront from '../../../assets/WoodDuck_MelanisticFemaleFront.webp';
import WoodDuckMelanisticMaleBack from '../../../assets/WoodDuck_MelanisticMaleBack.webp';
import WoodDuckMelanisticMaleFront from '../../../assets/WoodDuck_MelanisticMaleFront.webp';
import WoodDuckPiebaldFemaleBack from '../../../assets/WoodDuck_PiebaldFemaleBack.webp';
import WoodDuckPiebaldFemaleFront from '../../../assets/WoodDuck_PiebaldFemaleFront.webp';
import WoodDuckPiebaldMaleBack from '../../../assets/WoodDuck_PiebaldMaleBack.webp';
import WoodDuckPiebaldMaleFront from '../../../assets/WoodDuck_PiebaldMaleFront.webp';
import WoodDuckStandardFemaleBack from '../../../assets/WoodDuck_StandardFemaleBack.webp';
import WoodDuckStandardFemaleFront from '../../../assets/WoodDuck_StandardFemaleFront.webp';
import WoodDuckStandardMaleBack from '../../../assets/WoodDuck_StandardMaleBack.webp';
import WoodDuckStandardMaleFront from '../../../assets/WoodDuck_StandardMaleFront.webp';
import WoodDuckShotScheme from '../../../assets/Wood_Duck_shot_scheme.webp';
// page-local TOC will be rendered below
import AnimalsTableMini from '../../../components/AnimalsTableMini';

const WoodDuck = () => {
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
    { label: "Behavior", value: "Curious, agile, elusive" },
    { label: "Habitat", value: "Wooded wetlands, riverbanks, lakes, and marshes" },
    { label: "Senses", value: "Sharp eyesight, strong sense of hearing, and good sense of smell" },
    { label: "Social", value: "Social outside of breeding season, typically seen in small groups near water" },
    { label: "Active", value: "Daytime" },
    { label: "Recommended Equipment", value: "Class 1 Ammo, Wood Duck caller & decoys" },
    { label: "Species", value: "Aix sponsa", italic: true },
    { label: "Difficulty", value: "Easy" },
  ];

  // Plumage Variants (Male)
  const plumageMale = [
    { name: "Albino - Front", color: "#f5f5f5" },
    { name: "Albino - Back", color: "#e0e0e0" },
    { name: "Dark - Front", color: "#4e342e" },
    { name: "Dark - Back", color: "#3e2723" },
    { name: "Dilute Silver - Front", color: "#cfd8dc" },
    { name: "Dilute Silver - Back", color: "#b0bec5" },
    { name: "Erythristic Golden - Front", color: "#ffcc80" },
    { name: "Erythristic Golden - Back", color: "#ffb74d" },
    { name: "Leucistic - Front", color: "#eeeeee" },
    { name: "Leucistic - Back", color: "#bdbdbd" },
    { name: "Melanistic - Front", color: "#212121" },
    { name: "Melanistic - Back", color: "#000000" },
    { name: "Piebald - Front", color: "#90a4ae" },
    { name: "Piebald - Back", color: "#78909c" },
    { name: "Standard - Front", color: "#795548" },
    { name: "Standard - Back", color: "#5d4037" },
  ];

  // Plumage Variants (Female)
  const plumageFemale = [
    { name: "Albino - Front", color: "#f5f5f5" },
    { name: "Albino - Back", color: "#e0e0e0" },
    { name: "Dark - Front", color: "#5d4037" },
    { name: "Dark - Back", color: "#3e2723" },
    { name: "Dilute Silver - Front", color: "#b0bec5" },
    { name: "Dilute Silver - Back", color: "#90a4ae" },
    { name: "Erythristic Golden - Front", color: "#ffe0b2" },
    { name: "Erythristic Golden - Back", color: "#ffcc80" },
    { name: "Leucistic - Front", color: "#eeeeee" },
    { name: "Leucistic - Back", color: "#bdbdbd" },
    { name: "Melanistic - Front", color: "#212121" },
    { name: "Melanistic - Back", color: "#000000" },
    { name: "Piebald - Front", color: "#cfd8dc" },
    { name: "Piebald - Back", color: "#b0bec5" },
    { name: "Standard - Front", color: "#8d6e63" },
    { name: "Standard - Back", color: "#6d4c41" },
  ];

  const toc = [
    { id: 'features', label: 'Features' },
    { id: 'need-zone-times', label: 'Need Zone Times' },
    { id: 'shot-scheme', label: 'Shot scheme' },
    { id: 'plumage-variants', label: 'Plumage Variants', children: [
      { id: 'plumage-male', label: 'Male' },
      { id: 'plumage-female', label: 'Female' },
    ] },
    { id: 'plumage-variant-rarity', label: 'Plumage Variant Rarity' },
  ];

  function handleTocClick(targetId) {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      try { history.replaceState(null, '', `#${targetId}`); } catch (e) {}
    }
  }

  return (
    <div className="wiki-page">
      <div className="wiki-inner">
        
        {/* PAGE HEADER */}
        <div className="wiki-header">
          <span>Wood Duck</span>
          <div className="wiki-edit-actions">
          </div>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Wood Duck</div>
            <div className="h-[180px] bg-[#2a4b63] flex items-center justify-center p-2.5">
              <img src={WoodDuckImg} alt="Wood Duck" className="max-w-full max-h-full object-contain rounded-sm" />
            </div>
            
            <div className="wiki-sidebar-header">General Information</div>
            
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Class</span>
              <span><img src={class1Icon} alt="Class 1" className="inline-block w-[18px] h-[18px] align-middle mr-1.5"/>1</span>
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
                   <span>460</span>
                </div>
                <div className="wiki-trophy-item">
                   <span className="wiki-trophy-label wiki-trophy-gold">☗ Gold</span>
                   <span>580</span>
                </div>
                <div className="wiki-trophy-item">
                   <span className="wiki-trophy-label wiki-trophy-diamond">☗ Diamond</span>
                   <span>670</span>
                </div>
              </div>
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Weight</span>
               ? — ?
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Plumage</span>
               <span className="text-[0.85rem]">
                 Albino, Dark, Dilute Silver, Erythristic Golden, Leucistic, Melanistic, Piebald, Standard
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
              "The wood duck is a colorful waterfowl native to North America, often found in wooded wetlands, rivers, and lakes. These ducks are medium-sized, with males featuring vibrant plumage or iridescent green, purple, and white, while females have more muted brown feathers with a distinctive white eye ring. Wood ducks are excellent fliers and perching birds, often seen resting in tree branches near water. They primarily feed on seeds, acorns, and small invertebrates. Known for their unique nesting habits, they often use tree cavities or man-made nest boxes. Wood ducks are one of the few duck species that can perch on trees."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-mb-20">
              The <strong>Wood Duck</strong> is a <span className="wiki-link">class 1</span> duck species that will be introduced with <span className="wiki-link">Askiy Ridge Hunting Preserve</span>.
            </p>

            {/* Table of Contents Placeholder */}
            <div className="border border-[#3a5a75] bg-[#0f2e48] inline-block px-5 py-2.5 rounded min-w-[220px]">
              <div className="font-bold border-b border-[#3a5a75] mb-2 pb-2">
                🔢 Contents <span className="wiki-toc-toggle">[hide]</span>
              </div>
              <div className="pt-1.5 text-[#6fb2e6]">
                {toc.map((item, i) => (
                  <div key={item.id} className="mb-1.5">
                    <a onClick={() => handleTocClick(item.id)} className="wiki-link" role="button">
                      <strong className="mr-2">{i + 1}.</strong>{item.label}
                    </a>
                    {item.children && (
                      <div className="pl-4 mt-1.5">
                        {item.children.map((c, j) => (
                          <div key={c.id} className="wiki-mb-4">
                            <a onClick={() => handleTocClick(c.id)} className="wiki-link" role="button">{`${i + 1}.${j + 1} ${c.label}`}</a>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
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
                        {item.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* NEED ZONE TIMES */}
            <h2 id="need-zone-times" className="wiki-h2">Need Zone Times</h2>
            <div className="inline-block">
                <table className="wiki-table wiki-table-fixed">
                    <thead>
                        <tr><th colSpan="2" className="wiki-th wiki-th-center">Askiy Ridge<sup>[1]</sup></th></tr>
                        <tr>
                            <th className="wiki-th wiki-th-alt">Times</th>
                            <th className="wiki-th wiki-th-alt">Activity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {needZones.map((zone, i) => (
                        <tr key={i}>
                            <td className="wiki-td">{zone.time}</td>
                    <td className="wiki-td">
                      <img src={zone.icon} alt={zone.type} className="inline-block w-[18px] h-[18px] align-middle mr-2" />
                      {zone.type}
                    </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* SHOT SCHEME */}
            <h2 id="shot-scheme" className="wiki-h2">Shot scheme</h2>
            <div className="bg-[#0f2e48] p-2.5">
                <div className="wiki-shot-title">Color code</div>
              <div className="wiki-shot-container">
                <div className="wiki-shot-image">
                  <img src={WoodDuckShotScheme} alt="Wood Duck shot scheme" className="w-[500px] h-[444px] object-contain" />
                </div>
                <div className="wiki-shot-info">
                  No Color - Every hit will kill the animal
                </div>
              </div>
            </div>

            {/* PLUMAGE VARIANTS (Gallery) */}
            <h2 id="plumage-variants" className="wiki-h2">Plumage Variants</h2>
            
            <h3 id="plumage-male" className="wiki-h3">Male</h3>
                <div className="wiki-gallery-grid">
                      {[
                      { src: WoodDuckAlbinoMaleFront, label: 'Albino - Front' },
                      { src: WoodDuckAlbinoMaleBack, label: 'Albino - Back' },
                      { src: WoodDuckDarkMaleFront, label: 'Dark - Front' },
                      { src: WoodDuckDarkMaleBack, label: 'Dark - Back' },
                      { src: WoodDuckDiluteSilverMaleFront, label: 'Dilute Silver - Front' },
                      { src: WoodDuckDiluteSilverMaleBack, label: 'Dilute Silver - Back' },
                      { src: WoodDuckErythristicGoldenMaleFront, label: 'Erythristic Golden - Front' },
                      { src: WoodDuckErythristicGoldenMaleBack, label: 'Erythristic Golden - Back' },
                      { src: WoodDuckLeucisticMaleFront, label: 'Leucistic - Front' },
                      { src: WoodDuckLeucisticMaleBack, label: 'Leucistic - Back' },
                      { src: WoodDuckMelanisticMaleFront, label: 'Melanistic - Front' },
                      { src: WoodDuckMelanisticMaleBack, label: 'Melanistic - Back' },
                      { src: WoodDuckPiebaldMaleFront, label: 'Piebald - Front' },
                      { src: WoodDuckPiebaldMaleBack, label: 'Piebald - Back' },
                      { src: WoodDuckStandardMaleFront, label: 'Standard - Front' },
                      { src: WoodDuckStandardMaleBack, label: 'Standard - Back' },
                      ].map((img, i) => (
                        <div key={i} className="wiki-gallery-item">
                          <div className="wiki-gallery-placeholder">
                            <img src={img.src} alt={img.label} className="w-[146px] h-[165px] object-cover rounded" />
                          </div>
                          <span className="wiki-gallery-label">{img.label}</span>
                        </div>
                      ))}
                    </div>

            <h3 id="plumage-female" className="wiki-h3">Female</h3>
            <div className="wiki-gallery-grid">
              {[
              { src: WoodDuckAlbinoFemaleFront, label: 'Albino - Front' },
              { src: WoodDuckAlbinoFemaleBack, label: 'Albino - Back' },
              { src: WoodDuckDarkFemaleFront, label: 'Dark - Front' },
              { src: WoodDuckDarkFemaleBack, label: 'Dark - Back' },
              { src: WoodDuckDiluteSilverFemaleFront, label: 'Dilute Silver - Front' },
              { src: WoodDuckDiluteSilverFemaleBack, label: 'Dilute Silver - Back' },
              { src: WoodDuckErythristicGoldenFemaleFront, label: 'Erythristic Golden - Front' },
              { src: WoodDuckErythristicGoldenFemaleBack, label: 'Erythristic Golden - Back' },
              { src: WoodDuckLeucisticFemaleFront, label: 'Leucistic - Front' },
              { src: WoodDuckLeucisticFemaleBack, label: 'Leucistic - Back' },
              { src: WoodDuckMelanisticFemaleFront, label: 'Melanistic - Front' },
              { src: WoodDuckMelanisticFemaleBack, label: 'Melanistic - Back' },
              { src: WoodDuckPiebaldFemaleFront, label: 'Piebald - Front' },
              { src: WoodDuckPiebaldFemaleBack, label: 'Piebald - Back' },
              { src: WoodDuckStandardFemaleFront, label: 'Standard - Front' },
              { src: WoodDuckStandardFemaleBack, label: 'Standard - Back' },
              ].map((img, i) => (
                <div key={i} className="wiki-gallery-item">
                  <div className="wiki-gallery-placeholder">
                    <img src={img.src} alt={img.label} className="w-[146px] h-[165px] object-cover rounded" />
                  </div>
                  <span className="wiki-gallery-label">{img.label}</span>
                </div>
              ))}
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
                        <td className="wiki-td wiki-td-rare">Male/Female</td>
                        <td className="wiki-td">
                            Standard (74.74%)<br/>
                            Dark (24.96%)
                        </td>
                        <td className="wiki-td">X</td>
                        <td className="wiki-td">X</td>
                        <td className="wiki-td">
                            Albino (0.05%)<br/>
                            Dilute Silver (0.05%)<br/>
                            Erythristic Golden (0.05%)<br/>
                            Leucistic (0.05%)<br/>
                            Melanistic (0.05%)<br/>
                            Piebald (0.05%)
                        </td>
                    </tr>
                </tbody>
            </table>

            <AnimalsTableMini />
          </main>
        </div>
      </div>
    </div>
  );
};

export default WoodDuck;