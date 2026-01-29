import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import DrinkingZoneIcon from '../../../assets/DrinkingZoneIcon.webp';
import class6Icon from '../../../assets/Class6Icon.webp'; // Class 6 for Reindeer
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import MountainReindeerMain from '../../../assets/MountainReindeer.webp';
import ShotSchemeImg from '../../../assets/MountainReindeer_shot_scheme.webp';

// Fur Variant Images
// Male
import MountainReindeer_AlbinoMale from '../../../assets/MountainReindeer_AlbinoMale.webp';
import MountainReindeer_DarkBrownMale from '../../../assets/MountainReindeer_DarkBrownMale.webp';
import MountainReindeer_LeucisticMale from '../../../assets/MountainReindeer_LeucisticMale.webp';
import MountainReindeer_LightBrownMale from '../../../assets/MountainReindeer_LightBrownMale.webp';
import MountainReindeer_MelanisticMale from '../../../assets/MountainReindeer_MelanisticMale.webp';
import MountainReindeer_PiebaldMale from '../../../assets/MountainReindeer_PiebaldMale.webp';

// Female
import MountainReindeer_AlbinoFemale from '../../../assets/MountainReindeer_AlbinoFemale.webp';
import MountainReindeer_BrownFemale from '../../../assets/MountainReindeer_BrownFemale.webp';
import MountainReindeer_LeucisticFemale from '../../../assets/MountainReindeer_LeucisticFemale.webp';
import MountainReindeer_MelanisticFemale from '../../../assets/MountainReindeer_MelanisticFemale.webp';
import MountainReindeer_PiebaldFemale from '../../../assets/MountainReindeer_PiebaldFemale.webp';
import MountainReindeer_TanFemale from '../../../assets/MountainReindeer_TanFemale.webp';


const MountainReindeer = () => {

  // --- DATA SOURCES ---

  // Need Zone Times (Updated from Screenshot)
  const needZonesData = [
    {
      name: "Medved-Taiga National Park",
      schedule: [
        { time: "00:00 - 04:30", type: "Resting", icon: RestingZoneIcon },
        { time: "04:00 - 08:30", type: "Drinking", icon: DrinkingZoneIcon },
        { time: "08:00 - 12:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "12:00 - 16:30", type: "Resting", icon: RestingZoneIcon },
        { time: "16:00 - 20:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "20:00 - 00:30", type: "Resting", icon: RestingZoneIcon },
      ]
    }
  ];

  // Features Table (Updated from Screenshot)
  const features = [
    { label: "Behavior", value: "Docile and not aggressive" },
    { label: "Habitat", value: "Prefer open areas" },
    { label: "Senses", value: "Excellent sense of smell" },
    { label: "Social", value: "Sometimes solitary, otherwise they live in larger groups" },
    { label: "Active", value: "During all times" },
    { label: "Recommended Equipment", value: "Class 6 Ammo, Antler Rattler" },
    { label: "Species", value: "Rangifer tarandus", italic: true, isLink: true },
    { label: "Difficulty", value: "Average" },
  ];

c

  // Trivia Data (Updated from Screenshot)
  const triviaData = [
    "The word origin for the word 'Reindeer' is greatly misunderstood. It has nothing to do with \"rain\" or the \"reins\" of a sleigh. But instead it descends from the Old Norse word \"hreindyri\" consisting of two parts \"hreinn\" and \"dyri\" (animal). \"Hreinn\" itself was already the usual name for the animal, but earlier Proto-Germanic word \"khrinda\" means \"to run\". So \"reindeer\" is \"running beast\". [1] [2]",
    "Russian word for the species is северный олень (severniy olen'). In back translation it means just Northern deer.",
    "During migration, Tundra Reindeer can form herds as large as half a million.",
    "The first recorded mention of \"Santa's Reindeer\" is credited to William Gilley's \"The Children's Friend. Number III\"... Clemet C. Moore's 1823 poem \"A Visit from St. Nicholas\" is thought to have further cemented the animals into tradition. However, some argue that the true origin of these Christmas icons is Thor's chariot pulled by \"Horned Goats\".[3][4]",
  ];

  // References Data (Updated from Screenshot)
  const referencesData = [
    "https://morph.surrey.ac.uk/index.php/2018/06/06/reindeer-rein-deer/",
    "https://www.etymonline.com/word/reindeer",
    "https://www.viovet.co.uk/blog/p65-When-did-Reindeer-become-associated-with-Christmas",
    "http://www.todayifoundout.com/index.php/2016/12/real-reindeer-became-associated-christmas/"
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
          <span>Mountain Reindeer</span>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Mountain Reindeer</div>
            <div className="wiki-sidebar-image">
              <img src={MountainReindeerMain} alt="Mountain Reindeer" />
            </div>
            
            <div className="wiki-sidebar-header">General Information</div>
            
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Class</span>
              <span><img src={class6Icon} alt="Class 6" className="wiki-class-icon-lg"/>6</span>
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
                  <span>152.53</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-gold">☗ Gold</span>
                  <span>311.21</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-diamond">☗ Diamond</span>
                  <span>430.23</span>
                </div>
              </div>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Weight</span>
              80kg — 182kg<br/>
              <span className="wiki-sidebar-muted">176lbs — 401lbs</span>
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Fur</span>
               <span className="wiki-fs-sm">
                 Albino, Brown, Dark Brown, Leucistic, Light Brown, Melanistic, Piebald, Tan
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
              "The reindeer, known as caribou in North America, is a species of deer found in Scandinavia, Siberia, Canada and Alaska. Both male and female reindeer grow antlers annually, with the size being typically larger for males. They have the largest antlers relative to their body size among any living deer species. The color of the fur varies between individuals, both depending on subspecies and season. With reindeer in northern areas having typically a lighter coat than individuals found in the south part of their range. Males weigh between 159 - 182 kg (350 - 401 lb) while females are smaller and weigh between 80 - 120 kg (176 - 264 lb). Reindeer are migratory and can be found in huge herds with up to 500,000 individuals during migration periods. During the rut, they gather in smaller mixed gender groups with a few males guarding a group of females. Reindeer prefer open areas both for feeding and for resting as it allows them to keep an eye out for predators."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-p-mb">
              The Mountain Reindeer is a medium-sized deer (class 6). It can be hunted in Medved-Taiga National Park.
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
                        <tr><th colSpan="2" className="wiki-th wiki-th-center">Medved-Taiga</th></tr>
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
                 <img src={ShotSchemeImg} alt="Shot Scheme" className="wiki-shot-scheme-img" />
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
                        {/* Male Row */}
                        <tr>
                            <td className="wiki-td wiki-td-muted">
                                Male
                            </td>
                            <td className="wiki-td">
                                Dark Brown (49.85%)<br/>
                                Light Brown (49.85%)
                            </td>
                            <td className="wiki-td">
                                X
                            </td>
                            <td className="wiki-td">
                                Leucistic (0.10%)<br/>
                                Piebald (0.10%)
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
                                Brown (49.85%)<br/>
                                Tan (49.85%)
                            </td>
                            <td className="wiki-td">
                                X
                            </td>
                            <td className="wiki-td">
                                Leucistic (0.10%)<br/>
                                Piebald (0.10%)
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

export default MountainReindeer;