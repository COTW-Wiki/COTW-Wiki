import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import DrinkingZoneIcon from '../../../assets/DrinkingZoneIcon.webp';
import class2Icon from '../../../assets/Class2Icon.webp'; // Class 2 for Common Raccoon
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import CommonRaccoonMain from '../../../assets/CommonRaccoon.webp';
import ShotSchemeImage from '../../../assets/Common_Raccoon_shot_scheme.webp';

// Fur Variant Images (Placeholders)
import CommonRaccoon_Albino from '../../../assets/CommonRaccoon_Albino.webp';
import CommonRaccoon_Blonde from '../../../assets/CommonRaccoon_Blonde.webp';
import CommonRaccoon_BlondePiebald from '../../../assets/CommonRaccoon_BlondePiebald.webp';
import CommonRaccoon_Brown from '../../../assets/CommonRaccoon_Brown.webp';
import CommonRaccoon_Grey from '../../../assets/CommonRaccoon_Grey.webp';
import CommonRaccoon_GreyPiebald from '../../../assets/CommonRaccoon_GreyPiebald.webp';
import CommonRaccoon_Melanistic from '../../../assets/CommonRaccoon_Melanistic.webp';


const CommonRaccoon = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  const needZonesData = [
    {
      name: "Mississippi Acres / New England Mountains / Salzwiesen Park", // Maps inferred from intro text
      schedule: [
        { time: "00:00 - 03:30", type: "Drinking", icon: DrinkingZoneIcon },
        { time: "03:00 - 06:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "06:00 - 10:30", type: "Resting", icon: RestingZoneIcon },
        { time: "10:00 - 13:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "13:00 - 16:30", type: "Resting", icon: RestingZoneIcon },
        { time: "16:00 - 20:30", type: "Resting", icon: RestingZoneIcon },
        { time: "20:00 - 00:30", type: "Feeding", icon: FeedingZoneIcon },
      ]
    }
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Intelligent and adaptable" },
    { label: "Habitat", value: "Prefers wooded habitats near water" },
    { label: "Senses", value: "Excellent smell and hearing, average vision" },
    { label: "Social", value: "Forms small, loose, same sex social groups" },
    { label: "Active", value: "Mostly at night, from dusk to dawn" },
    { label: "Recommended Equipment", value: "Class 2 Ammo, Raccoon \"Squall\" Caller" },
    { label: "Species", value: "Procyon lotor", italic: true, isLink: true },
    { label: "Difficulty", value: "Average" },
  ];

  // Fur Gallery Data
  const furGallery = [
    { name: "Albino", src: CommonRaccoon_Albino },
    { name: "Blonde", src: CommonRaccoon_Blonde },
    { name: "Blonde Piebald", src: CommonRaccoon_BlondePiebald },
    { name: "Brown", src: CommonRaccoon_Brown },
    { name: "Grey", src: CommonRaccoon_Grey },
    { name: "Grey Piebald", src: CommonRaccoon_GreyPiebald },
    { name: "Melanistic", src: CommonRaccoon_Melanistic },
  ];

  // Trivia Data
  const triviaData = [
    "The Common Raccoon's scientific name Procyon lotor means Pre-Dog Washer in Neo-Latin, on account of their doglike appearance and their propensity to \"wash\" their food.",
    "The word Raccoon comes from a local Native American word meaning, animal that scratches with its hands.",
    "Raccoons are very nimble with their hands. So much so, that early biologists once thought the Raccoon could have been a distant Primate relative. Modern phylogenetic analysis has since clarified that this is not true; but even among its own taxon it's abnormally dexterous. So much so that it's touch is considered an essential sense for the animal, using its hands to \"see\" in the dark.",
    "They are the sole representative of the genus Procyon in game, and is also the largest member of the family Procyonidae in the world.",
    "A common name for the Raccoon is the Trash Panda. As the name suggests, they are known for getting into trash. And this behavior is represented in game, as their is a small chance for a Raccoon to climb into a trashcan if it is nearby."
  ];

  // References List
  const references = [
    "https://www.pbs.org/wnet/nature/raccoon-nation-raccoon-fact-sheet/7553/",
    "https://northernwoodlands.org/outside_story/article/raccoons-hands",
    "https://pubmed.ncbi.nlm.nih.gov/10512570/",
    "https://www.vancouverwildlife.com/blogs/the-sensitive-side-of-raccoons-a-closer-look-at-their-feet-and-sense-of-touch/",
    "https://www.sciencedirect.com/topics/immunology-and-microbiology/procyonidae",
    "https://www.youtube.com/shorts/MTZmfsyl20w"
  ];

  return (
    <div className="wiki-page">
      <div className="wiki-inner">
        
        {/* PAGE HEADER */}
        <div className="wiki-header">
          <span>Common Raccoon</span>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Common Raccoon</div>
            <div className="wiki-sidebar-image">
              <img src={CommonRaccoonMain} alt="Common Raccoon" />
            </div>
            
            <div className="wiki-sidebar-header">General Information</div>
            
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Class</span>
              <span><img src={class2Icon} alt="Class 2" className="wiki-class-icon-lg"/>2</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Difficulty</span>
              <span>1: Trivial — 5: Medium</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Trophy Type</span>
              <span>Weight</span>
              <div className="wiki-trophy-grid">
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-silver">◆ Silver</span>
                  <span>5</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-gold">☗ Gold</span>
                  <span>9</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-diamond">☗ Diamond</span>
                  <span>12</span>
                </div>
              </div>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Weight</span>
              3kg — 13kg<br/>
              <span className="wiki-sidebar-muted">7lbs — 29lbs</span>
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Fur</span>
               <span className="wiki-fs-sm">
                  Albino, Blonde, Blonde Piebald, Brown, Grey, Grey Piebald, Melanistic
               </span>
            </div>

            <div className="wiki-sidebar-header">Locations</div>
            <div className="wiki-sidebar-section">
               <div className="wiki-mb-4"><span className="wiki-link">Mississippi Acres Preserve</span></div>
               <div className="wiki-mb-4"><span className="wiki-link">New England Mountains</span></div>
               <div className="wiki-mb-4"><span className="wiki-link">Salzwiesen Park</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main className="wiki-main">

            {/* Quote Block */}
            <div className="wiki-quote">
              "The common raccoon is an adaptable omnivorous land mammal native to North and Central America. They typically prefer woodlands and wetlands, due to their high adaptability they can be found in a wide variety of habitats across the continent - including urban areas where they are considered pests. Raccoons have also been introduced in Western Europe, the Caucasus and Japan by humans. Raccoons are mostly nocturnal animals that spend the day hidden in tree cavities, hollow logs or dens dug in the ground. Due to this, hunter often use callers to lure them out of their nests."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-p-mb">
              The <strong>Common Raccoon</strong> is a <span className="wiki-link">class 2</span> animal that can be hunted on <span className="wiki-link">Mississippi Acres Preserve</span>, <span className="wiki-link">New England Mountains</span>, and <span className="wiki-link">Salzwiesen Park</span>. It was originally a class 1 animal before being changed to class 2 in a later patch.
            </p>

            {/* Table of Contents */}
            <div className="wiki-toc">
              <div className="wiki-toc-title">
                🔢 Contents <span className="wiki-toc-toggle">[hide]</span>
              </div>
              <ol className="wiki-toc">
                <li><a href="#features" className="wiki-link" onClick={scrollToId('features')}>Features</a></li>
                <li><a href="#need-zones" className="wiki-link" onClick={scrollToId('need-zones')}>Need Zone Times</a></li>
                <li><a href="#shot-scheme" className="wiki-link" onClick={scrollToId('shot-scheme')}>Shot scheme</a></li>
                <li><a href="#fur-variants" className="wiki-link" onClick={scrollToId('fur-variants')}>Fur variants</a></li>
                <li><a href="#fur-variant-rarity" className="wiki-link" onClick={scrollToId('fur-variant-rarity')}>Fur Variant Rarity</a></li>
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
                        {/* Note: Map name implied from general context, table header matches screenshot columns */}
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

             {/* SHOT SCHEME */}
             <h2 id="shot-scheme" className="wiki-h2">Shot scheme</h2>
            <div className="wiki-shot-container">
                <div className="wiki-shot-container">
                   <img src={ShotSchemeImage} alt="Shot Scheme" className="wiki-shot-scheme-img" />
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
            <h2 id="fur-variant-rarity" className="wiki-h2">Fur Variant Rarity</h2>
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
                                Male
                            </td>
                            <td className="wiki-td">
                                Grey (37.35%)<br/>
                                Brown (37.35%)<br/>
                                Blonde (25.00%)
                            </td>
                            <td className="wiki-td">X</td>
                            <td className="wiki-td">
                                Piebald Grey (0.10%)<br/>
                                Piebald Blonde (0.10%)
                            </td>
                            <td className="wiki-td">
                                Albino (0.05%)<br/>
                                Melanistic (0.05%)
                            </td>
                        </tr>
                        <tr>
                            <td className="wiki-td wiki-td-female">
                                Female
                            </td>
                            <td className="wiki-td">
                                Brown (59.62%)<br/>
                                Blonde (39.90%)
                            </td>
                            <td className="wiki-td">X</td>
                            <td className="wiki-td">
                                Piebald Grey (0.16%)<br/>
                                Piebald Blonde (0.16%)
                            </td>
                            <td className="wiki-td">
                                Albino (0.08%)<br/>
                                Melanistic (0.08%)
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

export default CommonRaccoon;