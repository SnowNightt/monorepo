(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require("@ybui/button"), require("@ybui/shared")) : typeof define === "function" && define.amd ? define(["exports", "@ybui/button", "@ybui/shared"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.YbuiUi = {}, global.button, global.shared));
})(this, function(exports2, button, shared) {
  "use strict";
  Object.keys(button).forEach((k) => {
    if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports2, k))
      Object.defineProperty(exports2, k, {
        enumerable: true,
        get: () => button[k]
      });
  });
  Object.keys(shared).forEach((k) => {
    if (k !== "default" && !Object.prototype.hasOwnProperty.call(exports2, k))
      Object.defineProperty(exports2, k, {
        enumerable: true,
        get: () => shared[k]
      });
  });
  Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
});
