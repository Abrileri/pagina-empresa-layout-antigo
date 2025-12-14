/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          orange: '#FF7A00',
          darkOrange: '#E65100',
          blue: '#1E3A8A',
          dark: '#111827',
          light: '#F3F4F6'
        }
      }
    },
  },
  plugins: [],
}