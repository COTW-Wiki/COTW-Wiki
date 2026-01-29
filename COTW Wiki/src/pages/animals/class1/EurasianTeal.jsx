import React from 'react';
import AnimalsTableMini from '../../../components/AnimalsTableMini';



import EurasianTealMain from '../../../assets/EurasianTeal.webp';
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import class1Icon from '../../../assets/Class1Icon.webp';
import EurasianTeal_DarkGreenMaleFront from '../../../assets/EurasianTeal_DarkGreenMaleFront.webp';
import EurasianTeal_DarkGreenMaleBack from '../../../assets/EurasianTeal_DarkGreenMaleBack.webp';
import EurasianTeal_HybridBlueMaleFront from '../../../assets/EurasianTeal_HybridBlueMaleFront.webp';
import EurasianTeal_HybridBlueMaleBack from '../../../assets/EurasianTeal_HybridBlueMaleBack.webp';
import EurasianTeal_HybridGreenMaleFront from '../../../assets/EurasianTeal_HybridGreenMaleFront.webp';
import EurasianTeal_HybridGreenMaleBack from '../../../assets/EurasianTeal_HybridGreenMaleBack.webp';
import EurasianTeal_LeucisticVariation1MaleFront from '../../../assets/EurasianTeal_LeucisticVariation1MaleFront.webp';
import EurasianTeal_LeucisticVariation1MaleBack from '../../../assets/EurasianTeal_LeucisticVariation1MaleBack.webp';
import EurasianTeal_LeucisticVariation2MaleFront from '../../../assets/EurasianTeal_LeucisticVariation2MaleFront.webp';
import EurasianTeal_LeucisticVariation2MaleBack from '../../../assets/EurasianTeal_LeucisticVariation2MaleBack.webp';
import EurasianTeal_LightGreenMaleFront from '../../../assets/EurasianTeal_LightGreenMaleFront.webp';
import EurasianTeal_LightGreenMaleBack from '../../../assets/EurasianTeal_LightGreenMaleBack.webp';
import EurasianTeal_BrownFemaleFront from '../../../assets/EurasianTeal_BrownFemaleFront.webp';
import EurasianTeal_BrownFemaleBack from '../../../assets/EurasianTeal_BrownFemaleBack.webp';
import EurasianTeal_LeucisticFemaleFront from '../../../assets/EurasianTeal_LeucisticFemaleFront.webp';
import EurasianTeal_LeucisticFemaleBack from '../../../assets/EurasianTeal_LeucisticFemaleBack.webp';

const EurasianTeal = () => {

  // --- DATA SOURCES ---

  // Need Zone Times (Specific to Eurasian Teal based on screenshot)
  const needZones = [
    { time: "00:00 - 05:30", type: "Resting", icon: RestingZoneIcon },
    { time: "05:00 - 07:30", type: "Feeding", icon: FeedingZoneIcon },
    { time: "07:00 - 09:30", type: "Resting", icon: RestingZoneIcon },
    { time: "09:00 - 11:30", type: "Feeding", icon: FeedingZoneIcon },
    { time: "11:00 - 13:30", type: "Resting", icon: RestingZoneIcon },
    { time: "13:00 - 15:30", type: "Feeding", icon: FeedingZoneIcon },
    { time: "15:00 - 17:30", type: "Resting", icon: RestingZoneIcon },
    { time: "17:00 - 19:30", type: "Feeding", icon: FeedingZoneIcon },
    { time: "19:00 - 00:30", type: "Resting", icon: RestingZoneIcon },
  ];

  // Features Table (Data from Screenshots)
  const features = [
    { label: "Behavior", value: "Active, gregarious and vocal" },
    { label: "Habitat", value: "Ponds, lakes, bogs and estuaries" },
    { label: "Senses", value: "Excellent vision" },
    { label: "Social", value: "Highly gregarious, flocks migrate South in winter" },
    { label: "Active", value: "Feeds intermittently, mostly at night" },
    { label: "Recommended Equipment", value: "Class 1 Ammo, Eurasian Teal Decoys and Caller" },
    { label: "Species", value: "Anas crecca", italic: true },
    { label: "Difficulty", value: "Easy" },
  ];

  // Plumage Variants (Male)
  const plumageMale = [
    { name: "Dark Green - Front", color: "#2e7d32" },
    { name: "Dark Green - Back", color: "#1b5e20" },
    { name: "Hybrid Blue - Front", color: "#1565c0" },
    { name: "Hybrid Blue - Back", color: "#0d47a1" },
    { name: "Hybrid Green - Front", color: "#4caf50" },
    { name: "Hybrid Green - Back", color: "#388e3c" },
    { name: "Leucistic Variation 1 - Front", color: "#f5f5f5" },
    { name: "Leucistic Variation 1 - Back", color: "#e0e0e0" },
    { name: "Leucistic Variation 2 - Front", color: "#eeeeee" },
    { name: "Leucistic Variation 2 - Back", color: "#bdbdbd" },
    { name: "Light Green - Front", color: "#81c784" },
    { name: "Light Green - Back", color: "#66bb6a" },
  ];

  // Plumage Variants (Female)
  const plumageFemale = [
    { name: "Brown - Front", color: "#5d4037" },
    { name: "Brown - Back", color: "#3e2723" },
    { name: "Leucistic - Front", color: "#f5f5f5" },
    { name: "Leucistic - Back", color: "#e0e0e0" },
  ];

  // Actual gallery image arrays
  const maleImages = [
    EurasianTeal_DarkGreenMaleFront,
    EurasianTeal_DarkGreenMaleBack,
    EurasianTeal_HybridBlueMaleFront,
    EurasianTeal_HybridBlueMaleBack,
    EurasianTeal_HybridGreenMaleFront,
    EurasianTeal_HybridGreenMaleBack,
    EurasianTeal_LeucisticVariation1MaleFront,
    EurasianTeal_LeucisticVariation1MaleBack,
    EurasianTeal_LeucisticVariation2MaleFront,
    EurasianTeal_LeucisticVariation2MaleBack,
    EurasianTeal_LightGreenMaleFront,
    EurasianTeal_LightGreenMaleBack,
  ];

  const femaleImages = [
    EurasianTeal_BrownFemaleFront,
    EurasianTeal_BrownFemaleBack,
    EurasianTeal_LeucisticFemaleFront,
    EurasianTeal_LeucisticFemaleBack,
  ];

  // Smooth scroll helper for TOC
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      try { history.replaceState(null, '', `#${id}`); } catch(e) { /* noop */ }
    }
  };

  return (
    <div className="wiki-page">
      <div className="wiki-inner">
        
        {/* PAGE HEADER */}
        <div className="wiki-header">
          <span>Eurasian Teal</span>
          <div className="wiki-edit-actions">
          </div>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Eurasian Teal</div>
            <div className="wiki-sidebar-image">
              <img src={EurasianTealMain} alt="Eurasian Teal" />
            </div>
            
            <div className="wiki-sidebar-header">General Information</div>
            
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Class</span>
              <span><img src={class1Icon} alt="Class 1" className="wiki-class-icon"/> 1</span>
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
                  <span>312</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-gold">☗ Gold</span>
                  <span>336</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-diamond">☗ Diamond</span>
                  <span>354</span>
                </div>
              </div>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Weight</span>
              300g — 400g<br/>
              0.7lbs — 0.9lbs
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Plumage</span>
               <span className="wiki-fs-sm">
                  Dark Green, Light Green, Hybrid Green, Hybrid Blue, Leucistic
               </span>
            </div>

            <div className="wiki-sidebar-header">Locations</div>
            <div className="wiki-sidebar-section">
               <div className="wiki-mb-4"><span className="wiki-link">Revontuli Coast</span></div>
               <div className="wiki-mb-4"><span className="wiki-link">Salzwiesen Park</span></div>
              
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main className="wiki-main">

            {/* Quote Block */}
            <div className="wiki-quote">
              "The Eurasian Teal is a small dabbling duck commonly found in Northern Eurasia, closely related to the ubiquitous Mallard and the very similar American Green-Winged Teal. It is one of the smallest dabbling ducks in the world, and is recognizable by the prominent patches of teal-colored feathers on the head and wing of the males.
              Eurasian Teals are a very social species and can be commonly found in large flocks outside of the breeding season. They also readily mix with other species of ducks, leading to semi-frequent interbreeding with closely related species."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-p-mb">
              The <strong>Eurasian Teal</strong> is a small species of <span className="wiki-link">class 1</span> duck, that can be hunted on <span className="wiki-link">Revontuli Coast</span> and <span className="wiki-link">Salzwiesen Park</span>.
            </p>

            {/* Table of Contents Placeholder */}
            <div className="wiki-toc">
              <div className="wiki-toc-title">
                🔢 Contents <span className="wiki-toc-toggle">[hide]</span>
              </div>
              <ol className="wiki-toc">
                <li><a className="wiki-link" onClick={() => handleScroll('features')}>Features</a></li>
                <li><a className="wiki-link" onClick={() => handleScroll('need-zones')}>Need Zone Times</a></li>
                <li><a className="wiki-link" onClick={() => handleScroll('tips')}>Tips</a></li>
                <li>
                  <a className="wiki-link" onClick={() => handleScroll('plumage-variants')}>Plumage Variants</a>
                  <ol style={{listStyleType: 'none', paddingLeft: '14px', marginTop: '6px'}}>
                    <li><a className="wiki-link" onClick={() => handleScroll('plumage-male')}>4.1 Male</a></li>
                    <li><a className="wiki-link" onClick={() => handleScroll('plumage-female')}>4.2 Female</a></li>
                  </ol>
                </li>
                <li><a className="wiki-link" onClick={() => handleScroll('plumage-rarity')}>Plumage Variant Rarity</a></li>
                <li><a className="wiki-link" onClick={() => handleScroll('trivia')}>Trivia</a></li>
                <li><a className="wiki-link" onClick={() => handleScroll('references')}>References</a></li>
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
                        {needZones.map((zone, i) => (
                        <tr key={i}>
                            <td className="wiki-td">{zone.time}</td>
                            <td className="wiki-td"><img src={zone.icon} alt={zone.type} className="wiki-class-icon"/> {zone.type}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
           

            {/* Shot scheme removed */}
           

            {/* TIPS */}
            <h2 id="tips" className="wiki-h2">Tips</h2>
            <p>
              Ducks will fly against the wind when making a landing, so be mindful of the wind direction. If you are going to use blinds and decoys, place your decoys approximately 50ms (54yds) away from your blind so the <strong>Eurasian Teal</strong> won't fly on top of you and spook.
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
                            Light Green (49.93%),<br/>
                            Dark Green (49.93%)
                        </td>
                        <td className="wiki-td">X</td>
                        <td className="wiki-td">X</td>
                        <td className="wiki-td">
                            Hybrid Blue (0.03%),<br/>
                            Hybrid Green (0.03%),<br/>
                            Leucistic Variation 1 (0.03%),<br/>
                            Leucistic Variation 2 (0.03%)
                        </td>
                    </tr>
                    <tr>
                        <td className="wiki-td wiki-td-rare">Female</td>
                        <td className="wiki-td">
                            Brown (99.87%)
                        </td>
                        <td className="wiki-td">X</td>
                        <td className="wiki-td">
                            Leucistic (0.13%)
                        </td>
                        <td className="wiki-td">X</td>
                    </tr>
                </tbody>
            </table>
           

            {/* TRIVIA */}
            <h2 id="trivia" className="wiki-h2">Trivia</h2>
            <ul className="wiki-ul">
                <li className="wiki-li">The Eurasian Teal is often called the <i>Common Teal</i> or <i>Teal Duck</i> for how common and widespread the bird is.</li>
                <li className="wiki-li">While it may look identical to its American cousin, the <span className="wiki-link">Green Winged Teal</span>, the Eurasian Teal is distinct in that it lacks the white shoulder stipe on the front of its wings.</li>
                <li className="wiki-li">The color <i>teal</i> is named after the duck itself.</li>
            </ul>

            {/* REFERENCES */}
            <h2 id="references" className="wiki-h2">References</h2>
            <ol style={{paddingLeft:'25px', color: '#6fb2e6'}}>
                <li><span className="wiki-link">https://www.adobe.com/express/colors/teal</span></li>
            </ol>

            <AnimalsTableMini />
          </main>
        </div>
      </div>
    </div>
  );
};

export default EurasianTeal;