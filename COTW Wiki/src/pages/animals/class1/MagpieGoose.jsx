import React from 'react';
import MagpieGooseXRay from '../../../assets/Magpie_Goose_shot_scheme.webp';
import MagpieGooseImg from '../../../assets/Magpie_Goose_first_look.webp';
import MagpieGooseIcon from '../../../assets/MagpieGoose_frame.webp';
import MagpieGoose_LeucisticVariation1Front from '../../../assets/MagpieGoose_LeucisticVariation1Front.webp';
import MagpieGoose_LeucisticVariation1Back from '../../../assets/MagpieGoose_LeucisticVariation1Back.webp';
import MagpieGoose_LeucisticVariation2Front from '../../../assets/MagpieGoose_LeucisticVariation2Front.webp';
import MagpieGoose_LeucisticVariation2Back from '../../../assets/MagpieGoose_LeucisticVariation2Back.webp';
import MagpieGoose_MaroonFront from '../../../assets/MagpieGoose_MaroonFront.webp';
import MagpieGoose_MaroonBack from '../../../assets/MagpieGoose_MaroonBack.webp';
import MagpieGoose_MelanisticFront from '../../../assets/MagpieGoose_MelanisticFront.webp';
import MagpieGoose_MelanisticBack from '../../../assets/MagpieGoose_MelanisticBack.webp';
import MagpieGoose_OrangeFront from '../../../assets/MagpieGoose_OrangeFront.webp';
import MagpieGoose_OrangeBack from '../../../assets/MagpieGoose_OrangeBack.webp';
import MagpieGoose_PiebaldVariation1Front from '../../../assets/MagpieGoose_PiebaldVariation1Front.webp';
import MagpieGoose_PiebaldVariation1Back from '../../../assets/MagpieGoose_PiebaldVariation1Back.webp';
import MagpieGoose_PiebaldVariation2Front from '../../../assets/MagpieGoose_PiebaldVariation2Front.webp';
import MagpieGoose_PiebaldVariation2Back from '../../../assets/MagpieGoose_PiebaldVariation2Back.webp';
import MagpieGoose_YellowFront from '../../../assets/MagpieGoose_YellowFront.webp';
import MagpieGoose_YellowBack from '../../../assets/MagpieGoose_YellowBack.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import class1Icon from '../../../assets/Class1Icon.webp';
import AnimalsTableMini from '../../../components/AnimalsTableMini';

const MagpieGoose = () => {
  // --- DATA SOURCES ---

  // Need Zone Times
  const needZones = [
    { time: "13:00 - 15:00", type: "Eating" } // Based on the visible table in screenshot
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Gregarious, vocal" },
    { label: "Habitat", value: "Shallow Wetlands (mires/coastal/rivers)" },
    { label: "Senses", value: "Excellent vision, good hearing and smell" },
    { label: "Social", value: "Forms medium to very large flocks. Strong lifelong breeding groups bonds between a dominant male along with up to three females" },
    { label: "Active", value: "Early morning to late afternoon" },
    { label: "Recommended Equipment", value: "Magpie Goose Caller, Magpie Goose Decoys, and Class 1 Ammo" },
    { label: "Species", value: "Anseranas semipalmata", italic: true },
    { label: "Difficulty", value: "Easy" },
  ];

  // Plumage Variants - actual image assets (front/back)
  const plumageImages = [
    { name: "Leucistic Variation 1 - Front", src: MagpieGoose_LeucisticVariation1Front },
    { name: "Leucistic Variation 1 - Back", src: MagpieGoose_LeucisticVariation1Back },
    { name: "Leucistic Variation 2 - Front", src: MagpieGoose_LeucisticVariation2Front },
    { name: "Leucistic Variation 2 - Back", src: MagpieGoose_LeucisticVariation2Back },
    { name: "Maroon - Front", src: MagpieGoose_MaroonFront },
    { name: "Maroon - Back", src: MagpieGoose_MaroonBack },
    { name: "Melanistic - Front", src: MagpieGoose_MelanisticFront },
    { name: "Melanistic - Back", src: MagpieGoose_MelanisticBack },
    { name: "Orange - Front", src: MagpieGoose_OrangeFront },
    { name: "Orange - Back", src: MagpieGoose_OrangeBack },
    { name: "Piebald Variation 1 - Front", src: MagpieGoose_PiebaldVariation1Front },
    { name: "Piebald Variation 1 - Back", src: MagpieGoose_PiebaldVariation1Back },
    { name: "Piebald Variation 2 - Front", src: MagpieGoose_PiebaldVariation2Front },
    { name: "Piebald Variation 2 - Back", src: MagpieGoose_PiebaldVariation2Back },
    { name: "Yellow - Front", src: MagpieGoose_YellowFront },
    { name: "Yellow - Back", src: MagpieGoose_YellowBack },
  ];

  return (
    <div className="wiki-page">
      <div className="wiki-inner">
        
        {/* PAGE HEADER */}
        <div className="wiki-header">
          <span>Magpie Goose</span>
          <div className="wiki-edit-actions">
          </div>
        </div>

        <div className="wiki-layout">
          
          {/* --- RIGHT SIDEBAR (General Information) --- */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Magpie Goose</div>
            <div className="wiki-sidebar-image">
              <img src={MagpieGooseImg} alt="Magpie Goose" className="w-[268.4px] h-[134.2px] object-cover" />
              
            </div>
            
            <div className="wiki-sidebar-header">General Information</div>
            
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Class</span>
              <span><img src={class1Icon} alt="Class 1" className="inline-block wiki-class-icon-sm align-middle mr-1.5"/>1</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Difficulty</span>
              <span>1: Trivial — 5: Medium</span>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Trophy Type</span>
              <span>Combined</span>
              <div className="wiki-trophy-grid">
                <div className="wiki-trophy-item">
                   <span className="wiki-trophy-label wiki-trophy-silver">◆ Silver</span>
                   <span>2.80</span>
                </div>
                <div className="wiki-trophy-item">
                   <span className="wiki-trophy-label wiki-trophy-gold">☗ Gold</span>
                   <span>3.40</span>
                </div>
                <div className="wiki-trophy-item">
                   <span className="wiki-trophy-label wiki-trophy-diamond">☗ Diamond</span>
                   <span>3.85</span>
                </div>
              </div>
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Weight</span>
               1kg — 3kg<br/>
               0lbs — 7lbs
            </div>

            <div className="wiki-sidebar-section">
               <span className="wiki-sidebar-label">Plumage</span>
               <span className="text-[0.85rem]">
                 Orange, Yellow, Maroon, Piebald, Leucistic, Melanistic
               </span>
            </div>

            <div className="wiki-sidebar-header">Locations</div>
            <div className="wiki-sidebar-section">
               <div className="wiki-mb-4"><span className="wiki-link">Emerald Coast</span></div>
            </div>
          </aside>

          {/* --- MAIN CONTENT --- */}
          <main className="wiki-main">

            {/* Quote Block */}
            <div className="wiki-quote">
              "The magpie goose is the last known species of the Anseranatidae family. Rarely wandering inland, magpie geese are found in open wetland areas such as floodplains and swamps where they feed in large, noisy flocks.<br/><br/>
              Magpie geese are large birds with unwebbed long toes and unusual long legs that extend beyond the tail in flight. They have black heads, necks, tails, and wings. The head is topped with a knob that increases with age, and the face is covered with naked, red skin. The beak is small and slightly hooked. The rest of the body is white, with orange feet and legs. Unlike most waterfowl, these birds molt their flight feathers gradually, and are always able to fly as a result."
              <br/><br/>
              — In-Game Description
            </div>

            {/* Intro Text */}
            <p className="wiki-mb-20">
              The <strong>Magpie Goose</strong> is a (<span className="wiki-link">Class 1</span>) goose species that can be hunted on <span className="wiki-link">Emerald Coast</span>.
            </p>

            {/* Table of Contents (page-specific) */}
            {(() => {
              const tocItems = [
                { id: 'features', label: 'Features' },
                { id: 'need-zones', label: 'Need Zone Times' },
                { id: 'shot-scheme', label: 'Shot scheme' },
                { id: 'plumage-variants', label: 'Plumage Variants' },
                { id: 'plumage-rarity', label: 'Plumage Variant Rarity' },
                { id: 'trivia', label: 'Trivia' },
                { id: 'references', label: 'References' },
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

            {/* Anchor for Tips (TOC includes Tips) */}
            <div id="tips" />

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
                            <td className="wiki-td">{zone.type}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* SHOT SCHEME */}
            <h2 id="shot-scheme" className="wiki-h2">Shot scheme</h2>
            <div style={{backgroundColor: '#0f2e48', padding: '10px'}}>
                <div className="wiki-shot-title">Color code</div>
                <div className="wiki-shot-container">
                    <div className="wiki-shot-image">
                      <img src={MagpieGooseXRay} alt="Magpie Goose shot scheme" style={{width: '100%', height: '100%', objectFit: 'contain'}} />
                    </div>
                    <div className="wiki-shot-info">
                        No Color - Every hit will kill the animal
                    </div>
                </div>
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

            {/* PLUMAGE VARIANT RARITY TABLE */}
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
                            Yellow (33.20%)<br/>
                            Orange (33.20%)<br/>
                            Maroon (33.20%)
                        </td>
                        <td className="wiki-td">X</td>
                        <td className="wiki-td">
                            Piebald Variation 1 (0.13%)<br/>
                            Piebald Variation 2 (0.13%)
                        </td>
                        <td className="wiki-td">
                            Leucistic Variation 1 (0.04%)<br/>
                            Leucistic Variation 2 (0.04%)<br/>
                            Melanistic (0.04%)
                        </td>
                    </tr>
                </tbody>
            </table>

            {/* TRIVIA */}
            <h2 id="trivia" className="wiki-h2">Trivia</h2>
            <ul className="pl-5 mb-8">
                <li className="wiki-li">The word <em>Magpie</em> comes from two words. The first part '<em>Mag</em>, an appreciation for <em>Margaret</em>, is used to describe someone or something who is chatty. The second part <em>Pie</em>, is also an old word used to describe Chattering.[1]</li>
                <li className="wiki-li">The Magpie Goose is the sole member of the <em>Anseranatidae</em> family. As such it is not considered a <em>True Goose</em>, as all <em>True Geese</em> are classified under the <em>Anatidae</em> family.</li>
                <li className="wiki-li">This extremely weird bird has many unique traits that distinguish it from other waterfowl. It has the longest legs proportional to its body of any waterfowl. The Magpie Gooses toes are also only partially webbed, instead of being fully webbed; which, along with it's strong back toe, allows it to be the only goose species that can perch and sleep on trees. This is why its scientific name is <em>semipalmeta</em>.[2][3][4]</li>
                <li className="wiki-li">The Magpie Goose is soo integral to the cultural lifestyle of the Aboriginal People of Australia, that efforts in conserving Aboriginal Culture has indirectly resulted in Magpie Goose conservation efforts.</li>
                <li>The <span className="wiki-link">Magpie Goose Caller</span> hides an Easter Egg. This caller specifically uses the old audio files for the Magpie Goose in <span className="wiki-link">theHunter: Classic</span> instead of using the ones for CALL OF THE WILD.</li>
            </ul>

            {/* REFERENCES */}
            <h2 id="references" className="wiki-h2">References</h2>
            <ol className="pl-6 text-[#6fb2e6]">
                <li><span className="wiki-link">https://www.etymonline.com/word/magpie</span></li>
                <li><span className="wiki-link">https://www.britannica.com/animal/magpie-goose</span></li>
                <li><span className="wiki-link">https://seaworld.org/animals/facts/birds/magpie-goose/</span></li>
                <li><span className="wiki-link">https://animals.sandiegozoo.org/animals/magpie-goose</span></li>
            </ol>

            <AnimalsTableMini />
          </main>
        </div>
      </div>
    </div>
  );
};

export default MagpieGoose;