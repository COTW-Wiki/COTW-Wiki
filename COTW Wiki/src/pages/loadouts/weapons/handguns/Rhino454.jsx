import { useState } from 'react';
import WeaponsTable from '../../../../components/WeaponsTable';
import Rhino from '../../../../assets/Rhino454.webp';
import HandgunsDiagram from '../../../../assets/Handgun_diagram_2020.webp';
import '../../../../styles/wiki.css';

// --- Main App Component ---
export default function App() {
  const [isTocOpen, setIsTocOpen] = useState(true);

  // Data for Ammo Table
  const ammoData = [
    { name: ".454 Flat Nose Hard-Cast", pen: 100, exp: 23, class: "4-9", range: "50m", price: 770 },
    { name: ".454 Jacketed Hollow-Point", pen: 25, exp: 100, class: "4-9", range: "50m", price: 440 },
  ];

  // Data for Sights List
  const sightsData = [
    "Goshawk Redeye 2-4x20 Handgun Scope",
    "Hermes 3-7x33 Handgun-Shotgun Scope",
    "Red Raptor Reflex Sight",
    "Tru-Vision Tritium Sights"
  ];

    return (
        <div className="wiki-page">
            <div className="wiki-inner">
                <h1 className="wiki-header">Rhino 454</h1>

                <div className="wiki-layout">
                    <aside className="wiki-sidebar">
                        <div className="wiki-sidebar-header">Rhino 454</div>

                        <div className="wiki-sidebar-image wiki-sidebar-image--contain">
                            <img src={Rhino} alt="Rhino 454" />
                        </div>

                        <div className="wiki-sidebar-header" style={{ fontSize: '0.9rem' }}>General Information</div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Value</span>
                            <span>48000</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Weight</span>
                            <span>2.0</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Score</span>
                            <span>3243</span>
                        </div>

                        <div className="wiki-sidebar-header" style={{ fontSize: '0.9rem' }}>Statistics</div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Accuracy</span>
                            <span>10</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Recoil</span>
                            <span>100</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Reload</span>
                            <span>60</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Hipshot</span>
                            <span>86</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Magazine</span>
                            <span>5</span>
                        </div>
                    </aside>

                    <main className="wiki-main">
                        <blockquote className="wiki-quote">
                            <p>"Mainly used as a "bear stopper" sidearm, this hand cannon packs enough punch to drop a bear with one bullet. But it is not only for defensive purposes: the avid revolver hunter can also take this hefty gun for a big game hunt any day of the week."</p>
                            <cite>— In-Game Description</cite>
                        </blockquote>

                        <div className="wiki-p-mb">
                            <p>
                                The <strong>Rhino 454</strong> is the most powerful pistol in the game, firing the .454 Casull cartridge. Due to its high power it is suitable for close-range hunting of big game such as Bison and Moose. This incredible power comes at the cost of lower accuracy, and high recoil.
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
                                    <li><a href="#ammo" className="wiki-link">1. Ammo</a></li>
                                    <li><a href="#sights" className="wiki-link">2. Sights</a></li>
                                    <li><a href="#trivia" className="wiki-link">3. Trivia</a></li>
                                    <li><a href="#comparison" className="wiki-link">4. Comparison to other handguns</a></li>
                                </ul>
                            )}
                        </div>

                        <section id="ammo" className="pt-8">
                            <h2 className="wiki-h2">1. Ammo</h2>
                            <p className="wiki-p-mb">As with most pistols, two variants of its ammunition are available:</p>
                            <div className="wiki-table-container">
                                <table className="wiki-table">
                                    <thead>
                                        <tr className="bg-[var(--wiki-bg-sidebar-header)]">
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
                            <p className="wiki-p-mb">The following sights can be equipped on the Rhino 454:</p>
                            <ul className="wiki-ul">
                                {sightsData.map((sight, idx) => (
                                    <li key={idx} className="wiki-li"><a href="#" className="wiki-link">{sight}</a></li>
                                ))}
                            </ul>
                        </section>

                        <section id="trivia" className="pt-8">
                            <h2 className="wiki-h2">3. Trivia</h2>
                            <p className="wiki-p-mb">The Rhino 454 is modeled after its real-life counterpart of the Taurus Raging Bull.</p>
                        </section>

                        <section id="comparison" className="pt-8">
                            <h2 className="wiki-h2">4. Comparison to other handguns</h2>
                            <div className="wiki-p-mb">
                                <img
                                    src={HandgunsDiagram}
                                    alt="Handgun Comparison Chart"
                                    style={{ width: '400px', height: '200px', maxWidth: '100%' }}
                                    className="border border-gray-700 shadow-md"
                                />
                            </div>
                        </section>

                        <WeaponsTable activeItem="Rhino 454" />
                    </main>
                </div>
            </div>
        </div>
    );
}