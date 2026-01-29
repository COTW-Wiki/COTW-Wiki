import React, { useState } from 'react';
import TripodStandConifer from '../../assets/TripodStandConifer.webp';
import TripodStandTimber from '../../assets/TripodStandTimber.webp';
import TripodStandArctic from '../../assets/TripodStandArctic.webp';
import TripodStanding from '../../assets/Tripod.webp';

export default function TripodStandsPage() {
  const [activeColor, setActiveColor] = useState('Conifer');

  const getImageForColor = (color) => {
    switch (color) {
      case 'Conifer': return TripodStandConifer;
      case 'Timber': return TripodStandTimber;
      case 'Arctic': return TripodStandArctic;
      default: return TripodStandConifer;
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
        <h1 className="text-4xl font-light text-white">Tripod Stands</h1>
      </div>

      {/* Main Content Container - Vertical Stack */}
      <div className="animate-fade-in space-y-8">
        
        {/* 1. DESCRIPTION TEXT */}
        <div className="space-y-6">
          <p className="italic text-slate-300 leading-relaxed">
            Lightweight and easy to set up, this stand is made for the adaptable ambush hunter who's keen on discovering the strongest vantage points. Notable features include the ability to be deployed on flat ground, decreased visibility and significantly less hunting pressure created when downing animals.
          </p>

          <p className="text-slate-300 leading-relaxed">
            <strong>Tripod Stands</strong> are portable <span className="text-blue-400 cursor-pointer hover:underline">hunting structures</span> that allow the player to deploy custom hunting towers.
          </p>

          <p className="text-slate-300 leading-relaxed">
            Tripod stands are part of the <span className="text-blue-400 cursor-pointer hover:underline">Treestand and Tripod Pack DLC</span>, which must be purchased for 3.99 $/€.
          </p>

          <p className="text-slate-300 leading-relaxed">
            Tripod stands are limited to 32 per <span className="text-blue-400 cursor-pointer hover:underline">reserve</span>.
          </p>
        </div>

        {/* 2. STATS TABLE / CARD (Moved Below Text) */}
        <div className="w-full max-w-sm bg-slate-800 border border-slate-600 rounded-sm overflow-hidden shadow-lg">
          <div className="bg-slate-900 p-3 font-bold text-center border-b border-slate-600 text-white leading-tight">
            Elite Deployable Tripod <br/> Stand
          </div>
          
          {/* Tabs */}
          <div className="flex bg-slate-700/50 text-xs font-bold border-b border-slate-600">
            {['Conifer', 'Timber', 'Arctic'].map((variant) => (
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
              <img 
                src={getImageForColor(activeColor)} 
                alt={`Tripod Stand ${activeColor}`} 
                className="max-w-full drop-shadow-2xl"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }} 
              />
              
              <div className="hidden absolute inset-0 flex-col items-center justify-center text-slate-500 p-4 text-center">
                <div className="border-2 border-dashed border-slate-600 rounded p-4 w-full h-full flex items-center justify-center text-xs">
                  <span>Sidebar Image Missing<br/>(Tripod_Sidebar.webp)</span>
                </div>
              </div>
          </div>

          {/* Table Data */}
          <div className="bg-slate-900 px-3 py-1 text-sm font-bold border-y border-slate-600 text-white">
            General
          </div>
          <div className="p-3 text-sm grid grid-cols-2 gap-y-2">
            <span className="font-bold text-slate-300">Value</span>
            <span className="text-right">16000</span>
            
            <span className="font-bold text-slate-300">Weight</span>
            <span className="text-right">6</span>
          </div>
        </div>

        {/* 3. IMAGES SECTION */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
            Images
          </h2>
          <hr className="border-slate-700 mb-4"/>
          
          <div className="w-[260px]">
            <div className="aspect-video bg-slate-800 border border-slate-700 rounded overflow-hidden mb-1 relative group cursor-pointer">
                <img 
                  src={TripodStanding} 
                  alt="Standing Tripod" 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" 
                  onError={(e) => {
                    e.target.style.display = 'none'; 
                    e.target.parentNode.className += ' flex items-center justify-center text-slate-500 text-xs text-center p-2';
                    e.target.parentNode.innerText = 'Tripod Image Missing';
                  }}
                />
                <div className="absolute bottom-1 right-1 bg-black/60 p-1 rounded">
                  <span className="text-white text-xs">🖼️</span>
                </div>
            </div>
            <div className="text-xs text-slate-400 font-bold">Standing Tripod</div>
          </div>
        </div>

      </div>
    </div>
  );
}