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
        modelValue: [String, Number],
        invalid: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    setup(props, { emit }) {
        const updateValue = (event: any) => {
            emit("input", event.target.value);
          };
        return {
            APP_PREFIX,
            updateValue
        }
    }
})