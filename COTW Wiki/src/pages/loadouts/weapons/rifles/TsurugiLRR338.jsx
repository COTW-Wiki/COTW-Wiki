import React, { useState } from 'react';
import WeaponsTable from '../../../../components/WeaponsTable';
import TsurugiImg from '../../../../assets/TsurugiLRR338.webp';
import RifleDiagram from '../../../../assets/Rifle_diagram_2020.webp';
import TsurugiStanding from '../../../../assets/TsurugiLRR338Standing.webp';
import TsurugiCrouching from '../../../../assets/TsurugiLRR338Crouching.webp';
import TsurugiLying from '../../../../assets/TsurugiLRR338Lying.webp';
import TsurugiIronSight from '../../../../assets/TsurugiLRR338IronSight.webp';
import '../../../../styles/wiki.css';

export default function TsurugiLRR338() {
  const [isTocOpen, setIsTocOpen] = useState(true);

    const scrollTo = (e, id) => {
        e.preventDefault();
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

  // Data for Ammo Table
  const ammoData = [
    { name: ".338 Mag. Soft-Point", pen: 22, exp: 68, class: "7-9", range: "150m", price: 790 },
    { name: ".338 Mag. Polymer-Tip", pen: 45, exp: 16, class: "7-9", range: "150m", price: 1050 },
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
                <h1 className="wiki-header">Tsurugi LRR .338</h1>

                <div className="wiki-layout">
                    <aside className="wiki-sidebar">
                        <div className="wiki-sidebar-header">Tsurugi LRR .338</div>
                        <div className="wiki-sidebar-image wiki-sidebar-image--contain">
                            <img
                                src={TsurugiImg}
                                alt="Tsurugi LRR .338"
                                style={{ width: '268.4px', height: '134.2px' }}
                            />
                        </div>

                        <div className="wiki-sidebar-header" style={{ fontSize: '0.9rem' }}>General Information</div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Value</span>
                            <span>0</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Weight</span>
                            <span>5</span>
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
                            <span>100</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Reload</span>
                            <span>49</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Hipshot</span>
                            <span>12</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Magazine</span>
                            <span>5</span>
                        </div>
                    </aside>

                    <main className="wiki-main">
                        <blockquote className="wiki-quote">
                            <p>"One of the most revered long-range rifles out there. The Tsurugi LRR chambered in .338 packs a punch while still providing high precision. Made with durable, high-quality materials throughout to never compromise performance even in the roughest conditions. The 5-round-capacity detachable magazine combined with the smooth, reliable bolt-action ensures you can get that follow-up shot, should you ever require it."</p>
                            <cite>— In-Game Description</cite>
                        </blockquote>

                        <div className="wiki-p-mb">
                            <p>The Tsurugi LRR .338 is a powerful rifle chambered in .338 Magnum.</p>
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
                                    <li><a href="#analysis" onClick={(e) => scrollTo(e, 'analysis')} className="wiki-link">4. Analysis</a></li>
                                    <li><a href="#trivia" onClick={(e) => scrollTo(e, 'trivia')} className="wiki-link">5. Trivia</a></li>
                                    <li><a href="#gallery" onClick={(e) => scrollTo(e, 'gallery')} className="wiki-link">6. Gallery</a></li>
                                    <li><a href="#comparison" onClick={(e) => scrollTo(e, 'comparison')} className="wiki-link">7. Comparison to other rifles</a></li>
                                </ul>
                            )}
                        </div>

                        <section id="ammo" className="pt-8">
                            <h2 className="wiki-h2">1. Ammo</h2>
                            <p className="wiki-p-mb">As with most rifles, two variants of its ammunition are available:</p>
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
                            <p className="wiki-p-mb">The following sights can be equipped on the Tsurugi LRR .338:</p>
                            <ul className="wiki-ul">
                                {sightsData.map((sight, idx) => (
                                    <li key={idx} className="wiki-li"><a href="#" className="wiki-link">{sight}</a></li>
                                ))}
                            </ul>
                        </section>

                        <section id="analysis" className="pt-8">
                            <h2 className="wiki-h2">4. Analysis</h2>
                            <div className="wiki-p-mb">
                                <p>
                                    With an identical recoil and slightly better accuracy (slightly less aim wobble), the Tsurugi improves upon the powerful <a href="#" className="wiki-link">Rangemaster 338</a> by including a 5 round magazine, allowing for potential followup shots. The ability to quickly chamber another round also compensates for the Tsurugis only drawback compared to the basegame rifle: It´s long reload. Apart from that, both rifles are rather heavy, weighing in at 5 weight units. But if you are going after big game you cant go wrong with the .338 (both basegame and DLC), as it´s one of the most powerful big game rifles in COTW.
                                </p>
                                <p>If you like the Rangemaster 338 but wish you had more rounds in the magazine, the Tsurugi LRR .338 from the Hunter Power Pack is the answer.</p>
                            </div>
                        </section>

                        <section id="trivia" className="pt-8">
                            <h2 className="wiki-h2">5. Trivia</h2>
                            <p className="wiki-p-mb">The Tsurugi LRR is modeled after its real-life counterpart of the SAKO TRG-42.</p>
                        </section>

                        <section id="gallery" className="pt-8">
                            <h2 className="wiki-h2">6. Gallery</h2>
                            <div className="wiki-uniform-grid">
                                {[
                                    { title: 'Standing', img: TsurugiStanding },
                                    { title: 'Crouching', img: TsurugiCrouching },
                                    { title: 'Lying', img: TsurugiLying },
                                    { title: 'Iron sight', img: TsurugiIronSight },
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
                            <h2 className="wiki-h2">7. Comparison to other rifles</h2>
                            <div className="wiki-table-container wiki-p-mb">
                                <div style={{ backgroundColor: 'var(--wiki-bg-sidebar)', padding: '20px' }}>
                                    <img
                                        src={RifleDiagram}
                                        alt="Tsurugi LRR .338 Diagram"
                                        style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '8px' }}
                                    />
                                </div>
                            </div>

                            <WeaponsTable activeItem="Tsurugi LRR .338" />
                        </section>
                    </main>
                </div>

                <div className="h-32"></div>
            </div>
        </div>
    );
}