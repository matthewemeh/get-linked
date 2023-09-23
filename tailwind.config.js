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
        'electric-violet-1': '#903aff',
        'electric-violet-2': '#9a39ff',
        'razzle-dazzle-rose': '#ff26b9',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        'unica-one': ['Unica One', 'cursive'],
        montserrat: ['Montserrat', 'sans-serif'],
        'clash-display': ['Clash Display', 'sans-serif'],
      },
      transitionDuration: {
        400: '400ms',
      },
      zIndex: {
        1: '1',
        2: '2',
        '-1': '-1',
        '-2': '-2',
        '-3': '-3',
      },
      screens: {
        'x-large': { max: '1440px' },
        large: { max: '1200px' },
        '1105px': { max: '1105px' },
        laptops: { max: '1024px' },
        'small-laptops': { max: '890px' },
        tablets: { max: '768px' },
        phones: { max: '600px' },
        'small-phones': { max: '430px' },
        'x-small-phones': { max: '340px' },
      },
    },
  },
  plugins: [],
};
