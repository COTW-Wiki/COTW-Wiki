import React from 'react';
import HuntingPressureImage from '../../assets/Hunting_pressure.webp';

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
            Hunting Pressure
          </h1>

          
        </header>

        {/* Main Content Layout */}
        <div className="block">
            
            {/* Right Floated Image Card */}
            <div className="float-right w-72 ml-6 mb-4 bg-stone-800 border border-stone-700 shadow-xl">
                {/* Card Title */}
                <div className="bg-stone-900 text-white text-center font-bold py-2 border-b border-stone-700 font-sans tracking-wide">
                    Hunting Pressure
                </div>
                
                {/* Image Container */}
                <div className="relative group">
                    <img 
                        src={HuntingPressureImage} 
                        alt="Hunting Pressure Map" 
                        className="w-[268.4px] h-[277.43px] object-cover block opacity-90 hover:opacity-100 transition-opacity"
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
            <div className="mb-8 text-stone-300 font-sans text-[16px] leading-relaxed space-y-4">
                <p>
                    <strong className="text-stone-100">Hunting Pressure</strong> is created when the player shoots an animal that eventually dies. Upon the animal dying, the hunting pressure will appear with its exact center in the location where the first shot hit the animal. As hunting pressure builds up in one area, the <a href="#" className="text-green-400 hover:underline">animals</a> will start to avoid this area. If hunting pressure builds up in one place high enough, the <a href="#" className="text-green-400 hover:underline">Need Zones</a> in the area will be removed. This simulates <a href="#" className="text-green-400 hover:underline">Animals</a> being too scared to feed, drink or rest in that area. There is a 0.25 multiplier if an animal is shot with a bow, or from <a href="#" className="text-green-400 hover:underline">Hunting Structures</a>. These multipliers are stackable. If four undiminished hunting pressure are stacked on <a href="#" className="text-green-400 hover:underline">Need Zones</a>, it will be deleted. There is a limited number of hunting pressures that can be on one map (10 is the max amount of hunting pressures).
                </p>
                <p>
                    Hunting pressure will disappear as it builds up elsewhere in the reserve. It is illustrated by a colored (grayish violet to glaring pink) field on the map. Different intensities of pressure can be distinguished based on the shade of purple of a particular area.
                </p>
                <p>
                    Due to the fact that the center of a new region of hunting pressure is the exact location where an animal was first injured, this feature can be used to find the blood trail that eventually leads to the downed animal.
                </p>
            </div>

        </div>

        <div className="h-32"></div>
      </div>
    </div>
  );
}