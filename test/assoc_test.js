var expect = require('expect.js');
var Rash = require('../index');

describe('Rash#assoc', function() {
  it('returns k-v pair', function() {
    var h = {
      'letters': ['a', 'b', 'c']
    };
    expect(Rash(h).assoc('letters')).to.eql(['letters', ['a', 'b', 'c']]);
  });

  it('returns k-v pair if falsey value', function() {
    var h = {
      counter: 0
    };
    expect(Rash(h).assoc('counter')).to.eql(['counter', 0]);
  });

  it('returns undefined if no key', function() {
    expect(Rash({}).assoc('foo')).to.eql(undefined);
  });
});
