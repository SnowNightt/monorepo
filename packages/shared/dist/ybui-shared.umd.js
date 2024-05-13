(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require("lodash")) : typeof define === "function" && define.amd ? define(["exports", "lodash"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.YbuiShared = {}, global.lodash));
})(this, function(exports2, lodash) {
  "use strict";
  function useLodash() {
    return lodash;
  }
  function hello(str = "world") {
    const txt = "hello " + str;
    alert(txt);
    return txt;
  }
  exports2.hello = hello;
  exports2.useLodash = useLodash;
  Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
});
