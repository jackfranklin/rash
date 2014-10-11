module.exports = function(Rash) {
  Rash.prototype.select = function(fn) {
    var newObj = {};

    for(var key in this.obj) {
      if(fn(key, this.obj[key])) {
        newObj[key] = this.obj[key];
      }
    }

    return Rash(newObj);
  };
};
