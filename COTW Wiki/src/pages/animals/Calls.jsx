import React, { useState } from 'react';
import CallImage from '../../assets/Animal_calls.webp';

export default function App() {
  const [isTocOpen, setIsTocOpen] = useState(true);

  return (
    <div className="min-h-screen text-stone-100 p-6 md:p-12 font-sans tracking-tight bg-stone-900" style={{ fontFamily: '"Roboto Condensed", sans-serif' }}>
       {/* Add Google Font link dynamically */}
      <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
      
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <header className="flex flex-col md:flex-row md:items-center justify-between border-b border-stone-700 pb-4 mb-6">
          <h1 className="text-4xl md:text-5xl font-light mb-4 md:mb-0">
            Calls
          </h1>

          
        </header>

        {/* Main Content Layout */}
        <div className="block">
            
            {/* Right Floated Image Card */}
            <div className="float-right w-72 ml-6 mb-4 bg-stone-800 border border-stone-700 shadow-xl">
                {/* Card Title */}
                <div className="bg-stone-900 text-white text-center font-bold py-2 border-b border-stone-700 font-sans tracking-wide">
                    Calls
                </div>
                
                {/* Image Container */}
                <div className="relative group">
                    <img 
                        src={CallImage} 
                        alt="Track Animal Call" 
                        className="w-[268.4px] h-[277.43px] object-cover block opacity-90 hover:opacity-100 transition-opacity"
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
            <div className="mb-6 text-stone-300 font-sans text-[16px] leading-relaxed">
                <p className="mb-4">
                    Animals can make different kinds of <strong className="text-white">calls</strong>. When an animal calls, an on-screen indicator will show up to illustrate the general direction of the call. To gather information about the species of the animal and the type of the call, the player can press [E] ((X) with an XBox One Gamepad) while facing the indicator.
                </p>
                <p>
                    Different species and animals within species have varied calling behaviours. Very difficult animals will rarely make calls.
                </p>
            </div>

            {/* Table of Contents */}
            <div className="mb-8 inline-block bg-stone-800 border border-stone-700 p-2 min-w-[200px]">
                <div className="flex justify-between items-center border-b border-stone-700 pb-1 mb-2">
                    <span className="font-bold text-stone-100 text-sm">Contents</span>
                    <button onClick={() => setIsTocOpen(!isTocOpen)} className="text-green-400 text-xs hover:underline">[{isTocOpen ? 'hide' : 'show'}]</button>
                </div>
                {isTocOpen && (
                    <ol className="list-decimal list-inside text-stone-300 text-sm space-y-1 font-sans">
                        <li><a href="#call-types" className="hover:text-stone-100 hover:underline">Call types</a>
                            <ul className="list-none ml-4 text-green-400">
                                <li><a href="#mating-call" className="hover:underline">1.1 Mating call</a></li>
                                <li><a href="#warning-call" className="hover:underline">1.2 Warning call</a></li>
                                <li><a href="#chase" className="hover:underline">1.3 Chase</a></li>
                            </ul>
                        </li>
                        <li><a href="#skills" className="hover:text-stone-100 hover:underline">Skills</a></li>
                    </ol>
                )}
            </div>

            {/* 1. Call types Section */}
            <div id="call-types" className="mb-12 clear-both">
                <div className="flex items-center space-x-2 border-b border-stone-700 pb-2 mb-4">
                    <h2 className="text-2xl font-bold text-white">1. Call types</h2>
                    <a href="#" className="text-green-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                    </a>
                </div>

                <div className="space-y-6">
                    {/* 1.1 Mating Call */}
                    <div id="mating-call">
                        <div className="flex items-center space-x-2 mb-2">
                            <h3 className="text-xl font-bold text-white">1.1. Mating call</h3>
                            <a href="#" className="text-green-400"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                        </div>
                        <p className="text-stone-300 text-[16px]">
                            This call type indicates that the animal is looking for a partner and has a higher likelihood of responding to the use of an <a href="#" className="text-green-400 hover:underline">animal caller</a>.
                        </p>
                    </div>

                    {/* 1.2 Warning Call */}
                    <div id="warning-call">
                        <div className="flex items-center space-x-2 mb-2">
                            <h3 className="text-xl font-bold text-white">1.2. Warning call</h3>
                            <a href="#" className="text-green-400"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                        </div>
                        <p className="text-stone-300 text-[16px]">
                            This call type indicates that you or another player (in multiplayer) has alerted the animal to your presence by sight, scent or noise. The animal will be more vigilant, but has not yet fled.
                        </p>
                    </div>

                    {/* 1.3 Chase */}
                    <div id="chase">
                        <div className="flex items-center space-x-2 mb-2">
                            <h3 className="text-xl font-bold text-white">1.3. Chase</h3>
                            <a href="#" className="text-green-400"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                        </div>
                        <p className="text-stone-300 text-[16px]">
                            Sometimes predators like Lions, Pumas or Grey Wolves will make this call type when chasing an animal.
                        </p>
                    </div>
                </div>
            </div>

            {/* 2. Skills Section */}
            <div id="skills" className="mb-12">
                <div className="flex items-center space-x-2 border-b border-stone-700 pb-2 mb-4">
                    <h2 className="text-2xl font-bold text-white">2. Skills</h2>
                    <a href="#" className="text-green-400"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                </div>
                
                <p className="text-stone-300 mb-4 font-sans text-[16px]">
                    The width of the call indicator as well as the amount of information provided by the call can be influenced by skills.
                </p>

                <div className="bg-stone-800 border border-stone-700 text-sm font-sans">
                    <div className="grid grid-cols-4 gap-4 border-b-2 border-stone-700 p-2 font-bold text-white bg-stone-900">
                        <div className="col-span-1">Skill</div>
                        <div className="col-span-3">Influence</div>
                    </div>
                    {/* Track Knowledge */}
                    <div className="grid grid-cols-4 gap-4 border-b border-stone-700/50 p-2 items-center hover:bg-stone-700/10">
                        <div className="col-span-1 text-green-400 italic">Track Knowledge</div>
                        <div className="col-span-3 text-stone-300">
                            <strong className="text-white">Level 1:</strong> Reveals information about an animal's gender when investigating footprints and vocalizations
                        </div>
                    </div>
                    {/* Innate Triangulation */}
                    <div className="grid grid-cols-4 gap-4 p-2 items-center hover:bg-stone-700/10">
                        <div className="col-span-1 text-green-400 italic">Innate Triangulation</div>
                        <div className="col-span-3 text-stone-300">
                            Each Level will decrease the size of the animal vocalization indicator in the world, making it easier to pinpoint the position of the animal that produced the call.
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div className="h-32"></div>
      </div>
    </div>
  );
}