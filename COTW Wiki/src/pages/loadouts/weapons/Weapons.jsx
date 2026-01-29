import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import WeaponsImage from '../../../assets/Weapons.webp';
import docent223 from '../../../assets/223Docent.webp';
import ranger243 from '../../../assets/Ranger243.webp';
import huntsman270 from '../../../assets/270Huntsman.webp';
import regent7mm from '../../../assets/7mmRegentMagnum.webp';
import rangemaster338 from '../../../assets/Rangemaster338.webp';
import whitlock86 from '../../../assets/WhitlockModel86.webp';
import coachmate4570 from '../../../assets/CoachmateLever4570.webp';
import virant22lr from '../../../assets/Virant22LRExpress.webp';
import king470db from '../../../assets/King470DBZenith.webp';
import solokhin from '../../../assets/SolokhinMN1890AssemblyLine.webp';
import canning300 from '../../../assets/300CanningMagnumFrontier.webp';
import vasquez45 from '../../../assets/VasquezCyclone45.webp';
import eckers3006 from '../../../assets/Eckers3006Prestige.webp';
import martensson65 from '../../../assets/Martensson65Thunder.webp';
import hudzik50 from '../../../assets/Hudzik50CaplockTerra.webp';
import m1iwaniec from '../../../assets/M1IwaniecVeteran.webp';
import flsporter303 from '../../../assets/FLSporter303Burnished.webp';
import kullman22h from '../../../assets/Kullman22HWasp.webp';
import zarza22lr from '../../../assets/Zarza-1522LRShadow.webp';
import zarza223 from '../../../assets/Zarza-15223Midnight.webp';
import zarza308 from '../../../assets/Zarza-10308Moonlight.webp';
import curman50 from '../../../assets/Curman_.50_Inline.webp';
import tsurugi338 from '../../../assets/TsurugiLRR338.webp';
import malmer7mm from '../../../assets/Malmer7mmMagnum.webp';
import olsson308 from '../../../assets/OlssonModel23308.webp';
import zagan22250 from '../../../assets/ZaganVarminter22250.webp';
import moradi1894 from '../../../assets/Moradi_Model_1894.webp';
import arzyna300 from '../../../assets/Arzyna.300MagTactical.webp';
import gandhare from '../../../assets/GandhareRifle.webp';
import vallgarda375 from '../../../assets/Vallgarda.375.webp';
import johansson450 from '../../../assets/Johansson.450.webp';
import fors300 from '../../../assets/ForsElite.300.webp';
import hansson3006 from '../../../assets/Hansson_.30-06.webp';
import perry308 from '../../../assets/Perry_.308.webp';
import quist762 from '../../../assets/Quist_Reaper_7.62x39.webp';

// Handgun Imports
import cuomo243 from '../../../assets/243RCuomoCompetitor.webp';
import panther44 from '../../../assets/44PantherMagnum.webp';
import rolleston45 from '../../../assets/45RollestonCavalry.webp';
import davani10mm from '../../../assets/10mmDavani40A.webp';
import andersson22lr from '../../../assets/Andersson22LRWoodsman.webp';
import focoso357 from '../../../assets/Focoso357.webp';
import mangiafico410 from '../../../assets/Mangiafico41045ColtFlatBlack.webp';
import rhino454 from '../../../assets/Rhino454.webp';
import sundberg454 from '../../../assets/Sundberg454.webp';
import jernberg4570 from '../../../assets/45-70JernbergSuperior.webp';

// Shotgun Imports
import cacciatore12g from '../../../assets/Cacciatore12G.webp';
import caversham12g from '../../../assets/CavershamSteward12G.webp';
import couso1897 from '../../../assets/CousoModel1897Vaquero.webp';
import strecker20g from '../../../assets/StreckerSxS20GScarlett.webp';
import nordin20sa from '../../../assets/Nordin20SAServiceman.webp';
import grelck from '../../../assets/GrelckDrillingRifleClassic.webp';
import miller1891 from '../../../assets/MillerModel1891Rancher.webp';
import strandberg10sa from '../../../assets/Strandberg10SAExecutive.webp';
import gopi10g from '../../../assets/Gopi10GGrand.webp';

// Bow Imports
import alexander from '../../../assets/AlexanderLongbowLacquered.webp';
import bearclaw from '../../../assets/BearclawLiteCB60.webp';
import crosspoint from '../../../assets/CrosspointCB165Classic.webp';
import hawkedge from '../../../assets/HawkEdgeCB70.webp';
import houyi from '../../../assets/HouyiRecurveBow.webp';
import koter from '../../../assets/KoterCB65Orpheus.webp';
import razorback from '../../../assets/RazorbackLiteCB60.webp';
import stenberg from '../../../assets/Stenberg_Takedown_Recurve_Bow.webp';

export default function App() {
  const [isTocOpen, setIsTocOpen] = useState(true);

  // Data for the Rifle Image Grid
  const rifleImages = [
    { name: ".223 Docent", img: docent223, link: "/weapons/rifles/223-docent" },
    { name: "Ranger .243", img: ranger243, link: "/weapons/rifles/ranger-243" },
    { name: ".270 Huntsman", img: huntsman270, link: "/weapons/rifles/270-huntsman" },
    { name: "7mm Regent Magnum", img: regent7mm, link: "/weapons/rifles/7mm-regent-magnum" },
    { name: "Rangemaster 338", img: rangemaster338, link: "/weapons/rifles/rangemaster-338" },
    { name: "Whitlock Model 86", img: whitlock86, link: "/weapons/rifles/whitlock-model-86" },
    { name: "Coachmate Lever .45-70", img: coachmate4570, link: "/weapons/rifles/coachmate-lever-45-70" },
    { name: "Virant .22LR", img: virant22lr, link: "/weapons/rifles/virant-22lr" },
    { name: "King 470DB", img: king470db, link: "/weapons/rifles/king-470db" },
    { name: "Solokhin MN1890", img: solokhin, link: "/weapons/rifles/solokhin-mn1890" },
    { name: ".300 Canning Magnum", img: canning300, link: "/weapons/rifles/300-canning-magnum" },
    { name: "Vasquez Cyclone .45", img: vasquez45, link: "/weapons/rifles/vasquez-cyclone-45" },
    { name: "Eckers .30-06", img: eckers3006, link: "/weapons/rifles/eckers-30-06" },
    { name: "Mårtensson 6.5mm", img: martensson65, link: "/weapons/rifles/martensson-6-5mm" },
    { name: "Hudzik .50 Caplock", img: hudzik50, link: "/weapons/rifles/hudzik-50-caplock" },
    { name: "M1 Iwaniec", img: m1iwaniec, link: "/weapons/rifles/m1-iwaniec" },
    { name: "F.L. Sporter .303", img: flsporter303, link: "/weapons/rifles/fl-sporter-303" },
    { name: "Kullman .22H", img: kullman22h, link: "/weapons/rifles/kullman-22h" },
    { name: "ZARZA-15 .22LR", img: zarza22lr, link: "/weapons/rifles/zarza-15-22lr" },
    { name: "ZARZA-15 .223", img: zarza223, link: "/weapons/rifles/zarza-15-223" },
    { name: "ZARZA-10 .308", img: zarza308, link: "/weapons/rifles/zarza-10-308" },
    { name: "Curman .50 Inline", img: curman50, link: "/weapons/rifles/curman-50-inline" },
    { name: "Tsurugi LRR .338", img: tsurugi338, link: "/weapons/rifles/tsurugi-lrr-338" },
    { name: "Malmer 7mm Magnum", img: malmer7mm, link: "http://localhost:5173/weapons/rifles/malmer-7mm-magnum" },
    { name: "Olsson Model 23 .308", img: olsson308, link: "/weapons/rifles/olsson-model-23-308" },
    { name: "Zagan Varminter .22-250", img: zagan22250, link: "/weapons/rifles/zagan-varminter-22-250" },
    { name: "Moradi Model 1894", img: moradi1894, link: "/weapons/rifles/moradi-model-1894" },
    { name: "Arzyna .300 Mag Tactical", img: arzyna300, link: "/weapons/rifles/arzyna-300-mag-tactical" },
    { name: "Gandhare Rifle", img: gandhare, link: "/weapons/rifles/gandhare-rifle" },
    { name: "Vallgarda .375", img: vallgarda375, link: "/weapons/rifles/vallgarda-375" },
    { name: "Johansson .450", img: johansson450, link: "/weapons/rifles/johansson-450" },
    { name: "Fors Elite .300", img: fors300, link: "/weapons/rifles/fors-elite-300", width: 268.4, height: 134.2 },
    { name: "Hansson .30-06", img: hansson3006, link: "/weapons/rifles/hansson-30-06" },
    { name: "Perry .308", img: perry308, link: "/weapons/rifles/perry-308" },
    { name: "Quist Reaper 7.62x39", img: quist762, link: "/weapons/rifles/quist-reaper-7-62x39" },
  ];

  // Data for the Rifle Stats Table
  const rifleStats = [
    { name: ".223 Docent", class: "2-4", accuracy: 100, recoil: 28, reload: 49, hipshot: 86, mag: 6 },
    { name: "Ranger .243", class: "2-6", accuracy: 78, recoil: 46, reload: 49, hipshot: 76, mag: 5 },
    { name: ".270 Huntsman", class: "4-8", accuracy: 55, recoil: 64, reload: 49, hipshot: 67, mag: 4 },
    { name: "7mm Regent Magnum", class: "4-9", accuracy: 33, recoil: 82, reload: 81, hipshot: 48, mag: 1 },
    { name: "Rangemaster 338", class: "7-9", accuracy: 33, recoil: 100, reload: 81, hipshot: 29, mag: 1 },
    { name: "Whitlock Model 86", class: "2-6", accuracy: 78, recoil: 46, reload: 57, hipshot: 76, mag: 4 },
    { name: "Coachmate Lever .45-70", class: "4-9", accuracy: 55, recoil: 64, reload: 57, hipshot: 67, mag: 3 },
    { name: "Virant .22LR", class: "1", accuracy: 100, recoil: 10, reload: 49, hipshot: 86, mag: 10 },
    { name: "King 470DB", class: "9", accuracy: 55, recoil: 100, reload: 10, hipshot: 12, mag: 2 },
    { name: "Solokhin MN1890", class: "3-7", accuracy: 64, recoil: 58, reload: 60, hipshot: 72, mag: 5 },
    { name: ".300 Canning Magnum", class: "7-9", accuracy: 80, recoil: 90, reload: 49, hipshot: 35, mag: 4 },
    { name: "Vasquez Cyclone .45", class: "2-4", accuracy: 60, recoil: 10, reload: 49, hipshot: 80, mag: 7 },
    { name: "Eckers .30-06", class: "4-8", accuracy: 35, recoil: 80, reload: 49, hipshot: 50, mag: 4 },
    { name: "Mårtensson 6.5mm", class: "4-8", accuracy: 70, recoil: 50, reload: 49, hipshot: 67, mag: 5 },
    { name: "Hudzik .50 Caplock", class: "3-7, 4-8", accuracy: 25, recoil: 70, reload: 5, hipshot: 15, mag: 1 },
    { name: "M1 Iwaniec", class: "4-8", accuracy: 35, recoil: 82, reload: 49, hipshot: 50, mag: 5, link: "/weapons/rifles/m1-iwaniec" },
    { name: "F.L. Sporter .303", class: "4-8", accuracy: 55, recoil: 64, reload: 49, hipshot: 67, mag: 5 },
    { name: "Kullman .22H", class: "1-2", accuracy: 100, recoil: 20, reload: 49, hipshot: 86, mag: 6 },
    { name: "ZARZA-10 .308", class: "4-8", accuracy: 45, recoil: 75, reload: 59, hipshot: 50, mag: 5 },
    { name: "ZARZA-15 .223", class: "2-4", accuracy: 100, recoil: 25, reload: 59, hipshot: 86, mag: 5 },
    { name: "ZARZA-15 .22LR", class: "1", accuracy: 100, recoil: 8, reload: 59, hipshot: 86, mag: 5 },
    { name: "Curman .50 Inline", class: "4-8", accuracy: 30, recoil: 70, reload: 5, hipshot: 15, mag: 1, link: "/weapons/rifles/curman-50-inline" },
    { name: "Tsurugi LRR .338", class: "7-9", accuracy: 38, recoil: 100, reload: 49, hipshot: 12, mag: 5 },
    { name: "Malmer 7mm Magnum", class: "4-9", accuracy: 35, recoil: 85, reload: 40, hipshot: 25, mag: 3, link: "/weapons/rifles/malmer-7mm-magnum" },
    { name: "Olsson Model 23 .308", class: "4-8", accuracy: 40, recoil: 79, reload: 40, hipshot: 27, mag: 4 },
    { name: "Zagan Varminter .22-250", class: "2-4", accuracy: 100, recoil: 30, reload: 49, hipshot: 80, mag: 5 },
    { name: "Moradi Model 1894", class: "3-8**", accuracy: 80, recoil: 43, reload: 57, hipshot: 76, mag: 6 },
    { name: "Arzyna .300 Mag Tactical", class: "7-9", accuracy: 90, recoil: 75, reload: 59, hipshot: 50, mag: 5 },
    { name: "Gandhare Rifle", class: "4-8", accuracy: 30, recoil: 70, reload: 70, hipshot: 15, mag: 1 },
    { name: "Vallgarda .375", class: "7-9", accuracy: 95, recoil: 100, reload: 45, hipshot: 50, mag: 4 },
    { name: "Johansson .450", class: "4-7", accuracy: 40, recoil: 50, reload: 40, hipshot: 30, mag: 5 },
    { name: "Fors Elite .300", class: "3-6", accuracy: 85, recoil: 40, reload: 49, hipshot: 80, mag: 6 },
    { name: "Hansson .30-06", class: "4-8", accuracy: 43, recoil: 78, reload: 55, hipshot: 60, mag: 5 },
    { name: "Perry .308", class: "4-8", accuracy: 40, recoil: 75, reload: 59, hipshot: 65, mag: 5 },
    { name: "Quist Reaper 7.62x39", class: "2-6", accuracy: 85, recoil: 43, reload: 60, hipshot: 55, mag: 5 },
    { name: "Laperriere Outrider .30-30", class: "2-6", accuracy: 80, recoil: 44, reload: 58, hipshot: 78, mag: 4 },
    { name: "Anantha Action .22 Mag", class: "1-2", accuracy: 100, recoil: 15, reload: 50, hipshot: 86, mag: 10 },
    { name: "Frost .257", class: "2-6", accuracy: 35, recoil: 75, reload: 52, hipshot: 80, mag: 4 },
  ];

  /* ------------------- ADDED HANDGUN IMAGES ------------------- */
  const handgunImages = [
    { name: ".243 R. Cuomo", img: cuomo243, link: "/weapons/handguns/243-r-cuomo" },
    { name: ".44 Panther Magnum", img: panther44, link: "/weapons/handguns/44-panther-magnum" },
    { name: ".45 Rolleston", img: rolleston45, link: "/weapons/handguns/45-rolleston" },
    { name: "10mm Davani", img: davani10mm, link: "/weapons/handguns/10mm-davani" },
    { name: "Andersson .22LR", img: andersson22lr, link: "/weapons/handguns/andersson-22lr" },
    { name: "Focoso 357", img: focoso357, link: "/weapons/handguns/focoso-357" },
    { name: "Mangiafico 410/45 Colt", img: mangiafico410, link: "/weapons/handguns/mangiafico-410-45-colt" },
    { name: "Rhino 454", img: rhino454, link: "/weapons/handguns/rhino-454" },
    { name: "Sundberg 454", img: sundberg454, link: "/weapons/handguns/sundberg-454" },
    { name: ".45-70 Jernberg Superior", img: jernberg4570, link: "/weapons/handguns/45-70-jernberg-superior" },
  ];

  /* ------------------- ADDED SHOTGUN IMAGES ------------------- */
  const shotgunImages = [
        { name: "Cacciatore 12G", img: cacciatore12g, link: "/weapons/shotguns/cacciatore-12g" },
    { name: "Caversham Steward 12G", img: caversham12g, link: "/weapons/shotguns/caversham-steward-12g" },
    { name: "Couso Model 1897", img: couso1897, link: "/weapons/shotguns/couso-model-1897" },
    { name: "Strecker SxS 20G", img: strecker20g, link: "/weapons/shotguns/strecker-sxs-20g" },
    { name: "Nordin 20SA", img: nordin20sa, link: "/weapons/shotguns/nordin-20sa" },
    { name: "Grelck Drilling Rifle", img: grelck, link: "/weapons/shotguns/grelck-drilling-rifle" },
    { name: "Miller Model 1891", img: miller1891, link: "/weapons/shotguns/miller-model-1891" },
    { name: "Strandberg 10SA Executive", img: strandberg10sa, link: "/weapons/shotguns/strandberg-10sa" },
    { name: "Gopi 10G Grand", img: gopi10g, link: "/weapons/shotguns/gopi-10g-grand" },
  ];

  /* ------------------- ADDED BOW IMAGES ------------------- */
  const bowImages = [
    { name: "Alexander Longbow", img: alexander, link: "/weapons/bows/alexander-longbow" },
    { name: "Bearclaw Lite CB-60", img: bearclaw, link: "/weapons/bows/bearclaw-lite-cb-60" },
    { name: "Crosspoint CB-165", img: crosspoint, link: "/weapons/bows/crosspoint-cb-165" },
    { name: "Hawk Edge CB-70", img: hawkedge, link: "/weapons/bows/hawk-edge-cb-70" },
    { name: "Houyi Recurve Bow", img: houyi, link: "/weapons/bows/houyi-recurve-bow" },
    { name: "Koter CB-65 Bow", img: koter, link: "/weapons/bows/koter-cb-65" },
    { name: "Razorback Lite CB-60", img: razorback, link: "/weapons/bows/razorback-lite-cb-60" },
    { name: "Stenberg Takedown Recurve Bow", img: stenberg, link: "/weapons/bows/stenberg-takedown-recurve-bow" },
  ];

  /* ------------------- ADDED HANDGUN STATS ------------------- */
  const handgunStats = [
    { name: ".243 R. Cuomo", class: "2-6**", accuracy: 62, recoil: 48, reload: 50, hipshot: 17, mag: 1, link: "/weapons/handguns/243-r-cuomo" },
    { name: ".44 Panther Magnum", class: "3-8", accuracy: 33, recoil: 82, reload: 60, hipshot: 95, mag: 6, link: "/weapons/handguns/44-panther-magnum" },
    { name: ".45 Rolleston", class: "2-5", accuracy: 45, recoil: 75, reload: 18, hipshot: 72, mag: 5, link: "/weapons/handguns/45-rolleston" },
    { name: "10mm Davani", class: "2-6", accuracy: 85, recoil: 50, reload: 78, hipshot: 80, mag: 15, link: "/weapons/handguns/10mm-davani" },
    { name: "Andersson .22LR", class: "1**", accuracy: 100, recoil: 10, reload: 49, hipshot: 86, mag: 10, link: "/weapons/handguns/andersson-22lr" },
    { name: "Focoso 357", class: "2-6", accuracy: 55, recoil: 64, reload: 60, hipshot: 100, mag: 6 },
    { name: "Mangiafico 410/45 Colt", class: "(1**), 2-5", accuracy: 40, recoil: 70, reload: 60, hipshot: 95, mag: 6 },
    { name: "Rhino 454", class: "4-9", accuracy: 10, recoil: 100, reload: 60, hipshot: 86, mag: 5 },
    { name: "Sundberg 454", class: "4-9", accuracy: 10, recoil: 100, reload: 60, hipshot: 86, mag: 5, link: "/weapons/handguns/sundberg-454" },
    { name: ".45-70 Jernberg Superior", class: "4-9**", accuracy: 75, recoil: 62, reload: 58, hipshot: 25, mag: 1, link: "/weapons/handguns/45-70-jernberg-superior" },
  ];

  /* ------------------- ADDED SHOTGUN STATS ------------------- */
  const shotgunStats = [
    { name: "Cacciatore 12G", class: "1, 2-5, 4-8", accuracy: 33, recoil: 82, reload: 29, hipshot: 88, mag: 6 },
    { name: "Caversham Steward 12G", class: "1, 2-5, 4-8", accuracy: 33, recoil: 82, reload: 69, hipshot: 88, mag: 2 },
    { name: "Couso Model 1897", class: "1, 2-4, 4-7", accuracy: 33, recoil: 82, reload: 29, hipshot: 88, mag: 5 },
    { name: "Strecker SxS 20G", class: "1, 2-4, 4-7", accuracy: 33, recoil: 82, reload: 10, hipshot: 95, mag: 2 },
    { name: "Nordin 20SA", class: "1, 2-4, 4-7", accuracy: 33, recoil: 82, reload: 29, hipshot: 88, mag: 3 },
    { name: "Grelck Drilling Rifle", class: "1, 2-4, 4-7, (5-9**)", accuracy: 33, recoil: 82, reload: 10, hipshot: 95, mag: 3 },
    { name: "Miller Model 1891", class: "1-2, 4-7, 6-9", accuracy: 33, recoil: 82, reload: 69, hipshot: 88, mag: 3 },
    { name: "Strandberg 10SA Executive", class: "1-2, 4-7, 6-9", accuracy: 30, recoil: 82, reload: 25, hipshot: 88, mag: 4 },
    { name: "Gopi 10G Grand", class: "1-2, 4-9", accuracy: 36, recoil: 82, reload: 50, hipshot: 92, mag: 2 },
    { name: "Giddings SSC .410 Coyote", class: "1, 2-3, 3-5", accuracy: 33, recoil: 78, reload: 60, hipshot: 88, mag: 1 },
  ];

  /* ------------------- ADDED BOW STATS ------------------- */
  const bowStats = [
    { name: "Alexander Longbow", class: "1-9", accuracy: 30, recoil: 15, reload: 100, hipshot: 12, draw: "60 lb", mag: 1 },
    { name: "Bearclaw Lite CB-60", class: "1-9", accuracy: 38, recoil: 10, reload: 100, hipshot: 14, draw: "60 lb", mag: 1 },
    { name: "Crosspoint CB-165", class: "1-9", accuracy: 45, recoil: 35, reload: 20, hipshot: 0, draw: "165 lb", mag: 5 },
    { name: "Hawk Edge CB-70", class: "1-9", accuracy: 10, recoil: 28, reload: 100, hipshot: 10, draw: "70 lb", mag: 1 },
    { name: "Houyi Recurve Bow", class: "1-9", accuracy: 38, recoil: 20, reload: 100, hipshot: 10, draw: "70 lb", mag: 1 },
    { name: "Koter CB-65 Bow", class: "1-9", accuracy: 24, recoil: 19, reload: 100, hipshot: 12, draw: "65 lb", mag: 1 },
    { name: "Razorback Lite CB-60", class: "1-9", accuracy: 33, recoil: 10, reload: 100, hipshot: 19, draw: "60 lb", mag: 1 },
    { name: "Stenberg Takedown Recurve Bow", class: "1-9", accuracy: 38, recoil: 10, reload: 100, hipshot: 10, draw: "50 lb", mag: 1 },
  ];

  return (
    <div className="min-h-screen text-gray-900 p-6 md:p-12 font-sans tracking-tight" style={{ fontFamily: '"Roboto Condensed", sans-serif' }}>
       {/* Add Google Font link dynamically */}
      <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
      
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <header className="flex flex-col md:flex-row md:items-center justify-between border-b border-gray-200 pb-4 mb-6">
          <h1 className="text-4xl md:text-5xl font-light mb-4 md:mb-0">
            Weapons
          </h1>

          
        </header>

        {/* Main Content Layout */}
        <div className="block">
            
            {/* Right Floated Infobox */}
            <div className="float-right w-auto ml-6 mb-4 bg-white border border-gray-200 shadow-xl font-sans">
                {/* Infobox Title */}
                <div className="bg-gray-100 text-gray-900 text-center font-bold py-2 border-b border-gray-200 tracking-wide">
                    Weapons
                </div>
                
                {/* Image Area */}
                <div className="relative group p-4 bg-gray-50">
                    <img src={WeaponsImage} alt="Weapons" className="border border-gray-200" style={{ width: '268.4px', height: '150.32px' }} />
                </div>

                 {/* Infobox Links */}
                 <div className="bg-gray-100 text-sm font-bold text-gray-900">


                 </div>
            </div>

            {/* Intro Text */}
            <div className="mb-8 text-gray-700 font-sans text-[16px] leading-relaxed space-y-4">
                <p>
                    <strong className="text-gray-900">Weapons</strong> are used to hunt.
                </p>
                <p>
                    Currently, 4 different weapon classes are available: rifles, handguns, shotguns, and bows (including crossbows). Each class of weapons has unique traits and <a href="#" className="text-green-800 hover:underline">Ammunition</a>, thus requires a different game style. Many of the weapons have variants, which are essentially the same weapon with a different aesthetic.
                </p>
            </div>

            {/* Table of Contents */}
            <div className="mb-8 inline-block bg-gray-50 border border-gray-200 p-2 min-w-[200px]">
                <div className="flex justify-between items-center border-b border-gray-200 pb-1 mb-2">
                    <span className="font-bold text-gray-900 text-sm">Contents</span>
                    <button onClick={() => setIsTocOpen(!isTocOpen)} className="text-green-800 text-xs hover:underline">[{isTocOpen ? 'hide' : 'show'}]</button>
                </div>
                {isTocOpen && (
                    <ol className="list-decimal list-inside text-gray-700 text-sm space-y-1 font-sans">
                        <li><a href="#rifles" className="hover:text-green-600 hover:underline">Rifles</a></li>
                        <li><a href="#shotguns" className="hover:text-green-600 hover:underline">Shotguns</a></li>
                        <li><a href="#bows" className="hover:text-green-600 hover:underline">Bows</a></li>
                        <li><a href="#handguns" className="hover:text-green-600 hover:underline">Handguns</a></li>
                    </ol>
                )}
            </div>

            {/* 1. Rifles Section */}
            <div id="rifles" className="mb-12 clear-both">
                <div className="flex items-center space-x-2 border-b border-gray-200 pb-2 mb-4">
                    <h2 className="text-2xl font-bold text-gray-900">1. Rifles</h2>
                    <a href="#" className="text-green-800"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                </div>
                
                <p className="text-gray-700 text-[16px] mb-8">
                    Rifles are the favorite option for many hunters. Provided with scopes, they can be very effective in long-range shooting. From the <Link to="/weapons/rifles/223-docent" className="text-green-800 hover:underline">.223 Docent</Link> for hunting <a href="#" className="text-green-800 hover:underline">foxes</a> and <a href="#" className="text-green-800 hover:underline">coyotes</a>, to the <Link to="/weapons/rifles/quist-reaper-7-62x39" className="text-green-800 hover:underline">Quist Reaper 7.62x39</Link>, and on to the powerful <Link to="/weapons/rifles/rangemaster-338" className="text-green-800 hover:underline">Rangemaster 338</Link> for <a href="#" className="text-green-800 hover:underline">Moose</a> and <a href="#" className="text-green-800 hover:underline">European Bison</a>.
                </p>

                {/* Rifle Image Grid */}
                <div className="grid grid-cols-4 gap-4 mb-12">
                    {rifleImages.map((rifle, idx) => (
                         <div key={idx} className="group cursor-pointer text-center">
                            <div className="relative w-[180px] h-[90px] overflow-hidden border border-gray-200 bg-white flex items-center justify-center p-2 mx-auto">
                                <img 
                                    src={rifle.img} 
                                    alt={rifle.name} 
                                    width={rifle.width || 180}
                                    height={rifle.height || 90}
                                    className="object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                                />
                                 <div className="absolute bottom-2 right-2 bg-white/80 p-1 rounded">
                                     <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                            </div>
                            {rifle.link && rifle.link.startsWith('http') ? (
                                <a href={rifle.link} className="mt-2 text-sm text-green-800 font-bold hover:underline block">
                                    {rifle.name}
                                </a>
                            ) : (
                                <Link to={rifle.link || '#'} className="mt-2 text-sm text-green-800 font-bold hover:underline block">
                                    {rifle.name}
                                </Link>
                            )}
                        </div>
                    ))}
                </div>

                {/* Rifle Stats Table */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse font-sans text-sm md:text-[15px] bg-white">
                        <thead>
                            <tr className="bg-gray-100 border-b-2 border-gray-200 text-gray-900 font-bold">
                                <th className="p-3 w-1/4">Weapon</th>
                                <th className="p-3">Weapon Class</th>
                                <th className="p-3">Accuracy*</th>
                                <th className="p-3">Recoil</th>
                                <th className="p-3">Reload Speed*</th>
                                <th className="p-3">Hipshot</th>
                                <th className="p-3">Magazine Size</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-700 divide-y divide-gray-200">
                            {rifleStats.map((rifle, idx) => {
                                const imageObj = rifleImages.find(img => img.name === rifle.name);
                                const link = imageObj ? imageObj.link : null;
                                return (
                                <tr key={idx} className="hover:bg-gray-50">
                                    <td className="p-3 text-green-800 hover:underline cursor-pointer">
                                                                                {link ? (
                                                                                    link.startsWith('http') ? (
                                                                                        <a href={link} className="text-green-800 hover:underline">{rifle.name}</a>
                                                                                    ) : (
                                                                                        <Link to={link}>{rifle.name}</Link>
                                                                                    )
                                                                                ) : rifle.name}
                                    </td>
                                    <td className="p-3">{rifle.class}</td>
                                    <td className="p-3 text-center">{rifle.accuracy}</td>
                                    <td className="p-3 text-center">{rifle.recoil}</td>
                                    <td className="p-3 text-center">{rifle.reload}</td>
                                    <td className="p-3 text-center">{rifle.hipshot}</td>
                                    <td className="p-3 text-center">{rifle.mag}</td>
                                </tr>
                                );
                            })}
                        </tbody>
                    </table>
                    <p className="text-xs text-gray-500 mt-2">* Higher value is better.</p>
                    <p className="text-xs text-gray-500 mt-1">** Ammunition from another weapon class</p>
                </div>

            </div>

            {/* 2. Shotguns Section (Added) */}
            <div id="shotguns" className="mb-12 clear-both">
                <div className="flex items-center space-x-2 border-b border-gray-200 pb-2 mb-4">
                    <h2 className="text-2xl font-bold text-gray-900">2. Shotguns</h2>
                    <a href="#" className="text-green-800"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                </div>
                
                <p className="text-gray-700 text-[16px] mb-8">
                    Shotguns are useful tools for hunting small to medium game. Whilst they have a considerable lower range than rifles, their spread makes it easier to hit vital parts if the shot was placed poorly. However, one has also to consider the lower penetration of shotgun pellets. They're mostly used to hunt ducks and geese, or to stop angry animals charging towards the hunter.
                </p>

                {/* Shotgun Image Grid */}
                <div className="grid grid-cols-4 gap-4 mb-12">
                    {shotgunImages.map((gun, idx) => (
                         <div key={idx} className="group cursor-pointer text-center">
                            <div className="relative w-[180px] h-[90px] overflow-hidden border border-gray-200 bg-white flex items-center justify-center p-2 mx-auto">
                                <img 
                                    src={gun.img} 
                                    alt={gun.name} 
                                    width="180"
                                    height="90"
                                    className="object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                                />
                                 <div className="absolute bottom-2 right-2 bg-white/80 p-1 rounded">
                                     <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                            </div>
                            {gun.link ? (
                                <Link to={gun.link} className="mt-2 text-sm text-green-800 font-bold hover:underline block">{gun.name}</Link>
                            ) : (
                                <p className="mt-2 text-sm text-green-800 font-bold hover:underline">{gun.name}</p>
                            )}
                        </div>
                    ))}
                </div>

                {/* Shotgun Stats Table */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse font-sans text-sm md:text-[15px] bg-white">
                        <thead>
                            <tr className="bg-gray-100 border-b-2 border-gray-200 text-gray-900 font-bold">
                                <th className="p-3 w-1/4">Weapon</th>
                                <th className="p-3">Weapon Class</th>
                                <th className="p-3">Accuracy*</th>
                                <th className="p-3">Recoil</th>
                                <th className="p-3">Reload Speed*</th>
                                <th className="p-3">Hipshot</th>
                                <th className="p-3">Magazine Size</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-700 divide-y divide-gray-200">
                            {shotgunStats.map((gun, idx) => {
                                const imageObj = shotgunImages.find(img => img.name === gun.name);
                                const link = imageObj ? imageObj.link : null;
                                return (
                                <tr key={idx} className="hover:bg-gray-50">
                                    <td className="p-3 text-green-800 hover:underline cursor-pointer">
                                        {link ? (
                                            <Link to={link}>{gun.name}</Link>
                                        ) : (
                                            gun.name
                                        )}
                                    </td>
                                    <td className="p-3">{gun.class}</td>
                                    <td className="p-3 text-center">{gun.accuracy}</td>
                                    <td className="p-3 text-center">{gun.recoil}</td>
                                    <td className="p-3 text-center">{gun.reload}</td>
                                    <td className="p-3 text-center">{gun.hipshot}</td>
                                    <td className="p-3 text-center">{gun.mag}</td>
                                </tr>
                                );
                            })}
                        </tbody>
                    </table>
                    <p className="text-xs text-gray-500 mt-2">* Higher value is better.</p>
                    <p className="text-xs text-gray-500 mt-1">** Ammunition from another weapon class</p>
                </div>
            </div>

            {/* 3. Bows Section (Added) */}
            <div id="bows" className="mb-12 clear-both">
                <div className="flex items-center space-x-2 border-b border-gray-200 pb-2 mb-4">
                    <h2 className="text-2xl font-bold text-gray-900">3. Bows</h2>
                    <a href="#" className="text-green-800"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                </div>
                
                <p className="text-gray-700 text-[16px] mb-8">
                    Bows are the option for players that like stalking and sneaking up on animals. While their penetration is excellent, they lack the range and accuracy of rifles.
                </p>

                {/* Bow Image Grid */}
                <div className="grid grid-cols-4 gap-4 mb-12">
                    {bowImages.map((bow, idx) => (
                         <div key={idx} className="group cursor-pointer text-center">
                            <div className="relative w-[180px] h-[90px] overflow-hidden border border-gray-200 bg-white flex items-center justify-center p-2 mx-auto">
                                <img 
                                    src={bow.img} 
                                    alt={bow.name} 
                                    width="180"
                                    height="90"
                                    className="object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                                />
                                 <div className="absolute bottom-2 right-2 bg-white/80 p-1 rounded">
                                     <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                            </div>
                            {bow.link ? (
                                <Link to={bow.link} className="mt-2 text-sm text-green-800 font-bold hover:underline block">{bow.name}</Link>
                            ) : (
                                <p className="mt-2 text-sm text-green-800 font-bold hover:underline">
                                    {bow.name}
                                </p>
                            )}
                        </div>
                    ))}
                </div>

                {/* Bow Stats Table */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse font-sans text-sm md:text-[15px] bg-white">
                        <thead>
                            <tr className="bg-gray-100 border-b-2 border-gray-200 text-gray-900 font-bold">
                                <th className="p-3 w-1/4">Weapon</th>
                                <th className="p-3">Weapon Class</th>
                                <th className="p-3">Accuracy*</th>
                                <th className="p-3">Recoil</th>
                                <th className="p-3">Reload Speed*</th>
                                <th className="p-3">Hipshot</th>
                                <th className="p-3">Peak Draw Weight*</th>
                                <th className="p-3">Magazine Size</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-700 divide-y divide-gray-200">
                            {bowStats.map((bow, idx) => {
                                const imageObj = bowImages.find(img => img.name === bow.name);
                                const link = imageObj ? imageObj.link : null;
                                return (
                                <tr key={idx} className="hover:bg-gray-50">
                                    <td className="p-3 text-green-800 hover:underline cursor-pointer">
                                        {link ? (
                                            <Link to={link}>{bow.name}</Link>
                                        ) : (
                                            bow.name
                                        )}
                                    </td>
                                    <td className="p-3">{bow.class}</td>
                                    <td className="p-3 text-center">{bow.accuracy}</td>
                                    <td className="p-3 text-center">{bow.recoil}</td>
                                    <td className="p-3 text-center">{bow.reload}</td>
                                    <td className="p-3 text-center">{bow.hipshot}</td>
                                    <td className="p-3 text-center">{bow.draw}</td>
                                    <td className="p-3 text-center">{bow.mag}</td>
                                </tr>
                                );
                            })}
                        </tbody>
                    </table>
                    <p className="text-xs text-gray-500 mt-2">* Higher value is better.</p>
                </div>
            </div>

             {/* 4. Handguns Section (Added) */}
            <div id="handguns" className="mb-12 clear-both">
                <div className="flex items-center space-x-2 border-b border-gray-200 pb-2 mb-4">
                    <h2 className="text-2xl font-bold text-gray-900">4. Handguns</h2>
                    <a href="#" className="text-green-800"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                </div>
                
                <p className="text-gray-700 text-[16px] mb-8">
                    Handguns can be used as a backup weapon, protection against an angry animal, or as the primary weapon choice. Combined with hard cast projectiles they can be used effectively against any animal the player encounters.
                </p>

                {/* Handgun Image Grid */}
                <div className="grid grid-cols-4 gap-4 mb-12">
                    {handgunImages.map((gun, idx) => (
                         <div key={idx} className="group cursor-pointer text-center">
                            <div className="relative w-[180px] h-[90px] overflow-hidden border border-gray-200 bg-white flex items-center justify-center p-2 mx-auto">
                                <img 
                                    src={gun.img} 
                                    alt={gun.name} 
                                    width="180"
                                    height="90"
                                    className="object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                                />
                                 <div className="absolute bottom-2 right-2 bg-white/80 p-1 rounded">
                                     <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                            </div>
                            {gun.link ? (
                                <Link to={gun.link} className="mt-2 text-sm text-green-800 font-bold hover:underline block">
                                    {gun.name}
                                </Link>
                            ) : (
                                <p className="mt-2 text-sm text-green-800 font-bold hover:underline">
                                    {gun.name}
                                </p>
                            )}
                        </div>
                    ))}
                </div>

                {/* Handgun Stats Table */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse font-sans text-sm md:text-[15px] bg-white">
                        <thead>
                            <tr className="bg-gray-100 border-b-2 border-gray-200 text-gray-900 font-bold">
                                <th className="p-3 w-1/4">Weapon</th>
                                <th className="p-3">Weapon Class</th>
                                <th className="p-3">Accuracy*</th>
                                <th className="p-3">Recoil</th>
                                <th className="p-3">Reload Speed*</th>
                                <th className="p-3">Hipshot</th>
                                <th className="p-3">Magazine Size</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-700 divide-y divide-gray-200">
                            {handgunStats.map((gun, idx) => (
                                <tr key={idx} className="hover:bg-gray-50">
                                    <td className="p-3 text-green-800 hover:underline cursor-pointer">
                                        {gun.link ? (
                                            <Link to={gun.link}>{gun.name}</Link>
                                        ) : (
                                            gun.name
                                        )}
                                    </td>
                                    <td className="p-3">{gun.class}</td>
                                    <td className="p-3 text-center">{gun.accuracy}</td>
                                    <td className="p-3 text-center">{gun.recoil}</td>
                                    <td className="p-3 text-center">{gun.reload}</td>
                                    <td className="p-3 text-center">{gun.hipshot}</td>
                                    <td className="p-3 text-center">{gun.mag}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <p className="text-xs text-gray-500 mt-2">* Higher value is better.</p>
                    <p className="text-xs text-gray-500 mt-1">** Ammunition from another weapon class</p>
                </div>
            </div>

        </div>

        <div className="h-32"></div>
      </div>
    </div>
  );
}