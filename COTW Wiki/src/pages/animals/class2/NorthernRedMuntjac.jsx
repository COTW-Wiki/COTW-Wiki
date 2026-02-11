import React from 'react'; 


// --- IMPORTS --- // 
// Standard Icons //
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp'; 
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp'; 
import DrinkingZoneIcon from '../../../assets/DrinkingZoneIcon.webp'; 
// Added Drinking Icon //

import class2Icon from '../../../assets/Class2Icon.webp';
 // Updated to Class 2 
 
 import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

  // Main Image 
  import NorthernRedMuntjacMain from '../../../assets/Northern_Red_Muntjac.webp'; 
  import ShotSchemeImage from '../../../assets/Northern_Red_Muntjac_shot_scheme.webp'; 

  // Fur Variant Images (Placeholders)

    // Male 
    import Muntjac_Male_Albino from '../../../assets/NorthernRedMuntjac_AlbinoMale.webp'; 
    import Muntjac_Male_Leucistic1 from '../../../assets/NorthernRedMuntjac_LeucisticVariation1Male.webp'; 
    import Muntjac_Male_Leucistic2 from '../../../assets/NorthernRedMuntjac_LeucisticVariation2Male.webp'; 
    import Muntjac_Male_Melanistic from '../../../assets/NorthernRedMuntjac_MelanisticMale.webp'; 
    import Muntjac_Male_Red1 from '../../../assets/NorthernRedMuntjac_RedVariation1Male.webp'; 
    import Muntjac_Male_Red2 from '../../../assets/NorthernRedMuntjac_RedVariation2Male.webp'; 

    // Female 
    import Muntjac_Female_Albino from '../../../assets/NorthernRedMuntjac_AlbinoFemale.webp'; 
    import Muntjac_Female_Leucistic1 from '../../../assets/NorthernRedMuntjac_LeucisticVariation1Female.webp'; 
    import Muntjac_Female_Leucistic2 from '../../../assets/NorthernRedMuntjac_LeucisticVariation2Female.webp'; 
    import Muntjac_Female_Melanistic from '../../../assets/NorthernRedMuntjac_MelanisticFemale.webp'; 
    import Muntjac_Female_Red1 from '../../../assets/NorthernRedMuntjac_RedVariation1Female.webp'; 
    import Muntjac_Female_Red2 from '../../../assets/NorthernRedMuntjac_RedVariation2Female.webp';


const NorthernRedMuntjac = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  const needZonesData = [
    {
      name: "Sundarpatan",
      schedule: [
        { time: "00:00 - 03:00", type: "Resting", icon: RestingZoneIcon },
        { time: "03:00 - 06:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "06:00 - 09:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "09:00 - 12:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "12:00 - 15:00", type: "Resting", icon: RestingZoneIcon },
        { time: "15:00 - 18:00", type: "Drinking", icon: DrinkingZoneIcon },
        { time: "18:00 - 21:00", type: "Resting", icon: RestingZoneIcon },
        { time: "21:00 - 00:00", type: "Resting", icon: RestingZoneIcon },
      ]
    }
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Elusive and robust" },
    { label: "Habitat", value: "Dense forests" },
    { label: "Senses", value: "Excellent eyesight and sense of hearing" },
    { label: "Social", value: "Primarily solitary, can be found in family groups" },
    { label: "Active", value: "Dawn and dusk" },
    { label: "Recommended Equipment", value: "Class 2 Ammo, Roe Deer Caller" },
    { label: "Species", value: "Muntiacus vaginalis", italic: true, isLink: true },
    { label: "Difficulty", value: "Easy" },
  ];

  // Fur Gallery Data
  const furGallery = [
    { name: "Albino - Male", src: Muntjac_Male_Albino },
    { name: "Leucistic Variation 1 - Male", src: Muntjac_Male_Leucistic1 },
    { name: "Leucistic Variation 2 - Male", src: Muntjac_Male_Leucistic2 },
    { name: "Melanistic - Male", src: Muntjac_Male_Melanistic },
    { name: "Red Variation 1 - Male", src: Muntjac_Male_Red1 },
    { name: "Red Variation 2 - Male", src: Muntjac_Male_Red2 },
    { name: "Albino - Female", src: Muntjac_Female_Albino },
    { name: "Leucistic Variation 1 - Female", src: Muntjac_Female_Leucistic1 },
    { name: "Leucistic Variation 2 - Female", src: Muntjac_Female_Leucistic2 },
    { name: "Melanistic - Female", src: Muntjac_Female_Melanistic },
    { name: "Red Variation 1 - Female", src: Muntjac_Female_Red1 },
    { name: "Red Variation 2 - Female", src: Muntjac_Female_Red2 },
  ];

  // Split galleries by sex for sub-topics
  const maleGallery = furGallery.filter(item => /Male/i.test(item.name));
  const femaleGallery = furGallery.filter(item => /Female/i.test(item.name));

  // Smooth scroll helper for in-page TOC links
  const scrollToId = (id) => (e) => {
    if (e && e.preventDefault) e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (typeof window !== 'undefined' && window.history && window.history.replaceState) {
      window.history.replaceState(null, '', `#${id}`);
    }
  };

  // Trivia Data
  const triviaData = [
    `The Muntjac Deer gets it's name 'MUNTJAC' from the Dutch, which borrowed the word from the Sundanese word for a "small deer"; specifically the "Chevrotain" or "Mouse Deer". The reason for why the Muntjac got associated with this animal is uncertain. Maybe traders, of the Dutch East India company, just thought it was a generic term for ALL small deer. Ironically, the Mouse Deer isn't even a real deer.[2]`,
    `There are currently 12 known species of Muntjac Deer alive today. One of these species include the smallest Deer species in the world, the "Chinese Muntjac"; a deer species so small, it's standing height would be dwarfed by Shaquille O'Neal's shoe size, and it's average weight wouldn't be any heavier than a 2 year old Toddler.[3][4][5][6][7]`,
    `The Muntjac Deer has many distinct physical traits; one of these being its "fangs". It uses these as display structures, as weapons for intraspecific combat, and their fangs also have the convenient ability to HINGE AT THE JAW LIKE A SNAKE! THAT'S RIGHT! THEY CAN FOLD AWAY THEIR FANGS LIKE SOME KIND OF SWISS ARMY KNIF!!!... Anyway they also have extremely pronounced scent glands on their foreheads and at the corners of their eyes. In fact, their top scent glands can inflate, making them the only deer species with inflatable structures on their body. Despite them being called "Barking Deer" these deer are relatively quiet, and overly rely on scent as their primary form of communication. [8][9][10]`,
    `Yet another bizarre fact about this animal is the fact that it does not have a defined rutting season. They mate year round unlike most other deer. The females are also extremely fertile, being able to conceive again just days after giving birth.[11]`
  ];

  // References List
  const references = [
    "Northern Red Muntjac Need Zones, Sundarpatan",
    "https://www.dictionary.com/browse/muntjac",
    "https://news.mongabay.com/2020/08/the-large-antlered-muntjac-southeast-asias-mystery-deer-commentary/",
    "https://www.rosamondgiffordzoo.org/experience/animals/mammals/chinese-muntjac/",
    "https://seaworld.org/animals/facts/mammals/reeves-muntjac/",
    "https://footwearnews.com/shoes/outdoor-footwear/shaq-shoe-size-1202540386/",
    "https://www.whattoexpect.com/toddler/24-month-old.aspx",
    "https://www.discoverwildlife.com/animal-facts/mammals/muntjac-deer",
    "https://www.iflscience.com/muntjac-deer-have-bizarre-flaring-scent-glands-on-their-face-67030",
    "https://www.sciencefocus.com/nature/muntjac-deer",
    "https://www.woodlandtrust.org.uk/trees-woods-and-wildlife/animals/mammals/muntjac-deer/"
  ];

  return (
    <div className="wiki-page">
      <div className="wiki-inner">
        
        {/* PAGE HEADER */}
        <div className="wiki-header">
          <span>Northern Red Muntjac</span>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Northern Red Muntjac</div>
            <div className="wiki-sidebar-image">
              <img src={NorthernRedMuntjacMain} alt="Northern Red Muntjac" />
            </div>
            
            <div className="wiki-sidebar-header">General Information</div>
            
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Class</span>
              <span><img src={class2Icon} alt="Class 2" className="inline-block wiki-class-icon-sm align-middle mr-1.5" />2</span>
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
                  <span>25.25</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-gold">☗ Gold</span>
                  <span>30.96</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-diamond">☗ Diamond</span>
                  <span>35.24</span>
                </div>
              </div>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Weight</span>
              12kg — 28kg<br/>
              <span className="wiki-sidebar-muted">26lbs — 62lbs</span>
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Fur</span>
               <span className="wiki-fs-sm">
                  Albino, Leucistic, Melanistic, Red
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
              "The Northern Red Muntjac is a distinct and stealthy deer species primarily found in the dense forests of Southern Asia. Despite its small size, this elusive creature is sturdy, measuring approcimately 50-65 cm at the shoulder and weighing between 12-28kg. Its reddish-brown fur and cream-colored underparts provide natural camouflage in the undergrowth.

              <br/><br/>

              The male is easily recognizable by its elongated upper canines and short antlers. They are solitary or pair-oriented and are most active during dusk and dawn. Their unique bark-like call is a clear sign of their presence. Renowned for their agility and quickness, they require patience to outsmart. The true value of hunting them lies in the pursuit itself."
              <br/><br/>
              ― In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-p-mb">
              The <strong>Northern Red Muntjac</strong> is a (<span className="wiki-link">class 2</span>) deer species that can be hunted on <span className="wiki-link">Sundarpatan</span>.
            </p>

            {/* Table of Contents (smooth-scroll links) */}
            <div className="wiki-toc">
              <div className="wiki-toc-title">
                🔢 Contents <span className="wiki-toc-toggle">[hide]</span>
              </div>
              <ol className="wiki-toc">
                <li><a href="#features" className="wiki-link" onClick={scrollToId('features')}>Features</a></li>
                <li><a href="#need-zones" className="wiki-link" onClick={scrollToId('need-zones')}>Need Zone Times</a></li>
                <li><a href="#shot-scheme" className="wiki-link" onClick={scrollToId('shot-scheme')}>Shot scheme</a></li>
                <li>
                  <a href="#fur-variants" className="wiki-link" onClick={scrollToId('fur-variants')}>Fur variants</a>
                  <ol style={{margin:'6px 0 0 14px', paddingLeft: '0', color: '#6fb2e6', listStyleType: 'none'}}>
                    <li><a href="#fur-male" className="wiki-link" onClick={scrollToId('fur-male')}>4.1 Male</a></li>
                    <li><a href="#fur-female" className="wiki-link" onClick={scrollToId('fur-female')}>4.2 Female</a></li>
                  </ol>
                </li>
                <li><a href="#variant-rarity" className="wiki-link" onClick={scrollToId('variant-rarity')}>Fur Variant Rarity</a></li>
                <li><a href="#trivia" className="wiki-link" onClick={scrollToId('trivia')}>Trivia</a></li>
                <li><a href="#references" className="wiki-link" onClick={scrollToId('references')}>References</a></li>
              </ol>
            </div>

            {/* FEATURES */}
            <h2 id="features" className="wiki-h2">Features</h2>
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
            <h2 id="need-zones" className="wiki-h2">Need Zone Times</h2>
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

             {/* SHOT SCHEME - Updated Layout with Legend */}
             <h2 id="shot-scheme" className="wiki-h2">Shot scheme</h2>
            <div className="wiki-shot-container">
                <div className="wiki-shot-container">
                   <img src={ShotSchemeImage} alt="Shot Scheme" className="wiki-shot-scheme-img-sm" />
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
            <h2 id="fur-variants" className="wiki-h2">Fur variants</h2>

            <h3 id="fur-male" className="wiki-h3 mt-2.5 text-[1.15rem] border-b-0">Male</h3>
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

            <h3 id="fur-female" className="wiki-h3 mt-4.5 text-[1.15rem] border-b-0">Female</h3>
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
                        <tr>
                            <td className="wiki-td wiki-td-muted">
                                Male/<span className="wiki-text-female">Female</span>
                            </td>
                            <td className="wiki-td">
                                Red Variation 1 (49.87%)<br/>
                                Red Variation 2 (49.87%)
                            </td>
                            <td className="wiki-td">X</td>
                            <td className="wiki-td">X</td>
                            <td className="wiki-td">
                                Leucistic Variation 1 (0.07%)<br/>
                                Leucistic Variation 2 (0.07%)<br/>
                                Melanistic (0.07%)<br/>
                                Albino (0.05%)
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
               {references.map((ref, idx) => (
                  <li key={idx} className="wiki-mb-4">
                     <span className="wiki-link">↑ {ref}</span>
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

export default NorthernRedMuntjac;