const fs = require('fs');
const files = [
  'c:/Users/uzer/OneDrive/Документи/COTW Wiki/COTW-WIKI/COTW-Wiki/COTW Wiki/src/pages/reserves/reservePages/LaytonLakeDistrict.jsx',
  'c:/Users/uzer/OneDrive/Документи/COTW Wiki/COTW-WIKI/COTW-Wiki/COTW Wiki/src/pages/reserves/reservePages/VurhongaSavanna.jsx',
  'c:/Users/uzer/OneDrive/Документи/COTW Wiki/COTW-WIKI/COTW-Wiki/COTW Wiki/src/pages/reserves/reservePages/Medved-TaigaNationalPark.jsx',
  'c:/Users/uzer/OneDrive/Документи/COTW Wiki/COTW-WIKI/COTW-Wiki/COTW Wiki/src/pages/reserves/reservePages/ParqueFernando.jsx'
];

files.forEach(f => {
  try {
    const t = fs.readFileSync(f, 'utf8');
    const openDiv = (t.match(/<div\\b/g) || []).length;
    const closeDiv = (t.match(/<\\/div>/g) || []).length;
    const openBrace = (t.match(/\\{/g) || []).length;
    const closeBrace = (t.match(/\\}/g) || []).length;
    const openParen = (t.match(/\\(/g) || []).length;
    const closeParen = (t.match(/\\)/g) || []).length;
    console.log([f, openDiv, closeDiv, openBrace, closeBrace, openParen, closeParen].join(' | '));
  } catch (e) {
    console.error('ERR', f, e.message);
  }
});
