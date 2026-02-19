import React, { useState } from 'react';
import '../../../../styles/wiki.css';
import CousoRanchero from '../../../../assets/CousoModel1897Ranchero.webp';
import CousoSoldado from '../../../../assets/CousoModel1897Soldado.webp';
import CousoVaquero from '../../../../assets/CousoModel1897Vaquero.webp';
import WeaponsTable from '../../../../components/WeaponsTable.jsx';

// --- Main App Component ---
export default function App() {
  const [isTocOpen, setIsTocOpen] = useState(true);
    const [selectedVariant, setSelectedVariant] = useState('Ranchero');

    const scrollTo = (e, id) => {
        e.preventDefault();
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    // Data for Variants Slider
    const variants = {
        Ranchero: {
            image: CousoRanchero,
            desc: 'The standard variant featuring a reliable pump-action mechanism and wood furniture.',
        },
        Soldado: {
            image: CousoSoldado,
            desc: 'A variant with a dark, tactical finish.',
        },
        Vaquero: {
            image: CousoVaquero,
            desc: 'A variant with a distinct western-style finish.',
        },
    };

  // Data for Ammo Table
  const ammoData = [
    { name: "16 Gauge Birdshot", pen: 0, exp: 0, class: "1", range: "25m", price: 180 },
    { name: "16 Gauge Buckshot", pen: 5, exp: 0, class: "2-4", range: "25m", price: 530 },
    { name: "16 Gauge Slug", pen: 37, exp: 16, class: "4-7", range: "50m", price: 880 },
  ];

  // Data for Sights List
  const sightsData = [
    "Red Raptor Reflex Sight",
    "Meridian 1-4x20 Shotgun Scope" // Note: Some 1897 models may not accept scopes, check in-game specifics if needed, but listing standard shotgun optics here based on pattern.
  ];

    return (
        <div className="wiki-page">
            <div className="wiki-inner">
                <h1 className="wiki-header">Couso Model 1897</h1>

                <div className="wiki-layout">
                    <aside className="wiki-sidebar">
                        <div className="wiki-sidebar-header">Couso Model 1897</div>

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
                            <img src={variants[selectedVariant].image} alt={selectedVariant} />
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
                            <span>0</span>
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
                            <span>29</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Hipshot</span>
                            <span>88</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Magazine</span>
                            <span>5</span>
                        </div>
                    </aside>

                    <main className="wiki-main">
                        <blockquote className="wiki-quote">
                            <p>"The Couso Model 1897 was the first pump action shotgun to achieve widespread commercial success. Its ease of use and reliability have made it a favourite of soldiers, policemen and hunters alike. This particular model is chambered in 16 gauge. This makes it a very versatile weapon in the hands of a skilled hunter. If you are looking to hunt upland game birds, but also want to be able to take advantage of a chance encounter with a roaming deer, look no further. The Couso Model 1897 has you covered!"</p>
                            <cite>― In-Game Description</cite>
                        </blockquote>

                        <div className="wiki-p-mb">
                            <p>
                                The <strong>Couso Model 1897</strong> is a pump-action 16 gauge shotgun. While reloading considerably faster, and having a larger capacity than a break-action double barrel, this weapon suffers from slightly lower hipshot accuracy.
                            </p>
                            <p className="mt-4">
                                This weapon is available as part of the <a href="#" className="wiki-link">Rancho del Arroyo</a> DLC.
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
                                    <li><a href="#analysis" onClick={(e) => scrollTo(e, 'analysis')} className="wiki-link">4. Analysis</a></li>
                                    <li><a href="#trivia" onClick={(e) => scrollTo(e, 'trivia')} className="wiki-link">5. Trivia</a></li>
                                </ul>
                            )}
                        </div>

                        <section id="ammo" className="pt-8">
                            <h2 className="wiki-h2">1. Ammo</h2>
                            <p className="wiki-p-mb">The Couso Model 1897 uses 16 Gauge ammunition:</p>

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
                            <p className="wiki-p-mb">The following sights can be equipped on the Couso Model 1897:</p>
                            <ul className="wiki-ul">
                                {sightsData.map((sight, idx) => (
                                    <li key={idx} className="wiki-li"><a href="#" className="wiki-link">{sight}</a></li>
                                ))}
                            </ul>
                        </section>

                        <section id="variants" className="pt-8">
                            <h2 className="wiki-h2">3. Variants</h2>
                            <div className="wiki-p-mb">
                                <p>The <strong>Couso Model 1897 Ranchero</strong> is a variant that features a darker wood body and a brass receiver.</p>
                                <p className="mt-4">The <strong>Couso Model 1897 Soldado</strong> is a unique variant available through the Rancho del Arroyo questline. It sports a dark wooden body, and black carbon steel metal.</p>
                                <p className="mt-4"><strong>Couso Model 1897 Vaquero</strong> features a western-style finish.</p>
                            </div>
                        </section>

                        <section id="analysis" className="pt-8">
                            <h2 className="wiki-h2">4. Analysis</h2>
                            <div className="wiki-p-mb">
                                <p>It is a weaker copy of Cacciatore 12G. It covers less animal classes, its slug has less penetration and expansion, the gun holds one less round, has simpler iron sights and has no advantages over Cacciatore in any characteristics (many are just identical). However it is a suitable shotgun for players who don't have the shotgun score to purchase a better model. So this is one of the starter weapons.</p>
                            </div>
                        </section>

                        <section id="trivia" className="pt-8">
                            <h2 className="wiki-h2">5. Trivia</h2>
                            <p className="wiki-p-mb">The Couso Model 1897 is modeled after its real-life counterpart of the Winchester Model 1897.</p>
                        </section>

                        <div className="pt-8">
                            <WeaponsTable />
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}