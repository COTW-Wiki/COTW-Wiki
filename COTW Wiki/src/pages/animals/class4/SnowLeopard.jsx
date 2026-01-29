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

  // --- STYLES OBJECT ---
  const styles = {
    container: {
      backgroundColor: '#0b1a26',
      color: '#dbe4eb',
      fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      padding: '40px',
      minHeight: '100vh',
      lineHeight: '1.6',
    },
    innerWrapper: {
      maxWidth: '1200px',
      margin: '0 auto',
    },
    mainHeader: {
      fontSize: '2.5rem',
      fontWeight: '400',
      borderBottom: '1px solid #3a5a75',
      paddingBottom: '15px',
      marginBottom: '20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    layout: {
      display: 'flex',
      gap: '30px',
      alignItems: 'flex-start',
      flexDirection: 'row-reverse',
    },
    mainColumn: {
      flex: 1,
    },
    sidebarColumn: {
      width: '320px',
      flexShrink: 0,
      backgroundColor: '#0f2e48',
      border: '1px solid #1f405a',
      borderRadius: '4px',
    },
    sidebarHeader: {
      backgroundColor: '#05121c',
      padding: '12px',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: '1.1rem',
      borderBottom: '2px solid #cfaa3e',
    },
    sidebarImage: {
      height: '180px',
      backgroundColor: '#1f3a52',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#6fb2e6',
      fontStyle: 'italic',
      borderBottom: '1px solid #1f405a',
      position: 'relative',
    },
    sidebarSection: {
      padding: '10px 15px',
      borderBottom: '1px solid #2a4b63',
      fontSize: '0.95rem',
    },
    sidebarLabel: {
      fontWeight: 'bold',
      display: 'block',
      marginBottom: '5px',
      color: '#fff',
    },
    trophyGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '5px',
      marginTop: '5px',
      textAlign: 'center',
    },
    trophyItem: {
      backgroundColor: '#16334a',
      padding: '6px 2px',
      borderRadius: '4px',
    },
    trophyLabel: {
      fontSize: '0.75rem',
      display: 'block',
      fontWeight: 'bold',
      marginBottom: '2px',
    },
    silver: { color: '#bdc3c7' },
    gold: { color: '#f1c40f' },
    diamond: { color: '#3498db' },
    
    quoteBox: {
      fontStyle: 'italic',
      backgroundColor: '#0f2e48',
      borderLeft: '4px solid #3a5a75',
      padding: '15px 20px',
      margin: '0 0 20px 0',
      color: '#a4cce8',
    },
    link: {
      color: '#6fb2e6',
      textDecoration: 'none',
      cursor: 'pointer',
    },
    h2: {
      color: '#6fb2e6',
      borderBottom: '1px solid #3a5a75',
      paddingBottom: '5px',
      marginTop: '30px',
      marginBottom: '15px',
      fontSize: '1.5rem',
      display: 'flex',
      alignItems: 'center',
      fontWeight: '500',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      backgroundColor: '#0f2e48',
      fontSize: '0.95rem',
      marginBottom: '20px',
    },
    th: {
      backgroundColor: '#164060',
      padding: '10px 15px',
      textAlign: 'left',
      color: '#fff',
      borderBottom: '2px solid #3a5a75',
      fontWeight: 'bold',
    },
    td: {
      padding: '10px 15px',
      borderBottom: '1px solid #2a4b63',
      color: '#dbe4eb',
      verticalAlign: 'top',
    },
    galleryGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
      gap: '15px',
    },
    galleryItem: {
      backgroundColor: 'transparent',
    },
    galleryImgPlaceholder: {
      height: '180px',
      backgroundColor: '#2a4b63',
      border: '4px solid #1f3a52', 
      marginBottom: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
    },
    shotContainer: {
      display: 'flex',
      backgroundColor: '#112233',
      marginTop: '10px',
      border: '1px solid #1f405a',
      flexDirection: 'row',
      alignItems: 'stretch',
    },
    shotImageWrapper: {
      flex: 1,
      borderRight: '1px solid #1f405a',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#000',
    },
    shotLegend: {
      width: '240px',
      flexShrink: 0,
      display: 'flex',
      flexDirection: 'column',
    },
    legendHeader: {
      backgroundColor: '#162c46',
      padding: '10px',
      fontWeight: 'bold',
      borderBottom: '1px solid #1f405a',
      color: '#fff',
      fontSize: '0.95rem',
    },
    legendItem: {
      padding: '15px',
      borderBottom: '1px solid #1f405a',
      fontSize: '0.9rem',
      color: '#dbe4eb',
    },
    galleryLabel: {
      fontSize: '0.9rem',
      display: 'block',
      lineHeight: '1.2',
      textAlign: 'center'
    },
    rarityCommon: { color: '#2ecc71', fontWeight: 'bold' },
    rarityUncommon: { color: '#3498db', fontWeight: 'bold' },
    rarityRare: { color: '#9b59b6', fontWeight: 'bold' },
    rarityVeryRare: { color: '#e74c3c', fontWeight: 'bold' },
  };

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
    <div style={styles.container}>
      <div style={styles.innerWrapper}>
        
        {/* PAGE HEADER */}
        <div style={styles.mainHeader}>
          <span>Snow Leopard</span>
        </div>

        <div style={styles.layout}>
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside style={styles.sidebarColumn}>
            <div style={styles.sidebarHeader}>Snow Leopard</div>
            <div style={styles.sidebarImage}>
              <img src={SnowLeopardMain} alt="Snow Leopard" style={{width:'100%', height: '100%', objectFit: 'cover'}} />
            </div>
            
            <div style={styles.sidebarHeader}>General Information</div>
            
            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Class</span>
              {/* Cited from screenshot 205329 */}
              <span><img src={class4Icon} alt="Class 4" style={{width:'24px', height:'24px', verticalAlign: 'middle', marginRight: '6px'}}/>4</span>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Difficulty</span>
              {/* Cited from screenshot 205329 */}
              <span>1: Trivial — 9: Legendary</span>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Trophy Type</span>
              <span>Skull</span>
              <div style={styles.trophyGrid}>
                {/* Cited from screenshot 205329 */}
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.silver}}>◆ Silver</span>
                  <span>22</span>
                </div>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.gold}}>☗ Gold</span>
                  <span>26</span>
                </div>
                <div style={styles.trophyItem}>
                  <span style={{...styles.trophyLabel, ...styles.diamond}}>☗ Diamond</span>
                  <span>29</span>
                </div>
              </div>
            </div>

            <div style={styles.sidebarSection}>
              <span style={styles.sidebarLabel}>Weight</span>
              {/* Cited from screenshot 205329 */}
              0kg — 75kg<br/>
              <span style={{color: '#88a0b8', fontSize: '0.85rem'}}>0lbs — 165lbs</span>
            </div>

            <div style={styles.sidebarSection}>
               <span style={styles.sidebarLabel}>Fur</span>
               {/* Cited from screenshot 205329 */}
               <span style={{fontSize:'0.85rem'}}>
                 Albino, Caramel, Leucistic, Melanistic, Snow
               </span>
            </div>

            <div style={styles.sidebarHeader}>Locations</div>
            <div style={styles.sidebarSection}>
               {/* Cited from screenshot 205329 */}
               <div style={{marginBottom:'4px'}}><span style={styles.link}>Sundarpatan</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main style={styles.mainColumn}>

            {/* Quote Block */}
            <div style={styles.quoteBox}>
              "The ever so elusive Panthera uncia, more commonly known as the Snow Leopard, reigns over the harsh, rugged terrains of Central Asia. Majestically cloaked in thick, smoky-gray fur with black rosettes, weighing between 27 - 55 kg and with a body length of 1 - 1.5 meters, it is designed for survival in the icy wilderness. These solitary predators move with a feline grace that contradicts their formidable strength, constantly scanning the horizon for blue sheep or tahr - their primary prey. Spotting this high-altitude dweller is no small feat; their stealth and rarity have earned them the spectral nickname: The ghost of the mountains."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p style={{marginBottom:'20px'}}>
              The <strong>Snow Leopard</strong> is a (<span style={styles.link}>class 4</span>) cat species that can be hunted on <span style={styles.link}>Sundarpatan</span>.
            </p>

            {/* Table of Contents */}
            <div style={{
                border: '1px solid #3a5a75',
                backgroundColor: '#0f2e48',
                display: 'inline-block',
                padding: '10px 20px',
                borderRadius: '4px',
                minWidth: '200px',
                marginBottom: '30px'
            }}>
              <div style={{fontWeight:'bold', borderBottom: '1px solid #3a5a75', marginBottom: '5px'}}>
                🔢 Contents <span style={{float:'right', color: '#6fb2e6', fontSize:'0.8rem', cursor: 'pointer'}}>[hide]</span>
              </div>
              <ol style={{margin:'0', paddingLeft: '20px', color: '#6fb2e6'}}>
                <li><a href="#features" onClick={(e)=>scrollToId(e,'features')} style={styles.link}>Features</a></li>
                <li><a href="#need-zones" onClick={(e)=>scrollToId(e,'need-zones')} style={styles.link}>Need Zone Times</a></li>
                <li><a href="#shot-scheme" onClick={(e)=>scrollToId(e,'shot-scheme')} style={styles.link}>Shot scheme</a></li>
                <li><a href="#fur-variants" onClick={(e)=>scrollToId(e,'fur-variants')} style={styles.link}>Fur Variants</a></li>
                <li><a href="#variant-rarity" onClick={(e)=>scrollToId(e,'variant-rarity')} style={styles.link}>Fur Variant Rarity</a></li>
                <li><a href="#hunting-information" onClick={(e)=>scrollToId(e,'hunting-information')} style={styles.link}>Hunting Information</a></li>
                <li><a href="#trivia" onClick={(e)=>scrollToId(e,'trivia')} style={styles.link}>Trivia</a></li>
                <li><a href="#references" onClick={(e)=>scrollToId(e,'references')} style={styles.link}>References</a></li>
              </ol>
            </div>

            {/* FEATURES */}
            <h2 style={styles.h2} id="features">Features</h2>
            <table style={styles.table}>
              <thead>
                <tr>
                    <th style={{...styles.th, width: '25%'}}></th>
                    <th style={styles.th}>Description</th>
                </tr>
              </thead>
              <tbody>
                {features.map((item, index) => (
                  <tr key={index}>
                    <td style={{...styles.td, fontWeight: 'bold'}}>{item.label}</td>
                    <td style={{...styles.td, fontStyle: item.italic ? 'italic' : 'normal'}}>
                        {item.isLink ? <span style={styles.link}>{item.value}</span> : item.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            {/* NEED ZONE TIMES */}
            <h2 style={styles.h2} id="need-zones">Need Zone Times</h2>
            <div style={{display:'inline-block'}}>
                <table style={{...styles.table, width: '300px'}}>
                    <thead>
                        <tr><th colSpan="2" style={{...styles.th, textAlign: 'center'}}>Sundarpatan</th></tr>
                        <tr>
                            <th style={{...styles.th, backgroundColor: '#0f2e48'}}>Times</th>
                            <th style={{...styles.th, backgroundColor: '#0f2e48'}}>Activity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {needZonesData[0].schedule.map((zone, i) => (
                        <tr key={i}>
                            <td style={styles.td}>{zone.time}</td>
                            <td style={styles.td}>
                                <div style={{display:'flex', alignItems:'center'}}>
                                    <img src={zone.icon} alt={zone.type} style={{width:'20px', height: '20px', verticalAlign: 'middle', marginRight: '6px'}}/> 
                                    {zone.type}
                                </div>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* SHOT SCHEME */}
            <h2 style={styles.h2} id="shot-scheme">Shot scheme</h2>
            <div style={styles.shotContainer}>
               <div style={styles.shotImageWrapper}>
                 <img src={ShotSchemeImg} alt="Shot Scheme" style={{width: '100%', height: 'auto', maxHeight:'350px', objectFit: 'contain'}} />
               </div>
               <div style={styles.shotLegend}>
                 <div style={styles.legendHeader}>Color code</div>
                 <div style={styles.legendItem}>Red - Kills immediately</div>
                 <div style={styles.legendItem}>Blue - Kills very quick</div>
                 <div style={styles.legendItem}>Orange - Kills slowly</div>
                 <div style={{...styles.legendItem, borderBottom: 'none'}}>No Color - Unlikely to kill</div>
               </div>
            </div>

            {/* FUR VARIANTS (Gallery) */}
            <h2 style={styles.h2} id="fur-variants">Fur Variants</h2>
            <div style={styles.galleryGrid}>
              {furGallery.map((item, i) => (
                <div key={i} style={styles.galleryItem}>
                  <div style={styles.galleryImgPlaceholder}>
                    <img src={item.src} alt={item.name} style={{width:'100%', height: '100%', objectFit: 'contain'}} />
                  </div>
                  <span style={styles.galleryLabel}>{item.name}</span>
                </div>
              ))}
            </div>

            {/* FUR VARIANT RARITY TABLE */}
            <h2 style={styles.h2} id="variant-rarity">Fur Variant Rarity</h2>
            <div style={{overflowX: 'auto'}}>
                <table style={styles.table}>
                    <thead>
                        <tr>
                            <th style={styles.th}>Sex</th>
                            <th style={{...styles.th, ...styles.rarityCommon}}>Common</th>
                            <th style={{...styles.th, ...styles.rarityUncommon}}>Uncommon</th>
                            <th style={{...styles.th, ...styles.rarityRare}}>Rare</th>
                            <th style={{...styles.th, ...styles.rarityVeryRare}}>Very Rare</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Combined Male/Female Row */}
                        <tr>
                            <td style={{...styles.td, color: '#3498db', fontStyle: 'italic', fontWeight: 'bold'}}>
                                Male<span style={{color: '#dbe4eb'}}>/</span><span style={{color: '#d63384'}}>Female</span>
                            </td>
                            <td style={styles.td}>
                                Snow (73.80%)
                            </td>
                            <td style={styles.td}>
                                Caramel (25.00%)
                            </td>
                            <td style={styles.td}>
                                Leucistic (0.50%)<br/>
                                Melanistic (0.50%)
                            </td>
                            <td style={styles.td}>
                                Albino (0.20%)
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* HUNTING INFORMATION */}
            <h2 style={styles.h2} id="hunting-information">Hunting Information</h2>
            <p style={{marginBottom: '20px'}}>
                Due to the lack of a drink time hunting this elusive species becomes very difficult to hunt or grind. There are approximately only ten snow leopards on the map at one time with approximately 5 of both genders (note: this is not confirmed). The best hunting strategy is to run in known hot spot areas on the top third of <span style={styles.link}>Sundarpatan</span> until a warning call appears on screen. You can then either track the animal and take a shot due to the animals relatively slow running speed or you can backtrack and follow its tracks to a nearby feed or rest zone which you can then hunt the animal from.
            </p>

            {/* TRIVIA */}
            <h2 style={styles.h2} id="trivia">Trivia</h2>
            <ul style={{fontSize: '0.95rem', paddingLeft: '20px', listStyleType: 'disc', color: '#dbe4eb'}}>
              {triviaData.map((point, idx) => (
                <React.Fragment key={idx}>
                  <li style={{marginBottom: '10px'}}>{point}</li>
                  {idx === 2 && (
                    <div style={{display: 'flex', justifyContent: 'center', margin: '12px 0'}}>
                      <img src={SnowLeopardHoldingTail} alt="Snow Leopard holding tail" style={{width: '180px', height: '114px', objectFit: 'cover'}} />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </ul>

            {/* REFERENCES */}
            <h2 style={styles.h2} id="references">References</h2>
            <ol style={{fontSize: '0.95rem', paddingLeft: '20px', color: '#6fb2e6'}}>
                {referencesData.map((ref, idx) => (
                     <li key={idx} style={{marginBottom: '5px'}}>
                        <span style={{color: '#dbe4eb'}}>↑</span> <span style={styles.link}>{ref}</span>
                     </li>
                ))}
            </ol>

            <div style={{marginTop: '40px'}}>
                <AnimalsTableMini />
            </div>
            
          </main>
        </div>
      </div>
    </div>
  );
};

export default SnowLeopard;