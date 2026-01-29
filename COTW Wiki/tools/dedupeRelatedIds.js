import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ammoPath = path.join(__dirname, '..', 'src', 'data', 'ammunition.js');

async function run() {
  const mod = await import(`file://${ammoPath}`);
  const ammunition = mod.default || mod.ammo || mod;

  if (!Array.isArray(ammunition)) {
    console.error('ammunition export is not an array');
    process.exit(1);
  }

  let changed = false;

  for (const a of ammunition) {
    if (!Array.isArray(a.relatedIds)) continue;
    const seen = new Set();
    const deduped = [];
    for (const id of a.relatedIds) {
      if (!seen.has(id)) {
        seen.add(id);
        deduped.push(id);
      }
    }
    if (deduped.length !== a.relatedIds.length) {
      a.relatedIds = deduped;
      changed = true;
      console.log(`Deduped relatedIds for: ${a.id}`);
    }
  }

  if (!changed) {
    console.log('No changes required; all relatedIds already unique.');
    return;
  }

  // Rebuild JS file content
  const header = `// Auto-generated initial ammunition batch (8 items) imported from fandom (structured facts only)
// Fields: id (slug), name, category, description (short factual), images, value, weight, stats, relatedIds\n\n`;
  const body = `const ammunition = ${JSON.stringify(ammunition, null, 2)};\n\nexport const ammo = ammunition;\nexport default ammunition;\n`;

  fs.writeFileSync(ammoPath, header + body, 'utf8');
  console.log('Wrote cleaned ammunition.js');
}

run().catch((err) => { console.error(err); process.exit(1); });
