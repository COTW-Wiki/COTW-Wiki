import { Link } from 'react-router-dom';
import React from 'react';
import WorldMap from '../../components/WorldMap';
import homePageImage from '../../assets/Home_Page_Image.png';
import InGameImage from '../../assets/13675.jpg';
import EquipmentTable from '../../components/EquipmentTable';
import SearchBar from '../../components/SearchBar';
import ConceptTable from '../../components/ConceptTable';
import AnimalsTable from '../../components/AnimalsTable';
import Quests from '../../components/Quests';

export default function Home() {
  return (
    <div className="wiki-page">
      <div className="wiki-inner">

        {/* 1. RESERVES IMAGE - NO OUTLINE */}
        <div className="w-full pt-4 mb-8">
          <img
            src={homePageImage}
            alt="Hunter Call of the Wild Reserves"
            className="home-main-image"
          />
        </div>

        {/* 2. WELCOME SECTION - NO OUTLINE */}
        <section className="text-left mb-10 px-2">
          <h1 className="home-welcome-title">Welcome to The Hunter Wiki
            <p className="home-welcome-Mecho" >(Mecho and Svatba edition)</p>
          </h1>

          <p className="home-welcome-text">
            Explore all the hunting <Link to="/maps" className="wiki-link">reserves</Link>, <Link to="/subregions" className="wiki-link">subregions</Link>, and recommended <Link to="/loadouts" className="wiki-link">loadouts</Link>.
          </p>

          <div className="home-search-links-container">
            <SearchBar />
            <div className="home-quick-links">
              <Link to="/maps" className="wiki-btn-grey">Explore Reserves</Link>
              <Link to="/weapons" className="wiki-btn-grey">Weapons</Link>
              <Link to="/animals" className="wiki-btn-grey">Animals</Link>
              <Link to="/sights" className="wiki-btn-grey">Sights & Optics</Link>
              <Link to="/lures" className="wiki-btn-grey">Lures</Link>
              <Link to="/ammunition" className="wiki-btn-grey">Ammunition</Link>
            </div>
          </div>
        </section>

        {/* 3. CONTENT DESCRIPTION - BOXED */}
        <section className="wiki-section-card wiki-main">
          <h2 className="wiki-h2">Welcome to TheHunter: Call of the Wild Wiki</h2>
          <p className="wiki-p-mb">Welcome to TheHunter: Call of the Wild Wiki, a comprehensive database dedicated to the hunting simulation video game, TheHunter: Call of the Wild.</p>

          <p className="wiki-p-mb">The wiki presently encompasses 765 articles and serves as an unofficial, collaborative community website open to editing by all. It's primary aim is to gather and spread information pertaining to various aspects of the game, including reserves, weapons, sights, ammunition, scents, callers, placeables and so much more!</p>

          <h3 className="wiki-h3">What is TheHunter: Call of the Wild?</h3>
          <p className="wiki-p-mb">TheHunter: Call of the Wild is a video game available on both PC and consoles, designed to offer players a realistic hunting experience. Contrary to its predecessor, theHunter Classic, it operates on a one-time purchase model, with the option to enhance gameplay through downloadable content (DLCs). The game currently features a selection of 17 Reserves, each providing distinct geographical settings for hunting enthusiasts.</p>

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

        </section>

        {/* 4. WORLD MAP - BOXED & FIXED OVERFLOW */}
        <section className="wiki-section-card map-section-card">
          <h2 className="wiki-h2-tight">Reserves Map</h2>
          <p className="wiki-p-mb">Click on a reserve icon to view its details! :</p> 
          <div className="map-responsive-wrapper">
            <WorldMap />
          </div>
        </section>

        {/* 4.5 WHAT CAN YOU EXPECT */}
        <section className="wiki-section-card">
          <h2 className="wiki-h2">What Can You Expect?</h2>
          <img src={InGameImage} alt="Multiplayer sunset" className="w-48 float-right ml-4 mb-2 object-cover rounded" />
          <p className="wiki-p-mb">
            In the current version of the game, including DLCs, players have access to a diverse array of 106 animals for hunting. This expansive roster includes various species and subspecies of deer, such as the Whitetail Deer, Roosevelt Elk, Fallow Deer, as well as predators like the Black Bear, Coyote and Red Fox. The hunting experience is enriched by a wide selection of weapons, comprising different caliber rifles, shotguns, pistols, and bows. Given this extensive arsenal, hunters are required to exercise discernment in their weapon selection, tailoring their choices to the specific characteristics of the targeted animal in order to maximize their score. Beyond the act of shooting, players also have the option to engage in a more contemplative pursuit, capturing the majesty of these creatures through the use of the provided in-game camera. Exploration of these expansive maps unfolds as an individual journey in itself.
          </p>
          <p className="wiki-p-mb">
            Each hunting area features distinctive regions, prominent landmarks, and notable points of interest, creating a diverse and unique landscape. The vast expanses of land within these areas can be explored and hunted either solo or collaboratively with a team of up to 8 players in multiplayer mode. In the multiplayer setting, participants have the option to initiate session-wide competitions, fostering an enhanced social dimension to the hunting experience.
          </p>
          <p className="wiki-p-mb">
            The core gameplay of TheHunter: Call of the Wild centers around the activities of tracking, stalking, and harvesting animals utilizing the weapons initially provided to the player or those earned throughout the game. The multiplayer mode introduces a social dimension through an in-game chat feature, making way for easier communication and coordination among hunters. Animal tracking is also made easier by the in-game GPS device, which not only displays ongoing missions and the current time, but also aids in locating animals through indicators such as footprints, droppings, vocal calls, and identification of "need zones". These need zones include drinking, feeding and resting zones for each specific animal. Night hunting is a viable and essential aspect of the game, particularly for effectively pursuing certain species.
          </p>
          <p className="wiki-p-mb">
            Players also have the option to utilize natural vegetation as visual cover during the process of stalking animals. However, it is important to note that moving through dense brush generates more noise compared to walking through open grassy areas. Additionally, hunters must remain attentive to the direction and speed of the wind, as many species within the game possess a heightened sense of smell. This can pose challenges even for seasoned hunters attempting to approach these animals closely. To get around this, players have the option to buy and use a Scent Eliminator. (See &lt;attachments&gt; above for file contents. You may not need to search or read the file again.)
          </p>
        </section>

        {/* 5. ANIMALS TABLE - BOXED */}
        <section className="wiki-section-card">
          <AnimalsTable />
        </section>

        {/* 6. EQUIPMENTS & CONCEPTS - SHARED BOX */}
        <section className="wiki-section-card">
          <EquipmentTable />
          <ConceptTable />
        </section>

        {/* 7. QUESTS - SEPARATE BOX */}
        <Quests />
      </div>
    </div>
  );
}