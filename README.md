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
4. Create a component to test at `/src/components` for eg. a Button component
    - import this Button component into `src/components/index.tsx` and then export it like: `export { default as Button } from "./Button"`
    - import components into `src/index.ts` and then export it like: `export * from "./components"`













> Note: video tutorial at https://www.youtube.com/watch?v=XHQi5a0TmMc&t=58s&ab_channel=AlexEagleson