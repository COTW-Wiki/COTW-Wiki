import ammunition from '../src/data/ammunition.js';

const weapons = ['Cacciatore_12G', 'Caversham_Steward_12G'];

const byWeapon = {};
for (const w of weapons) byWeapon[w] = [];

for (const ammo of (ammunition || [])) {
  if (!Array.isArray(ammo.relatedIds)) continue;
  for (const w of weapons) {
    if (ammo.relatedIds.includes(w)) {
      byWeapon[w].push({
        id: ammo.id,
        name: ammo.name,
        description: ammo.description || '',
        stats: ammo.stats || {},
        images: ammo.images || []
      });
    }
  }
}

console.log(JSON.stringify(byWeapon, null, 2));
