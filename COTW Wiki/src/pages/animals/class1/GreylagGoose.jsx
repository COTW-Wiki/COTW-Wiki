import React from 'react';
import AnimalsTableMini from '../../../components/AnimalsTableMini';
import GreylagGooseXRay from '../../../assets/Greylag_Goose_shot_scheme.webp';
import GreylagGooseImg from '../../../assets/GreylagGoose.webp';
import GreylagGooseIcon from '../../../assets/GreylagGooseIcon.webp';
import GreylagGoose_BrownFront from '../../../assets/GreylagGoose_BrownFront.webp';
import GreylagGoose_BrownBack from '../../../assets/GreylagGoose_BrownBack.webp';
import GreylagGoose_GreyFront from '../../../assets/GreylagGoose_GreyFront.webp';
import GreylagGoose_GreyBack from '../../../assets/GreylagGoose_GreyBack.webp';
import GreylagGoose_HybridFront from '../../../assets/GreylagGoose_HybridFront.webp';
import GreylagGoose_HybridBack from '../../../assets/GreylagGoose_HybridBack.webp';
import GreylagGoose_LeucisticVariation1Front from '../../../assets/GreylagGoose_LeucisticVariation1Front.webp';
import GreylagGoose_LeucisticVariation1Back from '../../../assets/GreylagGoose_LeucisticVariation1Back.webp';
import GreylagGoose_LeucisticVariation2Front from '../../../assets/GreylagGoose_LeucisticVariation2Front.webp';
import GreylagGoose_LeucisticVariation2Back from '../../../assets/GreylagGoose_LeucisticVariation2Back.webp';
import GreylagGoose_LeucisticVariation3Front from '../../../assets/GreylagGoose_LeucisticVariation3Front.webp';
import GreylagGoose_LeucisticVariation3Back from '../../../assets/GreylagGoose_LeucisticVariation3Back.webp';
import GreylagGoose_LeucisticVariation4Front from '../../../assets/GreylagGoose_LeucisticVariation4Front.webp';
import GreylagGoose_LeucisticVariation4Back from '../../../assets/GreylagGoose_LeucisticVariation4Back.webp';
import GreylagGoose_LeucisticVariation5Front from '../../../assets/GreylagGoose_LeucisticVariation5Front.webp';
import GreylagGoose_LeucisticVariation5Back from '../../../assets/GreylagGoose_LeucisticVariation5Back.webp';
import GreylagGooseDecoySentry from '../../../assets/GreylagGooseDecoySentry.webp';
import GreylagGooseDecoyFeeding from '../../../assets/GreylagGooseDecoyFeeding.webp';
import GreylagGooseDecoySearching from '../../../assets/GreylagGooseDecoySearching.webp';
import BeaconDeluxeGreylagGooseCaller from '../../../assets/BeaconDeluxeGreylagGooseCaller.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import class1Icon from '../../../assets/Class1Icon.webp';

const GreylagGoose = () => {
  // --- DATA SOURCES ---
  
  // Need Zones for two maps as seen in the screenshot
  const needZones = {
    revontuli: [
      { time: "00:00 - 05:30", type: "Resting", icon: "💤" },
      { time: "05:00 - 07:30", type: "Feeding", icon: "🍃" },
      { time: "07:00 - 09:30", type: "Resting", icon: "💤" },
      { time: "09:00 - 11:30", type: "Feeding", icon: "🍃" },
      { time: "11:00 - 13:30", type: "Resting", icon: "💤" },
      { time: "13:00 - 15:30", type: "Feeding", icon: "🍃" },
      { time: "15:00 - 17:30", type: "Resting", icon: "💤" },
      { time: "17:00 - 19:30", type: "Feeding", icon: "🍃" },
      { time: "19:00 - 00:30", type: "Resting", icon: "💤" },
    ],
    sundarpatan: [
      { time: "00:00 - 05:00", type: "Resting", icon: "💤" },
      { time: "05:00 - 07:00", type: "Feeding", icon: "🍃" },
      { time: "07:00 - 09:00", type: "Resting", icon: "💤" },
      { time: "09:00 - 11:00", type: "Feeding", icon: "🍃" },
      { time: "11:00 - 13:00", type: "Resting", icon: "💤" },
      { time: "13:00 - 15:00", type: "Feeding", icon: "🍃" },
      { time: "15:00 - 17:00", type: "Resting", icon: "💤" },
      { time: "17:00 - 19:00", type: "Feeding", icon: "🍃" },
      { time: "19:00 - 00:00", type: "Resting", icon: "💤" },
    ]
  };

  const features = [
    { label: "Behavior", value: "Gregarious, eats a lot to prepare migration" },
    { label: "Habitat", value: "Fields, open grasslands, freshwater bodies" },
    { label: "Senses", value: "Excellent vision, good hearing and smell" },
    { label: "Social", value: "Aggregate in large flocks before migration" },
    { label: "Active", value: "Feeds throughout the day, with intermittent rest" },
    { label: "Recommended Equipment", value: "Class 1 Ammo, Greylag Goose Decoys and Caller" },
    { label: "Species", value: "Anser anser", italic: true },
    { label: "Difficulty", value: "Easy" },
  ];

  const plumageImages = [
    { name: "Brown - Front", color: "#4e342e" },
    { name: "Brown - Back", color: "#3e2723" },
    { name: "Grey - Front", color: "#757575" },
    { name: "Grey - Back", color: "#616161" },
    { name: "Hybrid - Front", color: "#5d4037" },
    { name: "Hybrid - Back", color: "#4e342e" },
    { name: "Leucistic Variation 1 - Front", color: "#bdbdbd" },
    { name: "Leucistic Variation 1 - Back", color: "#9e9e9e" },
    { name: "Leucistic Variation 2 - Front", color: "#bdbdbd" },
    { name: "Leucistic Variation 2 - Back", color: "#9e9e9e" },
    { name: "Leucistic Variation 3 - Front", color: "#bdbdbd" },
    { name: "Leucistic Variation 3 - Back", color: "#9e9e9e" },
    { name: "Leucistic Variation 4 - Front", color: "#bdbdbd" },
    { name: "Leucistic Variation 4 - Back", color: "#9e9e9e" },
    { name: "Leucistic Variation 5 - Front", color: "#bdbdbd" },
    { name: "Leucistic Variation 5 - Back", color: "#9e9e9e" },
  ];

  return (
    <div className="wiki-page">
      <div className="wiki-inner">
        
        {/* PAGE HEADER */}
        <div className="wiki-header">
          <span>Greylag Goose</span>
          <div className="wiki-edit-actions">

          </div>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Greylag Goose</div>
            <div className="wiki-sidebar-image wiki-sidebar-image--contain">
              <div className="w-full h-[280px]">
                <img src={GreylagGooseImg} alt="Greylag Goose" className="w-full h-full object-contain rounded" />
              </div>
            </div>
            
            <div className="wiki-sidebar-header">General Information</div>
            
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Class</span>
              <div className="wiki-flex-center">
                <img src={class1Icon} alt="Class 1" className="inline-block wiki-class-icon-sm align-middle mr-1.5" />
                <span>1</span>
              </div>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Difficulty</span>
              <span>1: Trivial — 5: Medium</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Trophy Type</span>
              <span>Weight</span>
              <div className="wiki-trophy-grid">
                <div className="wiki-trophy-item">
                   <span className="wiki-trophy-label wiki-trophy-silver">◆ Silver</span>
                   <span>2.80</span>
                </div>
                <div className="wiki-trophy-item">
                   <span className="wiki-trophy-label wiki-trophy-gold">☗ Gold</span>
                   <span>3.40</span>
                </div>
                <div className="wiki-trophy-item">
                   <span className="wiki-trophy-label wiki-trophy-diamond">☗ Diamond</span>
                   <span>3.85</span>
                </div>
              </div>
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Weight</span>
               2.5kg — 4kg<br/>
               6lbs — 9lbs
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Plumage</span>
               <span className="text-[0.85rem]">
                 Brown, Grey, Hybrid, Leucistic
               </span>
            </div>

            <div className="wiki-sidebar-header">Locations</div>
            <div className="wiki-sidebar-section">
               <div className="wiki-mb-4"><span className="wiki-link">Revontuli Coast</span></div>
               <div className="wiki-mb-4"><span className="wiki-link">Sundarpatan</span></div>
               <div className="wiki-mb-4"><span className="wiki-link">Salzwiesen Park</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main className="wiki-main">

            {/* Quote Block */}
            <div className="wiki-quote">
              "The Greylag Goose is a large Eurasian goose species. It is very common throughout its natural range, and is the ancestor of most domesticated breeds as a result. Greylag Geese live in mated pairs and familial groups during the breeding season, but in the autumn they gather in large flocks to prepare for their yearly migration. These large flocks spend the best part of the day feeding in preparation for the long flight ahead."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-mb-20">
              The <strong>Greylag Goose</strong> is a <span className="wiki-link">class 1</span> goose that can be hunted on <span className="wiki-link">Revontuli Coast</span>, <span className="wiki-link">Sundarpatan</span> and <span className="wiki-link">Salzwiesen Park</span>.
            </p>

            {/* Table of Contents (page-specific) */}
            {(() => {
              const tocItems = [
                { id: 'features', label: 'Features' },
                { id: 'tips', label: 'Tips' },
                { id: 'need-zones', label: 'Need Zone Times' },
                { id: 'shot-scheme', label: 'Shot scheme' },
                { id: 'plumage-variants', label: 'Plumage Variants' },
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
                    <div className="bg-[#0b1e3b] border border-[#3a5a75] rounded text-white w-[250px] font-sans text-sm mt-5 shadow-[0_4px_6px_rgba(0,0,0,0.3)]">
                      <div className="px-3 py-2 flex justify-between items-center border-b border-[#3a5a75]"><div className="font-bold flex items-center gap-2">Contents</div></div>
                      <ol className="m-0 p-2 pl-8 list-decimal">
                        {items.map((it) => (
                          <li key={it.id} className="mb-1 text-white cursor-pointer" onClick={() => scrollTo(it.id)}>
                            <span className="text-[#6fb2e6]">{it.label}</span>
                            {it.children && (
                              <ol className="list-decimal mt-1 ml-4 pl-1">
                                {it.children.map((c) => (
                                  <li key={c.id} className="mb-1 text-white cursor-pointer" onClick={() => scrollTo(c.id)}>
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

            {/* TIPS */}
            <h2 id="tips" className="wiki-h2">Tips</h2>
            <p className="wiki-mb-10">
              Hunting Geese is similar to hunting other waterfowl. The added benefit being, you can hunt Geese in open fields. Fields give players the freedom to place decoys as far away from a blind as possible, as compared to water which has limits on how far away from shore you can place decoys.
            </p>
            <p>
              Find an open area to place decoys and try and place the decoys approximately 50m (54yds) away from your blind. Be mindful that geese will fly into the wind when they land.
            </p>

            {/* NEED ZONES */}
            <h2 id="need-zones" className="wiki-h2">Need Zone Times</h2>
            <div className="flex flex-nowrap gap-6 items-start overflow-x-auto">
              <div className="w-full md:w-[360px] order-1">
                <table className="wiki-table w-[360px] table-fixed">
                  <thead>
                    <tr><th colSpan="2" className="wiki-th wiki-th-center py-3">Revontuli Coast</th></tr>
                    <tr>
                      <th className="wiki-th wiki-th-alt py-3">Time</th>
                      <th className="wiki-th wiki-th-alt py-3">Activity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {needZones.revontuli.map((zone, i) => (
                      <tr key={i}>
                        <td className="wiki-td py-3">{zone.time}</td>
                        <td className="wiki-td py-3">
                          <img src={zone.type === 'Resting' ? RestingZoneIcon : FeedingZoneIcon} alt={zone.type} className="wiki-zone-icon-lg" />
                          <span className="align-middle">{zone.type}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="w-full md:w-[360px] order-2">
                <table className="wiki-table w-[360px] table-fixed">
                  <thead>
                    <tr><th colSpan="2" className="wiki-th wiki-th-center py-3">Sundarpatan<sup>[1]</sup></th></tr>
                    <tr>
                      <th className="wiki-th wiki-th-alt py-3">Time</th>
                      <th className="wiki-th wiki-th-alt py-3">Activity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {needZones.sundarpatan.map((zone, i) => (
                      <tr key={i}>
                        <td className="wiki-td py-3">{zone.time}</td>
                        <td className="wiki-td py-3">
                          <img src={zone.type === 'Resting' ? RestingZoneIcon : FeedingZoneIcon} alt={zone.type} className="wiki-zone-icon-lg" />
                          <span className="align-middle">{zone.type}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* SHOT SCHEME */}
            <h2 id="shot-scheme" className="wiki-h2">Shot scheme</h2>
            <div className="bg-[#0f2e48] p-2.5 rounded">
                <div className="wiki-shot-title">Color code</div>
                  <div className="wiki-shot-container">
                    <div className="wiki-shot-image">
                      <img src={GreylagGooseXRay} alt="Greylag Goose X-Ray" className="w-[500px] h-[444px] object-cover rounded" />
                    </div>
                    <div className="wiki-shot-info">
                      No Color - Every hit will kill the animal
                    </div>
                  </div>
            </div>

            {/* PLUMAGE VARIANTS (Gallery) */}
            <h2 id="plumage-variants" className="wiki-h2">Plumage Variants</h2>
            <div className="flex flex-wrap gap-2.5">
              {/* Front-view images (146x165) */}
              <div className="w-[146px] text-center">
                <img src={GreylagGoose_BrownFront} alt="Brown - Front" className="w-[146px] h-[165px] object-cover border-4 border-[#1f3a52] mb-2" />
                <span className="text-[0.9em]">Brown - Front</span>
              </div>
              <div className="w-[146px] text-center">
                <img src={GreylagGoose_GreyFront} alt="Grey - Front" className="w-[146px] h-[165px] object-cover border-4 border-[#1f3a52] mb-2" />
                <span className="text-[0.9em]">Grey - Front</span>
              </div>
              <div className="w-[146px] text-center">
                <img src={GreylagGoose_HybridFront} alt="Hybrid - Front" className="w-[146px] h-[165px] object-cover border-4 border-[#1f3a52] mb-2" />
                <span className="text-[0.9em]">Hybrid - Front</span>
              </div>
              <div className="w-[146px] text-center">
                <img src={GreylagGoose_LeucisticVariation1Front} alt="Leucistic 1 - Front" className="w-[146px] h-[165px] object-cover border-4 border-[#1f3a52] mb-2" />
                <span className="text-[0.9em]">Leucistic 1 - Front</span>
              </div>
              <div className="w-[146px] text-center">
                <img src={GreylagGoose_LeucisticVariation2Front} alt="Leucistic 2 - Front" className="w-[146px] h-[165px] object-cover border-4 border-[#1f3a52] mb-2" />
                <span className="text-[0.9em]">Leucistic 2 - Front</span>
              </div>
              <div className="w-[146px] text-center">
                <img src={GreylagGoose_LeucisticVariation3Front} alt="Leucistic 3 - Front" className="w-[146px] h-[165px] object-cover border-4 border-[#1f3a52] mb-2" />
                <span className="text-[0.9em]">Leucistic 3 - Front</span>
              </div>
              <div className="w-[146px] text-center">
                <img src={GreylagGoose_LeucisticVariation4Front} alt="Leucistic 4 - Front" className="w-[146px] h-[165px] object-cover border-4 border-[#1f3a52] mb-2" />
                <span className="text-[0.9em]">Leucistic 4 - Front</span>
              </div>
              <div className="w-[146px] text-center">
                <img src={GreylagGoose_LeucisticVariation5Front} alt="Leucistic 5 - Front" className="w-[146px] h-[165px] object-cover border-4 border-[#1f3a52] mb-2" />
                <span className="text-[0.9em]">Leucistic 5 - Front</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2.5 mt-2">
              {/* Back-view images (146x165) */}
              <div className="w-[146px] text-center">
                <img src={GreylagGoose_BrownBack} alt="Brown - Back" className="w-[146px] h-[165px] object-cover border-4 border-[#1f3a52] mb-2" />
                <span className="text-[0.9em]">Brown - Back</span>
              </div>
              <div className="w-[146px] text-center">
                <img src={GreylagGoose_GreyBack} alt="Grey - Back" className="w-[146px] h-[165px] object-cover border-4 border-[#1f3a52] mb-2" />
                <span className="text-[0.9em]">Grey - Back</span>
              </div>
              <div className="w-[146px] text-center">
                <img src={GreylagGoose_HybridBack} alt="Hybrid - Back" className="w-[146px] h-[165px] object-cover border-4 border-[#1f3a52] mb-2" />
                <span className="text-[0.9em]">Hybrid - Back</span>
              </div>
              <div className="w-[146px] text-center">
                <img src={GreylagGoose_LeucisticVariation1Back} alt="Leucistic 1 - Back" className="w-[146px] h-[165px] object-cover border-4 border-[#1f3a52] mb-2" />
                <span className="text-[0.9em]">Leucistic 1 - Back</span>
              </div>
              <div className="w-[146px] text-center">
                <img src={GreylagGoose_LeucisticVariation2Back} alt="Leucistic 2 - Back" className="w-[146px] h-[165px] object-cover border-4 border-[#1f3a52] mb-2" />
                <span className="text-[0.9em]">Leucistic 2 - Back</span>
              </div>
              <div className="w-[146px] text-center">
                <img src={GreylagGoose_LeucisticVariation3Back} alt="Leucistic 3 - Back" className="w-[146px] h-[165px] object-cover border-4 border-[#1f3a52] mb-2" />
                <span className="text-[0.9em]">Leucistic 3 - Back</span>
              </div>
              <div className="w-[146px] text-center">
                <img src={GreylagGoose_LeucisticVariation4Back} alt="Leucistic 4 - Back" className="w-[146px] h-[165px] object-cover border-4 border-[#1f3a52] mb-2" />
                <span className="text-[0.9em]">Leucistic 4 - Back</span>
              </div>
              <div className="w-[146px] text-center">
                <img src={GreylagGoose_LeucisticVariation5Back} alt="Leucistic 5 - Back" className="w-[146px] h-[165px] object-cover border-4 border-[#1f3a52] mb-2" />
                <span className="text-[0.9em]">Leucistic 5 - Back</span>
              </div>
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
                        <td className="wiki-td wiki-td-rare">Male/Female</td>
                        <td className="wiki-td">
                            Brown (74.94%)<br/>
                            Grey (24.98%)
                        </td>
                        <td className="wiki-td">X</td>
                        <td className="wiki-td">X</td>
                        <td className="wiki-td">
                            Hybrid (0.01%)<br/>
                            Leucistic Variation 1 (0.01%)<br/>
                            Leucistic Variation 2 (0.01%)<br/>
                            Leucistic Variation 3 (0.01%)<br/>
                            Leucistic Variation 4 (0.01%)<br/>
                            Leucistic Variation 5 (0.01%)
                        </td>
                    </tr>
                </tbody>
            </table>

            {/* TRIVIA */}
            <h2 id="trivia" className="wiki-h2">Trivia</h2>
            <ul className="pl-5 mb-8">
                <li className="wiki-li">The origins of the name <em>Greylag</em> is mysterious. Most people believe that the <em>lag</em> part in <em>Greylag</em> comes simply from the fact that Greylag Goose "lag" behind other goose species when it comes to starting their migration.[2]</li>
                <li className="wiki-li">The Greylag goose is the largest member of the genus <em>Anser</em>, making it the largest native goose species in Europe. It is only surpassed by the recently introduced <span className="wiki-link">Canada Goose</span>.[3]</li>
                <li>Geese were often associated with fertility and "good times". Not only were they associated with many fertility goddesses, but even their fat was considered a strong aphrodisiac in ancient times.[4][5]</li>
            </ul>

            {/* REFERENCES */}
            <h2 id="references" className="wiki-h2">References</h2>
            <ol className="pl-6 text-[#6fb2e6]">
                <li><span className="wiki-link">Greylag Goose Need Zones, Sundarpatan</span></li>
                <li><span className="wiki-link">https://www.dictionary.com/browse/greylag</span></li>
                <li><span className="wiki-link">https://en.wikipedia.org/wiki/Greylag_goose</span></li>
                <li><span className="wiki-link">http://galsonestate.pbworks.com/w/page/5401103/Greylag%20Goose</span></li>
                <li><span className="wiki-link">https://amateurnithologist.blogspot.com/2015/11/domestic-greylag-goose.html</span></li>
            </ol>

            <AnimalsTableMini />
          </main>
        </div>
      </div>
    </div>
  );
};

export default GreylagGoose;