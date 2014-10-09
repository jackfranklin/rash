var expect = require('expect.js');
var Rash = require('../index');

describe('Rash#flatten', function() {
  it('flattens the hash', function() {
    expect(Rash({ a: 2 }).flatten()).to.eql(['a', 2]);
  });

  it('doesnt recurse by default', function() {
    var h = { a: 2, b: { c: 3 } };
    expect(Rash(h).flatten()).to.eql(['a', 2, 'b', { c: 3 }]);
  });

  it('takes a level argument to flatten to', function() {
    var h = { a: 2, b: { c: 3 } };
    expect(Rash(h).flatten(1)).to.eql(['a', 2, 'b', 'c', 3]);
  });
});
