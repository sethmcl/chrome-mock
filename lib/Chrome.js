var ContextMenus = require('./chrome/ContextMenus');
var Runtime      = require('./chrome/Runtime');
var Tabs         = require('./chrome/Tabs');

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
};
