import { useState } from 'react';
import WeaponsTable from '../../../../components/WeaponsTable';
import Hudzik50CaplockTerra from '../../../../assets/Hudzik50CaplockTerra.webp';
import Hudzik50CaplockLuna from '../../../../assets/Hudzik50CaplockLuna.webp';
import Hudzik50CaplockSol from '../../../../assets/Hudzik50CaplockSol.webp';
import MuzzleloaderImg from '../../../../assets/Mussleloader616x256_2.webp';
import HudzikLiveImage from '../../../../assets/Hudzik50.webp'
import RifleDiagram from '../../../../assets/Rifle_diagram_2020.webp';

const Hudzik50Caplock = () => {
  const [selectedVariant, setSelectedVariant] = useState('Terra');
  const [isTocOpen, setIsTocOpen] = useState(true);

  const variants = {
    Terra: Hudzik50CaplockTerra,
    Luna: Hudzik50CaplockLuna,
    Sol: Hudzik50CaplockSol,
  };

  // Data for Ammo Table
  const ammoData = [
    { name: ".50 Round Ball", pen: 10, exp: 68, class: "3-7", range: "100m", price: 270 },
    { name: ".50 Minié Ball", pen: 30, exp: 12, class: "4-8", range: "200m", price: 340 },
  ];

  // Data for Sights List
  const sightsData = [
    "Hudzik Traditional Round Ball Sights",
    "Hudzik Minié Ball Sights"
  ];

  return (
    <div className="min-h-screen text-gray-900 p-6 md:p-12 font-sans tracking-tight bg-white">
      
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <header className="flex flex-col md:flex-row md:items-center justify-between border-b border-green-800/20 pb-4 mb-6">
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4 md:mb-0">
            Hudzik .50 Caplock
          </h1>
        </header>

        {/* Main Content Layout */}
        <div className="block">
            
            {/* Right Floated Infobox */}
            <div className="float-right w-72 ml-6 mb-4 bg-white border border-gray-200 shadow-xl font-sans">
                {/* Infobox Title */}
                <div className="bg-green-800 text-white text-center font-bold py-2 border-b border-green-900 tracking-wide">
                    Hudzik .50 Caplock
                </div>

                {/* Variant Switcher */}
                <div className="flex justify-around bg-gray-50 text-xs text-gray-500 py-1 border-b border-gray-200 overflow-hidden">
                    {Object.keys(variants).map(variant => (
                        <button 
                            key={variant}
                            onClick={() => setSelectedVariant(variant)}
                            className={`cursor-pointer px-1 font-bold ${selectedVariant === variant ? 'text-green-800 border-b-2 border-green-800' : 'hover:text-green-800'}`}
                        >
                            {variant}
                        </button>
                    ))}
                </div>
                
                {/* Image Area */}
                <div className="p-4 flex justify-center bg-gray-50">
                    <img 
                        src={variants[selectedVariant]} 
                        alt={`Hudzik .50 Caplock ${selectedVariant}`}
                        style={{ width: '268.4px', height: '134.2px' }}
                        className="object-contain"
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
                        <div className="text-green-800">Free (DLC)</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2 bg-gray-50">
                        <div className="font-bold text-gray-700">Weight</div>
                        <div className="text-green-800">4.5</div>
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
                        <div className="text-green-800">25</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2 bg-gray-50">
                        <div className="font-bold text-gray-700">Recoil</div>
                        <div className="text-green-800">70</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2">
                        <div className="font-bold text-gray-700">Reload</div>
                        <div className="text-green-800">5</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2 bg-gray-50">
                        <div className="font-bold text-gray-700">Hipshot</div>
                        <div className="text-green-800">15</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2">
                        <div className="font-bold text-gray-700">Magazine</div>
                        <div className="text-green-800">1</div>
                    </div>
                </div>
            </div>

            {/* Intro Quote */}
            <blockquote className="mb-6 border-l-4 border-green-800 pl-4 italic text-gray-600 font-sans text-sm">
                <p className="mb-2">"Graceful and sophisticated, the Hudzik is a high-end civil war era caplock rifle. With great stability and a perfectly maintained barrel, this muzzleloader offers incredible precision for traditional hunters if they have the patience to master it. A perfect choice for hunting anything from coyotes to the majestic elks of the Rockies."</p>
                <cite>— In-Game Description</cite>
            </blockquote>

            {/* Main Description */}
            <div className="mb-8 text-gray-700 font-sans text-[16px] leading-relaxed">
                <p>
                    The <strong className="text-gray-900">Hudzik .50 Caplock</strong> is a muzzleloader rifle, the first of its kind in the game. It uses black powder and round or Minié balls as ammunition. This rifle is unique in that it offers a very different hunting experience due to its slow reload and single-shot nature, requiring patience and precision.
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
                        <li><a href="#analysis" className="hover:text-green-800 hover:underline">Analysis</a></li>
                        <li><a href="#trivia" className="hover:text-green-800 hover:underline">Trivia</a></li>
                        <li><a href="#gallery" className="hover:text-green-800 hover:underline">Gallery</a></li>
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
                    <p className="text-gray-700 text-[16px] mb-4">Unlike other rifles, the Hudzik uses specific muzzleloader ammunition:</p>
                    
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
                    <p className="text-gray-700 text-[16px] mb-4">The Hudzik cannot equip scopes. It relies on its iron sights, which change depending on the ammunition used:</p>
                    
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
                            <strong className="text-gray-900">Hudzik .50 Caplock Luna</strong> is a variant featuring a lighter wood stock.
                        </p>
                        <p>
                            <strong className="text-gray-900">Hudzik .50 Caplock Sol</strong> is a variant featuring a darker, reddish wood stock.
                        </p>
                    </div>
                </div>

                {/* Analysis */}
                <div id="analysis">
                    <div className="flex items-center space-x-2 border-b border-green-800/50 pb-2 mb-4">
                        <h2 className="text-2xl font-bold text-green-800">Analysis</h2>
                        <a href="#" className="text-green-800"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                    </div>
                    <div className="text-gray-700 font-sans text-[16px] leading-relaxed space-y-4">
                        <p>
                            The Hudzik is a very powerful rifle, capable of taking down a wide range of animals. The Round Ball ammunition is excellent for close range and offers massive expansion, while the Minié Ball offers incredible penetration and range, making it viable for shots up to 200m and beyond. The main drawback is the reload speed, which is extremely slow due to the nature of muzzleloading. This means follow-up shots are usually not possible.
                        </p>
                    </div>
                </div>

                {/* Trivia */}
                <div id="trivia">
                    <div className="flex items-center space-x-2 border-b border-green-800/50 pb-2 mb-4">
                        <h2 className="text-2xl font-bold text-green-800">Trivia</h2>
                        <a href="#" className="text-green-800"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                    </div>
                    <p className="text-gray-700 font-sans text-[16px]">
                        The Hudzik .50 Caplock is modeled after traditional Civil War era caplock rifles, likely the 1853 Enfield or similar patterns.
                    </p>
                </div>

                {/* Gallery */}
                <div id="gallery">
                    <div className="flex items-center space-x-2 border-b border-green-800/50 pb-2 mb-4">
                        <h2 className="text-2xl font-bold text-green-800">Gallery</h2>
                        <a href="#" className="text-green-800"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                    </div>
                    <div className="flex gap-[50px]">
                        <div className="bg-white border border-gray-200 p-2">
                            <div className="bg-gray-100 overflow-hidden relative group flex justify-center items-center">
                                <img 
                                    src={MuzzleloaderImg} 
                                    alt="Hudzik .50 Caplock Muzzleloader View" 
                                    style={{ width: '200px', height: '120px' }}
                                    className="object-contain"
                                />
                            </div>
                            <p className="text-center text-sm text-gray-600 mt-2">In-game view</p>
                        </div>
                        <div className="bg-white border border-gray-200 p-2">
                            <div className="bg-gray-100 overflow-hidden relative group flex justify-center items-center">
                                <img 
                                    src={HudzikLiveImage} 
                                    alt="Hudzik .50 Caplock Live View" 
                                    style={{ width: '200px', height: '120px' }}
                                    className="object-contain"
                                />
                            </div>
                            <p className="text-center text-sm text-gray-600 mt-2">Live view</p>
                        </div>
                    </div>
                </div>

                 {/* Comparison */}
                <div id="comparison">
                    <div className="flex items-center space-x-2 border-b border-green-800/50 pb-2 mb-4">
                        <h2 className="text-2xl font-bold text-green-800">Comparison to other rifles</h2>
                        <a href="#" className="text-green-800"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                    </div>
                    <div className="bg-white border border-gray-200 p-2 inline-block">
                        <div className="bg-gray-100 overflow-hidden relative group flex justify-center items-center">
                             <img src={RifleDiagram} alt="Rifle Comparison" className="w-full h-auto object-contain" style={{ maxWidth: '420px' }} />
                        </div>
                    </div>
                </div>

            </div>

        </div>

        <div className="mt-12">
            <WeaponsTable activeItem="Hudzik .50 Caplock" />
        </div>
        
        <div className="h-32"></div>
      </div>
    </div>
  );
};

export default Hudzik50Caplock;