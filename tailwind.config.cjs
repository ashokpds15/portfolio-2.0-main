/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#19191f',
        darker: "#171b21"
      },
      fontFamily: {
        body: ['Catamaran', 'sans-serif'],
        header: ['Raleway', 'sans-serif']
      },
      backgroundImage: {
        'hero': "url('/bg1.jpg')"
      }
    },
  },
  plugins: [],
}
