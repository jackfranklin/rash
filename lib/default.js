module.exports = function(Rash) {
  Rash.prototype.default = function(newDefault) {
    if(arguments.length) {
      this._default = newDefault;
    }
    return this._default;
  };
};
