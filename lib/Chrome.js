var ContextMenus = require('./chrome/ContextMenus');
var Runtime      = require('./chrome/Runtime');
var Tabs         = require('./chrome/Tabs');
var Windows      = require('./chrome/Windows');
var I18n         = require('./chrome/I18n');
var Storage      = require('./chrome/Storage');

module.exports = Chrome;

/**
 * @constructor
 */
function Chrome() {
  this.resetMock();
}

/**
 * Re-initialize all mocks
 */
Chrome.prototype.resetMock = function () {
  this.contextMenus = new ContextMenus(this);
  this.runtime      = new Runtime(this);
  this.tabs         = new Tabs(this);
  this.i18n         = new I18n(this);
  this.storage      = new Storage(this);
  this.windows      = new Windows(this);
};
