module.exports = function(Rash) {
  Rash.prototype.delete = function(key, fn) {
    if(this.obj[key]) {
      var val = this.obj[key];
      delete this.obj[key];
      return val;
    } else {
      if(fn && typeof fn == 'function') {
        return fn(key);
      } else {
        return this._default;
      }
    }
  }
};
