import { useState } from 'react';
import WeaponsTable from '../../../../components/WeaponsTable';
import BowDiagram from '../../../../assets/Bows.webp';
import CrosspointIronsight from '../../../../assets/Crosspoint_ironsight.webp';
import CrosspointLying from '../../../../assets/Crosspoint_pose_3.webp';
import CrosspointCrouching from '../../../../assets/Crosspoint_pose_2.webp';
import CrosspointStanding from '../../../../assets/Crosspoint_pose_1.webp';
import CrosspointClassic from '../../../../assets/CrosspointCB165Classic.webp';
import CrosspointArctic from '../../../../assets/CrosspointCB165Arctic.webp';
import CrosspointDarkStar from '../../../../assets/CrosspointCB165DarkStar.webp';
import CrosspointWarden from '../../../../assets/CrosspointCB165Warden.webp';
import '../../../../styles/wiki.css';

// --- Main App Component ---
export default function App() {
  const [isTocOpen, setIsTocOpen] = useState(true);
    const [selectedVariant, setSelectedVariant] = useState('Classic');

  // Image URLs - These are now imported, so we comment out the old consts to avoid shadowing
  // const CrosspointImg = "https://static.wikia.nocookie.net/thehuntercotw/images/2/23/Bow_Crosspoint_CB-165.png";
  // const RifleDiagram = "https://static.wikia.nocookie.net/thehuntercotw/images/0/07/Rifle_Comparison_Chart.png"; // Placeholder for bow comparison
  
  // Using imported images for gallery items
  // const CrosspointStanding = CrosspointImg;
  // const CrosspointCrouching = CrosspointImg;
  // const CrosspointLying = CrosspointImg;
  // const CrosspointIronSight = CrosspointImg;

    // Data for Variants Slider
    const variants = {
        Classic: {
            image: CrosspointClassic,
            desc: 'The standard variant featuring a camouflage finish.',
        },
        Arctic: {
            image: CrosspointArctic,
            desc: 'A variant featuring an arctic camouflage pattern.',
        },
        'Dark Star': {
            image: CrosspointDarkStar,
            desc: 'A variant featuring black powder painted metal and dark wooden body.',
        },
        Warden: {
            image: CrosspointWarden,
            desc: 'A variant featuring a standard dark brown foliage pattern.',
        },
    };

  // Data for Ammo Table
  const ammoData = [
    { name: "300 gr. Small Game Point", pen: "10", exp: "0", class: "1-2", range: "20m", price: 530 },
    { name: "420 gr. Broadhead", pen: "50", exp: "0", class: "2-7", range: "20m", price: 700 },
    { name: "600 gr. Broadhead", pen: "90", exp: "0", class: "7-9", range: "20m", price: 880 },
  ];

  // Data for Sights List
  const sightsData = [
    "Hawken 1-5x30 Crossbow Scope"
  ];

  // Hawken Scope Ballistics Data
  const hawkenScopeData = {
    scope: "Hawken 1-5x30 Crossbow Scope",
    weapon: "Crosspoint CB-165",
    holdovers: {
      "300gr": {
        "20m": { top: 20, middle: 50, bottom: 75 },
        "40m": { top: 40, middle: 65, bottom: 95 },
        "60m": { top: 60, middle: 85, bottom: 115 }
      },
      "420gr": {
        "20m": { top: 20, middle: 40, bottom: 60 },
        "40m": { top: 40, middle: 60, bottom: 82 },
        "60m": { top: 60, middle: 80, bottom: 102 }
      },
      "600gr": {
        "20m": { top: 20, middle: 35, bottom: 50 },
        "40m": { top: 40, middle: 55, bottom: 68 },
        "60m": { top: 60, middle: 75, bottom: 90 }
      }
    }
  };

  const [activeScopeAmmo, setActiveScopeAmmo] = useState("420gr");

  return (
        <div className="wiki-page">
            <div className="wiki-inner">
                <h1 className="wiki-header">Crosspoint CB-165</h1>

                <div className="wiki-layout">
                    <aside className="wiki-sidebar">
                        <div className="wiki-sidebar-header">Crosspoint CB-165</div>

                        <div
                            className="wiki-sidebar-section wiki-variant-bar"
                            style={{ display: 'flex', justifyContent: 'space-around', gap: 8, flexWrap: 'wrap' }}
                        >
                            {Object.keys(variants).map((variantName) => (
                                <button
                                    key={variantName}
                                    onClick={() => setSelectedVariant(variantName)}
                                    type="button"
                                    className="wiki-link wiki-variant-button"
                                    aria-current={selectedVariant === variantName ? 'true' : undefined}
                                >
                                    {variantName}
                                </button>
                            ))}
                        </div>

                        <div className="wiki-sidebar-image wiki-sidebar-image--contain">
                            <img src={variants[selectedVariant].image} alt={selectedVariant} className="wiki-img-custom" />
                        </div>

                        <div className="wiki-sidebar-header" style={{ fontSize: '0.9rem' }}>General Information</div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Value</span>
                            <span>0</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Weight</span>
                            <span>4</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Score</span>
                            <span>0</span>
                        </div>

                        <div className="wiki-sidebar-header" style={{ fontSize: '0.9rem' }}>Statistics</div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Accuracy</span>
                            <span>45</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Recoil</span>
                            <span>35</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Reload</span>
                            <span>20</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Hipshot</span>
                            <span>10</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Magazine</span>
                            <span>5</span>
                        </div>
                    </aside>

                    <main className="wiki-main">
                        <blockquote className="wiki-quote">
                            <p>"This precision-crafted crossbow sports enough power to take down the largest game animals. With a beautiful woven carbon fiber barrel, a built-in rope-cocking device, and a 4-arrow quiver, the CB-165 is ideal for short-range hunting."</p>
                            <cite>— In-Game Description</cite>
                        </blockquote>

                        <div className="wiki-p-mb">
                            <p>
                                The <strong>Crosspoint CB-165</strong> is the only crossbow available to hunters. The high peak draw weight gives it a massive advantage over other bows when it comes to hunting big game. It is also capable of having a scope mounted for better long-distance shots. Thanks to sporting the highest accuracy among the bows, the effective range has been improved to around 80 meters.
                            </p>
                            <p>
                                This weapon is available as part of the <a href="#" className="wiki-link">Weapon Pack 1</a> DLC.
                            </p>
                            <p>
                                This weapon has its unique "Hawken 1-5x30 Crossbow Scope" available to purchase and use. None of the other scopes present in the game are compatible with crossbows.
                            </p>
                        </div>

                        <div className="wiki-toc-panel wiki-p-mb">
                            <div className="wiki-toc-panel-header">
                                <span className="wiki-toc-panel-title">Contents</span>
                                <span className="wiki-toc-panel-toggle" onClick={() => setIsTocOpen(!isTocOpen)}>
                                    [{isTocOpen ? 'hide' : 'show'}]
                                </span>
                            </div>
                            {isTocOpen && (
                                <ul className="wiki-list-plain">
                                    <li className="wiki-li"><a href="#ammo" className="wiki-link">1. Arrows</a></li>
                                    <li className="wiki-li"><a href="#sights" className="wiki-link">2. Sights</a></li>
                                    <li className="wiki-li"><a href="#variants" className="wiki-link">3. Variants</a></li>
                                    <li className="wiki-li"><a href="#gallery" className="wiki-link">4. Gallery</a></li>
                                    <li className="wiki-li"><a href="#comparison" className="wiki-link">5. Comparison to other bows</a></li>
                                </ul>
                            )}
                        </div>

                        <section id="ammo" className="pt-8">
                            <h2 className="wiki-h2">1. Arrows</h2>
                            <p className="wiki-p-mb">Like all bows, it can use 3 different weights of arrow:</p>
                            <div className="wiki-table-container">
                                <table className="wiki-table">
                                    <thead>
                                        <tr className="text-white" style={{ backgroundColor: 'var(--wiki-bg-sidebar-header)' }}>
                                            <th className="wiki-th">Ammo</th>
                                            <th className="wiki-th">Penetration</th>
                                            <th className="wiki-th">Expansion</th>
                                            <th className="wiki-th">Class</th>
                                            <th className="wiki-th">Range</th>
                                            <th className="wiki-th">Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {ammoData.map((item, idx) => (
                                            <tr key={idx}>
                                                <td className="wiki-td"><strong>{item.name}</strong></td>
                                                <td className="wiki-td">{item.pen}</td>
                                                <td className="wiki-td">{item.exp}</td>
                                                <td className="wiki-td">{item.class}</td>
                                                <td className="wiki-td">{item.range}</td>
                                                <td className="wiki-td">{item.price}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <section id="sights" className="pt-8">
                            <h2 className="wiki-h2">2. Sights</h2>
                            <p className="wiki-p-mb">The following sights can be equipped on the Crosspoint CB-165:</p>
                            <ul className="wiki-ul">
                                {sightsData.map((sight, idx) => (
                                    <li key={idx} className="wiki-li"><a href="#" className="wiki-link">{sight}</a></li>
                                ))}
                            </ul>

                            <p className="wiki-p-mb">Hawken scope holdovers using max zoom (elevation, wind direction, and wind speed may effect distance):</p>

                            <div className="wiki-p-mb">
                                <div
                                    className="wiki-sidebar-section wiki-variant-bar"
                                    style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'flex-start' }}
                                >
                                    {Object.keys(hawkenScopeData.holdovers).map((weight) => (
                                        <button
                                            key={weight}
                                            onClick={() => setActiveScopeAmmo(weight)}
                                            type="button"
                                            className="wiki-link wiki-variant-button"
                                            aria-current={activeScopeAmmo === weight ? 'true' : undefined}
                                        >
                                            {weight.replace('gr', ' Grain')}
                                        </button>
                                    ))}
                                </div>

                                <div className="wiki-table-container">
                                    <table className="wiki-table">
                                        <thead>
                                            <tr className="text-white" style={{ backgroundColor: 'var(--wiki-bg-sidebar-header)' }}>
                                                <th className="wiki-th">Zero Range</th>
                                                <th className="wiki-th">Top Pin</th>
                                                <th className="wiki-th">Middle Pin</th>
                                                <th className="wiki-th">Bottom Pin</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {Object.entries(hawkenScopeData.holdovers[activeScopeAmmo]).map(([range, pins]) => (
                                                <tr key={range}>
                                                    <td className="wiki-td"><strong>{range}</strong></td>
                                                    <td className="wiki-td">{pins.top}m</td>
                                                    <td className="wiki-td">{pins.middle}m</td>
                                                    <td className="wiki-td">{pins.bottom}m</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </section>

                        <section id="variants" className="pt-8">
                            <h2 className="wiki-h2">3. Variants</h2>
                            <div className="wiki-p-mb">
                                <p>The <strong>Crosspoint CB-165 Arctic</strong> is a variant featuring an arctic camouflage pattern across the body of the crossbow.</p>
                                <p>The <strong>Crosspoint CB-165 Warden</strong> is an alternative style with a standard dark brown foliage pattern across the body, stock, and limbs.</p>
                                <p>The <strong>Crosspoint CB-165 Dark Star</strong> is a version that features black powder painted metal, paired with a dark wooden body and stock.</p>
                            </div>
                        </section>

                        <section id="gallery" className="pt-8">
                            <h2 className="wiki-h2">4. Gallery</h2>
                            <div className="wiki-gallery-grid">
                                {[
                                    { title: 'Standing', img: CrosspointStanding },
                                    { title: 'Crouching', img: CrosspointCrouching },
                                    { title: 'Lying', img: CrosspointLying },
                                    { title: 'Iron sight', img: CrosspointIronsight },
                                ].map((item, idx) => (
                                    <div key={idx} className="wiki-gallery-item">
                                        <div className="wiki-gallery-placeholder">
                                            <img src={item.img} alt={item.title} />
                                        </div>
                                        <span className="wiki-gallery-label">{item.title}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section id="comparison" className="pt-8">
                            <h2 className="wiki-h2">5. Comparison to other bows</h2>
                            <div className="wiki-p-mb">
                                <img src={BowDiagram} alt="Bow Comparison Chart" style={{ width: 400, height: 200, objectFit: 'contain', maxWidth: '100%' }} />
                            </div>
                        </section>

                        <WeaponsTable />
                    </main>
                </div>
            </div>
        </div>
  );
}