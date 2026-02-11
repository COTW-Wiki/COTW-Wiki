import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import DrinkingZoneIcon from '../../../assets/DrinkingZoneIcon.webp';
import class4Icon from '../../../assets/Class4Icon.webp'; // Class 4 for Snow Leopard
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import SnowLeopardMain from '../../../assets/Snow_Leopard.webp';
import ShotSchemeImg from '../../../assets/Snow_Leopard_shot_scheme.webp';
import SnowLeopardHoldingTail from '../../../assets/Snow_Leopard_Holding_Tail.webp';

// Fur Variant Images (Placeholders based on screenshots)
import SnowLeopard_Albino from '../../../assets/SnowLeopard_Albino.webp';
import SnowLeopard_Caramel from '../../../assets/SnowLeopard_Caramel.webp';
import SnowLeopard_Leucistic from '../../../assets/SnowLeopard_Leucistic.webp';
import SnowLeopard_Melanistic from '../../../assets/SnowLeopard_Melanistic.webp';
import SnowLeopard_Snow from '../../../assets/SnowLeopard_Snow.webp';


const SnowLeopard = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  const needZonesData = [
    {
      name: "Sundarpatan",
      schedule: [
        { time: "00:00 - 03:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "03:00 - 06:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "06:00 - 09:00", type: "Resting", icon: RestingZoneIcon },
        { time: "09:00 - 12:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "12:00 - 15:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "15:00 - 18:00", type: "Resting", icon: RestingZoneIcon },
        { time: "18:00 - 21:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "21:00 - 00:00", type: "Resting", icon: RestingZoneIcon },
      ]
    }
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Solitary ambush predator" },
    { label: "Habitat", value: "High-altitude mountainous terrain" },
    { label: "Senses", value: "Exceptional smell, keen hearing and excellent sight" },
    { label: "Social", value: "Solitary animal" },
    { label: "Active", value: "Dawn and dusk" },
    { label: "Recommended Equipment", value: "Class 4 Ammo" },
    { label: "Species", value: "Panthera uncia", italic: true, isLink: true },
    { label: "Difficulty", value: "Hard" },
  ];

  // Fur Gallery Data
  const furGallery = [
    { name: "Albino", src: SnowLeopard_Albino },
    { name: "Caramel", src: SnowLeopard_Caramel },
    { name: "Leucistic", src: SnowLeopard_Leucistic },
    { name: "Melanistic", src: SnowLeopard_Melanistic },
    { name: "Snow", src: SnowLeopard_Snow },
  ];

  // Trivia Data
  const triviaData = [
    "In Nepali, the Snow Leopard is called the \"Hiu Cituva\" (हिउँ चितुवा)",
    "Despite its name, Snow Leopards are actually more closely related to Tigers than African Leopards.",
    "Like its scientific name suggests (uncia means \"UNIQUE\" in latin), there are many things that make this cat special. For example, the Snow Leopard is the only species of \"Big Cat\" (Genus: Panthera) that lacks the ability to roar. It lives at extreme elevations, with some individuals spotted at a whopping 18,000ft above sea level. Even the Mountain Lion can only live at a maximum altitude of \"just\" 10,000ft. Its tail is the longest among cats; and this extremely long tail helps it with warmth regulation, counter balancing, and can even be used as a vessel to store extra fat. (like a Camel's Hump)",
    "Snow Leopards also have this bizarre behavior of carrying/holding their tails in their mouths. No one knows why they do this, but it gives me an excuse to put this cute picture of a Snow Leopard holding its tail... You're Welcome!",
    "China is home to the largest Snow Leopard population in the world. And perhaps it was this feline that helped inspire the Ancient Chinese to create 'Leopard Fist Kung Fu' (豹拳 \"Bàoquán\"). Tai Lung from Kung Fu Panda is a Snow Leopard.",
    "The Snow Leopard is listed on IUCN's (International Union for Conservation of Nature) Red List as 'Vulnerable'. As such, it is protected species in many countries; with most countries, including Nepal, out right banning recreational hunting of this animal... unless you have special permission... *Wink *Wink",
    "Snow Leopards Are notoriously rare and elusive in real life. And this fact is reflected through gameplay; as there are only ever 10 Snow Leopards on Sundarpatan at any given moment. This makes it the rarest animal in the game."
  ];

  // References Data
  const referencesData = [
    "Snow Leopard Need Zones, Sundarpatan",
    "https://www.wisdomlib.org/gallery/imm-flora-and-fauna/252",
    "https://snowleopardnetwork.org/2010/02/15/tigers-evolved-with-snow-leopards-gene-study-reveals-several-articles/",
    "https://www.wwf.org.uk/learn/fascinating-facts/snow-leopards",
    "https://animals.sandiegozoo.org/animals/snow-leopard",
    "https://www.tnc.org.hk/en-hk/what-we-do/our-priorities/world-snow-leopard-day/",
    "https://www.fs.usda.gov/visit/know-before-you-go/mountain-lions",
    "https://www.guinnessworldrecords.com/world-records/404099-longest-tail-on-a-big-cat-in-proportion-to-body-size",
    "https://snowleopard.org/our-work/where-we-work/china/",
    "https://en.wikipedia.org/wiki/Leopard_kung_fu",
    "https://www.iucnredlist.org/fr/species/22732/50664030",
    "https://www.sciencedirect.com/science/article/abs/pii/B9780323857758000157",
    "https://kathmandupost.com/money/2024/05/26/nepal-s-only-hunting-reserve-is-back-in-business",
    "Expansive Worlds animal introduction"
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
          <span>Snow Leopard</span>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Snow Leopard</div>
            <div className="wiki-sidebar-image">
              <img src={SnowLeopardMain} alt="Snow Leopard" />
            </div>
            
            <div className="wiki-sidebar-header">General Information</div>
            
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Class</span>
              {/* Cited from screenshot 205329 */}
              <span><img src={class4Icon} alt="Class 4" className="inline-block wiki-class-icon-sm align-middle mr-1.5" />4</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Difficulty</span>
              {/* Cited from screenshot 205329 */}
              <span>1: Trivial — 9: Legendary</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Trophy Type</span>
              <span>Skull</span>
              <div className="wiki-trophy-grid">
                {/* Cited from screenshot 205329 */}
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-silver">◆ Silver</span>
                  <span>22</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-gold">☗ Gold</span>
                  <span>26</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-diamond">☗ Diamond</span>
                  <span>29</span>
                </div>
              </div>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Weight</span>
              {/* Cited from screenshot 205329 */}
              0kg — 75kg<br/>
              <span className="wiki-sidebar-muted">0lbs — 165lbs</span>
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Fur</span>
               {/* Cited from screenshot 205329 */}
               <span className="wiki-fs-sm">
                 Albino, Caramel, Leucistic, Melanistic, Snow
               </span>
            </div>

            <div className="wiki-sidebar-header">Locations</div>
            <div className="wiki-sidebar-section">
               {/* Cited from screenshot 205329 */}
               <div className="wiki-mb-4"><span className="wiki-link">Sundarpatan</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main className="wiki-main">

            {/* Quote Block */}
            <div className="wiki-quote">
              "The ever so elusive Panthera uncia, more commonly known as the Snow Leopard, reigns over the harsh, rugged terrains of Central Asia. Majestically cloaked in thick, smoky-gray fur with black rosettes, weighing between 27 - 55 kg and with a body length of 1 - 1.5 meters, it is designed for survival in the icy wilderness. These solitary predators move with a feline grace that contradicts their formidable strength, constantly scanning the horizon for blue sheep or tahr - their primary prey. Spotting this high-altitude dweller is no small feat; their stealth and rarity have earned them the spectral nickname: The ghost of the mountains."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-p-mb">
              The <strong>Snow Leopard</strong> is a (<span className="wiki-link">class 4</span>) cat species that can be hunted on <span className="wiki-link">Sundarpatan</span>.
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
                <li><a href="#variant-rarity" onClick={(e)=>scrollToId(e,'variant-rarity')} className="wiki-link">Fur Variant Rarity</a></li>
                <li><a href="#hunting-information" onClick={(e)=>scrollToId(e,'hunting-information')} className="wiki-link">Hunting Information</a></li>
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
                        <tr><th colSpan="2" className="wiki-th wiki-th-center">Sundarpatan</th></tr>
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
            <h2 className="wiki-h2" id="variant-rarity">Fur Variant Rarity</h2>
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
                        {/* Combined Male/Female Row */}
                        <tr>
                            <td className="wiki-td wiki-td-muted">
                                Male<span className="wiki-text-divider">/</span><span className="wiki-text-female">Female</span>
                            </td>
                            <td className="wiki-td">
                                Snow (73.80%)
                            </td>
                            <td className="wiki-td">
                                Caramel (25.00%)
                            </td>
                            <td className="wiki-td">
                                Leucistic (0.50%)<br/>
                                Melanistic (0.50%)
                            </td>
                            <td className="wiki-td">
                                Albino (0.20%)
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* HUNTING INFORMATION */}
            <h2 className="wiki-h2" id="hunting-information">Hunting Information</h2>
            <p className="wiki-mb-20">
                Due to the lack of a drink time hunting this elusive species becomes very difficult to hunt or grind. There are approximately only ten snow leopards on the map at one time with approximately 5 of both genders (note: this is not confirmed). The best hunting strategy is to run in known hot spot areas on the top third of <span className="wiki-link">Sundarpatan</span> until a warning call appears on screen. You can then either track the animal and take a shot due to the animals relatively slow running speed or you can backtrack and follow its tracks to a nearby feed or rest zone which you can then hunt the animal from.
            </p>

            {/* TRIVIA */}
            <h2 className="wiki-h2" id="trivia">Trivia</h2>
            <ul className="wiki-ul wiki-ul-disc">
              {triviaData.map((point, idx) => (
                <React.Fragment key={idx}>
                  <li className="wiki-mb-10">{point}</li>
                  {idx === 2 && (
                    <div style={{display: 'flex', justifyContent: 'center', margin: '12px 0'}}>
                      <img src={SnowLeopardHoldingTail} alt="Snow Leopard holding tail" style={{width: '180px', height: '114px', objectFit: 'cover'}} />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </ul>

            {/* REFERENCES */}
            <h2 className="wiki-h2" id="references">References</h2>
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

export default SnowLeopard;