var Tabs = hmt.lib('chrome', 'Tabs');

describe('chrome.tabs', function () {
  var api;

  beforeEach(function () {
    api = new Tabs();
  });

  describe('get', function () {
    var cb = hmt.spy();

    describe('with callback', function () {
      beforeEach(function () {
        api.create({ name: 'foo' }, cb);
      });

      it('should provide spy functionality', function () {
        hmt.assert.equal(api.create.callCount, 1);
      });
    });

    describe('without callback', function () {
      beforeEach(function () {
        api.create({ name: 'foo' });
      });

      it('should provide spy functionality', function () {
        hmt.assert.equal(api.create.callCount, 1);
      });

    });

  });
});
