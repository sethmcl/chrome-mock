var sinon = require('sinon');

module.exports = Event;

function Event() {
  this.listeners      = [];
  this.addListener    = sinon.spy(this.addListener.bind(this));
  this.removeListener = sinon.spy(this.removeListener.bind(this));
}

/**
 * @property {array}
 */
Event.prototype.listeners = null;

/**
 * Add an event handler function
 * @param {function} fn
 */
Event.prototype.addListener = function (fn) {
  this.listeners.push(fn);
};

/**
 * Remove an event handler function
 * @param {function} fn
 */
Event.prototype.removeListener = function (fn) {
  var index = this.listeners.indexOf(fn);
  if (index > -1) {
    this.listeners.splice(index, 1);
  }
};

/**
 * Trigger event
 * @param {...object} arg
 */
Event.prototype.trigger = function () {
  var args = arguments;

  this.listeners.forEach(function (fn) {
    fn.apply(null, args);
  });
};
