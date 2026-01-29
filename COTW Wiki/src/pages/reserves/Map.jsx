import React from 'react';
import mapConcept from '../../assets/Map.webp';

export default function MapPage() {
  return (
    <div className="w-full max-w-6xl mx-auto p-8 text-stone-100 bg-stone-900 min-h-screen font-sans">
      
      {/* --- HEADER --- */}
      <div className="flex justify-between items-start border-b border-stone-700 pb-4 mb-8">
        <h1 className="text-4xl font-light text-white">Map</h1>
        <div className="flex items-center gap-4 text-xs font-bold text-green-300">
           <div className="flex items-center gap-1 cursor-pointer hover:text-white">
           </div>
        </div>
      </div>

      <div className="flex flex-col gap-8">
        
        {/* --- MAIN CONTENT --- */}
        <div className="space-y-8 text-[15px] text-stone-300 leading-relaxed">
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Map Image (Moved to Left) */}
            <div className="shrink-0" style={{ width: '268.4px' }}>
               <div className="bg-stone-800 border border-stone-700 rounded-sm overflow-hidden shadow-lg h-fit">
                  <div className="bg-green-900 p-2 font-bold text-center text-white border-b border-stone-700 text-lg">
                    Map
                  </div>
                  <div className="relative" style={{ height: '277.43px' }}>
                     <div className="w-full h-full bg-stone-800 flex items-center justify-center text-stone-500 relative">
                        <img 
                          src={mapConcept} 
                          alt="Game Map" 
                          className="w-full h-full object-cover" 
                        />
                     </div>
                     <div className="absolute bottom-2 right-2 bg-black/60 p-1 rounded">
                        <span className="text-white text-xs">🖼️</span>
                     </div>
                  </div>
               </div>
            </div>

            <div className="flex-1 space-y-4">
              <p>
                The <strong className="text-white">map</strong> displays the <span className="text-green-400 hover:underline cursor-pointer">reserve</span> and how much of it the player has explored at any given point in time. Exploring the world and discovering points of interest will mark them on the map. They can also be marked by visiting <span className="text-green-400 hover:underline cursor-pointer">lookout points</span>.
              </p>
              <p>
                The player can fast travel to any visited and discovered <span className="text-green-400 hover:underline cursor-pointer">outpost</span> by clicking on its icon on the map. He can also set a waypoint via a click of the left mouse button. The map will also display <span className="text-green-400 hover:underline cursor-pointer">hunting pressure</span> and <span className="text-green-400 hover:underline cursor-pointer">need zones</span>.
              </p>
              <p>
                In <span className="text-green-400 hover:underline cursor-pointer">multiplayer</span>, each player is represented by a colored icon.
              </p>
            </div>
          </div>

          {/* Quick Informations */}
          <div>
            <div className="flex items-center gap-2 mb-4 group cursor-pointer w-fit">
               <h2 className="text-2xl font-bold text-white">Quick Informations</h2>
               <span className="text-xs text-green-400 opacity-0 group-hover:opacity-100 transition-opacity">🔗</span>
            </div>
            <hr className="border-stone-700 mb-4"/>

            <ul className="list-disc list-outside ml-5 space-y-2 mb-6">
              <li>The Map can be seen by looking on the "<span className="text-green-400 hover:underline cursor-pointer">Huntermate</span>" [The In-Game Cellphone] while still being able to see and do anything (walk, run or crawl) in-game.</li>
              <li>It can also be seen in the Huntermate. It is represented by an "Book" icon with "Map" as the title.</li>
              <li>The Green Circles means unidentified or unactivated.</li>
            </ul>

            <p className="mb-6">
              Per example, when you first go to an <span className="text-green-400 hover:underline cursor-pointer">outpost</span> [the house icon], you will see the icon of the house as green. After you unlocked the house, the house icon [which was green on your map] will become white.
            </p>

            <ul className="list-disc list-outside ml-5 space-y-4">
              <li>
                The White Circles indicate the location of an known <span className="text-green-400 hover:underline cursor-pointer">landmark</span> [Flag Icon], POI (<span className="text-green-400 hover:underline cursor-pointer">Point of Interest</span>) [ " i " ], <span className="text-green-400 hover:underline cursor-pointer">Hunting Structures</span>, <span className="text-green-400 hover:underline cursor-pointer">Lookout Points</span> [Binoculars Icon], <span className="text-green-400 hover:underline cursor-pointer">Tent</span> [Tent Icon], <span className="text-green-400 hover:underline cursor-pointer">GroundBlinds</span> & House that you discovered/unlocked.
              </li>
              <li>
                When you first start on a map, there will be no white circles at all. Green Circles that are present at the start are the Lookout Points. By reaching them and unlocking them, there will be a short cutscene and after, it will open your map automatically and show a big circle of lighter color with a lot of green circles that appeared.
              </li>
              <li>
                When you de-zoomed your map in the Huntermate, you will only see the names of the Regions and a lot of green circles or white [Depending of your progress on the map]
              </li>
              <li>
                While zooming, a lot of elements will appear : Names of subregions, Lakes, Fields, etc....
              </li>
              <li>
                Normally, when you open the map in the Huntermate, you will be at a zoom that permits you to see the <span className="text-green-400 hover:underline cursor-pointer">Need Zones</span> Icons, The <span className="text-green-400 hover:underline cursor-pointer">Decoys</span> you placed and the animal you spotted.
              </li>
              <li>
                It will also permit you to see the path of the animal you are tracking. However it will only show the tracks that you revealed [clicked].
              </li>
              <li>
                The Map in the Huntermate has a legend to help.
              </li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
}