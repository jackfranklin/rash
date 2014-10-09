module.exports = function(Rash) {
  var flattenFn = function(obj, level) {
    var res = []
    for(var key in obj) {
      res.push(key);
      if(level > 0 && typeof obj[key] === 'object') {
        var flatVal = flattenFn(obj[key], level - 1);
        flatVal.forEach(function(f) { res.push(f); });
      } else {
        res.push(obj[key]);
      }
    }
    return res;
  };

  Rash.prototype.flatten = function(level) {
    return flattenFn(this.obj, level);
  }
};
