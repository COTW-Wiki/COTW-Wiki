import React from 'react';

// Asset imports
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import class1Icon from '../../../assets/Class1Icon.webp';
import GadwallMain from '../../../assets/Gadwall.webp';
import Gadwall_shot_scheme from '../../../assets/Gadwall_shot_scheme.webp';

import Gadwall_AlbinoMaleFront from '../../../assets/Gadwall_AlbinoMaleFront.webp';
import Gadwall_AlbinoMaleBack from '../../../assets/Gadwall_AlbinoMaleBack.webp';
import Gadwall_EclipseMaleFront from '../../../assets/Gadwall_EclipseMaleFront.webp';
import Gadwall_EclipseMaleBack from '../../../assets/Gadwall_EclipseMaleBack.webp';
import Gadwall_GreyMaleFront from '../../../assets/Gadwall_GreyMaleFront.webp';
import Gadwall_GreyMaleBack from '../../../assets/Gadwall_GreyMaleBack.webp';
import Gadwall_LeucisticMaleFront from '../../../assets/Gadwall_LeucisticMaleFront.webp';
import Gadwall_LeucisticMaleBack from '../../../assets/Gadwall_LeucisticMaleBack.webp';
import Gadwall_MelanisticMaleFront from '../../../assets/Gadwall_MelanisticMaleFront.webp';
import Gadwall_MelanisticMaleBack from '../../../assets/Gadwall_MelanisticMaleBack.webp';

import Gadwall_AlbinoFemaleFront from '../../../assets/Gadwall_AlbinoFemaleFront.webp';
import Gadwall_AlbinoFemaleBack from '../../../assets/Gadwall_AlbinoFemaleBack.webp';
import Gadwall_BrownFemaleFront from '../../../assets/Gadwall_BrownFemaleFront.webp';
import Gadwall_BrownFemaleBack from '../../../assets/Gadwall_BrownFemaleBack.webp';
import Gadwall_LeucisticFemaleFront from '../../../assets/Gadwall_LeucisticFemaleFront.webp';
import Gadwall_LeucisticFemaleBack from '../../../assets/Gadwall_LeucisticFemaleBack.webp';
import Gadwall_MelanisticFemaleFront from '../../../assets/Gadwall_MelanisticFemaleFront.webp';
import Gadwall_MelanisticFemaleBack from '../../../assets/Gadwall_MelanisticFemaleBack.webp';

import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

const Gadwall = () => {
  // --- DATA SOURCES ---

  // Need Zone Times (Standard Duck Schedule used as placeholder)
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

  // Features Table (Data from Screenshots)
  const features = [
    { label: "Behavior", value: "Calm, shy" },
    { label: "Habitat", value: "Swamps, ponds, lakes, rivers" },
    { label: "Senses", value: "Keen eyesight, acute sense of hearing, poor sense of smell" },
    { label: "Social", value: "Small mixed groups, but can also be found alone or in mated pairs" },
    { label: "Active", value: "Early morning and late afternoon" },
    { label: "Recommended Equipment", value: "Class 1 Ammo, Gadwall Caller, Gadwall Decoys" },
    { label: "Species", value: "Mareca strepera", italic: true },
    { label: "Difficulty", value: "Easy" },
  ];

  // Plumage Variants (Male)
  const plumageMale = [
    { name: "Albino - Front", color: "#eeeeee" },
    { name: "Albino - Back", color: "#bdbdbd" },
    { name: "Eclipse - Front", color: "#8d6e63" },
    { name: "Eclipse - Back", color: "#6d4c41" },
    { name: "Grey - Front", color: "#9e9e9e" },
    { name: "Grey - Back", color: "#757575" },
    { name: "Leucistic - Front", color: "#f5f5f5" },
    { name: "Leucistic - Back", color: "#e0e0e0" },
    { name: "Melanistic - Front", color: "#212121" },
    { name: "Melanistic - Back", color: "#000000" },
  ];

  // Plumage Variants (Female)
  const plumageFemale = [
    { name: "Albino - Front", color: "#eeeeee" },
    { name: "Albino - Back", color: "#bdbdbd" },
    { name: "Brown - Front", color: "#5d4037" },
    { name: "Brown - Back", color: "#3e2723" },
    { name: "Leucistic - Front", color: "#f5f5f5" },
    { name: "Leucistic - Back", color: "#e0e0e0" },
    { name: "Melanistic - Front", color: "#212121" },
    { name: "Melanistic - Back", color: "#000000" },
  ];

  // Actual gallery image arrays
  const maleImages = [
    Gadwall_AlbinoMaleFront,
    Gadwall_AlbinoMaleBack,
    Gadwall_EclipseMaleFront,
    Gadwall_EclipseMaleBack,
    Gadwall_GreyMaleFront,
    Gadwall_GreyMaleBack,
    Gadwall_LeucisticMaleFront,
    Gadwall_LeucisticMaleBack,
    Gadwall_MelanisticMaleFront,
    Gadwall_MelanisticMaleBack,
  ];

  const femaleImages = [
    Gadwall_AlbinoFemaleFront,
    Gadwall_AlbinoFemaleBack,
    Gadwall_BrownFemaleFront,
    Gadwall_BrownFemaleBack,
    Gadwall_LeucisticFemaleFront,
    Gadwall_LeucisticFemaleBack,
    Gadwall_MelanisticFemaleFront,
    Gadwall_MelanisticFemaleBack,
  ];

  return (
    <div className="wiki-page">
      <div className="wiki-inner">
        
        {/* PAGE HEADER */}
          <div className="wiki-header">
          <span>Gadwall</span>
          <div className="wiki-edit-actions">
          </div>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Gadwall</div>
            <div className="wiki-sidebar-image">
              <img src={GadwallMain} alt="Gadwall" />
            </div>
            
            <div className="wiki-sidebar-header">General Information</div>
            
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Class</span>
              <span><img src={class1Icon} alt="Class 1" className="wiki-class-icon"/>1</span>
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
                  Albino, Brown, Eclipse, Grey, Leucistic, Melanistic
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
              "Gadwall Ducks are versatile waterfowl, found in a wide range of wetland habitats. They are particularly fond of shallow, freshwater habitats with abundant emergent vegetation for feeding and cover.
              Both male and female Gadwalls exhibit a muted yet distinctive color palette. Males feature a handsome pattern of intricate gray, brown and black markings on their bodies, with a striking black rear end and subtle iridescent sheen on their wings. Females, while less boldly patterned, display a warm mottled brown plumage, providing effective camouflage in their marshy habitats.
              Gadwalls are known for their cautious nature and keen awareness of their surroundings, making them a challenging quarry for waterfowl hunters."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-p-mb">
              The <strong>Gadwall</strong> is a small <span className="wiki-link">class 1</span> species of duck, that can be hunted on <span className="wiki-link">Salzwiesen Park</span>.
            </p>

            {/* Table of Contents */}
            <div className="wiki-toc">
              <div className="wiki-toc-title">
                🔢 Contents <span className="wiki-toc-toggle">[hide]</span>
              </div>
              <ol className="wiki-toc">
                {toc.map((item, i) => (
                  <li key={item.id} style={{marginBottom: '6px'}}>
                    <a
                      href={`#${item.id}`}
                      onClick={(e)=>{e.preventDefault(); handleScroll(item.id);}}
                      className="wiki-link"
                    >
                      {item.title}
                    </a>

                    {item.sub && item.sub.length > 0 && (
                      <ol style={{marginTop:'6px', paddingLeft: '18px', color: '#6fb2e6', listStyleType: 'none'}}>
                        {item.sub.map((sub, j) => (
                          <li key={sub.id}>
                            <a
                              href={`#${sub.id}`}
                              onClick={(e)=>{e.preventDefault(); handleScroll(sub.id);}}
                              className="wiki-link"
                            >
                              {`${i+1}.${j+1} ${sub.title}`}
                            </a>
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

            {/* NEED ZONE TIMES */}
            <h2 id="need-zone-times" className="wiki-h2">Need Zone Times</h2>
            <div className="wiki-inline-block">
                <table className="wiki-table wiki-table-fixed">
                    <thead>
                        <tr><th colSpan="2" className="wiki-th wiki-th-center">Revontuli Coast</th></tr>
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
                      <img src={Gadwall_shot_scheme} alt="Gadwall X-ray shot scheme" className="wiki-img-contain" />
                    </div>
                    <div className="wiki-shot-info">
                      No Color - Every hit will kill the animal
                    </div>
                  </div>
            </div>

            {/* TIPS */}
            <h2 id="tips" className="wiki-h2">Tips</h2>
            <p>
              Ducks will fly against the wind when making a landing, so be mindful of the wind direction. If you are going to use blinds and decoys, place your decoys approximately 50ms (54yds) away from your blind so the <strong>Gadwall</strong> won't fly on top of you and spook.
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
                        <td className="wiki-td wiki-td-rare">Male</td>
                        <td className="wiki-td">
                            Grey (59.87%),<br/>
                            Eclipse (39.97%)
                        </td>
                        <td className="wiki-td">X</td>
                        <td className="wiki-td">X</td>
                        <td className="wiki-td">
                            Albino (0.05%),<br/>
                            Leucistic (0.05%),<br/>
                            Melanistic (0.05%)
                        </td>
                    </tr>
                    <tr>
                        <td className="wiki-td wiki-td-rare">Female</td>
                        <td className="wiki-td">
                            Brown (99.85%)
                        </td>
                        <td className="wiki-td">X</td>
                        <td className="wiki-td">X</td>
                        <td className="wiki-td">
                            Albino (0.05%),<br/>
                            Leucistic (0.05%),<br/>
                            Melanistic (0.05%)
                        </td>
                    </tr>
                </tbody>
            </table>

            {/* TRIVIA */}
            <h2 id="trivia" className="wiki-h2">Trivia</h2>
            <ul className="wiki-ul">
                <li className="wiki-li">Its scientific name consists of the words <i>Marreco</i> which is Portugese for small duck and <i>strepera</i> which is latin for <i>noisy</i>.</li>
                <li className="wiki-li">Gadwalls are known to frequently steal food from other ducks.</li>
            </ul>

            {/* REFERENCES */}
            <h2 id="references" className="wiki-h2">References</h2>
            <ol style={{paddingLeft:'25px', color: '#6fb2e6'}}>
                <li><span className="wiki-link">wikipedia.org</span></li>
                <li><span className="wiki-link">allaboutbirds.org</span></li>
            </ol>

            <AnimalsTableMini />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Gadwall;