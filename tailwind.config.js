/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        benzin: "benzin",
        gothic: "gothic",
      },
      backgroundImage: {
        'glare': "url('../public/glare.png')",
      }
    },
  },
  plugins: [],
}
