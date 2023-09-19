/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./pages/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app.jsx"
  ],
  theme: {
    extend: {
      colors: {
        'navbar-blue': '#0d1b2a',
        'main-blue': '#1b263b',
        'offwhite': '#c9c9c7',
        'hoverwhite': '#e0e1dd'
      },
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
}

