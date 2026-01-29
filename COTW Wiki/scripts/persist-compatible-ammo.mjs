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

  // Build id -> display name map from both ammo exports
  const ammoNameById = new Map();
  for (const a of ammunition) {
    const id = a.id || a.name;
    if (id) ammoNameById.set(id, a.name || id);
  }
  for (const a of ammoMeta) {
    const id = a.id || a.name;
    if (id && !ammoNameById.has(id)) ammoNameById.set(id, a.name || id);
  }

  // Transform weapons.compatibleAmmo entries
  for (const w of weapons) {
    if (!Array.isArray(w.compatibleAmmo)) {
      w.compatibleAmmo = [];
      continue;
    }

    const out = [];
    for (const aid of w.compatibleAmmo) {
      const name = ammoNameById.get(aid) || aid;
      out.push({ id: aid, name });
    }
    w.compatibleAmmo = out;
  }

  // backup original
  fs.copyFileSync(weaponsPath, weaponsPath + '.bak2');

  // write updated weapons.js
  const out = 'export const weapons = ' + JSON.stringify(weapons, null, 2) + ';\n';
  fs.writeFileSync(weaponsPath, out, 'utf8');
  console.log('WROTE_WEAPONS_WITH_COMPATIBLE_AMMO_OBJECTS');
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
