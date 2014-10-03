var expect = require('expect.js');
var Rash = require('../index');

describe('Rash#assoc', function() {
  it('returns the two len array', function() {
    var h = {
      'letters': ['a', 'b', 'c']
    };
    expect(Rash(h).assoc('letters')).to.eql(['letters', ['a', 'b', 'c']]);
  });

  it('returns undefined if no key', function() {
    expect(Rash({}).assoc('foo')).to.eql(undefined);
  });
});
