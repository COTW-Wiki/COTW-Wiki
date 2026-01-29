import Card from '../../components/Card';
import { maps } from '../../data/maps';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './Reserves.css';
import WorldMap from '../../components/WorldMap';
// Note: AnimalTableByReleaseDate image import is no longer needed but kept to avoid breaking existing refs if any
import AnimalTableByReleaseDate from '../../assets/AnimalReleaseDate.png';

// --- Asset imports for page-scoped HuntableAnimals component ---
import class1Icon from '../../assets/Class1Icon.webp';
import class2Icon from '../../assets/Class2Icon.webp';
import class3Icon from '../../assets/Class3Icon.webp';
import class4Icon from '../../assets/Class4Icon.webp';
import class5Icon from '../../assets/Class5Icon.webp';
import class6Icon from '../../assets/Class6Icon.webp';
import class7Icon from '../../assets/Class7Icon.webp';
import class8Icon from '../../assets/Class8Icon.webp';
import class9Icon from '../../assets/Class9Icon.webp';
import canadaGooseIcon from '../../assets/CanadaGooseIcon.webp';
import greylagGooseIcon from '../../assets/GreylagGooseIcon.webp';
import magpieGooseIcon from '../../assets/MagpieGoose_frame.webp';
import tundraBeanGooseIcon from '../../assets/TundraBeanGooseIcon.webp';
import snowGooseIcon from '../../assets/SnowGooseIcon.webp';
import eurasianWigeonIcon from '../../assets/EurasianWigeonIcon.webp';
import goldeneyeIcon from '../../assets/GoldeneyeIcon.webp';
import greenWingTealIcon from '../../assets/GreenWingTealIcon.webp';
import woodDuckIcon from '../../assets/WoodDuckIcon.webp';
import harlequinDuckIcon from '../../assets/HarlequinDuckIcon.webp';
import cinnamonTealIcon from '../../assets/CinnamonTealIcon.webp';
import mallardIcon from '../../assets/MallardIcon.webp';
import tuftedDuckIcon from '../../assets/TuftedDuckIcon.webp';
import ferruginousDuckIcon from '../../assets/FerruginousDuckIcon.webp';
import gadwallIcon from '../../assets/GadwallIcon.webp';
import eurasianTealIcon from '../../assets/EurasianTealIcon.webp';
import northernPintailIcon from '../../assets/NorthernPintailIcon.webp';
import blackGrouseIcon from '../../assets/BlackGrouseIcon.webp';
import hazelGrouseIcon from '../../assets/HazelGrouseIcon.webp';
import duskyGrouseIcon from '../../assets/DuskyGrouseIcon.webp';
import bobwhiteQuailIcon from '../../assets/BobwhiteQuailIcon.webp';
import stubbleQuailIcon from '../../assets/StubbleQuail_frame.webp';
import rockPtarmiganIcon from '../../assets/RockPtarmiganIcon.webp';
import willowPtarmiganIcon from '../../assets/WillowPtarmiganIcon.webp';
import easternWildTurkeyIcon from '../../assets/EasternWildTurkeyIcon.webp';
import merriamTurkeyIcon from '../../assets/MerriamTurkeyIcon.webp';
import rioGrandeTurkeyIcon from '../../assets/RioGrandeTurkeyIcon.webp';
import ringNeckedPheasantIcon from '../../assets/Ring-NeckedPheasantIcon.webp';
import westernCapercaillieIcon from '../../assets/WesternCapercaillieIcon.webp';
import antelopeJackrabbitIcon from '../../assets/AntelopeJackrabbitIcon.webp';
import easternCottontailIcon from '../../assets/EasternCottontailRabbitIcon.webp';
import europeanHareIcon from '../../assets/EuropeanHareIcon.webp';
import europeanRabbitIcon from '../../assets/EuropeanRabbitIcon.webp';
import mountainHareIcon from '../../assets/MountainHareIcon.webp';
import scrubHareIcon from '../../assets/ScrubHareIcon.webp';
import whiteTailedJackrabbitIcon from '../../assets/White-tailedJackrabbitIcon.webp';
import woollyHareIcon from '../../assets/WoollyHareIcon.webp';
import northernRedMuntjacIcon from '../../assets/NorthernRedMuntjacIcon.webp';
import siberianMuskDeerIcon from '../../assets/SiberianMuskDeerIcon.webp';
import raccoonDogIcon from '../../assets/RaccoonDogIcon.webp';
import coyoteIcon from '../../assets/CoyoteIcon.webp';
import sideStripedJackalIcon from '../../assets/Side-stripedJackalIcon.webp';
import grayFoxIcon from '../../assets/GrayFoxIcon.webp';
import redFoxIcon from '../../assets/RedFoxIcon.webp';
import tibetanFoxIcon from '../../assets/TibetanFoxIcon.webp';
import commonRaccoonIcon from '../../assets/CommonRaccoonIcon.webp';
import northAmericanBeaverIcon from '../../assets/NorthAmericanBeaverIcon.webp';
import bobcatIcon from '../../assets/BobcatIcon.webp';
import mexicanBobcatIcon from '../../assets/MexicanBobcatIcon.webp';
import axisDeerIcon from '../../assets/AxisDeerIcon.webp';
import hogDeerIcon from '../../assets/HogDeer_frame.webp';
import roeDeerIcon from '../../assets/RoeDeerIcon.webp';
import blackbuckIcon from '../../assets/BlackbuckIcon.webp';
import springbokIcon from '../../assets/SpringbokIcon.webp';
import pronghornIcon from '../../assets/PronghornIcon.webp';
import feralGoatIcon from '../../assets/FeralGoatIcon.webp';
import chamoisIcon from '../../assets/ChamoisIcon.webp';
import eurasianLynxIcon from '../../assets/EurasianLynxIcon.webp';
import collaredPeccaryIcon from '../../assets/CollaredPeccaryIcon.webp';
import blacktailDeerIcon from '../../assets/BlacktailDeerIcon.webp';
import whitetailDeerIcon from '../../assets/WhitetailDeerIcon.webp';
import fallowDeerIcon from '../../assets/FallowDeerIcon.webp';
import sikaDeerIcon from '../../assets/SikaDeerIcon.webp';
import lesserKuduIcon from '../../assets/LesserKuduIcon.webp';
import mountainGoatIcon from '../../assets/MountainGoatIcon.webp';
import beceiteIbexIcon from '../../assets/BeceiteIbexIcon.webp';
import rondaIbexIcon from '../../assets/RondaIbexIcon.webp';
import gredosIbexIcon from '../../assets/GredosIbexIcon.webp';
import southeasternSpanishIbexIcon from '../../assets/SoutheasternSpanishIbexIcon.webp';
import iberianMouflonIcon from '../../assets/IberianMouflonIcon.webp';
import blueSheepIcon from '../../assets/BlueSheepIcon.webp';
import tahrIcon from '../../assets/TahrIcon.webp';
import snowLeopardIcon from '../../assets/SnowLeopardIcon.webp';
import warthogIcon from '../../assets/WarthogIcon.webp';
import easternGrayKangarooIcon from '../../assets/Kangaroo_frame.webp';
import javanRusaIcon from '../../assets/JavanRusa_frame.webp';
import muleDeerIcon from '../../assets/MuleDeerIcon.webp';
import desertBighornSheepIcon from '../../assets/DesertBighornSheepIcon.webp';
import rockyMountainBighornSheepIcon from '../../assets/RockyMountainBighornSheepIcon.webp';
import mountainLionIcon from '../../assets/MountainLionIcon.webp';
import pumaIcon from '../../assets/PumaIcon.webp';
import wildBoarIcon from '../../assets/WildBoarIcon.webp';
import feralPigIcon from '../../assets/FeralPigIcon.webp';
import wildHogIcon from '../../assets/WildHogIcon.webp';
import sambarIcon from '../../assets/Sambar_frame.webp';
import rockyMountainElkIcon from '../../assets/RockyMountainElkIcon.webp';
import rooseveltElkIcon from '../../assets/RooseveltElkIcon.webp';
import manitobanElkIcon from '../../assets/ManitobanElkIcon.webp';
import blackBearIcon from '../../assets/BlackBearIcon.webp';
import eurasianBrownBearIcon from '../../assets/EurasianBrownBearIcon.webp';
import americanAlligatorIcon from '../../assets/AmericanAlligatorIcon.webp';
import redDeerIcon from '../../assets/RedDeerIcon.webp';
import mountainReindeerIcon from '../../assets/MountainReindeerIcon.webp';
import grantCaribouIcon from '../../assets/GrantCaribouIcon.webp';
import woodlandCaribouIcon from '../../assets/WoodlandCaribouIcon.webp';
import blueWildebeestIcon from '../../assets/BlueWildebeestIcon.webp';
import gemsbokIcon from '../../assets/GemsbokIcon.webp';
import barasinghaIcon from '../../assets/BarasinghaIcon.webp';
import nilgaiIcon from '../../assets/NilgaiIcon.webp';
import grayWolfIcon from '../../assets/GrayWolfIcon.webp';
import iberianWolfIcon from '../../assets/IberianWolfIcon.webp';
import mooseIcon from '../../assets/MooseIcon.webp';
import grizzlyBearIcon from '../../assets/GrizzlyBearIcon.webp';
import saltwaterCrocodileIcon from '../../assets/Crocodile_frame.webp';
import bantengIcon from '../../assets/Banteng_frame.webp';
import capeBuffaloIcon from '../../assets/CapeBuffaloIcon.webp';
import europeanBisonIcon from '../../assets/EuropeanBisonIcon.webp';
import plainsBisonIcon from '../../assets/PlainsBisonIcon.webp';
import woodBisonIcon from '../../assets/WoodBisonIcon.webp';
import waterBuffaloIcon from '../../assets/WaterBuffaloIcon.webp';
import wildYakIcon from '../../assets/WildYakIcon.webp';
import lionIcon from '../../assets/LionIcon.webp';
import bengalTigerIcon from '../../assets/BengalTigerIcon.webp';

// --- NEW COMPONENT: Animals By Release Date Table ---
const AnimalsByReleaseDate = () => {
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
  
    // Mapped strictly to your provided imports structure (Class X folder structure)
    const animalPathMap = {
      // Class 1
      "Canada Goose": "/animals/CanadaGoose",
      "Greylag Goose": "/animals/GreylagGoose",
      "Magpie Goose": "/animals/MagpieGoose",
      "Tundra Bean Goose": "/animals/TundraBeanGoose",
      "Snow Goose": "/animals/SnowGoose",
      "Eurasian Wigeon": "/animals/EurasianWigeon",
      "Goldeneye": "/animals/Goldeneye",
      "Green Winged Teal": "/animals/GreenWingedTeal",
      "Wood Duck": "/animals/WoodDuck",
      "Harlequin Duck": "/animals/HarlequinDuck",
      "Ferruginous Duck": "/animals/FerruginousDuck",
      "Cinnamon Teal": "/animals/CinnamonTeal",
      "Tufted Duck": "/animals/TuftedDuck",
      "Mallard": "/animals/Mallard",
      "Gadwall": "/animals/Gadwall",
      "Eurasian Teal": "/animals/EurasianTeal",
      "Northern Pintail": "/animals/NorthernPintail",
      "Hazel Grouse": "/animals/HazelGrouse",
      "Dusky Grouse": "/animals/DuskyGrouse",
      "Black Grouse": "/animals/BlackGrouse",
      "Bobwhite Quail": "/animals/BobwhiteQuail",
      "Stubble Quail": "/animals/StubbleQuail",
      "Rock Ptarmigan": "/animals/RockPtarmigan",
      "Western Capercaillie": "/animals/WesternCapercaillie",
      "Red Grouse": "/animals/RedGrouse",
      "Willow Ptarmigan": "/animals/WillowPtarmigan",
      "Eastern Wild Turkey": "/animals/EasternWildTurkey",
      "Merriam Turkey": "/animals/MerriamTurkey",
      "Eurasian Woodcock": "/animals/EurasianWoodcock",
      "Ring-Necked Pheasant": "/animals/RingNeckedPheasant",
      "Rio Grande Turkey": "/animals/RioGrandeTurkey",
      "Eastern Cottontail Rabbit": "/animals/EasternCottontailRabbit",
      "Antelope Jackrabbit": "/animals/AntelopeJackrabbit",
      "European Hare": "/animals/EuropeanHare",
      "European Rabbit": "/animals/EuropeanRabbit",
      "Mountain Hare": "/animals/MountainHare",
      "Scrub Hare": "/animals/ScrubHare",
      "White-tailed Jackrabbit": "/animals/WhiteTailedJackrabbit",
      "Woolly Hare": "/animals/WoolyHare",
      "American Mink": "/animals/AmericanMink",
      "Eurasian Pine Marten": "/animals/EurasianPineMarten",
  
      // Class 2
      "Northern Red Muntjac": "/animals/NorthernRedMuntjac",
      "Raccoon Dog": "/animals/RaccoonDog",
      "Siberian Musk Deer": "/animals/SibereanMuskDeer",
      "Coyote": "/animals/Coyote",
      "Side-Striped Jackal": "/animals/SideStripedJackal",
      "Gray Fox": "/animals/GrayFox",
      "Red Fox": "/animals/RedFox",
      "Tibetan Fox": "/animals/TibetanFox",
      "Common Raccoon": "/animals/CommonRaccoon",
      "European Badger": "/animals/EuropeanBadger",
      "Bobcat": "/animals/Bobcat",
      "Mexican Bobcat": "/animals/MexicanBobcat",
      "North American Beaver": "/animals/NorthAmericanBeaver",
  
      // Class 3
      "Axis Deer": "/animals/AxisDeer",
      "Hog Deer": "/animals/HogDeer",
      "Roe Deer": "/animals/RoeDeer",
      "Blackbuck": "/animals/Blackbuck",
      "Springbok": "/animals/Springbok",
      "Pronghorn": "/animals/Pronghorn",
      "Feral Goat": "/animals/FeralGoat",
      "Chamois": "/animals/Chamois",
      "Eurasian Lynx": "/animals/EurasianLynx",
      "Collared Peccary": "/animals/CollaredPeccary",
  
      // Class 4
      "Tahr": "/animals/Tahr",
      "Snow Leopard": "/animals/SnowLeopard",
      "Eastern Gray Kangaroo": "/animals/EasternGrayKangaroo",
      "Blacktail Deer": "/animals/BlacktailDeer",
      "Whitetail Deer": "/animals/WhitetailDeer",
      "Fallow Deer": "/animals/FallowDeer",
      "Blue Sheep": "/animals/BlueSheep",
      "Sika Deer": "/animals/SikaDeer",
      "Lesser Kudu": "/animals/LesserKudu",
      "Mountain Goat": "/animals/MountainGoat",
      "Beceite Ibex": "/animals/BeceiteIbex",
      "Gredos Ibex": "/animals/GredosIbex",
      "Ronda Ibex": "/animals/RondaIbex",
      "S.E.S. Ibex": "/animals/SoutheasternSpanishIbex", 
      "Iberian Mouflon": "/animals/IberianMouflon",
      "Warthog": "/animals/Warthog",
  
      // Class 5
      "Javan Rusa": "/animals/JavanRusa",
      "Wild Boar": "/animals/WildBoar",
      "Feral Pig": "/animals/FeralPig",
      "Wild Hog": "/animals/WildHog",
      "Mule Deer": "/animals/MuleDeer",
      "Desert Bighorn Sheep": "/animals/DesertBighornSheep",
      "Bighorn Sheep": "/animals/RockyMountainBighornSheep", 
      "Mountain Lion": "/animals/MountainLion",
      "Puma": "/animals/Puma",
  
      // Class 6
      "Red Deer": "/animals/RedDeer",
      "Mountain Reindeer": "/animals/MountainReindeer",
      "Grant Caribou": "/animals/GrantCaribou",
      "Woodland Caribou": "/animals/WoodlandCaribou",
      "Blue Wildebeest": "/animals/BlueWildebeest",
      "Gemsbok": "/animals/Gemsbok",
      "Barasingha": "/animals/Barasingha",
      "Nilgai": "/animals/Nilgai",
      "Gray Wolf": "/animals/GrayWolf",
      "Iberian Wolf": "/animals/IberianWolf",
  
      // Class 7
      "Sambar": "/animals/Sambar",
      "Rocky Mt. Elk": "/animals/RockyMountainElk",
      "Roosevelt Elk": "/animals/RooseveltElk",
      "Manitoban Elk": "/animals/ManitobanElk",
      "Black Bear": "/animals/BlackBear",
      "Eurasian Brown Bear": "/animals/EurasianBrownBear",
      "Brown Bear": "/animals/EurasianBrownBear", 
      "American Alligator": "/animals/AmericanAlligator",
  
      // Class 8
      "Moose": "/animals/Moose",
      "Grizzly Bear": "/animals/GrizzlyBear",
      "Salt. Crocodile": "/animals/SaltwaterCrocodile", 
      
      // Class 9
      "Banteng": "/animals/Banteng",
      "Bengal Tiger": "/animals/BengalTiger",
      "Plains Bison": "/animals/PlainsBison",
      "European Bison": "/animals/EuropeanBison", 
      "Cape Buffalo": "/animals/CapeBuffalo",
      "Water Buffalo": "/animals/WaterBuffalo",
      "Lion": "/animals/Lion", 
      "Wood Bison": "/animals/WoodBison",
      "Wild Yak": "/animals/WildYak"
    };
  
    const getLink = (name) => animalPathMap[name] || "#";
  
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
      {
        reserve: "Layton Lake",
        animals: [
          { name: "Coyote", color: colors.base },
          { name: "Blacktail Deer", color: colors.base },
          { name: "Whitetail Deer", color: colors.base },
          { name: "Black Bear", color: colors.base },
          { name: "Moose", color: colors.base },
          { name: "Roosevelt Elk", color: colors.base },
          { name: "White-tailed Jackrabbit", color: colors.goose }, 
          { name: "Mallard", color: colors.goose },
          { name: "Merriam Turkey", color: colors.silver }, 
        ]
      },
      {
        reserve: "Medved-Taiga",
        animals: [
          { name: "Wild Boar", color: colors.base },
          { name: "Moose", color: colors.base },
          { name: "Siberian Musk Deer", color: colors.medved },
          { name: "Eurasian Lynx", color: colors.medved },
          { name: "Mountain Reindeer", color: colors.medved },
          { name: "Brown Bear", color: colors.medved },
          { name: "Western Capercaillie", color: colors.revontuli }, 
          { name: "Gray Wolf", color: colors.yukon },
        ]
      },
      {
        reserve: "Vurhonga",
        animals: [
          { name: "Scrub Hare", color: colors.vurhonga },
          { name: "Side-Striped Jackal", color: colors.vurhonga },
          { name: "Springbok", color: colors.vurhonga },
          { name: "Lesser Kudu", color: colors.vurhonga },
          { name: "Warthog", color: colors.vurhonga },
          { name: "Blue Wildebeest", color: colors.vurhonga },
          { name: "Cape Buffalo", color: colors.vurhonga },
          { name: "Gemsbok", color: colors.vurhonga },
          { name: "Lion", color: colors.parque }, 
          { name: "Eurasian Wigeon", color: colors.revontuli },
        ]
      },
      {
        reserve: "P. Fernando",
        animals: [
          { name: "Red Deer", color: colors.base },
          { name: "Cinnamon Teal", color: colors.parque },
          { name: "Blackbuck", color: colors.parque },
          { name: "Axis Deer", color: colors.parque },
          { name: "Puma", color: colors.parque },
          { name: "Mule Deer", color: colors.parque },
          { name: "Water Buffalo", color: colors.parque },
          { name: "Collared Peccary", color: colors.rancho },
        ]
      },
      {
        reserve: "Yukon Valley",
        animals: [
          { name: "Red Fox", color: colors.base },
          { name: "Moose", color: colors.base },
          { name: "Harlequin Duck", color: colors.yukon },
          { name: "Gray Wolf", color: colors.yukon },
          { name: "Grant Caribou", color: colors.yukon },
          { name: "Grizzly Bear", color: colors.yukon },
          { name: "Plains Bison", color: colors.yukon },
          { name: "Canada Goose", color: colors.goose },
        ]
      },
      {
        reserve: "Cuatro Colinas",
        animals: [
          { name: "Roe Deer", color: colors.base },
          { name: "Wild Boar", color: colors.base },
          { name: "Red Deer", color: colors.base },
          { name: "European Hare", color: colors.cuatro },
          { name: "S.E.S. Ibex", color: colors.cuatro },
          { name: "Gredos Ibex", color: colors.cuatro },
          { name: "Ronda Ibex", color: colors.cuatro },
          { name: "Beceite Ibex", color: colors.cuatro },
          { name: "Iberian Mouflon", color: colors.cuatro },
          { name: "Iberian Wolf", color: colors.cuatro },
          { name: "Ring-Necked Pheasant", color: colors.rancho },
        ]
      },
      {
        reserve: "Silver Ridge P.",
        animals: [
          { name: "Black Bear", color: colors.base },
          { name: "Mule Deer", color: colors.parque }, 
          { name: "Plains Bison", color: colors.yukon },
          { name: "Mountain Lion", color: colors.silver },
          { name: "Merriam Turkey", color: colors.silver },
          { name: "Pronghorn", color: colors.silver },
          { name: "Bighorn Sheep", color: colors.silver },
          { name: "Mountain Goat", color: colors.silver },
          { name: "Rocky Mt. Elk", color: colors.silver },
        ]
      },
      {
        reserve: "Te Awaroa",
        animals: [
          { name: "Fallow Deer", color: colors.base },
          { name: "Red Deer", color: colors.base },
          { name: "Merriam Turkey", color: colors.silver },
          { name: "Chamois", color: colors.teawaroa },
          { name: "Feral Pig", color: colors.teawaroa },
          { name: "Feral Goat", color: colors.teawaroa },
          { name: "Sika Deer", color: colors.teawaroa },
          { name: "Tahr", color: colors.teawaroa },
          { name: "Mallard", color: colors.goose },
        ]
      },
      {
        reserve: "R. del Arroyo",
        animals: [
          { name: "Coyote", color: colors.base },
          { name: "Whitetail Deer", color: colors.base },
          { name: "Mule Deer", color: colors.parque },
          { name: "Bighorn Sheep", color: colors.silver },
          { name: "Rio Grande Turkey", color: colors.rancho },
          { name: "Antelope Jackrabbit", color: colors.rancho },
          { name: "Ring-Necked Pheasant", color: colors.rancho },
          { name: "Mexican Bobcat", color: colors.rancho },
          { name: "Collared Peccary", color: colors.rancho },
          { name: "Pronghorn", color: colors.silver },
        ]
      },
      {
        reserve: "Mississippi A.P.",
        animals: [
          { name: "Whitetail Deer", color: colors.base },
          { name: "Black Bear", color: colors.base },
          { name: "Feral Pig", color: colors.teawaroa },
          { name: "Eastern Cottontail Rabbit", color: colors.mississippi },
          { name: "Eastern Wild Turkey", color: colors.mississippi },
          { name: "Common Raccoon", color: colors.mississippi },
          { name: "Bobwhite Quail", color: colors.mississippi },
          { name: "Gray Fox", color: colors.mississippi },
          { name: "American Alligator", color: colors.mississippi },
          { name: "Green Winged Teal", color: colors.emerald }, 
        ]
      },
      {
        reserve: "Revontuli C.",
        animals: [
          { name: "Whitetail Deer", color: colors.base },
          { name: "Moose", color: colors.base },
          { name: "Eurasian Lynx", color: colors.medved },
          { name: "Brown Bear", color: colors.medved },
          { name: "Canada Goose", color: colors.goose },
          { name: "Mallard", color: colors.goose },
          { name: "Eurasian Wigeon", color: colors.revontuli },
          { name: "Eurasian Teal", color: colors.revontuli },
          { name: "Goldeneye", color: colors.revontuli },
          { name: "Tufted Duck", color: colors.revontuli },
          { name: "Greylag Goose", color: colors.revontuli },
          { name: "Tundra Bean Goose", color: colors.revontuli },
          { name: "Black Grouse", color: colors.revontuli },
          { name: "Hazel Grouse", color: colors.revontuli },
          { name: "Western Capercaillie", color: colors.revontuli },
          { name: "Rock Ptarmigan", color: colors.revontuli },
          { name: "Willow Ptarmigan", color: colors.revontuli },
          { name: "Mountain Hare", color: colors.revontuli },
          { name: "Raccoon Dog", color: colors.revontuli },
        ]
      },
      {
        reserve: "N.E. Mountains",
        animals: [
          { name: "Red Fox", color: colors.base },
          { name: "Coyote", color: colors.base },
          { name: "Whitetail Deer", color: colors.base },
          { name: "Black Bear", color: colors.base },
          { name: "Moose", color: colors.base },
          { name: "Mallard", color: colors.goose },
          { name: "Ring-Necked Pheasant", color: colors.rancho },
          { name: "Bobwhite Quail", color: colors.mississippi },
          { name: "Eastern Wild Turkey", color: colors.mississippi },
          { name: "Eastern Cottontail Rabbit", color: colors.mississippi },
          { name: "Gray Fox", color: colors.mississippi },
          { name: "Common Raccoon", color: colors.mississippi },
          { name: "Goldeneye", color: colors.revontuli },
          { name: "Green Winged Teal", color: colors.emerald },
          { name: "Bobcat", color: colors.newengland },
        ]
      },
      {
        reserve: "Emerald Coast",
        animals: [
          { name: "Red Fox", color: colors.base },
          { name: "Fallow Deer", color: colors.base },
          { name: "Red Deer", color: colors.base },
          { name: "Sambar", color: colors.emerald }, 
          { name: "Feral Goat", color: colors.teawaroa },
          { name: "Feral Pig", color: colors.teawaroa },
          { name: "Magpie Goose", color: colors.emerald },
          { name: "Stubble Quail", color: colors.emerald },
          { name: "Hog Deer", color: colors.emerald },
          { name: "Eastern Gray Kangaroo", color: colors.emerald },
          { name: "Javan Rusa", color: colors.emerald },
          { name: "Salt. Crocodile", color: colors.emerald },
          { name: "Banteng", color: colors.emerald },
        ]
      },
      {
        reserve: "Sundarpatan",
        animals: [
          { name: "Blackbuck", color: colors.parque },
          { name: "Water Buffalo", color: colors.parque },
          { name: "Greylag Goose", color: colors.revontuli },
          { name: "Woolly Hare", color: colors.sundarpatan },
          { name: "Northern Red Muntjac", color: colors.sundarpatan },
          { name: "Tibetan Fox", color: colors.sundarpatan },
          { name: "Blue Sheep", color: colors.sundarpatan },
          { name: "Snow Leopard", color: colors.sundarpatan },
          { name: "Tahr", color: colors.teawaroa }, 
          { name: "Barasingha", color: colors.sundarpatan },
          { name: "Nilgai", color: colors.sundarpatan },
          { name: "Bengal Tiger", color: colors.sundarpatan },
          { name: "Wild Yak", color: colors.sundarpatan },
        ]
      },
      {
        reserve: "Salzwiesen Park",
        animals: [
          { name: "Red Fox", color: colors.base },
          { name: "European Rabbit", color: colors.base },
          { name: "Mallard", color: colors.goose },
          { name: "Ring-Necked Pheasant", color: colors.rancho },
          { name: "Common Raccoon", color: colors.mississippi },
          { name: "Eurasian Wigeon", color: colors.revontuli },
          { name: "Eurasian Teal", color: colors.revontuli },
          { name: "Goldeneye", color: colors.revontuli },
          { name: "Tufted Duck", color: colors.revontuli },
          { name: "Greylag Goose", color: colors.revontuli },
          { name: "Tundra Bean Goose", color: colors.revontuli },
          { name: "Black Grouse", color: colors.revontuli },
          { name: "Raccoon Dog", color: colors.revontuli },
          { name: "Ferruginous Duck", color: colors.salzwiesen },
          { name: "Gadwall", color: colors.salzwiesen },
        ]
      },
      {
        reserve: "Askiy Ridge",
        animals: [
          { name: "Whitetail Deer", color: colors.base },
          { name: "Black Bear", color: colors.base },
          { name: "Moose", color: colors.base },
          { name: "Canada Goose", color: colors.goose },
          { name: "Mallard", color: colors.goose },
          { name: "Mule Deer", color: colors.parque },
          { name: "Gray Wolf", color: colors.yukon },
          { name: "Pronghorn", color: colors.silver },
          { name: "Bighorn Sheep", color: colors.silver },
          { name: "Mountain Goat", color: colors.silver },
          { name: "Ring-Necked Pheasant", color: colors.rancho },
          { name: "Dusky Grouse", color: colors.askiy },
          { name: "Northern Pintail", color: colors.askiy },
          { name: "Snow Goose", color: colors.askiy },
          { name: "Wood Duck", color: colors.askiy },
          { name: "North American Beaver", color: colors.askiy },
          { name: "Woodland Caribou", color: colors.askiy },
          { name: "Manitoban Elk", color: colors.askiy },
          { name: "Wood Bison", color: colors.askiy },
        ]
      }
    ];
  
    const styles = {
      container: {
        backgroundColor: '#0b1a26',
        color: '#dbe4eb',
        fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        padding: '20px',
        overflowX: 'auto',
        paddingBottom: '60px', 
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
        width: '135px', 
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
        height: '35px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        lineHeight: '1.1',
      },
      cell: {
        padding: '3px 4px',
        fontSize: '0.7rem',
        color: '#000',
        borderBottom: '1px solid #555',
        cursor: 'pointer',
        textDecoration: 'none',
        display: 'block',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        fontWeight: '500',
      },
        timelineContainer: {
          marginTop: '30px',
          display: 'flex',
          flexWrap: 'nowrap',
          gap: '10px',
          justifyContent: 'flex-start',
          padding: '8px 20px',
          overflowX: 'auto'
        },
        timelineItem: {
          fontSize: '0.8rem',
          padding: '6px 10px',
          color: '#000',
          transform: 'none',
          marginRight: '0',
          marginBottom: '0',
          whiteSpace: 'nowrap',
          fontWeight: '700',
          border: '1px solid rgba(0,0,0,0.15)',
          borderRadius: '4px',
          boxShadow: '0 1px 2px rgba(0,0,0,0.08)'
        }
    };
  
    return (
      <div style={styles.container}>
        <h2 style={styles.header}>
          Animals by release date (table) 
          <span style={styles.linkIcon}></span>
        </h2>
        
        <p style={styles.instruction}>
          Click on the names to get directed to the animal/reserve page:
        </p>
  
        <div style={styles.tableWrapper}>
          {tableData.map((col, idx) => (
            <div key={idx} style={styles.column}>
              <div style={styles.colHeader}>
                {col.reserve}
              </div>
              
              {col.animals.map((animal, aIdx) => (
                <Link 
                  key={aIdx} 
                  to={getLink(animal.name)} 
                  style={{
                    ...styles.cell, 
                    backgroundColor: animal.color
                  }}
                  title={animal.name} 
                >
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

const Reserves = () => {

  // --- DATA SOURCES ---

  const baseGameReserves = [
    "Hirschfelden Hunting Reserve",
    "Layton Lake District"
  ];

  const dlcReserves = [
    "Medved-Taiga National Park",
    "Vurhonga Savanna",
    "Parque Fernando",
    "Yukon Valley",
    "Cuatro Colinas Game Reserve",
    "Silver Ridge Peaks",
    "Te Awaroa National Park",
    "Rancho del Arroyo",
    "Mississippi Acres Preserve",
    "Revontuli Coast",
    "New England Mountains",
    "Emerald Coast",
    "Sundarpatan",
    "Salzwiesen Park",
    "Askiy Ridge Hunting Preserve",
    "Tòrr nan Sithean"
  ];

  // --- STYLES OBJECT (Copied and adapted from CapeBuffalo) ---
  const styles = {
    container: {
      backgroundColor: '#0b1a26',
      color: '#dbe4eb',
      fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      padding: '40px',
      minHeight: '100vh',
      lineHeight: '1.6',
    },
    innerWrapper: {
      maxWidth: '1200px',
      margin: '0 auto',
    },
    mainHeader: {
      fontSize: '2.5rem',
      fontWeight: '400',
      borderBottom: '1px solid #3a5a75',
      paddingBottom: '15px',
      marginBottom: '20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    mainColumn: {
      flex: 1,
      maxWidth: '900px', // Restricted width for better readability on text-heavy pages
    },
    link: {
      color: '#6fb2e6',
      textDecoration: 'none',
      cursor: 'pointer',
      fontWeight: '500',
    },
    // Adapted H2 for list headers
    sectionHeader: {
        fontSize: '1.2rem',
        color: '#dbe4eb',
        marginTop: '25px',
        marginBottom: '10px',
        fontWeight: 'bold',
    },
    list: {
        listStyleType: 'disc',
        paddingLeft: '25px',
        marginBottom: '20px',
    },
    listItem: {
        marginBottom: '5px',
        color: '#6fb2e6', // Using the link color for list items as they appear to be links in the screenshot
        cursor: 'pointer',
    },
    paragraph: {
        marginBottom: '20px',
        color: '#dbe4eb',
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.innerWrapper}>
        
        {/* PAGE HEADER */}
        <div style={styles.mainHeader}>
          <span>Reserves</span>
        </div>

        {/* --- MAIN CONTENT --- */}
        <main style={styles.mainColumn}>

          {/* Intro Text */}
          <p style={styles.paragraph}>
            <strong>Reserves</strong> are game maps/worlds which are available for players to hunt on. Including <span style={styles.link}>DLCs</span>, there are currently 18 reserves to play on.
          </p>

          {/* Base Game List */}
          <div style={styles.sectionHeader}>Base game:</div>
          <ul style={styles.list}>
            {baseGameReserves.map((reserve, index) => (
                <li key={index} style={styles.listItem}>{reserve}</li>
            ))}
          </ul>

          {/* DLC List */}
          <div style={styles.sectionHeader}>DLCs:</div>
          <ul style={styles.list}>
            {dlcReserves.map((reserve, index) => (
                <li key={index} style={styles.listItem}>{reserve}</li>
            ))}
          </ul>

          {/* Multiplayer Info */}
          <p style={styles.paragraph}>
            While Layton Lake District and Hirschfelden Hunting Reserve are available with the base game, the other reserves have to be bought as DLCs. However, these reserves can be played even if a player does not own the DLC if they join a <span style={styles.link}>Multiplayer</span> session in which the host owns the DLC.
          </p>

          {/* Animals Info */}
          <p style={styles.paragraph}>
            Reserves are located all around the world and each reserve has its own group of huntable <span style={styles.link}>animals</span>. Accordingly, the animals in a reserve reflect the wildlife that lives in the real-life counterpart of the reserve.
          </p>

        </main>
      </div>
    </div>
  );
};

const Map = () => {
  return (
    <div className="map-container">
      {/* Inline CSS for hover effect on logos: enlarge + yellow tint */}
      <style>{` 
        .map-container img[class*="logo-"]{ 
          transition: transform 180ms ease, filter 180ms ease, box-shadow 180ms ease; 
          transform-origin: center center; 
          cursor: pointer; 
          border: none; 
          outline: none; 
        }
        .map-container a:focus, .map-container a:focus img{ outline: none; }
        .map-container img[class*="logo-"]:hover{ 
          transform: scale(1.25); 
          /* Tint the image strongly toward yellow (rgb(255,210,0)) and remove any glow/border */
          filter: sepia(1) saturate(10000%) hue-rotate(10deg) brightness(1);
          z-index: 999; 
          box-shadow: none; /* remove glow */
          border: none;
          outline: none;
        }
      `}</style>
      <img className="map-image" src={worldMap} alt="World Map" />
      <Link to="/maps/layton-lake" className="logo" style={{ '--mask': `url("${reserveLogo}")` }} data-tooltip="Layton Lake District">
        <img src={reserveLogo} alt="Layton Lake Logo" />
      </Link>
      <Link to="/maps/hirschfelden" className="logo-hirsch" style={{ '--mask': `url("${hirschLogo}")` }} data-tooltip="Hirschfelden Hunting Reserve">
        <img src={hirschLogo} alt="Hirschfelden Logo" />
      </Link>
      <Link to="/maps/yukon-valley" className="logo-yukon" style={{ '--mask': `url("${yukonLogo}")` }} data-tooltip="Yukon Valley">
        <img src={yukonLogo} alt="Yukon Valley Logo" />
      </Link>
      <Link to="/maps/cuatro-colinas" className="logo-cuatro" style={{ '--mask': `url("${cuatroLogo}")` }} data-tooltip="Cuatro Colinas Game Reserve">
        <img src={cuatroLogo} alt="Cuatro Colinas Logo" />
      </Link>
      <Link to="/maps/silver-ridge-peaks" className="logo-silver" style={{ '--mask': `url("${silverLogo}")` }} data-tooltip="Silver Ridge Peaks">
        <img src={silverLogo} alt="Silver Ridge Peaks Logo" />
      </Link>
      <Link to="/maps/te-awaroa" className="logo-teawaroa" style={{ '--mask': `url("${teAwaroaLogo}")` }} data-tooltip="Te Awaroa National Park">
        <img src={teAwaroaLogo} alt="Te Awaroa Logo" />
      </Link>
      <Link to="/maps/rancho-del-arroyo" className="logo-rancho" style={{ '--mask': `url("${ranchoLogo}")` }} data-tooltip="Rancho del Arroyo">
        <img src={ranchoLogo} alt="Rancho Del Arroyo Logo" />
      </Link>
      <Link to="/maps/askiy-ridge" className="logo-askiy" style={{ '--mask': `url("${askiyLogo}")` }} data-tooltip="Askiy Ridge Hunting Preserve">
        <img src={askiyLogo} alt="Askiy Ridge Logo" />
      </Link>
      <Link to="/maps/mississippi-acres" className="logo-mississippi" style={{ '--mask': `url("${mississippiLogo}")` }} data-tooltip="Mississippi Acres Preserve">
        <img src={mississippiLogo} alt="Mississippi Acres Logo" />
      </Link>
      <Link to="/maps/salzwiesen-park" className="logo-salzwiesen" style={{ '--mask': `url("${salzwiesenLogo}")` }} data-tooltip="Salzwiesen Park">
        <img src={salzwiesenLogo} alt="Salzwiesen Logo" />
      </Link>
      <Link to="/maps/revontuli-coast" className="logo-revontuli" style={{ '--mask': `url("${revontuliLogo}")` }} data-tooltip="Revontuli Coast">
        <img src={revontuliLogo} alt="Revontuli Coast Logo" />
      </Link>
      <Link to="/maps/emerald-coast" className="logo-emerald" style={{ '--mask': `url("${emeraldLogo}")` }} data-tooltip="Emerald Coast">
        <img src={emeraldLogo} alt="Emerald Coast Logo" />
      </Link>
      <Link to="/maps/new-england-mountains" className="logo-newengland" style={{ '--mask': `url("${newEnglandLogo}")` }} data-tooltip="New England Mountains">
        <img src={newEnglandLogo} alt="New England Logo" />
      </Link>
      <Link to="/maps/parque-fernando" className="logo-parque" style={{ '--mask': `url("${parqueFernandoLogo}")` }} data-tooltip="Parque Fernando">
        <img src={parqueFernandoLogo} alt="Parque Fernando Logo" />
      </Link>
      <Link to="/maps/gemini-generated" className="logo-gemini" style={{ '--mask': `url("${geminiLogo}")` }} data-tooltip="Gemini Generated Image">
        <img src={geminiLogo} alt="Gemini Generated Logo" />
      </Link>
      <Link to="/maps/sundarpatan" className="logo-sundar" style={{ '--mask': `url("${sundarLogo}")` }} data-tooltip="Sundarpatan">
        <img src={sundarLogo} alt="Sundarpatan Logo" />
      </Link>
      <Link to="/maps/medved-taiga" className="logo-medved" style={{ '--mask': `url("${medvedLogo}")` }} data-tooltip="Medved-Taiga National Park">
        <img src={medvedLogo} alt="Medved Taiga Logo" />
      </Link>
    </div>
  );
}

// --- Page-scoped TableOfContents (inlined for this page) ---
const TableOfContents = () => {
  const [isVisible, setIsVisible] = useState(true);

  const tocItems = [
    { id: 'map', label: '1. Map' },
    {
      id: 'huntable-animals',
      label: '2. Huntable Animals',
      subItems: [
        { id: 'hirschfelden', label: '2.1. Hirschfelden' },
        { id: 'layton', label: '2.2. Layton Lake' },
        { id: 'medved', label: '2.3. Medved-Taiga' },
        { id: 'vurhonga', label: '2.4. Vurhonga Savanna' },
        { id: 'parque', label: '2.5. Parque Fernando' },
        { id: 'yukon', label: '2.6. Yukon Valley' },
        { id: 'cuatro', label: '2.7. Cuatro Colinas' },
        { id: 'silver', label: '2.8. Silver Ridge Peaks' },
        { id: 'te-awaroa', label: '2.9. Te Awaroa' },
        { id: 'rancho', label: '2.10. Rancho del Arroyo' },
        { id: 'mississippi', label: '2.11. Mississippi Acres' },
        { id: 'revontuli', label: '2.12. Revontuli Coast' },
        { id: 'new-england', label: '2.13. New England Mountains' },
        { id: 'emerald', label: '2.14. Emerald Coast' },
        { id: 'sundarpatan', label: '2.15. Sundarpatan' },
        { id: 'salzwiesen', label: '2.16. Salzwiesen Park' },
        { id: 'askiy', label: '2.17. Askiy Ridge' }
      ]
    },
    { id: 'release-date', label: '3. Animals by release date (table)' }
  ];

  const styles = {
    tocContainer: {
      border: '1px solid #3a5a75',
      backgroundColor: '#0f2e48',
      display: 'inline-block',
      padding: '10px',
      borderRadius: '4px',
      minWidth: '300px',
      maxWidth: '100%',
      marginBottom: '30px',
      color: '#dbe4eb',
      fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      fontSize: '0.95rem',
    },
    header: {
      fontWeight: 'bold',
      borderBottom: isVisible ? '1px solid #3a5a75' : 'none',
      marginBottom: isVisible ? '10px' : '0',
      paddingBottom: isVisible ? '5px' : '0',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    toggleLink: {
      color: '#6fb2e6',
      fontSize: '0.85rem',
      cursor: 'pointer',
      marginLeft: '10px',
      textDecoration: 'none',
      userSelect: 'none',
    },
    list: { listStyleType: 'none', padding: '0', margin: '0' },
    listItem: { marginBottom: '4px' },
    subList: { listStyleType: 'none', paddingLeft: '20px', margin: '4px 0 8px 0' },
    link: { color: '#dbe4eb', textDecoration: 'none', cursor: 'pointer' },
    linkHover: { textDecoration: 'underline', color: '#6fb2e6' }
  };

  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={styles.tocContainer}>
      <div style={styles.header}>
        <span>🔢 Contents</span>
        <span style={styles.toggleLink} onClick={() => setIsVisible(!isVisible)}>[{isVisible ? 'hide' : 'show'}]</span>
      </div>
      {isVisible && (
        <ul style={styles.list}>
          {tocItems.map((item) => (
            <li key={item.id} style={styles.listItem}>
              <a href={`#${item.id}`} onClick={(e) => handleScroll(e, item.id)} style={styles.link}
                onMouseEnter={(e) => e.target.style.color = styles.linkHover.color}
                onMouseLeave={(e) => e.target.style.color = styles.link.color}
              >{item.label}</a>
              {item.subItems && (
                <ul style={styles.subList}>
                  {item.subItems.map((sub) => (
                    <li key={sub.id} style={styles.listItem}>
                      <a href={`#${sub.id}`} onClick={(e) => handleScroll(e, sub.id)} style={styles.link}
                        onMouseEnter={(e) => e.target.style.color = styles.linkHover.color}
                        onMouseLeave={(e) => e.target.style.color = styles.link.color}
                      >{sub.label}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// --- Page-scoped HuntableAnimals (inlined for this page) ---
const HuntableAnimals = () => {
  const reserves  = [
    {
      id: 'hirschfelden',
      name: "Hirschfelden Animals (9 total, 1 unique, 4 great ones)",
      animals: {
        1: [
          { name: "Canada Goose", icon: canadaGooseIcon },
          { name: "Ring-Necked Pheasant", icon: ringNeckedPheasantIcon },
          { name: "European Rabbit", icon: europeanRabbitIcon }
        ],
        2: [{ name: "Red Fox", icon: redFoxIcon }],
        3: [{ name: "Roe Deer", icon: roeDeerIcon }],
        4: [{ name: "Fallow Deer", icon: fallowDeerIcon }],
        5: [{ name: "Wild Boar", icon: wildBoarIcon }],
        6: [{ name: "Red Deer", icon: redDeerIcon }],
        7: [],
        8: [],
        9: [{ name: "European Bison", icon: europeanBisonIcon }]
      }
    },
    {
      id: 'layton',
      name: "Layton Lake Animals (9 total, 3 unique, 3 great ones)",
      animals: {
        1: [
          { name: "Mallard", icon: mallardIcon },
          { name: "Merriam Turkey", icon: merriamTurkeyIcon },
          { name: "White-tailed Jackrabbit", icon: whiteTailedJackrabbitIcon }
        ],
        2: [{ name: "Coyote", icon: coyoteIcon }],
        3: [],
        4: [
          { name: "Blacktail Deer", icon: blacktailDeerIcon },
          { name: "Whitetail Deer", icon: whitetailDeerIcon }
        ],
        5: [],
        6: [],
        7: [{ name: "Black Bear", icon: blackBearIcon },
          { name: "Roosevelt Elk", icon: rooseveltElkIcon },
        ],
        8: [
          { name: "Moose", icon: mooseIcon }
        ],
        9: []
      }
    },
    {
      id: 'medved',
      name: "Medved-Taiga Animals (8 total, 2 unique, 3 great one)",
      animals: {
        1: [{ name: "Western Capercaillie", icon: westernCapercaillieIcon }],
        2: [{ name: "Siberian Musk Deer", icon: siberianMuskDeerIcon }],
        3: [{ name: "Eurasian Lynx", icon: eurasianLynxIcon }],
        4: [],
        5: [{ name: "Wild Boar", icon: wildBoarIcon }],
        6: [
          { name: "Gray Wolf", icon: grayWolfIcon },
          { name: "Mountain Reindeer", icon: mountainReindeerIcon }
        ],
        7: [{ name: "Eurasian Brown Bear", icon: eurasianBrownBearIcon }],
        8: [{ name: "Moose", icon: mooseIcon }],
        9: []
      }
    },
    {
      id: 'vurhonga',
      name: "Vurhonga Savanna Animals (10 total, 9 unique)",
      animals: {
        1: [
            { name: "Eurasian Wigeon", icon: eurasianWigeonIcon },
            { name: "Scrub Hare", icon: scrubHareIcon }
        ],
        2: [{ name: "Side-Striped Jackal", icon: sideStripedJackalIcon }],
        3: [{ name: "Springbok", icon: springbokIcon }],
        4: [
            { name: "Warthog", icon: warthogIcon },
            { name: "Lesser Kudu", icon: lesserKuduIcon }
        ],
        5: [],
        6: [{ name: "Blue Wildebeest", icon: blueWildebeestIcon },
            { name: "Gemsbok", icon: gemsbokIcon }
        ],
        7: [],
        8: [],
        9: [
            { name: "Cape Buffalo", icon: capeBuffaloIcon },
            { name: "Lion", icon: lionIcon }
        ]
      }
    }
    ,
    {
      id: 'parque',
      name: "Parque Fernando Animals (8 total, 2 unique, 2 great ones)",
      animals: {
        1: [
          { name: "Cinnamon Teal", icon: cinnamonTealIcon }
        ],
        2: [],
        3: [{ name: "Collared Peccary", icon: collaredPeccaryIcon },
            { name: "Axis Deer", icon: axisDeerIcon },
            { name: "Blackbuck", icon: blackbuckIcon }
        ],
        4: [],
        5: [{ name: "Puma", icon: pumaIcon },
            { name: "Mule Deer", icon: muleDeerIcon }
         ],
        6: [{ name: "Red Deer", icon: redDeerIcon }],
        7: [],
        8: [],
        9: [{ name: "Water Buffalo", icon: waterBuffaloIcon }]
      }
    },
    {
      id: 'yukon',
      name: "Yukon Valley Animals (8 total, 3 unique, 3 great ones)",
      animals: {
        1: [ { name: "Canada Goose", icon: canadaGooseIcon },
             { name: "Harlequin Duck", icon: harlequinDuckIcon }
        ],
        2: [ { name: "Red Fox", icon: redFoxIcon } ],
        3: [],
        4: [],
        5: [],
        6: [ { name: "Gray Wolf", icon: grayWolfIcon },
             { name: "Grant Caribou", icon: grantCaribouIcon }
         ],
        7: [],
        8: [ { name: "Moose", icon: mooseIcon },
             { name: "Grizzly Bear", icon: grizzlyBearIcon }
         ],
        9: [ { name: "Plains Bison", icon: plainsBisonIcon } ]
      }
    },
    {
      id: 'cuatro',
      name: "Cuatro Colinas Animals (11 total, 7 unique, 2 great ones)",
      animals: {
        1: [ { name: "European Hare", icon: europeanHareIcon },
             { name: "Ring-Necked Pheasant", icon: ringNeckedPheasantIcon }
         ],
        2: [],
        3: [ { name: "Roe Deer", icon: roeDeerIcon },],
        4: [ { name: "Ronda Ibex", icon: rondaIbexIcon },
             { name: "Beceite Ibex", icon: beceiteIbexIcon },
             { name: "Gredos Ibex", icon: gredosIbexIcon },
             { name: "Southeastern Spanish Ibex", icon: southeasternSpanishIbexIcon },
             { name: "Iberian Mouflon", icon: iberianMouflonIcon }
         ],
        5: [{ name: "Wild Boar", icon: wildBoarIcon } ],
        6: [{ name: "Red Deer", icon: redDeerIcon },
            { name: "Iberian Wolf", icon: iberianWolfIcon }
        ],
        7: [],
        8: [],
        9: []
      }
    },
    {
      id: 'silver',
      name: "Silver Ridge Peaks Animals (9 total, 2 unique, 2 great ones)",
      animals: {
        1: [{ name: "Merriam Turkey", icon: merriamTurkeyIcon }],
        2: [],
        3: [{ name: "Pronghorn", icon: pronghornIcon }],
        4: [{ name: "Mountain Goat", icon: mountainGoatIcon }],
        5: [{ name: "Rocky Mountain Bighorn Sheep", icon: rockyMountainBighornSheepIcon },
            { name: "Mountain Lion", icon: mountainLionIcon },
            { name: "Mule Deer", icon: muleDeerIcon }
        ],
        6: [],
        7: [ { name: "Black Bear", icon: blackBearIcon },
             { name: "Rocky Mountain Elk", icon: rockyMountainElkIcon }
         ],
        8: [],
        9: [ { name: "Plains Bison", icon: plainsBisonIcon } ]
      }
    },
    {
      id: 'te-awaroa',
      name: "Te Awaroa Animals (10 total, 2 unique, 3 great ones)",
      animals: {
        1: [{ name: "Merriam Turkey", icon: merriamTurkeyIcon },
            { name: "Mallard", icon: mallardIcon },
            { name: "European Rabbit", icon: europeanRabbitIcon }
        ],
        2: [],
        3: [{ name: "Chamois", icon: chamoisIcon },
            { name: "Feral Goat", icon: feralGoatIcon }
        ],
        4: [{ name: "Sika Deer", icon: sikaDeerIcon },
            { name: "Fallow Deer", icon: fallowDeerIcon },
            { name: "Tahr", icon: tahrIcon }
        ],
        5: [{ name: "Feral Pig", icon: feralPigIcon }],
        6: [{ name: "Red Deer", icon: redDeerIcon }],
        7: [],
        8: [],
        9: []
      }
    }
    ,
    {
      id: 'rancho',
      name: "Rancho del Arroyo Animals (10 total, 4 unique, 3 great one)",
      animals: {
        1: [
            { name: "Rio Grande Turkey", icon: rioGrandeTurkeyIcon },
            { name: "Ring-Necked Pheasant", icon: ringNeckedPheasantIcon },
            { name: "Antelope Jackrabbit", icon: antelopeJackrabbitIcon }
        ],
        2: [
            { name: "Coyote", icon: coyoteIcon },
            { name: "Mexican Bobcat", icon: mexicanBobcatIcon }
        ],
        3: [{ name: "Collared Peccary", icon: collaredPeccaryIcon },
            { name: "Pronghorn", icon: pronghornIcon }
        ],
        4: [
            { name: "Whitetail Deer", icon: whitetailDeerIcon }
        ],
        5: [{ name: "Desert Bighorn Sheep", icon: desertBighornSheepIcon },
            { name: "Mule Deer", icon: muleDeerIcon },
        ],
        6: [],
        7: [],
        8: [],
        9: []
      }
    },
    {
      id: 'mississippi',
      name: "Mississippi Acres Animals (10 total, 2 unique, 2 great ones)",
      animals: {
        1: [
            { name: "Bobwhite Quail", icon: bobwhiteQuailIcon },
            { name: "Eastern Wild Turkey", icon: easternWildTurkeyIcon },
            { name: "Green Winged Teal", icon: greenWingTealIcon },
            { name: "Eastern Cottontail Rabbit", icon: easternCottontailIcon }
        ],
        2: [
            { name: "Gray Fox", icon: grayFoxIcon },
            { name: "Common Raccoon", icon: commonRaccoonIcon }
        ],
        3: [],
        4: [{ name: "Whitetail Deer", icon: whitetailDeerIcon }],
        5: [{ name: "Wild Hog", icon: wildHogIcon }],
        6: [],
        7: [{ name: "Black Bear", icon: blackBearIcon },
            { name: "American Alligator", icon: americanAlligatorIcon }
        ],
        8: [],
        9: []
      }
    },
    {
      id: 'revontuli',
      name: "Revontuli Coast (19 total, 4 unique, 2 great ones)",
      animals: {
        1: [
            { name: "Eurasian Teal", icon: eurasianTealIcon },
            { name: "Eurasian Wigeon", icon: eurasianWigeonIcon },
            { name: "Goldeneye", icon: goldeneyeIcon },
            { name: "Mallard", icon: mallardIcon },
            { name: "Tufted Duck", icon: tuftedDuckIcon },
            { name: "Canada Goose", icon: canadaGooseIcon },
            { name: "Tundra Bean Goose", icon: tundraBeanGooseIcon },
            { name: "Greylag Goose", icon: greylagGooseIcon },
            { name: "Black Grouse", icon: blackGrouseIcon },
            { name: "Hazel Grouse", icon: hazelGrouseIcon },
            { name: "Western Capercaillie", icon: westernCapercaillieIcon },
            { name: "Rock Ptarmigan", icon: rockPtarmiganIcon },
            { name: "Willow Ptarmigan", icon: willowPtarmiganIcon },
            { name: "Mountain Hare", icon: mountainHareIcon }
        ],
        2: [{ name: "Raccoon Dog", icon: raccoonDogIcon }],
        3: [{ name: "Eurasian Lynx", icon: eurasianLynxIcon }],
        4: [{ name: "Whitetail Deer", icon: whitetailDeerIcon }],
        5: [],
        6: [],
        7: [{ name: "Eurasian Brown Bear", icon: eurasianBrownBearIcon }],
        8: [{ name: "Moose", icon: mooseIcon }],
        9: []
      }
    },
    {
      id: 'new-england',
      name: "New England Mountains (15 total, 1 unique, 5 great ones)",
      animals: {
        1: [
            { name: "Ring-Necked Pheasant", icon: ringNeckedPheasantIcon },
            { name: "Bobwhite Quail", icon: bobwhiteQuailIcon },
            { name: "Eastern Wild Turkey", icon: easternWildTurkeyIcon },
            { name: "Goldeneye", icon: goldeneyeIcon },
            { name: "Mallard", icon: mallardIcon },
            { name: "Green Winged Teal", icon: greenWingTealIcon },
            { name: "Eastern Cottontail Rabbit", icon: easternCottontailIcon }
        ],
        2: [
            { name: "Red Fox", icon: redFoxIcon },
            { name: "Gray Fox", icon: grayFoxIcon },
            { name: "Coyote", icon: coyoteIcon },
            { name: "Common Raccoon", icon: commonRaccoonIcon },
            { name: "Bobcat", icon: bobcatIcon }
        ],
        3: [],
        4: [{ name: "Whitetail Deer", icon: whitetailDeerIcon }],
        5: [],
        6: [],
        7: [{ name: "Black Bear", icon: blackBearIcon }],
        8: [{ name: "Moose", icon: mooseIcon }],
        9: []
      }
    },
    {
      id: 'emerald',
      name: "Emerald Coast (14 total, 8 unique, 3 great ones)",
      animals: {
        1: [
            { name: "Magpie Goose", icon: magpieGooseIcon },
            { name: "Stubble Quail", icon: stubbleQuailIcon }
        ],
        2: [{ name: "Red Fox", icon: redFoxIcon }],
        3: [
            { name: "Hog Deer", icon: hogDeerIcon },
            { name: "Axis Deer", icon: axisDeerIcon },
            { name: "Feral Goat", icon: feralGoatIcon }
        ],
        4: [
            { name: "Eastern Gray Kangaroo", icon: easternGrayKangarooIcon },
            { name: "Fallow Deer", icon: fallowDeerIcon }
        ],
        5: [
            { name: "Feral Pig", icon: feralPigIcon },
            { name: "Javan Rusa", icon: javanRusaIcon }
        ],
        6: [{ name: "Red Deer", icon: redDeerIcon }],
        7: [{ name: "Sambar", icon: sambarIcon }],
        8: [{ name: "Saltwater Crocodile", icon: saltwaterCrocodileIcon }],
        9: [{ name: "Banteng", icon: bantengIcon }]
      }
    },
    {
      id: 'sundarpatan',
      name: "Sundarpatan (13 total, 9 unique, 1 great one)",
      animals: {
        1: [
            { name: "Greylag Goose", icon: greylagGooseIcon },
            { name: "Woolly Hare", icon: woollyHareIcon }
        ],
        2: [
            { name: "Northern Red Muntjac", icon: northernRedMuntjacIcon },
            { name: "Tibetan Fox", icon: tibetanFoxIcon }
        ],
        3: [{ name: "Blackbuck", icon: blackbuckIcon }],
        4: [
            { name: "Blue Sheep", icon: blueSheepIcon },
            { name: "Snow Leopard", icon: snowLeopardIcon },
            { name: "Tahr", icon: tahrIcon }
        ],
        5: [],
        6: [
            { name: "Barasingha", icon: barasinghaIcon },
            { name: "Nilgai", icon: nilgaiIcon }
        ],
        7: [],
        8: [],
        9: [
            { name: "Bengal Tiger", icon: bengalTigerIcon },
            { name: "Water Buffalo", icon: waterBuffaloIcon },
            { name: "Wild Yak", icon: wildYakIcon }
        ]
      }
    }
    ,
    {
      id: 'salzwiesen',
      name: "Salzwiesen Park (15 total, 2 unique, 2 great ones)",
      animals: {
        1: [
            { name: "Eurasian Teal", icon: eurasianTealIcon },
            { name: "Eurasian Wigeon", icon: eurasianWigeonIcon },
            { name: "Ferruginous Duck", icon: ferruginousDuckIcon },
            { name: "Gadwall", icon: gadwallIcon },
            { name: "Goldeneye", icon: goldeneyeIcon },
            { name: "Mallard", icon: mallardIcon },
            { name: "Tufted Duck", icon: tuftedDuckIcon },
            { name: "Tundra Bean Goose", icon: tundraBeanGooseIcon },
            { name: "Greylag Goose", icon: greylagGooseIcon },
            { name: "European Rabbit", icon: europeanRabbitIcon },
            { name: "Ring-Necked Pheasant", icon: ringNeckedPheasantIcon },
            { name: "Black Grouse", icon: blackGrouseIcon }
        ],
        2: [
            { name: "Common Raccoon", icon: commonRaccoonIcon },
            { name: "Raccoon Dog", icon: raccoonDogIcon },
            { name: "Red Fox", icon: redFoxIcon }
        ],
        3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: []
      }
    },
    {
      id: 'askiy',
      name: "Askiy Ridge Hunting Preserve (19 total, 8 unique, 5 great ones)",
      animals: {
        1: [
            { name: "Ring-Necked Pheasant", icon: ringNeckedPheasantIcon },
            { name: "Canada Goose", icon: canadaGooseIcon },
            { name: "Snow Goose", icon: snowGooseIcon },
            { name: "Dusky Grouse", icon: duskyGrouseIcon },
            { name: "Mallard", icon: mallardIcon },
            { name: "Wood Duck", icon: woodDuckIcon },
            { name: "Northern Pintail", icon: northernPintailIcon }
        ],
        2: [{ name: "North American Beaver", icon: northAmericanBeaverIcon }],
        3: [{ name: "Pronghorn", icon: pronghornIcon }],
        4: [
            { name: "Mountain Goat", icon: mountainGoatIcon },
            { name: "Whitetail Deer", icon: whitetailDeerIcon }
        ],
        5: [{ name: "Rocky Mountain Bighorn Sheep", icon: rockyMountainBighornSheepIcon },
            { name: "Mule Deer", icon: muleDeerIcon }
        ],
        6: [{ name: "Gray Wolf", icon: grayWolfIcon },
            { name: "Woodland Caribou", icon: woodlandCaribouIcon }
        ],
        7: [{ name: "Black Bear", icon: blackBearIcon },
            { name: "Manitoban Elk", icon: manitobanElkIcon }
        ],
        8: [
            { name: "Moose", icon: mooseIcon },
        ],
        9: [{ name: "Wood Bison", icon: woodBisonIcon }]
      }
    }
  ];

  const classes = [1,2,3,4,5,6,7,8,9];
  const classIcons = [class1Icon,class2Icon,class3Icon,class4Icon,class5Icon,class6Icon,class7Icon,class8Icon,class9Icon];

  // Helper: build animal page path from display name (removes spaces/punctuation)
  const toPath = (name) => {
    const slug = name.replace(/[^a-zA-Z0-9]/g, '');
    return `/animals/${slug}`;
  };

  const styles = {
    container: { backgroundColor: '#0b1a26', color: '#dbe4eb', fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif', padding: '20px', minHeight: '100vh' },
    mainHeader: { fontSize: '2rem', fontWeight: 'bold', marginBottom: '30px', borderBottom: '1px solid #3a5a75', paddingBottom: '10px' },
    reserveWrapper: { marginBottom: '60px' },
    sectionHeader: { fontSize: '1.2rem', fontWeight: 'bold', color: '#dbe4eb', marginBottom: '10px', display: 'flex', alignItems: 'center' },
    linkIcon: { color: '#6fb2e6', marginLeft: '10px', fontSize: '0.8rem', cursor: 'pointer', textDecoration: 'none' },
    tableContainer: { display: 'grid', gridTemplateColumns: '100px repeat(9, 1fr)', backgroundColor: '#0f2e48', borderRadius: '4px', overflow: 'hidden', border: '1px solid #1f405a' },
    headerRow: { display: 'contents' },
    headerCell: { backgroundColor: '#16334a', padding: '10px 5px', textAlign: 'center', borderBottom: '1px solid #3a5a75', borderRight: '1px solid #1f405a', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end', color: '#fff', fontWeight: 'bold' },
    labelCell: { gridColumn: '1 / 2', backgroundColor: '#16334a', padding: '10px', display: 'flex', alignItems: 'center', fontWeight: 'bold', borderRight: '1px solid #3a5a75', color: '#dbe4eb' },
    classHeaderIcon: { width: '32px', height: 'auto', marginBottom: '5px', filter: 'brightness(0) invert(1)' },
    gridRow: { display: 'contents' },
    rowLabel: { backgroundColor: '#16334a', padding: '20px 10px', display: 'flex', alignItems: 'center', fontWeight: 'bold', borderRight: '1px solid #3a5a75', borderTop: '1px solid #1f405a' },
    gridCell: { padding: '10px 5px', borderRight: '1px solid #1f405a', borderTop: '1px solid #1f405a', display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '120px', position: 'relative' },
    emptyMarker: { color: '#88a0b8', fontSize: '1.2rem', marginTop: '40px', fontStyle: 'italic', opacity: 0.5 },
    animalCard: { display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '15px', textAlign: 'center', width: '100%' },
    hexIcon: { width: '64px', height: '64px', objectFit: 'contain', marginBottom: '8px', filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.5))' },
    animalName: { fontSize: '0.8rem', lineHeight: '1.2', maxWidth: '90px' }
  };

  return (
    <div style={styles.container}>
      <h1 id="huntable-animals" style={styles.mainHeader}>Huntable Animals</h1>
      {reserves.map((reserve, index) => (
        <div id={reserve.id} key={index} style={styles.reserveWrapper}>
          <div style={styles.sectionHeader}>
            {reserve.name}
            <span style={styles.linkIcon}></span>
          </div>
          <div style={styles.tableContainer}>
            <div style={styles.headerRow}>
                <div style={{...styles.headerCell, borderBottom: 'none', backgroundColor: '#16334a', width: '100%'}}>Class</div>
                {classes.map((cls, i) => (
                    <div key={cls} style={styles.headerCell}>
                        <img src={classIcons[i]} alt={`Class ${cls}`} style={styles.classHeaderIcon} />
                        <span>{cls}</span>
                    </div>
                ))}
            </div>
            <div style={styles.gridRow}>
                <div style={styles.rowLabel}>Animals</div>
                {classes.map((cls) => {
                    const animalList = reserve.animals[cls] || [];
                    return (
                        <div key={cls} style={styles.gridCell}>
                            {animalList.length > 0 ? (
                                animalList.map((animal, idx) => (
                                  <Link key={idx} to={toPath(animal.name)} style={{...styles.animalCard, textDecoration: 'none', color: 'inherit'}}>
                                    <img src={animal.icon} alt={animal.name} style={styles.hexIcon} />
                                    <span style={styles.animalName}>{animal.name}</span>
                                  </Link>
                                ))
                            ) : (
                                <span style={styles.emptyMarker}>//</span>
                            )}
                        </div>
                    );
                })}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default function MapsList() {
  return ( 
    <div>

      <section className="mt-8">
        <Reserves />
          <div style={{ margin: '20px 0', maxWidth: '1200px', marginLeft: 'auto', marginRight: 'auto', color: '#dbe4eb' }}>
            <h2 style={{ fontSize: '1.5rem', margin: '0 0 8px 0' }}>Map</h2>
            <p style={{ margin: 0 }}>Click on the reserve icon on the interactive map to get directed to the wiki page of the respective reserve:</p>
          </div>
          <div id="map" className="map-toc-gap">
            <WorldMap />
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-start', marginLeft: '160px' }}>
            <TableOfContents />
          </div>
          <div style={{ marginTop: '24px' }}>
            <HuntableAnimals />
          </div>
          <div id="release-date" style={{ marginTop: '40px' }}>
             <AnimalsByReleaseDate />
          </div>
      </section>
    </div>
  );
}