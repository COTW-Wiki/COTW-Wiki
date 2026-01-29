import React from 'react';
import SpottingImage from '../../assets/Spotting.webp';

export default function App() {
  return (
    <div className="min-h-screen text-stone-100 p-6 md:p-12 font-sans tracking-tight bg-stone-900" style={{ fontFamily: '"Roboto Condensed", sans-serif' }}>
       {/* Add Google Font link dynamically */}
      <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
      
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <header className="flex flex-col md:flex-row md:items-center justify-between border-b border-stone-700 pb-4 mb-6">
          <h1 className="text-4xl md:text-5xl font-light mb-4 md:mb-0">
            Spotting
          </h1>

        </header>

        {/* Main Content Layout */}
        <div className="block">
            
            {/* Right Floated Image Card */}
            <div className="float-right w-72 ml-6 mb-4 bg-stone-800 border border-stone-700 shadow-xl">
                {/* Card Title */}
                <div className="bg-stone-900 text-white text-center font-bold py-2 border-b border-stone-700 font-sans tracking-wide">
                    Spotting
                </div>
                
                {/* Image Container */}
                <div className="relative group">
                    <img 
                        src={SpottingImage} 
                        alt="Spotting Example" 
                        className="w-[268.4px] h-[275.9px] object-cover block opacity-90 hover:opacity-100 transition-opacity"
                    />
                    {/* Gallery Icon overlay */}
                    <div className="absolute bottom-2 right-2 bg-black/60 p-1 rounded hover:bg-black/80 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Intro Text */}
            <div className="mb-8 text-stone-300 font-sans text-[16px] leading-relaxed">
                <p className="mb-4">
                    <a href="#" className="text-green-400 hover:underline">Binoculars and rangefinders</a> can be used to spot animals from afar. When equipped and in aim mode (hold RMB/LT), an animal can be spotted via pressing E/the X-Button/or the triangle button when directly looking at it.
                </p>
                <p className="mb-4">
                    Spotting an animal will reveal information about its gender and <a href="#" className="text-green-400 hover:underline">difficulty</a> and will highlight the animal for a short period of time (its contours can be seen through obstacles). If the animal is currently using a need zone will automatically mark the need zone on the map.
                </p>
                <p>
                    The amount of revealed information can be increased by <a href="#" className="text-green-400 hover:underline">Skills</a>.
                </p>
            </div>

            {/* Skills Section */}
            <div id="skills" className="mb-12 clear-both">
                <div className="flex items-center space-x-2 border-b border-stone-700 pb-2 mb-4">
                    <h2 className="text-2xl font-bold text-white">Skills</h2>
                    <a href="#" className="text-green-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                    </a>
                </div>

                <div className="bg-stone-800 border border-stone-700 text-sm font-sans">
                    <div className="grid grid-cols-4 gap-4 border-b-2 border-stone-700 p-2 font-bold text-white bg-stone-900">
                        <div className="col-span-1">Skill</div>
                        <div className="col-span-3">Description</div>
                    </div>
                    
                    {/* Spotting Knowledge */}
                    <div className="grid grid-cols-4 gap-4 border-b border-stone-700/50 p-2 items-start hover:bg-stone-700/10">
                        <div className="col-span-1 text-green-400 italic">Spotting Knowledge</div>
                        <div className="col-span-3 text-stone-300 space-y-2">
                            <p>1.Reveals information about the approximate health of the animal.</p>
                            <p>2. Reveals information about the approximate trophy rating of the animal.</p>
                            <p>3. Reveals information about how aware the animal is of nearby threats.</p>
                        </div>
                    </div>

                    {/* Tag */}
                    <div className="grid grid-cols-4 gap-4 border-b border-stone-700/50 p-2 items-start hover:bg-stone-700/10">
                        <div className="col-span-1 text-green-400 italic">Tag</div>
                        <div className="col-span-3 text-stone-300 space-y-2">
                            <p>1.Increases the duration of the traced outline on an animal after spotting it.</p>
                            <p>2. Unlocks the ability to add a spotting outline on up to 3 animals simultaneously.</p>
                        </div>
                    </div>

                    {/* Sight Spotting */}
                    <div className="grid grid-cols-4 gap-4 p-2 items-start hover:bg-stone-700/10">
                        <div className="col-span-1 text-green-400 italic">Sight Spotting</div>
                        <div className="col-span-3 text-stone-300">
                            Unlocks the ability to spot animals while in aim mode with weapons. This means that you do not have to switch to binoculars or a rangefinder device to spot an animal.
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