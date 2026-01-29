import React from 'react';
import { Link } from 'react-router-dom';
// import './WorldMap'; // Removed external CSS import
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
  
  // Inline Styles Definition
  const styles = {
    container: {
      position: 'relative',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '1rem 0',
    },
    mapImage: {
      width: '89%',
      maxWidth: '1200px',
      height: 'auto',
      zIndex: 0,
    },
    // Shared base style for logos could be extracted, but mapped individually below for clarity
    layton: {
      position: 'absolute',
      top: '265px',
      left: '157px',
      width: '40px',
      height: 'auto',
      zIndex: 1,
    },
    hirsch: {
      position: 'absolute',
      top: '245px',
      left: '433px',
      width: '40px',
      height: 'auto',
      zIndex: 1,
    },
    yukon: {
      position: 'absolute',
      top: '180px',
      left: '80px',
      width: '80px',
      height: 'auto',
      zIndex: 1,
    },
    mississippi: {
      position: 'absolute',
      top: '267px',
      left: '228px',
      width: '50px',
      height: 'auto',
      zIndex: 1,
    },
    salzwiesen: {
      position: 'absolute',
      top: '240px',
      left: '400px',
      width: '39px',
      height: 'auto',
      zIndex: 1,
    },
    revontuli: {
      position: 'absolute',
      top: '190px',
      left: '445px',
      width: '48px',
      height: 'auto',
      zIndex: 1,
    },
    cuatro: {
      position: 'absolute',
      top: '269px',
      left: '372px',
      width: '90px',
      height: 'auto',
      zIndex: 1,
    },
    silver: {
      position: 'absolute',
      top: '272px',
      left: '188px',
      width: '40px',
      height: 'auto',
      zIndex: 1,
    },
    teawaroa: {
      position: 'absolute',
      top: '454px',
      left: '758px',
      width: '40px',
      height: 'auto',
      zIndex: 1,
    },
    rancho: {
      position: 'absolute',
      top: '323px',
      left: '168px',
      width: '120px',
      height: 'auto',
      zIndex: 1,
    },
    askiy: {
      position: 'absolute',
      top: '230px',
      left: '170px',
      width: '50px',
      height: 'auto',
      zIndex: 1,
    },
    newEngland: {
      position: 'absolute',
      top: '245px',
      left: '240px',
      width: '50px',
      height: 'auto',
      zIndex: 1,
    },
    sundar: {
      position: 'absolute',
      top: '310px',
      left: '555px',
      width: '50px',
      height: 'auto',
      zIndex: 1,
    },
    medved: {
      position: 'absolute',
      top: '134px',
      left: '615px',
      width: '50px',
      height: 'auto',
      zIndex: 1,
    },
    parque: {
      position: 'absolute',
      top: '430px',
      left: '226px',
      width: '130px',
      height: 'auto',
      zIndex: 1,
    },
    gemini: {
      position: 'absolute',
      top: '395px',
      left: '466px',
      width: '48px',
      height: 'auto',
      zIndex: 1,
    },
    emerald: {
      position: 'absolute',
      top: '400px',
      left: '686px',
      width: '60px',
      height: 'auto',
      zIndex: 1,
    },
  };

  return (
    <div className="map-container" style={styles.container}>
      {/* Keep this internal style block for HOVER effects and TRANSITIONS, 
         as inline styles cannot handle pseudo-selectors like :hover 
      */}
      <style>{` 
        .map-container img[class*="logo-"]{ 
          transition: transform 180ms ease, filter 180ms ease, box-shadow 180ms ease; 
          transform-origin: center center; 
          cursor: pointer; 
          border: none; 
          outline: none; 
        }
        .map-container a:focus, .map-container a:focus img{ outline: none; }
        .map-container img[class*="logo-"]:hover{ 
          transform: scale(1.25); 
          filter: sepia(1) saturate(10000%) hue-rotate(10deg) brightness(1);
          z-index: 999; 
          box-shadow: none; 
          border: none;
          outline: none;
        }
      `}</style>

      <img className="map-image" src={worldMap} alt="World Map" style={styles.mapImage} />

      {/* Note: We merge the positioning styles with the existing mask variable */}
      
      <Link to="/maps/layton-lake" className="logo" style={{ ...styles.layton, '--mask': `url("${reserveLogo}")` }} data-tooltip="Layton Lake District">
        <img src={reserveLogo} alt="Layton Lake Logo" />
      </Link>

      <Link to="/maps/hirschfelden" className="logo-hirsch" style={{ ...styles.hirsch, '--mask': `url("${hirschLogo}")` }} data-tooltip="Hirschfelden Hunting Reserve">
        <img src={hirschLogo} alt="Hirschfelden Logo" />
      </Link>

      <Link to="/maps/yukon-valley" className="logo-yukon" style={{ ...styles.yukon, '--mask': `url("${yukonLogo}")` }} data-tooltip="Yukon Valley">
        <img src={yukonLogo} alt="Yukon Valley Logo" />
      </Link>

      <Link to="/maps/cuatro-colinas" className="logo-cuatro" style={{ ...styles.cuatro, '--mask': `url("${cuatroLogo}")` }} data-tooltip="Cuatro Colinas Game Reserve">
        <img src={cuatroLogo} alt="Cuatro Colinas Logo" />
      </Link>

      <Link to="/maps/silver-ridge-peaks" className="logo-silver" style={{ ...styles.silver, '--mask': `url("${silverLogo}")` }} data-tooltip="Silver Ridge Peaks">
        <img src={silverLogo} alt="Silver Ridge Peaks Logo" />
      </Link>

      <Link to="/maps/te-awaroa" className="logo-teawaroa" style={{ ...styles.teawaroa, '--mask': `url("${teAwaroaLogo}")` }} data-tooltip="Te Awaroa National Park">
        <img src={teAwaroaLogo} alt="Te Awaroa Logo" />
      </Link>

      <Link to="/maps/rancho-del-arroyo" className="logo-rancho" style={{ ...styles.rancho, '--mask': `url("${ranchoLogo}")` }} data-tooltip="Rancho del Arroyo">
        <img src={ranchoLogo} alt="Rancho Del Arroyo Logo" />
      </Link>

      <Link to="/maps/askiy-ridge" className="logo-askiy" style={{ ...styles.askiy, '--mask': `url("${askiyLogo}")` }} data-tooltip="Askiy Ridge Hunting Preserve">
        <img src={askiyLogo} alt="Askiy Ridge Logo" />
      </Link>

      <Link to="/maps/mississippi-acres" className="logo-mississippi" style={{ ...styles.mississippi, '--mask': `url("${mississippiLogo}")` }} data-tooltip="Mississippi Acres Preserve">
        <img src={mississippiLogo} alt="Mississippi Acres Logo" />
      </Link>

      <Link to="/maps/salzwiesen-park" className="logo-salzwiesen" style={{ ...styles.salzwiesen, '--mask': `url("${salzwiesenLogo}")` }} data-tooltip="Salzwiesen Park">
        <img src={salzwiesenLogo} alt="Salzwiesen Logo" />
      </Link>

      <Link to="/maps/revontuli-coast" className="logo-revontuli" style={{ ...styles.revontuli, '--mask': `url("${revontuliLogo}")` }} data-tooltip="Revontuli Coast">
        <img src={revontuliLogo} alt="Revontuli Coast Logo" />
      </Link>

      <Link to="/maps/emerald-coast" className="logo-emerald" style={{ ...styles.emerald, '--mask': `url("${emeraldLogo}")` }} data-tooltip="Emerald Coast">
        <img src={emeraldLogo} alt="Emerald Coast Logo" />
      </Link>

      <Link to="/maps/new-england-mountains" className="logo-newengland" style={{ ...styles.newEngland, '--mask': `url("${newEnglandLogo}")` }} data-tooltip="New England Mountains">
        <img src={newEnglandLogo} alt="New England Logo" />
      </Link>

      <Link to="/maps/parque-fernando" className="logo-parque" style={{ ...styles.parque, '--mask': `url("${parqueFernandoLogo}")` }} data-tooltip="Parque Fernando">
        <img src={parqueFernandoLogo} alt="Parque Fernando Logo" />
      </Link>

      <Link to="/maps/gemini-generated" className="logo-gemini" style={{ ...styles.gemini, '--mask': `url("${geminiLogo}")` }} data-tooltip="Gemini Generated Image">
        <img src={geminiLogo} alt="Gemini Generated Logo" />
      </Link>

      <Link to="/maps/sundarpatan" className="logo-sundar" style={{ ...styles.sundar, '--mask': `url("${sundarLogo}")` }} data-tooltip="Sundarpatan">
        <img src={sundarLogo} alt="Sundarpatan Logo" />
      </Link>

      <Link to="/maps/medved-taiga" className="logo-medved" style={{ ...styles.medved, '--mask': `url("${medvedLogo}")` }} data-tooltip="Medved-Taiga National Park">
        <img src={medvedLogo} alt="Medved Taiga Logo" />
      </Link>

    </div>
  );
}