# bcfdevops_template_download

## eslint setup

```bash
npm install eslint --save-dev
```

#### add this in `eslint.config.js` file in root directory

```js
import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
    {
        languageOptions: {
            // ecmaVersion: 2022,
            sourceType: 'module', //as inlcude & exclude
            globals: {
                ...globals.browser,
                ...globals.node,
                ...globals.jest,
            },
        },
    },
    pluginJs.configs.recommended,
];
```

#### run this command to check code with eslint

```bash
npx eslint
```

## prettier setup

```bash
npm i --save-dev --save-exact prettier
```

#### create a `.prettierrc` file

```json
{
    "printWidth": 80,
    "tabWidth": 4,
    "useTabs": false,
    "semi": true,
    "singleQuote": true,
    "trailingComma": "es5",
    "bracketSpacing": true,
    "arrowParens": "avoid",
    "endOfLine": "auto"
}
```

#### and a `.prettierignore` file

```
node_modules
dist
coverage
build
```

#### run prettier command

```bash
npx prettier --write .
```
