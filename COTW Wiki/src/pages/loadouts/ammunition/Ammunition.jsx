import React from 'react';
import ammunition from '../../../data/ammunition';
import { Link } from 'react-router-dom';

function animalLink(name) {
  return `/animals/${encodeURIComponent(name.replace(/\s+/g, '-'))}`;
}

function weaponLink(name) {
  // most weapon ids use underscores for spaces
  return `/weapons/${encodeURIComponent(name.replace(/\s+/g, '_'))}`;
}

function deriveCaliber(a) {
  if (a.caliber) return a.caliber;
  const n = (a.name || '').trim();
  if (!n) return '—';
  const tok = n.split(/\s+/)[0];
  return tok;
}

function renderTable(title, items) {
  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold text-green-800">{title}</h2>
      <div className="mt-2 bg-white rounded shadow overflow-hidden">
        <table className="min-w-full text-sm">
          <thead className="bg-green-50 text-left text-xs">
            <tr>
              <th className="px-3 py-2">Caliber</th>
              <th className="px-3 py-2">Type</th>
              <th className="px-3 py-2">Class</th>
              <th className="px-3 py-2">Range</th>
              <th className="px-3 py-2">Penetration</th>
              <th className="px-3 py-2">Expansion</th>
              <th className="px-3 py-2">Weight</th>
              <th className="px-3 py-2">Price</th>
            </tr>
          </thead>
          <tbody>
            {[...items].sort((x,y) => (x.name||'').localeCompare(y.name||'')).map(a => (
              <tr key={a.id} className="odd:bg-gray-50">
                <td className="px-3 py-2">{deriveCaliber(a)}</td>
                <td className="px-3 py-2">
                  <Link to={`/weapons/ammo/${encodeURIComponent(a.id)}`} className="text-green-800 hover:underline">{a.type || a.category || '—'}</Link>
                </td>
                <td className="px-3 py-2">{a.stats?.class ?? '—'}</td>
                <td className="px-3 py-2">{a.stats?.range ?? '—'}</td>
                <td className="px-3 py-2">{a.stats?.penetration ?? '—'}</td>
                <td className="px-3 py-2">{a.stats?.expansion ?? '—'}</td>
                <td className="px-3 py-2">{a.weight ?? '—'}</td>
                <td className="px-3 py-2">{a.value ?? '—'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function AmmunitionPage() {
  const list = Array.isArray(ammunition) ? ammunition : [];

  const byCategory = { Rifle: [], Shotgun: [], Handgun: [], Bow: [] };

  list.forEach(a => {
    const cat = (a.category || '').toLowerCase();
    const id = (a.id || '').toLowerCase();
    const type = (a.type || '').toLowerCase();

    // Birdshot should always be classified as Shotgun
    if (type.includes('bird') || id.includes('bird') || id.includes('birdshot')) {
      byCategory.Shotgun.push(a);
      return;
    }

    if (cat.includes('shot') || id.includes('buck') || id.includes('slug')) {
      byCategory.Shotgun.push(a);
    } else if (cat.includes('rifle') || id.includes('rifle') || id.match(/\b\d{2,3}\b/)) {
      byCategory.Rifle.push(a);
    } else if (cat.includes('hand') || id.includes('hand') || id.includes('.22') || id.includes('.45') || id.includes('.50')) {
      byCategory.Handgun.push(a);
    } else if (cat.includes('bow') || id.includes('broadhead') || id.includes('arrow')) {
      byCategory.Bow.push(a);
    } else {
      byCategory.Rifle.push(a);
    }
  });

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-green-800">Ammunition</h1>

      <div className="mt-4 mb-6 text-gray-700 bg-gray-50 p-4 rounded">

        <p>
          In theHunter: Call of the Wild, ammunition is vital to more than just the ability to shoot wildlife. Every
          animal has a <Link to="/animals" className="text-green-800 hover:underline">class rating</Link> associated with it, which helps determines appropriate ammunition to use, as it is
          the ammunition that determines whether a shot will be effective, ineffective, or even overkill (see{' '}
          <Link to="/animals/integrity" className="text-green-800 hover:underline">Integrity</Link>). This is shown in the ammunition's info as "recommended class." The <Link to="/weapons" className="text-green-800 hover:underline">weapon</Link> itself has no bearing
          on the ability to kill an animal, outside of the ammunition type it uses.
        </p>

        <p>For most weapons, there is at least two types of ammunition available.</p>

        <p>
          For <Link to="/weapons" className="text-green-800 hover:underline">Rifles</Link> and <Link to="/weapons" className="text-green-800 hover:underline">Pistols</Link>, these are generally divided in two types: ammunition with a high expansion value and
          ammunition with a high penetration value.
        </p>
        <p>
          For <Link to="/weapons" className="text-green-800 hover:underline">Shotguns</Link> and <Link to="/weapons" className="text-green-800 hover:underline">Bows</Link> this isn't really the case. Instead these weapons have even more focus on the animal
          class. They tend to have more versatility when hunting, as you can easily switch from hunting
          <Link to={animalLink('White-tailed Jackrabbit')} className="text-green-800 hover:underline">White-tailed Jackrabbits</Link> (Class 1) to hunting <Link to={animalLink('Roosevelt Elk')} className="text-green-800 hover:underline">Roosevelt Elks</Link> (Class 7) by simply changing ammunition instead
           of switching guns at <Link to="/outposts" className="text-green-800 hover:underline">Outposts</Link>, or carrying multiple.
        </p>

        <p>
          Expansion can cause high damage and severe bleeding, especially on vital hits. However, this is highly
          dependent on achieving enough penetration to reach the vitals. Ammo with high a high expansion value is
          commonly used to ensure a <Link to="/harvest" className="text-green-800 hover:underline">quick kill</Link>.
        </p>

        <p>
          Penetration determines how deep the shot will go before stopping. Ammo with a high penetration value is
          typically used when it is specifically needed (e.g. shooting the front of an animal, or even at a quarter
          from front/rear). Higher penetration ammunition is also useful in situations where you encounter an animal
          which is of a higher class than your current ammunition/<Link to="/weapons" className="text-green-800 hover:underline">weapon</Link>. An example of this is using the <Link to={weaponLink('Ranger .243')} className="text-green-800 hover:underline">Ranger .243</Link>
          rifle, which uses Class 2-6 ammunition, on a <Link to={animalLink('Roosevelt Elk')} className="text-green-800 hover:underline">Roosevelt Elk</Link>, which is a Class 7 animal. In such a situation,
          it is better to use high penetration, typically polymer-tipped ammunition, rather than expansion focused
          ammunition.
        </p>
      </div>

      {renderTable('Rifle', byCategory.Rifle)}
      {renderTable('Shotgun', byCategory.Shotgun)}
      {renderTable('Handgun', byCategory.Handgun)}
      {renderTable('Bow', byCategory.Bow)}
    </div>
  );
}