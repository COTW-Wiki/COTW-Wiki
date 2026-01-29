import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import DrinkingZoneIcon from '../../../assets/DrinkingZoneIcon.webp';
import class7Icon from '../../../assets/Class7Icon.webp'; // Class 7 for American Alligator
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import AmericanAlligatorMain from '../../../assets/AmericanAlligator.webp';
//import ShotSchemeImg from '../../../assets/AmericanAlligator_shot_scheme.webp';

// Scute Variant Images - Male & Female (Based on "Scute Variants" screenshot)
// Assuming separate images based on the grid provided in the screenshot
import AmericanAlligator_AlbinoLeftSide from '../../../assets/AmericanAlligator_AlbinoLeftSide.webp';
import AmericanAlligator_DarkBrownLeftSide from '../../../assets/AmericanAlligator_DarkBrownLeftSide.webp';
import AmericanAlligator_MelanisticLeftSide from '../../../assets/AmericanAlligator_MelanisticLeftSide.webp';
import AmericanAlligator_OliveLeftSide from '../../../assets/AmericanAlligator_OliveLeftSide.webp';
import AmericanAlligator_PiebaldVariation1LeftSide from '../../../assets/AmericanAlligator_PiebaldVariation1LeftSide.webp';
import AmericanAlligator_PiebaldVariation1RightSide from '../../../assets/AmericanAlligator_PiebaldVariation1RightSide.webp';
import AmericanAlligator_PiebaldVariation2LeftSide from '../../../assets/AmericanAlligator_PiebaldVariation2LeftSide.webp';
import AmericanAlligator_PiebaldVariation2RightSide from '../../../assets/AmericanAlligator_PiebaldVariation2RightSide.webp';
import AmericanAlligator_PiebaldVariation3LeftSide from '../../../assets/AmericanAlligator_PiebaldVariation3LeftSide.webp';
import AmericanAlligator_PiebaldVariation3RightSide from '../../../assets/AmericanAlligator_PiebaldVariation3RightSide.webp';
import AmericanAlligator_PiebaldVariation4LeftSide from '../../../assets/AmericanAlligator_PiebaldVariation4LeftSide.webp';
import AmericanAlligator_PiebaldVariation4RightSide from '../../../assets/AmericanAlligator_PiebaldVariation4RightSide.webp';
import AmericanAlligator_PiebaldVariation5LeftSide from '../../../assets/AmericanAlligator_PiebaldVariation5LeftSide.webp';
import AmericanAlligator_PiebaldVariation5RightSide from '../../../assets/AmericanAlligator_PiebaldVariation5RightSide.webp';


const AmericanAlligator = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  const needZonesData = [
    {
      name: "Mississippi Acres Preserve",
      schedule: [
        { time: "00:00 - 03:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "03:00 - 06:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "06:00 - 09:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "09:00 - 12:30", type: "Resting", icon: RestingZoneIcon },
        { time: "12:00 - 16:30", type: "Resting", icon: RestingZoneIcon },
        { time: "16:00 - 20:30", type: "Resting", icon: RestingZoneIcon },
        { time: "20:00 - 00:30", type: "Feeding", icon: FeedingZoneIcon },
      ]
    }
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Skittish and dangerous" },
    { label: "Habitat", value: "Swamps, ponds, lakes, rivers" },
    { label: "Senses", value: "Excellent sense of smell and vibration" },
    { label: "Social", value: "Large specimen are solitary, while smaller ones can coexist" },
    { label: "Active", value: "Mostly active between dusk and dawn" },
    { label: "Recommended Equipment", value: "Class 7 Ammo, Quist Red Pro Electronic Caller" },
    { label: "Species", value: "Alligator mississippiensis", italic: true, isLink: true },
    { label: "Difficulty", value: "Hard" },
  ];

  // Scute Gallery Data
  // Note: The screenshot labels these as "Scute Variants"
  const scuteGallery = [
    { name: "Albino", src: AmericanAlligator_AlbinoLeftSide },
    { name: "Dark Brown", src: AmericanAlligator_DarkBrownLeftSide },
    { name: "Melanistic", src: AmericanAlligator_MelanisticLeftSide },
    { name: "Olive", src: AmericanAlligator_OliveLeftSide },
    { name: "Piebald Variation 1 (Left)", src: AmericanAlligator_PiebaldVariation1LeftSide },
    { name: "Piebald Variation 1 (Right)", src: AmericanAlligator_PiebaldVariation1RightSide },
    { name: "Piebald Variation 2 (Left)", src: AmericanAlligator_PiebaldVariation2LeftSide },
    { name: "Piebald Variation 2 (Right)", src: AmericanAlligator_PiebaldVariation2RightSide },
    { name: "Piebald Variation 3 (Left)", src: AmericanAlligator_PiebaldVariation3LeftSide },
    { name: "Piebald Variation 3 (Right)", src: AmericanAlligator_PiebaldVariation3RightSide },
    { name: "Piebald Variation 4 (Left)", src: AmericanAlligator_PiebaldVariation4LeftSide },
    { name: "Piebald Variation 4 (Right)", src: AmericanAlligator_PiebaldVariation4RightSide },
    { name: "Piebald Variation 5 (Left)", src: AmericanAlligator_PiebaldVariation5LeftSide },
    { name: "Piebald Variation 5 (Right)", src: AmericanAlligator_PiebaldVariation5RightSide },
  ];

  // Tips Data
  const tipsData = [
    "Shooting in the tail would not be advised. The tail is long, provides no vital organs to hit, and it is unlikely any gun can penetrate all the way through the tail to the liver/lungs.",
    "8-10 Alligators will run away, but if you're close enough they have the advantage of being undetectable while submerged in water (may attack on land also) they may attack. A issue with hunting these reptiles is that once they are spooked, they will quickly run into the lake/river/pond (Depending where you're hunting) and submerge itself. Here is how to shoot one and put down: If it is facing you or is in a position you could go for the head, a brain/skull shot will put it down quickly or it will run and die later. If it is not facing you, instead going left or right, go for the chest.",
    "The American Alligator is one of the few animals that should be killed by a brain shot, due to the fact, that heart shots are almost impossible to land. The final score will not be negatively affected by said brain shots. It is the toughest animal to get a vital organ, and as such, it is not advised to use soft point bullets, use instead something that can penetrate the scales. It is one of the only animals in the game where hitting the liver is technically speaking a vital organ, but will not bring down the animal at all."
  ];

  // Trivia Data
  const triviaData = [
    "The word Alligator is derived from the Spanish word el lagarto which means the lizard. Apparently in the 1930s, Alligators refered to people who were lovers of swing music.",
    "The American Alligator is one of only two extant species in the genus Alligator. The other is the smaller Chinese Alligator.",
    "America, and specifically South Florida, is the only place in the world where both Alligators and Crocodiles live together.",
    "Despite the American Alligator deriving its scientific name form the state of Mississippi, said state boasts one of the smallest populations in the country. Only about 32,000 Alligators live in Mississippi."
  ];

  // References Data
  const referencesData = [
    "vocabulary.com",
    "britannica.com",
    "usgs.gov",
    "worldpopulationreview.com"
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
          <span>American Alligator</span>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">American Alligator</div>
            <div className="wiki-sidebar-image">
              <img src={AmericanAlligatorMain} alt="American Alligator" />
            </div>
            
            <div className="wiki-sidebar-header">General Information</div>
            
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Class</span>
              <span><img src={class7Icon} alt="Class 7" className="wiki-class-icon-lg"/>7</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Difficulty</span>
              <span>2: Minor — 9: Legendary</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Trophy Type</span>
              <span>Length</span>
              <div className="wiki-trophy-grid">
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-silver">◆ Silver</span>
                  <span>226</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-gold">☗ Gold</span>
                  <span>378</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-diamond">☗ Diamond</span>
                  <span>492</span>
                </div>
              </div>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Weight</span>
              75kg — 530kg<br/>
              <span className="wiki-sidebar-muted">165lbs — 1168lbs</span>
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Skin</span>
               <span className="wiki-fs-sm">
                 Albino, Dark-Brown, Melanistic, Olive, Piebald
               </span>
            </div>

            <div className="wiki-sidebar-header">Locations</div>
            <div className="wiki-sidebar-section">
               <div className="wiki-mb-4"><span className="wiki-link">Mississippi Acres Preserve</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main className="wiki-main">

            {/* Quote Block */}
            <div className="wiki-quote">
              "The American Alligator is the apex predator of its range across southeastern United States where it can be found in rivers, lakes, freshwater swamps and marshes. Informally called "Gator" they consume fish, birds and mammals but at their peak size they consider any animal near their habitat a potential target. Both alligators and crocodiles perform a "death roll" where they rotate their body to rip of pieces of flesh from their prey. Alligator sex is determined by the temperature at which they develop during incubation. Alligators are difficult to kill and they will retreat to deep water if wounded. The best way of dispatching a gator is via brain shot, or by shooting at the first or second vertebrae at the base of the head."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-p-mb">
              The <strong>American Alligator</strong> is a <span className="wiki-link">Class 7</span> reptile in the order Crocodylia. It is the first huntable reptile and the first crocodilian to be introduced to the game, predating the <span className="wiki-link">Saltwater Crocodile</span>. They can be hunted on <span className="wiki-link">Mississippi Acres Preserve</span>.
            </p>

            {/* Table of Contents */}
            <div className="wiki-toc">
              <div className="wiki-toc-title">
                🔢 Contents <span className="wiki-toc-toggle">[hide]</span>
              </div>
              <ol className="wiki-toc">
                <li><a href="#features" onClick={(e)=>scrollToId(e,'features')} className="wiki-link">Features</a></li>
                <li><a href="#need-zones" onClick={(e)=>scrollToId(e,'need-zones')} className="wiki-link">Need Zone Times</a></li>
                <li><a href="#scute-variants" onClick={(e)=>scrollToId(e,'scute-variants')} className="wiki-link">Scute Variants</a></li>
                <li><a href="#scute-rarity" onClick={(e)=>scrollToId(e,'scute-rarity')} className="wiki-link">Scute Variant Rarity</a></li>
                <li><a href="#tips" onClick={(e)=>scrollToId(e,'tips')} className="wiki-link">Tips</a></li>
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
                        <tr><th colSpan="2" className="wiki-th wiki-th-center">Mississippi Acres Preserve</th></tr>
                        <tr>
                            <th className="wiki-th wiki-th-alt">Time</th>
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

            {/* SCUTE VARIANTS (Gallery) */}
            <h2 className="wiki-h2" id="scute-variants">Scute Variants</h2>
            <div className="wiki-gallery-grid">
              {scuteGallery.map((item, i) => (
                <div key={i} className="wiki-gallery-item">
                  <div className="wiki-gallery-placeholder">
                    <img src={item.src} alt={item.name} className="wiki-img-contain" />
                  </div>
                  <span className="wiki-gallery-label">{item.name}</span>
                </div>
              ))}
            </div>

            {/* SCUTE VARIANT RARITY TABLE */}
            <h2 id="scute-rarity" className="wiki-h2">Scute Variant Rarity</h2>
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
                                Olive (74.03%)<br/>
                                Dark Brown (24.78%)
                            </td>
                            <td className="wiki-td">
                                X
                            </td>
                            <td className="wiki-td">
                                Piebald Variation 1 (0.20%)<br/>
                                Piebald Variation 2 (0.20%)<br/>
                                Piebald Variation 3 (0.20%)<br/>
                                Piebald Variation 4 (0.20%)<br/>
                                Piebald Variation 5 (0.20%)<br/>
                                Albino (0.10%)<br/>
                                Melanistic (0.10%)
                            </td>
                            <td className="wiki-td">
                                X
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* TIPS */}
            <h2 id="tips" className="wiki-h2">Tips</h2>
            {tipsData.map((tip, i) => (
                <p key={i} className="wiki-mb-15">{tip}</p>
            ))}

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

export default AmericanAlligator;