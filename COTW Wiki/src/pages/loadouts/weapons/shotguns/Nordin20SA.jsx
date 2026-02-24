import { useState } from 'react';
import '../../../../styles/wiki.css';
import Serviceman from '../../../../assets/Nordin20SAServiceman.webp';
import Artisan from '../../../../assets/Nordin20SAArtisan.webp';
import Clandestine from '../../../../assets/Nordin20SAClandestine.webp';
import ShotgunDiagram from '../../../../assets/Shotgun_diagram_2020.webp';
import WeaponsTable from '../../../../components/WeaponsTable';

// --- Main App Component ---
export default function App() {
        const [isTocOpen, setIsTocOpen] = useState(true);
        const [selectedVariant, setSelectedVariant] = useState('Serviceman');

        const scrollTo = (e, id) => {
                e.preventDefault();
                document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        };

    // Data for Variants Slider
    const variants = {
        Serviceman: {
            image: Serviceman,
            desc: 'The standard variant featuring a durable wood stock and blued metal finish.',
        },
        Artisan: {
            image: Artisan,
            desc: 'A variant featuring designs. The body is built from a dark red wood, while the barrel and receiver are a dark silver.',
        },
        Clandestine: {
            image: Clandestine,
            desc: 'A variant featuring a grass texture covering the entire weapon.',
        },
    };

  // Data for Ammo Table
  const ammoData = [
    { name: "20 Gauge Birdshot", pen: "0", exp: "0", class: "1", range: "25m", price: 150 },
    { name: "20 Gauge Buckshot", pen: "4", exp: "0", class: "2-5", range: "25m", price: 500 },
    { name: "20 Gauge Slug", pen: "33", exp: "16", class: "4-7", range: "50m", price: 800 },
    { name: "20 Gauge Steel Birdshot", pen: "0", exp: "0", class: "1", range: "25m", price: 150 },
  ];

  // Data for Sights List
  const sightsData = [
    "Red Raptor Reflex Sight",
    "Meridian 1-4x20 Shotgun Scope"
  ];

  return (
        <div className="wiki-page">
            <div className="wiki-inner">
                <h1 className="wiki-header">Nordin 20SA</h1>

                <div className="wiki-layout">
                    <aside className="wiki-sidebar">
                        <div className="wiki-sidebar-header">Nordin 20SA</div>

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
                                    e.target.src = Serviceman;
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
                            <span>4.0</span>
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
                            <span>3</span>
                        </div>
                    </aside>

                    <main className="wiki-main">
                        <blockquote className="wiki-quote">
                            <p>"The perfect companion for a hunter with a full day planned, the 20GA Semi-auto is a versatile arm for the demanding shooter. Expertly regulates gas pressure for reliability and fantastic handling on all of its loads. Autoloading action, paired with 3 shell capacity, ensures several shots on the target, maximizing the yield from any hunt, be it small to medium sized game, upland game or waterfowl."</p>
                            <cite>― In-Game Description</cite>
                        </blockquote>

                        <div className="wiki-p-mb">
                            <p>
                                The <strong>Nordin 20SA Serviceman</strong> is a semi-auto 20 gauge shotgun.
                            </p>
                            <p className="mt-4">
                                This weapon is available as part of the <a href="#" className="wiki-link">Duck and Cover Pack</a> DLC.
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
                                    <li><a href="#comparison" onClick={(e) => scrollTo(e, 'comparison')} className="wiki-link">6. Comparison to other shotguns</a></li>
                                </ul>
                            )}
                        </div>

                        <section id="ammo" className="pt-8">
                            <h2 className="wiki-h2">1. Ammo</h2>
                            <p className="wiki-p-mb">The Nordin 20SA uses 20 Gauge ammunition:</p>
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
                            <p className="wiki-p-mb">The following sights can be equipped on the Nordin 20SA:</p>
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
                                    <strong>Nordin 20SA Artisan</strong> is a variant featuring designs. The body is built from a dark red wood, while the barrel and receiver are a dark silver.
                                </p>
                                <p className="mt-4">
                                    <strong>Nordin 20SA Clandestine</strong> features a grass texture covering the entire weapon.
                                </p>
                            </div>
                        </section>

                        <section id="analysis" className="pt-8">
                            <h2 className="wiki-h2">4. Analysis</h2>
                            <p className="wiki-p-mb">
                                It shares many of the same characteristics as the Strecker SxS 20G family, but with the benefit of a larger shell capacity. The three round capacity makes it an excellent candidate for hunting upland game.
                            </p>
                        </section>

                        <section id="trivia" className="pt-8">
                            <h2 className="wiki-h2">5. Trivia</h2>
                            <p className="wiki-p-mb">
                                This weapon has two unused variant images in the game's files. One is a black polymer version, and the other is a gold and white style with golden filigree on the stock, receiver, and foregrip.
                            </p>
                            <p className="wiki-p-mb">
                                The Nordin 20SA is modeled after its real-life counterpart of the Remington Versa Max Waterfowl Pro.
                            </p>
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