var expect = require('expect.js');
var Rash = require('../index');

describe('Rash#select', function() {
  it('returns a new hash', function() {
    var h = { a: 2, b: 3 };
    var r = Rash(h);

    var newHash = r.select(function(k, v) {
      return k == 'a';
    });

    expect(newHash.obj).to.eql({ a: 2 });
  });

  it('does not modify the original', function() {
    var h = { a: 2, b: 3 };
    var r = Rash(h);

    var newHash = r.select(function(k, v) {
      return k == 'a';
    });

    expect(r.obj).to.eql({ a: 2, b: 3 });
  });
});

describe('Rash#selectBang', function() {
  it('modifies in place', function() {
    var r = Rash({ a: 2, b: 3 });

    r.selectBang(function(k, v) {
      return k == 'a';
    });

    expect(r.obj).to.eql({ a: 2 });
  });
});
