import React, { useState } from 'react';
import OlssonImgMain from '../../../../assets/OlssonModel23308.webp';
import OlssonImgStanding from '../../../../assets/OlssonModel23308Standing.webp';
import OlssonImgCrouching from '../../../../assets/OlssonModel23308Crouching.webp';
import OlssonImgLying from '../../../../assets/OlssonModel23308Lying.webp';
import OlssonImgIronSight from '../../../../assets/OlssonModel23308IronSight.webp';
import WeaponsTable from '../../../../components/WeaponsTable';
import RifleDiagram from '../../../../assets/Rifle_diagram_2020.webp';

// --- Main App Component ---
export default function App() {
    const [isTocOpen, setIsTocOpen] = useState(true);

    // Image URLs / imported assets
    // (use the imported `RifleDiagram` asset above; removed duplicate URL const)
  
    // (Variants removed per request)

  // Data for Ammo Table
  const ammoData = [
    { name: ".308 Soft-Point", pen: 19, exp: 53, class: "4-8", range: "150m", price: 440 },
    { name: ".308 Polymer-Tip", pen: 42, exp: 12, class: "4-8", range: "150m", price: 600 },
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
                    <h1 className="text-4xl md:text-5xl font-light mb-4 md:mb-0 text-green-800">
                        Olsson Model 23 .308
                    </h1>

        </header>

        {/* Main Content Layout */}
        <div className="block">
            
            {/* Right Floated Infobox (light theme) */}
            <div className="float-right w-72 ml-6 mb-4 bg-white border border-gray-200 shadow-xl font-sans">
                <div className="bg-green-800 text-white text-center font-bold py-2 border-b border-green-900 tracking-wide text-lg">
                    Olsson Model 23 .308
                </div>

                <div className="p-4 flex justify-center bg-gray-50">
                    <img 
                        src={OlssonImgMain} 
                        alt="Olsson Model 23 .308" 
                        className="object-contain"
                        style={{ width: '268.4px', height: '134.2px' }}
                        onError={(e) => {e.target.src = 'https://static.wikia.nocookie.net/thehuntercotw/images/b/b8/Rifle_Olsson_Model_23.png'}}
                    />
                </div>

                <div className="bg-green-800 text-white text-center font-bold py-1 border-y border-green-900 tracking-wide text-sm">
                    General Information
                </div>

                <div className="text-sm bg-white">
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2">
                        <div className="font-bold text-gray-700">Value</div>
                        <div className="text-green-800">7500</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2 bg-gray-50">
                        <div className="font-bold text-gray-700">Weight</div>
                        <div className="text-green-800">4.0</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2">
                        <div className="font-bold text-gray-700">Score</div>
                        <div className="text-green-800">0</div>
                    </div>
                </div>

                <div className="bg-green-800 text-white text-center font-bold py-1 border-y border-green-900 tracking-wide text-sm">
                    Statistics
                </div>

                <div className="text-sm bg-white">
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2">
                        <div className="font-bold text-gray-700">Accuracy</div>
                        <div className="text-green-800">40</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2 bg-gray-50">
                        <div className="font-bold text-gray-700">Recoil</div>
                        <div className="text-green-800">79</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2">
                        <div className="font-bold text-gray-700">Reload</div>
                        <div className="text-green-800">40</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2 bg-gray-50">
                        <div className="font-bold text-gray-700">Hipshot</div>
                        <div className="text-green-800">27</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2">
                        <div className="font-bold text-gray-700">Magazine</div>
                        <div className="text-green-800">4</div>
                    </div>
                </div>
            </div>

            {/* Intro Quote */}
            <blockquote className="mb-6 border-l-4 border-green-800 pl-4 italic text-gray-600 font-sans text-sm">
                <p className="mb-2">"A modern bolt-action rifle up to the challenge of the most demanding hunts. Every inch of the Olsson Model 23 is designed and manufactured with the utmost care using premium components. Sporting features such as a fluted bolt design for smoother operation, a carbon fibre stock and a stainless steel barrel. Chambered in the popular .308 Win makes it a great choice for any medium to large game hunter."</p>
                <cite>— In-Game Description</cite>
            </blockquote>

            {/* Main Description */}
            <div className="mb-8 text-gray-700 font-sans text-[16px] leading-relaxed">
                <p>
                    The Olsson Model 23 .308 is a rifle that is useful for hunting many different classes of game.
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
                        <li><a href="#ammo" className="hover:text-green-800 hover:underline">Ammo</a></li>
                        <li><a href="#sights" className="hover:text-green-800 hover:underline">Sights</a></li>

                        <li><a href="#analysis" className="hover:text-green-800 hover:underline">Analysis</a></li>
                        <li><a href="#trivia" className="hover:text-green-800 hover:underline">Trivia</a></li>
                        <li><a href="#gallery" className="hover:text-green-800 hover:underline">Gallery</a></li>
                        <li><a href="#comparison" className="hover:text-green-800 hover:underline">Comparison to other rifles</a></li>
                    </ol>
                )}
            </div>

            

            {/* Sections */}
            <div className="space-y-12 clear-both">
                
                {/* Ammo Section */}
                <div id="ammo">
                    <div className="flex items-center space-x-2 border-b border-green-800/20 pb-2 mb-4">
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
                    <div className="flex items-center space-x-2 border-b border-green-800/20 pb-2 mb-4">
                        <h2 className="text-2xl font-bold text-green-800">2. Sights</h2>
                        <a href="#" className="text-green-800"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                    </div>
                    <p className="text-gray-700 text-[16px] mb-4">The following sights can be equipped on the Olsson Model 23:</p>
                    
                    <ul className="list-disc list-inside space-y-1 ml-4 text-green-700 text-lg">
                        {sightsData.map((sight, idx) => (
                            <li key={idx}><a href="#" className="text-green-600 hover:underline">{sight}</a></li>
                        ))}
                    </ul>
                </div>

                {/* Variants removed per request */}

                {/* Analysis */}
                <div id="analysis">
                    <div className="flex items-center space-x-2 border-b border-gray-600/50 pb-2 mb-4">
                        <h2 className="text-2xl font-bold text-white">4. Analysis</h2>
                        <a href="#" className="text-[#5aaaf7]"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                    </div>
                    <div className="text-gray-300 font-sans text-[16px] leading-relaxed space-y-4">
                        <p>
                            A fantastic rifle for class 4-8. Very similar to F.L. Sporter .303 Burnished and ZARZA-10 .308. Has slightly more damage, but noticeably lower accuracy (more aim wobble) and a smaller magazine (although a 4 round magazine is more than enough in most situations).
                        </p>
                    </div>
                </div>

                {/* Trivia */}
                <div id="trivia">
                    <div className="flex items-center space-x-2 border-b border-gray-600/50 pb-2 mb-4">
                        <h2 className="text-2xl font-bold text-white">5. Trivia</h2>
                        <a href="#" className="text-[#5aaaf7]"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                    </div>
                    <p className="text-gray-300 font-sans text-[16px]">
                        The Olsson Model 23 is based of its real-life counterpart of the Nosler M21.
                    </p>
                </div>

                {/* Gallery */}
                <div id="gallery">
                    <div className="flex items-center space-x-2 border-b border-green-800/20 pb-2 mb-4">
                        <h2 className="text-2xl font-bold text-green-800">6. Gallery</h2>
                        <a href="#" className="text-green-800"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                        {[
                            { title: "Standing", img: OlssonImgStanding },
                            { title: "Crouching", img: OlssonImgCrouching },
                            { title: "Lying", img: OlssonImgLying },
                            { title: "Iron sight", img: OlssonImgIronSight }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white border border-gray-200 p-2" style={{ width: '240px', height: '162px' }}>
                                <div className="bg-gray-100 overflow-hidden relative group flex justify-center items-center h-[122px]">
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

                 {/* Comparison Placeholder */}
                <div id="comparison">
                    <div className="flex items-center space-x-2 border-b border-green-800/20 pb-2 mb-4">
                        <h2 className="text-2xl font-bold text-gray-900">7. Comparison to other rifles</h2>
                        <a href="#" className="text-green-600"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                    </div>
                    <div className="relative group">
                        <img 
                                src={RifleDiagram} 
                                alt="Rifle Comparison Chart" 
                                className="border border-gray-200 shadow-md block bg-white rounded"
                                style={{ width: '400px', height: '200px', objectFit: 'contain' }}
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

        

            {/* Weapons Table (bottom) */}
            <div className="mt-12">
                <WeaponsTable activeItem={"Olsson Model 23 .308"} />
            </div>

        <div className="h-32"></div>
      </div>
    </div>
  );
}