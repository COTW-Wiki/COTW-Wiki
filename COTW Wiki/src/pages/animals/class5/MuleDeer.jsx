import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import DrinkingZoneIcon from '../../../assets/DrinkingZoneIcon.webp';
import class5Icon from '../../../assets/Class5Icon.webp'; 
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import MuleDeerMain from '../../../assets/MuleDeer.webp';
import ShotSchemeImg from '../../../assets/Mule_Deer_shot_scheme.webp';

// Fur Variant Images
// Male
import MuleDeer_AlbinoMaleRightSide from '../../../assets/MuleDeer_AlbinoMaleRightSide.webp';
import MuleDeer_BrownMaleRightSide from '../../../assets/MuleDeer_BrownMaleRightSide.webp';
import MuleDeer_DiluteMaleRightSide from '../../../assets/MuleDeer_DiluteMaleRightSide.webp';
import MuleDeer_GreyMaleRightSide from '../../../assets/MuleDeer_GreyMaleRightSide.webp';
import MuleDeer_LeucisticMaleRightSide from '../../../assets/MuleDeer_LeucisticMaleRightSide.webp';
import MuleDeer_MelanisticMaleRightSide from '../../../assets/MuleDeer_MelanisticMaleRightSide.webp';
import MuleDeer_PiebaldVar1MaleRightSide from '../../../assets/MuleDeer_PiebaldVariation1MaleRightSide.webp';
import MuleDeer_PiebaldVar1MaleLeftSide from '../../../assets/MuleDeer_PiebaldVariation1MaleLeftSide.webp';
import MuleDeer_PiebaldVar2MaleRightSide from '../../../assets/MuleDeer_PiebaldVariation2MaleRightSide.webp';
import MuleDeer_PiebaldVar2MaleLeftSide from '../../../assets/MuleDeer_PiebaldVariation1MaleLeftSide.webp';

// Female
import MuleDeer_AlbinoFemaleRightSide from '../../../assets/MuleDeer_AlbinoFemaleRightSide.webp';
import MuleDeer_BlondeFemaleRightSide from '../../../assets/MuleDeer_BlondeFemaleRightSide.webp';
import MuleDeer_BrownFemaleRightSide from '../../../assets/MuleDeer_BrownFemaleRightSide.webp';
import MuleDeer_DiluteFemaleRightSide from '../../../assets/MuleDeer_DiluteFemaleRightSide.webp';
import MuleDeer_GreyFemaleRightSide from '../../../assets/MuleDeer_GreyFemaleRightSide.webp';
import MuleDeer_LeucisticFemaleRightSide from '../../../assets/MuleDeer_LeucisticFemaleRightSide.webp';
import MuleDeer_MelanisticFemaleRightSide from '../../../assets/MuleDeer_MelanisticFemaleRightSide.webp';
import MuleDeer_PiebaldVar1FemaleRightSide from '../../../assets/MuleDeer_PiebaldVariation1FemaleRightSide.webp';
import MuleDeer_PiebaldVar1FemaleLeftSide from '../../../assets/MuleDeer_PiebaldVariation1FemaleLeftSide.webp';
import MuleDeer_PiebaldVar2FemaleRightSide from '../../../assets/MuleDeer_PiebaldVariation2FemaleRightSide.webp';
import MuleDeer_PiebaldVar2FemaleLeftSide from '../../../assets/MuleDeer_PiebaldVariation2FemaleLeftSide.webp';

// Great One (Fabled)
import MuleDeer_FabledCinnamonStripesRightSide from '../../../assets/MuleDeer_FabledCinnamonStripesRightSide.webp';
import MuleDeer_FabledCobwebEnigmaRightSide from '../../../assets/MuleDeer_FabledCobwebEnigmaRightSide.webp';
import MuleDeer_FabledDrippleDrizzleRightSide from '../../../assets/MuleDeer_FabledDrippleDrizzleRightSide.webp';
import MuleDeer_FabledDuskyDriftRightSide from '../../../assets/MuleDeer_FabledDuskyDriftRightSide.webp';
import MuleDeer_FabledDuskyDriftLeftSide from '../../../assets/MuleDeer_FabledDuskyDriftLeftSide.webp';
import MuleDeer_FabledMilkyWayRightSide from '../../../assets/MuleDeer_FabledMilkyWayRightSide.webp';
import MuleDeer_FabledPetalPuffRightSide from '../../../assets/MuleDeer_FabledPetalPuffRightSide.webp';
import MuleDeer_FabledPetalPuffLeftSide from '../../../assets/MuleDeer_FabledPetalPuffLeftSide.webp';


const MuleDeer = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  const needZonesData = [
    {
      name: "Parque Fernando and Silver Ridge Peaks",
      schedule: [
        { time: "00:00 - 03:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "03:00 - 06:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "06:00 - 09:30", type: "Resting", icon: RestingZoneIcon },
        { time: "09:00 - 12:30", type: "Resting", icon: RestingZoneIcon },
        { time: "12:00 - 15:30", type: "Resting", icon: RestingZoneIcon },
        { time: "15:00 - 18:30", type: "Drinking", icon: DrinkingZoneIcon },
        { time: "18:00 - 21:30", type: "Resting", icon: RestingZoneIcon },
        { time: "21:00 - 00:30", type: "Feeding", icon: FeedingZoneIcon },
      ]
    },
    {
      name: "Askiy Ridge",
      schedule: [
        { time: "00:00 - 03:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "03:00 - 06:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "06:00 - 09:00", type: "Resting", icon: RestingZoneIcon },
        { time: "09:00 - 12:00", type: "Resting", icon: RestingZoneIcon },
        { time: "12:00 - 15:00", type: "Resting", icon: RestingZoneIcon },
        { time: "15:00 - 18:00", type: "Drinking", icon: DrinkingZoneIcon },
        { time: "18:00 - 21:00", type: "Resting", icon: RestingZoneIcon },
        { time: "21:00 - 00:00", type: "Feeding", icon: FeedingZoneIcon },
      ]
    }
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Calm" },
    { label: "Habitat", value: "Plains, forests, and grasslands" },
    { label: "Senses", value: "Excellent sense of hearing and smell, overall decent visual sense" },
    { label: "Social", value: "Common herds in winter, but segregated male and female populations in spring" },
    { label: "Active", value: "Dawn to dusk" },
    { label: "Recommended Equipment", value: "Class 5 Ammo, Mule Deer Scent, Deer \"Bleat\" Caller" },
    { label: "Species", value: "Odocoileus hemionus", italic: true, isLink: true },
    { label: "Difficulty", value: "Average" },
  ];

  // Fur Gallery Data (split by sex)
  const maleGallery = [
    { name: "Albino", src: MuleDeer_AlbinoMaleRightSide },
    { name: "Brown", src: MuleDeer_BrownMaleRightSide },
    { name: "Dilute", src: MuleDeer_DiluteMaleRightSide },
    { name: "Grey", src: MuleDeer_GreyMaleRightSide },
    { name: "Leucistic", src: MuleDeer_LeucisticMaleRightSide },
    { name: "Melanistic", src: MuleDeer_MelanisticMaleRightSide },
    { name: "Piebald Variation 1 (Right)", src: MuleDeer_PiebaldVar1MaleRightSide },
    { name: "Piebald Variation 1 (Left)", src: MuleDeer_PiebaldVar1MaleLeftSide },
    { name: "Piebald Variation 2 (Right)", src: MuleDeer_PiebaldVar2MaleRightSide },
    { name: "Piebald Variation 2 (Left)", src: MuleDeer_PiebaldVar2MaleLeftSide },
  ];

  const femaleGallery = [
    { name: "Albino", src: MuleDeer_AlbinoFemaleRightSide },
    { name: "Blonde", src: MuleDeer_BlondeFemaleRightSide },
    { name: "Brown", src: MuleDeer_BrownFemaleRightSide },
    { name: "Dilute", src: MuleDeer_DiluteFemaleRightSide },
    { name: "Grey", src: MuleDeer_GreyFemaleRightSide },
    { name: "Leucistic", src: MuleDeer_LeucisticFemaleRightSide },
    { name: "Melanistic", src: MuleDeer_MelanisticFemaleRightSide },
    { name: "Piebald Variation 1 (Right)", src: MuleDeer_PiebaldVar1FemaleRightSide },
    { name: "Piebald Variation 1 (Left)", src: MuleDeer_PiebaldVar1FemaleLeftSide },
    { name: "Piebald Variation 2 (Right)", src: MuleDeer_PiebaldVar2FemaleRightSide },
    { name: "Piebald Variation 2 (Left)", src: MuleDeer_PiebaldVar2FemaleLeftSide },
  ];

  const greatOneGallery = [
    { name: "Fabled Cinnamon Stripes", src: MuleDeer_FabledCinnamonStripesRightSide },
    { name: "Fabled Cobweb Enigma", src: MuleDeer_FabledCobwebEnigmaRightSide },
    { name: "Fabled Dripple Drizzle", src: MuleDeer_FabledDrippleDrizzleRightSide },
    { name: "Fabled Dusky Drift (Right)", src: MuleDeer_FabledDuskyDriftRightSide },
    { name: "Fabled Dusky Drift (Left)", src: MuleDeer_FabledDuskyDriftLeftSide },
    { name: "Fabled Milky Way", src: MuleDeer_FabledMilkyWayRightSide },
    { name: "Fabled Petal Puff (Right)", src: MuleDeer_FabledPetalPuffRightSide },
    { name: "Fabled Petal Puff (Left)", src: MuleDeer_FabledPetalPuffLeftSide },
  ];

  // Trivia Data
  const triviaData = [
    <span>Mule Deer are considered one of the newest deer species to evolve in North America. It's estimated to have evolved only 10,000 years ago from ancient <span style={{color: '#6fb2e6', cursor:'pointer'}}>Whitetail Deer</span> and <span style={{color: '#6fb2e6', cursor:'pointer'}}>Blacktail Deer</span> hybrids. <sup>[2]</sup></span>
  ];

  // References Data
  const referencesData = [
    "Mule Deer Need Zones, Askiy Ridge",
    "https://lewis-clark.org/sciences/mammals/deer/mule-deer/"
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
          <span>Mule Deer</span>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Mule Deer</div>
            <div className="wiki-sidebar-image">
              <img src={MuleDeerMain} alt="Mule Deer" />
            </div>
            
            <div className="wiki-sidebar-header">General Information</div>
            
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Class</span>
              <span><img src={class5Icon} alt="Class 5" className="inline-block wiki-class-icon-sm align-middle mr-1.5"/>5</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Difficulty</span>
              <span>1: Trivial — 5: Medium</span>
              <br/>
              <span>10: Fabled</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Trophy Type</span>
              <span>Antlers</span>
              <div className="wiki-trophy-grid">
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-silver">◆ Silver</span>
                  <span>98.36</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-gold">☗ Gold</span>
                  <span>220.54</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-diamond">☗ Diamond</span>
                  <span>312.17</span>
                </div>
              </div>
            </div>

             <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label wiki-great-one" style={{color: '#2ecc71'}}>Great One</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Weight</span>
              70kg — 210kg<br/>
              <span className="wiki-sidebar-muted">154lbs — 463lbs</span>
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Fur</span>
               <span className="wiki-fs-sm">
                 Albino, Blonde, Brown, Dilute, Grey, Leucistic, Melanistic, Piebald<br/><br/>
                 <strong>Fabled Exclusive:</strong><br/>
                 Cinnamon Stripes, Cobweb Enigma, Dripple Drizzle, Dusky Drift, Milky Way, Petal Puff
               </span>
            </div>

            <div className="wiki-sidebar-header">Locations</div>
            <div className="wiki-sidebar-section">
               <div className="wiki-mb-4"><span className="wiki-link">Parque Fernando</span></div>
               <div className="wiki-mb-4"><span className="wiki-link">Silver Ridge Peaks</span></div>
               <div className="wiki-mb-4"><span className="wiki-link">Rancho del Arroyo</span></div>
               <div className="wiki-mb-4"><span className="wiki-link">Askiy Ridge Hunting Preserve</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main className="wiki-main">

            {/* Quote Block */}
            <div className="wiki-quote">
              "The mule deer is a species of deer named for its ears, which bear a resemblance to the large ears of a mule. While native to North America, the mule deer has been introduced to other parts of the world like Argentina and Hawaii for hunting purposes. The mule deer is related to the whitetail and blacktail deer, but has evolved to be better than both at navigating its rugged home terrain. It stands larger than the whitetail deer, often reaching over 1.00 m at the shoulder and having a nose-to-tail length of 1.20 m to 2.10 m, additionally having significantly less variation across ranges. A highly sought after trophy animal and frequently hunted where found, the mule deer can present an incredible trophy"
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-p-mb">
              The <strong>Mule Deer</strong> is a <span className="wiki-link">class 5</span> deer. It can be hunted in the <span className="wiki-link">Parque Fernando</span>, <span className="wiki-link">Silver Ridge Peaks</span>, <span className="wiki-link">Rancho del Arroyo</span>, and <span className="wiki-link">Askiy Ridge</span> reserves.
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
                <li><a href="#fur-great-ones" onClick={(e)=>scrollToId(e,'fur-great-ones')} className="wiki-link">Fur Variants | Great Ones</a></li>
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
            <div style={{display:'flex', gap:'20px', flexWrap:'wrap'}}>
                {needZonesData.map((reserve, idx) => (
                    <div key={idx} style={{flex: 1, minWidth: '300px'}}>
                        <table className="wiki-table">
                            <thead>
                                <tr><th colSpan="2" className="wiki-th wiki-th-center">{reserve.name}</th></tr>
                                <tr>
                                    <th className="wiki-th wiki-th-alt">Times</th>
                                    <th className="wiki-th wiki-th-alt">Activity</th>
                                </tr>
                            </thead>
                            <tbody>
                                {reserve.schedule.map((zone, i) => (
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
                ))}
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

            {/* GREAT ONES GALLERY */}
            <h2 id="fur-great-ones" className="wiki-h2">Fur Variants | Great Ones</h2>
            <div className="wiki-gallery-grid">
              {greatOneGallery.map((item, i) => (
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
                                Blonde (37.32%)<br/>
                                Brown (37.32%)<br/>
                                Grey (24.98%)
                            </td>
                            <td className="wiki-td">
                                X
                            </td>
                            <td className="wiki-td">
                                Dilute (0.20%)
                            </td>
                            <td className="wiki-td">
                                Albino (0.02%)<br/>
                                Leucistic (0.02%)<br/>
                                Melanistic (0.02%)<br/>
                                Piebald Variation 1 (0.05%)<br/>
                                Piebald Variation 2 (0.05%)
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 style={{color: '#6fb2e6', fontSize: '1.1rem', marginBottom: '10px', textDecoration: 'underline'}}>Mule Deer Great One Tips:</h3>
            <p className="wiki-mb-20">
                The Mule Deer Great One can be found on any mule deer maps (<span className="wiki-link">Parque Fernando</span>, <span className="wiki-link">Silver Ridge Peaks</span>, <span className="wiki-link">Rancho del Arroyo</span>, and <span className="wiki-link">Askiy Ridge</span> reserves.) However the best map by far is Askiy Ridge. Askiy Ridge has smaller population sizes and only the left side of the map can spawn mule deer. Mule deer only spawn on approximately 23 lakes on askiy ridge rather than the whole map which makes setting up much easier as you have more tent coverage. Not only this but the mule deer zones themselves are easier to find due to their smaller number of possible locations. Due to all the factors above when considering this grind it is worth purchasing the Askiy Ridge map or setting up on it rather than the other mule deer maps such as Silver Ridge Peaks.
            </p>

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

export default MuleDeer;