import React from 'react';
import { Link } from 'react-router-dom';
import worldMap from '../assets/world-map-vector-removebg-preview.png';
import reserveLogo from '../assets/Layton_Lake-removebg-preview.png';
import hirschLogo from '../assets/Hirschfelden_reserve_logo-removebg-preview.png';
import yukonLogo from '../assets/Yukon_Valley-removebg-preview.png';
import cuatroLogo from '../assets/Cuatro_Collinas-removebg-preview.png';
import silverLogo from '../assets/Silver_Ridge_Peaks-removebg-preview (1).png';
import teAwaroaLogo from '../assets/Te_Awaroa-removebg-preview (1).png';
import ranchoLogo from '../assets/Rancho_Del_Arroyo-removebg-preview.png';
import askiyLogo from '../assets/Aisky_Ridge-removebg-preview.png';
import mississippiLogo from '../assets/Mississippi_Acres-removebg-preview.png';
import salzwiesenLogo from '../assets/Salzwiesen-removebg-preview.png';
import newEnglandLogo from '../assets/New_England-removebg-preview.png';
import sundarLogo from '../assets/Sundarpartan-removebg-preview.png';
import medvedLogo from '../assets/Medved_taiga-removebg-preview.png';
import parqueFernandoLogo from '../assets/Parque_Fernando-removebg-preview.png';
import revontuliLogo from '../assets/Revontuli_Coast-removebg-preview.png';
import geminiLogo from '../assets/Gemini_Generated_Image_do1hjzdo1hjzdo1h-removebg-preview.png';
import emeraldLogo from '../assets/Emerald_coast-removebg-preview (1).png';

export default function WorldMap() {
  
  const markerBase = {
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    transition: 'all 0.2s ease-in-out',
    zIndex: 10,
  };

  const styles = {
    container: {
      position: 'relative',
      width: '100%',
      maxWidth: '1200px',
      margin: '0 auto',
      backgroundColor: '#05121c',
      borderRadius: '12px',
      overflow: 'hidden',
      border: '1px solid #1f405a',
      padding: 0
    },
    mapImage: {
      width: '100%',
      height: 'auto',
      display: 'block',
      opacity: '0.6',
    },
    // ADJUSTED PERCENTAGES BASED ON REFERENCE MAP
    yukon:       { ...markerBase, top: '36%', left: '8.5%', width: '9%' },
    askiy:       { ...markerBase, top: '40%', left: '18%', width: '5%' },
    layton:      { ...markerBase, top: '47.5%', left: '15%', width: '5%' },
    silver:      { ...markerBase, top: '51%', left: '20%', width: '4.5%' },
    rancho:      { ...markerBase, top: '64%', left: '23%', width: '10%' },
    mississippi: { ...markerBase, top: '56%', left: '25.1%', width: '4%' },
    newEngland:  { ...markerBase, top: '49%', left: '28.4%', width: '5%' },
    
    parque:      { ...markerBase, top: '85%', left: '30.9%', width: '12%' },
    
    salzwiesen:  { ...markerBase, top: '45.3%', left: '48.8%', width: '3%' },
    revontuli:   { ...markerBase, top: '37%', left: '54%', width: '4%' },
    hirsch:      { ...markerBase, top: '48%', left: '50%', width: '2.5%' },
    cuatro:      { ...markerBase, top: '53%', left: '46%', width: '8%' },
    
    vurhonga:    { ...markerBase, top: '76%', left: '56.6%', width: '5%' },
    
    medved:      { ...markerBase, top: '28%', left: '75%', width: '4%' },
    sundar:      { ...markerBase, top: '59%', left: '68%', width: '4%' },
    
    emerald:     { ...markerBase, top: '78.3%', left: '85.3%', width: '5.5%' },
    teawaroa:    { ...markerBase, top: '89.7%', left: '92.6%', width: '3.5%' },
    
    // Placeholder for generated or unknown
    gemini:      { ...markerBase, top: '75%', left: '52%', width: '4%' },
  };

  return (
    <div className="world-map-wrapper" style={styles.container}>
      <style>{` 
        .world-map-wrapper a:hover {
          transform: translate(-50%, -50%) scale(1.3) !important;
          z-index: 100 !important;
        }
        .world-map-wrapper a:hover img {
          filter: sepia(1) saturate(10000%) hue-rotate(10deg) brightness(1.3);
        }
        .world-map-wrapper img {
          max-width: 100%;
          height: auto;
          pointer-events: none;
        }
      `}</style>

      <img src={worldMap} alt="World Map" style={styles.mapImage} />

      {/* NORTH AMERICA */}
      <Link to="/maps/yukon-valley" style={styles.yukon} data-tooltip="Yukon Valley"><img src={yukonLogo} alt="" /></Link>
      <Link to="/maps/askiy-ridge" style={styles.askiy} data-tooltip="Askiy Ridge"><img src={askiyLogo} alt="" /></Link>
      <Link to="/maps/layton-lake" style={styles.layton} data-tooltip="Layton Lake District"><img src={reserveLogo} alt="" /></Link>
      <Link to="/maps/silver-ridge-peaks" style={styles.silver} data-tooltip="Silver Ridge Peaks"><img src={silverLogo} alt="" /></Link>
      <Link to="/maps/rancho-del-arroyo" style={styles.rancho} data-tooltip="Rancho del Arroyo"><img src={ranchoLogo} alt="" /></Link>
      <Link to="/maps/mississippi-acres" style={styles.mississippi} data-tooltip="Mississippi Acres"><img src={mississippiLogo} alt="" /></Link>
      <Link to="/maps/new-england-mountains" style={styles.newEngland} data-tooltip="New England Mountains"><img src={newEnglandLogo} alt="" /></Link>

      {/* SOUTH AMERICA */}
      <Link to="/maps/parque-fernando" style={styles.parque} data-tooltip="Parque Fernando"><img src={parqueFernandoLogo} alt="" /></Link>

      {/* EUROPE */}
      <Link to="/maps/salzwiesen-park" style={styles.salzwiesen} data-tooltip="Salzwiesen Park"><img src={salzwiesenLogo} alt="" /></Link>
      <Link to="/maps/revontuli-coast" style={styles.revontuli} data-tooltip="Revontuli Coast"><img src={revontuliLogo} alt="" /></Link>
      <Link to="/maps/hirschfelden" style={styles.hirsch} data-tooltip="Hirschfelden Hunting Reserve"><img src={hirschLogo} alt="" /></Link>
      <Link to="/maps/cuatro-colinas" style={styles.cuatro} data-tooltip="Cuatro Colinas Game Reserve"><img src={cuatroLogo} alt="" /></Link>

      {/* AFRICA */}
      <Link to="/maps/vurhonga" style={styles.vurhonga} data-tooltip="Vurhonga Savanna"><img src={geminiLogo} alt="" /></Link>

      {/* ASIA */}
      <Link to="/maps/medved-taiga" style={styles.medved} data-tooltip="Medved-Taiga National Park"><img src={medvedLogo} alt="" /></Link>
      <Link to="/maps/sundarpatan" style={styles.sundar} data-tooltip="Sundarpatan"><img src={sundarLogo} alt="" /></Link>

      {/* OCEANIA */}
      <Link to="/maps/emerald-coast" style={styles.emerald} data-tooltip="Emerald Coast"><img src={emeraldLogo} alt="" /></Link>
      <Link to="/maps/te-awaroa" style={styles.teawaroa} data-tooltip="Te Awaroa National Park"><img src={teAwaroaLogo} alt="" /></Link>
    </div>
  );
}