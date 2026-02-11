import React from 'react';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import class1Icon from '../../../assets/Class1Icon.webp';
import AnimalsTableMini from '../../../components/AnimalsTableMini';

// Eurasian Wigeon assets (front/back variants)
import EurasianWigeon_BrownMaleFront from '../../../assets/EurasianWigeon_BrownMaleFront.webp';
import EurasianWigeon_BrownMaleBack from '../../../assets/EurasianWigeon_BrownMaleBack.webp';
import EurasianWigeon_BrownFemaleFront from '../../../assets/EurasianWigeon_BrownFemaleFront.webp';
import EurasianWigeon_BrownFemaleBack from '../../../assets/EurasianWigeon_BrownFemaleBack.webp';
import EurasianWigeon_EclipseMaleFront from '../../../assets/EurasianWigeon_EclipseMaleFront.webp';
import EurasianWigeon_EclipseMaleBack from '../../../assets/EurasianWigeon_EclipseMaleBack.webp';
import EurasianWigeon_GreyMaleFront from '../../../assets/EurasianWigeon_GreyMaleFront.webp';
import EurasianWigeon_GreyMaleBack from '../../../assets/EurasianWigeon_GreyMaleBack.webp';
import EurasianWigeon_GreyFemaleFront from '../../../assets/EurasianWigeon_GreyFemaleFront.webp';
import EurasianWigeon_GreyFemaleBack from '../../../assets/EurasianWigeon_GreyFemaleBack.webp';
import EurasianWigeon_HybridMaleFront from '../../../assets/EurasianWigeon_HybridMaleFront.webp';
import EurasianWigeon_HybridMaleBack from '../../../assets/EurasianWigeon_HybridMaleBack.webp';
import EurasianWigeon_LeucisticVariation1MaleFront from '../../../assets/EurasianWigeon_LeucisticVariation1MaleFront.webp';
import EurasianWigeon_LeucisticVariation1MaleBack from '../../../assets/EurasianWigeon_LeucisticVariation1MaleBack.webp';
import EurasianWigeon_LeucisticVariation1FemaleFront from '../../../assets/EurasianWigeon_LeucisticVariation1FemaleFront.webp';
import EurasianWigeon_LeucisticVariation1FemaleBack from '../../../assets/EurasianWigeon_LeucisticVariation1FemaleBack.webp';
import EurasianWigeonImg from '../../../assets/EurasianWigeon.webp';


const EurasianWigeon = () => {
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
    { label: "Behavior", value: "Gregarious, skittish" },
    { label: "Habitat", value: "Freshwater ponds and lakes" },
    { label: "Senses", value: "Excellent vision" },
    { label: "Social", value: "Mixed groups most of the year, mated pairs during breeding season" },
    { label: "Active", value: "Intermittently throughout day and night" },
    { label: "Recommended Equipment", value: "Class 1 Ammo, Eurasian Wigeon Decoys and Caller" },
    { label: "Species", value: "Mareca penelope", italic: true },
    { label: "Difficulty", value: "Easy" },
  ];

  // Plumage Variants (Male)
  const plumageMale = [
    { name: "Brown - Front", color: "#5d4037" },
    { name: "Brown - Back", color: "#4e342e" },
    { name: "Eclipse - Front", color: "#8d6e63" },
    { name: "Eclipse - Back", color: "#6d4c41" },
    { name: "Grey - Front", color: "#78909c" },
    { name: "Grey - Back", color: "#546e7a" },
    { name: "Hybrid - Front", color: "#455a64" },
    { name: "Hybrid - Back", color: "#37474f" },
    { name: "Leucistic Variation 1 - Front", color: "#cfd8dc" },
    { name: "Leucistic Variation 1 - Back", color: "#b0bec5" },
    { name: "Leucistic Variation 2 - Front", color: "#cfd8dc" },
    { name: "Leucistic Variation 2 - Back", color: "#b0bec5" },
  ];

  // Plumage Variants (Female)
  const plumageFemale = [
    { name: "Brown - Front", color: "#5d4037" },
    { name: "Brown - Back", color: "#4e342e" },
    { name: "Grey - Front", color: "#78909c" },
    { name: "Grey - Back", color: "#546e7a" },
    { name: "Leucistic Variation 1 - Front", color: "#cfd8dc" },
    { name: "Leucistic Variation 1 - Back", color: "#b0bec5" },
    { name: "Leucistic Variation 2 - Front", color: "#cfd8dc" },
    { name: "Leucistic Variation 2 - Back", color: "#b0bec5" },
  ];

  // Actual image sets for gallery (front/back)
  const malePlumageImages = [
    { name: 'Brown - Front', src: EurasianWigeon_BrownMaleFront },
    { name: 'Brown - Back', src: EurasianWigeon_BrownMaleBack },
    { name: 'Eclipse - Front', src: EurasianWigeon_EclipseMaleFront },
    { name: 'Eclipse - Back', src: EurasianWigeon_EclipseMaleBack },
    { name: 'Grey - Front', src: EurasianWigeon_GreyMaleFront },
    { name: 'Grey - Back', src: EurasianWigeon_GreyMaleBack },
    { name: 'Hybrid - Front', src: EurasianWigeon_HybridMaleFront },
    { name: 'Hybrid - Back', src: EurasianWigeon_HybridMaleBack },
    { name: 'Leucistic Variation 1 - Front', src: EurasianWigeon_LeucisticVariation1MaleFront },
    { name: 'Leucistic Variation 1 - Back', src: EurasianWigeon_LeucisticVariation1MaleBack },
  ];

  const femalePlumageImages = [
    { name: 'Brown - Front', src: EurasianWigeon_BrownFemaleFront },
    { name: 'Brown - Back', src: EurasianWigeon_BrownFemaleBack },
    { name: 'Grey - Front', src: EurasianWigeon_GreyFemaleFront },
    { name: 'Grey - Back', src: EurasianWigeon_GreyFemaleBack },
    { name: 'Leucistic Variation 1 - Front', src: EurasianWigeon_LeucisticVariation1FemaleFront },
    { name: 'Leucistic Variation 1 - Back', src: EurasianWigeon_LeucisticVariation1FemaleBack },
  ];

  return (
    <div className="wiki-page">
      <div className="wiki-inner">
        
        {/* PAGE HEADER */}
        <div className="wiki-header">
          <span>Eurasian Wigeon</span>
          <div className="wiki-edit-actions">

          </div>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Eurasian Wigeon</div>
            <div className="wiki-sidebar-image wiki-sidebar-image--contain">
              <div className="w-full h-[280px]">
                <img src={EurasianWigeonImg} alt="Eurasian Wigeon" className="w-full h-full object-contain rounded" />
              </div>
              <span className="absolute bottom-1 right-1 text-[0.8rem]"></span>
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
                   <span>590</span>
                </div>
                <div className="wiki-trophy-item">
                   <span className="wiki-trophy-label wiki-trophy-gold">☗ Gold</span>
                   <span>770</span>
                </div>
                <div className="wiki-trophy-item">
                   <span className="wiki-trophy-label wiki-trophy-diamond">☗ Diamond</span>
                   <span>905</span>
                </div>
              </div>
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Weight</span>
               500g — 920g<br/>
               1.1lbs — 2lbs
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Plumage</span>
               <span className="text-[0.85rem]">
                 Brown, Dark, Eclipse, Grey, Hybrid, Leucistic
               </span>
            </div>

            <div className="wiki-sidebar-header">Locations</div>
            <div className="wiki-sidebar-section">
               <div className="wiki-mb-4"><span className="wiki-link">Vurhonga Savanna</span></div>
               <div className="wiki-mb-4"><span className="wiki-link">Revontuli Coast</span></div>
               <div className="wiki-mb-4"><span className="wiki-link">Salzwiesen Park</span></div>
               <div className="wiki-mb-4"><span className="wiki-link">Tòrr nan Sithean</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main className="wiki-main">

            {/* Quote Block */}
            <div className="wiki-quote">
              "The Eurasian wigeon is a medium-sized dabbling duck commonly found across northern Eurasia. It is closely related to the American wigeon and the two species can sometimes interbreed when two populations come into contact with one another. The Eurasian wigeon is found mainly in Nordic countries and Russia during the breeding season, but in warmer areas in Europe, Asia, Africa and North America during winter. This duck is easily recognizable based on the rounded shape of its head and a large white patch on the wings of the males, that remains present even in their eclipse plumage."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-mb-20">
              The <strong>Eurasian Wigeon</strong> is a <span className="wiki-link">class 1</span> duck that can be hunted on <span className="wiki-link">Revontuli Coast</span>, <span className="wiki-link">Vurhonga Savanna</span>, <span className="wiki-link">Salzwiesen Park</span>, and <span className="wiki-link">Tòrr nan Sithean</span>.
            </p>

            {/* Table of Contents (page-specific) */}
              {(() => {
              const tocItems = [
                { id: 'features', label: 'Features' },
                { id: 'need-zones', label: 'Need Zone Times' },
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
                const scrollTo = (id) => {
                  const el = document.getElementById(id);
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                };

                return (
                  <div className="bg-[#0b1e3b] border border-[#3a5a75] rounded text-white w-[250px] text-sm mt-5 shadow-md">
                    <div className="px-3 py-2 flex justify-between items-center border-b border-[#3a5a75]">
                      <div className="font-bold flex items-center gap-2">Contents</div>
                    </div>
                    <ol className="m-0 p-2 pl-8 list-none">
                      {items.map((it, i) => (
                        <li key={it.id} className="mb-1 cursor-pointer" onClick={() => scrollTo(it.id)}>
                          <span className="text-white font-bold mr-2">{i + 1}.</span>
                          <span className="text-[#6fb2e6]">{it.label}</span>
                          {it.children && (
                            <ol className="list-none mt-1.5 ml-4 pl-1.5">
                              {it.children.map((c, j) => (
                                <li key={c.id} className="mb-1 cursor-pointer" onClick={() => scrollTo(c.id)}>
                                  <span className="text-white font-bold mr-2">{i + 1}.{j + 1}</span>
                                  <span className="text-[#6fb2e6]">{c.label}</span>
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
                    <td className="wiki-td"><img src={zone.icon} alt={zone.type} className="wiki-zone-icon-lg"/>{zone.type}</td>
                  </tr>
                  ))}
                    </tbody>
                </table>
            </div>

            {/* TIPS */}
            <h2 id="tips" className="wiki-h2">Tips</h2>
            <p>
              Ducks will fly against the wind when making a landing, so be mindful of the wind direction. If you are going to use blinds and decoys, place your decoys approximately 50ms (54yds) away from your blind so the <strong>Eurasian Widgeon</strong> won't fly on top of you and spook.
            </p>

            {/* Shot scheme removed per request */}

            {/* PLUMAGE VARIANTS (Gallery) */}
            <h2 id="plumage-variants" className="wiki-h2">Plumage Variants</h2>
            
            <h3 id="plumage-male" className="wiki-h3">Male</h3>
            <div className="wiki-gallery-grid">
                {malePlumageImages.map((img, i) => (
                <div key={i} className="wiki-gallery-item">
                  <img src={img.src} alt={img.name} className="w-[146px] h-[165px] object-cover border-4 border-[#1f3a52] mb-2" />
                  <span className="wiki-gallery-label">{img.name}</span>
                </div>
              ))}
            </div>

            <h3 id="plumage-female" className="wiki-h3">Female</h3>
            <div className="wiki-gallery-grid">
              {femalePlumageImages.map((img, i) => (
                <div key={i} className="wiki-gallery-item">
                  <img src={img.src} alt={img.name} className="w-[146px] h-[165px] object-cover border-4 border-[#1f3a52] mb-2" />
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
                            Brown (49.80%)<br/>
                            Grey (49.80%)
                        </td>
                        <td className="wiki-td">X</td>
                        <td className="wiki-td">Eclipse (0.27%)</td>
                        <td className="wiki-td">
                            Leucistic Variation 1 (0.04%)<br/>
                            Leucistic Variation 2 (0.04%)<br/>
                            Hybrid (0.04%)
                        </td>
                    </tr>
                    {/* Female Row */}
                    <tr>
                        <td className="wiki-td text-[#e91e63] italic">Female</td>
                        <td className="wiki-td">
                            Brown (49.82%)<br/>
                            Grey (49.82%)
                        </td>
                        <td className="wiki-td">X</td>
                        <td className="wiki-td">Dark (0.27%)</td>
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
                <li className="wiki-li">The word <em>wigeon</em>, like most words in etymology, is of unknown origin. However, it may come from a French word 'vigeon' meaning <em>small crane</em>.[1]</li>
                <li className="wiki-li">The Eurasian Widgeon's scientific name <em>penelope</em> is a reference to a Greek Myth in which the Ithacan Queen Penelope was saved by a duck.[2]</li>
                <li>The Eurasian Widgeon is one of many species retroactively added to certain maps with the "Granite Update". Other species in this list include, the <span className="wiki-link">Ring-Necked Pheasant</span>, <span className="wiki-link">Merriam Turkey</span>, <span className="wiki-link">Gray Wolf</span>, <span className="wiki-link">Western Capercaillie</span>, <span className="wiki-link">Canada Goose</span>, <span className="wiki-link">Collared Peccary</span>, <span className="wiki-link">Mallard</span>, <span className="wiki-link">Pronghorn</span>, and the <span className="wiki-link">Green Winged Teal</span>. The Eurasian Widgeon was added to <span className="wiki-link">Vurhonga Savanna</span> specifically.</li>
            </ul>

            {/* REFERENCES */}
            <h2 id="references" className="wiki-h2">References</h2>
            <ol className="pl-6 text-[#6fb2e6]">
                <li><span className="wiki-link">https://www.etymonline.com/word/widgeon</span></li>
                <li><span className="wiki-link">https://www.allaboutbirds.org/guide/Eurasian_Wigeon/overview</span></li>
            </ol>

            <AnimalsTableMini />
          </main>
        </div>
      </div>
    </div>
  );
};

export default EurasianWigeon;