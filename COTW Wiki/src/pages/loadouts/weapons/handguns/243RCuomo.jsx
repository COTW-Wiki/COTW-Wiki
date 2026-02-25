import { useState } from 'react';
import WeaponsTable from '../../../../components/WeaponsTable';
import RCuomoCompetitor from '../../../../assets/243RCuomoCompetitor.webp';
import RCuomoChampion from '../../../../assets/243RCuomoChampion.webp';
import '../../../../styles/wiki.css';

// --- Main App Component ---
export default function App() {
  const [isTocOpen, setIsTocOpen] = useState(true);
    const [selectedVariant, setSelectedVariant] = useState('Competitor');

  // Image URLs
  const CuomoImg = "https://static.wikia.nocookie.net/thehuntercotw/images/4/4e/Handgun_243_R_Cuomo.png";
  const RifleDiagram = "https://static.wikia.nocookie.net/thehuntercotw/images/0/07/Rifle_Comparison_Chart.png"; // Placeholder for handgun comparison
  
  // Using the main image as a placeholder for gallery items
  const CuomoStanding = CuomoImg;
  const CuomoCrouching = CuomoImg;
  const CuomoLying = CuomoImg;
  const CuomoIronSight = CuomoImg;

    // Data for Variants Slider
    const variants = {
        Competitor: {
            image: RCuomoCompetitor,
            desc: 'The standard variant designed for competitive shooting with a sleek finish.',
        },
        Champion: {
            image: RCuomoChampion,
            desc: 'A variant with a more ornate design.',
        },
    };

  // Data for Ammo Table
  const ammoData = [
    { name: ".243 Soft-Point", pen: 15, exp: 17, class: "2-6", range: "150m", price: 0 },
    { name: ".243 Polymer-Tip", pen: 30, exp: 4, class: "2-6", range: "150m", price: 530 },
  ];

  // Data for Sights List
  const sightsData = [
    "Ascent 1-4x24 Rifle Scope",
    "Hyperion 4-8x42 Rifle Scope",
    "Odin 4-12x33 Rifle Scope",
    "Argus 8-16x50 Rifle Scope",
    "GenZero 1-4x20 Night Vision Rifle Scope",
    "Angler 4-8x100 Night Vision Rifle Scope",
    "Red Raptor Reflex Sight"
  ];

    return (
        <div className="wiki-page">
            <div className="wiki-inner">
                <h1 className="wiki-header">.243 R. Cuomo</h1>

                <div className="wiki-layout">
                    <aside className="wiki-sidebar">
                        <div className="wiki-sidebar-header">.243 R. Cuomo</div>

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
                                onError={(e) => {
                                    e.currentTarget.src = CuomoImg;
                                }}
                            />
                        </div>

                        <div className="wiki-sidebar-header" style={{ fontSize: '0.9rem' }}>General Information</div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Value</span>
                            <span>0</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Weight</span>
                            <span>1.0</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Score</span>
                            <span>0</span>
                        </div>

                        <div className="wiki-sidebar-header" style={{ fontSize: '0.9rem' }}>Statistics</div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Accuracy</span>
                            <span>62</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Recoil</span>
                            <span>48</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Reload</span>
                            <span>50</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Hipshot</span>
                            <span>17</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Magazine</span>
                            <span>1</span>
                        </div>
                    </aside>

                    <main className="wiki-main">
                        <blockquote className="wiki-quote">
                            <p>"This beautifully crafted break-action, single-shot pistol has earned its place among hunting and target shooting enthusiasts alike due to its versatility and wide array of barrel variants. Chambered in .243 caliber with the possibility to attach any regular rifle scope. A great companion for any hunting endeavor."</p>
                            <cite>― In-Game Description</cite>
                        </blockquote>

                        <div className="wiki-p-mb">
                            <p>The .243 R. Cuomo is a single shot handgun.</p>
                            <p>
                                This weapon is available as part of the <a href="#" className="wiki-link">Assorted Sidearms Pack</a> DLC.
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
                                    <li><a href="#analysis" className="wiki-link">3. Analysis</a></li>
                                </ul>
                            )}
                        </div>

                        <section id="ammo" className="pt-8">
                            <h2 className="wiki-h2">1. Ammo</h2>
                            <p className="wiki-p-mb">This handgun has two types of ammo available:</p>
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
                            <p className="wiki-p-mb">The following sights can be equipped on the .243 R. Cuomo:</p>
                            <ul className="wiki-ul">
                                {sightsData.map((sight, idx) => (
                                    <li key={idx} className="wiki-li"><a href="#" className="wiki-link">{sight}</a></li>
                                ))}
                            </ul>
                        </section>

                        <section id="analysis" className="pt-8">
                            <h2 className="wiki-h2">3. Analysis</h2>
                            <div className="wiki-p-mb">
                                <p>
                                    This pistol is basically a pocket version of the Ranger .243, being able to use the same ammunition and scopes. It has almost the same recoil and reload speed while also being significantly lighter than the .243. It has however significantly less accuracy (wich, despite it´s name, does not describe the actual accuracy of a weapon but rather the wobble you´ll get when aiming) and is also a singleshot weapon, meaning you have to reload after each shot and cant take quick followup shots. Careful target selection and shot placement provided, this is a great little sidearm that can find its way in many loadouts thanks to its low weight and versatility.
                                </p>
                            </div>
                        </section>

                        <WeaponsTable activeItem=".243 R. Cuomo" />
                    </main>
                </div>
            </div>
        </div>
    );
}