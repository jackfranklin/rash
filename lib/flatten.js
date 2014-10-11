module.exports = function(Rash) {
  var flattenFn = function(obj, level) {
    var res = [];
    var push = function(f) { res.push(f); };
    for(var key in obj) {
      push(key);
      if(level > 0 && typeof obj[key] === 'object') {
        flattenFn(obj[key], level - 1).forEach(push);
      } else {
        push(obj[key]);
      }
    }
    return res;
  };

  Rash.prototype.flatten = function(level) {
    return flattenFn(this.obj, level || 0);
  };
};
