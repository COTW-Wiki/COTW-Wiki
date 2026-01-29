import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Rifle Imports
import docent223 from '../assets/223Docent.webp';
import ranger243 from '../assets/Ranger243.webp';
import huntsman270 from '../assets/270Huntsman.webp';
import regent7mm from '../assets/7mmRegentMagnum.webp';
import rangemaster338 from '../assets/Rangemaster338.webp';
import whitlock86 from '../assets/WhitlockModel86.webp';
import coachmate4570 from '../assets/CoachmateLever4570.webp';
import virant22lr from '../assets/Virant22LRExpress.webp';
import king470db from '../assets/King470DBZenith.webp';
import solokhin from '../assets/SolokhinMN1890AssemblyLine.webp';
import canning300 from '../assets/300CanningMagnumFrontier.webp';
import vasquez45 from '../assets/VasquezCyclone45.webp';
import eckers3006 from '../assets/Eckers3006Prestige.webp';
import martensson65 from '../assets/Martensson65Thunder.webp';
import hudzik50 from '../assets/Hudzik50CaplockTerra.webp';
import m1iwaniec from '../assets/M1IwaniecVeteran.webp';
import flsporter303 from '../assets/FLSporter303Burnished.webp';
import kullman22h from '../assets/Kullman22HWasp.webp';
import zarza22lr from '../assets/Zarza-1522LRShadow.webp';
import zarza223 from '../assets/Zarza-15223Midnight.webp';
import zarza308 from '../assets/Zarza-10308Moonlight.webp';
import curman50 from '../assets/Curman_.50_Inline.webp';
import tsurugi338 from '../assets/TsurugiLRR338.webp';
import malmer7mm from '../assets/Malmer7mmMagnum.webp';
import olsson308 from '../assets/OlssonModel23308.webp';
import zagan22250 from '../assets/ZaganVarminter22250.webp';
import moradi1894 from '../assets/Moradi_Model_1894.webp';
import arzyna300 from '../assets/Arzyna.300MagTactical.webp';
import gandhare from '../assets/GandhareRifle.webp';
import vallgarda375 from '../assets/Vallgarda.375.webp';
import johansson450 from '../assets/Johansson.450.webp';
import fors300 from '../assets/ForsElite.300.webp';
import hansson3006 from '../assets/Hansson_.30-06.webp';
import perry308 from '../assets/Perry_.308.webp';
import quist762 from '../assets/Quist_Reaper_7.62x39.webp';

// Handgun Imports
import cuomo243 from '../assets/243RCuomoCompetitor.webp';
import panther44 from '../assets/44PantherMagnum.webp';
import rolleston45 from '../assets/45RollestonCavalry.webp';
import davani10mm from '../assets/10mmDavani40A.webp';
import andersson22lr from '../assets/Andersson22LRWoodsman.webp';
import focoso357 from '../assets/Focoso357.webp';
import mangiafico410 from '../assets/Mangiafico41045ColtFlatBlack.webp';
import rhino454 from '../assets/Rhino454.webp';
import sundberg454 from '../assets/Sundberg454.webp';
import jernberg4570 from '../assets/45-70JernbergSuperior.webp';

// Shotgun Imports
import cacciatore12g from '../assets/Cacciatore12G.webp';
import caversham12g from '../assets/CavershamSteward12G.webp';
import couso1897 from '../assets/CousoModel1897Vaquero.webp';
import strecker20g from '../assets/StreckerSxS20GScarlett.webp';
import nordin20sa from '../assets/Nordin20SAServiceman.webp';
import grelck from '../assets/GrelckDrillingRifleClassic.webp';
import miller1891 from '../assets/MillerModel1891Rancher.webp';
import strandberg10sa from '../assets/Strandberg10SAExecutive.webp';
import gopi10g from '../assets/Gopi10GGrand.webp';

// Bow Imports
import alexander from '../assets/AlexanderLongbowLacquered.webp';
import bearclaw from '../assets/BearclawLiteCB60.webp';
import crosspoint from '../assets/CrosspointCB165Classic.webp';
import hawkedge from '../assets/HawkEdgeCB70.webp';
import houyi from '../assets/HouyiRecurveBow.webp';
import koter from '../assets/KoterCB65Orpheus.webp';
import razorback from '../assets/RazorbackLiteCB60.webp';
import stenberg from '../assets/Stenberg_Takedown_Recurve_Bow.webp';

export default function WeaponsTable({ activeItem }) {
  const weaponsData = [
        {
          category: "Rifles",
          items: [
            { name: ".223 Docent", img: docent223 },
            { name: ".270 Huntsman", img: huntsman270 },
            { name: ".300 Canning Magnum", img: canning300 },
            { name: "7mm Regent Magnum", img: regent7mm },
            { name: "Arzyna .300 Mag Tactical", img: arzyna300, link: "/weapons/rifles/arzyna-300-mag-tactical" },
        { name: "Coachmate Lever .45-70", img: coachmate4570 },
        { name: "Curman .50 Inline", img: curman50, link: "/weapons/rifles/curman-50-inline" },
        { name: "Eckers .30-06", img: eckers3006 },
        { name: "F.L. Sporter .303", img: flsporter303 },
        { name: "Fors Elite .300", img: fors300, link: "/weapons/rifles/fors-elite-300" },
        { name: "Gandhare Rifle", img: gandhare, link: "/weapons/rifles/gandhare-rifle" },
        { name: "Hansson .30-06", img: hansson3006 },
        { name: "Hudzik .50 Caplock", img: hudzik50 },
        { name: "Johansson .450", img: johansson450, link: "/weapons/rifles/johansson-450" },
        { name: "King 470DB", img: king470db },
        { name: "Kullman .22H", img: kullman22h },
        { name: "M1 Iwaniec", img: m1iwaniec },
        { name: "Malmer 7mm Magnum", img: malmer7mm, link: "/weapons/rifles/malmer-7mm-magnum" },
        { name: "Moradi Model 1894", img: moradi1894, link: "/weapons/rifles/moradi-model-1894" },
        { name: "Mårtensson 6.5mm", img: martensson65 },
        { name: "Olsson Model 23 .308", img: olsson308, link: "/weapons/rifles/olsson-model-23-308" },
        { name: "Perry .308", img: perry308 },
        { name: "Quist Reaper 7.62x39", img: quist762 },
        { name: "Rangemaster 338", img: rangemaster338 },
        { name: "Ranger .243", img: ranger243 },
        { name: "Solokhin MN1890", img: solokhin },
        { name: "Tsurugi LRR .338", img: tsurugi338 },
        { name: "Vallgarda .375", img: vallgarda375, link: "/weapons/rifles/vallgarda-375" },
        { name: "Vasquez Cyclone .45", img: vasquez45, link: "/weapons/rifles/vasquez-cyclone-45" },
        { name: "Virant .22LR", img: virant22lr },
        { name: "Whitlock Model 86", img: whitlock86 },
        { name: "Zagan Varminter .22-250", img: zagan22250, link: "/weapons/rifles/zagan-varminter-22-250" },
        { name: "ZARZA-10 .308", img: zarza308, link: "/weapons/rifles/zarza-10-308" },
        { name: "ZARZA-15 .223", img: zarza223 },
        { name: "ZARZA-15 .22LR", img: zarza22lr }
      ]
    },
    {
      category: "Handguns",
      items: [
        { name: ".243 R. Cuomo", img: cuomo243, link: "/weapons/handguns/243-r-cuomo" },
        { name: ".44 Panther Magnum", img: panther44, link: "/weapons/handguns/44-panther-magnum" },
        { name: ".45 Rolleston", img: rolleston45, link: "/weapons/handguns/45-rolleston" },
        { name: ".45-70 Jernberg Superior", img: jernberg4570, link: "/weapons/handguns/45-70-jernberg-superior" },
        { name: "10mm Davani", img: davani10mm, link: "/weapons/handguns/10mm-davani" },
        { name: "Andersson .22LR", img: andersson22lr, link: "/weapons/handguns/andersson-22lr" },
        { name: "Focoso 357", img: focoso357, link: "/weapons/handguns/focoso-357" },
        { name: "Mangiafico 410/45 Colt", img: mangiafico410, link: "/weapons/handguns/mangiafico-410-45-colt" },
        { name: "Rhino 454", img: rhino454, link: "/weapons/handguns/rhino-454" },
        { name: "Sundberg 454", img: sundberg454, link: "/weapons/handguns/sundberg-454" }
      ]
    },
    {
      category: "Shotguns",
      items: [
        { name: "Cacciatore 12G", img: cacciatore12g },
        { name: "Caversham Steward 12G", img: caversham12g },
        { name: "Couso Model 1897", img: couso1897, link: "/weapons/shotguns/couso-model-1897" },
        { name: "Gopi 10G Grand", img: gopi10g },
        { name: "Grelck Drilling Rifle", img: grelck },
        { name: "Miller Model 1891", img: miller1891 },
        { name: "Nordin 20SA", img: nordin20sa, link: "/weapons/shotguns/nordin-20sa" },
        { name: "Strandberg 10SA Executive", img: strandberg10sa },
        { name: "Strecker SxS 20G", img: strecker20g, link: "/weapons/shotguns/strecker-sxs-20g" }
      ]
    },
    {
      category: "Bows",
      items: [
        { name: "Alexander Longbow", img: alexander, link: "/weapons/bows/alexander-longbow" },
        { name: "Bearclaw Lite CB-60", img: bearclaw, link: "/weapons/bows/bearclaw-lite-cb-60" },
        { name: "Crosspoint CB-165", img: crosspoint, link: "/weapons/bows/crosspoint-cb-165" },
        { name: "Hawk Edge CB-70", img: hawkedge, link: "/weapons/bows/hawk-edge-cb-70" },
        { name: "Houyi Recurve Bow", img: houyi },
        { name: "Koter CB-65 Bow", img: koter },
        { name: "Razorback Lite CB-60", img: razorback },
        { name: "Stenberg Takedown Recurve Bow", img: stenberg, link: "/weapons/bows/stenberg-takedown-recurve-bow" }
      ]
    }
  ];

  return (
    <div className="border border-gray-200 text-sm font-sans shadow-lg bg-white" style={{ width: '750px' }}>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-green-800 text-white border-b border-green-900">
            <th 
              colSpan={2} 
              className="font-bold px-4 text-center text-base tracking-wide"
              style={{ height: '37.3px' }}
            >
              Weapons
            </th>
          </tr>
        </thead>
        <tbody>
          {weaponsData.map((section, idx) => (
            <tr key={idx} className="border-b border-gray-200 last:border-b-0">
                {/* Category Label */}
                <td 
                   className="bg-gray-50 p-3 font-bold text-gray-900 border-r border-gray-200 align-middle text-center"
                   style={{ width: '100px' }}>
                  {section.category}
                </td>
                
                {/* Items List */}
                <td className="p-3 bg-white text-gray-700 leading-relaxed align-middle">
                  <div className="flex flex-wrap items-center">
                    {section.items.map((item, itemIdx) => (
                      <React.Fragment key={itemIdx}>
                        <div className="inline-flex items-center">
                          {/* Weapon Image */}
                          <img 
                            src={item.img} 
                            alt={item.name} 
                            className="w-[40px] h-[20px] object-contain mr-3"
                          />
                          {activeItem === item.name ? (
                            <span className="font-bold text-gray-900 bg-green-100 px-1 rounded whitespace-nowrap cursor-default">
                              {item.name}
                            </span>
                          ) : (
                            item.link ? (
                                <Link to={item.link} className="text-green-800 hover:underline hover:text-green-900 cursor-pointer whitespace-nowrap font-medium">
                                    {item.name}
                                </Link>
                            ) : (
                                <a href="#" className="text-green-800 hover:underline hover:text-green-900 cursor-pointer whitespace-nowrap font-medium">
                                    {item.name}
                                </a>
                            )
                          )}
                        </div>
                        {itemIdx < section.items.length - 1 && (
                          <span className="text-gray-400 mx-3">•</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
      </table>
    </div>
  );
}