import React, { useState } from 'react';

const AnimalTableOfContents = () => {
  const [isOpen, setIsOpen] = useState(true);

  const styles = {
    container: {
      backgroundColor: '#0b1e3b', // Deep dark blue background
      border: '1px solid #3a5a75', // Thin lighter border
      borderRadius: '4px',
      color: '#fff',
      width: '250px', // Fixed width like a sidebar element
      fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      fontSize: '14px',
      marginTop: '20px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
    },
    header: {
      padding: '8px 12px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: isOpen ? '1px solid #3a5a75' : 'none',
    },
    title: {
      fontWeight: 'bold',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    },
    toggleBtn: {
      color: '#6fb2e6', // Light blue link color
      fontSize: '0.85em',
      cursor: 'pointer',
      userSelect: 'none',
    },
    list: {
      margin: 0,
      padding: '10px 15px 10px 35px', // Padding to align numbers
      listStyleType: 'decimal', // Standard 1. 2. 3.
      display: isOpen ? 'block' : 'none',
    },
    listItem: {
      marginBottom: '6px',
      color: '#fff', // White for numbers
      cursor: 'pointer',
    },
    linkText: {
      color: '#6fb2e6', // Blue for text
    }
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={styles.container}>
      {/* Header Section */}
      <div style={styles.header}>
        <div style={styles.title}>
          {/* Simple SVG Icon for the list symbol */}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
            <circle cx="2" cy="7" r="1"/>
            <circle cx="2" cy="12" r="1"/>
            <circle cx="2" cy="17" r="1"/>
          </svg>
          Contents
        </div>
        <div style={styles.toggleBtn} onClick={() => setIsOpen(!isOpen)}>
          [{isOpen ? 'hide' : 'show'}]
        </div>
      </div>

      {/* List Section */}
      <ol style={styles.list}>
        <li style={styles.listItem} onClick={() => scrollToSection('features')}>
          <span style={styles.linkText}>Features</span>
        </li>
        <li style={styles.listItem} onClick={() => scrollToSection('tips')}>
          <span style={styles.linkText}>Tips</span>
        </li>
        <li style={styles.listItem} onClick={() => scrollToSection('need-zones')}>
          <span style={styles.linkText}>Need Zone Times</span>
        </li>
        <li style={styles.listItem}>
          <span style={styles.linkText} onClick={() => scrollToSection('plumage-variants')}>Plumage Variants</span>
          <ol style={{listStyleType: 'decimal', marginTop: '6px', marginLeft: '16px', paddingLeft: '6px'}}>
            <li style={styles.listItem} onClick={() => scrollToSection('plumage-male')}>
              <span style={styles.linkText}>Male</span>
            </li>
            <li style={styles.listItem} onClick={() => scrollToSection('plumage-female')}>
              <span style={styles.linkText}>Female</span>
            </li>
          </ol>
        </li>
        <li style={styles.listItem} onClick={() => scrollToSection('plumage-rarity')}>
          <span style={styles.linkText}>Plumage Variant Rarity</span>
        </li>
        <li style={styles.listItem} onClick={() => scrollToSection('trivia')}>
          <span style={styles.linkText}>Trivia</span>
        </li>
        <li style={styles.listItem} onClick={() => scrollToSection('references')}>
          <span style={styles.linkText}>References</span>
        </li>
      </ol>
    </div>
  );
};

export default AnimalTableOfContents;
