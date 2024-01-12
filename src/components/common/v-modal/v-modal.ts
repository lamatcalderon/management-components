import { defineComponent, ref } from "vue";

export default defineComponent({
    props: {
        isOpen: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: ""
        }
    }
});