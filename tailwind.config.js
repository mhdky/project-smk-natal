/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-primary': '#6052FF',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      screens: {
        'sm-430': '430px'
      },
    },
  },
  plugins: [],
}

