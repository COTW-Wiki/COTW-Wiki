import React, { useState } from 'react';
import CacciatoreStandingImg from '../../../../assets/Cacciatore_pose_1.webp';
import CacciatoreCrouchImg from '../../../../assets/Cacciatore_pose_2.webp';
import CacciatoreLyingImg from '../../../../assets/Cacciatore_pose_3.webp';
import CacciatoreIronImg from '../../../../assets/Cacciatore_ironsight.webp';
import CacciatoreChart from '../../../../assets/Shotgun_diagram_2020.webp';
import CacciatoreImg from '../../../../assets/Cacciatore12G.webp';
import WeaponsTable from '../../../../components/WeaponsTable';

// --- Main App Component ---
export default function App() {
    const [isTocOpen, setIsTocOpen] = useState(true);

    // Use imported assets
    const RifleDiagram = CacciatoreChart; // comparison chart

    // Using the imported images for gallery items
    const CacciatoreStanding = CacciatoreStandingImg;
    const CacciatoreCrouching = CacciatoreCrouchImg;
    const CacciatoreLying = CacciatoreLyingImg;
    const CacciatoreIronSight = CacciatoreIronImg;

  // Data for Ammo Table
  const ammoData = [
    { name: "12 Gauge Birdshot", pen: 0, exp: 0, class: "1", range: "25m", price: 180 },
    { name: "12 Gauge Buckshot", pen: 5, exp: 0, class: "2-5", range: "25m", price: 530 },
    { name: "12 Gauge Slug", pen: 40, exp: 19, class: "4-8", range: "50m", price: 880 },
  ];

  // Data for Sights List
  const sightsData = [
    "Red Raptor Reflex Sight",
    "Meridian 1-4x20 Shotgun Scope"
  ];

    return (
        <div className="min-h-screen text-gray-900 p-6 md:p-12 font-sans tracking-tight" style={{ fontFamily: '"Roboto Condensed", sans-serif' }}>
       {/* Add Google Font link dynamically */}
      <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
      
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <header className="flex flex-col md:flex-row md:items-center justify-between border-b border-gray-200 pb-4 mb-6">
          <h1 className="text-4xl md:text-5xl font-light mb-4 md:mb-0">
            Cacciatore 12G
          </h1>

        </header>

        {/* Main Content Layout */}
        <div className="block">
            
            {/* Right Floated Infobox with Slider */}
            <div className="float-right w-72 ml-6 mb-4 bg-white border border-gray-200 shadow-sm font-sans">
                {/* Infobox Title */}
                <div className="bg-white text-green-800 text-center font-bold py-2 border-b border-gray-200 tracking-wide text-lg">
                    Cacciatore 12G
                </div>

                                {/* Image Area */}
                                <div className="p-4 flex justify-center bg-white relative min-h-[160px] items-center">
                                    <img 
                                        src={CacciatoreImg} 
                                        alt="Cacciatore 12G" 
                                        style={{ width: '268.4px', height: '134.2px' }}
                                        className="object-contain transition-opacity duration-300"
                                        onError={(e) => {e.target.src = CacciatoreImg}}
                                    />
                                </div>

                {/* General Information Header */}
                <div className="bg-white text-gray-700 text-center font-bold py-1 border-y border-gray-200 tracking-wide text-sm">
                    General Information
                </div>

                {/* General Information Data */}
                <div className="text-sm bg-white">
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2">
                        <div className="font-bold text-gray-700">Value</div>
                        <div className="text-gray-800">6000</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2 bg-gray-50">
                        <div className="font-bold text-gray-700">Weight</div>
                        <div className="text-gray-800">3.5</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2">
                        <div className="font-bold text-gray-700">Score</div>
                        <div className="text-gray-800">2200</div>
                    </div>
                </div>

                {/* Statistics Header */}
                <div className="bg-white text-gray-700 text-center font-bold py-1 border-y border-gray-200 tracking-wide text-sm">
                    Statistics
                </div>

                {/* Statistics Data */}
                <div className="text-sm bg-white">
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2">
                        <div className="font-bold text-gray-700">Accuracy</div>
                        <div className="text-gray-800">33</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2 bg-gray-50">
                        <div className="font-bold text-gray-700">Recoil</div>
                        <div className="text-gray-800">82</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2">
                        <div className="font-bold text-gray-700">Reload</div>
                        <div className="text-gray-800">29</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2 bg-gray-50">
                        <div className="font-bold text-gray-700">Hipshot</div>
                        <div className="text-gray-800">88</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2">
                        <div className="font-bold text-gray-700">Magazine</div>
                        <div className="text-gray-800">6</div>
                    </div>
                </div>
            </div>

            {/* Intro Quote */}
            <blockquote className="mb-6 border-l-4 border-green-800 pl-4 italic text-gray-700 font-sans text-sm">
                <p className="mb-2">"This chrome-barreled 12 gauge pump-action shotgun, with classic walnut stock and forearm, can be used for almost any species; just make sure you've got the right ammo for the job. Powerful at close range, making it the perfect weapon for those who think they've got stalking down to a fine art."</p>
                <cite>— In-Game Description</cite>
            </blockquote>

            {/* Main Description */}
            <div className="mb-8 text-gray-800 font-sans text-[16px] leading-relaxed">
                <p>
                    The <strong className="text-green-800">Cacciatore 12G</strong> is a classic pump-action shotgun. The 6 shell capacity allows you to get multiple shots in rapid succession for hunting birds, or when you stumble onto a group of deer. Thanks to the various shell types, this shotgun can be a great backup option in almost any condition.
                </p>
            </div>

            {/* Table of Contents */}
                <div className="mb-8 inline-block bg-white border border-gray-200 p-2 min-w-[250px]">
                    <div className="flex justify-between items-center border-b border-gray-200 pb-1 mb-2">
                        <span className="font-bold text-gray-800 text-sm">Contents</span>
                        <button onClick={() => setIsTocOpen(!isTocOpen)} className="text-green-800 text-xs hover:underline">[{isTocOpen ? 'hide' : 'show'}]</button>
                    </div>
                    {isTocOpen && (
                        <ol className="list-decimal list-inside text-gray-700 text-sm space-y-1 font-sans">
                            <li><a href="#ammo" className="hover:text-gray-900 hover:underline">Ammo</a></li>
                            <li><a href="#sights" className="hover:text-gray-900 hover:underline">Sights</a></li>
                            <li><a href="#analysis" className="hover:text-gray-900 hover:underline">Analysis</a></li>
                            <li><a href="#trivia" className="hover:text-gray-900 hover:underline">Trivia</a></li>
                            <li><a href="#gallery" className="hover:text-gray-900 hover:underline">Gallery</a></li>
                            <li><a href="#comparison" className="hover:text-gray-900 hover:underline">Comparison to other shotguns</a></li>
                        </ol>
                    )}
                </div>

            {/* Sections */}
            <div className="space-y-12 clear-both">
                
                {/* Ammo Section */}
                <div id="ammo">
                    <div className="flex items-center space-x-2 border-b border-gray-200 pb-2 mb-4">
                        <h2 className="text-2xl font-bold text-gray-900">1. Ammo</h2>
                        <a href="#" className="text-green-800"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                    </div>
                    <p className="text-gray-800 text-[16px] mb-4">As with most shotguns, three variants of its ammunition are available:</p>
                    
                    <div className="bg-white border border-gray-200 text-sm md:text-base font-sans overflow-x-auto">
                         <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-50 border-b-2 border-gray-200 text-gray-800 font-bold">
                                    <th className="p-3">Ammo</th>
                                    <th className="p-3">Penetration</th>
                                    <th className="p-3">Expansion</th>
                                    <th className="p-3">Class</th>
                                    <th className="p-3">Range</th>
                                    <th className="p-3">Price</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-800 divide-y divide-gray-200">
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
                    <div className="flex items-center space-x-2 border-b border-gray-200 pb-2 mb-4">
                        <h2 className="text-2xl font-bold text-gray-900">2. Sights</h2>
                        <a href="#" className="text-green-800"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                    </div>
                    <p className="text-gray-800 text-[16px] mb-4">The following sights can be equipped on the Cacciatore 12G:</p>
                    
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
                        <h2 className="text-2xl font-bold text-gray-900">4. Analysis</h2>
                        <a href="#" className="text-green-800"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                    </div>
                    <div className="text-gray-800 font-sans text-[16px] leading-relaxed space-y-4">
                        <p>
                            A better version of Couso Model 1897 but requires points to be obtained.
                        </p>
                        <p>
                            Good for short range bird hunting. Buckshot, as in all cases in this game, is ineffective, has a ridiculously low penetration and range, which leads to misses and ruined trophies. Shooting slugs is not very effective since rifles have a much longer range.
                        </p>
                    </div>
                </div>

                {/* Trivia */}
                <div id="trivia">
                    <div className="flex items-center space-x-2 border-b border-gray-200 pb-2 mb-4">
                        <h2 className="text-2xl font-bold text-gray-900">5. Trivia</h2>
                        <a href="#" className="text-green-800"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                    </div>
                    <p className="text-gray-800 font-sans text-[16px]">
                        The Cacciatore 12G is modeled after its real-life counterpart of the Remington 870.
                    </p>
                </div>

                {/* Gallery */}
                <div id="gallery">
                    <div className="flex items-center space-x-2 border-b border-gray-200 pb-2 mb-4">
                        <h2 className="text-2xl font-bold text-gray-900">6. Gallery</h2>
                        <a href="#" className="text-green-800"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                        {[
                            { title: "Standing", img: CacciatoreStanding }, 
                            { title: "Crouching", img: CacciatoreCrouching }, 
                            { title: "Lying", img: CacciatoreLying }, 
                            { title: "Iron sight", img: CacciatoreIronSight } 
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white border border-gray-200 p-2" style={{ width: '240px', height: '162px' }}>
                                <div className="bg-gray-50 overflow-hidden relative group flex justify-center items-center h-[122px]">
                                     <img 
                                        src={item.img} 
                                        alt={item.title} 
                                        className="object-contain h-full w-full"
                                     />
                                      <div className="absolute bottom-1 right-1 bg-black/10 p-0.5 rounded">
                                         <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                    <div className="flex items-center space-x-2 border-b border-gray-600/50 pb-2 mb-4">
                        <h2 className="text-2xl font-bold text-white">7. Comparison to other shotguns</h2>
                        <a href="#" className="text-[#5aaaf7]"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                    </div>
                        <div className="bg-white border border-gray-200 p-2 inline-block">
                            <div className="bg-gray-100 overflow-hidden relative group flex justify-center items-center">
                                    <img 
                                    src={RifleDiagram} 
                                    alt="Shotgun Comparison Chart" 
                                    style={{ width: '400px', height: '200px' }}
                                    className="object-contain"
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

            {/* Shared weapons table */}
            <div className="mt-8">
                <WeaponsTable />
            </div>

        </div>


        <div className="h-32"></div>
      </div>
    </div>
  );
}