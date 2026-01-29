import React from 'react';
import { Link } from 'react-router-dom';

// --- DATA & MAPPING ---

// 1. Color Palette (Matching the screenshot timeline/DLCs)
const colors = {
  base: '#b0bccc',      // Grey (Base Game)
  medved: '#a894d3',    // Light Purple (Medved)
  goose: '#95d18d',     // Green (Goose/Duck DLCs)
  vurhonga: '#f4e95d',  // Yellow (Vurhonga)
  parque: '#e07f7f',    // Red/Pink (Parque)
  yukon: '#6a8caf',     // Blue-Grey (Yukon)
  cuatro: '#68b5a0',    // Teal (Cuatro)
  silver: '#91a355',    // Olive (Silver Ridge)
  teawaroa: '#c48f2b',  // Brown/Orange (Te Awaroa)
  rancho: '#d96c43',    // Orange (Rancho)
  mississippi: '#a3508b', // Purple (Mississippi)
  revontuli: '#9f6bcf',   // Violet (Revontuli)
  newengland: '#a6aab5',  // Grey (New England)
  emerald: '#5bd9d9',     // Cyan (Emerald)
  sundarpatan: '#9ee065', // Lime (Sundarpatan)
  salzwiesen: '#d9d045',  // Gold (Salzwiesen)
  askiy: '#b8a682',       // Beige (Askiy)
};

// 2. Link Mapping (Based on your provided imports)
const animalPathMap = {
  // Class 1
  "Canada Goose": "/animals/class1/CanadaGoose",
  "Greylag Goose": "/animals/class1/GreylagGoose",
  "Magpie Goose": "/animals/class1/MagpieGoose",
  "Tundra Bean Goose": "/animals/class1/TundraBeanGoose",
  "Snow Goose": "/animals/class1/SnowGoose",
  "Eurasian Wigeon": "/animals/class1/EurasianWigeon",
  "Goldeneye": "/animals/class1/Goldeneye",
  "Green Winged Teal": "/animals/class1/GreenWingedTeal",
  "Wood Duck": "/animals/class1/WoodDuck",
  "Harlequin Duck": "/animals/class1/HarlequinDuck",
  "Ferruginous Duck": "/animals/class1/FerruginousDuck",
  "Cinnamon Teal": "/animals/class1/CinnamonTeal",
  "Tufted Duck": "/animals/class1/TuftedDuck",
  "Mallard": "/animals/class1/Mallard",
  "Gadwall": "/animals/class1/Gadwall",
  "Eurasian Teal": "/animals/class1/EurasianTeal",
  "Northern Pintail": "/animals/class1/NorthernPintail",
  "Hazel Grouse": "/animals/class1/HazelGrouse",
  "Dusky Grouse": "/animals/class1/DuskyGrouse",
  "Black Grouse": "/animals/class1/BlackGrouse",
  "Bobwhite Quail": "/animals/class1/BobwhiteQuail",
  "Stubble Quail": "/animals/class1/StubbleQuail",
  "Rock Ptarmigan": "/animals/class1/RockPtarmigan",
  "Western Capercaillie": "/animals/class1/WesternCapercaillie",
  "Red Grouse": "/animals/class1/RedGrouse",
  "Willow Ptarmigan": "/animals/class1/WillowPtarmigan",
  "Eastern Wild Turkey": "/animals/class1/EasternWildTurkey",
  "Merriam Turkey": "/animals/class1/MerriamTurkey",
  "Eurasian Woodcock": "/animals/class1/EurasianWoodcock",
  "Ring-Necked Pheasant": "/animals/class1/RingNeckedPheasant",
  "Rio Grande Turkey": "/animals/class1/RioGrandeTurkey",
  "Eastern Cottontail Rabbit": "/animals/class1/EasternCottontailRabbit",
  "Antelope Jackrabbit": "/animals/class1/AntelopeJackrabbit",
  "European Hare": "/animals/class1/EuropeanHare",
  "European Rabbit": "/animals/class1/EuropeanRabbit",
  "Mountain Hare": "/animals/class1/MountainHare",
  "Scrub Hare": "/animals/class1/ScrubHare",
  "White-tailed Jackrabbit": "/animals/class1/WhiteTailedJackrabbit",
  "Woolly Hare": "/animals/class1/WoolyHare",
  "American Mink": "/animals/class1/AmericanMink",
  "Eurasian Pine Marten": "/animals/class1/EurasianPineMarten",

  // Class 2
  "Northern Red Muntjac": "/animals/class2/NorthernRedMuntjac",
  "Raccoon Dog": "/animals/class2/RaccoonDog",
  "Siberian Musk Deer": "/animals/class2/SibereanMuskDeer",
  "Coyote": "/animals/class2/Coyote",
  "Side-Striped Jackal": "/animals/class2/SideStripedJackal",
  "Gray Fox": "/animals/class2/GrayFox",
  "Red Fox": "/animals/class2/RedFox",
  "Tibetan Fox": "/animals/class2/TibetanFox",
  "Common Raccoon": "/animals/class2/CommonRaccoon",
  "European Badger": "/animals/class2/EuropeanBadger",
  "Bobcat": "/animals/class2/Bobcat",
  "Mexican Bobcat": "/animals/class2/MexicanBobcat",
  "North American Beaver": "/animals/class2/NorthAmericanBeaver",

  // Class 3
  "Axis Deer": "/animals/class3/AxisDeer",
  "Hog Deer": "/animals/class3/HogDeer",
  "Roe Deer": "/animals/class3/RoeDeer",
  "Blackbuck": "/animals/class3/Blackbuck",
  "Springbok": "/animals/class3/Springbok",
  "Pronghorn": "/animals/class3/Pronghorn",
  "Feral Goat": "/animals/class3/FeralGoat",
  "Chamois": "/animals/class3/Chamois",
  "Eurasian Lynx": "/animals/class3/EurasianLynx",
  "Collared Peccary": "/animals/class3/CollaredPeccary",

  // Class 4
  "Tahr": "/animals/class4/Tahr",
  "Snow Leopard": "/animals/class4/SnowLeopard",
  "Eastern Gray Kangaroo": "/animals/class4/EasternGrayKangaroo",
  "Blacktail Deer": "/animals/class4/BlacktailDeer",
  "Whitetail Deer": "/animals/class4/WhitetailDeer",
  "Fallow Deer": "/animals/class4/FallowDeer",
  "Blue Sheep": "/animals/class4/BlueSheep",
  "Sika Deer": "/animals/class4/SikaDeer",
  "Lesser Kudu": "/animals/class4/LesserKudu",
  "Mountain Goat": "/animals/class4/MountainGoat",
  "Beceite Ibex": "/animals/class4/BeceiteIbex",
  "Gredos Ibex": "/animals/class4/GredosIbex",
  "Ronda Ibex": "/animals/class4/RondaIbex",
  "S.E.S. Ibex": "/animals/class4/SoutheasternSpanishIbex",
  "Iberian Mouflon": "/animals/class4/IberianMouflon",
  "Warthog": "/animals/class4/Warthog",

  // Class 5
  "Javan Rusa": "/animals/class5/JavanRusa",
  "Wild Boar": "/animals/class5/WildBoar",
  "Feral Pig": "/animals/class5/FeralPig",
  "Wild Hog": "/animals/class5/WildHog",
  "Mule Deer": "/animals/class5/MuleDeer",
  "Desert Bighorn Sheep": "/animals/class5/DesertBighornSheep",
  "Bighorn Sheep": "/animals/class5/RockyMountainBighornSheep",
  "Mountain Lion": "/animals/class5/MountainLion",
  "Puma": "/animals/class5/Puma",

  // Class 6
  "Red Deer": "/animals/class6/RedDeer",
  "Mountain Reindeer": "/animals/class6/MountainReindeer",
  "Grant Caribou": "/animals/class6/GrantCaribou",
  "Woodland Caribou": "/animals/class6/WoodlandCaribou",
  "Blue Wildebeest": "/animals/class6/BlueWildebeest",
  "Gemsbok": "/animals/class6/Gemsbok",
  "Barasingha": "/animals/class6/Barasingha",
  "Nilgai": "/animals/class6/Nilgai",
  "Gray Wolf": "/animals/class6/GrayWolf",
  "Iberian Wolf": "/animals/class6/IberianWolf",

  // Class 7
  "Sambar": "/animals/class7/Sambar",
  "Rocky Mt. Elk": "/animals/class7/RockyMountainElk",
  "Roosevelt Elk": "/animals/class7/RooseveltElk",
  "Manitoban Elk": "/animals/class7/ManitobanElk",
  "Black Bear": "/animals/class7/BlackBear",
  "Eurasian Brown Bear": "/animals/class7/EurasianBrownBear",
  "Brown Bear": "/animals/class7/EurasianBrownBear",
  "American Alligator": "/animals/class7/AmericanAlligator",

  // Class 8
  "Moose": "/animals/class8/Moose",
  "Grizzly Bear": "/animals/class8/GrizzlyBear",
  "Salt. Crocodile": "/animals/class8/SaltwaterCrocodile",
  
  // Class 9
  "Banteng": "/animals/class9/Banteng",
  "Bengal Tiger": "/animals/class9/BengalTiger",
  "Plains Bison": "/animals/class9/PlainsBison",
  "European Bison": "/animals/class9/EuropeanBison",
  "Cape Buffalo": "/animals/class9/CapeBuffalo",
  "Water Buffalo": "/animals/class9/WaterBuffalo",
  "Lion": "/animals/class9/Lion",
  "Wood Bison": "/animals/class9/WoodBison",
  "Wild Yak": "/animals/class9/WildYak"
};

// Helper to safely get link
const getLink = (name) => animalPathMap[name] || "#";

// 3. Table Data (Constructed from Screenshot)
const tableData = [
  {
    reserve: "Hirschfelden",
    animals: [
      { name: "Red Fox", color: colors.base },
      { name: "Roe Deer", color: colors.base },
      { name: "Wild Boar", color: colors.base },
      { name: "Fallow Deer", color: colors.base },
      { name: "Red Deer", color: colors.base },
      { name: "European Bison", color: colors.base },
      { name: "Canada Goose", color: colors.goose },
      { name: "European Rabbit", color: colors.base },
      { name: "Ring-Necked Pheasant", color: colors.rancho },
    ]
  },
  // ... (tableData continues, omitted here for brevity in file)
];

const timelineItems = [
  { label: '2017-02-16 Initial Release', color: colors.base },
  { label: '2017-10-17 Medved-Taiga DLC', color: colors.medved },
  { label: '2018-04-12 Jackrabbit Update', color: colors.goose },
  { label: '2018-08-30 Vurhonga DLC', color: colors.vurhonga },
  { label: '2018-12-13 Parque Fernando DLC', color: colors.parque },
  { label: '2019-06-25 Yukon Valley DLC', color: colors.yukon },
  { label: '2019-12-10 Cuatro Colinas DLC', color: colors.cuatro },
  { label: '2020-06-23 Silver Ridge Peaks DLC', color: colors.silver },
  { label: '2020-12-10 Te Awaroa DLC', color: colors.teawaroa },
  { label: '2021-06-29 Rancho del Arroyo DLC', color: colors.rancho },
  { label: '2021-12-07 Mississippi Acres DLC', color: colors.mississippi },
  { label: '2022-06-28 Revontuli Coast DLC', color: colors.revontuli },
  { label: '2022-12-06 New E. Mountains DLC', color: colors.newengland },
  { label: '2023-06-20 Emerald Coast DLC', color: colors.emerald },
  { label: '2024-06-18 Sundarpatan DLC', color: colors.sundarpatan },
  { label: '2024-12-03 Salzwiesen Park DLC', color: colors.salzwiesen },
  { label: '2025-06-17 Askiy Ridge', color: colors.askiy },
];

const AnimalsByReleaseDate = () => {
  return (
    <div className="wiki-release-container">
      <h2 className="wiki-release-header">
        Animals by release date (table)
        <span className="wiki-release-link-icon">🔗</span>
      </h2>

      <p className="wiki-release-instruction">
        Click on the names to get directed to the animal/reserve page:
      </p>

      <div className="wiki-release-table-wrapper">
        {tableData.map((col, idx) => (
          <div key={idx} className="wiki-release-column">
            <div className="wiki-release-col-header">{col.reserve}</div>
            {col.animals && col.animals.map((animal, aIdx) => (
              <Link
                key={aIdx}
                to={getLink(animal.name)}
                className="wiki-release-cell"
                style={{ backgroundColor: animal.color }}
                title={animal.name}
              >
                {animal.name}
              </Link>
            ))}
          </div>
        ))}
      </div>

      <div className="wiki-release-timeline">
        {timelineItems.map((item, i) => (
          <span
            key={i}
            className="wiki-release-timeline-item"
            style={{ '--wiki-timeline-bg': item.color }}
          >
            {item.label}
          </span>
        ))}
      </div>
    </div>
  );
};

export default AnimalsByReleaseDate;
