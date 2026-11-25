/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  // hover: variants only fire on devices that really hover, so taps on
  // phones never leave cards stuck in their hover state.
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      colors: {
        ink: '#070707',
        mint: '#e7feda',
        gallery: '#ffffff',
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        page: '1200px',
      },
      borderRadius: {
        card: '12px',
        btn: '8px',
      },
      transitionTimingFunction: {
        // One strong ease-out for the whole site; replaces Tailwind's weak default.
        out: 'cubic-bezier(0.23, 1, 0.32, 1)',
      },
    },
  },
  plugins: [],
}
