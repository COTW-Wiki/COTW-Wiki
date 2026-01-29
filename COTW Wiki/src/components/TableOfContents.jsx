import React, { useState } from 'react';

const TableOfContents = () => {
  const [isVisible, setIsVisible] = useState(true);

  // --- DATA ---
  // Hardcoded labels to match the specific numbering in the screenshot exactly
  const tocItems = [
    { id: 'map', label: '1. Map' },
    { 
      id: 'huntable-animals', 
      label: '2. Huntable Animals',
      subItems: [
        { id: 'hirschfelden', label: '2.1. Hirschfelden Animals (9 total, 1 unique, 4 great ones)' },
        { id: 'layton', label: '2.2. Layton Lake Animals (9 total, 3 unique, 3 great ones)' },
        { id: 'medved', label: '2.3. Medved-Taiga Animals (8 total, 2 unique, 3 great one)' },
        { id: 'vurhonga', label: '2.4. Vurhonga Savanna Animals (10 total, 9 unique)' },
        { id: 'parque', label: '2.5. Parque Fernando Animals (8 total, 2 unique, 2 great ones)' },
        { id: 'yukon', label: '2.6. Yukon Valley Animals (8 total, 3 unique, 3 great ones)' },
        { id: 'cuatro', label: '2.7. Cuatro Colinas Animals (11 total, 7 unique, 2 great ones)' },
        { id: 'silver', label: '2.8. Silver Ridge Peaks Animals (9 total, 2 unique, 2 great ones)' },
        { id: 'te-awaroa', label: '2.9. Te Awaroa Animals (10 total, 2 unique, 3 great ones)' },
        { id: 'rancho', label: '2.10. Rancho del Arroyo Animals (10 total, 4 unique, 3 great one)' },
        { id: 'mississippi', label: '2.11. Mississippi Acres Animals (10 total, 2 unique, 2 great ones)' },
        { id: 'revontuli', label: '2.12. Revontuli Coast (19 total, 4 unique, 2 great ones)' },
        { id: 'new-england', label: '2.13. New England Mountains (15 total, 1 unique, 5 great ones)' },
        { id: 'emerald', label: '2.14. Emerald Coast (14 total, 8 unique, 3 great ones)' },
        { id: 'sundarpatan', label: '2.15. Sundarpatan (13 total, 9 unique, 1 great one)' },
        { id: 'salzwiesen', label: '2.16. Salzwiesen Park (15 total, 2 unique, 2 great ones)' },
        { id: 'askiy', label: '2.17. Askiy Ridge Hunting Preserve (19 total, 8 unique, 5 great ones)' },
      ]
    },
    { id: 'release-date', label: '3. Animals by release date (table)' }
  ];

  return (
    <div className="wiki-toc-panel">
      <div className="wiki-panel-header">
        <span>🔢 Contents</span>
        <span 
          className="wiki-toc-panel-toggle" 
          onClick={() => setIsVisible(!isVisible)}
        >
          [{isVisible ? 'hide' : 'show'}]
        </span>
      </div>

      {isVisible && (
        <ul className="wiki-list-plain">
          {tocItems.map((item) => (
            <li key={item.id} className="wiki-li">
              {/* Main Level Link */}
              <a 
                href={`#${item.id}`} 
                onClick={(e) => handleScroll(e, item.id)}
                className="wiki-link"
                onMouseEnter={(e) => e.target.style.color = styles.linkHover.color}
                onMouseLeave={(e) => e.target.style.color = styles.link.color}
              >
                {item.label}
              </a>

              {/* Sub Items (if any) */}
              {item.subItems && (
                <ul className="wiki-toc-panel-list">
                  {item.subItems.map((sub) => (
                    <li key={sub.id} className="wiki-li">
                      <a 
                        href={`#${sub.id}`} 
                        onClick={(e) => handleScroll(e, sub.id)}
                        className="wiki-link"
                        onMouseEnter={(e) => e.target.style.color = styles.linkHover.color}
                        onMouseLeave={(e) => e.target.style.color = styles.link.color}
                      >
                        {sub.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TableOfContents;
