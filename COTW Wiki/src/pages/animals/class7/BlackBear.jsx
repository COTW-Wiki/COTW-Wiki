import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import DrinkingZoneIcon from '../../../assets/DrinkingZoneIcon.webp';
import class7Icon from '../../../assets/Class7Icon.webp'; // Class 7 for Black Bear
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import BlackBearMain from '../../../assets/BlackBear.webp';
import ShotSchemeImg from '../../../assets/Black_bear_shot_scheme.webp';

// Fur Variant Images - Standard
import BlackBear_Black from '../../../assets/BlackBear_Black.webp';
import BlackBear_Blonde from '../../../assets/BlackBear_Blonde.webp';
import BlackBear_Brown from '../../../assets/BlackBear_Brown.webp';
import BlackBear_Cinnamon from '../../../assets/BlackBear_Cinnamon.webp';
import BlackBear_Dark from '../../../assets/BlackBear_Dark.webp';
import BlackBear_Dusky from '../../../assets/BlackBear_Dusky.webp';

// Fur Variant Images - Great Ones (Fabled)
import BlackBear_GO_Chestnut from '../../../assets/BlackBear_FabledChestnut.webp';
import BlackBear_GO_Cream from '../../../assets/BlackBear_FabledCream.webp';
import BlackBear_GO_Glacier1 from '../../../assets/BlackBear_FabledGlacierVariation1.webp';
import BlackBear_GO_Glacier2 from '../../../assets/BlackBear_FabledGlacierVariation2.webp';
import BlackBear_GO_Spirit from '../../../assets/BlackBear_FabledSpirit.webp';
import BlackBear_GO_Spotted from '../../../assets/BlackBear_FabledSpotted.webp';


const BlackBear = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  const needZonesData = [
    {
      name: "Askiy Ridge",
      schedule: [
        { time: "00:00 - 04:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "04:00 - 08:00", type: "Drinking", icon: DrinkingZoneIcon },
        { time: "08:00 - 12:00", type: "Resting", icon: RestingZoneIcon },
        { time: "12:00 - 16:00", type: "Resting", icon: RestingZoneIcon },
        { time: "16:00 - 20:00", type: "Resting", icon: RestingZoneIcon },
        { time: "20:00 - 00:00", type: "Feeding", icon: FeedingZoneIcon },
      ]
    }
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Skittish and defensive" },
    { label: "Habitat", value: "Large forests in flat and hilly terrain" },
    { label: "Senses", value: "Good hearing and a great sense of smell" },
    { label: "Social", value: "Typically solitary" },
    { label: "Active", value: "During night" },
    { label: "Recommended Equipment", value: "Class 7 Ammo, Predator \"Distressed Fawn\" Caller" },
    { label: "Species", value: "Ursus americanus", italic: true, isLink: true },
    { label: "Difficulty", value: "Hard" },
  ];

  // Fur Gallery Data - Standard
  const furGallery = [
    { name: "Black", src: BlackBear_Black },
    { name: "Blonde", src: BlackBear_Blonde },
    { name: "Brown", src: BlackBear_Brown },
    { name: "Cinnamon", src: BlackBear_Cinnamon },
    { name: "Dark", src: BlackBear_Dark },
    { name: "Dusky", src: BlackBear_Dusky },
  ];

  // Great Ones Gallery
  const greatOnesGallery = [
    { name: "Fabled Chestnut", src: BlackBear_GO_Chestnut },
    { name: "Fabled Cream", src: BlackBear_GO_Cream },
    { name: "Fabled Glacier Variation 1", src: BlackBear_GO_Glacier1 },
    { name: "Fabled Glacier Variation 2", src: BlackBear_GO_Glacier2 },
    { name: "Fabled Spirit", src: BlackBear_GO_Spirit },
    { name: "Fabled Spotted", src: BlackBear_GO_Spotted },
  ];

  // Trivia Data
  const triviaData = [
    "It was part of the original list of species available to hunt at launch.",
    "The Black Bear is the most widespread Bear in the US; and as such bears the country's name americanus.",
    "Despite being native to North America, the Black Bear is more closely related to the Asian Black Bear rather than other native bear species like the Grizzly Bear.",
    "Despite its name, the Black Bear isn't always black. Just like in game, real life Black Bears have a myriad of fur colors that distinguish it from other Bear species. However color phase Black Bears are more common in the Western half of the US as opposed to the East, where they were first encountered by Europeans.",
    "The Fabled Spirit fur type seems to be a reference to the real life Spirit Bear (Ursus americanus kermodei), a subspecies of Black Bear found in British Columbia.",
    "Black Bear received its great one with the Revontuli Coast Update in 28 June 2022."
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
          <span>Black Bear</span>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Black Bear</div>
            <div className="wiki-sidebar-image">
              <img src={BlackBearMain} alt="Black Bear" />
            </div>
            
            <div className="wiki-sidebar-header">General Information</div>
            
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Class</span>
              <span><img src={class7Icon} alt="Class 7" className="wiki-class-icon-lg"/>7</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Difficulty</span>
              <span>1: Trivial — 9: Legendary</span><br/>
              <span>10: Fabled</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Trophy Type</span>
              <span>Skull</span>
              <div className="wiki-trophy-grid">
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-silver">◆ Silver</span>
                  <span>14.3</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-gold">☗ Gold</span>
                  <span>19.2</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-diamond">☗ Diamond</span>
                  <span>22.8</span>
                </div>
              </div>
              <div className="wiki-great-one-badge">💎 Great One</div>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Weight</span>
              40kg — 290kg<br/>
              <span className="wiki-sidebar-muted">88lbs — 639lbs</span><br/>
              <span style={{fontSize: '0.9rem', marginTop: '5px', display: 'block'}}>409kg (Great One)</span>
              <span className="wiki-sidebar-muted">902lbs (Great One)</span>
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Fur</span>
               <span className="wiki-fs-sm">
                 Black, Blonde, Brown, Cinnamon, Dark, Dusky
               </span>
               <br/>
               <span className="wiki-block-label">Fabled Exclusive:</span>
               <span className="wiki-fs-sm">
                 Glacier, Cream, Spotted, Spirit, Chestnut
               </span>
            </div>

            <div className="wiki-sidebar-header">Locations</div>
            <div className="wiki-sidebar-section">
               <div className="wiki-mb-4"><span className="wiki-link">Layton Lake District</span></div>
               <div className="wiki-mb-4"><span className="wiki-link">Silver Ridge Peaks</span></div>
               <div className="wiki-mb-4"><span className="wiki-link">Mississippi Acres Preserve</span></div>
               <div className="wiki-mb-4"><span className="wiki-link">New England Mountains</span></div>
               <div className="wiki-mb-4"><span className="wiki-link">Askiy Ridge Hunting Preserve</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main className="wiki-main">

            {/* Quote Block */}
            <div className="wiki-quote">
              "Native to the North American continent, the black bear is a worthy challenge for any hunter despite their smaller size among bears. Their fur color is typically black or very dark brown. Despite their name though, black bears come in many different hybrid variations due to interspecies breeding. A typical male bear weighs between 60 - 250 kg (126 - 551 lb). Hunting black bears requires patience, stealth, and a high degree of marksmanship, as they have great physical strength, are highly dexterous and have a keen sense of smell and good hearing. Black bears are diverse omnivores and tend to hide within larger forests. If you startle or corner one, it will most definitely defend itself fiercely."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-p-mb">
              The <strong>Black Bear</strong> is a medium-sized <span className="wiki-link">class 7</span> bear that can be hunted on <span className="wiki-link">Layton Lake District</span>, <span className="wiki-link">Silver Ridge Peaks</span>, <span className="wiki-link">Mississippi Acres Preserve</span> and <span className="wiki-link">New England Mountains</span>.
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
                <li><a href="#great-ones" onClick={(e)=>scrollToId(e,'great-ones')} className="wiki-link">Great Ones</a></li>
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
            <h2 className="wiki-h2" id="shot-scheme">Shot Scheme</h2>
            <div className="wiki-shot-container">
               <div className="wiki-shot-container">
                 <img src={ShotSchemeImg} alt="Shot Scheme" className="wiki-shot-scheme-img" />
               </div>
               <div className="wiki-shot-wrap">
                 <div className="wiki-shot-title">Color code</div>
                 <div className="wiki-shot-info">Red - Kills immediately</div>
                 <div className="wiki-shot-info">Blue - Kills very quickly</div>
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

            {/* GREAT ONES (Gallery) */}
            <h2 className="wiki-h2" id="great-ones">Great Ones</h2>
            <div className="wiki-gallery-grid">
              {greatOnesGallery.map((item, i) => (
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
                                Black (33.23%)<br/>
                                Dark (33.23%)<br/>
                                Dusky (33.23%)
                            </td>
                            <td className="wiki-td">
                                X
                            </td>
                            <td className="wiki-td">
                                Cinnamon (0.20%)
                            </td>
                            <td className="wiki-td">
                                Blonde (0.05%)<br/>
                                Brown (0.05%)
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


            <div className="wiki-mt-40">
                <AnimalsTableMini />
            </div>
            
          </main>
        </div>
      </div>
    </div>
  );
};

export default BlackBear;