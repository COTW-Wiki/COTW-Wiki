import React, { useState } from 'react';
import CanningMagnumFrontierImage from '../../../../assets/300CanningMagnumFrontier.webp';
import CanningMagnumMarchesImage from '../../../../assets/300CanningMagnumMarches.webp';
import CanningMagnumUnnamedImage from '../../../../assets/300CanningMagnumUnnamed1.webp';
import CanningMagnumUnnamedCamoImage from '../../../../assets/300CanningMagnumUnnamed2.webp';
import RifleDiagram from '../../../../assets/Rifle_diagram_2020.webp';
import WeaponsTable from '../../../../components/WeaponsTable';

export default function App() {
  const [isTocOpen, setIsTocOpen] = useState(true);
  const [activeVariantIndex, setActiveVariantIndex] = useState(0);

  // Data for Variants
  const variants = [
    { 
      name: "Frontier", 
      image: CanningMagnumFrontierImage,
      desc: "Default synthetic stock."
    },
    { 
      name: "Marches", 
      image: CanningMagnumMarchesImage,
      desc: "Classic rifle style with stained wood body and black barrel."
    },
    { 
      name: "Unreleased Design", 
      image: CanningMagnumUnnamedImage, 
      desc: "A camo variant that was likely planned but not released or is a special edition." 
    },
    { 
      name: "Unreleased Design 2", 
      image: CanningMagnumUnnamedCamoImage, 
      desc: "A camo variant that was likely planned but not released or is a special edition." 
    }
  ];

  const nextVariant = () => {
    setActiveVariantIndex((prev) => (prev + 1) % variants.length);
  };

  const prevVariant = () => {
    setActiveVariantIndex((prev) => (prev - 1 + variants.length) % variants.length);
  };

  const activeVariant = variants[activeVariantIndex];

  // Data for Ammo Table
  const ammoData = [
    { name: ".300 Magnum Polymer-Tip", pen: 42, exp: 14, class: "7-9", range: "150m", price: 950 },
    { name: ".300 Magnum Soft Point", pen: 21, exp: 60, class: "7-9", range: "150m", price: 720 },
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
    <div className="min-h-screen text-gray-900 p-6 md:p-12 font-sans tracking-tight bg-white">
      
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <header className="flex flex-col md:flex-row md:items-center justify-between border-b border-green-800/20 pb-4 mb-6">
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4 md:mb-0">
            .300 Canning Magnum
          </h1>
        </header>

        {/* Main Content Layout */}
        <div className="block">
            
            {/* Right Floated Infobox */}
            <div className="float-right w-72 ml-6 mb-4 bg-white border border-gray-200 shadow-xl font-sans">
                {/* Infobox Title */}
                <div className="bg-green-800 text-white text-center font-bold py-2 border-b border-green-900 tracking-wide">
                    .300 Canning Magnum
                </div>

                {/* Variant Slider */}
                <div className="flex items-center justify-between bg-gray-100 border-b border-gray-200 py-2 px-4">
                    <button onClick={prevVariant} className="text-gray-500 hover:text-green-800 transition-colors font-bold text-lg">
                        &lt;
                    </button>
                    
                    <span className="text-xs font-bold text-green-800 uppercase tracking-wider select-none text-center flex-1">
                        {activeVariant.name}
                    </span>

                    <button onClick={nextVariant} className="text-gray-500 hover:text-green-800 transition-colors font-bold text-lg">
                        &gt;
                    </button>
                </div>
                
                {/* Image Area */}
                <div className="p-4 flex justify-center bg-gray-50 items-center">
                   {/* Displaying active variant image */}
                    <img 
                        src={activeVariant.image} 
                        alt={activeVariant.name} 
                        style={{ width: '268.4px', height: '134.2px' }}
                        className="object-contain transition-opacity duration-300 max-w-full"
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
                        <div className="text-green-800">4</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2">
                        <div className="font-bold text-gray-700">Score</div>
                        <div className="text-green-800">6092</div>
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
                        <div className="text-green-800">80</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2 bg-gray-50">
                        <div className="font-bold text-gray-700">Recoil</div>
                        <div className="text-green-800">90</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2">
                        <div className="font-bold text-gray-700">Reload</div>
                        <div className="text-green-800">49</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2 bg-gray-50">
                        <div className="font-bold text-gray-700">Hipshot</div>
                        <div className="text-green-800">35</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2">
                        <div className="font-bold text-gray-700">Magazine</div>
                        <div className="text-green-800">4</div>
                    </div>
                </div>
            </div>

            {/* Intro Quote */}
            <blockquote className="mb-6 border-l-4 border-green-800 pl-4 italic text-gray-600 font-sans text-sm">
                <p className="mb-2">"Developed by Alaskan gunsmiths for moose hunting, the .300 Canning Magnum is the go-to rifle for large game in the Yukon Region. Favored by marksmen and hunters alike for its accuracy, the .300 magnum cartridge is effective for long-range hunting up to distances of 400 m."</p>
                <cite>— In-Game Description</cite>
            </blockquote>

            {/* Main Description */}
            <div className="mb-8 text-gray-700 font-sans text-[16px] leading-relaxed space-y-4">
                <p>
                    The <strong className="text-gray-900">.300 Canning Magnum Frontier</strong> is a large-caliber bolt-action rifle for hunting large game. It fills the gap between the <a href="#" className="text-green-800 hover:underline">7mm Regent Magnum</a> and the <a href="#" className="text-green-800 hover:underline">Rangemaster 338</a>. The high accuracy and very flat bullet trajectory has made it quite popular among hunters as it can be used at ranges up to 400 meters.
                </p>
                <p>
                    The rifle was released as part of the <a href="#" className="text-green-800 hover:underline">Yukon Valley</a> DLC.
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
                        <li><a href="#analysis" className="hover:text-green-800 hover:underline">Analysis</a>
                            <ol className="list-[decimal] list-inside ml-4 text-green-800">
                                <li><a href="#comparison" className="hover:underline">Comparison with analogues</a></li>
                            </ol>
                        </li>
                        <li><a href="#variants" className="hover:text-green-800 hover:underline">Variants</a></li>
                        <li><a href="#trivia" className="hover:text-green-800 hover:underline">Trivia</a></li>
                        <li><a href="#other" className="hover:text-green-800 hover:underline">Comparison to other rifles</a></li>
                        <li><a href="#ref" className="hover:text-green-800 hover:underline">References</a></li>
                    </ol>
                )}
            </div>

            {/* Sections */}
            <div className="space-y-12 clear-both">
                
                {/* Ammo Section */}
                <div id="ammo">
                    <div className="flex items-center space-x-2 border-b border-green-800/50 pb-2 mb-4">
                        <h2 className="text-2xl font-bold text-green-800">1. Ammo</h2>
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
                        <h2 className="text-2xl font-bold text-green-800">2. Sights</h2>
                        <a href="#" className="text-green-800"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                    </div>
                    <p className="text-gray-700 text-[16px] mb-4">The following sights can be equipped on the .300 Canning Magnum:</p>
                    
                    <ul className="list-disc list-inside space-y-1 ml-4 text-green-800 text-lg">
                        {sightsData.map((sight, idx) => (
                            <li key={idx}><a href="#" className="hover:underline">{sight}</a></li>
                        ))}
                    </ul>
                </div>

                {/* Analysis Section */}
                <div id="analysis">
                    <div className="flex items-center space-x-2 border-b border-green-800/50 pb-2 mb-4">
                        <h2 className="text-2xl font-bold text-green-800">3. Analysis</h2>
                        <a href="#" className="text-green-800"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                    </div>
                    <div className="text-gray-700 font-sans text-[16px] leading-relaxed space-y-4">
                        <p>
                            Since its release, the .300 Canning Magnum was widely considered the best class 7-9 rifle in the game, thanks to both its stopping power and very flat bullet trajectory as well as featuring a 4 round magazine wich allows for potential follow-up shots. But that place has since been taken by the <a href="#" className="text-green-800 hover:underline">Arzyna .300 Mag Tactical</a> (due to its improved features allowing for more ease of use) and the <a href="#" className="text-green-800 hover:underline">Vallgarda .375</a> (wich uses the most powerful round out of all current 7-9 rifles up to 200). Still the .300 Canning Magnum stands the best long range rifle in it's class and 3rd best biggame rifle overall. It performs well on its classes, managing to down them relatively quickly. And thanks to its very flat bullet trajectory / low bullet drop, even shots at 400 meters become very manageable.
                        </p>
                        <p>
                            The .300 Canning Magnum requires a rifle score of 6092 to unlock and, like most other weapons that come as part of a Reserve DLC, must be bought with ingame money. The ingame price for the .300 Canning Magnum is 75000.
                        </p>

                         {/* Comparison Subsection */}
                        <div id="comparison" className="mt-6">
                            <div className="flex items-center space-x-2 mb-2">
                                <h3 className="text-xl font-bold text-green-800">3.1. Comparison with analogues</h3>
                                <a href="#" className="text-green-800"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                            </div>
                            <p>
                                Canning Magnum and Arzyna use the same ammunition and have the same power and penetration, but the Arzyna has a number of advantages: it does not cost in-game money and has no restrictions on player score. In terms of performance it has slightly better accuracy (a stat that, despite its misleading name, does not effect the accuracy of the weapon itself, but rather the wobble when aiming down the scope, as tested and proven by german youtuber shfty), significantly lower recoil and higher fire rate (stats which will most benefit players who like to take quick follow-up shots), a slightly faster reload and a magazine size of 5 rounds compared to the .300 Cannings 4 round magazine. The .300 Canning Magnum however still retains its advantage of a flatter overall bullet trajectory and hence less bulletdrop, as well as being identical in terms of stopping power.
                            </p>
                            <p className="mt-4">
                                The Vallgarda .375, while sacrificing some ease of use for followup shots due to its very high recoil of 100 (same as both .338 rifles), boast the most powerful round out of every biggame rifle currently in the game up to a distance of around 200 meters, at wich it manages to penetrate both lungs of a moose on a broadside shot. At further ranges it is at least roughly equal in power to the .338.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Variants Section */}
                <div id="variants">
                    <div className="flex items-center space-x-2 border-b border-green-800/50 pb-2 mb-4">
                        <h2 className="text-2xl font-bold text-green-800">4. Variants</h2>
                        <a href="#" className="text-green-800"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                    </div>
                    <div className="text-gray-700 font-sans text-[16px] leading-relaxed space-y-4">
                        <p>
                            <strong className="text-gray-900">.300 Canning Magnum Marches</strong> is an alternate style that looks like a classic rifle. It features a stained wood body, and a black barrel.
                        </p>
                    </div>
                </div>

                {/* Trivia Section */}
                <div id="trivia">
                    <div className="flex items-center space-x-2 border-b border-green-800/50 pb-2 mb-4">
                        <h2 className="text-2xl font-bold text-green-800">5. Trivia</h2>
                        <a href="#" className="text-green-800"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                    </div>
                    <p className="text-gray-700 font-sans text-[16px]">
                        Modeled after its real-life counterpart, the Weatherby Mark V Deluxe chambered in .300 Weatherby Magnum.
                    </p>
                </div>

                {/* Comparison to Other Rifles */}
                <div id="other">
                    <div className="flex items-center space-x-2 border-b border-green-800/50 pb-2 mb-4">
                        <h2 className="text-2xl font-bold text-green-800">6. Comparison to other rifles</h2>
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

                {/* References */}
                <div id="ref">
                    <div className="flex items-center space-x-2 border-b border-green-800/50 pb-2 mb-4">
                        <h2 className="text-2xl font-bold text-green-800">7. References</h2>
                        <a href="#" className="text-green-800"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                    </div>
                    <ol className="list-decimal list-inside text-gray-700 font-sans text-[16px] space-y-2">
                         <li>
                             <a href="https://www.youtube.com/watch?v=bmpkJ8wxdhQ" target="_blank" rel="noopener noreferrer" className="text-green-800 hover:underline">
                                https://www.youtube.com/watch?v=bmpkJ8wxdhQ
                             </a>
                         </li>
                    </ol>
                </div>

            </div>

        </div>

        <div className="mt-12">
            <WeaponsTable activeItem=".300 Canning Magnum" />
        </div>
        <div className="h-32"></div>
      </div>
    </div>
  );
}