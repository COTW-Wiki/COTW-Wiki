import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/animalsTableMini.css';
// ... (Imports remain the same)
import class1Icon from '../assets/Class1Icon.webp';
import class2Icon from '../assets/Class2Icon.webp';
import class3Icon from '../assets/Class3Icon.webp';
import class4Icon from '../assets/Class4Icon.webp';
import class5Icon from '../assets/Class5Icon.webp';
import class6Icon from '../assets/Class6Icon.webp';
import class7Icon from '../assets/Class7Icon.webp';
import class8Icon from '../assets/Class8Icon.webp';
import class9Icon from '../assets/Class9Icon.webp';
import canadaGooseIcon from '../assets/CanadaGooseIcon.webp';
import greylagGooseIcon from '../assets/GreylagGooseIcon.webp';
import magpieGooseIcon from '../assets/MagpieGoose_frame.webp';
import tundraBeanGooseIcon from '../assets/TundraBeanGooseIcon.webp';
import snowGooseIcon from '../assets/SnowGooseIcon.webp';
import eurasianWigeonIcon from '../assets/EurasianWigeonIcon.webp';
import goldeneyeIcon from '../assets/GoldeneyeIcon.webp';
import greenWingTealIcon from '../assets/GreenWingTealIcon.webp';
import woodDuckIcon from '../assets/WoodDuckIcon.webp';
import harlequinDuckIcon from '../assets/HarlequinDuckIcon.webp';
import cinnamonTealIcon from '../assets/CinnamonTealIcon.webp';
import mallardIcon from '../assets/MallardIcon.webp';
import tuftedDuckIcon from '../assets/TuftedDuckIcon.webp';
import ferruginousDuckIcon from '../assets/FerruginousDuckIcon.webp';
import gadwallIcon from '../assets/GadwallIcon.webp';
import eurasianTealIcon from '../assets/EurasianTealIcon.webp';
import northernPintailIcon from '../assets/NorthernPintailIcon.webp';
import blackGrouseIcon from '../assets/BlackGrouseIcon.webp';
import hazelGrouseIcon from '../assets/HazelGrouseIcon.webp';
import duskyGrouseIcon from '../assets/DuskyGrouseIcon.webp';
import bobwhiteQuailIcon from '../assets/BobwhiteQuailIcon.webp';
import stubbleQuailIcon from '../assets/StubbleQuail_frame.webp';
import rockPtarmiganIcon from '../assets/RockPtarmiganIcon.webp';
import willowPtarmiganIcon from '../assets/WillowPtarmiganIcon.webp';
import easternWildTurkeyIcon from '../assets/EasternWildTurkeyIcon.webp';
import merriamTurkeyIcon from '../assets/MerriamTurkeyIcon.webp';
import rioGrandeTurkeyIcon from '../assets/RioGrandeTurkeyIcon.webp';
import ringNeckedPheasantIcon from '../assets/Ring-NeckedPheasantIcon.webp';
import westernCapercaillieIcon from '../assets/WesternCapercaillieIcon.webp';
import antelopeJackrabbitIcon from '../assets/AntelopeJackrabbitIcon.webp';
import easternCottontailIcon from '../assets/EasternCottontailRabbitIcon.webp';
import europeanHareIcon from '../assets/EuropeanHareIcon.webp';
import europeanRabbitIcon from '../assets/EuropeanRabbitIcon.webp';
import mountainHareIcon from '../assets/MountainHareIcon.webp';
import scrubHareIcon from '../assets/ScrubHareIcon.webp';
import whiteTailedJackrabbitIcon from '../assets/White-tailedJackrabbitIcon.webp';
import woollyHareIcon from '../assets/WoollyHareIcon.webp';
import northernRedMuntjacIcon from '../assets/NorthernRedMuntjacIcon.webp';
import siberianMuskDeerIcon from '../assets/SiberianMuskDeerIcon.webp';
import raccoonDogIcon from '../assets/RaccoonDogIcon.webp';
import coyoteIcon from '../assets/CoyoteIcon.webp';
import sideStripedJackalIcon from '../assets/Side-stripedJackalIcon.webp';
import grayFoxIcon from '../assets/GrayFoxIcon.webp';
import redFoxIcon from '../assets/RedFoxIcon.webp';
import tibetanFoxIcon from '../assets/TibetanFoxIcon.webp';
import commonRaccoonIcon from '../assets/CommonRaccoonIcon.webp';
import northAmericanBeaverIcon from '../assets/NorthAmericanBeaverIcon.webp';
import bobcatIcon from '../assets/BobcatIcon.webp';
import mexicanBobcatIcon from '../assets/MexicanBobcatIcon.webp';
import axisDeerIcon from '../assets/AxisDeerIcon.webp';
import hogDeerIcon from '../assets/HogDeer_frame.webp';
import roeDeerIcon from '../assets/RoeDeerIcon.webp';
import blackbuckIcon from '../assets/BlackbuckIcon.webp';
import springbokIcon from '../assets/SpringbokIcon.webp';
import pronghornIcon from '../assets/PronghornIcon.webp';
import feralGoatIcon from '../assets/FeralGoatIcon.webp';
import chamoisIcon from '../assets/ChamoisIcon.webp';
import eurasianLynxIcon from '../assets/EurasianLynxIcon.webp';
import collaredPeccaryIcon from '../assets/CollaredPeccaryIcon.webp';
import blacktailDeerIcon from '../assets/BlacktailDeerIcon.webp';
import whitetailDeerIcon from '../assets/WhitetailDeerIcon.webp';
import fallowDeerIcon from '../assets/FallowDeerIcon.webp';
import sikaDeerIcon from '../assets/SikaDeerIcon.webp';
import lesserKuduIcon from '../assets/LesserKuduIcon.webp';
import mountainGoatIcon from '../assets/MountainGoatIcon.webp';
import beceiteIbexIcon from '../assets/BeceiteIbexIcon.webp';
import rondaIbexIcon from '../assets/RondaIbexIcon.webp';
import gredosIbexIcon from '../assets/GredosIbexIcon.webp';
import southeasternSpanishIbexIcon from '../assets/SoutheasternSpanishIbexIcon.webp';
import iberianMouflonIcon from '../assets/IberianMouflonIcon.webp';
import blueSheepIcon from '../assets/BlueSheepIcon.webp';
import tahrIcon from '../assets/TahrIcon.webp';
import snowLeopardIcon from '../assets/SnowLeopardIcon.webp';
import warthogIcon from '../assets/WarthogIcon.webp';
import easternGrayKangarooIcon from '../assets/Kangaroo_frame.webp';
import javanRusaIcon from '../assets/JavanRusa_frame.webp';
import muleDeerIcon from '../assets/MuleDeerIcon.webp';
import desertBighornSheepIcon from '../assets/DesertBighornSheepIcon.webp';
import rockyMountainBighornSheepIcon from '../assets/RockyMountainBighornSheepIcon.webp';
import mountainLionIcon from '../assets/MountainLionIcon.webp';
import pumaIcon from '../assets/PumaIcon.webp';
import wildBoarIcon from '../assets/WildBoarIcon.webp';
import feralPigIcon from '../assets/FeralPigIcon.webp';
import wildHogIcon from '../assets/WildHogIcon.webp';
import sambarIcon from '../assets/Sambar_frame.webp';
import rockyMountainElkIcon from '../assets/RockyMountainElkIcon.webp';
import rooseveltElkIcon from '../assets/RooseveltElkIcon.webp';
import manitobanElkIcon from '../assets/ManitobanElkIcon.webp';
import blackBearIcon from '../assets/BlackBearIcon.webp';
import eurasianBrownBearIcon from '../assets/EurasianBrownBearIcon.webp';
import americanAlligatorIcon from '../assets/AmericanAlligatorIcon.webp';
import redDeerIcon from '../assets/RedDeerIcon.webp';
import mountainReindeerIcon from '../assets/MountainReindeerIcon.webp';
import grantCaribouIcon from '../assets/GrantCaribouIcon.webp';
import woodlandCaribouIcon from '../assets/WoodlandCaribouIcon.webp';
import blueWildebeestIcon from '../assets/BlueWildebeestIcon.webp';
import gemsbokIcon from '../assets/GemsbokIcon.webp';
import barasinghaIcon from '../assets/BarasinghaIcon.webp';
import nilgaiIcon from '../assets/NilgaiIcon.webp';
import grayWolfIcon from '../assets/GrayWolfIcon.webp';
import iberianWolfIcon from '../assets/IberianWolfIcon.webp';
import mooseIcon from '../assets/MooseIcon.webp';
import grizzlyBearIcon from '../assets/GrizzlyBearIcon.webp';
import saltwaterCrocodileIcon from '../assets/Crocodile_frame.webp';
import bantengIcon from '../assets/Banteng_frame.webp';
import capeBuffaloIcon from '../assets/CapeBuffaloIcon.webp';
import europeanBisonIcon from '../assets/EuropeanBisonIcon.webp';
import plainsBisonIcon from '../assets/PlainsBisonIcon.webp';
import woodBisonIcon from '../assets/WoodBisonIcon.webp';
import waterBuffaloIcon from '../assets/WaterBuffaloIcon.webp';
import wildYakIcon from '../assets/WildYakIcon.webp';
import lionIcon from '../assets/LionIcon.webp';
import bengalTigerIcon from '../assets/BengalTigerIcon.webp';
import americanMinkIcon from '../assets/AmericanMinkIcon.webp';
import redGrouseIcon from '../assets/RedGrouseIcon.webp';
import europeanBadgerIcon from '../assets/EuropeanBadgerIcon.webp';
import eurasianPineMartenIcon from '../assets/EurasianPineMartenIcon.webp';
import eurasianWoodcockIcon from '../assets/EurasianWoodcockIcon.webp';

const AnimalsTableMini = () => {
  // --- DATA ---
  const [isCollapsed, setIsCollapsed] = useState(false);

  const animalImages = {
    "American Mink": americanMinkIcon,
    "Antelope Jackrabbit": antelopeJackrabbitIcon,
    "Black Grouse": blackGrouseIcon,
    "Bobwhite Quail": bobwhiteQuailIcon,
    "Canada Goose": canadaGooseIcon,
    "Cinnamon Teal": cinnamonTealIcon,
    "Dusky Grouse": duskyGrouseIcon,
    "Eurasian Pine Marten": eurasianPineMartenIcon,
    "Eurasian Teal": eurasianTealIcon,
    "Eurasian Wigeon": eurasianWigeonIcon,
    "Eurasian Woodcock": eurasianWoodcockIcon,
    "Eastern Cottontail Rabbit": easternCottontailIcon,
    "Eastern Wild Turkey": easternWildTurkeyIcon,
    "European Hare": europeanHareIcon,
    "European Rabbit": europeanRabbitIcon,
    "Ferruginous Duck": ferruginousDuckIcon,
    "Gadwall": gadwallIcon,
    "Goldeneye": goldeneyeIcon,
    "Green Winged Teal": greenWingTealIcon,
    "Greylag Goose": greylagGooseIcon,
    "Harlequin Duck": harlequinDuckIcon,
    "Hazel Grouse": hazelGrouseIcon,
    "Magpie Goose": magpieGooseIcon,
    "Mallard": mallardIcon,
    "Merriam Turkey": merriamTurkeyIcon,
    "Mountain Hare": mountainHareIcon,
    "Northern Pintail": northernPintailIcon,
    "Red Grouse": redGrouseIcon,
    "Ring-Necked Pheasant": ringNeckedPheasantIcon,
    "Rio Grande Turkey": rioGrandeTurkeyIcon,
    "Rock Ptarmigan": rockPtarmiganIcon,
    "Scrub Hare": scrubHareIcon,
    "Snow Goose": snowGooseIcon,
    "Stubble Quail": stubbleQuailIcon,
    "Tufted Duck": tuftedDuckIcon,
    "Tundra Bean Goose": tundraBeanGooseIcon,
    "Western Capercaillie": westernCapercaillieIcon,
    "Willow Ptarmigan": willowPtarmiganIcon,
    "White-tailed Jackrabbit": whiteTailedJackrabbitIcon,
    "Wood Duck": woodDuckIcon,
    "Woolly Hare": woollyHareIcon,
    "Bobcat": bobcatIcon,
    "Common Raccoon": commonRaccoonIcon,
    "Coyote": coyoteIcon,
    "European Badger": europeanBadgerIcon,
    "Gray Fox": grayFoxIcon,
    "Mexican Bobcat": mexicanBobcatIcon,
    "Northern Red Muntjac": northernRedMuntjacIcon,
    "North American Beaver": northAmericanBeaverIcon,
    "Raccoon Dog": raccoonDogIcon,
    "Red Fox": redFoxIcon,
    "Siberian Musk Deer": siberianMuskDeerIcon,
    "Side-Striped Jackal": sideStripedJackalIcon,
    "Tibetan Fox": tibetanFoxIcon,
    "Axis Deer": axisDeerIcon,
    "Blackbuck": blackbuckIcon,
    "Chamois": chamoisIcon,
    "Collared Peccary": collaredPeccaryIcon,
    "Eurasian Lynx": eurasianLynxIcon,
    "Feral Goat": feralGoatIcon,
    "Hog Deer": hogDeerIcon,
    "Pronghorn": pronghornIcon,
    "Roe Deer": roeDeerIcon,
    "Springbok": springbokIcon,
    "Beceite Ibex": beceiteIbexIcon,
    "Blacktail Deer": blacktailDeerIcon,
    "Blue Sheep": blueSheepIcon,
    "Eastern Gray Kangaroo": easternGrayKangarooIcon,
    "Fallow Deer": fallowDeerIcon,
    "Gredos Ibex": gredosIbexIcon,
    "Iberian Mouflon": iberianMouflonIcon,
    "Lesser Kudu": lesserKuduIcon,
    "Mountain Goat": mountainGoatIcon,
    "Ronda Ibex": rondaIbexIcon,
    "Sika Deer": sikaDeerIcon,
    "Snow Leopard": snowLeopardIcon,
    "Southeastern Spanish Ibex": southeasternSpanishIbexIcon,
    "Tahr": tahrIcon,
    "Warthog": warthogIcon,
    "Whitetail Deer": whitetailDeerIcon,
    "Desert Bighorn Sheep": desertBighornSheepIcon,
    "Feral Pig": feralPigIcon,
    "Javan Rusa": javanRusaIcon,
    "Mountain Lion": mountainLionIcon,
    "Mule Deer": muleDeerIcon,
    "Puma": pumaIcon,
    "Rocky Mountain Bighorn Sheep": rockyMountainBighornSheepIcon,
    "Wild Boar": wildBoarIcon,
    "Wild Hog": wildHogIcon,
    "Barasingha": barasinghaIcon,
    "Blue Wildebeest": blueWildebeestIcon,
    "Grant Caribou": grantCaribouIcon,
    "Gemsbok": gemsbokIcon,
    "Gray Wolf": grayWolfIcon,
    "Iberian Wolf": iberianWolfIcon,
    "Nilgai": nilgaiIcon,
    "Red Deer": redDeerIcon,
    "Mountain Reindeer": mountainReindeerIcon,
    "Woodland Caribou": woodlandCaribouIcon,
    "American Alligator": americanAlligatorIcon,
    "Manitoban Elk": manitobanElkIcon,
    "Rocky Mountain Elk": rockyMountainElkIcon,
    "Roosevelt Elk": rooseveltElkIcon,
    "Sambar": sambarIcon,
    "Grizzly Bear": grizzlyBearIcon,
    "Moose": mooseIcon,
    "Saltwater Crocodile": saltwaterCrocodileIcon,
    "Banteng": bantengIcon,
    "Bengal Tiger": bengalTigerIcon,
    "Cape Buffalo": capeBuffaloIcon,
    "European Bison": europeanBisonIcon,
    "Lion": lionIcon,
    "Plains Bison": plainsBisonIcon,
    "Water Buffalo": waterBuffaloIcon,
    "Wild Yak": wildYakIcon,
    "Wood Bison": woodBisonIcon
  };

  const animalData = [
    {
      id: 1,
      icon: class1Icon,
      animals: [
        "American Mink", "Antelope Jackrabbit", "Black Grouse", "Bobwhite Quail",
        "Canada Goose", "Cinnamon Teal", "Dusky Grouse", "Eurasian Pine Marten",
        "Eurasian Teal", "Eurasian Wigeon", "Eurasian Woodcock", "Eastern Cottontail Rabbit",
        "Eastern Wild Turkey", "European Hare", "European Rabbit", "Ferruginous Duck",
        "Gadwall", "Goldeneye", "Green Winged Teal", "Greylag Goose", "Harlequin Duck",
        "Hazel Grouse", "Magpie Goose", "Mallard", "Merriam Turkey", "Mountain Hare",
        "Northern Pintail", "Red Grouse", "Ring-Necked Pheasant", "Rio Grande Turkey",
        "Rock Ptarmigan", "Scrub Hare", "Snow Goose", "Stubble Quail", "Tufted Duck",
        "Tundra Bean Goose", "Western Capercaillie", "Willow Ptarmigan", "White-tailed Jackrabbit",
        "Wood Duck", "Woolly Hare"
      ]
    },
    {
      id: 2,
      icon: class2Icon,
      animals: [
        "Bobcat", "Common Raccoon", "Coyote", "European Badger", "Gray Fox",
        "Mexican Bobcat", "Northern Red Muntjac", "North American Beaver",
        "Raccoon Dog", "Red Fox", "Siberian Musk Deer", "Side-Striped Jackal",
        "Tibetan Fox"
      ]
    },
    {
      id: 3,
      icon: class3Icon,
      animals: [
        "Axis Deer", "Blackbuck", "Chamois", "Collared Peccary", "Eurasian Lynx",
        "Feral Goat", "Hog Deer", "Pronghorn", "Roe Deer", "Springbok"
      ]
    },
    {
      id: 4,
      icon: class4Icon,
      animals: [
        "Beceite Ibex", "Blacktail Deer", "Blue Sheep", "Eastern Gray Kangaroo",
        "Fallow Deer", "Gredos Ibex", "Iberian Mouflon", "Lesser Kudu", "Mountain Goat",
        "Ronda Ibex", "Sika Deer", "Snow Leopard", "Southeastern Spanish Ibex",
        "Tahr", "Warthog", "Whitetail Deer"
      ]
    },
    {
      id: 5,
      icon: class5Icon,
      animals: [
        "Desert Bighorn Sheep", "Feral Pig", "Javan Rusa", "Mountain Lion",
        "Mule Deer", "Puma", "Rocky Mountain Bighorn Sheep", "Wild Boar", "Wild Hog"
      ]
    },
    {
      id: 6,
      icon: class6Icon,
      animals: [
        "Barasingha", "Blue Wildebeest", "Grant Caribou", "Gemsbok", "Gray Wolf",
        "Iberian Wolf", "Nilgai", "Red Deer", "Mountain Reindeer", "Woodland Caribou"
      ]
    },
    {
      id: 7,
      icon: class7Icon,
      animals: [
        "American Alligator", "Manitoban Elk", "Rocky Mountain Elk", "Roosevelt Elk", "Sambar"
      ]
    },
    {
      id: 8,
      icon: class8Icon,
      animals: [
        "Grizzly Bear", "Moose", "Saltwater Crocodile"
      ]
    },
    {
      id: 9,
      icon: class9Icon,
      animals: [
        "Banteng", "Bengal Tiger", "Cape Buffalo", "European Bison", "Lion",
        "Plains Bison", "Water Buffalo", "Wild Yak", "Wood Bison"
      ]
    }
  ];

  const classes = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const classIcons = [class1Icon, class2Icon, class3Icon, class4Icon, class5Icon, class6Icon, class7Icon, class8Icon, class9Icon];

  const getAnimalsForClass = (cls) => {
    const entry = animalData.find(a => a.id === cls);
    return entry ? entry.animals : [];
  };

  return (
    <div className={`animals-table-mini animals-table-mini__card`}>
      <div className="animals-table-mini__header">
        <span className="animals-table-mini__title">Animals</span>
        <button
          className="animals-table-mini__collapse"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? '[Expand]' : '[Collapse]'}
        </button>
      </div>

      {!isCollapsed && (
        <div className="animals-table-mini__body">
          {classes.map((cls, i) => (
            <div key={cls} className="animals-table-mini__class">
              
              {/* CLASS COLUMN SECTION */}
              <div className="animals-table-mini__classLabel">
                <div style={{display:'flex', alignItems:'center', gap:8}}>
                  <img 
                    src={classIcons[i]} 
                    alt={`Class ${cls}`} 
                    className="class-icon" 
                  />
                  <span className="animals-table-mini__classTitle">Class {cls}</span>
                </div>
              </div>

              {/* ANIMAL LIST SECTION */}
              <div className="animals-table-mini__items">
                {getAnimalsForClass(cls).length > 0 ? (
                  getAnimalsForClass(cls).map((animalName, idx) => {
                    const slug = animalName
                      .replace(/[^a-zA-Z0-9\s-]/g, '')
                      .trim()
                      .replace(/\s+/g, '-');
                    return (
                      <Link key={idx} to={`/animals/${slug}`} className="animals-table-mini__item">
                        {animalImages[animalName] ? (
                          <img src={animalImages[animalName]} alt={animalName} className="animal-icon" />
                        ) : (
                          <span className="animal-icon" style={{display:'inline-block', borderRadius:'50%', background:'#2a4b63', border:'1px solid #8bbce3'}}></span>
                        )}
                        <span className="animal-name">{animalName}</span>
                        {idx < getAnimalsForClass(cls).length - 1 && <span style={{opacity:0.6, margin:'0 6px'}}>|</span>}
                      </Link>
                    );
                  })
                ) : (
                  <span className="animals-table-mini__empty">// No animals listed</span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AnimalsTableMini;