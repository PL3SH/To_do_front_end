/** @type {import('tailwindcss').Config} */
export default {
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
        },
        keyframes: {
          'border-rotate': {
            '0%': { transform: 'rotate(0deg)' },
            '100%': { transform: 'rotate(360deg)' },
          },
        },
        backgroundImage: {
          'dotted-pattern': 'radial-gradient(circle, currentColor 2px, transparent 3px)',
        },
      },
    },
    plugins: [],
  }