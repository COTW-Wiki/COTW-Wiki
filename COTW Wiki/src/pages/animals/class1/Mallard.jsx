import React from 'react';
import MallardMain from '../../../assets/Mallard.webp';
import Mallard_BlackBrownMaleFront from '../../../assets/Mallard_BlackBrownMaleFront.webp';
import Mallard_BlackBrownMaleBack from '../../../assets/Mallard_BlackBrownMaleBack.webp';
import Mallard_BlackBrownFemaleFront from '../../../assets/Mallard_BlackBrownFemaleFront.webp';
import Mallard_BlackBrownFemaleBack from '../../../assets/Mallard_BlackBrownFemaleBack.webp';
import Mallard_BlondeFemaleFront from '../../../assets/Mallard_BlondeFemaleFront.webp';
import Mallard_BlondeFemaleBack from '../../../assets/Mallard_BlondeFemaleBack.webp';
import Mallard_BrownHybridMaleFront from '../../../assets/Mallard_BrownHybridMaleFront.webp';
import Mallard_BrownHybridMaleBack from '../../../assets/Mallard_BrownHybridMaleBack.webp';
import Mallard_LeucisticMaleFront from '../../../assets/Mallard_LeucisticMaleFront.webp';
import Mallard_LeucisticMaleBack from '../../../assets/Mallard_LeucisticMaleBack.webp';
import Mallard_MelanisticMaleFront from '../../../assets/Mallard_MelanisticMaleFront.webp';
import Mallard_MelanisticFemaleFront from '../../../assets/Mallard_MelanisticFemaleFront.webp';
import Mallard_MelanisticMaleBack from '../../../assets/Mallard_MelanisticMaleBack.webp';
import Mallard_MelanisticFemaleBack from '../../../assets/Mallard_MelanisticFemaleBack.webp';
import Mallard_BrownHybridFemaleFront from '../../../assets/Mallard_BrownHybridFemaleFront.webp';
import Mallard_BrownHybridFemaleBack from '../../../assets/Mallard_BrownHybridFemaleBack.webp';
import Mallard_PiebaldMaleFront from '../../../assets/Mallard_PiebaldMaleFront.webp';
import Mallard_PiebaldMaleBack from '../../../assets/Mallard_PiebaldMaleBack.webp';
import Mallard_PiebaldFemaleFront from '../../../assets/Mallard_PiebaldFemaleFront.webp';
import Mallard_PiebaldFemaleBack from '../../../assets/Mallard_PiebaldFemaleBack.webp';
import Mallard_shot_scheme from '../../../assets/Mallard_shot_scheme.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import class1Icon from '../../../assets/Class1Icon.webp';
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

const Mallard = () => {
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
    { time: "17:00 - 29:00", type: "Feeding", icon: FeedingZoneIcon }, // Note: In-game UI typo says 29:00, likely means 19:00
    { time: "19:00 - 00:00", type: "Resting", icon: RestingZoneIcon },
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Vocal and social" },
    { label: "Habitat", value: "Swamps, ponds, lakes, rivers" },
    { label: "Senses", value: "Great hearing, decent vision, poor sense of smell" },
    { label: "Social", value: "Mixed groups with one dominant male. Some males remain solitary" },
    { label: "Active", value: "Night, dawn and early morning" },
    { label: "Recommended Equipment", value: "Class 1 Ammo, Beacon Deluxe Duck Caller, Mallard Decoys" },
    { label: "Species", value: "Anas platyrhynchos", italic: true },
    { label: "Difficulty", value: "Easy" },
  ];

  // Plumage Variants (Male)
  const plumageMale = [
    { name: "Black Brown - Front", src: Mallard_BlackBrownMaleFront },
    { name: "Black Brown - Back", src: Mallard_BlackBrownMaleBack },
    { name: "Brown Hybrid - Front", src: Mallard_BrownHybridMaleFront },
    { name: "Brown Hybrid - Back", src: Mallard_BrownHybridMaleBack },
    { name: "Leucistic - Front", src: Mallard_LeucisticMaleFront },
    { name: "Leucistic - Back", src: Mallard_LeucisticMaleBack },
    { name: "Melanistic - Front", src: Mallard_MelanisticMaleFront },
    { name: "Melanistic - Back", src: Mallard_MelanisticMaleBack },
    { name: "Piebald - Front", src: Mallard_PiebaldMaleFront },
    { name: "Piebald - Back", src: Mallard_PiebaldMaleBack },
  ];

  // Plumage Variants (Female)
  const plumageFemale = [
    { name: "Black Brown - Front", src: Mallard_BlackBrownFemaleFront },
    { name: "Black Brown - Back", src: Mallard_BlackBrownFemaleBack },
    { name: "Blonde - Front", src: Mallard_BlondeFemaleFront },
    { name: "Blonde - Back", src: Mallard_BlondeFemaleBack },
    { name: "Brown Hybrid - Front", src: Mallard_BrownHybridFemaleFront },
    { name: "Brown Hybrid - Back", src: Mallard_BrownHybridFemaleBack },
    { name: "Melanistic - Front", src: Mallard_MelanisticFemaleFront },
    { name: "Melanistic - Back", src: Mallard_MelanisticFemaleBack },
    { name: "Piebald - Front", src: Mallard_PiebaldFemaleFront },
    { name: "Piebald - Back", src: Mallard_PiebaldFemaleBack },
  ];

  // Table of contents data
  const toc = [
    { id: 'features', title: 'Features' },
    { id: 'need-zones', title: 'Need Zone Times' },
    { id: 'shot-scheme', title: 'Shot scheme' },
    { id: 'tips', title: 'Tips' },
    { id: 'plumage-variants', title: 'Plumage Variants', subs: [
      { id: 'plumage-male', title: 'Male' },
      { id: 'plumage-female', title: 'Female' },
    ] },
    { id: 'plumage-rarity', title: 'Plumage Variant Rarity' },
    { id: 'trivia', title: 'Trivia' },
    { id: 'references', title: 'References' },
  ];

  const handleTOCClick = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="wiki-page">
      <div className="wiki-inner">
        
        {/* PAGE HEADER */}
        <div className="wiki-header">
          <span>Mallard</span>
          <div className="wiki-edit-actions">
          </div>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Mallard</div>
            <div className="wiki-sidebar-image">
              <img src={MallardMain} alt="Mallard flying" style={{width: '268.4px', height: '134.2px', objectFit: 'cover'}} />
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
                   <span>9.96</span>
                </div>
                <div className="wiki-trophy-item">
                   <span className="wiki-trophy-label wiki-trophy-gold">☗ Gold</span>
                   <span>15.48</span>
                </div>
                <div className="wiki-trophy-item">
                   <span className="wiki-trophy-label wiki-trophy-diamond">☗ Diamond</span>
                   <span>19.61</span>
                </div>
              </div>
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Weight</span>
               0.72kg — 2.1kg<br/>
               2lbs — 5lbs
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Plumage</span>
               <span style={{fontSize: '0.85rem'}}>
                 Black-Brown, Blonde, Brown Hybrid, Leucistic, Melanistic, Piebald
               </span>
            </div>

            <div className="wiki-sidebar-header">Locations</div>
            <div className="wiki-sidebar-section">
               <div className="wiki-mb-4"><span className="wiki-link">Layton Lake District</span></div>
               <div className="wiki-mb-4"><span className="wiki-link">Revontuli Coast</span></div>
               <div className="wiki-mb-4"><span className="wiki-link">New England Mountains</span></div>
               <div className="wiki-mb-4"><span className="wiki-link">Te Awaroa National Park</span></div>
               <div className="wiki-mb-4"><span className="wiki-link">Salzwiesen Park</span></div>
               <div className="wiki-mb-4"><span className="wiki-link">Askiy Ridge Hunting Preserve</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main className="wiki-main">

            {/* Quote Block */}
            <div className="wiki-quote">
              "The mallard is a medium to large sized dabbling duck with a hefty body, rounded head, and wide flat bill. Males have a dark, iridescent-green head and bright yellow bill while females are mottled brown and possess orange-brown bills. As to dabbling ducks, mallards feed in the water by tipping forward and grazing on a highly diverse diet of underwater prey and plants. They are notoriously widespread and can be found on lakes, ponds, marshes, rivers and coastal habitats. Hunting mallards revolve around planning, patience and a little bit of luck. They will usually spend their days between two bodies of water, one that they use for resting, preening and socialization and the other they use as their feeding ground."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-mb-20">
              The <strong>Mallard</strong> is a small <span className="wiki-link">class 1</span> animal that can be hunted on the <span className="wiki-link">Layton Lake District</span>, <span className="wiki-link">Revontuli Coast</span>, <span className="wiki-link">New England Mountains</span> and <span className="wiki-link">Salzwiesen Park</span>. It was retroactively added to <span className="wiki-link">Te Awaroa National Park</span> after the release of New England. Also, it is the first of 8 species of duck to be introduced to the game. This was followed by the <span className="wiki-link">Cinnamon Teal</span> and then the <span className="wiki-link">Harlequin Duck</span>.
            </p>
            <p className="wiki-mb-20">
              The mallard was released as a free <span className="wiki-link">DLC</span>.
            </p>

            {/* Programmatic Table of Contents */}
            <div className="wiki-toc">
              <div style={{fontWeight: 'bold', borderBottom: '1px solid #3a5a75', marginBottom: '5px'}}>
                🔢 Contents <span className="wiki-toc-toggle">[hide]</span>
              </div>
              <ol style={{margin: 0, paddingLeft: 0, listStyleType: 'none', color: '#6fb2e6'}}>
                {toc.map((item, i) => (
                  <li key={item.id} style={{marginBottom: '6px'}}>
                    <button onClick={() => handleTOCClick(item.id)} style={{background: 'none', border: 'none', color: '#6fb2e6', cursor: 'pointer', fontWeight: 'bold'}}>
                      <span style={{marginRight: '8px'}}>{i + 1}.</span>{item.title}
                    </button>
                    {item.subs && (
                      <ol style={{margin: '6px 0 0 18px', padding: 0, listStyleType: 'none'}}>
                        {item.subs.map((s, j) => (
                          <li key={s.id} className="wiki-mb-4">
                            <button onClick={() => handleTOCClick(s.id)} style={{background: 'none', border: 'none', color: '#6fb2e6', cursor: 'pointer'}}>
                              <span style={{marginRight: '8px'}}>{i + 1}.{j + 1}</span>{s.title}
                            </button>
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
                        {item.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* NEED ZONE TIMES */}
            <h2 id="need-zones" className="wiki-h2">Need Zone Times</h2>
            <div style={{display: 'inline-block'}}>
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
                        <td className="wiki-td"><img src={zone.icon} alt="" style={{width:'18px', height:'18px', verticalAlign:'middle', marginRight:'6px'}}/>{zone.type}</td>
                      </tr>
                      ))}
                    </tbody>
                </table>
            </div>

            {/* SHOT SCHEME */}
            <h2 id="shot-scheme" className="wiki-h2">Shot scheme</h2>
            <div style={{backgroundColor: '#0f2e48', padding: '10px'}}>
                <div className="wiki-shot-title">Color code</div>
                <div className="wiki-shot-container">
                  <div className="wiki-shot-image">
                    <img src={Mallard_shot_scheme} alt="Mallard shot scheme" style={{width: '500px', height: '444px', objectFit: 'contain'}} />
                  </div>
                  <div className="wiki-shot-info">
                    No Color - Every hit will kill the animal
                  </div>
                </div>
            </div>

            {/* TIPS */}
            <h2 id="tips" className="wiki-h2">Tips</h2>
            <p>
              Ducks will fly against the wind when making a landing, so be mindful of the wind direction. <span className="wiki-link">Revontuli Coast</span> is currently the best map to hunt <strong>Mallards</strong>, since there is less cover for the ducks to hide behind. If you can only hunt on <span className="wiki-link">Layton Lake District</span>, look for spots with few to no reeds and little brush on the shorelines. If you are going to use blinds and decoys, place your decoys approximately 50ms (54yds) away from your blind so the <strong>mallards</strong> won't fly on top of you and spook.
            </p>

            {/* PLUMAGE VARIANTS (Gallery) */}
            <h2 id="plumage-variants" className="wiki-h2">Plumage Variants</h2>
            
            <h3 id="plumage-male" className="wiki-h3">Male</h3>
            <div className="wiki-gallery-grid">
              {plumageMale.map((img, i) => (
                  <div key={i} className="wiki-gallery-item">
                            <img src={img.src} alt={img.name} style={{width: '146px', height: '165px', objectFit: 'cover', border: '4px solid #1f3a52', marginBottom: '8px', display: 'block'}} />
                            <span className="wiki-gallery-label">{img.name}</span>
                  </div>
              ))}
            </div>

            <h3 id="plumage-female" className="wiki-h3">Female</h3>
            <div className="wiki-gallery-grid">
              {plumageFemale.map((img, i) => (
                  <div key={i} className="wiki-gallery-item">
                        <img src={img.src} alt={img.name} style={{width: '146px', height: '165px', objectFit: 'cover', border: '4px solid #1f3a52', marginBottom: '8px', display: 'block'}} />
                        <span className="wiki-gallery-label">{img.name}</span>
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
                    {/* Male Row */}
                    <tr>
                        <td className="wiki-td wiki-td-rare">Male</td>
                        <td className="wiki-td">
                            Black Brown (74.77%)<br/>
                            Piebald (12.51%)<br/>
                            Brown Hybrid (12.51%)
                        </td>
                        <td className="wiki-td">X</td>
                        <td className="wiki-td">
                            Leucistic (0.10%)<br/>
                            Melanistic (0.10%)
                        </td>
                        <td className="wiki-td">X</td>
                    </tr>
                    {/* Female Row */}
                    <tr>
                        <td style={{...styles.td, color: '#e91e63', fontStyle: 'italic'}}>Female</td>
                        <td className="wiki-td">
                            Black Brown (74.77%)<br/>
                            Piebald (12.51%)<br/>
                            Brown Hybrid (12.51%)
                        </td>
                        <td className="wiki-td">X</td>
                        <td className="wiki-td">
                            Blonde (0.10%)<br/>
                            Melanistic (0.10%)
                        </td>
                        <td className="wiki-td">X</td>
                    </tr>
                </tbody>
            </table>

            {/* TRIVIA */}
            <h2 id="trivia" className="wiki-h2">Trivia</h2>
            <ul style={{paddingLeft: '20px', marginBottom: '30px'}}>
                <li className="wiki-li">According to Earnest Alfred Choate, the <em>a-r-d</em> in Mallard refers to <em>drunkards</em> describing how aggressive male Mallards get when mating.[2]</li>
                <li className="wiki-li">In real life, there are three common calls that are done with a Mallard Hen call: Quack, Hail, and Feeding Chuckle. In game, only the quack and hail can be made with the duck call.</li>
                <li className="wiki-li">The males distinctive color pattern isn't year round. It develops during mating season to attract females.</li>
                <li className="wiki-li">The Mallard is believed to be the ancestor of most domestic duck species; it is also one of only two domesticated duck species. The other is the Muscovy Duck.[3]</li>
                <li>It is one of 8 species of duck huntable in game. The others include the <span className="wiki-link">Cinnamon Teal</span>, the <span className="wiki-link">Harlequin Duck</span>, the <span className="wiki-link">Eurasian Teal</span>, the <span className="wiki-link">Eurasian Wigeon</span>, the <span className="wiki-link">Goldeneye</span>, the <span className="wiki-link">Tufted Duck</span>, and the <span className="wiki-link">Green Winged Teal</span>.</li>
            </ul>

            {/* REFERENCES */}
            <h2 id="references" className="wiki-h2">References</h2>
            <ol style={{paddingLeft: '25px', color: '#6fb2e6'}}>
                <li><span className="wiki-link">Mallard Need Zones, Askiy Ridge</span></li>
                <li><span className="wiki-link">"The Dictionary of American Bird Names" by Earnest Alfred Choate</span></li>
                <li><span className="wiki-link">https://www.birds.cornell.edu/crows/domducks.htm</span></li>
            </ol>

            <AnimalsTableMini />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Mallard;