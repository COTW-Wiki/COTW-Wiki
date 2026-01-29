import fs from 'fs';
import path from 'path';

const file = path.resolve(process.cwd(), 'src', 'data', 'weaponAmmoMap.js');
const txt = fs.readFileSync(file, 'utf8');

const keyRe = /^\s*"([^"]+)"\s*:/gm;
const counts = new Map();
let m;
while ((m = keyRe.exec(txt)) !== null) {
  const k = m[1];
  counts.set(k, (counts.get(k) || 0) + 1);
}

const duplicates = [...counts.entries()].filter(([k,v]) => v > 1);
if (duplicates.length === 0) {
  console.log('No duplicate keys found in weaponAmmoMap.js');
  process.exit(0);
} else {
  console.log('Duplicate keys found:');
  for (const [k,v] of duplicates) console.log(`${k}: ${v} times`);
  process.exit(0);
}
