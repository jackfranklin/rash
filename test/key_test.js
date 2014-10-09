var expect = require('expect.js');
var Rash = require('../index');

describe('Rash#key', function() {
  it('returns the key for a given value', function() {
    var h = { a: 2, b: 3 };
    expect(Rash(h).key(2)).to.eql('a');
  });

  it('returns undefined if the key does not exist', function() {
    expect(Rash({}).key(2)).to.eql(undefined);
  });
});
