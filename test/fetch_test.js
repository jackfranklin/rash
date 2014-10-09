var expect = require('expect.js');
var Rash = require('../index');

describe('Rash#fetch', function() {
  it('returns the item if it exists', function() {
    var h = { a: 2, b: 3 };
    var r = Rash(h);
    expect(Rash(h).fetch('a')).to.eql(2);
  });

  it('calls the fn if the key does not exist', function() {
    var h = { a: 2 };
    expect(Rash(h).fetch('b', function(key) {
      return 'no key ' + key;
    })).to.eql('no key b');
  });

  it('returns the other value if provided', function() {
    var h = { a: 2 };
    expect(Rash(h).fetch('b', 4)).to.eql(4);
    
  });

  it('throws if no key and function not given', function() {
    var h = { a: 2 };
    expect(function() {
      Rash(h).fetch('b');
    }).to.throwError();
  });
});
