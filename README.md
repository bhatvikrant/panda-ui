# How to code this repo from scratch

1. make a folder
2. run: `npm init -y`
3. run `yarn add -D react typescript @types/react`
4. run `npx tsc --init` to generate `tsconfig.json`
    - add the following to tsconfig.json:
    ```json
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
```json
 "scripts": {
    "rollup": "rollup -c" // "-c" means run rollup with a config file (rollup.config.js)
  },
  "main": "dist/cjs/index.js",
  "module": "dist/esm/index.js",
  "files": ["dist"],
  "types": "dist/index.d.ts"
```

9. Push all the code to an empty public github repository.
10. Now its time to publish this library to NPM as a package
    - update package.json with: 
        ```json
        "name": "@YOUR_GITHUB_USERNAME/YOUR_GITHUB_REPO_NAME", // eg. "name": "@bhatvikrant/panda-ui",
        "publishConfig": {
             "registry": "https://npm.pkg.github.com/YOUR_GITHUB_USERNAME"
        }
        ```
    - run `cd ~ && nano .npmrc`
    then paste the following in `.npmrc`
    ```bash
        registry=https://registry.npmjs.org/
        @YOUR_GITHUB_USERNAME:registry=https://npm.pkg.github.com/
        //npm.pkg.github.com/:_authToken=YOUR_AUTH_TOKEN
    ```








> Note: video tutorial at https://www.youtube.com/watch?v=XHQi5a0TmMc&t=58s&ab_channel=AlexEagleson