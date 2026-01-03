/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9f0',
          100: '#dbf0db',
          200: '#b8e1b8',
          300: '#88cc88',
          400: '#5cb85c',
          500: '#3d943d',
          600: '#2e7a2e',
          700: '#256125',
          800: '#1f4f1f',
          900: '#1a421a',
        }
      }
    },
  },
  plugins: [],
}
