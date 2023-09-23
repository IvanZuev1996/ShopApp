module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [ 
        'eslint:recommended',
        'plugin:react/recommended',
        'prettier'
    ],
    plugins: ['react', 'prettier', 'unused-imports', 'import'],
    // parser: "babel-eslint",
    ignorePatterns: ['build/**'],
    overrides: [
        {
            env: {
                node: true,
            },
            files: [
                '.eslintrc.{js,cjs}',
            ],
            parserOptions: {
                sourceType: 'module',
            },
        },
    ],
    settings: {
        react: {
            version: 'detect'
        }
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
        'react/jsx-filename-extension': [
            2,
            {
                extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
            }
        ],
        'react/jsx-indent': [2, 4],
        'import/no-unresolved': 'off',
        quotes: [2, 'single'],
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'off',
        indent: [2, 4],
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-indent-props': [2, 4],
        'react/jsx-props-no-spreading': 'warn',
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off',
        'no-param-reassign': 'off',
        'react/prop-types': 'off',
        'no-case-declarations': 'off',
        'unused-imports/no-unused-imports': 'error',
        'import/order': [
            'error',
            {
                groups: [
                    'external',
                    'builtin',
                    'internal',
                    'parent',
                    'sibling',
                    'object',
                    'type',
                    'index'
                ],
                pathGroupsExcludedImportTypes: ['builtin'],
                'newlines-between': 'always',
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true
                }
            }
        ],
    },
};
