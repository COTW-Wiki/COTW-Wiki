import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import DrinkingZoneIcon from '../../../assets/DrinkingZoneIcon.webp';
import class5Icon from '../../../assets/Class5Icon.webp'; 
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import RockyMountainBighornMain from '../../../assets/Rocky_Mountain_Bighorn_Sheep.webp';
import ShotSchemeImg from '../../../assets/Rocky_Mountain_Bighorn_Sheep_shot_scheme.webp';

// Fur Variant Images
// Male
import RockyMountainBighornSheep_AlbinoMaleRightSide from '../../../assets/RockyMountainBighornSheep_AlbinoMaleRightSide.webp';
import RockyMountainBighornSheep_BlackMaleRightSide from '../../../assets/RockyMountainBighornSheep_BlackMaleRightSide.webp';
import RockyMountainBighornSheep_BronzeMaleRightSide from '../../../assets/RockyMountainBighornSheep_BronzeMaleRightSide.webp';
import RockyMountainBighornSheep_BrownMaleRightSide from '../../../assets/RockyMountainBighornSheep_BrownMaleRightSide.webp';
import RockyMountainBighornSheep_GreyMaleRightSide from '../../../assets/RockyMountainBighornSheep_GreyMaleRightSide.webp';
import RockyMountainBighornSheep_LeucisticMaleRightSide from '../../../assets/RockyMountainBighornSheep_LeucisticMaleRightSide.webp';
import RockyMountainBighornSheep_MelanisticMaleRightSide from '../../../assets/RockyMountainBighornSheep_MelanisticMaleRightSide.webp';
import RockyMountainBighornSheep_PiebaldVariation1MaleRightSide from '../../../assets/RockyMountainBighornSheep_PiebaldVariation1MaleRightSide.webp';
import RockyMountainBighornSheep_PiebaldVariation1MaleLeftSide from '../../../assets/RockyMountainBighornSheep_PiebaldVariation1MaleLeftSide.webp';
import RockyMountainBighornSheep_PiebaldVariation2MaleRightSide from '../../../assets/RockyMountainBighornSheep_PiebaldVariation2MaleRightSide.webp';
import RockyMountainBighornSheep_PiebaldVariation2MaleLeftSide from '../../../assets/RockyMountainBighornSheep_PiebaldVariation2MaleLeftSide.webp';

// Female
import RockyMountainBighornSheep_AlbinoFemaleRightSide from '../../../assets/RockyMountainBighornSheep_AlbinoFemaleRightSide.webp';
import RockyMountainBighornSheep_BlackFemaleRightSide from '../../../assets/RockyMountainBighornSheep_BlackFemaleRightSide.webp';
import RockyMountainBighornSheep_BronzeFemaleRightSide from '../../../assets/RockyMountainBighornSheep_BronzeFemaleRightSide.webp';
import RockyMountainBighornSheep_BrownFemaleRightSide from '../../../assets/RockyMountainBighornSheep_BrownFemaleRightSide.webp';
import RockyMountainBighornSheep_GreyFemaleRightSide from '../../../assets/RockyMountainBighornSheep_GreyFemaleRightSide.webp';
import RockyMountainBighornSheep_LeucisticFemaleRightSide from '../../../assets/RockyMountainBighornSheep_LeucisticFemaleRightSide.webp';
import RockyMountainBighornSheep_MelanisticFemaleRightSide from '../../../assets/RockyMountainBighornSheep_MelanisticFemaleRightSide.webp';
import RockyMountainBighornSheep_PiebaldVariation1FemaleRightSide from '../../../assets/RockyMountainBighornSheep_PiebaldVariation1FemaleRightSide.webp';
import RockyMountainBighornSheep_PiebaldVariation1FemaleLeftSide from '../../../assets/RockyMountainBighornSheep_PiebaldVariation1FemaleLeftSide.webp';
import RockyMountainBighornSheep_PiebaldVariation2FemaleRightSide from '../../../assets/RockyMountainBighornSheep_PiebaldVariation2FemaleRightSide.webp';
import RockyMountainBighornSheep_PiebaldVariation2FemaleLeftSide from '../../../assets/RockyMountainBighornSheep_PiebaldVariation2FemaleLeftSide.webp';


const RockyMountainBighornSheep = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  const needZonesData = [
    {
      name: "Askiy Ridge",
      schedule: [
        { time: "00:00 - 03:00", type: "Resting", icon: RestingZoneIcon },
        { time: "03:00 - 06:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "06:00 - 09:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "09:00 - 12:00", type: "Resting", icon: RestingZoneIcon },
        { time: "12:00 - 16:00", type: "Drinking", icon: DrinkingZoneIcon },
        { time: "16:00 - 20:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "20:00 - 00:00", type: "Resting", icon: RestingZoneIcon },
      ]
    }
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Alert and aware" },
    { label: "Habitat", value: "Alpine meadows, grassy mountain slopes, and foothill country, near rocky cliffs" },
    { label: "Senses", value: "Excellent senses of vision and hearing, decent sense of smell" },
    { label: "Social", value: "Rams live solitary or in small groups, ewes live in medium to large-sized groups" },
    { label: "Active", value: "Morning to evening" },
    { label: "Recommended Equipment", value: "Class 5 Ammo" },
    { label: "Species", value: "Ovis canadensis cabadebsus", italic: true, isLink: true },
    { label: "Difficulty", value: "Average" },
  ];

  // Fur Gallery Data (split by sex)
  const maleGallery = [
    { name: "Albino", src: RockyMountainBighornSheep_AlbinoMaleRightSide },
    { name: "Black", src: RockyMountainBighornSheep_BlackMaleRightSide },
    { name: "Bronze", src: RockyMountainBighornSheep_BronzeMaleRightSide },
    { name: "Brown", src: RockyMountainBighornSheep_BrownMaleRightSide },
    { name: "Grey", src: RockyMountainBighornSheep_GreyMaleRightSide },
    { name: "Leucistic", src: RockyMountainBighornSheep_LeucisticMaleRightSide },
    { name: "Melanistic", src: RockyMountainBighornSheep_MelanisticMaleRightSide },
    { name: "Piebald Variation 1 (Right)", src: RockyMountainBighornSheep_PiebaldVariation1MaleRightSide },
    { name: "Piebald Variation 1 (Left)", src: RockyMountainBighornSheep_PiebaldVariation1MaleLeftSide },
    { name: "Piebald Variation 2 (Right)", src: RockyMountainBighornSheep_PiebaldVariation2MaleRightSide },
    { name: "Piebald Variation 2 (Left)", src: RockyMountainBighornSheep_PiebaldVariation2MaleLeftSide },
  ];

  const femaleGallery = [
    { name: "Albino", src: RockyMountainBighornSheep_AlbinoFemaleRightSide },
    { name: "Black", src: RockyMountainBighornSheep_BlackFemaleRightSide },
    { name: "Bronze", src: RockyMountainBighornSheep_BronzeFemaleRightSide },
    { name: "Brown", src: RockyMountainBighornSheep_BrownFemaleRightSide },
    { name: "Grey", src: RockyMountainBighornSheep_GreyFemaleRightSide },
    { name: "Leucistic", src: RockyMountainBighornSheep_LeucisticFemaleRightSide },
    { name: "Melanistic", src: RockyMountainBighornSheep_MelanisticFemaleRightSide },
    { name: "Piebald Variation 1 (Right)", src: RockyMountainBighornSheep_PiebaldVariation1FemaleRightSide },
    { name: "Piebald Variation 1 (Left)", src: RockyMountainBighornSheep_PiebaldVariation1FemaleLeftSide },
    { name: "Piebald Variation 2 (Right)", src: RockyMountainBighornSheep_PiebaldVariation2FemaleRightSide },
    { name: "Piebald Variation 2 (Left)", src: RockyMountainBighornSheep_PiebaldVariation2FemaleLeftSide },
  ];

  // Trivia Data
  const triviaData = [
    <span>There are three subspecies of Bighorn Sheep: the Rocky Mountain bighorn sheep (Ovis canadensis canadensis), the Sierra Nevada bighorn sheep (Ovis canadensis sierrae), and the desert bighorn sheep (Ovis canadensis nelsoni). <sup>[2]</sup></span>,
    <span>In the 19th century, the species was hunted to near extinction. Today, the population has recovered to approximately 80000 in the wild. <sup>[3]</sup></span>
  ];

  // References Data
  const referencesData = [
    "Pending screenshot verification..."
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
          <span>Rocky Mountain Bighorn Sheep</span>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Rocky Mountain Bighorn Sheep</div>
            <div className="wiki-sidebar-image">
              <img src={RockyMountainBighornMain} alt="Rocky Mountain Bighorn Sheep" />
            </div>
            
            <div className="wiki-sidebar-header">General Information</div>
            
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Class</span>
              <span><img src={class5Icon} alt="Class 5" className="inline-block wiki-class-icon-sm align-middle mr-1.5"/>5</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Difficulty</span>
              <span>1: Trivial — 5: Medium</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Trophy Type</span>
              <span>Horns</span>
              <div className="wiki-trophy-grid">
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-silver">◆ Silver</span>
                  <span>84.10</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-gold">☗ Gold</span>
                  <span>148.57</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-diamond">☗ Diamond</span>
                  <span>196.93</span>
                </div>
              </div>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Weight</span>
              0kg — 0kg<br/>
              <span className="wiki-sidebar-muted">0lbs — 0lbs</span>
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Fur</span>
               <span className="wiki-fs-sm">
                 Albino, Black, Bronze, Brown, Grey, Leucistic, Melanistic, Piebald
               </span>
            </div>

            <div className="wiki-sidebar-header">Locations</div>
            <div className="wiki-sidebar-section">
               <div className="wiki-mb-4"><span className="wiki-link">Silver Ridge Peaks</span></div>
               <div className="wiki-mb-4"><span className="wiki-link">Askiy Ridge Hunting Preserve</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main className="wiki-main">

            {/* Quote Block */}
            <div className="wiki-quote">
              "Rocky Mountain bighorn sheep are known for their large, curved horns. They live in mountainous areas from the Canadian Rockies down to the southwestern U.S. They prefer grassy slopes and alpine meadows near rocky cliffs, which provide quick escape routes from predators. Their sharp eyesight and hearing help them stay alert in these open, rugged environments. Male rams use their heavy horns to battle rivals for dominance and breeding opportunities. The thunderous impact of their clashes can be heard echoing across the mountains valleys, signaling the fierce competition of mating season."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-p-mb">
              The <strong>Rocky Mountain Bighorn Sheep</strong> is a <span className="wiki-link">class 5</span> sheep introduced with the <span className="wiki-link">Silver Ridge Peaks</span> reserve located in the rocky mountains of Colorado. Both females and males have horns.
            </p>

            {/* Table of Contents */}
            <div className="wiki-toc">
              <div className="wiki-toc-title">
                🔢 Contents <span className="wiki-toc-toggle">[hide]</span>
              </div>
              <ol className="wiki-toc">
                <li><a href="#features" onClick={(e)=>scrollToId(e,'features')} className="wiki-link">Features</a></li>
                <li><a href="#need-zones" onClick={(e)=>scrollToId(e,'need-zones')} className="wiki-link">Need Zone Times</a></li>
                <li><a href="#shot-scheme" onClick={(e)=>scrollToId(e,'shot-scheme')} className="wiki-link">Shot scheme</a></li>
                <li><a href="#fur-variants" onClick={(e)=>scrollToId(e,'fur-variants')} className="wiki-link">Fur Variants</a></li>
                    <ol style={{marginTop:'6px', marginLeft:'-30px', listStyleType: 'none'}}>
                    <li><a href="#fur-male" onClick={(e)=>scrollToId(e,'fur-male')} className="wiki-link">4.1 Male</a></li>
                    <li><a href="#fur-female" onClick={(e)=>scrollToId(e,'fur-female')} className="wiki-link">4.2 Female</a></li>
                  </ol>
                <li><a href="#variant-rarity" onClick={(e)=>scrollToId(e,'variant-rarity')} className="wiki-link">Fur Variant Rarity</a></li>
                <li><a href="#trivia" onClick={(e)=>scrollToId(e,'trivia')} className="wiki-link">Trivia</a></li>
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
                        <tr><th colSpan="2" className="wiki-th wiki-th-center">Askiy Ridge</th></tr>
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
            <h2 className="wiki-h2" id="shot-scheme">Shot scheme</h2>
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
            <h2 id="fur-variants" className="wiki-h2">Fur Variants</h2>

            <h3 id="fur-male" style={{marginTop:'10px', marginBottom:'8px', color: '#6fb2e6'}}>Male</h3>
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

            <h3 id="fur-female" className="wiki-h3">Female</h3>
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
                                Brown (37.30%)<br/>
                                Grey (37.30%)<br/>
                                Bronze (12.50%)<br/>
                                Black (12.50%)
                            </td>
                            <td className="wiki-td">
                                X
                            </td>
                            <td className="wiki-td">
                                Leucistic (0.10%)<br/>
                                Piebald Variation 1 (0.10%)<br/>
                                Piebald Variation 2 (0.10%)
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

            <div className="wiki-mt-40">
                <AnimalsTableMini />
            </div>
            
          </main>
        </div>
      </div>
    </div>
  );
};

export default RockyMountainBighornSheep;