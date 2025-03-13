/** @type {import('tailwindcss').Config} 
 * export default
 */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          'ndot': ['NDOT', 'sans-serif'],
        },
      }
    },
    plugins: [
      function ({ addUtilities }) {
        addUtilities({
          ".animation-delay-1000": {
            "animation-delay": "1s",
          },
          ".animation-delay-2000": {
            "animation-delay": "2s",
          },
        });
      },
    ],
  }