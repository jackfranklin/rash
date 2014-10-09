module.exports = function(Rash) {
  Rash.prototype.assoc = function(key) {
    if(this.obj.hasOwnProperty(key)) {
      return [key, this.obj[key]];
    }
    return this._default;
  };
};
