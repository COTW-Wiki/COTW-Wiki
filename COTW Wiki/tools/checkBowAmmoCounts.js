import { pathToFileURL } from 'url';
import path from 'path';

const root = process.cwd();
const weaponsPath = path.join(root, 'src', 'data', 'weapons.js');
const mapPath = path.join(root, 'src', 'data', 'weaponAmmoMap.js');

const weaponsModule = await import(pathToFileURL(weaponsPath).href);
const weaponAmmoMap = await import(pathToFileURL(mapPath).href);

const weapons = weaponsModule.weapons || [];
const map = weaponAmmoMap.default || {};

const bows = weapons.filter(w => (w.type || '').toLowerCase() === 'bow');

const shortLists = [];
for (const b of bows) {
  const arr = Array.isArray(map[b.id]) ? map[b.id] : [];
  if (arr.length <= 2) shortLists.push({ id: b.id, name: b.name, count: arr.length, items: arr });
}

if (shortLists.length === 0) {
  console.log('All bows have 3+ ammo types listed in weaponAmmoMap.js');
} else {
  console.log('Bows with 1 or 2 ammo types in weaponAmmoMap.js:');
  for (const s of shortLists) {
    console.log(`- ${s.id} (${s.name}): ${s.count} -> ${JSON.stringify(s.items)}`);
  }
}
