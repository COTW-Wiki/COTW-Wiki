import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ammoPath = path.resolve(__dirname, '../src/data/ammunition.js');

async function main(){
  const imported = await import(`file://${ammoPath}`);
  const ammo = imported.default || imported.ammo || imported;
  if (!Array.isArray(ammo)) throw new Error('ammo not array');

  const byCategory = { Rifle: [], Shotgun: [], Handgun: [], Bow: [] };

  ammo.forEach(a => {
    const cat = (a.category || '').toLowerCase();
    const id = (a.id || '').toLowerCase();
    const type = (a.type || '').toLowerCase();

    if (type.includes('bird') || id.includes('bird') || id.includes('birdshot')) {
      byCategory.Shotgun.push(a);
      return;
    }

    if (cat.includes('shot') || id.includes('buck') || id.includes('slug')) {
      byCategory.Shotgun.push(a);
    } else if (cat.includes('rifle') || id.includes('rifle') || id.match(/\b\d{2,3}\b/)) {
      byCategory.Rifle.push(a);
    } else if (cat.includes('hand') || id.includes('hand') || id.includes('.22') || id.includes('.45') || id.includes('.50')) {
      byCategory.Handgun.push(a);
    } else if (cat.includes('bow') || id.includes('broadhead') || id.includes('arrow')) {
      byCategory.Bow.push(a);
    } else {
      byCategory.Rifle.push(a);
    }
  });

  const handguns = byCategory.Handgun;

  function suspicious(a){
    const id = (a.id||'').toLowerCase();
    const type = (a.type||'').toLowerCase();
    const name = (a.name||'').toLowerCase();
    // suspect if looks like rifle/shotgun/arrow
    if (id.includes('ga') || id.includes('polymer') || id.includes('mag') || id.includes('.308') || id.includes('.223') || id.includes('.30') || id.includes('rifle')) return true;
    if (type.includes('slug') || type.includes('bird') || type.includes('broadhead') || type.includes('bolt')) return true;
    if (name.includes('gr.') || name.match(/\b\d+\s?gr\b/)) return true; // grain arrows might be suspicious
    return false;
  }

  console.log(`Found ${handguns.length} items classified as Handgun:\n`);
  for (const a of handguns){
    const flag = suspicious(a) ? '⚠️' : 'OK';
    console.log(`${flag} ${a.id} — ${a.name} — type:${a.type || a.category} — category:${a.category}`);
  }

  // also print a shorter summary of suspects
  const suspects = handguns.filter(suspicious);
  if (suspects.length){
    console.log(`\nSuspected misclassifications (${suspects.length}):`);
    suspects.forEach(a => console.log(`- ${a.id} — ${a.name}`));
  } else {
    console.log('\nNo obvious misclassifications detected in Handgun group.');
  }
}

main().catch(err => { console.error(err); process.exit(1); });
