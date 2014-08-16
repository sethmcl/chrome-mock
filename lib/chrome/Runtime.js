var Event = require('../Event');

module.exports = Runtime;

/**
 * @constructor
 * @param {object} chrome
 */
function Runtime(chrome) {
  this.chrome = chrome;
  this.onInstalled = new Event();
}
