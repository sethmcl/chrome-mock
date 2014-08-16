var Event = require('../Event');
var sinon = require('sinon');

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

  this.getBackgroundPage = sinon.spy(this.getBackgroundPage.bind(this));
  this.getManifest       = sinon.spy(this.getManifest.bind(this));
  this.getURL            = sinon.spy(this.getURL.bind(this));
  this.reload            = sinon.spy(this.reload.bind(this));
}

/**
 * This will be defined during an API method callback
 * if there was an error.
 * @property {object}
 */
Runtime.prototype.lastError = null;

/**
 * The ID of the extension/app.
 * @property {string}
 */
Runtime.prototype.id = 'xxxxxxxxxxxxxxxx';

/**
 * Retrieves the JavaScript 'window' object for the background page
 * running inside the current extension/app. If the background page
 * is an event page, the system will ensure it is loaded before
 * calling the callback. If there is no background page, an error
 * is set.
 * @param {function} callback
 */
Runtime.prototype.getBackgroundPage = function (callback) {
  if (typeof callback === 'function') {
    callback({});
  }
};

/**
 * Returns details about the app or extension from the manifest.
 * The object returned is a serialization of the full manifest file.
 * @returns {object} The manifest details
 */
Runtime.prototype.getManifest = function () {
  return {
    version: '0.0.1'
  };
};

/**
 * Converts a relative path within an app/extension install directory
 * to a fully-qualified URL.
 * @param {string} path A path to a resource within an app/extension
 *  expressed relative to its install directory.
 * @returns {string}
 */
Runtime.prototype.getURL = function (path) {
  return ['chrome://', this.id, '/', path].join('');
};

/**
 * Reloads the app or extension.
 */
Runtime.prototype.reload = function () {};
