module.exports = function(Rash) {
  Rash.prototype.deleteIf = function(fn) {
    for(var key in this.obj) {
      var res = fn(key, this.obj[key]);
      if(res) {
        delete this.obj[key];
      }
    }
    return this;
  };
};
