import('../src/data/weapons.js')
  .then(() => console.log('IMPORT_OK'))
  .catch(e => { console.error(e); process.exit(1); });
