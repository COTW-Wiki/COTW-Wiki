import React, { useState } from 'react';

import hirschfeldenTower from '../../assets/Hirschfelden_hunting_tower.webp';
import laytonTower from '../../assets/Layton_lake_hunting_tower.webp';
import medvedTower from '../../assets/Medved_hunting_tower.webp';
import vurhongaTower from '../../assets/Vurhonga_hunting_tower.webp';

import hirschfeldenBlind from '../../assets/Hirschfelden_groundblind.webp';
import laytonBlind from '../../assets/Layton_lake_groundblind.webp';
import medvedBlind from '../../assets/Medved_groundblind.webp';
import vurhongaBlind from '../../assets/Vurhonga_groundblind.webp';
import huntingStructureImg from '../../assets/Hunting_structures.webp';

// --- DATA ---
const huntingTowersData = [
  { reserve: "Hirschfelden Hunting Reserve", placeholder: "Wood Tower in Autumn Forest", image: hirschfeldenTower },
  { reserve: "Layton Lake District", placeholder: "Wood Tower on Green Hill", image: laytonTower },
  { reserve: "Medved-Taiga National Park", placeholder: "Dark Wood Tower in Snow", image: medvedTower },
  { reserve: "Vurhonga Savanna Reserve", placeholder: "Tall Tower in Savanna", image: vurhongaTower },
];

const groundBlindsData = [
  { reserve: "Hirschfelden Hunting Reserve", placeholder: "Wood Blind in Autumn", image: hirschfeldenBlind },
  { reserve: "Layton Lake District", placeholder: "Wood Blind in Forest", image: laytonBlind },
  { reserve: "Medved-Taiga National Park", placeholder: "Green Blind in Snow", image: medvedBlind },
  { reserve: "Vurhonga Savanna Reserve", placeholder: "Tall Green Blind in Savanna", image: vurhongaBlind },
];

// --- HELPER COMPONENT: STRUCTURE TABLE ---
const StructureTable = ({ data }) => (
  <div className="border border-stone-700 rounded-sm overflow-hidden mb-12">
    {/* Header */}
    <div className="flex bg-stone-800 text-white font-bold border-b border-stone-700 text-sm">
      <div className="w-1/3 p-3 border-r border-stone-700">Reserve</div>
      <div className="flex-1 p-3">Design</div>
    </div>

    {/* Body */}
    <div className="text-sm">
      {data.map((item, index) => (
        <div key={index} className="flex border-b border-stone-700/50 hover:bg-green-900/20 transition-colors">
          <div className="w-1/3 p-4 text-green-400 font-medium border-r border-stone-700 bg-stone-900/30 flex items-center">
             <span className="hover:underline cursor-pointer">{item.reserve}</span>
          </div>
          <div className="flex-1 p-2">
             <div className="w-[220px] h-[124px] bg-stone-800 border border-stone-700 relative overflow-hidden group cursor-pointer">
                {item.image ? (
                  <img src={item.image} alt={item.reserve} className="w-full h-full object-cover group-hover:opacity-80 transition-opacity" />
                ) : (
                  /* Placeholder Image */
                  <div className="w-full h-full bg-stone-800 flex items-center justify-center text-xs text-stone-500 text-center px-2 group-hover:opacity-80 transition-opacity">
                     {item.placeholder}
                  </div>
                )}
             </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default function HuntingStructuresPage() {
  const [isTocOpen, setIsTocOpen] = useState(true);

  return (
    <div className="w-full max-w-6xl mx-auto p-8 text-stone-100 bg-stone-900 min-h-screen font-sans">
      
      {/* --- HEADER --- */}
      <div className="flex justify-between items-start border-b border-stone-700 pb-4 mb-8">
        <h1 className="text-4xl font-light text-white">Hunting Structures</h1>
      </div>

      {/* --- TOP SECTION --- */}
      <div className="flex flex-col lg:flex-row gap-8 mb-12">
        
        {/* Left Content */}
        <div className="flex-1 space-y-6 text-[15px] text-stone-300 leading-relaxed">
          <p>
            <strong className="text-white">Hunting Structures</strong> can be found and built at specific locations out in the reserve. There are two types of hunting structures: ground blinds and hunting towers.
          </p>
          <p>
            Hunting structures help conceal the player from animals' senses and are placed at opportune locations with open areas and wide fields of view were they allow to survey a large area for game, making them ideal for lure hunting.
          </p>
          <p>
            These structures can protect you from animal attacks. Even animals like <span className="text-green-400 hover:underline cursor-pointer">Cape Buffalo</span> and <span className="text-green-400 hover:underline cursor-pointer">Water Buffalo</span> won't deal damage to a player inside the structure.
          </p>
          <p>
            Each map has its own design for hunting structures:
          </p>

          {/* Table of Contents */}
          <div className="inline-block mt-4 min-w-[300px] bg-stone-800 border border-stone-700 rounded-sm p-0">
            <div className="flex justify-between items-center p-2 border-b border-stone-700 bg-stone-800">
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
                 className="text-green-400 text-xs cursor-pointer hover:underline"
               >
                 [{isTocOpen ? 'hide' : 'show'}]
               </button>
            </div>
            {isTocOpen && (
              <ul className="p-3 space-y-1 text-sm text-green-300 font-medium">
                <li><a href="#towers" className="hover:text-white hover:underline flex gap-2"><span className="text-stone-500 font-mono">1.</span> Hunting Towers</a></li>
                <li><a href="#blinds" className="hover:text-white hover:underline flex gap-2"><span className="text-stone-500 font-mono">2.</span> Groundblinds</a></li>
                <li><a href="#layton" className="hover:text-white hover:underline flex gap-2"><span className="text-stone-500 font-mono">3.</span> Layton Lake District (68 Hunting Structures)</a></li>
                <li><a href="#hirsch" className="hover:text-white hover:underline flex gap-2"><span className="text-stone-500 font-mono">4.</span> Hirschfelden (93 Hunting Structures)</a></li>
              </ul>
            )}
          </div>
        </div>

        {/* Right Sidebar Image */}
        <div className="w-full lg:w-[340px] shrink-0">
           <div className="bg-stone-800 border border-stone-700 rounded-sm overflow-hidden shadow-lg h-fit">
              <div className="bg-stone-900 p-3 font-bold text-center text-white border-b border-stone-700 text-lg">
                Hunting Structures
              </div>
              <div className="relative flex justify-center bg-stone-800">
                 <img 
                   src={huntingStructureImg} 
                   alt="Hunting Structure" 
                   className="w-[268.4px] h-[277.43px] object-cover"
                 />
                 {/* Overlay Tag from screenshot */}
                 <div className="absolute top-4 right-4 bg-gray-200 text-black text-[10px] px-1 font-bold border border-gray-400">
                   HUNTING STRUCTURE UNLOCKED
                 </div>
                 
                 {/* Icon Overlay (white circle with tower) */}
                 <div className="absolute bottom-4 left-4 bg-white/20 rounded-full p-1 border border-white">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                 </div>
              </div>
           </div>
        </div>
      </div>

      {/* --- HUNTING TOWERS SECTION --- */}
      <div id="towers" className="scroll-mt-8">
        <div className="flex items-center gap-2 mb-4 group cursor-pointer w-fit">
          <h2 className="text-2xl font-bold text-white">Hunting Towers</h2>
          <span className="text-xs text-green-400 opacity-0 group-hover:opacity-100 transition-opacity">🔗</span>
        </div>
        <StructureTable data={huntingTowersData} />
      </div>

      {/* --- GROUNDBLINDS SECTION --- */}
      <div id="blinds" className="scroll-mt-8">
        <div className="flex items-center gap-2 mb-4 group cursor-pointer w-fit">
          <h2 className="text-2xl font-bold text-white">Groundblinds</h2>
          <span className="text-xs text-green-400 opacity-0 group-hover:opacity-100 transition-opacity">🔗</span>
        </div>
        <StructureTable data={groundBlindsData} />
      </div>

      {/* --- SPECIFIC RESERVE COUNTS --- */}
      
      <div id="layton" className="scroll-mt-8 mb-12">
        <div className="flex items-center gap-2 mb-2 group cursor-pointer w-fit">
           <h2 className="text-3xl font-bold text-white">Layton Lake District (68 Hunting Structures)</h2>
           <span className="text-xs text-green-400 opacity-0 group-hover:opacity-100 transition-opacity">🔗</span>
        </div>
        <hr className="border-stone-700 mb-4"/>
        <p className="text-stone-300">From a steam discussion. Might be more.</p>
      </div>

      <div id="hirsch" className="scroll-mt-8 mb-20">
        <div className="flex items-center gap-2 mb-2 group cursor-pointer w-fit">
           <h2 className="text-3xl font-bold text-white">Hirschfelden (93 Hunting Structures)</h2>
           <span className="text-xs text-green-400 opacity-0 group-hover:opacity-100 transition-opacity">🔗</span>
        </div>
        <hr className="border-stone-700 mb-4"/>
        <p className="text-stone-300">From a steam discussion. Might be more.</p>
      </div>
    </div>
  );
}
