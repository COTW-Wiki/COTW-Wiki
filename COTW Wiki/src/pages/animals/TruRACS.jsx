import React from 'react';
import truracsImage from '../../assets/TruRACS.webp';

export default function App() {
  const animals = [
    { names: ["Whitetail Deer", "Blacktail Deer"], date: "07.05.2019", isNew: [false, false] },
    { names: ["Roosevelt Elk"], date: "03.06.2019", isNew: [false] },
    { names: ["Grant Caribou*", "Mountain Reindeer"], date: "25.06.2019", isNew: [true, false] },
    { names: ["Moose"], date: "01.08.2019", isNew: [false] },
    { names: ["Roe Deer"], date: "18.09.2019", isNew: [false] },
    { names: ["Fallow Deer"], date: "07.11.2019", isNew: [false] },
    { 
      names: ["Iberian Mouflon*", "Beceite Ibex*", "Gredos Ibex*", "Ronda Ibex*", "Southeastern Spanish Ibex*"], 
      date: "10.12.2019", 
      isNew: [true, true, true, true, true] 
    },
    { names: ["Water Buffalo"], date: "19.02.2020", isNew: [false] },
    { names: ["Red Deer"], date: "08.05.2020", isNew: [false] },
    { 
      names: ["Rocky Mountain Bighorn Sheep*", "Desert Bighorn Sheep*", "Mountain Goat*", "Pronghorn*", "Rocky Mountain Elk*"], 
      date: "23.06.2020", 
      isNew: [true, true, true, true, true] 
    },
    { names: ["Mule Deer"], date: "11.08.2020", isNew: [false] },
    { names: ["Axis Deer"], date: "12.10.2020", isNew: [false] },
    { 
      names: ["Feral Goat*", "Chamois*", "Sika Deer*"], 
      date: "10.12.2020", 
      isNew: [true, true, true] 
    },
    { names: ["Blackbuck"], date: "30.03.2021", isNew: [false] },
    { names: ["Lesser Kudu"], date: "07.12.2021", isNew: [false] },
  ];

  return (
    <div className="min-h-screen bg-stone-900 text-stone-100 p-6 md:p-12 font-sans tracking-tight">
       {/* Add Google Font link dynamically */}
      <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
      
      {/* Changed max-w-6xl to max-w-5xl for a narrower page */}
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <header className="flex flex-col md:flex-row md:items-center justify-between border-b border-stone-700 pb-4 mb-6">
          <h1 className="text-4xl md:text-5xl font-light mb-4 md:mb-0">
            TruRACS
          </h1>

          
        </header>

        {/* Main Content Layout - Block display for floating behavior */}
        <div className="block">
            
            {/* Description Header */}
            <div className="flex items-center space-x-2 border-b border-stone-700 pb-2 mb-4">
                <h2 className="text-2xl font-bold text-stone-100">Description</h2>
                <a href="#" className="text-green-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                </a>
            </div>

            {/* Floated Image Card */}
            {/* Added float-right, margins, and reduced width to w-64 */}
            <div className="float-right w-[268.4px] ml-6 mb-4 bg-stone-800 border border-stone-700 shadow-xl">
                {/* Card Title */}
                <div className="bg-stone-900 text-stone-100 text-center font-bold py-2 border-b border-stone-700 font-sans tracking-wide">
                    TruRACS
                </div>
                
                {/* Image Container */}
                <div className="relative group">
                    <img 
                        src={truracsImage} 
                        alt="TruRACS Comparison" 
                        className="w-full h-[151.23px] object-cover block opacity-90 hover:opacity-100 transition-opacity"
                    />
                    {/* Gallery Icon overlay */}
                    <div className="absolute bottom-2 right-2 bg-black/60 p-1 rounded hover:bg-black/80 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Description Text */}
            <div className="space-y-4 text-stone-300 text-[16px] leading-relaxed mb-8">
                <p>
                    The <strong className="text-stone-100">TruRACS</strong> (True Random Antler Configuration System) introduces randomly generated antlers and horns with varying sizes and shapes within the same species of animals. According to the game developers, there are "1 Million possible antler configurations" for each species.
                </p>
                <p>
                    TruRACS was announced on the 15th of April, 2019 in a reveal stream on the official Twitch channel and implemented on the 7th of May 2019 for Whitetail Deer and Blacktail Deer.
                </p>
                <p>
                    TruRACS is a constantly evolving system and new species are continuously added through free updates. The system is currently available for following 26 animals:
                </p>
            </div>

            {/* Table - Added clear-both to ensure it starts below the floated image if text is short */}
            <div className="mb-4 bg-stone-800 border border-stone-700 clear-both">
                <div className="grid grid-cols-2 bg-stone-900 border-b border-stone-700 font-bold text-stone-100 p-2">
                    <div>Animal</div>
                    <div className="text-right">Introduction</div>
                </div>
                {animals.map((row, idx) => (
                    <div key={idx} className="grid grid-cols-2 border-b border-stone-700/50 p-2 text-stone-300 hover:bg-stone-700/50">
                        <div className="flex flex-col space-y-1">
                            {row.names.map((name, i) => (
                                <a key={i} href="#" className="text-green-400 hover:underline hover:text-stone-100 block">
                                    {name}
                                </a>
                            ))}
                        </div>
                        <div className="text-right flex items-end justify-end">
                            {row.date}
                        </div>
                    </div>
                ))}
            </div>
            <p className="text-sm text-stone-400 mb-12">
                '*' marks animals that had TruRACS antlers/horns with their initial release.
            </p>

            {/* TruScore Header */}
            <div className="flex items-center space-x-2 border-b border-stone-700 pb-2 mb-4">
                <h2 className="text-2xl font-bold text-stone-100">TruScore</h2>
                <a href="#" className="text-green-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                </a>
            </div>

            {/* TruScore Text */}
            <div className="space-y-4 text-stone-300 text-[16px] leading-relaxed">
                <p>
                    Alongside the TruRACS system, the TruScore system was implemented, providing a more accurate way of a Trophy Rating. The detailed trophy score calculation is shown on the <a href="#" className="text-green-400 hover:underline">harvest screen</a>. Depending on the species, the animals score will be measured through a mix of various criteria. These include elements like:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 text-stone-100">
                    <li>Length of Beams</li>
                    <li>Length of Tines</li>
                    <li>Circumference of Beams</li>
                    <li>Number of Tines</li>
                    <li>Spread of Rack</li>
                    <li>Symmetry</li>
                </ul>
                <p>
                    Depending on the species and their unique trophy, the number of criteria elements present in evaluating their TruScore will vary. Through the criteria listed above, players will be able to see in detail why an animal scored the way it did, contributing to the overall score of the harvest.
                </p>
            </div>

        </div>

        <div className="h-32"></div>
      </div>
    </div>
  );
}