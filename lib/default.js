module.exports = function(Rash) {
  Rash.prototype.default = function(newDefault) {
    if([].slice.call(arguments).length > 0) {
      this._default = newDefault;
    } else {
      return this._default;
    }
  }
};
