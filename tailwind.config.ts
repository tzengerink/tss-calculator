/** @type {import('tailwindcss').Config} */
export default {
  content: ['./**/*.{vue,ts}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['Roboto Mono', 'ui-monospace'],
      },
      colors: {
        cpblack: '#000000',
        cppurple: '#7B4B94',
        cppink: '#FF70A6',
        cpgray: '#CDD3CE',
        cpwhite: '#FFFFFF',
      },
    },
  },
  plugins: [],
}
