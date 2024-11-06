/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        'custom-wide': '350px', // Add more as needed
        'custom-wider': '400px',
      },
    },
  },
  plugins: [],
}
