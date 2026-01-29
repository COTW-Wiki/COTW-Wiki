import React, { useState } from 'react';
import TreestandConifer from '../../assets/TreestandConifer.webp';
import TreestandTimber from '../../assets/TreestandTimber.webp';
import TreestandArctic from '../../assets/TreestandArctic.webp';
import TreestandFromTop from '../../assets/Treestand_2.webp';
import TreestandFromBelow from '../../assets/Treestand_1.webp';

export default function TreestandsPage() {
  const [activeColor, setActiveColor] = useState('Conifer');

  const getImageForColor = (color) => {
    switch (color) {
      case 'Conifer': return TreestandConifer;
      case 'Timber': return TreestandTimber;
      case 'Arctic': return TreestandArctic;
      default: return TreestandConifer;
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
        <h1 className="text-4xl font-light text-white">Treestands</h1>
      </div>

      {/* --- TOP SECTION: Description + Sidebar --- */}
      <div className="flex flex-col lg:flex-row gap-8 animate-fade-in mb-12">
        
        {/* LEFT COLUMN: Description Text */}
        <div className="flex-1 space-y-8">
          <p className="italic text-slate-300 leading-relaxed">
            Upgrade your favorite hunting locations or make new ones with the deployable treestand. If you're looking for a better view of an overgrown forest or better cover at the edge of a treeline, the treestand creates ample opportunities for ambush hunters. When the treestand is equipped, compatible trees will be highlighted. Target the highlighted areas to deploy the stand. To dismantle a tree stand, look at it as though you're about to enter it, and press the 'reload' key.
          </p>

          <p className="italic text-slate-300 leading-relaxed">
            Notable features include the ability to be deployable on straight, sturdy trees, decreased visibility and significantly less hunting pressure created when downing animals.
          </p>

          <p className="text-slate-300 leading-relaxed">
            <strong>Treestands</strong> are portable <span className="text-blue-400 cursor-pointer hover:underline">hunting structures</span> that allow the player to deploy custom <span className="text-blue-400 cursor-pointer hover:underline">visual cover</span> on the stem of trees.
          </p>

          <p className="text-slate-300 leading-relaxed">
            Treestands are part of the <span className="text-blue-400 cursor-pointer hover:underline">Treestand and Tripod Pack DLC (List)</span>, which must be purchased for 3.99 $/€.
          </p>

          <p className="text-slate-300 leading-relaxed">
            Treestands are limited to 16 per <span className="text-blue-400 cursor-pointer hover:underline">reserve</span>.
          </p>
        </div>

        {/* RIGHT COLUMN: Sidebar Card */}
        <div className="w-full lg:w-80 shrink-0">
          <div className="bg-slate-800 border border-slate-600 rounded-sm overflow-hidden shadow-lg sticky top-4">
            <div className="bg-slate-900 p-3 font-bold text-center border-b border-slate-600 text-white">
              Incognito Deluxe Treestand
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
                 alt={`Treestand ${activeColor}`} 
                 className="max-w-full drop-shadow-2xl"
                 onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                 }} 
               />
               
               {/* Fallback box if image is missing */}
               <div className="hidden absolute inset-0 flex-col items-center justify-center text-slate-500 p-4 text-center">
                 <div className="border-2 border-dashed border-slate-600 rounded p-4 w-full h-full flex items-center justify-center text-xs">
                    <span>Sidebar Image<br/>(Treestand_Sidebar.webp)</span>
                 </div>
               </div>
            </div>

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
        </div>
      </div>

      {/* --- BOTTOM SECTION: Operation & Images --- */}
      <div className="animate-fade-in space-y-8">
        
        {/* Operation Text */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
            Operation
          </h2>
          <hr className="border-slate-700 mb-4"/>
          
          <p className="text-slate-300 leading-relaxed">
            <strong>PC:</strong> To place a tree stand, observe the surrounding trees for highlighted trunks. Approach the highlighted area and place with the left mouse key. To remove, simply look at the tree stand and hit "R".
          </p>
        </div>

        {/* Images Grid */}
        <div>
           <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
             Images
           </h3>
           <hr className="border-slate-700 mb-4"/>

           <div className="flex gap-4 overflow-x-auto pb-4">
             {/* Image 1: From Below */}
             <div className="shrink-0 w-[260px]">
               <div className="bg-slate-800 border border-slate-700 rounded overflow-hidden mb-1 relative min-h-[146px]">
                  <img 
                    src={TreestandFromBelow} 
                    alt="From below" 
                    className="w-full h-auto object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentNode.className += ' flex items-center justify-center text-slate-500 text-xs text-center p-2';
                      e.target.parentNode.innerText = 'Image: From Below';
                    }}
                  />
                  <div className="absolute bottom-1 right-1 bg-black/60 p-1 rounded">
                     <span className="text-white text-xs">🖼️</span>
                  </div>
               </div>
               <div className="text-xs text-slate-400 font-bold">From below</div>
             </div>

             {/* Image 2: From Top */}
             <div className="shrink-0 w-[260px]">
               <div className="bg-slate-800 border border-slate-700 rounded overflow-hidden mb-1 relative min-h-[146px]">
                  <img 
                    src={TreestandFromTop} 
                    alt="From the top" 
                    className="w-full h-auto object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentNode.className += ' flex items-center justify-center text-slate-500 text-xs text-center p-2';
                      e.target.parentNode.innerText = 'Image: From Top';
                    }}
                  />
                  <div className="absolute bottom-1 right-1 bg-black/60 p-1 rounded">
                     <span className="text-white text-xs">🖼️</span>
                  </div>
               </div>
               <div className="text-xs text-slate-400 font-bold">From the top</div>
             </div>
           </div>
        </div>

      </div>
    </div>
  );
}