import React, { useState } from 'react';
import RegentImage from '../../../../assets/7mmRegentMagnum.webp';
import RifleDiagram from '../../../../assets/Rifle_diagram_2020.webp';
import EmpressMagnumImage from '../../../../assets/7mmEmpressMagnum.webp';
import RegentStanding from '../../../../assets/Regent_pose_1.webp';
import RegentCrouching from '../../../../assets/Regent_pose_2.webp';
import RegentProne from '../../../../assets/Regent_pose_3.webp';
import RegentIronsight from '../../../../assets/Regent_ironsight.webp';
import EmpressMagnum from '../../../../assets/Empress_Magnum.webp';
import WeaponsTable from '../../../../components/WeaponsTable';
import '../../../../styles/wiki.css';

export default function App() {
  const [isTocOpen, setIsTocOpen] = useState(true);
  const [activeVariant, setActiveVariant] = useState('Regent');

    const scrollTo = (e, id) => {
        e.preventDefault();
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    const getVariantData = () => {
        if (activeVariant === 'Empress') {
            return { title: '7mm Empress Magnum', img: EmpressMagnumImage };
        }
        return { title: '7mm Regent Magnum', img: RegentImage };
    };

    const variantData = getVariantData();

  // Data for Ammo Table
  const ammoData = [
    { name: "7mm Mag. Soft-Point", pen: 20, exp: 53, class: "4-9", range: "150m", price: 610 },
    { name: "7mm Mag. Polymer-Tip", pen: 40, exp: 12, class: "4-9", range: "150m", price: 880 },
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
                <h1 className="wiki-header">7mm Regent Magnum</h1>

                <div className="wiki-layout">
                    {/* SIDEBAR */}
                    <aside className="wiki-sidebar">
                        <div className="wiki-sidebar-header">7mm Regent Magnum</div>

                        <div className="wiki-sidebar-section" style={{ display: 'flex', justifyContent: 'space-around', gap: 8 }}>
                            {['Regent', 'Empress'].map((variant) => (
                                <button
                                    key={variant}
                                    type="button"
                                    className="wiki-link"
                                    onClick={() => setActiveVariant(variant)}
                                    style={{
                                        fontWeight: activeVariant === variant ? 'bold' : 'normal',
                                        textDecoration: activeVariant === variant ? 'underline' : 'none',
                                        background: 'transparent',
                                        border: 'none',
                                        padding: 0,
                                    }}
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
                            <span className="wiki-link">36000</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Weight</span>
                            4.5
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Score</span>
                            1920
                        </div>

                        <div className="wiki-sidebar-header" style={{ fontSize: '0.9rem' }}>Statistics</div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Accuracy</span>
                            33
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Recoil</span>
                            82
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Reload</span>
                            81
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Hipshot</span>
                            48
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Magazine</span>
                            1
                        </div>
                    </aside>

                    {/* MAIN */}
                    <main className="wiki-main">
                        <blockquote className="wiki-quote">
                            <p>"Lightweight, well balanced and extremely accurate. This 7mm break action rifle comes with a responsive trigger, a simple yet robust firing mechanism and an extremely durable long-range barrel. The 7mm cartridge, combined with the characteristics of this polished weapon, makes it ideal for long-range hunting."</p>
                            <cite>— In-Game Description</cite>
                        </blockquote>

                        <div className="wiki-p-mb">
                            <p>
                                The <strong>7mm Regent Magnum</strong> is a break-action rifle and one of the first obtainable rifles for hunting big game such as <a href="#" className="wiki-link">Moose</a> and <a href="#" className="wiki-link">Bison</a>.
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
                                    <li><a href="#analysis" onClick={(e) => scrollTo(e, 'analysis')} className="wiki-link">4. Analysis</a></li>
                                    <li><a href="#trivia" onClick={(e) => scrollTo(e, 'trivia')} className="wiki-link">5. Trivia</a></li>
                                    <li><a href="#gallery" onClick={(e) => scrollTo(e, 'gallery')} className="wiki-link">6. Gallery</a></li>
                                    <li><a href="#comparison" onClick={(e) => scrollTo(e, 'comparison')} className="wiki-link">7. Comparison to other rifles</a></li>
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
                            <p className="wiki-p-mb">The following sights can be equipped on the 7mm Regent Magnum:</p>
                            <ul className="wiki-ul">
                                {sightsData.map((sight, idx) => (
                                    <li key={idx} className="wiki-li"><a href="#" className="wiki-link">{sight}</a></li>
                                ))}
                            </ul>
                        </section>

                        <section id="variants" className="pt-8">
                            <h2 className="wiki-h2">3. Color Variants</h2>
                            <div className="wiki-p-mb">
                                <p>
                                    <strong>Empress Magnum</strong> is a cosmetic variant that was included in some physical copies of the game.
                                </p>
                            </div>
                        </section>

                        <section id="analysis" className="pt-8">
                            <h2 className="wiki-h2">4. Analysis</h2>
                            <div className="wiki-p-mb">
                                <p className="mb-4">
                                    The 7mm Mag. is one of the most popular calibers in the game, thanks to its fantastic balance between versatility and power. Its animal class range of 4-9 means it can effectively kill anything from fallow deer and goats all the way up to the biggest animals in the game, although not as fast as dedicated big game calibers like the .300 Magnum (<a href="#" className="wiki-link">.300 Canning Magnum</a>, <a href="#" className="wiki-link">Arzyna .300 Mag Tactical</a>) or the .338 Magnum (<a href="#" className="wiki-link">Rangemaster 338</a>, <a href="#" className="wiki-link">Tsurugi LRR .338</a>). Thanks to its increased power, which is necessary to down class 9 animals, it is especially effective against class 4-6 animals and outperforms most 4-8 rifles as well.
                                </p>
                                <p>
                                    The 7MM Regent Magnum utilizes a single shot break-action mechanism, which makes careful shot placement important as you will only be able to fire 1 shot before reloading. For anyone not on a grind and trying to take out multiple animals at a time (via quick follow-up shots), this slight limitation should not be much of an issue, as the reload itself is fairly quick. In addition to its great versatility, the 7MM Regent Magnum is a very good rifle for long range shots and remains very effective even beyond 300 meters.
                                </p>
                            </div>
                        </section>

                        <section id="trivia" className="pt-8">
                            <h2 className="wiki-h2">5. Trivia</h2>
                            <p className="wiki-p-mb">
                                The 7mm Regent Magnum is modeled after its real-life counterpart of the Merkel K3 Stutzen.
                            </p>
                        </section>

                        <section id="gallery" className="pt-8">
                            <h2 className="wiki-h2">6. Gallery</h2>
                            <div className="wiki-uniform-grid">
                                {[
                                    { title: 'Standing', img: RegentStanding },
                                    { title: 'Crouching', img: RegentCrouching },
                                    { title: 'Lying', img: RegentProne },
                                    { title: 'Iron sight', img: RegentIronsight },
                                    { title: 'Empress magnum - cosmetic variant', img: EmpressMagnum },
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
                            <h2 className="wiki-h2">7. Comparison to other rifles</h2>
                            <div className="wiki-table-container wiki-p-mb">
                                <div style={{ backgroundColor: 'var(--wiki-bg-sidebar)', padding: '20px' }}>
                                    <img src={RifleDiagram} alt="Rifle Diagram" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '8px' }} />
                                </div>
                            </div>
                            <WeaponsTable activeItem="7mm Regent Magnum" />
                        </section>
                    </main>
                </div>

                <div className="h-32"></div>
            </div>
        </div>
    );
}