import React, { useState } from 'react';
import CoachmateLever4570Image from '../../../../assets/CoachmateLever4570.webp';
import CoachmateLever4570Standing from '../../../../assets/Coachmate_pose_1.webp';
import CoachmateLever4570Crouching from '../../../../assets/Coachmate_pose_2.webp';
import CoachmateLever4570Prone from '../../../../assets/Coachmate_pose_3.webp';
import CoachmateLever4570Ironsight from '../../../../assets/Coachmate_ironsight.webp';
import RifleDiagram from '../../../../assets/Rifle_diagram_2020.webp';
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
    { name: ".45-70 Hollow-Point", pen: 20, exp: 27, class: "4-9", range: "75m", price: 660 },
    { name: ".45-70 Soft-Point Flat Nose", pen: 40, exp: 6, class: "4-9", range: "75m", price: 390 },
  ];

  // Data for Sights List
  const sightsData = [
    "Helios 4-8x32 Rifle Scope",
    "Tru-Vision Tritium Sights"
  ];

  return (
        <div className="wiki-page">
            <div className="wiki-inner">
                <h1 className="wiki-header">Coachmate Lever .45-70</h1>

                <div className="wiki-layout">
                    <aside className="wiki-sidebar">
                        <div className="wiki-sidebar-header">Coachmate Lever .45-70</div>
                        <div className="wiki-sidebar-image wiki-sidebar-image--contain" style={{ backgroundColor: 'var(--wiki-bg-sidebar)' }}>
                            <img src={CoachmateLever4570Image} alt="Coachmate Lever .45-70 Rifle" />
                        </div>

                        <div className="wiki-sidebar-header" style={{ fontSize: '0.9rem' }}>General Information</div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Value</span>
                            <span className="wiki-link">48000</span>
                        </div>
                        <div className="wiki-sidebar-section"><span className="wiki-sidebar-label">Weight</span>4</div>
                        <div className="wiki-sidebar-section"><span className="wiki-sidebar-label">Score</span>2976</div>

                        <div className="wiki-sidebar-header" style={{ fontSize: '0.9rem' }}>Statistics</div>
                        <div className="wiki-sidebar-section"><span className="wiki-sidebar-label">Accuracy</span>55</div>
                        <div className="wiki-sidebar-section"><span className="wiki-sidebar-label">Recoil</span>64</div>
                        <div className="wiki-sidebar-section"><span className="wiki-sidebar-label">Reload</span>57</div>
                        <div className="wiki-sidebar-section"><span className="wiki-sidebar-label">Hipshot</span>67</div>
                        <div className="wiki-sidebar-section"><span className="wiki-sidebar-label">Magazine</span>3</div>
                    </aside>

                    <main className="wiki-main">
                        <blockquote className="wiki-quote">
                            <p>"Inspired by the rifles of the Old West, this handmake reproduction harkens back to the Frontier days of America. Even though the materials used in manufacturing this beautiful weapon are contemporary, the overall feel is of times long past. The .45-70 cartridge is very powerful at close range and a popular choice when hunting big game in dense vegetation."</p>
                            <cite>— In-Game Description</cite>
                        </blockquote>

                        <div className="wiki-p-mb">
                            <p>
                                The <strong>Coachmate Lever .45-70</strong> is a classic lever-action rifle comparable to the <a href="#" className="wiki-link">.300 Canning Magnum</a>. Unlike its counterpart, it can also be used to hunt medium-sized game without penalties.
                            </p>
                            <p className="mt-4">
                                Like the <a href="#" className="wiki-link">Whitlock Model 86</a>, the main drawback of the lever-action design is the limitation to the <a href="#" className="wiki-link">Helios 4-8x32 Rifle Scope</a>.
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
                            <p className="wiki-p-mb">The following sights can be equipped on the Coachmate Lever .45-70:</p>
                            <ul className="wiki-ul">
                                {sightsData.map((sight, idx) => (
                                    <li key={idx} className="wiki-li"><a href="#" className="wiki-link">{sight}</a></li>
                                ))}
                            </ul>
                        </section>

                        <section id="trivia" className="pt-8">
                            <h2 className="wiki-h2">3. Trivia</h2>
                            <p className="wiki-p-mb">
                                The Coachmate Lever .45-70 is modeled after its real-life counterpart of the Marlin Model 1895 chambered in .45-70 gov't.
                            </p>
                        </section>

                        <section id="gallery" className="pt-8">
                            <h2 className="wiki-h2">4. Gallery</h2>
                            <div className="wiki-uniform-grid">
                                {[
                                    { title: "Standing", img: CoachmateLever4570Standing },
                                    { title: "Crouching", img: CoachmateLever4570Crouching },
                                    { title: "Lying", img: CoachmateLever4570Prone },
                                    { title: "Iron sight", img: CoachmateLever4570Ironsight }
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
                            <WeaponsTable activeItem="Coachmate Lever .45-70" />
                        </section>
                    </main>
                </div>

                <div className="h-32"></div>
            </div>
        </div>
  );
}