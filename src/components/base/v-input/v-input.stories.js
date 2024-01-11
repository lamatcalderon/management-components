import VInput from './v-input.vue';

import { PLANTILLA_HTML } from "../../../constants/storybook.constant";

const TITULO = `MANAGEMENT V-INPUT`;

const SUMMARY = `
    El componente <strong>MANAGEMENT V-INPUT</strong> permite la creación de una caja de texto, en el se definen las siguientes <strong>propiedades</strong>:`;

const PROPS = `
    <li><p class="erp-storybook-texto"><strong>label</strong>: Descripción etiqueta superior</p></li>
    <li><p class="erp-storybook-texto"><strong>placeholder</strong>: Descripción del placeholder</p></li>
    <li><p class="erp-storybook-texto"><strong>invalid</strong>: Flag que indica que el campo es inválido</p></li>
    <li><p class="erp-storybook-texto"><strong>disabled</strong>: Flag que indica que el campo esta desabilitado</p></li>
`;

const COMPONENT = `<div style="width: 50%"><v-input v-bind="args"/></div>`;

const AUTOR = `Luis Amat`;

const HISTORY = `
    <span><p class="erp-storybook-texto">[2024-01-10][Luis Amat] Creación del componente</p></span>
`;

export default {    
    title: 'BASE/VInput',
    component: VInput,
}

const Template = args => ({
    components: { VInput },
    setup() {
        return { args }
    },
    template: PLANTILLA_HTML.replace("$$TITULO$$", `${TITULO}`).replace("$$SUMMARY$$",`${SUMMARY}`).replace("$$PROPS$$", `${PROPS}`).replace("$$COMPONENT$$", `${COMPONENT}`).replace("$$AUTOR$$", `${AUTOR}`).replace("$$HISTORY$$", `${HISTORY}`)
})

export const Base = Template.bind({});
Base.args = {
    "label": "NOMBRE",
    "placeholder": "Ingrese nombre"
}
Base.storyName = "Base";

export const Invalid = Template.bind({});
Invalid.args = {
    "label": "NOMBRE",
    "placeholder": "Ingrese nombre",
    "invalid": true
}
Invalid.storyName = "Invalid";

export const Disabled = Template.bind({});
Disabled.args = {
    "label": "NOMBRE",
    "placeholder": "Ingrese nombre",
    "disabled": true
}
Disabled.storyName = "Disabled";