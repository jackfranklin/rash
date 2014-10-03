var expect = require('expect.js');
var Hash = require('../index');

describe('Hash#assoc', function() {
  it('can be instantiated without new', function() {
    expect(Hash({})).to.be.a(Hash);
  });
});
