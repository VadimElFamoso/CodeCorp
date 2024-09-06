/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      animation: {
        'animate-cta': 'spin 3s infinite;',
      },
      transitionDuration: {
        '2000': '2000ms',
      },
      colors:{
        'primary': '#F199C5',
        'secondary': '#141313',
        'tertiary': '#F1F2EE',
      },
      listStyleImage: {
        check: "url('/public/check.svg')",
      },
      keyframes:{
        logobounce:{
          '0%, 100%': { transform: 'translateY(-50px);' },
        }
      }
    },
    fontFamily:{
      'ethnocentric': ['ethnocentric', 'sans-serif'],
      'area' : ['area-normal', 'sans-serif'],
      'areaextended' : ['area-extended', 'sans-serif']
    }
  },
  plugins: [],
}