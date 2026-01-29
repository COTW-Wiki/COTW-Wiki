import React from 'react';
import SkillImage from '../../assets/Skills.webp';

export default function App() {
  const [selectedLetter, setSelectedLetter] = React.useState(null);

  const skillTreeData = [
    { tier: 0, req: 0, ambusher: ["Scent Tinkerer"], stalker: ["Locate Tracks"] },
    { tier: 1, req: 1, ambusher: ["Spotting Knowledge", "Dazed and Confused", "The More The Merrier"], stalker: ["Track Knowledge", "I'm only happy when it rains", "Hardened"] },
    { tier: 2, req: 5, ambusher: ["Sight Spotting", "Fatal Attraction", "Impact Resistent"], stalker: ["Connect The Dots", "Soft Feet", "Weather Prediction"] },
    { tier: 3, req: 9, ambusher: ["Tag", "Who's deer?", "Pack Mule"], stalker: ["Innate Triangulation", "Improvised Blind", "Endurance"] },
    { tier: 4, req: 13, ambusher: ["Keen Eye", "Hill Caller", "Haggle"], stalker: ["Disturbed Vegetation", "Wind Prediction", "Startle Call"] },
  ];

  const allItems = {
    C: ["Connect The Dots"],
    D: ["Dazed and Confused", "Disturbed Vegetation"],
    E: ["Endurance"],
    F: ["Fatal Attraction"],
    H: ["Haggle", "Hardened", "Hill Caller"],
    I: ["I'm only happy when it rains", "Impact Resistent", "Improvised Blind", "Innate Triangulation"],
    K: ["Keen Eye"],
    L: ["Locate Tracks"],
    P: ["Pack Mule"],
    S: ["Scent Tinkerer", "Sight Spotting", "Skill", "Soft Feet", "Spotting Knowledge", "Startle Call"],
    T: ["Tag", "The More The Merrier", "Track Knowledge"],
    W: ["Weather Prediction", "Who's deer?", "Wind Prediction"]
  };

  return (
    <div className="min-h-screen text-stone-100 p-6 md:p-12 font-sans tracking-tight bg-stone-900" style={{ fontFamily: '"Roboto Condensed", sans-serif' }}>
       {/* Add Google Font link dynamically */}
      <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
      
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <header className="flex flex-col md:flex-row md:items-center justify-between border-b border-stone-700 pb-4 mb-6">
          <h1 className="text-4xl md:text-5xl font-light mb-4 md:mb-0">
            Skill
          </h1>

          
        </header>

        {/* Main Content Layout */}
        <div className="block">
            
            {/* Right Floated Image Card */}
            <div className="float-right w-80 ml-6 mb-4 bg-stone-800 border border-stone-700 shadow-xl">
                {/* Card Title */}
                <div className="bg-stone-900 text-white text-center font-bold py-2 border-b border-stone-700 font-sans tracking-wide">
                    Skills
                </div>
                
                {/* Image Container */}
                <div className="relative group">
                    <img 
                        src={SkillImage} 
                        alt="Skills Menu Interface" 
                        className="w-[268.4px] h-[276.43px] object-cover block opacity-90 hover:opacity-100 transition-opacity"
                    />
                    {/* Gallery Icon overlay */}
                    <div className="absolute bottom-2 right-2 bg-black/60 p-1 rounded hover:bg-black/80 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Intro Text */}
            <div className="mb-8 text-stone-300 font-sans text-[16px] leading-relaxed space-y-4">
                <p>
                    <strong className="text-stone-100">Skills</strong> represent different hunting abilities that provide new opportunities or make certain aspects of hunting easier. Skills can be purchased with skill points. Skills can be active or passive. Only one active skill can be assigned at a time in the skills menu and then be used in-game.
                </p>
                <p>
                    Skills are tiered. In order to buy higher tiered skills, you must spend a certain amount of points in the previous tier. They also come in multiple categories, tailored to different hunting styles. Active pursuit skills (stalker skill tree) are more tied to tracking and stalking, while passive pursuit skills (ambusher skill tree) focus on luring.
                </p>
                <p>
                    Currently the max number of skill points is 22.
                </p>
            </div>

            {/* Skill Trees Section */}
            <div className="clear-both mb-12">
                <div className="flex items-center space-x-2 border-b border-stone-700 pb-2 mb-4">
                    <h2 className="text-2xl font-bold text-stone-100">Skill trees</h2>
                    <a href="#" className="text-green-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                    </a>
                </div>
                
                <p className="text-stone-300 mb-4 font-sans text-[16px]">The following two skill trees are available in the game:</p>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse font-sans text-sm md:text-[15px] bg-stone-800">
                        <thead>
                            <tr className="bg-stone-900 border-b-2 border-stone-700 text-stone-100">
                                <th className="py-3 pl-3 pr-[27px] w-16">Tier</th>
                                <th className="py-3 pl-3 pr-[27px] w-24">Req. Points</th>
                                <th className="p-3 w-1/2">Ambusher</th>
                                <th className="p-3 w-1/2">Stalker</th>
                            </tr>
                        </thead>
                        <tbody className="text-stone-300 divide-y divide-stone-700/50">
                            {skillTreeData.map((row) => (
                                <tr key={row.tier} className="hover:bg-stone-700/10 align-top">
                                    <td className="py-3 pl-3 pr-[27px] font-bold text-stone-100">{row.tier}</td>
                                    <td className="py-3 pl-3 pr-[27px]">{row.req}</td>
                                    <td className="p-3 space-y-1">
                                        {row.ambusher.map((skill, i) => (
                                            <div key={i}><a href="#" className="text-green-400 hover:underline">{skill}</a></div>
                                        ))}
                                    </td>
                                    <td className="p-3 space-y-1">
                                        {row.stalker.map((skill, i) => (
                                            <div key={i}><a href="#" className="text-green-400 hover:underline">{skill}</a></div>
                                        ))}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* All Items List */}
            <div className="mb-12">
                <div className="flex items-center space-x-2 border-b border-stone-700 pb-2 mb-6">
                    <h2 className="text-xl font-bold text-stone-100">All items (27)</h2>
                </div>

                {/* Alphabet Bar */}
                <div className="flex flex-wrap gap-1 mb-8 text-stone-500 font-bold text-sm tracking-widest justify-center md:justify-start items-center">
                    {['#', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'OTHER'].map((char, index, arr) => (
                        <React.Fragment key={char}>
                            <span 
                                onClick={() => setSelectedLetter(selectedLetter === char ? null : char)}
                                className={`cursor-pointer transition-colors ${selectedLetter === char ? 'text-white' : 'text-[#5aaaf7] hover:text-white'}`}
                            >
                                {char}
                            </span>
                            {index < arr.length - 1 && <span className="text-[#5aaaf7]">•</span>}
                        </React.Fragment>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 font-sans text-[15px]">
                    {Object.entries(allItems)
                        .filter(([letter]) => selectedLetter === null || letter === selectedLetter)
                        .map(([letter, items]) => (
                        <div key={letter} className="relative">
                            <h3 className="text-lg font-bold text-stone-100 border-b border-green-400/30 pb-1 mb-2">{letter}</h3>
                            <ul className="space-y-3 pl-4">
                                {items.map((item, idx) => (
                                    <li key={idx}>
                                        <a href="#" className="text-green-400 hover:underline">{item}</a>
                                    </li>
                                ))}
                            </ul>
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