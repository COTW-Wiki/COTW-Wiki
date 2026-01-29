import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// --- HELPER COMPONENTS ---

function TableOfContents({ items }) {
  const [isOpen, setIsOpen] = useState(true);

  if (!items || items.length === 0) return null;

  const handleSmoothScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <div className="bg-gray-50 border border-gray-300 rounded-sm p-0 inline-block min-w-[300px] mb-6 text-sm text-gray-900 shadow-md">
      {/* Header */}
      <div className="flex justify-between items-center p-2 border-b border-gray-300 bg-gray-100">
        <span className="font-bold text-gray-900">Contents</span>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-blue-600 hover:text-blue-800 text-xs font-semibold focus:outline-none"
        >
          [{isOpen ? 'hide' : 'show'}]
        </button>
      </div>

      {/* List */}
      {isOpen && (
        <ul className="p-3 space-y-1">
          {items.map((item, index) => (
            <li key={item.id}>
              {/* Main Level */}
              <a 
                href={`#${item.id}`} 
                onClick={(e) => handleSmoothScroll(e, item.id)}
                className="block hover:text-blue-800 hover:underline transition-colors text-blue-600"
              >
                <span className="mr-1 text-gray-600 font-mono">{index + 1}.</span> {item.label}
              </a>

              {/* Sub Levels */}
              {item.children && (
                <ul className="ml-6 mt-1 space-y-1">
                  {item.children.map((child, childIndex) => (
                    <li key={child.id}>
                      <a 
                        href={`#${child.id}`} 
                        onClick={(e) => handleSmoothScroll(e, child.id)}
                        className="block hover:text-blue-800 hover:underline transition-colors text-blue-600"
                      >
                         <span className="mr-1 text-gray-600 font-mono">{index + 1}.{childIndex + 1}.</span> {child.label}
                      </a>
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
}

function slug(name) {
	return encodeURIComponent(name.replace(/\s+/g, '-'));
}

// --- MAIN CONTENT COMPONENT ---

export default function Rating() {
	// Define the TOC structure
	const tocItems = [
		{ id: 'harvest-check', label: 'Harvest Check' },
		{ 
			id: 'bonuses', 
			label: 'Bonuses',
			children: [
				{ id: 'quick-kill-bonus', label: 'Quick Kill Bonus' },
				{ id: 'consecutive-harvests-bonus', label: 'Consecutive Harvests Bonus' },
			] 
		},
		{ 
			id: 'difficulty-level', 
			label: 'Difficulty Level',
			children: [
				{ id: 'animal-difficulty-levels', label: 'Animal Difficulty Levels | Table' }
			]
		},
		{ id: 'trophy-type-rating', label: 'Trophy Type and Trophy Rating' },
		{ id: 'session-score', label: 'Session Score' },
	];

	return (
		<div className="p-6">
			<div className="max-w-4xl mx-auto bg-white shadow rounded p-6">
				<h1 className="text-2xl font-bold">Trophy Rating</h1>

				<p className="mt-4 text-gray-800 mb-6">The Trophy Rating is an evaluation of an animal's trophy, such as antlers or horns. If an animal features no distinct trophy, their weight will usually be used to determine its trophy rating. Trophy rating is only comparable within the same species - there's no point in comparing a <Link to={`/animals/${slug('White-tailed Jackrabbit')}`} className="text-green-800 hover:underline">White-Tailed Jackrabbit</Link> trophy rating to that of a <Link to={`/animals/${slug('Blacktail Deer')}`} className="text-green-800 hover:underline">Blacktail Deer</Link>.</p>

				{/* --- TABLE OF CONTENTS --- */}
				<TableOfContents items={tocItems} />

				<h2 className="mt-4 font-semibold">How Trophy Rating determines medals</h2>

				<div className="mt-2 text-gray-800">
					<ul className="list-disc list-inside space-y-2">
						<li>If the animal has no trophy organ (for example female deer), then the medal is <strong>NONE (X)</strong>.</li>
						<li>If the Trophy Rating is lower than 20% of the animal's maximum trophy rating, then the medal is <strong>BRONZE</strong>.</li>
						<li>If the Trophy Rating is between 20% and 60% of the animal's maximum trophy rating, then the medal is <strong>SILVER</strong>.</li>
						<li>If the Trophy Rating is between 60% and 90% of the animal's maximum trophy rating, then the medal is <strong>GOLD</strong>.</li>
						<li>If the Trophy Rating is between 90% and 100% of the animal's maximum trophy rating, then the medal is <strong>DIAMOND</strong>.</li>
						<li><Link to="/rating/great-ones" className="text-green-800 font-semibold hover:underline"><strong>GREAT ONE</strong></Link> is the highest medal rating. This class (10) is extremely rare and has some very rare characteristics, also reflected in a trophy rating score that is far outside the usual range.</li>
					</ul>
				</div>
			</div>

			<div className="max-w-4xl mx-auto bg-white shadow rounded p-6 mt-6">
				{/* Added ID for TOC anchor */}
				<h2 id="harvest-check" className="text-xl font-semibold scroll-mt-20">Harvest Check</h2>
				<p className="mt-3 text-gray-800">Harvest checks determine whether the animal was downed ethically and effectively. If the harvest check is failed, the medal is lowered by 1 level (so potential Diamond becomes Gold, potential Gold becomes Silver and so on).</p>

				<p className="mt-3 text-gray-800">To pass the harvest check, you need to meet these 4 conditions:</p>

				<div className="mt-2 text-gray-800">
					<ol className="list-decimal list-inside space-y-2">
						<li>
							<strong>Correct Ammo Class:</strong> Every animal in the game falls into a specific Animal Class - for example White-tailed Jackrabbit is a class 1 animal, Blacktail Deer is class 4 and so on. Specific ammo types can be used on different classes - for example: The .243 ammo can be used on classes 2 through 6. This means that you can use .243 ammo to down a Blacktail Deer (class 4) but not a White-tailed Jackrabbit (class 1).
						</li>
						<li>
							<strong>The Animal must not be Shot more than Two Times:</strong> You can't expect to shoot the animal 8 times and still get the highest possible rewards, so make sure to aim for vital organs.
						</li>
						<li>
							<strong>Trophy Organ must be Intact:</strong> Trophy organs are typically antlers, horns, or skulls, so avoid shooting the animal in the head to pass this check. The safest thing to do is aim for the lungs or heart.
						</li>
						<li>
							<strong>Hit a vital organ:</strong> This is to ensure the shots are ethical and the animal dies as quickly as possible; aim for the heart, lungs, liver, neck, or brain to pass this check. Note that damaging the brain usually means damaging the skull and failing the requirement mentioned above. Spinal cord shots are considered unethical and not a vital organ, even though in the game they make the animal die very quickly. Lastly, this requirement is passed automatically in case of small game, such as <Link to={`/animals/${slug('White-tailed Jackrabbit')}`} className="text-green-800 hover:underline">White-tailed Jackrabbits</Link> or <Link to={`/animals/${slug('Mallard')}`} className="text-green-800 hover:underline">Mallards</Link>.
						</li>
					</ol>
				</div>

				{/* Added ID for TOC anchor */}
				<h2 id="bonuses" className="mt-6 text-xl font-semibold scroll-mt-20">Bonuses</h2>
				<p className="mt-3 text-gray-800">For each harvest, you can get additional XP and cash rewards through 2 bonuses:</p>

				{/* Added ID for TOC anchor */}
				<h3 id="quick-kill-bonus" className="mt-3 font-medium scroll-mt-20">Quick Kill Bonus</h3>
				<p className="text-gray-800 mt-2">The bonus is based on the time an animal takes to die after the hit. The shorter the time, the higher the bonus gets.</p>
				<ul className="list-disc list-inside mt-2 text-gray-800">
					<li><strong>Minimum: 0%</strong> - The animal dies after a long period of time from bleeding out, usually due to poor shot placement.</li>
					<li><strong>Maximum: 100%</strong> - The animal dies on the spot or runs a few meters away from the spot where it was shot.</li>
				</ul>

				<div className="max-w-4xl mx-auto bg-white shadow rounded p-6 mt-6">
					{/* Added ID for TOC anchor */}
					<h2 id="consecutive-harvests-bonus" className="text-xl font-semibold scroll-mt-20">Consecutive Harvests Bonus</h2>
					<p className="mt-3 text-gray-800">This bonus merely indicates that all animals that were killed were also harvested. It requires 5 consecutive harvests to get the maximum monetary reward of a kill. If one animal that was killed was not harvested before the game was exited, this bonus falls to 0%.</p>

					<div className="mt-3 text-gray-800">
						<ul className="list-disc list-inside space-y-2">
							<li><strong>1st harvest</strong> - 20%</li>
							<li><strong>2nd harvest</strong> - 40%</li>
							<li><strong>3rd harvest</strong> - 60%</li>
							<li><strong>4th harvest</strong> - 80%</li>
							<li><strong>5th harvest</strong> - 100%</li>
						</ul>
					</div>

					{/* Added ID for TOC anchor */}
					<h2 id="difficulty-level" className="mt-6 text-xl font-semibold scroll-mt-20">Difficulty Level</h2>
					<p className="mt-3 text-gray-800">The Difficulty Level reflects how "big" the animal is in terms of Trophy Rating and how aware the animal is of its environment. This means that at a higher difficulty level, the animal will pose a bigger challenge to hunt and will require more skill to call and stalk. The Minimum Difficulty Level for all Species is 1 - Trivial and the Maximum Difficulty Level can vary depending on the species (3 - Very Easy | 5 - Medium | 9 - Legendary). Every difficulty has a range of trophy rating values. Typically diamond badge specimens are of the maximum difficulty level of the species. However, on rare occasions lower difficulty animals can have a large enough trophy rating to allow for a diamond badge.</p>

					<p className="mt-3 text-gray-800">An example could be the <Link to={`/animals/${slug('Red Deer')}`} className="text-green-800 hover:underline">Red Deer</Link>. Diamond specimens are usually found with difficulty Level 9 (Legendary), but on rare occasions a Level 8 (Mythical) may spawn with a high enough trophy rating to qualify for the diamond medal.</p>

					<p className="mt-4 font-medium text-gray-800">The difficulty levels are as follows:</p>
					<ul className="list-disc list-inside mt-2 text-gray-800">
						<li><strong>1</strong> - Trivial</li>
						<li><strong>2</strong> - Minor</li>
						<li><strong>3</strong> - Very easy</li>
						<li><strong>4</strong> - Easy</li>
						<li><strong>5</strong> - Medium</li>
						<li><strong>6</strong> - Hard</li>
						<li><strong>7</strong> - Very hard</li>
						<li><strong>8</strong> - Mythical</li>
						<li><strong>9</strong> - Legendary</li>
						<li><strong>10</strong> - Fabled (only <Link to="/rating/great-ones" className="text-green-800 hover:underline">Great Ones</Link>)</li>
					</ul>
				</div>
			</div>

			<div className="max-w-4xl mx-auto bg-white shadow rounded p-6 mt-6">
				{/* Added ID for TOC anchor */}
				<h2 id="animal-difficulty-levels" className="text-xl font-semibold scroll-mt-20">Animal Difficulty Levels</h2>
				<p className="mt-3 text-gray-800">Below is a reference table mapping species to their typical difficulty level ranges.</p>
				<div className="mt-4 overflow-x-auto">
					<table className="w-full text-sm border-collapse">
						<thead>
							<tr className="bg-green-100 text-left">
								<th className="px-3 py-2 border">Animal</th>
								<th className="px-3 py-2 border">Level</th>
							</tr>
						</thead>
						<tbody>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Merriam Turkey')}`} className="text-green-800 hover:underline">Merriam Turkey</Link></td><td className="px-3 py-2">1-3 (Very Easy)</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Mallard')}`} className="text-green-800 hover:underline">Mallard</Link></td><td className="px-3 py-2">1-3</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Cinnamon Teal')}`} className="text-green-800 hover:underline">Cinnamon Teal</Link></td><td className="px-3 py-2">1-3</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Harlequin Duck')}`} className="text-green-800 hover:underline">Harlequin Duck</Link></td><td className="px-3 py-2">1-3</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Scrub Hare')}`} className="text-green-800 hover:underline">Scrub Hare</Link></td><td className="px-3 py-2">1-3</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('White-tailed Jackrabbit')}`} className="text-green-800 hover:underline">White-tailed Jackrabbit</Link></td><td className="px-3 py-2">1-3</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('European Hare')}`} className="text-green-800 hover:underline">European Hare</Link></td><td className="px-3 py-2">1-3</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Siberian Musk Deer')}`} className="text-green-800 hover:underline">Siberian Musk Deer</Link></td><td className="px-3 py-2">1-3</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Roe Deer')}`} className="text-green-800 hover:underline">Roe Deer</Link></td><td className="px-3 py-2">1-3</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('European Rabbit')}`} className="text-green-800 hover:underline">European Rabbit</Link></td><td className="px-3 py-2">1-3</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Whitetail Deer')}`} className="text-green-800 hover:underline">Whitetail Deer</Link>*</td><td className="px-3 py-2">1-3 (see note)</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Mountain Goat')}`} className="text-green-800 hover:underline">Mountain Goat</Link></td><td className="px-3 py-2">1-5 (Medium)</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Desert Bighorn Sheep')}`} className="text-green-800 hover:underline">Desert Bighorn Sheep</Link></td><td className="px-3 py-2">1-5</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Rocky Mountain Bighorn Sheep')}`} className="text-green-800 hover:underline">Rocky Mountain Bighorn Sheep</Link></td><td className="px-3 py-2">1-5</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Pronghorn')}`} className="text-green-800 hover:underline">Pronghorn</Link></td><td className="px-3 py-2">1-5</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Rocky Mountain Elk')}`} className="text-green-800 hover:underline">Rocky Mountain Elk</Link></td><td className="px-3 py-2">1-5</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Lesser Kudu')}`} className="text-green-800 hover:underline">Lesser Kudu</Link></td><td className="px-3 py-2">1-5</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Warthog')}`} className="text-green-800 hover:underline">Warthog</Link></td><td className="px-3 py-2">1-5</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Springbok')}`} className="text-green-800 hover:underline">Springbok</Link></td><td className="px-3 py-2">1-5</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Gemsbok')}`} className="text-green-800 hover:underline">Gemsbok</Link></td><td className="px-3 py-2">1-5</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Wild Boar')}`} className="text-green-800 hover:underline">Wild Boar</Link></td><td className="px-3 py-2">1-5</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Mountain Reindeer')}`} className="text-green-800 hover:underline">Mountain Reindeer</Link></td><td className="px-3 py-2">1-5</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Blue Wildebeest')}`} className="text-green-800 hover:underline">Blue Wildebeest</Link></td><td className="px-3 py-2">1-5</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Roosevelt Elk')}`} className="text-green-800 hover:underline">Roosevelt Elk</Link></td><td className="px-3 py-2">1-5</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Moose')}`} className="text-green-800 hover:underline">Moose</Link>*</td><td className="px-3 py-2">1-5 (see note)</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('European Bison')}`} className="text-green-800 hover:underline">European Bison</Link></td><td className="px-3 py-2">1-5</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Plains Bison')}`} className="text-green-800 hover:underline">Plains Bison</Link></td><td className="px-3 py-2">1-5</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Grant Caribou')}`} className="text-green-800 hover:underline">Grant Caribou</Link></td><td className="px-3 py-2">1-5</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Iberian Mouflon')}`} className="text-green-800 hover:underline">Iberian Mouflon</Link></td><td className="px-3 py-2">1-5</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Beceite Ibex')}`} className="text-green-800 hover:underline">Beceite Ibex</Link></td><td className="px-3 py-2">1-5</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Ronda Ibex')}`} className="text-green-800 hover:underline">Ronda Ibex</Link></td><td className="px-3 py-2">1-5</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Gredos Ibex')}`} className="text-green-800 hover:underline">Gredos Ibex</Link></td><td className="px-3 py-2">1-5</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Southeastern Spanish Ibex')}`} className="text-green-800 hover:underline">Southeastern Spanish Ibex</Link></td><td className="px-3 py-2">1-5</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Javan Rusa')}`} className="text-green-800 hover:underline">Javan Rusa</Link></td><td className="px-3 py-2">1-5</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Sambar')}`} className="text-green-800 hover:underline">Sambar</Link></td><td className="px-3 py-2">1-5</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Axis Deer')}`} className="text-green-800 hover:underline">Axis Deer</Link></td><td className="px-3 py-2">1-5</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Mule Deer')}`} className="text-green-800 hover:underline">Mule Deer</Link></td><td className="px-3 py-2">1-5</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Blackbuck')}`} className="text-green-800 hover:underline">Blackbuck</Link></td><td className="px-3 py-2">1-5</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Fallow Deer')}`} className="text-green-800 hover:underline">Fallow Deer</Link></td><td className="px-3 py-2">1-5</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Blacktail Deer')}`} className="text-green-800 hover:underline">Blacktail Deer</Link></td><td className="px-3 py-2">1-5</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Chamois')}`} className="text-green-800 hover:underline">Chamois</Link></td><td className="px-3 py-2">1-5</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Feral Goat')}`} className="text-green-800 hover:underline">Feral Goat</Link></td><td className="px-3 py-2">1-5</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Feral Pig')}`} className="text-green-800 hover:underline">Feral Pig</Link></td><td className="px-3 py-2">1-5</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Sika Deer')}`} className="text-green-800 hover:underline">Sika Deer</Link></td><td className="px-3 py-2">1-5</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Canada Goose')}`} className="text-green-800 hover:underline">Canada Goose</Link></td><td className="px-3 py-2">1-5</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Cape Buffalo')}`} className="text-green-800 hover:underline">Cape Buffalo</Link></td><td className="px-3 py-2">1-9 (Legendary)</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Water Buffalo')}`} className="text-green-800 hover:underline">Water Buffalo</Link></td><td className="px-3 py-2">1-9</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Red Deer')}`} className="text-green-800 hover:underline">Red Deer</Link>*</td><td className="px-3 py-2">1-9 (see note)</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Black Bear')}`} className="text-green-800 hover:underline">Black Bear</Link>*</td><td className="px-3 py-2">1-9 (see note)</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Brown Bear')}`} className="text-green-800 hover:underline">Brown Bear</Link></td><td className="px-3 py-2">1-9</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Grizzly Bear')}`} className="text-green-800 hover:underline">Grizzly Bear</Link></td><td className="px-3 py-2">1-9</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Gray Wolf')}`} className="text-green-800 hover:underline">Gray Wolf</Link></td><td className="px-3 py-2">1-9</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Iberian Wolf')}`} className="text-green-800 hover:underline">Iberian Wolf</Link></td><td className="px-3 py-2">1-9</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Eastern Gray Kangaroo')}`} className="text-green-800 hover:underline">Eastern Gray Kangaroo</Link></td><td className="px-3 py-2">1-9</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Red Fox')}`} className="text-green-800 hover:underline">Red Fox</Link></td><td className="px-3 py-2">1-9 (see note)</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Coyote')}`} className="text-green-800 hover:underline">Coyote</Link></td><td className="px-3 py-2">1-9</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Side-Striped Jackal')}`} className="text-green-800 hover:underline">Side-Striped Jackal</Link></td><td className="px-3 py-2">1-9</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Eurasian Lynx')}`} className="text-green-800 hover:underline">Eurasian Lynx</Link></td><td className="px-3 py-2">1-9</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Puma')}`} className="text-green-800 hover:underline">Puma</Link></td><td className="px-3 py-2">1-9</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Mountain Lion')}`} className="text-green-800 hover:underline">Mountain Lion</Link></td><td className="px-3 py-2">1-9</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Lion')}`} className="text-green-800 hover:underline">Lion</Link></td><td className="px-3 py-2">1-9</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Saltwater Crocodile')}`} className="text-green-800 hover:underline">Saltwater Crocodile</Link></td><td className="px-3 py-2">1-9</td></tr>
						</tbody>
					</table>
				</div>
				<p className="mt-4 text-sm text-gray-600">* Whitetail deer, Red Deer, Black Bear, Fallow Deer, Moose, Red Fox, and Ring-necked Pheasant exist as <Link to="/rating/great-ones" className="text-green-800 hover:underline">Great Ones</Link> with Difficulty Level 10: 'Fabled'.</p>
			</div>

			<div className="max-w-4xl mx-auto bg-white shadow rounded p-6 mt-6">
				{/* Added ID for TOC anchor */}
				<h2 id="trophy-type-rating" className="text-xl font-semibold scroll-mt-20">Trophy Type and Trophy Rating</h2>
				<p className="mt-3 text-gray-800">Trophy Type is a specific characteristic of the Species (Weight, Skull Size, Antlers, Horns, Tusks) on which the Trophy Rating (TR) will be based on. The Trophy Rating is a value given to the size/weight of the trophy; thus, a larger trophy gives you a higher rating. The trophy rating provides at maximum 500 Kill Score.</p>

				<div className="mt-4 overflow-x-auto">
					<table className="w-full text-sm border-collapse">
						<thead>
							<tr className="bg-green-100 text-left">
								<th className="px-3 py-2 border">Animal</th>
								<th className="px-3 py-2 border">Trophy Type</th>
								<th className="px-3 py-2 border">Minimum TR</th>
								<th className="px-3 py-2 border">Maximum TR</th>
							</tr>
						</thead>
						<tbody>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Canada Goose')}`} className="text-green-800 hover:underline">Canada Goose</Link></td><td className="px-3 py-2">Weight</td><td className="px-3 py-2">3,2</td><td className="px-3 py-2">9.4</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Mallard')}`} className="text-green-800 hover:underline">Mallard</Link></td><td className="px-3 py-2">Weight</td><td className="px-3 py-2">0,7</td><td className="px-3 py-2">2,1</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Scrub Hare')}`} className="text-green-800 hover:underline">Scrub Hare</Link></td><td className="px-3 py-2">Weight</td><td className="px-3 py-2">1,5</td><td className="px-3 py-2">5.9</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('White-tailed Jackrabbit')}`} className="text-green-800 hover:underline">White-tailed Jackrabbit</Link></td><td className="px-3 py-2">Weight</td><td className="px-3 py-2">1,9</td><td className="px-3 py-2">7.0</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Side-Striped Jackal')}`} className="text-green-800 hover:underline">Side-Striped Jackal</Link></td><td className="px-3 py-2">Skull / Trophy</td><td className="px-3 py-2">13,2</td><td className="px-3 py-2">32.3</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Red Fox')}`} className="text-green-800 hover:underline">Red Fox</Link></td><td className="px-3 py-2">Skull</td><td className="px-3 py-2">2</td><td className="px-3 py-2">15.6</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Lynx')}`} className="text-green-800 hover:underline">Lynx</Link></td><td className="px-3 py-2">Skull</td><td className="px-3 py-2">16,0</td><td className="px-3 py-2">30.7</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Coyote')}`} className="text-green-800 hover:underline">Coyote</Link></td><td className="px-3 py-2">Skull</td><td className="px-3 py-2">33</td><td className="px-3 py-2">63.1</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('European Hare')}`} className="text-green-800 hover:underline">European Hare</Link></td><td className="px-3 py-2">Weight</td><td className="px-3 py-2">2</td><td className="px-3 py-2">7.2</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Harlequin Duck')}`} className="text-green-800 hover:underline">Harlequin Duck</Link></td><td className="px-3 py-2">Weight?</td><td className="px-3 py-2">?</td><td className="px-3 py-2">8.0</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Cinnamon Teal')}`} className="text-green-800 hover:underline">Cinnamon Teal</Link></td><td className="px-3 py-2">Weight?</td><td className="px-3 py-2">?</td><td className="px-3 py-2">5.1</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Siberian Musk Deer')}`} className="text-green-800 hover:underline">Siberian Musk Deer</Link></td><td className="px-3 py-2">Fangs</td><td className="px-3 py-2">0</td><td className="px-3 py-2">276.7</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Roe Deer')}`} className="text-green-800 hover:underline">Roe Deer</Link></td><td className="px-3 py-2">Antlers</td><td className="px-3 py-2">0</td><td className="px-3 py-2">99.2</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Springbok')}`} className="text-green-800 hover:underline">Springbok</Link></td><td className="px-3 py-2">Horns</td><td className="px-3 py-2">57</td><td className="px-3 py-2">122.9</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Fallow Deer')}`} className="text-green-800 hover:underline">Fallow Deer</Link></td><td className="px-3 py-2">Antlers</td><td className="px-3 py-2">0</td><td className="px-3 py-2">279.7</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Blacktail Deer')}`} className="text-green-800 hover:underline">Blacktail Deer</Link></td><td className="px-3 py-2">Antlers</td><td className="px-3 py-2">0</td><td className="px-3 py-2">197.2</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Whitetail Deer')}`} className="text-green-800 hover:underline">Whitetail Deer</Link></td><td className="px-3 py-2">Antlers</td><td className="px-3 py-2">0</td><td className="px-3 py-2">283.3</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Javan Rusa')}`} className="text-green-800 hover:underline">Javan Rusa</Link></td><td className="px-3 py-2">Antlers</td><td className="px-3 py-2">0</td><td className="px-3 py-2">160 (?)</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Sambar')}`} className="text-green-800 hover:underline">Sambar</Link></td><td className="px-3 py-2">Antlers</td><td className="px-3 py-2">0</td><td className="px-3 py-2">180 (?)</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Red Deer')}`} className="text-green-800 hover:underline">Red Deer</Link></td><td className="px-3 py-2">Antlers</td><td className="px-3 py-2">0</td><td className="px-3 py-2">278.9</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Blue Wildebeest')}`} className="text-green-800 hover:underline">Blue Wildebeest</Link></td><td className="px-3 py-2">Horns</td><td className="px-3 py-2">17,0</td><td className="px-3 py-2">41.8</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Roosevelt Elk')}`} className="text-green-800 hover:underline">Roosevelt Elk</Link></td><td className="px-3 py-2">Antlers</td><td className="px-3 py-2">0</td><td className="px-3 py-2">423.1</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Moose')}`} className="text-green-800 hover:underline">Moose</Link></td><td className="px-3 py-2">Antlers</td><td className="px-3 py-2">0</td><td className="px-3 py-2">305.4</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Mountain Reindeer')}`} className="text-green-800 hover:underline">Mountain Reindeer</Link></td><td className="px-3 py-2">Antlers</td><td className="px-3 py-2">65</td><td className="px-3 py-2">478</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Grant Caribou')}`} className="text-green-800 hover:underline">Grant Caribou</Link></td><td className="px-3 py-2">Antlers</td><td className="px-3 py-2">?</td><td className="px-3 py-2">478</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Mule Deer')}`} className="text-green-800 hover:underline">Mule Deer</Link></td><td className="px-3 py-2">Antlers</td><td className="px-3 py-2">0</td><td className="px-3 py-2">349.8</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Axis Deer')}`} className="text-green-800 hover:underline">Axis Deer</Link></td><td className="px-3 py-2">Antlers</td><td className="px-3 py-2">0</td><td className="px-3 py-2">241.3</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Lesser Kudu')}`} className="text-green-800 hover:underline">Lesser Kudu</Link></td><td className="px-3 py-2">Horns</td><td className="px-3 py-2">0</td><td className="px-3 py-2">35.8</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Warthog')}`} className="text-green-800 hover:underline">Warthog</Link></td><td className="px-3 py-2">Tusks</td><td className="px-3 py-2">15</td><td className="px-3 py-2">64.6</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Wild Boar')}`} className="text-green-800 hover:underline">Wild Boar</Link></td><td className="px-3 py-2">Tusks</td><td className="px-3 py-2">7</td><td className="px-3 py-2">160.2</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Black Bear')}`} className="text-green-800 hover:underline">Black Bear</Link></td><td className="px-3 py-2">Skull</td><td className="px-3 py-2">12,0</td><td className="px-3 py-2">25.2</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Brown Bear')}`} className="text-green-800 hover:underline">Brown Bear</Link></td><td className="px-3 py-2">Skull</td><td className="px-3 py-2">16,0</td><td className="px-3 py-2">30.8</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Grizzly Bear')}`} className="text-green-800 hover:underline">Grizzly Bear</Link></td><td className="px-3 py-2">Skull</td><td className="px-3 py-2">?</td><td className="px-3 py-2">74.3</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Puma')}`} className="text-green-800 hover:underline">Puma</Link></td><td className="px-3 py-2">Skull</td><td className="px-3 py-2">30</td><td className="px-3 py-2">43.3</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Lion')}`} className="text-green-800 hover:underline">Lion</Link></td><td className="px-3 py-2">Skull</td><td className="px-3 py-2">35</td><td className="px-3 py-2">53.9</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Gray Wolf')}`} className="text-green-800 hover:underline">Gray Wolf</Link></td><td className="px-3 py-2">Skull</td><td className="px-3 py-2">?</td><td className="px-3 py-2">43.3</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Iberian Wolf')}`} className="text-green-800 hover:underline">Iberian Wolf</Link></td><td className="px-3 py-2">Skull</td><td className="px-3 py-2">30</td><td className="px-3 py-2">43.3</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('European Bison')}`} className="text-green-800 hover:underline">European Bison</Link></td><td className="px-3 py-2">Horns</td><td className="px-3 py-2">4</td><td className="px-3 py-2">300.3</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Plains Bison')}`} className="text-green-800 hover:underline">Plains Bison</Link></td><td className="px-3 py-2">Horns</td><td className="px-3 py-2">??</td><td className="px-3 py-2">245.7</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Cape Buffalo')}`} className="text-green-800 hover:underline">Cape Buffalo</Link></td><td className="px-3 py-2">Horns</td><td className="px-3 py-2">51</td><td className="px-3 py-2">168.1</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Water Buffalo')}`} className="text-green-800 hover:underline">Water Buffalo</Link></td><td className="px-3 py-2">Horns</td><td className="px-3 py-2">154</td><td className="px-3 py-2">186.1</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Blackbuck')}`} className="text-green-800 hover:underline">Blackbuck</Link></td><td className="px-3 py-2">Horns</td><td className="px-3 py-2">17.5</td><td className="px-3 py-2">146.9</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Iberian Mouflon')}`} className="text-green-800 hover:underline">Iberian Mouflon</Link></td><td className="px-3 py-2">Horns</td><td className="px-3 py-2">?</td><td className="px-3 py-2">199.4</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Gredos Ibex')}`} className="text-green-800 hover:underline">Gredos Ibex</Link></td><td className="px-3 py-2">Horns</td><td className="px-3 py-2">?</td><td className="px-3 py-2">112.1</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Beceite Ibex')}`} className="text-green-800 hover:underline">Beceite Ibex</Link></td><td className="px-3 py-2">Horns</td><td className="px-3 py-2">?</td><td className="px-3 py-2">212.9</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Ronda Ibex')}`} className="text-green-800 hover:underline">Ronda Ibex</Link></td><td className="px-3 py-2">Horns</td><td className="px-3 py-2">?</td><td className="px-3 py-2">119.9</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Southeastern Spanish Ibex')}`} className="text-green-800 hover:underline">Southeastern Spanish Ibex</Link></td><td className="px-3 py-2">Horns</td><td className="px-3 py-2">?</td><td className="px-3 py-2">99.6</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Merriam Turkey')}`} className="text-green-800 hover:underline">Merriam Turkey</Link></td><td className="px-3 py-2">Combined</td><td className="px-3 py-2">?</td><td className="px-3 py-2">4.6</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Eastern Gray Kangaroo')}`} className="text-green-800 hover:underline">Eastern Gray Kangaroo</Link></td><td className="px-3 py-2">Length</td><td className="px-3 py-2">?</td><td className="px-3 py-2">530</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2"><Link to={`/animals/${slug('Saltwater Crocodile')}`} className="text-green-800 hover:underline">Saltwater Crocodile</Link></td><td className="px-3 py-2">Length / Size</td><td className="px-3 py-2">?</td><td className="px-3 py-2">1100</td></tr>
								</tbody>
							</table>
						</div>
						<p className="mt-4 text-sm text-gray-600">* Whitetail deer, Red Deer, Black Bear, Fallow Deer and Moose exist as <Link to="/rating/great-ones" className="text-green-800 hover:underline">Great Ones</Link> with a much higher Trophy Rating.</p>
					</div>

			<div className="max-w-4xl mx-auto bg-white shadow rounded p-6 mt-6">
				{/* Added ID for TOC anchor */}
				<h2 id="session-score" className="text-xl font-semibold scroll-mt-20">Session Score</h2>
				<p className="mt-3 text-gray-800">The Session Score is the final rating of the harvest and it's a combination of the medal, animal's difficulty, harvest check and the quick kill bonus. The Session Score ranges between 0 and 1000, though only animals with the highest medal can score 1000, as shown in the table below. The score ranges between 0 and 100%.</p>

				<p className="mt-3 text-gray-800">The exact score calculation and bonuses can be found in the Harvest Screen by mouse-hovering the scores.</p>

				<div className="mt-4 overflow-x-auto">
					<table className="w-full text-sm border-collapse">
						<thead>
							<tr className="bg-green-100 text-left">
								<th className="px-3 py-2 border">Medal</th>
								<th className="px-3 py-2 border">Score</th>
							</tr>
						</thead>
						<tbody>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2">None</td><td className="px-3 py-2">0 - 400</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2">Bronze</td><td className="px-3 py-2">400 - 600</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2">Silver</td><td className="px-3 py-2">600 - 800</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2">Gold</td><td className="px-3 py-2">800 - 950</td></tr>
							<tr className="odd:bg-white even:bg-gray-50"><td className="px-3 py-2">Diamond</td><td className="px-3 py-2">950 - 1000</td></tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}

