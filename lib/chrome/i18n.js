var Event = require('../Event');
var sinon = require('sinon');
var path = require('path');

/* CONSTANTS */

var DEFAULT_FILENAME = require(path.join(process.cwd(), 'src', '_locales', 'en', 'messages.json'));
module.exports = i18n;
/**
 * Use the <code>chrome.i8n</code> to implement internationalization across your whole app or extension.
 * @constructor
 * @param {object} chrome
 */
function i18n(chrome){
    this.chrome = chrome;

    //loads a file from your

    this._locales =  DEFAULT_FILENAME;


    /**
     * Gets the accept-languages of the browser. This is different from the locale
     * used by the browser; to get the locale, use
     *
     * @param {function} callback - Array of the accept languages of the browser, such as en-US,en,zh-CN
     */
    this.getAcceptLanguages = sinon.spy(function (callback){

        if (typeof callback === 'function') {
            callback();
        }

    });

    /**
     * Gets the localized string for the specified message. If the message is missing,
     * this method returns an empty string (''). If the format of the getMessage() call
     * is wrong — for example, messageName is not a string or the substitutions array
     * has more than 9 elements — this method returns undefined.
     *
     * @param {integer} messageName - The name of the message, as specified in the messages.json file.
     * @param {object} substitutions - Up to 9 substitution strings, if the message requires any.
     * @returns {string}
     */
    this.getMessage = sinon.spy(function (messageName, substitutions){
        //todo turn this into a live method
        if(messageName === "@@ui_locale"){
            return "en_US";
        }

        var message = this._locales[messageName].message;
        return message;
    });

    /**
     * Gets the browser UI language of the browser. This is different
     * from i18n.getAcceptLanguages which returns the preferred user languages.
     *
     * @param {integer} tabId
     * @param {object} connectInfo
     * @returns {undefined} A port that can be used to communicate with the content scripts running in th...
     */
    this.getUILanguage = sinon.spy(function (tabId, connectInfo){

    });


}
