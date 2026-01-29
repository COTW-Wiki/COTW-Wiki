import React from 'react';
import { Link } from 'react-router-dom';

export default function Multiplayer() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Multiplayer</h1>

      <p className="text-gray-700">
        Multiplayer allows it to play with other players via the steam server network. A game can either be hosted or
        joined via the Multiplayer tab in the main menu. If the host of the game owns DLC other players do not own,
        they are regardless be able to use the content of the DLC during the session. This includes the{' '}
        <Link to="/atv" className="text-blue-600 underline">Saber 4x4</Link>.
        Players are also able to join games on the DLC maps without owning them (Medved-Taiga National Park & Vurhonga
        Savanna Reserve). If the owner of the map leaves and the remaining players do not have the DLC Map, the
        remaining players will have 15 minutes before the session is terminated.
      </p>

      <div className="bg-white p-4 rounded-lg shadow mt-6">
        <h2 className="text-lg font-semibold mb-2">Gameplay</h2>
        <p className="text-gray-700 mb-2">A multiplayer session is different from a singleplayer session in following ways:</p>
        <ul className="list-disc list-inside text-gray-700">
          <li>The mission system is disabled, meaning no mission can be finished.</li>
          <li>Instead of missions, the host can activate challenges for the players, which are usually about the amount of harvested animals or a specific killing method. However, completing a challenge does not yield a reward.</li>
          <li>All players have an indicator on the map as well as in-game (which will show their name and distance).</li>
          <li>Spotting an animal will make it visible for all players in an appropriate proximity.</li>
          <li>If a player harvests an animal shot by another player, the cash and experience points will be rewarded to the player that actually shot the animal. However, the animal will be registered in the hunting log of the harvesting player.</li>
        </ul>
      </div>
    </div>
  );
}
