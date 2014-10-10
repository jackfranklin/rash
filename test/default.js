var expect = require('expect.js');
var Rash = require('../index');

describe('Rash#default', function() {
  it('returns the default given no args', function() {
    expect(Rash().default()).to.eql(undefined);
  });

  it('can set the default', function() {
    var r = new Rash();
    r.default('foo');
    expect(r.assoc('blah')).to.eql('foo');
  });

  it('returns the default when set', function() {
    var r = new Rash();
    expect(r.default('foo')).to.eql('foo');
  });
});
