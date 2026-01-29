import React, { useState } from 'react';

const AnimalTableOfContents = () => {
  const [isOpen, setIsOpen] = useState(true);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="wiki-toc-panel">
      <div className={`wiki-toc-panel-header ${!isOpen ? 'collapsed' : ''}`}>
        <div className="wiki-toc-panel-title">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
            <circle cx="2" cy="7" r="1"/>
            <circle cx="2" cy="12" r="1"/>
            <circle cx="2" cy="17" r="1"/>
          </svg>
          Contents
        </div>
        <div className="wiki-toc-panel-toggle" onClick={() => setIsOpen(!isOpen)} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && setIsOpen(!isOpen)}>
          [{isOpen ? 'hide' : 'show'}]
        </div>
      </div>

      <ol className={`wiki-toc-panel-list ${!isOpen ? 'hidden' : ''}`}>
        <li className="wiki-toc-panel-item" onClick={() => scrollToSection('features')}>
          <span className="wiki-toc-panel-link">Features</span>
        </li>
        <li className="wiki-toc-panel-item" onClick={() => scrollToSection('tips')}>
          <span className="wiki-toc-panel-link">Tips</span>
        </li>
        <li className="wiki-toc-panel-item" onClick={() => scrollToSection('need-zones')}>
          <span className="wiki-toc-panel-link">Need Zone Times</span>
        </li>
        <li className="wiki-toc-panel-item">
          <span className="wiki-toc-panel-link" onClick={() => scrollToSection('plumage-variants')}>Plumage Variants</span>
          <ol className="wiki-toc-panel-list">
            <li className="wiki-toc-panel-item" onClick={() => scrollToSection('plumage-male')}>
              <span className="wiki-toc-panel-link">Male</span>
            </li>
            <li className="wiki-toc-panel-item" onClick={() => scrollToSection('plumage-female')}>
              <span className="wiki-toc-panel-link">Female</span>
            </li>
          </ol>
        </li>
        <li className="wiki-toc-panel-item" onClick={() => scrollToSection('plumage-rarity')}>
          <span className="wiki-toc-panel-link">Plumage Variant Rarity</span>
        </li>
        <li className="wiki-toc-panel-item" onClick={() => scrollToSection('trivia')}>
          <span className="wiki-toc-panel-link">Trivia</span>
        </li>
        <li className="wiki-toc-panel-item" onClick={() => scrollToSection('references')}>
          <span className="wiki-toc-panel-link">References</span>
        </li>
      </ol>
    </div>
  );
};

export default AnimalTableOfContents;
