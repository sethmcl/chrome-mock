var contextMenus = hmt.lib('chrome', 'contextMenus');

describe('chrome.contextMenus', function () {
  var api = new contextMenus.Constructor();

  describe('create', function () {
    var cb = hmt.spy();

    before(function () {
      api.create({ name: 'foo' }, cb);
    });

    it('should provide spy functionality', function () {
      hmt.assert.equal(api.create.callCount, 1);
    });

    it('should record the menu data', function () {
      hmt.assert.deepEqual(api.menus[0], { name: 'foo' });
    });

  });
});
