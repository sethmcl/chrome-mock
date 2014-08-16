var Chrome = hmt.lib('chrome');

describe('Chrome', function () {
  var chrome;

  before(function () {
    chrome = new Chrome();
  });

  it('should contain a runtime API object', function () {
    hmt.assert.equal(typeof chrome.runtime, 'object');
  });
});
