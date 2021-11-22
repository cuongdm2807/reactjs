module.exports = {
  purge: [
    './public/index.html',
    './src/*.js',
    './src/**/*.js',
    './src/**/**/*.js'
  ],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'bluee': '#1A3351',
        'gold': '#E09E4D'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
