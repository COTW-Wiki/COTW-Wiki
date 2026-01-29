import React from 'react';
import docImage from '../../assets/Doc.webp';

export default function PointsOfInterestPage() {
  // Data transcribed from the provided screenshots
  const hirschfeldenItems = [
    {
      id: "1",
      title: "Red Deer Canyon",
      content: '"This Canyon is named "The Red Deer Canyon". Albertina Fleischer there lost herself when she was young and she tell people that she was saved by a red deer."'
    },
    {
      id: "2",
      title: "Mount Burgen",
      content: null
    },
    {
      id: "3",
      title: "The Bohndorf Meteorite",
      content: null
    },
    {
      id: "4",
      title: "The Mullerwald Poem",
      content: '"The Fascination that people felt for firearms depends entirely on which side of the firearm they are standing" [P. G. Wodehouse]'
    },
    {
      id: "5",
      title: "Konigsberg Lake",
      content: null
    },
    {
      id: "6",
      title: "The Rathenfeldt Poem",
      content: '"Waken,lords and ladies gay,The mist has left the mountain gray; Springlets in the dawn are steaming,Diamonds on break are gleaming; And foresters have busy been, To track the buck in the thickest green; Now we come to are lay,Waken,lords and ladies gay"'
    },
    {
      id: "7-10",
      title: "A Written Note x4 [#7, #8, #9, #10]",
      content: (
        <>
          <p className="mb-2">"Go towards north, then take the first left. Follow the trail that leads to the ruins and search the area"</p>
          <p className="mb-2">"Find the tower on the hill, a reward for you awaits."</p>
          <p>"I spent an superb day with the kids. The view from the hill of Petershain was incredible. I would have loved that you were there." - Emma</p>
        </>
      )
    },
    {
      id: "11",
      title: "Hunting Tip",
      content: null
    },
    {
      id: "12",
      title: "The Konigsberg Heir",
      content: '"Robert Sommer is one of the potential heirs of the noble family of Königsberg. He is responsible of the issuance of hunting permits and manage the Königsberg Region as well as the surroundings."'
    },
    {
      id: "13",
      title: "The Landslide",
      content: null
    },
    {
      id: "14",
      title: "Red Deer Water",
      content: null
    },
    {
      id: "15",
      title: 'Robert "Strong Elk" Fog',
      content: null
    },
    {
      id: "16",
      title: "About The Red Fox",
      content: '"The Red Fox has a incredibly sharp hearing, the latter capable of hearing a mouse squeak from an approximate of 100 meters."'
    },
    {
      id: "17",
      title: "Note By Dr. Otto Canella",
      content: null
    },
    {
      id: "18",
      title: "The Christmas Tree",
      content: null
    },
    {
      id: "19",
      title: "About the Wild Boar",
      content: null
    },
    {
      id: "20",
      title: "The German Peasants' War",
      content: '"The Fields of Schonfeldt have seen unfold one of the most violent battles of the German Peasant\'s War in 1525.É'
    },
    {
      id: "21",
      title: "The Spree Nixe",
      content: '"Spree-Nixe is an popular figure of modern German folklore. Similar to the Greek Arenas, it attracts men to drown them in the Spreeberg Lake."'
    },
    {
      id: "22",
      title: "About the Bison",
      content: '"In the United States of America, bisons were killed in the years 1870\'s more than in any other decade, particularly in 1872, 1873 and 1874. During these 3 years, estimations suggests 4 millions & a half bisons were killed. [ 4 500 000 in 3 years]."'
    },
    {
      id: "23",
      title: "The European Bison Advisory Organization",
      content: null
    },
    {
      id: "24",
      title: "Red Deer Venison",
      content: '"Elizabeth II continue to follow to this day the habit of offering de best pieces of red deer venison to members of the Cabinet."'
    },
    {
      id: "25",
      title: "Wild Boar Land",
      content: '"The Zone which extends in the surroundings is supposedly home to an approximative 82 000 wild boars."'
    },
    {
      id: "26",
      title: "Hirschdorf River",
      content: '"To the east, you will be able to see the mouth of the Hirschdorf River which discharges itself in the Königsberg Lake."'
    },
    {
      id: "27",
      title: "A Warning",
      content: '"These woods are oftently arpented by wild boars. It is suggested for adults with kids to avoid them."'
    },
    {
      id: "28",
      title: "Sommer's Land",
      content: null
    },
    {
      id: "29",
      title: "The World Famous Deer",
      content: null
    },
    {
      id: "30",
      title: "Red Deer Hill",
      content: null
    },
    {
      id: "31",
      title: "Star Hunting Tours",
      content: '"The "Star Hunting Tours" agency is an familial entreprise that was created by the father of Tressler, Hans Tressler, in 1985."'
    },
    {
      id: "32",
      title: "Hunting with Birds",
      content: '"The art of falconry developped rapidly in Germany between the sixth & seventeenth century. Frederic II, the Emperor, is actually the author of the first traitee of falconry, The Arte Venandi cum Avibus ("The Art of Hunting with Birds")."'
    },
    {
      id: "33",
      title: "The Deer Roast",
      content: '"A ideal deer roast weighs 1.5 kg and feeds 8 persons. Indeed, an 2 kg roast will not prevent a good roasting and a 1 kg roast will demands more attention in its cooking by its smaller size of its "tranches", which typically result in the lost of some parts of the roast."'
    },
    {
      id: "34",
      title: "About the Fallow Deer",
      content: '"The coat of the Fallow Deer is spotted with white in Summer and brown in Winter."'
    },
    {
      id: "35",
      title: "The History of Spreeberg",
      content: null
    },
    {
      id: "36",
      title: "The Spruce Tree",
      content: '"Rumors circulates of the presence of a more than three thousands years old [3000] spruce tree in this region."'
    },
    {
      id: "37",
      title: "Note by G. Jager",
      content: '"This location is our world favorite alongside Erik." - G. Jager'
    },
    {
      id: "38",
      title: "The Wurm Glaciation",
      content: null
    },
    {
      id: "39",
      title: "Bad Crop",
      content: 'The Last farmer cultivating the fields here was at the center of a long and complicated lawsuit becaus he was growing genetically modified corn. Afterwards, Sommer made sure GM crops were never again plainted on the fields of Konogsberg.'
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-8 text-stone-100 bg-stone-900 min-h-screen font-sans">
      
      {/* --- HEADER --- */}
      <div className="flex justify-between items-start border-b border-stone-700 pb-4 mb-8">
        <h1 className="text-4xl font-light text-white">Points of Interest</h1>
        <div className="flex items-center gap-4 text-xs font-bold text-green-300">
           <div className="flex items-center gap-1 cursor-pointer hover:text-white">
           </div>
        </div>
      </div>

        {/* Alert/Warning Box */}
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
        <div className="mb-8 text-stone-300">
           <p>
             <strong className="text-white">Points of Interest</strong> are locations on the map that provide additional informations either about the <span className="text-green-400 hover:underline cursor-pointer">region</span> they are in or about the characters of <span className="text-green-400 hover:underline cursor-pointer">reserve</span>. They are visualized as piles of stone.
           </p>
        </div>

        {/* Hirschfelden Section Header */}
        <div className="mb-6 mt-10">
          <div className="flex items-baseline space-x-2 border-b border-stone-700 pb-2">
             <h2 className="text-2xl md:text-3xl font-bold text-white">Hirschfelden (38/39)</h2>
             <span className="text-green-400 cursor-pointer">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
               </svg>
             </span>
          </div>
        </div>

        {/* Hirschfelden List */}
        <div className="space-y-6 text-stone-300 text-lg">
          {hirschfeldenItems.map((item) => (
            <div key={item.id}>
              <h3 className="text-white text-lg font-normal mb-1">
                {item.id}. {item.title}
              </h3>
              {item.content && (
                <div className="italic text-stone-400 ml-1">
                  {typeof item.content === 'string' ? item.content : item.content}
                </div>
              )}
            </div>
          ))}
        </div>

         {/* Layton Lakes Section Header */}
         <div className="mb-6 mt-12">
          <div className="flex items-baseline space-x-2 border-b border-stone-700 pb-2">
             <h2 className="text-2xl md:text-3xl font-bold text-white">Layton Lakes (33) </h2>
             <span className="text-green-400 cursor-pointer">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
               </svg>
             </span>
          </div>
        </div>

        {/* Layton Lakes Content */}
        <div className="text-stone-300 text-lg">
          <p>From a steam discussion. Detailed list to what their names are isn't available currently.</p>
        </div>

        <div className="h-20"></div> {/* Bottom spacer */}
    </div>
  );
}