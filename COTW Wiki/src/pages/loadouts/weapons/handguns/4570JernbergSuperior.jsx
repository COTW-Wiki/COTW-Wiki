import React, { useState } from 'react';
import JernbergSupeior from '../../../../assets/45-70JernbergSuperior.webp';
import WeaponsTable from '../../../../components/WeaponsTable';

// --- Main App Component ---
export default function App() {
  const [isTocOpen, setIsTocOpen] = useState(true);

  // Image URLs
  const JernbergImg = "https://static.wikia.nocookie.net/thehuntercotw/images/d/d3/Handgun_45-70_Jernberg_Superior.png";
  const RifleDiagram = "https://static.wikia.nocookie.net/thehuntercotw/images/0/07/Rifle_Comparison_Chart.png"; // Placeholder for handgun comparison
  
  // Using the main image as a placeholder for gallery items
  const JernbergStanding = JernbergImg;
  const JernbergCrouching = JernbergImg;
  const JernbergLying = JernbergImg;
  const JernbergIronSight = JernbergImg;

  // Data for Ammo Table
  const ammoData = [
    { name: ".45-70 Hollow-Point", pen: 20, exp: 27, class: "4-9", range: "75m", price: 660 },
    { name: ".45-70 Soft-Point Flat Nose", pen: 40, exp: 6, class: "4-9", range: "75m", price: 390 },
  ];

  // Data for Sights List
  const sightsData = [
    "Red Raptor Reflex Sight",
    "Ascent 1-4x24 Rifle Scope",
    "Hyperion 4-8x42 Rifle Scope",
    "Odin 4-12x33 Rifle Scope",
    "Argus 8-16x50 Rifle Scope",
    "GenZero 1-4x20 Night Vision Rifle Scope",
    "Angler 4-8x100 Night Vision Rifle Scope"
  ];

  return (
    <div className="min-h-screen text-gray-900 p-6 md:p-12 font-sans tracking-tight bg-white" style={{ fontFamily: '"Roboto Condensed", sans-serif' }}>
       {/* Add Google Font link dynamically */}
      <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
      
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <header className="flex flex-col md:flex-row md:items-center justify-between border-b border-green-800/20 pb-4 mb-6">
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4 md:mb-0">
            .45-70 Jernberg Superior
          </h1>

        </header>

        {/* Main Content Layout */}
        <div className="block">
            
            {/* Right Floated Infobox with Slider */}
            <div className="float-right w-72 ml-6 mb-4 bg-white border border-gray-200 shadow-xl font-sans">
                {/* Infobox Title */}
                <div className="bg-green-800 text-white text-center font-bold py-2 border-b border-green-900 tracking-wide text-lg">
                    .45-70 Jernberg Superior
                </div>

                {/* Image Area */}
                <div className="p-4 flex justify-center bg-gray-50 relative min-h-[160px] items-center">
                    <img 
                        src={JernbergSupeior} 
                        alt=".45-70 Jernberg Superior" 
                        style={{ width: '268.4px', height: '134.2px', objectFit: 'contain' }}
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
                        <div className="text-green-800">1</div>
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
                        <div className="text-green-800">75</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2 bg-gray-50">
                        <div className="font-bold text-gray-700">Recoil</div>
                        <div className="text-green-800">62</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2">
                        <div className="font-bold text-gray-700">Reload</div>
                        <div className="text-green-800">58</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2 bg-gray-50">
                        <div className="font-bold text-gray-700">Hipshot</div>
                        <div className="text-green-800">25</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2">
                        <div className="font-bold text-gray-700">Magazine</div>
                        <div className="text-green-800">1</div>
                    </div>
                </div>
            </div>

            {/* Intro Quote */}
            <blockquote className="mb-6 border-l-4 border-green-800 pl-4 italic text-gray-600 font-sans text-sm">
                <p className="mb-2">"With its single-shot, break-action design, the Jernberg Superior is ideal for both hunters and sharpshooters. It packs a punch with its .45-70 caliber rounds and can be easily customized with any regular rifle scope to suit your needs. It's more than a simple tool - it's a testament to craftsmanship and precision."</p>
                <cite>— In-Game Description</cite>
            </blockquote>

            {/* Main Description */}
            <div className="mb-8 text-gray-700 font-sans text-[16px] leading-relaxed">
                <p>
                    The <strong className="text-gray-900">.45-70 Jernberg Superior</strong> is a single shot handgun that is Modeled after the Tompson/Center Contender for which 45/70 was the largest factory chambering available
                </p>
                <p className="mt-4">
                    This weapon is available as part of the <a href="#" className="text-green-800 hover:underline">High Caliber Weapon Pack</a> DLC.
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
                    <p className="text-gray-700 text-[16px] mb-4">This handgun has two types of ammunition available:</p>
                    
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
                    <p className="text-gray-700 text-[16px] mb-4">
                        The following sights can be equipped on the .45-70 Jernberg Superior:
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-4 text-green-800 text-lg">
                        {sightsData.map((sight, idx) => (
                            <li key={idx}><a href="#" className="hover:underline">{sight}</a></li>
                        ))}
                    </ul>
                </div>

            </div>

        </div>

        <div className="mt-8 mb-8">
            <WeaponsTable activeItem=".45-70 Jernberg Superior" />
        </div>

        <div className="h-32"></div>
      </div>
    </div>
  );
}