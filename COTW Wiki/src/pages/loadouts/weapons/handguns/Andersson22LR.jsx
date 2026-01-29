import WeaponsTable from "../../../../components/WeaponsTable";
import AnderssonLRWoodsman from "../../../../assets/Andersson22LRWoodsman.webp";
import AnderssonLRDefender from "../../../../assets/Andersson22LRDefender.webp";
import AnderssonLRMarksman from "../../../../assets/Andersson22LRMarksman.webp";
import HandgunsDiagram from '../../../../assets/Handgun_diagram_2020.webp';
import React, { useState } from 'react';
import AnderssonCrouching from '../../../../assets/Andersson_crouching.webp';
import AnderssonLying from '../../../../assets/Andersson_lying.webp';
import AnderssonStanding from '../../../../assets/Andersson_standing.webp';
import AnderssonIronSight from '../../../../assets/Andersson_iron_sight.webp';

// --- Embedded WeaponsTable Component removed to use imported one ---

// --- Main App Component ---
export default function App() {
  const [isTocOpen, setIsTocOpen] = useState(true);
  const [activeVariant, setActiveVariant] = useState('Woodsman');

  // Image URLs
  const AnderssonImg = "https://static.wikia.nocookie.net/thehuntercotw/images/6/6f/Handgun_Andersson_22LR.png";
  const RifleDiagram = "https://static.wikia.nocookie.net/thehuntercotw/images/0/07/Rifle_Comparison_Chart.png"; // Placeholder for handgun comparison
  
  // Data for Variants Slider
  const variants = [
    { 
      name: "Woodsman", 
      image: AnderssonLRWoodsman,
      desc: "The standard variant featuring a textured wood grip and black slide."
    },
    { 
      name: "Marksman", 
      image: AnderssonLRMarksman,
      desc: "A variant with a black polymer grip for a more tactical look."
    },
    { 
        name: "Defender", 
        image: AnderssonLRDefender,
        desc: "A variant with a black polymer grip for a more tactical look."
      }
  ];

  // Data for Ammo Table
  const ammoData = [
    { name: ".22LR Truncated Cone", pen: 17, exp: 1, class: "1", range: "100m", price: 250 },
    { name: ".22LR Jacketed Hollow-Point", pen: 5, exp: 10, class: "1", range: "100m", price: 200 },
  ];

  // Data for Sights List
  const sightsData = [
    "Goshawk Redeye 2-4x20 Handgun Scope",
    "Hermes 3-7x33 Handgun-Shotgun Scope",
    "Red Raptor Reflex Sight",
    "Marksman Exakt Reflex Sight",
    "Tru-Vision Tritium Sights"
  ];

  return (
    <div className="min-h-screen text-gray-900 p-6 md:p-12 font-sans tracking-tight bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="flex flex-col md:flex-row md:items-center justify-between border-b border-green-800/20 pb-4 mb-6">
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4 md:mb-0">
            Andersson .22LR
          </h1>

        </header>

        {/* Main Content Layout */}
        <div className="block">
            
            {/* Right Floated Infobox with Slider */}
            <div className="float-right w-72 ml-6 mb-4 bg-gray-50 border border-gray-200 shadow-md font-sans">
                {/* Infobox Title */}
                <div className="bg-green-800 text-white text-center font-bold py-2 border-b border-green-900 tracking-wide text-lg">
                    Andersson .22LR
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
                <div className="p-4 flex justify-center bg-white relative min-h-[160px] items-center border-b border-gray-200">
                    <img 
                        src={variants.find(v => v.name === activeVariant).image} 
                        alt={activeVariant} 
                        style={{ width: '268.4px', height: '134.2px' }}
                        className="object-contain transition-opacity duration-300"
                        onError={(e) => {e.target.src = AnderssonImg}}
                    />
                </div>

                {/* General Information Header */}
                <div className="bg-green-800 text-white text-center font-bold py-1 border-y border-green-900 tracking-wide text-sm">
                    General Information
                </div>

                {/* General Information Data */}
                <div className="text-sm bg-gray-50">
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2">
                        <div className="font-bold text-gray-700">Value</div>
                        <div className="text-gray-900">0</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2 bg-white">
                        <div className="font-bold text-gray-700">Weight</div>
                        <div className="text-gray-900">1</div>
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
                <div className="text-sm bg-gray-50">
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2">
                        <div className="font-bold text-gray-700">Accuracy</div>
                        <div className="text-gray-900">100</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2 bg-white">
                        <div className="font-bold text-gray-700">Recoil</div>
                        <div className="text-gray-900">10</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2">
                        <div className="font-bold text-gray-700">Reload</div>
                        <div className="text-gray-900">49</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2 bg-white">
                        <div className="font-bold text-gray-700">Hipshot</div>
                        <div className="text-gray-900">86</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2">
                        <div className="font-bold text-gray-700">Magazine</div>
                        <div className="text-gray-900">10</div>
                    </div>
                </div>
            </div>

            {/* Intro Quote */}
            <blockquote className="mb-6 border-l-4 border-green-800 pl-4 italic text-gray-600 font-sans text-sm bg-gray-50 py-2 pr-2">
                <p className="mb-2">"The Andersson .22LR is a small caliber semi-automatic pistol. Its compact size, negligible recoil and impressive firing rate make it practical for a wide variety of applications, from target shooting to small game hunting and personal defense. This .22LR pistol shoots as beautifully as it looks and features a variety of customization options, as is customary for Andersson firearms."</p>
                <cite className="text-gray-500">― In-Game Description</cite>
            </blockquote>

            {/* Main Description */}
            <div className="mb-8 text-gray-900 font-sans text-[16px] leading-relaxed">
                <p>
                    The <strong className="text-green-800">Andersson .22LR</strong> is a semi-automatic pistol, ideal for hunting small game such as rabbits. While the .22 LR cartridge lacks the penetration to be effective against small deer, it excels at hunting rabbits. Thanks to the large magazine, it can offer quick follow up shots when shooting multiple targets in rapid succession.
                </p>
                <p className="mt-4">
                    This weapon is available as part of the <a href="#" className="text-green-800 hover:underline font-bold">Weapon Pack 3</a> DLC.
                </p>
            </div>

            {/* Table of Contents */}
            <div className="mb-8 inline-block bg-gray-50 border border-gray-200 p-4 min-w-[250px] shadow-sm rounded-sm">
                <div className="flex justify-between items-center border-b border-gray-200 pb-2 mb-2">
                    <span className="font-bold text-gray-900 text-lg">Contents</span>
                    <button onClick={() => setIsTocOpen(!isTocOpen)} className="text-green-800 text-xs hover:underline font-bold">[{isTocOpen ? 'hide' : 'show'}]</button>
                </div>
                {isTocOpen && (
                    <ol className="list-decimal list-inside text-green-800 text-sm space-y-1 font-sans font-medium">
                        <li><a href="#ammo" className="hover:underline">Ammo</a></li>
                        <li><a href="#sights" className="hover:underline">Sights</a></li>
                        <li><a href="#variants" className="hover:underline">Variants</a></li>
                        <li><a href="#analysis" className="hover:underline">Analysis</a></li>
                        <li><a href="#trivia" className="hover:underline">Trivia</a></li>
                        <li><a href="#gallery" className="hover:underline">Gallery</a></li>
                        <li><a href="#comparison" className="hover:underline">Comparison to other handguns</a></li>
                    </ol>
                )}
            </div>

            {/* Sections */}
            <div className="space-y-12 clear-both">
                
                {/* Ammo Section */}
                <div id="ammo">
                    <div className="flex items-center space-x-2 border-b border-green-800/20 pb-2 mb-4">
                        <h2 className="text-2xl font-bold text-green-800">1. Ammo</h2>
                        <a href="#" className="text-gray-400 hover:text-green-800"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                    </div>
                    <p className="text-gray-900 text-[16px] mb-4">This handgun has two types of ammo available:</p>
                    
                    <div className="bg-white border border-gray-200 shadow-sm text-sm md:text-base font-sans overflow-x-auto">
                         <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-green-800 border-b border-green-900 text-white font-bold">
                                    <th className="p-3">Ammo</th>
                                    <th className="p-3">Penetration</th>
                                    <th className="p-3">Expansion</th>
                                    <th className="p-3">Class</th>
                                    <th className="p-3">Range</th>
                                    <th className="p-3">Price</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-900 divide-y divide-gray-200">
                                {ammoData.map((item, idx) => (
                                    <tr key={idx} className="hover:bg-gray-50 even:bg-gray-50/50">
                                        <td className="p-3 text-green-800 font-bold hover:underline cursor-pointer">{item.name}</td>
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
                    <p className="text-gray-900 text-[16px] mt-4">This is the same ammo that Virant and Zarza-15 use.</p>
                </div>

                {/* Sights Section */}
                <div id="sights">
                    <div className="flex items-center space-x-2 border-b border-green-800/20 pb-2 mb-4">
                        <h2 className="text-2xl font-bold text-green-800">2. Sights</h2>
                        <a href="#" className="text-gray-400 hover:text-green-800"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                    </div>
                    <p className="text-gray-900 text-[16px] mb-4">
                        The Andersson .22LR supports standard handgun optics:
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-4 text-green-800 text-lg">
                        {sightsData.map((sight, idx) => (
                            <li key={idx}><a href="#" className="hover:underline">{sight}</a></li>
                        ))}
                    </ul>
                </div>

                {/* Variants Section */}
                <div id="variants">
                    <div className="flex items-center space-x-2 border-b border-green-800/20 pb-2 mb-4">
                        <h2 className="text-2xl font-bold text-green-800">3. Variants</h2>
                        <a href="#" className="text-gray-400 hover:text-green-800"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                    </div>
                    <div className="text-gray-900 font-sans text-[16px] leading-relaxed space-y-4">
                        <p>
                            The <strong className="text-green-800">Andersson .22LR Marksman</strong> is an alternative style with a brushed gold exterior and a black grip.
                        </p>
                        <p>
                            The <strong className="text-green-800">Andersson .22LR Defender</strong> is a variant with a black steel body, and a military brown grip.
                        </p>
                    </div>
                </div>

                {/* Analysis */}
                <div id="analysis">
                    <div className="flex items-center space-x-2 border-b border-green-800/20 pb-2 mb-4">
                        <h2 className="text-2xl font-bold text-green-800">4. Analysis</h2>
                        <a href="#" className="text-gray-400 hover:text-green-800"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                    </div>
                    <div className="text-gray-900 font-sans text-[16px] leading-relaxed space-y-4">
                        <p>
                            This pistol is a functional copy of Virant rifle. All their characteristics are absolutely identical, apart from the weight. The Andersson weighs noticeably less. And they are the best non-shotguns for hunting class 1 game.
                        </p>
                    </div>
                </div>

                {/* Trivia */}
                <div id="trivia">
                    <div className="flex items-center space-x-2 border-b border-green-800/20 pb-2 mb-4">
                        <h2 className="text-2xl font-bold text-green-800">5. Trivia</h2>
                        <a href="#" className="text-gray-400 hover:text-green-800"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                    </div>
                    <ul className="list-disc list-inside text-gray-900 font-sans text-[16px] space-y-2">
                        <li>The Andersson .22LR is modeled after its real-life counterpart of the Ruger Mark II.</li>
                        <li>It&#39;s the only gun in the game that is incapable to use the Zeroing perk to get a zero beyond the effective range of it&#39;s ammunition</li>
                        <li>The Woodsman variant seems to be a reference to the Colt Woodsman, which Ruger incorporated into their pistol designs.</li>
                        <li>Despite being aesthetically similar to the &quot;Luger P08&quot; pistol, Ruger is not related to the German company in anyway.</li>
                        <li>Ruger&#39;s first pistol, the Ruger Standard chambered in .22lr, is considered the most popular target pistol of all time.</li>
                    </ul>
                </div>

                {/* Gallery */}
                <div id="gallery">
                    <div className="flex items-center space-x-2 border-b border-green-800/20 pb-2 mb-4">
                        <h2 className="text-2xl font-bold text-green-800">6. Gallery</h2>
                        <a href="#" className="text-gray-400 hover:text-green-800"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                        {[
                            { title: "Standing", img: AnderssonStanding }, 
                            { title: "Crouching", img: AnderssonCrouching }, 
                            { title: "Lying", img: AnderssonLying }, 
                            { title: "Iron sight", img: AnderssonIronSight } 
                        ].map((item, idx) => (
                            <div key={idx} className="bg-gray-100 border border-gray-300 p-2" style={{ width: '240px', height: '162px' }}>
                                <div className="bg-white overflow-hidden relative group flex justify-center items-center h-[122px] border border-gray-200">
                                    <img 
                                        src={item.img} 
                                        alt={item.title} 
                                        className="object-contain h-full w-full"
                                    />
                                      <div className="absolute bottom-1 right-1 bg-white/80 p-0.5 rounded border border-gray-300">
                                         <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                </div>
                                <p className="text-gray-700 text-xs mt-1 text-center font-bold">{item.title}</p>
                            </div>
                        ))}
                    </div>
                </div>

                 {/* Comparison Placeholder */}
                <div id="comparison">
                    <div className="flex items-center space-x-2 border-b border-green-800/20 pb-2 mb-4">
                        <h2 className="text-2xl font-bold text-green-800">7. Comparison to other handguns</h2>
                        <a href="#" className="text-gray-400 hover:text-green-800"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                    </div>
                    <div className="relative group">
                        <img 
                            src={HandgunsDiagram} 
                            alt="Handgun Comparison Chart" 
                            style={{ width: '400px', height: '200px' }}
                            className="border border-gray-300 shadow-md block opacity-90 hover:opacity-100 transition-opacity"
                        />
                         <div className="absolute bottom-2 right-2 bg-white/80 p-1 rounded hover:bg-white cursor-pointer border border-gray-300">
                             <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
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