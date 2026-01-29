import React, { useState } from 'react';
import WeaponsTable from '../../../../components/WeaponsTable';
import Zarza15223Midnight from '../../../../assets/Zarza-15223Midnight.webp';
import Zarza15223Ambusher from '../../../../assets/Zarza-15223Ambusher.webp';
import Zarza223 from '../../../../assets/Zarza223.webp';

export default function App() {
  const [isTocOpen, setIsTocOpen] = useState(true);
  const [activeVariant, setActiveVariant] = useState('Midnight');

  // Data for Variants Slider
  const variants = [
    { 
      name: "Midnight", 
      image: Zarza15223Midnight,
      desc: "The standard tactical black finish."
    },
    { 
      name: "Ambusher", 
      image: Zarza15223Ambusher,
      desc: "A variant featuring a camouflage pattern suitable for ambushing prey."
    }
  ];

  // Data for Ammo Table
  const ammoData = [
    { name: ".223 Soft-Point", pen: 10, exp: 12, class: "2-4", range: "150m", price: 220 },
    { name: ".223 Polymer-Tip", pen: 20, exp: 3, class: "2-4", range: "150m", price: 350 },
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
            Zarza-15 .223
          </h1>
        </header>

        {/* Main Content Layout */}
        <div className="block">
            
            {/* Right Floated Infobox with Slider */}
            <div className="float-right w-72 ml-6 mb-4 bg-gray-100 border border-gray-300 shadow-lg font-sans">
                {/* Infobox Title */}
                <div className="bg-green-800 text-white text-center font-bold py-2 border-b border-gray-300 tracking-wide text-lg">
                    Zarza-15 .223
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
                        onError={(e) => {e.target.src = "https://static.wikia.nocookie.net/thehuntercotw/images/6/69/Rifle_ZARZA-15_223.png"}} 
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
                        <div className="text-gray-600">3.0</div>
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
                        <div className="text-gray-600">25</div>
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
            <blockquote className="mb-6 border-l-4 border-green-800 pl-4 italic text-gray-600 font-sans text-sm">
                <p className="mb-2">"ZARZA-15 .223 is a modern rifle included in the Modern Rifles DLC weapon pack."</p>
                <cite>— In-Game Description</cite>
            </blockquote>

            {/* Main Description */}
            <div className="mb-8 text-gray-900 font-sans text-[16px] leading-relaxed">
                <p>
                    The <strong className="text-gray-900">Zarza-15 .223</strong> is a modern hunting rifle perfect for small game hunts such as <a href="#" className="text-green-800 hover:underline">Gray Fox</a>, <a href="#" className="text-green-800 hover:underline">Red Fox</a>, <a href="#" className="text-green-800 hover:underline">Coyotes</a> or <a href="#" className="text-green-800 hover:underline">Roe Deer</a>. The ZARZA is based off of the M16 Rifle, specifically the M16A2.
                </p>
                <p className="mt-4">
                    This weapon is available as part of the <a href="#" className="text-green-800 hover:underline">Modern Rifle Pack</a> DLC.
                </p>
            </div>

            {/* Table of Contents */}
            <div className="mb-8 inline-block bg-gray-100 border border-gray-300 p-2 min-w-[250px]">
                <div className="flex justify-between items-center border-b border-gray-300 pb-1 mb-2">
                    <span className="font-bold text-gray-900 text-sm">Contents</span>
                    <button onClick={() => setIsTocOpen(!isTocOpen)} className="text-green-800 text-xs hover:underline">[{isTocOpen ? 'hide' : 'show'}]</button>
                </div>
                {isTocOpen && (
                    <ol className="list-decimal list-inside text-gray-700 text-sm space-y-1 font-sans">
                        <li><a href="#ammo" className="hover:text-green-800 hover:underline">Ammo</a></li>
                        <li><a href="#sights" className="hover:text-green-800 hover:underline">Sights</a></li>
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
                        <h2 className="text-2xl font-bold text-gray-900">1. Ammo</h2>
                        <a href="#" className="text-green-800"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                    </div>
                    <p className="text-gray-700 text-[16px] mb-4">The Zarza-15 .223 uses .223 Remington ammunition:</p>
                    
                    <div className="bg-white border border-gray-300 text-sm md:text-base font-sans overflow-x-auto">
                         <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-green-800 border-b-2 border-gray-300 text-white font-bold">
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
                                    <tr key={idx} className="hover:bg-gray-100">
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
                    <div className="flex items-center space-x-2 border-b border-gray-300 pb-2 mb-4">
                        <h2 className="text-2xl font-bold text-gray-900">2. Sights</h2>
                        <a href="#" className="text-green-800"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                    </div>
                    <p className="text-gray-700 text-[16px] mb-4">The following sights can be equipped on the Zarza-15 .223:</p>
                    
                    <ul className="list-disc list-inside space-y-1 ml-4 text-green-800 text-lg">
                        {sightsData.map((sight, idx) => (
                            <li key={idx}><a href="#" className="hover:underline">{sight}</a></li>
                        ))}
                    </ul>
                </div>



                {/* Trivia */}
                <div id="trivia">
                    <div className="flex items-center space-x-2 border-b border-gray-300 pb-2 mb-4">
                        <h2 className="text-2xl font-bold text-gray-900">3. Trivia</h2>
                        <a href="#" className="text-green-800"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                    </div>
                    <ul className="list-disc list-inside text-gray-700 font-sans text-[16px] space-y-2">
                        <li>The ZARZA-15 .223 is modeled after its real-life counterpart of the AR-15 which is produced in various models by various companies. This specific model is modeled after the M16, the designation given to ARs adopted by the US Military during the Vietnam War.</li>
                        <li>All AR-15s chambered for 5.56 can take .223, since they have the same diameter bullet. However this does not work the other way around.</li>
                    </ul>
                </div>

                {/* Gallery */}
                <div id="gallery">
                    <div className="flex items-center space-x-2 border-b border-gray-300 pb-2 mb-4">
                        <h2 className="text-2xl font-bold text-gray-900">4. Gallery</h2>
                        <a href="#" className="text-green-800"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                    </div>
                    <div className="flex flex-wrap gap-4">
                        {[
                            { title: "Promotional", img: Zarza223 },
                        ].map((item, idx) => (
                            <div key={idx} className="bg-gray-100 border border-gray-300 p-2">
                                <div className="bg-gray-200 overflow-hidden relative group" style={{ width: '200px', height: '120px' }}>
                                    <img 
                                        src={item.img} 
                                        alt={item.title} 
                                        className="w-full h-full object-cover"
                                        onError={(e) => {e.target.style.display='none'; e.target.nextSibling.style.display='flex'}}
                                    />
                                     <div className="w-full h-full hidden items-center justify-center text-gray-500 bg-gray-200">
                                        [Image: {item.title}]
                                     </div>
                                </div>
                                <p className="text-gray-700 text-sm mt-2">{item.title}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <WeaponsTable activeItem="Zarza-15 .223" />

            </div>

        </div>

        <div className="h-32"></div>
      </div>
    </div>
  );
}