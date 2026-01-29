import React, { useState } from 'react';
import WaterfowlBlindsMarsh from '../../assets/WaterfowlBlindMarsh.webp';
import WaterfowlBlindConifer from '../../assets/WaterfowlBlindConifer.webp';
import WaterfowlBlindIngameImg from '../../assets/Waterfowl_blind.webp';
import WaterfowlBlindTimber from '../../assets/WaterfowlBlindTimber.webp';

export default function WaterfowlBlindsPage() {
  const [activeColor, setActiveColor] = useState('Conifer');

  // Logic to swap images based on color selection (if you have the specific images)
  // For now, we default to the main sidebar image for all.
  const getImageForColor = (color) => {
    switch (color) {
      case 'Marsh': return WaterfowlBlindsMarsh;
      case 'Timber': return WaterfowlBlindTimber;
      case 'Conifer': return WaterfowlBlindConifer;
      default: return WaterfowlBlindConifer;
    }
  };

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
        <h1 className="text-4xl font-light text-white">Waterfowl Blinds</h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 animate-fade-in">
        
        {/* =========================================
            LEFT COLUMN: Content
           ========================================= */}
        <div className="flex-1 space-y-8">
          
          <blockquote className="border-l-4 border-slate-600 pl-4 italic text-slate-400">
            "The ultimate in transportable camouflage concealment. Designed for waterfowl hunting, this blind provides excellent visual reduction while providing an unrestricted view of the sky." <br/>
            <span className="text-xs not-italic">— In-Game Description</span>
          </blockquote>

          <p className="text-slate-300 leading-relaxed">
            <strong>Waterfowl blinds</strong> are portable <span className="text-blue-400 cursor-pointer hover:underline">hunting structures</span> that allow the player to deploy custom visual cover. They are designed for the hunt of waterborne birds.
          </p>

          <p className="text-slate-300 leading-relaxed">
            Waterfowl blinds are part of the <span className="text-blue-400 cursor-pointer hover:underline">Duck and Cover Pack DLC</span>, which must be purchased for 3.99 $/€.
          </p>

          {/* Ingame Perspective Section */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
              Ingame perspective
            </h2>
            <hr className="border-slate-700 mb-4"/>
            
            <div className="w-[260px]">
              <div className="bg-slate-800 border border-slate-700 rounded overflow-hidden mb-1 relative group cursor-pointer">
                 {/* Using the layout blind ingame image as a placeholder since it looks similar in context, 
                     PLEASE REPLACE 'Layout_blind_ingame.webp' with your actual Waterfowl Blind ingame screenshot if different */}
                 <img src={WaterfowlBlindIngameImg} alt="Ingame perspective" className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                 <div className="absolute bottom-1 right-1 bg-black/60 p-1 rounded">
                    <span className="text-white text-xs">🖼️</span>
                 </div>
              </div>
              <div className="text-xs text-slate-400 font-bold">Ingame perspective</div>
            </div>
          </div>

        </div>

        {/* =========================================
            RIGHT COLUMN: Sidebar Card
           ========================================= */}
        <div className="w-full lg:w-80 shrink-0">
          
          <div className="bg-slate-800 border border-slate-600 rounded-sm overflow-hidden shadow-lg">
            <div className="bg-slate-900 p-3 font-bold text-center border-b border-slate-600 text-white leading-tight">
              Incognito Deluxe <br/> Waterfowl Blinds
            </div>
            
            {/* Tabs */}
            <div className="flex bg-slate-700/50 text-xs font-bold border-b border-slate-600">
              {['Conifer', 'Marsh', 'Timber'].map((variant) => (
                <button 
                  key={variant}
                  onClick={() => setActiveColor(variant)}
                  className={`flex-1 py-2 text-center transition-colors ${
                    activeColor === variant 
                      ? 'bg-slate-800 text-blue-400 border-t-2 border-blue-500' 
                      : 'text-slate-400 hover:bg-slate-700 hover:text-slate-200'
                  }`}
                >
                  {variant}
                </button>
              ))}
            </div>

            {/* Main Image Area */}
            <div className="p-4 bg-gradient-to-b from-slate-700/30 to-slate-900 flex justify-center items-center min-h-[200px] relative">
               {/* NOTE: You haven't uploaded the specific 'WaterfowlBlind' standing tent image yet. 
                  I am using a placeholder src. Please upload the image and name it 'WaterfowlBlind_Sidebar.webp' 
                  or update the src below. 
               */}
               <img 
                 src={getImageForColor(activeColor)} 
                 alt={`Waterfowl Blind ${activeColor}`} 
                 className="max-w-full drop-shadow-2xl"
                 onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                 }} 
               />
               
               {/* Fallback box if image is missing */}
               <div className="hidden absolute inset-0 flex-col items-center justify-center text-slate-500 p-4 text-center">
                 <div className="border-2 border-dashed border-slate-600 rounded p-4 w-full h-full flex items-center justify-center">
                    <span>Image Missing<br/>(Upload WaterfowlBlind_Sidebar.webp)</span>
                 </div>
               </div>
            </div>

            <div className="bg-slate-900 px-3 py-1 text-sm font-bold border-y border-slate-600 text-white">
              General
            </div>
            <div className="p-3 text-sm grid grid-cols-2 gap-y-2">
              <span className="font-bold text-slate-300">Value</span>
              <span className="text-right">8000</span>
              
              <span className="font-bold text-slate-300">Weight</span>
              <span className="text-right">6</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}