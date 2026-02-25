import { useState } from 'react';
import WeaponsTable from '../../../../components/WeaponsTable';
import DavaniGLS from '../../../../assets/10mmDavaniG4LS.webp';
import DavaniA from '../../../../assets/10mmDavani40A.webp';
import '../../../../styles/wiki.css';



// --- Main App Component ---
export default function App() {
  const [isTocOpen, setIsTocOpen] = useState(true);
    const [selectedVariant, setSelectedVariant] = useState('40A');

    const fallbackImg = 'https://static.wikia.nocookie.net/thehuntercotw/images/5/5e/Handgun_10mm_Davani.png';

    const variants = {
        '40A': {
            image: DavaniA,
            desc: 'The standard variant featuring a sleek black finish.',
        },
        'G4 LS': {
            image: DavaniGLS,
            desc: 'A special edition variant with a distinct finish.',
        },
    };

  // Data for Ammo Table
  const ammoData = [
    { name: "10mm Auto Jacketed Hollow-Point", pen: 12, exp: 36, class: "2-6", range: "50m", price: 280 },
    { name: "10mm Auto Hard-Cast Flat Nose", pen: 50, exp: 8, class: "2-6", range: "50m", price: 350 },
  ];

  // Data for Sights List
  const sightsData = [
    "Marksman Davani Reflex Sight"
  ];

    return (
        <div className="wiki-page">
            <div className="wiki-inner">
                <h1 className="wiki-header">10mm Davani</h1>

                <div className="wiki-layout">
                    <aside className="wiki-sidebar">
                        <div className="wiki-sidebar-header">10mm Davani</div>

                        <div
                            className="wiki-sidebar-section wiki-variant-bar"
                            style={{ display: 'flex', justifyContent: 'space-around', gap: 8, flexWrap: 'wrap' }}
                        >
                            {Object.keys(variants).map((variantName) => (
                                <button
                                    key={variantName}
                                    onClick={() => setSelectedVariant(variantName)}
                                    type="button"
                                    className="wiki-link wiki-variant-button"
                                    aria-current={selectedVariant === variantName ? 'true' : undefined}
                                >
                                    {variantName}
                                </button>
                            ))}
                        </div>

                        <div className="wiki-sidebar-image wiki-sidebar-image--contain" style={{ backgroundColor: 'var(--wiki-bg-sidebar)' }}>
                            <img
                                src={variants[selectedVariant].image}
                                alt={selectedVariant}
                                onError={(e) => {
                                    e.currentTarget.src = fallbackImg;
                                }}
                            />
                        </div>

                        <div className="wiki-sidebar-header" style={{ fontSize: '0.9rem' }}>General Information</div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Value</span>
                            <span>0</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Weight</span>
                            <span>1</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Score</span>
                            <span>0</span>
                        </div>

                        <div className="wiki-sidebar-header" style={{ fontSize: '0.9rem' }}>Statistics</div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Accuracy</span>
                            <span>85</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Recoil</span>
                            <span>50</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Reload</span>
                            <span>78</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Hipshot</span>
                            <span>80</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Magazine</span>
                            <span>15</span>
                        </div>
                    </aside>

                    <main className="wiki-main">
                        <blockquote className="wiki-quote">
                            <p>"The bigger sibling of one of the most used and reliable handguns in the world. Semi-automatic, recoil-operated with a 15 round magazine and chambered for the 10mm Auto cartidge. Lightweight polymer frame together with a steel slide ready for reflex sight mounting. A durable sidearm for the modern hunter."</p>
                            <cite>― In-Game Description</cite>
                        </blockquote>

                        <div className="wiki-p-mb">
                            <p>
                                The <strong>10mm Davani</strong> is a semi-automatic handgun built for a close-range medium games.
                            </p>
                            <p>
                                This weapon is available as part of the <a href="#" className="wiki-link">Assorted Sidearms Pack</a> DLC.
                            </p>
                        </div>

                        <div className="wiki-toc-panel wiki-p-mb">
                            <div className="wiki-toc-panel-header">
                                <span className="wiki-toc-panel-title">Contents</span>
                                <span className="wiki-toc-panel-toggle" onClick={() => setIsTocOpen(!isTocOpen)}>
                                    [{isTocOpen ? 'hide' : 'show'}]
                                </span>
                            </div>
                            {isTocOpen && (
                                <ul className="wiki-list-plain">
                                    <li><a href="#ammo" className="wiki-link">1. Ammo</a></li>
                                    <li><a href="#sights" className="wiki-link">2. Sights</a></li>
                                    <li><a href="#analysis" className="wiki-link">3. Analysis</a></li>
                                    <li><a href="#trivia" className="wiki-link">5. Trivia</a></li>
                                </ul>
                            )}
                        </div>

                        <section id="ammo" className="pt-8">
                            <h2 className="wiki-h2">1. Ammo</h2>
                            <p className="wiki-p-mb">This handgun has two types of ammo available:</p>
                            <div className="wiki-table-container">
                                <table className="wiki-table">
                                    <thead>
                                        <tr className="bg-[var(--wiki-bg-sidebar-header)]">
                                            <th className="wiki-th">Ammo</th>
                                            <th className="wiki-th">Penetration</th>
                                            <th className="wiki-th">Expansion</th>
                                            <th className="wiki-th">Class</th>
                                            <th className="wiki-th">Range</th>
                                            <th className="wiki-th">Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {ammoData.map((item, idx) => (
                                            <tr key={idx}>
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
                            <p className="wiki-p-mb">The following sights can be equipped on the 10mm Davani:</p>
                            <ul className="wiki-ul">
                                {sightsData.map((sight, idx) => (
                                    <li key={idx} className="wiki-li"><a href="#" className="wiki-link">{sight}</a></li>
                                ))}
                            </ul>
                        </section>

                        <section id="analysis" className="pt-8">
                            <h2 className="wiki-h2">3. Analysis</h2>
                            <div className="wiki-p-mb">
                                <p>
                                    The 10mm Davani is perfect for a hasty defense for when you get attacked by groups of animals (like a pack of wolves).
                                </p>
                            </div>
                        </section>

                        <section id="trivia" className="pt-8">
                            <h2 className="wiki-h2">5. Trivia</h2>
                            <p className="wiki-p-mb">The 10mm Davani 40A is based of its real-life counterpart of the Glock 40</p>
                        </section>

                        <WeaponsTable />
                    </main>
                </div>
            </div>
        </div>
    );
}