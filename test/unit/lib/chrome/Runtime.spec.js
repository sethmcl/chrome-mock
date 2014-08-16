var Runtime = hmt.lib('chrome', 'Runtime');

describe('chrome.runtime', function () {
  var api;

  beforeEach(function () {
    api = new Runtime();
  });

  describe('events', function () {
    it('should have onStartup.addListener', function () {
      hmt.assert.equal(typeof api.onStartup.addListener, 'function');
    });

    it('should have onInstalled.addListener', function () {
      hmt.assert.equal(typeof api.onInstalled.addListener, 'function');
    });

    it('should have onSuspend.addListener', function () {
      hmt.assert.equal(typeof api.onSuspend.addListener, 'function');
    });

    it('should have onSuspendCanceled.addListener', function () {
      hmt.assert.equal(typeof api.onSuspendCanceled.addListener, 'function');
    });

    it('should have onUpdateAvailable.addListener', function () {
      hmt.assert.equal(typeof api.onUpdateAvailable.addListener, 'function');
    });

    it('should have onBrowserUpdateAvailable.addListener', function () {
      hmt.assert.equal(typeof api.onBrowserUpdateAvailable.addListener, 'function');
    });

    it('should have onConnect.addListener', function () {
      hmt.assert.equal(typeof api.onConnect.addListener, 'function');
    });

    it('should have onConnectExternal.addListener', function () {
      hmt.assert.equal(typeof api.onConnectExternal.addListener, 'function');
    });

    it('should have onMessage.addListener', function () {
      hmt.assert.equal(typeof api.onMessage.addListener, 'function');
    });

    it('should have onMessageExternal.addListener', function () {
      hmt.assert.equal(typeof api.onMessageExternal.addListener, 'function');
    });

    it('should have onRestartRequired.addListener', function () {
      hmt.assert.equal(typeof api.onRestartRequired.addListener, 'function');
    });
  });
});
