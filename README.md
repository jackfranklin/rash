A WIP experiment to implement all Ruby`s Hash methods on JS objects.

# Current Methods Implemented
  - `assoc`
  - `clear`
  - `default`
  - `delete`
  - `delete_if`
  - `fetch`
  - `flatten`
  - `keep_if`
  - `key`

# Usage

```js
var regularObject = { a: 1, b: 2 };
var rashedObject = Rash(regularObject);
var notA = rashedObject.deleteIf(function(key, val) {
    return key == 'a';
});
console.log(notA) // { b: 2 }
```

It is important to note that methods on a `Rash` object __return a plain JS object__. This means that Rash calls cannot be chained.

# Contributions

Welcome! Just pick a Hash method that hasn't been implemented yet and do it, or improve an existing implementation.
