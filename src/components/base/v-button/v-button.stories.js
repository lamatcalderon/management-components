import VButton from './v-button.vue';

import { PLANTILLA_HTML } from "../../../constants/storybook.constant";

const TITULO = `MANAGEMENT V-BUTTON`;

const SUMMARY = `
    El componente <strong>MANAGEMENT V-BUTTON</strong> permite la creación de un botón, en el se definen las siguientes <strong>propiedades</strong>:`;

const PROPS = `
`;

const COMPONENT = `<div style="width: 25%"><v-button v-bind="args">ACEPTAR</v-button></div>`;

const AUTOR = `Luis Amat`;

const HISTORY = `
    <span><p class="erp-storybook-texto">[2024-01-10][Luis Amat] Creación del componente</p></span>
`;

export default {    
    title: 'BASE/VButton',
    component: VButton,
}

const Template = args => ({
    components: { VButton },
    setup() {
        return { args }
    },
    template: PLANTILLA_HTML.replace("$$TITULO$$", `${TITULO}`).replace("$$SUMMARY$$",`${SUMMARY}`).replace("$$PROPS$$", `${PROPS}`).replace("$$COMPONENT$$", `${COMPONENT}`).replace("$$AUTOR$$", `${AUTOR}`).replace("$$HISTORY$$", `${HISTORY}`)
})

export const Primary = Template.bind({});
Primary.args = {
    "class": "v-button primary"
}
Primary.storyName = "Primary";

export const Secondary = Template.bind({});
Secondary.args = {
    "class": "v-button secondary"
}
Secondary.storyName = "Secondary";