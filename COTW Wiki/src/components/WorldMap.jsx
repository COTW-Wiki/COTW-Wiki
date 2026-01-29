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
import vurhongaLogo from '../assets/VurhongaIcon.png';
import emeraldLogo from '../assets/Emerald_coast-removebg-preview (1).png';

export default function WorldMap() {
  return (
    <div className="map-container">
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

      `}</style>

      <img className="map-image" src={worldMap} alt="World Map" />

      <Link to="/maps/layton-lake" className="logo" style={{ '--mask': `url("${reserveLogo}")` }} data-tooltip="Layton Lake District">
        <img src={reserveLogo} alt="Layton Lake Logo" />
      </Link>
      <Link to="/maps/hirschfelden" className="logo-hirsch" style={{ '--mask': `url("${hirschLogo}")` }} data-tooltip="Hirschfelden Hunting Reserve">
        <img src={hirschLogo} alt="Hirschfelden Logo" />
      </Link>
      <Link to="/maps/yukon-valley" className="logo-yukon" style={{ '--mask': `url("${yukonLogo}")` }} data-tooltip="Yukon Valley">
        <img src={yukonLogo} alt="Yukon Valley Logo" />
      </Link>
      <Link to="/maps/cuatro-colinas" className="logo-cuatro" style={{ '--mask': `url("${cuatroLogo}")` }} data-tooltip="Cuatro Colinas Game Reserve">
        <img src={cuatroLogo} alt="Cuatro Colinas Logo" />
      </Link>
      <Link to="/maps/silver-ridge-peaks" className="logo-silver" style={{ '--mask': `url("${silverLogo}")` }} data-tooltip="Silver Ridge Peaks">
        <img src={silverLogo} alt="Silver Ridge Peaks Logo" />
      </Link>
      <Link to="/maps/te-awaroa" className="logo-teawaroa" style={{ '--mask': `url("${teAwaroaLogo}")` }} data-tooltip="Te Awaroa National Park">
        <img src={teAwaroaLogo} alt="Te Awaroa Logo" />
      </Link>
      <Link to="/maps/rancho-del-arroyo" className="logo-rancho" style={{ '--mask': `url("${ranchoLogo}")` }} data-tooltip="Rancho del Arroyo">
        <img src={ranchoLogo} alt="Rancho Del Arroyo Logo" />
      </Link>
      <Link to="/maps/askiy-ridge" className="logo-askiy" style={{ '--mask': `url("${askiyLogo}")` }} data-tooltip="Askiy Ridge Hunting Preserve">
        <img src={askiyLogo} alt="Askiy Ridge Logo" />
      </Link>
      <Link to="/maps/mississippi-acres" className="logo-mississippi" style={{ '--mask': `url("${mississippiLogo}")` }} data-tooltip="Mississippi Acres Preserve">
        <img src={mississippiLogo} alt="Mississippi Acres Logo" />
      </Link>
      <Link to="/maps/salzwiesen-park" className="logo-salzwiesen" style={{ '--mask': `url("${salzwiesenLogo}")` }} data-tooltip="Salzwiesen Park">
        <img src={salzwiesenLogo} alt="Salzwiesen Logo" />
      </Link>
      <Link to="/maps/revontuli-coast" className="logo-revontuli" style={{ '--mask': `url("${revontuliLogo}")` }} data-tooltip="Revontuli Coast">
        <img src={revontuliLogo} alt="Revontuli Coast Logo" />
      </Link>
      <Link to="/maps/emerald-coast" className="logo-emerald" style={{ '--mask': `url("${emeraldLogo}")` }} data-tooltip="Emerald Coast">
        <img src={emeraldLogo} alt="Emerald Coast Logo" />
      </Link>
      <Link to="/maps/new-england-mountains" className="logo-newengland" style={{ '--mask': `url("${newEnglandLogo}")` }} data-tooltip="New England Mountains">
        <img src={newEnglandLogo} alt="New England Logo" />
      </Link>
      <Link to="/maps/parque-fernando" className="logo-parque" style={{ '--mask': `url("${parqueFernandoLogo}")` }} data-tooltip="Parque Fernando">
        <img src={parqueFernandoLogo} alt="Parque Fernando Logo" />
      </Link>
      <Link to="/maps/vurhonga" className="logo-vurhonga" style={{ '--mask': `url("${vurhongaLogo}")` }} data-tooltip="Vurhonga Savanna">
        <img src={vurhongaLogo} alt="Vurhonga Savanna Logo" />
      </Link>
      <Link to="/maps/sundarpatan" className="logo-sundar" style={{ '--mask': `url("${sundarLogo}")` }} data-tooltip="Sundarpatan">
        <img src={sundarLogo} alt="Sundarpatan Logo" />
      </Link>
      <Link to="/maps/medved-taiga" className="logo-medved" style={{ '--mask': `url("${medvedLogo}")` }} data-tooltip="Medved-Taiga National Park">
        <img src={medvedLogo} alt="Medved Taiga Logo" />
      </Link>

    </div>
  );
}
