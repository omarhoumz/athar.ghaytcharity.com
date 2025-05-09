/** @type {import("prettier").Options} */
const config = {
  endOfLine: 'lf',
  semi: false,
  singleQuote: true,
  jsxSingleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',

  plugins: ['prettier-plugin-tailwindcss'],
}

module.exports = config
