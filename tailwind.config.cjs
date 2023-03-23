/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        1: 'repeat(auto-fit, minmax(200px, 1fr))',
        2: '1fr 4fr'
      }
    }
  },
  plugins: []
}
