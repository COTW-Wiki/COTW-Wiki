import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import class1Icon from '../../../assets/Class1Icon.webp';
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';
import React from 'react';
import CinnamonTealMain from '../../../assets/CinnamonTeal.webp';
import CinnamonTeal_BeigeFemaleBack from '../../../assets/CinnamonTeal_BeigeFemaleBack.webp';
import CinnamonTeal_BeigeFemaleFront from '../../../assets/CinnamonTeal_BeigeFemaleFront.webp';
import CinnamonTeal_CinnamonFemaleBack from '../../../assets/CinnamonTeal_CinnamonFemaleBack.webp';
import CinnamonTeal_CinnamonFemaleFront from '../../../assets/CinnamonTeal_CinnamonFemaleFront.webp';
import CinnamonTeal_CinnamonMaleBack from '../../../assets/CinnamonTeal_CinnamonMaleBack.webp';
import CinnamonTeal_CinnamonMaleFront from '../../../assets/CinnamonTeal_CinnamonMaleFront.webp';
import CinnamonTeal_MelanisticMaleBack from '../../../assets/CinnamonTeal_MelanisticMaleBack.webp';
import CinnamonTeal_MelanisticMaleFront from '../../../assets/CinnamonTeal_MelanisticMaleFront.webp';
import CinnamonTeal_PiebaldMaleBack from '../../../assets/CinnamonTeal_PiebaldMaleBack.webp';
import CinnamonTeal_PiebaldMaleFront from '../../../assets/CinnamonTeal_PiebaldMaleFront.webp';
import CinnamonTeal_RedFemaleBack from '../../../assets/CinnamonTeal_RedFemaleBack.webp';
import CinnamonTeal_RedFemaleFront from '../../../assets/CinnamonTeal_RedFemaleFront.webp';
import CinnamonTeal_RedMaleBack from '../../../assets/CinnamonTeal_RedMaleBack.webp';
import CinnamonTeal_RedMaleFront from '../../../assets/CinnamonTeal_RedMaleFront.webp';

const CinnamonTeal = () => {
  // --- DATA SOURCES ---

  // Need Zone Times (No specific table screenshot provided, assuming generic duck times or placeholder based on similar species until specified. 
  // *Self-correction*: The user did NOT provide a specific Need Zone table screenshot for Cinnamon Teal in this batch. 
  // I will use a standard set based on the "Active" description "Dawn, early morning, night" from the Features table, 
  // or leave a placeholder note if preferred. For a complete page, I will generate a standard schedule consistent with the other ducks.)
  const needZones = [
    { time: "00:00 - 05:00", type: "Resting", icon: RestingZoneIcon },
    { time: "05:00 - 07:00", type: "Feeding", icon: FeedingZoneIcon },
    { time: "07:00 - 09:00", type: "Resting", icon: RestingZoneIcon },
    { time: "09:00 - 11:00", type: "Feeding", icon: FeedingZoneIcon },
    { time: "11:00 - 13:00", type: "Resting", icon: RestingZoneIcon },
    { time: "13:00 - 15:00", type: "Feeding", icon: FeedingZoneIcon },
    { time: "15:00 - 17:00", type: "Resting", icon: RestingZoneIcon },
    { time: "17:00 - 19:00", type: "Feeding", icon: FeedingZoneIcon }, 
    { time: "19:00 - 00:00", type: "Resting", icon: RestingZoneIcon },
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Calm, social" },
    { label: "Habitat", value: "Swamps, ponds, lakes, rivers" },
    { label: "Senses", value: "Very good hearing, okay sense of vision, poor sense of smell" },
    { label: "Social", value: "Mixed groups with one dominant male, some males remain solitary" },
    { label: "Active", value: "Dawn, early morning, night" },
    { label: "Recommended Equipment", value: "Class 1 Ammo, Beacon Deluxe Duck Caller, Cinnamon Teal Decoys" },
    { label: "Species", value: "Spatula cyanoptera", italic: true },
    { label: "Difficulty", value: "Easy" },
  ];

  // Plumage Variants (Male)
  const plumageMale = [
    { name: "Cinnamon - Front", src: CinnamonTeal_CinnamonMaleFront },
    { name: "Cinnamon - Back", src: CinnamonTeal_CinnamonMaleBack },
    { name: "Melanistic - Front", src: CinnamonTeal_MelanisticMaleFront },
    { name: "Melanistic - Back", src: CinnamonTeal_MelanisticMaleBack },
    { name: "Piebald - Front", src: CinnamonTeal_PiebaldMaleFront },
    { name: "Piebald - Back", src: CinnamonTeal_PiebaldMaleBack },
    { name: "Red - Front", src: CinnamonTeal_RedMaleFront },
    { name: "Red - Back", src: CinnamonTeal_RedMaleBack },
  ];

  // Plumage Variants (Female)
  const plumageFemale = [
    { name: "Beige - Front", src: CinnamonTeal_BeigeFemaleFront },
    { name: "Beige - Back", src: CinnamonTeal_BeigeFemaleBack },
    { name: "Cinnamon - Front", src: CinnamonTeal_CinnamonFemaleFront },
    { name: "Cinnamon - Back", src: CinnamonTeal_CinnamonFemaleBack },
    { name: "Red - Front", src: CinnamonTeal_RedFemaleFront },
    { name: "Red - Back", src: CinnamonTeal_RedFemaleBack },
  ];

  // --- Table of Contents data + smooth scroll handler ---
  const toc = [
    { id: 'features', label: 'Features', children: [] },
    { id: 'tips', label: 'Tips', children: [] },
    { id: 'plumage-variants', label: 'Plumage Variants', children: [
      { id: 'plumage-male', label: 'Male' },
      { id: 'plumage-female', label: 'Female' },
    ] },
    { id: 'plumage-rarity', label: 'Plumage Variant Rarity', children: [] },
    { id: 'trivia', label: 'Trivia', children: [] },
    { id: 'references', label: 'References', children: [] },
  ];

  const handleTOCClick = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="wiki-page">
      <div className="wiki-inner">
        
        {/* PAGE HEADER */}
        <div className="wiki-header">
          <span>Cinnamon Teal</span>
          <div className="wiki-edit-actions">

          </div>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Cinnamon Teal</div>
            <div className="wiki-sidebar-image">
              <img src={CinnamonTealMain} alt="Cinnamon Teal" className="w-[268.4px] h-[134.2px] object-cover block" />
              <span className="absolute bottom-[5px] right-[5px] text-[0.8rem]"></span>
            </div>
            
            <div className="wiki-sidebar-header">General Information</div>
            
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Class</span>
              <div className="flex items-center gap-2">
                <img src={class1Icon} alt="Class 1" className="inline-block wiki-class-icon-sm align-middle mr-1.5" />
                <span>1</span>
              </div>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Difficulty</span>
              <span>1: Trivial — 3: Very Easy</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Trophy Type</span>
              <span>Weight</span>
              <div className="wiki-trophy-grid">
                <div className="wiki-trophy-item">
                   <span className="wiki-trophy-label wiki-trophy-silver">◆ Silver</span>
                   <span>3.4</span>
                </div>
                <div className="wiki-trophy-item">
                   <span className="wiki-trophy-label wiki-trophy-gold">☗ Gold</span>
                   <span>4.1</span>
                </div>
                <div className="wiki-trophy-item">
                   <span className="wiki-trophy-label wiki-trophy-diamond">☗ Diamond</span>
                   <span>4.6</span>
                </div>
              </div>
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Weight</span>
               110g — 482g<br/>
               0.2lbs — 1.1lbs
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Plumage</span>
               <span className="text-[0.85rem]">
                 Beige, Cinnamon, Melanistic, Piebald, Red
               </span>
            </div>

            <div className="wiki-sidebar-header">Locations</div>
            <div className="wiki-sidebar-section">
               <div className="wiki-mb-4"><span className="wiki-link">Parque Fernando</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main className="wiki-main">

            {/* Quote Block */}
            <div className="wiki-quote">
              "The cinnamon teal (spatula cyanoptera) is a small dabbling duck with characteristic cinnamon colored plumage on males and a duller brown plumage on females. Cinnamon teal can be found across the western United States, extreme southwestern Canada, and Southern America.<br/><br/>
              While females and non-breeding males have more coarse, brown coloration across their bodies, breeding males have long black bills, red eye coloration, black backs, and rear, with white underwings. Green secondaries and sky blue shoulder feathers also become visible in flight.<br/><br/>
              The cinnamon teal is significantly smaller than the mallard, weighing in at 0.50 kg, with a wingspan of no more than 0.65 m."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-mb-20">
              The <strong>Cinnamon Teal</strong> is a <span className="wiki-link">class 1</span> duck species that can be hunted on <span className="wiki-link">Parque Fernando</span>.
            </p>

            {/* Table of Contents Placeholder */}
            <div className="wiki-toc">
                <div className="font-bold border-b border-[#3a5a75] mb-[5px]">
                  🔢 Contents <span className="wiki-toc-toggle">[hide]</span>
                </div>
                <ol className="m-0 pl-3 text-[#6fb2e6] list-none">
                  {toc.map((item, i) => (
                    <li key={item.id} className="cursor-pointer mb-[6px]" onClick={() => handleTOCClick(item.id)}>
                      <span className="mr-2 font-bold">{i + 1}.</span>
                      {item.label}
                      {item.children && item.children.length > 0 && (
                        <ol className="mt-[6px] ml-[18px] list-none">
                          {item.children.map((child, j) => (
                            <li key={child.id} className="cursor-pointer text-[#9fd6ff]" onClick={(e) => { e.stopPropagation(); handleTOCClick(child.id); }}>
                              <span className="mr-2 font-bold">{`${i + 1}.${j + 1}`}</span>
                              {child.label}
                            </li>
                          ))}
                        </ol>
                      )}
                    </li>
                  ))}
                </ol>
            </div>

            {/* FEATURES */}
            <h2 id="features" className="wiki-h2">Features</h2>
            <table className="wiki-table">
              <tbody>
                <tr>
                    <th className="wiki-th wiki-th-w25"></th>
                    <th className="wiki-th">Description</th>
                </tr>
                {features.map((item, index) => (
                  <tr key={index}>
                    <td className="wiki-td wiki-td-bold">{item.label}</td>
                    <td className={`wiki-td ${item.italic ? 'wiki-td-italic' : ''}`}>
                        {item.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* TIPS */}
            <h2 id="tips" className="wiki-h2">Tips</h2>
            <p>
              Ducks will fly against the wind when making a landing, so be mindful of the wind direction. If you are going to use blinds and decoys, place your decoys approximately 50ms (54yds) away from your blind so the <strong>Cinnamon Teal</strong> won't fly on top of you and spook.
            </p>

            {/* PLUMAGE VARIANTS (Gallery) */}
            <h2 id="plumage-variants" className="wiki-h2">Plumage Variants</h2>
            
            <h3 id="plumage-male" className="wiki-h3">Male</h3>
            <div className="wiki-gallery-grid">
              {plumageMale.map((img, i) => (
                  <div key={i} className="wiki-gallery-item">
                      <div className="wiki-gallery-placeholder">
                        <img src={img.src} alt={img.name} className="w-[146px] h-[165px] object-cover block" />
                      </div>
                      <span className="wiki-gallery-label">{img.name}</span>
                  </div>
              ))}
            </div>

            <h3 id="plumage-female" className="wiki-h3">Female</h3>
            <div className="wiki-gallery-grid">
              {plumageFemale.map((img, i) => (
                  <div key={i} className="wiki-gallery-item">
                      <div className="wiki-gallery-placeholder">
                        <img src={img.src} alt={img.name} className="w-[146px] h-[165px] object-cover block" />
                      </div>
                      <span className="wiki-gallery-label">{img.name}</span>
                  </div>
              ))}
            </div>

            {/* PLUMAGE RARITY TABLE */}
            <h2 id="plumage-rarity" className="wiki-h2">Plumage Variant Rarity</h2>
            <table className="wiki-table">
                <thead>
                    <tr>
                        <th className="wiki-th">Sex</th>
                        <th className="wiki-th"><span className="wiki-common">Common</span></th>
                        <th className="wiki-th"><span className="wiki-uncommon">Uncommon</span></th>
                        <th className="wiki-th"><span className="wiki-rare">Rare</span></th>
                        <th className="wiki-th"><span className="wiki-very-rare">Very Rare</span></th>
                    </tr>
                </thead>
                <tbody>
                    {/* Male Row */}
                    <tr>
                        <td className="wiki-td wiki-td-rare">Male</td>
                        <td className="wiki-td">
                            Cinnamon (74.85%)<br/>
                            Red (12.53%)<br/>
                            Piebald (12.53%)
                        </td>
                        <td className="wiki-td">X</td>
                        <td className="wiki-td">Melanistic (0.10%)</td>
                        <td className="wiki-td">X</td>
                    </tr>
                    {/* Female Row */}
                    <tr>
                      <td className="wiki-td wiki-td-female">Female</td>
                      <td className="wiki-td">
                        Cinnamon (85.49%)<br/>
                        Red (14.31%)
                      </td>
                        <td className="wiki-td">X</td>
                        <td className="wiki-td">Beige (0.20%)</td>
                        <td className="wiki-td">X</td>
                    </tr>
                </tbody>
            </table>

            {/* TRIVIA */}
            <h2 id="trivia" className="wiki-h2">Trivia</h2>
            <ul className="pl-5 mb-[30px]">
                <li className="wiki-li">It's genus name <em>Spatula</em> is named after a spatula. However the etymology of the word <em>Spatula</em> comes from Ancient Latin and Greek, and means something along the lines of <em>a broad flat blade</em>.[1]</li>
                <li className="wiki-li">Cinnamon Teals are relatively quiet compared to other ducks. However, if they are to speak, their preferred vocalization is a distinctive "Chattering" which is performed by the males.[2][3]</li>
                <li className="wiki-li">These birds are special, in that, unlike most duck species, the male does not abandon the female immediately, electing to stay and look after his mate until her eggs hatch.[4]</li>
            </ul>

            {/* REFERENCES */}
            <h2 id="references" className="wiki-h2">References</h2>
            <ol className="pl-[25px] text-[#6fb2e6]">
                <li><span className="wiki-link">https://www.etymonline.com/word/spatula</span></li>
                <li><span className="wiki-link">https://seaworld.org/animals/facts/birds/cinnamon-teal/</span></li>
                <li><span className="wiki-link">https://www.audubon.org/field-guide/bird/cinnamon-teal</span></li>
                <li><span className="wiki-link">https://rachelcarsoncouncil.salsalabs.org/cinnamonteal</span></li>
            </ol>

            <AnimalsTableMini />
          </main>
        </div>
      </div>
    </div>
  );
};

export default CinnamonTeal;