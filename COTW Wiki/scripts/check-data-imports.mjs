Promise.all([
  import('../src/data/weapons.js'),
  import('../src/data/decoys.js')
])
  .then(() => console.log('DATA_IMPORTS_OK'))
  .catch(e => { console.error(e); process.exit(1); });
