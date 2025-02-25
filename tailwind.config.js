import primaryColor from './constant/colors'

/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './constant/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        'poppins-regular': ['Poppins_400Regular'],
        'poppins-medium': ['Poppins_500Medium'],
        'poppins-semibold': ['Poppins_600SemiBold'],
        'poppins-bold': ['Poppins_700Bold'],
        'poppins-black': ['Poppins_900Black'],
        'bitter-regular': ['Bitter_400Regular'],
      },
      colors: {
        primary: {
    50: '#f5f7f9',
    100: '#e7ebf2',
    200: '#d5dbe8',
    300: '#b1bed3',
    400: '#97a7c3',
    500: '#7d8db4',
    600: '#6b78a5',
    700: '#5f6996',
    800: '#52577b',
    900: '#444964',
    950: '#2d2f3e',
        },
      },
    },
  },
  plugins: [],
}




