var expect = require('expect.js');
var Rash = require('../index');

describe('Rash#deleteIf', function() {
  it('deletes those that match', function() {
    var h = { a: 2, b: 3 };
    var r = Rash(h);
    expect(r.deleteIf(function(k, v) {
      return k == 'a';
    }).obj).to.eql({ b: 3 });
  });
});
