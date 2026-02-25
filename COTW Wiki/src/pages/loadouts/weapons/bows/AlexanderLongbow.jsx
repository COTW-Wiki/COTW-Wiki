import { useState } from 'react';
import WeaponsTable from '../../../../components/WeaponsTable';
import AlexanderLongbowAsh from '../../../../assets/AlexanderLongbowAsh.webp';
import AlexanderLongbowRough from '../../../../assets/AlexanderLongbowRough.webp';
import AlexanderLongbowAiming from '../../../../assets/Alexander_aiming.webp';
import AlexanderLongbowStanding from '../../../../assets/Alexander_normal.webp';
import AlexanderLongbowInGameStore from '../../../../assets/Alexander_stats.webp';
import AlexanderLongbowLacquered from '../../../../assets/AlexanderLongbowLacquered.webp'
import '../../../../styles/wiki.css';

// --- Main App Component ---
export default function App() {
  const [isTocOpen, setIsTocOpen] = useState(true);
    const [selectedVariant, setSelectedVariant] = useState('Lacquered');

  // Image URLs
  const AlexanderImg = "https://static.wikia.nocookie.net/thehuntercotw/images/5/5a/Bow_Alexander_Longbow.png";
  const RifleDiagram = "https://static.wikia.nocookie.net/thehuntercotw/images/0/07/Rifle_Comparison_Chart.png"; // Placeholder for bow comparison
  
    // Data for Variants Slider
    const variants = {
        Lacquered: {
            image: AlexanderLongbowLacquered,
            desc: 'A highly polished variant with a glossy finish.',
        },
        Rough: {
            image: AlexanderLongbowRough,
            desc: 'The rough variant crafted from high-quality yew wood.',
        },
        Ash: {
            image: AlexanderLongbowAsh,
            desc: 'A variant featuring a darker, ash wood finish.',
        },
    };

  // Data for Ammo Table
  const ammoData = [
    { name: "350 Grain Broadhead", pen: "15", exp: "0", class: "1-3", range: "20m", price: 500 },
    { name: "540 Grain Broadhead", pen: "75", exp: "0", class: "4-7", range: "20m", price: 750 },
    { name: "700 Grain Broadhead", pen: "90", exp: "0", class: "8-9", range: "20m", price: 900 },
  ];

  // Data for Sights List
  const sightsData = [
    "None (Traditional Bow)"
  ];

  return (
        <div className="wiki-page">
            <div className="wiki-inner">
                <h1 className="wiki-header">Alexander Longbow</h1>

                <div className="wiki-layout">
                    <aside className="wiki-sidebar">
                        <div className="wiki-sidebar-header">Alexander Longbow</div>

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
                            <img
                                src={variants[selectedVariant].image}
                                alt={selectedVariant}
                                className="wiki-img-custom"
                                onError={(e) => { e.target.src = AlexanderImg; }}
                            />
                        </div>

                        <div className="wiki-sidebar-header" style={{ fontSize: '0.9rem' }}>General Information</div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Value</span>
                            <span>0</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Weight</span>
                            <span>2.5</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Score</span>
                            <span>0</span>
                        </div>

                        <div className="wiki-sidebar-header" style={{ fontSize: '0.9rem' }}>Statistics</div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Accuracy</span>
                            <span>30</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Recoil</span>
                            <span>15</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Reload</span>
                            <span>100</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Hipshot</span>
                            <span>12</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Peak Draw Weight</span>
                            <span>60 lb</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Magazine</span>
                            <span>1</span>
                        </div>
                    </aside>

                    <main className="wiki-main">
                        <blockquote className="wiki-quote">
                            <p>"Contemporary bow-making techniques and flexible but sturdy materials make this stunning take on an ancient self bow effective even for modern hunters. A single stave of hickory and bowstring combine to form a silent but deadly weapon that epitomizes the resourcefulness of the people who used it to conquer prey."</p>
                            <cite>— In-Game Description</cite>
                        </blockquote>

                        <div className="wiki-p-mb">
                            <p>
                                <strong>Alexander Longbow Lacquered</strong> is the second non-compound bow added to the game. As a classical bow, it cannot support sights like the Houyi Recurve Bow, despite showing a slot for it. Aiming without sight is made notably easier since the arrow's tip can be used as a sight, unlike its recurve counterpart. Unfortunately, the improvement in aiming comes at the cost of this bow being worse than the Houyi bows, except for recoil. Fortunately, they share the same arrows, so switching between them is much easier.
                            </p>
                            <p>
                                This weapon is available as part of the <a href="#" className="wiki-link">Silver Ridge Peaks</a> DLC.
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
                                </ul>
                            )}
                        </div>

                        <section id="ammo" className="pt-8">
                            <h2 className="wiki-h2">1. Arrows</h2>
                            <p className="wiki-p-mb">Like all bows, it can use 3 different weights of arrows</p>
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
                            <p className="wiki-p-mb">
                                The Alexander Longbow is a traditional bow and cannot be equipped with any sights. Aiming relies on player skill and estimation using the arrow shelf or hand position.
                            </p>
                        </section>

                        <section id="variants" className="pt-8">
                            <h2 className="wiki-h2">3. Variants</h2>
                            <div className="wiki-p-mb">
                                <p>The <strong>Alexander Longbow Rough</strong> is a style that resembles a traditional bow. No lacquers, stains, or paints. Just a shaped branch, and a bowstring.</p>
                                <p>The <strong>Alexander Longbow Ash</strong> is a variant features ash-white wood.</p>
                            </div>
                        </section>

                        <section id="gallery" className="pt-8">
                            <h2 className="wiki-h2">4. Gallery</h2>
                            <div className="wiki-gallery-grid">
                                {[
                                    { title: 'Alexander Longbow, Ash Variation', img: AlexanderLongbowStanding },
                                    { title: 'Alexander Longbow Aimed', img: AlexanderLongbowAiming },
                                    { title: 'Alexander Longbow Stats', img: AlexanderLongbowInGameStore },
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

                        <WeaponsTable />
                    </main>
                </div>
            </div>
        </div>
  );
}