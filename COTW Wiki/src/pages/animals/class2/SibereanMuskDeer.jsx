import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import DrinkingZoneIcon from '../../../assets/DrinkingZoneIcon.webp';
import class2Icon from '../../../assets/Class2Icon.webp';
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import SiberianMuskDeerMain from '../../../assets/Muskder.webp';
import ShotSchemeImage from '../../../assets/Musk_deer_shot_scheme.webp';

// Fur Variant Images (Placeholders)
// Male
import MuskDeer_Male_Albino from '../../../assets/SiberianMuskDeer_AlbinoMale.webp';
import MuskDeer_Male_DarkBrown from '../../../assets/SiberianMuskDeer_DarkBrownMale.webp';
import MuskDeer_Male_GreyBrown from '../../../assets/SiberianMuskDeer_GreyBrownMale.webp';
import MuskDeer_Male_Melanistic from '../../../assets/SiberianMuskDeer_MelanisticMale.webp';
import MuskDeer_Male_Piebald from '../../../assets/SiberianMuskDeer_PiebaldMale.webp';

// Female
import MuskDeer_Female_Albino from '../../../assets/SiberianMuskDeer_AlbinoFemale.webp';
import MuskDeer_Female_GreyBrown from '../../../assets/SiberianMuskDeer_GreyBrownFemale.webp';
import MuskDeer_Female_Melanistic from '../../../assets/SiberianMuskDeer_MelanisticFemale.webp';
import MuskDeer_Female_Orange from '../../../assets/SiberianMuskDeer_OrangeFemale.webp';
import MuskDeer_Female_Piebald from '../../../assets/SiberianMuskDeer_PiebaldFemale.webp';


const SiberianMuskDeer = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  const needZonesData = [
    {
      name: "Medved-Taiga National Park", // Inferred from Locations screenshot
      schedule: [
        { time: "00:00 - 04:30", type: "Resting", icon: RestingZoneIcon },
        { time: "04:00 - 08:30", type: "Resting", icon: RestingZoneIcon },
        { time: "08:00 - 12:30", type: "Drinking", icon: DrinkingZoneIcon },
        { time: "12:00 - 16:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "16:00 - 20:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "20:00 - 00:30", type: "Resting", icon: RestingZoneIcon },
      ]
    }
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Docile and somewhat skittish" },
    { label: "Habitat", value: "Prefer forests and mountainous terrain" },
    { label: "Senses", value: "Excellent hearing and good sense of smell" },
    { label: "Social", value: "Mostly Solitary" },
    { label: "Active", value: "During dusk and dawn" },
    { label: "Recommended Equipment", value: "Class 2 Ammo, Musk Deer Scent" },
    { label: "Species", value: "Moschus moschiferus", italic: true, isLink: true },
    { label: "Difficulty", value: "Easy" },
  ];

  // Fur Gallery Data
  const furGallery = [
    { name: "Albino - Male", src: MuskDeer_Male_Albino },
    { name: "Dark Brown - Male", src: MuskDeer_Male_DarkBrown },
    { name: "Grey Brown - Male", src: MuskDeer_Male_GreyBrown },
    { name: "Melanistic - Male", src: MuskDeer_Male_Melanistic },
    { name: "Piebald - Male", src: MuskDeer_Male_Piebald },
    { name: "Albino - Female", src: MuskDeer_Female_Albino },
    { name: "Grey Brown - Female", src: MuskDeer_Female_GreyBrown },
    { name: "Melanistic - Female", src: MuskDeer_Female_Melanistic },
    { name: "Orange - Female", src: MuskDeer_Female_Orange },
    { name: "Piebald - Female", src: MuskDeer_Female_Piebald },
  ];

  // Split galleries by sex for sub-topics
  const maleGallery = furGallery.filter(item => /Male/i.test(item.name));
  const femaleGallery = furGallery.filter(item => /Female/i.test(item.name));

  // Smooth scroll helper for in-page TOC links
  const scrollToId = (id) => (e) => {
    if (e && e.preventDefault) e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (typeof window !== 'undefined' && window.history && window.history.replaceState) {
      window.history.replaceState(null, '', `#${id}`);
    }
  };

  // Trivia Data
  const triviaData = [
    "The Siberian Musk Deer is named for its distinctive 'musk', which is highly sought after for use in perfumes, and other things.",
    "It's called кабарга (kabarga) in Russian.",
    "Despite its name, the Siberian Musk Deer is not a part of the deer family (Cervidae). In fact, it is the only surviving member of the Moschidae family.",
    "It is currently the only animal in game that requires scent to attract."
  ];

  return (
    <div className="wiki-page">
      <div className="wiki-inner">
        
        {/* PAGE HEADER */}
        <div className="wiki-header">
          <span>Siberian Musk Deer</span>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Siberian Musk Deer</div>
            <div className="wiki-sidebar-image">
              <img src={SiberianMuskDeerMain} alt="Siberian Musk Deer" />
            </div>
            
            <div className="wiki-sidebar-header">General Information</div>
            
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Class</span>
              <span><img src={class2Icon} alt="Class 2" className="wiki-class-icon-lg"/>2</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Difficulty</span>
              <span>1: Trivial — 3: Very Easy</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Trophy Type</span>
              <span>Tusks</span>
              <div className="wiki-trophy-grid">
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-silver">◆ Silver</span>
                  <span>60</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-gold">☗ Gold</span>
                  <span>168</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-diamond">☗ Diamond</span>
                  <span>249</span>
                </div>
              </div>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Weight</span>
              9 kg — 17 kg<br/>
              <span className="wiki-sidebar-muted">20lbs — 37lbs</span>
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Fur</span>
               <span className="wiki-fs-sm">
                  Albino, Dark Brown, Grey Brown, Melanistic, Orange, Piebald
               </span>
            </div>

            <div className="wiki-sidebar-header">Locations</div>
            <div className="wiki-sidebar-section">
               <div className="wiki-mb-4"><span className="wiki-link">Medved-Taiga National Park</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main className="wiki-main">

            {/* Quote Block */}
            <div className="wiki-quote">
              "As the name implies, Siberian Musk Deer can be found in Siberia, but populations also exist in other parts of northeast Asia. It's a very small species with both genders weighing between 7.00 - 17.00 kg (15 - 37 lb). Although bearing fangs, Siberian Musk Deer are actually herbivores with their main source of nutrients, lichens. The fangs are essentially the musk deer answer to antlers as males grow these for display. These peculiar creatures rely primarily on their acute sense of hearing to detect threats and then use their small shape as an advantage to hide from predators. The Siberian Musk Deer is a solitary creature and is primarily active during the night."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-p-mb">
              The <strong>Musk Deer</strong> is a small kind of "deer" (<span className="wiki-link">class 2</span>). It can be hunted in the <span className="wiki-link">Medved-Taiga National Park</span>.
            </p>

            {/* Table of Contents */}
            <div className="wiki-toc">
              <div className="wiki-toc-title">
                🔢 Contents <span className="wiki-toc-toggle">[hide]</span>
              </div>
              <ol className="wiki-toc">
                <li><a href="#features" className="wiki-link" onClick={scrollToId('features')}>Features</a></li>
                <li><a href="#need-zones" className="wiki-link" onClick={scrollToId('need-zones')}>Need Zone Times</a></li>
                <li><a href="#shot-scheme" className="wiki-link" onClick={scrollToId('shot-scheme')}>Shot scheme</a></li>
                <li>
                  <a href="#fur-variants" className="wiki-link" onClick={scrollToId('fur-variants')}>Fur variants</a>
                  <ol style={{margin:'6px 0 0 14px', paddingLeft: '0', color: '#6fb2e6', listStyleType: 'none'}}>
                    <li><a href="#fur-male" className="wiki-link" onClick={scrollToId('fur-male')}>4.1 Male</a></li>
                    <li><a href="#fur-female" className="wiki-link" onClick={scrollToId('fur-female')}>4.2 Female</a></li>
                  </ol>
                </li>
                <li><a href="#variant-rarity" className="wiki-link" onClick={scrollToId('variant-rarity')}>Fur Variant Rarity</a></li>
                <li><a href="#trivia" className="wiki-link" onClick={scrollToId('trivia')}>Trivia</a></li>
              </ol>
            </div>

            {/* FEATURES */}
            <h2 className="wiki-h2">Features</h2>
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
            <h2 className="wiki-h2">Need Zone Times</h2>
            <div className="wiki-inline-block">
                <table className="wiki-table wiki-table-fixed">
                    <thead>
                        <tr><th colSpan="2" className="wiki-th wiki-th-center">Medved-Taiga National Park</th></tr>
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
             <h2 className="wiki-h2">Shot scheme</h2>
            <div className="wiki-shot-container">
                <div className="wiki-shot-container">
                   <img src={ShotSchemeImage} alt="Shot Scheme" className="wiki-shot-scheme-img" />
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
            <h2 id="fur-variants" className="wiki-h2">Fur variants</h2>

            <h3 id="fur-male" style={{...styles.h2, fontSize: '1.15rem', marginTop: '10px'}}>Male</h3>
            <div className="wiki-gallery-grid">
              {maleGallery.map((item, i) => (
                <div key={i} className="wiki-gallery-item">
                  <div className="wiki-gallery-placeholder">
                    <img src={item.src} alt={item.name} className="wiki-img-contain" />
                  </div>
                  <span className="wiki-gallery-label">{item.name}</span>
                </div>
              ))}
            </div>

            <h3 id="fur-female" style={{...styles.h2, fontSize: '1.15rem', marginTop: '18px'}}>Female</h3>
            <div className="wiki-gallery-grid">
              {femaleGallery.map((item, i) => (
                <div key={i} className="wiki-gallery-item">
                  <div className="wiki-gallery-placeholder">
                    <img src={item.src} alt={item.name} className="wiki-img-contain" />
                  </div>
                  <span className="wiki-gallery-label">{item.name}</span>
                </div>
              ))}
            </div>

            {/* FUR VARIANT RARITY TABLE */}
            <h2 className="wiki-h2">Fur Variant Rarity</h2>
            <div className="wiki-overflow-auto">
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
                        {/* Male Row */}
                        <tr>
                            <td className="wiki-td wiki-td-muted">
                                Male
                            </td>
                            <td className="wiki-td">
                                Dark Brown (49.85%)<br/>
                                Gray Brown (49.85%)
                            </td>
                            <td className="wiki-td">X</td>
                            <td className="wiki-td">
                                Piebald (0.20%)
                            </td>
                            <td className="wiki-td">
                                Albino (0.05%)<br/>
                                Melanistic (0.05%)
                            </td>
                        </tr>
                         {/* Female Row */}
                         <tr>
                            <td className="wiki-td wiki-td-female">
                                Female
                            </td>
                            <td className="wiki-td">
                                Gray Brown (49.85%)<br/>
                                Orange (49.85%)
                            </td>
                            <td className="wiki-td">X</td>
                            <td className="wiki-td">
                                Piebald (0.20%)
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
            <h2 className="wiki-h2">Trivia</h2>
            <ul className="wiki-ul wiki-ul-disc">
                {triviaData.map((point, idx) => (
                    <li key={idx} className="wiki-mb-10">{point}</li>
                ))}
            </ul>

            {/* References removed per request */}

            <div className="wiki-mt-40">
                <AnimalsTableMini />
            </div>
            
          </main>
        </div>
      </div>
    </div>
  );
};

export default SiberianMuskDeer;