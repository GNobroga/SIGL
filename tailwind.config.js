/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#9438F5',
          secondary: '#E8EBED',
          tertiary: '#fff',
        },
      }
    },
  },
  plugins: [],
}
