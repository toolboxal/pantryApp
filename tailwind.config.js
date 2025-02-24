import primaryColor from './constant/colors'

/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins_400Regular'],
        'poppins-bold': ['Poppins_700Bold'],
        'poppins-black': ['Poppins_900Black'],
        bitter: ['Bitter_400Regular'],
      },
      colors: {
        primary: {
          50: '#faf5f7',
          100: '#f5eef1',
          200: '#eddde4',
          300: '#dfc2ce',
          400: '#cea1b3',
          500: '#b87c93',
          600: '#a26075',
          700: '#8a4c5e',
          800: '#73414f',
          900: '#613a45',
          950: '#391e26',
        },
      },
    },
  },
  plugins: [],
}
