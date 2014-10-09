module.exports = function(Rash) {
  Rash.prototype.keepIf = function(fn) {
    for(var key in this.obj) {
      if(!fn(key, this.obj[key])) delete this.obj[key];
    }
    return this.obj;
  };
};
