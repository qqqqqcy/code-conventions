module.exports = {
    // plugins: [],
    env: {
        browser: true,
        es6: true,
    },
    parserOptions: {
        sourceType: 'module',
    },
    overrides: [
        {
            files: ['src/**/*.js'],
            extends: [
                'eslint:recommended',
                'prettier'
            ],
            // rules: { 'prettier/prettier': 'error' },
            // plugins: ['prettier'],
        },
    ],
    rules: {},
}
