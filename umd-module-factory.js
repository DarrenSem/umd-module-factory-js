// UMD module factory.js
// example of a UMD (Universal Module Definition) for a JavaScript library contained in a function:

(function(name, global, factory) {
  typeof exports === "object" && typeof module !== "undefined"
  ? module.exports = factory()
  : typeof define === "function" && define.amd
  ? define(factory)
  : (
    global[name] = factory()
  );
})("foo", this, (function () {

  var bar = function(v){
    return v + String(v).length;
  };

  var baz = function(arg0) {
    quux.push( bar( [arg0, "baz"] ) );
    return quux.length;
  };

  var quux = baz.qux = [0];

  baz.plugh = function() {
    return quux.pop();
  };

  return baz;

}));

var xyzzy = foo; // or = require("foo")

xyzzy(42); // 2

xyzzy(1); // 3

xyzzy.plugh(); // "1,baz5"

xyzzy(7); // 3

xyzzy.quux // undefined

JSON.stringify(xyzzy.qux)
// ^ [0,"42,baz6","7,baz5"]
