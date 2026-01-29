import React, { useState } from 'react';
import M1IwaniecVeteran from '../../../../assets/M1IwaniecVeteran.webp';
import M1IwaniecReserve from '../../../../assets/M1IwaniecReserve.webp';
import M1IwaniecCollection from '../../../../assets/M1IwaniecCollection.webp';
import RifleDiagram from '../../../../assets/Rifle_diagram_2020.webp';
import WeaponsTable from '../../../../components/WeaponsTable';

export default function App() {
  const [isTocOpen, setIsTocOpen] = useState(true);
  const [activeVariant, setActiveVariant] = useState('Veteran');

  // Data for Variants Slider
  const variants = [
    { 
      name: "Veteran", 
      image: M1IwaniecVeteran,
      desc: "The default color variation, featuring a well worn walnut stock and black parkerized hardware."
    },
    { 
      name: "Reserve", 
      image: M1IwaniecReserve,
      desc: "An alternate style that features no wear, as the weapon would have looked when it was brand new. The metal sports a green parkerized finish."
    },
    { 
      name: "Collection", 
      image: M1IwaniecCollection,
      desc: "Designed to look like a newly built collector's piece. Featuring a stock made from high-quality red wood and its hardware made from stainless steel."
    }
  ];

  // Data for Ammo Table
  const ammoData = [
    { name: ".30-06 Soft-Point", pen: 19, exp: 53, class: "4-8", range: "150m", price: 590 },
    { name: ".30-06 Polymer-Tip", pen: 45, exp: 13, class: "4-8", range: "150m", price: 850 },
  ];

  // Data for Sights List
  const sightsData = [
    "Ascent 1-4x24 Rifle Scope",
    "Hyperion 4-8x42 Rifle Scope",
    "Odin 4-12x33 Rifle Scope",
    "Argus 8-16x50 Rifle Scope",
    "GenZero 1-4x20 Night Vision Rifle Scope",
    "Angler 4-8x100 Night Vision Rifle Scope"
  ];

  return (
    <div className="min-h-screen text-gray-900 p-6 md:p-12 font-sans tracking-tight bg-white">
      
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <header className="flex flex-col md:flex-row md:items-center justify-between border-b border-green-800/20 pb-4 mb-6">
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4 md:mb-0">
            M1 Iwaniec
          </h1>
        </header>

        {/* Main Content Layout */}
        <div className="block">
            
            {/* Right Floated Infobox with Slider */}
            <div className="float-right w-72 ml-6 mb-4 bg-white border border-gray-200 shadow-xl font-sans">
                {/* Infobox Title */}
                <div className="bg-green-800 text-white text-center font-bold py-2 border-b border-green-900 tracking-wide">
                    M1 Iwaniec
                </div>

                {/* Variant Slider / Tabs */}
                <div className="flex overflow-x-auto whitespace-nowrap bg-gray-50 border-b border-gray-200 scrollbar-hide justify-around py-1">
                  {variants.map((variant) => (
                    <button
                      key={variant.name}
                      onClick={() => setActiveVariant(variant.name)}
                      className={`px-2 py-1 text-xs font-bold transition-colors uppercase flex-shrink-0 cursor-pointer ${
                        activeVariant === variant.name 
                          ? "text-green-800 border-b-2 border-green-800" 
                          : "text-gray-500 hover:text-green-800"
                      }`}
                    >
                      {variant.name}
                    </button>
                  ))}
                </div>
                
                {/* Image Area */}
                <div className="p-4 flex justify-center bg-gray-50 relative min-h-[160px] items-center">
                    <img 
                        src={variants.find(v => v.name === activeVariant).image} 
                        alt={activeVariant} 
                        style={{ width: '268.4px', height: '134.2px' }}
                        className="object-contain transition-opacity duration-300"
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
                        <div className="text-green-800">0</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2 bg-gray-50">
                        <div className="font-bold text-gray-700">Weight</div>
                        <div className="text-green-800">3.5</div>
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
                        <div className="text-green-800">35</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2 bg-gray-50">
                        <div className="font-bold text-gray-700">Recoil</div>
                        <div className="text-green-800">82</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2">
                        <div className="font-bold text-gray-700">Reload</div>
                        <div className="text-green-800">49</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2 bg-gray-50">
                        <div className="font-bold text-gray-700">Hipshot</div>
                        <div className="text-green-800">50</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2">
                        <div className="font-bold text-gray-700">Magazine</div>
                        <div className="text-green-800">5</div>
                    </div>
                </div>
            </div>

            {/* Intro Quote */}
            <blockquote className="mb-6 border-l-4 border-green-800 pl-4 italic text-gray-600 font-sans text-sm">
                <p className="mb-2">"The M1 Iwaniec is a rifle of wartime heroes, characterized by the iconic 'ping' its en-bloc clip makes when it gets ejected. Reliable, balanced and semi-automatic, it's an all-rounder masterpiece that has proven its worth in the hands of soldiers, target shooters and hunters alike. Just be careful not to pinch your thumb when reloading it!"</p>
                <cite>— In-Game Description</cite>
            </blockquote>

            {/* Main Description */}
            <div className="mb-8 text-gray-700 font-sans text-[16px] leading-relaxed">
                <p>
                    The <strong className="text-gray-900">M1 Iwaniec</strong> is a semi-auto rifle chambered in .30-06. Built as a war-time weapon, the durable construction and high power made it a favorite of many hunters. The lack of accuracy does limit its use at range, however, its quick follow-up shots make it excel at close-range hunting.
                </p>
                <p className="mt-4">
                    This weapon is available as part of the <a href="#" className="text-green-800 hover:underline">Smoking Barrels Weapon Pack</a> DLC.
                </p>
            </div>

            {/* Table of Contents */}
            <div className="mb-8 inline-block bg-gray-50 border border-gray-200 p-2 min-w-[250px]">
                <div className="flex justify-between items-center border-b border-gray-200 pb-1 mb-2">
                    <span className="font-bold text-gray-900 text-sm">Contents</span>
                    <button onClick={() => setIsTocOpen(!isTocOpen)} className="text-green-800 text-xs hover:underline">[{isTocOpen ? 'hide' : 'show'}]</button>
                </div>
                {isTocOpen && (
                    <ol className="list-decimal list-inside text-gray-700 text-sm space-y-1 font-sans">
                        <li><a href="#ammo" className="hover:text-green-800 hover:underline">Ammo</a></li>
                        <li><a href="#sights" className="hover:text-green-800 hover:underline">Sights</a></li>
                        <li><a href="#variants" className="hover:text-green-800 hover:underline">Variants</a></li>
                        <li><a href="#trivia" className="hover:text-green-800 hover:underline">Trivia</a></li>
                        <li><a href="#comparison" className="hover:text-green-800 hover:underline">Comparison to other rifles</a></li>
                    </ol>
                )}
            </div>

            {/* Sections */}
            <div className="space-y-12 clear-both">
                
                {/* Ammo Section */}
                <div id="ammo">
                    <div className="flex items-center space-x-2 border-b border-green-800/50 pb-2 mb-4">
                        <h2 className="text-2xl font-bold text-green-800">Ammo</h2>
                        <a href="#" className="text-green-800"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                    </div>
                    
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
                    <div className="flex items-center space-x-2 border-b border-green-800/50 pb-2 mb-4">
                        <h2 className="text-2xl font-bold text-green-800">Sights</h2>
                        <a href="#" className="text-green-800"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                    </div>
                    <p className="text-gray-700 text-[16px] mb-4">The following sights can be equipped on the M1 Iwaniec:</p>
                    
                    <ul className="list-disc list-inside space-y-1 ml-4 text-green-800 text-lg">
                        {sightsData.map((sight, idx) => (
                            <li key={idx}><a href="#" className="hover:underline">{sight}</a></li>
                        ))}
                    </ul>
                </div>

                {/* Variants Section */}
                <div id="variants">
                    <div className="flex items-center space-x-2 border-b border-green-800/50 pb-2 mb-4">
                        <h2 className="text-2xl font-bold text-green-800">Variants</h2>
                        <a href="#" className="text-green-800"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                    </div>
                    <div className="text-gray-700 font-sans text-[16px] leading-relaxed space-y-4">
                        <p>
                            <strong className="text-gray-900">M1 Iwaniec Reserve</strong> is an alternate style that features no wear, as the weapon would have looked when it was brand new. The metal sports a green parkerized finish.
                        </p>
                        <p>
                            <strong className="text-gray-900">M1 Iwaniec Collection</strong> is a variant that is designed to look like a newly built collector's piece. Featuring a stock made from high-quality red wood and its hardware made from stainless steel, it looks less like a wartime design and more like a bespoke rifle.
                        </p>
                    </div>
                </div>

                {/* Trivia */}
                <div id="trivia">
                    <div className="flex items-center space-x-2 border-b border-green-800/50 pb-2 mb-4">
                        <h2 className="text-2xl font-bold text-green-800">Trivia</h2>
                        <a href="#" className="text-green-800"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                    </div>
                    <ul className="list-disc list-inside text-gray-700 font-sans text-[16px] space-y-2">
                        <li>The M1 Iwaniec family is modeled after the M1 Garand, and indeed features the trademark "ping" after ejecting it's en-bloc clip.</li>
                        <li>The M1 in real life has a maximum capacity of 8 rounds, with special "5 Round Clips" being purpose made for Hunting.</li>
                        <li>When Firing the last round a fully loaded clip of unfired bullets is ejected instead of it being an empty one.</li>
                        <li>When having the Lightning hands skill maxxed out the Reload is changed to where the bolt locks forward when the clip is inserted as it should where as without the perk the player has to tap the bolt to make it lock forward (Which is a simple thing that is common on M1 Rifles that have seen Service).</li>
                        <li>There is a Very Rare chance that when reloading the M1 that the player will give themselves "Garand Thumb" (that being the common problem soldiers experience where the bolt would slam into the thumb of the user if they don't hold the bolt back or get their thumb out quickly).</li>
                    </ul>
                </div>

                {/* Comparison */}
                <div id="comparison">
                    <div className="flex items-center space-x-2 border-b border-green-800/50 pb-2 mb-4">
                        <h2 className="text-2xl font-bold text-green-800">Comparison to other rifles</h2>
                        <a href="#" className="text-green-800"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                    </div>
                    <div className="bg-white border border-gray-200 p-2 inline-block">
                        <div className="bg-gray-100 overflow-hidden relative group flex justify-center items-center">
                                <img 
                                src={RifleDiagram} 
                                alt="Rifle Diagram" 
                                style={{ width: '420px', height: '200px' }}
                                className="object-contain"
                                />
                                <div className="absolute bottom-2 right-2 bg-black/60 p-1 rounded">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

        <div className="mt-12">
            <WeaponsTable activeItem="M1 Iwaniec" />
        </div>
        <div className="h-32"></div>
      </div>
    </div>
  );
}