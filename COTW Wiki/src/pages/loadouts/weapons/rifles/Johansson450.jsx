import React, { useState } from 'react';
import JohanssonImg from '../../../../assets/Johansson.450.webp';
import WeaponsTable from '../../../../components/WeaponsTable';

// --- Main App Component ---
export default function App() {
  const [isTocOpen, setIsTocOpen] = useState(true);

  // Image URLs
  const RifleDiagram = "https://static.wikia.nocookie.net/thehuntercotw/images/0/07/Rifle_Comparison_Chart.png";
  
  // Using the main image as a placeholder for gallery items
  const JohanssonStanding = JohanssonImg;
  const JohanssonCrouching = JohanssonImg;
  const JohanssonLying = JohanssonImg;
  const JohanssonIronSight = JohanssonImg;

  // (variants removed)

  // Data for Ammo Table
  const ammoData = [
    { name: ".450 Magnum Soft-Point", pen: 21, exp: 60, class: "4-9", range: "150m", price: 680 },
    { name: ".450 Magnum Polymer-Tip", pen: 42, exp: 14, class: "4-9", range: "150m", price: 920 },
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
        <header className="flex flex-col md:flex-row md:items-center justify-between border-b border-green-800/10 pb-4 mb-6">
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4 md:mb-0">
            Johansson .450
          </h1>

        </header>

        {/* Main Content Layout */}
        <div className="block">
            
            {/* Right Floated Infobox with Slider */}
            <div className="float-right w-72 ml-6 mb-4 bg-white border border-gray-200 shadow font-sans">
                {/* Infobox Title */}
              <div className="bg-green-800 text-white text-center font-bold py-2 border-b border-green-900 tracking-wide text-lg">
                Johansson .450
              </div>

                {/* Image Area (static) */}
                <div className="p-4 flex justify-center bg-gray-50 relative min-h-[160px] items-center">
                  <img
                    src={JohanssonImg}
                    alt="Johansson .450"
                    style={{ width: '268.4px', height: '134.2px' }}
                    className="object-contain transition-opacity duration-300"
                    onError={(e) => { e.target.src = JohanssonImg }}
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
                    <div className="text-green-800">75000</div>
                  </div>
                  <div className="grid grid-cols-2 border-b border-gray-200 p-2 bg-gray-50">
                    <div className="font-bold text-gray-700">Weight</div>
                    <div className="text-green-800">4.5</div>
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
                    <div className="text-green-800">40</div>
                  </div>
                  <div className="grid grid-cols-2 border-b border-gray-200 p-2 bg-gray-50">
                    <div className="font-bold text-gray-700">Recoil</div>
                    <div className="text-green-800">50</div>
                  </div>
                  <div className="grid grid-cols-2 border-b border-gray-200 p-2">
                    <div className="font-bold text-gray-700">Reload</div>
                    <div className="text-green-800">40</div>
                  </div>
                  <div className="grid grid-cols-2 border-b border-gray-200 p-2 bg-gray-50">
                    <div className="font-bold text-gray-700">Hipshot</div>
                    <div className="text-green-800">30</div>
                  </div>
                  <div className="grid grid-cols-2 border-b border-gray-200 p-2">
                    <div className="font-bold text-gray-700">Magazine</div>
                    <div className="text-green-800">5</div>
                  </div>
                </div>
            </div>

            {/* Intro Quote */}
            <blockquote className="mb-6 border-l-4 border-[#5aaaf7] pl-4 italic text-gray-400 font-sans text-sm">
              <p className="mb-2">"The JOHANSSON .450 is a bolt-action rifle designed for taking down medium large game. Its rugged construction and smooth operation offers a perfect balance between modern innovation and traditional styling. Delivering consistent and reliable performance, this rifle is perfect for any challenging conditions you may encounter in the wild."</p>
              <cite>― In-Game Description</cite>
            </blockquote>

            {/* Main Description */}
            <div className="mb-8 text-gray-200 font-sans text-[16px] leading-relaxed">
              <p>
                The Johansson .450 is a rifle perfect for hunting medium-large game.
              </p>
              <p>
                It is loosely based on the real life Ruger 450 Rifle.
              </p>
              <p>
                This weapon is available as part of the Hunters' Choice: Bolt-Action Rifle Pack DLC.
              </p>
            </div>

            {/* Table of Contents (styled like Home page) */}
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
                  </ol>
                )}
            </div>

            {/* Sections */}
            <div className="space-y-12 clear-both">
                
                {/* Ammo Section */}
                <div id="ammo">
                      <div className="flex items-center space-x-2 border-b border-gray-200/50 pb-2 mb-4">
                        <h2 className="text-2xl font-bold text-green-800">1. Ammo</h2>
                        <a href="#" className="text-green-600"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                      </div>
                      <p className="text-gray-700 text-[16px] mb-4">The Johansson .450 uses .450 Magnum ammunition:</p>

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
                    <p className="text-gray-300 text-[16px] mb-4">The following sights can be equipped on the Johansson .450:</p>
                    
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
                        Although the overall characteristics are passable, it has three major downsides:
                      </p>
                      <ul className="list-disc list-inside ml-4 space-y-2">
                        <li>
                          The accuracy of 40 is slightly higher than the .30-06 and 7mm rifles, but it's less accurate than other alternatives—or equally accurate to the Olsson .308. This means the scope sway will be a bit worse than others.
                        </li>
                        <li>
                          The .450 cartridge has worse penetration and expansion than the .303, .308, and .30-06. Those cartridges also cover Class 8 unlike the .450.
                        </li>
                        <li>
                          The unusual coverage of classes 4-7 can make it an awkward fit, since players mainly use rows: [1, 2-4, 4-8, 9] or [1-2, 3-6, 7-9]. How the Johansson will fit depends on what rifles you have and what animals are on the reserve. Using Yukon Valley as an example, you can bring a 2-4 rifle for foxes (2), the Johansson to cover wolves and caribou (6), and a 7-9 rifle for moose and bison (8 & 9).
                        </li>
                      </ul>
                    </div>
                </div>

                {/* Trivia, Gallery and Comparison sections removed per request */}

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