import React, { useState } from 'react';

const toId = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

export default function App() {
  const [isTocOpen, setIsTocOpen] = useState(true);

  // Full list of names from the TOC screenshots
  const tocItems = [
    "Description", "Live, Love, Log", "Royalty", "Hot Javelinas", "Fowl Play",
    "Lucky Crocodile", "Huddle Whitetail", "Fleeing Pheast", "Sleigh Sold Separately",
    "Pair of Predators", "Ghost of the Mountain", "The Three Ducketeers", "Rival Rabbits",
    "Huddle Fallow", "Not a Log", "Play Fighting", "Fox's Lunch", "Bye, Son",
    "Bear Necessities", "David v Goliath", "Foxy Foes", "Duck Out", "The Lookout",
    "Fangs Out", "Breadwinner", "Fleeing Pheasants", "Alpha Wolf", "Emergency Takeoff",
    "Moosic To My Ears", "Tactical Espionage", "Bison Bonanza", "Roo mble",
    "What in Tahr-Nation", "Friendly Competition", "Bear Hug", "Bunny Squad",
    "Flee State", "Two Turkey Types", "Fowl Feud", "Partners In Crime",
    "The Grand Slam", "Head First", "Grumpy Geese", "Landlubber Lineup",
    "Stag and Doe Party", "Side by Side", "Huddle Roe", "Collision",
    "Smooth Operator", "Gobble Gobble", "Tiger Takeout", "Note", "Trivia and Facts"
  ];

  // Detailed data for the mounts visible in screenshots
  const mountDetails = [
    {
      title: "Live, Love, Log",
      size: "[Small]",
      requirements: "2 North American Beaver (1 M, 1 F)",
      cost: "2600 $"
    },
    {
      title: "Royalty",
      size: "[Extra Extra Large]",
      requirements: "A Lion Couple (1 M, 1 F)",
      cost: "8450 $"
    },
    {
      title: "Hot Javelinas",
      size: "[Medium]",
      requirements: "2 Collared Peccary (Both Male)",
      cost: "5200 $"
    },
    {
      title: "Fowl Play",
      size: "[Small]",
      requirements: "1 Racoon Dog and 1 Willow Ptarmigan (Both Males)",
      cost: "1950 $"
    },
    {
      title: "Lucky Crocodile",
      size: "[Extra Large]",
      requirements: "1 Saltwater Crocodile and 1 Magpie Goose (Both Males)",
      cost: "3900 $"
    },
    {
      title: "Huddle Whitetail",
      size: "[Large]",
      requirements: "3 Whitetail Deer (All males)",
      cost: "5850 $"
    },
    {
      title: "Fleeing Pheast",
      size: "[Extra Small]",
      requirements: "2 Ring-Necked Pheasants (Both Male)",
      cost: "1950 $"
    },
    {
      title: "Sleigh Sold Separately",
      size: "[Extra Large]",
      requirements: "3 Mountain Reindeer (All Male)",
      cost: "7800 $"
    },
    {
      title: "Pair of Predators",
      size: "[Medium]",
      requirements: "1 Coyote and Mexican Bobcat (Both Males)",
      cost: "2925 $"
    },
    {
      title: "Ghost of the Mountain",
      size: "[Large]",
      requirements: "1 Snow Leopard and 1 Blue Sheep (Both Male)",
      cost: "4550 $"
    },
    {
      title: "The Three Ducketeers",
      size: "[Small]",
      requirements: "1 Eurasian Widgeon, 1 Gadwall, 1 Ferruginous Duck (All Males)",
      cost: "1950 $"
    },
    {
      title: "Rival Rabbits",
      size: "[Extra Small]",
      requirements: "2 Antelope Jackrabbits (Both Male)",
      cost: "1300 $"
    },
    {
      title: "Huddle Fallow",
      size: "[Large]",
      requirements: "3 Fallow Deer (All male)",
      cost: "5850 $"
    },
    {
      title: "Not a Log",
      size: "[Large]",
      requirements: "1 American Alligator and 1 Common Raccoon (Both Males)",
      cost: "4225 $"
    },
    {
      title: "Play Fighting",
      size: "[Medium]",
      requirements: "2 Eurasian Lynx (1 F, 1 M)",
      cost: "3900 $"
    },
    {
      title: "Fox's Lunch",
      size: "[Small]",
      requirements: "1 Red Fox and 1 White-Tailed Jackrabbit (Both Male)",
      cost: "1625 $"
    },
    {
      title: "Bye, Son",
      size: "[Extra Extra Large]",
      requirements: "1 Plains Bison Bull and 2 Grey Wolves (1 M, 1 F)",
      cost: "9425 $"
    },
    {
      title: "Bear Necessities",
      size: "[Extra Large]",
      requirements: "2 Black Bear (Both Male)",
      cost: "6500 $"
    },
    {
      title: "David v Goliath",
      size: "[Extra Large]",
      requirements: "1 European Bison and 1 Canada Goose (Both Male)",
      cost: "4875 $"
    },
    {
      title: "Foxy Foes",
      size: "[Medium]",
      requirements: "1 Gray Fox and 1 Red Fox (Both Male)",
      cost: "2600 $"
    },
    {
      title: "Duck Out",
      size: "[Small]",
      requirements: "1 Eurasian Teal, 1 Eurasian Widgeon, 1 Ferruginous Duck, 1 Gadwall, 1 Goldeneye, 1 Mallard, 1 Tufted Duck (All male)",
      cost: "5850 $"
    },
    {
      title: "The Lookout",
      size: "[Medium]",
      requirements: "2 Lesser Kudu (1 M, 1 F)",
      cost: "3900 $"
    },
    {
      title: "Fangs Out",
      size: "[Large]",
      requirements: "1 Iberian Mouflon + 3 Iberian Wolves (All Male)",
      cost: "9750 $"
    },
    {
      title: "Breadwinner",
      size: "[Extra Extra Large]",
      requirements: "Cape Buffalo (Male) and 3 Lions (1 M, 2 F)",
      cost: "16900 $"
    },
    {
      title: "Fleeing Pheasants",
      size: "[Extra Small]",
      requirements: "2 Ring-necked Pheasant (Both Male)",
      cost: "1300 $"
    },
    {
      title: "Alpha Wolf",
      size: "[Large]",
      requirements: "3 Grey Wolves (1 M, 2 F)",
      cost: "7800 $"
    },
    {
      title: "Emergency Takeoff",
      size: "[Medium]",
      requirements: "1 Male Coyote and 3 Mallards (2 M, 1 F)",
      cost: "2925 $"
    },
    {
      title: "Moosic To My Ears",
      size: "[Extra Large]",
      requirements: "1 Moose and 1 Bobwhite Quail (Both Male)",
      cost: "4225 $"
    },
    {
      title: "Tactical Espionage",
      size: "[Extra Extra Large]",
      requirements: "1 Puma/Mountain Lion and 1 Roosevelt Elk (Female Puma/Mountain Lion, Male Elk)",
      cost: "5850 $"
    },
    {
      title: "Bison Bonanza",
      size: "[Extra Extra Large]",
      requirements: "2 European Bison (Both Male)",
      cost: "8450 $"
    },
    {
      title: "Roo mble",
      size: "[Extra Large]",
      requirements: "2 Eastern Gray Kangaroo (Both Male)",
      cost: "3900 $"
    },
    {
      title: "What in Tahr-Nation",
      size: "[Large]",
      requirements: "3 Himalayan Tahr (1M, 2F)",
      cost: "6825 $"
    },
    {
      title: "Friendly Competition",
      size: "[Small]",
      requirements: "2 Coyotes and 1 White-Tailed Jackrabbit (all males)",
      cost: "2600 $"
    },
    {
      title: "Bear Hug",
      size: "[Extra Large]",
      requirements: "2 Grizzly Bears (2 M)",
      cost: "7150 $"
    },
    {
      title: "Bunny Squad",
      size: "[Small]",
      requirements: "4 White-Tailed Jackrabbits (2 M, 2 F)",
      cost: "2600 $"
    },
    {
      title: "Flee State",
      size: "[Extra Large]",
      requirements: "2 Red Deer (1 M, 1 F)",
      cost: "5200 $"
    },
    {
      title: "Two Turkey Types",
      size: "[Small]",
      requirements: "1 Rio Grande Turkey and 1 Merriam Turkey (Both Male)",
      cost: "1300 $"
    },
    {
      title: "Fowl Feud",
      size: "[Small]",
      requirements: "2 Black Grouse (Both Male)",
      cost: "1300 $"
    },
    {
      title: "Partners In Crime",
      size: "[Medium]",
      requirements: "2 Red Fox (Both Male)",
      cost: "2600 $"
    },
    {
      title: "The Grand Slam",
      size: "[Large]",
      requirements: "A male from each species of ibexes (Beceite, Gredos, Ronda, Southeastern)",
      cost: "7800 $"
    },
    {
      title: "Head First",
      size: "[Large]",
      requirements: "1 Beceite Ibex and 1 Gredos Buck",
      cost: "3900 $"
    },
    {
      title: "Grumpy Geese",
      size: "[Medium]",
      requirements: "2 Canada Goose (Both Male)",
      cost: "1300 $"
    },
    {
      title: "Landlubber Lineup",
      size: "[Small]",
      requirements: "1 Ring-necked Pheasant, 1 Black Grouse, 1 Greylag Goose, 1 Tundra Bean Goose (All Male)",
      cost: "2600 $"
    },
    {
      title: "Stag and Doe Party",
      size: "[Large]",
      requirements: "3 Mule Deer (1 M, 2 F)",
      cost: "7800 $"
    },
    {
      title: "Side by Side",
      size: "[Extra Extra Large]",
      requirements: "2 Whitetail Deer (Both Male)",
      cost: "3900 $"
    },
    {
      title: "Huddle Roe",
      size: "[Large]",
      requirements: "3 Roe Deer (All Male)",
      cost: "3900 $"
    },
    {
      title: "Collision",
      size: "[Large]",
      requirements: "1 Puma/Mountain Lion and 1 Black-Tail Deer (Both Male)",
      cost: "4225 $"
    },
    {
      title: "Smooth Operator",
      size: "[Small]",
      requirements: "3 Western Capercaillie (1 M, 2 F)",
      cost: "1950 $"
    },
    {
      title: "Gobble Gobble",
      size: "[Large]",
      requirements: "3 Turkey (2 M, 1 F)",
      cost: "1950 $"
    },
    {
      title: "Tiger Takeout",
      size: "[Extra Large]",
      requirements: "1 Barasingha and 1 Bengal Tiger (Both Male)",
      cost: "6825 $"
    }
  ];

  return (
    <div className="min-h-screen bg-stone-900 text-stone-100 p-6 md:p-12 font-sans tracking-tight">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <header className="flex flex-col md:flex-row md:items-center justify-between border-b border-stone-700 pb-4 mb-6">
          <h1 className="text-4xl md:text-5xl font-light mb-4 md:mb-0">
            Matmat's Multi Trophy Mounts
          </h1>

        </header>

        {/* Table of Contents Box - Vertical List */}
        <div className="mb-8">
            <div className="bg-stone-800 border border-stone-700 p-2 inline-block min-w-[200px]">
                <div className="flex justify-between items-center border-b border-stone-700 pb-1 mb-2">
                    <span className="font-bold text-stone-100 text-sm">Contents</span>
                    <button 
                        onClick={() => setIsTocOpen(!isTocOpen)} 
                        className="text-green-400 text-xs hover:underline"
                    >
                        [{isTocOpen ? 'hide' : 'show'}]
                    </button>
                </div>
                {isTocOpen && (
                    <ol className="list-decimal list-inside text-green-400 text-sm space-y-0.5">
                        {tocItems.map((item, index) => (
                            <li key={index} className="cursor-pointer hover:underline hover:text-stone-100 truncate">
                                <a href={`#${toId(item)}`} className="text-stone-300 ml-1">{item}</a>
                            </li>
                        ))}
                    </ol>
                )}
            </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="flex-1">
                {/* Description Section */}
                <div className="mb-8" id={toId("Description")}>
                    <div className="flex items-center space-x-2 border-b border-stone-700 pb-2 mb-4">
                        <h2 className="text-2xl font-bold text-stone-100">Description</h2>
                        <a href="#" className="text-green-400">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                            </svg>
                        </a>
                    </div>
                    <p className="italic text-stone-300 mb-4 leading-relaxed">
                        "Set up the perfect hunting moment using Matmat's World Class Taxidermy multi trophy mounts. Placed on any platform or plaque, you will be able to position multiple animals in several realistic poses, visualizing a climactic moment involving your favourite trophies. Recreate incredible moments from the wild or tell an unseen story as you create the ultimate centerpiece for any room in <a href="#" className="text-green-400 hover:underline">Saseka Safari</a>. This style of mounts will be made available in all <a href="#" className="text-green-400 hover:underline">trophy lodges</a>."
                    </p>
                </div>

                {/* Dynamic Mount Sections */}
                <div className="space-y-8">
                    {mountDetails.map((mount, index) => (
                        <div key={index} id={toId(mount.title)} className="scroll-mt-4">
                            <div className="flex items-center space-x-2 border-b border-stone-700 pb-2 mb-4">
                                <h2 className="text-2xl font-bold text-stone-100">{mount.title}</h2>
                                <a href="#" className="text-green-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                    </svg>
                                </a>
                            </div>
                            <ul className="list-disc list-inside text-stone-300 space-y-2 ml-2">
                                <li>Plaque Size: {mount.size}</li>
                                <li>{mount.requirements}</li>
                                <li>{mount.cost}</li>
                            </ul>
                        </div>
                    ))}
                </div>
                
                {/* Note Section */}
                <div className="mt-12 mb-8" id={toId("Note")}>
                    <div className="flex items-center space-x-2 border-b border-stone-700 pb-2 mb-4">
                        <h2 className="text-2xl font-bold text-stone-100">Note</h2>
                        <a href="#" className="text-green-400">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                            </svg>
                        </a>
                    </div>
                    <p className="text-stone-300">
                        There are no extra extra large (XXL) mounts in Spring Creek Manor. Therefore, if you only possess this lodge, you won't be able to build the massive multi-mounts. However, you can build all the others ones.
                    </p>
                </div>

                {/* Trivia and Facts Section */}
                <div className="mt-8 mb-16" id={toId("Trivia and Facts")}>
                    <div className="flex items-center space-x-2 border-b border-stone-700 pb-2 mb-4">
                        <h2 className="text-2xl font-bold text-stone-100">Trivia and Facts</h2>
                        <a href="#" className="text-green-400">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                            </svg>
                        </a>
                    </div>
                    <ul className="list-disc list-inside text-stone-300 space-y-2">
                        <li>There is 3 Multi-Mounts possibilities on an small (S) plaque</li>
                        <li>There is new 4 Multi-Mounts possibilities on an medium (M) plaque</li>
                        <li>There is 8 new Multi-Mounts possibilities on an large (L) plaque</li>
                        <li>There is 4 new possibilities on an extra large (XL) plaque (*Largest plaques available in Spring Creek*)</li>
                        <li>There is 5 new possibilities on an extra extra large (XXL) plaque (*Only possible if you have the Saseka Trophy Lodge*)</li>
                    </ul>
                </div>

            </div>
        </div>

        <div className="h-32"></div>
      </div>
    </div>
  );
}