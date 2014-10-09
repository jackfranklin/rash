module.exports = function(Rash) {
  Rash.prototype.clear = function() {
    this.obj = {};
    return this.obj;
  };
};
