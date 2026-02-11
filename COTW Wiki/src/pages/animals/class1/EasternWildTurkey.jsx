import React from 'react';

// --- IMPORTS ---
// Standard Icons
import FeedingZoneIcon from '../../../assets/FeedingZoneIcon.webp';
import RestingZoneIcon from '../../../assets/RestingZoneIcon.webp';
import class1Icon from '../../../assets/Class1Icon.webp';
import AnimalsTableMini from '../../../components/AnimalsTableMini.jsx';

// Main Image
import EasternWildTurkeyMain from '../../../assets/EasternWildTurkey.webp';

// Shot Scheme
import EasternWildTurkey_ShotScheme from '../../../assets/Eastern_Wild_Turkey_shot_scheme.webp';

// Male Plumage Images
import EasternWildTurkey_AlbinoMale from '../../../assets/EasternWildTurkey_AlbinoMale.webp';
import EasternWildTurkey_BronzeMale from '../../../assets/EasternWildTurkey_BronzeMale.webp';
import EasternWildTurkey_BrownMale from '../../../assets/EasternWildTurkey_BrownMale.webp';
import EasternWildTurkey_LeucisticMale from '../../../assets/EasternWildTurkey_LeucisticMale.webp';
import EasternWildTurkey_LightBronzeMale from '../../../assets/EasternWildTurkey_LightBronzeMale.webp';
import EasternWildTurkey_LightBrownMale from '../../../assets/EasternWildTurkey_LightBrownMale.webp';
import EasternWildTurkey_MelanisticMale from '../../../assets/EasternWildTurkey_MelanisticMale.webp';

// Female Plumage Images
import EasternWildTurkey_AlbinoFemale from '../../../assets/EasternWildTurkey_AlbinoFemale.webp';
import EasternWildTurkey_BronzeFemale from '../../../assets/EasternWildTurkey_BronzeFemale.webp';
import EasternWildTurkey_BrownFemale from '../../../assets/EasternWildTurkey_BrownFemale.webp';
import EasternWildTurkey_LeucisticFemale from '../../../assets/EasternWildTurkey_LeucisticFemale.webp';
import EasternWildTurkey_LightBronzeFemale from '../../../assets/EasternWildTurkey_LightBronzeFemale.webp';
import EasternWildTurkey_LightBrownFemale from '../../../assets/EasternWildTurkey_LightBrownFemale.webp';
import EasternWildTurkey_MelanisticFemale from '../../../assets/EasternWildTurkey_MelanisticFemale.webp';


const EasternWildTurkey = () => {

  // --- DATA SOURCES ---

  // Need Zone Times (New England Mountains)
  const needZones = [
    { time: "00:00 - 04:00", type: "Resting", icon: RestingZoneIcon },
    { time: "04:00 - 08:00", type: "Feeding", icon: FeedingZoneIcon },
    { time: "08:00 - 11:00", type: "Feeding", icon: FeedingZoneIcon },
    { time: "11:00 - 14:00", type: "Resting", icon: RestingZoneIcon },
    { time: "14:00 - 17:00", type: "Feeding", icon: FeedingZoneIcon },
    { time: "17:00 - 20:00", type: "Feeding", icon: FeedingZoneIcon },
  ];

  // Features Table
  const features = [
    { label: "Behavior", value: "Wary, shy" },
    { label: "Habitat", value: "Brushy areas near streams and rivers, forests" },
    { label: "Senses", value: "Strong movement vision and hearing, weak sense of smell" },
    { label: "Social", value: "Highly social and tend to gather near each other" },
    { label: "Active", value: "Daytime" },
    { label: "Recommended Equipment", value: "Class 1 Ammo, Turkey Decoys, Turkey Caller" },
    { label: "Species", value: "Meleagris gallopavo", italic: true, isLink: true },
    { label: "Difficulty", value: "Easy" },
  ];

  // Plumage Gallery Data
  const plumageGallery = {
    male: [
      { name: "Albino", src: EasternWildTurkey_AlbinoMale },
      { name: "Bronze", src: EasternWildTurkey_BronzeMale },
      { name: "Brown", src: EasternWildTurkey_BrownMale },
      { name: "Leucistic", src: EasternWildTurkey_LeucisticMale },
      { name: "Light Bronze", src: EasternWildTurkey_LightBronzeMale },
      { name: "Light Brown", src: EasternWildTurkey_LightBrownMale },
      { name: "Melanistic", src: EasternWildTurkey_MelanisticMale },
    ],
    female: [
      { name: "Albino", src: EasternWildTurkey_AlbinoFemale },
      { name: "Bronze", src: EasternWildTurkey_BronzeFemale },
      { name: "Brown", src: EasternWildTurkey_BrownFemale },
      { name: "Leucistic", src: EasternWildTurkey_LeucisticFemale },
      { name: "Light Bronze", src: EasternWildTurkey_LightBronzeFemale },
      { name: "Light Brown", src: EasternWildTurkey_LightBrownFemale },
      { name: "Melanistic", src: EasternWildTurkey_MelanisticFemale },
    ]
  };

  const scrollToId = (id) => (e) => {
    if (e && e.preventDefault) e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="wiki-page">
      <div className="wiki-inner">

        <div className="wiki-header">
          <span>Eastern Wild Turkey</span>
          <div className="wiki-edit-actions" />
        </div>

        <div className="wiki-layout">

          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Eastern Wild Turkey</div>
            <div className="wiki-sidebar-image">
              <img src={EasternWildTurkeyMain} alt="Eastern Wild Turkey" />
            </div>

            <div className="wiki-sidebar-header">General Information</div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Class</span>
              <span><img src={class1Icon} alt="Class 1" className="inline-block wiki-class-icon-sm align-middle mr-1.5" />1</span>
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
                  <span>2.5</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-gold">☗ Gold</span>
                  <span>3.7</span>
                </div>
                <div className="wiki-trophy-item">
                  <span className="wiki-trophy-label wiki-trophy-diamond">☗ Diamond</span>
                  <span>4.6</span>
                </div>
              </div>
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Weight</span>
              3.6kg — 11kg<br />
              8lbs — 24lbs
            </div>

            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Plumage</span>
              <span className="wiki-fs-sm">
                Albino, Bronze, Brown, Leucistic, Light Bronze, Light Brown, Melanistic
              </span>
            </div>

            <div className="wiki-sidebar-header">Locations</div>
            <div className="wiki-sidebar-section">
              <div className="wiki-mb-4"><span className="wiki-link">Mississippi Acres Preserve</span></div>
              <div className="wiki-mb-4"><span className="wiki-link">New England Mountains</span></div>
            </div>
          </aside>

          <main className="wiki-main">

            <div className="wiki-quote">
              "The Eastern Wild Turkey was the first subspecies of turkey the Europeans encountered in the wild. It has a vast range, covering the entire eastern half of the United States from Maine to Florida and reaching Minnesota, Illinois, and into Missouri in the west. While there are different theories, one theory is that the turkey got its name from birds being imported to Britain from regions around Turkey. The eastern wild turkey is heavily hunted in the Eastern USA and is the most hunted wild turkey subspecies."
              <br /><br />
              — In-Game Description
            </div>

            <p className="wiki-p-mb">
              The <strong>Eastern Wild Turkey</strong> is a species introduced in the <span className="wiki-link">Mississippi Acres Preserve</span> and also dwells on <span className="wiki-link">New England Mountains</span>. It is the third subspecies of Wild Turkey released in-game. The others being the <span className="wiki-link">Merriam Turkey</span>, and the <span className="wiki-link">Rio Grande Turkey</span>.
            </p>

            <div className="wiki-toc">
              <div className="wiki-toc-title">
                🔢 Contents <span className="wiki-toc-toggle">[hide]</span>
              </div>
              <ol>
                <li><a href="#features" className="wiki-link" onClick={scrollToId('features')}>Features</a></li>
                <li><a href="#need-zone-times" className="wiki-link" onClick={scrollToId('need-zone-times')}>Need Zone Times</a></li>
                <li><a href="#shot-scheme" className="wiki-link" onClick={scrollToId('shot-scheme')}>Shot scheme</a></li>
                <li><a href="#plumage-variants" className="wiki-link" onClick={scrollToId('plumage-variants')}>Plumage Variants</a>
                  <ul>
                    <li><a href="#plumage-male" className="wiki-link" onClick={scrollToId('plumage-male')}>4.1 Male</a></li>
                    <li><a href="#plumage-female" className="wiki-link" onClick={scrollToId('plumage-female')}>4.2 Female</a></li>
                  </ul>
                </li>
                <li><a href="#plumage-rarity" className="wiki-link" onClick={scrollToId('plumage-rarity')}>Plumage Variant Rarity</a></li>
                <li><a href="#trivia" className="wiki-link" onClick={scrollToId('trivia')}>Trivia</a></li>
              </ol>
            </div>

            <h2 id="features" className="wiki-h2">Features</h2>
            <table className="wiki-table">
              <tbody>
                <tr>
                  <th className="wiki-th wiki-th-w25" />
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

            <h2 id="need-zone-times" className="wiki-h2">Need Zone Times</h2>
            <div className="wiki-inline-block">
              <table className="wiki-table wiki-table-fixed">
                <thead>
                  <tr><th colSpan="2" className="wiki-th wiki-th-center">New England Mountains</th></tr>
                  <tr>
                    <th className="wiki-th wiki-th-alt">Times</th>
                    <th className="wiki-th wiki-th-alt">Activity</th>
                  </tr>
                </thead>
                <tbody>
                  {needZones.map((zone, i) => (
                    <tr key={i}>
                      <td className="wiki-td">{zone.time}</td>
                      <td className="wiki-td"><img src={zone.icon} alt={zone.type} className="wiki-zone-icon" /> {zone.type}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 id="shot-scheme" className="wiki-h2">Shot scheme</h2>
            <div className="wiki-shot-wrap">
              <div className="wiki-shot-title">Color code</div>
              <div className="wiki-shot-container">
                <div className="wiki-shot-image">
                  <img src={EasternWildTurkey_ShotScheme} alt="Eastern Wild Turkey X-ray shot scheme" />
                </div>
                <div className="wiki-shot-info">
                  No Color - Every hit will kill the animal
                </div>
              </div>
            </div>

            <h2 id="plumage-variants" className="wiki-h2">Plumage Variants</h2>

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
                  <td className="wiki-td wiki-td-muted">Male / Female</td>
                  <td className="wiki-td">
                    Brown (37.35%)<br />
                    Bronze (37.35%)<br />
                    Light Brown (12.50%)<br />
                    Light Bronze (12.50%)
                  </td>
                  <td className="wiki-td">X</td>
                  <td className="wiki-td">Leucistic (0.20%)</td>
                  <td className="wiki-td">
                    Albino (0.05%)<br />
                    Melanistic (0.05%)
                  </td>
                </tr>
              </tbody>
            </table>

            <h2 id="trivia" className="wiki-h2">Trivia</h2>
            <ul className="wiki-ul">
              <li className="wiki-li">The Turkey is the official State 'Game' Bird of 4 US States, making it the most popular state game bird. Specifically the states of Alabama, Massachusetts, Oklahoma, and South Carolina have officially recognized this bird as a state symbol.</li>
            </ul>

            <AnimalsTableMini />
          </main>
        </div>
      </div>
    </div>
  );
};

export default EasternWildTurkey;
