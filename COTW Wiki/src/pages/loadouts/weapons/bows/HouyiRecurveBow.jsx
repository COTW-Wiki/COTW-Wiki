import { useState } from 'react';
import WeaponsTable from '../../../../components/WeaponsTable';
import BowsDiagram from '../../../../assets/Bows.webp';
import HouyiRecurveBowAimingStanding from '../../../../assets/Houyi_aiming_2.webp';
import HouyiRecurveBowStanding from '../../../../assets/Houyi_pose_1.webp';
import HouyiRecurveBowAimingLying from '../../../../assets/Houyi_aiming_1.webp';
import HouyiRecurveBowLying from '../../../../assets/Houyi_pose_3.webp';
import HouyiRecurveBowMoonlight from '../../../../assets/HouyiRecurveBowMoonlight.webp';
import HouyiRecurveBowHiddenDragon from '../../../../assets/HouyiRecurveBowHiddenDragon.webp';
import HouyiRecurveBow from '../../../../assets/HouyiRecurveBow.webp';
import HouyiRecurveBowSnakeskin from '../../../../assets/HouyiRecurveBowSnakeskin.webp';
import '../../../../styles/wiki.css';

// --- Main App Component ---
export default function App() {
  const [isTocOpen, setIsTocOpen] = useState(true);
    const [selectedVariant, setSelectedVariant] = useState('Standard');

  // Image URLs
  const HouyiImg = "https://static.wikia.nocookie.net/thehuntercotw/images/f/f6/Bow_Houyi_Recurve_Bow.png";
  const RifleDiagram = "https://static.wikia.nocookie.net/thehuntercotw/images/0/07/Rifle_Comparison_Chart.png"; // Placeholder for bow comparison
  
  // Using the main image as a placeholder for gallery items

    // Data for Variants Slider
    const variants = {
        Standard: {
            image: HouyiRecurveBow,
            desc: 'A traditional recurve bow based on ancient Chinese designs featuring intricate decorations.',
        },
        'Hidden Dragon': {
            image: HouyiRecurveBowHiddenDragon,
            desc: 'A variant featuring a dark, sleek finish.',
        },
        Moonlight: {
            image: HouyiRecurveBowMoonlight,
            desc: 'A variant with a pale, moon-like aesthetic.',
        },
        Snakeskin: {
            image: HouyiRecurveBowSnakeskin,
            desc: 'A variant with a snakeskin pattern.',
        },
    };

  // Data for Ammo Table
  const ammoData = [
    { name: "350 Grain Broadhead", pen: "15", exp: "0", class: "1-3", range: "20m", price: 500 },
    { name: "540 Grain Broadhead", pen: "75", exp: "0", class: "4-7", range: "20m", price: 750 },
    { name: "700 Grain Broadhead", pen: "90", exp: "0", class: "8-9", range: "20m", price: 900 },
  ];

  // Data for Sights List
  const sightsData = [
    "None (Traditional Bow)"
  ];

  return (
        <div className="wiki-page">
            <div className="wiki-inner">
                <h1 className="wiki-header">Houyi Recurve Bow</h1>

                <div className="wiki-layout">
                    <aside className="wiki-sidebar">
                        <div className="wiki-sidebar-header">Houyi Recurve Bow</div>

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
                                onError={(e) => { e.target.src = HouyiImg; }}
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
                            <span>38</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Recoil</span>
                            <span>20</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Reload</span>
                            <span>100</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Hipshot</span>
                            <span>10</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Magazine</span>
                            <span>1</span>
                        </div>
                    </aside>

                    <main className="wiki-main">
                        <blockquote className="wiki-quote">
                            <p>"In Chinese mythology, when 10 Suns rose from Earth and turned the world into a barren waste, the archer, Houyi shot down 9 of the 10 Suns, leaving the last one alive. Based on the designs of traditional Chinese Qing recurve bows, the Houyi Recurve Bow has ample penetration and can take down medium game at short ranges."</p>
                            <cite>― In-Game Description</cite>
                        </blockquote>

                        <div className="wiki-p-mb">
                            <p>
                                The <strong>Houyi Recurve Bow</strong> is not a recurve bow, but actually a reflex bow. It was the first bow added to the game that wasn't a compound bow. When compared to the compound bows, it has a higher peak draw weight, and higher accuracy. This comes at the cost of being unable to use any sight.
                            </p>
                            <p>
                                This weapon is available as part of the <a href="#" className="wiki-link">Weapon Pack 1</a> DLC.
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
                                    <li className="wiki-li"><a href="#ammo" className="wiki-link">1. Arrows</a></li>
                                    <li className="wiki-li"><a href="#sights" className="wiki-link">2. Sights</a></li>
                                    <li className="wiki-li"><a href="#variants" className="wiki-link">3. Variants</a></li>
                                    <li className="wiki-li"><a href="#gallery" className="wiki-link">4. Gallery</a></li>
                                    <li className="wiki-li"><a href="#comparison" className="wiki-link">5. Comparison to other bows</a></li>
                                </ul>
                            )}
                        </div>

                        <section id="ammo" className="pt-8">
                            <h2 className="wiki-h2">1. Arrows</h2>
                            <p className="wiki-p-mb">With the Silver Ridge Peaks DLC release, bows can now use 3 kinds of arrows:</p>
                            <div className="wiki-table-container">
                                <table className="wiki-table">
                                    <thead>
                                        <tr className="text-white" style={{ backgroundColor: 'var(--wiki-bg-sidebar-header)' }}>
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
                                                <td className="wiki-td"><strong>{item.name}</strong></td>
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
                            <p className="wiki-p-mb">The Houyi Recurve Bow is a traditional bow and cannot be equipped with any sights.</p>
                        </section>

                        <section id="variants" className="pt-8">
                            <h2 className="wiki-h2">3. Variants</h2>
                            <div className="wiki-p-mb">
                                <p>The <strong>Houyi Recurve Bow Hidden Dragon</strong> is a variant with a black and gold bow, with red dragons on the limbs.</p>
                                <p>The <strong>Houyi Recurve Bow Moonlight</strong> is an alternate style featuring a monochromatic black and gray bow, with subtle patterns on the limbs.</p>
                                <p>The <strong>Houyi Recurve Bow Snakeskin</strong> is a version that looks identical to the normal one, but with the bows limbs being covered in a snakeskin pattern.</p>
                            </div>
                        </section>

                        <section id="gallery" className="pt-8">
                            <h2 className="wiki-h2">4. Gallery</h2>
                            <div className="wiki-gallery-grid">
                                {[
                                    { title: 'Standing', img: HouyiRecurveBowStanding },
                                    { title: 'Aiming (Standing)', img: HouyiRecurveBowAimingStanding },
                                    { title: 'Lying', img: HouyiRecurveBowLying },
                                    { title: 'Aiming (Lying)', img: HouyiRecurveBowAimingLying },
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
                            <h2 className="wiki-h2">5. Comparison to other bows</h2>
                            <div className="wiki-p-mb">
                                <img src={BowsDiagram} alt="Bow Comparison Chart" style={{ width: 400, height: 200, objectFit: 'contain', maxWidth: '100%' }} />
                            </div>
                        </section>

                        <WeaponsTable />
                    </main>
                </div>
            </div>
        </div>
  );
}