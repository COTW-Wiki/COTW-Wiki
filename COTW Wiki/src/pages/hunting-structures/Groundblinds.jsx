import React, { useState } from 'react';
import GroundblindsTimber from '../../assets/GroundblindsTimber.webp';
import GroundblindsConifer from '../../assets/GroundblindsConifer.webp';

// --- DATA ---
const groundblindsData = {
  title: "Groundblinds",
  description: (
    <>
      <p className="mb-4 italic text-slate-300">
        The ultimate in transportable camouflage concealment and weather protection. Once deployed, it provides excellent visibility concealment and unrestricted shooting angles in almost any direction.
      </p>
      <p className="mb-4 text-slate-300">
        Notable features include the ability to be deployed almost anywhere, decreased visibility and room for up to 2 hunters within.
      </p>
      <p className="mb-4 text-slate-300">
        <strong>Groundblinds</strong> are portable <span className="text-blue-400 cursor-pointer hover:underline">hunting structures</span> that allow the player to deploy custom <span className="text-blue-400 cursor-pointer hover:underline">visual cover</span>.
      </p>
      <p className="mb-4 text-slate-300">
        Groundblinds are part of the <span className="text-blue-400 cursor-pointer hover:underline">Tents & Groundblinds DLC</span>, which must be purchased for 4.29 $/€.
      </p>
      <p className="mb-4 text-slate-300">
        Blinds are limited to 16 per <span className="text-blue-400 cursor-pointer hover:underline">reserve</span>.
      </p>
    </>
  ),
  items: [
    {
      id: 'incognito',
      name: 'Incognito Deluxe Ground Blind',
      variants: [
        { name: 'Timber', image: GroundblindsTimber },
        { name: 'Conifer', image: GroundblindsConifer }
      ],
      stats: {
        value: "8000",
        weight: "6"
      }
    }
  ]
};

export default function GroundblindsPage() {
  const [activeColor, setActiveColor] = useState('Timber');
  
  // In a full app, you might select between different blinds, but here we focus on the one in the screenshot
  const currentItem = groundblindsData.items[0];
  const currentImage = currentItem.variants.find(v => v.name === activeColor)?.image;

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

      {/* --- TITLE --- */}
      <div className="border-b border-slate-600 mb-6 pb-2">
        <h1 className="text-4xl font-light text-white flex items-center gap-2">
          {groundblindsData.title}
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 animate-fade-in">
        
        {/* --- LEFT CONTENT (Description & Known Issues) --- */}
        <div className="flex-1">
          
          {/* Main Description */}
          <div className="leading-relaxed mb-8">
            {groundblindsData.description}
          </div>

          {/* Known Issues Section */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
              Known issues
            </h2>
            <hr className="border-slate-700 mb-4"/>
            
            <p className="text-slate-300 mb-4">
              Due to changes in the maps to enable outposts to have an interior, the tents and groundblinds tend to dissapear. If this bug occurs, following message will be shown:
            </p>
            
            <div className="bg-slate-800/50 border-l-4 border-slate-500 p-4 mb-4 italic text-slate-400">
              A beaver felled a tree on one of your portable structures. It has been removed an returned to your storage.
            </div>

            <p className="text-slate-300">
              Groundblinds are less likely to be effected by this bug, because it's not possible to fast travel to them.
            </p>
          </div>
        </div>

        {/* --- RIGHT SIDEBAR (Item Card) --- */}
        <div className="w-full lg:w-80 shrink-0">
          <div className="bg-slate-800 border border-slate-600 rounded-sm overflow-hidden shadow-lg sticky top-4">
            
            {/* Card Header */}
            <div className="bg-slate-900 p-3 font-bold text-center border-b border-slate-600 text-white">
              {currentItem.name}
            </div>

            {/* Color Tabs */}
            <div className="flex bg-slate-700/50 text-xs font-bold">
              {currentItem.variants.map((variant) => (
                <button 
                  key={variant.name}
                  onClick={() => setActiveColor(variant.name)}
                  className={`flex-1 py-2 text-center transition-colors ${
                    activeColor === variant.name 
                      ? 'bg-slate-800 text-blue-400 border-t-2 border-blue-500' 
                      : 'text-slate-400 hover:bg-slate-700 hover:text-slate-200'
                  }`}
                >
                  {variant.name}
                </button>
              ))}
            </div>

            {/* Image Area */}
            <div className="p-6 bg-gradient-to-b from-slate-700/30 to-slate-900 flex justify-center items-center min-h-[200px]">
                {/* Placeholder Image Logic */}
                <div className="relative w-full h-48 flex items-center justify-center">
                    <img 
                        src={currentImage} 
                        alt={`${currentItem.name} ${activeColor}`} 
                        className="max-w-full max-h-full object-contain drop-shadow-2xl z-10"
                        onError={(e) => {
                            e.target.style.display = 'none'; 
                            e.target.nextSibling.style.display = 'flex';
                        }} 
                    />
                    {/* Fallback if image missing */}
                    <div className="hidden absolute inset-0 bg-slate-800 items-center justify-center text-slate-500 text-xs text-center border border-dashed border-slate-600 rounded">
                        {currentItem.name}<br/>({activeColor})
                    </div>
                </div>
            </div>

            {/* Stats: General */}
            <div className="bg-slate-900 px-3 py-1 text-sm font-bold border-y border-slate-600 text-white">
              General
            </div>
            <div className="p-3 text-sm grid grid-cols-2 gap-y-2">
              <span className="font-bold text-slate-300">Value</span>
              <span className="text-right">{currentItem.stats.value}</span>
              
              <span className="font-bold text-slate-300">Weight</span>
              <span className="text-right">{currentItem.stats.weight}</span>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}