import React, { useState } from 'react';
import RifleDiagram from '../../../../assets/Rifle_diagram_2020.webp';
import WeaponsTable from '../../../../components/WeaponsTable';
import FLSporter303Burnished from '../../../../assets/FLSporter303Burnished.webp';
import FLSporter303Polymer from '../../../../assets/FLSporter303Polymer.webp';
import FLSporter303Laminated from '../../../../assets/FLSporter303Laminated.webp';
import '../../../../styles/wiki.css';

export default function App() {
  const [isTocOpen, setIsTocOpen] = useState(true);
    const [selectedVariant, setSelectedVariant] = useState('Burnished');

  const scrollTo = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Data for Variants Slider
    const variantData = [
    { 
      name: "Burnished", 
      image: FLSporter303Burnished,
      desc: "The standard variant featuring a classic wood finish."
    },
    { 
      name: "Polymer", 
      image: FLSporter303Polymer,
            desc: "F.L. Sporter .303 Polymer is a much more modern design, swapping the wood body for one made of plastic. The barrel and receiver are also colored black to match the gray body."
    },
    { 
      name: "Laminated", 
      image: FLSporter303Laminated,
            desc: "F.L. Sporter .303 Laminated is a variant that features a wooden body with a more prominent grain. The bolt and sights are replaced with a light-gray version. This variant needs to be unlocked through the mission \"A Favor for a Friend\" in Te Awaroa National Park."
    }
  ];

    const variants = Object.fromEntries(variantData.map((variant) => [variant.name, variant.image]));

  // Data for Ammo Table
  const ammoData = [
    { name: ".303 British Soft-Point", pen: 18, exp: 56, class: "4-8", range: "150m", price: 590 },
    { name: ".303 British Polymer-Tip", pen: 42, exp: 12, class: "4-8", range: "150m", price: 850 },
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
           F.L. Sporter .303
        </h1>

        {/* Main Content Layout */}
        <div className="wiki-layout">
            
            {/* Sidebar */}
            <aside className="wiki-sidebar">
                <div className="wiki-sidebar-header">
                    F.L. Sporter .303
                </div>

                {/* Variant Slider */}
                                                                <div className="wiki-sidebar-section wiki-variant-bar" style={{ display: 'flex', justifyContent: 'space-around', gap: 8, flexWrap: 'wrap' }}>
                                    {Object.keys(variants).map((variant) => (
                    <button
                                            key={variant}
                                            onClick={() => setSelectedVariant(variant)}
                      type="button"
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
                    <span>0</span>
                </div>
                <div className="wiki-sidebar-section">
                    <span className="wiki-sidebar-label">Weight</span>
                    <span>4</span>
                </div>
                <div className="wiki-sidebar-section">
                    <span className="wiki-sidebar-label">Score</span>
                    <span>0</span>
                </div>

                {/* Statistics Header */}
                <div className="wiki-sidebar-header text-sm">
                    Statistics
                </div>

                {/* Statistics Data */}
                <div className="wiki-sidebar-section">
                    <span className="wiki-sidebar-label">Accuracy</span>
                    <span>55</span>
                </div>
                <div className="wiki-sidebar-section">
                    <span className="wiki-sidebar-label">Recoil</span>
                    <span>64</span>
                </div>
                <div className="wiki-sidebar-section">
                    <span className="wiki-sidebar-label">Reload</span>
                    <span>49</span>
                </div>
                <div className="wiki-sidebar-section">
                    <span className="wiki-sidebar-label">Hipshot</span>
                    <span>67</span>
                </div>
                <div className="wiki-sidebar-section">
                    <span className="wiki-sidebar-label">Magazine</span>
                    <span>5</span>
                </div>
            </aside>

            {/* Main Content */}
            <main className="wiki-main">
                {/* Intro Quote */}
                <blockquote className="wiki-quote">
                    <p>"The F.L. Sporter .303 is a rebuilt military surplus rifle and a great option for medium to large game. If it needs some "scrubbing up" to make it like new again that can be a very satisfying project, and once you're done you will have a rifle that's great both for hunting and target practice. The bolt action is smooth, reliable, and easy to cycle quickly."</p>
                    <cite>― In-Game Description</cite>
                </blockquote>

                {/* Main Description */}
                <div className="wiki-p-mb">
                    <p>
                        The <strong className="text-gray-900">F.L. Sporter .303 Burnished</strong> is a bolt-action rifle chambered in .303 British. Throughout its life, this rifle has seen action on the battlefield, as well as recreational use. The F.L. Sporter is very similar in its overall performance to the Eckers .30-06. It also matches the .270 Huntsman almost exactly in rifle stats, however the .303 ammunition offers more penetration and expansion.
                    </p>
                    <p className="mt-4">
                        This weapon is available as part of the <a href="#" className="wiki-link">Te Awaroa National Park</a> DLC.
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
                            <li><a href="#variants" onClick={(e) => scrollTo(e, 'variants')} className="wiki-link">3. Variants</a></li>
                            <li><a href="#trivia" onClick={(e) => scrollTo(e, 'trivia')} className="wiki-link">4. Trivia</a></li>
                            <li><a href="#comparison" onClick={(e) => scrollTo(e, 'comparison')} className="wiki-link">5. Comparison to other rifles</a></li>
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
                   <p className="wiki-p-mb">The following sights can be equipped on the F.L. Sporter .303:</p>
                   <ul className="wiki-ul">
                     {sightsData.map((sight, index) => (
                       <li key={index} className="wiki-li">{sight}</li>
                     ))}
                   </ul>
                </section>

                <section id="variants" className="pt-8">
                    <h2 className="wiki-h2">3. Variants</h2>
                    <div className="wiki-p-mb">
                        <p>
                            <strong>F.L. Sporter .303 Burnished</strong> is the standard variant, featuring a classic wood finish and burnished metal.
                        </p>
                        <p className="mt-2">
                            <strong>F.L. Sporter .303 Polymer</strong> is a much more modern design, swapping the wood body for one made of plastic. The barrel and receiver are also colored black to match the gray body.
                        </p>
                         <p className="mt-2">
                            <strong>F.L. Sporter .303 Laminated</strong> is a variant that features a wooden body with a more prominent grain. The bolt and sights are replaced with a light-gray version. This variant needs to be unlocked through the mission "A Favor for a Friend" in Te Awaroa National Park.
                        </p>
                    </div>
                </section>

                <section id="trivia" className="pt-8">
                    <h2 className="wiki-h2">4. Trivia</h2>
                    <p className="wiki-p-mb">
                        The F.L. Sporter .303 is modeled after its real-life counterpart of the Lee-Enfield No. 4 Mk 2, Sporterized, .303 British.
                    </p>
                </section>

                 <section id="comparison" className="pt-8">
                    <h2 className="wiki-h2">5. Comparison to other rifles</h2>
                     <div className="wiki-table-container">
                        <div className="bg-gray-100 overflow-hidden relative group flex justify-center items-center p-4">
                                <img 
                                src={RifleDiagram} 
                                alt="Rifle Diagram" 
                                style={{ width: '420px', height: '200px' }}
                                className="object-contain"
                                />
                        </div>
                    </div>
                </section>

            </main>
        </div>
        
        <div className="mt-8">
            <WeaponsTable activeItem="F.L. Sporter .303" />
        </div>
      </div>
    </div>
  );
}