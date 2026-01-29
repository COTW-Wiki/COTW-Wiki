import React, { useState } from 'react';
import WeaponsTable from '../../../../components/WeaponsTable';
import ForsEliteImg from '../../../../assets/ForsElite.300.webp';

// --- Main App Component ---
export default function App() {
  const [isTocOpen, setIsTocOpen] = useState(true);

  // Image URLs (use imported asset directly)
  // Note: external diagram and unused aliases removed

  // Data for Ammo Table
  const ammoData = [
    { name: ".300 Magnum Soft-Point", pen: 21, exp: 60, class: "7-9", range: "150m", price: 720 },
    { name: ".300 Magnum Polymer-Tip", pen: 42, exp: 14, class: "7-9", range: "150m", price: 950 },
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
    <div className="min-h-screen text-gray-900 p-6 md:p-12 font-sans tracking-tight" style={{ fontFamily: '"Roboto Condensed", sans-serif' }}>
       {/* Add Google Font link dynamically */}
      <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
      
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <header className="flex flex-col md:flex-row md:items-center justify-between border-b border-gray-200 pb-4 mb-6">
          <h1 className="text-5xl font-bold text-green-800 mb-6">Fors Elite .300</h1>

        </header>

        {/* Main Content Layout */}
        <div className="block">
            
            {/* Right Floated Infobox */}
            <div className="float-right w-72 ml-6 mb-4 bg-white border border-gray-200 shadow-xl font-sans">
              {/* Infobox Title */}
              <div className="bg-gray-100 text-gray-900 text-center font-bold py-2 border-b border-gray-200 tracking-wide">
                Fors Elite .300
              </div>

              {/* Image Area */}
              <div className="relative group p-4 bg-gray-50">
                <img
                  src={ForsEliteImg}
                  alt="Fors Elite"
                  className="border border-gray-200 block"
                  style={{ width: '268.4px', height: 'auto', objectFit: 'contain' }}
                />
              </div>

              {/* General Information Header */}
              <div className="bg-gray-100 text-gray-900 text-center font-bold py-1 border-y border-gray-200 tracking-wide text-sm">
                General Information
              </div>

              {/* General Information Data */}
              <div className="text-sm bg-white">
                <div className="grid grid-cols-2 border-b border-gray-200 p-2">
                  <div className="font-bold text-gray-900">Value</div>
                  <div className="text-gray-700">75000</div>
                </div>
                <div className="grid grid-cols-2 border-b border-gray-200 p-2 bg-white">
                  <div className="font-bold text-gray-900">Weight</div>
                  <div className="text-gray-700">4.0</div>
                </div>
                <div className="grid grid-cols-2 border-b border-gray-200 p-2">
                  <div className="font-bold text-gray-900">Score</div>
                  <div className="text-gray-700">0</div>
                </div>
              </div>

              {/* Statistics Header */}
              <div className="bg-gray-100 text-gray-900 text-center font-bold py-1 border-y border-gray-200 tracking-wide text-sm">
                Statistics
              </div>

              {/* Statistics Data */}
              <div className="text-sm bg-white">
                <div className="grid grid-cols-2 border-b border-gray-200 p-2">
                  <div className="font-bold text-gray-900">Accuracy</div>
                  <div className="text-gray-700">85</div>
                </div>
                <div className="grid grid-cols-2 border-b border-gray-200 p-2 bg-white">
                  <div className="font-bold text-gray-900">Recoil</div>
                  <div className="text-gray-700">40</div>
                </div>
                <div className="grid grid-cols-2 border-b border-gray-200 p-2">
                  <div className="font-bold text-gray-900">Reload</div>
                  <div className="text-gray-700">49</div>
                </div>
                <div className="grid grid-cols-2 border-b border-gray-200 p-2 bg-white">
                  <div className="font-bold text-gray-900">Hipshot</div>
                  <div className="text-gray-700">80</div>
                </div>
                <div className="grid grid-cols-2 border-b border-gray-200 p-2">
                  <div className="font-bold text-gray-900">Magazine</div>
                  <div className="text-gray-700">6</div>
                </div>
              </div>
            </div>

            {/* Intro Quote */}
            <blockquote className="mb-6 border-l-4 border-green-800 pl-4 italic text-gray-700 font-sans text-sm">
              <p className="mb-2">"Experience unmatched speed and accuracy with the FORS ELITE .300. This bolt action shines bright in fast-paced scenarios with its rapid reloading mechanism and superior hip shot capability. The large magazine size allows for extended shooting sessions making it perfect for those intense hinting adventures."</p>
              <cite>― In-Game Description</cite>
            </blockquote>

            {/* Main Description */}
            <div className="mb-8 text-gray-200 font-sans text-[16px] leading-relaxed space-y-2">
              <p>The Fors Elite .300 is a rifle perfect for hunting medium sized game.</p>
              <p>This weapon is available as part of the Hunters' Choice: Bolt-Action Rifle Pack DLC.</p>
            </div>

            {/* Table of Contents */}
            <div className="mb-8 inline-block bg-gray-50 border border-gray-200 p-2 min-w-[250px]">
              <div className="flex justify-between items-center border-b border-gray-200 pb-1 mb-2">
                <span className="font-bold text-gray-900 text-sm">Contents</span>
                <button onClick={() => setIsTocOpen(!isTocOpen)} className="text-green-800 text-xs hover:underline">[{isTocOpen ? 'hide' : 'show'}]</button>
              </div>
              {isTocOpen && (
                <ol className="list-decimal list-inside text-gray-700 text-sm space-y-1 font-sans">
                  <li><a href="#ammo" className="text-green-800 hover:underline">Ammo</a></li>
                  <li><a href="#sights" className="text-green-800 hover:underline">Sights</a></li>
                  <li><a href="#analysis" className="text-green-800 hover:underline">Analysis</a></li>
                  <li><a href="#trivia" className="text-green-800 hover:underline">Trivia</a></li>
                </ol>
              )}
            </div>

            {/* Sections */}
            <div className="space-y-12 clear-both">
                
                {/* Ammo Section */}
                <div id="ammo">
                    <div className="flex items-center space-x-2 border-b border-gray-600/50 pb-2 mb-4">
                        <h2 className="text-2xl font-bold text-white">1. Ammo</h2>
                        <a href="#" className="text-[#5aaaf7]"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                    </div>
                    <p className="text-gray-700 text-[16px] mb-4">The Fors Elite .300 uses standard .300 Magnum ammunition:</p>
                    
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
                            <tbody className="text-gray-300 divide-y divide-[#1e4e6e]/50">
                                {ammoData.map((item, idx) => (
                                    <tr key={idx} className="hover:bg-[#1e4e6e]/10">
                                        <td className="p-3 text-[#5aaaf7] hover:underline cursor-pointer">{item.name}</td>
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
                    <p className="text-gray-700 text-[16px] mb-4">The following sights can be equipped on the Fors Elite .300:</p>
                    
                    <ul className="list-disc list-inside space-y-1 ml-4 text-green-800 text-lg">
                      {sightsData.map((sight, idx) => (
                        <li key={idx}><a href="#" className="hover:underline">{sight}</a></li>
                      ))}
                    </ul>
                </div>

                {/* Variants section removed per request */}

                {/* Analysis */}
                <div id="analysis">
                  <div className="flex items-center space-x-2 border-b border-gray-200 pb-2 mb-4">
                    <h2 className="text-2xl font-bold text-gray-900">3. Analysis</h2>
                    <a href="#" className="text-[#5aaaf7]"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                  </div>
                    <div className="text-gray-300 font-sans text-[16px] leading-relaxed space-y-4">
                      <p>
                        This is a great weapon for its classes, lethal, long-range, accurate, with a wide magazine. It is difficult to find any disadvantages.
                      </p>
                      <p>
                        However, the most important thing is that having an atypical coverage of classes 3-6, it gives a unique opportunity to assemble a row of weapons for all classes in a new way. Previously, players mainly used this row: [1, 2-4, 4-8, 9], or their row had duplicate numbers. Now, having Fors Elite, players can close the row like this: [1-2, 3-6, 7-9], thus lightening the inventory for one weapon.
                      </p>
                    </div>
                </div>

                {/* Trivia */}
                <div id="trivia">
                  <div className="flex items-center space-x-2 border-b border-gray-200 pb-2 mb-4">
                    <h2 className="text-2xl font-bold text-gray-900">4. Trivia</h2>
                    <a href="#" className="text-[#5aaaf7]"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                  </div>
                  <p className="text-gray-300 font-sans text-[16px]">
                    The Fors Elite 300 is modeled after its real life counterpart of the Mossberg MVP Patrol Rifle.
                  </p>
                </div>

                {/* Gallery removed per request */}

                {/* Comparison section removed per request */}

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