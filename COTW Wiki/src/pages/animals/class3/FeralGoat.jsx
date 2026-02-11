import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import DrinkingZoneIcon from '../../../assets/DrinkingZoneIcon.webp';
import class3Icon from '../../../assets/Class3Icon.webp'; // Class 3 for Feral Goat
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import FeralGoatMain from '../../../assets/FeralGoat.webp';
import ShotSchemeImage from '../../../assets/Feral_Goat_shot_scheme.webp';

// Fur Variant Images (Placeholders)
import FeralGoat_AlbinoMaleRightSide from '../../../assets/FeralGoat_AlbinoMaleRightSide.webp';
import FeralGoat_BlackMaleRightSide from '../../../assets/FeralGoat_BlackMaleRightSide.webp';
import FeralGoat_BlackBrownMaleRightSide from '../../../assets/FeralGoat_BlackBrownMaleRightSide.webp';
import FeralGoat_BlackWhiteMaleRightSide from '../../../assets/FeralGoat_BlackWhiteMaleRightSide.webp';
import FeralGoat_BlondeMaleRightSide from '../../../assets/FeralGoat_BlondeMaleRightSide.webp';
import FeralGoat_BrownMaleRightSide from '../../../assets/FeralGoat_BrownMaleRightSide.webp';
import FeralGoat_DarkBrownMaleRightSide from '../../../assets/FeralGoat_DarkBrownMaleRightSide.webp';
import FeralGoat_MixedVariation1MaleRightSide from '../../../assets/FeralGoat_MixedVariation1MaleRightSide.webp';
import FeralGoat_MixedVariation1MaleLeftSide from '../../../assets/FeralGoat_MixedVariation1MaleLeftSide.webp';
import FeralGoat_MixedVariation2MaleRightSide from '../../../assets/FeralGoat_MixedVariation2MaleRightSide.webp';
import FeralGoat_WhiteMaleRightSide from '../../../assets/FeralGoat_WhiteMaleRightSide.webp';
import FeralGoat_WhiteBrownMaleRightSide from '../../../assets/FeralGoat_WhiteBrownMaleRightSide.webp';

import FeralGoat_AlbinoFemale from '../../../assets/FeralGoat_AlbinoFemale.webp';
import FeralGoat_BlackWhiteFemale from '../../../assets/FeralGoat_BlackWhiteFemale.webp';
import FeralGoat_BlackFemale from '../../../assets/FeralGoat_BlackFemale.webp';
import FeralGoat_WhiteFemale from '../../../assets/FeralGoat_WhiteFemale.webp';
import FeralGoat_BrownFemale from '../../../assets/FeralGoat_BrownFemale.webp';


const FeralGoat = () => {

  // --- DATA SOURCES ---

  // Need Zone Times
  const needZonesData = [
    {
      name: "Emerald Coast",
      schedule: [
        { time: "00:00 - 03:00", type: "Resting", icon: RestingZoneIcon },
        { time: "03:00 - 06:00", type: "Resting", icon: RestingZoneIcon },
        { time: "06:00 - 09:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "09:00 - 12:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "12:00 - 15:00", type: "Drinking", icon: DrinkingZoneIcon },
        { time: "15:00 - 18:00", type: "Resting", icon: RestingZoneIcon },
        { time: "18:00 - 21:00", type: "Feeding", icon: FeedingZoneIcon },
        { time: "21:00 - 00:00", type: "Resting", icon: RestingZoneIcon },
      ]
    }
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Inquisitive, usually quite vocal" },
    { label: "Habitat", value: "Native grasslands, scrub and forest" },
    { label: "Senses", value: "Average hearing, good vision, excellent smell" },
    { label: "Social", value: "Mixed groups of males and females" },
    { label: "Active", value: "Daytime" },
    { label: "Recommended Equipment", value: "Class 3 Ammo" },
    { label: "Species", value: "Capra aegagrus hircus", italic: true, isLink: true },
    { label: "Difficulty", value: "Hard" },
  ];

  // Fur Gallery Data: split by sex
  const maleGallery = [
    { name: "Albino", src: FeralGoat_AlbinoMaleRightSide },
    { name: "Black", src: FeralGoat_BlackMaleRightSide },
    { name: "Black Brown", src: FeralGoat_BlackBrownMaleRightSide },
    { name: "Black White", src: FeralGoat_BlackWhiteMaleRightSide },
    { name: "Blonde", src: FeralGoat_BlondeMaleRightSide },
    { name: "Brown", src: FeralGoat_BrownMaleRightSide },
    { name: "Dark Brown", src: FeralGoat_DarkBrownMaleRightSide },
    { name: "Mixed Variation 1 (Right)", src: FeralGoat_MixedVariation1MaleRightSide },
    { name: "Mixed Variation 1 (Left)", src: FeralGoat_MixedVariation1MaleLeftSide },
    { name: "Mixed Variation 2", src: FeralGoat_MixedVariation2MaleRightSide },
    { name: "White", src: FeralGoat_WhiteMaleRightSide },
    { name: "White Brown", src: FeralGoat_WhiteBrownMaleRightSide },
  ];

  const femaleGallery = [
    { name: "Albino", src: FeralGoat_AlbinoFemale },
    { name: "Black White", src: FeralGoat_BlackWhiteFemale },
    { name: "Black", src: FeralGoat_BlackFemale },
    { name: "White", src: FeralGoat_WhiteFemale },
    { name: "Brown", src: FeralGoat_BrownFemale },
  ];

  // Smooth scroll helper for TOC links
  const scrollToId = (id) => (e) => {
    if (e && e.preventDefault) e.preventDefault();
    const el = document.getElementById(id);
    if (el && el.scrollIntoView) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      try { history.replaceState(null, '', `#${id}`); } catch (err) { /* ignore */ }
    }
  };

  return (
    <div className="wiki-page">
      <div className="wiki-inner">
        
        {/* PAGE HEADER */}
        <div className="wiki-header">
          <span>Feral Goat</span>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Feral Goat</div>
            <div className="wiki-sidebar-image">
              <img src={FeralGoatMain} alt="Feral Goat" className="max-w-full max-h-[190px] object-contain" />
            </div>
            
            <div className="wiki-sidebar-header">General Information</div>
            
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Class</span>
              <span><img src={class3Icon} alt="Class 3" className="inline-block wiki-class-icon-sm align-middle mr-1.5" />3</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Difficulty</span>
              <span>1: Trivial — 5: Medium</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Trophy Type</span>
              <span>Horns</span>
              <div className="wiki-trophy-grid">
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-silver">◆ Silver</span>
                  <span>89.44</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-gold">☗ Gold</span>
                  <span>157.60</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-diamond">☗ Diamond</span>
                  <span>208.71</span>
                </div>
              </div>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Weight</span>
              25kg — 50kg<br/>
              <span className="wiki-sidebar-muted">55lbs — 110lbs</span>
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Fur</span>
               <span className="wiki-fs-sm">
                 Albino, Black, Black Brown, Back White, Blonde, Brown, Dark Brown, Mixed, White, White Brown
               </span>
            </div>

            <div className="wiki-sidebar-header">Locations</div>
            <div className="wiki-sidebar-section">
               <div className="wiki-mb-4"><span className="wiki-link">Te Awaroa National Park</span></div>
               <div className="wiki-mb-4"><span className="wiki-link">Emerald Coast</span></div>
               <div className="wiki-mb-4"><span className="wiki-link">Tòrr nan Sithean</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main className="wiki-main">

            {/* Quote Block */}
            <div className="wiki-quote">
              "The New Zealand feral goats (Capra hircus), were brought onto the island in 1773 by early explorers, whalers, sealers and settlers who brought goats with them for food and bartering. Over time, more goats were brought in for a variety of purposes, from livestock to the handling of other invasive plant species. This problem culminated in 14% of New Zealand now being populated by feral goats, all of which have begun to destroy the natural plant life of the island. Currently, hunting and Judas goats are the primary means of handling the threat but this has not done much to stop the goats and they still remain a threat."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-p-mb">
              The <strong>Feral Goat</strong> is huntable animal species in the <span className="wiki-link">Te Awaroa National Park</span> Reserve located in New Zealand, <span className="wiki-link">Emerald Coast</span> and <span className="wiki-link">Tòrr nan Sithean</span>. It is a <span className="wiki-link">Class 3</span> Animal. Females in-games, as in real-life, have udders. Feral Goats exist in a large variety of fur colors.
            </p>

            {/* Table of Contents */}
            <div className="wiki-toc">
              <div className="wiki-toc-title">
                🔢 Contents <span className="wiki-toc-toggle">[hide]</span>
              </div>
              <ol className="wiki-toc">
                <li><a href="#features" onClick={scrollToId('features')} className="wiki-link">Features</a></li>
                <li><a href="#need-zone-times" onClick={scrollToId('need-zone-times')} className="wiki-link">Need Zone Times</a></li>
                <li><a href="#shot-scheme" onClick={scrollToId('shot-scheme')} className="wiki-link">Shot scheme</a></li>
                <li>
                  <a href="#fur-variants" onClick={scrollToId('fur-variants')} className="wiki-link">Fur variants</a>
                  <ol className="mt-1 ml-4 pl-0 list-none">
                    <li><a href="#fur-variants-male" onClick={scrollToId('fur-variants-male')} className="wiki-link">4.1 Male</a></li>
                    <li><a href="#fur-variants-female" onClick={scrollToId('fur-variants-female')} className="wiki-link">4.2 Female</a></li>
                  </ol>
                </li>
                <li><a href="#fur-variant-rarity" onClick={scrollToId('fur-variant-rarity')} className="wiki-link">Fur Variant Rarity</a></li>
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
            <h2 id="need-zone-times" className="wiki-h2">Need Zone Times</h2>
            <div className="wiki-inline-block">
                <table className="wiki-table wiki-table-fixed">
                    <thead>
                        <tr><th colSpan="2" className="wiki-th wiki-th-center">Emerald Coast</th></tr>
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

            {/* FUR VARIANTS (Gallery) - Male */}
            <h2 id="fur-variants" className="wiki-h2">Fur variants</h2>
            <h2 id="fur-variants-male" className="wiki-h2">Male</h2>
            <div className="wiki-gallery-grid">
              {maleGallery.map((item, i) => (
                <div key={`male-${i}`} className="wiki-gallery-item">
                  <div className="wiki-gallery-placeholder">
                    <img src={item.src} alt={item.name} className="wiki-img-contain" />
                  </div>
                  <span className="wiki-gallery-label">{item.name}</span>
                </div>
              ))}
            </div>

            {femaleGallery && femaleGallery.length > 0 && (
              <>
                <h2 id="fur-variants-female" className="wiki-h2">Female</h2>
                <div className="wiki-gallery-grid">
                  {femaleGallery.map((item, i) => (
                    <div key={`female-${i}`} className="wiki-gallery-item">
                      <div className="wiki-gallery-placeholder">
                        <img src={item.src} alt={item.name} className="wiki-img-contain" />
                      </div>
                      <span className="wiki-gallery-label">{item.name}</span>
                    </div>
                  ))}
                </div>
              </>
            )}

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
                                Blonde (18.68%)<br/>
                                Brown (18.68%)<br/>
                                Dark Brown (18.68%)<br/>
                                White (18.68%)
                            </td>
                            <td className="wiki-td">
                                Black Brown (8.33%)<br/>
                                Black White (8.33%)<br/>
                                White Brown (8.33%)
                            </td>
                            <td className="wiki-td">
                                Mixed Variation 1 (0.10%)<br/>
                                Mixed Variation 2 (0.10%)
                            </td>
                            <td className="wiki-td">
                                Albino (0.05%)<br/>
                                Black (0.05%)
                            </td>
                        </tr>
                        <tr>
                            <td className="wiki-td wiki-td-female">
                                Female
                            </td>
                            <td className="wiki-td">
                                Brown (40.79%)<br/>
                                White (40.79%)<br/>
                                Black White (18.20%)
                            </td>
                            <td className="wiki-td">X</td>
                            <td className="wiki-td">
                                Albino (0.11%)<br/>
                                Black (0.11%)
                            </td>
                            <td className="wiki-td">X</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Trivia section removed per request */}

            <div className="wiki-mt-40">
                <AnimalsTableMini />
            </div>
            
          </main>
        </div>
      </div>
    </div>
  );
};

export default FeralGoat;