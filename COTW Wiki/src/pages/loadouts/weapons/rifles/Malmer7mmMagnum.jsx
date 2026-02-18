import React, { useState } from 'react';
import WeaponsTable from '../../../../components/WeaponsTable';
import '../../../../styles/wiki.css';

import RifleDiagram from '../../../../assets/Rifle_diagram_2020.webp';
import MalmerStanding from '../../../../assets/Malmer7mmMagnumStanding.webp';
import MalmerCrouching from '../../../../assets/Malmer7mmMagnumCrouching.webp';
import MalmerLying from '../../../../assets/Malmer7mmMagnumLying.webp';
import MalmerIronSight from '../../../../assets/Malmer7mmMagnumIronSight.webp';
import MalmerMagnumImage from '../../../../assets/Malmer7mmMagnum.webp';

export default function Malmer7mmMagnum() {
    const [isTocOpen, setIsTocOpen] = useState(true);

    const scrollTo = (e, id) => {
        e.preventDefault();
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    // Data for Ammo Table
    const ammoData = [
        { name: "7mm Mag. Soft-Point", pen: 20, exp: 53, class: "4-9", range: "150m", price: 610 },
        { name: "7mm Mag. Polymer-Tip", pen: 40, exp: 12, class: "4-9", range: "150m", price: 880 },
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
                <h1 className="wiki-header">Malmer 7mm Magnum</h1>

                <div className="wiki-layout">
                    <aside className="wiki-sidebar">
                        <div className="wiki-sidebar-header">Malmer 7mm Magnum</div>

                        <div className="wiki-sidebar-image wiki-sidebar-image--contain" style={{ backgroundColor: 'var(--wiki-bg-sidebar)' }}>
                            <img
                                src={MalmerMagnumImage}
                                alt="Malmer 7mm Magnum"
                                onError={(e) => {
                                    e.currentTarget.src = 'https://static.wikia.nocookie.net/thehuntercotw/images/e/e2/Rifle_Malmer_7mm_Magnum.png';
                                }}
                            />
                        </div>

                        <div className="wiki-sidebar-header" style={{ fontSize: '0.9rem' }}>General Information</div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Value</span>
                            <span>7500</span>
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
                            <span>35</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Recoil</span>
                            <span>85</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Reload</span>
                            <span>40</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Hipshot</span>
                            <span>25</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Magazine</span>
                            <span>3</span>
                        </div>
                    </aside>

                    <main className="wiki-main">
                        <blockquote className="wiki-quote">
                            <p>"Arguable the most popular hunting rifle ever made. This version, chambered in 7mm Magnum, gives you a reliable and versatile hunting companion able to take down a large variety of different game. A synthetic stock with a carbon steel barrel makes for a lightweight rifle combined with the tried and true performance that hunters across the world have come to love and rely on."</p>
                            <cite>— In-Game Description</cite>
                        </blockquote>

                        <div className="wiki-p-mb">
                            <p>The Malmer 7mm Magnum is a rifle that is useful for hunting many different classes of game.</p>
                            <p>This weapon is available as part of the Hunter Power Pack DLC.</p>
                        </div>

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
                            <p className="wiki-p-mb">The Malmer uses standard 7mm Magnum ammunition:</p>
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
                            <p className="wiki-p-mb">The following sights can be equipped on the Malmer 7mm Magnum:</p>
                            <ul className="wiki-ul">
                                {sightsData.map((sight, idx) => (
                                    <li key={idx} className="wiki-li"><a href="#" className="wiki-link">{sight}</a></li>
                                ))}
                            </ul>
                        </section>

                        <section id="analysis" className="pt-8">
                            <h2 className="wiki-h2">3. Analysis</h2>
                            <div className="wiki-p-mb">
                                <p>
                                    This is the second weapon in the game utilizing the 7mm Mag. ammunition, wich is known for its fantastic balance between power and versatility. With almost the same accuracy (aim wobble) and recoil as the <a href="#" className="wiki-link">7mm Regent Magnum</a>, as well as the same bullet trajectory, this rifle improves upon the basegame 7mm by including a 3 round magazine (compared to the single round the Regent Magnum could hold), wich also makes up for it´s significantly longer reload. It is also a bit lighter than the basegame rifle.
                                </p>
                                <p>
                                    If you like the 7mm Regent Magnum but wish you had more than one shot at a time, the Malmer 7mm Magnum from the Hunter Power Pack is the answer.
                                </p>
                            </div>
                        </section>

                        <section id="trivia" className="pt-8">
                            <h2 className="wiki-h2">4. Trivia</h2>
                            <p className="wiki-p-mb">The Malmer 7mm is based of its real-life counterpart of the Remington 700 SPS.</p>
                        </section>

                        <section id="gallery" className="pt-8">
                            <h2 className="wiki-h2">5. Gallery</h2>
                            <div className="wiki-uniform-grid">
                                {[
                                    { title: 'Standing', img: MalmerStanding },
                                    { title: 'Crouching', img: MalmerCrouching },
                                    { title: 'Lying', img: MalmerLying },
                                    { title: 'Iron sight', img: MalmerIronSight },
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
                                    <img
                                        src={RifleDiagram}
                                        alt="Rifle Diagram"
                                        style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '8px' }}
                                    />
                                </div>
                            </div>
                            <WeaponsTable activeItem="Malmer 7mm Magnum" />
                        </section>
                    </main>
                </div>

                <div className="h-32"></div>
            </div>
        </div>
    );
}