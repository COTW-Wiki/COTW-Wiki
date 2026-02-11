import React from 'react';

// --- IMPORTS ---
// Standard Icons
import class1Icon from '../../../assets/Class1Icon.webp';
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';

// Main Image
import HazelGrouseMain from '../../../assets/HazelGrouse.webp';

// Male Plumage Images
import HazelGrouse_BrownMaleFront from '../../../assets/HazelGrouse_BrownMaleFront.webp';
import HazelGrouse_BrownMaleBack from '../../../assets/HazelGrouse_BrownMaleBack.webp';
import HazelGrouse_DarkMaleFront from '../../../assets/HazelGrouse_DarkMaleFront.webp';
import HazelGrouse_DarkMaleBack from '../../../assets/HazelGrouse_DarkMaleBack.webp';
import HazelGrouse_GreyMaleFront from '../../../assets/HazelGrouse_GreyMaleFront.webp';
import HazelGrouse_GreyMaleBack from '../../../assets/HazelGrouse_GreyMaleBack.webp';
import HazelGrouse_HybridMaleFront from '../../../assets/HazelGrouse_HybridMaleFront.webp';
import HazelGrouse_HybridMaleBack from '../../../assets/HazelGrouse_HybridMaleBack.webp';
import HazelGrouse_PaleMaleFront from '../../../assets/HazelGrouse_PaleMaleFront.webp';
import HazelGrouse_PaleMaleBack from '../../../assets/HazelGrouse_PaleMaleBack.webp';

// Female Plumage Images
import HazelGrouse_BrownFemaleFront from '../../../assets/HazelGrouse_BrownFemaleFront.webp';
import HazelGrouse_BrownFemaleBack from '../../../assets/HazelGrouse_BrownFemaleBack.webp';
import HazelGrouse_DarkFemaleFront from '../../../assets/HazelGrouse_DarkFemaleFront.webp';
import HazelGrouse_DarkFemaleBack from '../../../assets/HazelGrouse_DarkFemaleBack.webp';
import HazelGrouse_LightBrownFemaleFront from '../../../assets/HazelGrouse_LightBrownFemaleFront.webp';
import HazelGrouse_LightBrownFemaleBack from '../../../assets/HazelGrouse_LightBrownFemaleBack.webp';
import HazelGrouse_OchreFemaleFront from '../../../assets/HazelGrouse_OchreFemaleFront.webp';
import HazelGrouse_OchreFemaleBack from '../../../assets/HazelGrouse_OchreFemaleBack.webp';
import HazelGrouse_PaleFemaleFront from '../../../assets/HazelGrouse_PaleFemaleFront.webp';
import HazelGrouse_PaleFemaleBack from '../../../assets/HazelGrouse_PaleFemaleBack.webp';

const HazelGrouse = () => {

  // --- DATA SOURCES ---

  // Features Table
  const features = [
    { label: "Behavior", value: "Territorial, secretive" },
    { label: "Habitat", value: "Mixed woodlands" },
    { label: "Senses", value: "Good eyesight, average smell and hearing" },
    { label: "Social", value: "Solitary individuals and mated pairs" },
    { label: "Active", value: "Forages throughout the day" },
    { label: "Recommended Equipment", value: "Class 1 Ammo, Hazel Grouse Caller" },
    { label: "Species", value: "Tetrastes bonasia", italic: true, isLink: true },
    { label: "Difficulty", value: "Easy" },
  ];

  // Plumage Gallery Data
  const plumageGallery = {
    male: [
      { name: "Brown - Front", src: HazelGrouse_BrownMaleFront },
      { name: "Brown - Back", src: HazelGrouse_BrownMaleBack },
      { name: "Dark - Front", src: HazelGrouse_DarkMaleFront },
      { name: "Dark - Back", src: HazelGrouse_DarkMaleBack },
      { name: "Grey - Front", src: HazelGrouse_GreyMaleFront },
      { name: "Grey - Back", src: HazelGrouse_GreyMaleBack },
      { name: "Hybrid - Front", src: HazelGrouse_HybridMaleFront },
      { name: "Hybrid - Back", src: HazelGrouse_HybridMaleBack },
      { name: "Pale - Front", src: HazelGrouse_PaleMaleFront },
      { name: "Pale - Back", src: HazelGrouse_PaleMaleBack },
    ],
    female: [
      { name: "Brown - Front", src: HazelGrouse_BrownFemaleFront },
      { name: "Brown - Back", src: HazelGrouse_BrownFemaleBack },
      { name: "Dark - Front", src: HazelGrouse_DarkFemaleFront },
      { name: "Dark - Back", src: HazelGrouse_DarkFemaleBack },
      { name: "Light Brown - Front", src: HazelGrouse_LightBrownFemaleFront },
      { name: "Light Brown - Back", src: HazelGrouse_LightBrownFemaleBack },
      { name: "Ochre - Front", src: HazelGrouse_OchreFemaleFront },
      { name: "Ochre - Back", src: HazelGrouse_OchreFemaleBack },
      { name: "Pale - Front", src: HazelGrouse_PaleFemaleFront },
      { name: "Pale - Back", src: HazelGrouse_PaleFemaleBack },
    ]
  };

  // Table of contents data and smooth scroll handler
  const toc = [
    { id: 'features', title: 'Features' },
    {
      id: 'plumage-variants',
      title: 'Plumage variants',
      children: [
        { id: 'plumage-male', title: 'Male' },
        { id: 'plumage-female', title: 'Female' },
      ],
    },
    { id: 'plumage-variant-rarity', title: 'Plumage Variant Rarity' },
    
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
          <span>Hazel Grouse</span>
          <div className="wiki-edit-actions">  
          </div>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Hazel Grouse</div>
            <div className="wiki-sidebar-image">
              <img src={HazelGrouseMain} alt="Hazel Grouse" />
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
                  <span>330</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-gold">☗ Gold</span>
                  <span>390</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-diamond">☗ Diamond</span>
                  <span>435</span>
                </div>
              </div>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Weight</span>
              300g — 450g<br/>
              0.7lbs — 1lbs
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Plumage</span>
               <span className="wiki-fs-sm">
                  Brown, Dark, Grey, Hybrid, Light Brown, Ochre, Pale
               </span>
            </div>

            <div className="wiki-sidebar-header">Locations</div>
            <div className="wiki-sidebar-section">
               <div className="wiki-mb-4"><span className="wiki-link">Revontuli Coast</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main className="wiki-main">

            {/* Quote Block */}
            <div className="wiki-quote">
              "The Hazel Grouse is a very small grouse that can be found in mixed coniferous and deciduous forests across Northern Eurasia. Although it occurs in a very large geographic range, it has very specific habitat preferences that make individual populations vulnerable to changes in their local environment. Males are territorial and defend their territory year round. In spring they compete to attract females and breed. Females nest on the ground and raise their young alone."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-p-mb">
              The <strong>Hazel Grouse</strong> is a (<span className="wiki-link">class 1</span>) quail species that can be hunted on <span className="wiki-link">Revontuli Coast</span>.
            </p>

            {/* Table of Contents (interactive) */}
            <div className="wiki-toc">
              <div className="wiki-toc-title">
                🔢 Contents <span className="wiki-toc-toggle">[hide]</span>
              </div>
              <ol className="wiki-toc">
                {toc.map((item, i) => (
                  <li key={item.id} style={{marginBottom: item.children ? '6px' : '3px'}}>
                    <a href={`#${item.id}`} onClick={(e)=>{e.preventDefault(); handleScroll(item.id);}} style={{color:'#6fb2e6', textDecoration: 'none'}}>{item.title}</a>
                    {item.children && (
                      <ol style={{marginTop: '6px', marginLeft: '12px', listStyle: 'none', padding: 0}}>
                        {item.children.map((c, j) => (
                          <li key={c.id} className="wiki-mb-4">
                            <a href={`#${c.id}`} onClick={(e)=>{e.preventDefault(); handleScroll(c.id);}} style={{color:'#6fb2e6', textDecoration: 'none'}}>{`${i+1}.${j+1} ${c.title}`}</a>
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
           
            {/* Note: "Need Zone Times" section is NOT present in the provided screenshots for Hazel Grouse, so it is omitted here to remain accurate to the source. */}

            {/* PLUMAGE VARIANTS (Gallery) */}
            <h2 id="plumage-variants" className="wiki-h2">Plumage variants</h2>
            
            {/* Male Section */}
            <h3 id="plumage-male" className="wiki-h3 mt-2.5 text-[1.2rem] border-b-0">Male</h3>
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
            <h3 id="plumage-female" className="wiki-h3 mt-2.5 text-[1.2rem] border-b-0">Female</h3>
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
                            Brown (54.45%)<br/>
                            Grey (27.22%)<br/>
                            Dark (18.22%)
                        </td>
                        <td className="wiki-td">X</td>
                        <td className="wiki-td">X</td>
                        <td className="wiki-td">
                            Pale (0.07%)<br/>
                            Hybrid (0.04%)
                        </td>
                    </tr>
                     <tr>
                        <td className="wiki-td wiki-td-female">Female</td>
                        <td className="wiki-td">
                            Brown (74.70%)<br/>
                            Light Brown (12.50%)<br/>
                            Ochre (12.50%)
                        </td>
                        <td className="wiki-td">X</td>
                        <td className="wiki-td">
                            Dark (0.20%)<br/>
                            Pale (0.10%)
                        </td>
                        <td className="wiki-td">X</td>
                    </tr>
                </tbody>
            </table>

            {/* Trivia removed per request */}
            <AnimalsTableMini />
          </main>
        </div>
      </div>
    </div>
  );
};

export default HazelGrouse;