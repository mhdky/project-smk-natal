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
        'black-transparent': '#0000009a',
        'slate-primary': '#F9F9F9',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      screens: {
        'sm-430': '430px',
        'sm-500': '500px',
        'sm-600': '600px',
        'xl-1365': '1365px',
        'xl-1100': '1100px',
        'xl-1230': '1230px',
      },
    },
  },
  plugins: [],
}

