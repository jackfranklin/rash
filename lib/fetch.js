module.exports = function(Rash) {
  Rash.prototype.fetch = function(key, fn) {
    if(this.obj.hasOwnProperty(key)) {
      return this.obj[key];
    } else {
      if(fn && typeof fn == 'function') return fn(key);
      if(fn) return fn;
      throw Error('KeyError: ' + key + ' not found');
    }
  };
};
