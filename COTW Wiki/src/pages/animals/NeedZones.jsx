import React from 'react';
import NeedZones from  '../../assets/Need_zones.webp';
import RestingZoneIcon from '../../assets/RestingZoneIcon.webp';
import FeedingZoneIcon from '../../assets/FeedingZoneIcon.webp';
import DrinkingZoneIcon from '../../assets/DrinkingZoneIcon.webp';
import DrinkingZoneAllSpecies from '../../assets/DrinkingZone.webp';
import FeedingZoneHerbivores from '../../assets/GrazedGrass.webp';
import RestingZoneAllSpecies from '../../assets/FlattenedGrass.webp';
import FeedingZoneBigPredators from '../../assets/GutsAndBones.webp';
import FeedingZoneBears from '../../assets/BigBloodSplatter.webp';
import FeedingZoneSmallPredators from '../../assets/Smallcarcass.webp';


export default function App() {
  const visualRepresentations = [
    {
      title: "Resting Zone (All Species)",
      caption: "Flattened Grass (All Species)",
      imageUrl: RestingZoneAllSpecies,
      type: "resting"
    },
    {
      title: "Feeding Zone (Herbivores)",
      caption: "Grazed Grass (All Herbivores)",
      imageUrl: FeedingZoneHerbivores,
      type: "feeding"
    },
    {
      title: "Feeding Zone (Big Predators)",
      caption: "Guts and Bones (Iberian Wolf and Gray Wolf)",
      imageUrl: FeedingZoneBigPredators,
      type: "feeding"
    },
    {
      title: "Feeding Zone (Bears)",
      caption: "Big blood splatter (Black Bear, Brown Bear and Grizzly Bear)",
      imageUrl: FeedingZoneBears,
      type: "feeding"
    },
    {
      title: "Feeding Zone (Small Predators)",
      caption: "Small pile of guts and bones (Red Fox, Gray Fox, Bobcat, and Eurasian Lynx)",
      imageUrl: FeedingZoneSmallPredators,
      type: "feeding"
    },
    {
      title: "Drinking Zone (All Species)",
      caption: "Hoofprints/Pawprints in a circular pattern.",
      imageUrl: DrinkingZoneAllSpecies,
      type: "drinking"
    }
  ];

  return (
    <div className="min-h-screen bg-stone-900 text-stone-100 p-6 md:p-12 font-sans tracking-tight">
       {/* Add Google Font link dynamically */}
      <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
      
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <header className="flex flex-col md:flex-row md:items-center justify-between border-b border-stone-700 pb-4 mb-6">
          <h1 className="text-4xl md:text-5xl font-light mb-4 md:mb-0">
            Need Zones
          </h1>

          
        </header>

        {/* Main Content Layout */}
        <div className="block">
            
            {/* Floated Image Card */}
            <div className="float-right w-[268.4px] ml-6 mb-4 bg-stone-800 border border-stone-700 shadow-xl">
                {/* Card Title */}
                <div className="bg-stone-950 text-stone-100 text-center font-bold py-2 border-b border-stone-700 font-sans tracking-wide">
                    Need Zones
                </div>
                
                {/* Image Container */}
                <div className="relative group">
                    {/* Placeholder map image */}
                    <img 
                        src={NeedZones} 
                        alt="Need Zones Map" 
                        className="w-full h-[276.43px] object-cover block opacity-90 hover:opacity-100 transition-opacity"
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
                    <strong className="text-stone-100">Need zones</strong> are areas of the map where animals go to eat, sleep or drink. They will return to their need zones during specific times on a daily basis, as long as there is no <a href="#" className="text-green-400 hover:underline">hunting pressure</a> in the area. Spotting an animal will reveal the need zone on the map. Investigating tracks within a need zone will also reveal it on the map. The more tracks you investigate, the more information will be presented on the map. In combination with the skill <em className="italic">Track Knowledge</em>, a need zone also reveals how many animals used it.
                </p>
                <p>
                    Three different need zones can be found:
                </p>
            </div>

            {/* Zone Icons Table/Grid */}
            <div className="bg-stone-800 border border-stone-700 p-4 mb-12 inline-block">
                <div className="text-stone-100 font-bold border-b border-stone-600 pb-2 mb-2">Zone</div>
                <div className="flex space-x-6 text-center text-sm italic text-stone-300">
                    <div className="flex flex-col items-center">
                        <div className="w-[90px] h-[90px] rounded-full border-2 border-stone-500 flex items-center justify-center bg-[#dddd66] mb-1 overflow-hidden">
                            <img src={RestingZoneIcon} alt="Resting" className="w-full h-full object-cover" />
                        </div>
                        <span>Resting</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-[90px] h-[90px] rounded-full border-2 border-stone-500 flex items-center justify-center bg-[#99cc33] mb-1 overflow-hidden">
                            <img src={FeedingZoneIcon} alt="Feeding" className="w-full h-full object-cover" />
                        </div>
                        <span>Feeding</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="w-[90px] h-[90px] rounded-full border-2 border-stone-500 flex items-center justify-center bg-[#33ccff] mb-1 overflow-hidden">
                            <img src={DrinkingZoneIcon} alt="Drinking" className="w-full h-full object-cover" />
                        </div>
                        <span>Drinking</span>
                    </div>
                </div>
            </div>

            {/* Visual Representation Section */}
            <div className="clear-both mt-8">
                <div className="bg-stone-800 text-center py-2 font-bold text-xl text-stone-100 border-t border-l border-r border-stone-700">
                    Visual Representation of the Need Zones
                </div>
                
                <div className="border border-stone-700 divide-y divide-stone-700">
                    {visualRepresentations.map((item, idx) => (
                        <div key={idx} className="flex flex-row bg-stone-900 min-h-[140px]">
                            {/* Image Side */}
                            <div className="w-1/3 md:w-64 p-4 flex flex-col items-start justify-start border-r border-stone-700">
                                <img 
                                    src={item.imageUrl} 
                                    alt={item.caption} 
                                    className="w-[200px] h-[145px] object-cover border border-stone-600 mb-2 ml-[10px]"
                                />
                                <span className="text-sm text-stone-400 font-sans ml-[10px]">{item.caption}</span>
                            </div>
                            
                            {/* Text Side */}
                            <div className="flex items-center p-6 w-[227.35px] h-[168.6px]">
                                <span className="text-xl md:text-2xl font-bold text-stone-100 font-sans ml-[10px]">{item.title}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>

        <div className="h-32"></div>
      </div>
    </div>
  );
}