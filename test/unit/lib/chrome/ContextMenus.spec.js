var ContextMenus = hmt.lib('chrome', 'ContextMenus');

describe('chrome.contextMenus', function () {
  var api;

  beforeEach(function () {
    api = new ContextMenus();
  });

  describe('create', function () {
    var cb = hmt.spy();

    describe('with callback', function () {
      beforeEach(function () {
        api.create({ name: 'foo' }, cb);
      });

      it('should provide spy functionality', function () {
        hmt.assert.equal(api.create.callCount, 1);
      });

      xit('should record the menu data', function () {
        hmt.assert.deepEqual(api.menus[0], { name: 'foo' });
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
