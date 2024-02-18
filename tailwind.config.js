/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#FBDE3F',
          secondary: '#FFEC84',
          tertiary: '#D6D6D6',
          quaternary: '#fff',
        },
      }
    },
  },
  plugins: [],
}
