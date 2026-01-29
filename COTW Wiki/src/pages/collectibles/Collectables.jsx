import React, { useState } from 'react';
import LaytonMap from '../../assets/Layton_Lake_District_Collectibles.webp';
import HirschfeldenMap from '../../assets/Hirschfelden_Hunting_Reserve_Collectibles.webp';
import MedvedTaigaMap from '../../assets/Medved-Taiga_National_Park_Collectibles.webp';
import VurhongaMap from '../../assets/Vurhonga_Savanna_Collectibles.webp';
import CollectiblesImge from '../../assets/Collectibles.webp';

export default function App() {
  const [isTocOpen, setIsTocOpen] = useState(true);
  const [expandedSections, setExpandedSections] = useState({});
  const [checkedItems, setCheckedItems] = useState({});

  const toggleSection = (region, type) => {
    const key = `${region}-${type}`;
    setExpandedSections(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const toggleCheck = (region, type, index) => {
    const key = `${region}-${type}-${index}`;
    setCheckedItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Data for the map grid
  const maps = [
    {
      title: "Layton Lake District Collectibles Map (Credits: Nucta Ox)",
      img: LaytonMap
    },
    {
      title: "Hirschfelden Hunting Reserve Collectibles Map (Credits: Nucta Ox)",
      img: HirschfeldenMap
    },
    {
      title: "Medved-Taiga National Park Collectibles Map (Credits: Nucta Ox)",
      img: MedvedTaigaMap
    },
    {
      title: "Vurhonga Savanna Collectibles Map (Credits: Nucta Ox)",
      img: VurhongaMap
    }
  ];

  // Defined regions array to fix ReferenceError
  const regions = [
    "Layton Lake District",
    "Hirschfelden Hunting Reserve",
    "Medved-Taiga National Park",
    "Vurhonga Savanna"
  ];

  // Data for Collectibles Lists
  const collectiblesData = {
    "Layton Lake District": {
      "Artifacts": [
        { name: "Native Pot 1", region: "Balmont", coords: "8664, 11471" },
        { name: "Native Pot 2", region: "Mount Leviatan", coords: "12065, 11243" },
        { name: "Native Pot 3", region: "Willipeg", coords: "6267, 6498" },
        { name: "WW1 Badge 1", region: "Calburn", coords: "10208, 5281" },
        { name: "WW1 Badge 2", region: "Cheelah", coords: "11164, 9155" },
        { name: "WW1 Badge 3", region: "Mount Kraken", coords: "7183, 9168" },
        { name: "WW1 Badge 4", region: "Balmont", coords: "9920, 10327" },
        { name: "Native Axe 1", region: "Cheelah", coords: "13446, 8529" },
        { name: "Native Axe 2", region: "Chopeeka", coords: "8868, 5025" },
        { name: "Native Axe 3", region: "High Lake", coords: "8551, 6539" }
      ],
      "Sheds": [
        { name: "Whitetail Deer Small Shed Antler", region: "Balmont", coords: "10186, 11292" },
        { name: "Whitetail Deer Large Shed Antler", region: "Roonachee", coords: "7152, 10960" },
        { name: "Whitetail Deer Large Shed Antler", region: "Mount Leviatan", coords: "10617, 10944" },
        { name: "Whitetail Deer Small Shed Antler", region: "Roonachee", coords: "6515, 10574" },
        { name: "Whitetail Deer Large Shed Antler", region: "Balmont", coords: "10728, 10486" },
        { name: "Moose Small Shed Antler", region: "Balmont", coords: "8598, 10352" },
        { name: "Moose Small Shed Antler", region: "Roonachee", coords: "6906, 10287" },
        { name: "Fallow Deer Small Shed Antler", region: "Balmont", coords: "9652, 10071" },
        { name: "Roosevelt Elk Large Shed Antler", region: "Balmont", coords: "9848, 9644" },
        { name: "Roosevelt Elk Large Shed Antler", region: "Mount Leviatan", coords: "10908, 9519" },
        { name: "Moose Large Shed Antler", region: "Balmont", coords: "8310, 9402" },
        { name: "Whitetail Deer Large Shed Antler", region: "Balmont", coords: "8929, 9060" },
        { name: "Whitetail Deer Large Shed Antler", region: "Mount Kraken", coords: "6542, 8790" },
        { name: "Whitetail Deer Small Shed Antler", region: "Mount Kraken", coords: "6965, 8389" },
        { name: "Whitetail Deer Large Shed Antler", region: "High Lake", coords: "10349, 8122" },
        { name: "Moose Large Shed Antler", region: "Cheelah", coords: "11029, 7988" },
        { name: "Whitetail Deer Large Shed Antler", region: "Cheelah", coords: "12255, 7918" },
        { name: "Blacktail Deer Small Shed Antler", region: "High Lake", coords: "9042, 7820" },
        { name: "Fallow Deer Small Shed Antler", region: "Mount Kraken", coords: "7342, 7609" },
        { name: "Roosevelt Elk Small Shed Antler", region: "High Lake", coords: "8936, 7453" },
        { name: "Roosevelt Elk Small Shed Antler", region: "Norden", coords: "13132, 7244" },
        { name: "Moose Small Shed Antler", region: "High Lake", coords: "9622, 7176" },
        { name: "Roosevelt Elk Large Shed Antler", region: "Willipeg", coords: "6575, 7143" },
        { name: "Moose Small Shed Antler", region: "Norden", coords: "10101, 7006" },
        { name: "Blacktail Deer Small Shed Antler", region: "Norden", coords: "11832, 6884" },
        { name: "Roosevelt Elk Large Shed Antler", region: "Norden", coords: "11443, 6621" },
        { name: "Fallow Deer Small Shed Antler", region: "Norden", coords: "13399, 5940" },
        { name: "Whitetail Deer Large Shed Antler", region: "Caliburn", coords: "9427, 5744" },
        { name: "Whitetail Deer Large Shed Antler", region: "Willipeg", coords: "6520, 5605" },
        { name: "Blacktail Deer Small Shed Antler", region: "Calburn", coords: "11044, 5296" },
        { name: "Moose Large Shed Antler", region: "Chopeeka", coords: "7526, 5258" },
        { name: "Fallow Deer Small Shed Antler", region: "Calburn", coords: "10463, 5119" },
        { name: "Moose Small Shed Antler", region: "Chopeeka", coords: "8235, 5062" },
        { name: "Roosevelt Elk Small Shed Antler", region: "Calburn", coords: "9881, 5021" },
        { name: "Fallow Deer Small Shed Antler", region: "Calburn", coords: "9683, 4871" },
        { name: "Roosevelt Elk Large Shed Antler", region: "Calburn", coords: "11884, 4839" },
        { name: "Whitetail Deer Large Shed Antler", region: "Chopeeka", coords: "6797, 4840" },
        { name: "Fallow Deer Small Shed Antler", region: "Norden", coords: "13411, 4800" },
        { name: "Roosevelt Elk Large Shed Antler", region: "Chopeeka", coords: "8354, 3829" },
        { name: "Moose Large Shed Antler", region: "Chopeeka", coords: "7552, 3818" }
      ]
    },
    "Hirschfelden Hunting Reserve": {
      "Artifacts": [
        { name: "WW1 Russian Dog Tag", region: "Tichenau", coords: "-8883, 12958" },
        { name: "WW1 Helmet 2", region: "Tichenau", coords: "-10355, 12189" },
        { name: "Viking Coin 1", region: "Rathenfeldt", coords: "-4416, 11665" },
        { name: "WW1 Medal 1", region: "Schonfeldt", coords: "-6736, 11061" },
        { name: "WW1 US Dog Tag", region: "Ernsdorf", coords: "-10399, 10203" },
        { name: "WW1 Medal 4", region: "Spreeberg", coords: "-6883, 9852" },
        { name: "WW1 Medal 5", region: "Petershain", coords: "-4850, 9167" },
        { name: "WW1 Medal 2", region: "Spreeberg", coords: "-7580, 8784" },
        { name: "WW1 Medal 3", region: "Petershain", coords: "-4482, 8492" },
        { name: "WW1 Helmet 1", region: "Jonsdorf", coords: "-8925, 7738" },
        { name: "Viking Coin 2", region: "Ritterstein", coords: "-5781, 7263" },
        { name: "WW1 German Dog Tag", region: "Müllerwald", coords: "-5500, 5534" }
      ],
      "Sheds": [
        { name: "Roe Deer Large Shed Antler", region: "Schonfeldt", coords: "-7666, 13216" },
        { name: "Fallow Deer Large Shed Antler", region: "Rathenfeldt", coords: "-5729, 12980" },
        { name: "Roe Deer Large Shed Antler", region: "Rathenfeldt", coords: "-4152, 12614" },
        { name: "Fallow Deer Large Shed Antler", region: "Rathenfeldt", coords: "-4650, 12594" },
        { name: "Roe Deer Large Shed Antler", region: "Schonfeldt", coords: "-6303, 12504" },
        { name: "Fallow Deer Large Shed Antler", region: "Tichenau", coords: "-8364, 12473" },
        { name: "Fallow Deer Small Shed Antler", region: "Rathenfeldt", coords: "-5080, 12184" },
        { name: "Roe Deer Large Shed Antler", region: "Tichenau", coords: "-8849, 12145" },
        { name: "Fallow Deer Small Shed Antler", region: "Schonfeldt", coords: "-7257, 12117" },
        { name: "Roe Deer Large Shed Antler", region: "Tichenau", coords: "-9461, 12100" },
        { name: "Fallow Deer Large Shed Antler", region: "Rathenfeldt", coords: "-3765, 11725" },
        { name: "Roe Deer Large Shed Antler", region: "Tichenau", coords: "-10149, 11684" },
        { name: "Roe Deer Large Shed Antler", region: "Schonfeldt", coords: "-6605, 11378" },
        { name: "Roe Deer Large Shed Antler", region: "Ernsdorf", coords: "-9422, 11343" },
        { name: "Fallow Deer Large Shed Antler", region: "Ernsdorf", coords: "-8363, 11291" },
        { name: "Roe Deer Small Shed Antler", region: "Rathenfeldt", coords: "-5781, 11118" },
        { name: "Fallow Deer Large Shed Antler", region: "Schonfeldt", coords: "-6627, 10902" },
        { name: "Fallow Deer Small Shed Antler", region: "Petershain", coords: "-3820, 10746" },
        { name: "Fallow Deer Large Shed Antler", region: "Schonfeldt", coords: "-7162, 10731" },
        { name: "Roe Deer Large Shed Antler", region: "Spreeberg", coords: "-6598, 10361" },
        { name: "Fallow Deer Small Shed Antler", region: "Spreeberg", coords: "-7914, 9623" },
        { name: "Fallow Deer Large Shed Antler", region: "Petershain", coords: "-4333, 9531" },
        { name: "Fallow Deer Large Shed Antler", region: "Spreeberg", coords: "-8915, 9482" },
        { name: "Fallow Deer Small Shed Antler", region: "Petershain", coords: "-5539, 9463" },
        { name: "Roe Deer Large Shed Antler", region: "Ernsdorf", coords: "-10556, 9304" },
        { name: "Red Deer Large Shed Antler", region: "Jonsdorf", coords: "-8839, 8744" },
        { name: "Roe Deer Large Shed Antler", region: "Petershain", coords: "-5582, 8675" },
        { name: "Red Deer Large Shed Antler", region: "Ritterstein", coords: "-7300, 7624" },
        { name: "Roe Deer Large Shed Antler", region: "Petershain", coords: "-4723, 7400" },
        { name: "Red Deer Small Shed Antler", region: "Ritterstein", coords: "-7077, 7153" },
        { name: "Fallow Deer Large Shed Antler", region: "Petershain", coords: "-4883, 6877" },
        { name: "Fallow Deer Large Shed Antler", region: "Ritterstein", coords: "-6701, 6841" },
        { name: "Fallow Deer Small Shed Antler", region: "Müllerwald", coords: "-5676, 6524" },
        { name: "Roe Deer Large Shed Antler", region: "Müllerwald", coords: "-4364, 6387" },
        { name: "Roe Deer Large Shed Antler", region: "Bohndorf", coords: "-9775, 6019" },
        { name: "Red Deer Small Shed Antler", region: "Jonsdorf", coords: "-8567, 5907" },
        { name: "Roe Deer Large Shed Antler", region: "Ritterstein", coords: "-7271, 5756" },
        { name: "Fallow Deer Large Shed Antler", region: "Müllerwald", coords: "-5013, 5690" },
        { name: "Fallow Deer Large Shed Antler", region: "Müllerwald", coords: "-3921, 5647" },
        { name: "Red Deer Large Shed Antler", region: "Bohndorf", coords: "-9228, 5584" }
      ]
    },
    "Medved-Taiga National Park": {
      "Artifacts": [
        { name: "Cave Lion Canine Tooth", region: "Mamontovaya Tundra", coords: "-6730, -5066" },
        { name: "Cave Lion Canine Tooth", region: "Lesnye Lands", coords: "-9026, -5175" },
        { name: "Mammoth Tusk", region: "Mamontovaya Tundra", coords: "-5696, -5543" },
        { name: "Mammoth Tusk", region: "Mamontovaya Tundra", coords: "-4566, -5852" },
        { name: "Mammoth Tusk", region: "Pustaya Mountain", coords: "-6035, -5993" },
        { name: "Mammoth Tusk", region: "Mamontovaya Tundra", coords: "-5393, -6026" },
        { name: "Cave Lion Canine Tooth", region: "Pustaya Mountain", coords: "-7301, -6114" },
        { name: "Mammoth Tusk", region: "Mamontovaya Tundra", coords: "-4849, -6268" },
        { name: "Mammoth Tusk", region: "Mamontovaya Tundra", coords: "-4120, -6765" },
        { name: "Mammoth Tusk", region: "Mamontovaya Tundra", coords: "-5673, -6908" },
        { name: "Cave Lion Canine Tooth", region: "Pustaya Mountain", coords: "-6556, -7075" },
        { name: "Mammoth Tusk", region: "Mamontovaya Tundra", coords: "-4964, -7601" },
        { name: "Mammoth Tusk", region: "Mamontovaya Tundra", coords: "-6849, -7696" },
        { name: "Cave Lion Canine Tooth", region: "Rybatskiy Bay", coords: "-9955, -7703" },
        { name: "Mammoth Tusk", region: "Pustaya Mountain", coords: "-7881, -8567" },
        { name: "Cave Lion Canine Tooth", region: "Pustaya Mountain", coords: "-8291, -8619" },
        { name: "Cave Lion Canine Tooth", region: "Pustaya Mountain", coords: "-7755, -9499" },
        { name: "Cave Lion Canine Tooth", region: "Dikiy Coast", coords: "-6517, -10438" },
        { name: "Cave Lion Canine Tooth", region: "Dikiy Coast", coords: "-4984, -10568" },
        { name: "Cave Lion Canine Tooth", region: "Zverolova Hill", coords: "-9994, -11273" }
      ],
      "Sheds": [
        { name: "Moose Large Shed Antler", region: "Priyut Dohloy Sobaki", coords: "-11188, -5091" },
        { name: "Cave Lion Skull", region: "Kostyanoy Priyut", coords: "-9338, -5191" },
        { name: "Moose Large Shed Antler", region: "Odinokie Dni", coords: "-6967, -6020" },
        { name: "Reindeer Large Shed Antler", region: "Odinokie Nochi", coords: "-9751, -6369" },
        { name: "Reindeer Large Shed Antler", region: "Belye Nochi", coords: "-4478, -6805" },
        { name: "Reindeer Small Shed Antler", region: "Sobach'ye Serdtse", coords: "-7980, -7105" },
        { name: "Moose Small Shed Antler", region: "Izluchina Viktora", coords: "-10210, -7241" },
        { name: "Cave Lion Skull", region: "Na Kulichkakh", coords: "-6403, -7281" },
        { name: "Reindeer Large Shed Antler", region: "Zhizn' i Sud'ba", coords: "-11402, -7593" },
        { name: "Moose Large Shed Antler", region: "Zapadnyy Ledyanoy Tonnel'", coords: "-7765, -7673" },
        { name: "Cave Lion Skull", region: "Myortvye Dushi", coords: "-10047, -7985" },
        { name: "Cave Lion Skull", region: "Kaban'ya Tropa", coords: "-5425, -8032" },
        { name: "Moose Large Shed Antler", region: "Rakovyi Korpus", coords: "-8343, -8438" },
        { name: "Cave Lion Skull", region: "Vostochnyy Ledyanoy Tonnel'", coords: "-6738, -8526" },
        { name: "Reindeer Small Shed Antler", region: "Chekurovka", coords: "-9117, -9000" },
        { name: "Reindeer Large Shed Antler", region: "Khizhina Anatoliya", coords: "-10078, -9267" },
        { name: "Moose Large Shed Antler", region: "Derevnya Dvukh Rek", coords: "-11650, -9423" },
        { name: "Moose Large Shed Antler", region: "Beliy Parokhod", coords: "-8034, -9581" },
        { name: "Moose Large Shed Antler", region: "Dvorets Chuchuni", coords: "-7103, -9655" },
        { name: "Cave Lion Skull", region: "Khizhina Nikolaya", coords: "-8976, -9863" },
        { name: "Moose Small Shed Antler", region: "Na Dne", coords: "-5548, -9905" },
        { name: "Reindeer Large Shed Antler", region: "Dom, Gde Razbivayutsa Serdtsa", coords: "-8133, -10264" },
        { name: "Reindeer Small Shed Antler", region: "Taras Bul'ba", coords: "-6457, -10363" },
        { name: "Moose Small Shed Antler", region: "Dvorets Kaban'yevo Tsarya", coords: "-7540, -10822" },
        { name: "Reindeer Small Shed Antler", region: "Tikhiy Don", coords: "-9204, -10889" },
        { name: "Cave Lion Skull", region: "Khizhina Gryankina", coords: "-8375, -10985" },
        { name: "Moose Large Shed Antler", region: "Khizhina Petra", coords: "-7963, -11039" },
        { name: "Moose Large Shed Antler", region: "Kabala Svyatosh", coords: "-9805, -11110" },
        { name: "Moose Small Shed Antler", region: "Ray Dikogo Poberezh'ya", coords: "-6556, -11123" },
        { name: "Cave Lion Skull", region: "Posledniy Priyut", coords: "-5772, -11130" }
      ]
    },
    "Vurhonga Savanna": {
      "Artifacts": [
        { name: "The Golden Rhinoceros of Mapungubwe", region: "Vupeladyambu / Vurhonga Plateau", coords: "5317, -7567" },
        { name: "Mask of Sangoma", region: "Dzonga / Central Savanna", coords: "8721, -7672" },
        { name: "Scimitar-Toothed Cat", region: "Vupeladyambu / Vurhonga Plateau, in a Cave", coords: "4989, -8219" },
        { name: "Dinofelis Skull", region: "Vupeladyambu / Vurhonga Plateau, in a Cave", coords: "5845, -8304" },
        { name: "Nyaminyami", region: "Dzonga / Central Savanna", coords: "9134, -8504" }
      ],
      "Sheds": []
    }
  };

  return (
    <div className="min-h-screen text-gray-100 p-6 md:p-12 font-sans tracking-tight">
       {/* Add Google Font link dynamically */}
      <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
      
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <header className="flex flex-col md:flex-row md:items-center justify-between border-b border-gray-700 pb-4 mb-6">
          <h1 className="text-4xl md:text-5xl font-light mb-4 md:mb-0">
            Collectibles
          </h1>
        </header>

        {/* Main Content Layout */}
        <div className="block">
            
            {/* Right Floated Infobox */}
            <div className="float-right w-72 ml-6 mb-4 bg-gray-800 border border-gray-700 shadow-xl font-sans">
                {/* Infobox Title */}
                <div className="bg-gray-900 text-white text-center font-bold py-2 border-b border-gray-700 tracking-wide">
                    Collectibles
                </div>
                
                {/* Image Area */}
                <div className="relative group">
                    <img 
                        src={CollectiblesImge} 
                        alt="Collectibles: Medals and Antlers" 
                        style={{ width: '268.4px', height: '276.91px' }}
                        className="object-cover block opacity-90 hover:opacity-100 transition-opacity"
                    />
                    {/* Gallery Icon overlay */}
                    <div className="absolute bottom-2 right-2 bg-black/60 p-1 rounded hover:bg-black/80 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Intro Text */}
            <div className="mb-8 text-gray-200 font-sans text-[16px] leading-relaxed space-y-4">
                <p>
                    There are 2 kinds of <strong className="text-white">collectibles</strong> that the player can find in the reserves: artifacts and sheds. Collectibles provide an <a href="#" className="text-green-400 hover:underline">XP</a> reward when found. The number of collectibles in a sub-region can be viewed via its codex entry.
                </p>
            </div>

            {/* Table of Contents */}
            <div className="mb-8 inline-block bg-gray-800/50 border border-gray-700 p-2 min-w-[260px]">
                <div className="flex justify-between items-center border-b border-gray-700 pb-1 mb-2">
                    <span className="font-bold text-white text-sm">Contents</span>
                    <button onClick={() => setIsTocOpen(!isTocOpen)} className="text-green-400 text-xs hover:underline">[{isTocOpen ? 'hide' : 'show'}]</button>
                </div>
                {isTocOpen && (
                    <ol className="list-decimal list-inside text-gray-300 text-sm space-y-1 font-sans">
                        <li><a href="#types" onClick={(e) => scrollToSection(e, 'types')} className="hover:text-white hover:underline text-green-400">Types</a></li>
                        <li><a href="#list" onClick={(e) => scrollToSection(e, 'list')} className="hover:text-white hover:underline text-green-400">List of Collectibles</a>
                            <ul className="list-none ml-[-25px] text-green-400">
                                {regions.map((region, index) => (
                                    <li key={index}>
                                        <span className="mr-1">2.{index + 1}</span>
                                        <a href={`#region-${index}`} onClick={(e) => scrollToSection(e, `region-${index}`)} className="hover:underline">{region}</a>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    </ol>
                )}
            </div>

            {/* 1. Types Section */}
            <div id="types" className="mb-12 clear-both">
                <div className="flex items-center space-x-2 border-b border-gray-700 pb-2 mb-4">
                    <h2 className="text-2xl font-bold text-white">1. Types</h2>
                    <a href="#" className="text-green-400"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></a>
                </div>
                
                <ul className="list-disc list-outside ml-6 text-gray-300 text-[16px] space-y-4">
                    <li>
                        <strong className="text-white">Artifacts:</strong> These are historical artifacts that reveal a bit about history of the reserve. These include Medals, Helmets, and Coins.
                    </li>
                    <li>
                        <strong className="text-white">Sheds:</strong> Sheds are antlers that are discarded by animals as they grow new ones for the coming season. They come in different sizes and several can be found in each sub-region. Sheds can be found dropped from most of the antlered species including Elk and Blacktail Deer.
                    </li>
                </ul>
            </div>

            {/* 2. List of Collectibles Section */}
            <div id="list" className="mb-12">
                <div className="bg-gray-800 text-gray-100 font-sans p-4 rounded-lg shadow-xl">
                    <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-600/50 pb-2">List of Collectibles</h2>
                    <div className="space-y-8">
                        {regions.map((regionName, idx) => (
                            <div key={idx} id={`region-${idx}`} className="scroll-mt-4">
                                <div className="flex items-center space-x-2 mb-2">
                                    <h3 className="text-lg font-bold text-white">{`2.${idx + 1}. ${regionName}`}</h3>
                                    <a href="#" className="text-green-400">
                                       <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
                                    </a>
                                </div>

                                {/* Artifacts Expandable */}
                                <div className="ml-4 mb-2">
                                    <div className="flex justify-between items-center text-gray-300 font-bold border-b border-gray-700/30 pb-1 mb-1">
                                        <span className="text-white text-lg">Artifacts</span>
                                        <span 
                                            className="text-green-400 text-sm cursor-pointer hover:underline"
                                            onClick={() => toggleSection(regionName, "Artifacts")}
                                        >
                                            [{expandedSections[`${regionName}-Artifacts`] ? "Collapse" : "Expand"}]
                                        </span>
                                    </div>
                                    {expandedSections[`${regionName}-Artifacts`] && (
                                        <div className="border border-gray-700 bg-gray-800 text-sm font-sans mt-2">
                                            <div className="grid grid-cols-12 gap-4 border-b border-gray-700 p-3 font-bold text-white bg-gray-800">
                                                <div className="col-span-1 text-center flex items-center justify-center">
                                                    <svg className="w-[19px] h-[18px] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                    </svg>
                                                </div>
                                                <div className="col-span-6">Name</div>
                                                <div className="col-span-3">Region</div>
                                                <div className="col-span-2">Coordinates</div>
                                            </div>
                                            {collectiblesData[regionName]?.Artifacts?.map((item, i) => {
                                                 const itemKey = `${regionName}-Artifacts-${i}`;
                                                 const isChecked = checkedItems[itemKey];
                                                 return (
                                                <div key={i} className="grid grid-cols-12 gap-4 border-b border-gray-700/50 p-3 items-center hover:bg-gray-700/50">
                                                    <div 
                                                      className="col-span-1 text-center cursor-pointer flex items-center justify-center select-none"
                                                      onClick={() => toggleCheck(regionName, "Artifacts", i)}
                                                    >
                                                         <div className={`w-[18px] h-[18px] border-[2px] transition-colors flex items-center justify-center rounded-[2px] ${isChecked ? 'bg-green-600 border-green-600' : 'border-gray-400 hover:border-gray-300'}`}>
                                                            {isChecked && (
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-white" viewBox="0 0 20 20" fill="currentColor">
                                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                                </svg>
                                                            )}
                                                         </div>
                                                    </div>
                                                    <div className="col-span-6 text-gray-300 font-bold">{item.name}</div>
                                                    <div className="col-span-3 text-gray-400">{item.region}</div>
                                                    <div className="col-span-2 text-gray-400">{item.coords}</div>
                                                </div>
                                            );
                                            })}
                                            {(!collectiblesData[regionName]?.Artifacts || collectiblesData[regionName].Artifacts.length === 0) && (
                                                <div className="p-3 text-gray-500 italic">No data available yet.</div>
                                            )}
                                        </div>
                                    )}
                                </div>

                                {/* Sheds Expandable */}
                                <div className="ml-4">
                                    <div className="flex justify-between items-center text-gray-300 font-bold border-b border-gray-700/30 pb-1 mb-1">
                                        <span className="text-white text-lg">Sheds</span>
                                        <span 
                                            className="text-green-400 text-sm cursor-pointer hover:underline"
                                            onClick={() => toggleSection(regionName, "Sheds")}
                                        >
                                            [{expandedSections[`${regionName}-Sheds`] ? "Collapse" : "Expand"}]
                                        </span>
                                    </div>
                                    {expandedSections[`${regionName}-Sheds`] && (
                                        <div className="border border-gray-700 bg-gray-800 text-sm font-sans mt-2">
                                            <div className="grid grid-cols-12 gap-4 border-b border-gray-700 p-3 font-bold text-white bg-gray-800">
                                                 <div className="col-span-1 text-center flex items-center justify-center">
                                                    <svg className="w-[19px] h-[18px] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                    </svg>
                                                </div>
                                                <div className="col-span-6">Name</div>
                                                <div className="col-span-3">Region</div>
                                                <div className="col-span-2">Coordinates</div>
                                            </div>
                                            {collectiblesData[regionName]?.Sheds?.map((item, i) => {
                                                const itemKey = `${regionName}-Sheds-${i}`;
                                                const isChecked = checkedItems[itemKey];
                                                return (
                                                <div key={i} className="grid grid-cols-12 gap-4 border-b border-gray-700/50 p-3 items-center hover:bg-gray-700/50">
                                                     <div 
                                                        className="col-span-1 text-center cursor-pointer flex items-center justify-center select-none"
                                                        onClick={() => toggleCheck(regionName, "Sheds", i)}
                                                     >
                                                         <div className={`w-[18px] h-[18px] border-[2px] transition-colors flex items-center justify-center rounded-[2px] ${isChecked ? 'bg-green-600 border-green-600' : 'border-gray-400 hover:border-gray-300'}`}>
                                                            {isChecked && (
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-white" viewBox="0 0 20 20" fill="currentColor">
                                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                                </svg>
                                                            )}
                                                         </div>
                                                    </div>
                                                    <div className="col-span-6 text-gray-300 font-bold">{item.name}</div>
                                                    <div className="col-span-3 text-gray-400">{item.region}</div>
                                                    <div className="col-span-2 text-gray-400">{item.coords}</div>
                                                </div>
                                            );
                                            })}
                                             {(!collectiblesData[regionName]?.Sheds || collectiblesData[regionName].Sheds.length === 0) && (
                                                <div className="p-3 text-gray-500 italic">No data available yet.</div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                {/* Map Grid */}
                <div className="grid grid-cols-2 gap-12 mt-12">
                    {maps.map((map, idx) => (
                        <div key={idx} className="group cursor-pointer">
                            <div className="relative overflow-hidden border border-gray-700 bg-black" style={{ width: '177px', height: '185px' }}>
                                <img 
                                    src={map.img} 
                                    alt={map.title} 
                                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                                />
                                <div className="absolute bottom-2 right-2 bg-black/60 p-1 rounded">
                                     <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                            </div>
                            <p className="mt-2 text-sm text-gray-300 group-hover:text-white leading-tight">
                                {map.title}
                            </p>
                        </div>
                    ))}
                </div>
                </div>
            </div>

        </div>

        <div className="h-32"></div>
      </div>
    </div>
  );
}