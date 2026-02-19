import { useState } from 'react';
import WeaponsTable from '../../../../components/WeaponsTable';
import Zarza1522LRShadow from '../../../../assets/Zarza-1522LRShadow.webp';
import Zarza1522LRPredator from '../../../../assets/Zarza-1522LRPredator.webp';
import ZarzaTwitter from '../../../../assets/ZarzaTwitter.webp';
import '../../../../styles/wiki.css';

const Zarza1522LR = () => {
    const [isTocOpen, setIsTocOpen] = useState(true);
    const [selectedVariant, setSelectedVariant] = useState('Shadow');

    const scrollTo = (e, id) => {
        e.preventDefault();
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    const variants = {
        Shadow: {
            image: Zarza1522LRShadow,
            desc: 'The default variant, likely featuring a dark, tactical finish.',
        },
        Predator: {
            image: Zarza1522LRPredator,
            desc: 'A variant often featuring a camouflage pattern suitable for predator hunting.',
        },
    };

    const ammoData = [
        { name: '.22LR Truncated Cone', pen: 17, exp: 1, class: '1', range: '100m', price: 250 },
        { name: '.22LR Jacketed Hollow-Point', pen: 5, exp: 10, class: '1', range: '100m', price: 200 },
    ];

    const sightsData = [
        'Ascent 1-4x24 Rifle Scope',
        'Hyperion 4-8x42 Rifle Scope',
        'Odin 4-12x33 Rifle Scope',
        'Argus 8-16x50 Rifle Scope',
        'GenZero 1-4x20 Night Vision Rifle Scope',
        'Angler 4-8x100 Night Vision Rifle Scope',
        'Red Raptor Reflex Sight',
    ];

    const selectedVariantData = variants[selectedVariant];

    return (
        <div className="wiki-page">
            <div className="wiki-inner">
                <h1 className="wiki-header">ZARZA-15 .22LR</h1>

                <div className="wiki-layout">
                    <aside className="wiki-sidebar">
                        <div className="wiki-sidebar-header">ZARZA-15 .22LR</div>

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
                                alt={`ZARZA-15 .22LR ${selectedVariant}`}
                                style={{ width: '268.4px', height: '134.2px' }}
                            />
                        </div>

                        <div className="wiki-sidebar-header" style={{ fontSize: '0.9rem' }}>General Information</div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Value</span>
                            <span>0</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Weight</span>
                            <span>2.5</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Score</span>
                            <span>0</span>
                        </div>

                        <div className="wiki-sidebar-header" style={{ fontSize: '0.9rem' }}>Statistics</div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Accuracy</span>
                            <span>100</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Recoil</span>
                            <span>8</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Reload</span>
                            <span>59</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Hipshot</span>
                            <span>86</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Magazine</span>
                            <span>5</span>
                        </div>
                    </aside>

                    <main className="wiki-main">
                        <blockquote className="wiki-quote">
                            <p>"One of the most popular and versatile rifles ever, the ZARZA-15 .22lr is incredibly common among hunters thanks to its reliability and beautiful, modular and compact design. Chambered in .22lr and with a custom 16 inch barrel, it's the ultimate companion when it comes to small-sized prey."</p>
                            <cite>— In-Game Description</cite>
                        </blockquote>

                        <div className="wiki-p-mb">
                            <p>
                                The <strong>Zarza-15 .22LR</strong> is a semi-automatic rifle meant for hunting small game. Its incredibly high accuracy makes hitting even the smallest targets a breeze.
                            </p>
                            <p>
                                This weapon is available as part of the <a href="#" className="wiki-link"><strong>Modern Rifle Pack</strong></a> DLC.
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
                                    <li><a href="#trivia" onClick={(e) => scrollTo(e, 'trivia')} className="wiki-link">4. Trivia</a></li>
                                    <li><a href="#gallery" onClick={(e) => scrollTo(e, 'gallery')} className="wiki-link">5. Gallery</a></li>
                                </ul>
                            )}
                        </div>

                        <section id="ammo" className="pt-8">
                            <h2 className="wiki-h2">1. Ammo</h2>
                            <p className="wiki-p-mb">This rifle has two types of ammo available:</p>

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

                            <p className="wiki-p-mb" style={{ marginTop: '10px' }}>
                                This is the same ammo that <a href="#" className="wiki-link">Virant .22LR</a> and <a href="#" className="wiki-link">Andersson .22LR</a> use.
                            </p>
                        </section>

                        <section id="sights" className="pt-8">
                            <h2 className="wiki-h2">2. Sights</h2>
                            <p className="wiki-p-mb">The following sights can be equipped on the Zarza-15 .22LR:</p>
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
                                    This rifle is a functional copy of the <a href="#" className="wiki-link">Virant .22LR</a> rifle and <a href="#" className="wiki-link">Andersson .22LR</a> pistol from Weapon Packs 1 and 3 respectively. It has similar characteristics, but its magazine capacity is only half of the Virant and Andersson (5 rounds for the Zarza compared to 10 for the Virant and Andersson).
                                </p>
                                <p>
                                    Despite the smaller magazine, many players prefer its modern handling and quick reload speed.
                                </p>
                            </div>
                        </section>

                        <section id="trivia" className="pt-8">
                            <h2 className="wiki-h2">4. Trivia</h2>
                            <ul className="wiki-ul">
                                <li className="wiki-li">The ZARZA-15 .22LR is modeled after its real-life counterpart of the AR-15 which is produced in various models by various companies.</li>
                                <li className="wiki-li">The rifle's model is inaccurate to what it's supposed to be. While it is chambered for the .22lr, the actual magazine and chamber are modeled after rifles that chamber 5.56.</li>
                            </ul>
                        </section>

                        <section id="gallery" className="pt-8 wiki-p-mb">
                            <h2 className="wiki-h2">5. Gallery</h2>
                            <div className="wiki-uniform-grid">
                                {[
                                    { title: 'Promotional', img: ZarzaTwitter },
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

                        <WeaponsTable activeItem="Zarza-15 .22LR" />
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Zarza1522LR;