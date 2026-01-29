import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import DrinkingZoneIcon from '../../../assets/DrinkingZoneIcon.webp';
import class2Icon from '../../../assets/Class2Icon.webp'; // Class 2 for Raccoon Dog
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import RaccoonDogMain from '../../../assets/RaccoonDog.webp';

// Fur Variant Images (Placeholders)
import RaccoonDog_Albino from '../../../assets/RaccoonDog_Albino.webp';
import RaccoonDog_BlackWhite from '../../../assets/RaccoonDog_BlackWhite.webp';
import RaccoonDog_DarkBrown from '../../../assets/RaccoonDog_DarkBrown.webp';
import RaccoonDog_Grey from '../../../assets/RaccoonDog_Grey.webp';
import RaccoonDog_LightBrown from '../../../assets/RaccoonDog_LightBrown.webp';
import RaccoonDog_Orange from '../../../assets/RaccoonDog_Orange.webp';
import RaccoonDog_Piebald1 from '../../../assets/RaccoonDog_PiebaldVariation1.webp';
import RaccoonDog_Piebald2 from '../../../assets/RaccoonDog_PiebaldVariation2.webp';


const RaccoonDog = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  const needZonesData = [
    {
      name: "Revontuli Coast / Salzwiesen Park",
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
    { label: "Behavior", value: "Social & skittish" },
    { label: "Habitat", value: "Forests & wetlands" },
    { label: "Senses", value: "Excellent smell & good hearing, poor vision" },
    { label: "Social", value: "Mated pairs or small groups with strong bonds" },
    { label: "Active", value: "Predominantly nocturnal" },
    { label: "Recommended Equipment", value: "Class 2 Ammo" },
    { label: "Species", value: "Nyctereutes grypus", italic: true, isLink: true },
    { label: "Difficulty", value: "Average" },
  ];

  // Fur Gallery Data
  const furGallery = [
    { name: "Albino", src: RaccoonDog_Albino },
    { name: "Black White", src: RaccoonDog_BlackWhite },
    { name: "Dark Brown", src: RaccoonDog_DarkBrown },
    { name: "Grey", src: RaccoonDog_Grey },
    { name: "Light Brown", src: RaccoonDog_LightBrown },
    { name: "Orange", src: RaccoonDog_Orange },
    { name: "Piebald Variation 1", src: RaccoonDog_Piebald1 },
    { name: "Piebald Variation 2", src: RaccoonDog_Piebald2 },
  ];

  // Trivia Data
  const triviaData = [
    "Raccoon dogs are named after the Common Raccoon due to their obvious similarities, but raccoon dogs are more closely related to true foxes like the Red Fox.",
    "Raccoon dogs are commonly depicted in Japanese pop culture, where they are called 'tanuki.' For example, in the 1988 Nintendo game Super Mario Bros. 3, Mario can collect a power-up that gives him a 'Tanooki Suit'."
  ];

  // Smooth scroll helper for in-page TOC links
  const scrollToId = (id) => (e) => {
    if (e && e.preventDefault) e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (typeof window !== 'undefined' && window.history && window.history.replaceState) {
      window.history.replaceState(null, '', `#${id}`);
    }
  };

  return (
    <div className="wiki-page">
      <div className="wiki-inner">
        
        {/* PAGE HEADER */}
        <div className="wiki-header">
          <span>Raccoon Dog</span>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Raccoon Dog</div>
            <div className="wiki-sidebar-image">
              <img src={RaccoonDogMain} alt="Raccoon Dog" />
            </div>
            
            <div className="wiki-sidebar-header">General Information</div>
            
            {/* */}
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Class</span>
              <span><img src={class2Icon} alt="Class 2" className="wiki-class-icon-lg"/>2</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Difficulty</span>
              <span>1: Trivial — 9: Legendary</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Trophy Type</span>
              <span>Weight</span>
              <div className="wiki-trophy-grid">
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-silver">◆ Silver</span>
                  <span>4.40</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-gold">☗ Gold</span>
                  <span>7.20</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-diamond">☗ Diamond</span>
                  <span>9.29</span>
                </div>
              </div>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Weight</span>
              ? — 10kg<br/>
              <span className="wiki-sidebar-muted">? — 22lbs</span>
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Fur</span>
               <span className="wiki-fs-sm">
                  Albino, Black White, Dark Brown, Light Brown, Grey, Orange, Piebald
               </span>
            </div>

            <div className="wiki-sidebar-header">Locations</div>
            <div className="wiki-sidebar-section">
               <div className="wiki-mb-4"><span className="wiki-link">Revontuli Coast</span></div>
               <div className="wiki-mb-4"><span className="wiki-link">Salzwiesen Park</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main className="wiki-main">

            {/* Quote Block */}
            <div className="wiki-quote">
              "The Raccoon Dog, also known as 'Tanuki' in Japan, is a small canid native to Asia. It was introduced in the USSR for its fur, but is now rapidly spreading westward across Europe as an invasive species. Omnivorous, they feed on a wide variety of small prey, and fruits, disrupting local ecosystems. Raccoon dogs live in mated pairs or small familial groups with strong bonds. They hunt primarily at night, relying on their excellent sense of smell to find food. This nocturnal lifestyle, small size and skittish nature makes them hard to track down and hunt. Raccoon Dogs are named for their superficial resemblance to raccoons, but the 2 species are not closely related."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-p-mb">
              The <strong>Raccoon Dog</strong> is a <span className="wiki-link">class 2</span> species present in <span className="wiki-link">Revontuli Coast</span> and <span className="wiki-link">Salzwiesen Park</span>.
            </p>

            {/* Table of Contents */}
            <div className="wiki-toc">
              <div className="wiki-toc-title">
                🔢 Contents <span className="wiki-toc-toggle">[hide]</span>
              </div>
              <ol className="wiki-toc">
                <li><a href="#features" className="wiki-link" onClick={scrollToId('features')}>Features</a></li>
                <li><a href="#need-zones" className="wiki-link" onClick={scrollToId('need-zones')}>Need Zone Times</a></li>
                <li><a href="#fur-variants" className="wiki-link" onClick={scrollToId('fur-variants')}>Fur variants</a></li>
                <li><a href="#variant-rarity" className="wiki-link" onClick={scrollToId('variant-rarity')}>Fur Variant Rarity</a></li>
                <li><a href="#trivia" className="wiki-link" onClick={scrollToId('trivia')}>Trivia</a></li>
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
                        {/* Note: Screenshot 3 does not list a specific map in the header, so using general/common maps for Need Zones */}
                        <tr><th colSpan="2" className="wiki-th wiki-th-center">Revontuli Coast / Salzwiesen Park</th></tr>
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
                                Grey (42.60%)<br/>
                                Light Brown (42.60%)<br/>
                                Black-White (14.26%)
                            </td>
                            <td className="wiki-td">X</td>
                            <td className="wiki-td">
                                Dark Brown (0.23%)<br/>
                                Orange (0.23%)
                            </td>
                            <td className="wiki-td">
                                Albino (0.03%)<br/>
                                Piebald Variation 1 (0.03%)<br/>
                                Piebald Variation 2 (0.03%)
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

            <div className="wiki-mt-40">
                <AnimalsTableMini />
            </div>
            
          </main>
        </div>
      </div>
    </div>
  );
};

export default RaccoonDog;