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

const types = weapons.map(w=>w.type);
// counts
let pos = 0;
function countBlock(type){ let c=0; while(pos+ c < types.length && types[pos+c]===type) c++; return c; }
// check for Rifle block
pos = 0; const riflesCount = countBlock('Rifle'); pos += riflesCount; const shotgunsCount = countBlock('Shotgun'); pos += shotgunsCount; const bowsCount = countBlock('Bow'); pos += bowsCount; const handgunsCount = countBlock('Handgun'); pos += handgunsCount;

function isSortedBlock(start, count){ const block = weapons.slice(start, start+count); const names = block.map(b=>b.name); const sorted = names.slice().sort((a,b)=>a.localeCompare(b)); return names.every((n,i)=>n===sorted[i]); }

const riflesSorted = isSortedBlock(0, riflesCount);
const shotgunsSorted = isSortedBlock(riflesCount, shotgunsCount);
const bowsSorted = isSortedBlock(riflesCount+shotgunsCount, bowsCount);
const handgunsSorted = isSortedBlock(riflesCount+shotgunsCount+bowsCount, handgunsCount);

console.log('Rifles count (top block):', riflesCount, 'sorted?', riflesSorted);
console.log('Shotguns count (2nd block):', shotgunsCount, 'sorted?', shotgunsSorted);
console.log('Bows count (3rd block):', bowsCount, 'sorted?', bowsSorted);
console.log('Handguns count (4th block):', handgunsCount, 'sorted?', handgunsSorted);

if (riflesCount>0 && shotgunsCount>0 && bowsCount>0 && handgunsCount>0 && riflesSorted && shotgunsSorted && bowsSorted && handgunsSorted) {
  console.log('\n✅ File ordering matches rifles → shotguns → bows → handguns (each A→Z).');
} else {
  console.log('\n❌ File ordering DID NOT match the requested layout.');
}
