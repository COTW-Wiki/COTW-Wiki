import { useState } from 'react';
import WeaponsTable from '../../../../components/WeaponsTable';
import PantherMagnum from '../../../../assets/44PantherMagnum.webp';
import WildcatMagnum from '../../../../assets/44WildcatMagnum.webp';
import HandgunsDiagram from '../../../../assets/Handgun_diagram_2020.webp';
import '../../../../styles/wiki.css';

// --- Main App Component ---
export default function App() {
  const [isTocOpen, setIsTocOpen] = useState(true);
    const [selectedVariant, setSelectedVariant] = useState('Panther');

    // Data for Variants Slider
    const variants = {
        Panther: {
            image: PantherMagnum,
            desc: 'The standard variant featuring a blued steel finish and wood grips.',
        },
        Wildcat: {
            image: WildcatMagnum,
            desc: 'A special edition variant with a distinct finish.',
        },
    };

  // Data for Ammo Table
  const ammoData = [
    { name: ".44 Jacketed Hollow-Point", pen: 17, exp: 70, class: "3-8", range: "50m", price: 260 },
    { name: ".44 Flat Nose Hard-Cast", pen: 70, exp: 16, class: "3-8", range: "50m", price: 530 },
  ];

  // Data for Sights List
  const sightsData = [
    "Goshawk Redeye 2-4x20 Handgun Scope",
    "Hermes 3-7x33 Handgun-Shotgun Scope",
    "Red Raptor Reflex Sight",
    "Tru-Vision Tritium Sights"
  ];

    return (
        <div className="wiki-page">
            <div className="wiki-inner">
                <h1 className="wiki-header">.44 Panther Magnum</h1>

                <div className="wiki-layout">
                    <aside className="wiki-sidebar">
                        <div className="wiki-sidebar-header">.44 Panther Magnum</div>

                        <div
                            className="wiki-sidebar-section wiki-variant-bar"
                            style={{ display: 'flex', justifyContent: 'space-around', gap: 8, flexWrap: 'wrap' }}
                        >
                            {Object.keys(variants).map((variantName) => (
                                <button
                                    key={variantName}
                                    onClick={() => setSelectedVariant(variantName)}
                                    type="button"
                                    className="wiki-link wiki-variant-button"
                                    aria-current={selectedVariant === variantName ? 'true' : undefined}
                                >
                                    {variantName}
                                </button>
                            ))}
                        </div>

                        <div className="wiki-sidebar-image wiki-sidebar-image--contain">
                            <img
                                src={variants[selectedVariant].image}
                                alt={selectedVariant}
                                className="wiki-img-custom"
                            />
                        </div>

                        <div className="wiki-sidebar-header" style={{ fontSize: '0.9rem' }}>General Information</div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Value</span>
                            <span>24000</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Weight</span>
                            <span>1.5</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Score</span>
                            <span>1235</span>
                        </div>

                        <div className="wiki-sidebar-header" style={{ fontSize: '0.9rem' }}>Statistics</div>
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
                            <span>60</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Hipshot</span>
                            <span>95</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Magazine</span>
                            <span>6</span>
                        </div>
                    </aside>

                    <main className="wiki-main">
                        <blockquote className="wiki-quote">
                            <p>"Single-action revolver using the .44 magnum cartridges. Crafted out of stainless steel, this weapon features a triple-locking cylinder and single-spring mechanism, offering a lighter trigger pull. A big handgun for big game. The speed of the weapon makes it an excellent life saver in hostile situations."</p>
                            <cite>— In-Game Description</cite>
                        </blockquote>

                        <div className="wiki-p-mb">
                            <p>
                                The <strong>.44 Panther Magnum</strong> is a revolver built for close-range medium to large game. The lightweight construction allows hunters to carry one for emergencies without over encumbering them. This makes the weapon quite valuable as a backup when your rifle is empty and there is a charging bear.
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
                                    <li><a href="#ammo" className="wiki-link">1. Ammo</a></li>
                                    <li><a href="#sights" className="wiki-link">2. Sights</a></li>
                                    <li><a href="#trivia" className="wiki-link">3. Trivia</a></li>
                                    <li><a href="#comparison" className="wiki-link">4. Comparison to other handguns</a></li>
                                </ul>
                            )}
                        </div>

                        <section id="ammo" className="pt-8">
                            <h2 className="wiki-h2">1. Ammo</h2>
                            <p className="wiki-p-mb">As with most pistols, two variants of its ammunition are available:</p>
                            <div className="wiki-table-container">
                                <table className="wiki-table">
                                    <thead>
                                        <tr style={{ backgroundColor: 'var(--wiki-bg-sidebar-header)', color: '#fff' }}>
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
                            <p className="wiki-p-mb">The following sights can be equipped on the .44 Panther Magnum:</p>
                            <ul className="wiki-ul">
                                {sightsData.map((sight, idx) => (
                                    <li key={idx} className="wiki-li"><a href="#" className="wiki-link">{sight}</a></li>
                                ))}
                            </ul>
                        </section>

                        <section id="trivia" className="pt-8">
                            <h2 className="wiki-h2">3. Trivia</h2>
                            <p className="wiki-p-mb">The .44 Panther Magnum is modeled after the Ruger Super Redhawk .44 Revolver.</p>
                        </section>

                        <section id="comparison" className="pt-8">
                            <h2 className="wiki-h2">4. Comparison to other handguns</h2>
                            <div className="wiki-p-mb">
                                <img
                                    src={HandgunsDiagram}
                                    alt="Handgun Comparison Chart"
                                    style={{ width: 400, height: 200, maxWidth: '100%', border: '1px solid var(--wiki-border)' }}
                                />
                            </div>
                        </section>

                        <WeaponsTable activeItem=".44 Panther Magnum" />
                    </main>
                </div>
            </div>
        </div>
    );
}