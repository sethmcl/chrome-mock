var Event = require('../Event');
var sinon = require('sinon');

module.exports = Runtime;
/**
 * Use the <code>chrome.runtime</code> API to retrieve the background page, return details
 * about the manifest, and listen for and respond to events in the app or extension
 * lifecycle. You can also use this API to convert the relative path of URLs to fully-qualified
 * URLs.
 * @constructor
 * @param {object} chrome
 */
function Runtime(chrome) {
  this.chrome = chrome;

  /**
   * This will be defined during an API method callback if there was an error
   * @property {object}
   */
  this.lastError = null;

  /**
   * The ID of the extension/app.
   * @property {string}
   */
  this.id = 'xxxxxxx';


  /**
   * Retrieves the JavaScript 'window' object for the background page running inside the
   * current extension/app. If the background page is an event page, the system will ensure
   * it is loaded before calling the callback. If there is no background page, an error
   * is set.
   *
   * @param {function} callback
   */
  this.getBackgroundPage = sinon.spy(function (callback) {

    if (typeof callback === 'function') {
      callback();
    }

  });

  /**
   * Returns details about the app or extension from the manifest. The object returned
   * is a serialization of the full <a href="manifest.html">manifest file</a>.
   *
   * @returns {object} The manifest details.
   */
  this.getManifest = sinon.spy(function () {

  });

  /**
   * Converts a relative path within an app/extension install directory to a fully-qualified
   * URL.
   *
   * @param {string} path A path to a resource within an app/extension expressed relative to its instal...
   * @returns {string} The fully-qualified URL to the resource.
   */
  this.getURL = sinon.spy(function () {

  });

  /**
   * Sets the URL to be visited upon uninstallation. This may be used to clean up server-side
   * data, do analytics, and implement surveys. Maximum 255 characters.
   *
   * @param {string} url
   */
  this.setUninstallURL = sinon.spy(function () {

  });

  /**
   * Reloads the app or extension.
   *
   */
  this.reload = sinon.spy(function () {

  });

  /**
   * Requests an update check for this app/extension.
   *
   * @param {function} callback
   */
  this.requestUpdateCheck = sinon.spy(function (callback) {

    if (typeof callback === 'function') {
      callback();
    }

  });

  /**
   * Restart the ChromeOS device when the app runs in kiosk mode. Otherwise, it's no
   * -op.
   *
   */
  this.restart = sinon.spy(function () {

  });

  /**
   * Attempts to connect to connect listeners within an extension/app (such as the background
   * page), or other extensions/apps. This is useful for content scripts connecting to
   * their extension processes, inter-app/extension communication, and <a href="manifest/externally_connectable.html">web
   * messaging</a>. Note that this does not connect to any listeners in a content script.
   * Extensions may connect to content scripts embedded in tabs via <a href="extensi
   * ons/tabs#method-connect">tabs.connect</a>.
   *
   * @param {string} extensionId The ID of the extension or app to connect to. If omitted, a connection will b...
   * @param {object} connectInfo
   * @returns {undefined} Port through which messages can be sent and received. The port's $(ref:runtim...
   */
  this.connect = sinon.spy(function () {

  });

  /**
   * Connects to a native application in the host machine.
   *
   * @param {string} application The name of the registered application to connect to.
   * @returns {undefined} Port through which messages can be sent and received with the application
   */
  this.connectNative = sinon.spy(function (application) {

  });

  /**
   * Sends a single message to event listeners within your extension/app or a different
   * extension/app. Similar to $(ref:runtime.connect) but only sends a single message,
   * with an optional response. If sending to your extension, the $(ref:runtime.onMessage)
   * event will be fired in each page, or $(ref:runtime.onMessageExternal), if a different
   * extension. Note that extensions cannot send messages to content scripts using this
   * method. To send messages to content scripts, use <a href="extensions/tabs#metho
   * d-sendMessage">tabs.sendMessage</a>.
   *
   * https://developer.chrome.com/extensions/runtime
   *
   * @param {string} extensionId The ID of the extension/app to send the message to. If omitted, the message w...
   * @param {any} message
   * @param {object} options
   * @param {function} responseCallback
   */
  this.sendMessage = sinon.spy(function (extensionId, message, options, responseCallback) {

    //options is optional and google type checks to determine which argument to use
    if (!responseCallback) {
      if (typeof options === 'function') {
        responseCallback = options;
      } else if (typeof message === 'function') {
        responseCallback = message;
      }
    }

    //extensionId is optional and google type checks to determine which argument to use
    if(extensionId === Object(extensionId)){
      message = extensionId;
    }

    //message is not optional and google will throw an error without it
    if(!message){
      throw new Error('Invalid arguments to sendMessage.');
    }

    if (typeof responseCallback === 'function') {
      responseCallback();
    }

  });

  /**
   * Send a single message to a native application.
   *
   * @param {string} application The name of the native messaging host.
   * @param {object} message The message that will be passed to the native messaging host.
   * @param {function} responseCallback
   */
  this.sendNativeMessage = sinon.spy(function (application, message, responseCallback) {

    if (typeof responseCallback === 'function') {
      responseCallback();
    }

  });

  /**
   * Returns information about the current platform.
   *
   * @param {function} callback Called with results
   */
  this.getPlatformInfo = sinon.spy(function (callback) {

    if (typeof callback === 'function') {
      callback();
    }

  });

  /**
   * Returns a DirectoryEntry for the package directory.
   *
   * @param {function} callback
   */
  this.getPackageDirectoryEntry = sinon.spy(function (callback) {

    if (typeof callback === 'function') {
      callback();
    }

  });


  /**
   * Fired when a profile that has this extension installed first starts up. This event
   * is not fired when an incognito profile is started, even if this extension is operating
   * in 'split' incognito mode.
   */
  this.onStartup = new Event();

  /**
   * Fired when the extension is first installed, when the extension is updated to a new
   * version, and when Chrome is updated to a new version.
   */
  this.onInstalled = new Event();

  /**
   * Sent to the event page just before it is unloaded. This gives the extension opportunity
   * to do some clean up. Note that since the page is unloading, any asynchronous operations
   * started while handling this event are not guaranteed to complete. If more activity
   * for the event page occurs before it gets unloaded the onSuspendCanceled event will
   * be sent and the page won't be unloaded.
   */
  this.onSuspend = new Event();

  /**
   * Sent after onSuspend to indicate that the app won't be unloaded after all.
   */
  this.onSuspendCanceled = new Event();

  /**
   * Fired when an update is available, but isn't installed immediately because the app
   * is currently running. If you do nothing, the update will be installed the next time
   * the background page gets unloaded, if you want it to be installed sooner you can
   * explicitly call chrome.runtime.reload(). If your extension is using a persistent
   * background page, the background page of course never gets unloaded, so unless you
   * call chrome.runtime.reload() manually in response to this event the update will not
   * get installed until the next time chrome itself restarts. If no handlers are listening
   * for this event, and your extension has a persistent background page, it behaves as
   * if chrome.runtime.reload() is called in response to this event.
   */
  this.onUpdateAvailable = new Event();

  /**
   * Fired when a Chrome update is available, but isn't installed immediately because
   * a browser restart is required.
   */
  this.onBrowserUpdateAvailable = new Event();

  /**
   * Fired when a connection is made from either an extension process or a content s
   * cript.
   */
  this.onConnect = new Event();

  /**
   * Fired when a connection is made from another extension.
   */
  this.onConnectExternal = new Event();

  /**
   * Fired when a message is sent from either an extension process or a content scri
   * pt.
   */
  this.onMessage = new Event();

  /**
   * Fired when a message is sent from another extension/app. Cannot be used in a content
   * script.
   */
  this.onMessageExternal = new Event();

  /**
   * Fired when an app or the device that it runs on needs to be restarted. The app should
   * close all its windows at its earliest convenient time to let the restart to happen.
   * If the app does nothing, a restart will be enforced after a 24-hour grace period
   * has passed. Currently, this event is only fired for Chrome OS kiosk apps.
   */
  this.onRestartRequired = new Event();

}
