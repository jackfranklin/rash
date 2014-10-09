var expect = require('expect.js');
var Rash = require('../index');

describe('Rash#delete', function() {
  it('deletes and returns the item', function() {
    var h = { a: 2, b: 3 };
    var r = Rash(h);
    expect(r.delete('a')).to.eql(2);
    expect(r.obj).to.eql({ b: 3 });
  });

  it('returns _default if the item does not exist', function() {
    var h = { a: 2 };
    expect(Rash(h).delete('b')).to.eql(undefined);
  });

  it('takes a function that is called if the key does not exist', function() {
    var h = { a: 2 };
    expect(Rash(h).delete('b', function(key) {
      return 'key ' + key + ' not defined';
    })).to.eql('key b not defined');
  });
});
