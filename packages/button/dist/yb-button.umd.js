(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require("vue"), require("@ybui/shared")) : typeof define === "function" && define.amd ? define(["exports", "vue", "@ybui/shared"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.YbuiButton = {}, global.vue, global.shared));
})(this, function(exports2, vue, shared) {
  "use strict";
  const _sfc_main = /* @__PURE__ */ vue.defineComponent({
    __name: "Button",
    props: {
      text: { default: "worldddd" }
    },
    setup(__props) {
      const prop = __props;
      const clickHandler = () => {
        shared.hello(prop.text);
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("div", null, [
          vue.createElementVNode("button", {
            class: "yb-button",
            onClick: clickHandler
          }, [
            vue.renderSlot(_ctx.$slots, "default")
          ])
        ]);
      };
    }
  });
  exports2.Button = _sfc_main;
  Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
});
