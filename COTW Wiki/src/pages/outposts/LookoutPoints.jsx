import React from 'react';

// --- IMAGES ---
import hirschfeldenTower from '../../assets/Hirschfelden_Lookout_Point.webp';
import hirschfeldenTop from '../../assets/Hirschfelden_Lookout_Point_Top.webp';
import laytonTower from '../../assets/Layton_Lake_Lookout_Point.webp';
import laytonTop from '../../assets/Layton_Lake_Lookout_Point_Top.webp';
import laytonInterior from '../../assets/Layton_Lake_Lookout_Point_Interior.webp';
import medvedTower from '../../assets/Medved_Taiga_Lookout_Point.webp';
import medvedTop from '../../assets/Medved_Taiga_Lookout_Point_Top.webp';
import medvedRoof from '../../assets/Medved_Taiga_Lookout_Point_Roof.webp';
import vurhongaTower from '../../assets/Vurhonga_Savanna_Lookout_Point.webp';
import vurhongaTop from '../../assets/Vurhonga_Lookout_Point_top.webp';
import lookoutMap from '../../assets/Lookout_points.webp';

// --- DATA ---
const lookoutData = [
  {
    reserve: "Hirschfelden Hunting Reserve",
    images: [
      { caption: "Tower", src: hirschfeldenTower },
      { caption: "Top", src: hirschfeldenTop },
    ]
  },
  {
    reserve: "Layton Lake District",
    images: [
      { caption: "Tower", src: laytonTower },
      { caption: "Top", src: laytonTop },
      { caption: "Top - Interior", src: laytonInterior },
    ]
  },
  {
    reserve: "Medved-Taiga National Park",
    images: [
      { caption: "Tower", src: medvedTower },
      { caption: "Top - Interior", src: medvedTop },
      { caption: "Roof", src: medvedRoof },
    ]
  },
  {
    reserve: "Vurhonga Savanna Reserve",
    images: [
      { caption: "Tower", src: vurhongaTower },
      { caption: "Top", src: vurhongaTop },
    ]
  }
];

export default function LookoutPointsPage() {
  return (
    <div className="w-full max-w-6xl mx-auto p-8 text-stone-100 bg-stone-900 min-h-screen font-sans">
      
      {/* --- HEADER --- */}
      <div className="flex justify-between items-start border-b border-stone-700 pb-4 mb-8">
        <h1 className="text-4xl font-light text-white">Lookout Points</h1>
        <div className="flex items-center gap-4 text-xs font-bold text-green-300">
           {/* Placeholder for header actions */}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 mb-12">
        
        {/* --- LEFT CONTENT: DESCRIPTION --- */}
        <div className="flex-1 space-y-6 text-[15px] text-stone-300 leading-relaxed">
          <p>
            <strong className="text-white">Lookout Points</strong> can be found throughout the reserve. Visiting and activating them at their information board (via clicking E/X) will reveal the surrounding area on the map and also will mark points of interest in close proximity. It will also provide a small amount of <span className="text-green-400 hover:underline cursor-pointer">XP</span> and sometimes a short audio commentary of the <span className="text-green-400 hover:underline cursor-pointer">Wardens</span> of the respective <span className="text-green-400 hover:underline cursor-pointer">reserve</span>.
          </p>
          
          <p>
            Lookout points are indicated via a small binoculars symbol on the map.
          </p>

          <p>
            After the successful activation of all lookout points present in the reserve, the entire map will be revealed.
          </p>

          <p className="mt-8">
            Most maps have their own design for lookout points:
          </p>
        </div>

        {/* --- RIGHT SIDEBAR: MAP IMAGE --- */}
        <div className="w-full lg:w-80 shrink-0">
           <div className="bg-stone-800 border border-stone-700 rounded-sm overflow-hidden shadow-lg h-fit">
              <div className="bg-stone-900 p-2 font-bold text-center text-white border-b border-stone-700 text-lg">
                Lookout Points
              </div>
              <div className="relative">
                 <div className="w-[268.4px] h-[277.43px] bg-stone-800 flex items-center justify-center text-stone-500 relative mx-auto">
                    <img 
                      src={lookoutMap} 
                      alt="Map with Lookout Points" 
                      className="w-full h-full object-cover" 
                    />
                 </div>
                 <div className="absolute bottom-2 right-2 bg-black/60 p-1 rounded">
                    <span className="text-white text-xs">🖼️</span>
                 </div>
              </div>
           </div>
        </div>
      </div>

      {/* --- TABLE SECTION --- */}
      <div className="border border-stone-700 rounded-sm overflow-hidden">
         {/* Table Header */}
         <div className="flex bg-green-900 text-white font-bold border-b border-stone-700 text-sm">
            <div className="w-1/3 p-3 border-r border-stone-700">Reserve</div>
            <div className="flex-1 p-3">Design</div>
         </div>

         {/* Table Body */}
         <div className="text-sm">
            {lookoutData.map((item, index) => (
               <div key={index} className="flex border-b border-stone-700/50 hover:bg-green-900/20 transition-colors">
                  {/* Column 1: Reserve Name */}
                  <div className="w-1/3 p-4 text-green-400 font-medium border-r border-stone-700 bg-stone-900/30 flex items-center">
                     <span className="hover:underline cursor-pointer">{item.reserve}</span>
                  </div>

                  {/* Column 2: Design Images */}
                  <div className="flex-1 p-4">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {item.images.map((img, imgIndex) => (
                           <div key={imgIndex} className="group cursor-pointer">
                              <div className="w-[220px] h-[124px] bg-stone-800 border border-stone-700 mb-1 relative overflow-hidden">
                                 <img 
                                    src={img.src} 
                                    alt={img.caption} 
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" 
                                 />
                              </div>
                              <div className="text-xs text-white font-bold">{img.caption}</div>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </div>

    </div>
  );
}