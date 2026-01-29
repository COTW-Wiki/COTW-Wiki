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
    <section className="wiki-section-card quests-section-card">
      <h2 className="wiki-section-title">Quests</h2>
      <ul className="wiki-ul">
        {quests.map((quest, index) => (
          <li key={index} className="wiki-li">
            <Link to={quest.link} className="wiki-link">
              {quest.name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}