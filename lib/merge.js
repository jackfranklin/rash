module.exports = function(Rash) {
  var nonMutateMerge = function(obj, other) {
    var newHash = {};

    // merge does not mutate the original
    for(var key in obj) { newHash[key] = obj[key] }

    for(var key in other) { newHash[key] = other[key] }

    return newHash;
  };

  Rash.prototype.merge = function(other) {
    return nonMutateMerge(this.obj, other);
  };

  Rash.prototype.mergeBang = function(other) {
    return Rash(nonMutateMerge(this.obj, other));
  };
};
