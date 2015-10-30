var sinon   = require('sinon');
var Storage = hmt.lib('chrome', 'Storage');
var Event   = hmt.lib('Event');
var _       = require('lodash');
var api     = new Storage();

function addOnChangeListener(storage, fn) {
  var listener = sinon.spy(function (changes, namespace) {
    return fn && fn(changes, namespace);
  });
  storage.onChanged.addListener(listener);
  return listener;
}

describe('chrome.storage', function () {

  describe('set()', function () {
    describe('single', function () {
      var listener;

      before(function (done) {
        api = new Storage();
        listener = addOnChangeListener(api);

        api.sync.set({'alpha': {alphaKey: 'alphaString'}}, function (result) {
          api.sync.set({'beta': 'betaString'}, function (result) {
            done();
          });
        });
      });

      it('should call set() 2x', function () {
        hmt.assert.equal(api.sync.set.callCount, 2);
        hmt.assert.equal(Object.keys(api.sync._store).length, 2);
      });

      it('should emit two change events', function () {
        hmt.assert.equal(listener.callCount, 2);
      });
    });

    describe('multiple', function () {
      var listener;

      before(function (done) {
        api = new Storage();
        listener = addOnChangeListener(api);
        done();
      });

      it('should set two values at once', function (done) {
        api.sync.set({'beta': 'betaString', 'alpha': 'alphaString'}, function () {
          done();
        });
      });

      it('should only emit one change event', function () {
        hmt.assert.equal(listener.callCount, 1);
      });
    });
  });

  describe('get()', function () {
    before(function (done) {
      api = new Storage();
      api.sync.set({
        'alpha': 'alpha-string',
        'beta': ['beta', 'array', 'of', 'stuff'],
        'charlie': 123456.89
      }, function () {
        done();
      });
    });

    describe('single', function () {
      it('should return one item matching string key', function (done) {
        api.sync.get('alpha', function (result) {
          hmt.assert.equal(result.alpha, 'alpha-string');
          done();
        });
      });

      it('should return one item matching array of strings', function (done) {
        api.sync.get(['beta'], function (result) {
          hmt.assert.deepEqual(result.beta, ['beta', 'array', 'of', 'stuff']);
          done();
        });
      });

      it('should return one item matching object keys', function (done) {
        api.sync.get({charlie: undefined}, function (result) {
          hmt.assert.equal(result.charlie, 123456.89);
          done();
        });
      });
    });

    describe('multiple', function () {
      it('should return two items matching requested array of keys', function (done) {
        api.sync.get(['alpha', 'charlie'], function (result) {
          hmt.assert.equal(result.alpha, 'alpha-string');
          hmt.assert.equal(result.charlie, 123456.89);
          done();
        });
      });

      it('should return two items matching requested object keys', function (done) {
        api.sync.get({alpha: 'garbage', charlie: {x: 4}}, function (result) {
          hmt.assert.equal(result.alpha, 'alpha-string');
          hmt.assert.equal(result.charlie, 123456.89);
          done();
        });
      });

      it('should return all items when null is passed as query terms', function (done) {
        api.sync.get(null, function (result) {
          hmt.assert.equal(result.alpha, 'alpha-string');
          hmt.assert.deepEqual(result.beta, ['beta', 'array', 'of', 'stuff']);
          hmt.assert.equal(result.charlie, 123456.89);
          done();
        });
      });
    });
  });

  describe('storage data isolation', function () {
    var mock;

    before(function () {
      api = new Storage();
      mock = {
        alpha: { user: { name: 'Hamburglar', pass: 'r0bbl3r0bble' } },
        isNew: true
      };
    });

    it('modifying original data after storing should not alter data in storage', function (done) {
      api.sync.set(mock, function () {
        mock.alpha.user.name = 'Grimmace';
        hmt.assert.notEqual(mock.alpha.user.name, api.sync._store.alpha.user.name);
        done();
      });
    });

    it('modifying results should not alter the data in storage', function (done) {
      api.sync.set(mock, function () {
        api.sync.get(['alpha'], function (result) {
          result.alpha.user.name = 'Ronald';
          hmt.assert.notEqual(api.sync._store.alpha.user.name, 'Ronald');
          done();
        });
      });
    });
  });

  describe('remove()', function () {
    beforeEach(function (done) {
      api = new Storage();
      api.sync.set({
        'alpha': 'alpha-string',
        'beta': ['beta', 'array', 'of', 'stuff'],
        'charlie': 123456.89
      }, function () {
        done();
      });
    });


    describe('single', function () {
      it('should remove a single item based on key string', function (done) {
        api.sync.remove('alpha', function () {
          api.sync.get('alpha', function (result1) {
            api.sync.get('charlie', function (result2) {
              hmt.assert.equal(result1.alpha, undefined);
              hmt.assert.equal(result2.charlie, 123456.89);
              done();
            });
          });
        });
      });

      it('should remove a single item based on array of key strings', function (done) {
        api.sync.remove(['alpha'], function () {
          api.sync.get('alpha', function (result1) {
            api.sync.get('charlie', function (result2) {
              hmt.assert.equal(result1.alpha, undefined);
              hmt.assert.equal(result2.charlie, 123456.89);
              done();
            });
          });
        });
      });

      it('should remove a single item based on an object key', function (done) {
        api.sync.remove({alpha: undefined}, function () {
          api.sync.get('alpha', function (result1) {
            api.sync.get('charlie', function (result2) {
              hmt.assert.equal(result1.alpha, undefined);
              hmt.assert.equal(result2.charlie, 123456.89);
              done();
            });
          });
        });
      });

    });

    describe('multiple', function () {
      it('should remove multiple items based on array of key strings', function (done) {
        api.sync.remove(['beta', 'charlie'], function () {
          api.sync.get(null, function (result) {
            hmt.assert.equal(result.alpha, 'alpha-string');
            hmt.assert.equal(result.beta, undefined);
            hmt.assert.equal(result.charlie, undefined);
            done();
          });
        });
      });

      it('should remove multiple items based on object keys', function (done) {
        api.sync.remove({beta: null, charlie: 'xcx'}, function () {
          api.sync.get(null, function (result) {
            hmt.assert.equal(result.alpha, 'alpha-string');
            hmt.assert.equal(result.beta, undefined);
            hmt.assert.equal(result.charlie, undefined);
            done();
          });
        });
      });
    });
  });

  describe('clear()', function () {
    before(function (done) {
      api = new Storage();
      api.sync.set({
        'alpha': 'alpha-string',
        'beta': ['beta', 'array', 'of', 'stuff'],
        'charlie': 123456.89
      }, function () {
        done();
      });
    });

    it('should erase all data in the store', function (done) {
      api.sync.clear(function () {
        api.sync.get(null, function (result) {
          hmt.assert.equal(Object.keys(result).length, 0);
          done();
        });
      });
    });
  });

  describe('getBytesInUse()', function () {
    before(function () {
      api = new Storage();
    });

    it('should report 0 bytes when empty', function (done) {
      api.sync.getBytesInUse(null, function (bytes) {
        hmt.assert.equal(bytes, 0);
        done();
      });
    });

    describe('when in use', function () {
      before(function (done) {
        api.sync.set({
          'alpha': {
            '1': 1,
            '2': 2
          },
          'beta': [1, 2, 3, 4, 5, 6]
        }, done);
      });


      it('should return some number of bytes when entire store is queried', function (done) {
        api.sync.getBytesInUse(null, function (bytes) {
          hmt.assert.true(bytes > 20);
          done();
        });
      });

      it('should return some smaller number when a single key is queried', function (done) {
        api.sync.getBytesInUse(['alpha'], function (alphaBytes) {
          api.sync.getBytesInUse(null, function (allBytes) {
            hmt.assert.true(alphaBytes < allBytes);
            hmt.assert.true(alphaBytes > 10);
            done();
          });
        });
      });
    });
  });

  describe('onChange events', function () {
    var listener;

    beforeEach(function () {
      api = new Storage();
      listener = addOnChangeListener(api);
    });

    it('should call event handler with changes when set() is called', function (done) {
      api.onChanged.addListener(function (changes, namespace) {
        hmt.assert.equal(changes.alpha.oldValue, undefined);
        hmt.assert.equal(changes.alpha.newValue, 'new value for alpha');
        hmt.assert.equal(namespace, 'sync');
        done();
      });

      api.sync.set({alpha: 'new value for alpha'}, function () {});
    });

    it('should have the previous value in oldValue', function (done) {
      api.sync.set({alpha: 'original value'}, function () {
        api.onChanged.addListener(function (changes, namespace) {
          hmt.assert.equal(changes.alpha.oldValue, 'original value');
          hmt.assert.equal(changes.alpha.newValue, 'new value');
          hmt.assert.equal(namespace, 'sync');
          done();
        });

        api.sync.set({alpha: 'new value'}, function () {});
      });
    });

    describe('remove()', function () {
      beforeEach(function (done) {
        api.sync.set({alpha: 'original value', beta: 'original beta'}, function () {
          done();
        });
      });

      it('should emit a change event when remove() is called with a single key', function (done) {
        api.onChanged.addListener(function (changes, namespace) {
          hmt.assert.equal(changes.alpha.oldValue, 'original value');
          hmt.assert.equal(changes.alpha.newValue, undefined);
          hmt.assert.equal(namespace, 'sync');
          done();
        });

        api.sync.remove('alpha', function () {});
      });

      it('should emit a change event when remove() is called with an array of keys', function (done) {
        api.onChanged.addListener(function (changes, namespace) {
          hmt.assert.equal(changes.alpha.oldValue, 'original value');
          hmt.assert.equal(changes.alpha.newValue, undefined);
          hmt.assert.equal(changes.beta.oldValue, 'original beta');
          hmt.assert.equal(changes.beta.newValue, undefined);
          hmt.assert.equal(namespace, 'sync');
          done();
        });

        api.sync.remove(['alpha', 'beta']);
      });
    });

  });

  describe('managed storage exceptions', function () {
    beforeEach(function () {
      api = new Storage();
    });

    it('set() should throw an error', function () {
      hmt.assert.throws(function () {
        api.managed.set({alpha: 'alpha value'});
      }, /managed/);
    });

    it('remove() should throw an error', function () {
      hmt.assert.throws(function () {
        api.managed.remove('alpha');
      }, /managed/);
    });

    it('clear() should throw an error', function () {
      hmt.assert.throws(function () {
        api.managed.clear();
      }, /managed/);
    });

  });

});
