/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme")

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      keyframes: {
        'trans-right': {
          '0%,100%': {transform: 'translateX(0px)'},
          '50%':{transform:'translateX(5px)'}
        }
      },
      animation: {
        'trans-right':'trans-right 1.5s ease-in-out infinite'
      },
      fontFamily: {
        roboto: ["var(--font-roboto)", ...fontFamily.sans],
      },
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B63E96", // 240,86,199
        primaryDark: "#58E6D9", // 80,230,217
      }
    },
  },
  plugins: [],
};
