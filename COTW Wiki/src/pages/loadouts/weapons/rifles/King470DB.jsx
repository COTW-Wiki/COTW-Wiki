import { useState } from 'react';
import King470DBZenithImage from '../../../../assets/King470DBZenith.webp';
import King470DBApexImage from '../../../../assets/King470DBApex.webp';
import RifleDiagram from '../../../../assets/Rifle_diagram_2020.webp';
import WeaponsTable from '../../../../components/WeaponsTable';

const King470DB = () => {
  const [isTocOpen, setIsTocOpen] = useState(true);
  const [selectedVariant, setSelectedVariant] = useState('Zenith');

  // Data for Ammo Table
  const ammoData = [
    { name: ".470 Nitro Express Soft Point", pen: 25, exp: 100, class: "9", range: "75m", price: 2000 },
    { name: ".470 Nitro Express Full Metal Jacket", pen: 100, exp: 23, class: "9", range: "75m", price: 2660 },
  ];

  // Data for Sights List
  const sightsData = [
    "Marksman Exakt Reflex Sight"
  ];

  return (
    <div className="wiki-page">
      <div className="wiki-inner">
        {/* Header Section */}
        <h1 className="wiki-header">
            King 470DB
        </h1>

        {/* Main Content Layout */}
        <div className="wiki-layout">
            
            {/* Sidebar */}
            <aside className="wiki-sidebar">
                <div className="wiki-sidebar-header">
                    King 470DB
                </div>

                {/* Sub-menu text */}
                <div className="wiki-sidebar-section flex justify-around bg-[var(--wiki-bg-sidebar-header)] p-1">
                    <button 
                        className={`px-2 py-1 text-xs font-bold transition-colors uppercase cursor-pointer ${selectedVariant === 'Zenith' ? 'text-[var(--wiki-text-sidebar)] underline' : 'text-gray-500 hover:text-[var(--wiki-text-sidebar)]'}`}
                        onClick={() => setSelectedVariant('Zenith')}
                    >
                        Zenith
                    </button>
                    <button 
                        className={`px-2 py-1 text-xs font-bold transition-colors uppercase cursor-pointer ${selectedVariant === 'Apex' ? 'text-[var(--wiki-text-sidebar)] underline' : 'text-gray-500 hover:text-[var(--wiki-text-sidebar)]'}`}
                        onClick={() => setSelectedVariant('Apex')}
                    >
                        Apex
                    </button>
                </div>
                
                {/* Image Area */}
                <div className="wiki-sidebar-image wiki-sidebar-image--contain">
                    <img 
                        src={selectedVariant === 'Zenith' ? King470DBZenithImage : King470DBApexImage}
                        alt={`King 470DB ${selectedVariant}`}
                    />
                </div>

                {/* General Information Header */}
                <div className="wiki-sidebar-header text-sm">
                    General Information
                </div>

                {/* General Information Data */}
                <div className="wiki-sidebar-section">
                    <span className="wiki-sidebar-label">Value</span>
                    <span>90000</span>
                </div>
                <div className="wiki-sidebar-section">
                    <span className="wiki-sidebar-label">Weight</span>
                    <span>5</span>
                </div>
                <div className="wiki-sidebar-section">
                    <span className="wiki-sidebar-label">Score</span>
                    <span>5810</span>
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
                    <span>100</span>
                </div>
                <div className="wiki-sidebar-section">
                    <span className="wiki-sidebar-label">Reload</span>
                    <span>10</span>
                </div>
                <div className="wiki-sidebar-section">
                    <span className="wiki-sidebar-label">Hipshot</span>
                    <span>12</span>
                </div>
                <div className="wiki-sidebar-section">
                    <span className="wiki-sidebar-label">Magazine</span>
                    <span>2</span>
                </div>
            </aside>

            {/* Main Content */}
            <main className="wiki-main">
                {/* Intro Quote */}
                <blockquote className="wiki-quote">
                    <p>"A big double that demands respect from even the most skilled hunters, the King 470DB Zenith lives up to its name in stature, efficiency as well as cost. With enough firepower to instantly take down nearly any animal, the King is designed to give hunters a fighting chance when pit against animals that couldn't be phased by more traditional ammunition. Quick to load up, incredibly powerful and double-barreled to even out any hunter's odds in the perilous African wilderness."</p>
                    <cite>— In-Game Description</cite>
                </blockquote>

                {/* Main Description */}
                <div className="wiki-p-mb">
                    <p>
                        The <strong className="text-gray-900">King 470DB Zenith</strong> is a double-barreled Safari rifle designed for hunting the biggest of game such as <a href="#" className="wiki-link">Cape Buffalo</a> and <a href="#" className="wiki-link">Water Buffalo</a>. Currently, it holds the position of being the most powerful weapon in the game. This Immense power comes at the cost of poor accuracy and high recoil, limiting its use to short-range hunting, and Extremley Expensive Ammunition.
                    </p>
                    <p className="mt-2">
                        It is available as part of the <a href="#" className="wiki-link">Vurhonga Savanna Reserve</a> DLC.
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
                            <li><a href="#analysis" onClick={(e) => scrollTo(e, 'analysis')} className="wiki-link">4. Analysis</a></li>
                            <li><a href="#trivia" onClick={(e) => scrollTo(e, 'trivia')} className="wiki-link">5. Trivia</a></li>
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
                    <p className="wiki-p-mb">The following sights can be equipped on the King 470DB:</p>
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
                            <strong className="text-gray-900">King 470DB Apex</strong> is a color variant featuring a matte gray body and a brushed metal barrel.
                        </p>
                    </div>
                </section>

                <section id="analysis" className="pt-8">
                    <h2 className="wiki-h2">4. Analysis</h2>
                    <div className="wiki-p-mb">
                        <p>
                            This is the single most powerful weapon in the entire game. It lacks range and good sighting, but compensates that drawback with Raw Power when hunting at close range. Its powerful Full Metal Jacket ammunition features the highest penetration in the game and has no problem penetrating any of the large animals in the game. However these rounds lose power and penetration very rapidly over distance and will be most effective at 75 meters or less.
                        </p>
                        <p className="mt-2">
                            The gun is limited to class 9 animals only, which means it is only useful on 7 of 15 reserves. The only significant drawbacks of the weapon are the very high cost of both the weapon itself and its ammunition, as well as it´s lower effective range and limitation to either ironsights or a red dot sight. however it truly shines when going up against animals that are Foolish enough to Charge you while you have it on your person
                        </p>
                    </div>
                </section>

                <section id="trivia" className="pt-8">
                    <h2 className="wiki-h2">5. Trivia</h2>
                    <ul className="wiki-ul">
                         <li className="wiki-li">The King 470DB is modeled after its real-life counterpart of the Krieghoff Classic "Big Five" Double Rifle.</li>
                         <li className="wiki-li">Since it is Chambered in .470 Nitro Express it is sufficient enough to be classed as an "Elephant rifle" (which is .375 H&H Magnum Or Larger)</li>
                         <li className="wiki-li">The price of the Zenith was reduced from originally 125000 to 90000 (Patch 1.23)</li>
                         <li className="wiki-li">The price of its ammunition was reduced to 2000 (from 5000; SP) and 2660 (from 6500; FMJ) (Patch 1.23)</li>
                    </ul>
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
                    <WeaponsTable activeItem="King 470DB" />
                </section>

            </main>
        </div>
      </div>
    </div>
  );
};

export default King470DB;