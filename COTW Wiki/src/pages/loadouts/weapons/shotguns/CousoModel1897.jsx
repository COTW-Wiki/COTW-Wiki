import React, { useState } from 'react';
import CousoRanchero from '../../../../assets/CousoModel1897Ranchero.webp';
import CousoSoldado from '../../../../assets/CousoModel1897Soldado.webp';
import CousoVaquero from '../../../../assets/CousoModel1897Vaquero.webp';
import WeaponsTable from '../../../../components/WeaponsTable.jsx';

// --- Main App Component ---
export default function App() {
  const [isTocOpen, setIsTocOpen] = useState(true);
  const [activeVariant, setActiveVariant] = useState('Ranchero');

  // Data for Variants Slider
  const variants = [
    { 
      name: "Ranchero", 
      image: CousoRanchero,
      desc: "The standard variant featuring a reliable pump-action mechanism and wood furniture."
    },
    { 
      name: "Soldado", 
      image: CousoSoldado,
      desc: "A variant with a dark, tactical finish."
    },
    { 
      name: "Vaquero", 
      image: CousoVaquero,
      desc: "A variant with a distinct western-style finish."
    }
  ];

  // Data for Ammo Table
  const ammoData = [
    { name: "16 Gauge Birdshot", pen: 0, exp: 0, class: "1", range: "25m", price: 180 },
    { name: "16 Gauge Buckshot", pen: 5, exp: 0, class: "2-4", range: "25m", price: 530 },
    { name: "16 Gauge Slug", pen: 37, exp: 16, class: "4-7", range: "50m", price: 880 },
  ];

  // Data for Sights List
  const sightsData = [
    "Red Raptor Reflex Sight",
    "Meridian 1-4x20 Shotgun Scope" // Note: Some 1897 models may not accept scopes, check in-game specifics if needed, but listing standard shotgun optics here based on pattern.
  ];

  return (
    <div className="min-h-screen text-gray-900 p-6 md:p-12 font-sans tracking-tight">
      
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <header className="flex flex-col md:flex-row md:items-center justify-between border-b border-gray-200 pb-4 mb-6">
          <h1 className="text-4xl md:text-5xl font-light mb-4 md:mb-0">
            Couso Model 1897
          </h1>

        </header>

        {/* Main Content Layout */}
        <div className="block">
            
            {/* Right Floated Infobox with Slider */}
            <div className="float-right w-72 ml-6 mb-4 bg-white border border-gray-200 shadow-sm font-sans">
                {/* Infobox Title */}
                <div className="bg-white text-green-800 text-center font-bold py-2 border-b border-gray-200 tracking-wide text-lg">
                    Couso Model 1897
                </div>

                {/* Variant Slider / Tabs */}
                <div className="flex overflow-x-auto whitespace-nowrap bg-white border-b border-gray-200 scrollbar-hide">
                  {variants.map((variant) => (
                    <button
                      key={variant.name}
                      onClick={() => setActiveVariant(variant.name)}
                      className={`px-4 py-2 text-xs font-bold transition-colors uppercase flex-shrink-0 ${
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
                <div className="p-4 flex justify-center bg-white relative min-h-[160px] items-center">
                    <img 
                        src={variants.find(v => v.name === activeVariant).image} 
                        alt={activeVariant} 
                        style={{ width: '268.4px', height: '134.2px' }}
                        className="object-contain transition-opacity duration-300"
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
                        <div className="text-gray-800">0</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2 bg-gray-50">
                        <div className="font-bold text-gray-700">Weight</div>
                        <div className="text-gray-800">3.5</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2">
                        <div className="font-bold text-gray-700">Score</div>
                        <div className="text-gray-800">0</div>
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
                        <div className="text-gray-800">5</div>
                    </div>
                </div>
            </div>

            {/* Intro Quote */}
            <blockquote className="mb-6 border-l-4 border-green-800 pl-4 italic text-gray-700 font-sans text-sm">
                <p className="mb-2">"The Couso Model 1897 was the first pump action shotgun to achieve widespread commercial success. Its ease of use and reliability have made it a favourite of soldiers, policemen and hunters alike. This particular model is chambered in 16 gauge. This makes it a very versatile weapon in the hands of a skilled hunter. If you are looking to hunt upland game birds, but also want to be able to take advantage of a chance encounter with a roaming deer, look no further. The Couso Model 1897 has you covered!"</p>
                <cite>― In-Game Description</cite>
            </blockquote>

            {/* Main Description */}
            <div className="mb-8 text-gray-800 font-sans text-[16px] leading-relaxed">
                <p>
                    The <strong className="text-green-800">Couso Model 1897</strong> is a pump-action 16 gauge shotgun. While reloading considerably faster, and having a larger capacity than a break-action double barrel, this weapon suffers from slightly lower hipshot accuracy.
                </p>
                <p className="mt-4">
                    This weapon is available as part of the <a href="#" className="text-green-800 hover:underline">Rancho del Arroyo</a> DLC.
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
                        <li><a href="#variants" className="hover:text-gray-900 hover:underline">Variants</a></li>
                        <li><a href="#analysis" className="hover:text-gray-900 hover:underline">Analysis</a></li>
                        <li><a href="#trivia" className="hover:text-gray-900 hover:underline">Trivia</a></li>
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
                    <p className="text-gray-800 text-[16px] mb-4">The Couso Model 1897 uses 16 Gauge ammunition:</p>
                    
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
                    <p className="text-gray-800 text-[16px] mb-4">The following sights can be equipped on the Couso Model 1897:</p>
                    
                    <ul className="list-disc list-inside space-y-1 ml-4 text-green-800 text-lg">
                        {sightsData.map((sight, idx) => (
                            <li key={idx}><a href="#" className="hover:underline">{sight}</a></li>
                        ))}
                    </ul>
                </div>

                {/* Variants Section */}
                <div id="variants">
                    <div className="flex items-center space-x-2 border-b border-gray-200 pb-2 mb-4">
                        <h2 className="text-2xl font-bold text-gray-900">3. Variants</h2>
                        <a href="#" className="text-green-800"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                    </div>
                    <div className="text-gray-800 font-sans text-[16px] leading-relaxed space-y-4">
                        <p>
                            The <strong className="text-green-800">Couso Model 1897 Ranchero</strong> is a variant that features a darker wood body and a brass receiver.
                        </p>
                        <p>
                            The <strong className="text-green-800">Couso Model 1897 Soldado</strong> is a unique variant available through the Rancho del Arroyo questline. It sports a dark wooden body, and black carbon steel metal.
                        </p>
                        <p>
                            <strong className="text-green-800">Couso Model 1897 Vaquero</strong> features a western-style finish.
                        </p>
                    </div>
                </div>

                {/* Analysis */}
                <div id="analysis">
                    <div className="flex items-center space-x-2 border-b border-gray-200 pb-2 mb-4">
                        <h2 className="text-2xl font-bold text-gray-900">4. Analysis</h2>
                        <a href="#" className="text-green-800"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                    </div>
                    <div className="text-gray-800 font-sans text-[16px] leading-relaxed space-y-4">
                        <p>
                            It is a weaker copy of Cacciatore 12G. It covers less animal classes, its slug has less penetration and expansion, the gun holds one less round, has simpler iron sights and has no advantages over Cacciatore in any characteristics (many are just identical). However it is a suitable shotgun for players who don't have the shotgun score to purchase a better model. So this is one of the starter weapons.
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
                        The Couso Model 1897 is modeled after its real-life counterpart of the Winchester Model 1897.
                    </p>
                </div>



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