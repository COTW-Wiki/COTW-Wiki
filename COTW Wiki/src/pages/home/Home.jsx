import { Link } from 'react-router-dom';
import React from 'react';
import worldMap from '../../assets/world-map-vector-removebg-preview.png';
import reserveLogo from '../../assets/Layton_Lake-removebg-preview.png';
import hirschLogo from '../../assets/Hirschfelden_reserve_logo-removebg-preview.png';
import yukonLogo from '../../assets/Yukon_Valley-removebg-preview.png';
import './Home.css';
import cuatroLogo from '../../assets/Cuatro_Collinas-removebg-preview.png';
import silverLogo from '../../assets/Silver_Ridge_Peaks-removebg-preview (1).png';
import teAwaroaLogo from '../../assets/Te_Awaroa-removebg-preview (1).png';
import ranchoLogo from '../../assets/Rancho_Del_Arroyo-removebg-preview.png';
import askiyLogo from '../../assets/Aisky_Ridge-removebg-preview.png';
import mississippiLogo from '../../assets/Mississippi_Acres-removebg-preview.png';
import salzwiesenLogo from '../../assets/Salzwiesen-removebg-preview.png';
import newEnglandLogo from '../../assets/New_England-removebg-preview.png';
import sundarLogo from '../../assets/Sundarpartan-removebg-preview.png';
import medvedLogo from '../../assets/Medved_taiga-removebg-preview.png';
import parqueFernandoLogo from '../../assets/Parque_Fernando-removebg-preview.png';
import revontuliLogo from '../../assets/Revontuli_Coast-removebg-preview.png';
import vurhongaLogo from '../../assets/VurhongaIcon.png';
import emeraldLogo from '../../assets/Emerald_coast-removebg-preview (1).png';
import homePageImage from '../../assets/Home_Page_Image.png';
import EquipmentTable from '../../components/EquipmentTable';
import SearchBar from '../../components/SearchBar';
import ConceptTable from '../../components/ConceptTable';
import AnimalsTable from '../../components/AnimalsTable';
import Quests from '../../components/Quests';

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
          color:rgba(255,178,0,1);
          filter: sepia(1) saturate(10000%) hue-rotate(10deg) brightness(1);
          z-index: 999; 
          box-shadow: none; /* remove glow */
          border: none;
          outline: none;
      `}</style>
      <img className="map-image" src={worldMap} alt="World Map" />
      <Link to="/maps/layton-lake" aria-label="Layton Lake Logo" className="logo" style={{ '--mask': `url("${reserveLogo}")` }} data-tooltip="Layton Lake District">
        <img src={reserveLogo} alt="Layton Lake Logo" />
      </Link>
      <Link to="/maps/hirschfelden" aria-label="Hirschfelden Logo" className="logo-hirsch" style={{ '--mask': `url("${hirschLogo}")` }} data-tooltip="Hirschfelden Hunting Reserve">
        <img src={hirschLogo} alt="Hirschfelden Logo" />
      </Link>
      <Link to="/maps/yukon-valley" aria-label="Yukon Valley Logo" className="logo-yukon" style={{ '--mask': `url("${yukonLogo}")` }} data-tooltip="Yukon Valley">
        <img src={yukonLogo} alt="Yukon Valley Logo" />
      </Link>
      <Link to="/maps/cuatro-colinas" aria-label="Cuatro Colinas Logo" className="logo-cuatro" style={{ '--mask': `url("${cuatroLogo}")` }} data-tooltip="Cuatro Colinas Game Reserve">
        <img src={cuatroLogo} alt="Cuatro Colinas Logo" />
      </Link>
      <Link to="/maps/silver-ridge-peaks" aria-label="Silver Ridge Peaks Logo" className="logo-silver" style={{ '--mask': `url("${silverLogo}")` }} data-tooltip="Silver Ridge Peaks">
        <img src={silverLogo} alt="Silver Ridge Peaks Logo" />
      </Link>
      <Link to="/maps/te-awaroa" aria-label="Te Awaroa Logo" className="logo-teawaroa" style={{ '--mask': `url("${teAwaroaLogo}")` }} data-tooltip="Te Awaroa National Park">
        <img src={teAwaroaLogo} alt="Te Awaroa Logo" />
      </Link>
      <Link to="/maps/rancho-del-arroyo" aria-label="Rancho Del Arroyo Logo" className="logo-rancho" style={{ '--mask': `url("${ranchoLogo}")` }} data-tooltip="Rancho del Arroyo">
        <img src={ranchoLogo} alt="Rancho Del Arroyo Logo" />
      </Link>
      <Link to="/maps/askiy-ridge" aria-label="Askiy Ridge Logo" className="logo-askiy" style={{ '--mask': `url("${askiyLogo}")` }} data-tooltip="Askiy Ridge Hunting Preserve">
        <img src={askiyLogo} alt="Askiy Ridge Logo" />
      </Link>
      <Link to="/maps/mississippi-acres" aria-label="Mississippi Acres Logo" className="logo-mississippi" style={{ '--mask': `url("${mississippiLogo}")` }} data-tooltip="Mississippi Acres Preserve">
        <img src={mississippiLogo} alt="Mississippi Acres Logo" />
      </Link>
      <Link to="/maps/salzwiesen-park" aria-label="Salzwiesen Logo" className="logo-salzwiesen" style={{ '--mask': `url("${salzwiesenLogo}")` }} data-tooltip="Salzwiesen Park">
        <img src={salzwiesenLogo} alt="Salzwiesen Logo" />
      </Link>
      <Link to="/maps/revontuli-coast" aria-label="Revontuli Coast Logo" className="logo-revontuli" style={{ '--mask': `url("${revontuliLogo}")` }} data-tooltip="Revontuli Coast">
        <img src={revontuliLogo} alt="Revontuli Coast Logo" />
      </Link>
      <Link to="/maps/emerald-coast" aria-label="Emerald Coast Logo" className="logo-emerald" style={{ '--mask': `url("${emeraldLogo}")` }} data-tooltip="Emerald Coast">
        <img src={emeraldLogo} alt="Emerald Coast Logo" />
      </Link>
      <Link to="/maps/new-england-mountains" aria-label="New England Logo" className="logo-newengland" style={{ '--mask': `url("${newEnglandLogo}")` }} data-tooltip="New England Mountains">
        <img src={newEnglandLogo} alt="New England Logo" />
      </Link>
      <Link to="/maps/parque-fernando" aria-label="Parque Fernando Logo" className="logo-parque" style={{ '--mask': `url("${parqueFernandoLogo}")` }} data-tooltip="Parque Fernando">
        <img src={parqueFernandoLogo} alt="Parque Fernando Logo" />
      </Link>
      <Link to="/maps/vurhonga" aria-label="Vurhonga Savanna Logo" className="logo-vurhonga" style={{ '--mask': `url("${vurhongaLogo}")` }} data-tooltip="Vurhonga Savanna">
        <img src={vurhongaLogo} alt="Vurhonga Savanna Logo" />
      </Link>
      <Link to="/maps/sundarpatan" aria-label="Sundarpatan Logo" className="logo-sundar" style={{ '--mask': `url("${sundarLogo}")` }} data-tooltip="Sundarpatan">
        <img src={sundarLogo} alt="Sundarpatan Logo" />
      </Link>
      <Link to="/maps/medved-taiga" aria-label="Medved Taiga Logo" className="logo-medved" style={{ '--mask': `url("${medvedLogo}")` }} data-tooltip="Medved-Taiga National Park">
        <img src={medvedLogo} alt="Medved Taiga Logo" />
      </Link>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center p-6 mt-10">
      <h1 className="text-5xl font-bold text-green-800 mb-6">Welcome to Hunter Wiki</h1>
      <p className="text-lg text-gray-700 mb-8">
        Explore all the hunting <Link to="/maps" className="text-green-800 hover:underline">reserves</Link>, <Link to="/maps" className="text-green-800 hover:underline">maps</Link>, <Link to="/maps" className="text-green-800 hover:underline">subregions</Link>, and recommended <Link to="/weapons" className="text-green-800 hover:underline">loadouts</Link>.
      </p>

      <SearchBar />

      <div className="flex flex-col sm:flex-row sm:justify-between items-center w-full max-w-3xl mx-auto mt-6 space-y-4 sm:space-y-0">
        <Link
          to="/maps"
          className="bg-green-800 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
        >
          Explore Reserves
        </Link>

        <Link
          to="/weapons"
          className="bg-white text-green-800 px-6 py-3 rounded-lg hover:bg-green-50 transition"
        >
          Weapons
        </Link>

        <Link
          to="/animals"
          className="bg-white text-green-800 px-6 py-3 rounded-lg hover:bg-green-50 transition"
        >
          Animals
        </Link>

        <Link
          to="/weapons/sights"
          className="bg-white text-green-800 px-6 py-3 rounded-lg hover:bg-green-50 transition"
        >
          Sights & Optics
        </Link>

        <Link
          to="/lures"
          className="bg-white text-green-800 px-6 py-3 rounded-lg hover:bg-green-50 transition"
        >
          Lures
        </Link>

        <Link
          to="/weapons/ammo"
          className="bg-green-800 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
        >
          Ammunition
        </Link>
      </div>

      <div className="w-full max-w-5xl mx-auto mt-8">
        <img src={homePageImage} alt="Hunter Call of the Wild" className="w-4/5 h-auto rounded-lg shadow-md mx-auto block" />
      </div>

      <section className="mt-8 text-left max-w-3xl mx-auto text-gray-700">
        <h2 className="text-2xl font-semibold mb-2">Welcome to TheHunter: Call of the Wild Wiki</h2>
        <p className="mb-4">Welcome to TheHunter: Call of the Wild Wiki, a comprehensive database dedicated to the hunting simulation video game, TheHunter: Call of the Wild.</p>

        <p className="mb-4">The wiki presently encompasses 765 articles and serves as an unofficial, collaborative community website open to editing by all. It's primary aim is to gather and spread information pertaining to various aspects of the game, including reserves, weapons, sights, ammunition, scents, callers, placeables and so much more!</p>

        <h3 className="text-xl font-semibold mt-4 mb-2">What is TheHunter: Call of the Wild?</h3>
        <p className="mb-4">TheHunter: Call of the Wild is a video game available on both PC and consoles, designed to offer players a realistic hunting experience. Contrary to its predecessor, theHunter Classic, it operates on a one-time purchase model, with the option to enhance gameplay through downloadable content (DLCs). The game currently features a selection of 17 Reserves, each providing distinct geographical settings for hunting enthusiasts.</p>

        <p className="font-semibold">These Reserves include:</p>
        <ul className="list-disc ml-6 mb-4">
          <li><Link to="/maps/hirschfelden" className="text-green-800 hover:underline">Hirschfelden Hunting Reserve</Link> (modeled after German farmlands)</li>
          <li><Link to="/maps/layton-lake" className="text-green-800 hover:underline">Layton Lake District</Link> (inspired by the Pacific Northwest)</li>
          <li><Link to="/maps/medved-taiga" className="text-green-800 hover:underline">Medved-Taiga National Park</Link> (based on the Siberian taiga)</li>
          <li><Link to="/maps/vurhonga" className="text-green-800 hover:underline">Vurhonga Savanna Reserve</Link> (representing the South African savannah)</li>
          <li><Link to="/maps/parque-fernando" className="text-green-800 hover:underline">Parque Fernando</Link> (modeled after South American forests)</li>
          <li><Link to="/maps/yukon-valley" className="text-green-800 hover:underline">Yukon Valley</Link> (based on Alaska's Fall season with little snow)</li>
          <li><Link to="/maps/cuatro-colinas" className="text-green-800 hover:underline">Cuatro Colinas Game Reserve</Link> (inspired by Spain's Corn Fields and Hills)</li>
          <li><Link to="/maps/silver-ridge-peaks" className="text-green-800 hover:underline">Silver Ridge Peaks</Link> (modeled after the Rocky Mountains in the United States)</li>
          <li><Link to="/maps/te-awaroa" className="text-green-800 hover:underline">Te Awaroa National Park</Link> (based on New Zealand's tall mountains and long coasts)</li>
          <li><Link to="/maps/rancho-del-arroyo" className="text-green-800 hover:underline">Rancho del Arroyo</Link> (representing Mexico's Hilly landscape and jagged hills)</li>
          <li><Link to="/maps/mississippi-acres" className="text-green-800 hover:underline">Mississippi Acres Preserve</Link> (located in the swamps of the southern United States)</li>
          <li><Link to="/maps/revontuli-coast" className="text-green-800 hover:underline">Revontuli Coast</Link> (based on Finland's cold mossy forests and big lakes)</li>
          <li><Link to="/maps/new-england-mountains" className="text-green-800 hover:underline">New England Mountains</Link> (inspired by the states of the US in the New England region)</li>
          <li><Link to="/maps/emerald-coast" className="text-green-800 hover:underline">Emerald Coast</Link> (based on the Australian Coast and thick bushy forests)</li>
          <li><Link to="/maps/sundarpatan" className="text-green-800 hover:underline">Sundarpatan</Link> (located in Nepal's swampy lowlands and tall, snowy mountains)</li>
          <li><Link to="/maps/salzwiesen-park" className="text-green-800 hover:underline">Salzwiesen Park</Link> (representing north German wetlands)</li>
          <li><Link to="/maps/askiy-ridge" className="text-green-800 hover:underline">Askiy Ridge Hunting Preserve</Link> (located in Alberta, Canada)</li>
        </ul>

        <h3 className="text-xl font-semibold mt-2 mb-2">What Can You Expect?</h3>
        <p className="mb-4"><Link to="/multiplayer" className="text-green-800 hover:underline">Multiplayer</Link></p>

        <p className="mb-4">In the current version of the game, including DLCs, players have access to a diverse array of <Link to="/animals" className="text-green-800 hover:underline">106 animals</Link> for hunting. This expansive roster includes various species and subspecies of deer, such as the <Link to="/animals/Whitetail%20Deer" className="text-green-800 hover:underline">Whitetail Deer</Link>, <Link to="/animals/Roosevelt%20Elk" className="text-green-800 hover:underline">Roosevelt Elk</Link>, <Link to="/animals/Fallow%20Deer" className="text-green-800 hover:underline">Fallow Deer</Link>, as well as predators like the <Link to="/animals/Black%20Bear" className="text-green-800 hover:underline">Black Bear</Link>, <Link to="/animals/Coyote" className="text-green-800 hover:underline">Coyote</Link> and <Link to="/animals/Red%20Fox" className="text-green-800 hover:underline">Red Fox</Link>. The hunting experience is enriched by a wide selection of <Link to="/weapons" className="text-green-800 hover:underline">weapons</Link>, comprising different caliber <Link to="/weapons" className="text-green-800 hover:underline">rifles</Link>, <Link to="/weapons" className="text-green-800 hover:underline">shotguns</Link>, <Link to="/weapons" className="text-green-800 hover:underline">pistols</Link>, and <Link to="/weapons" className="text-green-800 hover:underline">bows</Link>. Given this extensive arsenal, hunters are required to exercise discernment in their weapon selection, tailoring their choices to the specific characteristics of the targeted <Link to="/animals" className="text-green-800 hover:underline">animal</Link> in order to maximize their score. Beyond the act of shooting, players also have the option to engage in a more contemplative pursuit, capturing the majesty of these creatures through the use of the provided in-game camera. Exploration of these expansive <Link to="/maps" className="text-green-800 hover:underline">maps</Link> unfolds as an individual journey in itself.</p>

        <p className="mb-4">Each hunting area features distinctive regions, prominent landmarks, and notable points of interest, creating a diverse and unique landscape. The vast expanses of land within these areas can be explored and hunted either solo or collaboratively with a team of up to 8 players in multiplayer mode. In the multiplayer setting, participants have the option to initiate session-wide competitions, fostering an enhanced social dimension to the hunting experience.</p>

        <p className="mb-4">The core gameplay of TheHunter: Call of the Wild centers around the activities of tracking, stalking, and harvesting animals utilizing the weapons initially provided to the player or those earned throughout the game. The multiplayer mode introduces a social dimension through an in-game chat feature, making way for easier communication and coordination among hunters. Animal tracking is also made easier by the in-game GPS device, which not only displays ongoing missions and the current time, but also aids in locating animals through indicators such as footprints, droppings, vocal calls, and identification of "<Link to="/animals/need-zones" className="text-green-800 hover:underline">need zones</Link>". These <Link to="/animals/need-zones" className="text-green-800 hover:underline">need zones</Link> include drinking, feeding and resting zones for each specific animal. Night hunting is a viable and essential aspect of the game, particularly for effectively pursuing certain species.</p>

        <p className="mb-4">Players also have the option to utilize natural vegetation as visual cover during the process of stalking animals. However, it is important to note that moving through dense brush generates more noise compared to walking through open grassy areas. Additionally, hunters must remain attentive to the direction and speed of the wind, as many species within the game possess a heightened sense of smell. This can pose challenges even for seasoned hunters attempting to approach these animals closely. To get around this, players have the option to buy and use a <Link to="/lures/scents/Scent_Eliminator_Spray" className="text-green-800 hover:underline">Scent Eliminator</Link>.</p>
      </section>
      <section className="mt-8 text-left max-w-3xl mx-auto text-gray-700">
        <h3 className="text-xl font-semibold mb-2">Reserves</h3>
        <p className="mb-2">Click on the reserve icon on the interactive map to get directed to the wiki page of the respective Reserve:</p>
      </section>
      <section className="mt-12 w-full">
        <Map />
      </section>
      <AnimalsTable />
      <p><br /></p>
      <EquipmentTable />
      <ConceptTable />
      <Quests />
    </div>
  );
}
  