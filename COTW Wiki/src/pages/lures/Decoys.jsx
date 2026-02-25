import { useState } from 'react';
import { decoys } from '../../data/decoys';
import { Link } from 'react-router-dom';
import '../../styles/wiki.css';

function animalLink(name) {
  return `/animals/${encodeURIComponent(name.replace(/\s+/g, '-'))}`;
}

export default function DecoysPage() {
  const [search, setSearch] = useState('');
  const [isTocOpen, setIsTocOpen] = useState(true);

  const scrollTo = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const filtered = decoys.filter(d =>
    d.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="wiki-page">
      <div className="wiki-inner">
        <h1 className="wiki-header">Decoys</h1>

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
                  <li><a href="#overview" onClick={(e) => scrollTo(e, 'overview')} className="wiki-link">1. Overview</a></li>
                  <li><a href="#search" onClick={(e) => scrollTo(e, 'search')} className="wiki-link">2. Search</a></li>
                  <li><a href="#decoys" onClick={(e) => scrollTo(e, 'decoys')} className="wiki-link">3. Decoys</a></li>
                </ul>
              )}
            </div>
          </aside>

          {/* MAIN */}
          <main className="wiki-main">
            <section id="overview" className="wiki-p-mb">
              <div className="wiki-section-card">
                <p>
                  Decoys are a special kind of lure. They mimic animals during different activities such as feeding or
                  watching to trick the animal into believing the place is safe. Currently, full-body decoys for the
                  hunting of <Link to={animalLink('Canada Goose')} state={{ from: '/lures/decoys' }} className="wiki-link">Canada Geese</Link>,{' '}
                  <Link to={animalLink('Cinnamon Teal')} state={{ from: '/lures/decoys' }} className="wiki-link">Cinnamon Teals</Link>,{' '}
                  <Link to={animalLink('Harlequin Duck')} state={{ from: '/lures/decoys' }} className="wiki-link">Harlequin Ducks</Link>,{' '}
                  <Link to={animalLink('Mallard')} state={{ from: '/lures/decoys' }} className="wiki-link">Mallards</Link>,{' '}
                  <Link to={animalLink('Eastern Wild Turkey')} state={{ from: '/lures/decoys' }} className="wiki-link">Eastern Wild Turkeys</Link>,{' '}
                  <Link to={animalLink('Merriam Turkey')} state={{ from: '/lures/decoys' }} className="wiki-link">Merriam Turkeys</Link>, and{' '}
                  <Link to={animalLink('Rio Grande Turkey')} state={{ from: '/lures/decoys' }} className="wiki-link">Rio Grande Turkeys</Link> are available. Multiple decoys can be used at once to increase efficacy, however only up to a
                  limit of 20. Most decoys have a caller you can use simultaneously to further increase the chances of
                  birds landing.
                </p>
              </div>
            </section>

            <section id="search" className="wiki-p-mb">
              <input
                type="text"
                placeholder="Search decoy..."
                aria-label="Search decoy"
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full sm:w-1/2"
                style={{
                  backgroundColor: 'var(--wiki-bg-sidebar)',
                  color: 'var(--wiki-text)',
                  border: '1px solid var(--wiki-border-accent)',
                  borderRadius: 12,
                  padding: '10px 14px',
                  outline: 'none',
                }}
              />
            </section>

            <section id="decoys" className="pt-8 mb-20">
              <h2 className="wiki-h2">3. Decoys</h2>

              <div className="space-y-6">
                {filtered.map((d, idx) => (
                  <div key={idx} className="wiki-section-card" style={{ padding: 0 }}>
                    <div
                      className="wiki-uniform-card-header"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: 12,
                        textAlign: 'left',
                      }}
                    >
                      <span>{d.name}</span>
                      {d.dlc && (
                        <span
                          className="wiki-inline-block"
                          style={{
                            backgroundColor: 'transparent',
                            border: '1px solid var(--wiki-accent-gold)',
                            color: '#fff',
                            borderRadius: 6,
                            padding: '2px 10px',
                            fontSize: '0.75rem',
                            fontWeight: 800,
                            letterSpacing: '0.5px',
                            textTransform: 'uppercase',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          DLC
                        </span>
                      )}
                    </div>

                    <div style={{ padding: '20px 30px 30px 30px' }}>
                      {d.description && <p className="wiki-p-mb">{d.description}</p>}

                      <ul className="wiki-ul">
                        {d.target && <li className="wiki-li"><strong>Target:</strong> {d.target.join(', ')}</li>}
                        {d.groupSize != null && <li className="wiki-li"><strong>Group size:</strong> {d.groupSize}</li>}
                        {d.attractionStrength != null && <li className="wiki-li"><strong>Attraction strength:</strong> {d.attractionStrength}</li>}
                        {d.range && <li className="wiki-li"><strong>Range:</strong> {d.range}</li>}
                        {d.weight && <li className="wiki-li"><strong>Weight:</strong> {d.weight}</li>}
                      </ul>
                    </div>
                  </div>
                ))}

                {filtered.length === 0 && (
                  <p className="wiki-fs-sm" style={{ color: 'var(--wiki-text-muted)' }}>No decoys found.</p>
                )}
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}