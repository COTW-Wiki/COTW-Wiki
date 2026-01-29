import { Link } from 'react-router-dom';
import { sights } from '../../../data/sights';
import { weapons } from '../../../data/weapons';

function slug(name) {
  return encodeURIComponent(name.replace(/\s+/g, '_'));
}

function categoriesForSight(sight) {
  const cats = new Set();
  const arr = sight.compatibleWith || [];
  for (const item of arr) {
    if (!item) continue;
    let id = null;
    if (typeof item === 'string') id = item;
    else if (typeof item === 'object') id = item.id || item.name;
    if (!id) continue;
    const w = weapons.find((x) => x.id === id || x.name === id);
    if (!w || !w.type) continue;
    const t = w.type.toLowerCase();
    if (t.includes('rifle')) cats.add('Rifles');
    else if (t.includes('shotgun')) cats.add('Shotguns');
    else if (t.includes('handgun')) cats.add('Handguns');
    else if (t.includes('bow')) cats.add('Bows');
  }
  return Array.from(cats);
}

export default function SightsPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-green-800">Sights & Optics</h1>

      <p className="mb-4 text-gray-700">
        Sights are weapon modifications which improve aiming and/or accuracy. Some sights have improved
        magnification which make the animal appear closer. This allows for more accurate shots on smaller
        animals such as <Link to="/animals/Red-Fox" className="text-blue-600">Red Foxes</Link> and{' '}
        <Link to="/animals/Roe-Deer" className="text-blue-600">Roe Deer</Link> at longer ranges.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {sights.map((sight) => {
          const cats = categoriesForSight(sight);
          return (
            <div key={sight.name} className="block p-4 bg-white rounded-lg hover:shadow-md transition">
              <div className="flex items-center justify-between">
                <Link to={`/weapons/sights/${slug(sight.name)}`} className="text-lg font-medium text-green-800 hover:underline">
                  {sight.name}
                </Link>

                {cats.length > 0 && (
                  <div className="text-sm text-gray-500 ml-6 whitespace-nowrap">{cats.join(', ')}</div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-green-800">Rifle Sights</h2>

      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Sight</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Magnification</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Price</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Weight</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Score</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            <tr>
              <td className="px-4 py-3 text-sm text-gray-800"><Link to={`/weapons/sights/${slug('Tru-Vision Tritium (Model R4570)')}`} className="text-green-800 hover:underline">Tru-Vision Tritium Sights (Model R4570)</Link></td>
              <td className="px-4 py-3 text-sm text-gray-800">1x</td>
              <td className="px-4 py-3 text-sm text-gray-800">3000</td>
              <td className="px-4 py-3 text-sm text-gray-800">0</td>
              <td className="px-4 py-3 text-sm text-gray-800">3243</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm text-gray-800"><Link to={`/weapons/sights/${slug('Tru-Vision Tritium (Model R3006)')}`} className="text-green-800 hover:underline">Tru-Vision Tritium Sights (Model R3006)</Link></td>
              <td className="px-4 py-3 text-sm text-gray-800">1x</td>
              <td className="px-4 py-3 text-sm text-gray-800">3000</td>
              <td className="px-4 py-3 text-sm text-gray-800">0</td>
              <td className="px-4 py-3 text-sm text-gray-800">N/A</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm text-gray-800"><Link to={`/weapons/sights/${slug('Tru-Vision Tritium (Model R338)')}`} className="text-green-800 hover:underline">Tru-Vision Tritium Sights (Model R338)</Link></td>
              <td className="px-4 py-3 text-sm text-gray-800">1x</td>
              <td className="px-4 py-3 text-sm text-gray-800">3000</td>
              <td className="px-4 py-3 text-sm text-gray-800">0</td>
              <td className="px-4 py-3 text-sm text-gray-800">4829</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm text-gray-800"><Link to={`/weapons/sights/${slug('Tru-Vision Tritium (Model R270)')}`} className="text-green-800 hover:underline">Tru-Vision Tritium Sights (Model R270)</Link></td>
              <td className="px-4 py-3 text-sm text-gray-800">1x</td>
              <td className="px-4 py-3 text-sm text-gray-800">3000</td>
              <td className="px-4 py-3 text-sm text-gray-800">0</td>
              <td className="px-4 py-3 text-sm text-gray-800">1235</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm text-gray-800"><Link to={`/weapons/sights/${slug('Tru-Vision Tritium (Model R243)')}`} className="text-green-800 hover:underline">Tru-Vision Tritium Sights (Model R243)</Link></td>
              <td className="px-4 py-3 text-sm text-gray-800">1x</td>
              <td className="px-4 py-3 text-sm text-gray-800">3000</td>
              <td className="px-4 py-3 text-sm text-gray-800">0</td>
              <td className="px-4 py-3 text-sm text-gray-800">150</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm text-gray-800"><Link to={`/weapons/sights/${slug('Tru-Vision Tritium (Model R223)')}`} className="text-green-800 hover:underline">Tru-Vision Tritium Sights (Model R223)</Link></td>
              <td className="px-4 py-3 text-sm text-gray-800">1x</td>
              <td className="px-4 py-3 text-sm text-gray-800">3000</td>
              <td className="px-4 py-3 text-sm text-gray-800">0</td>
              <td className="px-4 py-3 text-sm text-gray-800">426</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm text-gray-800"><Link to={`/weapons/sights/${slug('Tru-Vision Tritium (Model R65)')}`} className="text-green-800 hover:underline">Tru-Vision Tritium Sights (Model R65)</Link></td>
              <td className="px-4 py-3 text-sm text-gray-800">1x</td>
              <td className="px-4 py-3 text-sm text-gray-800">3000</td>
              <td className="px-4 py-3 text-sm text-gray-800">0</td>
              <td className="px-4 py-3 text-sm text-gray-800">1066</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm text-gray-800"><Link to={`/weapons/sights/${slug('Tru-Vision Tritium (Model R30)')}`} className="text-green-800 hover:underline">Tru-Vision Tritium Sights (Model R30)</Link></td>
              <td className="px-4 py-3 text-sm text-gray-800">1x</td>
              <td className="px-4 py-3 text-sm text-gray-800">3000</td>
              <td className="px-4 py-3 text-sm text-gray-800">0</td>
              <td className="px-4 py-3 text-sm text-gray-800">1573</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm text-gray-800"><Link to={`/weapons/sights/${slug('Tru-Vision Tritium (Model R7)')}`} className="text-green-800 hover:underline">Tru-Vision Tritium Sights (Model R7)</Link></td>
              <td className="px-4 py-3 text-sm text-gray-800">1x</td>
              <td className="px-4 py-3 text-sm text-gray-800">3000</td>
              <td className="px-4 py-3 text-sm text-gray-800">0</td>
              <td className="px-4 py-3 text-sm text-gray-800">2314</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm text-gray-800"><Link to={`/weapons/sights/${slug('Tru-Vision Tritium (Model AR45)')}`} className="text-green-800 hover:underline">Tru-Vision Tritium Sights (Model AR45)</Link></td>
              <td className="px-4 py-3 text-sm text-gray-800">1x</td>
              <td className="px-4 py-3 text-sm text-gray-800">3000</td>
              <td className="px-4 py-3 text-sm text-gray-800">0</td>
              <td className="px-4 py-3 text-sm text-gray-800">N/A</td>
            </tr>

            <tr>
              <td className="px-4 py-3 text-sm text-gray-800"><Link to={`/weapons/sights/${slug('Odin 4-12x33 Rifle Scope')}`} className="text-green-800 hover:underline">Odin 4-12x33 Rifle Scope</Link></td>
              <td className="px-4 py-3 text-sm text-gray-800">4-12x</td>
              <td className="px-4 py-3 text-sm text-gray-800">Free</td>
              <td className="px-4 py-3 text-sm text-gray-800">0.5</td>
              <td className="px-4 py-3 text-sm text-gray-800">N/A</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm text-gray-800"><Link to={`/weapons/sights/${slug('Marksman Exakt Reflex Sight')}`} className="text-green-800 hover:underline">Marksman Exakt Reflex Sight</Link></td>
              <td className="px-4 py-3 text-sm text-gray-800">1x</td>
              <td className="px-4 py-3 text-sm text-gray-800">8500</td>
              <td className="px-4 py-3 text-sm text-gray-800">0.5</td>
              <td className="px-4 py-3 text-sm text-gray-800">6290</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm text-gray-800"><Link to={`/weapons/sights/${slug('Hyperion 4-8x42 Rifle Scope')}`} className="text-green-800 hover:underline">Hyperion 4-8x42 Rifle Scope</Link></td>
              <td className="px-4 py-3 text-sm text-gray-800">4–8x</td>
              <td className="px-4 py-3 text-sm text-gray-800">12000</td>
              <td className="px-4 py-3 text-sm text-gray-800">0.5</td>
              <td className="px-4 py-3 text-sm text-gray-800">901</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm text-gray-800"><Link to={`/weapons/sights/${slug('Helios 4-8x32 Rifle Scope')}`} className="text-green-800 hover:underline">Helios 4-8x32 Rifle Scope</Link></td>
              <td className="px-4 py-3 text-sm text-gray-800">4–8x</td>
              <td className="px-4 py-3 text-sm text-gray-800">24000</td>
              <td className="px-4 py-3 text-sm text-gray-800">0.5</td>
              <td className="px-4 py-3 text-sm text-gray-800">2743</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm text-gray-800"><Link to={`/weapons/sights/${slug('GenZero 1-4x20 Night Vision Rifle Scope')}`} className="text-green-800 hover:underline">GenZero 1-4x20 Night Vision Rifle Scope</Link></td>
              <td className="px-4 py-3 text-sm text-gray-800">1–4x</td>
              <td className="px-4 py-3 text-sm text-gray-800">FREE</td>
              <td className="px-4 py-3 text-sm text-gray-800">0.5</td>
              <td className="px-4 py-3 text-sm text-gray-800">N/A</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm text-gray-800"><Link to={`/weapons/sights/${slug('Galileo 4-8x32 Muzzleloader Scope')}`} className="text-green-800 hover:underline">Galileo 4-8x32 Muzzleloader Scope</Link></td>
              <td className="px-4 py-3 text-sm text-gray-800">4–8x</td>
              <td className="px-4 py-3 text-sm text-gray-800">FREE</td>
              <td className="px-4 py-3 text-sm text-gray-800">0.5</td>
              <td className="px-4 py-3 text-sm text-gray-800">N/A</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm text-gray-800"><Link to={`/weapons/sights/${slug('Ascent 1-4x24 Rifle Scope')}`} className="text-green-800 hover:underline">Ascent 1-4x24 Rifle Scope</Link></td>
              <td className="px-4 py-3 text-sm text-gray-800">1–4x</td>
              <td className="px-4 py-3 text-sm text-gray-800">FREE</td>
              <td className="px-4 py-3 text-sm text-gray-800">0.5</td>
              <td className="px-4 py-3 text-sm text-gray-800">N/A</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm text-gray-800"><Link to={`/weapons/sights/${slug('Argus 8-16x50 Rifle Scope')}`} className="text-green-800 hover:underline">Argus 8-16x50 Rifle Scope</Link></td>
              <td className="px-4 py-3 text-sm text-gray-800">8–16x</td>
              <td className="px-4 py-3 text-sm text-gray-800">36000</td>
              <td className="px-4 py-3 text-sm text-gray-800">0.5</td>
              <td className="px-4 py-3 text-sm text-gray-800">3914</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm text-gray-800"><Link to={`/weapons/sights/${slug('Angler 4-8x100 Night Vision Rifle Scope')}`} className="text-green-800 hover:underline">Angler 4-8x100 Night Vision Rifle Scope</Link></td>
              <td className="px-4 py-3 text-sm text-gray-800">4-8x</td>
              <td className="px-4 py-3 text-sm text-gray-800">Free</td>
              <td className="px-4 py-3 text-sm text-gray-800">0.5</td>
              <td className="px-4 py-3 text-sm text-gray-800">N/A</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-green-800">Shotgun & Drilling Sights</h2>

      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Sight</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Magnification</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Price</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Weight</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Score</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            <tr>
              <td className="px-4 py-3 text-sm text-gray-800"><Link to={`/weapons/sights/${slug('Falcon 3-9x44 Drilling Scope')}`} className="text-green-800 hover:underline">Falcon 3-9x44 Drilling Scope</Link></td>
              <td className="px-4 py-3 text-sm text-gray-800">3–9x</td>
              <td className="px-4 py-3 text-sm text-gray-800">FREE</td>
              <td className="px-4 py-3 text-sm text-gray-800">0.5</td>
              <td className="px-4 py-3 text-sm text-gray-800">N/A</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm text-gray-800"><Link to={`/weapons/sights/${slug('Hermes 3-7x33 Handgun-Shotgun Scope')}`} className="text-green-800 hover:underline">Hermes 3-7x33 Handgun-Shotgun Scope</Link></td>
              <td className="px-4 py-3 text-sm text-gray-800">3-7x</td>
              <td className="px-4 py-3 text-sm text-gray-800">Free</td>
              <td className="px-4 py-3 text-sm text-gray-800">0.5</td>
              <td className="px-4 py-3 text-sm text-gray-800">N/A</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm text-gray-800"><Link to={`/weapons/sights/${slug('Tru-Vision Tritium (Model SOU12)')}`} className="text-green-800 hover:underline">Tru-Vision Tritium Sights (Model SOU12)</Link></td>
              <td className="px-4 py-3 text-sm text-gray-800">1x</td>
              <td className="px-4 py-3 text-sm text-gray-800">3000</td>
              <td className="px-4 py-3 text-sm text-gray-800">0</td>
              <td className="px-4 py-3 text-sm text-gray-800">280</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm text-gray-800"><Link to={`/weapons/sights/${slug('Tru-Vision Tritium (Model SPA12)')}`} className="text-green-800 hover:underline">Tru-Vision Tritium Sights (Model SPA12)</Link></td>
              <td className="px-4 py-3 text-sm text-gray-800">1x</td>
              <td className="px-4 py-3 text-sm text-gray-800">3000</td>
              <td className="px-4 py-3 text-sm text-gray-800">0</td>
              <td className="px-4 py-3 text-sm text-gray-800">2314</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm text-gray-800"><Link to={`/weapons/sights/${slug('Meridian 1-4x20 Shotgun Scope')}`} className="text-green-800 hover:underline">Meridian 1-4x20 Shotgun Scope</Link></td>
              <td className="px-4 py-3 text-sm text-gray-800">1–4x</td>
              <td className="px-4 py-3 text-sm text-gray-800">12000</td>
              <td className="px-4 py-3 text-sm text-gray-800">0.5</td>
              <td className="px-4 py-3 text-sm text-gray-800">5406</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <h2 className="text-2xl font-semibold mt-8 mb-4 text-green-800">Bow & Crossbow Sights</h2>

      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Sight</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Magnification</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Price</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Weight</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Score</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            <tr>
              <td className="px-4 py-3 text-sm text-gray-800"><Link to={`/weapons/sights/${slug('Brightsight Rangefinder Bow Sight')}`} className="text-green-800 hover:underline">Brightsight Rangefinder Bow Sight</Link></td>
              <td className="px-4 py-3 text-sm text-gray-800">1x</td>
              <td className="px-4 py-3 text-sm text-gray-800">FREE</td>
              <td className="px-4 py-3 text-sm text-gray-800">2</td>
              <td className="px-4 py-3 text-sm text-gray-800">N/A</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm text-gray-800"><Link to={`/weapons/sights/${slug('Brightsight Single-Pin Sight')}`} className="text-green-800 hover:underline">Brightsight Single-Pin Sight</Link></td>
              <td className="px-4 py-3 text-sm text-gray-800">1x</td>
              <td className="px-4 py-3 text-sm text-gray-800">3000</td>
              <td className="px-4 py-3 text-sm text-gray-800">0.5</td>
              <td className="px-4 py-3 text-sm text-gray-800">426</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm text-gray-800"><Link to={`/weapons/sights/${slug('Hawken 1-5x30 Crossbow Scope')}`} className="text-green-800 hover:underline">Hawken 1-5x30 Crossbow Scope</Link></td>
              <td className="px-4 py-3 text-sm text-gray-800">1–5x</td>
              <td className="px-4 py-3 text-sm text-gray-800">FREE</td>
              <td className="px-4 py-3 text-sm text-gray-800">0.5</td>
              <td className="px-4 py-3 text-sm text-gray-800">N/A</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm text-gray-800"><Link to={`/weapons/sights/${slug('Swift-Mark 3 Bow Sight')}`} className="text-green-800 hover:underline">Swift-Mark 3 Bow Sight</Link></td>
              <td className="px-4 py-3 text-sm text-gray-800">1x</td>
              <td className="px-4 py-3 text-sm text-gray-800">12000</td>
              <td className="px-4 py-3 text-sm text-gray-800">0.5</td>
              <td className="px-4 py-3 text-sm text-gray-800">2523</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm text-gray-800"><Link to={`/weapons/sights/${slug('Swift-Mark 5 Bow Sight')}`} className="text-green-800 hover:underline">Swift-Mark 5 Bow Sight</Link></td>
              <td className="px-4 py-3 text-sm text-gray-800">1x</td>
              <td className="px-4 py-3 text-sm text-gray-800">24000</td>
              <td className="px-4 py-3 text-sm text-gray-800">0.5</td>
              <td className="px-4 py-3 text-sm text-gray-800">5406</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-green-800">Handgun & Shotgun Sights</h2>

      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Sight</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Magnification</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Price</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Weight</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Score</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            <tr>
              <td className="px-4 py-3 text-sm text-gray-800"><Link to={`/weapons/sights/${slug('Goshawk Redeye 2-4x20 Handgun Scope')}`} className="text-green-800 hover:underline">Goshawk Redeye 2-4x20 Handgun Scope</Link></td>
              <td className="px-4 py-3 text-sm text-gray-800">2–4x</td>
              <td className="px-4 py-3 text-sm text-gray-800">12000</td>
              <td className="px-4 py-3 text-sm text-gray-800">0.5</td>
              <td className="px-4 py-3 text-sm text-gray-800">2115</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm text-gray-800"><Link to={`/weapons/sights/${slug('Hermes 3-7x33 Handgun-Shotgun Scope')}`} className="text-green-800 hover:underline">Hermes 3-7x33 Handgun-Shotgun Scope</Link></td>
              <td className="px-4 py-3 text-sm text-gray-800">3-7x</td>
              <td className="px-4 py-3 text-sm text-gray-800">Free</td>
              <td className="px-4 py-3 text-sm text-gray-800">0.5</td>
              <td className="px-4 py-3 text-sm text-gray-800">N/A</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm text-gray-800"><Link to={`/weapons/sights/${slug('Red Raptor Reflex Sight')}`} className="text-green-800 hover:underline">Red Raptor Reflex Sight</Link></td>
              <td className="px-4 py-3 text-sm text-gray-800">1x</td>
              <td className="px-4 py-3 text-sm text-gray-800">6000</td>
              <td className="px-4 py-3 text-sm text-gray-800">0.5</td>
              <td className="px-4 py-3 text-sm text-gray-800">426</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm text-gray-800"><Link to={`/weapons/sights/${slug('Tru-Vision Tritium (Model H22)')}`} className="text-green-800 hover:underline">Tru-Vision Tritium Sights (Model H22)</Link></td>
              <td className="px-4 py-3 text-sm text-gray-800">1x</td>
              <td className="px-4 py-3 text-sm text-gray-800">3000</td>
              <td className="px-4 py-3 text-sm text-gray-800">0</td>
              <td className="px-4 py-3 text-sm text-gray-800">N/A</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm text-gray-800"><Link to={`/weapons/sights/${slug('Tru-Vision Tritium (Model H44)')}`} className="text-green-800 hover:underline">Tru-Vision Tritium Sights (Model H44)</Link></td>
              <td className="px-4 py-3 text-sm text-gray-800">1x</td>
              <td className="px-4 py-3 text-sm text-gray-800">3000</td>
              <td className="px-4 py-3 text-sm text-gray-800">0</td>
              <td className="px-4 py-3 text-sm text-gray-800">1573</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm text-gray-800"><Link to={`/weapons/sights/${slug('Tru-Vision Tritium (Model H357)')}`} className="text-green-800 hover:underline">Tru-Vision Tritium Sights (Model H357)</Link></td>
              <td className="px-4 py-3 text-sm text-gray-800">1x</td>
              <td className="px-4 py-3 text-sm text-gray-800">3000</td>
              <td className="px-4 py-3 text-sm text-gray-800">0</td>
              <td className="px-4 py-3 text-sm text-gray-800">150</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm text-gray-800"><Link to={`/weapons/sights/${slug('Tru-Vision Tritium (Model H454)')}`} className="text-green-800 hover:underline">Tru-Vision Tritium Sights (Model H454)</Link></td>
              <td className="px-4 py-3 text-sm text-gray-800">1x</td>
              <td className="px-4 py-3 text-sm text-gray-800">3000</td>
              <td className="px-4 py-3 text-sm text-gray-800">0</td>
              <td className="px-4 py-3 text-sm text-gray-800">3914</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
