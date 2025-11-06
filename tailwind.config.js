/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#9AE66E',
        'primary-light': '#B4F08E',
        'primary-lighter': '#CEFAAE',
        accent: '#40E0D0',
        'accent-light': '#5FE8D8',
        'accent-dark': '#2BC4B4',
        surface: '#F8FAFC',
        'surface-light': '#F1F5F9',
        base: '#FFFFFF',
        'base-light': '#F8FAFC',
        'natural-green': '#9AE66E',
        'natural-cyan': '#40E0D0',
        'sky-turquoise': '#40E0D0',
        'cactus-green': '#9AE66E',
        dark: '#0F172A',
        'dark-light': '#1E293B',
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans JP', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

