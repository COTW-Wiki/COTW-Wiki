import React, { useState } from 'react';
import WeaponsTable from '../../../../components/WeaponsTable';
import ForsEliteImg from '../../../../assets/ForsElite.300.webp';
import '../../../../styles/wiki.css';

// --- Main Component ---
export default function ForsElite300() {
  const [isTocOpen, setIsTocOpen] = useState(true);

    const scrollTo = (e, id) => {
        e.preventDefault();
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

  // Data for Ammo Table
  const ammoData = [
    { name: ".300 Magnum Soft-Point", pen: 21, exp: 60, class: "7-9", range: "150m", price: 720 },
    { name: ".300 Magnum Polymer-Tip", pen: 42, exp: 14, class: "7-9", range: "150m", price: 950 },
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
           Fors Elite .300
        </h1>

        {/* Main Content Layout */}
        <div className="wiki-layout">
            
            {/* Sidebar */}
            <aside className="wiki-sidebar">
                <div className="wiki-sidebar-header">
                    Fors Elite .300
                </div>

                {/* Image Area */}
                <div className="wiki-sidebar-image wiki-sidebar-image--contain">
                    <img 
                        src={ForsEliteImg} 
                        alt="Fors Elite .300" 
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
                    <span>4.0</span>
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
                    <span>85</span>
                </div>
                <div className="wiki-sidebar-section">
                    <span className="wiki-sidebar-label">Recoil</span>
                    <span>40</span>
                </div>
                <div className="wiki-sidebar-section">
                    <span className="wiki-sidebar-label">Reload</span>
                    <span>49</span>
                </div>
                <div className="wiki-sidebar-section">
                    <span className="wiki-sidebar-label">Hipshot</span>
                    <span>80</span>
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
                    <p>"Experience unmatched speed and accuracy with the FORS ELITE .300. This bolt action shines bright in fast-paced scenarios with its rapid reloading mechanism and superior hip shot capability. The large magazine size allows for extended shooting sessions making it perfect for those intense hinting adventures."</p>
                    <cite>― In-Game Description</cite>
                </blockquote>

                {/* Main Description */}
                <div className="wiki-p-mb">
                    <p>The <strong className="text-gray-900">Fors Elite .300</strong> is a rifle perfect for hunting medium sized game.</p>
                    <p className="mt-2">This weapon is available as part of the <a href="#" className="wiki-link">Hunters' Choice: Bolt-Action Rifle Pack</a> DLC.</p>
                </div>

                {/* Table of Contents */}
                <div className="wiki-toc-panel wiki-p-mb">
                    <div className="wiki-toc-panel-header">
                        <span className="wiki-toc-panel-title">Contents</span>
                        <span className="wiki-toc-panel-toggle" onClick={() => setIsTocOpen(!isTocOpen)}>[{isTocOpen ? 'hide' : 'show'}]</span>
                    </div>
                    {isTocOpen && (
                        <ul className="wiki-list-plain text-sm space-y-1">
                            <li><a href="#ammo" onClick={(e) => scrollTo(e, 'ammo')} className="wiki-link">1. Ammo</a></li>
                            <li><a href="#sights" onClick={(e) => scrollTo(e, 'sights')} className="wiki-link">2. Sights</a></li>
                            <li><a href="#analysis" onClick={(e) => scrollTo(e, 'analysis')} className="wiki-link">3. Analysis</a></li>
                            <li><a href="#trivia" onClick={(e) => scrollTo(e, 'trivia')} className="wiki-link">4. Trivia</a></li>
                        </ul>
                    )}
                </div>

                {/* Sections */}
                
                {/* Ammo Section */}
                <section id="ammo" className="pt-8">
                    <h2 className="wiki-h2">1. Ammo</h2>
                    
                    <p className="wiki-p-mb">The Fors Elite .300 uses standard <a href="#" className="wiki-link">.300 Magnum ammunition</a>:</p>

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
                   <p className="wiki-p-mb">The following sights can be equipped on the Fors Elite .300:</p>
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
                            This is a great weapon for its classes, lethal, long-range, accurate, with a wide magazine. It is difficult to find any disadvantages.
                        </p>
                        <p className="mt-2">
                             However, the most important thing is that having an atypical coverage of classes 3-6, it gives a unique opportunity to assemble a row of weapons for all classes in a new way. Previously, players mainly used this row: [1, 2-4, 4-8, 9], or their row had duplicate numbers. Now, having Fors Elite, players can close the row like this: [1-2, 3-6, 7-9], thus lightening the inventory for one weapon.
                        </p>
                    </div>
                </section>

                <section id="trivia" className="pt-8">
                    <h2 className="wiki-h2">4. Trivia</h2>
                    <p className="wiki-p-mb">
                        The Fors Elite 300 is modeled after its real life counterpart of the Mossberg MVP Patrol Rifle.
                    </p>
                </section>

            </main>
        </div>
        
        <div className="mt-8">
            <WeaponsTable activeItem="Fors Elite .300" />
        </div>
      </div>
    </div>
  );
}