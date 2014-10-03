module.exports = function(Rash) {
  Rash.prototype.assoc = function(key) {
    if(this.obj[key]) {
      return [key, this.obj[key]];
    } else {
      return this._default;
    }
  };
};
