import React, { useState } from 'react';
import M1IwaniecVeteran from '../../../../assets/M1IwaniecVeteran.webp';
import M1IwaniecReserve from '../../../../assets/M1IwaniecReserve.webp';
import M1IwaniecCollection from '../../../../assets/M1IwaniecCollection.webp';
import RifleDiagram from '../../../../assets/Rifle_diagram_2020.webp';
import WeaponsTable from '../../../../components/WeaponsTable';
import '../../../../styles/wiki.css';

export default function M1Iwaniec() {
  const [isTocOpen, setIsTocOpen] = useState(true);
    const [selectedVariant, setSelectedVariant] = useState('Veteran');

    const scrollTo = (e, id) => {
        e.preventDefault();
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

  // Data for Variants Slider
    const variantData = [
    { 
      name: "Veteran", 
      image: M1IwaniecVeteran,
      desc: "The default color variation, featuring a well worn walnut stock and black parkerized hardware."
    },
    { 
      name: "Reserve", 
      image: M1IwaniecReserve,
      desc: "An alternate style that features no wear, as the weapon would have looked when it was brand new. The metal sports a green parkerized finish."
    },
    { 
      name: "Collection", 
      image: M1IwaniecCollection,
      desc: "Designed to look like a newly built collector's piece. Featuring a stock made from high-quality red wood and its hardware made from stainless steel."
    }
  ];

  // Data for Ammo Table
  const ammoData = [
    { name: ".30-06 Soft-Point", pen: 19, exp: 53, class: "4-8", range: "150m", price: 590 },
    { name: ".30-06 Polymer-Tip", pen: 45, exp: 13, class: "4-8", range: "150m", price: 850 },
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

    const variants = Object.fromEntries(variantData.map((variant) => [variant.name, variant.image]));

    return (
        <div className="wiki-page">
            <div className="wiki-inner">
                <h1 className="wiki-header">M1 Iwaniec</h1>

                <div className="wiki-layout">
                    <aside className="wiki-sidebar">
                        <div className="wiki-sidebar-header">M1 Iwaniec</div>

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
                            <span>35</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Recoil</span>
                            <span>82</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Reload</span>
                            <span>49</span>
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
                            <p>"The M1 Iwaniec is a rifle of wartime heroes, characterized by the iconic 'ping' its en-bloc clip makes when it gets ejected. Reliable, balanced and semi-automatic, it's an all-rounder masterpiece that has proven its worth in the hands of soldiers, target shooters and hunters alike. Just be careful not to pinch your thumb when reloading it!"</p>
                            <cite>— In-Game Description</cite>
                        </blockquote>

                        <div className="wiki-p-mb">
                            <p>
                                The <strong>M1 Iwaniec</strong> is a semi-auto rifle chambered in .30-06. Built as a war-time weapon, the durable construction and high power made it a favorite of many hunters. The lack of accuracy does limit its use at range, however, its quick follow-up shots make it excel at close-range hunting.
                            </p>
                            <p>
                                This weapon is available as part of the <a href="#" className="wiki-link">Smoking Barrels Weapon Pack</a> DLC.
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
                                    <li><a href="#trivia" onClick={(e) => scrollTo(e, 'trivia')} className="wiki-link">4. Trivia</a></li>
                                    <li><a href="#comparison" onClick={(e) => scrollTo(e, 'comparison')} className="wiki-link">5. Comparison to other rifles</a></li>
                                </ul>
                            )}
                        </div>

                        <section id="ammo" className="pt-8">
                            <h2 className="wiki-h2">1. Ammo</h2>
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
                            <p className="wiki-p-mb">The following sights can be equipped on the M1 Iwaniec:</p>
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
                                    <strong>M1 Iwaniec Veteran</strong> is the default color variation, featuring a well worn walnut stock and black parkerized hardware.
                                </p>
                                <p>
                                    <strong>M1 Iwaniec Reserve</strong> is an alternate style that features no wear, as the weapon would have looked when it was brand new. The metal sports a green parkerized finish.
                                </p>
                                <p>
                                    <strong>M1 Iwaniec Collection</strong> is a variant that is designed to look like a newly built collector's piece. Featuring a stock made from high-quality red wood and its hardware made from stainless steel, it looks less like a wartime design and more like a bespoke rifle.
                                </p>
                            </div>
                        </section>

                        <section id="trivia" className="pt-8">
                            <h2 className="wiki-h2">4. Trivia</h2>
                            <ul className="wiki-ul">
                                <li className="wiki-li">The M1 Iwaniec family is modeled after the M1 Garand, and indeed features the trademark "ping" after ejecting it's en-bloc clip.</li>
                                <li className="wiki-li">The M1 in real life has a maximum capacity of 8 rounds, with special "5 Round Clips" being purpose made for Hunting.</li>
                                <li className="wiki-li">When Firing the last round a fully loaded clip of unfired bullets is ejected instead of it being an empty one.</li>
                                <li className="wiki-li">When having the Lightning hands skill maxxed out the Reload is changed to where the bolt locks forward when the clip is inserted as it should where as without the perk the player has to tap the bolt to make it lock forward (Which is a simple thing that is common on M1 Rifles that have seen Service).</li>
                                <li className="wiki-li">There is a Very Rare chance that when reloading the M1 that the player will give themselves "Garand Thumb" (that being the common problem soldiers experience where the bolt would slam into the thumb of the user if they don't hold the bolt back or get their thumb out quickly).</li>
                            </ul>
                        </section>

                        <section id="comparison" className="pt-8">
                            <h2 className="wiki-h2">5. Comparison to other rifles</h2>
                            <div className="wiki-table-container wiki-p-mb">
                                <div style={{ backgroundColor: 'var(--wiki-bg-sidebar)', padding: '20px' }}>
                                    <img
                                        src={RifleDiagram}
                                        alt="Rifle Diagram"
                                        style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '8px' }}
                                    />
                                </div>
                            </div>
                        </section>

                        <WeaponsTable activeItem="M1 Iwaniec" />
                    </main>
                </div>

                <div className="h-32"></div>
            </div>
        </div>
    );
}