/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': { min: '10px', max: '30rem' },
      },
      colors: {
        brand: {
          primary: '#333',
          secondary: '#f8f8f8',
          tertiary: '#D6D6D6',
          quaternary: '#fff',
          quinary: '#525558',
          senary: '#A02C2C',
          septnary: '#00FCC3',
        },
      }
    },
  },
  plugins: [],
}
