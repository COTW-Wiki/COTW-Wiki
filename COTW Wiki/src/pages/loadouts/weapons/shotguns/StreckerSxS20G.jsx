import { useState } from 'react';
import '../../../../styles/wiki.css';
import WeaponsTable from '../../../../components/WeaponsTable';
import StreckerScarlett from '../../../../assets/StreckerSxS20GScarlett.webp';
import StreckerFiona from '../../../../assets/StreckerSxS20GFiona.webp';
import StreckerHazel from '../../../../assets/StreckerSxS20GHazel.webp';
import StreckerRaven from '../../../../assets/StreckerSxS20GRaven.webp';
import StreckerStandingImg from '../../../../assets/Strecker_pose_1.webp';
import StreckerCrouchingImg from '../../../../assets/Strecker_pose_2.webp';
import StreckerLyingImg from '../../../../assets/Strecker_pose_3.webp';
import StreckerIronSightImg from '../../../../assets/Strecker_ironsight.webp';
import ShotgunDiagram from '../../../../assets/Shotgun_diagram_2020.webp';

// --- Main App Component ---
export default function App() {
        const [isTocOpen, setIsTocOpen] = useState(true);
        const [selectedVariant, setSelectedVariant] = useState('Scarlett');

        const scrollTo = (e, id) => {
                e.preventDefault();
                document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        };

        const StreckerImg = StreckerScarlett;
  
  // Using the main image as a placeholder for gallery items
  const StreckerStanding = StreckerStandingImg;
  const StreckerCrouching = StreckerCrouchingImg;
  const StreckerLying = StreckerLyingImg;
  const StreckerIronSight = StreckerIronSightImg;

  // Data for Variants Slider
    const variants = {
        Scarlett: {
            image: StreckerScarlett,
            desc: 'A classic double-barrel shotgun chambered in 20 gauge with a reddish wood finish.',
        },
        Fiona: {
            image: StreckerFiona,
            desc: 'An alternate style featuring an ebony and ivory design with gold accents.',
        },
        Hazel: {
            image: StreckerHazel,
            desc: 'A variant designed to look like a traditional double-barrel.',
        },
        Raven: {
            image: StreckerRaven,
            desc: 'A version with modern design elements such as a black body and barrel.',
        },
    };

  // Data for Ammo Table
  const ammoData = [
    { name: "20 GA Birdshot", pen: 0, exp: 0, class: "1", range: "25m", price: 150 },
    { name: "20 GA Buckshot", pen: 4, exp: 0, class: "2-5", range: "25m", price: 500 },
    { name: "20 GA Slug", pen: 33, exp: 16, class: "4-7", range: "50m", price: 800 },
    { name: "20 GA Steel Birdshot", pen: 0, exp: 0, class: "1", range: "25m", price: 150 },
  ];

  // Data for Sights List
  const sightsData = [
    "Marksman Exakt Reflex Sight"
  ];

  return (
        <div className="wiki-page">
            <div className="wiki-inner">
                <h1 className="wiki-header">Strecker SxS 20G</h1>

                <div className="wiki-layout">
                    <aside className="wiki-sidebar">
                        <div className="wiki-sidebar-header">Strecker SxS 20G</div>

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
                                    e.target.src = StreckerImg;
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
                            <span>4</span>
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
                            <span>10</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Hipshot</span>
                            <span>95</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Magazine</span>
                            <span>2</span>
                        </div>
                    </aside>

                    <main className="wiki-main">
                        <blockquote className="wiki-quote">
                            <p>"The little sister to the 12-Gauge Shotgun, the 20-Gauge's lower velocity rounds and weight mean lower recoil and better handling: the right tools to deal with fast-moving prey. Quick to fire, easy to operate even from the hip and great to show-off, the Strecker SxS 20G is the way to go for any discerning hunter of small and upland deer."</p>
                            <cite>― In-Game Description</cite>
                        </blockquote>

                        <div className="wiki-p-mb">
                            <p>
                                The <strong>Strecker SxS 20G Scarlett</strong> is a classic double-barrel shotgun chambered in 20 gauge.
                            </p>
                            <p className="mt-4">
                                This weapon is available as part of the <a href="#" className="wiki-link">Wild Goose Chase Gear</a> DLC.
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
                                    <li><a href="#gallery" onClick={(e) => scrollTo(e, 'gallery')} className="wiki-link">6. Gallery</a></li>
                                    <li><a href="#comparison" onClick={(e) => scrollTo(e, 'comparison')} className="wiki-link">7. Comparison to other shotguns</a></li>
                                </ul>
                            )}
                        </div>

                        <section id="ammo" className="pt-8">
                            <h2 className="wiki-h2">1. Ammo</h2>
                            <p className="wiki-p-mb">As with most shotguns, several variants of its ammunition are available:</p>

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
                            <p className="wiki-p-mb">The following sights can be equipped on the Strecker SxS 20G:</p>
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
                                    The <strong>Strecker SxS 20G Fiona</strong> is an alternate style that features an ebony and ivory design of a white body, and black receiver and barrel. This is paired with slight gold accents.
                                </p>
                                <p className="mt-4">
                                    The <strong>Strecker SxS 20G Hazel</strong> is a variant that is designed to look like a traditional double-barrel.
                                </p>
                                <p className="mt-4">
                                    The <strong>Strecker SxS 20G Raven</strong> is a version with modern design elements such as a black body and barrel.
                                </p>
                            </div>
                        </section>

                        <section id="analysis" className="pt-8">
                            <h2 className="wiki-h2">4. Analysis</h2>
                            <div className="wiki-p-mb">
                                <p>
                                    Considered the little sister of the Caversham Steward 12G, it has many of the same strengths as its bigger brother. It is however less powerful due to its 20 gauge shells.
                                </p>
                                <p className="mt-4">
                                    As for buckshot – in this game it is never effective. And when hunting big game rifles are preferred.
                                </p>
                            </div>
                        </section>

                        <section id="trivia" className="pt-8">
                            <h2 className="wiki-h2">5. Trivia</h2>
                            <p className="wiki-p-mb">The Strecker SxS is modeled after its real-life counterpart of the Savage/A.H. Fox Model B.</p>
                        </section>

                        <section id="gallery" className="pt-8">
                            <h2 className="wiki-h2">6. Gallery</h2>
                            <div className="wiki-gallery-grid">
                                {[
                                    { title: 'Standing', img: StreckerStanding },
                                    { title: 'Crouching', img: StreckerCrouching },
                                    { title: 'Lying', img: StreckerLying },
                                    { title: 'Iron sight', img: StreckerIronSight },
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
                            <h2 className="wiki-h2">7. Comparison to other shotguns</h2>
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
                            <WeaponsTable activeItem="Strecker SxS 20G" />
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}