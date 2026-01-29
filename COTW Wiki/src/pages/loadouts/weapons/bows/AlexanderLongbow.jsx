import React, { useState } from 'react';
import WeaponsTable from '../../../../components/WeaponsTable';
import AlexanderLongbowAsh from '../../../../assets/AlexanderLongbowAsh.webp';
import AlexanderLongbowRough from '../../../../assets/AlexanderLongbowRough.webp';
import AlexanderLongbowAiming from '../../../../assets/Alexander_aiming.webp';
import AlexanderLongbowStanding from '../../../../assets/Alexander_normal.webp';
import AlexanderLongbowInGameStore from '../../../../assets/Alexander_stats.webp';
import AlexanderLongbowLacquered from '../../../../assets/AlexanderLongbowLacquered.webp'

// --- Main App Component ---
export default function App() {
  const [isTocOpen, setIsTocOpen] = useState(true);
  const [activeVariant, setActiveVariant] = useState('Lacquered');

  // Image URLs
  const AlexanderImg = "https://static.wikia.nocookie.net/thehuntercotw/images/5/5a/Bow_Alexander_Longbow.png";
  const RifleDiagram = "https://static.wikia.nocookie.net/thehuntercotw/images/0/07/Rifle_Comparison_Chart.png"; // Placeholder for bow comparison
  
  // Data for Variants Slider
  const variants = [
    { 
      name: "Lacquered", 
      image: AlexanderLongbowLacquered,
      desc: "A highly polished variant with a glossy finish."
    },
    { 
      name: "Rough", 
      image: AlexanderLongbowRough,
      desc: "The rough variant crafted from high-quality yew wood."
    },
    { 
      name: "Ash", 
      image: AlexanderLongbowAsh,
      desc: "A variant featuring a darker, ash wood finish."
    }
  ];

  // Data for Ammo Table
  const ammoData = [
    { name: "350 Grain Broadhead", pen: "15", exp: "0", class: "1-3", range: "20m", price: 500 },
    { name: "540 Grain Broadhead", pen: "75", exp: "0", class: "4-7", range: "20m", price: 750 },
    { name: "700 Grain Broadhead", pen: "90", exp: "0", class: "8-9", range: "20m", price: 900 },
  ];

  // Data for Sights List
  const sightsData = [
    "None (Traditional Bow)"
  ];

  return (
    <div className="min-h-screen text-gray-700 p-6 md:p-12 font-sans tracking-tight bg-white">
       {/* Add Google Font link dynamically */}
      <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
      
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <header className="flex flex-col md:flex-row md:items-center justify-between border-b border-gray-200 pb-4 mb-6">
          <h1 className="text-4xl md:text-5xl font-light text-green-800 mb-4 md:mb-0">
            Alexander Longbow
          </h1>

        </header>

        {/* Main Content Layout */}
        <div className="block">
            
            {/* Right Floated Infobox with Slider */}
            <div className="float-right w-72 ml-6 mb-4 bg-white border border-gray-200 shadow-xl font-sans">
                {/* Infobox Title */}
                <div className="bg-green-800 text-white text-center font-bold py-2 border-b border-green-900 tracking-wide text-lg">
                    Alexander Longbow
                </div>

                {/* Variant Slider / Tabs */}
                <div className="flex overflow-x-auto whitespace-nowrap bg-gray-50 border-b border-gray-200 scrollbar-hide">
                  {variants.map((variant) => (
                    <button
                      key={variant.name}
                      onClick={() => setActiveVariant(variant.name)}
                      className={`px-4 py-2 text-xs font-bold transition-colors uppercase flex-shrink-0 ${
                        activeVariant === variant.name 
                          ? "text-green-800 border-b-2 border-green-600" 
                          : "text-gray-500 hover:text-green-800"
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
                        style={{ width: '268.4px', height: '134.2px' }}
                        className="object-contain transition-opacity duration-300"
                        onError={(e) => {e.target.src = AlexanderImg}}
                    />
                </div>

                {/* General Information Header */}
                <div className="bg-green-800 text-white text-center font-bold py-1 border-y border-green-900 tracking-wide text-sm">
                    General Information
                </div>

                {/* General Information Data */}
                <div className="text-sm bg-white">
                    <div className="grid grid-cols-2 border-b border-gray-100 p-2">
                        <div className="font-bold text-gray-700">Value</div>
                        <div className="text-gray-600">0</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-100 p-2 bg-gray-50">
                        <div className="font-bold text-gray-700">Weight</div>
                        <div className="text-gray-600">2.5</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-100 p-2">
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
                    <div className="grid grid-cols-2 border-b border-gray-100 p-2">
                        <div className="font-bold text-gray-700">Accuracy</div>
                        <div className="text-gray-600">30</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-100 p-2 bg-gray-50">
                        <div className="font-bold text-gray-700">Recoil</div>
                        <div className="text-gray-600">15</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-100 p-2">
                        <div className="font-bold text-gray-700">Reload</div>
                        <div className="text-gray-600">100</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-100 p-2 bg-gray-50">
                        <div className="font-bold text-gray-700">Hipshot</div>
                        <div className="text-gray-600">12</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-100 p-2">
                        <div className="font-bold text-gray-700">Peak Draw Weight</div>
                        <div className="text-gray-600">60 lb</div>
                    </div>
                     <div className="grid grid-cols-2 border-b border-gray-100 p-2 bg-gray-50">
                        <div className="font-bold text-gray-700">Magazine</div>
                        <div className="text-gray-600">1</div>
                    </div>
                </div>
            </div>

            {/* Intro Quote */}
            <blockquote className="mb-6 border-l-4 border-green-800 pl-4 italic text-gray-600 font-sans text-sm">
                <p className="mb-2">"Contemporary bow-making techniques and flexible but sturdy materials make this stunning take on an ancient self bow effective even for modern hunters. A single stave of hickory and bowstring combine to form a silent but deadly weapon that epitomizes the resourcefulness of the people who used it to conquer prey."</p>
                <cite>— In-Game Description</cite>
            </blockquote>

            {/* Main Description */}
            <div className="mb-8 text-gray-700 font-sans text-[16px] leading-relaxed">
                <p>
                    <strong className="text-green-800">Alexander Longbow Lacquered</strong> is the second non-compound bow added to the game. As a classical bow, it cannot support sights like the Houyi Recurve Bow, despite showing a slot for it. Aiming without sight is made notably easier since the arrow's tip can be used as a sight, unlike its recurve counterpart. Unfortunately, the improvement in aiming comes at the cost of this bow being worse than the Houyi bows, except for recoil. Fortunately, they share the same arrows, so switching between them is much easier.
                </p>
                <p className="mt-4">
                    This weapon is available as part of the <a href="#" className="text-green-800 hover:underline">Silver Ridge Peaks</a> DLC.
                </p>
            </div>

            {/* Table of Contents */}
            <div className="mb-8 inline-block bg-gray-50 border border-gray-300 p-2 min-w-[250px]">
                <div className="flex justify-between items-center border-b border-gray-300 pb-1 mb-2">
                    <span className="font-bold text-gray-800 text-sm">Contents</span>
                    <button onClick={() => setIsTocOpen(!isTocOpen)} className="text-green-800 text-xs hover:underline">[{isTocOpen ? 'hide' : 'show'}]</button>
                </div>
                {isTocOpen && (
                    <ol className="list-decimal list-inside text-green-700 text-sm space-y-1 font-sans">
                        <li><a href="#ammo" className="hover:text-green-900 hover:underline">Arrows</a></li>
                        <li><a href="#sights" className="hover:text-green-900 hover:underline">Sights</a></li>
                        <li><a href="#variants" className="hover:text-green-900 hover:underline">Variants</a></li>
                        <li><a href="#gallery" className="hover:text-green-900 hover:underline">Gallery</a></li>
                    </ol>
                )}
            </div>

            {/* Sections */}
            <div className="space-y-12 clear-both">
                
                {/* Ammo Section */}
                <div id="ammo">
                    <div className="flex items-center space-x-2 border-b border-gray-300 pb-2 mb-4">
                        <h2 className="text-2xl font-bold text-green-800">1. Arrows</h2>
                        <a href="#" className="text-green-800"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                    </div>
                    <p className="text-gray-700 text-[16px] mb-4">Like all bows, it can use 3 different weights of arrows</p>
                    
                    <div className="bg-white border border-gray-300 text-sm md:text-base font-sans overflow-x-auto shadow-sm">
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
                                        <td className="p-3 text-green-700 hover:text-green-900 hover:underline cursor-pointer font-medium">{item.name}</td>
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
                    <div className="flex items-center space-x-2 border-b border-gray-300 pb-2 mb-4">
                        <h2 className="text-2xl font-bold text-green-800">2. Sights</h2>
                        <a href="#" className="text-green-800"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                    </div>
                    <p className="text-gray-700 text-[16px] mb-4">
                        The Alexander Longbow is a traditional bow and cannot be equipped with any sights. Aiming relies on player skill and estimation using the arrow shelf or hand position.
                    </p>
                </div>

                {/* Variants Section */}
                <div id="variants">
                    <div className="flex items-center space-x-2 border-b border-gray-300 pb-2 mb-4">
                        <h2 className="text-2xl font-bold text-green-800">3. Variants</h2>
                        <a href="#" className="text-green-800"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                    </div>
                    <div className="text-gray-700 font-sans text-[16px] leading-relaxed space-y-4">
                        <p>
                            The <strong className="text-green-800">Alexander Longbow Rough</strong> is a style that resembles a traditional bow. No lacquers, stains, or paints. Just a shaped branch, and a bowstring.
                        </p>
                        <p>
                            The <strong className="text-green-800">Alexander Longbow Ash</strong> is a variant features ash-white wood.
                        </p>
                    </div>
                </div>

                {/* Gallery */}
                <div id="gallery">
                    <div className="flex items-center space-x-2 border-b border-gray-300 pb-2 mb-4">
                        <h2 className="text-2xl font-bold text-green-800">4. Gallery</h2>
                        <a href="#" className="text-green-800"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                    </div>
                    <div className="flex flex-row justify-start gap-2 overflow-x-auto">
                        {[
                            { title: "Alexander Longbow, Ash Variation", img: AlexanderLongbowStanding }, 
                            { title: "Alexander Longbow Aimed", img: AlexanderLongbowAiming }, 
                            { title: "Alexander Longbow Stats", img: AlexanderLongbowInGameStore }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white border border-gray-200 shadow-sm p-2 flex-shrink-0" style={{ width: '240px', height: '162px' }}>
                                <div className="bg-gray-100 overflow-hidden relative group flex justify-center items-center h-[122px]">
                                    <img 
                                        src={item.img} 
                                        alt={item.title} 
                                        className="object-contain h-full w-full transition-transform duration-300 group-hover:scale-105"
                                    />
                                      <div className="absolute bottom-1 right-1 bg-black/60 p-0.5 rounded">
                                         <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                </div>
                                <p className="text-gray-700 text-xs mt-1 text-center font-medium">{item.title}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

        </div>

        <div className="h-32"></div>

        <div className="mt-12">
          <WeaponsTable />
        </div>

        <div className="h-32"></div>
      </div>
    </div>
  );
}