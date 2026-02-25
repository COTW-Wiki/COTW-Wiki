import { useState } from 'react';
import WeaponsTable from '../../../../components/WeaponsTable';
import RazorbackLite from '../../../../assets/RazorbackLiteCB60.webp';
import RazorbackStanding from '../../../../assets/Razerblack_pose_1.webp';
import RazorbackAimingStanding from '../../../../assets/Razorblack_aiming_2.webp';
import RazorbackLying from '../../../../assets/Razorblack_pose_3.webp';
import RazorbackAimingLying from '../../../../assets/Razorblack_aiming_1.webp';
import BowsDiagram from '../../../../assets/Bows.webp';
import '../../../../styles/wiki.css';


// --- Main App Component ---
export default function App() {
  const [isTocOpen, setIsTocOpen] = useState(true);

  // Data for Ammo Table
  const ammoData = [
    { name: "300 gr. Small Game Point", pen: "10", exp: "0", class: "1-2", range: "20m", price: 530 },
    { name: "420 gr. Broadhead", pen: "50", exp: "0", class: "2-7", range: "20m", price: 700 },
    { name: "600 gr. Broadhead", pen: "90", exp: "0", class: "7-9", range: "20m", price: 880 },
  ];

  // Data for Sights List
  const sightsData = [
    "Brightsight Single-Pin Sight",
    "Swift-Mark 3 Bow Sight",
    "Swift-Mark 5 Bow Sight",
    "Brightsight Rangefinder Bow Sight"
  ];

  return (
        <div className="wiki-page">
            <div className="wiki-inner">
                <h1 className="wiki-header">Razorback Lite CB-60</h1>

                <div className="wiki-layout">
                    <aside className="wiki-sidebar">
                        <div className="wiki-sidebar-header">Razorback Lite CB-60</div>
                        <div className="wiki-sidebar-image wiki-sidebar-image--contain">
                            <img src={RazorbackLite} alt="Razorback Lite CB-60" className="wiki-img-custom" />
                        </div>

                        <div className="wiki-sidebar-header" style={{ fontSize: '0.9rem' }}>General Information</div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Value</span>
                            <span>6000</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Weight</span>
                            <span>3.5</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Score</span>
                            <span>0</span>
                        </div>

                        <div className="wiki-sidebar-header" style={{ fontSize: '0.9rem' }}>Statistics</div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Accuracy</span>
                            <span>33</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Recoil</span>
                            <span>10</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Reload</span>
                            <span>100</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Hipshot</span>
                            <span>19</span>
                        </div>
                        <div className="wiki-sidebar-section">
                            <span className="wiki-sidebar-label">Magazine</span>
                            <span>1</span>
                        </div>
                    </aside>

                    <main className="wiki-main">
                        <blockquote className="wiki-quote">
                            <p>"Sleek, quiet and deadly accurate. In the hands of a skilled archer, this compound bow can take out most game with the same efficiency as any rifle. Suitable for small and medium-sized game."</p>
                            <cite>― In-Game Description</cite>
                        </blockquote>

                        <div className="wiki-p-mb">
                            <p>
                                The <strong>Razorback Lite CB-60</strong> is a compound bow. It is similar to the Bearclaw Lite CB-60, but has higher hipshot accuracy at the tradeoff of a lower scoped accuracy. As a bow, it is suitable for close range hunting, with its limit being around 50 meters.
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
                                    <li className="wiki-li"><a href="#ammo" className="wiki-link">1. Arrows</a></li>
                                    <li className="wiki-li"><a href="#sights" className="wiki-link">2. Sights</a></li>
                                    <li className="wiki-li"><a href="#gallery" className="wiki-link">3. Gallery</a></li>
                                    <li className="wiki-li"><a href="#comparison" className="wiki-link">4. Comparison to other bows</a></li>
                                </ul>
                            )}
                        </div>

                        <section id="ammo" className="pt-8">
                            <h2 className="wiki-h2">1. Arrows</h2>
                            <p className="wiki-p-mb">Like all bows, it can use 3 different weights of arrow:</p>
                            <div className="wiki-table-container">
                                <table className="wiki-table">
                                    <thead>
                                        <tr className="text-white" style={{ backgroundColor: 'var(--wiki-bg-sidebar-header)' }}>
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
                                                <td className="wiki-td"><strong>{item.name}</strong></td>
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
                            <p className="wiki-p-mb">The following sights can be equipped on the Razorback Lite CB-60:</p>
                            <ul className="wiki-ul">
                                {sightsData.map((sight, idx) => (
                                    <li key={idx} className="wiki-li">
                                        <a href="#" className="wiki-link">{sight}</a>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <section id="gallery" className="pt-8">
                            <h2 className="wiki-h2">3. Gallery</h2>
                            <div className="wiki-gallery-grid">
                                {[
                                    { title: 'Standing', img: RazorbackStanding },
                                    { title: 'Aiming in standing position', img: RazorbackAimingStanding },
                                    { title: 'Lying', img: RazorbackLying },
                                    { title: 'Aiming in lying position', img: RazorbackAimingLying },
                                ].map((item, idx) => (
                                    <div key={idx} className="wiki-gallery-item">
                                        <div className="wiki-gallery-placeholder">
                                            <img src={item.img} alt={item.title} />
                                        </div>
                                        <span className="wiki-gallery-label">{item.title}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section id="comparison" className="pt-8">
                            <h2 className="wiki-h2">4. Comparison to other bows</h2>
                            <div className="wiki-p-mb">
                                <img src={BowsDiagram} alt="Bow Comparison Chart" style={{ width: 400, height: 200, objectFit: 'contain', maxWidth: '100%' }} />
                            </div>
                        </section>

                        <WeaponsTable activeItem="Razorback Lite CB-60" />
                    </main>
                </div>

      </div>
    </div>
  );
}