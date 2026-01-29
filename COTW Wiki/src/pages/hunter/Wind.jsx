import React from 'react';

export default function WindPage() {
  return (
    <div className="w-full min-h-screen font-sans text-slate-300 bg-slate-900">
      
      {/* --- HEADER --- */}
      <div className="w-full border-b border-slate-700 pb-4 mb-6 px-6 pt-6">
        <div className="flex justify-between items-start">
          <h1 className="text-4xl font-light text-white">Wind</h1>
          <div className="flex items-center gap-4 text-xs font-bold text-blue-300">
             <div className="flex items-center gap-1 cursor-pointer hover:text-white">
                
             </div>
          </div>
        </div>
      </div>

      {/* --- CONTENT --- */}
      <div className="w-full px-6 space-y-8 leading-relaxed text-[15px]">
        
        <p>
          Wind can carry your <span className="text-blue-400 hover:underline cursor-pointer">scent</span>, making animals smell you from long distances. When an animal picks up your scent, it can scare it, and may give you a warning call. There is a large green triangle in the corner of your screen telling you where the wind is blowing. Try keeping the wind blowing opposite of where you are hunting / tracking your animal.
        </p>

        <div>
          <div className="flex items-center gap-2 mb-4 group cursor-pointer w-fit">
            <h2 className="text-3xl font-bold text-white">In-Game</h2>
          </div>
          <hr className="border-slate-700 mb-4" />
          
          <p className="mb-4">
            The Compass Rose in Bottom Right of your screen has a green cone. That Green Cone is the wind direction. When you track or hunt an animal, it is important to stay downwind [The arrow of you (the player) should face the opposite direction of the Green Cone]
          </p>
          
          <ul className="list-disc list-outside ml-5">
            <li>
              Your scent will be carried behind you and not towards the animals [or in a lesser way than if you track an animal frontwind]
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
}