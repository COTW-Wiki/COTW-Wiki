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

  const styles = {
    reserveWrapper: { marginBottom: '60px' },
    sectionHeader: { fontSize: '1.2rem', fontWeight: 'bold', color: '#dbe4eb', marginBottom: '10px', display: 'flex', alignItems: 'center' },
    linkIcon: { color: '#6fb2e6', marginLeft: '10px', fontSize: '0.8rem', cursor: 'pointer', textDecoration: 'none' },
    tableContainer: { display: 'grid', gridTemplateColumns: '100px repeat(9, 1fr)', backgroundColor: '#0f2e48', borderRadius: '4px', overflow: 'hidden', border: '1px solid #1f405a' },
    headerRow: { display: 'contents' },
    headerCell: { backgroundColor: '#16334a', padding: '10px 5px', textAlign: 'center', borderBottom: '1px solid #3a5a75', borderRight: '1px solid #1f405a', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end', color: '#fff', fontWeight: 'bold' },
    classHeaderIcon: { width: '32px', height: 'auto', marginBottom: '5px', filter: 'brightness(0) invert(1)' },
    gridRow: { display: 'contents' },
    rowLabel: { backgroundColor: '#16334a', padding: '20px 10px', display: 'flex', alignItems: 'center', fontWeight: 'bold', borderRight: '1px solid #3a5a75', borderTop: '1px solid #1f405a' },
    gridCell: { padding: '10px 5px', borderRight: '1px solid #1f405a', borderTop: '1px solid #1f405a', display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '120px', position: 'relative' },
    emptyMarker: { color: '#88a0b8', fontSize: '1.2rem', marginTop: '40px', fontStyle: 'italic', opacity: 0.5 },
    animalCard: { display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '15px', textAlign: 'center', width: '100%', textDecoration: 'none', color: 'inherit' },
    hexIcon: { width: '64px', height: '64px', objectFit: 'contain', marginBottom: '8px', filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.5))' },
    animalName: { fontSize: '0.8rem', lineHeight: '1.2', maxWidth: '90px' }
  };

  return (
    <div id={reserveData.id} style={styles.reserveWrapper}>
      <div style={styles.sectionHeader}>
        {reserveData.name}
        <span style={styles.linkIcon}></span>
      </div>
      <div style={styles.tableContainer}>
        {/* Header Row */}
        <div style={styles.headerRow}>
          <div style={{ ...styles.headerCell, borderBottom: 'none', backgroundColor: '#16334a', width: '100%' }}>Class</div>
          {classes.map((cls, i) => (
            <div key={cls} style={styles.headerCell}>
              <img src={classIcons[i]} alt={`Class ${cls}`} style={styles.classHeaderIcon} />
              <span>{cls}</span>
            </div>
          ))}
        </div>
        {/* Body Row */}
        <div style={styles.gridRow}>
          <div style={styles.rowLabel}>Animals</div>
          {classes.map((cls) => {
            const animalList = reserveData.animals[cls] || [];
            return (
              <div key={cls} style={styles.gridCell}>
                {animalList.length > 0 ? (
                  animalList.map((animal, idx) => (
                    <Link key={idx} to={toPath(animal.name)} style={styles.animalCard}>
                      <img src={animal.icon} alt={animal.name} style={styles.hexIcon} />
                      <span style={styles.animalName}>{animal.name}</span>
                    </Link>
                  ))
                ) : (
                  <span style={styles.emptyMarker}>//</span>
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