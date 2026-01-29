import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import DrinkingZoneIcon from '../../../assets/DrinkingZoneIcon.webp';
import class9Icon from '../../../assets/Class9Icon.webp'; // Class 9 for Wild Yak
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import WildYakMain from '../../../assets/Yak.webp';
import ShotSchemeImg from '../../../assets/Wild_Yak_shot_scheme.webp';

// Fur Variant Images
import WildYak_Albino1 from '../../../assets/WildYak_AlbinoVariation1RightSide.webp';
import WildYak_Albino2 from '../../../assets/WildYak_AlbinoVariation2RightSide.webp';
import WildYak_DarkBrown from '../../../assets/WildYak_DarkBrownRightSide.webp';
import WildYak_DarkRed from '../../../assets/WildYak_DarkRedRightSide.webp';
import WildYak_DarkRedBrown from '../../../assets/WildYak_DarkRedBrownRightSide.webp';
import WildYak_Gold from '../../../assets/WildYak_GoldRightSide.webp';
import WildYak_JetBlack from '../../../assets/WildYak_JetBlackRightSide.webp';
import WildYak_JetBrown from '../../../assets/WildYak_JetBrownRightSide.webp';
import WildYak_LeucisticRight from '../../../assets/WildYak_LeucisticRightSide.webp';
import WildYak_LeucisticLeft from '../../../assets/WildYak_LeucisticLeftSide.webp';


const WildYak = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  const needZonesData = [
    {
      name: "Sundarpatan",
      schedule: [
        { time: "00:00 - 04:00", type: "Resting", icon: RestingZoneIcon },
        { time: "04:00 - 08:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "08:00 - 12:00", type: "Drinking", icon: DrinkingZoneIcon },
        { time: "12:00 - 16:00", type: "Resting", icon: RestingZoneIcon },
        { time: "16:00 - 20:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "20:00 - 00:00", type: "Resting", icon: RestingZoneIcon },
      ]
    }
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Generally avoid humans but can be very aggressive and deadly if provoked" },
    { label: "Habitat", value: "Alpine Tundra" },
    { label: "Senses", value: "Poor eyesight, well-developed sense of smell and outstanding hearing" },
    { label: "Social", value: "Social animals that live in herds, males tend to be solitary" },
    { label: "Active", value: "Daytime" },
    { label: "Recommended Equipment", value: "Class 9 Ammo" },
    { label: "Species", value: "Bos mutus", italic: true, isLink: true },
    { label: "Difficulty", value: "Very hard" },
  ];

  // Fur Gallery Data
  const furGallery = [
    { name: "Albino Variation 1", src: WildYak_Albino1 },
    { name: "Albino Variation 2", src: WildYak_Albino2 },
    { name: "Dark Brown", src: WildYak_DarkBrown },
    { name: "Dark Red", src: WildYak_DarkRed },
    { name: "Dark Red Brown", src: WildYak_DarkRedBrown },
    { name: "Gold", src: WildYak_Gold },
    { name: "Jet Black", src: WildYak_JetBlack },
    { name: "Jet Brown", src: WildYak_JetBrown },
    { name: "Leucistic (Right)", src: WildYak_LeucisticRight },
    { name: "Leucistic (Left)", src: WildYak_LeucisticLeft },
  ];

  // Trivia Data
  const triviaData = [
    "The word 'YAK' comes from the Tibetan word གཡག་ (yag), presumably what the Tibetans call the animal.",
    "It's scientific name, Bos mutus, means \"Mute Ox\" as for account of how uniquely quite this bovine is. Ironically its domestic descendent, Bos grunniens, means \"Grunting Ox\".",
    "A female Yak is called a \"Nak\".",
    "The Yak's importance to the culture of eastern civilization can not be understated. Its milk is used to make a Mongolian liquor called \"Milk Wine\" (or Arkhi: ཨ་རག་). Its long hair is used to make fake beards for Chinese operas. And it is even the star of a new fangled Mongolian sport called \"YAK POLO\"... it's like regular Polo... but with Yaks!",
    "Despite having a domestic population of over 15 MILLION, the Wild Yak only has an estimated 7,000 - 10,000 individuals left in the wild. The IUCN (International Union for Conservation of Nature) currently lists them as vulnerable.",
    "The Yak is an uniquely robust cow species. It not only has 3x TIMES the lung capacity of most cattle; but it also has much smaller and more numerous red blood cells. In practice, this means the Yak can carry more oxygen in its body and transport it more efficiently."
  ];

  // References Data
  const referencesData = [
    "Wild Yak Need Zones, Sundarpatan",
    "https://a-z-animals.com/animals/yak/",
    "https://www.oliver-charles.com/blogs/repeat/yak-wool-7-facts-about-the-unsung-hero-of-the-himalayas",
    "https://en.wikipedia.org/wiki/Yak",
    "https://thecuriousyak.com/blogs/our-journal/15-facts-about-yaks",
    "https://www.khunu.com/pages/yak-facts",
    "https://en.wikipedia.org/wiki/Arkhi",
    "https://www.treehugger.com/yak-facts-4869734",
    "https://www.iucnredlist.org/species/2892/101293528",
    "https://www.britannica.com/animal/yak"
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
          <span>Wild Yak</span>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Wild Yak</div>
            <div className="wiki-sidebar-image">
              <img src={WildYakMain} alt="Wild Yak" />
            </div>
            
            <div className="wiki-sidebar-header">General Information</div>
            
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Class</span>
              <span><img src={class9Icon} alt="Class 9" className="wiki-class-icon-lg"/>9</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Difficulty</span>
              <span>1: Trivial — 9: Legendary</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Trophy Type</span>
              <span>Horns</span>
              <div className="wiki-trophy-grid">
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-silver">◆ Silver</span>
                  <span>174.60</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-gold">☗ Gold</span>
                  <span>230.96</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-diamond">☗ Diamond</span>
                  <span>273.23</span>
                </div>
              </div>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Weight</span>
              0kg — 1200kg<br/>
              <span className="wiki-sidebar-muted">0lbs — 2646lbs</span>
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Fur</span>
               <span className="wiki-fs-sm">
                 Albino, Dark Brown, Dark Red, Dark Red Brown, Gold, Jet Black, Jet Brown, Leucistic
               </span>
            </div>

            <div className="wiki-sidebar-header">Locations</div>
            <div className="wiki-sidebar-section">
               <div className="wiki-mb-4"><span className="wiki-link">Sundarpatan</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main className="wiki-main">

            {/* Quote Block */}
            <div className="wiki-quote">
              "The wild yak, a native species of the Himalayas, is a robust animal well-suited to its environment. With its broad hooves and strong legs, it can skillfully navigate steep and rocky slopes. These creatures are highly adaptable to freezing temperatures, enduring as low as -40 degrees F (-40 degrees C) by huddling together for warmth. Both males and females possess long, shaggy hair with a thick woolly undercoat on their chest, flanks, and thighs, providing insulation against the cold. They generally avoid humans, often fleeing for great distances if approached, but it is said that 'Wild yak shooting is as dangerous as it is exciting, for a wounded beast, especially an old bull, will often attack the pursuer.'"
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-p-mb">
              The <strong>Wild Yak</strong> is a (<span className="wiki-link">class 9</span>) cow species that can be hunted on <span className="wiki-link">Sundarpatan</span>.
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
                        <tr><th colSpan="2" className="wiki-th wiki-th-center">Sundarpatan[1]</th></tr>
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
                 <div className="wiki-shot-info">Blue - Kills very quick</div>
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
                                Dark Brown (24.95%)<br/>
                                Dark Red (24.95%)<br/>
                                Dark Red Brown (24.95%)
                            </td>
                            <td className="wiki-td">
                                Jet Black (12.50%)<br/>
                                Jet Brown (12.50%)
                            </td>
                            <td className="wiki-td">
                                X
                            </td>
                            <td className="wiki-td">
                                Gold (0.05%)<br/>
                                Leucistic (0.05%)<br/>
                                Albino Variation 1 (0.03%)<br/>
                                Albino Variation 2 (0.03%)
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

export default WildYak;