import { useState } from 'react';
import '../../../../styles/wiki.css';
import Virant22LRImage from '../../../../assets/Virant22LRExpress.webp';
import Virant22LRKlasikaImage from '../../../../assets/Virant22LRKlasika.webp';
import Virant22LRStanding from '../../../../assets/Virant_pose_1.webp';
import Virant22LRCrouching from '../../../../assets/Virant_pose_2.webp';
import Virant22LRProne from '../../../../assets/Virant_pose_3.webp';
import Virant22LRIronsight from '../../../../assets/Virant_ironsight.webp';
import RifleDiagram from '../../../../assets/Rifle_diagram_2020.webp';
import WeaponsTable from '../../../../components/WeaponsTable';

const Virant22LR = () => {
  const [isTocOpen, setIsTocOpen] = useState(true);
  const [selectedVariant, setSelectedVariant] = useState('Express');

  const variants = {
    Express: Virant22LRImage,
    Klasika: Virant22LRKlasikaImage,
  };

  const scrollTo = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const ammoData = [
    { name: '.22LR Truncated Cone', pen: 17, exp: 1, class: '1', range: '100m', price: 250 },
    { name: '.22LR Jacketed Hollow-Point', pen: 5, exp: 10, class: '1', range: '100m', price: 200 },
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
        <h1 className="wiki-header">Virant .22LR</h1>

        <div className="wiki-layout">
          <aside className="wiki-sidebar">
            <div className="wiki-sidebar-header">Virant .22LR</div>

            <div className="wiki-sidebar-section wiki-variant-bar" style={{ display: 'flex', justifyContent: 'space-around', gap: 8, flexWrap: 'wrap' }}>
              {Object.keys(variants).map((variant) => (
                <button
                  key={variant}
                  type="button"
                  onClick={() => setSelectedVariant(variant)}
                  className="wiki-link wiki-variant-button"
                  aria-current={selectedVariant === variant ? 'true' : undefined}
                >
                  {variant}
                </button>
              ))}
            </div>

            <div className="wiki-sidebar-image wiki-sidebar-image--contain">
              <img
                src={variants[selectedVariant]}
                alt={`Virant .22LR ${selectedVariant}`}
              />
            </div>

            <div className="wiki-sidebar-header text-sm">General Information</div>
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Value</span>
              <span>0</span>
            </div>
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Weight</span>
              <span>2.5</span>
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
              <span>10</span>
            </div>
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Reload</span>
              <span>49</span>
            </div>
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Hipshot</span>
              <span>86</span>
            </div>
            <div className="wiki-sidebar-section">
              <span className="wiki-sidebar-label">Magazine</span>
              <span>10</span>
            </div>
          </aside>

          <main className="wiki-main">
            <blockquote className="wiki-quote">
              <p>"Developed by slovenian gunsmiths for rabbit hunting, the VIRANT is the go to rifle for varmint control and target shooting. The .22LR's low recoil and superb design makes <br />this rifle a perfect starting point for people learning the basics of shooting."</p>
              <cite>— In-Game Description</cite>
            </blockquote>

            <div className="wiki-p-mb">
              <p>
                The <strong>Virant .22LR Express</strong> is a small-caliber rifle designed to hunt all species of hare. The rifle's very high accuracy and ability to fire quick consecutive shots make it ideal for hunting small and difficult-to-hit game of class 1.
              </p>
              <p>
                The Virant .22LR family is available as part of the <a href="#" className="wiki-link">Weapon Pack 1</a> DLC.
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
                  <li><a href="#variants" onClick={(e) => scrollTo(e, 'variants')} className="wiki-link">3. Variants</a></li>
                  <li><a href="#analysis" onClick={(e) => scrollTo(e, 'analysis')} className="wiki-link">4. Analysis</a></li>
                  <li><a href="#trivia" onClick={(e) => scrollTo(e, 'trivia')} className="wiki-link">5. Trivia</a></li>
                  <li><a href="#gallery" onClick={(e) => scrollTo(e, 'gallery')} className="wiki-link">6. Gallery</a></li>
                  <li><a href="#comparison" onClick={(e) => scrollTo(e, 'comparison')} className="wiki-link">7. Comparison to other rifles</a></li>
                </ul>
              )}
            </div>

            <section id="ammo" className="pt-8">
              <h2 className="wiki-h2">1. Ammo</h2>
              <p className="wiki-p-mb">This rifle has two types of ammo available:</p>
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
              <p className="wiki-p-mb">This is the same ammo that <a href="#" className="wiki-link">Andersson</a> and <a href="#" className="wiki-link">Zarza-15</a> use.</p>
            </section>

            <section id="sights" className="pt-8">
              <h2 className="wiki-h2">2. Sights</h2>
              <p className="wiki-p-mb">The following sights can be equipped on the Virant .22LR:</p>
              <ul className="wiki-ul">
                {sightsData.map((sight, idx) => (
                  <li key={idx} className="wiki-li">{sight}</li>
                ))}
              </ul>
            </section>

            <section id="variants" className="pt-8">
              <h2 className="wiki-h2">3. Variants</h2>
              <div className="wiki-p-mb">
                <p>
                  The <strong>Virant .22LR Klasika</strong> is an available design, featuring a classical wooden rifle look.
                </p>
              </div>
            </section>

            <section id="analysis" className="pt-8">
              <h2 className="wiki-h2">4. Analysis</h2>
              <div className="wiki-p-mb">
                <p>It is one of the best solutions for distance hunting of class 1 animals. Fantastic magazine with 10 rounds provides significant ease of use.</p>
                <p>
                  The only weapon that (technically) is even better is the <a href="#" className="wiki-link">Andersson pistol</a> (<a href="#" className="wiki-link">Weapon Pack 3</a>), which has absolutely identical characteristics but weighs less. The difference between them is that the Virant can be equipped with all of the standard rifle scopes.
                </p>
              </div>
            </section>

            <section id="trivia" className="pt-8">
              <h2 className="wiki-h2">5. Trivia</h2>
              <p className="wiki-p-mb">The Virant .22LR is modeled after its real-life counterpart of the Marlin Model 795.</p>
            </section>

            <section id="gallery" className="pt-8">
              <h2 className="wiki-h2">6. Gallery</h2>
              <div className="wiki-uniform-grid">
                {[
                  { title: 'Standing', img: Virant22LRStanding },
                  { title: 'Crouching', img: Virant22LRCrouching },
                  { title: 'Lying', img: Virant22LRProne },
                  { title: 'Iron sight', img: Virant22LRIronsight },
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
              <WeaponsTable activeItem="Virant .22LR" />
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Virant22LR;
