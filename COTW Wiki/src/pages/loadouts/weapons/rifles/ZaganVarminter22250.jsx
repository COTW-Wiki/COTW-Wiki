import { useState } from 'react';
import '../../../../styles/wiki.css';
import ZaganImgMain from '../../../../assets/ZaganVarminter22250.webp';
import ZaganImgStanding from '../../../../assets/ZaganVarminter22250Standing.webp';
import ZaganImgCrouching from '../../../../assets/ZaganVarminter22250Crouching.webp';
import ZaganImgLying from '../../../../assets/ZaganVarminter22250Lying.webp';
import ZaganImgIronSight from '../../../../assets/ZaganVarminter22250IronSight.webp';
import WeaponsTable from '../../../../components/WeaponsTable';
import RifleDiagram from '../../../../assets/Rifle_diagram_2020.webp';

const ZaganVarminter22250 = () => {
  const [isTocOpen, setIsTocOpen] = useState(true);

  const scrollTo = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const ammoData = [
    { name: '.22-250 Soft-Point', pen: 15, exp: 28, class: '2-4', range: '200m', price: 380 },
    { name: '.22-250 Polymer-Tip', pen: 30, exp: 7, class: '2-4', range: '200m', price: 550 },
  ];

  const sightsData = [
    'Ascent 1-4x24 Rifle Scope',
    'Hyperion 4-8x42 Rifle Scope',
    'Odin 4-12x33 Rifle Scope',
    'Argus 8-16x50 Rifle Scope',
    'GenZero 1-4x20 Night Vision Rifle Scope',
    'Angler 4-8x100 Night Vision Rifle Scope',
    'Red Raptor Reflex Sight',
  ];

  return (
    <div className="wiki-page">
      <div className="wiki-inner">
        <h1 className="wiki-header">Zagan Varminter .22-250</h1>

        <div className="wiki-layout">
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Zagan Varminter</div>

            <div className="wiki-sidebar-image wiki-sidebar-image--contain">
              <img
                src={ZaganImgMain}
                alt="Zagan Varminter"
                onError={(e) => {
                  e.target.src = 'https://static.wikia.nocookie.net/thehuntercotw/images/3/36/Rifle_Zagan_Varminter.png';
                }}
              />
            </div>

            <div className="wiki-sidebar-header text-sm">General Information</div>
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Value</span>
              <span>7500</span>
            </div>
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Weight</span>
              <span>3.5</span>
            </div>
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Score</span>
              <span>0</span>
            </div>

            <div className="wiki-sidebar-header text-sm">Statistics</div>
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Accuracy</span>
              <span>100</span>
            </div>
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Recoil</span>
              <span>30</span>
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
              <span>5</span>
            </div>
          </aside>

          <main className="wiki-main">
            <blockquote className="wiki-quote">
              <p>"Chambered in .22-250, the Zagan Varminter is a dependable rifle loved by farmers and varmint hunters the world over. Light and comfortable to shoot, it's the perfect companion for anyone going off the beaten path. Whether you need to keep your livestock safe or put meat on the table, you cannot go wrong with the Zagan Varminter."</p>
              <cite>— In-Game Description</cite>
            </blockquote>

            <div className="wiki-p-mb">
              <p>
                The <strong>Zagan Varminter .22-250</strong> is a rifle that is useful for hunting small game.
              </p>
              <p>
                This weapon is available as part of the <a href="#" className="wiki-link">Emerald Coast</a> DLC.
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
              <p className="wiki-p-mb">The Zagan Varminter uses .22-250 ammunition:</p>
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
              <p className="wiki-p-mb">The following sights can be equipped on the Zagan Varminter .22-250:</p>
              <ul className="wiki-ul">
                {sightsData.map((sight, idx) => (
                  <li key={idx} className="wiki-li">{sight}</li>
                ))}
              </ul>
            </section>

            <section id="analysis" className="pt-8">
              <h2 className="wiki-h2">3. Analysis</h2>
              <div className="wiki-p-mb">
                <p>
                  It is a pretty good rifle for long-range hunting on classes 2-4, and only has 1 less round in the magazine compared to the base game .223 Docent. The Zagan also has a slightly better penetration with both its Soft Point and Polymer Tip ammunition (12-25 compared to the Docents 10-20).
                </p>
              </div>
            </section>

            <section id="trivia" className="pt-8">
              <h2 className="wiki-h2">4. Trivia</h2>
              <p className="wiki-p-mb">The Zagan Varminter is modeled after its real-life counterpart of the Tikka T3x Super Varmint.</p>
            </section>

            <section id="gallery" className="pt-8">
              <h2 className="wiki-h2">5. Gallery</h2>
              <div className="wiki-uniform-grid">
                {[
                  { title: 'Standing', img: ZaganImgStanding },
                  { title: 'Crouching', img: ZaganImgCrouching },
                  { title: 'Lying', img: ZaganImgLying },
                  { title: 'Iron sight', img: ZaganImgIronSight },
                ].map((item, idx) => (
                  <div key={idx} className="wiki-uniform-card">
                    <div className="wiki-uniform-card-header">{item.title}</div>
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
                  <img
                    src={RifleDiagram}
                    alt="Rifle Diagram"
                    style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '8px' }}
                  />
                </div>
              </div>
              <WeaponsTable activeItem="Zagan Varminter .22-250" />
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ZaganVarminter22250;
