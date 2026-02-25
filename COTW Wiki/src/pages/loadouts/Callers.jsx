import { useState } from 'react';
import { callers } from '../../data/callers';
import '../../styles/wiki.css';

export default function CallersPage() {
  const [search, setSearch] = useState('');
  const [isTocOpen, setIsTocOpen] = useState(true);

  const scrollTo = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const filteredCallers = callers.filter((caller) =>
    caller.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="wiki-page">
      <div className="wiki-inner">
        <h1 className="wiki-header">Animal Callers</h1>

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
                  <li><a href="#search" onClick={(e) => scrollTo(e, 'search')} className="wiki-link">1. Search</a></li>
                  <li><a href="#callers-table" onClick={(e) => scrollTo(e, 'callers-table')} className="wiki-link">2. Callers Table</a></li>
                </ul>
              )}
            </div>
          </aside>

          {/* MAIN */}
          <main className="wiki-main">
            <section id="search" className="wiki-p-mb">
              <input
                type="text"
                placeholder="Search caller..."
                aria-label="Search caller"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
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

            <section id="callers-table" className="pt-8 mb-20">
              <h2 className="wiki-h2">2. Callers Table</h2>

              <div className="wiki-table-container">
                <table className="wiki-table">
                  <thead>
                    <tr className="bg-[var(--wiki-bg-sidebar-header)]">
                      <th className="wiki-th text-left">Name</th>
                      <th className="wiki-th text-left">Suitable For</th>
                      <th className="wiki-th text-left">Range</th>
                      <th className="wiki-th text-left">Effectiveness</th>
                      <th className="wiki-th text-left">Sound Type</th>
                      <th className="wiki-th text-left">DLC</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredCallers.map((caller, idx) => (
                      <tr key={idx}>
                        <td className="wiki-td"><strong>{caller.name}</strong></td>
                        <td className="wiki-td">{caller.suitableFor.join(', ')}</td>
                        <td className="wiki-td">{caller.range}</td>
                        <td className="wiki-td">{caller.effectiveness}</td>
                        <td className="wiki-td">{caller.soundType}</td>
                        <td className="wiki-td">
                          {caller.dlc ? (
                            <span
                              className="wiki-inline-block"
                              style={{
                                backgroundColor: 'var(--wiki-bg-sidebar-header)',
                                border: '1px solid var(--wiki-accent-gold)',
                                color: 'var(--wiki-text)',
                                borderRadius: 6,
                                padding: '2px 10px',
                                fontSize: '0.75rem',
                                fontWeight: 800,
                                letterSpacing: '0.5px',
                                textTransform: 'uppercase',
                              }}
                            >
                              DLC
                            </span>
                          ) : (
                            '—'
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {filteredCallers.length === 0 && (
                <p className="wiki-fs-sm" style={{ color: 'var(--wiki-text-muted)', marginTop: 12 }}>
                  No callers found.
                </p>
              )}
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}