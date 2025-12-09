/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nestle: {
          blue: '#005CB9', // NHSc Corporate Blue
          light: '#E6F0FA',
          accent: '#00A3E0', // Medical Cyan
          gold: '#C5A900', // Subtle gold hint
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'slow-spin': 'spin 20s linear infinite',
      }
    },
  },
  plugins: [],
}