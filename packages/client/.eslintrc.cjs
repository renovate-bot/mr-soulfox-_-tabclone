module.exports = {
	env: {browser: true, es2020: true},
	extends: ['plugin:react-hooks/recommended', '../../.eslintrc'],
	parserOptions: {ecmaVersion: 'latest', sourceType: 'module'},
	plugins: ['react-refresh'],
	rules: {
		'react-refresh/only-export-components': 'warn',
		'react/jsx-filename-extension': 'off',
		'react/react-in-jsx-scope': 'off',
		'react/button-has-type': 'off',
	},
};
