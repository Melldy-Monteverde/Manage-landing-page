/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'main': ['"Be Vietnam Pro"', 'sans-serif']
      },
      colors: {
        'bright-red': '#F25F3A',
        'dark-blue': '#242D52',
        'dark-grayish-blue': '#9095A7',
        'very-dark-blue': '#1D1E25',
        'very-pale-red': '#FFEFEB',
        'vary-light-gray': '#FAFAFA'
      }
    },
    backgroundImage: {
      'close-menu': "url('../images/icon-close.svg')",
      'open-menu': "url('../images/icon-hamburger.svg')"
    }
  },
  plugins: [],
}
