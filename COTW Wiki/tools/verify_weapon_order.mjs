import fs from 'fs';
import path from 'path';

const weaponsPath = path.join(process.cwd(), 'src', 'data', 'weapons.js');
const content = fs.readFileSync(weaponsPath, 'utf8');
const marker = 'export const weapons =';
const idx = content.indexOf(marker);
if (idx === -1) { console.error('weapons export not found'); process.exit(1); }
const arrStart = content.indexOf('[', idx);
let i = arrStart; let depth = 0; let inString = false; let stringChar = null; let escape = false;
for (; i < content.length; i++) {
  const ch = content[i];
  if (escape) { escape = false; continue; }
  if (ch === '\\') { escape = true; continue; }
  if (!inString && (ch === '"' || ch === "'")) { inString = true; stringChar = ch; continue; }
  if (inString && ch === stringChar) { inString = false; stringChar = null; continue; }
  if (inString) continue;
  if (ch === '[') depth++; if (ch === ']') { depth--; if (depth === 0) break; }
}
const arrEnd = i; const arrStr = content.slice(arrStart, arrEnd + 1);
let weapons; try { weapons = eval('(' + arrStr + ')'); } catch (e) { console.error('parse error', e); process.exit(1); }

const types = weapons.map(w => w.type);
// Find shotgun block at top
let shotgunsCount = 0; for (let j=0;j<types.length && types[j]==='Shotgun'; j++) shotgunsCount++;
let riflesCount = 0; for (let j=shotgunsCount;j<types.length && types[j]==='Rifle'; j++) riflesCount++;

const shotguns = weapons.slice(0, shotgunsCount);
const rifles = weapons.slice(shotgunsCount, shotgunsCount+riflesCount);
const others = weapons.slice(shotgunsCount+riflesCount);

function isSortedByName(arr){ const names = arr.map(a=>a.name); const s = names.slice().sort((a,b)=>a.localeCompare(b)); return names.every((n,i)=>n===s[i]); }

console.log('Shotguns on top count:', shotgunsCount);
console.log('Rifles immediately after shotguns count:', riflesCount);
console.log('Other weapons count:', others.length);
console.log('\nShotguns sorted A->Z?', isSortedByName(shotguns)?'YES':'NO');
console.log('Rifles sorted A->Z?', isSortedByName(rifles)?'YES':'NO');

if (!isSortedByName(shotguns)) {
  console.log('\nFirst few shotgun names:'); console.log(shotguns.map(s=>s.name).slice(0,10).join('\n'));
}
if (!isSortedByName(rifles)) {
  console.log('\nFirst few rifle names:'); console.log(rifles.map(r=>r.name).slice(0,10).join('\n'));
}

if (shotgunsCount===0) console.log('\nNote: No shotguns at top.');

if (shotgunsCount>0 && riflesCount>0 && isSortedByName(shotguns) && isSortedByName(rifles)) {
  console.log('\n✅ File ordering matches desired layout: shotguns (A→Z) on top, then rifles (A→Z), then others.');
} else {
  console.log('\n❌ File ordering does NOT match desired layout.');
}
