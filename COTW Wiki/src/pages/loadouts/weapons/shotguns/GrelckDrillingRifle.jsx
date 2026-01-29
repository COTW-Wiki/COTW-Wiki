import React, { useState } from 'react';
import GrelckClassic from '../../../../assets/GrelckDrillingRifleClassic.webp';
import GrelckCarbon from '../../../../assets/GrelckDrillingRifleCarbonFiber.webp';
import GrelckSelect from '../../../../assets/GrelckDrillingRifleSelect.webp';
import ShotgunDiagram from '../../../../assets/Shotgun_diagram_2020.webp';
import WeaponsTable from '../../../../components/WeaponsTable';


// --- Main App Component ---
export default function App() {
  const [isTocOpen, setIsTocOpen] = useState(true);
  const [activeVariant, setActiveVariant] = useState('Classic');

  // Image URLs
  const GrelckImg = GrelckClassic;
  const RifleDiagram = ShotgunDiagram;
  
  // Using the main image as a placeholder for gallery items
  const GrelckStanding = GrelckImg;
  const GrelckCrouching = GrelckImg;
  const GrelckLying = GrelckImg;
  const GrelckIronSight = GrelckImg;

  // Data for Variants Slider
  const variants = [
    { 
      name: "Classic", 
      image: GrelckClassic,
      desc: "The Grelck Drilling Rifle Classic is a unique shotgun that has an additional rifle barrel, making it the only combination gun of the game. It sports a standard side-by-side double-barrel design for 16 gauge shells and a third barrel for a high-powered rifle round."
    },
    { 
      name: "Carbon Fiber", 
      image: GrelckCarbon,
      desc: "Grelck Drilling Rifle Carbon Fiber is a variant that features a modern polymer body, and a black barrel and receiver."
    },
    { 
      name: "Select", 
      image: GrelckSelect,
      desc: "Grelck Drilling Rifle Select is an alternate style aiming to look like a premium version. This includes a traditional wood body, additional inlay work, and a chromed barrel."
    }
  ];

  // Data for Ammo Table
  const ammoData = [
    { name: "16 GA Birdshot", pen: 0, exp: 0, class: "1", range: "25m", price: 180 },
    { name: "16 GA Buckshot", pen: 5, exp: 0, class: "2-4", range: "25m", price: 530 },
    { name: "16 GA Slug", pen: 37, exp: 16, class: "4-7", range: "50m", price: 880 },
    { name: "9.3x74R Soft Point", pen: 20, exp: 53, class: "5-9", range: "150m", price: 610 },
    { name: "9.3x74R Polymer-Tip", pen: 40, exp: 12, class: "5-9", range: "150m", price: 880 },
  ];

  // Data for Sights List
  const sightsData = [
    "Falcon 3-9x44 Drilling Scope"
  ];

  return (
    <div className="min-h-screen text-gray-700 p-6 md:p-12 font-sans tracking-tight bg-white">
       {/* Add Google Font link dynamically */}
      <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
      
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <header className="flex flex-col md:flex-row md:items-center justify-between border-b border-gray-200 pb-4 mb-6">
          <h1 className="text-5xl font-bold text-green-800 mb-4 md:mb-0">
            Grelck Drilling Rifle
          </h1>

        </header>

        {/* Main Content Layout */}
        <div className="block">
            
            {/* Right Floated Infobox with Slider */}
            <div className="float-right w-72 ml-6 mb-4 bg-white border border-gray-200 shadow-xl font-sans">
                {/* Infobox Title */}
                <div className="bg-green-800 text-white text-center font-bold py-2 border-b border-green-900 tracking-wide text-lg">
                    Grelck Drilling Rifle
                </div>

                {/* Variant Slider / Tabs */}
                <div className="flex overflow-x-auto whitespace-nowrap bg-gray-100 border-b border-gray-200 scrollbar-hide">
                  {variants.map((variant) => (
                    <button
                      key={variant.name}
                      onClick={() => setActiveVariant(variant.name)}
                      className={`px-4 py-2 text-xs font-bold transition-colors uppercase flex-shrink-0 ${
                        activeVariant === variant.name 
                          ? "text-green-800 border-b-2 border-green-800" 
                          : "text-gray-500 hover:text-green-800"
                      }`}
                    >
                      {variant.name}
                    </button>
                  ))}
                </div>
                
                {/* Image Area */}
                <div className="p-4 flex justify-center bg-gray-50 relative min-h-[160px] items-center">
                    <img 
                        src={variants.find(v => v.name === activeVariant).image} 
                        alt={activeVariant} 
                        className="object-contain transition-opacity duration-300"
                        style={{ width: '268.4px', height: '134.2px' }}
                        onError={(e) => {e.target.src = GrelckImg}}
                    />
                </div>

                {/* General Information Header */}
                <div className="bg-green-800 text-white text-center font-bold py-1 border-y border-green-900 tracking-wide text-sm">
                    General Information
                </div>

                {/* General Information Data */}
                <div className="text-sm bg-white">
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2">
                        <div className="font-bold text-gray-700">Value</div>
                        <div className="text-gray-600">0</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2 bg-gray-100">
                        <div className="font-bold text-gray-700">Weight</div>
                        <div className="text-gray-600">5</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2">
                        <div className="font-bold text-gray-700">Score</div>
                        <div className="text-gray-600">0</div>
                    </div>
                </div>

                {/* Statistics Header */}
                <div className="bg-green-800 text-white text-center font-bold py-1 border-y border-green-900 tracking-wide text-sm">
                    Statistics
                </div>

                {/* Statistics Data */}
                <div className="text-sm bg-white">
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2">
                        <div className="font-bold text-gray-700">Accuracy</div>
                        <div className="text-gray-600">33</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2 bg-gray-100">
                        <div className="font-bold text-gray-700">Recoil</div>
                        <div className="text-gray-600">82</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2">
                        <div className="font-bold text-gray-700">Reload</div>
                        <div className="text-gray-600">10</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2 bg-gray-100">
                        <div className="font-bold text-gray-700">Hipshot</div>
                        <div className="text-gray-600">95</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2">
                        <div className="font-bold text-gray-700">Magazine</div>
                        <div className="text-gray-600">3</div>
                    </div>
                </div>
            </div>

            {/* Intro Quote */}
            <blockquote className="mb-6 border-l-4 border-green-800 pl-4 italic text-gray-600 font-sans text-sm">
                <p className="mb-2">"Versatile and elegant, this three-barreled combination gun sports twin side-by-side 16 gauge shotgun barrels atop a single rifle barrel chambered for the powerful 9.3x74R big game cartridge. If you're hunting waterfowl and happen to stumble upon a red deer, this gun has you covered."</p>
                <cite>— In-Game Description</cite>
            </blockquote>

            {/* Main Description */}
            <div className="mb-8 text-gray-700 font-sans text-[16px] leading-relaxed">
                <p>
                    The <strong className="text-green-800">Grelck Drilling Rifle Classic</strong> is a unique shotgun that has an additional rifle barrel, making it the only combination gun of the game. It sports a standard side-by-side double-barrel design for 16 gauge shells and a third barrel for a high-powered rifle round. Capable of hunting any class of game by switching ammo types, it is one of the most versatile weapons available for hunters. The term "Drilling" is a descriptive term used for combination guns and comes from the German expression for "triplet", indicating that the gun has three barrels.
                </p>
                <p className="mt-4">
                    Switching ammo-types can be done by holding the reload button. The switching ability can be used for hunting large groups of deer by opening with a rifle shot, then quickly switching to buckshot or slugs to catch a few more kills. The gun is listed in the "shotgun" category in the game; however, when using the rifle barrel, it is treated as a rifle. Therefore, it is one of only 2 weapons in the game that can grant two different types of weapon score points (the other one being the Mangiafico 410/45 Colt) : When using the 16 gauge shotgun ammunition, one receives shotgun score points and when using the 9.3x74R cartridge one receives rifle score points.
                </p>
                <p className="mt-4">
                    This weapon is available as part of the <a href="#" className="text-green-800 hover:underline">Weapon Pack 2</a> DLC.
                </p>
            </div>

            {/* Table of Contents */}
            <div className="mb-8 inline-block bg-gray-50 border border-gray-200 p-4 min-w-[250px] shadow-sm rounded-lg">
                <div className="flex justify-between items-center border-b border-gray-200 pb-2 mb-2">
                    <span className="font-bold text-gray-800 text-sm">Contents</span>
                    <button onClick={() => setIsTocOpen(!isTocOpen)} className="text-green-800 text-xs hover:underline">[{isTocOpen ? 'hide' : 'show'}]</button>
                </div>
                {isTocOpen && (
                    <ol className="list-decimal list-inside text-green-800 text-sm space-y-1 font-sans">
                        <li><a href="#ammo" className="hover:text-green-600 hover:underline">Ammo</a></li>
                        <li><a href="#sights" className="hover:text-green-600 hover:underline">Sights</a></li>
                        <li><a href="#variants" className="hover:text-green-600 hover:underline">Variants</a></li>
                        <li><a href="#trivia" className="hover:text-green-600 hover:underline">Trivia</a></li>
                        <li><a href="#comparison" className="hover:text-green-600 hover:underline">Comparison to other shotguns</a></li>
                    </ol>
                )}
            </div>

            {/* Sections */}
            <div className="space-y-12 clear-both">
                
                {/* Ammo Section */}
                <div id="ammo">
                    <div className="flex items-center space-x-2 border-b border-gray-200 pb-2 mb-4">
                        <h2 className="text-2xl font-bold text-gray-800">1. Ammo</h2>
                        <a href="#" className="text-green-800 hover:text-green-600"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                    </div>
                    <p className="text-gray-700 text-[16px] mb-4">The Grelck Drilling Rifle uses both 16 Gauge shotgun shells and 9.3x74R rifle ammunition:</p>
                    
                    <div className="bg-white border border-gray-200 text-sm md:text-base font-sans overflow-x-auto shadow-sm sm:rounded-lg">
                         <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-green-800 border-b-2 border-green-900 text-white font-bold">
                                    <th className="p-3">Ammo</th>
                                    <th className="p-3">Penetration</th>
                                    <th className="p-3">Expansion</th>
                                    <th className="p-3">Class</th>
                                    <th className="p-3">Range</th>
                                    <th className="p-3">Price</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-700 divide-y divide-gray-200">
                                {ammoData.map((item, idx) => (
                                    <tr key={idx} className="hover:bg-gray-50">
                                        <td className="p-3 text-green-800 hover:underline cursor-pointer font-medium">{item.name}</td>
                                        <td className="p-3">{item.pen}</td>
                                        <td className="p-3">{item.exp}</td>
                                        <td className="p-3">{item.class}</td>
                                        <td className="p-3">{item.range}</td>
                                        <td className="p-3">{item.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Sights Section */}
                <div id="sights">
                    <div className="flex items-center space-x-2 border-b border-gray-200 pb-2 mb-4">
                        <h2 className="text-2xl font-bold text-gray-800">2. Sights</h2>
                        <a href="#" className="text-green-800 hover:text-green-600"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                    </div>
                    <p className="text-gray-700 text-[16px] mb-4">The following sights can be equipped on the Grelck Drilling Rifle:</p>
                    
                    <ul className="list-disc list-inside space-y-1 ml-4 text-green-800 text-lg">
                        {sightsData.map((sight, idx) => (
                            <li key={idx}><a href="#" className="hover:underline">{sight}</a></li>
                        ))}
                    </ul>
                </div>

                {/* Variants Section */}
                <div id="variants">
                    <div className="flex items-center space-x-2 border-b border-gray-200 pb-2 mb-4">
                        <h2 className="text-2xl font-bold text-gray-800">3. Variants</h2>
                        <a href="#" className="text-green-800 hover:text-green-600"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                    </div>
                    <div className="text-gray-700 font-sans text-[16px] leading-relaxed space-y-4">
                        <p>
                            Grelck Drilling Rifle Carbon Fiber is a variant that features a modern polymer body, and a black barrel and receiver.
                        </p>
                        <p>
                            Grelck Drilling Rifle Select is an alternate style aiming to look like a premium version. This includes a traditional wood body, additional inlay work, and a chromed barrel.
                        </p>
                    </div>
                </div>



                {/* Trivia */}
                <div id="trivia">
                    <div className="flex items-center space-x-2 border-b border-gray-200 pb-2 mb-4">
                        <h2 className="text-2xl font-bold text-gray-800">4. Trivia</h2>
                        <a href="#" className="text-green-800 hover:text-green-600"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                    </div>
                    <p className="text-gray-700 font-sans text-[16px]">
                        The Grelck Drilling Rifle is modeled after its real-life counterpart of the JP Sauer and Sohn Model 3000.
                    </p>
                    <p className="text-gray-700 font-sans text-[16px] mt-4">
                        The Grelck Appears to be based off the M30 Luftwaffe Drilling With the side by side shotgun with the rifle round underneath layout and the 9.3x74R Rifle round, however the M30 Drilling has its shotgun barrels chambered in 12 Guage rather than 16 gauge as depicted in the game.
                    </p>
                    <p className="text-gray-700 font-sans text-[16px] mt-4">
                        Switching ammo-types can be done by holding the reload button. The switching ability can be used for hunting large groups of deer by opening with a rifle shot, then quickly switching to buckshot or slugs to catch a few more kills. The gun is listed in the "shotgun" category in the game; however, when using the rifle barrel, it is treated as a rifle. Therefore, it is one of only 2 weapons in the game that can grant two different types of weapon score points (the other one being the Mangiafico 410/45 Colt) : When using the 16 gauge shotgun ammunition, one receives shotgun score points and when using the 9.3x74R cartridge one receives rifle score points.
                    </p>
                </div>



                 {/* Comparison Placeholder */}
                <div id="comparison">
                    <div className="flex items-center space-x-2 border-b border-gray-200 pb-2 mb-4">
                        <h2 className="text-2xl font-bold text-gray-800">5. Comparison to other shotguns</h2>
                        <a href="#" className="text-green-800 hover:text-green-600"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                    </div>
                    <div className="relative group">
                        <img 
                            src={RifleDiagram} 
                            alt="Shotgun Comparison Chart" 
                            className="border border-gray-300 shadow-md block opacity-90 hover:opacity-100 transition-opacity"
                            style={{ width: '400px', height: '200px' }}
                        />
                         <div className="absolute bottom-2 right-2 bg-gray-900/60 p-1 rounded hover:bg-gray-900/80 cursor-pointer">
                             <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </div>
                    </div>
                </div>

                <WeaponsTable />

            </div>

        </div>

        <div className="h-32"></div>
      </div>
    </div>
  );
}