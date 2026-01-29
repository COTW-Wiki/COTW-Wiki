import React, { useState } from 'react';

// --- IMPORTS ---
import HirschfeldenOutpost from '../../assets/Hirschfelden_Outpost.webp';
import HirschfeldenOutpostInterior from '../../assets/Hirschfelden_Outpost_Interior.webp';
import HirschfeldenInterior from '../../assets/HirschfeldenInterior.webp';
import HirschfeldenInfoBoard from '../../assets/HirschfeldenInfoBoard.webp';

import LaytonOutpost from '../../assets/Layton_Lake_outpost.webp';
import LaytonOutpostInterior from '../../assets/Layton_Lake_Outpost_Interior.webp';
import LaytonInterior from '../../assets/LaytonInterior.webp';
import LaytonLakesInterior from '../../assets/LaytonLakesInterior.webp';
import LaytonLakesShed from '../../assets/LaytonLakesShed.webp';
import LaytonInfoBoard from '../../assets/LaytonInfoBoard.webp';

import MedvedOutpost from '../../assets/Medved_Taiga_Outpost.webp';
import MedvedOutpostInterior from '../../assets/Medved_Taiga_Outpost_Interior.webp';
import MedvedInterior from '../../assets/MedvedInterior.webp';
import MedvedBearcache from '../../assets/MedvedBearcache.webp';
import MedvedInfoBoard from '../../assets/MedvedInfoBoard.webp';

import VurhongaOutpost from '../../assets/Vurhonga_outpost.webp';
import VurhongaOutpostInterior from '../../assets/Vurhonga_outpost_interior.webp';
import VurhongaInterior from '../../assets/VurhongaInterior.webp';
import VurhongaOuthouse from '../../assets/VurhongaOuthouse.webp';
import VurhongaOuthouseInterior from '../../assets/VurhongaOuthouseInterior.webp';
import VurhongaInfoBoardVuxa from '../../assets/VurhongaInfoBoardVuxa.webp';
import VurhongaInfoBoardDzonga from '../../assets/VurhongaInfoBoardDzonga.webp';

import ParqueFernandoOutpost from '../../assets/ParqueFernandoOutpost.webp';
import ParqueFernandoInterior from '../../assets/ParqueFernandoInterior.webp';
import ParqueFernandoInterior2 from '../../assets/ParqueFernandoInterior2.webp';
import ParqueFernandoInterior3 from '../../assets/ParqueFernandoInterior3.webp';
import ParqueFernandoBathroom from '../../assets/ParqueFernandoBathroom.webp';

import YukonOutpost from '../../assets/YukonValleyOutpost.webp';
import YukonInterior from '../../assets/YukonValleyInterior.webp';
import YukonInterior2 from '../../assets/YukonInterior.webp';
import YukonBearcache from '../../assets/YukonBearcache.webp';
import YukonInfoBoard from '../../assets/YukonInfoBoard.webp';

import CuatroOutpost from '../../assets/CuattroColinasOutpost.webp';
import CuatroInterior from '../../assets/CuatroColinasInterior.webp';
import CuatroInterior2 from '../../assets/CuatroColinasInterior2.webp';
import CuatroInterior3 from '../../assets/CuatroColinasInterior3.webp';
import CuatroWindowInterior from '../../assets/CuatroColinasWindowInterior.webp';
import CuatroBathroom from '../../assets/CuatroColinasBathroom.webp';
import CuatroShed from '../../assets/CuatroColinasShed.webp';
import CuatroShedInterior from '../../assets/CuatroColinasShedInterior.webp';
import CuatroBarn from '../../assets/CuatroColinasBarn.webp';
import CuatroBarnInterior from '../../assets/CuatroColinasBarnInterior.webp';
import CuatroBarnInterior2 from '../../assets/CuatroColinasBarnInterior2.webp';
import CuatroInfoBoard from '../../assets/CuatroColinasInfoBoard.webp';
import CuatroInfoBoard2 from '../../assets/CuatroColinasInfoBoard2.webp';

import SilverOutpost from '../../assets/SilverRidgePeaksOutpost.webp';
import SilverInterior from '../../assets/SilverRidgePeaksInterior.webp';
import SilverInfoBoard from '../../assets/SilverRidgePeaksInfoBoard.webp';

import TeAwaroaOutpost from '../../assets/TeAwaroaOutpost.webp';
import TeAwaroaInterior from '../../assets/TeAwaroaInterior.webp';
import TeAwaroaKitchen from '../../assets/TeAwaroaKitchen.webp';
import TeAwaroaSlumber from '../../assets/TeAwaroaSlumber.webp';
import TeAwaroaLounge from '../../assets/TeAwaroaLounge.webp';
import TeAwaroaLounge2 from '../../assets/TeAwaroaLounge2.webp';
import TeAwaroaSmallerOutpost from '../../assets/TeAwaroaSmallerOutpost.webp';
import TeAwaroaSmallerSlumber from '../../assets/TeAwaroaSmallerSlumber.webp';
import TeAwaroaSmallerInterior from '../../assets/TeAwaroaSmallerInterior.webp';
import TeAwaroaSmallerInterior2 from '../../assets/TeAwaroaSmallerInterior2.webp';
import TeAwaroaInfoBoard from '../../assets/TeAwaroaInfoBoard.webp';

import NewMadisonLodge from '../../assets/New-madison-lodge.webp';
import OutpostsImage from '../../assets/Outposts.webp';

// --- DATA STRUCTURE FOR RESERVES ---
const reservesData = [
  {
    id: "hirschfelden",
    title: "Hirschfelden Hunting Reserve",
    images: [
      { label: "Outpost", src: HirschfeldenOutpost },
      { label: "Interior", src: HirschfeldenOutpostInterior },
      { label: "Interior from another angle", src: HirschfeldenInterior },
      { label: "Info Board", src: HirschfeldenInfoBoard },
    ]
  },
  {
    id: "layton",
    title: "Layton Lake District",
    images: [
      { label: "Balmont Railroad Outpost", src: LaytonOutpost },
      { label: "Balmont Railroad Outpost Interior", src: LaytonOutpostInterior },
      { label: "Interior", src: LaytonInterior },
      { label: "Interior from a different angle", src: LaytonLakesInterior },
      { label: "Window to the shed", src: LaytonLakesShed },
      { label: "Info Board", src: LaytonInfoBoard },
    ]
  },
  {
    id: "medved",
    title: "Medved-Taiga National Park",
    images: [
      { label: "Outpost", src: MedvedOutpost },
      { label: "Interior", src: MedvedOutpostInterior },
      { label: "Interior from a different angle", src: MedvedInterior },
      { label: "Bear cache", src: MedvedBearcache },
      { label: "Info Board", src: MedvedInfoBoard },
    ]
  },
  {
    id: "vurhonga",
    title: "Vurhonga Savanna Reserve",
    images: [
      { label: "Interior", src: VurhongaOutpostInterior },
      { label: "Outpost", src: VurhongaOutpost },
      { label: "Interior from a different angle", src: VurhongaInterior },
      { label: "Outhouse", src: VurhongaOuthouse },
      { label: "Outhouse interior", src: VurhongaOuthouseInterior },
      { label: "Info Board Vuxa", src: VurhongaInfoBoardVuxa },
      { label: "Info Board Dzunga", src: VurhongaInfoBoardDzonga },
    ]
  },
  {
    id: "parque",
    title: "Parque Fernando",
    images: [
      { label: "Outpost", src: ParqueFernandoOutpost },
      { label: "Interior", src: ParqueFernandoInterior },
      { label: "Interior from a different angle", src: ParqueFernandoInterior2 },
      { label: "Bedroom", src: ParqueFernandoInterior3 },
      { label: "Bathroom", src: ParqueFernandoBathroom },
    ]
  },
  {
    id: "yukon",
    title: "Yukon Valley",
    images: [
      { label: "Outpost", src: YukonOutpost },
      { label: "Interior", src: YukonInterior },
      { label: "Interior from a different angle", src: YukonInterior2 },
      { label: "Bear cache", src: YukonBearcache },
      { label: "Info Board", src: YukonInfoBoard },
    ]
  },
  {
    id: "cuatro",
    title: "Cuatro Colinas Game Reserve",
    description: "Some outposts have a big window where you can view the scenery.",
    images: [
      { label: "Outpost", src: CuatroOutpost },
      { label: "Interior", src: CuatroInterior },
      { label: "Interior from a different angle", src: CuatroInterior2 },
      { label: "Sleeping area", src: CuatroInterior3 },
      { label: "Interior with a big window", src: CuatroWindowInterior },
      { label: "Bathroom", src: CuatroBathroom },
      { label: "Shed", src: CuatroShed },
      { label: "Shed interior", src: CuatroShedInterior },
      { label: "Barn", src: CuatroBarn },
      { label: "Barn interior", src: CuatroBarnInterior },
      { label: "Barn interior from another angle", src: CuatroBarnInterior2 },
      { label: "Info Board", src: CuatroInfoBoard },
      { label: "Info Board's backside (also the backside of Parque Fernando's Info Boards)", src: CuatroInfoBoard2 },
    ]
  },
  {
    id: "silver",
    title: "Silver Ridge Peaks",
    images: [
      { label: "Outpost", src: SilverOutpost },
      { label: "Interior", src: SilverInterior },
      { label: "Interior from a different angle", src: SilverInterior },
      { label: "Info Board", src: SilverInfoBoard },
    ]
  },
  {
    id: "te-awaroa",
    title: "Te Awaroa National Park",
    description: "There's a few more spacious outposts that have three rooms instead of two. The additional room is a small lounge area that serves no particular gameplay purpose.",
    images: [
      { label: "Outpost", src: TeAwaroaOutpost },
      { label: "Interior", src: TeAwaroaInterior },
      { label: "Kitchen", src: TeAwaroaKitchen },
      { label: "Sleeping area", src: TeAwaroaSlumber },
      { label: "Lounge area", src: TeAwaroaLounge },
      { label: "Lounge area from a different angle", src: TeAwaroaLounge2 },
      { label: "Smaller outpost", src: TeAwaroaSmallerOutpost },
      { label: "Smaller sleeping area", src: TeAwaroaSmallerSlumber },
      { label: "Smaller interior", src: TeAwaroaSmallerInterior },
      { label: "Smaller interior from a different angle", src: TeAwaroaSmallerInterior2 },
      { label: "Info Board", src: TeAwaroaInfoBoard },
    ]
  },
  {
    id: "new-england",
    title: "New England Mountains",
    images: [] // Screenshots didn't show grid, just header
  },
  {
    id: "locations",
    title: "Locations",
    images: [
       { label: "New Madison Lodge", src: NewMadisonLodge }
    ]
  }
];

export default function OutpostPage() {
  const [isTocOpen, setIsTocOpen] = useState(true);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full min-h-screen font-sans text-slate-300 bg-slate-900">
      
      {/* --- HEADER --- */}
      <div className="w-full border-b border-slate-700 pb-4 mb-6 px-6 pt-6">
        <div className="flex justify-between items-start">
          <h1 className="text-4xl font-light text-white">Outposts</h1>
          <div className="flex items-center gap-4 text-xs font-bold text-blue-300">
             <div className="flex items-center gap-1 cursor-pointer hover:text-white">
             </div>
          </div>
        </div>
      </div>

      <div className="w-full px-6 mb-12">
        
        {/* --- DESCRIPTION --- */}
        <div className="space-y-6 text-[15px] text-slate-300 leading-relaxed mb-6">
          <p>
            <strong className="text-white">Outposts</strong> are located in each region. After visited and claimed via activation of the flag pole, they can be fast traveled to via the map.
          </p>
          <p>
            At an outpost, the player can use the cabin to rest, which changes the time in-game and the locker ("cache") can be used to purchase equipment and access storage. Outposts are also where the player may retrieve the <span className="text-blue-400 hover:underline cursor-pointer">Saber 4x4</span>.
          </p>
          <p>
            <span className="text-blue-400 hover:underline cursor-pointer">Tents</span> function as mobile outposts.
          </p>
          <p>
            Each map has its own outpost design.
          </p>
        </div>

        {/* --- TOC & SIDEBAR IMAGE ROW --- */}
        <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Sidebar Image - Moved here */}
            <div className="bg-slate-900 border border-slate-700 rounded-sm overflow-hidden shadow-lg h-fit">
                <div className="bg-slate-800 font-bold text-center text-white border-b border-slate-700 text-lg flex items-center justify-center" style={{ height: '46.5px' }}>
                    Outposts
                </div>
                <div className="relative bg-slate-900" style={{ width: '268.4px', height: '276.43px' }}>
                    <div className="flex items-center justify-center text-slate-500 w-full h-full">
                        <img src={OutpostsImage} alt="Outposts" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>

            {/* Table of Contents */}
            <div className="inline-block min-w-[300px] bg-slate-900 border border-slate-700 rounded-sm p-0">
                <div className="flex justify-between items-center p-2 border-b border-slate-700 bg-slate-800">
                <div className="flex items-center gap-2 font-bold text-white text-sm">
                    <div className="flex flex-col gap-[2px]">
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                    </div>
                    Contents
                </div>
                <button 
                    onClick={() => setIsTocOpen(!isTocOpen)}
                    className="text-blue-400 text-xs cursor-pointer hover:underline"
                >
                    [{isTocOpen ? 'hide' : 'show'}]
                </button>
                </div>
                {isTocOpen && (
                <ul className="p-3 space-y-1 text-sm text-blue-300 font-medium">
                    {reservesData.map((r, i) => (
                    <li key={r.id}>
                        <a href={`#${r.id}`} onClick={(e) => scrollToSection(e, r.id)} className="hover:text-white hover:underline flex gap-2">
                        <span className="text-slate-500 font-mono">{i + 1}.</span> {r.title}
                        </a>
                    </li>
                    ))}
                </ul>
                )}
            </div>
        </div>
      </div>

      {/* --- RESERVE SECTIONS --- */}
      <div className="w-full px-6 space-y-12">
        {reservesData.map((reserve) => (
          <div key={reserve.id} id={reserve.id} className="scroll-mt-8">
             <div className="flex items-center gap-2 mb-4 group cursor-pointer w-fit">
                <h2 className="text-2xl font-bold text-white">{reserve.title}</h2>
                <span className="text-xs text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity">🔗</span>
             </div>
             
             {reserve.description && (
               <p className="text-slate-300 mb-6 text-[15px] leading-relaxed">
                 {reserve.description}
               </p>
             )}

             <div className="flex flex-wrap gap-[10px]">
                {reserve.images.map((img, idx) => (
                  <div key={idx} className="wikia-gallery-item" style={{ width: '187px' }}>
                    <div className="thumb" style={{ height: '106px' }}>
                        <div className="gallery-image-wrapper accent" style={{ position: 'relative', height: '104px', width: '185px' }}>
                            <a className="image lightbox" style={{ height: '104px', width: '185px', display: 'inline-block', position: 'relative', verticalAlign: 'bottom', overflow: 'hidden' }}>
                                <img 
                                    style={{ transform: 'scale(1)', transition: 'transform 0.3s ease-in-out' }} 
                                    src={img.src} 
                                    title={img.label} 
                                    className="thumbimage w-full h-full object-cover" 
                                    alt={img.label} 
                                    height="104" 
                                    width="185" 
                                />
                                <div style={{ position: 'absolute', bottom: '0px', right: '0px', width: '100%', height: '100%' }}>
                                    <div className="gallery-icon-container view-image absolute bottom-1 right-1">
                                        <div className="icon-container view-image" aria-label="view image">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="16" height="16" fill="white">
                                                <path d="M11 15h-.586L3 7.586V7h8v8zm-8 0v-4.586L7.586 15H3zm9-10a1 1 0 011 1v10a1 1 0 01-1 1H2a1 1 0 01-1-1V6a1 1 0 011-1h10zm4-4a1 1 0 011 1v10a1 1 0 11-2 0V3H6a1 1 0 110-2h10z" fillRule="evenodd"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="lightbox-caption text-xs text-slate-300" style={{ width: '185px' }}>{img.label}</div>
                  </div>
                ))}
             </div>
          </div>
        ))}
      </div>

    </div>
  );
}
