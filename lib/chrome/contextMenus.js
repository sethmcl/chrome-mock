var sinon = require('sinon');


/**
 * @constructor
 */
function ContextMenus() {
  this.menus = [];
  this.create = this.create();
}

/**
 * @property
 */
ContextMenus.prototype.menus = null;

/**
 * Creates a new context menu item. Note that if an error occurs during creation,
 * you may not find out until the creation callback fires (the details will be in
 * chrome.runtime.lastError).
 * @param {object} createProperties
 * @param {function} callback
 */
ContextMenus.prototype.create = function () {
  var menus = this.menus;

  return sinon.spy(function (createProperties, callback) {
    menus.push(createProperties);
    callback();
  });
};

module.exports = new ContextMenus();
module.exports.Constructor = ContextMenus;
