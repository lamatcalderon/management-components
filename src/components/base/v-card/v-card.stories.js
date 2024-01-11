import VCard from './v-card.vue';

import { PLANTILLA_HTML } from "../../../constants/storybook.constant";

const TITULO = `MANAGEMENT V-CARD`;

const SUMMARY = `
    El componente <strong>MANAGEMENT V-CARD</strong> permite la creación de una tarjeta, en el se definen las siguientes <strong>propiedades</strong>:`;

const PROPS = `
    <li><p class="erp-storybook-texto"><strong>title</strong>: Título del card</p></li>
`;

const COMPONENT = `<v-card v-bind="args"><template #content>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</template></v-card>`;

const AUTOR = `Luis Amat`;

const HISTORY = `
    <span><p class="erp-storybook-texto">[2024-01-10][Luis Amat] Creación del componente</p></span>
`;

export default {    
    title: 'BASE/VCard',
    component: VCard,
}

const Template = args => ({
    components: { VCard },
    setup() {
        return { args }
    },
    template: PLANTILLA_HTML.replace("$$TITULO$$", `${TITULO}`).replace("$$SUMMARY$$",`${SUMMARY}`).replace("$$PROPS$$", `${PROPS}`).replace("$$COMPONENT$$", `${COMPONENT}`).replace("$$AUTOR$$", `${AUTOR}`).replace("$$HISTORY$$", `${HISTORY}`)
})

export const Base = Template.bind({});
Base.args = {
    "title": "SUMMARY"
}
Base.storyName = "Base";