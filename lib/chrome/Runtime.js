var Event = require('../Event');

module.exports = Runtime;

/**
 * @constructor
 * @param {object} chrome
 */
function Runtime(chrome) {
  this.chrome = chrome;

  this.onStartup                = new Event();
  this.onInstalled              = new Event();
  this.onSuspend                = new Event();
  this.onSuspendCanceled        = new Event();
  this.onUpdateAvailable        = new Event();
  this.onBrowserUpdateAvailable = new Event();
  this.onConnect                = new Event();
  this.onConnectExternal        = new Event();
  this.onMessage                = new Event();
  this.onMessageExternal        = new Event();
  this.onRestartRequired        = new Event();
}
