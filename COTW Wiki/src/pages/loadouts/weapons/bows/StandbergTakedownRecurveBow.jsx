import { useState } from 'react';
import WeaponsTable from '../../../../components/WeaponsTable';
import StenbergTakedownRecurveBow from '../../../../assets/Stenberg_Takedown_Recurve_Bow.webp';
import '../../../../styles/wiki.css';

// --- Main App Component ---
export default function App() {
  const [isTocOpen, setIsTocOpen] = useState(true);

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
                <h1 className="wiki-header">Stenberg Takedown Recurve Bow</h1>

                <div className="wiki-layout">
                    <aside className="wiki-sidebar">
                        <div className="wiki-sidebar-header">Stenberg Takedown Recurve Bow</div>
                        <div className="wiki-sidebar-image wiki-sidebar-image--contain">
                            <img src={StenbergTakedownRecurveBow} alt="Stenberg Takedown Recurve Bow" className="wiki-img-custom" />
                        </div>

                        <div className="wiki-sidebar-header" style={{ fontSize: '0.9rem' }}>General Information</div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Value</span>
                            <span>Free</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Weight</span>
                            <span>2.0</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Score</span>
                            <span>0</span>
                        </div>

                        <div className="wiki-sidebar-header" style={{ fontSize: '0.9rem' }}>Statistics</div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Accuracy</span>
                            <span>38</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Recoil</span>
                            <span>10</span>
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
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Draw Weight</span>
                            <span>50 lb</span>
                        </div>
                    </aside>

                    <main className="wiki-main">
                        <blockquote className="wiki-quote">
                            <p>"The Stenberg Takedown is a popular modern recurve bow used by hunters all around the world. Its takedown limbs and light weight make it very easy to transport. This model has a draw wight of 50 lbs at a typical draw length, which allows for ethical kills on deer and other popular game animals. Sights can also be mounted to improve accuracy."</p>
                            <cite>— In-Game Description</cite>
                        </blockquote>

                        <div className="wiki-p-mb">
                            <p>
                                The <strong>Stenberg Takedown Recurve Bow</strong> is the third non-compound bow added to the game. Unlike it's recurve counterparts, It can support compound bow sights and arrows.
                            </p>
                            <p>
                                This weapon is available as part of the <a href="#" className="wiki-link">Ambusher Pack</a> DLC.
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
                                    <li className="wiki-li"><a href="#ammo" className="wiki-link">1. Ammo</a></li>
                                    <li className="wiki-li"><a href="#sights" className="wiki-link">2. Sights</a></li>
                                </ul>
                            )}
                        </div>

                        <section id="ammo" className="pt-8">
                            <h2 className="wiki-h2">1. Ammo</h2>
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
                            <p className="wiki-p-mb">The following sights can be equipped on the Stenberg Takedown Recurve Bow:</p>
                            <ul className="wiki-ul">
                                {sightsData.map((sight, idx) => (
                                    <li key={idx} className="wiki-li">
                                        <a href="#" className="wiki-link">{sight}</a>
                                    </li>
                                ))}
                            </ul>
                            <p className="wiki-p-mb">Unlike the Compound Bows, this bow does not have a default single-pin sight when no other sight is equipped.</p>
                        </section>

                        <WeaponsTable activeItem="Stenberg Takedown Recurve Bow" />
                    </main>
                </div>
            </div>
        </div>
  );
}