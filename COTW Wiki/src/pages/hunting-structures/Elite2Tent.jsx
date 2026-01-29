import React from 'react';
import { Link } from 'react-router-dom';
import Elite2TentBlue from '../../assets/Elite2TentBlue.webp';
import Elite2TentCamo from '../../assets/Elite2TentCamo.webp';
import Elite2TentGreen from '../../assets/Elite2TentGreen.webp';
import Elite2TentPink from '../../assets/Elite2TentPink.webp';
import Elite2TentWhite from '../../assets/Elite2TentWhite.webp';

export default function Tents() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold text-green-800 mb-4">Tents (Elite 2 Tent)</h1>

      <div className="bg-white rounded-lg shadow p-4 mb-4 text-gray-700">
        <p>
          Two-man tent suitable for all weather conditions. The patented high-tech Mosquito Wall 2.0, tested under severe
          conditions in northern Scandinavia, is proven to decrease user blood loss by almost 5% compared to its
          previous generation. This award-winning product also includes a large storage container that'll turn your
          mobile home into a fully functional outpost. Notable features include the ability to be deployed almost
          anywhere, serving as a fast travel, revival and resting area (camping fees apply) and store and storage access.
        </p>

        <p className="mt-3">
          Tents act as portable <Link to="/outposts" className="text-green-800 hover:underline">Outposts</Link> which allow the player to establish a new custom spawn point. They also allow,
          like permanent <Link to="/outposts" className="text-green-800 hover:underline">outposts</Link>, the hunter to shift the time in exchange for money.
        </p>

        <p className="mt-3">
          Tents are part of the <Link to="/dlc" className="text-green-800 hover:underline">Tents & Groundblinds DLC</Link>, which must be purchased for 4.29 $/€.
        </p>

        <p className="mt-2">Tents are limited to 16 per <Link to="/maps" className="text-green-800 hover:underline">reserve</Link>.</p>

        <p className="mt-2">Animals will spook when you use fast travel, and the tent is too close to them. (not sure the distance yet, i think 200m but it could change with animals and haven't tested yet)</p>

        <div className="mt-3">
          <strong>Price (in-game shop):</strong> 16,000
        </div>
        <div className="mt-1">
          <strong>Weight:</strong> 6
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-4 mb-4">
        <h2 className="text-lg font-semibold mb-4">Color Variants</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="flex flex-col items-center">
            <img src={Elite2TentBlue} alt="Elite 2 Tent Blue" className="w-[220px] h-[110px] object-contain mb-2 rounded" />
            <span className="text-sm font-medium text-gray-700">Blue</span>
          </div>
          <div className="flex flex-col items-center">
            <img src={Elite2TentCamo} alt="Elite 2 Tent Camo" className="w-[220px] h-[110px] object-contain mb-2 rounded" />
            <span className="text-sm font-medium text-gray-700">Camo</span>
          </div>
          <div className="flex flex-col items-center">
            <img src={Elite2TentGreen} alt="Elite 2 Tent Green" className="w-[220px] h-[110px] object-contain mb-2 rounded" />
            <span className="text-sm font-medium text-gray-700">Green</span>
          </div>
          <div className="flex flex-col items-center">
            <img src={Elite2TentPink} alt="Elite 2 Tent Pink" className="w-[220px] h-[110px] object-contain mb-2 rounded" />
            <span className="text-sm font-medium text-gray-700">Pink</span>
          </div>
          <div className="flex flex-col items-center">
            <img src={Elite2TentWhite} alt="Elite 2 Tent White" className="w-[220px] h-[110px] object-contain mb-2 rounded" />
            <span className="text-sm font-medium text-gray-700">White</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-4">
        <h2 className="text-lg font-semibold mb-2">Notes & Known Issues</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Tents can disappear in some cases after fast travel due to map/interior handling; a common workaround is to fast travel first to a nearby permanent outpost, then to the tent.</li>
          <li>Using fast travel when animals are very close to the tent can spook them — take care when placing and using tents.</li>
          <li>Tents are limited in number per <Link to="/maps" className="text-green-800 hover:underline">reserve</Link> (the game enforces a maximum).</li>
        </ul>
      </div>

      <div className="mt-6 text-sm text-gray-600">Source: paraphrased from community documentation.</div>
    </div>
  );
}
