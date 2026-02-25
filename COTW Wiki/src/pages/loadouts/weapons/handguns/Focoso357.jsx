import { useState } from 'react';
import WeaponsTable from '../../../../components/WeaponsTable';
import Focoso from '../../../../assets/Focoso357.webp';
import HandgunsDiagram from '../../../../assets/Handgun_diagram_2020.webp';
import '../../../../styles/wiki.css';


// --- Main App Component ---
export default function App() {
  const [isTocOpen, setIsTocOpen] = useState(true);

  // Data for Ammo Table
  const ammoData = [
    { name: ".357 Jacketed Hollow-Point", pen: 12, exp: 18, class: "2-6", range: "50m", price: 220 },
    { name: ".357 Flat Nose Hard-Cast", pen: 50, exp: 4, class: "2-6", range: "50m", price: 350 },
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
                <h1 className="wiki-header">Focoso 357</h1>

                <div className="wiki-layout">
                    <aside className="wiki-sidebar">
                        <div className="wiki-sidebar-header">Focoso 357</div>
                        <div className="wiki-sidebar-image wiki-sidebar-image--contain">
                            <img src={Focoso} alt="Focoso 357" />
                        </div>

                        <div className="wiki-sidebar-header" style={{ fontSize: '0.9rem' }}>General Information</div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Value</span>
                            <span>0</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Weight</span>
                            <span>1</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Score</span>
                            <span>0</span>
                        </div>

                        <div className="wiki-sidebar-header" style={{ fontSize: '0.9rem' }}>Statistics</div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Accuracy</span>
                            <span>55</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Recoil</span>
                            <span>64</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Reload</span>
                            <span>60</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Hipshot</span>
                            <span>100</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Magazine</span>
                            <span>6</span>
                        </div>
                    </aside>

                    <main className="wiki-main">
                        <blockquote className="wiki-quote">
                            <p>"A single-action revolver using .357 magnum ammunition. Powerful, yet easy to maintain out in the field. It's perhaps primarily used as a defensive sidearm, but the revolver hunting enthusiast can easily fit the gun with a scope and use it to take down small to medium-sized game."</p>
                            <cite>— In-Game Description</cite>
                        </blockquote>

                        <div className="wiki-p-mb">
                            <p>
                                The <strong>Focoso 357</strong> was the first pistol available in the game. While it lacks power and range, it's one of the few weapons suitable for hunting Red Fox and Siberian Musk Deer. Like all pistols, the light weight of its construction makes it a suitable sidearm.
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
                                                <td className="wiki-td font-bold">{item.name}</td>
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
                            <p className="wiki-p-mb">The following sights can be equipped on the Focoso 357:</p>
                            <ul className="wiki-ul">
                                {sightsData.map((sight, idx) => (
                                    <li key={idx} className="wiki-li"><a href="#" className="wiki-link">{sight}</a></li>
                                ))}
                            </ul>
                        </section>

                        <section id="trivia" className="pt-8">
                            <h2 className="wiki-h2">3. Trivia</h2>
                            <ul className="wiki-ul">
                                <li className="wiki-li">The Focoso 357 is modeled after its real-life counterpart of the Smith & Wesson Performance Center Model 629 Hunter.</li>
                                <li className="wiki-li">At the time of it's release, the .357 Magnum was the most powerful pistol cartridge in the world.</li>
                                <li className="wiki-li">The Focoso 357 is the only gun in game with a built-in muzzle break. This is purely cosmetic however, as it does not make the pistol more accurate.</li>
                                <li className="wiki-li">With the release of the High Caliber Weapon Pack on March 12th 2024, the Focoso 357 was visually reworked.</li>
                            </ul>
                        </section>

                        <section id="comparison" className="pt-8">
                            <h2 className="wiki-h2">4. Comparison to other handguns</h2>
                            <div className="wiki-p-mb">
                                <img
                                    src={HandgunsDiagram}
                                    alt="Handgun Comparison Chart"
                                    className="border border-[var(--wiki-border)] shadow-md max-w-full"
                                />
                            </div>
                        </section>

                        <WeaponsTable />
                    </main>
                </div>
            </div>
        </div>
    );
}