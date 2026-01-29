import React, { useState } from 'react';
import WeaponsTable from '../../../../components/WeaponsTable';
import VallgardaImg from '../../../../assets/Vallgarda.375.webp';

// --- Main App Component ---
export default function App() {
  const [isTocOpen, setIsTocOpen] = useState(true);

  // Image URLs
    // using imported asset `VallgardaImg` from assets folder
  const RifleDiagram = "https://static.wikia.nocookie.net/thehuntercotw/images/0/07/Rifle_Comparison_Chart.png";
  
  // Using the main image as a placeholder for gallery items
  const VallgardaStanding = VallgardaImg;
  const VallgardaCrouching = VallgardaImg;
  const VallgardaLying = VallgardaImg;
  const VallgardaIronSight = VallgardaImg;

  // (variants removed)

  // Data for Ammo Table
  const ammoData = [
    { name: ".375 Soft-Point Flat Nose", pen: 25, exp: 68, class: "7-9", range: "150m", price: 820 },
    { name: ".375 Solid Flat Nose", pen: 100, exp: 20, class: "7-9", range: "150m", price: 1080 },
  ];

  // Data for Sights List
  const sightsData = [
    "Ascent 1-4x24 Rifle Scope",
    "Hyperion 4-8x42 Rifle Scope",
    "Odin 4-12x33 Rifle Scope",
    "Argus 8-16x50 Rifle Scope",
    "GenZero 1-4x20 Night Vision Rifle Scope",
    "Angler 4-8x100 Night Vision Rifle Scope",
    "Red Raptor Reflex Sight",
    "Tru-Vision Tritium Sights"
  ];

    return (
        <div className="min-h-screen text-gray-900 p-6 md:p-12 font-sans tracking-tight bg-white" style={{ fontFamily: '"Roboto Condensed", sans-serif' }}>
       {/* Add Google Font link dynamically */}
      <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
      
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
                <header className="flex flex-col md:flex-row md:items-center justify-between border-b border-green-800/20 pb-4 mb-6">
                    <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4 md:mb-0">
                        Vallgarda .375
                    </h1>

                </header>

        {/* Main Content Layout */}
        <div className="block">
            
            {/* Right Floated Infobox with Slider */}
            <div className="float-right w-72 ml-6 mb-4 bg-white border border-gray-200 shadow-xl font-sans">
                {/* Infobox Title */}
                <div className="bg-green-800 text-white text-center font-bold py-2 border-b border-green-900 tracking-wide text-lg">
                    Vallgarda .375
                </div>

                {/* Image Area (static) */}
                <div className="p-4 flex justify-center bg-gray-50 relative min-h-[160px] items-center">
                    <img
                        src={VallgardaImg}
                        alt="Vallgarda .375"
                        style={{ width: '268.4px', height: '134.2px' }}
                        className="object-contain"
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
                        <div className="text-green-800">0</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2 bg-gray-50">
                        <div className="font-bold text-gray-700">Weight</div>
                        <div className="text-green-800">4</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2">
                        <div className="font-bold text-gray-700">Score</div>
                        <div className="text-green-800">0</div>
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
                        <div className="text-green-800">95</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2 bg-gray-50">
                        <div className="font-bold text-gray-700">Recoil</div>
                        <div className="text-green-800">100</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2">
                        <div className="font-bold text-gray-700">Reload</div>
                        <div className="text-green-800">45</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2 bg-gray-50">
                        <div className="font-bold text-gray-700">Hipshot</div>
                        <div className="text-green-800">50</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2">
                        <div className="font-bold text-gray-700">Magazine</div>
                        <div className="text-green-800">4</div>
                    </div>
                </div>
            </div>

            {/* Intro Quote */}
            <blockquote className="mb-6 border-l-4 border-green-800 pl-4 italic text-gray-600 font-sans text-sm">
                <p className="mb-2 text-gray-700">"The VALLGARDA .375 will prove to be your ultimate companion when it comes to hunting large and dangerous game. This bolt action rifle provides impeccable accuracy with precision and power making it the ideal gun that you can't go without."</p>
                <cite className="text-gray-600">— In-Game Description</cite>
            </blockquote>

            {/* Main Description */}
            <div className="mb-8 text-gray-700 font-sans text-[16px] leading-relaxed">
                <p>
                    The Vallgarda .375 is a rifle perfect for hunting large game.
                </p>
                <p>
                    This weapon is available as part of the Hunters' Choice: Bolt-Action Rifle Pack DLC.
                </p>
            </div>

            {/* Table of Contents */}
            <div className="mb-8 inline-block bg-white border border-gray-200 p-2 min-w-[250px]">
                <div className="flex justify-between items-center border-b border-gray-200 pb-1 mb-2">
                    <span className="font-bold text-gray-900 text-sm">Contents</span>
                    <button onClick={() => setIsTocOpen(!isTocOpen)} className="text-green-800 text-xs hover:underline">[{isTocOpen ? 'hide' : 'show'}]</button>
                </div>
                {isTocOpen && (
                    <ol className="list-decimal list-inside text-gray-700 text-sm space-y-1 font-sans">
                        <li><a href="#ammo" className="text-gray-700 hover:text-green-800 hover:underline">Ammo</a></li>
                        <li><a href="#sights" className="text-gray-700 hover:text-green-800 hover:underline">Sights</a></li>
                        
                        <li><a href="#analysis" className="text-gray-700 hover:text-green-800 hover:underline">Analysis</a></li>
                        <li><a href="#trivia" className="text-gray-700 hover:text-green-800 hover:underline">Trivia</a></li>
                        
                    </ol>
                )}
            </div>

            {/* Sections */}
            <div className="space-y-12 clear-both">
                
                {/* Ammo Section */}
                <div id="ammo">
                    <div className="flex items-center space-x-2 border-b border-gray-200 pb-2 mb-4">
                            <h2 className="text-2xl font-bold text-green-800">1. Ammo</h2>
                            <a href="#" className="text-green-800"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                        </div>
                        <p className="text-gray-700 text-[16px] mb-4">As with most rifles, two variants of its ammunition are available:</p>
                    
                        <div className="bg-white border border-gray-200 text-sm md:text-base font-sans overflow-x-auto">
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
                                            <td className="p-3 text-green-800 hover:underline cursor-pointer">{item.name}</td>
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
                    <div className="flex items-center space-x-2 border-b border-gray-600/50 pb-2 mb-4">
                        <h2 className="text-2xl font-bold text-white">2. Sights</h2>
                        <a href="#" className="text-[#5aaaf7]"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                    </div>
                    <p className="text-gray-300 text-[16px] mb-4">The following sights can be equipped on the Vallgarda .375:</p>
                    
                    <ul className="list-disc list-inside space-y-1 ml-4 text-[#5aaaf7] text-lg">
                        {sightsData.map((sight, idx) => (
                            <li key={idx}><a href="#" className="hover:underline">{sight}</a></li>
                        ))}
                    </ul>
                </div>

                {/* Analysis */}
                <div id="analysis">
                  <div className="flex items-center space-x-2 border-b border-gray-600/50 pb-2 mb-4">
                    <h2 className="text-2xl font-bold text-white">3. Analysis</h2>
                    <a href="#" className="text-[#5aaaf7]"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                  </div>
                    <div className="text-gray-300 font-sans text-[16px] leading-relaxed space-y-4">
                      <p>
                        This is without a doubt the most powerful long-range rifle in the game, its characteristics when using polymer cartridges are unrivaled when hunting large game at up to 200 meters, and are at least equal to other 7-9 rifles beyond that. However, such power comes at the cost of a number of drawbacks:
                      </p>
                      <ul className="list-disc list-inside ml-4 space-y-2">
                        <li>this rifle has a huge recoil, the barrel swing is so great that player will probably not be able to make a quick second aimed shot at the animal in time,</li>
                        <li>a rather modest magazine of 4 rounds,</li>
                        <li>while its soft-point ammunition has great damage characteristics, the penetration of only 19 means they will be unreliable for hunting classes 7-9.</li>
                      </ul>
                    </div>
                </div>

                {/* Trivia */}
                <div id="trivia">
                  <div className="flex items-center space-x-2 border-b border-gray-600/50 pb-2 mb-4">
                    <h2 className="text-2xl font-bold text-white">4. Trivia</h2>
                    <a href="#" className="text-[#5aaaf7]"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                  </div>
                    <p className="text-gray-300 font-sans text-[16px]">
                        The Vallgarda .375 is modeled after its real life counterpart of the Winchester Model 70 African.
                    </p>
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