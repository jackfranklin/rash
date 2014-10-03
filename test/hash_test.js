var expect = require('expect.js');
var Rash = require('../index');

describe('creating a Rash', function() {
  it('can be instantiated without new', function() {
    expect(Rash({})).to.be.a(Rash);
  });
});
