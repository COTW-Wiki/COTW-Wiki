import React from 'react';
import StartleCallImage from '../../../assets/Startle_Call.webp';

export default function StartleCall() {
  return (
    <div className="min-h-screen bg-stone-900 text-stone-100 p-6 md:p-12 font-sans tracking-tight">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="flex flex-col md:flex-row md:items-center justify-between border-b border-stone-700 pb-4 mb-6">
          <h1 className="text-4xl md:text-5xl font-light text-stone-100 mb-4 md:mb-0">
            Startle Call
          </h1>
        </header>

        {/* Main Content Layout */}
        <div className="block">
            
            {/* Right Floated Infobox */}
            <div className="float-right w-[270px] ml-6 mb-4 bg-stone-800 border border-stone-700 shadow-xl font-sans">
                {/* Infobox Title */}
                <div className="bg-stone-700 text-stone-100 text-center font-bold py-2 border-b border-stone-600 tracking-wide">
                    Startle Call
                </div>
                
                {/* Image Area */}
                <div className="p-4 flex justify-center bg-stone-900">
                    <img 
                        src={StartleCallImage} 
                        alt="Startle Call Icon" 
                        className="w-[118px] h-[130px] object-contain"
                    />
                </div>

                {/* Infobox Data */}
                <div className="text-sm">
                    <div className="grid grid-cols-2 border-t border-stone-700">
                        <div className="p-2 font-bold text-stone-300 pl-4">Tree</div>
                        <div className="p-2 text-stone-400">Stalker</div>
                    </div>
                    <div className="grid grid-cols-2 border-t border-stone-700 bg-stone-800/50">
                        <div className="p-2 font-bold text-stone-300 pl-4">Tier</div>
                        <div className="p-2 text-stone-400">4</div>
                    </div>
                    <div className="grid grid-cols-2 border-t border-stone-700">
                        <div className="p-2 font-bold text-stone-300 pl-4">Levels</div>
                        <div className="p-2 text-stone-400">1</div>
                    </div>
                    <div className="grid grid-cols-2 border-t border-stone-700 bg-stone-800/50">
                        <div className="p-2 font-bold text-stone-300 pl-4">Kind</div>
                        <div className="p-2 text-stone-400">active</div>
                    </div>
                </div>
            </div>

            {/* Intro Text */}
            <div className="mb-8 text-stone-300 font-sans text-[16px] leading-relaxed">
                <p>
                    <strong className="text-stone-100">Startle Call</strong> is a tier 4 <a href="/hunter/skills" className="text-green-400 hover:underline">skill</a> of the stalker skill tree. It unlocks the ability to confuse animals for short time to hinder the animal from fleeing.
                </p>
            </div>

            {/* Levels Section */}
            <div className="clear-both">
                <div className="flex items-center space-x-2 border-b border-stone-700 pb-2 mb-4">
                    <h2 className="text-2xl font-bold text-stone-100">Levels</h2>
                </div>

                <div className="bg-stone-800 border border-stone-700 text-sm md:text-base font-sans">
                    <div className="grid grid-cols-12 gap-4 border-b border-stone-700 p-3 font-bold text-stone-100 bg-stone-700">
                        <div className="col-span-2">Level</div>
                        <div className="col-span-10">Description</div>
                    </div>
                    
                    <div className="grid grid-cols-12 gap-4 p-4 items-center hover:bg-stone-700/50">
                        <div className="col-span-2 font-bold text-stone-100 text-center">1</div>
                        <div className="col-span-10 text-stone-300 italic leading-relaxed">
                            <p className="mb-2">Unlocks the ability to stop animals in their tracks for a short time by making an unexpected noise. Perfect for when your're ready to take your shot.</p>
                            <p>After a short duration, the animal will realise that something is wrong and flee. The more difficult the animal, the faster the realization.</p>
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