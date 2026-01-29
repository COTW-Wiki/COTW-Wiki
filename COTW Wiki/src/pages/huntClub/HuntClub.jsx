import React from 'react';

export default function HuntClubPage() {
  return (
    <div className="w-full max-w-6xl mx-auto p-8 text-stone-100 bg-stone-900 min-h-screen font-sans">
      
      {/* --- HEADER --- */}
      <div className="flex justify-between items-start border-b border-stone-700 pb-4 mb-8">
        <h1 className="text-4xl font-light text-white">Hunt Club</h1>
        <div className="flex items-center gap-4 text-xs font-bold text-green-300">
           <div className="flex items-center gap-1 cursor-pointer hover:text-white">
           </div>
        </div>
      </div>

      <div className="flex flex-col gap-8">
        
        {/* --- MAIN CONTENT --- */}
        <div className="space-y-8 text-[15px] text-stone-300 leading-relaxed">
          <p>
            The <strong className="text-white">Hunt Club</strong> is a register of daily or weekly challenges set by the developers. It was introduced in <span className="text-green-400 hover:underline cursor-pointer">patch 1.16</span>. It includes missions to kill a specific amount of some kinds of <span className="text-green-400 hover:underline cursor-pointer">animals</span>, sometimes limited to specific types of <span className="text-green-400 hover:underline cursor-pointer">weapons</span> and or hitting zones. The missions usually have different consecutive stages, each rewarding the player with increasing amounts of <span className="text-green-400 hover:underline cursor-pointer">cash</span> and <span className="text-green-400 hover:underline cursor-pointer">experience points</span>. The Hunt Club is currently in beta status.
          </p>
        </div>

      </div>
    </div>
  );
}