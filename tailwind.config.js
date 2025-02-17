/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoalGray: '#333333',
        softWhite: '#F5F5F5',
        mutedSilver: '#B0B0B0',
        slateBlue: '#6A7BA2',
        warmBeige: '#E6D5C3',
        deepBurgundy: '#800020',
        oliveGreen: '#556B2F',
      }
    },
  },
  plugins: [],
}

