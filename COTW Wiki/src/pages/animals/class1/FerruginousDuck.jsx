import React from 'react';
// Assuming this component exists based on your structure
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Asset Imports (Placeholder paths based on your structure)
import FerruginousDuckMain from '../../../assets/FerruginousDuck.webp';
import class1Icon from '../../../assets/Class1Icon.webp'; // Assuming class 1 icon exists

// Male Variants
import FerruginousDuck_AlbinoMaleFront from '../../../assets/FerruginousDuck_AlbinoMaleFront.webp';
import FerruginousDuck_AlbinoMaleBack from '../../../assets/FerruginousDuck_AlbinoMaleBack.webp';
import FerruginousDuck_DarkBrownMaleFront from '../../../assets/FerruginousDuck_DarkBrownMaleFront.webp';
import FerruginousDuck_DarkBrownMaleBack from '../../../assets/FerruginousDuck_DarkBrownMaleBack.webp';
import FerruginousDuck_LeucisticMaleFront from '../../../assets/FerruginousDuck_LeucisticMaleFront.webp';
import FerruginousDuck_LeucisticMaleBack from '../../../assets/FerruginousDuck_LeucisticMaleBack.webp';
import FerruginousDuck_MelanisticMaleFront from '../../../assets/FerruginousDuck_MelanisticMaleFront.webp';
import FerruginousDuck_MelanisticMaleBack from '../../../assets/FerruginousDuck_MelanisticMaleBack.webp';
import FerruginousDuck_RedBrownMaleFront from '../../../assets/FerruginousDuck_RedBrownMaleFront.webp';
import FerruginousDuck_RedBrownMaleBack from '../../../assets/FerruginousDuck_RedBrownMaleBack.webp';

// Female Variants
import FerruginousDuck_AlbinoFemaleFront from '../../../assets/FerruginousDuck_AlbinoFemaleFront.webp';
import FerruginousDuck_AlbinoFemaleBack from '../../../assets/FerruginousDuck_AlbinoFemaleBack.webp';
import FerruginousDuck_DarkBrownFemaleFront from '../../../assets/FerruginousDuck_DarkBrownFemaleFront.webp';
import FerruginousDuck_DarkBrownFemaleBack from '../../../assets/FerruginousDuck_DarkBrownFemaleBack.webp';
import FerruginousDuck_LeucisticFemaleFront from '../../../assets/FerruginousDuck_LeucisticFemaleFront.webp';
import FerruginousDuck_LeucisticFemaleBack from '../../../assets/FerruginousDuck_LeucisticFemaleBack.webp';
import FerruginousDuck_MelanisticFemaleFront from '../../../assets/FerruginousDuck_MelanisticFemaleFront.webp';
import FerruginousDuck_MelanisticFemaleBack from '../../../assets/FerruginousDuck_MelanisticFemaleBack.webp';
import FerruginousDuck_RedBrownFemaleFront from '../../../assets/FerruginousDuck_RedBrownFemaleFront.webp';
import FerruginousDuck_RedBrownFemaleBack from '../../../assets/FerruginousDuck_RedBrownFemaleBack.webp';
// Note: Red Brown and Melanistic Female images were not explicitly in the screenshots, 
// but keeping imports if files exist, otherwise they can be removed.

import Ferruginous_Duck_shot_scheme from '../../../assets/Ferruginous_Duck_shot_scheme.webp';

const FerruginousDuck = () => {
  // --- DATA SOURCES ---

  

  // Features Table (Data from Screenshots)
  const features = [
    { label: "Behavior", value: "Shy, secretive" },
    { label: "Habitat", value: "Swamps, ponds, lakes, rivers" },
    { label: "Senses", value: "Keen eyesight, acute sense of hearing, poor sense of smell" },
    { label: "Social", value: "Small mixed groups, but can also be found alone or in mated pairs" },
    { label: "Active", value: "Early morning and late afternoon" },
    { label: "Recommended Equipment", value: "Class 1 Ammo, Beacon Deluxe Duck Caller, Ferriginous duck Decoys" },
    { label: "Species", value: "Aythya nyroca", italic: true },
    { label: "Difficulty", value: "Easy" },
  ];

  // Plumage Variants (Male)
  const plumageMale = [
    { name: "Albino - Front", color: "#eeeeee" },
    { name: "Albino - Back", color: "#bdbdbd" },
    { name: "Dark Brown - Front", color: "#5d4037" },
    { name: "Dark Brown - Back", color: "#3e2723" },
    { name: "Leucistic - Front", color: "#f5f5f5" },
    { name: "Leucistic - Back", color: "#e0e0e0" },
    { name: "Melanistic - Front", color: "#212121" },
    { name: "Melanistic - Back", color: "#000000" },
    { name: "Red Brown - Front", color: "#8d6e63" },
    { name: "Red Brown - Back", color: "#6d4c41" },
  ];

  // Plumage Variants (Female)
  const plumageFemale = [
    { name: "Albino - Front", color: "#eeeeee" },
    { name: "Albino - Back", color: "#bdbdbd" },
    { name: "Dark Brown - Front", color: "#5d4037" },
    { name: "Dark Brown - Back", color: "#3e2723" },
    { name: "Leucistic - Front", color: "#f5f5f5" },
    { name: "Leucistic - Back", color: "#e0e0e0" },
    { name: "Red Brown - Front", color: "#8d6e63" },
    { name: "Red Brown - Back", color: "#6d4c41" },
    { name: "Melanistic - Front", color: "#212121" },
    { name: "Melanistic - Back", color: "#000000" },
  ];

  // Table of contents data and smooth scroll handler
  const toc = [
    { id: 'features', title: 'Features' },
    
    { id: 'shot-scheme', title: 'Shot scheme' },
    { id: 'tips', title: 'Tips' },
    {
      id: 'plumage-variants',
      title: 'Plumage Variants',
      children: [
        { id: 'plumage-male', title: 'Male' },
        { id: 'plumage-female', title: 'Female' },
      ],
    },
    { id: 'plumage-variant-rarity', title: 'Plumage Variant Rarity' },
    { id: 'trivia', title: 'Trivia' },
    { id: 'references', title: 'References' },
  ];

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Actual gallery image arrays
  const maleImages = [
    FerruginousDuck_AlbinoMaleFront,
    FerruginousDuck_AlbinoMaleBack,
    FerruginousDuck_DarkBrownMaleFront,
    FerruginousDuck_DarkBrownMaleBack,
    FerruginousDuck_LeucisticMaleFront,
    FerruginousDuck_LeucisticMaleBack,
    FerruginousDuck_MelanisticMaleFront,
    FerruginousDuck_MelanisticMaleBack,
    FerruginousDuck_RedBrownMaleFront,
    FerruginousDuck_RedBrownMaleBack,
  ];

  const femaleImages = [
    FerruginousDuck_AlbinoFemaleFront,
    FerruginousDuck_AlbinoFemaleBack,
    FerruginousDuck_DarkBrownFemaleFront,
    FerruginousDuck_DarkBrownFemaleBack,
    FerruginousDuck_LeucisticFemaleFront,
    FerruginousDuck_LeucisticFemaleBack,
    FerruginousDuck_RedBrownFemaleFront,
    FerruginousDuck_RedBrownFemaleBack,
    FerruginousDuck_MelanisticFemaleFront,
    FerruginousDuck_MelanisticFemaleBack,
  ];

  return (
    <div className="wiki-page">
      <div className="wiki-inner">
        
        {/* PAGE HEADER */}
        <div className="wiki-header">
          <span>Ferruginous Duck</span>
          <div className="wiki-edit-actions">
          </div>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Ferruginous Duck</div>
            <div className="wiki-sidebar-image">
              <img src={FerruginousDuckMain} alt="Ferruginous Duck" />
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
                  <span>700</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-gold">☗ Gold</span>
                  <span>900</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-diamond">☗ Diamond</span>
                  <span>1050</span>
                </div>
              </div>
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Plumage</span>
               <span className="wiki-fs-sm">
                  Albino, Dark Brown, Leucistic, Melanistic, Red Brown
               </span>
            </div>

            <div className="wiki-sidebar-header">Locations</div>
            <div className="wiki-sidebar-section">
               <div className="wiki-mb-4"><span className="wiki-link">Salzwiesen Park</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main className="wiki-main">

            {/* Quote Block */}
            <div className="wiki-quote">
              "The Ferruginous Duck (Aythaya nyroca) is a medium-sized diving duck renowned for its rich chestnut plumage and distinctive white eye during the breeding season. Ferruginous Ducks inhabit a variety of freshwater wetland habitats, including marshes, lakes, ponds, and slow-moving rivers, particularly those with abundant submerged vegetation for nesting and foraging. As diving ducks, Ferruginous Ducks are highly adept at swimming and diving to reach their preferred food sources, which primarily consists of aquatic invertabrates, seeds, and vegetation."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-p-mb">
              The <strong>Ferruginous Duck</strong> is a small <span className="wiki-link">class 1</span> species of duck, that can be hunted on <span className="wiki-link">Salzwiesen Park</span>.
            </p>

            {/* Table of Contents (interactive) */}
            <div className="wiki-toc">
              <div className="wiki-toc-title">
                🔢 Contents <span className="wiki-toc-toggle">[hide]</span>
              </div>
              <ol className="wiki-toc">
                {toc.map((item, i) => (
                  <li key={item.id} style={{marginBottom: item.children ? '6px' : '3px'}}>
                    <a href={`#${item.id}`} onClick={(e)=>{e.preventDefault(); handleScroll(item.id);}} style={{color:'#6fb2e6', textDecoration: 'none'}}>{item.title}</a>
                    {item.children && (
                      <ol style={{marginTop: '6px', marginLeft: '12px', listStyle: 'none', padding: 0}}>
                        {item.children.map((c, j) => (
                          <li key={c.id} className="wiki-mb-4">
                            <a href={`#${c.id}`} onClick={(e)=>{e.preventDefault(); handleScroll(c.id);}} style={{color:'#6fb2e6', textDecoration: 'none'}}>{`${i+1}.${j+1} ${c.title}`}</a>
                          </li>
                        ))}
                      </ol>
                    )}
                  </li>
                ))}
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

            

            {/* SHOT SCHEME */}
            <h2 id="shot-scheme" className="wiki-h2">Shot scheme</h2>
            <div className="wiki-shot-wrap">
                <div className="wiki-shot-title">Color code</div>
                  <div className="wiki-shot-container">
                    <div className="wiki-shot-image">
                      <img src={Ferruginous_Duck_shot_scheme} alt="Ferruginous Duck X-ray shot scheme" className="w-[500px] h-[444px] object-contain" />
                    </div>
                    <div className="wiki-shot-info">
                      No Color - Every hit will kill the animal
                    </div>
                  </div>
            </div>

            {/* TIPS */}
            <h2 id="tips" className="wiki-h2">Tips</h2>
            <p>
              Ducks will fly against the wind when making a landing, so be mindful of the wind direction. If you are going to use blinds and decoys, place your decoys approximately 50ms (54yds) away from your blind so the <strong>Ferruginous Duck</strong> won't fly on top of you and spook.
            </p>

            {/* PLUMAGE VARIANTS (Gallery) */}
            <h2 id="plumage-variants" className="wiki-h2">Plumage Variants</h2>
            
            <h3 id="plumage-male" className="wiki-h3">Male</h3>
            <div className="wiki-gallery-grid">
              {plumageMale.map((item, i) => (
                <div key={i} className="wiki-gallery-item">
                  <div className="wiki-gallery-placeholder">
                    <img src={maleImages[i]} alt={item.name} />
                  </div>
                  <span className="wiki-gallery-label">{item.name}</span>
                </div>
              ))}
            </div>

            <h3 id="plumage-female" className="wiki-h3">Female</h3>
            <div className="wiki-gallery-grid">
              {plumageFemale.map((item, i) => (
                <div key={i} className="wiki-gallery-item">
                  <div className="wiki-gallery-placeholder">
                    <img src={femaleImages[i]} alt={item.name} />
                  </div>
                  <span className="wiki-gallery-label">{item.name}</span>
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
                        <td className="wiki-td wiki-td-rare">Male / Female</td>
                        <td className="wiki-td">
                            Dark Brown (49.95%),<br/>
                            Red Brown (49.95%)
                        </td>
                        <td className="wiki-td">X</td>
                        <td className="wiki-td">X</td>
                        <td className="wiki-td">
                            Albino (0.03%),<br/>
                            Leucistic (0.03%),<br/>
                            Melanistic (0.03%)
                        </td>
                    </tr>
                </tbody>
            </table>

            {/* TRIVIA */}
            <h2 id="trivia" className="wiki-h2">Trivia</h2>
            <ul className="wiki-ul">
                <li className="wiki-li">Its scientific name consists of the ancient Greek word <i>aithuia</i> which stands for an unnamed seabird mentioned by multiple authors and the Russian word <i>nyrok</i> which means pochard / diver.</li>
                <li className="wiki-li">The Ferruginous Duck can dive up to 60 seconds when foraging for food.</li>
                <li className="wiki-li">They are threatened by Grass Carp, which are illegally released into their territories and eat their food.</li>
            </ul>

            {/* REFERENCES */}
            <h2 id="references" className="wiki-h2">References</h2>
            <ol className="pl-6 text-[#6fb2e6]">
                <li><span className="wiki-link">Wikipedia.org</span></li>
                <li><span className="wiki-link">Hellabrunn.de</span></li>
                <li><span className="wiki-link">Waterfowl.org</span></li>
            </ol>

            <AnimalsTableMini />
          </main>
        </div>
      </div>
    </div>
  );
};

export default FerruginousDuck;