import React from 'react';
// removed shot-scheme image import (was used only for shot scheme)
import TundraBeanGoose_BrownFront from '../../../assets/TundraBeanGoose_BrownFront.webp';
import TundraBeanGoose_BrownBack from '../../../assets/TundraBeanGoose_BrownBack.webp';
import TundraBeanGoose_DarkGreyFront from '../../../assets/TundraBeanGoose_DarkGreyFront.webp';
import TundraBeanGoose_DarkGreyBack from '../../../assets/TundraBeanGoose_DarkGreyBack.webp';
import TundraBeanGoose_LeucisticVariation1Front from '../../../assets/TundraBeanGoose_LeucisticVariation1Front.webp';
import TundraBeanGoose_LeucisticVariation1Back from '../../../assets/TundraBeanGoose_LeucisticVariation1Back.webp';
import TundraBeanGoose_LeucisticVariation2Front from '../../../assets/TundraBeanGoose_LeucisticVariation2Front.webp';
import TundraBeanGoose_LeucisticVariation2Back from '../../../assets/TundraBeanGoose_LeucisticVariation2Back.webp';
import TundraBeanGoose_LeucisticVariation3Front from '../../../assets/TundraBeanGoose_LeucisticVariation3Front.webp';
import TundraBeanGoose_LeucisticVariation3Back from '../../../assets/TundraBeanGoose_LeucisticVariation3Back.webp';
import TundraBeanGoose_LightGreyFront from '../../../assets/TundraBeanGoose_LightGreyFront.webp';
import TundraBeanGoose_LightGreyBack from '../../../assets/TundraBeanGoose_LightGreyBack.webp';
import TundraBeanGooseImg from '../../../assets/TundraBeanGoose.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import class1Icon from '../../../assets/Class1Icon.webp';
import AnimalsTableMini from '../../../components/AnimalsTableMini';

const TundraBeanGoose = () => {
  // --- DATA SOURCES ---

  // Need Zone Times
  const needZones = [
    { time: "00:00 - 05:30", type: "Resting", icon: RestingZoneIcon },
    { time: "05:00 - 07:30", type: "Feeding", icon: FeedingZoneIcon },
    { time: "07:00 - 09:30", type: "Resting", icon: RestingZoneIcon },
    { time: "09:00 - 11:30", type: "Feeding", icon: FeedingZoneIcon },
    { time: "11:00 - 13:30", type: "Resting", icon: RestingZoneIcon },
    { time: "13:00 - 15:30", type: "Feeding", icon: FeedingZoneIcon },
    { time: "15:00 - 17:30", type: "Resting", icon: RestingZoneIcon },
    { time: "17:00 - 19:30", type: "Feeding", icon: FeedingZoneIcon },
    { time: "19:00 - 00:30", type: "Resting", icon: RestingZoneIcon },
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Gregarious" },
    { label: "Habitat", value: "Wetlands and mires" },
    { label: "Senses", value: "Excellent vision, good hearing and smell" },
    { label: "Social", value: "Highly gregarious, often mixes with other goose species" },
    { label: "Active", value: "Feeds throughout the day, with intermittent rest" },
    { label: "Recommended Equipment", value: "Class 1 Ammo, Tundra Bean Goose Decoys and Caller" },
    { label: "Species", value: "Anser serrirostris", italic: true },
    { label: "Difficulty", value: "Easy" },
  ];

  // Plumage Variants - actual image assets (front/back)
  const plumageImages = [
    { name: "Brown - Front", src: TundraBeanGoose_BrownFront },
    { name: "Brown - Back", src: TundraBeanGoose_BrownBack },
    { name: "Dark Grey - Front", src: TundraBeanGoose_DarkGreyFront },
    { name: "Dark Grey - Back", src: TundraBeanGoose_DarkGreyBack },
    { name: "Leucistic Variation 1 - Front", src: TundraBeanGoose_LeucisticVariation1Front },
    { name: "Leucistic Variation 1 - Back", src: TundraBeanGoose_LeucisticVariation1Back },
    { name: "Leucistic Variation 2 - Front", src: TundraBeanGoose_LeucisticVariation2Front },
    { name: "Leucistic Variation 2 - Back", src: TundraBeanGoose_LeucisticVariation2Back },
    { name: "Leucistic Variation 3 - Front", src: TundraBeanGoose_LeucisticVariation3Front },
    { name: "Leucistic Variation 3 - Back", src: TundraBeanGoose_LeucisticVariation3Back },
    { name: "Light Grey - Front", src: TundraBeanGoose_LightGreyFront },
    { name: "Light Grey - Back", src: TundraBeanGoose_LightGreyBack },
  ];

  return (
    <div className="wiki-page">
      <div className="wiki-inner">
        
        {/* PAGE HEADER */}
        <div className="wiki-header">
          <span>Tundra Bean Goose</span>
          <div className="wiki-edit-actions">
          </div>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Tundra Bean Goose</div>
            <div className="wiki-sidebar-image">
              <img src={TundraBeanGooseImg} alt="Tundra Bean Goose" style={{width: '268.4px', height: '134.2px', objectFit: 'cover'}} />
              <span style={{position:'absolute', bottom:'5px', right:'5px', fontSize:'0.8rem'}}>📷</span>
            </div>
            
            <div className="wiki-sidebar-header">General Information</div>
            
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Class</span>
              <span><img src={class1Icon} alt="Class 1" className="wiki-class-icon-sm"/>1</span>
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
                   <span>2.18</span>
                </div>
                <div className="wiki-trophy-item">
                   <span className="wiki-trophy-label wiki-trophy-gold">☗ Gold</span>
                   <span>2.74</span>
                </div>
                <div className="wiki-trophy-item">
                   <span className="wiki-trophy-label wiki-trophy-diamond">☗ Diamond</span>
                   <span>3.16</span>
                </div>
              </div>
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Weight</span>
               1.9kg — 3.5kg<br/>
               4lbs — 8lbs
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Plumage</span>
               <span style={{fontSize: '0.85rem'}}>
                 Brown, Dark Grey, Leucistic, Light Grey
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
              "The Tundra Bean Goose is a species native to the Nordic European countries and Siberia. It is very closely related to the Taiga Bean Goose, and some specialists consider them separate species while others do not. Both also often coexist with the more widespread Greylag Goose, sometimes forming mixed flocks. Like other grey goose species, Tundra Bean Geese gather in large flocks in preparation for their winter migration. These large groups can be seen feeding in grassy wetlands for most of the day in preparation for their journey south."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-mb-20">
              The <strong>Tundra Bean Goose</strong> is a <span className="wiki-link">class 1</span> goose species that can be hunted on <span className="wiki-link">Revontuli Coast</span>, and <span className="wiki-link">Salzwiesen Park</span>.
            </p>

            {/* Table of Contents (page-specific) */}
            {(() => {
              const tocItems = [
                { id: 'features', label: 'Features' },
                { id: 'tips', label: 'Tips' },
                { id: 'need-zones', label: 'Need Zone Times' },
                { id: 'plumage-variants', label: 'Plumage Variants'},
                { id: 'plumage-rarity', label: 'Plumage Variant Rarity' },
              ];

              const LocalTOC = ({ items }) => {
                const stylesTOC = {
                  container: { backgroundColor: '#0b1e3b', border: '1px solid #3a5a75', borderRadius: '4px', color: '#fff', width: '250px', fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif', fontSize: '14px', marginTop: '20px', boxShadow: '0 4px 6px rgba(0,0,0,0.3)' },
                  header: { padding: '8px 12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #3a5a75' },
                  title: { fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px' },
                  list: { margin: 0, padding: '10px 15px 10px 35px', listStyleType: 'decimal' },
                  listItem: { marginBottom: '6px', color: '#fff', cursor: 'pointer' },
                  linkText: { color: '#6fb2e6' }
                };

                const scrollTo = (id) => {
                  const el = document.getElementById(id);
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                };

                return (
                  <div style={stylesTOC.container}>
                    <div style={stylesTOC.header}><div style={stylesTOC.title}>Contents</div></div>
                    <ol style={stylesTOC.list}>
                      {items.map((it) => (
                        <li key={it.id} style={stylesTOC.listItem} onClick={() => scrollTo(it.id)}>
                          <span style={stylesTOC.linkText}>{it.label}</span>
                          {it.children && (
                            <ol style={{ listStyleType: 'decimal', marginTop: '6px', marginLeft: '16px', paddingLeft: '6px' }}>
                              {it.children.map((c) => (
                                <li key={c.id} style={stylesTOC.listItem} onClick={() => scrollTo(c.id)}>
                                  <span style={stylesTOC.linkText}>{c.label}</span>
                                </li>
                              ))}
                            </ol>
                          )}
                        </li>
                      ))}
                    </ol>
                  </div>
                );
              };

              return <LocalTOC items={tocItems} />;
            })()}

            {/* FEATURES */}
            <h2 id="features" className="wiki-h2">Features <span className="wiki-edit-actions">✎</span></h2>
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
            <h2 id="tips" className="wiki-h2">Tips <span className="wiki-edit-actions">✎</span></h2>
            <p className="wiki-mb-10">
              Hunting Geese is similar to hunting other waterfowl. The added benefit being, you can hunt Geese in open fields. Fields give players the freedom to place decoys as far away from a blind as possible, as compared to water which has limits on how far away from shore you can place decoys.
            </p>
            <p>
              Find an open area to place decoys and try and place the decoys approximately 50m (54yds) away from your blind. Be mindful that geese will fly into the wind when they land.
            </p>

            {/* NEED ZONE TIMES */}
            <h2 id="need-zones" className="wiki-h2">Need Zone Times</h2>
            <div style={{display: 'inline-block'}}>
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
                    <td className="wiki-td"><img src={zone.icon} alt={zone.type} className="wiki-zone-icon-lg" />{zone.type}</td>
                  </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* SHOT SCHEME removed for this page */}

            {/* PLUMAGE VARIANTS (Gallery) */}
            <h2 id="plumage-variants" className="wiki-h2">Plumage Variants</h2>
            <div className="wiki-gallery-grid">
              {plumageImages.map((img, i) => (
                <div key={i} className="wiki-gallery-item">
                  <img src={img.src} alt={img.name} style={{width: '146px', height: '165px', objectFit: 'cover', border: '4px solid #1f3a52', marginBottom: '8px'}} />
                  <span className="wiki-gallery-label">{img.name}</span>
                </div>
              ))}
            </div>

            {/* PLUMAGE RARITY TABLE */}
            <h2 id="plumage-rarity" className="wiki-h2">Plumage Variant Rarity <span className="wiki-edit-actions">✎</span></h2>
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
                        <td className="wiki-td wiki-td-rare">Male/Female</td>
                        <td className="wiki-td">
                            Brown (74.78%)<br/>
                            Dark Grey (12.51%)<br/>
                            Light Grey (12.51%)
                        </td>
                        <td className="wiki-td">X</td>
                        <td className="wiki-td">X</td>
                        <td className="wiki-td">
                            Leucistic Variation 1 (0.07%)<br/>
                            Leucistic Variation 2 (0.07%)<br/>
                            Leucistic Variation 3 (0.07%)
                        </td>
                    </tr>
                </tbody>
            </table>

            {/* TRIVIA removed for this page */}

            <AnimalsTableMini />
          </main>
        </div>
      </div>
    </div>
  );
};

export default TundraBeanGoose;