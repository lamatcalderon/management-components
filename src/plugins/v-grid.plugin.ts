import { App, Plugin } from "vue"
import VGrid from "../components/base/v-grid/v-grid.vue"

export const VGridPlugin: Plugin = {
    install(app: App) {
        app.component('VGrid', VGrid)
    }
}