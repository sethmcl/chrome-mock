var Tabs = hmt.lib('chrome', 'Tabs');

describe('chrome.tabs', function () {
  var tab;

  beforeEach(function () {
    tab = new Tabs();
  });

  describe('get', function () {
    var cb = hmt.spy();

    describe('with callback', function () {
      beforeEach(function () {
        tab.create({ name: 'foo' }, cb);
      });

      it('should provide spy functionality', function () {
        hmt.assert.equal(tab.create.callCount, 1);
      });
    });

    describe('without callback', function () {
      beforeEach(function () {
        tab.create({ name: 'foo' });
      });

      it('should provide spy functionality', function () {
        hmt.assert.equal(tab.create.callCount, 1);
      });

    });

  });
});
