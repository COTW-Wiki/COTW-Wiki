import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import MapsList from '../pages/reserves/ReserveList';
import MapPage from '../pages/reserves/Map';
import RegionPage from '../pages/reserves/RegionPage';
import HirschfeldenHuntingReserve from '../pages/reserves/reservePages/HirschfeldenHuntingReserve';
import LaytonLakeDistrict from '../pages/reserves/reservePages/LaytonLakeDistrict';
import MedvedTaiga from '../pages/reserves/reservePages/Medved-TaigaNationalPark';
import VurhongaSavanna from '../pages/reserves/reservePages/VurhongaSavanna';
import SubregionPage from '../pages/reserves/SubregionPage';
import WeaponsComparison from '../pages/loadouts/weapons/WeaponsComparison';
import WeaponsList from '../pages/loadouts/weapons/Weapons';
import Docent223 from '../pages/loadouts/weapons/rifles/223Docent';
import Huntsman270 from '../pages/loadouts/weapons/rifles/270Huntsman';
import Regent7mm from '../pages/loadouts/weapons/rifles/7mmRegentMagnum';
import Ranger243 from '../pages/loadouts/weapons/rifles/Ranger243';
import Rangemaster338 from '../pages/loadouts/weapons/rifles/Rangemaster338';
import WhitlockModel86 from '../pages/loadouts/weapons/rifles/WhitlockModel86';
import CoachmateLever4570 from '../pages/loadouts/weapons/rifles/CoachmateLever45-70';
import Virant22LR from '../pages/loadouts/weapons/rifles/Virant22LR';
import King470DB from '../pages/loadouts/weapons/rifles/King470DB';
import SolokhinMN1890 from '../pages/loadouts/weapons/rifles/SolokhinMN1980';
import CanningMagnum300 from '../pages/loadouts/weapons/rifles/300CanningMagnum';
import VasquezCyclone45 from '../pages/loadouts/weapons/rifles/VasquezCyclone45';
import Eckers3060 from '../pages/loadouts/weapons/rifles/Eckers3060';
import Martensson65 from '../pages/loadouts/weapons/rifles/Martensson65';
import Hudzik50Caplock from '../pages/loadouts/weapons/rifles/Hudzik50Caplock';
import M1Iwaniec from '../pages/loadouts/weapons/rifles/M1Iwaniec';
import FLSporter303 from '../pages/loadouts/weapons/rifles/FLSporter303';
import Kullman22h from '../pages/loadouts/weapons/rifles/Kullman22h';
import Zarza1522LR from '../pages/loadouts/weapons/rifles/Zarza1522LR';
import Zarza15223 from '../pages/loadouts/weapons/rifles/Zarza15223';
import Zarza10308 from '../pages/loadouts/weapons/rifles/Zarza10308';
import Curman50Inline from '../pages/loadouts/weapons/rifles/Curman50Inline';
import TsurugiLRR338 from '../pages/loadouts/weapons/rifles/TsurugiLRR338';
import Malmer7mmMagnum from '../pages/loadouts/weapons/rifles/Malmer7mmMagnum';
import OlssonModel23308 from '../pages/loadouts/weapons/rifles/OlssonModel23308';
import ZaganVarminter22250 from '../pages/loadouts/weapons/rifles/ZaganVarminter22250';
import MoradiModel1894 from '../pages/loadouts/weapons/rifles/MoradiModel1894';
import Arzyna300MagTactical from '../pages/loadouts/weapons/rifles/Arzyna300MagTactical';
import ForsElite300 from '../pages/loadouts/weapons/rifles/ForsElite300';
import Valgarda375 from '../pages/loadouts/weapons/rifles/Vallgarda375';
import GrandhareRifle from '../pages/loadouts/weapons/rifles/GandhareRifle';
import Johansson450 from '../pages/loadouts/weapons/rifles/Johansson450';
import Hansson3006 from '../pages/loadouts/weapons/rifles/Hansson3006';
import Perry308 from '../pages/loadouts/weapons/rifles/Perry308';
import QuistReaper762x39 from '../pages/loadouts/weapons/rifles/QuistReaper762x39';
import Cacciatore12G from '../pages/loadouts/weapons/shotguns/Cacciatore12G';
import CavershamSteward12G from '../pages/loadouts/weapons/shotguns/CavershamSteward12G';
import CousoModel1897 from '../pages/loadouts/weapons/shotguns/CousoModel1897';
import MillerModel1891 from '../pages/loadouts/weapons/shotguns/MillerModel1891';
import StreckerSxS20G from '../pages/loadouts/weapons/shotguns/StreckerSxS20G';
import Nordin20SA from '../pages/loadouts/weapons/shotguns/Nordin20SA';
import Strandberg10SA from '../pages/loadouts/weapons/shotguns/Strandberg10SA';
import Gopi10GGrand from '../pages/loadouts/weapons/shotguns/Gopi10GGrand';
import GrelckDrillingRifle from '../pages/loadouts/weapons/shotguns/GrelckDrillingRifle';
import AlexanderLongbow from '../pages/loadouts/weapons/bows/AlexanderLongbow';
import BearclawLiteCB60 from '../pages/loadouts/weapons/bows/BearclawLiteCB60';
import CrosspointCB165 from '../pages/loadouts/weapons/bows/CrosspointCB165';
import HawkEdgeCB70 from '../pages/loadouts/weapons/bows/HawkEdgeCB70';
import HouyiRecurveBow from '../pages/loadouts/weapons/bows/HouyiRecurveBow';
import KoterCB65 from '../pages/loadouts/weapons/bows/KoterCB65';
import RazorbackLiteCB60 from '../pages/loadouts/weapons/bows/RazorbackLiteCB60';
import StandbergTakedownRecurveBow from '../pages/loadouts/weapons/bows/StandbergTakedownRecurveBow';
import RCuomo243 from '../pages/loadouts/weapons/handguns/243RCuomo';
import PantherMagnum44 from '../pages/loadouts/weapons/handguns/44PantherMagnum';
import Rolleston45 from '../pages/loadouts/weapons/handguns/45Rolleston';
import Davani10mm from '../pages/loadouts/weapons/handguns/10mmDavani';
import Andersson22LR from '../pages/loadouts/weapons/handguns/Andersson22LR';
import Focoso357 from '../pages/loadouts/weapons/handguns/Focoso357';
import Mangiafico41045Colt from '../pages/loadouts/weapons/handguns/Mangiafico41045Colt';
import Rhino454 from '../pages/loadouts/weapons/handguns/Rhino454';
import Sundberg454 from '../pages/loadouts/weapons/handguns/Sundberg454';
import Jernberg4570Superior from '../pages/loadouts/weapons/handguns/4570JernbergSuperior';
import AmmunitionPage from '../pages/loadouts/ammunition/Ammunition';
import AmmoDetail from '../pages/loadouts/ammunition/AmmoDetail';
import SightsPage from '../pages/loadouts/sights/SightsPage';
import SightDetail from '../pages/loadouts/sights/SightDetail';
import WeaponDetail from '../pages/loadouts/weapons/WeaponDetail';
import CallersPage from '../pages/loadouts/Callers';
import ScentsPage from '../pages/loadouts/Scents';
import PlaceablesPage from '../pages/loadouts/Placeables';
import AnimalsListPage from '../pages/animals/Animals';
import FurTypesPage from '../pages/animals/AnimalsFurTypes';
import IntegrityPage from '../pages/animals/Integrity';
import NeedZones from '../pages/animals/NeedZones';
import TracksPage from '../pages/animals/Tracks';
import CallsPage from '../pages/animals/Calls';
import SpottingPage from '../pages/hunter/Spotting';
import NoisePage from '../pages/hunter/Noise';
import ScentPage from '../pages/hunter/Scent';
import Skill from '../pages/hunter/Skill';
import ConnectTheDots from '../pages/hunter/skills/ConnectTheDots';
import DazedAndConfused from '../pages/hunter/skills/DazedAndConfused';
import DisturbedVegetation from '../pages/hunter/skills/DisturbedVegetation';
import Endurance from '../pages/hunter/skills/Endurance';
import FatalAttraction from '../pages/hunter/skills/FatalAttraction';
import Haggle from '../pages/hunter/skills/Haggle';
import Hardened from '../pages/hunter/skills/Hardened';
import HillCaller from '../pages/hunter/skills/HillCaller';
import ImOnlyHappyWhenItRains from '../pages/hunter/skills/ImOnlyHappyWhenItRains';
import ImpactResistent from '../pages/hunter/skills/ImpactResistent';
import ImprovisedBlind from '../pages/hunter/skills/ImprovisedBlind';
import InnateTriangulation from '../pages/hunter/skills/InnateTriangulation';
import KeenEye from '../pages/hunter/skills/KeenEye';
import LocateTracks from '../pages/hunter/skills/LocateTracks';
import PackMule from '../pages/hunter/skills/PackMule';
import ScentThinkerer from '../pages/hunter/skills/ScentThinkerer';
import SightSpotting from '../pages/hunter/skills/SightsSpotting';
import SpottingKnowledge from '../pages/hunter/skills/SpottingKnowledge';
import Tag from '../pages/hunter/skills/Tag';
import TheMoreTheMerrier from '../pages/hunter/skills/TheMoreTheMerrier';
import TrackKnowledge from '../pages/hunter/skills/TrackKnowledge';
import WeatherPrediction from '../pages/hunter/skills/WeatherPrediction';
import WhosDeer from '../pages/hunter/skills/WhosDeer';
import WindPrediction from '../pages/hunter/skills/WindPrediction';
import SoftFeet from '../pages/hunter/skills/SoftFeet';
import Perks from '../pages/hunter/perks/Perks';
import BodyControl from '../pages/hunter/perks/BodyControl';
import Boomstick from '../pages/hunter/perks/Boomstick';
import BothEyesOpen from '../pages/hunter/perks/BothEyesOpen';
import BreathControl from '../pages/hunter/perks/BreathControl';
import CapeBuffaloPage from '../pages/animals/class9/CapeBuffalo';
import EuropeanBisonPage from '../pages/animals/class9/EuropeanBison';
import PlainsBisonPage from '../pages/animals/class9/PlainsBison';
import WoodBisonPage from '../pages/animals/class9/WoodBison';
import WaterBuffaloPage from '../pages/animals/class9/WaterBuffalo';
import WildYakPage from '../pages/animals/class9/WildYak';
import LionPage from '../pages/animals/class9/Lion';
import FastShouldering from '../pages/hunter/perks/FastShouldering';
import FocusedShot from '../pages/hunter/perks/FocusedShot';
import FullDraw from '../pages/hunter/perks/FullDraw';
import IncreasedConfidence from '../pages/hunter/perks/IncreasedConfidence';
import LightningHands from '../pages/hunter/perks/LightningHands';
import LikeAPro from '../pages/hunter/perks/LikeAPro';
import MoveNShoot from '../pages/hunter/perks/MoveNShoot';
import MuscleMemory from '../pages/hunter/perks/MuscleMemory';
import PumpingIron from '../pages/hunter/perks/Pumpingiron';
import QuickDraw from '../pages/hunter/perks/QuickDraw';
import QuickFeet from '../pages/hunter/perks/QuickFeet';
import Ranger from '../pages/hunter/perks/Ranger';
import RecoilManagment from '../pages/hunter/perks/RecoilManagment';
import Recycle from '../pages/hunter/perks/Recycle';
import SprintNLoad from '../pages/hunter/perks/SprintNLoad';
import SteadyHands from '../pages/hunter/perks/SteadyHands';
import SurvivalInstinct from '../pages/hunter/perks/SurvivalInstinct';
import Traceshot from '../pages/hunter/perks/Traceshot';
import Windage from '../pages/hunter/perks/Windage';
import Zeroing from '../pages/hunter/perks/Zeroing';
import StartleCall from '../pages/hunter/skills/StartleCall';
import HeartRatePage from '../pages/animals/HeartRate';
import HarvestScreen from '../pages/animals/HarvestScreen';
import AnimalBehaviour from '../pages/animals/AnimalBehaviour';
import HuntingPressure from '../pages/animals/HuntingPressure';
import DecoysPage from '../pages/lures/Decoys';
import Multiplayer from '../pages/multiplayer/Multiplayer';
import LuresPage from '../pages/lures/Lures';
import ScentsNames from '../pages/lures/ScentsNames';
import ScentDetail from '../pages/lures/ScentDetail';
import DecoysNames from '../pages/lures/DecoysNames';
import CallersNames from '../pages/lures/CallersNames';
import DecoyDetail from '../pages/lures/DecoyDetail';
import CallerDetail from '../pages/lures/CallerDetail';
import ATV from '../pages/atv/ATV';
import DLC from '../pages/dlc/DLC';
import OutpostsPage from '../pages/outposts/Outposts';
import TentsPage from '../pages/hunting-structures/Elite2Tent';
import ExperiencePoints from '../pages/hunter/ExpierencePoints';
import CashPage from '../pages/cash/Cash';
import CollectablesPage from '../pages/collectibles/Collectables';
import GroundblindsPage from '../pages/hunting-structures/Groundblinds';
import LayoutBlindsPage from '../pages/hunting-structures/layoutBlinds';
import WaterfowlBlindsPage from '../pages/hunting-structures/waterfowlBlinds';
import HuntingStructuresPage from '../pages/hunting-structures/HuntingStructures';
import TripodStandsPage from '../pages/hunting-structures/TripodStands';
import VisibilityPage from '../pages/hunter/Visibility';
import MissionsPage from '../pages/missions/Missions';
import RatingPage from '../pages/animals/Rating';
import GreatOnes from '../pages/animals/GreatOnes';
import TruScore from '../pages/animals/TruRACS';
import Score from '../pages/loadouts/weapons/Score';
import DoggyBiscuits from '../pages/consumable/Consumables/DoggyBiscuits';
import FirstAidKit from '../pages/consumable/Consumables/FirstAidKit';
import ScentEliminator from '../pages/consumable/Consumables/ScentEliminator';
import ArcticHuntingOutfit from '../pages/consumable/clothing/ArcticHuntingOutfit';
import AustralianBushwearOutfit from '../pages/consumable/clothing/AustralianBushwearOutfit';
import BlazingOrangeOutfit from '../pages/consumable/clothing/BlazingOrangeOutfit';
import DryGrassGhillieSuit from '../pages/consumable/clothing/DryGrassGhillieSuit';
import DryLeavesGhillieSuit from '../pages/consumable/clothing/DryLeavesGhillieSuit';
import ForestCamoOutfit from '../pages/consumable/clothing/ForestCamoOutfit';
import OliveOutfit from '../pages/consumable/clothing/OliveOutfit';
import PatagonianGauchoOutfit from '../pages/consumable/clothing/PatagonianGauchoOutfit';
import RemiWarrenOutfit from '../pages/consumable/clothing/RemiWarrenOutfit';
import SavannaWardenOutfit from '../pages/consumable/clothing/SavannaWardenOutfit';
import TundraGhillieSuit from '../pages/consumable/clothing/TundraGhillieSuit';
import WoodlandGhillieSuit from '../pages/consumable/clothing/WoodlandGhillieSuit';
import Clothing from '../pages/consumable/clothing/Clothing';
import Backpack from '../pages/backpack/Backpack';
import BinocularsPage from '../pages/binoculars/Binoculars';
import AchievementsPage from '../pages/achievements/Achievements';
import WindPage from '../pages/hunter/Wind';
import LookoutPointsPage from '../pages/outposts/LookoutPoints';
import HuntClubPage from '../pages/huntClub/HuntClub';
import PointsOfInterestPage from '../pages/huntClub/pointsOfInterest';
import LandmarksPage from '../pages/huntClub/Landmarks';
import WhistlingPage from '../pages/hunter/Whistling';
import HuntingLodgePage from '../pages/huntClub/HuntingLodge';
import MultiTrophyMountsPage from '../pages/huntClub/MultiTrophyMounts';
import CanadaGoosePage from '../pages/animals/class1/CanadaGoose';
import GreylagGoosePage from '../pages/animals/class1/GreylagGoose';
import MagpieGoosePage from '../pages/animals/class1/MagpieGoose';
import TundraBeanGoosePage from '../pages/animals/class1/TundraBeanGoose';
import SnowGoosePage from '../pages/animals/class1/SnowGoose';
import EurasianWigeonPage from '../pages/animals/class1/EurasianWigeon';
import GoldeneyePage from '../pages/animals/class1/Goldeneye';
import GreenWingedTealPage from '../pages/animals/class1/GreenWingedTeal';
import WoodDuckPage from '../pages/animals/class1/WoodDuck';
import HarlequinDuckPage from '../pages/animals/class1/HarlequinDuck';
import FerruginousDuckPage from '../pages/animals/class1/FerruginousDuck';
import CinnamonTealPage from '../pages/animals/class1/CinnamonTeal';
import TuftedDuckPage from '../pages/animals/class1/TuftedDuck';
import MallardPage from '../pages/animals/class1/Mallard';
import GadwallPage from '../pages/animals/class1/Gadwall';
import EurasianTealPage from '../pages/animals/class1/EurasianTeal';
import NorthernPintailPage from '../pages/animals/class1/NorthernPintail';
import HazelGrousePage from '../pages/animals/class1/HazelGrouse';
import DuskyGrousePage from '../pages/animals/class1/DuskyGrouse';
import BlackGrousePage from '../pages/animals/class1/BlackGrouse';
import BobwhiteQuailPage from '../pages/animals/class1/BobwhiteQuail';
import StubbleQuailPage from '../pages/animals/class1/StubbleQuail';
import RockPtarmiganPage from '../pages/animals/class1/RockPtarmigan';
import WesternCapercailliePage from '../pages/animals/class1/WesternCapercaillie';
import RedGrousePage from '../pages/animals/class1/RedGrouse';
import WillowPtarmiganPage from '../pages/animals/class1/WillowPtarmigan';
import EasternWildTurkeyPage from '../pages/animals/class1/EasternWildTurkey';
import MerriamTurkeyPage from '../pages/animals/class1/MerriamTurkey';
import EurasianWoodcockPage from '../pages/animals/class1/EurasianWoodcock';
import RingNeckedPheasantPage from '../pages/animals/class1/RingNeckedPheasant';
import RioGrandeTurkeyPage from '../pages/animals/class1/RioGrandeTurkey';
import EasternCottontailRabbitPage from '../pages/animals/class1/EasternCottontailRabbit';
import AntelopeJackrabbitPage from '../pages/animals/class1/AntelopeJackrabbit';
import EuropeanHarePage from '../pages/animals/class1/EuropeanHare';
import EuropeanRabbitPage from '../pages/animals/class1/EuropeanRabbit';
import MountainHarePage from '../pages/animals/class1/MountainHare';
import ScrubHarePage from '../pages/animals/class1/ScrubHare';
import WhiteTailedJackrabbitPage from '../pages/animals/class1/WhiteTailedJackrabbit';
import TahrPage from '../pages/animals/class4/Tahr';
import SnowLeopardPage from '../pages/animals/class4/SnowLeopard';
import EasternGrayKangarooPage from '../pages/animals/class4/EasternGrayKangaroo';
import WoollyHarePage from '../pages/animals/class1/WoolyHare';
import AmericanMinkPage from '../pages/animals/class1/AmericanMink';
import EurasianPineMartenPage from '../pages/animals/class1/EurasianPineMarten';
import NorthernRedMuntjacPage from '../pages/animals/class2/NorthernRedMuntjac';
import RaccoonDogPage from '../pages/animals/class2/RaccoonDog';
import SibereanMuskDeerPage from '../pages/animals/class2/SibereanMuskDeer';
import CoyotePage from '../pages/animals/class2/Coyote';
import SideStripedJackalPage from '../pages/animals/class2/SideStripedJackal';
import GrayFoxPage from '../pages/animals/class2/GrayFox';
import RedFoxPage from '../pages/animals/class2/RedFox';
import TibetanFoxPage from '../pages/animals/class2/TibetanFox';
import CommonRaccoonPage from '../pages/animals/class2/CommonRaccoon';
import EuropeanBadgerPage from '../pages/animals/class2/EuropeanBadger';
import BobcatPage from '../pages/animals/class2/Bobcat';
import MexicanBobcatPage from '../pages/animals/class2/MexicanBobcat';
import NorthAmericanBeaverPage from '../pages/animals/class2/NorthAmericanBeaver';
import AxisDeerPage from '../pages/animals/class3/AxisDeer';
import HogDeerPage from '../pages/animals/class3/HogDeer';
import RoeDeerPage from '../pages/animals/class3/RoeDeer';
import BlackbuckPage from '../pages/animals/class3/Blackbuck';
import SpringbokPage from '../pages/animals/class3/Springbok';
import PronghornPage from '../pages/animals/class3/Pronghorn';
import FeralGoatPage from '../pages/animals/class3/FeralGoat';
import ChamoisPage from '../pages/animals/class3/Chamois';
import EurasianLynxPage from '../pages/animals/class3/EurasianLynx';
import CollaredPeccaryPage from '../pages/animals/class3/CollaredPeccary';
import BlacktailDeerPage from '../pages/animals/class4/BlacktailDeer';
import WhitetailDeerPage from '../pages/animals/class4/WhitetailDeer';
import FallowDeerPage from '../pages/animals/class4/FallowDeer';
import BlueSheepPage from '../pages/animals/class4/BlueSheep';
import SikaDeerPage from '../pages/animals/class4/SikaDeer';
import LesserKuduPage from '../pages/animals/class4/LesserKudu';
import MountainGoatPage from '../pages/animals/class4/MountainGoat';
import BeceiteIbexPage from '../pages/animals/class4/BeceiteIbex';
import GredosIbexPage from '../pages/animals/class4/GredosIbex';
import RondaIbexPage from '../pages/animals/class4/RondaIbex';
import SoutheasternSpanishIbexPage from '../pages/animals/class4/SoutheasternSpanishIbex';
import IberianMouflonPage from '../pages/animals/class4/IberianMouflon';
import WarthogPage from '../pages/animals/class4/Warthog';
import SambarPage from '../pages/animals/class7/Sambar';
import RockyMountainElkPage from '../pages/animals/class7/RockyMountainElk';
import RooseveltElkPage from '../pages/animals/class7/RooseveltElk';
import ManitobanElkPage from '../pages/animals/class7/ManitobanElk';
import BlackBearPage from '../pages/animals/class7/BlackBear';
import EurasianBrownBearPage from '../pages/animals/class7/EurasianBrownBear';
import MoosePage from '../pages/animals/class8/Moose';
import AmericanAlligatorPage from '../pages/animals/class7/AmericanAlligator';
import GrizzlyBearPage from '../pages/animals/class8/GrizzlyBear';
import SaltwaterCrocodilePage from '../pages/animals/class8/SaltwaterCrocodile';
import JavanRusaPage from '../pages/animals/class5/JavanRusa';
import WildBoarPage from '../pages/animals/class5/WildBoar';
import FeralPigPage from '../pages/animals/class5/FeralPig';
import WildHogPage from '../pages/animals/class5/WildHog';
import MuleDeerPage from '../pages/animals/class5/MuleDeer';
import DesertBighornSheepPage from '../pages/animals/class5/DesertBighornSheep';
import RockyMountainBighornSheepPage from '../pages/animals/class5/RockyMountainBighornSheep';
import MountainLionPage from '../pages/animals/class5/MountainLion';
import PumaPage from '../pages/animals/class5/Puma';
import RedDeerPage from '../pages/animals/class6/RedDeer';
import MountainReindeerPage from '../pages/animals/class6/MountainReindeer';
import GrantCaribouPage from '../pages/animals/class6/GrantCaribou';
import WoodlandCaribouPage from '../pages/animals/class6/WoodlandCaribou';
import BlueWildebeestPage from '../pages/animals/class6/BlueWildebeest';
import GemsbokPage from '../pages/animals/class6/Gemsbok';
import BarasinghaPage from '../pages/animals/class6/Barasingha';
import NilgaiPage from '../pages/animals/class6/Nilgai';
import GrayWolfPage from '../pages/animals/class6/GrayWolf';
import IberianWolfPage from '../pages/animals/class6/IberianWolf';
import BantengPage from '../pages/animals/class9/Banteng';
import BengalTigerPage from '../pages/animals/class9/BengalTiger';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/backpack" element={<Backpack />} />
      <Route path="/binoculars" element={<BinocularsPage />} />
      <Route path="/map-concept" element={<MapPage />} />
      <Route path="/hunt-club" element={<HuntClubPage />} />
      <Route path="/points-of-interest" element={<PointsOfInterestPage />} />
      <Route path="/landmarks" element={<LandmarksPage />} />
      <Route path="/whistling" element={<WhistlingPage />} />
      <Route path="/hunting-lodge" element={<HuntingLodgePage />} />
      <Route path="/multi-mounts" element={<MultiTrophyMountsPage />} />
      <Route path="/maps" element={<MapsList />} />
      <Route path="/maps/hirschfelden" element={<HirschfeldenHuntingReserve />} />
      <Route path="/maps/layton-lake" element={<LaytonLakeDistrict />} />
      <Route path="/maps/vurhonga" element={<VurhongaSavanna />} />
      <Route path="/maps/medved-taiga" element={<MedvedTaiga />} />
      <Route path="/maps/:regionId" element={<RegionPage />} />
      <Route path="/maps/:regionId/:subregionId" element={<SubregionPage />} />
      <Route path="/weapons" element={<WeaponsList />} />
      <Route path="/weapons/rifles/223-docent" element={<Docent223 />} />
      <Route path="/weapons/rifles/270-huntsman" element={<Huntsman270 />} />
      <Route path="/weapons/rifles/7mm-regent-magnum" element={<Regent7mm />} />
      <Route path="/weapons/rifles/ranger-243" element={<Ranger243 />} />
      <Route path="/weapons/rifles/rangemaster-338" element={<Rangemaster338 />} />
      <Route path="/weapons/rifles/whitlock-model-86" element={<WhitlockModel86 />} />
      <Route path="/weapons/rifles/coachmate-lever-45-70" element={<CoachmateLever4570 />} />
      <Route path="/weapons/rifles/virant-22lr" element={<Virant22LR />} />
      <Route path="/weapons/rifles/king-470db" element={<King470DB />} />
      <Route path="/weapons/rifles/solokhin-mn1890" element={<SolokhinMN1890 />} />
      <Route path="/weapons/rifles/300-canning-magnum" element={<CanningMagnum300 />} />
      <Route path="/weapons/rifles/vasquez-cyclone-45" element={<VasquezCyclone45 />} />
      <Route path="/weapons/rifles/eckers-30-06" element={<Eckers3060 />} />
      <Route path="/weapons/rifles/martensson-6-5mm" element={<Martensson65 />} />
      <Route path="/weapons/rifles/hudzik-50-caplock" element={<Hudzik50Caplock />} />
      <Route path="/weapons/rifles/m1-iwaniec" element={<M1Iwaniec />} />
      <Route path="/weapons/rifles/fl-sporter-303" element={<FLSporter303 />} />
      <Route path="/weapons/rifles/kullman-22h" element={<Kullman22h />} />
      <Route path="/weapons/rifles/zarza-15-22lr" element={<Zarza1522LR />} />
      <Route path="/weapons/rifles/zarza-15-223" element={<Zarza15223 />} />
      <Route path="/weapons/rifles/zarza-10-308" element={<Zarza10308 />} />
      <Route path="/weapons/rifles/curman-50-inline" element={<Curman50Inline />} />
      <Route path="/weapons/rifles/tsurugi-lrr-338" element={<TsurugiLRR338 />} />
      <Route path="/weapons/rifles/malmer-7mm-magnum" element={<Malmer7mmMagnum />} />
      <Route path="/weapons/rifles/johansson-450" element={<Johansson450 />} />
      <Route path="/weapons/rifles/Johansson450" element={<Johansson450 />} />
      <Route path="/weapons/Johansson_450" element={<Johansson450 />} />
      <Route path="/weapons/rifles/johansson-450/*" element={<Johansson450 />} />
      <Route path="/weapons/rifles/grandhare-rifle" element={<GrandhareRifle />} />
      <Route path="/weapons/rifles/GrandhareRifle" element={<GrandhareRifle />} />
      <Route path="/weapons/Grandhare_Rifle" element={<GrandhareRifle />} />
      <Route path="/weapons/rifles/gandhare-rifle" element={<GrandhareRifle />} />
      <Route path="/weapons/rifles/GandhareRifle" element={<GrandhareRifle />} />
      <Route path="/weapons/Gandhare_Rifle" element={<GrandhareRifle />} />
      <Route path="/weapons/rifles/fors-elite-300" element={<ForsElite300 />} />
      <Route path="/weapons/rifles/hansson-30-06" element={<Hansson3006 />} />
      <Route path="/weapons/rifles/perry-308" element={<Perry308 />} />
      <Route path="/weapons/rifles/quist-reaper-7-62x39" element={<QuistReaper762x39 />} />
      <Route path="/weapons/shotguns/cacciatore-12g" element={<Cacciatore12G />} />
      <Route path="/weapons/shotguns/caversham-steward-12g" element={<CavershamSteward12G />} />
      <Route path="/weapons/shotguns/couso-model-1897" element={<CousoModel1897 />} />
      <Route path="/weapons/shotguns/strecker-sxs-20g" element={<StreckerSxS20G />} />
      <Route path="/weapons/shotguns/nordin-20sa" element={<Nordin20SA />} />
      <Route path="/weapons/shotguns/grelck-drilling-rifle" element={<GrelckDrillingRifle />} />
      <Route path="/weapons/shotguns/miller-model-1891" element={<MillerModel1891 />} />
      <Route path="/weapons/shotguns/strandberg-10sa" element={<Strandberg10SA />} />
      <Route path="/weapons/shotguns/gopi-10g-grand" element={<Gopi10GGrand />} />
      <Route path="/weapons/bows/alexander-longbow" element={<AlexanderLongbow />} />
      <Route path="/weapons/bows/bearclaw-lite-cb-60" element={<BearclawLiteCB60 />} />
      <Route path="/weapons/bows/crosspoint-cb-165" element={<CrosspointCB165 />} />
      <Route path="/weapons/bows/hawk-edge-cb-70" element={<HawkEdgeCB70 />} />
      <Route path="/weapons/bows/houyi-recurve-bow" element={<HouyiRecurveBow />} />
      <Route path="/weapons/bows/koter-cb-65" element={<KoterCB65 />} />
      <Route path="/weapons/bows/razorback-lite-cb-60" element={<RazorbackLiteCB60 />} />
      <Route path="/weapons/bows/stenberg-takedown-recurve-bow" element={<StandbergTakedownRecurveBow />} />
      <Route path="/weapons/handguns/243-r-cuomo" element={<RCuomo243 />} />
      <Route path="/weapons/handguns/44-panther-magnum" element={<PantherMagnum44 />} />
      <Route path="/weapons/handguns/45-rolleston" element={<Rolleston45 />} />
      <Route path="/weapons/handguns/10mm-davani" element={<Davani10mm />} />
      <Route path="/weapons/handguns/andersson-22lr" element={<Andersson22LR />} />
      <Route path="/weapons/handguns/focoso-357" element={<Focoso357 />} />
      <Route path="/weapons/handguns/mangiafico-410-45-colt" element={<Mangiafico41045Colt />} />
      <Route path="/weapons/handguns/rhino-454" element={<Rhino454 />} />
      <Route path="/weapons/handguns/sundberg-454" element={<Sundberg454 />} />
      <Route path="/weapons/handguns/45-70-jernberg-superior" element={<Jernberg4570Superior />} />
      <Route path="/weapons/rifles/:weaponId" element={<WeaponDetail />} />
      <Route path="/weapons/rifles/moradi-model-1894" element={<MoradiModel1894 />} />
      <Route path="/weapons/rifles/MoradiModel1894" element={<MoradiModel1894 />} />
      <Route path="/weapons/Moradi_Model_1894" element={<MoradiModel1894 />} />
      <Route path="/weapons/rifles/valgarda-375" element={<Valgarda375 />} />
      <Route path="/weapons/rifles/Valgarda375" element={<Valgarda375 />} />
      <Route path="/weapons/Valgarda_375" element={<Valgarda375 />} />
      <Route path="/weapons/rifles/vallgarda-375" element={<Valgarda375 />} />
      <Route path="/weapons/rifles/Vallgarda375" element={<Valgarda375 />} />
      <Route path="/weapons/Vallgarda_375" element={<Valgarda375 />} />
      <Route path="/weapons/rifles/arzyna-300-mag-tactical" element={<Arzyna300MagTactical />} />
      <Route path="/weapons/rifles/Arzyna300MagTactical" element={<Arzyna300MagTactical />} />
      <Route path="/weapons/Arzyna_300_Mag_Tactical" element={<Arzyna300MagTactical />} />
      <Route path="/weapons/rifles/arzyna-300-mag-tactical/*" element={<Arzyna300MagTactical />} />
      {/* Explicit non-wildcard route to avoid unmatched-route warnings */}
      <Route path="/weapons/rifles/olsson-model-23-308" element={<OlssonModel23308 />} />
      <Route path="/weapons/rifles/olsson-model-23-308/*" element={<OlssonModel23308 />} />
      <Route path="/weapons/rifles/zagan-varminter-22-250" element={<ZaganVarminter22250 />} />
      <Route path="/weapons/comparison" element={<WeaponsComparison />} />
      <Route path="/weapons/:weaponId" element={<WeaponDetail />} />
      <Route path="/weapons/ammo" element={<AmmunitionPage />} />
      <Route path="/weapons/ammo/:ammoId" element={<AmmoDetail />} />
      <Route path="/weapons/sights" element={<SightsPage />} />
      <Route path="/weapons/sights/:sightId" element={<SightDetail />} />
      <Route path="/loadouts/callers" element={<CallersPage />} />
      <Route path="/loadouts/scents" element={<ScentsPage />} />
      <Route path="/loadouts/placeables" element={<PlaceablesPage />} />
      <Route path="/lures" element={<LuresPage />} />
      <Route path="/lures/scents/names" element={<ScentsNames />} />
      <Route path="/lures/scents/:scentId" element={<ScentDetail />} />
      <Route path="/lures/decoys/names" element={<DecoysNames />} />
      <Route path="/lures/decoys/:decoyId" element={<DecoyDetail />} />
      <Route path="/lures/callers/:callerId" element={<CallerDetail />} />
      <Route path="/lures/callers/names" element={<CallersNames />} />
      <Route path="/animals" element={<AnimalsListPage />} />
      <Route path="/animals/fur-types" element={<FurTypesPage />} />
      <Route path="/animals/need-zones" element={<NeedZones />} />
      <Route path="/animals/tracks" element={<TracksPage />} />
      <Route path="/animals/calls" element={<CallsPage />} />
      <Route path="/animals/spotting" element={<SpottingPage />} />
      <Route path="/animals/noise" element={<NoisePage />} />
      <Route path="/animals/scent" element={<ScentPage />} />
      <Route path="/animals/heart-rate" element={<HeartRatePage />} />
      <Route path="/animals/integrity" element={<IntegrityPage />} />
      <Route path="/animals/wind" element={<WindPage />} />
      <Route path="/animals/Canada-Goose" element={<CanadaGoosePage />} />
      <Route path="/animals/Greylag-Goose" element={<GreylagGoosePage />} />
      <Route path="/animals/Magpie-Goose" element={<MagpieGoosePage />} />
      <Route path="/animals/Tundra-Bean-Goose" element={<TundraBeanGoosePage />} />
      <Route path="/animals/Snow-Goose" element={<SnowGoosePage />} />
      <Route path="/animals/Eurasian-Wigeon" element={<EurasianWigeonPage />} />
      <Route path="/animals/Goldeneye" element={<GoldeneyePage />} />
      <Route path="/animals/GreenWingedTeal" element={<GreenWingedTealPage />} />
      <Route path="/animals/Green-Winged-Teal" element={<GreenWingedTealPage />} />
      <Route path="/animals/HarlequinDuck" element={<HarlequinDuckPage />} />
      <Route path="/animals/Harlequin-Duck" element={<HarlequinDuckPage />} />
      <Route path="/animals/FerruginousDuck" element={<FerruginousDuckPage />} />
      <Route path="/animals/Ferruginous-Duck" element={<FerruginousDuckPage />} />
      <Route path="/animals/TuftedDuck" element={<TuftedDuckPage />} />
      <Route path="/animals/Tufted-Duck" element={<TuftedDuckPage />} />
      <Route path="/animals/Mallard" element={<MallardPage />} />
      <Route path="/animals/WoodDuck" element={<WoodDuckPage />} />
      <Route path="/animals/Wood-Duck" element={<WoodDuckPage />} />
      <Route path="/animals/CinnamonTeal" element={<CinnamonTealPage />} />
      <Route path="/animals/Cinnamon-Teal" element={<CinnamonTealPage />} />
      <Route path="/animals/EurasianTeal" element={<EurasianTealPage />} />
      <Route path="/animals/Eurasian-Teal" element={<EurasianTealPage />} />
      <Route path="/animals/NorthernPintail" element={<NorthernPintailPage />} />
      <Route path="/animals/Northern-Pintail" element={<NorthernPintailPage />} />
      <Route path="/animals/EurasianWoodcock" element={<EurasianWoodcockPage />} />
      <Route path="/animals/Eurasian-Woodcock" element={<EurasianWoodcockPage />} />
      <Route path="/animals/AntelopeJackrabbit" element={<AntelopeJackrabbitPage />} />
      <Route path="/animals/EuropeanHare" element={<EuropeanHarePage />} />
      <Route path="/animals/European-Hare" element={<EuropeanHarePage />} />
      <Route path="/animals/EuropeanRabbit" element={<EuropeanRabbitPage />} />
      <Route path="/animals/European-Rabbit" element={<EuropeanRabbitPage />} />
      <Route path="/animals/MountainHare" element={<MountainHarePage />} />
      <Route path="/animals/Mountain-Hare" element={<MountainHarePage />} />
      <Route path="/animals/ScrubHare" element={<ScrubHarePage />} />
      <Route path="/animals/Scrub-Hare" element={<ScrubHarePage />} />
      <Route path="/animals/WhiteTailedJackrabbit" element={<WhiteTailedJackrabbitPage />} />
      <Route path="/animals/White-tailed-Jackrabbit" element={<WhiteTailedJackrabbitPage />} />
      <Route path="/animals/Tahr" element={<TahrPage />} />
      <Route path="/animals/Himalayan-Tahr" element={<TahrPage />} />
      <Route path="/animals/SnowLeopard" element={<SnowLeopardPage />} />
      <Route path="/animals/Snow-Leopard" element={<SnowLeopardPage />} />
      <Route path="/animals/EasternGrayKangaroo" element={<EasternGrayKangarooPage />} />
      <Route path="/animals/Eastern-Gray-Kangaroo" element={<EasternGrayKangarooPage />} />
      <Route path="/animals/WoollyHare" element={<WoollyHarePage />} />
      <Route path="/animals/Woolly-Hare" element={<WoollyHarePage />} />
      <Route path="/animals/AmericanMink" element={<AmericanMinkPage />} />
      <Route path="/animals/American-Mink" element={<AmericanMinkPage />} />
      <Route path="/animals/EurasianPineMarten" element={<EurasianPineMartenPage />} />
      <Route path="/animals/Eurasian-Pine-Marten" element={<EurasianPineMartenPage />} />
      <Route path="/animals/EasternCottontailRabbit" element={<EasternCottontailRabbitPage />} />
      <Route path="/animals/Eastern-Cottontail-Rabbit" element={<EasternCottontailRabbitPage />} />
      <Route path="/animals/Antelope-Jackrabbit" element={<AntelopeJackrabbitPage />} />
      <Route path="/animals/NorthernRedMuntjac" element={<NorthernRedMuntjacPage />} />
      <Route path="/animals/Northern-Red-Muntjac" element={<NorthernRedMuntjacPage />} />
      <Route path="/animals/RaccoonDog" element={<RaccoonDogPage />} />
      <Route path="/animals/Raccoon-Dog" element={<RaccoonDogPage />} />
      <Route path="/animals/SibereanMuskDeer" element={<SibereanMuskDeerPage />} />
      <Route path="/animals/Siberian-Musk-Deer" element={<SibereanMuskDeerPage />} />
      <Route path="/animals/SideStripedJackal" element={<SideStripedJackalPage />} />
      <Route path="/animals/Side-striped-Jackal" element={<SideStripedJackalPage />} />
      <Route path="/animals/Coyote" element={<CoyotePage />} />
      <Route path="/animals/GrayFox" element={<GrayFoxPage />} />
      <Route path="/animals/Gray-Fox" element={<GrayFoxPage />} />
      <Route path="/animals/EuropeanBadger" element={<EuropeanBadgerPage />} />
      <Route path="/animals/European-Badger" element={<EuropeanBadgerPage />} />
      <Route path="/animals/NorthAmericanBeaver" element={<NorthAmericanBeaverPage />} />
      <Route path="/animals/North-American-Beaver" element={<NorthAmericanBeaverPage />} />
      <Route path="/animals/AxisDeer" element={<AxisDeerPage />} />
      <Route path="/animals/Axis-Deer" element={<AxisDeerPage />} />
      <Route path="/animals/HogDeer" element={<HogDeerPage />} />
      <Route path="/animals/Hog-Deer" element={<HogDeerPage />} />
      <Route path="/animals/RoeDeer" element={<RoeDeerPage />} />
      <Route path="/animals/Roe-Deer" element={<RoeDeerPage />} />
      <Route path="/animals/RedDeer" element={<RedDeerPage />} />
      <Route path="/animals/Red-Deer" element={<RedDeerPage />} />
      <Route path="/animals/WoodlandCaribou" element={<WoodlandCaribouPage />} />
      <Route path="/animals/Woodland-Caribou" element={<WoodlandCaribouPage />} />
      <Route path="/animals/BlueWildebeest" element={<BlueWildebeestPage />} />
      <Route path="/animals/Blue-Wildebeest" element={<BlueWildebeestPage />} />
      <Route path="/animals/Gemsbok" element={<GemsbokPage />} />
      <Route path="/animals/Gemsbok" element={<GemsbokPage />} />
      <Route path="/animals/Barasingha" element={<BarasinghaPage />} />
      <Route path="/animals/Barasingha" element={<BarasinghaPage />} />
      <Route path="/animals/Nilgai" element={<NilgaiPage />} />
      <Route path="/animals/Nilgai" element={<NilgaiPage />} />
      <Route path="/animals/GrayWolf" element={<GrayWolfPage />} />
      <Route path="/animals/Gray-Wolf" element={<GrayWolfPage />} />
      <Route path="/animals/IberianWolf" element={<IberianWolfPage />} />
      <Route path="/animals/Iberian-Wolf" element={<IberianWolfPage />} />
      <Route path="/animals/BlacktailDeer" element={<BlacktailDeerPage />} />
      <Route path="/animals/Blacktail-Deer" element={<BlacktailDeerPage />} />
      <Route path="/animals/WhitetailDeer" element={<WhitetailDeerPage />} />
      <Route path="/animals/Whitetail-Deer" element={<WhitetailDeerPage />} />
      <Route path="/animals/FallowDeer" element={<FallowDeerPage />} />
      <Route path="/animals/Fallow-Deer" element={<FallowDeerPage />} />
      <Route path="/animals/Warthog" element={<WarthogPage />} />
      <Route path="/animals/Warthog" element={<WarthogPage />} />
      <Route path="/animals/Sambar" element={<SambarPage />} />
      <Route path="/animals/Sambar-Deer" element={<SambarPage />} />
      <Route path="/animals/Banteng" element={<BantengPage />} />
      <Route path="/animals/BengalTiger" element={<BengalTigerPage />} />
      <Route path="/animals/Bengal-Tiger" element={<BengalTigerPage />} />
      <Route path="/animals/CapeBuffalo" element={<CapeBuffaloPage />} />
      <Route path="/animals/Cape-Buffalo" element={<CapeBuffaloPage />} />
      <Route path="/animals/EuropeanBison" element={<EuropeanBisonPage />} />
      <Route path="/animals/European-Bison" element={<EuropeanBisonPage />} />
      <Route path="/animals/PlainsBison" element={<PlainsBisonPage />} />
      <Route path="/animals/Plains-Bison" element={<PlainsBisonPage />} />
      <Route path="/animals/WoodBison" element={<WoodBisonPage />} />
      <Route path="/animals/Wood-Bison" element={<WoodBisonPage />} />
      <Route path="/animals/WaterBuffalo" element={<WaterBuffaloPage />} />
      <Route path="/animals/Water-Buffalo" element={<WaterBuffaloPage />} />
      <Route path="/animals/WildYak" element={<WildYakPage />} />
      <Route path="/animals/Wild-Yak" element={<WildYakPage />} />
      <Route path="/animals/Lion" element={<LionPage />} />
      <Route path="/animals/BlackBear" element={<BlackBearPage />} />
      <Route path="/animals/Black-Bear" element={<BlackBearPage />} />
      <Route path="/animals/GrizzlyBear" element={<GrizzlyBearPage />} />
      <Route path="/animals/Grizzly-Bear" element={<GrizzlyBearPage />} />
      <Route path="/animals/SaltwaterCrocodile" element={<SaltwaterCrocodilePage />} />
      <Route path="/animals/Saltwater-Crocodile" element={<SaltwaterCrocodilePage />} />
      <Route path="/animals/AmericanAlligator" element={<AmericanAlligatorPage />} />
      <Route path="/animals/American-Alligator" element={<AmericanAlligatorPage />} />
      <Route path="/animals/Moose" element={<MoosePage />} />
      <Route path="/animals/EurasianBrownBear" element={<EurasianBrownBearPage />} />
      <Route path="/animals/Eurasian-Brown-Bear" element={<EurasianBrownBearPage />} />
      <Route path="/animals/RockyMountainElk" element={<RockyMountainElkPage />} />
      <Route path="/animals/Rocky-Mountain-Elk" element={<RockyMountainElkPage />} />
      <Route path="/animals/RooseveltElk" element={<RooseveltElkPage />} />
      <Route path="/animals/Roosevelt-Elk" element={<RooseveltElkPage />} />
      <Route path="/animals/ManitobanElk" element={<ManitobanElkPage />} />
      <Route path="/animals/Manitoban-Elk" element={<ManitobanElkPage />} />
      <Route path="/animals/JavanRusa" element={<JavanRusaPage />} />
      <Route path="/animals/Javan-Rusa" element={<JavanRusaPage />} />
      <Route path="/animals/WildBoar" element={<WildBoarPage />} />
      <Route path="/animals/Wild-Boar" element={<WildBoarPage />} />
      <Route path="/animals/WildHog" element={<WildHogPage />} />
      <Route path="/animals/Wild-Hog" element={<WildHogPage />} />
      <Route path="/animals/FeralPig" element={<FeralPigPage />} />
      <Route path="/animals/Feral-Pig" element={<FeralPigPage />} />
      <Route path="/animals/MuleDeer" element={<MuleDeerPage />} />
      <Route path="/animals/Mule-Deer" element={<MuleDeerPage />} />
      <Route path="/animals/DesertBighornSheep" element={<DesertBighornSheepPage />} />
      <Route path="/animals/Desert-Bighorn-Sheep" element={<DesertBighornSheepPage />} />
      <Route path="/animals/RockyMountainBighornSheep" element={<RockyMountainBighornSheepPage />} />
      <Route path="/animals/Rocky-Mountain-Bighorn-Sheep" element={<RockyMountainBighornSheepPage />} />
      <Route path="/animals/MountainLion" element={<MountainLionPage />} />
      <Route path="/animals/Mountain-Lion" element={<MountainLionPage />} />
      <Route path="/animals/Puma" element={<PumaPage />} />
      <Route path="/animals/BlueSheep" element={<BlueSheepPage />} />
      <Route path="/animals/MountainReindeer" element={<MountainReindeerPage />} />
      <Route path="/animals/Mountain-Reindeer" element={<MountainReindeerPage />} />
      <Route path="/animals/GrantCaribou" element={<GrantCaribouPage />} />
      <Route path="/animals/Grant-Caribou" element={<GrantCaribouPage />} />
      <Route path="/animals/Blue-Sheep" element={<BlueSheepPage />} />
      <Route path="/animals/SikaDeer" element={<SikaDeerPage />} />
      <Route path="/animals/Sika-Deer" element={<SikaDeerPage />} />
      <Route path="/animals/LesserKudu" element={<LesserKuduPage />} />
      <Route path="/animals/Lesser-Kudu" element={<LesserKuduPage />} />
      <Route path="/animals/MountainGoat" element={<MountainGoatPage />} />
      <Route path="/animals/Mountain-Goat" element={<MountainGoatPage />} />
      <Route path="/animals/IberianMouflon" element={<IberianMouflonPage />} />
      <Route path="/animals/Iberian-Mouflon" element={<IberianMouflonPage />} />
      <Route path="/animals/BeceiteIbex" element={<BeceiteIbexPage />} />
      <Route path="/animals/Beceite-Ibex" element={<BeceiteIbexPage />} />
      <Route path="/animals/SoutheasternSpanishIbex" element={<SoutheasternSpanishIbexPage />} />
      <Route path="/animals/Southeastern-Spanish-Ibex" element={<SoutheasternSpanishIbexPage />} />
      <Route path="/animals/RondaIbex" element={<RondaIbexPage />} />
      <Route path="/animals/GredosIbex" element={<GredosIbexPage />} />
      <Route path="/animals/Gredos-Ibex" element={<GredosIbexPage />} />
      <Route path="/animals/Ronda-Ibex" element={<RondaIbexPage />} />
      <Route path="/animals/Blackbuck" element={<BlackbuckPage />} />
      <Route path="/animals/Black-Buck" element={<BlackbuckPage />} />
      <Route path="/animals/Springbok" element={<SpringbokPage />} />
      <Route path="/animals/Spring-Bok" element={<SpringbokPage />} />
      <Route path="/animals/Pronghorn" element={<PronghornPage />} />
      <Route path="/animals/Prong-Horn" element={<PronghornPage />} />
      <Route path="/animals/FeralGoat" element={<FeralGoatPage />} />
      <Route path="/animals/Feral-Goat" element={<FeralGoatPage />} />
      <Route path="/animals/Chamois" element={<ChamoisPage />} />
      <Route path="/animals/CollaredPeccary" element={<CollaredPeccaryPage />} />
      <Route path="/animals/Collared-Peccary" element={<CollaredPeccaryPage />} />
      <Route path="/animals/EurasianLynx" element={<EurasianLynxPage />} />
      <Route path="/animals/Eurasian-Lynx" element={<EurasianLynxPage />} />
      <Route path="/animals/RedFox" element={<RedFoxPage />} />
      <Route path="/animals/Red-Fox" element={<RedFoxPage />} />
      <Route path="/animals/TibetanFox" element={<TibetanFoxPage />} />
      <Route path="/animals/Tibetan-Fox" element={<TibetanFoxPage />} />
      <Route path="/animals/CommonRaccoon" element={<CommonRaccoonPage />} />
      <Route path="/animals/Common-Raccoon" element={<CommonRaccoonPage />} />
      <Route path="/animals/MexicanBobcat" element={<MexicanBobcatPage />} />
      <Route path="/animals/Mexican-Bobcat" element={<MexicanBobcatPage />} />
      <Route path="/animals/Bobcat" element={<BobcatPage />} />
      <Route path="/animals/Bob-cat" element={<BobcatPage />} />
      <Route path="/animals/HazelGrouse" element={<HazelGrousePage />} />
      <Route path="/animals/Hazel-Grouse" element={<HazelGrousePage />} />
      <Route path="/animals/DuskyGrouse" element={<DuskyGrousePage />} />
      <Route path="/animals/Dusky-Grouse" element={<DuskyGrousePage />} />
      <Route path="/animals/RedGrouse" element={<RedGrousePage />} />
      <Route path="/animals/WesternCapercaillie" element={<WesternCapercailliePage />} />
      <Route path="/animals/Western-Capercaillie" element={<WesternCapercailliePage />} />
      <Route path="/animals/StubbleQuail" element={<StubbleQuailPage />} />
      <Route path="/animals/Stubble-Quail" element={<StubbleQuailPage />} />
      <Route path="/animals/BobwhiteQuail" element={<BobwhiteQuailPage />} />
      <Route path="/animals/Bobwhite-Quail" element={<BobwhiteQuailPage />} />
      <Route path="/animals/RingNeckedPheasant" element={<RingNeckedPheasantPage />} />
      <Route path="/animals/Ring-Necked-Pheasant" element={<RingNeckedPheasantPage />} />
      <Route path="/animals/Red-Grouse" element={<RedGrousePage />} />
        <Route path="/animals/RockPtarmigan" element={<RockPtarmiganPage />} />
        <Route path="/animals/Rock-Ptarmigan" element={<RockPtarmiganPage />} />
        <Route path="/animals/WillowPtarmigan" element={<WillowPtarmiganPage />} />
        <Route path="/animals/Willow-Ptarmigan" element={<WillowPtarmiganPage />} />
        <Route path="/animals/EasternWildTurkey" element={<EasternWildTurkeyPage />} />
        <Route path="/animals/Eastern-Wild-Turkey" element={<EasternWildTurkeyPage />} />
        <Route path="/animals/MerriamTurkey" element={<MerriamTurkeyPage />} />
        <Route path="/animals/Merriam-Turkey" element={<MerriamTurkeyPage />} />
        <Route path="/animals/RioGrandeTurkey" element={<RioGrandeTurkeyPage />} />
        <Route path="/animals/Rio-Grande-Turkey" element={<RioGrandeTurkeyPage />} />
      <Route path="/animals/Gadwall" element={<GadwallPage />} />
      <Route path="/animals/Gadwall" element={<GadwallPage />} />
      <Route path="/animals/BlackGrouse" element={<BlackGrousePage />} />
      <Route path="/animals/Black-Grouse" element={<BlackGrousePage />} />
      {/* Dynamic animal detail route removed — using explicit per-animal pages */}
      <Route path="/harvest" element={<HarvestScreen />} />
      <Route path="/animals/behaviour" element={<AnimalBehaviour />} />
      <Route path="/animals/hunting-pressure" element={<HuntingPressure />} />
      <Route path="/multiplayer" element={<Multiplayer />} />
      <Route path="/atv" element={<ATV />} />
      <Route path="/outposts" element={<OutpostsPage />} />
      <Route path="/lookout-points" element={<LookoutPointsPage />} />
      <Route path="/tents" element={<TentsPage />} />
      <Route path="/groundblinds" element={<GroundblindsPage />} />
      <Route path="/layout-blinds" element={<LayoutBlindsPage />} />
      <Route path="/waterfowl-blinds" element={<WaterfowlBlindsPage />} />
      <Route path="/hunting-structures" element={<HuntingStructuresPage />} />
      <Route path="/tripod-stands" element={<TripodStandsPage />} />
      <Route path="/visibility" element={<VisibilityPage />} />
      <Route path="/missions" element={<MissionsPage />} />
      <Route path="/achievements" element={<AchievementsPage />} />
      <Route path="/rating" element={<RatingPage />} />
      <Route path="/rating/great-ones" element={<GreatOnes />} />
      <Route path="/rating/score" element={<Score />} />
      <Route path="/truscore" element={<TruScore />} />
      <Route path="/experience" element={<ExperiencePoints />} />
      <Route path="/skills" element={<Skill />} />
      <Route path="/skills/connect-the-dots" element={<ConnectTheDots />} />
      <Route path="/skills/dazed-and-confused" element={<DazedAndConfused />} />
      <Route path="/skills/disturbed-vegetation" element={<DisturbedVegetation />} />
      <Route path="/skills/endurance" element={<Endurance />} />
      <Route path="/skills/fatal-attraction" element={<FatalAttraction />} />
      <Route path="/skills/haggle" element={<Haggle />} />
      <Route path="/skills/hardened" element={<Hardened />} />
      <Route path="/skills/hill-caller" element={<HillCaller />} />
      <Route path="/skills/im-only-happy-when-it-rains" element={<ImOnlyHappyWhenItRains />} />
      <Route path="/skills/impact-resistent" element={<ImpactResistent />} />
      <Route path="/skills/improvised-blind" element={<ImprovisedBlind />} />
      <Route path="/skills/innate-triangulation" element={<InnateTriangulation />} />
      <Route path="/skills/keen-eye" element={<KeenEye />} />
      <Route path="/skills/locate-tracks" element={<LocateTracks />} />
      <Route path="/skills/pack-mule" element={<PackMule />} />
      <Route path="/skills/scent-tinkerer" element={<ScentThinkerer />} />
      <Route path="/skills/sight-spotting" element={<SightSpotting />} />
      <Route path="/skills/spotting-knowledge" element={<SpottingKnowledge />} />
      <Route path="/skills/tag" element={<Tag />} />
      <Route path="/skills/the-more-the-merrier" element={<TheMoreTheMerrier />} />
      <Route path="/skills/track-knowledge" element={<TrackKnowledge />} />
      <Route path="/skills/weather-prediction" element={<WeatherPrediction />} />
      <Route path="/skills/whos-deer" element={<WhosDeer />} />
      <Route path="/skills/wind-prediction" element={<WindPrediction />} />
      <Route path="/perks" element={<Perks />} />
      <Route path="/perks/body-control" element={<BodyControl />} />
      <Route path="/perks/boomstick" element={<Boomstick />} />
      <Route path="/perks/both-eyes-open" element={<BothEyesOpen />} />
      <Route path="/perks/breath-control" element={<BreathControl />} />
      <Route path="/perks/fast-shouldering" element={<FastShouldering />} />
      <Route path="/perks/focused-shot" element={<FocusedShot />} />
      <Route path="/perks/full-draw" element={<FullDraw />} />
      <Route path="/perks/increased-confidence" element={<IncreasedConfidence />} />
      <Route path="/perks/lightning-hands" element={<LightningHands />} />
      <Route path="/perks/like-a-pro" element={<LikeAPro />} />
      <Route path="/perks/move-n-shoot" element={<MoveNShoot />} />
      <Route path="/perks/muscle-memory" element={<MuscleMemory />} />
      <Route path="/perks/pumping-iron" element={<PumpingIron />} />
      <Route path="/perks/quick-draw" element={<QuickDraw />} />
      <Route path="/perks/quick-feet" element={<QuickFeet />} />
      <Route path="/perks/ranger" element={<Ranger />} />
      <Route path="/perks/recoil-management" element={<RecoilManagment />} />
      <Route path="/perks/recycle" element={<Recycle />} />
      <Route path="/perks/sprint-and-load" element={<SprintNLoad />} />
      <Route path="/perks/steady-hands" element={<SteadyHands />} />
      <Route path="/perks/survival-instinct" element={<SurvivalInstinct />} />
      <Route path="/perks/traceshot" element={<Traceshot />} />
      <Route path="/perks/windage" element={<Windage />} />
      <Route path="/perks/zeroing" element={<Zeroing />} />
                <Route path="/skills/soft-feet" element={<SoftFeet />} />
          <Route path="/skills/startle-call" element={<StartleCall />} />
      <Route path="/cash" element={<CashPage />} />
      <Route path="/collectibles" element={<CollectablesPage />} />
      <Route path="/dlc" element={<DLC />} />
      <Route path="/lures/decoys" element={<DecoysPage />} />
      <Route path="/consumables/doggy-biscuits" element={<DoggyBiscuits />} />
      <Route path="/consumables/first-aid-kit" element={<FirstAidKit />} />
      <Route path="/consumables/scent-eliminator" element={<ScentEliminator />} />
      <Route path="/clothing/arctic-hunting-outfit" element={<ArcticHuntingOutfit />} />
      <Route path="/clothing/australian-bushwear-outfit" element={<AustralianBushwearOutfit />} />
      <Route path="/clothing/blazing-orange-outfit" element={<BlazingOrangeOutfit />} />
      <Route path="/clothing/dry-grass-ghillie-suit" element={<DryGrassGhillieSuit />} />
      <Route path="/clothing/dry-leaves-ghillie-suit" element={<DryLeavesGhillieSuit />} />
      <Route path="/clothing/forest-camo-outfit" element={<ForestCamoOutfit />} />
      <Route path="/clothing/olive-outfit" element={<OliveOutfit />} />
      <Route path="/clothing/patagonian-gaucho-outfit" element={<PatagonianGauchoOutfit />} />
      <Route path="/clothing/remi-warren-outfit" element={<RemiWarrenOutfit />} />
      <Route path="/clothing/savanna-warden-outfit" element={<SavannaWardenOutfit />} />
      <Route path="/clothing/tundra-ghillie-suit" element={<TundraGhillieSuit />} />
      <Route path="/clothing/woodland-ghillie-suit" element={<WoodlandGhillieSuit />} />
      <Route path="/clothing" element={<Clothing />} />
    </Routes>
  );
}