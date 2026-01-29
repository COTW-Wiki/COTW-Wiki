import fs from 'fs';
import path from 'path';

const root = process.cwd();
const weaponsPath = path.join(root, 'src', 'data', 'weapons.js');
const ammoPath = path.join(root, 'src', 'data', 'ammunition.js');

async function run() {
  const weaponsModule = await import(`file://${weaponsPath}`);
  const ammoModule = await import(`file://${ammoPath}`);

  const weapons = Array.isArray(weaponsModule.weapons) ? JSON.parse(JSON.stringify(weaponsModule.weapons)) : [];
  const ammunition = Array.isArray(ammoModule.default) ? JSON.parse(JSON.stringify(ammoModule.default)) : [];
  const ammoMeta = Array.isArray(ammoModule.ammo) ? JSON.parse(JSON.stringify(ammoModule.ammo)) : [];

  // build lookup of weapon id -> weapon object index
  const weaponsById = new Map();
  for (const w of weapons) weaponsById.set(w.id, w);

  // clear existing compatibleAmmo arrays
  for (const w of weapons) w.compatibleAmmo = [];

  // helper to add mapping from ammo item to weapon id
  function registerAmmo(ammoItem) {
    const ammoId = ammoItem.id || ammoItem.name || null;
    if (!ammoId) return;
    const related = Array.isArray(ammoItem.relatedIds) ? ammoItem.relatedIds : [];
    for (const rid of related) {
      const w = weaponsById.get(rid);
      if (w && !w.compatibleAmmo.includes(ammoId)) w.compatibleAmmo.push(ammoId);
    }
  }

  for (const a of ammunition) registerAmmo(a);
  for (const a of ammoMeta) registerAmmo(a);

  // backup original
  fs.copyFileSync(weaponsPath, weaponsPath + '.bak');

  // write updated weapons.js
  const out = 'export const weapons = ' + JSON.stringify(weapons, null, 2) + ';\n';
  fs.writeFileSync(weaponsPath, out, 'utf8');
  console.log('WROTE_WEAPONS_WITH_COMPATIBLE_AMMO');
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
