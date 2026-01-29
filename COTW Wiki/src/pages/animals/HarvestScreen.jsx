import React, { useState } from 'react';
import HarvestScreenGeneral from '../../assets/Harvest_Screen_General.webp';
import MelanisticDiamondTeal from '../../assets/Melanistic_Diamond_teal.webp';
import HarvestScreenShotPlacement from '../../assets/Harvest_Screen_Shot_Placement.webp';

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
            Harvest Screen
          </h1>

          
        </header>

        {/* Main Content Layout */}
        <div className="block">
            
            {/* Right Floated Image Card */}
            <div className="float-right w-72 ml-6 mb-4 bg-stone-800 border border-stone-700 shadow-xl">
                {/* Card Title */}
                <div className="bg-stone-900 text-white text-center font-bold py-2 border-b border-stone-700 font-sans tracking-wide">
                    Harvest Screen
                </div>
                
                {/* Image Container */}
                <div className="relative group">
                    <img 
                        src={MelanisticDiamondTeal} 
                        alt="Harvest Screen" 
                        className="w-[268.4px] h-[151.23px] object-cover block opacity-90 hover:opacity-100 transition-opacity"
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
            <div className="mb-6 text-stone-300 font-sans text-[16px] leading-relaxed space-y-4">
                <p>
                    The <strong className="text-white">harvest screen</strong> will be displayed after the activation of a dead animal (via clicking [E]/(X)). The harvest screen will display various informations about the animal as well as ballistic reports for the hunt of it.
                </p>
                <p>
                    An harvested animal will provide a particular amount of <a href="#" className="text-green-400 hover:underline">XP</a> and <a href="#" className="text-green-400 hover:underline">cash</a> as well as <a href="#" className="text-green-400 hover:underline">weapon score</a>, depending on the species and the <a href="#" className="text-green-400 hover:underline">kill score</a>.
                </p>
            </div>

            {/* Table of Contents */}
            <div className="mb-8 inline-block bg-stone-800 border border-stone-700 p-2 min-w-[300px]">
                <div className="flex justify-between items-center border-b border-stone-700 pb-1 mb-2">
                    <span className="font-bold text-stone-100 text-sm">Contents</span>
                    <button onClick={() => setIsTocOpen(!isTocOpen)} className="text-green-400 text-xs hover:underline">[{isTocOpen ? 'hide' : 'show'}]</button>
                </div>
                {isTocOpen && (
                    <ol className="list-decimal list-inside text-stone-300 text-sm space-y-1 font-sans">
                        <li><a href="#info" className="hover:text-stone-100 hover:underline">Information in the harvest screen</a>
                            <ul className="list-none ml-4 text-stone-400">
                                <li><a href="#general" className="hover:text-stone-100 hover:underline">1.1 General Information</a></li>
                                <li><a href="#score-influencing" className="hover:text-stone-100 hover:underline">1.2 Score-influencing information</a>
                                    <ul className="list-none ml-4 text-stone-500">
                                        <li><a href="#trophy-rating" className="hover:text-stone-100 hover:underline">1.2.1 Trophy rating</a></li>
                                        <li><a href="#quick-kill" className="hover:text-stone-100 hover:underline">1.2.2 Quick Kill Bonus</a></li>
                                        <li><a href="#integrity" className="hover:text-stone-100 hover:underline">1.2.3 Integrity Bonus</a></li>
                                        <li><a href="#consecutive" className="hover:text-stone-100 hover:underline">1.2.4 Consecutive Harvests</a></li>
                                    </ul>
                                </li>
                                <li><a href="#placed-shots" className="hover:text-stone-100 hover:underline">1.3 Information about the placed shots</a></li>
                            </ul>
                        </li>
                        <li><a href="#taxidermization" className="hover:text-stone-100 hover:underline">Taxidermization</a></li>
                    </ol>
                )}
            </div>

            {/* 1. Information in the harvest screen */}
            <div id="info" className="mb-12 clear-both">
                <div className="flex items-center space-x-2 border-b border-stone-700 pb-2 mb-4">
                    <h2 className="text-2xl font-bold text-stone-100">1. Information in the harvest screen</h2>
                    <a href="#" className="text-green-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                    </a>
                </div>

                {/* 1.1 General Information */}
                <div id="general" className="mb-8">
                    <div className="flex items-center space-x-2 mb-2">
                        <h3 className="text-xl font-bold text-stone-100">1.1. General Information</h3>
                        <a href="#" className="text-green-400"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                    </div>
                    
                    <div className="flex flex-col md:flex-row gap-6">
                        <p className="flex-1 text-stone-300 text-[16px] leading-relaxed">
                            The general information part of the harvest screen contains info's about the animal gender, its weight, its fur color, how long the animal has been tracked, how difficult the animal is to shoot and what kind of trophy the species bears.
                        </p>
                        <div className="flex-shrink-0">
                            <img src={HarvestScreenGeneral} alt="General Info" className="w-[220px] h-[93px] border border-stone-600 shadow-md"/>
                        </div>
                    </div>
                </div>

                {/* 1.2 Score-influencing information */}
                <div id="score-influencing" className="mb-8">
                    <div className="flex items-center space-x-2 mb-2">
                        <h3 className="text-xl font-bold text-stone-100">1.2. Score-influencing information</h3>
                        <a href="#" className="text-green-400"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 mb-6">
                        <div className="flex-1 text-stone-300 text-[16px] leading-relaxed">
                            <p className="mb-4">
                                This part of the harvest screen shows information which influence the obtained score for the game. Influencing factors are indicated with the Harvest Check. To pass the Harvest Check you must complete 4 items:
                            </p>
                            <ol className="list-decimal list-inside space-y-2 ml-2 mb-4">
                                <li>You must hit a vital organ
                                    <p className="ml-6 text-sm text-stone-400 mt-1">Vital organs are the brain, heart, lungs, liver, cervical spine, thoracic spine. Note to pass the vital organ check on the spine you must hit the spine itself, not a vertebrae.</p>
                                </li>
                                <li>You must use the right ammunition for the animal class.</li>
                                <li>You must kill the animal in 2 or less shots.</li>
                                <li>You must not shoot the trophy organ</li>
                            </ol>
                        </div>
                    </div>

                    <p className="text-stone-300 text-[16px] mb-8">
                        Quick Kill and Consecutive Harvest were removed from the trophy scoring prior to and with the Scoring 2.0 release. They now only count toward your harvest reward of money and XP.
                    </p>

                    {/* Subsections 1.2.1 - 1.2.4 */}
                    <div className="space-y-6 pl-4 border-l-2 border-stone-700/30">
                        <div id="trophy-rating">
                            <div className="flex items-center space-x-2 mb-1">
                                <h4 className="text-lg font-bold text-stone-100">1.2.1. Trophy rating</h4>
                                <a href="#" className="text-green-400 text-xs"><svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                            </div>
                            <p className="text-stone-300 text-[16px]">A score based on the size of an animal's "trophy" such as antlers or tusks.</p>
                        </div>

                        <div id="quick-kill">
                            <div className="flex items-center space-x-2 mb-1">
                                <h4 className="text-lg font-bold text-stone-100">1.2.2. Quick Kill Bonus</h4>
                                <a href="#" className="text-green-400 text-xs"><svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                            </div>
                            <p className="text-stone-300 text-[16px]">A modifier based on the time it took for an animal to die from the shot. The shorter the time, the better the score will be. In order to achieve 100% Quick Kill Bonus, the animal must drop in 8 seconds or less.</p>
                        </div>

                        <div id="integrity">
                            <div className="flex items-center space-x-2 mb-1">
                                <h4 className="text-lg font-bold text-stone-100">1.2.3. Integrity Bonus</h4>
                                <a href="#" className="text-green-400 text-xs"><svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                            </div>
                            <p className="text-stone-300 text-[16px]">A modifier based on how well the caliber or ammo type of the shot corresponded to the size and type of animal. Shooting an animal with the most ethically suitable ammunition will improve your score.</p>
                        </div>

                        <div id="consecutive">
                            <div className="flex items-center space-x-2 mb-1">
                                <h4 className="text-lg font-bold text-stone-100">1.2.4. Consecutive Harvests</h4>
                                <a href="#" className="text-green-400 text-xs"><svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                            </div>
                            <p className="text-stone-300 text-[16px]">A modifier based on how consistently the player harvested downed animals. Harvesting all animals which were hit will improve the money reward.</p>
                        </div>

                        <div>
                            <p className="text-stone-300 text-[16px]"><strong className="text-stone-100">Score</strong></p>
                            <p className="text-stone-300 text-[16px]">The total score for the harvest, which is displaced in leaderboards and effects the amount of <a href="#" className="text-green-400 hover:underline">XP</a> and <a href="#" className="text-green-400 hover:underline">cash</a> reward.</p>
                        </div>
                    </div>
                </div>

                {/* 1.3 Information about the placed shots */}
                <div id="placed-shots" className="mb-8">
                    <div className="flex items-center space-x-2 mb-2">
                        <h3 className="text-xl font-bold text-stone-100">1.3. Information about the placed shots</h3>
                        <a href="#" className="text-green-400"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                    </div>
                    
                    <div className="flex flex-col md:flex-row gap-6">
                        <p className="flex-1 text-stone-300 text-[16px] leading-relaxed">
                            The player can cycle through all the shots that impacted the animal to see more details such as the percentage of total damage done by the shot or organs and bones that were hit. Also, the used <a href="#" className="text-green-400 hover:underline">weapon</a>, <a href="#" className="text-green-400 hover:underline">ammunition</a>, shot distance and the obtained weapon score will be displayed.<br/>
                            In <a href="#" className="text-green-400 hover:underline">multiplayer</a>, also the name of each shooting player will be displayed.
                        </p>
                        <div className="flex-shrink-0">
                            <img src={HarvestScreenShotPlacement} alt="Hit Inspection" className="w-[176px] h-[119px] border border-stone-600 shadow-md"/>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Taxidermization */}
            <div id="taxidermization" className="mb-12">
                <div className="flex items-center space-x-2 border-b border-stone-700 pb-2 mb-4">
                    <h2 className="text-2xl font-bold text-stone-100">2. Taxidermization</h2>
                    <a href="#" className="text-green-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                    </a>
                </div>
                <p className="text-stone-300 text-[16px] leading-relaxed">
                    Taxidermization allows the player to save the harvested animal for display in a <a href="#" className="text-green-400 hover:underline">Hunting Lodge</a>. The animal can be either taxidermized directly via selection of <em className="italic">Taxidermize</em> or saved for later taxidermization via selection of <em className="italic">Save Harvest</em>. This allows to save harvests for display even if one is short on <a href="#" className="text-green-400 hover:underline">cash</a>.
                </p>
            </div>

        </div>

        <div className="h-32"></div>
      </div>
    </div>
  );
}