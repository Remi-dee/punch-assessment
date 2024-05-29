/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-purple": "#525AA0",
      },
      fontFamily: {
        switzer: ["Switzer", "sans-serif"],
      },
    },
  },
  plugins: [],
};
