
import fs from 'fs';
import path from 'path';

const wikiData = [
{ name: ".223 Docent", accuracy: 100, recoil: 28, reload: 49, hipshot: 86, magazine: 6 },
{ name: "Ranger .243", accuracy: 78, recoil: 46, reload: 49, hipshot: 76, magazine: 5 },
{ name: ".270 Huntsman", accuracy: 55, recoil: 64, reload: 49, hipshot: 67, magazine: 4 },
{ name: "7mm Regent Magnum", accuracy: 33, recoil: 82, reload: 81, hipshot: 48, magazine: 1 },
{ name: "Rangemaster 338", accuracy: 33, recoil: 100, reload: 81, hipshot: 29, magazine: 1 },
{ name: "Whitlock Model 86", accuracy: 78, recoil: 46, reload: 57, hipshot: 76, magazine: 4 },
{ name: "Coachmate Lever .45-70", accuracy: 55, recoil: 64, reload: 57, hipshot: 67, magazine: 3 },
{ name: "Virant .22LR", accuracy: 100, recoil: 10, reload: 49, hipshot: 86, magazine: 10 },
{ name: "King 470DB", accuracy: 55, recoil: 100, reload: 10, hipshot: 12, magazine: 2 },
{ name: "Solokhin MN1890", accuracy: 64, recoil: 58, reload: 60, hipshot: 72, magazine: 5 },
{ name: ".300 Canning Magnum", accuracy: 80, recoil: 90, reload: 49, hipshot: 35, magazine: 4 },
{ name: "Vásquez Cyclone .45", accuracy: 60, recoil: 10, reload: 49, hipshot: 80, magazine: 7 },
{ name: "Eckers .30-06", accuracy: 35, recoil: 80, reload: 49, hipshot: 50, magazine: 4 },
{ name: "Mårtensson 6.5mm", accuracy: 70, recoil: 50, reload: 49, hipshot: 67, magazine: 5 },
{ name: "Hudzik .50 Caplock", accuracy: 25, recoil: 70, reload: 5, hipshot: 15, magazine: 1 },
{ name: "M1 Iwaniec", accuracy: 35, recoil: 82, reload: 49, hipshot: 50, magazine: 5 },
{ name: "F.L. Sporter .303", accuracy: 55, recoil: 64, reload: 49, hipshot: 67, magazine: 5 },
{ name: "Kullman .22H", accuracy: 100, recoil: 20, reload: 49, hipshot: 86, magazine: 6 },
{ name: "ZARZA-10 .308", accuracy: 45, recoil: 75, reload: 59, hipshot: 50, magazine: 5 },
{ name: "ZARZA-15 .223", accuracy: 100, recoil: 25, reload: 59, hipshot: 86, magazine: 5 },
{ name: "ZARZA-15 .22LR", accuracy: 100, recoil: 8, reload: 59, hipshot: 86, magazine: 5 },
{ name: "Curman .50 Inline", accuracy: 30, recoil: 70, reload: 5, hipshot: 15, magazine: 1 },
{ name: "Tsurugi LRR .338", accuracy: 38, recoil: 100, reload: 49, hipshot: 12, magazine: 5 },
{ name: "Malmer 7mm Magnum", accuracy: 35, recoil: 85, reload: 40, hipshot: 25, magazine: 3 },
{ name: "Olsson Model 23 .308", accuracy: 40, recoil: 79, reload: 40, hipshot: 27, magazine: 4 },
{ name: "Zagan Varminter .22-250", accuracy: 100, recoil: 30, reload: 49, hipshot: 80, magazine: 5 },
{ name: "Moradi Model 1894", accuracy: 80, recoil: 43, reload: 57, hipshot: 76, magazine: 6 },
{ name: "Arzyna .300 Mag Tactical", accuracy: 90, recoil: 75, reload: 59, hipshot: 50, magazine: 5 },
{ name: "Gandhare Rifle", accuracy: 30, recoil: 70, reload: 70, hipshot: 15, magazine: 1 },
{ name: "Vallgarda .375", accuracy: 95, recoil: 100, reload: 45, hipshot: 50, magazine: 4 },
{ name: "Johansson .450", accuracy: 40, recoil: 50, reload: 40, hipshot: 30, magazine: 5 },
{ name: "Fors Elite .300", accuracy: 85, recoil: 40, reload: 49, hipshot: 80, magazine: 6 },
{ name: "Hansson .30-06", accuracy: 43, recoil: 78, reload: 55, hipshot: 60, magazine: 5 },
{ name: "Perry .308", accuracy: 40, recoil: 75, reload: 59, hipshot: 65, magazine: 5 },
{ name: "Quist Reaper 7.62x39", accuracy: 85, recoil: 43, reload: 60, hipshot: 55, magazine: 5 },
{ name: "Laperriere Outrider .30-30", accuracy: 80, recoil: 44, reload: 58, hipshot: 78, magazine: 4 },
{ name: "Anantha Action .22 Mag", accuracy: 100, recoil: 15, reload: 50, hipshot: 86, magazine: 10 },
{ name: "Frost .257", accuracy: 35, recoil: 75, reload: 52, hipshot: 80, magazine: 4 }
];

// Correct absolute path for the workspace
const riflesDir = `c:/Users/uzer/OneDrive/Документи/COTW Wiki/Project-COTW-Wiki-/COTW Wiki/src/pages/loadouts/weapons/rifles`;

if (!fs.existsSync(riflesDir)) {
    console.error(`Directory not found: ${riflesDir}`);
    process.exit(1);
}

const files = fs.readdirSync(riflesDir).filter(f => f.endsWith('.jsx'));

const discrepancies = [];

files.forEach(file => {
    const filePath = path.join(riflesDir, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    
    // Extract Name from H1
    let nameMatch = content.match(/<h1[^>]*>\s*(.*?)\s*<\/h1>/);
    let name = nameMatch ? nameMatch[1].trim() : null;

    if (!name) {
        // Fallback: Try Infobox Title
        let infoMatch = content.match(/<div[^>]*py-2[^>]*>\s*(.*?)\s*<\/div>/); // Simplified regex for infobox
        name = infoMatch ? infoMatch[1].trim() : null;
    }

    if (!name) return; 

    const wikiParams = wikiData.find(w => w.name.toLowerCase() === name.toLowerCase());
    if (!wikiParams) return;

    const fields = ['Accuracy', 'Recoil', 'Reload', 'Hipshot', 'Magazine'];
    
    fields.forEach(field => {
        // Regex to find "Field</div> ... <div>Value</div>"
        // Use [\s\S]*? to match across newlines
        const regex = new RegExp(`>${field}<\\/div>[\\s\\S]*?<div[^>]*>\\s*(\\d+)\\s*<\\/div>`, 'i');
        const match = content.match(regex);
        
        if (match) {
            const localValue = parseInt(match[1]);
            const wikiValue = wikiParams[field.toLowerCase()];
            
            if (localValue !== wikiValue) {
                discrepancies.push({
                    file: file,
                    weapon: name,
                    field: field,
                    local: localValue,
                    wiki: wikiValue
                });
            }
        }
    });
});

if (discrepancies.length > 0) {
    console.log("Found Component Discrepancies:");
    discrepancies.forEach(d => {
        console.log(`[${d.weapon}] ${d.field}: Local=${d.local}, Wiki=${d.wiki} (File: ${d.file})`);
    });
} else {
    console.log("No component discrepancies found.");
}
