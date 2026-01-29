import React from 'react';
import { Link } from 'react-router-dom';
import '..//styles/wiki.css';

// --- ASSET IMPORTS (Unchanged) ---
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

// --- HELPER COMPONENT FOR ANIMAL CARDS ---
const AnimalCard = ({ name, icon }) => {
  const [first, ...rest] = name.split(' ');
  const second = rest.join(' ');

  return (
    <Link 
      to={`/animals/${encodeURIComponent(name.replace(/\s+/g, '-'))}`} 
      className="animal-card"
    >
      <img src={icon} alt={name} />
      <div className="animal-card-name">
        <div className="name-line1">{first}</div>
        {second && <div className="name-line2">{second}</div>}
      </div>
    </Link>
  );
};

// --- HELPER COMPONENT FOR CLASS ROWS ---
const ClassRow = ({ classIcon, classLabel, animals }) => (
  <div className="animal-class-row">
    <div className="class-badge">
      <img src={classIcon} alt={classLabel} />
      <span>{classLabel}</span>
    </div>
    <div className="animal-grid">
      {animals.map((animal) => (
        <AnimalCard key={animal.name} name={animal.name} icon={animal.icon} />
      ))}
    </div>
  </div>
);

export default function AnimalsTable() {
  return (
    <section className="animal-table-section">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="wiki-h2">All Animals by Class</h2>

        <ClassRow 
          classIcon={class1Icon} 
          classLabel="Class 1" 
          animals={[
            { name: 'Canada Goose', icon: canadaGooseIcon },
            { name: 'Greylag Goose', icon: greylagGooseIcon },
            { name: 'Magpie Goose', icon: magpieGooseIcon },
            { name: 'Tundra Bean Goose', icon: tundraBeanGooseIcon },
            { name: 'Snow Goose', icon: snowGooseIcon },
            { name: 'Eurasian Wigeon', icon: eurasianWigeonIcon },
            { name: 'Goldeneye', icon: goldeneyeIcon },
            { name: 'Green Winged Teal', icon: greenWingTealIcon },
            { name: 'Wood Duck', icon: woodDuckIcon },
            { name: 'Harlequin Duck', icon: harlequinDuckIcon },
            { name: 'Cinnamon Teal', icon: cinnamonTealIcon },
            { name: 'Mallard', icon: mallardIcon },
            { name: 'Tufted Duck', icon: tuftedDuckIcon },
            { name: 'Ferruginous Duck', icon: ferruginousDuckIcon },
            { name: 'Gadwall', icon: gadwallIcon },
            { name: 'Eurasian Teal', icon: eurasianTealIcon },
            { name: 'Northern Pintail', icon: northernPintailIcon },
            { name: 'Black Grouse', icon: blackGrouseIcon },
            { name: 'Hazel Grouse', icon: hazelGrouseIcon },
            { name: 'Dusky Grouse', icon: duskyGrouseIcon },
            { name: 'Red Grouse', icon: redGrouseIcon },
            { name: 'Bobwhite Quail', icon: bobwhiteQuailIcon },
            { name: 'Stubble Quail', icon: stubbleQuailIcon },
            { name: 'Rock Ptarmigan', icon: rockPtarmiganIcon },
            { name: 'Willow Ptarmigan', icon: willowPtarmiganIcon },
            { name: 'Eastern Wild Turkey', icon: easternWildTurkeyIcon },
            { name: 'Merriam Turkey', icon: merriamTurkeyIcon },
            { name: 'Rio Grande Turkey', icon: rioGrandeTurkeyIcon },
            { name: 'Ring-Necked Pheasant', icon: ringNeckedPheasantIcon },
            { name: 'Western Capercaillie', icon: westernCapercaillieIcon },
            { name: 'Eurasian Woodcock', icon: eurasianWoodcockIcon },
            { name: 'Antelope Jackrabbit', icon: antelopeJackrabbitIcon },
            { name: 'Eastern Cottontail Rabbit', icon: easternCottontailIcon },
            { name: 'European Hare', icon: europeanHareIcon },
            { name: 'European Rabbit', icon: europeanRabbitIcon },
            { name: 'Mountain Hare', icon: mountainHareIcon },
            { name: 'Scrub Hare', icon: scrubHareIcon },
            { name: 'White-tailed Jackrabbit', icon: whiteTailedJackrabbitIcon },
            { name: 'Woolly Hare', icon: woollyHareIcon },
            { name: 'American Mink', icon: americanMinkIcon },
            { name: 'Eurasian Pine Marten', icon: eurasianPineMartenIcon },
          ]}
        />

        <ClassRow 
          classIcon={class2Icon} 
          classLabel="Class 2" 
          animals={[
            { name: 'Northern Red Muntjac', icon: northernRedMuntjacIcon },
            { name: 'Siberian Musk Deer', icon: siberianMuskDeerIcon },
            { name: 'Raccoon Dog', icon: raccoonDogIcon },
            { name: 'Coyote', icon: coyoteIcon },
            { name: 'Side-striped Jackal', icon: sideStripedJackalIcon },
            { name: 'Gray Fox', icon: grayFoxIcon },
            { name: 'Red Fox', icon: redFoxIcon },
            { name: 'Tibetan Fox', icon: tibetanFoxIcon },
            { name: 'Common Raccoon', icon: commonRaccoonIcon },
            { name: 'European Badger', icon: europeanBadgerIcon },
            { name: 'North American Beaver', icon: northAmericanBeaverIcon },
            { name: 'Bobcat', icon: bobcatIcon },
            { name: 'Mexican Bobcat', icon: mexicanBobcatIcon },
          ]}
        />

        <ClassRow 
          classIcon={class3Icon} 
          classLabel="Class 3" 
          animals={[
            { name: 'Axis Deer', icon: axisDeerIcon },
            { name: 'Hog Deer', icon: hogDeerIcon },
            { name: 'Roe Deer', icon: roeDeerIcon },
            { name: 'Blackbuck', icon: blackbuckIcon },
            { name: 'Springbok', icon: springbokIcon },
            { name: 'Pronghorn', icon: pronghornIcon },
            { name: 'Feral Goat', icon: feralGoatIcon },
            { name: 'Chamois', icon: chamoisIcon },
            { name: 'Eurasian Lynx', icon: eurasianLynxIcon },
            { name: 'Collared Peccary', icon: collaredPeccaryIcon },
          ]}
        />

        <ClassRow 
          classIcon={class4Icon} 
          classLabel="Class 4" 
          animals={[
            { name: 'Blacktail Deer', icon: blacktailDeerIcon },
            { name: 'Whitetail Deer', icon: whitetailDeerIcon },
            { name: 'Fallow Deer', icon: fallowDeerIcon },
            { name: 'Sika Deer', icon: sikaDeerIcon },
            { name: 'Lesser Kudu', icon: lesserKuduIcon },
            { name: 'Mountain Goat', icon: mountainGoatIcon },
            { name: 'Beceite Ibex', icon: beceiteIbexIcon },
            { name: 'Ronda Ibex', icon: rondaIbexIcon },
            { name: 'Gredos Ibex', icon: gredosIbexIcon },
            { name: 'Southeastern Spanish Ibex', icon: southeasternSpanishIbexIcon },
            { name: 'Iberian Mouflon', icon: iberianMouflonIcon },
            { name: 'Blue Sheep', icon: blueSheepIcon },
            { name: 'Tahr', icon: tahrIcon },
            { name: 'Snow Leopard', icon: snowLeopardIcon },
            { name: 'Warthog', icon: warthogIcon },
            { name: 'Eastern Gray Kangaroo', icon: easternGrayKangarooIcon },
          ]}
        />

        <ClassRow 
          classIcon={class5Icon} 
          classLabel="Class 5" 
          animals={[
            { name: 'Javan Rusa', icon: javanRusaIcon },
            { name: 'Mule Deer', icon: muleDeerIcon },
            { name: 'Desert Bighorn Sheep', icon: desertBighornSheepIcon },
            { name: 'Rocky Mountain Bighorn Sheep', icon: rockyMountainBighornSheepIcon },
            { name: 'Mountain Lion', icon: mountainLionIcon },
            { name: 'Puma', icon: pumaIcon },
            { name: 'Wild Boar', icon: wildBoarIcon },
            { name: 'Feral Pig', icon: feralPigIcon },
            { name: 'Wild Hog', icon: wildHogIcon },
          ]}
        />

        <ClassRow 
          classIcon={class6Icon} 
          classLabel="Class 6" 
          animals={[
            { name: 'Red Deer', icon: redDeerIcon },
            { name: 'Mountain Reindeer', icon: mountainReindeerIcon },
            { name: 'Grant Caribou', icon: grantCaribouIcon },
            { name: 'Woodland Caribou', icon: woodlandCaribouIcon },
            { name: 'Blue Wildebeest', icon: blueWildebeestIcon },
            { name: 'Gemsbok', icon: gemsbokIcon },
            { name: 'Barasingha', icon: barasinghaIcon },
            { name: 'Nilgai', icon: nilgaiIcon },
            { name: 'Gray Wolf', icon: grayWolfIcon },
            { name: 'Iberian Wolf', icon: iberianWolfIcon },
          ]}
        />

        <ClassRow 
          classIcon={class7Icon} 
          classLabel="Class 7" 
          animals={[
            { name: 'Sambar', icon: sambarIcon },
            { name: 'Rocky Mountain Elk', icon: rockyMountainElkIcon },
            { name: 'Roosevelt Elk', icon: rooseveltElkIcon },
            { name: 'Manitoban Elk', icon: manitobanElkIcon },
            { name: 'Black Bear', icon: blackBearIcon },
            { name: 'Eurasian Brown Bear', icon: eurasianBrownBearIcon },
            { name: 'American Alligator', icon: americanAlligatorIcon },
          ]}
        />

        <ClassRow 
          classIcon={class8Icon} 
          classLabel="Class 8" 
          animals={[
            { name: 'Moose', icon: mooseIcon },
            { name: 'Grizzly Bear', icon: grizzlyBearIcon },
            { name: 'Saltwater Crocodile', icon: saltwaterCrocodileIcon },
          ]}
        />

        <ClassRow 
          classIcon={class9Icon} 
          classLabel="Class 9" 
          animals={[
            { name: 'Banteng', icon: bantengIcon },
            { name: 'Cape Buffalo', icon: capeBuffaloIcon },
            { name: 'European Bison', icon: europeanBisonIcon },
            { name: 'Plains Bison', icon: plainsBisonIcon },
            { name: 'Wood Bison', icon: woodBisonIcon },
            { name: 'Water Buffalo', icon: waterBuffaloIcon },
            { name: 'Wild Yak', icon: wildYakIcon },
            { name: 'Lion', icon: lionIcon },
            { name: 'Bengal Tiger', icon: bengalTigerIcon },
          ]}
        />

      </div>
    </section>
  );
}