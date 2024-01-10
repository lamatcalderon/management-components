'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var script = vue.defineComponent({
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

const _hoisted_1 = { class: "v-grid" };
const _hoisted_2 = { ref: "vgrid" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
    vue.createElementVNode("table", _hoisted_2, [
      vue.createElementVNode("thead", null, [
        vue.renderSlot(_ctx.$slots, "thead")
      ]),
      vue.createElementVNode("tbody", null, [
        vue.renderSlot(_ctx.$slots, "tbody")
      ])
    ], 512 /* NEED_PATCH */)
  ]))
}

script.render = render;
script.__file = "src/components/base/v-grid/v-grid.vue";

exports.VGrid = script;
//# sourceMappingURL=index.js.map
