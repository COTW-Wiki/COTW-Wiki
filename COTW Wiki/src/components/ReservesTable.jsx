import React from 'react';

const ReservesTable = () => {
  const reserveData = [
    { name: "Hirschfelden Hunting Reserve", partOf: "Base game", released: "February 16, 2017", continent: "Europe", notes: "" },
    { name: "Layton Lake District", partOf: "Base game", released: "February 16, 2017", continent: "North America", notes: "" },
    { name: "Medved-Taiga National Park", partOf: "DLC", released: "October 17, 2017", continent: "Asia", notes: "" },
    { name: "Vurhonga Savanna", partOf: "DLC", released: "August 30, 2018", continent: "Africa", notes: "" },
    { name: "Parque Fernando", partOf: "DLC", released: "December 13, 2018", continent: "South America", notes: "" },
    { name: "Yukon Valley", partOf: "DLC", released: "June 25, 2019", continent: "North America", notes: "" },
    { name: "Cuatro Colinas Game Reserve", partOf: "DLC", released: "December 10, 2019", continent: "Europe", notes: "" },
    { name: "Silver Ridge Peaks", partOf: "DLC", released: "June 23, 2020", continent: "North America", notes: "" },
    { name: "Te Awaroa National Park", partOf: "DLC", released: "December 10, 2020", continent: "Oceania", notes: "" },
    { name: "Rancho del Arroyo", partOf: "DLC", released: "June 29, 2021", continent: "North America", notes: "" },
    { name: "Mississippi Acres Preserve", partOf: "DLC", released: "December 7, 2021", continent: "North America", notes: "" },
    { name: "Revontuli Coast", partOf: "DLC", released: "June 28, 2022", continent: "Europe", notes: "" },
    { name: "New England Mountains", partOf: "DLC", released: "December 6, 2022", continent: "North America", notes: "" },
    { name: "Emerald Coast", partOf: "DLC", released: "June 20, 2023", continent: "Australia", notes: "" },
    { name: "Sundarpatan", partOf: "DLC", released: "June 18, 2024", continent: "Asia", notes: "" },
    { name: "Salzwiesen Park", partOf: "DLC", released: "December 3, 2024", continent: "Europe", notes: "" },
    { name: "Askiy Ridge Hunting Preserve", partOf: "DLC", released: "June 17, 2025", continent: "North America", notes: "Also known as Alberta Hunting Preserve" },
    { name: "Tòrr nan Sithean", partOf: "DLC", released: "December 9, 2025", continent: "Europe", notes: "Also known as Scotland Hunting Preserve" },
  ];

  const SortIcon = () => (
    <div className="flex flex-col ml-2 opacity-80">
      <span className="text-[8px] leading-none text-white">▲</span>
      <span className="text-[8px] leading-none text-white">▼</span>
    </div>
  );

  return (
    <div className="wiki-reserves-container bg-[#0a1926] text-[#e1e1e1] p-6 font-sans mb-8">
      <div className="description space-y-4 mb-8 text-lg">
        <p>
          <strong className="text-white">Reserves</strong> are game maps/worlds which are available for players to hunt on. Including <span className="text-[#3498db] hover:underline cursor-pointer">DLCs</span>, there are currently 18 reserves to play on.
        </p>
        <p>
          While Layton Lake District and Hirschfelden Hunting Reserve are available with the base game, the other reserves have to be bought as DLCs. However, these reserves can be played even if a player does not own the DLC if they join a <span className="text-[#3498db] hover:underline cursor-pointer">Multiplayer</span> session in which the host owns the DLC.
        </p>
        <p>
          Reserves are located all around the world and each reserve has its own group of huntable <span className="text-[#3498db] hover:underline cursor-pointer">animals</span>. Accordingly, the animals in a reserve reflect the wildlife that lives in the real-life counterpart of the reserve.
        </p>
      </div>

      <div className="overflow-x-auto border border-[#2a4b63]">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#1d334a] text-white">
              <th className="p-4 border-r border-[#2a4b63] font-semibold flex items-center justify-center cursor-pointer hover:bg-[#25415e]">
                Reserve <SortIcon />
              </th>
              <th className="p-4 border-r border-[#2a4b63] font-semibold cursor-pointer hover:bg-[#25415e]">
                <div className="flex items-center justify-center">Part of <SortIcon /></div>
              </th>
              <th className="p-4 border-r border-[#2a4b63] font-semibold cursor-pointer hover:bg-[#25415e]">
                <div className="flex items-center justify-center">Released <SortIcon /></div>
              </th>
              <th className="p-4 border-r border-[#2a4b63] font-semibold cursor-pointer hover:bg-[#25415e]">
                <div className="flex items-center justify-center">Continent <SortIcon /></div>
              </th>
              <th className="p-4 font-semibold cursor-pointer hover:bg-[#25415e]">
                <div className="flex items-center justify-center">Notes <SortIcon /></div>
              </th>
            </tr>
          </thead>
          <tbody>
            {reserveData.map((reserve, index) => (
              <tr 
                key={index} 
                className="border-t border-[#2a4b63] hover:bg-[#142838] transition-colors"
              >
                <td className="p-6 border-r border-[#2a4b63]">
                  <a href={`#${reserve.name.replace(/\s+/g, '')}`} className="text-[#3498db] hover:underline font-medium">
                    {reserve.name}
                  </a>
                </td>
                <td className="p-6 border-r border-[#2a4b63] text-center">{reserve.partOf}</td>
                <td className="p-6 border-r border-[#2a4b63] text-center">{reserve.released}</td>
                <td className="p-6 border-r border-[#2a4b63] text-center">{reserve.continent}</td>
                <td className="p-6 text-sm leading-relaxed">{reserve.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReservesTable;
