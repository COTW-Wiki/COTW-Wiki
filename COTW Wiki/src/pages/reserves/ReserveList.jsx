import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Reserves.css';
import '../../styles/wiki.css';

// --- COMPONENT IMPORT ---
import WorldMap from "../../components/WorldMap";

// --- LOGO IMPORTS ---
import reserveLogo from '../../assets/Layton_Lake-removebg-preview.png';
import hirschLogo from '../../assets/Hirschfelden_reserve_logo-removebg-preview.png';
import yukonLogo from '../../assets/Yukon_Valley-removebg-preview.png';
import cuatroLogo from '../../assets/Cuatro_Collinas-removebg-preview.png';
import silverLogo from '../../assets/Silver_Ridge_Peaks-removebg-preview (1).png';
import teAwaroaLogo from '../../assets/Te_Awaroa-removebg-preview (1).png';
import ranchoLogo from '../../assets/Rancho_Del_Arroyo-removebg-preview.png';
import askiyLogo from '../../assets/Aisky_Ridge-removebg-preview.png';
import mississippiLogo from '../../assets/Mississippi_Acres-removebg-preview.png';
import salzwiesenLogo from '../../assets/Salzwiesen-removebg-preview.png';
import newEnglandLogo from '../../assets/New_England-removebg-preview.png';
import sundarLogo from '../../assets/Sundarpartan-removebg-preview.png';
import medvedLogo from '../../assets/Medved_taiga-removebg-preview.png';
import parqueFernandoLogo from '../../assets/Parque_Fernando-removebg-preview.png';
import revontuliLogo from '../../assets/Revontuli_Coast-removebg-preview.png';
import geminiLogo from '../../assets/Gemini_Generated_Image_do1hjzdo1hjzdo1h-removebg-preview.png';
import emeraldLogo from '../../assets/Emerald_coast-removebg-preview (1).png';

// --- CLASS ICONS ---
import class1Icon from '../../assets/Class1Icon.webp';
import class2Icon from '../../assets/Class2Icon.webp';
import class3Icon from '../../assets/Class3Icon.webp';
import class4Icon from '../../assets/Class4Icon.webp';
import class5Icon from '../../assets/Class5Icon.webp';
import class6Icon from '../../assets/Class6Icon.webp';
import class7Icon from '../../assets/Class7Icon.webp';
import class8Icon from '../../assets/Class8Icon.webp';
import class9Icon from '../../assets/Class9Icon.webp';

// --- ANIMAL ICONS ---
import canadaGooseIcon from '../../assets/CanadaGooseIcon.webp';
import greylagGooseIcon from '../../assets/GreylagGooseIcon.webp';
import redFoxIcon from '../../assets/RedFoxIcon.webp';
import roeDeerIcon from '../../assets/RoeDeerIcon.webp';
import wildBoarIcon from '../../assets/WildBoarIcon.webp';
import fallowDeerIcon from '../../assets/FallowDeerIcon.webp';
import redDeerIcon from '../../assets/RedDeerIcon.webp';
import europeanBisonIcon from '../../assets/EuropeanBisonIcon.webp';
import mallardIcon from '../../assets/MallardIcon.webp';
import blacktailDeerIcon from '../../assets/BlacktailDeerIcon.webp';
import whitetailDeerIcon from '../../assets/WhitetailDeerIcon.webp';
import blackBearIcon from '../../assets/BlackBearIcon.webp';
import rooseveltElkIcon from '../../assets/RooseveltElkIcon.webp';
import mooseIcon from '../../assets/MooseIcon.webp';
import ringNeckedPheasantIcon from '../../assets/Ring-NeckedPheasantIcon.webp';
import europeanRabbitIcon from '../../assets/EuropeanRabbitIcon.webp';
import merriamTurkeyIcon from '../../assets/MerriamTurkeyIcon.webp';
import whiteTailedJackrabbitIcon from '../../assets/White-tailedJackrabbitIcon.webp';

// --- DATA: Animal Path Logic ---
const animalPathMap = {
    "Canada Goose": "/animals/Canada-Goose",
    "Red Fox": "/animals/Red-Fox",
    "Roe Deer": "/animals/Roe-Deer",
    "Wild Boar": "/animals/Wild-Boar",
    "Fallow Deer": "/animals/Fallow-Deer",
    "Red Deer": "/animals/Red-Deer",
    "European Bison": "/animals/European-Bison",
    "Mallard": "/animals/Mallard",
    "Whitetail Deer": "/animals/Whitetail-Deer",
    "Moose": "/animals/Moose"
    // Add rest as needed
};

// --- COMPONENT: ANIMALS BY RELEASE DATE ---
// --- COMPONENT: ANIMALS BY RELEASE DATE ---
const AnimalsByReleaseDate = () => {
    const colors = {
        base: '#b0bccc', medved: '#a894d3', goose: '#95d18d', vurhonga: '#f4e95d', 
        parque: '#e07f7f', yukon: '#6a8caf', cuatro: '#68b5a0', silver: '#91a355',
    };

    const tableData = [
        { reserve: "Hirschfelden", animals: [{ name: "Red Fox", color: colors.base }, { name: "Roe Deer", color: colors.base }, { name: "Canada Goose", color: colors.goose }] },
        { reserve: "Layton Lake", animals: [{ name: "Whitetail Deer", color: colors.base }, { name: "Moose", color: colors.base }, { name: "Mallard", color: colors.goose }] },
    ];


    return (
        <div id="release-date" className="mt-10">
            <h2 className="wiki-h2">Animals by release date (table)</h2>
            <div className="wiki-release-table-wrapper">
                {tableData.map((col, idx) => (
                    <div key={idx} className="wiki-release-column">
                        <div className="wiki-release-col-header">{col.reserve}</div>
                        {col.animals.map((a, i) => (
                            <Link key={i} to={animalPathMap[a.name] || "#"} className="wiki-release-cell" style={{ backgroundColor: a.color }}>{a.name}</Link>
                        ))}
                    </div>
                ))}
            </div>
            <div className="wiki-release-timeline">
                {Object.entries(colors).map(([key, val]) => (
                    <span key={key} className="timeline-tag" style={{ backgroundColor: val }}>{key.toUpperCase()} Update</span>
                ))}
            </div>
        </div>
    );
};

// --- COMPONENT: HUNTABLE ANIMALS ---
const HuntableAnimalsList = () => {
    const classes = [1,2,3,4,5,6,7,8,9];
    const classIcons = [class1Icon,class2Icon,class3Icon,class4Icon,class5Icon,class6Icon,class7Icon,class8Icon,class9Icon];
    
    const reserves = [
        { 
            id: 'hirschfelden', 
            name: "Hirschfelden Hunting Reserve", 
            animals: { 
                1: [{name: "Canada Goose", icon: canadaGooseIcon}], 
                2: [{name: "Red Fox", icon: redFoxIcon}],
                3: [{name: "Roe Deer", icon: roeDeerIcon}],
                6: [{name: "Red Deer", icon: redDeerIcon}],
                9: [{name: "European Bison", icon: europeanBisonIcon}]
            } 
        }
    ];

    return (
        <div id="huntable-animals" className="mt-10">
            <h2 className="wiki-h2">Huntable Animals</h2>
            {reserves.map((res) => (
                <div key={res.id} id={res.id} className="wiki-reserve-card">
                    <div className="wiki-sidebar-header">{res.name}</div>
                    <div className="wiki-reserve-table">
                        <div className="wiki-reserve-header-row">
                            {classes.map((cls, i) => (
                                <div key={cls} className="wiki-reserve-header-cell">
                                    <img src={classIcons[i]} alt={cls} className="wiki-class-icon" />
                                    <span>{cls}</span>
                                </div>
                            ))}
                        </div>
                        <div className="wiki-reserve-grid-row">
                            <div className="wiki-reserve-row-label">Animals</div>
                            {classes.map((cls) => (
                                <div key={cls} className="wiki-reserve-grid-cell">
                                    {(res.animals[cls] || []).map((a, i) => (
                                        <Link key={i} to={animalPathMap[a.name] || "#"} style={{ textDecoration: 'none' }}>
                                            <img src={a.icon} alt={a.name} className="wiki-reserve-hex-icon" />
                                            <div className="wiki-reserve-animal-name">{a.name}</div>
                                        </Link>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

// --- MAIN PAGE COMPONENT ---
export default function ReservesList() {
  const [tocVisible, setTocVisible] = useState(true);

  const scrollTo = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="wiki-page">
      <div className="wiki-inner">
        {/* 1. PAGE HEADER (Plain text, no outline as requested for welcome sections) */}
        <div className="mb-10">
          <h1 className="wiki-header">Reserves</h1>
          <p className="wiki-paragraph">
            <strong>Reserves</strong> are hunting maps. Currently, 18 reserves are available.
          </p>
        </div>

        <div className="wiki-layout">
          {/* SIDEBAR */}
          <aside className="wiki-sidebar" style={{ background: 'transparent', border: 'none' }}>
            <div className="wiki-toc-panel">
              <div className="wiki-panel-header">
                <span>🔢 Contents</span>
                <span className="wiki-toc-panel-toggle" onClick={() => setTocVisible(!tocVisible)}>
                  [{tocVisible ? 'hide' : 'show'}]
                </span>
              </div>
              {tocVisible && (
                <ul className="wiki-list-plain">
                  <li><a href="#map" onClick={(e) => scrollTo(e, 'map')} className="wiki-link">1. Map</a></li>
                  <li><a href="#huntable" onClick={(e) => scrollTo(e, 'huntable')} className="wiki-link">2. Huntable Animals</a></li>
                  <li><a href="#release-date" onClick={(e) => scrollTo(e, 'release-date')} className="wiki-link">3. Release Date Table</a></li>
                </ul>
              )}
            </div>
          </aside>

          {/* MAIN CONTENT AREA */}
          <main className="wiki-main">
            
            {/* 2. MAP CARD */}
            <section className="wiki-section-card" id="map">
              <h2 className="wiki-h2-tight">World Map</h2>
              <p className="wiki-p-mb">Click an icon to view the reserve page:</p>
              <div className="map-responsive-wrapper">
                <WorldMap />
              </div>
            </section>

            {/* 3. HUNTABLE ANIMALS CARD */}
            <section className="wiki-section-card" id="huntable">
              <h2 className="wiki-h2-tight">Huntable Animals</h2>
              <p className="wiki-p-mb">Explore animals by their specific reserve classes below.</p>
              {/* This will render your existing HuntableAnimals logic inside the card */}
              <HuntableAnimalsList /> 
            </section>

            {/* 4. RELEASE DATE CARD */}
            <section className="wiki-section-card" id="release-date">
              <h2 className="wiki-h2-tight">Animals by Release Date</h2>
              <AnimalsByReleaseDate />
            </section>

          </main>
        </div>
      </div>
    </div>
  );
}