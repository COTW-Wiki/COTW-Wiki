import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import class1Icon from '../../../assets/Class1Icon.webp';
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';
import React from 'react';
import TuftedDuckMain from '../../../assets/TuftedDuck.webp';
import TuftedDuck_AlbinoMaleFront from '../../../assets/TuftedDuck_AlbinoMaleFront.webp';
import TuftedDuck_AlbinoMaleBack from '../../../assets/TuftedDuck_AlbinoMaleBack.webp';
import TuftedDuck_BlackMaleFront from '../../../assets/TuftedDuck_BlackMaleFront.webp';
import TuftedDuck_BlackMaleBack from '../../../assets/TuftedDuck_BlackMaleBack.webp';
import TuftedDuck_EclipseMaleFront from '../../../assets/TuftedDuck_EclipseMaleFront.webp';
import TuftedDuck_EclipseMaleBack from '../../../assets/TuftedDuck_EclipseMaleBack.webp';
import TuftedDuck_BrownFemaleFront from '../../../assets/TuftedDuck_BrownFemaleFront.webp';
import TuftedDuck_BrownFemaleBack from '../../../assets/TuftedDuck_BrownFemaleBack.webp';
import TuftedDuck_CreamFemaleFront from '../../../assets/TuftedDuck_CreamFemaleFront.webp';
import TuftedDuck_CreamFemaleBack from '../../../assets/TuftedDuck_CreamFemaleBack.webp';
import TuftedDuck_LeucisticVariation1MaleFront from '../../../assets/TuftedDuck_LeucisticVariation1MaleFront.webp';
import TuftedDuck_LeucisticVariation1MaleBack from '../../../assets/TuftedDuck_LeucisticVariation1MaleBack.webp';
import TuftedDuck_LeucisticVariation1FemaleFront from '../../../assets/TuftedDuck_LeucisticVariation1FemaleFront.webp';
import TuftedDuck_LeucisticVariation1FemaleBack from '../../../assets/TuftedDuck_LeucisticVariation1FemaleBack.webp';
import TuftedDuck_LeucisticVariation2MaleFront from '../../../assets/TuftedDuck_LeucisticVariation2MaleFront.webp';
import TuftedDuck_LeucisticVariation2MaleBack from '../../../assets/TuftedDuck_LeucisticVariation2MaleBack.webp';
import TuftedDuck_LeucisticVariation2FemaleFront from '../../../assets/TuftedDuck_LeucisticVariation2FemaleFront.webp';
import TuftedDuck_LeucisticVariation2FemaleBack from '../../../assets/TuftedDuck_LeucisticVariation2FemaleBack.webp';

const TuftedDuck = () => {
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
    { label: "Behavior", value: "Gregarious, skittish" },
    { label: "Habitat", value: "Ponds, lakes, wetlands and sheltered coastal areas" },
    { label: "Senses", value: "Excellent vision" },
    { label: "Social", value: "Mixed groups most of the year, mated pairs during breeding season" },
    { label: "Active", value: "Most active at night" },
    { label: "Recommended Equipment", value: "Class 1 Ammo, Tufted Duck Decoys" },
    { label: "Species", value: "Aythya fuligula", italic: true },
    { label: "Difficulty", value: "Easy" },
  ];

  // Plumage Variants (Male)
  const plumageMale = [
    { name: "Albino - Front", src: TuftedDuck_AlbinoMaleFront },
    { name: "Albino - Back", src: TuftedDuck_AlbinoMaleBack },
    { name: "Black - Front", src: TuftedDuck_BlackMaleFront },
    { name: "Black - Back", src: TuftedDuck_BlackMaleBack },
    { name: "Eclipse - Front", src: TuftedDuck_EclipseMaleFront },
    { name: "Eclipse - Back", src: TuftedDuck_EclipseMaleBack },
    { name: "Leucistic Variation 1 - Front", src: TuftedDuck_LeucisticVariation1MaleFront },
    { name: "Leucistic Variation 1 - Back", src: TuftedDuck_LeucisticVariation1MaleBack },
    { name: "Leucistic Variation 2 - Front", src: TuftedDuck_LeucisticVariation2MaleFront },
    { name: "Leucistic Variation 2 - Back", src: TuftedDuck_LeucisticVariation2MaleBack },
  ];

  // Plumage Variants (Female)
  const plumageFemale = [
    { name: "Brown - Front", src: TuftedDuck_BrownFemaleFront },
    { name: "Brown - Back", src: TuftedDuck_BrownFemaleBack },
    { name: "Cream - Front", src: TuftedDuck_CreamFemaleFront },
    { name: "Cream - Back", src: TuftedDuck_CreamFemaleBack },
    { name: "Leucistic Variation 1 - Front", src: TuftedDuck_LeucisticVariation1FemaleFront },
    { name: "Leucistic Variation 1 - Back", src: TuftedDuck_LeucisticVariation1FemaleBack },
    { name: "Leucistic Variation 2 - Front", src: TuftedDuck_LeucisticVariation2FemaleFront },
    { name: "Leucistic Variation 2 - Back", src: TuftedDuck_LeucisticVariation2FemaleBack },
  ];

  const toc = [
    { id: 'features', title: 'Features' },
    { id: 'need-zones', title: 'Need Zone Times' },
    { id: 'tips', title: 'Tips' },
    { id: 'plumage-variants', title: 'Plumage Variants', children: [
      { id: 'plumage-male', title: 'Male' },
      { id: 'plumage-female', title: 'Female' },
    ] },
    { id: 'plumage-rarity', title: 'Plumage Variant Rarity' },
    { id: 'trivia', title: 'Trivia' },
    { id: 'references', title: 'References' },
  ];

  function handleTOCClick(targetId) {
    const el = document.getElementById(targetId);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <div className="wiki-page">
      <div className="wiki-inner">
        
        {/* PAGE HEADER */}
        <div className="wiki-header">
          <span>Tufted Duck</span>
          <div className="wiki-edit-actions">
          </div>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Tufted Duck</div>
            <div className="wiki-sidebar-image">
              <img src={TuftedDuckMain} alt="Tufted Duck" className="w-full h-full object-cover block m-0" />
            </div>
            
            <div className="wiki-sidebar-header">General Information</div>
            
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Class</span>
              <span className="inline-flex items-center gap-2"><img src={class1Icon} alt="Class 1" className="inline-block wiki-class-icon-sm align-middle mr-1.5" />1</span>
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
                   <span>704</span>
                </div>
                <div className="wiki-trophy-item">
                   <span className="wiki-trophy-label wiki-trophy-gold">☗ Gold</span>
                   <span>852</span>
                </div>
                <div className="wiki-trophy-item">
                   <span className="wiki-trophy-label wiki-trophy-diamond">☗ Diamond</span>
                   <span>963</span>
                </div>
              </div>
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Weight</span>
               630g — 1000g<br/>
               1.4lbs — 2.2lbs
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Plumage</span>
              <span className="text-[0.85rem]">Albino, Black, Brown, Cream, Eclipse, Leucistic</span>
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
              "The Tufted Duck is a common species of diving duck found mostly in Western, Central and Northern Europe. It lives in marshes, wetlands and sheltered coastal areas where it feeds on molluscs, insects, crustaceans, roots and seeds. Males have a peculiar tuft of feathers on the back of their heads, giving the species its name. Their black and white plumage is also very distinctive, making them easy to recognize among other ducks."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-mb-20">
              The <strong>Tufted Duck</strong> is a <span className="wiki-link">class 1</span> duck species that can be hunted on <span className="wiki-link">Revontuli Coast</span> and <span className="wiki-link">Salzwiesen Park</span>. It is one of 3 sea duck or diving duck species currently huntable in game. The others are the <span className="wiki-link">Harlequin Duck</span> and the <span className="wiki-link">Goldeneye</span>.
            </p>

            {/* Table of Contents Placeholder */}
            <div className="wiki-toc">
                <div className="font-bold border-b border-[#3a5a75] mb-1">🔢 Contents <span className="wiki-toc-toggle">[hide]</span></div>
                <ol className="m-0 pl-5 text-[#6fb2e6] list-none">
                  {toc.map((item, i) => (
                    <li key={item.id} className={item.children ? 'mb-1.5' : 'mb-1'}>
                      <a onClick={() => handleTOCClick(item.id)} className="cursor-pointer text-[#6fb2e6]">{`${i+1}. ${item.title}`}</a>
                      {item.children && (
                        <ol className="mt-1 pl-4 list-none">
                          {item.children.map((child, j) => (
                            <li key={child.id}>
                              <a onClick={() => handleTOCClick(child.id)} className="cursor-pointer text-[#6fb2e6]">{`${i+1}.${j+1} ${child.title}`}</a>
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
            <div>
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
                          <td className="wiki-td"><img src={zone.icon} alt={zone.type} className="inline-block wiki-zone-icon-lg align-middle mr-1.5" />{zone.type}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Shot scheme removed per request */}

            {/* TIPS */}
            <h2 id="tips" className="wiki-h2">Tips</h2>
            <p>
              Ducks will fly against the wind when making a landing, so be mindful of the wind direction. If you are going to use blinds and decoys, place your decoys approximately 50ms (54yds) away from your blind so the <strong>Tufted Duck</strong> won't fly on top of you and spook.
            </p>

            {/* PLUMAGE VARIANTS (Gallery) */}
            <h2 id="plumage-variants" className="wiki-h2">Plumage Variants</h2>
            
            <h3 id="plumage-male" className="wiki-h3">Male</h3>
            <div className="wiki-gallery-grid">
              {plumageMale.map((img, i) => (
                <div key={i} className="wiki-gallery-item">
                  <div className="w-[146px] h-[165px] p-0">
                    <img src={img.src} alt={img.name} className="w-[146px] h-[165px] object-cover block" />
                  </div>
                  <span className="wiki-gallery-label">{img.name}</span>
                </div>
              ))}
            </div>

            <h3 id="plumage-female" className="wiki-h3">Female</h3>
            <div className="wiki-gallery-grid">
              {plumageFemale.map((img, i) => (
                <div key={i} className="wiki-gallery-item">
                  <div className="w-[146px] h-[165px] p-0">
                    <img src={img.src} alt={img.name} className="w-[146px] h-[165px] object-cover block" />
                  </div>
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
                            Black (99.73%)
                        </td>
                        <td className="wiki-td">X</td>
                        <td className="wiki-td">
                            Eclipse (0.13%)
                        </td>
                        <td className="wiki-td">
                            Albino (0.04%)<br/>
                            Leucistic Variation 1 (0.04%)<br/>
                            Leucistic Variation 2 (0.04%)
                        </td>
                    </tr>
                    {/* Female Row */}
                    <tr>
                      <td className="wiki-td italic text-[#e91e63]">Female</td>
                        <td className="wiki-td">
                            Brown (99.78%)
                        </td>
                        <td className="wiki-td">X</td>
                        <td className="wiki-td">
                            Cream (0.13%)
                        </td>
                        <td className="wiki-td">
                            Leucistic Variation 1 (0.04%)<br/>
                            Leucistic Variation 2 (0.04%)
                        </td>
                    </tr>
                </tbody>
            </table>

            {/* TRIVIA */}
            <h2 id="trivia" className="wiki-h2">Trivia</h2>
            <ul className="pl-5 mb-8">
                <li className="wiki-li">The Tufted Duck is called <em>Tukkasotka</em> in Finnish.</li>
                <li className="wiki-li">The Genus name for this bird <em>Aythya</em> is derived from the Greek word "aithuia". That word is either referencing a specific "unidentified seabird" in Ancient Greek myth, or just a generic "unidentified seabird".</li>
                <li className="wiki-li">One more thing about the word "aithuia": in Ancient Greek Tradition, it was common for people to assign Surnames to Gods as to recognize their many accomplishments. One of these surnames for the goddess Athena was "aithuia". If translated loosely, it would mean something like "of the Diver-bird".</li>
                <li className="wiki-li">The scientific name for the Tufted Duck <em>fuligula</em> means "Soot Throat" in Latin.</li>
            </ul>

            {/* REFERENCES */}
            <h2 id="references" className="wiki-h2">References</h2>
            <ol className="pl-6 text-[#6fb2e6]">
                <li><span className="wiki-link">Tufted Duck Need Zones, Revontuli Coast</span></li>
                <li><span className="wiki-link">theHunter: Call of the Wild Wiki</span></li>
            </ol>

            <AnimalsTableMini />
          </main>
        </div>
      </div>
    </div>
  );
};

export default TuftedDuck;