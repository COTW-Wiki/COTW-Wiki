import React, { useState } from 'react';
import '../../../../styles/wiki.css';
import CacciatoreStandingImg from '../../../../assets/Cacciatore_pose_1.webp';
import CacciatoreCrouchImg from '../../../../assets/Cacciatore_pose_2.webp';
import CacciatoreLyingImg from '../../../../assets/Cacciatore_pose_3.webp';
import CacciatoreIronImg from '../../../../assets/Cacciatore_ironsight.webp';
import CacciatoreChart from '../../../../assets/Shotgun_diagram_2020.webp';
import CacciatoreImg from '../../../../assets/Cacciatore12G.webp';
import WeaponsTable from '../../../../components/WeaponsTable';

// --- Main App Component ---
export default function App() {
    const [isTocOpen, setIsTocOpen] = useState(true);

    const scrollTo = (e, id) => {
        e.preventDefault();
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    // Use imported assets
    const RifleDiagram = CacciatoreChart; // comparison chart

    // Using the imported images for gallery items
    const CacciatoreStanding = CacciatoreStandingImg;
    const CacciatoreCrouching = CacciatoreCrouchImg;
    const CacciatoreLying = CacciatoreLyingImg;
    const CacciatoreIronSight = CacciatoreIronImg;

  // Data for Ammo Table
  const ammoData = [
    { name: "12 Gauge Birdshot", pen: 0, exp: 0, class: "1", range: "25m", price: 180 },
    { name: "12 Gauge Buckshot", pen: 5, exp: 0, class: "2-5", range: "25m", price: 530 },
    { name: "12 Gauge Slug", pen: 40, exp: 19, class: "4-8", range: "50m", price: 880 },
  ];

  // Data for Sights List
  const sightsData = [
    "Red Raptor Reflex Sight",
    "Meridian 1-4x20 Shotgun Scope"
  ];

    return (
        <div className="wiki-page">
            <div className="wiki-inner">
                {/* Header Section */}
                <h1 className="wiki-header">
                    Cacciatore 12G
                </h1>

                {/* Main Content Layout */}
                <div className="wiki-layout">

                    {/* Sidebar */}
                    <aside className="wiki-sidebar">
                        <div className="wiki-sidebar-header">
                            Cacciatore 12G
                        </div>

                        {/* Image Area */}
                        <div className="wiki-sidebar-image wiki-sidebar-image--contain">
                            <img
                                src={CacciatoreImg}
                                alt="Cacciatore 12G"
                                onError={(e) => { e.target.src = CacciatoreImg; }}
                            />
                        </div>

                        {/* General Information Header */}
                        <div className="wiki-sidebar-header text-sm">
                            General Information
                        </div>

                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Value</span>
                            <span>6000</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Weight</span>
                            <span>3.5</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Score</span>
                            <span>2200</span>
                        </div>

                        {/* Statistics Header */}
                        <div className="wiki-sidebar-header text-sm">
                            Statistics
                        </div>

                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Accuracy</span>
                            <span>33</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Recoil</span>
                            <span>82</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Reload</span>
                            <span>29</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Hipshot</span>
                            <span>88</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Magazine</span>
                            <span>6</span>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <main className="wiki-main">

            {/* Intro Quote */}
            <blockquote className="wiki-quote">
                <p className="mb-2">"This chrome-barreled 12 gauge pump-action shotgun, with classic walnut stock and forearm, can be used for almost any species; just make sure you've got the right ammo for the job. Powerful at close range, making it the perfect weapon for those who think they've got stalking down to a fine art."</p>
                <cite>— In-Game Description</cite>
            </blockquote>

            {/* Main Description */}
            <div className="wiki-p-mb">
                <p>
                    The <strong>Cacciatore 12G</strong> is a classic pump-action shotgun. The 6 shell capacity allows you to get multiple shots in rapid succession for hunting birds, or when you stumble onto a group of deer. Thanks to the various shell types, this shotgun can be a great backup option in almost any condition.
                </p>
            </div>

            {/* Table of Contents */}
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
                        <li><a href="#analysis" onClick={(e) => scrollTo(e, 'analysis')} className="wiki-link">4. Analysis</a></li>
                        <li><a href="#trivia" onClick={(e) => scrollTo(e, 'trivia')} className="wiki-link">5. Trivia</a></li>
                        <li><a href="#gallery" onClick={(e) => scrollTo(e, 'gallery')} className="wiki-link">6. Gallery</a></li>
                        <li><a href="#comparison" onClick={(e) => scrollTo(e, 'comparison')} className="wiki-link">7. Comparison to other shotguns</a></li>
                    </ul>
                )}
            </div>

            {/* Ammo Section */}
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

            {/* Sights Section */}
            <section id="sights" className="pt-8">
                <h2 className="wiki-h2">2. Sights</h2>
                <p className="wiki-p-mb">The following sights can be equipped on the Cacciatore 12G:</p>
                <ul className="wiki-ul">
                    {sightsData.map((sight, idx) => (
                        <li key={idx} className="wiki-li"><a href="#" className="wiki-link">{sight}</a></li>
                    ))}
                </ul>
            </section>

                {/* Variants section removed per request */}

                <section id="analysis" className="pt-8">
                    <h2 className="wiki-h2">4. Analysis</h2>
                    <div className="wiki-p-mb">
                        <p>A better version of Couso Model 1897 but requires points to be obtained.</p>
                        <p className="mt-4">Good for short range bird hunting. Buckshot, as in all cases in this game, is ineffective, has a ridiculously low penetration and range, which leads to misses and ruined trophies. Shooting slugs is not very effective since rifles have a much longer range.</p>
                    </div>
                </section>

                <section id="trivia" className="pt-8">
                    <h2 className="wiki-h2">5. Trivia</h2>
                    <p className="wiki-p-mb">The Cacciatore 12G is modeled after its real-life counterpart of the Remington 870.</p>
                </section>

                <section id="gallery" className="pt-8">
                    <h2 className="wiki-h2">6. Gallery</h2>
                    <div className="wiki-gallery-grid">
                        {[
                            { title: 'Standing', img: CacciatoreStanding },
                            { title: 'Crouching', img: CacciatoreCrouching },
                            { title: 'Lying', img: CacciatoreLying },
                            { title: 'Iron sight', img: CacciatoreIronSight },
                        ].map((item, idx) => (
                            <div key={idx} className="wiki-gallery-item">
                                <div className="wiki-gallery-placeholder">
                                    <img src={item.img} alt={item.title} />
                                </div>
                                <span className="wiki-gallery-label">{item.title}</span>
                            </div>
                        ))}
                    </div>
                </section>

                <section id="comparison" className="pt-8">
                    <h2 className="wiki-h2">7. Comparison to other shotguns</h2>
                    <div className="wiki-table-container wiki-p-mb">
                        <div style={{ backgroundColor: 'var(--wiki-bg-sidebar)', padding: '20px' }}>
                            <img
                                src={RifleDiagram}
                                alt="Shotgun Comparison Chart"
                                style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '8px' }}
                            />
                        </div>
                    </div>
                    <WeaponsTable />
                </section>

                    </main>
                </div>
            </div>
        </div>
  );
}