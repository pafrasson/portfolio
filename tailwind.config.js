/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme")

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        'trans-right': {
          '0%,100%': { transform: 'translateX(0px)' },
          '50%': { transform: 'translateX(5px)' }
        },
        wiggle: {
          '100%, 0%': { transform: 'rotate(-0.5deg)' },
          '50%': { transform: 'rotate(0.5deg)' },
        }
      },
      animation: {
        'trans-right': 'trans-right 1.5s ease-in-out infinite',
        'wiggle': 'wiggle 1.5s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite'
      },
      backgroundImage: {
        circularLight: 'repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #f5f5f5 5px, #f5f5f5 100px);',
        circularDark: 'repeating-radial-gradient(rgba(255,255,255,0.4) 2px, #1b1b1b 8px, #1b1b1b 100px);'
      },
      fontFamily: {
        mono: ["var(--font-roboto)", ...fontFamily.mono],
      },
      fontSize: {
        '8xl': '4rem', // Ajuste o tamanho conforme necessário
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
