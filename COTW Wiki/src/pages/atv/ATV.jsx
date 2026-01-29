import React from 'react';
import { Link } from 'react-router-dom';

export default function ATV() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Saber 4x4</h1>

      <p className="text-gray-700 mb-2">The Saber 4x4 is the only available vehicle in the game. It comes in three different color variants: jade, crimson and charcoal.</p>

      <p className="text-gray-700">To use the saber, the ATV <Link to="/dlc" className="text-blue-600 hover:underline">DLC</Link> has to be purchased for 3.99 $/€ (PC Only. Default on Console). A feature of the ATVs is that they can be shared during multiplayer sessions, meaning as long as one player owns the DLC, all players can use it. To do so, players without the DLC have to purchase the Saber 4x4 for $20,000 in the shop</p>

      <div className="bg-white rounded-lg shadow p-4 mt-4">
        <h2 className="text-lg font-semibold mb-2">Color Variants</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Jade</li>
          <li>Crimson</li>
          <li>Charcoal</li>
        </ul>
      </div>

      <div className="bg-white rounded-lg shadow p-4 mt-6">
        <h2 className="text-lg font-semibold mb-2">Trailer</h2>
        <div className="flex flex-col items-start gap-2">
          <a href="https://www.youtube.com/watch?v=ry93SPMvesE" target="_blank" rel="noreferrer" className="block">
            <img
              src="https://img.youtube.com/vi/ry93SPMvesE/hqdefault.jpg"
              alt="Saber 4x4 trailer thumbnail"
              className="w-full max-w-md rounded shadow-md hover:opacity-90 transition-opacity"
              loading="lazy"
            />
          </a>
          <p className="text-sm text-gray-600 font-medium">
            <a href="https://www.youtube.com/watch?v=ry93SPMvesE" target="_blank" rel="noreferrer" className="text-blue-600 underline">
              TheHunter - Call of the Wild - ATV SABER 4x4 Trailer
            </a>
          </p>
        </div>

        <h3 className="font-semibold">SABER 4X4:</h3>
        <p className="text-gray-700 mt-2">With the SABER 4X4, transportation can be provided with a unique comfort and style in difficult terrain conditions. With this ATV, you will enjoy speed, fun and exploration as you roam all sides of the field from swamps to hills and forests at blazing speed.</p>

        <h3 className="font-semibold mt-3">SABER 4X4 sharing</h3>
        <p className="text-gray-700 mt-2">As the owner of this DLC, you can easily share your off-road vehicle experience with your friends in multiplayer mode. When you create a game or join an existing game, all other players can also duplicate and use existing vehicles. Thanks to you, everyone will be able to explore the hunting ground as they wish, either alone or with other players. When all DLC owners leave the multiplayer game, new vehicles will no longer be created, but existing created vehicles will remain available until the end of the game.</p>

        <h3 className="font-semibold mt-3">SABER 4X4 driving</h3>
        <p className="text-gray-700 mt-2">Whether you feel completely inside the car in 1st person mode or enjoy the view from a wider angle in 3rd person mode, both are possible with SABER 4X4. By pressing a single button (default: "C") you can change the camera's position and your choice will be saved for your next rides. Whether you want to see your ATV from all angles in 3rd person or experience a real driving experience in 1st person. We can't wait to see how.</p>
      </div>

      <div className="bg-white rounded-lg shadow p-4 mt-6">
        <h2 className="text-lg font-semibold mb-2">Trivia</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>The ATV drives with approximately 40 km/h. This can get up to 60 km/h downhill.</li>
          <li>It is not possible to kill animals by running over them. Collision with animals is treated the same way as it is with static objects.</li>
          <li>It is possible to switch to first person perspective by pressing C.</li>
          <li>The spook radius when using the ATV is around 300 meters.</li>
        </ul>
      </div>
    </div>
  );
}
