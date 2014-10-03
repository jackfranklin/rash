var Rash = function(obj) {
  if(this instanceof Rash) {
    this.obj = obj;
  } else {
    return new Rash(obj)
  }
};

require('lib/assoc')(Rash);

module.exports = Rash;
