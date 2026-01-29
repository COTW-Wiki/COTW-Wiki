import React from 'react';
import docImage from '../../assets/Doc.webp';

export default function LandmarksPage() {
  // Landmarks data transcribed from the screenshots
  const landmarks = [
    {
      id: "1",
      title: "Tichenau Lonely Windmill",
      content: '"The old sawmill of the 18th Century who is nowadays standing alone after a fire destroyed the others Windmills in 1965"'
    },
    {
      id: "2",
      title: "Spreeberg Castle",
      content: '"The Spreeberg Castle is probably the most known location east of the Spreeberg Lake, in the center of the reserve. The Lords of Königsberg long ago sat in this castle. We can find the earliest accounts of its existence in sources dating from 1225."'
    },
    {
      id: "3",
      title: "Ikotz Bridge",
      content: '"An arch type bridge 150 years old. We can se it forming a complete circle courtesy of its reflection in the water in sunny days."'
    },
    {
      id: "4",
      title: "Schonfeldt Windmills",
      content: '"Those Windmills are dating the years 1000\'s and attracts numerous visitors."'
    },
    {
      id: "5",
      title: "Schonfeldt Bunkers",
      content: '"The bunkers used by the Germans in the First World War (WW1) are hidden amongst those trees."'
    },
    {
      id: "6",
      title: "Spree Bathing Area",
      content: '"Sommer did make this artificial beach with 20 tons of sand."'
    },
    {
      id: "7",
      title: "Rinderland Gorge",
      content: null
    },
    {
      id: "8",
      title: "Rathenfeldt Grave Mounts",
      content: null
    },
    {
      id: "9",
      title: "Petershain Turbines",
      content: null
    },
    {
      id: "10",
      title: "Petershain Ruin Village",
      content: '"The ruins, which were probably part of an fortress protecting the Hirschfelden River Delta in the XVIIth Century [17th]."'
    },
    {
      id: "11",
      title: "Petershain Tower Ruin",
      content: null
    },
    {
      id: "12",
      title: "Old Muller",
      content: null
    },
    {
      id: "13",
      title: "Mullerwald Logging Area",
      content: '"Wood exportation is an important human activity in this part of Europe. The Substainable Management began in Germany approximately three hundreds years ago. The controls measures have temporarily ceased in this specific zone."'
    },
    {
      id: "14",
      title: "Ernsdorf Cave",
      content: '"The Ernsdorf Cave is located in the west portion of the reserve and is suggested only to savvy explorators. The speologists are fascinated by these darks & deep tunnels which are notably populated by protee eel, a species usually residing more to the south of Europe."'
    },
    {
      id: "15",
      title: "Ernsdorf Bridge",
      content: '"It is one of the biggest bridges made of rocks in the world. It is unique because its materials having served in its construction came from neighbouring mountains."'
    },
    {
      id: "16",
      title: "Bohndorf Lake Fishing Cabin",
      content: '"You can find a charming little fishing cabin of the beginning of the 20th Centrury near the Bohndorf Lake and the mountains of the north-west."'
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-8 text-stone-100 bg-stone-900 min-h-screen font-sans">
      
      {/* Header Section */}
      <div className="flex justify-between items-start border-b border-stone-700 pb-4 mb-8">
        <h1 className="text-4xl font-light text-white">Landmarks</h1>
      </div>

      {/* Warning Box */}
      <div className="bg-[#38332e] border-2 border-[#b56e2f] flex shadow-lg mb-8">
        {/* Image Container */}
        <div className="flex-shrink-0 border-r border-[#b56e2f] flex items-center justify-center">
          <img 
            src={docImage} 
            alt="Doc"
            className="object-cover"
            style={{ width: '70.8px', height: '112px' }}
          />
        </div>
        {/* Text Content */}
        <div className="flex-grow p-3 text-sm md:text-[15px] flex flex-col justify-center text-left">
          <p className="italic text-gray-200 mb-1 font-sans">
            "You know, I spotted some tracks earlier, close to where you're at right now."
          </p>
          <p className="font-bold text-white font-sans">
            This page is being worked on. Please assist in making this page. You can also help by providing useful information.
          </p>
        </div>
      </div>

      {/* Intro Text */}
      <div className="mb-10 text-stone-300 font-sans text-[16px]">
         <p className="mb-2">
           Landmarks are structures spread around the reserves. The landmarks give a little bit of information about the maps history or geography. First time visiting the landmarks will give a player a little bit of <a href="#" className="text-green-400 hover:text-green-300 hover:underline">experience (XP)</a>.
         </p>
      </div>

      {/* Hirschfelden Section Header */}
      <div className="mb-6 mt-10">
        <div className="flex items-center space-x-2 border-b border-stone-700 pb-2">
           <h2 className="text-2xl md:text-[28px] font-bold text-white tracking-normal">Hirschfelden (There might be more)</h2>
           <a href="#" className="text-green-400 hover:text-green-300">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
             </svg>
           </a>
        </div>
      </div>

      {/* Hirschfelden List */}
      <div className="space-y-8 text-stone-300 font-sans">
        {landmarks.map((item) => (
          <div key={item.id}>
            <h3 className="text-white text-[17px] font-normal mb-2">
              {item.id}. {item.title}
            </h3>
            {item.content && (
              <div className="italic text-stone-400 ml-0 leading-relaxed">
                {item.content}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="h-32"></div> {/* Bottom spacer */}
    </div>
  );
}