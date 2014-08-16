var Event = hmt.lib('Event');

describe('Event', function () {
  var event;

  before(function () {
    event = new Event();
  });

  describe('addListener', function () {
    var fn;
    var result;

    before(function () {
      fn = function (name) {
        result = 'hi ' + name;
      };

      event.addListener(fn);
    });

    it('should be a spy', function () {
      hmt.assert.equal(event.addListener.callCount, 1);
    });

    it('should recorded the listener fn', function () {
      hmt.assert.equal(event.listeners.length, 1);
    });

    it('should call function when triggered', function () {
      event.trigger('seth');
      hmt.assert.equal(result, 'hi seth');
    });
  });
});
