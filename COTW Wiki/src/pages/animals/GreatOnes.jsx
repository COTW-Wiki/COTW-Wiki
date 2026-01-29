import React from 'react';
import { Link } from 'react-router-dom';

function slug(name) {
  return encodeURIComponent(name.replace(/\s+/g, '-'));
}

export default function GreatOnes() {
  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto bg-white shadow rounded p-6">
        <h1 className="text-2xl font-bold">Great Ones</h1>

        <p className="mt-4 text-gray-800">"Great One" is the highest <Link to="/rating" className="text-green-800 hover:underline">trophy rating class</Link> and differs from other rating classes (None, Bronze, Silver, Gold, Diamond) in certain aspects.</p>

        <p className="mt-3 text-gray-800">Great Ones are extremely rare. While only about 1% of animals have a "Diamond" rating and it can take a player hundreds of hours to spot one of these (because they are not only rare but also much more elusive), Great Ones are even more difficult to find and only few players will ever see one. While generally all animals exist in all trophy rating classes (e.g. Diamond Mallards, etc.), only certain animals exist as Great Ones. As of the end of 2025, there are 10 species that have great individuals:</p>

        <ul className="list-disc list-inside mt-3 text-gray-800 space-y-2">
          <li><Link to={`/animals/${slug('Whitetail Deer')}`} className="text-green-800 hover:underline">Whitetail Deer</Link> — introduced April 2020 (first Great Ones)</li>
          <li><Link to={`/animals/${slug('Red Deer')}`} className="text-green-800 hover:underline">Red Deer</Link> — added November 2021</li>
          <li><Link to={`/animals/${slug('Black Bear')}`} className="text-green-800 hover:underline">Black Bear</Link> — <Link to="/maps/revontuli-coast" className="text-green-800 hover:underline">Revontuli Coast</Link> Update (Patch 1.74, 28 June 2022)</li>
          <li><Link to={`/animals/${slug('Moose')}`} className="text-green-800 hover:underline">Moose</Link> — 6 December 2022 Update</li>
          <li><Link to={`/animals/${slug('Fallow Deer')}`} className="text-green-800 hover:underline">Fallow Deer</Link> — <Link to="/maps/emerald-coast" className="text-green-800 hover:underline">Emerald Coast</Link> release, 20 June 2023</li>
          <li><Link to={`/animals/${slug('Tahr')}`} className="text-green-800 hover:underline">Tahr species</Link> — <Link to="/maps/sundarpatan-nepal" className="text-green-800 hover:underline">Sundarpatan</Link> release, 18 June 2024</li>
          <li><Link to={`/animals/${slug('Red Fox')}`} className="text-green-800 hover:underline">Red Fox</Link> — <Link to="/maps/salzwiesen-park" className="text-green-800 hover:underline">Salzwiesen Park</Link> release, December 2024</li>
          <li><Link to={`/animals/${slug('Ring-Necked Pheasant')}`} className="text-green-800 hover:underline">Ring-Necked Pheasant</Link> — <Link to="/maps/salzwiesen-park" className="text-green-800 hover:underline">Salzwiesen Park</Link> release, December 2024</li>
          <li><Link to={`/animals/${slug('Mule Deer')}`} className="text-green-800 hover:underline">Mule Deer</Link> — <Link to="/maps/askiy-ridge" className="text-green-800 hover:underline">Askiy Ridge Hunting Preserve</Link> release, 17 June 2025</li>
          <li><Link to={`/animals/${slug('Gray Wolf')}`} className="text-green-800 hover:underline">Gray Wolf</Link> — Game Feeders Pack release, 21 October 2025</li>
        </ul>

        <p className="mt-4 text-gray-800">The class was introduced in April 2020 with the Whitetail Deer Great Ones being added to the game. With the Great Ones a new <Link to="/rating" className="text-green-800 hover:underline">difficulty level</Link> was introduced, namely "10 - Fabled", and even animals that usually only reach lower difficulty levels (e.g. a Diamond Whitetail Deer is difficulty "3 - Very Easy") are difficulty 10 as a Great One.</p>

        <p className="mt-3 text-gray-800">The antlers of Great Ones are marked as "atypical" in the <Link to="/truscore" className="text-green-800 hover:underline">TruScore</Link> evaluation screen. While so far only Great Ones with atypical antlers exist, this feature might be introduced to lower-class animals as well in the future, as it is the case in theHunter Classic.</p>

        <div className="mt-6">
          <p className="text-gray-800">Quick links:</p>
          <ul className="list-inside list-disc text-gray-800 mt-2">
            <li><Link to={`/rating`} className="text-green-800 hover:underline">Back to Rating</Link></li>
            <li><Link to={`/animals/${slug('Whitetail Deer')}`} className="text-green-800 hover:underline">Whitetail Deer page</Link></li>
            <li><Link to={`/animals/${slug('Red Deer')}`} className="text-green-800 hover:underline">Red Deer page</Link></li>
            <li><Link to={`/animals/${slug('Black Bear')}`} className="text-green-800 hover:underline">Black Bear page</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
