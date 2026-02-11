import React from 'react';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import class1Icon from '../../../assets/Class1Icon.webp';
// page-local TOC will be rendered below
import AnimalsTableMini from '../../../components/AnimalsTableMini';

// Goldeneye image assets
import GoldeneyeImg from '../../../assets/Goldeneye.webp';
import Goldeneye_BlackMaleFront from '../../../assets/Goldeneye_BlackMaleFront.webp';
import Goldeneye_BlackMaleBack from '../../../assets/Goldeneye_BlackMaleBack.webp';
import Goldeneye_EclipseMaleFront from '../../../assets/Goldeneye_EclipseMaleFront.webp';
import Goldeneye_EclipseMaleBack from '../../../assets/Goldeneye_EclipseMaleBack.webp';
import Goldeneye_HybridVariation1MaleFront from '../../../assets/Goldeneye_HybridVariation1MaleFront.webp';
import Goldeneye_HybridVariation1MaleBack from '../../../assets/Goldeneye_HybridVariation1MaleBack.webp';
import Goldeneye_HybridVariation2MaleFront from '../../../assets/Goldeneye_HybridVariation2MaleFront.webp';
import Goldeneye_HybridVariation2MaleBack from '../../../assets/Goldeneye_HybridVariation2MaleBack.webp';
import Goldeneye_LeucisticVariation1MaleFront from '../../../assets/Goldeneye_LeucisticVariation1MaleFront.webp';
import Goldeneye_LeucisticVariation1MaleBack from '../../../assets/Goldeneye_LeucisticVariation1MaleBack.webp';
import Goldeneye_LeucisticVariation1FemaleFront from '../../../assets/Goldeneye_LeucisticVariation1FemaleFront.webp';
import Goldeneye_LeucisticVariation1FemaleBack from '../../../assets/Goldeneye_LeucisticVariation1FemaleBack.webp';
import Goldeneye_LeucisticVariation2MaleFront from '../../../assets/Goldeneye_LeucisticVariation2MaleFront.webp';
import Goldeneye_LeucisticVariation2MaleBack from '../../../assets/Goldeneye_LeucisticVariation2MaleBack.webp';
import Goldeneye_LeucisticVariation2FemaleFront from '../../../assets/Goldeneye_LeucisticVariation2FemaleFront.webp';
import Goldeneye_LeucisticVariation2FemaleBack from '../../../assets/Goldeneye_LeucisticVariation2FemaleBack.webp';
import Goldeneye_GreyFemaleFront from '../../../assets/Goldeneye_GreyFemaleFront.webp';
import Goldeneye_GreyFemaleBack from '../../../assets/Goldeneye_GreyFemaleBack.webp';
import Goldeneye_DarkFemaleFront from '../../../assets/Goldeneye_DarkFemaleFront.webp';
import Goldeneye_DarkFemaleBack from '../../../assets/Goldeneye_DarkFemaleBack.webp';
import Goldeneye_shot_scheme from '../../../assets/Goldeneye_shot_scheme.webp';

const Goldeneye = () => {
  // --- DATA SOURCES ---

  // Need Zone Times
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

  // Features Table
  const features = [
    { label: "Behavior", value: "Vocal and gregarious" },
    { label: "Habitat", value: "Protected coastlines and estuaries" },
    { label: "Senses", value: "Excellent vision" },
    { label: "Social", value: "Mixed groups and mated pairs" },
    { label: "Active", value: "Intermittently throughout day and night" },
    { label: "Recommended Equipment", value: "Class 1 Ammo, Goldeneye Decoys" },
    { label: "Species", value: "Bucephala clangula", italic: true },
    { label: "Difficulty", value: "Easy" },
  ];

  // Plumage Variants (Male)
  const plumageMale = [
    { name: "Black - Front", color: "#212121" },
    { name: "Black - Back", color: "#000000" },
    { name: "Eclipse - Front", color: "#616161" },
    { name: "Eclipse - Back", color: "#424242" },
    { name: "Hybrid Variation 1 - Front", color: "#455a64" },
    { name: "Hybrid Variation 1 - Back", color: "#37474f" },
    { name: "Hybrid Variation 2 - Front", color: "#546e7a" },
    { name: "Hybrid Variation 2 - Back", color: "#455a64" },
    { name: "Leucistic Variation 1 - Front", color: "#cfd8dc" },
    { name: "Leucistic Variation 1 - Back", color: "#b0bec5" },
    { name: "Leucistic Variation 2 - Front", color: "#cfd8dc" },
    { name: "Leucistic Variation 2 - Back", color: "#b0bec5" },
  ];

  // Plumage Variants (Female)
  const plumageFemale = [
    { name: "Dark - Front", color: "#3e2723" },
    { name: "Dark - Back", color: "#212121" },
    { name: "Grey - Front", color: "#78909c" },
    { name: "Grey - Back", color: "#546e7a" },
    { name: "Leucistic Variation 1 - Front", color: "#cfd8dc" },
    { name: "Leucistic Variation 1 - Back", color: "#b0bec5" },
    { name: "Leucistic Variation 2 - Front", color: "#cfd8dc" },
    { name: "Leucistic Variation 2 - Back", color: "#b0bec5" },
  ];

  // Actual image sets for gallery (front/back)
  const malePlumageImages = [
    { name: 'Black - Front', src: Goldeneye_BlackMaleFront },
    { name: 'Black - Back', src: Goldeneye_BlackMaleBack },
    { name: 'Eclipse - Front', src: Goldeneye_EclipseMaleFront },
    { name: 'Eclipse - Back', src: Goldeneye_EclipseMaleBack },
    { name: 'Hybrid Variation 1 - Front', src: Goldeneye_HybridVariation1MaleFront },
    { name: 'Hybrid Variation 1 - Back', src: Goldeneye_HybridVariation1MaleBack },
    { name: 'Hybrid Variation 2 - Front', src: Goldeneye_HybridVariation2MaleFront },
    { name: 'Hybrid Variation 2 - Back', src: Goldeneye_HybridVariation2MaleBack },
    { name: 'Leucistic Variation 1 - Front', src: Goldeneye_LeucisticVariation1MaleFront },
    { name: 'Leucistic Variation 1 - Back', src: Goldeneye_LeucisticVariation1MaleBack },
    { name: 'Leucistic Variation 2 - Front', src: Goldeneye_LeucisticVariation2MaleFront },
    { name: 'Leucistic Variation 2 - Back', src: Goldeneye_LeucisticVariation2MaleBack },
  ];

  const femalePlumageImages = [
    { name: 'Dark - Front', src: Goldeneye_DarkFemaleFront },
    { name: 'Dark - Back', src: Goldeneye_DarkFemaleBack },
    { name: 'Grey - Front', src: Goldeneye_GreyFemaleFront },
    { name: 'Grey - Back', src: Goldeneye_GreyFemaleBack },
    { name: 'Leucistic Variation 1 - Front', src: Goldeneye_LeucisticVariation1FemaleFront },
    { name: 'Leucistic Variation 1 - Back', src: Goldeneye_LeucisticVariation1FemaleBack },
    { name: 'Leucistic Variation 2 - Front', src: Goldeneye_LeucisticVariation2FemaleFront },
    { name: 'Leucistic Variation 2 - Back', src: Goldeneye_LeucisticVariation2FemaleBack },
  ];

  return (
    <div className="wiki-page">
      <div className="wiki-inner">
        
        {/* PAGE HEADER */}
        <div className="wiki-header">
          <span>Goldeneye</span>
          <div className="wiki-edit-actions">
          </div>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Goldeneye</div>
            <div className="h-[180px] bg-[#2a4b63] flex items-center justify-center text-[#8bbce3] italic">
              <img src={GoldeneyeImg} alt="Goldeneye flying" className="w-full h-full object-cover rounded" />
            </div>
            
            <div className="wiki-sidebar-header">General Information</div>
            
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Class</span>
              <span><img src={class1Icon} alt="Class 1" className="inline-block wiki-class-icon-sm align-middle mr-1.5" />1</span>
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
                   <span>740</span>
                </div>
                <div className="wiki-trophy-item">
                   <span className="wiki-trophy-label wiki-trophy-gold">☗ Gold</span>
                   <span>1020</span>
                </div>
                <div className="wiki-trophy-item">
                   <span className="wiki-trophy-label wiki-trophy-diamond">☗ Diamond</span>
                   <span>1230</span>
                </div>
              </div>
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Weight</span>
               600g — 1300g<br/>
               1.3lbs — 2.9lbs
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Plumage</span>
               <span className="text-[0.85rem]">
                 Black, Grey, Dark, Eclipse, Hybrid, Leucistic
               </span>
            </div>

            <div className="wiki-sidebar-header">Locations</div>
            <div className="wiki-sidebar-section">
               <div className="wiki-mb-4"><span className="wiki-link">Revontuli Coast</span></div>
               <div className="wiki-mb-4"><span className="wiki-link">New England Mountains</span></div>
               <div className="wiki-mb-4"><span className="wiki-link">Salzwiesen Park</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main className="wiki-main">

            {/* Quote Block */}
            <div className="wiki-quote">
              "The Common Goldeneye is a species of sea duck that can be found throughout the northern regions of Eurasia and North America. They feed by diving underwater, searching for crustaceans, insects and mollusks. The striking color of their eyes, for which they are named, their round heads and their distinctive plumage make the Goldeneye an easy duck to recognize and a popular game bird."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-mb-20">
              The <strong>Goldeneye</strong> is a species of <span className="wiki-link">class 1</span> duck that can be hunted on <span className="wiki-link">Revontuli Coast</span>, <span className="wiki-link">New England Mountains</span>, and <span className="wiki-link">Salzwiesen Park</span>.
            </p>

            {/* Table of Contents (page-specific) */}
            {(() => {
              const tocItems = [
                { id: 'features', label: 'Features' },
                { id: 'need-zones', label: 'Need Zone Times' },
                { id: 'shot-scheme', label: 'Shot scheme' },
                { id: 'tips', label: 'Tips' },
                { id: 'plumage-variants', label: 'Plumage Variants', children: [
                  { id: 'plumage-male', label: 'Male' },
                  { id: 'plumage-female', label: 'Female' }
                ] },
                { id: 'plumage-rarity', label: 'Plumage Variant Rarity' },
                { id: 'trivia', label: 'Trivia' },
                { id: 'references', label: 'References' },
              ];

              const LocalTOC = ({ items }) => {
                const stylesTOC = {
                  container: { backgroundColor: '#0b1e3b', border: '1px solid #3a5a75', borderRadius: '4px', color: '#fff', width: '250px', fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif', fontSize: '14px', marginTop: '20px', boxShadow: '0 4px 6px rgba(0,0,0,0.3)' },
                  header: { padding: '8px 12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #3a5a75' },
                  title: { fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px' },
                  list: { margin: 0, padding: '10px 15px 10px 35px', listStyleType: 'none' },
                  listItem: { marginBottom: '6px', color: '#fff', cursor: 'pointer' },
                  linkText: { color: '#6fb2e6' }
                };

                const scrollTo = (id) => {
                  const el = document.getElementById(id);
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                };

                return (
                  <div style={stylesTOC.container}>
                    <div style={stylesTOC.header}><div style={stylesTOC.title}>Contents</div></div>
                    <ol style={stylesTOC.list}>
                      {items.map((it, i) => (
                        <li key={it.id} style={stylesTOC.listItem} onClick={() => scrollTo(it.id)}>
                          <span style={{color: '#fff', fontWeight: '700', marginRight: '8px'}}>{i + 1}.</span>
                          <span style={stylesTOC.linkText}>{it.label}</span>
                          {it.children && (
                            <ol style={{ listStyleType: 'none', marginTop: '6px', marginLeft: '16px', paddingLeft: '6px' }}>
                              {it.children.map((c, j) => (
                                <li key={c.id} style={stylesTOC.listItem} onClick={() => scrollTo(c.id)}>
                                  <span style={{color: '#fff', fontWeight: '700', marginRight: '8px'}}>{i + 1}.{j + 1}</span>
                                  <span style={stylesTOC.linkText}>{c.label}</span>
                                </li>
                              ))}
                            </ol>
                          )}
                        </li>
                      ))}
                    </ol>
                  </div>
                );
              };

              return <LocalTOC items={tocItems} />;
            })()}

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
            <div className="inline-block">
                <table className="wiki-table wiki-table-fixed">
                    <thead>
                        <tr><th colSpan="2" className="wiki-th wiki-th-center">Revontuli Coast</th></tr>
                        <tr>
                            <th className="wiki-th wiki-th-alt">Time</th>
                            <th className="wiki-th wiki-th-alt">Activity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {needZones.map((zone, i) => (
                        <tr key={i}>
                            <td className="wiki-td">{zone.time}</td>
                            <td className="wiki-td">
                              <img src={zone.icon} alt={zone.type} className="w-[30px] h-[30px] align-middle mr-2" />
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
                  <img src={Goldeneye_shot_scheme} alt="Goldeneye shot scheme" className="w-full h-full object-cover rounded" />
                </div>
                <div className="wiki-shot-info">
                  No Color - Every hit will kill the animal
                </div>
              </div>
            </div>

            {/* TIPS */}
            <h2 id="tips" className="wiki-h2">Tips</h2>
            <p>
              Ducks will fly against the wind when making a landing, so be mindful of the wind direction. If you are going to use blinds and decoys, place your decoys approximately 50ms (54yds) away from your blind so the <strong>Goldeneye</strong> won't fly on top of you and spook.
            </p>

            {/* PLUMAGE VARIANTS (Gallery) */}
            <h2 id="plumage-variants" className="wiki-h2">Plumage Variants</h2>

            <h3 id="plumage-male" className="wiki-h3">Male</h3>
            <div className="wiki-gallery-grid">
              {malePlumageImages.map((img, i) => (
                <div key={i} className="wiki-gallery-item">
                  <img src={img.src} alt={img.name} className="w-[146px] h-[165px] object-cover rounded mb-2" />
                  <span className="wiki-gallery-label">{img.name}</span>
                </div>
              ))}
            </div>

            <h3 id="plumage-female" className="wiki-h3">Female</h3>
            <div className="wiki-gallery-grid">
              {femalePlumageImages.map((img, i) => (
                <div key={i} className="wiki-gallery-item">
                  <img src={img.src} alt={img.name} className="w-[146px] h-[165px] object-cover rounded mb-2" />
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
                            Black (99.53%)
                        </td>
                        <td className="wiki-td">X</td>
                        <td className="wiki-td">Eclipse (0.27%)</td>
                        <td className="wiki-td">
                            Leucistic Variation 1 (0.07%)<br/>
                            Leucistic Variation 2 (0.07%)<br/>
                            Hybrid Variation 1 (0.03%)<br/>
                            Hybrid Variation 2 (0.03%)
                        </td>
                    </tr>
                    {/* Female Row */}
                    <tr>
                      <td className="wiki-td italic text-[#e91e63]">Female</td>
                        <td className="wiki-td">
                            Grey (99.60%)
                        </td>
                        <td className="wiki-td">X</td>
                        <td className="wiki-td">Dark (0.27%)</td>
                        <td className="wiki-td">
                            Leucistic Variation 1 (0.07%)<br/>
                            Leucistic Variation 2 (0.07%)
                        </td>
                    </tr>
                </tbody>
            </table>

            {/* TRIVIA */}
            <h2 id="trivia" className="wiki-h2">Trivia</h2>
            <ul className="pl-5 mb-8">
                <li className="wiki-li">In Finnish, the Goldeneye is called <em>Telkkä</em>.</li>
                <li className="wiki-li">The Goldeneye beats its wings at such a high rate, 9 wingbeats per second, that they make a "whistling" sound when in flight. This has earned it the nickname, <em>the whistler</em>. As Earnest Hemingway put it, "..<em>their wings sibilant, make the sound of ripping silk</em>."[1][2]</li>
                <li className="wiki-li">These ducks are very agile; only needing about 3 to 6 feet of runway to take off from the water.</li>
                <li className="wiki-li">The Goldeneye is a very territorial and aggressive bird. Both males and females fight over food, breeding, and even brooding rights. Even hatchlings have to deal with their parents' territorial nature. It is not uncommon for hatchlings to get separated from their mother in the middle of a territorial dispute, only to join another female's brood called a 'Creche'. It is not uncommon for a mother Goldeneye to abandon their brood entirely.[3][4]</li>
                <li>The Genus name for this bird <em>Bucephala</em>, loosely translates to <em>bullheaded</em> in Greek.[5]</li>
            </ul>

            {/* REFERENCES */}
            <h2 id="references" className="wiki-h2">References</h2>
            <ol className="pl-6 text-[#6fb2e6]">
                <li><span className="wiki-link">https://www.rosamondgiffordzoo.org/experience/animals/birds/american-common-goldeneye/</span></li>
                <li><span className="wiki-link">https://www.birdnote.org/podcasts/birdnote-daily/goldeneyes-and-whistling-wings</span></li>
                <li><span className="wiki-link">https://www.allaboutbirds.org/guide/Common_Goldeneye/overview</span></li>
                <li><span className="wiki-link">https://www.allaboutbirds.org/guide/Common_Goldeneye/lifehistory</span></li>
                <li><span className="wiki-link">https://www.merriam-webster.com/dictionary/Bucephala</span></li>
            </ol>

            <AnimalsTableMini />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Goldeneye;