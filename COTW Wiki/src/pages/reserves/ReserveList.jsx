import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Reserves.css';
import '../../styles/wiki.css';

// --- COMPONENT IMPORT ---
import WorldMap from "../../components/WorldMap";
import ReservesTable from '../../components/ReservesTable';

import HirschfeldenHuntableAnimalsTable from '../../components/HirschfeldenHuntableAnimalsTable';
import LaytonLakeHuntableAnimalsTable from '../../components/LaytonLakeHuntableAnimalsTable';
import AskiyRidgeHuntableAnimalsTable from '../../components/AskiyRidgeHuntableAnimalsTable';
import CuatroColinasHuntableAnimalsTable from '../../components/CuatroColinasHuntableAnimalsTable';
import EmeraldCoastHuntableAnimalsTable from '../../components/EmeraldCoastHuntableAnimalsTable';
import TeAwaroaHuntableAnimalsTable from '../../components/TeAwaroaHuntableAnimalsTable';
import RanchoDelArroyoHuntableAnimalsTable from '../../components/RanchoDelArroyoHuntableAnimalsTable';
import MississippiAcresHuntableAnimalsTable from '../../components/MississippiAcresHuntableAnimalsTable';
import MedvedTaigaHuntableAnimalsTable from '../../components/MedvedTaigaHuntableAnimalsTable';
import NewEnglandMountainsHuntableAnimalsTable from '../../components/NewEnglandMountainsHuntableAnimalsTable';
import ParqueFernandoHuntableAnimalsTable from '../../components/ParqueFernandoHuntableAnimalsTable';
import RevontuliCoastHuntableAnimalsTable from '../../components/RevontuliCoastHuntableAnimalsTable';
import SalzwiesenParkHuntableAnimalsTable from '../../components/SalzwiesenParkHuntableAnimalsTable';
import SilverRidgePeaksHuntableAnimalsTable from '../../components/SilverRidgePeaksHuntableAnimalsTable';
import SundarpatanHuntableAnimalsTable from '../../components/SundarpatanHuntableAnimalsTable';
import VurhongaSavannaHuntableAnimalsTable from '../../components/VurhongaSavannaHuntableAnimalsTable';
import YukonValleyHuntableAnimalsTable from '../../components/YukonValleyHuntableAnimalsTable';

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
import AnimalsByReleaseDate from '../../components/AnimalsByReleaseDate';

// --- COMPONENT: HUNTABLE ANIMALS ---
const HuntableAnimalsList = () => {
  return (
    <div id="huntable-animals" className="mt-10">
      <HirschfeldenHuntableAnimalsTable />
      <LaytonLakeHuntableAnimalsTable />
      <AskiyRidgeHuntableAnimalsTable />
      <CuatroColinasHuntableAnimalsTable />
      <EmeraldCoastHuntableAnimalsTable />
      <TeAwaroaHuntableAnimalsTable />
      <RanchoDelArroyoHuntableAnimalsTable />
      <MississippiAcresHuntableAnimalsTable />
      <MedvedTaigaHuntableAnimalsTable />
      <NewEnglandMountainsHuntableAnimalsTable />
      <ParqueFernandoHuntableAnimalsTable />
      <RevontuliCoastHuntableAnimalsTable />
      <SalzwiesenParkHuntableAnimalsTable />
      <SilverRidgePeaksHuntableAnimalsTable />
      <SundarpatanHuntableAnimalsTable />
      <VurhongaSavannaHuntableAnimalsTable />
      <YukonValleyHuntableAnimalsTable />
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
        </div>

        <div className="wiki-layout">
          {/* SIDEBAR */}
          <aside className="wiki-sidebar" style={{ background: 'transparent', border: 'none' }}>
            <div className="wiki-toc-panel">
              <div className="wiki-panel-header">
                <span>🔢 Contents </span>
                <span className="wiki-toc-panel-toggle" onClick={() => setTocVisible(!tocVisible)}>
                  [{tocVisible ? 'hide' : 'show'}]
                </span>
              </div>
              {tocVisible && (
                <ul className="wiki-list-plain">
                  <li><a href="#map" onClick={(e) => scrollTo(e, 'map')} className="wiki-link">1. Map</a></li>
                  <li>
                    <a href="#huntable" onClick={(e) => scrollTo(e, 'huntable')} className="wiki-link">2. Huntable Animals</a>
                    <ul className="wiki-list-plain">
                      <li><a href="#hirschfelden" onClick={(e) => scrollTo(e, 'hirschfelden')} className="wiki-link">2.1 Hirschfelden Animals (9 total, 1 unique, 4 great ones)</a></li>
                      <li><a href="#layton" onClick={(e) => scrollTo(e, 'layton')} className="wiki-link">2.2 Layton Lake Animals (9 total, 3 unique, 3 great ones)</a></li>
                      <li><a href="#askiy" onClick={(e) => scrollTo(e, 'askiy')} className="wiki-link">2.3 Askiy Ridge Hunting Preserve (19 total, 8 unique, 5 great ones)</a></li>
                      <li><a href="#cuatro" onClick={(e) => scrollTo(e, 'cuatro')} className="wiki-link">2.4 Cuatro Colinas Animals (11 total, 7 unique, 2 great ones)</a></li>
                      <li><a href="#emerald" onClick={(e) => scrollTo(e, 'emerald')} className="wiki-link">2.5 Emerald Coast (14 total, 8 unique, 3 great ones)</a></li>
                      <li><a href="#te-awaroa" onClick={(e) => scrollTo(e, 'te-awaroa')} className="wiki-link">2.6 Te Awaroa Animals (10 total, 2 unique, 3 great ones)</a></li>
                      <li><a href="#rancho" onClick={(e) => scrollTo(e, 'rancho')} className="wiki-link">2.7 Rancho del Arroyo Animals (10 total, 4 unique, 3 great one)</a></li>
                      <li><a href="#mississippi" onClick={(e) => scrollTo(e, 'mississippi')} className="wiki-link">2.8 Mississippi Acres Animals (10 total, 2 unique, 2 great ones)</a></li>
                      <li><a href="#medved" onClick={(e) => scrollTo(e, 'medved')} className="wiki-link">2.9 Medved-Taiga Animals (8 total, 2 unique, 3 great one)</a></li>
                      <li><a href="#new-england" onClick={(e) => scrollTo(e, 'new-england')} className="wiki-link">2.10 New England Mountains (15 total, 1 unique, 5 great ones)</a></li>
                      <li><a href="#parque" onClick={(e) => scrollTo(e, 'parque')} className="wiki-link">2.11 Parque Fernando Animals (8 total, 2 unique, 2 great ones)</a></li>
                      <li><a href="#revontuli" onClick={(e) => scrollTo(e, 'revontuli')} className="wiki-link">2.12 Revontuli Coast (19 total, 4 unique, 2 great ones)</a></li>
                      <li><a href="#salzwiesen" onClick={(e) => scrollTo(e, 'salzwiesen')} className="wiki-link">2.13 Salzwiesen Park (15 total, 2 unique, 2 great ones)</a></li>
                      <li><a href="#silver" onClick={(e) => scrollTo(e, 'silver')} className="wiki-link">2.14 Silver Ridge Peaks Animals (9 total, 2 unique, 2 great ones)</a></li>
                      <li><a href="#sundarpatan" onClick={(e) => scrollTo(e, 'sundarpatan')} className="wiki-link">2.15 Sundarpatan (13 total, 9 unique, 1 great one)</a></li>
                      <li><a href="#vurhonga" onClick={(e) => scrollTo(e, 'vurhonga')} className="wiki-link">2.16 Vurhonga Savanna Animals (10 total, 9 unique)</a></li>
                      <li><a href="#yukon" onClick={(e) => scrollTo(e, 'yukon')} className="wiki-link">2.17 Yukon Valley Animals (8 total, 3 unique, 3 great ones)</a></li>
                    </ul>
                  </li>
                  <li><a href="#release-date" onClick={(e) => scrollTo(e, 'release-date')} className="wiki-link">3. Release Date Table</a></li>
                </ul>
              )}
            </div>
          </aside>

          {/* MAIN CONTENT AREA */}
          <main className="wiki-main">
            <ReservesTable />

            {/* Spacer between reserves table and map (fixed height for consistency) */}
            <div style={{ height: '48px' }} />

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
              {/* This will render your existing HuntableAnimals logic inside the card */}
              <HuntableAnimalsList /> 
            </section>

            {/* 4. RELEASE DATE CARD */}
            <section className="wiki-section-card" id="release-date">
              <AnimalsByReleaseDate />
            </section>

          </main>
        </div>
      </div>
    </div>
  );
}