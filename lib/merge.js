module.exports = function(Rash) {
  Rash.prototype.merge = function(other) {
    var newHash = {};

    // merge does not mutate the original
    for(var key in this.obj) { newHash[key] = this.obj[key] }

    for(var key in other) { newHash[key] = other[key] }

    return Rash(newHash);
  };

  Rash.prototype.mergeBang = function(other) {
    for(var key in other) { this.obj[key] = other[key] }
    return this;
  };
};
