import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import DrinkingZoneIcon from '../../../assets/DrinkingZoneIcon.webp';
import class5Icon from '../../../assets/Class5Icon.webp'; 
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import PumaMain from '../../../assets/Puma.webp';

// Fur Variant Images
// Note: Puma shares identical visual models with Mountain Lion
import MountainLion_Albino from '../../../assets/MountainLion_Albino.webp';
import MountainLion_DarkRed from '../../../assets/MountainLion_DarkRed.webp';
import MountainLion_Grey from '../../../assets/MountainLion_Grey.webp';
import MountainLion_LightBrown from '../../../assets/MountainLion_LightBrown.webp';
import MountainLion_Melanistic from '../../../assets/MountainLion_Melanistic.webp';


const Puma = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  const needZonesData = [
    {
      name: "Parque Fernando",
      schedule: [
        { time: "00:00 - 03:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "03:00 - 06:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "06:00 - 09:30", type: "Resting", icon: RestingZoneIcon },
        { time: "09:00 - 12:30", type: "Resting", icon: RestingZoneIcon },
        { time: "12:00 - 15:30", type: "Resting", icon: RestingZoneIcon },
        { time: "15:00 - 18:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "18:00 - 21:30", type: "Resting", icon: RestingZoneIcon },
        { time: "21:00 - 00:30", type: "Drinking", icon: DrinkingZoneIcon },
      ]
    }
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Extremely aware and sensitive" },
    { label: "Habitat", value: "All possible regions in the home range" },
    { label: "Senses", value: "Excellent sense of hearing, smell and vision" },
    { label: "Social", value: "Highly solitary, occasional small groups (one mother with up to 6 young cubs)" },
    { label: "Active", value: "Dusk to Dawn" },
    { label: "Recommended Equipment", value: "Class 5 Ammo, Predator \"Distressed Fawn\" Caller" },
    { label: "Species", value: "Puma concolor", italic: true, isLink: true },
    { label: "Difficulty", value: "Hard" },
  ];

  // Fur Gallery Data
  // Same variants for both sexes
  const furGallery = [
    { name: "Albino", src: MountainLion_Albino },
    { name: "Dark Red", src: MountainLion_DarkRed },
    { name: "Grey", src: MountainLion_Grey },
    { name: "Light Brown", src: MountainLion_LightBrown },
    { name: "Melanistic", src: MountainLion_Melanistic },
  ];

  // Trivia Data
  const triviaData = [
    "Puma is an Inca word. [1]",
    "It is the only extant member of the 'Puma' genus.",
    <span>Puma is the 2nd of 7 cat species huntable in game. Others include: <span style={{color: '#6fb2e6', cursor:'pointer'}}>Eurasian Lynx</span>, <span style={{color: '#6fb2e6', cursor:'pointer'}}>Lion</span>, <span style={{color: '#6fb2e6', cursor:'pointer'}}>Mountain Lion</span>, <span style={{color: '#6fb2e6', cursor:'pointer'}}>Bobcat</span>, <span style={{color: '#6fb2e6', cursor:'pointer'}}>Mexican Bobcat</span> and <span style={{color: '#6fb2e6', cursor:'pointer'}}>Bengal Tiger</span>.</span>,
    <span>Other than the <span style={{color: '#6fb2e6', cursor:'pointer'}}>Cinnamon Teal</span>, Puma is the only native species to <span style={{color: '#6fb2e6', cursor:'pointer'}}>Parque Fernando</span>.</span>
  ];

  // References Data
  const referencesData = [
    "https://animals.sandiegozoo.org/animals/mountain-lion-puma-cougar"
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
          <span>Puma</span>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Puma</div>
            <div className="wiki-sidebar-image">
              <img src={PumaMain} alt="Puma" />
            </div>
            
            <div className="wiki-sidebar-header">General Information</div>
            
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Class</span>
              {/* */}
              <span><img src={class5Icon} alt="Class 5" className="wiki-class-icon-lg"/>5</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Difficulty</span>
              {/* */}
              <span>1: Trivial — 9: Legendary</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Trophy Type</span>
              <span>Skull</span>
              <div className="wiki-trophy-grid">
                {/* */}
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-silver">◆ Silver</span>
                  <span>32</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-gold">☗ Gold</span>
                  <span>36</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-diamond">☗ Diamond</span>
                  <span>39</span>
                </div>
              </div>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Weight</span>
              {/* */}
              29kg — 105kg<br/>
              <span className="wiki-sidebar-muted">64lbs — 231lbs</span>
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Fur</span>
               {/* */}
               <span className="wiki-fs-sm">
                 Albino, Dark Red, Grey, Light Brown, Melanistic
               </span>
            </div>

            <div className="wiki-sidebar-header">Locations</div>
            <div className="wiki-sidebar-section">
               {/* */}
               <div className="wiki-mb-4"><span className="wiki-link">Parque Fernando</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main className="wiki-main">

            {/* Quote Block */}
            <div className="wiki-quote">
              "The puma, also known as the cougar, catamount, or mountain lion, among 40 other names in English, is the largest of small cats, belonging to the genus Puma. The puma is an ambush predator that preys on a wide variety of species and survives in an ever wider variety of habitats. The puma's height can climb to nearly 1.00 m and it can often weigh over 100.00 kg, despite averaging more closely to 70.00 kg. Pumas are incapable of roaring but do make several growling and purring sounds, in addition to an iconic shriek. Pumas are able to incapacitate and kill full grown cows, deer, and other medium-sized animals, but are rarely spotted in the wild by adventurers or trekkers due to their secretive and elusive nature."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-p-mb">
              The <strong>Puma</strong> is a <span className="wiki-link">class 5</span> feline. It can be hunted in <span className="wiki-link">Parque Fernando</span>. In-game puma is identical in every aspect to <span className="wiki-link">Mountain Lion</span> in <span className="wiki-link">Silver Ridge Peaks</span>.
            </p>

            {/* Table of Contents */}
            <div className="wiki-toc">
              <div className="wiki-toc-title">
                🔢 Contents <span className="wiki-toc-toggle">[hide]</span>
              </div>
              <ol className="wiki-toc">
                <li><a href="#features" onClick={(e)=>scrollToId(e,'features')} className="wiki-link">Features</a></li>
                <li><a href="#need-zones" onClick={(e)=>scrollToId(e,'need-zones')} className="wiki-link">Need Zone Times</a></li>
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
                        <tr><th colSpan="2" className="wiki-th wiki-th-center">Parque Fernando</th></tr>
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
                        <tr>
                            <td className="wiki-td wiki-td-muted">
                                Male<span className="wiki-text-divider">/</span><span className="wiki-text-female">Female</span>
                            </td>
                            <td className="wiki-td">
                                Light Brown (74.90%)<br/>
                                Grey (12.50%)<br/>
                                Dark Red (12.50%)
                            </td>
                            <td className="wiki-td">
                                X
                            </td>
                            <td className="wiki-td">
                                X
                            </td>
                            <td className="wiki-td">
                                Albino (0.05%)<br/>
                                Melanistic (0.05%)
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

export default Puma;