import { useState } from 'react';
import WeaponsTable from '../../../../components/WeaponsTable';
import Zarza15223Midnight from '../../../../assets/Zarza-15223Midnight.webp';
import Zarza15223Ambusher from '../../../../assets/Zarza-15223Ambusher.webp';
import Zarza223 from '../../../../assets/Zarza223.webp';
import '../../../../styles/wiki.css';

const Zarza15223 = () => {
    const [isTocOpen, setIsTocOpen] = useState(true);
    const [selectedVariant, setSelectedVariant] = useState('Midnight');

    const scrollTo = (e, id) => {
        e.preventDefault();
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    const variantData = [
        {
            name: 'Midnight',
            image: Zarza15223Midnight,
            desc: 'The standard tactical black finish.',
        },
        {
            name: 'Ambusher',
            image: Zarza15223Ambusher,
            desc: 'A variant featuring a camouflage pattern suitable for ambushing prey.',
        },
    ];

    const ammoData = [
        { name: '.223 Soft-Point', pen: 10, exp: 12, class: '2-4', range: '150m', price: 220 },
        { name: '.223 Polymer-Tip', pen: 20, exp: 3, class: '2-4', range: '150m', price: 350 },
    ];

    const sightsData = [
        'Ascent 1-4x24 Rifle Scope',
        'Hyperion 4-8x42 Rifle Scope',
        'Odin 4-12x33 Rifle Scope',
        'Argus 8-16x50 Rifle Scope',
        'GenZero 1-4x20 Night Vision Rifle Scope',
        'Angler 4-8x100 Night Vision Rifle Scope',
        'Red Raptor Reflex Sight',
    ];

    const variants = Object.fromEntries(variantData.map((variant) => [variant.name, variant.image]));

    return (
        <div className="wiki-page">
            <div className="wiki-inner">
                <h1 className="wiki-header">ZARZA-15 .223</h1>

                <div className="wiki-layout">
                    <aside className="wiki-sidebar">
                        <div className="wiki-sidebar-header">ZARZA-15 .223</div>

                        <div className="wiki-sidebar-section wiki-variant-bar" style={{ display: 'flex', justifyContent: 'space-around', gap: 8, flexWrap: 'wrap' }}>
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

                        <div className="wiki-sidebar-image wiki-sidebar-image--contain" style={{ backgroundColor: 'var(--wiki-bg-sidebar)' }}>
                            <img
                                src={variants[selectedVariant]}
                                alt={selectedVariant}
                                style={{ width: '268.4px', height: '134.2px' }}
                                onError={(e) => {
                                    e.currentTarget.src = 'https://static.wikia.nocookie.net/thehuntercotw/images/6/69/Rifle_ZARZA-15_223.png';
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
                            <span>3.0</span>
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
                            <span>25</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Reload</span>
                            <span>59</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Hipshot</span>
                            <span>86</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Magazine</span>
                            <span>5</span>
                        </div>
                    </aside>

                    <main className="wiki-main">
                        <blockquote className="wiki-quote">
                            <p>"ZARZA-15 .223 is a modern rifle included in the Modern Rifles DLC weapon pack."</p>
                            <cite>— In-Game Description</cite>
                        </blockquote>

                        <div className="wiki-p-mb">
                            <p>
                                The <strong>Zarza-15 .223</strong> is a modern hunting rifle perfect for small game hunts such as <a href="#" className="wiki-link">Gray Fox</a>, <a href="#" className="wiki-link">Red Fox</a>, <a href="#" className="wiki-link">Coyotes</a> or <a href="#" className="wiki-link">Roe Deer</a>. The ZARZA is based off of the M16 Rifle, specifically the M16A2.
                            </p>
                            <p>
                                This weapon is available as part of the <a href="#" className="wiki-link">Modern Rifle Pack</a> DLC.
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
                                    <li><a href="#trivia" onClick={(e) => scrollTo(e, 'trivia')} className="wiki-link">3. Trivia</a></li>
                                    <li><a href="#gallery" onClick={(e) => scrollTo(e, 'gallery')} className="wiki-link">4. Gallery</a></li>
                                </ul>
                            )}
                        </div>

                        <section id="ammo" className="pt-8">
                            <h2 className="wiki-h2">1. Ammo</h2>
                            <p className="wiki-p-mb">The Zarza-15 .223 uses .223 Remington ammunition:</p>

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
                            <p className="wiki-p-mb">The following sights can be equipped on the Zarza-15 .223:</p>
                            <ul className="wiki-ul">
                                {sightsData.map((sight, idx) => (
                                    <li key={idx} className="wiki-li">{sight}</li>
                                ))}
                            </ul>
                        </section>

                        <section id="trivia" className="pt-8">
                            <h2 className="wiki-h2">3. Trivia</h2>
                            <ul className="wiki-ul">
                                <li className="wiki-li">The ZARZA-15 .223 is modeled after its real-life counterpart of the AR-15 which is produced in various models by various companies. This specific model is modeled after the M16, the designation given to ARs adopted by the US Military during the Vietnam War.</li>
                                <li className="wiki-li">All AR-15s chambered for 5.56 can take .223, since they have the same diameter bullet. However this does not work the other way around.</li>
                            </ul>
                        </section>

                        <section id="gallery" className="pt-8 wiki-p-mb">
                            <h2 className="wiki-h2">4. Gallery</h2>
                            <div className="wiki-uniform-grid">
                                {[
                                    { title: 'Promotional', img: Zarza223 },
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

                        <WeaponsTable activeItem="Zarza-15 .223" />
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Zarza15223;