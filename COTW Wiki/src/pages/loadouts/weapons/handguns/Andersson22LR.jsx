import WeaponsTable from "../../../../components/WeaponsTable";
import AnderssonLRWoodsman from "../../../../assets/Andersson22LRWoodsman.webp";
import AnderssonLRDefender from "../../../../assets/Andersson22LRDefender.webp";
import AnderssonLRMarksman from "../../../../assets/Andersson22LRMarksman.webp";
import HandgunsDiagram from '../../../../assets/Handgun_diagram_2020.webp';
import { useState } from 'react';
import AnderssonCrouching from '../../../../assets/Andersson_crouching.webp';
import AnderssonLying from '../../../../assets/Andersson_lying.webp';
import AnderssonStanding from '../../../../assets/Andersson_standing.webp';
import AnderssonIronSight from '../../../../assets/Andersson_iron_sight.webp';
import '../../../../styles/wiki.css';

// --- Embedded WeaponsTable Component removed to use imported one ---

// --- Main App Component ---
export default function App() {
  const [isTocOpen, setIsTocOpen] = useState(true);
    const [selectedVariant, setSelectedVariant] = useState('Woodsman');

  // Image URLs
  const AnderssonImg = "https://static.wikia.nocookie.net/thehuntercotw/images/6/6f/Handgun_Andersson_22LR.png";
  const RifleDiagram = "https://static.wikia.nocookie.net/thehuntercotw/images/0/07/Rifle_Comparison_Chart.png"; // Placeholder for handgun comparison
  
    // Data for Variants Slider
    const variants = {
        Woodsman: {
            image: AnderssonLRWoodsman,
            desc: 'The standard variant featuring a textured wood grip and black slide.',
        },
        Marksman: {
            image: AnderssonLRMarksman,
            desc: 'A variant with a black polymer grip for a more tactical look.',
        },
        Defender: {
            image: AnderssonLRDefender,
            desc: 'A variant with a black polymer grip for a more tactical look.',
        },
    };

  // Data for Ammo Table
  const ammoData = [
    { name: ".22LR Truncated Cone", pen: 17, exp: 1, class: "1", range: "100m", price: 250 },
    { name: ".22LR Jacketed Hollow-Point", pen: 5, exp: 10, class: "1", range: "100m", price: 200 },
  ];

  // Data for Sights List
  const sightsData = [
    "Goshawk Redeye 2-4x20 Handgun Scope",
    "Hermes 3-7x33 Handgun-Shotgun Scope",
    "Red Raptor Reflex Sight",
    "Marksman Exakt Reflex Sight",
    "Tru-Vision Tritium Sights"
  ];

  return (
        <div className="wiki-page">
            <div className="wiki-inner">
                <h1 className="wiki-header">Andersson .22LR</h1>

                <div className="wiki-layout">
                    <aside className="wiki-sidebar">
                        <div className="wiki-sidebar-header">Andersson .22LR</div>

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
                                onError={(e) => { e.target.src = AnderssonImg; }}
                            />
                        </div>

                        <div className="wiki-sidebar-header" style={{ fontSize: '0.9rem' }}>General Information</div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Value</span>
                            <span>0</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Weight</span>
                            <span>1</span>
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
                            <span>10</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Reload</span>
                            <span>49</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Hipshot</span>
                            <span>86</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Magazine</span>
                            <span>10</span>
                        </div>
                    </aside>

                    <main className="wiki-main">
                        <blockquote className="wiki-quote">
                            <p>"The Andersson .22LR is a small caliber semi-automatic pistol. Its compact size, negligible recoil and impressive firing rate make it practical for a wide variety of applications, from target shooting to small game hunting and personal defense. This .22LR pistol shoots as beautifully as it looks and features a variety of customization options, as is customary for Andersson firearms."</p>
                            <cite>― In-Game Description</cite>
                        </blockquote>

                        <div className="wiki-p-mb">
                            <p>
                                The <strong>Andersson .22LR</strong> is a semi-automatic pistol, ideal for hunting small game such as rabbits. While the .22 LR cartridge lacks the penetration to be effective against small deer, it excels at hunting rabbits. Thanks to the large magazine, it can offer quick follow up shots when shooting multiple targets in rapid succession.
                            </p>
                            <p>
                                This weapon is available as part of the <a href="#" className="wiki-link">Weapon Pack 3</a> DLC.
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
                                    <li className="wiki-li"><a href="#ammo" className="wiki-link">1. Ammo</a></li>
                                    <li className="wiki-li"><a href="#sights" className="wiki-link">2. Sights</a></li>
                                    <li className="wiki-li"><a href="#variants" className="wiki-link">3. Variants</a></li>
                                    <li className="wiki-li"><a href="#analysis" className="wiki-link">4. Analysis</a></li>
                                    <li className="wiki-li"><a href="#trivia" className="wiki-link">5. Trivia</a></li>
                                    <li className="wiki-li"><a href="#gallery" className="wiki-link">6. Gallery</a></li>
                                    <li className="wiki-li"><a href="#comparison" className="wiki-link">7. Comparison to other handguns</a></li>
                                </ul>
                            )}
                        </div>

                        <section id="ammo" className="pt-8">
                            <h2 className="wiki-h2">1. Ammo</h2>
                            <p className="wiki-p-mb">This handgun has two types of ammo available:</p>

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

                            <p className="wiki-p-mb">This is the same ammo that Virant and Zarza-15 use.</p>
                        </section>

                        <section id="sights" className="pt-8">
                            <h2 className="wiki-h2">2. Sights</h2>
                            <p className="wiki-p-mb">The Andersson .22LR supports standard handgun optics:</p>
                            <ul className="wiki-ul">
                                {sightsData.map((sight, idx) => (
                                    <li key={idx} className="wiki-li"><a href="#" className="wiki-link">{sight}</a></li>
                                ))}
                            </ul>
                        </section>

                        <section id="variants" className="pt-8">
                            <h2 className="wiki-h2">3. Variants</h2>
                            <div className="wiki-p-mb">
                                <p>The <strong>Andersson .22LR Marksman</strong> is an alternative style with a brushed gold exterior and a black grip.</p>
                                <p>The <strong>Andersson .22LR Defender</strong> is a variant with a black steel body, and a military brown grip.</p>
                            </div>
                        </section>

                        <section id="analysis" className="pt-8">
                            <h2 className="wiki-h2">4. Analysis</h2>
                            <div className="wiki-p-mb">
                                <p>
                                    This pistol is a functional copy of Virant rifle. All their characteristics are absolutely identical, apart from the weight. The Andersson weighs noticeably less. And they are the best non-shotguns for hunting class 1 game.
                                </p>
                            </div>
                        </section>

                        <section id="trivia" className="pt-8">
                            <h2 className="wiki-h2">5. Trivia</h2>
                            <ul className="wiki-ul">
                                <li className="wiki-li">The Andersson .22LR is modeled after its real-life counterpart of the Ruger Mark II.</li>
                                <li className="wiki-li">It&#39;s the only gun in the game that is incapable to use the Zeroing perk to get a zero beyond the effective range of it&#39;s ammunition</li>
                                <li className="wiki-li">The Woodsman variant seems to be a reference to the Colt Woodsman, which Ruger incorporated into their pistol designs.</li>
                                <li className="wiki-li">Despite being aesthetically similar to the &quot;Luger P08&quot; pistol, Ruger is not related to the German company in anyway.</li>
                                <li className="wiki-li">Ruger&#39;s first pistol, the Ruger Standard chambered in .22lr, is considered the most popular target pistol of all time.</li>
                            </ul>
                        </section>

                        <section id="gallery" className="pt-8">
                            <h2 className="wiki-h2">6. Gallery</h2>
                            <div className="wiki-gallery-grid">
                                {[
                                    { title: 'Standing', img: AnderssonStanding },
                                    { title: 'Crouching', img: AnderssonCrouching },
                                    { title: 'Lying', img: AnderssonLying },
                                    { title: 'Iron sight', img: AnderssonIronSight },
                                ].map((item, idx) => (
                                    <div key={idx} className="wiki-gallery-item">
                                        <div className="wiki-gallery-placeholder">
                                            <img src={item.img} alt={item.title} />
                                        </div>
                                        <div className="wiki-gallery-label">{item.title}</div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section id="comparison" className="pt-8">
                            <h2 className="wiki-h2">7. Comparison to other handguns</h2>
                            <div className="wiki-p-mb">
                                <img
                                    src={HandgunsDiagram}
                                    alt="Handgun Comparison Chart"
                                    style={{ width: '400px', height: '200px', maxWidth: '100%' }}
                                    className="border border-gray-300 shadow-md"
                                />
                            </div>
                        </section>

                        <WeaponsTable />
                    </main>
                </div>
            </div>
        </div>
  );
}