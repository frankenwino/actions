// import globals from 'globals';
// import pluginJs from '@eslint/js';
// import tseslint from 'typescript-eslint';
// import pluginReact from 'eslint-plugin-react';

// export default [
//   { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
//   { files: ['**/*.js'], languageOptions: { sourceType: 'commonjs' } },
//   { languageOptions: { globals: globals.browser } },
//   pluginJs.configs.recommended,
//   ...tseslint.configs.recommended,
//   pluginReact.configs.flat.recommended,
// ];

import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { files: ['**/*.js'], languageOptions: { sourceType: 'commonjs' } },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    settings: {
      react: { version: 'detect' },
    },
    rules: { 'react/react-in-jsx-scope': 'off' },
  },
];
