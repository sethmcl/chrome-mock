var Event = hmt.lib('Event');

describe('Event', function () {


  describe('addListener', function () {
    var fn;
    var result;
    var event;

    before(function () {
      event = new Event();
    });

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

  describe('removeListener', function () {
    var fn;
    var result;
    var event;

    before(function () {
      event = new Event();
      fn1 = hmt.spy(function Hello (name) {
        result = 'hi ' + name;
      });

      fn2 = hmt.spy(function Bye (name) {
        result = 'goodbye, ' + name;
      });

      event.addListener(fn2);
      event.addListener(fn1);
      event.removeListener(fn1);
    });

    it('should be a spy', function () {
      hmt.assert.equal(event.removeListener.callCount, 1);
    });

    it('should only have recorded the functions that are still being listened to', function () {
      hmt.assert.equal(event.listeners.length, 1);
      hmt.assert.equal(event.listeners.indexOf(fn1), -1);
      hmt.assert.equal(event.listeners.indexOf(fn2) > -1, true);
    });

    it('should not call the function that is no longer being listened to', function () {
      event.trigger('mark');
      hmt.assert.equal(result, 'goodbye, mark');
      hmt.assert.equal(fn1.callCount, 0);
      hmt.assert.equal(fn2.callCount, 1);
    });
  });
});
