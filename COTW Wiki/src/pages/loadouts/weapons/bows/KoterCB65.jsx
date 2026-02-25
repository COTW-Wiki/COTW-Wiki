import { useState } from 'react';
import KoterCB65Hephaestus from '../../../../assets/KoterCB65Hephaestus.webp';
import KoterCB65Orpheus from '../../../../assets/KoterCB65Orpheus.webp';
import WeaponsTable from '../../../../components/WeaponsTable';
import BowsDiagram from '../../../../assets/Bows.webp';
import '../../../../styles/wiki.css';

// --- Main App Component ---
export default function App() {
  const [isTocOpen, setIsTocOpen] = useState(true);
    const [selectedVariant, setSelectedVariant] = useState('Orpheus');

  // Image URLs
  const KoterImg = "https://static.wikia.nocookie.net/thehuntercotw/images/a/a2/Bow_Koter_CB-65.png";
  const RifleDiagram = "https://static.wikia.nocookie.net/thehuntercotw/images/0/07/Rifle_Comparison_Chart.png"; // Placeholder for bow comparison
  
  // Using the main image as a placeholder for gallery items
  const KoterStanding = KoterImg;
  const KoterCrouching = KoterImg;
  const KoterLying = KoterImg;
  const KoterIronSight = KoterImg;

    // Data for Variants Slider
    const variants = {
        Orpheus: {
            image: KoterCB65Orpheus,
            desc: 'The standard variant featuring a modern camouflage pattern.',
        },
        Hephaestus: {
            image: KoterCB65Hephaestus,
            desc: 'A variant with a sleek black and red finish.',
        },
    };

  // Data for Ammo Table
  const ammoData = [
    { name: "300 Grain Arrow", pen: "10", exp: "0", class: "1-2", range: "20m", price: 530 },
    { name: "420 Grain Arrow", pen: "50", exp: "0", class: "2-7", range: "20m", price: 700 },
    { name: "600 Grain Arrow", pen: "90", exp: "0", class: "7-9", range: "20m", price: 880 },
  ];

  // Data for Sights List
  const sightsData = [
    "Brightsight Single-Pin Sight",
    "Swift-Mark 3 Bow Sight",
    "Swift-Mark 5 Bow Sight",
    "Brightsight Rangefinder Bow Sight"
  ];

  return (
        <div className="wiki-page">
            <div className="wiki-inner">
                <h1 className="wiki-header">Koter CB-65 Bow</h1>

                <div className="wiki-layout">
                    <aside className="wiki-sidebar">
                        <div className="wiki-sidebar-header">Koter CB-65 Bow</div>

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
                                onError={(e) => { e.target.src = KoterImg; }}
                            />
                        </div>

                        <div className="wiki-sidebar-header" style={{ fontSize: '0.9rem' }}>General Information</div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Value</span>
                            <span>0</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Weight</span>
                            <span>4.0</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Score</span>
                            <span>0</span>
                        </div>

                        <div className="wiki-sidebar-header" style={{ fontSize: '0.9rem' }}>Statistics</div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Accuracy</span>
                            <span>24</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Recoil</span>
                            <span>19</span>
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
                            <span className="wiki-sidebar-label">Magazine</span>
                            <span>1</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Draw Weight</span>
                            <span>65 lb</span>
                        </div>
                    </aside>

                    <main className="wiki-main">
                        <blockquote className="wiki-quote">
                            <p>"With performance that lies in the sweet spot between the Bearclaw Lite CB-60 and the Hawk Edge CB-70, the Koter CB-65 is a versatile compound bow, useful in every situation. Striking a delicate balance between recoil and accuracy, this bow is at its best when hunting medium sized game, but can also be deadly accurate against small and big game, when paired with the right arrows."</p>
                            <cite>— In-Game Description</cite>
                        </blockquote>

                        <div className="wiki-p-mb">
                            <p>
                                The <strong>Koter CB-65 Orpheus</strong> is a compound bow with a 65 pound peak draw weight. This puts it in the spot between the <a href="#" className="wiki-link">Bearclaw Lite CB-60</a>, and the <a href="#" className="wiki-link">Hawk Edge CB-70</a> in terms of power. A great rounded bow for those looking for a weapon that can fill any role.
                            </p>
                            <p>
                                This weapon is available as part of the <a href="#" className="wiki-link">High-Tech Hunting Pack</a> DLC.
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
                                    <li className="wiki-li"><a href="#trivia" className="wiki-link">4. Trivia</a></li>
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
                            <p className="wiki-p-mb">The following sights can be equipped on the Koter CB-65 Bow:</p>
                            <ul className="wiki-ul">
                                {sightsData.map((sight, idx) => (
                                    <li key={idx} className="wiki-li"><a href="#" className="wiki-link">{sight}</a></li>
                                ))}
                            </ul>
                        </section>

                        <section id="variants" className="pt-8">
                            <h2 className="wiki-h2">3. Variants</h2>
                            <div className="wiki-p-mb">
                                <p>The <strong>Koter CB-65 Hephaestus</strong> is an alternate style featuring a red body with black bowlimbs.</p>
                            </div>
                        </section>

                        <section id="trivia" className="pt-8">
                            <h2 className="wiki-h2">4. Trivia</h2>
                            <p className="wiki-p-mb">
                                There originally were 3 variations planned, third being the Koter CB-65 Artemis. Unfortunately only two were ever released and the third skin isn't found anywhere in the game's files. The only documentation used to be found on the High-Tech Hunting Pack's Steam store page, but mention of it has since been removed.
                            </p>
                        </section>

                        <WeaponsTable />
                    </main>
                </div>
            </div>
        </div>
  );
}