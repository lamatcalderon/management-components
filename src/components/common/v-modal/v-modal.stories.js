import VModal from './v-modal.vue';

import { PLANTILLA_HTML } from "../../../constants/storybook.constant";

const TITULO = `MANAGEMENT V-MODAL`;

const SUMMARY = `
    El componente <strong>MANAGEMENT V-MODAL</strong> permite la creación de un modal en el centro de la pantalla, en el se definen las siguientes <strong>propiedades</strong>:`;

const PROPS = `
    <li><p class="erp-storybook-texto"><strong>isOpen</strong>: Flag que indica si el modal se muestra o se oculta</p></li>
`;

const COMPONENT = `<v-modal v-bind="args"><template #content>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</template><template #footer></template></v-modal>`;

const AUTOR = `Luis Amat`;

const HISTORY = `
    <span><p class="erp-storybook-texto">[2024-01-10][Luis Amat] Creación del componente</p></span>
`;

export default {    
    title: 'COMMON/VModal',
    component: VModal,
}

const Template = args => ({
    components: { VModal },
    setup() {
        return { args }
    },
    template: PLANTILLA_HTML.replace("$$TITULO$$", `${TITULO}`).replace("$$SUMMARY$$",`${SUMMARY}`).replace("$$PROPS$$", `${PROPS}`).replace("$$COMPONENT$$", `${COMPONENT}`).replace("$$AUTOR$$", `${AUTOR}`).replace("$$HISTORY$$", `${HISTORY}`)
})

export const Base = Template.bind({});
Base.args = {
    "title": "MODAL",
    "isOpen": true
}
Base.storyName = "Base";