/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        haiti: '#150e28',
        heliotrope: '#d434fe',
        'electric-violet': '#903aff',
      },
      fontFamily: {
        'unica-one': ['Unica One', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        'clash-display': ['Clash Display', 'sans-serif'],
      },
      screens: {},
    },
  },
  plugins: [],
};
