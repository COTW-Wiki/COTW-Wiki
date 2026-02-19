import React, { useState } from 'react';
import '../../../../styles/wiki.css';
import WeaponsTable from '../../../../components/WeaponsTable';
import Gopi10GGrand from '../../../../assets/Gopi10GGrand.webp';

// --- Main App Component ---
export default function App() {
  const [isTocOpen, setIsTocOpen] = useState(true);

    const scrollTo = (e, id) => {
        e.preventDefault();
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

  // Image URLs
  const GopiImg = Gopi10GGrand;
  const RifleDiagram = "https://static.wikia.nocookie.net/thehuntercotw/images/0/07/Rifle_Comparison_Chart.png"; // Placeholder for shotgun comparison
  
  // Using the main image as a placeholder for gallery items
  const GopiStanding = GopiImg;
  const GopiCrouching = GopiImg;
  const GopiLying = GopiImg;
  const GopiIronSight = GopiImg;

  // Data for Ammo Table
  const ammoData = [
    { name: "10 GA Plastic Birdshot", pen: "0", exp: "0", class: "1-2", range: "25m", price: 200 },
    { name: "10 GA Plastic Buckshot", pen: "5", exp: "0", class: "4-7", range: "25m", price: 600 },
    { name: "10 GA Plastic Slug", pen: "45", exp: "22", class: "6-9", range: "50m", price: 950 },
  ];

  // Data for Sights List
  const sightsData = [
    "Meridian 1-4x20 Shotgun Scope",
    "Hermes 3-7x33 Handgun-Shotgun Scope",
    "Red Raptor Reflex Sight"
  ];

    return (
        <div className="wiki-page">
            <div className="wiki-inner">
                <h1 className="wiki-header">Gopi 10G Grand</h1>

                <div className="wiki-layout">
                    <aside className="wiki-sidebar">
                        <div className="wiki-sidebar-header">Gopi 10G Grand</div>

                        <div className="wiki-sidebar-image wiki-sidebar-image--contain">
                            <img src={GopiImg} alt="Gopi 10G Grand" />
                        </div>

                        <div className="wiki-sidebar-header text-sm">General Information</div>
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

                        <div className="wiki-sidebar-header text-sm">Statistics</div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Accuracy</span>
                            <span>36</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Recoil</span>
                            <span>82</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Reload</span>
                            <span>50</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Hipshot</span>
                            <span>92</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Magazine</span>
                            <span>2</span>
                        </div>
                    </aside>

                    <main className="wiki-main">
                        <blockquote className="wiki-quote">
                            <p>"The GOPI 10G GRAND is a powerful and versatile 10GA over under shotgun which is perfect for upland hunting. Designed with a sleek and lightweight frame, this shotgun gives high accuracy shots with a tight pattern that hits its target on every shot. Be it hunting or sports shooting, this gun is the one for all!"</p>
                            <cite>— In-Game Description</cite>
                        </blockquote>

                        <div className="wiki-p-mb">
                            <p>
                                The <strong>Gopi 10G Grand</strong> is a shotgun perfect for hunting small game. This weapon is available as part of the <a href="#" className="wiki-link">Salzwiesen Park</a> DLC.
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
                                    <li><a href="#ammo" onClick={(e) => scrollTo(e, 'ammo')} className="wiki-link">1. Ammo</a></li>
                                    <li><a href="#sights" onClick={(e) => scrollTo(e, 'sights')} className="wiki-link">2. Sights</a></li>
                                    <li><a href="#analysis" onClick={(e) => scrollTo(e, 'analysis')} className="wiki-link">3. Analysis</a></li>
                                </ul>
                            )}
                        </div>

                        <section id="ammo" className="pt-8">
                            <h2 className="wiki-h2">1. Ammo</h2>
                            <p className="wiki-p-mb">As with most shotguns, three variants of its ammunition are available:</p>

                            <div className="wiki-table-container">
                                <table className="wiki-table">
                                    <thead>
                                        <tr>
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
                            <p className="wiki-p-mb">The following sights can be equipped on the Gopi 10G Grand:</p>
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
                                    Like all shotguns, it has a common drawback – it is intended strictly for point-blank shooting, i.e. it is used mainly in ambush. It is heavy, without magazine, with high recoil. But it does have one advantage – an excellent hipshot, i.e. this gun shoots much more accurately WITHOUT aiming than with it.
                                </p>
                            </div>
                        </section>

                        <div className="pt-8">
                            <WeaponsTable />
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}