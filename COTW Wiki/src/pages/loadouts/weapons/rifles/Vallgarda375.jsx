import { useState } from 'react';
import '../../../../styles/wiki.css';
import WeaponsTable from '../../../../components/WeaponsTable';
import VallgardaImg from '../../../../assets/Vallgarda.375.webp';

const Vallgarda375 = () => {
    const [isTocOpen, setIsTocOpen] = useState(true);

    const scrollTo = (e, id) => {
        e.preventDefault();
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    const ammoData = [
        { name: '.375 Soft-Point Flat Nose', pen: 25, exp: 68, class: '7-9', range: '150m', price: 820 },
        { name: '.375 Solid Flat Nose', pen: 100, exp: 20, class: '7-9', range: '150m', price: 1080 },
    ];

    const sightsData = [
        'Ascent 1-4x24 Rifle Scope',
        'Hyperion 4-8x42 Rifle Scope',
        'Odin 4-12x33 Rifle Scope',
        'Argus 8-16x50 Rifle Scope',
        'GenZero 1-4x20 Night Vision Rifle Scope',
        'Angler 4-8x100 Night Vision Rifle Scope',
        'Red Raptor Reflex Sight',
        'Tru-Vision Tritium Sights',
    ];

    return (
        <div className="wiki-page">
            <div className="wiki-inner">
                <h1 className="wiki-header">Vallgarda .375</h1>

                <div className="wiki-layout">
                    <aside className="wiki-sidebar">
                        <div className="wiki-sidebar-header">Vallgarda .375</div>

                        <div className="wiki-sidebar-image wiki-sidebar-image--contain">
                            <img src={VallgardaImg} alt="Vallgarda .375" />
                        </div>

                        <div className="wiki-sidebar-header text-sm">General Information</div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Value</span>
                            <span>0</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Weight</span>
                            <span>4</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Score</span>
                            <span>0</span>
                        </div>

                        <div className="wiki-sidebar-header text-sm">Statistics</div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Accuracy</span>
                            <span>95</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Recoil</span>
                            <span>100</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Reload</span>
                            <span>45</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Hipshot</span>
                            <span>50</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Magazine</span>
                            <span>4</span>
                        </div>
                    </aside>

                    <main className="wiki-main">
                        <blockquote className="wiki-quote">
                            <p>"The VALLGARDA .375 will prove to be your ultimate companion when it comes to hunting large and dangerous game. This bolt action rifle provides impeccable accuracy with precision and power making it the ideal gun that you can't go without."</p>
                            <cite>— In-Game Description</cite>
                        </blockquote>

                        <div className="wiki-p-mb">
                            <p>The Vallgarda .375 is a rifle perfect for hunting large game.</p>
                            <p>This weapon is available as part of the Hunters' Choice: Bolt-Action Rifle Pack DLC.</p>
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
                                    <li><a href="#trivia" onClick={(e) => scrollTo(e, 'trivia')} className="wiki-link">4. Trivia</a></li>
                                </ul>
                            )}
                        </div>

                        <section id="ammo" className="pt-8">
                            <h2 className="wiki-h2">1. Ammo</h2>
                            <p className="wiki-p-mb">As with most rifles, two variants of its ammunition are available:</p>
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
                            <p className="wiki-p-mb">The following sights can be equipped on the Vallgarda .375:</p>
                            <ul className="wiki-ul">
                                {sightsData.map((sight, idx) => (
                                    <li key={idx} className="wiki-li">{sight}</li>
                                ))}
                            </ul>
                        </section>

                        <section id="analysis" className="pt-8">
                            <h2 className="wiki-h2">3. Analysis</h2>
                            <div className="wiki-p-mb">
                                <p>
                                    This is without a doubt the most powerful long-range rifle in the game, its characteristics when using polymer cartridges are unrivaled when hunting large game at up to 200 meters, and are at least equal to other 7-9 rifles beyond that. However, such power comes at the cost of a number of drawbacks:
                                </p>
                                <ul className="wiki-ul">
                                    <li className="wiki-li">this rifle has a huge recoil, the barrel swing is so great that player will probably not be able to make a quick second aimed shot at the animal in time,</li>
                                    <li className="wiki-li">a rather modest magazine of 4 rounds,</li>
                                    <li className="wiki-li">while its soft-point ammunition has great damage characteristics, the penetration of only 19 means they will be unreliable for hunting classes 7-9.</li>
                                </ul>
                            </div>
                        </section>

                        <section id="trivia" className="pt-8">
                            <h2 className="wiki-h2">4. Trivia</h2>
                            <p className="wiki-p-mb">The Vallgarda .375 is modeled after its real life counterpart of the Winchester Model 70 African.</p>
                        </section>
                    </main>
                </div>

                <WeaponsTable activeItem="Vallgarda .375" />
            </div>
        </div>
    );
};

export default Vallgarda375;