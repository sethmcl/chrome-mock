var Event = require('../Event');
var sinon = require('sinon');

module.exports = ContextMenus;

/**
 * Use the <code>chrome.contextMenus</code> API to add items to Google Chrome's context
 * menu. You can choose what types of objects your context menu additions apply to,
 * such as images, hyperlinks, and pages.
 * @constructor
 * @param {object} chrome
 */
function ContextMenus(chrome) {
  this.chrome = chrome;

  /**
   * The maximum number of top level extension items that can be added to an extension
   * action context menu. Any items beyond this limit will be ignored.
   * @property {undefined}
   */
  this.ACTION_MENU_TOP_LEVEL_LIMIT = null;


  /**
   * Creates a new context menu item. Note that if an error occurs during creation, you
   * may not find out until the creation callback fires (the details will be in chro
   * me.runtime.lastError).
   *
   * @param {object} createProperties
   * @param {function} callback Called when the item has been created in the browser. If there were any probl...
   * @returns {undefined} The ID of the newly created item.
   */
  this.create = sinon.spy(function (createProperties, callback) {

    if (typeof callback === 'function') {
      callback();
    }

  });

  /**
   * Updates a previously created context menu item.
   *
   * @param {undefined} id The ID of the item to update.
   * @param {object} updateProperties The properties to update. Accepts the same values as the create function.
   * @param {function} callback Called when the context menu has been updated.
   */
  this.update = sinon.spy(function (id, updateProperties, callback) {

    if (typeof callback === 'function') {
      callback();
    }

  });

  /**
   * Removes a context menu item.
   *
   * @param {undefined} menuItemId The ID of the context menu item to remove.
   * @param {function} callback Called when the context menu has been removed.
   */
  this.remove = sinon.spy(function (menuItemId, callback) {

    if (typeof callback === 'function') {
      callback();
    }

  });

  /**
   * Removes all context menu items added by this extension.
   *
   * @param {function} callback Called when removal is complete.
   */
  this.removeAll = sinon.spy(function (callback) {

    if (typeof callback === 'function') {
      callback();
    }

  });


  /**
   * onClicked Event
   */
  this.onClicked = new Event();

}
