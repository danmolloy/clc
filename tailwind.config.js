const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "custom": ["Merriweather", ...defaultTheme.fontFamily.serif],
        "handwriting": ["Dancing Script", ...defaultTheme.fontFamily.serif]
      }
    },
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        'h1': { fontSize: theme('fontSize.4xl') },
        'h2': { fontSize: theme('fontSize.3xl') },
        'h3': { fontSize: theme('fontSize.2xl') },
      })
    })
  ],
}
