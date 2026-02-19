import React, { useState } from 'react';
import CanningMagnumFrontierImage from '../../../../assets/300CanningMagnumFrontier.webp';
import CanningMagnumMarchesImage from '../../../../assets/300CanningMagnumMarches.webp';
import CanningMagnumUnnamedImage from '../../../../assets/300CanningMagnumUnnamed1.webp';
import CanningMagnumUnnamedCamoImage from '../../../../assets/300CanningMagnumUnnamed2.webp';
import RifleDiagram from '../../../../assets/Rifle_diagram_2020.webp';
import WeaponsTable from '../../../../components/WeaponsTable';
import '../../../../styles/wiki.css';

export default function App() {
  const [isTocOpen, setIsTocOpen] = useState(true);
    const [selectedVariant, setSelectedVariant] = useState('Frontier');

  const scrollTo = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Data for Variants
    const variantData = [
    { 
      name: "Frontier", 
      image: CanningMagnumFrontierImage,
      desc: "Default synthetic stock."
    },
    { 
      name: "Marches", 
      image: CanningMagnumMarchesImage,
      desc: "Classic rifle style with stained wood body and black barrel."
    },
    { 
      name: "Unreleased Design", 
      image: CanningMagnumUnnamedImage, 
      desc: "A camo variant that was likely planned but not released or is a special edition." 
    },
    { 
      name: "Unreleased Design 2", 
      image: CanningMagnumUnnamedCamoImage, 
      desc: "A camo variant that was likely planned but not released or is a special edition." 
    }
  ];

    const variants = Object.fromEntries(variantData.map((variant) => [variant.name, variant.image]));

  // Data for Ammo Table
  const ammoData = [
    { name: ".300 Magnum Polymer-Tip", pen: 42, exp: 14, class: "7-9", range: "150m", price: 950 },
    { name: ".300 Magnum Soft Point", pen: 21, exp: 60, class: "7-9", range: "150m", price: 720 },
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
        {/* Header Section */}
        <h1 className="wiki-header">
           .300 Canning Magnum
        </h1>

        {/* Main Content Layout */}
        <div className="wiki-layout">
            
            {/* Sidebar */}
            <aside className="wiki-sidebar">
                <div className="wiki-sidebar-header">
                    .300 Canning Magnum
                </div>

                {/* Variant Selector */}
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
                
                {/* Image Area */}
                <div className="wiki-sidebar-image wiki-sidebar-image--contain">
                    <img 
                        src={variants[selectedVariant]} 
                        alt={selectedVariant} 
                    />
                </div>

                {/* General Information Header */}
                <div className="wiki-sidebar-header text-sm">
                    General Information
                </div>

                {/* General Information Data */}
                <div className="wiki-sidebar-section">
                    <span className="wiki-sidebar-label">Value</span>
                    <span>75000</span>
                </div>
                <div className="wiki-sidebar-section">
                    <span className="wiki-sidebar-label">Weight</span>
                    <span>4</span>
                </div>
                <div className="wiki-sidebar-section">
                    <span className="wiki-sidebar-label">Score</span>
                    <span>6092</span>
                </div>

                {/* Statistics Header */}
                <div className="wiki-sidebar-header text-sm">
                    Statistics
                </div>

                {/* Statistics Data */}
                <div className="wiki-sidebar-section">
                    <span className="wiki-sidebar-label">Accuracy</span>
                    <span>80</span>
                </div>
                <div className="wiki-sidebar-section">
                    <span className="wiki-sidebar-label">Recoil</span>
                    <span>90</span>
                </div>
                <div className="wiki-sidebar-section">
                    <span className="wiki-sidebar-label">Reload</span>
                    <span>49</span>
                </div>
                <div className="wiki-sidebar-section">
                    <span className="wiki-sidebar-label">Hipshot</span>
                    <span>35</span>
                </div>
                <div className="wiki-sidebar-section">
                    <span className="wiki-sidebar-label">Magazine</span>
                    <span>4</span>
                </div>
            </aside>

            {/* Main Content */}
            <main className="wiki-main">
                {/* Intro Quote */}
                <blockquote className="wiki-quote">
                    <p>"Developed by Alaskan gunsmiths for moose hunting, the .300 Canning Magnum is the go-to rifle for large game in the Yukon Region. Favored by marksmen and hunters alike for its accuracy, the .300 magnum cartridge is effective for long-range hunting up to distances of 400 m."</p>
                    <cite>— In-Game Description</cite>
                </blockquote>

                {/* Main Description */}
                <div className="wiki-p-mb">
                    <p>
                        The <strong>.300 Canning Magnum Frontier</strong> is a large-caliber bolt-action rifle for hunting large game. It fills the gap between the <a href="#" className="wiki-link">7mm Regent Magnum</a> and the <a href="#" className="wiki-link">Rangemaster 338</a>. The high accuracy and very flat bullet trajectory has made it quite popular among hunters as it can be used at ranges up to 400 meters.
                    </p>
                    <p>
                        The rifle was released as part of the <a href="#" className="wiki-link">Yukon Valley</a> DLC.
                    </p>
                </div>

                {/* Table of Contents */}
                <div className="wiki-toc-panel wiki-p-mb">
                    <div className="wiki-toc-panel-header">
                        <span className="wiki-toc-panel-title">Contents</span>
                        <button onClick={() => setIsTocOpen(!isTocOpen)} className="wiki-toc-panel-toggle">[{isTocOpen ? 'hide' : 'show'}]</button>
                    </div>
                    {isTocOpen && (
                        <ul className="wiki-list-plain text-sm space-y-1">
                            <li><a href="#ammo" onClick={(e) => scrollTo(e, 'ammo')} className="wiki-link">1. Ammo</a></li>
                            <li><a href="#sights" onClick={(e) => scrollTo(e, 'sights')} className="wiki-link">2. Sights</a></li>
                            <li><a href="#analysis" onClick={(e) => scrollTo(e, 'analysis')} className="wiki-link">3. Analysis</a>
                                <ul className="wiki-list-plain ml-4">
                                    <li><a href="#analogues" onClick={(e) => scrollTo(e, 'analogues')} className="wiki-link">3.1 Comparison with analogues</a></li>
                                </ul>
                            </li>
                            <li><a href="#variants" onClick={(e) => scrollTo(e, 'variants')} className="wiki-link">4. Variants</a></li>
                            <li><a href="#trivia" onClick={(e) => scrollTo(e, 'trivia')} className="wiki-link">5. Trivia</a></li>
                            <li><a href="#comparison" onClick={(e) => scrollTo(e, 'comparison')} className="wiki-link">6. Comparison to other rifles</a></li>
                            <li><a href="#ref" onClick={(e) => scrollTo(e, 'ref')} className="wiki-link">7. References</a></li>
                        </ul>
                    )}
                </div>

                {/* Sections */}
                
                {/* Ammo Section */}
                <section id="ammo" className="pt-8">
                    <h2 className="wiki-h2">1. Ammo</h2>
                    <p className="wiki-p-mb">As with most rifles, two variants of its <a href="#" className="wiki-link">ammunition</a> are available:</p>
                    
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
                            {ammoData.map((item, index) => (
                                <tr key={index}>
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
                   <p className="wiki-p-mb">The following sights can be equipped on the .300 Canning Magnum:</p>
                   <ul className="wiki-ul">
                     {sightsData.map((sight, index) => (
                       <li key={index} className="wiki-li">{sight}</li>
                     ))}
                   </ul>
                </section>

                <section id="analysis" className="pt-8">
                    <h2 className="wiki-h2">3. Analysis</h2>
                    <div className="wiki-p-mb">
                        <p>
                            Since its release, the .300 Canning Magnum was widely considered the best class 7-9 rifle in the game, thanks to both its stopping power and very flat bullet trajectory as well as featuring a 4 round magazine wich allows for potential follow-up shots. But that place has since been taken by the <a href="#" className="wiki-link">Arzyna .300 Mag Tactical</a> (due to its improved features allowing for more ease of use) and the <a href="#" className="wiki-link">Vallgarda .375</a> (wich uses the most powerful round out of all current 7-9 rifles up to 200). Still the .300 Canning Magnum stands the best long range rifle in it's class and 3rd best biggame rifle overall. It performs well on its classes, managing to down them relatively quickly. And thanks to its very flat bullet trajectory / low bullet drop, even shots at 400 meters become very manageable.
                        </p>
                        <p className="mt-2">
                            The .300 Canning Magnum requires a rifle score of 6092 to unlock and, like most other weapons that come as part of a Reserve DLC, must be bought with ingame money. The ingame price for the .300 Canning Magnum is 75000.
                        </p>

                         {/* Comparison Subsection */}
                        <div id="analogues" className="mt-6">
                            <h3 className="wiki-h3">Comparison with analogues</h3>
                            <p className="mt-2">
                                Canning Magnum and Arzyna use the same ammunition and have the same power and penetration, but the Arzyna has a number of advantages: it does not cost in-game money and has no restrictions on player score. In terms of performance it has slightly better accuracy (a stat that, despite its misleading name, does not effect the accuracy of the weapon itself, but rather the wobble when aiming down the scope, as tested and proven by german youtuber shfty), significantly lower recoil and higher fire rate (stats which will most benefit players who like to take quick follow-up shots), a slightly faster reload and a magazine size of 5 rounds compared to the .300 Cannings 4 round magazine. The .300 Canning Magnum however still retains its advantage of a flatter overall bullet trajectory and hence less bulletdrop, as well as being identical in terms of stopping power.
                            </p>
                            <p className="mt-2">
                                The Vallgarda .375, while sacrificing some ease of use for followup shots due to its very high recoil of 100 (same as both .338 rifles), boast the most powerful round out of every biggame rifle currently in the game up to a distance of around 200 meters, at wich it manages to penetrate both lungs of a moose on a broadside shot. At further ranges it is at least roughly equal in power to the .338.
                            </p>
                        </div>
                    </div>
                </section>

                <section id="variants" className="pt-8">
                    <h2 className="wiki-h2">4. Variants</h2>
                    <div className="wiki-p-mb">
                        <p>
                            <strong>.300 Canning Magnum Marches</strong> is an alternate style that looks like a classic rifle. It features a stained wood body, and a black barrel.
                        </p>
                    </div>
                </section>

                <section id="trivia" className="pt-8">
                    <h2 className="wiki-h2">5. Trivia</h2>
                    <p className="wiki-p-mb">
                        Modeled after its real-life counterpart, the Weatherby Mark V Deluxe chambered in .300 Weatherby Magnum.
                    </p>
                </section>

                <section id="comparison" className="pt-8">
                    <h2 className="wiki-h2">6. Comparison to other rifles</h2>
                     <div className="wiki-table-container wiki-p-mb">
                        <div style={{ backgroundColor: 'var(--wiki-bg-sidebar)', padding: '20px' }}>
                            <img 
                                src={RifleDiagram} 
                                alt="Rifle Diagram" 
                                style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '8px' }}
                            />
                        </div>
                    </div>
                    <WeaponsTable activeItem=".300 Canning Magnum" />
                </section>

                <section id="ref" className="pt-8">
                    <h2 className="wiki-h2">7. References</h2>
                    <ol className="wiki-ol">
                         <li>
                             <a href="https://www.youtube.com/watch?v=bmpkJ8wxdhQ" target="_blank" rel="noopener noreferrer" className="wiki-link">
                                https://www.youtube.com/watch?v=bmpkJ8wxdhQ
                             </a>
                         </li>
                    </ol>
                </section>

            </main>
        </div>
      </div>
    </div>
  );
}