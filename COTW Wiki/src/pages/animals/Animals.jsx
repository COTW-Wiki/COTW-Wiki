import { Link } from 'react-router-dom';
import { animals } from '../../data/animals';
import { useState } from 'react';
import AnimalsTable from '../../components/AnimalsTable';

export default function AnimalsListPage() {
    const [search, setSearch] = useState('');
    const [reserveFilter, setReserveFilter] = useState('');

    const filteredAnimals = animals.filter(
        (animal) =>
            animal.name.toLowerCase().includes(search.toLowerCase()) &&
            (!reserveFilter || (animal.spawnZones || []).some((z) => z.toLowerCase().includes(reserveFilter.toLowerCase())))
    );

    return (
        <div className="p-6">
            <h1 className="text-4xl font-bold mb-6 text-green-800">Animal Encyclopedia</h1>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mb-6">
                <input
                    type="text"
                    placeholder="Search animal..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="border border-gray-300 rounded-lg px-4 py-2 mb-3 sm:mb-0 focus:ring-2 focus:ring-green-600 outline-none w-full sm:w-1/2"
                />
                <input
                    type="text"
                    placeholder="Filter by reserve..."
                    value={reserveFilter}
                    onChange={(e) => setReserveFilter(e.target.value)}
                    className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-600 outline-none w-full sm:w-1/2"
                />
            </div>

            {/* Informational block copied from fandom (displayed before the list) */}
            <div className="mb-6 text-gray-700 bg-gray-50 p-4 rounded">
                <p className="font-semibold">Animals</p>
                

                <p>
                    In the game there are 112 different animals that can be hunted and harvested by the player.
                </p>

                <p>
                    With new reserve releases, the number continues to grow. Each reserve contains a varying number of
                    new and recurring animals. While most species are unique, sometimes the looks are reused with a
                    different name, such as caribou and reindeer.
                </p>

                <p>
                    You may click on the class chart below for more detail about each animal. You may also click here for
                    some in-game and real life picture comparisons.
                </p>

                <p>
                    Every animal has a class rating associated with it, and so does every{' '}
                    <Link to="/weapons/ammo" className="text-blue-600 underline">ammunition</Link>. Ammunition's recommended class
                    should encompass an animal's class rating for an effective kill. If it is too low, it will be
                    difficult to kill the animal; if it is too high, you will lose{' '}
                    <Link to="/animals/integrity" className="text-blue-600 underline">Integrity</Link> bonus on the{' '}
                    <Link to="/harvest" className="text-blue-600 underline">Harvest Screen</Link>.
                </p>
            </div>

            <AnimalsTable />

            {/* Animals species in multiple reserves table (from user-provided data) */}
            <section className="mt-8">
                <h2 className="text-2xl font-semibold mb-3">Animals Species in Multiple Reserves</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border">
                        <thead>
                            <tr className="bg-gray-100 text-left">
                                <th className="px-4 py-2 border">Animal</th>
                                <th className="px-4 py-2 border">Number of Reserves</th>
                                <th className="px-4 py-2 border">Reserve</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-t"><td className="px-4 py-3">Mallard Duck</td><td className="px-4 py-3">6</td><td className="px-4 py-3">Layton Lake District, Te Arawoa, Revontuli Coast, New England Mountains, Salzwiesen Park, Askiy Ridge</td></tr>
                            <tr className="border-t"><td className="px-4 py-3">Moose</td><td className="px-4 py-3">6</td><td className="px-4 py-3">Layton Lake District, Medved-Taiga National Park, Yukon Valley, Revontuli Coast, New England Mountains, Askiy Ridge, [Te Awaroa (Mission)]</td></tr>
                            <tr className="border-t"><td className="px-4 py-3">Ring-Necked Pheasant</td><td className="px-4 py-3">6</td><td className="px-4 py-3">Rancho del Arroyo, Hirschfelden, Cuatro Colinas, New England Mountains, Salzwiesen Park, Askiy Ridge</td></tr>
                            <tr className="border-t"><td className="px-4 py-3">Whitetail Deer</td><td className="px-4 py-3">6</td><td className="px-4 py-3">Layton Lake District, Rancho del Arroyo, Mississippi Acres, Revontuli Coast, New England Mountains, Askiy Ridge</td></tr>
                            <tr className="border-t"><td className="px-4 py-3">Red Deer</td><td className="px-4 py-3">5</td><td className="px-4 py-3">Hirschfelden, Parque Fernando, Cuatro Colinas, Te Arawoa, Emerald Coast</td></tr>
                            <tr className="border-t"><td className="px-4 py-3">Red Fox</td><td className="px-4 py-3">5</td><td className="px-4 py-3">Hirschfelden, Yukon Valley, New England Mountains, Emerald Coast, Salzwiesen Park</td></tr>
                            <tr className="border-t"><td className="px-4 py-3">Black Bear</td><td className="px-4 py-3">5</td><td className="px-4 py-3">Layton Lake District, Silver Ridge Peaks, Mississippi Acres, New England Mountains, Askiy Ridge</td></tr>
                            <tr className="border-t"><td className="px-4 py-3">Canada Goose</td><td className="px-4 py-3">4</td><td className="px-4 py-3">Hirschfelden, Yukon Valley, Revontuli Coast, Askiy Ridge</td></tr>
                            <tr className="border-t"><td className="px-4 py-3">Mule Deer</td><td className="px-4 py-3">4</td><td className="px-4 py-3">Parque Fernando, Silver Ridge Peaks, Rancho del Arroyo, Askiy Ridge</td></tr>
                            <tr className="border-t"><td className="px-4 py-3">Common Raccoon</td><td className="px-4 py-3">3</td><td className="px-4 py-3">Mississippi Acres, New England Mountains, Salzwiesen Park</td></tr>
                            <tr className="border-t"><td className="px-4 py-3">Coyote</td><td className="px-4 py-3">3</td><td className="px-4 py-3">Layton Lake District, Rancho del Arroyo, New England Mountains</td></tr>
                            <tr className="border-t"><td className="px-4 py-3">Eurasian Wigeon</td><td className="px-4 py-3">3</td><td className="px-4 py-3">Vurhonga Savanna, Revontuli Coast, Salzwiesen Park</td></tr>
                            <tr className="border-t"><td className="px-4 py-3">European Rabbit</td><td className="px-4 py-3">3</td><td className="px-4 py-3">Hirschfelden, Te Arawoa, Salzwiesen Park</td></tr>
                            <tr className="border-t"><td className="px-4 py-3">Fallow Deer</td><td className="px-4 py-3">3</td><td className="px-4 py-3">Hirschfelden, Te Arawoa, Emerald Coast</td></tr>
                            <tr className="border-t"><td className="px-4 py-3">Goldeneye</td><td className="px-4 py-3">3</td><td className="px-4 py-3">Revontuli Coast, New England Mountains, Salzwiesen Park</td></tr>
                            <tr className="border-t"><td className="px-4 py-3">Greylag Goose</td><td className="px-4 py-3">3</td><td className="px-4 py-3">Revontuli Coast, Sundarpatan, Salzwiesen Parl</td></tr>
                            <tr className="border-t"><td className="px-4 py-3">Merriam's Turkey</td><td className="px-4 py-3">3</td><td className="px-4 py-3">Layton Lake District, Silver Ridge Peaks, Te Arawoa</td></tr>
                            <tr className="border-t"><td className="px-4 py-3">Wild Boar</td><td className="px-4 py-3">3</td><td className="px-4 py-3">Hirschfelden, Medved-Taiga National Park, Cuatro Colinas</td></tr>
                            <tr className="border-t"><td className="px-4 py-3">Bighorn Sheep</td><td className="px-4 py-3">3</td><td className="px-4 py-3">Silver Ridge Peaks, Rancho del Arroyo, Askiy Ridge</td></tr>
                            <tr className="border-t"><td className="px-4 py-3">Pronghorn</td><td className="px-4 py-3">3</td><td className="px-4 py-3">Silver Ridge Peaks, Rancho del Arroyo, Askiy Ridge</td></tr>
                            <tr className="border-t"><td className="px-4 py-3">Gray Wolf</td><td className="px-4 py-3">3</td><td className="px-4 py-3">Yukon Valley, Medved-Taiga National Park, Askiy Ridge</td></tr>
                            <tr className="border-t"><td className="px-4 py-3">Axis Deer</td><td className="px-4 py-3">2</td><td className="px-4 py-3">Parque Fernando, Emerald Coast</td></tr>
                            <tr className="border-t"><td className="px-4 py-3">Blackbuck</td><td className="px-4 py-3">2</td><td className="px-4 py-3">Parque Fernando, Sundarpatan</td></tr>
                            <tr className="border-t"><td className="px-4 py-3">Black Grouse</td><td className="px-4 py-3">2</td><td className="px-4 py-3">Revontuli Coast, Salzwiesen Park</td></tr>
                            <tr className="border-t"><td className="px-4 py-3">Bobwhite Quail</td><td className="px-4 py-3">2</td><td className="px-4 py-3">Mississippi Acres, New England Mountains</td></tr>
                            <tr className="border-t"><td className="px-4 py-3">Collared Peccary</td><td className="px-4 py-3">2</td><td className="px-4 py-3">Rancho del Arroyo, Parque Fernando</td></tr>
                            <tr className="border-t"><td className="px-4 py-3">Eastern Cottontail Rabbit</td><td className="px-4 py-3">2</td><td className="px-4 py-3">Mississippi Acres, New England Mountains</td></tr>
                            <tr className="border-t"><td className="px-4 py-3">Eastern Wild Turkey</td><td className="px-4 py-3">2</td><td className="px-4 py-3">Mississippi Acres, New England Mountains</td></tr>
                            <tr className="border-t"><td className="px-4 py-3">Eurasian Brown Bear</td><td className="px-4 py-3">2</td><td className="px-4 py-3">Medved-Taiga National Park, Revontuli Coast</td></tr>
                            <tr className="border-t"><td className="px-4 py-3">Eurasian Lynx</td><td className="px-4 py-3">2</td><td className="px-4 py-3">Medved-Taiga National Park, Revontuli Coast</td></tr>
                            <tr className="border-t"><td className="px-4 py-3">Eurasian Teal</td><td className="px-4 py-3">2</td><td className="px-4 py-3">Revontuli Coast, Salzwiesen Park</td></tr>
                            <tr className="border-t"><td className="px-4 py-3">Feral Goat</td><td className="px-4 py-3">2</td><td className="px-4 py-3">Te Arawoa, Emerald Coast</td></tr>
                            <tr className="border-t"><td className="px-4 py-3">Feral Pig</td><td className="px-4 py-3">2</td><td className="px-4 py-3">Te Arawoa, Emerald Coast</td></tr>
                            <tr className="border-t"><td className="px-4 py-3">Gray Fox</td><td className="px-4 py-3">2</td><td className="px-4 py-3">Mississippi Acres, New England Mountains</td></tr>
                            <tr className="border-t"><td className="px-4 py-3">Green Winged Teal</td><td className="px-4 py-3">2</td><td className="px-4 py-3">Mississippi Acres, New England Mountains</td></tr>
                            <tr className="border-t"><td className="px-4 py-3">Plains Bison</td><td className="px-4 py-3">2</td><td className="px-4 py-3">Yukon Valley, Silver Ridge Peaks</td></tr>
                            <tr className="border-t"><td className="px-4 py-3">Raccoon Dog</td><td className="px-4 py-3">2</td><td className="px-4 py-3">Revontuli Coast, Salzwiesen Park</td></tr>
                            <tr className="border-t"><td className="px-4 py-3">Roe Deer</td><td className="px-4 py-3">2</td><td className="px-4 py-3">Hirschfelden, Cuatro Colinas</td></tr>
                            <tr className="border-t"><td className="px-4 py-3">Tufted Duck</td><td className="px-4 py-3">2</td><td className="px-4 py-3">Revontuli Coast, Salzwiesen Park</td></tr>
                            <tr className="border-t"><td className="px-4 py-3">Tundra Bean Goose</td><td className="px-4 py-3">2</td><td className="px-4 py-3">Revontuli Coast, Salzwiesen Park</td></tr>
                            <tr className="border-t"><td className="px-4 py-3">Water Buffalo</td><td className="px-4 py-3">2</td><td className="px-4 py-3">Parque Fernando, Sundarpatan</td></tr>
                            <tr className="border-t"><td className="px-4 py-3">Western Capercaillie</td><td className="px-4 py-3">2</td><td className="px-4 py-3">Revontuli Coast, Medved-Taiga National Park</td></tr>
                            <tr className="border-t"><td className="px-4 py-3">Himalayan Tahr</td><td className="px-4 py-3">2</td><td className="px-4 py-3">Sundarpatan, Te Awaroa</td></tr>
                            <tr className="border-t"><td className="px-4 py-3">Mountain Goat</td><td className="px-4 py-3">2</td><td className="px-4 py-3">Silver Ridge Peaks, Askiy Ridge</td></tr>
                            <tr className="border-t"><td className="px-4 py-3">Unique Animals</td><td className="px-4 py-3">1</td><td className="px-4 py-3">65 species</td></tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
}
