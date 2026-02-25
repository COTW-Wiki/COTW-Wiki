import MangiaficoColtFlatBlack from '../../../../assets/Mangiafico41045ColtFlatBlack.webp';
import MangiaficoColtPolishedSteel from '../../../../assets/Mangiafico41045ColtPolishedSteel.webp';
import MangiaficoColtMuertos from '../../../../assets/Mangiafico41045ColtMuertos.webp';
import HandgunsDiagram from '../../../../assets/Handgun_diagram_2020.webp';
import MangiaficoCrouching from '../../../../assets/Mangiafico_crouching.webp';
import MangiaficoStanding from '../../../../assets/Mangiafico_standing.webp';
import MangiaficoLying from '../../../../assets/Mangiafico_lying.webp';
import MangiaficoIronsight from '../../../../assets/Mangiafico_iron_sight.webp';
import { useState } from 'react';
import WeaponsTable from '../../../../components/WeaponsTable';
import '../../../../styles/wiki.css';

// --- Embedded WeaponsTable Component removed ---

// --- Main App Component ---
export default function App() {
  const [isTocOpen, setIsTocOpen] = useState(true);
    const [selectedVariant, setSelectedVariant] = useState('Flat Black');

    // Data for Variants Slider
    const variants = {
        'Flat Black': {
            image: MangiaficoColtFlatBlack,
            desc: 'The standard variant featuring a durable matte black finish.',
        },
        Muertos: {
            image: MangiaficoColtMuertos,
            desc: "A special edition variant with a unique 'Day of the Dead' inspired design.",
        },
        'Polished Steel': {
            image: MangiaficoColtPolishedSteel,
            desc: 'A variant featuring a shiny polished steel finish.',
        },
    };

  // Data for Ammo Table
  const ammoData = [
    { name: ".45 Colt Flat Nose Hard-Cast", pen: 17, exp: 70, class: "2-5", range: "50m", price: 530 },
    { name: ".45 Colt Full Metal Jacket", pen: 55, exp: 6, class: "2-5", range: "50m", price: 600 },
    { name: ".410 Birdshot", pen: 0, exp: 0, class: "1", range: "25m", price: 200 },
  ];

  // Data for Sights List
  const sightsData = [
    "Goshawk Redeye 2-4x20 Handgun Scope",
    "Hermes 3-7x33 Handgun-Shotgun Scope"
  ];

  return (
        <div className="wiki-page">
            <div className="wiki-inner">
                <h1 className="wiki-header">Mangiafico 410/45 Colt</h1>

                <div className="wiki-layout">
                    <aside className="wiki-sidebar">
                        <div className="wiki-sidebar-header">Mangiafico 410/45 Colt</div>

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
                            <span>0</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Weight</span>
                            <span>1.5</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Score</span>
                            <span>0</span>
                        </div>

                        <div className="wiki-sidebar-header" style={{ fontSize: '0.9rem' }}>Statistics</div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Accuracy</span>
                            <span>40</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Recoil</span>
                            <span>70</span>
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
                            <p>"This sleek, modern revolver is the ideal companion for hunters looking for versatility at short distances. Load with .410 shotshells for hunting small game and waterfowl or with .45 Long Colt for small big game species such as roe deer and springbok. A small handgun for all small game."</p>
                            <cite>— In-Game Description</cite>
                        </blockquote>

                        <div className="wiki-p-mb">
                            <p>
                                The <strong>Mangiafico 410/45 Colt Flat Black</strong> is a unique handgun as it can load both standard .45 Long Colt rounds, in addition to .410 birdshot shells. This makes it a very versatile sidearm for hunters.
                            </p>
                            <p>
                                This weapon is available as part of the <a href="#" className="wiki-link">Weapon Pack 2</a> DLC.
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
                            <p className="wiki-p-mb">As with most pistols, two variants of its <a href="#" className="wiki-link">ammunition</a> are available:</p>
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
                            <p className="wiki-p-mb">The following sights can be equipped on the Mangiafico 410/45 Colt:</p>
                            <ul className="wiki-ul">
                                {sightsData.map((sight, idx) => (
                                    <li key={idx} className="wiki-li"><a href="#" className="wiki-link">{sight}</a></li>
                                ))}
                            </ul>
                        </section>

                        <section id="variants" className="pt-8">
                            <h2 className="wiki-h2">3. Variants</h2>
                            <div className="wiki-p-mb">
                                <p><strong>Flat Black</strong> has a discreet neutral look.</p>
                                <p><strong>Colt Muertos</strong> is a luxurious looking variation featuring a brushed gold plated body, with a black grip, inlaid with Día de Muertos decoration and symbology.</p>
                                <p><strong>Polished Steel</strong> is an alternate style with a polished stainless steel body and grip. The grip is patterned in a hexagonal formation.</p>
                            </div>
                        </section>

                        <section id="analysis" className="pt-8">
                            <h2 className="wiki-h2">4. Analysis</h2>
                            <div className="wiki-p-mb">
                                <p>
                                    The Mangiafico sits in a unique spot, since it´s ability to fire both birdshot shells as well as regular revolver ammunition means it can effectively take out animals from class 1 -5. It is one of only 2 non bow or shotgun weapons in the game able to effectively kill animals of class 1 and higher (the other being the <a href="#" className="wiki-link">Kullman .22H</a>).
                                </p>
                                <p>
                                    The <a href="#" className="wiki-link">.45 Colt Full Metal Jacket Bullet</a> retains great penetration throughout its performance range and although its stopping power will decrease a bit with higher class animals, it is still pretty decent at class 5. In addition, this revolver is capable of firing <a href="#" className="wiki-link">.410 Birdshot</a> shells wich can kill all class 1 animals with full integrity.
                                </p>
                                <p>
                                    The downside is that these shells pack less power and pellets compared to regular birdshot shells used in shotguns and thus will generally have a harder time dealing with bigger birds like geese and turkeys, sometimes taking significantly longer to down them. The upside is that you have a total of 6 rounds you can fire in succession before needing to reload, wich compensates a bit for the lack of pellets and power. The <a href="#" className="wiki-link">.410 Birdshot</a> performs best on rabbits, hares and smaller birds up to ducks and pheasants. Like most birdshot shells, even with the zeroing perk in effect the pellets tend to drop a little more at range, so it is advisable to aim just a tiny bit higher when using them.
                                </p>
                                <div
                                    style={{
                                        backgroundColor: 'var(--wiki-bg-sidebar-image)',
                                        borderLeft: '4px solid var(--wiki-border-accent)',
                                        padding: 12,
                                        marginTop: 12,
                                    }}
                                >
                                    <p><strong>In conclusion:</strong></p>
                                    <p>
                                        A fantastic little handgun wich performs great throughout class 2-5. And while noticably weaker than regular shotguns, it´s birdshot rounds perform decently well on smaller class 1 animals up to ducks and pheasants, while struggling a bit with bigger ones.
                                    </p>
                                    <p>
                                        If you want to specifically hunt birds (and dont want to challenge yourself), pack an actual shot gun instead of this revolver, as it wil be more powerful and better suited to deal with even the biggest birds. In any other case, the Mangiafico is a fantastic choice for a light and versatile little handgun with the added ability to hunt the occasional bird or rabbits, wich thanks to its low weight will fit into many loadouts.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section id="trivia" className="pt-8">
                            <h2 className="wiki-h2">5. Trivia</h2>
                            <ul className="wiki-ul">
                                <li className="wiki-li">The Mangiafico 410/45 is modeled after its real-life counterpart of the Taurus Judge.</li>
                                <li className="wiki-li">It is the only pistol in game that can use shotgun rounds.</li>
                                <li className="wiki-li">Muertos means "dead" in Spanish. In Spanish-colonial culture, death is not an unambiguously negative concept, it is highly romanticized, and there is a culture of holidays and decorations around it.</li>
                            </ul>
                        </section>

                        <section id="gallery" className="pt-8">
                            <h2 className="wiki-h2">6. Gallery</h2>
                            <div className="wiki-gallery-grid">
                                {[
                                    { title: 'Standing', img: MangiaficoStanding },
                                    { title: 'Crouching', img: MangiaficoCrouching },
                                    { title: 'Lying', img: MangiaficoLying },
                                    { title: 'Iron sight', img: MangiaficoIronsight },
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

                        <WeaponsTable activeItem="Mangiafico 410/45 Colt" />
                    </main>
                </div>
            </div>
        </div>
  );
}