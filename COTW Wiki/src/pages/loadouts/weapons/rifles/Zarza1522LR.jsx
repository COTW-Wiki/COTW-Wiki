import React, { useState } from 'react';
import WeaponsTable from '../../../../components/WeaponsTable';
import Zarza1522LRShadow from '../../../../assets/Zarza-1522LRShadow.webp';
import Zarza1522LRPredator from '../../../../assets/Zarza-1522LRPredator.webp';
import ZarzaTwitter from '../../../../assets/ZarzaTwitter.webp';

export default function App() {
  const [isTocOpen, setIsTocOpen] = useState(true);
  const [activeVariant, setActiveVariant] = useState('Shadow');

  // Data for Variants Slider
  const variants = [
    { 
      name: "Shadow", 
      image: Zarza1522LRShadow,
      desc: "The default variant, likely featuring a dark, tactical finish."
    },
    { 
      name: "Predator", 
      image: Zarza1522LRPredator,
      desc: "A variant often featuring a camouflage pattern suitable for predator hunting."
    }
  ];

  // Data for Ammo Table
  const ammoData = [
    { name: ".22LR Truncated Cone", pen: 17, exp: 1, class: "1", range: "100m", price: 250 },
    { name: ".22LR Jacketed Hollow-Point", pen: 5, exp: 10, class: "1", range: "100m", price: 200 },
  ];

  // Data for Sights List
  const sightsData = [
    "Ascent 1-4x24 Rifle Scope",
    "Hyperion 4-8x42 Rifle Scope",
    "Odin 4-12x33 Rifle Scope",
    "Argus 8-16x50 Rifle Scope",
    "GenZero 1-4x20 Night Vision Rifle Scope",
    "Angler 4-8x100 Night Vision Rifle Scope",
    "Red Raptor Reflex Sight"
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans tracking-tight">
      <div className="max-w-5xl mx-auto p-6 md:p-12">
        {/* Header Section */}
        <header className="flex flex-col md:flex-row md:items-center justify-between border-b border-gray-300 pb-4 mb-6">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4 md:mb-0">
            Zarza-15 .22LR
          </h1>
        </header>

        {/* Main Content Layout */}
        <div className="block">
            
            {/* Right Floated Infobox with Slider */}
            <div className="float-right w-72 ml-6 mb-4 bg-gray-100 border border-gray-300 shadow-lg font-sans">
                {/* Infobox Title */}
                <div className="bg-green-800 text-white text-center font-bold py-2 border-b border-gray-300 tracking-wide text-lg">
                    Zarza-15 .22LR
                </div>

                {/* Variant Slider / Tabs */}
                <div className="flex overflow-x-auto whitespace-nowrap bg-gray-200 border-b border-gray-300 scrollbar-hide">
                  {variants.map((variant) => (
                    <button
                      key={variant.name}
                      onClick={() => setActiveVariant(variant.name)}
                      className={`px-4 py-2 text-xs font-bold transition-colors uppercase flex-shrink-0 ${
                        activeVariant === variant.name 
                          ? "text-gray-900 border-b-2 border-green-800 bg-gray-300" 
                          : "text-gray-500 hover:text-gray-800 hover:bg-gray-200"
                      }`}
                    >
                      {variant.name}
                    </button>
                  ))}
                </div>
                
                {/* Image Area */}
                <div className="p-4 flex justify-center bg-white relative min-h-[160px] items-center border-b border-gray-300">
                    <img 
                        src={variants.find(v => v.name === activeVariant).image} 
                        alt={activeVariant} 
                        style={{ width: '268.4px', height: '134.2px', objectFit: 'contain' }}
                        className="transition-opacity duration-300"
                    />
                </div>

                {/* General Information Header */}
                <div className="bg-green-800 text-white text-center font-bold py-1 border-y border-gray-300 tracking-wide text-sm">
                    General Information
                </div>

                {/* General Information Data */}
                <div className="text-sm bg-gray-50">
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2">
                        <div className="font-bold text-gray-700">Value</div>
                        <div className="text-gray-600">0</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2 bg-gray-100">
                        <div className="font-bold text-gray-700">Weight</div>
                        <div className="text-gray-600">2.5</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2">
                        <div className="font-bold text-gray-700">Score</div>
                        <div className="text-gray-600">0</div>
                    </div>
                </div>

                {/* Statistics Header */}
                <div className="bg-green-800 text-white text-center font-bold py-1 border-y border-gray-300 tracking-wide text-sm">
                    Statistics
                </div>

                {/* Statistics Data */}
                <div className="text-sm bg-gray-50">
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2">
                        <div className="font-bold text-gray-700">Accuracy</div>
                        <div className="text-gray-600">100</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2 bg-gray-100">
                        <div className="font-bold text-gray-700">Recoil</div>
                        <div className="text-gray-600">8</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2">
                        <div className="font-bold text-gray-700">Reload</div>
                        <div className="text-gray-600">59</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2 bg-gray-100">
                        <div className="font-bold text-gray-700">Hipshot</div>
                        <div className="text-gray-600">86</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2">
                        <div className="font-bold text-gray-700">Magazine</div>
                        <div className="text-gray-600">5</div>
                    </div>
                </div>
            </div>

            {/* Intro Quote */}
            <blockquote className="mb-6 border-l-4 border-green-800 pl-4 italic text-gray-600 font-serif text-sm bg-gray-50 p-2">
                <p className="mb-2">"One of the most popular and versatile rifles ever, the ZARZA-15 .22lr is incredibly common among hunters thanks to its reliability and beautiful, modular and compact design. Chambered in .22lr and with a custom 16 inch barrel, it's the ultimate companion when it comes to small-sized prey."</p>
                <cite>— In-Game Description</cite>
            </blockquote>

            {/* Main Description */}
            <div className="mb-8 text-gray-800 font-serif text-[16px] leading-relaxed">
                <p>
                    The <strong className="text-gray-900">Zarza-15 .22LR</strong> is a semi-automatic rifle meant for hunting small game. Its incredibly high accuracy makes hitting even the smallest targets a breeze.
                </p>
                <p className="mt-4">
                    This weapon is available as part of the <a href="#" className="text-green-800 hover:underline font-bold">Modern Rifle Pack</a> DLC.
                </p>
            </div>

            {/* Table of Contents */}
            <div className="mb-8 inline-block bg-gray-100 border border-gray-300 p-4 min-w-[250px] rounded-sm shadow-sm">
                <div className="flex justify-between items-center border-b border-gray-300 pb-2 mb-2">
                    <span className="font-bold text-gray-900 text-sm">Contents</span>
                    <button onClick={() => setIsTocOpen(!isTocOpen)} className="text-green-800 text-xs hover:underline">[{isTocOpen ? 'hide' : 'show'}]</button>
                </div>
                {isTocOpen && (
                    <ol className="list-decimal list-inside text-gray-700 text-sm space-y-1 font-sans">
                        <li><a href="#ammo" className="hover:text-green-800 hover:underline">Ammo</a></li>
                        <li><a href="#sights" className="hover:text-green-800 hover:underline">Sights</a></li>
                        <li><a href="#analysis" className="hover:text-green-800 hover:underline">Analysis</a></li>
                        <li><a href="#trivia" className="hover:text-green-800 hover:underline">Trivia</a></li>
                        <li><a href="#gallery" className="hover:text-green-800 hover:underline">Gallery</a></li>
                    </ol>
                )}
            </div>

            {/* Sections */}
            <div className="space-y-12 clear-both">
                
                {/* Ammo Section */}
                <div id="ammo">
                    <div className="flex items-center space-x-2 border-b border-gray-300 pb-2 mb-4">
                        <h2 className="text-2xl font-bold text-gray-800 font-serif">1. Ammo</h2>
                        <a href="#" className="text-green-800 hover:text-gray-600"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                    </div>
                    <p className="text-gray-700 text-[16px] mb-4 font-serif">This rifle has two types of ammo available:</p>
                    
                    <div className="bg-white border border-gray-300 text-sm md:text-base font-sans overflow-x-auto shadow-sm">
                         <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-200 border-b-2 border-gray-300 text-gray-800 font-bold">
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
                                        <td className="p-3 text-green-800 hover:underline cursor-pointer font-bold">{item.name}</td>
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
                    <p className="text-gray-600 mt-2 text-sm font-serif">This is the same ammo that <a href="#" className="text-green-800 hover:underline">Virant .22LR</a> and <a href="#" className="text-green-800 hover:underline">Andersson .22LR</a> use.</p>
                </div>

                {/* Sights Section */}
                <div id="sights">
                    <div className="flex items-center space-x-2 border-b border-gray-300 pb-2 mb-4">
                        <h2 className="text-2xl font-bold text-gray-800 font-serif">2. Sights</h2>
                        <a href="#" className="text-green-800 hover:text-gray-600"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                    </div>
                    <p className="text-gray-700 text-[16px] mb-4 font-serif">The following sights can be equipped on the Zarza-15 .22LR:</p>
                    
                    <ul className="list-disc list-inside space-y-1 ml-4 text-green-800 text-lg font-serif">
                        {sightsData.map((sight, idx) => (
                            <li key={idx}><a href="#" className="hover:underline">{sight}</a></li>
                        ))}
                    </ul>
                </div>

                {/* Analysis */}
                <div id="analysis">
                    <div className="flex items-center space-x-2 border-b border-gray-300 pb-2 mb-4">
                        <h2 className="text-2xl font-bold text-gray-800 font-serif">3. Analysis</h2>
                        <a href="#" className="text-green-800 hover:text-gray-600"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                    </div>
                    <div className="text-gray-700 font-serif text-[16px] leading-relaxed space-y-4">
                        <p>
                            This rifle is a functional copy of the <a href="#" className="text-green-800 hover:underline">Virant .22LR</a> rifle and <a href="#" className="text-green-800 hover:underline">Andersson .22LR</a> pistol from Weapon Packs 1 and 3 respectively. It has similar characteristics, but its magazine capacity is only half of the Virant and Andersson (5 rounds for the Zarza compared to 10 for the Virant and Andersson).
                        </p>
                        <p>
                            Despite the smaller magazine, many players prefer its modern handling and quick reload speed.
                        </p>
                    </div>
                </div>

                {/* Trivia */}
                <div id="trivia">
                    <div className="flex items-center space-x-2 border-b border-gray-300 pb-2 mb-4">
                        <h2 className="text-2xl font-bold text-gray-800 font-serif">4. Trivia</h2>
                        <a href="#" className="text-green-800 hover:text-gray-600"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                    </div>
                    <ul className="list-disc list-inside text-gray-700 font-serif text-[16px] space-y-2">
                        <li>The ZARZA-15 .22LR is modeled after its real-life counterpart of the AR-15 which is produced in various models by various companies.</li>
                        <li>The rifle's model is inaccurate to what it's supposed to be. While it is chambered for the .22lr, the actual magazine and chamber are modeled after rifles that chamber 5.56.</li>
                    </ul>
                </div>

                {/* Gallery */}
                <div id="gallery">
                    <div className="flex items-center space-x-2 border-b border-gray-300 pb-2 mb-4">
                        <h2 className="text-2xl font-bold text-gray-800 font-serif">5. Gallery</h2>
                        <a href="#" className="text-green-800 hover:text-gray-600"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                    </div>
                    <div className="flex flex-wrap gap-4">
                        <div className="bg-gray-100 border border-gray-300 p-2 shadow-sm">
                            <div className="bg-gray-200 overflow-hidden relative group flex items-center justify-center">
                                <img 
                                    src={ZarzaTwitter} 
                                    alt="Promotional" 
                                    style={{ width: '200px', height: '120px', objectFit: 'cover' }}
                                />
                            </div>
                            <p className="text-gray-700 text-sm mt-2 font-serif">Promotional</p>
                        </div>
                    </div>
                </div>

            </div>
            
            {/* Weapons Table */}
            <div className="mt-12 pt-8 border-t border-gray-300">
                <WeaponsTable activeItem="Zarza-15 .22LR" />
            </div>
        </div>
      </div>
    </div>
  );
}