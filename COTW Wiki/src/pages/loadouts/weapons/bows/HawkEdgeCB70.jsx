import { useState } from 'react';
import WeaponsTable from '../../../../components/WeaponsTable';
import HawkEdgeCB from '../../../../assets/HawkEdgeCB70.webp';
import BowDiagram from '../../../../assets/Bows.webp';
import '../../../../styles/wiki.css';

// --- Main App Component ---
export default function App() {
  const [isTocOpen, setIsTocOpen] = useState(true);

  // Image URLs
  const HawkImg = "https://static.wikia.nocookie.net/thehuntercotw/images/4/4b/Bow_Hawk_Edge_CB-70.png";
  
  // Using the main image as a placeholder for gallery items
  const HawkStanding = HawkImg;
  const HawkCrouching = HawkImg;
  const HawkLying = HawkImg;
  const HawkIronSight = HawkImg;

  // Data for Ammo Table
  const ammoData = [
    { name: "300 gr. Small Game Point", pen: 10, exp: 0, class: "1-2", range: "20m", price: 530 },
    { name: "420 gr. Broadhead", pen: 50, exp: 0, class: "2-7", range: "20m", price: 700 },
    { name: "600 gr. Broadhead", pen: 90, exp: 0, class: "7-9", range: "20m", price: 880 },
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
                <h1 className="wiki-header">Hawk Edge CB-70</h1>

                <div className="wiki-layout">
                    <aside className="wiki-sidebar">
                        <div className="wiki-sidebar-header">Hawk Edge CB-70</div>

                        <div className="wiki-sidebar-image wiki-sidebar-image--contain">
                            <img
                                src={HawkEdgeCB}
                                alt="Hawk Edge CB-70"
                                className="wiki-img-custom"
                                onError={(e) => { e.target.src = HawkImg; }}
                            />
                        </div>

                        <div className="wiki-sidebar-header" style={{ fontSize: '0.9rem' }}>General Information</div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Value</span>
                            <span>48000</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Weight</span>
                            <span>4</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Score</span>
                            <span>1745</span>
                        </div>

                        <div className="wiki-sidebar-header" style={{ fontSize: '0.9rem' }}>Statistics</div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Accuracy</span>
                            <span>10</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Recoil</span>
                            <span>28</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Reload</span>
                            <span>100</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Hipshot</span>
                            <span>10</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Magazine</span>
                            <span>1</span>
                        </div>
                    </aside>

                    <main className="wiki-main">
                        <blockquote className="wiki-quote">
                            <p>"A state-of-the-art, incredibly powerful bow, capable of sending arrows whizzing at targets at high velocities. Depending on the arrows used, these properties give the bow unusually flat trajectories and enough penetration to take on very large game like moose and black bear when fired at close range."</p>
                            <cite>— In-Game Description</cite>
                        </blockquote>

                        <div className="wiki-p-mb">
                            <p>
                                The <strong>Hawk Edge CB-70</strong> is the most powerful compound bow available. With a peak draw weight of 70 lbs, it is highly suitable for hunting big game. This high power does come at the price of high recoil, and a lower accuracy. Due to it's lower accuracy its range has been further limited to around 40 meters before shots become increasingly unreliable.
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
                                    <li className="wiki-li"><a href="#comparison" className="wiki-link">3. Comparison to other bows</a></li>
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
                            <p className="wiki-p-mb">The following sights can be equipped on the Hawk Edge CB-70:</p>
                            <ul className="wiki-ul">
                                {sightsData.map((sight, idx) => (
                                    <li key={idx} className="wiki-li"><a href="#" className="wiki-link">{sight}</a></li>
                                ))}
                            </ul>
                        </section>

                        <section id="comparison" className="pt-8">
                            <h2 className="wiki-h2">3. Comparison to other bows</h2>
                            <div className="wiki-p-mb">
                                <img src={BowDiagram} alt="Bows Comparison Chart" style={{ width: 400, height: 200, objectFit: 'contain', maxWidth: '100%' }} />
                            </div>
                        </section>

                        <WeaponsTable />
                    </main>
                </div>
            </div>
        </div>
  );
}