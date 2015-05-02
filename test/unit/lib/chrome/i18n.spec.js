var I18n = hmt.lib('chrome', 'I18n');
var path = require('path');

describe('chrome.I18n', function () {
  var api;

  beforeEach(function () {
    api = new I18n();
    api.loadDefaults(hmt.path('fixtures', 'messages.json'));
  });

  describe('getMessage', function(){
    var cb = hmt.spy();

    describe('with callback', function () {
      it('should provide spy functionality', function () {
        var test = api.getMessage('test');
        hmt.assert(test === 'test');
      });
    });
  });


  describe('_locales', function(){
      it('should provide spy functionality', function () {
        var test = api._locales;
        hmt.assert(test.test.message === 'test', 'make sure messages.json has test');
      });
  });


  // describe('setLocale', function(){
  //   it('should set a local without error', function () {
  //     var test = api.setLocale('GB');
  //     debugger;
  //     hmt.assert(!test, 'test without error');
  //   });
  // });

  // describe('setMessagesPath', function(){
  //   it('should set a setMessagesPath different from default', function () {
  //     var dir = path.join(__dirname, '/../../../fixtures/messages.json');
  //     api.setMessagesPath(dir);
  //     var test = api._locales;
  //     hmt.assert(test.fixture.message === 'test', 'test without error');
  //   });
  // });

});
