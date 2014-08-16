var sinon = require('sinon');

module.exports = ContextMenus;

/**
 * @constructor
 * @param {object} chrome
 */
function ContextMenus(chrome) {
  this.chrome = chrome;
  this.menus  = [];
  this.create = sinon.spy(create.bind(this));
}

/**
 * @property {array}
 */
ContextMenus.prototype.menus = null;

/**
 * Creates a new context menu item. Note that if an error occurs during creation,
 * you may not find out until the creation callback fires (the details will be in
 * chrome.runtime.lastError).
 * @param {object} createProperties
 * @param {function} callback
 */
function create(createProperties, callback) {
  this.menus.push(createProperties);

  if (typeof callback === 'function') {
    callback();
  }
}

