import { defineComponent } from "vue";

export default defineComponent({
    props: {
        isOpen: {
            type: Boolean,
            default: false
        }
    }
});