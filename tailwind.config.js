/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors:{
        "footerColor":"#F1F5F9",
      },
      fontFamily: {
        'kcursive': ['Cedarville Cursive', ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        "slide-in": {
          "0%": {
            "-webkit-transform": "translateX(50%)",
            transform: "translateX(50%)",
          },
          "100%": {
            "-webkit-transform": "translateX(0%)",
            transform: "translateX(0%)",
          },
        },
        "slide-out": {
          "0%": {
            "-webkit-transform": "translateX(0%)",
            transform: "translateX(0%)",
          },
          "100%": {
            "-webkit-transform": "translateX(50%)",
            transform: "translateX(50%)",
          },
        },

        "rotate-right":{
          "0%":{
            "-webkit-transform": "rotate(0deg)",
            transform: "rotate(0deg)",
          },
          "100%":{
            "-webkit-transform": "rotate(132deg)",
            transform: "rotate(132deg)",
          }
        },

        "rotate-left":{
          "0%":{
            "-webkit-transform": "rotate(0deg)",
            transform: "rotate(0deg)",
          },
          "100%":{
            "-webkit-transform": "rotate(-132deg)",
            transform: "rotate(-132deg)",
          }
        },


      },
      animation: {
        "slide-in": "slide-in 0.5s ease-in",
        "slide-out": "slide-in 0.5s ease-in",
        "rotate-right":"rotate-right 0.5s ease",
        "rotate-left":"rotate-left 0.5s ease",
      },

    },
  },
  plugins: [],
}