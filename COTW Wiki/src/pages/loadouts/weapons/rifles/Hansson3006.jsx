import React, { useState } from 'react';
import HanssonImg from '../../../../assets/Hansson_.30-06.webp';
import WeaponsTable from '../../../../components/WeaponsTable';

// --- Main Component ---
export default function Hansson3006() {
  const [isTocOpen, setIsTocOpen] = useState(true);

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
            Hansson .30-06
        </h1>

        {/* Main Content Layout */}
        <div className="wiki-layout">
            
            {/* Sidebar */}
            <aside className="wiki-sidebar">
                <div className="wiki-sidebar-header">
                    Hansson .30-06
                </div>

                {/* Image Area */}
                <div className="wiki-sidebar-image wiki-sidebar-image--contain">
                    <img 
                        src={HanssonImg} 
                        alt="Hansson .30-06" 
                    />
                </div>

                {/* General Information Header */}
                <div className="wiki-sidebar-header text-sm">
                    General Information
                </div>

                {/* General Information Data */}
                <div className="wiki-sidebar-section">
                    <span className="wiki-sidebar-label">Value</span>
                    <span>12000</span>
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
                    <span>43</span>
                </div>
                <div className="wiki-sidebar-section">
                    <span className="wiki-sidebar-label">Recoil</span>
                    <span>78</span>
                </div>
                <div className="wiki-sidebar-section">
                    <span className="wiki-sidebar-label">Reload</span>
                    <span>55</span>
                </div>
                <div className="wiki-sidebar-section">
                    <span className="wiki-sidebar-label">Hipshot</span>
                    <span>60</span>
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
                    <p>"The HANSSON .30-06 is a semi-automatic rifle designed for quick action and hip fire in the harshest environments. Built with exceptional attention to detail, it offers an extremely sooth action making sure you get fast follow up shots with ease. Chambered in with .30-06, it's the ideal rifle for hunters targeting medium to big game."</p>
                    <cite>― In-Game Description</cite>
                </blockquote>

                {/* Main Description */}
                <div className="wiki-p-mb">
                    <p>
                        The <strong className="text-gray-900">Hansson .30-06</strong> is a rifle meant for hunting medium and big game.
                    </p>
                    <p className="mt-2">
                        It appears to be inspired by the VEPR 30-06 hunting rifles in the receiver and magazine but has a handguard and stock similar to the civilian models of the SAIGA-12 shotgun. However the stock and handguard are made in a wood finish instead of polymer like SAIGA-12s.
                    </p>
                    <p className="mt-2">
                        This weapon is available as part of the <a href="#" className="wiki-link">Rapid Hunt Rifle Pack</a> DLC.
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
                            <li><a href="#analysis" onClick={(e) => scrollTo(e, 'analysis')} className="wiki-link">3. Analysis</a></li>
                            <li><a href="#trivia" onClick={(e) => scrollTo(e, 'trivia')} className="wiki-link">4. Trivia</a></li>
                        </ul>
                    )}
                </div>

                {/* Sections */}
                
                {/* Ammo Section */}
                <section id="ammo" className="pt-8">
                    <h2 className="wiki-h2">1. Ammo</h2>
                    
                    <p className="wiki-p-mb">The Hansson .30-06 uses standard <a href="#" className="wiki-link">.30-06 ammunition</a>:</p>

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
                   <p className="wiki-p-mb">The following sights can be equipped on the Hansson .30-06:</p>
                   <ul className="wiki-ul">
                     {sightsData.map((sight, index) => (
                       <li key={index} className="wiki-li">{sight}</li>
                     ))}
                   </ul>
                </section>

                <section id="analysis" className="pt-8">
                    <h2 className="wiki-h2">3. Analysis</h2>
                    <div className="wiki-p-mb">
                        <p>Coming soon...</p>
                    </div>
                </section>

                <section id="trivia" className="pt-8">
                    <h2 className="wiki-h2">4. Trivia</h2>
                    <p className="wiki-p-mb">
                        The Hansson .30-06 is modeled after its real-life counterpart of the Finnish made Valmet Petra. Valmet Petra was exported with name of Valmet Hunter. The one in the game represents the first generation model.
                    </p>
                </section>

            </main>
        </div>
        
        <div className="mt-8">
            <WeaponsTable activeItem="Hansson .30-06" />
        </div>
      </div>
    </div>
  );
}