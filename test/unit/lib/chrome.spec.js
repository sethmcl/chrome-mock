var chrome = hmt.lib('chrome');

describe('chrome', function () {
  it('should contain a runtime API object', function () {
    hmt.assert.equal(typeof chrome.runtime, 'object');
  });
});
