import { useState } from 'react';
import Sundberg from '../../../../assets/Sundberg454.webp';
import SundbergStanding from '../../../../assets/SundbergStand.webp';
import SundbergCrouching from '../../../../assets/SundbergCrouch.webp';
import SundbergLying from '../../../../assets/SundbergLying.webp';
import SundbergAiming from '../../../../assets/SundbergAiming.webp';
import SundbergPromo from '../../../../assets/SundbergPromo.webp';
import HandgunsDiagram from '../../../../assets/Handgun_diagram_2020.webp';
import WeaponsTable from '../../../../components/WeaponsTable';
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
                <h1 className="wiki-header">Sundberg 454</h1>

                <div className="wiki-layout">
                    <aside className="wiki-sidebar">
                        <div className="wiki-sidebar-header">Sundberg 454</div>

                        <div className="wiki-sidebar-image wiki-sidebar-image--contain">
                            <img src={Sundberg} alt="Sundberg 454" className="wiki-img-custom" />
                        </div>

                        <div className="wiki-sidebar-header" style={{ fontSize: '0.9rem' }}>General Information</div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Value</span>
                            <span>0</span>
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
                            <p>"Join us as we celebrate five years of theHunter: Call of the Wild with this exclusive fifth anniversary hand cannon! Mainly used as a "bear stopper" sidearm, the Sundberg 454 packs enough punch to drop a bear with one bullet. But it is not only for defensive purposes; the avid revolver hunter can also take this hefty gun out for a big game hunt any day of the week. Thanks to all our amazing players around the world for sharing this journey with us."</p>
                            <cite>— In-Game Description</cite>
                        </blockquote>

                        <div className="wiki-p-mb">
                            <p>
                                The <strong>Sundberg 454</strong> is the most powerful pistol in the game, firing the .454 Casull cartridge. Due to its high power it is suitable for close-range hunting of big game such as <a href="#" className="wiki-link">Bison</a> and <a href="#" className="wiki-link">Moose</a>. This incredible power comes at the cost of lower accuracy, and high recoil. The pistol was added for free for all players with the "theHunter: Call of the Wild’s fifth anniversary" update. It is basically a free <a href="#" className="wiki-link">Rhino 454</a>.
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
                                    <li className="wiki-li"><a href="#trivia" className="wiki-link">3. Trivia</a></li>
                                    <li className="wiki-li"><a href="#gallery" className="wiki-link">4. Gallery</a></li>
                                    <li className="wiki-li"><a href="#comparison" className="wiki-link">5. Comparison to other handguns</a></li>
                                </ul>
                            )}
                        </div>

                        <section id="ammo" className="pt-8">
                            <h2 className="wiki-h2">1. Ammo</h2>
                            <p className="wiki-p-mb">As with most pistols, two variants of its ammunition are available:</p>
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
                            <p className="wiki-p-mb">The following sights can be equipped on the Sundberg 454:</p>
                            <ul className="wiki-ul">
                                {sightsData.map((sight, idx) => (
                                    <li key={idx} className="wiki-li"><a href="#" className="wiki-link">{sight}</a></li>
                                ))}
                            </ul>
                        </section>

                        <section id="trivia" className="pt-8">
                            <h2 className="wiki-h2">3. Trivia</h2>
                            <p className="wiki-p-mb">The Sundberg 454 is modeled after its real-life counterpart of a highly customized and elaborate Taurus Raging Bull.</p>
                        </section>

                        <section id="gallery" className="pt-8">
                            <h2 className="wiki-h2">4. Gallery</h2>
                            <div className="wiki-gallery-grid">
                                {[
                                    { title: 'Standing', img: SundbergStanding },
                                    { title: 'Crouching', img: SundbergCrouching },
                                    { title: 'Lying', img: SundbergLying },
                                    { title: 'Iron sight', img: SundbergAiming },
                                    { title: 'Promo', img: SundbergPromo },
                                ].map((item, idx) => (
                                    <div key={idx} className="wiki-gallery-item">
                                        <div className="wiki-gallery-placeholder">
                                            <img src={item.img} alt={item.title} />
                                        </div>
                                        <div className="wiki-gallery-label">{item.title}</div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section id="comparison" className="pt-8">
                            <h2 className="wiki-h2">5. Comparison to other handguns</h2>
                            <div className="wiki-p-mb">
                                <img
                                    src={HandgunsDiagram}
                                    alt="Handgun Comparison Chart"
                                    style={{ width: '400px', height: '200px', maxWidth: '100%' }}
                                    className="border border-gray-300 shadow-md"
                                />
                            </div>
                        </section>

                        <WeaponsTable activeItem="Sundberg 454" />
                    </main>
                </div>
            </div>
        </div>
  );
}