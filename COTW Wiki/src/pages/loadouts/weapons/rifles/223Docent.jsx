import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import WeaponsTable from '../../../../components/WeaponsTable';
import '../../../../styles/wiki.css';

// --- ASSET IMPORTS ---
import DocentImage from '../../../../assets/223Docent.webp';
import RifleDiagram from '../../../../assets/Rifle_diagram_2020.webp';
import DocentIronsightImage from '../../../../assets/Docent_ironsight.webp';
import DocentProneImage from '../../../../assets/Docent_pose_3.webp';
import DocentCrouchImage from '../../../../assets/Docent_pose_2.webp';
import DocentStandingImage from '../../../../assets/Docent_pose_1.webp';

export default function Docent223() {
  const [isTocOpen, setIsTocOpen] = useState(true);

  const scrollTo = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const ammoData = [
    { name: ".223 Soft-Point", pen: 10, exp: 12, class: "2-4", range: "150m", price: 220 },
    { name: ".223 Polymer-Tip", pen: 20, exp: 3, class: "2-4", range: "150m", price: 350 },
  ];

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
        <h1 className="wiki-header">.223 Docent</h1>

        <div className="wiki-layout">
          {/* SIDEBAR */}
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">.223 Docent</div>
            {/* Sidebar image with darker background to match info sections */}
            <div className="wiki-sidebar-image wiki-sidebar-image--contain" style={{ backgroundColor: 'var(--wiki-bg-sidebar)' }}>
              <img src={DocentImage} alt=".223 Docent" />
            </div>

            <div className="wiki-sidebar-header" style={{ fontSize: '0.9rem' }}>General Information</div>
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Value</span>
              <span className="wiki-link">6000</span>
            </div>
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Weight</span>
              2
            </div>
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Score</span>
              150
            </div>

            <div className="wiki-sidebar-header" style={{ fontSize: '0.9rem' }}>Statistics</div>
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Accuracy</span>
              100
            </div>
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Recoil</span>
              28
            </div>
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Reload</span>
              49
            </div>
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Hipshot</span>
              86
            </div>
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Magazine</span>
              6
            </div>
          </aside>

          {/* MAIN */}
          <main className="wiki-main">
            <blockquote className="wiki-quote">
              <p>"While this .223 bolt-action rifle lacks the punch to take on big game, it is highly useful for its extremely flat trajectories and accuracy. These characteristics make it the perfect tool for hunters looking to hit varmints at a longe range."</p>
              <cite>— In-Game Description</cite>
            </blockquote>

            <div className="wiki-p-mb">
              <p>
                The <strong>.223 Docent</strong> is the bolt-action rifle with the second smallest caliber in the game. While it's difficult to take down big game with this rifle, its high accuracy is perfect for small game hunts such as <a href="#" className="wiki-link">Red Fox</a>, <a href="#" className="wiki-link">Coyote</a> or <a href="#" className="wiki-link">Roe Deer</a>.
              </p>
            </div>

            {/* TOC */}
            <div className="wiki-toc-panel wiki-p-mb">
              <div className="wiki-toc-panel-header">
                <span className="wiki-toc-panel-title">🔢 Contents</span>
                <span className="wiki-toc-panel-toggle" onClick={() => setIsTocOpen(!isTocOpen)}>
                  [{isTocOpen ? 'hide' : 'show'}]
                </span>
              </div>
              {isTocOpen && (
                <ul className="wiki-list-plain">
                  <li><a href="#ammo" onClick={(e) => scrollTo(e, 'ammo')} className="wiki-link">1. Ammo</a></li>
                  <li><a href="#sights" onClick={(e) => scrollTo(e, 'sights')} className="wiki-link">2. Sights</a></li>
                  <li><a href="#analysis" onClick={(e) => scrollTo(e, 'analysis')} className="wiki-link">3. Analysis</a></li>
                  <li><a href="#trivia" onClick={(e) => scrollTo(e, 'trivia')} className="wiki-link">4. Trivia</a></li>
                  <li><a href="#gallery" onClick={(e) => scrollTo(e, 'gallery')} className="wiki-link">5. Gallery</a></li>
                  <li><a href="#comparison" onClick={(e) => scrollTo(e, 'comparison')} className="wiki-link">6. Comparison to other rifles</a></li>
                </ul>
              )}
            </div>

            <section id="ammo" className="pt-8">
              <h2 className="wiki-h2">1. Ammo</h2>
              <p className="wiki-p-mb">As with most rifles, two variants of its <a href="#" className="wiki-link">ammunition</a> are available:</p>
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
                        <td className="wiki-td"><span className="wiki-link">{item.name}</span></td>
                        <td className="wiki-td text-center">{item.pen}</td>
                        <td className="wiki-td text-center">{item.exp}</td>
                        <td className="wiki-td text-center">{item.class}</td>
                        <td className="wiki-td text-center">{item.range}</td>
                        <td className="wiki-td text-center">{item.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section id="sights" className="pt-8">
              <h2 className="wiki-h2">2. Sights</h2>
              <p className="wiki-p-mb">The following sights can be equipped on the Docent .223:</p>
              <ul className="wiki-ul">
                {sightsData.map((sight, idx) => (
                  <li key={idx} className="wiki-li"><a href="#" className="wiki-link">{sight}</a></li>
                ))}
              </ul>
            </section>

            <section id="analysis" className="pt-8">
              <h2 className="wiki-h2">3. Analysis</h2>
              <div className="wiki-p-mb">
                <p className="mb-4">
                  Despite the fact that the Docent is very easy to unlock early on (requiring only a rifle score of 150) and fairly affordable, It should still be considered a side-grade to the <a href="#" className="wiki-link">Ranger .243</a>, which already covers classes 2-4 and beats the Docent with more power and penetration. Despite that, the Docent is still a great rifle for hunting class 2-3 animals. It will struggle to take down class 4 animals quickly, however. And because of its limited penetration, side shots should be preferred.
                </p>
                <p className="mb-4">
                  Its combat characteristics are the same as those of the paid <a href="#" className="wiki-link">ZARZA-15 .223</a>, but the Docent has less weight and a larger magazine.
                </p>
                <p className="mb-4">
                  It beats the Ranger .243 with better accuracy (less aim wobble), lower weight, less recoil and slightly flatter bullet trajectory/lower bullet drop.
                </p>
                <p className="mb-4">
                  The only weapon that competes with the Docent in efficiency within their classes is the <a href="#" className="wiki-link">Zagan Varminter .22-250</a> from <a href="#" className="wiki-link">Emerald Coast</a>. It has slightly more penetration, but a smaller magazine.
                </p>
                <p>
                  Most of the other class 2-4 weapons are either single-shot or designed for minimal range shooting.
                </p>
              </div>
            </section>

            <section id="trivia" className="pt-8">
              <h2 className="wiki-h2">4. Trivia</h2>
              <p className="wiki-p-mb">
                The .223 Docent is modeled after its real-life counterpart of the Blaser R8.
              </p>
            </section>

            <section id="gallery" className="pt-8">
              <h2 className="wiki-h2">5. Gallery</h2>
              {/* Uses the new unique classes for separate styling */}
              <div className="wiki-uniform-grid">
                {[
                  { title: "Standing", img: DocentStandingImage },
                  { title: "Crouching", img: DocentCrouchImage },
                  { title: "Lying", img: DocentProneImage },
                  { title: "Iron sight", img: DocentIronsightImage }
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
                  <img src={RifleDiagram} alt="Rifle Diagram" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '8px' }} />
                </div>
              </div>
              <WeaponsTable activeItem=".223 Docent" />
            </section>

          </main>
        </div>
        <div className="h-32"></div>
      </div>
    </div>
  );
}