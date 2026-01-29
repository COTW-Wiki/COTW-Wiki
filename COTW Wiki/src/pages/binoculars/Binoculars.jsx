import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import VantageImage from '../../assets/Vantage8x42Binoculars.webp';
import VentureImage from '../../assets/Venture5x30Rangefinder.webp';
import ApexviewImage from '../../assets/Apexview7x42Binoculars.webp';
import GenZeroImage from '../../assets/GenZero8x50NightVisionRangefinderBinoculars.webp';

// --- DATA SECTION ---
const binocularsData = [
  {
    id: 'vantage',
    name: 'Vantage 8x42 Binoculars',
    shortName: 'Vantage 8x42',
    description: (
      <>
        <p className="mb-4 italic">
          Want a premium binoculars at an affordable price? These lightweight 8x42 pair provide all the features you'll need, with broadband multi-coated lenses and high quality roof prisms. They're 100% waterproof and fogproof too.
        </p>
        <p>
          The <strong>Vantage 8x42 Binoculars</strong> are the first binoculars the player can use. They are available right from the beginning of the game. They provide a maximal magnification of 8x42x, which can be approached gradually. Binoculars and rangefinders are the only items that can be used to <span className="text-blue-400 cursor-pointer hover:underline">spot animals</span> (until the player has skilled <span className="text-blue-400 cursor-pointer hover:underline">Sight Spotting</span>).
        </p>
      </>
    ),
    image: VantageImage, 
    stats: {
      value: "0",
      weight: "1",
      level: "0",
      magnification: "8 x 42"
    }
  },
  {
    id: 'venture',
    name: 'Venture 5x30 Rangefinder',
    shortName: 'Venture 5x30',
    description: (
      <>
        <p className="mb-4 italic">
          A compact, robust and waterproof rangefinder that provides accurate readings up to 1500 yards
        </p>
        <p>
          The <strong>Venture 5x30 Rangefinder</strong> is the first available rangefinder in the game. It provides a magnification of 5x (The 30 in the name refers to the objective lens diameter.) and shows the distance to the targeted spot.
        </p>
        <p className="mt-4">
          Binoculars and rangefinders are the only items that can be used to <span className="text-blue-400 cursor-pointer hover:underline">spot animals</span> (until the player has skilled <span className="text-blue-400 cursor-pointer hover:underline">Sight Spotting</span>).
        </p>
      </>
    ),
    image: VentureImage,
    stats: {
      value: "12000",
      weight: "1",
      level: "11",
      magnification: "5 x 30"
    }
  },
  {
    id: 'apexview',
    name: 'Apexview 7x42 Binoculars',
    shortName: 'Apexview 7x42',
    description: (
      <>
        <p className="mb-4 italic">
          With these lightweight binoculars, you'll get the best of both worlds: the superior field of view of binoculars coupled with accurate range information from a rangefinder. Long gone are the days where you have to constantly switch between the two!
        </p>
        <p>
          The <strong>Apexview 7x42 Binoculars</strong> are the crown jewel of binoculars. By combining the field of view of binoculars with the precise distance tracking of rangefinders they not only save time by avoiding constant switching between binoculars and rangefinder, they also save precious weight capacity.
        </p>
      </>
    ),
    image: ApexviewImage,
    stats: {
      value: "24000",
      weight: "1",
      level: "29",
      magnification: "7 x 42"
    }
  },
  {
    id: 'genzero',
    name: 'GenZero 8x50 Night Vision Rangefinder Binoculars',
    shortName: 'GenZero 8x50',
    description: (
      <>
        <blockquote className="border-l-4 border-slate-600 pl-4 italic mb-4 text-slate-400">
          "The state-of-the-art technology used in these rangefinder binoculars allows you to greatly increase the contrast of the environment while leaving depth perception and shapes unaltered. The green tint of the lenses further improves visibility in the dark, making these binoculars a fundamental ally when night hunting." <br/>
          <span className="text-xs not-italic">— In-Game Description</span>
        </blockquote>
        <p>
          The <strong>GenZero 8x50 Night Vision Rangefinder Binoculars</strong> is a set of <span className="text-blue-400">Binoculars</span>. These binoculars share the same night vision ability as the <span className="text-blue-400">GenZero 1-4x20 Night Vision Rifle Scope</span>, but with a much higher possible zoom. Much like the night vision scope, these are not practical during the day as there is no way to toggle the night vision mode. These also function as rangefinders.
        </p>
        <p className="mt-2">
          These binoculars are available as part of the <span className="text-blue-400">High-Tech Hunting Pack DLC</span>.
        </p>
      </>
    ),
    image: GenZeroImage,
    stats: {
      value: "0 (DLC)", 
      weight: "1",
      level: null, 
      magnification: null 
    }
  }
];

// --- COMPONENT SECTION ---
export default function BinocularsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || 'overview';

  const setActiveTab = (tab) => {
    setSearchParams({ tab });
  };

  // Helper to find the active item data
  const currentItem = binocularsData.find(b => b.id === activeTab);

  return (
    <div className="w-full max-w-6xl mx-auto p-6 text-blue-100 bg-slate-900 min-h-screen font-sans">
      
      {/* --- PAGE HEADER --- */}
      <div className="flex items-center justify-between mb-2">
         <div className="text-xs text-blue-400 uppercase tracking-widest font-bold">
            Equipment / Binoculars
         </div>
         <div className="text-xs text-blue-300 flex gap-2">
         </div>
      </div>

      {/* --- TAB NAVIGATION --- */}
      <div className="flex flex-wrap gap-1 border-b border-slate-600 mb-6">
        <button
          onClick={() => setActiveTab('overview')}
          className={`px-4 py-2 font-bold text-lg transition-colors border-b-2 ${
            activeTab === 'overview' 
              ? 'border-blue-500 text-white' 
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          Binoculars (Overview)
        </button>
        {binocularsData.map(bin => (
           <button
             key={bin.id}
             onClick={() => setActiveTab(bin.id)}
             className={`px-4 py-2 font-bold text-sm transition-colors border-b-2 ${
               activeTab === bin.id 
                 ? 'border-blue-500 text-blue-400' 
                 : 'border-transparent text-slate-400 hover:text-slate-200'
             }`}
           >
             {bin.shortName}
           </button>
        ))}
      </div>

      {/* --- VIEW 1: OVERVIEW PAGE --- */}
      {activeTab === 'overview' && (
        <div className="animate-fade-in space-y-8">
          <div>
             <h1 className="text-4xl font-light mb-4 text-white">Binoculars</h1>
             <p className="text-slate-300 leading-relaxed">
               <strong>Binoculars</strong> are used to magnify the surrounding of the hunter to gather more information. Their main purpose is to <span className="text-blue-400">spot animals</span>. The game contains three different binoculars: A simple binocular, a range finder and a combination of them.
             </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
              Function
            </h2>
            <hr className="border-slate-700 mb-4"/>
            <p className="text-slate-300 leading-relaxed">
              Binoculars have 2 distinct functions: The first is to serve as a tool to create an overview of the surrounding area by allowing to search and magnify specific spots. The second function is the range finding, which is crucial for appropriate hits over long distances. It's used to get the exact distance to a specific spot to adjust shooting height to counteract bullet ballistics.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
              Tips & Tricks
            </h2>
            <hr className="border-slate-700 mb-4"/>
            <p className="text-slate-300 leading-relaxed mb-4">
              If you can not afford or simply don't want to carry an additional rangefinder until the combined option is available (Apexview, unlocks at level 29) then this little trick will help you to find out the approximate range of your prey.
            </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              Simply spot the animal with your binoculars and open the map. There will be a marker at the position of your current target. Hover over the icon and read the distance displayed in the bottom right corner.
            </p>
            <p className="text-slate-300 leading-relaxed">
               Notice that only stationary targets will give you reliable results as the icon will be created on spot and does not move unless you mark the animal again.
            </p>
          </div>

          {/* Available Binoculars Grid */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
              Available Binoculars
            </h2>
            <hr className="border-slate-700 mb-6"/>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {binocularsData.map((bin) => (
                <div 
                  key={bin.id} 
                  onClick={() => setActiveTab(bin.id)}
                  className="group cursor-pointer bg-slate-800/50 border border-slate-700 hover:border-blue-500 transition-all"
                >
                  <div className="h-40 p-4 flex items-center justify-center bg-slate-900/50">
                    <img src={bin.image} alt={bin.name} className="max-w-full max-h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="p-3 text-sm font-bold text-center text-slate-300 group-hover:text-white">
                    {bin.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* --- VIEW 2: SPECIFIC ITEM DETAILS --- */}
      {activeTab !== 'overview' && currentItem && (
        <div className="animate-fade-in">
           <h1 className="text-3xl font-light mb-6 text-white">{currentItem.name}</h1>
           
           <div className="flex flex-col lg:flex-row gap-8">
             
             {/* Left Column: Description */}
             <div className="flex-1 text-slate-300 leading-relaxed space-y-4">
               {currentItem.description}
             </div>

             {/* Right Column: Info Card */}
             <div className="w-full lg:w-80 shrink-0">
                <div className="bg-slate-800 border border-slate-600 rounded-sm overflow-hidden shadow-lg">
                  {/* Card Header */}
                  <div className="bg-slate-900 p-3 font-bold text-center border-b border-slate-600 text-white">
                    {currentItem.name}
                  </div>
                  
                  {/* Image */}
                  <div className="p-4 bg-gradient-to-b from-slate-700/30 to-slate-900 flex justify-center items-center">
                     <img src={currentItem.image} alt={currentItem.name} className="max-w-full max-h-48 object-contain drop-shadow-2xl" />
                  </div>

                  {/* General Stats */}
                  <div className="bg-slate-900 px-3 py-1 text-sm font-bold border-y border-slate-600 text-white">
                    {activeTab === 'genzero' ? 'General Information' : 'General'}
                  </div>
                  <div className="p-3 text-sm grid grid-cols-2 gap-y-2 border-b border-slate-600">
                    
                    <span className="font-bold text-slate-300">
                      {activeTab === 'genzero' ? 'Price' : 'Value'}
                    </span>
                    <span className="text-right flex justify-end items-center gap-1">
                      {/* Only show H icon if it's not the GenZero DLC item */}
                      {currentItem.stats.value !== "0 (DLC)" && <span className="text-xs opacity-70">H</span>} 
                      {currentItem.stats.value}
                    </span>
                    
                    <span className="font-bold text-slate-300">Weight</span>
                    <span className="text-right">{currentItem.stats.weight}</span>

                    {/* Only show Level row if level data exists (GenZero doesn't have it in screenshot) */}
                    {currentItem.stats.level !== null && (
                      <>
                        <span className="font-bold text-slate-300">Level</span>
                        <span className="text-right">{currentItem.stats.level}</span>
                      </>
                    )}
                  </div>

                  {/* Specific Stats (Only if magnification exists) */}
                  {currentItem.stats.magnification && (
                    <>
                      <div className="bg-slate-900 px-3 py-1 text-sm font-bold border-b border-slate-600 text-white flex justify-between">
                        <span>Specific</span>
                        <span className="text-[10px]">▲</span>
                      </div>
                      <div className="p-3 text-sm grid grid-cols-2 gap-y-2">
                        <span className="font-bold text-slate-300">Magnification</span>
                        <span className="text-right">{currentItem.stats.magnification}</span>
                      </div>
                    </>
                  )}
                  
                </div>
             </div>
           </div>
        </div>
      )}

    </div>
  );
}