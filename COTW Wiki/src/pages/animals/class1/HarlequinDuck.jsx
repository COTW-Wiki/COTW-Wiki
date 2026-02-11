import React from 'react';
import HarlequinDuckMain from '../../../assets/HarlequinDuck.webp';
import HarlequinDuck_AlbinoMaleFront from '../../../assets/HarlequinDuck_AlbinoMaleFront.webp';
import HarlequinDuck_AlbinoFemaleFront from '../../../assets/HarlequinDuck_AlbinoFemaleFront.webp';
import HarlequinDuck_DarkGreyMaleFront from '../../../assets/HarlequinDuck_DarkGreyMaleFront.webp';
import HarlequinDuck_DarkGreyFemaleFront from '../../../assets/HarlequinDuck_DarkGreyFemaleFront.webp';
import HarlequinDuck_GreyFemaleFront from '../../../assets/HarlequinDuck_GreyFemaleFront.webp';
import HarlequinDuck_MelanisticMaleFront from '../../../assets/HarlequinDuck_MelanisticMaleFront.webp';
import HarlequinDuck_PiebaldMaleFront from '../../../assets/HarlequinDuck_PiebaldMaleFront.webp';
import HarlequinDuck_AlbinoFemaleBack from '../../../assets/HarlequinDuck_AlbinoFemaleBack.webp';
import HarlequinDuck_AlbinoMaleBack from '../../../assets/HarlequinDuck_AlbinoMaleBack.webp';
import HarlequinDuck_DarkBrownFemaleBack from '../../../assets/HarlequinDuck_DarkBrownFemaleBack.webp';
import HarlequinDuck_DarkBrownFemaleFront from '../../../assets/HarlequinDuck_DarkBrownFemaleFront.webp';
import HarlequinDuck_DarkFemaleBack from '../../../assets/HarlequinDuck_DarkFemaleBack.webp';
import HarlequinDuck_DarkFemaleFront from '../../../assets/HarlequinDuck_DarkFemaleFront.webp';
import HarlequinDuck_DarkGreyFemaleBack from '../../../assets/HarlequinDuck_DarkGreyFemaleBack.webp';
import HarlequinDuck_DarkGreyMaleBack from '../../../assets/HarlequinDuck_DarkGreyMaleBack.webp';
import HarlequinDuck_GreyFemaleBack from '../../../assets/HarlequinDuck_GreyFemaleBack.webp';
import HarlequinDuck_MelanisticMaleBack from '../../../assets/HarlequinDuck_MelanisticMaleBack.webp';
import HarlequinDuck_PiebaldMaleBack from '../../../assets/HarlequinDuck_PiebaldMaleBack.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import class1Icon from '../../../assets/Class1Icon.webp';
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

const HarlequinDuck = () => {
  // --- DATA SOURCES ---

  // Need Zone Times
  const needZones = [
    { time: "05:00 - 07:00", type: "Feeding", icon: FeedingZoneIcon },
    { time: "09:00 - 11:00", type: "Feeding", icon: FeedingZoneIcon },
    { time: "13:00 - 15:00", type: "Feeding", icon: FeedingZoneIcon },
    { time: "17:00 - 19:00", type: "Feeding", icon: FeedingZoneIcon },
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Active, Social" },
    { label: "Habitat", value: "Rocky coastlines and fast, cold water streams" },
    { label: "Senses", value: "Poor sense of smell and hearing, good eyesight" },
    { label: "Social", value: "Small mixed groups, but can also be found alone or in mated pairs" },
    { label: "Active", value: "Feeds all day long with occasional periods of rest" },
    { label: "Recommended Equipment", value: "Class 1 Ammo, Birdshot shotgun ammo, Harlequin Duck Decoys" },
    { label: "Species", value: "Histrionicus histrionicus", italic: true },
    { label: "Difficulty", value: "Easy" },
  ];

  // Plumage Variants (Male) — image-backed
  const plumageMale = [
    { name: "Albino - Front", src: HarlequinDuck_AlbinoMaleFront },
    { name: "Albino - Back", src: HarlequinDuck_AlbinoMaleBack },
    { name: "Dark Grey - Front", src: HarlequinDuck_DarkGreyMaleFront },
    { name: "Dark Grey - Back", src: HarlequinDuck_DarkGreyMaleBack },
    { name: "Melanistic - Front", src: HarlequinDuck_MelanisticMaleFront },
    { name: "Melanistic - Back", src: HarlequinDuck_MelanisticMaleBack },
    { name: "Piebald - Front", src: HarlequinDuck_PiebaldMaleFront },
    { name: "Piebald - Back", src: HarlequinDuck_PiebaldMaleBack },
  ];

  // Plumage Variants (Female) — image-backed
  const plumageFemale = [
    { name: "Albino - Front", src: HarlequinDuck_AlbinoFemaleFront },
    { name: "Albino - Back", src: HarlequinDuck_AlbinoFemaleBack },
    { name: "Dark - Front", src: HarlequinDuck_DarkFemaleFront },
    { name: "Dark - Back", src: HarlequinDuck_DarkFemaleBack },
    { name: "Dark Brown - Front", src: HarlequinDuck_DarkBrownFemaleFront },
    { name: "Dark Brown - Back", src: HarlequinDuck_DarkBrownFemaleBack },
    { name: "Dark Grey - Front", src: HarlequinDuck_DarkGreyFemaleFront },
    { name: "Dark Grey - Back", src: HarlequinDuck_DarkGreyFemaleBack },
    { name: "Grey - Front", src: HarlequinDuck_GreyFemaleFront },
    { name: "Grey - Back", src: HarlequinDuck_GreyFemaleBack },
  ];

  const toc = [
    { id: 'features', label: 'Features' },
    { id: 'need-zones', label: 'Need Zone Times' },
    { id: 'tips', label: 'Tips' },
    { id: 'plumage', label: 'Plumage Variants', children: [
      { id: 'plumage-male', label: 'Male' },
      { id: 'plumage-female', label: 'Female' },
    ] },
    { id: 'rarity', label: 'Plumage Variant Rarity' },
    { id: 'trivia', label: 'Trivia' },
    { id: 'references', label: 'References' },
  ];

  function handleTOCClick(targetId) {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      try { history.replaceState(null, '', `#${targetId}`); } catch (e) {}
    }
  }

  return (
    <div className="wiki-page">
      <div className="wiki-inner">
        
        {/* PAGE HEADER */}
        <div className="wiki-header">
          <span>Harlequin Duck</span>
          <div className="wiki-edit-actions">
          </div>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Harlequin Duck</div>
            <div className="wiki-sidebar-image">
              <img src={HarlequinDuckMain} alt="Harlequin Duck" className="w-[268.4px] h-[134.2px] object-cover" />
            </div>
            
            <div className="wiki-sidebar-header">General Information</div>
            
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Class</span>
              <span><img src={class1Icon} alt="Class 1" className="inline-block wiki-class-icon-sm align-middle mr-1.5"/>1</span>
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
                   <span>5.34</span>
                </div>
                <div className="wiki-trophy-item">
                   <span className="wiki-trophy-label wiki-trophy-gold">☗ Gold</span>
                   <span>6.42</span>
                </div>
                <div className="wiki-trophy-item">
                   <span className="wiki-trophy-label wiki-trophy-diamond">☗ Diamond</span>
                   <span>7.23</span>
                </div>
              </div>
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Weight</span>
               500g — 750g<br/>
               1.1lbs — 1.7lbs
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Plumage</span>
               <span className="text-[0.85rem]">
                 Albino, Dark, Dark Brown, Dark Grey, Grey, Melanistic, Piebald
               </span>
            </div>

            <div className="wiki-sidebar-header">Locations</div>
            <div className="wiki-sidebar-section">
               <div className="wiki-mb-4"><span className="wiki-link">Yukon Valley Nature Reserve</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main className="wiki-main">

            {/* Quote Block */}
            <div className="wiki-quote">
              "The harlequin duck is a sea duck that lives primarily in the cold waters of the North Atlantic and Pacific Ocean. Its name comes from the colorful and elaborate plumage of the breeding males and is a reference to the eponymous character from the Italian Commedia dell'arte. They are sometimes nicknamed "sea mice" due to their characteristic squeaks. The harlequin duck is relatively small. Adults can measure up to 0.5 m in length, 0.70 m in wingspan and tip the scale at roughly 0.70 kg."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-mb-20">
              The <strong>Harlequin Duck</strong> is a (<span className="wiki-link">class 1</span>) that can be hunted on <span className="wiki-link">Yukon Valley</span>. The Harlequin Duck is the first of 3 in game "Sea Ducks" huntable in game. The other two are the <span className="wiki-link">Goldeneye</span> and the <span className="wiki-link">Tufted Duck</span>. [A sea duck is type of duck that primarily dives for its food instead of "dabbing" on the surface in case you were wondering]
            </p>

            {/* Table of Contents Placeholder */}
            <div className="wiki-toc">
              <div className="font-bold border-b border-[#3a5a75] mb-2 pb-2">
                🔢 Contents <span className="wiki-toc-toggle">[hide]</span>
              </div>
              <ol className="m-0 pl-5 text-[#6fb2e6] list-none">
                {toc.map((item, idx) => (
                  <li key={item.id} className="mb-1.5 cursor-pointer" onClick={() => handleTOCClick(item.id)}>
                    <strong className="mr-1.5">{idx + 1}.</strong> {item.label}
                    {item.children && (
                      <ol className="mt-1.5 ml-3 list-none">
                        {item.children.map((child, cidx) => (
                          <li key={child.id} className="cursor-pointer" onClick={(e) => { e.stopPropagation(); handleTOCClick(child.id); }}>{`${idx + 1}.${cidx + 1} ${child.label}`}</li>
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

            {/* NEED ZONE TIMES */}
            <h2 id="need-zones" className="wiki-h2">Need Zone Times</h2>
            <div className="inline-block">
                <table className="wiki-table wiki-table-fixed">
                    <thead>
                        <tr>
                            <th className="wiki-th wiki-th-alt">Times</th>
                            <th className="wiki-th wiki-th-alt">Activity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {needZones.map((zone, i) => (
                        <tr key={i}>
                          <td className="wiki-td">{zone.time}</td>
                          <td className="wiki-td"><img src={zone.icon} alt={zone.type} className="inline-block w-[18px] h-[18px] align-middle mr-1.5"/>{zone.type}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Shot Scheme removed per request */}

            {/* TIPS */}
            <h2 id="tips" className="wiki-h2">Tips</h2>
            <p>
              Ducks will fly against the wind when making a landing, so be mindful of the wind direction. If you are going to use blinds and decoys, place your decoys approximately 50ms (54yds) away from your blind so the <strong>Harlequin Ducks</strong> won't fly on top of you and spook.
            </p>

            {/* PLUMAGE VARIANTS (Gallery) */}
            <h2 id="plumage" className="wiki-h2">Plumage Variants</h2>
            
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
            <h2 id="rarity" className="wiki-h2">Plumage Variant Rarity</h2>
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
                            Dark Grey (74.85%)<br/>
                            Piebald (25.05%)
                        </td>
                        <td className="wiki-td">X</td>
                        <td className="wiki-td">X</td>
                        <td className="wiki-td">
                            Albino (0.05%)<br/>
                            Melanistic (0.05%)
                        </td>
                    </tr>
                    {/* Female Row */}
                    <tr>
                      <td className="wiki-td text-[#e91e63] italic">Female</td>
                        <td className="wiki-td">
                            Dark Grey (66.53%)<br/>
                            Dark Brown (33.26%)
                        </td>
                        <td className="wiki-td">X</td>
                        <td className="wiki-td">Dark (0.13%)</td>
                        <td className="wiki-td">
                            Albino (0.04%)<br/>
                            Grey (0.03%)
                        </td>
                    </tr>
                </tbody>
            </table>

            {/* TRIVIA */}
            <h2 id="trivia" className="wiki-h2">Trivia</h2>
            <ul className="pl-5 mb-8">
                <li className="wiki-li">The Harlequin Duck gets it's name from it's distinct plumage pattern, reminiscent of the type of pattern that would have been worn by a the 16th century Italian comic relief character called a <em>Harlequin</em>. However, the origins of the word, <em>Harlequin</em>, maybe even older. And could even trace it's origins to an Old French character from the 11th Century called: <em>Herlequin</em>. <em>Herlequin</em> was a masked club wielding giant who led a pose of demons during the Germanic wild hunt.[1][2]</li>
                <li className="wiki-li">Its scientific name <em>Histrionicus Histrionicus</em> is derived from the Latin word <em>Histrio</em> meaning <em>Actor</em>. [3]</li>
                <li className="wiki-li">Other names for the Harlequin Duck include the <em>Sea Mouse</em>, in reference to their high pitched squeaks, <em>Rock Duck</em>, and their different genders may be distinguished with the moniker of either <em>Lord</em> or <em>Lady</em>.[4]</li>
                <li className="wiki-li">Harlequin Ducks are considered a uniquely fragile duck species. It is believed that Harlequin Ducks suffer from more broken bones than any other duck species.[5]</li>
                <li>They are a protected species in Eastern Canada, and hunting them is completely banned in that region of the country. The Committee on the Status of Endangered Wildlife in Canada, (COSEWIC), lists them as endangered.[6]</li>
            </ul>

            {/* REFERENCES */}
            <h2 id="references" className="wiki-h2">References</h2>
            <ol className="pl-6 text-[#6fb2e6]">
                <li><span className="wiki-link">https://www.etymonline.com/word/harlequin</span></li>
                <li><span className="wiki-link">https://en.wikipedia.org/wiki/Harlequin</span></li>
                <li><span className="wiki-link">https://www.merriam-webster.com/dictionary/histrio</span></li>
                <li><span className="wiki-link">https://en.wikipedia.org/wiki/Harlequin_duck</span></li>
                <li><span className="wiki-link">https://www.allaboutbirds.org/guide/Harlequin_Duck/overview</span></li>
                <li><span className="wiki-link">https://www.hww.ca/en/wildlife/birds/harlequin-duck.html</span></li>
            </ol>

            <AnimalsTableMini />
          </main>
        </div>
      </div>
    </div>
  );
};

export default HarlequinDuck;