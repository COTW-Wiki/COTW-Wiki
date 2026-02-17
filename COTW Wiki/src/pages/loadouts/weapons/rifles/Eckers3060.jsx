import React, { useState } from 'react';
import RifleDiagram from '../../../../assets/Rifle_diagram_2020.webp';
import WeaponsTable from '../../../../components/WeaponsTable';
import EckersPrestige from '../../../../assets/Eckers3006Prestige.webp';
import EckersEminence from '../../../../assets/Eckers3006Eminence.webp';
import EckersElegance from '../../../../assets/Eckers3006Elegance.webp';
import EckersStanding from '../../../../assets/Eckers_standing.webp';
import EckersCrouching from '../../../../assets/Eckers_crouching.webp';
import EckersLying from '../../../../assets/Eckers_lying.webp';
import EckersIronSight from '../../../../assets/Eckers_iron_sight.webp';
import '../../../../styles/wiki.css';

export default function App() {
  const [isTocOpen, setIsTocOpen] = useState(true);
  const [activeVariant, setActiveVariant] = useState('Prestige');

  const scrollTo = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Data for Variants Slider
  const variants = [
    { 
      name: "Prestige", 
      image: EckersPrestige,
      desc: "Classic bolt-action rifle design."
    },
    { 
      name: "Eminence", 
      image: EckersEminence,
      desc: "Matte dark gray body and barrel, brushed steel bolt."
    },
    { 
      name: "Elegance", 
      image: EckersElegance,
      desc: "Dark stained wooden body with brushed steel bolt, receiver, and barrel." 
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
    "Angler 4-8x100 Night Vision Rifle Scope",
    "Red Raptor Reflex Sight",
    "Tru-Vision Tritium Sights"
  ];

  return (
    <div className="wiki-page">
      <div className="wiki-inner">
        {/* Header Section */}
        <h1 className="wiki-header">
           Eckers .30-06
        </h1>

        {/* Main Content Layout */}
        <div className="wiki-layout">
            
            {/* Sidebar */}
            <aside className="wiki-sidebar">
                <div className="wiki-sidebar-header">
                    Eckers .30-06
                </div>

                {/* Variant Slider */}
                <div className="wiki-sidebar-section flex justify-around gap-2 bg-[var(--wiki-bg-sidebar-header)] p-1 flex-wrap">
                  {variants.map((variant) => (
                    <button
                      key={variant.name}
                      onClick={() => setActiveVariant(variant.name)}
                      type="button"
                      className={`px-1 py-1 text-xs font-bold transition-colors uppercase cursor-pointer ${
                        activeVariant === variant.name 
                          ? "text-[var(--wiki-text-sidebar)] underline" 
                          : "text-gray-500 hover:text-[var(--wiki-text-sidebar)]"
                      }`}
                    >
                      {variant.name}
                    </button>
                  ))}
                </div>
                
                {/* Image Area */}
                <div className="wiki-sidebar-image wiki-sidebar-image--contain">
                    <img 
                        src={variants.find(v => v.name === activeVariant).image} 
                        alt={activeVariant} 
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
                    <span>4.5</span>
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
                    <span>35</span>
                </div>
                <div className="wiki-sidebar-section">
                    <span className="wiki-sidebar-label">Recoil</span>
                    <span>80</span>
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
                    <span>4</span>
                </div>
            </aside>

            {/* Main Content */}
            <main className="wiki-main">
                {/* Intro Quote */}
                <blockquote className="wiki-quote">
                    <p>"The Eckers is a high-end bolt-action rifle chambered in .30-06. This ever popular cartridge is perfect for hunting large deer and antelopes at ranges up to 300m. The Eckers .30-06 complements this versatility with high precision, top of the line reliability and a beautifully crafted ergonomic frame. It's no wonder that this rifle has become a favorite among discerning big game hunters all around the world."</p>
                    <cite>— In-Game Description</cite>
                </blockquote>

                {/* Main Description */}
                <div className="wiki-p-mb">
                    <p>
                        The <strong className="text-gray-900">Eckers .30-06 Prestige</strong> is a classic bolt-action rifle that can take down a wide range of game. The larger caliber allows it to easily take down larger game such as <a href="#" className="wiki-link">Moose</a>, while also maintaining the precision to hunt <a href="#" className="wiki-link">Fallow Deer</a> without a loss of integrity.
                    </p>
                    <p>
                        This weapon is available as part of the <a href="#" className="wiki-link">Weapon Pack 3</a> DLC.
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
                            <li><a href="#trivia" onClick={(e) => scrollTo(e, 'trivia')} className="wiki-link">3. Trivia</a></li>
                            <li><a href="#variants" onClick={(e) => scrollTo(e, 'variants')} className="wiki-link">4. Variants</a></li>
                            <li><a href="#gallery" onClick={(e) => scrollTo(e, 'gallery')} className="wiki-link">5. Gallery</a></li>
                            <li><a href="#comparison" onClick={(e) => scrollTo(e, 'comparison')} className="wiki-link">6. Comparison to other rifles</a></li>
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
                   <p className="wiki-p-mb">The following sights can be equipped on the Eckers .30-06:</p>
                   <ul className="wiki-ul">
                     {sightsData.map((sight, index) => (
                       <li key={index} className="wiki-li">{sight}</li>
                     ))}
                   </ul>
                </section>

                <section id="trivia" className="pt-8">
                    <h2 className="wiki-h2">3. Trivia</h2>
                    <p className="wiki-p-mb">
                        The Eckers .30-06 is modeled after its real-life counterpart of the Sauer 202.
                    </p>
                </section>

                <section id="variants" className="pt-8">
                    <h2 className="wiki-h2">4. Variants</h2>
                    <div className="wiki-p-mb">
                        <p>
                            <strong>Eckers .30-06 Eminence</strong> is an alternate version featuring a matte dark gray body and a dark gray barrel and receiver. The only part of the rifle that is not dark gray is the bolt, which is a brushed steel.
                        </p>
                         <p className="mt-2">
                            <strong>Eckers .30-06 Elegance</strong> is a variant that features a dark stained wooden body. The bolt, receiver, and barrel are all a brushed steel design.
                        </p>
                    </div>
                </section>

                <section id="gallery" className="pt-8">
                    <h2 className="wiki-h2">5. Gallery</h2>
                    <div className="wiki-uniform-grid">
                        {[
                            { title: "Standing", img: EckersStanding }, 
                            { title: "Crouching", img: EckersCrouching }, 
                            { title: "Lying", img: EckersLying }, 
                            { title: "Iron sight", img: EckersIronSight } 
                        ].map((item, idx) => (
                            <div key={idx} className="wiki-uniform-card">
                                <div className="wiki-uniform-card-header">
                                    {item.title}
                                </div>
                                <div className="wiki-uniform-card-image">
                                    <img src={item.img} alt={item.title} />
                                </div>
                            </div>
                        ))}
                    </div>
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
                    <WeaponsTable activeItem="Eckers .30-06" />
                </section>

            </main>
        </div>
      </div>
    </div>
  );
}