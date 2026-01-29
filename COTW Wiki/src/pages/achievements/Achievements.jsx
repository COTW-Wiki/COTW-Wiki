import React, { useState } from 'react';
import DocImage from '../../assets/Doc.webp';
import LockedImage from '../../assets/Achievements_locked.webp';
import UnlockedImage from '../../assets/Achievements_unlocked.webp';

export default function AchievementsPage() {
  const [isTocOpen, setIsTocOpen] = useState(true);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // --- DATA TABLES ---

  const travelingData = [
    { achievement: "The Mile", task: "Travel a distance of 1 mile (1.609 kilometers) on foot" },
    { achievement: "The Scandinavian Mile", task: "Travel a distance of 6.2 miles (10 kilometers) on foot" },
    { achievement: "The Marathon", task: "Travel a distance of 26.2 miles (42.195 kilometers) on foot" },
    { achievement: "The Ultramarathon", task: "Travel a distance of 100 miles (160.934 kilometers) on foot" },
    { achievement: "Globetrotter", task: "Visit all regions in Hirschfelden Hunting Reserve and Layton Lake District" },
    { achievement: "Trailrunner", task: "Visit all regions in Medved-Taiga National Park" },
  ];

  const ratingData = [
    { achievement: "It's something", task: "Earn a bronze rating on a harvested animal" },
    { achievement: "Silver Lining", task: "Earn a silver rating on a harvested animal" },
    { achievement: "Goldmember", task: "Earn a gold rating on a harvested animal" },
    { achievement: "Diamonds are forever", task: "Earn a diamond rating on a harvested animal" },
  ];

  const collectionData = [
    { achievement: "Blacktail Stalker", task: "Harvest 50 blacktail deer" },
    { achievement: "Whitetail Hunter", task: "Harvest 50 whitetail deer" },
    { achievement: "Bear Bug", task: "Harvest 50 black bears" },
    { achievement: "Children Of The Night", task: "Harvest 50 musk deers" },
    { achievement: "Elk Enthusiast", task: "Harvest 50 roosevelt elk" },
    { achievement: "Bear Minimum", task: "Harvest 50 brown bears" },
    { achievement: "The Bigger They Come...", task: "Harvest 50 bisons" },
    { achievement: "Roe Warrior", task: "Harvest 50 roe deer" },
    { achievement: "Fallow Fanatic", task: "Harvest 50 fallow deer" },
    { achievement: "Rudolf's Bane", task: "Harvest 50 reindeer" },
    { achievement: "Deer Devil", task: "Harvest 50 red deer" },
    { achievement: "Coyote Calling", task: "Harvest 50 coyotes" },
    { achievement: "Hello Lynxy", task: "Harvest 50 lynxes" },
    { achievement: "Fox Fever", task: "Harvest 50 red foxes" },
    { achievement: "Brinding Home The Bacon", task: "Harvest 50 wild boars" },
    { achievement: "Long Live The King", task: "Harvest 50 moose" },
    { achievement: "Art Critic", task: "Find all of the cave paintings in Medved-Taiga National Park" },
    { achievement: "Detective", task: "Find all expedition notes in Medved-Taiga National Park" },
    { achievement: "Tourist", task: "Find all of the landmarks in Medved-Taiga National Park" },
    { achievement: "Trapper", task: "Find all of Grankin's traps in Medved-Taiga National Park" },
    { achievement: "Paleontology 101", task: "Find all artifacts in Medved-Taiga National Park" },
    { achievement: "Pilgrim", task: "Find all Nenet monuments in Medved-Taiga National Park" },
    { achievement: "Shed Hunter", task: "Collect all antler sheds in Medved-Taiga National Park" },
  ];

  const huntingData = [
    { achievement: "Novice Marksman", task: "Hit an animal from 50+ meters (55+ yards)" },
    { achievement: "Skilled Marksman", task: "Hit an animal from 100+ meters (110+ yards)" },
    { achievement: "Expert Marksman", task: "Hit an animal from 200+ meters (219+ yards)" },
    { achievement: "Legendary Marksman", task: "Hit an animal from 400+ meters (438+ yards)" },
    { achievement: "Hero Of Hirschfelden", task: "Harvest an animal in every subregion in Hirschfelden Hunting Reserve" },
    { achievement: "Lord Of The Lakes", task: "Harvest an animal in every subregion in Layton Lake District" },
    { achievement: "Tsar Of The Taiga", task: "Harvest an animal in every subregion in Medved-Taiga National Park" },
    { achievement: "This Is Not A Zombie Game", task: "Down 10 animals by hitting the brain" },
    { achievement: "Moby Deer", task: "Harvest an albino deer" },
    { achievement: "Jack Of All Trades", task: "Harvest different animals using each of the four weapon types" },
    { achievement: "Up Close And Personal", task: "Hit an animal while undetected within 15 meters (16 yards)" },
    { achievement: "The Old Fashioned Way", task: "Down an animal with an unscoped rifle" },
    { achievement: "Head, Shoulders, Knees, And Toes", task: "Down an animal from each stance" },
    { achievement: "Insomniac", task: "Down an animal at night" },
    { achievement: "Make It Count", task: "Down an animal with the last round of ammunition" },
    { achievement: "Nerves of Steel", task: "Down an animal while having an elevated heart rate" },
    { achievement: "Blind Shot", task: "Down an animal that is barely visible" },
    { achievement: "Leave No Animal Behind", task: "Harvest a wounded animal" },
    { achievement: "Peppe's Challenge", task: "Harvest 5 animals from the same herd with a single shot to the heart using a bow in Medved-Taiga National Park" },
    { achievement: "Cupid", task: "Harvest a bison with a single shot to the heart using a bow" },
    { achievement: "Side By Side", task: "Harvest two coyotes from the same pack with a shotgun" },
    { achievement: "Spirit Animal", task: "Harvest a spirit-colored brown bear with a handgun" },
    { achievement: "Old Fashioned", task: "Harvest a blacktail deer with a single shot from a rifle using only ironsights from a distance of more than 150 meters (164 yards)" },
    { achievement: "Death From Above", task: "Harvest a whitetail deer from a hunting structure using a bow" },
    { achievement: "Fox Watch", task: "Harvest a red fox from a surveyed lookout point." },
    { achievement: "Shotgun!", task: "Harvest a reindeer with a shotgun and a 100% quick kill bonus" },
    { achievement: "Boars Night Out", task: "Harvest a wild boar at night with a handgun" },
    { achievement: "Hunting The Hunter", task: "Harvest a lynx that is hunting or eating" },
    { achievement: "Let It Fly", task: "Harvest a lynx with a bow" },
    { achievement: "Camper", task: "Harvest an animal from a hunting structure in Medved-Taiga National Park" },
    { achievement: "One By One", task: "Harvest 5 reindeer from the same herd" },
    { achievement: "Coat Of Many Colors", task: "Harvest a blond, brown and cinnamon-colored black bear" },
    { achievement: "Deadeye", task: "Harvest a musk deer with a single shot from a rifle from a distance of more than 250 meters (274 yards)" },
    { achievement: "True Musk", task: "Harvest a musk deer with a heart shot" },
    { achievement: "Bear Hug", task: "Harvest a brown bear with a single shot from a distance of less than 25 meters (27 yards)" },
    { achievement: "Date Night", task: "Harvest a male and female roe deer from the same herds" },
    { achievement: "By The Book", task: "Harvest a moose with 100% quick kill bonus and 100% integrity bonus" },
    { achievement: "Scarecrow", task: "Scared 1000 animals" },
  ];

  const spottingData = [
    { achievement: "Seeing Is Believing", task: "Spot 10 animals" },
    { achievement: "Stalker", task: "Spot 100 animals" },
    { achievement: "Deer Spotting", task: "Spot 12 unique red deer from a distance of less than 25 m (27 yards)" },
    { achievement: "Bucket List", task: "Spot every trophy animal species in Hirschfelden Hunting Reserve and Layton Lake district" },
    { achievement: "Right There, Right There!", task: "Spot every trophy animal species in Medved-Taiga National Park" },
    { achievement: "Eavesdropping", task: "Identify a call from every animal species in Hirschfelden Hunting Reserve and Layton Lake District" },
    { achievement: "Deer Whisperer", task: "Identify a call from every trophy animal species in Medved-Taiga National Park" },
    { achievement: "Elk Talk", task: "Identify a mating call from a roosevelt elk from a distance of less than 25 meters (27 yards)" },
    { achievement: "Call Of The Wild", task: "Use all callers once" },
  ];

  const photographyData = [
    { achievement: "Wildlife Paparazzi", task: "Photograph every trophy animal species in Hirschfelden Hunting Reserve and Layton Lake District" },
    { achievement: "Shutterbug", task: "Photograph every trophy animal species in Medved-Taiga National Park" },
  ];

  const trackingData = [
    { achievement: "Stay On Target", task: "Find 50 Tracks from the same animal" },
    { achievement: "Persistence Is Futile", task: "Find 100 Tracks from the same animal" },
    { achievement: "Potty Humor", task: "Examine 100 droppings" },
    { achievement: "True Dedication", task: "Find a feeding track, drinking track and resting track made by a fallow deer" },
  ];

  const questsData = [
    { achievement: "Hirschfelden Arc", task: "Complete all missions in Hirschfelden Hunting Reserve" },
    { achievement: "Layton Lake District Arc", task: "Complete all missions in Layton Lake District" },
    { achievement: "Medved-Taiga National Park Arc", task: "Complete all missions in Medved-Taiga National Park" },
    { achievement: "Happy Halloween", task: "Complete the Halloween mission arcs in two different reserves/parks" },
    { achievement: "Trampfine Arc", task: "Complete Trampfine's mission arc" },
    { achievement: "Hope Arc", task: "Complete Hope's mission arc" },
    { achievement: "Jäger Arc", task: "Complete Jäger's mission arc" },
    { achievement: "Beatty Arc", task: "Complete Beatty's mission arc" },
    { achievement: "Connors Arc", task: "Complete Connor's mission arc" },
    { achievement: "Bhandari Arc", task: "Complete Bhandari's mission arc" },
    { achievement: "Fleischer Arc", task: "Complete Fleischer's mission arc" },
    { achievement: "Tressler Arc", task: "Complete Tressler's mission arc" },
    { achievement: "Sommer Arc", task: "Complete Sommer's mission arc" },
    { achievement: "Vualez Arc", task: "Complete Vualez's mission arc" },
    { achievement: "Dr. Svetlana Isakova Arc", task: "Complete Dr. Svetlana Isakova's mission arc" },
    { achievement: "Dr. Columbus Neidell Arc", task: "Complete Dr. Columbus Neidell mission arc" },
    { achievement: "Dr. Anatoly Barnyashev Arc", task: "Complete Dr. Anatoly Barnyashev mission arc" },
    { achievement: "Georgy Grankin Arc", task: "Complete Georgy Grankin's mission arc" },
    { achievement: "Dimitri", task: "Complete Dimitri's mission arc" },
    { achievement: "Katerina Khasavovna", task: "Complete Alena Khasavovna's mission arc" },
  ];

  // --- HELPER COMPONENT: Table ---
  const AchievementTable = ({ data }) => (
    <div className="border border-slate-700 rounded-sm overflow-hidden">
      <table className="w-full text-left border-collapse text-sm">
        <thead>
          <tr className="bg-[#131B29] text-white font-bold border-b border-slate-700">
            <th className="p-3 w-1/3 border-r border-slate-700">Achievement</th>
            <th className="p-3">Task</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="border-b border-slate-700/50 text-blue-100 hover:bg-slate-800/50">
              <td className="p-3 font-bold border-r border-slate-700">{row.achievement}</td>
              <td className="p-3 text-slate-300">{row.task}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="w-full min-h-screen font-sans text-slate-300 bg-slate-900">
      
      {/* HEADER */}
      <div className="w-full border-b border-slate-700 pb-4 mb-6 px-6 pt-6">
        <div className="flex justify-between items-start">
          <h1 className="text-4xl font-light text-white">Achievements</h1>
          <div className="flex items-center gap-4 text-xs font-bold text-blue-300">
             <div className="flex items-center gap-1 cursor-pointer hover:text-white">
             </div>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT (Single Column Layout now) */}
      <div className="w-full px-6 space-y-8">
           
           {/* Warning Box */}
           <div className="bg-[#2C2926] border border-[#ff8c00] p-1 flex gap-4 mb-6">
             <div className="w-[70px] h-[72px] shrink-0 bg-slate-700">
               {/* Placeholder for the character icon */}
               <img src={DocImage} alt="Character" className="w-full h-full object-cover" />
             </div>
             <div className="flex-1 py-1 pr-2 text-sm">
                <p className="italic text-white mb-1">"You know, I spotted some tracks earlier, close to where you're at right now."</p>
                <p className="font-bold text-white mb-4">This page is being worked on. Please assist in making this page. You can also help by providing useful information.</p>
                <p className="text-white text-xs">Outdated: Last update 6 January 2020</p>
             </div>
           </div>

           <p className="mb-8">
             <strong className="text-white">Achievements</strong> are trophies that can be unlocked by fulfilling predefined tasks. The game currently contains 110 different achievements.
           </p>

           <div className="mb-8">
              <table className="border-collapse border border-slate-700 bg-slate-800">
                 <thead>
                    <tr>
                       <th className="bg-slate-900 font-bold text-white text-center border-b border-slate-700" style={{ width: '182px', height: '36.9px' }} colSpan="2">Signs</th>
                    </tr>
                 </thead>
                 <tbody>
                    <tr>
                       <td className="text-center border-r border-slate-700 p-0 align-middle" style={{ width: '88px', height: '114.8px' }}>
                          <div className="flex flex-col items-center justify-center h-full">
                             <img src={LockedImage} alt="locked" style={{ width: '64px', height: '64px' }} className="mb-1" />
                             <span className="text-xs">locked</span>
                          </div>
                       </td>
                       <td className="text-center p-0 align-middle" style={{ width: '94px', height: '114.8px' }}>
                          <div className="flex flex-col items-center justify-center h-full">
                             <img src={UnlockedImage} alt="unlocked" style={{ width: '70px', height: '70px' }} className="mb-1" />
                             <span className="text-xs">unlocked</span>
                          </div>
                       </td>
                    </tr>
                 </tbody>
              </table>
           </div>

           {/* TABLE OF CONTENTS (Moved Inline) */}
           <div className="inline-block mb-12 min-w-[300px] bg-slate-800 border border-slate-700 rounded-sm p-0">
            <div className="flex justify-between items-center p-2 border-b border-slate-700 bg-slate-900">
               <div className="flex items-center gap-2 font-bold text-white text-sm">
                  <div className="flex flex-col gap-[2px]">
                     <div className="w-1 h-1 bg-white rounded-full"></div>
                     <div className="w-1 h-1 bg-white rounded-full"></div>
                     <div className="w-1 h-1 bg-white rounded-full"></div>
                  </div>
                  Contents
               </div>
               <button 
                 onClick={() => setIsTocOpen(!isTocOpen)}
                 className="text-blue-400 text-xs cursor-pointer hover:underline"
               >
                 [{isTocOpen ? 'hide' : 'show'}]
               </button>
            </div>
            {isTocOpen && (
              <ul className="p-4 space-y-2 text-sm text-blue-300 font-medium">
                <li><a href="#traveling" onClick={(e) => scrollToSection(e, 'traveling')} className="hover:text-white hover:underline flex gap-2"><span className="text-slate-500">1.</span> Traveling</a></li>
                <li><a href="#rating" onClick={(e) => scrollToSection(e, 'rating')} className="hover:text-white hover:underline flex gap-2"><span className="text-slate-500">2.</span> Rating</a></li>
                <li><a href="#collection" onClick={(e) => scrollToSection(e, 'collection')} className="hover:text-white hover:underline flex gap-2"><span className="text-slate-500">3.</span> Collection</a></li>
                <li><a href="#hunting" onClick={(e) => scrollToSection(e, 'hunting')} className="hover:text-white hover:underline flex gap-2"><span className="text-slate-500">4.</span> Hunting</a></li>
                <li><a href="#spotting" onClick={(e) => scrollToSection(e, 'spotting')} className="hover:text-white hover:underline flex gap-2"><span className="text-slate-500">5.</span> Spotting & Calls</a></li>
                <li><a href="#photography" onClick={(e) => scrollToSection(e, 'photography')} className="hover:text-white hover:underline flex gap-2"><span className="text-slate-500">6.</span> Photography</a></li>
                <li><a href="#tracking" onClick={(e) => scrollToSection(e, 'tracking')} className="hover:text-white hover:underline flex gap-2"><span className="text-slate-500">7.</span> Tracking</a></li>
                <li><a href="#quests" onClick={(e) => scrollToSection(e, 'quests')} className="hover:text-white hover:underline flex gap-2"><span className="text-slate-500">8.</span> Quests</a></li>
              </ul>
            )}
          </div>

           {/* --- SECTIONS --- */}
           
           <div id="traveling" className="scroll-mt-4 mb-12">
              <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">Traveling</h2>
              <hr className="border-slate-700 mb-4"/>
              <AchievementTable data={travelingData} />
           </div>

           <div id="rating" className="scroll-mt-4 mb-12">
              <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">Rating</h2>
              <hr className="border-slate-700 mb-4"/>
              <AchievementTable data={ratingData} />
           </div>

           <div id="collection" className="scroll-mt-4 mb-12">
              <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">Collection</h2>
              <hr className="border-slate-700 mb-4"/>
              <AchievementTable data={collectionData} />
           </div>

           <div id="hunting" className="scroll-mt-4 mb-12">
              <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">Hunting</h2>
              <hr className="border-slate-700 mb-4"/>
              <AchievementTable data={huntingData} />
           </div>

           <div id="spotting" className="scroll-mt-4 mb-12">
              <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">Spotting & Calls</h2>
              <hr className="border-slate-700 mb-4"/>
              <AchievementTable data={spottingData} />
           </div>

           <div id="photography" className="scroll-mt-4 mb-12">
              <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">Photography</h2>
              <hr className="border-slate-700 mb-4"/>
              <AchievementTable data={photographyData} />
           </div>

           <div id="tracking" className="scroll-mt-4 mb-12">
              <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">Tracking</h2>
              <hr className="border-slate-700 mb-4"/>
              <AchievementTable data={trackingData} />
           </div>

           <div id="quests" className="scroll-mt-4 mb-12">
              <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">Quests</h2>
              <hr className="border-slate-700 mb-4"/>
              <AchievementTable data={questsData} />
           </div>

      </div>
    </div>
  );
}