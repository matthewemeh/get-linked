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
      keyframes: {
        'fade-left': {
          from: { marginLeft: '10%', opacity: '0' },
          to: { marginLeft: '0%', opacity: '1' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        rotate: {
          from: { transform: 'rotate(0)' },
          to: { transform: 'rotate(360deg)' },
        },
        'reverse-rotate': {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0)' },
        },
        'ping-lights': {
          '75%, 100%': {
            transform: 'scale(2)',
            opacity: '0',
          },
        },
      },
      animation: {
        rotate: 'rotate 400ms ease-in-out',
        'fade-left': 'fade-left 1s ease-in-out',
        'fade-in': 'fade-in 1500ms ease-in-out',
        'reverse-rotate': 'reverse-rotate 400ms ease-in-out',
        'ping-lights': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite alternate',
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
