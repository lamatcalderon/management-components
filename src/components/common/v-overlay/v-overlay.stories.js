import VOverlay from './v-overlay.vue';

import { PLANTILLA_HTML } from "../../../constants/storybook.constant";

const TITULO = `MANAGEMENT V-OVERLAY`;

const SUMMARY = `
    El componente <strong>MANAGEMENT V-OVERLAY</strong> permite la creación de una pantalla oscura que bloquea la pantalla anterior, en el se definen las siguientes <strong>propiedades</strong>:`;

const PROPS = `
    <li><p class="erp-storybook-texto"><strong>isOpen</strong>: Flag que indica si el overlay se muestra o se oculta</p></li>
`;

const COMPONENT = `<v-overlay v-bind="args"/>`;

const AUTOR = `Luis Amat`;

const HISTORY = `
    <span><p class="erp-storybook-texto">[2024-01-10][Luis Amat] Creación del componente</p></span>
`;

export default {    
    title: 'COMMON/VOverlay',
    component: VOverlay,
}

const Template = args => ({
    components: { VOverlay },
    setup() {
        return { args }
    },
    template: PLANTILLA_HTML.replace("$$TITULO$$", `${TITULO}`).replace("$$SUMMARY$$",`${SUMMARY}`).replace("$$PROPS$$", `${PROPS}`).replace("$$COMPONENT$$", `${COMPONENT}`).replace("$$AUTOR$$", `${AUTOR}`).replace("$$HISTORY$$", `${HISTORY}`)
})

export const Base = Template.bind({});
Base.args = {
    "isOpen": false
}
Base.storyName = "Base";