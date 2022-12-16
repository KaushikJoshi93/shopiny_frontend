/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'kcursive': ['Cedarville Cursive', ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        "slide-in": {
          "0%": {
            "-webkit-transform": "translateX(9%)",
            transform: "translateX(9%)",
          },
          "100%": {
            "-webkit-transform": "translateX(-20%)",
            transform: "translateX(-20%)",
          },
        },
      },
      animation: {
        "slide-in": "slide-in 0.5s ease-in",
      },

    },
  },
  plugins: [],
}