import React from 'react';

// --- IMPORTS ---
// Standard Icons (reuse existing paths)
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import class1Icon from '../../../assets/Class1Icon.webp';
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import BlackGrouseMain from '../../../assets/BlackGrouse.webp';

// Male Plumage Images
import BlackGrouse_DarkMaleFront from '../../../assets/BlackGrouse_DarkMaleFront.webp';
import BlackGrouse_DarkMaleBack from '../../../assets/BlackGrouse_DarkMaleBack.webp';
import BlackGrouse_LeucisticVariation1MaleFront from '../../../assets/BlackGrouse_LeucisticVariation1MaleFront.webp';
import BlackGrouse_LeucisticVariation1MaleBack from '../../../assets/BlackGrouse_LeucisticVariation1MaleBack.webp';
import BlackGrouse_LeucisticVariaton2MaleFront from '../../../assets/BlackGrouse_LeucisticVariation2MaleFront.webp';
import BlackGrouse_LeucisticVariation2MaleBack from '../../../assets/BlackGrouse_LeucisticVariation2MaleBack.webp';
import BlackGrouse_LeucisticVariation3MaleFront from '../../../assets/BlackGrouse_LeucisticVariation3MaleFront.webp';
import BlackGrouse_LeucisticVariation3MaleBack from '../../../assets/BlackGrouse_LeucisticVariation3MaleBack.webp';
import BlackGrouse_MelanisticVariation1MaleFront from '../../../assets/BlackGrouse_MelanisticVariation1MaleFront.webp';
import BlackGrouse_MelanisticVariation1MaleBack from '../../../assets/BlackGrouse_MelanisticVariation1MaleBack.webp';
import BlackGrouse_MelanisticVariation2MaleFront from '../../../assets/BlackGrouse_MelanisticVariation2MaleFront.webp';
import BlackGrouse_MelanisticVariation2MaleBack from '../../../assets/BlackGrouse_MelanisticVariation2MaleBack.webp';

// Female Plumage Images
import BlackGrouse_BrownFemaleFront from '../../../assets/BlackGrouse_BrownFemaleFront.webp';
import BlackGrouse_BrownFemaleBack from '../../../assets/BlackGrouse_BrownFemaleBack.webp';
import BlackGrouse_DarkFemaleFront from '../../../assets/BlackGrouse_DarkFemaleFront.webp';
import BlackGrouse_DarkFemaleBack from '../../../assets/BlackGrouse_DarkFemaleBack.webp';
import BlackGrouse_GoldFemaleFront from '../../../assets/BlackGrouse_GoldFemaleFront.webp';
import BlackGrouse_GoldFemaleBack from '../../../assets/BlackGrouse_GoldFemaleBack.webp';
import BlackGrouse_OrangeFemaleFront from '../../../assets/BlackGrouse_OrangeFemaleFront.webp';
import BlackGrouse_OrangeFemaleBack from '../../../assets/BlackGrouse_OrangeFemaleBack.webp';


const BlackGrouse = () => {

  // --- DATA SOURCES ---

  // Need Zone Times (Revontuli Coast)
  const needZones = [
    { time: "00:00 - 04:30", type: "Resting", icon: RestingZoneIcon },
    { time: "04:00 - 08:30", type: "Feeding", icon: FeedingZoneIcon },
    { time: "08:00 - 11:30", type: "Feeding", icon: FeedingZoneIcon },
    { time: "11:00 - 14:30", type: "Resting", icon: RestingZoneIcon },
    { time: "14:00 - 18:30", type: "Feeding", icon: FeedingZoneIcon },
    { time: "18:00 - 21:30", type: "Feeding", icon: FeedingZoneIcon },
    { time: "21:00 - 00:30", type: "Resting", icon: RestingZoneIcon },
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Territorial, engages in elaborate courtship displays" },
    { label: "Habitat", value: "Transitional zones between forest and clearings" },
    { label: "Senses", value: "Great hearing and eyesight, poor sense of smell" },
    { label: "Social", value: "Flocks in single-sex groups and mixed groups" },
    { label: "Active", value: "During the day" },
    { label: "Recommended Equipment", value: "Class 1 Ammo" },
    { label: "Species", value: "Lyrurus tetrix", italic: true, isLink: true },
    { label: "Difficulty", value: "Easy" },
  ];

  // Plumage Gallery Data
  const plumageGallery = {
    male: [
      { name: "Dark - Front", src: BlackGrouse_DarkMaleFront },
      { name: "Dark - Back", src: BlackGrouse_DarkMaleBack },
      { name: "Leucistic Variation 1 - Front", src: BlackGrouse_LeucisticVariation1MaleFront },
      { name: "Leucistic Variation 1 - Back", src: BlackGrouse_LeucisticVariation1MaleBack },
      { name: "Leucistic Variation 2 - Front", src: BlackGrouse_LeucisticVariaton2MaleFront },
      { name: "Leucistic Variation 2 - Back", src: BlackGrouse_LeucisticVariation2MaleBack },
      { name: "Leucistic Variation 3 - Front", src: BlackGrouse_LeucisticVariation3MaleFront },
      { name: "Leucistic Variation 3 - Back", src: BlackGrouse_LeucisticVariation3MaleBack },
      { name: "Melanistic Variation 1 - Front", src: BlackGrouse_MelanisticVariation1MaleFront },
      { name: "Melanistic Variation 1 - Back", src: BlackGrouse_MelanisticVariation1MaleBack },
      { name: "Melanistic Variation 2 - Front", src: BlackGrouse_MelanisticVariation2MaleFront },
      { name: "Melanistic Variation 2 - Back", src: BlackGrouse_MelanisticVariation2MaleBack },
    ],
    female: [
      { name: "Brown - Front", src: BlackGrouse_BrownFemaleFront },
      { name: "Brown - Back", src: BlackGrouse_BrownFemaleBack },
      { name: "Dark - Front", src: BlackGrouse_DarkFemaleFront },
      { name: "Dark - Back", src: BlackGrouse_DarkFemaleBack },
      { name: "Gold - Front", src: BlackGrouse_GoldFemaleFront },
      { name: "Gold - Back", src: BlackGrouse_GoldFemaleBack },
      { name: "Orange - Front", src: BlackGrouse_OrangeFemaleFront },
      { name: "Orange - Back", src: BlackGrouse_OrangeFemaleBack },
    ]
  };

  // Table of contents data and smooth scroll handler
  const toc = [
    { id: 'features', title: 'Features' },
    { id: 'need-zone-times', title: 'Need Zone Times' },
    {
      id: 'plumage-variants',
      title: 'Plumage Variants',
      children: [
        { id: 'plumage-male', title: 'Male' },
        { id: 'plumage-female', title: 'Female' },
      ],
    },
    { id: 'plumage-variant-rarity', title: 'Plumage Variant Rarity' },
    { id: 'trivia', title: 'Trivia' },
    { id: 'references', title: 'References' },
  ];

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="wiki-page">
      <div className="wiki-inner">
        
        {/* PAGE HEADER */}
        <div className="wiki-header">
          <span>Black Grouse</span>
          <div className="wiki-edit-actions">
          </div>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Black Grouse</div>
            <div className="h-[180px] bg-[#2a4b63] flex items-center justify-center p-2.5">
              <img src={BlackGrouseMain} alt="Black Grouse" className="max-w-full max-h-full object-contain rounded-sm" />
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
              <span>Combined</span>
              <div className="wiki-trophy-grid">
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-silver">◆ Silver</span>
                  <span>85</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-gold">☗ Gold</span>
                  <span>105</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-diamond">☗ Diamond</span>
                  <span>120</span>
                </div>
              </div>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Weight</span>
              700g — 1250g<br/>
              1.5lbs — 2.8lbs
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Plumage</span>
               <span className="wiki-fs-sm">
                  Brown, Dark, Gold, Leucistic, Melanistic, Orange
               </span>
            </div>

            <div className="wiki-sidebar-header">Locations</div>
            <div className="wiki-sidebar-section">
               <div className="wiki-mb-4"><span className="wiki-link">Revontuli Coast</span></div>
               <div className="wiki-mb-4"><span className="wiki-link">Salzwiesen Park</span></div>
               <div className="wiki-mb-4"><span className="wiki-link">Tòrr nan Sithean</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main className="wiki-main">

            {/* Quote Block */}
            <div className="wiki-quote">
              "The Black Grouse has distinct red bare skin over its eyes that plumps up during the courting ritual known as "lek". During the lek, males, and at times up to hundreds of males, collect in "lekking" grounds every dawn to display their strength and plumage to increase their chances of mating with a hen. The Black Grouse is a sedentary bird, which means it does not migrate. The Black Grouse has a large range across most of northern Europe and Russia. They are capable of hybridization with other species such as Ringneck Pheasant, Western Capercaillie and Willow Ptarmigan."
              <br/><br/>
              ― In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-p-mb">
              The <strong>Black Grouse</strong> is a <span className="wiki-link">class 1</span> grouse species that can be hunted on <span className="wiki-link">Revontuli Coast</span>, <span className="wiki-link">Salzwiesen Park</span> and <span className="wiki-link">Tòrr nan Sithean</span>.
            </p>

            {/* Table of Contents (interactive) */}
            <div className="wiki-toc">
              <div className="wiki-toc-title">
                🔢 Contents <span className="wiki-toc-toggle">[hide]</span>
              </div>
              <ol className="wiki-toc">
                {toc.map((item, i) => (
                  <li key={item.id} className={item.children ? 'mb-[6px]' : 'mb-[3px]'}>
                    <a href={`#${item.id}`} onClick={(e)=>{e.preventDefault(); handleScroll(item.id);}} className="text-[#6fb2e6] no-underline">{item.title}</a>
                    {item.children && (
                      <ol className="mt-[6px] ml-[12px] list-none p-0">
                        {item.children.map((c, j) => (
                          <li key={c.id} className="wiki-mb-4">
                            <a href={`#${c.id}`} onClick={(e)=>{e.preventDefault(); handleScroll(c.id);}} className="text-[#6fb2e6] no-underline">{`${i+1}.${j+1} ${c.title}`}</a>
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
                        <span dangerouslySetInnerHTML={{ __html: item.value }} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
           
            {/* NEED ZONE TIMES */}
            <h2 id="need-zone-times" className="wiki-h2">Need Zone Times</h2>
            <div className="wiki-inline-block">
                <table className="wiki-table wiki-table-fixed">
                    <thead>
                        <tr><th colSpan="2" className="wiki-th wiki-th-center">Revontuli Coast</th></tr>
                        <tr>
                            <th className="wiki-th wiki-th-alt">Time</th>
                            <th className="wiki-th wiki-th-alt">Activity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {needZones.map((zone, i) => (
                        <tr key={i}>
                            <td className="wiki-td">{zone.time}</td>
                            <td className="wiki-td"><img src={zone.icon} alt={zone.type} className="wiki-class-icon"/> {zone.type}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* PLUMAGE VARIANTS (Gallery) */}
            <h2 id="plumage-variants" className="wiki-h2">Plumage Variants</h2>
            
            {/* Male Section */}
            <h3 id="plumage-male" className="wiki-h3">Male</h3>
            <div className="wiki-gallery-grid">
              {plumageGallery.male.map((item, i) => (
                <div key={i} className="wiki-gallery-item">
                  <div className="wiki-gallery-placeholder">
                    <img src={item.src} alt={item.name} />
                  </div>
                  <span className="wiki-gallery-label">{item.name}</span>
                </div>
              ))}
            </div>

            {/* Female Section */}
            <h3 id="plumage-female" className="wiki-h3">Female</h3>
            <div className="wiki-gallery-grid">
              {plumageGallery.female.map((item, i) => (
                <div key={i} className="wiki-gallery-item">
                  <div className="wiki-gallery-placeholder">
                    <img src={item.src} alt={item.name} />
                  </div>
                  <span className="wiki-gallery-label">{item.name}</span>
                </div>
              ))}
            </div>

            {/* PLUMAGE RARITY TABLE */}
            <h2 id="plumage-variant-rarity" className="wiki-h2">Plumage Variant Rarity</h2>
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
                    <tr>
                        <td className="wiki-td wiki-td-muted">Male</td>
                        <td className="wiki-td">
                            Dark (99.87%)
                        </td>
                        <td className="wiki-td">X</td>
                        <td className="wiki-td">X</td>
                        <td className="wiki-td">
                            Leucistic Variation 1 (0.03%),<br/>
                            Leucistic Variation 2 (0.03%),<br/>
                            Leucistic Variation 3 (0.03%),<br/>
                            Melanistic Variation 1 (0.03%),<br/>
                            Melanistic Variation 2 (0.03%)
                        </td>
                    </tr>
                     <tr>
                        <td className="wiki-td wiki-td-female">Female</td>
                        <td className="wiki-td">
                            Brown (74.77%),<br/>
                            Dark (25.03%)
                        </td>
                        <td className="wiki-td">X</td>
                        <td className="wiki-td">
                            Gold (0.10%),<br/>
                            Orange (0.10%)
                        </td>
                        <td className="wiki-td">X</td>
                    </tr>
                </tbody>
            </table>

            {/* TRIVIA */}
            <h2 id="trivia" className="wiki-h2">Trivia</h2>
            <ul className="wiki-ul">
              <li className="wiki-li">The scientific name of the Black Grouse is derived of two parts: <i>lyra</i> (lyre) + <i>orus</i> (Tail). It's distinctive lyre shaped tail gives it it's name.</li>
              <li className="wiki-li">The males hold large spring gatherings called <i>leks</i> where they compete for females.</li>
            </ul>

            {/* REFERENCES */}
            <h2 id="references" className="wiki-h2">References</h2>
            <ol className="pl-5 mb-[30px] text-[#6fb2e6]">
                <li className="wiki-mb-4"><span className="wiki-link">etymonline.com</span></li>
                <li className="wiki-mb-4"><span className="wiki-link">merriam-webster.com</span></li>
                <li className="wiki-mb-4"><span className="wiki-link">bro.org</span></li>
            </ol>

            <AnimalsTableMini />
          </main>
        </div>
      </div>
    </div>
  );
};

export default BlackGrouse;