import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import DrinkingZoneIcon from '../../../assets/DrinkingZoneIcon.webp';
import class6Icon from '../../../assets/Class6Icon.webp'; // Class 6 for Gray Wolf
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import GrayWolfMain from '../../../assets/GrayWolf.webp';
import ShotSchemeImg from '../../../assets/Gray_Wolf_shot_scheme.webp';

// Fur Variant Images - Standard
import GrayWolf_Acromelanistic from '../../../assets/GrayWolf_Acromelanistic.webp';
import GrayWolf_Albino from '../../../assets/GrayWolf_Albino.webp';
import GrayWolf_Brown from '../../../assets/GrayWolf_Brown.webp';
import GrayWolf_DarkGrey from '../../../assets/GrayWolf_DarkGrey.webp';
import GrayWolf_EggWhite from '../../../assets/GrayWolf_EggWhite.webp';
import GrayWolf_Grey from '../../../assets/GrayWolf_Grey.webp';
import GrayWolf_Melanistic from '../../../assets/GrayWolf_Melanistic.webp';
import GrayWolf_MelanisticCharcoal from '../../../assets/GrayWolf_MelanisticCharcoal.webp';
import GrayWolf_RedBrown from '../../../assets/GrayWolf_RedBrown.webp';

// Fur Variant Images - Great Ones (Fabled)
import GrayWolf_FabledBattlethorneLeftSide from '../../../assets/GrayWolf_FabledBattlethorneLeftSide.webp';
import GrayWolf_FabledBattlethorneRightSide from '../../../assets/GrayWolf_FabledBattlethorneRightSide.webp';
import GrayWolf_FabledDawnbreakRightSide from '../../../assets/GrayWolf_FabledDawnbreakRightSide.webp';
import GrayWolf_FabledFrostbiteRightSide from '../../../assets/GrayWolf_FabledFrostbiteRightSide.webp';
import GrayWolf_FabledGravehideRightSide from '../../../assets/GrayWolf_FabledGravehideRightSide.webp';
import GrayWolf_FabledHollowRightSide from '../../../assets/GrayWolf_FabledHollowRightSide.webp';
import GrayWolf_FabledRazorwindRightSide from '../../../assets/GrayWolf_FabledRazorwindRightSide.webp';
import GrayWolf_FabledScarborneLeftSide from '../../../assets/GrayWolf_FabledScarborneLeftSide.webp';
import GrayWolf_FabledScarborneRightSide from '../../../assets/GrayWolf_FabledScarborneRightSide.webp';
import GrayWolf_FabledTwinsoulLeftSide from '../../../assets/GrayWolf_FabledTwinsoulLeftSide.webp';
import GrayWolf_FabledTwinsoulRightSide from '../../../assets/GrayWolf_FabledTwinsoulRightSide.webp';
import GrayWolf_FabledVanguardRightSide from '../../../assets/GrayWolf_FabledVanguardRightSide.webp';


const GrayWolf = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  const needZonesData = [
    {
      name: "Askiiy Ridge",
      schedule: [
        { time: "00:00 - 03:00", type: "Drinking", icon: DrinkingZoneIcon },
        { time: "03:00 - 06:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "06:00 - 10:00", type: "Resting", icon: RestingZoneIcon },
        { time: "10:00 - 14:00", type: "Resting", icon: RestingZoneIcon },
        { time: "14:00 - 18:00", type: "Resting", icon: RestingZoneIcon },
        { time: "18:00 - 21:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "21:00 - 00:00", type: "Feeding", icon: FeedingZoneIcon },
      ]
    }
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Social, territorial, defensive" },
    { label: "Habitat", value: "Forested areas" },
    { label: "Senses", value: "Legendary sense of hearing and smell, excellent vision" },
    { label: "Social", value: "Organized and gregarious, live in coordinated packs with internal social structures" },
    { label: "Active", value: "Dawn, Dusk and intermittently throughout the day" },
    { label: "Recommended Equipment", value: "Class 6 Ammo, Distressed Callers" },
    { label: "Species", value: "Canis lupus", italic: true, isLink: true },
    { label: "Difficulty", value: "Hard" },
  ];

  // Fur Gallery Data - Standard
  const furGallery = [
    { name: "Acromelanistic", src: GrayWolf_Acromelanistic },
    { name: "Albino", src: GrayWolf_Albino },
    { name: "Brown", src: GrayWolf_Brown },
    { name: "Dark Grey", src: GrayWolf_DarkGrey },
    { name: "Egg White", src: GrayWolf_EggWhite },
    { name: "Grey", src: GrayWolf_Grey },
    { name: "Melanistic", src: GrayWolf_Melanistic },
    { name: "Melanistic Charcoal", src: GrayWolf_MelanisticCharcoal },
    { name: "Red Brown", src: GrayWolf_RedBrown },
  ];

  // Great Ones Gallery
  const greatOnesGallery = [
    { name: "Fabled Battlethorne (Left)", src: GrayWolf_FabledBattlethorneLeftSide },
    { name: "Fabled Battlethorne (Right)", src: GrayWolf_FabledBattlethorneRightSide },
    { name: "Fabled Dawnbreak", src: GrayWolf_FabledDawnbreakRightSide },
    { name: "Fabled Frostbite", src: GrayWolf_FabledFrostbiteRightSide },
    { name: "Fabled Gravehide", src: GrayWolf_FabledGravehideRightSide },
    { name: "Fabled Hollow", src: GrayWolf_FabledHollowRightSide },
    { name: "Fabled Razorwind", src: GrayWolf_FabledRazorwindRightSide },
    { name: "Fabled Scarborne (Left)", src: GrayWolf_FabledScarborneLeftSide },
    { name: "Fabled Scarborne (Right)", src: GrayWolf_FabledScarborneRightSide },
    { name: "Fabled Twinsoul (Left)", src: GrayWolf_FabledTwinsoulLeftSide }, 
    { name: "Fabled Twinsoul (Right)", src: GrayWolf_FabledTwinsoulRightSide },
    { name: "Fabled Vanguard", src: GrayWolf_FabledVanguardRightSide },
  ];

  // Tips Data
  const tipsData = [
    "The Gray Wolf is one of a handful of species in game that can go aggressive. But unlike the Bison, hunting aggressive wolves is logistically more challenging. You can prepare for an attack if you hear a un-trackable persistent growling.",
    "Once aggressive the Gray Wolf pack will try and surround you, sometimes even running in circles around you.",
    "Players have found that by killing the \"Alpha\" (highest level wolf) it seems the rest of the pack will run away. However, this is unconfirmed by the devs, and could just be a coincidence.",
    "Make sure to bring a powerful sidearm and some First Aid Kits. I recommend using the Rhino 454."
  ];

  // Trivia Data
  const triviaData = [
    "The Gray Wolf's scientific name Canis Lupus literally means \"Dog Wolf\"",
    "It is one of 3 animals in game that use the American spelling of \"Gray\" rather than the English \"Grey\". The other is the Gray Fox and Eastern Gray Kangaroo",
    "Wolf howls can be heard up to 6 miles (Nearly 10km) in forests and 10 miles (16km) in a open habitat like plains, tundra, etc.",
    "Despite its prominence and significance in Native American culture, and American Culture more broadly, the Gray Wolf evolved in Eurasia before migrating over to North America. In fact, the only Native Wolf species to North America is the now extinct Dire Wolf ('Aenocyon dirus who, based off recent findings, isn't actually a wolf.",
    "Melanistic wolves are significantly more common in North American than in Europe. This is because of interbreeding that happened thousands of years ago between wild wolves and domesticated dogs."
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
          <span>Gray Wolf</span>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Gray Wolf</div>
            <div className="wiki-sidebar-image">
              <img src={GrayWolfMain} alt="Gray Wolf" className="max-w-full max-h-[180px] object-contain" />
            </div>
            
            <div className="wiki-sidebar-header">General Information</div>
            
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Class</span>
              <span><img src={class6Icon} alt="Class 6" className="inline-block wiki-class-icon-sm align-middle mr-1.5"/>6</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Difficulty</span>
              <span>1: Trivial — 9: Legendary</span><br/>
              <span>10: Fabled</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Trophy Type</span>
              <span>Skull</span>
              <div className="wiki-trophy-grid">
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-silver">◆ Silver</span>
                  <span>32</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-gold">☗ Gold</span>
                  <span>36</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-diamond">☗ Diamond</span>
                  <span>39</span>
                </div>
              </div>
              <div className="wiki-great-one-badge">💎 Great One</div>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Weight</span>
              30kg — 80kg<br/>
              <span className="wiki-sidebar-muted">66lbs — 176lbs</span>
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Fur</span>
               <span className="wiki-fs-sm">
                 Acromelanistic, Albino, Brown, Egg White, Dark Grey, Grey, Melanistic, Melanistic Charcoal, Red Brown
               </span>
               <br/>
               <span className="wiki-block-label">Fabled Exclusive:</span>
               <span className="wiki-fs-sm">
                 Battlethorne, Dawnbreak, Frostbite, Gravehide, Hollow, Razorwind, Scarborne, Twinsoul, Vanguard
               </span>
            </div>

            <div className="wiki-sidebar-header">Locations</div>
            <div className="wiki-sidebar-section">
               <div className="wiki-mb-4"><span className="wiki-link">Yukon Valley Nature Reserve</span></div>
               <div className="wiki-mb-4"><span className="wiki-link">Medved-Taiga National Park</span></div>
               <div className="wiki-mb-4"><span className="wiki-link">Askiiy Ridge Hunting Preserve</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main className="wiki-main">

            {/* Quote Block */}
            <div className="wiki-quote">
              "One of the most widely researched species in the world, and simultaneously one of the most popular motifs in folklore and culture, the gray wolf is a staple of humanity's interactions with nature. The largest specimen of all wild canids, the Alaskan gray wolf can grow to 75.00 kg, but specimens this large are rare. Male gray wolves stand at nearly 1.00 m in height and over 1.50 im in length. Their social capabilities make them vicious and effective hunters, especially in larger packs and when led by an effective alpha pair, who eat first, lead the pack when traveling, and initiate the pack howl, known as a rally. In the event of a confrontation walk backwards and avoid making yourself look small."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-p-mb">
              The <strong>Gray Wolf</strong> is a <span className="wiki-link">class 6</span> predator. It can be hunted in <span className="wiki-link">Yukon Valley</span>, <span className="wiki-link">Askiiy Ridge</span>, and it was backfilled to <span className="wiki-link">Medved Taiga</span> with the Granite Update in December 2022. It was the first wolf species to be featured in the game. It is also featured as a Great One as of 2025.
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
                <li><a href="#fur-variants" onClick={(e)=>scrollToId(e,'fur-variants')} className="wiki-link">Fur variants</a></li>
                <li><a href="#great-ones" onClick={(e)=>scrollToId(e,'great-ones')} className="wiki-link">Great Ones</a></li>
                <li><a href="#variant-rarity" onClick={(e)=>scrollToId(e,'variant-rarity')} className="wiki-link">Fur Variant Rarity</a></li>
                <li><a href="#tips" onClick={(e)=>scrollToId(e,'tips')} className="wiki-link">Tips</a></li>
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
                        <tr><th colSpan="2" className="wiki-th wiki-th-center">Askiiy Ridge</th></tr>
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
            <h2 className="wiki-h2" id="fur-variants">Fur variants</h2>
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

             {/* GREAT ONES */}
             <h2 className="wiki-h2" id="great-ones">Great Ones</h2>
            <div className="wiki-gallery-grid">
              {greatOnesGallery.map((item, i) => (
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
                                Brown (49.85%)<br/>
                                Grey (49.85%)
                            </td>
                            <td className="wiki-td">
                                X
                            </td>
                            <td className="wiki-td">
                                X
                            </td>
                            <td className="wiki-td">
                                Dark Gray (0.07%)<br/>
                                Eggwhite (0.07%)<br/>
                                Red Brown (0.07%)<br/>
                                Acromelanistic (0.03%)<br/>
                                Albino (0.03%)<br/>
                                Melanistic (0.03%)<br/>
                                Melanistic Charcoal (0.03%)
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* TIPS */}
            <h2 id="tips" className="wiki-h2">Tips</h2>
            <p className="wiki-mb-15">
               {tipsData[0]}
            </p>
            <p className="wiki-mb-15">
               {tipsData[1]}
            </p>
             <p className="wiki-mb-15">
               {tipsData[2]}
            </p>
             <p className="wiki-mb-15">
               {tipsData[3]}
            </p>

            {/* TRIVIA */}
            <h2 id="trivia" className="wiki-h2">Trivia</h2>
            <ul className="wiki-ul wiki-ul-disc">
                {triviaData.map((point, idx) => (
                    <li key={idx} className="wiki-mb-10">{point}</li>
                ))}
            </ul>

            {/* REFERENCES */}
            <h2 id="references" className="wiki-h2">References</h2>
            <ol style={{fontSize: '0.95rem', paddingLeft: '20px', marginBottom: '20px'}}>
              <li style={{marginBottom: '6px'}}>Gray Wolf Need Zones, Askiy Ridge</li>
              <li style={{marginBottom: '6px'}}><a href="https://www.scientificamerican.com/article/dire-wolves-were-not-really-wolves-new-genetic-clues-reveal/" className="wiki-link" target="_blank" rel="noopener noreferrer">Dire wolves were not really wolves — Scientific American</a></li>
              <li style={{marginBottom: '6px'}}><a href="https://www.thoughtco.com/mystery-of-north-americas-black-wolves-129716" className="wiki-link" target="_blank" rel="noopener noreferrer">Mystery of North America's Black Wolves — ThoughtCo</a></li>
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

export default GrayWolf;