var expect = require('expect.js');
var Rash = require('../index');

describe('Rash#clear', function() {
  it('clears the obj', function() {
    var h = {
      'letters': ['a', 'b', 'c']
    };
    expect(Rash(h).clear()).to.eql({});
  });
});
