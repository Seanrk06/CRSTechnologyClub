/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'tealLight': '#D4ECDD',
        'navyLight': '#345B63',
        'navyDark': '#152D35',
        'customBlack': '#020201',
        'teal': 'colors.teal',
        'cyan': 'colors.cyan',
      },
      backgroundImage: {
        'hero-pattern': "url('./assets/andy-holmes-rCbdp8VCYhQ-unsplash.jpg')",
      },
      fontFamily: {
        'Roboto': ['Roboto Slab', 'serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}