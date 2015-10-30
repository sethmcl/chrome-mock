var Event = require('../Event');
var sinon = require('sinon');
var _ = require('lodash');


module.exports = StorageArea;

function StorageArea(chrome, storage, namespace) {
  this._store = {};

  /**
   * Defer callback execution to the next process tick, or optionally
   * set chrome.storage.LATENCY to simulate latency in storage access
   */
  function defer(cb) {
    if (storage.LATENCY === 0 && typeof process !== 'undefined') {
      process.nextTick(cb);
    } else {
      setTimeout(cb, storage.LATENCY);
    }
  }

  function normalizeKeys(keys) {
    return keys && (typeof keys === 'string' && [keys]) || (keys.length && keys) || Object.keys(keys);
  }

  function get(store, keys) {
    if (keys === null) {
      return _.extend({}, store);
    }

    return _.pick(store, normalizeKeys(keys));
  }


  /**
   * Get data for specified keys from the store, the result is
   * passed to the provided callback.
   *
   * @param {string|array|object} keys - A single key to get, list of keys to get, or object with keys to get.
   *                                     pass in null to get the entire contents of storage.
   * @param {function} callback - Function to be called accepting the result.
   */
  this.get = sinon.spy(function (keys, callback) {
    var result = get(this._store, keys);

    defer(function () {
      callback(_.cloneDeep(result));
    });
  });


  /**
   * Gets the amount of space (in bytes) being used by one or more items.
   * (These numbers will probably not match the results returned by an actual
   * instance of chrome, but you'll at least get some numbers back)
   *
   * @param {string|array|object} keys - A single key to get, list of keys to get, or object with keys to get.
   *                                     Pass in a null to get the entire contents of storage.
   * @param {function } callback - Function to be called, the first argument will be an integer indicating the
   *                               number of bytes in use.
   */
  this.getBytesInUse = sinon.spy(function (keys, callback) {
    var bytes = JSON.stringify(get(this._store, keys)).length - 2;

    defer(function () {
      callback(bytes);
    });
  });

  this.set = sinon.spy(function (items, callback) {
    var changes = {};
    var key;

    for (key in items) {
      changes[key] = {
        oldValue: this._store[key],
        newValue: items[key]
      };
      this._store[key] = _.cloneDeep(items[key]);
    }

    storage.onChanged.trigger(_.cloneDeep(changes), namespace);

    return (callback && defer(callback));
  });

  this.remove = sinon.spy(function (keys, callback) {
    var changes = {};
    var key;

    keys = normalizeKeys(keys);

    for (key in keys) {
      key = keys[key];

      changes[key] = {
        oldValue: this._store[key],
        newValue: null
      };

      delete this._store[key];
    }

    storage.onChanged.trigger(changes, namespace);

    return (callback && defer(callback));
  });

  this.clear = sinon.spy(function (callback) {
    this._store = {};
    return (callback && defer(callback));
  });

  // Throw errors if there are attempts to alter managed storage
  if (namespace === 'managed') {
    this.set = this.remove = this.clear = sinon.spy(function () {
      throw new Error('You cannot call this method on managed storage');
    });
  }
}
