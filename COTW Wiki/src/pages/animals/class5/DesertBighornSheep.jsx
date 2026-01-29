import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import DrinkingZoneIcon from '../../../assets/DrinkingZoneIcon.webp';
import class5Icon from '../../../assets/Class5Icon.webp'; 
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import DesertBighornMain from '../../../assets/Desert_Bighorn_Sheep.webp';
// Placeholder for Shot Scheme (Screenshot not provided in this batch)
//import ShotSchemeImg from '../../../assets/ShotScheme_Placeholder.webp';

// Fur Variant Images
// Male
import DesertBighornSheep_AlbinoMaleRightSide from '../../../assets/DesertBighornSheep_AlbinoMaleRightSide.webp';
import DesertBighornSheep_BrownMaleRightSide from '../../../assets/DesertBighornSheep_BrownMaleRightSide.webp';
import DesertBighornSheep_ErythristicMaleRightSide from '../../../assets/DesertBighornSheep_ErythristicMaleRightSide.webp';
import DesertBighornSheep_GreyMaleRightSide from '../../../assets/DesertBighornSheep_GreyMaleRightSide.webp';
import DesertBighornSheep_LeucisticMaleRightSide from '../../../assets/DesertBighornSheep_LeucisticMaleRightSide.webp';
import DesertBighornSheep_LightBrownMaleRightSide from '../../../assets/DesertBighornSheep_LightBrownMaleRightSide.webp';
import DesertBighornSheep_LightGreyMaleRightSide from '../../../assets/DesertBighornSheep_LightGreyMaleRightSide.webp';
import DesertBighornSheep_MelanisticMaleRightSide from '../../../assets/DesertBighornSheep_MelanisticMaleRightSide.webp';
import DesertBighornSheep_PiebaldVariation1MaleRightSide from '../../../assets/DesertBighornSheep_PiebaldVariation1MaleRightSide.webp';
import DesertBighornSheep_PiebaldVariation1MaleLeftSide from '../../../assets/DesertBighornSheep_PiebaldVariation1MaleLeftSide.webp';
import DesertBighornSheep_PiebaldVariation2MaleRightSide from '../../../assets/DesertBighornSheep_PiebaldVariation2MaleRightSide.webp';
import DesertBighornSheep_PiebaldVariation2MaleLeftSide from '../../../assets/DesertBighornSheep_PiebaldVariation2MaleLeftSide.webp';

// Female
import DesertBighornSheep_AlbinoFemaleRightSide from '../../../assets/DesertBighornSheep_AlbinoFemaleRightSide.webp';
import DesertBighornSheep_BrownFemaleRightSide from '../../../assets/DesertBighornSheep_BrownFemaleRightSide.webp';
import DesertBighornSheep_GreyFemaleRightSide from '../../../assets/DesertBighornSheep_GreyFemaleRightSide.webp';
import DesertBighornSheep_LeucisticFemaleRightSide from '../../../assets/DesertBighornSheep_LeucisticFemaleRightSide.webp';
import DesertBighornSheep_LightBrownFemaleRightSide from '../../../assets/DesertBighornSheep_LightBrownFemaleRightSide.webp';
import DesertBighornSheep_MelanisticFemaleRightSide from '../../../assets/DesertBighornSheep_MelanisticFemaleRightSide.webp';
import DesertBighornSheep_MosaicFemaleRightSide from '../../../assets/DesertBighornSheep_MosaicFemaleRightSide.webp';
import DesertBighornSheep_MosaicFemaleLeftSide from '../../../assets/DesertBighornSheep_MosaicFemaleLeftSide.webp';
import DesertBighornSheep_PiebaldFemaleRightSide from '../../../assets/DesertBighornSheep_PiebaldFemaleRightSide.webp';
import DesertBighornSheep_PiebaldFemaleLeftSide from '../../../assets/DesertBighornSheep_PiebaldFemaleLeftSide.webp';


const DesertBighornSheep = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  // NOTE: Screenshot for Need Zones was not provided in this batch. 
  // Placeholder structure retained.
  const needZonesData = [
    {
      name: "Rancho del Arroyo",
      schedule: [
        { time: "Pending Data", type: "Pending", icon: FeedingZoneIcon },
      ]
    }
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Cautious and elusive" },
    { label: "Habitat", value: "Arid desert mountains, steep rocky slipes, canyons, and rugged escarpments" },
    { label: "Senses", value: "Exceptional vision, keen hearing, and a less developed sense of smell" },
    { label: "Social", value: "Rams live solitary or in small groups, ewes live in medium to large-sized groups" },
    { label: "Active", value: "Morning to evening" },
    { label: "Recommended Equipment", value: "Class 5 Ammo" },
    { label: "Species", value: "Ovis canadensis nelsoni", italic: true, isLink: true },
    { label: "Difficulty", value: "Average" },
  ];

  // Fur Gallery Data (split by sex)
  const maleGallery = [
    { name: "Albino", src: DesertBighornSheep_AlbinoMaleRightSide },
    { name: "Brown", src: DesertBighornSheep_BrownMaleRightSide },
    { name: "Erythristic", src: DesertBighornSheep_ErythristicMaleRightSide },
    { name: "Grey", src: DesertBighornSheep_GreyMaleRightSide },
    { name: "Leucistic", src: DesertBighornSheep_LeucisticMaleRightSide },
    { name: "Light Brown", src: DesertBighornSheep_LightBrownMaleRightSide },
    { name: "Light Grey", src: DesertBighornSheep_LightGreyMaleRightSide },
    { name: "Melanistic", src: DesertBighornSheep_MelanisticMaleRightSide },
    { name: "Piebald Variation 1 (Right)", src: DesertBighornSheep_PiebaldVariation1MaleRightSide },
    { name: "Piebald Variation 1 (Left)", src: DesertBighornSheep_PiebaldVariation1MaleLeftSide },
    { name: "Piebald Variation 2 (Right)", src: DesertBighornSheep_PiebaldVariation2MaleRightSide },
    { name: "Piebald Variation 2 (Left)", src: DesertBighornSheep_PiebaldVariation2MaleLeftSide },
  ];

  const femaleGallery = [
    { name: "Albino", src: DesertBighornSheep_AlbinoFemaleRightSide },
    { name: "Brown", src: DesertBighornSheep_BrownFemaleRightSide },
    { name: "Grey", src: DesertBighornSheep_GreyFemaleRightSide },
    { name: "Leucistic", src: DesertBighornSheep_LeucisticFemaleRightSide },
    { name: "Light Brown", src: DesertBighornSheep_LightBrownFemaleRightSide },
    { name: "Melanistic", src: DesertBighornSheep_MelanisticFemaleRightSide },
    { name: "Mosaic (Right)", src: DesertBighornSheep_MosaicFemaleRightSide },
    { name: "Mosaic (Left)", src: DesertBighornSheep_MosaicFemaleLeftSide },
    { name: "Piebald (Right)", src: DesertBighornSheep_PiebaldFemaleRightSide },
    { name: "Piebald (Left)", src: DesertBighornSheep_PiebaldFemaleLeftSide },
  ];

  // Trivia Data
  const triviaData = [
    <span>There are three subspecies of Bighorn Sheep: the Rocky Mountain bighorn sheep (Ovis canadensis canadensis), the Sierra Nevada bighorn sheep (Ovis canadensis sierrae), and the desert bighorn sheep (Ovis canadensis nelsoni). <sup>[1]</sup></span>,
    <span>In the 19th century, the species was hunted to near extinction. Today, the population has recovered to approximately 80000 in the wild. <sup>[2]</sup></span>,
    "The bighorn sheep was replaced with the desert bighorn sheep in the 8.3 patch update on rancho del arroyo. The bighorn sheep got remodeled and was renamed to desert bighorn sheep on rancho del arrroyo."
  ];

  // References Data (Placeholder - Screenshot not provided)
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
          <span>Desert Bighorn Sheep</span>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Desert Bighorn Sheep</div>
            <div className="wiki-sidebar-image">
              <img src={DesertBighornMain} alt="Desert Bighorn Sheep" />
            </div>
            
            <div className="wiki-sidebar-header">General Information</div>
            
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Class</span>
              <span><img src={class5Icon} alt="Class 5" className="wiki-class-icon-lg"/>5</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Difficulty</span>
              <span>1: Trivial — 5: Medium</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Trophy Type</span>
              <span>Horns</span>
              <div className="wiki-trophy-grid">
                {/* */}
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
              {/* - Transcribed exactly as shown in screenshot */}
              0kg — 0kg<br/>
              <span className="wiki-sidebar-muted">0lbs — 0lbs</span>
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Fur</span>
               {/* */}
               <span className="wiki-fs-sm">
                 Albino, Brown, Erythristic, Grey, Leucistic, Light Brown, Light Grey, Piebald, Melanistic, Mosaic
               </span>
            </div>

            <div className="wiki-sidebar-header">Locations</div>
            <div className="wiki-sidebar-section">
               {/* */}
               <div className="wiki-mb-4"><span className="wiki-link">Rancho del Arroyo</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main className="wiki-main">

            {/* Quote Block */}
            <div className="wiki-quote">
              "Desert bighorn sheep inhabit arid mountain ranges and rocky canyons in the southwest U.S. and northern Mexico. They survive in areas with limited water and sparse vegetation, relying on steep terrain for protection. Their good vision and hearing are essential for detecting predators in this harsh environment. Males wield their large horns in intense fights to establish social rank and secure mates. The booming collisions resonate through the desert canyons, a powerful reminder of their struggle to survive in a tough environment."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-p-mb">
              The <strong>Desert Bighorn Sheep</strong> is a <span className="wiki-link">class 5</span> sheep introduced with the <span className="wiki-link">Rancho del Arroyo</span> reserve located in Mexico. Both females and males have horns.
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
            <p style={{fontStyle:'italic', color:'#88a0b8'}}>Data pending screenshot verification.</p>

            {/* SHOT SCHEME */}
            <h2 className="wiki-h2" id="shot-scheme">Shot scheme</h2>
            <p style={{fontStyle:'italic', color:'#88a0b8'}}>Data pending screenshot verification.</p>

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
                        {/* Male Row */}
                        <tr>
                            <td className="wiki-td wiki-td-muted">
                                Male
                            </td>
                            <td className="wiki-td">
                                Brown (29.01%)<br/>
                                Grey (29.01%)<br/>
                                Light Grey (29.01%)
                            </td>
                            <td className="wiki-td">
                                Light Brown (12.51%)
                            </td>
                            <td className="wiki-td">
                                X
                            </td>
                            <td className="wiki-td">
                                Leucistic (0.10%)<br/>
                                Piebald Variation 1 (0.10%)<br/>
                                Piebald Variation 2 (0.10%)<br/>
                                Albino (0.05%)<br/>
                                Erythristic (0.05%)<br/>
                                Melanistic (0.05%)
                            </td>
                        </tr>
                        {/* Female Row */}
                        <tr>
                            <td className="wiki-td wiki-td-female">
                                Female
                            </td>
                            <td className="wiki-td">
                                Brown (40.93%)<br/>
                                Grey (40.93%)
                            </td>
                            <td className="wiki-td">
                                Light Brown (17.64%)
                            </td>
                            <td className="wiki-td">
                                Leucistic (0.14%)<br/>
                                Piebald (0.14%)
                            </td>
                            <td className="wiki-td">
                                Albino (0.07%)<br/>
                                Melanistic (0.07%)<br/>
                                Mosaic (0.07%)
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
            <p style={{fontStyle:'italic', color:'#88a0b8'}}>Pending screenshot verification.</p>

            <div className="wiki-mt-40">
                <AnimalsTableMini />
            </div>
            
          </main>
        </div>
      </div>
    </div>
  );
};

export default DesertBighornSheep;