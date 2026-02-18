import React, { useState } from 'react';
import WeaponsTable from '../../../../components/WeaponsTable';
import MoradiImage from '../../../../assets/Moradi_Model_1894.webp';
import MoradiModelTriviaImage from '../../../../assets/Marlin_1895_T-rex.webp';
import '../../../../styles/wiki.css';

export default function MoradiModel1894() {
    const [isTocOpen, setIsTocOpen] = useState(true);

    const scrollTo = (e, id) => {
        e.preventDefault();
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

  // Data for Ammo Table
  const ammoData = [
    { name: ".44 Jacketed Hollow-Point", pen: 12, exp: 71, class: "3-8", range: "100m", price: 280 },
    { name: ".44 Flat Nose Hard-Cast", pen: 35, exp: 8, class: "3-8", range: "100m", price: 420 },
  ];

  // Data for Sights List
    const sightsData = [
        "Ascent 1-4x24 Rifle Scope",
        "Hyperion 4-8x42 Rifle Scope",
        "Odin 4-12x33 Rifle Scope",
        "Argus 8-16x50 Rifle Scope",
        "GenZero 1-4x20 Night Vision Rifle Scope",
        "Angler 4-8x100 Night Vision Rifle Scope",
        "Marksman Exakt Reflex Sight",
        "Red Raptor Reflex Sight",
        "Tru-Vision Tritium Sights"
    ];

    return (
        <div className="wiki-page">
            <div className="wiki-inner">
                <h1 className="wiki-header">Moradi Model 1894</h1>

                <div className="wiki-layout">
                    <aside className="wiki-sidebar">
                        <div className="wiki-sidebar-header">Moradi Model 1894</div>
                        <div className="wiki-sidebar-image wiki-sidebar-image--contain">
                            <img
                                src={MoradiImage}
                                alt="Moradi Model 1894"
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
                            <span>3.5</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Score</span>
                            <span>0</span>
                        </div>

                        <div className="wiki-sidebar-header" style={{ fontSize: '0.9rem' }}>Statistics</div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Accuracy</span>
                            <span>80</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Recoil</span>
                            <span>43</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Reload</span>
                            <span>57</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Hipshot</span>
                            <span>76</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Magazine</span>
                            <span>6</span>
                        </div>
                    </aside>

                    <main className="wiki-main">
                        <blockquote className="wiki-quote">
                            <p>".44 caliber lever action rifles were popular in the Old West, as they could share their ammunition with a revolver carried as a sidearm. The Moradi Model 1894 is a modern take on this concept, pairing the design of a timeless classic with the versatility of rail-mounted optics and the increased power of .44 Magnum cartridges."</p>
                            <cite>— In-Game Description</cite>
                        </blockquote>

                        <div className="wiki-p-mb">
                            <p>
                                The <strong>Moradi Model 1894</strong> is a lever-action rifle that was introduced in the Ambusher Pack DLC. The Moradi Model 1894 can use the same .44 Magnum ammunition as the <a href="#" className="wiki-link">.44 Panther Magnum</a>, making it a versatile and powerful weapon for hunting.
                            </p>
                            <p>
                                This weapon is available as part of the <a href="#" className="wiki-link">Ambusher Pack</a> DLC.
                            </p>
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
                                    <li><a href="#trivia" onClick={(e) => scrollTo(e, 'trivia')} className="wiki-link">3. Trivia</a></li>
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
                            <p className="wiki-p-mb">The following sights can be equipped on the Moradi Model 1894:</p>
                            <ul className="wiki-ul">
                                {sightsData.map((sight, idx) => (
                                    <li key={idx} className="wiki-li"><a href="#" className="wiki-link">{sight}</a></li>
                                ))}
                            </ul>
                        </section>

                        <section id="trivia" className="pt-8">
                            <h2 className="wiki-h2">3. Trivia</h2>
                            <div className="wiki-p-mb" style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                                <div style={{ flex: '1 1 320px' }}>
                                    <p>
                                        The Moradi Model 1894 is based on the Marlin Model 1894 SBL 44 Mag, a modernized version of the classic lever-action design.
                                    </p>
                                    <p>
                                        The 45-70 variant of this gun, the Marlin Model 1895 SBL, is famously used by Owen Grady (played by Chris Pratt) in Jurassic World. On the official Marlin website the gun is the only version rated for "T-Rex".
                                    </p>
                                </div>

                                <div style={{ flex: '0 0 200px', textAlign: 'center' }}>
                                    <div className="wiki-table-container" style={{ padding: '10px' }}>
                                        <img
                                            src={MoradiModelTriviaImage}
                                            alt="Moradi trivia"
                                            style={{ width: '200px', height: '133px', objectFit: 'contain', display: 'block' }}
                                        />
                                        <div style={{ fontSize: '12px', marginTop: '8px', opacity: 0.8 }}>
                                            The Marlin Website with the Marlin Model 1895 as "T-Rex rated"
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="pt-8">
                            <WeaponsTable activeItem="Moradi Model 1894" />
                        </section>
                    </main>
                </div>

                <div className="h-32"></div>
            </div>
        </div>
    );
}