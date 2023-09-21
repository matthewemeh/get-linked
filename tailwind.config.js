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
        ebony: '#100b20',
        heliotrope: '#d434fe',
        'black-pearl': '#18112b',
        'electric-violet': '#903aff',
        'razzle-dazzle-rose': '#ff26b9',
      },
      fontFamily: {
        'unica-one': ['Unica One', 'cursive'],
        montserrat: ['Montserrat', 'sans-serif'],
        'clash-display': ['Clash Display', 'sans-serif'],
      },
      zIndex: {
        1: '1',
        2: '2',
        '-1': '-1',
        '-2': '-2',
        '-3': '-3',
      },
      screens: {},
    },
  },
  plugins: [],
};
