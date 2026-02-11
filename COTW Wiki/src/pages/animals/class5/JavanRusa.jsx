import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import DrinkingZoneIcon from '../../../assets/DrinkingZoneIcon.webp';
import class5Icon from '../../../assets/Class5Icon.webp'; 
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import JavanRusaMain from '../../../assets/JavanRusa.webp';
import ShotSchemeImg from '../../../assets/Javan_Rusa_shot_scheme.webp';

// Fur Variant Images
// Male
import JavanRusa_AlbinoMale from '../../../assets/JavanRusa_AlbinoMaleRightSide.webp';
import JavanRusa_BrownMale from '../../../assets/JavanRusa_BrownMaleRightSide.webp';
import JavanRusa_LeucisticMale from '../../../assets/JavanRusa_LeucisticMaleRightSide.webp';
import JavanRusa_LightBrownMale from '../../../assets/JavanRusa_LightBrownMaleRightSide.webp';
import JavanRusa_PiebaldVar1MaleRight from '../../../assets/JavanRusa_PiebaldVariation1MaleRightSide.webp';
import JavanRusa_PiebaldVar1MaleLeft from '../../../assets/JavanRusa_PiebaldVariation1MaleLeftSide.webp';
import JavanRusa_PiebaldVar2MaleRight from '../../../assets/JavanRusa_PiebaldVariation2MaleRightSide.webp';
import JavanRusa_PiebaldVar2MaleLeft from '../../../assets/JavanRusa_PiebaldVariation2MaleLeftSide.webp';
import JavanRusa_TwoTonesMale from '../../../assets/JavanRusa_TwoTonesMaleRightSide.webp';
import JavanRusa_WhiteBrownMale from '../../../assets/JavanRusa_WhiteBrownMaleRightSide.webp';

// Female
import JavanRusa_BrownFemale from '../../../assets/JavanRusa_BrownFemaleRightSide.webp';
import JavanRusa_LeucisticFemale from '../../../assets/JavanRusa_LeucisticFemaleRightSide.webp';
import JavanRusa_LightBrownFemale from '../../../assets/JavanRusa_LightBrownFemaleRightSide.webp';
import JavanRusa_PiebaldFemaleRight from '../../../assets/JavanRusa_PiebaldFemaleRightSide.webp';
import JavanRusa_PiebaldFemaleLeft from '../../../assets/JavanRusa_PiebaldFemaleLeftSide.webp';
import JavanRusa_TwoTonesFemale from '../../../assets/JavanRusa_TwoTonesFemaleRightSide.webp';
import JavanRusa_WhiteBrownFemale from '../../../assets/JavanRusa_WhiteBrownFemaleRightSide.webp';


const JavanRusa = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  const needZonesData = [
    {
      name: "Emerald Coast",
      schedule: [
        { time: "00:00 - 03:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "03:00 - 06:00", type: "Resting", icon: RestingZoneIcon },
        { time: "06:00 - 09:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "09:00 - 13:00", type: "Resting", icon: RestingZoneIcon },
        { time: "13:00 - 17:00", type: "Resting", icon: RestingZoneIcon },
        { time: "17:00 - 20:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "20:00 - 00:00", type: "Drinking", icon: DrinkingZoneIcon },
      ]
    }
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Feral, grazing, social herbivore" },
    { label: "Habitat", value: "Grassy areas near woodlands, forest, farmland" },
    { label: "Senses", value: "Excellent sense of smell, good sense of hearing, decent eyesight" },
    { label: "Social", value: "Found in small groups or pairs. Male are often seen alone" },
    { label: "Active", value: "Nocturnal, grazing during the day" },
    { label: "Recommended Equipment", value: "Class 5 ammo, Sambar Caller" },
    { label: "Species", value: "Cervus Timorensis", italic: true, isLink: true },
    { label: "Difficulty", value: "Easy" },
  ];

  // Fur Gallery Data (split by sex)
  const maleGallery = [
    { name: "Albino", src: JavanRusa_AlbinoMale },
    { name: "Brown", src: JavanRusa_BrownMale },
    { name: "Leucistic", src: JavanRusa_LeucisticMale },
    { name: "Light Brown", src: JavanRusa_LightBrownMale },
    { name: "Piebald Variation 1 (Right)", src: JavanRusa_PiebaldVar1MaleRight },
    { name: "Piebald Variation 1 (Left)", src: JavanRusa_PiebaldVar1MaleLeft },
    { name: "Piebald Variation 2 (Right)", src: JavanRusa_PiebaldVar2MaleRight },
    { name: "Piebald Variation 2 (Left)", src: JavanRusa_PiebaldVar2MaleLeft },
    { name: "Two Tones", src: JavanRusa_TwoTonesMale },
    { name: "White Brown", src: JavanRusa_WhiteBrownMale },
  ];

  const femaleGallery = [
    { name: "Brown", src: JavanRusa_BrownFemale },
    { name: "Leucistic", src: JavanRusa_LeucisticFemale },
    { name: "Light Brown", src: JavanRusa_LightBrownFemale },
    { name: "Piebald (Right)", src: JavanRusa_PiebaldFemaleRight },
    { name: "Piebald (Left)", src: JavanRusa_PiebaldFemaleLeft },
    { name: "Two Tones", src: JavanRusa_TwoTonesFemale },
    { name: "White Brown", src: JavanRusa_WhiteBrownFemale },
  ];

  // Trivia Data (Updated with latest screenshot data)
  const triviaData = [
    <span>The <strong>Javan Rusa</strong> (<em>Rusa timorensis</em>), also know as the 'Sunda Sambar', is native to the islands of Indonesia, including Java, the Sunda Islands, and the country of East Timor.As such, its many monikers bear the names of its native homelands.</span>,
    <span>Despite what the in game wiki will tell you, the <strong>Javan Rusa</strong> is no longer classified under the "Cervus" genus.</span>,
    "The word 'Rusa' is thought to have come from the Malay word for 'Deer'",
    <span>In real life, the <strong>Javan Rusa</strong> does not drink standing water as it gets most of its water from the plants it eats.However this has yet to be implemented in game. <sup>[2]</sup></span>,
    <span>According to <em>animaldiversity.org</em> Quote: "In Queensland, Australia, 50% of the deer farmed are Javan rusa." <sup>[3]</sup></span>
  ];

  // References Data (Updated with latest screenshot data)
  const referencesData = [
    "Javan Rusa Need Zones, Emerald Coast",
    "https://critter.science/the-javan-rusa/",
    "https://animaldiversity.org/accounts/Rusa_timorensis/"
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
          <span>Javan Rusa</span>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Javan Rusa</div>
            <div className="wiki-sidebar-image">
              <img src={JavanRusaMain} alt="Javan Rusa" />
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
              <span>Antlers</span>
              <div className="wiki-trophy-grid">
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-silver">◆ Silver</span>
                  <span>64.62</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-gold">☗ Gold</span>
                  <span>112.71</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-diamond">☗ Diamond</span>
                  <span>148.78</span>
                </div>
              </div>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Weight</span>
              ? — 172kg<br/>
              <span className="wiki-sidebar-muted">? — 379lbs</span>
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Fur</span>
               <span className="wiki-fs-sm">
                 Albino, Brown, Leucistic, Light Brown, Piebald, Two Tones, White Brown
               </span>
            </div>

            <div className="wiki-sidebar-header">Locations</div>
            <div className="wiki-sidebar-section">
               <div className="wiki-mb-4"><span className="wiki-link">Emerald Coast</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main className="wiki-main">

            {/* Quote Block */}
            <div className="wiki-quote">
              "Often found near the grassy fields by woodlands, the Javan Rusa or Cervus Timorensis sports a brown coat with a reddish hue to it during the summer half-year, and a grey-brown coat during the winter half-year. Like many other species of Rusa, the Javan Rusa has signs of sexual dysmorphism. Males grow and mane, in a darker color and rougher in appearance. As male calves mature they develop antlers. The antlers will develop into a three-tined formation that can grow to around 0.96 m as they age. Males can reach a height of 1.10 m and weigh up to 135.00 kg. While females will grow to an approximate height of 0.95 m while weighing up to 90.00 kg."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-p-mb">
              The <strong>Javan Rusa</strong> is a <span className="wiki-link">class 5</span> deer that can be hunted on <span className="wiki-link">Emerald Coast</span>. Also called 'Timor Deer', it is one of two deer species under the genus "Rusa" in game. The other is the Sambar.
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
            <div className="wiki-inline-block">
                <table className="wiki-table wiki-table-fixed">
                    <thead>
                        <tr><th colSpan="2" className="wiki-th wiki-th-center">Emerald Coast</th></tr>
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
                                White Brown (24.98%)<br/>
                                Brown (24.88%)<br/>
                                Light Brown (24.88%)<br/>
                                Two Tones (24.88%)
                            </td>
                            <td className="wiki-td">
                                X
                            </td>
                            <td className="wiki-td">
                                Albino (0.10%)<br/>
                                Leucistic (0.10%)<br/>
                                Piebald Variation 1 (0.10%)<br/>
                                Piebald Variation 2 (0.10%)
                            </td>
                            <td className="wiki-td">
                                X
                            </td>
                        </tr>
                        {/* Female Row */}
                        <tr>
                            <td className="wiki-td wiki-td-female">
                                Female
                            </td>
                            <td className="wiki-td">
                                White Brown (25.03%)<br/>
                                Brown (24.92%)<br/>
                                Light Brown (24.92%)<br/>
                                Two Tones (24.92%)
                            </td>
                            <td className="wiki-td">
                                X
                            </td>
                            <td className="wiki-td">
                                Leucistic (0.10%)<br/>
                                Piebald (0.10%)
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

export default JavanRusa;