import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import DrinkingZoneIcon from '../../../assets/DrinkingZoneIcon.webp';
import class9Icon from '../../../assets/Class9Icon.webp'; // Class 9 for Bengal Tiger
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import BengalTigerMain from '../../../assets/Bengal_Tiger.webp';
import ShotSchemeImg from '../../../assets/Bengal_Tiger_shot_scheme.webp';

// Fur Variant Images
import BengalTiger_Albino from '../../../assets/BengalTiger_Albino.webp';
import BengalTiger_Gold from '../../../assets/BengalTiger_Gold.webp';
import BengalTiger_Orange from '../../../assets/BengalTiger_Orange.webp';
import BengalTiger_Melanistic from '../../../assets/BengalTiger_Melanistic.webp';
import BengalTiger_PseudoMelanistic1 from '../../../assets/BengalTiger_PseudoMelanisticVariation1.webp';
import BengalTiger_PseudoMelanistic2 from '../../../assets/BengalTiger_PseudoMelanisticVariation2.webp';
import BengalTiger_PseudoMelanisticWhite1 from '../../../assets/BengalTiger_PseudoMelanisticWhiteVariation1.webp';
import BengalTiger_PseudoMelanisticWhite2 from '../../../assets/BengalTiger_PseudoMelanisticWhiteVariation2.webp';
import BengalTiger_White from '../../../assets/BengalTiger_White.webp';
import BengalTiger_WhiteStripeless from '../../../assets/BengalTiger_WhiteStripeless.webp';


const BengalTiger = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  const needZonesData = [
    {
      name: "Sundarpatan",
      schedule: [
        { time: "00:00 - 04:00", type: "Resting", icon: RestingZoneIcon },
        { time: "04:00 - 07:00", type: "Drinking", icon: DrinkingZoneIcon },
        { time: "07:00 - 10:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "10:00 - 14:00", type: "Resting", icon: RestingZoneIcon },
        { time: "14:00 - 17:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "17:00 - 20:00", type: "Resting", icon: RestingZoneIcon },
        { time: "20:00 - 00:00", type: "Feeding", icon: FeedingZoneIcon },
      ]
    }
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Ambush predator" },
    { label: "Habitat", value: "Hot and humid forests" },
    { label: "Senses", value: "All-around excellent senses" },
    { label: "Social", value: "Solitary and elusive" },
    { label: "Active", value: "Day and night, with sporadic rests" },
    { label: "Recommended Equipment", value: "Class 9 Ammo, Predator \"Distressed Fawn\" Caller" },
    { label: "Species", value: "Panthera tigris tigris", italic: true, isLink: true },
    { label: "Difficulty", value: "Very hard" },
  ];

  // Fur Gallery Data
  const furGallery = [
    { name: "Albino", src: BengalTiger_Albino },
    { name: "Gold", src: BengalTiger_Gold },
    { name: "Orange", src: BengalTiger_Orange },
    { name: "Melanistic", src: BengalTiger_Melanistic },
    { name: "Pseudo Melanistic Variation 1", src: BengalTiger_PseudoMelanistic1 },
    { name: "Pseudo Melanistic Variation 2", src: BengalTiger_PseudoMelanistic2 },
    { name: "Pseudo Melanistic White Variation 1", src: BengalTiger_PseudoMelanisticWhite1 },
    { name: "Pseudo Melanistic White Variation 2", src: BengalTiger_PseudoMelanisticWhite2 },
    { name: "White", src: BengalTiger_White },
    { name: "White Stripeless", src: BengalTiger_WhiteStripeless },
  ];

  // Trivia Data
  const triviaData = [
    "The Bengal Tiger will be the first Predator to actively stalk and attack the player to drive it away from it's territory. When tracking a Bengal Tiger, if you start hearing short growls, it means the tiger is most likely about to attack.",
    "Throughout Sundarpatan, there are 16 home ranges with one Bengal Tiger living in each. That means, only 16 Bengal Tigers are on the map at the same time.",
    "There are less than 3000 Bengal Tigers left in the wild due to overhunting and habitat loss."
  ];

  // References Data
  const referencesData = [
    "Bengal Tiger Need Zones, Sundarpatan",
    "Developers Diary",
    "Developers Diary",
    "seaworld.org"
  ];

  // Smooth-scroll helper for TOC links
  function scrollToId(e, id) {
    if (e && e.preventDefault) e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      try { history.replaceState(null, '', `#${id}`); } catch (err) {}
    }
  }

  return (
    <div className="wiki-page">
      <div className="wiki-inner">
        
        {/* PAGE HEADER */}
        <div className="wiki-header">
          <span>Bengal Tiger</span>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Bengal Tiger</div>
            <div className="wiki-sidebar-image">
              <img src={BengalTigerMain} alt="Bengal Tiger" className="max-w-full max-h-[220px] object-contain"/>
            </div>
            
            <div className="wiki-sidebar-header">General Information</div>
            
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Class</span>
              <span><img src={class9Icon} alt="Class 9" className="inline-block wiki-class-icon-sm align-middle mr-1.5"/>9</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Difficulty</span>
              <span>1: Trivial — 9: Legendary</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Trophy Type</span>
              <span>Skull</span>
              <div className="wiki-trophy-grid">
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-silver">◆ Silver</span>
                  <span>36</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-gold">☗ Gold</span>
                  <span>48</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-diamond">☗ Diamond</span>
                  <span>57</span>
                </div>
              </div>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Weight</span>
              0kg — 324kg<br/>
              <span className="wiki-sidebar-muted">0lbs — 714lbs</span>
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Fur</span>
               <span className="wiki-fs-sm">
                 Albino, Gold, Orange, Pseudo-Melanistic, Pseudo-Melanistic White, Melanistic, White, White Stripeless
               </span>
            </div>

            <div className="wiki-sidebar-header">Locations</div>
            <div className="wiki-sidebar-section">
               <div className="wiki-mb-4"><span className="wiki-link">Sundarpatan</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main className="wiki-main">

            {/* Quote Block */}
            <div className="wiki-quote">
              "The characteristic tiger, once found across large parts of Asia is now listed as endangered and facing the thread of extinction. Its habitat has been significantly reduced with only small populations remaining.
              <br/><br/>
              Tigers typically weigh between 200.00 kg - 300.00 kg, although there have been recorded cases of individuals weighing as much as 348.00 kg. Outweighing the mighty lion, the tiger can launch attachs from any direction, reaching speeds of up to 50.65 km/h (30-40 mph) in short bursts.
              <br/><br/>
              The tiger hunts various prey such as buffalos, wild pigs and deer. It is crucial for individuals venturing into tiger territory to remain vigilant, as the hunter can easily become the hunted."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-p-mb">
              The <strong>Bengal Tiger</strong> is a <span className="wiki-link">class 9</span> felid that was introduced with <span className="wiki-link">Sundarpatan</span> reserve.
            </p>

            {/* Table of Contents */}
            <div className="wiki-toc">
              <div className="wiki-toc-title">
                🔢 Contents <span className="wiki-toc-toggle">[hide]</span>
              </div>
              <ol className="wiki-toc">
                <li><a href="#features" onClick={(e)=>scrollToId(e,'features')} className="wiki-link">Features</a></li>
                <li><a href="#need-zones" onClick={(e)=>scrollToId(e,'need-zones')} className="wiki-link">Need Zone Times</a></li>
                <li><a href="#shot-scheme" onClick={(e)=>scrollToId(e,'shot-scheme')} className="wiki-link">Shot Scheme</a></li>
                <li><a href="#fur-variants" onClick={(e)=>scrollToId(e,'fur-variants')} className="wiki-link">Fur Variants</a></li>
                <li><a href="#variant-rarity" onClick={(e)=>scrollToId(e,'variant-rarity')} className="wiki-link">Fur Variant Rarity</a></li>
                <li><a href="#trivia" onClick={(e)=>scrollToId(e,'trivia')} className="wiki-link">Trivia</a></li>
                <li><a href="#references" onClick={(e)=>scrollToId(e,'references')} className="wiki-link">References</a></li>
              </ol>
            </div>

            {/* FEATURES */}
            <h2 className="wiki-h2" id="features">Features</h2>
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
            <h2 className="wiki-h2" id="need-zones">Need Zone Times</h2>
            <div className="wiki-inline-block">
                <table className="wiki-table wiki-table-fixed">
                    <thead>
                        <tr><th colSpan="2" className="wiki-th wiki-th-center">Sundarpatan[1]</th></tr>
                        <tr>
                            <th className="wiki-th wiki-th-alt">Times</th>
                            <th className="wiki-th wiki-th-alt">Activity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {needZonesData[0].schedule.map((zone, i) => (
                        <tr key={i}>
                            <td className="wiki-td">{zone.time}</td>
                            <td className="wiki-td">
                                <div className="wiki-flex-center">
                                    <img src={zone.icon} alt={zone.type} className="wiki-class-icon"/> 
                                    {zone.type}
                                </div>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* SHOT SCHEME */}
            <h2 className="wiki-h2" id="shot-scheme">Shot Scheme</h2>
            <div className="wiki-shot-container">
               <div className="wiki-shot-container">
                 <img src={ShotSchemeImg} alt="Shot Scheme" className="wiki-shot-scheme-img-sm" />
               </div>
               <div className="wiki-shot-wrap">
                 <div className="wiki-shot-title">Color code</div>
                 <div className="wiki-shot-info">Red - Kills immediately</div>
                 <div className="wiki-shot-info">Blue - Kills very quick</div>
                 <div className="wiki-shot-info">Orange - Kills slowly</div>
                 <div className="wiki-legend-item wiki-legend-item-last">No Color - Unlikely to kill</div>
               </div>
            </div>

            {/* FUR VARIANTS (Gallery) */}
            <h2 className="wiki-h2" id="fur-variants">Fur Variants</h2>
            <div className="wiki-gallery-grid">
              {furGallery.map((item, i) => (
                <div key={i} className="wiki-gallery-item">
                  <div className="wiki-gallery-placeholder">
                    <img src={item.src} alt={item.name} className="wiki-img-contain" />
                  </div>
                  <span className="wiki-gallery-label">{item.name}</span>
                </div>
              ))}
            </div>

            {/* FUR VARIANT RARITY TABLE */}
            <h2 id="variant-rarity" className="wiki-h2">Fur Variant Rarity</h2>
            <div className="wiki-overflow-auto wiki-mb-20">
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
                        {/* Male/Female Combined Row */}
                        <tr>
                            <td className="wiki-td">
                                <span className="wiki-text-male">Male</span>
                                <span className="wiki-text-divider">/</span>
                                <span className="wiki-text-female">Female</span>
                            </td>
                            <td className="wiki-td">
                                Orange (98.80%)
                            </td>
                            <td className="wiki-td">
                                X
                            </td>
                            <td className="wiki-td">
                                Gold (0.14%)<br/>
                                Pseudo-Melanistic Variation 1 (0.14%)<br/>
                                Pseudo-Melanistic Variation 2 (0.14%)<br/>
                                Pseudo-Melanistic White Variation 1 (0.14%)<br/>
                                Pseudo-Melanistic White Variation 2 (0.14%)<br/>
                                White (0.14%)<br/>
                                White Stripeless (0.14%)<br/>
                                Albino (0.10%)<br/>
                                Melanistic(0.10%)
                            </td>
                            <td className="wiki-td">
                                X
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* TRIVIA */}
            <h2 id="trivia" className="wiki-h2">Trivia</h2>
            <ul className="wiki-ul wiki-ul-disc">
                {triviaData.map((point, idx) => (
                    <li key={idx} className="wiki-mb-10">{point}</li>
                ))}
            </ul>

            {/* REFERENCES */}
            <h2 id="references" className="wiki-h2">References</h2>
            <ol className="wiki-ol-ref">
                {referencesData.map((ref, idx) => (
                     <li key={idx} className="wiki-mb-5">
                        <span className="wiki-text-divider">↑</span> <span className="wiki-link">{ref}</span>
                     </li>
                ))}
            </ol>

            <div className="wiki-mt-40">
                <AnimalsTableMini />
            </div>
            
          </main>
        </div>
      </div>
    </div>
  );
};

export default BengalTiger;