import typescript from 'rollup-plugin-typescript2';
import vue from 'rollup-plugin-vue';
import clear from 'rollup-plugin-clear';
import scss from 'rollup-plugin-scss';

export default async function config(args) {
    return {
        input: 'src/index.ts',
        output: {
            dir: 'dist',
            format: 'cjs',
            sourcemap: true,
        },
        external: ['vue'],
        plugins: [
            vue(),
            typescript({
                tsconfigOverride: {
                    compilerOptions: {
                        declaration: true,
                    },
                    include: null,
                },
            }),
            clear({
                targets: ['./dist'],
            }),
            scss({
                // Configuración de rollup-plugin-scss
                output: 'dist/bundle.css', // Ajusta la salida según tus necesidades
                include: ['**/*.scss'], // Patrón para incluir archivos SCSS
            })
        ],
    };
}
