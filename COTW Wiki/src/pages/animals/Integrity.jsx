import React from 'react';
import AnimalsTable from '../../components/AnimalsTable';
import AmmoClassTable from '../../components/AmmoClassTable';

export default function IntegrityPage() {
  return (
    <div className="w-full max-w-5xl mx-auto p-6 text-blue-100 bg-slate-900 min-h-screen font-sans">
      
      {/* --- HEADER SECTION --- */}
      <div className="flex justify-between items-start mb-6 border-b border-slate-700 pb-4">
        <h1 className="text-4xl font-light text-white">Integrity</h1>
      </div>

      {/* --- CONTENT SECTION --- */}
      <div className="space-y-6 text-slate-300 leading-relaxed">
        
        {/* Integrity Description */}
        <p>
          The <strong className="text-white">Integrity check</strong> reveals if animal was killed with an appropriate caliber. It will fail if the animal was either downed with more than two shots, or an incorrect caliber was used.
        </p>

        <p>
          In the German version of the game, this score bonus is called "Ethikbonus" (ethical bonus). In Russian version called "Проверка добычи" (prey check).
        </p>

        {/* Classes Section */}
        <div className="pt-4">
          <h2 className="text-2xl font-bold text-white mb-3">Classes</h2>
          <hr className="border-slate-700 mb-4" />
          
          <p className="mb-6">
            The animal classes act as an indicator which suggests an appropriate weapon to down a specific animal. Each ammo type (as specified below) has a specified range of animal classes it can be used on.
          </p>

          <AnimalsTable />
          <AmmoClassTable />
        </div>

      </div>
    </div>
  );
}
