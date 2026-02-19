import React, { useState } from 'react';
import HuntsmanImage from '../../../../assets/270Huntsman.webp';
import RifleDiagram from '../../../../assets/Rifle_diagram_2020.webp';
import WardenImage from '../../../../assets/270Warden.webp';
import StradivariusImage from '../../../../assets/270Stradivarius.webp';
import HuntsmanStanding from '../../../../assets/Huntsman_pose_1.webp';
import HuntsmanCrouching from '../../../../assets/Huntsman_pose_2.webp';
import HuntsmanProne from '../../../../assets/Huntsman_pose_3.webp';
import HuntsmanIronsight from '../../../../assets/Huntsman_ironsight.webp';
import StradivariusSide from '../../../../assets/270-both.webp';
import WeaponsTable from '../../../../components/WeaponsTable';
import '../../../../styles/wiki.css';

export default function App() {
  const [isTocOpen, setIsTocOpen] = useState(true);
    const [selectedVariant, setSelectedVariant] = useState('Huntsman');

    const scrollTo = (e, id) => {
        e.preventDefault();
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    const variants = {
        Huntsman: { title: '.270 Huntsman', img: HuntsmanImage },
        Warden: { title: '.270 Warden', img: WardenImage },
        Stradivarius: { title: '.270 Stradivarius', img: StradivariusImage },
    };

    const variantData = variants[selectedVariant];

  // Data for Ammo Table
  const ammoData = [
    { name: ".270 Soft-Point", pen: 17, exp: 24, class: "4-8", range: "150m", price: 440 },
    { name: ".270 Polymer-Tip", pen: 35, exp: 5, class: "4-8", range: "150m", price: 700 },
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
                <h1 className="wiki-header">.270 Huntsman</h1>

                <div className="wiki-layout">
                    {/* SIDEBAR */}
                    <aside className="wiki-sidebar">
                        <div className="wiki-sidebar-header">{variantData.title}</div>

                        <div className="wiki-sidebar-section wiki-variant-bar" style={{ display: 'flex', justifyContent: 'space-around', gap: 8, flexWrap: 'wrap' }}>
                            {Object.keys(variants).map((variant) => (
                                <button
                                    key={variant}
                                    type="button"
                                    className="wiki-link wiki-variant-button"
                                    aria-current={selectedVariant === variant ? 'true' : undefined}
                                    onClick={() => setSelectedVariant(variant)}
                                >
                                    {variant}
                                </button>
                            ))}
                        </div>

                        <div className="wiki-sidebar-image wiki-sidebar-image--contain" style={{ backgroundColor: 'var(--wiki-bg-sidebar)' }}>
                            <img src={variantData.img} alt={variantData.title} className="wiki-img-custom" />
                        </div>

                        <div className="wiki-sidebar-header" style={{ fontSize: '0.9rem' }}>General Information</div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Value</span>
                            <span className="wiki-link">12000</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Weight</span>
                            4
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Score</span>
                            450
                        </div>

                        <div className="wiki-sidebar-header" style={{ fontSize: '0.9rem' }}>Statistics</div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Accuracy</span>
                            55
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Recoil</span>
                            64
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Reload</span>
                            49
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Hipshot</span>
                            67
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Magazine</span>
                            4
                        </div>
                    </aside>

                    {/* MAIN */}
                    <main className="wiki-main">
                        <blockquote className="wiki-quote">
                            <p>"This sleek looking bolt-action rifle sports a classic look, but don't let that fool you, this rifle packs state-of-the-art technology. Handcrafted solid steel receiver, advanced triple-locking safety mechanism and a padded composite stock for superior recoil compensation."</p>
                            <cite>— In-Game Description</cite>
                        </blockquote>

                        <div className="wiki-p-mb">
                            <p>
                                The <strong>.270 Huntsman</strong> bolt-action rifle is the first obtainable "mid-class" <a href="#" className="wiki-link">rifle</a>, suitable to hunt the majority of game throughout the reserves. Providing significantly more penetration than the <a href="#" className="wiki-link">Ranger .243</a> this weapon is ideal for those looking to hunt tougher and more valuable game.
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
                                    <li><a href="#variants" onClick={(e) => scrollTo(e, 'variants')} className="wiki-link">3. Color Variants</a></li>
                                    <li><a href="#trivia" onClick={(e) => scrollTo(e, 'trivia')} className="wiki-link">4. Trivia</a></li>
                                    <li><a href="#gallery" onClick={(e) => scrollTo(e, 'gallery')} className="wiki-link">5. Gallery</a></li>
                                    <li><a href="#comparison" onClick={(e) => scrollTo(e, 'comparison')} className="wiki-link">6. Comparison to other rifles</a></li>
                                </ul>
                            )}
                        </div>

                        <section id="ammo" className="pt-8">
                            <h2 className="wiki-h2">1. Ammo</h2>
                            <p className="wiki-p-mb">As with all rifles, two variants of its <a href="#" className="wiki-link">ammunition</a> are available:</p>
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
                            <p className="wiki-p-mb">The following sights can be equipped on the .270 Huntsman:</p>
                            <ul className="wiki-ul">
                                {sightsData.map((sight, idx) => (
                                    <li key={idx} className="wiki-li"><a href="#" className="wiki-link">{sight}</a></li>
                                ))}
                            </ul>
                        </section>

                        <section id="variants" className="pt-8">
                            <h2 className="wiki-h2">3. Color Variants</h2>
                            <div className="wiki-p-mb">
                                <p className="mb-4">
                                    <strong>.270 Warden</strong> was previously only visible to players who bought Call of the Wild within 3 months of release and had either earned a hunter score of 50 in theHunter Classic, or had purchased a membership in theHunter Classic. It has been made available for PC in 07 December 2021 (Mississippi Acres Preserve Update) and for console in 22 February 2022 (Modern Rifles Pack Update.)
                                </p>
                                <p>
                                    <strong>.270 Stradivarius</strong> has been available for purchase since the <strong>2017 Holiday Event</strong>.
                                </p>
                            </div>
                        </section>

                        <section id="trivia" className="pt-8">
                            <h2 className="wiki-h2">4. Trivia</h2>
                            <p className="wiki-p-mb">The .270 Huntsman is modeled after its real-life counterpart of the Weatherby Mark V chambered in .270 Winchester.</p>
                        </section>

                        <section id="gallery" className="pt-8">
                            <h2 className="wiki-h2">5. Gallery</h2>
                            <div className="wiki-uniform-grid">
                                {[
                                    { title: 'Standing', img: HuntsmanStanding },
                                    { title: 'Crouching', img: HuntsmanCrouching },
                                    { title: 'Lying', img: HuntsmanProne },
                                    { title: 'Iron sight', img: HuntsmanIronsight },
                                    { title: '.270 Huntsman and .270 Stradivarius - side view', img: StradivariusSide },
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
                            <h2 className="wiki-h2">6. Comparison to other rifles</h2>
                            <div className="wiki-table-container wiki-p-mb">
                                <div style={{ backgroundColor: 'var(--wiki-bg-sidebar)', padding: '20px' }}>
                                    <img src={RifleDiagram} alt="Rifle Diagram" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '8px' }} />
                                </div>
                            </div>
                            <WeaponsTable activeItem={variantData.title} />
                        </section>
                    </main>
                </div>

                <div className="h-32"></div>
            </div>
        </div>
  );
}