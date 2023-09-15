/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '8xl': ['96px', '106px']
    },
    extend: {
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'primary': "#201814",
        "secondary": "#FEBA57",
        "tertiary": "#53b5a6",
        "spec-black": "#1E1E1E",
        "white-400": "rgba(255, 255, 255, 0.80)"
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
      backgroundImage: {
        'brown': "url('/wall.webp')",
        'yellow': "url('yellow-whool.webp')",
        'blue': "url('blue-whool.webp')",
        'pale-blue': "url('blue.webp')",
      },
      screens: {
        "wide": "1440px"
      },
      keyframes: {
        turnOn: {
          '100%': {transform: 'rotateY(360deg)'},
        },
        fadeInOut: {
          '0%, 100%': {opacity: '0'},
          '50%' : {opacity: '1'},
        },
      },
      animation: {
        turnOn: 'turnOn 3s ease-in-out infinite',
        fadeInOut: 'fadeInOut 2s infinite'
      }
    },
  },
  plugins: [],
}