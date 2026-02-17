import { useState } from 'react';
import JohanssonImg from '../../../../assets/Johansson.450.webp';
import WeaponsTable from '../../../../components/WeaponsTable';

const Johansson450 = () => {
  const [isTocOpen, setIsTocOpen] = useState(true);

  // Data for Ammo Table
  const ammoData = [
    { name: ".450 Magnum Soft-Point", pen: 21, exp: 60, class: "4-9", range: "150m", price: 680 },
    { name: ".450 Magnum Polymer-Tip", pen: 42, exp: 14, class: "4-9", range: "150m", price: 920 },
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
            Johansson .450
        </h1>

        {/* Main Content Layout */}
        <div className="wiki-layout">
            
            {/* Sidebar */}
            <aside className="wiki-sidebar">
                <div className="wiki-sidebar-header">
                    Johansson .450
                </div>
                
                {/* Image Area */}
                <div className="wiki-sidebar-image wiki-sidebar-image--contain">
                    <img
                        src={JohanssonImg}
                        alt="Johansson .450"
                        onError={(e) => { e.target.src = JohanssonImg }}
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
                    <span>40</span>
                </div>
                <div className="wiki-sidebar-section">
                    <span className="wiki-sidebar-label">Recoil</span>
                    <span>50</span>
                </div>
                <div className="wiki-sidebar-section">
                    <span className="wiki-sidebar-label">Reload</span>
                    <span>40</span>
                </div>
                <div className="wiki-sidebar-section">
                    <span className="wiki-sidebar-label">Hipshot</span>
                    <span>30</span>
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
                    <p>"The JOHANSSON .450 is a bolt-action rifle designed for taking down medium large game. Its rugged construction and smooth operation offers a perfect balance between modern innovation and traditional styling. Delivering consistent and reliable performance, this rifle is perfect for any challenging conditions you may encounter in the wild."</p>
                    <cite>― In-Game Description</cite>
                </blockquote>

                {/* Main Description */}
                <div className="wiki-p-mb">
                    <p>
                        The Johansson .450 is a rifle perfect for hunting medium-large game.
                    </p>
                    <p>
                        It is loosely based on the real life Ruger 450 Rifle.
                    </p>
                    <p className="mt-2">
                        This weapon is available as part of the <a href="#" className="wiki-link">Hunters' Choice: Bolt-Action Rifle Pack</a> DLC.
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
                        </ul>
                    )}
                </div>

                {/* Sections */}
                
                {/* Ammo Section */}
                <section id="ammo" className="pt-8">
                    <h2 className="wiki-h2">1. Ammo</h2>
                    <p className="wiki-p-mb">The Johansson .450 uses .450 Magnum ammunition:</p>

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
                   <p className="wiki-p-mb">The following sights can be equipped on the Johansson .450:</p>
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
                            Although the overall characteristics are passable, it has three major downsides:
                        </p>
                        <ul className="wiki-ul mt-2">
                            <li className="wiki-li">
                                The accuracy of 40 is slightly higher than the .30-06 and 7mm rifles, but it's less accurate than other alternatives—or equally accurate to the Olsson .308. This means the scope sway will be a bit worse than others.
                            </li>
                            <li className="wiki-li">
                                The .450 cartridge has worse penetration and expansion than the .303, .308, and .30-06. Those cartridges also cover Class 8 unlike the .450.
                            </li>
                            <li className="wiki-li">
                                The unusual coverage of classes 4-7 can make it an awkward fit, since players mainly use rows: [1, 2-4, 4-8, 9] or [1-2, 3-6, 7-9]. How the Johansson will fit depends on what rifles you have and what animals are on the reserve. Using Yukon Valley as an example, you can bring a 2-4 rifle for foxes (2), the Johansson to cover wolves and caribou (6), and a 7-9 rifle for moose and bison (8 & 9).
                            </li>
                        </ul>
                    </div>
                </section>

            </main>
        </div>
        
        <div className="mt-8">
            <WeaponsTable activeItem="Johansson .450" />
        </div>
      </div>
    </div>
  );
};

export default Johansson450;