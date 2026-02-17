import React, { useState } from 'react';
import WeaponsTable from '../../../../components/WeaponsTable';
import CurmanInlineImage from '../../../../assets/Curman_.50_Inline.webp';
import '../../../../styles/wiki.css';

export default function App() {
    const [isTocOpen, setIsTocOpen] = useState(true);

    const scrollTo = (e, id) => {
        e.preventDefault();
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };


  // Data for Ammo Table
  const ammoData = [
    { name: ".50 Hollow-Point Sabot", pen: 20, exp: 60, class: "4-8", range: "200m", price: 450 },
    { name: ".50 Polymer-Tip Sabot", pen: 42, exp: 20, class: "4-8", range: "200m", price: 500 },
  ];

  // Data for Sights List
  const sightsData = [
    "Ascent 1-4x24 Rifle Scope",
    "Hyperion 4-8x42 Rifle Scope",
    "Odin 4-12x33 Rifle Scope",
    "Argus 8-16x50 Rifle Scope",
    "GenZero 1-4x20 Night Vision Rifle Scope",
    "Angler 4-8x100 Night Vision Rifle Scope"
  ];

  return (
        <div className="wiki-page">
            <div className="wiki-inner">
                <h1 className="wiki-header">Curman .50 Inline</h1>

                <div className="wiki-layout">
                    <aside className="wiki-sidebar">
                        <div className="wiki-sidebar-header">Curman .50 Inline</div>
                        <div className="wiki-sidebar-image wiki-sidebar-image--contain" style={{ backgroundColor: 'var(--wiki-bg-sidebar)' }}>
                            <img src={CurmanInlineImage} alt="Curman .50 Inline" />
                        </div>

                        <div className="wiki-sidebar-header" style={{ fontSize: '0.9rem' }}>General Information</div>
                        <div className="wiki-sidebar-section"><span className="wiki-sidebar-label">Value</span><span className="wiki-link">0</span></div>
                        <div className="wiki-sidebar-section"><span className="wiki-sidebar-label">Weight</span>4</div>
                        <div className="wiki-sidebar-section"><span className="wiki-sidebar-label">Score</span>0</div>

                        <div className="wiki-sidebar-header" style={{ fontSize: '0.9rem' }}>Statistics</div>
                        <div className="wiki-sidebar-section"><span className="wiki-sidebar-label">Accuracy</span>30</div>
                        <div className="wiki-sidebar-section"><span className="wiki-sidebar-label">Recoil</span>70</div>
                        <div className="wiki-sidebar-section"><span className="wiki-sidebar-label">Reload</span>5</div>
                        <div className="wiki-sidebar-section"><span className="wiki-sidebar-label">Hipshot</span>15</div>
                        <div className="wiki-sidebar-section"><span className="wiki-sidebar-label">Magazine</span>1</div>
                    </aside>

                    <main className="wiki-main">
                        <div className="wiki-p-mb">
                            <p>
                                The <strong>Curman .50 Inline</strong> is a traditional muzzleloading rifle. It has serious limitations imposed by its single-shot operation and very slow reload speed, but offers significant power and range for a muzzleloader.
                            </p>
                            <p className="mt-4">
                                This weapon is available as part of the <a href="#" className="wiki-link">New England Mountains</a> DLC.
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
                            <p className="wiki-p-mb">2 variants of its ammunition and 6 scopes are available:</p>
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
                            <p className="wiki-p-mb">The following sights can be equipped on the Curman .50 Inline:</p>
                            <ul className="wiki-ul">
                                {sightsData.map((sight, idx) => (
                                    <li key={idx} className="wiki-li"><a href="#" className="wiki-link">{sight}</a></li>
                                ))}
                            </ul>
                        </section>

                        <section id="trivia" className="pt-8">
                            <h2 className="wiki-h2">3. Trivia</h2>
                            <p className="wiki-p-mb">
                                The Curman Inline is based of its real-life counterpart of the Woodman Arms "Patriot".
                            </p>
                        </section>

                        <div className="mt-8">
                            <WeaponsTable activeItem="Curman .50 Inline" />
                        </div>
                    </main>
                </div>

                <div className="h-32"></div>
            </div>
        </div>
  );
}