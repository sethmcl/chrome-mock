var Event = require('../Event');
var sinon = require('sinon');
var path = require('path');

// To use this library create a messages.json inside of your src folder
// by default you can see that I am using  src/_locales/en/messages.json
// if you _locales directory is in a different root directory simply change below

var DEFAULT_FILENAME = path.join(process.cwd(), 'src', '_locales', 'en', 'messages.json');

//change this to your locale
var LOCALE =  'en_US';

module.exports = I18n;
/**
 * Use the <code>chrome.i8n</code> to implement internationalization across your whole app or extension.
 * @constructor
 * @param {object} chrome
 */
function I18n(chrome) {
    this.chrome = chrome;
    this._locales = {};

    /**
     * Load default locales
     */
    this.loadDefaults = function (filename) {
        if (typeof filename !== 'string') {
          filename = DEFAULT_FILENAME;
        }

        try {
            this._locales = require(filename);
        } catch(e) {
            console.error(e);
        }
    };

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
    this.getMessage = sinon.spy(function (messageName) {
        //todo implement real '@@ui_locale' method - for now hard code to onstant
        if(messageName === '@@ui_locale'){
            return LOCALE;
        }
        return this._locales[messageName].message;
    });

// todo implement this method
//    /**
//     * Gets the browser UI language of the browser. This is different
//     * from i18n.getAcceptLanguages which returns the preferred user languages.
//     *
//     * @param {integer} tabId
//     * @param {object} connectInfo
//     * @returns {undefined} A port that can be used to communicate with the content scripts running in th...
//     */
//    this.getUILanguage = sinon.spy(function (tabId, connectInfo){
//
//    });


}
