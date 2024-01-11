import { defineComponent } from "vue";

import { APP_PREFIX } from "../../../constants/app.constant";

export default defineComponent({
    props: {
        label: {
            type: String,
            default: ""
        },
        placeholder: {
            type: String,
            default: ""
        },
        invalid: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    setup() {
        return {
            APP_PREFIX
        }
    }
})