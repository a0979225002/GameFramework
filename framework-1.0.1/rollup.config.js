// rollup.config.js
import ts from "rollup-plugin-ts";
import {uglify} from "rollup-plugin-uglify";

/**
 * 打包 Template
 */
export default {
    input: ['Template/index.ts'],
    output: {
        file: 'dist/tcc/fcc-template.js',
        exports: "auto",
        format:"cjs"
    },
    plugins: [
        uglify(),
        ts({
                tsconfig: "./Template/tsconfig.json",
                transpiler: "babel"
            },
        ),
    ]
}
