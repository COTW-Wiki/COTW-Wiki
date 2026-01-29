import React, { useState, useEffect } from 'react';
import { maps } from '../../data/maps';
import { Link, useSearchParams } from 'react-router-dom';
import TableOfContents from '../../components/TableOfContents';

export default function Missions() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selected, setSelected] = useState(searchParams.get('reserve'));

  useEffect(() => {
    setSelected(searchParams.get('reserve'));
  }, [searchParams]);

  const handleSelect = (id) => {
    setSelected(id);
    if (id) {
      setSearchParams({ reserve: id });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-green-800 mb-4">Missions</h1>

      <div className="mb-4">
        <div className="text-sm text-gray-600 mb-2">Reserves</div>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => handleSelect(null)}
            className={`text-sm px-2 py-1 rounded ${selected === null ? 'bg-green-200 text-green-900' : 'bg-green-50 text-green-800 hover:underline'}`}>
            General information
          </button>

          {maps.map((m) => (
            <button
              key={m.id}
              onClick={() => handleSelect(m.id)}
              className={`text-sm px-2 py-1 rounded ${selected === m.id ? 'bg-green-200 text-green-900' : 'bg-green-50 text-green-800 hover:underline'}`}>
              {m.name}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-4 text-gray-700">
        {selected === null && (
          <>
            <p>
              Missions are provided by the reserve wardens. The local residents have various needs that can be accomplished
              through hunting. Cash and XP can be gained by completing missions. Any number of missions and challenges can
              be taken on simultaneously and the mission log can be used to select the mission one wants to track actively on
              the Huntermate.
            </p>

            <p className="mt-3">
              Missions are completely optional and are not required to unlock any new game content.
            </p>
          </>
        )}

        {selected === 'hirschfelden' && (
          <div className="mt-4 bg-gray-50 rounded p-3 text-gray-800">
            <h3 className="font-semibold mb-2">Hirschfelden Hunting Reserve — Missions</h3>
            <p>
              Missions on the Hirschfelden Hunting Reserve are provided by the reserve warden Cornelia Holzer. The reserve has 28 main missions: 3 tasks at the very beginning are given by Cornelia herself, she transfers the rest from other people (writer Gerlinde Jager, shooting fan Robert Sommer, biologist Vinay Bhandari, dreamer ranger Albertina Fleischer, businessperson Marwin Tressler), each gives 5 main missions. Also this map has a fantastic amount of 70 side missions.
            </p>

            <p className="mt-2">
              Story campaign is completely absent. While DLC reserves have stories of varying quality with 2-3 storylines (ecology, family, mistakes of the past, investigation, poachers, crimes), the Hirschfelden missions are simply sets of tasks from a group of people related to shooting certain game in a certain way and taking pictures.
            </p>

            <TableOfContents 
              mainMissionsId="hirsch-main"
              sideMissionsId="hirsch-side"
              sideMissions={[
                { label: "Gerlinde Jäger Missions", id: "hirsch-gerlinde" },
                { label: "Marwin Tressler Missions", id: "hirsch-marwin" },
                { label: "Vinay Bhandari Missions", id: "hirsch-vinay" },
                { label: "Robert Sommer Missions", id: "hirsch-sommer" },
                { label: "Fleischer Missions", id: "hirsch-fleischer" },
                { label: "Cornelia Holzer Missions", id: "hirsch-cornelia" }
              ]} 
            />

            <div className="mt-4 overflow-x-auto">
              <h4 id="hirsch-main" className="font-semibold mb-2">Main Missions</h4>
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-green-100 text-left">
                    <th className="px-3 py-6 border-b border-gray-300">Mission</th>
                    <th className="px-3 py-6 border-b border-gray-300">Description</th>
                    <th className="px-3 py-6 border-b border-gray-300">Objective</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">The First Steps</td>
                    <td className="px-3 py-6 border-b border-gray-300">Welcome to Central Europe! Track down and harvest your first animal!</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Locate a track</li>
                        <li>Shoot an animal</li>
                        <li>Harvest an animal</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Getting the Lay of the Land</td>
                    <td className="px-3 py-6 border-b border-gray-300">If you want to get your bearings, there are lookout points spread out all over the reserve.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Visit a Lookout Point</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Stocking up</td>
                    <td className="px-3 py-6 border-b border-gray-300">Be sure to stop by one of the outposts. They're essentially base camps.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Visit an Outpost</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Jäger - A Picture for Her Book</td>
                    <td className="px-3 py-6 border-b border-gray-300">Gerlinde Jäger is writing her second book on fallow deer. At the moment, she is interested in the interactions between fallows and other animals. She has noticed that fallow bucks chasing roe deer away in the are around Rathenfeldt's main outpost. Conni has asked you to investigate the area and take a photo of a fallow deer.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Travel to Rathenfeld</li>
                        <li>Take a picture of a fallow deer</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Jäger - Saving Sommer's Cornfields</td>
                    <td className="px-3 py-6 border-b border-gray-300">Conni introduces Königsberg's landowner, Robert Sommer. He likes to have his say when it comes to his land and has a problem with the fallow deer eating all of his farmer's corn. He has been in contact with Gerline about this, but since she is focusing on her book, Conni has requested your help.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Travel to Pertershain Cornfields</li>
                        <li>Harvest 2 fallow deer</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Jäger - The Deer and the Sea</td>
                    <td className="px-3 py-6 border-b border-gray-300">Gerlinde is still missing some pictures for her book. She needs another picture of a fallow deer. This time with Königsberg Lake in the background.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Travel to Southeastern Petershain</li>
                        <li>Take a picture of a fallow deer with Königsberg Lake in the background</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Jäger - The Lost Son</td>
                    <td className="px-3 py-6 border-b border-gray-300">Gerlinde is a little worried. Erik went out to play this morning and has not come back yet. He usually goes out for a few hours, but comes back when he gets hungry. He was last seen outside one of the cabins in Rathenfeldt. Conni has asked you to search for him if you are in the area.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Travel to the cabin at the Rathenfeldt Strawfields</li>
                        <li>Follow tracks to investigate</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Jäger - Wrapping up the Book</td>
                    <td className="px-3 py-6 border-b border-gray-300">Gerlinde's book is almost finished, but she needs one last favor - three pictures of the most famous landmarks in the reserve.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Take a photo of Spreeberg Castle</li>
                        <li>Take a photo of Old Müller</li>
                        <li>Take a photo from the top of Bohndorf Hill</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Sommer - Mr. Sommer's Bow</td>
                    <td className="px-3 py-6 border-b border-gray-300">Robert Sommer appreciated your help with protecting his cornfields from hungry fallow deer. Sommer hunts recreationally in the area a few times a month with his wealthy friends. Their prey are mostly rabbits, foxes and sometimes roe deer. They particularly love to hunter using bows. Sommer is a real weapon and equipment enthusiast and will be able to give you a lot of advice on those. He has asked you to harvest a fox in Spreeberg using a certain kind of bow.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Travel to Spreeberg</li>
                        <li>Harvest 1 fox downed with a 60 lb bow</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Sommer - Smell Like a Deer</td>
                    <td className="px-3 py-6 border-b border-gray-300">Sommer often gets products to evaluate from different companies around the world. This time, Pinelodge Creek has sent Sommer a new version of their roe deer scent that replicates the smell of deer urine. Sommer has asked for your help in evaluating this new product.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Travel to Königsberg</li>
                        <li>Use the Roe Deer Scent</li>
                        <li>Harvest 3 roe deer</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Sommer - Controlling the Land</td>
                    <td className="px-3 py-6 border-b border-gray-300">The farmers are hassling Sommer about their crops getting eaten again or being destroyed by different animals in the reserve. He is offering a good bounty for getting things under control. Sommer has suggested that creating hunting pressure in each of the four affected regions would do the trick.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Harvest a fallow deer in Hirschdorf</li>
                        <li>Harvest a red deer in Rotwald</li>
                        <li>Harvest a boar in Hirschfelden</li>
                        <li>Harvest a bison in Rinderland</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Sommer - The Fox and the Scope</td>
                    <td className="px-3 py-6 border-b border-gray-300">Köhler & Gerhardt has contacted Sommer regarding a new scope they are testing. Sommer has received a large amount of samples for him and his hunting friends to evaluate, and he would like your input too. The manufacturer wants feedback on the 270's long-range hunting effectiveness in particular using the scope, so Sommer has asked you to down a fox with the rifle and scope.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Harvest a fox downed from at least 200.00 m away with a scoped .270 rifle</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Sommer - Sommerfest</td>
                    <td className="px-3 py-6 border-b border-gray-300">Each year Robert Sommer, as chairman of the Central Europeean Reserve Organization, nominates the best Weapons and hunting tools of the year at the "Jagdprodukte des Jahres." The time has come for this yearly evaluation and Sommer would like you to participate. Use different weapons that you have gathered during your stay to harvest animals and find a winner.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Harvest any animal downed with one of the following weapons:</li>
                        <li>Scoped Whitlock Model 86 rifle</li>
                        <li>Rhino 454 revolver</li>
                        <li>Cacciatore 12G shotgun</li>
                        <li>Hawk Edge CB-70</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Bhandari - Investigating the Bison</td>
                    <td className="px-3 py-6 border-b border-gray-300">Dr. Vinay Bhandari is a member of the European Bison Advisory Organization, whose goal is the reintroduction of bison to Europe. The results have been phenomenal and the population has grown and spread beyond Rinderland. However, troubling side effects have developed from the spread and some of the bisons have become ill. Bhandari has asked for your help with retrieving a sample from a deceased bison to investigate the cause.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Travel to Rinderland Gorge</li>
                        <li>Find the carcass and retrieve a blood sample</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Bhandari - Stop the Disease</td>
                    <td className="px-3 py-6 border-b border-gray-300">The sample showed signs of brucellosis, a disease that can cause miscarriages among the bison and is contagious. Sommer, who was already against the bison reintroduction from the start, is concerned about the possible detrimental effects on other wildlife in the reserve. Bhandari has asked for some help in tracking down the diseased animals.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Travel to the sick bison in Ernsdorf</li>
                        <li>Harvest 2 bison with brucellosis</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Bhandari - Population Control</td>
                    <td className="px-3 py-6 border-b border-gray-300">Bhandari suggested that the rapid spread of the brucellosis might be rooted in the equally rapid expansion of the bison population in a small area like Rinderland. This is a sensitive matter. One option would be to deport the sick bison, but seeing as the cause of the outbreak is not yet known, he thought that would not be a safest option. Instead, he suggests thinning out the population to counteract their mating and slow the spread of the disease.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Harvest 2 female bison in Rinderland</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Bhandari - Clashing With the Deer</td>
                    <td className="px-3 py-6 border-b border-gray-300">The bison have been seen clashing with the red deer in Jonsdorf. Bhandari would like to avoid other animals interacting with the bison until the brucellosis situation is under control. Conni suggested you create hunting pressure in the area under concern.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Travel to Jonsdorf</li>
                        <li>Create hunting pressure in Jonsdorf</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Bhandari - A Last Push</td>
                    <td className="px-3 py-6 border-b border-gray-300">Bhandari has identified the likely source of the outbreak. Based on urine samples, it seems one of the bulls is harboring the brucella bacteria in its reproductive tracks. He's asked for you to take care of it.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Travel to Tichenau Lake</li>
                        <li>Harvest the source carrier bison</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Fleischer - A Trophy to Remember</td>
                    <td className="px-3 py-6 border-b border-gray-300">Conni introduces Albertina Fleischer, who volunteered to search for Erik Jäger when he was lost. It reminded, Albertina of a similar episode in her youth when she got lost in the woods as a child. She believes that a red deer saved her life at the time by leading her back home. Albertina has a close friend, who is a taxidermist, and wanted to gift her a stuffed red deer for her birthday. She's requested your help in harvesting a buck.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Travel to Rotwald</li>
                        <li>Harvest a male red deer and earn a BRONZE score or higher</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Fleischer - Red Deer Canyon</td>
                    <td className="px-3 py-6 border-b border-gray-300">Bhandari has asked Albertina for information on the red deer population to help his cross-species research, but she is away at her taxidermist's at the moment and wonders if you could could cover for her.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Travel to Bohndorf Canyon</li>
                        <li>Find 5 red deer droppings</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Fleischer - Stuffin’ Them All!</td>
                    <td className="px-3 py-6 border-b border-gray-300">Albertina's friend, the taxidermist Finn, has reached out to the hunters of Hirschfelden with quite a huge task. The Museum of Natural History has lost all of their stuffed animals to a fur beetle infestation. They were left in an unusable state. They are paying well for harvested specimens of each of the four big species.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Harvest a red deer with a GOLD score or higher</li>
                        <li>Harvest a bison with a GOLD score or higher</li>
                        <li>Harvest a wild boar with a GOLD score or higher</li>
                        <li>Harvest a fallow deer with a GOLD score or higher</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Fleischer - Don’t Ruin the Goods</td>
                    <td className="px-3 py-6 border-b border-gray-300">Finn, the taxidermist, has contacted Albertina regarding a customer that is looking for a prime red deer buck for his luxurious mansion up in Werzfald. He is paying a hefty sum for a specimen delivered in mint condition. Albertina has asked you to hunt a red deer using the recommended caliber and a shot in its heart.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Harvest a red deer with a GOLD score or higher downed using a .270 caliber rifle and a hit to the heart</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Fleischer - Returning the Favor</td>
                    <td className="px-3 py-6 border-b border-gray-300">Albertina is down with a cold. While she was making herself a cup of tea in her kitchen, she noticed a red deer outside her window. It was standing there, watching her with what looked like somber eyes. Albertina was sure it was trying to tell her something. She noticed then that it was badly wounded on its leg. It didn't look like it would make it out in the wild much longer. Albertina believes she must return a favor to the red deer, and has requested you to end its pain.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Travel to Bohndorf Hill</li>
                        <li>Harvest the fatally wounded red deer</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Tressler - Wild Boars Raving</td>
                    <td className="px-3 py-6 border-b border-gray-300">Marwin Tressler, owner of Star Hunting Tours, heard of your good work with Bhandari and the bison. Star Hunting Tours caters to clients looking for a boar hunting experience. Tressler wonders if you might help him get on good terms with Robert Sommer, whose farmers have complained about boars ruining their crops. Tressler would like your help in creating hunting pressure on the fields of Ritterstein and Müllerwald.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Travel to Müllerwald Strawfields</li>
                        <li>Create hunting pressure in Müllerwald strawfields</li>
                        <li>Travel to Ritterstein Strawfields</li>
                        <li>Create hunting pressure in Ritterstein strawfields</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Tressler - A Ton of Meat</td>
                    <td className="px-3 py-6 border-b border-gray-300">Tressler's signed a deal with a boar meat wholesaler specializing in burgers called "Boargermania." They want to stock up for the barbecue season early this year and have put in an order for one metric tonne of boar meat, Tressler has asked you to assist. A horde was seen close to the logging area in Müllerwald, and in Ritterstein, but feel free to go anywhere.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Harvest 10 boars weighing at least 100.00 kg each</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Tressler - Hunting for Gold</td>
                    <td className="px-3 py-6 border-b border-gray-300">Tressler and Star Hunting Tours are organizing another boar hunting experience for professional hunters and investors of the business next week. He wants to make sure the event goes off without a hitch by having enough boar in Müllerwald. Creating hunting pressure in Ritterstein to drive the boar east into Müllerwald.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Travel to Ritterstein</li>
                        <li>Create hunting pressure</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Tressler - Boar Beast Boss</td>
                    <td className="px-3 py-6 border-b border-gray-300">Sommer has been harrassing Tressler again about the boar population. It seems an especially aggressive boar nicknamed Wurst, or "Sausage," by Tressler has been terrorizing kids in Petershain. It's come to the point where the farmers are threatening to strike until the safety of their children can be ensured. Tressler has asked you to hunt down the boar at large.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Travel to Müllerwald Logging Area</li>
                        <li>Harvest the aggressive boar "Sausage"</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Tressler - The Radioactive Boars</td>
                    <td className="px-3 py-6 border-b border-gray-300">Tressler has received numerous, sudden cancellations of reservations for Star Hunting Tours. It seems news has spread about radioactive boars wandering the reserve, contaminated by pollutants found in the plant life from the Chernobyl fallout. Of course, the meat harvested is unusable and not safe. Tressler has isolated the anomaly to a particular herd of boars, and will compensate you generously for harvesting them and restoring faith in his business.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Harvest radioactive boars</li>
                        <li className="mt-2 text-xs text-gray-600">Tip: The boars always spawn in the center of marked area. Restart the game, skip some in-game hours and come back, the count will continue.</li>
                      </ul>
                    </td>
                  </tr>

                </tbody>
              </table>
            </div>

            <div className="mt-6">
              <h4 id="hirsch-side" className="font-semibold mb-2">Side Missions</h4>

              <div className="space-y-6">
                <div>
                  <h5 id="hirsch-gerlinde" className="font-medium">Gerlinde Jäger Missions</h5>
                  <div className="mt-2 overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-green-100 text-left">
                          <th className="px-3 py-6 border-b border-gray-300">Mission</th>
                          <th className="px-3 py-6 border-b border-gray-300">Description</th>
                          <th className="px-3 py-6 border-b border-gray-300">Objective</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Jäger #1</td>
                          <td className="px-3 py-6 border-b border-gray-300">Thanks for your help with the picture. Here's a little challenge for you!</td>
                          <td className="px-3 py-6 border-b border-gray-300">
                            <ul className="list-disc list-inside">
                              <li>Travel to Rathenfeld</li>
                              <li>Find 5 tracks from the same fallow deer</li>
                            </ul>
                          </td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Jäger #2</td>
                          <td className="px-3 py-6 border-b border-gray-300">Could you investigate calls between fallow deer? The mating season has begun.</td>
                          <td className="px-3 py-6 border-b border-gray-300">ID calls from 2 different fallow deer</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Jäger #3</td>
                          <td className="px-3 py-6 border-b border-gray-300">Wow, they are everywhere. Have a look to the east!</td>
                          <td className="px-3 py-6 border-b border-gray-300">Spot 3 different fallow deer</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Jäger #4</td>
                          <td className="px-3 py-6 border-b border-gray-300">Need a picture of a fallow deer up-close, could you find one?</td>
                          <td className="px-3 py-6 border-b border-gray-300">Take a picture of a fallow deer within 50.00 m</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Jäger #5</td>
                          <td className="px-3 py-6 border-b border-gray-300">Thank you so much for your help with Erik! Here's a tip: You get a great view from one of the towers near the windmills</td>
                          <td className="px-3 py-6 border-b border-gray-300">
                            <ul className="list-disc list-inside">
                              <li>Travel to Schonfeldt Windmills</li>
                              <li>Harvest wildlife downed with a scoped weapon from a hunting stand</li>
                            </ul>
                          </td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Jäger #6</td>
                          <td className="px-3 py-6 border-b border-gray-300">Now let's pick up some speed, get two of those really beautiful ones!</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest 2 fallow deer downed with a .243 caliber rifle and earn a GOLD score or higher.</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Jäger #7</td>
                          <td className="px-3 py-6 border-b border-gray-300">Have you tried the blinds yet, they are good to use when there's no coverage around. Try one in Schonfeldt!</td>
                          <td className="px-3 py-6 border-b border-gray-300">
                            <ul className="list-disc list-inside">
                              <li>Travel to Schonfeldt Strawfields</li>
                              <li>Harvest 2 animals downed from a ground blind in Schonfeldt Strawfields.</li>
                            </ul>
                          </td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Jäger #8</td>
                          <td className="px-3 py-6 border-b border-gray-300">I have found a trail along the river, you should be able to find some fallows if you go there now.</td>
                          <td className="px-3 py-6 border-b border-gray-300">
                            <ul className="list-disc list-inside">
                              <li>Travel to Hirschdorf River.</li>
                              <li>Harvest 3 fallow deer.</li>
                            </ul>
                          </td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Jäger #9</td>
                          <td className="px-3 py-6 border-b border-gray-300">Long-range night hunting is some of the most difficult you can try. Are you up for it?</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest a fallow deer downed at least 150.00 m away at night with a .270 caliber rifle.</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Jäger #10</td>
                          <td className="px-3 py-6 border-b border-gray-300">The most beautiful deer I have seen in a long time has been sighted at the Schonfeldt bunkers. An albino no less!</td>
                          <td className="px-3 py-6 border-b border-gray-300">
                            <ul className="list-disc list-inside">
                              <li>Travel to Schonfeldt Bunkers.</li>
                              <li>Harvest the albino fallow deer.</li>
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h5 id="hirsch-marwin" className="font-medium">Marwin Tressler Missions</h5>
                  <div className="mt-2 overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-green-100 text-left">
                          <th className="px-3 py-6 border-b border-gray-300">Mission</th>
                          <th className="px-3 py-6 border-b border-gray-300">Description</th>
                          <th className="px-3 py-6 border-b border-gray-300">Objective</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Tressler #1</td>
                          <td className="px-3 py-6 border-b border-gray-300">Thanks, I hope Sommer is satisfied! Think I saw a few nice boars in the vicinity. Could you check on their health for me?</td>
                          <td className="px-3 py-6 border-b border-gray-300">
                            <ul className="list-disc list-inside">
                              <li>Travel to Müllerwald</li>
                              <li>ID footprints from a boar</li>
                              <li>Find droppings from a boar</li>
                            </ul>
                          </td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Tressler #2</td>
                          <td className="px-3 py-6 border-b border-gray-300">I have seen tracks down in Ritterstein, they look promising. Try to see if you can track one down, then I'll know there, are more!</td>
                          <td className="px-3 py-6 border-b border-gray-300">
                            <ul className="list-disc list-inside">
                              <li>Travel to Ritterstein</li>
                              <li>Harvest a boar</li>
                            </ul>
                          </td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Tressler #3</td>
                          <td className="px-3 py-6 border-b border-gray-300">One tonne of fresh meat, how can you top that? My favorite spot is close to Bohndorf Lake, and once I saw a family of boar there, see if you can find them!</td>
                          <td className="px-3 py-6 border-b border-gray-300">
                            <ul className="list-disc list-inside">
                              <li>Travel to Bohndorf Lake</li>
                              <li>Harvest 3 boars</li>
                            </ul>
                          </td>
                        </tr>
                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Tressler #4</td>
                          <td className="px-3 py-6 border-b border-gray-300">Try to find a big one! Night hunting is the best!</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest a boar at night</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Tressler #5</td>
                          <td className="px-3 py-6 border-b border-gray-300">It's hard to get them out in the open, try using a blind to hide!</td>
                          <td className="px-3 py-6 border-b border-gray-300">
                            <ul className="list-disc list-inside">
                              <li>Travel to Müllerwald Cornfields</li>
                              <li>Harvest 2 boars downed from a ground blind</li>
                            </ul>
                          </td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Tressler #6</td>
                          <td className="px-3 py-6 border-b border-gray-300">Try a handgun this time, maybe the .357, .44, or .454, love them all!</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest 2 boars downed with a handgun</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Tressler #7</td>
                          <td className="px-3 py-6 border-b border-gray-300">Wurst has finally fallen, wow! Get close to them this time, close enough to look them straight in their eyes.</td>
                          <td className="px-3 py-6 border-b border-gray-300">
                            <ul className="list-disc list-inside">
                              <li>Travel to Ritterstein Lake</li>
                              <li>Harvest 2 boars downed within 30.00 m</li>
                            </ul>
                          </td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Tressler #8</td>
                          <td className="px-3 py-6 border-b border-gray-300">I love using the bow on them. If you're lucky, you can pick off several in a row!</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest 3 boars downed with a bow</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Tressler #9</td>
                          <td className="px-3 py-6 border-b border-gray-300">Keep on using that bow, but this time at night!</td>
                          <td className="px-3 py-6 border-b border-gray-300">
                            <ul className="list-disc list-inside">
                              <li>Travel to Ritterstein</li>
                              <li>Harvest 2 boars downed with the Hawk Edge CB70 bow at night</li>
                            </ul>
                          </td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Tressler #10</td>
                          <td className="px-3 py-6 border-b border-gray-300">Another one of those really scary looking boars has been sighted close to the logging area!</td>
                          <td className="px-3 py-6 border-b border-gray-300">
                            <ul className="list-disc list-inside">
                              <li>Travel to Müllerwald Logging Area</li>
                              <li>Harvest the huge boar</li>
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h5 id="hirsch-vinay" className="font-medium">Vinay Bhandari Missions</h5>
                  <div className="mt-2 overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-green-100 text-left">
                          <th className="px-3 py-6 border-b border-gray-300">Mission</th>
                          <th className="px-3 py-6 border-b border-gray-300">Description</th>
                          <th className="px-3 py-6 border-b border-gray-300">Objective</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Bhandari #1</td>
                          <td className="px-3 py-6 border-b border-gray-300">My poor bison, I hope we can find the cause of this. Please help me with some more research.</td>
                          <td className="px-3 py-6 border-b border-gray-300">
                            <ul className="list-disc list-inside">
                              <li>Travel to Rinderland Gorge</li>
                              <li>Spot a bison</li>
                            </ul>
                          </td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Bhandari #2</td>
                          <td className="px-3 py-6 border-b border-gray-300">We are investigating the population and any additional traces of brucellosis amongst the bison.</td>
                          <td className="px-3 py-6 border-b border-gray-300">ID 3 unique types of tracks from 3 different bison</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Bhandari #3</td>
                          <td className="px-3 py-6 border-b border-gray-300">We would like to investigate the possibility of sterilizing the female bison. Could be easier to harvest at night.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest a female bison at night.</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Bhandari #4</td>
                          <td className="px-3 py-6 border-b border-gray-300">Continue with the population investigation in Ernsdorf, there are to many bison there!</td>
                          <td className="px-3 py-6 border-b border-gray-300">
                            <ul className="list-disc list-inside">
                              <li>Travel to Ernsdorf</li>
                              <li>Take a picture of 3 different bison in Ernsdorf</li>
                            </ul>
                          </td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Bhandari #5</td>
                          <td className="px-3 py-6 border-b border-gray-300">No time for more photos pal! We have to take out some of the big potent males.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest a male bison weighing at least 700.00 kg.</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Bhandari #6</td>
                          <td className="px-3 py-6 border-b border-gray-300">The bison scare easily from the sound of guns, try a bow instead!</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest a bison downed with a bow.</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Bhandari #7</td>
                          <td className="px-3 py-6 border-b border-gray-300">Sommerfest this, Sommerfest that. What about the bison!? Two sick males have been sighted in eastern Tichenau.</td>
                          <td className="px-3 py-6 border-b border-gray-300">
                            <ul className="list-disc list-inside">
                              <li>Travel to Tichenau.</li>
                              <li>Harvest 2 sick male bison.</li>
                            </ul>
                          </td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Bhandari #8</td>
                          <td className="px-3 py-6 border-b border-gray-300">You know that bridge in Ernsdorf, we had a traffic accident there the other day. A bison was seen wandering around, it might be hurt.</td>
                          <td className="px-3 py-6 border-b border-gray-300">
                            <ul className="list-disc list-inside">
                              <li>Travel to the bridge at Ernsdorf.</li>
                              <li>Harvest a hurt bison downed with a handgun.</li>
                            </ul>
                          </td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Bhandari #9</td>
                          <td className="px-3 py-6 border-b border-gray-300">I'd like you to study one up close and report on behavioral patterns.</td>
                          <td className="px-3 py-6 border-b border-gray-300">
                            <ul className="list-disc list-inside">
                              <li>Travel to Schonfeldt.</li>
                              <li>Harvest a bison downed within 30 m.</li>
                            </ul>
                          </td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Bhandari #10</td>
                          <td className="px-3 py-6 border-b border-gray-300">Thanks for all your help with the bison this season. One last task: A wounded bison was sighted again, near the cave in Ernsdorf. This one might be aggressive though!</td>
                          <td className="px-3 py-6 border-b border-gray-300">
                            <ul className="list-disc list-inside">
                              <li>Travel to Ernsdorf Cave.</li>
                              <li>Harvest the wounded bison at night.</li>
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h5 id="hirsch-sommer" className="font-medium">Robert Sommer Missions</h5>
                  <div className="mt-2 overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-green-100 text-left">
                          <th className="px-3 py-6 border-b border-gray-300">Mission</th>
                          <th className="px-3 py-6 border-b border-gray-300">Description</th>
                          <th className="px-3 py-6 border-b border-gray-300">Objective</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Sommer #1</td>
                          <td className="px-3 py-6 border-b border-gray-300">You liked the bow I suggested? Check out the roe deer in the area!</td>
                          <td className="px-3 py-6 border-b border-gray-300">
                            <ul className="list-disc list-inside">
                              <li>Travel to Spreeberg</li>
                              <li>ID a call from a roe deer</li>
                              <li>Find a track from a roe deer</li>
                              <li>Find droppings from a roe deer</li>
                            </ul>
                          </td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Sommer #2</td>
                          <td className="px-3 py-6 border-b border-gray-300">Check out the fields of Petershain, you should be able to find a good one there!</td>
                          <td className="px-3 py-6 border-b border-gray-300">
                            <ul className="list-disc list-inside">
                              <li>Travel to Petershain</li>
                              <li>Harvest a deer at night</li>
                            </ul>
                          </td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Sommer #3</td>
                          <td className="px-3 py-6 border-b border-gray-300">Around Petershain Lake, the roe deer have really taken a few bites out of the farmers' crops. Try to do something about it, and soon if you can!.</td>
                          <td className="px-3 py-6 border-b border-gray-300">
                            <ul className="list-disc list-inside">
                              <li>Travel to Petershain Lake</li>
                              <li>Harvest two roe deer</li>
                            </ul>
                          </td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Sommer #4</td>
                          <td className="px-3 py-6 border-b border-gray-300">Heard about Erik, good job! Try using a scope and take a roe out from afar!</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest a roe deer downed at least 100.00 m away with a .243 caliber rifle.</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Sommer #5</td>
                          <td className="px-3 py-6 border-b border-gray-300">Keep on thinning the population out, the farmers are still complaining!</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest 4 roe deer</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Sommer #6</td>
                          <td className="px-3 py-6 border-b border-gray-300">The big ones are the ones that eat the most crops. Take them out!</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest 2 roe deer weighing at least 25.00 kg each that were downed with a .270 caliber rifle.</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Sommer #7</td>
                          <td className="px-3 py-6 border-b border-gray-300">Thanks for your work, but the deer are still sabotaging around Spreeberg, please hunt them down over there!</td>
                          <td className="px-3 py-6 border-b border-gray-300">
                            <ul className="list-disc list-inside">
                              <li>Travel to Spreeberg.</li>
                              <li>Harvest 3 roe deer downed in Spreeberg.</li>
                            </ul>
                          </td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Sommer #8</td>
                          <td className="px-3 py-6 border-b border-gray-300">Don't let them hear it coming, use the bow!</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest 2 roe deer weighing at least 25.00 kg each that were downed with a bow.</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Sommer #9</td>
                          <td className="px-3 py-6 border-b border-gray-300">The ground blind is ingenious. I usually can get pretty close to the deer that way. Try one out close to the cornfields!</td>
                          <td className="px-3 py-6 border-b border-gray-300">
                            <ul className="list-disc list-inside">
                              <li>Travel to Petershain Cornfields.</li>
                              <li>Harvest 3 roe deer downed from a ground blind at night.</li>
                            </ul>
                          </td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Sommer #10</td>
                          <td className="px-3 py-6 border-b border-gray-300">I'd like an estimate on the amount of deer around the Petershain Turbines, ID a few of them please. You can, of course, hunt a few as well!</td>
                          <td className="px-3 py-6 border-b border-gray-300">
                            <ul className="list-disc list-inside">
                              <li>Travel to the Petershain Turbines.</li>
                              <li>Spot 3 unique roe deer</li>
                              <li>Harvest 1 roe deer</li>
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h5 id="hirsch-fleischer" className="font-medium">Fleischer Missions</h5>
                  <div className="mt-2 overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-green-100 text-left">
                          <th className="px-3 py-6 border-b border-gray-300">Mission</th>
                          <th className="px-3 py-6 border-b border-gray-300">Description</th>
                          <th className="px-3 py-6 border-b border-gray-300">Objective</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Fleischer #1</td>
                          <td className="px-3 py-6 border-b border-gray-300">Thanks so much! I love the area around Bohndorf Lake, try visiting the waterfront there to catch another one!</td>
                          <td className="px-3 py-6 border-b border-gray-300">
                            <ul className="list-disc list-inside">
                              <li>Travel to Bohndorf Lake.</li>
                              <li>Harvest a red deer.</li>
                            </ul>
                          </td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Fleischer #2</td>
                          <td className="px-3 py-6 border-b border-gray-300">Please investigate the red deer's behavior by gathering some info in the area!</td>
                          <td className="px-3 py-6 border-b border-gray-300">
                            <ul className="list-disc list-inside">
                              <li>Travel to Bohndorf Canyon</li>
                              <li>ID a track from a red deer</li>
                              <li>Spot a red deer</li>
                              <li>Identify a call from a red deer</li>
                            </ul>
                          </td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Fleischer #3</td>
                          <td className="px-3 py-6 border-b border-gray-300">Could you try to find a really, really nice one please? In the area around where I grew up!</td>
                          <td className="px-3 py-6 border-b border-gray-300">
                            <ul className="list-disc list-inside">
                              <li>Travel to Bohndorf Hill.</li>
                              <li>Harvest 2 red deer at night.</li>
                            </ul>
                          </td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Fleischer #4</td>
                          <td className="px-3 py-6 border-b border-gray-300">Personally, I'm not a big fan of Robert Sommer. Could you please find a big red deer? 120 kg at least!</td>
                          <td className="px-3 py-6 border-b border-gray-300">
                            <ul className="list-disc list-inside">
                              <li>Travel to Rotwald.</li>
                              <li>Harvest a red deer weighing at least 120.00 kg.</li>
                            </ul>
                          </td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Fleischer #5</td>
                          <td className="px-3 py-6 border-b border-gray-300">And another big one, please! But this time you should visit the area around Jonsdorf.</td>
                          <td className="px-3 py-6 border-b border-gray-300">
                            <ul className="list-disc list-inside">
                              <li>Travel to Jonsdorf</li>
                              <li>Harvest a red deer weighing at least 180.00 kg that was downed with a .45-70 caliber rifle</li>
                            </ul>
                          </td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Fleischer #6</td>
                          <td className="px-3 py-6 border-b border-gray-300">The red deer are fantastic animals, show some respect by hitting them straight in the heart! That way they don't suffer.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest a female red deer downed with a vital hit to the heart.</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Fleischer #7</td>
                          <td className="px-3 py-6 border-b border-gray-300">This time I want you to go all sneaky on them, don't scare them. Make yourself comfortable, and lie down prone.</td>
                          <td className="px-3 py-6 border-b border-gray-300">
                            <ul className="list-disc list-inside">
                              <li>Travel to Jonsdorf.</li>
                              <li>Harvest 3 red deer downed while prone at night.</li>
                            </ul>
                          </td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Fleischer #8</td>
                          <td className="px-3 py-6 border-b border-gray-300">I like the blinds. They cover you from the sun and it's just really cozy having your morning coffee in there while waiting.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest 2 red deer downed from at least 100.00 m away and from a ground blind.</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Fleischer #9</td>
                          <td className="px-3 py-6 border-b border-gray-300">I haven't been as close to a red since that day when I was lost in the woods, they are truly beautiful up close. You have to see it to believe it!</td>
                          <td className="px-3 py-6 border-b border-gray-300">
                            <ul className="list-disc list-inside">
                              <li>Travel to Bohndorf Canyon.</li>
                              <li>Take a picture of a red deer in close proximity.</li>
                            </ul>
                          </td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Fleischer #10</td>
                          <td className="px-3 py-6 border-b border-gray-300">I used to get lost in the hills of Bohndorf a lot. Why don't you go there, it is really beautiful!</td>
                          <td className="px-3 py-6 border-b border-gray-300">
                            <ul className="list-disc list-inside">
                              <li>Travel to Bohndorf Hill.</li>
                              <li>Harvest a red deer downed with a .454 caliber revolver, and earn a SILVER score or higher.</li>
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h5 id="hirsch-cornelia" className="font-medium">Cornelia Holzer Missions</h5>
                  <div className="mt-2 overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-green-100 text-left">
                          <th className="px-3 py-6 border-b border-gray-300">Mission</th>
                          <th className="px-3 py-6 border-b border-gray-300">Description</th>
                          <th className="px-3 py-6 border-b border-gray-300">Objective</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Conni #1</td>
                          <td className="px-3 py-6 border-b border-gray-300">Hi! Want to help me track some animals? I need you to ID different populations in Königsberg. Don't ask why. ;)</td>
                          <td className="px-3 py-6 border-b border-gray-300">
                            <ul className="list-disc list-inside">
                              <li>Travel to Königsberg</li>
                              <li>ID tracks from 4 different species of animals</li>
                            </ul>
                          </td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Conni #2</td>
                          <td className="px-3 py-6 border-b border-gray-300">You should try shotgun hunting at Rinderland Gorge. It's a blast! Enjoy the view while there.</td>
                          <td className="px-3 py-6 border-b border-gray-300">
                            <ul className="list-disc list-inside">
                              <li>Travel to Rinderland Gorge</li>
                              <li>Harvest any animal downed with a shotgun</li>
                            </ul>
                          </td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Conni #3</td>
                          <td className="px-3 py-6 border-b border-gray-300">Try night hunting yet? Go for it just place your shot well. You don't want a long retrieve @ night, trust me!</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest any animal downed within 20.00 m at night with a shotgun</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Conni #4</td>
                          <td className="px-3 py-6 border-b border-gray-300">Sommer's happy again. How about trying a handgun hunt? It's not easy!</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest any animal downed with a handgun</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Conni #5</td>
                          <td className="px-3 py-6 border-b border-gray-300">Time to step it up with the handgun. Double or nothing!</td>
                          <td className="px-3 py-6 border-b border-gray-300">
                            <ul className="list-disc list-inside">
                              <li>Travel to Tichenau</li>
                              <li>Harvest 2 animals downed with a handgun</li>
                            </ul>
                          </td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Conni #6</td>
                          <td className="px-3 py-6 border-b border-gray-300">Your handgun skills are pretty good. Now try it out on some different animals!</td>
                          <td className="px-3 py-6 border-b border-gray-300">
                            <ul className="list-disc list-inside">
                              <li>Travel to Petershain Cornfields</li>
                              <li>Harvest 3 different species of animals downed with a handgun</li>
                            </ul>
                          </td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Conni #7</td>
                          <td className="px-3 py-6 border-b border-gray-300">I could use some help with silent deer harvests in Ernsdorf. Got a bow?</td>
                          <td className="px-3 py-6 border-b border-gray-300">
                            <ul className="list-disc list-inside">
                              <li>Travel to Ernsdorf</li>
                              <li>Harvest 2 deer downed with a bow</li>
                            </ul>
                          </td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Conni #8</td>
                          <td className="px-3 py-6 border-b border-gray-300">Bow hunting @ night is tricky, but less noisy which the locals like. Help me harvest a deer in Spreeberg with it?</td>
                          <td className="px-3 py-6 border-b border-gray-300">
                            <ul className="list-disc list-inside">
                              <li>Travel to Spreeberg Castle</li>
                              <li>Harvest a deer downed within 30.00 m at night with a bow</li>
                            </ul>
                          </td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Conni #9</td>
                          <td className="px-3 py-6 border-b border-gray-300">If you haven't tried the 70 lb bow yet, you really should!</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest 2 different species downed with the Hawk Edge CB-70</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Conni #10</td>
                          <td className="px-3 py-6 border-b border-gray-300">Why don't you try out our valentine challenge? An arrow to the heart! ;)</td>
                          <td className="px-3 py-6 border-b border-gray-300">
                            <ul className="list-disc list-inside">
                              <li>Travel to Petershain Tower Ruin</li>
                              <li>Harvest a deer downed with a bow and a hit to the heart</li>
                            </ul>
                          </td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Conni #11</td>
                          <td className="px-3 py-6 border-b border-gray-300">Try to ID calls from foxes around Petershain Lake. We've seen a few over there, and I'm trying to get a count on the population.</td>
                          <td className="px-3 py-6 border-b border-gray-300">
                            <ul className="list-disc list-inside">
                              <li>Travel to Petershain Lake</li>
                              <li>ID a call from 2 different foxes</li>
                            </ul>
                          </td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Conni #12</td>
                          <td className="px-3 py-6 border-b border-gray-300">Let's continue our examination of the fox population!</td>
                          <td className="px-3 py-6 border-b border-gray-300">
                            <ul className="list-disc list-inside">
                              <li>Travel to Ernsdorf</li>
                              <li>ID tracks from 3 different foxes</li>
                            </ul>
                          </td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Conni #13</td>
                          <td className="px-3 py-6 border-b border-gray-300">Ok, looks like the population is in good shape, let's start the hunt!</td>
                          <td className="px-3 py-6 border-b border-gray-300">
                            <ul className="list-disc list-inside">
                              <li>Travel to Bohndorf</li>
                              <li>Harvest a fox</li>
                            </ul>
                          </td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Conni #14</td>
                          <td className="px-3 py-6 border-b border-gray-300">In the fields, you can't get too close to a fox, or they'll see you!</td>
                          <td className="px-3 py-6 border-b border-gray-300">
                            <ul className="list-disc list-inside">
                              <li>Travel to Schonfeldt Strawfields</li>
                              <li>Harvest a fox downed from at least 100.00 m away</li>
                            </ul>
                          </td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Conni #15</td>
                          <td className="px-3 py-6 border-b border-gray-300">Found a nice fox yet?</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest a fox and earn a SILVER score or higher</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Conni #16</td>
                          <td className="px-3 py-6 border-b border-gray-300">The foxes seem to be thriving in the north as well!</td>
                          <td className="px-3 py-6 border-b border-gray-300">
                            <ul className="list-disc list-inside">
                              <li>Travel to Hirschfelden</li>
                              <li>Harvest 3 foxes</li>
                            </ul>
                          </td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Conni #17</td>
                          <td className="px-3 py-6 border-b border-gray-300">Tressler's hunt can begin! By the way, have you seen a fox up close? It's quite rare.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest a fox downed within 30.00 m</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Conni #18</td>
                          <td className="px-3 py-6 border-b border-gray-300">Since foxes are small animals, this might be a challenge for you. Give it a shot!</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest a fox downed from at least 75.00 m away with a .357 handgun</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Conni #19</td>
                          <td className="px-3 py-6 border-b border-gray-300">I bet you haven't tried hunting for foxes on your belly yet.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest 2 foxes downed with a handgun while prone</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Conni #20</td>
                          <td className="px-3 py-6 border-b border-gray-300">The fox population seems to be almost under control, let's do one last push!</td>
                          <td className="px-3 py-6 border-b border-gray-300">
                            <ul className="list-disc list-inside">
                              <li>Travel to Spreeberg Lake</li>
                              <li>Harvest 3 foxes downed from a ground blind</li>
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

          </div>
        )}

        {selected === 'sundarpatan' && (
          <div className="mt-4 bg-gray-50 rounded p-3 text-gray-800">
            <TableOfContents 
              mainMissionsId="sundarpatan-main"
              sideMissionsId="sundarpatan-side"
              sideMissions={[
                { id: 'sundarpatan-asmita', label: 'Asmita Gurung Missions' },
                { id: 'sundarpatan-birendra', label: 'Birendra Majhi Missions' },
              ]}
            />
            <h3 className="font-semibold mb-2">Sundarpatan — Missions</h3>
            <p>
              Missions on Sundarpatan are provided by the reserve wardens Asmita Gurung and Birendra Majhi. The reserve has 9 main missions and 11 side missions.
            </p>

            <div className="mt-4 overflow-x-auto">
              <h4 id="sundarpatan-main" className="font-semibold mb-2">Story Missions</h4>
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-green-100 text-left">
                    <th className="px-3 py-6 border-b border-gray-300">Mission</th>
                    <th className="px-3 py-6 border-b border-gray-300">Description</th>
                    <th className="px-3 py-6 border-b border-gray-300">Objective</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Homestay</td>
                    <td className="px-3 py-6 border-b border-gray-300">Welcome! You just got here, but let's get you settled in first. As soon as you're ready we need to address a problem tiger.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Go to Asmita's village (Lek Bhanjyan)</li>
                        <li>Pick up the food Asmita prepared</li>
                        <li>Harvest one animal ethically</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Before The Storm</td>
                    <td className="px-3 py-6 border-b border-gray-300">Apply your tracking talent to locate where the tiger has been roaming and assess recent behaviour.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Go to the tiger sighting area</li>
                        <li>Track the tiger</li>
                        <li>Examine the livestock carcasses</li>
                        <li>Examine the backpack</li>
                        <li>Follow the tiger's tracks</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Ghost Village</td>
                    <td className="px-3 py-6 border-b border-gray-300">The tiger has attacked livestock near Pauwa village; assist villagers by repairing and protecting their property.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Travel to Pauwa</li>
                        <li>Pick up the Khukuri in Pauwa</li>
                        <li>Remove 4 weeds</li>
                        <li>Repair 3 broken fences</li>
                        <li>Go to the hunting spot</li>
                        <li>Harvest 2 animals for the villagers (Tahr, Blue Sheep or Northern Red Muntjac)</li>
                        <li>Return to the village</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">The Man-Eater</td>
                    <td className="px-3 py-6 border-b border-gray-300">Follow a blood trail after Birendra reports he shot a tiger; inspect and document the scene.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Follow the blood trail</li>
                        <li>Examine the tiger's corpse</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">This Beloved Land of Ours</td>
                    <td className="px-3 py-6 border-b border-gray-300">After retrieving the tiger, help survey other parts of the reserve and learn local priorities for conservation and safety.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Travel to the water buffalo grounds</li>
                        <li>Travel to the Nilgai feeding grounds</li>
                        <li>Travel to the village called Bhanjyanket</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Blood Bonds</td>
                    <td className="px-3 py-6 border-b border-gray-300">Investigate a gunshot scene, photograph evidence and follow the trail for clues relating to recent violent incidents.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Locate the area where the gunshot was fired</li>
                        <li>Search the scene for clues</li>
                        <li>Photograph the bullet casing and blood stains</li>
                        <li>Follow the blood trail</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">A Harsh Environment</td>
                    <td className="px-3 py-6 border-b border-gray-300">Search for Manish who fled to the mountains; equip yourself and travel into the Himal region.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Travel to Ghampus to pick up trekking gear</li>
                        <li>Pick up mountain trekking gear</li>
                        <li>Travel to Sherpa Gaun in the Himal</li>
                        <li>Eat the thukpa at the guest house</li>
                        <li>Rest at the guest house</li>
                        <li>Reach the nearest lookout tower</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">The Ghost of the Mountain</td>
                    <td className="px-3 py-6 border-b border-gray-300">Inspect trap cameras and analyze video cards to check for Snow Leopard sightings or evidence of Manish's movements.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Inspect 3 trap cameras</li>
                        <li>Find PC in Sano Gaun village</li>
                        <li>Use a computer to analyze the video cards</li>
                        <li>Scout the area where a Snow Leopard was spotted</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">At the Edge of the World</td>
                    <td className="px-3 py-6 border-b border-gray-300">Search Himgiri for Manish in a dangerous, remote zone; recover his diary and signal for rescue if needed.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Go to the abandoned hut in the Himgiri region</li>
                        <li>Look for Manish</li>
                        <li>Pick up the diary</li>
                        <li>Make a fire to ward off any spirits</li>
                        <li>Follow the strange footsteps</li>
                        <li>Walk to the other side of the lake</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6">
              <h4 id="sundarpatan-side" className="font-semibold mb-2">Side Missions</h4>
              <div className="space-y-6">
                <div>
                  <h5 id="sundarpatan-asmita" className="font-medium">Asmita Gurung Missions</h5>
                  <div className="mt-2 overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-green-100 text-left">
                          <th className="px-3 py-6 border-b border-gray-300">Mission</th>
                          <th className="px-3 py-6 border-b border-gray-300">Description</th>
                          <th className="px-3 py-6 border-b border-gray-300">Objective</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Family Heirloom</td>
                          <td className="px-3 py-6 border-b border-gray-300">Asmita asks you to retrieve her grandfather's rifle and its ammo from separate locations.</td>
                          <td className="px-3 py-6 border-b border-gray-300">
                            <ul className="list-disc list-inside">
                              <li>Travel to Asmita's House</li>
                              <li>Pick up the Lockbox Key</li>
                              <li>Unlock Asmita's Lockbox</li>
                              <li>Travel to Barahi</li>
                              <li>Pick up the Ammo</li>
                            </ul>
                          </td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Call of the Ghost</td>
                          <td className="px-3 py-6 border-b border-gray-300">Try spotting the Snow Leopard; a spiritual, rare experience reported by local Sherpa guides.</td>
                          <td className="px-3 py-6 border-b border-gray-300">
                            <ul className="list-disc list-inside">
                              <li>Spot a Snow Leopard</li>
                            </ul>
                          </td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Bubalic Proportions</td>
                          <td className="px-3 py-6 border-b border-gray-300">Follow water buffalo to determine whether they are closer to domestic or wild types.</td>
                          <td className="px-3 py-6 border-b border-gray-300">
                            <ul className="list-disc list-inside">
                              <li>Photograph 10 Water Buffalo from 50m</li>
                              <li>Examine 5 Water Buffalo droppings</li>
                              <li>Examine 30 Water Buffalo tracks</li>
                            </ul>
                          </td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">In His Footsteps</td>
                          <td className="px-3 py-6 border-b border-gray-300">Follow grandfather's paths and hunt with the Gandhare Rifle to appreciate tradition and technique.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest a Tahr or Blue Sheep ethically using the Gandhare Rifle</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Ice Mountain</td>
                          <td className="px-3 py-6 border-b border-gray-300">Visit high Himal landmarks and harvest high-altitude species as part of a mastery challenge.</td>
                          <td className="px-3 py-6 border-b border-gray-300">
                            <ul className="list-disc list-inside">
                              <li>Visit the landmarks of the Himal</li>
                              <li>Harvest a Wild Yak and Earn Gold or better</li>
                              <li>Harvest a Blue Sheep and Earn Gold or better</li>
                              <li>Harvest a Tahr and Earn Gold or better</li>
                              <li>Harvest a Tibetan Fox and Earn Gold or better</li>
                            </ul>
                          </td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">The Hills</td>
                          <td className="px-3 py-6 border-b border-gray-300">Explore Pahad landmarks for cultural and scenic discoveries.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Visit the Landmarks of the Pahad</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">High Altitude Hunting</td>
                          <td className="px-3 py-6 border-b border-gray-300">Help maintain trophy populations by ethically harvesting smaller high-altitude specimens.</td>
                          <td className="px-3 py-6 border-b border-gray-300">
                            <ul className="list-disc list-inside">
                              <li>Harvest 3 male Tahr weighing 90kg or less</li>
                              <li>Harvest 3 male Blue Sheep weighing 65kg or less</li>
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h5 id="sundarpatan-birendra" className="font-medium">Birendra Majhi Missions</h5>
                  <div className="mt-2 overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-green-100 text-left">
                          <th className="px-3 py-6 border-b border-gray-300">Mission</th>
                          <th className="px-3 py-6 border-b border-gray-300">Description</th>
                          <th className="px-3 py-6 border-b border-gray-300">Objective</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Saving the Swamp Deer</td>
                          <td className="px-3 py-6 border-b border-gray-300">Remove dangerous traps that poachers have set near Barasingha drinking lakes.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Remove Barasingha traps</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Low Land</td>
                          <td className="px-3 py-6 border-b border-gray-300">Explore the Terai landmarks and spot local antelope species for conservation awareness.</td>
                          <td className="px-3 py-6 border-b border-gray-300">
                            <ul className="list-disc list-inside">
                              <li>Visit the Landmarks of the Terai</li>
                              <li>Spot a Barasingha</li>
                              <li>Spot a Blackbuck</li>
                              <li>Spot a Muntjac</li>
                            </ul>
                          </td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Antelope Wrangling</td>
                          <td className="px-3 py-6 border-b border-gray-300">Help control Nilgai herds that plague local farmers.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest 50 Nilgai</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Tiger Crossing</td>
                          <td className="px-3 py-6 border-b border-gray-300">Construct warning signs and implement measures to deter tigers from popular trails.</td>
                          <td className="px-3 py-6 border-b border-gray-300">
                            <ul className="list-disc list-inside">
                              <li>Construct a tiger warning sign</li>
                              <li>Scare tigers away from the trail</li>
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {selected === 'layton-lake' && (
          <div className="mt-4 bg-gray-50 rounded p-3 text-gray-800">
            <h3 className="font-semibold mb-2">Layton Lake District — Missions</h3>
            <p>
              Missions on the Layton Lake District are provided by the reserve warden Colton Locke. The reserve has 28 main missions: 3 tasks at the very beginning are given by Colton himself, he transfers the rest from other people, each gives 5 main missions. Also this map has fantastic amount of 70 side missions.
            </p>

            <p className="mt-2">
              Story campaign is completely absent. While DLC reserves have stories of varying quality with 2-3 storylines (ecology, family, mistakes of the past, investigation, poachers, crimes), the Layton Lake missions are simply sets of tasks from a group of people related to shooting certain game in a certain way and taking pictures.
            </p>

            <TableOfContents 
              mainMissionsId="layton-main"
              sideMissionsId="layton-side"
              sideMissions={[
                { label: "Colton \"Doc\" Locke Missions", id: "layton-doc" },
                { label: "Emily Conners Missions", id: "layton-emily" },
                { label: "Fiona Vualez Missions", id: "layton-fiona" },
                { label: "Paul Beatty Missions", id: "layton-paul" },
                { label: "Richard Hope Missions", id: "layton-richard" }
              ]} 
            />

            <div className="mt-4 overflow-x-auto">
              <h4 id="layton-main" className="font-semibold mb-2">Main Missions</h4>
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-green-100 text-left">
                    <th className="px-3 py-6 border-b border-gray-300">Mission</th>
                    <th className="px-3 py-6 border-b border-gray-300">Description</th>
                    <th className="px-3 py-6 border-b border-gray-300">Objective</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">The First Steps</td>
                    <td className="px-3 py-6 border-b border-gray-300">Ah, you made it here in one piece. Welcome to the untamed wild. You're in the Pacific Northwest.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Locate a track</li>
                        <li>Shoot an animal</li>
                        <li>Harvest an animal</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Getting the Lay of the Land</td>
                    <td className="px-3 py-6 border-b border-gray-300">If you want to get your bearings, there are lookout points spread out all over the reserve.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Visit an lookout point</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Stocking Up</td>
                    <td className="px-3 py-6 border-b border-gray-300">Be sure to stop by one of the outposts. They're essentially base camps.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Visit an outpost</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Hope - A Visitor</td>
                    <td className="px-3 py-6 border-b border-gray-300">Richard Hope is a survivalist that lives off the land. He has set up a lot of camps in the area and discovered last night that one of his camps was ransacked. Food was stolen and Hope has asked Doc to track down who is responsible. Doc is out of the area and he has asked you to investigate further.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Travel to Hope's Camp</li>
                        <li>Find the tracks at the camp</li>
                        <li>Take photos of tracks</li>
                        <li>Follow tracks to investigate</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Hope - Investigating Bears</td>
                    <td className="px-3 py-6 border-b border-gray-300">After having his stores ransacked, Hope is in need of supplies for the winter season. Food is scarce and Hope suspects bears are scaring away the blacktail deer in the region. Doc has suggested you to investigate the possible presence of black bears in Balmont.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Travel to Balmont</li>
                        <li>ID Tracks from 3 different bears</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Hope - A Second Visit</td>
                    <td className="px-3 py-6 border-b border-gray-300">Hope has had yet another visit- A lot of food was stolen or damaged again. Who could want to harm Hope this way? He has asked for help with hunting some deer for to replenish his food storages.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Harvest 3 blacktail deer</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Hope - Unwelcome Guests</td>
                    <td className="px-3 py-6 border-b border-gray-300">Your investigation showed evidence of bears in Balmont. This is fairly uncommon, as they are usually found in Layton Lows and seldom stray this far east. Hope is concerned for his safety, he does not want them on his home ground. Doc has asked you to help pressure the migrating Black Bears.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Travel to Balmont</li>
                        <li>Harvest two black bears</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Hope - Sick Papa Bear</td>
                    <td className="px-3 py-6 border-b border-gray-300">Hikers have reported a sickly looking bear behaving strangely around outposts. It's probably hungry and circling outposts looking for food. Perhaps it's learned that populated locations are easier sources of food than hunting. Doc believes hikers might not have followed protocol when it comes to disposing their leftover food. This creates a dangerous situation for everyone, and you have been asked to locate and deal with the bear in question.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Travel to High Lake</li>
                        <li>Harvest the sickly bear</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Trampfine - A Family Picture</td>
                    <td className="px-3 py-6 border-b border-gray-300">Trampfine contacted Doc the other day and had questions about your investigation of the black bears. Doc withheld the part about you being a hunter. Now Jonathan thinks you can help him with his own research. He has been trying to capture one of the more famous black bear families in the region, but has had no success. He's currently occupied with his bear droppings collection, so he'll compensate you if you help out.</td>
                    <td className="px-3 py-6 border-b border-gray-300">Photograph two black bears.</td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Trampfine - For a Few Samples of Poo</td>
                    <td className="px-3 py-6 border-b border-gray-300">Trampfine has got a problem. Some bears have been migrating to the Late District, where Richard Hope is situated. Trampfine and Hope has a poor relationship, mostly because Jonathan thinks Richard will kill his "darlings", the black bears. Jonathan has requested your help with retrieving a few samples of bear droppings missing from his collection.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Travel to Balmont</li>
                        <li>Find 3 samples of black bear droppings</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Trampfine - A picture of Mr. Black</td>
                    <td className="px-3 py-6 border-b border-gray-300">Trampfine has reached out with another rather specific bear-related task. This time he needs a picture taken. Mr. Black, a big, male Black Bear, has been sighted in Balmont. Trampfine has asked you to take a picture of Mr. Black.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Travel to Balmont Lake</li>
                        <li>Take a picture of Mr. Black</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Trampfine - The Return of Bear Man</td>
                    <td className="px-3 py-6 border-b border-gray-300">Trampfine has accused Hope of harvesting one of his favorite bears, Rudy. Doc is avoiding taking sides, but he mentioned that Mr. Black has gone missing. Trampfine is worried about the bear's whereabouts, so he wants you to locate and take another picture of Mr. Black.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Travel to High Lake Swamps</li>
                        <li>Take a picture of Mr. Black</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Trampfine - Trampfine Is Lost</td>
                    <td className="px-3 py-6 border-b border-gray-300">Trampfine has gone missing. Doc fears the worst given Trampfine's infatuation with black bears. A hiker said he spotted him heading towards Mount Kraken a few days ago. No one has heard from Trampfine since. Doc has asked you to investigate.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Travel to Kraken Highs</li>
                        <li>Search the area for clues to</li>
                        <li>Follow the tracks found</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Vualez - Wildlife Control</td>
                    <td className="px-3 py-6 border-b border-gray-300">The Lake District houses a sizeable coyote population. Generally, coyotes are reclusive animals that avoid human contact, but they can begin to cohabitate in human-populated areas due to the oversupply of food or shelter. There have been multiple sightings of loitering coyotes causing distress in nearby towns. The situation is being handled by the Varmint Wildlife Control and their local operative Fiona Vualez. She is working on thinning out the coyote population and the organization will compensate you for assisting.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Travel to Cheelah</li>
                        <li>Use the Predator "Jackrabbit" Caller [Optional]</li>
                        <li>Harvest 2 coyotes</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Vualez - The Big Coyote Tour</td>
                    <td className="px-3 py-6 border-b border-gray-300">The Wildlife Varmint Control has initiated a reserve-wide effort to tackle the expanding coyote population. The organization secured a contract from the local government to operate in Lake District, and has access to some of the best hunting equipment around. Doc recommends you to follow Fiona's lead and try out her favorite rifle across the reserve for the coyotes.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Harvest 1 coyote in Southern Ridge downed with a .270 rifle</li>
                        <li>Harvest 1 coyote in Lake District downed with a .270 rifle</li>
                        <li>Harvest 1 coyote in Layton Lows downed with a .270 rifle</li>
                        <li>Harvest 1 coyote in Highton Peaks downed with a .270 rifle</li>
                        <li>Harvest 1 coyote in Northern Ridge downed with a .270 rifle</li>
                        <li>Harvest a coyote in 2 of the suggested regions with a .270 rifle</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Vualez - Late Nights with the Dogs</td>
                    <td className="px-3 py-6 border-b border-gray-300">Fiona has noticed a group of coyotes stopping by Leviathan Lake often for water late at night. She'd like you to clear the area of them. Doc believes it'd be good for the campers too. They could appreciate a full moon without maniacal howling in the background.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Travel to Leviathan Lake</li>
                        <li>Harvest 2 coyotes at night around Leviathan Lake</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Vualez - The Silent Hunt</td>
                    <td className="px-3 py-6 border-b border-gray-300">Doc has received word from Hope that coyotes have been scaring away whitetail deer in Balmont. Hope requested Fiona's assistance, but unfortunately she's away in a neighboring town seeing to stray coyotes. She recommended you in her place, and suggested using a bow to harvest coyotes so as not to further scare away any whitetail deer.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Travel to Balmont</li>
                        <li>Harvest 2 coyotes downed with a bow</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Vualez - The Werecoyote</td>
                    <td className="px-3 py-6 border-b border-gray-300">There have been a number of scares lately in the Cheelah region. Trampfine ran to Doc in terror about a large and aggressive coyote that he spotted. Vualez and the Varmint Control would like it downed to restore some confidence in safety for that region.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Travel to Cheelah</li>
                        <li>Harvest the large coyote</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Conners - Lost Writings</td>
                    <td className="px-3 py-6 border-b border-gray-300">Emily is one of the reserve's fire lookouts, and also a published author. She's working on her third novel now. One of her favorite animals is the Roosevelt elk. She's made detailed notes on their routes and general behavior in the area in her notebook, but recently dropped it somewhere near her cabin while on a hike. A finder's fee awaits the one who can returned her notebook.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Travel to Norden Hiking Cabins</li>
                        <li>Locate Conner's tracks</li>
                        <li>Follow the tracks</li>
                        <li>Pick up notebook</li>
                        <li>Leave the notebook at a lookout tower</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Conners - Capturing the Landscape</td>
                    <td className="px-3 py-6 border-b border-gray-300">Emily has taken it upon herself to make the lookout towers feel more welcoming to people visiting the area. She also wants them to be a valuable source of information. She was thinking of taking photographs of the reserve's landmarks and posting them on billboards in the towers. Since you proved reliable with her notebook, Emily has asked for your assistance.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Take a photo of High Lake Rock Formations</li>
                        <li>Take a photo of Wilipeg Caves</li>
                        <li>Take a photo of the Cheelah Hiking Village</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Conners - Emily Heart Elk</td>
                    <td className="px-3 py-6 border-b border-gray-300">Emily is not done decorating the lookout towers yet. She got the idea to hang a Roosevelt elk trophy up in one of the Calburn towers. She doesn't hunt herself, but she spotted a few Roosevelts passing by a hunting stand in Calburn. She asked for your help in harvesting a nice bull for the tower.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Travel to Calburn</li>
                        <li>Harvest a Roosevelt elk bull downed from a hunting stand</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Conners - Putting Out the Fire</td>
                    <td className="px-3 py-6 border-b border-gray-300">Emily has noticed a smoke pillar nearby High Lake outpost. In her rush to check it out, she tripped and sprained her ankle. Now she needs someone else to act on the situation. Doc does not want to call in a response squad until he's sure it's an emergency. Emily has turned to you for help.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Travel to the source of the smoke pillar in High Lake</li>
                        <li>Extinguish the fire</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Conners - End of Season</td>
                    <td className="px-3 py-6 border-b border-gray-300">Emily has finished her lookout shift for the season and is leaving the reserve for vacation. She left her notebook for Doc, and passed along an observation about Roosevelt elk in the region. She noticed one beautiful bull that liked to hang around the Layton Canyon lookout tower. The bull would be gone by the time she came down for a closer look, so she has challenged you to harvest it. It was only spotted at night.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Travel to Layton Canyon</li>
                        <li>Visit the lookout tower at night</li>
                        <li>Harvest the Roosevelt elk bull</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Beatty - Waiting It Out</td>
                    <td className="px-3 py-6 border-b border-gray-300">Paul Beatty is the local tourist guide and hiking expert. He was born in a nearby town and his father is still an active hunter in the area, a local legend of sorts. Off-season, Beatty travels the world but he usually ends up in the Pacific Northwest at least twice a year to work and visit his dad. There’s been a bit of a gossip about his reason for returning to the reserve this season. Paul and his dad are competitive in nature and like to challenge the active hunter in the area in different ways. Their favorite trophy is the moose and you have received their first challenge.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Travel to Willipeg</li>
                        <li>Harvest a moose downed from a hunting stand</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Beatty - To the Rescue</td>
                    <td className="px-3 py-6 border-b border-gray-300">Paul reached out to Doc with an urgent message about a missing hiker. James Worthington, 36 years old, has not been seen since his hike earlier this morning in Highton Peaks. He was going to meet a friend in Willipeg until several hours passed without a sign of him. His hike most likely began from Chopeeka outpost. Paul and Doc could use some extra help locating him.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Travel to the starting point of the tracks in Chopeeka</li>
                        <li>Follow Jame's tracks to investigate</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Beatty - Hunting Moose</td>
                    <td className="px-3 py-6 border-b border-gray-300">Paul has gone off to meet with a certain "someone". In his place, Beatty's father has offered up a challenge. His favorite hunting spot is in a ground blind near the Highton River. The moose go there to drink often. Paul and his dad try to top each other's trophy scores all the time. They wonder if you can beat the Beatty record.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Travel to Highton River</li>
                        <li>Harvest a moose downed from a ground blind</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Beatty - The Circle Route</td>
                    <td className="px-3 py-6 border-b border-gray-300">Each year Paul and his father walk the "circle route". This hiking path stretches around the Lake District region, allowing every region in the reserve to be covered. While on the circle route, Paul and his dad challenge themselves to harvest "The Big Five", one each of the five species you can find in the reserve. They've challenged you to do the same and beat their total scores.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Harvest a moose in Highton Peaks</li>
                        <li>Harvest a Roosevelt elk in Northern Ridge</li>
                        <li>Harvest a coyote in Southern Ridge</li>
                        <li>Harvest a bear in Layton Lows</li>
                        <li>Harvest a Blacktail in Lake District</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Beatty - Playing the Guide</td>
                    <td className="px-3 py-6 border-b border-gray-300">Paul is done for the season it seems. He's been spending his time with Emily in one of the lookout towers and Doc hears they are planning some kind of big trip together. Doc was contracted by the state office for travel and tourism in the Pacific Northwest. They are looking for photos of hiking trails and vistas to be added to next season's travel guide. Doc has asked for your help.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Take a photo from the lookout tower in Chopeeka</li>
                        <li>Take a photo from the lookout tower in Roonachee</li>
                        <li>Take a photo from the lookout tower in Norden</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Hope - Various</td>
                    <td className="px-3 py-6 border-b border-gray-300">Richard Hope mission set continued.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Travel to Balmont</li>
                        <li>Find 3 footprints from 3 different blacktail deer</li>
                      </ul>
                    </td>
                  </tr>

                </tbody>
              </table>
            </div>

            <div className="mt-6">
              <h4 id="layton-side" className="font-semibold mb-2">Side Missions</h4>

              <div className="space-y-6">
                <div>
                  <h5 id="layton-doc" className="font-medium">Colton "Doc" Locke Missions</h5>
                  <div className="mt-2 overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-green-100 text-left">
                          <th className="px-3 py-6 border-b border-gray-300">Mission</th>
                          <th className="px-3 py-6 border-b border-gray-300">Description</th>
                          <th className="px-3 py-6 border-b border-gray-300">Objective</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Doc #1</td>
                          <td className="px-3 py-6 border-b border-gray-300">Keep on investigating the bear population please, for Trampfine's sake!</td>
                          <td className="px-3 py-6 border-b border-gray-300">ID droppings from 3 different black bears</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Doc #2</td>
                          <td className="px-3 py-6 border-b border-gray-300">A client would like a bear for its pelt. The fur caught their eye.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Travel to Mount Kraken. Harvest a black bear while in Mount Kraken</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Doc #3</td>
                          <td className="px-3 py-6 border-b border-gray-300">The client was happy with the last fur, she wants to know if there are other options.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Spot 3 different fur types on black bears</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Doc #4</td>
                          <td className="px-3 py-6 border-b border-gray-300">Some are more aggressive than others, try using a blind!</td>
                          <td className="px-3 py-6 border-b border-gray-300">Travel to Hope's Camp in Belmont. Harvest wildlife downed from a ground blind</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Doc #5</td>
                          <td className="px-3 py-6 border-b border-gray-300">Try getting up close, easier to get a good shot.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest a black bear that was downed within 40.00 m</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Doc #6</td>
                          <td className="px-3 py-6 border-b border-gray-300">The client is a museum this time, they want 2 nice pieces for their exhibition!</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest 2 black bears downed with a .270 caliber rifle and earn a Quick Kill Bonus of 100</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Doc #7</td>
                          <td className="px-3 py-6 border-b border-gray-300">That thing with Mr. Black got to me a little. Have you ever gotten real close to a bear?</td>
                          <td className="px-3 py-6 border-b border-gray-300">Travel to Roonachee Church. Harvest a black bear downed within 50.00 m with a slug</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Doc #8</td>
                          <td className="px-3 py-6 border-b border-gray-300">Turns out we need to do a push to control the population!</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest 4 black bears</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Doc #9</td>
                          <td className="px-3 py-6 border-b border-gray-300">Now try the bow on a big one in Mount Kraken!</td>
                          <td className="px-3 py-6 border-b border-gray-300">Travel to Mount Kraken. Harvest a black bear that was downed with a bow at night</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Doc #10</td>
                          <td className="px-3 py-6 border-b border-gray-300">This one is tricky, we need a photo of a live one pretty close up.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Travel to High Lake Swamps Take a picture of a black bear</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Doc #11</td>
                          <td className="px-3 py-6 border-b border-gray-300">Now when you've warmed up a little, why don't you investigate some more animals in the area?</td>
                          <td className="px-3 py-6 border-b border-gray-300">Travel to Lake District. ID footprints from 4 different animals.</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Doc #12</td>
                          <td className="px-3 py-6 border-b border-gray-300">My favorite weapon and place to hunt, try it out yourself.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Travel to Roonachee Highs. Harvest an animal downed with a 45-70 caliber rifle.</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Doc #13</td>
                          <td className="px-3 py-6 border-b border-gray-300">Get close and look the animal in the eye before you pull the trigger.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest an animal downed within 30.00 m with any shotgun</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Doc #14</td>
                          <td className="px-3 py-6 border-b border-gray-300">I've never understood cameras myself but hey, you can do it! Just lie down, relax, focus, and shoot!</td>
                          <td className="px-3 py-6 border-b border-gray-300">Take a picture of an animal while prone</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Doc #15</td>
                          <td className="px-3 py-6 border-b border-gray-300">The handgun is always good to have, have ya tried it at night?</td>
                          <td className="px-3 py-6 border-b border-gray-300">Travel to Southern Ridge. Harvest 2 animals downed with a handgun at night</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Doc #16</td>
                          <td className="px-3 py-6 border-b border-gray-300">If you use the handgun, you have to remember to get real close.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Travel to Lake District. Harvest 3 different species downed within 30.00 m with a handgun</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Doc #17</td>
                          <td className="px-3 py-6 border-b border-gray-300">I sometimes sleep in a blind and when I wake up they're all there, it's perfect!</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest a Roosevelt elk downed from a ground blind</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Doc #18</td>
                          <td className="px-3 py-6 border-b border-gray-300">Been to the mines yet? I love that place, I've seen some blacktails there.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Travel to Norden Mines Harvest a blacktail deer downed within 30.00 m with a bow</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Doc #19</td>
                          <td className="px-3 py-6 border-b border-gray-300">If you see a coyote, you can be pretty sure there's more where that came from. They stay together. See for yourself!</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest a male and female coyote downed with a bow</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Doc #20</td>
                          <td className="px-3 py-6 border-b border-gray-300">Those rusty old bridges in Balmont can be used to position yourself well for a shot.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Travel to the train bridge at Balmont Railroad. Harvest a moose downed with a bow and a hit to the heart</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Doc #21</td>
                          <td className="px-3 py-6 border-b border-gray-300">Why don't you try hunting down a whitetail or a blacktail, go for a clean hit in the dark!</td>
                          <td className="px-3 py-6 border-b border-gray-300">Travel to Lake Cheelah. Harvest a whitetail deer or a blacktail deer at night</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Doc #22</td>
                          <td className="px-3 py-6 border-b border-gray-300">I'd like to see your shooting skills now, show me you can steady that aim.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Travel to Balmont Lake. Harvest an animal downed from at least 75.00 m away in Balmont Lake</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Doc #23</td>
                          <td className="px-3 py-6 border-b border-gray-300">This area is famous for those fine, mature bucks, see if you can find one.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest a male whitetail deer and earn a Quick Kill Bonus of 100</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Doc #24</td>
                          <td className="px-3 py-6 border-b border-gray-300">Got a meat export client that is in need of a large amount of deer, and quick!</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest 2 whitetail deer weighing at least 70.00 kg each</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Doc #25</td>
                          <td className="px-3 py-6 border-b border-gray-300">Let's give you a challenge now... 150 meters!</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest a whitetail deer downed from at least 150.00 m away</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Doc #26</td>
                          <td className="px-3 py-6 border-b border-gray-300">Let's get close now!</td>
                          <td className="px-3 py-6 border-b border-gray-300">Travel to South Lake. Harvest a whitetail deer downed within 30.00 m</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Doc #27</td>
                          <td className="px-3 py-6 border-b border-gray-300">The 6-year-olds are the nicest ones, they are usually worth a high value. Use the dark to your advantage!</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest a whitetail deer at night and earn a Quick Kill Bonus of 100</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Doc #28</td>
                          <td className="px-3 py-6 border-b border-gray-300">If you track a male whitetail, you can be pretty sure you'll end up finding their female match, too.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest a male and female whitetail deer downed with a bow</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Doc #29</td>
                          <td className="px-3 py-6 border-b border-gray-300">Time to estimate the state of the deer population!</td>
                          <td className="px-3 py-6 border-b border-gray-300">Travel to Layton Lake Shore. Find footprints from 4 different whitetail deer</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Doc #30</td>
                          <td className="px-3 py-6 border-b border-gray-300">The population is still too high in this region. Keep it up and stick to the stands this time!</td>
                          <td className="px-3 py-6 border-b border-gray-300">Travel to High Lake. Harvest 2 animals downed from a hunting stand</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h5 id="layton-emily" className="font-medium">Emily Conners Missions</h5>
                  <div className="mt-2 overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-green-100 text-left">
                          <th className="px-3 py-6 border-b border-gray-300">Mission</th>
                          <th className="px-3 py-6 border-b border-gray-300">Description</th>
                          <th className="px-3 py-6 border-b border-gray-300">Objective</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Conners #1</td>
                          <td className="px-3 py-6 border-b border-gray-300">I got my notebook back. Thanks! I was writing when I saw this group of beauties close to the tower, see if you can study their behavior!</td>
                          <td className="px-3 py-6 border-b border-gray-300">ID a track from a Roosevelt elk; ID a call from Roosevelt elk; Spot a Roosevelt elk</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Conners #2</td>
                          <td className="px-3 py-6 border-b border-gray-300">There seems to be a few of them in Norden, might be worth checking them out?</td>
                          <td className="px-3 py-6 border-b border-gray-300">Travel to Norden; Take pictures of 2 different Roosevelt elk</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Conners #3</td>
                          <td className="px-3 py-6 border-b border-gray-300">You know, I could never hunt myself but someone once said that the shotgun sure packs a punch. I'll stay away from that!</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest a male Roosevelt elk downed with any shotgun</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Conners #4</td>
                          <td className="px-3 py-6 border-b border-gray-300">Heard you helped Paul out with a lost person! Nice going. Here's a hint for you: The Roosevelt elk scare easily, so make sure to keep your distance!</td>
                          <td className="px-3 py-6 border-b border-gray-300">Travel to Calburn; Harvest a male Roosevelt elk downed from at least 125.00 m away</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Conners #5</td>
                          <td className="px-3 py-6 border-b border-gray-300">Their awareness also makes it extra challenging to get close!</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest a male Roosevelt elk downed within 40.00 m and earn a Quick Kill Bonus of 50 or higher</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Conners #6</td>
                          <td className="px-3 py-6 border-b border-gray-300">People say it's hard to see the difference between whitetail and blacktail antlers, and that's true! But the Roosevelt's antlers. I'd say that Roosevelt ones are the best!</td>
                          <td className="px-3 py-6 border-b border-gray-300">Travel to Norden Mines; Harvest a male Roosevelt elk downed in Norden Mines and earn a SILVER Game Score or higher</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Conners #7</td>
                          <td className="px-3 py-6 border-b border-gray-300">Sometimes I think that Calburn has more Roosevelts than Norden. But I'm not sure.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Travel to Calburn Canyon; Harvest 2 Roosevelt elk downed from a hunting stand</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Conners #8</td>
                          <td className="px-3 py-6 border-b border-gray-300">Sometimes the interactions between Roosevelt elk and whitetails can be really interesting. If you're lucky, you might catch a glimpse of them together while waiting in a blind!</td>
                          <td className="px-3 py-6 border-b border-gray-300">Travel to South Lake; Harvest 3 Roosevelt elk downed from a ground blind</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Conners #9</td>
                          <td className="px-3 py-6 border-b border-gray-300">I'm on bed rest now with this sprained ankle. Sometimes I see them coming in a long row from the tower. I guess you'd like that</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest 3 Roosevelt elk</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Conners #10</td>
                          <td className="px-3 py-6 border-b border-gray-300">That fire could have easily grown and gotten out of hand. Thanks for taking care of it. I've been thinking a little, and if I'd ever start hunting, I'd like to learn to use the bow.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Travel to Highton Peaks Harvest a Roosevelt Elk with a bow in Highton Peaks at night</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h5 id="layton-fiona" className="font-medium">Fiona Vualez Missions</h5>
                  <div className="mt-2 overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-green-100 text-left">
                          <th className="px-3 py-6 border-b border-gray-300">Mission</th>
                          <th className="px-3 py-6 border-b border-gray-300">Description</th>
                          <th className="px-3 py-6 border-b border-gray-300">Objective</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Vualez #1</td>
                          <td className="px-3 py-6 border-b border-gray-300">Thanks for the help with the coyotes! As you know they are coming from the east and spreading fast, investigate please.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Travel to Mount Leviathan; Spot 2 different coyotes</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Vualez #2</td>
                          <td className="px-3 py-6 border-b border-gray-300">Yes, they are indeed spreading fast, take a few out please!</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest 2 coyotes downed with a rifle</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Vualez #3</td>
                          <td className="px-3 py-6 border-b border-gray-300">I'd like to investigate the coyotes' communications during this season, please track and listen to them!</td>
                          <td className="px-3 py-6 border-b border-gray-300">ID footprints from a coyote; ID a call from a coyote; Spot a coyote</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Vualez #4</td>
                          <td className="px-3 py-6 border-b border-gray-300">The best way to hunt a coyote is one shot with the right weapon.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Travel to Cheelah Lake; Harvest a coyote and earn an Integrity Bonus of 100</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Vualez #5</td>
                          <td className="px-3 py-6 border-b border-gray-300">See if you can lure them closer using a caller, it usually works pretty well with coyotes.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Travel to Cheelah Hiking Village; Use the Predator "Jackrabbit" Caller; Harvest 2 coyotes</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Vualez #6</td>
                          <td className="px-3 py-6 border-b border-gray-300">Sometimes we have to stay ahead and take measures against population increases. For example, the mating season starts soon!</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest 2 coyotes with a .357 magnum revolver</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Vualez #7</td>
                          <td className="px-3 py-6 border-b border-gray-300">It's always best to hit the animal where it kills, as painlessly as possible.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest 2 coyotes downed a hit to the heart</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Vualez #8</td>
                          <td className="px-3 py-6 border-b border-gray-300">Time to go for a spree with the bow!</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest 4 coyotes downed with a 60 lb bow</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Vualez #9</td>
                          <td className="px-3 py-6 border-b border-gray-300">Sorry to hear about your bear problem. Anyways, the handgun can be good to have as a backup!</td>
                          <td className="px-3 py-6 border-b border-gray-300">Travel to Layton Lake Shore; Harvest a coyote downed with a handgun and a hit to the heart at night</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Vualez #10</td>
                          <td className="px-3 py-6 border-b border-gray-300">Time to get close, this is just to challenge your sneaking skills!</td>
                          <td className="px-3 py-6 border-b border-gray-300">Travel to Lake Leviathan; Harvest a coyote downed within 30.00 m with a bow</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h5 id="layton-paul" className="font-medium">Paul Beatty Missions</h5>
                  <div className="mt-2 overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-green-100 text-left">
                          <th className="px-3 py-6 border-b border-gray-300">Mission</th>
                          <th className="px-3 py-6 border-b border-gray-300">Description</th>
                          <th className="px-3 py-6 border-b border-gray-300">Objective</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Beatty #1</td>
                          <td className="px-3 py-6 border-b border-gray-300">You got some skills man! Time to track some moose. They like swampy areas.</td>
                          <td className="px-3 py-6 border-b border-gray-300">ID footprints from a moose; Spot a moose</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Beatty #2</td>
                          <td className="px-3 py-6 border-b border-gray-300">Investigate their mating calls, I hear them a lot when guiding the tourists around. They actually answer calls!</td>
                          <td className="px-3 py-6 border-b border-gray-300">Identify a male and female moose call</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Beatty #3</td>
                          <td className="px-3 py-6 border-b border-gray-300">Don't like the disappearance of Trampfine at all. Anyways, my mama always said the meat from female moose tasted better. I'm not sure this is true. What do you think?</td>
                          <td className="px-3 py-6 border-b border-gray-300">Travel to Willipeg; Harvest 2 female moose</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Beatty #4</td>
                          <td className="px-3 py-6 border-b border-gray-300">Let's test your photography skills. I'm looking for a beauty of a rack.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Take a picture of a moose with a trophy rating of 147 or greater</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Beatty #5</td>
                          <td className="px-3 py-6 border-b border-gray-300">Time for the lightning round, my dad once got 3 within the hour!</td>
                          <td className="px-3 py-6 border-b border-gray-300">Travel to Highton Peaks; Harvest 3 moose</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Beatty #6</td>
                          <td className="px-3 py-6 border-b border-gray-300">The moose is majestic compared to the deer in this area, have you seen it up close?</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest a moose downed within 45.00 m with a .270 caliber rifle</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Beatty #7</td>
                          <td className="px-3 py-6 border-b border-gray-300">And some of these beauties can get really big, over a half tonne,</td>
                          <td className="px-3 py-6 border-b border-gray-300">Travel to Chopeeka; Harvest a moose weighing at least 520.00 kg</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Beatty #8</td>
                          <td className="px-3 py-6 border-b border-gray-300">If I'm hiking in this area, I sometimes use the blinds as cover from the wind!</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest a moose downed from a ground blind at night</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Beatty #9</td>
                          <td className="px-3 py-6 border-b border-gray-300">Sometimes the .44 mag is the only weapon I carry around.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest 2 female moose downed with a scoped .44 mag. revolver</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Beatty #10</td>
                          <td className="px-3 py-6 border-b border-gray-300">The Big 5 huh! Nice one! I've never used the bow but my dad always rants about how I should try it out. You?</td>
                          <td className="px-3 py-6 border-b border-gray-300">Travel to Willipeg Caves; Harvest a moose downed within 30.00 m with a bow</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h5 id="layton-richard" className="font-medium">Richard Hope Missions</h5>
                  <div className="mt-2 overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-green-100 text-left">
                          <th className="px-3 py-6 border-b border-gray-300">Mission</th>
                          <th className="px-3 py-6 border-b border-gray-300">Description</th>
                          <th className="px-3 py-6 border-b border-gray-300">Objective</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Hope #1</td>
                          <td className="px-3 py-6 border-b border-gray-300">Heard from Doc you helped out at the camp, thanks. Can you help me some more?</td>
                          <td className="px-3 py-6 border-b border-gray-300">Travel to Balmont; Find 3 footprints from 3 different blacktail deer</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Hope #2</td>
                          <td className="px-3 py-6 border-b border-gray-300">Could you help me out with some more hunting? Stuck repairing my camp again.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Travel to Balmont; Harvest 2 blacktail deer in Balmont</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Hope #3</td>
                          <td className="px-3 py-6 border-b border-gray-300">Bears huh, i knew it! I usually don't care about the antlers, but I'd like a nice pair to use for rattling.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest two male blacktail deer and earn a Quick Kill Bonus of 50 or higher</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Hope #4</td>
                          <td className="px-3 py-6 border-b border-gray-300">Ran into a hiker the other day that asked me to round up some deer form him. Wanna help? I'll deliver the meat to him.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest 2 blacktail deer weighing at least 70.00 kg each</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Hope #5</td>
                          <td className="px-3 py-6 border-b border-gray-300">I can get really close to them, it's like they're used to having me around these days.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Travel to Roonachee Highs; Harvest a whitetail deer or a blacktail deer downed within 45.00 m</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Hope #6</td>
                          <td className="px-3 py-6 border-b border-gray-300">Up in the mountains you can get a good view of the lower terrain, try getting one from far!</td>
                          <td className="px-3 py-6 border-b border-gray-300">Travel to Kraken Rope Bridge; Harvest a blacktail deer downed from at least 200.00 m away with a scoped rifle</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Hope #7</td>
                          <td className="px-3 py-6 border-b border-gray-300">Those are my favorite towers, I usually down at least one everytime I'm in one.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Travel to High Lake Swamps; Harvest 2 animals downed from a hunting stand</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Hope #8</td>
                          <td className="px-3 py-6 border-b border-gray-300">Photo hiking, are we? In High Lake, there are less hikers around. I built some of the ground blinds there myself, try them out!</td>
                          <td className="px-3 py-6 border-b border-gray-300">Travel to High Lake Rock Formations; Harvest 2 whitetail deer downed from a ground blind</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Hope #9</td>
                          <td className="px-3 py-6 border-b border-gray-300">I usually save the gun for critters, but sometimes I have to down a deer using a handgun!</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest a blacktail deer downed within 30.00 m at night with a .44 magnum revolver</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Hope #10</td>
                          <td className="px-3 py-6 border-b border-gray-300">I hear you have a selection of guns. Myself, I carry only the rifle.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Travel to Lake District; Harvest 4 blacktail deer downed using a different weapon for each.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

          </div>
        )}

        {selected === 'medved-taiga' && (
          <div className="mt-4 bg-gray-50 rounded p-3 text-gray-800">
            <h3 className="font-semibold mb-2">Medved-Taiga National Park — Missions</h3>
            <p>
              Missions on the Medved-Taiga National Park are provided by the reserve warden Alena Khasavovna Khada. Currently, the reserve has 82 missions: 32 main missions and 50 side missions.
            </p>

            <p className="mt-2">
              This is the most voluminous campaign in the game, the number of story missions alone exceeds that on other maps by 2-3 times.
            </p>

            <TableOfContents
              mainMissionsId="medved-main"
              sideMissionsId="medved-side"
              sideMissions={[
                { label: "Anatoly Barnyashev Missions", id: "medved-anatoly" },
                { label: "Dr. Columbus Neidell Missions", id: "medved-columbus" },
                { label: "Dimitri Pushkin Missions", id: "medved-dimitri" },
                { label: "Katerina Khasavovna Missions", id: "medved-katerina" },
                { label: "Georgy Grankin Missions", id: "medved-georgy" },
                { label: "Dr. Svetlana Isakova Missions", id: "medved-svetlana" }
              ]}
            />

            <div className="mt-4 overflow-x-auto">
              <h4 id="medved-main" className="font-semibold mb-2">Main Missions</h4>
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-green-100 text-left">
                    <th className="px-3 py-6 border-b border-gray-300">Mission</th>
                    <th className="px-3 py-6 border-b border-gray-300">Description</th>
                    <th className="px-3 py-6 border-b border-gray-300">Objective</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Welcome to Siberia</td>
                    <td className="px-3 py-6 border-b border-gray-300">Welcome to Siberia! You have been hired as a hunter for a cross-disciplinary expedition to study the effects of climate change in Medved-Taiga National Park. Track down and harvest your first animal.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Locate a track</li>
                        <li>Shoot an animal</li>
                        <li>Harvest an animal</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Getting a Lay of the Land</td>
                    <td className="px-3 py-6 border-b border-gray-300">If you want to get your bearings, there are lookout points spread out all over the reserve. Scale your first one.</td>
                    <td className="px-3 py-6 border-b border-gray-300">Visit a lookout point</td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Stoking Up</td>
                    <td className="px-3 py-6 border-b border-gray-300">Be sure to stop by one of the outposts. They're essentially base camps. Claim your first one.</td>
                    <td className="px-3 py-6 border-b border-gray-300">Visit an outpost</td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Supplies for Gunther</td>
                    <td className="px-3 py-6 border-b border-gray-300">Gunther Baden is the photographer for the expedition. He's set up a number of camps throughout the area to document the effects of climate change in the region. Alena hasn't heard from him in a week, but his last message said he was low on food.</td>
                    <td className="px-3 py-6 border-b border-gray-300">Harvest an animal</td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Taiga Meetup</td>
                    <td className="px-3 py-6 border-b border-gray-300">Alena is worried about Gunther. His last communication was over a week ago before a big blizzard hit the region. He has several camps around the region. Head to his last known location and search for Gunther.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Head to Gunther's camp</li>
                        <li>Travel to Gunther's Camp</li>
                        <li>Look for evidence of Gunther's whereabouts</li>
                        <li>Follow Gunther's tracks</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">The Wounded One</td>
                    <td className="px-3 py-6 border-b border-gray-300">It looks like Gunther has moved to another campsite. He left his food uncovered, and bears have stolen it all. Journey over to the camp and see if you can locate him.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Try to find Gunther</li>
                        <li>Travel to Gunther's second campsite</li>
                        <li>Look for evidence of Gunther's whereabouts</li>
                        <li>Harvest the wounded reindeer</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Tracking Gunther</td>
                    <td className="px-3 py-6 border-b border-gray-300">Gunther left a note: he managed to find a dead musk deer and has been able to stave off his hunger for now. He's headed back to the base camp, but he's terribly sick. If he's nearby, he might need your help. Follow his tracks and see if you can catch up with him.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Search for Gunther</li>
                        <li>Follow Gunther's tracks</li>
                        <li>Search for Gunther</li>
                        <li>Read Gunther's note</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Anthrax Alert</td>
                    <td className="px-3 py-6 border-b border-gray-300">There are water monitoring sites scattered throughout this region. Our biologist, Anatoly Barnyashev, wants you to check on those to make sure this anthrax contamination didn't spread.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Check in on the first of three weather stations in the region</li>
                        <li>Check in on the second of three weather stations in the region</li>
                        <li>Check in on the last weather station in the region</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Boar Harvest</td>
                    <td className="px-3 py-6 border-b border-gray-300">Nenets report wild boar in the area marked on your Huntermate. They overgrazed the land to the west and now they're migrating here. Unfortunately, they'll disrupt the musk deer's grazing and attract hungry lynxes. Thin the boar pack down by a few heads. That should create enough pressure to push them back home.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Travel to the region marked on your map</li>
                        <li>Harvest 2 wild boars</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Southbound and Down</td>
                    <td className="px-3 py-6 border-b border-gray-300">The expedition got off to a strange start, but now Alena wants to continue to investigate the thawing permafrost crater. Go check in on the outpost west of Vorota v podzemnyy mir, a.k.a. the Gateway to the Underworld.</td>
                    <td className="px-3 py-6 border-b border-gray-300">Travel to the P'yanaya Tayga Western Outpost</td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Chuchunya Fignya</td>
                    <td className="px-3 py-6 border-b border-gray-300">The Gateway attracts many visitors, but not all of them are welcome. Some of the Nenets traveling through your area have reported their food being stolen. Very unusual, especially in winter. Can you see if this is an animal problem? Like a wayward lynx? Hungry brown bear?</td>
                    <td className="px-3 py-6 border-b border-gray-300">Search the area for evidence of a predator</td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Chasing Chuchunya</td>
                    <td className="px-3 py-6 border-b border-gray-300">Is someone playing a joke? Chuchunya tracks have been found around the P'yanaya Taiga Western Outpost! Keep tracking "Bigfoot," but if you encounter poachers or pranksters, do NOT engage them.</td>
                    <td className="px-3 py-6 border-b border-gray-300">Search for evidence of the Chuchunya in the area marked on your map</td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Local Weather Report</td>
                    <td className="px-3 py-6 border-b border-gray-300">Search for evidence of the Chuchunya in the area marked on your map. The Chuchunya's trail has gone cold, but we've got other work to do. Alena needs you to check on another weather station inside the permafrost crater.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Look in the place marked on your Huntermate</li>
                        <li>Locate the weather station</li>
                        <li>Activate the weather station</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Gateway to the Underworld</td>
                    <td className="px-3 py-6 border-b border-gray-300">The Gateway to the Underworld is a popular destination for climatologists and tourists alike when it's not forty-five below. Head to the P'yanaya Taiga Central Outpost.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Travel to the P'yanaya Tayga Central Outpost</li>
                        <li>Search the area for evidence of the previous expedition team</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">The Elusive Lynx</td>
                    <td className="px-3 py-6 border-b border-gray-300">Lynx migrated to this area many years ago, after some overzealous hunters killed off all the wolves. The wolves moved out, the lynx moved in. It's hard to spot the lynx, but documenting their migration and survival is essential to our research. Nenets have already reported lynx in your area. Find a lynx and photograph it for us.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>(Optional) Spot a lynx</li>
                        <li>Take a photograph of a lynx in Lesnye Lands</li>
                        <li>Harvest a lynx in Lesnye Lands</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">The Boars are Back in Town</td>
                    <td className="px-3 py-6 border-b border-gray-300">Guess who just got back today? Them wild-eyed boars that had been away. Rumor has it that boars are invading the Lesnye Lands. Maybe the lynx pushed them there. Maybe the storm. Either way, the area can't sustain them. Create hunting pressure by harvesting a few.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Travel to Lesnye Lands</li>
                        <li>Harvest 3 boars within the region marked on your map</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">No Such Thing</td>
                    <td className="px-3 py-6 border-b border-gray-300">Alena has marked another outpost to visit. Stay alert for any sign of Chuchunya. Or, more likely, poachers who want to rob you. We can't conduct a scientific survey while some jokers are out here pretending to be Chuchunya or Bigfoot or whatever.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Travel to the Kholm Zverolova Eastern Outpost</li>
                        <li>Examine the broken ATV</li>
                        <li>Search the area for footprints</li>
                        <li>Photograph the "Bigfoot" tracks</li>
                        <li>Follow the "Bigfoot" tracks</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Meeting Georgy Grankin</td>
                    <td className="px-3 py-6 border-b border-gray-300">Someone (or something) is vandalizing outposts in the area, and Alena can't conduct a proper scientific survey with these disruptions. Whoever is doing this, we need to warn the locals. The only other person near you is Georgy Grankin. Head to his cabin.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Travel to the area marked on your map</li>
                        <li>Approach Georgy Grankin's cabin</li>
                        <li>Enter Grankin's cabin</li>
                        <li>Search Grankin's cabin</li>
                        <li>Take a photograph of the fake Bigfoot feet</li>
                        <li>Take Grankin's shotgun</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">The Stumbling Bear</td>
                    <td className="px-3 py-6 border-b border-gray-300">The state surveyor's office called me today with reports of a trail of blood in a particular area. Probably a large animal, like a moose or like a bear. See what you can find. Be careful out there.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Travel to the area marked on your map</li>
                        <li>Harvest the wounded bear</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Packing Protein</td>
                    <td className="px-3 py-6 border-b border-gray-300">Before Alena send you into Nenets territory, she need you to pack away some substantial meat for the incoming expedition party. Reindeer or moose will do.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Travel to the area marked on your map</li>
                        <li>Harvest a reindeer or a moose</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Bring Your Own Bridge</td>
                    <td className="px-3 py-6 border-b border-gray-300">Alena points out a bridge the Nenets use to safely cross reindeer over the frozen river when there's a thaw. It's broken now though. Fixing this bridge should be an easy task for a survivor like you!</td>
                    <td className="px-3 py-6 border-b border-gray-300">Travel to the area marked on your map; Fix the broken bridge</td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">A Gift for the Nenets</td>
                    <td className="px-3 py-6 border-b border-gray-300">Before you leave the Dikiy Coast for the lake, please harvest some meat for the Nenets. Any animal, your choice. EXCEPT for reindeer the Reindeer Herders have enough reindeer.</td>
                    <td className="px-3 py-6 border-b border-gray-300">Harvest any animal except reindeer</td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Walking the Taiga</td>
                    <td className="px-3 py-6 border-b border-gray-300">You're moving along into Nenets country. Nenets can recognize the face of every reindeer in their herd, even among thousands of animals. Their clothing, their food, their tools it all comes from the reindeer. Some reindeer are so sacred, they will never be slaughtered. Alena is excited for you to experience her people and their culture.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Travel to the area marked on your map</li>
                        <li>Locate the Vetrenyye Plains Western Outpost</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Know Your Reindeer</td>
                    <td className="px-3 py-6 border-b border-gray-300">This area is along a popular route for the Reindeer Herders Festival. But last year, for the first time, the Nenets had major problems with lynxes and brown bears in this area. The warmer springs led to a surge of vegetation, which led to a surge in small game, and that led to a big increase in large game. Alena has a simple task: get to know these reindeer. Spot them, track them, photograph them, but DO. NOT. SHOOT.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Travel to the Zhizni Spring</li>
                        <li>Take a photograph of a Nenets' Reindeer</li>
                        <li>(Optional) Examine a track of Nenets' Reindeer</li>
                        <li>(Optional) Spot a Nenets' Reindeer</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Hunting the Elusive Lynx</td>
                    <td className="px-3 py-6 border-b border-gray-300">Now that you're acquainted with the reindeer population, let's talk predators. The lynx is a much bigger threat to the reindeer herds than the bears, so the expedition will need to check on the local population. Alena says we need to determine if the lynx is eating a diet of reindeer.</td>
                    <td className="px-3 py-6 border-b border-gray-300">Travel to the region marked on your HunterMate; Harvest a lynx</td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">The Ancestors’ Prayer</td>
                    <td className="px-3 py-6 border-b border-gray-300">The Nenets migrate hundreds of kilometers across the Yamal peninsula. Sacred sites have served the community for a millenium. Alena wants you to visit one and open your mind. What visions will you have?</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Travel to the region marked on your map</li>
                        <li>Visit the sacred landmark</li>
                        <li>Interact with the sacred landmark</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">The Lost and Found</td>
                    <td className="px-3 py-6 border-b border-gray-300">Locals here in the village are saying there's a radioactive mutant on the loose, which sounds about as credible as Georgy's Chuchunya. But Katerina says something spooked her neighbors' herd last night, and now some Nenets reindeer have gone missing. Maybe another lynx. Maybe something else. Can you try to find a missing reindeer?</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Travel to the area marked on your map</li>
                        <li>Search the area for evidence of the missing Nenets' Reindeer</li>
                        <li>Follow the reindeer tracks</li>
                        <li>Search for evidence of a predator</li>
                        <li>Follow the lynx tracks</li>
                        <li>Search for evidence of an even greater predator</li>
                        <li>Take a photograph of the bear tracks</li>
                        <li>Harvest the wounded reindeer</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Danger Ahead</td>
                    <td className="px-3 py-6 border-b border-gray-300">You've cleared every obstacle we've encountered. But take a moment and think, are you ready to hunt a dangerous bear? Do you have the right guns? The right gear? If not, head to an outpost to prepare yourself. If you are equipped and ready, scout for bear tracks nearby.</td>
                    <td className="px-3 py-6 border-b border-gray-300">Travel to the area marked on your map and search for bear tracks; Follow the tracks</td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">On Hollowed Mountain</td>
                    <td className="px-3 py-6 border-b border-gray-300">The temperature has dropped over ten degrees in the last few hours, and we've got a stormfront coming in. You need to get to safety before that happens. Look for a campsite in the area and get there before the weather turns against you.</td>
                    <td className="px-3 py-6 border-b border-gray-300">Travel to Besplodnoye Plateau Eastern Outpost</td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">The Poisoned Lynx</td>
                    <td className="px-3 py-6 border-b border-gray-300">Georgy reported a lynx behaving very strangely nearby wandering in the daytime, exposing its position unusual behavior for a strategic, nocturnal predator. Georgy is not the most reliable source, but Alena feels this is no hoax. Maybe it's another lynx injured by that bear. Maybe it's another anthrax problem. Have a look.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Travel to the area marked on your map</li>
                        <li>Spot the sick lynx</li>
                        <li>Take a photo of the sick lynx</li>
                        <li>Harvest the sick lynx</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">The Albino Brown Bear</td>
                    <td className="px-3 py-6 border-b border-gray-300">You need to get back on the bear hunt, so it's time you understand what you're up against. The locals think that a "radioactive mutant" lives on Pustaya Mountain, but Alena knows what's really up there. An injured albino brown bear has been causing trouble throughout the region. Please help end the Albino's pain.</td>
                    <td className="px-3 py-6 border-b border-gray-300">Travel to the area marked on your map and enter the cave; Harvest the albino brown bear</td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Enjoy the View</td>
                    <td className="px-3 py-6 border-b border-gray-300">Head to the peak of Pustaya Mountain and take in a view of the taiga's beautiful vista.</td>
                    <td className="px-3 py-6 border-b border-gray-300">Travel to the top of the Besplodnoye Plateau Northern Lookout Point</td>
                  </tr>

                </tbody>
              </table>
            </div>

            <div className="mt-6">
              <h4 id="medved-side" className="font-semibold mb-2">Side Missions</h4>

              <div className="space-y-6">
                <div>
                  <h5 id="medved-anatoly" className="font-medium">Anatoly Barnyashev Missions</h5>
                  <div className="mt-2 overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-green-100 text-left">
                          <th className="px-3 py-6 border-b border-gray-300">Mission</th>
                          <th className="px-3 py-6 border-b border-gray-300">Description</th>
                          <th className="px-3 py-6 border-b border-gray-300">Objective</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Biological Contaminants #1</td>
                          <td className="px-3 py-6 border-b border-gray-300">This Dr. Barnyashev, Alena's biologist. I require a local musk deer for our anthrax investigation. The specimen must have intact lungs.</td>
                          <td className="px-3 py-6 border-b border-gray-300">
                            <ul className="list-disc list-inside">
                              <li>Travel to Lesnye Lands</li>
                              <li>Harvest a musk deer with undamaged lungs</li>
                            </ul>
                          </td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Biological Contaminants #2</td>
                          <td className="px-3 py-6 border-b border-gray-300">The boar are also at risk for anthrax contamination. Please obtain a specimen with, you guessed it, lungs intact.</td>
                          <td className="px-3 py-6 border-b border-gray-300">
                            <ul className="list-disc list-inside">
                              <li>Travel to Lesyne Lands</li>
                              <li>Harvest a wild boar with undamaged lungs and an Integrity Bonus of 50 or higher</li>
                            </ul>
                          </td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Musk Deer Spotting</td>
                          <td className="px-3 py-6 border-b border-gray-300">Musk deer are going extinct thx to poachers. Can you spot any on the Drunken Taiga?.</td>
                          <td className="px-3 py-6 border-b border-gray-300">
                            <ul className="list-disc list-inside">
                              <li>Travel to P'yanyy Forest</li>
                              <li>Spot 3 different musk deer</li>
                            </ul>
                          </td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Biological Contaminants #3</td>
                          <td className="px-3 py-6 border-b border-gray-300">Svetlana says you are in the mountains? We have concerns about lynx in the area. Can you track them down?</td>
                          <td className="px-3 py-6 border-b border-gray-300">Travel to P'yanaya Tayga; Harvest a lynx and pass the harvest check</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Biological Contaminants #4</td>
                          <td className="px-3 py-6 border-b border-gray-300">Okay, now I need lynx samples for anthrax testing. Lungs intact. If you can handle that!</td>
                          <td className="px-3 py-6 border-b border-gray-300">Travel to P'yanaya Tayga; Harvest a lynx without damaging their lungs</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Biological Contaminants #5</td>
                          <td className="px-3 py-6 border-b border-gray-300">You are far more skilled than the last hunter! One more lynx & I'll have all the samples I need. Mind the lungs.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest a lynx without damaging their lungs and get a BRONZE Game Score or higher</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Making Ends Meet #1</td>
                          <td className="px-3 py-6 border-b border-gray-300">Alena hates to admit but we are VERY low on funds. Selling extra boar meat would help make ends meet.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest 2 wild boars with Consecutive Harvest score of 20 or higher</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Making Ends Meet #2</td>
                          <td className="px-3 py-6 border-b border-gray-300">Thanks! We sell this boar through licensed distributors. If you have time, more boar = more cash for this expedition!</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest 2 wild boars with a BRONZE Game Score or higher</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Wandering Bears #1</td>
                          <td className="px-3 py-6 border-b border-gray-300">Bears usually keep out of Trapper's Hill, but locals report one there. Can you locate bear tracks in the region?</td>
                          <td className="px-3 py-6 border-b border-gray-300">Travel to Zverolova Hill; Track 3 different brown bears</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Wandering Bears #2</td>
                          <td className="px-3 py-6 border-b border-gray-300">So it's true! There is a bear in Trapper's Hill. Can you spot the animal to confirm?</td>
                          <td className="px-3 py-6 border-b border-gray-300">Travel to Zverolova Hill; Spot 2 different brown bears</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Biological Contaminants #6</td>
                          <td className="px-3 py-6 border-b border-gray-300">We need a reindeer for contaminant tests. Your challenge? All organs must be intact. Aim for the spine.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest a reindeer with a shot to the spine or without damaging any major organs</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h5 id="medved-columbus" className="font-medium">Dr. Columbus Neidell Missions</h5>
                  <div className="mt-2 overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-green-100 text-left">
                          <th className="px-3 py-6 border-b border-gray-300">Mission</th>
                          <th className="px-3 py-6 border-b border-gray-300">Description</th>
                          <th className="px-3 py-6 border-b border-gray-300">Objective</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Bronze Age I</td>
                          <td className="px-3 py-6 border-b border-gray-300">Dr. Neidell calling! Is there a cave painting of a fisherman in the SE hills of Rybatskiy Zaliv? Snap a pic, I'll make it worthwhile!</td>
                          <td className="px-3 py-6 border-b border-gray-300">Find the cave painting; Photograph the cave painting</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Bronze Age II</td>
                          <td className="px-3 py-6 border-b border-gray-300">Nenets say a painting in the south Lesnye Lands shows hunters on the taiga stalking Irish elk. Can u confirm with a photo?</td>
                          <td className="px-3 py-6 border-b border-gray-300">Find the cave painting site; Photograph the cave painting</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Bronze Age III</td>
                          <td className="px-3 py-6 border-b border-gray-300">Rumor has it a painting on Zverolova Hill depicts ancient mariners. I'd looove a picture of that!</td>
                          <td className="px-3 py-6 border-b border-gray-300">Find the cave painting; Photograph the cave painting</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Bronze Age IV</td>
                          <td className="px-3 py-6 border-b border-gray-300">Can you photo a painting on the NW side of Hollowed Mountain? It shows your ancient counterparts, the bear hunters!</td>
                          <td className="px-3 py-6 border-b border-gray-300">Find the cave painting site; Photograph the cave painting</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Bronze Age V</td>
                          <td className="px-3 py-6 border-b border-gray-300">Alena told me about that albino bear Insane story. Can you get me a pic of a cave painting by the bear's den?</td>
                          <td className="px-3 py-6 border-b border-gray-300">Find the cave painting site; Photograph the cave painting</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Bronze Age Hunter</td>
                          <td className="px-3 py-6 border-b border-gray-300">Some folklore claim those ancient bear hunters struck giant bears down with a single shot. Can you?</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest a brown bear downed by a single shot</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h5 id="medved-dimitri" className="font-medium">Dimitri Pushkin Missions</h5>
                  <div className="mt-2 overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-green-100 text-left">
                          <th className="px-3 py-6 border-b border-gray-300">Mission</th>
                          <th className="px-3 py-6 border-b border-gray-300">Description</th>
                          <th className="px-3 py-6 border-b border-gray-300">Objective</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Federal Eco Service #1</td>
                          <td className="px-3 py-6 border-b border-gray-300">Hello friend, this is Dimi P from Federal Eco Service! You have time for easy job?</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest a musk deer</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Federal Eco Service #2</td>
                          <td className="px-3 py-6 border-b border-gray-300">Hello friend, we have sick wild boar in area. Can you be taking care of problem?</td>
                          <td className="px-3 py-6 border-b border-gray-300">Travel to Rybatskiy Bay; Harvest a wild boar</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Federal Eco Service #3</td>
                          <td className="px-3 py-6 border-b border-gray-300">Hello friend, taxidermist need moose for local museum. You bring us good one, da?</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest a moose and pass the harvest check</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Federal Eco Service #4</td>
                          <td className="px-3 py-6 border-b border-gray-300">Hello friend, sadly we must cull reindeer to prevent worse anthrax spread. Sensitive work. You help?</td>
                          <td className="px-3 py-6 border-b border-gray-300">Travel to Zabolochennye Lands; Harvest a reindeer</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Federal Eco Service #5</td>
                          <td className="px-3 py-6 border-b border-gray-300">Hello friend, I have brown bear problem at Ledyanoy Bay. Too many bear overgraze land. You help?</td>
                          <td className="px-3 py-6 border-b border-gray-300">Travel to Ledyanoy Bay; Harvest a brown bear with a Trophy Rating of 22 or higher and a quick kill bonus of 25 or higher</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Federal Eco Service #6</td>
                          <td className="px-3 py-6 border-b border-gray-300">Hello friend, BAD NEWS. We found more anthrax in the permafrost. Can you cull some reindeer?</td>
                          <td className="px-3 py-6 border-b border-gray-300">Travel to P'yanyy Forest; Harvest 2 reindeer</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Federal Eco Service #7</td>
                          <td className="px-3 py-6 border-b border-gray-300">Hello friend, our anthrax problem is becoming EPIDEMIC. Please cull more reindeer.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Travel to Zverolova Hill; Harvest a reindeer at night</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">An Influential Person #1</td>
                          <td className="px-3 py-6 border-b border-gray-300">Hello friend, I need a special gift for an "influential" official: the biggest moose you can find.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest a moose that weighs 500.00 kg or heavier</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">An Influential Person #2</td>
                          <td className="px-3 py-6 border-b border-gray-300">Hello friend, to avoid making another influential official jealous, one more moose plz. BIG moose!!</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest a male moose with a TROPHY RATING of 147 or higher</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Federal Eco Service #8</td>
                          <td className="px-3 py-6 border-b border-gray-300">Hello friend, my heart is frowning for this nasty anthrax business, but more reindeer must die. :(</td>
                          <td className="px-3 py-6 border-b border-gray-300">Travel to Zverolova Hill; Harvest 2 reindeer with an Integrity Bonus of 50 or higher and a Consecutive Harvest of 20 or higher</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Federal Eco Service #9</td>
                          <td className="px-3 py-6 border-b border-gray-300">Hello fearless bearkiller friend, we have more unpleasant anthrax business. More reindeer to cull.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Travel to Besplodnoye Plateau; Harvest 3 reindeer downed from at least 80.00 m away.</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Federal Eco Service #10</td>
                          <td className="px-3 py-6 border-b border-gray-300">Hello friend, the anthrax problem is PROBABLY contained. To be safe, 1 more reindeer, plz?</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest a reindeer with rating of SILVER or higher</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h5 id="medved-katerina" className="font-medium">Katerina Khasavovna Missions</h5>
                  <div className="mt-2 overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-green-100 text-left">
                          <th className="px-3 py-6 border-b border-gray-300">Mission</th>
                          <th className="px-3 py-6 border-b border-gray-300">Description</th>
                          <th className="px-3 py-6 border-b border-gray-300">Objective</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Friend of the Nenets #1</td>
                          <td className="px-3 py-6 border-b border-gray-300">This is Alena's sister, Katerina. HELLO! For a safer journey, you should create more hunting pressure on the brown bears.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Travel to Besplodnoye Plateau; Harvest a brown bear downed at least 100m away</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Friend of the Nenets #2</td>
                          <td className="px-3 py-6 border-b border-gray-300">Your work for Alena is dangerous. Do you pray? There is a sacred place up the mountain. Go. Pray.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Travel to the region marked on your HunterMate; Find the Nenets' sacred place</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Friend of the Nenets #3</td>
                          <td className="px-3 py-6 border-b border-gray-300">I can't repay you for helping Alena, but bring me a moose and I'll cook a feast you'll never forget.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest male moose with Integrity Bonus of 100</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Friend of the Nenets #4</td>
                          <td className="px-3 py-6 border-b border-gray-300">No outsider hunter has earned Nenets respect like you. You should try hunting big boar from a distance.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest 2 wild boars from at least 100.00 m away</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">A Nenets Challenge #1</td>
                          <td className="px-3 py-6 border-b border-gray-300">Had fun hunting for sunrises? For a real challenge, let's see you take down a lynx with a bow and arrow.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest a lynx with bow</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">The Ultimate Memento</td>
                          <td className="px-3 py-6 border-b border-gray-300">Want to create the ultimate memento? Climb the lookout atop Hollowed Mountain at sunrise and take a photo. You'll thank me.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Travel to the Besplodnoye Plateau Northern Lookout Point; Climb to the top of the Lookout; Take a photograph of the sunrise between 6am and 7am in the morning</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">A Nenets Challenge #2</td>
                          <td className="px-3 py-6 border-b border-gray-300">Your eye is remarkable. How is your stealth? Can you get up close & personal with a lynx before harvesting it?</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest a lynx downed within 40.00 m</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h5 id="medved-georgy" className="font-medium">Geoergy Grankin Missions</h5>
                  <div className="mt-2 overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-green-100 text-left">
                          <th className="px-3 py-6 border-b border-gray-300">Mission</th>
                          <th className="px-3 py-6 border-b border-gray-300">Description</th>
                          <th className="px-3 py-6 border-b border-gray-300">Objective</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Bears for Grankin #1</td>
                          <td className="px-3 py-6 border-b border-gray-300">think ur respectable, swine? think ur big hero? UR NOT! make things right with georgy. he needs a RARE BEAR SKIN RUG!</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest a male brown bear with a Trophy Score of 24 or higher</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Bears for Grankin #2</td>
                          <td className="px-3 py-6 border-b border-gray-300">georgy is plzed with his bear skin rug. but not satisified! georgy also needs the RAREST BEAR SKIN COAT!</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest a brown bear with an uncommon, rare, or very rare Fur Type and a Trophy Rating of 23.8 or higher.</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Revenge of Grankin #1</td>
                          <td className="px-3 py-6 border-b border-gray-300">hey swine! u get georgy arrested. u trespass on his land. why u do this?! u owe georgy boar meat.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest a boar weighing no more than 90.00 kg</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Revenge of Grankin #2</td>
                          <td className="px-3 py-6 border-b border-gray-300">idiot swine! georgy eats no boar. he has strongest nutritional standards. now u owe him musk deer.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest a musk deer weighing no more than 14.00 kg with a bow</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Revenge of Grankin #3</td>
                          <td className="px-3 py-6 border-b border-gray-300">a true friend would bring ur brother georgy a fresh moose. maybe we become friends. maybe not.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest a moose weighing no more than 390.00 kg</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Revenge of Grankin #4</td>
                          <td className="px-3 py-6 border-b border-gray-300">georgy make reindeer stew so good you swear is nenets. deliver reindeer meat for ur sins against georgy.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest a reindeer weighing no more than 90.00 kg</td>
                        </tr>

                        <tr className="odd:bg-white even:bg_gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Revenge of Grankin #5</td>
                          <td className="px-3 py-6 border-b border-gray-300">georgy left lynx trap near water hole. go, swine! check trap for georgy, the old man u victimized.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Travel to the region marked on your HunterMate; Find Grankin's trap</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Revenge of Grankin #6</td>
                          <td className="px-3 py-6 border-b border-gray-300">failure!?! u cursed georgy & his lynx trap, u crook. now u owe georgy fresh lynx. brain intact!</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest a lynx weighing 28.00 kg or more</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h5 id="medved-svetlana" className="font-medium">Dr. Svetlana Isakova Missions</h5>
                  <div className="mt-2 overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-green-100 text-left">
                          <th className="px-3 py-6 border-b border-gray-300">Mission</th>
                          <th className="px-3 py-6 border-b border-gray-300">Description</th>
                          <th className="px-3 py-6 border-b border-gray-300">Objective</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Scenic Weather #1</td>
                          <td className="px-3 py-6 border-b border-gray-300">Hi! Svetlana here, Alena's meteorologist. Need to track snowfall at the old fishing village, Chekurovka. Can you photo the location for me?</td>
                          <td className="px-3 py-6 border-b border-gray-300">Travel to Chekurovka; Photograph the fishing village</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Scenic Weather #2</td>
                          <td className="px-3 py-6 border-b border-gray-300">To the west, there is another village. Go to the island just off the wetlands. Another photo = another reward :)</td>
                          <td className="px-3 py-6 border-b border-gray-300">Travel to Two River Village; Photograph Two River Village</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Crater on Camera</td>
                          <td className="px-3 py-6 border-b border-gray-300">It is important that we track the progress of the permafrost crater at Drunken Taiga. Can you get me a current photo?</td>
                          <td className="px-3 py-6 border-b border-gray-300">Travel to P'yanyy Forest; Photograph the Permafrost Crater</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Reading the Weather</td>
                          <td className="px-3 py-6 border-b border-gray-300">How is the weather? Srsly, I need to know but moose keep breaking the weather station!</td>
                          <td className="px-3 py-6 border-b border-gray-300">Travel to P'yanyy Forest; Harvest a moose</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">The Lenskiye Pillars</td>
                          <td className="px-3 py-6 border-b border-gray-300">We're tracking ice levels on the bank in the SE corner of Lesnye Lands. Can you get me a pic of the Lenskiye Pillars there?</td>
                          <td className="px-3 py-6 border-b border-gray-300">Photograph the Lenskiye Pillars</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Mountain Trek</td>
                          <td className="px-3 py-6 border-b border-gray-300">Can you take a reading? It's a trek to summit the mountains, but easier than hunting Chuchunya.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Travel to the hills in east Lesnye Lands; Find the weather station; Interact with the weather station</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

          </div>
        )}

        {selected === 'vurhonga' && (
          <div className="mt-4 bg-gray-50 rounded p-3 text-gray-800">
            <h3 className="font-semibold mb-2">Vurhonga Savanna — Missions</h3>
            <p>
              Missions on the Vurhonga Savanna Reserve are provided by the reserve warden Njabulo Tshabangu. Currently, the reserve has 62 missions: 16 main missions and 46 side missions.
            </p>

            <TableOfContents
              mainMissionsId="vurhonga-main"
              sideMissionsId="vurhonga-side"
              sideMissions={[
                { label: "Njabulo Tshabangu Missions", id: "vurhonga-njabulo" },
                { label: "Maria Mboweni Missions", id: "vurhonga-maria" },
                { label: "Flip Ospreay Missions", id: "vurhonga-flip" },
                { label: "Dr. Dana Maritz Missions", id: "vurhonga-dana" },
                { label: "Brother Missions", id: "vurhonga-brother" }
              ]}
            />

            <div className="mt-4 overflow-x-auto">
              <h4 id="vurhonga-main" className="font-semibold mb-2">Main Missions</h4>
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-green-100 text-left">
                    <th className="px-3 py-6 border-b border-gray-300">Mission</th>
                    <th className="px-3 py-6 border-b border-gray-300">Description</th>
                    <th className="px-3 py-6 border-b border-gray-300">Objective</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Welcome to Vurhonga</td>
                    <td className="px-3 py-6 border-b border-gray-300">Welcome to Africa. Grandfather Njabulo asks you to complete a set of warm-up tasks to get you started on your path to settling in as the new Senior Warden of the reserve.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Visit a lookout point and survey the area</li>
                        <li>Claim an outpost</li>
                        <li>Harvest an animal</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Mind the Traps</td>
                    <td className="px-3 py-6 border-b border-gray-300">The junior guide reports having spotted poachers' traps around a watering hole in Vuxa. You must dismantle them and nip this poacher problem in the bud.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Travel to the poaching site</li>
                        <li>Remove the poachers' traps</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Across the Savanna</td>
                    <td className="px-3 py-6 border-b border-gray-300">A gift from Grandfather takes you to the Tree of Life, a massive baobab tree of great spiritual significance to the savanna.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Travel to the Tree of Life</li>
                        <li>Collect the Relic of Nyaminyami from the Tree of Life</li>
                        <li>Harvest a springbok and pass the harvest check</li>
                        <li>Travel to the riverside burial site</li>
                        <li>Bury the Relic of Nyaminyami at the river</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Praise the Ancestors</td>
                    <td className="px-3 py-6 border-b border-gray-300">With the Relic of Nyaminyami in hand, Grandfather asks you to hunt down a Springbok. The harvest will feed a local family in an attempt to appease the Relic, and hopefully trigger an auspicious beginning to your homecoming.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Harvest a springbok and pass the harvest check</li>
                        <li>Travel to the riverside burial site</li>
                        <li>Bury the Relic of Nyaminyami at the river site</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">The History of All Tribes</td>
                    <td className="px-3 py-6 border-b border-gray-300">Continue exploring Vurhonga with a trip to the southern region of the reserve, the Dzonga. Photograph a newly refurbished cave painting site there for Grandfather to assess the quality of the restoration.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Travel to the cave painting site</li>
                        <li>Photograph the cave painting</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Mucking for Science</td>
                    <td className="px-3 py-6 border-b border-gray-300">Travel to the Dzongan swamps and (quite literally) get your hands dirty. Retrieve water sample and ensure the swamps are free from any traces of T&T.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Travel to the swamps</li>
                        <li>Collect water samples from the swamps</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Mampara</td>
                    <td className="px-3 py-6 border-b border-gray-300">An internet personality and self-proclaimed Ghost Hunter, Gustav Baden, entered the reserve two days ago and hasn't reported to Grandfather for just long enough to worry him. Investigate and report the situation to him.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Travel to Gustav Baden's campsite</li>
                        <li>Investigate Gustav Baden's note</li>
                        <li>Read the note</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">The Last Rhino</td>
                    <td className="px-3 py-6 border-b border-gray-300">Your search for Gustav Baden is interrupted by a worrying incident: The tracker attached to the reserve's last rhino has gone dormant. Find Rambolo and investigate the cause of the dormant tracker.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Find Rambolo, the rhino</li>
                        <li>Follow the poachers' trail</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Traffic Jam</td>
                    <td className="px-3 py-6 border-b border-gray-300">Following the telltale signs of a poacher expedition into the reserve, you have arrive at their camp. Where have they gone? Why have they so carelessly abandoned their post?</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Investigate the truck</li>
                        <li>Remove the poacher's traps</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Observe and Report</td>
                    <td className="px-3 py-6 border-b border-gray-300">Having heard gunshots in the distance, you must investigate the source of the commotion. With the death of Rambolo, an abandoned poacher camp, and a missing tourist, a storm seems to be brewing in Vurhonga and you have your hands full as its new Warden.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Take shelter at a nearby hut</li>
                        <li>Investigate the smokestack</li>
                        <li>Extinguish the fire</li>
                        <li>Search the area for clues</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Take Shelter</td>
                    <td className="px-3 py-6 border-b border-gray-300">The poachers' trail gone cold, Grandfather directs you to rest in a nearby shelter to rest for the night and collect yourself before you embark once again.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Travel to the shelter</li>
                        <li>Go inside the shelter</li>
                        <li>Search around the hut for clues to Gustav Baden's whereabouts</li>
                        <li>Read the note</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Our Place at the Potholes</td>
                    <td className="px-3 py-6 border-b border-gray-300">Gustav Baden's note mentions his next destination: the Potholes and a 'Ghost Jackal'. Travel through the region, looking for anything that might help you track him. Make sure he's still alive and well, then put a stop to his irresponsible escapade by bringing him in.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Travel to the Potholes</li>
                        <li>Search another location in the Potholes</li>
                        <li>Travel the Potholes Outpost</li>
                        <li>Enter the Potholes Outpost</li>
                        <li>Read Gustav Baden's shooting schedule</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Hunter and Hunted</td>
                    <td className="px-3 py-6 border-b border-gray-300">The presence of a 'Ghost Jackal' concerns Grandfather Njabulo greatly. Be it a supernatural apparition, a figment of Baden's imagination or a diseased animal, none of it bodes well for Baden. Make your way up to the plateau and continue looking for him.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Locate Gustav Baden's trail</li>
                        <li>Travel to Weeping Face</li>
                        <li>Investigate the mampara's campsite</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Crossing Over</td>
                    <td className="px-3 py-6 border-b border-gray-300">You've found evidence that suggests Baden is in serious trouble, just as a storm arrives. He seems to have crossed the broken bridge, and the imminent storm will wipe away his tracks before too long. Hurry along and find him!</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Travel to the top of the plateau and find the bridge</li>
                        <li>Approach the bridge</li>
                        <li>Examine the cloth</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Cave of the Ghost Jackal</td>
                    <td className="px-3 py-6 border-b border-gray-300">You find yourself at the mouth of a cave, having suffered a fall from the broken bridge. As far as you can tell, you haven't suffered any major injuries. You're losing radio contact with Grandfather Njabulo as well, and you should hurry to get through the Cave.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Enter the cave</li>
                        <li>Traverse the cave</li>
                        <li>Take the jackal skull</li>
                        <li>Exit the cave</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">The Ghost Tree</td>
                    <td className="px-3 py-6 border-b border-gray-300">You've found the Ghost Jackal's skull. Grandfather Njabulo believes you'll rid Vurhonga of its curse if you can lay the Ghost Jackal to rest.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Travel to the Tree of Death</li>
                        <li>Bury the jackal skull underneath the Tree of Death</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6">
              <h4 id="vurhonga-side" className="font-semibold mb-2">Side Missions</h4>

              <div className="space-y-6">
                <div>
                  <h5 id="vurhonga-njabulo" className="font-medium">Njabulo Tshabangu Missions</h5>
                  <div className="mt-2 overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-green-100 text-left">
                          <th className="px-3 py-6 border-b border-gray-300">Mission</th>
                          <th className="px-3 py-6 border-b border-gray-300">Description</th>
                          <th className="px-3 py-6 border-b border-gray-300">Objectives</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Welcome to Springbok City</td>
                          <td className="px-3 py-6 border-b border-gray-300">Learn about the residents of Springbok City by spotting male and female springbok.</td>
                          <td className="px-3 py-6 border-b border-gray-300">
                            <ul className="list-disc list-inside">
                              <li>Travel to the Lookout Tower marked on your Huntermate</li>
                              <li>Spot a male springbok and a female springbok in Vuxa</li>
                            </ul>
                          </td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Hunting Springbok</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest a springbok and pass the harvest check using just one bullet in Vuxa.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest a springbok downed in a single shot in Vuxa and pass the harvest check</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Become the Lion</td>
                          <td className="px-3 py-6 border-b border-gray-300">Cull the herd by harvesting five springbok. If you really want to show off, spook three within 50 meters before you shoot.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest 5 springbok in Vuxa</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Chase the Wildebeest</td>
                          <td className="px-3 py-6 border-b border-gray-300">Assess the wildebeest herds. Spot three wildebeests without causing a stampede.</td>
                          <td className="px-3 py-6 border-b border-gray-300">
                            <ul className="list-disc list-inside">
                              <li>Travel to the Lookout Point marked on your Huntermate</li>
                              <li>Spot 3 different Blue Wildebeest in the Dzonga</li>
                            </ul>
                          </td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">The Safe Approach</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest three wildebeests, but only shoot from at least 150 meters away to avoid stampedes.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest 3 blue wildebeest in the Dzonga that were downed from at least 150.00 m away</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Behavioural Studies</td>
                          <td className="px-3 py-6 border-b border-gray-300">Document wildebeest herd behaviours for a local biologist by photographing a feeding wildebeest.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Photograph a feeding blue wildebeest in the Dzonga</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Of Hares and Jackals</td>
                          <td className="px-3 py-6 border-b border-gray-300">Take a look at the lazy jackals and prolific scrub hares in Vupeladyambu. Spot one of each.</td>
                          <td className="px-3 py-6 border-b border-gray-300">
                            <ul className="list-disc list-inside">
                              <li>Travel to Lookout Tower marked on your Huntermate</li>
                              <li>Spot a side-striped jackal in Vupeladyambu</li>
                              <li>Spot a scrub hare in Vupeladyambu</li>
                            </ul>
                          </td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Safety Hazard</td>
                          <td className="px-3 py-6 border-b border-gray-300">Repair the broken bridge to provide these animals with another path of the plateau.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Travel to broken bridge; Repair the broken bridge</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">The Widowmaker</td>
                          <td className="px-3 py-6 border-b border-gray-300">Practice a stealth approach to spot a cape buffalo in N'walungu; these are dangerous animals.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Travel to Lookout Point marked on your Huntermate; Spot a cape buffalo in N'walungu</td>
                        </tr>

                        <tr className="odd:bg-white even:bg_gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Motivate the Jackals</td>
                          <td className="px-3 py-6 border-b border-gray-300">Time to motivate some lazy jackals. Harvest three of them and pass the harvest check so we can donate them to a local dietary study.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest 3 side-striped jackals in Vupeladyambu and pass the harvest check</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Scrub Hare Challenge</td>
                          <td className="px-3 py-6 border-b border-gray-300">Bag five scrub hares in one hunt, and pass the harvest check as five consecutive harvests.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest 5 scrub hares in Vupeladyambu and pass the harvest check</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Staying Alive</td>
                          <td className="px-3 py-6 border-b border-gray-300">Show you can handle a KING 470BD on a buffalo hunt.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest a cape buffalo downed with the KING 470BD in N'walungu</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">No Margin for Misfires</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest three more buffalo and demonstrate quick kills.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest 3 cape buffalo in N'walungu and earn a Quick Kill Bonus of 100</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Boss vs Alpha</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest an alpha buffalo with gold-level quality for possible museum donation.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest a cape buffalo in N'walungu and earn a GOLD Game Score or better</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h5 id="vurhonga-maria" className="font-medium">Maria Mboweni Missions</h5>
                  <div className="mt-2 overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-green-100 text-left">
                          <th className="px-3 py-6 border-b border-gray-300">Mission</th>
                          <th className="px-3 py-6 border-b border-gray-300">Description</th>
                          <th className="px-3 py-6 border-b border-gray-300">Objectives</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Legal Sources</td>
                          <td className="px-3 py-6 border-b border-gray-300">Ahee, Warden. Njabulo says you're quite the hunter. Good enough to turn Vurhonga around even. I lead a local group, the Vurhonga Sustainable Hunters Coalition. As it is, local villages have lost so many food sources, their only alternative is to buy poached meat. The VSHC supplies villages with legally harvested animals to solve that problem. With that in mind, our springbok supplies are low for this season, and the villagers tend to prefer the flavour of springbok who graze in Vuxa.</td>
                          <td className="px-3 py-6 border-b border-gray-300">
                            <ul className="list-disc list-inside">
                              <li>Travel to Vuxa</li>
                              <li>Harvest a springbok in Vuxa</li>
                            </ul>
                          </td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Trap Raid</td>
                          <td className="px-3 py-6 border-b border-gray-300">The VHSC and I thank you for that springbok. While you are in the Vuxa, we've gotten reports of traps that need dismantling. Please, it's urgent that you remove these traps before they do any harm.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Travel to Mahahlwa Qhivisi; Dismantle 3 poacher traps around Mahahlwa Qhivisi</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Ceremonial Warthog</td>
                          <td className="px-3 py-6 border-b border-gray-300">Those traps will not hurt anything now. Ndza nkhensa, Warden. I've got a challenging request from some elders hosting a burial feast. They want a warthog to die quickly, almost instantly. Best way to do that? Get in close and use a handgun.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest a warthog downed with a handgun and earn a Quick Kill Bonus of 100</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Canine Disease</td>
                          <td className="px-3 py-6 border-b border-gray-300">We need samples to test canine diseases; hunters bring samples in pairs.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Spot 2 side-striped jackals; Harvest 2 side-striped jackals and earn a Consecutive Harvest Bonus of 100</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">The Old Way</td>
                          <td className="px-3 py-6 border-b border-gray-300">A San family requests a buffalo harvested the old way—with arrows. Head to N'walungu and harvest with a bow or crossbow.</td>
                          <td className="px-3 py-6 border-b border-gray-300">
                            <ul className="list-disc list-inside">
                              <li>Travel to N'walungu</li>
                              <li>Track 3 different cape buffalo</li>
                              <li>Harvest a cape buffalo downed with a bow</li>
                            </ul>
                          </td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Proof of Poachers</td>
                          <td className="px-3 py-6 border-b border-gray-300">Before disarming traps at N'walungu, take a photo of a trap for the police, then dismantle them.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Travel to the lake Xihontlovila Qhivi; Photograph a poaching trap; Dismantle 3 poaching traps</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Ceremonial Buffalo</td>
                          <td className="px-3 py-6 border-b border-gray-300">Supply a male buffalo for a farewell ceremony. The animal must pass the harvest check.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Travel to N'walungu; Harvest a cape buffalo bull and pass the harvest check</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h5 id="vurhonga-flip" className="font-medium">Flip Ospreay Missions</h5>
                  <div className="mt-2 overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-green-100 text-left">
                          <th className="px-3 py-6 border-b border-gray-300">Mission</th>
                          <th className="px-3 py-6 border-b border-gray-300">Description</th>
                          <th className="px-3 py-6 border-b border-gray-300">Objectives</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Photo Sample</td>
                          <td className="px-3 py-6 border-b border-gray-300">Flip Ospreay wants your best wildlife photo in the Dzonga for his work.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Travel to the Dzonga; Take a picture of an animal in the Dzonga</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Need Zones</td>
                          <td className="px-3 py-6 border-b border-gray-300">Track and spot specific species: a blue wildebeest and a lesser kudu.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Spot a blue wildebeest; Spot a lesser kudu</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Lake View</td>
                          <td className="px-3 py-6 border-b border-gray-300">Provide a well-framed photo of Thvakile Qhivi for a magazine story.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Travel to the lake Thvakile Qhivi; Take a picture of the lake Thvakile Qhivi</td>
                        </tr>

                        <tr className="odd:bg-white even:bg_gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Variety Pack</td>
                          <td className="px-3 py-6 border-b border-gray-300">Clear photos of Springbok, Scrub Hare, and Lesser Kudu.</td>
                          <td className="px-3 py-6 border-b border-gray-300">
                            <ul className="list-disc list-inside">
                              <li>Take a picture of a springbok</li>
                              <li>Take a picture of a scrub hare</li>
                              <li>Take a picture of a lesser kudu</li>
                            </ul>
                          </td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Museum Mpfundla</td>
                          <td className="px-3 py-6 border-b border-gray-300">Flip needs scrub hares for a museum diorama.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest 3 scrub hares downed with a shotgun</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Scene of the Tragedy</td>
                          <td className="px-3 py-6 border-b border-gray-300">Get up-to-date photos of the Weeping Face and the suspension bridge at the Plateau for Flip's story.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Travel to Vurhonga Plateau; Take a picture of the Weeping Face; Take a picture of the Vurhonga Plateau bridge</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Technical Demonstration</td>
                          <td className="px-3 py-6 border-b border-gray-300">Flip wants to record your hunting for an instructional video; all game goes to local tribes.</td>
                          <td className="px-3 py-6 border-b border-gray-300">
                            <ul className="list-disc list-inside">
                              <li>Harvest an animal downed by a heart shot from at least 75m away</li>
                              <li>Harvest 2 springbok downed with a shotgun</li>
                            </ul>
                          </td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Flip's Naked Eye Challenge</td>
                          <td className="px-3 py-6 border-b border-gray-300">Down any animal for Quick Kill from more than 75m using a scopeless rifle.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest an animal downed from at least 75 m away with a scopeless rifle and earn a Quick Kill Bonus of 100</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Flip's Danger Action Gauntlet</td>
                          <td className="px-3 py-6 border-b border-gray-300">A multi-part gauntlet covering handgun, shotgun, rifle, and bow challenges.</td>
                          <td className="px-3 py-6 border-b border-gray-300">
                            <ul className="list-disc list-inside">
                              <li>Harvest an animal downed in a single shot by a handgun</li>
                              <li>Harvest an animal downed within 35 m with a shotgun</li>
                              <li>Harvest an animal downed with a rifle and pass the harvest check</li>
                              <li>Harvest an animal downed by a heart shot using a bow</li>
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h5 id="vurhonga-dana" className="font-medium">Dr. Dana Maritz Missions</h5>
                  <div className="mt-2 overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-green-100 text-left">
                          <th className="px-3 py-6 border-b border-gray-300">Mission</th>
                          <th className="px-3 py-6 border-b border-gray-300">Description</th>
                          <th className="px-3 py-6 border-b border-gray-300">Objectives</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Begin the Maritz Test</td>
                          <td className="px-3 py-6 border-b border-gray-300">Dr. Maritz has arranged a series of tests (the Maritz Test) to evaluate your competency as Senior Warden.</td>
                          <td className="px-3 py-6 border-b border-gray-300">
                            <ul className="list-disc list-inside">
                              <li>Find lesser kudu tracks</li>
                              <li>Spot a lesser kudu</li>
                              <li>Use an antler rattler</li>
                              <li>Harvest a lesser kudu, pass the harvest check and earn a Quick Kill bonus</li>
                            </ul>
                          </td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Brightest Day, Blackest Night</td>
                          <td className="px-3 py-6 border-b border-gray-300">Demonstrate versatility by hunting in day and night conditions.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest a blue wildebeest during the day; Harvest a side-striped jackal at night</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Hog Collection</td>
                          <td className="px-3 py-6 border-b border-gray-300">Next, we move to hog hunting to test your skills.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Find tracks from 3 different warthogs at night; Harvest a warthog</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Bogged Down</td>
                          <td className="px-3 py-6 border-b border-gray-300">Show capability in the Dzonga by earning a SILVER game score or better.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Travel to Dzonga; Harvest an animal in the Dzonga and earn a SILVER Game Score or better</td>
                        </tr>

                        <tr className="odd:bg-white even:bg_gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">The Maritz Standard</td>
                          <td className="px-3 py-6 border-b border-gray-300">The Maritz Standard is Gold — harvest an animal with a GOLD Game Score or better.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest an animal and earn a GOLD Game Score or better</td>
                        </tr>

                        <tr className="odd:bg-white even:bg_gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">King of Rifles</td>
                          <td className="px-3 py-6 border-b border-gray-300">Demonstrate proficiency with heavy rifle calibers.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest 3 animals downed with a .470 NE rifle</td>
                        </tr>

                        <tr className="odd:bg-white even:bg_gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Howl Like a Bunny</td>
                          <td className="px-3 py-6 border-b border-gray-300">Use the Jackrabbit Distress Caller to attract and harvest a jackal.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Use the predator "Jackrabbit" caller; Harvest a side-striped jackal</td>
                        </tr>

                        <tr className="odd:bg-white even:bg_gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Master of Widowmakers</td>
                          <td className="px-3 py-6 border-b border-gray-300">Find and harvest a Cape Buffalo with extreme precision (both lungs).</td>
                          <td className="px-3 py-6 border-b border-gray-300">Find a cape buffalo track; Harvest a cape buffalo with a shot or shots to both lungs</td>
                        </tr>

                        <tr className="odd:bg_white even:bg_gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">The Maritz Final Exam</td>
                          <td className="px-3 py-6 border-b border-gray-300">Equip the King 470DB and harvest a Cape Buffalo with a GOLD score or higher and pass the harvest check.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest a cape buffalo downed with a .470 NE and earn a GOLD score or better and pass the harvest check</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h5 id="vurhonga-brother" className="font-medium">Brother Missions</h5>
                  <div className="mt-2 overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-green-100 text-left">
                          <th className="px-3 py-6 border-b border-gray-300">Mission</th>
                          <th className="px-3 py-6 border-b border-gray-300">Description</th>
                          <th className="px-3 py-6 border-b border-gray-300">Objectives</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Fecal Matters</td>
                          <td className="px-3 py-6 border-b border-gray-300">Collect droppings from three different species for the local veterinarian.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Find droppings from 3 different species of animals</td>
                        </tr>

                        <tr className="odd:bg-white even:bg_gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Show Off</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest a side-striped jackal with a bow or crossbow for Brother's challenge.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest a side-striped jackal with a bow or a crossbow</td>
                        </tr>

                        <tr className="odd:bg-white even:bg_gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Muckraker</td>
                          <td className="px-3 py-6 border-b border-gray-300">Go to the swamps in Dzonga and find tracks from two different species.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Travel to the Dzonga; Track 2 different species in the Dzonga</td>
                        </tr>

                        <tr className="odd:bg-white even:bg_gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Drinking Buddies</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest two animals near a watering hole and pass the harvest check for parasite sampling.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest an animal near a watering hole or lake and pass the harvest check</td>
                        </tr>

                        <tr className="odd:bg-white even:bg_gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Nocturnal Predator</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest two animals at night in the mountains with a bow or crossbow.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Travel to Vupeladyambu; Harvest an animal in Vupeladyambu at night with a bow or crossbow</td>
                        </tr>

                        <tr className="odd:bg-white even:bg_gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Blind Master</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest an animal from a hunting blind or a ground blind for Brother.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest an animal from a hunting blind or a ground blind</td>
                        </tr>

                        <tr className="odd:bg-white even:bg_gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Heart to Heart to Heart</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest three animals downed by a shot to the heart for Brother's request.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest 3 animals downed by a shot to the heart</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {selected === 'parque-fernando' && (
          <div className="mt-4 bg-gray-50 rounded p-3 text-gray-800">
            <h3 className="font-semibold mb-2">Parque Fernando — Missions</h3>
            <p>
              Missions on Parque Fernando are provided by the reserve warden Carolina Vargas. Currently, the reserve has 48 missions: 18 main missions and 30 side missions.
            </p>

            <TableOfContents
              mainMissionsId="parque-main"
              sideMissionsId="parque-side"
              sideMissions={[
                { label: "Vicente Vargas Missions", id: "parque-vicente" },
                { label: "Beatriz Cabrera Missions", id: "parque-beatriz" },
                { label: "Matias Mateo Missions", id: "parque-matias" },
                { label: "Mariana Luna Missions", id: "parque-mariana" },
                { label: "Juliana Ferrari Missions", id: "parque-juliana" },
                { label: "Carolina Vargas Missions", id: "parque-carolina" }
              ]}
            />

            <div className="mt-4 overflow-x-auto">
              <h4 id="parque-main" className="font-semibold mb-2">Main Missions</h4>
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-green-100 text-left">
                    <th className="px-3 py-6 border-b border-gray-300">Mission</th>
                    <th className="px-3 py-6 border-b border-gray-300">Description</th>
                    <th className="px-3 py-6 border-b border-gray-300">Objective</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Welcome to Patagonia</td>
                    <td className="px-3 py-6 border-b border-gray-300">Welcome to Parque Fernando! You came highly recommended as *the* warden to turn this slice of wild Patagonia into a world class hunting reserve. Naturally, I expect you to hit the ground running, even though this is your first time here.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Visit a lookout point and survey the area</li>
                        <li>Claim an outpost</li>
                        <li>Harvest any animal except a puma</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Building Blocks</td>
                    <td className="px-3 py-6 border-b border-gray-300">Head up to the lodge site, marked on your GPS. I'll give you some background on this place.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Travel to the Lodge</li>
                        <li>Visit the Archery Range</li>
                        <li>Enter the Archery Platform in the Archery Range</li>
                        <li>Enter the Elevated Blind in the Archery Range</li>
                        <li>Enter the Hunting Blind in the Archery Range</li>
                        <li>Land a bullseye on a Range Target while at the Archery Range</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Be Our Guests</td>
                    <td className="px-3 py-6 border-b border-gray-300">The chef has requested fresh game to organize a welcome feast for a hunting party -- blackbuck or axis deer. There are plenty in the region around the lodge. Go out and hunt one for us, will you?</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Harvest a blackbuck or axis deer</li>
                        <li>Take your harvest to the marked outpost</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Duck Decoys</td>
                    <td className="px-3 py-6 border-b border-gray-300">We want our guests to have some easy fun when they get here. What's more fun than a duck hunt? Go to Lago Peron and set up decoys for the incoming party.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Go to the west shore of Lago Peron</li>
                        <li>Set up the hunting location</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Salvage Operation</td>
                    <td className="px-3 py-6 border-b border-gray-300">The fan belt on the generator that powers the lodge site is busted. Try salvaging a fan belt from the site marked on your GPS. That's an old excavator left behind by a mining operation decades ago.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Find the abandoned Excavator</li>
                        <li>Salvage a spare Fan Belt</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Flip the Switch</td>
                    <td className="px-3 py-6 border-b border-gray-300">Bring that fan belt to the generator. How are your mechanical skills? Can you fix it yourself?</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Travel to the Lodge</li>
                        <li>Install the Fan Belt</li>
                        <li>Switch on the lodge's power</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Testing the Wind</td>
                    <td className="px-3 py-6 border-b border-gray-300">We have no choice but to setup a more sustainable power source at the lodge. I wanted solar power, but let me tell you, wind turbine salespeople are persistent! Can you test the salesman's claims? Collect the wind gauges at the front of the lodge.</td>
                    <td className="px-3 py-6 border-b border-gray-300">Retrieve package from the Lodge Reception Desk</td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Testing the Wind II</td>
                    <td className="px-3 py-6 border-b border-gray-300">Pick up the wind gauge at the reception desk so we can separate fact from fabrication.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Travel to the test location</li>
                        <li>Place the wind gauge at the test location</li>
                        <li>Harvest an animal in region marked on your Hunter Mate</li>
                        <li>Retrieve metrics from the Wind Gauge</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Sol de Mayo</td>
                    <td className="px-3 py-6 border-b border-gray-300">While we were waiting on that wind data, I ordered solar panels. I even paid for emergency rush shipping, so our solar panels were just airdropped at Junto al Lago. Before I send a team out to retrieve them, can you confirm their arrival?</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Travel to the delivery dropsite</li>
                        <li>Locate the solar panel delivery and mark it for pickup</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">The Last Hangup</td>
                    <td className="px-3 py-6 border-b border-gray-300">Sounds like everything is there except for some cabling, which probably blew further off course. The winds must resent that we're going solar! But they might also point us in the right direction. My nephew marked an area on your GPS where he thinks you should look.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Travel to the potential drop location</li>
                        <li>Shoot the hooking mechanism</li>
                        <li>Pick up the Cabling Package</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">The Last Hangup II</td>
                    <td className="px-3 py-6 border-b border-gray-300">This is the last piece we need to power up the Lodge. Get back there and do the honors.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Return to the Lodge</li>
                        <li>Climb up to the Lodge's roof</li>
                        <li>Plug in Cabling</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Best-in-Class</td>
                    <td className="px-3 py-6 border-b border-gray-300">The lodge is finally open, and Carolina is putting the finishing touches on the lodge. She needs us to harvest a mule deer or red deer. A local artisan, "Matmat," is going to turn the deer hide into the softest rug imaginable.</td>
                    <td className="px-3 py-6 border-b border-gray-300">Harvest a mule deer or a red deer</td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">3 Star Review</td>
                    <td className="px-3 py-6 border-b border-gray-300">Beatriz is bringing in that VIP hunting party in a couple days, so she's been scouting her hunts. She just sent word that someone's been living in one of our world-class hunting blinds! UT, can you check the location out?</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Travel to the hunting blind</li>
                        <li>Investigate the make-shift hunting blind camp</li>
                        <li>Unlock Gilbert Baden's cell phone</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Shot for Shot</td>
                    <td className="px-3 py-6 border-b border-gray-300">I had Beatriz rig a special course for you. Try out my special shooting challenge! These challenges recreate four of my personal best shots. They won't be easy - are you up to it?</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Travel to the first Special Challenge</li>
                        <li>Stand in the Circle and shoot the challenge target</li>
                        <li>Travel to the second Special Challenge</li>
                        <li>Stand in the Circle and shoot the challenge target</li>
                        <li>Travel to the third Special Challenge</li>
                        <li>Stand in the Circle and shoot the challenge target</li>
                        <li>Travel to the last Special Challenge</li>
                        <li>Stand in the Circle and shoot the challenge target</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Animal Whisperer</td>
                    <td className="px-3 py-6 border-b border-gray-300">You will not believe this... The men I hired to track down Gilbert Baden couldn't find him. But then Beatriz calls me! She's always a step ahead of the rest, so of course she just stumbled over a campsite... in view of a puma den. Now, WHO would be stupid enough to camp that close to pumas? We know who. GILBERT. BADEN. You check out Baden's campsite and report back to me.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Travel to Gilbert Baden's campsite</li>
                        <li>Inspect Gilbert Baden's campsite</li>
                        <li>Journey into the puma den</li>
                        <li>Inspect the carcass</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Special Delivery</td>
                    <td className="px-3 py-6 border-b border-gray-300">For now, can you help me out with something a little more personal? I have a.. what do you call it? A secret stash! A place in the wilderness where I keep personal items. Things I might need in the future, that I don't want anyone else to find.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Travel to the marked location</li>
                        <li>Retrieve the key from under the rock</li>
                        <li>Travel the outpost</li>
                        <li>Unlock the footlocker</li>
                        <li>Retrieve Carolina's stash</li>
                        <li>Deposit the tapes and cash</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">The Gold Mine</td>
                    <td className="px-3 py-6 border-b border-gray-300">Yes, that is dynamite. And I want you to take it to the old mine entrance, northwest of the Lodge. Time to show you the *real moneymaker at Parque Fernando - my gold mine.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Take the dynamite from the inbox</li>
                        <li>Travel to the entrance of an abandoned mining cave</li>
                        <li>Place dynamite on the cave entrance</li>
                        <li>Move away from the dynamite</li>
                        <li>Shoot the dynamite from the safe location</li>
                        <li>Explore the mine and find Carolina's gold</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Cornered</td>
                    <td className="px-3 py-6 border-b border-gray-300">Our explosion must have upset the neighbors... I hope this isn't the puma I think it is. Regardless, you will have to defend yourself.</td>
                    <td className="px-3 py-6 border-b border-gray-300">Kill and harvest the puma</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6">
              <h4 id="parque-side" className="font-semibold mb-2">Side Missions</h4>

              <div className="space-y-6">
                <div>
                  <h5 id="parque-vicente" className="font-medium">Vicente Vargas Missions</h5>
                  <div className="mt-2 overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-green-100 text-left">
                          <th className="px-3 py-6 border-b border-gray-300">Mission</th>
                          <th className="px-3 py-6 border-b border-gray-300">Description</th>
                          <th className="px-3 py-6 border-b border-gray-300">Objective</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Seal of Approval</td>
                          <td className="px-3 py-6 border-b border-gray-300">This is Vicente, Carolina's nephew. Hope you are doing well out there! We have some formalities to run through before you are licensed and approved. For a start, harvest any animal in Prados de Lupinos. We'll submit your results to the Fauna Departmento for approval.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest an animal in Prados de Lupinos</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Sharpshooter Certification</td>
                          <td className="px-3 py-6 border-b border-gray-300">Next up, we'll need to certify you as a master sharpshooter. Harvest an animal with a rifle shot from a distance over 100 meters. Only the quickest kill with passed harvest check.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest an animal downed from at least 100 m away with a rifle and pass the harvest check and Quick Kill Bonus of 100</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Scouting Certification</td>
                          <td className="px-3 py-6 border-b border-gray-300">You made that look easy. Now for your scouting certification. Track an animal, then harvest it while it is rest. With this certification, you can take over training my sisters' pendejitos for me!</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest an animal that is resting</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Duck Soup</td>
                          <td className="px-3 py-6 border-b border-gray-300">You are 99% certified now. Before we conclude... Carolina is hosting a dinner for the minister of the Fauna Departmento, and we hear his favorite food is duck. Harvest 3 ducks with passed harvest check and our chef will prepare a world famous, 5-star duck soup.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest 3 cinnamon teal and pass the harvest check</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Marksmanship and Finesse</td>
                          <td className="px-3 py-6 border-b border-gray-300">The minister won't be able to resist our chef's duck soup! Thank you. We have just one more certification test to fully license you as our Master Hunter. You need to spook an animal, shoot it while it's fleeing, then harvest it. I promise you, no more tests for the Departmento after this!</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest an animal that was shot while it was fleeing</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Dinner for Two</td>
                          <td className="px-3 py-6 border-b border-gray-300">You really are the warden that Carolina hoped you'd be! Maybe you can help me with something more... personal? MIT pay you, of course. There's this girl.. Okay, it's Beatriz Cabrera. Chinita. And I want to prepare the perfect evening to let her know how much I care. Could you harvest a red deer, pass the harvest check with a quick kill bonus? I may not be our chef, but I can prepare quite a dinner when I have the right ingredients. Do this for me and I will officially owe you a big favor.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest a red deer, pass the harvest check and Quick Kill Bonuses of 100</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h5 id="parque-beatriz" className="font-medium">Beatriz Cabrera Missions</h5>
                  <div className="mt-2 overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-green-100 text-left">
                          <th className="px-3 py-6 border-b border-gray-300">Mission</th>
                          <th className="px-3 py-6 border-b border-gray-300">Description</th>
                          <th className="px-3 py-6 border-b border-gray-300">Objective</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Gunslinger</td>
                          <td className="px-3 py-6 border-b border-gray-300">Hola, che! Beatriz aka Chinita here. Carolina mentioned me, yes? My family and I work at her estancia. We're traditional gauchos, you might say. And the thing is, we gauchos have a challenge for you. Take down an animal with a handgun, and they'll recognize your skill.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest an animal downed with a handgun</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Mule Deer Roundup</td>
                          <td className="px-3 py-6 border-b border-gray-300">My family likes you! That's good luck around here. And you'll need it, because we have work to do. Mule deer are overpopulating at a rate we can't sustain. Can you harvest 3 male mule deers to suppress them?</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest 3 mule deer bucks</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Night Tracker</td>
                          <td className="px-3 py-6 border-b border-gray-300">Nice work with the mule deer. That should keep them in check... for now. I've also been tracking the habits of axis deer to see where they overlap with other deer in the parque. It'll help if you do the same, and we'll compare notes, yes?</td>
                          <td className="px-3 py-6 border-b border-gray-300">Spot 3 axis deer at night</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Random Sampling</td>
                          <td className="px-3 py-6 border-b border-gray-300">Gracias! Here's a difficult assignment. Every reserve on the continent has been asked to contribute to a randomly sampled study of communicable diseases in pumas. Carolina won't like it, but we need you to harvest a puma for an autopsy.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Examine puma footprints or droppings; Harvest a puma</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Buffalo Chaser</td>
                          <td className="px-3 py-6 border-b border-gray-300">Carolina took the puma harvest well. It helps that you were the one hunting them. How are you with water buffalo? We need a waste sample, so find water buffalo tracks and follow them until you find dung, and sample it. After that, harvest a water buffalo, yes? I'll distribute the meat to local farmers.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Examine water buffalo footprints; Examine water buffalo droppings; Harvest a water buffalo</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">A Flower for Vicente</td>
                          <td className="px-3 py-6 border-b border-gray-300">I've got a date with someone you might know.. VICENTE. Que churrrrrro! I really want to express my feelings for him, but I'm not so good with words. We used to play at Prados de Lupinos. I can't get over there at the moment. If you pick up some fresh lupines, and send them my way, you will be my new best friend!!!</td>
                          <td className="px-3 py-6 border-b border-gray-300">Travel to the flower field; Pick a lupine for Vicente</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Puma Control</td>
                          <td className="px-3 py-6 border-b border-gray-300">Che, you are the best!! I honestly didn't know if you took me seriously or not... Vicente will love this! I owe you a favor. But first, I must ask more of you. The province says our pumas are overpopulating in tandem with the mule deer. We need to head this problem off before it escalates. Can you harvest just one male puma? An alpha? Think silver medal or higher.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest a male puma and earn a SILVER Game Score or better</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h5 id="parque-matias" className="font-medium">Matias Mateo Missions</h5>
                  <div className="mt-2 overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-green-100 text-left">
                          <th className="px-3 py-6 border-b border-gray-300">Mission</th>
                          <th className="px-3 py-6 border-b border-gray-300">Description</th>
                          <th className="px-3 py-6 border-b border-gray-300">Objective</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">A Study in Blackbuck</td>
                          <td className="px-3 py-6 border-b border-gray-300">My friend, my friend. I am the one they call Matmat. Yes, it is me. You and I can make beautiful work together. Arts. Crafts. Profitable things! At the moment, I'm looking for a blackbuck. This will be my first time working with blackbuck, so take care to harvest the animal and pass the harvest check.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest a blackbuck and pass the harvest check</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">The Perfect Pelt</td>
                          <td className="px-3 py-6 border-b border-gray-300">I think I'm going to like working with blackbuck. That was a fine specimen for taxidermy, gracias! Now, I want an axis deer. I'm going to taxidermy it to preserve it in its moment of death. Dark, yes? Bring me an axis deer killed with a heart shot, to represent the bleeding hearts of all things.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest an axis deer downed by a single shot to the heart</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Our Gift to Carolina</td>
                          <td className="px-3 py-6 border-b border-gray-300">My friend, you and Matmat are making miracles with flesh and bone. We have Carolina to thank for this fruitful partnership. We should present her with a trophy... Yes, a trophy! Harvest a mule deer, silver medal quality at least, and I'll do the rest!</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest a mule deer and earn a SILVER Game Score or better</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Gold Medal Bird</td>
                          <td className="px-3 py-6 border-b border-gray-300">Carolina is going to flip when she sees what we present to her. You are a marvel! A muse! And an equitable partner, I have a request from Buenos Aires for an exquisite cinnamon teal - meaning gold medal or higher. I'm up to the task if you are, che.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest a cinnamon teal and earn a GOLD Game Score or better</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">A Saddle for Beatriz</td>
                          <td className="px-3 py-6 border-b border-gray-300">Is there anything you CAN'T hunt? Maybe you can help me with an impossible mission. I got a request from, believe it or not, Vicente Vargas. He wants me to craft saddle from water buffalo hide, dedicated to some gal named "Beatriz". To do that, I need a water buffalo that's intact... downed in just one shot.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest a water buffalo downed by a single shot</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h5 id="parque-mariana" className="font-medium">Mariana Luna Missions</h5>
                  <div className="mt-2 overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-green-100 text-left">
                          <th className="px-3 py-6 border-b border-gray-300">Mission</th>
                          <th className="px-3 py-6 border-b border-gray-300">Description</th>
                          <th className="px-3 py-6 border-b border-gray-300">Objective</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Poisoned Fruit</td>
                          <td className="px-3 py-6 border-b border-gray-300">Hi there! Dr. Mariana Luna here. Carolina says you can help with my field research. I'm so grateful! I've found evidence of toxic berry plants invading the reserve. I need you to locate 3 waste samples in the Lago Gallegos region, each from a different species, to find out if the animals are eating this poisoned fruit. Please and thanks!</td>
                          <td className="px-3 py-6 border-b border-gray-300">Travel to Lago Bebe; Examine droppings from 3 different species in Lago Bebe</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Junto al Lago Spotting</td>
                          <td className="px-3 py-6 border-b border-gray-300">That was a dirty job, but thanks to you, we know the animals aren't eating those bad berries. That may change if too many animals compete for the flora in Junto al Lago. Please go to Junto al Lago and see if you can spot a water buffalo, a blackbuck, and a mule deer.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Travel to Junto al Lago; Spot a blackbuck in Junto al Lago; Spot a mule deer in Junto al Lago; Spot a water buffalo in Junto al Lago</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Resting Behavior</td>
                          <td className="px-3 py-6 border-b border-gray-300">Junto al Lago may be in danger of overgrazing. Good thing you're here to cull the herds! Have you seen any animals along the way? Healthy animals follow a regular schedule, so I monitor their rest patterns for irregularities. Track an, animal and spot it at rest, could you please?</td>
                          <td className="px-3 py-6 border-b border-gray-300">Spot an animal while it is resting</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h5 id="parque-juliana" className="font-medium">Juliana Ferrari Missions</h5>
                  <div className="mt-2 overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-green-100 text-left">
                          <th className="px-3 py-6 border-b border-gray-300">Mission</th>
                          <th className="px-3 py-6 border-b border-gray-300">Description</th>
                          <th className="px-3 py-6 border-b border-gray-300">Objective</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Lodge Showcase</td>
                          <td className="px-3 py-6 border-b border-gray-300">Hey hey HEY!! Carolina says you are her eyes on the ground. I'm Juliana Ferrari, founder of PataCamp Outfitters. My clients are the best of the best!! Photograph your new lodge and I'll send out an email blast that will have them all SALIVATING!!</td>
                          <td className="px-3 py-6 border-b border-gray-300">Travel to Parque Fernando's main lodge; Photograph the exterior of Parque Fernando's main lodge</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Cultural Attractions</td>
                          <td className="px-3 py-6 border-b border-gray-300">I got an EXCELLENT response on that photo of the lodge that you sent. The hunters are coming!! The thing is, not every client is a hunter. Some people pay just to sightsee. Have you seen the cave paintings in Lago Bebe? THAT IS a sightseeing attraction. Photograph the Cueva de las Manos and I'll bring the sightseers!!</td>
                          <td className="px-3 py-6 border-b border-gray-300">Photograph the cave painting</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Everybody Loves Ducks!</td>
                          <td className="px-3 py-6 border-b border-gray-300">Wonderful, we have our cultural attraction. Now we need our mass appeal!! My marketing team can edit photos of cinnamon teal to say cute things and spread them around the Internet. It sounds silly. Trust me, the results are worth it. But we're short on photos to edit. I need you to photograph 3 or more cinnamon teal in the same shot. CUTENESS!!</td>
                          <td className="px-3 py-6 border-b border-gray-300">Capture a photograph with 3 or more cinnamon teal in the frame</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">The Office Trophy</td>
                          <td className="px-3 py-6 border-b border-gray-300">Our marketing strategies are working!! I even have VIP clients coming to my office in Buenos Aires to discuss their trips. Having a trophy from Parque Fernando here certainly would impress them. I'll pay well if you harvest a red, deer for me. It must be high quality!! GOLD MEDAL at least!!</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest a red deer and earn a GOLD Game Score or better</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Where the Pumas Lie</td>
                          <td className="px-3 py-6 border-b border-gray-300">With game like that red deer, Parque Fernando sells itself!! Now to finish our brochure. Have you visited Guarida de los Pumas Mimados? Go there and photograph the puma den. Something SPOOKY to show our thrillseekers!!</td>
                          <td className="px-3 py-6 border-b border-gray-300">Travel to the puma den; Photograph the puma den</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Yearbook Photos</td>
                          <td className="px-3 py-6 border-b border-gray-300">Uf, Carolina doesn't approve of me using the den photo. She'd rather we focus on more traditional draws, like premium game. I get it!! Can you photograph each of the 4 most popular species? Axis deer, blackbuck, mule deer, and red deer. I TRUST YOUR EYES!!</td>
                          <td className="px-3 py-6 border-b border-gray-300">Photograph a blackbuck; Photograph an axis deer; Photograph a mule deer; Photograph a red deer</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Word-of-Mouth</td>
                          <td className="px-3 py-6 border-b border-gray-300">Carolina loved those new photos!! Thank you for saving me on that one. Now, how do you feel about sponsorships? My friend Ariel owns the local ammunition depot that supplies Carolina. Can you harvest an animal a slug? Ariel's request. If we promote Ariel's ammo, he will promote our Parque. GOOD BUSINESS!!</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest an animal using a shotgun slug</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h5 id="parque-carolina" className="font-medium">Carolina Vargas Missions</h5>
                  <div className="mt-2 overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-green-100 text-left">
                          <th className="px-3 py-6 border-b border-gray-300">Mission</th>
                          <th className="px-3 py-6 border-b border-gray-300">Description</th>
                          <th className="px-3 py-6 border-b border-gray-300">Objective</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Parque Fernando Trophy Collection</td>
                          <td className="px-3 py-6 border-b border-gray-300">Now that I've seen you at your best, I've got a new long-term goal for you: Harvest a diamond trophy from *every* species in the reserve. Only one other hunter has collected them all. Naturally, that hunter was me. But that was some time ago, and if we're going to impress our guests, we need more recent trophies at the lodge -- to prove that the red stags today are as grand as they were in 1987, viste?</td>
                          <td className="px-3 py-6 border-b border-gray-300">
                            <ul className="list-disc list-inside">
                              <li>Harvest a DIAMOND cinnamon teal</li>
                              <li>Harvest a DIAMOND blackbuck</li>
                              <li>Harvest a DIAMOND axis deer</li>
                              <li>Harvest a DIAMOND puma</li>
                              <li>Harvest a DIAMOND mule deer</li>
                              <li>Harvest a DIAMOND red deer</li>
                              <li>Harvest a DIAMOND water buffalo</li>
                              <li>Add the cinnamon teal trophy to the lodge</li>
                              <li>Add the blackbuck trophy to the lodge</li>
                              <li>Add the axis deer trophy to the lodge</li>
                              <li>Add the puma trophy to the lodge</li>
                              <li>Add the mule deer trophy to the lodge</li>
                              <li>Add the red deer trophy to the lodge</li>
                              <li>Add the water buffalo trophy to the lodge</li>
                            </ul>
                          </td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Challenge Circles</td>
                          <td className="px-3 py-6 border-b border-gray-300">The stone circles discoverable around the reserve are not, as some have inquired, spiritual artifacts. Every challenge is automated with motion sensors. Wherever you see a stone circle, enter it. Your target will appear and the challenge begins. Try using a variety of weapons for every target. Find your weaknesses and eliminate them!</td>
                          <td className="px-3 py-6 border-b border-gray-300">Search out stone circles and complete all of Carolina's Challenge Targets</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

        {selected === 'yukon-valley' && (
          <div className="mt-4 bg-gray-50 rounded p-3 text-gray-800">
            <h3 className="font-semibold mb-2">Yukon Valley — Missions</h3>
            <p>
              Missions at Yukon Valley are provided by the reserve warden, Jim Murray. Currently, the reserve has 45 missions: 10 main missions and 35 side missions.
            </p>

            <TableOfContents
              mainMissionsId="yukon-main"
              sideMissionsId="yukon-side"
              sideMissions={[
                { label: "Kayla Johnson", id: "yukon-kayla" },
                { label: "Bev Parker", id: "yukon-bev" },
                { label: "Sandy Murray", id: "yukon-sandy" },
                { label: "Hank Pepper", id: "yukon-hank" },
                { label: "Oscar Freeman", id: "yukon-oscar" }
              ]}
            />

            <div className="mt-4 overflow-x-auto">
              <h4 id="yukon-main" className="font-semibold mb-2">Main Missions</h4>
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-green-100 text-left">
                    <th className="px-3 py-6 border-b border-gray-300">Mission</th>
                    <th className="px-3 py-6 border-b border-gray-300">Description</th>
                    <th className="px-3 py-6 border-b border-gray-300">Objective</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Welcome to Alaska</td>
                    <td className="px-3 py-6 border-b border-gray-300">I know you're an experienced hunter, but I still like to make sure everyone gets a chance to be acquainted with the area before they start. There is also an outpost that needs an inspection, just to make sure it's ready for new guests.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Visit the nearby Lookout Tower</li>
                        <li>Visit Logger's Point</li>
                        <li>Place lid on the bearproof trashcan</li>
                        <li>Investigate Firewood inside the outpost</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Quarantine</td>
                    <td className="px-3 py-6 border-b border-gray-300">Spruce bark beetles are a serious problem, all across Alaska. Yukon Valley has enough to deal with, so I want you to find this new source and mark it for removal and quarantine. If the wood we found was from an infested tree, you should find it lying on its side, half-chopped up.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Travel to Woodsman's Respite</li>
                        <li>Pick up backpack</li>
                        <li>Locate an infested tree</li>
                        <li>Mark the infested tree</li>
                        <li>Mark trees near the infested tree for investigation</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">The Cost of Control</td>
                    <td className="px-3 py-6 border-b border-gray-300">We are running a trial of pesticides that are designed to prevent any more spruce beetle infestations. Before we start widespread use of it, I want to take some samples and make sure it's not having any unforeseen side effects.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Travel to the muskeg</li>
                        <li>Collect first water sample</li>
                        <li>Collect second water sample</li>
                        <li>Collect droppings from 2 different species in the muskeg</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Picking Up, Dropping Off</td>
                    <td className="px-3 py-6 border-b border-gray-300">I'm going to need to pick up those samples, so I've found a good spot for you to drop them off. Before you get out there though, I'd like to ask you to pick up a hatchet from the outpost close to the wetlands. You'll need it later.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Collect a hatchet from the marked outpost</li>
                        <li>Drop samples at the marked location</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Raise the Barrier</td>
                    <td className="px-3 py-6 border-b border-gray-300">A recent storm may have shaken a tree loose, and it's now at risk of falling onto the traintracks. The train that comes through here is tough, but ideally, I would like to avoid the risk of the train running into it. Use the hatchet to chop it down and then move it somewhere safe.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Travel to the bent tree near the train tracks</li>
                        <li>Chop the bent tree</li>
                        <li>Photograph the bridge while standing in the marked location</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">A Place to Hang Your Hat</td>
                    <td className="px-3 py-6 border-b border-gray-300">When the fire swept through the Teekon Forest we lost one of our outposts. We have recently installed a temporary trailer to replace the lost cabin, but it still needs a little work to finish setting it up.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Go to Basri Memorial</li>
                        <li>Set up the temporary outpost</li>
                        <li>Retrieve Fuel</li>
                        <li>Refuel generator</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Flash Point</td>
                    <td className="px-3 py-6 border-b border-gray-300">It's been two years since a massive section of the Teekon Forest went up in flames. It's time for us to push forward with revitalising the area. I'd like you to plant some saplings, as part of our plan to assist in the forest's recovery.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Retrieve the shovel and saplings</li>
                        <li>Head to planting site</li>
                        <li>Plant 3 saplings</li>
                        <li>Visit the tree that started the fire</li>
                        <li>Find tracks from 3 different animals</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Tech Support</td>
                    <td className="px-3 py-6 border-b border-gray-300">One of our research teams have asked for our help in fixing a piece of their radio equipment that they use to track test subjects. You need to pick up their replacement parts at one of our outposts, and take it out to their radio mast. It should be an easy fix.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Find radio equipment at the marked outpost</li>
                        <li>Fix radio relay at lookout tower</li>
                        <li>Investigate non-responsive collar</li>
                        <li>Drop off collar at the marked outpost</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">A Mine of information</td>
                    <td className="px-3 py-6 border-b border-gray-300">Millerwood Mine Complex has been closed to the public since the nineteen-thirties. On my last fly-by, I saw people walking around inside. I want you to take a look around the complex, and make sure that the place is empty.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Head to the Millerwood Mine Complex</li>
                        <li>Look for anything suspicious at Millerwood Complex</li>
                        <li>Investigate the structure with the broken lock</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Gabriella Baden: Bigfoot Hunter</td>
                    <td className="px-3 py-6 border-b border-gray-300">Gabriella Baden and her crew have broken the law and I need to have a word with them. See if you can track them down. I'd rather we found them before they stumble into a bear's den. I think they pose a big risk to themselves if they keep doing whatever they want.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Locate the camp</li>
                        <li>Put out fire</li>
                        <li>Investigate Baden's camp</li>
                        <li>Get to nearby lookout platform</li>
                        <li>Dismantle Gabriela Baden's camp</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6">
              <h4 id="yukon-side" className="font-semibold mb-2">Side Missions</h4>

              <div className="space-y-6">
                <div>
                  <h5 id="yukon-kayla" className="font-medium">Kayla Johnson</h5>
                  <div className="mt-2 overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-green-100 text-left">
                          <th className="px-3 py-6 border-b border-gray-300">Mission</th>
                          <th className="px-3 py-6 border-b border-gray-300">Description</th>
                          <th className="px-3 py-6 border-b border-gray-300">Objective</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Show Me Whatchoo Got</td>
                          <td className="px-3 py-6 border-b border-gray-300">Hey there! This is Kayla Johnson, I'm guessing you probably know my name from my online videos or my blog. I hear you're the new hunter around here. You up for a challenge? Harvest a wolf so I know you're up to the task. Should be easy for a professional hunter.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest a gray wolf</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Bearly Broke A Sweat</td>
                          <td className="px-3 py-6 border-b border-gray-300">Ok, so you can do the basics. I've been hunting wolves since I was 13, so I'd expect someone like you to manage that. Why don't you try harvesting something a little bigger this time? I think a grizzly is a worthy trophy for a pro hunter like you, right?</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest a grizzly bear</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Exact. Efficient. Effective.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Well done, but you've still got a long way to go before you challenge me for the spot of "Apex Predator" out here. Precision and technique are everything. Try taking down a bison as quickly and effectively as possible. Make sure you bring the right tool for the job.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest a plains bison and earn a Quick Kill Bonus of 100</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Old Skool</td>
                          <td className="px-3 py-6 border-b border-gray-300">It feels like you might actually be able to give me a run for my money out here. It's time to make things interesting. Using a bow, harvest a pair of wolves. I hunt mostly with bows these days. It just feels more fair this way, doesn't it?</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest 2 gray wolves downed using a bow or crossbow</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Bears vs Bow</td>
                          <td className="px-3 py-6 border-b border-gray-300">Ok, ok...So you know how to use a bow. That's good, 'cos next up, I want you to harvest a pair of grizzlies, still using your trusty bow. I know you might be feeling confident, but I was bow-hunting bears when I got these scars. Don't underestimate them.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest 2 grizzly bears downed using a bow or a crossbow</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Step Up Your Game</td>
                          <td className="px-3 py-6 border-b border-gray-300">Ok, I gotta give it to ya. You're better than I gave you credit for. This has all been a warm-up, though. Next up, I want you to take down a wolf and a bear. I want quality specimens, too. Silver rating or above...from at least 50m away.</td>
                          <td className="px-3 py-6 border-b border-gray-300">
                            <ul className="list-disc list-inside">
                              <li>Harvest a gray wolf downed from 50 m away or further and earn a SILVER Game Score or better</li>
                              <li>Harvest a grizzly bear downed from 50 m away or further and earn a SILVER Game Score or better</li>
                            </ul>
                          </td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">The Apex Predator Challenge</td>
                          <td className="px-3 py-6 border-b border-gray-300">I'll be honest, I didn't think you were gonna finish that last challenge. Have you been watching my videos for tips? Next up, I want you to harvest a wolf, a bear and a bison. All of them at a silver rating...at night....and clean, quick kills too. I call this the "Apex Predator Challenge".</td>
                          <td className="px-3 py-6 border-b border-gray-300">
                            <ul className="list-disc list-inside">
                              <li>Harvest a gray wolf at night and earn a Quick Kill Bonus of 100 and a SILVER Game Score or Better</li>
                              <li>Harvest a grizzly bear at night and earn a Quick Kill Bonus of 100 and a SILVER Game Score or Better</li>
                              <li>Harvest a plains bison at night and earn a Quick Kill Bonus of 100 and a SILVER Game Score or Better</li>
                            </ul>
                          </td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Becoming the Alpha</td>
                          <td className="px-3 py-6 border-b border-gray-300">I'm the only person I know who's ever completed the "Apex Predator Challenge". It's what made me famous. This year, I've set myself the challenge of harvesting a grizzly with a bow, except this time, it needs a gold rating...with a single shot to the heart. Even I haven't managed it yet.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest grizzly bear downed by a single heart shot with a bow or crossbow and earn a GOLD Game Score or better</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h5 id="yukon-bev" className="font-medium">Bev Parker</h5>
                  <div className="mt-2 overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-green-100 text-left">
                          <th className="px-3 py-6 border-b border-gray-300">Mission</th>
                          <th className="px-3 py-6 border-b border-gray-300">Description</th>
                          <th className="px-3 py-6 border-b border-gray-300">Objective</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Attack is the Best Defense</td>
                          <td className="px-3 py-6 border-b border-gray-300">Hello hunter, my name is Beverly Parker. The Warden has given me this number. I am planning on moving my reindeer herd into Yukon Valley, and Jim said you could help me. I would like to thin out some of the wolves around teekon forest. Would you harvest 3 of them?</td>
                          <td className="px-3 py-6 border-b border-gray-300">
                            <ul className="list-disc list-inside">
                              <li>Travel to the Teekon Forest</li>
                              <li>Harvest 3 gray wolves downed in the Teekon Forest</li>
                            </ul>
                          </td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Caribou Conditions</td>
                          <td className="px-3 py-6 border-b border-gray-300">I normally scout an area before I settle my herd. I'd like to know that caribou are healthy within the reserve. I hear that caribou numbers are down, and I don't want anything to happen to my herd. Spot 5 caribou for me, and I'll decide if I want to bring my herd in.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Spot 5 different caribou</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">A Distinctive Look</td>
                          <td className="px-3 py-6 border-b border-gray-300">If Jim says it's safe for me to bring my herd in, then I suppose he's right. I have had some new additions, this past year, and they are a different color to my reindeer. Can you photograph a pair of caribou in your reserve? I want to compare their pelts to the ones I've found in my herd.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Photograph 2 caribou with unique fur variations</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">He's a Growing Boy</td>
                          <td className="px-3 py-6 border-b border-gray-300">Jim tells me that you are taking care of the moose by lowering wolf and bear numbers in the area. I am worried that only the largest, strongest moose are going to survive with all these predators around. Can you find an example of a smaller, less impressive male moose in the region?</td>
                          <td className="px-3 py-6 border-b border-gray-300">Spot a male moose with a difficulty rating of EASY or MEDIUM</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Due Diligence</td>
                          <td className="px-3 py-6 border-b border-gray-300">It's good to know that moose numbers are stable, but you may have a bigger problem. During a hunt this morning, spotted that some of your caribou appear to be sick. I'd recommend that the next five you harvest are sent away for testing. I can't risk my herd being infected.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest 5 caribou</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Yukon Valley's Best View</td>
                          <td className="px-3 py-6 border-b border-gray-300">I apologise if I have been curt with you, but life as a herder is difficult and helpful officials like Jim are rare. I want to thank you properly for your help. Head to these co-ordinates in the south-east corner of the reserve. I promise, you won't find a better spot for a photograph.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Travel to Bev Parker's favorite vista; Photograph the vista</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h5 id="yukon-sandy" className="font-medium">Sandy Murray</h5>
                  <div className="mt-2 overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-green-100 text-left">
                          <th className="px-3 py-6 border-b border-gray-300">Mission</th>
                          <th className="px-3 py-6 border-b border-gray-300">Description</th>
                          <th className="px-3 py-6 border-b border-gray-300">Objective</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">A Book By Its Cover</td>
                          <td className="px-3 py-6 border-b border-gray-300">Hi there! This is Sandy Murray; Jim's wife. He told me about the work you're doing, and I hope you can help me out with a few other things. I am working to update our website, and I need a photograph from my favourite spot in the reserve. Could you take the shot and send it to me?</td>
                          <td className="px-3 py-6 border-b border-gray-300">Travel to the Frontier Vista outpost; Photograph the landscape from the Frontier Vista outpost with the bridge included</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">A Study In Crimson</td>
                          <td className="px-3 py-6 border-b border-gray-300">Jim and I used to visit Pioneer Vista all the time, but he's just so busy nowadays. I really like this picture. Jim would have told you that I also oversee all research here. One of our teams has asked us to confirm the presence of caribou and bison within the crimson plains. Can you spot one of each and report back to me?</td>
                          <td className="px-3 py-6 border-b border-gray-300">Spot a caribou in the Crimson Plain; Spot a plains bison in the Crimson Plain</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">From The Ashes</td>
                          <td className="px-3 py-6 border-b border-gray-300">Another research team has asked for soil samples from the burnt section of forest, so they can predict which trees will grow best there. They've also asked for pictures of the saplings that were planted out there, as a baseline for growth measurements</td>
                          <td className="px-3 py-6 border-b border-gray-300">Photograph plant growth in the burnt forest; Take a soil sample in the burnt forest</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Track Record</td>
                          <td className="px-3 py-6 border-b border-gray-300">Nicely done. If you weren't here, I'd have had to send Jim in to do this! The next job I have for you is for my work at the visitor's center. I am putting together a walking tour and would like some good spots to see evidence of animal activity. I need you to find tracks from the following: moose, caribou, bison, grizzly, wolf & fox</td>
                          <td className="px-3 py-6 border-b border-gray-300">Examine moose footprints; Examine caribou footprints; Examine plains bison footprints; Examine grizzly bear footprints; Examine gray wolf footprints; Examine red fox footprints</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Old Story, New Problems</td>
                          <td className="px-3 py-6 border-b border-gray-300">Thanks for relaying those sites. I look forward to visiting them! Have you seen the dredge yet? The hulking monstrosity in the corner of the reserve? One of our research teams wants to study its effects on nearby wildlife. Can you take some water samples from the area beside the dredge?</td>
                          <td className="px-3 py-6 border-b border-gray-300">Travel to the old dredge; Take water samples near the old dredge</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Mucking In</td>
                          <td className="px-3 py-6 border-b border-gray-300">If I'm being honest, I'd be delighted if we found a reason to have the dredge removed. It's such an eyesore. Now that we have some water samples, it would be great if you could grab some duck and grizzly droppings, too. You can widen your search for them.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Examine harlequin duck droppings in Stonehallow Basin; Examine grizzly bear droppings in Stonehallow Basin</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Keep It Clean</td>
                          <td className="px-3 py-6 border-b border-gray-300">Exemplary work. It's your actions that prevented an outbreak, and I'm grateful. Do you recall the samples that you recovered from the wetlands for Jim? Tests have concluded there may be side-effects on the insects. I'd like to install a remote monitoring station, so we can keep an eye on it.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Travel to the location marked on your Huntermate; Install a water monitoring station</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h5 id="yukon-hank" className="font-medium">Hank Pepper</h5>
                  <div className="mt-2 overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-green-100 text-left">
                          <th className="px-3 py-6 border-b border-gray-300">Mission</th>
                          <th className="px-3 py-6 border-b border-gray-300">Description</th>
                          <th className="px-3 py-6 border-b border-gray-300">Objective</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">The Perfect Shot</td>
                          <td className="px-3 py-6 border-b border-gray-300">My name is Hank Pepper. I run a business, guiding hunting through their hunts in Alaska. Jim told me that you were the new hunter in the reserve and I wanted to see what kind of hunter you are. You reckon you can harvest a caribou, pass the harvest check and do it quickly?</td>
                          <td className="px-3 py-6 border-b border-gray-300">Spot a caribou; Harvest a caribou and pass the harvest check and Quick Kill Bonus of 100</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Demand For Ducks</td>
                          <td className="px-3 py-6 border-b border-gray-300">Ok. Color me impressed. Jim always had a good eye for a hunter. Let's change it up. I've got a group who want to hunt ducks. Do you think you could find a good spot for them to visit? Think you can take a harlequin duck with a silver rating while you're there?</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest a harlequin duck drake and earn a SILVER Game Score or better</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Band of Bison</td>
                          <td className="px-3 py-6 border-b border-gray-300">When the season starts next year, I have a bunch of clients who want to hunt bison. I want to be able to reassure them that it won't be a problem. Can you spot a bison cow and bull? That way, I can more easily put their minds at ease. Don't forget, business is good for the reserve.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Spot a female plains bison; Spot a male plains bison</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">A Pair of Perfect Pelts</td>
                          <td className="px-3 py-6 border-b border-gray-300">The clients will be glad to hear that there are plenty of bison, waiting for them. Taking down a bison can be pretty tough. How d'ya fancy taking a crack at harvesting a bull and a cow and passed harvest check? With a quick death for both of them too, of course.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest a female plains bison and pass the harvest check and Quick Kill Bonus of 100; Harvest a male plains bison and pass the harvest check and Quick Kill Bonus of 100</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">A Rare Sight</td>
                          <td className="px-3 py-6 border-b border-gray-300">I gotta give it to ya, you know what you're doing when it comes to Bison. Personally, I'm a big fan of the ol' Alaska moose. You think you can get up close to one? How about spotting one from 30m away? If you manage that, I'd like you to try harvesting one with a silver standard, at least.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Spot a moose within 30 m; Harvest a male moose and earn a SILVER Game Score or better</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Yukon Gold Rush</td>
                          <td className="px-3 py-6 border-b border-gray-300">Ok. I was dubious at first, but you seem like the real deal. Why don't you try the Yukon Valley challenge? That means harvesting one of every species in the reserve, and that's with a gold standard. You'll join an esteemed club. Jim only joined a few years ago.</td>
                          <td className="px-3 py-6 border-b border-gray-300">
                            <ul className="list-disc list-inside">
                              <li>Harvest a moose and earn GOLD Game Score or better</li>
                              <li>Harvest a red fox and earn GOLD Game Score or better</li>
                              <li>Harvest a grizzly bear and earn GOLD Game Score or better</li>
                              <li>Harvest a gray wolf and earn GOLD Game Score or better</li>
                              <li>Harvest a caribou and earn GOLD Game Score or better</li>
                              <li>Harvest a harlequin duck and earn GOLD Game Score or better</li>
                              <li>Harvest a plains bison and earn GOLD Game Score or better</li>
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h5 id="yukon-oscar" className="font-medium">Oscar Freeman</h5>
                  <div className="mt-2 overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-green-100 text-left">
                          <th className="px-3 py-6 border-b border-gray-300">Mission</th>
                          <th className="px-3 py-6 border-b border-gray-300">Description</th>
                          <th className="px-3 py-6 border-b border-gray-300">Objective</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">A Fine Specimen</td>
                          <td className="px-3 py-6 border-b border-gray-300">Hi. I'm Oscar, I got your number from Jim. He told me that you were working in Yukon Valley and would be on hand to help with some scientific prep-work. We are looking to replenish our catalogue of tracked caribou. Can you find us a spot where they congregate?</td>
                          <td className="px-3 py-6 border-b border-gray-300">Spot a caribou</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Managing Moose</td>
                          <td className="px-3 py-6 border-b border-gray-300">Fantastic. That location will hopefully give us a steady supply of caribou that we can tag. Now, on to the moose. We are looking into distribution of moose in the region. Can you spot 5 specimens and report their locations back to us? It's much appreciated.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Spot 5 unique moose</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Moose Misfortune</td>
                          <td className="px-3 py-6 border-b border-gray-300">Based on your findings, we estimate that we have a moose surplus in the region. This will eventually lead to a growth in predators, which could have a serious effect on our already caribou population. Harvest 3 female moose, that should help to keep our population under control.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest 3 female moose</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Hardware Upgrade</td>
                          <td className="px-3 py-6 border-b border-gray-300">I know it sounds strange that we need to harvest moose to save caribou, but it's a proven technique. An ecologist wrote a book on it, after spending 10 years working in Africa, and it inspired me during my college years. Anyway, for now, we have an upgrade for our radio tower that requires installation. Can you take care of it?</td>
                          <td className="px-3 py-6 border-b border-gray-300">Travel to the outpost; Pick up the radio components; Upgrade the radio relay at the lookout tower</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">The Balancing of Bison</td>
                          <td className="px-3 py-6 border-b border-gray-300">I hurt my back earlier this year, and I'm still not as mobile as I'd like to be. On the other hand, our bison population is very mobile, and their numbers have grown beyond our predictions. We need to harvest a female bison, just to slow them down, otherwise they'll exhaust their food here and wander off.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest a female plains bison</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Herd Immunity</td>
                          <td className="px-3 py-6 border-b border-gray-300">That should help with keeping a cap on their numbers. We may need to harvest more in the near future. There have been reports of brucellosis amongst our bison, and we need to make sure it hasn't reached the caribou. Can you harvest a male caribou in the same region as where you shot your bison?</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest a male caribou in Bankside Timberlands</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">At a Crossroads</td>
                          <td className="px-3 py-6 border-b border-gray-300">Do you remember I mentioned an ecologist who worked in Africa during the 70s? I've been contacted by his team about a job opening. It's such an exciting prospect. I know it's a strange request, but could you take a picture from my favorite spot, out at copperbowl lake? It'll help me decide what to do.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Travel to Oscar's favorite spot; Photograph the vista</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Predator Becomes the Prey</td>
                          <td className="px-3 py-6 border-b border-gray-300">This level of attrition is unsustainable. Now that we have you on-site, I think it's time to do something about it. We need a cull before we lose even more caribou. Harvest 5 wolves and 3 grizzlies. That should help our caribou population stabilize.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest 5 gray wolves; Harvest a gray wolf and earn a GOLD Game Score or better; Harvest 3 grizzly bears; Harvest a grizzly bear and earn a GOLD Game Score or better</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {selected === 'cuatro-colinas' && (
          <div className="mt-4 bg-gray-50 rounded p-3 text-gray-800">
            <h3 className="font-semibold mb-2">Cuatro Colinas Game Reserve — Missions</h3>
            <p>
              Missions on the Cuatro Colinas Game Reserve are provided by the reserve warden Doña Alejandra Del Bosque Garcia. Currently, the reserve has 67 missions: 14 main missions and 53 side missions
            </p>

            <TableOfContents
              mainMissionsId="cuatro-main"
              sideMissionsId="cuatro-side"
              sideMissions={[
                { label: "Gerhardt \"Gary\" Baden Missions", id: "cuatro-gary" },
                { label: "Jose Ruiz Hernandez Missions", id: "cuatro-jose" },
                { label: "Padre Abbas Missions", id: "cuatro-abbas" },
                { label: "Antonia “Nina” Acosta Gonzalez Missions", id: "cuatro-nina" },
                { label: "Sole Santiago Serrano Missions", id: "cuatro-sole" },
                { label: "Don Miguel Alejandro Del Bosque Escajeda Missions", id: "cuatro-miguel" }
              ]}
            />

            <div className="mt-4 overflow-x-auto">
              <h4 id="cuatro-main" className="font-semibold mb-2">Main Missions</h4>
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-green-100 text-left">
                    <th className="px-3 py-6 border-b border-gray-300">Mission</th>
                    <th className="px-3 py-6 border-b border-gray-300">Description</th>
                    <th className="px-3 py-6 border-b border-gray-300">Objective</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Bienvenidos a Cuatro Colinas</td>
                    <td className="px-3 py-6 border-b border-gray-300">We might not have time for a proper tour, but I can at least ensure sthat you get to see Cuatro Colinas at its most grand. Once you've taken it all in, I also need you to unlock an outpost for me. You can use it as your base camp.</td>
                    <td className="px-3 py-6 border-b border-gray-300">Discover Bosque Vista; Open Casa Alfonso</td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">My Favourite Place</td>
                    <td className="px-3 py-6 border-b border-gray-300">While there are a multitude of beauty spots, scattered throughout the area; the small cliffs on the northern side of the river are my favourites. You need to visit them. My words can't do it justice.</td>
                    <td className="px-3 py-6 border-b border-gray-300">Find the trailhead for Alejandra's secret hunting spot; Follow the trail to Alejandra's secret hunting spot; Find animal tracks; (Optional) Track an animal by its call</td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Local Flavour</td>
                    <td className="px-3 py-6 border-b border-gray-300">You appear to have a little competition. Baden is keen to demonstrate that he has what it takes to do your job. I think you ought to show us both exactly why I hired you in the first place. Harvest anything you'd like.</td>
                    <td className="px-3 py-6 border-b border-gray-300">(Optional) Explore The River Outlook; Harvest Any Animal</td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Cuidado</td>
                    <td className="px-3 py-6 border-b border-gray-300">An especially dangerous stretch of road appear to have had its warning signs removed. I have no idea how this happened or who's doing it, but I need you to take a trip out there and replace the road signs before something bad happens</td>
                    <td className="px-3 py-6 border-b border-gray-300">Reach Dangerous Bend In Road; Retrieve signs placed by Alejandra; Attach The Signs To The Poles</td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">The Devil's Handiwork</td>
                    <td className="px-3 py-6 border-b border-gray-300">One of my neighbours has reported that one [of] his goats is missing. If you are in the vicinity, it would be extremely helpful if you could put your animal tracking skills to good use.</td>
                    <td className="px-3 py-6 border-b border-gray-300">Find The Missing Goat - Locate the Predator's tracks; Follow the Predator's tracks</td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Doña Garcia</td>
                    <td className="px-3 py-6 border-b border-gray-300">While I would love to visit my mother's memorial, I am simply too busy to make the journey myself. Even if I could make it, I don't think my father has the strength of the willpower to leave the Castillo.</td>
                    <td className="px-3 py-6 border-b border-gray-300">Photograph the memorial to Doña Garcia; Tidy the memorial</td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Rabid Curiosity</td>
                    <td className="px-3 py-6 border-b border-gray-300">Our resident vet has expressed concern about the possibility of a rabies outbreak. This could be why we've seen strange behaviour from at least one wolf. I need you to harvest another wolf, so we can test it for rabies.</td>
                    <td className="px-3 py-6 border-b border-gray-300">Harvest a wolf; (Optional) Harvest the wolf without damaging its brain</td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Field Work</td>
                    <td className="px-3 py-6 border-b border-gray-300">A local farmer's barn has been broken into, and his tractor has been sabotaged. I cannot understand why anyone would do this; especially as this farmer is a popular figure in the community. We ought to investigate.</td>
                    <td className="px-3 py-6 border-b border-gray-300">Find The Sabotaged Tractor; Find the Footprints; Follow the footprints; Photograph the footprints and tire tracks</td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Bait & Switch</td>
                    <td className="px-3 py-6 border-b border-gray-300">Some of the farmers are getting nervous, now that news is spreading of strange animal behaviour and farm sabotage. One has taken to setting up traps in his field, and we ought to take care of them before someone gets hurt</td>
                    <td className="px-3 py-6 border-b border-gray-300">Disarm The Old Traps; Kill & Harvest The White Wolf</td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Dearly Beloved</td>
                    <td className="px-3 py-6 border-b border-gray-300">Given the challenges I've been facing recently, I'm happy to be distracted by a job that is much more positive. A family friend is getting married and I want to supply them with a centerpiece for their dinner.</td>
                    <td className="px-3 py-6 border-b border-gray-300">Harvest A Wild Boar; Drop Off The Wild Boar At Cresta Riberena</td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">The Red Carpet</td>
                    <td className="px-3 py-6 border-b border-gray-300">The mayor's assistant has let it slip that he's up to something in the middle of the reserve. I don't know why he's keeping me out of the loop, but I want you to check it out. Let me know if it's anything I should be worried about.</td>
                    <td className="px-3 py-6 border-b border-gray-300">Head to Campos Verdes; Investigate Campos Verdes; 'Cancel' the meeting; Find a place to hide near Campos Verdes</td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Water Worries</td>
                    <td className="px-3 py-6 border-b border-gray-300">I've had reports of sick and dead animals in a corner of the reserve. I have some suspicions that the lake could be at the root of this. I need you to check it out before this gets out of control.</td>
                    <td className="px-3 py-6 border-b border-gray-300">Visit the lake marked on your huntermate; Investigate the lake shore for signs of contamination; Examine the barrels; Photograph the footprints</td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">The Secret in the Woods</td>
                    <td className="px-3 py-6 border-b border-gray-300">This run of bad luck isn't a simple series of coincidences. There have been sightings of lights in the middle of the woods at night. This needs to be investigated as soon as possible.</td>
                    <td className="px-3 py-6 border-b border-gray-300">Investigate Reports Of Lights In The Woods; Investigate The Strange Site; Find Where The Truck Driver Went</td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Divine Reckoning</td>
                    <td className="px-3 py-6 border-b border-gray-300">These wolves have been a menace to the animals and hunters of Cuatro Colinas for too long. This ends now. Follow the tracks and put this threat down before it kills again.</td>
                    <td className="px-3 py-6 border-b border-gray-300">Follow the wolf to the monastery; Kill the killer wolf; Find a way out of the monastery; Visit the monastery</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6">
              <h4 id="cuatro-side" className="font-semibold mb-2">Side Missions</h4>

              <div className="space-y-6">
                <div>
                  <h5 id="cuatro-gary" className="font-medium">Gerhardt "Gary" Baden Missions</h5>
                  <div className="mt-2 overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-green-100 text-left">
                          <th className="px-3 py-6 border-b border-gray-300">Mission</th>
                          <th className="px-3 py-6 border-b border-gray-300">Description</th>
                          <th className="px-3 py-6 border-b border-gray-300">Objective</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">G.O.A.T</td>
                          <td className="px-3 py-6 border-b border-gray-300">Greetings and salutations! This is Gary Baden; we spent some time discussing hunting techniques over dinner, recently. I was wondering if you would be interested in a little friendly competition? I've already harvested two ibex this morning. This you can catch up while I grab a nap?</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest 2 goats</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Starting to Boar Me</td>
                          <td className="px-3 py-6 border-b border-gray-300">Well at least now I know that you're capable of killing a couple of old goats. If I've learned anything while amassing my collection of hunting trophies, it's that a true hunter isn't afraid to go after prey that can fight back. Think you can harvest a pair of wild boars?</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest 2 boars</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Feeling Sheepish?</td>
                          <td className="px-3 py-6 border-b border-gray-300">Two boars? Not bad. Did you wait for them to fall asleep before you took your shots? No need to be embarrassed. It's a good technique for a rookie hunter. While you were out doing that, I've brought a pair of mouflon from the mountain. Not a bad day, so far.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest 2 Mouflon Sheep</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Hundred-Meter Hurdles</td>
                          <td className="px-3 py-6 border-b border-gray-300">It seems you enjoy emulating me. Whatever I shoot, you copy. It's a little flattering, to be honest. I wonder if you can come close to matching my shots. You think you can efficiently kill an ibex from over a hundred meters away? I'd be impressed</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest a goat killed from 100m away and 100% quick kill</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">A Bit of a Long Shot</td>
                          <td className="px-3 py-6 border-b border-gray-300">I guess we all get lucky from time to time. It's all part of the hunt, right? just nailed a kill shot at two-hundred and fifty meters. You think you can do any better? There's no embarrassment if you can't. I am after all, a multiple award, winning hunter.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest an animal killed from 300m</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Take a Shot in the Dark</td>
                          <td className="px-3 py-6 border-b border-gray-300">It's remarkable how effective modern technology is in mitigating the errors that less experienced hunters tend to make, don't you think? Still, good job. How do you feel about hunting at night? It can be intimidating for journeymen hunters, but you should give it a try.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest an animal killed from 150m at night</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Up & At Them</td>
                          <td className="px-3 py-6 border-b border-gray-300">Clearly you have no problems with pulling the trigger and getting that kill shot. A real professional knows that the true test of a hunter is getting close without startling the animal. I was able to get within forty meters of an ibex before it bolted. Can you do better?</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest 2 goats killed from 30m or less</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">The Golden Touch</td>
                          <td className="px-3 py-6 border-b border-gray-300">There's prey out here that only the real-deal ever go after. If you want me to take you seriously, you're gonna need to harvest a wolf. A premium specimen, too. You should see the one I've got my eye on just now. It's gonna take something special to top this.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest a Gold wolf</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Baden's Folly</td>
                          <td className="px-3 py-6 border-b border-gray-300">I've been tracking a wolf, but every time I get close enough to take a shot, it disappears before I can find it in my scope. It's smart, too; only ever coming out at night. Alejandra should know where to find me, if you're up to it.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Reach Baden's last known location; Read Baden's Notes; Wait for the night and harvest the wolf mentioned in Baden's notes</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h5 id="cuatro-jose" className="font-medium">Jose Ruiz Hernandez Missions</h5>
                  <div className="mt-2 overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-green-100 text-left">
                          <th className="px-3 py-6 border-b border-gray-300">Mission</th>
                          <th className="px-3 py-6 border-b border-gray-300">Description</th>
                          <th className="px-3 py-6 border-b border-gray-300">Objective</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Blow the House Down</td>
                          <td className="px-3 py-6 border-b border-gray-300">Hello, this is Mayor Hernandez. I understand that you are busy, so I will get straight down to business. I have had several complaints about wild boar from a farmer within the reserve, and I'd appreciate your help dealing with them. Normally I'd ask Alejandra, but having a direct line to you is better.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest a wild boar</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Keep the Wolves From the Door</td>
                          <td className="px-3 py-6 border-b border-gray-300">A pack of curious wolves are straying a little too close to one of the reserve's most popular outposts. While this is the nature that many are coming here to see, it can be a little intimidating. I'd like you to harvest a couple of wolves around this outpost. Maybe it will teach them to avoid the area.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest 2 wolves at La Curva del Cazador</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Not Ready to Rock</td>
                          <td className="px-3 py-6 border-b border-gray-300">We often receive visitors who are not familiar with the dangers of roaming the countryside. This means that we must ensure they know the places that they ought to avoid. There is a particular area that could be dangerous, and I don't want a lawsuit. Can you check to see if it is stable?</td>
                          <td className="px-3 py-6 border-b border-gray-300">Reach the potentially dangerous spot; Take a picture of the potentially dangerous spot</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">A Little Gamey</td>
                          <td className="px-3 py-6 border-b border-gray-300">This week, I am hosting several guests from the Spanish government, and have promised them a dinner, composed entirely of locally sourced food. It appears that the high-ranking minister has pulled out and sent an aide in his place, so we don't need anything too fancy.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest 4 hares</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">The Farmer's Friend</td>
                          <td className="px-3 py-6 border-b border-gray-300">Let me tell you something, my friend. Nobody fusses, grumbles or complains like a farmer with something on their mind. If I'm going to get their vote next year, I need you to make a show of hunting some animals that are encroaching on their farmland. Let them know I care.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest 3 animals in the Lago de los Olivos area</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">The After-Party</td>
                          <td className="px-3 py-6 border-b border-gray-300">I recently gave my brother the gift of an overnight stay in the reserve. He has repaid my generosity by inviting his friends to join him and throwing a party in the middle of this idyllic landscape. Sadly, this has resulted in quite a mess. Would you tidy it up before anyone sees it?</td>
                          <td className="px-3 py-6 border-b border-gray-300">Pick up 10 pieces of trash</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Award For Best Supporting Hunter</td>
                          <td className="px-3 py-6 border-b border-gray-300">Many locals want a mayor that takes part in traditional pastimes, such as hunting in our game reserve, Unfortunately I am simply too busy to go on a hunt, but perhaps you could taxidermise a prize specimen and allow me to display it in my office? Just until after the next election.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest a Gold Gredos Ibex and taxidermize it</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Press the Flesh</td>
                          <td className="px-3 py-6 border-b border-gray-300">The minister has decided to visit after all, and wants to discuss my budget proposal for next year. If we don't get that budget, this community is going to turn on me. I need your help to convince him we are worthy of investment. I need food and a picture of the lodge I'll use to host him.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest a Silver Wild Boar; Take a picture of the lodge</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h5 id="cuatro-abbas" className="font-medium">Padre Abbas Missions</h5>
                  <div className="mt-2 overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-green-100 text-left">
                          <th className="px-3 py-6 border-b border-gray-300">Mission</th>
                          <th className="px-3 py-6 border-b border-gray-300">Description</th>
                          <th className="px-3 py-6 border-b border-gray-300">Objective</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Find Yourself in Nature</td>
                          <td className="px-3 py-6 border-b border-gray-300">Muy buenos, my friend. I am Padre Abbas. Alejandra tell me that you are willing to help me with my studies, but I would also like to offer something in return. Cuatro Colinas is a wondrous place to me. Before you do anything for me, I suggest that you take a little time to find yourself.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Reach the Llanuras De La Cosecha region; Reach the Campo De Los Beatos region; Reach the Dehesa Real region; Reach the Colina Santa region</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Capture the Moment</td>
                          <td className="px-3 py-6 border-b border-gray-300">We have something in common. We are both students of animal behaviour, and take satisfaction in predicting how animals will respond to us. I'd like you to take an opportunity to study the smallest creature you can find out here. Capture that moment with your camera</td>
                          <td className="px-3 py-6 border-b border-gray-300">Take a picture of a hare</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Our Night Companion</td>
                          <td className="px-3 py-6 border-b border-gray-300">Humanity's history is resplendent with folklore and mythology. The moon features heavily in the stories of almost every culture. In particular, I am fond of the moon above Cuatro Colinas. Can you capture a shot of the night sky from Balcón De Los Beatos?</td>
                          <td className="px-3 py-6 border-b border-gray-300">Reach Balcón De Los Beatos at night; Take a picture of the night sky</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Family Matters</td>
                          <td className="px-3 py-6 border-b border-gray-300">The solitude that one experiences out in the reserve can be both freeing and melancholic. I see our lupine neighbours as examples of how to have the freedom of the wilds, while retaining what makes us a family. Would you take a picture of a pack of wolves, for me?</td>
                          <td className="px-3 py-6 border-b border-gray-300">Take 4 pictures of different wolves</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Iberia's Crowning Glory</td>
                          <td className="px-3 py-6 border-b border-gray-300">While I don't hunt, Alejandra has helped me to understand the importance of the Iberian ibex, especially when it comes to the local perception. I'd like you to capture an image of each kind of ibex, to show that one need not shoot a creature to appreciate it.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Take a picture of a Beceite Ibex; Take a picture of a Gredos Ibex; Take a picture of a Southeastern Spanish Ibex; Take a picture of a Ronda Spanish Ibex</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">A Painter's Eye</td>
                          <td className="px-3 py-6 border-b border-gray-300">There are few places more spectacular than what we call the "painter's meadow". I'd bet that someone with your expertise in photography could take a truly spellbinding shot of this slice of Spanish countryside.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Reach the "painter's meadow"; Take a picture of the vista</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">The Bigger Picture</td>
                          <td className="px-3 py-6 border-b border-gray-300">This place is so magical, is it not? I will never tire of walking the paths, hiking the mountains and sitting in contemplation by the lakes of Cuatro Colinas. The wider picture is best taken in from a good vantage point. You'll get a great picture from the top of Lady Emilia's overlook.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Reach the top of Lady Emilia's overlook; Take a picture of the vista</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">A View Fit For a Saint</td>
                          <td className="px-3 py-6 border-b border-gray-300">The eastern ridges of the reserve offer some of the most amazing views of the river. Given that the river sustains the plants and animals that make this place so spellbinding, it seems only right that we capture a good shot from out on the eastern fringes.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Reach the top of the eastern fringe; Take a picture of the vista</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">In the Pilgrim's Footsteps</td>
                          <td className="px-3 py-6 border-b border-gray-300">Much like the pilgrim, you have travelled far and wide in the pursuit of greater understanding. And appropriately, you have reached the final task on my list. Take one final picture for me, from the apex of the pilgrim's climb. I will not forget your help in a hurry.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Reach the top of the pilgrim's climb; Take a picture of the vista</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h5 id="cuatro-nina" className="font-medium">Antonia “Nina” Acosta Gonzalez Missions</h5>
                  <div className="mt-2 overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-green-100 text-left">
                          <th className="px-3 py-6 border-b border-gray-300">Mission</th>
                          <th className="px-3 py-6 border-b border-gray-300">Description</th>
                          <th className="px-3 py-6 border-b border-gray-300">Objective</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Fresh Ingredients</td>
                          <td className="px-3 py-6 border-b border-gray-300">Hello! This is Nina; I understand that you knew I'd be in touch? I am excited to sample the delights of the reserve. Why don't we start off with something simple? I want to try making a traditional dish today, and I will need two hares to make it. Can you help me out?</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest 2 hares</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Professionally Pierced Pork</td>
                          <td className="px-3 py-6 border-b border-gray-300">It won't surprise you to hear that I am a purist, when it comes to my cooking. I am putting together a new menu and need a few different things, so I can make some samples. First, I require a wild boar, but I need you to kill it with an arrow, or a bolt. No bullets.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest a boar killed with a bow or crossbow</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Roe to Go</td>
                          <td className="px-3 py-6 border-b border-gray-300">Wonderful work! I can see why Alejandra is so excited to have you working here. This traditional technique of killing animals is said to improve the texture of the meat. This is an experiment of sorts. The next thing I need is a roe deer, killed with the same method. No bullets.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest a roe deer killed with a bow or crossbow</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">A Wounded Hart</td>
                          <td className="px-3 py-6 border-b border-gray-300">A wonderful example of a roe deer, ready for the pot! Given that you're so prolific with the traditional methods, why don't we try one last hunt without a gun? Bring me in a red deer, but I want this one with the minimum amount of trauma to the deer. A single shot to the heart ought to do it, no?</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest a red deer killed with a bow or crossbow and a shot to the heart</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Meat by Moonlight</td>
                          <td className="px-3 py-6 border-b border-gray-300">Next time you're in town, I'm going to make you pan-roasted venison. It's already proving very popular, and I actually need four more deer. My father's recipe book for venison mentions that they should be hunted at night, but I don't know why. Still, I won't argue with his technique.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest 4 deer at night</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Peerless Pork = Champion Chorizo</td>
                          <td className="px-3 py-6 border-b border-gray-300">I feel like the venison will become my signature dish while I'm here. I can't rest on my laurels, though. While I was away from home, I began working on my recipe for the perfect chorizo. If you can find me the best quality of Wild boar meat, I think I can make something special.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest a Gold Wild Boar</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Diversity Breeds Innovation</td>
                          <td className="px-3 py-6 border-b border-gray-300">The pan-roasted venison is undoubtedly the most popular thing on the menu, but I want to experiment a little more. I have a recipe for a chilindron that I'd love your help with. I need some quality venison to make this work, though. I'm sure you won't disappoint.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest a Silver roe deer; Harvest a Silver red deer</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">The Perfect Liebre</td>
                          <td className="px-3 py-6 border-b border-gray-300">Word is getting around about the quality of the food that we're serving. A prestigious food critic is driving all the way from Madrid to sample what we have. I have a special request. My grandmother used to make a dish with hare, that is truly unique. I need the best hare you have ever hunted.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest a Gold hare or higher</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h5 id="cuatro-sole" className="font-medium">Sole Santiago Serrano Missions</h5>
                  <div className="mt-2 overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-green-100 text-left">
                          <th className="px-3 py-6 border-b border-gray-300">Mission</th>
                          <th className="px-3 py-6 border-b border-gray-300">Description</th>
                          <th className="px-3 py-6 border-b border-gray-300">Objective</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Save Some For Me</td>
                          <td className="px-3 py-6 border-b border-gray-300">Hola. Alejandra tells me that you have offered to help out with some problems that we are facing out here on the reserve? The first thing I'd like your help with, is dealing with the wild boars in our potato fields. I cannot afford to lose a quarter of my field to these animals.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest 3 boars in the Granja Riberena area</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Packed Off</td>
                          <td className="px-3 py-6 border-b border-gray-300">That's a good start, but I'd wager that more will come back before too long. Thank you for your help. We are also experiencing a lot of problems with our wolves, but I'd like to use your experience as a hunter to work out where they're likely to congregate, so we can get an idea of their numbers.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Spot 1 wolf need zone in the Colina Rota area</td>
                        </tr>

                        <tr className="odd:bg-white even:bg_gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Things Are Getting Harey</td>
                          <td className="px-3 py-6 border-b border-gray-300">One of my friends had mentioned that the riverbank was starting to crumble in places. I think it's because the hares have been setting up their warrens too close to the water. While it may be a case of trying to swim upstream, I'd appreciate it if you could thin out their numbers a little.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest 5 hares in the Lago de los Olivos area</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Found Further Afield</td>
                          <td className="px-3 py-6 border-b border-gray-300">There are so many challenges to being a goatherd out here in Cuatro Colinas. You have to accept that with so many dangers around, there's a real risk of losing goats to other wildlife. My neighbour told me that he's recently lost a goat, but with no sign of where she went. Maybe you can track her down?</td>
                          <td className="px-3 py-6 border-b border-gray-300">Track the lost goat; Investigate the lost goat; Reach the goat's last known location</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Pre-emptive Strike</td>
                          <td className="px-3 py-6 border-b border-gray-300">The last time we had problems with the reserve's animal stock, it wasn't the boars. We had an abundance of roe deer that were doing real damage to the farms in the area. I think we need a cull of the roe deer, or I predict them becoming a real threat to our livelihoods.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest 3 female roe deer</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Butt Out, Buddy</td>
                          <td className="px-3 py-6 border-b border-gray-300">Several people have spotted male mouflon, harassing the sheep-herds that we keep out here. The predators are bad, enough, but none of us have the time to deal with territorial sheep. I think that if you hunt a few of the males that are causing the problems, that will make things easier for us.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest 3 male mouflons in the Lago Javier area</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Thinning the Pack</td>
                          <td className="px-3 py-6 border-b border-gray-300">We were able to conduct a census of wolf population based on your recommendations. It won't surprise you that we've found the wolf numbers to be a concern, and Alejandra agreed that they ought to be reduced. Let's start with five and see what happens.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest 5 wolves in the Colina Santa region</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Can't Show Up Empty-Handed</td>
                          <td className="px-3 py-6 border-b border-gray-300">I admit I was sceptical of the help that we would receive from you, but you have proven me wrong. Some of my fellow farmers have asked me to invite you to celebrate the harvest festival.If you bring dinner, you'll be extremely popular! I'll leave your invite at Victor's Overlook.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest a mouflon, boar or deer; Pick up the invite; Attend the celebrations</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Lake Woe; Be Gone</td>
                          <td className="px-3 py-6 border-b border-gray-300">Now that this business with Vista España is finished, we are looking at ways to remove the taint that they've left. Would you mind helping us one last time by taking some equipment out to the contaminated lake? We could do with monitoring the health of the animals nearby, as well.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Place a water monitoring station; Collect a sample of feces</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h5 id="cuatro-miguel" className="font-medium">Don Miguel Alejandro Del Bosque Escajeda Missions</h5>
                  <div className="mt-2 overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-green-100 text-left">
                          <th className="px-3 py-6 border-b border-gray-300">Mission</th>
                          <th className="px-3 py-6 border-b border-gray-300">Description</th>
                          <th className="px-3 py-6 border-b border-gray-300">Objective</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">In Memoriam</td>
                          <td className="px-3 py-6 border-b border-gray-300">Greetings, this is Miguel; Alejandra's father. You have already done a lot for my family, but I need your help with something else. Would you send me a well-lit picture of my dear wife's memorial?</td>
                          <td className="px-3 py-6 border-b border-gray-300">Travel to the memorial to Dona Garcia during the day; Take a picture of the memorial during the day</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">A Hunter's Reward</td>
                          <td className="px-3 py-6 border-b border-gray-300">We chose that spot for her memorial, as it was where we would stand to watch the sun rise. I want you to take part in an old Del Bosque tradition. The next time you harvest a red deer bring it to the Castillo, we will celebrate in your honor!</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest a Gold Red Deer</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">A Crowning Achievement</td>
                          <td className="px-3 py-6 border-b border-gray-300">I look forward to dining with you. In the meantime, I have another challenge for you. If we're going to get Cuatro Colinas back on its feet, we need to showcase its unique spoils. Take a picture of a majestic male ibex, atop the peak of our reserve.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Reach the highest hill in Cuatro Colinas; Take a picture of a male ibex</td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Spicing It Up</td>
                          <td className="px-3 py-6 border-b border-gray-300">We have scheduled the mayor to visit, so we can discuss the dealings he had with Vista España. It is important to remind him that our reserve has not only the best game, but the best hunter, too. Bag me three top quality hares...by moonlight.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest 3 Gold hares at night</td>
                        </tr>

                        <tr className="odd:bg-white even:bg_gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Absolution</td>
                          <td className="px-3 py-6 border-b border-gray-300">I am rid of my vendetta against the wolves of Cuatro Colinas. They are not deserving of the hate that was directed at them. Photograph four wolves for me, so I can begin our campaign to educate people about these misunderstood creatures.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Photograph 4 different wolves in 4 different pictures</td>
                        </tr>

                        <tr className="odd:bg-white even:bg_gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">The "Marksman" Challenge</td>
                          <td className="px-3 py-6 border-b border-gray-300">You might not be a Del Bosque, but you certainly shoot like one. I have little doubt that you'd be capable of setting the reserve record, and I'm inclined to give you the opportunity. When I was thirty, I took down an ibex with a single shot, from four-hundred meters away. Can you do better?</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest an ibex killed from 400m</td>
                        </tr>

                        <tr className="odd:bg-white even:bg_gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">The "Stalker" Challenge</td>
                          <td className="px-3 py-6 border-b border-gray-300">A record that I've held for over thirty years, and suddenly it's gone in a bang. Well, if I could hit a target from far away, my beloved's true skill was in getting extremely close without startling the creature, before taking the shot with a bow. I could never manage it. Can you?</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest a wolf killed from 30m or less with a bow</td>
                        </tr>

                        <tr className="odd:bg-white even:bg_gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">The "True" Grand Slam</td>
                          <td className="px-3 py-6 border-b border-gray-300">I wonder; do you think you have what it takes to complete the "true" grand slam? Four different types of ibex, all of them prime examples of their species? I've managed it, as has my grandfather, but most of those who tried, failed.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest a Gold Beceite Ibex; Harvest a Gold Ronda Ibex; Harvest a Gold Gredos Ibex; Harvest a Gold Southeastern Ibex</td>
                        </tr>

                        <tr className="odd:bg-white even:bg_gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">The Jewel in the Crown</td>
                          <td className="px-3 py-6 border-b border-gray-300">We put your pictures up on our website, word of mouth is spreading that new records are being set out here. Our booking office phone has been ringing all day! To celebrate, I want you to take some time and really find something to challenge yourself.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest a Diamond animal</td>
                        </tr>

                        <tr className="odd:bg-white even:bg_gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Just Like Old Times</td>
                          <td className="px-3 py-6 border-b border-gray-300">I feel like I finally have the strength to get out there. Alejandra has been working so hard, and she deserves some time off. Since you're the one who is most up to date, I'd like you to prepare the best outpost and find us some good, hunting spots.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Reach the Mirador De Dona Emilia area; Spot 3 different need zones in the Mirador De Dona Emilia area; Prepare the outpost for Alejandra and her father</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {selected === 'silver-ridge-peaks' && (
          <div className="mt-4 bg-gray-50 rounded p-3 text-gray-800">
            <TableOfContents 
              mainMissionsId="silver-main"
            />
            <h3 className="font-semibold mb-2">Silver Ridge Peaks — Missions</h3>
            <p>
              Missions at the Silver Ridge Peaks reserve are provided by the reserve warden Allan Bradley. Currently, the reserve has only 15 main missions, and no side missions.
            </p>

            <div className="mt-4 overflow-x-auto">
              <h4 id="silver-main" className="font-semibold mb-2">Main Missions</h4>
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-green-100 text-left">
                    <th className="px-3 py-6 border-b border-gray-300">Mission</th>
                    <th className="px-3 py-6 border-b border-gray-300">Description</th>
                    <th className="px-3 py-6 border-b border-gray-300">Objectives</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">A Rockies Start</td>
                    <td className="px-3 py-6 border-b border-gray-300">While you're familiarising yourself with the reserve and its outposts, I'd really appreciate it if you could move some essential supplies to one of our lookout towers. We need to make sure there's water there, in case on emergency.</td>
                    <td className="px-3 py-6 border-b border-gray-300">Visit the outpost; Retrieve supplies from the outpost; Reach the lookout tower; Deliver supplies</td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">The Poisoned Chalice</td>
                    <td className="px-3 py-6 border-b border-gray-300">While our problems with the water in the lake are pretty widely known at this point, I want to take some steps to make sure nobody dips a toe in there. Can you post some fliers on our notice boards, just to keep folks informed?</td>
                    <td className="px-3 py-6 border-b border-gray-300">Reach the trailhead; Pin up a flier at the trailhead; Follow the trail to the lake; Pin up a flier at the lake</td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Up High, Down Low</td>
                    <td className="px-3 py-6 border-b border-gray-300">I have a plan to get some money rolling into the reserve, but it's gonna need your help. We're going to host a rappelling class, but I need someone to get the gear ready. Can you grab the kit and get the site ready for action?</td>
                    <td className="px-3 py-6 border-b border-gray-300">Visit the outpost; Pick up the rappelling gear from the outpost; Reach the cliff; Anchor the rappelling ropes at the top of the rock face</td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">A Dangerous Reaction</td>
                    <td className="px-3 py-6 border-b border-gray-300">One of the reserve's neighbours is a frequent headache for us. This time, he's set up a camp next to our old disused uranium mine. I don't trust him to avoid doing something stupid. He needs an adult to supervise.</td>
                    <td className="px-3 py-6 border-b border-gray-300">Travel to the uranium mine; Investigate the uranium mine; Investigate Bobby Joe's campsite; Investigate Bobby Joe's tent; Replant the sign</td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">An Ill-Advised Retreat</td>
                    <td className="px-3 py-6 border-b border-gray-300">I've had calls from a group that were visiting the reserve for some kind of spiritual yoga retreat. Their leader has managed to poison them and confiscate their mobile phones. If you're nearby, can you check in on them?</td>
                    <td className="px-3 py-6 border-b border-gray-300">Check-in with visitors at the camping grounds; Investigate the camping grounds</td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Bear With Me</td>
                    <td className="px-3 py-6 border-b border-gray-300">I have the horrible feeling that someone has gone for a walk in bear country. He's unarmed, on his own and not in the best state of mind at the moment. We need to make sure he gets home safe.</td>
                    <td className="px-3 py-6 border-b border-gray-300">Find the start of Ted's trail - Find Ted; Inspect Ted's dropped picture</td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Out of Her Comfort Zone</td>
                    <td className="px-3 py-6 border-b border-gray-300">Sammy thinks that she heard a woman's scream, coming from the woods. It's possible that it was Baden, and we really need to track her down before she hurts herself. Can you follow this up?</td>
                    <td className="px-3 py-6 border-b border-gray-300">Find the source of the scream; Investigate the area where Baden dropped her phone</td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Plans are Derailed</td>
                    <td className="px-3 py-6 border-b border-gray-300">Take a look at the funicular railroad. It's a big tourist attraction and can be seen from some distance, so maybe Baden would head there. It's worth checking out, at least.</td>
                    <td className="px-3 py-6 border-b border-gray-300">Find the funicular shed - Tidy the funicular shed; Look for tracks nearby; Inspect the funicular train track; Photograph the damaged track</td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Old Haunts</td>
                    <td className="px-3 py-6 border-b border-gray-300">With everything that's happened to the funicular, I'm really concerned about what might be happening in the ghost town. Can you give it a once-over, just to make sure that it's still in one piece?</td>
                    <td className="px-3 py-6 border-b border-gray-300">Inspect the ghost town - Photograph any animal carcass you find; Inspect the inside of the shed; Photograph the text on the shed wall</td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Sawbones</td>
                    <td className="px-3 py-6 border-b border-gray-300">Whoever is targeting us has clearly targeted our most important sites. They're also armed and potentially very dangerous. While the police take over, can you visit the excavation site and make sure that it's secure?</td>
                    <td className="px-3 py-6 border-b border-gray-300">Check out the dig site - Inspect the tool shed; Look around for tracks; Photograph the footprints and tire tracks</td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Lock It Down</td>
                    <td className="px-3 py-6 border-b border-gray-300">If the criminals are still in the reserve, we should do everything we can to lock them in. There's a padlock for the barricade inside a nearby tower. Grab it and lock the gate closed, then the police can start searching for them.</td>
                    <td className="px-3 py-6 border-b border-gray-300">Pick up a padlock for the gate; Close and lock the gate</td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Inner Peace, Outer Chaos</td>
                    <td className="px-3 py-6 border-b border-gray-300">We know the mountain that Baden's planning to climb! By now, she must be in a sorry state, and she doesn't know that the accountants aren't coming to join her. She's alone out there. Let's find her before something happens.</td>
                    <td className="px-3 py-6 border-b border-gray-300">Investigate the top of Mount Ursula; Inspect Baden's journal; Look for clues nearby</td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Setting Up</td>
                    <td className="px-3 py-6 border-b border-gray-300">Baden's death is a tragedy, but we need to stay focused. Let the police do their work, we've got our own jobs to do. Something about her choice to visit here is suspicious. Let's check out the place where she was planning to stay.</td>
                    <td className="px-3 py-6 border-b border-gray-300">Visit Baden's outpost; Investigate Baden's outpost</td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Whodunnit?</td>
                    <td className="px-3 py-6 border-b border-gray-300">I can't believe it. Bobby Joe may have been the one to help us solve the case. Whatever distracted the truck driver during their escape must have been important. We should take the time to follow up this lead.</td>
                    <td className="px-3 py-6 border-b border-gray-300">Find the spot Allan has sent you to; Follow the trail into the woods; Inspect the mark on the tree; Inspect the disturbed earth</td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">The Ascent</td>
                    <td className="px-3 py-6 border-b border-gray-300">Things are still extremely busy right now, and I have a task that requires care and discretion. You are the only person I can trust. I need you to climb to the top of Mount Silveridge and retrieve a very special package for me.</td>
                    <td className="px-3 py-6 border-b border-gray-300">Reach the base of the Mount Silver Ridge trail; Climb to the top of Mount Silver Ridge; Retrieve the quartz rattles</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {selected === 'te-awaroa' && (
          <div className="mt-4 bg-gray-50 rounded p-3 text-gray-800">
            <TableOfContents 
              mainMissionsId="teawaroa-main"
            />
            <h3 className="font-semibold mb-2">Te Awaroa National Park — Missions</h3>
            <p>
              Missions on the Te Awaroa National Park are provided by the reserve warden Kiri Taylor. Currently, the reserve has 16 main missions, and no side missions.
            </p>

            <div className="mt-4 overflow-x-auto">
              <h4 id="teawaroa-main" className="font-semibold mb-2">Main Missions</h4>
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-green-100 text-left">
                    <th className="px-3 py-6 border-b border-gray-300">Mission</th>
                    <th className="px-3 py-6 border-b border-gray-300">Description</th>
                    <th className="px-3 py-6 border-b border-gray-300">Objective</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Haere Mai!</td>
                    <td className="px-3 py-6 border-b border-gray-300">Glad to see that you've arrived in one piece. There's something waiting for you at the outpost I've marked on your Huntermate, and then you can get a sense of the place at the lookout tower nearby.</td>
                    <td className="px-3 py-6 border-b border-gray-300">Visit the nearby outpost; Enter the outpost; Visit the nearby lookout tower; Pick up the action camera</td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Propped Up</td>
                    <td className="px-3 py-6 border-b border-gray-300">We've gotta clear out those movie props if we're going to film in the area. Could I trouble you to go take a look?</td>
                    <td className="px-3 py-6 border-b border-gray-300">Reach the movie set; Clear away the movie set</td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Picture (Im)Perfect</td>
                    <td className="px-3 py-6 border-b border-gray-300">Our marketing team wants to show the world what this place has to offer, so they've asked us to take a few snaps of scenic sites around the reserve. One's a willow tree growing out of a lake beloved by social media types, the others are a set of boulders that'll make you re*evaluate your attitude towards rocks.</td>
                    <td className="px-3 py-6 border-b border-gray-300">Reach Lake Wakaiti; Photograph the willow tree; Reach the beach; Inspect the trash</td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Mess On The Beach</td>
                    <td className="px-3 py-6 border-b border-gray-300">Those kids left a right mess behind, and with blue penguin populations nesting nearby cleaning it up is a matter of urgency. Can you take a look, and then finish up by photographing the boulders?</td>
                    <td className="px-3 py-6 border-b border-gray-300">Grab a trash picker and plastic bag; Clean up the trash; Leave the trash at the stand; Photograph the boulders</td>
                  </tr>

                  <tr className="odd:bg-white even:bg_gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Up Close And Personal</td>
                    <td className="px-3 py-6 border-b border-gray-300">It's time for you to show me why you're here. Kill and harvest an animal and the action camera will record your hunt automatically. No small fries, though: make sure your prey is over 30 kg.</td>
                    <td className="px-3 py-6 border-b border-gray-300">Harvest an animal over 30 kg</td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Elusive Prey</td>
                    <td className="px-3 py-6 border-b border-gray-300">I have a favor to ask. I've set up a few trail cameras around the reserve, to keep an eye on... things. Anyway, the battery on one's munted. Head over to the outpost I've marked, grab the battery, and replace it. Cheers!</td>
                    <td className="px-3 py-6 border-b border-gray-300">Reach the outpost; Pick up the battery pack; Replace the battery on the dead camera; Inspect the other cameras</td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">A River Runs Through It</td>
                    <td className="px-3 py-6 border-b border-gray-300">You're going spelunking. Head to the cave marked on your Huntermate and I'll walk you through it. Easy does it!</td>
                    <td className="px-3 py-6 border-b border-gray-300">Reach Cracked River Cave; Enter Cracked River Cave; Make it out of Cracked River Cave; Inspect the cave art</td>
                  </tr>

                  <tr className="odd:bg-white even:bg_gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">A Trap In Time</td>
                    <td className="px-3 py-6 border-b border-gray-300">Are you okay with getting your hands a little dirty? Someone needs to set up a few traps to prevent the reintroduction of invasive mammalian pests, and our resident conservationist's out sick.</td>
                    <td className="px-3 py-6 border-b border-gray-300">Collect the traps; Lay the traps; Take down the 1080 warning sign; Inspect the footprints</td>
                  </tr>

                  <tr className="odd:bg-white even:bg_gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Toxicology Report</td>
                    <td className="px-3 py-6 border-b border-gray-300">I don't particularly like the idea of someone going for a stroll in the woods out in the middle of nowhere where we're closed to visitors. Maybe if you follow those tracks we'll get a sense of where they went.</td>
                    <td className="px-3 py-6 border-b border-gray-300">Follow the footprints; Inspect the longbow and deer carcass; Take shelter at Koekoeā Hut; Inspect the mess at Koekoeā Hut; Inspect the inside of the outpost</td>
                  </tr>

                  <tr className="odd:bg-white even:bg_gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">The Battle Of Stonecastle Valley</td>
                    <td className="px-3 py-6 border-b border-gray-300">Forget Baden for now; let's get back on track. Head over to Stonecastle Valley and let's see if we can get you set up for another hunt.</td>
                    <td className="px-3 py-6 border-b border-gray-300">Reach Stonecastle Valley; Inspect the movie set; Follow the trail of movie props; Inspect the tracks; Reach the commune; Inspect the letterbox</td>
                  </tr>

                  <tr className="odd:bg-white even:bg_gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Left Behind</td>
                    <td className="px-3 py-6 border-b border-gray-300">I can't believe what happened out here. But Melanie left a letter? Give it a read, if you feel like it, and then head off and get us some more footage. Plenty of prime deer specimens in the area: why not make that your focus?</td>
                    <td className="px-3 py-6 border-b border-gray-300">Read the letter; Harvest a deer in Stonecastle Valley</td>
                  </tr>

                  <tr className="odd:bg-white even:bg_gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">The Hunt is On</td>
                    <td className="px-3 py-6 border-b border-gray-300">This marketing video just became a documentary! I've marked where Melanie saw the moose tracks on your Huntermate. Let's hope we're not too late.</td>
                    <td className="px-3 py-6 border-b border-gray-300">Find the moose tracks; Follow the moose tracks</td>
                  </tr>

                  <tr className="odd:bg-white even:bg_gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">A Favor for a Friend</td>
                    <td className="px-3 py-6 border-b border-gray-300">I need to ask you for another favor, but there's something in it for you this time. Head up into the mountains. I've gotta tell you a story.</td>
                    <td className="px-3 py-6 border-b border-gray-300">Travel to the area marked on your huntermate; Inspect the downed helicopter; Inspect the crash site</td>
                  </tr>

                  <tr className="odd:bg-white even:bg_gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Cry for Attention</td>
                    <td className="px-3 py-6 border-b border-gray-300">Drop Mum's pounamu necklace off at the nearby outpost and let's wrap things up. I think we've got enough footage to make something great.</td>
                    <td className="px-3 py-6 border-b border-gray-300">Drop the pounamu necklace off at Kākā hut</td>
                  </tr>

                  <tr className="odd:bg-white even:bg_gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Last of its Kind</td>
                    <td className="px-3 py-6 border-b border-gray-300">I swear, I'm shaking. Follow the moose's call; he couldn't have gone far. Just be prepared to make a quick decision once you catch up.</td>
                    <td className="px-3 py-6 border-b border-gray-300">Follow the moose call; Photograph the moose; Kill and harvest the moose</td>
                  </tr>

                  <tr className="odd:bg-white even:bg_gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">To the Lighthouse</td>
                    <td className="px-3 py-6 border-b border-gray-300">Hope you've been enjoying yourself, e hoa! We've got some final touches to the reserve website to do, and the marketing team have requested a couple of photos of one of our lighthouses. Why don't you head over there and I'll fill you in on what's been happening while you've been out in the wop-wops?</td>
                    <td className="px-3 py-6 border-b border-gray-300">Do some hunting while you wait for Kiri to get in touch; Travel to the coast; Photograph the lighthouse from the beach; Photograph the lighthouse up close</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {selected === 'rancho-del-arroyo' && (
          <div className="mt-4 bg-gray-50 rounded p-3 text-gray-800">
            <TableOfContents 
              mainMissionsId="rancho-main"
            />
            <h3 className="font-semibold mb-2">Rancho del Arroyo — Missions</h3>
            <p>
              Missions on the Rancho del Arroyo are provided by the reserve warden Salvador Soto Muñoz. Currently, the reserve has 12 main missions, and no side missions.
            </p>

            <div className="mt-4 overflow-x-auto">
              <h4 id="rancho-main" className="font-semibold mb-2">Main Missions</h4>
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-green-100 text-left">
                    <th className="px-3 py-6 border-b border-gray-300">Mission</th>
                    <th className="px-3 py-6 border-b border-gray-300">Description</th>
                    <th className="px-3 py-6 border-b border-gray-300">Objectives</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Bienvenidos a Mexico</td>
                    <td className="px-3 py-6 border-b border-gray-300">¿Qué onda, sleepyhead? Take your time to settle in and get the know the place. Open the hacienda outpost, then why not try doing some scouting from the lookout tower nearby?</td>
                    <td className="px-3 py-6 border-b border-gray-300">Open the Hacienda Outpost; (Optional) Familiarize yourself with the Hacienda; Visit the nearby lookout tower</td>
                  </tr>

                  <tr className="odd:bg-white even:bg_gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Fencing Champion</td>
                    <td className="px-3 py-6 border-b border-gray-300">Most of the cattle fencing's been torn down, but I haven't gotten around to all of it. Pick up the fencing pliers in the hacienda and head over to the pasture marked on your Huntermate.</td>
                    <td className="px-3 py-6 border-b border-gray-300">Pick up the fencing pliers in Hacienda; Travel to the former cattle pasture; Cut and roll up the barbed wire; Pull out the fence posts</td>
                  </tr>

                  <tr className="odd:bg-white even:bg_gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Clear and Pheasant Danger</td>
                    <td className="px-3 py-6 border-b border-gray-300">Let's have a change of pace, why don't we? You'll find the best pheasant hunting spots in the Rio Sonora region. Just make sure to get them to take off first.</td>
                    <td className="px-3 py-6 border-b border-gray-300">Travel to the Rio Sonora region; (Optional) Find a pheasant need zone in the Rio Sonora region; Kill a pheasant in the air and pass the harvest check</td>
                  </tr>

                  <tr className="odd:bg-white even:bg_gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Grounded</td>
                    <td className="px-3 py-6 border-b border-gray-300">My parents' generation didn't have the best handle on how to manage water resources, and we're still living with the consequences. Fortunately there's an easy solution. Head over to the arroyo bank and set up the gabions I've placed there.</td>
                    <td className="px-3 py-6 border-b border-gray-300">Travel to where the gabions have been stacked; Line up the gabion cages along the lake shore; Fill the gabion cages with rocks</td>
                  </tr>

                  <tr className="odd:bg-white even:bg_gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">A Safe Place</td>
                    <td className="px-3 py-6 border-b border-gray-300">There's a former stockman's residence in the middle of nowhere that needs some finishing touches before we can officially call it an outpost. Set up the noticeboard, then we'll call this done.</td>
                    <td className="px-3 py-6 border-b border-gray-300">Travel to the outpost site at the edge of the desert; Pick up the shovel and noticeboard; Dig the holes for the noticeboard; Uncover the lockbox; Place the noticeboard</td>
                  </tr>

                  <tr className="odd:bg-white even:bg_gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Blast From the Past</td>
                    <td className="px-3 py-6 border-b border-gray-300">¡Ah, chin...!... I still can't believe we found that thing. If you're as curious as I am, try the hacienda's master bedroom - I'm certain there used to be a similar-looking lockbox in there.</td>
                    <td className="px-3 py-6 border-b border-gray-300">Return to the hacienda; Look for the lockbox's key in the master bedroom; Examine the shotgun for clues</td>
                  </tr>

                  <tr className="odd:bg-white even:bg_gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Abandoned Memories</td>
                    <td className="px-3 py-6 border-b border-gray-300">The engraving on the shotgun mentioned Bosque Alto, the region in the hills east if the casa grande. Let's take a look around there , see if we find any clues.</td>
                    <td className="px-3 py-6 border-b border-gray-300">Reach Bosque Alto; Look for anything suspicious in the Bosque Alto hills; Enter the shack; Inspect the desk</td>
                  </tr>

                  <tr className="odd:bg-white even:bg_gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Target Practice</td>
                    <td className="px-3 py-6 border-b border-gray-300">There's a gift for you in the outpost I've marked on your Huntermate. Then we have other matters to attend to...</td>
                    <td className="px-3 py-6 border-b border-gray-300">Pickup the shotgun at the outpost; Inspect the intruders' pickup truck; Shoot down a few cans at the makeshift shooting range</td>
                  </tr>

                  <tr className="odd:bg-white even:bg_gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Raúl the Revolutionary</td>
                    <td className="px-3 py-6 border-b border-gray-300">Let's see if we can find anything to help us solve this mystery in the hacienda's study room. There must be a century's worth of old papers and newspaper clippings in there.</td>
                    <td className="px-3 py-6 border-b border-gray-300">Return to the hacienda; Go to the study; Look for evidence of who the young man in the photo is</td>
                  </tr>

                  <tr className="odd:bg-white even:bg_gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">A Place to Rest</td>
                    <td className="px-3 py-6 border-b border-gray-300">We don't have much to go on with the photo other than the shrine and the curve of the hill behind it. Follow the arroyo north and see if you can find that area, then we'll look around for clues.</td>
                    <td className="px-3 py-6 border-b border-gray-300">Reach Reposo de Guadalupe; Look for the area in the photograph; Examine the shrine</td>
                  </tr>

                  <tr className="odd:bg-white even:bg_gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Y Tambien tu Hermano</td>
                    <td className="px-3 py-6 border-b border-gray-300">We're so close to solving this. Let's return to the casa grande and check out that book Los de abajo.</td>
                    <td className="px-3 py-6 border-b border-gray-300">Return to the Hacienda; Examine Los de abajo/The Underdogs on the Bookcase; Traverse the Secret Passage; Inspect the Items on the Desk</td>
                  </tr>

                  <tr className="odd:bg-white even:bg_gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Home on the Ranch</td>
                    <td className="px-3 py-6 border-b border-gray-300">Your help has meant the world to me and my family. I just have one final favor to ask. I've left some stencils and painting supplies in the casa grande's kitchen.</td>
                    <td className="px-3 py-6 border-b border-gray-300">Pick up the Paint, Stencils and Brush; Climb the Scaffolding; Paint the New Name on the Archway</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {selected === 'mississippi-acres' && (
          <div className="mt-4 bg-gray-50 rounded p-3 text-gray-800">
            <TableOfContents 
              mainMissionsId="mississippi-main"
            />
            <h3 className="font-semibold mb-2">Mississippi Acres Preserve — Missions</h3>
            <p>
              Missions on the Mississippi Acres Preserve are provided by the reserve warden Imani "Immi" Davis. Currently, the reserve has 12 main missions, and no side missions.
            </p>

            <div className="mt-4 overflow-x-auto">
              <h4 id="mississippi-main" className="font-semibold mb-2">Main Missions</h4>
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-green-100 text-left">
                    <th className="px-3 py-6 border-b border-gray-300">Mission</th>
                    <th className="px-3 py-6 border-b border-gray-300">Description</th>
                    <th className="px-3 py-6 border-b border-gray-300">Objective</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Hell or High Water</td>
                    <td className="px-3 py-6 border-b border-gray-300">Welcome to Mississippi Acres, rookie! Sorry to throw you in at the deep end of the Deep South, But one of our volunteers has lost some flood relief supplies intended for people in need. Can you lend a helping hand?</td>
                    <td className="px-3 py-6 border-b border-gray-300">Find Where Steve Lost The Supplies; Retrieve the Supplies; Retrieve the Briefcase</td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Unwelcome Guests</td>
                    <td className="px-3 py-6 border-b border-gray-300">Drop the supplies off at the outpost I've marked on your Huntermate, but be warned: we haven't taken out the trash in a while and it can get nasty. You're doing us a huge favor!</td>
                    <td className="px-3 py-6 border-b border-gray-300">Drop off the Briefcase and Supplies; Chase Off the Raccoons; Pick Up the Heater</td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Southern Inhospitality</td>
                    <td className="px-3 py-6 border-b border-gray-300">I don't get why need a heater in the middle of the year, but let's not leave them hanging. Drop it off at the Big Game Club's headquarters.</td>
                    <td className="px-3 py-6 border-b border-gray-300">Head to the Big Game Club's Lodge; Inspect the Lodge Entrance; Peer through the Lodge's Window; Deliver the Heater</td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Something Wicked This way Comes</td>
                    <td className="px-3 py-6 border-b border-gray-300">That's everything urgent out of the way, buuut I'm not done with you yet. Head to the Camp Haven bunks and I'll explain on the way.</td>
                    <td className="px-3 py-6 border-b border-gray-300">Fetch the Rope; Repair the Tire Swing; Investigate the Area Around the Camp Haven Bunks; Investigate the Note; Head to the Camp Haven Bunks</td>
                  </tr>

                  <tr className="odd:bg-white even:bg_gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Gator Aid</td>
                    <td className="px-3 py-6 border-b border-gray-300">Nuisance alligators are, well, a nuisance. Let's not let this one get out of hand. Betty should have sent the details to your Huntermate.</td>
                    <td className="px-3 py-6 border-b border-gray-300">Head to Where the Alligator Was Last Spotted; Look Around for Clues; Investigate the Catch Pole</td>
                  </tr>

                  <tr className="odd:bg-white even:bg_gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Lizard Brain</td>
                    <td className="px-3 py-6 border-b border-gray-300">Sorry to ask, but I want to make sure you know how to hunt a gator... just in case. First step: find where they gather.</td>
                    <td className="px-3 py-6 border-b border-gray-300">Find an Alligator Need Zone; Kill an Alligator and Pass the Harvest Check</td>
                  </tr>

                  <tr className="odd:bg-white even:bg_gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Out of Reach</td>
                    <td className="px-3 py-6 border-b border-gray-300">Let's investigate the spots marked on the map we found at the Camp Haven bunks. Who knows, maybe there's some hint of what's been happening to the kids?</td>
                    <td className="px-3 py-6 border-b border-gray-300">Locate the First Site Listed on the Map; Go to the Campsite Listed on the Map; Find the Source of the Wailing; Shut the Tape Player Off; Investigate the campsite for Clues</td>
                  </tr>

                  <tr className="odd:bg-white even:bg_gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">B-side the Point</td>
                    <td className="px-3 py-6 border-b border-gray-300">This is an inside job, I'm sure of it. The only question is whether it was Camp Haven staff or someone from the Big Game Club Let's head to the second site on the map and see if we can find any more clues.</td>
                    <td className="px-3 py-6 border-b border-gray-300">Go to the Second Location Listed on the Map; Find the Tape Player; Switch Off the Tape Player; Inspect the Tape</td>
                  </tr>

                  <tr className="odd:bg-white even:bg_gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Short Circuited</td>
                    <td className="px-3 py-6 border-b border-gray-300">Well, sugar, you're taking orders from me now! There's done been a power outage over by my brother's office and the Big Game Club's next AGM is coming up. Can you see what's transpired? I appreciate it!</td>
                    <td className="px-3 py-6 border-b border-gray-300">Investigate the Power Outage near Betty's Brother's Office; Let Betty's Brother Know about the Downed Power Line; Look Inside Betty's Brother's Office for Clues</td>
                  </tr>

                  <tr className="odd:bg-white even:bg_gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Breaking and Entering</td>
                    <td className="px-3 py-6 border-b border-gray-300">We're really close to figuring out what's going on here. I just know it... I think we need to try retracing our steps, though.</td>
                    <td className="px-3 py-6 border-b border-gray-300">Find Some Evidence to Implicate the Big Game Club; Return to the Big Game Club's Headquarters; Input the Keypad Code; Inspect the Meeting Room; Take a Picture of the Floor Plan</td>
                  </tr>

                  <tr className="odd:bg-white even:bg_gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Get Out!</td>
                    <td className="px-3 py-6 border-b border-gray-300">Mississippi Goddamm — Don't stop for anything! Run!</td>
                    <td className="px-3 py-6 border-b border-gray-300">Run Towards the Cotton Fields</td>
                  </tr>

                  <tr className="odd:bg-white even:bg_gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Factory Farming</td>
                    <td className="px-3 py-6 border-b border-gray-300">That was intense. Look, those noises we heard... I think they were coming from the abandoned paper mill in the north-east of the preserve. If we want answers, we should try heading there. Let's wait until dusk.</td>
                    <td className="px-3 py-6 border-b border-gray-300">Wait Until Night Falls; Travel to the Abandoned Paper Mill; Find a Way into the Abandoned Paper Mill; Search the area for clues</td>
                  </tr>

                  <tr className="odd:bg-white even:bg_gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Euthanize the Sick Alligator</td>
                    <td className="px-3 py-6 border-b border-gray-300">(Final task) Put the sick alligator out of its misery to stop the spread of disease.</td>
                    <td className="px-3 py-6 border-b border-gray-300">Euthanize the Sick Alligator</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {selected === 'revontuli-coast' && (
          <div className="mt-4 bg-gray-50 rounded p-3 text-gray-800">
            <TableOfContents 
              mainMissionsId="revontuli-main"
              sideMissionsId="revontuli-side"
              sideMissions={[
                { id: 'revontuli-misc', label: 'Miscellaneous 19' },
                { id: 'revontuli-observer', label: 'The Observer' },
                { id: 'revontuli-landmarks', label: 'Finnish Landmarks' },
                { id: 'revontuli-highest', label: 'The Highest Point' },
              ]}
            />
            <h3 className="font-semibold mb-2">Revontuli Coast — Missions</h3>
            <p>
              Missions on the Revontuli Coast are provided by the reserve warden Oiva Reijo Ikävalko. The reserve has 8 main missions, and 4 side missions.
            </p>

            <p className="mt-2">
              A notable feature of the local campaign is the complete absence of story missions about hunting itself (harvesting and photographing of animals is moved to additional missions with "collect the full list" goals). The campaign focuses on sightseeing and listening to the warden's stories.
            </p>

            <div className="mt-4 overflow-x-auto">
              <h4 id="revontuli-main" className="font-semibold mb-2">Main Missions</h4>
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-green-100 text-left">
                    <th className="px-3 py-6 border-b border-gray-300">Mission</th>
                    <th className="px-3 py-6 border-b border-gray-300">Description</th>
                    <th className="px-3 py-6 border-b border-gray-300">Objective</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Welcome to Suomi</td>
                    <td className="px-3 py-6 border-b border-gray-300">Hello hello hello! I'm very happy to see you my friend! You've been dropped off at the main camping site. Unlock the outpost and try the Runebergintorttu.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Open Camping Site Outpost</li>
                        <li>Leave Your Luggage at the Cabin</li>
                        <li>Try The Pastry</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Guided Tour Starts</td>
                    <td className="px-3 py-6 border-b border-gray-300">I will be your personal guide along the trail, I will tell you about worthwhile sights and tell you about activities that we have here in Finland. Follow your Huntermate.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Go to the Start of the Trail</li>
                        <li>Follow the Blue Trail</li>
                        <li>Visit the Nearby Lookout Tower</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Mosquito Madness</td>
                    <td className="px-3 py-6 border-b border-gray-300">The Nordic region has more mosquitos than you might be used to. I left some mosquito repellent at a camp near here you can use. It's marked on your Huntermate.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Follow the Blue Trail</li>
                        <li>Pick Up Mosquito Repellent</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Guided Tour Continues 1</td>
                    <td className="px-3 py-6 border-b border-gray-300">Lets get to know each other better while we continue the guided tour. Follow your Huntermate.</td>
                    <td className="px-3 py-6 border-b border-gray-300">Follow the Blue Trail</td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">360 Degrees of Sauna</td>
                    <td className="px-3 py-6 border-b border-gray-300">Have you ever tried a sauna? This is the perfect place for it. Help complete the construction and then try it! You won't regret it.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Try the Sauna</li>
                        <li>Collect the Rocks</li>
                        <li>Collect Dried Birch</li>
                        <li>Place the Rocks on the Furnace</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Guided Tour Continues 2</td>
                    <td className="px-3 py-6 border-b border-gray-300">Let's get philosophical as we continue the trail. Follow your Huntermate.</td>
                    <td className="px-3 py-6 border-b border-gray-300">Follow the Blue Trail</td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Steady Aim</td>
                    <td className="px-3 py-6 border-b border-gray-300">Let's see how your aim is, have set up a few targets for you to hit. Go to the designated position and steady your aim.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Travel to the Target Location</li>
                        <li>Stand in Circle and Shoot the Challenge Target</li>
                        <li>Travel to the Target Location</li>
                        <li>Stand in Circle and Shoot the Challenge Target</li>
                        <li>Travel to the Target Location</li>
                        <li>Stand in Circle and Shoot the Challenge Target</li>
                        <li>Travel to the Target Location</li>
                        <li>Stand in Circle and Shoot the Challenge Target</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Guided Tour Ends</td>
                    <td className="px-3 py-6 border-b border-gray-300">We are getting close to the end of the guided tour, let's use a boat to get back to the main camping site.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Follow the Blue Trail</li>
                        <li>Use the Boat</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6">
              <h4 id="revontuli-side" className="font-semibold mb-2">Side Missions</h4>

              <div className="space-y-6">
                <div>
                  <h5 id="revontuli-misc" className="font-medium">Miscellaneous 19</h5>
                  <div className="mt-2 overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-green-100 text-left">
                          <th className="px-3 py-6 border-b border-gray-300">Mission</th>
                          <th className="px-3 py-6 border-b border-gray-300">Description</th>
                          <th className="px-3 py-6 border-b border-gray-300">Objective</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Miscellaneous 19</td>
                          <td className="px-3 py-6 border-b border-gray-300">Every Year we have our own spin of the BIG FIVE challenge, but we call ours the "Sekalaiset yhdeksäntoista". Harvest one of every animal species in the reserve with gold medal or better to complete the challenge. Hunt them in any order.</td>
                          <td className="px-3 py-6 border-b border-gray-300">
                            <ul className="list-disc list-inside">
                              <li>Harvest a Bean Goose and Earn Gold or Better</li>
                              <li>Harvest a Canada Goose and Earn Gold or Better</li>
                              <li>Harvest a Eurasian Wigeon and Earn Gold or Better</li>
                              <li>Harvest a Eurasian Teal and Earn Gold or Better</li>
                              <li>Harvest a Moose and Earn Gold or Better</li>
                              <li>Harvest a Rock Ptarmigan and Earn Gold or Better</li>
                              <li>Harvest a Brown Bear and Earn Gold or Better</li>
                              <li>Harvest a Whitetail Deer and Earn Gold or Better</li>
                              <li>Harvest a Lynx and Earn Gold or Better</li>
                              <li>Harvest a Raccoon Dog and Earn Gold or Better</li>
                              <li>Harvest a Mountain Hare and Earn Gold or Better</li>
                              <li>Harvest a Willow Ptarmigan and Earn Gold or Better</li>
                              <li>Harvest a Tufted Duck and Earn Gold or Better</li>
                              <li>Harvest a Mallard and Earn Gold or Better</li>
                              <li>Harvest a Hazel Grouse and Earn Gold or Better</li>
                              <li>Harvest a Greylag Goose and Earn Gold or Better</li>
                              <li>Harvest a Goldeneye and Earn Gold or Better</li>
                              <li>Harvest a Black Grouse and Earn Gold or Better</li>
                              <li>Harvest a Western Capercaillie and Earn Gold or Better</li>
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h5 id="revontuli-observer" className="font-medium">The Observer</h5>
                  <div className="mt-2 overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-green-100 text-left">
                          <th className="px-3 py-6 border-b border-gray-300">Mission</th>
                          <th className="px-3 py-6 border-b border-gray-300">Description</th>
                          <th className="px-3 py-6 border-b border-gray-300">Objective</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">The Observer</td>
                          <td className="px-3 py-6 border-b border-gray-300">Appreciate nature through the lens of an observer by taking a picture of each animal in the reserve.</td>
                          <td className="px-3 py-6 border-b border-gray-300">
                            <ul className="list-disc list-inside">
                              <li>Photograph a Bean Goose</li>
                              <li>Photograph a Moose</li>
                              <li>Photograph a Brown Bear</li>
                              <li>Photograph a Whitetail Deer</li>
                              <li>Photograph a Lynx</li>
                              <li>Photograph a Raccoon Dog</li>
                              <li>Photograph a Mountain Hare</li>
                              <li>Photograph a Willow Ptarmigan</li>
                              <li>Photograph a Tufted Duck</li>
                              <li>Photograph a Mallard</li>
                              <li>Photograph a Hazel Grouse</li>
                              <li>Photograph a Greylag Goose</li>
                              <li>Photograph a Western Capercaillie</li>
                              <li>Photograph a Goldeneye</li>
                              <li>Photograph a Eurasian Wigeon</li>
                              <li>Photograph a Eurasian Teal</li>
                              <li>Photograph a Canada Goose</li>
                              <li>Photograph a Black Grouse</li>
                              <li>Photograph a Rock Ptarmigan</li>
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h5 id="revontuli-landmarks" className="font-medium">Finnish Landmarks</h5>
                  <div className="mt-2 overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-green-100 text-left">
                          <th className="px-3 py-6 border-b border-gray-300">Mission</th>
                          <th className="px-3 py-6 border-b border-gray-300">Description</th>
                          <th className="px-3 py-6 border-b border-gray-300">Objective</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Finnish Landmarks</td>
                          <td className="px-3 py-6 border-b border-gray-300">We have a few amusing landmarks you can visit. I've marked their locations on your Huntermate.</td>
                          <td className="px-3 py-6 border-b border-gray-300">
                            <ul className="list-disc list-inside">
                              <li>Visit Cod-Fin Strait</li>
                              <li>Visit Troll's Crack</li>
                              <li>Visit The Taika Rock</li>
                              <li>Visit The Abandonded Bunkers</li>
                              <li>Visit Troll's Kettle</li>
                              <li>Visit The Monument</li>
                              <li>Climb to the top of Routakivi</li>
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h5 id="revontuli-highest" className="font-medium">The Highest Point</h5>
                  <div className="mt-2 overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-green-100 text-left">
                          <th className="px-3 py-6 border-b border-gray-300">Mission</th>
                          <th className="px-3 py-6 border-b border-gray-300">Description</th>
                          <th className="px-3 py-6 border-b border-gray-300">Objective</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">The Highest Point</td>
                          <td className="px-3 py-6 border-b border-gray-300">If you want to be alone with your thoughts, the highest point is the perfect place.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Visit the Highest Point in the Reserve</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {selected === 'new-england-mountains' && (
          <div className="mt-4 bg-gray-50 rounded p-3 text-gray-800">
            <TableOfContents 
              mainMissionsId="newengland-main"
              sideMissionsId="newengland-side"
              sideMissions={[
                { id: 'newengland-failure', label: "Don't Fear Failure" },
                { id: 'newengland-culling', label: 'Responsible Culling' },
                { id: 'newengland-symbol', label: 'State Symbol' },
                { id: 'newengland-album', label: 'Family Album' },
                { id: 'newengland-olden', label: 'The Olden Days' },
                { id: 'newengland-shooting', label: 'Shooting Competition' },
                { id: 'newengland-trophy', label: 'Trophy Competition' },
                { id: 'newengland-sneak', label: 'Sneak Competition' },
                { id: 'newengland-landmarks', label: 'New England Landmarks' },
                { id: 'newengland-notice1', label: 'Notice Board #1' },
                { id: 'newengland-notice2', label: 'Notice Board #2' },
              ]}
            />
            <h3 className="font-semibold mb-2">New England Mountains — Missions</h3>
            <p>
              Missions on New England Mountains are provided by the reserve warden Trevor Locke. Also Colton Locke makes a voice cameo in the campaign. Thus it's the 2nd map where two voices speak to the player (first was Mississippi Acres).
            </p>

            <p className="mt-2">
              The reserve has 7 main missions and at least 10 additional ones (some quests must be found on boards near outposts). All hunting quests are additional. Notice board #2 is found on the Red Leaves outpost in Champney Ridge.
            </p>

            <div className="mt-4 overflow-x-auto">
              <h4 id="newengland-main" className="font-semibold mb-2">Main Missions</h4>
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-green-100 text-left">
                    <th className="px-3 py-6 border-b border-gray-300">Mission</th>
                    <th className="px-3 py-6 border-b border-gray-300">Description</th>
                    <th className="px-3 py-6 border-b border-gray-300">Objective</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Off the beaten path</td>
                    <td className="px-3 py-6 border-b border-gray-300">Welcome! I'm Trevor Locke, Head Warden of the New England Mountains reserve. Let's get you settled in first: you can see the location of the nearest outpost on your Huntermate. Outposts are useful to take some rest and get ready, so hunters or hikers are doing themselves a favor if they know where to find them, regardless of their experience level.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Pick up the backpack</li>
                        <li>Open the Outpost</li>
                        <li>Interact with the Notice Board</li>
                        <li>Visit the Nearby Lookout Tower</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Top-secret mission</td>
                    <td className="px-3 py-6 border-b border-gray-300">Outposts and lookouts are the 2 pillars of any successful outdoor adventure if you ask me. Now that you've located one of each, I'd say you're ready to explore our reserve. I could use your help picking up some maple syrup — that's your top-secret mission.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Reach Trevor's Maple Syrup Spot</li>
                        <li>Collect 2 Buckets of Maple Syrup</li>
                        <li>Drop off the Maple Syrup at the Outpost</li>
                        <li>Take a Picture of Wood Devil</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Same old same old</td>
                    <td className="px-3 py-6 border-b border-gray-300">It's me, DOC. Long time no see, old friend... I'm paying my son TREV a visit. In the meantime, how about you check out my favorite spots in Trev's reserve? I sent a few old family photos in the mail the other day, they should be at this outpost.</td>
                    <td className="px-3 py-6 border-b border-gray-300">Collect Doc's Photos from the Outpost</td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">A thousand words</td>
                    <td className="px-3 py-6 border-b border-gray-300">I need an experienced tracker for this one: I need you to take a photo of a carcass left behind by a Red Fox. Check your Huntermate — I've tagged a Red Fox feed zone I know.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Find a Red Fox Feed Zone</li>
                        <li>Photograph a Carcass at the Feed Zone</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Second home</td>
                    <td className="px-3 py-6 border-b border-gray-300">We have a situation in the lowlands: farmers have spotted bears roaming near their farms. Based on experience this is often from hikers not picking up after themselves. Could you collect the trash? Watch out for bears.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Go to the Location of the First Bear Sighting</li>
                        <li>Pick Up the Trash</li>
                        <li>Go to the Location of the Second Bear Sighting</li>
                        <li>Pick Up the Trash</li>
                        <li>Handle the Bear Situation</li>
                        <li>Drop off the Trash at a Nearby Outpost</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Make a difference</td>
                    <td className="px-3 py-6 border-b border-gray-300">Our next threat is an invasive bush species known as perennial pepperweed. We've launched an initiative to pull them out before they spread.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Go to the First Site affected by the Invasive Species</li>
                        <li>Remove the Invasive Species at the First Site</li>
                        <li>Go to the Second Site affected by the Invasive Species</li>
                        <li>Remove the Invasive Species at the Second Site</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Cats and cradles</td>
                    <td className="px-3 py-6 border-b border-gray-300">As a thank-you for your help, we decided we wanted you to see a location that means a lot to our family. It's a campsite located in a remote area in the northeast.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Follow the Waypoint</li>
                        <li>Put the Campfire Together</li>
                        <li>Light the Campfire</li>
                        <li>Follow the Waypoint</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6">
              <h4 id="newengland-side" className="font-semibold mb-2">Side Missions</h4>

              <div className="space-y-6">
                <div>
                  <h5 id="newengland-failure" className="font-medium">Don't Fear Failure</h5>
                  <div className="mt-2 overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-green-100 text-left">
                          <th className="px-3 py-6 border-b border-gray-300">Mission</th>
                          <th className="px-3 py-6 border-b border-gray-300">Description</th>
                          <th className="px-3 py-6 border-b border-gray-300">Objective</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Don't Fear Failure</td>
                          <td className="px-3 py-6 border-b border-gray-300">Only those who dare to fail greatly can ever achieve greatly. I've prepared some target practice locations for you.</td>
                          <td className="px-3 py-6 border-b border-gray-300">
                            <ul className="list-disc list-inside">
                              <li>Travel to the Target Practice Location</li>
                              <li>Stand in the Circle and Shoot the First Target</li>
                              <li>Stand in the Circle and Shoot the Second Target</li>
                              <li>Stand in the Circle and Shoot the Third Target</li>
                              <li>Stand in the Circle and Shoot the Fourth Target</li>
                              <li>Stand in the Circle and Shoot the Fifth Target</li>
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h5 id="newengland-culling" className="font-medium">Responsible Culling</h5>
                  <div className="mt-2 overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-green-100 text-left">
                          <th className="px-3 py-6 border-b border-gray-300">Mission</th>
                          <th className="px-3 py-6 border-b border-gray-300">Description</th>
                          <th className="px-3 py-6 border-b border-gray-300">Objective</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Responsible Culling</td>
                          <td className="px-3 py-6 border-b border-gray-300">We've been having some trouble with Coyotes lately. Their populations have grown faster than other species, so we ask hunters to each hunt 4 animals.</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest 4 Coyotes</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h5 id="newengland-symbol" className="font-medium">State Symbol</h5>
                  <div className="mt-2 overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-green-100 text-left">
                          <th className="px-3 py-6 border-b border-gray-300">Mission</th>
                          <th className="px-3 py-6 border-b border-gray-300">Description</th>
                          <th className="px-3 py-6 border-b border-gray-300">Objective</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">State Symbol</td>
                          <td className="px-3 py-6 border-b border-gray-300">The Whitetail deer is one of our local state symbols; show me your skills.</td>
                          <td className="px-3 py-6 border-b border-gray-300">
                            <ul className="list-disc list-inside">
                              <li>Spot 4 Whitetail Deer</li>
                              <li>Harvest a Whitetail Deer and Earn Silver or Better</li>
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h5 id="newengland-album" className="font-medium">Family Album</h5>
                  <div className="mt-2 overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-green-100 text-left">
                          <th className="px-3 py-6 border-b border-gray-300">Mission</th>
                          <th className="px-3 py-6 border-b border-gray-300">Description</th>
                          <th className="px-3 py-6 border-b border-gray-300">Objective</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Family Album</td>
                          <td className="px-3 py-6 border-b border-gray-300">Doc here. There are 4 locations I want to share with you, but I don't know their exact location. Use the photos you picked up to find them.</td>
                          <td className="px-3 py-6 border-b border-gray-300">
                            <ul className="list-disc list-inside">
                              <li>Find where the "Railroad bridge" photo was taken</li>
                              <li>Find where the "Laperrière Bridge" photo was taken</li>
                              <li>Find where the "Lake and mountain" photo was taken</li>
                              <li>Find where the "Fishing Pier" photo was taken</li>
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h5 id="newengland-olden" className="font-medium">The Olden Days</h5>
                  <div className="mt-2 overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-green-100 text-left">
                          <th className="px-3 py-6 border-b border-gray-300">Mission</th>
                          <th className="px-3 py-6 border-b border-gray-300">Description</th>
                          <th className="px-3 py-6 border-b border-gray-300">Objective</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">The Olden Days</td>
                          <td className="px-3 py-6 border-b border-gray-300">Try muzzle loaders and bows as a nod to historic hunting techniques.</td>
                          <td className="px-3 py-6 border-b border-gray-300">
                            <ul className="list-disc list-inside">
                              <li>Harvest a Turkey downed with a Bow</li>
                              <li>Harvest a Moose downed with a Muzzle Loader</li>
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h5 id="newengland-shooting" className="font-medium">Shooting Competition</h5>
                  <div className="mt-2 overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-green-100 text-left">
                          <th className="px-3 py-6 border-b border-gray-300">Mission</th>
                          <th className="px-3 py-6 border-b border-gray-300">Description</th>
                          <th className="px-3 py-6 border-b border-gray-300">Objective</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Shooting Competition</td>
                          <td className="px-3 py-6 border-b border-gray-300">Challenge tests for the International Hunting Competition at New England Mountains.</td>
                          <td className="px-3 py-6 border-b border-gray-300">
                            <ul className="list-disc list-inside">
                              <li>Harvest wildlife down from at least 150.00 m with Iron Sight</li>
                              <li>Harvest wildlife down from at least 150.00 m with Heart Shot</li>
                              <li>Harvest wildlife down from at least 50.00 m with Bow to the Heart</li>
                              <li>Harvest wildlife down from at least 100.00 m with Bow</li>
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h5 id="newengland-trophy" className="font-medium">Trophy Competition</h5>
                  <div className="mt-2 overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-green-100 text-left">
                          <th className="px-3 py-6 border-b border-gray-300">Mission</th>
                          <th className="px-3 py-6 border-b border-gray-300">Description</th>
                          <th className="px-3 py-6 border-b border-gray-300">Objective</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Trophy Competition</td>
                          <td className="px-3 py-6 border-b border-gray-300">Competition centered on trophy quality; Gold or better required.</td>
                          <td className="px-3 py-6 border-b border-gray-300">
                            <ul className="list-disc list-inside">
                              <li>Harvest an Eastern Cottontail Rabbit and Earn Gold or Better</li>
                              <li>Harvest an Eastern Wild Turkey and Earn Gold or Better</li>
                              <li>Harvest a Green Wing Teal and Earn Gold or Better</li>
                              <li>Harvest a Golden Eye and Earn Gold or Better</li>
                              <li>Harvest a Mallard and Earn Gold or Better</li>
                              <li>Harvest a Northern Bobwhite Quail and Earn Gold or Better</li>
                              <li>Harvest a Ring Necked Pheasant and Earn Gold or Better</li>
                              <li>Harvest a Common Raccoon and Earn Gold or Better</li>
                              <li>Harvest a Coyote and Earn Gold or Better</li>
                              <li>Harvest a Gray Fox and Earn Gold or Better</li>
                              <li>Harvest a Red Fox and Earn Gold or Better</li>
                              <li>Harvest a Bobcat and Earn Gold or Better</li>
                              <li>Harvest a Whitetail Deer and Earn Gold or Better</li>
                              <li>Harvest a Black Bear and Earn Gold or Better</li>
                              <li>Harvest a Moose and Earn Gold or Better</li>
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h5 id="newengland-sneak" className="font-medium">Sneak Competition</h5>
                  <div className="mt-2 overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-green-100 text-left">
                          <th className="px-3 py-6 border-b border-gray-300">Mission</th>
                          <th className="px-3 py-6 border-b border-gray-300">Description</th>
                          <th className="px-3 py-6 border-b border-gray-300">Objective</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Sneak Competition</td>
                          <td className="px-3 py-6 border-b border-gray-300">Show how stealthy you can be by harvesting within 30 meters.</td>
                          <td className="px-3 py-6 border-b border-gray-300">
                            <ul className="list-disc list-inside">
                              <li>Harvest Wildlife downed from max 30 m with any Shotgun</li>
                              <li>Harvest Wildlife downed from max 30 m with any Bow to the Heart</li>
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h5 id="newengland-landmarks" className="font-medium">New England Landmarks</h5>
                  <div className="mt-2 overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-green-100 text-left">
                          <th className="px-3 py-6 border-b border-gray-300">Mission</th>
                          <th className="px-3 py-6 border-b border-gray-300">Description</th>
                          <th className="px-3 py-6 border-b border-gray-300">Objective</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">New England Landmarks</td>
                          <td className="px-3 py-6 border-b border-gray-300">Our local landmarks are worth the detour; visit them to learn tidbits about local history and attractions.</td>
                          <td className="px-3 py-6 border-b border-gray-300">
                            <ul className="list-disc list-inside">
                              <li>Visit Laperrière Bridge</li>
                              <li>Visit the ruins of Barmare Mansion</li>
                              <li>Visit the Smith Scenic Railroad</li>
                              <li>Visit Tocqueville Cave</li>
                              <li>Visit the Padavona Corn Maze</li>
                              <li>Visit The Old Toad</li>
                              <li>Visit Mafrousse Mines</li>
                              <li>Visit the Gilman Pumpkin Fields</li>
                              <li>Visit the Conway Pond Trail</li>
                              <li>Visit Favreau Boulder</li>
                              <li>Visit Mount Alcott Observatory</li>
                              <li>Repair the Bench at Mount Alcott Observatory</li>
                              <li>Collect the Trash inside Tocqueville Cave</li>
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h5 id="newengland-notice1" className="font-medium">Notice Board #1</h5>
                  <div className="mt-2 overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-green-100 text-left">
                          <th className="px-3 py-6 border-b border-gray-300">Mission</th>
                          <th className="px-3 py-6 border-b border-gray-300">Description</th>
                          <th className="px-3 py-6 border-b border-gray-300">Objective</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Notice Board #1</td>
                          <td className="px-3 py-6 border-b border-gray-300">You've found our Notice board #1, good. It offers a variety of assignments that will benefit the reserve.</td>
                          <td className="px-3 py-6 border-b border-gray-300">
                            <ul className="list-disc list-inside">
                              <li>Collect trash at Location</li>
                              <li>Harvest 4 Mallards</li>
                              <li>Harvest 4 Whitetail Deer Male weighing max 80.00 kg</li>
                              <li>Go to Location and Take 5 Bark Sample</li>
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h5 id="newengland-notice2" className="font-medium">Notice Board #2</h5>
                  <div className="mt-2 overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-green-100 text-left">
                          <th className="px-3 py-6 border-b border-gray-300">Mission</th>
                          <th className="px-3 py-6 border-b border-gray-300">Description</th>
                          <th className="px-3 py-6 border-b border-gray-300">Objective</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Notice Board #2</td>
                          <td className="px-3 py-6 border-b border-gray-300">Our Notice board #2 lists several assignments for which we always need help from volunteers. It is found on the Red Leaves outpost in Champney Ridge.</td>
                          <td className="px-3 py-6 border-b border-gray-300">
                            <ul className="list-disc list-inside">
                              <li>Spot 10 Female Moose</li>
                              <li>Spot 2 Black Bear with Cinnamon Fur Variation</li>
                              <li>Spot 10 Common Raccoon with Blond Fur Variation</li>
                              <li>Take Water Sample at the First Site</li>
                              <li>Take Water Sample at the Second Site</li>
                              <li>Take Water Sample at the Third Site</li>
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {selected === 'emerald-coast' && (
          <div className="mt-4 bg-gray-50 rounded p-3 text-gray-800">
            <TableOfContents 
              mainMissionsId="emerald-main"
              sideMissionsId="emerald-side"
              sideMissions={[
                { id: 'emerald-soph', label: 'Sophia "Soph" Nilsson Missions' },
                { id: 'emerald-robbo', label: 'Robert "Robbo" Raines Missions' },
              ]}
            />
            <h3 className="font-semibold mb-2">Emerald Coast — Missions</h3>
            <p>
              Missions on Emerald Coast are provided by the reserve wardens Robert "Robbo" Raines and Sophia "Soph" Nilsson. The reserve has 9 main missions and 12 side missions.
            </p>

            <div className="mt-4 overflow-x-auto">
              <h4 id="emerald-main" className="font-semibold mb-2">Story Missions</h4>
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-green-100 text-left">
                    <th className="px-3 py-6 border-b border-gray-300">Mission</th>
                    <th className="px-3 py-6 border-b border-gray-300">Description</th>
                    <th className="px-3 py-6 border-b border-gray-300">Objective</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Neighbours</td>
                    <td className="px-3 py-6 border-b border-gray-300">Welcome to the Emerald Coast, mate! I'm Sophia - just call me Soph. You're currently on my property, not far from my station. For starters, I reckon you should get your bearings: there's a fire lookout tower nearby. Once you've located my station, open the cabin I've prepared for you to use during your stay. My husband Eric and I started building these a few years ago for hunters and travellers. I'm with a hunting group at the moment, so I can't meet you there — make yourself at home!</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Visit the Fire Lookout Tower</li>
                        <li>Visit the Outpost (Soph's Farm)</li>
                        <li>Enter Your Cabin</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Kangaroo Crossing</td>
                    <td className="px-3 py-6 border-b border-gray-300">Population management starts with kangaroos. They can overgraze and threaten other fauna and flora. Soph asked you to pick up a present and head to an overgrazed area to start the work.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Pick up Soph's Present for Robbo</li>
                        <li>Go to the Overgrazed Area</li>
                        <li>(Optional) Go to a Fire Lookout Tower</li>
                        <li>Spot a Kangaroo</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Introduced Species</td>
                    <td className="px-3 py-6 border-b border-gray-300">Australia has many invasive pests. A varmint rifle is available near a practice area for ethically culling pests and testing your skill before assignments.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Go to the Area affected by Pests</li>
                        <li>Pick up the Varmint Rifle</li>
                        <li>Hit the Soda Can (using Varmint rifle)</li>
                        <li>Hit the Practice Target (using Varmint rifle)</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">By a Billabong</td>
                    <td className="px-3 py-6 border-b border-gray-300">A cultural detour: visit a billabong and learn about the folk song "Waltzing Matilda" — points of local history and a few nice waypoints are marked on your Huntermate.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Reach the first Waypoint</li>
                        <li>Reach the second Waypoint</li>
                        <li>Reach the last Waypoint</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">The Beauty Of Nature</td>
                    <td className="px-3 py-6 border-b border-gray-300">Contribute to protecting nature by cleaning up rubbish at a polluted site; Robbo will pick you up when done.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Clean up the Rubbish</li>
                        <li>Wait for Robbo to Pick you up</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Sanctuary</td>
                    <td className="px-3 py-6 border-b border-gray-300">At Opal Point Sanctuary you can photograph animals to help the sanctuary's outreach — Robbo and Lizzie asked for updated photos and food for the salties.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Photograph the Deer at the Sanctuary</li>
                        <li>Photograph the Crocodiles at the Sanctuary</li>
                        <li>Photograph the Kangaroos at the Sanctuary</li>
                        <li>Leave Soph's Present by the Deer Pen</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Report All Sightings</td>
                    <td className="px-3 py-6 border-b border-gray-300">After confirming a Sambar sighting, document and report it to authorities using an outpost computer so Robbo can follow up.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Pick up Robbo's Present for Soph</li>
                        <li>Go to the Area of the Sambar sighting</li>
                        <li>Spot a Sambar or Confirm Sambar Tracks</li>
                        <li>Report the Sighting to the Authorities</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">In Saltie Territory</td>
                    <td className="px-3 py-6 border-b border-gray-300">Investigate a reported territorial saltwater crocodile ("Stevie"). Read the article and check the areas for tracks and evidence.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Read the Newspaper Article about the Crocodile</li>
                        <li>Go to the first area mentioned in the Article</li>
                        <li>Find Tracks of a Crocodile around the first area</li>
                        <li>Go to the second area mentioned in the Article</li>
                        <li>Find Tracks of a Crocodile around the second area</li>
                      </ul>
                    </td>
                  </tr>

                  <tr className="odd:bg-white even:bg-gray-50">
                    <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Well Played</td>
                    <td className="px-3 py-6 border-b border-gray-300">A small favour: drop Robbo's friendship present for Soph at the bar or a bench when you visit the station to complete the circle of assistance between neighbours.</td>
                    <td className="px-3 py-6 border-b border-gray-300">
                      <ul className="list-disc list-inside">
                        <li>Reach Soph's Farm</li>
                        <li>Drop off Robbo's Present for Soph</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6">
              <h4 id="emerald-side" className="font-semibold mb-2">Side Missions</h4>

              <div className="space-y-6">
                <div>
                  <h5 id="emerald-soph" className="font-medium">Sophia "Soph" Nilsson Missions</h5>
                  <div className="mt-2 overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-green-100 text-left">
                          <th className="px-3 py-6 border-b border-gray-300">Mission</th>
                          <th className="px-3 py-6 border-b border-gray-300">Description</th>
                          <th className="px-3 py-6 border-b border-gray-300">Objective</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Feral Banteng Herds</td>
                          <td className="px-3 py-6 border-b border-gray-300">There have been herds of feral Bantengs near the coast; learn tracking, photography and hunting for management.</td>
                          <td className="px-3 py-6 border-b border-gray-300">
                            <ul className="list-disc list-inside">
                              <li>Find 5 Banteng Droppings</li>
                              <li>Take a Picture of a Banteng with Mocha Fur Variation within 50.00 m</li>
                              <li>Harvest a Male Banteng weighing at least 700.00 kg</li>
                              <li>Harvest a Silver or Better Banteng with a Heart Shot from within 25.00 m</li>
                              <li>Take a Picture of a Banteng with Melanistic Fur Variation from within 50.00 m</li>
                            </ul>
                          </td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Kangaroo Management</td>
                          <td className="px-3 py-6 border-b border-gray-300">Suggestions for various kangaroo management tasks, ranging from close shots to long-range and variation-specific objectives.</td>
                          <td className="px-3 py-6 border-b border-gray-300">
                            <ul className="list-disc list-inside">
                              <li>Harvest a Kangaroo shot from within 25.00 m with any Weapon</li>
                              <li>Harvest a Kangaroo with a Heart Shot</li>
                              <li>Harvest a Kangaroo shot from at least 200.00 m</li>
                              <li>Harvest a Kangaroo Gold or Better shot with a Handgun</li>
                              <li>Harvest a Kangaroo with Grey Fur Variation</li>
                              <li>Harvest a Kangaroo shot without a Scope from 125.00 m</li>
                              <li>Harvest a Kangaroo with Brown Fur Variation</li>
                              <li>Harvest a Kangaroo with Leucistic Fur Variation</li>
                            </ul>
                          </td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Going For Gold</td>
                          <td className="px-3 py-6 border-b border-gray-300">A challenging 'going for gold' list across many species; a true test of skill and dedication.</td>
                          <td className="px-3 py-6 border-b border-gray-300">
                            <ul className="list-disc list-inside">
                              <li>Harvest a Magpie Goose and Earn Gold or Better</li>
                              <li>Harvest a Stubble Quail and Earn Gold or Better</li>
                              <li>Harvest a Red Fox and Earn Gold or Better</li>
                              <li>Harvest an Axis Deer and Earn Gold or Better</li>
                              <li>Harvest a Feral Goat and Earn Gold or Better</li>
                              <li>Harvest a Feral Pig and Earn Gold or Better</li>
                              <li>Harvest a Sambar Deer and Earn Gold or Better</li>
                              <li>Harvest a Hog Deer and Earn Gold or Better</li>
                              <li>Harvest a Javan Rusa and Earn Gold or Better</li>
                              <li>Harvest a Banteng and Earn Gold or Better</li>
                              <li>Harvest an Eastern Gray Kangaroo and Earn Gold or Better</li>
                              <li>Harvest a Fallow Deer and Earn Gold or Better</li>
                              <li>Harvest a Red Deer and Earn Gold or Better</li>
                            </ul>
                          </td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Shooting Challenges</td>
                          <td className="px-3 py-6 border-b border-gray-300">Target practice and shooting challenges to refine skills at a local target location.</td>
                          <td className="px-3 py-6 border-b border-gray-300">
                            <ul className="list-disc list-inside">
                              <li>Travel to the Target Location</li>
                              <li>Stand in the Circle and Shoot the First Target</li>
                              <li>Stand in the Circle and Shoot the Second Target</li>
                              <li>Stand in the Circle and Shoot the Third Target</li>
                              <li>Stand in the Circle and Shoot the Fourth Target</li>
                              <li>Stand in the Circle and Shoot the Fifth Target</li>
                            </ul>
                          </td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">The Feral Problem</td>
                          <td className="px-3 py-6 border-b border-gray-300">Major culling tasks for destructive feral goats and pigs with required permits already handled.</td>
                          <td className="px-3 py-6 border-b border-gray-300">
                            <ul className="list-disc list-inside">
                              <li>Harvest 10 Feral Goats</li>
                              <li>Harvest 10 Feral Pigs at Night (19 - 05)</li>
                            </ul>
                          </td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Invasive Deer Plague</td>
                          <td className="px-3 py-6 border-b border-gray-300">Control program for three large invasive deer species (Sambar, Rusa, Red Deer).</td>
                          <td className="px-3 py-6 border-b border-gray-300">Harvest a Total of 150 of either Sambar, Red or Rusa</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h5 id="emerald-robbo" className="font-medium">Robert "Robbo" Raines Missions</h5>
                  <div className="mt-2 overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-green-100 text-left">
                          <th className="px-3 py-6 border-b border-gray-300">Mission</th>
                          <th className="px-3 py-6 border-b border-gray-300">Description</th>
                          <th className="px-3 py-6 border-b border-gray-300">Objective</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Stubble Quail</td>
                          <td className="px-3 py-6 border-b border-gray-300">Stubble Quails are ubiquitous; observe, photograph and learn to hunt them.</td>
                          <td className="px-3 py-6 border-b border-gray-300">
                            <ul className="list-disc list-inside">
                              <li>Take a Picture of a Stubble Quail from within 45.00 m</li>
                              <li>Harvest a Stubble Quail Shot from 50.00 m</li>
                            </ul>
                          </td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Emerald Coast Landmarks</td>
                          <td className="px-3 py-6 border-b border-gray-300">Discover local landmarks around the reserve — Robbo is proud of the sanctuary and local features.</td>
                          <td className="px-3 py-6 border-b border-gray-300">
                            <ul className="list-disc list-inside">
                              <li>Visit the Granite Boulders</li>
                              <li>Visit the Tea Fields</li>
                              <li>Visit Stonefather Mountain</li>
                              <li>Visit Mount Matron</li>
                              <li>Visit Battered Peak</li>
                              <li>Visit The Triplets</li>
                              <li>Visit the Ocean Cave</li>
                              <li>Visit the Lake Cave</li>
                            </ul>
                          </td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Living Fossil</td>
                          <td className="px-3 py-6 border-b border-gray-300">Document and harvest Magpie Goose; a mix of tracking, photography and hunting objectives.</td>
                          <td className="px-3 py-6 border-b border-gray-300">
                            <ul className="list-disc list-inside">
                              <li>Take a Picture of a Magpie Goose from within 50.00 m</li>
                              <li>Find 5 Magpie Goose Droppings</li>
                              <li>Harvest a Magpie Goose with Piebald Fur Variation</li>
                            </ul>
                          </td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">War On Pests</td>
                          <td className="px-3 py-6 border-b border-gray-300">Major pest control assignments across several species; these are part of a national campaign.</td>
                          <td className="px-3 py-6 border-b border-gray-300">
                            <ul className="list-disc list-inside">
                              <li>Harvest 10 Red Foxes with any Shotgun</li>
                              <li>Harvest 10 Axis Deer with any Rifle</li>
                              <li>Harvest 10 Fallow Deer with any Handgun</li>
                              <li>Harvest 10 Hog Deer with any Bow</li>
                            </ul>
                          </td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Step By Step</td>
                          <td className="px-3 py-6 border-b border-gray-300">Collect food for the sanctuary's salties by harvesting feral pigs/goats and using the feeding station.</td>
                          <td className="px-3 py-6 border-b border-gray-300">
                            <ul className="list-disc list-inside">
                              <li>Harvest 3 Feral Pigs or Goats and Earn Bronze or Lower</li>
                              <li>Use the Feeding Station at Robbo's Sanctuary</li>
                            </ul>
                          </td>
                        </tr>

                        <tr className="odd:bg-white even:bg-gray-50">
                          <td className="px-3 py-6 border-b border-gray-300 font-medium align-top">Crocodile Hunter</td>
                          <td className="px-3 py-6 border-b border-gray-300">Robbo's specialty: a saltie hunt requiring caution and expertise. Not for everyone.</td>
                          <td className="px-3 py-6 border-b border-gray-300">
                            <ul className="list-disc list-inside">
                              <li>Harvest a Crocodile from within 25.00 m</li>
                              <li>Harvest a Crocodile via Neck/Heart/Brain Shot</li>
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}





