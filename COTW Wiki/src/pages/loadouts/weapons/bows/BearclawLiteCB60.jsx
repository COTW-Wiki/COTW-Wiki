import React, { useState } from 'react';
import WeaponsTable from '../../../../components/WeaponsTable';
import BearclawLiteCB60 from '../../../../assets/BearclawLiteCB60.webp';
import BearclawLiteCB60Standing from '../../../../assets/BearclawCB60Pose1.webp';
import BearclawLiteCB60StandingAimed from '../../../../assets/BearclawCB60Pose2.webp';
import BearclawLiteCB60Lying from '../../../../assets/BearclawCB60Pose3.webp';
import BearclawLiteCB60LyingAimed from '../../../../assets/BearclawCB60Pose4.webp';
import BowsDiagram from '../../../../assets/Bows.webp';


// --- Main App Component ---
export default function App() {
  const [isTocOpen, setIsTocOpen] = useState(true);

  // Image URLs
    const BearclawImg = "https://static.wikia.nocookie.net/thehuntercotw/images/7/7b/Bow_Bearclaw_Lite_CB-60.png";
  
  // Using the main image as a placeholder for gallery items
  const BearclawStanding = BearclawImg;
  const BearclawCrouching = BearclawImg;
  const BearclawLying = BearclawImg;
  const BearclawIronSight = BearclawImg;

  // Data for Ammo Table
  const ammoData = [
    { name: "300 gr. Small Game Point", pen: "10", exp: "0", class: "1-2", range: "20m", price: 530 },
    { name: "420 gr. Broadhead", pen: "50", exp: "0", class: "2-7", range: "20m", price: 700 },
    { name: "600 gr. Broadhead", pen: "90", exp: "0", class: "7-9", range: "20m", price: 880 },
  ];

  // Data for Sights List
  const sightsData = [
    "Brightsight Single-Pin Sight",
    "Swift-Mark 3 Bow Sight",
    "Swift-Mark 5 Bow Sight",
    "Brightsight Rangefinder Bow Sight"
  ];

  return (
    <div className="p-6 mt-10 w-full max-w-7xl mx-auto font-sans text-gray-700">
      
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <header className="mb-6">
          <h1 className="text-5xl font-bold text-green-800 mb-6">
            Bearclaw Lite CB-60
          </h1>
        </header>

        {/* Main Content Layout */}
        <div className="block">
            
            {/* Right Floated Infobox */}
            <div className="float-right w-72 ml-6 mb-4 bg-white border border-gray-300 shadow-md font-sans">
                {/* Infobox Title */}
                <div className="bg-green-800 text-white text-center font-bold py-2 border-b border-gray-300 tracking-wide text-lg">
                    Bearclaw Lite CB-60
                </div>

                {/* Image Area */}
                <div className="p-4 flex justify-center bg-white relative min-h-[160px] items-center border-b border-gray-300">
                    <img 
                        src={BearclawLiteCB60} 
                        alt="Bearclaw Lite CB-60" 
                        style={{ width: '268.4px', height: '134.2px' }}
                        className="object-contain"
                    />
                </div>


                {/* General Information */}
                <div className="bg-green-800 text-white text-center font-bold py-1 border-y border-gray-300 tracking-wide text-sm">
                    General Information
                </div>

                <div className="text-sm bg-white">
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2">
                        <div className="font-bold text-gray-900">Value</div>
                        <div className="text-gray-700">6000</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2 bg-gray-50">
                        <div className="font-bold text-gray-900">Weight</div>
                        <div className="text-gray-700">4</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2">
                        <div className="font-bold text-gray-900">Score</div>
                        <div className="text-gray-700">0</div>
                    </div>
                </div>

                {/* Statistics Header */}
                <div className="bg-green-800 text-white text-center font-bold py-1 border-y border-gray-300 tracking-wide text-sm">
                    Statistics
                </div>

                {/* Statistics Data */}
                <div className="text-sm bg-white">
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2">
                        <div className="font-bold text-gray-900">Accuracy</div>
                        <div className="text-gray-700">38</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2 bg-gray-50">
                        <div className="font-bold text-gray-900">Recoil</div>
                        <div className="text-gray-700">10</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2">
                        <div className="font-bold text-gray-900">Reload</div>
                        <div className="text-gray-700">100</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2 bg-gray-50">
                        <div className="font-bold text-gray-900">Hipshot</div>
                        <div className="text-gray-700">14</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2">
                        <div className="font-bold text-gray-900">Magazine</div>
                        <div className="text-gray-700">1</div>
                    </div>
                     <div className="grid grid-cols-2 border-b border-gray-200 p-2 bg-gray-50">
                        <div className="font-bold text-gray-900">Draw Weight</div>
                        <div className="text-gray-700">60 lb</div>
                    </div>
                </div>
            </div>

            {/* Intro Quote */}
            <blockquote className="mb-6 border-l-4 border-green-800 pl-4 italic text-gray-700 bg-gray-50 p-4 font-sans text-sm">
                <p className="mb-2">"This bow may look similar to the Razorback, but don't let that fool you. Besides sporting an attractive camo, it also comes with pre-installed stabilizer attachment. This allows for more accurate shots when aiming, but be sure to bring a large backpack, as it also makes it a bit more cumbersome to carry. Suitable for small and medium-sized game."</p>
                <cite className="font-bold">— In-Game Description</cite>
            </blockquote>

            {/* Main Description */}
            <div className="mb-8 text-gray-700 font-sans text-[16px] leading-relaxed">
                <p>
                    The Bearclaw Lite CB-60 is an upgraded version of the Razorback Lite CB-60. Thanks to its stabilizer, it has a higher aimed accuracy at the cost of a lower hipshot accuracy. This higher accuracy extends the usable range to around 60m. While structurally identical to the Razorback, the black powder coat paint has been replaced with a yellow-brown foliage pattern.
                </p>
                <p className="mt-4">
                    This weapon is available as part of the Bearclaw Lite Compound Bow DLC.
                </p>
            </div>

            {/* Table of Contents */}
            <div className="mb-8 inline-block bg-gray-50 border border-gray-200 p-4 min-w-[250px] shadow-sm">
                <div className="flex justify-between items-center border-b border-gray-300 pb-2 mb-2">
                    <span className="font-bold text-gray-900 text-lg">Contents</span>
                    <button onClick={() => setIsTocOpen(!isTocOpen)} className="text-green-800 text-sm hover:underline">[{isTocOpen ? 'hide' : 'show'}]</button>
                </div>
                {isTocOpen && (
                    <ol className="list-decimal list-inside text-green-800 text-sm space-y-1 font-sans font-semibold">
                        <li><a href="#ammo" className="hover:underline hover:text-green-900">Arrows</a></li>
                        <li>
                            <a href="#sights" className="hover:underline hover:text-green-900">Sights</a>
                            <ol className="list-none ml-4 text-green-700 font-normal">
                                <li><span className="text-gray-700 mr-1">2.1</span> <a href="#notes" className="hover:underline hover:text-green-900">Notes</a></li>
                            </ol>
                        </li>
                        <li><a href="#gallery" className="hover:underline hover:text-green-900">Gallery</a></li>
                        <li><a href="#comparison" className="hover:underline hover:text-green-900">Comparison to other bows</a></li>
                    </ol>
                )}
            </div>

            {/* Sections */}
            <div className="space-y-12 clear-both">
                
                {/* Ammo Section */}
                <div id="ammo">
                    <div className="flex items-center space-x-2 border-b border-gray-200 pb-2 mb-4">
                        <h2 className="text-3xl font-bold text-gray-800">1. Arrows</h2>
                        <a href="#" className="text-green-800 hover:text-green-900"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                    </div>
                    <p className="text-gray-700 text-[16px] mb-4">Like all bows, it can use 3 different weights of arrow:</p>
                    
                    <div className="bg-white border border-gray-200 text-sm md:text-base font-sans overflow-x-auto shadow-sm">
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
                                    <tr key={idx} className="hover:bg-green-50">
                                        <td className="p-3 text-green-800 hover:underline cursor-pointer font-semibold">{item.name}</td>
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
                        <h2 className="text-3xl font-bold text-gray-800">2. Sights</h2>
                        <a href="#" className="text-green-800 hover:text-green-900"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                    </div>
                    <p className="text-gray-700 text-[16px] mb-4">
                        The following sights can be equipped on the Bearclaw Lite CB-60:
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-4 text-green-800 text-lg">
                        {sightsData.map((sight, idx) => (
                            <li key={idx}><a href="#" className="hover:underline">{sight}</a></li>
                        ))}
                    </ul>
                    
                    {/* Notes Sub-topic */}
                    <div id="notes" className="mt-6">
                         <div className="flex items-center space-x-2">
                            <h3 className="text-xl font-bold text-gray-800">2.1 Notes</h3>
                        </div>
                        <p className="text-gray-700 text-[16px] mb-4">
                        Aiming while prone can only be done with the Like a Pro archery perk.
                    </p>
                        {/* Notes content would go here eventually */}
                    </div>
                </div>

                {/* Gallery */}
                <div id="gallery">
                    <div className="flex items-center space-x-2 border-b border-gray-200 pb-2 mb-4">
                        <h2 className="text-3xl font-bold text-gray-800">3. Gallery</h2>
                        <a href="#" className="text-green-800 hover:text-green-900"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                        {[
                            { title: "Standing", img: BearclawLiteCB60Standing },
                            { title: "Standing Aimed", img: BearclawLiteCB60StandingAimed },
                            { title: "Lying", img: BearclawLiteCB60Lying },
                            { title: "Lying Aimed (1)", img: BearclawLiteCB60LyingAimed }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white border border-gray-200 p-2 shadow-sm" style={{ width: '240px', height: '162px' }}>
                                <div className="bg-gray-100 overflow-hidden relative group flex justify-center items-center h-[122px] border border-gray-200">
                                     <img 
                                        src={item.img} 
                                        alt={item.title} 
                                        className="object-contain h-full w-full"
                                     />
                                      <div className="absolute bottom-2 right-2 bg-white/80 p-1 rounded hover:bg-white cursor-pointer shadow-sm">
                                         <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                </div>
                                <p className="text-gray-700 text-sm mt-2 text-center font-medium">{item.title}</p>
                            </div>
                        ))}
                    </div>
                </div>

                 {/* Comparison Placeholder */}
                <div id="comparison">
                    <div className="flex items-center space-x-2 border-b border-gray-200 pb-2 mb-4">
                        <h2 className="text-3xl font-bold text-gray-800">4. Comparison to other bows</h2>
                        <a href="#" className="text-green-800 hover:text-green-900"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                    </div>
                    <div className="relative group inline-block">
                        <img 
                            src={BowsDiagram} 
                            alt="Bow Comparison Chart" 
                            style={{ width: '400px', height: '200px' }}
                            className="object-contain border border-gray-300 shadow-md block opacity-95 hover:opacity-100 transition-opacity bg-white"
                        />
                         <div className="absolute bottom-2 right-2 bg-white/80 p-1 rounded hover:bg-white cursor-pointer shadow-md">
                             <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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