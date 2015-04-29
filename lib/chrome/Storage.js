var StorageArea = require('./StorageArea');
var Event = require('../Event');

module.exports = Storage;

function Storage(chrome) {
  this.onChanged = new Event();

  this.sync = new StorageArea(chrome, this, 'sync');
  this.local = new StorageArea(chrome, this, 'local');

  /* read-only, set chrome.storage.managed._store directly for mocking */
  this.managed = new StorageArea(chrome, this, 'managed');

  /* simulate latency for CRUD operations, in milliseconds */
  this.LATENCY = 0;
}
