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

const AnimalsByReleaseDate = () => {
  const styles = {
    container: {
      backgroundColor: '#0b1a26',
      color: '#dbe4eb',
      fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      padding: '20px',
      overflowX: 'auto',
    },
    header: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginBottom: '10px',
      borderBottom: '1px solid #3a5a75',
      paddingBottom: '5px',
      display: 'flex',
      alignItems: 'center',
    },
    linkIcon: {
      fontSize: '0.8rem',
      color: '#6fb2e6',
      marginLeft: '8px',
      cursor: 'pointer',
    },
    instruction: {
      marginBottom: '15px',
      fontSize: '1rem',
    },
    tableWrapper: {
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: '#a3b4c4',
      border: '1px solid #000',
      minWidth: 'min-content',
    },
    column: {
      display: 'flex',
      flexDirection: 'column',
      width: '130px',
      flexShrink: 0,
      borderRight: '1px solid #000',
    },
    colHeader: {
      backgroundColor: '#ccc',
      color: '#000',
      fontSize: '0.75rem',
      fontWeight: 'bold',
      padding: '4px',
      textAlign: 'center',
      borderBottom: '1px solid #000',
      height: '30px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      lineHeight: '1.1',
    },
    cell: {
      padding: '2px 4px',
      fontSize: '0.75rem',
      color: '#000',
      borderBottom: '1px solid #555',
      cursor: 'pointer',
      textDecoration: 'none',
      display: 'block',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
    timelineContainer: {
        marginTop: '20px',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '5px',
        justifyContent: 'center'
    },
    timelineItem: {
        fontSize: '0.7rem',
        padding: '2px 6px',
        color: '#000',
        borderRadius: '2px',
        transform: 'rotate(-20deg)',
        margin: '0 5px',
        whiteSpace: 'nowrap'
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>
        Animals by release date (table)
        <span style={styles.linkIcon}>🔗</span>
      </h2>

      <p style={styles.instruction}>
        Click on the names to get directed to the animal/reserve page:
      </p>

      <div style={styles.tableWrapper}>
        {tableData.map((col, idx) => (
          <div key={idx} style={styles.column}>
            <div style={styles.colHeader}>{col.reserve}</div>
            {col.animals && col.animals.map((animal, aIdx) => (
              <Link key={aIdx} to={getLink(animal.name)} style={{...styles.cell, backgroundColor: animal.color}} title={animal.name}>
                {animal.name}
              </Link>
            ))}
          </div>
        ))}
      </div>

      <div style={styles.timelineContainer}>
          <span style={{...styles.timelineItem, backgroundColor: colors.base}}>2017-02-16 Initial Release</span>
          <span style={{...styles.timelineItem, backgroundColor: colors.medved}}>2017-10-17 Medved-Taiga DLC</span>
          <span style={{...styles.timelineItem, backgroundColor: colors.goose}}>2018-04-12 Jackrabbit Update</span>
          <span style={{...styles.timelineItem, backgroundColor: colors.vurhonga}}>2018-08-30 Vurhonga DLC</span>
          <span style={{...styles.timelineItem, backgroundColor: colors.parque}}>2018-12-13 Parque Fernando DLC</span>
          <span style={{...styles.timelineItem, backgroundColor: colors.yukon}}>2019-06-25 Yukon Valley DLC</span>
          <span style={{...styles.timelineItem, backgroundColor: colors.cuatro}}>2019-12-10 Cuatro Colinas DLC</span>
          <span style={{...styles.timelineItem, backgroundColor: colors.silver}}>2020-06-23 Silver Ridge Peaks DLC</span>
          <span style={{...styles.timelineItem, backgroundColor: colors.teawaroa}}>2020-12-10 Te Awaroa DLC</span>
          <span style={{...styles.timelineItem, backgroundColor: colors.rancho}}>2021-06-29 Rancho del Arroyo DLC</span>
          <span style={{...styles.timelineItem, backgroundColor: colors.mississippi}}>2021-12-07 Mississippi Acres DLC</span>
          <span style={{...styles.timelineItem, backgroundColor: colors.revontuli}}>2022-06-28 Revontuli Coast DLC</span>
          <span style={{...styles.timelineItem, backgroundColor: colors.newengland}}>2022-12-06 New E. Mountains DLC</span>
          <span style={{...styles.timelineItem, backgroundColor: colors.emerald}}>2023-06-20 Emerald Coast DLC</span>
          <span style={{...styles.timelineItem, backgroundColor: colors.sundarpatan}}>2024-06-18 Sundarpatan DLC</span>
          <span style={{...styles.timelineItem, backgroundColor: colors.salzwiesen}}>2024-12-03 Salzwiesen Park DLC</span>
          <span style={{...styles.timelineItem, backgroundColor: colors.askiy}}>2025-06-17 Askiy Ridge</span>
      </div>

    </div>
  );
};

export default AnimalsByReleaseDate;
