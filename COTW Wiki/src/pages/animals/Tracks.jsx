import React, { useState } from 'react';
import DisturbedVegetation from '../../assets/Disturbed_vegetation.webp';
import BloodTrack from '../../assets/Blood_trail_low.webp';
import BloodSplatter from '../../assets/Blood_splatter.webp';
import Droppings from '../../assets/Droppings_fallow_deer.webp';
import SurfaceDepression from '../../assets/Surface_depression.webp';
import Footprints from '../../assets/Foot_prints_roe_deer.webp';

export default function App() {
  const [isTocOpen, setIsTocOpen] = useState(true);

  // Data for "Track types" section
  const trackTypes = [
    {
      type: "Footprints",
      description: "Footprints will show information about how fast the animal was traveling, as well as a cone indicating their direction at the time. Moving in the general direction of the cone sould lead you to its next track.\nInfluenced by: Track Knowledge",
      image: Footprints,
      caption: "Footprints - Roe Deer"
    },
    {
      type: "Surface Depression",
      description: "Surface depression will be produced by an animal walking through water. It will reveal information about how recently the animal passed by.",
      image: SurfaceDepression,
      caption: "Surface Depression"
    },
    {
      type: "Droppings",
      description: "Droppings will show information about how recently the animal passed by.",
      image: Droppings,
      caption: "Droppings - Fallow Deer"
    },
    {
      type: "Blood Splatter",
      description: "Blood Splatters will appear at the place the animal was hit. It will show information about how the shot impacted and how old the blood track is.\nInfluenced by: Track Knowledge",
      image: BloodSplatter,
      caption: "Blood Splatter - Vital Hit"
    },
    {
      type: "Blood Track",
      description: "Blood tracks will show information about how severe the animal is bleeding as well as a directional cone.\nInfluenced by: Track Knowledge",
      image: BloodTrack,
      caption: "Blood Track - Low bleeding rate"
    },
    {
      type: "Disturbed Vegetation",
      description: "Disturbed vegetation is an additional track type introduced by the skill Disturbed vegetation\nInfluenced by: Track Knowledge",
      image: DisturbedVegetation,
      caption: "Disturbed Vegetation"
    }
  ];

  // Data for "Track Age" table
  const trackAges = [
    { age: "Just now", inGame: "0 - 6 min", realLife: "0 - 1m 30s" },
    { age: "Very Fresh", inGame: "6 - 11 min", realLife: "1m 30s - 2m 45s" },
    { age: "Fresh", inGame: "11 - 21 min", realLife: "2m 45s - 5m 15s" },
    { age: "Old", inGame: "21 - 31 min", realLife: "5m 15s - 7m 45s" },
    { age: "Very Old", inGame: "31+ min", realLife: "7m 45s+" },
  ];

  return (
    <div className="min-h-screen text-stone-100 p-6 md:p-12 font-sans tracking-tight bg-stone-900" style={{ fontFamily: '"Roboto Condensed", sans-serif' }}>
       {/* Add Google Font link dynamically */}
      <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap" rel="stylesheet" />
      
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <header className="flex flex-col md:flex-row md:items-center justify-between border-b border-stone-700 pb-4 mb-6">
          <h1 className="text-4xl md:text-5xl font-light mb-4 md:mb-0">
            Tracks
          </h1>

          
        </header>

        {/* Intro Text */}
        <div className="mb-6 text-stone-300 font-sans text-[16px] leading-relaxed">
            <p className="mb-4">
                <strong className="text-white">Tracks</strong> will be left behind by animals while they are moving through the reserves. These tracks can be used by the player to follow the path of the animal. There are a number of different track types providing various information. Certain skills will make more informations available when interacting with a specific track type.
            </p>
        </div>

        {/* Table of Contents */}
        <div className="mb-8 inline-block bg-stone-800 border border-stone-700 py-2 pr-2 pl-1 min-w-[270px] ml-0">
            <div className="flex justify-between items-center border-b border-stone-700 pb-1 mb-2">
                <span className="font-bold text-stone-100 text-sm">Contents</span>
                <button onClick={() => setIsTocOpen(!isTocOpen)} className="text-green-400 text-xs hover:underline">[{isTocOpen ? 'hide' : 'show'}]</button>
            </div>
            {isTocOpen && (
                <ol className="list-decimal list-inside text-stone-300 text-sm space-y-1 font-sans">
                    <li><a href="#track-types" className="text-green-400 hover:underline">Track types</a>
                        <ul className="list-none ml-[-25px]">
                            <li><a href="#skills-tracks" className="text-green-400 hover:underline">1.1 Skills that influence tracks</a></li>
                        </ul>
                    </li>
                    <li><a href="#tracking" className="text-green-400 hover:underline">Tracking</a>
                        <ul className="list-none ml-[-25px]">
                            <li><a href="#track-age" className="text-green-400 hover:underline">2.1 Track age</a></li>
                            <li><a href="#skills-tracking" className="text-green-400 hover:underline">2.2 Skills that influence tracking</a></li>
                        </ul>
                    </li>
                </ol>
            )}
        </div>

        {/* 1. Track Types Section */}
        <div id="track-types" className="mb-12">
            <div className="flex items-center space-x-2 border-b border-stone-700 pb-2 mb-4">
                <h2 className="text-2xl font-bold text-stone-100">1. Track types</h2>
                <a href="#" className="text-green-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                </a>
            </div>

            <div className="bg-stone-900 border border-stone-700 text-sm md:text-base font-sans">
                {/* Header */}
                <div className="grid grid-cols-12 gap-4 border-b-2 border-stone-700 p-3 font-bold text-stone-100 bg-stone-800">
                    <div className="col-span-3">Track type</div>
                    <div className="col-span-6">Description</div>
                    <div className="col-span-3">Images</div>
                </div>
                
                {/* Rows */}
                {trackTypes.map((track, idx) => (
                    <div key={idx} className="grid grid-cols-12 gap-4 border-b border-stone-700/50 p-3 items-start hover:bg-green-900/20">
                        <div className="col-span-3 font-bold text-stone-100">{track.type}</div>
                        <div className="col-span-6 text-stone-300 whitespace-pre-line">{track.description}</div>
                        <div className="col-span-3">
                            <img src={track.image} alt={track.type} className="w-[220px] h-[124px] object-cover border border-stone-600 shadow-sm" />
                            <p className="text-xs text-stone-400 mt-1">{track.caption}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* 1.1 Skills that influence tracks */}
        <div id="skills-tracks" className="mb-12">
            <div className="flex items-center space-x-2 border-b border-stone-700 pb-2 mb-4">
                <h3 className="text-xl font-bold text-stone-100">1.1. Skills that influence tracks</h3>
                <a href="#" className="text-green-400"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
            </div>
            
            <p className="text-stone-300 mb-4 font-sans text-sm">The information a track provides can be influenced via <a href="#" className="text-green-400 hover:underline">skills</a>. Tracks are mainly influenced via the <em className="italic">Stalker</em> skill path.</p>

            <div className="bg-stone-900 border border-stone-700 text-sm font-sans">
                <div className="grid grid-cols-4 gap-4 border-b-2 border-stone-700 p-2 font-bold text-stone-100 bg-stone-800">
                    <div className="col-span-1">Skill</div>
                    <div className="col-span-3">Influence</div>
                </div>
                {/* Track Knowledge */}
                <div className="grid grid-cols-4 gap-4 border-b border-stone-700/50 p-2 items-center hover:bg-green-900/20">
                    <div className="col-span-1 text-green-400 italic">Track Knowledge</div>
                    <div className="col-span-3 text-stone-300 space-y-2">
                        <p><strong className="text-stone-100">Level 1:</strong> Reveals information about an animal's gender when investigating footprints and vocalizations</p>
                        <p><strong className="text-stone-100">Level 2:</strong> Reveals information about approximate animal group size when investigating need zone tracks and an animal's approximate health when investigating blood trails.</p>
                        <p><strong className="text-stone-100">Level 3:</strong> Reveals information about an an animal's approximate weight when investigating footprints and fur type when investigating disturbed vegetation.</p>
                    </div>
                </div>
                {/* Disturbed Vegetation */}
                <div className="grid grid-cols-4 gap-4 p-2 items-center hover:bg-green-900/20">
                    <div className="col-span-1 text-green-400 italic">Disturbed Vegetation</div>
                    <div className="col-span-3 text-stone-300">
                        Reveals a new track type, disturbed vegetation. Animals sometimes produce these in-between other tracks. This makes it easier to follow the trails of difficult animals and reveals the animal's fur type when combined with the <em className="italic text-stone-100">Track Knowledge</em> skill
                    </div>
                </div>
            </div>
        </div>

        {/* 2. Tracking Section */}
        <div id="tracking" className="mb-12">
            <div className="flex items-center space-x-2 border-b border-stone-700 pb-2 mb-4">
                <h2 className="text-2xl font-bold text-stone-100">2. Tracking</h2>
                <a href="#" className="text-green-400"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
            </div>
            <div className="space-y-4 text-stone-300 font-sans text-sm leading-relaxed mb-8">
                <p>Tracking means the active pursuit of a animal trail of tracks from the same animal. To activate a track, the player has to activate it via clicking [E]/pressing (X).</p>
                <p>An active track belongs to the animal the player is currently tracking. Inactive tracks belong to animals which are currently not tracked. The default color for active tracks is cyan, whilst the default color for inactive tracks is white. Both colors can be changed in the game settings menu.</p>
            </div>
        </div>

        {/* 2.1 Track Age */}
        <div id="track-age" className="mb-12">
            <div className="flex items-center space-x-2 border-b border-stone-700 pb-2 mb-4">
                <h3 className="text-xl font-bold text-stone-100">2.1. Track age</h3>
                <a href="#" className="text-green-400"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
            </div>
            <p className="text-stone-300 mb-4 font-sans text-sm">When you examine tracks, age of these tracks is presented by time indicator and there is five different way, Just now, Very fresh, Fresh, Old and Very old. Please note that not every track has time indicator</p>

            <table className="w-full text-left border-collapse font-sans text-sm bg-stone-900 border border-stone-700 max-w-lg">
                <thead>
                    <tr className="bg-stone-800 border-b-2 border-stone-700 text-stone-100">
                        <th className="p-2">Track Age</th>
                        <th className="p-2">Time in-game</th>
                        <th className="p-2">Time in real life</th>
                    </tr>
                </thead>
                <tbody className="text-stone-300 divide-y divide-stone-700/50">
                    {trackAges.map((row, idx) => (
                        <tr key={idx} className="hover:bg-green-900/20">
                            <td className="p-2 text-stone-100">{row.age}</td>
                            <td className="p-2">{row.inGame}</td>
                            <td className="p-2">{row.realLife}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

        {/* 2.2 Skills that influence tracking */}
        <div id="skills-tracking" className="mb-12">
            <div className="flex items-center space-x-2 border-b border-stone-700 pb-2 mb-4">
                <h3 className="text-xl font-bold text-stone-100">2.2. Skills that influence tracking</h3>
                <a href="#" className="text-green-400"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
            </div>
            
            <p className="text-stone-300 mb-4 font-sans text-sm">Tracking can be simplified via <a href="#" className="text-green-400 hover:underline">skills</a>.</p>

            <div className="bg-stone-900 border border-stone-700 text-sm font-sans">
                <div className="grid grid-cols-4 gap-4 border-b-2 border-stone-700 p-2 font-bold text-stone-100 bg-stone-800">
                    <div className="col-span-1">Skill</div>
                    <div className="col-span-3">Influence</div>
                </div>
                {/* Locate Tracks */}
                <div className="grid grid-cols-4 gap-4 border-b border-stone-700/50 p-2 items-start hover:bg-green-900/20">
                    <div className="col-span-1 text-green-400 italic">Locate Tracks</div>
                    <div className="col-span-3 text-stone-300 space-y-2">
                        <p><strong className="text-stone-100">Level 1:</strong> The directional cone becomes more accurate and narrower, both in the world and on the map.</p>
                        <p><strong className="text-stone-100">Level 2:</strong> Increases the distance at which tracks are visible and highlighted.</p>
                        <p><strong className="text-stone-100">Level 3:</strong> The directional cone is now even narrower and tracks can be detected even farther away</p>
                    </div>
                </div>
                {/* Connect The Dots */}
                <div className="grid grid-cols-4 gap-4 p-2 items-center hover:bg-green-900/20">
                    <div className="col-span-1 text-green-400 italic">Connect The Dots</div>
                    <div className="col-span-3 text-stone-300">
                        Each time a track is investigated, a trail line is automatically drawn on your Huntermate between tracks of the active trail (the animal you are tracking). Trail direction is also indicated with an arrow.<br/>
                        Investigated tracks that were not dropped in consecutive order have a dotted line drawn between them to indicate that there are more tracks to be found to complete the trail. The dotted line will not occur if three tracks in the order are skipped
                    </div>
                </div>
            </div>
        </div>

        <div className="h-32"></div>
      </div>
    </div>
  );
}