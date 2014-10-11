var expect = require('expect.js');
var Rash = require('../index');

describe('Rash#merge', function() {
  it('merges hashes and returns a new Rash', function() {
    var a = { a: 2 };
    var b = { b: 2 };
    expect(Rash(a).merge(b).obj).to.eql({ a: 2, b : 2 });
  });

  it('uses values from the second hash over the first', function() {
    var a = { a: 2 };
    var b = { a: 3 };
    expect(Rash(a).merge(b).obj).to.eql({ a: 3 });
  });

  it('does not modify the original', function() {
    var r = Rash({ a: 2 });
    r.merge({ b: 2 });
    expect(r.obj).to.eql({ a: 2 });
  });

});

describe('Rash#mergeBang', function() {
  it('modifies the original and returns a Rash instance', function() {
    expect(Rash({ a: 2 }).mergeBang({ b: 3 }).obj).to.eql({ a: 2, b: 3});
  });
});
