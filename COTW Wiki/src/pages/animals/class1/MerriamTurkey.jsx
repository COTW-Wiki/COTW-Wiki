import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import class1Icon from '../../../assets/Class1Icon.webp';
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import MerriamTurkeyMain from '../../../assets/MerriamsTurkey.webp';


// Male Plumage Images
import MerriamTurkey_AlbinoMale from '../../../assets/MerriamsTurkey_AlbinoMale.webp';
import MerriamTurkey_BrownMale from '../../../assets/MerriamsTurkey_BrownMale.webp';
import MerriamTurkey_LeucisticMale from '../../../assets/MerriamsTurkey_LeucisticMale.webp';
import MerriamTurkey_LightBrownMale from '../../../assets/MerriamsTurkey_LightBrownMale.webp';
import MerriamTurkey_MelanisticMale from '../../../assets/MerriamsTurkey_MelanisticMale.webp';

// Female Plumage Images
import MerriamTurkey_AlbinoFemale from '../../../assets/MerriamsTurkey_AlbinoFemale.webp';
import MerriamTurkey_BrownFemale from '../../../assets/MerriamsTurkey_BrownFemale.webp';
import MerriamTurkey_LeucisticFemale from '../../../assets/MerriamsTurkey_LeucisticFemale.webp';
import MerriamTurkey_LightBrownFemale from '../../../assets/MerriamsTurkey_LightBrownFemale.webp';
import MerriamTurkey_MelanisticFemale from '../../../assets/MerriamsTurkey_MelanisticFemale.webp';


const MerriamTurkey = () => {

  // --- DATA SOURCES ---

  // Need Zone Times (Updated to match screenshot with 3 locations)
  const needZonesData = [
    {
      name: "Silver Ridge Peaks",
      schedule: [
        { time: "00:00 - 04:00", type: "Resting", icon: RestingZoneIcon },
        { time: "04:00 - 11:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "11:00 - 14:00", type: "Resting", icon: RestingZoneIcon },
        { time: "14:00 - 20:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "20:00 - 00:00", type: "Resting", icon: RestingZoneIcon },
      ]
    },
    {
      name: "Te Awaroa National Park",
      schedule: [
        { time: "00:00 - 04:30", type: "Resting", icon: RestingZoneIcon },
        { time: "04:00 - 08:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "08:00 - 11:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "11:00 - 14:30", type: "Resting", icon: RestingZoneIcon },
        { time: "14:00 - 17:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "17:00 - 20:30", type: "Feeding", icon: FeedingZoneIcon },
        { time: "20:00 - 00:00", type: "Resting", icon: RestingZoneIcon },
      ]
    },
    {
      name: "Layton Lake District",
      schedule: [
        { time: "00:00-04:00", type: "Resting", icon: RestingZoneIcon },
        { time: "04:00-08:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "08:00-11:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "11:00-14:00", type: "Resting", icon: RestingZoneIcon },
        { time: "14:00-17:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "17:00-20:00", type: "Feeding", icon: FeedingZoneIcon },
      ]
    }
  ];

  // Features Table (Updated text from screenshot)
  const features = [
    { label: "Behavior", value: "Wary, shy" },
    { label: "Habitat", value: "Forests and grasslands" },
    { label: "Senses", value: "Strong movement vision; weak sense of smell" },
    { label: "Social", value: "Highly social and tend to gather near each other" },
    { label: "Active", value: "Daytime" },
    { label: "Recommended Equipment", value: "Class 1 Ammo, Turkey Decoys, Turkey Caller" },
    { label: "Species", value: "Meleagris gallopavo", italic: true, isLink: true },
    { label: "Difficulty", value: "Easy" },
  ];

  // Plumage Gallery Data (Added Dark Brown placeholder to match list)
  const plumageGallery = {
    male: [
      { name: "Albino", src: MerriamTurkey_AlbinoMale },
      { name: "Brown", src: MerriamTurkey_BrownMale },
      { name: "Dark Brown", src: MerriamTurkey_BrownMale }, // Reusing Brown image as placeholder
      { name: "Leucistic", src: MerriamTurkey_LeucisticMale },
      { name: "Light Brown", src: MerriamTurkey_LightBrownMale },
      { name: "Melanistic", src: MerriamTurkey_MelanisticMale },
    ],
    female: [
      { name: "Albino", src: MerriamTurkey_AlbinoFemale },
      { name: "Brown", src: MerriamTurkey_BrownFemale },
      { name: "Dark Brown", src: MerriamTurkey_BrownFemale }, // Reusing Brown image as placeholder
      { name: "Leucistic", src: MerriamTurkey_LeucisticFemale },
      { name: "Light Brown", src: MerriamTurkey_LightBrownFemale },
      { name: "Melanistic", src: MerriamTurkey_MelanisticFemale },
    ]
  };

  // Smooth-scroll helper for TOC links
  const scrollToId = (id) => (e) => {
    if (e && e.preventDefault) e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="wiki-page">
      <div className="wiki-inner">
        
        {/* PAGE HEADER */}
        <div className="wiki-header">
          <span>Merriam Turkey</span>
          <div className="wiki-edit-actions">
          </div>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Merriam Turkey</div>
            <div className="wiki-sidebar-image">
              <img src={MerriamTurkeyMain} alt="Merriam Turkey" />
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
                  <span>3.36</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-gold">☗ Gold</span>
                  <span>4.08</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-diamond">☗ Diamond</span>
                  <span>4.62</span>
                </div>
              </div>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Weight</span>
              3.6kg — 11kg<br/>
              8lbs — 24lbs
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Plumage</span>
               <span className="wiki-fs-sm">
                  Albino, Brown, Dark-Brown, Leucistic, Light Brown, Melanistic
               </span>
            </div>

            <div className="wiki-sidebar-header">Locations</div>
            <div className="wiki-sidebar-section">
               <div className="wiki-mb-4"><span className="wiki-link">Silver Ridge Peaks</span></div>
               <div className="wiki-mb-4"><span className="wiki-link">Te Awaroa National Park</span></div>
               <div className="wiki-mb-4"><span className="wiki-link">Layton Lake District</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main className="wiki-main">

            {/* Quote Block */}
            <div className="wiki-quote">
              "Turkeys are native to North America, and turkey hunting is big all across the continent. It's so popular that hunters are warned not to stalk them in case they might be heading towards another hunter's ambush. Turkeys are land roaming animals but are known to be able to fly around 400.00 m in a single go. They can easily climb trees and enjoy using them as hiding areas from ground predators while they roost. They're known to be very unpredictable and extremely easy to spook. As part of the Galliformes bird order, they are closely related to other game birds such as pheasants, partridge, and quail. Males are called jakes, gobblers or toms, with a female is called a jenny."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-p-mb">
              The <strong>Merriam Turkey</strong> is a <span className="wiki-link">class 1</span> species of Turkey introduced with the release of <span className="wiki-link">Silver Ridge Peaks</span>. It also dwells in <span className="wiki-link">Te Awaroa National Park</span> and was retroactively added to <span className="wiki-link">Layton Lake District</span>. It is the first of 3 turkey species in game. The other turkey species include the <span className="wiki-link">Rio Grande Turkey</span> and the <span className="wiki-link">Eastern Wild Turkey</span>.
            </p>

            {/* Table of Contents Placeholder */}
            <div className="wiki-toc">
              <div className="wiki-toc-title">
                🔢 Contents <span className="wiki-toc-toggle">[hide]</span>
              </div>
              <ol className="wiki-toc">
                <li><a href="#features" className="wiki-link" onClick={scrollToId('features')}>Features</a></li>
                <li><a href="#need-zone-times" className="wiki-link" onClick={scrollToId('need-zone-times')}>Need Zone Times</a></li>
                <li>
                  <a href="#plumage-variants" className="wiki-link" onClick={scrollToId('plumage-variants')}>Plumage variants</a>
                  <ul >
                    <li><a href="#plumage-male" className="wiki-link" onClick={scrollToId('plumage-male')}>3.1. Male</a></li>
                    <li><a href="#plumage-female" className="wiki-link" onClick={scrollToId('plumage-female')}>3.2. Female</a></li>
                  </ul>
                </li>
                <li><a href="#plumage-rarity" className="wiki-link" onClick={scrollToId('plumage-rarity')}>Plumage Variant Rarity</a></li>
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
                        {item.isLink ? <span className="wiki-link">{item.value}</span> : <span dangerouslySetInnerHTML={{ __html: item.value }} />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            {/* NEED ZONE TIMES */}
            <h2 id="need-zone-times" className="wiki-h2">Need Zone Times</h2>
            <div style={{display:'flex', gap:'5px', flexWrap: 'wrap'}}>
                {needZonesData.map((zoneData, idx) => (
                  <div key={idx} style={{flex: '1 1 200px'}}>
                    <table className="wiki-table mb-0">
                        <thead>
                            <tr><th colSpan="2" className="wiki-th wiki-th-center">{zoneData.name}</th></tr>
                            <tr>
                                <th className="wiki-th wiki-th-alt">Times</th>
                                <th className="wiki-th wiki-th-alt">Activity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {zoneData.schedule.map((zone, i) => (
                            <tr key={i}>
                                <td className="wiki-td">{zone.time}</td>
                                <td className="wiki-td"><img src={zone.icon} alt={zone.type} className="wiki-class-icon"/> {zone.type}</td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                  </div>
                ))}
            </div>

            {/* PLUMAGE VARIANTS (Gallery) */}
            <h2 id="plumage-variants" className="wiki-h2">Plumage variants</h2>
            
            {/* Male Section */}
            <h3 id="plumage-male" className="wiki-h3" style={{fontSize:'1.2rem', borderBottom:'none', marginTop:'10px'}}>Male</h3>
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
            <h3 id="plumage-female" className="wiki-h3" style={{fontSize:'1.2rem', borderBottom:'none', marginTop:'10px'}}>Female</h3>
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
                    <tr>
                        <td className="wiki-td wiki-td-muted">
                            Male/<span className="wiki-text-female">Female</span>
                        </td>
                        <td className="wiki-td">
                            Brown (59.76%),<br/>
                            Light Brown (20.00%),<br/>
                            Dark Brown (20.00%)
                        </td>
                        <td className="wiki-td">X</td>
                        <td className="wiki-td">
                            Leucistic (0.16%)
                        </td>
                        <td className="wiki-td">
                            Albino (0.04%),<br/>
                            Melanistic (0.04%)
                        </td>
                    </tr>
                </tbody>
            </table>

            {/* TRIVIA */}
            <h2 id="trivia" className="wiki-h2">Trivia</h2>
            <ul className="wiki-ul">
              <li className="wiki-li">The Merriam Turkey is named after Clinton Hart Merriam, the first chief of The United States Fish and Wildlife Service.</li>
              <li className="wiki-li">In French, it is called "dinde" or "dindon sauvage."</li>
              <li className="wiki-li">Prior to the release of <span className="wiki-link">Rancho del Arroyo</span>, the <strong>Merriam Turkey</strong> was simply just referred to as "Turkey" in-game.</li>
              <li className="wiki-li">It is said that Founding Father Benjamin Franklin wanted the United States to adopt the Turkey as the country's national bird over the Bald Eagle. This is a myth. However Benjamin Franklin did write, "[The] Bald Eagle... is a Bird of bad moral Character. He does not get his Living honestly... [he] is too lazy to fish for himself... [The Turkey is] a much more respectable Bird, and withal a true original Native of America... He is besides, though a little vain & silly, a Bird of Courage."<sup>[1]</sup></li>
            </ul>
            
            {/* REFERENCES */}
            <h2 id="references" className="wiki-h2">References</h2>
            <div style={{fontSize: '0.9rem'}}>
               1. ↑ <span className="wiki-link">https://www.fi.edu/benjamin-franklin/franklin-national-bird</span>
            </div>

            <AnimalsTableMini />
          </main>
        </div>
      </div>
    </div>
  );
};

export default MerriamTurkey;