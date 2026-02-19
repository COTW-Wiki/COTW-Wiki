import React, { useState } from 'react';
import RifleDiagram from '../../../../assets/Rifle_diagram_2020.webp';
import WeaponsTable from '../../../../components/WeaponsTable';
import MartenssonThunder from '../../../../assets/Martensson65Thunder.webp';
import MartenssonLightning from '../../../../assets/Martensson65Lightning.webp';
import MartenssonRayo from '../../../../assets/Martensson65Rayo.webp';
import '../../../../styles/wiki.css';

export default function Martensson65() {
  const [isTocOpen, setIsTocOpen] = useState(true);
    const [selectedVariant, setSelectedVariant] = useState('Thunder');

    const scrollTo = (e, id) => {
        e.preventDefault();
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

  // Data for Variants Slider
    const variants = {
        Thunder: {
            image: MartenssonThunder,
            desc: 'Bolt-action rifle with high accuracy and a generous magazine. Olive green polymer body.',
        },
        Lightning: {
            image: MartenssonLightning,
            desc: 'Variant that swaps out the olive green polymer body with a white polymer body.',
        },
        Rayo: {
            image: MartenssonRayo,
            desc: 'Special variant which replaces the polymer body with a dark stained wood body with intricate engravings.',
        },
    };

  // Data for Ammo Table
  const ammoData = [
    { name: "6.5mm Soft-Point", pen: 20, exp: 20, class: "4-8", range: "200m", price: 400 },
    { name: "6.5mm Polymer-Tip", pen: 40, exp: 4, class: "4-8", range: "200m", price: 650 },
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

    const selectedVariantData = variants[selectedVariant];

    return (
        <div className="wiki-page">
            <div className="wiki-inner">
                <h1 className="wiki-header">Mårtensson 6.5mm</h1>

                <div className="wiki-layout">
                    <aside className="wiki-sidebar">
                        <div className="wiki-sidebar-header">Mårtensson 6.5mm</div>

                        <div className="wiki-sidebar-section wiki-variant-bar" style={{ display: 'flex', justifyContent: 'space-around', gap: 8, flexWrap: 'wrap' }}>
                            {Object.keys(variants).map((variantName) => (
                                <button
                                    key={variantName}
                                    type="button"
                                    onClick={() => setSelectedVariant(variantName)}
                                    className="wiki-link wiki-variant-button"
                                    aria-current={selectedVariant === variantName ? 'true' : undefined}
                                >
                                    {variantName}
                                </button>
                            ))}
                        </div>

                        <div className="wiki-sidebar-image wiki-sidebar-image--contain" style={{ backgroundColor: 'var(--wiki-bg-sidebar)' }}>
                            <img
                                src={selectedVariantData.image}
                                alt={`Mårtensson 6.5mm ${selectedVariant}`}
                                style={{ width: '268.4px', height: '134.2px' }}
                                onError={(e) => {
                                    e.currentTarget.src = 'https://static.wikia.nocookie.net/thehuntercotw/images/9/90/Rifle_Martensson_6.5mm.png';
                                }}
                            />
                        </div>

                        <div className="wiki-sidebar-header" style={{ fontSize: '0.9rem' }}>General Information</div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Value</span>
                            <span>10000</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Weight</span>
                            <span>3</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Score</span>
                            <span>0</span>
                        </div>

                        <div className="wiki-sidebar-header" style={{ fontSize: '0.9rem' }}>Statistics</div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Accuracy</span>
                            <span>70</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Recoil</span>
                            <span>50</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Reload</span>
                            <span>49</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Hipshot</span>
                            <span>67</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Magazine</span>
                            <span>5</span>
                        </div>
                    </aside>

                    <main className="wiki-main">
                        <blockquote className="wiki-quote">
                            <p>"The Mårtensson 6.5mm is a modern bolt-action rifle manufactured by Swedish weaponsmiths. Designed to satisfy the needs of hunters and range shooters alike, this rifle features a smooth and reliable action encased in a lightweight frame. Its versatility, long-range accuracy and the growing popularity of 6.5mm ammunition have allowed the Mårtensson 6.5mm to become a best-seller across the whole of Europe."</p>
                            <cite>— In-Game Description</cite>
                        </blockquote>

                        <div className="wiki-p-mb">
                            <p>
                                The <strong>Mårtensson 6.5mm Thunder</strong> is a bolt-action rifle with high accuracy and a generous magazine. Sharing the same role as the .30-06 weapons, this rifle finds itself at home whether you're baiting <a href="#" className="wiki-link">Fallow Deer</a>, or tracking <a href="#" className="wiki-link">Moose</a>. The increased range on the 6.5mm rounds make it an excellent choice for those looking to utilize hunting stands.
                            </p>
                            <p>
                                This weapon is available as part of the <a href="#" className="wiki-link">Cuatro Colinas Game Reserve</a> DLC.
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
                                    <li><a href="#variants" onClick={(e) => scrollTo(e, 'variants')} className="wiki-link">3. Variants</a></li>
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
                            <p className="wiki-p-mb">The following sights can be equipped on the Mårtensson 6.5mm:</p>
                            <ul className="wiki-ul">
                                {sightsData.map((sight, idx) => (
                                    <li key={idx} className="wiki-li"><a href="#" className="wiki-link">{sight}</a></li>
                                ))}
                            </ul>
                        </section>

                        <section id="variants" className="pt-8">
                            <h2 className="wiki-h2">3. Variants</h2>
                            <div className="wiki-p-mb">
                                <p>
                                    <strong>Mårtensson 6.5mm Lightning</strong> is a variant that swaps out the olive green polymer body with a white polymer body.
                                </p>
                                <p>
                                    <strong>Mårtensson 6.5mm Rayo</strong> is a special variant which replaces the polymer body with a dark stained wood body with intricate engravings on the grips. This variant is unlocked by completing all additional quests of Don Miguel Del Bosque.
                                </p>
                                <p>
                                    According to the achievement statistics, less than 0.5% of players succeeded, since the number of missions is pretty big and among them there are extremely difficult ones, such as killing from a distance of 400 meters, killing a wolf with a bow at short range and harvesting many gold animals as well as a Diamond.
                                </p>
                            </div>
                        </section>

                        <section id="analysis" className="pt-8">
                            <h2 className="wiki-h2">4. Analysis</h2>
                            <div className="wiki-p-mb">
                                <p>
                                    The Mårtensson is a great rifle for medium game but struggles a bit with animals on the high end of its performance spectrum (class 8) such as Moose. It is comparable in power to the <a href="#" className="wiki-link">.270 Huntsman</a>, with slightly higher penetration on its Polymer-Tip ammunition. It is one of 5 ingame weapons with the highest effective range of 200m (the other four being the <a href="#" className="wiki-link">Vallgarda .375</a>, <a href="#" className="wiki-link">Gandhare Rifle</a>, the <a href="#" className="wiki-link">Hudzik .50 Caplock</a> Muzzleloader with its .50 Caliber Minié Ball ammunition and the <a href="#" className="wiki-link">Curman .50 Inline</a> Muzzleloader).
                                </p>
                            </div>
                        </section>

                        <section id="trivia" className="pt-8">
                            <h2 className="wiki-h2">5. Trivia</h2>
                            <p className="wiki-p-mb">The Mårtensson 6.5mm is modeled after its real-life counterpart of the Bergara B-14 HMR.</p>
                        </section>

                        <section id="gallery" className="pt-8">
                            <h2 className="wiki-h2">6. Gallery</h2>
                            <div className="wiki-uniform-grid">
                                {[
                                    { title: 'Standing', img: MartenssonThunder },
                                    { title: 'Crouching', img: MartenssonThunder },
                                    { title: 'Lying', img: MartenssonThunder },
                                    { title: 'Iron sight', img: MartenssonThunder },
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
                                    <img
                                        src={RifleDiagram}
                                        alt="Rifle Diagram"
                                        style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '8px' }}
                                    />
                                </div>
                            </div>

                            <WeaponsTable activeItem="Mårtensson 6.5mm" />
                        </section>
                    </main>
                </div>

                <div className="h-32"></div>
            </div>
        </div>
    );
}