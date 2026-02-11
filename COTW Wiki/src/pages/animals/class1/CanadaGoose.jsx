import React from 'react';
import AnimalsTableMini from '../../../components/AnimalsTableMini';
import CanadaGooseXRay from '../../../assets/Canada_Goose_shot_scheme.webp';
import CanadaGoose from '../../../assets/CanadaGoose.webp';
import CanadaGooseIcon from '../../../assets/CanadaGooseIcon.webp';
import CanadaGooseAlbinoBack from '../../../assets/CanadaGoose_AlbinoBack.webp';
import CanadaGooseAlbinoFront from '../../../assets/CanadaGoose_AlbinoFront.webp';
import CanadaGooseBrownHybridBack from '../../../assets/CanadaGoose_BrownHybridBack.webp';
import CanadaGooseBrownHybridFront from '../../../assets/CanadaGoose_BrownHybridFront.webp';
import CanadaGooseGreyBack from '../../../assets/CanadaGoose_GreyBack.webp';
import CanadaGooseGreyBrownBack from '../../../assets/CanadaGoose_GreyBrownBack.webp';
import CanadaGooseGreyBrownFront from '../../../assets/CanadaGoose_GreyBrownFront.webp';
import CanadaGooseGreyFront from '../../../assets/CanadaGoose_GreyFront.webp';
import CanadaGooseLightGreyLeucisticBack from '../../../assets/CanadaGoose_LightGreyLeucisticBack.webp';
import CanadaGooseLightGreyLeucisticFront from '../../../assets/CanadaGoose_LightGreyLeucisticFront.webp';
import CanadaGooseMelanisticBack from '../../../assets/CanadaGoose_MelanisticBack.webp';
import CanadaGooseMelanisticFront from '../../../assets/CanadaGoose_MelanisticFront.webp';
import CanadaGooseWhiteHybridBack from '../../../assets/CanadaGoose_WhiteHybridBack.webp';
import CanadaGooseWhiteHybridFront from '../../../assets/CanadaGoose_WhiteHybridFront.webp';
import CanadaGooseNeedZoneHirschfelden from '../../../assets/Canada_Goose_Need_Zone_Hirschfelden.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp'; 
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import class1Icon from '../../../assets/Class1Icon.webp';

const CanadaGoosePage = () => {

  // --- DATA ---
  
  const needZones = [
    { time: "00:00 - 05:00", type: "Resting", icon: <img src={RestingZoneIcon} alt="Resting" className="wiki-zone-icon-lg" /> },
    { time: "05:00 - 07:00", type: "Feeding", icon: <img src={FeedingZoneIcon} alt="Feeding" className="wiki-zone-icon-lg" /> },
    { time: "07:00 - 09:00", type: "Resting", icon: <img src={RestingZoneIcon} alt="Resting" className="wiki-zone-icon-lg" /> },
    { time: "09:00 - 11:00", type: "Feeding", icon: <img src={FeedingZoneIcon} alt="Feeding" className="wiki-zone-icon-lg" /> },
    { time: "11:00 - 13:00", type: "Resting", icon: <img src={RestingZoneIcon} alt="Resting" className="wiki-zone-icon-lg" /> },
    { time: "13:00 - 15:00", type: "Feeding", icon: <img src={FeedingZoneIcon} alt="Feeding" className="wiki-zone-icon-lg" /> },
    { time: "15:00 - 17:00", type: "Resting", icon: <img src={RestingZoneIcon} alt="Resting" className="wiki-zone-icon-lg" /> },
    { time: "17:00 - 19:00", type: "Feeding", icon: <img src={FeedingZoneIcon} alt="Feeding" className="wiki-zone-icon-lg" /> },
    { time: "19:00 - 00:00", type: "Resting", icon: <img src={RestingZoneIcon} alt="Resting" className="wiki-zone-icon-lg" /> },
  ];

  const features = [
    { label: "Behavior", value: "Easily agitated and generally vocal" },
    { label: "Habitat", value: "Grassy fields, pastures and agricultural fields" },
    { label: "Senses", value: "Very good hearing and vision, poor sense of smell" },
    { label: "Social", value: "Highly social throughout the year. During nesting season they form monogamous lifelong pairings" },
    { label: "Active", value: "From dawn to early evening" },
    { label: "Recommended Equipment", value: "Class 1 Ammo, Short Reed Canada Goose Caller, Canada Goose Decoys" },
    { label: "Species", value: "Branta canadensis", italic: true },
    { label: "Difficulty", value: "Easy" },
  ];

  const rarities = {
    common: ["Grey Brown (74.90%)", "Grey (25.00%)"],
    veryRare: [
      "Albino (0.02%)", 
      "Brown Hybrid (0.02%)", 
      "Light Grey Leucistic (0.02%)", 
      "Melanistic (0.02%)", 
      "White Hybrid (0.02%)"
    ]
  };

  return (
    <div className="wiki-page">
      
      {/* Title */}
      <h1 className="wiki-h1">Canada Goose</h1>

      <div className="wiki-layout">
        
        {/* --- RIGHT SIDEBAR (INFOBOX) --- */}
        <div className="wiki-sidebar">
          <div className="wiki-sidebar-header">Canada Goose</div>
          <div className="wiki-sidebar-image wiki-sidebar-image--contain">
            <div className="w-full h-[280px]">
              <img src={CanadaGoose} alt="Canada Goose" className="w-full h-full object-contain rounded" />
            </div>
          </div>
          
          <div className="wiki-sidebar-header">General Information</div>
          
          <div className="wiki-sidebar-section">
            <span className="wiki-sidebar-label">Class</span>
            <span><img src={class1Icon} alt="Class 1" className="inline-block wiki-class-icon-sm align-middle mr-1.5" />1</span>
          </div>

          <div className="wiki-sidebar-section">
            <span className="wiki-sidebar-label">Difficulty</span>
            <span>1: Trivial — 5: Medium</span>
          </div>

          <div className="wiki-sidebar-section">
            <span className="wiki-sidebar-label">Trophy Type</span>
            <span>Weight</span>
            <div className="wiki-trophy-grid">
                <div className="wiki-trophy-item text-center">
                  <span className="block text-sm font-semibold text-[#bdc3c7]">◆ Silver</span>
                  <span className="block wiki-trophy-val">4.40</span>
                </div>
                <div className="wiki-trophy-item text-center">
                  <span className="block text-sm font-semibold text-[#f1c40f]">☗ Gold</span>
                  <span className="block wiki-trophy-val">6.80</span>
                </div>
                <div className="wiki-trophy-item text-center">
                  <span className="block text-sm font-semibold text-[#3498db]">☗ Diamond</span>
                  <span className="block wiki-trophy-val">8.59</span>
                </div>
            </div>
          </div>

          <div className="wiki-sidebar-section">
             <span className="wiki-sidebar-label">Weight</span>
             3.2kg — 9.2kg<br/>
             7lbs — 20lbs
          </div>

          <div className="wiki-sidebar-section">
             <span className="wiki-sidebar-label">Plumage</span>
             <small>Albino, Brown Hybrid, Grey, Grey Brown, Light Grey Leucistic, Melanistic, White Hybrid</small>
          </div>

          <div className="wiki-sidebar-header">Locations</div>
          <div className="wiki-sidebar-section">
             <div className="wiki-mb-4"><a href="#" className="wiki-link">Hirschfelden Hunting Reserve</a></div>
             <div className="wiki-mb-4"><a href="#" className="wiki-link">Revontuli Coast</a></div>
             <div className="wiki-mb-4"><a href="#" className="wiki-link">Yukon Valley</a></div>
             <div className="wiki-mb-4"><a href="#" className="wiki-link">Askiy Ridge Hunting Preserve</a></div>
          </div>

        </div>


        {/* --- MAIN CONTENT LEFT --- */}
        <div className="wiki-main">

          {/* Description Quote */}
          <blockquote className="wiki-quote">
            "The Canada goose is a large goose species and is one of the most popular geese to hunt in Europe. Their distinct white "chinstrap" helps distinguish the Canada goose from other geese. Adaptable and widespread, they occupy an extensive range of habitats including tundra, prairie lands, and mountainous fields. Canada geese are monogamous with lifelong pairs formed early in their lives. For many regions, loud calls from migrating Canada geese flying in V-shaped formation signal the change into spring and autumn."
            <br/><br/>
            — In-Game Description
          </blockquote>

          <p>
            The <b>Canada Goose</b> is a <a href="#" className="wiki-link">class 1</a> animal that can be hunted on <a href="#" className="wiki-link">Hirschfelden Hunting Reserve</a>, <a href="#" className="wiki-link">Revontuli Coast</a>, <a href="#" className="wiki-link">Yukon Valley</a>, and <a href="#" className="wiki-link">Askiy Ridge Hunting Reserve</a>. It was released as free <a href="#" className="wiki-link">DLC</a>, and was the first bird species to become huntable in game.
          </p>

            {/* Table of Contents (page-specific) */}
            {(() => {
              const tocItems = [
                { id: 'features', label: 'Features' },
                { id: 'tips', label: 'Tips' },
                { id: 'need-zones', label: 'Need Zone Times' },
                { id: 'shot-scheme', label: 'Shot scheme' },
                { id: 'plumage-rarity', label: 'Plumage Variant Rarity' },
                { id: 'plumage-variants', label: 'Plumage Variants'},
                { id: 'trivia', label: 'Trivia' },
                { id: 'references', label: 'References' },
              ];

              const LocalTOC = ({ items }) => {
                const scrollTo = (id) => {
                  const el = document.getElementById(id);
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                };

                return (
                  <div className="bg-[#0b1e3b] border border-[#3a5a75] rounded text-white w-[280px] font-sans text-sm mt-5 shadow-md">
                    <div className="px-3 py-2 border-b border-[#3a5a75] font-bold">Contents</div>
                    <ol className="m-0 p-3 list-none">
                      {items.map((it, idx) => (
                        <li key={it.id} className="mb-2">
                          <div onClick={() => scrollTo(it.id)} className="flex items-center cursor-pointer">
                            <span className="font-bold text-white mr-2">{`${idx + 1}.`}</span>
                            <span className="text-[#6fb2e6]">{it.label}</span>
                          </div>

                          {it.children && (
                            <ol className="list-none mt-2 ml-5 p-0">
                              {it.children.map((c, cidx) => (
                                <li key={c.id} className="mb-1">
                                  <div onClick={() => scrollTo(c.id)} className="flex items-center cursor-pointer">
                                    <span className="font-bold text-white mr-2">{`${idx + 1}.${cidx + 1}`}</span>
                                    <span className="text-[#6fb2e6]">{c.label}</span>
                                  </div>
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

          {/* Features Table */}
          <h2 id="features" className="wiki-h2">Features</h2>
          <table className="wiki-table">
            <thead>
              <tr>
                <th className="wiki-th"></th>
                <th className="wiki-th">Description</th>
              </tr>
            </thead>
            <tbody>
              {features.map((item, index) => (
                <tr key={index}>
                  <td className="wiki-td wiki-td-bold">{item.label}</td>
                  <td className={`wiki-td ${item.italic ? 'wiki-td-italic' : ''}`}>{item.value}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Tips Section */}
          <h2 id="tips" className="wiki-h2">Tips</h2>
          <p>
            In TheHunter: Call of The Wild, hunting <b>Canada Goose</b> is similar to hunting other waterfowl; the added benefit being that one can hunt them in open fields. Both <a href="#" className="wiki-link">Hirschfelden</a> and <a href="#" className="wiki-link">Revontuli Coast</a> are ideal maps for hunting these birds. The <a href="#" className="wiki-link">Hirschfelden</a> reserve is by far the best map to hunt them on because of its large open fields in which most of their need zones appear.
          </p>

          {/* Need Zones Table */}
          <h2 id="need-zones" className="wiki-h2">Need Zone Times</h2>
          <table className="wiki-table w-[400px]">
             <thead>
               <tr><th colSpan="2" className="wiki-th wiki-th-center">Hirschfelden [1]</th></tr>
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
                      {zone.icon} {zone.type}
                   </td>
                 </tr>
               ))}
             </tbody>
          </table>
          <p className="text-[0.8em] mt-1">* Times are subject to change based on need zone discoveries.</p>

          {/* Shot Scheme */}
          <h2 id="shot-scheme" className="wiki-h2">Shot scheme</h2>
            <div className="wiki-table">
            <div className="wiki-th">Color code</div>
            <div className="wiki-shot-container">
              <div className="wiki-shot-image">
                <img src={CanadaGooseXRay} alt="Canada Goose X-Ray" className="w-[500px] h-[444px] object-cover rounded" />
              </div>
              <div className="wiki-shot-info">
                No Color - Every hit will kill the animal
              </div>
            </div>
            </div>

          {/* Plumage Variant Rarity */}
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
                  {rarities.common.map(r => <div key={r}>{r}</div>)}
                </td>
                <td className="wiki-td">X</td>
                <td className="wiki-td">X</td>
                <td className="wiki-td">
                  {rarities.veryRare.map(r => <div key={r}>{r}</div>)}
                </td>
              </tr>
            </tbody>
          </table>

          {/* Plumage Gallery Placeholders */}
           <h2 id="plumage-variants" className="wiki-h2">Plumage Variants</h2>
           <div className="flex flex-wrap gap-2.5">
              <div className="w-[146px] text-center">
                <img src={CanadaGooseGreyBrownFront} alt="Grey Brown" className="w-[146px] h-[165px] object-cover border-4 border-[#1f3a52] mb-2" />
                <span className="text-[0.9em]">Grey Brown</span>
              </div>
              <div className="w-[146px] text-center">
                <img src={CanadaGooseLightGreyLeucisticFront} alt="Light Grey Leucistic" className="w-[146px] h-[165px] object-cover border-4 border-[#1f3a52] mb-2" />
                <span className="text-[0.9em]">Light Grey Leucistic</span>
              </div>
              <div className="w-[146px] text-center">
                <img src={CanadaGooseMelanisticFront} alt="Melanistic" className="w-[146px] h-[165px] object-cover border-4 border-[#1f3a52] mb-2" />
                <span className="text-[0.9em]">Melanistic</span>
              </div>
              <div className="w-[146px] text-center">
                <img src={CanadaGooseAlbinoFront} alt="Albino" className="w-[146px] h-[165px] object-cover border-4 border-[#1f3a52] mb-2" />
                <span className="text-[0.9em]">Albino</span>
              </div>
              <div className="w-[146px] text-center">
                <img src={CanadaGooseBrownHybridFront} alt="Brown Hybrid" className="w-[146px] h-[165px] object-cover border-4 border-[#1f3a52] mb-2" />
                <span className="text-[0.9em]">Brown Hybrid</span>
              </div>
              <div className="w-[146px] text-center">
                <img src={CanadaGooseGreyFront} alt="Grey" className="w-[146px] h-[165px] object-cover border-4 border-[#1f3a52] mb-2" />
                <span className="text-[0.9em]">Grey</span>
              </div>
              <div className="w-[146px] text-center">
                <img src={CanadaGooseWhiteHybridFront} alt="White Hybrid" className="w-[146px] h-[165px] object-cover border-4 border-[#1f3a52] mb-2" />
                <span className="text-[0.9em]">White Hybrid</span>
              </div>
           </div>

           {/* Back-view variants row */}
           <div className="flex flex-wrap gap-2.5 mt-2">
              <div className="w-[146px] text-center">
                <img src={CanadaGooseGreyBrownBack} alt="Grey Brown (Back)" className="w-[146px] h-[165px] object-cover border-4 border-[#1f3a52] mb-2" />
                <span className="text-[0.9em]">Grey Brown (Back)</span>
              </div>
              <div className="w-[146px] text-center">
                <img src={CanadaGooseLightGreyLeucisticBack} alt="Light Grey Leucistic (Back)" className="w-[146px] h-[165px] object-cover border-4 border-[#1f3a52] mb-2" />
                <span className="text-[0.9em]">Light Grey Leucistic (Back)</span>
              </div>
              <div className="w-[146px] text-center">
                <img src={CanadaGooseMelanisticBack} alt="Melanistic (Back)" className="w-[146px] h-[165px] object-cover border-4 border-[#1f3a52] mb-2" />
                <span className="text-[0.9em]">Melanistic (Back)</span>
              </div>
              <div className="w-[146px] text-center">
                <img src={CanadaGooseAlbinoBack} alt="Albino (Back)" className="w-[146px] h-[165px] object-cover border-4 border-[#1f3a52] mb-2" />
                <span className="text-[0.9em]">Albino (Back)</span>
              </div>
              <div className="w-[146px] text-center">
                <img src={CanadaGooseBrownHybridBack} alt="Brown Hybrid (Back)" className="w-[146px] h-[165px] object-cover border-4 border-[#1f3a52] mb-2" />
                <span className="text-[0.9em]">Brown Hybrid (Back)</span>
              </div>
              <div className="w-[146px] text-center">
                <img src={CanadaGooseGreyBack} alt="Grey (Back)" className="w-[146px] h-[165px] object-cover border-4 border-[#1f3a52] mb-2" />
                <span className="text-[0.9em]">Grey (Back)</span>
              </div>
              <div className="w-[146px] text-center">
                <img src={CanadaGooseWhiteHybridBack} alt="White Hybrid (Back)" className="w-[146px] h-[165px] object-cover border-4 border-[#1f3a52] mb-2" />
                <span className="text-[0.9em]">White Hybrid (Back)</span>
              </div>
           </div>

           {/* Trivia */}
           <h2 id="trivia" className="wiki-h2">Trivia</h2>
           <ul>
             <li>The Canada Goose was the first bird species added to the game.</li>
             <li>It was released as a free DLC for all players.</li>
             <li>In the early 1900s, the Canada Goose nearly went extinct due to hunting. Today, the population recovered to more than 5 million individuals.[2]</li>
           </ul>

           {/* References */}
           <h2 id="references" className="wiki-h2">References</h2>
           <ol className="pl-5 text-[#6fb2e6]">
               <li><a href="#" className="wiki-link">Canada Goose Need Zones, Hirschfelden</a></li>
               <li><a href="#" className="wiki-link">audubon.org</a></li>
           </ol>

        </div>
      </div>
      <AnimalsTableMini />
    </div>
  );
};

export default CanadaGoosePage;