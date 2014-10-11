var expect = require('expect.js');
var Rash = require('../index');

describe('Rash#keepIf', function() {
  it('keeps those that match', function() {
    var h = { a: 2, b: 3 };
    var r = Rash(h);

    r.keepIf(function(k, v) {
      return k == 'a';
    });

    expect(r.obj).to.eql({ a: 2 });
  });
});
