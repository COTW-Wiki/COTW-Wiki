import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Reserves.css';
import '../../styles/wiki.css';
import WorldMap from '../../components/WorldMap';

// --- ASSET IMPORTS (Condensed for brevity, keep all your imports as they were) ---
import class1Icon from '../../assets/Class1Icon.webp';
import class2Icon from '../../assets/Class2Icon.webp';
import class3Icon from '../../assets/Class3Icon.webp';
import class4Icon from '../../assets/Class4Icon.webp';
import class5Icon from '../../assets/Class5Icon.webp';
import class6Icon from '../../assets/Class6Icon.webp';
import class7Icon from '../../assets/Class7Icon.webp';
import class8Icon from '../../assets/Class8Icon.webp';
import class9Icon from '../../assets/Class9Icon.webp';
// ... rest of animal icon imports ...
import canadaGooseIcon from '../../assets/CanadaGooseIcon.webp';
import greylagGooseIcon from '../../assets/GreylagGooseIcon.webp';
import magpieGooseIcon from '../../assets/MagpieGoose_frame.webp';
import tundraBeanGooseIcon from '../../assets/TundraBeanGooseIcon.webp';
import snowGooseIcon from '../../assets/SnowGooseIcon.webp';
import eurasianWigeonIcon from '../../assets/EurasianWigeonIcon.webp';
import goldeneyeIcon from '../../assets/GoldeneyeIcon.webp';
import greenWingTealIcon from '../../assets/GreenWingTealIcon.webp';
import woodDuckIcon from '../../assets/WoodDuckIcon.webp';
import harlequinDuckIcon from '../../assets/HarlequinDuckIcon.webp';
import cinnamonTealIcon from '../../assets/CinnamonTealIcon.webp';
import mallardIcon from '../../assets/MallardIcon.webp';
import tuftedDuckIcon from '../../assets/TuftedDuckIcon.webp';
import ferruginousDuckIcon from '../../assets/FerruginousDuckIcon.webp';
import gadwallIcon from '../../assets/GadwallIcon.webp';
import eurasianTealIcon from '../../assets/EurasianTealIcon.webp';
import northernPintailIcon from '../../assets/NorthernPintailIcon.webp';
import blackGrouseIcon from '../../assets/BlackGrouseIcon.webp';
import hazelGrouseIcon from '../../assets/HazelGrouseIcon.webp';
import duskyGrouseIcon from '../../assets/DuskyGrouseIcon.webp';
import bobwhiteQuailIcon from '../../assets/BobwhiteQuailIcon.webp';
import stubbleQuailIcon from '../../assets/StubbleQuail_frame.webp';
import rockPtarmiganIcon from '../../assets/RockPtarmiganIcon.webp';
import willowPtarmiganIcon from '../../assets/WillowPtarmiganIcon.webp';
import easternWildTurkeyIcon from '../../assets/EasternWildTurkeyIcon.webp';
import merriamTurkeyIcon from '../../assets/MerriamTurkeyIcon.webp';
import rioGrandeTurkeyIcon from '../../assets/RioGrandeTurkeyIcon.webp';
import ringNeckedPheasantIcon from '../../assets/Ring-NeckedPheasantIcon.webp';
import westernCapercaillieIcon from '../../assets/WesternCapercaillieIcon.webp';
import antelopeJackrabbitIcon from '../../assets/AntelopeJackrabbitIcon.webp';
import easternCottontailIcon from '../../assets/EasternCottontailRabbitIcon.webp';
import europeanHareIcon from '../../assets/EuropeanHareIcon.webp';
import europeanRabbitIcon from '../../assets/EuropeanRabbitIcon.webp';
import mountainHareIcon from '../../assets/MountainHareIcon.webp';
import scrubHareIcon from '../../assets/ScrubHareIcon.webp';
import whiteTailedJackrabbitIcon from '../../assets/White-tailedJackrabbitIcon.webp';
import woollyHareIcon from '../../assets/WoollyHareIcon.webp';
import northernRedMuntjacIcon from '../../assets/NorthernRedMuntjacIcon.webp';
import siberianMuskDeerIcon from '../../assets/SiberianMuskDeerIcon.webp';
import raccoonDogIcon from '../../assets/RaccoonDogIcon.webp';
import coyoteIcon from '../../assets/CoyoteIcon.webp';
import sideStripedJackalIcon from '../../assets/Side-stripedJackalIcon.webp';
import grayFoxIcon from '../../assets/GrayFoxIcon.webp';
import redFoxIcon from '../../assets/RedFoxIcon.webp';
import tibetanFoxIcon from '../../assets/TibetanFoxIcon.webp';
import commonRaccoonIcon from '../../assets/CommonRaccoonIcon.webp';
import northAmericanBeaverIcon from '../../assets/NorthAmericanBeaverIcon.webp';
import bobcatIcon from '../../assets/BobcatIcon.webp';
import mexicanBobcatIcon from '../../assets/MexicanBobcatIcon.webp';
import axisDeerIcon from '../../assets/AxisDeerIcon.webp';
import hogDeerIcon from '../../assets/HogDeer_frame.webp';
import roeDeerIcon from '../../assets/RoeDeerIcon.webp';
import blackbuckIcon from '../../assets/BlackbuckIcon.webp';
import springbokIcon from '../../assets/SpringbokIcon.webp';
import pronghornIcon from '../../assets/PronghornIcon.webp';
import feralGoatIcon from '../../assets/FeralGoatIcon.webp';
import chamoisIcon from '../../assets/ChamoisIcon.webp';
import eurasianLynxIcon from '../../assets/EurasianLynxIcon.webp';
import collaredPeccaryIcon from '../../assets/CollaredPeccaryIcon.webp';
import blacktailDeerIcon from '../../assets/BlacktailDeerIcon.webp';
import whitetailDeerIcon from '../../assets/WhitetailDeerIcon.webp';
import fallowDeerIcon from '../../assets/FallowDeerIcon.webp';
import sikaDeerIcon from '../../assets/SikaDeerIcon.webp';
import lesserKuduIcon from '../../assets/LesserKuduIcon.webp';
import mountainGoatIcon from '../../assets/MountainGoatIcon.webp';
import beceiteIbexIcon from '../../assets/BeceiteIbexIcon.webp';
import rondaIbexIcon from '../../assets/RondaIbexIcon.webp';
import gredosIbexIcon from '../../assets/GredosIbexIcon.webp';
import southeasternSpanishIbexIcon from '../../assets/SoutheasternSpanishIbexIcon.webp';
import iberianMouflonIcon from '../../assets/IberianMouflonIcon.webp';
import blueSheepIcon from '../../assets/BlueSheepIcon.webp';
import tahrIcon from '../../assets/TahrIcon.webp';
import snowLeopardIcon from '../../assets/SnowLeopardIcon.webp';
import warthogIcon from '../../assets/WarthogIcon.webp';
import easternGrayKangarooIcon from '../../assets/Kangaroo_frame.webp';
import javanRusaIcon from '../../assets/JavanRusa_frame.webp';
import muleDeerIcon from '../../assets/MuleDeerIcon.webp';
import desertBighornSheepIcon from '../../assets/DesertBighornSheepIcon.webp';
import rockyMountainBighornSheepIcon from '../../assets/RockyMountainBighornSheepIcon.webp';
import mountainLionIcon from '../../assets/MountainLionIcon.webp';
import pumaIcon from '../../assets/PumaIcon.webp';
import wildBoarIcon from '../../assets/WildBoarIcon.webp';
import feralPigIcon from '../../assets/FeralPigIcon.webp';
import wildHogIcon from '../../assets/WildHogIcon.webp';
import sambarIcon from '../../assets/Sambar_frame.webp';
import rockyMountainElkIcon from '../../assets/RockyMountainElkIcon.webp';
import rooseveltElkIcon from '../../assets/RooseveltElkIcon.webp';
import manitobanElkIcon from '../../assets/ManitobanElkIcon.webp';
import blackBearIcon from '../../assets/BlackBearIcon.webp';
import eurasianBrownBearIcon from '../../assets/EurasianBrownBearIcon.webp';
import americanAlligatorIcon from '../../assets/AmericanAlligatorIcon.webp';
import redDeerIcon from '../../assets/RedDeerIcon.webp';
import mountainReindeerIcon from '../../assets/MountainReindeerIcon.webp';
import grantCaribouIcon from '../../assets/GrantCaribouIcon.webp';
import woodlandCaribouIcon from '../../assets/WoodlandCaribouIcon.webp';
import blueWildebeestIcon from '../../assets/BlueWildebeestIcon.webp';
import gemsbokIcon from '../../assets/GemsbokIcon.webp';
import barasinghaIcon from '../../assets/BarasinghaIcon.webp';
import nilgaiIcon from '../../assets/NilgaiIcon.webp';
import grayWolfIcon from '../../assets/GrayWolfIcon.webp';
import iberianWolfIcon from '../../assets/IberianWolfIcon.webp';
import mooseIcon from '../../assets/MooseIcon.webp';
import grizzlyBearIcon from '../../assets/GrizzlyBearIcon.webp';
import saltwaterCrocodileIcon from '../../assets/Crocodile_frame.webp';
import bantengIcon from '../../assets/Banteng_frame.webp';
import capeBuffaloIcon from '../../assets/CapeBuffaloIcon.webp';
import europeanBisonIcon from '../../assets/EuropeanBisonIcon.webp';
import plainsBisonIcon from '../../assets/PlainsBisonIcon.webp';
import woodBisonIcon from '../../assets/WoodBisonIcon.webp';
import waterBuffaloIcon from '../../assets/WaterBuffaloIcon.webp';
import wildYakIcon from '../../assets/WildYakIcon.webp';
import lionIcon from '../../assets/LionIcon.webp';
import bengalTigerIcon from '../../assets/BengalTigerIcon.webp';

// --- COMPONENT: ANIMALS BY RELEASE DATE ---
const AnimalsByReleaseDate = () => {
    const colors = {
      base: '#b0bccc', medved: '#a894d3', goose: '#95d18d', vurhonga: '#f4e95d', 
      parque: '#e07f7f', yukon: '#6a8caf', cuatro: '#68b5a0', silver: '#91a355',
      teawaroa: '#c48f2b', rancho: '#d96c43', mississippi: '#a3508b',
      revontuli: '#9f6bcf', newengland: '#a6aab5', emerald: '#5bd9d9',
      sundarpatan: '#9ee065', salzwiesen: '#d9d045', askiy: '#b8a682',
    };

    const tableData = [
        { reserve: "Hirschfelden", animals: [{ name: "Red Fox", color: colors.base }, { name: "Roe Deer", color: colors.base }, { name: "Canada Goose", color: colors.goose }] },
        // ... Keep your full tableData array logic here ...
    ];

    return (
      <div className="wiki-section" id="release-date">
        <h2 className="wiki-h2">Animals by release date (table)</h2>
        <p className="wiki-release-instruction">Click on names to navigate:</p>
        <div className="wiki-release-table-wrapper">
          {tableData.map((col, idx) => (
            <div key={idx} className="wiki-release-column">
              <div className="wiki-release-col-header">{col.reserve}</div>
              {col.animals.map((a, i) => (
                <Link key={i} to={`/animals/${a.name.replace(/\s+/g, '')}`} className="wiki-release-cell" style={{ backgroundColor: a.color }}>
                  {a.name}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div className="wiki-release-timeline">
            <span className="timeline-tag" style={{backgroundColor: colors.base}}>2017 Base Game</span>
            <span className="timeline-tag" style={{backgroundColor: colors.medved}}>2017 Medved</span>
            {/* ... rest of timeline tags ... */}
        </div>
      </div>
    );
};

// --- COMPONENT: TABLE OF CONTENTS ---
const TableOfContents = () => {
    const [isVisible, setIsVisible] = useState(true);
    const handleScroll = (e, id) => {
        e.preventDefault();
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="wiki-toc-panel">
            <div className="wiki-toc-panel-header">
                <span className="wiki-toc-panel-title">🔢 Contents</span>
                <span className="wiki-toc-panel-toggle" onClick={() => setIsVisible(!isVisible)}>
                    [{isVisible ? 'hide' : 'show'}]
                </span>
            </div>
            {isVisible && (
                <ul className="wiki-toc-panel-list">
                    <li><a href="#map" onClick={(e) => handleScroll(e, 'map')} className="wiki-link">1. Map</a></li>
                    <li><a href="#huntable" onClick={(e) => handleScroll(e, 'huntable')} className="wiki-link">2. Huntable Animals</a></li>
                    <li><a href="#release-date" onClick={(e) => handleScroll(e, 'release-date')} className="wiki-link">3. Release Date Table</a></li>
                </ul>
            )}
        </div>
    );
};

// --- COMPONENT: HUNTABLE ANIMALS ---
const HuntableAnimals = () => {
  const classes = [1,2,3,4,5,6,7,8,9];
  const classIcons = [class1Icon,class2Icon,class3Icon,class4Icon,class5Icon,class6Icon,class7Icon,class8Icon,class9Icon];
  
  const reserves = [
      { id: 'hirschfelden', name: "Hirschfelden", animals: { 1: [{name: "Canada Goose", icon: canadaGooseIcon}], 2: [{name: "Red Fox", icon: redFoxIcon}] } },
      // ... keep your full reserves data here ...
  ];

  return (
    <div id="huntable">
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
                  {(res.animals[cls] || []).map((a, idx) => (
                    <Link key={idx} to={`/animals/${a.name.replace(/\s+/g, '')}`} className="animal-card">
                      <img src={a.icon} alt={a.name} className="wiki-reserve-hex-icon" />
                      <span className="wiki-reserve-animal-name">{a.name}</span>
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
    return (
        <div className="wiki-page">
            <div className="wiki-inner">
                <h1 className="wiki-header">Reserves</h1>
                
                <p className="wiki-paragraph">
                    <strong>Reserves</strong> are maps available for hunting. There are currently 18 reserves including DLCs.
                </p>

                <div className="wiki-layout">
                    {/* The Sidebar (TOC) */}
                    <aside className="wiki-sidebar" style={{ backgroundColor: 'transparent', border: 'none' }}>
                       <TableOfContents />
                    </aside>

                    {/* The Main Content Area */}
                    <div className="wiki-main">
                        <h2 className="wiki-h2" id="map">Interactive Map</h2>
                        <WorldMap />
                        <HuntableAnimals />
                        <AnimalsByReleaseDate />
                    </div>
                </div>
            </div>
        </div>
    );
}