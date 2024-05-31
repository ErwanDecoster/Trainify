/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'black': '#11050C',
        'white': '#FAF9FF',
        'pink': '#FF919A',
        'purple': '#7F6A93',
        'orange': '#F4AC45',
      }
    },
  },
  plugins: [],
}