import React, { useState } from 'react';
import WeaponsTable from '../../../../components/WeaponsTable';
import Zarza10308Moonlight from '../../../../assets/Zarza-10308Moonlight.webp';
import Zarza10308Stalker from '../../../../assets/Zarza-10308Stalker.webp';
import Zarza10 from '../../../../assets/Zarza10.webp';

export default function App() {
  const [isTocOpen, setIsTocOpen] = useState(true);
  const [activeVariant, setActiveVariant] = useState('Moonlight');

  // Data for Variants Slider
  const variants = [
    { 
      name: "Moonlight", 
      image: Zarza10308Moonlight,
            desc: "ZARZA-10 Moonlight is a color variation that features a rose gold aluminum stock and a black parkerized barrel."
    },
    { 
      name: "Stalker", 
      image: Zarza10308Stalker,
            desc: "ZARZA-10 Stalker is a color variation that features a green hexagon patterned camouflage on its stock and a black parkerized barrel."
    }
  ];

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
    "Red Raptor Reflex Sight"
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans tracking-tight">
      <div className="max-w-5xl mx-auto p-6 md:p-12">
        {/* Header Section */}
        <header className="flex flex-col md:flex-row md:items-center justify-between border-b border-gray-300 pb-4 mb-6">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4 md:mb-0">
            Zarza-10 .308
          </h1>
        </header>

        {/* Main Content Layout */}
        <div className="block">
            
            {/* Right Floated Infobox with Slider */}
            <div className="float-right w-72 ml-6 mb-4 bg-gray-100 border border-gray-300 shadow-lg font-sans">
                {/* Infobox Title */}
                <div className="bg-green-800 text-white text-center font-bold py-2 border-b border-gray-300 tracking-wide text-lg">
                    Zarza-10 .308
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
                        onError={(e) => {e.target.src = "https://static.wikia.nocookie.net/thehuntercotw/images/0/0c/Rifle_ZARZA-10_308.png"}} 
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
                        <div className="text-gray-600">4.0</div>
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
                        <div className="text-gray-600">45</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2 bg-gray-100">
                        <div className="font-bold text-gray-700">Recoil</div>
                        <div className="text-gray-600">75</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2">
                        <div className="font-bold text-gray-700">Reload</div>
                        <div className="text-gray-600">59</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2 bg-gray-100">
                        <div className="font-bold text-gray-700">Hipshot</div>
                        <div className="text-gray-600">50</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2">
                        <div className="font-bold text-gray-700">Magazine</div>
                        <div className="text-gray-600">5</div>
                    </div>
                </div>
            </div>

            {/* Intro Quote */}
            <blockquote className="mb-6 border-l-4 border-green-800 pl-4 italic text-gray-600 font-serif text-lg">
                <p className="mb-2">"One of the most popular and versatile rifles ever, the ZARZA-10 .308 is incredibly common among hunters thanks to its reliability and beautiful, modular and compact design. Chambered in .308 and with a custom 24 inch barrel, it's the ultimate companion when it comes to medium to large-sized prey."</p>
                <cite className="text-sm text-gray-500">— In-Game Description</cite>
            </blockquote>

            {/* Main Description */}
            <div className="mb-8 text-gray-800 font-serif text-[16px] leading-relaxed">
                <p>
                    The <strong className="text-gray-900">ZARZA-10 .308</strong> is the first rifle chambered with .308 ammo. It is very comparable to, but slightly better than, the M1 Iwaniec .30-06. The ZARZA-10 is a semi-automatic rifle that excels at close, medium, and long ranges and allows for quick follow up shots.
                </p>
                <p className="mt-4">
                    This weapon is available as part of the <a href="#" className="text-green-800 hover:underline">Modern Rifle Pack</a> DLC.
                </p>
            </div>

            {/* Table of Contents */}
            <div className="mb-8 inline-block bg-gray-50 border border-gray-300 p-4 min-w-[250px] rounded-sm shadow-sm">
                <div className="flex justify-between items-center border-b border-gray-300 pb-2 mb-2">
                    <span className="font-bold text-gray-900 text-sm uppercase tracking-wider">Contents</span>
                    <button onClick={() => setIsTocOpen(!isTocOpen)} className="text-green-800 text-xs hover:underline font-medium">[{isTocOpen ? 'hide' : 'show'}]</button>
                </div>
                {isTocOpen && (
                    <ol className="list-decimal list-inside text-green-800 text-sm space-y-1 font-medium">
                        <li><a href="#ammo" className="hover:underline">Ammo</a></li>
                        <li><a href="#sights" className="hover:underline">Sights</a></li>
                        <li><a href="#variants" className="hover:underline">Variants</a></li>
                        <li><a href="#trivia" className="hover:underline">Trivia</a></li>
                        <li><a href="#gallery" className="hover:underline">Gallery</a></li>
                    </ol>
                )}
            </div>

            {/* Sections */}
            <div className="space-y-12 clear-both">
                
                {/* Ammo Section */}
                <div id="ammo">
                    <div className="flex items-center space-x-2 border-b border-gray-300 pb-2 mb-4">
                        <h2 className="text-2xl font-bold text-gray-900 font-serif">1. Ammo</h2>
                    </div>
                    <p className="text-gray-700 text-[16px] mb-4 font-serif">The Zarza-10 .308 uses .308 Winchester ammunition:</p>
                    
                    <div className="bg-white border border-gray-300 text-sm md:text-base font-sans overflow-x-auto shadow-sm">
                         <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-100 border-b-2 border-gray-300 text-gray-900 font-bold">
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
                                        <td className="p-3 text-green-800 hover:underline cursor-pointer font-medium">{item.name}</td>
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
                        <h2 className="text-2xl font-bold text-gray-900 font-serif">2. Sights</h2>
                    </div>
                    <p className="text-gray-700 text-[16px] mb-4 font-serif">The following sights can be equipped on the Zarza-10 .308:</p>
                    
                    <ul className="list-disc list-inside space-y-1 ml-4 text-green-800 text-lg font-serif">
                        {sightsData.map((sight, idx) => (
                            <li key={idx}><a href="#" className="hover:underline">{sight}</a></li>
                        ))}
                    </ul>
                </div>

                {/* Variants Section */}
                <div id="variants">
                    <div className="flex items-center space-x-2 border-b border-gray-300 pb-2 mb-4">
                        <h2 className="text-2xl font-bold text-gray-900 font-serif">3. Variants</h2>
                    </div>
                    <div className="text-gray-700 font-serif text-[16px] leading-relaxed space-y-4">
                        <p>
                            <strong className="text-gray-900">ZARZA-10 Moonlight</strong> is a color variation that features a rose gold aluminum stock and a black parkerized barrel.
                        </p>
                         <p>
                            <strong className="text-gray-900">ZARZA-10 Stalker</strong> is a color variation that features a green hexagon patterned camouflage on its stock and a black parkerized barrel.
                        </p>
                    </div>
                </div>

                {/* Analysis */}
                

                {/* Trivia */}
                <div id="trivia">
                    <div className="flex items-center space-x-2 border-b border-gray-300 pb-2 mb-4">
                        <h2 className="text-2xl font-bold text-gray-900 font-serif">4. Trivia</h2>
                    </div>
                    <p className="text-gray-700 font-serif text-[16px]">
                        ZARZA-10 .308 is modeled after its real-life counterpart of the AR-10, which is manufactured in various models by various companies.
                    </p>
                </div>

                {/* Gallery */}
                <div id="gallery">
                    <div className="flex items-center space-x-2 border-b border-gray-300 pb-2 mb-4">
                        <h2 className="text-2xl font-bold text-gray-900 font-serif">5. Gallery</h2>
                    </div>
                    <div className="flex justify-start gap-4">
                        {[
                            { title: "Promotional", img: Zarza10 }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white border border-gray-300 p-2 shadow-sm w-fit">
                                <div className="bg-gray-100 overflow-hidden relative group flex items-center justify-center">
                                     <img src={item.img} alt={item.title} style={{ width: '200px', height: '120px', objectFit: 'contain' }} />
                                </div>
                                <p className="text-gray-600 text-sm mt-2 font-serif text-center">{item.title}</p>
                            </div>
                        ))}
                    </div>
                </div>

                 {/* Comparison Placeholder */}

            </div>

        </div>

        <div className="h-32"></div>
        <WeaponsTable activeItem="Zarza-10 .308" />
      </div>
    </div>
  );
}