var Rash = function(obj) {
  if(this instanceof Rash) {
    this.obj = obj || {};
    this._default = undefined;
  } else {
    return new Rash(obj);
  }
};

['assoc',
  'clear',
  'default',
  'delete',
  'delete_if',
  'fetch',
  'flatten',
  'keep_if',
  'key',
  'merge'
].forEach(function(a) {
  require('./lib/' + a)(Rash);
});

module.exports = Rash;
