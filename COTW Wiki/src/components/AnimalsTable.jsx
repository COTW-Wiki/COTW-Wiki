import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/Home/Home.css';
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

export default function AnimalsTable() {
  return (
      <section className="mt-8 w-full">
        <div className="max-w-3xl mx-auto px-4">
          <h3 className="text-xl font-semibold mb-2">All Animals by class</h3>
          <table className="home-blank-table" aria-label="Blank two-column table">
            <colgroup>
              <col className="col-10" />
              <col className="col-90" />
            </colgroup>
            <tbody>
              <tr>
                <td className="col-10" style={{textAlign: 'center', verticalAlign: 'middle'}}>
                  <img src={class1Icon} alt="Class 1" className="class1-icon" />
                  <div className="class1-label">Class 1</div>
                </td>
                <td className="col-90">
                  <div className="home-animal-list">
                    {[
                      { name: 'Canada Goose', icon: canadaGooseIcon },
                      { name: 'Greylag Goose', icon: greylagGooseIcon },
                      { name: 'Magpie Goose', icon: magpieGooseIcon },
                      { name: 'Tundra Bean Goose', icon: tundraBeanGooseIcon },
                      { name: 'Snow Goose', icon: snowGooseIcon },
                      { name: 'Eurasian Wigeon', icon: eurasianWigeonIcon },
                      { name: 'Goldeneye', icon: goldeneyeIcon },
                      { name: 'Green Winged Teal', icon: greenWingTealIcon },
                      { name: 'Wood Duck', icon: woodDuckIcon },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                        { name: 'Harlequin Duck', icon: harlequinDuckIcon },
                        { name: 'Cinnamon Teal', icon: cinnamonTealIcon },
                        { name: 'Mallard', icon: mallardIcon },
                        { name: 'Tufted Duck', icon: tuftedDuckIcon },
                        { name: 'Ferruginous Duck', icon: ferruginousDuckIcon },
                        { name: 'Gadwall', icon: gadwallIcon },
                        { name: 'Eurasian Teal', icon: eurasianTealIcon },
                        { name: 'Northern Pintail', icon: northernPintailIcon },
                        { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                        { name: 'Black Grouse', icon: blackGrouseIcon },
                        { name: 'Hazel Grouse', icon: hazelGrouseIcon },
                        { name: 'Dusky Grouse', icon: duskyGrouseIcon },
                        { name: 'Red Grouse', icon: redGrouseIcon },
                        { name: 'Bobwhite Quail', icon: bobwhiteQuailIcon },
                        { name: 'Stubble Quail', icon: stubbleQuailIcon },
                        { name: 'Rock Ptarmigan', icon: rockPtarmiganIcon },
                        { name: 'Willow Ptarmigan', icon: willowPtarmiganIcon },
                        { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                        { name: 'Eastern Wild Turkey', icon: easternWildTurkeyIcon },
                        { name: 'Merriam Turkey', icon: merriamTurkeyIcon },
                        { name: 'Rio Grande Turkey', icon: rioGrandeTurkeyIcon },
                        { name: 'Ring-Necked Pheasant', icon: ringNeckedPheasantIcon },
                        { name: 'Western Capercaillie', icon: westernCapercaillieIcon },
                        { name: 'SPACER', icon: null },
                        { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                        { name: 'Eurasian Woodcock', icon: eurasianWoodcockIcon },
                        { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                        { name: 'Antelope Jackrabbit', icon: antelopeJackrabbitIcon },
                        { name: 'Eastern Cottontail Rabbit', icon: easternCottontailIcon },
                        { name: 'European Hare', icon: europeanHareIcon },
                        { name: 'European Rabbit', icon: europeanRabbitIcon },
                        { name: 'Mountain Hare', icon: mountainHareIcon },
                        { name: 'Scrub Hare', icon: scrubHareIcon },
                        { name: 'White-tailed Jackrabbit', icon: whiteTailedJackrabbitIcon },
                        { name: 'Woolly Hare', icon: woollyHareIcon },
                        { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                        { name: 'American Mink', icon: americanMinkIcon },
                        { name: 'Eurasian Pine Marten', icon: eurasianPineMartenIcon },
                    ].map(({ name, icon }, index) => {
    // 1. CHECK FOR SPACER
    if (name === 'SPACER') {
      return (
        <div 
          key={`spacer-${index}`} 
          className="home-animal-block" 
          style={{ visibility: 'hidden' }} 
        />
      );
    }

    // 2. RENDER NORMAL ANIMAL (Your existing code)
    return (
      <div key={name} className="home-animal-block home-animal-entry">
        <Link to={`/animals/${encodeURIComponent(name.replace(/\s+/g, '-'))}`}>
          <img src={icon} alt={name} className="home-animal-icon home-animal-link" />
        </Link>
        
        <div className="home-animal-name">
          {name.includes(' ') ? name.split(' ')[0] : name}
        </div>
        
        <div style={{ display: 'none' }}></div>
        
        <div className="home-animal-name-line2" aria-hidden="true">
          {name.includes(' ') ? name.split(' ').slice(1).join(' ') : ''}
        </div>
      </div>
    );
  })}
                  </div>
                </td>
              </tr>
              
              <tr>
                <td className="col-10" style={{textAlign: 'center', verticalAlign: 'middle'}}>
                  <img src={class2Icon} alt="Class 2" className="class1-icon" />
                  <div className="class1-label">Class 2</div>
                </td>
                <td className="col-90">
                  <div className="home-animal-list">
                    {[
                      { name: 'Northern Red Muntjac', icon: northernRedMuntjacIcon },
                      { name: 'Siberian Musk Deer', icon: siberianMuskDeerIcon },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'Raccoon Dog', icon: raccoonDogIcon },
                      { name: 'Coyote', icon: coyoteIcon },
                      { name: 'Side-striped Jackal', icon: sideStripedJackalIcon },
                      { name: 'Gray Fox', icon: grayFoxIcon },
                      { name: 'Red Fox', icon: redFoxIcon },
                      { name: 'Tibetan Fox', icon: tibetanFoxIcon },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'Common Raccoon', icon: commonRaccoonIcon },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'European Badger', icon: europeanBadgerIcon },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'North American Beaver', icon: northAmericanBeaverIcon },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'Bobcat', icon: bobcatIcon },
                      { name: 'Mexican Bobcat', icon: mexicanBobcatIcon },
                    ].map(({ name, icon }, index) => {
    // 1. CHECK FOR SPACER
    if (name === 'SPACER') {
      return (
        <div 
          key={`spacer-${index}`} 
          className="home-animal-block" 
          style={{ visibility: 'hidden' }} 
        />
      );
    }

    // 2. RENDER NORMAL ANIMAL (Your existing code)
    return (
      <div key={name} className="home-animal-block home-animal-entry">
        <Link to={`/animals/${encodeURIComponent(name.replace(/\s+/g, '-'))}`}>
          <img src={icon} alt={name} className="home-animal-icon home-animal-link" />
        </Link>
        
        <div className="home-animal-name">
          {name.includes(' ') ? name.split(' ')[0] : name}
        </div>
        
        <div style={{ display: 'none' }}></div>
        
        <div className="home-animal-name-line2" aria-hidden="true">
          {name.includes(' ') ? name.split(' ').slice(1).join(' ') : ''}
        </div>
      </div>
    );
  })}
                  </div>
                </td>
              </tr>
              <tr>
                <td className="col-10" style={{textAlign: 'center', verticalAlign: 'middle'}}>
                  <img src={class3Icon} alt="Class 3" className="class1-icon" />
                  <div className="class1-label">Class 3</div>
                </td>
                <td className="col-90">
                  <div className="home-animal-list">
                    {[
                      { name: 'Axis Deer', icon: axisDeerIcon },
                      { name: 'Hog Deer', icon: hogDeerIcon },
                      { name: 'Roe Deer', icon: roeDeerIcon },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'Blackbuck', icon: blackbuckIcon },
                      { name: 'Springbok', icon: springbokIcon },
                      { name: 'Pronghorn', icon: pronghornIcon },
                      { name: 'Feral Goat', icon: feralGoatIcon },
                      { name: 'Chamois', icon: chamoisIcon },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'Eurasian Lynx', icon: eurasianLynxIcon },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'Collared Peccary', icon: collaredPeccaryIcon },
                    ].map(({ name, icon }, index) => {
    // 1. CHECK FOR SPACER
    if (name === 'SPACER') {
      return (
        <div 
          key={`spacer-${index}`} 
          className="home-animal-block" 
          style={{ visibility: 'hidden' }} 
        />
      );
    }

    // 2. RENDER NORMAL ANIMAL (Your existing code)
    return (
      <div key={name} className="home-animal-block home-animal-entry">
        <Link to={`/animals/${encodeURIComponent(name.replace(/\s+/g, '-'))}`}>
          <img src={icon} alt={name} className="home-animal-icon home-animal-link" />
        </Link>
        
        <div className="home-animal-name">
          {name.includes(' ') ? name.split(' ')[0] : name}
        </div>
        
        <div style={{ display: 'none' }}></div>
        
        <div className="home-animal-name-line2" aria-hidden="true">
          {name.includes(' ') ? name.split(' ').slice(1).join(' ') : ''}
        </div>
      </div>
    );
  })}
                  </div>
                </td>
              </tr>
              <tr>
                <td className="col-10" style={{textAlign: 'center', verticalAlign: 'middle'}}>
                  <img src={class4Icon} alt="Class 4" className="class1-icon" />
                  <div className="class1-label">Class 4</div>
                </td>
                <td className="col-90">
                  <div className="home-animal-list">
                    {[
                      { name: 'Blacktail Deer', icon: blacktailDeerIcon },
                      { name: 'Whitetail Deer', icon: whitetailDeerIcon },
                      { name: 'Fallow Deer', icon: fallowDeerIcon },
                      { name: 'Sika Deer', icon: sikaDeerIcon },
                      { name: 'Lesser Kudu', icon: lesserKuduIcon },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'Mountain Goat', icon: mountainGoatIcon },
                      { name: 'Beceite Ibex', icon: beceiteIbexIcon },
                      { name: 'Ronda Ibex', icon: rondaIbexIcon },
                      { name: 'Gredos Ibex', icon: gredosIbexIcon },
                      { name: 'Southeastern Spanish Ibex', icon: southeasternSpanishIbexIcon },
                      { name: 'Iberian Mouflon', icon: iberianMouflonIcon },
                      { name: 'Blue Sheep', icon: blueSheepIcon },
                      { name: 'Tahr', icon: tahrIcon },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'Snow Leopard', icon: snowLeopardIcon },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'Warthog', icon: warthogIcon },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'Eastern Gray Kangaroo', icon: easternGrayKangarooIcon },
                    ].map(({ name, icon }, index) => {
    // 1. CHECK FOR SPACER
    if (name === 'SPACER') {
      return (
        <div 
          key={`spacer-${index}`} 
          className="home-animal-block" 
          style={{ visibility: 'hidden' }} 
        />
      );
    }

    // 2. RENDER NORMAL ANIMAL (Your existing code)
    return (
      <div key={name} className="home-animal-block home-animal-entry">
        <Link to={`/animals/${encodeURIComponent(name.replace(/\s+/g, '-'))}`}>
          <img src={icon} alt={name} className="home-animal-icon home-animal-link" />
        </Link>
        
        <div className="home-animal-name">
          {name.includes(' ') ? name.split(' ')[0] : name}
        </div>
        
        <div style={{ display: 'none' }}></div>
        
        <div className="home-animal-name-line2" aria-hidden="true">
          {name.includes(' ') ? name.split(' ').slice(1).join(' ') : ''}
        </div>
      </div>
    );
  })}
                  </div>
                </td>
              </tr>
              <tr>
                <td className="col-10" style={{textAlign: 'center', verticalAlign: 'middle'}}>
                  <img src={class5Icon} alt="Class 5" className="class1-icon" />
                  <div className="class1-label">Class 5</div>
                </td>
                <td className="col-90">
                  <div className="home-animal-list">
                    {[
                      { name: 'Javan Rusa', icon: javanRusaIcon },
                      { name: 'Mule Deer', icon: muleDeerIcon },
                      { name: 'Desert Bighorn Sheep', icon: desertBighornSheepIcon },
                      { name: 'Rocky Mountain Bighorn Sheep', icon: rockyMountainBighornSheepIcon },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'Mountain Lion', icon: mountainLionIcon },
                      { name: 'Puma', icon: pumaIcon },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'Wild Boar', icon: wildBoarIcon },
                      { name: 'Feral Pig', icon: feralPigIcon },
                      { name: 'Wild Hog', icon: wildHogIcon },
                    ].map(({ name, icon }, index) => {
                      if (name === 'SPACER') {
                        return (
                          <div
                            key={`spacer-class5-${index}`}
                            className="home-animal-block"
                            style={{ visibility: 'hidden' }}
                          />
                        );
                      }

                      return (
                        <div key={name} className="home-animal-block home-animal-entry">
                          <Link to={`/animals/${encodeURIComponent(name.replace(/\s+/g, '-'))}`}>
                            <img src={icon} alt={name} className="home-animal-icon home-animal-link" />
                          </Link>

                          <div className="home-animal-name">
                            {name.includes(' ') ? name.split(' ')[0] : name}
                          </div>

                          <div style={{ display: 'none' }}></div>

                          <div className="home-animal-name-line2" aria-hidden="true">
                            {name.includes(' ') ? name.split(' ').slice(1).join(' ') : ''}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </td>
              </tr>
              <tr>
                <td className="col-10" style={{textAlign: 'center', verticalAlign: 'middle'}}>
                  <img src={class6Icon} alt="Class 6" className="class1-icon" />
                  <div className="class1-label">Class 6</div>
                </td>
                <td className="col-90">
                  <div className="home-animal-list">
                    {[
                      { name: 'Red Deer', icon: redDeerIcon },
                      { name: 'Mountain Reindeer', icon: mountainReindeerIcon },
                      { name: 'Grant Caribou', icon: grantCaribouIcon },
                      { name: 'Woodland Caribou', icon: woodlandCaribouIcon },
                      { name: 'Blue Wildebeest', icon: blueWildebeestIcon },
                      { name: 'Gemsbok', icon: gemsbokIcon },
                      { name: 'Barasingha', icon: barasinghaIcon },
                      { name: 'Nilgai', icon: nilgaiIcon },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'Gray Wolf', icon: grayWolfIcon },
                      { name: 'Iberian Wolf', icon: iberianWolfIcon },
                    ].map(({ name, icon }, index) => {
                      if (name === 'SPACER') {
                        return (
                          <div
                            key={`spacer-class6-${index}`}
                            className="home-animal-block"
                            style={{ visibility: 'hidden' }}
                          />
                        );
                      }

                      return (
                        <div key={name} className="home-animal-block home-animal-entry">
                          <Link to={`/animals/${encodeURIComponent(name.replace(/\s+/g, '-'))}`}>
                            <img src={icon} alt={name} className="home-animal-icon home-animal-link" />
                          </Link>

                          <div className="home-animal-name">
                            {name.includes(' ') ? name.split(' ')[0] : name}
                          </div>

                          <div style={{ display: 'none' }}></div>

                          <div className="home-animal-name-line2" aria-hidden="true">
                            {name.includes(' ') ? name.split(' ').slice(1).join(' ') : ''}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </td>
              </tr>
              <tr>
                <td className="col-10" style={{textAlign: 'center', verticalAlign: 'middle'}}>
                  <img src={class7Icon} alt="Class 7" className="class1-icon" />
                  <div className="class1-label">Class 7</div>
                </td>
                <td className="col-90">
                  <div className="home-animal-list">
                    {[
                      { name: 'Sambar', icon: sambarIcon },
                      { name: 'Rocky Mountain Elk', icon: rockyMountainElkIcon },
                      { name: 'Roosevelt Elk', icon: rooseveltElkIcon },
                      { name: 'Manitoban Elk', icon: manitobanElkIcon },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'Black Bear', icon: blackBearIcon },
                      { name: 'Eurasian Brown Bear', icon: eurasianBrownBearIcon },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'American Alligator', icon: americanAlligatorIcon },
                    ].map(({ name, icon }, index) => {
                      if (name === 'SPACER') {
                        return (
                          <div
                            key={`spacer-class7-${index}`}
                            className="home-animal-block"
                            style={{ visibility: 'hidden' }}
                          />
                        );
                      }

                      return (
                        <div key={name} className="home-animal-block home-animal-entry">
                          <Link to={`/animals/${encodeURIComponent(name.replace(/\s+/g, '-'))}`}>
                            <img src={icon} alt={name} className="home-animal-icon home-animal-link" />
                          </Link>

                          <div className="home-animal-name">
                            {name.includes(' ') ? name.split(' ')[0] : name}
                          </div>

                          <div style={{ display: 'none' }}></div>

                          <div className="home-animal-name-line2" aria-hidden="true">
                            {name.includes(' ') ? name.split(' ').slice(1).join(' ') : ''}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </td>
              </tr>
              <tr>
                <td className="col-10" style={{textAlign: 'center', verticalAlign: 'middle'}}>
                  <img src={class8Icon} alt="Class 8" className="class1-icon" />
                  <div className="class1-label">Class 8</div>
                </td>
                <td className="col-90">
                  <div className="home-animal-list">
                    {[
                      { name: 'Moose', icon: mooseIcon },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'Grizzly Bear', icon: grizzlyBearIcon },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'Saltwater Crocodile', icon: saltwaterCrocodileIcon },
                    ].map(({ name, icon }, index) => {
                      if (name === 'SPACER') {
                        return (
                          <div
                            key={`spacer-class8-${index}`}
                            className="home-animal-block"
                            style={{ visibility: 'hidden' }}
                          />
                        );
                      }

                      return (
                        <div key={name} className="home-animal-block home-animal-entry">
                          <Link to={`/animals/${encodeURIComponent(name.replace(/\s+/g, '-'))}`}>
                            <img src={icon} alt={name} className="home-animal-icon home-animal-link" />
                          </Link>

                          <div className="home-animal-name">
                            {name.includes(' ') ? name.split(' ')[0] : name}
                          </div>

                          <div style={{ display: 'none' }}></div>

                          <div className="home-animal-name-line2" aria-hidden="true">
                            {name.includes(' ') ? name.split(' ').slice(1).join(' ') : ''}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </td>
              </tr>
              <tr>
                <td className="col-10" style={{textAlign: 'center', verticalAlign: 'middle'}}>
                  <img src={class9Icon} alt="Class 9" className="class1-icon" />
                  <div className="class1-label">Class 9</div>
                </td>
                <td className="col-90">
                  <div className="home-animal-list">
                    {[
                      { name: 'Banteng', icon: bantengIcon },
                      { name: 'Cape Buffalo', icon: capeBuffaloIcon },
                      { name: 'European Bison', icon: europeanBisonIcon },
                      { name: 'Plains Bison', icon: plainsBisonIcon },
                      { name: 'Wood Bison', icon: woodBisonIcon },
                      { name: 'Water Buffalo', icon: waterBuffaloIcon },
                      { name: 'Wild Yak', icon: wildYakIcon },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'SPACER', icon: null },
                      { name: 'Lion', icon: lionIcon },
                      { name: 'Bengal Tiger', icon: bengalTigerIcon },
                    ].map(({ name, icon }, index) => {
                      if (name === 'SPACER') {
                        return (
                          <div
                            key={`spacer-class9-${index}`}
                            className="home-animal-block"
                            style={{ visibility: 'hidden' }}
                          />
                        );
                      }

                      return (
                        <div key={name} className="home-animal-block home-animal-entry">
                          <Link to={`/animals/${encodeURIComponent(name.replace(/\s+/g, '-'))}`}>
                            <img src={icon} alt={name} className="home-animal-icon home-animal-link" />
                          </Link>

                          <div className="home-animal-name">
                            {name.includes(' ') ? name.split(' ')[0] : name}
                          </div>

                          <div style={{ display: 'none' }}></div>

                          <div className="home-animal-name-line2" aria-hidden="true">
                            {name.includes(' ') ? name.split(' ').slice(1).join(' ') : ''}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
  );
}
