# TypeScript Basics

### Set up
#### Download
- download and install typescript `npm install -g typescript`
- download and install visual studio code

#### configure tsconfig.json
- create a file `tsconfig.json`
- add the following in to the `tsconfig.json`

   ```
  {
    "compilerOptions": {
        "outDir": "./dist/",        // path to output directory
        "sourceMap": true,          // allow sourcemap support
        "strictNullChecks": true,   // enable strict null checks as a best practice
        "module": "es6",            // specify module code generation
        "jsx": "react",             // use typescript to transpile jsx to js
        "target": "es5",            // specify ECMAScript target version
        "allowJs": true             // allow a partial TypeScript and JavaScript codebase
    },
    "include": [
        "../src/"
    ]
  }
  ```

#### Compile
- compile typescript with the command `tsc path/filename.ts` 
    - `filename.js` is generated
- compile typescript in watch mode with `tsc path/filename.ts -w` to autocompile changes saved to code.
- do `node path/filename.js` to execute the js file.

- **To run this project,  do `tsc src/app.ts -w` and `node src/app.js`**

### TypeScript Basics
#### Functions in TypeScript
#### Objects in TypeScript

``` 
let icecream: {
    flavor:string,
    toppings: string[],
    price: number,
    getName(): string
}    
```
#### Arrays


#### Links