var ContextMenus = require('./chrome/ContextMenus');
var Runtime      = require('./chrome/Runtime');

module.exports = Chrome;

/**
 * @constructor
 */
function Chrome() {
  this.contextMenus = new ContextMenus(this);
  this.runtime      = new Runtime(this);
}
