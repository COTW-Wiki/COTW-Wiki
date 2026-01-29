import React from 'react';
import FullDrawImage from '../../../assets/Full_Draw.webp';

export default function App() {
  return (
    <div className="min-h-screen text-stone-100 p-6 md:p-12 font-sans tracking-tight bg-stone-900" style={{ fontFamily: '"Roboto Condensed", sans-serif' }}>
       {/* Add Google Font link dynamically */}
      <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
      
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="flex flex-col md:flex-row md:items-center justify-between border-b border-stone-700 pb-4 mb-6">
          <h1 className="text-4xl md:text-5xl font-light mb-4 md:mb-0">
            Full Draw
          </h1>
        </header>

        {/* Main Content Layout */}
        <div className="block">
            
            {/* Right Floated Infobox */}
            <div className="float-right w-[270px] min-h-[324.5px] ml-6 mb-4 bg-stone-800 border border-stone-700 shadow-xl font-sans">
                {/* Infobox Title */}
                <div className="bg-stone-900 text-white text-center font-bold py-2 border-b border-stone-700 tracking-wide">
                    Full Draw
                </div>
                
                {/* Image Area */}
                <div className="p-4 flex justify-center bg-stone-900">
                    <img 
                        src={FullDrawImage} 
                        alt="Full Draw Icon" 
                        className="w-[118px] h-[130px] object-contain"
                    />
                </div>

                {/* Infobox Data */}
                <div className="text-sm">
                    <div className="grid grid-cols-2 border-t border-stone-700/50">
                        <div className="p-2 font-bold text-stone-300 pl-4">Weapon</div>
                        <div className="p-2 text-stone-400">Bow</div>
                    </div>
                    <div className="grid grid-cols-2 border-t border-stone-700/50 bg-stone-800/50">
                        <div className="p-2 font-bold text-stone-300 pl-4">Tier</div>
                        <div className="p-2 text-stone-400">0</div>
                    </div>
                    <div className="grid grid-cols-2 border-t border-stone-700/50">
                        <div className="p-2 font-bold text-stone-300 pl-4">Levels</div>
                        <div className="p-2 text-stone-400">3</div>
                    </div>
                    <div className="grid grid-cols-2 border-t border-stone-700/50 bg-stone-800/50">
                        <div className="p-2 font-bold text-stone-300 pl-4">Kind</div>
                        <div className="p-2 text-stone-400">passive</div>
                    </div>
                    <div className="grid grid-cols-2 border-t border-stone-700/50">
                        <div className="p-2 font-bold text-stone-300 pl-4">Dependend on:</div>
                        <div className="p-2 text-stone-400">-</div>
                    </div>
                </div>
            </div>

            {/* Intro Text */}
            <div className="mb-8 text-stone-300 font-sans text-[16px] leading-relaxed">
                <p>
                    <strong className="text-stone-100">Full Draw</strong> is a tier 0 <a href="/perks" className="text-green-400 hover:underline">perk</a> for <a href="/weapons/bows" className="text-green-400 hover:underline">bows</a>. It increases the time a player can aim with a bow before fatigue sets in.
                </p>
            </div>

            {/* Levels Section */}
            <div className="clear-both">
                <div className="flex items-center space-x-2 border-b border-stone-700 pb-2 mb-4">
                    <h2 className="text-2xl font-bold text-stone-100">Levels</h2>
                    <a href="#" className="text-green-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                    </a>
                </div>

                <div className="bg-stone-800 border border-stone-700 text-sm md:text-base font-sans">
                    <div className="grid grid-cols-12 gap-4 border-b-2 border-stone-700 p-3 font-bold text-stone-100 bg-stone-900">
                        <div className="col-span-2">Level</div>
                        <div className="col-span-10">Description</div>
                    </div>
                    
                    <div className="grid grid-cols-12 gap-4 p-4 items-center hover:bg-stone-700/10 border-b border-stone-700/50">
                        <div className="col-span-2 font-bold text-stone-100 text-center">1</div>
                        <div className="col-span-10 text-stone-300 italic leading-relaxed">
                            Increases the time an arrow can be drawn in aim mode before fatigue sets in. Fatigue will increase aim wobble, followed by a disruption of aim mode. Each level unlocked will increase the effect.
                        </div>
                    </div>

                    <div className="grid grid-cols-12 gap-4 p-4 items-center hover:bg-stone-700/10 border-b border-stone-700/50">
                        <div className="col-span-2 font-bold text-stone-100 text-center">2</div>
                        <div className="col-span-10 text-stone-300 italic leading-relaxed">
                            {/* Empty in screenshot */}
                        </div>
                    </div>

                    <div className="grid grid-cols-12 gap-4 p-4 items-center hover:bg-stone-700/10">
                        <div className="col-span-2 font-bold text-stone-100 text-center">3</div>
                        <div className="col-span-10 text-stone-300 italic leading-relaxed">
                            {/* Empty in screenshot */}
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div className="h-32"></div>
      </div>
    </div>
  );
}