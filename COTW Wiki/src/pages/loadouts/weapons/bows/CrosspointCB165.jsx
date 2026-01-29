import React, { useState } from 'react';
import WeaponsTable from '../../../../components/WeaponsTable';
import BowDiagram from '../../../../assets/Bows.webp';
import CrosspointIronsight from '../../../../assets/Crosspoint_ironsight.webp';
import CrosspointLying from '../../../../assets/Crosspoint_pose_3.webp';
import CrosspointCrouching from '../../../../assets/Crosspoint_pose_2.webp';
import CrosspointStanding from '../../../../assets/Crosspoint_pose_1.webp';
import CrosspointClassic from '../../../../assets/CrosspointCB165Classic.webp';
import CrosspointArctic from '../../../../assets/CrosspointCB165Arctic.webp';
import CrosspointDarkStar from '../../../../assets/CrosspointCB165DarkStar.webp';
import CrosspointWarden from '../../../../assets/CrosspointCB165Warden.webp';

// --- Main App Component ---
export default function App() {
  const [isTocOpen, setIsTocOpen] = useState(true);
  const [activeVariant, setActiveVariant] = useState('Classic');

  // Image URLs - These are now imported, so we comment out the old consts to avoid shadowing
  // const CrosspointImg = "https://static.wikia.nocookie.net/thehuntercotw/images/2/23/Bow_Crosspoint_CB-165.png";
  // const RifleDiagram = "https://static.wikia.nocookie.net/thehuntercotw/images/0/07/Rifle_Comparison_Chart.png"; // Placeholder for bow comparison
  
  // Using imported images for gallery items
  // const CrosspointStanding = CrosspointImg;
  // const CrosspointCrouching = CrosspointImg;
  // const CrosspointLying = CrosspointImg;
  // const CrosspointIronSight = CrosspointImg;

  // Data for Variants Slider
  const variants = [
    { 
      name: "Classic", 
      image: CrosspointClassic,
      desc: "The standard variant featuring a camouflage finish."
    },
    { 
      name: "Arctic", 
      image: CrosspointArctic,
      desc: "A variant featuring an arctic camouflage pattern."
    },
    { 
      name: "Dark Star", 
      image: CrosspointDarkStar,
      desc: "A variant featuring black powder painted metal and dark wooden body."
    },
    { 
      name: "Warden", 
      image: CrosspointWarden,
      desc: "A variant featuring a standard dark brown foliage pattern."
    }
  ];

  // Data for Ammo Table
  const ammoData = [
    { name: "300 gr. Small Game Point", pen: "10", exp: "0", class: "1-2", range: "20m", price: 530 },
    { name: "420 gr. Broadhead", pen: "50", exp: "0", class: "2-7", range: "20m", price: 700 },
    { name: "600 gr. Broadhead", pen: "90", exp: "0", class: "7-9", range: "20m", price: 880 },
  ];

  // Data for Sights List
  const sightsData = [
    "Hawken 1-5x30 Crossbow Scope"
  ];

  // Hawken Scope Ballistics Data
  const hawkenScopeData = {
    scope: "Hawken 1-5x30 Crossbow Scope",
    weapon: "Crosspoint CB-165",
    holdovers: {
      "300gr": {
        "20m": { top: 20, middle: 50, bottom: 75 },
        "40m": { top: 40, middle: 65, bottom: 95 },
        "60m": { top: 60, middle: 85, bottom: 115 }
      },
      "420gr": {
        "20m": { top: 20, middle: 40, bottom: 60 },
        "40m": { top: 40, middle: 60, bottom: 82 },
        "60m": { top: 60, middle: 80, bottom: 102 }
      },
      "600gr": {
        "20m": { top: 20, middle: 35, bottom: 50 },
        "40m": { top: 40, middle: 55, bottom: 68 },
        "60m": { top: 60, middle: 75, bottom: 90 }
      }
    }
  };

  const [activeScopeAmmo, setActiveScopeAmmo] = useState("420gr");

  return (
    <div className="min-h-screen text-gray-800 p-6 md:p-12 font-sans tracking-tight bg-white">
      
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <header className="flex flex-col md:flex-row md:items-center justify-between border-b border-gray-200 pb-4 mb-6">
          <h1 className="text-4xl md:text-5xl font-light mb-4 md:mb-0 text-green-800">
            Crosspoint CB-165
          </h1>
        </header>

        {/* Main Content Layout */}
        <div className="block">
            
            {/* Right Floated Infobox with Slider */}
            <div className="float-right w-72 ml-6 mb-4 bg-white border border-gray-300 shadow-xl font-sans">
                {/* Infobox Title */}
                <div className="bg-green-800 text-white text-center font-bold py-2 border-b border-gray-200 tracking-wide text-lg">
                    Crosspoint CB-165
                </div>

                {/* Variant Slider / Tabs */}
                <div className="flex overflow-x-auto whitespace-nowrap bg-gray-100 border-b border-gray-200 scrollbar-hide">
                  {variants.map((variant) => (
                    <button
                      key={variant.name}
                      onClick={() => setActiveVariant(variant.name)}
                      className={`px-4 py-2 text-xs font-bold transition-colors uppercase flex-shrink-0 ${
                        activeVariant === variant.name 
                          ? "text-green-800 border-b-2 border-green-800 bg-white" 
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
                <div className="bg-green-800 text-white text-center font-bold py-1 border-y border-gray-200 tracking-wide text-sm">
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
                        <div className="text-gray-600">4</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-100 p-2">
                        <div className="font-bold text-gray-700">Score</div>
                        <div className="text-gray-600">0</div>
                    </div>
                </div>

                {/* Statistics Header */}
                <div className="bg-green-800 text-white text-center font-bold py-1 border-y border-gray-200 tracking-wide text-sm">
                    Statistics
                </div>

                {/* Statistics Data */}
                <div className="text-sm bg-white">
                    <div className="grid grid-cols-2 border-b border-gray-100 p-2">
                        <div className="font-bold text-gray-700">Accuracy</div>
                        <div className="text-gray-600">45</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-100 p-2 bg-gray-50">
                        <div className="font-bold text-gray-700">Recoil</div>
                        <div className="text-gray-600">35</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-100 p-2">
                        <div className="font-bold text-gray-700">Reload</div>
                        <div className="text-gray-600">20</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-100 p-2 bg-gray-50">
                        <div className="font-bold text-gray-700">Hipshot</div>
                        <div className="text-gray-600">10</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-100 p-2">
                        <div className="font-bold text-gray-700">Magazine</div>
                        <div className="text-gray-600">5</div>
                    </div>

                </div>
            </div>

            {/* Intro Quote */}
            <blockquote className="mb-6 border-l-4 border-green-800 pl-4 italic text-gray-600 font-sans text-sm">
                <p className="mb-2">"This precision-crafted crossbow sports enough power to take down the largest game animals. With a beautiful woven carbon fiber barrel, a built-in rope-cocking device, and a 4-arrow quiver, the CB-165 is ideal for short-range hunting."</p>
                <cite>— In-Game Description</cite>
            </blockquote>

            {/* Main Description */}
            <div className="mb-8 text-gray-700 font-sans text-[16px] leading-relaxed">
                <p>
                    The <strong className="font-bold text-gray-900">Crosspoint CB-165</strong> is the only crossbow available to hunters. The high peak draw weight gives it a massive advantage over other bows when it comes to hunting big game. It is also capable of having a scope mounted for better long-distance shots. Thanks to sporting the highest accuracy among the bows, the effective range has been improved to around 80 meters.
                </p>
                <p className="mt-4">
                    This weapon is available as part of the <a href="#" className="text-green-800 hover:underline">Weapon Pack 1</a> DLC.
                </p>
                <p className="mt-4">
                    This weapon has its unique "Hawken 1-5x30 Crossbow Scope" available to purchase and use. None of the other scopes present in the game are compatible with crossbows.
                </p>
            </div>

            {/* Table of Contents */}
            <div className="mb-8 inline-block bg-gray-50 border border-gray-300 p-2 min-w-[250px]">
                <div className="flex justify-between items-center border-b border-gray-300 pb-1 mb-2">
                    <span className="font-bold text-gray-800 text-sm">Contents</span>
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
                        <a href="#" className="text-green-800"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                    </div>
                    <p className="text-gray-700 text-[16px] mb-4">Like all bows, it can use 3 different weights of arrow:</p>
                    
                    <div className="bg-white border border-gray-300 text-sm md:text-base font-sans overflow-x-auto">
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
                    <div className="flex items-center space-x-2 border-b border-gray-200 pb-2 mb-4">
                        <h2 className="text-2xl font-bold text-green-800">2. Sights</h2>
                        <a href="#" className="text-green-800"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                    </div>
                    <p className="text-gray-700 text-[16px] mb-4">
                        The following sights can be equipped on the Crosspoint CB-165:
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-4 text-green-800 text-lg">
                        {sightsData.map((sight, idx) => (
                            <li key={idx}><a href="#" className="hover:underline">{sight}</a></li>
                        ))}
                    </ul>

                    <p className="text-gray-700 text-[16px] mt-6 mb-2">
                        Hawken scope holdovers using max zoom (elevation, wind direction, and wind speed may effect distance):
                    </p>

                    {/* Hawken Scope Table */}
                    <div className="mt-2 bg-white border border-gray-300 p-4">
                        
                        {/* Ammo Selector */}
                        <div className="flex space-x-2 mb-4">
                            {Object.keys(hawkenScopeData.holdovers).map((weight) => (
                                <button
                                    key={weight}
                                    onClick={() => setActiveScopeAmmo(weight)}
                                    className={`px-4 py-2 text-sm font-bold uppercase transition-colors ${
                                        activeScopeAmmo === weight
                                            ? "bg-green-800 text-white"
                                            : "bg-gray-100 text-gray-600 hover:text-green-800 border border-gray-300"
                                    }`}
                                >
                                    {weight.replace("gr", " Grain")}
                                </button>
                            ))}
                        </div>

                        {/* Table */}
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse text-sm">
                                <thead>
                                    <tr className="bg-green-800 border-b border-green-900 text-white">
                                        <th className="p-3">Zero Range</th>
                                        <th className="p-3 text-white">Top Pin</th>
                                        <th className="p-3 text-white">Middle Pin</th>
                                        <th className="p-3 text-white">Bottom Pin</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-700 divide-y divide-gray-200">
                                    {Object.entries(hawkenScopeData.holdovers[activeScopeAmmo]).map(([range, pins]) => (
                                        <tr key={range} className="hover:bg-gray-50">
                                            <td className="p-3 font-bold text-gray-800">{range}</td>
                                            <td className="p-3">{pins.top}m</td>
                                            <td className="p-3">{pins.middle}m</td>
                                            <td className="p-3">{pins.bottom}m</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Variants Section */}
                <div id="variants">
                    <div className="flex items-center space-x-2 border-b border-gray-200 pb-2 mb-4">
                        <h2 className="text-2xl font-bold text-green-800">3. Variants</h2>
                        <a href="#" className="text-green-800"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                    </div>
                    <div className="text-gray-700 font-sans text-[16px] leading-relaxed space-y-4">
                        <p>
                            The <strong className="font-bold text-gray-900">Crosspoint CB-165 Arctic</strong> is a variant featuring an arctic camouflage pattern across the body of the crossbow.
                        </p>
                        <p>
                            The <strong className="font-bold text-gray-900">Crosspoint CB-165 Warden</strong> is an alternative style with a standard dark brown foliage pattern across the body, stock, and limbs.
                        </p>
                        <p>
                            The <strong className="font-bold text-gray-900">Crosspoint CB-165 Dark Star</strong> is a version that features black powder painted metal, paired with a dark wooden body and stock.
                        </p>
                    </div>
                </div>

                {/* Analysis */}
                <div id="gallery">
                    <div className="flex items-center space-x-2 border-b border-gray-200 pb-2 mb-4">
                        <h2 className="text-2xl font-bold text-green-800">4. Gallery</h2>
                        <a href="#" className="text-green-800"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                    </div>
                    <div className="flex flex-wrap gap-4"> 
                        {[
                            { title: "Standing", img: CrosspointStanding }, 
                            { title: "Crouching", img: CrosspointCrouching }, 
                            { title: "Lying", img: CrosspointLying }, 
                            { title: "Iron sight", img: CrosspointIronsight } 
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white border border-gray-200 p-2 shadow-sm" style={{ width: '240px', height: '162px' }}>
                                <div className="bg-gray-100 overflow-hidden relative group flex justify-center items-center h-[122px]">
                                     <img 
                                        src={item.img} 
                                        alt={item.title} 
                                        className="object-contain h-full w-full"
                                     />
                                      <div className="absolute bottom-1 right-1 bg-white/80 p-0.5 rounded shadow">
                                         <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                </div>
                                <p className="text-gray-600 text-xs mt-1 text-center font-semibold">{item.title}</p>
                            </div>
                        ))}
                    </div>
                </div>

                 {/* Comparison Placeholder */}
                <div id="comparison">
                    <div className="flex items-center space-x-2 border-b border-gray-200 pb-2 mb-4">
                        <h2 className="text-2xl font-bold text-green-800">5. Comparison to other bows</h2>
                        <a href="#" className="text-green-800"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                    </div>
                    <div className="bg-white border border-gray-200 p-2 shadow-sm inline-block">
                        <div className="bg-gray-100 overflow-hidden relative group flex justify-center items-center">
                            <img 
                                src={BowDiagram} 
                                alt="Bow Comparison Chart" 
                                style={{ width: '400px', height: '200px' }}
                                className="object-contain opacity-90 hover:opacity-100 transition-opacity"
                            />
                             <div className="absolute bottom-2 right-2 bg-white/80 p-1 rounded hover:bg-white cursor-pointer shadow">
                                 <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                        </div>
                    </div>
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