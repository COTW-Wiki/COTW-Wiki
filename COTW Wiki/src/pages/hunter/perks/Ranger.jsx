import React from 'react';
import RangerImage from '../../../assets/Ranger.webp';

export default function App() {
  return (
    <div className="min-h-screen text-stone-100 p-6 md:p-12 font-sans tracking-tight bg-stone-900" style={{ fontFamily: '"Roboto Condensed", sans-serif' }}>
       {/* Add Google Font link dynamically */}
      <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
      
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="flex flex-col md:flex-row md:items-center justify-between border-b border-stone-700 pb-4 mb-6">
          <h1 className="text-4xl md:text-5xl font-light mb-4 md:mb-0">
            Ranger
          </h1>
        </header>

        {/* Main Content Layout */}
        <div className="block">
            
            {/* Right Floated Infobox */}
            <div className="float-right w-[270px] min-h-[324.5px] ml-6 mb-4 bg-stone-800 border border-stone-700 shadow-xl font-sans">
                {/* Infobox Title */}
                <div className="bg-stone-900 text-white text-center font-bold py-2 border-b border-stone-700 tracking-wide">
                    Ranger
                </div>
                
                {/* Image Area */}
                <div className="p-4 flex justify-center bg-stone-900">
                    <img 
                        src={RangerImage} 
                        alt="Ranger Icon" 
                        className="w-[118px] h-[130px] object-contain"
                    />
                </div>

                {/* Infobox Data */}
                <div className="text-sm">
                    <div className="grid grid-cols-2 border-t border-stone-700/50">
                        <div className="p-2 font-bold text-stone-300 pl-4">Weapon</div>
                        <div className="p-2 text-stone-400">Handgun</div>
                    </div>
                    <div className="grid grid-cols-2 border-t border-stone-700/50 bg-stone-800/50">
                        <div className="p-2 font-bold text-stone-300 pl-4">Tier</div>
                        <div className="p-2 text-stone-400">2</div>
                    </div>
                    <div className="grid grid-cols-2 border-t border-stone-700/50">
                        <div className="p-2 font-bold text-stone-300 pl-4">Levels</div>
                        <div className="p-2 text-stone-400">1</div>
                    </div>
                    <div className="grid grid-cols-2 border-t border-stone-700/50 bg-stone-800/50">
                        <div className="p-2 font-bold text-stone-300 pl-4">Kind</div>
                        <div className="p-2 text-stone-400">
                            <div className="mb-1">active (previously),</div>
                            <div>passive (now)</div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 border-t border-stone-700/50">
                        <div className="p-2 font-bold text-stone-300 pl-4">Dependend on:</div>
                        <div className="p-2 text-green-400 flex flex-col">
                             <span className="cursor-pointer hover:underline"><a href="/perks/survival-instinct">Survival Instinct</a></span>
                             <span className="cursor-pointer hover:underline"><a href="/perks/quick-feet">Quick Feet</a></span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Intro Text */}
            <div className="mb-8 text-stone-300 font-sans text-[16px] leading-relaxed">
                <p className="mb-4">
                    <strong className="text-stone-100">Ranger</strong> was a tier 2 active <a href="/perks" className="text-green-400 hover:underline">perk</a> under <a href="/weapons/handguns" className="text-green-400 hover:underline">handguns</a> category (but in most such cases perk is applied to everything). With its help player determined distance to target by pressing. A significant drawback was that using Ranger, player couldn't use Zeroing to adjust the weapon to a certain distance (cannot use two active skills at once), and this was killing the whole point of using the perk.
                </p>
                <p>
                    As of 2024, Ranger perk has been reworked and its mechanics are integrated into <strong className="text-stone-100">detection</strong> through binoculars or sights (E button). However the now passive perk still exists and now it simply makes distance estimation more accurate.
                </p>
            </div>

        </div>

        <div className="h-32"></div>
      </div>
    </div>
  );
}