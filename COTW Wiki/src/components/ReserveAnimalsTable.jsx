import React from 'react';
import { Link } from 'react-router-dom';

// Class Icons (General)
import class1Icon from '../assets/Class1Icon.webp';
import class2Icon from '../assets/Class2Icon.webp';
import class3Icon from '../assets/Class3Icon.webp';
import class4Icon from '../assets/Class4Icon.webp';
import class5Icon from '../assets/Class5Icon.webp';
import class6Icon from '../assets/Class6Icon.webp';
import class7Icon from '../assets/Class7Icon.webp';
import class8Icon from '../assets/Class8Icon.webp';
import class9Icon from '../assets/Class9Icon.webp';

const ReserveAnimalsTable = ({ reserveData }) => {
  const classes = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const classIcons = [class1Icon, class2Icon, class3Icon, class4Icon, class5Icon, class6Icon, class7Icon, class8Icon, class9Icon];

  // Helper to build URL
  const toPath = (name) => {
    const slug = name.replace(/[^a-zA-Z0-9]/g, '');
    return `/animals/${slug}`;
  };

  return (
    <div id={reserveData.id} className="wiki-reserve-card">
      <div className="wiki-section-header">
        {reserveData.name}
        <span className="wiki-release-link-icon"></span>
      </div>
      <div className="wiki-reserve-table">
        {/* Header Row */}
        <div className="wiki-reserve-header-row">
          <div style={{ ...styles.headerCell, borderBottom: 'none', backgroundColor: '#16334a', width: '100%' }}>Class</div>
          {classes.map((cls, i) => (
            <div key={cls} className="wiki-reserve-header-cell">
              <img src={classIcons[i]} alt={`Class ${cls}`} className="wiki-class-icon" />
              <span>{cls}</span>
            </div>
          ))}
        </div>
        {/* Body Row */}
        <div className="wiki-reserve-grid-row">
          <div className="wiki-reserve-row-label">Animals</div>
          {classes.map((cls) => {
            const animalList = reserveData.animals[cls] || [];
            return (
              <div key={cls} className="wiki-reserve-grid-cell">
                {animalList.length > 0 ? (
                  animalList.map((animal, idx) => (
                    <Link key={idx} to={toPath(animal.name)} className="wiki-reserve-animal-card">
                      <img src={animal.icon} alt={animal.name} className="wiki-reserve-hex-icon" />
                      <span className="wiki-reserve-animal-name">{animal.name}</span>
                    </Link>
                  ))
                ) : (
                  <span className="wiki-reserve-empty">//</span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ReserveAnimalsTable;