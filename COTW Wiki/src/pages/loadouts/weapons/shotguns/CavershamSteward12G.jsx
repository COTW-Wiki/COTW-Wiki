import React, { useState } from 'react';
import '../../../../styles/wiki.css';
import CavershamImg from '../../../../assets/CavershamSteward12G.webp';
import CavershamStanding from '../../../../assets/Caversham_pose_1.webp';
import CavershamCrouching from '../../../../assets/Caversham_pose_2.webp';
import CavershamLying from '../../../../assets/Caversham_pose_3.webp';
import CavershamIronsight from '../../../../assets/Caversham_ironsight.webp';
import CavershamSteward12GGrankinsShotgun from '../../../../assets/CavershamSteward12GGrankinsShotgun.webp';
import CavershamSteward12GGamekeeper12G from '../../../../assets/CavershamSteward12GGamekeeper12G.webp';
import WeaponsTable from '../../../../components/WeaponsTable';
import ShotgunDiagram from '../../../../assets/Shotgun_diagram_2020.webp';

export default function App() {
  const [isTocOpen, setIsTocOpen] = useState(true);
        const [selectedVariant, setSelectedVariant] = useState('Normal');

    const scrollTo = (e, id) => {
        e.preventDefault();
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    // Image (local asset)
    // const CavershamImg imported above
  
    // Data for Variants Slider (use the imported assets)
    const variants = {
        Normal: {
            image: CavershamImg,
            desc: 'Normal variant featuring engraved details and a polished wood stock.',
        },
        "Grankin's Shotgun": {
            image: CavershamSteward12GGrankinsShotgun,
            desc: "Grankin's Shotgun is a unique variant that has seen plenty of use. This variant is obtainable through the questline in Medved-Taiga National Park.",
        },
        'Gamekeeper 12G': {
            image: CavershamSteward12GGamekeeper12G,
            desc: 'Gamekeeper 12G is a variant that features a lighter wooden body and a black engraved barrel.',
        },
    };

  // Data for Ammo Table
  const ammoData = [
    { name: "12 Gauge Birdshot", pen: 5, exp: 5, class: "1", range: "25-50m", price: 200 },
    { name: "12 Gauge Buckshot", pen: 15, exp: 15, class: "2-5", range: "25-50m", price: 260 },
    { name: "12 Gauge Slug", pen: 40, exp: 10, class: "4-8", range: "50-100m", price: 400 },
  ];

  // Data for Sights List
  const sightsData = [
    "Red Raptor Reflex Sight",
    "Meridian 1-4x20 Shotgun Scope"
  ];            
            return (
                <div className="wiki-page">
                    <div className="wiki-inner">
                        <h1 className="wiki-header">Caversham Steward 12G</h1>

                        <div className="wiki-layout">
                            <aside className="wiki-sidebar">
                                <div className="wiki-sidebar-header">Caversham Steward 12G</div>

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
                                        onError={(e) => {
                                            e.target.src = CavershamImg;
                                        }}
                                    />
                                </div>

                                <div className="wiki-sidebar-header text-sm">General Information</div>
                                <div className="wiki-sidebar-section">
                                    <span className="wiki-sidebar-label">Value</span>
                                    <span>0</span>
                                </div>
                                <div className="wiki-sidebar-section">
                                    <span className="wiki-sidebar-label">Weight</span>
                                    <span>3.5</span>
                                </div>
                                <div className="wiki-sidebar-section">
                                    <span className="wiki-sidebar-label">Score</span>
                                    <span>1000</span>
                                </div>

                                <div className="wiki-sidebar-header text-sm">Statistics</div>
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
                                    <span>69</span>
                                </div>
                                <div className="wiki-sidebar-section">
                                    <span className="wiki-sidebar-label">Hipshot</span>
                                    <span>88</span>
                                </div>
                                <div className="wiki-sidebar-section">
                                    <span className="wiki-sidebar-label">Magazine</span>
                                    <span>2</span>
                                </div>
                            </aside>

                            <main className="wiki-main">
                                <blockquote className="wiki-quote">
                                    <p>"This 12-gauge shotgun sports a classic over-and-under double-barrel design. It allows for very quick follow up shots, making this gun ideal for scenarios that involve fast-moving targets."</p>
                                    <cite>— In-Game Description</cite>
                                </blockquote>

                                <div className="wiki-p-mb">
                                    <p>
                                        The Caversham Steward 12G was the first shotgun available in the game. Thanks to being able to use different shells, it can fill a number of roles. Useful as a secondary weapon when hunting too close to use a rifle, or if you've spotted upland game while traveling.
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
                                            <li><a href="#variants" onClick={(e) => scrollTo(e, 'variants')} className="wiki-link">3. Variants</a></li>
                                            <li><a href="#trivia" onClick={(e) => scrollTo(e, 'trivia')} className="wiki-link">4. Trivia</a></li>
                                            <li><a href="#gallery" onClick={(e) => scrollTo(e, 'gallery')} className="wiki-link">5. Gallery</a></li>
                                            <li><a href="#comparison" onClick={(e) => scrollTo(e, 'comparison')} className="wiki-link">6. Comparison to other shotguns</a></li>
                                        </ul>
                                    )}
                                </div>

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

                                <section id="sights" className="pt-8">
                                    <h2 className="wiki-h2">2. Sights</h2>
                                    <p className="wiki-p-mb">The following sights can be equipped on the Caversham Steward 12G:</p>
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
                                            <strong>Caversham Steward 12G Standard</strong> features an engraved receiver and high-quality wood stock.
                                        </p>
                                    </div>
                                </section>

                                {/* Analysis removed per request */}

                                <section id="trivia" className="pt-8">
                                    <h2 className="wiki-h2">4. Trivia</h2>
                                    <p className="wiki-p-mb">The Caversham Steward is modeled after its real-life counterpart of the FedArm FTS Over & Under.</p>
                                </section>

                                <section id="gallery" className="pt-8">
                                    <h2 className="wiki-h2">5. Gallery</h2>
                                    <div className="wiki-gallery-grid">
                                        {[
                                            { title: 'Standing', img: CavershamStanding },
                                            { title: 'Crouching', img: CavershamCrouching },
                                            { title: 'Lying', img: CavershamLying },
                                            { title: 'Iron sight', img: CavershamIronsight },
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
                                    <h2 className="wiki-h2">6. Comparison to other shotguns</h2>
                                    <div className="wiki-table-container wiki-p-mb">
                                        <div style={{ backgroundColor: 'var(--wiki-bg-sidebar)', padding: '20px' }}>
                                            <img
                                                src={ShotgunDiagram}
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