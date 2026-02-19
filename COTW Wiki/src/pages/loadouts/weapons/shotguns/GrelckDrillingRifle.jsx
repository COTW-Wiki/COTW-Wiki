import React, { useMemo, useState } from 'react';
import '../../../../styles/wiki.css';
import GrelckClassic from '../../../../assets/GrelckDrillingRifleClassic.webp';
import GrelckCarbon from '../../../../assets/GrelckDrillingRifleCarbonFiber.webp';
import GrelckSelect from '../../../../assets/GrelckDrillingRifleSelect.webp';
import ShotgunDiagram from '../../../../assets/Shotgun_diagram_2020.webp';
import WeaponsTable from '../../../../components/WeaponsTable';
import ammunition from '../../../../data/ammunition';
import weaponAmmoMap from '../../../../data/weaponAmmoMap';

const ammoById = new Map(ammunition.map((ammo) => [ammo.id, ammo]));

// --- Main App Component ---
export default function App() {
    const [isTocOpen, setIsTocOpen] = useState(true);
    const [selectedVariant, setSelectedVariant] = useState('Classic');

    const scrollTo = (e, id) => {
        e.preventDefault();
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    const variants = {
        Classic: GrelckClassic,
        'Carbon Fiber': GrelckCarbon,
        Select: GrelckSelect,
    };

    const ammoData = useMemo(() => {
        const ammoIds = weaponAmmoMap.Grelck_Drilling_Rifle ?? [];

        return ammoIds
            .map((ammoId) => ammoById.get(ammoId))
            .filter(Boolean)
            .map((ammo) => ({
                name: ammo.name,
                pen: ammo.stats?.penetration ?? '',
                exp: ammo.stats?.expansion ?? '',
                class: ammo.stats?.class ?? '',
                range: (ammo.stats?.range ?? '').replace(/\s+/g, ''),
                price: ammo.value ?? '',
            }));
    }, []);

    const sightsData = ['Red Raptor Reflex Sight', 'Meridian 1-4x20 Shotgun Scope'];

    return (
        <div className="wiki-page">
            <div className="wiki-inner">
                <h1 className="wiki-header">Grelck Drilling Rifle</h1>

                <div className="wiki-layout">
                    <aside className="wiki-sidebar">
                        <div className="wiki-sidebar-header">Grelck Drilling Rifle</div>

                        <div
                            className="wiki-sidebar-section wiki-variant-bar"
                            style={{ display: 'flex', justifyContent: 'space-around', gap: 8, flexWrap: 'wrap' }}
                        >
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

                        <div className="wiki-sidebar-image wiki-sidebar-image--contain">
                            <img src={variants[selectedVariant]} alt={`Grelck Drilling Rifle ${selectedVariant}`} />
                        </div>

                        <div className="wiki-sidebar-header text-sm">General Information</div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Value</span>
                            <span>0</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Weight</span>
                            <span>5</span>
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
                            <span>3</span>
                        </div>
                    </aside>

                    <main className="wiki-main">
                        <blockquote className="wiki-quote">
                            <p>
                                "Versatile and elegant, this three-barreled combination gun sports twin side-by-side 16 gauge shotgun
                                barrels atop a single rifle barrel chambered for the powerful 9.3x74R big game cartridge. If you're
                                hunting waterfowl and happen to stumble upon a red deer, this gun has you covered."
                            </p>
                            <cite>— In-Game Description</cite>
                        </blockquote>

                        <div className="wiki-p-mb">
                            <p>
                                The <strong>Grelck Drilling Rifle Classic</strong> is a unique shotgun that has an additional rifle barrel,
                                making it the only combination gun of the game. It sports a standard side-by-side double-barrel design
                                for 16 gauge shells and a third barrel for a high-powered rifle round. Capable of hunting any class of
                                game by switching ammo types, it is one of the most versatile weapons available for hunters. The term
                                "Drilling" is a descriptive term used for combination guns and comes from the German expression for
                                "triplet", indicating that the gun has three barrels.
                            </p>
                            <p className="mt-4">
                                Switching ammo-types can be done by holding the reload button. The switching ability can be used for
                                hunting large groups of deer by opening with a rifle shot, then quickly switching to buckshot or slugs to
                                catch a few more kills. The gun is listed in the "shotgun" category in the game; however, when using the
                                rifle barrel, it is treated as a rifle. Therefore, it is one of only 2 weapons in the game that can grant
                                two different types of weapon score points (the other one being the Mangiafico 410/45 Colt) : When using
                                the 16 gauge shotgun ammunition, one receives shotgun score points and when using the 9.3x74R cartridge
                                one receives rifle score points.
                            </p>
                            <p className="mt-4">
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
                                    <li><a href="#ammo" onClick={(e) => scrollTo(e, 'ammo')} className="wiki-link">1. Ammo</a></li>
                                    <li><a href="#sights" onClick={(e) => scrollTo(e, 'sights')} className="wiki-link">2. Sights</a></li>
                                    <li><a href="#variants" onClick={(e) => scrollTo(e, 'variants')} className="wiki-link">3. Variants</a></li>
                                    <li><a href="#trivia" onClick={(e) => scrollTo(e, 'trivia')} className="wiki-link">4. Trivia</a></li>
                                    <li><a href="#comparison" onClick={(e) => scrollTo(e, 'comparison')} className="wiki-link">5. Comparison to other shotguns</a></li>
                                </ul>
                            )}
                        </div>

                        <section id="ammo" className="pt-8">
                            <h2 className="wiki-h2">1. Ammo</h2>
                            <p className="wiki-p-mb">The Grelck Drilling Rifle uses both 16 Gauge shotgun shells and 9.3x74R rifle ammunition:</p>

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
                            <p className="wiki-p-mb">The following sights can be equipped on the Grelck Drilling Rifle:</p>
                            <ul className="wiki-ul">
                                {sightsData.map((sight, idx) => (
                                    <li key={idx} className="wiki-li"><a href="#" className="wiki-link">{sight}</a></li>
                                ))}
                            </ul>
                        </section>

                        <section id="variants" className="pt-8">
                            <h2 className="wiki-h2">3. Variants</h2>
                            <div className="wiki-p-mb">
                                <p>Grelck Drilling Rifle Carbon Fiber is a variant that features a modern polymer body, and a black barrel and receiver.</p>
                                <p className="mt-4">Grelck Drilling Rifle Select is an alternate style aiming to look like a premium version. This includes a traditional wood body, additional inlay work, and a chromed barrel.</p>
                            </div>
                        </section>

                        <section id="trivia" className="pt-8">
                            <h2 className="wiki-h2">4. Trivia</h2>
                            <div className="wiki-p-mb">
                                <p>The Grelck Drilling Rifle is modeled after its real-life counterpart of the JP Sauer and Sohn Model 3000.</p>
                                <p className="mt-4">The Grelck Appears to be based off the M30 Luftwaffe Drilling With the side by side shotgun with the rifle round underneath layout and the 9.3x74R Rifle round, however the M30 Drilling has its shotgun barrels chambered in 12 Guage rather than 16 gauge as depicted in the game.</p>
                                <p className="mt-4">Switching ammo-types can be done by holding the reload button. The switching ability can be used for hunting large groups of deer by opening with a rifle shot, then quickly switching to buckshot or slugs to catch a few more kills. The gun is listed in the "shotgun" category in the game; however, when using the rifle barrel, it is treated as a rifle. Therefore, it is one of only 2 weapons in the game that can grant two different types of weapon score points (the other one being the Mangiafico 410/45 Colt) : When using the 16 gauge shotgun ammunition, one receives shotgun score points and when using the 9.3x74R cartridge one receives rifle score points.</p>
                            </div>
                        </section>

                        <section id="comparison" className="pt-8">
                            <h2 className="wiki-h2">5. Comparison to other shotguns</h2>
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