'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var script$1 = vue.defineComponent({
    setup() {
        const vgrid = vue.ref();
        vue.onMounted(() => {
            const cols = vgrid.value.querySelector('tr').querySelectorAll('th');
            const rows = vgrid.value.querySelectorAll('tr');
            rows.forEach((row) => {
                row.querySelectorAll('td').forEach((col, index) => {
                    col.insertAdjacentHTML('afterbegin', `<div class="theadrow">${cols[index].innerText}</div>`);
                });
            });
        });
        return {
            vgrid
        };
    }
});

const _hoisted_1$1 = { class: "v-grid" };
const _hoisted_2$1 = { ref: "vgrid" };

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$1, [
    vue.createElementVNode("table", _hoisted_2$1, [
      vue.createElementVNode("thead", null, [
        vue.renderSlot(_ctx.$slots, "thead")
      ]),
      vue.createElementVNode("tbody", null, [
        vue.renderSlot(_ctx.$slots, "tbody")
      ])
    ], 512 /* NEED_PATCH */)
  ]))
}

script$1.render = render$1;
script$1.__file = "src/components/base/v-grid/v-grid.vue";

var script = vue.defineComponent({
    props: {
        title: {
            type: String,
            default: ""
        }
    }
});

const _withScopeId = n => (vue.pushScopeId("data-v-09fa69e1"),n=n(),vue.popScopeId(),n);
const _hoisted_1 = { class: "v-card" };
const _hoisted_2 = { class: "card-title" };
const _hoisted_3 = /*#__PURE__*/ _withScopeId(() => /*#__PURE__*/vue.createElementVNode("span", null, null, -1 /* HOISTED */));

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
    vue.createElementVNode("div", _hoisted_2, [
      vue.createElementVNode("span", null, vue.toDisplayString(_ctx.title), 1 /* TEXT */),
      _hoisted_3
    ]),
    vue.renderSlot(_ctx.$slots, "content")
  ]))
}

script.render = render;
script.__scopeId = "data-v-09fa69e1";
script.__file = "src/components/base/v-card/v-card.vue";

exports.VCard = script;
exports.VGrid = script$1;
//# sourceMappingURL=index.js.map
