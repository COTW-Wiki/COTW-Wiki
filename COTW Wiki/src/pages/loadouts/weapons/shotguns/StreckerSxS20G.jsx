import React, { useState } from 'react';

import WeaponsTable from '../../../../components/WeaponsTable';
import StreckerScarlett from '../../../../assets/StreckerSxS20GScarlett.webp';
import StreckerFiona from '../../../../assets/StreckerSxS20GFiona.webp';
import StreckerHazel from '../../../../assets/StreckerSxS20GHazel.webp';
import StreckerRaven from '../../../../assets/StreckerSxS20GRaven.webp';
import StreckerStandingImg from '../../../../assets/Strecker_pose_1.webp';
import StreckerCrouchingImg from '../../../../assets/Strecker_pose_2.webp';
import StreckerLyingImg from '../../../../assets/Strecker_pose_3.webp';
import StreckerIronSightImg from '../../../../assets/Strecker_ironsight.webp';
import ShotgunDiagram from '../../../../assets/Shotgun_diagram_2020.webp';

// --- Main App Component ---
export default function App() {
  const [isTocOpen, setIsTocOpen] = useState(true);
  const [activeVariant, setActiveVariant] = useState('Scarlett');

  // Image URLs
  const StreckerImg = StreckerScarlett;
  const RifleDiagram = ShotgunDiagram;
  
  // Using the main image as a placeholder for gallery items
  const StreckerStanding = StreckerStandingImg;
  const StreckerCrouching = StreckerCrouchingImg;
  const StreckerLying = StreckerLyingImg;
  const StreckerIronSight = StreckerIronSightImg;

  // Data for Variants Slider
  const variants = [
    { 
      name: "Scarlett", 
      image: StreckerScarlett,
      desc: "A classic double-barrel shotgun chambered in 20 gauge with a reddish wood finish."
    },
    { 
      name: "Fiona", 
      image: StreckerFiona,
      desc: "An alternate style featuring an ebony and ivory design with gold accents."
    },
    { 
      name: "Hazel", 
      image: StreckerHazel,
      desc: "A variant designed to look like a traditional double-barrel."
    },
    { 
      name: "Raven", 
      image: StreckerRaven,
      desc: "A version with modern design elements such as a black body and barrel."
    }
  ];

  // Data for Ammo Table
  const ammoData = [
    { name: "20 GA Birdshot", pen: 0, exp: 0, class: "1", range: "25m", price: 150 },
    { name: "20 GA Buckshot", pen: 4, exp: 0, class: "2-5", range: "25m", price: 500 },
    { name: "20 GA Slug", pen: 33, exp: 16, class: "4-7", range: "50m", price: 800 },
    { name: "20 GA Steel Birdshot", pen: 0, exp: 0, class: "1", range: "25m", price: 150 },
  ];

  // Data for Sights List
  const sightsData = [
    "Marksman Exakt Reflex Sight"
  ];

  return (
    <div className="min-h-screen text-gray-900 p-6 md:p-12 font-sans tracking-tight">
      
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <header className="flex flex-col md:flex-row md:items-center justify-between border-b border-gray-200 pb-4 mb-6">
          <h1 className="text-4xl md:text-5xl font-light mb-4 md:mb-0">
            Strecker SxS 20G
          </h1>

        </header>

        {/* Main Content Layout */}
        <div className="block">
            
            {/* Right Floated Infobox with Slider */}
            <div className="float-right w-72 ml-6 mb-4 bg-white border border-gray-200 shadow-sm font-sans">
                {/* Infobox Title */}
                <div className="bg-white text-green-800 text-center font-bold py-2 border-b border-gray-200 tracking-wide text-lg">
                    Strecker SxS 20G
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
                        className="object-contain transition-opacity duration-300"
                        style={{ width: '268.4px', height: '134.2px' }}
                        onError={(e) => {e.target.src = StreckerImg}}
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
                        <div className="text-gray-800">4</div>
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
                        <div className="text-gray-800">10</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2 bg-gray-50">
                        <div className="font-bold text-gray-700">Hipshot</div>
                        <div className="text-gray-800">95</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2">
                        <div className="font-bold text-gray-700">Magazine</div>
                        <div className="text-gray-800">2</div>
                    </div>
                </div>
            </div>

            {/* Intro Quote */}
            <blockquote className="mb-6 border-l-4 border-green-800 pl-4 italic text-gray-700 font-sans text-sm">
                <p className="mb-2">"The little sister to the 12-Gauge Shotgun, the 20-Gauge's lower velocity rounds and weight mean lower recoil and better handling: the right tools to deal with fast-moving prey. Quick to fire, easy to operate even from the hip and great to show-off, the Strecker SxS 20G is the way to go for any discerning hunter of small and upland deer."</p>
                <cite>― In-Game Description</cite>
            </blockquote>

            {/* Main Description */}
            <div className="mb-8 text-gray-800 font-sans text-[16px] leading-relaxed">
                <p>
                    The <strong className="text-green-800">Strecker SxS 20G Scarlett</strong> is a classic double-barrel shotgun chambered in 20 gauge.
                </p>
                <p className="mt-4">
                    This weapon is available as part of the <a href="#" className="text-green-800 hover:underline">Wild Goose Chase Gear</a> DLC.
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
                        <li><a href="#gallery" className="hover:text-gray-900 hover:underline">Gallery</a></li>
                        <li><a href="#comparison" className="hover:text-gray-900 hover:underline">Comparison to other shotguns</a></li>
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
                    <p className="text-gray-800 text-[16px] mb-4">As with most shotguns, several variants of its ammunition are available:</p>
                    
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
                    <p className="text-gray-800 text-[16px] mb-4">The following sights can be equipped on the Strecker SxS 20G:</p>
                    
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
                            The <strong className="text-green-800">Strecker SxS 20G Fiona</strong> is an alternate style that features an ebony and ivory design of a white body, and black receiver and barrel. This is paired with slight gold accents.
                        </p>
                         <p>
                            The <strong className="text-green-800">Strecker SxS 20G Hazel</strong> is a variant that is designed to look like a traditional double-barrel.
                        </p>
                        <p>
                            The <strong className="text-green-800">Strecker SxS 20G Raven</strong> is a version with modern design elements such as a black body and barrel.
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
                            Considered the little sister of the Caversham Steward 12G, it has many of the same strengths as its bigger brother. It is however less powerful due to its 20 gauge shells.
                        </p>
                        <p>
                             As for buckshot – in this game it is never effective. And when hunting big game rifles are preferred.
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
                        The Strecker SxS is modeled after its real-life counterpart of the Savage/A.H. Fox Model B.
                    </p>
                </div>

                {/* Gallery */}
                <div id="gallery">
                    <div className="flex items-center space-x-2 border-b border-gray-200 pb-2 mb-4">
                        <h2 className="text-2xl font-bold text-gray-900">6. Gallery</h2>
                        <a href="#" className="text-green-800"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                        {[
                            { title: "Standing", img: StreckerStanding }, 
                            { title: "Crouching", img: StreckerCrouching }, 
                            { title: "Lying", img: StreckerLying }, 
                            { title: "Iron sight", img: StreckerIronSight } 
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white border border-gray-200 p-2" style={{ width: '240px', height: '162px' }}>
                                <div className="bg-gray-100 overflow-hidden relative group flex justify-center items-center h-[122px]">
                                     <img 
                                        src={item.img} 
                                        alt={item.title} 
                                        className="object-contain h-full w-full"
                                     />
                                      <div className="absolute bottom-1 right-1 bg-black/60 p-0.5 rounded">
                                         <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                </div>
                                <p className="text-gray-700 text-xs mt-1 text-center">{item.title}</p>
                            </div>
                        ))}
                    </div>
                </div>

                 {/* Comparison Placeholder */}
                <div id="comparison">
                    <div className="flex items-center space-x-2 border-b border-gray-200 pb-2 mb-4">
                        <h2 className="text-2xl font-bold text-gray-900">7. Comparison to other shotguns</h2>
                        <a href="#" className="text-green-800"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                    </div>
                    <div className="relative group">
                        <img 
                            src={RifleDiagram} 
                            alt="Shotgun Comparison Chart" 
                            className="border border-gray-200 shadow-md block opacity-90 hover:opacity-100 transition-opacity"
                            style={{ width: '400px', height: '200px' }}
                        />
                         <div className="absolute bottom-2 right-2 bg-black/60 p-1 rounded hover:bg-black/80 cursor-pointer">
                             <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </div>
                    </div>
                </div>

            </div>

        </div>

        <div className="mt-8 mb-8">
            <WeaponsTable activeItem="Strecker SxS 20G" />
        </div>

        <div className="h-32"></div>
      </div>
    </div>
  );
}   