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
        animation: {
          'blob': 'blob 7s infinite',
          'border-rotate': 'border-rotate 3s linear infinite',
          'moveLeftRight': 'moveLeftRight 8s linear infinite',
          'moveRightLeft': 'moveRightLeft 8s linear infinite',
          'moveTopBottom': 'moveTopBottom 8s linear infinite',
          'moveBottomTop': 'moveBottomTop 8s linear infinite',
        },
        keyframes: {
          'border-rotate': {
            '0%': { transform: 'rotate(0deg)' },
            '100%': { transform: 'rotate(360deg)' },
          },
          moveLeftRight: {
            '0%': { left: '-10%' },
            '100%': { left: '110%' }
          },
          moveRightLeft: {
            '0%': { right: '-10%' },
            '100%': { right: '110%' }
          },
          moveTopBottom: {
            '0%': { top: '-10%' },
            '100%': { top: '110%' }
          },
          moveBottomTop: {
            '0%': { bottom: '-10%' },
            '100%': { bottom: '110%' }
          },
        },
        backgroundImage: {
          'dotted-pattern': 'radial-gradient(circle, currentColor 2px, transparent 3px)',
        },
      },
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