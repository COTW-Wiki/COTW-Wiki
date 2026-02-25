import { useState } from 'react';
import { Link } from 'react-router-dom';
import { sights } from '../../../data/sights';
import { weapons } from '../../../data/weapons';

function slug(name) {
  return encodeURIComponent(name.replace(/\s+/g, '_'));
}

function categoriesForSight(sight) {
  const cats = new Set();
  const arr = sight.compatibleWith || [];
  for (const item of arr) {
    if (!item) continue;
    let id = null;
    if (typeof item === 'string') id = item;
    else if (typeof item === 'object') id = item.id || item.name;
    if (!id) continue;
    const w = weapons.find((x) => x.id === id || x.name === id);
    if (!w || !w.type) continue;
    const t = w.type.toLowerCase();
    if (t.includes('rifle')) cats.add('Rifles');
    else if (t.includes('shotgun')) cats.add('Shotguns');
    else if (t.includes('handgun')) cats.add('Handguns');
    else if (t.includes('bow')) cats.add('Bows');
  }
  return Array.from(cats);
}

export default function SightsPage() {
  const [isTocOpen, setIsTocOpen] = useState(true);

  const scrollTo = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="wiki-page">
      <div className="wiki-inner">
        <h1 className="wiki-header">Sights & Optics</h1>

        <div className="wiki-layout">
          {/* SIDEBAR */}
          <aside className="wiki-sidebar" style={{ background: 'transparent', border: 'none' }}>
            <div className="wiki-toc-panel">
              <div className="wiki-toc-panel-header">
                <span className="wiki-toc-panel-title">🔢 Contents</span>
                <span className="wiki-toc-panel-toggle" onClick={() => setIsTocOpen(!isTocOpen)}>
                  [{isTocOpen ? 'hide' : 'show'}]
                </span>
              </div>
              {isTocOpen && (
                <ul className="wiki-list-plain">
                  <li><a href="#all-sights" onClick={(e) => scrollTo(e, 'all-sights')} className="wiki-link">1. All Sights</a></li>
                  <li><a href="#rifle-sights" onClick={(e) => scrollTo(e, 'rifle-sights')} className="wiki-link">2. Rifle Sights</a></li>
                  <li><a href="#shotgun-drilling-sights" onClick={(e) => scrollTo(e, 'shotgun-drilling-sights')} className="wiki-link">3. Shotgun & Drilling Sights</a></li>
                  <li><a href="#bow-crossbow-sights" onClick={(e) => scrollTo(e, 'bow-crossbow-sights')} className="wiki-link">4. Bow & Crossbow Sights</a></li>
                  <li><a href="#handgun-shotgun-sights" onClick={(e) => scrollTo(e, 'handgun-shotgun-sights')} className="wiki-link">5. Handgun & Shotgun Sights</a></li>
                </ul>
              )}
            </div>
          </aside>

          {/* MAIN */}
          <main className="wiki-main">
            <div className="wiki-p-mb">
              <p>
                Sights are weapon modifications which improve aiming and/or accuracy. Some sights have improved
                magnification which make the animal appear closer. This allows for more accurate shots on smaller
                animals such as <Link to="/animals/Red-Fox" className="wiki-link">Red Foxes</Link> and{' '}
                <Link to="/animals/Roe-Deer" className="wiki-link">Roe Deer</Link> at longer ranges.
              </p>
            </div>

            <section id="all-sights" className="pt-8 mb-20">
              <h2 className="wiki-h2">1. All Sights</h2>
              <ul className="wiki-ul">
                {sights.map((sight) => {
                  const cats = categoriesForSight(sight);
                  return (
                    <li key={sight.name} className="wiki-li">
                      <Link to={`/weapons/sights/${slug(sight.name)}`} className="wiki-link">
                        {sight.name}
                      </Link>
                      {cats.length > 0 && (
                        <span className="wiki-fs-sm ml-2 text-[var(--wiki-text-muted)]">
                          ({cats.join(', ')})
                        </span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </section>

            <section id="rifle-sights" className="pt-8 mb-20">
              <h2 className="wiki-h2">2. Rifle Sights</h2>
              <div className="wiki-table-container">
                <table className="wiki-table">
                  <thead>
                    <tr className="bg-[var(--wiki-bg-sidebar-header)]">
                      <th className="wiki-th">Sight</th>
                      <th className="wiki-th">Magnification</th>
                      <th className="wiki-th">Price</th>
                      <th className="wiki-th">Weight</th>
                      <th className="wiki-th">Score</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="wiki-td"><Link to={`/weapons/sights/${slug('Tru-Vision Tritium (Model R4570)')}`} className="wiki-link">Tru-Vision Tritium Sights (Model R4570)</Link></td>
                      <td className="wiki-td">1x</td>
                      <td className="wiki-td text-center">3000</td>
                      <td className="wiki-td text-center">0</td>
                      <td className="wiki-td text-center">3243</td>
                    </tr>
                    <tr>
                      <td className="wiki-td"><Link to={`/weapons/sights/${slug('Tru-Vision Tritium (Model R3006)')}`} className="wiki-link">Tru-Vision Tritium Sights (Model R3006)</Link></td>
                      <td className="wiki-td">1x</td>
                      <td className="wiki-td text-center">3000</td>
                      <td className="wiki-td text-center">0</td>
                      <td className="wiki-td text-center">N/A</td>
                    </tr>
                    <tr>
                      <td className="wiki-td"><Link to={`/weapons/sights/${slug('Tru-Vision Tritium (Model R338)')}`} className="wiki-link">Tru-Vision Tritium Sights (Model R338)</Link></td>
                      <td className="wiki-td">1x</td>
                      <td className="wiki-td text-center">3000</td>
                      <td className="wiki-td text-center">0</td>
                      <td className="wiki-td text-center">4829</td>
                    </tr>
                    <tr>
                      <td className="wiki-td"><Link to={`/weapons/sights/${slug('Tru-Vision Tritium (Model R270)')}`} className="wiki-link">Tru-Vision Tritium Sights (Model R270)</Link></td>
                      <td className="wiki-td">1x</td>
                      <td className="wiki-td text-center">3000</td>
                      <td className="wiki-td text-center">0</td>
                      <td className="wiki-td text-center">1235</td>
                    </tr>
                    <tr>
                      <td className="wiki-td"><Link to={`/weapons/sights/${slug('Tru-Vision Tritium (Model R243)')}`} className="wiki-link">Tru-Vision Tritium Sights (Model R243)</Link></td>
                      <td className="wiki-td">1x</td>
                      <td className="wiki-td text-center">3000</td>
                      <td className="wiki-td text-center">0</td>
                      <td className="wiki-td text-center">150</td>
                    </tr>
                    <tr>
                      <td className="wiki-td"><Link to={`/weapons/sights/${slug('Tru-Vision Tritium (Model R223)')}`} className="wiki-link">Tru-Vision Tritium Sights (Model R223)</Link></td>
                      <td className="wiki-td">1x</td>
                      <td className="wiki-td text-center">3000</td>
                      <td className="wiki-td text-center">0</td>
                      <td className="wiki-td text-center">426</td>
                    </tr>
                    <tr>
                      <td className="wiki-td"><Link to={`/weapons/sights/${slug('Tru-Vision Tritium (Model R65)')}`} className="wiki-link">Tru-Vision Tritium Sights (Model R65)</Link></td>
                      <td className="wiki-td">1x</td>
                      <td className="wiki-td text-center">3000</td>
                      <td className="wiki-td text-center">0</td>
                      <td className="wiki-td text-center">1066</td>
                    </tr>
                    <tr>
                      <td className="wiki-td"><Link to={`/weapons/sights/${slug('Tru-Vision Tritium (Model R30)')}`} className="wiki-link">Tru-Vision Tritium Sights (Model R30)</Link></td>
                      <td className="wiki-td">1x</td>
                      <td className="wiki-td text-center">3000</td>
                      <td className="wiki-td text-center">0</td>
                      <td className="wiki-td text-center">1573</td>
                    </tr>
                    <tr>
                      <td className="wiki-td"><Link to={`/weapons/sights/${slug('Tru-Vision Tritium (Model R7)')}`} className="wiki-link">Tru-Vision Tritium Sights (Model R7)</Link></td>
                      <td className="wiki-td">1x</td>
                      <td className="wiki-td text-center">3000</td>
                      <td className="wiki-td text-center">0</td>
                      <td className="wiki-td text-center">2314</td>
                    </tr>
                    <tr>
                      <td className="wiki-td"><Link to={`/weapons/sights/${slug('Tru-Vision Tritium (Model AR45)')}`} className="wiki-link">Tru-Vision Tritium Sights (Model AR45)</Link></td>
                      <td className="wiki-td">1x</td>
                      <td className="wiki-td text-center">3000</td>
                      <td className="wiki-td text-center">0</td>
                      <td className="wiki-td text-center">N/A</td>
                    </tr>
                    <tr>
                      <td className="wiki-td"><Link to={`/weapons/sights/${slug('Odin 4-12x33 Rifle Scope')}`} className="wiki-link">Odin 4-12x33 Rifle Scope</Link></td>
                      <td className="wiki-td">4-12x</td>
                      <td className="wiki-td text-center">Free</td>
                      <td className="wiki-td text-center">0.5</td>
                      <td className="wiki-td text-center">N/A</td>
                    </tr>
                    <tr>
                      <td className="wiki-td"><Link to={`/weapons/sights/${slug('Marksman Exakt Reflex Sight')}`} className="wiki-link">Marksman Exakt Reflex Sight</Link></td>
                      <td className="wiki-td">1x</td>
                      <td className="wiki-td text-center">8500</td>
                      <td className="wiki-td text-center">0.5</td>
                      <td className="wiki-td text-center">6290</td>
                    </tr>
                    <tr>
                      <td className="wiki-td"><Link to={`/weapons/sights/${slug('Hyperion 4-8x42 Rifle Scope')}`} className="wiki-link">Hyperion 4-8x42 Rifle Scope</Link></td>
                      <td className="wiki-td">4–8x</td>
                      <td className="wiki-td text-center">12000</td>
                      <td className="wiki-td text-center">0.5</td>
                      <td className="wiki-td text-center">901</td>
                    </tr>
                    <tr>
                      <td className="wiki-td"><Link to={`/weapons/sights/${slug('Helios 4-8x32 Rifle Scope')}`} className="wiki-link">Helios 4-8x32 Rifle Scope</Link></td>
                      <td className="wiki-td">4–8x</td>
                      <td className="wiki-td text-center">24000</td>
                      <td className="wiki-td text-center">0.5</td>
                      <td className="wiki-td text-center">2743</td>
                    </tr>
                    <tr>
                      <td className="wiki-td"><Link to={`/weapons/sights/${slug('GenZero 1-4x20 Night Vision Rifle Scope')}`} className="wiki-link">GenZero 1-4x20 Night Vision Rifle Scope</Link></td>
                      <td className="wiki-td">1–4x</td>
                      <td className="wiki-td text-center">FREE</td>
                      <td className="wiki-td text-center">0.5</td>
                      <td className="wiki-td text-center">N/A</td>
                    </tr>
                    <tr>
                      <td className="wiki-td"><Link to={`/weapons/sights/${slug('Galileo 4-8x32 Muzzleloader Scope')}`} className="wiki-link">Galileo 4-8x32 Muzzleloader Scope</Link></td>
                      <td className="wiki-td">4–8x</td>
                      <td className="wiki-td text-center">FREE</td>
                      <td className="wiki-td text-center">0.5</td>
                      <td className="wiki-td text-center">N/A</td>
                    </tr>
                    <tr>
                      <td className="wiki-td"><Link to={`/weapons/sights/${slug('Ascent 1-4x24 Rifle Scope')}`} className="wiki-link">Ascent 1-4x24 Rifle Scope</Link></td>
                      <td className="wiki-td">1–4x</td>
                      <td className="wiki-td text-center">FREE</td>
                      <td className="wiki-td text-center">0.5</td>
                      <td className="wiki-td text-center">N/A</td>
                    </tr>
                    <tr>
                      <td className="wiki-td"><Link to={`/weapons/sights/${slug('Argus 8-16x50 Rifle Scope')}`} className="wiki-link">Argus 8-16x50 Rifle Scope</Link></td>
                      <td className="wiki-td">8–16x</td>
                      <td className="wiki-td text-center">36000</td>
                      <td className="wiki-td text-center">0.5</td>
                      <td className="wiki-td text-center">3914</td>
                    </tr>
                    <tr>
                      <td className="wiki-td"><Link to={`/weapons/sights/${slug('Angler 4-8x100 Night Vision Rifle Scope')}`} className="wiki-link">Angler 4-8x100 Night Vision Rifle Scope</Link></td>
                      <td className="wiki-td">4-8x</td>
                      <td className="wiki-td text-center">Free</td>
                      <td className="wiki-td text-center">0.5</td>
                      <td className="wiki-td text-center">N/A</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="shotgun-drilling-sights" className="pt-8 mb-20">
              <h2 className="wiki-h2">3. Shotgun & Drilling Sights</h2>
              <div className="wiki-table-container">
                <table className="wiki-table">
                  <thead>
                    <tr className="bg-[var(--wiki-bg-sidebar-header)]">
                      <th className="wiki-th">Sight</th>
                      <th className="wiki-th">Magnification</th>
                      <th className="wiki-th">Price</th>
                      <th className="wiki-th">Weight</th>
                      <th className="wiki-th">Score</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="wiki-td"><Link to={`/weapons/sights/${slug('Falcon 3-9x44 Drilling Scope')}`} className="wiki-link">Falcon 3-9x44 Drilling Scope</Link></td>
                      <td className="wiki-td">3–9x</td>
                      <td className="wiki-td text-center">FREE</td>
                      <td className="wiki-td text-center">0.5</td>
                      <td className="wiki-td text-center">N/A</td>
                    </tr>
                    <tr>
                      <td className="wiki-td"><Link to={`/weapons/sights/${slug('Hermes 3-7x33 Handgun-Shotgun Scope')}`} className="wiki-link">Hermes 3-7x33 Handgun-Shotgun Scope</Link></td>
                      <td className="wiki-td">3-7x</td>
                      <td className="wiki-td text-center">Free</td>
                      <td className="wiki-td text-center">0.5</td>
                      <td className="wiki-td text-center">N/A</td>
                    </tr>
                    <tr>
                      <td className="wiki-td"><Link to={`/weapons/sights/${slug('Tru-Vision Tritium (Model SOU12)')}`} className="wiki-link">Tru-Vision Tritium Sights (Model SOU12)</Link></td>
                      <td className="wiki-td">1x</td>
                      <td className="wiki-td text-center">3000</td>
                      <td className="wiki-td text-center">0</td>
                      <td className="wiki-td text-center">280</td>
                    </tr>
                    <tr>
                      <td className="wiki-td"><Link to={`/weapons/sights/${slug('Tru-Vision Tritium (Model SPA12)')}`} className="wiki-link">Tru-Vision Tritium Sights (Model SPA12)</Link></td>
                      <td className="wiki-td">1x</td>
                      <td className="wiki-td text-center">3000</td>
                      <td className="wiki-td text-center">0</td>
                      <td className="wiki-td text-center">2314</td>
                    </tr>
                    <tr>
                      <td className="wiki-td"><Link to={`/weapons/sights/${slug('Meridian 1-4x20 Shotgun Scope')}`} className="wiki-link">Meridian 1-4x20 Shotgun Scope</Link></td>
                      <td className="wiki-td">1–4x</td>
                      <td className="wiki-td text-center">12000</td>
                      <td className="wiki-td text-center">0.5</td>
                      <td className="wiki-td text-center">5406</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="bow-crossbow-sights" className="pt-8 mb-20">
              <h2 className="wiki-h2">4. Bow & Crossbow Sights</h2>
              <div className="wiki-table-container">
                <table className="wiki-table">
                  <thead>
                    <tr className="bg-[var(--wiki-bg-sidebar-header)]">
                      <th className="wiki-th">Sight</th>
                      <th className="wiki-th">Magnification</th>
                      <th className="wiki-th">Price</th>
                      <th className="wiki-th">Weight</th>
                      <th className="wiki-th">Score</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="wiki-td"><Link to={`/weapons/sights/${slug('Brightsight Rangefinder Bow Sight')}`} className="wiki-link">Brightsight Rangefinder Bow Sight</Link></td>
                      <td className="wiki-td">1x</td>
                      <td className="wiki-td text-center">FREE</td>
                      <td className="wiki-td text-center">2</td>
                      <td className="wiki-td text-center">N/A</td>
                    </tr>
                    <tr>
                      <td className="wiki-td"><Link to={`/weapons/sights/${slug('Brightsight Single-Pin Sight')}`} className="wiki-link">Brightsight Single-Pin Sight</Link></td>
                      <td className="wiki-td">1x</td>
                      <td className="wiki-td text-center">3000</td>
                      <td className="wiki-td text-center">0.5</td>
                      <td className="wiki-td text-center">426</td>
                    </tr>
                    <tr>
                      <td className="wiki-td"><Link to={`/weapons/sights/${slug('Hawken 1-5x30 Crossbow Scope')}`} className="wiki-link">Hawken 1-5x30 Crossbow Scope</Link></td>
                      <td className="wiki-td">1–5x</td>
                      <td className="wiki-td text-center">FREE</td>
                      <td className="wiki-td text-center">0.5</td>
                      <td className="wiki-td text-center">N/A</td>
                    </tr>
                    <tr>
                      <td className="wiki-td"><Link to={`/weapons/sights/${slug('Swift-Mark 3 Bow Sight')}`} className="wiki-link">Swift-Mark 3 Bow Sight</Link></td>
                      <td className="wiki-td">1x</td>
                      <td className="wiki-td text-center">12000</td>
                      <td className="wiki-td text-center">0.5</td>
                      <td className="wiki-td text-center">2523</td>
                    </tr>
                    <tr>
                      <td className="wiki-td"><Link to={`/weapons/sights/${slug('Swift-Mark 5 Bow Sight')}`} className="wiki-link">Swift-Mark 5 Bow Sight</Link></td>
                      <td className="wiki-td">1x</td>
                      <td className="wiki-td text-center">24000</td>
                      <td className="wiki-td text-center">0.5</td>
                      <td className="wiki-td text-center">5406</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="handgun-shotgun-sights" className="pt-8 mb-20">
              <h2 className="wiki-h2">5. Handgun & Shotgun Sights</h2>
              <div className="wiki-table-container">
                <table className="wiki-table">
                  <thead>
                    <tr className="bg-[var(--wiki-bg-sidebar-header)]">
                      <th className="wiki-th">Sight</th>
                      <th className="wiki-th">Magnification</th>
                      <th className="wiki-th">Price</th>
                      <th className="wiki-th">Weight</th>
                      <th className="wiki-th">Score</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="wiki-td"><Link to={`/weapons/sights/${slug('Goshawk Redeye 2-4x20 Handgun Scope')}`} className="wiki-link">Goshawk Redeye 2-4x20 Handgun Scope</Link></td>
                      <td className="wiki-td">2–4x</td>
                      <td className="wiki-td text-center">12000</td>
                      <td className="wiki-td text-center">0.5</td>
                      <td className="wiki-td text-center">2115</td>
                    </tr>
                    <tr>
                      <td className="wiki-td"><Link to={`/weapons/sights/${slug('Hermes 3-7x33 Handgun-Shotgun Scope')}`} className="wiki-link">Hermes 3-7x33 Handgun-Shotgun Scope</Link></td>
                      <td className="wiki-td">3-7x</td>
                      <td className="wiki-td text-center">Free</td>
                      <td className="wiki-td text-center">0.5</td>
                      <td className="wiki-td text-center">N/A</td>
                    </tr>
                    <tr>
                      <td className="wiki-td"><Link to={`/weapons/sights/${slug('Red Raptor Reflex Sight')}`} className="wiki-link">Red Raptor Reflex Sight</Link></td>
                      <td className="wiki-td">1x</td>
                      <td className="wiki-td text-center">6000</td>
                      <td className="wiki-td text-center">0.5</td>
                      <td className="wiki-td text-center">426</td>
                    </tr>
                    <tr>
                      <td className="wiki-td"><Link to={`/weapons/sights/${slug('Tru-Vision Tritium (Model H22)')}`} className="wiki-link">Tru-Vision Tritium Sights (Model H22)</Link></td>
                      <td className="wiki-td">1x</td>
                      <td className="wiki-td text-center">3000</td>
                      <td className="wiki-td text-center">0</td>
                      <td className="wiki-td text-center">N/A</td>
                    </tr>
                    <tr>
                      <td className="wiki-td"><Link to={`/weapons/sights/${slug('Tru-Vision Tritium (Model H44)')}`} className="wiki-link">Tru-Vision Tritium Sights (Model H44)</Link></td>
                      <td className="wiki-td">1x</td>
                      <td className="wiki-td text-center">3000</td>
                      <td className="wiki-td text-center">0</td>
                      <td className="wiki-td text-center">1573</td>
                    </tr>
                    <tr>
                      <td className="wiki-td"><Link to={`/weapons/sights/${slug('Tru-Vision Tritium (Model H357)')}`} className="wiki-link">Tru-Vision Tritium Sights (Model H357)</Link></td>
                      <td className="wiki-td">1x</td>
                      <td className="wiki-td text-center">3000</td>
                      <td className="wiki-td text-center">0</td>
                      <td className="wiki-td text-center">150</td>
                    </tr>
                    <tr>
                      <td className="wiki-td"><Link to={`/weapons/sights/${slug('Tru-Vision Tritium (Model H454)')}`} className="wiki-link">Tru-Vision Tritium Sights (Model H454)</Link></td>
                      <td className="wiki-td">1x</td>
                      <td className="wiki-td text-center">3000</td>
                      <td className="wiki-td text-center">0</td>
                      <td className="wiki-td text-center">3914</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
