import { useState } from 'react';
import WeaponsTable from '../../../../components/WeaponsTable';
import BearclawLiteCB60 from '../../../../assets/BearclawLiteCB60.webp';
import BearclawLiteCB60Standing from '../../../../assets/BearclawCB60Pose1.webp';
import BearclawLiteCB60StandingAimed from '../../../../assets/BearclawCB60Pose2.webp';
import BearclawLiteCB60Lying from '../../../../assets/BearclawCB60Pose3.webp';
import BearclawLiteCB60LyingAimed from '../../../../assets/BearclawCB60Pose4.webp';
import BowsDiagram from '../../../../assets/Bows.webp';
import '../../../../styles/wiki.css';

export default function App() {
    const [isTocOpen, setIsTocOpen] = useState(true);

    const ammoData = [
        { name: '300 gr. Small Game Point', pen: '10', exp: '0', class: '1-2', range: '20m', price: 530 },
        { name: '420 gr. Broadhead', pen: '50', exp: '0', class: '2-7', range: '20m', price: 700 },
        { name: '600 gr. Broadhead', pen: '90', exp: '0', class: '7-9', range: '20m', price: 880 },
    ];

    const sightsData = [
        'Brightsight Single-Pin Sight',
        'Swift-Mark 3 Bow Sight',
        'Swift-Mark 5 Bow Sight',
        'Brightsight Rangefinder Bow Sight',
    ];

    return (
        <div className="wiki-page">
            <div className="wiki-inner">
                <h1 className="wiki-header">Bearclaw Lite CB-60</h1>

                <div className="wiki-layout">
                    <aside className="wiki-sidebar">
                        <div className="wiki-sidebar-header">Bearclaw Lite CB-60</div>

                        <div className="wiki-sidebar-image wiki-sidebar-image--contain">
                            <img src={BearclawLiteCB60} alt="Bearclaw Lite CB-60" className="wiki-img-custom" />
                        </div>

                        <div className="wiki-sidebar-header" style={{ fontSize: '0.9rem' }}>General Information</div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Value</span>
                            <span>6000</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Weight</span>
                            <span>4</span>
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
                            <span>10</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Reload</span>
                            <span>100</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Hipshot</span>
                            <span>14</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Magazine</span>
                            <span>1</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Draw Weight</span>
                            <span>60 lb</span>
                        </div>
                    </aside>

                    <main className="wiki-main">
                        <blockquote className="wiki-quote">
                            <p>"This bow may look similar to the Razorback, but don't let that fool you. Besides sporting an attractive camo, it also comes with pre-installed stabilizer attachment. This allows for more accurate shots when aiming, but be sure to bring a large backpack, as it also makes it a bit more cumbersome to carry. Suitable for small and medium-sized game."</p>
                            <cite>— In-Game Description</cite>
                        </blockquote>

                        <div className="wiki-p-mb">
                            <p>
                                The Bearclaw Lite CB-60 is an upgraded version of the Razorback Lite CB-60. Thanks to its stabilizer, it has a higher aimed accuracy at the cost of a lower hipshot accuracy. This higher accuracy extends the usable range to around 60m. While structurally identical to the Razorback, the black powder coat paint has been replaced with a yellow-brown foliage pattern.
                            </p>
                            <p>This weapon is available as part of the Bearclaw Lite Compound Bow DLC.</p>
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
                                    <li className="wiki-li"><a href="#ammo" className="wiki-link">1. Arrows</a></li>
                                    <li className="wiki-li"><a href="#sights" className="wiki-link">2. Sights</a></li>
                                    <li className="wiki-li" style={{ marginLeft: 16 }}><a href="#notes" className="wiki-link">2.1 Notes</a></li>
                                    <li className="wiki-li"><a href="#gallery" className="wiki-link">3. Gallery</a></li>
                                    <li className="wiki-li"><a href="#comparison" className="wiki-link">4. Comparison to other bows</a></li>
                                </ul>
                            )}
                        </div>

                        <section id="ammo" className="pt-8">
                            <h2 className="wiki-h2">1. Arrows</h2>
                            <p className="wiki-p-mb">Like all bows, it can use 3 different weights of arrow:</p>
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
                            <p className="wiki-p-mb">The following sights can be equipped on the Bearclaw Lite CB-60:</p>
                            <ul className="wiki-ul">
                                {sightsData.map((sight, idx) => (
                                    <li key={idx} className="wiki-li"><a href="#" className="wiki-link">{sight}</a></li>
                                ))}
                            </ul>
                        </section>

                        <section id="notes" className="pt-8">
                            <h2 className="wiki-h2">2.1 Notes</h2>
                            <p className="wiki-p-mb">Aiming while prone can only be done with the Like a Pro archery perk.</p>
                        </section>

                        <section id="gallery" className="pt-8">
                            <h2 className="wiki-h2">3. Gallery</h2>
                            <div className="wiki-gallery-grid">
                                {[
                                    { title: 'Standing', img: BearclawLiteCB60Standing },
                                    { title: 'Standing Aimed', img: BearclawLiteCB60StandingAimed },
                                    { title: 'Lying', img: BearclawLiteCB60Lying },
                                    { title: 'Lying Aimed (1)', img: BearclawLiteCB60LyingAimed },
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
                            <h2 className="wiki-h2">4. Comparison to other bows</h2>
                            <div className="wiki-p-mb">
                                <img src={BowsDiagram} alt="Bow Comparison Chart" style={{ width: 400, height: 200, objectFit: 'contain', maxWidth: '100%' }} />
                            </div>
                        </section>

                        <WeaponsTable />
                    </main>
                </div>
            </div>
        </div>
    );
}