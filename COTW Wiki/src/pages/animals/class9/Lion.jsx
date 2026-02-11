import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import DrinkingZoneIcon from '../../../assets/DrinkingZoneIcon.webp';
import class9Icon from '../../../assets/Class9Icon.webp'; // Class 9 for Lion
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import LionMain from '../../../assets/Lion.webp';

// Fur Variant Images - Male
import Lion_AlbinoMale from '../../../assets/Lion_AlbinoMale.webp';
import Lion_BlondeMale from '../../../assets/Lion_BlondeMale.webp';
import Lion_DarkBrownMale from '../../../assets/Lion_DarkBrownMale.webp';
import Lion_LightBrownMale from '../../../assets/Lion_LightBrownMale.webp';
import Lion_TanMale from '../../../assets/Lion_TanMale.webp';

// Fur Variant Images - Female
import Lion_AlbinoFemale from '../../../assets/Lion_AlbinoFemale.webp';
import Lion_BlondeFemale from '../../../assets/Lion_BlondeFemale.webp';
import Lion_DarkBrownFemale from '../../../assets/Lion_DarkBrownFemale.webp';
import Lion_LightBrownFemale from '../../../assets/Lion_LightBrownFemale.webp';
import Lion_TanFemale from '../../../assets/Lion_TanFemale.webp';


const Lion = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  const needZonesData = [
    {
      name: "Vurhonga Savanna",
      schedule: [
        { time: "00:00 - 04:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "04:00 - 08:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "08:00 - 12:00", type: "Resting", icon: RestingZoneIcon },
        { time: "12:00 - 15:00", type: "Drinking", icon: DrinkingZoneIcon },
        { time: "15:00 - 18:30", type: "Resting", icon: RestingZoneIcon },
        { time: "18:00 - 21:30", type: "Resting", icon: RestingZoneIcon },
        { time: "21:00 - 00:30", type: "Resting", icon: RestingZoneIcon },
      ]
    }
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Territorial, curious and confrontational" },
    { label: "Habitat", value: "Savanna and lightly forested areas" },
    { label: "Senses", value: "Legendary senses that befit an apex predator" },
    { label: "Social", value: "Solitary when outside prides, males can form coalitions" },
    { label: "Active", value: "Dusk to Dawn, briefly in the afternoon" },
    { label: "Recommended Equipment", value: "Class 9 Ammo, Distressed Callers" },
    { label: "Species", value: "Panthera leo", italic: true, isLink: true },
    { label: "Difficulty", value: "Very Hard" },
  ];

  // Fur Gallery Data - Male
  const maleFurGallery = [
    { name: "Albino", src: Lion_AlbinoMale },
    { name: "Blonde", src: Lion_BlondeMale },
    { name: "Dark Brown", src: Lion_DarkBrownMale },
    { name: "Light Brown", src: Lion_LightBrownMale },
    { name: "Tan", src: Lion_TanMale },
  ];

    // Fur Gallery Data - Female
    const femaleFurGallery = [
      { name: "Albino", src: Lion_AlbinoFemale },
      { name: "Blonde", src: Lion_BlondeFemale },
      { name: "Dark Brown", src: Lion_DarkBrownFemale },
      { name: "Light Brown", src: Lion_LightBrownFemale },
      { name: "Tan", src: Lion_TanFemale },
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
          <span>Lion</span>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Lion</div>
            <div className="wiki-sidebar-image">
              <img src={LionMain} alt="Lion" className="max-w-full max-h-[220px] object-contain"/>
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
                  <span>38</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-gold">☗ Gold</span>
                  <span>44</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-diamond">☗ Diamond</span>
                  <span>48.5</span>
                </div>
              </div>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Weight</span>
              135kg — 270kg<br/>
              <span className="wiki-sidebar-muted">298lbs — 595lbs</span>
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Fur</span>
               <span className="wiki-fs-sm">
                 Albino, Blonde, Dark-Brown, Light Brown, Tan
               </span>
            </div>

            <div className="wiki-sidebar-header">Locations</div>
            <div className="wiki-sidebar-section">
               <div className="wiki-mb-4"><span className="wiki-link">Vurhonga Savanna</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main className="wiki-main">

            {/* Quote Block */}
            <div className="wiki-quote">
              "Embodying the symbols of royalty and poise in human culture around the world, the lion is the second-largest of the cats. Lions are muscular and deep-chested, and the density of their muscles severely complicates shot placement and shot penetration. Male lions can weigh upwards of 190.00 kg and stand tall at over a 1.00 m in height and over 2.00 m in length. Despite the common conception that lions are only found in prides, males are often found in coalitions or as individuals, aggressively defending or marking territory. Lionesses spend most of their time rearing cubs and often hunt more than male lions do. They're rarely maneaters, but do attack humans that invade their territory."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-p-mb">
              The <strong>Lion</strong> is a <span className="wiki-link">class 9</span> feline. It can be hunted in the <span className="wiki-link">Vurhonga Savanna Reserve</span>.
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
                    <ol style={{listStyleType: 'none', marginLeft: '-20px'}}>
                      <li><a href="#fur-male" onClick={(e)=>scrollToId(e,'fur-male')} className="wiki-link" style={{marginLeft:'20px'}}>3.1. Male</a></li>
                      <li><a href="#fur-female" onClick={(e)=>scrollToId(e,'fur-female')} className="wiki-link" style={{marginLeft:'20px'}}>3.2. Female</a></li>
                    </ol>
                <li><a href="#variant-rarity" onClick={(e)=>scrollToId(e,'variant-rarity')} className="wiki-link">Fur Variant Rarity</a></li>
                <li><a href="#gallery" onClick={(e)=>scrollToId(e,'gallery')} className="wiki-link">Gallery</a></li>
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
                        <tr><th colSpan="2" className="wiki-th wiki-th-center">Vurhonga Savanna</th></tr>
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
            
            <h3 id="fur-male" style={{marginTop:'10px', marginBottom:'8px', color: '#6fb2e6'}}>Male</h3>
            <div className="wiki-gallery-grid">
              {maleFurGallery.map((item, i) => (
                <div key={i} className="wiki-gallery-item">
                  <div className="wiki-gallery-placeholder">
                    <img src={item.src} alt={item.name} className="wiki-img-contain" />
                  </div>
                  <span className="wiki-gallery-label">{item.name}</span>
                </div>
              ))}
            </div>

            <h3 id="fur-female" style={{marginTop:'10px', marginBottom:'8px', color: '#6fb2e6'}}>Female</h3>
            <div className="wiki-gallery-grid">
              {femaleFurGallery.map((item, i) => (
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
                                Tan (74.70%)
                            </td>
                            <td className="wiki-td">
                                Light Brown (25.00%)
                            </td>
                            <td className="wiki-td">
                                Dark Brown (0.10%)<br/>
                                Blonde (0.10%)<br/>
                                Albino (0.10%)
                            </td>
                            <td className="wiki-td">
                                X
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* GALLERY */}
            <h2 id="gallery" className="wiki-h2">Gallery</h2>
            <div className="wiki-mb-20">
              <div style={{position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden'}}>
                <iframe
                  src="https://www.youtube.com/embed/gEzLaCV7S2s"
                  title="Lion Video"
                  style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="wiki-mt-40">
                <AnimalsTableMini />
            </div>
            
          </main>
        </div>
      </div>
    </div>
  );
};

export default Lion;