# Rash
Ruby's hash methods on JS objects.

# Current Methods Implemented
  - `assoc`
  - `clear`
  - `default`
  - `delete`
  - `deleteIf`
  - `fetch`
  - `flatten`
  - `keepIf`
  - `key`
  - `merge` and `mergeBang`
  - `select` and `selectBang`

# Usage

```js
var regularObject = { a: 1, b: 2 };
var rashedObject = Rash(regularObject);
var notA = rashedObject.deleteIf(function(key, val) {
    return key == 'a';
});
// notA is a Rash instance
console.log(notA.obj) // { b: 2 }
```

Methods that return the modified hash, or a brand new hash, will always return a __Rash object__. This means you can chain the calls really nicely. Methods that return a particular key or individual value will not return them wrapped in `Rash`. __Only methods that return an object will return a Rash instance__.

To access the plain JS object, just access the `obj` property.

# Contributions

Welcome! Just pick a Hash method that hasn't been implemented yet and do it, or improve an existing implementation.

# Changelog

## 0.0.1
- initial release
