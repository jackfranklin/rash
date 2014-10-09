module.exports = function(Rash) {
  Rash.prototype.key = function(val) {
    for(var key in this.obj) {
      if(this.obj[key] === val) {
        return key;
      }
    }
    return undefined;
  };
};
