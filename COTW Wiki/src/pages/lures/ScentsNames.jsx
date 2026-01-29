import React from 'react';
import { Link } from 'react-router-dom';
import { scents } from '../../data/scents';

import WhitetailDeerScent from '../../assets/WhitetailDeerScent.webp';
import ElkScent from '../../assets/ElkScent.webp';
import MooseScent from '../../assets/MooseScent.webp';
import WildBoarScent from '../../assets/WildBoarScent.webp';
import BlacktailDeerScent from '../../assets/BlacktailDeerScent.webp';
import MuleDeerScent from '../../assets/MuleDeerScent.webp';
import MuskDeerScent from '../../assets/MuskDeerScent.webp';
import RedDeerScent from '../../assets/RedDeerScent.webp';
import RoeDeerScent from '../../assets/RoeDeerScent.webp';

const scentImages = {
  'Whitetail Deer Scent': WhitetailDeerScent,
  'Elk Scent': ElkScent,
  'Moose Scent': MooseScent,
  'Wild Boar Scent': WildBoarScent,
  'Blacktail Deer Scent': BlacktailDeerScent,
  'Mule Deer Scent': MuleDeerScent,
  'Musk Deer Scent': MuskDeerScent,
  'Red Deer Scent': RedDeerScent,
  'Roe Deer Scent': RoeDeerScent,
};

function slug(name) {
  return encodeURIComponent(name.replace(/\s+/g, '_'));
}

export default function ScentsNames() {
  
  // Helper to render the small sort arrows
  const SortIcon = () => (
    <span className="ml-1 text-[10px] text-gray-400 opacity-70">
      &#9650;&#9660; {/* Unicode for up/down arrows */}
    </span>
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-green-800">Scents</h1>
      <div className="mb-4">
        <Link to="/lures" className="text-green-700 hover:underline">Back to Lures</Link>
      </div>

      <div className="mb-4 text-gray-700 bg-gray-50 p-4 rounded">
        <p>
          Scents are a type of lure that uses the olfactory senses of the animals for attraction. Usually, most
          scents contain urine of the respective animal which functions as a natural attractant. The effective range
          of a scent depends on wind conditions. High wind speeds give a longer but narrower effective cone, while a
          low wind speed will give a shorter but wider cone. All scents cost 1500 for 10 uses, and they all weight 0.5.
        </p>
      </div>

      <h2 className="text-xl font-bold mb-4 text-green-800">Available Scents</h2>
      <div className="grid grid-cols-3 gap-4 mb-8">
        {scents.map((scent) => (
          <Link 
            key={scent.name} 
            to={`/lures/scents/${slug(scent.name)}`}
            className="flex flex-col items-center p-4 rounded-lg hover:shadow-lg transition-shadow bg-white"
          >
            <img 
              src={scentImages[scent.name]} 
              alt={scent.name} 
              className="w-32 h-32 object-contain mb-2"
            />
            <span className="text-center font-semibold text-gray-800">{scent.name}</span>
          </Link>
        ))}
      </div>

      <div className="w-full max-w-6xl mx-auto mt-8 overflow-x-auto">
        <table className="w-full text-left border-collapse bg-slate-900/90 text-sm text-blue-100">
          <thead>
            <tr className="border-b border-slate-600 bg-slate-800/80 font-bold text-gray-200">
              <th className="p-3 cursor-pointer hover:bg-slate-700">Scent <SortIcon/></th>
              <th className="p-3 cursor-pointer hover:bg-slate-700">Species <SortIcon/></th>
              <th className="p-3 cursor-pointer hover:bg-slate-700">Level <SortIcon/></th>
              <th className="p-3 cursor-pointer hover:bg-slate-700">Range <SortIcon/></th>
              <th className="p-3 cursor-pointer hover:bg-slate-700">Duration <SortIcon/></th>
              <th className="p-3 cursor-pointer hover:bg-slate-700">Strength <SortIcon/></th>
            </tr>
          </thead>
          <tbody>
            {scents.map((row, index) => (
              <tr 
                key={index} 
                className="border-b border-slate-700/50 hover:bg-slate-800/50 transition-colors"
              >
                {/* Scent Name Column */}
                <td className="p-3 font-semibold text-blue-300">
                  <Link to={`/lures/scents/${slug(row.name)}`} className="hover:underline hover:text-white">
                      {row.name}
                  </Link>
                </td>

                {/* Species Column (Handles multiple species with commas) */}
                <td className="p-3 text-blue-300">
                  {row.suitableFor.map((animal, i) => (
                    <span key={i}>
                      <Link to={`/animals/${slug(animal)}`} className="hover:underline hover:text-white">
                          {animal}
                      </Link>
                      {i < row.suitableFor.length - 1 && ", "}
                    </span>
                  ))}
                </td>

                {/* Stats Columns */}
                <td className="p-3">{row.level}</td>
                <td className="p-3">{row.range}</td>
                <td className="p-3">{row.duration}</td>
                <td className="p-3">{row.strength}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
