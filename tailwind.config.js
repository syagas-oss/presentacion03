/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Roboto', 'sans-serif'],
      },
      colors: {
        'bio-blue': '#005CA9', // Azul médico corporativo
        'bio-light-blue': '#E1F5FE',
        'bio-gold': '#D4AF37', // Dorado sutil
        'bio-dark': '#0B1120', // Fondo oscuro para contraste
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}