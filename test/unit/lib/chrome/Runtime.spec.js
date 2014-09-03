var Runtime = hmt.lib('chrome', 'Runtime');
var Event   = hmt.lib('Event');
var api     = new Runtime();

describe('chrome.runtime', function () {
  beforeEach(function () {
    api = new Runtime();
  });

  describe('events', function () {
    var events = [
      'onStartup',
      'onInstalled',
      'onSuspend',
      'onSuspendCanceled',
      'onUpdateAvailable',
      'onBrowserUpdateAvailable',
      'onConnect',
      'onConnectExternal',
      'onMessage',
      'onMessageExternal',
      'onRestartRequired'
    ];

    events.forEach(function (eventName) {
      testEvent(api, eventName);
    });
  });

  describe('getBackgroundPage', function () {
    var page;

    beforeEach(function () {
      api.getBackgroundPage(function (data) {
        page = data;
      });
    });

    xit('should return an object', function () {
      hmt.assert.deepEqual({}, page);
    });
  });

  describe('getManifest', function () {
    var manifest;

    beforeEach(function () {
      manifest = api.getManifest();
    });

    xit('should be an object', function () {
      hmt.assert.equal(typeof manifest, 'object');
    });

    xit('should have a version', function () {
      hmt.assert.equal(manifest.version, '0.0.1');
    });
  });

  describe('getURL', function () {
    xit('should return the correct path', function () {
      var url;

      api.id = 9;
      url = api.getURL('foo.js');
      hmt.assert.equal(url, 'chrome://9/foo.js');
    });
  });

  describe('reload', function () {
    it('should be a spy', function () {
      hmt.assert.equal(api.reload.toString(), 'spy');
    });
  });
});

/**
 * @param {Runtime} api
 * @param {string} eventName
 */
function testEvent(api, eventName) {
  it('should be an Event', function () {
    hmt.assert.equal(api[eventName] instanceof Event, true);
  });
}
