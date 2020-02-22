module.exports = {
    extends: ['react-app', 'plugin:prettier/recommended'],
    // plugins: ['emotion'],
    rules: {
        'emotion/jsx-import': 'error',
        'emotion/no-vanilla': 'error',
        'emotion/import-from-emotion': 'error',
        'emotion/styled-import': 'error',
        'prettier/prettier': 2,
    }
}
