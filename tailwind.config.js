/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: '#111111', soft: '#1B1B1B' },
        gold: { DEFAULT: '#C4A166', dark: '#947443' },
        bone: '#F5F3EF',
        ash: '#B8B8B8',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: { brand: '0.32em' },
    },
  },
  plugins: [],
}
