import VGrid from './v-grid.vue';

import { PLANTILLA_HTML } from "../../../constants/storybook.constant";

const TITULO = `MANAGEMENT V-GRID`;

const SUMMARY = `
    El componente <strong>MANAGEMENT V-GRID</strong> permite la creación de una grilla, en el se definen las siguientes <strong>propiedades</strong>:`;

const PROPS = `
    
`;

const COMPONENT = `<v-grid v-bind="args"><template #thead><tr>
<th>N°</th>
<th>NOMBRES</th>
<th>APELLIDOS</th>
<th>DNI</th>
<th>ACCIONES</th>
</tr></template><template #tbody>
<tr><td>1</td><td>Alonso</td><td>Arana</td><td>47859632</td><td></td></tr>
<tr><td>2</td><td>Julio</td><td>Iglesias</td><td>47859652</td><td></td></tr>
<tr><td>3</td><td>Rafael</td><td>Gamarra</td><td>47859632</td><td></td></tr>
<tr><td>4</td><td>Fiorella</td><td>Quispe</td><td>47859632</td><td></td></tr>
<tr><td>5</td><td>Sandra</td><td>Cueva</td><td>47859632</td><td></td></tr>
</template></v-card>`;

const AUTOR = `Luis Amat`;

const HISTORY = `
    <span><p class="erp-storybook-texto">[2024-01-10][Luis Amat] Creación del componente</p></span>
`;

export default {    
    title: 'BASE/VGrid',
    component: VGrid,
}

const Template = args => ({
    components: { VGrid },
    setup() {
        return { args }
    },
    template: PLANTILLA_HTML.replace("$$TITULO$$", `${TITULO}`).replace("$$SUMMARY$$",`${SUMMARY}`).replace("$$PROPS$$", `${PROPS}`).replace("$$COMPONENT$$", `${COMPONENT}`).replace("$$AUTOR$$", `${AUTOR}`).replace("$$HISTORY$$", `${HISTORY}`)
})

export const Base = Template.bind({});
Base.args = {
}
Base.storyName = "Base";