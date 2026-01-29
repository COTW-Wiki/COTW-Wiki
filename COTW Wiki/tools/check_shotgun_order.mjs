import fs from 'fs';
import path from 'path';

const weaponsPath = path.join(process.cwd(), 'src', 'data', 'weapons.js');
const content = fs.readFileSync(weaponsPath, 'utf8');
const marker = 'export const weapons =';
const idx = content.indexOf(marker);
if (idx === -1) {
  console.error('weapons export not found');
  process.exit(1);
}
const arrStart = content.indexOf('[', idx);
let i = arrStart;
let depth = 0;
let inString = false;
let stringChar = null;
let escape = false;
for (; i < content.length; i++) {
  const ch = content[i];
  if (escape) { escape = false; continue; }
  if (ch === '\\') { escape = true; continue; }
  if (!inString && (ch === '"' || ch === "'")) { inString = true; stringChar = ch; continue; }
  if (inString && ch === stringChar) { inString = false; stringChar = null; continue; }
  if (inString) continue;
  if (ch === '[') depth++;
  if (ch === ']') { depth--; if (depth === 0) break; }
}
const arrEnd = i;
const arrStr = content.slice(arrStart, arrEnd + 1);
let weapons;
try { weapons = eval('(' + arrStr + ')'); } catch (e) { console.error('parse error', e); process.exit(1); }
const shotguns = weapons.filter(w => w.type === 'Shotgun');
const shotgunNames = shotguns.map(r => r.name);
const sorted = shotgunNames.slice().sort((a,b)=>a.localeCompare(b));
const isSorted = shotgunNames.every((n,i)=>n===sorted[i]);
console.log('Shotgun count:', shotguns.length);
console.log('First shotguns (top 10):');
console.log(shotgunNames.slice(0,10).join('\n'));
console.log('\nLast shotguns (bottom 10 of shotgun block):');
console.log(shotgunNames.slice(-10).join('\n'));
console.log('\nIs shotgun block sorted A->Z?', isSorted? 'YES':'NO');
if (!isSorted) {
  console.log('\nExpected order (first 10):');
  console.log(sorted.slice(0,10).join('\n'));
}
