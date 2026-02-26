/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        main: ['"Montserrat"', 'sans-serif'], 
        sec: ['"Blinker"', 'sans-serif'], 
      },
      colors: {
        main1: '#EBE5C2',
        main2: '#504B38',
        sec1: '#F8F3D9',
        sec2: '#B9B28A'
      }
    },
  },
  plugins: [],
}