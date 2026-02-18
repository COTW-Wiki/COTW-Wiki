import { useState } from 'react';
import '../../../../styles/wiki.css';
import WeaponsTable from '../../../../components/WeaponsTable';
import Hudzik50CaplockTerra from '../../../../assets/Hudzik50CaplockTerra.webp';
import Hudzik50CaplockLuna from '../../../../assets/Hudzik50CaplockLuna.webp';
import Hudzik50CaplockSol from '../../../../assets/Hudzik50CaplockSol.webp';
import MuzzleloaderImg from '../../../../assets/Mussleloader616x256_2.webp';
import HudzikLiveImage from '../../../../assets/Hudzik50.webp'
import RifleDiagram from '../../../../assets/Rifle_diagram_2020.webp';

const Hudzik50Caplock = () => {
  const [selectedVariant, setSelectedVariant] = useState('Terra');
  const [isTocOpen, setIsTocOpen] = useState(true);

    const scrollTo = (e, id) => {
        e.preventDefault();
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

  const variants = {
    Terra: Hudzik50CaplockTerra,
    Luna: Hudzik50CaplockLuna,
    Sol: Hudzik50CaplockSol,
  };

  // Data for Ammo Table
  const ammoData = [
    { name: ".50 Round Ball", pen: 10, exp: 68, class: "3-7", range: "100m", price: 270 },
    { name: ".50 Minié Ball", pen: 30, exp: 12, class: "4-8", range: "200m", price: 340 },
  ];

  // Data for Sights List
  const sightsData = [
    "Hudzik Traditional Round Ball Sights",
    "Hudzik Minié Ball Sights"
  ];

  return (
    <div className="wiki-page">
      <div className="wiki-inner">
        {/* Header Section */}
        <h1 className="wiki-header">
            Hudzik .50 Caplock
        </h1>

        {/* Main Content Layout */}
        <div className="wiki-layout">
            
            {/* Sidebar */}
            <aside className="wiki-sidebar">
                <div className="wiki-sidebar-header">
                    Hudzik .50 Caplock
                </div>

                {/* Variant Switcher */}
                <div className="wiki-sidebar-section flex justify-around gap-1 bg-[var(--wiki-bg-sidebar-header)] p-1 flex-wrap">
                    {Object.keys(variants).map(variant => (
                        <button 
                            key={variant}
                            onClick={() => setSelectedVariant(variant)}
                            className={`px-1 py-1 text-xs font-bold transition-colors uppercase cursor-pointer ${
                                selectedVariant === variant 
                                  ? "text-[var(--wiki-text-sidebar)] underline" 
                                  : "text-gray-500 hover:text-[var(--wiki-text-sidebar)]"
                              }`}
                        >
                            {variant}
                        </button>
                    ))}
                </div>
                
                {/* Image Area */}
                <div className="wiki-sidebar-image wiki-sidebar-image--contain">
                    <img 
                        src={variants[selectedVariant]} 
                        alt={`Hudzik .50 Caplock ${selectedVariant}`} 
                    />
                </div>

                {/* General Information Header */}
                <div className="wiki-sidebar-header text-sm">
                    General Information
                </div>

                {/* General Information Data */}
                <div className="wiki-sidebar-section">
                    <span className="wiki-sidebar-label">Value</span>
                    <span>Free (DLC)</span>
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
                    <span>25</span>
                </div>
                <div className="wiki-sidebar-section">
                    <span className="wiki-sidebar-label">Recoil</span>
                    <span>70</span>
                </div>
                <div className="wiki-sidebar-section">
                    <span className="wiki-sidebar-label">Reload</span>
                    <span>5</span>
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
                    <p>"Graceful and sophisticated, the Hudzik is a high-end civil war era caplock rifle. With great stability and a perfectly maintained barrel, this muzzleloader offers incredible precision for traditional hunters if they have the patience to master it. A perfect choice for hunting anything from coyotes to the majestic elks of the Rockies."</p>
                    <cite>— In-Game Description</cite>
                </blockquote>

                {/* Main Description */}
                <div className="wiki-p-mb">
                    <p>
                        The <strong className="text-gray-900">Hudzik .50 Caplock</strong> is a muzzleloader rifle, the first of its kind in the game. It uses black powder and round or Minié balls as ammunition. This rifle is unique in that it offers a very different hunting experience due to its slow reload and single-shot nature, requiring patience and precision.
                    </p>
                    <p className="mt-2">
                        This weapon is available as part of the <a href="#" className="wiki-link">Smoking Barrels Weapon Pack</a> DLC.
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
                            <li><a href="#gallery" onClick={(e) => scrollTo(e, 'gallery')} className="wiki-link">6. Gallery</a></li>
                            <li><a href="#comparison" onClick={(e) => scrollTo(e, 'comparison')} className="wiki-link">7. Comparison to other rifles</a></li>
                        </ul>
                    )}
                </div>

                {/* Sections */}
                
                {/* Ammo Section */}
                <section id="ammo" className="pt-8">
                    <h2 className="wiki-h2">1. Ammo</h2>
                    
                    <p className="wiki-p-mb">Unlike other rifles, the Hudzik uses specific <a href="#" className="wiki-link">muzzleloader ammunition</a>:</p>

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
                   <p className="wiki-p-mb">The Hudzik cannot equip scopes. It relies on its iron sights, which change depending on the ammunition used:</p>
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
                            <strong>Hudzik .50 Caplock Luna</strong> is a variant featuring a lighter wood stock.
                        </p>
                        <p className="mt-2">
                            <strong>Hudzik .50 Caplock Sol</strong> is a variant featuring a darker, reddish wood stock.
                        </p>
                    </div>
                </section>

                <section id="analysis" className="pt-8">
                    <h2 className="wiki-h2">4. Analysis</h2>
                    <div className="wiki-p-mb">
                        <p>
                            The Hudzik is a very powerful rifle, capable of taking down a wide range of animals. The Round Ball ammunition is excellent for close range and offers massive expansion, while the Minié Ball offers incredible penetration and range, making it viable for shots up to 200m and beyond. The main drawback is the reload speed, which is extremely slow due to the nature of muzzleloading. This means follow-up shots are usually not possible.
                        </p>
                    </div>
                </section>

                <section id="trivia" className="pt-8">
                    <h2 className="wiki-h2">5. Trivia</h2>
                    <p className="wiki-p-mb">
                        The Hudzik .50 Caplock is modeled after traditional Civil War era caplock rifles, likely the 1853 Enfield or similar patterns.
                    </p>
                </section>

                <section id="gallery" className="pt-8">
                    <h2 className="wiki-h2">6. Gallery</h2>
                    <div className="wiki-uniform-grid">
                        {[
                            { title: "In-game view", img: MuzzleloaderImg },
                            { title: "Live view", img: HudzikLiveImage }
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
                    <h2 className="wiki-h2">7. Comparison to other rifles</h2>
                     <div className="wiki-table-container wiki-p-mb">
                        <div style={{ backgroundColor: 'var(--wiki-bg-sidebar)', padding: '20px' }}>
                            <img 
                                src={RifleDiagram} 
                                alt="Rifle Diagram" 
                                style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '8px' }}
                            />
                        </div>
                    </div>
                    <WeaponsTable activeItem="Hudzik .50 Caplock" />
                </section>

            </main>
        </div>
      </div>
    </div>
  );
};

export default Hudzik50Caplock;