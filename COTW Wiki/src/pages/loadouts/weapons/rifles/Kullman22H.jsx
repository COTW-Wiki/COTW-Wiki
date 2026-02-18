import { useState } from 'react';
import '../../../../styles/wiki.css';
import WeaponsTable from '../../../../components/WeaponsTable';
import KullmanGalleryImage from '../../../../assets/COTW_Mississippi_Descriptive_Kullman_22H_.webp';
import Kullman22HWasp from '../../../../assets/Kullman22HWasp.webp';
import Kullman22HHornet from '../../../../assets/Kullman22HHornet.webp';
import Kullman22HYellowjacket from '../../../../assets/Kullman22HYellowjacket.webp';

const Kullman22H = () => {
  const [isTocOpen, setIsTocOpen] = useState(true);
  const [activeVariant, setActiveVariant] = useState('Wasp');

    const scrollTo = (e, id) => {
        e.preventDefault();
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

  // Data for Variants Slider
  const variants = [
    { 
      name: "Wasp", 
      image: Kullman22HWasp,
      desc: "The default variant, often featuring a striking yellow and black pattern."
    },
    { 
      name: "Yellowjacket", 
      image: Kullman22HYellowjacket,
      desc: "A variant featuring a chartreuse-yellow wooden body."
    },
    { 
      name: "Hornet", 
      image: Kullman22HHornet,
      desc: "A variant built with a modern gray composite plastic body."
    }
  ];

  // Data for Ammo Table
  const ammoData = [
    { name: ".22H Polymer-Tip", pen: 15, exp: 3, class: "1-2", range: "150m", price: 300 },
    { name: ".22H Soft-Point", pen: 7, exp: 10, class: "1-2", range: "150m", price: 200 },
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
            Kullman .22H
        </h1>

        {/* Main Content Layout */}
        <div className="wiki-layout">
            
            {/* Sidebar */}
            <aside className="wiki-sidebar">
                <div className="wiki-sidebar-header">
                    Kullman .22H
                </div>

                {/* Variant Slider / Tabs */}
                <div className="wiki-sidebar-section flex justify-around bg-[var(--wiki-bg-sidebar-header)] p-1">
                  {variants.map((variant) => (
                    <button
                      key={variant.name}
                      onClick={() => setActiveVariant(variant.name)}
                      className={`px-2 py-1 text-xs font-bold transition-colors uppercase cursor-pointer ${
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
                <div className="wiki-sidebar-image wiki-sidebar-image--contain min-h-[160px]">
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
                    <span>5500</span>
                </div>
                <div className="wiki-sidebar-section">
                    <span className="wiki-sidebar-label">Weight</span>
                    <span>2.5</span>
                </div>
                <div className="wiki-sidebar-section">
                    <span className="wiki-sidebar-label">Score</span>
                    <span>?</span>
                </div>

                {/* Statistics Header */}
                <div className="wiki-sidebar-header text-sm">
                    Statistics
                </div>

                {/* Statistics Data */}
                <div className="wiki-sidebar-section">
                    <span className="wiki-sidebar-label">Accuracy</span>
                    <span>100</span>
                </div>
                <div className="wiki-sidebar-section">
                    <span className="wiki-sidebar-label">Recoil</span>
                    <span>20</span>
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
                    <span>6</span>
                </div>
            </aside>

            {/* Main Content */}
            <main className="wiki-main">
                {/* Intro Quote */}
                <blockquote className="wiki-quote">
                    <p>"The Kullman .22H was designed to be the answer to all of a small game hunter's needs! Chambered in .22H, it can reliably dispatch not just rabbits and birds, but also small predators that would threaten your property and livestock. Thanks to its lightweight yet robust frame, the Kullman .22H makes for an idea rifle to carry with you during long hunts."</p>
                    <cite>— In-Game Description</cite>
                </blockquote>

                {/* Main Description */}
                <div className="wiki-p-mb">
                    <p>
                        The <strong className="text-gray-900">Kullman .22H</strong> is a bolt-action rifle chambered in .22H. Designed as to be a light-weight rifle for culling varmints, it has found great success with hunters aiming to take down small game. While lacking the power required to penetrate a deer, the high accuracy makes it a deadly weapon against hard to hit targets.
                    </p>
                    <p className="mt-2">
                        This weapon is available as part of the <a href="#" className="wiki-link">Mississippi Acres Preserve</a> DLC.
                    </p>
                </div>

                {/* Table of Contents */}
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
                            <li><a href="#analysis" onClick={(e) => scrollTo(e, 'analysis')} className="wiki-link">4. Analysis</a></li>
                            <li><a href="#trivia" onClick={(e) => scrollTo(e, 'trivia')} className="wiki-link">5. Trivia</a></li>
                        </ul>
                    )}
                </div>

                {/* Sections */}
                
                {/* Ammo Section */}
                <section id="ammo" className="pt-8">
                    <h2 className="wiki-h2">1. Ammo</h2>
                    <p className="wiki-p-mb">As with most rifles, two variants of its ammunition are available:</p>

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
                    <p className="wiki-p-mb">The following sights can be equipped on the Kullman .22H:</p>
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
                            <strong className="text-gray-900">The Kullman .22H Yellowjacket</strong> is a variant featuring a chartreuse-yellow wooden body.
                        </p>
                         <p>
                            <strong className="text-gray-900">The Kullman .22H Hornet</strong> is a variant built with a modern gray composite plastic body.
                        </p>
                    </div>
                </section>

                <section id="analysis" className="pt-8">
                    <h2 className="wiki-h2">4. Analysis</h2>
                    <div className="wiki-p-mb">
                        <p>
                            This is one of only 2 non-bow and shotgun weapons in the game that are eligible for class 1, but not limited to it (the other being the <a href="#" className="wiki-link">Mangiafico 410/45 Colt</a>). It has excellent characteristics of damage (for its classes), range, accuracy and magazine size. It eliminates the need to switch weapons when hunting birds and, for example, raccoons. Kullman is the rifle with the longest range in class 1 (150 m, when others are limited to 50-100 m).
                        </p>
                        <p className="mt-2">
                            However there are even better rifles for class 2 separately (usually class 2-4).
                        </p>
                    </div>
                </section>

                <section id="trivia" className="pt-8">
                    <h2 className="wiki-h2">5. Trivia</h2>
                    <ul className="wiki-ul">
                        <li className="wiki-li">The Kullman .22H is modeled after its real-life counterpart of the Ruger 77/22.</li>
                        <li className="wiki-li">The Variant names "Yellow jacket" and "Wasp" are both very ironic as .22H stands for .22 Hornet and while hornets are a type of wasp, Hornets are much different.</li>
                    </ul>
                    <div className="wiki-table-container wiki-p-mb">
                        <div style={{ backgroundColor: 'var(--wiki-bg-sidebar)', padding: '12px' }}>
                            <img
                                src={KullmanGalleryImage}
                                alt="Kullman .22H Gallery"
                                style={{ width: '100%', height: 'auto', display: 'block' }}
                            />
                        </div>
                    </div>
                    <p className="wiki-p-mb"><em>All variants comparisson</em></p>
                </section>

            </main>
        </div>
        
                <WeaponsTable activeItem="Kullman .22H" />
      </div>
    </div>
  );
};

export default Kullman22H;