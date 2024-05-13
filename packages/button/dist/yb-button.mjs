import { defineComponent, openBlock, createElementBlock, createElementVNode, renderSlot } from "vue";
import { hello } from "@ybui/shared";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Button",
  props: {
    text: { default: "worldddd" }
  },
  setup(__props) {
    const prop = __props;
    const clickHandler = () => {
      hello(prop.text);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createElementVNode("button", {
          class: "yb-button",
          onClick: clickHandler
        }, [
          renderSlot(_ctx.$slots, "default")
        ])
      ]);
    };
  }
});
export {
  _sfc_main as Button
};
