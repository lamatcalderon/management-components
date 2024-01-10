import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
    setup() {
        const vgrid = ref();

        onMounted(() => {
            const cols = vgrid.value.querySelector('tr').querySelectorAll('th');
            const rows = vgrid.value.querySelectorAll('tr');
            rows.forEach((row: any) => {
                row.querySelectorAll('td').forEach((col: any, index: number) => {
                    col.insertAdjacentHTML('afterbegin',`<div class="theadrow">${cols[index].innerText}</div>`);
                })
            });
        })

        return {
            vgrid
        }
    }
})