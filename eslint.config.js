import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
    {
        languageOptions: {
            // ecmaVersion: 2022,
            sourceType: 'module',
            globals: {
                ...globals.browser,
                ...globals.node,
                ...globals.jest,
            },
        },
    },
    pluginJs.configs.recommended,
];
