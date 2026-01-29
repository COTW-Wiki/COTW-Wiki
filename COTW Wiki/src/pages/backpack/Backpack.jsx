import React, { useState } from 'react';
import backpackData from '../../data/backpack';

export default function BackpacksPage() {
  const [activeTab, setActiveTab] = useState('trailscout');
  const [activeColor, setActiveColor] = useState('Evergreen');

  // Helper to get current backpack data
  const currentPack = backpackData.find(b => b.id === activeTab);
  
  // Helper to get the image of the currently selected color for the sidebar
  const currentImage = currentPack.variants.find(v => v.color === activeColor)?.img || currentPack.variants[0].img;

  return (
    <div className="w-full max-w-6xl mx-auto p-6 text-blue-100 bg-slate-900 min-h-screen font-sans">
      
      {/* --- HEADER SECTION --- */}
      <div className="mb-8">
        <h1 className="text-4xl font-light mb-4 text-white">Backpacks</h1>
        <p className="mb-4 text-slate-300 leading-relaxed">
          <strong className="text-white">Backpacks</strong> are the only way to increase the carrying capacity of the hunter. They are available in three different sizes: small, medium and large. Whilst backpacks are useful to carry more equipment, they also increase <span className="text-blue-400">visibility</span> and <span className="text-blue-400">noise</span>, dependent on their respective size.
        </p>
        
        <p className="mb-4 text-slate-300">All backpacks are available in three different color variants:</p>
        
        <ol className="list-decimal list-inside space-y-1 text-slate-300 ml-2">
          <li><strong>Evergreen</strong> – Comes in the evergreen shade to become one with your surroundings</li>
          <li><strong>Glacier</strong> – Comes in the glacier shade to put the cool back in hunting</li>
          <li><strong>Blaze</strong> – Comes in the blaze shade to shine bright like the sun</li>
        </ol>
      </div>

      {/* --- TABS --- */}
      <div className="flex border-b border-slate-600 mb-6">
        {backpackData.map((pack) => (
          <button
            key={pack.id}
            onClick={() => {
              setActiveTab(pack.id);
              setActiveColor('Evergreen'); // Reset color when switching tabs
            }}
            className={`px-6 py-3 font-bold text-sm transition-colors border-b-2 ${
              activeTab === pack.id 
                ? 'border-blue-500 text-blue-400' 
                : 'border-transparent text-slate-400 hover:text-slate-200 hover:border-slate-500'
            }`}
          >
            {pack.name}
          </button>
        ))}
      </div>

      {/* --- ACTIVE CONTENT --- */}
      <div className="animate-fade-in">
        
        {/* Title */}
        <div className="flex items-center gap-2 mb-6">
          <h2 className="text-2xl font-bold text-white">
            {currentPack.name} ({currentPack.subtitle})
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* LEFT COLUMN: Description & Variants Grid */}
          <div className="flex-1">
            <p className="italic text-slate-300 mb-8 text-lg leading-relaxed">
              {currentPack.description}
            </p>

            <div className="grid grid-cols-3 gap-2">
              {currentPack.variants.map((variant) => (
                <div key={variant.color} className="bg-slate-800/50 p-2 rounded border border-slate-700">
                  <div className="bg-slate-900/50 mb-2 flex items-center justify-center rounded overflow-hidden">
                    {/* Replace src with variant.img */}
                    <img src={variant.img} alt={`${currentPack.name} ${variant.color}`} className="w-full h-auto max-w-[176px] object-contain" />
                  </div>
                  <div className="text-sm font-bold text-white">{variant.color}</div>
                  <div className="text-xs text-slate-400">{variant.requirement}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: Info Card (Sidebar) */}
          <div className="w-full lg:w-80 shrink-0">
            <div className="bg-slate-800 border border-slate-600 rounded-sm overflow-hidden">
              {/* Card Header */}
              <div className="bg-slate-900 p-3 font-bold text-center border-b border-slate-600">
                {currentPack.name}
              </div>

              {/* Color Toggles (Mini Tabs) */}
              <div className="flex bg-slate-700/50 text-xs">
                {['Evergreen', 'Glacier', 'Blaze'].map((color) => (
                  <button 
                    key={color}
                    onClick={() => setActiveColor(color)}
                    className={`flex-1 py-2 text-center transition-colors ${
                      activeColor === color 
                        ? 'bg-blue-600/20 text-blue-300 border-b-2 border-blue-500' 
                        : 'text-slate-400 hover:bg-slate-700'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>

              {/* Main Preview Image */}
              <div className="p-4 bg-gradient-to-b from-slate-700/30 to-slate-900 flex justify-center items-center min-h-[200px]">
                 <img src={currentImage} alt="Backpack Preview" className="max-w-full drop-shadow-2xl" />
              </div>

              {/* Stats Table: General */}
              <div className="bg-slate-900 px-3 py-1 text-sm font-bold border-y border-slate-600 mt-0">
                General
              </div>
              <div className="p-3 text-sm grid grid-cols-2 gap-y-2 border-b border-slate-600">
                <span className="font-bold text-slate-300">Value</span>
                <span className="text-right">{currentPack.stats.value}</span>
                
                <span className="font-bold text-slate-300">Weight</span>
                <span className="text-right">{currentPack.stats.weight}</span>
              </div>

              {/* Stats Table: Specific */}
              <div className="bg-slate-900 px-3 py-1 text-sm font-bold border-b border-slate-600 flex justify-between items-center">
                <span>Specific</span>
                <span className="text-[10px]">▲</span>
              </div>
              <div className="p-3 text-sm grid grid-cols-2 gap-y-3">
                <span className="font-bold text-slate-300">Additional Carrying Capacity</span>
                <span className="text-right">{currentPack.stats.capacity}</span>
                
                <span className="font-bold text-slate-300">Increased Noise</span>
                <span className="text-right">{currentPack.stats.noise}</span>
                
                <span className="font-bold text-slate-300">Increased Visibility</span>
                <span className="text-right">{currentPack.stats.visibility}</span>
              </div>

            </div>
          </div>

        </div>
      </div>

    </div>
  );
}