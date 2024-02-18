/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#333',
          secondary: '#FFEC84',
          tertiary: '#D6D6D6',
          quaternary: '#fff',
        },
      }
    },
  },
  plugins: [],
}
