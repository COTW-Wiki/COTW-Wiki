import React, { useState } from 'react';
import SolokhinMN1890AssemblyLineImage from '../../../../assets/SolokhinMN1890AssemblyLine.webp';
import SolokhinMN1890FrontlineImage from '../../../../assets/SolokhinMN1890Frontline.webp';
import SolokhinMN1890DefenseLineImage from '../../../../assets/SolokhinMN1890DefenseLine.webp';
import SolokhinMN1890StandingImage from '../../../../assets/MN1980_standing.webp';
import SolokhinMN1890LyingImage from '../../../../assets/MN1980_lying.webp';
import SolokhinMN1890FullClipReload from '../../../../assets/MN1980_full_clip_reload.webp';
import SolokhinMN1890CrouchingImage from '../../../../assets/MN1980_crouching.webp';
import SolokhinMN1890AimingImage from '../../../../assets/MN1980_aiming.webp';
import RifleDiagram from '../../../../assets/Rifle_diagram_2020.webp';
import WeaponsTable from '../../../../components/WeaponsTable';
import '../../../../styles/wiki.css';

export default function SolokhinMN1980() {
  const [isTocOpen, setIsTocOpen] = useState(true);
    const [selectedVariant, setSelectedVariant] = useState('Assembly Line');

    const scrollTo = (e, id) => {
        e.preventDefault();
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

  // Data for Variants
    const variantData = [
    { name: "Assembly Line", image: SolokhinMN1890AssemblyLineImage },
    { name: "Frontline", image: SolokhinMN1890FrontlineImage },
    { name: "Defense Line", image: SolokhinMN1890DefenseLineImage }
  ];

    const variants = Object.fromEntries(variantData.map((variant) => [variant.name, variant.image]));

  // Data for Ammo Table
  const ammoData = [
    { name: "7.62x54R Soft Point", pen: 15, exp: 17, class: "3-7", range: "150 m", price: 380 },
  ];

  // Data for Sights List
  const sightsData = [
    "Ascent 1-4x24 Rifle Scope",
    "Hyperion 4-8x42 Rifle Scope",
    "Odin 4-12x33 Rifle Scope",
    "Argus 8-16x50 Rifle Scope",
    "GenZero 1-4x20 Night Vision Rifle Scope",
    "Angler 4-8x100 Night Vision Rifle Scope"
  ];

    return (
        <div className="wiki-page">
            <div className="wiki-inner">
                <h1 className="wiki-header">Solokhin MN1890</h1>

                <div className="wiki-layout">
                    <aside className="wiki-sidebar">
                        <div className="wiki-sidebar-header">Solokhin MN1890</div>

                        <div
                            className="wiki-sidebar-section wiki-variant-bar"
                            style={{ display: 'flex', justifyContent: 'space-around', gap: 8, flexWrap: 'wrap' }}
                        >
                            {Object.keys(variants).map((variant) => (
                                <button
                                    key={variant}
                                    type="button"
                                    onClick={() => setSelectedVariant(variant)}
                                    className="wiki-link wiki-variant-button"
                                    aria-current={selectedVariant === variant ? 'true' : undefined}
                                >
                                    {variant}
                                </button>
                            ))}
                        </div>

                        <div className="wiki-sidebar-image wiki-sidebar-image--contain">
                            <img
                                src={variants[selectedVariant]}
                                alt={`Solokhin MN1890 ${selectedVariant}`}
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
                            <span>3.5</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Score</span>
                            <span>0</span>
                        </div>

                        <div className="wiki-sidebar-header" style={{ fontSize: '0.9rem' }}>Statistics</div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Accuracy</span>
                            <span>64</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Recoil</span>
                            <span>58</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Reload</span>
                            <span>60</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Hipshot</span>
                            <span>72</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Magazine</span>
                            <span>5</span>
                        </div>
                    </aside>

                    <main className="wiki-main">
                        <blockquote className="wiki-quote">
                            <p>"The Solokhin MN1890 is a combat-tested rifle that has left its mark on the pages of history books across the world. Tested in harsh environments, weathered by over a century of use, and a great hunting companion to this day, the Solokhin MN1890 is bolt-action reliability perfected. Capable of hitting targets at vast ranges, with a well-deserved notoriety for deadly penetration, this is a rifle to swear by."</p>
                            <cite>— In-Game Description</cite>
                        </blockquote>

                        <div className="wiki-p-mb">
                            <p>
                                <strong>Solokhin MN1890</strong> is a bolt-action rifle that is effective against medium-sized game from long distances. Built for military use in 1890, the rugged design, high accuracy, and 5 round magazine has found success in both active combat zones, as well as recreational hunting. In real life it is a <strong>Mosin-Nagant</strong> Specifically the Model 1938 Carbine Variant
                            </p>
                            <p>
                                This rifle is available as part of the <a href="#" className="wiki-link">Weapon Pack 2</a> DLC.
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
                            <p className="wiki-p-mb">Unlike most other rifles, the Solokhin family only has one kind of <a href="#" className="wiki-link">ammunition</a> available:</p>

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
                            <p className="wiki-p-mb">The following sights can be equipped on the Solokhin MN1890:</p>
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
                                    <strong>Solokhin MN1890 Frontline</strong> is a variant featuring a war-torn design. These rifles saw major usage throughout the early 20th century. The wood is heavily worn and pockmarked.
                                </p>
                                <p>
                                    <strong>Solokhin MN1890 Defense Line</strong> is a variant featuring an alternative wood pattern designed for defense lines during its war-time use.
                                </p>
                            </div>
                        </section>

                        <section id="analysis" className="pt-8">
                            <h2 className="wiki-h2">4. Analysis</h2>
                            <div className="wiki-p-mb">
                                <p>
                                    The Solokhin sits in an interesting spot, as it is the only other rifle next to the <a href="#" className="wiki-link">Hudzik .50 Caplock</a> (with it's <a href="#" className="wiki-link">.50 Caliber Round Ball</a> ammunition) and the <a href="#" className="wiki-link">Moradi Model 1894</a> that covers animal classes 3-7. Unlike both the Hudzik and the Moradi, it has a higher effective range (150m compared to the 100m for the Hudziks 3-7 ammo and 50m for the Moradi), higher max zeroing distance (with the long range zeroing perk unlocked) and less bullet drop beyond it's zero distance, meaning even shots at 400 meters are absolutely possible and decently effective, broadside shots and good aim provided.
                                </p>
                                <p>
                                    It's only real downside comes in the form of it's available ammunition: The Solokhin only has access to Soft-Point rounds, wich limits its overall effectiveness a bit due to the lack of higher penetration. But dont let that fool you: While on paper it's rounds have exactly the same penetration and expansion values as the Soft-Point rounds of the Ranger .243 (15pen and 17exp), the Solokhins <a href="#" className="wiki-link">7.62x54R Soft Point Bullets</a> have a decent amount more power behind them. This, in practice, means that they will usually penetrate a bit better and a bit deeper than the .243's Soft-Point rounds at similar distances and therefore also penetrate more reliably at angles (provided the angle is not too steep).
                                </p>
                                <p>
                                    The Solokhin performs best at animal classes 3-5, where it is often able to reach the lungs of an animal even with a slightly angled shot through the front (about 60 degrees), especially at classes 3-4. Ideally those shots should be taken at or below it's effective range of 150m, as this is where the round is the most powerful. These frontal shots are definitely still possible beyond 150m (especially on the lower class and more squishy, less sturdy animals), but require good aim and can be a bit more unreliably due to potential bones getting in the way, wich might stop the round and prevent it from reaching a vital organ. While being powerful enough to penetrate lower class animals frontally, it should be preferred to hit an animals lungs through it's side, especially the sturdier ones like Red Deer. Thanks to the power of the rounds, this too can be done at an angle if needed, as the penetration will usually be enough to punch through, even at 300+ meters.
                                </p>
                                <p>
                                    When it comes to animal classes 6-7, the Solokhin will generally perform best on the squishier species such as Wolves and even Black Bear, where a frontal shot at a 60 degree angle is still capable of penetrating decently into its lungs if it's taken under 150m. Again, lung shots through the side should still be preferred, as they will hit vitals much more reliably.
                                </p>
                                <p>
                                    Thanks to the fact that the <a href="#" className="wiki-link">7.62x54R Soft Point Bullets</a> pack a decent punch, even animals like Red Deer, Black Bears and Roosevelt Elk will go down at a pretty reasonable rate (considering the Solokhins class range). So, while definitely not the best at it and even with it's limitation of only having access to Soft-Point ammunition, it is still pretty decent for hunting class 6-7 game.
                                </p>
                                <p>
                                    The Solokhin is a solid performer even with it's limitation and, thanks to its class range, a great choice for reserves with lots of smaller to larger medium game, such as <a href="#" className="wiki-link">Silver Ridge Peaks</a>, <a href="#" className="wiki-link">Te Awaroa National Park</a> or <a href="#" className="wiki-link">Cuatro Colinas Game Reserve</a>. It is a great rifle for everyone who wants to try something different, likes historic rifles and/or loves the idea of hunting with an actual Mosin-Nagant.
                                </p>
                            </div>
                        </section>

                        <section id="trivia" className="pt-8">
                            <h2 className="wiki-h2">5. Trivia</h2>
                            <ul className="wiki-ul">
                                <li className="wiki-li">The Solokhin MN1890 is modeled after its real-life counterpart of the Mosin Nagant M38.</li>
                                <li className="wiki-li">Despite its name, the real life rifle didn't get adopted into military service until 1891.</li>
                                <li className="wiki-li">The specific variant of the Mosin depicted in game is the model 1938 carbine. A carbine based on the M1891/30 design that was produced from 1939 to 1945 at the Izhevsk arsenal and in 1940 and 1944 at Tula. They were intended for use by second-echelon and noncombatant troops. Very few M38 carbines were made in 1945 and are highly sought after by collectors.</li>
                            </ul>
                        </section>

                        <section id="gallery" className="pt-8">
                            <h2 className="wiki-h2">6. Gallery</h2>
                            <div className="wiki-uniform-grid">
                                {[
                                    { title: 'Standing', img: SolokhinMN1890StandingImage },
                                    { title: 'Lying', img: SolokhinMN1890LyingImage },
                                    { title: 'Full clip reload', img: SolokhinMN1890FullClipReload },
                                    { title: 'Crouching', img: SolokhinMN1890CrouchingImage },
                                    { title: 'Aiming', img: SolokhinMN1890AimingImage },
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

                            <WeaponsTable activeItem="Solokhin MN1890" />
                        </section>
                    </main>
                </div>

                <div className="h-32"></div>
            </div>
        </div>
    );
}