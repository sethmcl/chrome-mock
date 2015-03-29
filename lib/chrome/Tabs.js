var Event = require('../Event');
var sinon = require('sinon');
module.exports = Tabs;
/**
 * Use the <code>chrome.tabs</code> API to interact with the browser's tab system. You
 * can use this API to create, modify, and rearrange tabs in the browser.
 * @constructor
 * @param {object} chrome
 */
function Tabs(chrome) {
  this.chrome = chrome;


  /**
   * Retrieves details about the specified tab.
   *
   * @param {integer} tabId
   * @param {function} callback
   */
  this.get = sinon.spy(function (tabId, callback) {

    if (typeof callback === 'function') {
      callback();
    }

  });

  /**
   * Gets the tab that this script call is being made from. May be undefined if called
   * from a non-tab context (for example: a background page or popup view).
   *
   * @param {function} callback
   */
  this.getCurrent = sinon.spy(function (callback) {

    if (typeof callback === 'function') {
      callback();
    }

  });

  /**
   * Connects to the content script(s) in the specified tab. The $(ref:runtime.onConnect)
   * event is fired in each content script running in the specified tab for the current
   * extension. For more details, see <a href='messaging'>Content Script Messaging</
   * a>.
   *
   * @param {integer} tabId
   * @param {object} connectInfo
   * @returns {undefined} A port that can be used to communicate with the content scripts running in th...
   */
  this.connect = sinon.spy(function (tabId, connectInfo) {
    console.log(connectInfo);
  });

  /**
   * Sends a single request to the content script(s) in the specified tab, with an optional
   * callback to run when a response is sent back.  The $(ref:extension.onRequest) event
   * is fired in each content script running in the specified tab for the current ex
   * tension.
   *
   * @param {integer} tabId
   * @param {any} request
   * @param {function} responseCallback
   */
  this.sendRequest = sinon.spy(function (tabId, request, responseCallback) {

    if (typeof responseCallback === 'function') {
      responseCallback();
    }

  });

  /**
   * Sends a single message to the content script(s) in the specified tab, with an optional
   * callback to run when a response is sent back.  The $(ref:runtime.onMessage) event
   * is fired in each content script running in the specified tab for the current ex
   * tension.
   *
   * @param {integer} tabId
   * @param {any} message
   * @param {function} responseCallback
   */
  this.sendMessage = sinon.spy(function (tabId, message, responseCallback) {

    if (typeof responseCallback === 'function') {
      responseCallback();
    }

  });

  /**
   * Gets the tab that is selected in the specified window.
   *
   * @param {integer} windowId Defaults to the <a href='windows#current-window'>current window</a>.
   * @param {function} callback
   */
  this.getSelected = sinon.spy(function (windowId, callback) {

    if (typeof callback === 'function') {
      callback();
    }

  });

  /**
   * Gets details about all tabs in the specified window.
   *
   * @param {integer} windowId Defaults to the <a href='windows#current-window'>current window</a>.
   * @param {function} callback
   */
  this.getAllInWindow = sinon.spy(function (windowId, callback) {

    if (typeof callback === 'function') {
      callback();
    }

  });

  /**
   * Creates a new tab.
   *
   * @param {object} createProperties
   * @param {function} callback
   */
  this.create = sinon.spy(function (createProperties, callback) {

    if (typeof callback === 'function') {
      callback();
    }

  });

  /**
   * Duplicates a tab.
   *
   * @param {integer} tabId The ID of the tab which is to be duplicated.
   * @param {function} callback
   */
  this.duplicate = sinon.spy(function (tabId, callback) {

    if (typeof callback === 'function') {
      callback();
    }

  });

  /**
   * Gets all tabs that have the specified properties, or all tabs if no properties are
   * specified.
   *
   * @param {object} queryInfo
   * @param {function} callback
   */
  this.query = sinon.spy(function (queryInfo, callback) {

    if (typeof callback === 'function') {
      callback([{id: 0}]);
    }

  });

  /**
   * Highlights the given tabs.
   *
   * @param {object} highlightInfo
   * @param {function} callback
   */
  this.highlight = sinon.spy(function (highlightInfo, callback) {

    if (typeof callback === 'function') {
      callback();
    }

  });

  /**
   * Modifies the properties of a tab. Properties that are not specified in <var>updateProperties</var>
   * are not modified.
   *
   * @param {integer} tabId Defaults to the selected tab of the <a href='windows#current-window'>current ...
   * @param {object} updateProperties
   * @param {function} callback
   */
  this.update = sinon.spy(function (tabId, updateProperties, callback) {

    if (typeof callback === 'function') {
      callback();
    }

  });

  /**
   * Moves one or more tabs to a new position within its window, or to a new window. Note
   * that tabs can only be moved to and from normal (window.type === "normal") windo
   * ws.
   *
   * @param {undefined} tabIds The tab or list of tabs to move.
   * @param {object} moveProperties
   * @param {function} callback
   */
  this.move = sinon.spy(function (tabIds, moveProperties, callback) {

    if (typeof callback === 'function') {
      callback();
    }

  });

  /**
   * Reload a tab.
   *
   * @param {integer} tabId The ID of the tab to reload; defaults to the selected tab of the current window.
   * @param {object} reloadProperties
   * @param {function} callback
   */
  this.reload = sinon.spy(function (tabId, reloadProperties, callback) {

    if (typeof callback === 'function') {
      callback();
    }

  });

  /**
   * Closes one or more tabs.
   *
   * @param {undefined} tabIds The tab or list of tabs to close.
   * @param {function} callback
   */
  this.remove = sinon.spy(function (tabIds, callback) {

    if (typeof callback === 'function') {
      callback();
    }

  });

  /**
   * Detects the primary language of the content in a tab.
   *
   * @param {integer} tabId Defaults to the active tab of the <a href='windows#current-window'>current wi...
   * @param {function} callback
   */
  this.detectLanguage = sinon.spy(function (tabId, callback) {

    if (typeof callback === 'function') {
      callback();
    }

  });

  /**
   * Captures the visible area of the currently active tab in the specified window. You
   * must have <a href='declare_permissions'>&lt;all_urls&gt;</a> permission to use this
   * method.
   *
   * @param {integer} windowId The target window. Defaults to the <a href='windows#current-window'>current w...
   * @param {undefined} options
   * @param {function} callback
   */
  this.captureVisibleTab = sinon.spy(function (windowId, options, callback) {

    if (typeof callback === 'function') {
      callback();
    }

  });

  /**
   * Injects JavaScript code into a page. For details, see the <a href='content_scripts#pi'>programmatic
   * injection</a> section of the content scripts doc.
   *
   * @param {integer} tabId The ID of the tab in which to run the script; defaults to the active tab of t...
   * @param {undefined} details Details of the script to run.
   * @param {function} callback Called after all the JavaScript has been executed.
   */
  this.executeScript = sinon.spy(function (tabId, details, callback) {

    if (typeof callback === 'function') {
      callback();
    }

  });

  /**
   * Injects CSS into a page. For details, see the <a href='content_scripts#pi'>programmatic
   * injection</a> section of the content scripts doc.
   *
   * @param {integer} tabId The ID of the tab in which to insert the CSS; defaults to the active tab of t...
   * @param {undefined} details Details of the CSS text to insert.
   * @param {function} callback Called when all the CSS has been inserted.
   */
  this.insertCSS = sinon.spy(function (tabId, details, callback) {

    if (typeof callback === 'function') {
      callback();
    }

  });

  /**
   * Zooms a specified tab.
   *
   * @param {integer} tabId The ID of the tab to zoom; defaults to the active tab of the current window.
   * @param {number} zoomFactor The new zoom factor.
   * @param {function} callback Called after the zoom factor has been changed.
   */
  this.setZoom = sinon.spy(function (tabId, zoomFactor, callback) {

    if (typeof callback === 'function') {
      callback();
    }

  });

  /**
   * Gets the current zoom factor of a specified tab.
   *
   * @param {integer} tabId The ID of the tab to get the current zoom factor from; defaults to the active...
   * @param {function} callback Called with the tab's current zoom factor after it has been fetched.
   */
  this.getZoom = sinon.spy(function (tabId, callback) {

    if (typeof callback === 'function') {
      callback();
    }

  });

  /**
   * Sets the zoom settings for a specified tab, which define how zoom changes are handled.
   * These settings are reset to defaults upon navigating the tab.
   *
   * @param {integer} tabId The ID of the tab to change the zoom settings for; defaults to the active tab...
   * @param {undefined} zoomSettings Defines how zoom changes are handled and at what scope.
   * @param {function} callback Called after the zoom settings have been changed.
   */
  this.setZoomSettings = sinon.spy(function (tabId, zoomSettings, callback) {

    if (typeof callback === 'function') {
      callback();
    }

  });

  /**
   * Gets the current zoom settings of a specified tab.
   *
   * @param {integer} tabId The ID of the tab to get the current zoom settings from; defaults to the acti...
   * @param {function} callback Called with the tab's current zoom settings.
   */
  this.getZoomSettings = sinon.spy(function (tabId, callback) {

    if (typeof callback === 'function') {
      callback();
    }

  });


  /**
   * Fired when a tab is created. Note that the tab's URL may not be set at the time this
   * event fired, but you can listen to onUpdated events to be notified when a URL is
   * set.
   */
  this.onCreated = new Event();

  /**
   * Fired when a tab is updated.
   */
  this.onUpdated = new Event();

  /**
   * Fired when a tab is moved within a window. Only one move event is fired, representing
   * the tab the user directly moved. Move events are not fired for the other tabs that
   * must move in response. This event is not fired when a tab is moved between windows.
   * For that, see $(ref:tabs.onDetached).
   */
  this.onMoved = new Event();

  /**
   * Fires when the selected tab in a window changes.
   */
  this.onSelectionChanged = new Event();

  /**
   * Fires when the selected tab in a window changes. Note that the tab's URL may not
   * be set at the time this event fired, but you can listen to $(ref:tabs.onUpdated)
   * events to be notified when a URL is set.
   */
  this.onActiveChanged = new Event();

  /**
   * Fires when the active tab in a window changes. Note that the tab's URL may not be
   * set at the time this event fired, but you can listen to onUpdated events to be notified
   * when a URL is set.
   */
  this.onActivated = new Event();

  /**
   * Fired when the highlighted or selected tabs in a window changes.
   */
  this.onHighlightChanged = new Event();

  /**
   * Fired when the highlighted or selected tabs in a window changes.
   */
  this.onHighlighted = new Event();

  /**
   * Fired when a tab is detached from a window, for example because it is being moved
   * between windows.
   */
  this.onDetached = new Event();

  /**
   * Fired when a tab is attached to a window, for example because it was moved between
   * windows.
   */
  this.onAttached = new Event();

  /**
   * Fired when a tab is closed.
   */
  this.onRemoved = new Event();

  /**
   * Fired when a tab is replaced with another tab due to prerendering or instant.
   */
  this.onReplaced = new Event();

  /**
   * Fired when a tab is zoomed.
   */
  this.onZoomChange = new Event();

}
