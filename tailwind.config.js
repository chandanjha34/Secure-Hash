/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        '10xl': '10rem',  // Custom size
        '11xl': '12rem',  // Custom size
        '12xl': '14rem',  // Custom size
      },
      colors: {
        'black': '#000000',
        'white': '#FFFFFF',
        'blue': '#001f3f',
        'orange':'#BA6012',
      },
    },
  },
  plugins: [],
}
