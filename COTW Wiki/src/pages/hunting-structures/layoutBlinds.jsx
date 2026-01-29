import React from 'react';
import LayoutBlindsImg from '../../assets/LayoutBlinds.webp';
import LayoutBlindIngameImg from '../../assets/Layout_blind_ingame.webp';
import LayoutBlindUseImg from '../../assets/Layout_blind_use.webp';
import WaterLayoutBlindsImg from '../../assets/WaterLayoutBlinds.webp';

export default function LayoutBlindsPage() {
  return (
    <div className="w-full max-w-6xl mx-auto p-6 text-blue-100 bg-slate-900 min-h-screen font-sans">
      
      {/* --- HEADER --- */}
      <div className="flex items-center justify-between mb-2">
         <div className="text-xs text-blue-400 uppercase tracking-widest font-bold">
            Equipment / Portable Structures
         </div>
         <div className="text-xs text-blue-300 flex gap-2">
         </div>
      </div>

      <div className="border-b border-slate-600 mb-8 pb-2">
        <h1 className="text-4xl font-light text-white">Layout Blinds</h1>
      </div>

      <div className="animate-fade-in space-y-16">
        
        {/* =========================================
            SECTION 1: Standard Layout Blind (Sidebar Style)
           ========================================= */}
        <div className="clearfix">
          
          {/* INFO CARD: Incognito Deluxe Layout Blind (Floated Right) */}
          <div className="w-full lg:w-80 mb-6 lg:mb-4 lg:ml-8 lg:float-right bg-slate-800 border border-slate-600 rounded-sm overflow-hidden shadow-lg">
            <div className="bg-slate-900 p-3 font-bold text-center border-b border-slate-600 text-white">
              Incognito Deluxe Layout Blind
            </div>
            
            <div className="p-4 bg-gradient-to-b from-slate-700/30 to-slate-900 flex justify-center items-center min-h-[180px]">
               <img src={LayoutBlindsImg} alt="Layout Blind" className="max-w-full drop-shadow-2xl" />
            </div>

            <div className="bg-slate-900 px-3 py-1 text-sm font-bold border-y border-slate-600 text-white">
              General
            </div>
            <div className="p-3 text-sm grid grid-cols-2 gap-y-2">
              <span className="font-bold text-slate-300">Value</span>
              <span className="text-right">16000</span>
              <span className="font-bold text-slate-300">Weight</span>
              <span className="text-right">3</span>
            </div>
          </div>

          {/* CONTENT */}
          <div>
            <blockquote className="border-l-4 border-slate-600 pl-4 italic mb-6 text-slate-400">
              "The ultimate blind for bird hunting in pastures and fields. Once deployed, it provides excellent visibility concealment for hunters looking to get the jump on fowl." <br/>
              <span className="text-xs not-italic">— In-Game Description</span>
            </blockquote>

            <p className="mb-4 text-slate-300 leading-relaxed">
              <strong>Layout Blinds</strong> are portable <span className="text-blue-400 cursor-pointer hover:underline">hunting structures</span> that allow the player to deploy custom <span className="text-blue-400 cursor-pointer hover:underline">visual</span> and <span className="text-blue-400 cursor-pointer hover:underline">olfactory cover</span>.
            </p>

            <p className="mb-6 text-slate-300 leading-relaxed">
              Layout blinds are part of the <span className="text-blue-400 cursor-pointer hover:underline">Wild Goose Chase Gear DLC</span>, which must be purchased for 3.99 $/€.
            </p>

            {/* Gallery Images */}
            <div className="flex overflow-x-auto pb-4">
              <div className="shrink-0 w-[352px] mr-5">
                <div className="h-[176px] bg-slate-800 border border-slate-700 rounded overflow-hidden mb-1">
                   <img src={LayoutBlindIngameImg} alt="Ingame perspective" className="w-full h-full object-cover" />
                </div>
                <div className="text-xs text-slate-400 font-bold">Ingame perspective</div>
              </div>
              
              <div className="shrink-0 w-[352px]">
                <div className="h-[176px] bg-slate-800 border border-slate-700 rounded overflow-hidden mb-1">
                   <img src={LayoutBlindUseImg} alt="Inside view" className="w-full h-full object-cover" />
                </div>
                <div className="text-xs text-slate-400 font-bold">Inside</div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================
            SECTION 2: Water Layout Blind (Bottom Card Style)
           ========================================= */}
        <div>
          {/* CONTENT */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
              Water Layout Blind 
            </h2>
            <hr className="border-slate-700 mb-6"/>

            <blockquote className="border-l-4 border-slate-600 pl-4 italic mb-6 text-slate-400">
              "The ultimate blind for hunting ducks in lakes and wetlands. This floating layout blind can be deployed on water. It provides excellent visibility concealment for hunters looking to get the jump on waterfowl." <br/>
              <span className="text-xs not-italic">— In-Game Description</span>
            </blockquote>

            <p className="text-slate-300 leading-relaxed mb-8">
              <strong>Water Layout Blind</strong> is a variant that allow the player to deploy custom visual and olfactory cover over water. It is a part of the <span className="text-blue-400 cursor-pointer hover:underline">Revontuli Coast DLC</span>.
            </p>
          </div>

          {/* INFO CARD: Moved to the bottom of the section */}
          <div className="w-full max-w-sm bg-slate-800 border border-slate-600 rounded-sm overflow-hidden shadow-lg">
            <div className="bg-slate-900 p-3 font-bold text-center border-b border-slate-600 text-white">
              Incognito Deluxe Water Layout Blind
            </div>
            
            <div className="p-4 bg-gradient-to-b from-slate-700/30 to-slate-900 flex justify-center items-center min-h-[180px]">
               <img src={WaterLayoutBlindsImg} alt="Water Layout Blind" className="max-w-full drop-shadow-2xl" />
            </div>

            <div className="bg-slate-900 px-3 py-1 text-sm font-bold border-y border-slate-600 text-white">
              General
            </div>
            <div className="p-3 text-sm grid grid-cols-2 gap-y-2">
              <span className="font-bold text-slate-300">Value</span>
              <span className="text-right">16000</span>
              <span className="font-bold text-slate-300">Weight</span>
              <span className="text-right">3</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}