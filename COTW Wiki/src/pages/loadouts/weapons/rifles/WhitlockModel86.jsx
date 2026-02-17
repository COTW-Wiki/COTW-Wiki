import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import WhitlockModel86Image from '../../../../assets/WhitlockModel86.webp';
import RifleDiagram from '../../../../assets/Rifle_diagram_2020.webp';
import WhitlockModel86Standing from '../../../../assets/Whitlock_pose_1.webp';
import WhitlockModel86Crouching from '../../../../assets/Whitlock_pose_2.webp';
import WhitlockModel86Prone from '../../../../assets/Whitlock_pose_3.webp';
import WhitlockModel86Ironsight from '../../../../assets/Whitlock_ironsight.webp';
import WeaponsTable from '../../../../components/WeaponsTable';
import '../../../../styles/wiki.css';

export default function App() {
  const [isTocOpen, setIsTocOpen] = useState(true);

    const scrollTo = (e, id) => {
        e.preventDefault();
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

  // Data for Ammo Table
  const ammoData = [
    { name: ".30-30 Hollow-Point", pen: 17, exp: 17, class: "2-6", range: "75m", price: 480 },
    { name: ".30-30 Soft-Point Round Nose", pen: 35, exp: 4, class: "2-6", range: "75m", price: 220 },
  ];

  // Data for Sights List
  const sightsData = [
    "Helios 4-8x32 Rifle Scope",
    "Tru-Vision Tritium Sights"
  ];

    return (
        <div className="wiki-page">
            <div className="wiki-inner">
                <h1 className="wiki-header">Whitlock Model 86</h1>

                <div className="wiki-layout">
                    {/* SIDEBAR */}
                    <aside className="wiki-sidebar">
                        <div className="wiki-sidebar-header">Whitlock Model 86</div>
                        <div className="wiki-sidebar-image wiki-sidebar-image--contain" style={{ backgroundColor: 'var(--wiki-bg-sidebar)' }}>
                            <img src={WhitlockModel86Image} alt="Whitlock Model 86" className="wiki-img-custom" />
                        </div>

                        <div className="wiki-sidebar-header" style={{ fontSize: '0.9rem' }}>General Information</div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Value</span>
                            <span className="wiki-link">24000</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Weight</span>
                            3.5
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Score</span>
                            1404
                        </div>

                        <div className="wiki-sidebar-header" style={{ fontSize: '0.9rem' }}>Statistics</div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Accuracy</span>
                            78
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Recoil</span>
                            46
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Reload</span>
                            57
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Hipshot</span>
                            76
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Magazine</span>
                            4
                        </div>
                    </aside>

                    {/* MAIN */}
                    <main className="wiki-main">
                        <blockquote className="wiki-quote">
                            <p>"Inspired by the rifle that built America, this .30-30 Lever Action rifle is the perfect choice for anyone looking to relive ages past or just looking for a good entry level deer rifle. The .30-30 cartridge is very powerful at close range and a popular choice when hunting medium-sized game in dense vegetation."</p>
                            <cite>— In-Game Description</cite>
                        </blockquote>

                        <div className="wiki-p-mb">
                            <p>
                                The <strong>Whitlock Model 86</strong> is a lever-action rifle comparable to the <a href="#" className="wiki-link">Ranger .243</a>. Like its more modern counterpart, the Whitlock is best suited for small to medium-sized game.
                            </p>
                            <p>
                                Due to its lever-action design, it cannot utilize scopes meant for modern rifles and is restricted to the <a href="#" className="wiki-link">Helios 4-8x32 Rifle Scope</a>.
                            </p>
                        </div>

                        {/* TOC */}
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
                                    <li><a href="#gallery" onClick={(e) => scrollTo(e, 'gallery')} className="wiki-link">4. Gallery</a></li>
                                    <li><a href="#comparison" onClick={(e) => scrollTo(e, 'comparison')} className="wiki-link">5. Comparison to other rifles</a></li>
                                </ul>
                            )}
                        </div>

                        <section id="ammo" className="pt-8">
                            <h2 className="wiki-h2">1. Ammo</h2>
                            <p className="wiki-p-mb">As with most rifles, two variants of its <a href="#" className="wiki-link">ammunition</a> are available:</p>
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
                            <p className="wiki-p-mb">The following sights can be equipped on the Whitlock Model 86:</p>
                            <ul className="wiki-ul">
                                {sightsData.map((sight, idx) => (
                                    <li key={idx} className="wiki-li"><a href="#" className="wiki-link">{sight}</a></li>
                                ))}
                            </ul>
                        </section>

                        <section id="trivia" className="pt-8">
                            <h2 className="wiki-h2">3. Trivia</h2>
                            <p className="wiki-p-mb">
                                The Whitlock Model 86 is modeled after the real-life Winchester Model 1886.
                            </p>
                        </section>

                        <section id="gallery" className="pt-8">
                            <h2 className="wiki-h2">4. Gallery</h2>
                            <div className="wiki-uniform-grid">
                                {[
                                    { title: 'Standing', img: WhitlockModel86Standing },
                                    { title: 'Crouching', img: WhitlockModel86Crouching },
                                    { title: 'Lying', img: WhitlockModel86Prone },
                                    { title: 'Iron sight', img: WhitlockModel86Ironsight },
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
                            <h2 className="wiki-h2">5. Comparison to other rifles</h2>
                            <div className="wiki-table-container wiki-p-mb">
                                <div style={{ backgroundColor: 'var(--wiki-bg-sidebar)', padding: '20px' }}>
                                    <img src={RifleDiagram} alt="Rifle Diagram" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '8px' }} />
                                </div>
                            </div>
                            <WeaponsTable activeItem="Whitlock Model 86" />
                        </section>
                    </main>
                </div>

                <div className="h-32"></div>
            </div>
        </div>
    );
}