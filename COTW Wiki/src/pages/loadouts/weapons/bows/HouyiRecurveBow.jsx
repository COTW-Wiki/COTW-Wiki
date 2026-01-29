import React, { useState } from 'react';
import WeaponsTable from '../../../../components/WeaponsTable';
import BowsDiagram from '../../../../assets/Bows.webp';
import HouyiRecurveBowAimingStanding from '../../../../assets/Houyi_aiming_2.webp';
import HouyiRecurveBowStanding from '../../../../assets/Houyi_pose_1.webp';
import HouyiRecurveBowAimingLying from '../../../../assets/Houyi_aiming_1.webp';
import HouyiRecurveBowLying from '../../../../assets/Houyi_pose_3.webp';
import HouyiRecurveBowMoonlight from '../../../../assets/HouyiRecurveBowMoonlight.webp';
import HouyiRecurveBowHiddenDragon from '../../../../assets/HouyiRecurveBowHiddenDragon.webp';
import HouyiRecurveBow from '../../../../assets/HouyiRecurveBow.webp';
import HouyiRecurveBowSnakeskin from '../../../../assets/HouyiRecurveBowSnakeskin.webp';

// --- Main App Component ---
export default function App() {
  const [isTocOpen, setIsTocOpen] = useState(true);
  const [activeVariant, setActiveVariant] = useState('Standard');

  // Image URLs
  const HouyiImg = "https://static.wikia.nocookie.net/thehuntercotw/images/f/f6/Bow_Houyi_Recurve_Bow.png";
  const RifleDiagram = "https://static.wikia.nocookie.net/thehuntercotw/images/0/07/Rifle_Comparison_Chart.png"; // Placeholder for bow comparison
  
  // Using the main image as a placeholder for gallery items

  // Data for Variants Slider
  const variants = [
    { 
      name: "Standard", 
      image: HouyiRecurveBow,
      desc: "A traditional recurve bow based on ancient Chinese designs featuring intricate decorations."
    },
    { 
      name: "Hidden Dragon", 
      image: HouyiRecurveBowHiddenDragon, 
      desc: "A variant featuring a dark, sleek finish."
    },
    { 
      name: "Moonlight", 
      image: HouyiRecurveBowMoonlight, 
      desc: "A variant with a pale, moon-like aesthetic."
    },
    { 
      name: "Snakeskin", 
      image: HouyiRecurveBowSnakeskin, 
      desc: "A variant with a snakeskin pattern."
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
    <div className="min-h-screen text-gray-900 p-6 md:p-12 font-sans tracking-tight bg-white">
      
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <header className="flex flex-col md:flex-row md:items-center justify-between border-b border-gray-200 pb-4 mb-6">
          <h1 className="text-4xl md:text-5xl font-light mb-4 md:mb-0 text-green-800">
            Houyi Recurve Bow
          </h1>

        </header>

        {/* Main Content Layout */}
        <div className="block">
            
            {/* Right Floated Infobox with Slider */}
            <div className="float-right w-72 ml-6 mb-4 bg-white border border-gray-300 shadow-md font-sans">
                {/* Infobox Title */}
                <div className="bg-green-800 text-white text-center font-bold py-2 border-b border-green-900 tracking-wide text-lg">
                    Houyi Recurve Bow
                </div>

                {/* Variant Slider / Tabs */}
                <div className="flex overflow-x-auto whitespace-nowrap bg-gray-100 border-b border-gray-300 scrollbar-hide">
                  {variants.map((variant) => (
                    <button
                      key={variant.name}
                      onClick={() => setActiveVariant(variant.name)}
                      className={`px-4 py-2 text-xs font-bold transition-colors uppercase flex-shrink-0 ${
                        activeVariant === variant.name 
                          ? "text-green-800 border-b-2 border-green-800 bg-white" 
                          : "text-gray-500 hover:text-green-800 hover:bg-gray-50"
                      }`}
                    >
                      {variant.name}
                    </button>
                  ))}
                </div>
                
                {/* Image Area */}
                <div className="p-1 flex justify-center bg-white relative min-h-[140px] items-center border-b border-gray-200">
                    <img 
                        src={variants.find(v => v.name === activeVariant).image} 
                        alt={activeVariant} 
                        style={{ width: '268.4px', height: '134.2px' }}
                        className="object-contain transition-opacity duration-300"
                        onError={(e) => {e.target.src = HouyiImg}}
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
                        <div className="text-gray-900">0</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2 bg-gray-50">
                        <div className="font-bold text-gray-700">Weight</div>
                        <div className="text-gray-900">2.5</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2">
                        <div className="font-bold text-gray-700">Score</div>
                        <div className="text-gray-900">0</div>
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
                        <div className="text-gray-900">38</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2 bg-gray-50">
                        <div className="font-bold text-gray-700">Recoil</div>
                        <div className="text-gray-900">20</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2">
                        <div className="font-bold text-gray-700">Reload</div>
                        <div className="text-gray-900">100</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2 bg-gray-50">
                        <div className="font-bold text-gray-700">Hipshot</div>
                        <div className="text-gray-900">10</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2">
                        <div className="font-bold text-gray-700">Magazine</div>
                        <div className="text-gray-900">1</div>
                    </div>
                </div>
            </div>

            {/* Intro Quote */}
            <blockquote className="mb-6 border-l-4 border-green-800 pl-4 italic text-gray-600 font-sans text-sm">
                <p className="mb-2">"In Chinese mythology, when 10 Suns rose from Earth and turned the world into a barren waste, the archer, Houyi shot down 9 of the 10 Suns, leaving the last one alive. Based on the designs of traditional Chinese Qing recurve bows, the Houyi Recurve Bow has ample penetration and can take down medium game at short ranges."</p>
                <cite>― In-Game Description</cite>
            </blockquote>

            {/* Main Description */}
            <div className="mb-8 text-gray-800 font-sans text-[16px] leading-relaxed">
                <p>
                    The <strong className="text-gray-900">Houyi Recurve Bow</strong> is not a recurve bow, but actually a reflex bow. It was the first bow added to the game that wasn't a compound bow. When compared to the compound bows, it has a higher peak draw weight, and higher accuracy. This comes at the cost of being unable to use any sight.
                </p>
                <p className="mt-4">
                    This weapon is available as part of the <a href="#" className="text-green-800 hover:underline">Weapon Pack 1</a> DLC.
                </p>
            </div>

            {/* Table of Contents */}
            <div className="mb-8 inline-block bg-gray-50 border border-gray-300 p-2 min-w-[250px]">
                <div className="flex justify-between items-center border-b border-gray-300 pb-1 mb-2">
                    <span className="font-bold text-gray-900 text-sm">Contents</span>
                    <button onClick={() => setIsTocOpen(!isTocOpen)} className="text-green-800 text-xs hover:underline">[{isTocOpen ? 'hide' : 'show'}]</button>
                </div>
                {isTocOpen && (
                    <ol className="list-decimal list-inside text-gray-700 text-sm space-y-1 font-sans">
                        <li><a href="#ammo" className="hover:text-green-800 hover:underline">Arrows</a></li>
                        <li><a href="#sights" className="hover:text-green-800 hover:underline">Sights</a></li>
                        <li><a href="#variants" className="hover:text-green-800 hover:underline">Variants</a></li>
                        <li><a href="#gallery" className="hover:text-green-800 hover:underline">Gallery</a></li>
                        <li><a href="#comparison" className="hover:text-green-800 hover:underline">Comparison to other bows</a></li>
                    </ol>
                )}
            </div>

            {/* Sections */}
            <div className="space-y-12 clear-both">
                
                {/* Ammo Section */}
                <div id="ammo">
                    <div className="flex items-center space-x-2 border-b border-gray-200 pb-2 mb-4">
                        <h2 className="text-2xl font-bold text-green-800">1. Arrows</h2>
                    </div>
                    <p className="text-gray-700 text-[16px] mb-4">With the Silver Ridge Peaks DLC release, bows can now use 3 kinds of arrows:</p>
                    
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
                    <div className="flex items-center space-x-2 border-b border-gray-200 pb-2 mb-4">
                        <h2 className="text-2xl font-bold text-green-800">2. Sights</h2>
                    </div>
                    <p className="text-gray-700 text-[16px] mb-4">
                        The Houyi Recurve Bow is a traditional bow and cannot be equipped with any sights.
                    </p>
                </div>

                {/* Variants Section */}
                <div id="variants">
                    <div className="flex items-center space-x-2 border-b border-gray-200 pb-2 mb-4">
                        <h2 className="text-2xl font-bold text-green-800">3. Variants</h2>
                    </div>
                    <div className="text-gray-700 font-sans text-[16px] leading-relaxed space-y-4">
                        <p>
                            The <strong className="text-gray-900">Houyi Recurve Bow Hidden Dragon</strong> is a variant with a black and gold bow, with red dragons on the limbs.
                        </p>
                        <p>
                            The <strong className="text-gray-900">Houyi Recurve Bow Moonlight</strong> is an alternate style featuring a monochromatic black and gray bow, with subtle patterns on the limbs.
                        </p>
                        <p>
                            The <strong className="text-gray-900">Houyi Recurve Bow Snakeskin</strong> is a version that looks identical to the normal one, but with the bows limbs being covered in a snakeskin pattern.
                        </p>
                    </div>
                </div>



                {/* Gallery */}
                <div id="gallery">
                    <div className="flex items-center space-x-2 border-b border-gray-200 pb-2 mb-4">
                        <h2 className="text-2xl font-bold text-green-800">4. Gallery</h2>
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                        {[
                            { title: "Standing", img: HouyiRecurveBowStanding }, 
                            { title: "Aiming (Standing)", img: HouyiRecurveBowAimingStanding }, 
                            { title: "Lying", img: HouyiRecurveBowLying }, 
                            { title: "Aiming (Lying)", img: HouyiRecurveBowAimingLying } 
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white border border-gray-300 p-2 shadow-sm rounded-sm" style={{ width: '240px', height: '162px' }}>
                                <div className="bg-gray-100 overflow-hidden relative group flex justify-center items-center h-[122px] border border-gray-200">
                                    <img 
                                        src={item.img} 
                                        alt={item.title} 
                                        className="object-contain h-full w-full transition-transform duration-300 group-hover:scale-105"
                                    />
                                      <div className="absolute bottom-1 right-1 bg-white/80 p-0.5 rounded shadow-sm border border-gray-100">
                                         <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                </div>
                                <p className="text-gray-700 text-xs mt-1 text-center font-medium">{item.title}</p>
                            </div>
                        ))}
                    </div>
                </div>

                 {/* Comparison Placeholder */}
                <div id="comparison">
                    <div className="flex items-center space-x-2 border-b border-gray-200 pb-2 mb-4">
                        <h2 className="text-2xl font-bold text-green-800">5. Comparison to other bows</h2>
                    </div>
                    <div className="relative group inline-block">
                        <img 
                            src={BowsDiagram} 
                            alt="Bow Comparison Chart" 
                            style={{ width: '400px', height: '200px' }}
                            className="border border-gray-300 shadow-md block opacity-100 hover:opacity-90 transition-opacity"
                        />
                         <div className="absolute bottom-2 right-2 bg-white/80 p-1 rounded hover:bg-white cursor-pointer shadow-sm">
                             <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </div>
                    </div>
                </div>

            </div>

        </div>

        <div className="mt-12">
            <WeaponsTable />
        </div>

        <div className="h-32"></div>
      </div>
    </div>
  );
}