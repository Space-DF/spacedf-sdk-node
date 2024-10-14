import globals from 'globals';
import pluginJs from '@eslint/js';
import tsEslint from 'typescript-eslint';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

const globalsConfig = {
    ...globals.node,
    ...globals.jest,
};

const rules = {
    'no-empty': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
};

const local = {
    files: ['src/_shims/**/*.ts', 'src/shims/*.ts', 'src/*.ts'],
    rules: {
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-namespace': 'off',
    },
};
export default [
    { languageOptions: { globals: globalsConfig } },
    pluginJs.configs.recommended,
    ...tsEslint.configs.recommended,
    eslintPluginPrettierRecommended,
    { rules },
    {
        ...local,
    },
];
