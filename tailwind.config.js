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
        // Dark canvas
        ink: {
          950: '#070711',
          900: '#0b0b16',
          800: '#13131f',
          700: '#1c1c2b',
        },
        // Bold accent palette
        brand: {
          violet: '#7c3aed',
          indigo: '#6366f1',
          fuchsia: '#d946ef',
          pink: '#ec4899',
          cyan: '#22d3ee',
          blue: '#3b82f6',
        },
        // legacy tokens kept for backwards compatibility
        main1: '#323031',
        main2: '#C1BDB3',
        sec1: '#3D3B3C',
        sec2: '#7161EF',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(120deg, #7c3aed 0%, #d946ef 45%, #22d3ee 100%)',
        'brand-radial': 'radial-gradient(circle at 50% 0%, rgba(124,58,237,0.25), transparent 60%)',
      },
      boxShadow: {
        glow: '0 0 40px -8px rgba(124,58,237,0.55)',
        'glow-pink': '0 0 40px -8px rgba(217,70,239,0.5)',
        'glow-cyan': '0 0 40px -8px rgba(34,211,238,0.45)',
      },
      keyframes: {
        'gradient-pan': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(30px, -40px) scale(1.08)' },
          '66%': { transform: 'translate(-25px, 25px) scale(0.95)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        shine: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        'gradient-pan': 'gradient-pan 8s ease infinite',
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 18s ease-in-out infinite',
        'fade-up': 'fade-up 0.7s ease-out both',
        marquee: 'marquee 30s linear infinite',
        shine: 'shine 1.1s ease',
      },
    },
  },
  plugins: [],
}
