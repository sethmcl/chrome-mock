var Windows = hmt.lib('chrome', 'Windows');

describe('chrome.windows', function () {
  var api;

  beforeEach(function () {
    api = new Windows();
  });

  describe('get', function () {
    var cb = hmt.spy();

    describe('with callback', function () {
      beforeEach(function () {
        api.get({ name: 'foo' }, cb);
      });

      it('should provide spy functionality', function () {
        hmt.assert.equal(api.get.callCount, 1);
      });
    });

    describe('without callback', function () {
      beforeEach(function () {
        api.get({ name: 'foo' });
      });

      it('should provide spy functionality', function () {
        hmt.assert.equal(api.get.callCount, 1);
      });
    });
  });

  describe('getCurrent', function () {
    var cb = hmt.spy();

    describe('with callback', function () {
      beforeEach(function () {
        api.getCurrent({ name: 'foo' }, cb);
      });

      it('should provide spy functionality', function () {
        hmt.assert.equal(api.getCurrent.callCount, 1);
      });
    });

    describe('without callback', function () {
      beforeEach(function () {
        api.getCurrent({ name: 'foo' });
      });

      it('should provide spy functionality', function () {
        hmt.assert.equal(api.getCurrent.callCount, 1);
      });
    });
  });

  describe('getLastFocused', function () {
    var cb = hmt.spy();

    describe('with callback', function () {
      beforeEach(function () {
        api.getLastFocused({ name: 'foo' }, cb);
      });

      it('should provide spy functionality', function () {
        hmt.assert.equal(api.getLastFocused.callCount, 1);
      });
    });

    describe('without callback', function () {
      beforeEach(function () {
        api.getLastFocused({ name: 'foo' });
      });

      it('should provide spy functionality', function () {
        hmt.assert.equal(api.getLastFocused.callCount, 1);
      });
    });
  });

  describe('getAll', function () {
    var cb = hmt.spy();

    describe('with callback', function () {
      beforeEach(function () {
        api.getAll({ name: 'foo' }, cb);
      });

      it('should provide spy functionality', function () {
        hmt.assert.equal(api.getAll.callCount, 1);
      });
    });

    describe('without callback', function () {
      beforeEach(function () {
        api.getAll({ name: 'foo' });
      });

      it('should provide spy functionality', function () {
        hmt.assert.equal(api.getAll.callCount, 1);
      });
    });
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


  describe('update', function () {
    var cb = hmt.spy();

    describe('with callback', function () {
      beforeEach(function () {
        api.update({ name: 'foo' }, cb);
      });

      it('should provide spy functionality', function () {
        hmt.assert.equal(api.update.callCount, 1);
      });
    });

    describe('without callback', function () {
      beforeEach(function () {
        api.update({ name: 'foo' });
      });

      it('should provide spy functionality', function () {
        hmt.assert.equal(api.update.callCount, 1);
      });
    });
  });


  describe('remove', function () {
    var cb = hmt.spy();

    describe('with callback', function () {
      beforeEach(function () {
        api.remove({ name: 'foo' }, cb);
      });

      it('should provide spy functionality', function () {
        hmt.assert.equal(api.remove.callCount, 1);
      });
    });

    describe('without callback', function () {
      beforeEach(function () {
        api.remove({ name: 'foo' });
      });

      it('should provide spy functionality', function () {
        hmt.assert.equal(api.remove.callCount, 1);
      });
    });
  });
});
