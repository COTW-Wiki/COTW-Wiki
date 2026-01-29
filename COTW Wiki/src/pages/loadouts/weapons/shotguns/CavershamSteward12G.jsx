import React, { useState } from 'react';
import CavershamImg from '../../../../assets/CavershamSteward12G.webp';
import CavershamStanding from '../../../../assets/Caversham_pose_1.webp';
import CavershamCrouching from '../../../../assets/Caversham_pose_2.webp';
import CavershamLying from '../../../../assets/Caversham_pose_3.webp';
import CavershamIronsight from '../../../../assets/Caversham_ironsight.webp';
import CavershamSteward12GGrankinsShotgun from '../../../../assets/CavershamSteward12GGrankinsShotgun.webp';
import CavershamSteward12GGamekeeper12G from '../../../../assets/CavershamSteward12GGamekeeper12G.webp';
import WeaponsTable from '../../../../components/WeaponsTable';
import ShotgunDiagram from '../../../../assets/Shotgun_diagram_2020.webp';

export default function App() {
  const [isTocOpen, setIsTocOpen] = useState(true);
    const [activeVariant, setActiveVariant] = useState('Normal');

    // Image (local asset)
    // const CavershamImg imported above
  
    // Data for Variants Slider (use the imported assets)
    const variants = [
        {
            name: "Normal",
            image: CavershamImg,
            desc: "Normal variant featuring engraved details and a polished wood stock."
        },
        {
            name: "Grankin's Shotgun",
            image: CavershamSteward12GGrankinsShotgun,
            desc: "Grankin's Shotgun is a unique variant that has seen plenty of use. This variant is obtainable through the questline in Medved-Taiga National Park."
        },
        {
            name: "Gamekeeper 12G",
            image: CavershamSteward12GGamekeeper12G,
            desc: "Gamekeeper 12G is a variant that features a lighter wooden body and a black engraved barrel."
        }
    ];

  // Data for Ammo Table
  const ammoData = [
    { name: "12 Gauge Birdshot", pen: 5, exp: 5, class: "1", range: "25-50m", price: 200 },
    { name: "12 Gauge Buckshot", pen: 15, exp: 15, class: "2-5", range: "25-50m", price: 260 },
    { name: "12 Gauge Slug", pen: 40, exp: 10, class: "4-8", range: "50-100m", price: 400 },
  ];

  // Data for Sights List
  const sightsData = [
    "Red Raptor Reflex Sight",
    "Meridian 1-4x20 Shotgun Scope"
  ];

    return (
    <div className="min-h-screen text-gray-800 p-6 md:p-12 font-sans tracking-tight bg-white" style={{ fontFamily: '"Roboto Condensed", sans-serif' }}>
       {/* Add Google Font link dynamically */}
      <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
      
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <header className="flex flex-col md:flex-row md:items-center justify-between border-b border-gray-700/20 pb-4 mb-6">
          <h1 className="text-4xl md:text-5xl font-light mb-4 md:mb-0">
            Caversham Steward 12G
          </h1>

        </header>

        {/* Main Content Layout */}
        <div className="block">
            
            {/* Right Floated Infobox with Slider */}
            <div className="float-right w-72 ml-6 mb-4 bg-white border border-gray-200 shadow-sm font-sans">
                {/* Infobox Title */}
                <div className="bg-gray-50 text-green-800 text-center font-bold py-2 border-b border-gray-200 tracking-wide text-lg">
                    Caversham Steward 12G
                </div>

                {/* Variant Slider / Tabs */}
                <div className="flex overflow-x-auto whitespace-nowrap bg-white border-b border-gray-200 scrollbar-hide">
                  {variants.map((variant) => (
                    <button
                      key={variant.name}
                      onClick={() => setActiveVariant(variant.name)}
                      className={`px-4 py-2 text-xs font-bold transition-colors uppercase flex-shrink-0 ${
                        activeVariant === variant.name 
                          ? "text-white border-b-2 border-[#5aaaf7]" 
                          : "text-gray-400 hover:text-white"
                      }`}
                    >
                      {variant.name}
                    </button>
                  ))}
                </div>
                
                {/* Image Area */}
                <div className="p-4 flex justify-center bg-white relative min-h-[160px] items-center">
                    <img
                        src={variants.find(v => v.name === activeVariant).image}
                        alt={activeVariant}
                        style={{ width: '268.4px', height: '134.2px', objectFit: 'contain' }}
                        className="transition-opacity duration-300"
                        onError={(e) => { e.target.src = CavershamImg }}
                    />
                </div>

                {/* General Information Header */}
                <div className="bg-gray-50 text-green-800 text-center font-bold py-1 border-y border-gray-200 tracking-wide text-sm">
                    General Information
                </div>

                {/* General Information Data */}
                <div className="text-sm bg-white">
                    <div className="grid grid-cols-2 border-b border-gray-700/30 p-2">
                        <div className="font-bold text-gray-300">Value</div>
                        <div className="text-gray-400">0</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-100 p-2 bg-gray-50">
                        <div className="font-bold text-gray-300">Weight</div>
                        <div className="text-gray-400">3.5</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-700/30 p-2">
                        <div className="font-bold text-gray-300">Score</div>
                        <div className="text-gray-400">1000</div>
                    </div>
                </div>

                {/* Statistics Header */}
                <div className="bg-gray-50 text-green-800 text-center font-bold py-1 border-y border-gray-200 tracking-wide text-sm">
                    Statistics
                </div>

                {/* Statistics Data */}
                <div className="text-sm bg-white">
                    <div className="grid grid-cols-2 border-b border-gray-700/30 p-2">
                        <div className="font-bold text-gray-300">Accuracy</div>
                        <div className="text-gray-400">33</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-100 p-2 bg-gray-50">
                        <div className="font-bold text-gray-300">Recoil</div>
                        <div className="text-gray-400">82</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-700/30 p-2">
                        <div className="font-bold text-gray-300">Reload</div>
                        <div className="text-gray-400">69</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-100 p-2 bg-gray-50">
                        <div className="font-bold text-gray-700">Hipshot</div>
                        <div className="text-gray-600">88</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-700/30 p-2">
                        <div className="font-bold text-gray-300">Magazine</div>
                        <div className="text-gray-400">2</div>
                    </div>
                </div>
            </div>

            {/* Intro Quote */}
            <blockquote className="mb-6 border-l-4 border-green-800 pl-4 italic text-gray-600 font-sans text-sm">
                <p className="mb-2">"This 12-gauge shotgun sports a classic over-and-under double-barrel design. It allows for very quick follow up shots, making this gun ideal for scenarios that involve fast-moving targets."</p>
                <cite>— In-Game Description</cite>
            </blockquote>

            {/* Main Description */}
            <div className="mb-8 text-gray-200 font-sans text-[16px] leading-relaxed">
                <p>
                    The Caversham Steward 12G was the first shotgun available in the game. Thanks to being able to use different shells, it can fill a number of roles. Useful as a secondary weapon when hunting too close to use a rifle, or if you've spotted upland game while traveling.
                </p>
            </div>

            {/* Table of Contents */}
            <div className="mb-8 inline-block bg-white border border-gray-200 p-2 min-w-[250px] rounded">
                <div className="flex justify-between items-center border-b border-gray-100 pb-1 mb-2">
                    <span className="font-bold text-gray-800 text-sm">Contents</span>
                    <button onClick={() => setIsTocOpen(!isTocOpen)} className="text-green-800 text-xs hover:underline">[{isTocOpen ? 'hide' : 'show'}]</button>
                </div>
                {isTocOpen && (
                    <ol className="list-decimal list-inside text-gray-700 text-sm space-y-1 font-sans">
                        <li><a href="#ammo" className="text-green-800 hover:underline">Ammo</a></li>
                        <li><a href="#sights" className="text-green-800 hover:underline">Sights</a></li>
                        <li><a href="#variants" className="text-green-800 hover:underline">Variants</a></li>
                        <li><a href="#trivia" className="text-green-800 hover:underline">Trivia</a></li>
                        <li><a href="#gallery" className="text-green-800 hover:underline">Gallery</a></li>
                        <li><a href="#comparison" className="text-green-800 hover:underline">Comparison to other shotguns</a></li>
                    </ol>
                )}
            </div>

            {/* Sections */}
            <div className="space-y-12 clear-both">
                
                {/* Ammo Section */}
                <div id="ammo">
                    <div className="flex items-center space-x-2 border-b border-gray-100 pb-2 mb-4">
                        <h2 className="text-2xl font-bold text-gray-800">1. Ammo</h2>
                        <a href="#" className="text-green-800"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                    </div>
                    <p className="text-gray-700 text-[16px] mb-4">As with most shotguns, three variants of its ammunition are available:</p>
                    
                    <div className="bg-white border border-gray-200 text-sm md:text-base font-sans overflow-x-auto">
                         <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-50 border-b-2 border-gray-100 text-gray-800 font-bold">
                                    <th className="p-3">Ammo</th>
                                    <th className="p-3">Penetration</th>
                                    <th className="p-3">Expansion</th>
                                    <th className="p-3">Class</th>
                                    <th className="p-3">Range</th>
                                    <th className="p-3">Price</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-700 divide-y divide-gray-100">
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
                    <p className="text-gray-300 text-[16px] mb-4">The following sights can be equipped on the Caversham Steward 12G:</p>
                    
                    <ul className="list-disc list-inside space-y-1 ml-4 text-[#5aaaf7] text-lg">
                        {sightsData.map((sight, idx) => (
                            <li key={idx}><a href="#" className="hover:underline">{sight}</a></li>
                        ))}
                    </ul>
                </div>

                {/* Variants Section */}
                <div id="variants">
                    <div className="flex items-center space-x-2 border-b border-gray-600/50 pb-2 mb-4">
                        <h2 className="text-2xl font-bold text-white">3. Variants</h2>
                        <a href="#" className="text-[#5aaaf7]"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                    </div>
                    <div className="text-gray-300 font-sans text-[16px] leading-relaxed space-y-4">
                        <p>
                            <strong className="text-white">Caversham Steward 12G Standard</strong> features an engraved receiver and high-quality wood stock.
                        </p>
                    </div>
                </div>

                {/* Analysis removed per request */}

                {/* Trivia */}
                <div id="trivia">
                    <div className="flex items-center space-x-2 border-b border-gray-600/50 pb-2 mb-4">
                        <h2 className="text-2xl font-bold text-white">4. Trivia</h2>
                        <a href="#" className="text-[#5aaaf7]"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                    </div>
                    <p className="text-gray-300 font-sans text-[16px]">
                        The Caversham Steward is modeled after its real-life counterpart of the FedArm FTS Over & Under.
                    </p>
                </div>

                {/* Gallery */}
                <div id="gallery">
                    <div className="flex items-center space-x-2 border-b border-gray-600/50 pb-2 mb-4">
                        <h2 className="text-2xl font-bold text-white">5. Gallery</h2>
                        <a href="#" className="text-[#5aaaf7]"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                        {[{ title: 'Standing', img: CavershamStanding }, { title: 'Crouching', img: CavershamCrouching }, { title: 'Lying', img: CavershamLying }, { title: 'Iron sight', img: CavershamIronsight }].map((item, idx) => (
                            <div key={idx} className="bg-white border border-gray-200 p-2" style={{ width: '215px', height: '162px' }}>
                                <div className="bg-gray-50 overflow-hidden relative group flex justify-center items-center h-[122px]">
                                    <img src={item.img} alt={item.title} style={{ width: '268.4px', height: '134.2px', objectFit: 'contain' }} />
                                </div>
                                <p className="text-gray-800 text-xs mt-1 text-center">{item.title}</p>
                            </div>
                        ))}
                    </div>
                </div>

                 {/* Comparison */}
                <div id="comparison">
                    <div className="flex items-center space-x-2 border-b border-gray-600/50 pb-2 mb-4">
                        <h2 className="text-2xl font-bold text-white">6. Comparison to other shotguns</h2>
                        <a href="#" className="text-[#5aaaf7]"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                    </div>
                        <div className="bg-white border border-gray-200 p-2 inline-block">
                            <div className="bg-gray-100 overflow-hidden relative group flex justify-center items-center">
                                    <img 
                                    src={ShotgunDiagram} 
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