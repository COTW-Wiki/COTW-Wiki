import MangiaficoColtFlatBlack from '../../../../assets/Mangiafico41045ColtFlatBlack.webp';
import MangiaficoColtPolishedSteel from '../../../../assets/Mangiafico41045ColtPolishedSteel.webp';
import MangiaficoColtMuertos from '../../../../assets/Mangiafico41045ColtMuertos.webp';
import HandgunsDiagram from '../../../../assets/Handgun_diagram_2020.webp';
import MangiaficoCrouching from '../../../../assets/Mangiafico_crouching.webp';
import MangiaficoStanding from '../../../../assets/Mangiafico_standing.webp';
import MangiaficoLying from '../../../../assets/Mangiafico_lying.webp';
import MangiaficoIronsight from '../../../../assets/Mangiafico_iron_sight.webp';
import React, { useState } from 'react';
import WeaponsTable from '../../../../components/WeaponsTable';

// --- Embedded WeaponsTable Component removed ---

// --- Main App Component ---
export default function App() {
  const [isTocOpen, setIsTocOpen] = useState(true);
  const [activeVariant, setActiveVariant] = useState('Flat Black');

  // Data for Variants Slider
  const variants = [
    { 
      name: "Flat Black", 
      image: MangiaficoColtFlatBlack,
      desc: "The standard variant featuring a durable matte black finish."
    },
    { 
      name: "Muertos", 
      image: MangiaficoColtMuertos,
      desc: "A special edition variant with a unique 'Day of the Dead' inspired design."
    },
     { 
      name: "Polished Steel", 
      image: MangiaficoColtPolishedSteel,
      desc: "A variant featuring a shiny polished steel finish."
    }
  ];

  // Data for Ammo Table
  const ammoData = [
    { name: ".45 Colt Flat Nose Hard-Cast", pen: 17, exp: 70, class: "2-5", range: "50m", price: 530 },
    { name: ".45 Colt Full Metal Jacket", pen: 55, exp: 6, class: "2-5", range: "50m", price: 600 },
    { name: ".410 Birdshot", pen: 0, exp: 0, class: "1", range: "25m", price: 200 },
  ];

  // Data for Sights List
  const sightsData = [
    "Goshawk Redeye 2-4x20 Handgun Scope",
    "Hermes 3-7x33 Handgun-Shotgun Scope"
  ];

  return (
    <div className="min-h-screen text-gray-900 p-6 md:p-12 font-sans tracking-tight bg-white">
      
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <header className="flex flex-col md:flex-row md:items-center justify-between border-b border-green-800/20 pb-4 mb-6">
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4 md:mb-0">
            Mangiafico 410/45 Colt
          </h1>

        </header>

        {/* Main Content Layout */}
        <div className="block">
            
            {/* Right Floated Infobox with Slider */}
            <div className="float-right w-72 ml-6 mb-4 bg-white border border-gray-200 shadow-xl font-sans">
                {/* Infobox Title */}
                <div className="bg-green-800 text-white text-center font-bold py-2 border-b border-green-900 tracking-wide text-lg">
                    Mangiafico 410/45 Colt
                </div>

                {/* Variant Slider / Tabs */}
                <div className="flex overflow-x-auto whitespace-nowrap bg-gray-50 border-b border-gray-200 scrollbar-hide">
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
                        <div className="text-green-800">1.5</div>
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
                        <div className="text-green-800">40</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2 bg-gray-50">
                        <div className="font-bold text-gray-700">Recoil</div>
                        <div className="text-green-800">70</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2">
                        <div className="font-bold text-gray-700">Reload</div>
                        <div className="text-green-800">60</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2 bg-gray-50">
                        <div className="font-bold text-gray-700">Hipshot</div>
                        <div className="text-green-800">95</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2">
                        <div className="font-bold text-gray-700">Magazine</div>
                        <div className="text-green-800">6</div>
                    </div>
                </div>
            </div>

            {/* Intro Quote */}
            <blockquote className="mb-6 border-l-4 border-green-800 pl-4 italic text-gray-600 font-sans text-sm">
                <p className="mb-2">"This sleek, modern revolver is the ideal companion for hunters looking for versatility at short distances. Load with .410 shotshells for hunting small game and waterfowl or with .45 Long Colt for small big game species such as roe deer and springbok. A small handgun for all small game."</p>
                <cite>— In-Game Description</cite>
            </blockquote>

            {/* Main Description */}
            <div className="mb-8 text-gray-700 font-sans text-[16px] leading-relaxed">
                <p>
                    The <strong className="text-gray-900">Mangiafico 410/45 Colt Flat Black</strong> is a unique handgun as it can load both standard .45 Long Colt rounds, in addition to .410 birdshot shells. This makes it a very versatile sidearm for hunters.
                </p>
                <p className="mt-4">
                    This weapon is available as part of the <a href="#" className="text-green-800 hover:underline">Weapon Pack 2</a> DLC.
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
                        <li><a href="#analysis" className="hover:text-green-800 hover:underline">Analysis</a></li>
                        <li><a href="#trivia" className="hover:text-green-800 hover:underline">Trivia</a></li>
                        <li><a href="#gallery" className="hover:text-green-800 hover:underline">Gallery</a></li>
                        <li><a href="#comparison" className="hover:text-green-800 hover:underline">Comparison to other handguns</a></li>
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
                    <p className="text-gray-700 text-[16px] mb-4">As with most pistols, two variants of its <a href="#" className="text-green-800 hover:underline">ammunition</a> are available:</p>
                    
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
                        The following sights can be equipped on the Mangiafico 410/45 Colt:
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-4 text-green-800 text-lg">
                        {sightsData.map((sight, idx) => (
                            <li key={idx}><a href="#" className="hover:underline">{sight}</a></li>
                        ))}
                    </ul>
                </div>

                {/* Variants Section */}
                <div id="variants">
                    <div className="flex items-center space-x-2 border-b border-green-800/50 pb-2 mb-4">
                        <h2 className="text-2xl font-bold text-green-800">3. Variants</h2>
                        <a href="#" className="text-green-800"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                    </div>
                    <div className="text-gray-700 font-sans text-[16px] leading-relaxed space-y-4">
                        <p>
                            <strong className="text-gray-900">Flat Black</strong> has a discreet neutral look.
                        </p>
                        <p>
                            <strong className="text-gray-900">Colt Muertos</strong> is a luxurious looking variation featuring a brushed gold plated body, with a black grip, inlaid with Día de Muertos decoration and symbology.
                        </p>
                         <p>
                            <strong className="text-gray-900">Polished Steel</strong> is an alternate style with a polished stainless steel body and grip. The grip is patterned in a hexagonal formation.
                        </p>
                    </div>
                </div>

                {/* Analysis */}
                <div id="analysis">
                    <div className="flex items-center space-x-2 border-b border-green-800/50 pb-2 mb-4">
                        <h2 className="text-2xl font-bold text-green-800">4. Analysis</h2>
                        <a href="#" className="text-green-800"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                    </div>
                    <div className="text-gray-700 font-sans text-[16px] leading-relaxed space-y-4">
                        <p>
                            The Mangiafico sits in a unique spot, since it´s ability to fire both birdshot shells as well as regular revolver ammunition means it can effectively take out animals from class 1 -5. It is one of only 2 non bow or shotgun weapons in the game able to effectively kill animals of class 1 and higher (the other being the <a href="#" className="text-green-800 hover:underline">Kullman .22H</a>).
                        </p>
                        <p>
                            The <a href="#" className="text-green-800 hover:underline">.45 Colt Full Metal Jacket Bullet</a> retains great penetration throughout its performance range and although its stopping power will decrease a bit with higher class animals, it is still pretty decent at class 5. In addition, this revolver is capable of firing <a href="#" className="text-green-800 hover:underline">.410 Birdshot</a> shells wich can kill all class 1 animals with full integrity.
                        </p>
                        <p>
                            The downside is that these shells pack less power and pellets compared to regular birdshot shells used in shotguns and thus will generally have a harder time dealing with bigger birds like geese and turkeys, sometimes taking significantly longer to down them. The upside is that you have a total of 6 rounds you can fire in succession before needing to reload, wich compensates a bit for the lack of pellets and power. The <a href="#" className="text-green-800 hover:underline">.410 Birdshot</a> performs best on rabbits, hares and smaller birds up to ducks and pheasants. Like most birdshot shells, even with the zeroing perk in effect the pellets tend to drop a little more at range, so it is advisable to aim just a tiny bit higher when using them.
                        </p>
                        <div className="bg-gray-100 border-l-4 border-green-800 p-4 mt-4">
                            <p className="font-bold text-green-900 mb-2">In conclusion:</p>
                            <p>
                                A fantastic little handgun wich performs great throughout class 2-5. And while noticably weaker than regular shotguns, it´s birdshot rounds perform decently well on smaller class 1 animals up to ducks and pheasants, while struggling a bit with bigger ones.
                            </p>
                            <p className="mt-2">
                                If you want to specifically hunt birds (and dont want to challenge yourself), pack an actual shot gun instead of this revolver, as it wil be more powerful and better suited to deal with even the biggest birds. In any other case, the Mangiafico is a fantastic choice for a light and versatile little handgun with the added ability to hunt the occasional bird or rabbits, wich thanks to its low weight will fit into many loadouts.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Trivia */}
                <div id="trivia">
                    <div className="flex items-center space-x-2 border-b border-green-800/50 pb-2 mb-4">
                        <h2 className="text-2xl font-bold text-green-800">5. Trivia</h2>
                        <a href="#" className="text-green-800"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                    </div>
                    <ul className="list-disc list-inside text-gray-700 font-sans text-[16px] space-y-2">
                        <li>The Mangiafico 410/45 is modeled after its real-life counterpart of the Taurus Judge.</li>
                        <li>It is the only pistol in game that can use shotgun rounds.</li>
                        <li>Muertos means "dead" in Spanish. In Spanish-colonial culture, death is not an unambiguously negative concept, it is highly romanticized, and there is a culture of holidays and decorations around it.</li>
                    </ul>
                </div>

                {/* Gallery */}
                <div id="gallery">
                    <div className="flex items-center space-x-2 border-b border-green-800/50 pb-2 mb-4">
                        <h2 className="text-2xl font-bold text-green-800">6. Gallery</h2>
                        <a href="#" className="text-green-800"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                        {[
                            { title: "Standing", img: MangiaficoStanding }, 
                            { title: "Crouching", img: MangiaficoCrouching }, 
                            { title: "Lying", img: MangiaficoLying }, 
                            { title: "Iron sight", img: MangiaficoIronsight } 
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
                    <div className="flex items-center space-x-2 border-b border-green-800/50 pb-2 mb-4">
                        <h2 className="text-2xl font-bold text-green-800">7. Comparison to other handguns</h2>
                        <a href="#" className="text-green-800"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                    </div>
                    <div className="bg-white border border-gray-200 p-2 inline-block">
                        <div className="bg-gray-100 overflow-hidden relative group flex justify-center items-center">
                            <img 
                                src={HandgunsDiagram} 
                                alt="Handgun Comparison Chart" 
                                style={{ width: '400px', height: '200px' }}
                                className="object-contain"
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

        </div>

        <div className="mt-12">
            <WeaponsTable activeItem="Mangiafico 410/45 Colt" />
        </div>

        <div className="h-32"></div>
      </div>
    </div>
  );
}