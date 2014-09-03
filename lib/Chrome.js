var ContextMenus = require('./chrome/ContextMenus');
var Runtime      = require('./chrome/Runtime');
var Tabs         = require('./chrome/Tabs');
var I18n         = require('./chrome/I18n');


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
};
