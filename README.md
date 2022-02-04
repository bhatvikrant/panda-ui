# How to code this repo from scratch

1. make a folder
2. run: `npm init -y`
3. run `yarn add -D react typescript @types/react`
4. run `npx tsc --init` to generate `tsconfig.json`
    - add the following to tsconfig.json:
    ```js
        "jsx": "react",
        "module": "ESNext",
        "declaration": true,
        "declarationDir": "types",
        "sourceMap": true,
        "outDir": "dist",
        "moduleResolution": "node",
        "allowSyntheticDefaultImports": true,
        "emitDeclarationOnly": true
    ```
5. Create a component to test at `/src/components` for eg. a Button component
    - import this Button component into `src/components/index.tsx` and then export it like: `export { default as Button } from "./Button"`
    - import components into `src/index.ts` and then export it like: `export * from "./components"`

6. Install rollup, run: `yarn add -D rollup @rollup/plugin-node-resolve @rollup/plugin-commonjs @rollup/plugin-typescript rollup-plugin-dts rollup-plugin-postcss tslib`

7. Create `rollup.config.json` in the root with data: 
```js
    import resolve from "@rollup/plugin-node-resolve";
    import commonjs from "@rollup/plugin-commonjs";
    import typescript from "@rollup/plugin-typescript";
    import postcss from "rollup-plugin-postcss";
    import dts from "rollup-plugin-dts";

    const packageJson = require("./package.json");

    export default [
        {
            input: "src/index.ts",
            output: [
                {
                    file: packageJson.main,
                    format: "cjs",
                    sourcemap: true,
                },
                {
                    file: packageJson.module,
                    format: "esm",
                    sourcemap: true,
                },
            ],
            plugins: [
                resolve(),
                commonjs(),
                typescript({ tsconfig: "./tsconfig.json" }),
                postcss(),
            ],
        },
        {
            input: "dist/esm/types/index.d.ts",
            output: [{ file: "dist/index.d.ts", format: "esm" }],
            plugins: [dts()],
            external: [/\.(css|less|scss)$/],
        },
    ];
```

8. add the following to `package.json`
```js
 "scripts": {
    "rollup": "rollup -c" // "-c" means run rollup with a config file (rollup.config.js)
  },
  "main": "dist/cjs/index.js",
  "module": "dist/esm/index.js",
  "files": ["dist"],
  "types": "dist/index.d.ts"
```









> Note: video tutorial at https://www.youtube.com/watch?v=XHQi5a0TmMc&t=58s&ab_channel=AlexEagleson