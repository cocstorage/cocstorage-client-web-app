module.exports = {
  '*.{js,ts,tsx,json,css}': 'prettier --write --config ./.prettierrc',
  '*.{js,ts,tsx}': 'eslint --fix'
};
