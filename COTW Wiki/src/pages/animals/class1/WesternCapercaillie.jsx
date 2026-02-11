import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import class1Icon from '../../../assets/Class1Icon.webp';
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import WesternCapercaillieMain from '../../../assets/WesternCapercaillie.webp';

// Male Plumage Images
import WesternCapercaillie_DarkMaleFront from '../../../assets/WesternCapercaillie_DarkMaleFront.webp';
import WesternCapercaillie_DarkMaleBack from '../../../assets/WesternCapercaillie_DarkMaleBack.webp';
import WesternCapercaillie_LeucisticVariation1MaleFront from '../../../assets/WesternCapercaillie_LeucisticVariation1MaleFront.webp';
import WesternCapercaillie_LeucisticVariation1MaleBack from '../../../assets/WesternCapercaillie_LeucisticVariation1MaleBack.webp';
import WesternCapercaillie_LeucisticVariation2MaleFront from '../../../assets/WesternCapercaillie_LeucisticVariation2MaleFront.webp';
import WesternCapercaillie_LeucisticVariation2MaleBack from '../../../assets/WesternCapercaillie_LeucisticVariation2MaleBack.webp';
import WesternCapercaillie_PaleMaleFront from '../../../assets/WesternCapercaillie_PaleMaleFront.webp';
import WesternCapercaillie_PaleMaleBack from '../../../assets/WesternCapercaillie_PaleMaleBack.webp';

// Female Plumage Images
import WesternCapercaillie_BrightFemaleFront from '../../../assets/WesternCapercaillie_BrightFemaleFront.webp';
import WesternCapercaillie_BrightFemaleBack from '../../../assets/WesternCapercaillie_BrightFemaleBack.webp';
import WesternCapercaillie_BrownFemaleFront from '../../../assets/WesternCapercaillie_BrownFemaleFront.webp';
import WesternCapercaillie_BrownFemaleBack from '../../../assets/WesternCapercaillie_BrownFemaleBack.webp';
import WesternCapercaillie_Leucistic1FemaleFront from '../../../assets/WesternCapercaillie_LeucisticVariation1FemaleFront.webp';
import WesternCapercaillie_Leucistic1FemaleBack from '../../../assets/WesternCapercaillie_LeucisticVariation1FemaleBack.webp';
import WesternCapercaillie_OchreFemaleFront from '../../../assets/WesternCapercaillie_OchreFemaleFront.webp';
import WesternCapercaillie_OchreFemaleBack from '../../../assets/WesternCapercaillie_OchreFemaleBack.webp';


const WesternCapercaillie = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  // Source: Екранна снимка 2026-01-16 132620.png
  const needZonesData = [
    {
      name: "Revontuli Coast",
      schedule: [
        { time: "00:00 - 04:00", type: "Resting", icon: RestingZoneIcon },
        { time: "04:00 - 11:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "11:00 - 14:00", type: "Resting", icon: RestingZoneIcon },
        { time: "14:00 - 21:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "21:00 - 24:00", type: "Resting", icon: RestingZoneIcon },
      ]
    }
  ];

  // Features Table
  // Source: Екранна снимка 2026-01-16 132612.png
  const features = [
    { label: "Behavior", value: "Wary, but aggressive during mating season" },
    { label: "Habitat", value: "Old conifer forest" },
    { label: "Senses", value: "Great hearing and sight, poor sense of smell" },
    { label: "Social", value: "Males are solitary while hens group in small flocks" },
    { label: "Active", value: "Diurnal" },
    { label: "Recommended Equipment", value: "Class 1 Ammo" },
    { label: "Species", value: "Tetrao urogallus", italic: true, isLink: true },
    { label: "Difficulty", value: "Easy" },
  ];

  // Plumage Gallery Data
  // Source: 132628.jpg, 132635.jpg, 132642.jpg, 132648.jpg
  const plumageGallery = {
    male: [
      { name: "Dark - Front", src: WesternCapercaillie_DarkMaleFront },
      { name: "Dark - Back", src: WesternCapercaillie_DarkMaleBack },
      { name: "Leucistic Variation 1 - Front", src: WesternCapercaillie_LeucisticVariation1MaleFront },
      { name: "Leucistic Variation 1 - Back", src: WesternCapercaillie_LeucisticVariation1MaleBack },
      { name: "Leucistic Variation 2 - Front", src: WesternCapercaillie_LeucisticVariation2MaleFront },
      { name: "Leucistic Variation 2 - Back", src: WesternCapercaillie_LeucisticVariation2MaleBack },
      { name: "Pale - Front", src: WesternCapercaillie_PaleMaleFront },
      { name: "Pale - Back", src: WesternCapercaillie_PaleMaleBack },
    ],
    female: [
      { name: "Bright - Front", src: WesternCapercaillie_BrightFemaleFront },
      { name: "Bright - Back", src: WesternCapercaillie_BrightFemaleBack },
      { name: "Brown - Front", src: WesternCapercaillie_BrownFemaleFront },
      { name: "Brown - Back", src: WesternCapercaillie_BrownFemaleBack },
      { name: "Leucistic Variation 1 - Front", src: WesternCapercaillie_Leucistic1FemaleFront },
      { name: "Leucistic Variation 1 - Back", src: WesternCapercaillie_Leucistic1FemaleBack },
      { name: "Ochre - Front", src: WesternCapercaillie_OchreFemaleFront },
      { name: "Ochre - Back", src: WesternCapercaillie_OchreFemaleBack },
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
          <span>Western Capercaillie</span>
          <div className="wiki-edit-actions">
          </div>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Western Capercaillie</div>
            <div className="wiki-sidebar-image">
              <img src={WesternCapercaillieMain} alt="Western Capercaillie" />
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

            {/* Trophy Type */}
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Trophy Type</span>
              <span>Combined</span>
              <div className="wiki-trophy-grid">
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-silver">◆ Silver</span>
                  <span>2.20</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-gold">☗ Gold</span>
                  <span>3.60</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-diamond">☗ Diamond</span>
                  <span>4.64</span>
                </div>
              </div>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Weight</span>
              1.5kg — 5kg<br/>
              3lbs — 11lbs
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Plumage</span>
               <span className="wiki-fs-sm">
                  Bright, Brown, Dark, Leucistic, Ochre, Pale
               </span>
            </div>

            <div className="wiki-sidebar-header">Locations</div>
            <div className="wiki-sidebar-section">
               <div className="wiki-mb-4"><span className="wiki-link">Medved-Taiga National Park</span></div>
               <div className="wiki-mb-4"><span className="wiki-link">Revontuli Coast</span></div>
               <div className="wiki-mb-4"><span className="wiki-link">Tòrr nan Sithean</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main className="wiki-main">

            {/* Quote Block */}
            <div className="wiki-quote">
              "The Western Capercaillie is the largest of all grouse species. Similar to the Black Grouse it's known for the mating ritual. Males perform for females with with puffed out feathers, strutting and very distinct calls. During mating season the ritual can get very aggressive and males can end up killing each other. Female and male capercaillie are easily distinguishable by their size and colouration. The male is much bigger than the female and their plumages are distinctly different. The female capercaillie live in flocks with their yearling chicks while the adult male are almost always solitary. The name Capercaillie comes from Gaelic 'capul coille' which translates into 'horse of the woods'."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-p-mb">
              The <strong>Western Capercaillie</strong> is a species of "upland" bird that was introduced with <span className="wiki-link">Revontuli Coast</span>. Also dwells on <span className="wiki-link">Medved-Taiga National Park</span> and <span className="wiki-link">Tòrr nan Sithean</span>.
            </p>
            <p className="wiki-p-mb">
              It is one of 5 grouse currently huntable in game. The other Grouse include <span className="wiki-link">Rock Ptarmigan</span>, <span className="wiki-link">Willow Ptarmigan</span>, <span className="wiki-link">Black Grouse</span>, and <span className="wiki-link">Hazel Grouse</span>.
            </p>

            {/* Table of Contents Placeholder */}
            <div className="wiki-toc">
              <div className="wiki-toc-title">
                🔢 Contents <span className="wiki-toc-toggle">[hide]</span>
              </div>
              <ol className="wiki-toc">
                <li><a href="#features" onClick={scrollToId('features')} className="wiki-link">Features</a></li>
                <li><a href="#need-zones" onClick={scrollToId('need-zones')} className="wiki-link">Need Zone Times</a></li>
                <li>
                  <a href="#plumage-variants" onClick={scrollToId('plumage-variants')} className="wiki-link">Plumage variants</a>
                  <ul >
                      <li className="text-[#6fb2e6]"><a href="#plumage-male" onClick={scrollToId('plumage-male')} className="wiki-link">3.1. Male</a></li>
                      <li className="text-[#6fb2e6]"><a href="#plumage-female" onClick={scrollToId('plumage-female')} className="wiki-link">3.2. Female</a></li>
                  </ul>
                </li>
                <li><a href="#plumage-rarity" onClick={scrollToId('plumage-rarity')} className="wiki-link">Plumage Variant Rarity</a></li>
                <li><a href="#trivia" onClick={scrollToId('trivia')} className="wiki-link">Trivia</a></li>
                <li><a href="#references" onClick={scrollToId('references')} className="wiki-link">References</a></li>
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
                        <tr><th colSpan="2" className="wiki-th wiki-th-center">Revontuli Coast</th></tr>
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

            {/* PLUMAGE VARIANTS (Gallery) */}
            <h2 id="plumage-variants" className="wiki-h2">Plumage variants</h2>
            
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
            <h2 id="plumage-rarity" className="wiki-h2">Plumage Variant Rarity</h2>
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
                            Dark (99.82%)
                        </td>
                        <td className="wiki-td">X</td>
                        <td className="wiki-td">X</td>
                        <td className="wiki-td">
                            Leucistic Variation 1 (0.09%)<br/>
                            Leucistic Variation 2 (0.04%)<br/>
                            Pale (0.04%)
                        </td>
                    </tr>
                    <tr>
                        <td className="wiki-td wiki-td-female">
                            Female
                        </td>
                        <td className="wiki-td">
                            Brown (74.88%)<br/>
                            Bright (12.53%)<br/>
                            Ochra (12.53%)
                        </td>
                        <td className="wiki-td">X</td>
                        <td className="wiki-td">X</td>
                        <td className="wiki-td">
                            Leucistic (0.07%)
                        </td>
                    </tr>
                </tbody>
            </table>

            {/* TRIVIA */}
            <h2 id="trivia" className="wiki-h2">Trivia</h2>
            <ul className="wiki-ul">
              <li className="wiki-li">The <strong>Western Capercaillie</strong> is well adapted for cold climates. Not only do <strong>Capercaillie</strong> have feathers covering their legs, but they also have rowed 'Horns' on their toes which helps distribute weight when walking on snow.<sup>[1]</sup> <i>"Yes, it literally has snow shoes, lol"</i></li>
              <li className="wiki-li">The <strong>Capercaillie</strong> is one of few animals in game that can go aggressive and is currently the only bird to do so. This is a reflection of how notoriously aggressive the <strong>Capercaillie</strong> is in real life.</li>
            </ul>

            {/* REFERENCES */}
            <h2 id="references" className="wiki-h2">References</h2>
            <div style={{fontSize: '0.9rem'}}>
               1. ↑ <span className="wiki-link">https://www.mindenpictures.com/stock-photo-capercaillie-tetrao-urogallus-close-up-of-foot-kuusamo-finland-march-naturephotography-image90716578.html</span>
            </div>

            <AnimalsTableMini />
          </main>
        </div>
      </div>
    </div>
  );
};

export default WesternCapercaillie;