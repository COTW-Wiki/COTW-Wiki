import React, { useState } from 'react';
import WeaponsTable from '../../../../components/WeaponsTable';
import GrandHareRifleImage from '../../../../assets/GandhareRifle.webp';
import GrandHareRifleIronSight from '../../../../assets/Grandhare_Rifle_IronSight.webp';

export default function GandhareRifle() {
  const [isTocOpen, setIsTocOpen] = useState(true);

  // Data for Ammo Table
  const ammoData = [
    { name: ".577/450 Soft-Point", pen: 25, exp: 65, class: "4-9", range: "150m", price: 680 },
    { name: ".577/450 Polymer-Tip", pen: 50, exp: 15, class: "4-9", range: "150m", price: 920 },
  ];

  return (
    <div className="wiki-page">
      <div className="wiki-inner">
        {/* Header Section */}
        <h1 className="wiki-header">
            Gandhare Rifle
        </h1>

        {/* Main Content Layout */}
        <div className="wiki-layout">
            
            {/* Sidebar */}
            <aside className="wiki-sidebar">
                <div className="wiki-sidebar-header">
                    Gandhare Rifle
                </div>

                {/* Image Area */}
                <div className="wiki-sidebar-image wiki-sidebar-image--contain">
                    <img 
                        src={GrandHareRifleImage} 
                        alt="Gandhare Rifle" 
                    />
                </div>

                {/* General Information Header */}
                <div className="wiki-sidebar-header text-sm">
                    General Information
                </div>

                {/* General Information Data */}
                <div className="wiki-sidebar-section">
                    <span className="wiki-sidebar-label">Value</span>
                    <span>40000</span>
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
                    <span>30</span>
                </div>
                <div className="wiki-sidebar-section">
                    <span className="wiki-sidebar-label">Recoil</span>
                    <span>70</span>
                </div>
                <div className="wiki-sidebar-section">
                    <span className="wiki-sidebar-label">Reload</span>
                    <span>70</span>
                </div>
                <div className="wiki-sidebar-section">
                    <span className="wiki-sidebar-label">Hipshot</span>
                    <span>15</span>
                </div>
                <div className="wiki-sidebar-section">
                    <span className="wiki-sidebar-label">Magazine</span>
                    <span>1</span>
                </div>
            </aside>

            {/* Main Content */}
            <main className="wiki-main">
                {/* Intro Quote */}
                <blockquote className="wiki-quote">
                    <p>"The Gandhare Rifle, a late 19th-century breech-loading firearm, emerges as a testament to Nepali innovation both within the military and hunting realms. Based on a renowned British rifle, it was made using a unique manufacturing provess that lent each piece its distinct characteristics. After its heyday had passed, most Gandhares were lost to time; the few remaining relics are not only a testament to their creators' ingenuity and creftsmanship, but also symbols of a major chapter in Nepali history."</p>
                    <cite>— In-Game Description</cite>
                </blockquote>

                {/* Main Description */}
                <div className="wiki-p-mb">
                    <p>
                        The <strong className="text-gray-900">Gandhare Rifle</strong> is a powerful classic/historic rifle for medium and large game.
                    </p>

                    <p className="mt-2">
                        This weapon is available as part of the <a href="#" className="wiki-link">Sundarpatan</a> DLC and is obtainable trough the missions in the Reserve. Additionally it can also be purchased for 36000 in-game currency.
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
                            <li><a href="#gallery" onClick={(e) => scrollTo(e, 'gallery')} className="wiki-link">5. Gallery</a></li>
                        </ul>
                    )}
                </div>

                {/* Sections */}
                
                {/* Ammo Section */}
                <section id="ammo" className="pt-8">
                    <h2 className="wiki-h2">1. Ammo</h2>
                    
                    <p className="wiki-p-mb">The Gandhare Rifle uses unique <a href="#" className="wiki-link">.577/450 ammunition</a>:</p>

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
                   <p className="wiki-p-mb">There are no sights that can be equipped on the Gandhare Rifle. Using the Toggle Scope function will raise the ladder sight, which will then visibly adjust if the Zeroing Perk is used.</p>
                </section>

                <section id="analysis" className="pt-8">
                    <h2 className="wiki-h2">3. Analysis</h2>
                    <div className="wiki-p-mb">
                        <p>
                            It is an excellent performance weapon made for lovers of iron sights. Being limited to only iron sights, it can disappoint players who are used to scoped weapons. The rifle benefits from the Focused Shot perk, giving it limited zoom to help with farther shots. Shooting at night or a dark furred animal can make it tricky to line up a shot, the sights are dark and tend to blend in with dark backgrounds.
                        </p>
                        <p className="mt-2">
                            The weapon's firepower allows it to kill any target within its class easily with a good range of +200m on maps with open areas or locations with targets in good positions, depending on the player's skill with iron sights. For budget minded hunters it is also worth noting the price of ammo. At 230 per 10 shots, it is the cheapest ammo you can get for it's class range.
                        </p>
                    </div>
                </section>

                <section id="trivia" className="pt-8">
                    <h2 className="wiki-h2">4. Trivia</h2>
                    <div className="wiki-p-mb">
                        <p>The Gandhare Rifle is modeled after the Nepalese Martini-style rifle developed by Gehendra Shamsher in the 1880s.</p>
                        <p className="mt-2">It initially could only take class 8 animals ethically, but was later updated to take class 9 animals.</p>
                    </div>
                </section>

                <section id="gallery" className="pt-8">
                    <h2 className="wiki-h2">5. Gallery</h2>
                    <div className="wiki-uniform-grid">
                        {[
                            { title: "Iron sight", img: GrandHareRifleIronSight }
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

                {/* Added Comparison Section to match other files if it was missing, or just closing main */}
            </main>
        </div>
        
        <div className="mt-8">
            <WeaponsTable activeItem="Gandhare Rifle" />
        </div>
      </div>
    </div>
  );
}