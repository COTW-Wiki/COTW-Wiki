import React, { useState } from 'react';
import RangerImage from '../../../../assets/Ranger243.webp';
import RifleDiagram from '../../../../assets/Rifle_diagram_2020.webp';
import RangerIronsight from '../../../../assets/Ranger_ironsight.webp';
import RangerProne from '../../../../assets/Ranger_pose_3.webp';
import RangerCrouch from '../../../../assets/Ranger_pose_2.webp';
import WeaponsTable from '../../../../components/WeaponsTable';
import RangerStanding from '../../../../assets/Ranger_pose_1.webp';
import { Link } from 'react-router-dom';
import '../../../../styles/wiki.css';

export default function App() {
  const [isTocOpen, setIsTocOpen] = useState(true);

    const scrollTo = (e, id) => {
        e.preventDefault();
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

  // Data for Ammo Table
  const ammoData = [
    { name: ".243 Polymer-Tip", pen: 30, exp: 4, class: "2-6", range: "150m", price: 530 },
    { name: ".243 Soft-Point", pen: 15, exp: 17, class: "2-6", range: "150m", price: 0 },
  ];

  // Data for Sights List
  const sightsData = [
    "Ascent 1-4x24 Rifle Scope",
    "Hyperion 4-8x42 Rifle Scope",
    "Odin 4-12x33 Rifle Scope",
    "Argus 8-16x50 Rifle Scope",
    "GenZero 1-4x20 Night Vision Rifle Scope",
    "Angler 4-8x100 Night Vision Rifle Scope",
    "Red Raptor Reflex Sight",
    "Tru-Vision Tritium Sights"
  ];

    return (
        <div className="wiki-page">
            <div className="wiki-inner">
                <h1 className="wiki-header">Ranger .243</h1>

                <div className="wiki-layout">
                    {/* SIDEBAR */}
                    <aside className="wiki-sidebar">
                        <div className="wiki-sidebar-header">Ranger .243</div>
                        <div className="wiki-sidebar-image wiki-sidebar-image--contain" style={{ backgroundColor: 'var(--wiki-bg-sidebar)' }}>
                            <img src={RangerImage} alt="Ranger .243" className="wiki-img-custom" />
                        </div>

                        <div className="wiki-sidebar-header" style={{ fontSize: '0.9rem' }}>General Information</div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Value</span>
                            <span className="wiki-link">0</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Weight</span>
                            3.5
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Score</span>
                            0
                        </div>

                        <div className="wiki-sidebar-header" style={{ fontSize: '0.9rem' }}>Statistics</div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Accuracy</span>
                            78
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Recoil</span>
                            46
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Reload</span>
                            49
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Hipshot</span>
                            76
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Magazine</span>
                            5
                        </div>
                    </aside>

                    {/* MAIN */}
                    <main className="wiki-main">
                        <blockquote className="wiki-quote">
                            <p>"This hand-crafted .243 bolt-action rifle is highly durable and built to weather even the most extreme conditions. The .243 cartridge, with its relatively low recoil, is the ideal entry point for anyone serious about putting venison on the table."</p>
                            <cite> In-Game Description</cite>
                        </blockquote>

                        <div className="wiki-p-mb">
                            <p>
                                The <strong>Ranger .243</strong> bolt-action rifle is the <Link to="/loadouts/weapons" className="wiki-link">weapon</Link> the player starts with. While it lacks the strength to take down big game such as <Link to="/animals/moose" className="wiki-link">Moose</Link>, <Link to="/animals/bison" className="wiki-link">Bison</Link> or <Link to="/animals/red-deer" className="wiki-link">Red Deer</Link>, it is a variable rifle and provides 100% <Link to="/mechanics/integrity" className="wiki-link">integrity</Link> bonus for a lot of animals.
                            </p>
                        </div>

                        {/* TOC */}
                        <div className="wiki-toc-panel wiki-p-mb">
                            <div className="wiki-toc-panel-header">
                                <span className="wiki-toc-panel-title">🔢 Contents</span>
                                <span className="wiki-toc-panel-toggle" onClick={() => setIsTocOpen(!isTocOpen)}>
                                    [{isTocOpen ? 'hide' : 'show'}]
                                </span>
                            </div>
                            {isTocOpen && (
                                <ul className="wiki-list-plain">
                                    <li><a href="#ammo" onClick={(e) => scrollTo(e, 'ammo')} className="wiki-link">1. Ammo</a></li>
                                    <li><a href="#sights" onClick={(e) => scrollTo(e, 'sights')} className="wiki-link">2. Sights</a></li>
                                    <li><a href="#analysis" onClick={(e) => scrollTo(e, 'analysis')} className="wiki-link">3. Analysis</a></li>
                                    <li><a href="#trivia" onClick={(e) => scrollTo(e, 'trivia')} className="wiki-link">4. Trivia</a></li>
                                    <li><a href="#gallery" onClick={(e) => scrollTo(e, 'gallery')} className="wiki-link">5. Gallery</a></li>
                                    <li><a href="#comparison" onClick={(e) => scrollTo(e, 'comparison')} className="wiki-link">6. Comparison to other rifles</a></li>
                                </ul>
                            )}
                        </div>

                        <section id="ammo" className="pt-8">
                            <h2 className="wiki-h2">1. Ammo</h2>
                            <p className="wiki-p-mb">As with most rifles, two variants of its <Link to="/loadouts/ammunition" className="wiki-link">ammunition</Link> are available:</p>
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
                                                <td className="wiki-td"><span className="wiki-link">{item.name}</span></td>
                                                <td className="wiki-td text-center">{item.pen}</td>
                                                <td className="wiki-td text-center">{item.exp}</td>
                                                <td className="wiki-td text-center">{item.class}</td>
                                                <td className="wiki-td text-center">{item.range}</td>
                                                <td className="wiki-td text-center">{item.price}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <section id="sights" className="pt-8">
                            <h2 className="wiki-h2">2. Sights</h2>
                            <p className="wiki-p-mb">The following sights can be equipped on the Ranger .243:</p>
                            <ul className="wiki-ul">
                                {sightsData.map((sight, idx) => (
                                    <li key={idx} className="wiki-li"><a href="#" className="wiki-link">{sight}</a></li>
                                ))}
                            </ul>
                        </section>

                        <section id="analysis" className="pt-8">
                            <h2 className="wiki-h2">3. Analysis</h2>
                            <div className="wiki-p-mb">
                                <p className="mb-4">
                                    As the rifle the player starts with, the Ranger holds a special place in the game. The soft point <Link to="/loadouts/ammunition" className="wiki-link">ammunition</Link> for it can be obtained for free. It is the only weapon in the game with free ammunition. Therefore it is also a weapon to make starting <Link to="/cash" className="wiki-link">money</Link> with.
                                </p>
                                <p className="mb-4">
                                    Despite the fact that the soft point ammunition is free, players should switch to Polymer-Tip ammunition as soon as it's unlocked, since expansion is not modeled well in the game and has almost no noticable difference/advantage to vital organ hits achieved with higher penetration ammunition. In real life, high-expansion ammo is designed to cause animals to die from increased blood loss, but the game requires a successful hit to a vital organ for full integrity. Since Polymer-Tip ammunition has a much higher chance of reaching those vital organs through increased penetration (even at an angle), it should generally be preferred over Soft-Point ammunition.
                                </p>
                                <p className="mb-4">
                                    The Ranger covers animal classes 2-6. It performs best on classes 2-4 and is the best class 2-4 rifle in the game in terms of stopping power and penetration. While still being decent at taking out class 5 animals (like <Link to="/animals/iberian-mouflon" className="wiki-link">Iberian Mouflon</Link> or <Link to="/animals/wild-boar" className="wiki-link">Wild Boar</Link>), it will start to struggle a bit against the sturdier animals, especially at class 6. While still being perfectly capable of downing them (ideally with a broadside lungshot), it lacks the power to do it quickly. So in a pinch it will do the job, but if you can, bring another weapon for class 5 and up.
                                </p>
                                <p>
                                    It is competitive to the <Link to="/loadouts/weapons/rifles/223-docent" className="wiki-link">.223 Docent</Link>, the <Link to="/loadouts/weapons/rifles/zarza-15-223" className="wiki-link">ZARZA-15 .223</Link> and the <Link to="/loadouts/weapons/rifles/zagan-varminter-22-250" className="wiki-link">Zagan Varminter .22-250</Link> for hunting classes 2-4.
                                </p>
                            </div>
                        </section>

                        <section id="trivia" className="pt-8">
                            <h2 className="wiki-h2">4. Trivia</h2>
                            <p className="wiki-p-mb">
                                The Ranger .243 is modeled after its real-life counterpart of the Winchester Model 70 Ranger.
                            </p>
                        </section>

                        <section id="gallery" className="pt-8">
                            <h2 className="wiki-h2">5. Gallery</h2>
                            <div className="wiki-uniform-grid">
                                {[
                                    { title: 'Standing', img: RangerStanding },
                                    { title: 'Crouching', img: RangerCrouch },
                                    { title: 'Lying', img: RangerProne },
                                    { title: 'Iron sight', img: RangerIronsight },
                                ].map((item, idx) => (
                                    <div key={idx} className="wiki-uniform-card">
                                        <div className="wiki-uniform-card-header">{item.title}</div>
                                        <div className="wiki-uniform-card-image">
                                            <img src={item.img} alt={item.title} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section id="comparison" className="pt-8">
                            <h2 className="wiki-h2">6. Comparison to other rifles</h2>
                            <div className="wiki-table-container wiki-p-mb">
                                <div style={{ backgroundColor: 'var(--wiki-bg-sidebar)', padding: '20px' }}>
                                    <img src={RifleDiagram} alt="Rifle Diagram" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '8px' }} />
                                </div>
                            </div>
                            <WeaponsTable activeItem="Ranger .243" />
                        </section>
                    </main>
                </div>

                <div className="h-32"></div>
            </div>
        </div>
    );
}
