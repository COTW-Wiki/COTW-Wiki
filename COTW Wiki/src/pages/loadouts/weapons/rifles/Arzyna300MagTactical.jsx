import React, { useState } from 'react';
import WeaponsTable from '../../../../components/WeaponsTable';
import ArzynaImage from '../../../../assets/Arzyna.300MagTactical.webp';
import '../../../../styles/wiki.css';

export default function App() {
    const [isTocOpen, setIsTocOpen] = useState(true);
    const mainImage = "https://static.wikia.nocookie.net/thehuntercotw/images/a/a8/Rifle_Arzyna_300_Mag.png";

    const scrollTo = (e, id) => {
        e.preventDefault();
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    // Variants removed — use single main image

  // Data for Ammo Table
  const ammoData = [
    { name: ".300 Magnum Soft-Point", pen: 21, exp: 60, class: "7-9", range: "150m", price: 720 },
    { name: ".300 Magnum Polymer-Tip", pen: 42, exp: 14, class: "7-9", range: "150m", price: 950 },
  ];

  // Data for Sights List
  const sightsData = [
    "Ascent 1-4x24 Rifle Scope",
    "Hyperion 4-8x42 Rifle Scope",
    "Odin 4-12x33 Rifle Scope",
    "Argus 8-16x50 Rifle Scope",
    "GenZero 1-4x20 Night Vision Rifle Scope",
    "Angler 4-8x100 Night Vision Rifle Scope",
    "Red Raptor Reflex Sight"
  ];

    return (
        <div className="wiki-page">
            <div className="wiki-inner">
                <h1 className="wiki-header">Arzyna .300 Mag Tactical</h1>

                <div className="wiki-layout">
                    <aside className="wiki-sidebar">
                        <div className="wiki-sidebar-header">Arzyna .300 Mag Tactical</div>
                        <div className="wiki-sidebar-image wiki-sidebar-image--contain" style={{ backgroundColor: 'var(--wiki-bg-sidebar)' }}>
                            <img
                                src={ArzynaImage}
                                alt="Arzyna .300 Mag Tactical"
                                onError={(e) => { e.target.src = mainImage; }}
                            />
                        </div>

                        <div className="wiki-sidebar-header" style={{ fontSize: '0.9rem' }}>General Information</div>
                        <div className="wiki-sidebar-section"><span className="wiki-sidebar-label">Value</span><span className="wiki-link">0</span></div>
                        <div className="wiki-sidebar-section"><span className="wiki-sidebar-label">Weight</span>4.0</div>
                        <div className="wiki-sidebar-section"><span className="wiki-sidebar-label">Score</span>0</div>

                        <div className="wiki-sidebar-header" style={{ fontSize: '0.9rem' }}>Statistics</div>
                        <div className="wiki-sidebar-section"><span className="wiki-sidebar-label">Accuracy</span>90</div>
                        <div className="wiki-sidebar-section"><span className="wiki-sidebar-label">Recoil</span>75</div>
                        <div className="wiki-sidebar-section"><span className="wiki-sidebar-label">Reload</span>59</div>
                        <div className="wiki-sidebar-section"><span className="wiki-sidebar-label">Hipshot</span>50</div>
                        <div className="wiki-sidebar-section"><span className="wiki-sidebar-label">Magazine</span>5</div>
                    </aside>

                    <main className="wiki-main">
                        <blockquote className="wiki-quote">
                            <p>"The ARZYNA 300 MAG TACTICAL provides an unparalleled experience, with performance designed for both the hunter and marksman. Combining the adaptability of the AR platform with the long-range power of the .300 Magnum, this rifle sets a precedent for hunting and precision shooting."</p>
                            <cite>— In-Game Description</cite>
                        </blockquote>

                        <div className="wiki-p-mb">
                            <p>
                                The <strong>Arzyna .300 Mag Tactical</strong> is a rifle perfect for hunting large game.
                            </p>
                            <p className="mt-4">
                                This weapon is available as part of the <a href="#" className="wiki-link">High Caliber Weapon Pack</a> DLC.
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
                                    <li><a href="#analysis" onClick={(e) => scrollTo(e, 'analysis')} className="wiki-link">3. Analysis</a></li>
                                </ul>
                            )}
                        </div>

                        <section id="ammo" className="pt-8">
                            <h2 className="wiki-h2">1. Ammo</h2>
                            <p className="wiki-p-mb">The Arzyna uses the standard .300 Magnum ammunition:</p>
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
                            <p className="wiki-p-mb">The following sights can be equipped on the Arzyna .300 Mag Tactical:</p>
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
                                    This is, overall, a better analogue of the already impressive <a href="#" className="wiki-link">.300 Canning Magnum</a> from the Yukon Valley Nature Reserve. Both rifles use the same ammunition (giving full integrity on animal classes 7-9), but the Arzyna has a number of advantages: it does not cost in-game money, has no restrictions on player score, has better accuracy (which stands for the intensity of the aim wobble, not the actual accuracy of a weapon), recoil, reload, and a magazine size of 5 rounds (compared to the 4 round magazine of the .300 Canning).
                                </p>
                                <p className="mb-4">
                                    While the Arzyna .300 definitely does not make the original .300 Canning obsolete, it is one of the best choices among class 7-9 rifles thanks to its many improvements (especially the faster fire rate and much lower recoil).
                                </p>
                                <p className="mb-4">
                                    It is worth noting that later another rifle <a href="#" className="wiki-link">Vallgarda .375</a> was released, which can be considered an analogue and which has even higher destructive characteristics, but pays for this with some inconveniences.
                                </p>
                                <p>
                                    This weapon's significantly low recoil and superb long range shooting capabilities paired with its 5 shot magazine makes the Arzyna .300 Mag Tactical a great choice when grinding, shooting large game animals or securing a quick kill. It is good to note that this weapon's superb penetration allows for a smooth kill and when paired with the Zeroing perk increases its versatility. (polymer tips are optimal for best rifle performance)
                                </p>
                            </div>
                        </section>

                        <div className="mt-8">
                            <WeaponsTable activeItem={"Arzyna .300 Mag Tactical"} />
                        </div>
                    </main>
                </div>

                <div className="h-32"></div>
            </div>
        </div>
  );
}