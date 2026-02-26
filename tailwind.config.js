/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        main: ["Outfit", 'sans-serif'], 
        sec: ["Geist", 'sans-serif'], 
      },
      colors: {
        main1: '#323031',
        main2: '#C1BDB3',
        sec1: '#3D3B3C',
        sec2: '#7161EF'
      }
    },
  },
  plugins: [],
}