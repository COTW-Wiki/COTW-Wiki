import React, { useState } from 'react';
import WeaponsTable from '../../../../components/WeaponsTable';
import Focoso from '../../../../assets/Focoso357.webp';
import HandgunsDiagram from '../../../../assets/Handgun_diagram_2020.webp';


// --- Main App Component ---
export default function App() {
  const [isTocOpen, setIsTocOpen] = useState(true);
  const [activeVariant, setActiveVariant] = useState('Standard');

  // Image URLs
  const FocosoImg = Focoso;
  const RifleDiagram = HandgunsDiagram;
  
  // Using the main image as a placeholder for gallery items
  const FocosoStanding = FocosoImg;
  const FocosoCrouching = FocosoImg;
  const FocosoLying = FocosoImg;
  const FocosoIronSight = FocosoImg;

  // Data for Variants Slider
  const variants = [
    { 
      name: "Standard", 
      image: FocosoImg,
      desc: "The standard variant featuring a blued steel finish."
    }
  ];

  // Data for Ammo Table
  const ammoData = [
    { name: ".357 Jacketed Hollow-Point", pen: 12, exp: 18, class: "2-6", range: "50m", price: 220 },
    { name: ".357 Flat Nose Hard-Cast", pen: 50, exp: 4, class: "2-6", range: "50m", price: 350 },
  ];

  // Data for Sights List
  const sightsData = [
    "Goshawk Redeye 2-4x20 Handgun Scope",
    "Hermes 3-7x33 Handgun-Shotgun Scope",
    "Red Raptor Reflex Sight",
    "Tru-Vision Tritium Sights"
  ];

  return (
    <div className="min-h-screen text-gray-900 p-6 md:p-12 font-sans tracking-tight bg-white">
      
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <header className="flex flex-col md:flex-row md:items-center justify-between border-b border-green-800/20 pb-4 mb-6">
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4 md:mb-0">
            Focoso 357
          </h1>

        </header>

        {/* Main Content Layout */}
        <div className="block">
            
            {/* Right Floated Infobox with Slider */}
            <div className="float-right w-72 ml-6 mb-4 bg-gray-50 border border-gray-200 shadow-md font-sans">
                {/* Infobox Title */}
                <div className="bg-green-800 text-white text-center font-bold py-2 border-b border-green-900 tracking-wide text-lg">
                    Focoso 357
                </div>

                {/* Image Area */}
                <div className="p-4 flex justify-center bg-white relative min-h-[160px] items-center">
                    <img 
                        src={FocosoImg} 
                        alt="Focoso 357" 
                        className="w-[268.4px] h-[134.2px] object-contain transition-opacity duration-300"
                    />
                </div>

                {/* General Information Header */}
                <div className="bg-green-800 text-white text-center font-bold py-1 border-y border-green-900 tracking-wide text-sm">
                    General Information
                </div>

                {/* General Information Data */}
                <div className="text-sm bg-gray-50">
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2">
                        <div className="font-bold text-gray-700">Value</div>
                        <div className="text-gray-900">0</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2 bg-white">
                        <div className="font-bold text-gray-700">Weight</div>
                        <div className="text-gray-900">1</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2">
                        <div className="font-bold text-gray-700">Score</div>
                        <div className="text-gray-900">0</div>
                    </div>
                </div>

                {/* Statistics Header */}
                <div className="bg-green-800 text-white text-center font-bold py-1 border-y border-green-900 tracking-wide text-sm">
                    Statistics
                </div>

                {/* Statistics Data */}
                <div className="text-sm bg-gray-50">
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2">
                        <div className="font-bold text-gray-700">Accuracy</div>
                        <div className="text-gray-900">55</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2 bg-white">
                        <div className="font-bold text-gray-700">Recoil</div>
                        <div className="text-gray-900">64</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2">
                        <div className="font-bold text-gray-700">Reload</div>
                        <div className="text-gray-900">60</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2 bg-white">
                        <div className="font-bold text-gray-700">Hipshot</div>
                        <div className="text-gray-900">100</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2">
                        <div className="font-bold text-gray-700">Magazine</div>
                        <div className="text-gray-900">6</div>
                    </div>
                </div>
            </div>

            {/* Intro Quote */}
            <blockquote className="mb-6 border-l-4 border-green-800 pl-4 italic text-gray-600 font-sans text-sm bg-gray-50 py-2 pr-2">
                <p className="mb-2">"A single-action revolver using .357 magnum ammunition. Powerful, yet easy to maintain out in the field. It's perhaps primarily used as a defensive sidearm, but the revolver hunting enthusiast can easily fit the gun with a scope and use it to take down small to medium-sized game."</p>
                <cite className="text-gray-500">— In-Game Description</cite>
            </blockquote>

            {/* Main Description */}
            <div className="mb-8 text-gray-900 font-sans text-[16px] leading-relaxed">
                <p>
                    The <strong className="text-green-800">Focoso 357</strong> was the first pistol available in the game. While it lacks power and range, it's one of the few weapons suitable for hunting Red Fox and Siberian Musk Deer. Like all pistols, the light weight of its construction makes it a suitable sidearm.
                </p>
            </div>

            {/* Table of Contents */}
            <div className="mb-8 inline-block bg-gray-50 border border-gray-200 p-4 min-w-[250px] shadow-sm rounded-sm">
                <div className="flex justify-between items-center border-b border-gray-200 pb-2 mb-2">
                    <span className="font-bold text-gray-900 text-lg">Contents</span>
                    <button onClick={() => setIsTocOpen(!isTocOpen)} className="text-green-800 text-xs hover:underline font-bold">[{isTocOpen ? 'hide' : 'show'}]</button>
                </div>
                {isTocOpen && (
                    <ol className="list-decimal list-inside text-green-800 text-sm space-y-1 font-sans font-medium">
                        <li><a href="#ammo" className="hover:underline">Ammo</a></li>
                        <li><a href="#sights" className="hover:underline">Sights</a></li>
                        <li><a href="#trivia" className="hover:underline">Trivia</a></li>
                        <li><a href="#comparison" className="hover:underline">Comparison to other handguns</a></li>
                    </ol>
                )}
            </div>

            {/* Sections */}
            <div className="space-y-12 clear-both">
                
                {/* Ammo Section */}
                <div id="ammo">
                    <div className="flex items-center space-x-2 border-b border-green-800/20 pb-2 mb-4">
                        <h2 className="text-2xl font-bold text-green-800">1. Ammo</h2>
                        <a href="#" className="text-gray-400 hover:text-green-800"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                    </div>
                    <p className="text-gray-700 text-[16px] mb-4">As with most pistols, two variants of its ammunition are available:</p>
                    
                    <div className="bg-white border border-gray-200 text-sm md:text-base font-sans overflow-x-auto shadow-sm">
                         <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-100 border-b-2 border-gray-200 text-gray-900 font-bold">
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
                    <div className="flex items-center space-x-2 border-b border-green-800/20 pb-2 mb-4">
                        <h2 className="text-2xl font-bold text-green-800">2. Sights</h2>
                        <a href="#" className="text-gray-400 hover:text-green-800"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                    </div>
                    <p className="text-gray-700 text-[16px] mb-4">
                        The following sights can be equipped on the Focoso 357:
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-4 text-green-800 text-lg font-medium">
                        {sightsData.map((sight, idx) => (
                            <li key={idx}><a href="#" className="hover:underline">{sight}</a></li>
                        ))}
                    </ul>
                </div>

                {/* Trivia */}
                <div id="trivia">
                    <div className="flex items-center space-x-2 border-b border-green-800/20 pb-2 mb-4">
                        <h2 className="text-2xl font-bold text-green-800">3. Trivia</h2>
                        <a href="#" className="text-gray-400 hover:text-green-800"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                    </div>
                    <ul className="list-disc list-inside text-gray-700 font-sans text-[16px] space-y-2">
                        <li>The Focoso 357 is modeled after its real-life counterpart of the Smith & Wesson Performance Center Model 629 Hunter.</li>
                        <li>At the time of it's release, the .357 Magnum was the most powerful pistol cartridge in the world.</li>
                        <li>The Focoso 357 is the only gun in game with a built-in muzzle break. This is purely cosmetic however, as it does not make the pistol more accurate.</li>
                        <li>With the release of the High Caliber Weapon Pack on March 12th 2024, the Focoso 357 was visually reworked.</li>
                    </ul>
                </div>

                 {/* Comparison Placeholder */}
                <div id="comparison">
                    <div className="flex items-center space-x-2 border-b border-green-800/20 pb-2 mb-4">
                        <h2 className="text-2xl font-bold text-green-800">4. Comparison to other handguns</h2>
                        <a href="#" className="text-gray-400 hover:text-green-800"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                    </div>
                    <div className="relative group">
                        <img 
                            src={RifleDiagram} 
                            alt="Handgun Comparison Chart" 
                            className="w-[400px] h-[200px] border border-gray-200 shadow-md block opacity-90 hover:opacity-100 transition-opacity"
                        />
                         <div className="absolute bottom-2 right-2 bg-black/60 p-1 rounded hover:bg-black/80 cursor-pointer">
                             <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </div>
                    </div>
                </div>

            </div>

        </div>

        <div className="mt-8 mb-8">
            <WeaponsTable />
        </div>

        <div className="h-32"></div>
      </div>
    </div>
  );
}