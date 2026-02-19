import { useState } from 'react';
import WeaponsTable from '../../../../components/WeaponsTable';
import Zarza10308Moonlight from '../../../../assets/Zarza-10308Moonlight.webp';
import Zarza10308Stalker from '../../../../assets/Zarza-10308Stalker.webp';
import Zarza10 from '../../../../assets/Zarza10.webp';
import '../../../../styles/wiki.css';

const Zarza10308 = () => {
  const [isTocOpen, setIsTocOpen] = useState(true);
    const [selectedVariant, setSelectedVariant] = useState('Moonlight');

    const scrollTo = (e, id) => {
        e.preventDefault();
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

  // Data for Variants Slider
    const variantData = [
    { 
      name: "Moonlight", 
      image: Zarza10308Moonlight,
            desc: "ZARZA-10 Moonlight is a color variation that features a rose gold aluminum stock and a black parkerized barrel."
    },
    { 
      name: "Stalker", 
      image: Zarza10308Stalker,
            desc: "ZARZA-10 Stalker is a color variation that features a green hexagon patterned camouflage on its stock and a black parkerized barrel."
    }
  ];

  // Data for Ammo Table
  const ammoData = [
    { name: ".308 Soft-Point", pen: 19, exp: 53, class: "4-8", range: "150m", price: 440 },
    { name: ".308 Polymer-Tip", pen: 42, exp: 12, class: "4-8", range: "150m", price: 600 },
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

    const variants = Object.fromEntries(variantData.map((variant) => [variant.name, variant.image]));

    return (
        <div className="wiki-page">
            <div className="wiki-inner">
                <h1 className="wiki-header">ZARZA-10 .308</h1>

                <div className="wiki-layout">
                    <aside className="wiki-sidebar">
                        <div className="wiki-sidebar-header">ZARZA-10 .308</div>

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
                                    e.currentTarget.src = 'https://static.wikia.nocookie.net/thehuntercotw/images/0/0c/Rifle_ZARZA-10_308.png';
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
                            <span>4.0</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Score</span>
                            <span>0</span>
                        </div>

                        <div className="wiki-sidebar-header" style={{ fontSize: '0.9rem' }}>Statistics</div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Accuracy</span>
                            <span>45</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Recoil</span>
                            <span>75</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Reload</span>
                            <span>59</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Hipshot</span>
                            <span>50</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Magazine</span>
                            <span>5</span>
                        </div>
                    </aside>

                    <main className="wiki-main">
                        <blockquote className="wiki-quote">
                            <p>"One of the most popular and versatile rifles ever, the ZARZA-10 .308 is incredibly common among hunters thanks to its reliability and beautiful, modular and compact design. Chambered in .308 and with a custom 24 inch barrel, it's the ultimate companion when it comes to medium to large-sized prey."</p>
                            <cite>— In-Game Description</cite>
                        </blockquote>

                        <div className="wiki-p-mb">
                            <p>
                                The <strong>ZARZA-10 .308</strong> is the first rifle chambered with .308 ammo. It is very comparable to, but slightly better than, the M1 Iwaniec .30-06. The ZARZA-10 is a semi-automatic rifle that excels at close, medium, and long ranges and allows for quick follow up shots.
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
                                    <li><a href="#variants" onClick={(e) => scrollTo(e, 'variants')} className="wiki-link">3. Variants</a></li>
                                    <li><a href="#trivia" onClick={(e) => scrollTo(e, 'trivia')} className="wiki-link">4. Trivia</a></li>
                                    <li><a href="#gallery" onClick={(e) => scrollTo(e, 'gallery')} className="wiki-link">5. Gallery</a></li>
                                </ul>
                            )}
                        </div>

                        <section id="ammo" className="pt-8">
                            <h2 className="wiki-h2">1. Ammo</h2>
                            <p className="wiki-p-mb">The Zarza-10 .308 uses .308 Winchester ammunition:</p>
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
                            <p className="wiki-p-mb">The following sights can be equipped on the Zarza-10 .308:</p>
                            <ul className="wiki-ul">
                                {sightsData.map((sight, idx) => (
                                    <li key={idx} className="wiki-li">{sight}</li>
                                ))}
                            </ul>
                        </section>

                        <section id="variants" className="pt-8">
                            <h2 className="wiki-h2">3. Variants</h2>
                            <div className="wiki-p-mb">
                                <p>
                                    <strong>ZARZA-10 Moonlight</strong> is a color variation that features a rose gold aluminum stock and a black parkerized barrel.
                                </p>
                                <p>
                                    <strong>ZARZA-10 Stalker</strong> is a color variation that features a green hexagon patterned camouflage on its stock and a black parkerized barrel.
                                </p>
                            </div>
                        </section>

                        <section id="trivia" className="pt-8">
                            <h2 className="wiki-h2">4. Trivia</h2>
                            <p className="wiki-p-mb">ZARZA-10 .308 is modeled after its real-life counterpart of the AR-10, which is manufactured in various models by various companies.</p>
                        </section>

                        <section id="gallery" className="pt-8 wiki-p-mb">
                            <h2 className="wiki-h2">5. Gallery</h2>
                            <div className="wiki-uniform-grid">
                                {[
                                    { title: 'Promotional', img: Zarza10 },
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

                        <WeaponsTable activeItem="Zarza-10 .308" />
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Zarza10308;