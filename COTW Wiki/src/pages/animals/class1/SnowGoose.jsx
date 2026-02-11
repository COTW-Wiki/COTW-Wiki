import React from 'react';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import class1Icon from '../../../assets/Class1Icon.webp';
import AnimalsTableMini from '../../../components/AnimalsTableMini';

// Snow Goose assets
import SnowGooseImg from '../../../assets/Snow_Goose.webp';
import SnowGooseShotScheme from '../../../assets/Snow_Goose_shot_scheme.webp';
import SnowGoose_AlbinoFront from '../../../assets/SnowGoose_AlbinoFront.webp';
import SnowGoose_AlbinoBack from '../../../assets/SnowGoose_AlbinoBack.webp';
import SnowGoose_BlueMorphFront from '../../../assets/SnowGoose_BlueMorphFront.webp';
import SnowGoose_BlueMorphBack from '../../../assets/SnowGoose_BlueMorphBack.webp';
import SnowGoose_HybridFront from '../../../assets/SnowGoose_HybridFront.webp';
import SnowGoose_HybridBack from '../../../assets/SnowGoose_HybridBack.webp';
import SnowGoose_IntermediateMorphFront from '../../../assets/SnowGoose_IntermediateMorphFront.webp';
import SnowGoose_IntermediateMorphBack from '../../../assets/SnowGoose_IntermediateMorphBack.webp';
import SnowGoose_MelanisticFront from '../../../assets/SnowGoose_MelanisticFront.webp';
import SnowGoose_MelanisticBack from '../../../assets/SnowGoose_MelanisticBack.webp';
import SnowGoose_WhiteMorphFront from '../../../assets/SnowGoose_WhiteMorphFront.webp';
import SnowGoose_WhiteMorphBack from '../../../assets/SnowGoose_WhiteMorphBack.webp';

const SnowGoose = () => {
  // --- DATA SOURCES ---

  // Need Zone Times
  const needZones = [
    { time: "00:00 - 05:00", type: "Resting", icon: RestingZoneIcon },
    { time: "05:00 - 07:00", type: "Feeding", icon: FeedingZoneIcon },
    { time: "07:00 - 09:00", type: "Resting", icon: RestingZoneIcon },
    { time: "09:00 - 11:00", type: "Feeding", icon: FeedingZoneIcon },
    { time: "11:00 - 13:00", type: "Resting", icon: RestingZoneIcon },
    { time: "13:00 - 15:00", type: "Feeding", icon: FeedingZoneIcon },
    { time: "15:00 - 17:00", type: "Resting", icon: RestingZoneIcon },
    { time: "17:00 - 19:00", type: "Feeding", icon: FeedingZoneIcon }, // Corrected 29:00 typo from source to 19:00 logic
    { time: "19:00 - 00:00", type: "Resting", icon: RestingZoneIcon },
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Migratory, gregarious, vocal during migration" },
    { label: "Habitat", value: "Wooded wetlands, riverbanks, lakes and marshes" },
    { label: "Senses", value: "Excellent eyesight, keen hearing and strong sense of smell" },
    { label: "Social", value: "Highly social, forming large, noisy flocks, especially during migration" },
    { label: "Active", value: "Daytime" },
    { label: "Recommended Equipment", value: "Class 1 Ammo, Snow Goose caller & decoys" },
    { label: "Species", value: "Anser caerulescens", italic: true },
    { label: "Difficulty", value: "Average" },
  ];

  // Plumage Variants (front + back images)
  const plumageImages = [
    { name: "Albino - Front", src: SnowGoose_AlbinoFront },
    { name: "Albino - Back", src: SnowGoose_AlbinoBack },
    { name: "Blue Morph - Front", src: SnowGoose_BlueMorphFront },
    { name: "Blue Morph - Back", src: SnowGoose_BlueMorphBack },
    { name: "Hybrid - Front", src: SnowGoose_HybridFront },
    { name: "Hybrid - Back", src: SnowGoose_HybridBack },
    { name: "Intermediate Morph - Front", src: SnowGoose_IntermediateMorphFront },
    { name: "Intermediate Morph - Back", src: SnowGoose_IntermediateMorphBack },
    { name: "Melanistic - Front", src: SnowGoose_MelanisticFront },
    { name: "Melanistic - Back", src: SnowGoose_MelanisticBack },
    { name: "White Morph - Front", src: SnowGoose_WhiteMorphFront },
    { name: "White Morph - Back", src: SnowGoose_WhiteMorphBack },
  ];

  return (
    <div className="wiki-page">
      <div className="wiki-inner">
        
        {/* PAGE HEADER */}
        <div className="wiki-header">
          <span>Snow Goose</span>
          <div className="wiki-edit-actions">
          </div>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Snow Goose</div>
            <div className="wiki-sidebar-image">
              <img src={SnowGooseImg} alt="Snow Goose" className="w-[268.4px] h-[134.2px] object-cover" />
              
            </div>
            
            <div className="wiki-sidebar-header">General Information</div>
            
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Class</span>
              <span>
                <img src={class1Icon} alt="Class 1" style={{width: '12px', height: '12px', verticalAlign: 'middle', marginRight: '6px'}} />
                1
              </span>
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
                   <span>TBA</span>
                </div>
                <div className="wiki-trophy-item">
                   <span className="wiki-trophy-label wiki-trophy-gold">☗ Gold</span>
                   <span>TBA</span>
                </div>
                <div className="wiki-trophy-item">
                   <span className="wiki-trophy-label wiki-trophy-diamond">☗ Diamond</span>
                   <span>3.85</span>
                </div>
              </div>
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Plumage</span>
               <span className="text-[0.85rem]">
                 Albino, Blue Morph, Hybrid, Intermediate Morph, Melanistic, White Morph
               </span>
            </div>

            <div className="wiki-sidebar-header">Locations</div>
            <div className="wiki-sidebar-section">
               <div className="wiki-mb-4"><span className="wiki-link">Askiy Ridge Hunting Preserve</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main className="wiki-main">

            {/* Quote Block */}
            <div className="wiki-quote">
              "The snow goose is a migratory waterfowl found in wetlands and agricultural fields across North America. These medium-sized geese are known for their striking white plumage, with black wingtips and a pinkish-orange bill. Snow geese are highly social, often forming large flocks during migration. They feed primarily on grasses, sedges, and grains, often in open fields. Snow geese are famous for their long migrations, traveling thousands of miles between breeding grounds in the Arctic and wintering areas in the southern U.S. and Mexico. Snow geese are known to form massive "V" formations during flight to conserve energy while migrating."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-mb-20">
              The <strong>Snow Goose</strong> is a <span className="wiki-link">class 1</span> waterfowl that can only be hunted on <span className="wiki-link">Askiy Ridge Hunting Preserve</span>.
            </p>

            {/* Table of Contents (page-specific) */}
            {(() => {
              const tocItems = [
                { id: 'features', label: 'Features' },
                { id: 'need-zones', label: 'Need Zone Times' },
                { id: 'shot-scheme', label: 'Shot scheme' },
                { id: 'tips', label: 'Tips' },
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
            <p className="wiki-mb-10">Place decoys around 50m from your blind and use callers to attract flocks; geese often land into the wind.</p>

            {/* NEED ZONE TIMES */}
            <h2 id="need-zones" className="wiki-h2">Need Zone Times</h2>
            <div className="inline-block">
                <table className="wiki-table wiki-table-fixed">
                    <thead>
                        <tr><th colSpan="2" className="wiki-th wiki-th-center">Askiy Ridge<sup>[1]</sup></th></tr>
                        <tr>
                            <th className="wiki-th wiki-th-alt">Times</th>
                            <th className="wiki-th wiki-th-alt">Activity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {needZones.map((zone, i) => (
                        <tr key={i}>
                          <td className="wiki-td">{zone.time}</td>
                          <td className="wiki-td">
                            <img src={zone.icon} alt={zone.type} className="wiki-zone-icon-lg" />
                            {zone.type}
                          </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* SHOT SCHEME */}
            <h2 className="wiki-h2">Shot scheme</h2>
            <div style={{backgroundColor: '#0f2e48', padding: '10px'}}>
              <div className="wiki-shot-title">Color code</div>
              <div style={{display: 'flex', justifyContent: 'center', paddingTop: '10px'}}>
                <img src={SnowGooseShotScheme} alt="Snow Goose shot scheme" style={{width: '500px', height: '444px', objectFit: 'contain', border: '1px solid #1f405a'}} />
              </div>
              <div style={{marginTop: '8px', color: '#fff'}}>No Color - Every hit will kill the animal</div>
            </div>

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
                        <td className="wiki-td wiki-td-rare">Male/Female</td>
                        <td className="wiki-td">
                            White Morph (99.60%)
                        </td>
                        <td className="wiki-td">X</td>
                        <td className="wiki-td">
                            Blue Morph (0.10%)<br/>
                            Hybrid (0.10%)<br/>
                            Intermediate Morph (0.10%)
                        </td>
                        <td className="wiki-td">
                            Albino (0.05%)<br/>
                            Melanistic (0.05%)
                        </td>
                    </tr>
                </tbody>
            </table>

            {/* Trivia removed as requested */}

            <AnimalsTableMini />
          </main>
        </div>
      </div>
    </div>
  );
};

export default SnowGoose;