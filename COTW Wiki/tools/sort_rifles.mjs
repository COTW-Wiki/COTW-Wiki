import fs from 'fs';
import path from 'path';

const weaponsPath = path.join(process.cwd(), 'src', 'data', 'weapons.js');
const marker = 'export const weapons =';

let content = fs.readFileSync(weaponsPath, 'utf8');
const idx = content.indexOf(marker);
if (idx === -1) {
  console.error('Unable to find weapons export marker in weapons.js');
  process.exit(1);
}

const arrStart = content.indexOf('[', idx);
if (arrStart === -1) {
  console.error('Unable to find start of array in weapons.js');
  process.exit(1);
}

// Find matching closing bracket for the weapons array (respecting strings)
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

if (i >= content.length) {
  console.error('Unable to find end of weapons array');
  process.exit(1);
}

const arrEnd = i;
const arrStr = content.slice(arrStart, arrEnd + 1);

let weaponsArray;
try {
  // Evaluate the array literal safely
  weaponsArray = eval('(' + arrStr + ')');
} catch (e) {
  console.error('Failed to parse weapons array:', e);
  process.exit(1);
}

if (!Array.isArray(weaponsArray)) {
  console.error('Parsed weapons data is not an array');
  process.exit(1);
}

const rifles = weaponsArray.filter(w => w.type === 'Rifle').slice().sort((a, b) => a.name.localeCompare(b.name));
const nonRifles = weaponsArray.filter(w => w.type !== 'Rifle');
const newArray = rifles.concat(nonRifles);

const newArrayStr = JSON.stringify(newArray, null, 2);
const newContent = content.slice(0, idx) + marker + ' ' + newArrayStr + ';\n';

fs.writeFileSync(weaponsPath, newContent, 'utf8');
console.log('Sorted rifles and updated', weaponsPath);
