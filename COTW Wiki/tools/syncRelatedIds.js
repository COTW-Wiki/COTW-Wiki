import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, '..');
const weaponMapPath = path.join(root, 'src', 'data', 'weaponAmmoMap.js');
const ammoPath = path.join(root, 'src', 'data', 'ammunition.js');

function parseWeaponMap(text) {
	const map = new Map();
	const objMatch = text.match(/const\s+weaponAmmoMap\s*=\s*\{([\s\S]*?)\};/);
	if (!objMatch) return map;
	const body = objMatch[1];
	const entryRe = /"([^"\\]+)"\s*:\s*\[([^\]]*)\]/g;
	let m;
	while ((m = entryRe.exec(body))) {
		const weapon = m[1];
		const rawList = m[2].trim();
		if (!rawList) { map.set(weapon, []); continue; }
		const items = rawList.split(',').map(s => s.replace(/['"\s]/g, '').trim()).filter(Boolean);
		map.set(weapon, items);
	}
	return map;
}

function escapeRegExp(string) {
	return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function updateAmmoFile(weaponMap, ammoText) {
	let updatedText = ammoText;
	for (const [weaponId, ammoIds] of weaponMap) {
		for (const ammoId of ammoIds) {
			const idRe = new RegExp("(id:\\s*\\\"" + escapeRegExp(ammoId) + "\\\"[\\s\\S]*?relatedIds:\\s*)\\[([^\\]]*)\\]", 'm');
			const match = updatedText.match(idRe);
			if (!match) continue;
			const prefix = match[1];
			const currentList = match[2].trim();
			const existing = currentList.length ? currentList.split(',').map(s=>s.replace(/['"\s]/g,'').trim()).filter(Boolean) : [];
			if (!existing.includes(weaponId)) {
				existing.push(weaponId);
				const newList = existing.map(x => '"' + x + '"').join(', ');
				updatedText = updatedText.replace(idRe, prefix + '[' + newList + ']');
			}
		}
	}
	return updatedText;
}

try {
	const weaponText = fs.readFileSync(weaponMapPath, 'utf8');
	const weaponMap = parseWeaponMap(weaponText);
	const ammoText = fs.readFileSync(ammoPath, 'utf8');
	const newAmmoText = updateAmmoFile(weaponMap, ammoText);
	if (newAmmoText !== ammoText) {
		fs.writeFileSync(ammoPath, newAmmoText, 'utf8');
		console.log('ammunition.js updated');
		process.exit(0);
	} else {
		console.log('No changes required; ammunition.js already up to date');
		process.exit(0);
	}
} catch (err) {
	console.error('Error:', err.message);
	process.exit(1);
}

