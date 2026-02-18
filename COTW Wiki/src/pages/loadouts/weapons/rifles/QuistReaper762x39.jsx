import React, { useState } from 'react';
import QuistReaperImg from '../../../../assets/Quist_Reaper_7.62x39.webp';
import WeaponsTable from '../../../../components/WeaponsTable';
import '../../../../styles/wiki.css';

// --- Main App Component ---
export default function QuistReaper762x39() {
  const [isTocOpen, setIsTocOpen] = useState(true);

    const scrollTo = (e, id) => {
        e.preventDefault();
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

  // Image URLs
  const QuistImg = "https://static.wikia.nocookie.net/thehuntercotw/images/f/f8/Rifle_Quist_Reaper_7.62x39.png";
  const RifleDiagram = "https://static.wikia.nocookie.net/thehuntercotw/images/0/07/Rifle_Comparison_Chart.png";

  // Data for Ammo Table
  const ammoData = [
    { name: "7.62x39 Soft-Point", pen: 18, exp: 56, class: "2-6", range: "150m", price: 590 },
    { name: "7.62x39 Polymer-Tip", pen: 42, exp: 12, class: "2-6", range: "150m", price: 850 },
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
                <h1 className="wiki-header">Quist Reaper 7.62x39</h1>

                <div className="wiki-layout">
                    <aside className="wiki-sidebar">
                        <div className="wiki-sidebar-header">Quist Reaper 7.62x39</div>
                        <div className="wiki-sidebar-image wiki-sidebar-image--contain">
                            <img
                                src={QuistReaperImg}
                                alt="Quist Reaper 7.62x39"
                                style={{ width: '268.4px', height: '134.2px' }}
                                onError={(e) => {
                                    e.currentTarget.src = QuistReaperImg;
                                }}
                            />
                        </div>

                        <div className="wiki-sidebar-header" style={{ fontSize: '0.9rem' }}>General Information</div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Value</span>
                            <span>75000</span>
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
                            <span>85</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Recoil</span>
                            <span>43</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Reload</span>
                            <span>60</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Hipshot</span>
                            <span>55</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Magazine</span>
                            <span>5</span>
                        </div>
                    </aside>

                    <main className="wiki-main">
                        <blockquote className="wiki-quote">
                            <p>"With the force of 7.62x39mm rounds and the precision hunters crave, QUIST REAPER 7.62X39 stands as a timeless choice for hunters. Known for its ease of use, it's a perfect rifle for small to medium game."</p>
                            <cite>― In-Game Description</cite>
                        </blockquote>

                        <div className="wiki-p-mb">
                            <p>The <strong>Quist Reaper 7.62x39</strong> is a rifle meant for hunting small and medium game.</p>
                            <p>In Real Life it is a Soviet era SKS Rifle and will be reloaded using a stripper clip if no sights are mounted on the gun. If a player chooses to run a scope on the gun they will load one cartridge at a time.</p>
                            <p>This weapon is available as part of the Rapid Hunt Rifle Pack DLC.</p>
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
                                </ul>
                            )}
                        </div>

                        <section id="ammo" className="pt-8">
                            <h2 className="wiki-h2">1. Ammo</h2>
                            <p className="wiki-p-mb">The Quist Reaper 7.62x39 uses standard 7.62x39mm ammunition:</p>
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
                            <p className="wiki-p-mb">The following sights can be equipped on the Quist Reaper 7.62x39:</p>
                            <ul className="wiki-ul">
                                {sightsData.map((sight, idx) => (
                                    <li key={idx} className="wiki-li"><a href="#" className="wiki-link">{sight}</a></li>
                                ))}
                            </ul>
                        </section>

                        <section id="analysis" className="pt-8">
                            <h2 className="wiki-h2">3. Analysis</h2>
                            <p className="wiki-p-mb">Coming soon...</p>
                        </section>

                        <section id="trivia" className="pt-8">
                            <h2 className="wiki-h2">4. Trivia</h2>
                            <p className="wiki-p-mb">The weapon is based on the soviet SKS semiautomatic military rifle.</p>
                        </section>

                        <section className="pt-8">
                            <WeaponsTable />
                        </section>
                    </main>
                </div>

                <div className="h-32"></div>
            </div>
        </div>
    );
}