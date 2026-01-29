import React, { useState } from 'react';
import MillerModel1891Deputy from '../../../../assets/MillerModel1891Deputy.webp';
import MillerModel1891Rancher from '../../../../assets/MillerModel1891Rancher.webp';
import MillerModel1891Sheriff from '../../../../assets/MillerModel1891Sheriff.webp';
import MillerModel1891Variants from '../../../../assets/Miller_Model.webp';
import MillerModel1891Gif from '../../../../assets/Miller_Model_Gif.webp';
import WeaponsTable from '../../../../components/WeaponsTable';
import ShotgunDiagram from '../../../../assets/Shotgun_diagram_2020.webp';

// --- Main App Component ---
export default function App() {
  const [isTocOpen, setIsTocOpen] = useState(true);
  const [activeVariant, setActiveVariant] = useState('Rancher');

  // Image URLs
  const MillerImg = "https://static.wikia.nocookie.net/thehuntercotw/images/e/e0/Shotgun_Miller_Model_1891.png";
  
  // Data for Variants Slider
  const variants = [
    { 
      name: "Rancher", 
      image: MillerModel1891Rancher,
      desc: "The standard variant featuring a well-worn wood stock and case-hardened receiver."
    },
    { 
      name: "Deputy", 
      image: MillerModel1891Deputy, 
      desc: "A variant with a refined finish."
    },
    { 
      name: "Sheriff", 
      image: MillerModel1891Sheriff, 
      desc: "A pristine variant with high-quality wood and gold engravings."
    }
  ];

  // Data for Ammo Table
  const ammoData = [
    { name: "10 GA Brass Birdshot", pen: 0, exp: 0, class: "1-2", range: "25m", price: 200 },
    { name: "10 GA Brass Buckshot", pen: 5, exp: 5, class: "4-7", range: "25m", price: 600 },
    { name: "10 GA Brass Slug", pen: 45, exp: 25, class: "6-9", range: "50m", price: 950 },
  ];

  // Data for Sights List
  const sightsData = [
    "None (Iron Sights Only)"
  ];

  return (
    <div className="min-h-screen text-gray-700 p-6 md:p-12 font-sans tracking-tight bg-white">
      
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <header className="flex flex-col md:flex-row md:items-center justify-between border-b border-gray-200 pb-4 mb-6">
          <h1 className="text-4xl md:text-5xl font-light mb-4 md:mb-0 text-green-800">
            Miller Model 1891
          </h1>

        </header>

        {/* Main Content Layout */}
        <div className="block">
            
            {/* Right Floated Infobox with Slider */}
            <div className="float-right w-72 ml-6 mb-4 bg-white border border-gray-200 shadow-xl font-sans">
                {/* Infobox Title */}
                <div className="bg-green-800 text-white text-center font-bold py-2 border-b border-green-900 tracking-wide text-lg">
                    Miller Model 1891
                </div>

                {/* Variant Slider / Tabs */}
                <div className="flex overflow-x-auto whitespace-nowrap bg-gray-100 border-b border-gray-200 scrollbar-hide">
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
                        onError={(e) => {e.target.src = MillerImg}}
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
                        <div className="text-gray-900">3.5</div>
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
                        <div className="text-gray-900">33</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2 bg-gray-50">
                        <div className="font-bold text-gray-700">Recoil</div>
                        <div className="text-gray-900">82</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2">
                        <div className="font-bold text-gray-700">Reload</div>
                        <div className="text-gray-900">69</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2 bg-gray-50">
                        <div className="font-bold text-gray-700">Hipshot</div>
                        <div className="text-gray-900">88</div>
                    </div>
                    <div className="grid grid-cols-2 border-b border-gray-200 p-2">
                        <div className="font-bold text-gray-700">Magazine</div>
                        <div className="text-gray-900">3</div>
                    </div>
                </div>
            </div>

            {/* Intro Quote */}
            <blockquote className="mb-6 border-l-4 border-green-800 pl-4 italic text-gray-600 font-sans text-sm">
                <p className="mb-2">"A firearm as tenacious as they come, this lever-action shotgun follows the legacy of the gun that won the west, delivering unrelenting power with its 10 gauge brass shells. With the largest bore in any commercially produced shotgun, the Miller Model 1891 leaves little to be desired when it comes to close-range stopping power."</p>
                <cite>— In-Game Description</cite>
            </blockquote>

            {/* Main Description */}
            <div className="mb-8 text-gray-700 font-sans text-[16px] leading-relaxed">
                <p>
                    The <strong className="text-gray-900">Miller Model 1891 Rancher</strong> is a classic lever-action shotgun. Known for its reliable operation and plentiful use during the end of the 19th century, it is still used throughout the world as a traditional rifle for hunting. Thanks to its shotgun design, it is capable of hunting the vast majority of game available across the reserves. It is directly based off of the Real world Winchester Model 1887/1901 Lever Action Shotgun. ingame it is depicted with a full length stock and barrel configuration
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
                        <li><a href="#gallery" className="hover:text-green-800 hover:underline">Gallery</a></li>
                        <li><a href="#comparison" className="hover:text-green-800 hover:underline">Comparison to other shotguns</a></li>
                    </ol>
                )}
            </div>

            {/* Sections */}
            <div className="space-y-12 clear-both">
                
                {/* Ammo Section */}
                <div id="ammo">
                    <div className="flex items-center space-x-2 border-b border-gray-200 pb-2 mb-4">
                        <h2 className="text-2xl font-bold text-green-800">1. Ammo</h2>
                        <a href="#" className="text-green-800"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                    </div>
                    <p className="text-gray-300 text-[16px] mb-4">As with most shotguns, three variants of its ammunition are available:</p>
                    
                    <div className="bg-white border border-gray-200 text-sm md:text-base font-sans overflow-x-auto">
                         <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-green-800 text-white font-bold">
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
                        The Miller Model 1891 cannot be equipped with any optical sights. It relies solely on its <strong className="text-gray-900">Iron Sights</strong>.
                    </p>
                </div>

                {/* Variants Section */}
                <div id="variants">
                    <div className="flex items-center space-x-2 border-b border-gray-200 pb-2 mb-4">
                        <h2 className="text-2xl font-bold text-green-800">3. Variants</h2>
                        <a href="#" className="text-green-800"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                    </div>
                    <div className="text-gray-700 font-sans text-[16px] leading-relaxed space-y-4">
                        <p>
                            <strong className="text-gray-900">Miller Model 1891 Rancher</strong> is the standard variant, featuring a worn wood and case-hardened finish.
                        </p>
                        <p>
                            <strong className="text-gray-900">Miller Model 1891 Deputy</strong> is an alternate style a gold trim and iridescent plating on the side of the receiver.
                        </p>
                        <p>
                            <strong className="text-gray-900">Miller Model 1891 Sheriff</strong> is a variant built from dark brown wood, and black metal. The receiver has golden filigree inlaid onto the side.
                        </p>
                    </div>
                </div>

                

                {/* Trivia */}
                <div id="trivia">
                    <div className="flex items-center space-x-2 border-b border-gray-200 pb-2 mb-4">
                        <h2 className="text-2xl font-bold text-green-800">5. Trivia</h2>
                        <a href="#" className="text-green-800"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                    </div>
                    <p className="text-gray-700 font-sans text-[16px] mb-4">
                        This weapon is based on the Winchester Model 1887/1901 repeating shotguns.
                    </p>
                    <p className="text-gray-700 font-sans text-[16px] mb-4">
                        the Gun is famous for its appearances in media such as Terminator 2: Judgment day and Call Of Duty: Modern Warfare 2 (2009) where it appeared in a Sawn off configuration
                    </p>
                    <p className="text-gray-700 font-sans text-[16px]">
                        The Brass 10 Gauge Shells are a direct reference to how Shotgun shells were made in the early 1800s and the large muzzle smoke produced by the gun is most likely because they are Black powder shells (As smokeless powder was only invented 3 years prior before this gun was made) and because the first alternative shotgun shell materials (That being paper) were only just starting to appear and the modern plastic shotgun shell wasn't invented until the 1960's
                    </p>
                </div>

                {/* Gallery */}
                <div id="gallery">
                    <div className="flex items-center space-x-2 border-b border-gray-200 pb-2 mb-4">
                        <h2 className="text-2xl font-bold text-green-800">6. Gallery</h2>
                        <a href="#" className="text-green-800"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                    </div>
                    <div className="flex flex-wrap gap-4">
                        {[
                            { title: "Variants", img: MillerModel1891Variants }, 
                            { title: "Action", img: MillerModel1891Gif }, 
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white border border-gray-200 p-2" style={{ width: '240px', height: '162px', margin: '0 8px 8px 0' }}>
                                <div className="aspect-video bg-gray-100 overflow-hidden relative group h-[122px] flex items-center justify-center">
                                     <div className="w-full h-full flex items-center justify-center text-gray-400 bg-gray-100">
                                        <img src={item.img} alt={item.title} className="max-w-full max-h-full object-contain" />
                                     </div>
                                </div>
                                <p className="text-gray-700 text-sm mt-2 text-center">{item.title}</p>
                            </div>
                        ))}
                    </div>
                </div>

                 {/* Comparison Placeholder */}
                <div id="comparison">
                    <div className="flex items-center space-x-2 border-b border-gray-200 pb-2 mb-4">
                        <h2 className="text-2xl font-bold text-green-800">7. Comparison to other shotguns</h2>
                        <a href="#" className="text-green-800"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                    </div>
                    <div className="relative group">
                        <img 
                            src={ShotgunDiagram} 
                            alt="Shotgun Comparison Chart" 
                            style={{ width: '400px', height: '200px' }}
                            className="object-contain border border-gray-200 shadow-md block opacity-90 hover:opacity-100 transition-opacity"
                        />
                         <div className="absolute bottom-2 right-2 bg-black/60 p-1 rounded hover:bg-black/80 cursor-pointer">
                             <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                   <WeaponsTable />
                </div>

            </div>

        </div>

        

        <div className="h-32"></div>
      </div>
    </div>
  );
}