/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        base: ["L15-MediumWide", "sans-serif"],
      },
      screens: {
        'sm': '768px',
        'md': '1080px',
        'lg': '1560px',
        'xl': '1980px',
        '2xl': '2560px'
      },
      aspectRatio: {
        rectangle: [16, 16],
      }
    },
  },
  plugins: [],
}