module.exports = {
    root: true,
    globals: {
        defineModel: 'readonly',
    },
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2020,
        "ecmaFeatures": {
            "jsx": true,
            "modules": true,
            "experimentalObjectRestSpread": true
        },
        sourceType: 'module',
        project: './tsconfig.eslint.json',
        tsconfigRootDir: __dirname,
    },
    extends: [
        'standard',
        'plugin:sonarjs/recommended',
        'plugin:prettier/recommended',
        'plugin:solid/recommended'
    ],
    env: {
        node: true,
        browser: true,
        es6: true,
    },
    plugins: ['@typescript-eslint', 'sonarjs', 'solid', 'prettier'],
    rules: {
        'no-var': 'error',
        'prettier/prettier': ['error', { singleQuote: true, arrowParens: "avoid", "parser": "typescript" }],
        // allow paren-less arrow functions
        'arrow-parens': ['error', 'as-needed'],
        // set maximum line characters
        'max-len': [
            'error',
            {
                code: 140,
                ignoreUrls: true,
                ignoreTemplateLiterals: true,
                ignoreTrailingComments: true,
            },
        ],
        complexity: ['error', 32],
        quotes: [
            'error',
            'single',
            {
                avoidEscape: true,
                allowTemplateLiterals: true,
            },
        ],
        'no-console': 'off',
        'comma-dangle': [
            'error',
            {
                arrays: 'always-multiline',
                objects: 'always-multiline',
                imports: 'always-multiline',
                exports: 'always-multiline',
                functions: 'only-multiline',
            },
        ],
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-return-assign': 'off',
        'no-unused-vars': 'error',
        'no-empty': 'error',
        'array-bracket-spacing': ['error', 'never'],
        'object-curly-spacing': ['error', 'always'],
        'no-return-await': 'warn',
        'object-shorthand': ['error', 'always'],
        'no-extra-semi': 'error',
        'prefer-const': [
            'error',
            {
                destructuring: 'all',
                ignoreReadBeforeAssign: true,
            },
        ],
        'no-prototype-builtins': 'off',
        'no-void': 'off',
        'no-case-declarations': 'off',
        indent: [
            'error',
            2,
            {
                ...require('eslint-config-standard').rules.indent[2],
                flatTernaryExpressions: true,
                offsetTernaryExpressions: false,
            },
        ],
        'sort-imports': [
            'warn',
            {
                ignoreDeclarationSort: true,
                ignoreCase: true,
            },
        ],
        'multiline-ternary': 'off',
        'sonarjs/cognitive-complexity': 'off',
        'sonarjs/no-duplicate-string': 'off',
    },
    overrides: [
        {
            files: ['**/*.ts'],
            rules: {
                // Can't overload function exports with this enabled
                'import/export': 'off',
                // False positives on types
                'no-undef': 'off',
                quotes: 'off',
                '@typescript-eslint/quotes': [
                    'error',
                    'single',
                    {
                        avoidEscape: true,
                        allowTemplateLiterals: true,
                    },
                ],
                indent: 'off',
                'func-call-spacing': 'off',
                '@typescript-eslint/func-call-spacing':
                    require('eslint-config-standard').rules['func-call-spacing'],
                // Handled by tsc
                'no-redeclare': 'off',
                'no-use-before-define': 'off',
                '@typescript-eslint/no-use-before-define': ['error', 'nofunc'],
                'no-useless-constructor': 'off',
                '@typescript-eslint/no-useless-constructor': ['error'],
                // Enabled in tsconfig
                'no-unused-vars': 'off',
                '@typescript-eslint/prefer-namespace-keyword': 'error',
                '@typescript-eslint/adjacent-overload-signatures': 'error',
                // '@typescript-eslint/ban-types': 'error',
                '@typescript-eslint/member-ordering': 'error',
                '@typescript-eslint/type-annotation-spacing': 'error',
                '@typescript-eslint/no-inferrable-types': 'error',
                '@typescript-eslint/unified-signatures': 'error',
                '@typescript-eslint/no-invalid-this': 'error',
                '@typescript-eslint/consistent-type-imports': 'error',
                '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
                '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
                // '@typescript-eslint/no-unnecessary-condition': 'error',
                '@typescript-eslint/prefer-includes': 'error',
                // '@typescript-eslint/prefer-nullish-coalescing': 'warn',
                '@typescript-eslint/prefer-optional-chain': 'warn',
                '@typescript-eslint/prefer-string-starts-ends-with': 'error',
                '@typescript-eslint/prefer-ts-expect-error': 'warn',
                '@typescript-eslint/restrict-plus-operands': 'error',
            },
        },
        {
            files: '**/*.d.ts',
            rules: {
                'import/no-duplicates': 'off',
            },
        },
    ],
}
