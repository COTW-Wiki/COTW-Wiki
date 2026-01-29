import React from 'react';
import { Link } from 'react-router-dom';

export default function Quests() {
  const quests = [
    { name: "Hirschfelden Hunting Reserve", link: "/missions?reserve=hirschfelden" },
    { name: "Layton Lake District", link: "/missions?reserve=layton-lake" },
    { name: "Medved-Taiga National Park", link: "/missions?reserve=medved-taiga" },
    { name: "Vurhonga Savanna Missions", link: "/missions?reserve=vurhonga" },
    { name: "Parque Fernando Missions", link: "/missions?reserve=parque-fernando" },
    { name: "Cuatro Colinas Game Reserve Missions", link: "/missions?reserve=cuatro-colinas" },
    { name: "Silver Ridge Peaks Missions", link: "/missions?reserve=silver-ridge-peaks" },
    { name: "Te Awaroa National Park Missions", link: "/missions?reserve=te-awaroa" },
    { name: "Rancho del Arroyo Missions", link: "/missions?reserve=rancho-del-arroyo" },
    { name: "Mississippi Acres Preserve Missions", link: "/missions?reserve=mississippi-acres" },
    { name: "Revontuli Coast Missions", link: "/missions?reserve=revontuli-coast" },
    { name: "New England Mountains", link: "/missions?reserve=new-england-mountains" },
    { name: "Emerald Coast", link: "/missions?reserve=emerald-coast" },
    { name: "Sundarpatan", link: "/missions?reserve=sundarpatan" },
    { name: "Salzwiesen Park", link: "/missions?reserve=salzwiesen-park" },
    { name: "Askiy Ridge Hunting Preserve", link: "/missions?reserve=askiy-ridge" }
  ];

  return (
    <div className="w-full max-w-3xl mx-auto mt-12 mb-12">
      <h2 className="text-3xl font-bold text-green-800 mb-6 border-b-2 border-gray-200 pb-2">
        Quests
      </h2>
      <ul className="text-left list-disc list-inside space-y-2 text-lg text-gray-700 ml-4">
        {quests.map((quest, index) => (
          <li key={index}>
            <Link to={quest.link} className="text-green-800 hover:underline hover:text-green-600 transition-colors">
              {quest.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}