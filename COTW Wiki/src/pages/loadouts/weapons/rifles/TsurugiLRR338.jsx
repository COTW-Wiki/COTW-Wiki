import React, { useState } from 'react';
import WeaponsTable from '../../../../components/WeaponsTable';
import TsurugiImg from '../../../../assets/TsurugiLRR338.webp';
import RifleDiagram from '../../../../assets/Rifle_diagram_2020.webp';
import TsurugiStanding from '../../../../assets/TsurugiLRR338Standing.webp';
import TsurugiCrouching from '../../../../assets/TsurugiLRR338Crouching.webp';
import TsurugiLying from '../../../../assets/TsurugiLRR338Lying.webp';
import TsurugiIronSight from '../../../../assets/TsurugiLRR338IronSight.webp';


export default function App() {
  const [isTocOpen, setIsTocOpen] = useState(true);

  // Data for Ammo Table
  const ammoData = [
    { name: ".338 Mag. Soft-Point", pen: 22, exp: 68, class: "7-9", range: "150m", price: 790 },
    { name: ".338 Mag. Polymer-Tip", pen: 45, exp: 16, class: "7-9", range: "150m", price: 1050 },
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
        <header className="flex flex-col md:flex-row md:items-center justify-between border-b border-gray-700/20 pb-4 mb-6">
          <h1 className="text-4xl md:text-5xl font-light mb-4 md:mb-0">
            Tsurugi LRR .338
          </h1>

        </header>

        {/* Main Content Layout */}
        <div className="block">
            
            {/* Right Floated Infobox with Slider */}
            <div className="float-right w-72 ml-6 mb-4 bg-white border border-gray-200 shadow-xl font-sans rounded">
                {/* Infobox Title */}
                <div className="bg-white text-gray-900 text-center font-bold py-2 border-b border-gray-200 tracking-wide text-lg">
                    Tsurugi LRR .338
                </div>
                
                {/* Image Area */}
                <div className="p-4 flex justify-center bg-gray-50 relative min-h-[160px] items-center">
                    <img 
                        src={TsurugiImg} 
                        alt="Tsurugi LRR .338" 
                        style={{ width: '268.4px', height: '134.2px' }}
                        className="object-contain"
                    />
                </div>

                {/* General Information Header */}
                <div className="bg-gray-50 text-gray-900 text-center font-bold py-1 border-y border-gray-200 tracking-wide text-sm">
                    General Information
                </div>

                {/* General Information Data */}
                <div className="text-sm bg-white">
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2">
                        <div className="font-bold text-gray-700">Value</div>
                        <div className="text-gray-700">0</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2 bg-gray-50">
                        <div className="font-bold text-gray-700">Weight</div>
                        <div className="text-gray-700">5</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2">
                        <div className="font-bold text-gray-700">Score</div>
                        <div className="text-gray-700">0</div>
                    </div>
                </div>

                {/* Statistics Header */}
                <div className="bg-gray-50 text-gray-900 text-center font-bold py-1 border-y border-gray-200 tracking-wide text-sm">
                    Statistics
                </div>

                {/* Statistics Data */}
                <div className="text-sm bg-white">
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2">
                        <div className="font-bold text-gray-700">Accuracy</div>
                        <div className="text-gray-700">38</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2 bg-gray-50">
                        <div className="font-bold text-gray-700">Recoil</div>
                        <div className="text-gray-700">100</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2">
                        <div className="font-bold text-gray-700">Reload</div>
                        <div className="text-gray-700">49</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2 bg-gray-50">
                        <div className="font-bold text-gray-700">Hipshot</div>
                        <div className="text-gray-700">12</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2">
                        <div className="font-bold text-gray-700">Magazine</div>
                        <div className="text-gray-700">5</div>
                    </div>
                </div>
            </div>

            {/* Intro Quote */}
            <blockquote className="mb-6 border-l-4 border-green-600 pl-4 italic text-gray-700 font-sans text-sm bg-green-50 p-3 rounded">
                <p className="mb-2">"One of the most revered long-range rifles out there. The Tsurugi LRR chambered in .338 packs a punch while still providing high precision. Made with durable, high-quality materials throughout to never compromise performance even in the roughest conditions. The 5-round-capacity detachable magazine combined with the smooth, reliable bolt-action ensures you can get that follow-up shot, should you ever require it."</p>
                <cite>— In-Game Description</cite>
            </blockquote>

            {/* Main Description */}
            <div className="mb-8 text-gray-700 font-sans text-[16px] leading-relaxed">
                <p>
                    The Tsurugi LRR .338 is a powerful rifle chambered in .338 Magnum.
                </p>
                <p>
                    This weapon is available as part of the Hunter Power Pack DLC.
                </p>
            </div>

            {/* Table of Contents */}
            <div className="mb-8 inline-block bg-white border border-gray-200 p-2 min-w-[250px] rounded">
                <div className="flex justify-between items-center border-b border-gray-200 pb-1 mb-2">
                    <span className="font-bold text-gray-900 text-sm">Contents</span>
                    <button onClick={() => setIsTocOpen(!isTocOpen)} className="text-green-600 text-xs hover:underline">[{isTocOpen ? 'hide' : 'show'}]</button>
                </div>
                {isTocOpen && (
                    <ol className="list-decimal list-inside text-gray-700 text-sm space-y-1 font-sans">
                        <li><a href="#ammo" className="hover:text-gray-900 hover:underline">Ammo</a></li>
                        <li><a href="#sights" className="hover:text-gray-900 hover:underline">Sights</a></li>

                        <li><a href="#analysis" className="hover:text-gray-900 hover:underline">Analysis</a></li>
                        <li><a href="#trivia" className="hover:text-gray-900 hover:underline">Trivia</a></li>
                        <li><a href="#gallery" className="hover:text-gray-900 hover:underline">Gallery</a></li>
                        <li><a href="#comparison" className="hover:text-gray-900 hover:underline">Comparison to other rifles</a></li>
                    </ol>
                )}
            </div>

            {/* Sections */}
            <div className="space-y-12 clear-both">
                
                {/* Ammo Section */}
                <div id="ammo">
                    <div className="flex items-center space-x-2 border-b border-gray-200 pb-2 mb-4">
                        <h2 className="text-2xl font-bold text-gray-900">1. Ammo</h2>
                        <a href="#" className="text-green-600"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                    </div>
                    <p className="text-gray-700 text-[16px] mb-4">As with most rifles, two variants of its ammunition are available:</p>
                    
                        <div className="bg-white border border-gray-200 text-sm md:text-base font-sans overflow-x-auto">
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
                                            <td className="p-3 text-green-600 hover:underline cursor-pointer">{item.name}</td>
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
                        <h2 className="text-2xl font-bold text-gray-900">2. Sights</h2>
                        <a href="#" className="text-green-600"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                    </div>
                    <p className="text-gray-700 text-[16px] mb-4">The following sights can be equipped on the Tsurugi LRR .338:</p>
                    
                    <ul className="list-disc list-inside space-y-1 ml-4 text-green-600 text-lg">
                        {sightsData.map((sight, idx) => (
                            <li key={idx}><a href="#" className="hover:underline">{sight}</a></li>
                        ))}
                    </ul>
                </div>

                {/* Analysis */}
                <div id="analysis">
                    <div className="flex items-center space-x-2 border-b border-gray-200 pb-2 mb-4">
                        <h2 className="text-2xl font-bold text-gray-900">4. Analysis</h2>
                        <a href="#" className="text-green-600"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                    </div>
                    <div className="text-gray-700 font-sans text-[16px] leading-relaxed space-y-4">
                        <p>
                            With an identical recoil and slightly better accuracy (slightly less aim wobble), the Tsurugi improves upon the powerful <a href="#" className="text-green-600 hover:underline">Rangemaster 338</a> by including a 5 round magazine, allowing for potential followup shots. The ability to quickly chamber another round also compensates for the Tsurugis only drawback compared to the basegame rifle: It´s long reload. Apart from that, both rifles are rather heavy, weighing in at 5 weight units. But if you are going after big game you cant go wrong with the .338 (both basegame and DLC), as it´s one of the most powerful big game rifles in COTW.
                        </p>
                        <p>
                            If you like the Rangemaster 338 but wish you had more rounds in the magazine, the Tsurugi LRR .338 from the Hunter Power Pack is the answer.
                        </p>
                    </div>
                </div>

                {/* Trivia */}
                <div id="trivia">
                    <div className="flex items-center space-x-2 border-b border-gray-200 pb-2 mb-4">
                        <h2 className="text-2xl font-bold text-gray-900">5. Trivia</h2>
                        <a href="#" className="text-green-600"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                    </div>
                    <p className="text-gray-700 font-sans text-[16px]">
                        The Tsurugi LRR is modeled after its real-life counterpart of the SAKO TRG-42.
                    </p>
                </div>

                {/* Gallery */}
                <div id="gallery">
                    <div className="flex items-center space-x-2 border-b border-gray-200 pb-2 mb-4">
                        <h2 className="text-2xl font-bold text-gray-900">6. Gallery</h2>
                        <a href="#" className="text-green-600"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                        {[
                            { title: "Standing", img: TsurugiStanding }, 
                            { title: "Crouching", img: TsurugiCrouching }, 
                            { title: "Lying", img: TsurugiLying }, 
                            { title: "Iron sight", img: TsurugiIronSight } 
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white border border-gray-200 p-2 rounded" style={{ width: '240px', height: '162px' }}>
                                <div className="bg-gray-50 overflow-hidden relative group flex justify-center items-center h-[122px]">
                                     <img 
                                        src={item.img} 
                                        alt={item.title} 
                                        className="object-contain h-full w-full"
                                     />
                                      <div className="absolute bottom-1 right-1 bg-black/60 p-0.5 rounded">
                                         <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                </div>
                                <p className="text-gray-700 text-xs mt-1 text-center">{item.title}</p>
                            </div>
                        ))}
                    </div>
                </div>

                                {/* removed standalone diagram; will be embedded in Comparison section */}

                 {/* Comparison Placeholder */}
                <div id="comparison">
                    <div className="flex items-center space-x-2 border-b border-gray-200 pb-2 mb-4">
                            <h2 className="text-2xl font-bold text-gray-900">7. Comparison to other rifles</h2>
                        <a href="#" className="text-green-600"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                    </div>
                        <div className="relative group">
                        {/* Embedded rifle diagram (no heading/title) */}
                        <img
                          src={RifleDiagram}
                          alt="Tsurugi LRR .338 Diagram"
                          style={{ width: '420px', height: '200px' }}
                              className="object-contain mt-4 border border-gray-200 bg-white rounded shadow"
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

        <div className="h-32"></div>
                {/* Weapons Table at the bottom */}
                <div className="mt-12">
                    <WeaponsTable activeItem="Tsurugi LRR .338" />
                </div>
      </div>
    </div>
  );
}