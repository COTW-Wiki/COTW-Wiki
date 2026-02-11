import React from 'react';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import class1Icon from '../../../assets/Class1Icon.webp';
import GreenWingedTealImg from '../../../assets/GreenWingedTeal.webp';
import GreenWingedTealAlbinoMaleBack from '../../../assets/GreenWingedTeal_AlbinoMaleBack.webp';
import GreenWingedTealAlbinoMaleFront from '../../../assets/GreenWingedTeal_AlbinoMaleFront.webp';
import GreenWingedTealLightGreenFemaleBack from '../../../assets/GreenWingedTeal_LightGreenFemaleBack.webp';
import GreenWingedTealLightGreenFemaleFront from '../../../assets/GreenWingedTeal_LightGreenFemaleFront.webp';
import GreenWingedTealLightGreenMaleBack from '../../../assets/GreenWingedTeal_LightGreenMaleBack.webp';
import GreenWingedTealLightGreenMaleFront from '../../../assets/GreenWingedTeal_LightGreenMaleFront.webp';
import GreenWingedTealPiebald1FemaleBack from '../../../assets/GreenWingedTeal_PiebaldVariation1FemaleBack.webp';
import GreenWingedTealPiebald1FemaleFront from '../../../assets/GreenWingedTeal_PiebaldVariation1FemaleFront.webp';
import GreenWingedTealPiebald1MaleBack from '../../../assets/GreenWingedTeal_PiebaldVariation1MaleBack.webp';
import GreenWingedTealPiebald1MaleFront from '../../../assets/GreenWingedTeal_PiebaldVariation1MaleFront.webp';
import GreenWingedTealPiebald2FemaleBack from '../../../assets/GreenWingedTeal_PiebaldVariation2FemaleBack.webp';
import GreenWingedTealPiebald2FemaleFront from '../../../assets/GreenWingedTeal_PiebaldVariation2FemaleFront.webp';
import GreenWingedTealPiebald2MaleBack from '../../../assets/GreenWingedTeal_PiebaldVariation2MaleBack.webp';
import GreenWingedTealPiebald2MaleFront from '../../../assets/GreenWingedTeal_PiebaldVariation2MaleFront.webp';
import GreenWingedTealPiebald3MaleBack from '../../../assets/GreenWingedTeal_PiebaldVariation3MaleBack.webp';
import GreenWingedTealPiebald3MaleFront from '../../../assets/GreenWingedTeal_PiebaldVariation3MaleFront.webp';
import Green_Winged_Teal_shot_scheme from '../../../assets/Green_Winged_Teal_shot_scheme.webp';
// page-local TOC will be rendered below
import AnimalsTableMini from '../../../components/AnimalsTableMini';


const GreenWingedTeal = () => {
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
    { label: "Behavior", value: "Active, gregarious and vocal" },
    { label: "Habitat", value: "Ponds, lakes, bogs, and estuaries" },
    { label: "Senses", value: "Excellent vision" },
    { label: "Social", value: "Highly gregarious, flocks migrate south in winter" },
    { label: "Active", value: "Feeds intermittently, mostly at night" },
    { label: "Recommended Equipment", value: "Class 1 Ammo, Green-winged Teal Decoys, Eurasian Teal Caller" },
    { label: "Species", value: "Anas carolinensis", italic: true },
    { label: "Difficulty", value: "Easy" },
  ];

  // Plumage Variants (Male)
  const plumageMale = [
    { name: "Albino - Front", color: "#f5f5f5" },
    { name: "Albino - Back", color: "#e0e0e0" },
    { name: "Light Green - Front", color: "#81c784" },
    { name: "Light Green - Back", color: "#66bb6a" },
    { name: "Piebald Variation 1 - Front", color: "#cfd8dc" },
    { name: "Piebald Variation 1 - Back", color: "#b0bec5" },
    { name: "Piebald Variation 2 - Front", color: "#cfd8dc" },
    { name: "Piebald Variation 2 - Back", color: "#b0bec5" },
    { name: "Piebald Variation 3 - Front", color: "#cfd8dc" },
    { name: "Piebald Variation 3 - Back", color: "#b0bec5" },
  ];

  // Plumage Variants (Female)
  const plumageFemale = [
    { name: "Light Green - Front", color: "#8d6e63" }, // Female appears brown/patterned in image despite name
    { name: "Light Green - Back", color: "#6d4c41" },
    { name: "Piebald Variation 1 - Front", color: "#d7ccc8" },
    { name: "Piebald Variation 1 - Back", color: "#bcaaa4" },
    { name: "Piebald Variation 2 - Front", color: "#d7ccc8" },
    { name: "Piebald Variation 2 - Back", color: "#bcaaa4" },
  ];

  // Mapped image sources for gallery (male / female)
  const maleImages = [
    { src: GreenWingedTealAlbinoMaleFront, label: 'Albino - Front' },
    { src: GreenWingedTealAlbinoMaleBack, label: 'Albino - Back' },
    { src: GreenWingedTealLightGreenMaleFront, label: 'Light Green - Front' },
    { src: GreenWingedTealLightGreenMaleBack, label: 'Light Green - Back' },
    { src: GreenWingedTealPiebald1MaleFront, label: 'Piebald Variation 1 - Front' },
    { src: GreenWingedTealPiebald1MaleBack, label: 'Piebald Variation 1 - Back' },
    { src: GreenWingedTealPiebald2MaleFront, label: 'Piebald Variation 2 - Front' },
    { src: GreenWingedTealPiebald2MaleBack, label: 'Piebald Variation 2 - Back' },
    { src: GreenWingedTealPiebald3MaleFront, label: 'Piebald Variation 3 - Front' },
    { src: GreenWingedTealPiebald3MaleBack, label: 'Piebald Variation 3 - Back' },
  ];

  const femaleImages = [
    { src: GreenWingedTealLightGreenFemaleFront, label: 'Light Green - Front' },
    { src: GreenWingedTealLightGreenFemaleBack, label: 'Light Green - Back' },
    { src: GreenWingedTealPiebald1FemaleFront, label: 'Piebald Variation 1 - Front' },
    { src: GreenWingedTealPiebald1FemaleBack, label: 'Piebald Variation 1 - Back' },
    { src: GreenWingedTealPiebald2FemaleFront, label: 'Piebald Variation 2 - Front' },
    { src: GreenWingedTealPiebald2FemaleBack, label: 'Piebald Variation 2 - Back' },
  ];

  return (
    <div className="wiki-page">
      <div className="wiki-inner">
        
        {/* PAGE HEADER */}
        <div className="wiki-header">
          <span>Green Winged Teal</span>
          <div className="wiki-edit-actions">
          </div>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Green Winged Teal</div>
            <div className="h-[180px] bg-[#2a4b63] flex items-center justify-center text-[#8bbce3] italic">
              <img src={GreenWingedTealImg} alt="Green Winged Teal" className="max-w-full max-h-full object-contain rounded-sm" />
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
                   <span>340</span>
                </div>
                <div className="wiki-trophy-item">
                   <span className="wiki-trophy-label wiki-trophy-gold">☗ Gold</span>
                   <span>420</span>
                </div>
                <div className="wiki-trophy-item">
                   <span className="wiki-trophy-label wiki-trophy-diamond">☗ Diamond</span>
                   <span>480</span>
                </div>
              </div>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Weight</span>
              ? — ?<br/>
              <span className="text-[0.85em] italic">(Text mentions ~260g)</span>
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Plumage</span>
               <span className="text-[0.85rem]">
                 Albino, Light Green, Piebald
               </span>
            </div>

            <div className="wiki-sidebar-header">Locations</div>
            <div className="wiki-sidebar-section">
               <div className="wiki-mb-4"><span className="wiki-link">New England Mountains</span></div>
               <div className="wiki-mb-4"><span className="wiki-link">Mississippi Acres Preserve</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main className="wiki-main">

            {/* Quote Block */}
            <div className="wiki-quote">
              "The Green-winged Teal is the smallest dabbling duck residing in Canada and the northern states of America. Spotting the three distinctive features is essential to identifying male. A green eyestripe, bright green speculum on both wings, and lastly, a vertical white shoulder stripe. Female teals sport a light brown color with plumage much like the female mallard. Like the males, the females also exhibit the iconic green speculum.<br/><br/>
              Being a small dabbling duck, they only grow to be 31-39 cm, weighing 260 g and have a wingspan of 52-59 cm. Due to their small stature, they often stick to calmer waters such as inland lakes, marshes, ponds, pools, and shallow streams."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-mb-20">
              The <strong>Green-winged Teal</strong> is a <span className="wiki-link">class 1</span> duck species that can be hunted on <span className="wiki-link">New England Mountains</span> and <span className="wiki-link">Mississippi Acres Preserve</span>.
            </p>

            {/* Table of Contents (click to smooth-scroll) */}
            <div className="wiki-toc">
              <div className="font-bold border-b border-[#3a5a75] mb-1">🔢 Contents <span className="wiki-toc-toggle">[hide]</span></div>
              {/** TOC data and handler */}
              {(() => {
                const toc = [
                  { id: 'features', label: 'Features', subs: [] },
                  { id: 'need-zone-times', label: 'Need Zone Times', subs: [] },
                  { id: 'shot-scheme', label: 'Shot scheme', subs: [] },
                  { id: 'tips', label: 'Tips', subs: [] },
                  { id: 'plumage-variants', label: 'Plumage Variants', subs: [ { id: 'plumage-male', label: 'Male' }, { id: 'plumage-female', label: 'Female' } ] },
                  { id: 'plumage-variant-rarity', label: 'Plumage Variant Rarity', subs: [] },
                  { id: 'trivia', label: 'Trivia', subs: [] },
                ];

                const handleTOCClick = (e, id) => {
                  e.preventDefault();
                  const el = document.getElementById(id);
                  if (el && el.scrollIntoView) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    try { window.history.replaceState(null, '', `#${id}`); } catch (err) {}
                  }
                };

                return (
                  <ol className="m-0 pl-5 text-[#6fb2e6] list-none">
                    {toc.map((t, i) => (
                        <li key={t.id} className="mb-1.5">
                          <a href={`#${t.id}`} onClick={(e) => handleTOCClick(e, t.id)} className="text-[#6fb2e6] no-underline">{`${i+1}. ${t.label}`}</a>
                          {t.subs && t.subs.length > 0 && (
                            <ol className="list-none mt-1 pl-3">
                              {t.subs.map((s, j) => (
                                <li key={s.id}>
                                  <a href={`#${s.id}`} onClick={(e) => handleTOCClick(e, s.id)} className="text-[#6fb2e6] no-underline">{`${i+1}.${j+1} ${s.label}`}</a>
                                </li>
                              ))}
                            </ol>
                          )}
                        </li>
                      ))}
                  </ol>
                );
              })()}
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
            <h2 id="need-zone-times" className="wiki-h2">Need Zone Times</h2>
            <div>
              <table className="wiki-table wiki-table-fixed">
                    <thead>
                        <tr>
                            <th className="wiki-th wiki-th-alt">Times</th>
                            <th className="wiki-th wiki-th-alt">Activity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {needZones.map((zone, i) => (
                        <tr key={i}>
                          <td className="wiki-td">{zone.time}</td>
                          <td className="wiki-td"><img src={zone.icon} alt={zone.type} className="w-[18px] h-[18px] align-middle mr-2"/>{zone.type}</td>
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
                  <img src={Green_Winged_Teal_shot_scheme} alt="Green Winged Teal shot scheme" className="w-[500px] h-[444px] object-contain" />
                    </div>
                    <div className="wiki-shot-info">
                        No Color - Every hit will kill the animal
                    </div>
                </div>
            </div>

            {/* TIPS */}
            <h2 id="tips" className="wiki-h2">Tips</h2>
            <p>
              Ducks will fly against the wind when making a landing, so be mindful of the wind direction. If you are going to use blinds and decoys, place your green-winged teal decoys approximately 50ms (55yds) away from your blind so the <strong>Green-Winged Teal</strong> won't fly on top of you and spook.
            </p>

            {/* PLUMAGE VARIANTS (Gallery) */}
            <h2 id="plumage-variants" className="wiki-h2">Plumage Variants</h2>
            
            <h3 id="plumage-male" className="wiki-h3">Male</h3>
            <div className="wiki-gallery-grid">
              {maleImages.map((item, i) => (
                <div key={i} className="wiki-gallery-item">
                      <div className="relative">
                        <img src={item.src} alt={item.label} className="w-[146px] h-[165px] object-cover border-[4px] border-[#1f3a52]" />
                        
                      </div>
                  <span className="wiki-gallery-label">{item.label}</span>
                </div>
              ))}
            </div>

            <h3 id="plumage-female" className="wiki-h3">Female</h3>
            <div className="wiki-gallery-grid">
              {femaleImages.map((item, i) => (
                <div key={i} className="wiki-gallery-item">
                  <div className="relative">
                    <img src={item.src} alt={item.label} className="w-[146px] h-[165px] object-cover border-[4px] border-[#1f3a52]" />
                    
                  </div>
                  <span className="wiki-gallery-label">{item.label}</span>
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
                    {/* Male Row */}
                    <tr>
                        <td className="wiki-td wiki-td-rare">Male</td>
                        <td className="wiki-td">
                            Light Green (99.12%)
                        </td>
                        <td className="wiki-td">X</td>
                        <td className="wiki-td">
                            Piebald Variation 1 (0.27%)<br/>
                            Piebald Variation 2 (0.27%)<br/>
                            Piebald Variation 3 (0.27%)
                        </td>
                        <td className="wiki-td">
                            Albino (0.09%)
                        </td>
                    </tr>
                    {/* Female Row */}
                    <tr>
                      <td className="wiki-td text-[#e91e63] italic">Female</td>
                        <td className="wiki-td">
                            Light Green (99.73%)
                        </td>
                        <td className="wiki-td">X</td>
                        <td className="wiki-td">
                            Piebald Variation 1 (0.13%)<br/>
                            Piebald Variation 2 (0.13%)
                        </td>
                        <td className="wiki-td">X</td>
                    </tr>
                </tbody>
            </table>

            {/* TRIVIA */}
            <h2 id="trivia" className="wiki-h2">Trivia</h2>
            <ul className="pl-5 mb-8">
                <li className="wiki-li">It's scientific name is <em>anas carolinensis</em>, which translates to "Carolina Duck".</li>
                <li className="wiki-li">A subspecies of the Green Winged Teal, native to the Aleutian Islands of Alaska, are special in that they do not migrate like most other waterfowl.[1]</li>
                <li className="wiki-li">The Green Winged Teal is the smallest dabbling duck in North America, with a wingspan of less than 2 feet on average.[2]</li>
                <li className="wiki-li">It's speed is debatable, being clocked in at a record 60 mph (96 km/h). However it's cruising speed is relatively slow, at around only 30 mph (48 km/h). For comparison, the fastest Duck Species in the world, the Red Breasted Merganser, has been clocked in at around 100 mph (160 km/h) and maintains a constant speed of about 72 mph (115 km/h).[3]</li>
            </ul>

            <AnimalsTableMini />
          </main>
        </div>
      </div>
    </div>
  );
};

export default GreenWingedTeal;