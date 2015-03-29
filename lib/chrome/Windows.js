var Event = require('../Event');
var sinon = require('sinon');
module.exports = Windows;

/**
 * Use the <code>chrome.windows</code> API to interact with browser windows. You can
 * use this API to create, modify, and rearrange windows in the browser.
 * @constructor
 * @param {object} chrome
 */
function Windows(chrome) {
    this.chrome = chrome;
    this.WINDOW_ID_NONE = -1;
    this.WINDOW_ID_CURRENT = -2;

    /**
     * Gets details about a window.
     *
     * @param {integer} tabId
     * @param {function} callback
     */
    this.get = sinon.spy(function (windowId, getInfo, callback) {

        if (typeof callback === 'function') {
            callback();
        }
    });

    /**
     * Gets the current window
     *
     * @param {function} callback
     */
    this.getCurrent = sinon.spy(function (getInfo, callback) {

        if (typeof callback === 'function') {
            callback();
        }

    });

    /**
     * Gets the window that was most recently focused — typically the window 'on top'.
     *
     * @param {function} callback
     */
    this.getLastFocused = sinon.spy(function (getInfo, callback) {

        if (typeof callback === 'function') {
            callback();
        }

    });

    /**
     * Gets all windows.
     *
     * @param {function} callback
     */
    this.getAll = sinon.spy(function (getInfo, callback) {
        if (typeof callback === 'function') {
            callback();
        }
    });
    /**
     * Creates (opens) a new browser with any optional sizing, position or default URL provided.
     *
     * @param {function} callback
     */
    this.create = sinon.spy(function (createData, callback) {
        if (typeof callback === 'function') {
            callback();
        }
    });

    /**
     * Updates the properties of a window. Specify only the properties that you want to change;
     * unspecified properties will be left unchanged.
     *
     * @param {function} callback
     */
    this.update = sinon.spy(function (windowId, updateProperties, callback) {
        if (typeof callback === 'function') {
            callback();
        }
    });

    /**
     * Removes (closes) a window, and all the tabs inside it.
     *
     * @param {function} callback
     */
    this.remove = sinon.spy(function (windowId, callback) {
        if (typeof callback === 'function') {
            callback();
        }
    });

}