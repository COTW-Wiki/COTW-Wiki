import ammunition from '../src/data/ammunition.js';

const missing = [];
for (const item of ammunition) {
  const id = item.id || item.name || '<unknown>';
  if (!Object.prototype.hasOwnProperty.call(item, 'description') || typeof item.description !== 'string' || item.description.trim() === '') {
    missing.push(id);
  }
}
if (missing.length === 0) {
  console.log('OK: All ammo entries have non-empty descriptions.');
  process.exit(0);
} else {
  console.log('Missing or empty descriptions for the following ammo entries:');
  for (const id of missing) console.log('- ' + id);
  process.exit(2);
}
